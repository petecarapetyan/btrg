function t(t,i){var e={};for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&i.indexOf(n)<0&&(e[n]=t[n]);if(null!=t&&"function"==typeof Object.getOwnPropertySymbols){var s=0;for(n=Object.getOwnPropertySymbols(t);s<n.length;s++)i.indexOf(n[s])<0&&Object.prototype.propertyIsEnumerable.call(t,n[s])&&(e[n[s]]=t[n[s]])}return e}"function"==typeof SuppressedError&&SuppressedError;var i=Object.defineProperty,e=(t,e,n)=>(((t,e,n)=>{e in t?i(t,e,{enumerable:!0,configurable:!0,writable:!0,value:n}):t[e]=n})(t,"symbol"!=typeof e?e+"":e,n),n),n=(t,i)=>{if(Object(i)!==i)throw TypeError('Cannot use the "in" operator on this value');return t.has(i)},s=(t,i,e)=>{if(i.has(t))throw TypeError("Cannot add the same private member more than once");i instanceof WeakSet?i.add(t):i.set(t,e)},r=(t,i,e)=>(((t,i,e)=>{if(!i.has(t))throw TypeError("Cannot "+e)})(t,i,"access private method"),e);
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
function o(t,i){return Object.is(t,i)}
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */let h=null,a=!1,u=1;const c=Symbol("SIGNAL");function l(t){const i=h;return h=t,i}const f={version:0,lastCleanEpoch:0,dirty:!1,producerNode:void 0,producerLastReadVersion:void 0,producerIndexOfThis:void 0,nextProducerIndex:0,liveConsumerNode:void 0,liveConsumerIndexOfThis:void 0,consumerAllowSignalWrites:!1,consumerIsAlwaysLive:!1,producerMustRecompute:()=>!1,producerRecomputeValue:()=>{},consumerMarkedDirty:()=>{},consumerOnSignalRead:()=>{}};function d(t){if(a)throw new Error("undefined"!=typeof ngDevMode&&ngDevMode?"Assertion error: signal read during notification phase":"");if(null===h)return;h.consumerOnSignalRead(t);const i=h.nextProducerIndex++;if(b(h),i<h.producerNode.length&&h.producerNode[i]!==t&&y(h)){m(h.producerNode[i],h.producerIndexOfThis[i])}h.producerNode[i]!==t&&(h.producerNode[i]=t,h.producerIndexOfThis[i]=y(h)?g(t,h,i):0),h.producerLastReadVersion[i]=t.version}function p(t){if(t.dirty||t.lastCleanEpoch!==u){if(!t.producerMustRecompute(t)&&!function(t){b(t);for(let i=0;i<t.producerNode.length;i++){const e=t.producerNode[i],n=t.producerLastReadVersion[i];if(n!==e.version)return!0;if(p(e),n!==e.version)return!0}return!1}(t))return t.dirty=!1,void(t.lastCleanEpoch=u);t.producerRecomputeValue(t),t.dirty=!1,t.lastCleanEpoch=u}}function w(t){if(void 0===t.liveConsumerNode)return;const i=a;a=!0;try{for(const i of t.liveConsumerNode)i.dirty||v(i)}finally{a=i}}function v(t){var i;t.dirty=!0,w(t),null==(i=t.consumerMarkedDirty)||i.call(t.wrapper??t)}function g(t,i,e){var n;if(E(t),b(t),0===t.liveConsumerNode.length){null==(n=t.watched)||n.call(t.wrapper);for(let i=0;i<t.producerNode.length;i++)t.producerIndexOfThis[i]=g(t.producerNode[i],t,i)}return t.liveConsumerIndexOfThis.push(e),t.liveConsumerNode.push(i)-1}function m(t,i){var e;if(E(t),b(t),"undefined"!=typeof ngDevMode&&ngDevMode&&i>=t.liveConsumerNode.length)throw new Error(`Assertion error: active consumer index ${i} is out of bounds of ${t.liveConsumerNode.length} consumers)`);if(1===t.liveConsumerNode.length){null==(e=t.unwatched)||e.call(t.wrapper);for(let i=0;i<t.producerNode.length;i++)m(t.producerNode[i],t.producerIndexOfThis[i])}const n=t.liveConsumerNode.length-1;if(t.liveConsumerNode[i]=t.liveConsumerNode[n],t.liveConsumerIndexOfThis[i]=t.liveConsumerIndexOfThis[n],t.liveConsumerNode.length--,t.liveConsumerIndexOfThis.length--,i<t.liveConsumerNode.length){const e=t.liveConsumerIndexOfThis[i],n=t.liveConsumerNode[i];b(n),n.producerIndexOfThis[e]=i}}function y(t){var i;return t.consumerIsAlwaysLive||((null==(i=null==t?void 0:t.liveConsumerNode)?void 0:i.length)??0)>0}function b(t){t.producerNode??(t.producerNode=[]),t.producerIndexOfThis??(t.producerIndexOfThis=[]),t.producerLastReadVersion??(t.producerLastReadVersion=[])}function E(t){t.liveConsumerNode??(t.liveConsumerNode=[]),t.liveConsumerIndexOfThis??(t.liveConsumerIndexOfThis=[])}
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */function S(t){if(p(t),d(t),t.value===A)throw t.error;return t.value}const T=Symbol("UNSET"),I=Symbol("COMPUTING"),A=Symbol("ERRORED"),_=(()=>({...f,value:T,dirty:!0,error:null,equal:o,producerMustRecompute:t=>t.value===T||t.value===I,producerRecomputeValue(t){if(t.value===I)throw new Error("Detected cycle in computations.");const i=t.value;t.value=I;const e=function(t){return t&&(t.nextProducerIndex=0),l(t)}(t);let n,s=!1;try{n=t.computation.call(t.wrapper);s=i!==T&&i!==A&&t.equal.call(t.wrapper,i,n)}catch(i){n=A,t.error=i}finally{!function(t,i){if(l(i),t&&void 0!==t.producerNode&&void 0!==t.producerIndexOfThis&&void 0!==t.producerLastReadVersion){if(y(t))for(let i=t.nextProducerIndex;i<t.producerNode.length;i++)m(t.producerNode[i],t.producerIndexOfThis[i]);for(;t.producerNode.length>t.nextProducerIndex;)t.producerNode.pop(),t.producerLastReadVersion.pop(),t.producerIndexOfThis.pop()}}(t,e)}s?t.value=i:(t.value=n,t.version++)}}))();let k=
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
function(){throw new Error};function N(){return d(this),this.value}function O(t,i){!1===(null==h?void 0:h.consumerAllowSignalWrites)&&k(),t.equal.call(t.wrapper,t.value,i)||(t.value=i,function(t){t.version++,u++,w(t)}
/**
 * @license
 * Copyright 2024 Bloomberg Finance L.P.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(t))}const D=(()=>({...f,equal:o,value:void 0}))();const C=Symbol("node");var R;(t=>{var i,o,u,p;i=C,o=new WeakSet,t.isState=t=>"object"==typeof t&&n(o,t),t.State=class{constructor(n,r={}){s(this,o),e(this,i);const h=
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
function(t){const i=Object.create(D);i.value=t;const e=()=>(d(i),i.value);return e[c]=i,e}(n),a=h[c];if(this[C]=a,a.wrapper=this,r){const i=r.equals;i&&(a.equal=i),a.watched=r[t.subtle.watched],a.unwatched=r[t.subtle.unwatched]}}get(){if(!(0,t.isState)(this))throw new TypeError("Wrong receiver type for Signal.State.prototype.get");return N.call(this[C])}set(i){if(!(0,t.isState)(this))throw new TypeError("Wrong receiver type for Signal.State.prototype.set");if(a)throw new Error("Writes to signals not permitted during Watcher callback");O(this[C],i)}};u=C,p=new WeakSet,t.isComputed=t=>"object"==typeof t&&n(p,t),t.Computed=class{constructor(i,n){s(this,p),e(this,u);const r=function(t){const i=Object.create(_);i.computation=t;const e=()=>S(i);return e[c]=i,e}(i),o=r[c];if(o.consumerAllowSignalWrites=!0,this[C]=o,o.wrapper=this,n){const i=n.equals;i&&(o.equal=i),o.watched=n[t.subtle.watched],o.unwatched=n[t.subtle.unwatched]}}get(){if(!(0,t.isComputed)(this))throw new TypeError("Wrong receiver type for Signal.Computed.prototype.get");return S(this[C])}},(i=>{var o,a,u,c;i.untrack=function(t){let i,e=null;try{e=l(null),i=t()}finally{l(e)}return i},i.introspectSources=function(i){var e;if(!(0,t.isComputed)(i)&&!(0,t.isWatcher)(i))throw new TypeError("Called introspectSources without a Computed or Watcher argument");return(null==(e=i[C].producerNode)?void 0:e.map(t=>t.wrapper))??[]},i.introspectSinks=function(i){var e;if(!(0,t.isComputed)(i)&&!(0,t.isState)(i))throw new TypeError("Called introspectSinks without a Signal argument");return(null==(e=i[C].liveConsumerNode)?void 0:e.map(t=>t.wrapper))??[]},i.hasSinks=function(i){if(!(0,t.isComputed)(i)&&!(0,t.isState)(i))throw new TypeError("Called hasSinks without a Signal argument");const e=i[C].liveConsumerNode;return!!e&&e.length>0},i.hasSources=function(i){if(!(0,t.isComputed)(i)&&!(0,t.isWatcher)(i))throw new TypeError("Called hasSources without a Computed or Watcher argument");const e=i[C].producerNode;return!!e&&e.length>0};o=C,a=new WeakSet,u=new WeakSet,c=function(i){for(const e of i)if(!(0,t.isComputed)(e)&&!(0,t.isState)(e))throw new TypeError("Called watch/unwatch without a Computed or State argument")},t.isWatcher=t=>n(a,t),i.Watcher=class{constructor(t){s(this,a),s(this,u),e(this,o);let i=Object.create(f);i.wrapper=this,i.consumerMarkedDirty=t,i.consumerIsAlwaysLive=!0,i.consumerAllowSignalWrites=!1,i.producerNode=[],this[C]=i}watch(...i){if(!(0,t.isWatcher)(this))throw new TypeError("Called unwatch without Watcher receiver");r(this,u,c).call(this,i);const e=this[C];e.dirty=!1;const n=l(e);for(const t of i)d(t[C]);l(n)}unwatch(...i){if(!(0,t.isWatcher)(this))throw new TypeError("Called unwatch without Watcher receiver");r(this,u,c).call(this,i);const e=this[C];b(e);for(let t=e.producerNode.length-1;t>=0;t--)if(i.includes(e.producerNode[t].wrapper)){m(e.producerNode[t],e.producerIndexOfThis[t]);const i=e.producerNode.length-1;if(e.producerNode[t]=e.producerNode[i],e.producerIndexOfThis[t]=e.producerIndexOfThis[i],e.producerNode.length--,e.producerIndexOfThis.length--,e.nextProducerIndex--,t<e.producerNode.length){const i=e.producerIndexOfThis[t],n=e.producerNode[t];E(n),n.liveConsumerIndexOfThis[i]=t}}}getPending(){if(!(0,t.isWatcher)(this))throw new TypeError("Called getPending without Watcher receiver");return this[C].producerNode.filter(t=>t.dirty).map(t=>t.wrapper)}},i.currentComputed=function(){var t;return null==(t=h)?void 0:t.wrapper},i.watched=Symbol("watched"),i.unwatched=Symbol("unwatched")})(t.subtle||(t.subtle={}))})(R||(R={}));
/**
 * @license
 * Copyright 2023 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const P=Symbol("SignalWatcherBrand"),x=new FinalizationRegistry(({watcher:t,signal:i})=>{t.unwatch(i)}),M=new WeakMap;
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const $=globalThis,U=$.trustedTypes,L=U?U.createPolicy("lit-html",{createHTML:t=>t}):void 0,F="$lit$",j=`lit$${Math.random().toFixed(9).slice(2)}$`,B="?"+j,z=`<${B}>`,W=document,V=()=>W.createComment(""),q=t=>null===t||"object"!=typeof t&&"function"!=typeof t,H=Array.isArray,J="[ \t\n\f\r]",G=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,X=/-->/g,K=/>/g,Y=RegExp(`>|${J}(?:([^\\s"'>=/]+)(${J}*=${J}*(?:[^ \t\n\f\r"'\`<>=]|("|')|))|$)`,"g"),Z=/'/g,Q=/"/g,tt=/^(?:script|style|textarea|title)$/i,it=(t=>(i,...e)=>({_$litType$:t,strings:i,values:e}))(1),et=Symbol.for("lit-noChange"),nt=Symbol.for("lit-nothing"),st=new WeakMap,rt=W.createTreeWalker(W,129);function ot(t,i){if(!H(t)||!t.hasOwnProperty("raw"))throw Error("invalid template strings array");return void 0!==L?L.createHTML(i):i}const ht=(t,i)=>{const e=t.length-1,n=[];let s,r=2===i?"<svg>":3===i?"<math>":"",o=G;for(let i=0;i<e;i++){const e=t[i];let h,a,u=-1,c=0;for(;c<e.length&&(o.lastIndex=c,a=o.exec(e),null!==a);)c=o.lastIndex,o===G?"!--"===a[1]?o=X:void 0!==a[1]?o=K:void 0!==a[2]?(tt.test(a[2])&&(s=RegExp("</"+a[2],"g")),o=Y):void 0!==a[3]&&(o=Y):o===Y?">"===a[0]?(o=s??G,u=-1):void 0===a[1]?u=-2:(u=o.lastIndex-a[2].length,h=a[1],o=void 0===a[3]?Y:'"'===a[3]?Q:Z):o===Q||o===Z?o=Y:o===X||o===K?o=G:(o=Y,s=void 0);const l=o===Y&&t[i+1].startsWith("/>")?" ":"";r+=o===G?e+z:u>=0?(n.push(h),e.slice(0,u)+F+e.slice(u)+j+l):e+j+(-2===u?i:l)}return[ot(t,r+(t[e]||"<?>")+(2===i?"</svg>":3===i?"</math>":"")),n]};let at=class t{constructor({strings:i,_$litType$:e},n){let s;this.parts=[];let r=0,o=0;const h=i.length-1,a=this.parts,[u,c]=ht(i,e);if(this.el=t.createElement(u,n),rt.currentNode=this.el.content,2===e||3===e){const t=this.el.content.firstChild;t.replaceWith(...t.childNodes)}for(;null!==(s=rt.nextNode())&&a.length<h;){if(1===s.nodeType){if(s.hasAttributes())for(const t of s.getAttributeNames())if(t.endsWith(F)){const i=c[o++],e=s.getAttribute(t).split(j),n=/([.?@])?(.*)/.exec(i);a.push({type:1,index:r,name:n[2],strings:e,ctor:"."===n[1]?dt:"?"===n[1]?pt:"@"===n[1]?wt:ft}),s.removeAttribute(t)}else t.startsWith(j)&&(a.push({type:6,index:r}),s.removeAttribute(t));if(tt.test(s.tagName)){const t=s.textContent.split(j),i=t.length-1;if(i>0){s.textContent=U?U.emptyScript:"";for(let e=0;e<i;e++)s.append(t[e],V()),rt.nextNode(),a.push({type:2,index:++r});s.append(t[i],V())}}}else if(8===s.nodeType)if(s.data===B)a.push({type:2,index:r});else{let t=-1;for(;-1!==(t=s.data.indexOf(j,t+1));)a.push({type:7,index:r}),t+=j.length-1}r++}}static createElement(t,i){const e=W.createElement("template");return e.innerHTML=t,e}};function ut(t,i,e=t,n){if(i===et)return i;let s=void 0!==n?e._$Co?.[n]:e._$Cl;const r=q(i)?void 0:i._$litDirective$;return s?.constructor!==r&&(s?._$AO?.(!1),void 0===r?s=void 0:(s=new r(t),s._$AT(t,e,n)),void 0!==n?(e._$Co??=[])[n]=s:e._$Cl=s),void 0!==s&&(i=ut(t,s._$AS(t,i.values),s,n)),i}let ct=class{constructor(t,i){this._$AV=[],this._$AN=void 0,this._$AD=t,this._$AM=i}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(t){const{el:{content:i},parts:e}=this._$AD,n=(t?.creationScope??W).importNode(i,!0);rt.currentNode=n;let s=rt.nextNode(),r=0,o=0,h=e[0];for(;void 0!==h;){if(r===h.index){let i;2===h.type?i=new lt(s,s.nextSibling,this,t):1===h.type?i=new h.ctor(s,h.name,h.strings,this,t):6===h.type&&(i=new vt(s,this,t)),this._$AV.push(i),h=e[++o]}r!==h?.index&&(s=rt.nextNode(),r++)}return rt.currentNode=W,n}p(t){let i=0;for(const e of this._$AV)void 0!==e&&(void 0!==e.strings?(e._$AI(t,e,i),i+=e.strings.length-2):e._$AI(t[i])),i++}};class lt{get _$AU(){return this._$AM?._$AU??this._$Cv}constructor(t,i,e,n){this.type=2,this._$AH=nt,this._$AN=void 0,this._$AA=t,this._$AB=i,this._$AM=e,this.options=n,this._$Cv=n?.isConnected??!0}get parentNode(){let t=this._$AA.parentNode;const i=this._$AM;return void 0!==i&&11===t?.nodeType&&(t=i.parentNode),t}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(t,i=this){t=ut(this,t,i),q(t)?t===nt||null==t||""===t?(this._$AH!==nt&&this._$AR(),this._$AH=nt):t!==this._$AH&&t!==et&&this._(t):void 0!==t._$litType$?this.$(t):void 0!==t.nodeType?this.T(t):(t=>H(t)||"function"==typeof t?.[Symbol.iterator])(t)?this.k(t):this._(t)}O(t){return this._$AA.parentNode.insertBefore(t,this._$AB)}T(t){this._$AH!==t&&(this._$AR(),this._$AH=this.O(t))}_(t){this._$AH!==nt&&q(this._$AH)?this._$AA.nextSibling.data=t:this.T(W.createTextNode(t)),this._$AH=t}$(t){const{values:i,_$litType$:e}=t,n="number"==typeof e?this._$AC(t):(void 0===e.el&&(e.el=at.createElement(ot(e.h,e.h[0]),this.options)),e);if(this._$AH?._$AD===n)this._$AH.p(i);else{const t=new ct(n,this),e=t.u(this.options);t.p(i),this.T(e),this._$AH=t}}_$AC(t){let i=st.get(t.strings);return void 0===i&&st.set(t.strings,i=new at(t)),i}k(t){H(this._$AH)||(this._$AH=[],this._$AR());const i=this._$AH;let e,n=0;for(const s of t)n===i.length?i.push(e=new lt(this.O(V()),this.O(V()),this,this.options)):e=i[n],e._$AI(s),n++;n<i.length&&(this._$AR(e&&e._$AB.nextSibling,n),i.length=n)}_$AR(t=this._$AA.nextSibling,i){for(this._$AP?.(!1,!0,i);t!==this._$AB;){const i=t.nextSibling;t.remove(),t=i}}setConnected(t){void 0===this._$AM&&(this._$Cv=t,this._$AP?.(t))}}let ft=class{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(t,i,e,n,s){this.type=1,this._$AH=nt,this._$AN=void 0,this.element=t,this.name=i,this._$AM=n,this.options=s,e.length>2||""!==e[0]||""!==e[1]?(this._$AH=Array(e.length-1).fill(new String),this.strings=e):this._$AH=nt}_$AI(t,i=this,e,n){const s=this.strings;let r=!1;if(void 0===s)t=ut(this,t,i,0),r=!q(t)||t!==this._$AH&&t!==et,r&&(this._$AH=t);else{const n=t;let o,h;for(t=s[0],o=0;o<s.length-1;o++)h=ut(this,n[e+o],i,o),h===et&&(h=this._$AH[o]),r||=!q(h)||h!==this._$AH[o],h===nt?t=nt:t!==nt&&(t+=(h??"")+s[o+1]),this._$AH[o]=h}r&&!n&&this.j(t)}j(t){t===nt?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,t??"")}};class dt extends ft{constructor(){super(...arguments),this.type=3}j(t){this.element[this.name]=t===nt?void 0:t}}class pt extends ft{constructor(){super(...arguments),this.type=4}j(t){this.element.toggleAttribute(this.name,!!t&&t!==nt)}}let wt=class extends ft{constructor(t,i,e,n,s){super(t,i,e,n,s),this.type=5}_$AI(t,i=this){if((t=ut(this,t,i,0)??nt)===et)return;const e=this._$AH,n=t===nt&&e!==nt||t.capture!==e.capture||t.once!==e.once||t.passive!==e.passive,s=t!==nt&&(e===nt||n);n&&this.element.removeEventListener(this.name,this,e),s&&this.element.addEventListener(this.name,this,t),this._$AH=t}handleEvent(t){"function"==typeof this._$AH?this._$AH.call(this.options?.host??this.element,t):this._$AH.handleEvent(t)}};class vt{constructor(t,i,e){this.element=t,this.type=6,this._$AN=void 0,this._$AM=i,this.options=e}get _$AU(){return this._$AM._$AU}_$AI(t){ut(this,t)}}const gt=$.litHtmlPolyfillSupport;gt?.(at,lt),($.litHtmlVersions??=[]).push("3.3.1");
/**
 * @license
 * Copyright 2023 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
R.State,R.Computed;const mt=(t,i)=>new R.State(t,i),yt=(t,i)=>new R.Computed(t,i),bt=globalThis,Et=bt.ShadowRoot&&(void 0===bt.ShadyCSS||bt.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,St=Symbol(),Tt=new WeakMap;
/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */let It=class{constructor(t,i,e){if(this._$cssResult$=!0,e!==St)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t,this.t=i}get styleSheet(){let t=this.o;const i=this.t;if(Et&&void 0===t){const e=void 0!==i&&1===i.length;e&&(t=Tt.get(i)),void 0===t&&((this.o=t=new CSSStyleSheet).replaceSync(this.cssText),e&&Tt.set(i,t))}return t}toString(){return this.cssText}};const At=(t,...i)=>{const e=1===t.length?t[0]:i.reduce((i,e,n)=>i+(t=>{if(!0===t._$cssResult$)return t.cssText;if("number"==typeof t)return t;throw Error("Value passed to 'css' function must be a 'css' function result: "+t+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(e)+t[n+1],t[0]);return new It(e,t,St)},_t=Et?t=>t:t=>t instanceof CSSStyleSheet?(t=>{let i="";for(const e of t.cssRules)i+=e.cssText;return(t=>new It("string"==typeof t?t:t+"",void 0,St))(i)})(t):t,{is:kt,defineProperty:Nt,getOwnPropertyDescriptor:Ot,getOwnPropertyNames:Dt,getOwnPropertySymbols:Ct,getPrototypeOf:Rt}=Object,Pt=globalThis,xt=Pt.trustedTypes,Mt=xt?xt.emptyScript:"",$t=Pt.reactiveElementPolyfillSupport,Ut=(t,i)=>t,Lt={toAttribute(t,i){switch(i){case Boolean:t=t?Mt:null;break;case Object:case Array:t=null==t?t:JSON.stringify(t)}return t},fromAttribute(t,i){let e=t;switch(i){case Boolean:e=null!==t;break;case Number:e=null===t?null:Number(t);break;case Object:case Array:try{e=JSON.parse(t)}catch(t){e=null}}return e}},Ft=(t,i)=>!kt(t,i),jt={attribute:!0,type:String,converter:Lt,reflect:!1,useDefault:!1,hasChanged:Ft};
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */Symbol.metadata??=Symbol("metadata"),Pt.litPropertyMetadata??=new WeakMap;class Bt extends HTMLElement{static addInitializer(t){this._$Ei(),(this.l??=[]).push(t)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(t,i=jt){if(i.state&&(i.attribute=!1),this._$Ei(),this.prototype.hasOwnProperty(t)&&((i=Object.create(i)).wrapped=!0),this.elementProperties.set(t,i),!i.noAccessor){const e=Symbol(),n=this.getPropertyDescriptor(t,e,i);void 0!==n&&Nt(this.prototype,t,n)}}static getPropertyDescriptor(t,i,e){const{get:n,set:s}=Ot(this.prototype,t)??{get(){return this[i]},set(t){this[i]=t}};return{get:n,set(i){const r=n?.call(this);s?.call(this,i),this.requestUpdate(t,r,e)},configurable:!0,enumerable:!0}}static getPropertyOptions(t){return this.elementProperties.get(t)??jt}static _$Ei(){if(this.hasOwnProperty(Ut("elementProperties")))return;const t=Rt(this);t.finalize(),void 0!==t.l&&(this.l=[...t.l]),this.elementProperties=new Map(t.elementProperties)}static finalize(){if(this.hasOwnProperty(Ut("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(Ut("properties"))){const t=this.properties,i=[...Dt(t),...Ct(t)];for(const e of i)this.createProperty(e,t[e])}const t=this[Symbol.metadata];if(null!==t){const i=litPropertyMetadata.get(t);if(void 0!==i)for(const[t,e]of i)this.elementProperties.set(t,e)}this._$Eh=new Map;for(const[t,i]of this.elementProperties){const e=this._$Eu(t,i);void 0!==e&&this._$Eh.set(e,t)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(t){const i=[];if(Array.isArray(t)){const e=new Set(t.flat(1/0).reverse());for(const t of e)i.unshift(_t(t))}else void 0!==t&&i.push(_t(t));return i}static _$Eu(t,i){const e=i.attribute;return!1===e?void 0:"string"==typeof e?e:"string"==typeof t?t.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){this._$ES=new Promise(t=>this.enableUpdating=t),this._$AL=new Map,this._$E_(),this.requestUpdate(),this.constructor.l?.forEach(t=>t(this))}addController(t){(this._$EO??=new Set).add(t),void 0!==this.renderRoot&&this.isConnected&&t.hostConnected?.()}removeController(t){this._$EO?.delete(t)}_$E_(){const t=new Map,i=this.constructor.elementProperties;for(const e of i.keys())this.hasOwnProperty(e)&&(t.set(e,this[e]),delete this[e]);t.size>0&&(this._$Ep=t)}createRenderRoot(){const t=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return((t,i)=>{if(Et)t.adoptedStyleSheets=i.map(t=>t instanceof CSSStyleSheet?t:t.styleSheet);else for(const e of i){const i=document.createElement("style"),n=bt.litNonce;void 0!==n&&i.setAttribute("nonce",n),i.textContent=e.cssText,t.appendChild(i)}})(t,this.constructor.elementStyles),t}connectedCallback(){this.renderRoot??=this.createRenderRoot(),this.enableUpdating(!0),this._$EO?.forEach(t=>t.hostConnected?.())}enableUpdating(t){}disconnectedCallback(){this._$EO?.forEach(t=>t.hostDisconnected?.())}attributeChangedCallback(t,i,e){this._$AK(t,e)}_$ET(t,i){const e=this.constructor.elementProperties.get(t),n=this.constructor._$Eu(t,e);if(void 0!==n&&!0===e.reflect){const s=(void 0!==e.converter?.toAttribute?e.converter:Lt).toAttribute(i,e.type);this._$Em=t,null==s?this.removeAttribute(n):this.setAttribute(n,s),this._$Em=null}}_$AK(t,i){const e=this.constructor,n=e._$Eh.get(t);if(void 0!==n&&this._$Em!==n){const t=e.getPropertyOptions(n),s="function"==typeof t.converter?{fromAttribute:t.converter}:void 0!==t.converter?.fromAttribute?t.converter:Lt;this._$Em=n;const r=s.fromAttribute(i,t.type);this[n]=r??this._$Ej?.get(n)??r,this._$Em=null}}requestUpdate(t,i,e){if(void 0!==t){const n=this.constructor,s=this[t];if(e??=n.getPropertyOptions(t),!((e.hasChanged??Ft)(s,i)||e.useDefault&&e.reflect&&s===this._$Ej?.get(t)&&!this.hasAttribute(n._$Eu(t,e))))return;this.C(t,i,e)}!1===this.isUpdatePending&&(this._$ES=this._$EP())}C(t,i,{useDefault:e,reflect:n,wrapped:s},r){e&&!(this._$Ej??=new Map).has(t)&&(this._$Ej.set(t,r??i??this[t]),!0!==s||void 0!==r)||(this._$AL.has(t)||(this.hasUpdated||e||(i=void 0),this._$AL.set(t,i)),!0===n&&this._$Em!==t&&(this._$Eq??=new Set).add(t))}async _$EP(){this.isUpdatePending=!0;try{await this._$ES}catch(t){Promise.reject(t)}const t=this.scheduleUpdate();return null!=t&&await t,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??=this.createRenderRoot(),this._$Ep){for(const[t,i]of this._$Ep)this[t]=i;this._$Ep=void 0}const t=this.constructor.elementProperties;if(t.size>0)for(const[i,e]of t){const{wrapped:t}=e,n=this[i];!0!==t||this._$AL.has(i)||void 0===n||this.C(i,void 0,e,n)}}let t=!1;const i=this._$AL;try{t=this.shouldUpdate(i),t?(this.willUpdate(i),this._$EO?.forEach(t=>t.hostUpdate?.()),this.update(i)):this._$EM()}catch(i){throw t=!1,this._$EM(),i}t&&this._$AE(i)}willUpdate(t){}_$AE(t){this._$EO?.forEach(t=>t.hostUpdated?.()),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(t)),this.updated(t)}_$EM(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(t){return!0}update(t){this._$Eq&&=this._$Eq.forEach(t=>this._$ET(t,this[t])),this._$EM()}updated(t){}firstUpdated(t){}}Bt.elementStyles=[],Bt.shadowRootOptions={mode:"open"},Bt[Ut("elementProperties")]=new Map,Bt[Ut("finalized")]=new Map,$t?.({ReactiveElement:Bt}),(Pt.reactiveElementVersions??=[]).push("2.1.1");
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const zt=globalThis;class Wt extends Bt{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){const t=super.createRenderRoot();return this.renderOptions.renderBefore??=t.firstChild,t}update(t){const i=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(t),this._$Do=((t,i,e)=>{const n=e?.renderBefore??i;let s=n._$litPart$;if(void 0===s){const t=e?.renderBefore??null;n._$litPart$=s=new lt(i.insertBefore(V(),t),t,void 0,e??{})}return s._$AI(t),s})(i,this.renderRoot,this.renderOptions)}connectedCallback(){super.connectedCallback(),this._$Do?.setConnected(!0)}disconnectedCallback(){super.disconnectedCallback(),this._$Do?.setConnected(!1)}render(){return et}}Wt._$litElement$=!0,Wt.finalized=!0,zt.litElementHydrateSupport?.({LitElement:Wt});const Vt=zt.litElementPolyfillSupport;Vt?.({LitElement:Wt}),(zt.litElementVersions??=[]).push("4.2.1");
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const qt=t=>(i,e)=>{void 0!==e?e.addInitializer(()=>{customElements.define(t,i)}):customElements.define(t,i)},Ht={attribute:!0,type:String,converter:Lt,reflect:!1,hasChanged:Ft},Jt=(t=Ht,i,e)=>{const{kind:n,metadata:s}=e;let r=globalThis.litPropertyMetadata.get(s);if(void 0===r&&globalThis.litPropertyMetadata.set(s,r=new Map),"setter"===n&&((t=Object.create(t)).wrapped=!0),r.set(e.name,t),"accessor"===n){const{name:n}=e;return{set(e){const s=i.get.call(this);i.set.call(this,e),this.requestUpdate(n,s,t)},init(i){return void 0!==i&&this.C(n,void 0,t,i),i}}}if("setter"===n){const{name:n}=e;return function(e){const s=this[n];i.call(this,e),this.requestUpdate(n,s,t)}}throw Error("Unsupported decorator location: "+n)};
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function Gt(t){return(i,e)=>"object"==typeof e?Jt(t,i,e):((t,i,e)=>{const n=i.hasOwnProperty(e);return i.constructor.createProperty(e,t),n?Object.getOwnPropertyDescriptor(i,e):void 0})(t,i,e)}const Xt="World",Kt=mt(Xt),Yt=mt(0),Zt=mt(null),Qt=yt(()=>{const t=Kt.get();return{name:t,greeting:`Hello, ${t}!`,clickCount:Yt.get(),lastInteractionTs:Zt.get()}});function ti(){Zt.set(Date.now())}const ii=mt(""),ei=mt(null),ni=mt("idle"),si=mt(null),ri=mt(null);yt(()=>({packageName:ii.get(),packageData:ei.get(),status:ni.get(),lastUpdated:si.get(),errorMessage:ri.get()}));const oi=mt("web-components"),hi=mt([]),ai=mt("idle"),ui=mt(null),ci=mt(0),li=mt(null),fi=mt(!1),di=mt(!1);if(yt(()=>({version:ci.get(),topic:oi.get(),tasks:hi.get(),status:ai.get(),lastUpdated:ui.get(),isAutoRefreshing:di.get(),errorMessage:li.get()})),"object"==typeof globalThis){const t=globalThis;t.q=function(t){fi.set(t)},t.tt=()=>fi.get()}const pi=mt([]),wi=mt("none"),vi=mt([{id:"none",label:"None"},{id:"upload",label:"Upload"},{id:"site",label:"Site"},{id:"add",label:"Add"}]);yt(()=>({options:vi.get(),selectedId:wi.get(),disabledIds:pi.get()}));const gi=mt("none"),mi=mt(""),yi=mt("Select File to Upload"),bi=mt(!1),Ei=mt(0),Si=mt(!1),Ti=mt("void");yt(()=>({mode:gi.get(),linkUrl:mi.get(),fileName:yi.get(),isUploading:bi.get(),uploadProgress:Ei.get(),isValid:Si.get(),mediaType:Ti.get()}));const Ii=mt(0),Ai=mt(""),_i=mt("idle"),ki=mt(null),Ni=mt(null);yt(()=>({tokenCount:Ii.get(),documentContent:Ai.get(),status:_i.get(),lastUpdated:ki.get(),errorMessage:Ni.get()}));
/**
 * @license
 * Copyright 2025 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const Oi=function(t){const i=[];let e=0;for(let n=0;n<t.length;n++){let s=t.charCodeAt(n);s<128?i[e++]=s:s<2048?(i[e++]=s>>6|192,i[e++]=63&s|128):55296==(64512&s)&&n+1<t.length&&56320==(64512&t.charCodeAt(n+1))?(s=65536+((1023&s)<<10)+(1023&t.charCodeAt(++n)),i[e++]=s>>18|240,i[e++]=s>>12&63|128,i[e++]=s>>6&63|128,i[e++]=63&s|128):(i[e++]=s>>12|224,i[e++]=s>>6&63|128,i[e++]=63&s|128)}return i},Di={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:"function"==typeof atob,encodeByteArray(t,i){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const e=i?this.byteToCharMapWebSafe_:this.byteToCharMap_,n=[];for(let i=0;i<t.length;i+=3){const s=t[i],r=i+1<t.length,o=r?t[i+1]:0,h=i+2<t.length,a=h?t[i+2]:0,u=s>>2,c=(3&s)<<4|o>>4;let l=(15&o)<<2|a>>6,f=63&a;h||(f=64,r||(l=64)),n.push(e[u],e[c],e[l],e[f])}return n.join("")},encodeString(t,i){return this.HAS_NATIVE_SUPPORT&&!i?btoa(t):this.encodeByteArray(Oi(t),i)},decodeString(t,i){return this.HAS_NATIVE_SUPPORT&&!i?atob(t):function(t){const i=[];let e=0,n=0;for(;e<t.length;){const s=t[e++];if(s<128)i[n++]=String.fromCharCode(s);else if(s>191&&s<224){const r=t[e++];i[n++]=String.fromCharCode((31&s)<<6|63&r)}else if(s>239&&s<365){const r=((7&s)<<18|(63&t[e++])<<12|(63&t[e++])<<6|63&t[e++])-65536;i[n++]=String.fromCharCode(55296+(r>>10)),i[n++]=String.fromCharCode(56320+(1023&r))}else{const r=t[e++],o=t[e++];i[n++]=String.fromCharCode((15&s)<<12|(63&r)<<6|63&o)}}return i.join("")}(this.decodeStringToByteArray(t,i))},decodeStringToByteArray(t,i){this.init_();const e=i?this.charToByteMapWebSafe_:this.charToByteMap_,n=[];for(let i=0;i<t.length;){const s=e[t.charAt(i++)],r=i<t.length?e[t.charAt(i)]:0;++i;const o=i<t.length?e[t.charAt(i)]:64;++i;const h=i<t.length?e[t.charAt(i)]:64;if(++i,null==s||null==r||null==o||null==h)throw new Ci;const a=s<<2|r>>4;if(n.push(a),64!==o){const t=r<<4&240|o>>2;if(n.push(t),64!==h){const t=o<<6&192|h;n.push(t)}}}return n},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}};
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ci extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const Ri=function(t){return function(t){const i=Oi(t);return Di.encodeByteArray(i,!0)}(t).replace(/\./g,"")},Pi=function(t){try{return Di.decodeString(t,!0)}catch(t){console.error("base64Decode failed: ",t)}return null};
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const xi=()=>
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function(){if("undefined"!=typeof self)return self;if("undefined"!=typeof window)return window;if("undefined"!=typeof global)return global;throw new Error("Unable to locate global object.")}().it,Mi=()=>{try{return xi()||(()=>{if("undefined"==typeof process||void 0===process.env)return;const t=process.env.it;return t?JSON.parse(t):void 0})()||(()=>{if("undefined"==typeof document)return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch(t){return}const i=t&&Pi(t[1]);return i&&JSON.parse(i)})()}catch(t){return void console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`)}};
/**
 * @license
 * Copyright 2025 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function $i(t){try{return(t.startsWith("http://")||t.startsWith("https://")?new URL(t).hostname:t).endsWith(".cloudworkstations.dev")}catch(t){return!1}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ui(){return"undefined"!=typeof navigator&&"string"==typeof navigator.userAgent?navigator.userAgent:""}class Li extends Error{constructor(t,i,e){super(i),this.code=t,this.customData=e,this.name="FirebaseError",Object.setPrototypeOf(this,Li.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Fi.prototype.create)}}class Fi{constructor(t,i,e){this.service=t,this.serviceName=i,this.errors=e}create(t,...i){const e=i[0]||{},n=`${this.service}/${t}`,s=this.errors[t],r=s?function(t,i){return t.replace(ji,(t,e)=>{const n=i[e];return null!=n?String(n):`<${e}?>`})}(s,e):"Error",o=`${this.serviceName}: ${r} (${n}).`;return new Li(n,o,e)}}const ji=/\{\$([^}]+)}/g;
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Bi(t){const i=[];for(const[e,n]of Object.entries(t))Array.isArray(n)?n.forEach(t=>{i.push(encodeURIComponent(e)+"="+encodeURIComponent(t))}):i.push(encodeURIComponent(e)+"="+encodeURIComponent(n));return i.length?"&"+i.join("&"):""}class zi{constructor(t,i){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=i,this.task.then(()=>{t(this)}).catch(t=>{this.error(t)})}next(t){this.forEachObserver(i=>{i.next(t)})}error(t){this.forEachObserver(i=>{i.error(t)}),this.close(t)}complete(){this.forEachObserver(t=>{t.complete()}),this.close()}subscribe(t,i,e){let n;if(void 0===t&&void 0===i&&void 0===e)throw new Error("Missing Observer.");n=function(t,i){if("object"!=typeof t||null===t)return!1;for(const e of i)if(e in t&&"function"==typeof t[e])return!0;return!1}(t,["next","error","complete"])?t:{next:t,error:i,complete:e},void 0===n.next&&(n.next=Wi),void 0===n.error&&(n.error=Wi),void 0===n.complete&&(n.complete=Wi);const s=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?n.error(this.finalError):n.complete()}catch(t){}}),this.observers.push(n),s}unsubscribeOne(t){void 0!==this.observers&&void 0!==this.observers[t]&&(delete this.observers[t],this.observerCount-=1,0===this.observerCount&&void 0!==this.onNoObservers&&this.onNoObservers(this))}forEachObserver(t){if(!this.finalized)for(let i=0;i<this.observers.length;i++)this.sendOne(i,t)}sendOne(t,i){this.task.then(()=>{if(void 0!==this.observers&&void 0!==this.observers[t])try{i(this.observers[t])}catch(t){"undefined"!=typeof console&&console.error&&console.error(t)}})}close(t){this.finalized||(this.finalized=!0,void 0!==t&&(this.finalError=t),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function Wi(){}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Vi(t){return t&&t._delegate?t._delegate:t}class qi{constructor(t,i,e){this.name=t,this.instanceFactory=i,this.type=e,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(t){return this.instantiationMode=t,this}setMultipleInstances(t){return this.multipleInstances=t,this}setServiceProps(t){return this.serviceProps=t,this}setInstanceCreatedCallback(t){return this.onInstanceCreated=t,this}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Hi;!function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"}(Hi||(Hi={}));const Ji={debug:Hi.DEBUG,verbose:Hi.VERBOSE,info:Hi.INFO,warn:Hi.WARN,error:Hi.ERROR,silent:Hi.SILENT},Gi=Hi.INFO,Xi={[Hi.DEBUG]:"log",[Hi.VERBOSE]:"log",[Hi.INFO]:"info",[Hi.WARN]:"warn",[Hi.ERROR]:"error"},Ki=(t,i,...e)=>{if(i<t.logLevel)return;const n=(new Date).toISOString(),s=Xi[i];if(!s)throw new Error(`Attempted to log a message with an invalid logType (value: ${i})`);console[s](`[${n}]  ${t.name}:`,...e)};class Yi{constructor(t){this.name=t,this._logLevel=Gi,this._logHandler=Ki,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(t){if(!(t in Hi))throw new TypeError(`Invalid value "${t}" assigned to \`logLevel\``);this._logLevel=t}setLogLevel(t){this._logLevel="string"==typeof t?Ji[t]:t}get logHandler(){return this._logHandler}set logHandler(t){if("function"!=typeof t)throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=t}get userLogHandler(){return this._userLogHandler}set userLogHandler(t){this._userLogHandler=t}debug(...t){this._userLogHandler&&this._userLogHandler(this,Hi.DEBUG,...t),this._logHandler(this,Hi.DEBUG,...t)}log(...t){this._userLogHandler&&this._userLogHandler(this,Hi.VERBOSE,...t),this._logHandler(this,Hi.VERBOSE,...t)}info(...t){this._userLogHandler&&this._userLogHandler(this,Hi.INFO,...t),this._logHandler(this,Hi.INFO,...t)}warn(...t){this._userLogHandler&&this._userLogHandler(this,Hi.WARN,...t),this._logHandler(this,Hi.WARN,...t)}error(...t){this._userLogHandler&&this._userLogHandler(this,Hi.ERROR,...t),this._logHandler(this,Hi.ERROR,...t)}}let Zi,Qi;const te=new WeakMap,ie=new WeakMap,ee=new WeakMap,ne=new WeakMap,se=new WeakMap;let re={get(t,i,e){if(t instanceof IDBTransaction){if("done"===i)return ie.get(t);if("objectStoreNames"===i)return t.objectStoreNames||ee.get(t);if("store"===i)return e.objectStoreNames[1]?void 0:e.objectStore(e.objectStoreNames[0])}return ae(t[i])},set:(t,i,e)=>(t[i]=e,!0),has:(t,i)=>t instanceof IDBTransaction&&("done"===i||"store"===i)||i in t};function oe(t){return t!==IDBDatabase.prototype.transaction||"objectStoreNames"in IDBTransaction.prototype?(Qi||(Qi=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])).includes(t)?function(...i){return t.apply(ue(this),i),ae(te.get(this))}:function(...i){return ae(t.apply(ue(this),i))}:function(i,...e){const n=t.call(ue(this),i,...e);return ee.set(n,i.sort?i.sort():[i]),ae(n)}}function he(t){return"function"==typeof t?oe(t):(t instanceof IDBTransaction&&function(t){if(ie.has(t))return;const i=new Promise((i,e)=>{const n=()=>{t.removeEventListener("complete",s),t.removeEventListener("error",r),t.removeEventListener("abort",r)},s=()=>{i(),n()},r=()=>{e(t.error||new DOMException("AbortError","AbortError")),n()};t.addEventListener("complete",s),t.addEventListener("error",r),t.addEventListener("abort",r)});ie.set(t,i)}(t),i=t,(Zi||(Zi=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])).some(t=>i instanceof t)?new Proxy(t,re):t);var i}function ae(t){if(t instanceof IDBRequest)return function(t){const i=new Promise((i,e)=>{const n=()=>{t.removeEventListener("success",s),t.removeEventListener("error",r)},s=()=>{i(ae(t.result)),n()},r=()=>{e(t.error),n()};t.addEventListener("success",s),t.addEventListener("error",r)});return i.then(i=>{i instanceof IDBCursor&&te.set(i,t)}).catch(()=>{}),se.set(i,t),i}(t);if(ne.has(t))return ne.get(t);const i=he(t);return i!==t&&(ne.set(t,i),se.set(i,t)),i}const ue=t=>se.get(t);const ce=["get","getKey","getAll","getAllKeys","count"],le=["put","add","delete","clear"],fe=new Map;function de(t,i){if(!(t instanceof IDBDatabase)||i in t||"string"!=typeof i)return;if(fe.get(i))return fe.get(i);const e=i.replace(/FromIndex$/,""),n=i!==e,s=le.includes(e);if(!(e in(n?IDBIndex:IDBObjectStore).prototype)||!s&&!ce.includes(e))return;const r=async function(t,...i){const r=this.transaction(t,s?"readwrite":"readonly");let o=r.store;return n&&(o=o.index(i.shift())),(await Promise.all([o[e](...i),s&&r.done]))[0]};return fe.set(i,r),r}re=(t=>({...t,get:(i,e,n)=>de(i,e)||t.get(i,e,n),has:(i,e)=>!!de(i,e)||t.has(i,e)}))(re);
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class pe{constructor(t){this.container=t}getPlatformInfoString(){return this.container.getProviders().map(t=>{if(function(t){const i=t.getComponent();return"VERSION"===(null==i?void 0:i.type)}(t)){const i=t.getImmediate();return`${i.library}/${i.version}`}return null}).filter(t=>t).join(" ")}}const we="@firebase/app",ve="0.13.2",ge=new Yi("@firebase/app"),me="@firebase/app-compat",ye="@firebase/analytics-compat",be="@firebase/analytics",Ee="@firebase/app-check-compat",Se="@firebase/app-check",Te="@firebase/auth",Ie="@firebase/auth-compat",Ae="@firebase/database",_e="@firebase/data-connect",ke="@firebase/database-compat",Ne="@firebase/functions",Oe="@firebase/functions-compat",De="@firebase/installations",Ce="@firebase/installations-compat",Re="@firebase/messaging",Pe="@firebase/messaging-compat",xe="@firebase/performance",Me="@firebase/performance-compat",$e="@firebase/remote-config",Ue="@firebase/remote-config-compat",Le="@firebase/storage",Fe="@firebase/storage-compat",je="@firebase/firestore",Be="@firebase/ai",ze="@firebase/firestore-compat",We="firebase",Ve={[we]:"fire-core",[me]:"fire-core-compat",[be]:"fire-analytics",[ye]:"fire-analytics-compat",[Se]:"fire-app-check",[Ee]:"fire-app-check-compat",[Te]:"fire-auth",[Ie]:"fire-auth-compat",[Ae]:"fire-rtdb",[_e]:"fire-data-connect",[ke]:"fire-rtdb-compat",[Ne]:"fire-fn",[Oe]:"fire-fn-compat",[De]:"fire-iid",[Ce]:"fire-iid-compat",[Re]:"fire-fcm",[Pe]:"fire-fcm-compat",[xe]:"fire-perf",[Me]:"fire-perf-compat",[$e]:"fire-rc",[Ue]:"fire-rc-compat",[Le]:"fire-gcs",[Fe]:"fire-gcs-compat",[je]:"fire-fst",[ze]:"fire-fst-compat",[Be]:"fire-vertex","fire-js":"fire-js",[We]:"fire-js-all"},qe=new Map,He=new Map,Je=new Map;function Ge(t,i){try{t.container.addComponent(i)}catch(e){ge.debug(`Component ${i.name} failed to register with FirebaseApp ${t.name}`,e)}}function Xe(t){const i=t.name;if(Je.has(i))return ge.debug(`There were multiple attempts to register component ${i}.`),!1;Je.set(i,t);for(const i of qe.values())Ge(i,t);for(const i of He.values())Ge(i,t);return!0}function Ke(t){return null!=t&&void 0!==t.settings}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ye=new Fi("app","Firebase",{"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."}),Ze="11.10.0";function Qe(t,i,e){var n;let s=null!==(n=Ve[t])&&void 0!==n?n:t;e&&(s+=`-${e}`);const r=s.match(/\s|\//),o=i.match(/\s|\//);if(r||o){const t=[`Unable to register library "${s}" with version "${i}":`];return r&&t.push(`library name "${s}" contains illegal characters (whitespace or "/")`),r&&o&&t.push("and"),o&&t.push(`version name "${i}" contains illegal characters (whitespace or "/")`),void ge.warn(t.join(" "))}Xe(new qi(`${s}-version`,()=>({library:s,version:i}),"VERSION"))}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const tn="firebase-heartbeat-store";let en=null;function nn(){return en||(en=function(t,i,{blocked:e,upgrade:n,blocking:s,terminated:r}={}){const o=indexedDB.open(t,i),h=ae(o);return n&&o.addEventListener("upgradeneeded",t=>{n(ae(o.result),t.oldVersion,t.newVersion,ae(o.transaction),t)}),e&&o.addEventListener("blocked",t=>e(t.oldVersion,t.newVersion,t)),h.then(t=>{r&&t.addEventListener("close",()=>r()),s&&t.addEventListener("versionchange",t=>s(t.oldVersion,t.newVersion,t))}).catch(()=>{}),h}("firebase-heartbeat-database",1,{upgrade:(t,i)=>{if(0===i)try{t.createObjectStore(tn)}catch(t){console.warn(t)}}}).catch(t=>{throw Ye.create("idb-open",{originalErrorMessage:t.message})})),en}async function sn(t,i){try{const e=(await nn()).transaction(tn,"readwrite"),n=e.objectStore(tn);await n.put(i,rn(t)),await e.done}catch(t){if(t instanceof Li)ge.warn(t.message);else{const i=Ye.create("idb-set",{originalErrorMessage:null==t?void 0:t.message});ge.warn(i.message)}}}function rn(t){return`${t.name}!${t.options.appId}`}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class on{constructor(t){this.container=t,this._heartbeatsCache=null;const i=this.container.getProvider("app").getImmediate();this._storage=new an(i),this._heartbeatsCachePromise=this._storage.read().then(t=>(this._heartbeatsCache=t,t))}async triggerHeartbeat(){var t,i;try{const e=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),n=hn();if(null==(null===(t=this._heartbeatsCache)||void 0===t?void 0:t.heartbeats)&&(this._heartbeatsCache=await this._heartbeatsCachePromise,null==(null===(i=this._heartbeatsCache)||void 0===i?void 0:i.heartbeats)))return;if(this._heartbeatsCache.lastSentHeartbeatDate===n||this._heartbeatsCache.heartbeats.some(t=>t.date===n))return;if(this._heartbeatsCache.heartbeats.push({date:n,agent:e}),this._heartbeatsCache.heartbeats.length>30){const t=function(t){if(0===t.length)return-1;let i=0,e=t[0].date;for(let n=1;n<t.length;n++)t[n].date<e&&(e=t[n].date,i=n);return i}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(this._heartbeatsCache.heartbeats);this._heartbeatsCache.heartbeats.splice(t,1)}return this._storage.overwrite(this._heartbeatsCache)}catch(t){ge.warn(t)}}async getHeartbeatsHeader(){var t;try{if(null===this._heartbeatsCache&&await this._heartbeatsCachePromise,null==(null===(t=this._heartbeatsCache)||void 0===t?void 0:t.heartbeats)||0===this._heartbeatsCache.heartbeats.length)return"";const i=hn(),{heartbeatsToSend:e,unsentEntries:n}=function(t,i=1024){const e=[];let n=t.slice();for(const s of t){const t=e.find(t=>t.agent===s.agent);if(t){if(t.dates.push(s.date),un(e)>i){t.dates.pop();break}}else if(e.push({agent:s.agent,dates:[s.date]}),un(e)>i){e.pop();break}n=n.slice(1)}return{heartbeatsToSend:e,unsentEntries:n}}(this._heartbeatsCache.heartbeats),s=Ri(JSON.stringify({version:2,heartbeats:e}));return this._heartbeatsCache.lastSentHeartbeatDate=i,n.length>0?(this._heartbeatsCache.heartbeats=n,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),s}catch(t){return ge.warn(t),""}}}function hn(){return(new Date).toISOString().substring(0,10)}class an{constructor(t){this.app=t,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return!!function(){try{return"object"==typeof indexedDB}catch(t){return!1}}()&&new Promise((t,i)=>{try{let e=!0;const n="validate-browser-context-for-indexeddb-analytics-module",s=self.indexedDB.open(n);s.onsuccess=()=>{s.result.close(),e||self.indexedDB.deleteDatabase(n),t(!0)},s.onupgradeneeded=()=>{e=!1},s.onerror=()=>{var t;i((null===(t=s.error)||void 0===t?void 0:t.message)||"")}}catch(t){i(t)}}).then(()=>!0).catch(()=>!1)}async read(){if(await this._canUseIndexedDBPromise){const t=await async function(t){try{const i=(await nn()).transaction(tn),e=await i.objectStore(tn).get(rn(t));return await i.done,e}catch(t){if(t instanceof Li)ge.warn(t.message);else{const i=Ye.create("idb-get",{originalErrorMessage:null==t?void 0:t.message});ge.warn(i.message)}}}(this.app);return(null==t?void 0:t.heartbeats)?t:{heartbeats:[]}}return{heartbeats:[]}}async overwrite(t){var i;if(await this._canUseIndexedDBPromise){const e=await this.read();return sn(this.app,{lastSentHeartbeatDate:null!==(i=t.lastSentHeartbeatDate)&&void 0!==i?i:e.lastSentHeartbeatDate,heartbeats:t.heartbeats})}}async add(t){var i;if(await this._canUseIndexedDBPromise){const e=await this.read();return sn(this.app,{lastSentHeartbeatDate:null!==(i=t.lastSentHeartbeatDate)&&void 0!==i?i:e.lastSentHeartbeatDate,heartbeats:[...e.heartbeats,...t.heartbeats]})}}}function un(t){return Ri(JSON.stringify({version:2,heartbeats:t})).length}var cn;function ln(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}cn="",Xe(new qi("platform-logger",t=>new pe(t),"PRIVATE")),Xe(new qi("heartbeat",t=>new on(t),"PRIVATE")),Qe(we,ve,cn),Qe(we,ve,"esm2017"),Qe("fire-js","");const fn=ln,dn=new Fi("auth","Firebase",{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}),pn=new Yi("@firebase/auth");function wn(t,...i){pn.logLevel<=Hi.ERROR&&pn.error(`Auth (${Ze}): ${t}`,...i)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function vn(t,...i){throw bn(t,...i)}function gn(t,...i){return bn(t,...i)}function mn(t,i,e){const n=Object.assign(Object.assign({},fn()),{[i]:e});return new Fi("auth","Firebase",n).create(i,{appName:t.name})}function yn(t){return mn(t,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function bn(t,...i){if("string"!=typeof t){const e=i[0],n=[...i.slice(1)];return n[0]&&(n[0].appName=t.name),t._errorFactory.create(e,...n)}return dn.create(t,...i)}function En(t,i,...e){if(!t)throw bn(i,...e)}function Sn(t){const i="INTERNAL ASSERTION FAILED: "+t;throw wn(i),new Error(i)}function Tn(t,i){t||Sn(i)}function In(){var t;return"undefined"!=typeof self&&(null===(t=self.location)||void 0===t?void 0:t.protocol)||null}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function An(){return"undefined"==typeof navigator||!navigator||!("onLine"in navigator)||"boolean"!=typeof navigator.onLine||"http:"!==In()&&"https:"!==In()&&!function(){const t="object"==typeof chrome?chrome.runtime:"object"==typeof browser?browser.runtime:void 0;return"object"==typeof t&&void 0!==t.id}()&&!("connection"in navigator)||navigator.onLine}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class _n{constructor(t,i){this.shortDelay=t,this.longDelay=i,Tn(i>t,"Short delay should be less than long delay!"),this.isMobile="undefined"!=typeof window&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(Ui())||"object"==typeof navigator&&"ReactNative"===navigator.product}get(){return An()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class kn{static initialize(t,i,e){this.fetchImpl=t,i&&(this.headersImpl=i),e&&(this.responseImpl=e)}static fetch(){return this.fetchImpl?this.fetchImpl:"undefined"!=typeof self&&"fetch"in self?self.fetch:"undefined"!=typeof globalThis&&globalThis.fetch?globalThis.fetch:"undefined"!=typeof fetch?fetch:void Sn("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){return this.headersImpl?this.headersImpl:"undefined"!=typeof self&&"Headers"in self?self.Headers:"undefined"!=typeof globalThis&&globalThis.Headers?globalThis.Headers:"undefined"!=typeof Headers?Headers:void Sn("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){return this.responseImpl?this.responseImpl:"undefined"!=typeof self&&"Response"in self?self.Response:"undefined"!=typeof globalThis&&globalThis.Response?globalThis.Response:"undefined"!=typeof Response?Response:void Sn("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Nn={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"},On=["/v1/accounts:signInWithCustomToken","/v1/accounts:signInWithEmailLink","/v1/accounts:signInWithIdp","/v1/accounts:signInWithPassword","/v1/accounts:signInWithPhoneNumber","/v1/token"],Dn=new _n(3e4,6e4);
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Cn(t,i){return t.tenantId&&!i.tenantId?Object.assign(Object.assign({},i),{tenantId:t.tenantId}):i}async function Rn(t,i,e,n,s={}){return Pn(t,s,async()=>{let s={},r={};n&&("GET"===i?r=n:s={body:JSON.stringify(n)});const o=Bi(Object.assign({key:t.config.apiKey},r)).slice(1),h=await t._getAdditionalHeaders();h["Content-Type"]="application/json",t.languageCode&&(h["X-Firebase-Locale"]=t.languageCode);const a=Object.assign({method:i,headers:h},s);return"undefined"!=typeof navigator&&"Cloudflare-Workers"===navigator.userAgent||(a.referrerPolicy="no-referrer"),t.emulatorConfig&&$i(t.emulatorConfig.host)&&(a.credentials="include"),kn.fetch()(await xn(t,t.config.apiHost,e,o),a)})}async function Pn(t,i,e){t._canInitEmulator=!1;const n=Object.assign(Object.assign({},Nn),i);try{const i=new Mn(t),s=await Promise.race([e(),i.promise]);i.clearNetworkTimeout();const r=await s.json();if("needConfirmation"in r)throw $n(t,"account-exists-with-different-credential",r);if(s.ok&&!("errorMessage"in r))return r;{const i=s.ok?r.errorMessage:r.error.message,[e,o]=i.split(" : ");if("FEDERATED_USER_ID_ALREADY_LINKED"===e)throw $n(t,"credential-already-in-use",r);if("EMAIL_EXISTS"===e)throw $n(t,"email-already-in-use",r);if("USER_DISABLED"===e)throw $n(t,"user-disabled",r);const h=n[e]||e.toLowerCase().replace(/[_\s]+/g,"-");if(o)throw mn(t,h,o);vn(t,h)}}catch(i){if(i instanceof Li)throw i;vn(t,"network-request-failed",{message:String(i)})}}async function xn(t,i,e,n){const s=`${i}${e}?${n}`,r=t,o=r.config.emulator?function(t,i){Tn(t.emulator,"Emulator should always be set here");const{url:e}=t.emulator;return i?`${e}${i.startsWith("/")?i.slice(1):i}`:e}(t.config,s):`${t.config.apiScheme}://${s}`;if(On.includes(e)&&(await r._persistenceManagerAvailable,"COOKIE"===r._getPersistenceType())){return r._getPersistence()._getFinalTarget(o).toString()}return o}class Mn{clearNetworkTimeout(){clearTimeout(this.timer)}constructor(t){this.auth=t,this.timer=null,this.promise=new Promise((t,i)=>{this.timer=setTimeout(()=>i(gn(this.auth,"network-request-failed")),Dn.get())})}}function $n(t,i,e){const n={appName:t.name};e.email&&(n.email=e.email),e.phoneNumber&&(n.phoneNumber=e.phoneNumber);const s=gn(t,i,n);return s.customData._tokenResponse=e,s}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Un(t,i){return Rn(t,"POST","/v1/accounts:lookup",i)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ln(t){if(t)try{const i=new Date(Number(t));if(!isNaN(i.getTime()))return i.toUTCString()}catch(t){}}function Fn(t){return 1e3*Number(t)}function jn(t){const[i,e,n]=t.split(".");if(void 0===i||void 0===e||void 0===n)return wn("JWT malformed, contained fewer than 3 sections"),null;try{const t=Pi(e);return t?JSON.parse(t):(wn("Failed to decode base64 JWT payload"),null)}catch(t){return wn("Caught error parsing JWT payload as JSON",null==t?void 0:t.toString()),null}}function Bn(t){const i=jn(t);return En(i,"internal-error"),En(void 0!==i.exp,"internal-error"),En(void 0!==i.iat,"internal-error"),Number(i.exp)-Number(i.iat)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function zn(t,i,e=!1){if(e)return i;try{return await i}catch(i){throw i instanceof Li&&function({code:t}){return"auth/user-disabled"===t||"auth/user-token-expired"===t}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(i)&&t.auth.currentUser===t&&await t.auth.signOut(),i}}class Wn{constructor(t){this.user=t,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,null!==this.timerId&&clearTimeout(this.timerId))}getInterval(t){var i;if(t){const t=this.errorBackoff;return this.errorBackoff=Math.min(2*this.errorBackoff,96e4),t}{this.errorBackoff=3e4;const t=(null!==(i=this.user.stsTokenManager.expirationTime)&&void 0!==i?i:0)-Date.now()-3e5;return Math.max(0,t)}}schedule(t=!1){if(!this.isRunning)return;const i=this.getInterval(t);this.timerId=setTimeout(async()=>{await this.iteration()},i)}async iteration(){try{await this.user.getIdToken(!0)}catch(t){return void("auth/network-request-failed"===(null==t?void 0:t.code)&&this.schedule(!0))}this.schedule()}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vn{constructor(t,i){this.createdAt=t,this.lastLoginAt=i,this._initializeTime()}_initializeTime(){this.lastSignInTime=Ln(this.lastLoginAt),this.creationTime=Ln(this.createdAt)}_copy(t){this.createdAt=t.createdAt,this.lastLoginAt=t.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function qn(t){var i;const e=t.auth,n=await t.getIdToken(),s=await zn(t,Un(e,{idToken:n}));En(null==s?void 0:s.users.length,e,"internal-error");const r=s.users[0];t._notifyReloadListener(r);const o=(null===(i=r.providerUserInfo)||void 0===i?void 0:i.length)?Hn(r.providerUserInfo):[],h=function(t,i){const e=t.filter(t=>!i.some(i=>i.providerId===t.providerId));return[...e,...i]}(t.providerData,o),a=t.isAnonymous,u=!(t.email&&r.passwordHash||(null==h?void 0:h.length)),c=!!a&&u,l={uid:r.localId,displayName:r.displayName||null,photoURL:r.photoUrl||null,email:r.email||null,emailVerified:r.emailVerified||!1,phoneNumber:r.phoneNumber||null,tenantId:r.tenantId||null,providerData:h,metadata:new Vn(r.createdAt,r.lastLoginAt),isAnonymous:c};Object.assign(t,l)}function Hn(i){return i.map(i=>{var{providerId:e}=i,n=t(i,["providerId"]);return{providerId:e,uid:n.rawId||"",displayName:n.displayName||null,email:n.email||null,phoneNumber:n.phoneNumber||null,photoURL:n.photoUrl||null}})}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Jn{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(t){En(t.idToken,"internal-error"),En(void 0!==t.idToken,"internal-error"),En(void 0!==t.refreshToken,"internal-error");const i="expiresIn"in t&&void 0!==t.expiresIn?Number(t.expiresIn):Bn(t.idToken);this.updateTokensAndExpiration(t.idToken,t.refreshToken,i)}updateFromIdToken(t){En(0!==t.length,"internal-error");const i=Bn(t);this.updateTokensAndExpiration(t,null,i)}async getToken(t,i=!1){return i||!this.accessToken||this.isExpired?(En(this.refreshToken,t,"user-token-expired"),this.refreshToken?(await this.refresh(t,this.refreshToken),this.accessToken):null):this.accessToken}clearRefreshToken(){this.refreshToken=null}async refresh(t,i){const{accessToken:e,refreshToken:n,expiresIn:s}=await async function(t,i){const e=await Pn(t,{},async()=>{const e=Bi({grant_type:"refresh_token",refresh_token:i}).slice(1),{tokenApiHost:n,apiKey:s}=t.config,r=await xn(t,n,"/v1/token",`key=${s}`),o=await t._getAdditionalHeaders();o["Content-Type"]="application/x-www-form-urlencoded";const h={method:"POST",headers:o,body:e};return t.emulatorConfig&&$i(t.emulatorConfig.host)&&(h.credentials="include"),kn.fetch()(r,h)});return{accessToken:e.access_token,expiresIn:e.expires_in,refreshToken:e.refresh_token}}(t,i);this.updateTokensAndExpiration(e,n,Number(s))}updateTokensAndExpiration(t,i,e){this.refreshToken=i||null,this.accessToken=t||null,this.expirationTime=Date.now()+1e3*e}static fromJSON(t,i){const{refreshToken:e,accessToken:n,expirationTime:s}=i,r=new Jn;return e&&(En("string"==typeof e,"internal-error",{appName:t}),r.refreshToken=e),n&&(En("string"==typeof n,"internal-error",{appName:t}),r.accessToken=n),s&&(En("number"==typeof s,"internal-error",{appName:t}),r.expirationTime=s),r}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(t){this.accessToken=t.accessToken,this.refreshToken=t.refreshToken,this.expirationTime=t.expirationTime}_clone(){return Object.assign(new Jn,this.toJSON())}_performRefresh(){return Sn("not implemented")}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Gn(t,i){En("string"==typeof t||void 0===t,"internal-error",{appName:i})}class Xn{constructor(i){var{uid:e,auth:n,stsTokenManager:s}=i,r=t(i,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new Wn(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=e,this.auth=n,this.stsTokenManager=s,this.accessToken=s.accessToken,this.displayName=r.displayName||null,this.email=r.email||null,this.emailVerified=r.emailVerified||!1,this.phoneNumber=r.phoneNumber||null,this.photoURL=r.photoURL||null,this.isAnonymous=r.isAnonymous||!1,this.tenantId=r.tenantId||null,this.providerData=r.providerData?[...r.providerData]:[],this.metadata=new Vn(r.createdAt||void 0,r.lastLoginAt||void 0)}async getIdToken(t){const i=await zn(this,this.stsTokenManager.getToken(this.auth,t));return En(i,this.auth,"internal-error"),this.accessToken!==i&&(this.accessToken=i,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),i}getIdTokenResult(t){return async function(t,i=!1){const e=Vi(t),n=await e.getIdToken(i),s=jn(n);En(s&&s.exp&&s.auth_time&&s.iat,e.auth,"internal-error");const r="object"==typeof s.firebase?s.firebase:void 0,o=null==r?void 0:r.sign_in_provider;return{claims:s,token:n,authTime:Ln(Fn(s.auth_time)),issuedAtTime:Ln(Fn(s.iat)),expirationTime:Ln(Fn(s.exp)),signInProvider:o||null,signInSecondFactor:(null==r?void 0:r.sign_in_second_factor)||null}}(this,t)}reload(){return async function(t){const i=Vi(t);await qn(i),await i.auth._persistUserIfCurrent(i),i.auth._notifyListenersIfCurrent(i)}(this)}_assign(t){this!==t&&(En(this.uid===t.uid,this.auth,"internal-error"),this.displayName=t.displayName,this.photoURL=t.photoURL,this.email=t.email,this.emailVerified=t.emailVerified,this.phoneNumber=t.phoneNumber,this.isAnonymous=t.isAnonymous,this.tenantId=t.tenantId,this.providerData=t.providerData.map(t=>Object.assign({},t)),this.metadata._copy(t.metadata),this.stsTokenManager._assign(t.stsTokenManager))}_clone(t){const i=new Xn(Object.assign(Object.assign({},this),{auth:t,stsTokenManager:this.stsTokenManager._clone()}));return i.metadata._copy(this.metadata),i}_onReload(t){En(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=t,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(t){this.reloadListener?this.reloadListener(t):this.reloadUserInfo=t}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(t,i=!1){let e=!1;t.idToken&&t.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(t),e=!0),i&&await qn(this),await this.auth._persistUserIfCurrent(this),e&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(Ke(this.auth.app))return Promise.reject(yn(this.auth));const t=await this.getIdToken();return await zn(this,async function(t,i){return Rn(t,"POST","/v1/accounts:delete",i)}(this.auth,{idToken:t})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(t=>Object.assign({},t)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(t,i){var e,n,s,r,o,h,a,u;const c=null!==(e=i.displayName)&&void 0!==e?e:void 0,l=null!==(n=i.email)&&void 0!==n?n:void 0,f=null!==(s=i.phoneNumber)&&void 0!==s?s:void 0,d=null!==(r=i.photoURL)&&void 0!==r?r:void 0,p=null!==(o=i.tenantId)&&void 0!==o?o:void 0,w=null!==(h=i._redirectEventId)&&void 0!==h?h:void 0,v=null!==(a=i.createdAt)&&void 0!==a?a:void 0,g=null!==(u=i.lastLoginAt)&&void 0!==u?u:void 0,{uid:m,emailVerified:y,isAnonymous:b,providerData:E,stsTokenManager:S}=i;En(m&&S,t,"internal-error");const T=Jn.fromJSON(this.name,S);En("string"==typeof m,t,"internal-error"),Gn(c,t.name),Gn(l,t.name),En("boolean"==typeof y,t,"internal-error"),En("boolean"==typeof b,t,"internal-error"),Gn(f,t.name),Gn(d,t.name),Gn(p,t.name),Gn(w,t.name),Gn(v,t.name),Gn(g,t.name);const I=new Xn({uid:m,auth:t,email:l,emailVerified:y,displayName:c,isAnonymous:b,photoURL:d,phoneNumber:f,tenantId:p,stsTokenManager:T,createdAt:v,lastLoginAt:g});return E&&Array.isArray(E)&&(I.providerData=E.map(t=>Object.assign({},t))),w&&(I._redirectEventId=w),I}static async _fromIdTokenResponse(t,i,e=!1){const n=new Jn;n.updateFromServerResponse(i);const s=new Xn({uid:i.localId,auth:t,stsTokenManager:n,isAnonymous:e});return await qn(s),s}static async _fromGetAccountInfoResponse(t,i,e){const n=i.users[0];En(void 0!==n.localId,"internal-error");const s=void 0!==n.providerUserInfo?Hn(n.providerUserInfo):[],r=!(n.email&&n.passwordHash||(null==s?void 0:s.length)),o=new Jn;o.updateFromIdToken(e);const h=new Xn({uid:n.localId,auth:t,stsTokenManager:o,isAnonymous:r}),a={uid:n.localId,displayName:n.displayName||null,photoURL:n.photoUrl||null,email:n.email||null,emailVerified:n.emailVerified||!1,phoneNumber:n.phoneNumber||null,tenantId:n.tenantId||null,providerData:s,metadata:new Vn(n.createdAt,n.lastLoginAt),isAnonymous:!(n.email&&n.passwordHash||(null==s?void 0:s.length))};return Object.assign(h,a),h}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Kn=new Map;function Yn(t){Tn(t instanceof Function,"Expected a class definition");let i=Kn.get(t);return i?(Tn(i instanceof t,"Instance stored in cache mismatched with class"),i):(i=new t,Kn.set(t,i),i)}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zn{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(t,i){this.storage[t]=i}async _get(t){const i=this.storage[t];return void 0===i?null:i}async _remove(t){delete this.storage[t]}_addListener(t,i){}_removeListener(t,i){}}Zn.type="NONE";const Qn=Zn;
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ts(t,i,e){return`firebase:${t}:${i}:${e}`}class is{constructor(t,i,e){this.persistence=t,this.auth=i,this.userKey=e;const{config:n,name:s}=this.auth;this.fullUserKey=ts(this.userKey,n.apiKey,s),this.fullPersistenceKey=ts("persistence",n.apiKey,s),this.boundEventHandler=i._onStorageEvent.bind(i),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(t){return this.persistence._set(this.fullUserKey,t.toJSON())}async getCurrentUser(){const t=await this.persistence._get(this.fullUserKey);if(!t)return null;if("string"==typeof t){const i=await Un(this.auth,{idToken:t}).catch(()=>{});return i?Xn._fromGetAccountInfoResponse(this.auth,i,t):null}return Xn._fromJSON(this.auth,t)}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(t){if(this.persistence===t)return;const i=await this.getCurrentUser();return await this.removeCurrentUser(),this.persistence=t,i?this.setCurrentUser(i):void 0}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(t,i,e="authUser"){if(!i.length)return new is(Yn(Qn),t,e);const n=(await Promise.all(i.map(async t=>{if(await t._isAvailable())return t}))).filter(t=>t);let s=n[0]||Yn(Qn);const r=ts(e,t.config.apiKey,t.name);let o=null;for(const e of i)try{const i=await e._get(r);if(i){let n;if("string"==typeof i){const e=await Un(t,{idToken:i}).catch(()=>{});if(!e)break;n=await Xn._fromGetAccountInfoResponse(t,e,i)}else n=Xn._fromJSON(t,i);e!==s&&(o=n),s=e;break}}catch(t){}const h=n.filter(t=>t._shouldAllowMigration);return s._shouldAllowMigration&&h.length?(s=h[0],o&&await s._set(r,o.toJSON()),await Promise.all(i.map(async t=>{if(t!==s)try{await t._remove(r)}catch(t){}})),new is(s,t,e)):new is(s,t,e)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function es(t){const i=t.toLowerCase();if(i.includes("opera/")||i.includes("opr/")||i.includes("opios/"))return"Opera";if(function(t=Ui()){return/iemobile/i.test(t)}(i))return"IEMobile";if(i.includes("msie")||i.includes("trident/"))return"IE";if(i.includes("edge/"))return"Edge";if(function(t=Ui()){return/firefox\//i.test(t)}(i))return"Firefox";if(i.includes("silk/"))return"Silk";if(function(t=Ui()){return/blackberry/i.test(t)}(i))return"Blackberry";if(function(t=Ui()){return/webos/i.test(t)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(i))return"Webos";if(function(t=Ui()){const i=t.toLowerCase();return i.includes("safari/")&&!i.includes("chrome/")&&!i.includes("crios/")&&!i.includes("android")}(i))return"Safari";if((i.includes("chrome/")||function(t=Ui()){return/crios\//i.test(t)}(i))&&!i.includes("edge/"))return"Chrome";if(function(t=Ui()){return/android/i.test(t)}(i))return"Android";{const i=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,e=t.match(i);if(2===(null==e?void 0:e.length))return e[1]}return"Other"}function ns(t,i=[]){let e;switch(t){case"Browser":e=es(Ui());break;case"Worker":e=`${es(Ui())}-${t}`;break;default:e=t}const n=i.length?i.join(","):"FirebaseCore-web";return`${e}/JsCore/${Ze}/${n}`}
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ss{constructor(t){this.auth=t,this.queue=[]}pushCallback(t,i){const e=i=>new Promise((e,n)=>{try{e(t(i))}catch(t){n(t)}});e.onAbort=i,this.queue.push(e);const n=this.queue.length-1;return()=>{this.queue[n]=()=>Promise.resolve()}}async runMiddleware(t){if(this.auth.currentUser===t)return;const i=[];try{for(const e of this.queue)await e(t),e.onAbort&&i.push(e.onAbort)}catch(t){i.reverse();for(const t of i)try{t()}catch(t){}throw this.auth._errorFactory.create("login-blocked",{originalMessage:null==t?void 0:t.message})}}}
/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rs{constructor(t){var i,e,n,s;const r=t.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=null!==(i=r.minPasswordLength)&&void 0!==i?i:6,r.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=r.maxPasswordLength),void 0!==r.containsLowercaseCharacter&&(this.customStrengthOptions.containsLowercaseLetter=r.containsLowercaseCharacter),void 0!==r.containsUppercaseCharacter&&(this.customStrengthOptions.containsUppercaseLetter=r.containsUppercaseCharacter),void 0!==r.containsNumericCharacter&&(this.customStrengthOptions.containsNumericCharacter=r.containsNumericCharacter),void 0!==r.containsNonAlphanumericCharacter&&(this.customStrengthOptions.containsNonAlphanumericCharacter=r.containsNonAlphanumericCharacter),this.enforcementState=t.enforcementState,"ENFORCEMENT_STATE_UNSPECIFIED"===this.enforcementState&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=null!==(n=null===(e=t.allowedNonAlphanumericCharacters)||void 0===e?void 0:e.join(""))&&void 0!==n?n:"",this.forceUpgradeOnSignin=null!==(s=t.forceUpgradeOnSignin)&&void 0!==s&&s,this.schemaVersion=t.schemaVersion}validatePassword(t){var i,e,n,s,r,o;const h={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(t,h),this.validatePasswordCharacterOptions(t,h),h.isValid&&(h.isValid=null===(i=h.meetsMinPasswordLength)||void 0===i||i),h.isValid&&(h.isValid=null===(e=h.meetsMaxPasswordLength)||void 0===e||e),h.isValid&&(h.isValid=null===(n=h.containsLowercaseLetter)||void 0===n||n),h.isValid&&(h.isValid=null===(s=h.containsUppercaseLetter)||void 0===s||s),h.isValid&&(h.isValid=null===(r=h.containsNumericCharacter)||void 0===r||r),h.isValid&&(h.isValid=null===(o=h.containsNonAlphanumericCharacter)||void 0===o||o),h}validatePasswordLengthOptions(t,i){const e=this.customStrengthOptions.minPasswordLength,n=this.customStrengthOptions.maxPasswordLength;e&&(i.meetsMinPasswordLength=t.length>=e),n&&(i.meetsMaxPasswordLength=t.length<=n)}validatePasswordCharacterOptions(t,i){let e;this.updatePasswordCharacterOptionsStatuses(i,!1,!1,!1,!1);for(let n=0;n<t.length;n++)e=t.charAt(n),this.updatePasswordCharacterOptionsStatuses(i,e>="a"&&e<="z",e>="A"&&e<="Z",e>="0"&&e<="9",this.allowedNonAlphanumericCharacters.includes(e))}updatePasswordCharacterOptionsStatuses(t,i,e,n,s){this.customStrengthOptions.containsLowercaseLetter&&(t.containsLowercaseLetter||(t.containsLowercaseLetter=i)),this.customStrengthOptions.containsUppercaseLetter&&(t.containsUppercaseLetter||(t.containsUppercaseLetter=e)),this.customStrengthOptions.containsNumericCharacter&&(t.containsNumericCharacter||(t.containsNumericCharacter=n)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(t.containsNonAlphanumericCharacter||(t.containsNonAlphanumericCharacter=s))}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class os{constructor(t,i,e,n){this.app=t,this.heartbeatServiceProvider=i,this.appCheckServiceProvider=e,this.config=n,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new hs(this),this.idTokenSubscription=new hs(this),this.beforeStateQueue=new ss(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=dn,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this._resolvePersistenceManagerAvailable=void 0,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=t.name,this.clientVersion=n.sdkClientVersion,this._persistenceManagerAvailable=new Promise(t=>this._resolvePersistenceManagerAvailable=t)}_initializeWithPersistence(t,i){return i&&(this._popupRedirectResolver=Yn(i)),this._initializationPromise=this.queue(async()=>{var e,n,s;if(!this._deleted&&(this.persistenceManager=await is.create(this,t),null===(e=this._resolvePersistenceManagerAvailable)||void 0===e||e.call(this),!this._deleted)){if(null===(n=this._popupRedirectResolver)||void 0===n?void 0:n._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch(t){}await this.initializeCurrentUser(i),this.lastNotifiedUid=(null===(s=this.currentUser)||void 0===s?void 0:s.uid)||null,this._deleted||(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const t=await this.assertedPersistence.getCurrentUser();return this.currentUser||t?this.currentUser&&t&&this.currentUser.uid===t.uid?(this._currentUser._assign(t),void await this.currentUser.getIdToken()):void await this._updateCurrentUser(t,!0):void 0}async initializeCurrentUserFromIdToken(t){try{const i=await Un(this,{idToken:t}),e=await Xn._fromGetAccountInfoResponse(this,i,t);await this.directlySetCurrentUser(e)}catch(t){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",t),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(t){var i;if(Ke(this.app)){const t=this.app.settings.authIdToken;return t?new Promise(i=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(t).then(i,i))}):this.directlySetCurrentUser(null)}const e=await this.assertedPersistence.getCurrentUser();let n=e,s=!1;if(t&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const e=null===(i=this.redirectUser)||void 0===i?void 0:i._redirectEventId,r=null==n?void 0:n._redirectEventId,o=await this.tryRedirectSignIn(t);e&&e!==r||!(null==o?void 0:o.user)||(n=o.user,s=!0)}if(!n)return this.directlySetCurrentUser(null);if(!n._redirectEventId){if(s)try{await this.beforeStateQueue.runMiddleware(n)}catch(t){n=e,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(t))}return n?this.reloadAndSetCurrentUserOrClear(n):this.directlySetCurrentUser(null)}return En(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===n._redirectEventId?this.directlySetCurrentUser(n):this.reloadAndSetCurrentUserOrClear(n)}async tryRedirectSignIn(t){let i=null;try{i=await this._popupRedirectResolver._completeRedirectFn(this,t,!0)}catch(t){await this._setRedirectUser(null)}return i}async reloadAndSetCurrentUserOrClear(t){try{await qn(t)}catch(t){if("auth/network-request-failed"!==(null==t?void 0:t.code))return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(t)}useDeviceLanguage(){this.languageCode=function(){if("undefined"==typeof navigator)return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}()}async _delete(){this._deleted=!0}async updateCurrentUser(t){if(Ke(this.app))return Promise.reject(yn(this));const i=t?Vi(t):null;return i&&En(i.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(i&&i._clone(this))}async _updateCurrentUser(t,i=!1){if(!this._deleted)return t&&En(this.tenantId===t.tenantId,this,"tenant-id-mismatch"),i||await this.beforeStateQueue.runMiddleware(t),this.queue(async()=>{await this.directlySetCurrentUser(t),this.notifyAuthListeners()})}async signOut(){return Ke(this.app)?Promise.reject(yn(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(t){return Ke(this.app)?Promise.reject(yn(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(Yn(t))})}_getRecaptchaConfig(){return null==this.tenantId?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(t){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const i=this._getPasswordPolicyInternal();return i.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):i.validatePassword(t)}_getPasswordPolicyInternal(){return null===this.tenantId?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const t=await async function(t,i={}){return Rn(t,"GET","/v2/passwordPolicy",Cn(t,i))}
/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(this),i=new rs(t);null===this.tenantId?this._projectPasswordPolicy=i:this._tenantPasswordPolicies[this.tenantId]=i}_getPersistenceType(){return this.assertedPersistence.persistence.type}_getPersistence(){return this.assertedPersistence.persistence}_updateErrorMap(t){this._errorFactory=new Fi("auth","Firebase",t())}onAuthStateChanged(t,i,e){return this.registerStateListener(this.authStateSubscription,t,i,e)}beforeAuthStateChanged(t,i){return this.beforeStateQueue.pushCallback(t,i)}onIdTokenChanged(t,i,e){return this.registerStateListener(this.idTokenSubscription,t,i,e)}authStateReady(){return new Promise((t,i)=>{if(this.currentUser)t();else{const e=this.onAuthStateChanged(()=>{e(),t()},i)}})}async revokeAccessToken(t){if(this.currentUser){const i={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:t,idToken:await this.currentUser.getIdToken()};null!=this.tenantId&&(i.tenantId=this.tenantId),await async function(t,i){return Rn(t,"POST","/v2/accounts:revokeToken",Cn(t,i))}(this,i)}}toJSON(){var t;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:null===(t=this._currentUser)||void 0===t?void 0:t.toJSON()}}async _setRedirectUser(t,i){const e=await this.getOrInitRedirectPersistenceManager(i);return null===t?e.removeCurrentUser():e.setCurrentUser(t)}async getOrInitRedirectPersistenceManager(t){if(!this.redirectPersistenceManager){const i=t&&Yn(t)||this._popupRedirectResolver;En(i,this,"argument-error"),this.redirectPersistenceManager=await is.create(this,[Yn(i._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(t){var i,e;return this._isInitialized&&await this.queue(async()=>{}),(null===(i=this._currentUser)||void 0===i?void 0:i._redirectEventId)===t?this._currentUser:(null===(e=this.redirectUser)||void 0===e?void 0:e._redirectEventId)===t?this.redirectUser:null}async _persistUserIfCurrent(t){if(t===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(t))}_notifyListenersIfCurrent(t){t===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var t,i;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const e=null!==(i=null===(t=this.currentUser)||void 0===t?void 0:t.uid)&&void 0!==i?i:null;this.lastNotifiedUid!==e&&(this.lastNotifiedUid=e,this.authStateSubscription.next(this.currentUser))}registerStateListener(t,i,e,n){if(this._deleted)return()=>{};const s="function"==typeof i?i:i.next.bind(i);let r=!1;const o=this._isInitialized?Promise.resolve():this._initializationPromise;if(En(o,this,"internal-error"),o.then(()=>{r||s(this.currentUser)}),"function"==typeof i){const s=t.addObserver(i,e,n);return()=>{r=!0,s()}}{const e=t.addObserver(i);return()=>{r=!0,e()}}}async directlySetCurrentUser(t){this.currentUser&&this.currentUser!==t&&this._currentUser._stopProactiveRefresh(),t&&this.isProactiveRefreshEnabled&&t._startProactiveRefresh(),this.currentUser=t,t?await this.assertedPersistence.setCurrentUser(t):await this.assertedPersistence.removeCurrentUser()}queue(t){return this.operations=this.operations.then(t,t),this.operations}get assertedPersistence(){return En(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(t){t&&!this.frameworks.includes(t)&&(this.frameworks.push(t),this.frameworks.sort(),this.clientVersion=ns(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var t;const i={"X-Client-Version":this.clientVersion};this.app.options.appId&&(i["X-Firebase-gmpid"]=this.app.options.appId);const e=await(null===(t=this.heartbeatServiceProvider.getImmediate({optional:!0}))||void 0===t?void 0:t.getHeartbeatsHeader());e&&(i["X-Firebase-Client"]=e);const n=await this._getAppCheckToken();return n&&(i["X-Firebase-AppCheck"]=n),i}async _getAppCheckToken(){var t;if(Ke(this.app)&&this.app.settings.appCheckToken)return this.app.settings.appCheckToken;const i=await(null===(t=this.appCheckServiceProvider.getImmediate({optional:!0}))||void 0===t?void 0:t.getToken());return(null==i?void 0:i.error)&&function(t,...i){pn.logLevel<=Hi.WARN&&pn.warn(`Auth (${Ze}): ${t}`,...i)}(`Error while retrieving App Check token: ${i.error}`),null==i?void 0:i.token}}class hs{constructor(t){this.auth=t,this.observer=null,this.addObserver=function(t,i){const e=new zi(t,i);return e.subscribe.bind(e)}(t=>this.observer=t)}get next(){return En(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}new _n(3e4,6e4),
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
new _n(2e3,1e4),
/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
new _n(3e4,6e4),
/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
new _n(5e3,15e3);var as="@firebase/auth",us="1.10.8";
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class cs{constructor(t){this.auth=t,this.internalListeners=new Map}getUid(){var t;return this.assertAuthConfigured(),(null===(t=this.auth.currentUser)||void 0===t?void 0:t.uid)||null}async getToken(t){if(this.assertAuthConfigured(),await this.auth._initializationPromise,!this.auth.currentUser)return null;return{accessToken:await this.auth.currentUser.getIdToken(t)}}addAuthTokenListener(t){if(this.assertAuthConfigured(),this.internalListeners.has(t))return;const i=this.auth.onIdTokenChanged(i=>{t((null==i?void 0:i.stsTokenManager.accessToken)||null)});this.internalListeners.set(t,i),this.updateProactiveRefresh()}removeAuthTokenListener(t){this.assertAuthConfigured();const i=this.internalListeners.get(t);i&&(this.internalListeners.delete(t),i(),this.updateProactiveRefresh())}assertAuthConfigured(){En(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var ls;
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(t=>{var i;null===(i=Mi())||void 0===i||i[`_${t}`]})("authIdTokenMaxAge"),ls="Browser",Xe(new qi("auth",(t,{options:i})=>{const e=t.getProvider("app").getImmediate(),n=t.getProvider("heartbeat"),s=t.getProvider("app-check-internal"),{apiKey:r,authDomain:o}=e.options;En(r&&!r.includes(":"),"invalid-api-key",{appName:e.name});const h={apiKey:r,authDomain:o,clientPlatform:ls,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:ns(ls)},a=new os(e,n,s,h);return function(t,i){const e=(null==i?void 0:i.persistence)||[],n=(Array.isArray(e)?e:[e]).map(Yn);(null==i?void 0:i.errorMap)&&t._updateErrorMap(i.errorMap),t._initializeWithPersistence(n,null==i?void 0:i.popupRedirectResolver)}(a,i),a},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((t,i,e)=>{t.getProvider("auth-internal").initialize()})),Xe(new qi("auth-internal",t=>(t=>new cs(t))(function(t){return Vi(t)}(t.getProvider("auth").getImmediate())),"PRIVATE").setInstantiationMode("EXPLICIT")),Qe(as,us,function(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}(ls)),Qe(as,us,"esm2017");var fs,ds="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{};
/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/(function(){var t;
/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function i(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.B=Array(this.blockSize),this.o=this.h=0,this.s()}function e(t,i,e){e||(e=0);var n=Array(16);if("string"==typeof i)for(var s=0;16>s;++s)n[s]=i.charCodeAt(e++)|i.charCodeAt(e++)<<8|i.charCodeAt(e++)<<16|i.charCodeAt(e++)<<24;else for(s=0;16>s;++s)n[s]=i[e++]|i[e++]<<8|i[e++]<<16|i[e++]<<24;i=t.g[0],e=t.g[1],s=t.g[2];var r=t.g[3],o=i+(r^e&(s^r))+n[0]+3614090360&4294967295;o=(e=(s=(r=(i=(e=(s=(r=(i=(e=(s=(r=(i=(e=(s=(r=(i=(e=(s=(r=(i=(e=(s=(r=(i=(e=(s=(r=(i=(e=(s=(r=(i=(e=(s=(r=(i=(e=(s=(r=(i=(e=(s=(r=(i=(e=(s=(r=(i=(e=(s=(r=(i=(e=(s=(r=(i=(e=(s=(r=(i=e+(o<<7&4294967295|o>>>25))+((o=r+(s^i&(e^s))+n[1]+3905402710&4294967295)<<12&4294967295|o>>>20))+((o=s+(e^r&(i^e))+n[2]+606105819&4294967295)<<17&4294967295|o>>>15))+((o=e+(i^s&(r^i))+n[3]+3250441966&4294967295)<<22&4294967295|o>>>10))+((o=i+(r^e&(s^r))+n[4]+4118548399&4294967295)<<7&4294967295|o>>>25))+((o=r+(s^i&(e^s))+n[5]+1200080426&4294967295)<<12&4294967295|o>>>20))+((o=s+(e^r&(i^e))+n[6]+2821735955&4294967295)<<17&4294967295|o>>>15))+((o=e+(i^s&(r^i))+n[7]+4249261313&4294967295)<<22&4294967295|o>>>10))+((o=i+(r^e&(s^r))+n[8]+1770035416&4294967295)<<7&4294967295|o>>>25))+((o=r+(s^i&(e^s))+n[9]+2336552879&4294967295)<<12&4294967295|o>>>20))+((o=s+(e^r&(i^e))+n[10]+4294925233&4294967295)<<17&4294967295|o>>>15))+((o=e+(i^s&(r^i))+n[11]+2304563134&4294967295)<<22&4294967295|o>>>10))+((o=i+(r^e&(s^r))+n[12]+1804603682&4294967295)<<7&4294967295|o>>>25))+((o=r+(s^i&(e^s))+n[13]+4254626195&4294967295)<<12&4294967295|o>>>20))+((o=s+(e^r&(i^e))+n[14]+2792965006&4294967295)<<17&4294967295|o>>>15))+((o=e+(i^s&(r^i))+n[15]+1236535329&4294967295)<<22&4294967295|o>>>10))+((o=i+(s^r&(e^s))+n[1]+4129170786&4294967295)<<5&4294967295|o>>>27))+((o=r+(e^s&(i^e))+n[6]+3225465664&4294967295)<<9&4294967295|o>>>23))+((o=s+(i^e&(r^i))+n[11]+643717713&4294967295)<<14&4294967295|o>>>18))+((o=e+(r^i&(s^r))+n[0]+3921069994&4294967295)<<20&4294967295|o>>>12))+((o=i+(s^r&(e^s))+n[5]+3593408605&4294967295)<<5&4294967295|o>>>27))+((o=r+(e^s&(i^e))+n[10]+38016083&4294967295)<<9&4294967295|o>>>23))+((o=s+(i^e&(r^i))+n[15]+3634488961&4294967295)<<14&4294967295|o>>>18))+((o=e+(r^i&(s^r))+n[4]+3889429448&4294967295)<<20&4294967295|o>>>12))+((o=i+(s^r&(e^s))+n[9]+568446438&4294967295)<<5&4294967295|o>>>27))+((o=r+(e^s&(i^e))+n[14]+3275163606&4294967295)<<9&4294967295|o>>>23))+((o=s+(i^e&(r^i))+n[3]+4107603335&4294967295)<<14&4294967295|o>>>18))+((o=e+(r^i&(s^r))+n[8]+1163531501&4294967295)<<20&4294967295|o>>>12))+((o=i+(s^r&(e^s))+n[13]+2850285829&4294967295)<<5&4294967295|o>>>27))+((o=r+(e^s&(i^e))+n[2]+4243563512&4294967295)<<9&4294967295|o>>>23))+((o=s+(i^e&(r^i))+n[7]+1735328473&4294967295)<<14&4294967295|o>>>18))+((o=e+(r^i&(s^r))+n[12]+2368359562&4294967295)<<20&4294967295|o>>>12))+((o=i+(e^s^r)+n[5]+4294588738&4294967295)<<4&4294967295|o>>>28))+((o=r+(i^e^s)+n[8]+2272392833&4294967295)<<11&4294967295|o>>>21))+((o=s+(r^i^e)+n[11]+1839030562&4294967295)<<16&4294967295|o>>>16))+((o=e+(s^r^i)+n[14]+4259657740&4294967295)<<23&4294967295|o>>>9))+((o=i+(e^s^r)+n[1]+2763975236&4294967295)<<4&4294967295|o>>>28))+((o=r+(i^e^s)+n[4]+1272893353&4294967295)<<11&4294967295|o>>>21))+((o=s+(r^i^e)+n[7]+4139469664&4294967295)<<16&4294967295|o>>>16))+((o=e+(s^r^i)+n[10]+3200236656&4294967295)<<23&4294967295|o>>>9))+((o=i+(e^s^r)+n[13]+681279174&4294967295)<<4&4294967295|o>>>28))+((o=r+(i^e^s)+n[0]+3936430074&4294967295)<<11&4294967295|o>>>21))+((o=s+(r^i^e)+n[3]+3572445317&4294967295)<<16&4294967295|o>>>16))+((o=e+(s^r^i)+n[6]+76029189&4294967295)<<23&4294967295|o>>>9))+((o=i+(e^s^r)+n[9]+3654602809&4294967295)<<4&4294967295|o>>>28))+((o=r+(i^e^s)+n[12]+3873151461&4294967295)<<11&4294967295|o>>>21))+((o=s+(r^i^e)+n[15]+530742520&4294967295)<<16&4294967295|o>>>16))+((o=e+(s^r^i)+n[2]+3299628645&4294967295)<<23&4294967295|o>>>9))+((o=i+(s^(e|~r))+n[0]+4096336452&4294967295)<<6&4294967295|o>>>26))+((o=r+(e^(i|~s))+n[7]+1126891415&4294967295)<<10&4294967295|o>>>22))+((o=s+(i^(r|~e))+n[14]+2878612391&4294967295)<<15&4294967295|o>>>17))+((o=e+(r^(s|~i))+n[5]+4237533241&4294967295)<<21&4294967295|o>>>11))+((o=i+(s^(e|~r))+n[12]+1700485571&4294967295)<<6&4294967295|o>>>26))+((o=r+(e^(i|~s))+n[3]+2399980690&4294967295)<<10&4294967295|o>>>22))+((o=s+(i^(r|~e))+n[10]+4293915773&4294967295)<<15&4294967295|o>>>17))+((o=e+(r^(s|~i))+n[1]+2240044497&4294967295)<<21&4294967295|o>>>11))+((o=i+(s^(e|~r))+n[8]+1873313359&4294967295)<<6&4294967295|o>>>26))+((o=r+(e^(i|~s))+n[15]+4264355552&4294967295)<<10&4294967295|o>>>22))+((o=s+(i^(r|~e))+n[6]+2734768916&4294967295)<<15&4294967295|o>>>17))+((o=e+(r^(s|~i))+n[13]+1309151649&4294967295)<<21&4294967295|o>>>11))+((r=(i=e+((o=i+(s^(e|~r))+n[4]+4149444226&4294967295)<<6&4294967295|o>>>26))+((o=r+(e^(i|~s))+n[11]+3174756917&4294967295)<<10&4294967295|o>>>22))^((s=r+((o=s+(i^(r|~e))+n[2]+718787259&4294967295)<<15&4294967295|o>>>17))|~i))+n[9]+3951481745&4294967295,t.g[0]=t.g[0]+i&4294967295,t.g[1]=t.g[1]+(s+(o<<21&4294967295|o>>>11))&4294967295,t.g[2]=t.g[2]+s&4294967295,t.g[3]=t.g[3]+r&4294967295}function n(t,i){this.h=i;for(var e=[],n=!0,s=t.length-1;0<=s;s--){var r=0|t[s];n&&r==i||(e[s]=r,n=!1)}this.g=e}!function(t,i){function e(){}e.prototype=i.prototype,t.D=i.prototype,t.prototype=new e,t.prototype.constructor=t,t.C=function(t,e,n){for(var s=Array(arguments.length-2),r=2;r<arguments.length;r++)s[r-2]=arguments[r];return i.prototype[e].apply(t,s)}}(i,function(){this.blockSize=-1}),i.prototype.s=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0},i.prototype.u=function(t,i){void 0===i&&(i=t.length);for(var n=i-this.blockSize,s=this.B,r=this.h,o=0;o<i;){if(0==r)for(;o<=n;)e(this,t,o),o+=this.blockSize;if("string"==typeof t){for(;o<i;)if(s[r++]=t.charCodeAt(o++),r==this.blockSize){e(this,s),r=0;break}}else for(;o<i;)if(s[r++]=t[o++],r==this.blockSize){e(this,s),r=0;break}}this.h=r,this.o+=i},i.prototype.v=function(){var t=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);t[0]=128;for(var i=1;i<t.length-8;++i)t[i]=0;var e=8*this.o;for(i=t.length-8;i<t.length;++i)t[i]=255&e,e/=256;for(this.u(t),t=Array(16),i=e=0;4>i;++i)for(var n=0;32>n;n+=8)t[e++]=this.g[i]>>>n&255;return t};var s={};function r(t){return-128<=t&&128>t?function(t,i){var e=s;return Object.prototype.hasOwnProperty.call(e,t)?e[t]:e[t]=i(t)}(t,function(t){return new n([0|t],0>t?-1:0)}):new n([0|t],0>t?-1:0)}function o(t){if(isNaN(t)||!isFinite(t))return h;if(0>t)return f(o(-t));for(var i=[],e=1,s=0;t>=e;s++)i[s]=t/e|0,e*=4294967296;return new n(i,0)}var h=r(0),a=r(1),u=r(16777216);function c(t){if(0!=t.h)return!1;for(var i=0;i<t.g.length;i++)if(0!=t.g[i])return!1;return!0}function l(t){return-1==t.h}function f(t){for(var i=t.g.length,e=[],s=0;s<i;s++)e[s]=~t.g[s];return new n(e,~t.h).add(a)}function d(t,i){return t.add(f(i))}function p(t,i){for(;(65535&t[i])!=t[i];)t[i+1]+=t[i]>>>16,t[i]&=65535,i++}function w(t,i){this.g=t,this.h=i}function v(t,i){if(c(i))throw Error("division by zero");if(c(t))return new w(h,h);if(l(t))return i=v(f(t),i),new w(f(i.g),f(i.h));if(l(i))return i=v(t,f(i)),new w(f(i.g),i.h);if(30<t.g.length){if(l(t)||l(i))throw Error("slowDivide_ only works with positive integers.");for(var e=a,n=i;0>=n.l(t);)e=g(e),n=g(n);var s=m(e,1),r=m(n,1);for(n=m(n,2),e=m(e,2);!c(n);){var u=r.add(n);0>=u.l(t)&&(s=s.add(e),r=u),n=m(n,1),e=m(e,1)}return i=d(t,s.j(i)),new w(s,i)}for(s=h;0<=t.l(i);){for(e=Math.max(1,Math.floor(t.m()/i.m())),n=48>=(n=Math.ceil(Math.log(e)/Math.LN2))?1:Math.pow(2,n-48),u=(r=o(e)).j(i);l(u)||0<u.l(t);)u=(r=o(e-=n)).j(i);c(r)&&(r=a),s=s.add(r),t=d(t,u)}return new w(s,t)}function g(t){for(var i=t.g.length+1,e=[],s=0;s<i;s++)e[s]=t.i(s)<<1|t.i(s-1)>>>31;return new n(e,t.h)}function m(t,i){var e=i>>5;i%=32;for(var s=t.g.length-e,r=[],o=0;o<s;o++)r[o]=0<i?t.i(o+e)>>>i|t.i(o+e+1)<<32-i:t.i(o+e);return new n(r,t.h)}(t=n.prototype).m=function(){if(l(this))return-f(this).m();for(var t=0,i=1,e=0;e<this.g.length;e++){var n=this.i(e);t+=(0<=n?n:4294967296+n)*i,i*=4294967296}return t},t.toString=function(t){if(2>(t=t||10)||36<t)throw Error("radix out of range: "+t);if(c(this))return"0";if(l(this))return"-"+f(this).toString(t);for(var i=o(Math.pow(t,6)),e=this,n="";;){var s=v(e,i).g,r=((0<(e=d(e,s.j(i))).g.length?e.g[0]:e.h)>>>0).toString(t);if(c(e=s))return r+n;for(;6>r.length;)r="0"+r;n=r+n}},t.i=function(t){return 0>t?0:t<this.g.length?this.g[t]:this.h},t.l=function(t){return l(t=d(this,t))?-1:c(t)?0:1},t.abs=function(){return l(this)?f(this):this},t.add=function(t){for(var i=Math.max(this.g.length,t.g.length),e=[],s=0,r=0;r<=i;r++){var o=s+(65535&this.i(r))+(65535&t.i(r)),h=(o>>>16)+(this.i(r)>>>16)+(t.i(r)>>>16);s=h>>>16,o&=65535,h&=65535,e[r]=h<<16|o}return new n(e,-2147483648&e[e.length-1]?-1:0)},t.j=function(t){if(c(this)||c(t))return h;if(l(this))return l(t)?f(this).j(f(t)):f(f(this).j(t));if(l(t))return f(this.j(f(t)));if(0>this.l(u)&&0>t.l(u))return o(this.m()*t.m());for(var i=this.g.length+t.g.length,e=[],s=0;s<2*i;s++)e[s]=0;for(s=0;s<this.g.length;s++)for(var r=0;r<t.g.length;r++){var a=this.i(s)>>>16,d=65535&this.i(s),w=t.i(r)>>>16,v=65535&t.i(r);e[2*s+2*r]+=d*v,p(e,2*s+2*r),e[2*s+2*r+1]+=a*v,p(e,2*s+2*r+1),e[2*s+2*r+1]+=d*w,p(e,2*s+2*r+1),e[2*s+2*r+2]+=a*w,p(e,2*s+2*r+2)}for(s=0;s<i;s++)e[s]=e[2*s+1]<<16|e[2*s];for(s=i;s<2*i;s++)e[s]=0;return new n(e,0)},t.A=function(t){return v(this,t).h},t.and=function(t){for(var i=Math.max(this.g.length,t.g.length),e=[],s=0;s<i;s++)e[s]=this.i(s)&t.i(s);return new n(e,this.h&t.h)},t.or=function(t){for(var i=Math.max(this.g.length,t.g.length),e=[],s=0;s<i;s++)e[s]=this.i(s)|t.i(s);return new n(e,this.h|t.h)},t.xor=function(t){for(var i=Math.max(this.g.length,t.g.length),e=[],s=0;s<i;s++)e[s]=this.i(s)^t.i(s);return new n(e,this.h^t.h)},i.prototype.digest=i.prototype.v,i.prototype.reset=i.prototype.s,i.prototype.update=i.prototype.u,n.prototype.add=n.prototype.add,n.prototype.multiply=n.prototype.j,n.prototype.modulo=n.prototype.A,n.prototype.compare=n.prototype.l,n.prototype.toNumber=n.prototype.m,n.prototype.toString=n.prototype.toString,n.prototype.getBits=n.prototype.i,n.fromNumber=o,n.fromString=function t(i,e){if(0==i.length)throw Error("number format error: empty string");if(2>(e=e||10)||36<e)throw Error("radix out of range: "+e);if("-"==i.charAt(0))return f(t(i.substring(1),e));if(0<=i.indexOf("-"))throw Error('number format error: interior "-" character');for(var n=o(Math.pow(e,8)),s=h,r=0;r<i.length;r+=8){var a=Math.min(8,i.length-r),u=parseInt(i.substring(r,r+a),e);8>a?(a=o(Math.pow(e,a)),s=s.j(a).add(o(u))):s=(s=s.j(n)).add(o(u))}return s},fs=n}).apply(void 0!==ds?ds:"undefined"!=typeof self?self:"undefined"!=typeof window?window:{});var ps="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{};(function(){var t,i="function"==typeof Object.defineProperties?Object.defineProperty:function(t,i,e){return t==Array.prototype||t==Object.prototype||(t[i]=e.value),t};var e=function(t){t=["object"==typeof globalThis&&globalThis,t,"object"==typeof window&&window,"object"==typeof self&&self,"object"==typeof ps&&ps];for(var i=0;i<t.length;++i){var e=t[i];if(e&&e.Math==Math)return e}throw Error("Cannot find global object")}(this);!function(t,n){if(n)t:{var s=e;t=t.split(".");for(var r=0;r<t.length-1;r++){var o=t[r];if(!(o in s))break t;s=s[o]}(n=n(r=s[t=t[t.length-1]]))!=r&&null!=n&&i(s,t,{configurable:!0,writable:!0,value:n})}}("Array.prototype.values",function(t){return t||function(){return function(t,i){t instanceof String&&(t+="");var e=0,n=!1,s={next:function(){if(!n&&e<t.length){var s=e++;return{value:i(s,t[s]),done:!1}}return n=!0,{done:!0,value:void 0}}};return s[Symbol.iterator]=function(){return s},s}(this,function(t,i){return i})}});
/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/
var n=n||{},s=this||self;function r(t){var i=typeof t;return"array"==(i="object"!=i?i:t?Array.isArray(t)?"array":i:"null")||"object"==i&&"number"==typeof t.length}function o(t){var i=typeof t;return"object"==i&&null!=t||"function"==i}function h(t,i,e){return t.call.apply(t.bind,arguments)}function a(t,i,e){if(!t)throw Error();if(2<arguments.length){var n=Array.prototype.slice.call(arguments,2);return function(){var e=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(e,n),t.apply(i,e)}}return function(){return t.apply(i,arguments)}}function u(t,i,e){return(u=Function.prototype.bind&&-1!=Function.prototype.bind.toString().indexOf("native code")?h:a).apply(null,arguments)}function c(t,i){var e=Array.prototype.slice.call(arguments,1);return function(){var i=e.slice();return i.push.apply(i,arguments),t.apply(this,i)}}function l(t,i){function e(){}e.prototype=i.prototype,t.aa=i.prototype,t.prototype=new e,t.prototype.constructor=t,t.Qb=function(t,e,n){for(var s=Array(arguments.length-2),r=2;r<arguments.length;r++)s[r-2]=arguments[r];return i.prototype[e].apply(t,s)}}function f(t){const i=t.length;if(0<i){const e=Array(i);for(let n=0;n<i;n++)e[n]=t[n];return e}return[]}function d(t,i){for(let i=1;i<arguments.length;i++){const e=arguments[i];if(r(e)){const i=t.length||0,n=e.length||0;t.length=i+n;for(let s=0;s<n;s++)t[i+s]=e[s]}else t.push(e)}}function p(t){return/^[\s\xa0]*$/.test(t)}function w(){var t=s.navigator;return t&&(t=t.userAgent)?t:""}function v(t){return v[" "](t),t}v[" "]=function(){};var g=!(-1==w().indexOf("Gecko")||-1!=w().toLowerCase().indexOf("webkit")&&-1==w().indexOf("Edge")||-1!=w().indexOf("Trident")||-1!=w().indexOf("MSIE")||-1!=w().indexOf("Edge"));function m(t,i,e){for(const n in t)i.call(e,t[n],n,t)}function y(t){const i={};for(const e in t)i[e]=t[e];return i}const b="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function E(t,i){let e,n;for(let i=1;i<arguments.length;i++){for(e in n=arguments[i],n)t[e]=n[e];for(let i=0;i<b.length;i++)e=b[i],Object.prototype.hasOwnProperty.call(n,e)&&(t[e]=n[e])}}function S(t){var i=1;t=t.split(":");const e=[];for(;0<i&&t.length;)e.push(t.shift()),i--;return t.length&&e.push(t.join(":")),e}function T(t){s.setTimeout(()=>{throw t},0)}function I(){var t=O;let i=null;return t.g&&(i=t.g,t.g=t.g.next,t.g||(t.h=null),i.next=null),i}var A=new class{constructor(t,i){this.i=t,this.j=i,this.h=0,this.g=null}get(){let t;return 0<this.h?(this.h--,t=this.g,this.g=t.next,t.next=null):t=this.i(),t}}(()=>new _,t=>t.reset());class _{constructor(){this.next=this.g=this.h=null}set(t,i){this.h=t,this.g=i,this.next=null}reset(){this.next=this.g=this.h=null}}let k,N=!1,O=new class{constructor(){this.h=this.g=null}add(t,i){const e=A.get();e.set(t,i),this.h?this.h.next=e:this.g=e,this.h=e}},D=()=>{const t=s.Promise.resolve(void 0);k=()=>{t.then(C)}};var C=()=>{for(var t;t=I();){try{t.h.call(t.g)}catch(t){T(t)}var i=A;i.j(t),100>i.h&&(i.h++,t.next=i.g,i.g=t)}N=!1};function R(){this.s=this.s,this.C=this.C}function P(t,i){this.type=t,this.g=this.target=i,this.defaultPrevented=!1}R.prototype.s=!1,R.prototype.ma=function(){this.s||(this.s=!0,this.N())},R.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()},P.prototype.h=function(){this.defaultPrevented=!0};var x=function(){if(!s.addEventListener||!Object.defineProperty)return!1;var t=!1,i=Object.defineProperty({},"passive",{get:function(){t=!0}});try{const t=()=>{};s.addEventListener("test",t,i),s.removeEventListener("test",t,i)}catch(t){}return t}();function M(t,i){if(P.call(this,t?t.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,t){var e=this.type=t.type,n=t.changedTouches&&t.changedTouches.length?t.changedTouches[0]:null;if(this.target=t.target||t.srcElement,this.g=i,i=t.relatedTarget){if(g){t:{try{v(i.nodeName);var s=!0;break t}catch(t){}s=!1}s||(i=null)}}else"mouseover"==e?i=t.fromElement:"mouseout"==e&&(i=t.toElement);this.relatedTarget=i,n?(this.clientX=void 0!==n.clientX?n.clientX:n.pageX,this.clientY=void 0!==n.clientY?n.clientY:n.pageY,this.screenX=n.screenX||0,this.screenY=n.screenY||0):(this.clientX=void 0!==t.clientX?t.clientX:t.pageX,this.clientY=void 0!==t.clientY?t.clientY:t.pageY,this.screenX=t.screenX||0,this.screenY=t.screenY||0),this.button=t.button,this.key=t.key||"",this.ctrlKey=t.ctrlKey,this.altKey=t.altKey,this.shiftKey=t.shiftKey,this.metaKey=t.metaKey,this.pointerId=t.pointerId||0,this.pointerType="string"==typeof t.pointerType?t.pointerType:$[t.pointerType]||"",this.state=t.state,this.i=t,t.defaultPrevented&&M.aa.h.call(this)}}l(M,P);var $={2:"touch",3:"pen",4:"mouse"};M.prototype.h=function(){M.aa.h.call(this);var t=this.i;t.preventDefault?t.preventDefault():t.returnValue=!1};var U="closure_listenable_"+(1e6*Math.random()|0),L=0;function F(t,i,e,n,s){this.listener=t,this.proxy=null,this.src=i,this.type=e,this.capture=!!n,this.ha=s,this.key=++L,this.da=this.fa=!1}function j(t){t.da=!0,t.listener=null,t.proxy=null,t.src=null,t.ha=null}function B(t){this.src=t,this.g={},this.h=0}function z(t,i){var e=i.type;if(e in t.g){var n,s=t.g[e],r=Array.prototype.indexOf.call(s,i,void 0);(n=0<=r)&&Array.prototype.splice.call(s,r,1),n&&(j(i),0==t.g[e].length&&(delete t.g[e],t.h--))}}function W(t,i,e,n){for(var s=0;s<t.length;++s){var r=t[s];if(!r.da&&r.listener==i&&r.capture==!!e&&r.ha==n)return s}return-1}B.prototype.add=function(t,i,e,n,s){var r=t.toString();(t=this.g[r])||(t=this.g[r]=[],this.h++);var o=W(t,i,n,s);return-1<o?(i=t[o],e||(i.fa=!1)):((i=new F(i,this.src,r,!!n,s)).fa=e,t.push(i)),i};var V="closure_lm_"+(1e6*Math.random()|0),q={};function H(t,i,e,n,s){if(Array.isArray(i)){for(var r=0;r<i.length;r++)H(t,i[r],e,n,s);return null}return e=Q(e),t&&t[U]?t.K(i,e,!!o(n)&&!!n.capture,s):function(t,i,e,n,s,r){if(!i)throw Error("Invalid event type");var h=o(s)?!!s.capture:!!s,a=Y(t);if(a||(t[V]=a=new B(t)),e=a.add(i,e,n,h,r),e.proxy)return e;if(n=function(){function t(e){return i.call(t.src,t.listener,e)}const i=K;return t}(),e.proxy=n,n.src=t,n.listener=e,t.addEventListener)x||(s=h),void 0===s&&(s=!1),t.addEventListener(i.toString(),n,s);else if(t.attachEvent)t.attachEvent(X(i.toString()),n);else{if(!t.addListener||!t.removeListener)throw Error("addEventListener and attachEvent are unavailable.");t.addListener(n)}return e}(t,i,e,!1,n,s)}function J(t,i,e,n,s){if(Array.isArray(i))for(var r=0;r<i.length;r++)J(t,i[r],e,n,s);else n=o(n)?!!n.capture:!!n,e=Q(e),t&&t[U]?(t=t.i,(i=String(i).toString())in t.g&&(-1<(e=W(r=t.g[i],e,n,s))&&(j(r[e]),Array.prototype.splice.call(r,e,1),0==r.length&&(delete t.g[i],t.h--)))):t&&(t=Y(t))&&(i=t.g[i.toString()],t=-1,i&&(t=W(i,e,n,s)),(e=-1<t?i[t]:null)&&G(e))}function G(t){if("number"!=typeof t&&t&&!t.da){var i=t.src;if(i&&i[U])z(i.i,t);else{var e=t.type,n=t.proxy;i.removeEventListener?i.removeEventListener(e,n,t.capture):i.detachEvent?i.detachEvent(X(e),n):i.addListener&&i.removeListener&&i.removeListener(n),(e=Y(i))?(z(e,t),0==e.h&&(e.src=null,i[V]=null)):j(t)}}}function X(t){return t in q?q[t]:q[t]="on"+t}function K(t,i){if(t.da)t=!0;else{i=new M(i,this);var e=t.listener,n=t.ha||t.src;t.fa&&G(t),t=e.call(n,i)}return t}function Y(t){return(t=t[V])instanceof B?t:null}var Z="__closure_events_fn_"+(1e9*Math.random()>>>0);function Q(t){return"function"==typeof t?t:(t[Z]||(t[Z]=function(i){return t.handleEvent(i)}),t[Z])}function tt(){R.call(this),this.i=new B(this),this.M=this,this.F=null}function it(t,i){var e,n=t.F;if(n)for(e=[];n;n=n.F)e.push(n);if(t=t.M,n=i.type||i,"string"==typeof i)i=new P(i,t);else if(i instanceof P)i.target=i.target||t;else{var s=i;E(i=new P(n,t),s)}if(s=!0,e)for(var r=e.length-1;0<=r;r--){var o=i.g=e[r];s=et(o,n,!0,i)&&s}if(s=et(o=i.g=t,n,!0,i)&&s,s=et(o,n,!1,i)&&s,e)for(r=0;r<e.length;r++)s=et(o=i.g=e[r],n,!1,i)&&s}function et(t,i,e,n){if(!(i=t.i.g[String(i)]))return!0;i=i.concat();for(var s=!0,r=0;r<i.length;++r){var o=i[r];if(o&&!o.da&&o.capture==e){var h=o.listener,a=o.ha||o.src;o.fa&&z(t.i,o),s=!1!==h.call(a,n)&&s}}return s&&!n.defaultPrevented}function nt(t,i,e){if("function"==typeof t)e&&(t=u(t,e));else{if(!t||"function"!=typeof t.handleEvent)throw Error("Invalid listener argument");t=u(t.handleEvent,t)}return 2147483647<Number(i)?-1:s.setTimeout(t,i||0)}function st(t){t.g=nt(()=>{t.g=null,t.i&&(t.i=!1,st(t))},t.l);const i=t.h;t.h=null,t.m.apply(null,i)}l(tt,R),tt.prototype[U]=!0,tt.prototype.removeEventListener=function(t,i,e,n){J(this,t,i,e,n)},tt.prototype.N=function(){if(tt.aa.N.call(this),this.i){var t,i=this.i;for(t in i.g){for(var e=i.g[t],n=0;n<e.length;n++)j(e[n]);delete i.g[t],i.h--}}this.F=null},tt.prototype.K=function(t,i,e,n){return this.i.add(String(t),i,!1,e,n)},tt.prototype.L=function(t,i,e,n){return this.i.add(String(t),i,!0,e,n)};class rt extends R{constructor(t,i){super(),this.m=t,this.l=i,this.h=null,this.i=!1,this.g=null}j(t){this.h=arguments,this.g?this.i=!0:st(this)}N(){super.N(),this.g&&(s.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function ot(t){R.call(this),this.h=t,this.g={}}l(ot,R);var ht=[];function at(t){m(t.g,function(t,i){this.g.hasOwnProperty(i)&&G(t)},t),t.g={}}ot.prototype.N=function(){ot.aa.N.call(this),at(this)},ot.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var ut=s.JSON.stringify,ct=s.JSON.parse,lt=class{stringify(t){return s.JSON.stringify(t,void 0)}parse(t){return s.JSON.parse(t,void 0)}};function ft(){}function dt(t){return t.h||(t.h=t.i())}ft.prototype.h=null;var pt={OPEN:"a",kb:"b",Ja:"c",wb:"d"};function wt(){P.call(this,"d")}function vt(){P.call(this,"c")}l(wt,P),l(vt,P);var gt={},mt=null;function yt(){return mt=mt||new tt}function bt(t){P.call(this,gt.La,t)}function Et(t){const i=yt();it(i,new bt(i))}function St(t,i){P.call(this,gt.STAT_EVENT,t),this.stat=i}function Tt(t){const i=yt();it(i,new St(i,t))}function It(t,i){P.call(this,gt.Ma,t),this.size=i}function At(t,i){if("function"!=typeof t)throw Error("Fn must not be null and must be a function");return s.setTimeout(function(){t()},i)}function _t(){this.g=!0}function kt(t,i,e,n){t.info(function(){return"XMLHTTP TEXT ("+i+"): "+function(t,i){if(!t.g)return i;if(!i)return null;try{var e=JSON.parse(i);if(e)for(t=0;t<e.length;t++)if(Array.isArray(e[t])){var n=e[t];if(!(2>n.length)){var s=n[1];if(Array.isArray(s)&&!(1>s.length)){var r=s[0];if("noop"!=r&&"stop"!=r&&"close"!=r)for(var o=1;o<s.length;o++)s[o]=""}}}return ut(e)}catch(t){return i}}(t,e)+(n?" "+n:"")})}gt.La="serverreachability",l(bt,P),gt.STAT_EVENT="statevent",l(St,P),gt.Ma="timingevent",l(It,P),_t.prototype.xa=function(){this.g=!1},_t.prototype.info=function(){};var Nt,Ot={NO_ERROR:0,TIMEOUT:8};function Dt(){}function Ct(t,i,e,n){this.j=t,this.i=i,this.l=e,this.R=n||1,this.U=new ot(this),this.I=45e3,this.H=null,this.o=!1,this.m=this.A=this.v=this.L=this.F=this.S=this.B=null,this.D=[],this.g=null,this.C=0,this.s=this.u=null,this.X=-1,this.J=!1,this.O=0,this.M=null,this.W=this.K=this.T=this.P=!1,this.h=new Rt}function Rt(){this.i=null,this.g="",this.h=!1}l(Dt,ft),Dt.prototype.g=function(){return new XMLHttpRequest},Dt.prototype.i=function(){return{}},Nt=new Dt;var Pt={},xt={};function Mt(t,i,e){t.L=1,t.v=hi(ei(i)),t.m=e,t.P=!0,$t(t,null)}function $t(t,i){t.F=Date.now(),Ft(t),t.A=ei(t.v);var e=t.A,n=t.R;Array.isArray(n)||(n=[String(n)]),bi(e.i,"t",n),t.C=0,e=t.j.J,t.h=new Rt,t.g=he(t.j,e?i:null,!t.m),0<t.O&&(t.M=new rt(u(t.Y,t,t.g),t.O)),i=t.U,e=t.g,n=t.ca;var s="readystatechange";Array.isArray(s)||(s&&(ht[0]=s.toString()),s=ht);for(var r=0;r<s.length;r++){var o=H(e,s[r],n||i.handleEvent,!1,i.h||i);if(!o)break;i.g[o.key]=o}i=t.H?y(t.H):{},t.m?(t.u||(t.u="POST"),i["Content-Type"]="application/x-www-form-urlencoded",t.g.ea(t.A,t.u,t.m,i)):(t.u="GET",t.g.ea(t.A,t.u,null,i)),Et(),function(t,i,e,n,s,r){t.info(function(){if(t.g)if(r)for(var o="",h=r.split("&"),a=0;a<h.length;a++){var u=h[a].split("=");if(1<u.length){var c=u[0];u=u[1];var l=c.split("_");o=2<=l.length&&"type"==l[1]?o+(c+"=")+u+"&":o+(c+"=redacted&")}}else o=null;else o=r;return"XMLHTTP REQ ("+n+") [attempt "+s+"]: "+i+"\n"+e+"\n"+o})}(t.i,t.u,t.A,t.l,t.R,t.m)}function Ut(t){return!!t.g&&("GET"==t.u&&2!=t.L&&t.j.Ca)}function Lt(t,i){var e=t.C,n=i.indexOf("\n",e);return-1==n?xt:(e=Number(i.substring(e,n)),isNaN(e)?Pt:(n+=1)+e>i.length?xt:(i=i.slice(n,n+e),t.C=n+e,i))}function Ft(t){t.S=Date.now()+t.I,jt(t,t.I)}function jt(t,i){if(null!=t.B)throw Error("WatchDog timer not null");t.B=At(u(t.ba,t),i)}function Bt(t){t.B&&(s.clearTimeout(t.B),t.B=null)}function zt(t){0==t.j.G||t.J||ee(t.j,t)}function Wt(t){Bt(t);var i=t.M;i&&"function"==typeof i.ma&&i.ma(),t.M=null,at(t.U),t.g&&(i=t.g,t.g=null,i.abort(),i.ma())}function Vt(t,i){try{var e=t.j;if(0!=e.G&&(e.g==t||Xt(e.h,t)))if(!t.K&&Xt(e.h,t)&&3==e.G){try{var n=e.Da.g.parse(i)}catch(t){n=null}if(Array.isArray(n)&&3==n.length){var s=n;if(0==s[0]){t:if(!e.u){if(e.g){if(!(e.g.F+3e3<t.F))break t;ie(e),qi(e)}Zi(e),Tt(18)}}else e.za=s[1],0<e.za-e.T&&37500>s[2]&&e.F&&0==e.v&&!e.C&&(e.C=At(u(e.Za,e),6e3));if(1>=Gt(e.h)&&e.ca){try{e.ca()}catch(t){}e.ca=void 0}}else se(e,11)}else if((t.K||e.g==t)&&ie(e),!p(i))for(s=e.Da.g.parse(i),i=0;i<s.length;i++){let u=s[i];if(e.T=u[0],u=u[1],2==e.G)if("c"==u[0]){e.K=u[1],e.ia=u[2];const i=u[3];null!=i&&(e.la=i,e.j.info("VER="+e.la));const s=u[4];null!=s&&(e.Aa=s,e.j.info("SVER="+e.Aa));const c=u[5];null!=c&&"number"==typeof c&&0<c&&(n=1.5*c,e.L=n,e.j.info("backChannelRequestTimeoutMs_="+n)),n=e;const l=t.g;if(l){const t=l.g?l.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(t){var r=n.h;r.g||-1==t.indexOf("spdy")&&-1==t.indexOf("quic")&&-1==t.indexOf("h2")||(r.j=r.l,r.g=new Set,r.h&&(Kt(r,r.h),r.h=null))}if(n.D){const t=l.g?l.g.getResponseHeader("X-HTTP-Session-Id"):null;t&&(n.ya=t,oi(n.I,n.D,t))}}e.G=3,e.l&&e.l.ua(),e.ba&&(e.R=Date.now()-t.F,e.j.info("Handshake RTT: "+e.R+"ms"));var o=t;if((n=e).qa=oe(n,n.J?n.ia:null,n.W),o.K){Yt(n.h,o);var h=o,a=n.L;a&&(h.I=a),h.B&&(Bt(h),Ft(h)),n.g=o}else Yi(n);0<e.i.length&&Ji(e)}else"stop"!=u[0]&&"close"!=u[0]||se(e,7);else 3==e.G&&("stop"==u[0]||"close"==u[0]?"stop"==u[0]?se(e,7):Vi(e):"noop"!=u[0]&&e.l&&e.l.ta(u),e.v=0)}Et()}catch(t){}}Ct.prototype.ca=function(t){t=t.target;const i=this.M;i&&3==ji(t)?i.j():this.Y(t)},Ct.prototype.Y=function(t){try{if(t==this.g)t:{const f=ji(this.g);var i=this.g.Ba();this.g.Z();if(!(3>f)&&(3!=f||this.g&&(this.h.h||this.g.oa()||Bi(this.g)))){this.J||4!=f||7==i||Et(),Bt(this);var e=this.g.Z();this.X=e;i:if(Ut(this)){var n=Bi(this.g);t="";var r=n.length,o=4==ji(this.g);if(!this.h.i){if("undefined"==typeof TextDecoder){Wt(this),zt(this);var h="";break i}this.h.i=new s.TextDecoder}for(i=0;i<r;i++)this.h.h=!0,t+=this.h.i.decode(n[i],{stream:!(o&&i==r-1)});n.length=0,this.h.g+=t,this.C=0,h=this.h.g}else h=this.g.oa();if(this.o=200==e,function(t,i,e,n,s,r,o){t.info(function(){return"XMLHTTP RESP ("+n+") [ attempt "+s+"]: "+i+"\n"+e+"\n"+r+" "+o})}(this.i,this.u,this.A,this.l,this.R,f,e),this.o){if(this.T&&!this.K){i:{if(this.g){var a,u=this.g;if((a=u.g?u.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!p(a)){var c=a;break i}}c=null}if(!(e=c)){this.o=!1,this.s=3,Tt(12),Wt(this),zt(this);break t}kt(this.i,this.l,e,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,Vt(this,e)}if(this.P){let t;for(e=!0;!this.J&&this.C<h.length;){if(t=Lt(this,h),t==xt){4==f&&(this.s=4,Tt(14),e=!1),kt(this.i,this.l,null,"[Incomplete Response]");break}if(t==Pt){this.s=4,Tt(15),kt(this.i,this.l,h,"[Invalid Chunk]"),e=!1;break}kt(this.i,this.l,t,null),Vt(this,t)}if(Ut(this)&&0!=this.C&&(this.h.g=this.h.g.slice(this.C),this.C=0),4!=f||0!=h.length||this.h.h||(this.s=1,Tt(16),e=!1),this.o=this.o&&e,e){if(0<h.length&&!this.W){this.W=!0;var l=this.j;l.g==this&&l.ba&&!l.M&&(l.j.info("Great, no buffering proxy detected. Bytes received: "+h.length),Qi(l),l.M=!0,Tt(11))}}else kt(this.i,this.l,h,"[Invalid Chunked Response]"),Wt(this),zt(this)}else kt(this.i,this.l,h,null),Vt(this,h);4==f&&Wt(this),this.o&&!this.J&&(4==f?ee(this.j,this):(this.o=!1,Ft(this)))}else(function(t){const i={};t=(t.g&&2<=ji(t)&&t.g.getAllResponseHeaders()||"").split("\r\n");for(let n=0;n<t.length;n++){if(p(t[n]))continue;var e=S(t[n]);const s=e[0];if("string"!=typeof(e=e[1]))continue;e=e.trim();const r=i[s]||[];i[s]=r,r.push(e)}!function(t,i){for(const e in t)i.call(void 0,t[e],e,t)}(i,function(t){return t.join(", ")})})(this.g),400==e&&0<h.indexOf("Unknown SID")?(this.s=3,Tt(12)):(this.s=0,Tt(13)),Wt(this),zt(this)}}}catch(t){}},Ct.prototype.cancel=function(){this.J=!0,Wt(this)},Ct.prototype.ba=function(){this.B=null;const t=Date.now();0<=t-this.S?(function(t,i){t.info(function(){return"TIMEOUT: "+i})}(this.i,this.A),2!=this.L&&(Et(),Tt(17)),Wt(this),this.s=2,zt(this)):jt(this,this.S-t)};var qt=class{constructor(t,i){this.g=t,this.map=i}};function Ht(t){this.l=t||10,s.PerformanceNavigationTiming?t=0<(t=s.performance.getEntriesByType("navigation")).length&&("hq"==t[0].nextHopProtocol||"h2"==t[0].nextHopProtocol):t=!!(s.chrome&&s.chrome.loadTimes&&s.chrome.loadTimes()&&s.chrome.loadTimes().wasFetchedViaSpdy),this.j=t?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}function Jt(t){return!!t.h||!!t.g&&t.g.size>=t.j}function Gt(t){return t.h?1:t.g?t.g.size:0}function Xt(t,i){return t.h?t.h==i:!!t.g&&t.g.has(i)}function Kt(t,i){t.g?t.g.add(i):t.h=i}function Yt(t,i){t.h&&t.h==i?t.h=null:t.g&&t.g.has(i)&&t.g.delete(i)}function Zt(t){if(null!=t.h)return t.i.concat(t.h.D);if(null!=t.g&&0!==t.g.size){let i=t.i;for(const e of t.g.values())i=i.concat(e.D);return i}return f(t.i)}function Qt(t,i){if(t.forEach&&"function"==typeof t.forEach)t.forEach(i,void 0);else if(r(t)||"string"==typeof t)Array.prototype.forEach.call(t,i,void 0);else for(var e=function(t){if(t.na&&"function"==typeof t.na)return t.na();if(!t.V||"function"!=typeof t.V){if("undefined"!=typeof Map&&t instanceof Map)return Array.from(t.keys());if(!("undefined"!=typeof Set&&t instanceof Set)){if(r(t)||"string"==typeof t){var i=[];t=t.length;for(var e=0;e<t;e++)i.push(e);return i}i=[],e=0;for(const n in t)i[e++]=n;return i}}}(t),n=function(t){if(t.V&&"function"==typeof t.V)return t.V();if("undefined"!=typeof Map&&t instanceof Map||"undefined"!=typeof Set&&t instanceof Set)return Array.from(t.values());if("string"==typeof t)return t.split("");if(r(t)){for(var i=[],e=t.length,n=0;n<e;n++)i.push(t[n]);return i}for(n in i=[],e=0,t)i[e++]=t[n];return i}(t),s=n.length,o=0;o<s;o++)i.call(void 0,n[o],e&&e[o],t)}Ht.prototype.cancel=function(){if(this.i=Zt(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&0!==this.g.size){for(const t of this.g.values())t.cancel();this.g.clear()}};var ti=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function ii(t){if(this.g=this.o=this.j="",this.s=null,this.m=this.l="",this.h=!1,t instanceof ii){this.h=t.h,ni(this,t.j),this.o=t.o,this.g=t.g,si(this,t.s),this.l=t.l;var i=t.i,e=new vi;e.i=i.i,i.g&&(e.g=new Map(i.g),e.h=i.h),ri(this,e),this.m=t.m}else t&&(i=String(t).match(ti))?(this.h=!1,ni(this,i[1]||"",!0),this.o=ai(i[2]||""),this.g=ai(i[3]||"",!0),si(this,i[4]),this.l=ai(i[5]||"",!0),ri(this,i[6]||"",!0),this.m=ai(i[7]||"")):(this.h=!1,this.i=new vi(null,this.h))}function ei(t){return new ii(t)}function ni(t,i,e){t.j=e?ai(i,!0):i,t.j&&(t.j=t.j.replace(/:$/,""))}function si(t,i){if(i){if(i=Number(i),isNaN(i)||0>i)throw Error("Bad port number "+i);t.s=i}else t.s=null}function ri(t,i,e){i instanceof vi?(t.i=i,function(t,i){i&&!t.j&&(gi(t),t.i=null,t.g.forEach(function(t,i){var e=i.toLowerCase();i!=e&&(mi(this,i),bi(this,e,t))},t)),t.j=i}(t.i,t.h)):(e||(i=ui(i,pi)),t.i=new vi(i,t.h))}function oi(t,i,e){t.i.set(i,e)}function hi(t){return oi(t,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),t}function ai(t,i){return t?i?decodeURI(t.replace(/%25/g,"%2525")):decodeURIComponent(t):""}function ui(t,i,e){return"string"==typeof t?(t=encodeURI(t).replace(i,ci),e&&(t=t.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),t):null}function ci(t){return"%"+((t=t.charCodeAt(0))>>4&15).toString(16)+(15&t).toString(16)}ii.prototype.toString=function(){var t=[],i=this.j;i&&t.push(ui(i,li,!0),":");var e=this.g;return(e||"file"==i)&&(t.push("//"),(i=this.o)&&t.push(ui(i,li,!0),"@"),t.push(encodeURIComponent(String(e)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),null!=(e=this.s)&&t.push(":",String(e))),(e=this.l)&&(this.g&&"/"!=e.charAt(0)&&t.push("/"),t.push(ui(e,"/"==e.charAt(0)?di:fi,!0))),(e=this.i.toString())&&t.push("?",e),(e=this.m)&&t.push("#",ui(e,wi)),t.join("")};var li=/[#\/\?@]/g,fi=/[#\?:]/g,di=/[#\?]/g,pi=/[#\?@]/g,wi=/#/g;function vi(t,i){this.h=this.g=null,this.i=t||null,this.j=!!i}function gi(t){t.g||(t.g=new Map,t.h=0,t.i&&function(t,i){if(t){t=t.split("&");for(var e=0;e<t.length;e++){var n=t[e].indexOf("="),s=null;if(0<=n){var r=t[e].substring(0,n);s=t[e].substring(n+1)}else r=t[e];i(r,s?decodeURIComponent(s.replace(/\+/g," ")):"")}}}(t.i,function(i,e){t.add(decodeURIComponent(i.replace(/\+/g," ")),e)}))}function mi(t,i){gi(t),i=Ei(t,i),t.g.has(i)&&(t.i=null,t.h-=t.g.get(i).length,t.g.delete(i))}function yi(t,i){return gi(t),i=Ei(t,i),t.g.has(i)}function bi(t,i,e){mi(t,i),0<e.length&&(t.i=null,t.g.set(Ei(t,i),f(e)),t.h+=e.length)}function Ei(t,i){return i=String(i),t.j&&(i=i.toLowerCase()),i}function Si(t,i,e,n,s){try{s&&(s.onload=null,s.onerror=null,s.onabort=null,s.ontimeout=null),n(e)}catch(t){}}function Ti(){this.g=new lt}function Ii(t,i,e){const n=e||"";try{Qt(t,function(t,e){let s=t;o(t)&&(s=ut(t)),i.push(n+e+"="+encodeURIComponent(s))})}catch(t){throw i.push(n+"type="+encodeURIComponent("_badmap")),t}}function Ai(t){this.l=t.Ub||null,this.j=t.eb||!1}function _i(t,i){tt.call(this),this.D=t,this.o=i,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.u=new Headers,this.h=null,this.B="GET",this.A="",this.g=!1,this.v=this.j=this.l=null}function ki(t){t.j.read().then(t.Pa.bind(t)).catch(t.ga.bind(t))}function Ni(t){t.readyState=4,t.l=null,t.j=null,t.v=null,Oi(t)}function Oi(t){t.onreadystatechange&&t.onreadystatechange.call(t)}function Di(t){let i="";return m(t,function(t,e){i+=e,i+=":",i+=t,i+="\r\n"}),i}function Ci(t,i,e){t:{for(n in e){var n=!1;break t}n=!0}n||(e=Di(e),"string"==typeof t?null!=e&&encodeURIComponent(String(e)):oi(t,i,e))}function Ri(t){tt.call(this),this.headers=new Map,this.o=t||null,this.h=!1,this.v=this.g=null,this.D="",this.m=0,this.l="",this.j=this.B=this.u=this.A=!1,this.I=null,this.H="",this.J=!1}(t=vi.prototype).add=function(t,i){gi(this),this.i=null,t=Ei(this,t);var e=this.g.get(t);return e||this.g.set(t,e=[]),e.push(i),this.h+=1,this},t.forEach=function(t,i){gi(this),this.g.forEach(function(e,n){e.forEach(function(e){t.call(i,e,n,this)},this)},this)},t.na=function(){gi(this);const t=Array.from(this.g.values()),i=Array.from(this.g.keys()),e=[];for(let n=0;n<i.length;n++){const s=t[n];for(let t=0;t<s.length;t++)e.push(i[n])}return e},t.V=function(t){gi(this);let i=[];if("string"==typeof t)yi(this,t)&&(i=i.concat(this.g.get(Ei(this,t))));else{t=Array.from(this.g.values());for(let e=0;e<t.length;e++)i=i.concat(t[e])}return i},t.set=function(t,i){return gi(this),this.i=null,yi(this,t=Ei(this,t))&&(this.h-=this.g.get(t).length),this.g.set(t,[i]),this.h+=1,this},t.get=function(t,i){return t&&0<(t=this.V(t)).length?String(t[0]):i},t.toString=function(){if(this.i)return this.i;if(!this.g)return"";const t=[],i=Array.from(this.g.keys());for(var e=0;e<i.length;e++){var n=i[e];const r=encodeURIComponent(String(n)),o=this.V(n);for(n=0;n<o.length;n++){var s=r;""!==o[n]&&(s+="="+encodeURIComponent(String(o[n]))),t.push(s)}}return this.i=t.join("&")},l(Ai,ft),Ai.prototype.g=function(){return new _i(this.l,this.j)},Ai.prototype.i=function(t){return function(){return t}}({}),l(_i,tt),(t=_i.prototype).open=function(t,i){if(0!=this.readyState)throw this.abort(),Error("Error reopening a connection");this.B=t,this.A=i,this.readyState=1,Oi(this)},t.send=function(t){if(1!=this.readyState)throw this.abort(),Error("need to call open() first. ");this.g=!0;const i={headers:this.u,method:this.B,credentials:this.m,cache:void 0};t&&(i.body=t),(this.D||s).fetch(new Request(this.A,i)).then(this.Sa.bind(this),this.ga.bind(this))},t.abort=function(){this.response=this.responseText="",this.u=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&4!=this.readyState&&(this.g=!1,Ni(this)),this.readyState=0},t.Sa=function(t){if(this.g&&(this.l=t,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=t.headers,this.readyState=2,Oi(this)),this.g&&(this.readyState=3,Oi(this),this.g)))if("arraybuffer"===this.responseType)t.arrayBuffer().then(this.Qa.bind(this),this.ga.bind(this));else if(void 0!==s.ReadableStream&&"body"in t){if(this.j=t.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.v=new TextDecoder;ki(this)}else t.text().then(this.Ra.bind(this),this.ga.bind(this))},t.Pa=function(t){if(this.g){if(this.o&&t.value)this.response.push(t.value);else if(!this.o){var i=t.value?t.value:new Uint8Array(0);(i=this.v.decode(i,{stream:!t.done}))&&(this.response=this.responseText+=i)}t.done?Ni(this):Oi(this),3==this.readyState&&ki(this)}},t.Ra=function(t){this.g&&(this.response=this.responseText=t,Ni(this))},t.Qa=function(t){this.g&&(this.response=t,Ni(this))},t.ga=function(){this.g&&Ni(this)},t.setRequestHeader=function(t,i){this.u.append(t,i)},t.getResponseHeader=function(t){return this.h&&this.h.get(t.toLowerCase())||""},t.getAllResponseHeaders=function(){if(!this.h)return"";const t=[],i=this.h.entries();for(var e=i.next();!e.done;)e=e.value,t.push(e[0]+": "+e[1]),e=i.next();return t.join("\r\n")},Object.defineProperty(_i.prototype,"withCredentials",{get:function(){return"include"===this.m},set:function(t){this.m=t?"include":"same-origin"}}),l(Ri,tt);var Pi=/^https?$/i,xi=["POST","PUT"];function Mi(t,i){t.h=!1,t.g&&(t.j=!0,t.g.abort(),t.j=!1),t.l=i,t.m=5,$i(t),Li(t)}function $i(t){t.A||(t.A=!0,it(t,"complete"),it(t,"error"))}function Ui(t){if(t.h&&void 0!==n&&(!t.v[1]||4!=ji(t)||2!=t.Z()))if(t.u&&4==ji(t))nt(t.Ea,0,t);else if(it(t,"readystatechange"),4==ji(t)){t.h=!1;try{const n=t.Z();t:switch(n){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var i=!0;break t;default:i=!1}var e;if(!(e=i)){var r;if(r=0===n){var o=String(t.D).match(ti)[1]||null;!o&&s.self&&s.self.location&&(o=s.self.location.protocol.slice(0,-1)),r=!Pi.test(o?o.toLowerCase():"")}e=r}if(e)it(t,"complete"),it(t,"success");else{t.m=6;try{var h=2<ji(t)?t.g.statusText:""}catch(t){h=""}t.l=h+" ["+t.Z()+"]",$i(t)}}finally{Li(t)}}}function Li(t,i){if(t.g){Fi(t);const e=t.g,n=t.v[0]?()=>{}:null;t.g=null,t.v=null,i||it(t,"ready");try{e.onreadystatechange=n}catch(t){}}}function Fi(t){t.I&&(s.clearTimeout(t.I),t.I=null)}function ji(t){return t.g?t.g.readyState:0}function Bi(t){try{if(!t.g)return null;if("response"in t.g)return t.g.response;switch(t.H){case"":case"text":return t.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in t.g)return t.g.mozResponseArrayBuffer}return null}catch(t){return null}}function zi(t,i,e){return e&&e.internalChannelParams&&e.internalChannelParams[t]||i}function Wi(t){this.Aa=0,this.i=[],this.j=new _t,this.ia=this.qa=this.I=this.W=this.g=this.ya=this.D=this.H=this.m=this.S=this.o=null,this.Ya=this.U=0,this.Va=zi("failFast",!1,t),this.F=this.C=this.u=this.s=this.l=null,this.X=!0,this.za=this.T=-1,this.Y=this.v=this.B=0,this.Ta=zi("baseRetryDelayMs",5e3,t),this.cb=zi("retryDelaySeedMs",1e4,t),this.Wa=zi("forwardChannelMaxRetries",2,t),this.wa=zi("forwardChannelRequestTimeoutMs",2e4,t),this.pa=t&&t.xmlHttpFactory||void 0,this.Xa=t&&t.Tb||void 0,this.Ca=t&&t.useFetchStreams||!1,this.L=void 0,this.J=t&&t.supportsCrossDomainXhr||!1,this.K="",this.h=new Ht(t&&t.concurrentRequestLimit),this.Da=new Ti,this.P=t&&t.fastHandshake||!1,this.O=t&&t.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.Ua=t&&t.Rb||!1,t&&t.xa&&this.j.xa(),t&&t.forceLongPolling&&(this.X=!1),this.ba=!this.P&&this.X&&t&&t.detectBufferingProxy||!1,this.ja=void 0,t&&t.longPollingTimeout&&0<t.longPollingTimeout&&(this.ja=t.longPollingTimeout),this.ca=void 0,this.R=0,this.M=!1,this.ka=this.A=null}function Vi(t){if(Hi(t),3==t.G){var i=t.U++,e=ei(t.I);if(oi(e,"SID",t.K),oi(e,"RID",i),oi(e,"TYPE","terminate"),Xi(t,e),(i=new Ct(t,t.j,i)).L=2,i.v=hi(ei(e)),e=!1,s.navigator&&s.navigator.sendBeacon)try{e=s.navigator.sendBeacon(i.v.toString(),"")}catch(t){}!e&&s.Image&&((new Image).src=i.v,e=!0),e||(i.g=he(i.j,null),i.g.ea(i.v)),i.F=Date.now(),Ft(i)}re(t)}function qi(t){t.g&&(Qi(t),t.g.cancel(),t.g=null)}function Hi(t){qi(t),t.u&&(s.clearTimeout(t.u),t.u=null),ie(t),t.h.cancel(),t.s&&("number"==typeof t.s&&s.clearTimeout(t.s),t.s=null)}function Ji(t){if(!Jt(t.h)&&!t.s){t.s=!0;var i=t.Ga;k||D(),N||(k(),N=!0),O.add(i,t),t.B=0}}function Gi(t,i){var e;e=i?i.l:t.U++;const n=ei(t.I);oi(n,"SID",t.K),oi(n,"RID",e),oi(n,"AID",t.T),Xi(t,n),t.m&&t.o&&Ci(n,t.m,t.o),e=new Ct(t,t.j,e,t.B+1),null===t.m&&(e.H=t.o),i&&(t.i=i.D.concat(t.i)),i=Ki(t,e,1e3),e.I=Math.round(.5*t.wa)+Math.round(.5*t.wa*Math.random()),Kt(t.h,e),Mt(e,n,i)}function Xi(t,i){t.H&&m(t.H,function(t,e){oi(i,e,t)}),t.l&&Qt({},function(t,e){oi(i,e,t)})}function Ki(t,i,e){e=Math.min(t.i.length,e);var n=t.l?u(t.l.Na,t.l,t):null;t:{var s=t.i;let i=-1;for(;;){const t=["count="+e];-1==i?0<e?(i=s[0].g,t.push("ofs="+i)):i=0:t.push("ofs="+i);let r=!0;for(let o=0;o<e;o++){let e=s[o].g;const h=s[o].map;if(e-=i,0>e)i=Math.max(0,s[o].g-100),r=!1;else try{Ii(h,t,"req"+e+"_")}catch(t){n&&n(h)}}if(r){n=t.join("&");break t}}}return t=t.i.splice(0,e),i.D=t,n}function Yi(t){if(!t.g&&!t.u){t.Y=1;var i=t.Fa;k||D(),N||(k(),N=!0),O.add(i,t),t.v=0}}function Zi(t){return!(t.g||t.u||3<=t.v)&&(t.Y++,t.u=At(u(t.Fa,t),ne(t,t.v)),t.v++,!0)}function Qi(t){null!=t.A&&(s.clearTimeout(t.A),t.A=null)}function te(t){t.g=new Ct(t,t.j,"rpc",t.Y),null===t.m&&(t.g.H=t.o),t.g.O=0;var i=ei(t.qa);oi(i,"RID","rpc"),oi(i,"SID",t.K),oi(i,"AID",t.T),oi(i,"CI",t.F?"0":"1"),!t.F&&t.ja&&oi(i,"TO",t.ja),oi(i,"TYPE","xmlhttp"),Xi(t,i),t.m&&t.o&&Ci(i,t.m,t.o),t.L&&(t.g.I=t.L);var e=t.g;t=t.ia,e.L=1,e.v=hi(ei(i)),e.m=null,e.P=!0,$t(e,t)}function ie(t){null!=t.C&&(s.clearTimeout(t.C),t.C=null)}function ee(t,i){var e=null;if(t.g==i){ie(t),Qi(t),t.g=null;var n=2}else{if(!Xt(t.h,i))return;e=i.D,Yt(t.h,i),n=1}if(0!=t.G)if(i.o)if(1==n){e=i.m?i.m.length:0,i=Date.now()-i.F;var s=t.B;it(n=yt(),new It(n,e)),Ji(t)}else Yi(t);else if(3==(s=i.s)||0==s&&0<i.X||!(1==n&&function(t,i){return!(Gt(t.h)>=t.h.j-(t.s?1:0)||(t.s?(t.i=i.D.concat(t.i),0):1==t.G||2==t.G||t.B>=(t.Va?0:t.Wa)||(t.s=At(u(t.Ga,t,i),ne(t,t.B)),t.B++,0)))}(t,i)||2==n&&Zi(t)))switch(e&&0<e.length&&(i=t.h,i.i=i.i.concat(e)),s){case 1:se(t,5);break;case 4:se(t,10);break;case 3:se(t,6);break;default:se(t,2)}}function ne(t,i){let e=t.Ta+Math.floor(Math.random()*t.cb);return t.isActive()||(e*=2),e*i}function se(t,i){if(t.j.info("Error code "+i),2==i){var e=u(t.fb,t),n=t.Xa;const i=!n;n=new ii(n||"//www.google.com/images/cleardot.gif"),s.location&&"http"==s.location.protocol||ni(n,"https"),hi(n),i?function(t,i){const e=new _t;if(s.Image){const n=new Image;n.onload=c(Si,e,"TestLoadImage: loaded",!0,i,n),n.onerror=c(Si,e,"TestLoadImage: error",!1,i,n),n.onabort=c(Si,e,"TestLoadImage: abort",!1,i,n),n.ontimeout=c(Si,e,"TestLoadImage: timeout",!1,i,n),s.setTimeout(function(){n.ontimeout&&n.ontimeout()},1e4),n.src=t}else i(!1)}(n.toString(),e):function(t,i){new _t;const e=new AbortController,n=setTimeout(()=>{e.abort(),Si(0,0,!1,i)},1e4);fetch(t,{signal:e.signal}).then(t=>{clearTimeout(n),t.ok?Si(0,0,!0,i):Si(0,0,!1,i)}).catch(()=>{clearTimeout(n),Si(0,0,!1,i)})}(n.toString(),e)}else Tt(2);t.G=0,t.l&&t.l.sa(i),re(t),Hi(t)}function re(t){if(t.G=0,t.ka=[],t.l){const i=Zt(t.h);0==i.length&&0==t.i.length||(d(t.ka,i),d(t.ka,t.i),t.h.i.length=0,f(t.i),t.i.length=0),t.l.ra()}}function oe(t,i,e){var n=e instanceof ii?ei(e):new ii(e);if(""!=n.g)i&&(n.g=i+"."+n.g),si(n,n.s);else{var r=s.location;n=r.protocol,i=i?i+"."+r.hostname:r.hostname,r=+r.port;var o=new ii(null);n&&ni(o,n),i&&(o.g=i),r&&si(o,r),e&&(o.l=e),n=o}return e=t.D,i=t.ya,e&&i&&oi(n,e,i),oi(n,"VER",t.la),Xi(t,n),n}function he(t,i,e){if(i&&!t.J)throw Error("Can't create secondary domain capable XhrIo object.");return(i=t.Ca&&!t.pa?new Ri(new Ai({eb:e})):new Ri(t.pa)).Ha(t.J),i}function ae(){}function ue(t,i){tt.call(this),this.g=new Wi(i),this.l=t,this.h=i&&i.messageUrlParams||null,t=i&&i.messageHeaders||null,i&&i.clientProtocolHeaderRequired&&(t?t["X-Client-Protocol"]="webchannel":t={"X-Client-Protocol":"webchannel"}),this.g.o=t,t=i&&i.initMessageHeaders||null,i&&i.messageContentType&&(t?t["X-WebChannel-Content-Type"]=i.messageContentType:t={"X-WebChannel-Content-Type":i.messageContentType}),i&&i.va&&(t?t["X-WebChannel-Client-Profile"]=i.va:t={"X-WebChannel-Client-Profile":i.va}),this.g.S=t,(t=i&&i.Sb)&&!p(t)&&(this.g.m=t),this.v=i&&i.supportsCrossDomainXhr||!1,this.u=i&&i.sendRawJson||!1,(i=i&&i.httpSessionIdParam)&&!p(i)&&(this.g.D=i,null!==(t=this.h)&&i in t&&(i in(t=this.h)&&delete t[i])),this.j=new fe(this)}function ce(t){wt.call(this),t.et&&(this.headers=t.et,this.statusCode=t.nt,delete t.et,delete t.nt);var i=t.st;if(i){t:{for(const e in i){t=e;break t}t=void 0}(this.i=t)&&(t=this.i,i=null!==i&&t in i?i[t]:void 0),this.data=i}else this.data=t}function le(){vt.call(this),this.status=1}function fe(t){this.g=t}(t=Ri.prototype).Ha=function(t){this.J=t},t.ea=function(t,i,e,n){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+t);i=i?i.toUpperCase():"GET",this.D=t,this.l="",this.m=0,this.A=!1,this.h=!0,this.g=this.o?this.o.g():Nt.g(),this.v=this.o?dt(this.o):dt(Nt),this.g.onreadystatechange=u(this.Ea,this);try{this.B=!0,this.g.open(i,String(t),!0),this.B=!1}catch(t){return void Mi(this,t)}if(t=e||"",e=new Map(this.headers),n)if(Object.getPrototypeOf(n)===Object.prototype)for(var r in n)e.set(r,n[r]);else{if("function"!=typeof n.keys||"function"!=typeof n.get)throw Error("Unknown input type for opt_headers: "+String(n));for(const t of n.keys())e.set(t,n.get(t))}n=Array.from(e.keys()).find(t=>"content-type"==t.toLowerCase()),r=s.FormData&&t instanceof s.FormData,!(0<=Array.prototype.indexOf.call(xi,i,void 0))||n||r||e.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[t,i]of e)this.g.setRequestHeader(t,i);this.H&&(this.g.responseType=this.H),"withCredentials"in this.g&&this.g.withCredentials!==this.J&&(this.g.withCredentials=this.J);try{Fi(this),this.u=!0,this.g.send(t),this.u=!1}catch(t){Mi(this,t)}},t.abort=function(t){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.m=t||7,it(this,"complete"),it(this,"abort"),Li(this))},t.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),Li(this,!0)),Ri.aa.N.call(this)},t.Ea=function(){this.s||(this.B||this.u||this.j?Ui(this):this.bb())},t.bb=function(){Ui(this)},t.isActive=function(){return!!this.g},t.Z=function(){try{return 2<ji(this)?this.g.status:-1}catch(t){return-1}},t.oa=function(){try{return this.g?this.g.responseText:""}catch(t){return""}},t.Oa=function(t){if(this.g){var i=this.g.responseText;return t&&0==i.indexOf(t)&&(i=i.substring(t.length)),ct(i)}},t.Ba=function(){return this.m},t.Ka=function(){return"string"==typeof this.l?this.l:String(this.l)},(t=Wi.prototype).la=8,t.G=1,t.connect=function(t,i,e,n){Tt(0),this.W=t,this.H=i||{},e&&void 0!==n&&(this.H.OSID=e,this.H.OAID=n),this.F=this.X,this.I=oe(this,null,this.W),Ji(this)},t.Ga=function(t){if(this.s)if(this.s=null,1==this.G){if(!t){this.U=Math.floor(1e5*Math.random()),t=this.U++;const s=new Ct(this,this.j,t);let r=this.o;if(this.S&&(r?(r=y(r),E(r,this.S)):r=this.S),null!==this.m||this.O||(s.H=r,r=null),this.P)t:{for(var i=0,e=0;e<this.i.length;e++){var n=this.i[e];if(void 0===(n="rt"in n.map&&"string"==typeof(n=n.map.rt)?n.length:void 0))break;if(4096<(i+=n)){i=e;break t}if(4096===i||e===this.i.length-1){i=e+1;break t}}i=1e3}else i=1e3;i=Ki(this,s,i),oi(e=ei(this.I),"RID",t),oi(e,"CVER",22),this.D&&oi(e,"X-HTTP-Session-Id",this.D),Xi(this,e),r&&(this.O?i="headers="+encodeURIComponent(String(Di(r)))+"&"+i:this.m&&Ci(e,this.m,r)),Kt(this.h,s),this.Ua&&oi(e,"TYPE","init"),this.P?(oi(e,"$req",i),oi(e,"SID","null"),s.T=!0,Mt(s,e,null)):Mt(s,e,i),this.G=2}}else 3==this.G&&(t?Gi(this,t):0==this.i.length||Jt(this.h)||Gi(this))},t.Fa=function(){if(this.u=null,te(this),this.ba&&!(this.M||null==this.g||0>=this.R)){var t=2*this.R;this.j.info("BP detection timer enabled: "+t),this.A=At(u(this.ab,this),t)}},t.ab=function(){this.A&&(this.A=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.M=!0,Tt(10),qi(this),te(this))},t.Za=function(){null!=this.C&&(this.C=null,qi(this),Zi(this),Tt(19))},t.fb=function(t){t?(this.j.info("Successfully pinged google.com"),Tt(2)):(this.j.info("Failed to ping google.com"),Tt(1))},t.isActive=function(){return!!this.l&&this.l.isActive(this)},(t=ae.prototype).ua=function(){},t.ta=function(){},t.sa=function(){},t.ra=function(){},t.isActive=function(){return!0},t.Na=function(){},l(ue,tt),ue.prototype.m=function(){this.g.l=this.j,this.v&&(this.g.J=!0),this.g.connect(this.l,this.h||void 0)},ue.prototype.close=function(){Vi(this.g)},ue.prototype.o=function(t){var i=this.g;if("string"==typeof t){var e={};e.rt=t,t=e}else this.u&&((e={}).rt=ut(t),t=e);i.i.push(new qt(i.Ya++,t)),3==i.G&&Ji(i)},ue.prototype.N=function(){this.g.l=null,delete this.j,Vi(this.g),delete this.g,ue.aa.N.call(this)},l(ce,wt),l(le,vt),l(fe,ae),fe.prototype.ua=function(){it(this.g,"a")},fe.prototype.ta=function(t){it(this.g,new ce(t))},fe.prototype.sa=function(t){it(this.g,new le)},fe.prototype.ra=function(){it(this.g,"b")},ue.prototype.send=ue.prototype.o,ue.prototype.open=ue.prototype.m,ue.prototype.close=ue.prototype.close,Ot.NO_ERROR=0,Ot.TIMEOUT=8,Ot.HTTP_ERROR=6,pt.OPEN="a",pt.CLOSE="b",pt.ERROR="c",pt.MESSAGE="d",tt.prototype.listen=tt.prototype.K,Ri.prototype.listenOnce=Ri.prototype.L,Ri.prototype.getLastError=Ri.prototype.Ka,Ri.prototype.getLastErrorCode=Ri.prototype.Ba,Ri.prototype.getStatus=Ri.prototype.Z,Ri.prototype.getResponseJson=Ri.prototype.Oa,Ri.prototype.getResponseText=Ri.prototype.oa,Ri.prototype.send=Ri.prototype.ea,Ri.prototype.setWithCredentials=Ri.prototype.Ha}).apply(void 0!==ps?ps:"undefined"!=typeof self?self:"undefined"!=typeof window?window:{});const ws="@firebase/firestore",vs="4.8.0";
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gs{constructor(t){this.uid=t}isAuthenticated(){return null!=this.uid}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(t){return t.uid===this.uid}}gs.UNAUTHENTICATED=new gs(null),gs.GOOGLE_CREDENTIALS=new gs("google-credentials-uid"),gs.FIRST_PARTY=new gs("first-party-uid"),gs.MOCK_USER=new gs("mock-user");
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
let ms="11.10.0";
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ys=new Yi("@firebase/firestore");function bs(t,...i){if(ys.logLevel<=Hi.DEBUG){const e=i.map(Ss);ys.debug(`Firestore (${ms}): ${t}`,...e)}}function Es(t,...i){if(ys.logLevel<=Hi.ERROR){const e=i.map(Ss);ys.error(`Firestore (${ms}): ${t}`,...e)}}function Ss(t){if("string"==typeof t)return t;try{
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
return function(t){return JSON.stringify(t)}(t)}catch(i){return t}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ts(t,i,e){let n="Unexpected state";"string"==typeof i?n=i:e=i,Is(t,n,e)}function Is(t,i,e){let n=`FIRESTORE (${ms}) INTERNAL ASSERTION FAILED: ${i} (ID: ${t.toString(16)})`;if(void 0!==e)try{n+=" CONTEXT: "+JSON.stringify(e)}catch(t){n+=" CONTEXT: "+e}throw Es(n),new Error(n)}function As(t,i,e,n){let s="Unexpected state";"string"==typeof e?s=e:n=e,t||Is(i,s,n)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const _s="cancelled",ks="invalid-argument",Ns="failed-precondition";class Os extends Li{constructor(t,i){super(t,i),this.code=t,this.message=i,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ds{constructor(){this.promise=new Promise((t,i)=>{this.resolve=t,this.reject=i})}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Cs{constructor(t,i){this.user=i,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${t}`)}}class Rs{getToken(){return Promise.resolve(null)}invalidateToken(){}start(t,i){t.enqueueRetryable(()=>i(gs.UNAUTHENTICATED))}shutdown(){}}class Ps{constructor(t){this.t=t,this.currentUser=gs.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(t,i){As(void 0===this.o,42304);let e=this.i;const n=t=>this.i!==e?(e=this.i,i(t)):Promise.resolve();let s=new Ds;this.o=()=>{this.i++,this.currentUser=this.u(),s.resolve(),s=new Ds,t.enqueueRetryable(()=>n(this.currentUser))};const r=()=>{const i=s;t.enqueueRetryable(async()=>{await i.promise,await n(this.currentUser)})},o=t=>{bs("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=t,this.o&&(this.auth.addAuthTokenListener(this.o),r())};this.t.onInit(t=>o(t)),setTimeout(()=>{if(!this.auth){const t=this.t.getImmediate({optional:!0});t?o(t):(bs("FirebaseAuthCredentialsProvider","Auth not yet detected"),s.resolve(),s=new Ds)}},0),r()}getToken(){const t=this.i,i=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(i).then(i=>this.i!==t?(bs("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):i?(As("string"==typeof i.accessToken,31837,{l:i}),new Cs(i.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.o&&this.auth.removeAuthTokenListener(this.o),this.o=void 0}u(){const t=this.auth&&this.auth.getUid();return As(null===t||"string"==typeof t,2055,{h:t}),new gs(t)}}class xs{constructor(t,i,e){this.P=t,this.T=i,this.I=e,this.type="FirstParty",this.user=gs.FIRST_PARTY,this.A=new Map}R(){return this.I?this.I():null}get headers(){this.A.set("X-Goog-AuthUser",this.P);const t=this.R();return t&&this.A.set("Authorization",t),this.T&&this.A.set("X-Goog-Iam-Authorization-Token",this.T),this.A}}class Ms{constructor(t,i,e){this.P=t,this.T=i,this.I=e}getToken(){return Promise.resolve(new xs(this.P,this.T,this.I))}start(t,i){t.enqueueRetryable(()=>i(gs.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class $s{constructor(t){this.value=t,this.type="AppCheck",this.headers=new Map,t&&t.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class Us{constructor(t,i){this.V=i,this.forceRefresh=!1,this.appCheck=null,this.m=null,this.p=null,Ke(t)&&t.settings.appCheckToken&&(this.p=t.settings.appCheckToken)}start(t,i){As(void 0===this.o,3512);const e=t=>{null!=t.error&&bs("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${t.error.message}`);const e=t.token!==this.m;return this.m=t.token,bs("FirebaseAppCheckTokenProvider",`Received ${e?"new":"existing"} token.`),e?i(t.token):Promise.resolve()};this.o=i=>{t.enqueueRetryable(()=>e(i))};const n=t=>{bs("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=t,this.o&&this.appCheck.addTokenListener(this.o)};this.V.onInit(t=>n(t)),setTimeout(()=>{if(!this.appCheck){const t=this.V.getImmediate({optional:!0});t?n(t):bs("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){if(this.p)return Promise.resolve(new $s(this.p));const t=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(t).then(t=>t?(As("string"==typeof t.token,44558,{tokenResult:t}),this.m=t.token,new $s(t.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.o&&this.appCheck.removeTokenListener(this.o),this.o=void 0}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ls(t){const i="undefined"!=typeof self&&(self.crypto||self.msCrypto),e=new Uint8Array(t);if(i&&"function"==typeof i.getRandomValues)i.getRandomValues(e);else for(let i=0;i<t;i++)e[i]=Math.floor(256*Math.random());return e}
/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Fs(){return new TextEncoder}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class js{static newId(){const t=62*Math.floor(256/62);let i="";for(;i.length<20;){const e=Ls(40);for(let n=0;n<e.length;++n)i.length<20&&e[n]<t&&(i+="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789".charAt(e[n]%62))}return i}}function Bs(t,i){return t<i?-1:t>i?1:0}function zs(t,i){return t.codePointAt(i)>65535?t.substring(i,i+2):t.substring(i,i+1)}function Ws(t,i){for(let e=0;e<t.length&&e<i.length;++e)if(t[e]!==i[e])return Bs(t[e],i[e]);return Bs(t.length,i.length)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Vs="__name__";class qs{constructor(t,i,e){void 0===i?i=0:i>t.length&&Ts(637,{offset:i,range:t.length}),void 0===e?e=t.length-i:e>t.length-i&&Ts(1746,{length:e,range:t.length-i}),this.segments=t,this.offset=i,this.len=e}get length(){return this.len}isEqual(t){return 0===qs.comparator(this,t)}child(t){const i=this.segments.slice(this.offset,this.limit());return t instanceof qs?t.forEach(t=>{i.push(t)}):i.push(t),this.construct(i)}limit(){return this.offset+this.length}popFirst(t){return t=void 0===t?1:t,this.construct(this.segments,this.offset+t,this.length-t)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(t){return this.segments[this.offset+t]}isEmpty(){return 0===this.length}isPrefixOf(t){if(t.length<this.length)return!1;for(let i=0;i<this.length;i++)if(this.get(i)!==t.get(i))return!1;return!0}isImmediateParentOf(t){if(this.length+1!==t.length)return!1;for(let i=0;i<this.length;i++)if(this.get(i)!==t.get(i))return!1;return!0}forEach(t){for(let i=this.offset,e=this.limit();i<e;i++)t(this.segments[i])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(t,i){const e=Math.min(t.length,i.length);for(let n=0;n<e;n++){const e=qs.compareSegments(t.get(n),i.get(n));if(0!==e)return e}return Bs(t.length,i.length)}static compareSegments(t,i){const e=qs.isNumericId(t),n=qs.isNumericId(i);return e&&!n?-1:!e&&n?1:e&&n?qs.extractNumericId(t).compare(qs.extractNumericId(i)):function(t,i){let e=0;for(;e<t.length&&e<i.length;){const n=t.codePointAt(e),s=i.codePointAt(e);if(n!==s){if(n<128&&s<128)return Bs(n,s);{const r=Fs(),o=Ws(r.encode(zs(t,e)),r.encode(zs(i,e)));return 0!==o?o:Bs(n,s)}}e+=n>65535?2:1}return Bs(t.length,i.length)}(t,i)}static isNumericId(t){return t.startsWith("__id")&&t.endsWith("__")}static extractNumericId(t){return fs.fromString(t.substring(4,t.length-2))}}class Hs extends qs{construct(t,i,e){return new Hs(t,i,e)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...t){const i=[];for(const e of t){if(e.indexOf("//")>=0)throw new Os(ks,`Invalid segment (${e}). Paths must not contain // in them.`);i.push(...e.split("/").filter(t=>t.length>0))}return new Hs(i)}static emptyPath(){return new Hs([])}}const Js=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class Gs extends qs{construct(t,i,e){return new Gs(t,i,e)}static isValidIdentifier(t){return Js.test(t)}canonicalString(){return this.toArray().map(t=>(t=t.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),Gs.isValidIdentifier(t)||(t="`"+t+"`"),t)).join(".")}toString(){return this.canonicalString()}isKeyField(){return 1===this.length&&this.get(0)===Vs}static keyField(){return new Gs([Vs])}static fromServerFormat(t){const i=[];let e="",n=0;const s=()=>{if(0===e.length)throw new Os(ks,`Invalid field path (${t}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);i.push(e),e=""};let r=!1;for(;n<t.length;){const i=t[n];if("\\"===i){if(n+1===t.length)throw new Os(ks,"Path has trailing escape character: "+t);const i=t[n+1];if("\\"!==i&&"."!==i&&"`"!==i)throw new Os(ks,"Path has invalid escape sequence: "+t);e+=i,n+=2}else"`"===i?(r=!r,n++):"."!==i||r?(e+=i,n++):(s(),n++)}if(s(),r)throw new Os(ks,"Unterminated ` in path: "+t);return new Gs(i)}static emptyPath(){return new Gs([])}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xs{constructor(t){this.path=t}static fromPath(t){return new Xs(Hs.fromString(t))}static fromName(t){return new Xs(Hs.fromString(t).popFirst(5))}static empty(){return new Xs(Hs.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(t){return this.path.length>=2&&this.path.get(this.path.length-2)===t}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(t){return null!==t&&0===Hs.comparator(this.path,t.path)}toString(){return this.path.toString()}static comparator(t,i){return Hs.comparator(t.path,i.path)}static isDocumentKey(t){return t.length%2==0}static fromSegments(t){return new Xs(new Hs(t.slice()))}}
/**
 * @license
 * Copyright 2025 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function Ks(t,i){const e={typeString:t};return i&&(e.value=i),e}function Ys(t,i){if(!function(t){return"object"==typeof t&&null!==t&&(Object.getPrototypeOf(t)===Object.prototype||null===Object.getPrototypeOf(t))}(t))throw new Os(ks,"JSON must be an object");let e;for(const n in i)if(i[n]){const s=i[n].typeString,r="value"in i[n]?{value:i[n].value}:void 0;if(!(n in t)){e=`JSON missing required field: '${n}'`;break}const o=t[n];if(s&&typeof o!==s){e=`JSON field '${n}' must be a ${s}.`;break}if(void 0!==r&&o!==r.value){e=`Expected '${n}' field to equal '${r.value}'`;break}}if(e)throw new Os(ks,e);return!0}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Zs=-62135596800,Qs=1e6;class tr{static now(){return tr.fromMillis(Date.now())}static fromDate(t){return tr.fromMillis(t.getTime())}static fromMillis(t){const i=Math.floor(t/1e3),e=Math.floor((t-1e3*i)*Qs);return new tr(i,e)}constructor(t,i){if(this.seconds=t,this.nanoseconds=i,i<0)throw new Os(ks,"Timestamp nanoseconds out of range: "+i);if(i>=1e9)throw new Os(ks,"Timestamp nanoseconds out of range: "+i);if(t<Zs)throw new Os(ks,"Timestamp seconds out of range: "+t);if(t>=253402300800)throw new Os(ks,"Timestamp seconds out of range: "+t)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/Qs}_compareTo(t){return this.seconds===t.seconds?Bs(this.nanoseconds,t.nanoseconds):Bs(this.seconds,t.seconds)}isEqual(t){return t.seconds===this.seconds&&t.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{type:tr._jsonSchemaVersion,seconds:this.seconds,nanoseconds:this.nanoseconds}}static fromJSON(t){if(Ys(t,tr._jsonSchema))return new tr(t.seconds,t.nanoseconds)}valueOf(){const t=this.seconds-Zs;return String(t).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}tr._jsonSchemaVersion="firestore/timestamp/1.0",tr._jsonSchema={type:Ks("string",tr._jsonSchemaVersion),seconds:Ks("number"),nanoseconds:Ks("number")};
/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class ir extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class er{constructor(t){this.binaryString=t}static fromBase64String(t){const i=function(t){try{return atob(t)}catch(t){throw"undefined"!=typeof DOMException&&t instanceof DOMException?new ir("Invalid base64 string: "+t):t}}(t);return new er(i)}static fromUint8Array(t){const i=function(t){let i="";for(let e=0;e<t.length;++e)i+=String.fromCharCode(t[e]);return i}(t);return new er(i)}[Symbol.iterator](){let t=0;return{next:()=>t<this.binaryString.length?{value:this.binaryString.charCodeAt(t++),done:!1}:{value:void 0,done:!0}}}toBase64(){return function(t){return btoa(t)}(this.binaryString)}toUint8Array(){return function(t){const i=new Uint8Array(t.length);for(let e=0;e<t.length;e++)i[e]=t.charCodeAt(e);return i}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(t){return Bs(this.binaryString,t.binaryString)}isEqual(t){return this.binaryString===t.binaryString}}er.EMPTY_BYTE_STRING=new er("");const nr="(default)";class sr{constructor(t,i){this.projectId=t,this.database=i||nr}static empty(){return new sr("","")}get isDefaultDatabase(){return this.database===nr}isEqual(t){return t instanceof sr&&t.projectId===this.projectId&&t.database===this.database}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rr{constructor(t,i=null,e=[],n=[],s=null,r="F",o=null,h=null){this.path=t,this.collectionGroup=i,this.explicitOrderBy=e,this.filters=n,this.limit=s,this.limitType=r,this.startAt=o,this.endAt=h,this.Te=null,this.Ie=null,this.de=null,this.startAt,this.endAt}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var or,hr;(hr=or||(or={}))[hr.OK=0]="OK",hr[hr.CANCELLED=1]="CANCELLED",hr[hr.UNKNOWN=2]="UNKNOWN",hr[hr.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",hr[hr.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",hr[hr.NOT_FOUND=5]="NOT_FOUND",hr[hr.ALREADY_EXISTS=6]="ALREADY_EXISTS",hr[hr.PERMISSION_DENIED=7]="PERMISSION_DENIED",hr[hr.UNAUTHENTICATED=16]="UNAUTHENTICATED",hr[hr.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",hr[hr.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",hr[hr.ABORTED=10]="ABORTED",hr[hr.OUT_OF_RANGE=11]="OUT_OF_RANGE",hr[hr.UNIMPLEMENTED=12]="UNIMPLEMENTED",hr[hr.INTERNAL=13]="INTERNAL",hr[hr.UNAVAILABLE=14]="UNAVAILABLE",hr[hr.DATA_LOSS=15]="DATA_LOSS",
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
new fs([4294967295,4294967295],0);function ar(){return"undefined"!=typeof document?document:null}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ur{constructor(t,i,e=1e3,n=1.5,s=6e4){this.Fi=t,this.timerId=i,this.d_=e,this.E_=n,this.A_=s,this.R_=0,this.V_=null,this.m_=Date.now(),this.reset()}reset(){this.R_=0}f_(){this.R_=this.A_}g_(t){this.cancel();const i=Math.floor(this.R_+this.p_()),e=Math.max(0,Date.now()-this.m_),n=Math.max(0,i-e);n>0&&bs("ExponentialBackoff",`Backing off for ${n} ms (base delay: ${this.R_} ms, delay with jitter: ${i} ms, last attempt: ${e} ms ago)`),this.V_=this.Fi.enqueueAfterDelay(this.timerId,n,()=>(this.m_=Date.now(),t())),this.R_*=this.E_,this.R_<this.d_&&(this.R_=this.d_),this.R_>this.A_&&(this.R_=this.A_)}y_(){null!==this.V_&&(this.V_.skipDelay(),this.V_=null)}cancel(){null!==this.V_&&(this.V_.cancel(),this.V_=null)}p_(){return(Math.random()-.5)*this.R_}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cr{constructor(t,i,e,n,s){this.asyncQueue=t,this.timerId=i,this.targetTimeMs=e,this.op=n,this.removalCallback=s,this.deferred=new Ds,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(t=>{})}get promise(){return this.deferred.promise}static createAndSchedule(t,i,e,n,s){const r=Date.now()+e,o=new cr(t,i,r,n,s);return o.start(e),o}start(t){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),t)}skipDelay(){return this.handleDelayElapsed()}cancel(t){null!==this.timerHandle&&(this.clearTimeout(),this.deferred.reject(new Os(_s,"Operation cancelled"+(t?": "+t:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>null!==this.timerHandle?(this.clearTimeout(),this.op().then(t=>this.deferred.resolve(t))):Promise.resolve())}clearTimeout(){null!==this.timerHandle&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}var lr,fr;(fr=lr||(lr={})).Fa="default",fr.Cache="cache";
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const dr=new Map,pr=!0;
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wr{constructor(t){var i,e;if(void 0===t.host){if(void 0!==t.ssl)throw new Os(ks,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=pr}else this.host=t.host,this.ssl=null!==(i=t.ssl)&&void 0!==i?i:pr;if(this.isUsingEmulator=void 0!==t.emulatorOptions,this.credentials=t.credentials,this.ignoreUndefinedProperties=!!t.ignoreUndefinedProperties,this.localCache=t.localCache,void 0===t.cacheSizeBytes)this.cacheSizeBytes=41943040;else{if(-1!==t.cacheSizeBytes&&t.cacheSizeBytes<1048576)throw new Os(ks,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=t.cacheSizeBytes}(function(t,i,e,n){if(!0===i&&!0===n)throw new Os(ks,`${t} and ${e} cannot be used together.`)})("experimentalForceLongPolling",t.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",t.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!t.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:void 0===t.experimentalAutoDetectLongPolling?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!t.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=
/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function(t){const i={};return void 0!==t.timeoutSeconds&&(i.timeoutSeconds=t.timeoutSeconds),i}(null!==(e=t.experimentalLongPollingOptions)&&void 0!==e?e:{}),function(t){if(void 0!==t.timeoutSeconds){if(isNaN(t.timeoutSeconds))throw new Os(ks,`invalid long polling timeout: ${t.timeoutSeconds} (must not be NaN)`);if(t.timeoutSeconds<5)throw new Os(ks,`invalid long polling timeout: ${t.timeoutSeconds} (minimum allowed value is 5)`);if(t.timeoutSeconds>30)throw new Os(ks,`invalid long polling timeout: ${t.timeoutSeconds} (maximum allowed value is 30)`)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(this.experimentalLongPollingOptions),this.useFetchStreams=!!t.useFetchStreams}isEqual(t){return this.host===t.host&&this.ssl===t.ssl&&this.credentials===t.credentials&&this.cacheSizeBytes===t.cacheSizeBytes&&this.experimentalForceLongPolling===t.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===t.experimentalAutoDetectLongPolling&&function(t,i){return t.timeoutSeconds===i.timeoutSeconds}(this.experimentalLongPollingOptions,t.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===t.ignoreUndefinedProperties&&this.useFetchStreams===t.useFetchStreams}}class vr{constructor(t,i,e,n){this._authCredentials=t,this._appCheckCredentials=i,this._databaseId=e,this._app=n,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new wr({}),this._settingsFrozen=!1,this._emulatorOptions={},this._terminateTask="notTerminated"}get app(){if(!this._app)throw new Os(Ns,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return"notTerminated"!==this._terminateTask}_setSettings(t){if(this._settingsFrozen)throw new Os(Ns,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new wr(t),this._emulatorOptions=t.emulatorOptions||{},void 0!==t.credentials&&(this._authCredentials=function(t){if(!t)return new Rs;switch(t.type){case"firstParty":return new Ms(t.sessionIndex||"0",t.iamToken||null,t.authTokenFactory||null);case"provider":return t.client;default:throw new Os(ks,"makeAuthCredentialsProvider failed due to invalid credential type")}}(t.credentials))}_getSettings(){return this._settings}_getEmulatorOptions(){return this._emulatorOptions}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return"notTerminated"===this._terminateTask&&(this._terminateTask=this._terminate()),this._terminateTask}async _restart(){"notTerminated"===this._terminateTask?await this._terminate():this._terminateTask="notTerminated"}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(t){const i=dr.get(t);i&&(bs("ComponentProvider","Removing Datastore"),dr.delete(t),i.terminate())}(this),Promise.resolve()}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gr{constructor(t,i,e){this.converter=i,this._query=e,this.type="query",this.firestore=t}withConverter(t){return new gr(this.firestore,t,this._query)}}class mr{constructor(t,i,e){this.converter=i,this._key=e,this.type="document",this.firestore=t}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new yr(this.firestore,this.converter,this._key.path.popLast())}withConverter(t){return new mr(this.firestore,t,this._key)}toJSON(){return{type:mr._jsonSchemaVersion,referencePath:this._key.toString()}}static fromJSON(t,i,e){if(Ys(i,mr._jsonSchema))return new mr(t,e||null,new Xs(Hs.fromString(i.referencePath)))}}mr._jsonSchemaVersion="firestore/documentReference/1.0",mr._jsonSchema={type:Ks("string",mr._jsonSchemaVersion),referencePath:Ks("string")};class yr extends gr{constructor(t,i,e){super(t,i,function(t){return new rr(t)}(e)),this._path=e,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const t=this._path.popLast();return t.isEmpty()?null:new mr(this.firestore,null,new Xs(t))}withConverter(t){return new yr(this.firestore,t,this._path)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const br="AsyncQueue";class Er{constructor(t=Promise.resolve()){this.Zu=[],this.Xu=!1,this.ec=[],this.tc=null,this.nc=!1,this.rc=!1,this.sc=[],this.F_=new ur(this,"async_queue_retry"),this.oc=()=>{const t=ar();t&&bs(br,"Visibility state changed to "+t.visibilityState),this.F_.y_()},this._c=t;const i=ar();i&&"function"==typeof i.addEventListener&&i.addEventListener("visibilitychange",this.oc)}get isShuttingDown(){return this.Xu}enqueueAndForget(t){this.enqueue(t)}enqueueAndForgetEvenWhileRestricted(t){this.ac(),this.uc(t)}enterRestrictedMode(t){if(!this.Xu){this.Xu=!0,this.rc=t||!1;const i=ar();i&&"function"==typeof i.removeEventListener&&i.removeEventListener("visibilitychange",this.oc)}}enqueue(t){if(this.ac(),this.Xu)return new Promise(()=>{});const i=new Ds;return this.uc(()=>this.Xu&&this.rc?Promise.resolve():(t().then(i.resolve,i.reject),i.promise)).then(()=>i.promise)}enqueueRetryable(t){this.enqueueAndForget(()=>(this.Zu.push(t),this.cc()))}async cc(){if(0!==this.Zu.length){try{await this.Zu[0](),this.Zu.shift(),this.F_.reset()}catch(t){if(!function(t){return"IndexedDbTransactionError"===t.name}(t))throw t;bs(br,"Operation failed with retryable error: "+t)}this.Zu.length>0&&this.F_.g_(()=>this.cc())}}uc(t){const i=this._c.then(()=>(this.nc=!0,t().catch(t=>{throw this.tc=t,this.nc=!1,Es("INTERNAL UNHANDLED ERROR: ",Sr(t)),t}).then(t=>(this.nc=!1,t))));return this._c=i,i}enqueueAfterDelay(t,i,e){this.ac(),this.sc.indexOf(t)>-1&&(i=0);const n=cr.createAndSchedule(this,t,i,e,t=>this.lc(t));return this.ec.push(n),n}ac(){this.tc&&Ts(47125,{hc:Sr(this.tc)})}verifyOperationInProgress(){}async Pc(){let t;do{t=this._c,await t}while(t!==this._c)}Tc(t){for(const i of this.ec)if(i.timerId===t)return!0;return!1}Ic(t){return this.Pc().then(()=>{this.ec.sort((t,i)=>t.targetTimeMs-i.targetTimeMs);for(const i of this.ec)if(i.skipDelay(),"all"!==t&&i.timerId===t)break;return this.Pc()})}dc(t){this.sc.push(t)}lc(t){const i=this.ec.indexOf(t);this.ec.splice(i,1)}}function Sr(t){let i=t.message||"";return t.stack&&(i=t.stack.includes(t.message)?t.stack:t.message+"\n"+t.stack),i}class Tr extends vr{constructor(t,i,e,n){super(t,i,e,n),this.type="firestore",this._queue=new Er,this._persistenceKey=(null==n?void 0:n.name)||"[DEFAULT]"}async _terminate(){if(this._firestoreClient){const t=this._firestoreClient.terminate();this._queue=new Er(t),this._firestoreClient=void 0,await t}}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ir{constructor(t){this._byteString=t}static fromBase64String(t){try{return new Ir(er.fromBase64String(t))}catch(t){throw new Os(ks,"Failed to construct data from Base64 string: "+t)}}static fromUint8Array(t){return new Ir(er.fromUint8Array(t))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(t){return this._byteString.isEqual(t._byteString)}toJSON(){return{type:Ir._jsonSchemaVersion,bytes:this.toBase64()}}static fromJSON(t){if(Ys(t,Ir._jsonSchema))return Ir.fromBase64String(t.bytes)}}Ir._jsonSchemaVersion="firestore/bytes/1.0",Ir._jsonSchema={type:Ks("string",Ir._jsonSchemaVersion),bytes:Ks("string")};
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Ar{constructor(...t){for(let i=0;i<t.length;++i)if(0===t[i].length)throw new Os(ks,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new Gs(t)}isEqual(t){return this._internalPath.isEqual(t._internalPath)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _r{constructor(t,i){if(!isFinite(t)||t<-90||t>90)throw new Os(ks,"Latitude must be a number between -90 and 90, but was: "+t);if(!isFinite(i)||i<-180||i>180)throw new Os(ks,"Longitude must be a number between -180 and 180, but was: "+i);this._lat=t,this._long=i}get latitude(){return this._lat}get longitude(){return this._long}isEqual(t){return this._lat===t._lat&&this._long===t._long}_compareTo(t){return Bs(this._lat,t._lat)||Bs(this._long,t._long)}toJSON(){return{latitude:this._lat,longitude:this._long,type:_r._jsonSchemaVersion}}static fromJSON(t){if(Ys(t,_r._jsonSchema))return new _r(t.latitude,t.longitude)}}_r._jsonSchemaVersion="firestore/geoPoint/1.0",_r._jsonSchema={type:Ks("string",_r._jsonSchemaVersion),latitude:Ks("number"),longitude:Ks("number")};
/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class kr{constructor(t){this._values=(t||[]).map(t=>t)}toArray(){return this._values.map(t=>t)}isEqual(t){return function(t,i){if(t.length!==i.length)return!1;for(let e=0;e<t.length;++e)if(t[e]!==i[e])return!1;return!0}(this._values,t._values)}toJSON(){return{type:kr._jsonSchemaVersion,vectorValues:this._values}}static fromJSON(t){if(Ys(t,kr._jsonSchema)){if(Array.isArray(t.vectorValues)&&t.vectorValues.every(t=>"number"==typeof t))return new kr(t.vectorValues);throw new Os(ks,"Expected 'vectorValues' field to be a number array")}}}kr._jsonSchemaVersion="firestore/vectorValue/1.0",kr._jsonSchema={type:Ks("string",kr._jsonSchemaVersion),vectorValues:Ks("object")};const Nr=new RegExp("[~\\*/\\[\\]]");function Or(t,i,e,n,s){let r=`Function ${i}() called with invalid data`;r+=". ";return new Os(ks,r+t+"")}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Dr{constructor(t,i,e,n,s){this._firestore=t,this._userDataWriter=i,this._key=e,this._document=n,this._converter=s}get id(){return this._key.path.lastSegment()}get ref(){return new mr(this._firestore,this._converter,this._key)}exists(){return null!==this._document}data(){if(this._document){if(this._converter){const t=new Cr(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(t)}return this._userDataWriter.convertValue(this._document.data.value)}}get(t){if(this._document){const i=this._document.data.field(Rr("DocumentSnapshot.get",t));if(null!==i)return this._userDataWriter.convertValue(i)}}}class Cr extends Dr{data(){return super.data()}}function Rr(t,i){return"string"==typeof i?function(t,i){if(i.search(Nr)>=0)throw Or(`Invalid field path (${i}). Paths must not contain '~', '*', '/', '[', or ']'`,t);try{return new Ar(...i.split("."))._internalPath}catch(e){throw Or(`Invalid field path (${i}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,t)}}(t,i):i instanceof Ar?i._internalPath:i._delegate._internalPath}class Pr{constructor(t,i){this.hasPendingWrites=t,this.fromCache=i}isEqual(t){return this.hasPendingWrites===t.hasPendingWrites&&this.fromCache===t.fromCache}}class xr extends Dr{constructor(t,i,e,n,s,r){super(t,i,e,n,r),this._firestore=t,this._firestoreImpl=t,this.metadata=s}exists(){return super.exists()}data(t={}){if(this._document){if(this._converter){const i=new Mr(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(i,t)}return this._userDataWriter.convertValue(this._document.data.value,t.serverTimestamps)}}get(t,i={}){if(this._document){const e=this._document.data.field(Rr("DocumentSnapshot.get",t));if(null!==e)return this._userDataWriter.convertValue(e,i.serverTimestamps)}}toJSON(){if(this.metadata.hasPendingWrites)throw new Os(Ns,"DocumentSnapshot.toJSON() attempted to serialize a document with pending writes. Await waitForPendingWrites() before invoking toJSON().");const t=this._document,i={};return i.type=xr._jsonSchemaVersion,i.bundle="",i.bundleSource="DocumentSnapshot",i.bundleName=this._key.toString(),t&&t.isValidDocument()&&t.isFoundDocument()?(this._userDataWriter.convertObjectMap(t.data.value.mapValue.fields,"previous"),i.bundle=(this._firestore,this.ref.path,"NOT SUPPORTED"),i):i}}xr._jsonSchemaVersion="firestore/documentSnapshot/1.0",xr._jsonSchema={type:Ks("string",xr._jsonSchemaVersion),bundleSource:Ks("string","DocumentSnapshot"),bundleName:Ks("string"),bundle:Ks("string")};class Mr extends xr{data(t={}){return super.data(t)}}class $r{constructor(t,i,e,n){this._firestore=t,this._userDataWriter=i,this._snapshot=n,this.metadata=new Pr(n.hasPendingWrites,n.fromCache),this.query=e}get docs(){const t=[];return this.forEach(i=>t.push(i)),t}get size(){return this._snapshot.docs.size}get empty(){return 0===this.size}forEach(t,i){this._snapshot.docs.forEach(e=>{t.call(i,new Mr(this._firestore,this._userDataWriter,e.key,e,new Pr(this._snapshot.mutatedKeys.has(e.key),this._snapshot.fromCache),this.query.converter))})}docChanges(t={}){const i=!!t.includeMetadataChanges;if(i&&this._snapshot.excludesMetadataChanges)throw new Os(ks,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===i||(this._cachedChanges=function(t,i){if(t._snapshot.oldDocs.isEmpty()){let i=0;return t._snapshot.docChanges.map(e=>{const n=new Mr(t._firestore,t._userDataWriter,e.doc.key,e.doc,new Pr(t._snapshot.mutatedKeys.has(e.doc.key),t._snapshot.fromCache),t.query.converter);return e.doc,{type:"added",doc:n,oldIndex:-1,newIndex:i++}})}{let e=t._snapshot.oldDocs;return t._snapshot.docChanges.filter(t=>i||3!==t.type).map(i=>{const n=new Mr(t._firestore,t._userDataWriter,i.doc.key,i.doc,new Pr(t._snapshot.mutatedKeys.has(i.doc.key),t._snapshot.fromCache),t.query.converter);let s=-1,r=-1;return 0!==i.type&&(s=e.indexOf(i.doc.key),e=e.delete(i.doc.key)),1!==i.type&&(e=e.add(i.doc),r=e.indexOf(i.doc.key)),{type:Ur(i.type),doc:n,oldIndex:s,newIndex:r}})}}(this,i),this._cachedChangesIncludeMetadataChanges=i),this._cachedChanges}toJSON(){if(this.metadata.hasPendingWrites)throw new Os(Ns,"QuerySnapshot.toJSON() attempted to serialize a document with pending writes. Await waitForPendingWrites() before invoking toJSON().");const t={};t.type=$r._jsonSchemaVersion,t.bundleSource="QuerySnapshot",t.bundleName=js.newId(),this._firestore._databaseId.database,this._firestore._databaseId.projectId;const i=[],e=[],n=[];return this.docs.forEach(t=>{null!==t._document&&(i.push(t._document),e.push(this._userDataWriter.convertObjectMap(t._document.data.value.mapValue.fields,"previous")),n.push(t.ref.path))}),t.bundle=(this._firestore,this.query._query,t.bundleName,"NOT SUPPORTED"),t}}function Ur(t){switch(t){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return Ts(61501,{type:t})}}$r._jsonSchemaVersion="firestore/querySnapshot/1.0",$r._jsonSchema={type:Ks("string",$r._jsonSchemaVersion),bundleSource:Ks("string","QuerySnapshot"),bundleName:Ks("string"),bundle:Ks("string")},function(t,i=!0){!function(t){ms=t}(Ze),Xe(new qi("firestore",(t,{instanceIdentifier:e,options:n})=>{const s=t.getProvider("app").getImmediate(),r=new Tr(new Ps(t.getProvider("auth-internal")),new Us(s,t.getProvider("app-check-internal")),function(t,i){if(!Object.prototype.hasOwnProperty.apply(t.options,["projectId"]))throw new Os(ks,'"projectId" not provided in firebase.initializeApp.');return new sr(t.options.projectId,i)}(s,e),s);return n=Object.assign({useFetchStreams:i},n),r._setSettings(n),r},"PUBLIC").setMultipleInstances(!0)),Qe(ws,vs,t),Qe(ws,vs,"esm2017")}();
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const Lr="firebasestorage.googleapis.com";
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Fr extends Li{constructor(t,i,e=0){super(zr(t),`Firebase Storage: ${i} (${zr(t)})`),this.status_=e,this.customData={serverResponse:null},this._baseMessage=this.message,Object.setPrototypeOf(this,Fr.prototype)}get status(){return this.status_}set status(t){this.status_=t}_codeEquals(t){return zr(t)===this.code}get serverResponse(){return this.customData.serverResponse}set serverResponse(t){this.customData.serverResponse=t,this.customData.serverResponse?this.message=`${this._baseMessage}\n${this.customData.serverResponse}`:this.message=this._baseMessage}}var jr,Br;function zr(t){return"storage/"+t}function Wr(t){return new Fr(jr.INVALID_ARGUMENT,t)}function Vr(){return new Fr(jr.APP_DELETED,"The Firebase app was deleted.")}!function(t){t.UNKNOWN="unknown",t.OBJECT_NOT_FOUND="object-not-found",t.BUCKET_NOT_FOUND="bucket-not-found",t.PROJECT_NOT_FOUND="project-not-found",t.QUOTA_EXCEEDED="quota-exceeded",t.UNAUTHENTICATED="unauthenticated",t.UNAUTHORIZED="unauthorized",t.UNAUTHORIZED_APP="unauthorized-app",t.RETRY_LIMIT_EXCEEDED="retry-limit-exceeded",t.INVALID_CHECKSUM="invalid-checksum",t.CANCELED="canceled",t.INVALID_EVENT_NAME="invalid-event-name",t.INVALID_URL="invalid-url",t.INVALID_DEFAULT_BUCKET="invalid-default-bucket",t.NO_DEFAULT_BUCKET="no-default-bucket",t.CANNOT_SLICE_BLOB="cannot-slice-blob",t.SERVER_FILE_WRONG_SIZE="server-file-wrong-size",t.NO_DOWNLOAD_URL="no-download-url",t.INVALID_ARGUMENT="invalid-argument",t.INVALID_ARGUMENT_COUNT="invalid-argument-count",t.APP_DELETED="app-deleted",t.INVALID_ROOT_OPERATION="invalid-root-operation",t.INVALID_FORMAT="invalid-format",t.INTERNAL_ERROR="internal-error",t.UNSUPPORTED_ENVIRONMENT="unsupported-environment"}(jr||(jr={}));
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class qr{constructor(t,i){this.bucket=t,this.path_=i}get path(){return this.path_}get isRoot(){return 0===this.path.length}fullServerUrl(){const t=encodeURIComponent;return"/b/"+t(this.bucket)+"/o/"+t(this.path)}bucketOnlyServerUrl(){return"/b/"+encodeURIComponent(this.bucket)+"/o"}static makeFromBucketSpec(t,i){let e;try{e=qr.makeFromUrl(t,i)}catch(i){return new qr(t,"")}if(""===e.path)return e;throw n=t,new Fr(jr.INVALID_DEFAULT_BUCKET,"Invalid default bucket '"+n+"'.");var n}static makeFromUrl(t,i){let e=null;const n="([A-Za-z0-9.\\-_]+)";const s=new RegExp("^gs://"+n+"(/(.*))?$","i");function r(t){t.path_=decodeURIComponent(t.path)}const o=i.replace(/[.]/g,"\\."),h=[{regex:s,indices:{bucket:1,path:3},postModify:function(t){"/"===t.path.charAt(t.path.length-1)&&(t.path_=t.path_.slice(0,-1))}},{regex:new RegExp(`^https?://${o}/v[A-Za-z0-9_]+/b/${n}/o(/([^?#]*).*)?$`,"i"),indices:{bucket:1,path:3},postModify:r},{regex:new RegExp(`^https?://${i===Lr?"(?:storage.googleapis.com|storage.cloud.google.com)":i}/${n}/([^?#]*)`,"i"),indices:{bucket:1,path:2},postModify:r}];for(let i=0;i<h.length;i++){const n=h[i],s=n.regex.exec(t);if(s){const t=s[n.indices.bucket];let i=s[n.indices.path];i||(i=""),e=new qr(t,i),n.postModify(e);break}}if(null==e)throw function(t){return new Fr(jr.INVALID_URL,"Invalid URL '"+t+"'.")}(t);return e}}class Hr{constructor(t){this.promise_=Promise.reject(t)}getPromise(){return this.promise_}cancel(t=!1){}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Jr(t,i,e,n){if(n<i)throw Wr(`Invalid value for '${t}'. Expected ${i} or greater.`);if(n>e)throw Wr(`Invalid value for '${t}'. Expected ${e} or less.`)}!function(t){t[t.NO_ERROR=0]="NO_ERROR",t[t.NETWORK_ERROR=1]="NETWORK_ERROR",t[t.ABORT=2]="ABORT"}(Br||(Br={}));
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Gr{constructor(t,i,e,n,s,r,o,h,a,u,c,l=!0,f=!1){this.url_=t,this.method_=i,this.headers_=e,this.body_=n,this.successCodes_=s,this.additionalRetryCodes_=r,this.callback_=o,this.errorCallback_=h,this.timeout_=a,this.progressCallback_=u,this.connectionFactory_=c,this.retry=l,this.isUsingEmulator=f,this.pendingConnection_=null,this.backoffId_=null,this.canceled_=!1,this.appDelete_=!1,this.promise_=new Promise((t,i)=>{this.resolve_=t,this.reject_=i,this.start_()})}start_(){const t=(t,i)=>{if(i)return void t(!1,new Xr(!1,null,!0));const e=this.connectionFactory_();this.pendingConnection_=e;const n=t=>{const i=t.loaded,e=t.lengthComputable?t.total:-1;null!==this.progressCallback_&&this.progressCallback_(i,e)};null!==this.progressCallback_&&e.addUploadProgressListener(n),e.send(this.url_,this.method_,this.isUsingEmulator,this.body_,this.headers_).then(()=>{null!==this.progressCallback_&&e.removeUploadProgressListener(n),this.pendingConnection_=null;const i=e.getErrorCode()===Br.NO_ERROR,s=e.getStatus();if(!i||
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function(t,i){const e=t>=500&&t<600,n=-1!==[408,429].indexOf(t),s=-1!==i.indexOf(t);return e||n||s}(s,this.additionalRetryCodes_)&&this.retry){const i=e.getErrorCode()===Br.ABORT;return void t(!1,new Xr(!1,null,i))}const r=-1!==this.successCodes_.indexOf(s);t(!0,new Xr(r,e))})},i=(t,i)=>{const e=this.resolve_,n=this.reject_,s=i.connection;if(i.wasSuccessCode)try{const t=this.callback_(s,s.getResponse());!
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function(t){return void 0!==t}(t)?e():e(t)}catch(t){n(t)}else if(null!==s){const t=new Fr(jr.UNKNOWN,"An unknown error occurred, please check the error payload for server response.");t.serverResponse=s.getErrorText(),this.errorCallback_?n(this.errorCallback_(s,t)):n(t)}else if(i.canceled){n(this.appDelete_?Vr():new Fr(jr.CANCELED,"User canceled the upload/download."))}else{n(new Fr(jr.RETRY_LIMIT_EXCEEDED,"Max retry time for operation exceeded, please try again."))}};this.canceled_?i(0,new Xr(!1,null,!0)):this.backoffId_=function(t,i,e){let n=1,s=null,r=null,o=!1,h=0;function a(){return 2===h}let u=!1;function c(...t){u||(u=!0,i.apply(null,t))}function l(i){s=setTimeout(()=>{s=null,t(d,a())},i)}function f(){r&&clearTimeout(r)}function d(t,...i){if(u)return void f();if(t)return f(),void c.call(null,t,...i);if(a()||o)return f(),void c.call(null,t,...i);let e;n<64&&(n*=2),1===h?(h=2,e=0):e=1e3*(n+Math.random()),l(e)}let p=!1;function w(t){p||(p=!0,f(),u||(null!==s?(t||(h=2),clearTimeout(s),l(0)):t||(h=1)))}return l(0),r=setTimeout(()=>{o=!0,w(!0)},e),w}(t,i,this.timeout_)}getPromise(){return this.promise_}cancel(t){this.canceled_=!0,this.appDelete_=t||!1,null!==this.backoffId_&&(0,this.backoffId_)(!1),null!==this.pendingConnection_&&this.pendingConnection_.abort()}}class Xr{constructor(t,i,e){this.wasSuccessCode=t,this.connection=i,this.canceled=!!e}}function Kr(t,i,e,n,s,r,o=!0,h=!1){const a=function(t){const i=encodeURIComponent;let e="?";for(const n in t)t.hasOwnProperty(n)&&(e=e+(i(n)+"=")+i(t[n])+"&");return e=e.slice(0,-1),e}(t.urlParams),u=t.url+a,c=Object.assign({},t.headers);return function(t,i){i&&(t["X-Firebase-GMPID"]=i)}(c,i),function(t,i){null!==i&&i.length>0&&(t.Authorization="Firebase "+i)}(c,e),function(t,i){t["X-Firebase-Storage-Version"]="webjs/"+(null!=i?i:"AppManager")}(c,r),function(t,i){null!==i&&(t["X-Firebase-AppCheck"]=i)}(c,n),new Gr(u,t.method,c,t.body,t.successCodes,t.additionalRetryCodes,t.handler,t.errorHandler,t.timeout,t.progressCallback,s,o,h)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Yr{constructor(t,i){this._service=t,this._location=i instanceof qr?i:qr.makeFromUrl(i,t.host)}toString(){return"gs://"+this._location.bucket+"/"+this._location.path}_newRef(t,i){return new Yr(t,i)}get root(){const t=new qr(this._location.bucket,"");return this._newRef(this._service,t)}get bucket(){return this._location.bucket}get fullPath(){return this._location.path}get name(){return function(t){const i=t.lastIndexOf("/",t.length-2);return-1===i?t:t.slice(i+1)}(this._location.path)}get storage(){return this._service}get parent(){const t=function(t){if(0===t.length)return null;const i=t.lastIndexOf("/");return-1===i?"":t.slice(0,i)}(this._location.path);if(null===t)return null;const i=new qr(this._location.bucket,t);return new Yr(this._service,i)}_throwIfRoot(t){if(""===this._location.path)throw function(t){return new Fr(jr.INVALID_ROOT_OPERATION,"The operation '"+t+"' cannot be performed on a root reference, create a non-root reference using child, such as .child('file.png').")}(t)}}function Zr(t,i){const e=null==i?void 0:i.storageBucket;return null==e?null:qr.makeFromBucketSpec(e,t)}class Qr{constructor(t,i,e,n,s,r=!1){this.app=t,this._authProvider=i,this._appCheckProvider=e,this._url=n,this._firebaseVersion=s,this._isUsingEmulator=r,this._bucket=null,this._host=Lr,this._protocol="https",this._appId=null,this._deleted=!1,this._maxOperationRetryTime=12e4,this._maxUploadRetryTime=6e5,this._requests=new Set,this._bucket=null!=n?qr.makeFromBucketSpec(n,this._host):Zr(this._host,this.app.options)}get host(){return this._host}set host(t){this._host=t,null!=this._url?this._bucket=qr.makeFromBucketSpec(this._url,t):this._bucket=Zr(t,this.app.options)}get maxUploadRetryTime(){return this._maxUploadRetryTime}set maxUploadRetryTime(t){Jr("time",0,Number.POSITIVE_INFINITY,t),this._maxUploadRetryTime=t}get maxOperationRetryTime(){return this._maxOperationRetryTime}set maxOperationRetryTime(t){Jr("time",0,Number.POSITIVE_INFINITY,t),this._maxOperationRetryTime=t}async _getAuthToken(){if(this._overrideAuthToken)return this._overrideAuthToken;const t=this._authProvider.getImmediate({optional:!0});if(t){const i=await t.getToken();if(null!==i)return i.accessToken}return null}async _getAppCheckToken(){if(Ke(this.app)&&this.app.settings.appCheckToken)return this.app.settings.appCheckToken;const t=this._appCheckProvider.getImmediate({optional:!0});if(t){return(await t.getToken()).token}return null}_delete(){return this._deleted||(this._deleted=!0,this._requests.forEach(t=>t.cancel()),this._requests.clear()),Promise.resolve()}_makeStorageReference(t){return new Yr(this,t)}_makeRequest(t,i,e,n,s=!0){if(this._deleted)return new Hr(Vr());{const r=Kr(t,this._appId,e,n,i,this._firebaseVersion,s,this._isUsingEmulator);return this._requests.add(r),r.getPromise().then(()=>this._requests.delete(r),()=>this._requests.delete(r)),r}}async makeRequestWithTokens(t,i){const[e,n]=await Promise.all([this._getAuthToken(),this._getAppCheckToken()]);return this._makeRequest(t,i,e,n).getPromise()}}const to="@firebase/storage",io="0.13.14";function eo(t,{instanceIdentifier:i}){const e=t.getProvider("app").getImmediate(),n=t.getProvider("auth-internal"),s=t.getProvider("app-check-internal");return new Qr(e,n,s,i,Ze)}Xe(new qi("storage",eo,"PUBLIC").setMultipleInstances(!0)),Qe(to,io,""),Qe(to,io,"esm2017");
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class no{constructor(t,i,e,n){this.app=t,this.auth=null,this.messaging=null,this.appCheck=null,this.serverAppAppCheckToken=null,Ke(t)&&t.settings.appCheckToken&&(this.serverAppAppCheckToken=t.settings.appCheckToken),this.auth=i.getImmediate({optional:!0}),this.messaging=e.getImmediate({optional:!0}),this.auth||i.get().then(t=>this.auth=t,()=>{}),this.messaging||e.get().then(t=>this.messaging=t,()=>{}),this.appCheck||null==n||n.get().then(t=>this.appCheck=t,()=>{})}async getAuthToken(){if(this.auth)try{const t=await this.auth.getToken();return null==t?void 0:t.accessToken}catch(t){return}}async getMessagingToken(){if(this.messaging&&"Notification"in self&&"granted"===Notification.permission)try{return await this.messaging.getToken()}catch(t){return}}async getAppCheckToken(t){if(this.serverAppAppCheckToken)return this.serverAppAppCheckToken;if(this.appCheck){const i=t?await this.appCheck.getLimitedUseToken():await this.appCheck.getToken();return i.error?null:i.token}return null}async getContext(t){return{authToken:await this.getAuthToken(),messagingToken:await this.getMessagingToken(),appCheckToken:await this.getAppCheckToken(t)}}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const so="us-central1";class ro{constructor(t,i,e,n,s=so,r=(...t)=>fetch(...t)){this.app=t,this.fetchImpl=r,this.emulatorOrigin=null,this.contextProvider=new no(t,i,e,n),this.cancelAllRequests=new Promise(t=>{this.deleteService=()=>Promise.resolve(t())});try{const t=new URL(s);this.customDomain=t.origin+("/"===t.pathname?"":t.pathname),this.region=so}catch(t){this.customDomain=null,this.region=s}}_delete(){return this.deleteService()}_url(t){const i=this.app.options.projectId;if(null!==this.emulatorOrigin){return`${this.emulatorOrigin}/${i}/${this.region}/${t}`}return null!==this.customDomain?`${this.customDomain}/${t}`:`https://${this.region}-${i}.cloudfunctions.net/${t}`}}const oo="@firebase/functions",ho="0.12.9";!function(t){Xe(new qi("functions",(t,{instanceIdentifier:i})=>{const e=t.getProvider("app").getImmediate(),n=t.getProvider("auth-internal"),s=t.getProvider("messaging-internal"),r=t.getProvider("app-check-internal");return new ro(e,n,s,r,i)},"PUBLIC").setMultipleInstances(!0)),Qe(oo,ho,t),Qe(oo,ho,"esm2017")}();
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
Qe("firebase","11.10.0","app");const ao=mt(null),uo=mt("idle"),co=mt(null),lo=mt(!1);yt(()=>({authUser:ao.get(),authState:uo.get(),error:co.get(),initialized:lo.get()}));const fo=mt({showCompleted:!0,priority:"all",tag:"all",search:""}),po=mt({status:"idle",documents:[],error:null,isListening:!1,lastUpdated:null,currentPage:1,pageSize:5,hasNextPage:!1,hasPreviousPage:!1,queryDescription:"All todos"}),wo=mt(null);if(yt(()=>{const t=wo.get();return t?t.state.get():po.get()}),yt(()=>fo.get()),"object"==typeof globalThis){const t=globalThis;t.ot=function(t){if(wo.get())throw new Error("Cannot set demo state after the todo store has been initialized.");po.set(t)},t.ht=function(t){if(wo.get())throw new Error("Cannot set demo filters after the todo store has been initialized.");fo.set(t)}}const vo=mt({status:"idle",documents:[],error:null,isListening:!1,lastUpdated:null,currentPage:1,pageSize:50,hasNextPage:!1,hasPreviousPage:!1,queryDescription:"Latest messages"}),go=mt("idle"),mo=mt(null),yo=mt(null);yt(()=>{const t=yo.get();return t?t.state.get():vo.get()}),yt(()=>({status:go.get(),error:mo.get()}));const bo=mt("idle"),Eo=mt(0),So=mt(null),To=mt(null);yt(()=>({status:bo.get(),progress:Eo.get(),error:So.get(),uploadedFile:To.get()})),mt(null);const Io=mt({status:"idle",data:null,error:null,lastCalled:null}),Ao=mt({status:"idle",data:null,error:null,lastCalled:null}),_o=mt({status:"idle",data:null,error:null,lastCalled:null});yt(()=>Io.get()),yt(()=>Ao.get()),yt(()=>_o.get());const ko=mt({...{status:"idle",documents:[],error:null,isListening:!1,lastUpdated:null,currentPage:1,pageSize:20,hasNextPage:!1,hasPreviousPage:!1,queryDescription:"Awaiting authentication"}}),No=mt(null);mt(null),mt(null);const Oo=yt(()=>{const t=No.get();return t?t.state.get():ko.get()});yt(()=>{const t=Oo.get().documents,i=t.length,e=i>0?t[0].recordedAt??null:null,n={pushups:{count:0,totalValue:0},squats:{count:0,totalValue:0},plank:{count:0,totalValue:0},dumbbells:{count:0,totalValue:0},hang:{count:0,totalValue:0}};return t.forEach(t=>{n[t.exerciseType].count+=1,n[t.exerciseType].totalValue+=t.value}),{totalExercises:i,entryCount:i,lastEntryAt:e,byType:n}}),tr.fromDate(new Date("2024-01-15")),tr.fromDate(new Date("2024-01-16")),tr.fromDate(new Date("2024-01-20")),tr.fromDate(new Date("2024-01-16")),tr.fromDate(new Date("2024-01-16")),tr.fromDate(new Date("2024-01-22")),tr.fromDate(new Date("2024-01-17")),tr.fromDate(new Date("2024-01-17")),tr.fromDate(new Date("2024-01-25")),tr.fromDate(new Date("2024-01-18")),tr.fromDate(new Date("2024-01-18")),tr.fromDate(new Date("2024-01-28")),tr.fromDate(new Date("2024-01-19")),tr.fromDate(new Date("2024-01-19")),tr.fromDate(new Date("2024-02-05")),tr.fromDate(new Date("2024-01-20")),tr.fromDate(new Date("2024-01-20")),tr.fromDate(new Date("2024-02-10")),tr.fromDate(new Date("2024-01-21")),tr.fromDate(new Date("2024-01-21")),tr.fromDate(new Date("2024-02-15")),tr.fromDate(new Date("2024-01-22")),tr.fromDate(new Date("2024-01-22")),tr.fromDate(new Date("2024-02-12")),tr.fromDate(new Date("2024-01-23")),tr.fromDate(new Date("2024-01-23")),tr.fromDate(new Date("2024-02-01")),tr.fromDate(new Date("2024-01-24")),tr.fromDate(new Date("2024-01-24")),tr.fromDate(new Date("2024-02-20")),tr.fromDate(new Date("2024-01-25")),tr.fromDate(new Date("2024-01-25")),tr.fromDate(new Date("2024-02-18")),tr.fromDate(new Date("2024-01-26")),tr.fromDate(new Date("2024-01-26")),tr.fromDate(new Date("2024-02-08"));const Do=mt([]),Co=mt(!1),Ro=mt("");yt(()=>({users:Do.get(),loading:Co.get(),error:Ro.get()}));var Po=function(t,i,e,n){for(var s,r=arguments.length,o=r<3?i:null===n?n=Object.getOwnPropertyDescriptor(i,e):n,h=t.length-1;h>=0;h--)(s=t[h])&&(o=(r<3?s(o):r>3?s(i,e,o):s(i,e))||o);return r>3&&o&&Object.defineProperty(i,e,o),o};let xo=class extends Wt{static{this.styles=At`
    :host {
      display: block;
      border: solid 1px gray;
      padding: 16px;
      max-width: 800px;
    }
  `}constructor(){super(),this.name="World",this.count=0}render(){return it`
      <h1>${this.sayHello(this.name)}!</h1>
      <button @click=${this.onClick} part="button">
        Click Count: ${this.count}
      </button>
      <slot></slot>
    `}onClick(){this.count+=1,this.dispatchEvent(new CustomEvent("count-changed"))}sayHello(t){return`Hello, ${t}`}};Po([Gt()],xo.prototype,"name",void 0),Po([Gt({type:Number})],xo.prototype,"count",void 0),xo=Po([qt("my-element")],xo);let Mo=class extends(function(t){return!0===t[P]?(console.warn("SignalWatcher should not be applied to the same class more than once."),t):class extends t{constructor(){super(...arguments),this._$St=new R.State(0),this._$Si=!1,this._$So=!0,this._$Sh=new Set}_$Sl(){if(void 0!==this._$Su)return;this._$Sv=new R.Computed(()=>{this._$St.get(),super.performUpdate()});const t=this._$Su=new R.subtle.Watcher(function(){const t=M.get(this);void 0!==t&&(!1===t._$Si&&t.requestUpdate(),this.watch())});M.set(t,this),x.register(this,{watcher:t,signal:this._$Sv}),t.watch(this._$Sv)}_$Sp(){void 0!==this._$Su&&(this._$Su.unwatch(this._$Sv),this._$Sv=void 0,this._$Su=void 0)}performUpdate(){this.isUpdatePending&&(this._$Sl(),this._$Si=!0,this._$St.set(this._$St.get()+1),this._$Si=!1,this._$Sv.get())}update(t){try{this._$So?(this._$So=!1,super.update(t)):this._$Sh.forEach(t=>t.commit())}finally{this.isUpdatePending=!1,this._$Sh.clear()}}requestUpdate(t,i,e){this._$So=!0,super.requestUpdate(t,i,e)}connectedCallback(){super.connectedCallback(),this.requestUpdate()}disconnectedCallback(){super.disconnectedCallback(),queueMicrotask(()=>{!1===this.isConnected&&this._$Sp()})}_(t){this._$Sh.add(t);const i=this._$So;this.requestUpdate(),this._$So=i}m(t){this._$Sh.delete(t)}}}(Wt)){static styles=At`
    :host {
      display: grid;
      padding: 32px;
      gap: 24px;
      box-sizing: border-box;
      background: linear-gradient(135deg, #0f172a 0%, #1e293b 100%);
      min-height: 100vh;
      color: #f8fafc;
      font-family: 'Inter', system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
    }

    header {
      display: grid;
      gap: 8px;
      max-width: 720px;
    }

    header > h1 {
      margin: 0;
      font-weight: 600;
      font-size: clamp(2rem, 4vw, 2.6rem);
      letter-spacing: -0.02em;
    }

    header > p {
      margin: 0;
      color: rgba(241, 245, 249, 0.82);
      font-size: 1rem;
      max-width: 540px;
    }

    main {
      display: grid;
      gap: 24px;
      align-content: start;
      max-width: 720px;
    }

    .panel {
      background: rgba(15, 23, 42, 0.85);
      border-radius: 20px;
      padding: 24px;
      border: 1px solid rgba(148, 163, 184, 0.35);
      box-shadow: 0 30px 80px rgba(15, 23, 42, 0.35);
    }

    .controls {
      display: grid;
      gap: 16px;
    }

    .field {
      display: grid;
      gap: 8px;
    }

    label {
      font-size: 0.9rem;
      color: rgba(226, 232, 240, 0.85);
      text-transform: uppercase;
      letter-spacing: 0.08em;
      font-weight: 600;
    }

    input[type='text'] {
      background: rgba(15, 23, 42, 0.55);
      border: 1px solid rgba(148, 163, 184, 0.45);
      border-radius: 12px;
      padding: 12px 16px;
      color: inherit;
      font: inherit;
      outline: none;
      transition: border-color 120ms ease, box-shadow 120ms ease;
    }

    input[type='text']:focus {
      border-color: rgba(96, 165, 250, 0.85);
      box-shadow: 0 0 0 3px rgba(37, 99, 235, 0.35);
    }

    .actions {
      display: flex;
      gap: 12px;
      flex-wrap: wrap;
    }

    button {
      appearance: none;
      border: none;
      border-radius: 999px;
      padding: 10px 18px;
      font: inherit;
      cursor: pointer;
      transition: transform 120ms ease, box-shadow 120ms ease;
    }

    button.primary {
      background: #2563eb;
      color: #f8fafc;
      box-shadow: 0 12px 30px rgba(37, 99, 235, 0.35);
    }

    button.secondary {
      background: rgba(148, 163, 184, 0.25);
      color: rgba(241, 245, 249, 0.9);
      border: 1px solid rgba(148, 163, 184, 0.4);
    }

    button:hover {
      transform: translateY(-1px);
      box-shadow: 0 16px 40px rgba(37, 99, 235, 0.4);
    }

    button.secondary:hover {
      box-shadow: 0 12px 30px rgba(148, 163, 184, 0.35);
    }

    section.state-panel {
      margin-top: 12px;
      border-radius: 16px;
      padding: 16px;
      background: rgba(15, 23, 42, 0.6);
      border: 1px solid rgba(148, 163, 184, 0.25);
      display: grid;
      gap: 12px;
    }

    section.state-panel header {
      display: flex;
      justify-content: space-between;
      align-items: center;
    }

    section.state-panel h2 {
      margin: 0;
      font-size: 1.1rem;
      font-weight: 600;
    }

    section.state-panel pre {
      margin: 0;
      font-size: 0.85rem;
      background: rgba(15, 23, 42, 0.85);
      border-radius: 12px;
      padding: 16px;
      overflow: auto;
      max-height: 220px;
      color: rgba(148, 163, 184, 0.95);
    }

    my-element {
      width: 100%;
    }

    @media (max-width: 720px) {
      :host {
        padding: 24px;
      }

      header > h1 {
        font-size: clamp(1.8rem, 6vw, 2.3rem);
      }

      .actions {
        gap: 10px;
      }

      button {
        width: 100%;
        justify-content: center;
      }
    }
  `;render(){const t=Qt.get(),i=t.lastInteractionTs?new Date(t.lastInteractionTs).toLocaleTimeString():nt;return it`
      <header>
        <h1>Signal-driven Lit starter shell</h1>
        <p>
          This reference app shows how a host component consumes shared UI primitives
          and signal-backed state from the monorepo packages.
        </p>
      </header>

      <main>
        <div class="panel">
          <div class="controls">
            <div class="field">
              <label for="starter-name">Display name</label>
              <input
                id="starter-name"
                type="text"
                autocomplete="off"
                spellcheck="false"
                .value=${t.name}
                @input=${this.handleNameInput}
              />
              <p style="margin:0;color:rgba(226,232,240,0.65);font-size:0.85rem;">
                Leave blank to fall back to "${Xt}".
              </p>
            </div>
            <div class="actions">
              <button class="primary" type="button" @click=${this.handleIncrement}>
                Increment via store
              </button>
              <button class="secondary" type="button" @click=${this.handleReset}>
                Reset store
              </button>
            </div>
          </div>

          <my-element
            name=${t.name}
            .count=${t.clickCount}
            @count-changed=${this.handleIncrement}
          >
            <p style="margin-top:16px;color:rgba(30,41,59,0.8);">
              Shared content slot rendered inside the shared <code>&lt;my-element></code>.
            </p>
          </my-element>
        </div>

        <section class="state-panel" aria-label="lit-starter-store-state">
          <header>
            <h2>Store snapshot</h2>
            ${i?it`<span style="font-size:0.85rem;color:rgba(148,163,184,0.8);">
                  Last interaction: ${i}
                </span>`:nt}
          </header>
          <pre>${JSON.stringify(t,null,2)}</pre>
        </section>
      </main>
    `}handleNameInput(t){const i=t.target;!function(t){const i=t.trim()||Xt;Kt.get()!==i&&(Kt.set(i),ti())}(i?.value??Xt)}handleIncrement(){Yt.set(Yt.get()+1),ti()}handleReset(){Kt.set(Xt),Yt.set(0),Zt.set(null)}};Mo=function(t,i,e,n){for(var s,r=arguments.length,o=r<3?i:null===n?n=Object.getOwnPropertyDescriptor(i,e):n,h=t.length-1;h>=0;h--)(s=t[h])&&(o=(r<3?s(o):r>3?s(i,e,o):s(i,e))||o);return r>3&&o&&Object.defineProperty(i,e,o),o}([qt("my-app")],Mo);export{Mo as MyApp};
