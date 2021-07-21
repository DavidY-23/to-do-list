(()=>{"use strict";var e={426:(e,t,n)=>{n.d(t,{Z:()=>a});var r=n(645),o=n.n(r)()((function(e){return e[1]}));o.push([e.id,"html{\r\n  height:100%;\r\n}\r\nbody{\r\n  height:100%;\r\n  margin: 0;\r\n}\r\n\r\n.list {\r\n  height: 100vh;\r\n  width: 100vw;\r\n  display: flex;\r\n  background-color: rgb(202, 202, 216);\r\n  border: black;\r\n}\r\n#sidenav {\r\n  background-color: grey;\r\n}\r\n/*\r\n#sidenav {\r\n  height: 100%; \r\n  width: 16%; \r\n  position: fixed; \r\n  top: 0;\r\n  left: 0;\r\n  background-color: rgb(172, 167, 167);\r\n  overflow-x: hidden; \r\n  padding-top: 20px;\r\n}\r\n*/\r\n\r\n\r\n#todolist { \r\n  background-color: pink;\r\n  height: 100%;\r\n  width: 100%;\r\n}\r\n.project {\r\n  border: 1px solid #000000;\r\n  margin-bottom: 5px;\r\n}\r\n\r\n.project:hover {\r\n  color: white;\r\n}",""]);const a=o},645:e=>{e.exports=function(e){var t=[];return t.toString=function(){return this.map((function(t){var n=e(t);return t[2]?"@media ".concat(t[2]," {").concat(n,"}"):n})).join("")},t.i=function(e,n,r){"string"==typeof e&&(e=[[null,e,""]]);var o={};if(r)for(var a=0;a<this.length;a++){var i=this[a][0];null!=i&&(o[i]=!0)}for(var c=0;c<e.length;c++){var l=[].concat(e[c]);r&&o[l[0]]||(n&&(l[2]?l[2]="".concat(n," and ").concat(l[2]):l[2]=n),t.push(l))}},t}},379:e=>{var t=[];function n(e){for(var n=-1,r=0;r<t.length;r++)if(t[r].identifier===e){n=r;break}return n}function r(e,r){for(var a={},i=[],c=0;c<e.length;c++){var l=e[c],d=r.base?l[0]+r.base:l[0],s=a[d]||0,u="".concat(d," ").concat(s);a[d]=s+1;var p=n(u),m={css:l[1],media:l[2],sourceMap:l[3]};-1!==p?(t[p].references++,t[p].updater(m)):t.push({identifier:u,updater:o(m,r),references:1}),i.push(u)}return i}function o(e,t){var n=t.domAPI(t);return n.update(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap)return;n.update(e=t)}else n.remove()}}e.exports=function(e,o){var a=r(e=e||[],o=o||{});return function(e){e=e||[];for(var i=0;i<a.length;i++){var c=n(a[i]);t[c].references--}for(var l=r(e,o),d=0;d<a.length;d++){var s=n(a[d]);0===t[s].references&&(t[s].updater(),t.splice(s,1))}a=l}}},569:e=>{var t={};e.exports=function(e,n){var r=function(e){if(void 0===t[e]){var n=document.querySelector(e);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch(e){n=null}t[e]=n}return t[e]}(e);if(!r)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");r.appendChild(n)}},216:e=>{e.exports=function(e){var t=document.createElement("style");return e.setAttributes(t,e.attributes),e.insert(t),t}},565:(e,t,n)=>{e.exports=function(e){var t=n.nc;t&&e.setAttribute("nonce",t)}},795:e=>{e.exports=function(e){var t=e.insertStyleElement(e);return{update:function(n){!function(e,t,n){var r=n.css,o=n.media,a=n.sourceMap;o?e.setAttribute("media",o):e.removeAttribute("media"),a&&"undefined"!=typeof btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(a))))," */")),t.styleTagTransform(r,e)}(t,e,n)},remove:function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(t)}}}},589:e=>{e.exports=function(e,t){if(t.styleSheet)t.styleSheet.cssText=e;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(e))}}}},t={};function n(r){var o=t[r];if(void 0!==o)return o.exports;var a=t[r]={id:r,exports:{}};return e[r](a,a.exports,n),a.exports}n.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return n.d(t,{a:t}),t},n.d=(e,t)=>{for(var r in t)n.o(t,r)&&!n.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})},n.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),(()=>{var e=n(379),t=n.n(e),r=n(795),o=n.n(r),a=n(569),i=n.n(a),c=n(565),l=n.n(c),d=n(216),s=n.n(d),u=n(589),p=n.n(u),m=n(426),f={};f.styleTagTransform=p(),f.setAttributes=l(),f.insert=i().bind(null,"head"),f.domAPI=o(),f.insertStyleElement=s(),t()(m.Z,f),m.Z&&m.Z.locals&&m.Z.locals;const g=document.getElementById("sidenav"),v=(document.getElementById("projects"),document.createElement("button"));function h(){let e=prompt("Enter your new task","");if(null==e||""==e)return;let t=document.createElement("div"),n=document.createElement("button"),r=document.createElement("br");n.id="deleteButton",n.innerHTML="X",n.addEventListener("click",b),t.classList.add("task"),t.textContent=e,t.id=e,document.getElementById("tasks").append(r),document.getElementById("tasks").append(e)}function b(){window.value=1,this.parentElement.remove(),this.parentNode.remove()}function E(){const e=document.getElementById("tasks");if(1===window.value)return e.innerHTML="",void(window.value=0);let t=document.createElement("button");t.textContent="New Task",t.addEventListener("click",h),e.innerHTML=this.id,e.appendChild(t)}v.id="deleteButton",v.innerHTML="X";let L=localStorage.length+1;g.innerHTML='To Do List <button id="newProject">Add</button><br>';let y=document.createElement("div");y.classList.add("project"),y.id="Project",localStorage.setItem(1,"Project"),y.innerHTML=localStorage.getItem(1),y.addEventListener("click",E),y.appendChild(v),g.appendChild(y),console.log(L),function(){if(console.log("work??"),1!==localStorage.length){for(let e=2;e<localStorage.length+1;e++){console.log(e);let t=document.createElement("div"),n=document.createElement("button");n.id="deleteButton",n.innerHTML="X",n.addEventListener("click",b),t.addEventListener("click",E),t.classList.add("project"),t.innerHTML=localStorage.getItem(e),t.id=localStorage.getItem(e),console.log("ID"+localStorage.getItem(e)),g.appendChild(t),t.appendChild(n),console.log("RELOADINGPAGE")}console.log("the fuck")}}(),document.getElementById("newProject").addEventListener("click",(function(){let e=prompt("Enter your new project","");null!=e&&""!=e&&(localStorage.setItem(L,e),console.log("ADDPROJECT"+e),function(){console.log("The value of x "+L);let e=document.createElement("div"),t=document.createElement("button");t.id="deleteButton",t.innerHTML="X",t.addEventListener("click",b),e.addEventListener("click",E),e.classList.add("project"),e.innerHTML=localStorage.getItem(L),e.id=localStorage.getItem(L),console.log("ID"+localStorage.getItem(L)),g.appendChild(e),e.appendChild(t),console.log("CALLINGPROJECTS"),L++}())}))})()})();