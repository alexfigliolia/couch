const fs = require("fs");
const { resolve } = require("path");
const { getDefaultConfig, mergeConfig } = require("@react-native/metro-config");
const modulePaths = require("./modulePaths");

const {
  resolver: { sourceExts, assetExts },
} = getDefaultConfig();

const ROOT_FOLDER = resolve(__dirname);

/**
 * Metro configuration
 * https://facebook.github.io/metro/docs/configuration
 *
 * @type {import('metro-config').MetroConfig}
 */
const config = {
  transformer: {
    getTransformOptions: () => {
      const moduleMap = {};
      modulePaths.forEach(path => {
        if (fs.existsSync(path)) {
          moduleMap[resolve(path)] = true;
        }
      });
      return {
        preloadedModules: moduleMap,
        transform: {
          inlineRequires: { blockList: moduleMap },
        },
      };
    },
    babelTransformerPath: require.resolve("react-native-svg-transformer"),
  },
  resolver: {
    assetExts: assetExts.filter(ext => ext !== "svg"),
    sourceExts: [...sourceExts, "svg"],
  },
  projectRoot: ROOT_FOLDER,
};

module.exports = mergeConfig(getDefaultConfig(__dirname), config);
