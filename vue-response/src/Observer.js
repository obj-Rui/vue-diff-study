/*
 * @Author: wangrui
 * @Date: 2021-09-27 15:24:10
 * @LastEditTime: 2021-09-27 17:01:47
 * @LastEditors: wangrui
 * @Description: 
 * @FilePath: \vue-origin-study\vue-response\src\Observer.js
 */
import { def } from "./utils";
import defineReactive from "./defineReactive";
export default class Observer{
  constructor(val){
    def(val,'__ob__',this,false)
    console.log('我是observe构造器')
    this.walk(val)
  }
  walk(value){

    for(let key in value){
      defineReactive(value,key)
    }
  }
}