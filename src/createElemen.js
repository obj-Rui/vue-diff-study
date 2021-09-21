/*
 * @Author: wangrui
 * @Date: 2021-09-20 17:49:21
 * @LastEditTime: 2021-09-21 20:57:38
 * @LastEditors: wangrui
 * @Description: 
 * @FilePath: \vue-snabbdom-diff\src\createElemen.js
 */
export default function createElement(vNode) {
  let domNode= document.createElement(vNode.sel)
  if(vNode.text != '' &&( vNode.children == undefined || vNode.children.length == 0)) {
    // 内部是文字
    domNode.innerText = vNode.text;
  }else if(Array.isArray(vNode.children) && vNode.children.length > 0){
    // 内部是数组
    vNode.children.map(item => {
      const ch = createElement(item)
      domNode.appendChild(ch)
    })
  }
  vNode.elm = domNode
  return  domNode
}