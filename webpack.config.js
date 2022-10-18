const path = require("path");
const HTMLWebpackPlugin = require("html-webpack-plugin");

module.exports = {
   entry: path.resolve(__dirname, "./src/index.js"),
   output: {
      filename: "[name].bundle.js",
      path: path.resolve(__dirname, "dist"),
      assetModuleFilename: "images/[hash][ext]",
      clean: true,
   },
   devServer: {
      port: 3000,
      hot: true,
      open: true,
   },
   plugins: [
      new HTMLWebpackPlugin({
         static: {
            directory: path.resolve(__dirname, "dist"),
         },
         template: "./src/index.html",
         filename: "index.html",
      }),
   ],
   module: {
      rules: [
         {
            test: /\.css$/,
            use: ["style-loader", "css-loader"],
         },
         {
            test: /\.s[ca]ss$/,
            use: ["style-loader", "css-loader", "sass-loader"],
         },
         {
            test: /.(jpg|png|jpeg|gif)$/,
            type: "asset/resource",
                
         },
      ],
   },
};
