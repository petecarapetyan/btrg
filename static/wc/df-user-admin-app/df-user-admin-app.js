var e=Object.defineProperty,t=(t,r,n)=>(((t,r,n)=>{r in t?e(t,r,{enumerable:!0,configurable:!0,writable:!0,value:n}):t[r]=n})(t,"symbol"!=typeof r?r+"":r,n),n),r=(e,t)=>{if(Object(t)!==t)throw TypeError('Cannot use the "in" operator on this value');return e.has(t)},n=(e,t,r)=>{if(t.has(e))throw TypeError("Cannot add the same private member more than once");t instanceof WeakSet?t.add(e):t.set(e,r)},i=(e,t,r)=>(((e,t,r)=>{if(!t.has(e))throw TypeError("Cannot "+r)})(e,t,"access private method"),r);
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
function s(e,t){return Object.is(e,t)}
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */let o=null,a=!1,l=1;const c=Symbol("SIGNAL");function h(e){const t=o;return o=e,t}const d={version:0,lastCleanEpoch:0,dirty:!1,producerNode:void 0,producerLastReadVersion:void 0,producerIndexOfThis:void 0,nextProducerIndex:0,liveConsumerNode:void 0,liveConsumerIndexOfThis:void 0,consumerAllowSignalWrites:!1,consumerIsAlwaysLive:!1,producerMustRecompute:()=>!1,producerRecomputeValue:()=>{},consumerMarkedDirty:()=>{},consumerOnSignalRead:()=>{}};function u(e){if(a)throw new Error("undefined"!=typeof ngDevMode&&ngDevMode?"Assertion error: signal read during notification phase":"");if(null===o)return;o.consumerOnSignalRead(e);const t=o.nextProducerIndex++;if(b(o),t<o.producerNode.length&&o.producerNode[t]!==e&&y(o)){v(o.producerNode[t],o.producerIndexOfThis[t])}o.producerNode[t]!==e&&(o.producerNode[t]=e,o.producerIndexOfThis[t]=y(o)?m(e,o,t):0),o.producerLastReadVersion[t]=e.version}function p(e){if(e.dirty||e.lastCleanEpoch!==l){if(!e.producerMustRecompute(e)&&!function(e){b(e);for(let t=0;t<e.producerNode.length;t++){const r=e.producerNode[t],n=e.producerLastReadVersion[t];if(n!==r.version)return!0;if(p(r),n!==r.version)return!0}return!1}(e))return e.dirty=!1,void(e.lastCleanEpoch=l);e.producerRecomputeValue(e),e.dirty=!1,e.lastCleanEpoch=l}}function f(e){if(void 0===e.liveConsumerNode)return;const t=a;a=!0;try{for(const t of e.liveConsumerNode)t.dirty||g(t)}finally{a=t}}function g(e){var t;e.dirty=!0,f(e),null==(t=e.consumerMarkedDirty)||t.call(e.wrapper??e)}function m(e,t,r){var n;if(_(e),b(e),0===e.liveConsumerNode.length){null==(n=e.watched)||n.call(e.wrapper);for(let t=0;t<e.producerNode.length;t++)e.producerIndexOfThis[t]=m(e.producerNode[t],e,t)}return e.liveConsumerIndexOfThis.push(r),e.liveConsumerNode.push(t)-1}function v(e,t){var r;if(_(e),b(e),"undefined"!=typeof ngDevMode&&ngDevMode&&t>=e.liveConsumerNode.length)throw new Error(`Assertion error: active consumer index ${t} is out of bounds of ${e.liveConsumerNode.length} consumers)`);if(1===e.liveConsumerNode.length){null==(r=e.unwatched)||r.call(e.wrapper);for(let t=0;t<e.producerNode.length;t++)v(e.producerNode[t],e.producerIndexOfThis[t])}const n=e.liveConsumerNode.length-1;if(e.liveConsumerNode[t]=e.liveConsumerNode[n],e.liveConsumerIndexOfThis[t]=e.liveConsumerIndexOfThis[n],e.liveConsumerNode.length--,e.liveConsumerIndexOfThis.length--,t<e.liveConsumerNode.length){const r=e.liveConsumerIndexOfThis[t],n=e.liveConsumerNode[t];b(n),n.producerIndexOfThis[r]=t}}function y(e){var t;return e.consumerIsAlwaysLive||((null==(t=null==e?void 0:e.liveConsumerNode)?void 0:t.length)??0)>0}function b(e){e.producerNode??(e.producerNode=[]),e.producerIndexOfThis??(e.producerIndexOfThis=[]),e.producerLastReadVersion??(e.producerLastReadVersion=[])}function _(e){e.liveConsumerNode??(e.liveConsumerNode=[]),e.liveConsumerIndexOfThis??(e.liveConsumerIndexOfThis=[])}
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */function w(e){if(p(e),u(e),e.value===S)throw e.error;return e.value}const E=Symbol("UNSET"),I=Symbol("COMPUTING"),S=Symbol("ERRORED"),T=(()=>({...d,value:E,dirty:!0,error:null,equal:s,producerMustRecompute:e=>e.value===E||e.value===I,producerRecomputeValue(e){if(e.value===I)throw new Error("Detected cycle in computations.");const t=e.value;e.value=I;const r=function(e){return e&&(e.nextProducerIndex=0),h(e)}(e);let n,i=!1;try{n=e.computation.call(e.wrapper);i=t!==E&&t!==S&&e.equal.call(e.wrapper,t,n)}catch(t){n=S,e.error=t}finally{!function(e,t){if(h(t),e&&void 0!==e.producerNode&&void 0!==e.producerIndexOfThis&&void 0!==e.producerLastReadVersion){if(y(e))for(let t=e.nextProducerIndex;t<e.producerNode.length;t++)v(e.producerNode[t],e.producerIndexOfThis[t]);for(;e.producerNode.length>e.nextProducerIndex;)e.producerNode.pop(),e.producerLastReadVersion.pop(),e.producerIndexOfThis.pop()}}(e,r)}i?e.value=t:(e.value=n,e.version++)}}))();let C=
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
function(){throw new Error};function A(){return u(this),this.value}function k(e,t){!1===(null==o?void 0:o.consumerAllowSignalWrites)&&C(),e.equal.call(e.wrapper,e.value,t)||(e.value=t,function(e){e.version++,l++,f(e)}
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
 */(e))}const x=(()=>({...d,equal:s,value:void 0}))();const R=Symbol("node");var P;(e=>{var s,l,p,f;s=R,l=new WeakSet,e.isState=e=>"object"==typeof e&&r(l,e),e.State=class{constructor(r,i={}){n(this,l),t(this,s);const o=
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
function(e){const t=Object.create(x);t.value=e;const r=()=>(u(t),t.value);return r[c]=t,r}(r),a=o[c];if(this[R]=a,a.wrapper=this,i){const t=i.equals;t&&(a.equal=t),a.watched=i[e.subtle.watched],a.unwatched=i[e.subtle.unwatched]}}get(){if(!(0,e.isState)(this))throw new TypeError("Wrong receiver type for Signal.State.prototype.get");return A.call(this[R])}set(t){if(!(0,e.isState)(this))throw new TypeError("Wrong receiver type for Signal.State.prototype.set");if(a)throw new Error("Writes to signals not permitted during Watcher callback");k(this[R],t)}};p=R,f=new WeakSet,e.isComputed=e=>"object"==typeof e&&r(f,e),e.Computed=class{constructor(r,i){n(this,f),t(this,p);const s=function(e){const t=Object.create(T);t.computation=e;const r=()=>w(t);return r[c]=t,r}(r),o=s[c];if(o.consumerAllowSignalWrites=!0,this[R]=o,o.wrapper=this,i){const t=i.equals;t&&(o.equal=t),o.watched=i[e.subtle.watched],o.unwatched=i[e.subtle.unwatched]}}get(){if(!(0,e.isComputed)(this))throw new TypeError("Wrong receiver type for Signal.Computed.prototype.get");return w(this[R])}},(s=>{var a,l,c,p;s.untrack=function(e){let t,r=null;try{r=h(null),t=e()}finally{h(r)}return t},s.introspectSources=function(t){var r;if(!(0,e.isComputed)(t)&&!(0,e.isWatcher)(t))throw new TypeError("Called introspectSources without a Computed or Watcher argument");return(null==(r=t[R].producerNode)?void 0:r.map(e=>e.wrapper))??[]},s.introspectSinks=function(t){var r;if(!(0,e.isComputed)(t)&&!(0,e.isState)(t))throw new TypeError("Called introspectSinks without a Signal argument");return(null==(r=t[R].liveConsumerNode)?void 0:r.map(e=>e.wrapper))??[]},s.hasSinks=function(t){if(!(0,e.isComputed)(t)&&!(0,e.isState)(t))throw new TypeError("Called hasSinks without a Signal argument");const r=t[R].liveConsumerNode;return!!r&&r.length>0},s.hasSources=function(t){if(!(0,e.isComputed)(t)&&!(0,e.isWatcher)(t))throw new TypeError("Called hasSources without a Computed or Watcher argument");const r=t[R].producerNode;return!!r&&r.length>0};a=R,l=new WeakSet,c=new WeakSet,p=function(t){for(const r of t)if(!(0,e.isComputed)(r)&&!(0,e.isState)(r))throw new TypeError("Called watch/unwatch without a Computed or State argument")},e.isWatcher=e=>r(l,e),s.Watcher=class{constructor(e){n(this,l),n(this,c),t(this,a);let r=Object.create(d);r.wrapper=this,r.consumerMarkedDirty=e,r.consumerIsAlwaysLive=!0,r.consumerAllowSignalWrites=!1,r.producerNode=[],this[R]=r}watch(...t){if(!(0,e.isWatcher)(this))throw new TypeError("Called unwatch without Watcher receiver");i(this,c,p).call(this,t);const r=this[R];r.dirty=!1;const n=h(r);for(const e of t)u(e[R]);h(n)}unwatch(...t){if(!(0,e.isWatcher)(this))throw new TypeError("Called unwatch without Watcher receiver");i(this,c,p).call(this,t);const r=this[R];b(r);for(let e=r.producerNode.length-1;e>=0;e--)if(t.includes(r.producerNode[e].wrapper)){v(r.producerNode[e],r.producerIndexOfThis[e]);const t=r.producerNode.length-1;if(r.producerNode[e]=r.producerNode[t],r.producerIndexOfThis[e]=r.producerIndexOfThis[t],r.producerNode.length--,r.producerIndexOfThis.length--,r.nextProducerIndex--,e<r.producerNode.length){const t=r.producerIndexOfThis[e],n=r.producerNode[e];_(n),n.liveConsumerIndexOfThis[t]=e}}}getPending(){if(!(0,e.isWatcher)(this))throw new TypeError("Called getPending without Watcher receiver");return this[R].producerNode.filter(e=>e.dirty).map(e=>e.wrapper)}},s.currentComputed=function(){var e;return null==(e=o)?void 0:e.wrapper},s.watched=Symbol("watched"),s.unwatched=Symbol("unwatched")})(e.subtle||(e.subtle={}))})(P||(P={}));
/**
 * @license
 * Copyright 2023 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const O=Symbol("SignalWatcherBrand"),N=new FinalizationRegistry(({watcher:e,signal:t})=>{e.unwatch(t)}),D=new WeakMap;function L(e){return!0===e[O]?(console.warn("SignalWatcher should not be applied to the same class more than once."),e):class extends e{constructor(){super(...arguments),this._$St=new P.State(0),this._$Si=!1,this._$So=!0,this._$Sh=new Set}_$Sl(){if(void 0!==this._$Su)return;this._$Sv=new P.Computed(()=>{this._$St.get(),super.performUpdate()});const e=this._$Su=new P.subtle.Watcher(function(){const e=D.get(this);void 0!==e&&(!1===e._$Si&&e.requestUpdate(),this.watch())});D.set(e,this),N.register(this,{watcher:e,signal:this._$Sv}),e.watch(this._$Sv)}_$Sp(){void 0!==this._$Su&&(this._$Su.unwatch(this._$Sv),this._$Sv=void 0,this._$Su=void 0)}performUpdate(){this.isUpdatePending&&(this._$Sl(),this._$Si=!0,this._$St.set(this._$St.get()+1),this._$Si=!1,this._$Sv.get())}update(e){try{this._$So?(this._$So=!1,super.update(e)):this._$Sh.forEach(e=>e.commit())}finally{this.isUpdatePending=!1,this._$Sh.clear()}}requestUpdate(e,t,r){this._$So=!0,super.requestUpdate(e,t,r)}connectedCallback(){super.connectedCallback(),this.requestUpdate()}disconnectedCallback(){super.disconnectedCallback(),queueMicrotask(()=>{!1===this.isConnected&&this._$Sp()})}_(e){this._$Sh.add(e);const t=this._$So;this.requestUpdate(),this._$So=t}m(e){this._$Sh.delete(e)}}}
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const $=1;let U=class{constructor(e){}get _$AU(){return this._$AM._$AU}_$AT(e,t,r){this._$Ct=e,this._$AM=t,this._$Ci=r}_$AS(e,t){return this.update(e,t)}update(e,t){return this.render(...t)}};
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const M=globalThis,j=M.trustedTypes,F=j?j.createPolicy("lit-html",{createHTML:e=>e}):void 0,V="$lit$",z=`lit$${Math.random().toFixed(9).slice(2)}$`,B="?"+z,H=`<${B}>`,W=document,q=()=>W.createComment(""),G=e=>null===e||"object"!=typeof e&&"function"!=typeof e,K=Array.isArray,J="[ \t\n\f\r]",X=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,Y=/-->/g,Z=/>/g,Q=RegExp(`>|${J}(?:([^\\s"'>=/]+)(${J}*=${J}*(?:[^ \t\n\f\r"'\`<>=]|("|')|))|$)`,"g"),ee=/'/g,te=/"/g,re=/^(?:script|style|textarea|title)$/i,ne=(e=>(t,...r)=>({_$litType$:e,strings:t,values:r}))(1),ie=Symbol.for("lit-noChange"),se=Symbol.for("lit-nothing"),oe=new WeakMap,ae=W.createTreeWalker(W,129);function le(e,t){if(!K(e)||!e.hasOwnProperty("raw"))throw Error("invalid template strings array");return void 0!==F?F.createHTML(t):t}const ce=(e,t)=>{const r=e.length-1,n=[];let i,s=2===t?"<svg>":3===t?"<math>":"",o=X;for(let t=0;t<r;t++){const r=e[t];let a,l,c=-1,h=0;for(;h<r.length&&(o.lastIndex=h,l=o.exec(r),null!==l);)h=o.lastIndex,o===X?"!--"===l[1]?o=Y:void 0!==l[1]?o=Z:void 0!==l[2]?(re.test(l[2])&&(i=RegExp("</"+l[2],"g")),o=Q):void 0!==l[3]&&(o=Q):o===Q?">"===l[0]?(o=i??X,c=-1):void 0===l[1]?c=-2:(c=o.lastIndex-l[2].length,a=l[1],o=void 0===l[3]?Q:'"'===l[3]?te:ee):o===te||o===ee?o=Q:o===Y||o===Z?o=X:(o=Q,i=void 0);const d=o===Q&&e[t+1].startsWith("/>")?" ":"";s+=o===X?r+H:c>=0?(n.push(a),r.slice(0,c)+V+r.slice(c)+z+d):r+z+(-2===c?t:d)}return[le(e,s+(e[r]||"<?>")+(2===t?"</svg>":3===t?"</math>":"")),n]};let he=class e{constructor({strings:t,_$litType$:r},n){let i;this.parts=[];let s=0,o=0;const a=t.length-1,l=this.parts,[c,h]=ce(t,r);if(this.el=e.createElement(c,n),ae.currentNode=this.el.content,2===r||3===r){const e=this.el.content.firstChild;e.replaceWith(...e.childNodes)}for(;null!==(i=ae.nextNode())&&l.length<a;){if(1===i.nodeType){if(i.hasAttributes())for(const e of i.getAttributeNames())if(e.endsWith(V)){const t=h[o++],r=i.getAttribute(e).split(z),n=/([.?@])?(.*)/.exec(t);l.push({type:1,index:s,name:n[2],strings:r,ctor:"."===n[1]?ge:"?"===n[1]?me:"@"===n[1]?ve:fe}),i.removeAttribute(e)}else e.startsWith(z)&&(l.push({type:6,index:s}),i.removeAttribute(e));if(re.test(i.tagName)){const e=i.textContent.split(z),t=e.length-1;if(t>0){i.textContent=j?j.emptyScript:"";for(let r=0;r<t;r++)i.append(e[r],q()),ae.nextNode(),l.push({type:2,index:++s});i.append(e[t],q())}}}else if(8===i.nodeType)if(i.data===B)l.push({type:2,index:s});else{let e=-1;for(;-1!==(e=i.data.indexOf(z,e+1));)l.push({type:7,index:s}),e+=z.length-1}s++}}static createElement(e,t){const r=W.createElement("template");return r.innerHTML=e,r}};function de(e,t,r=e,n){if(t===ie)return t;let i=void 0!==n?r._$Co?.[n]:r._$Cl;const s=G(t)?void 0:t._$litDirective$;return i?.constructor!==s&&(i?._$AO?.(!1),void 0===s?i=void 0:(i=new s(e),i._$AT(e,r,n)),void 0!==n?(r._$Co??=[])[n]=i:r._$Cl=i),void 0!==i&&(t=de(e,i._$AS(e,t.values),i,n)),t}let ue=class{constructor(e,t){this._$AV=[],this._$AN=void 0,this._$AD=e,this._$AM=t}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(e){const{el:{content:t},parts:r}=this._$AD,n=(e?.creationScope??W).importNode(t,!0);ae.currentNode=n;let i=ae.nextNode(),s=0,o=0,a=r[0];for(;void 0!==a;){if(s===a.index){let t;2===a.type?t=new pe(i,i.nextSibling,this,e):1===a.type?t=new a.ctor(i,a.name,a.strings,this,e):6===a.type&&(t=new ye(i,this,e)),this._$AV.push(t),a=r[++o]}s!==a?.index&&(i=ae.nextNode(),s++)}return ae.currentNode=W,n}p(e){let t=0;for(const r of this._$AV)void 0!==r&&(void 0!==r.strings?(r._$AI(e,r,t),t+=r.strings.length-2):r._$AI(e[t])),t++}};class pe{get _$AU(){return this._$AM?._$AU??this._$Cv}constructor(e,t,r,n){this.type=2,this._$AH=se,this._$AN=void 0,this._$AA=e,this._$AB=t,this._$AM=r,this.options=n,this._$Cv=n?.isConnected??!0}get parentNode(){let e=this._$AA.parentNode;const t=this._$AM;return void 0!==t&&11===e?.nodeType&&(e=t.parentNode),e}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(e,t=this){e=de(this,e,t),G(e)?e===se||null==e||""===e?(this._$AH!==se&&this._$AR(),this._$AH=se):e!==this._$AH&&e!==ie&&this._(e):void 0!==e._$litType$?this.$(e):void 0!==e.nodeType?this.T(e):(e=>K(e)||"function"==typeof e?.[Symbol.iterator])(e)?this.k(e):this._(e)}O(e){return this._$AA.parentNode.insertBefore(e,this._$AB)}T(e){this._$AH!==e&&(this._$AR(),this._$AH=this.O(e))}_(e){this._$AH!==se&&G(this._$AH)?this._$AA.nextSibling.data=e:this.T(W.createTextNode(e)),this._$AH=e}$(e){const{values:t,_$litType$:r}=e,n="number"==typeof r?this._$AC(e):(void 0===r.el&&(r.el=he.createElement(le(r.h,r.h[0]),this.options)),r);if(this._$AH?._$AD===n)this._$AH.p(t);else{const e=new ue(n,this),r=e.u(this.options);e.p(t),this.T(r),this._$AH=e}}_$AC(e){let t=oe.get(e.strings);return void 0===t&&oe.set(e.strings,t=new he(e)),t}k(e){K(this._$AH)||(this._$AH=[],this._$AR());const t=this._$AH;let r,n=0;for(const i of e)n===t.length?t.push(r=new pe(this.O(q()),this.O(q()),this,this.options)):r=t[n],r._$AI(i),n++;n<t.length&&(this._$AR(r&&r._$AB.nextSibling,n),t.length=n)}_$AR(e=this._$AA.nextSibling,t){for(this._$AP?.(!1,!0,t);e!==this._$AB;){const t=e.nextSibling;e.remove(),e=t}}setConnected(e){void 0===this._$AM&&(this._$Cv=e,this._$AP?.(e))}}let fe=class{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(e,t,r,n,i){this.type=1,this._$AH=se,this._$AN=void 0,this.element=e,this.name=t,this._$AM=n,this.options=i,r.length>2||""!==r[0]||""!==r[1]?(this._$AH=Array(r.length-1).fill(new String),this.strings=r):this._$AH=se}_$AI(e,t=this,r,n){const i=this.strings;let s=!1;if(void 0===i)e=de(this,e,t,0),s=!G(e)||e!==this._$AH&&e!==ie,s&&(this._$AH=e);else{const n=e;let o,a;for(e=i[0],o=0;o<i.length-1;o++)a=de(this,n[r+o],t,o),a===ie&&(a=this._$AH[o]),s||=!G(a)||a!==this._$AH[o],a===se?e=se:e!==se&&(e+=(a??"")+i[o+1]),this._$AH[o]=a}s&&!n&&this.j(e)}j(e){e===se?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,e??"")}};class ge extends fe{constructor(){super(...arguments),this.type=3}j(e){this.element[this.name]=e===se?void 0:e}}class me extends fe{constructor(){super(...arguments),this.type=4}j(e){this.element.toggleAttribute(this.name,!!e&&e!==se)}}let ve=class extends fe{constructor(e,t,r,n,i){super(e,t,r,n,i),this.type=5}_$AI(e,t=this){if((e=de(this,e,t,0)??se)===ie)return;const r=this._$AH,n=e===se&&r!==se||e.capture!==r.capture||e.once!==r.once||e.passive!==r.passive,i=e!==se&&(r===se||n);n&&this.element.removeEventListener(this.name,this,r),i&&this.element.addEventListener(this.name,this,e),this._$AH=e}handleEvent(e){"function"==typeof this._$AH?this._$AH.call(this.options?.host??this.element,e):this._$AH.handleEvent(e)}};class ye{constructor(e,t,r){this.element=e,this.type=6,this._$AN=void 0,this._$AM=t,this.options=r}get _$AU(){return this._$AM._$AU}_$AI(e){de(this,e)}}const be=M.litHtmlPolyfillSupport;be?.(he,pe),(M.litHtmlVersions??=[]).push("3.3.1");
/**
 * @license
 * Copyright 2023 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
P.State,P.Computed;const _e=(e,t)=>new P.State(e,t),we=(e,t)=>new P.Computed(e,t),Ee=_e("World"),Ie=_e(0),Se=_e(null);we(()=>{const e=Ee.get();return{name:e,greeting:`Hello, ${e}!`,clickCount:Ie.get(),lastInteractionTs:Se.get()}});const Te=_e(""),Ce=_e(null),Ae=_e("idle"),ke=_e(null),xe=_e(null);we(()=>({packageName:Te.get(),packageData:Ce.get(),status:Ae.get(),lastUpdated:ke.get(),errorMessage:xe.get()}));const Re=_e("web-components"),Pe=_e([]),Oe=_e("idle"),Ne=_e(null),De=_e(0),Le=_e(null),$e=_e(!1),Ue=_e(!1);if(we(()=>({version:De.get(),topic:Re.get(),tasks:Pe.get(),status:Oe.get(),lastUpdated:Ne.get(),isAutoRefreshing:Ue.get(),errorMessage:Le.get()})),"object"==typeof globalThis){const e=globalThis;e.__dfPracticeForcePracticeErrorSetter=function(e){$e.set(e)},e.__dfPracticeGetForcePracticeError=()=>$e.get()}const Me=_e([]),je=_e("none"),Fe=_e([{id:"none",label:"None"},{id:"upload",label:"Upload"},{id:"site",label:"Site"},{id:"add",label:"Add"}]);we(()=>({options:Fe.get(),selectedId:je.get(),disabledIds:Me.get()}));const Ve=_e("none"),ze=_e(""),Be=_e("Select File to Upload"),He=_e(!1),We=_e(0),qe=_e(!1),Ge=_e("void");we(()=>({mode:Ve.get(),linkUrl:ze.get(),fileName:Be.get(),isUploading:He.get(),uploadProgress:We.get(),isValid:qe.get(),mediaType:Ge.get()}));const Ke=_e(0),Je=_e(""),Xe=_e("idle"),Ye=_e(null),Ze=_e(null);we(()=>({tokenCount:Ke.get(),documentContent:Je.get(),status:Xe.get(),lastUpdated:Ye.get(),errorMessage:Ze.get()}));
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
const Qe=function(e){const t=[];let r=0;for(let n=0;n<e.length;n++){let i=e.charCodeAt(n);i<128?t[r++]=i:i<2048?(t[r++]=i>>6|192,t[r++]=63&i|128):55296==(64512&i)&&n+1<e.length&&56320==(64512&e.charCodeAt(n+1))?(i=65536+((1023&i)<<10)+(1023&e.charCodeAt(++n)),t[r++]=i>>18|240,t[r++]=i>>12&63|128,t[r++]=i>>6&63|128,t[r++]=63&i|128):(t[r++]=i>>12|224,t[r++]=i>>6&63|128,t[r++]=63&i|128)}return t},et={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:"function"==typeof atob,encodeByteArray(e,t){if(!Array.isArray(e))throw Error("encodeByteArray takes an array as a parameter");this.init_();const r=t?this.byteToCharMapWebSafe_:this.byteToCharMap_,n=[];for(let t=0;t<e.length;t+=3){const i=e[t],s=t+1<e.length,o=s?e[t+1]:0,a=t+2<e.length,l=a?e[t+2]:0,c=i>>2,h=(3&i)<<4|o>>4;let d=(15&o)<<2|l>>6,u=63&l;a||(u=64,s||(d=64)),n.push(r[c],r[h],r[d],r[u])}return n.join("")},encodeString(e,t){return this.HAS_NATIVE_SUPPORT&&!t?btoa(e):this.encodeByteArray(Qe(e),t)},decodeString(e,t){return this.HAS_NATIVE_SUPPORT&&!t?atob(e):function(e){const t=[];let r=0,n=0;for(;r<e.length;){const i=e[r++];if(i<128)t[n++]=String.fromCharCode(i);else if(i>191&&i<224){const s=e[r++];t[n++]=String.fromCharCode((31&i)<<6|63&s)}else if(i>239&&i<365){const s=((7&i)<<18|(63&e[r++])<<12|(63&e[r++])<<6|63&e[r++])-65536;t[n++]=String.fromCharCode(55296+(s>>10)),t[n++]=String.fromCharCode(56320+(1023&s))}else{const s=e[r++],o=e[r++];t[n++]=String.fromCharCode((15&i)<<12|(63&s)<<6|63&o)}}return t.join("")}(this.decodeStringToByteArray(e,t))},decodeStringToByteArray(e,t){this.init_();const r=t?this.charToByteMapWebSafe_:this.charToByteMap_,n=[];for(let t=0;t<e.length;){const i=r[e.charAt(t++)],s=t<e.length?r[e.charAt(t)]:0;++t;const o=t<e.length?r[e.charAt(t)]:64;++t;const a=t<e.length?r[e.charAt(t)]:64;if(++t,null==i||null==s||null==o||null==a)throw new tt;const l=i<<2|s>>4;if(n.push(l),64!==o){const e=s<<4&240|o>>2;if(n.push(e),64!==a){const e=o<<6&192|a;n.push(e)}}}return n},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let e=0;e<this.ENCODED_VALS.length;e++)this.byteToCharMap_[e]=this.ENCODED_VALS.charAt(e),this.charToByteMap_[this.byteToCharMap_[e]]=e,this.byteToCharMapWebSafe_[e]=this.ENCODED_VALS_WEBSAFE.charAt(e),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[e]]=e,e>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(e)]=e,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(e)]=e)}}};
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
 */class tt extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const rt=function(e){return function(e){const t=Qe(e);return et.encodeByteArray(t,!0)}(e).replace(/\./g,"")},nt=function(e){try{return et.decodeString(e,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};
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
const it=()=>
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
function(){if("undefined"!=typeof self)return self;if("undefined"!=typeof window)return window;if("undefined"!=typeof global)return global;throw new Error("Unable to locate global object.")}().__FIREBASE_DEFAULTS__,st=()=>{try{return it()||(()=>{if("undefined"==typeof process||void 0===process.env)return;const e=process.env.__FIREBASE_DEFAULTS__;return e?JSON.parse(e):void 0})()||(()=>{if("undefined"==typeof document)return;let e;try{e=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch(e){return}const t=e&&nt(e[1]);return t&&JSON.parse(t)})()}catch(e){return void console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${e}`)}},ot=e=>{var t,r;return null===(r=null===(t=st())||void 0===t?void 0:t.emulatorHosts)||void 0===r?void 0:r[e]},at=()=>{var e;return null===(e=st())||void 0===e?void 0:e.config},lt=e=>{var t;return null===(t=st())||void 0===t?void 0:t[`_${e}`]};
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
class ct{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,t)=>{this.resolve=e,this.reject=t})}wrapCallback(e){return(t,r)=>{t?this.reject(t):this.resolve(r),"function"==typeof e&&(this.promise.catch(()=>{}),1===e.length?e(t):e(t,r))}}}
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
 */function ht(e){try{return(e.startsWith("http://")||e.startsWith("https://")?new URL(e).hostname:e).endsWith(".cloudworkstations.dev")}catch(e){return!1}}async function dt(e){return(await fetch(e,{credentials:"include"})).ok}const ut={};let pt=!1;function ft(e,t){if("undefined"==typeof window||"undefined"==typeof document||!ht(window.location.host)||ut[e]===t||ut[e]||pt)return;function r(e){return`__firebase__banner__${e}`}ut[e]=t;const n="__firebase__banner",i=function(){const e={prod:[],emulator:[]};for(const t of Object.keys(ut))ut[t]?e.emulator.push(t):e.prod.push(t);return e}().prod.length>0;function s(){const e=document.createElement("span");return e.style.cursor="pointer",e.style.marginLeft="16px",e.style.fontSize="24px",e.innerHTML=" &times;",e.onclick=()=>{pt=!0,function(){const e=document.getElementById(n);e&&e.remove()}()},e}function o(){const e=function(e){let t=document.getElementById(e),r=!1;return t||(t=document.createElement("div"),t.setAttribute("id",e),r=!0),{created:r,element:t}}(n),t=r("text"),o=document.getElementById(t)||document.createElement("span"),a=r("learnmore"),l=document.getElementById(a)||document.createElement("a"),c=r("preprendIcon"),h=document.getElementById(c)||document.createElementNS("http://www.w3.org/2000/svg","svg");if(e.created){const t=e.element;!function(e){e.style.display="flex",e.style.background="#7faaf0",e.style.position="fixed",e.style.bottom="5px",e.style.left="5px",e.style.padding=".5em",e.style.borderRadius="5px",e.style.alignItems="center"}(t),function(e,t){e.setAttribute("id",t),e.innerText="Learn more",e.href="https://firebase.google.com/docs/studio/preview-apps#preview-backend",e.setAttribute("target","__blank"),e.style.paddingLeft="5px",e.style.textDecoration="underline"}(l,a);const r=s();!function(e,t){e.setAttribute("width","24"),e.setAttribute("id",t),e.setAttribute("height","24"),e.setAttribute("viewBox","0 0 24 24"),e.setAttribute("fill","none"),e.style.marginLeft="-6px"}(h,c),t.append(h,o,l,r),document.body.appendChild(t)}i?(o.innerText="Preview backend disconnected.",h.innerHTML='<g clip-path="url(#clip0_6013_33858)">\n<path d="M4.8 17.6L12 5.6L19.2 17.6H4.8ZM6.91667 16.4H17.0833L12 7.93333L6.91667 16.4ZM12 15.6C12.1667 15.6 12.3056 15.5444 12.4167 15.4333C12.5389 15.3111 12.6 15.1667 12.6 15C12.6 14.8333 12.5389 14.6944 12.4167 14.5833C12.3056 14.4611 12.1667 14.4 12 14.4C11.8333 14.4 11.6889 14.4611 11.5667 14.5833C11.4556 14.6944 11.4 14.8333 11.4 15C11.4 15.1667 11.4556 15.3111 11.5667 15.4333C11.6889 15.5444 11.8333 15.6 12 15.6ZM11.4 13.6H12.6V10.4H11.4V13.6Z" fill="#212121"/>\n</g>\n<defs>\n<clipPath id="clip0_6013_33858">\n<rect width="24" height="24" fill="white"/>\n</clipPath>\n</defs>'):(h.innerHTML='<g clip-path="url(#clip0_6083_34804)">\n<path d="M11.4 15.2H12.6V11.2H11.4V15.2ZM12 10C12.1667 10 12.3056 9.94444 12.4167 9.83333C12.5389 9.71111 12.6 9.56667 12.6 9.4C12.6 9.23333 12.5389 9.09444 12.4167 8.98333C12.3056 8.86111 12.1667 8.8 12 8.8C11.8333 8.8 11.6889 8.86111 11.5667 8.98333C11.4556 9.09444 11.4 9.23333 11.4 9.4C11.4 9.56667 11.4556 9.71111 11.5667 9.83333C11.6889 9.94444 11.8333 10 12 10ZM12 18.4C11.1222 18.4 10.2944 18.2333 9.51667 17.9C8.73889 17.5667 8.05556 17.1111 7.46667 16.5333C6.88889 15.9444 6.43333 15.2611 6.1 14.4833C5.76667 13.7056 5.6 12.8778 5.6 12C5.6 11.1111 5.76667 10.2833 6.1 9.51667C6.43333 8.73889 6.88889 8.06111 7.46667 7.48333C8.05556 6.89444 8.73889 6.43333 9.51667 6.1C10.2944 5.76667 11.1222 5.6 12 5.6C12.8889 5.6 13.7167 5.76667 14.4833 6.1C15.2611 6.43333 15.9389 6.89444 16.5167 7.48333C17.1056 8.06111 17.5667 8.73889 17.9 9.51667C18.2333 10.2833 18.4 11.1111 18.4 12C18.4 12.8778 18.2333 13.7056 17.9 14.4833C17.5667 15.2611 17.1056 15.9444 16.5167 16.5333C15.9389 17.1111 15.2611 17.5667 14.4833 17.9C13.7167 18.2333 12.8889 18.4 12 18.4ZM12 17.2C13.4444 17.2 14.6722 16.6944 15.6833 15.6833C16.6944 14.6722 17.2 13.4444 17.2 12C17.2 10.5556 16.6944 9.32778 15.6833 8.31667C14.6722 7.30555 13.4444 6.8 12 6.8C10.5556 6.8 9.32778 7.30555 8.31667 8.31667C7.30556 9.32778 6.8 10.5556 6.8 12C6.8 13.4444 7.30556 14.6722 8.31667 15.6833C9.32778 16.6944 10.5556 17.2 12 17.2Z" fill="#212121"/>\n</g>\n<defs>\n<clipPath id="clip0_6083_34804">\n<rect width="24" height="24" fill="white"/>\n</clipPath>\n</defs>',o.innerText="Preview backend running in this workspace."),o.setAttribute("id",t)}"loading"===document.readyState?window.addEventListener("DOMContentLoaded",o):o()}
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
 */function gt(){return"undefined"!=typeof navigator&&"string"==typeof navigator.userAgent?navigator.userAgent:""}class mt extends Error{constructor(e,t,r){super(t),this.code=e,this.customData=r,this.name="FirebaseError",Object.setPrototypeOf(this,mt.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,vt.prototype.create)}}class vt{constructor(e,t,r){this.service=e,this.serviceName=t,this.errors=r}create(e,...t){const r=t[0]||{},n=`${this.service}/${e}`,i=this.errors[e],s=i?function(e,t){return e.replace(yt,(e,r)=>{const n=t[r];return null!=n?String(n):`<${r}?>`})}(i,r):"Error",o=`${this.serviceName}: ${s} (${n}).`;return new mt(n,o,r)}}const yt=/\{\$([^}]+)}/g;function bt(e,t){if(e===t)return!0;const r=Object.keys(e),n=Object.keys(t);for(const i of r){if(!n.includes(i))return!1;const r=e[i],s=t[i];if(_t(r)&&_t(s)){if(!bt(r,s))return!1}else if(r!==s)return!1}for(const e of n)if(!r.includes(e))return!1;return!0}function _t(e){return null!==e&&"object"==typeof e}
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
 */function wt(e){const t=[];for(const[r,n]of Object.entries(e))Array.isArray(n)?n.forEach(e=>{t.push(encodeURIComponent(r)+"="+encodeURIComponent(e))}):t.push(encodeURIComponent(r)+"="+encodeURIComponent(n));return t.length?"&"+t.join("&"):""}function Et(e){const t={};return e.replace(/^\?/,"").split("&").forEach(e=>{if(e){const[r,n]=e.split("=");t[decodeURIComponent(r)]=decodeURIComponent(n)}}),t}function It(e){const t=e.indexOf("?");if(!t)return"";const r=e.indexOf("#",t);return e.substring(t,r>0?r:void 0)}class St{constructor(e,t){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=t,this.task.then(()=>{e(this)}).catch(e=>{this.error(e)})}next(e){this.forEachObserver(t=>{t.next(e)})}error(e){this.forEachObserver(t=>{t.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,t,r){let n;if(void 0===e&&void 0===t&&void 0===r)throw new Error("Missing Observer.");n=function(e,t){if("object"!=typeof e||null===e)return!1;for(const r of t)if(r in e&&"function"==typeof e[r])return!0;return!1}(e,["next","error","complete"])?e:{next:e,error:t,complete:r},void 0===n.next&&(n.next=Tt),void 0===n.error&&(n.error=Tt),void 0===n.complete&&(n.complete=Tt);const i=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?n.error(this.finalError):n.complete()}catch(e){}}),this.observers.push(n),i}unsubscribeOne(e){void 0!==this.observers&&void 0!==this.observers[e]&&(delete this.observers[e],this.observerCount-=1,0===this.observerCount&&void 0!==this.onNoObservers&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let t=0;t<this.observers.length;t++)this.sendOne(t,e)}sendOne(e,t){this.task.then(()=>{if(void 0!==this.observers&&void 0!==this.observers[e])try{t(this.observers[e])}catch(e){"undefined"!=typeof console&&console.error&&console.error(e)}})}close(e){this.finalized||(this.finalized=!0,void 0!==e&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function Tt(){}
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
 */function Ct(e){return e&&e._delegate?e._delegate:e}class At{constructor(e,t,r){this.name=e,this.instanceFactory=t,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}
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
 */const kt="[DEFAULT]";
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
 */class xt{constructor(e,t){this.name=e,this.container=t,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const t=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(t)){const e=new ct;if(this.instancesDeferred.set(t,e),this.isInitialized(t)||this.shouldAutoInitialize())try{const r=this.getOrInitializeService({instanceIdentifier:t});r&&e.resolve(r)}catch(e){}}return this.instancesDeferred.get(t).promise}getImmediate(e){var t;const r=this.normalizeInstanceIdentifier(null==e?void 0:e.identifier),n=null!==(t=null==e?void 0:e.optional)&&void 0!==t&&t;if(!this.isInitialized(r)&&!this.shouldAutoInitialize()){if(n)return null;throw Error(`Service ${this.name} is not available`)}try{return this.getOrInitializeService({instanceIdentifier:r})}catch(e){if(n)return null;throw e}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,this.shouldAutoInitialize()){if(function(e){return"EAGER"===e.instantiationMode}
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
 */(e))try{this.getOrInitializeService({instanceIdentifier:kt})}catch(e){}for(const[e,t]of this.instancesDeferred.entries()){const r=this.normalizeInstanceIdentifier(e);try{const e=this.getOrInitializeService({instanceIdentifier:r});t.resolve(e)}catch(e){}}}}clearInstance(e=kt){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(e=>"INTERNAL"in e).map(e=>e.INTERNAL.delete()),...e.filter(e=>"_delete"in e).map(e=>e._delete())])}isComponentSet(){return null!=this.component}isInitialized(e=kt){return this.instances.has(e)}getOptions(e=kt){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:t={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const n=this.getOrInitializeService({instanceIdentifier:r,options:t});for(const[e,t]of this.instancesDeferred.entries()){r===this.normalizeInstanceIdentifier(e)&&t.resolve(n)}return n}onInit(e,t){var r;const n=this.normalizeInstanceIdentifier(t),i=null!==(r=this.onInitCallbacks.get(n))&&void 0!==r?r:new Set;i.add(e),this.onInitCallbacks.set(n,i);const s=this.instances.get(n);return s&&e(s,n),()=>{i.delete(e)}}invokeOnInitCallbacks(e,t){const r=this.onInitCallbacks.get(t);if(r)for(const n of r)try{n(e,t)}catch(e){}}getOrInitializeService({instanceIdentifier:e,options:t={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:(n=e,n===kt?void 0:n),options:t}),this.instances.set(e,r),this.instancesOptions.set(e,t),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch(e){}var n;return r||null}normalizeInstanceIdentifier(e=kt){return this.component?this.component.multipleInstances?e:kt:e}shouldAutoInitialize(){return!!this.component&&"EXPLICIT"!==this.component.instantiationMode}}class Rt{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const t=this.getProvider(e.name);if(t.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);t.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const t=new xt(e,this);return this.providers.set(e,t),t}getProviders(){return Array.from(this.providers.values())}}
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
 */var Pt;!function(e){e[e.DEBUG=0]="DEBUG",e[e.VERBOSE=1]="VERBOSE",e[e.INFO=2]="INFO",e[e.WARN=3]="WARN",e[e.ERROR=4]="ERROR",e[e.SILENT=5]="SILENT"}(Pt||(Pt={}));const Ot={debug:Pt.DEBUG,verbose:Pt.VERBOSE,info:Pt.INFO,warn:Pt.WARN,error:Pt.ERROR,silent:Pt.SILENT},Nt=Pt.INFO,Dt={[Pt.DEBUG]:"log",[Pt.VERBOSE]:"log",[Pt.INFO]:"info",[Pt.WARN]:"warn",[Pt.ERROR]:"error"},Lt=(e,t,...r)=>{if(t<e.logLevel)return;const n=(new Date).toISOString(),i=Dt[t];if(!i)throw new Error(`Attempted to log a message with an invalid logType (value: ${t})`);console[i](`[${n}]  ${e.name}:`,...r)};class $t{constructor(e){this.name=e,this._logLevel=Nt,this._logHandler=Lt,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in Pt))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel="string"==typeof e?Ot[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if("function"!=typeof e)throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,Pt.DEBUG,...e),this._logHandler(this,Pt.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,Pt.VERBOSE,...e),this._logHandler(this,Pt.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,Pt.INFO,...e),this._logHandler(this,Pt.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,Pt.WARN,...e),this._logHandler(this,Pt.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,Pt.ERROR,...e),this._logHandler(this,Pt.ERROR,...e)}}let Ut,Mt;const jt=new WeakMap,Ft=new WeakMap,Vt=new WeakMap,zt=new WeakMap,Bt=new WeakMap;let Ht={get(e,t,r){if(e instanceof IDBTransaction){if("done"===t)return Ft.get(e);if("objectStoreNames"===t)return e.objectStoreNames||Vt.get(e);if("store"===t)return r.objectStoreNames[1]?void 0:r.objectStore(r.objectStoreNames[0])}return Gt(e[t])},set:(e,t,r)=>(e[t]=r,!0),has:(e,t)=>e instanceof IDBTransaction&&("done"===t||"store"===t)||t in e};function Wt(e){return e!==IDBDatabase.prototype.transaction||"objectStoreNames"in IDBTransaction.prototype?(Mt||(Mt=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])).includes(e)?function(...t){return e.apply(Kt(this),t),Gt(jt.get(this))}:function(...t){return Gt(e.apply(Kt(this),t))}:function(t,...r){const n=e.call(Kt(this),t,...r);return Vt.set(n,t.sort?t.sort():[t]),Gt(n)}}function qt(e){return"function"==typeof e?Wt(e):(e instanceof IDBTransaction&&function(e){if(Ft.has(e))return;const t=new Promise((t,r)=>{const n=()=>{e.removeEventListener("complete",i),e.removeEventListener("error",s),e.removeEventListener("abort",s)},i=()=>{t(),n()},s=()=>{r(e.error||new DOMException("AbortError","AbortError")),n()};e.addEventListener("complete",i),e.addEventListener("error",s),e.addEventListener("abort",s)});Ft.set(e,t)}(e),t=e,(Ut||(Ut=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])).some(e=>t instanceof e)?new Proxy(e,Ht):e);var t}function Gt(e){if(e instanceof IDBRequest)return function(e){const t=new Promise((t,r)=>{const n=()=>{e.removeEventListener("success",i),e.removeEventListener("error",s)},i=()=>{t(Gt(e.result)),n()},s=()=>{r(e.error),n()};e.addEventListener("success",i),e.addEventListener("error",s)});return t.then(t=>{t instanceof IDBCursor&&jt.set(t,e)}).catch(()=>{}),Bt.set(t,e),t}(e);if(zt.has(e))return zt.get(e);const t=qt(e);return t!==e&&(zt.set(e,t),Bt.set(t,e)),t}const Kt=e=>Bt.get(e);const Jt=["get","getKey","getAll","getAllKeys","count"],Xt=["put","add","delete","clear"],Yt=new Map;function Zt(e,t){if(!(e instanceof IDBDatabase)||t in e||"string"!=typeof t)return;if(Yt.get(t))return Yt.get(t);const r=t.replace(/FromIndex$/,""),n=t!==r,i=Xt.includes(r);if(!(r in(n?IDBIndex:IDBObjectStore).prototype)||!i&&!Jt.includes(r))return;const s=async function(e,...t){const s=this.transaction(e,i?"readwrite":"readonly");let o=s.store;return n&&(o=o.index(t.shift())),(await Promise.all([o[r](...t),i&&s.done]))[0]};return Yt.set(t,s),s}Ht=(e=>({...e,get:(t,r,n)=>Zt(t,r)||e.get(t,r,n),has:(t,r)=>!!Zt(t,r)||e.has(t,r)}))(Ht);
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
class Qt{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(e=>{if(function(e){const t=e.getComponent();return"VERSION"===(null==t?void 0:t.type)}(e)){const t=e.getImmediate();return`${t.library}/${t.version}`}return null}).filter(e=>e).join(" ")}}const er="@firebase/app",tr="0.13.2",rr=new $t("@firebase/app"),nr="@firebase/app-compat",ir="@firebase/analytics-compat",sr="@firebase/analytics",or="@firebase/app-check-compat",ar="@firebase/app-check",lr="@firebase/auth",cr="@firebase/auth-compat",hr="@firebase/database",dr="@firebase/data-connect",ur="@firebase/database-compat",pr="@firebase/functions",fr="@firebase/functions-compat",gr="@firebase/installations",mr="@firebase/installations-compat",vr="@firebase/messaging",yr="@firebase/messaging-compat",br="@firebase/performance",_r="@firebase/performance-compat",wr="@firebase/remote-config",Er="@firebase/remote-config-compat",Ir="@firebase/storage",Sr="@firebase/storage-compat",Tr="@firebase/firestore",Cr="@firebase/ai",Ar="@firebase/firestore-compat",kr="firebase",xr="[DEFAULT]",Rr={[er]:"fire-core",[nr]:"fire-core-compat",[sr]:"fire-analytics",[ir]:"fire-analytics-compat",[ar]:"fire-app-check",[or]:"fire-app-check-compat",[lr]:"fire-auth",[cr]:"fire-auth-compat",[hr]:"fire-rtdb",[dr]:"fire-data-connect",[ur]:"fire-rtdb-compat",[pr]:"fire-fn",[fr]:"fire-fn-compat",[gr]:"fire-iid",[mr]:"fire-iid-compat",[vr]:"fire-fcm",[yr]:"fire-fcm-compat",[br]:"fire-perf",[_r]:"fire-perf-compat",[wr]:"fire-rc",[Er]:"fire-rc-compat",[Ir]:"fire-gcs",[Sr]:"fire-gcs-compat",[Tr]:"fire-fst",[Ar]:"fire-fst-compat",[Cr]:"fire-vertex","fire-js":"fire-js",[kr]:"fire-js-all"},Pr=new Map,Or=new Map,Nr=new Map;function Dr(e,t){try{e.container.addComponent(t)}catch(r){rr.debug(`Component ${t.name} failed to register with FirebaseApp ${e.name}`,r)}}function Lr(e){const t=e.name;if(Nr.has(t))return rr.debug(`There were multiple attempts to register component ${t}.`),!1;Nr.set(t,e);for(const t of Pr.values())Dr(t,e);for(const t of Or.values())Dr(t,e);return!0}function $r(e,t){const r=e.container.getProvider("heartbeat").getImmediate({optional:!0});return r&&r.triggerHeartbeat(),e.container.getProvider(t)}function Ur(e){return null!=e&&void 0!==e.settings}
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
 */const Mr=new vt("app","Firebase",{"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."});
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
class jr{constructor(e,t,r){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},t),this._name=t.name,this._automaticDataCollectionEnabled=t.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new At("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw Mr.create("app-deleted",{appName:this._name})}}
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
 */const Fr="11.10.0";function Vr(e,t={}){let r=e;if("object"!=typeof t){t={name:t}}const n=Object.assign({name:xr,automaticDataCollectionEnabled:!0},t),i=n.name;if("string"!=typeof i||!i)throw Mr.create("bad-app-name",{appName:String(i)});if(r||(r=at()),!r)throw Mr.create("no-options");const s=Pr.get(i);if(s){if(bt(r,s.options)&&bt(n,s.config))return s;throw Mr.create("duplicate-app",{appName:i})}const o=new Rt(i);for(const e of Nr.values())o.addComponent(e);const a=new jr(r,n,o);return Pr.set(i,a),a}function zr(e=xr){const t=Pr.get(e);if(!t&&e===xr&&at())return Vr();if(!t)throw Mr.create("no-app",{appName:e});return t}function Br(e,t,r){var n;let i=null!==(n=Rr[e])&&void 0!==n?n:e;r&&(i+=`-${r}`);const s=i.match(/\s|\//),o=t.match(/\s|\//);if(s||o){const e=[`Unable to register library "${i}" with version "${t}":`];return s&&e.push(`library name "${i}" contains illegal characters (whitespace or "/")`),s&&o&&e.push("and"),o&&e.push(`version name "${t}" contains illegal characters (whitespace or "/")`),void rr.warn(e.join(" "))}Lr(new At(`${i}-version`,()=>({library:i,version:t}),"VERSION"))}
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
 */const Hr="firebase-heartbeat-store";let Wr=null;function qr(){return Wr||(Wr=function(e,t,{blocked:r,upgrade:n,blocking:i,terminated:s}={}){const o=indexedDB.open(e,t),a=Gt(o);return n&&o.addEventListener("upgradeneeded",e=>{n(Gt(o.result),e.oldVersion,e.newVersion,Gt(o.transaction),e)}),r&&o.addEventListener("blocked",e=>r(e.oldVersion,e.newVersion,e)),a.then(e=>{s&&e.addEventListener("close",()=>s()),i&&e.addEventListener("versionchange",e=>i(e.oldVersion,e.newVersion,e))}).catch(()=>{}),a}("firebase-heartbeat-database",1,{upgrade:(e,t)=>{if(0===t)try{e.createObjectStore(Hr)}catch(e){console.warn(e)}}}).catch(e=>{throw Mr.create("idb-open",{originalErrorMessage:e.message})})),Wr}async function Gr(e,t){try{const r=(await qr()).transaction(Hr,"readwrite"),n=r.objectStore(Hr);await n.put(t,Kr(e)),await r.done}catch(e){if(e instanceof mt)rr.warn(e.message);else{const t=Mr.create("idb-set",{originalErrorMessage:null==e?void 0:e.message});rr.warn(t.message)}}}function Kr(e){return`${e.name}!${e.options.appId}`}
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
 */class Jr{constructor(e){this.container=e,this._heartbeatsCache=null;const t=this.container.getProvider("app").getImmediate();this._storage=new Yr(t),this._heartbeatsCachePromise=this._storage.read().then(e=>(this._heartbeatsCache=e,e))}async triggerHeartbeat(){var e,t;try{const r=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),n=Xr();if(null==(null===(e=this._heartbeatsCache)||void 0===e?void 0:e.heartbeats)&&(this._heartbeatsCache=await this._heartbeatsCachePromise,null==(null===(t=this._heartbeatsCache)||void 0===t?void 0:t.heartbeats)))return;if(this._heartbeatsCache.lastSentHeartbeatDate===n||this._heartbeatsCache.heartbeats.some(e=>e.date===n))return;if(this._heartbeatsCache.heartbeats.push({date:n,agent:r}),this._heartbeatsCache.heartbeats.length>30){const e=function(e){if(0===e.length)return-1;let t=0,r=e[0].date;for(let n=1;n<e.length;n++)e[n].date<r&&(r=e[n].date,t=n);return t}
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
 */(this._heartbeatsCache.heartbeats);this._heartbeatsCache.heartbeats.splice(e,1)}return this._storage.overwrite(this._heartbeatsCache)}catch(e){rr.warn(e)}}async getHeartbeatsHeader(){var e;try{if(null===this._heartbeatsCache&&await this._heartbeatsCachePromise,null==(null===(e=this._heartbeatsCache)||void 0===e?void 0:e.heartbeats)||0===this._heartbeatsCache.heartbeats.length)return"";const t=Xr(),{heartbeatsToSend:r,unsentEntries:n}=function(e,t=1024){const r=[];let n=e.slice();for(const i of e){const e=r.find(e=>e.agent===i.agent);if(e){if(e.dates.push(i.date),Zr(r)>t){e.dates.pop();break}}else if(r.push({agent:i.agent,dates:[i.date]}),Zr(r)>t){r.pop();break}n=n.slice(1)}return{heartbeatsToSend:r,unsentEntries:n}}(this._heartbeatsCache.heartbeats),i=rt(JSON.stringify({version:2,heartbeats:r}));return this._heartbeatsCache.lastSentHeartbeatDate=t,n.length>0?(this._heartbeatsCache.heartbeats=n,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),i}catch(e){return rr.warn(e),""}}}function Xr(){return(new Date).toISOString().substring(0,10)}class Yr{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return!!function(){try{return"object"==typeof indexedDB}catch(e){return!1}}()&&new Promise((e,t)=>{try{let r=!0;const n="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(n);i.onsuccess=()=>{i.result.close(),r||self.indexedDB.deleteDatabase(n),e(!0)},i.onupgradeneeded=()=>{r=!1},i.onerror=()=>{var e;t((null===(e=i.error)||void 0===e?void 0:e.message)||"")}}catch(e){t(e)}}).then(()=>!0).catch(()=>!1)}async read(){if(await this._canUseIndexedDBPromise){const e=await async function(e){try{const t=(await qr()).transaction(Hr),r=await t.objectStore(Hr).get(Kr(e));return await t.done,r}catch(e){if(e instanceof mt)rr.warn(e.message);else{const t=Mr.create("idb-get",{originalErrorMessage:null==e?void 0:e.message});rr.warn(t.message)}}}(this.app);return(null==e?void 0:e.heartbeats)?e:{heartbeats:[]}}return{heartbeats:[]}}async overwrite(e){var t;if(await this._canUseIndexedDBPromise){const r=await this.read();return Gr(this.app,{lastSentHeartbeatDate:null!==(t=e.lastSentHeartbeatDate)&&void 0!==t?t:r.lastSentHeartbeatDate,heartbeats:e.heartbeats})}}async add(e){var t;if(await this._canUseIndexedDBPromise){const r=await this.read();return Gr(this.app,{lastSentHeartbeatDate:null!==(t=e.lastSentHeartbeatDate)&&void 0!==t?t:r.lastSentHeartbeatDate,heartbeats:[...r.heartbeats,...e.heartbeats]})}}}function Zr(e){return rt(JSON.stringify({version:2,heartbeats:e})).length}var Qr;function en(e,t){var r={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var i=0;for(n=Object.getOwnPropertySymbols(e);i<n.length;i++)t.indexOf(n[i])<0&&Object.prototype.propertyIsEnumerable.call(e,n[i])&&(r[n[i]]=e[n[i]])}return r}function tn(e,t,r,n){var i,s=arguments.length,o=s<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,r):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)o=Reflect.decorate(e,t,r,n);else for(var a=e.length-1;a>=0;a--)(i=e[a])&&(o=(s<3?i(o):s>3?i(t,r,o):i(t,r))||o);return s>3&&o&&Object.defineProperty(t,r,o),o}function rn(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}Qr="",Lr(new At("platform-logger",e=>new Qt(e),"PRIVATE")),Lr(new At("heartbeat",e=>new Jr(e),"PRIVATE")),Br(er,tr,Qr),Br(er,tr,"esm2017"),Br("fire-js",""),"function"==typeof SuppressedError&&SuppressedError;const nn=rn,sn=new vt("auth","Firebase",{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}),on=new $t("@firebase/auth");function an(e,...t){on.logLevel<=Pt.ERROR&&on.error(`Auth (${Fr}): ${e}`,...t)}
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
 */function ln(e,...t){throw un(e,...t)}function cn(e,...t){return un(e,...t)}function hn(e,t,r){const n=Object.assign(Object.assign({},nn()),{[t]:r});return new vt("auth","Firebase",n).create(t,{appName:e.name})}function dn(e){return hn(e,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function un(e,...t){if("string"!=typeof e){const r=t[0],n=[...t.slice(1)];return n[0]&&(n[0].appName=e.name),e._errorFactory.create(r,...n)}return sn.create(e,...t)}function pn(e,t,...r){if(!e)throw un(t,...r)}function fn(e){const t="INTERNAL ASSERTION FAILED: "+e;throw an(t),new Error(t)}function gn(e,t){e||fn(t)}
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
 */function mn(){var e;return"undefined"!=typeof self&&(null===(e=self.location)||void 0===e?void 0:e.href)||""}function vn(){var e;return"undefined"!=typeof self&&(null===(e=self.location)||void 0===e?void 0:e.protocol)||null}
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
 */function yn(){return"undefined"==typeof navigator||!navigator||!("onLine"in navigator)||"boolean"!=typeof navigator.onLine||"http:"!==vn()&&"https:"!==vn()&&!function(){const e="object"==typeof chrome?chrome.runtime:"object"==typeof browser?browser.runtime:void 0;return"object"==typeof e&&void 0!==e.id}()&&!("connection"in navigator)||navigator.onLine}
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
class bn{constructor(e,t){this.shortDelay=e,this.longDelay=t,gn(t>e,"Short delay should be less than long delay!"),this.isMobile="undefined"!=typeof window&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(gt())||"object"==typeof navigator&&"ReactNative"===navigator.product}get(){return yn()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}
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
 */function _n(e,t){gn(e.emulator,"Emulator should always be set here");const{url:r}=e.emulator;return t?`${r}${t.startsWith("/")?t.slice(1):t}`:r}
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
 */class wn{static initialize(e,t,r){this.fetchImpl=e,t&&(this.headersImpl=t),r&&(this.responseImpl=r)}static fetch(){return this.fetchImpl?this.fetchImpl:"undefined"!=typeof self&&"fetch"in self?self.fetch:"undefined"!=typeof globalThis&&globalThis.fetch?globalThis.fetch:"undefined"!=typeof fetch?fetch:void fn("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){return this.headersImpl?this.headersImpl:"undefined"!=typeof self&&"Headers"in self?self.Headers:"undefined"!=typeof globalThis&&globalThis.Headers?globalThis.Headers:"undefined"!=typeof Headers?Headers:void fn("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){return this.responseImpl?this.responseImpl:"undefined"!=typeof self&&"Response"in self?self.Response:"undefined"!=typeof globalThis&&globalThis.Response?globalThis.Response:"undefined"!=typeof Response?Response:void fn("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}
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
 */const En={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"},In=["/v1/accounts:signInWithCustomToken","/v1/accounts:signInWithEmailLink","/v1/accounts:signInWithIdp","/v1/accounts:signInWithPassword","/v1/accounts:signInWithPhoneNumber","/v1/token"],Sn=new bn(3e4,6e4);
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
 */function Tn(e,t){return e.tenantId&&!t.tenantId?Object.assign(Object.assign({},t),{tenantId:e.tenantId}):t}async function Cn(e,t,r,n,i={}){return An(e,i,async()=>{let i={},s={};n&&("GET"===t?s=n:i={body:JSON.stringify(n)});const o=wt(Object.assign({key:e.config.apiKey},s)).slice(1),a=await e._getAdditionalHeaders();a["Content-Type"]="application/json",e.languageCode&&(a["X-Firebase-Locale"]=e.languageCode);const l=Object.assign({method:t,headers:a},i);return"undefined"!=typeof navigator&&"Cloudflare-Workers"===navigator.userAgent||(l.referrerPolicy="no-referrer"),e.emulatorConfig&&ht(e.emulatorConfig.host)&&(l.credentials="include"),wn.fetch()(await xn(e,e.config.apiHost,r,o),l)})}async function An(e,t,r){e._canInitEmulator=!1;const n=Object.assign(Object.assign({},En),t);try{const t=new Pn(e),i=await Promise.race([r(),t.promise]);t.clearNetworkTimeout();const s=await i.json();if("needConfirmation"in s)throw On(e,"account-exists-with-different-credential",s);if(i.ok&&!("errorMessage"in s))return s;{const t=i.ok?s.errorMessage:s.error.message,[r,o]=t.split(" : ");if("FEDERATED_USER_ID_ALREADY_LINKED"===r)throw On(e,"credential-already-in-use",s);if("EMAIL_EXISTS"===r)throw On(e,"email-already-in-use",s);if("USER_DISABLED"===r)throw On(e,"user-disabled",s);const a=n[r]||r.toLowerCase().replace(/[_\s]+/g,"-");if(o)throw hn(e,a,o);ln(e,a)}}catch(t){if(t instanceof mt)throw t;ln(e,"network-request-failed",{message:String(t)})}}async function kn(e,t,r,n,i={}){const s=await Cn(e,t,r,n,i);return"mfaPendingCredential"in s&&ln(e,"multi-factor-auth-required",{_serverResponse:s}),s}async function xn(e,t,r,n){const i=`${t}${r}?${n}`,s=e,o=s.config.emulator?_n(e.config,i):`${e.config.apiScheme}://${i}`;if(In.includes(r)&&(await s._persistenceManagerAvailable,"COOKIE"===s._getPersistenceType())){return s._getPersistence()._getFinalTarget(o).toString()}return o}function Rn(e){switch(e){case"ENFORCE":return"ENFORCE";case"AUDIT":return"AUDIT";case"OFF":return"OFF";default:return"ENFORCEMENT_STATE_UNSPECIFIED"}}class Pn{clearNetworkTimeout(){clearTimeout(this.timer)}constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((e,t)=>{this.timer=setTimeout(()=>t(cn(this.auth,"network-request-failed")),Sn.get())})}}function On(e,t,r){const n={appName:e.name};r.email&&(n.email=r.email),r.phoneNumber&&(n.phoneNumber=r.phoneNumber);const i=cn(e,t,n);return i.customData._tokenResponse=r,i}function Nn(e){return void 0!==e&&void 0!==e.enterprise}class Dn{constructor(e){if(this.siteKey="",this.recaptchaEnforcementState=[],void 0===e.recaptchaKey)throw new Error("recaptchaKey undefined");this.siteKey=e.recaptchaKey.split("/")[3],this.recaptchaEnforcementState=e.recaptchaEnforcementState}getProviderEnforcementState(e){if(!this.recaptchaEnforcementState||0===this.recaptchaEnforcementState.length)return null;for(const t of this.recaptchaEnforcementState)if(t.provider&&t.provider===e)return Rn(t.enforcementState);return null}isProviderEnabled(e){return"ENFORCE"===this.getProviderEnforcementState(e)||"AUDIT"===this.getProviderEnforcementState(e)}isAnyProviderEnabled(){return this.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")||this.isProviderEnabled("PHONE_PROVIDER")}}async function Ln(e,t){return Cn(e,"POST","/v1/accounts:lookup",t)}
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
 */function $n(e){if(e)try{const t=new Date(Number(e));if(!isNaN(t.getTime()))return t.toUTCString()}catch(e){}}function Un(e){return 1e3*Number(e)}function Mn(e){const[t,r,n]=e.split(".");if(void 0===t||void 0===r||void 0===n)return an("JWT malformed, contained fewer than 3 sections"),null;try{const e=nt(r);return e?JSON.parse(e):(an("Failed to decode base64 JWT payload"),null)}catch(e){return an("Caught error parsing JWT payload as JSON",null==e?void 0:e.toString()),null}}function jn(e){const t=Mn(e);return pn(t,"internal-error"),pn(void 0!==t.exp,"internal-error"),pn(void 0!==t.iat,"internal-error"),Number(t.exp)-Number(t.iat)}
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
 */async function Fn(e,t,r=!1){if(r)return t;try{return await t}catch(t){throw t instanceof mt&&function({code:e}){return"auth/user-disabled"===e||"auth/user-token-expired"===e}
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
 */(t)&&e.auth.currentUser===e&&await e.auth.signOut(),t}}class Vn{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,null!==this.timerId&&clearTimeout(this.timerId))}getInterval(e){var t;if(e){const e=this.errorBackoff;return this.errorBackoff=Math.min(2*this.errorBackoff,96e4),e}{this.errorBackoff=3e4;const e=(null!==(t=this.user.stsTokenManager.expirationTime)&&void 0!==t?t:0)-Date.now()-3e5;return Math.max(0,e)}}schedule(e=!1){if(!this.isRunning)return;const t=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},t)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){return void("auth/network-request-failed"===(null==e?void 0:e.code)&&this.schedule(!0))}this.schedule()}}
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
 */class zn{constructor(e,t){this.createdAt=e,this.lastLoginAt=t,this._initializeTime()}_initializeTime(){this.lastSignInTime=$n(this.lastLoginAt),this.creationTime=$n(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}
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
 */async function Bn(e){var t;const r=e.auth,n=await e.getIdToken(),i=await Fn(e,Ln(r,{idToken:n}));pn(null==i?void 0:i.users.length,r,"internal-error");const s=i.users[0];e._notifyReloadListener(s);const o=(null===(t=s.providerUserInfo)||void 0===t?void 0:t.length)?Hn(s.providerUserInfo):[],a=function(e,t){const r=e.filter(e=>!t.some(t=>t.providerId===e.providerId));return[...r,...t]}(e.providerData,o),l=e.isAnonymous,c=!(e.email&&s.passwordHash||(null==a?void 0:a.length)),h=!!l&&c,d={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:a,metadata:new zn(s.createdAt,s.lastLoginAt),isAnonymous:h};Object.assign(e,d)}function Hn(e){return e.map(e=>{var{providerId:t}=e,r=en(e,["providerId"]);return{providerId:t,uid:r.rawId||"",displayName:r.displayName||null,email:r.email||null,phoneNumber:r.phoneNumber||null,photoURL:r.photoUrl||null}})}
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
class Wn{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){pn(e.idToken,"internal-error"),pn(void 0!==e.idToken,"internal-error"),pn(void 0!==e.refreshToken,"internal-error");const t="expiresIn"in e&&void 0!==e.expiresIn?Number(e.expiresIn):jn(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,t)}updateFromIdToken(e){pn(0!==e.length,"internal-error");const t=jn(e);this.updateTokensAndExpiration(e,null,t)}async getToken(e,t=!1){return t||!this.accessToken||this.isExpired?(pn(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null):this.accessToken}clearRefreshToken(){this.refreshToken=null}async refresh(e,t){const{accessToken:r,refreshToken:n,expiresIn:i}=await async function(e,t){const r=await An(e,{},async()=>{const r=wt({grant_type:"refresh_token",refresh_token:t}).slice(1),{tokenApiHost:n,apiKey:i}=e.config,s=await xn(e,n,"/v1/token",`key=${i}`),o=await e._getAdditionalHeaders();o["Content-Type"]="application/x-www-form-urlencoded";const a={method:"POST",headers:o,body:r};return e.emulatorConfig&&ht(e.emulatorConfig.host)&&(a.credentials="include"),wn.fetch()(s,a)});return{accessToken:r.access_token,expiresIn:r.expires_in,refreshToken:r.refresh_token}}(e,t);this.updateTokensAndExpiration(r,n,Number(i))}updateTokensAndExpiration(e,t,r){this.refreshToken=t||null,this.accessToken=e||null,this.expirationTime=Date.now()+1e3*r}static fromJSON(e,t){const{refreshToken:r,accessToken:n,expirationTime:i}=t,s=new Wn;return r&&(pn("string"==typeof r,"internal-error",{appName:e}),s.refreshToken=r),n&&(pn("string"==typeof n,"internal-error",{appName:e}),s.accessToken=n),i&&(pn("number"==typeof i,"internal-error",{appName:e}),s.expirationTime=i),s}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new Wn,this.toJSON())}_performRefresh(){return fn("not implemented")}}
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
 */function qn(e,t){pn("string"==typeof e||void 0===e,"internal-error",{appName:t})}class Gn{constructor(e){var{uid:t,auth:r,stsTokenManager:n}=e,i=en(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new Vn(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=t,this.auth=r,this.stsTokenManager=n,this.accessToken=n.accessToken,this.displayName=i.displayName||null,this.email=i.email||null,this.emailVerified=i.emailVerified||!1,this.phoneNumber=i.phoneNumber||null,this.photoURL=i.photoURL||null,this.isAnonymous=i.isAnonymous||!1,this.tenantId=i.tenantId||null,this.providerData=i.providerData?[...i.providerData]:[],this.metadata=new zn(i.createdAt||void 0,i.lastLoginAt||void 0)}async getIdToken(e){const t=await Fn(this,this.stsTokenManager.getToken(this.auth,e));return pn(t,this.auth,"internal-error"),this.accessToken!==t&&(this.accessToken=t,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),t}getIdTokenResult(e){return async function(e,t=!1){const r=Ct(e),n=await r.getIdToken(t),i=Mn(n);pn(i&&i.exp&&i.auth_time&&i.iat,r.auth,"internal-error");const s="object"==typeof i.firebase?i.firebase:void 0,o=null==s?void 0:s.sign_in_provider;return{claims:i,token:n,authTime:$n(Un(i.auth_time)),issuedAtTime:$n(Un(i.iat)),expirationTime:$n(Un(i.exp)),signInProvider:o||null,signInSecondFactor:(null==s?void 0:s.sign_in_second_factor)||null}}(this,e)}reload(){return async function(e){const t=Ct(e);await Bn(t),await t.auth._persistUserIfCurrent(t),t.auth._notifyListenersIfCurrent(t)}(this)}_assign(e){this!==e&&(pn(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(e=>Object.assign({},e)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const t=new Gn(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return t.metadata._copy(this.metadata),t}_onReload(e){pn(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,t=!1){let r=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),r=!0),t&&await Bn(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(Ur(this.auth.app))return Promise.reject(dn(this.auth));const e=await this.getIdToken();return await Fn(this,
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
async function(e,t){return Cn(e,"POST","/v1/accounts:delete",t)}(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,t){var r,n,i,s,o,a,l,c;const h=null!==(r=t.displayName)&&void 0!==r?r:void 0,d=null!==(n=t.email)&&void 0!==n?n:void 0,u=null!==(i=t.phoneNumber)&&void 0!==i?i:void 0,p=null!==(s=t.photoURL)&&void 0!==s?s:void 0,f=null!==(o=t.tenantId)&&void 0!==o?o:void 0,g=null!==(a=t._redirectEventId)&&void 0!==a?a:void 0,m=null!==(l=t.createdAt)&&void 0!==l?l:void 0,v=null!==(c=t.lastLoginAt)&&void 0!==c?c:void 0,{uid:y,emailVerified:b,isAnonymous:_,providerData:w,stsTokenManager:E}=t;pn(y&&E,e,"internal-error");const I=Wn.fromJSON(this.name,E);pn("string"==typeof y,e,"internal-error"),qn(h,e.name),qn(d,e.name),pn("boolean"==typeof b,e,"internal-error"),pn("boolean"==typeof _,e,"internal-error"),qn(u,e.name),qn(p,e.name),qn(f,e.name),qn(g,e.name),qn(m,e.name),qn(v,e.name);const S=new Gn({uid:y,auth:e,email:d,emailVerified:b,displayName:h,isAnonymous:_,photoURL:p,phoneNumber:u,tenantId:f,stsTokenManager:I,createdAt:m,lastLoginAt:v});return w&&Array.isArray(w)&&(S.providerData=w.map(e=>Object.assign({},e))),g&&(S._redirectEventId=g),S}static async _fromIdTokenResponse(e,t,r=!1){const n=new Wn;n.updateFromServerResponse(t);const i=new Gn({uid:t.localId,auth:e,stsTokenManager:n,isAnonymous:r});return await Bn(i),i}static async _fromGetAccountInfoResponse(e,t,r){const n=t.users[0];pn(void 0!==n.localId,"internal-error");const i=void 0!==n.providerUserInfo?Hn(n.providerUserInfo):[],s=!(n.email&&n.passwordHash||(null==i?void 0:i.length)),o=new Wn;o.updateFromIdToken(r);const a=new Gn({uid:n.localId,auth:e,stsTokenManager:o,isAnonymous:s}),l={uid:n.localId,displayName:n.displayName||null,photoURL:n.photoUrl||null,email:n.email||null,emailVerified:n.emailVerified||!1,phoneNumber:n.phoneNumber||null,tenantId:n.tenantId||null,providerData:i,metadata:new zn(n.createdAt,n.lastLoginAt),isAnonymous:!(n.email&&n.passwordHash||(null==i?void 0:i.length))};return Object.assign(a,l),a}}
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
 */const Kn=new Map;function Jn(e){gn(e instanceof Function,"Expected a class definition");let t=Kn.get(e);return t?(gn(t instanceof e,"Instance stored in cache mismatched with class"),t):(t=new e,Kn.set(e,t),t)}
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
 */class Xn{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,t){this.storage[e]=t}async _get(e){const t=this.storage[e];return void 0===t?null:t}async _remove(e){delete this.storage[e]}_addListener(e,t){}_removeListener(e,t){}}Xn.type="NONE";const Yn=Xn;
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
 */function Zn(e,t,r){return`firebase:${e}:${t}:${r}`}class Qn{constructor(e,t,r){this.persistence=e,this.auth=t,this.userKey=r;const{config:n,name:i}=this.auth;this.fullUserKey=Zn(this.userKey,n.apiKey,i),this.fullPersistenceKey=Zn("persistence",n.apiKey,i),this.boundEventHandler=t._onStorageEvent.bind(t),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);if(!e)return null;if("string"==typeof e){const t=await Ln(this.auth,{idToken:e}).catch(()=>{});return t?Gn._fromGetAccountInfoResponse(this.auth,t,e):null}return Gn._fromJSON(this.auth,e)}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const t=await this.getCurrentUser();return await this.removeCurrentUser(),this.persistence=e,t?this.setCurrentUser(t):void 0}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,t,r="authUser"){if(!t.length)return new Qn(Jn(Yn),e,r);const n=(await Promise.all(t.map(async e=>{if(await e._isAvailable())return e}))).filter(e=>e);let i=n[0]||Jn(Yn);const s=Zn(r,e.config.apiKey,e.name);let o=null;for(const r of t)try{const t=await r._get(s);if(t){let n;if("string"==typeof t){const r=await Ln(e,{idToken:t}).catch(()=>{});if(!r)break;n=await Gn._fromGetAccountInfoResponse(e,r,t)}else n=Gn._fromJSON(e,t);r!==i&&(o=n),i=r;break}}catch(e){}const a=n.filter(e=>e._shouldAllowMigration);return i._shouldAllowMigration&&a.length?(i=a[0],o&&await i._set(s,o.toJSON()),await Promise.all(t.map(async e=>{if(e!==i)try{await e._remove(s)}catch(e){}})),new Qn(i,e,r)):new Qn(i,e,r)}}
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
 */function ei(e){const t=e.toLowerCase();if(t.includes("opera/")||t.includes("opr/")||t.includes("opios/"))return"Opera";if(ii(t))return"IEMobile";if(t.includes("msie")||t.includes("trident/"))return"IE";if(t.includes("edge/"))return"Edge";if(ti(t))return"Firefox";if(t.includes("silk/"))return"Silk";if(oi(t))return"Blackberry";if(ai(t))return"Webos";if(ri(t))return"Safari";if((t.includes("chrome/")||ni(t))&&!t.includes("edge/"))return"Chrome";if(si(t))return"Android";{const t=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=e.match(t);if(2===(null==r?void 0:r.length))return r[1]}return"Other"}function ti(e=gt()){return/firefox\//i.test(e)}function ri(e=gt()){const t=e.toLowerCase();return t.includes("safari/")&&!t.includes("chrome/")&&!t.includes("crios/")&&!t.includes("android")}function ni(e=gt()){return/crios\//i.test(e)}function ii(e=gt()){return/iemobile/i.test(e)}function si(e=gt()){return/android/i.test(e)}function oi(e=gt()){return/blackberry/i.test(e)}function ai(e=gt()){return/webos/i.test(e)}function li(e=gt()){return/iphone|ipad|ipod/i.test(e)||/macintosh/i.test(e)&&/mobile/i.test(e)}function ci(){return function(){const e=gt();return e.indexOf("MSIE ")>=0||e.indexOf("Trident/")>=0}()&&10===document.documentMode}function hi(e=gt()){return li(e)||si(e)||ai(e)||oi(e)||/windows phone/i.test(e)||ii(e)}
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
 */function di(e,t=[]){let r;switch(e){case"Browser":r=ei(gt());break;case"Worker":r=`${ei(gt())}-${e}`;break;default:r=e}const n=t.length?t.join(","):"FirebaseCore-web";return`${r}/JsCore/${Fr}/${n}`}
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
 */class ui{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,t){const r=t=>new Promise((r,n)=>{try{r(e(t))}catch(e){n(e)}});r.onAbort=t,this.queue.push(r);const n=this.queue.length-1;return()=>{this.queue[n]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const t=[];try{for(const r of this.queue)await r(e),r.onAbort&&t.push(r.onAbort)}catch(e){t.reverse();for(const e of t)try{e()}catch(e){}throw this.auth._errorFactory.create("login-blocked",{originalMessage:null==e?void 0:e.message})}}}
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
 */class pi{constructor(e){var t,r,n,i;const s=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=null!==(t=s.minPasswordLength)&&void 0!==t?t:6,s.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=s.maxPasswordLength),void 0!==s.containsLowercaseCharacter&&(this.customStrengthOptions.containsLowercaseLetter=s.containsLowercaseCharacter),void 0!==s.containsUppercaseCharacter&&(this.customStrengthOptions.containsUppercaseLetter=s.containsUppercaseCharacter),void 0!==s.containsNumericCharacter&&(this.customStrengthOptions.containsNumericCharacter=s.containsNumericCharacter),void 0!==s.containsNonAlphanumericCharacter&&(this.customStrengthOptions.containsNonAlphanumericCharacter=s.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,"ENFORCEMENT_STATE_UNSPECIFIED"===this.enforcementState&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=null!==(n=null===(r=e.allowedNonAlphanumericCharacters)||void 0===r?void 0:r.join(""))&&void 0!==n?n:"",this.forceUpgradeOnSignin=null!==(i=e.forceUpgradeOnSignin)&&void 0!==i&&i,this.schemaVersion=e.schemaVersion}validatePassword(e){var t,r,n,i,s,o;const a={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,a),this.validatePasswordCharacterOptions(e,a),a.isValid&&(a.isValid=null===(t=a.meetsMinPasswordLength)||void 0===t||t),a.isValid&&(a.isValid=null===(r=a.meetsMaxPasswordLength)||void 0===r||r),a.isValid&&(a.isValid=null===(n=a.containsLowercaseLetter)||void 0===n||n),a.isValid&&(a.isValid=null===(i=a.containsUppercaseLetter)||void 0===i||i),a.isValid&&(a.isValid=null===(s=a.containsNumericCharacter)||void 0===s||s),a.isValid&&(a.isValid=null===(o=a.containsNonAlphanumericCharacter)||void 0===o||o),a}validatePasswordLengthOptions(e,t){const r=this.customStrengthOptions.minPasswordLength,n=this.customStrengthOptions.maxPasswordLength;r&&(t.meetsMinPasswordLength=e.length>=r),n&&(t.meetsMaxPasswordLength=e.length<=n)}validatePasswordCharacterOptions(e,t){let r;this.updatePasswordCharacterOptionsStatuses(t,!1,!1,!1,!1);for(let n=0;n<e.length;n++)r=e.charAt(n),this.updatePasswordCharacterOptionsStatuses(t,r>="a"&&r<="z",r>="A"&&r<="Z",r>="0"&&r<="9",this.allowedNonAlphanumericCharacters.includes(r))}updatePasswordCharacterOptionsStatuses(e,t,r,n,i){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=t)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=r)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=n)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=i))}}
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
 */class fi{constructor(e,t,r,n){this.app=e,this.heartbeatServiceProvider=t,this.appCheckServiceProvider=r,this.config=n,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new mi(this),this.idTokenSubscription=new mi(this),this.beforeStateQueue=new ui(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=sn,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this._resolvePersistenceManagerAvailable=void 0,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=n.sdkClientVersion,this._persistenceManagerAvailable=new Promise(e=>this._resolvePersistenceManagerAvailable=e)}_initializeWithPersistence(e,t){return t&&(this._popupRedirectResolver=Jn(t)),this._initializationPromise=this.queue(async()=>{var r,n,i;if(!this._deleted&&(this.persistenceManager=await Qn.create(this,e),null===(r=this._resolvePersistenceManagerAvailable)||void 0===r||r.call(this),!this._deleted)){if(null===(n=this._popupRedirectResolver)||void 0===n?void 0:n._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch(e){}await this.initializeCurrentUser(t),this.lastNotifiedUid=(null===(i=this.currentUser)||void 0===i?void 0:i.uid)||null,this._deleted||(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();return this.currentUser||e?this.currentUser&&e&&this.currentUser.uid===e.uid?(this._currentUser._assign(e),void await this.currentUser.getIdToken()):void await this._updateCurrentUser(e,!0):void 0}async initializeCurrentUserFromIdToken(e){try{const t=await Ln(this,{idToken:e}),r=await Gn._fromGetAccountInfoResponse(this,t,e);await this.directlySetCurrentUser(r)}catch(e){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",e),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){var t;if(Ur(this.app)){const e=this.app.settings.authIdToken;return e?new Promise(t=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(e).then(t,t))}):this.directlySetCurrentUser(null)}const r=await this.assertedPersistence.getCurrentUser();let n=r,i=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const r=null===(t=this.redirectUser)||void 0===t?void 0:t._redirectEventId,s=null==n?void 0:n._redirectEventId,o=await this.tryRedirectSignIn(e);r&&r!==s||!(null==o?void 0:o.user)||(n=o.user,i=!0)}if(!n)return this.directlySetCurrentUser(null);if(!n._redirectEventId){if(i)try{await this.beforeStateQueue.runMiddleware(n)}catch(e){n=r,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(e))}return n?this.reloadAndSetCurrentUserOrClear(n):this.directlySetCurrentUser(null)}return pn(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===n._redirectEventId?this.directlySetCurrentUser(n):this.reloadAndSetCurrentUserOrClear(n)}async tryRedirectSignIn(e){let t=null;try{t=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch(e){await this._setRedirectUser(null)}return t}async reloadAndSetCurrentUserOrClear(e){try{await Bn(e)}catch(e){if("auth/network-request-failed"!==(null==e?void 0:e.code))return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=function(){if("undefined"==typeof navigator)return null;const e=navigator;return e.languages&&e.languages[0]||e.language||null}()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(Ur(this.app))return Promise.reject(dn(this));const t=e?Ct(e):null;return t&&pn(t.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(t&&t._clone(this))}async _updateCurrentUser(e,t=!1){if(!this._deleted)return e&&pn(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),t||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return Ur(this.app)?Promise.reject(dn(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return Ur(this.app)?Promise.reject(dn(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(Jn(e))})}_getRecaptchaConfig(){return null==this.tenantId?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const t=this._getPasswordPolicyInternal();return t.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):t.validatePassword(e)}_getPasswordPolicyInternal(){return null===this.tenantId?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await async function(e,t={}){return Cn(e,"GET","/v2/passwordPolicy",Tn(e,t))}
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
 */(this),t=new pi(e);null===this.tenantId?this._projectPasswordPolicy=t:this._tenantPasswordPolicies[this.tenantId]=t}_getPersistenceType(){return this.assertedPersistence.persistence.type}_getPersistence(){return this.assertedPersistence.persistence}_updateErrorMap(e){this._errorFactory=new vt("auth","Firebase",e())}onAuthStateChanged(e,t,r){return this.registerStateListener(this.authStateSubscription,e,t,r)}beforeAuthStateChanged(e,t){return this.beforeStateQueue.pushCallback(e,t)}onIdTokenChanged(e,t,r){return this.registerStateListener(this.idTokenSubscription,e,t,r)}authStateReady(){return new Promise((e,t)=>{if(this.currentUser)e();else{const r=this.onAuthStateChanged(()=>{r(),e()},t)}})}async revokeAccessToken(e){if(this.currentUser){const t={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:await this.currentUser.getIdToken()};null!=this.tenantId&&(t.tenantId=this.tenantId),await async function(e,t){return Cn(e,"POST","/v2/accounts:revokeToken",Tn(e,t))}(this,t)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:null===(e=this._currentUser)||void 0===e?void 0:e.toJSON()}}async _setRedirectUser(e,t){const r=await this.getOrInitRedirectPersistenceManager(t);return null===e?r.removeCurrentUser():r.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const t=e&&Jn(e)||this._popupRedirectResolver;pn(t,this,"argument-error"),this.redirectPersistenceManager=await Qn.create(this,[Jn(t._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var t,r;return this._isInitialized&&await this.queue(async()=>{}),(null===(t=this._currentUser)||void 0===t?void 0:t._redirectEventId)===e?this._currentUser:(null===(r=this.redirectUser)||void 0===r?void 0:r._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,t;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const r=null!==(t=null===(e=this.currentUser)||void 0===e?void 0:e.uid)&&void 0!==t?t:null;this.lastNotifiedUid!==r&&(this.lastNotifiedUid=r,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,t,r,n){if(this._deleted)return()=>{};const i="function"==typeof t?t:t.next.bind(t);let s=!1;const o=this._isInitialized?Promise.resolve():this._initializationPromise;if(pn(o,this,"internal-error"),o.then(()=>{s||i(this.currentUser)}),"function"==typeof t){const i=e.addObserver(t,r,n);return()=>{s=!0,i()}}{const r=e.addObserver(t);return()=>{s=!0,r()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return pn(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){e&&!this.frameworks.includes(e)&&(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=di(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const t={"X-Client-Version":this.clientVersion};this.app.options.appId&&(t["X-Firebase-gmpid"]=this.app.options.appId);const r=await(null===(e=this.heartbeatServiceProvider.getImmediate({optional:!0}))||void 0===e?void 0:e.getHeartbeatsHeader());r&&(t["X-Firebase-Client"]=r);const n=await this._getAppCheckToken();return n&&(t["X-Firebase-AppCheck"]=n),t}async _getAppCheckToken(){var e;if(Ur(this.app)&&this.app.settings.appCheckToken)return this.app.settings.appCheckToken;const t=await(null===(e=this.appCheckServiceProvider.getImmediate({optional:!0}))||void 0===e?void 0:e.getToken());return(null==t?void 0:t.error)&&function(e,...t){on.logLevel<=Pt.WARN&&on.warn(`Auth (${Fr}): ${e}`,...t)}(`Error while retrieving App Check token: ${t.error}`),null==t?void 0:t.token}}function gi(e){return Ct(e)}class mi{constructor(e){this.auth=e,this.observer=null,this.addObserver=function(e,t){const r=new St(e,t);return r.subscribe.bind(r)}(e=>this.observer=e)}get next(){return pn(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}
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
 */let vi={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function yi(e){return vi.loadJS(e)}class bi{constructor(){this.enterprise=new _i}ready(e){e()}execute(e,t){return Promise.resolve("token")}render(e,t){return""}}class _i{ready(e){e()}execute(e,t){return Promise.resolve("token")}render(e,t){return""}}const wi="NO_RECAPTCHA";class Ei{constructor(e){this.type="recaptcha-enterprise",this.auth=gi(e)}async verify(e="verify",t=!1){async function r(e){if(!t){if(null==e.tenantId&&null!=e._agentRecaptchaConfig)return e._agentRecaptchaConfig.siteKey;if(null!=e.tenantId&&void 0!==e._tenantRecaptchaConfigs[e.tenantId])return e._tenantRecaptchaConfigs[e.tenantId].siteKey}return new Promise(async(t,r)=>{(async function(e,t){return Cn(e,"GET","/v2/recaptchaConfig",Tn(e,t))})(e,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(n=>{if(void 0!==n.recaptchaKey){const r=new Dn(n);return null==e.tenantId?e._agentRecaptchaConfig=r:e._tenantRecaptchaConfigs[e.tenantId]=r,t(r.siteKey)}r(new Error("recaptcha Enterprise site key undefined"))}).catch(e=>{r(e)})})}function n(t,r,n){const i=window.grecaptcha;Nn(i)?i.enterprise.ready(()=>{i.enterprise.execute(t,{action:e}).then(e=>{r(e)}).catch(()=>{r(wi)})}):n(Error("No reCAPTCHA enterprise script loaded."))}if(this.auth.settings.appVerificationDisabledForTesting){return(new bi).execute("siteKey",{action:"verify"})}return new Promise((e,i)=>{r(this.auth).then(r=>{if(!t&&Nn(window.grecaptcha))n(r,e,i);else{if("undefined"==typeof window)return void i(new Error("RecaptchaVerifier is only supported in browser"));let t=vi.recaptchaEnterpriseScript;0!==t.length&&(t+=r),yi(t).then(()=>{n(r,e,i)}).catch(e=>{i(e)})}}).catch(e=>{i(e)})})}}async function Ii(e,t,r,n=!1,i=!1){const s=new Ei(e);let o;if(i)o=wi;else try{o=await s.verify(r)}catch(e){o=await s.verify(r,!0)}const a=Object.assign({},t);if("mfaSmsEnrollment"===r||"mfaSmsSignIn"===r){if("phoneEnrollmentInfo"in a){const e=a.phoneEnrollmentInfo.phoneNumber,t=a.phoneEnrollmentInfo.recaptchaToken;Object.assign(a,{phoneEnrollmentInfo:{phoneNumber:e,recaptchaToken:t,captchaResponse:o,clientType:"CLIENT_TYPE_WEB",recaptchaVersion:"RECAPTCHA_ENTERPRISE"}})}else if("phoneSignInInfo"in a){const e=a.phoneSignInInfo.recaptchaToken;Object.assign(a,{phoneSignInInfo:{recaptchaToken:e,captchaResponse:o,clientType:"CLIENT_TYPE_WEB",recaptchaVersion:"RECAPTCHA_ENTERPRISE"}})}return a}return n?Object.assign(a,{captchaResp:o}):Object.assign(a,{captchaResponse:o}),Object.assign(a,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(a,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),a}async function Si(e,t,r,n,i){var s;if(null===(s=e._getRecaptchaConfig())||void 0===s?void 0:s.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")){const i=await Ii(e,t,r,"getOobCode"===r);return n(e,i)}return n(e,t).catch(async i=>{if("auth/missing-recaptcha-token"===i.code){console.log(`${r} is protected by reCAPTCHA Enterprise for this project. Automatically triggering the reCAPTCHA flow and restarting the flow.`);const i=await Ii(e,t,r,"getOobCode"===r);return n(e,i)}return Promise.reject(i)})}
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
 */function Ti(e,t,r){const n=gi(e);pn(/^https?:\/\//.test(t),n,"invalid-emulator-scheme");const i=!!(null==r?void 0:r.disableWarnings),s=Ci(t),{host:o,port:a}=function(e){const t=Ci(e),r=/(\/\/)?([^?#/]+)/.exec(e.substr(t.length));if(!r)return{host:"",port:null};const n=r[2].split("@").pop()||"",i=/^(\[[^\]]+\])(:|$)/.exec(n);if(i){const e=i[1];return{host:e,port:Ai(n.substr(e.length+1))}}{const[e,t]=n.split(":");return{host:e,port:Ai(t)}}}(t),l=null===a?"":`:${a}`,c={url:`${s}//${o}${l}/`},h=Object.freeze({host:o,port:a,protocol:s.replace(":",""),options:Object.freeze({disableWarnings:i})});if(!n._canInitEmulator)return pn(n.config.emulator&&n.emulatorConfig,n,"emulator-config-failed"),void pn(bt(c,n.config.emulator)&&bt(h,n.emulatorConfig),n,"emulator-config-failed");n.config.emulator=c,n.emulatorConfig=h,n.settings.appVerificationDisabledForTesting=!0,ht(o)?(dt(`${s}//${o}${l}`),ft("Auth",!0)):i||function(){function e(){const e=document.createElement("p"),t=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",t.position="fixed",t.width="100%",t.backgroundColor="#ffffff",t.border=".1em solid #000000",t.color="#b50000",t.bottom="0px",t.left="0px",t.margin="0px",t.zIndex="10000",t.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}"undefined"!=typeof console&&"function"==typeof console.info&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials.");"undefined"!=typeof window&&"undefined"!=typeof document&&("loading"===document.readyState?window.addEventListener("DOMContentLoaded",e):e())}
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
 */()}function Ci(e){const t=e.indexOf(":");return t<0?"":e.substr(0,t+1)}function Ai(e){if(!e)return null;const t=Number(e);return isNaN(t)?null:t}class ki{constructor(e,t){this.providerId=e,this.signInMethod=t}toJSON(){return fn("not implemented")}_getIdTokenResponse(e){return fn("not implemented")}_linkToIdToken(e,t){return fn("not implemented")}_getReauthenticationResolver(e){return fn("not implemented")}}async function xi(e,t){return Cn(e,"POST","/v1/accounts:signUp",t)}
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
 */async function Ri(e,t){return kn(e,"POST","/v1/accounts:signInWithPassword",Tn(e,t))}async function Pi(e,t){return async function(e,t){return Cn(e,"POST","/v1/accounts:sendOobCode",Tn(e,t))}(e,t)}
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
class Oi extends ki{constructor(e,t,r,n=null){super("password",r),this._email=e,this._password=t,this._tenantId=n}static _fromEmailAndPassword(e,t){return new Oi(e,t,"password")}static _fromEmailAndCode(e,t,r=null){return new Oi(e,t,"emailLink",r)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const t="string"==typeof e?JSON.parse(e):e;if((null==t?void 0:t.email)&&(null==t?void 0:t.password)){if("password"===t.signInMethod)return this._fromEmailAndPassword(t.email,t.password);if("emailLink"===t.signInMethod)return this._fromEmailAndCode(t.email,t.password,t.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":return Si(e,{returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"},"signInWithPassword",Ri);case"emailLink":return async function(e,t){return kn(e,"POST","/v1/accounts:signInWithEmailLink",Tn(e,t))}(e,{email:this._email,oobCode:this._password});default:ln(e,"internal-error")}}async _linkToIdToken(e,t){switch(this.signInMethod){case"password":return Si(e,{idToken:t,returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"},"signUpPassword",xi);case"emailLink":return async function(e,t){return kn(e,"POST","/v1/accounts:signInWithEmailLink",Tn(e,t))}(e,{idToken:t,email:this._email,oobCode:this._password});default:ln(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}
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
 */async function Ni(e,t){return kn(e,"POST","/v1/accounts:signInWithIdp",Tn(e,t))}
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
 */class Di extends ki{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const t=new Di(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(t.idToken=e.idToken),e.accessToken&&(t.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(t.nonce=e.nonce),e.pendingToken&&(t.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(t.accessToken=e.oauthToken,t.secret=e.oauthTokenSecret):ln("argument-error"),t}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const t="string"==typeof e?JSON.parse(e):e,{providerId:r,signInMethod:n}=t,i=en(t,["providerId","signInMethod"]);if(!r||!n)return null;const s=new Di(r,n);return s.idToken=i.idToken||void 0,s.accessToken=i.accessToken||void 0,s.secret=i.secret,s.nonce=i.nonce,s.pendingToken=i.pendingToken||null,s}_getIdTokenResponse(e){return Ni(e,this.buildRequest())}_linkToIdToken(e,t){const r=this.buildRequest();return r.idToken=t,Ni(e,r)}_getReauthenticationResolver(e){const t=this.buildRequest();return t.autoCreate=!1,Ni(e,t)}buildRequest(){const e={requestUri:"http://localhost",returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const t={};this.idToken&&(t.id_token=this.idToken),this.accessToken&&(t.access_token=this.accessToken),this.secret&&(t.oauth_token_secret=this.secret),t.providerId=this.providerId,this.nonce&&!this.pendingToken&&(t.nonce=this.nonce),e.postBody=wt(t)}return e}}
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
 */class Li{constructor(e){var t,r,n,i,s,o;const a=Et(It(e)),l=null!==(t=a.apiKey)&&void 0!==t?t:null,c=null!==(r=a.oobCode)&&void 0!==r?r:null,h=function(e){switch(e){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}(null!==(n=a.mode)&&void 0!==n?n:null);pn(l&&c&&h,"argument-error"),this.apiKey=l,this.operation=h,this.code=c,this.continueUrl=null!==(i=a.continueUrl)&&void 0!==i?i:null,this.languageCode=null!==(s=a.lang)&&void 0!==s?s:null,this.tenantId=null!==(o=a.tenantId)&&void 0!==o?o:null}static parseLink(e){const t=function(e){const t=Et(It(e)).link,r=t?Et(It(t)).deep_link_id:null,n=Et(It(e)).deep_link_id;return(n?Et(It(n)).link:null)||n||r||t||e}(e);try{return new Li(t)}catch(e){return null}}}
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
 */class $i{constructor(){this.providerId=$i.PROVIDER_ID}static credential(e,t){return Oi._fromEmailAndPassword(e,t)}static credentialWithLink(e,t){const r=Li.parseLink(t);return pn(r,"argument-error"),Oi._fromEmailAndCode(e,r.code,r.tenantId)}}$i.PROVIDER_ID="password",$i.EMAIL_PASSWORD_SIGN_IN_METHOD="password",$i.EMAIL_LINK_SIGN_IN_METHOD="emailLink";
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
class Ui{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}
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
 */class Mi extends Ui{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}
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
 */class ji extends Mi{constructor(){super("facebook.com")}static credential(e){return Di._fromParams({providerId:ji.PROVIDER_ID,signInMethod:ji.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return ji.credentialFromTaggedObject(e)}static credentialFromError(e){return ji.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e))return null;if(!e.oauthAccessToken)return null;try{return ji.credential(e.oauthAccessToken)}catch(e){return null}}}ji.FACEBOOK_SIGN_IN_METHOD="facebook.com",ji.PROVIDER_ID="facebook.com";
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
class Fi extends Mi{constructor(){super("google.com"),this.addScope("profile")}static credential(e,t){return Di._fromParams({providerId:Fi.PROVIDER_ID,signInMethod:Fi.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:t})}static credentialFromResult(e){return Fi.credentialFromTaggedObject(e)}static credentialFromError(e){return Fi.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:t,oauthAccessToken:r}=e;if(!t&&!r)return null;try{return Fi.credential(t,r)}catch(e){return null}}}Fi.GOOGLE_SIGN_IN_METHOD="google.com",Fi.PROVIDER_ID="google.com";
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
class Vi extends Mi{constructor(){super("github.com")}static credential(e){return Di._fromParams({providerId:Vi.PROVIDER_ID,signInMethod:Vi.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Vi.credentialFromTaggedObject(e)}static credentialFromError(e){return Vi.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e))return null;if(!e.oauthAccessToken)return null;try{return Vi.credential(e.oauthAccessToken)}catch(e){return null}}}Vi.GITHUB_SIGN_IN_METHOD="github.com",Vi.PROVIDER_ID="github.com";
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
class zi extends Mi{constructor(){super("twitter.com")}static credential(e,t){return Di._fromParams({providerId:zi.PROVIDER_ID,signInMethod:zi.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:t})}static credentialFromResult(e){return zi.credentialFromTaggedObject(e)}static credentialFromError(e){return zi.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:t,oauthTokenSecret:r}=e;if(!t||!r)return null;try{return zi.credential(t,r)}catch(e){return null}}}
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
async function Bi(e,t){return kn(e,"POST","/v1/accounts:signUp",Tn(e,t))}
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
 */zi.TWITTER_SIGN_IN_METHOD="twitter.com",zi.PROVIDER_ID="twitter.com";class Hi{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,t,r,n=!1){const i=await Gn._fromIdTokenResponse(e,r,n),s=Wi(r);return new Hi({user:i,providerId:s,_tokenResponse:r,operationType:t})}static async _forOperation(e,t,r){await e._updateTokensIfNecessary(r,!0);const n=Wi(r);return new Hi({user:e,providerId:n,_tokenResponse:r,operationType:t})}}function Wi(e){return e.providerId?e.providerId:"phoneNumber"in e?"phone":null}
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
 */class qi extends mt{constructor(e,t,r,n){var i;super(t.code,t.message),this.operationType=r,this.user=n,Object.setPrototypeOf(this,qi.prototype),this.customData={appName:e.name,tenantId:null!==(i=e.tenantId)&&void 0!==i?i:void 0,_serverResponse:t.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(e,t,r,n){return new qi(e,t,r,n)}}function Gi(e,t,r,n){return("reauthenticate"===t?r._getReauthenticationResolver(e):r._getIdTokenResponse(e)).catch(r=>{if("auth/multi-factor-auth-required"===r.code)throw qi._fromErrorAndOperation(e,r,t,n);throw r})}
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
async function Ki(e,t,r=!1){if(Ur(e.app))return Promise.reject(dn(e));const n="signIn",i=await Gi(e,n,t),s=await Hi._fromIdTokenResponse(e,n,i);return r||await e._updateCurrentUser(s.user),s}
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
async function Ji(e){const t=gi(e);t._getPasswordPolicyInternal()&&await t._updatePasswordPolicy()}function Xi(e,t,r){return Ur(e.app)?Promise.reject(dn(e)):async function(e,t){return Ki(gi(e),t)}(Ct(e),$i.credential(t,r)).catch(async t=>{throw"auth/password-does-not-meet-requirements"===t.code&&Ji(e),t})}
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
async function Yi(e,{displayName:t,photoURL:r}){if(void 0===t&&void 0===r)return;const n=Ct(e),i={idToken:await n.getIdToken(),displayName:t,photoUrl:r,returnSecureToken:!0},s=await Fn(n,async function(e,t){return Cn(e,"POST","/v1/accounts:update",t)}(n.auth,i));n.displayName=s.displayName||null,n.photoURL=s.photoUrl||null;const o=n.providerData.find(({providerId:e})=>"password"===e);o&&(o.displayName=n.displayName,o.photoURL=n.photoURL),await n._updateTokensIfNecessary(s)}const Zi="__sak";
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
 */class Qi{constructor(e,t){this.storageRetriever=e,this.type=t}_isAvailable(){try{return this.storage?(this.storage.setItem(Zi,"1"),this.storage.removeItem(Zi),Promise.resolve(!0)):Promise.resolve(!1)}catch(e){return Promise.resolve(!1)}}_set(e,t){return this.storage.setItem(e,JSON.stringify(t)),Promise.resolve()}_get(e){const t=this.storage.getItem(e);return Promise.resolve(t?JSON.parse(t):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}
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
 */class es extends Qi{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,t)=>this.onStorageEvent(e,t),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=hi(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const t of Object.keys(this.listeners)){const r=this.storage.getItem(t),n=this.localCache[t];r!==n&&e(t,n,r)}}onStorageEvent(e,t=!1){if(!e.key)return void this.forAllChangedKeys((e,t,r)=>{this.notifyListeners(e,r)});const r=e.key;t?this.detachListener():this.stopPolling();const n=()=>{const e=this.storage.getItem(r);(t||this.localCache[r]!==e)&&this.notifyListeners(r,e)},i=this.storage.getItem(r);ci()&&i!==e.newValue&&e.newValue!==e.oldValue?setTimeout(n,10):n()}notifyListeners(e,t){this.localCache[e]=t;const r=this.listeners[e];if(r)for(const e of Array.from(r))e(t?JSON.parse(t):t)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,t,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:t,newValue:r}),!0)})},1e3)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,t){0===Object.keys(this.listeners).length&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),0===this.listeners[e].size&&delete this.listeners[e]),0===Object.keys(this.listeners).length&&(this.detachListener(),this.stopPolling())}async _set(e,t){await super._set(e,t),this.localCache[e]=JSON.stringify(t)}async _get(e){const t=await super._get(e);return this.localCache[e]=JSON.stringify(t),t}async _remove(e){await super._remove(e),delete this.localCache[e]}}es.type="LOCAL";const ts=es;
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
 */class rs extends Qi{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,t){}_removeListener(e,t){}}rs.type="SESSION";const ns=rs;
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
class is{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const t=this.receivers.find(t=>t.isListeningto(e));if(t)return t;const r=new is(e);return this.receivers.push(r),r}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const t=e,{eventId:r,eventType:n,data:i}=t.data,s=this.handlersMap[n];if(!(null==s?void 0:s.size))return;t.ports[0].postMessage({status:"ack",eventId:r,eventType:n});const o=Array.from(s).map(async e=>e(t.origin,i)),a=await function(e){return Promise.all(e.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(e){return{fulfilled:!1,reason:e}}}))}(o);t.ports[0].postMessage({status:"done",eventId:r,eventType:n,response:a})}_subscribe(e,t){0===Object.keys(this.handlersMap).length&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(t)}_unsubscribe(e,t){this.handlersMap[e]&&t&&this.handlersMap[e].delete(t),t&&0!==this.handlersMap[e].size||delete this.handlersMap[e],0===Object.keys(this.handlersMap).length&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}
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
function ss(e="",t=10){let r="";for(let e=0;e<t;e++)r+=Math.floor(10*Math.random());return e+r}
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
 */is.receivers=[];class os{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,t,r=50){const n="undefined"!=typeof MessageChannel?new MessageChannel:null;if(!n)throw new Error("connection_unavailable");let i,s;return new Promise((o,a)=>{const l=ss("",20);n.port1.start();const c=setTimeout(()=>{a(new Error("unsupported_event"))},r);s={messageChannel:n,onMessage(e){const t=e;if(t.data.eventId===l)switch(t.data.status){case"ack":clearTimeout(c),i=setTimeout(()=>{a(new Error("timeout"))},3e3);break;case"done":clearTimeout(i),o(t.data.response);break;default:clearTimeout(c),clearTimeout(i),a(new Error("invalid_response"))}}},this.handlers.add(s),n.port1.addEventListener("message",s.onMessage),this.target.postMessage({eventType:e,eventId:l,data:t},[n.port2])}).finally(()=>{s&&this.removeMessageHandler(s)})}}
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
 */function as(){return window}
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
function ls(){return void 0!==as().WorkerGlobalScope&&"function"==typeof as().importScripts}
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
const cs="firebaseLocalStorageDb",hs="firebaseLocalStorage",ds="fbase_key";class us{constructor(e){this.request=e}toPromise(){return new Promise((e,t)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{t(this.request.error)})})}}function ps(e,t){return e.transaction([hs],t?"readwrite":"readonly").objectStore(hs)}function fs(){const e=indexedDB.open(cs,1);return new Promise((t,r)=>{e.addEventListener("error",()=>{r(e.error)}),e.addEventListener("upgradeneeded",()=>{const t=e.result;try{t.createObjectStore(hs,{keyPath:ds})}catch(e){r(e)}}),e.addEventListener("success",async()=>{const r=e.result;r.objectStoreNames.contains(hs)?t(r):(r.close(),await function(){const e=indexedDB.deleteDatabase(cs);return new us(e).toPromise()}(),t(await fs()))})})}async function gs(e,t,r){const n=ps(e,!0).put({[ds]:t,value:r});return new us(n).toPromise()}function ms(e,t){const r=ps(e,!0).delete(t);return new us(r).toPromise()}class vs{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db||(this.db=await fs()),this.db}async _withRetries(e){let t=0;for(;;)try{const t=await this._openDb();return await e(t)}catch(e){if(t++>3)throw e;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return ls()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=is._getInstance(ls()?self:null),this.receiver._subscribe("keyChanged",async(e,t)=>({keyProcessed:(await this._poll()).includes(t.key)})),this.receiver._subscribe("ping",async(e,t)=>["keyChanged"])}async initializeSender(){var e,t;if(this.activeServiceWorker=await async function(){if(!(null===navigator||void 0===navigator?void 0:navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch(e){return null}}(),!this.activeServiceWorker)return;this.sender=new os(this.activeServiceWorker);const r=await this.sender._send("ping",{},800);r&&(null===(e=r[0])||void 0===e?void 0:e.fulfilled)&&(null===(t=r[0])||void 0===t?void 0:t.value.includes("keyChanged"))&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){var t;if(this.sender&&this.activeServiceWorker&&((null===(t=null===navigator||void 0===navigator?void 0:navigator.serviceWorker)||void 0===t?void 0:t.controller)||null)===this.activeServiceWorker)try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch(t){}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await fs();return await gs(e,Zi,"1"),await ms(e,Zi),!0}catch(e){}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,t){return this._withPendingWrite(async()=>(await this._withRetries(r=>gs(r,e,t)),this.localCache[e]=t,this.notifyServiceWorker(e)))}async _get(e){const t=await this._withRetries(t=>async function(e,t){const r=ps(e,!1).get(t),n=await new us(r).toPromise();return void 0===n?null:n.value}(t,e));return this.localCache[e]=t,t}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(t=>ms(t,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(e=>{const t=ps(e,!1).getAll();return new us(t).toPromise()});if(!e)return[];if(0!==this.pendingWrites)return[];const t=[],r=new Set;if(0!==e.length)for(const{fbase_key:n,value:i}of e)r.add(n),JSON.stringify(this.localCache[n])!==JSON.stringify(i)&&(this.notifyListeners(n,i),t.push(n));for(const e of Object.keys(this.localCache))this.localCache[e]&&!r.has(e)&&(this.notifyListeners(e,null),t.push(e));return t}notifyListeners(e,t){this.localCache[e]=t;const r=this.listeners[e];if(r)for(const e of Array.from(r))e(t)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),800)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,t){0===Object.keys(this.listeners).length&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),0===this.listeners[e].size&&delete this.listeners[e]),0===Object.keys(this.listeners).length&&this.stopPolling()}}vs.type="LOCAL";const ys=vs;
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
 */
function bs(e,t){return t?Jn(t):(pn(e._popupRedirectResolver,e,"argument-error"),e._popupRedirectResolver)}
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
 */new bn(3e4,6e4);class _s extends ki{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return Ni(e,this._buildIdpRequest())}_linkToIdToken(e,t){return Ni(e,this._buildIdpRequest(t))}_getReauthenticationResolver(e){return Ni(e,this._buildIdpRequest())}_buildIdpRequest(e){const t={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(t.idToken=e),t}}function ws(e){return Ki(e.auth,new _s(e),e.bypassAuthState)}function Es(e){const{auth:t,user:r}=e;return pn(r,t,"internal-error"),
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
async function(e,t,r=!1){const{auth:n}=e;if(Ur(n.app))return Promise.reject(dn(n));const i="reauthenticate";try{const s=await Fn(e,Gi(n,i,t,e),r);pn(s.idToken,n,"internal-error");const o=Mn(s.idToken);pn(o,n,"internal-error");const{sub:a}=o;return pn(e.uid===a,n,"user-mismatch"),Hi._forOperation(e,i,s)}catch(e){throw"auth/user-not-found"===(null==e?void 0:e.code)&&ln(n,"user-mismatch"),e}}(r,new _s(e),e.bypassAuthState)}async function Is(e){const{auth:t,user:r}=e;return pn(r,t,"internal-error"),async function(e,t,r=!1){const n=await Fn(e,t._linkToIdToken(e.auth,await e.getIdToken()),r);return Hi._forOperation(e,"link",n)}(r,new _s(e),e.bypassAuthState)}
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
 */class Ss{constructor(e,t,r,n,i=!1){this.auth=e,this.resolver=r,this.user=n,this.bypassAuthState=i,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(t)?t:[t]}execute(){return new Promise(async(e,t)=>{this.pendingPromise={resolve:e,reject:t};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(e){this.reject(e)}})}async onAuthEvent(e){const{urlResponse:t,sessionId:r,postBody:n,tenantId:i,error:s,type:o}=e;if(s)return void this.reject(s);const a={auth:this.auth,requestUri:t,sessionId:r,tenantId:i||void 0,postBody:n||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(o)(a))}catch(e){this.reject(e)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return ws;case"linkViaPopup":case"linkViaRedirect":return Is;case"reauthViaPopup":case"reauthViaRedirect":return Es;default:ln(this.auth,"internal-error")}}resolve(e){gn(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){gn(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}
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
 */const Ts=new bn(2e3,1e4);async function Cs(e,t,r){if(Ur(e.app))return Promise.reject(cn(e,"operation-not-supported-in-this-environment"));const n=gi(e);!function(e,t,r){if(!(t instanceof r))throw r.name!==t.constructor.name&&ln(e,"argument-error"),hn(e,"argument-error",`Type of ${t.constructor.name} does not match expected instance.Did you pass a reference from a different Auth SDK?`)}(e,t,Ui);const i=bs(n,r);return new As(n,"signInViaPopup",t,i).executeNotNull()}class As extends Ss{constructor(e,t,r,n,i){super(e,t,n,i),this.provider=r,this.authWindow=null,this.pollId=null,As.currentPopupAction&&As.currentPopupAction.cancel(),As.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return pn(e,this.auth,"internal-error"),e}async onExecution(){gn(1===this.filter.length,"Popup operations only handle one event");const e=ss();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(e=>{this.reject(e)}),this.resolver._isIframeWebStorageSupported(this.auth,e=>{e||this.reject(cn(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return(null===(e=this.authWindow)||void 0===e?void 0:e.associatedEvent)||null}cancel(){this.reject(cn(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,As.currentPopupAction=null}pollUserCancellation(){const e=()=>{var t,r;(null===(r=null===(t=this.authWindow)||void 0===t?void 0:t.window)||void 0===r?void 0:r.closed)?this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(cn(this.auth,"popup-closed-by-user"))},8e3):this.pollId=window.setTimeout(e,Ts.get())};e()}}As.currentPopupAction=null;
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
const ks="pendingRedirect",xs=new Map;class Rs extends Ss{constructor(e,t,r=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],t,void 0,r),this.eventId=null}async execute(){let e=xs.get(this.auth._key());if(!e){try{const t=await async function(e,t){const r=function(e){return Zn(ks,e.config.apiKey,e.name)}(t),n=function(e){return Jn(e._redirectPersistence)}(e);if(!await n._isAvailable())return!1;const i="true"===await n._get(r);return await n._remove(r),i}(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(t)}catch(t){e=()=>Promise.reject(t)}xs.set(this.auth._key(),e)}return this.bypassAuthState||xs.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if("signInViaRedirect"===e.type)return super.onAuthEvent(e);if("unknown"!==e.type){if(e.eventId){const t=await this.auth._redirectUserForId(e.eventId);if(t)return this.user=t,super.onAuthEvent(e);this.resolve(null)}}else this.resolve(null)}async onExecution(){}cleanUp(){}}function Ps(e,t){xs.set(e._key(),t)}async function Os(e,t,r=!1){if(Ur(e.app))return Promise.reject(dn(e));const n=gi(e),i=bs(n,t),s=new Rs(n,i,r),o=await s.execute();return o&&!r&&(delete o.user._redirectEventId,await n._persistUserIfCurrent(o.user),await n._setRedirectUser(null,t)),o}
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
 */class Ns{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let t=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(e,r)&&(t=!0,this.sendToConsumer(e,r),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!function(e){switch(e.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return Ls(e);default:return!1}}
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
 */(e)||(this.hasHandledPotentialRedirect=!0,t||(this.queuedRedirectEvent=e,t=!0)),t}sendToConsumer(e,t){var r;if(e.error&&!Ls(e)){const n=(null===(r=e.error.code)||void 0===r?void 0:r.split("auth/")[1])||"internal-error";t.onError(cn(this.auth,n))}else t.onAuthEvent(e)}isEventForConsumer(e,t){const r=null===t.eventId||!!e.eventId&&e.eventId===t.eventId;return t.filter.includes(e.type)&&r}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=6e5&&this.cachedEventUids.clear(),this.cachedEventUids.has(Ds(e))}saveEventToCache(e){this.cachedEventUids.add(Ds(e)),this.lastProcessedEventTime=Date.now()}}function Ds(e){return[e.type,e.eventId,e.sessionId,e.tenantId].filter(e=>e).join("-")}function Ls({type:e,error:t}){return"unknown"===e&&"auth/no-auth-event"===(null==t?void 0:t.code)}
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
const $s=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,Us=/^https?/;async function Ms(e){if(e.config.emulator)return;const{authorizedDomains:t}=await async function(e,t={}){return Cn(e,"GET","/v1/projects",t)}(e);for(const e of t)try{if(js(e))return}catch(e){}ln(e,"unauthorized-domain")}function js(e){const t=mn(),{protocol:r,hostname:n}=new URL(t);if(e.startsWith("chrome-extension://")){const i=new URL(e);return""===i.hostname&&""===n?"chrome-extension:"===r&&e.replace("chrome-extension://","")===t.replace("chrome-extension://",""):"chrome-extension:"===r&&i.hostname===n}if(!Us.test(r))return!1;if($s.test(e))return n===e;const i=e.replace(/\./g,"\\.");return new RegExp("^(.+\\."+i+"|"+i+")$","i").test(n)}
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
 */const Fs=new bn(3e4,6e4);function Vs(){const e=as().___jsl;if(null==e?void 0:e.H)for(const t of Object.keys(e.H))if(e.H[t].r=e.H[t].r||[],e.H[t].L=e.H[t].L||[],e.H[t].r=[...e.H[t].L],e.CP)for(let t=0;t<e.CP.length;t++)e.CP[t]=null}function zs(e){return new Promise((t,r)=>{var n,i,s;function o(){Vs(),gapi.load("gapi.iframes",{callback:()=>{t(gapi.iframes.getContext())},ontimeout:()=>{Vs(),r(cn(e,"network-request-failed"))},timeout:Fs.get()})}if(null===(i=null===(n=as().gapi)||void 0===n?void 0:n.iframes)||void 0===i?void 0:i.Iframe)t(gapi.iframes.getContext());else{if(!(null===(s=as().gapi)||void 0===s?void 0:s.load)){const t=`__${"iframefcb"}${Math.floor(1e6*Math.random())}`;return as()[t]=()=>{gapi.load?o():r(cn(e,"network-request-failed"))},yi(`${vi.gapiScript}?onload=${t}`).catch(e=>r(e))}o()}}).catch(e=>{throw Bs=null,e})}let Bs=null;
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
const Hs=new bn(5e3,15e3),Ws={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},qs=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function Gs(e){const t=e.config;pn(t.authDomain,e,"auth-domain-config-required");const r=t.emulator?_n(t,"emulator/auth/iframe"):`https://${e.config.authDomain}/__/auth/iframe`,n={apiKey:t.apiKey,appName:e.name,v:Fr},i=qs.get(e.config.apiHost);i&&(n.eid=i);const s=e._getFrameworks();return s.length&&(n.fw=s.join(",")),`${r}?${wt(n).slice(1)}`}async function Ks(e){const t=await function(e){return Bs=Bs||zs(e),Bs}(e),r=as().gapi;return pn(r,e,"internal-error"),t.open({where:document.body,url:Gs(e),messageHandlersFilter:r.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:Ws,dontclear:!0},t=>new Promise(async(r,n)=>{await t.restyle({setHideOnLeave:!1});const i=cn(e,"network-request-failed"),s=as().setTimeout(()=>{n(i)},Hs.get());function o(){as().clearTimeout(s),r(t)}t.ping(o).then(o,()=>{n(i)})}))}
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
 */const Js={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"};class Xs{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch(e){}}}function Ys(e,t,r,n=500,i=600){const s=Math.max((window.screen.availHeight-i)/2,0).toString(),o=Math.max((window.screen.availWidth-n)/2,0).toString();let a="";const l=Object.assign(Object.assign({},Js),{width:n.toString(),height:i.toString(),top:s,left:o}),c=gt().toLowerCase();r&&(a=ni(c)?"_blank":r),ti(c)&&(t=t||"http://localhost",l.scrollbars="yes");const h=Object.entries(l).reduce((e,[t,r])=>`${e}${t}=${r},`,"");if(function(e=gt()){var t;return li(e)&&!!(null===(t=window.navigator)||void 0===t?void 0:t.standalone)}(c)&&"_self"!==a)return function(e,t){const r=document.createElement("a");r.href=e,r.target=t;const n=document.createEvent("MouseEvent");n.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),r.dispatchEvent(n)}
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
 */(t||"",a),new Xs(null);const d=window.open(t||"",a,h);pn(d,e,"popup-blocked");try{d.focus()}catch(e){}return new Xs(d)}const Zs="__/auth/handler",Qs="emulator/auth/handler",eo=encodeURIComponent("fac");async function to(e,t,r,n,i,s){pn(e.config.authDomain,e,"auth-domain-config-required"),pn(e.config.apiKey,e,"invalid-api-key");const o={apiKey:e.config.apiKey,appName:e.name,authType:r,redirectUrl:n,v:Fr,eventId:i};if(t instanceof Ui){t.setDefaultLanguage(e.languageCode),o.providerId=t.providerId||"",function(e){for(const t in e)if(Object.prototype.hasOwnProperty.call(e,t))return!1;return!0}(t.getCustomParameters())||(o.customParameters=JSON.stringify(t.getCustomParameters()));for(const[e,t]of Object.entries({}))o[e]=t}if(t instanceof Mi){const e=t.getScopes().filter(e=>""!==e);e.length>0&&(o.scopes=e.join(","))}e.tenantId&&(o.tid=e.tenantId);const a=o;for(const e of Object.keys(a))void 0===a[e]&&delete a[e];const l=await e._getAppCheckToken(),c=l?`#${eo}=${encodeURIComponent(l)}`:"";return`${function({config:e}){if(!e.emulator)return`https://${e.authDomain}/${Zs}`;return _n(e,Qs)}
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
 */(e)}?${wt(a).slice(1)}${c}`}const ro="webStorageSupport";const no=class{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=ns,this._completeRedirectFn=Os,this._overrideRedirectResult=Ps}async _openPopup(e,t,r,n){var i;gn(null===(i=this.eventManagers[e._key()])||void 0===i?void 0:i.manager,"_initialize() not called before _openPopup()");return Ys(e,await to(e,t,r,mn(),n),ss())}async _openRedirect(e,t,r,n){await this._originValidation(e);return function(e){as().location.href=e}(await to(e,t,r,mn(),n)),new Promise(()=>{})}_initialize(e){const t=e._key();if(this.eventManagers[t]){const{manager:e,promise:r}=this.eventManagers[t];return e?Promise.resolve(e):(gn(r,"If manager is not set, promise should be"),r)}const r=this.initAndGetManager(e);return this.eventManagers[t]={promise:r},r.catch(()=>{delete this.eventManagers[t]}),r}async initAndGetManager(e){const t=await Ks(e),r=new Ns(e);return t.register("authEvent",t=>{pn(null==t?void 0:t.authEvent,e,"invalid-auth-event");return{status:r.onEvent(t.authEvent)?"ACK":"ERROR"}},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:r},this.iframes[e._key()]=t,r}_isIframeWebStorageSupported(e,t){this.iframes[e._key()].send(ro,{type:ro},r=>{var n;const i=null===(n=null==r?void 0:r[0])||void 0===n?void 0:n[ro];void 0!==i&&t(!!i),ln(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const t=e._key();return this.originValidationPromises[t]||(this.originValidationPromises[t]=Ms(e)),this.originValidationPromises[t]}get _shouldInitProactively(){return hi()||ri()||li()}};var io="@firebase/auth",so="1.10.8";
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
class oo{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),(null===(e=this.auth.currentUser)||void 0===e?void 0:e.uid)||null}async getToken(e){if(this.assertAuthConfigured(),await this.auth._initializationPromise,!this.auth.currentUser)return null;return{accessToken:await this.auth.currentUser.getIdToken(e)}}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const t=this.auth.onIdTokenChanged(t=>{e((null==t?void 0:t.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,t),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const t=this.internalListeners.get(e);t&&(this.internalListeners.delete(e),t(),this.updateProactiveRefresh())}assertAuthConfigured(){pn(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}
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
 */
const ao=lt("authIdTokenMaxAge")||300;let lo=null;function co(e=zr()){const t=$r(e,"auth");if(t.isInitialized())return t.getImmediate();const r=function(e,t){const r=$r(e,"auth");if(r.isInitialized()){const e=r.getImmediate();if(bt(r.getOptions(),null!=t?t:{}))return e;ln(e,"already-initialized")}return r.initialize({options:t})}(e,{popupRedirectResolver:no,persistence:[ys,ts,ns]}),n=lt("authTokenSyncURL");if(n&&"boolean"==typeof isSecureContext&&isSecureContext){const e=new URL(n,location.origin);if(location.origin===e.origin){const t=(i=e.toString(),async e=>{const t=e&&await e.getIdTokenResult(),r=t&&((new Date).getTime()-Date.parse(t.issuedAtTime))/1e3;if(r&&r>ao)return;const n=null==t?void 0:t.token;lo!==n&&(lo=n,await fetch(i,{method:n?"POST":"DELETE",headers:n?{Authorization:`Bearer ${n}`}:{}}))});!function(e,t,r){Ct(e).beforeAuthStateChanged(t,r)}(r,t,()=>t(r.currentUser)),function(e,t,r,n){Ct(e).onIdTokenChanged(t,r,n)}(r,e=>t(e))}}var i;const s=ot("auth");return s&&Ti(r,`http://${s}`),r}var ho;!function(e){vi=e}({loadJS:e=>new Promise((t,r)=>{const n=document.createElement("script");var i,s;n.setAttribute("src",e),n.onload=t,n.onerror=e=>{const t=cn("internal-error");t.customData=e,r(t)},n.type="text/javascript",n.charset="UTF-8",(null!==(s=null===(i=document.getElementsByTagName("head"))||void 0===i?void 0:i[0])&&void 0!==s?s:document).appendChild(n)}),gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="}),ho="Browser",Lr(new At("auth",(e,{options:t})=>{const r=e.getProvider("app").getImmediate(),n=e.getProvider("heartbeat"),i=e.getProvider("app-check-internal"),{apiKey:s,authDomain:o}=r.options;pn(s&&!s.includes(":"),"invalid-api-key",{appName:r.name});const a={apiKey:s,authDomain:o,clientPlatform:ho,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:di(ho)},l=new fi(r,n,i,a);return function(e,t){const r=(null==t?void 0:t.persistence)||[],n=(Array.isArray(r)?r:[r]).map(Jn);(null==t?void 0:t.errorMap)&&e._updateErrorMap(t.errorMap),e._initializeWithPersistence(n,null==t?void 0:t.popupRedirectResolver)}(l,t),l},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,t,r)=>{e.getProvider("auth-internal").initialize()})),Lr(new At("auth-internal",e=>(e=>new oo(e))(gi(e.getProvider("auth").getImmediate())),"PRIVATE").setInstantiationMode("EXPLICIT")),Br(io,so,function(e){switch(e){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}(ho)),Br(io,so,"esm2017");var uo,po="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{};
/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/(function(){var e;
/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function t(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.B=Array(this.blockSize),this.o=this.h=0,this.s()}function r(e,t,r){r||(r=0);var n=Array(16);if("string"==typeof t)for(var i=0;16>i;++i)n[i]=t.charCodeAt(r++)|t.charCodeAt(r++)<<8|t.charCodeAt(r++)<<16|t.charCodeAt(r++)<<24;else for(i=0;16>i;++i)n[i]=t[r++]|t[r++]<<8|t[r++]<<16|t[r++]<<24;t=e.g[0],r=e.g[1],i=e.g[2];var s=e.g[3],o=t+(s^r&(i^s))+n[0]+3614090360&4294967295;o=(r=(i=(s=(t=(r=(i=(s=(t=(r=(i=(s=(t=(r=(i=(s=(t=(r=(i=(s=(t=(r=(i=(s=(t=(r=(i=(s=(t=(r=(i=(s=(t=(r=(i=(s=(t=(r=(i=(s=(t=(r=(i=(s=(t=(r=(i=(s=(t=(r=(i=(s=(t=(r=(i=(s=(t=(r=(i=(s=(t=r+(o<<7&4294967295|o>>>25))+((o=s+(i^t&(r^i))+n[1]+3905402710&4294967295)<<12&4294967295|o>>>20))+((o=i+(r^s&(t^r))+n[2]+606105819&4294967295)<<17&4294967295|o>>>15))+((o=r+(t^i&(s^t))+n[3]+3250441966&4294967295)<<22&4294967295|o>>>10))+((o=t+(s^r&(i^s))+n[4]+4118548399&4294967295)<<7&4294967295|o>>>25))+((o=s+(i^t&(r^i))+n[5]+1200080426&4294967295)<<12&4294967295|o>>>20))+((o=i+(r^s&(t^r))+n[6]+2821735955&4294967295)<<17&4294967295|o>>>15))+((o=r+(t^i&(s^t))+n[7]+4249261313&4294967295)<<22&4294967295|o>>>10))+((o=t+(s^r&(i^s))+n[8]+1770035416&4294967295)<<7&4294967295|o>>>25))+((o=s+(i^t&(r^i))+n[9]+2336552879&4294967295)<<12&4294967295|o>>>20))+((o=i+(r^s&(t^r))+n[10]+4294925233&4294967295)<<17&4294967295|o>>>15))+((o=r+(t^i&(s^t))+n[11]+2304563134&4294967295)<<22&4294967295|o>>>10))+((o=t+(s^r&(i^s))+n[12]+1804603682&4294967295)<<7&4294967295|o>>>25))+((o=s+(i^t&(r^i))+n[13]+4254626195&4294967295)<<12&4294967295|o>>>20))+((o=i+(r^s&(t^r))+n[14]+2792965006&4294967295)<<17&4294967295|o>>>15))+((o=r+(t^i&(s^t))+n[15]+1236535329&4294967295)<<22&4294967295|o>>>10))+((o=t+(i^s&(r^i))+n[1]+4129170786&4294967295)<<5&4294967295|o>>>27))+((o=s+(r^i&(t^r))+n[6]+3225465664&4294967295)<<9&4294967295|o>>>23))+((o=i+(t^r&(s^t))+n[11]+643717713&4294967295)<<14&4294967295|o>>>18))+((o=r+(s^t&(i^s))+n[0]+3921069994&4294967295)<<20&4294967295|o>>>12))+((o=t+(i^s&(r^i))+n[5]+3593408605&4294967295)<<5&4294967295|o>>>27))+((o=s+(r^i&(t^r))+n[10]+38016083&4294967295)<<9&4294967295|o>>>23))+((o=i+(t^r&(s^t))+n[15]+3634488961&4294967295)<<14&4294967295|o>>>18))+((o=r+(s^t&(i^s))+n[4]+3889429448&4294967295)<<20&4294967295|o>>>12))+((o=t+(i^s&(r^i))+n[9]+568446438&4294967295)<<5&4294967295|o>>>27))+((o=s+(r^i&(t^r))+n[14]+3275163606&4294967295)<<9&4294967295|o>>>23))+((o=i+(t^r&(s^t))+n[3]+4107603335&4294967295)<<14&4294967295|o>>>18))+((o=r+(s^t&(i^s))+n[8]+1163531501&4294967295)<<20&4294967295|o>>>12))+((o=t+(i^s&(r^i))+n[13]+2850285829&4294967295)<<5&4294967295|o>>>27))+((o=s+(r^i&(t^r))+n[2]+4243563512&4294967295)<<9&4294967295|o>>>23))+((o=i+(t^r&(s^t))+n[7]+1735328473&4294967295)<<14&4294967295|o>>>18))+((o=r+(s^t&(i^s))+n[12]+2368359562&4294967295)<<20&4294967295|o>>>12))+((o=t+(r^i^s)+n[5]+4294588738&4294967295)<<4&4294967295|o>>>28))+((o=s+(t^r^i)+n[8]+2272392833&4294967295)<<11&4294967295|o>>>21))+((o=i+(s^t^r)+n[11]+1839030562&4294967295)<<16&4294967295|o>>>16))+((o=r+(i^s^t)+n[14]+4259657740&4294967295)<<23&4294967295|o>>>9))+((o=t+(r^i^s)+n[1]+2763975236&4294967295)<<4&4294967295|o>>>28))+((o=s+(t^r^i)+n[4]+1272893353&4294967295)<<11&4294967295|o>>>21))+((o=i+(s^t^r)+n[7]+4139469664&4294967295)<<16&4294967295|o>>>16))+((o=r+(i^s^t)+n[10]+3200236656&4294967295)<<23&4294967295|o>>>9))+((o=t+(r^i^s)+n[13]+681279174&4294967295)<<4&4294967295|o>>>28))+((o=s+(t^r^i)+n[0]+3936430074&4294967295)<<11&4294967295|o>>>21))+((o=i+(s^t^r)+n[3]+3572445317&4294967295)<<16&4294967295|o>>>16))+((o=r+(i^s^t)+n[6]+76029189&4294967295)<<23&4294967295|o>>>9))+((o=t+(r^i^s)+n[9]+3654602809&4294967295)<<4&4294967295|o>>>28))+((o=s+(t^r^i)+n[12]+3873151461&4294967295)<<11&4294967295|o>>>21))+((o=i+(s^t^r)+n[15]+530742520&4294967295)<<16&4294967295|o>>>16))+((o=r+(i^s^t)+n[2]+3299628645&4294967295)<<23&4294967295|o>>>9))+((o=t+(i^(r|~s))+n[0]+4096336452&4294967295)<<6&4294967295|o>>>26))+((o=s+(r^(t|~i))+n[7]+1126891415&4294967295)<<10&4294967295|o>>>22))+((o=i+(t^(s|~r))+n[14]+2878612391&4294967295)<<15&4294967295|o>>>17))+((o=r+(s^(i|~t))+n[5]+4237533241&4294967295)<<21&4294967295|o>>>11))+((o=t+(i^(r|~s))+n[12]+1700485571&4294967295)<<6&4294967295|o>>>26))+((o=s+(r^(t|~i))+n[3]+2399980690&4294967295)<<10&4294967295|o>>>22))+((o=i+(t^(s|~r))+n[10]+4293915773&4294967295)<<15&4294967295|o>>>17))+((o=r+(s^(i|~t))+n[1]+2240044497&4294967295)<<21&4294967295|o>>>11))+((o=t+(i^(r|~s))+n[8]+1873313359&4294967295)<<6&4294967295|o>>>26))+((o=s+(r^(t|~i))+n[15]+4264355552&4294967295)<<10&4294967295|o>>>22))+((o=i+(t^(s|~r))+n[6]+2734768916&4294967295)<<15&4294967295|o>>>17))+((o=r+(s^(i|~t))+n[13]+1309151649&4294967295)<<21&4294967295|o>>>11))+((s=(t=r+((o=t+(i^(r|~s))+n[4]+4149444226&4294967295)<<6&4294967295|o>>>26))+((o=s+(r^(t|~i))+n[11]+3174756917&4294967295)<<10&4294967295|o>>>22))^((i=s+((o=i+(t^(s|~r))+n[2]+718787259&4294967295)<<15&4294967295|o>>>17))|~t))+n[9]+3951481745&4294967295,e.g[0]=e.g[0]+t&4294967295,e.g[1]=e.g[1]+(i+(o<<21&4294967295|o>>>11))&4294967295,e.g[2]=e.g[2]+i&4294967295,e.g[3]=e.g[3]+s&4294967295}function n(e,t){this.h=t;for(var r=[],n=!0,i=e.length-1;0<=i;i--){var s=0|e[i];n&&s==t||(r[i]=s,n=!1)}this.g=r}!function(e,t){function r(){}r.prototype=t.prototype,e.D=t.prototype,e.prototype=new r,e.prototype.constructor=e,e.C=function(e,r,n){for(var i=Array(arguments.length-2),s=2;s<arguments.length;s++)i[s-2]=arguments[s];return t.prototype[r].apply(e,i)}}(t,function(){this.blockSize=-1}),t.prototype.s=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0},t.prototype.u=function(e,t){void 0===t&&(t=e.length);for(var n=t-this.blockSize,i=this.B,s=this.h,o=0;o<t;){if(0==s)for(;o<=n;)r(this,e,o),o+=this.blockSize;if("string"==typeof e){for(;o<t;)if(i[s++]=e.charCodeAt(o++),s==this.blockSize){r(this,i),s=0;break}}else for(;o<t;)if(i[s++]=e[o++],s==this.blockSize){r(this,i),s=0;break}}this.h=s,this.o+=t},t.prototype.v=function(){var e=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);e[0]=128;for(var t=1;t<e.length-8;++t)e[t]=0;var r=8*this.o;for(t=e.length-8;t<e.length;++t)e[t]=255&r,r/=256;for(this.u(e),e=Array(16),t=r=0;4>t;++t)for(var n=0;32>n;n+=8)e[r++]=this.g[t]>>>n&255;return e};var i={};function s(e){return-128<=e&&128>e?function(e,t){var r=i;return Object.prototype.hasOwnProperty.call(r,e)?r[e]:r[e]=t(e)}(e,function(e){return new n([0|e],0>e?-1:0)}):new n([0|e],0>e?-1:0)}function o(e){if(isNaN(e)||!isFinite(e))return a;if(0>e)return u(o(-e));for(var t=[],r=1,i=0;e>=r;i++)t[i]=e/r|0,r*=4294967296;return new n(t,0)}var a=s(0),l=s(1),c=s(16777216);function h(e){if(0!=e.h)return!1;for(var t=0;t<e.g.length;t++)if(0!=e.g[t])return!1;return!0}function d(e){return-1==e.h}function u(e){for(var t=e.g.length,r=[],i=0;i<t;i++)r[i]=~e.g[i];return new n(r,~e.h).add(l)}function p(e,t){return e.add(u(t))}function f(e,t){for(;(65535&e[t])!=e[t];)e[t+1]+=e[t]>>>16,e[t]&=65535,t++}function g(e,t){this.g=e,this.h=t}function m(e,t){if(h(t))throw Error("division by zero");if(h(e))return new g(a,a);if(d(e))return t=m(u(e),t),new g(u(t.g),u(t.h));if(d(t))return t=m(e,u(t)),new g(u(t.g),t.h);if(30<e.g.length){if(d(e)||d(t))throw Error("slowDivide_ only works with positive integers.");for(var r=l,n=t;0>=n.l(e);)r=v(r),n=v(n);var i=y(r,1),s=y(n,1);for(n=y(n,2),r=y(r,2);!h(n);){var c=s.add(n);0>=c.l(e)&&(i=i.add(r),s=c),n=y(n,1),r=y(r,1)}return t=p(e,i.j(t)),new g(i,t)}for(i=a;0<=e.l(t);){for(r=Math.max(1,Math.floor(e.m()/t.m())),n=48>=(n=Math.ceil(Math.log(r)/Math.LN2))?1:Math.pow(2,n-48),c=(s=o(r)).j(t);d(c)||0<c.l(e);)c=(s=o(r-=n)).j(t);h(s)&&(s=l),i=i.add(s),e=p(e,c)}return new g(i,e)}function v(e){for(var t=e.g.length+1,r=[],i=0;i<t;i++)r[i]=e.i(i)<<1|e.i(i-1)>>>31;return new n(r,e.h)}function y(e,t){var r=t>>5;t%=32;for(var i=e.g.length-r,s=[],o=0;o<i;o++)s[o]=0<t?e.i(o+r)>>>t|e.i(o+r+1)<<32-t:e.i(o+r);return new n(s,e.h)}(e=n.prototype).m=function(){if(d(this))return-u(this).m();for(var e=0,t=1,r=0;r<this.g.length;r++){var n=this.i(r);e+=(0<=n?n:4294967296+n)*t,t*=4294967296}return e},e.toString=function(e){if(2>(e=e||10)||36<e)throw Error("radix out of range: "+e);if(h(this))return"0";if(d(this))return"-"+u(this).toString(e);for(var t=o(Math.pow(e,6)),r=this,n="";;){var i=m(r,t).g,s=((0<(r=p(r,i.j(t))).g.length?r.g[0]:r.h)>>>0).toString(e);if(h(r=i))return s+n;for(;6>s.length;)s="0"+s;n=s+n}},e.i=function(e){return 0>e?0:e<this.g.length?this.g[e]:this.h},e.l=function(e){return d(e=p(this,e))?-1:h(e)?0:1},e.abs=function(){return d(this)?u(this):this},e.add=function(e){for(var t=Math.max(this.g.length,e.g.length),r=[],i=0,s=0;s<=t;s++){var o=i+(65535&this.i(s))+(65535&e.i(s)),a=(o>>>16)+(this.i(s)>>>16)+(e.i(s)>>>16);i=a>>>16,o&=65535,a&=65535,r[s]=a<<16|o}return new n(r,-2147483648&r[r.length-1]?-1:0)},e.j=function(e){if(h(this)||h(e))return a;if(d(this))return d(e)?u(this).j(u(e)):u(u(this).j(e));if(d(e))return u(this.j(u(e)));if(0>this.l(c)&&0>e.l(c))return o(this.m()*e.m());for(var t=this.g.length+e.g.length,r=[],i=0;i<2*t;i++)r[i]=0;for(i=0;i<this.g.length;i++)for(var s=0;s<e.g.length;s++){var l=this.i(i)>>>16,p=65535&this.i(i),g=e.i(s)>>>16,m=65535&e.i(s);r[2*i+2*s]+=p*m,f(r,2*i+2*s),r[2*i+2*s+1]+=l*m,f(r,2*i+2*s+1),r[2*i+2*s+1]+=p*g,f(r,2*i+2*s+1),r[2*i+2*s+2]+=l*g,f(r,2*i+2*s+2)}for(i=0;i<t;i++)r[i]=r[2*i+1]<<16|r[2*i];for(i=t;i<2*t;i++)r[i]=0;return new n(r,0)},e.A=function(e){return m(this,e).h},e.and=function(e){for(var t=Math.max(this.g.length,e.g.length),r=[],i=0;i<t;i++)r[i]=this.i(i)&e.i(i);return new n(r,this.h&e.h)},e.or=function(e){for(var t=Math.max(this.g.length,e.g.length),r=[],i=0;i<t;i++)r[i]=this.i(i)|e.i(i);return new n(r,this.h|e.h)},e.xor=function(e){for(var t=Math.max(this.g.length,e.g.length),r=[],i=0;i<t;i++)r[i]=this.i(i)^e.i(i);return new n(r,this.h^e.h)},t.prototype.digest=t.prototype.v,t.prototype.reset=t.prototype.s,t.prototype.update=t.prototype.u,n.prototype.add=n.prototype.add,n.prototype.multiply=n.prototype.j,n.prototype.modulo=n.prototype.A,n.prototype.compare=n.prototype.l,n.prototype.toNumber=n.prototype.m,n.prototype.toString=n.prototype.toString,n.prototype.getBits=n.prototype.i,n.fromNumber=o,n.fromString=function e(t,r){if(0==t.length)throw Error("number format error: empty string");if(2>(r=r||10)||36<r)throw Error("radix out of range: "+r);if("-"==t.charAt(0))return u(e(t.substring(1),r));if(0<=t.indexOf("-"))throw Error('number format error: interior "-" character');for(var n=o(Math.pow(r,8)),i=a,s=0;s<t.length;s+=8){var l=Math.min(8,t.length-s),c=parseInt(t.substring(s,s+l),r);8>l?(l=o(Math.pow(r,l)),i=i.j(l).add(o(c))):i=(i=i.j(n)).add(o(c))}return i},uo=n}).apply(void 0!==po?po:"undefined"!=typeof self?self:"undefined"!=typeof window?window:{});var fo="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{};(function(){var e,t="function"==typeof Object.defineProperties?Object.defineProperty:function(e,t,r){return e==Array.prototype||e==Object.prototype||(e[t]=r.value),e};var r=function(e){e=["object"==typeof globalThis&&globalThis,e,"object"==typeof window&&window,"object"==typeof self&&self,"object"==typeof fo&&fo];for(var t=0;t<e.length;++t){var r=e[t];if(r&&r.Math==Math)return r}throw Error("Cannot find global object")}(this);!function(e,n){if(n)e:{var i=r;e=e.split(".");for(var s=0;s<e.length-1;s++){var o=e[s];if(!(o in i))break e;i=i[o]}(n=n(s=i[e=e[e.length-1]]))!=s&&null!=n&&t(i,e,{configurable:!0,writable:!0,value:n})}}("Array.prototype.values",function(e){return e||function(){return function(e,t){e instanceof String&&(e+="");var r=0,n=!1,i={next:function(){if(!n&&r<e.length){var i=r++;return{value:t(i,e[i]),done:!1}}return n=!0,{done:!0,value:void 0}}};return i[Symbol.iterator]=function(){return i},i}(this,function(e,t){return t})}});
/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/
var n=n||{},i=this||self;function s(e){var t=typeof e;return"array"==(t="object"!=t?t:e?Array.isArray(e)?"array":t:"null")||"object"==t&&"number"==typeof e.length}function o(e){var t=typeof e;return"object"==t&&null!=e||"function"==t}function a(e,t,r){return e.call.apply(e.bind,arguments)}function l(e,t,r){if(!e)throw Error();if(2<arguments.length){var n=Array.prototype.slice.call(arguments,2);return function(){var r=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(r,n),e.apply(t,r)}}return function(){return e.apply(t,arguments)}}function c(e,t,r){return(c=Function.prototype.bind&&-1!=Function.prototype.bind.toString().indexOf("native code")?a:l).apply(null,arguments)}function h(e,t){var r=Array.prototype.slice.call(arguments,1);return function(){var t=r.slice();return t.push.apply(t,arguments),e.apply(this,t)}}function d(e,t){function r(){}r.prototype=t.prototype,e.aa=t.prototype,e.prototype=new r,e.prototype.constructor=e,e.Qb=function(e,r,n){for(var i=Array(arguments.length-2),s=2;s<arguments.length;s++)i[s-2]=arguments[s];return t.prototype[r].apply(e,i)}}function u(e){const t=e.length;if(0<t){const r=Array(t);for(let n=0;n<t;n++)r[n]=e[n];return r}return[]}function p(e,t){for(let t=1;t<arguments.length;t++){const r=arguments[t];if(s(r)){const t=e.length||0,n=r.length||0;e.length=t+n;for(let i=0;i<n;i++)e[t+i]=r[i]}else e.push(r)}}function f(e){return/^[\s\xa0]*$/.test(e)}function g(){var e=i.navigator;return e&&(e=e.userAgent)?e:""}function m(e){return m[" "](e),e}m[" "]=function(){};var v=!(-1==g().indexOf("Gecko")||-1!=g().toLowerCase().indexOf("webkit")&&-1==g().indexOf("Edge")||-1!=g().indexOf("Trident")||-1!=g().indexOf("MSIE")||-1!=g().indexOf("Edge"));function y(e,t,r){for(const n in e)t.call(r,e[n],n,e)}function b(e){const t={};for(const r in e)t[r]=e[r];return t}const _="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function w(e,t){let r,n;for(let t=1;t<arguments.length;t++){for(r in n=arguments[t],n)e[r]=n[r];for(let t=0;t<_.length;t++)r=_[t],Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}}function E(e){var t=1;e=e.split(":");const r=[];for(;0<t&&e.length;)r.push(e.shift()),t--;return e.length&&r.push(e.join(":")),r}function I(e){i.setTimeout(()=>{throw e},0)}function S(){var e=x;let t=null;return e.g&&(t=e.g,e.g=e.g.next,e.g||(e.h=null),t.next=null),t}var T=new class{constructor(e,t){this.i=e,this.j=t,this.h=0,this.g=null}get(){let e;return 0<this.h?(this.h--,e=this.g,this.g=e.next,e.next=null):e=this.i(),e}}(()=>new C,e=>e.reset());class C{constructor(){this.next=this.g=this.h=null}set(e,t){this.h=e,this.g=t,this.next=null}reset(){this.next=this.g=this.h=null}}let A,k=!1,x=new class{constructor(){this.h=this.g=null}add(e,t){const r=T.get();r.set(e,t),this.h?this.h.next=r:this.g=r,this.h=r}},R=()=>{const e=i.Promise.resolve(void 0);A=()=>{e.then(P)}};var P=()=>{for(var e;e=S();){try{e.h.call(e.g)}catch(e){I(e)}var t=T;t.j(e),100>t.h&&(t.h++,e.next=t.g,t.g=e)}k=!1};function O(){this.s=this.s,this.C=this.C}function N(e,t){this.type=e,this.g=this.target=t,this.defaultPrevented=!1}O.prototype.s=!1,O.prototype.ma=function(){this.s||(this.s=!0,this.N())},O.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()},N.prototype.h=function(){this.defaultPrevented=!0};var D=function(){if(!i.addEventListener||!Object.defineProperty)return!1;var e=!1,t=Object.defineProperty({},"passive",{get:function(){e=!0}});try{const e=()=>{};i.addEventListener("test",e,t),i.removeEventListener("test",e,t)}catch(e){}return e}();function L(e,t){if(N.call(this,e?e.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,e){var r=this.type=e.type,n=e.changedTouches&&e.changedTouches.length?e.changedTouches[0]:null;if(this.target=e.target||e.srcElement,this.g=t,t=e.relatedTarget){if(v){e:{try{m(t.nodeName);var i=!0;break e}catch(e){}i=!1}i||(t=null)}}else"mouseover"==r?t=e.fromElement:"mouseout"==r&&(t=e.toElement);this.relatedTarget=t,n?(this.clientX=void 0!==n.clientX?n.clientX:n.pageX,this.clientY=void 0!==n.clientY?n.clientY:n.pageY,this.screenX=n.screenX||0,this.screenY=n.screenY||0):(this.clientX=void 0!==e.clientX?e.clientX:e.pageX,this.clientY=void 0!==e.clientY?e.clientY:e.pageY,this.screenX=e.screenX||0,this.screenY=e.screenY||0),this.button=e.button,this.key=e.key||"",this.ctrlKey=e.ctrlKey,this.altKey=e.altKey,this.shiftKey=e.shiftKey,this.metaKey=e.metaKey,this.pointerId=e.pointerId||0,this.pointerType="string"==typeof e.pointerType?e.pointerType:$[e.pointerType]||"",this.state=e.state,this.i=e,e.defaultPrevented&&L.aa.h.call(this)}}d(L,N);var $={2:"touch",3:"pen",4:"mouse"};L.prototype.h=function(){L.aa.h.call(this);var e=this.i;e.preventDefault?e.preventDefault():e.returnValue=!1};var U="closure_listenable_"+(1e6*Math.random()|0),M=0;function j(e,t,r,n,i){this.listener=e,this.proxy=null,this.src=t,this.type=r,this.capture=!!n,this.ha=i,this.key=++M,this.da=this.fa=!1}function F(e){e.da=!0,e.listener=null,e.proxy=null,e.src=null,e.ha=null}function V(e){this.src=e,this.g={},this.h=0}function z(e,t){var r=t.type;if(r in e.g){var n,i=e.g[r],s=Array.prototype.indexOf.call(i,t,void 0);(n=0<=s)&&Array.prototype.splice.call(i,s,1),n&&(F(t),0==e.g[r].length&&(delete e.g[r],e.h--))}}function B(e,t,r,n){for(var i=0;i<e.length;++i){var s=e[i];if(!s.da&&s.listener==t&&s.capture==!!r&&s.ha==n)return i}return-1}V.prototype.add=function(e,t,r,n,i){var s=e.toString();(e=this.g[s])||(e=this.g[s]=[],this.h++);var o=B(e,t,n,i);return-1<o?(t=e[o],r||(t.fa=!1)):((t=new j(t,this.src,s,!!n,i)).fa=r,e.push(t)),t};var H="closure_lm_"+(1e6*Math.random()|0),W={};function q(e,t,r,n,i){if(Array.isArray(t)){for(var s=0;s<t.length;s++)q(e,t[s],r,n,i);return null}return r=Q(r),e&&e[U]?e.K(t,r,!!o(n)&&!!n.capture,i):function(e,t,r,n,i,s){if(!t)throw Error("Invalid event type");var a=o(i)?!!i.capture:!!i,l=Y(e);if(l||(e[H]=l=new V(e)),r=l.add(t,r,n,a,s),r.proxy)return r;if(n=function(){function e(r){return t.call(e.src,e.listener,r)}const t=X;return e}(),r.proxy=n,n.src=e,n.listener=r,e.addEventListener)D||(i=a),void 0===i&&(i=!1),e.addEventListener(t.toString(),n,i);else if(e.attachEvent)e.attachEvent(J(t.toString()),n);else{if(!e.addListener||!e.removeListener)throw Error("addEventListener and attachEvent are unavailable.");e.addListener(n)}return r}(e,t,r,!1,n,i)}function G(e,t,r,n,i){if(Array.isArray(t))for(var s=0;s<t.length;s++)G(e,t[s],r,n,i);else n=o(n)?!!n.capture:!!n,r=Q(r),e&&e[U]?(e=e.i,(t=String(t).toString())in e.g&&(-1<(r=B(s=e.g[t],r,n,i))&&(F(s[r]),Array.prototype.splice.call(s,r,1),0==s.length&&(delete e.g[t],e.h--)))):e&&(e=Y(e))&&(t=e.g[t.toString()],e=-1,t&&(e=B(t,r,n,i)),(r=-1<e?t[e]:null)&&K(r))}function K(e){if("number"!=typeof e&&e&&!e.da){var t=e.src;if(t&&t[U])z(t.i,e);else{var r=e.type,n=e.proxy;t.removeEventListener?t.removeEventListener(r,n,e.capture):t.detachEvent?t.detachEvent(J(r),n):t.addListener&&t.removeListener&&t.removeListener(n),(r=Y(t))?(z(r,e),0==r.h&&(r.src=null,t[H]=null)):F(e)}}}function J(e){return e in W?W[e]:W[e]="on"+e}function X(e,t){if(e.da)e=!0;else{t=new L(t,this);var r=e.listener,n=e.ha||e.src;e.fa&&K(e),e=r.call(n,t)}return e}function Y(e){return(e=e[H])instanceof V?e:null}var Z="__closure_events_fn_"+(1e9*Math.random()>>>0);function Q(e){return"function"==typeof e?e:(e[Z]||(e[Z]=function(t){return e.handleEvent(t)}),e[Z])}function ee(){O.call(this),this.i=new V(this),this.M=this,this.F=null}function te(e,t){var r,n=e.F;if(n)for(r=[];n;n=n.F)r.push(n);if(e=e.M,n=t.type||t,"string"==typeof t)t=new N(t,e);else if(t instanceof N)t.target=t.target||e;else{var i=t;w(t=new N(n,e),i)}if(i=!0,r)for(var s=r.length-1;0<=s;s--){var o=t.g=r[s];i=re(o,n,!0,t)&&i}if(i=re(o=t.g=e,n,!0,t)&&i,i=re(o,n,!1,t)&&i,r)for(s=0;s<r.length;s++)i=re(o=t.g=r[s],n,!1,t)&&i}function re(e,t,r,n){if(!(t=e.i.g[String(t)]))return!0;t=t.concat();for(var i=!0,s=0;s<t.length;++s){var o=t[s];if(o&&!o.da&&o.capture==r){var a=o.listener,l=o.ha||o.src;o.fa&&z(e.i,o),i=!1!==a.call(l,n)&&i}}return i&&!n.defaultPrevented}function ne(e,t,r){if("function"==typeof e)r&&(e=c(e,r));else{if(!e||"function"!=typeof e.handleEvent)throw Error("Invalid listener argument");e=c(e.handleEvent,e)}return 2147483647<Number(t)?-1:i.setTimeout(e,t||0)}function ie(e){e.g=ne(()=>{e.g=null,e.i&&(e.i=!1,ie(e))},e.l);const t=e.h;e.h=null,e.m.apply(null,t)}d(ee,O),ee.prototype[U]=!0,ee.prototype.removeEventListener=function(e,t,r,n){G(this,e,t,r,n)},ee.prototype.N=function(){if(ee.aa.N.call(this),this.i){var e,t=this.i;for(e in t.g){for(var r=t.g[e],n=0;n<r.length;n++)F(r[n]);delete t.g[e],t.h--}}this.F=null},ee.prototype.K=function(e,t,r,n){return this.i.add(String(e),t,!1,r,n)},ee.prototype.L=function(e,t,r,n){return this.i.add(String(e),t,!0,r,n)};class se extends O{constructor(e,t){super(),this.m=e,this.l=t,this.h=null,this.i=!1,this.g=null}j(e){this.h=arguments,this.g?this.i=!0:ie(this)}N(){super.N(),this.g&&(i.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function oe(e){O.call(this),this.h=e,this.g={}}d(oe,O);var ae=[];function le(e){y(e.g,function(e,t){this.g.hasOwnProperty(t)&&K(e)},e),e.g={}}oe.prototype.N=function(){oe.aa.N.call(this),le(this)},oe.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var ce=i.JSON.stringify,he=i.JSON.parse,de=class{stringify(e){return i.JSON.stringify(e,void 0)}parse(e){return i.JSON.parse(e,void 0)}};function ue(){}function pe(e){return e.h||(e.h=e.i())}ue.prototype.h=null;var fe={OPEN:"a",kb:"b",Ja:"c",wb:"d"};function ge(){N.call(this,"d")}function me(){N.call(this,"c")}d(ge,N),d(me,N);var ve={},ye=null;function be(){return ye=ye||new ee}function _e(e){N.call(this,ve.La,e)}function we(e){const t=be();te(t,new _e(t))}function Ee(e,t){N.call(this,ve.STAT_EVENT,e),this.stat=t}function Ie(e){const t=be();te(t,new Ee(t,e))}function Se(e,t){N.call(this,ve.Ma,e),this.size=t}function Te(e,t){if("function"!=typeof e)throw Error("Fn must not be null and must be a function");return i.setTimeout(function(){e()},t)}function Ce(){this.g=!0}function Ae(e,t,r,n){e.info(function(){return"XMLHTTP TEXT ("+t+"): "+function(e,t){if(!e.g)return t;if(!t)return null;try{var r=JSON.parse(t);if(r)for(e=0;e<r.length;e++)if(Array.isArray(r[e])){var n=r[e];if(!(2>n.length)){var i=n[1];if(Array.isArray(i)&&!(1>i.length)){var s=i[0];if("noop"!=s&&"stop"!=s&&"close"!=s)for(var o=1;o<i.length;o++)i[o]=""}}}return ce(r)}catch(e){return t}}(e,r)+(n?" "+n:"")})}ve.La="serverreachability",d(_e,N),ve.STAT_EVENT="statevent",d(Ee,N),ve.Ma="timingevent",d(Se,N),Ce.prototype.xa=function(){this.g=!1},Ce.prototype.info=function(){};var ke,xe={NO_ERROR:0,TIMEOUT:8};function Re(){}function Pe(e,t,r,n){this.j=e,this.i=t,this.l=r,this.R=n||1,this.U=new oe(this),this.I=45e3,this.H=null,this.o=!1,this.m=this.A=this.v=this.L=this.F=this.S=this.B=null,this.D=[],this.g=null,this.C=0,this.s=this.u=null,this.X=-1,this.J=!1,this.O=0,this.M=null,this.W=this.K=this.T=this.P=!1,this.h=new Oe}function Oe(){this.i=null,this.g="",this.h=!1}d(Re,ue),Re.prototype.g=function(){return new XMLHttpRequest},Re.prototype.i=function(){return{}},ke=new Re;var Ne={},De={};function Le(e,t,r){e.L=1,e.v=at(rt(t)),e.m=r,e.P=!0,$e(e,null)}function $e(e,t){e.F=Date.now(),je(e),e.A=rt(e.v);var r=e.A,n=e.R;Array.isArray(n)||(n=[String(n)]),_t(r.i,"t",n),e.C=0,r=e.j.J,e.h=new Oe,e.g=ar(e.j,r?t:null,!e.m),0<e.O&&(e.M=new se(c(e.Y,e,e.g),e.O)),t=e.U,r=e.g,n=e.ca;var i="readystatechange";Array.isArray(i)||(i&&(ae[0]=i.toString()),i=ae);for(var s=0;s<i.length;s++){var o=q(r,i[s],n||t.handleEvent,!1,t.h||t);if(!o)break;t.g[o.key]=o}t=e.H?b(e.H):{},e.m?(e.u||(e.u="POST"),t["Content-Type"]="application/x-www-form-urlencoded",e.g.ea(e.A,e.u,e.m,t)):(e.u="GET",e.g.ea(e.A,e.u,null,t)),we(),function(e,t,r,n,i,s){e.info(function(){if(e.g)if(s)for(var o="",a=s.split("&"),l=0;l<a.length;l++){var c=a[l].split("=");if(1<c.length){var h=c[0];c=c[1];var d=h.split("_");o=2<=d.length&&"type"==d[1]?o+(h+"=")+c+"&":o+(h+"=redacted&")}}else o=null;else o=s;return"XMLHTTP REQ ("+n+") [attempt "+i+"]: "+t+"\n"+r+"\n"+o})}(e.i,e.u,e.A,e.l,e.R,e.m)}function Ue(e){return!!e.g&&("GET"==e.u&&2!=e.L&&e.j.Ca)}function Me(e,t){var r=e.C,n=t.indexOf("\n",r);return-1==n?De:(r=Number(t.substring(r,n)),isNaN(r)?Ne:(n+=1)+r>t.length?De:(t=t.slice(n,n+r),e.C=n+r,t))}function je(e){e.S=Date.now()+e.I,Fe(e,e.I)}function Fe(e,t){if(null!=e.B)throw Error("WatchDog timer not null");e.B=Te(c(e.ba,e),t)}function Ve(e){e.B&&(i.clearTimeout(e.B),e.B=null)}function ze(e){0==e.j.G||e.J||rr(e.j,e)}function Be(e){Ve(e);var t=e.M;t&&"function"==typeof t.ma&&t.ma(),e.M=null,le(e.U),e.g&&(t=e.g,e.g=null,t.abort(),t.ma())}function He(e,t){try{var r=e.j;if(0!=r.G&&(r.g==e||Je(r.h,e)))if(!e.K&&Je(r.h,e)&&3==r.G){try{var n=r.Da.g.parse(t)}catch(e){n=null}if(Array.isArray(n)&&3==n.length){var i=n;if(0==i[0]){e:if(!r.u){if(r.g){if(!(r.g.F+3e3<e.F))break e;tr(r),Wt(r)}Zt(r),Ie(18)}}else r.za=i[1],0<r.za-r.T&&37500>i[2]&&r.F&&0==r.v&&!r.C&&(r.C=Te(c(r.Za,r),6e3));if(1>=Ke(r.h)&&r.ca){try{r.ca()}catch(e){}r.ca=void 0}}else ir(r,11)}else if((e.K||r.g==e)&&tr(r),!f(t))for(i=r.Da.g.parse(t),t=0;t<i.length;t++){let c=i[t];if(r.T=c[0],c=c[1],2==r.G)if("c"==c[0]){r.K=c[1],r.ia=c[2];const t=c[3];null!=t&&(r.la=t,r.j.info("VER="+r.la));const i=c[4];null!=i&&(r.Aa=i,r.j.info("SVER="+r.Aa));const h=c[5];null!=h&&"number"==typeof h&&0<h&&(n=1.5*h,r.L=n,r.j.info("backChannelRequestTimeoutMs_="+n)),n=r;const d=e.g;if(d){const e=d.g?d.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(e){var s=n.h;s.g||-1==e.indexOf("spdy")&&-1==e.indexOf("quic")&&-1==e.indexOf("h2")||(s.j=s.l,s.g=new Set,s.h&&(Xe(s,s.h),s.h=null))}if(n.D){const e=d.g?d.g.getResponseHeader("X-HTTP-Session-Id"):null;e&&(n.ya=e,ot(n.I,n.D,e))}}r.G=3,r.l&&r.l.ua(),r.ba&&(r.R=Date.now()-e.F,r.j.info("Handshake RTT: "+r.R+"ms"));var o=e;if((n=r).qa=or(n,n.J?n.ia:null,n.W),o.K){Ye(n.h,o);var a=o,l=n.L;l&&(a.I=l),a.B&&(Ve(a),je(a)),n.g=o}else Yt(n);0<r.i.length&&Gt(r)}else"stop"!=c[0]&&"close"!=c[0]||ir(r,7);else 3==r.G&&("stop"==c[0]||"close"==c[0]?"stop"==c[0]?ir(r,7):Ht(r):"noop"!=c[0]&&r.l&&r.l.ta(c),r.v=0)}we()}catch(e){}}Pe.prototype.ca=function(e){e=e.target;const t=this.M;t&&3==Ft(e)?t.j():this.Y(e)},Pe.prototype.Y=function(e){try{if(e==this.g)e:{const u=Ft(this.g);var t=this.g.Ba();this.g.Z();if(!(3>u)&&(3!=u||this.g&&(this.h.h||this.g.oa()||Vt(this.g)))){this.J||4!=u||7==t||we(),Ve(this);var r=this.g.Z();this.X=r;t:if(Ue(this)){var n=Vt(this.g);e="";var s=n.length,o=4==Ft(this.g);if(!this.h.i){if("undefined"==typeof TextDecoder){Be(this),ze(this);var a="";break t}this.h.i=new i.TextDecoder}for(t=0;t<s;t++)this.h.h=!0,e+=this.h.i.decode(n[t],{stream:!(o&&t==s-1)});n.length=0,this.h.g+=e,this.C=0,a=this.h.g}else a=this.g.oa();if(this.o=200==r,function(e,t,r,n,i,s,o){e.info(function(){return"XMLHTTP RESP ("+n+") [ attempt "+i+"]: "+t+"\n"+r+"\n"+s+" "+o})}(this.i,this.u,this.A,this.l,this.R,u,r),this.o){if(this.T&&!this.K){t:{if(this.g){var l,c=this.g;if((l=c.g?c.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!f(l)){var h=l;break t}}h=null}if(!(r=h)){this.o=!1,this.s=3,Ie(12),Be(this),ze(this);break e}Ae(this.i,this.l,r,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,He(this,r)}if(this.P){let e;for(r=!0;!this.J&&this.C<a.length;){if(e=Me(this,a),e==De){4==u&&(this.s=4,Ie(14),r=!1),Ae(this.i,this.l,null,"[Incomplete Response]");break}if(e==Ne){this.s=4,Ie(15),Ae(this.i,this.l,a,"[Invalid Chunk]"),r=!1;break}Ae(this.i,this.l,e,null),He(this,e)}if(Ue(this)&&0!=this.C&&(this.h.g=this.h.g.slice(this.C),this.C=0),4!=u||0!=a.length||this.h.h||(this.s=1,Ie(16),r=!1),this.o=this.o&&r,r){if(0<a.length&&!this.W){this.W=!0;var d=this.j;d.g==this&&d.ba&&!d.M&&(d.j.info("Great, no buffering proxy detected. Bytes received: "+a.length),Qt(d),d.M=!0,Ie(11))}}else Ae(this.i,this.l,a,"[Invalid Chunked Response]"),Be(this),ze(this)}else Ae(this.i,this.l,a,null),He(this,a);4==u&&Be(this),this.o&&!this.J&&(4==u?rr(this.j,this):(this.o=!1,je(this)))}else(function(e){const t={};e=(e.g&&2<=Ft(e)&&e.g.getAllResponseHeaders()||"").split("\r\n");for(let n=0;n<e.length;n++){if(f(e[n]))continue;var r=E(e[n]);const i=r[0];if("string"!=typeof(r=r[1]))continue;r=r.trim();const s=t[i]||[];t[i]=s,s.push(r)}!function(e,t){for(const r in e)t.call(void 0,e[r],r,e)}(t,function(e){return e.join(", ")})})(this.g),400==r&&0<a.indexOf("Unknown SID")?(this.s=3,Ie(12)):(this.s=0,Ie(13)),Be(this),ze(this)}}}catch(e){}},Pe.prototype.cancel=function(){this.J=!0,Be(this)},Pe.prototype.ba=function(){this.B=null;const e=Date.now();0<=e-this.S?(function(e,t){e.info(function(){return"TIMEOUT: "+t})}(this.i,this.A),2!=this.L&&(we(),Ie(17)),Be(this),this.s=2,ze(this)):Fe(this,this.S-e)};var We=class{constructor(e,t){this.g=e,this.map=t}};function qe(e){this.l=e||10,i.PerformanceNavigationTiming?e=0<(e=i.performance.getEntriesByType("navigation")).length&&("hq"==e[0].nextHopProtocol||"h2"==e[0].nextHopProtocol):e=!!(i.chrome&&i.chrome.loadTimes&&i.chrome.loadTimes()&&i.chrome.loadTimes().wasFetchedViaSpdy),this.j=e?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}function Ge(e){return!!e.h||!!e.g&&e.g.size>=e.j}function Ke(e){return e.h?1:e.g?e.g.size:0}function Je(e,t){return e.h?e.h==t:!!e.g&&e.g.has(t)}function Xe(e,t){e.g?e.g.add(t):e.h=t}function Ye(e,t){e.h&&e.h==t?e.h=null:e.g&&e.g.has(t)&&e.g.delete(t)}function Ze(e){if(null!=e.h)return e.i.concat(e.h.D);if(null!=e.g&&0!==e.g.size){let t=e.i;for(const r of e.g.values())t=t.concat(r.D);return t}return u(e.i)}function Qe(e,t){if(e.forEach&&"function"==typeof e.forEach)e.forEach(t,void 0);else if(s(e)||"string"==typeof e)Array.prototype.forEach.call(e,t,void 0);else for(var r=function(e){if(e.na&&"function"==typeof e.na)return e.na();if(!e.V||"function"!=typeof e.V){if("undefined"!=typeof Map&&e instanceof Map)return Array.from(e.keys());if(!("undefined"!=typeof Set&&e instanceof Set)){if(s(e)||"string"==typeof e){var t=[];e=e.length;for(var r=0;r<e;r++)t.push(r);return t}t=[],r=0;for(const n in e)t[r++]=n;return t}}}(e),n=function(e){if(e.V&&"function"==typeof e.V)return e.V();if("undefined"!=typeof Map&&e instanceof Map||"undefined"!=typeof Set&&e instanceof Set)return Array.from(e.values());if("string"==typeof e)return e.split("");if(s(e)){for(var t=[],r=e.length,n=0;n<r;n++)t.push(e[n]);return t}for(n in t=[],r=0,e)t[r++]=e[n];return t}(e),i=n.length,o=0;o<i;o++)t.call(void 0,n[o],r&&r[o],e)}qe.prototype.cancel=function(){if(this.i=Ze(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&0!==this.g.size){for(const e of this.g.values())e.cancel();this.g.clear()}};var et=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function tt(e){if(this.g=this.o=this.j="",this.s=null,this.m=this.l="",this.h=!1,e instanceof tt){this.h=e.h,nt(this,e.j),this.o=e.o,this.g=e.g,it(this,e.s),this.l=e.l;var t=e.i,r=new mt;r.i=t.i,t.g&&(r.g=new Map(t.g),r.h=t.h),st(this,r),this.m=e.m}else e&&(t=String(e).match(et))?(this.h=!1,nt(this,t[1]||"",!0),this.o=lt(t[2]||""),this.g=lt(t[3]||"",!0),it(this,t[4]),this.l=lt(t[5]||"",!0),st(this,t[6]||"",!0),this.m=lt(t[7]||"")):(this.h=!1,this.i=new mt(null,this.h))}function rt(e){return new tt(e)}function nt(e,t,r){e.j=r?lt(t,!0):t,e.j&&(e.j=e.j.replace(/:$/,""))}function it(e,t){if(t){if(t=Number(t),isNaN(t)||0>t)throw Error("Bad port number "+t);e.s=t}else e.s=null}function st(e,t,r){t instanceof mt?(e.i=t,function(e,t){t&&!e.j&&(vt(e),e.i=null,e.g.forEach(function(e,t){var r=t.toLowerCase();t!=r&&(yt(this,t),_t(this,r,e))},e)),e.j=t}(e.i,e.h)):(r||(t=ct(t,ft)),e.i=new mt(t,e.h))}function ot(e,t,r){e.i.set(t,r)}function at(e){return ot(e,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),e}function lt(e,t){return e?t?decodeURI(e.replace(/%25/g,"%2525")):decodeURIComponent(e):""}function ct(e,t,r){return"string"==typeof e?(e=encodeURI(e).replace(t,ht),r&&(e=e.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),e):null}function ht(e){return"%"+((e=e.charCodeAt(0))>>4&15).toString(16)+(15&e).toString(16)}tt.prototype.toString=function(){var e=[],t=this.j;t&&e.push(ct(t,dt,!0),":");var r=this.g;return(r||"file"==t)&&(e.push("//"),(t=this.o)&&e.push(ct(t,dt,!0),"@"),e.push(encodeURIComponent(String(r)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),null!=(r=this.s)&&e.push(":",String(r))),(r=this.l)&&(this.g&&"/"!=r.charAt(0)&&e.push("/"),e.push(ct(r,"/"==r.charAt(0)?pt:ut,!0))),(r=this.i.toString())&&e.push("?",r),(r=this.m)&&e.push("#",ct(r,gt)),e.join("")};var dt=/[#\/\?@]/g,ut=/[#\?:]/g,pt=/[#\?]/g,ft=/[#\?@]/g,gt=/#/g;function mt(e,t){this.h=this.g=null,this.i=e||null,this.j=!!t}function vt(e){e.g||(e.g=new Map,e.h=0,e.i&&function(e,t){if(e){e=e.split("&");for(var r=0;r<e.length;r++){var n=e[r].indexOf("="),i=null;if(0<=n){var s=e[r].substring(0,n);i=e[r].substring(n+1)}else s=e[r];t(s,i?decodeURIComponent(i.replace(/\+/g," ")):"")}}}(e.i,function(t,r){e.add(decodeURIComponent(t.replace(/\+/g," ")),r)}))}function yt(e,t){vt(e),t=wt(e,t),e.g.has(t)&&(e.i=null,e.h-=e.g.get(t).length,e.g.delete(t))}function bt(e,t){return vt(e),t=wt(e,t),e.g.has(t)}function _t(e,t,r){yt(e,t),0<r.length&&(e.i=null,e.g.set(wt(e,t),u(r)),e.h+=r.length)}function wt(e,t){return t=String(t),e.j&&(t=t.toLowerCase()),t}function Et(e,t,r,n,i){try{i&&(i.onload=null,i.onerror=null,i.onabort=null,i.ontimeout=null),n(r)}catch(e){}}function It(){this.g=new de}function St(e,t,r){const n=r||"";try{Qe(e,function(e,r){let i=e;o(e)&&(i=ce(e)),t.push(n+r+"="+encodeURIComponent(i))})}catch(e){throw t.push(n+"type="+encodeURIComponent("_badmap")),e}}function Tt(e){this.l=e.Ub||null,this.j=e.eb||!1}function Ct(e,t){ee.call(this),this.D=e,this.o=t,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.u=new Headers,this.h=null,this.B="GET",this.A="",this.g=!1,this.v=this.j=this.l=null}function At(e){e.j.read().then(e.Pa.bind(e)).catch(e.ga.bind(e))}function kt(e){e.readyState=4,e.l=null,e.j=null,e.v=null,xt(e)}function xt(e){e.onreadystatechange&&e.onreadystatechange.call(e)}function Rt(e){let t="";return y(e,function(e,r){t+=r,t+=":",t+=e,t+="\r\n"}),t}function Pt(e,t,r){e:{for(n in r){var n=!1;break e}n=!0}n||(r=Rt(r),"string"==typeof e?null!=r&&encodeURIComponent(String(r)):ot(e,t,r))}function Ot(e){ee.call(this),this.headers=new Map,this.o=e||null,this.h=!1,this.v=this.g=null,this.D="",this.m=0,this.l="",this.j=this.B=this.u=this.A=!1,this.I=null,this.H="",this.J=!1}(e=mt.prototype).add=function(e,t){vt(this),this.i=null,e=wt(this,e);var r=this.g.get(e);return r||this.g.set(e,r=[]),r.push(t),this.h+=1,this},e.forEach=function(e,t){vt(this),this.g.forEach(function(r,n){r.forEach(function(r){e.call(t,r,n,this)},this)},this)},e.na=function(){vt(this);const e=Array.from(this.g.values()),t=Array.from(this.g.keys()),r=[];for(let n=0;n<t.length;n++){const i=e[n];for(let e=0;e<i.length;e++)r.push(t[n])}return r},e.V=function(e){vt(this);let t=[];if("string"==typeof e)bt(this,e)&&(t=t.concat(this.g.get(wt(this,e))));else{e=Array.from(this.g.values());for(let r=0;r<e.length;r++)t=t.concat(e[r])}return t},e.set=function(e,t){return vt(this),this.i=null,bt(this,e=wt(this,e))&&(this.h-=this.g.get(e).length),this.g.set(e,[t]),this.h+=1,this},e.get=function(e,t){return e&&0<(e=this.V(e)).length?String(e[0]):t},e.toString=function(){if(this.i)return this.i;if(!this.g)return"";const e=[],t=Array.from(this.g.keys());for(var r=0;r<t.length;r++){var n=t[r];const s=encodeURIComponent(String(n)),o=this.V(n);for(n=0;n<o.length;n++){var i=s;""!==o[n]&&(i+="="+encodeURIComponent(String(o[n]))),e.push(i)}}return this.i=e.join("&")},d(Tt,ue),Tt.prototype.g=function(){return new Ct(this.l,this.j)},Tt.prototype.i=function(e){return function(){return e}}({}),d(Ct,ee),(e=Ct.prototype).open=function(e,t){if(0!=this.readyState)throw this.abort(),Error("Error reopening a connection");this.B=e,this.A=t,this.readyState=1,xt(this)},e.send=function(e){if(1!=this.readyState)throw this.abort(),Error("need to call open() first. ");this.g=!0;const t={headers:this.u,method:this.B,credentials:this.m,cache:void 0};e&&(t.body=e),(this.D||i).fetch(new Request(this.A,t)).then(this.Sa.bind(this),this.ga.bind(this))},e.abort=function(){this.response=this.responseText="",this.u=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&4!=this.readyState&&(this.g=!1,kt(this)),this.readyState=0},e.Sa=function(e){if(this.g&&(this.l=e,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=e.headers,this.readyState=2,xt(this)),this.g&&(this.readyState=3,xt(this),this.g)))if("arraybuffer"===this.responseType)e.arrayBuffer().then(this.Qa.bind(this),this.ga.bind(this));else if(void 0!==i.ReadableStream&&"body"in e){if(this.j=e.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.v=new TextDecoder;At(this)}else e.text().then(this.Ra.bind(this),this.ga.bind(this))},e.Pa=function(e){if(this.g){if(this.o&&e.value)this.response.push(e.value);else if(!this.o){var t=e.value?e.value:new Uint8Array(0);(t=this.v.decode(t,{stream:!e.done}))&&(this.response=this.responseText+=t)}e.done?kt(this):xt(this),3==this.readyState&&At(this)}},e.Ra=function(e){this.g&&(this.response=this.responseText=e,kt(this))},e.Qa=function(e){this.g&&(this.response=e,kt(this))},e.ga=function(){this.g&&kt(this)},e.setRequestHeader=function(e,t){this.u.append(e,t)},e.getResponseHeader=function(e){return this.h&&this.h.get(e.toLowerCase())||""},e.getAllResponseHeaders=function(){if(!this.h)return"";const e=[],t=this.h.entries();for(var r=t.next();!r.done;)r=r.value,e.push(r[0]+": "+r[1]),r=t.next();return e.join("\r\n")},Object.defineProperty(Ct.prototype,"withCredentials",{get:function(){return"include"===this.m},set:function(e){this.m=e?"include":"same-origin"}}),d(Ot,ee);var Nt=/^https?$/i,Dt=["POST","PUT"];function Lt(e,t){e.h=!1,e.g&&(e.j=!0,e.g.abort(),e.j=!1),e.l=t,e.m=5,$t(e),Mt(e)}function $t(e){e.A||(e.A=!0,te(e,"complete"),te(e,"error"))}function Ut(e){if(e.h&&void 0!==n&&(!e.v[1]||4!=Ft(e)||2!=e.Z()))if(e.u&&4==Ft(e))ne(e.Ea,0,e);else if(te(e,"readystatechange"),4==Ft(e)){e.h=!1;try{const n=e.Z();e:switch(n){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var t=!0;break e;default:t=!1}var r;if(!(r=t)){var s;if(s=0===n){var o=String(e.D).match(et)[1]||null;!o&&i.self&&i.self.location&&(o=i.self.location.protocol.slice(0,-1)),s=!Nt.test(o?o.toLowerCase():"")}r=s}if(r)te(e,"complete"),te(e,"success");else{e.m=6;try{var a=2<Ft(e)?e.g.statusText:""}catch(e){a=""}e.l=a+" ["+e.Z()+"]",$t(e)}}finally{Mt(e)}}}function Mt(e,t){if(e.g){jt(e);const r=e.g,n=e.v[0]?()=>{}:null;e.g=null,e.v=null,t||te(e,"ready");try{r.onreadystatechange=n}catch(e){}}}function jt(e){e.I&&(i.clearTimeout(e.I),e.I=null)}function Ft(e){return e.g?e.g.readyState:0}function Vt(e){try{if(!e.g)return null;if("response"in e.g)return e.g.response;switch(e.H){case"":case"text":return e.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in e.g)return e.g.mozResponseArrayBuffer}return null}catch(e){return null}}function zt(e,t,r){return r&&r.internalChannelParams&&r.internalChannelParams[e]||t}function Bt(e){this.Aa=0,this.i=[],this.j=new Ce,this.ia=this.qa=this.I=this.W=this.g=this.ya=this.D=this.H=this.m=this.S=this.o=null,this.Ya=this.U=0,this.Va=zt("failFast",!1,e),this.F=this.C=this.u=this.s=this.l=null,this.X=!0,this.za=this.T=-1,this.Y=this.v=this.B=0,this.Ta=zt("baseRetryDelayMs",5e3,e),this.cb=zt("retryDelaySeedMs",1e4,e),this.Wa=zt("forwardChannelMaxRetries",2,e),this.wa=zt("forwardChannelRequestTimeoutMs",2e4,e),this.pa=e&&e.xmlHttpFactory||void 0,this.Xa=e&&e.Tb||void 0,this.Ca=e&&e.useFetchStreams||!1,this.L=void 0,this.J=e&&e.supportsCrossDomainXhr||!1,this.K="",this.h=new qe(e&&e.concurrentRequestLimit),this.Da=new It,this.P=e&&e.fastHandshake||!1,this.O=e&&e.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.Ua=e&&e.Rb||!1,e&&e.xa&&this.j.xa(),e&&e.forceLongPolling&&(this.X=!1),this.ba=!this.P&&this.X&&e&&e.detectBufferingProxy||!1,this.ja=void 0,e&&e.longPollingTimeout&&0<e.longPollingTimeout&&(this.ja=e.longPollingTimeout),this.ca=void 0,this.R=0,this.M=!1,this.ka=this.A=null}function Ht(e){if(qt(e),3==e.G){var t=e.U++,r=rt(e.I);if(ot(r,"SID",e.K),ot(r,"RID",t),ot(r,"TYPE","terminate"),Jt(e,r),(t=new Pe(e,e.j,t)).L=2,t.v=at(rt(r)),r=!1,i.navigator&&i.navigator.sendBeacon)try{r=i.navigator.sendBeacon(t.v.toString(),"")}catch(e){}!r&&i.Image&&((new Image).src=t.v,r=!0),r||(t.g=ar(t.j,null),t.g.ea(t.v)),t.F=Date.now(),je(t)}sr(e)}function Wt(e){e.g&&(Qt(e),e.g.cancel(),e.g=null)}function qt(e){Wt(e),e.u&&(i.clearTimeout(e.u),e.u=null),tr(e),e.h.cancel(),e.s&&("number"==typeof e.s&&i.clearTimeout(e.s),e.s=null)}function Gt(e){if(!Ge(e.h)&&!e.s){e.s=!0;var t=e.Ga;A||R(),k||(A(),k=!0),x.add(t,e),e.B=0}}function Kt(e,t){var r;r=t?t.l:e.U++;const n=rt(e.I);ot(n,"SID",e.K),ot(n,"RID",r),ot(n,"AID",e.T),Jt(e,n),e.m&&e.o&&Pt(n,e.m,e.o),r=new Pe(e,e.j,r,e.B+1),null===e.m&&(r.H=e.o),t&&(e.i=t.D.concat(e.i)),t=Xt(e,r,1e3),r.I=Math.round(.5*e.wa)+Math.round(.5*e.wa*Math.random()),Xe(e.h,r),Le(r,n,t)}function Jt(e,t){e.H&&y(e.H,function(e,r){ot(t,r,e)}),e.l&&Qe({},function(e,r){ot(t,r,e)})}function Xt(e,t,r){r=Math.min(e.i.length,r);var n=e.l?c(e.l.Na,e.l,e):null;e:{var i=e.i;let t=-1;for(;;){const e=["count="+r];-1==t?0<r?(t=i[0].g,e.push("ofs="+t)):t=0:e.push("ofs="+t);let s=!0;for(let o=0;o<r;o++){let r=i[o].g;const a=i[o].map;if(r-=t,0>r)t=Math.max(0,i[o].g-100),s=!1;else try{St(a,e,"req"+r+"_")}catch(e){n&&n(a)}}if(s){n=e.join("&");break e}}}return e=e.i.splice(0,r),t.D=e,n}function Yt(e){if(!e.g&&!e.u){e.Y=1;var t=e.Fa;A||R(),k||(A(),k=!0),x.add(t,e),e.v=0}}function Zt(e){return!(e.g||e.u||3<=e.v)&&(e.Y++,e.u=Te(c(e.Fa,e),nr(e,e.v)),e.v++,!0)}function Qt(e){null!=e.A&&(i.clearTimeout(e.A),e.A=null)}function er(e){e.g=new Pe(e,e.j,"rpc",e.Y),null===e.m&&(e.g.H=e.o),e.g.O=0;var t=rt(e.qa);ot(t,"RID","rpc"),ot(t,"SID",e.K),ot(t,"AID",e.T),ot(t,"CI",e.F?"0":"1"),!e.F&&e.ja&&ot(t,"TO",e.ja),ot(t,"TYPE","xmlhttp"),Jt(e,t),e.m&&e.o&&Pt(t,e.m,e.o),e.L&&(e.g.I=e.L);var r=e.g;e=e.ia,r.L=1,r.v=at(rt(t)),r.m=null,r.P=!0,$e(r,e)}function tr(e){null!=e.C&&(i.clearTimeout(e.C),e.C=null)}function rr(e,t){var r=null;if(e.g==t){tr(e),Qt(e),e.g=null;var n=2}else{if(!Je(e.h,t))return;r=t.D,Ye(e.h,t),n=1}if(0!=e.G)if(t.o)if(1==n){r=t.m?t.m.length:0,t=Date.now()-t.F;var i=e.B;te(n=be(),new Se(n,r)),Gt(e)}else Yt(e);else if(3==(i=t.s)||0==i&&0<t.X||!(1==n&&function(e,t){return!(Ke(e.h)>=e.h.j-(e.s?1:0)||(e.s?(e.i=t.D.concat(e.i),0):1==e.G||2==e.G||e.B>=(e.Va?0:e.Wa)||(e.s=Te(c(e.Ga,e,t),nr(e,e.B)),e.B++,0)))}(e,t)||2==n&&Zt(e)))switch(r&&0<r.length&&(t=e.h,t.i=t.i.concat(r)),i){case 1:ir(e,5);break;case 4:ir(e,10);break;case 3:ir(e,6);break;default:ir(e,2)}}function nr(e,t){let r=e.Ta+Math.floor(Math.random()*e.cb);return e.isActive()||(r*=2),r*t}function ir(e,t){if(e.j.info("Error code "+t),2==t){var r=c(e.fb,e),n=e.Xa;const t=!n;n=new tt(n||"//www.google.com/images/cleardot.gif"),i.location&&"http"==i.location.protocol||nt(n,"https"),at(n),t?function(e,t){const r=new Ce;if(i.Image){const n=new Image;n.onload=h(Et,r,"TestLoadImage: loaded",!0,t,n),n.onerror=h(Et,r,"TestLoadImage: error",!1,t,n),n.onabort=h(Et,r,"TestLoadImage: abort",!1,t,n),n.ontimeout=h(Et,r,"TestLoadImage: timeout",!1,t,n),i.setTimeout(function(){n.ontimeout&&n.ontimeout()},1e4),n.src=e}else t(!1)}(n.toString(),r):function(e,t){new Ce;const r=new AbortController,n=setTimeout(()=>{r.abort(),Et(0,0,!1,t)},1e4);fetch(e,{signal:r.signal}).then(e=>{clearTimeout(n),e.ok?Et(0,0,!0,t):Et(0,0,!1,t)}).catch(()=>{clearTimeout(n),Et(0,0,!1,t)})}(n.toString(),r)}else Ie(2);e.G=0,e.l&&e.l.sa(t),sr(e),qt(e)}function sr(e){if(e.G=0,e.ka=[],e.l){const t=Ze(e.h);0==t.length&&0==e.i.length||(p(e.ka,t),p(e.ka,e.i),e.h.i.length=0,u(e.i),e.i.length=0),e.l.ra()}}function or(e,t,r){var n=r instanceof tt?rt(r):new tt(r);if(""!=n.g)t&&(n.g=t+"."+n.g),it(n,n.s);else{var s=i.location;n=s.protocol,t=t?t+"."+s.hostname:s.hostname,s=+s.port;var o=new tt(null);n&&nt(o,n),t&&(o.g=t),s&&it(o,s),r&&(o.l=r),n=o}return r=e.D,t=e.ya,r&&t&&ot(n,r,t),ot(n,"VER",e.la),Jt(e,n),n}function ar(e,t,r){if(t&&!e.J)throw Error("Can't create secondary domain capable XhrIo object.");return(t=e.Ca&&!e.pa?new Ot(new Tt({eb:r})):new Ot(e.pa)).Ha(e.J),t}function lr(){}function cr(e,t){ee.call(this),this.g=new Bt(t),this.l=e,this.h=t&&t.messageUrlParams||null,e=t&&t.messageHeaders||null,t&&t.clientProtocolHeaderRequired&&(e?e["X-Client-Protocol"]="webchannel":e={"X-Client-Protocol":"webchannel"}),this.g.o=e,e=t&&t.initMessageHeaders||null,t&&t.messageContentType&&(e?e["X-WebChannel-Content-Type"]=t.messageContentType:e={"X-WebChannel-Content-Type":t.messageContentType}),t&&t.va&&(e?e["X-WebChannel-Client-Profile"]=t.va:e={"X-WebChannel-Client-Profile":t.va}),this.g.S=e,(e=t&&t.Sb)&&!f(e)&&(this.g.m=e),this.v=t&&t.supportsCrossDomainXhr||!1,this.u=t&&t.sendRawJson||!1,(t=t&&t.httpSessionIdParam)&&!f(t)&&(this.g.D=t,null!==(e=this.h)&&t in e&&(t in(e=this.h)&&delete e[t])),this.j=new ur(this)}function hr(e){ge.call(this),e.__headers__&&(this.headers=e.__headers__,this.statusCode=e.__status__,delete e.__headers__,delete e.__status__);var t=e.__sm__;if(t){e:{for(const r in t){e=r;break e}e=void 0}(this.i=e)&&(e=this.i,t=null!==t&&e in t?t[e]:void 0),this.data=t}else this.data=e}function dr(){me.call(this),this.status=1}function ur(e){this.g=e}(e=Ot.prototype).Ha=function(e){this.J=e},e.ea=function(e,t,r,n){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+e);t=t?t.toUpperCase():"GET",this.D=e,this.l="",this.m=0,this.A=!1,this.h=!0,this.g=this.o?this.o.g():ke.g(),this.v=this.o?pe(this.o):pe(ke),this.g.onreadystatechange=c(this.Ea,this);try{this.B=!0,this.g.open(t,String(e),!0),this.B=!1}catch(e){return void Lt(this,e)}if(e=r||"",r=new Map(this.headers),n)if(Object.getPrototypeOf(n)===Object.prototype)for(var s in n)r.set(s,n[s]);else{if("function"!=typeof n.keys||"function"!=typeof n.get)throw Error("Unknown input type for opt_headers: "+String(n));for(const e of n.keys())r.set(e,n.get(e))}n=Array.from(r.keys()).find(e=>"content-type"==e.toLowerCase()),s=i.FormData&&e instanceof i.FormData,!(0<=Array.prototype.indexOf.call(Dt,t,void 0))||n||s||r.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[e,t]of r)this.g.setRequestHeader(e,t);this.H&&(this.g.responseType=this.H),"withCredentials"in this.g&&this.g.withCredentials!==this.J&&(this.g.withCredentials=this.J);try{jt(this),this.u=!0,this.g.send(e),this.u=!1}catch(e){Lt(this,e)}},e.abort=function(e){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.m=e||7,te(this,"complete"),te(this,"abort"),Mt(this))},e.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),Mt(this,!0)),Ot.aa.N.call(this)},e.Ea=function(){this.s||(this.B||this.u||this.j?Ut(this):this.bb())},e.bb=function(){Ut(this)},e.isActive=function(){return!!this.g},e.Z=function(){try{return 2<Ft(this)?this.g.status:-1}catch(e){return-1}},e.oa=function(){try{return this.g?this.g.responseText:""}catch(e){return""}},e.Oa=function(e){if(this.g){var t=this.g.responseText;return e&&0==t.indexOf(e)&&(t=t.substring(e.length)),he(t)}},e.Ba=function(){return this.m},e.Ka=function(){return"string"==typeof this.l?this.l:String(this.l)},(e=Bt.prototype).la=8,e.G=1,e.connect=function(e,t,r,n){Ie(0),this.W=e,this.H=t||{},r&&void 0!==n&&(this.H.OSID=r,this.H.OAID=n),this.F=this.X,this.I=or(this,null,this.W),Gt(this)},e.Ga=function(e){if(this.s)if(this.s=null,1==this.G){if(!e){this.U=Math.floor(1e5*Math.random()),e=this.U++;const i=new Pe(this,this.j,e);let s=this.o;if(this.S&&(s?(s=b(s),w(s,this.S)):s=this.S),null!==this.m||this.O||(i.H=s,s=null),this.P)e:{for(var t=0,r=0;r<this.i.length;r++){var n=this.i[r];if(void 0===(n="__data__"in n.map&&"string"==typeof(n=n.map.__data__)?n.length:void 0))break;if(4096<(t+=n)){t=r;break e}if(4096===t||r===this.i.length-1){t=r+1;break e}}t=1e3}else t=1e3;t=Xt(this,i,t),ot(r=rt(this.I),"RID",e),ot(r,"CVER",22),this.D&&ot(r,"X-HTTP-Session-Id",this.D),Jt(this,r),s&&(this.O?t="headers="+encodeURIComponent(String(Rt(s)))+"&"+t:this.m&&Pt(r,this.m,s)),Xe(this.h,i),this.Ua&&ot(r,"TYPE","init"),this.P?(ot(r,"$req",t),ot(r,"SID","null"),i.T=!0,Le(i,r,null)):Le(i,r,t),this.G=2}}else 3==this.G&&(e?Kt(this,e):0==this.i.length||Ge(this.h)||Kt(this))},e.Fa=function(){if(this.u=null,er(this),this.ba&&!(this.M||null==this.g||0>=this.R)){var e=2*this.R;this.j.info("BP detection timer enabled: "+e),this.A=Te(c(this.ab,this),e)}},e.ab=function(){this.A&&(this.A=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.M=!0,Ie(10),Wt(this),er(this))},e.Za=function(){null!=this.C&&(this.C=null,Wt(this),Zt(this),Ie(19))},e.fb=function(e){e?(this.j.info("Successfully pinged google.com"),Ie(2)):(this.j.info("Failed to ping google.com"),Ie(1))},e.isActive=function(){return!!this.l&&this.l.isActive(this)},(e=lr.prototype).ua=function(){},e.ta=function(){},e.sa=function(){},e.ra=function(){},e.isActive=function(){return!0},e.Na=function(){},d(cr,ee),cr.prototype.m=function(){this.g.l=this.j,this.v&&(this.g.J=!0),this.g.connect(this.l,this.h||void 0)},cr.prototype.close=function(){Ht(this.g)},cr.prototype.o=function(e){var t=this.g;if("string"==typeof e){var r={};r.__data__=e,e=r}else this.u&&((r={}).__data__=ce(e),e=r);t.i.push(new We(t.Ya++,e)),3==t.G&&Gt(t)},cr.prototype.N=function(){this.g.l=null,delete this.j,Ht(this.g),delete this.g,cr.aa.N.call(this)},d(hr,ge),d(dr,me),d(ur,lr),ur.prototype.ua=function(){te(this.g,"a")},ur.prototype.ta=function(e){te(this.g,new hr(e))},ur.prototype.sa=function(e){te(this.g,new dr)},ur.prototype.ra=function(){te(this.g,"b")},cr.prototype.send=cr.prototype.o,cr.prototype.open=cr.prototype.m,cr.prototype.close=cr.prototype.close,xe.NO_ERROR=0,xe.TIMEOUT=8,xe.HTTP_ERROR=6,fe.OPEN="a",fe.CLOSE="b",fe.ERROR="c",fe.MESSAGE="d",ee.prototype.listen=ee.prototype.K,Ot.prototype.listenOnce=Ot.prototype.L,Ot.prototype.getLastError=Ot.prototype.Ka,Ot.prototype.getLastErrorCode=Ot.prototype.Ba,Ot.prototype.getStatus=Ot.prototype.Z,Ot.prototype.getResponseJson=Ot.prototype.Oa,Ot.prototype.getResponseText=Ot.prototype.oa,Ot.prototype.send=Ot.prototype.ea,Ot.prototype.setWithCredentials=Ot.prototype.Ha}).apply(void 0!==fo?fo:"undefined"!=typeof self?self:"undefined"!=typeof window?window:{});const go="@firebase/firestore",mo="4.8.0";
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
 */class vo{constructor(e){this.uid=e}isAuthenticated(){return null!=this.uid}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}vo.UNAUTHENTICATED=new vo(null),vo.GOOGLE_CREDENTIALS=new vo("google-credentials-uid"),vo.FIRST_PARTY=new vo("first-party-uid"),vo.MOCK_USER=new vo("mock-user");
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
let yo="11.10.0";
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
 */const bo=new $t("@firebase/firestore");function _o(e,...t){if(bo.logLevel<=Pt.DEBUG){const r=t.map(Eo);bo.debug(`Firestore (${yo}): ${e}`,...r)}}function wo(e,...t){if(bo.logLevel<=Pt.ERROR){const r=t.map(Eo);bo.error(`Firestore (${yo}): ${e}`,...r)}}function Eo(e){if("string"==typeof e)return e;try{
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
return function(e){return JSON.stringify(e)}(e)}catch(t){return e}}
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
 */function Io(e,t,r){let n="Unexpected state";"string"==typeof t?n=t:r=t,So(e,n,r)}function So(e,t,r){let n=`FIRESTORE (${yo}) INTERNAL ASSERTION FAILED: ${t} (ID: ${e.toString(16)})`;if(void 0!==r)try{n+=" CONTEXT: "+JSON.stringify(r)}catch(e){n+=" CONTEXT: "+r}throw wo(n),new Error(n)}function To(e,t,r,n){let i="Unexpected state";"string"==typeof r?i=r:n=r,e||So(t,i,n)}
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
 */const Co="cancelled",Ao="invalid-argument",ko="failed-precondition";class xo extends mt{constructor(e,t){super(e,t),this.code=e,this.message=t,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}
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
 */class Ro{constructor(){this.promise=new Promise((e,t)=>{this.resolve=e,this.reject=t})}}
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
 */class Po{constructor(e,t){this.user=t,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class Oo{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,t){e.enqueueRetryable(()=>t(vo.UNAUTHENTICATED))}shutdown(){}}class No{constructor(e){this.t=e,this.currentUser=vo.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,t){To(void 0===this.o,42304);let r=this.i;const n=e=>this.i!==r?(r=this.i,t(e)):Promise.resolve();let i=new Ro;this.o=()=>{this.i++,this.currentUser=this.u(),i.resolve(),i=new Ro,e.enqueueRetryable(()=>n(this.currentUser))};const s=()=>{const t=i;e.enqueueRetryable(async()=>{await t.promise,await n(this.currentUser)})},o=e=>{_o("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=e,this.o&&(this.auth.addAuthTokenListener(this.o),s())};this.t.onInit(e=>o(e)),setTimeout(()=>{if(!this.auth){const e=this.t.getImmediate({optional:!0});e?o(e):(_o("FirebaseAuthCredentialsProvider","Auth not yet detected"),i.resolve(),i=new Ro)}},0),s()}getToken(){const e=this.i,t=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(t).then(t=>this.i!==e?(_o("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):t?(To("string"==typeof t.accessToken,31837,{l:t}),new Po(t.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.o&&this.auth.removeAuthTokenListener(this.o),this.o=void 0}u(){const e=this.auth&&this.auth.getUid();return To(null===e||"string"==typeof e,2055,{h:e}),new vo(e)}}class Do{constructor(e,t,r){this.P=e,this.T=t,this.I=r,this.type="FirstParty",this.user=vo.FIRST_PARTY,this.A=new Map}R(){return this.I?this.I():null}get headers(){this.A.set("X-Goog-AuthUser",this.P);const e=this.R();return e&&this.A.set("Authorization",e),this.T&&this.A.set("X-Goog-Iam-Authorization-Token",this.T),this.A}}class Lo{constructor(e,t,r){this.P=e,this.T=t,this.I=r}getToken(){return Promise.resolve(new Do(this.P,this.T,this.I))}start(e,t){e.enqueueRetryable(()=>t(vo.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class $o{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class Uo{constructor(e,t){this.V=t,this.forceRefresh=!1,this.appCheck=null,this.m=null,this.p=null,Ur(e)&&e.settings.appCheckToken&&(this.p=e.settings.appCheckToken)}start(e,t){To(void 0===this.o,3512);const r=e=>{null!=e.error&&_o("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${e.error.message}`);const r=e.token!==this.m;return this.m=e.token,_o("FirebaseAppCheckTokenProvider",`Received ${r?"new":"existing"} token.`),r?t(e.token):Promise.resolve()};this.o=t=>{e.enqueueRetryable(()=>r(t))};const n=e=>{_o("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=e,this.o&&this.appCheck.addTokenListener(this.o)};this.V.onInit(e=>n(e)),setTimeout(()=>{if(!this.appCheck){const e=this.V.getImmediate({optional:!0});e?n(e):_o("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){if(this.p)return Promise.resolve(new $o(this.p));const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(e=>e?(To("string"==typeof e.token,44558,{tokenResult:e}),this.m=e.token,new $o(e.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.o&&this.appCheck.removeTokenListener(this.o),this.o=void 0}}
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
 */function Mo(e){const t="undefined"!=typeof self&&(self.crypto||self.msCrypto),r=new Uint8Array(e);if(t&&"function"==typeof t.getRandomValues)t.getRandomValues(r);else for(let t=0;t<e;t++)r[t]=Math.floor(256*Math.random());return r}
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
 */function jo(){return new TextEncoder}
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
 */class Fo{static newId(){const e=62*Math.floor(256/62);let t="";for(;t.length<20;){const r=Mo(40);for(let n=0;n<r.length;++n)t.length<20&&r[n]<e&&(t+="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789".charAt(r[n]%62))}return t}}function Vo(e,t){return e<t?-1:e>t?1:0}function zo(e,t){return e.codePointAt(t)>65535?e.substring(t,t+2):e.substring(t,t+1)}function Bo(e,t){for(let r=0;r<e.length&&r<t.length;++r)if(e[r]!==t[r])return Vo(e[r],t[r]);return Vo(e.length,t.length)}
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
 */const Ho="__name__";class Wo{constructor(e,t,r){void 0===t?t=0:t>e.length&&Io(637,{offset:t,range:e.length}),void 0===r?r=e.length-t:r>e.length-t&&Io(1746,{length:r,range:e.length-t}),this.segments=e,this.offset=t,this.len=r}get length(){return this.len}isEqual(e){return 0===Wo.comparator(this,e)}child(e){const t=this.segments.slice(this.offset,this.limit());return e instanceof Wo?e.forEach(e=>{t.push(e)}):t.push(e),this.construct(t)}limit(){return this.offset+this.length}popFirst(e){return e=void 0===e?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return 0===this.length}isPrefixOf(e){if(e.length<this.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}forEach(e){for(let t=this.offset,r=this.limit();t<r;t++)e(this.segments[t])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,t){const r=Math.min(e.length,t.length);for(let n=0;n<r;n++){const r=Wo.compareSegments(e.get(n),t.get(n));if(0!==r)return r}return Vo(e.length,t.length)}static compareSegments(e,t){const r=Wo.isNumericId(e),n=Wo.isNumericId(t);return r&&!n?-1:!r&&n?1:r&&n?Wo.extractNumericId(e).compare(Wo.extractNumericId(t)):function(e,t){let r=0;for(;r<e.length&&r<t.length;){const n=e.codePointAt(r),i=t.codePointAt(r);if(n!==i){if(n<128&&i<128)return Vo(n,i);{const s=jo(),o=Bo(s.encode(zo(e,r)),s.encode(zo(t,r)));return 0!==o?o:Vo(n,i)}}r+=n>65535?2:1}return Vo(e.length,t.length)}(e,t)}static isNumericId(e){return e.startsWith("__id")&&e.endsWith("__")}static extractNumericId(e){return uo.fromString(e.substring(4,e.length-2))}}class qo extends Wo{construct(e,t,r){return new qo(e,t,r)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...e){const t=[];for(const r of e){if(r.indexOf("//")>=0)throw new xo(Ao,`Invalid segment (${r}). Paths must not contain // in them.`);t.push(...r.split("/").filter(e=>e.length>0))}return new qo(t)}static emptyPath(){return new qo([])}}const Go=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class Ko extends Wo{construct(e,t,r){return new Ko(e,t,r)}static isValidIdentifier(e){return Go.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),Ko.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return 1===this.length&&this.get(0)===Ho}static keyField(){return new Ko([Ho])}static fromServerFormat(e){const t=[];let r="",n=0;const i=()=>{if(0===r.length)throw new xo(Ao,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);t.push(r),r=""};let s=!1;for(;n<e.length;){const t=e[n];if("\\"===t){if(n+1===e.length)throw new xo(Ao,"Path has trailing escape character: "+e);const t=e[n+1];if("\\"!==t&&"."!==t&&"`"!==t)throw new xo(Ao,"Path has invalid escape sequence: "+e);r+=t,n+=2}else"`"===t?(s=!s,n++):"."!==t||s?(r+=t,n++):(i(),n++)}if(i(),s)throw new xo(Ao,"Unterminated ` in path: "+e);return new Ko(t)}static emptyPath(){return new Ko([])}}
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
 */class Jo{constructor(e){this.path=e}static fromPath(e){return new Jo(qo.fromString(e))}static fromName(e){return new Jo(qo.fromString(e).popFirst(5))}static empty(){return new Jo(qo.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return null!==e&&0===qo.comparator(this.path,e.path)}toString(){return this.path.toString()}static comparator(e,t){return qo.comparator(e.path,t.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new Jo(new qo(e.slice()))}}
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
function Xo(e,t){const r={typeString:e};return t&&(r.value=t),r}function Yo(e,t){if(!function(e){return"object"==typeof e&&null!==e&&(Object.getPrototypeOf(e)===Object.prototype||null===Object.getPrototypeOf(e))}(e))throw new xo(Ao,"JSON must be an object");let r;for(const n in t)if(t[n]){const i=t[n].typeString,s="value"in t[n]?{value:t[n].value}:void 0;if(!(n in e)){r=`JSON missing required field: '${n}'`;break}const o=e[n];if(i&&typeof o!==i){r=`JSON field '${n}' must be a ${i}.`;break}if(void 0!==s&&o!==s.value){r=`Expected '${n}' field to equal '${s.value}'`;break}}if(r)throw new xo(Ao,r);return!0}
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
 */const Zo=-62135596800,Qo=1e6;class ea{static now(){return ea.fromMillis(Date.now())}static fromDate(e){return ea.fromMillis(e.getTime())}static fromMillis(e){const t=Math.floor(e/1e3),r=Math.floor((e-1e3*t)*Qo);return new ea(t,r)}constructor(e,t){if(this.seconds=e,this.nanoseconds=t,t<0)throw new xo(Ao,"Timestamp nanoseconds out of range: "+t);if(t>=1e9)throw new xo(Ao,"Timestamp nanoseconds out of range: "+t);if(e<Zo)throw new xo(Ao,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new xo(Ao,"Timestamp seconds out of range: "+e)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/Qo}_compareTo(e){return this.seconds===e.seconds?Vo(this.nanoseconds,e.nanoseconds):Vo(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{type:ea._jsonSchemaVersion,seconds:this.seconds,nanoseconds:this.nanoseconds}}static fromJSON(e){if(Yo(e,ea._jsonSchema))return new ea(e.seconds,e.nanoseconds)}valueOf(){const e=this.seconds-Zo;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}ea._jsonSchemaVersion="firestore/timestamp/1.0",ea._jsonSchema={type:Xo("string",ea._jsonSchemaVersion),seconds:Xo("number"),nanoseconds:Xo("number")};
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
class ta extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}
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
 */class ra{constructor(e){this.binaryString=e}static fromBase64String(e){const t=function(e){try{return atob(e)}catch(e){throw"undefined"!=typeof DOMException&&e instanceof DOMException?new ta("Invalid base64 string: "+e):e}}(e);return new ra(t)}static fromUint8Array(e){const t=function(e){let t="";for(let r=0;r<e.length;++r)t+=String.fromCharCode(e[r]);return t}(e);return new ra(t)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return function(e){return btoa(e)}(this.binaryString)}toUint8Array(){return function(e){const t=new Uint8Array(e.length);for(let r=0;r<e.length;r++)t[r]=e.charCodeAt(r);return t}
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
 */(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return Vo(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}ra.EMPTY_BYTE_STRING=new ra("");const na="(default)";class ia{constructor(e,t){this.projectId=e,this.database=t||na}static empty(){return new ia("","")}get isDefaultDatabase(){return this.database===na}isEqual(e){return e instanceof ia&&e.projectId===this.projectId&&e.database===this.database}}
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
 */class sa{constructor(e,t=null,r=[],n=[],i=null,s="F",o=null,a=null){this.path=e,this.collectionGroup=t,this.explicitOrderBy=r,this.filters=n,this.limit=i,this.limitType=s,this.startAt=o,this.endAt=a,this.Te=null,this.Ie=null,this.de=null,this.startAt,this.endAt}}
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
var oa,aa;(aa=oa||(oa={}))[aa.OK=0]="OK",aa[aa.CANCELLED=1]="CANCELLED",aa[aa.UNKNOWN=2]="UNKNOWN",aa[aa.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",aa[aa.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",aa[aa.NOT_FOUND=5]="NOT_FOUND",aa[aa.ALREADY_EXISTS=6]="ALREADY_EXISTS",aa[aa.PERMISSION_DENIED=7]="PERMISSION_DENIED",aa[aa.UNAUTHENTICATED=16]="UNAUTHENTICATED",aa[aa.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",aa[aa.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",aa[aa.ABORTED=10]="ABORTED",aa[aa.OUT_OF_RANGE=11]="OUT_OF_RANGE",aa[aa.UNIMPLEMENTED=12]="UNIMPLEMENTED",aa[aa.INTERNAL=13]="INTERNAL",aa[aa.UNAVAILABLE=14]="UNAVAILABLE",aa[aa.DATA_LOSS=15]="DATA_LOSS",
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
new uo([4294967295,4294967295],0);function la(){return"undefined"!=typeof document?document:null}
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
 */class ca{constructor(e,t,r=1e3,n=1.5,i=6e4){this.Fi=e,this.timerId=t,this.d_=r,this.E_=n,this.A_=i,this.R_=0,this.V_=null,this.m_=Date.now(),this.reset()}reset(){this.R_=0}f_(){this.R_=this.A_}g_(e){this.cancel();const t=Math.floor(this.R_+this.p_()),r=Math.max(0,Date.now()-this.m_),n=Math.max(0,t-r);n>0&&_o("ExponentialBackoff",`Backing off for ${n} ms (base delay: ${this.R_} ms, delay with jitter: ${t} ms, last attempt: ${r} ms ago)`),this.V_=this.Fi.enqueueAfterDelay(this.timerId,n,()=>(this.m_=Date.now(),e())),this.R_*=this.E_,this.R_<this.d_&&(this.R_=this.d_),this.R_>this.A_&&(this.R_=this.A_)}y_(){null!==this.V_&&(this.V_.skipDelay(),this.V_=null)}cancel(){null!==this.V_&&(this.V_.cancel(),this.V_=null)}p_(){return(Math.random()-.5)*this.R_}}
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
 */class ha{constructor(e,t,r,n,i){this.asyncQueue=e,this.timerId=t,this.targetTimeMs=r,this.op=n,this.removalCallback=i,this.deferred=new Ro,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(e=>{})}get promise(){return this.deferred.promise}static createAndSchedule(e,t,r,n,i){const s=Date.now()+r,o=new ha(e,t,s,n,i);return o.start(r),o}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){null!==this.timerHandle&&(this.clearTimeout(),this.deferred.reject(new xo(Co,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>null!==this.timerHandle?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){null!==this.timerHandle&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}var da,ua;(ua=da||(da={})).Fa="default",ua.Cache="cache";
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
const pa=new Map,fa=!0;
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
 */class ga{constructor(e){var t,r;if(void 0===e.host){if(void 0!==e.ssl)throw new xo(Ao,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=fa}else this.host=e.host,this.ssl=null!==(t=e.ssl)&&void 0!==t?t:fa;if(this.isUsingEmulator=void 0!==e.emulatorOptions,this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,void 0===e.cacheSizeBytes)this.cacheSizeBytes=41943040;else{if(-1!==e.cacheSizeBytes&&e.cacheSizeBytes<1048576)throw new xo(Ao,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}(function(e,t,r,n){if(!0===t&&!0===n)throw new xo(Ao,`${e} and ${r} cannot be used together.`)})("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:void 0===e.experimentalAutoDetectLongPolling?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=
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
function(e){const t={};return void 0!==e.timeoutSeconds&&(t.timeoutSeconds=e.timeoutSeconds),t}(null!==(r=e.experimentalLongPollingOptions)&&void 0!==r?r:{}),function(e){if(void 0!==e.timeoutSeconds){if(isNaN(e.timeoutSeconds))throw new xo(Ao,`invalid long polling timeout: ${e.timeoutSeconds} (must not be NaN)`);if(e.timeoutSeconds<5)throw new xo(Ao,`invalid long polling timeout: ${e.timeoutSeconds} (minimum allowed value is 5)`);if(e.timeoutSeconds>30)throw new xo(Ao,`invalid long polling timeout: ${e.timeoutSeconds} (maximum allowed value is 30)`)}}
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
 */(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&function(e,t){return e.timeoutSeconds===t.timeoutSeconds}(this.experimentalLongPollingOptions,e.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}class ma{constructor(e,t,r,n){this._authCredentials=e,this._appCheckCredentials=t,this._databaseId=r,this._app=n,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new ga({}),this._settingsFrozen=!1,this._emulatorOptions={},this._terminateTask="notTerminated"}get app(){if(!this._app)throw new xo(ko,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return"notTerminated"!==this._terminateTask}_setSettings(e){if(this._settingsFrozen)throw new xo(ko,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new ga(e),this._emulatorOptions=e.emulatorOptions||{},void 0!==e.credentials&&(this._authCredentials=function(e){if(!e)return new Oo;switch(e.type){case"firstParty":return new Lo(e.sessionIndex||"0",e.iamToken||null,e.authTokenFactory||null);case"provider":return e.client;default:throw new xo(Ao,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_getEmulatorOptions(){return this._emulatorOptions}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return"notTerminated"===this._terminateTask&&(this._terminateTask=this._terminate()),this._terminateTask}async _restart(){"notTerminated"===this._terminateTask?await this._terminate():this._terminateTask="notTerminated"}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(e){const t=pa.get(e);t&&(_o("ComponentProvider","Removing Datastore"),pa.delete(e),t.terminate())}(this),Promise.resolve()}}
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
 */class va{constructor(e,t,r){this.converter=t,this._query=r,this.type="query",this.firestore=e}withConverter(e){return new va(this.firestore,e,this._query)}}class ya{constructor(e,t,r){this.converter=t,this._key=r,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new ba(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new ya(this.firestore,e,this._key)}toJSON(){return{type:ya._jsonSchemaVersion,referencePath:this._key.toString()}}static fromJSON(e,t,r){if(Yo(t,ya._jsonSchema))return new ya(e,r||null,new Jo(qo.fromString(t.referencePath)))}}ya._jsonSchemaVersion="firestore/documentReference/1.0",ya._jsonSchema={type:Xo("string",ya._jsonSchemaVersion),referencePath:Xo("string")};class ba extends va{constructor(e,t,r){super(e,t,function(e){return new sa(e)}(r)),this._path=r,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new ya(this.firestore,null,new Jo(e))}withConverter(e){return new ba(this.firestore,e,this._path)}}
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
 */const _a="AsyncQueue";class wa{constructor(e=Promise.resolve()){this.Zu=[],this.Xu=!1,this.ec=[],this.tc=null,this.nc=!1,this.rc=!1,this.sc=[],this.F_=new ca(this,"async_queue_retry"),this.oc=()=>{const e=la();e&&_o(_a,"Visibility state changed to "+e.visibilityState),this.F_.y_()},this._c=e;const t=la();t&&"function"==typeof t.addEventListener&&t.addEventListener("visibilitychange",this.oc)}get isShuttingDown(){return this.Xu}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.ac(),this.uc(e)}enterRestrictedMode(e){if(!this.Xu){this.Xu=!0,this.rc=e||!1;const t=la();t&&"function"==typeof t.removeEventListener&&t.removeEventListener("visibilitychange",this.oc)}}enqueue(e){if(this.ac(),this.Xu)return new Promise(()=>{});const t=new Ro;return this.uc(()=>this.Xu&&this.rc?Promise.resolve():(e().then(t.resolve,t.reject),t.promise)).then(()=>t.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.Zu.push(e),this.cc()))}async cc(){if(0!==this.Zu.length){try{await this.Zu[0](),this.Zu.shift(),this.F_.reset()}catch(e){if(!function(e){return"IndexedDbTransactionError"===e.name}(e))throw e;_o(_a,"Operation failed with retryable error: "+e)}this.Zu.length>0&&this.F_.g_(()=>this.cc())}}uc(e){const t=this._c.then(()=>(this.nc=!0,e().catch(e=>{throw this.tc=e,this.nc=!1,wo("INTERNAL UNHANDLED ERROR: ",Ea(e)),e}).then(e=>(this.nc=!1,e))));return this._c=t,t}enqueueAfterDelay(e,t,r){this.ac(),this.sc.indexOf(e)>-1&&(t=0);const n=ha.createAndSchedule(this,e,t,r,e=>this.lc(e));return this.ec.push(n),n}ac(){this.tc&&Io(47125,{hc:Ea(this.tc)})}verifyOperationInProgress(){}async Pc(){let e;do{e=this._c,await e}while(e!==this._c)}Tc(e){for(const t of this.ec)if(t.timerId===e)return!0;return!1}Ic(e){return this.Pc().then(()=>{this.ec.sort((e,t)=>e.targetTimeMs-t.targetTimeMs);for(const t of this.ec)if(t.skipDelay(),"all"!==e&&t.timerId===e)break;return this.Pc()})}dc(e){this.sc.push(e)}lc(e){const t=this.ec.indexOf(e);this.ec.splice(t,1)}}function Ea(e){let t=e.message||"";return e.stack&&(t=e.stack.includes(e.message)?e.stack:e.message+"\n"+e.stack),t}class Ia extends ma{constructor(e,t,r,n){super(e,t,r,n),this.type="firestore",this._queue=new wa,this._persistenceKey=(null==n?void 0:n.name)||"[DEFAULT]"}async _terminate(){if(this._firestoreClient){const e=this._firestoreClient.terminate();this._queue=new wa(e),this._firestoreClient=void 0,await e}}}
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
 */class Sa{constructor(e){this._byteString=e}static fromBase64String(e){try{return new Sa(ra.fromBase64String(e))}catch(e){throw new xo(Ao,"Failed to construct data from Base64 string: "+e)}}static fromUint8Array(e){return new Sa(ra.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}toJSON(){return{type:Sa._jsonSchemaVersion,bytes:this.toBase64()}}static fromJSON(e){if(Yo(e,Sa._jsonSchema))return Sa.fromBase64String(e.bytes)}}Sa._jsonSchemaVersion="firestore/bytes/1.0",Sa._jsonSchema={type:Xo("string",Sa._jsonSchemaVersion),bytes:Xo("string")};
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
class Ta{constructor(...e){for(let t=0;t<e.length;++t)if(0===e[t].length)throw new xo(Ao,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new Ko(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}
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
 */class Ca{constructor(e,t){if(!isFinite(e)||e<-90||e>90)throw new xo(Ao,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(t)||t<-180||t>180)throw new xo(Ao,"Longitude must be a number between -180 and 180, but was: "+t);this._lat=e,this._long=t}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}_compareTo(e){return Vo(this._lat,e._lat)||Vo(this._long,e._long)}toJSON(){return{latitude:this._lat,longitude:this._long,type:Ca._jsonSchemaVersion}}static fromJSON(e){if(Yo(e,Ca._jsonSchema))return new Ca(e.latitude,e.longitude)}}Ca._jsonSchemaVersion="firestore/geoPoint/1.0",Ca._jsonSchema={type:Xo("string",Ca._jsonSchemaVersion),latitude:Xo("number"),longitude:Xo("number")};
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
class Aa{constructor(e){this._values=(e||[]).map(e=>e)}toArray(){return this._values.map(e=>e)}isEqual(e){return function(e,t){if(e.length!==t.length)return!1;for(let r=0;r<e.length;++r)if(e[r]!==t[r])return!1;return!0}(this._values,e._values)}toJSON(){return{type:Aa._jsonSchemaVersion,vectorValues:this._values}}static fromJSON(e){if(Yo(e,Aa._jsonSchema)){if(Array.isArray(e.vectorValues)&&e.vectorValues.every(e=>"number"==typeof e))return new Aa(e.vectorValues);throw new xo(Ao,"Expected 'vectorValues' field to be a number array")}}}Aa._jsonSchemaVersion="firestore/vectorValue/1.0",Aa._jsonSchema={type:Xo("string",Aa._jsonSchemaVersion),vectorValues:Xo("object")};const ka=new RegExp("[~\\*/\\[\\]]");function xa(e,t,r,n,i){let s=`Function ${t}() called with invalid data`;s+=". ";return new xo(Ao,s+e+"")}
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
 */class Ra{constructor(e,t,r,n,i){this._firestore=e,this._userDataWriter=t,this._key=r,this._document=n,this._converter=i}get id(){return this._key.path.lastSegment()}get ref(){return new ya(this._firestore,this._converter,this._key)}exists(){return null!==this._document}data(){if(this._document){if(this._converter){const e=new Pa(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const t=this._document.data.field(Oa("DocumentSnapshot.get",e));if(null!==t)return this._userDataWriter.convertValue(t)}}}class Pa extends Ra{data(){return super.data()}}function Oa(e,t){return"string"==typeof t?function(e,t){if(t.search(ka)>=0)throw xa(`Invalid field path (${t}). Paths must not contain '~', '*', '/', '[', or ']'`,e);try{return new Ta(...t.split("."))._internalPath}catch(r){throw xa(`Invalid field path (${t}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,e)}}(e,t):t instanceof Ta?t._internalPath:t._delegate._internalPath}class Na{constructor(e,t){this.hasPendingWrites=e,this.fromCache=t}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class Da extends Ra{constructor(e,t,r,n,i,s){super(e,t,r,n,s),this._firestore=e,this._firestoreImpl=e,this.metadata=i}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const t=new La(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(t,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,t={}){if(this._document){const r=this._document.data.field(Oa("DocumentSnapshot.get",e));if(null!==r)return this._userDataWriter.convertValue(r,t.serverTimestamps)}}toJSON(){if(this.metadata.hasPendingWrites)throw new xo(ko,"DocumentSnapshot.toJSON() attempted to serialize a document with pending writes. Await waitForPendingWrites() before invoking toJSON().");const e=this._document,t={};return t.type=Da._jsonSchemaVersion,t.bundle="",t.bundleSource="DocumentSnapshot",t.bundleName=this._key.toString(),e&&e.isValidDocument()&&e.isFoundDocument()?(this._userDataWriter.convertObjectMap(e.data.value.mapValue.fields,"previous"),t.bundle=(this._firestore,this.ref.path,"NOT SUPPORTED"),t):t}}Da._jsonSchemaVersion="firestore/documentSnapshot/1.0",Da._jsonSchema={type:Xo("string",Da._jsonSchemaVersion),bundleSource:Xo("string","DocumentSnapshot"),bundleName:Xo("string"),bundle:Xo("string")};class La extends Da{data(e={}){return super.data(e)}}class $a{constructor(e,t,r,n){this._firestore=e,this._userDataWriter=t,this._snapshot=n,this.metadata=new Na(n.hasPendingWrites,n.fromCache),this.query=r}get docs(){const e=[];return this.forEach(t=>e.push(t)),e}get size(){return this._snapshot.docs.size}get empty(){return 0===this.size}forEach(e,t){this._snapshot.docs.forEach(r=>{e.call(t,new La(this._firestore,this._userDataWriter,r.key,r,new Na(this._snapshot.mutatedKeys.has(r.key),this._snapshot.fromCache),this.query.converter))})}docChanges(e={}){const t=!!e.includeMetadataChanges;if(t&&this._snapshot.excludesMetadataChanges)throw new xo(Ao,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===t||(this._cachedChanges=function(e,t){if(e._snapshot.oldDocs.isEmpty()){let t=0;return e._snapshot.docChanges.map(r=>{const n=new La(e._firestore,e._userDataWriter,r.doc.key,r.doc,new Na(e._snapshot.mutatedKeys.has(r.doc.key),e._snapshot.fromCache),e.query.converter);return r.doc,{type:"added",doc:n,oldIndex:-1,newIndex:t++}})}{let r=e._snapshot.oldDocs;return e._snapshot.docChanges.filter(e=>t||3!==e.type).map(t=>{const n=new La(e._firestore,e._userDataWriter,t.doc.key,t.doc,new Na(e._snapshot.mutatedKeys.has(t.doc.key),e._snapshot.fromCache),e.query.converter);let i=-1,s=-1;return 0!==t.type&&(i=r.indexOf(t.doc.key),r=r.delete(t.doc.key)),1!==t.type&&(r=r.add(t.doc),s=r.indexOf(t.doc.key)),{type:Ua(t.type),doc:n,oldIndex:i,newIndex:s}})}}(this,t),this._cachedChangesIncludeMetadataChanges=t),this._cachedChanges}toJSON(){if(this.metadata.hasPendingWrites)throw new xo(ko,"QuerySnapshot.toJSON() attempted to serialize a document with pending writes. Await waitForPendingWrites() before invoking toJSON().");const e={};e.type=$a._jsonSchemaVersion,e.bundleSource="QuerySnapshot",e.bundleName=Fo.newId(),this._firestore._databaseId.database,this._firestore._databaseId.projectId;const t=[],r=[],n=[];return this.docs.forEach(e=>{null!==e._document&&(t.push(e._document),r.push(this._userDataWriter.convertObjectMap(e._document.data.value.mapValue.fields,"previous")),n.push(e.ref.path))}),e.bundle=(this._firestore,this.query._query,e.bundleName,"NOT SUPPORTED"),e}}function Ua(e){switch(e){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return Io(61501,{type:e})}}$a._jsonSchemaVersion="firestore/querySnapshot/1.0",$a._jsonSchema={type:Xo("string",$a._jsonSchemaVersion),bundleSource:Xo("string","QuerySnapshot"),bundleName:Xo("string"),bundle:Xo("string")},function(e,t=!0){!function(e){yo=e}(Fr),Lr(new At("firestore",(e,{instanceIdentifier:r,options:n})=>{const i=e.getProvider("app").getImmediate(),s=new Ia(new No(e.getProvider("auth-internal")),new Uo(i,e.getProvider("app-check-internal")),function(e,t){if(!Object.prototype.hasOwnProperty.apply(e.options,["projectId"]))throw new xo(Ao,'"projectId" not provided in firebase.initializeApp.');return new ia(e.options.projectId,t)}(i,r),i);return n=Object.assign({useFetchStreams:t},n),s._setSettings(n),s},"PUBLIC").setMultipleInstances(!0)),Br(go,mo,e),Br(go,mo,"esm2017")}();
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
const Ma="firebasestorage.googleapis.com";
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
class ja extends mt{constructor(e,t,r=0){super(za(e),`Firebase Storage: ${t} (${za(e)})`),this.status_=r,this.customData={serverResponse:null},this._baseMessage=this.message,Object.setPrototypeOf(this,ja.prototype)}get status(){return this.status_}set status(e){this.status_=e}_codeEquals(e){return za(e)===this.code}get serverResponse(){return this.customData.serverResponse}set serverResponse(e){this.customData.serverResponse=e,this.customData.serverResponse?this.message=`${this._baseMessage}\n${this.customData.serverResponse}`:this.message=this._baseMessage}}var Fa,Va;function za(e){return"storage/"+e}function Ba(e){return new ja(Fa.INVALID_ARGUMENT,e)}function Ha(){return new ja(Fa.APP_DELETED,"The Firebase app was deleted.")}!function(e){e.UNKNOWN="unknown",e.OBJECT_NOT_FOUND="object-not-found",e.BUCKET_NOT_FOUND="bucket-not-found",e.PROJECT_NOT_FOUND="project-not-found",e.QUOTA_EXCEEDED="quota-exceeded",e.UNAUTHENTICATED="unauthenticated",e.UNAUTHORIZED="unauthorized",e.UNAUTHORIZED_APP="unauthorized-app",e.RETRY_LIMIT_EXCEEDED="retry-limit-exceeded",e.INVALID_CHECKSUM="invalid-checksum",e.CANCELED="canceled",e.INVALID_EVENT_NAME="invalid-event-name",e.INVALID_URL="invalid-url",e.INVALID_DEFAULT_BUCKET="invalid-default-bucket",e.NO_DEFAULT_BUCKET="no-default-bucket",e.CANNOT_SLICE_BLOB="cannot-slice-blob",e.SERVER_FILE_WRONG_SIZE="server-file-wrong-size",e.NO_DOWNLOAD_URL="no-download-url",e.INVALID_ARGUMENT="invalid-argument",e.INVALID_ARGUMENT_COUNT="invalid-argument-count",e.APP_DELETED="app-deleted",e.INVALID_ROOT_OPERATION="invalid-root-operation",e.INVALID_FORMAT="invalid-format",e.INTERNAL_ERROR="internal-error",e.UNSUPPORTED_ENVIRONMENT="unsupported-environment"}(Fa||(Fa={}));
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
class Wa{constructor(e,t){this.bucket=e,this.path_=t}get path(){return this.path_}get isRoot(){return 0===this.path.length}fullServerUrl(){const e=encodeURIComponent;return"/b/"+e(this.bucket)+"/o/"+e(this.path)}bucketOnlyServerUrl(){return"/b/"+encodeURIComponent(this.bucket)+"/o"}static makeFromBucketSpec(e,t){let r;try{r=Wa.makeFromUrl(e,t)}catch(t){return new Wa(e,"")}if(""===r.path)return r;throw n=e,new ja(Fa.INVALID_DEFAULT_BUCKET,"Invalid default bucket '"+n+"'.");var n}static makeFromUrl(e,t){let r=null;const n="([A-Za-z0-9.\\-_]+)";const i=new RegExp("^gs://"+n+"(/(.*))?$","i");function s(e){e.path_=decodeURIComponent(e.path)}const o=t.replace(/[.]/g,"\\."),a=[{regex:i,indices:{bucket:1,path:3},postModify:function(e){"/"===e.path.charAt(e.path.length-1)&&(e.path_=e.path_.slice(0,-1))}},{regex:new RegExp(`^https?://${o}/v[A-Za-z0-9_]+/b/${n}/o(/([^?#]*).*)?$`,"i"),indices:{bucket:1,path:3},postModify:s},{regex:new RegExp(`^https?://${t===Ma?"(?:storage.googleapis.com|storage.cloud.google.com)":t}/${n}/([^?#]*)`,"i"),indices:{bucket:1,path:2},postModify:s}];for(let t=0;t<a.length;t++){const n=a[t],i=n.regex.exec(e);if(i){const e=i[n.indices.bucket];let t=i[n.indices.path];t||(t=""),r=new Wa(e,t),n.postModify(r);break}}if(null==r)throw function(e){return new ja(Fa.INVALID_URL,"Invalid URL '"+e+"'.")}(e);return r}}class qa{constructor(e){this.promise_=Promise.reject(e)}getPromise(){return this.promise_}cancel(e=!1){}}
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
 */function Ga(e,t,r,n){if(n<t)throw Ba(`Invalid value for '${e}'. Expected ${t} or greater.`);if(n>r)throw Ba(`Invalid value for '${e}'. Expected ${r} or less.`)}!function(e){e[e.NO_ERROR=0]="NO_ERROR",e[e.NETWORK_ERROR=1]="NETWORK_ERROR",e[e.ABORT=2]="ABORT"}(Va||(Va={}));
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
class Ka{constructor(e,t,r,n,i,s,o,a,l,c,h,d=!0,u=!1){this.url_=e,this.method_=t,this.headers_=r,this.body_=n,this.successCodes_=i,this.additionalRetryCodes_=s,this.callback_=o,this.errorCallback_=a,this.timeout_=l,this.progressCallback_=c,this.connectionFactory_=h,this.retry=d,this.isUsingEmulator=u,this.pendingConnection_=null,this.backoffId_=null,this.canceled_=!1,this.appDelete_=!1,this.promise_=new Promise((e,t)=>{this.resolve_=e,this.reject_=t,this.start_()})}start_(){const e=(e,t)=>{if(t)return void e(!1,new Ja(!1,null,!0));const r=this.connectionFactory_();this.pendingConnection_=r;const n=e=>{const t=e.loaded,r=e.lengthComputable?e.total:-1;null!==this.progressCallback_&&this.progressCallback_(t,r)};null!==this.progressCallback_&&r.addUploadProgressListener(n),r.send(this.url_,this.method_,this.isUsingEmulator,this.body_,this.headers_).then(()=>{null!==this.progressCallback_&&r.removeUploadProgressListener(n),this.pendingConnection_=null;const t=r.getErrorCode()===Va.NO_ERROR,i=r.getStatus();if(!t||
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
function(e,t){const r=e>=500&&e<600,n=-1!==[408,429].indexOf(e),i=-1!==t.indexOf(e);return r||n||i}(i,this.additionalRetryCodes_)&&this.retry){const t=r.getErrorCode()===Va.ABORT;return void e(!1,new Ja(!1,null,t))}const s=-1!==this.successCodes_.indexOf(i);e(!0,new Ja(s,r))})},t=(e,t)=>{const r=this.resolve_,n=this.reject_,i=t.connection;if(t.wasSuccessCode)try{const e=this.callback_(i,i.getResponse());!
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
function(e){return void 0!==e}(e)?r():r(e)}catch(e){n(e)}else if(null!==i){const e=new ja(Fa.UNKNOWN,"An unknown error occurred, please check the error payload for server response.");e.serverResponse=i.getErrorText(),this.errorCallback_?n(this.errorCallback_(i,e)):n(e)}else if(t.canceled){n(this.appDelete_?Ha():new ja(Fa.CANCELED,"User canceled the upload/download."))}else{n(new ja(Fa.RETRY_LIMIT_EXCEEDED,"Max retry time for operation exceeded, please try again."))}};this.canceled_?t(0,new Ja(!1,null,!0)):this.backoffId_=function(e,t,r){let n=1,i=null,s=null,o=!1,a=0;function l(){return 2===a}let c=!1;function h(...e){c||(c=!0,t.apply(null,e))}function d(t){i=setTimeout(()=>{i=null,e(p,l())},t)}function u(){s&&clearTimeout(s)}function p(e,...t){if(c)return void u();if(e)return u(),void h.call(null,e,...t);if(l()||o)return u(),void h.call(null,e,...t);let r;n<64&&(n*=2),1===a?(a=2,r=0):r=1e3*(n+Math.random()),d(r)}let f=!1;function g(e){f||(f=!0,u(),c||(null!==i?(e||(a=2),clearTimeout(i),d(0)):e||(a=1)))}return d(0),s=setTimeout(()=>{o=!0,g(!0)},r),g}(e,t,this.timeout_)}getPromise(){return this.promise_}cancel(e){this.canceled_=!0,this.appDelete_=e||!1,null!==this.backoffId_&&(0,this.backoffId_)(!1),null!==this.pendingConnection_&&this.pendingConnection_.abort()}}class Ja{constructor(e,t,r){this.wasSuccessCode=e,this.connection=t,this.canceled=!!r}}function Xa(e,t,r,n,i,s,o=!0,a=!1){const l=function(e){const t=encodeURIComponent;let r="?";for(const n in e)e.hasOwnProperty(n)&&(r=r+(t(n)+"=")+t(e[n])+"&");return r=r.slice(0,-1),r}(e.urlParams),c=e.url+l,h=Object.assign({},e.headers);return function(e,t){t&&(e["X-Firebase-GMPID"]=t)}(h,t),function(e,t){null!==t&&t.length>0&&(e.Authorization="Firebase "+t)}(h,r),function(e,t){e["X-Firebase-Storage-Version"]="webjs/"+(null!=t?t:"AppManager")}(h,s),function(e,t){null!==t&&(e["X-Firebase-AppCheck"]=t)}(h,n),new Ka(c,e.method,h,e.body,e.successCodes,e.additionalRetryCodes,e.handler,e.errorHandler,e.timeout,e.progressCallback,i,o,a)}
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
class Ya{constructor(e,t){this._service=e,this._location=t instanceof Wa?t:Wa.makeFromUrl(t,e.host)}toString(){return"gs://"+this._location.bucket+"/"+this._location.path}_newRef(e,t){return new Ya(e,t)}get root(){const e=new Wa(this._location.bucket,"");return this._newRef(this._service,e)}get bucket(){return this._location.bucket}get fullPath(){return this._location.path}get name(){return function(e){const t=e.lastIndexOf("/",e.length-2);return-1===t?e:e.slice(t+1)}(this._location.path)}get storage(){return this._service}get parent(){const e=function(e){if(0===e.length)return null;const t=e.lastIndexOf("/");return-1===t?"":e.slice(0,t)}(this._location.path);if(null===e)return null;const t=new Wa(this._location.bucket,e);return new Ya(this._service,t)}_throwIfRoot(e){if(""===this._location.path)throw function(e){return new ja(Fa.INVALID_ROOT_OPERATION,"The operation '"+e+"' cannot be performed on a root reference, create a non-root reference using child, such as .child('file.png').")}(e)}}function Za(e,t){const r=null==t?void 0:t.storageBucket;return null==r?null:Wa.makeFromBucketSpec(r,e)}class Qa{constructor(e,t,r,n,i,s=!1){this.app=e,this._authProvider=t,this._appCheckProvider=r,this._url=n,this._firebaseVersion=i,this._isUsingEmulator=s,this._bucket=null,this._host=Ma,this._protocol="https",this._appId=null,this._deleted=!1,this._maxOperationRetryTime=12e4,this._maxUploadRetryTime=6e5,this._requests=new Set,this._bucket=null!=n?Wa.makeFromBucketSpec(n,this._host):Za(this._host,this.app.options)}get host(){return this._host}set host(e){this._host=e,null!=this._url?this._bucket=Wa.makeFromBucketSpec(this._url,e):this._bucket=Za(e,this.app.options)}get maxUploadRetryTime(){return this._maxUploadRetryTime}set maxUploadRetryTime(e){Ga("time",0,Number.POSITIVE_INFINITY,e),this._maxUploadRetryTime=e}get maxOperationRetryTime(){return this._maxOperationRetryTime}set maxOperationRetryTime(e){Ga("time",0,Number.POSITIVE_INFINITY,e),this._maxOperationRetryTime=e}async _getAuthToken(){if(this._overrideAuthToken)return this._overrideAuthToken;const e=this._authProvider.getImmediate({optional:!0});if(e){const t=await e.getToken();if(null!==t)return t.accessToken}return null}async _getAppCheckToken(){if(Ur(this.app)&&this.app.settings.appCheckToken)return this.app.settings.appCheckToken;const e=this._appCheckProvider.getImmediate({optional:!0});if(e){return(await e.getToken()).token}return null}_delete(){return this._deleted||(this._deleted=!0,this._requests.forEach(e=>e.cancel()),this._requests.clear()),Promise.resolve()}_makeStorageReference(e){return new Ya(this,e)}_makeRequest(e,t,r,n,i=!0){if(this._deleted)return new qa(Ha());{const s=Xa(e,this._appId,r,n,t,this._firebaseVersion,i,this._isUsingEmulator);return this._requests.add(s),s.getPromise().then(()=>this._requests.delete(s),()=>this._requests.delete(s)),s}}async makeRequestWithTokens(e,t){const[r,n]=await Promise.all([this._getAuthToken(),this._getAppCheckToken()]);return this._makeRequest(e,t,r,n).getPromise()}}const el="@firebase/storage",tl="0.13.14";function rl(e,{instanceIdentifier:t}){const r=e.getProvider("app").getImmediate(),n=e.getProvider("auth-internal"),i=e.getProvider("app-check-internal");return new Qa(r,n,i,t,Fr)}Lr(new At("storage",rl,"PUBLIC").setMultipleInstances(!0)),Br(el,tl,""),Br(el,tl,"esm2017");function nl(e,t){const r={};for(const n in e)e.hasOwnProperty(n)&&(r[n]=t(e[n]));return r}function il(e){if(null==e)return null;if(e instanceof Number&&(e=e.valueOf()),"number"==typeof e&&isFinite(e))return e;if(!0===e||!1===e)return e;if("[object String]"===Object.prototype.toString.call(e))return e;if(e instanceof Date)return e.toISOString();if(Array.isArray(e))return e.map(e=>il(e));if("function"==typeof e||"object"==typeof e)return nl(e,e=>il(e));throw new Error("Data cannot be encoded in JSON: "+e)}function sl(e){if(null==e)return e;if(e["@type"])switch(e["@type"]){case"type.googleapis.com/google.protobuf.Int64Value":case"type.googleapis.com/google.protobuf.UInt64Value":{const t=Number(e.value);if(isNaN(t))throw new Error("Data cannot be decoded from JSON: "+e);return t}default:throw new Error("Data cannot be decoded from JSON: "+e)}return Array.isArray(e)?e.map(e=>sl(e)):"function"==typeof e||"object"==typeof e?nl(e,e=>sl(e)):e}
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
 */const ol="functions",al={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};
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
 */class ll extends mt{constructor(e,t,r){super(`${ol}/${e}`,t||""),this.details=r,Object.setPrototypeOf(this,ll.prototype)}}function cl(e,t){let r,n=function(e){if(e>=200&&e<300)return"ok";switch(e){case 0:case 500:return"internal";case 400:return"invalid-argument";case 401:return"unauthenticated";case 403:return"permission-denied";case 404:return"not-found";case 409:return"aborted";case 429:return"resource-exhausted";case 499:return"cancelled";case 501:return"unimplemented";case 503:return"unavailable";case 504:return"deadline-exceeded"}return"unknown"}(e),i=n;try{const e=t&&t.error;if(e){const t=e.status;if("string"==typeof t){if(!al[t])return new ll("internal","internal");n=al[t],i=t}const s=e.message;"string"==typeof s&&(i=s),r=e.details,void 0!==r&&(r=sl(r))}}catch(e){}return"ok"===n?null:new ll(n,i,r)}
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
 */class hl{constructor(e,t,r,n){this.app=e,this.auth=null,this.messaging=null,this.appCheck=null,this.serverAppAppCheckToken=null,Ur(e)&&e.settings.appCheckToken&&(this.serverAppAppCheckToken=e.settings.appCheckToken),this.auth=t.getImmediate({optional:!0}),this.messaging=r.getImmediate({optional:!0}),this.auth||t.get().then(e=>this.auth=e,()=>{}),this.messaging||r.get().then(e=>this.messaging=e,()=>{}),this.appCheck||null==n||n.get().then(e=>this.appCheck=e,()=>{})}async getAuthToken(){if(this.auth)try{const e=await this.auth.getToken();return null==e?void 0:e.accessToken}catch(e){return}}async getMessagingToken(){if(this.messaging&&"Notification"in self&&"granted"===Notification.permission)try{return await this.messaging.getToken()}catch(e){return}}async getAppCheckToken(e){if(this.serverAppAppCheckToken)return this.serverAppAppCheckToken;if(this.appCheck){const t=e?await this.appCheck.getLimitedUseToken():await this.appCheck.getToken();return t.error?null:t.token}return null}async getContext(e){return{authToken:await this.getAuthToken(),messagingToken:await this.getMessagingToken(),appCheckToken:await this.getAppCheckToken(e)}}}
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
 */const dl="us-central1",ul=/^data: (.*?)(?:\n|$)/;class pl{constructor(e,t,r,n,i=dl,s=(...e)=>fetch(...e)){this.app=e,this.fetchImpl=s,this.emulatorOrigin=null,this.contextProvider=new hl(e,t,r,n),this.cancelAllRequests=new Promise(e=>{this.deleteService=()=>Promise.resolve(e())});try{const e=new URL(i);this.customDomain=e.origin+("/"===e.pathname?"":e.pathname),this.region=dl}catch(e){this.customDomain=null,this.region=i}}_delete(){return this.deleteService()}_url(e){const t=this.app.options.projectId;if(null!==this.emulatorOrigin){return`${this.emulatorOrigin}/${t}/${this.region}/${e}`}return null!==this.customDomain?`${this.customDomain}/${e}`:`https://${this.region}-${t}.cloudfunctions.net/${e}`}}function fl(e,t,r){const n=r=>function(e,t,r,n){const i=e._url(t);return async function(e,t,r,n){r=il(r);const i={data:r},s=await ml(e,n),o=n.timeout||7e4,a=function(e){let t=null;return{promise:new Promise((r,n)=>{t=setTimeout(()=>{n(new ll("deadline-exceeded","deadline-exceeded"))},e)}),cancel:()=>{t&&clearTimeout(t)}}}(o),l=await Promise.race([gl(t,i,s,e.fetchImpl),a.promise,e.cancelAllRequests]);if(a.cancel(),!l)throw new ll("cancelled","Firebase Functions instance was deleted.");const c=cl(l.status,l.json);if(c)throw c;if(!l.json)throw new ll("internal","Response is not valid JSON object.");let h=l.json.data;void 0===h&&(h=l.json.result);if(void 0===h)throw new ll("internal","Response is missing data field.");return{data:sl(h)}}(e,i,r,n)}(e,t,r,{});return n.stream=(r,n)=>function(e,t,r,n){const i=e._url(t);return async function(e,t,r,n){var i;r=il(r);const s={data:r},o=await ml(e,n);let a,l,c;o["Content-Type"]="application/json",o.Accept="text/event-stream";try{a=await e.fetchImpl(t,{method:"POST",body:JSON.stringify(s),headers:o,signal:null==n?void 0:n.signal})}catch(e){if(e instanceof Error&&"AbortError"===e.name){const e=new ll("cancelled","Request was cancelled.");return{data:Promise.reject(e),stream:{[Symbol.asyncIterator]:()=>({next:()=>Promise.reject(e)})}}}const t=cl(0,null);return{data:Promise.reject(t),stream:{[Symbol.asyncIterator]:()=>({next:()=>Promise.reject(t)})}}}const h=new Promise((e,t)=>{l=e,c=t});null===(i=null==n?void 0:n.signal)||void 0===i||i.addEventListener("abort",()=>{const e=new ll("cancelled","Request was cancelled.");c(e)});const d=function(e,t,r,n){const i=(e,n)=>{const i=e.match(ul);if(!i)return;const s=i[1];try{const e=JSON.parse(s);if("result"in e)return void t(sl(e.result));if("message"in e)return void n.enqueue(sl(e.message));if("error"in e){const t=cl(0,e);return n.error(t),void r(t)}}catch(e){if(e instanceof ll)return n.error(e),void r(e)}},s=new TextDecoder;return new ReadableStream({start(t){let o="";return a();async function a(){if(null==n?void 0:n.aborted){const e=new ll("cancelled","Request was cancelled");return t.error(e),r(e),Promise.resolve()}try{const{value:l,done:c}=await e.read();if(c)return o.trim()&&i(o.trim(),t),void t.close();if(null==n?void 0:n.aborted){const n=new ll("cancelled","Request was cancelled");return t.error(n),r(n),void await e.cancel()}o+=s.decode(l,{stream:!0});const h=o.split("\n");o=h.pop()||"";for(const e of h)e.trim()&&i(e.trim(),t);return a()}catch(e){const n=e instanceof ll?e:cl(0,null);t.error(n),r(n)}}},cancel:()=>e.cancel()})}(a.body.getReader(),l,c,null==n?void 0:n.signal);return{stream:{[Symbol.asyncIterator](){const e=d.getReader();return{async next(){const{value:t,done:r}=await e.read();return{value:t,done:r}},return:async()=>(await e.cancel(),{done:!0,value:void 0})}}},data:h}}(e,i,r,n||{})}(e,t,r,n),n}async function gl(e,t,r,n){let i;r["Content-Type"]="application/json";try{i=await n(e,{method:"POST",body:JSON.stringify(t),headers:r})}catch(e){return{status:0,json:null}}let s=null;try{s=await i.json()}catch(e){}return{status:i.status,json:s}}async function ml(e,t){const r={},n=await e.contextProvider.getContext(t.limitedUseAppCheckTokens);return n.authToken&&(r.Authorization="Bearer "+n.authToken),n.messagingToken&&(r["Firebase-Instance-ID-Token"]=n.messagingToken),null!==n.appCheckToken&&(r["X-Firebase-AppCheck"]=n.appCheckToken),r}const vl="@firebase/functions",yl="0.12.9";
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
function bl(e=zr(),t=dl){const r=$r(Ct(e),ol).getImmediate({identifier:t}),n=(e=>{const t=ot(e);if(!t)return;const r=t.lastIndexOf(":");if(r<=0||r+1===t.length)throw new Error(`Invalid host ${t} with no separate hostname and port!`);const n=parseInt(t.substring(r+1),10);return"["===t[0]?[t.substring(1,r-1),n]:[t.substring(0,r),n]})("functions");return n&&_l(r,...n),r}function _l(e,t,r){!function(e,t,r){const n=ht(t);e.emulatorOrigin=`http${n?"s":""}://${t}:${r}`,n&&(dt(e.emulatorOrigin),ft("Functions",!0))}(Ct(e),t,r)}!function(e){Lr(new At(ol,(e,{instanceIdentifier:t})=>{const r=e.getProvider("app").getImmediate(),n=e.getProvider("auth-internal"),i=e.getProvider("messaging-internal"),s=e.getProvider("app-check-internal");return new pl(r,n,i,s,t)},"PUBLIC").setMultipleInstances(!0)),Br(vl,yl,e),Br(vl,yl,"esm2017")}();function wl(e){return e?.host??"127.0.0.1"}function El(e){if(!e||"number"!=typeof e.port)throw new Error("[firebase-emulators] Emulator configuration requires a numeric port.");return e.port}const Il=new WeakSet;let Sl=null;function Tl(e){return co(e)}function Cl(e,t,r=!0){Il.has(e)||(Ti(e,function(e){return`${e.secure?"https":"http"}://${wl(e)}:${El(e)}`}(t),{disableWarnings:r}),Il.add(e))}function Al(e,t){return Tl(e).onAuthStateChanged(t)}async function kl(e,t,r){return async function(e,t,r){if(Ur(e.app))return Promise.reject(dn(e));const n=gi(e),i=Si(n,{returnSecureToken:!0,email:t,password:r,clientType:"CLIENT_TYPE_WEB"},"signUpPassword",Bi),s=await i.catch(t=>{throw"auth/password-does-not-meet-requirements"===t.code&&Ji(e),t}),o=await Hi._fromIdTokenResponse(n,"signIn",s);return await n._updateCurrentUser(o.user),o}(e,t,r)}async function xl(e){return function(e){return Ct(e).signOut()}(e)}async function Rl(e,t){return async function(e,t){const r=gi(e),n={requestType:"PASSWORD_RESET",email:t,clientType:"CLIENT_TYPE_WEB"};await Si(r,n,"getOobCode",Pi)}(e,t)}async function Pl(e,t=[]){const r=function(e=[]){return Sl||(Sl=new Fi),e.forEach(e=>Sl.addScope(e)),Sl}(t);return Cs(e,r)}
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
Br("firebase","11.10.0","app");const Ol=new Map;function Nl(e,t="[DEFAULT]"){const r=Ol.get(t);if(r)return Dl(t,r.config,e),r.app;const n=Array.from(Pr.values()).find(e=>e.name===t);if(n)return Ol.set(t,{app:n,config:e}),Dl(t,n.options,e),n;const i=Vr(e,t);return Ol.set(t,{app:i,config:e}),i}function Dl(e,t,r){(function(e,t){if(!e||!t)return!1;return Ll.every(r=>e[r]===t[r])})(t,r)||console.warn(`[firebase-app] Firebase app "${e}" already initialized with a different configuration. Subsequent calls will reuse the original instance. Ensure this is intentional.`)}const Ll=["apiKey","authDomain","projectId","storageBucket","messagingSenderId","appId","measurementId"];const $l=new WeakSet,Ul="us-central1";function Ml(e,t){$l.has(e)||(_l(e,function(e){return wl(e)}(t),function(e){return El(e)}(t)),$l.add(e))}function jl(e,t,r){return function(e,t){return fl(Ct(e),t)}(e,t)}const Fl={apiKey:"VITE_FIREBASE_API_KEY",authDomain:"VITE_FIREBASE_AUTH_DOMAIN",projectId:"VITE_FIREBASE_PROJECT_ID",storageBucket:"VITE_FIREBASE_STORAGE_BUCKET",messagingSenderId:"VITE_FIREBASE_MESSAGING_SENDER_ID",appId:"VITE_FIREBASE_APP_ID"};function Vl(){return function(){const e=[];for(const[t,r]of Object.entries(Fl))({MODE:"production",PROD:!0,DEV:!1,VITE_USE_EMULATOR:"false",VITE_FIREBASE_EMULATOR_UI:"http://127.0.0.1:5400",VITE_FIREBASE_API_KEY:"AIzaSyCGaJKzrUv_TgD97QLt-ydGPBbpCyCnrEw",VITE_FIREBASE_AUTH_DOMAIN:"peg-2035.firebaseapp.com",VITE_FIREBASE_PROJECT_ID:"peg-2035",VITE_FIREBASE_STORAGE_BUCKET:"peg-2035.appspot.com",VITE_FIREBASE_MESSAGING_SENDER_ID:"1039825199205",VITE_FIREBASE_APP_ID:"1:1039825199205:web:44d7dfd0f6f970c0ee668c"})[r]||e.push(`  - ${t} (set ${r} in .env)`);if(e.length>0)throw new Error(`Missing required Firebase environment variables:\n${e.join("\n")}\n\nPlease ensure you have a .env.local or .env.emulator file.\nCopy from .env.example to get started:\n  cp .env.example .env.local\n\nFor emulator mode: Placeholder values are sufficient.\nFor production: Use real values from Firebase Console.\n\nSee apps/df-app-starter-template/README.md for details.`)}(),{apiKey:"AIzaSyCGaJKzrUv_TgD97QLt-ydGPBbpCyCnrEw",authDomain:"peg-2035.firebaseapp.com",projectId:"peg-2035",storageBucket:"peg-2035.appspot.com",messagingSenderId:"1039825199205",appId:"1:1039825199205:web:44d7dfd0f6f970c0ee668c"}}const zl=5501,Bl={"fb-emulator":{auth:!1,firestore:!0,storage:!0,functions:!0,label:"Emulator Mode (fb-emulator)",description:"Using production authentication with local emulators for Firestore, Storage, and Functions."},"fb-cloud":{auth:!1,firestore:!1,storage:!1,functions:!1,label:"Cloud Mode (fb-cloud)",description:"All Firebase services are connected to the live cloud environment."}};function Hl(){return Bl["fb-cloud"]}let Wl=null,ql=null;function Gl(e){ql=e}function Kl(){if(!Wl){const e=Vl();Wl=Nl(e)}return Wl}function Jl(e){return!0===function(){if(!ql)throw new Error("Emulator configuration not set. Call setEmulatorConfig() in your app entry point.\nExample:\n  import {setEmulatorConfig} from '@df/state/stores/firebase-init';\n  import {EMULATOR_CONFIG} from './config/firebase.config';\n  setEmulatorConfig(EMULATOR_CONFIG);");return ql}()[e]}const Xl=_e(null),Yl=_e("idle"),Zl=_e(null),Ql=_e(!1);let ec=!1,tc=null,rc=null,nc=null;async function ic(e){try{const t=await e.getIdToken(!0);localStorage.setItem("User",JSON.stringify(e)),sessionStorage.setItem("Authorization",`Bearer ${t}`),document.cookie=`authToken=${t}; path=/; secure; samesite=strict; max-age=3600`}catch(e){console.error("Error storing auth token:",e)}}function sc(){localStorage.removeItem("User"),sessionStorage.removeItem("Authorization"),document.cookie="authToken=; path=/; expires=Thu, 01 Jan 1970 00:00:00 GMT"}function oc(){if(ec)return;if(rc&&nc)return;const e=Kl();if(tc!==e||!nc){if(nc&&nc(),tc=e,rc=Tl(e),ec=!1,Jl("auth")){const e={host:globalThis.__DF_AUTH_EMULATOR_HOST__??"127.0.0.1",port:globalThis.__DF_AUTH_EMULATOR_PORT__??9155};Cl(rc,e)}Yl.set("loading"),nc=Al(e,async e=>{Xl.set(e),Yl.set(e?"authenticated":"unauthenticated"),Ql.set(!0),Zl.set(null),e?await ic(e):sc()})}}const ac=we(()=>({authUser:Xl.get(),authState:Yl.get(),error:Zl.get(),initialized:Ql.get()}));async function lc(e){if(oc(),!rc)throw new Error("Auth initialization failed");Yl.set("loading"),Zl.set(null);try{const t=await async function(e,t,r){return Xi(e,t,r)}(rc,e.email,e.password);Xl.set(t.user),Yl.set("authenticated"),await ic(t.user)}catch(e){Yl.set("error");const t=e instanceof Error?e.message:"Sign in failed";throw Zl.set(t),e}}async function cc(e){if(oc(),!rc)throw new Error("Auth initialization failed");Yl.set("loading"),Zl.set(null);try{const t=await kl(rc,e.email,e.password);e.displayName&&t.user&&await async function(e,t){return Yi(e,t)}(t.user,{displayName:e.displayName}),Xl.set(t.user),Yl.set("authenticated"),await ic(t.user)}catch(e){Yl.set("error");const t=e instanceof Error?e.message:"Sign up failed";throw Zl.set(t),e}}const hc=_e({showCompleted:!0,priority:"all",tag:"all",search:""}),dc=_e({status:"idle",documents:[],error:null,isListening:!1,lastUpdated:null,currentPage:1,pageSize:5,hasNextPage:!1,hasPreviousPage:!1,queryDescription:"All todos"}),uc=_e(null);if(we(()=>{const e=uc.get();return e?e.state.get():dc.get()}),we(()=>hc.get()),"object"==typeof globalThis){const e=globalThis;e.__dfSetTodoDemoState=function(e){if(uc.get())throw new Error("Cannot set demo state after the todo store has been initialized.");dc.set(e)},e.__dfSetTodoDemoFilters=function(e){if(uc.get())throw new Error("Cannot set demo filters after the todo store has been initialized.");hc.set(e)}}const pc=_e({status:"idle",documents:[],error:null,isListening:!1,lastUpdated:null,currentPage:1,pageSize:50,hasNextPage:!1,hasPreviousPage:!1,queryDescription:"Latest messages"}),fc=_e("idle"),gc=_e(null),mc=_e(null);we(()=>{const e=mc.get();return e?e.state.get():pc.get()}),we(()=>({status:fc.get(),error:gc.get()}));const vc=_e("idle"),yc=_e(0),bc=_e(null),_c=_e(null);we(()=>({status:vc.get(),progress:yc.get(),error:bc.get(),uploadedFile:_c.get()})),_e(null);const wc=_e({status:"idle",data:null,error:null,lastCalled:null}),Ec=_e({status:"idle",data:null,error:null,lastCalled:null}),Ic=_e({status:"idle",data:null,error:null,lastCalled:null});we(()=>wc.get()),we(()=>Ec.get()),we(()=>Ic.get());const Sc=_e({...{status:"idle",documents:[],error:null,isListening:!1,lastUpdated:null,currentPage:1,pageSize:20,hasNextPage:!1,hasPreviousPage:!1,queryDescription:"Awaiting authentication"}}),Tc=_e(null);_e(null),_e(null);const Cc=we(()=>{const e=Tc.get();return e?e.state.get():Sc.get()});we(()=>{const e=Cc.get().documents,t=e.length,r=t>0?e[0].recordedAt??null:null,n={pushups:{count:0,totalValue:0},squats:{count:0,totalValue:0},plank:{count:0,totalValue:0},dumbbells:{count:0,totalValue:0},bands:{count:0,totalValue:0},hang:{count:0,totalValue:0}};return e.forEach(e=>{n[e.exerciseType].count+=1,n[e.exerciseType].totalValue+=e.value}),{totalExercises:t,entryCount:t,lastEntryAt:r,byType:n}}),ea.fromDate(new Date("2024-01-15")),ea.fromDate(new Date("2024-01-16")),ea.fromDate(new Date("2024-01-20")),ea.fromDate(new Date("2024-01-16")),ea.fromDate(new Date("2024-01-16")),ea.fromDate(new Date("2024-01-22")),ea.fromDate(new Date("2024-01-17")),ea.fromDate(new Date("2024-01-17")),ea.fromDate(new Date("2024-01-25")),ea.fromDate(new Date("2024-01-18")),ea.fromDate(new Date("2024-01-18")),ea.fromDate(new Date("2024-01-28")),ea.fromDate(new Date("2024-01-19")),ea.fromDate(new Date("2024-01-19")),ea.fromDate(new Date("2024-02-05")),ea.fromDate(new Date("2024-01-20")),ea.fromDate(new Date("2024-01-20")),ea.fromDate(new Date("2024-02-10")),ea.fromDate(new Date("2024-01-21")),ea.fromDate(new Date("2024-01-21")),ea.fromDate(new Date("2024-02-15")),ea.fromDate(new Date("2024-01-22")),ea.fromDate(new Date("2024-01-22")),ea.fromDate(new Date("2024-02-12")),ea.fromDate(new Date("2024-01-23")),ea.fromDate(new Date("2024-01-23")),ea.fromDate(new Date("2024-02-01")),ea.fromDate(new Date("2024-01-24")),ea.fromDate(new Date("2024-01-24")),ea.fromDate(new Date("2024-02-20")),ea.fromDate(new Date("2024-01-25")),ea.fromDate(new Date("2024-01-25")),ea.fromDate(new Date("2024-02-18")),ea.fromDate(new Date("2024-01-26")),ea.fromDate(new Date("2024-01-26")),ea.fromDate(new Date("2024-02-08"));const Ac=_e([]),kc=_e(!1),xc=_e(""),Rc=we(()=>({users:Ac.get(),loading:kc.get(),error:xc.get()}));let Pc=null;function Oc(){if(Pc)return Pc;const e=function(e,t=Ul){return bl(e,t)}(Kl(),Ul);return Jl("functions")&&Ml(e,{host:"127.0.0.1",port:zl}),Pc=e,Pc}async function Nc(e=""){kc.set(!0),xc.set("");try{const t=jl(Oc(),"getUserList"),r=await t({searchQuery:e});Ac.set(r.data.users)}catch(e){const t=e instanceof Error?e.message:"Failed to load users";throw xc.set(t),console.error("[user-admin.store] Failed to load users:",e),e}finally{kc.set(!1)}}function Dc(e,t){Gl(Hl())}
/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Lc=globalThis,$c=Lc.ShadowRoot&&(void 0===Lc.ShadyCSS||Lc.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,Uc=Symbol(),Mc=new WeakMap;let jc=class{constructor(e,t,r){if(this._$cssResult$=!0,r!==Uc)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=e,this.t=t}get styleSheet(){let e=this.o;const t=this.t;if($c&&void 0===e){const r=void 0!==t&&1===t.length;r&&(e=Mc.get(t)),void 0===e&&((this.o=e=new CSSStyleSheet).replaceSync(this.cssText),r&&Mc.set(t,e))}return e}toString(){return this.cssText}};const Fc=(e,...t)=>{const r=1===e.length?e[0]:t.reduce((t,r,n)=>t+(e=>{if(!0===e._$cssResult$)return e.cssText;if("number"==typeof e)return e;throw Error("Value passed to 'css' function must be a 'css' function result: "+e+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(r)+e[n+1],e[0]);return new jc(r,e,Uc)},Vc=$c?e=>e:e=>e instanceof CSSStyleSheet?(e=>{let t="";for(const r of e.cssRules)t+=r.cssText;return(e=>new jc("string"==typeof e?e:e+"",void 0,Uc))(t)})(e):e,{is:zc,defineProperty:Bc,getOwnPropertyDescriptor:Hc,getOwnPropertyNames:Wc,getOwnPropertySymbols:qc,getPrototypeOf:Gc}=Object,Kc=globalThis,Jc=Kc.trustedTypes,Xc=Jc?Jc.emptyScript:"",Yc=Kc.reactiveElementPolyfillSupport,Zc=(e,t)=>e,Qc={toAttribute(e,t){switch(t){case Boolean:e=e?Xc:null;break;case Object:case Array:e=null==e?e:JSON.stringify(e)}return e},fromAttribute(e,t){let r=e;switch(t){case Boolean:r=null!==e;break;case Number:r=null===e?null:Number(e);break;case Object:case Array:try{r=JSON.parse(e)}catch(e){r=null}}return r}},eh=(e,t)=>!zc(e,t),th={attribute:!0,type:String,converter:Qc,reflect:!1,useDefault:!1,hasChanged:eh};
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */Symbol.metadata??=Symbol("metadata"),Kc.litPropertyMetadata??=new WeakMap;class rh extends HTMLElement{static addInitializer(e){this._$Ei(),(this.l??=[]).push(e)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(e,t=th){if(t.state&&(t.attribute=!1),this._$Ei(),this.prototype.hasOwnProperty(e)&&((t=Object.create(t)).wrapped=!0),this.elementProperties.set(e,t),!t.noAccessor){const r=Symbol(),n=this.getPropertyDescriptor(e,r,t);void 0!==n&&Bc(this.prototype,e,n)}}static getPropertyDescriptor(e,t,r){const{get:n,set:i}=Hc(this.prototype,e)??{get(){return this[t]},set(e){this[t]=e}};return{get:n,set(t){const s=n?.call(this);i?.call(this,t),this.requestUpdate(e,s,r)},configurable:!0,enumerable:!0}}static getPropertyOptions(e){return this.elementProperties.get(e)??th}static _$Ei(){if(this.hasOwnProperty(Zc("elementProperties")))return;const e=Gc(this);e.finalize(),void 0!==e.l&&(this.l=[...e.l]),this.elementProperties=new Map(e.elementProperties)}static finalize(){if(this.hasOwnProperty(Zc("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(Zc("properties"))){const e=this.properties,t=[...Wc(e),...qc(e)];for(const r of t)this.createProperty(r,e[r])}const e=this[Symbol.metadata];if(null!==e){const t=litPropertyMetadata.get(e);if(void 0!==t)for(const[e,r]of t)this.elementProperties.set(e,r)}this._$Eh=new Map;for(const[e,t]of this.elementProperties){const r=this._$Eu(e,t);void 0!==r&&this._$Eh.set(r,e)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(e){const t=[];if(Array.isArray(e)){const r=new Set(e.flat(1/0).reverse());for(const e of r)t.unshift(Vc(e))}else void 0!==e&&t.push(Vc(e));return t}static _$Eu(e,t){const r=t.attribute;return!1===r?void 0:"string"==typeof r?r:"string"==typeof e?e.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){this._$ES=new Promise(e=>this.enableUpdating=e),this._$AL=new Map,this._$E_(),this.requestUpdate(),this.constructor.l?.forEach(e=>e(this))}addController(e){(this._$EO??=new Set).add(e),void 0!==this.renderRoot&&this.isConnected&&e.hostConnected?.()}removeController(e){this._$EO?.delete(e)}_$E_(){const e=new Map,t=this.constructor.elementProperties;for(const r of t.keys())this.hasOwnProperty(r)&&(e.set(r,this[r]),delete this[r]);e.size>0&&(this._$Ep=e)}createRenderRoot(){const e=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return((e,t)=>{if($c)e.adoptedStyleSheets=t.map(e=>e instanceof CSSStyleSheet?e:e.styleSheet);else for(const r of t){const t=document.createElement("style"),n=Lc.litNonce;void 0!==n&&t.setAttribute("nonce",n),t.textContent=r.cssText,e.appendChild(t)}})(e,this.constructor.elementStyles),e}connectedCallback(){this.renderRoot??=this.createRenderRoot(),this.enableUpdating(!0),this._$EO?.forEach(e=>e.hostConnected?.())}enableUpdating(e){}disconnectedCallback(){this._$EO?.forEach(e=>e.hostDisconnected?.())}attributeChangedCallback(e,t,r){this._$AK(e,r)}_$ET(e,t){const r=this.constructor.elementProperties.get(e),n=this.constructor._$Eu(e,r);if(void 0!==n&&!0===r.reflect){const i=(void 0!==r.converter?.toAttribute?r.converter:Qc).toAttribute(t,r.type);this._$Em=e,null==i?this.removeAttribute(n):this.setAttribute(n,i),this._$Em=null}}_$AK(e,t){const r=this.constructor,n=r._$Eh.get(e);if(void 0!==n&&this._$Em!==n){const e=r.getPropertyOptions(n),i="function"==typeof e.converter?{fromAttribute:e.converter}:void 0!==e.converter?.fromAttribute?e.converter:Qc;this._$Em=n;const s=i.fromAttribute(t,e.type);this[n]=s??this._$Ej?.get(n)??s,this._$Em=null}}requestUpdate(e,t,r){if(void 0!==e){const n=this.constructor,i=this[e];if(r??=n.getPropertyOptions(e),!((r.hasChanged??eh)(i,t)||r.useDefault&&r.reflect&&i===this._$Ej?.get(e)&&!this.hasAttribute(n._$Eu(e,r))))return;this.C(e,t,r)}!1===this.isUpdatePending&&(this._$ES=this._$EP())}C(e,t,{useDefault:r,reflect:n,wrapped:i},s){r&&!(this._$Ej??=new Map).has(e)&&(this._$Ej.set(e,s??t??this[e]),!0!==i||void 0!==s)||(this._$AL.has(e)||(this.hasUpdated||r||(t=void 0),this._$AL.set(e,t)),!0===n&&this._$Em!==e&&(this._$Eq??=new Set).add(e))}async _$EP(){this.isUpdatePending=!0;try{await this._$ES}catch(e){Promise.reject(e)}const e=this.scheduleUpdate();return null!=e&&await e,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??=this.createRenderRoot(),this._$Ep){for(const[e,t]of this._$Ep)this[e]=t;this._$Ep=void 0}const e=this.constructor.elementProperties;if(e.size>0)for(const[t,r]of e){const{wrapped:e}=r,n=this[t];!0!==e||this._$AL.has(t)||void 0===n||this.C(t,void 0,r,n)}}let e=!1;const t=this._$AL;try{e=this.shouldUpdate(t),e?(this.willUpdate(t),this._$EO?.forEach(e=>e.hostUpdate?.()),this.update(t)):this._$EM()}catch(t){throw e=!1,this._$EM(),t}e&&this._$AE(t)}willUpdate(e){}_$AE(e){this._$EO?.forEach(e=>e.hostUpdated?.()),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(e)),this.updated(e)}_$EM(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(e){return!0}update(e){this._$Eq&&=this._$Eq.forEach(e=>this._$ET(e,this[e])),this._$EM()}updated(e){}firstUpdated(e){}}rh.elementStyles=[],rh.shadowRootOptions={mode:"open"},rh[Zc("elementProperties")]=new Map,rh[Zc("finalized")]=new Map,Yc?.({ReactiveElement:rh}),(Kc.reactiveElementVersions??=[]).push("2.1.1");
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const nh=globalThis;class ih extends rh{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){const e=super.createRenderRoot();return this.renderOptions.renderBefore??=e.firstChild,e}update(e){const t=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(e),this._$Do=((e,t,r)=>{const n=r?.renderBefore??t;let i=n._$litPart$;if(void 0===i){const e=r?.renderBefore??null;n._$litPart$=i=new pe(t.insertBefore(q(),e),e,void 0,r??{})}return i._$AI(e),i})(t,this.renderRoot,this.renderOptions)}connectedCallback(){super.connectedCallback(),this._$Do?.setConnected(!0)}disconnectedCallback(){super.disconnectedCallback(),this._$Do?.setConnected(!1)}render(){return ie}}ih._$litElement$=!0,ih.finalized=!0,nh.litElementHydrateSupport?.({LitElement:ih});const sh=nh.litElementPolyfillSupport;sh?.({LitElement:ih}),(nh.litElementVersions??=[]).push("4.2.1");
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const oh=e=>(t,r)=>{void 0!==r?r.addInitializer(()=>{customElements.define(e,t)}):customElements.define(e,t)},ah={attribute:!0,type:String,converter:Qc,reflect:!1,hasChanged:eh},lh=(e=ah,t,r)=>{const{kind:n,metadata:i}=r;let s=globalThis.litPropertyMetadata.get(i);if(void 0===s&&globalThis.litPropertyMetadata.set(i,s=new Map),"setter"===n&&((e=Object.create(e)).wrapped=!0),s.set(r.name,e),"accessor"===n){const{name:n}=r;return{set(r){const i=t.get.call(this);t.set.call(this,r),this.requestUpdate(n,i,e)},init(t){return void 0!==t&&this.C(n,void 0,e,t),t}}}if("setter"===n){const{name:n}=r;return function(r){const i=this[n];t.call(this,r),this.requestUpdate(n,i,e)}}throw Error("Unsupported decorator location: "+n)};
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function ch(e){return(t,r)=>"object"==typeof r?lh(e,t,r):((e,t,r)=>{const n=t.hasOwnProperty(r);return t.constructor.createProperty(r,e),n?Object.getOwnPropertyDescriptor(t,r):void 0})(e,t,r)}
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function hh(e){return ch({...e,state:!0,attribute:!1})}
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const dh=(e,t,r)=>(r.configurable=!0,r.enumerable=!0,Reflect.decorate&&"object"!=typeof t&&Object.defineProperty(e,t,r),r);
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function uh(e,t){return(t,r,n)=>dh(t,r,{get(){return(t=>t.renderRoot?.querySelector(e)??null)(this)}})}
/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
/**
 * @license
 * Copyright 2022 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */
class ph extends ih{connectedCallback(){super.connectedCallback(),this.setAttribute("aria-hidden","true")}render(){return ne`<span class="shadow"></span>`}}
/**
 * @license
 * Copyright 2024 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */const fh=Fc`:host,.shadow,.shadow::before,.shadow::after{border-radius:inherit;inset:0;position:absolute;transition-duration:inherit;transition-property:inherit;transition-timing-function:inherit}:host{display:flex;pointer-events:none;transition-property:box-shadow,opacity}.shadow::before,.shadow::after{content:"";transition-property:box-shadow,opacity;--_level: var(--md-elevation-level, 0);--_shadow-color: var(--md-elevation-shadow-color, var(--md-sys-color-shadow, #000))}.shadow::before{box-shadow:0px calc(1px*(clamp(0,var(--_level),1) + clamp(0,var(--_level) - 3,1) + 2*clamp(0,var(--_level) - 4,1))) calc(1px*(2*clamp(0,var(--_level),1) + clamp(0,var(--_level) - 2,1) + clamp(0,var(--_level) - 4,1))) 0px var(--_shadow-color);opacity:.3}.shadow::after{box-shadow:0px calc(1px*(clamp(0,var(--_level),1) + clamp(0,var(--_level) - 1,1) + 2*clamp(0,var(--_level) - 2,3))) calc(1px*(3*clamp(0,var(--_level),2) + 2*clamp(0,var(--_level) - 2,3))) calc(1px*(clamp(0,var(--_level),4) + 2*clamp(0,var(--_level) - 4,1))) var(--_shadow-color);opacity:.15}
`
/**
 * @license
 * Copyright 2022 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */;let gh=class extends ph{};gh.styles=[fh],gh=tn([oh("md-elevation")],gh);
/**
 * @license
 * Copyright 2023 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */
const mh=Symbol("attachableController");let vh;vh=new MutationObserver(e=>{for(const t of e)t.target[mh]?.hostConnected()});class yh{get htmlFor(){return this.host.getAttribute("for")}set htmlFor(e){null===e?this.host.removeAttribute("for"):this.host.setAttribute("for",e)}get control(){return this.host.hasAttribute("for")?this.htmlFor&&this.host.isConnected?this.host.getRootNode().querySelector(`#${this.htmlFor}`):null:this.currentControl||this.host.parentElement}set control(e){e?this.attach(e):this.detach()}constructor(e,t){this.host=e,this.onControlChange=t,this.currentControl=null,e.addController(this),e[mh]=this,vh?.observe(e,{attributeFilter:["for"]})}attach(e){e!==this.currentControl&&(this.setCurrentControl(e),this.host.removeAttribute("for"))}detach(){this.setCurrentControl(null),this.host.setAttribute("for","")}hostConnected(){this.setCurrentControl(this.control)}hostDisconnected(){this.setCurrentControl(null)}setCurrentControl(e){this.onControlChange(this.currentControl,e),this.currentControl=e}}
/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */const bh=["focusin","focusout","pointerdown"];class _h extends ih{constructor(){super(...arguments),this.visible=!1,this.inward=!1,this.attachableController=new yh(this,this.onControlChange.bind(this))}get htmlFor(){return this.attachableController.htmlFor}set htmlFor(e){this.attachableController.htmlFor=e}get control(){return this.attachableController.control}set control(e){this.attachableController.control=e}attach(e){this.attachableController.attach(e)}detach(){this.attachableController.detach()}connectedCallback(){super.connectedCallback(),this.setAttribute("aria-hidden","true")}handleEvent(e){if(!e[wh]){switch(e.type){default:return;case"focusin":this.visible=this.control?.matches(":focus-visible")??!1;break;case"focusout":case"pointerdown":this.visible=!1}e[wh]=!0}}onControlChange(e,t){for(const r of bh)e?.removeEventListener(r,this),t?.addEventListener(r,this)}update(e){e.has("visible")&&this.dispatchEvent(new Event("visibility-changed")),super.update(e)}}tn([ch({type:Boolean,reflect:!0})],_h.prototype,"visible",void 0),tn([ch({type:Boolean,reflect:!0})],_h.prototype,"inward",void 0);const wh=Symbol("handledByFocusRing"),Eh=Fc`:host{animation-delay:0s,calc(var(--md-focus-ring-duration, 600ms)*.25);animation-duration:calc(var(--md-focus-ring-duration, 600ms)*.25),calc(var(--md-focus-ring-duration, 600ms)*.75);animation-timing-function:cubic-bezier(0.2, 0, 0, 1);box-sizing:border-box;color:var(--md-focus-ring-color, var(--md-sys-color-secondary, #625b71));display:none;pointer-events:none;position:absolute}:host([visible]){display:flex}:host(:not([inward])){animation-name:outward-grow,outward-shrink;border-end-end-radius:calc(var(--md-focus-ring-shape-end-end, var(--md-focus-ring-shape, var(--md-sys-shape-corner-full, 9999px))) + var(--md-focus-ring-outward-offset, 2px));border-end-start-radius:calc(var(--md-focus-ring-shape-end-start, var(--md-focus-ring-shape, var(--md-sys-shape-corner-full, 9999px))) + var(--md-focus-ring-outward-offset, 2px));border-start-end-radius:calc(var(--md-focus-ring-shape-start-end, var(--md-focus-ring-shape, var(--md-sys-shape-corner-full, 9999px))) + var(--md-focus-ring-outward-offset, 2px));border-start-start-radius:calc(var(--md-focus-ring-shape-start-start, var(--md-focus-ring-shape, var(--md-sys-shape-corner-full, 9999px))) + var(--md-focus-ring-outward-offset, 2px));inset:calc(-1*var(--md-focus-ring-outward-offset, 2px));outline:var(--md-focus-ring-width, 3px) solid currentColor}:host([inward]){animation-name:inward-grow,inward-shrink;border-end-end-radius:calc(var(--md-focus-ring-shape-end-end, var(--md-focus-ring-shape, var(--md-sys-shape-corner-full, 9999px))) - var(--md-focus-ring-inward-offset, 0px));border-end-start-radius:calc(var(--md-focus-ring-shape-end-start, var(--md-focus-ring-shape, var(--md-sys-shape-corner-full, 9999px))) - var(--md-focus-ring-inward-offset, 0px));border-start-end-radius:calc(var(--md-focus-ring-shape-start-end, var(--md-focus-ring-shape, var(--md-sys-shape-corner-full, 9999px))) - var(--md-focus-ring-inward-offset, 0px));border-start-start-radius:calc(var(--md-focus-ring-shape-start-start, var(--md-focus-ring-shape, var(--md-sys-shape-corner-full, 9999px))) - var(--md-focus-ring-inward-offset, 0px));border:var(--md-focus-ring-width, 3px) solid currentColor;inset:var(--md-focus-ring-inward-offset, 0px)}@keyframes outward-grow{from{outline-width:0}to{outline-width:var(--md-focus-ring-active-width, 8px)}}@keyframes outward-shrink{from{outline-width:var(--md-focus-ring-active-width, 8px)}}@keyframes inward-grow{from{border-width:0}to{border-width:var(--md-focus-ring-active-width, 8px)}}@keyframes inward-shrink{from{border-width:var(--md-focus-ring-active-width, 8px)}}@media(prefers-reduced-motion){:host{animation:none}}
`
/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */;
/**
 * @license
 * Copyright 2024 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */let Ih=class extends _h{};Ih.styles=[Eh],Ih=tn([oh("md-focus-ring")],Ih);
/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const Sh=(e=>(...t)=>({_$litDirective$:e,values:t}))(class extends U{constructor(e){if(super(e),e.type!==$||"class"!==e.name||e.strings?.length>2)throw Error("`classMap()` can only be used in the `class` attribute and must be the only part in the attribute.")}render(e){return" "+Object.keys(e).filter(t=>e[t]).join(" ")+" "}update(e,[t]){if(void 0===this.st){this.st=new Set,void 0!==e.strings&&(this.nt=new Set(e.strings.join(" ").split(/\s/).filter(e=>""!==e)));for(const e in t)t[e]&&!this.nt?.has(e)&&this.st.add(e);return this.render(t)}const r=e.element.classList;for(const e of this.st)e in t||(r.remove(e),this.st.delete(e));for(const e in t){const n=!!t[e];n===this.st.has(e)||this.nt?.has(e)||(n?(r.add(e),this.st.add(e)):(r.remove(e),this.st.delete(e)))}return ie}}),Th="cubic-bezier(0.2, 0, 0, 1)";
/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */var Ch;!function(e){e[e.INACTIVE=0]="INACTIVE",e[e.TOUCH_DELAY=1]="TOUCH_DELAY",e[e.HOLDING=2]="HOLDING",e[e.WAITING_FOR_CLICK=3]="WAITING_FOR_CLICK"}(Ch||(Ch={}));const Ah=["click","contextmenu","pointercancel","pointerdown","pointerenter","pointerleave","pointerup"],kh=window.matchMedia("(forced-colors: active)");class xh extends ih{constructor(){super(...arguments),this.disabled=!1,this.hovered=!1,this.pressed=!1,this.rippleSize="",this.rippleScale="",this.initialSize=0,this.state=Ch.INACTIVE,this.attachableController=new yh(this,this.onControlChange.bind(this))}get htmlFor(){return this.attachableController.htmlFor}set htmlFor(e){this.attachableController.htmlFor=e}get control(){return this.attachableController.control}set control(e){this.attachableController.control=e}attach(e){this.attachableController.attach(e)}detach(){this.attachableController.detach()}connectedCallback(){super.connectedCallback(),this.setAttribute("aria-hidden","true")}render(){const e={hovered:this.hovered,pressed:this.pressed};return ne`<div class="surface ${Sh(e)}"></div>`}update(e){e.has("disabled")&&this.disabled&&(this.hovered=!1,this.pressed=!1),super.update(e)}handlePointerenter(e){this.shouldReactToEvent(e)&&(this.hovered=!0)}handlePointerleave(e){this.shouldReactToEvent(e)&&(this.hovered=!1,this.state!==Ch.INACTIVE&&this.endPressAnimation())}handlePointerup(e){if(this.shouldReactToEvent(e)){if(this.state!==Ch.HOLDING)return this.state===Ch.TOUCH_DELAY?(this.state=Ch.WAITING_FOR_CLICK,void this.startPressAnimation(this.rippleStartEvent)):void 0;this.state=Ch.WAITING_FOR_CLICK}}async handlePointerdown(e){if(this.shouldReactToEvent(e)){if(this.rippleStartEvent=e,!this.isTouch(e))return this.state=Ch.WAITING_FOR_CLICK,void this.startPressAnimation(e);this.state=Ch.TOUCH_DELAY,await new Promise(e=>{setTimeout(e,150)}),this.state===Ch.TOUCH_DELAY&&(this.state=Ch.HOLDING,this.startPressAnimation(e))}}handleClick(){this.disabled||(this.state!==Ch.WAITING_FOR_CLICK?this.state===Ch.INACTIVE&&(this.startPressAnimation(),this.endPressAnimation()):this.endPressAnimation())}handlePointercancel(e){this.shouldReactToEvent(e)&&this.endPressAnimation()}handleContextmenu(){this.disabled||this.endPressAnimation()}determineRippleSize(){const{height:e,width:t}=this.getBoundingClientRect(),r=Math.max(e,t),n=Math.max(.35*r,75),i=this.currentCSSZoom??1,s=Math.floor(.2*r/i),o=Math.sqrt(t**2+e**2)+10;this.initialSize=s;const a=(o+n)/s;this.rippleScale=""+a/i,this.rippleSize=`${s}px`}getNormalizedPointerEventCoords(e){const{scrollX:t,scrollY:r}=window,{left:n,top:i}=this.getBoundingClientRect(),s=t+n,o=r+i,{pageX:a,pageY:l}=e,c=this.currentCSSZoom??1;return{x:(a-s)/c,y:(l-o)/c}}getTranslationCoordinates(e){const{height:t,width:r}=this.getBoundingClientRect(),n=this.currentCSSZoom??1,i={x:(r/n-this.initialSize)/2,y:(t/n-this.initialSize)/2};let s;return s=e instanceof PointerEvent?this.getNormalizedPointerEventCoords(e):{x:r/n/2,y:t/n/2},s={x:s.x-this.initialSize/2,y:s.y-this.initialSize/2},{startPoint:s,endPoint:i}}startPressAnimation(e){if(!this.mdRoot)return;this.pressed=!0,this.growAnimation?.cancel(),this.determineRippleSize();const{startPoint:t,endPoint:r}=this.getTranslationCoordinates(e),n=`${t.x}px, ${t.y}px`,i=`${r.x}px, ${r.y}px`;this.growAnimation=this.mdRoot.animate({top:[0,0],left:[0,0],height:[this.rippleSize,this.rippleSize],width:[this.rippleSize,this.rippleSize],transform:[`translate(${n}) scale(1)`,`translate(${i}) scale(${this.rippleScale})`]},{pseudoElement:"::after",duration:450,easing:Th,fill:"forwards"})}async endPressAnimation(){this.rippleStartEvent=void 0,this.state=Ch.INACTIVE;const e=this.growAnimation;let t=1/0;"number"==typeof e?.currentTime?t=e.currentTime:e?.currentTime&&(t=e.currentTime.to("ms").value),t>=225?this.pressed=!1:(await new Promise(e=>{setTimeout(e,225-t)}),this.growAnimation===e&&(this.pressed=!1))}shouldReactToEvent(e){if(this.disabled||!e.isPrimary)return!1;if(this.rippleStartEvent&&this.rippleStartEvent.pointerId!==e.pointerId)return!1;if("pointerenter"===e.type||"pointerleave"===e.type)return!this.isTouch(e);const t=1===e.buttons;return this.isTouch(e)||t}isTouch({pointerType:e}){return"touch"===e}async handleEvent(e){if(!kh?.matches)switch(e.type){case"click":this.handleClick();break;case"contextmenu":this.handleContextmenu();break;case"pointercancel":this.handlePointercancel(e);break;case"pointerdown":await this.handlePointerdown(e);break;case"pointerenter":this.handlePointerenter(e);break;case"pointerleave":this.handlePointerleave(e);break;case"pointerup":this.handlePointerup(e)}}onControlChange(e,t){for(const r of Ah)e?.removeEventListener(r,this),t?.addEventListener(r,this)}}tn([ch({type:Boolean,reflect:!0})],xh.prototype,"disabled",void 0),tn([hh()],xh.prototype,"hovered",void 0),tn([hh()],xh.prototype,"pressed",void 0),tn([uh(".surface")],xh.prototype,"mdRoot",void 0);
/**
 * @license
 * Copyright 2024 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */
const Rh=Fc`:host{display:flex;margin:auto;pointer-events:none}:host([disabled]){display:none}@media(forced-colors: active){:host{display:none}}:host,.surface{border-radius:inherit;position:absolute;inset:0;overflow:hidden}.surface{-webkit-tap-highlight-color:rgba(0,0,0,0)}.surface::before,.surface::after{content:"";opacity:0;position:absolute}.surface::before{background-color:var(--md-ripple-hover-color, var(--md-sys-color-on-surface, #1d1b20));inset:0;transition:opacity 15ms linear,background-color 15ms linear}.surface::after{background:radial-gradient(closest-side, var(--md-ripple-pressed-color, var(--md-sys-color-on-surface, #1d1b20)) max(100% - 70px, 65%), transparent 100%);transform-origin:center center;transition:opacity 375ms linear}.hovered::before{background-color:var(--md-ripple-hover-color, var(--md-sys-color-on-surface, #1d1b20));opacity:var(--md-ripple-hover-opacity, 0.08)}.pressed::after{opacity:var(--md-ripple-pressed-opacity, 0.12);transition-duration:105ms}
`
/**
 * @license
 * Copyright 2022 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */;let Ph=class extends xh{};Ph.styles=[Rh],Ph=tn([oh("md-ripple")],Ph);
/**
 * @license
 * Copyright 2023 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */
const Oh=["role","ariaAtomic","ariaAutoComplete","ariaBusy","ariaChecked","ariaColCount","ariaColIndex","ariaColSpan","ariaCurrent","ariaDisabled","ariaExpanded","ariaHasPopup","ariaHidden","ariaInvalid","ariaKeyShortcuts","ariaLabel","ariaLevel","ariaLive","ariaModal","ariaMultiLine","ariaMultiSelectable","ariaOrientation","ariaPlaceholder","ariaPosInSet","ariaPressed","ariaReadOnly","ariaRequired","ariaRoleDescription","ariaRowCount","ariaRowIndex","ariaRowSpan","ariaSelected","ariaSetSize","ariaSort","ariaValueMax","ariaValueMin","ariaValueNow","ariaValueText"],Nh=Oh.map(Lh);function Dh(e){return Nh.includes(e)}function Lh(e){return e.replace("aria","aria-").replace(/Elements?/g,"").toLowerCase()}
/**
 * @license
 * Copyright 2023 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */const $h=Symbol("privateIgnoreAttributeChangesFor");function Uh(e){var t;class r extends e{constructor(){super(...arguments),this[t]=new Set}attributeChangedCallback(e,t,r){if(!Dh(e))return void super.attributeChangedCallback(e,t,r);if(this[$h].has(e))return;this[$h].add(e),this.removeAttribute(e),this[$h].delete(e);const n=jh(e);null===r?delete this.dataset[n]:this.dataset[n]=r,this.requestUpdate(jh(e),t)}getAttribute(e){return Dh(e)?super.getAttribute(Mh(e)):super.getAttribute(e)}removeAttribute(e){super.removeAttribute(e),Dh(e)&&(super.removeAttribute(Mh(e)),this.requestUpdate())}}return t=$h,function(e){for(const t of Oh){const r=Lh(t),n=Mh(r),i=jh(r);e.createProperty(t,{attribute:r,noAccessor:!0}),e.createProperty(Symbol(n),{attribute:n,noAccessor:!0}),Object.defineProperty(e.prototype,t,{configurable:!0,enumerable:!0,get(){return this.dataset[i]??null},set(e){const r=this.dataset[i]??null;e!==r&&(null===e?delete this.dataset[i]:this.dataset[i]=e,this.requestUpdate(t,r))}})}}(r),r}function Mh(e){return`data-${e}`}function jh(e){return e.replace(/-\w/,e=>e[1].toUpperCase())}
/**
 * @license
 * Copyright 2023 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */const Fh=Symbol("internals"),Vh=Symbol("privateInternals");function zh(e){return e.currentTarget===e.target&&(e.composedPath()[0]===e.target&&(!e.target.disabled&&!function(e){const t=Bh;t&&(e.preventDefault(),e.stopImmediatePropagation());return async function(){Bh=!0,await null,Bh=!1}
/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */(),t}(e)))}let Bh=!1;const Hh=Uh((Wh=ih,class extends Wh{get[Fh](){return this[Vh]||(this[Vh]=this.attachInternals()),this[Vh]}}));var Wh;
/**
 * @license
 * Copyright 2023 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */class qh extends Hh{get name(){return this.getAttribute("name")??""}set name(e){this.setAttribute("name",e)}get form(){return this[Fh].form}constructor(){super(),this.disabled=!1,this.softDisabled=!1,this.href="",this.download="",this.target="",this.trailingIcon=!1,this.hasIcon=!1,this.type="submit",this.value="",this.addEventListener("click",this.handleClick.bind(this))}focus(){this.buttonElement?.focus()}blur(){this.buttonElement?.blur()}render(){const e=this.disabled||this.softDisabled,t=this.href?this.renderLink():this.renderButton(),r=this.href?"link":"button";return ne`
      ${this.renderElevationOrOutline?.()}
      <div class="background"></div>
      <md-focus-ring part="focus-ring" for=${r}></md-focus-ring>
      <md-ripple
        part="ripple"
        for=${r}
        ?disabled="${e}"></md-ripple>
      ${t}
    `}renderButton(){const{ariaLabel:e,ariaHasPopup:t,ariaExpanded:r}=this;return ne`<button
      id="button"
      class="button"
      ?disabled=${this.disabled}
      aria-disabled=${this.softDisabled||se}
      aria-label="${e||se}"
      aria-haspopup="${t||se}"
      aria-expanded="${r||se}">
      ${this.renderContent()}
    </button>`}renderLink(){const{ariaLabel:e,ariaHasPopup:t,ariaExpanded:r}=this;return ne`<a
      id="link"
      class="button"
      aria-label="${e||se}"
      aria-haspopup="${t||se}"
      aria-expanded="${r||se}"
      aria-disabled=${this.disabled||this.softDisabled||se}
      tabindex="${this.disabled&&!this.softDisabled?-1:se}"
      href=${this.href}
      download=${this.download||se}
      target=${this.target||se}
      >${this.renderContent()}
    </a>`}renderContent(){const e=ne`<slot
      name="icon"
      @slotchange="${this.handleSlotChange}"></slot>`;return ne`
      <span class="touch"></span>
      ${this.trailingIcon?se:e}
      <span class="label"><slot></slot></span>
      ${this.trailingIcon?e:se}
    `}handleClick(e){if(this.softDisabled||this.disabled&&this.href)return e.stopImmediatePropagation(),void e.preventDefault();zh(e)&&this.buttonElement&&(this.focus(),
/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */
function(e){const t=new MouseEvent("click",{bubbles:!0});e.dispatchEvent(t)}(this.buttonElement))}handleSlotChange(){this.hasIcon=this.assignedIcons.length>0}}qh.addInitializer(e=>{const t=e;t.addEventListener("click",async e=>{const{type:r,[Fh]:n}=t,{form:i}=n;i&&"button"!==r&&(await new Promise(e=>{setTimeout(e)}),e.defaultPrevented||("reset"!==r?(i.addEventListener("submit",e=>{Object.defineProperty(e,"submitter",{configurable:!0,enumerable:!0,get:()=>t})},{capture:!0,once:!0}),n.setFormValue(t.value),i.requestSubmit()):i.reset()))})}),qh.formAssociated=!0,qh.shadowRootOptions={mode:"open",delegatesFocus:!0},tn([ch({type:Boolean,reflect:!0})],qh.prototype,"disabled",void 0),tn([ch({type:Boolean,attribute:"soft-disabled",reflect:!0})],qh.prototype,"softDisabled",void 0),tn([ch()],qh.prototype,"href",void 0),tn([ch()],qh.prototype,"download",void 0),tn([ch()],qh.prototype,"target",void 0),tn([ch({type:Boolean,attribute:"trailing-icon",reflect:!0})],qh.prototype,"trailingIcon",void 0),tn([ch({type:Boolean,attribute:"has-icon",reflect:!0})],qh.prototype,"hasIcon",void 0),tn([ch()],qh.prototype,"type",void 0),tn([ch({reflect:!0})],qh.prototype,"value",void 0),tn([uh(".button")],qh.prototype,"buttonElement",void 0),tn([function(e){return(t,r)=>{const{slot:n,selector:i}=e??{},s="slot"+(n?`[name=${n}]`:":not([name])");return dh(t,r,{get(){const t=this.renderRoot?.querySelector(s),r=t?.assignedElements(e)??[];return void 0===i?r:r.filter(e=>e.matches(i))}})}}({slot:"icon",flatten:!0})],qh.prototype,"assignedIcons",void 0);
/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */
class Gh extends qh{renderElevationOrOutline(){return ne`<md-elevation part="elevation"></md-elevation>`}}
/**
 * @license
 * Copyright 2024 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */const Kh=Fc`:host{--_container-color: var(--md-filled-button-container-color, var(--md-sys-color-primary, #6750a4));--_container-elevation: var(--md-filled-button-container-elevation, 0);--_container-height: var(--md-filled-button-container-height, 40px);--_container-shadow-color: var(--md-filled-button-container-shadow-color, var(--md-sys-color-shadow, #000));--_disabled-container-color: var(--md-filled-button-disabled-container-color, var(--md-sys-color-on-surface, #1d1b20));--_disabled-container-elevation: var(--md-filled-button-disabled-container-elevation, 0);--_disabled-container-opacity: var(--md-filled-button-disabled-container-opacity, 0.12);--_disabled-label-text-color: var(--md-filled-button-disabled-label-text-color, var(--md-sys-color-on-surface, #1d1b20));--_disabled-label-text-opacity: var(--md-filled-button-disabled-label-text-opacity, 0.38);--_focus-container-elevation: var(--md-filled-button-focus-container-elevation, 0);--_focus-label-text-color: var(--md-filled-button-focus-label-text-color, var(--md-sys-color-on-primary, #fff));--_hover-container-elevation: var(--md-filled-button-hover-container-elevation, 1);--_hover-label-text-color: var(--md-filled-button-hover-label-text-color, var(--md-sys-color-on-primary, #fff));--_hover-state-layer-color: var(--md-filled-button-hover-state-layer-color, var(--md-sys-color-on-primary, #fff));--_hover-state-layer-opacity: var(--md-filled-button-hover-state-layer-opacity, 0.08);--_label-text-color: var(--md-filled-button-label-text-color, var(--md-sys-color-on-primary, #fff));--_label-text-font: var(--md-filled-button-label-text-font, var(--md-sys-typescale-label-large-font, var(--md-ref-typeface-plain, Roboto)));--_label-text-line-height: var(--md-filled-button-label-text-line-height, var(--md-sys-typescale-label-large-line-height, 1.25rem));--_label-text-size: var(--md-filled-button-label-text-size, var(--md-sys-typescale-label-large-size, 0.875rem));--_label-text-weight: var(--md-filled-button-label-text-weight, var(--md-sys-typescale-label-large-weight, var(--md-ref-typeface-weight-medium, 500)));--_pressed-container-elevation: var(--md-filled-button-pressed-container-elevation, 0);--_pressed-label-text-color: var(--md-filled-button-pressed-label-text-color, var(--md-sys-color-on-primary, #fff));--_pressed-state-layer-color: var(--md-filled-button-pressed-state-layer-color, var(--md-sys-color-on-primary, #fff));--_pressed-state-layer-opacity: var(--md-filled-button-pressed-state-layer-opacity, 0.12);--_disabled-icon-color: var(--md-filled-button-disabled-icon-color, var(--md-sys-color-on-surface, #1d1b20));--_disabled-icon-opacity: var(--md-filled-button-disabled-icon-opacity, 0.38);--_focus-icon-color: var(--md-filled-button-focus-icon-color, var(--md-sys-color-on-primary, #fff));--_hover-icon-color: var(--md-filled-button-hover-icon-color, var(--md-sys-color-on-primary, #fff));--_icon-color: var(--md-filled-button-icon-color, var(--md-sys-color-on-primary, #fff));--_icon-size: var(--md-filled-button-icon-size, 18px);--_pressed-icon-color: var(--md-filled-button-pressed-icon-color, var(--md-sys-color-on-primary, #fff));--_container-shape-start-start: var(--md-filled-button-container-shape-start-start, var(--md-filled-button-container-shape, var(--md-sys-shape-corner-full, 9999px)));--_container-shape-start-end: var(--md-filled-button-container-shape-start-end, var(--md-filled-button-container-shape, var(--md-sys-shape-corner-full, 9999px)));--_container-shape-end-end: var(--md-filled-button-container-shape-end-end, var(--md-filled-button-container-shape, var(--md-sys-shape-corner-full, 9999px)));--_container-shape-end-start: var(--md-filled-button-container-shape-end-start, var(--md-filled-button-container-shape, var(--md-sys-shape-corner-full, 9999px)));--_leading-space: var(--md-filled-button-leading-space, 24px);--_trailing-space: var(--md-filled-button-trailing-space, 24px);--_with-leading-icon-leading-space: var(--md-filled-button-with-leading-icon-leading-space, 16px);--_with-leading-icon-trailing-space: var(--md-filled-button-with-leading-icon-trailing-space, 24px);--_with-trailing-icon-leading-space: var(--md-filled-button-with-trailing-icon-leading-space, 24px);--_with-trailing-icon-trailing-space: var(--md-filled-button-with-trailing-icon-trailing-space, 16px)}
`,Jh=Fc`md-elevation{transition-duration:280ms}:host(:is([disabled],[soft-disabled])) md-elevation{transition:none}md-elevation{--md-elevation-level: var(--_container-elevation);--md-elevation-shadow-color: var(--_container-shadow-color)}:host(:focus-within) md-elevation{--md-elevation-level: var(--_focus-container-elevation)}:host(:hover) md-elevation{--md-elevation-level: var(--_hover-container-elevation)}:host(:active) md-elevation{--md-elevation-level: var(--_pressed-container-elevation)}:host(:is([disabled],[soft-disabled])) md-elevation{--md-elevation-level: var(--_disabled-container-elevation)}
`,Xh=Fc`:host{border-start-start-radius:var(--_container-shape-start-start);border-start-end-radius:var(--_container-shape-start-end);border-end-start-radius:var(--_container-shape-end-start);border-end-end-radius:var(--_container-shape-end-end);box-sizing:border-box;cursor:pointer;display:inline-flex;gap:8px;min-height:var(--_container-height);outline:none;padding-block:calc((var(--_container-height) - max(var(--_label-text-line-height),var(--_icon-size)))/2);padding-inline-start:var(--_leading-space);padding-inline-end:var(--_trailing-space);place-content:center;place-items:center;position:relative;font-family:var(--_label-text-font);font-size:var(--_label-text-size);line-height:var(--_label-text-line-height);font-weight:var(--_label-text-weight);text-overflow:ellipsis;text-wrap:nowrap;user-select:none;-webkit-tap-highlight-color:rgba(0,0,0,0);vertical-align:top;--md-ripple-hover-color: var(--_hover-state-layer-color);--md-ripple-pressed-color: var(--_pressed-state-layer-color);--md-ripple-hover-opacity: var(--_hover-state-layer-opacity);--md-ripple-pressed-opacity: var(--_pressed-state-layer-opacity)}md-focus-ring{--md-focus-ring-shape-start-start: var(--_container-shape-start-start);--md-focus-ring-shape-start-end: var(--_container-shape-start-end);--md-focus-ring-shape-end-end: var(--_container-shape-end-end);--md-focus-ring-shape-end-start: var(--_container-shape-end-start)}:host(:is([disabled],[soft-disabled])){cursor:default;pointer-events:none}.button{border-radius:inherit;cursor:inherit;display:inline-flex;align-items:center;justify-content:center;border:none;outline:none;-webkit-appearance:none;vertical-align:middle;background:rgba(0,0,0,0);text-decoration:none;min-width:calc(64px - var(--_leading-space) - var(--_trailing-space));width:100%;z-index:0;height:100%;font:inherit;color:var(--_label-text-color);padding:0;gap:inherit;text-transform:inherit}.button::-moz-focus-inner{padding:0;border:0}:host(:hover) .button{color:var(--_hover-label-text-color)}:host(:focus-within) .button{color:var(--_focus-label-text-color)}:host(:active) .button{color:var(--_pressed-label-text-color)}.background{background:var(--_container-color);border-radius:inherit;inset:0;position:absolute}.label{overflow:hidden}:is(.button,.label,.label slot),.label ::slotted(*){text-overflow:inherit}:host(:is([disabled],[soft-disabled])) .label{color:var(--_disabled-label-text-color);opacity:var(--_disabled-label-text-opacity)}:host(:is([disabled],[soft-disabled])) .background{background:var(--_disabled-container-color);opacity:var(--_disabled-container-opacity)}@media(forced-colors: active){.background{border:1px solid CanvasText}:host(:is([disabled],[soft-disabled])){--_disabled-icon-color: GrayText;--_disabled-icon-opacity: 1;--_disabled-container-opacity: 1;--_disabled-label-text-color: GrayText;--_disabled-label-text-opacity: 1}}:host([has-icon]:not([trailing-icon])){padding-inline-start:var(--_with-leading-icon-leading-space);padding-inline-end:var(--_with-leading-icon-trailing-space)}:host([has-icon][trailing-icon]){padding-inline-start:var(--_with-trailing-icon-leading-space);padding-inline-end:var(--_with-trailing-icon-trailing-space)}::slotted([slot=icon]){display:inline-flex;position:relative;writing-mode:horizontal-tb;fill:currentColor;flex-shrink:0;color:var(--_icon-color);font-size:var(--_icon-size);inline-size:var(--_icon-size);block-size:var(--_icon-size)}:host(:hover) ::slotted([slot=icon]){color:var(--_hover-icon-color)}:host(:focus-within) ::slotted([slot=icon]){color:var(--_focus-icon-color)}:host(:active) ::slotted([slot=icon]){color:var(--_pressed-icon-color)}:host(:is([disabled],[soft-disabled])) ::slotted([slot=icon]){color:var(--_disabled-icon-color);opacity:var(--_disabled-icon-opacity)}.touch{position:absolute;top:50%;height:48px;left:0;right:0;transform:translateY(-50%)}:host([touch-target=wrapper]){margin:max(0px,(48px - var(--_container-height))/2) 0}:host([touch-target=none]) .touch{display:none}
`
/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */;
/**
 * @license
 * Copyright 2024 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */let Yh=class extends Gh{};Yh.styles=[Xh,Jh,Kh],Yh=tn([oh("md-filled-button")],Yh);
/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */
class Zh extends qh{}
/**
 * @license
 * Copyright 2024 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */const Qh=Fc`:host{--_container-height: var(--md-text-button-container-height, 40px);--_disabled-label-text-color: var(--md-text-button-disabled-label-text-color, var(--md-sys-color-on-surface, #1d1b20));--_disabled-label-text-opacity: var(--md-text-button-disabled-label-text-opacity, 0.38);--_focus-label-text-color: var(--md-text-button-focus-label-text-color, var(--md-sys-color-primary, #6750a4));--_hover-label-text-color: var(--md-text-button-hover-label-text-color, var(--md-sys-color-primary, #6750a4));--_hover-state-layer-color: var(--md-text-button-hover-state-layer-color, var(--md-sys-color-primary, #6750a4));--_hover-state-layer-opacity: var(--md-text-button-hover-state-layer-opacity, 0.08);--_label-text-color: var(--md-text-button-label-text-color, var(--md-sys-color-primary, #6750a4));--_label-text-font: var(--md-text-button-label-text-font, var(--md-sys-typescale-label-large-font, var(--md-ref-typeface-plain, Roboto)));--_label-text-line-height: var(--md-text-button-label-text-line-height, var(--md-sys-typescale-label-large-line-height, 1.25rem));--_label-text-size: var(--md-text-button-label-text-size, var(--md-sys-typescale-label-large-size, 0.875rem));--_label-text-weight: var(--md-text-button-label-text-weight, var(--md-sys-typescale-label-large-weight, var(--md-ref-typeface-weight-medium, 500)));--_pressed-label-text-color: var(--md-text-button-pressed-label-text-color, var(--md-sys-color-primary, #6750a4));--_pressed-state-layer-color: var(--md-text-button-pressed-state-layer-color, var(--md-sys-color-primary, #6750a4));--_pressed-state-layer-opacity: var(--md-text-button-pressed-state-layer-opacity, 0.12);--_disabled-icon-color: var(--md-text-button-disabled-icon-color, var(--md-sys-color-on-surface, #1d1b20));--_disabled-icon-opacity: var(--md-text-button-disabled-icon-opacity, 0.38);--_focus-icon-color: var(--md-text-button-focus-icon-color, var(--md-sys-color-primary, #6750a4));--_hover-icon-color: var(--md-text-button-hover-icon-color, var(--md-sys-color-primary, #6750a4));--_icon-color: var(--md-text-button-icon-color, var(--md-sys-color-primary, #6750a4));--_icon-size: var(--md-text-button-icon-size, 18px);--_pressed-icon-color: var(--md-text-button-pressed-icon-color, var(--md-sys-color-primary, #6750a4));--_container-shape-start-start: var(--md-text-button-container-shape-start-start, var(--md-text-button-container-shape, var(--md-sys-shape-corner-full, 9999px)));--_container-shape-start-end: var(--md-text-button-container-shape-start-end, var(--md-text-button-container-shape, var(--md-sys-shape-corner-full, 9999px)));--_container-shape-end-end: var(--md-text-button-container-shape-end-end, var(--md-text-button-container-shape, var(--md-sys-shape-corner-full, 9999px)));--_container-shape-end-start: var(--md-text-button-container-shape-end-start, var(--md-text-button-container-shape, var(--md-sys-shape-corner-full, 9999px)));--_leading-space: var(--md-text-button-leading-space, 12px);--_trailing-space: var(--md-text-button-trailing-space, 12px);--_with-leading-icon-leading-space: var(--md-text-button-with-leading-icon-leading-space, 12px);--_with-leading-icon-trailing-space: var(--md-text-button-with-leading-icon-trailing-space, 16px);--_with-trailing-icon-leading-space: var(--md-text-button-with-trailing-icon-leading-space, 16px);--_with-trailing-icon-trailing-space: var(--md-text-button-with-trailing-icon-trailing-space, 12px);--_container-color: none;--_disabled-container-color: none;--_disabled-container-opacity: 0}
`
/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */;let ed=class extends Zh{};ed.styles=[Xh,Qh],ed=tn([oh("md-text-button")],ed);
/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */
class td extends qh{renderElevationOrOutline(){return ne`<md-elevation part="elevation"></md-elevation>`}}
/**
 * @license
 * Copyright 2024 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */const rd=Fc`:host{--_container-color: var(--md-filled-tonal-button-container-color, var(--md-sys-color-secondary-container, #e8def8));--_container-elevation: var(--md-filled-tonal-button-container-elevation, 0);--_container-height: var(--md-filled-tonal-button-container-height, 40px);--_container-shadow-color: var(--md-filled-tonal-button-container-shadow-color, var(--md-sys-color-shadow, #000));--_disabled-container-color: var(--md-filled-tonal-button-disabled-container-color, var(--md-sys-color-on-surface, #1d1b20));--_disabled-container-elevation: var(--md-filled-tonal-button-disabled-container-elevation, 0);--_disabled-container-opacity: var(--md-filled-tonal-button-disabled-container-opacity, 0.12);--_disabled-label-text-color: var(--md-filled-tonal-button-disabled-label-text-color, var(--md-sys-color-on-surface, #1d1b20));--_disabled-label-text-opacity: var(--md-filled-tonal-button-disabled-label-text-opacity, 0.38);--_focus-container-elevation: var(--md-filled-tonal-button-focus-container-elevation, 0);--_focus-label-text-color: var(--md-filled-tonal-button-focus-label-text-color, var(--md-sys-color-on-secondary-container, #1d192b));--_hover-container-elevation: var(--md-filled-tonal-button-hover-container-elevation, 1);--_hover-label-text-color: var(--md-filled-tonal-button-hover-label-text-color, var(--md-sys-color-on-secondary-container, #1d192b));--_hover-state-layer-color: var(--md-filled-tonal-button-hover-state-layer-color, var(--md-sys-color-on-secondary-container, #1d192b));--_hover-state-layer-opacity: var(--md-filled-tonal-button-hover-state-layer-opacity, 0.08);--_label-text-color: var(--md-filled-tonal-button-label-text-color, var(--md-sys-color-on-secondary-container, #1d192b));--_label-text-font: var(--md-filled-tonal-button-label-text-font, var(--md-sys-typescale-label-large-font, var(--md-ref-typeface-plain, Roboto)));--_label-text-line-height: var(--md-filled-tonal-button-label-text-line-height, var(--md-sys-typescale-label-large-line-height, 1.25rem));--_label-text-size: var(--md-filled-tonal-button-label-text-size, var(--md-sys-typescale-label-large-size, 0.875rem));--_label-text-weight: var(--md-filled-tonal-button-label-text-weight, var(--md-sys-typescale-label-large-weight, var(--md-ref-typeface-weight-medium, 500)));--_pressed-container-elevation: var(--md-filled-tonal-button-pressed-container-elevation, 0);--_pressed-label-text-color: var(--md-filled-tonal-button-pressed-label-text-color, var(--md-sys-color-on-secondary-container, #1d192b));--_pressed-state-layer-color: var(--md-filled-tonal-button-pressed-state-layer-color, var(--md-sys-color-on-secondary-container, #1d192b));--_pressed-state-layer-opacity: var(--md-filled-tonal-button-pressed-state-layer-opacity, 0.12);--_disabled-icon-color: var(--md-filled-tonal-button-disabled-icon-color, var(--md-sys-color-on-surface, #1d1b20));--_disabled-icon-opacity: var(--md-filled-tonal-button-disabled-icon-opacity, 0.38);--_focus-icon-color: var(--md-filled-tonal-button-focus-icon-color, var(--md-sys-color-on-secondary-container, #1d192b));--_hover-icon-color: var(--md-filled-tonal-button-hover-icon-color, var(--md-sys-color-on-secondary-container, #1d192b));--_icon-color: var(--md-filled-tonal-button-icon-color, var(--md-sys-color-on-secondary-container, #1d192b));--_icon-size: var(--md-filled-tonal-button-icon-size, 18px);--_pressed-icon-color: var(--md-filled-tonal-button-pressed-icon-color, var(--md-sys-color-on-secondary-container, #1d192b));--_container-shape-start-start: var(--md-filled-tonal-button-container-shape-start-start, var(--md-filled-tonal-button-container-shape, var(--md-sys-shape-corner-full, 9999px)));--_container-shape-start-end: var(--md-filled-tonal-button-container-shape-start-end, var(--md-filled-tonal-button-container-shape, var(--md-sys-shape-corner-full, 9999px)));--_container-shape-end-end: var(--md-filled-tonal-button-container-shape-end-end, var(--md-filled-tonal-button-container-shape, var(--md-sys-shape-corner-full, 9999px)));--_container-shape-end-start: var(--md-filled-tonal-button-container-shape-end-start, var(--md-filled-tonal-button-container-shape, var(--md-sys-shape-corner-full, 9999px)));--_leading-space: var(--md-filled-tonal-button-leading-space, 24px);--_trailing-space: var(--md-filled-tonal-button-trailing-space, 24px);--_with-leading-icon-leading-space: var(--md-filled-tonal-button-with-leading-icon-leading-space, 16px);--_with-leading-icon-trailing-space: var(--md-filled-tonal-button-with-leading-icon-trailing-space, 24px);--_with-trailing-icon-leading-space: var(--md-filled-tonal-button-with-trailing-icon-leading-space, 24px);--_with-trailing-icon-trailing-space: var(--md-filled-tonal-button-with-trailing-icon-trailing-space, 16px)}
`
/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */;let nd=class extends td{};nd.styles=[Xh,Jh,rd],nd=tn([oh("md-filled-tonal-button")],nd);
/**
 * @license
 * Copyright 2023 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */
const id=Uh(ih);class sd extends id{constructor(){super(...arguments),this.value=0,this.max=1,this.indeterminate=!1,this.fourColor=!1}render(){const{ariaLabel:e}=this;return ne`
      <div
        class="progress ${Sh(this.getRenderClasses())}"
        role="progressbar"
        aria-label="${e||se}"
        aria-valuemin="0"
        aria-valuemax=${this.max}
        aria-valuenow=${this.indeterminate?se:this.value}
        >${this.renderIndicator()}</div
      >
    `}getRenderClasses(){return{indeterminate:this.indeterminate,"four-color":this.fourColor}}}tn([ch({type:Number})],sd.prototype,"value",void 0),tn([ch({type:Number})],sd.prototype,"max",void 0),tn([ch({type:Boolean})],sd.prototype,"indeterminate",void 0),tn([ch({type:Boolean,attribute:"four-color"})],sd.prototype,"fourColor",void 0);
/**
 * @license
 * Copyright 2023 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */
class od extends sd{renderIndicator(){return this.indeterminate?this.renderIndeterminateContainer():this.renderDeterminateContainer()}renderDeterminateContainer(){const e=100*(1-this.value/this.max);return ne`
      <svg viewBox="0 0 4800 4800">
        <circle class="track" pathLength="100"></circle>
        <circle
          class="active-track"
          pathLength="100"
          stroke-dashoffset=${e}></circle>
      </svg>
    `}renderIndeterminateContainer(){return ne` <div class="spinner">
      <div class="left">
        <div class="circle"></div>
      </div>
      <div class="right">
        <div class="circle"></div>
      </div>
    </div>`}}
/**
 * @license
 * Copyright 2024 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */const ad=Fc`:host{--_active-indicator-color: var(--md-circular-progress-active-indicator-color, var(--md-sys-color-primary, #6750a4));--_active-indicator-width: var(--md-circular-progress-active-indicator-width, 10);--_four-color-active-indicator-four-color: var(--md-circular-progress-four-color-active-indicator-four-color, var(--md-sys-color-tertiary-container, #ffd8e4));--_four-color-active-indicator-one-color: var(--md-circular-progress-four-color-active-indicator-one-color, var(--md-sys-color-primary, #6750a4));--_four-color-active-indicator-three-color: var(--md-circular-progress-four-color-active-indicator-three-color, var(--md-sys-color-tertiary, #7d5260));--_four-color-active-indicator-two-color: var(--md-circular-progress-four-color-active-indicator-two-color, var(--md-sys-color-primary-container, #eaddff));--_size: var(--md-circular-progress-size, 48px);display:inline-flex;vertical-align:middle;width:var(--_size);height:var(--_size);position:relative;align-items:center;justify-content:center;contain:strict;content-visibility:auto}.progress{flex:1;align-self:stretch;margin:4px}.progress,.spinner,.left,.right,.circle,svg,.track,.active-track{position:absolute;inset:0}svg{transform:rotate(-90deg)}circle{cx:50%;cy:50%;r:calc(50%*(1 - var(--_active-indicator-width)/100));stroke-width:calc(var(--_active-indicator-width)*1%);stroke-dasharray:100;fill:rgba(0,0,0,0)}.active-track{transition:stroke-dashoffset 500ms cubic-bezier(0, 0, 0.2, 1);stroke:var(--_active-indicator-color)}.track{stroke:rgba(0,0,0,0)}.progress.indeterminate{animation:linear infinite linear-rotate;animation-duration:1568.2352941176ms}.spinner{animation:infinite both rotate-arc;animation-duration:5332ms;animation-timing-function:cubic-bezier(0.4, 0, 0.2, 1)}.left{overflow:hidden;inset:0 50% 0 0}.right{overflow:hidden;inset:0 0 0 50%}.circle{box-sizing:border-box;border-radius:50%;border:solid calc(var(--_active-indicator-width)/100*(var(--_size) - 8px));border-color:var(--_active-indicator-color) var(--_active-indicator-color) rgba(0,0,0,0) rgba(0,0,0,0);animation:expand-arc;animation-iteration-count:infinite;animation-fill-mode:both;animation-duration:1333ms,5332ms;animation-timing-function:cubic-bezier(0.4, 0, 0.2, 1)}.four-color .circle{animation-name:expand-arc,four-color}.left .circle{rotate:135deg;inset:0 -100% 0 0}.right .circle{rotate:100deg;inset:0 0 0 -100%;animation-delay:-666.5ms,0ms}@media(forced-colors: active){.active-track{stroke:CanvasText}.circle{border-color:CanvasText CanvasText Canvas Canvas}}@keyframes expand-arc{0%{transform:rotate(265deg)}50%{transform:rotate(130deg)}100%{transform:rotate(265deg)}}@keyframes rotate-arc{12.5%{transform:rotate(135deg)}25%{transform:rotate(270deg)}37.5%{transform:rotate(405deg)}50%{transform:rotate(540deg)}62.5%{transform:rotate(675deg)}75%{transform:rotate(810deg)}87.5%{transform:rotate(945deg)}100%{transform:rotate(1080deg)}}@keyframes linear-rotate{to{transform:rotate(360deg)}}@keyframes four-color{0%{border-top-color:var(--_four-color-active-indicator-one-color);border-right-color:var(--_four-color-active-indicator-one-color)}15%{border-top-color:var(--_four-color-active-indicator-one-color);border-right-color:var(--_four-color-active-indicator-one-color)}25%{border-top-color:var(--_four-color-active-indicator-two-color);border-right-color:var(--_four-color-active-indicator-two-color)}40%{border-top-color:var(--_four-color-active-indicator-two-color);border-right-color:var(--_four-color-active-indicator-two-color)}50%{border-top-color:var(--_four-color-active-indicator-three-color);border-right-color:var(--_four-color-active-indicator-three-color)}65%{border-top-color:var(--_four-color-active-indicator-three-color);border-right-color:var(--_four-color-active-indicator-three-color)}75%{border-top-color:var(--_four-color-active-indicator-four-color);border-right-color:var(--_four-color-active-indicator-four-color)}90%{border-top-color:var(--_four-color-active-indicator-four-color);border-right-color:var(--_four-color-active-indicator-four-color)}100%{border-top-color:var(--_four-color-active-indicator-one-color);border-right-color:var(--_four-color-active-indicator-one-color)}}
`
/**
 * @license
 * Copyright 2023 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */;let ld=class extends od{};ld.styles=[ad],ld=tn([oh("md-circular-progress")],ld);var cd=function(e,t,r,n){var i,s=arguments.length,o=s<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,r):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)o=Reflect.decorate(e,t,r,n);else for(var a=e.length-1;a>=0;a--)(i=e[a])&&(o=(s<3?i(o):s>3?i(t,r,o):i(t,r))||o);return s>3&&o&&Object.defineProperty(t,r,o),o};let hd=class extends(L(ih)){constructor(){super(),this.email="",this.password=""}static{this.styles=Fc`
    :host {
      display: block;
      font-family: var(--df-font-family, 'Roboto', sans-serif);
    }

    .surface {
      max-width: 420px;
      padding: 24px;
      border-radius: 16px;
      background: var(--md-sys-color-surface, #ffffff);
      border: 1px solid var(--md-sys-color-outline-variant, rgba(15, 23, 42, 0.12));
      box-shadow: 0 14px 32px rgba(15, 23, 42, 0.08);
    }

    h2 {
      margin: 0 0 20px;
      font-size: 1.6rem;
      font-weight: 600;
      color: var(--md-sys-color-on-surface, #0f172a);
    }

    form {
      display: flex;
      flex-direction: column;
      gap: 20px;
    }

    md-circular-progress {
      display: block;
      margin: 16px auto 0;
    }

    .error {
      padding: 12px;
      border-radius: 12px;
      background: var(--md-sys-color-error-container, rgba(186, 26, 26, 0.12));
      color: var(--md-sys-color-on-error-container, #410e0b);
      font-size: 0.9rem;
    }
  `}render(){const e=ac.get(),t="loading"===e.authState,r=e.error;return ne`
      <div class="surface">
        <h2>Sign In</h2>
        ${r?ne`<div class="error" role="alert">${r}</div>`:se}

        <form @submit=${this._handleSubmit}>
          <md-outlined-text-field
            type="email"
            label="Email"
            .value=${this.email}
            autocomplete="email"
            ?disabled=${t}
            required
            @input=${this._handleEmailInput}
          ></md-outlined-text-field>

          <md-outlined-text-field
            type="password"
            label="Password"
            .value=${this.password}
            autocomplete="current-password"
            ?disabled=${t}
            required
            @input=${this._handlePasswordInput}
          ></md-outlined-text-field>

          <md-filled-button type="submit" ?disabled=${t}>
            ${t?"Signing In…":"Sign In"}
          </md-filled-button>

          ${t?ne`<md-circular-progress indeterminate></md-circular-progress>`:se}
        </form>
      </div>
    `}_handleEmailInput(e){this.email=e.target.value??""}_handlePasswordInput(e){this.password=e.target.value??""}async _handleSubmit(e){e.preventDefault();const t={email:this.email,password:this.password};try{await lc(t),this.dispatchEvent(new CustomEvent("df-sign-in-success",{detail:{email:this.email},bubbles:!0,composed:!0})),this.email="",this.password=""}catch(e){this.dispatchEvent(new CustomEvent("df-sign-in-error",{detail:{error:e instanceof Error?e.message:"Sign in failed"},bubbles:!0,composed:!0}))}}};cd([hh()],hd.prototype,"email",void 0),cd([hh()],hd.prototype,"password",void 0),hd=cd([oh("df-sign-in")],hd);var dd=function(e,t,r,n){var i,s=arguments.length,o=s<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,r):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)o=Reflect.decorate(e,t,r,n);else for(var a=e.length-1;a>=0;a--)(i=e[a])&&(o=(s<3?i(o):s>3?i(t,r,o):i(t,r))||o);return s>3&&o&&Object.defineProperty(t,r,o),o};let ud=class extends(L(ih)){constructor(){super(),this.email="",this.password="",this.confirmPassword="",this.displayName="",this.validationError="",this.isSubmitting=!1}static{this.styles=Fc`
    :host {
      display: block;
      font-family: var(--df-font-family, 'Roboto', sans-serif);
    }

    .surface {
      max-width: 480px;
      padding: 28px;
      border-radius: 18px;
      background: var(--md-sys-color-surface, #ffffff);
      border: 1px solid var(--md-sys-color-outline-variant, rgba(15, 23, 42, 0.12));
      box-shadow: 0 16px 36px rgba(15, 23, 42, 0.1);
    }

    h2 {
      margin: 0;
      font-size: 1.7rem;
      font-weight: 600;
      color: var(--md-sys-color-on-surface, #0f172a);
    }

    p.description {
      margin: 12px 0 24px;
      font-size: 0.95rem;
      color: var(--md-sys-color-on-surface-variant, #4b5563);
      line-height: 1.6;
    }

    form {
      display: flex;
      flex-direction: column;
      gap: 20px;
    }

    .feedback {
      padding: 12px;
      border-radius: 12px;
      font-size: 0.9rem;
    }

    .feedback.error {
      background: var(--md-sys-color-error-container, rgba(186, 26, 26, 0.12));
      color: var(--md-sys-color-on-error-container, #410e0b);
    }

    md-circular-progress {
      display: block;
      margin: 16px auto 0;
    }
  `}render(){const e=ac.get().error;return ne`
      <div class="surface">
        <h2>Create an account</h2>
        <p class="description">
          Provide your email address and a strong password. You can optionally add a display name now or update it later.
        </p>

        ${e?ne`<div class="feedback error" role="alert">${e}</div>`:se}
        ${this.validationError?ne`<div class="feedback error" role="alert">${this.validationError}</div>`:se}

        <form @submit=${this._handleSubmit}>
          <md-outlined-text-field
            label="Display name"
            supporting-text="Optional"
            .value=${this.displayName}
            ?disabled=${this.isSubmitting}
            @input=${this._handleDisplayNameInput}
          ></md-outlined-text-field>

          <md-divider></md-divider>

          <md-outlined-text-field
            type="email"
            label="Email"
            .value=${this.email}
            autocomplete="email"
            ?disabled=${this.isSubmitting}
            required
            @input=${this._handleEmailInput}
          ></md-outlined-text-field>

          <md-outlined-text-field
            type="password"
            label="Password"
            supporting-text="Minimum 6 characters"
            .value=${this.password}
            autocomplete="new-password"
            ?disabled=${this.isSubmitting}
            required
            minlength="6"
            @input=${this._handlePasswordInput}
          ></md-outlined-text-field>

          <md-outlined-text-field
            type="password"
            label="Confirm password"
            .value=${this.confirmPassword}
            autocomplete="new-password"
            ?disabled=${this.isSubmitting}
            required
            minlength="6"
            @input=${this._handleConfirmPasswordInput}
          ></md-outlined-text-field>

          <md-filled-button type="submit" ?disabled=${this.isSubmitting}>
            ${this.isSubmitting?"Creating account…":"Sign Up"}
          </md-filled-button>

          ${this.isSubmitting?ne`<md-circular-progress indeterminate></md-circular-progress>`:se}
        </form>
      </div>
    `}_handleDisplayNameInput(e){this.displayName=e.target.value??""}_handleEmailInput(e){this.email=e.target.value??"",this._clearValidationError()}_handlePasswordInput(e){this.password=e.target.value??"",this._clearValidationError()}_handleConfirmPasswordInput(e){this.confirmPassword=e.target.value??"",this._clearValidationError()}_clearValidationError(){this.validationError=""}async _handleSubmit(e){if(e.preventDefault(),this.password!==this.confirmPassword)return void(this.validationError="Passwords do not match");const t={email:this.email,password:this.password,displayName:this.displayName||void 0};this.isSubmitting=!0;try{await cc(t),this.dispatchEvent(new CustomEvent("df-sign-up-success",{detail:{email:this.email,displayName:this.displayName},bubbles:!0,composed:!0})),this.email="",this.password="",this.confirmPassword="",this.displayName="",this.validationError=""}catch(e){this.dispatchEvent(new CustomEvent("df-sign-up-error",{detail:{error:e instanceof Error?e.message:"Sign up failed"},bubbles:!0,composed:!0}))}finally{this.isSubmitting=!1}}};dd([hh()],ud.prototype,"email",void 0),dd([hh()],ud.prototype,"password",void 0),dd([hh()],ud.prototype,"confirmPassword",void 0),dd([hh()],ud.prototype,"displayName",void 0),dd([hh()],ud.prototype,"validationError",void 0),dd([hh()],ud.prototype,"isSubmitting",void 0),ud=dd([oh("df-sign-up")],ud);var pd=function(e,t,r,n){var i,s=arguments.length,o=s<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,r):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)o=Reflect.decorate(e,t,r,n);else for(var a=e.length-1;a>=0;a--)(i=e[a])&&(o=(s<3?i(o):s>3?i(t,r,o):i(t,r))||o);return s>3&&o&&Object.defineProperty(t,r,o),o};let fd=class extends(L(ih)){constructor(){super(),this.email="",this.isSubmitting=!1,this.successMessage=""}static{this.styles=Fc`
    :host {
      display: block;
      font-family: var(--df-font-family, 'Roboto', sans-serif);
    }

    .surface {
      max-width: 440px;
      padding: 24px;
      border-radius: 16px;
      background: var(--md-sys-color-surface, #ffffff);
      border: 1px solid var(--md-sys-color-outline-variant, rgba(15, 23, 42, 0.12));
      box-shadow: 0 12px 32px rgba(15, 23, 42, 0.09);
    }

    h2 {
      margin: 0;
      font-size: 1.6rem;
      font-weight: 600;
      color: var(--md-sys-color-on-surface, #0f172a);
    }

    p.description {
      margin: 12px 0 24px;
      font-size: 0.95rem;
      line-height: 1.6;
      color: var(--md-sys-color-on-surface-variant, #475569);
    }

    form {
      display: flex;
      flex-direction: column;
      gap: 20px;
    }

    md-circular-progress {
      display: block;
      margin: 16px auto 0;
    }

    .feedback {
      padding: 12px;
      border-radius: 12px;
      font-size: 0.9rem;
    }

    .feedback.error {
      background: var(--md-sys-color-error-container, rgba(186, 26, 26, 0.12));
      color: var(--md-sys-color-on-error-container, #410e0b);
    }

    .feedback.success {
      background: var(--md-sys-color-secondary-container, rgba(63, 81, 181, 0.12));
      color: var(--md-sys-color-on-secondary-container, #1e1b4b);
    }
  `}render(){const e=ac.get().error;return ne`
      <div class="surface">
        <h2>Reset Password</h2>
        <p class="description">
          Enter your email address and we'll send you a secure link to reset your password.
        </p>

        ${e?ne`<div class="feedback error" role="alert">${e}</div>`:se}
        ${this.successMessage?ne`<div class="feedback success">${this.successMessage}</div>`:se}

        <form @submit=${this._handleSubmit}>
          <md-outlined-text-field
            type="email"
            label="Email"
            .value=${this.email}
            autocomplete="email"
            ?disabled=${this.isSubmitting}
            required
            @input=${this._handleEmailInput}
          ></md-outlined-text-field>

          <md-filled-button type="submit" ?disabled=${this.isSubmitting}>
            ${this.isSubmitting?"Sending…":"Send Reset Link"}
          </md-filled-button>

          ${this.isSubmitting?ne`<md-circular-progress indeterminate></md-circular-progress>`:se}
        </form>
      </div>
    `}_handleEmailInput(e){this.email=e.target.value??"",this.successMessage=""}async _handleSubmit(e){e.preventDefault(),this.isSubmitting=!0,this.successMessage="";const t={email:this.email};try{await async function(e){if(oc(),!rc)throw new Error("Auth initialization failed");Zl.set(null);try{await Rl(rc,e.email)}catch(e){const t=e instanceof Error?e.message:"Password reset failed";throw Zl.set(t),e}}(t),this.successMessage=`Password reset email sent to ${this.email}. Check your inbox.`,this.dispatchEvent(new CustomEvent("df-password-reset-success",{detail:{email:this.email},bubbles:!0,composed:!0})),this.email=""}catch(e){this.dispatchEvent(new CustomEvent("df-password-reset-error",{detail:{error:e instanceof Error?e.message:"Password reset failed"},bubbles:!0,composed:!0}))}finally{this.isSubmitting=!1}}};pd([hh()],fd.prototype,"email",void 0),pd([hh()],fd.prototype,"isSubmitting",void 0),pd([hh()],fd.prototype,"successMessage",void 0),fd=pd([oh("df-password-reset")],fd);var gd=function(e,t,r,n){var i,s=arguments.length,o=s<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,r):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)o=Reflect.decorate(e,t,r,n);else for(var a=e.length-1;a>=0;a--)(i=e[a])&&(o=(s<3?i(o):s>3?i(t,r,o):i(t,r))||o);return s>3&&o&&Object.defineProperty(t,r,o),o};let md=class extends(L(ih)){constructor(){super(),this.headless=!1,this.showHideUser=!1,this.emailPw=!1,this.emailPwView="sign-in",this.initError=null}connectedCallback(){super.connectedCallback();try{Dc();!function(e){tc===e&&nc||(nc&&nc(),tc=e,rc=Tl(e),Jl("auth")&&Cl(rc,{host:"127.0.0.1",port:9155}),Yl.set("loading"),nc=Al(e,async e=>{Xl.set(e),Yl.set(e?"authenticated":"unauthenticated"),Ql.set(!0),Zl.set(null),e?await ic(e):sc()}))}(Kl())}catch(e){console.error("DfAuthWrapper: Firebase initialization failed",e),this.initError=e.message}}static{this.styles=Fc`
    :host {
      display: block;
      font-family: var(--df-font-family, 'Roboto', sans-serif);
    }

    .full-screen {
      display: flex;
      justify-content: center;
      align-items: center;
      min-height: 100vh;
      width: 100%;
    }

    .login-button {
      padding: 16px 32px;
      font-size: 16px;
    }

    .full-width-div {
      width: 100%;
      display: flex;
      justify-content: space-between;
      align-items: center;
      min-height: 50px;
      padding: 8px 16px;
      border-bottom: 1px solid var(--md-sys-color-outline-variant, #ccc);
      background: var(--md-sys-color-surface, #fff);
    }

    .full-width-div > div {
      text-align: center;
      flex-grow: 1;
    }

    .user-photo {
      width: 50px;
      height: 50px;
      border-radius: 50%;
      object-fit: cover;
    }

    .user-name {
      margin: 0;
      font-size: 1.25rem;
      font-weight: 500;
      color: var(--md-sys-color-on-surface, #000);
    }

    .user-json {
      padding: 16px;
      background: var(--md-sys-color-surface-container, #f0f0f0);
      border-radius: 8px;
      margin: 16px;
      overflow-x: auto;
    }

    .user-json pre {
      margin: 0;
      font-family: 'Courier New', monospace;
      font-size: 0.875rem;
    }

    .dev-login {
      width: min(1200px, 100%);
      padding: 32px;
      border-radius: 24px;
      border: 1px solid var(--md-sys-color-outline-variant, rgba(15, 23, 42, 0.12));
      background: var(--md-sys-color-surface, #fff);
      box-shadow: 0 32px 80px rgba(15, 23, 42, 0.18);
    }

    .dev-grid {
      display: flex;
      flex-direction: column;
      gap: 24px;
    }

    @media (min-width: 1024px) {
      .dev-grid {
        flex-direction: row;
      }
    }

    .dev-card {
      flex: 1;
      border-radius: 20px;
      border: 1px solid var(--md-sys-color-outline-variant, rgba(15, 23, 42, 0.08));
      background: var(--md-sys-color-surface-container-high, #f8f9ff);
      padding: 24px;
      display: flex;
      flex-direction: column;
      gap: 16px;
    }

    .google-panel {
      background: linear-gradient(145deg, rgba(59, 130, 246, 0.08), rgba(99, 102, 241, 0.08));
    }

    .google-panel h2,
    .email-pw-panel h2 {
      margin: 0;
      font-size: 1.4rem;
      color: var(--md-sys-color-on-surface, #0f172a);
    }

    .google-panel p,
    .email-pw-panel p {
      margin: 0;
      color: var(--md-sys-color-on-surface-variant, #475569);
      line-height: 1.5;
    }

    .email-pw-panel {
      background: var(--md-sys-color-surface, #fff);
    }

    .email-pw-nav {
      display: flex;
      flex-wrap: wrap;
      gap: 8px;
    }

    .email-pw-tab[data-active='true'] {
      --md-filled-tonal-button-container-color: var(--md-sys-color-primary-container, #e0e7ff);
      --md-filled-tonal-button-label-text-color: var(--md-sys-color-on-primary-container, #1e3a8a);
    }

    .email-pw-content {
      margin-top: 8px;
    }

    .email-pw-note {
      font-size: 0.85rem;
      color: var(--md-sys-color-on-surface-variant, #5f6b7c);
      background: var(--md-sys-color-surface-container-low, #eef2ff);
      border-radius: 12px;
      padding: 12px;
    }

    .credential-callout {
      margin-top: 12px;
      padding: 12px;
      border-radius: 12px;
      background: var(--md-sys-color-surface-container, #f6f7fb);
      font-size: 0.9rem;
      border: 1px dashed var(--md-sys-color-outline-variant, rgba(15, 23, 42, 0.2));
    }

    .credential-callout code {
      background: rgba(15, 23, 42, 0.08);
      padding: 2px 6px;
      border-radius: 6px;
      font-size: 0.85rem;
    }

    .info-pill {
      display: inline-flex;
      align-items: center;
      gap: 6px;
      padding: 4px 12px;
      border-radius: 999px;
      font-size: 0.72rem;
      font-weight: 600;
      letter-spacing: 0.08em;
      text-transform: uppercase;
      background: var(--md-sys-color-primary-container, rgba(59, 130, 246, 0.12));
      color: var(--md-sys-color-on-primary-container, #102a83);
    }
  `}render(){const{authUser:e,authState:t}=ac.get();return this.initError?ne`
        <div class="full-screen" style="color: var(--md-sys-color-error, red); padding: 20px; text-align: center;">
          <p><strong>Authentication Error</strong></p>
          <p>${this.initError}</p>
          <p style="font-size: 0.8em">Check console for details.</p>
        </div>
      `:"loading"===t||"idle"===t?ne`
        <div class="full-screen">
          <md-circular-progress indeterminate></md-circular-progress>
        </div>
      `:"authenticated"===t&&e?this.headless?ne`<slot></slot>`:ne`
      ${this._renderHeader(e)}
      ${this.showHideUser?this._renderUserJson(e):se}
      <slot></slot>
    `:this._renderLoginScreen()}_renderLoginScreen(){return this.emailPw?ne`
      <div class="full-screen">
        <div class="dev-login" aria-live="polite">
          <div class="dev-grid">
            <section class="dev-card google-panel">
              <h2>Google Sign-In (Production)</h2>
              <p>
                Use this flow when testing against a production Firebase project. The popup requires
                real OAuth credentials and will not work with the Auth Emulator.
              </p>
              <md-filled-button
                class="login-button"
                @click=${this._handleLoginClick}
              >
                Sign in with Google
              </md-filled-button>
              <p class="email-pw-note">
                Need Auth emulator triggers instead? Use the developer email/password panel to create
                throwaway accounts. This UI is intentionally hidden unless 
                <code>emailPw</code> is enabled.
              </p>
            </section>
            ${this._renderEmailPwPanel()}
          </div>
        </div>
      </div>
    `:ne`
        <div class="full-screen">
          <md-filled-button
            class="login-button"
            @click=${this._handleLoginClick}
          >
            Sign in with Google
          </md-filled-button>
        </div>
      `}_renderEmailPwPanel(){return ne`
      <section class="dev-card email-pw-panel" aria-labelledby="emailPwHeading">
        <div>
          <p class="info-pill">Developer Workflow</p>
          <h2 id="emailPwHeading">Email/Password (Emulator Only)</h2>
          <p>
            Copy-only UI for writing Firebase Functions that react to 
            <code>functions.auth.user()</code> events. Never expose this panel to real users.
          </p>
          <div class="credential-callout">
            <strong>Seeded credentials</strong>
            <div>Email: <code>alice.anderson@example.com</code></div>
            <div>Password: <code>password123</code></div>
          </div>
        </div>
        <div class="email-pw-nav" role="tablist" aria-label="Email/password auth flows">
          ${this._renderEmailPwTab("sign-in","Sign In","Use emulator accounts")}
          ${this._renderEmailPwTab("sign-up","Create User","Trigger auth.onCreate")}
          ${this._renderEmailPwTab("reset","Reset Password","Send emulator reset email")}
        </div>
        <div class="email-pw-content">
          ${this._renderEmailPwView()}
        </div>
      </section>
    `}_renderEmailPwTab(e,t,r){const n=this.emailPwView===e;return ne`
      <md-filled-tonal-button
        class="email-pw-tab"
        data-active=${n}
        aria-pressed=${n}
        title=${r}
        @click=${()=>this._setEmailPwView(e)}
      >
        ${t}
      </md-filled-tonal-button>
    `}_renderEmailPwView(){switch(this.emailPwView){case"sign-up":return ne`
          <df-sign-up @df-sign-up-success=${this._handleEmailPwSuccess}></df-sign-up>
        `;case"reset":return ne`
          <df-password-reset
            @df-password-reset-success=${this._handleEmailPwSuccess}
          ></df-password-reset>
        `;default:return ne`
          <df-sign-in @df-sign-in-success=${this._handleEmailPwSuccess}></df-sign-in>
        `}}_setEmailPwView(e){this.emailPwView=e}_handleEmailPwSuccess(){this.emailPwView="sign-in"}_renderHeader(e){return ne`
      <div class="full-width-div">
        ${e.photoURL?ne`<img class="user-photo" src="${e.photoURL}" alt="User photo" />`:se}
        <h2 class="user-name">${e.displayName||"User"}</h2>
        <md-text-button
          @click=${this._handleLogoutClick}
          aria-label="Sign out"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="60"
            height="12"
            viewBox="0 0 60 12"
          >
            <text
              x="3"
              y="10"
              style="font-style:normal;font-variant:normal;font-weight:normal;font-stretch:extra-condensed;font-size:12.7px;font-family:'Arial';stroke-width:0"
              fill="black"
            >
              LOGOUT
            </text>
          </svg>
        </md-text-button>
      </div>
    `}_renderUserJson(e){return ne`
      <div class="user-json">
        <pre>${JSON.stringify(e,null,2)}</pre>
      </div>
    `}async _handleLoginClick(){try{await async function(e=[]){if(oc(),!rc)throw new Error("Auth initialization failed");Yl.set("loading"),Zl.set(null);try{const t=await Pl(rc,e);Xl.set(t.user),Yl.set("authenticated"),await ic(t.user)}catch(e){Yl.set("error");const t=e instanceof Error?e.message:"Google sign-in failed";throw Zl.set(t),e}}();const{authUser:e}=ac.get();this._dispatchUserChanged(e)}catch(e){console.error("Login failed:",e),alert(e instanceof Error?e.message:"Login failed")}}async _handleLogoutClick(e){if(e.altKey)this.showHideUser=!this.showHideUser;else try{await async function(){if(oc(),!rc)throw new Error("Auth initialization failed");Yl.set("loading"),Zl.set(null);try{await xl(rc),Xl.set(null),Yl.set("unauthenticated"),sc()}catch(e){Yl.set("error");const t=e instanceof Error?e.message:"Sign out failed";throw Zl.set(t),e}}(),this._dispatchUserChanged(null)}catch(e){console.error("Logout failed:",e),alert(e instanceof Error?e.message:"Logout failed")}}_dispatchUserChanged(e){this.dispatchEvent(new CustomEvent("df-auth-wrapper-user-changed",{detail:{newValue:e},bubbles:!0,composed:!0}))}};gd([ch({type:Boolean})],md.prototype,"headless",void 0),gd([ch({type:Boolean})],md.prototype,"showHideUser",void 0),gd([ch({type:Boolean})],md.prototype,"emailPw",void 0),gd([hh()],md.prototype,"emailPwView",void 0),gd([hh()],md.prototype,"initError",void 0),md=gd([oh("df-auth-wrapper")],md);var vd=function(e,t,r,n){var i,s=arguments.length,o=s<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,r):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)o=Reflect.decorate(e,t,r,n);else for(var a=e.length-1;a>=0;a--)(i=e[a])&&(o=(s<3?i(o):s>3?i(t,r,o):i(t,r))||o);return s>3&&o&&Object.defineProperty(t,r,o),o};let yd=class extends ih{constructor(){super(...arguments),this.defaultConfig=Hl()}get resolvedEnvironment(){return this.environment&&this.environment in Bl?this.environment:this.defaultConfig.firestore||this.defaultConfig.storage||this.defaultConfig.functions?"fb-emulator":"fb-cloud"}get resolvedConfig(){const e=this.resolvedEnvironment;return e===this.environment?Bl[e]:this.defaultConfig}static{this.styles=Fc`
    :host {
      display: block;
      position: sticky;
      top: 0;
      z-index: 1000;
      font-family: var(--md-ref-typeface-plain, 'Roboto', 'Helvetica Neue', sans-serif);
    }

    .banner {
      display: flex;
      align-items: center;
      gap: 1rem;
      padding: 0.85rem 1.2rem;
      border-left: 6px solid transparent;
      border-radius: 0 0 0.75rem 0.75rem;
      font-size: 0.95rem;
      line-height: 1.35;
      box-shadow: 0 4px 12px rgba(15, 23, 42, 0.18);
    }

    .mode {
      display: flex;
      flex-direction: column;
      gap: 0.1rem;
    }

    .label {
      font-weight: 600;
      text-transform: uppercase;
      letter-spacing: 0.04em;
    }

    .description {
      margin: 0;
      color: rgba(0, 0, 0, 0.8);
      font-size: 0.9rem;
    }

    .banner.emulator {
      background: var(--df-env-banner-emulator-bg, #fff8e1);
      border-left-color: var(--df-env-banner-emulator-border, #f7b500);
      color: var(--df-env-banner-emulator-text, #4a3b00);
    }

    .banner.cloud {
      background: var(--df-env-banner-cloud-bg, #ffe5e5);
      border-left-color: var(--df-env-banner-cloud-border, #d32f2f);
      color: var(--df-env-banner-cloud-text, #5d0c0c);
    }

    .pill {
      padding: 0.15rem 0.5rem;
      border-radius: 999px;
      font-size: 0.8rem;
      font-weight: 600;
      letter-spacing: 0.05em;
    }

    .emulator .pill {
      background: rgba(255, 193, 7, 0.2);
      color: inherit;
    }

    .cloud .pill {
      background: rgba(244, 67, 54, 0.2);
      color: inherit;
    }
  `}render(){const e=this.resolvedEnvironment,t=this.resolvedConfig;return ne`
      <section class="banner ${"fb-emulator"===e?"emulator":"cloud"}" role="status" aria-live="polite">
        <div class="pill">${e}</div>
        <div class="mode">
          <span class="label">${t.label}</span>
          <p class="description">${t.description}</p>
        </div>
      </section>
    `}};vd([ch({type:String})],yd.prototype,"environment",void 0),yd=vd([oh("df-environment-banner")],yd);var bd=function(e,t,r,n){var i,s=arguments.length,o=s<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,r):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)o=Reflect.decorate(e,t,r,n);else for(var a=e.length-1;a>=0;a--)(i=e[a])&&(o=(s<3?i(o):s>3?i(t,r,o):i(t,r))||o);return s>3&&o&&Object.defineProperty(t,r,o),o};let _d=class extends ih{constructor(){super(...arguments),this.users=[],this.loading=!1,this.searchQuery=""}static{this.styles=Fc`
    :host {
      display: block;
      font-family: inherit;
    }

    .container {
      padding: 1rem;
    }

    .search-bar {
      display: flex;
      gap: 0.5rem;
      margin-bottom: 1.5rem;
    }

    md-outlined-text-field {
      flex: 1;
    }

    .list {
      border: 1px solid #e5e7eb;
      border-radius: 8px;
      overflow: hidden;
    }

    .list-item {
      display: flex;
      align-items: center;
      justify-content: space-between;
      padding: 1rem;
      border-bottom: 1px solid #e5e7eb;
      cursor: pointer;
      transition: background-color 0.2s;
    }

    .list-item:hover {
      background-color: #f9fafb;
    }

    .list-item:last-child {
      border-bottom: none;
    }

    .user-info {
      flex: 1;
      min-width: 0;
    }

    .user-email {
      font-weight: 500;
      color: #1f2937;
      word-break: break-word;
    }

    .user-display-name {
      font-size: 0.875rem;
      color: #6b7280;
      margin-top: 0.25rem;
    }

    .user-meta {
      font-size: 0.75rem;
      color: #9ca3af;
      margin-top: 0.25rem;
    }

    .roles-container {
      display: flex;
      gap: 0.5rem;
      flex-wrap: wrap;
      margin-left: auto;
      align-items: center;
    }

    .role-badge {
      padding: 0.375rem 0.75rem;
      border-radius: 9999px;
      font-size: 0.875rem;
      font-weight: 500;
      white-space: nowrap;
    }

    .role-admin {
      background-color: #fecaca;
      color: #991b1b;
    }

    .role-player {
      background-color: #bfdbfe;
      color: #1e40af;
    }

    .role-coder-fomo {
      background-color: #dbeafe;
      color: #0c4a6e;
    }

    .role-viewer {
      background-color: #e5e7eb;
      color: #374151;
    }

    .empty-state {
      text-align: center;
      padding: 2rem;
      color: #6b7280;
    }

    .loading {
      text-align: center;
      padding: 2rem;
      color: #9ca3af;
    }

    .pagination {
      display: flex;
      justify-content: center;
      gap: 0.5rem;
      padding: 1rem;
      border-top: 1px solid #e5e7eb;
    }
  `}render(){return ne`
      <div class="container">
        <div class="search-bar">
          <md-outlined-text-field
            label="Search by email or name..."
            .value=${this.searchQuery}
            @input=${e=>{this.searchQuery=e.target.value}}
          ></md-outlined-text-field>
        </div>

        ${this.loading?ne`<div class="loading">Loading users...</div>`:0===this.filteredUsers.length?ne`<div class="empty-state">No users found</div>`:ne`
                <div class="list">
                  ${this.filteredUsers.map(e=>ne`
                      <div
                        class="list-item"
                        @click=${()=>this.selectUser(e)}
                      >
                        <div class="user-info">
                          <div class="user-email">${e.email}</div>
                          ${e.displayName?ne`<div class="user-display-name">
                                ${e.displayName}
                              </div>`:""}
                          <div class="user-meta">
                            Created ${this.formatDate(e.createdAt)}
                          </div>
                        </div>
                        <div class="roles-container">
                          ${e.roles.map(e=>ne`
                              <div class="role-badge ${this.getRoleBadgeClass(e)}">
                                ${this.formatRole(e)}
                              </div>
                            `)}
                        </div>
                      </div>
                    `)}
                </div>
              `}
      </div>
    `}get filteredUsers(){if(!this.searchQuery)return this.users;const e=this.searchQuery.toLowerCase();return this.users.filter(t=>t.email.toLowerCase().includes(e)||(t.displayName?.toLowerCase().includes(e)??!1))}selectUser(e){this.dispatchEvent(new CustomEvent("user-selected",{detail:{uid:e.uid,email:e.email,currentRoles:e.roles},bubbles:!0,composed:!0}))}formatRole(e){return{admin:"Admin",player:"Player",coderFomo:"Coder Fomo",viewer:"Viewer"}[e]||e}getRoleBadgeClass(e){return{admin:"role-admin",player:"role-player",coderFomo:"role-coder-fomo",viewer:"role-viewer"}[e]||""}formatDate(e){try{const t=new Date(e),r=(new Date).getTime()-t.getTime(),n=Math.floor(r/864e5);return 0===n?"today":1===n?"yesterday":n<7?`${n} days ago`:n<30?`${Math.floor(n/7)} weeks ago`:n<365?`${Math.floor(n/30)} months ago`:t.toLocaleDateString()}catch{return e}}};bd([ch()],_d.prototype,"users",void 0),bd([ch({type:Boolean})],_d.prototype,"loading",void 0),bd([hh()],_d.prototype,"searchQuery",void 0),_d=bd([oh("df-user-admin-list")],_d);var wd=function(e,t,r,n){var i,s=arguments.length,o=s<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,r):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)o=Reflect.decorate(e,t,r,n);else for(var a=e.length-1;a>=0;a--)(i=e[a])&&(o=(s<3?i(o):s>3?i(t,r,o):i(t,r))||o);return s>3&&o&&Object.defineProperty(t,r,o),o};let Ed=class extends ih{static{this.styles=Fc`
    :host {
      display: none;
    }

    :host([open]) {
      display: block;
    }

    .overlay {
      position: fixed;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      background-color: rgba(0, 0, 0, 0.5);
      display: flex;
      align-items: center;
      justify-content: center;
      z-index: 1000;
    }

    .dialog {
      background-color: white;
      border-radius: 8px;
      box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1);
      max-width: 500px;
      width: 90%;
      padding: 2rem;
    }

    .dialog-header {
      margin-bottom: 1.5rem;
    }

    .dialog-title {
      font-size: 1.5rem;
      font-weight: 600;
      color: #1f2937;
      margin: 0 0 0.5rem 0;
    }

    .dialog-description {
      font-size: 0.875rem;
      color: #6b7280;
      margin: 0;
    }

    .user-email {
      font-weight: 500;
      color: #374151;
      margin-top: 0.5rem;
    }

    .role-options {
      display: flex;
      flex-direction: column;
      gap: 0.75rem;
      margin-bottom: 2rem;
    }

    .role-option {
      display: flex;
      align-items: flex-start;
      gap: 0.75rem;
      padding: 1rem;
      border: 2px solid #e5e7eb;
      border-radius: 6px;
      cursor: pointer;
      transition: all 0.2s;
    }

    .role-option:hover {
      border-color: #1f2937;
      background-color: #f9fafb;
    }

    .role-option[selected] {
      border-color: #1f2937;
      background-color: #f3f4f6;
    }

    .role-option md-checkbox {
      margin-top: 0.25rem;
      cursor: pointer;
    }

    .role-info {
      flex: 1;
    }

    .role-name {
      font-weight: 500;
      color: #1f2937;
      display: block;
    }

    .role-description {
      font-size: 0.875rem;
      color: #6b7280;
      margin-top: 0.25rem;
    }

    .dialog-footer {
      display: flex;
      gap: 0.75rem;
      justify-content: flex-end;
    }

    .dialog-footer md-outlined-button,
    .dialog-footer md-filled-button {
      cursor: pointer;
    }
  `}constructor(){super(),this.open=!1,this.userEmail="",this.roleDescriptions={admin:"Full access to all features and user management",player:"Access to core features and gameplay",coderFomo:"Access to coding challenges and competitions",viewer:"Read-only access to content"},this.currentRoles=[],this.selectedRoles=[]}updated(e){e.has("currentRoles")&&(this.selectedRoles=[...this.currentRoles])}render(){return ne`
      <div class="overlay" @click=${this.handleOverlayClick}>
        <div class="dialog" @click=${e=>e.stopPropagation()}>
          <div class="dialog-header">
            <h2 class="dialog-title">Manage User Roles</h2>
            <p class="dialog-description">
              Select one or more roles for:
              <span class="user-email">${this.userEmail}</span>
            </p>
          </div>

          <div class="role-options">
            ${this.renderRoleOptions()}
          </div>

          <div class="dialog-footer">
            <md-outlined-button @click=${()=>this.cancel()}>
              Cancel
            </md-outlined-button>
            <md-filled-button
              ?disabled=${this.rolesUnchanged()}
              @click=${()=>this.confirm()}
            >
              Update Roles
            </md-filled-button>
          </div>
        </div>
      </div>
    `}renderRoleOptions(){return["admin","player","coderFomo","viewer"].map(e=>ne`
        <div class="role-option" ?selected=${this.selectedRoles.includes(e)} @click=${()=>{this.toggleRole(e)}}>
          <md-checkbox
            .checked=${this.selectedRoles.includes(e)}
            @change=${()=>{this.toggleRole(e)}}
          ></md-checkbox>
          <div class="role-info">
            <span class="role-name">${this.formatRole(e)}</span>
            <div class="role-description">
              ${this.roleDescriptions[e]}
            </div>
          </div>
        </div>
      `)}toggleRole(e){const t=this.selectedRoles.indexOf(e);this.selectedRoles=-1===t?[...this.selectedRoles,e]:this.selectedRoles.filter((e,r)=>r!==t)}rolesUnchanged(){if(this.selectedRoles.length!==this.currentRoles.length)return!1;const e=new Set(this.selectedRoles);return this.currentRoles.every(t=>e.has(t))}confirm(){this.dispatchEvent(new CustomEvent("roles-selected",{detail:{selectedRoles:this.selectedRoles},bubbles:!0,composed:!0})),this.close()}cancel(){this.dispatchEvent(new CustomEvent("cancel",{bubbles:!0,composed:!0})),this.close()}close(){this.open=!1,this.selectedRoles=[...this.currentRoles]}handleOverlayClick(){this.cancel()}formatRole(e){return{admin:"Admin",player:"Player",coderFomo:"Coder Fomo",viewer:"Viewer"}[e]||e}};wd([ch({type:Boolean,reflect:!0})],Ed.prototype,"open",void 0),wd([ch()],Ed.prototype,"userEmail",void 0),wd([ch()],Ed.prototype,"currentRoles",void 0),wd([ch()],Ed.prototype,"selectedRoles",void 0),Ed=wd([oh("df-role-picker")],Ed);var Id=function(e,t,r,n){var i,s=arguments.length,o=s<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,r):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)o=Reflect.decorate(e,t,r,n);else for(var a=e.length-1;a>=0;a--)(i=e[a])&&(o=(s<3?i(o):s>3?i(t,r,o):i(t,r))||o);return s>3&&o&&Object.defineProperty(t,r,o),o};let Sd=class extends(L(ih)){static styles=Fc`
    :host {
      display: block;
      width: 100%;
    }

    .container {
      max-width: 1200px;
      margin: 0 auto;
      padding: 2rem 1rem;
    }

    .header {
      margin-bottom: 2rem;
    }

    .title {
      font-size: 2rem;
      font-weight: 700;
      color: #1f2937;
      margin: 0 0 0.5rem 0;
    }

    .subtitle {
      font-size: 1rem;
      color: #6b7280;
      margin: 0;
    }

    .error {
      padding: 1rem;
      background-color: #fee2e2;
      border: 1px solid #fca5a5;
      border-radius: 6px;
      color: #991b1b;
      margin-bottom: 2rem;
      display: flex;
      justify-content: space-between;
      align-items: center;
    }

    .error-close {
      background: none;
      border: none;
      cursor: pointer;
      font-size: 1.25rem;
      color: #991b1b;
    }

    .loading {
      text-align: center;
      padding: 4rem 2rem;
      color: #9ca3af;
      font-size: 1.125rem;
    }
  `;hasRequestedUsers=!1;constructor(){super(),this.selectedUser=null,this.isRolePickerOpen=!1}updated(e){super.updated(e);const{authState:t,authUser:r}=ac.get();"authenticated"===t&&r&&!this.hasRequestedUsers?(this.hasRequestedUsers=!0,Nc().catch(e=>{console.error("Failed to load users:",e)})):r&&"authenticated"===t||!this.hasRequestedUsers||(this.hasRequestedUsers=!1)}handleUserSelected(e){this.selectedUser={uid:e.detail.uid,email:e.detail.email,roles:e.detail.currentRoles},this.isRolePickerOpen=!0}async handleRolesSelected(e){if(this.selectedUser)try{e.detail.selectedRoles.length>0&&await async function(e,t){kc.set(!0),xc.set("");try{const r=jl(Oc(),"setUserRoles");await r({targetUserId:e,roles:t}),await Nc()}catch(e){const t=e instanceof Error?e.message:"Failed to update user roles";throw xc.set(t),console.error("[user-admin.store] Failed to update user roles:",e),e}finally{kc.set(!1)}}(this.selectedUser.uid,e.detail.selectedRoles),this.isRolePickerOpen=!1,this.selectedUser=null}catch(e){console.error("Failed to update user roles:",e)}}handleCancel(){this.isRolePickerOpen=!1,this.selectedUser=null}render(){ac.get();const{users:e,loading:t,error:r}=Rc.get();return ne`
      <div class="container">
        <div class="header">
          <h1 class="title">User Administration</h1>
          <p class="subtitle">Manage user roles and permissions</p>
        </div>

        ${r?ne`
              <div class="error">
                <span>${r}</span>
                <button class="error-close" @click=${()=>{xc.set("")}}>
                  ×
                </button>
              </div>
            `:""}

        ${t?ne` <div class="loading">Loading users...</div> `:ne`
              <df-user-admin-list
                .users=${e}
                .loading=${t}
                @user-selected=${e=>this.handleUserSelected(e)}
              ></df-user-admin-list>
            `}

        <df-role-picker
          ?open=${this.isRolePickerOpen}
          .userEmail=${this.selectedUser?.email||""}
          .currentRoles=${this.selectedUser?.roles||[]}
          @roles-selected=${e=>this.handleRolesSelected(e)}
          @cancel=${()=>this.handleCancel()}
        ></df-role-picker>
      </div>
    `}};Id([hh()],Sd.prototype,"selectedUser",void 0),Id([hh()],Sd.prototype,"isRolePickerOpen",void 0),Sd=Id([oh("user-admin-app-shell")],Sd),Dc();
//# sourceMappingURL=df-user-admin-app.js.map
