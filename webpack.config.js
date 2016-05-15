module.exports = {
  context: __dirname,
  entry: {
    test: ['./test/test.js'],
    app: ['./app/app.js'],

  },
  output: {
    filename: '[name].js',
    path: __dirname + '/dist'
  },
   module: {
      loaders: [
        {
          exclude: /node_modules/,
          loaders: ['babel-loader'],
          test: /\.js$/,
        },
      ],
    }
    };
