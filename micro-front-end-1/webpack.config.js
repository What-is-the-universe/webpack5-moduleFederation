const HtmlWebpackPlugin = require("html-webpack-plugin");
const ModuleFederationPlugin = require("webpack/lib/container/ModuleFederationPlugin");

module.exports = {
  mode: "development",
  devServer: {
    port: 8081,
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./public/index.html",
    }),
    new ModuleFederationPlugin({
      // 当前APP作为remote暴露组件时的APP的名字
      name: "microFrontEnd1",
      // 所有被暴露的组件会打包到这个文件中，同理使用者也需要从这里引入
      filename: "remoteEntry.js",
      /**
       * 定义该库作为remote时，要暴露出去的组件。
       * 左边是相对路径和组件名字（其他库使用时候），
       * 右边是该组件在本库内的路径
       */
      exposes: {
        "./MicroFrontEnd1Index": "./src/index",
      },
    }),
  ],
};
