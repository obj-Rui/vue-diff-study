/*
 * @Author: wangrui
 * @Date: 2021-09-15 17:27:34
 * @LastEditTime: 2021-09-16 10:43:16
 * @LastEditors: wangrui
 * @Description: 
 * @FilePath: \vue-start\vue-snabbdom-diff\src\index.js
 */

import {
  init,
  classModule,
  propsModule,
  styleModule,
  eventListenersModule,
  h,
} from "snabbdom";

const patch = init([
  // Init patch function with chosen modules
  classModule, // makes it easy to toggle classes
  propsModule, // for setting properties on DOM elements
  styleModule, // handles styling on elements with support for animations
  eventListenersModule, // attaches event listeners
]);

const container = document.getElementById("container");

const dom1 = h('h3',{props:{style:"color: red"}},['我是头部',h('span','hahah'),'我是来看看'])
const dom2 = h('div',[h('img',{props:{src:'https://robohash.org/haasehewaa.png?set=set5'}}),h('img',{props:{src:'https://robohash.org/hehea.png1?set=set2'}}),h('img',{props:{src:'https://robohash.org/hehe.png1?set=set3'}})])
console.log(dom2)
patch(container,dom1)
patch(dom1,dom2)

// const vnode = h("div#container.two.classes", { on: { click: ()=>{} } }, [
//   h("span", { style: { fontWeight: "bold" } }, "This is bold"),
//   " and this is just normal text",
//   h("a", { props: { href: "/foo" } }, "I'll take you places!"),
// ]);
// // Patch into empty DOM element – this modifies the DOM as a side effect
// patch(container, vnode);

// const newVnode = h(
//   "div#container.two.classes",
//   { on: { click: ()=>{} } },
//   [
//     h(
//       "span",
//       { style: { fontWeight: "normal", fontStyle: "italic" } },
//       "This is now italic type"
//     ),
//     " and this is still just normal text",
//     h("a", { props: { href: "/bar" } }, "I'll take you places!"),
//   ]
// );
// // Second `patch` invocation
// patch(vnode, newVnode); // Snabbdom efficiently updates the old view to the new state