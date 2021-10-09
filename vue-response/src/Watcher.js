import Dep from "./Dep"

/*
 * @Author: wangrui
 * @Date: 2021-09-29 18:13:43
 * @LastEditTime: 2021-10-05 09:56:00
 * @LastEditors: wangrui
 * @Description: 
 * @FilePath: \vue-origin-study\vue-response\src\Watcher.js
 */
var uid = 0
export default class Watcher {
  constructor(target, expression, callback) {
    console.log("我是watcher类构造器")
    this.id = uid++
    this.target = target
    this.getter = this.parsePath(expression)
    this.callback = callback
    this.value = this.get()
  }
  parsePath(str) {
    const segment = str.split('.')
    return (obj) => {
      for (let i = 0; i < segment.length; i++) {
        obj = obj[segment[i]]
      }
      return obj
    }
  }
  update(){
    this.run()
  }
  get(){
    Dep.target =this
    const obj = this.target
    let value 
    try{
      // 获取值数据对象的值
      value = this.getter(obj)
    } finally {
      Dep.target = null
    }
    return value
  }
  run(){
    this.getAndInvoke(this.callback)
  }
  // 执行回调函数
  getAndInvoke(cb){
   const value =  this.get(cb)
   if(value != this.value || typeof value == 'object'){
    const oldValue = this.value
    cb.call(this.target, value ,oldValue)
    // this.callback
   }
  }
}