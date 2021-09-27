/*
 * @Author: wangrui
 * @Date: 2021-09-13 10:13:22
 * @LastEditTime: 2021-09-13 11:33:29
 * @LastEditors: wangrui
 * @Description: 扫描器
 * @FilePath: \vue-mustache\src\Scanner.js
 */
export default class Scanner {
    constructor(template){
      this.template = template
      // 指针
      this.pos = 0
      // 尾巴
      this.tail= template

    }
    scan(tap) {
      if(this.tail.indexOf(tap) == 0) {
        this.pos += tap.length
        this.tail = this.template .substr(this.pos)
      }
    }
    
    scanUntil(stopTag) {
      const pos_begin = this.pos
      while(this.eos() && this.tail.indexOf(stopTag) != 0 ) {
        this.pos ++
        this.tail = this.template.substr(this.pos)
      }
      return this.template.substring(pos_begin,this.pos)
    }
    // 是否遍历到头 end-of-scanner
    eos() {
      return this.pos < this.template.length
    }
}