/*
 * @Author: wangrui
 * @Date: 2021-09-15 17:27:34
 * @LastEditTime: 2021-09-21 20:55:43
 * @LastEditors: wangrui
 * @Description: 
 * @FilePath: \vue-snabbdom-diff\src\index.js
 */
import h from "./h.js";
import patch from './patch'
// const vNode = h('h1', {},'你好aaa')
const vNode = h('ul',{},[
  h('li',{},'A'),
  h('li',{},'B'),
  h('li',{},[
    h('ol',{},'哈哈'),
    h('ol',{},'哈哈'),
    h('ol',{},'哈哈'),
  ]),
  h('li',{},'D'),
])
const container = window.document.getElementById('container')
patch(container,vNode)