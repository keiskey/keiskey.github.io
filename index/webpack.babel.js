import webpack from "webpack";

export default {
  mode: "development",
  watch: true,
  entry: {
    main: "./es/main.js",
  },
  output: {
    path: __dirname + "/js",
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
