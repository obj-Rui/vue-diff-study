/*
 * @Author: wangrui
 * @Date: 2021-09-27 09:28:33
 * @LastEditTime: 2021-09-29 17:17:31
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
  c:30,
  d:[1,2,45]
}
observe(obj)
obj.d.splice(1,0,12,123)
console.log(obj.d)