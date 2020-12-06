const path = require("path");

console.log(__dirname)
module.exports = {
  // entry: path.resolve(__dirname, "src", "public", "js", "main.js"),
  entry: "./src/public/js/main.js",
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "bundle.js"
  },
  mode: "development",
  // module: {
  //   rules: [
  //     {
  //       test: /\.jsx?/,
  //       exclude: /node_modules/,
  //       // loader: [
  //       //   {
  //       //     // loader: "babel-loader",
  //       //     // query: {
  //       //     //   presets: ["@babel/preset-react"]
  //       //     // }
  //       //   }
  //       // ]
  //     }
  //   ]
  // }
};