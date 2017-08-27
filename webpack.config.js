var path =  require('path')
var webpack = require('webpack')

module.exports = {
  devtool:  'inline-source-map',
  entry:  [
    'react-hot-loader/patch',
    'webpack/hot/only-dev-server',
    './src/index.js'
  ],
  output: {
    filename: 'bundle.js',
    path: path.resolve('dist'),
    publicPath: '/dist/',
  },
  module: {
    rules:  [
      {
        test: /\.js$/,
        use:  ['babel-loader'],
      },
      {
        test: /\.css$/,
        use:  ['style-loader', 'css-loader'],
      }
    ]
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NamedModulesPlugin(),
  ],
  devServer: {
    hot: true,
  }
}