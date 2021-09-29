/*
 * @Author: wangrui
 * @Date: 2021-09-27 15:24:10
 * @LastEditTime: 2021-09-29 18:17:49
 * @LastEditors: wangrui
 * @Description: 
 * @FilePath: \vue-origin-study\vue-response\src\Observer.js
 */
import { def } from "./utils";
import defineReactive from "./defineReactive";
import { arrayMethods } from "./array";
import observe from "./observe";
import Dep from "./Dep";
export default class Observer{
  constructor(val){
    this.dep = new Dep
    def(val,'__ob__',this,false)
    console.log('我是observe构造器')
    if(Array.isArray(val)){
      Object.setPrototypeOf(val, arrayMethods)
      this.observerArray(val)
    }else {
      this.walk(val)
    }
  }
  walk(value){
    for(let key in value){
      defineReactive(value,key)
    }
  }
  observerArray(array){
    for(let i =0; i< array.length; i++){
      observe(array[i])
    }
  }
}