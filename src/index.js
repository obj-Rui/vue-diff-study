/*
 * @Author: wangrui
 * @Date: 2021-09-15 17:27:34
 * @LastEditTime: 2021-09-26 15:02:33
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
])

const container = window.document.getElementById('container')
const button = window.document.getElementById('button')
patch(container,vNode)
const newOtherNode = h('ol',{},[
  // h('li',{key:'B'},'B'),
  // h('li',{key:'C'},'C'),
  h('li',{key:' Q'},'Q'),
  // h('li',{key:'B'},'B'),
  h('li',{key:'A'},'A'),
  
])
button.onclick = function(){
  patch(vNode,newOtherNode)
}