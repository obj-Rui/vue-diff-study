/*
 * @Author: wangrui
 * @Date: 2021-09-27 15:30:23
 * @LastEditTime: 2021-09-27 15:37:40
 * @LastEditors: wangrui
 * @Description: 
 * @FilePath: \vue-origin-study\vue-response\src\utils.js
 */
export const def= function (obj,key,value,enumerable) {
  Object.defineProperty(obj,key,{
    value,
    enumerable,
    writable:true,
    configurable:true
  })
}