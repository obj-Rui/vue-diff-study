/*
 * @Author: wangrui
 * @Date: 2021-09-20 17:25:52
 * @LastEditTime: 2021-09-25 17:32:45
 * @LastEditors: wangrui
 * @Description: 
 * @FilePath: \vue-snabbdom-diff\src\patch.js
 */
import { vnode } from "snabbdom";
import createElement from "./createElemen";
import patchVNode from "./patchVNode";

export default function patch(oldNode,newNode) {
  // 旧节点不是虚拟节点
  if(oldNode.sel  == '' || oldNode.sel == undefined ){
    oldNode = vnode(oldNode.tagName.toLowerCase(),{},[],undefined,oldNode)
  }
  if(oldNode.sel == newNode.sel && oldNode.key == newNode.key){
    console.log('是同一个节点')
    patchVNode(oldNode,newNode)
  }else {
    const newNodeElm =  createElement(newNode)
    newNodeElm && oldNode.elm && oldNode.elm.parentNode.insertBefore(newNodeElm,oldNode.elm)
    oldNode.elm.parentNode.removeChild(oldNode.elm)
  }
}