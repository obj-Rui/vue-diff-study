/*
 * @Author: wangrui
 * @Date: 2021-09-20 17:49:21
 * @LastEditTime: 2021-09-20 17:59:45
 * @LastEditors: wangrui
 * @Description: 
 * @FilePath: \vue-snabbdom-diff\src\createElemen.js
 */
export default function createElement(vNode,pivot) {
  let domNode= document.createElement(vNode.sel)
  if(vNode.text != '' &&( vNode.children == undefined || vNode.children.length == 0)) {
    // 内部是文字
    domNode.innerText = vNode.text;
    pivot.parentNode.insertBefore(vNode,pivot)
  }else if(Array.isArray(vNode.children) && vNode.children.length > 0){
    vNode.map(item => {
      
    })
  }
}