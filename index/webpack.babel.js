import webpack from "webpack";

export default {
  mode: "development",
  watch: true,
  entry: {
    main: "./src/es/main.js",
  },
  output: {
    path: __dirname + "/docs/js",
    filename: "[name].js"
  },
  module: {
    rules: [
      {
        test: /\.js?$/,
        exclude: /node_modules/,
        loader: "babel-loader",
      },
    ]
  },
}
