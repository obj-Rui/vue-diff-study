import { vnode } from "snabbdom";
import createElement from "./createElemen";

/*
 * @Author: wangrui
 * @Date: 2021-09-20 17:25:52
 * @LastEditTime: 2021-09-21 19:42:16
 * @LastEditors: wangrui
 * @Description: 
 * @FilePath: \vue-snabbdom-diff\src\patch.js
 */
export default function patch(oldNode,newNode) {
  // 旧节点不是虚拟节点
  if(oldNode.sel  == '' || oldNode.sel == 'undefine'){
    oldNode = vnode(oldNode.tagName.toLowerCase(),{},[],undefined,oldNode)
  }
  if(oldNode.sel == newNode.sel && oldNode.key == newNode.key){
    console.log('是同一个节点')
  }else {
    createElement(newNode,oldNode.elm )
  }
}