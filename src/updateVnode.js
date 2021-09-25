/*
 * @Author: wangrui
 * @Date: 2021-09-25 19:08:39
 * @LastEditTime: 2021-09-25 21:33:17
 * @LastEditors: wangrui
 * @Description: 
 * @FilePath: \vue-snabbdom-diff\src\updateVnode.js
 */
import createElement from "./createElemen";
import patchVNode from "./patchVNode"
export default function updateVNode(parentElm, oldCh, newCh) {

  let oldStartIdx = 0, // 旧前
    newStartIdx = 0, // 新前

    oldEndIdx = oldCh.length - 1, // 旧后
    newEndIdx = newCh.length - 1, // 新后

    oldStartNode = oldCh[0], //  旧前节点
    newStartNode = newCh[0], // 新前节点

    oldEndNode = oldCh[oldEndIdx], //  旧后节点
    newEndNode = newCh[newEndIdx];    // 新后节点

  while (oldStartIdx <= oldEndIdx && newStartIdx <= newEndIdx) {
    if (checkSameNode(oldStartNode, newStartNode)) {
      console.log('1状态命中')
      patchVNode(oldStartNode, newStartNode)
      oldStartNode = oldCh[++oldStartIdx]
      newStartNode = newCh[++newStartIdx]
    }
    if (checkSameNode(newEndNode, oldEndNode)) {
      console.log('2状态命中')
      patchVNode(oldEndNode, newEndNode)
      oldEndNode = oldCh[--oldEndIdx]
      newEndNode = newCh[--newEndIdx]
    }
    if (checkSameNode(newEndNode, oldStartNode)) {
      console.log('3状态命中')
      // 新后旧前
      // 此时需要移动节点，旧前需要移动到旧后的后面
      parentElm.insertBefore(oldStartNode.elm, oldEndNode.elm.nextSibling)
      patchVNode(oldStartNode, newEndNode)
      oldStartNode = oldCh[++oldStartIdx]
      newEndNode = newCh[--newEndIdx]

    }
    if (checkSameNode(newStartNode, oldEndNode)) {
      console.log('3状态命中')
      // 新前旧后
      // 此时需要移动节点，旧后需要移动到旧前的前面
      parentElm.insertBefore(oldEndNode.elm, newStartNode.elm)
      patchVNode(oldEndNode, newStartNode)
      oldEndNode = oldCh[++oldEndIdx]
      newStartNode = newCh[--newStartIdx]

    }
    console.log('☆')
  }
  if (newStartIdx <= newEndIdx) {
    const before = newCh[newEndIdx + 1] == null ? null : newCh[newCh + 1].elm
    for (let i = newStartIdx; i < newEndIdx; i++) {
      parentElm.insertBefore(createElement(newCh[i]).before)
    }
  }
  if (oldStartIdx <= oldEndIdx) {
    for (let i = oldStartIdx; i <= oldEndIdx; i++) {
      parentElm.removeChild(oldCh[i].elm)
    }
  }
}
function checkSameNode(oldNode, newNode) {
  return oldNode.sel == newNode.sel && oldNode.key == newNode.key
}