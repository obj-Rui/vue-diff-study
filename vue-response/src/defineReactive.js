/*
 * @Author: wangrui
 * @Date: 2021-09-27 15:20:48
 * @LastEditTime: 2021-10-03 23:46:22
 * @LastEditors: wangrui
 * @Description: 
 * @FilePath: \vue-origin-study\vue-response\src\defineReactive.js
 */
import Dep from "./Dep"
import observe from "./observe"
export default function defineReactive(data, key, value) {
  if (arguments.length == 2) {
    value = data[key]
  }
  const dep = new Dep
   let childOB = observe(value)
  Object.defineProperty(data, key, {
    enumerable: true,
    configurable: true,
    get() {
      console.log('你在获取' + key + '的值')
      if(Dep.target){
        dep.depend()
        if(childOB){
          childOB.dep.depend()
        }
      }
      return value
    },
    set(newValue) {
      console.log('你在设置' + key + '的值')
      value = newValue
      dep.notify()
      childOB =  observe(newValue)
    }
  })
}