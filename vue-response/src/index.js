/*
 * @Author: wangrui
 * @Date: 2021-09-27 09:28:33
 * @LastEditTime: 2021-09-27 17:03:35
 * @LastEditors: wangrui
 * @Description: 
 * @FilePath: \vue-origin-study\vue-response\src\index.js
 */
import observe from'./observe.js'

let obj = {
  a:{
    m: {
      n:10
    }
  },
  b:12,
  c:30
}
observe(obj)
obj.b = 10
console.log(obj.a.m.n)