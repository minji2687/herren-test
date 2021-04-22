module.exports = {
  module: {
    rules: [
      {
        test: /\.scss$/,
        use: ["vue-style-loader", "css-loader", "sass-loader"],
      },
    ],
    loaders: [
      {
        test: /\.js$./,
        loader: "babel-loader",
        query: {
          presets: ["es6"],
        },
      },
    ],
  },
};
