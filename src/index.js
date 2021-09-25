/*
 * @Author: wangrui
 * @Date: 2021-09-15 17:27:34
 * @LastEditTime: 2021-09-25 21:22:51
 * @LastEditors: wangrui
 * @Description: 
 * @FilePath: \vue-snabbdom-diff\src\index.js
 */
import h from "./h.js";
import patch from './patch'
const vNode = h('ol',{},[
  h('li',{key:'A'},'A'),
  h('li',{key:'B'},'B'),
  h('li',{key:'C'},'C'),
  h('li',{key:'D'},'D'),
])

const container = window.document.getElementById('container')
const button = window.document.getElementById('button')
patch(container,vNode)
const newOtherNode = h('ol',{},[
  h('li',{key:'A'},'A122'),
  h('li',{key:'B'},'B'),
  h('li',{key:'C'},'C'),
])
button.onclick = function(){
  patch(vNode,newOtherNode)
}