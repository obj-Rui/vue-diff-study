/*
 * @Author: wangrui
 * @Date: 2021-09-13 11:36:27
 * @LastEditTime: 2021-09-15 15:03:07
 * @LastEditors: wangrui
 * @Description: 
 * @FilePath: \vue-mustache\src\parseTemplateToTokens.js
 */
import Scanner from './Scanner'
import nextTokens from './nextTokens'

export default function parseTemplateToTokens(template){
    let tokens = []
    const scanner = new Scanner(template)
    let word=""
    while (scanner.eos()) {
      // 收集文字
      word = scanner.scanUntil('{{')
      if(word != ''){
        tokens.push(['text',word])
      }
      scanner.scan('{{')
      // 收集name
      word = scanner.scanUntil('}}')
      if(word != ''){
        if(word[0] == "#"){
          tokens.push(['#',word.substring(1)])
        }else if(word[0] == '/') {
          tokens.push(['/',word.substring(1)])
        }else{
          tokens.push(['name',word])
        }
      }
      scanner.scan("}}")
    }
    return nextTokens(tokens)
}