/*
 * @Author: wangrui
 * @Date: 2021-09-27 09:28:33
 * @LastEditTime: 2021-10-05 11:49:29
 * @LastEditors: wangrui
 * @Description: 
 * @FilePath: \vue-origin-study\vue-response\src\index.js
 */
import observe from'./observe.js'
import Watcher from './Watcher.js'

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
new Watcher(obj,'a.m.n',(val,newValue)=>{
  console.log('监听成功====', val,newValue)
})
// obj.a.m.n = 99
// obj.d.splice(1,0,12,123)
console.log(obj)