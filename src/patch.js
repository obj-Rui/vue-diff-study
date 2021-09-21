import { vnode } from "snabbdom";
import createElement from "./createElemen";

/*
 * @Author: wangrui
 * @Date: 2021-09-20 17:25:52
 * @LastEditTime: 2021-09-21 20:58:49
 * @LastEditors: wangrui
 * @Description: 
 * @FilePath: \vue-snabbdom-diff\src\patch.js
 */
export default function patch(oldNode,newNode) {
  // 旧节点不是虚拟节点
  if(oldNode.sel  == '' || oldNode.sel == undefined ){
    oldNode = vnode(oldNode.tagName.toLowerCase(),{},[],undefined,oldNode)
  }
  
  if(oldNode.sel == newNode.sel && oldNode.key == newNode.key){
    console.log('是同一个节点')
  }else {
    const newNodeElm =  createElement(newNode)
    debugger
    newNodeElm && oldNode.elm && oldNode.elm.parentNode.insertBefore(newNodeElm,oldNode.elm)
    oldNode.elm.parentNode.removeChild(oldNode.elm)
  }
}