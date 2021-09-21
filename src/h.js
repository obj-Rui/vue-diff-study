/*
 * @Author: wangrui
 * @Date: 2021-09-16 11:49:10
 * @LastEditTime: 2021-09-19 15:50:41
 * @LastEditors: wangrui
 * @Description: 
 * @FilePath: \vue-snabbdom-diff\src\h.js
 */
// 三种状态
// 1,['div',{},'haha']
// 2,['div',{}, []]
// 3,['div',{}, h()]

import vnode from "./vnode";
 
export default function h(sel,data,c){
  let children = []
  if(arguments.length != 3) {
    throw new  Error('h函数需要为三个参数[sel,data,c]')
  }
  if(typeof c === 'string' || typeof c === 'number'){
    return vnode(sel,data,undefined,c,undefined)
  }
  if(Array.isArray(c)){
    console.log(c)
    for(let i=0;i < c.length;i++){
      if(!typeof c[i]=== 'object' && c[i].hasOwnProperty('sel')){
        throw new Error('传输参数数组不正确')
      }
      children.push(c[i])
    }
    return vnode(sel,data,children,undefined,undefined)
  }
  if(typeof c === 'object' && c.hasOwnProperty('sel')){
    children=[c]
    return vnode(sel,data,children,undefined,undefined)
  }

}