/*
 * @Author: wangrui
 * @Date: 2021-09-25 16:50:10
 * @LastEditTime: 2021-09-26 11:19:12
 * @LastEditors: wangrui
 * @Description: 
 * @FilePath: \vue-snabbdom-diff\src\patchVNode.js
 */
import createElement from "./createElemen";
import updateVNode from "./updateVnode";

export default function patchVNode(oldNode,newNode){
  if(oldNode  == newNode ){ return}
  if(newNode.text != undefined && (newNode.children == undefined || newNode.children.length == 0)){
    // 新节点有text
    if(newNode.text != oldNode.text){
      oldNode.elm.innerText = newNode.text
    }
  }else {
    // 没有text，判断老节点是否有children
    if(oldNode.children == undefined  || oldNode.children.length == 0){
      oldNode.elm.innerText=""
      for(let i=0;i<newNode.children.length;i++){
        const dom = createElement(newNode.children[i])
        oldNode.elm.appendChild(dom)
      }
    }else {
      updateVNode(oldNode.elm,oldNode.children,newNode.children)
    }
  }
}