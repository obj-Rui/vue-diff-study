/*
 * @Author: wangrui
 * @Date: 2021-09-25 19:08:39
 * @LastEditTime: 2021-09-26 15:22:03
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
    newEndNode = newCh[newEndIdx],    // 新后节点

    keyMap = null; //遍历key对象

  while (oldStartIdx <= oldEndIdx && newStartIdx <= newEndIdx) {
    if (newStartNode == undefined) {
      newStartNode = newCh[++newStartIdx]
    } else if (newEndNode == undefined) {
      newEndNode == newCh[--newEndIdx]
    } else if (oldStartNode == undefined) {
      oldStartNode == oldCh[++oldStartIdx]
    } else if (oldEndNode == undefined) {
      oldEndNode == oldCh[--oldEndIdx]
    } else if (checkSameNode(oldStartNode, newStartNode)) {
      console.log('1状态命中')
      patchVNode(oldStartNode, newStartNode)
      oldStartNode = oldCh[++oldStartIdx]
      newStartNode = newCh[++newStartIdx]
    } else if (checkSameNode(newEndNode, oldEndNode)) {
      console.log('2状态命中')
      patchVNode(oldEndNode, newEndNode)
      oldEndNode = oldCh[--oldEndIdx]
      newEndNode = newCh[--newEndIdx]
    } else if (checkSameNode(newEndNode, oldStartNode)) {
      console.log('3状态命中')
      // 新后旧前
      // 此时需要移动节点，旧前需要移动到旧后的后面
      patchVNode(oldStartNode, newEndNode)
      parentElm.insertBefore(oldStartNode.elm, oldEndNode.elm.nextSibling)
      oldStartNode = oldCh[++oldStartIdx]
      newEndNode = newCh[--newEndIdx]

    } else if (checkSameNode(newStartNode, oldEndNode)) {
      console.log('4状态命中')
      // 新前旧后
      // 此时需要移动节点，旧后需要移动到旧前的前面
      patchVNode(oldEndNode, newStartNode)
      parentElm.insertBefore(oldEndNode.elm, newStartNode.elm)
      oldEndNode = oldCh[--oldEndIdx]
      newStartNode = newCh[++newStartIdx]
    } else {
      console.log('遍历')
      // 遍历oldch将key遍历出来形成一个对象，再去将新节点与这个keymap进行对比
      if (!keyMap) {
        keyMap = {}
        for (let i = oldStartIdx; i <= oldEndIdx; i++) {
          const key = oldCh[i] && oldCh[i].key
          if (key != undefined) {
            keyMap[key] = i
          }
        }
      }
      console.log(keyMap)
      const idxInOld = keyMap[newStartNode.key]
      if (idxInOld == undefined) {
        parentElm.insertBefore(createElement(newStartNode), oldStartNode.elm)
      } else {
        const elmToMove = oldCh[idxInOld]
        patchVNode(elmToMove, newStartNode)
        oldCh[idxInOld] = undefined
        parentElm.insertBefore(elmToMove.elm, oldStartNode.elm)
      }
      newStartNode = newCh[++newStartIdx]
    }
    console.log('☆')
  }
  if (newStartIdx <= newEndIdx) {
    // const before = newCh[newEndIdx + 1] == null ? null : newCh[newEndIdx + 1].elm
    for (let i = newStartIdx - 1; i <= newEndIdx; i++) {
      parentElm.insertBefore(createElement(newCh[i]), oldStartNode.elm)
    }
  }
  if (oldStartIdx <= oldEndIdx) {
    for (let i = oldStartIdx; i <= oldEndIdx; i++) {
      if (oldCh[i]) {
        parentElm.removeChild(oldCh[i].elm)
      }
    }
  }
}
function checkSameNode(oldNode, newNode) {
  return oldNode.sel == newNode.sel && oldNode.key == newNode.key
}