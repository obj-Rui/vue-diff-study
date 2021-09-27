/*
 * @Author: wangrui
 * @Date: 2021-09-12 22:56:53
 * @LastEditTime: 2021-09-15 15:00:08
 * @LastEditors: wangrui
 * @Description: 
 * @FilePath: \vue-mustache\src\index.js
 */
import parseTemplateToTokens from './parseTemplateToTokens'
import renderTemplate from './renderTemplate'
window.MyVUE_TEMPLATE = {
  render(template,data){
   const tokens = parseTemplateToTokens(template)
   const templates = renderTemplate(tokens,data)
   console.log(templates)
   return templates
  }
}