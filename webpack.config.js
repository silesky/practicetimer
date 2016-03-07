module.exports = {
  context: __dirname + "/app",
  entry: {
    app:"./app.js",
    test: "../test/test.js",
  },
  output: {
    filename: "[name].js",
    path: __dirname + "/dist",
  },
   module: {
      loaders: [
        {
          test: /\.js$/,
          exclude: /node_modules/,
          loaders: ["babel-loader"],
        }
      ],
    }
    };
