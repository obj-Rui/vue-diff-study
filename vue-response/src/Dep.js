/*
 * @Author: wangrui
 * @Date: 2021-09-29 18:13:26
 * @LastEditTime: 2021-10-05 11:50:40
 * @LastEditors: wangrui
 * @Description: 
 * @FilePath: \vue-origin-study\vue-response\src\Dep.js
 */
let  uid = 0
export  default class Dep{
  constructor(){
    console.log("dep构造器类")
    this.id = uid++ 
    this.subs = []
  }
  addSub(val){
    this.subs.push(val)
  }
  depend(){
    if(Dep.target){
      this.addSub(Dep.target)
    }
  }
  notify(){
    const subs = this.subs.slice()
    for(let i =0; i < subs.length; i++){
      subs[i].update()
    }
  }
}