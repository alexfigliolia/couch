module.exports = {
  presets: ["module:@react-native/babel-preset"],
  env: {
    production: {
      plugins: ["transform-remove-console"],
    },
  },
  comments: false,
  plugins: [
    "@babel/plugin-proposal-class-static-block",
    [
      "module-resolver",
      {
        root: ["."],
        extensions: [".js", ".ts", ".tsx", ".json"],
        alias: {
          Components: "./src/Components",
          Dimensions: "./src/Dimensions",
          Generics: "./src/Generics",
          Hooks: "./src/Hooks",
          Icons: "./src/Icons",
          Models: "./src/Models",
          Root: "./src/Root",
          Routing: "./src/Routing",
          Screens: "./src/Screens",
          Shapes: "./src/Shapes",
          State: "./src/State",
          Styles: "./src/Styles",
          Themes: "./src/Themes",
          Tools: "./src/Tools",
          Types: "./src/Types",
        },
      },
    ],
  ],
};
