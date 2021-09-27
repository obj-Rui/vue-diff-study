/*
 * @Author: wangrui
 * @Date: 2021-09-15 17:23:49
 * @LastEditTime: 2021-09-15 18:12:49
 * @LastEditors: wangrui
 * @Description: 
 * @FilePath: \vue-start\vue-snabbdom-diff\webpack.config.js
 */
const path = require('path');

module.exports = {
  entry: './src/index.js',
  output: {
    filename: 'bundle.js',
    publicPath: 'xuni',
  },
  devServer: {
    port: 8080,
    contentBase: 'www',
    open: true
  }
};
