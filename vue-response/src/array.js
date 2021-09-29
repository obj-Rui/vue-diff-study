import { def } from "./utils"

/*
 * @Author: wangrui
 * @Date: 2021-09-28 15:48:40
 * @LastEditTime: 2021-09-29 18:25:14
 * @LastEditors: wangrui
 * @Description: 修改数组原型
 * @FilePath: \vue-origin-study\vue-response\src\array.js
 */
const arrayPrototype = Array.prototype

export const arrayMethods = Object.create(arrayPrototype)

const methodNeedChange=[
  'push',
  'pop',
  'shift',
  'unshift',
  'splice',
  'sort',
  'reverse',
]

methodNeedChange.forEach(methNodeName =>{
  const original = arrayPrototype[methNodeName]
  def(arrayMethods, methNodeName, function(){
    const ob = this.__ob__
    let insert = []
    let arg = Array.from(arguments)
    switch(methNodeName){
      case 'push':
      case 'unshift':
        insert.push(arg)
        break
      case 'splice': 
        insert = arg.slice(2)
        break
    }
    if(insert.length>0){
      ob.observerArray(insert)
    }
    ob.dep.notify()
    return  original.apply(this, arg)
  },false)
})