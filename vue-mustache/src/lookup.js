/*
 * @Author: wangrui
 * @Date: 2021-09-14 18:17:05
 * @LastEditTime: 2021-09-15 11:58:07
 * @LastEditors: wangrui
 * @Description: 
 * @FilePath: \vue-mustache\src\lookup.js
 */
export default function lookup(dataObj,keyName) {
  let template = dataObj
  if(keyName.indexOf('.') == -1) {
      return dataObj[keyName]
  }
  if(keyName == '.') {
    return dataObj
  }
  keyName.split('.').map(item=> {
    template = template[item] || template
  })
  return template
}