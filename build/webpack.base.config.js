const path = require("path")

// plugins
const HtmlWebpackPlugin = require("html-webpack-plugin")
const CopyWebpackPlugin = require("copy-webpack-plugin")
const HappyPack = require("happypack")
const webpack = require("webpack")

const resolve = p => path.resolve(__dirname, "..", p)

module.exports = {
  entry: {
    app: [resolve("src/main.js")],
  },

  output: {
    publicPath: "/",
  },

  resolve: {
    extensions: [".js"],

    modules: [
      "node_modules",
      resolve("src"),
    ],

    alias: {
      "@": resolve("src/pages"),
      "comp": resolve("src/components"),
    },
  },

  optimization: {
    // 可以将输出中相同的依赖抽离，这样可以缩小输出文件的大小。
    splitChunks: {
      chunks: "all",
    },
  },

  module: {
    // 这里的 rule 所使用的 loader 仅当使用 import 引入时才需要用到
    rules: [
      {
        test: /\.js$/,
        use: "happypack/loader?id=js",
        exclude: /node_modules/,
      },

      {
        test: /\.styl(us)?/,
        use: [
          "style-loader",
          "css-loader",
          {
            loader: "stylus-loader",
            options: {
              import: [resolve("config/config.styl")],
            },
          },
        ],
      },
    ],
  },

  plugins: [
    new HappyPack({
      id: "js",
      loaders: [ "babel-loader" ],
    }),

    new webpack.ProvidePlugin({
      "React": "react",
      "$": [resolve("src/util"), "domSelector"],
    }),

    new HtmlWebpackPlugin({
      template: resolve("index.html"),
      filename: "index.html", // default
    }),

    // 拷贝静态文件夹，不用任何处理
    new CopyWebpackPlugin([{
      from: "static",
      to: "static",
    }]),
  ],
}
