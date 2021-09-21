/*
 * @Author: wangrui
 * @Date: 2021-09-15 17:27:34
 * @LastEditTime: 2021-09-20 17:46:40
 * @LastEditors: wangrui
 * @Description: 
 * @FilePath: \vue-snabbdom-diff\src\index.js
 */
import h from "./h.js";
import patch from './patch'
const vNode = h('div', {},'你好')
const container = window.document.getElementById('container')
patch(container,vNode)