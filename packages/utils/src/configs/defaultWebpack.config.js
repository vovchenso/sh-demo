const webpack = require('webpack');

module.exports = {
  entry: {
    // this is set in gulp
  },
  output: {
    publicPath: '/build/',
    filename: '[name].bundle.js',
    chunkFilename: '[name].[chunkhash].chunk.js',
    path: `${__dirname}/build`
  },
  devtool: 'inline-source-map',
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        use: [
          'react-hot-loader',
          'babel-loader'
        ],
        exclude: /node_modules/
      },
      {
        test: /\.html$/,
        use: [
          'raw-loader'
        ]
      },
      {
        test: /\.css$/,
        use: [
          'style-loader',
          'css-loader'
        ]
      },
      {
        test: /\.less/,
        use: [
          {
            loader: 'style-loader'
          },
          {
            loader: 'css-loader',
            options: {
              sourceMap: true
            }
          },
          {
            loader: 'less-loader',
            options: {
              sourceMap: true
            }
          }
        ]
      },
      {
        test: /\.png$/,
        use: [
          'file-loader'
        ]
      },
      {
        test: /\.gif$/,
        use: [
          'file-loader'
        ]
      },
      {
        test: /\.json$/,
        use: [
          'json-loader'
        ]
      }
    ]
  },
  resolve: {
    modules: [
      'src',
      'node_modules'
    ]
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin()
  ]
};
