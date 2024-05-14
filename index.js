import { AppRegistry } from "react-native";
import { name as appName } from "./app.json";
import { App } from "./src/Root/App";

if (__DEV__) {
  const { RNModulePaths } = require("react-native-module-paths");
  RNModulePaths.registerAssets();
}

AppRegistry.registerComponent(appName, () => App);
