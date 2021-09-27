/*
 * @Author: wangrui
 * @Date: 2021-09-13 14:05:09
 * @LastEditTime: 2021-09-15 09:41:19
 * @LastEditors: wangrui
 * @Description: 折叠tokens，将#和/之间的tokens整合起来，作为下标为3的向
 * @FilePath: \vue-mustache\src\nextTokens.js
 */
export default function nextTokens(tokens) {
  let newTokes = []
  // 用一个session来存储类似栈的内容，如果存在#就放进session，如果遇见/ 就从session中取出来
  let sessions = []
  let collector =  newTokes
  for (let i = 0; i < tokens.length; i++) {
    let token = tokens[i]
    switch (token[0]) {
      case '#':
        collector.push(token)
        sessions.push(token)
        collector = token[2] = [] 
        break
      case '/':
        sessions.pop()
        collector = sessions.length > 0 ? sessions[sessions.length-1][2] : newTokes
       break
      default:
        collector.push(token)
    }
  }
  return newTokes
}