const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  mode: 'development',
  entry: {
    index: path.resolve(__dirname, './src/index.js')
  },
  output: {
    path: path.resolve(__dirname, './dist'),
    filename: 'main.js',
    clean: true,
  },
  plugins: [
    new HtmlWebpackPlugin({
        template: './src/index.html',
    }),
 ],
 devServer: {
  static: './dist',
 },
 module: {
  rules: [
      {
          test: /\.css$/i,
          use: ['style-loader', 'css-loader']
      },
   
  ],
},

}
