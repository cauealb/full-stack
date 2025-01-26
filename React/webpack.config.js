const path = require('path');
const WebpackPlugin = require('html-webpack-plugin')

module.exports = {
  entry: path.resolve(__dirname, 'transpiled', 'index.js'),
  output: {
    path: path.resolve(__dirname, 'build'),
    filename: 'bundle[hash].js'
  },
  plugins: [
    new WebpackPlugin({
        template: path.resolve(__dirname, 'public', 'index.html')
    })
  ]
};
