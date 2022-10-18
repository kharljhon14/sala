const path = require("path");
const HTMLWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
   entry: path.resolve(__dirname, "./src/index.js"),
   output: {
      filename: "[name].bundle.js",
      path: path.resolve(__dirname, "dist"),
      assetModuleFilename: "images/[hash][ext]",
      clean: true,
   },
   devServer: {
      static: {
         directory: path.resolve(__dirname, "dist"),
      },
      port: 3000,
      hot: true,
      open: true,
      historyApiFallback: true,
   },
   plugins: [
      new HTMLWebpackPlugin({
         static: {
            directory: path.resolve(__dirname, "dist"),
         },
         template: "./src/index.html",
         filename: "index.html",
      }),
      new MiniCssExtractPlugin(),
   ],
   module: {
      rules: [
         {
            test: /\.css$/,
            use: [MiniCssExtractPlugin.loader, "css-loader"],
         },
         {
            test: /\.s[ca]ss$/,
            use: [MiniCssExtractPlugin.loader, "css-loader", "sass-loader"],
         },
         {
            test: /.(jpg|png|jpeg|gif)$/,
            type: "asset/resource",
         },
      ],
   },
};
