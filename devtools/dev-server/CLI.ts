import { DevServer } from "./DevServer";

(async () => {
  await DevServer.run();
})().catch(console.log);
