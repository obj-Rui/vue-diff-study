/*
 * @Author: wangrui
 * @Date: 2021-09-27 15:25:23
 * @LastEditTime: 2021-09-27 16:58:15
 * @LastEditors: wangrui
 * @Description: 
 * @FilePath: \vue-origin-study\vue-response\src\observe.js
 */

import Observer from "./Observer";
export default function (value) {
  if (typeof value != 'object') {
    return
  }
  var ob;
  if (typeof value.__ob__ != 'undefined') {
    ob = value.__ob__;
    debugger
  } else {
    ob = new Observer(value)
  }
  return ob
}