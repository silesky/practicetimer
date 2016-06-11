module.exports = {
  context: __dirname,
  entry: {
    test: ['./test/test.js'],
    app: ['./app/app.js'],

  },
  output: {
    filename: '[name].js',
    path: __dirname + '/app/dist/'
  },
  module: {
    loaders: [
      {
        exclude: /node_modules/,
        loaders: ['babel-loader'],
        test: /\.js$/,
      },
    ],
  },
  externals: {
    'jsdom': 'window',
    'react/lib/ExecutionEnvironment': true,
    'react/lib/ReactContext': 'window',
     cheerio: 'window',
    'text-encoding': 'window'

}
};
