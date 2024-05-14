import { Builder } from "../build/Builder";

(async () => {
  await Builder.run();
})().catch(console.log);
