import { mkdirSync, writeFileSync } from "node:fs";
import { join, resolve } from "node:path";
import { parseArgs } from "node:util";
import { ChildProcess } from "@figliolia/child-process";
import babelConfig from "../../babel.config";
import TSConfig from "../../tsconfig.json";

export class CreatePackage {
  public static ROOT = resolve(__dirname, "../../");
  public static SRC = join(this.ROOT, "src");
  public static TSCONFIG_PATH = join(this.ROOT, "tsconfig.json");

  public static async run() {
    const name = this.parseName();
    mkdirSync(join(this.SRC, name));
    const tsconfig = this.modifyTSConfig(name);
    const babelconfig = this.modifyBabelConfig(name);
    this.writeFile("tsconfig.json", tsconfig);
    if (babelconfig) {
      this.writeFile("babel.config.js", babelConfig, "module.exports = ");
    }
    await ChildProcess.execute(
      `npx eslint --fix ${this.ROOT}/tsconfig.json ${this.ROOT}/babel.config.js`,
    );
  }

  private static modifyTSConfig(name: string) {
    const { compilerOptions } = TSConfig;
    const packageKey = `${name}/*`;
    const packagePath = `./${name}/*`;
    const newPaths: Record<string, string[]> = {
      ...compilerOptions.paths,
      [packageKey]: [packagePath],
    };
    return {
      ...TSConfig,
      compilerOptions: {
        ...compilerOptions,
        paths: this.sortObject(newPaths),
      },
    };
  }

  private static modifyBabelConfig(name: string) {
    const { plugins } = babelConfig;
    for (const plugin of plugins) {
      if (
        Array.isArray(plugin) &&
        plugin[0] === "module-resolver" &&
        typeof plugin[1] !== "string"
      ) {
        const config = plugin[1];
        const aliases = {
          ...config.alias,
          [name]: `./src/${name}`,
        };
        config.alias = this.sortObject(aliases);
        return babelConfig;
      }
    }
  }

  private static parseName() {
    const args = parseArgs({
      args: process.argv.slice(2),
      options: {
        name: {
          short: "n",
          type: "string",
        },
      },
    });
    const { name } = args.values;
    if (!name) {
      console.log("A --name argument is required");
      process.exit(0);
    }
    return name;
  }

  private static sortObject<T extends Record<string, any>>(obj: T): T {
    return Object.keys(obj)
      .sort()
      .reduce<Record<string, string[]>>((acc, next) => {
        acc[next] = obj[next];
        return acc;
      }, {}) as unknown as T;
  }

  private static writeFile<T>(name: string, content: T, prefix = "") {
    writeFileSync(
      join(this.ROOT, name),
      `${prefix}${JSON.stringify(content, null, 2)}`,
    );
  }
}
