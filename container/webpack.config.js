const HtmlWebpackPlugin = require("html-webpack-plugin");
const ModuleFederationPlugin = require("webpack/lib/container/ModuleFederationPlugin");

module.exports = {
  mode: "development",
  devServer: {
    port: 8080,
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./public/index.html",
    }),
    new ModuleFederationPlugin({
      // 当前APP作为remote暴露组件时的APP的名字
      name: "container",
      // 定义该库作为host时可能要引用的remote
      remotes: {
        microFrontEnd1: "microFrontEnd1@http://localhost:8081/remoteEntry.js",
        microFrontEnd2: "microFrontEnd2@http://localhost:8082/remoteEntry.js",
        microFrontEnd3: "microFrontEnd3@http://localhost:8083/remoteEntry.js",
      },
    }),
  ],
};
