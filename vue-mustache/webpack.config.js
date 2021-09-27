/*
 * @Author: wangrui
 * @Date: 2021-09-12 22:52:31
 * @LastEditTime: 2021-09-12 23:00:26
 * @LastEditors: wangrui
 * @Description: 
 * @FilePath: \vue-mustache\webpack.config.js
 */
const path = require('path');

module.exports = {
  mode:'development',
  // 入口
  entry: './src/index.js',
  output: {
    filename:'bundles.js'
  },
  devServer:{
    // 静态文件根目录
    contentBase: path.join(__dirname,'www'),
    // 不压缩
    compress: false,
    // 端口
    port: 8080,
    // 虚拟打包路径
    publicPath: '/ceshi/'
  }
}