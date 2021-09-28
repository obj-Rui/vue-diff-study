/*
 * @Author: wangrui
 * @Date: 2021-09-27 15:20:48
 * @LastEditTime: 2021-09-27 17:03:46
 * @LastEditors: wangrui
 * @Description: 
 * @FilePath: \vue-origin-study\vue-response\src\defineReactive.js
 */
import observe from "./observe"
export default function defineReactive(data, key, value) {
  if (arguments.length == 2) {
    value = data[key]
  }
  observe(value)
  Object.defineProperty(data, key, {
    enumerable: true,
    configurable: true,
    get() {
      console.log('你在获取' + key + '的值')
      return value
    },
    set(newValue) {
      console.log('你在设置' + key + '的值')
      value = newValue
      observe(newValue)
    }
  })
}