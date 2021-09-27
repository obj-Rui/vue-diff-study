/*
 * @Author: wangrui
 * @Date: 2021-09-14 18:06:43
 * @LastEditTime: 2021-09-15 14:55:47
 * @LastEditors: wangrui
 * @Description: 
 * @FilePath: \vue-mustache\src\renderTemplate.js
 */
import lookup from './lookup'

export default function renderTemplate(token,data){
  let strTemplate = ''
  for(let i= 0; i < token.length; i++) {
    const tokenItem = token[i]
    console.log(tokenItem)
    if(tokenItem[0] == 'text'){
      strTemplate += tokenItem[1]
    }else if(tokenItem[0] == 'name'){
      strTemplate += lookup(data,tokenItem[1])
    }else if(tokenItem[0] == '#'){
      data[tokenItem[1]].map((item,index) =>{
        strTemplate += renderTemplate(tokenItem[2],item)
      })
    }
  }
  return strTemplate
}