import { ChildProcess } from "@figliolia/child-process";

export class DevServer extends ChildProcess {
  private static CPs: ChildProcess[] = [];

  public static async run() {
    this.CPs.push(
      new ChildProcess(
        "npx react-native start --reset-cache --experimental-debugger",
      ),
      new ChildProcess("npx react-native-module-paths"),
    );
    this.bindExits(this.CPs.map(CP => CP.process));
    try {
      await Promise.all(this.CPs.map(CP => CP.handler));
    } catch (error) {
      this.CPs.forEach(CP => CP.process.kill());
    }
  }
}
