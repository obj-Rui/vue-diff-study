/*
 * @Author: wangrui
 * @Date: 2021-09-16 11:49:20
 * @LastEditTime: 2021-09-25 16:41:33
 * @LastEditors: wangrui
 * @Description: 
 * @FilePath: \vue-snabbdom-diff\src\vnode.js
 */
export default function(sel,data,children,text,elm){
  return {sel,data,children,text,elm,key:data?.key}
}