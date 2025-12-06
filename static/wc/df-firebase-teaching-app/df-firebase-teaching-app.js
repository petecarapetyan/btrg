var e=Object.defineProperty,t=(t,n,r)=>(((t,n,r)=>{n in t?e(t,n,{enumerable:!0,configurable:!0,writable:!0,value:r}):t[n]=r})(t,"symbol"!=typeof n?n+"":n,r),r),n=(e,t)=>{if(Object(t)!==t)throw TypeError('Cannot use the "in" operator on this value');return e.has(t)},r=(e,t,n)=>{if(t.has(e))throw TypeError("Cannot add the same private member more than once");t instanceof WeakSet?t.add(e):t.set(e,n)},i=(e,t,n)=>(((e,t,n)=>{if(!t.has(e))throw TypeError("Cannot "+n)})(e,t,"access private method"),n);
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
 */let o=null,a=!1,l=1;const c=Symbol("SIGNAL");function u(e){const t=o;return o=e,t}const d={version:0,lastCleanEpoch:0,dirty:!1,producerNode:void 0,producerLastReadVersion:void 0,producerIndexOfThis:void 0,nextProducerIndex:0,liveConsumerNode:void 0,liveConsumerIndexOfThis:void 0,consumerAllowSignalWrites:!1,consumerIsAlwaysLive:!1,producerMustRecompute:()=>!1,producerRecomputeValue:()=>{},consumerMarkedDirty:()=>{},consumerOnSignalRead:()=>{}};function h(e){if(a)throw new Error("undefined"!=typeof ngDevMode&&ngDevMode?"Assertion error: signal read during notification phase":"");if(null===o)return;o.consumerOnSignalRead(e);const t=o.nextProducerIndex++;if(b(o),t<o.producerNode.length&&o.producerNode[t]!==e&&y(o)){v(o.producerNode[t],o.producerIndexOfThis[t])}o.producerNode[t]!==e&&(o.producerNode[t]=e,o.producerIndexOfThis[t]=y(o)?g(e,o,t):0),o.producerLastReadVersion[t]=e.version}function p(e){if(e.dirty||e.lastCleanEpoch!==l){if(!e.producerMustRecompute(e)&&!function(e){b(e);for(let t=0;t<e.producerNode.length;t++){const n=e.producerNode[t],r=e.producerLastReadVersion[t];if(r!==n.version)return!0;if(p(n),r!==n.version)return!0}return!1}(e))return e.dirty=!1,void(e.lastCleanEpoch=l);e.producerRecomputeValue(e),e.dirty=!1,e.lastCleanEpoch=l}}function f(e){if(void 0===e.liveConsumerNode)return;const t=a;a=!0;try{for(const t of e.liveConsumerNode)t.dirty||m(t)}finally{a=t}}function m(e){var t;e.dirty=!0,f(e),null==(t=e.consumerMarkedDirty)||t.call(e.wrapper??e)}function g(e,t,n){var r;if(w(e),b(e),0===e.liveConsumerNode.length){null==(r=e.watched)||r.call(e.wrapper);for(let t=0;t<e.producerNode.length;t++)e.producerIndexOfThis[t]=g(e.producerNode[t],e,t)}return e.liveConsumerIndexOfThis.push(n),e.liveConsumerNode.push(t)-1}function v(e,t){var n;if(w(e),b(e),"undefined"!=typeof ngDevMode&&ngDevMode&&t>=e.liveConsumerNode.length)throw new Error(`Assertion error: active consumer index ${t} is out of bounds of ${e.liveConsumerNode.length} consumers)`);if(1===e.liveConsumerNode.length){null==(n=e.unwatched)||n.call(e.wrapper);for(let t=0;t<e.producerNode.length;t++)v(e.producerNode[t],e.producerIndexOfThis[t])}const r=e.liveConsumerNode.length-1;if(e.liveConsumerNode[t]=e.liveConsumerNode[r],e.liveConsumerIndexOfThis[t]=e.liveConsumerIndexOfThis[r],e.liveConsumerNode.length--,e.liveConsumerIndexOfThis.length--,t<e.liveConsumerNode.length){const n=e.liveConsumerIndexOfThis[t],r=e.liveConsumerNode[t];b(r),r.producerIndexOfThis[n]=t}}function y(e){var t;return e.consumerIsAlwaysLive||((null==(t=null==e?void 0:e.liveConsumerNode)?void 0:t.length)??0)>0}function b(e){e.producerNode??(e.producerNode=[]),e.producerIndexOfThis??(e.producerIndexOfThis=[]),e.producerLastReadVersion??(e.producerLastReadVersion=[])}function w(e){e.liveConsumerNode??(e.liveConsumerNode=[]),e.liveConsumerIndexOfThis??(e.liveConsumerIndexOfThis=[])}
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */function _(e){if(p(e),h(e),e.value===T)throw e.error;return e.value}const x=Symbol("UNSET"),E=Symbol("COMPUTING"),T=Symbol("ERRORED"),I=(()=>({...d,value:x,dirty:!0,error:null,equal:s,producerMustRecompute:e=>e.value===x||e.value===E,producerRecomputeValue(e){if(e.value===E)throw new Error("Detected cycle in computations.");const t=e.value;e.value=E;const n=function(e){return e&&(e.nextProducerIndex=0),u(e)}(e);let r,i=!1;try{r=e.computation.call(e.wrapper);i=t!==x&&t!==T&&e.equal.call(e.wrapper,t,r)}catch(t){r=T,e.error=t}finally{!function(e,t){if(u(t),e&&void 0!==e.producerNode&&void 0!==e.producerIndexOfThis&&void 0!==e.producerLastReadVersion){if(y(e))for(let t=e.nextProducerIndex;t<e.producerNode.length;t++)v(e.producerNode[t],e.producerIndexOfThis[t]);for(;e.producerNode.length>e.nextProducerIndex;)e.producerNode.pop(),e.producerLastReadVersion.pop(),e.producerIndexOfThis.pop()}}(e,n)}i?e.value=t:(e.value=r,e.version++)}}))();let S=
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
function(){throw new Error};function C(){return h(this),this.value}function k(e,t){!1===(null==o?void 0:o.consumerAllowSignalWrites)&&S(),e.equal.call(e.wrapper,e.value,t)||(e.value=t,function(e){e.version++,l++,f(e)}
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
 */(e))}const A=(()=>({...d,equal:s,value:void 0}))();const D=Symbol("node");var N;(e=>{var s,l,p,f;s=D,l=new WeakSet,e.isState=e=>"object"==typeof e&&n(l,e),e.State=class{constructor(n,i={}){r(this,l),t(this,s);const o=
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
function(e){const t=Object.create(A);t.value=e;const n=()=>(h(t),t.value);return n[c]=t,n}(n),a=o[c];if(this[D]=a,a.wrapper=this,i){const t=i.equals;t&&(a.equal=t),a.watched=i[e.subtle.watched],a.unwatched=i[e.subtle.unwatched]}}get(){if(!(0,e.isState)(this))throw new TypeError("Wrong receiver type for Signal.State.prototype.get");return C.call(this[D])}set(t){if(!(0,e.isState)(this))throw new TypeError("Wrong receiver type for Signal.State.prototype.set");if(a)throw new Error("Writes to signals not permitted during Watcher callback");k(this[D],t)}};p=D,f=new WeakSet,e.isComputed=e=>"object"==typeof e&&n(f,e),e.Computed=class{constructor(n,i){r(this,f),t(this,p);const s=function(e){const t=Object.create(I);t.computation=e;const n=()=>_(t);return n[c]=t,n}(n),o=s[c];if(o.consumerAllowSignalWrites=!0,this[D]=o,o.wrapper=this,i){const t=i.equals;t&&(o.equal=t),o.watched=i[e.subtle.watched],o.unwatched=i[e.subtle.unwatched]}}get(){if(!(0,e.isComputed)(this))throw new TypeError("Wrong receiver type for Signal.Computed.prototype.get");return _(this[D])}},(s=>{var a,l,c,p;s.untrack=function(e){let t,n=null;try{n=u(null),t=e()}finally{u(n)}return t},s.introspectSources=function(t){var n;if(!(0,e.isComputed)(t)&&!(0,e.isWatcher)(t))throw new TypeError("Called introspectSources without a Computed or Watcher argument");return(null==(n=t[D].producerNode)?void 0:n.map(e=>e.wrapper))??[]},s.introspectSinks=function(t){var n;if(!(0,e.isComputed)(t)&&!(0,e.isState)(t))throw new TypeError("Called introspectSinks without a Signal argument");return(null==(n=t[D].liveConsumerNode)?void 0:n.map(e=>e.wrapper))??[]},s.hasSinks=function(t){if(!(0,e.isComputed)(t)&&!(0,e.isState)(t))throw new TypeError("Called hasSinks without a Signal argument");const n=t[D].liveConsumerNode;return!!n&&n.length>0},s.hasSources=function(t){if(!(0,e.isComputed)(t)&&!(0,e.isWatcher)(t))throw new TypeError("Called hasSources without a Computed or Watcher argument");const n=t[D].producerNode;return!!n&&n.length>0};a=D,l=new WeakSet,c=new WeakSet,p=function(t){for(const n of t)if(!(0,e.isComputed)(n)&&!(0,e.isState)(n))throw new TypeError("Called watch/unwatch without a Computed or State argument")},e.isWatcher=e=>n(l,e),s.Watcher=class{constructor(e){r(this,l),r(this,c),t(this,a);let n=Object.create(d);n.wrapper=this,n.consumerMarkedDirty=e,n.consumerIsAlwaysLive=!0,n.consumerAllowSignalWrites=!1,n.producerNode=[],this[D]=n}watch(...t){if(!(0,e.isWatcher)(this))throw new TypeError("Called unwatch without Watcher receiver");i(this,c,p).call(this,t);const n=this[D];n.dirty=!1;const r=u(n);for(const e of t)h(e[D]);u(r)}unwatch(...t){if(!(0,e.isWatcher)(this))throw new TypeError("Called unwatch without Watcher receiver");i(this,c,p).call(this,t);const n=this[D];b(n);for(let e=n.producerNode.length-1;e>=0;e--)if(t.includes(n.producerNode[e].wrapper)){v(n.producerNode[e],n.producerIndexOfThis[e]);const t=n.producerNode.length-1;if(n.producerNode[e]=n.producerNode[t],n.producerIndexOfThis[e]=n.producerIndexOfThis[t],n.producerNode.length--,n.producerIndexOfThis.length--,n.nextProducerIndex--,e<n.producerNode.length){const t=n.producerIndexOfThis[e],r=n.producerNode[e];w(r),r.liveConsumerIndexOfThis[t]=e}}}getPending(){if(!(0,e.isWatcher)(this))throw new TypeError("Called getPending without Watcher receiver");return this[D].producerNode.filter(e=>e.dirty).map(e=>e.wrapper)}},s.currentComputed=function(){var e;return null==(e=o)?void 0:e.wrapper},s.watched=Symbol("watched"),s.unwatched=Symbol("unwatched")})(e.subtle||(e.subtle={}))})(N||(N={}));
/**
 * @license
 * Copyright 2023 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const R=Symbol("SignalWatcherBrand"),O=new FinalizationRegistry(({watcher:e,signal:t})=>{e.unwatch(t)}),P=new WeakMap;function L(e){return!0===e[R]?(console.warn("SignalWatcher should not be applied to the same class more than once."),e):class extends e{constructor(){super(...arguments),this._$St=new N.State(0),this._$Si=!1,this._$So=!0,this._$Sh=new Set}_$Sl(){if(void 0!==this._$Su)return;this._$Sv=new N.Computed(()=>{this._$St.get(),super.performUpdate()});const e=this._$Su=new N.subtle.Watcher(function(){const e=P.get(this);void 0!==e&&(!1===e._$Si&&e.requestUpdate(),this.watch())});P.set(e,this),O.register(this,{watcher:e,signal:this._$Sv}),e.watch(this._$Sv)}_$Sp(){void 0!==this._$Su&&(this._$Su.unwatch(this._$Sv),this._$Sv=void 0,this._$Su=void 0)}performUpdate(){this.isUpdatePending&&(this._$Sl(),this._$Si=!0,this._$St.set(this._$St.get()+1),this._$Si=!1,this._$Sv.get())}update(e){try{this._$So?(this._$So=!1,super.update(e)):this._$Sh.forEach(e=>e.commit())}finally{this.isUpdatePending=!1,this._$Sh.clear()}}requestUpdate(e,t,n){this._$So=!0,super.requestUpdate(e,t,n)}connectedCallback(){super.connectedCallback(),this.requestUpdate()}disconnectedCallback(){super.disconnectedCallback(),queueMicrotask(()=>{!1===this.isConnected&&this._$Sp()})}_(e){this._$Sh.add(e);const t=this._$So;this.requestUpdate(),this._$So=t}m(e){this._$Sh.delete(e)}}}
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const $=1,M=3,U=4,F=e=>(...t)=>({_$litDirective$:e,values:t});let V=class{constructor(e){}get _$AU(){return this._$AM._$AU}_$AT(e,t,n){this._$Ct=e,this._$AM=t,this._$Ci=n}_$AS(e,t){return this.update(e,t)}update(e,t){return this.render(...t)}};
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const z=globalThis,j=z.trustedTypes,B=j?j.createPolicy("lit-html",{createHTML:e=>e}):void 0,q="$lit$",H=`lit$${Math.random().toFixed(9).slice(2)}$`,G="?"+H,K=`<${G}>`,W=document,X=()=>W.createComment(""),Q=e=>null===e||"object"!=typeof e&&"function"!=typeof e,J=Array.isArray,Y="[ \t\n\f\r]",Z=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,ee=/-->/g,te=/>/g,ne=RegExp(`>|${Y}(?:([^\\s"'>=/]+)(${Y}*=${Y}*(?:[^ \t\n\f\r"'\`<>=]|("|')|))|$)`,"g"),re=/'/g,ie=/"/g,se=/^(?:script|style|textarea|title)$/i,oe=(e=>(t,...n)=>({_$litType$:e,strings:t,values:n}))(1),ae=Symbol.for("lit-noChange"),le=Symbol.for("lit-nothing"),ce=new WeakMap,ue=W.createTreeWalker(W,129);function de(e,t){if(!J(e)||!e.hasOwnProperty("raw"))throw Error("invalid template strings array");return void 0!==B?B.createHTML(t):t}const he=(e,t)=>{const n=e.length-1,r=[];let i,s=2===t?"<svg>":3===t?"<math>":"",o=Z;for(let t=0;t<n;t++){const n=e[t];let a,l,c=-1,u=0;for(;u<n.length&&(o.lastIndex=u,l=o.exec(n),null!==l);)u=o.lastIndex,o===Z?"!--"===l[1]?o=ee:void 0!==l[1]?o=te:void 0!==l[2]?(se.test(l[2])&&(i=RegExp("</"+l[2],"g")),o=ne):void 0!==l[3]&&(o=ne):o===ne?">"===l[0]?(o=i??Z,c=-1):void 0===l[1]?c=-2:(c=o.lastIndex-l[2].length,a=l[1],o=void 0===l[3]?ne:'"'===l[3]?ie:re):o===ie||o===re?o=ne:o===ee||o===te?o=Z:(o=ne,i=void 0);const d=o===ne&&e[t+1].startsWith("/>")?" ":"";s+=o===Z?n+K:c>=0?(r.push(a),n.slice(0,c)+q+n.slice(c)+H+d):n+H+(-2===c?t:d)}return[de(e,s+(e[n]||"<?>")+(2===t?"</svg>":3===t?"</math>":"")),r]};let pe=class e{constructor({strings:t,_$litType$:n},r){let i;this.parts=[];let s=0,o=0;const a=t.length-1,l=this.parts,[c,u]=he(t,n);if(this.el=e.createElement(c,r),ue.currentNode=this.el.content,2===n||3===n){const e=this.el.content.firstChild;e.replaceWith(...e.childNodes)}for(;null!==(i=ue.nextNode())&&l.length<a;){if(1===i.nodeType){if(i.hasAttributes())for(const e of i.getAttributeNames())if(e.endsWith(q)){const t=u[o++],n=i.getAttribute(e).split(H),r=/([.?@])?(.*)/.exec(t);l.push({type:1,index:s,name:r[2],strings:n,ctor:"."===r[1]?ye:"?"===r[1]?be:"@"===r[1]?we:ve}),i.removeAttribute(e)}else e.startsWith(H)&&(l.push({type:6,index:s}),i.removeAttribute(e));if(se.test(i.tagName)){const e=i.textContent.split(H),t=e.length-1;if(t>0){i.textContent=j?j.emptyScript:"";for(let n=0;n<t;n++)i.append(e[n],X()),ue.nextNode(),l.push({type:2,index:++s});i.append(e[t],X())}}}else if(8===i.nodeType)if(i.data===G)l.push({type:2,index:s});else{let e=-1;for(;-1!==(e=i.data.indexOf(H,e+1));)l.push({type:7,index:s}),e+=H.length-1}s++}}static createElement(e,t){const n=W.createElement("template");return n.innerHTML=e,n}};function fe(e,t,n=e,r){if(t===ae)return t;let i=void 0!==r?n._$Co?.[r]:n._$Cl;const s=Q(t)?void 0:t._$litDirective$;return i?.constructor!==s&&(i?._$AO?.(!1),void 0===s?i=void 0:(i=new s(e),i._$AT(e,n,r)),void 0!==r?(n._$Co??=[])[r]=i:n._$Cl=i),void 0!==i&&(t=fe(e,i._$AS(e,t.values),i,r)),t}let me=class{constructor(e,t){this._$AV=[],this._$AN=void 0,this._$AD=e,this._$AM=t}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(e){const{el:{content:t},parts:n}=this._$AD,r=(e?.creationScope??W).importNode(t,!0);ue.currentNode=r;let i=ue.nextNode(),s=0,o=0,a=n[0];for(;void 0!==a;){if(s===a.index){let t;2===a.type?t=new ge(i,i.nextSibling,this,e):1===a.type?t=new a.ctor(i,a.name,a.strings,this,e):6===a.type&&(t=new _e(i,this,e)),this._$AV.push(t),a=n[++o]}s!==a?.index&&(i=ue.nextNode(),s++)}return ue.currentNode=W,r}p(e){let t=0;for(const n of this._$AV)void 0!==n&&(void 0!==n.strings?(n._$AI(e,n,t),t+=n.strings.length-2):n._$AI(e[t])),t++}};class ge{get _$AU(){return this._$AM?._$AU??this._$Cv}constructor(e,t,n,r){this.type=2,this._$AH=le,this._$AN=void 0,this._$AA=e,this._$AB=t,this._$AM=n,this.options=r,this._$Cv=r?.isConnected??!0}get parentNode(){let e=this._$AA.parentNode;const t=this._$AM;return void 0!==t&&11===e?.nodeType&&(e=t.parentNode),e}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(e,t=this){e=fe(this,e,t),Q(e)?e===le||null==e||""===e?(this._$AH!==le&&this._$AR(),this._$AH=le):e!==this._$AH&&e!==ae&&this._(e):void 0!==e._$litType$?this.$(e):void 0!==e.nodeType?this.T(e):(e=>J(e)||"function"==typeof e?.[Symbol.iterator])(e)?this.k(e):this._(e)}O(e){return this._$AA.parentNode.insertBefore(e,this._$AB)}T(e){this._$AH!==e&&(this._$AR(),this._$AH=this.O(e))}_(e){this._$AH!==le&&Q(this._$AH)?this._$AA.nextSibling.data=e:this.T(W.createTextNode(e)),this._$AH=e}$(e){const{values:t,_$litType$:n}=e,r="number"==typeof n?this._$AC(e):(void 0===n.el&&(n.el=pe.createElement(de(n.h,n.h[0]),this.options)),n);if(this._$AH?._$AD===r)this._$AH.p(t);else{const e=new me(r,this),n=e.u(this.options);e.p(t),this.T(n),this._$AH=e}}_$AC(e){let t=ce.get(e.strings);return void 0===t&&ce.set(e.strings,t=new pe(e)),t}k(e){J(this._$AH)||(this._$AH=[],this._$AR());const t=this._$AH;let n,r=0;for(const i of e)r===t.length?t.push(n=new ge(this.O(X()),this.O(X()),this,this.options)):n=t[r],n._$AI(i),r++;r<t.length&&(this._$AR(n&&n._$AB.nextSibling,r),t.length=r)}_$AR(e=this._$AA.nextSibling,t){for(this._$AP?.(!1,!0,t);e!==this._$AB;){const t=e.nextSibling;e.remove(),e=t}}setConnected(e){void 0===this._$AM&&(this._$Cv=e,this._$AP?.(e))}}let ve=class{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(e,t,n,r,i){this.type=1,this._$AH=le,this._$AN=void 0,this.element=e,this.name=t,this._$AM=r,this.options=i,n.length>2||""!==n[0]||""!==n[1]?(this._$AH=Array(n.length-1).fill(new String),this.strings=n):this._$AH=le}_$AI(e,t=this,n,r){const i=this.strings;let s=!1;if(void 0===i)e=fe(this,e,t,0),s=!Q(e)||e!==this._$AH&&e!==ae,s&&(this._$AH=e);else{const r=e;let o,a;for(e=i[0],o=0;o<i.length-1;o++)a=fe(this,r[n+o],t,o),a===ae&&(a=this._$AH[o]),s||=!Q(a)||a!==this._$AH[o],a===le?e=le:e!==le&&(e+=(a??"")+i[o+1]),this._$AH[o]=a}s&&!r&&this.j(e)}j(e){e===le?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,e??"")}},ye=class extends ve{constructor(){super(...arguments),this.type=3}j(e){this.element[this.name]=e===le?void 0:e}};class be extends ve{constructor(){super(...arguments),this.type=4}j(e){this.element.toggleAttribute(this.name,!!e&&e!==le)}}let we=class extends ve{constructor(e,t,n,r,i){super(e,t,n,r,i),this.type=5}_$AI(e,t=this){if((e=fe(this,e,t,0)??le)===ae)return;const n=this._$AH,r=e===le&&n!==le||e.capture!==n.capture||e.once!==n.once||e.passive!==n.passive,i=e!==le&&(n===le||r);r&&this.element.removeEventListener(this.name,this,n),i&&this.element.addEventListener(this.name,this,e),this._$AH=e}handleEvent(e){"function"==typeof this._$AH?this._$AH.call(this.options?.host??this.element,e):this._$AH.handleEvent(e)}},_e=class{constructor(e,t,n){this.element=e,this.type=6,this._$AN=void 0,this._$AM=t,this.options=n}get _$AU(){return this._$AM._$AU}_$AI(e){fe(this,e)}};const xe=z.litHtmlPolyfillSupport;xe?.(pe,ge),(z.litHtmlVersions??=[]).push("3.3.1");const Ee=(e,t,n)=>{const r=n?.renderBefore??t;let i=r._$litPart$;if(void 0===i){const e=n?.renderBefore??null;r._$litPart$=i=new ge(t.insertBefore(X(),e),e,void 0,n??{})}return i._$AI(e),i
/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */},Te={};
/**
 * @license
 * Copyright 2023 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
N.State,N.Computed;const Ie=(e,t)=>new N.State(e,t),Se=(e,t)=>new N.Computed(e,t),Ce=Ie("World"),ke=Ie(0),Ae=Ie(null);Se(()=>{const e=Ce.get();return{name:e,greeting:`Hello, ${e}!`,clickCount:ke.get(),lastInteractionTs:Ae.get()}});const De=Ie(""),Ne=Ie(null),Re=Ie("idle"),Oe=Ie(null),Pe=Ie(null);Se(()=>({packageName:De.get(),packageData:Ne.get(),status:Re.get(),lastUpdated:Oe.get(),errorMessage:Pe.get()}));const Le=Ie("web-components"),$e=Ie([]),Me=Ie("idle"),Ue=Ie(null),Fe=Ie(0),Ve=Ie(null),ze=Ie(!1),je=Ie(!1);if(Se(()=>({version:Fe.get(),topic:Le.get(),tasks:$e.get(),status:Me.get(),lastUpdated:Ue.get(),isAutoRefreshing:je.get(),errorMessage:Ve.get()})),"object"==typeof globalThis){const e=globalThis;e.__dfPracticeForcePracticeErrorSetter=function(e){ze.set(e)},e.__dfPracticeGetForcePracticeError=()=>ze.get()}const Be=Ie([]),qe=Ie("none"),He=Ie([{id:"none",label:"None"},{id:"upload",label:"Upload"},{id:"site",label:"Site"},{id:"add",label:"Add"}]);Se(()=>({options:He.get(),selectedId:qe.get(),disabledIds:Be.get()}));const Ge=Ie("none"),Ke=Ie(""),We=Ie("Select File to Upload"),Xe=Ie(!1),Qe=Ie(0),Je=Ie(!1),Ye=Ie("void");Se(()=>({mode:Ge.get(),linkUrl:Ke.get(),fileName:We.get(),isUploading:Xe.get(),uploadProgress:Qe.get(),isValid:Je.get(),mediaType:Ye.get()}));const Ze=Ie(0),et=Ie(""),tt=Ie("idle"),nt=Ie(null),rt=Ie(null);Se(()=>({tokenCount:Ze.get(),documentContent:et.get(),status:tt.get(),lastUpdated:nt.get(),errorMessage:rt.get()}));
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
const it=function(e){const t=[];let n=0;for(let r=0;r<e.length;r++){let i=e.charCodeAt(r);i<128?t[n++]=i:i<2048?(t[n++]=i>>6|192,t[n++]=63&i|128):55296==(64512&i)&&r+1<e.length&&56320==(64512&e.charCodeAt(r+1))?(i=65536+((1023&i)<<10)+(1023&e.charCodeAt(++r)),t[n++]=i>>18|240,t[n++]=i>>12&63|128,t[n++]=i>>6&63|128,t[n++]=63&i|128):(t[n++]=i>>12|224,t[n++]=i>>6&63|128,t[n++]=63&i|128)}return t},st={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:"function"==typeof atob,encodeByteArray(e,t){if(!Array.isArray(e))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=t?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let t=0;t<e.length;t+=3){const i=e[t],s=t+1<e.length,o=s?e[t+1]:0,a=t+2<e.length,l=a?e[t+2]:0,c=i>>2,u=(3&i)<<4|o>>4;let d=(15&o)<<2|l>>6,h=63&l;a||(h=64,s||(d=64)),r.push(n[c],n[u],n[d],n[h])}return r.join("")},encodeString(e,t){return this.HAS_NATIVE_SUPPORT&&!t?btoa(e):this.encodeByteArray(it(e),t)},decodeString(e,t){return this.HAS_NATIVE_SUPPORT&&!t?atob(e):function(e){const t=[];let n=0,r=0;for(;n<e.length;){const i=e[n++];if(i<128)t[r++]=String.fromCharCode(i);else if(i>191&&i<224){const s=e[n++];t[r++]=String.fromCharCode((31&i)<<6|63&s)}else if(i>239&&i<365){const s=((7&i)<<18|(63&e[n++])<<12|(63&e[n++])<<6|63&e[n++])-65536;t[r++]=String.fromCharCode(55296+(s>>10)),t[r++]=String.fromCharCode(56320+(1023&s))}else{const s=e[n++],o=e[n++];t[r++]=String.fromCharCode((15&i)<<12|(63&s)<<6|63&o)}}return t.join("")}(this.decodeStringToByteArray(e,t))},decodeStringToByteArray(e,t){this.init_();const n=t?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let t=0;t<e.length;){const i=n[e.charAt(t++)],s=t<e.length?n[e.charAt(t)]:0;++t;const o=t<e.length?n[e.charAt(t)]:64;++t;const a=t<e.length?n[e.charAt(t)]:64;if(++t,null==i||null==s||null==o||null==a)throw new ot;const l=i<<2|s>>4;if(r.push(l),64!==o){const e=s<<4&240|o>>2;if(r.push(e),64!==a){const e=o<<6&192|a;r.push(e)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let e=0;e<this.ENCODED_VALS.length;e++)this.byteToCharMap_[e]=this.ENCODED_VALS.charAt(e),this.charToByteMap_[this.byteToCharMap_[e]]=e,this.byteToCharMapWebSafe_[e]=this.ENCODED_VALS_WEBSAFE.charAt(e),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[e]]=e,e>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(e)]=e,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(e)]=e)}}};
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
 */class ot extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const at=function(e){return function(e){const t=it(e);return st.encodeByteArray(t,!0)}(e).replace(/\./g,"")},lt=function(e){try{return st.decodeString(e,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};
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
function ct(){if("undefined"!=typeof self)return self;if("undefined"!=typeof window)return window;if("undefined"!=typeof global)return global;throw new Error("Unable to locate global object.")}
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
 */const ut=()=>{try{return ct().__FIREBASE_DEFAULTS__||(()=>{if("undefined"==typeof process||void 0===process.env)return;const e=process.env.__FIREBASE_DEFAULTS__;return e?JSON.parse(e):void 0})()||(()=>{if("undefined"==typeof document)return;let e;try{e=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch(e){return}const t=e&&lt(e[1]);return t&&JSON.parse(t)})()}catch(e){return void console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${e}`)}},dt=e=>{var t,n;return null===(n=null===(t=ut())||void 0===t?void 0:t.emulatorHosts)||void 0===n?void 0:n[e]},ht=e=>{const t=dt(e);if(!t)return;const n=t.lastIndexOf(":");if(n<=0||n+1===t.length)throw new Error(`Invalid host ${t} with no separate hostname and port!`);const r=parseInt(t.substring(n+1),10);return"["===t[0]?[t.substring(1,n-1),r]:[t.substring(0,n),r]},pt=()=>{var e;return null===(e=ut())||void 0===e?void 0:e.config},ft=e=>{var t;return null===(t=ut())||void 0===t?void 0:t[`_${e}`]};
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
class mt{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,t)=>{this.resolve=e,this.reject=t})}wrapCallback(e){return(t,n)=>{t?this.reject(t):this.resolve(n),"function"==typeof e&&(this.promise.catch(()=>{}),1===e.length?e(t):e(t,n))}}}
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
 */function gt(e){try{return(e.startsWith("http://")||e.startsWith("https://")?new URL(e).hostname:e).endsWith(".cloudworkstations.dev")}catch(e){return!1}}async function vt(e){return(await fetch(e,{credentials:"include"})).ok}
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
 */function yt(e,t){if(e.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n=t||"demo-project",r=e.iat||0,i=e.sub||e.user_id;if(!i)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const s=Object.assign({iss:`https://securetoken.google.com/${n}`,aud:n,iat:r,exp:r+3600,auth_time:r,sub:i,user_id:i,firebase:{sign_in_provider:"custom",identities:{}}},e);return[at(JSON.stringify({alg:"none",type:"JWT"})),at(JSON.stringify(s)),""].join(".")}const bt={};let wt=!1;function _t(e,t){if("undefined"==typeof window||"undefined"==typeof document||!gt(window.location.host)||bt[e]===t||bt[e]||wt)return;function n(e){return`__firebase__banner__${e}`}bt[e]=t;const r="__firebase__banner",i=function(){const e={prod:[],emulator:[]};for(const t of Object.keys(bt))bt[t]?e.emulator.push(t):e.prod.push(t);return e}().prod.length>0;function s(){const e=document.createElement("span");return e.style.cursor="pointer",e.style.marginLeft="16px",e.style.fontSize="24px",e.innerHTML=" &times;",e.onclick=()=>{wt=!0,function(){const e=document.getElementById(r);e&&e.remove()}()},e}function o(){const e=function(e){let t=document.getElementById(e),n=!1;return t||(t=document.createElement("div"),t.setAttribute("id",e),n=!0),{created:n,element:t}}(r),t=n("text"),o=document.getElementById(t)||document.createElement("span"),a=n("learnmore"),l=document.getElementById(a)||document.createElement("a"),c=n("preprendIcon"),u=document.getElementById(c)||document.createElementNS("http://www.w3.org/2000/svg","svg");if(e.created){const t=e.element;!function(e){e.style.display="flex",e.style.background="#7faaf0",e.style.position="fixed",e.style.bottom="5px",e.style.left="5px",e.style.padding=".5em",e.style.borderRadius="5px",e.style.alignItems="center"}(t),function(e,t){e.setAttribute("id",t),e.innerText="Learn more",e.href="https://firebase.google.com/docs/studio/preview-apps#preview-backend",e.setAttribute("target","__blank"),e.style.paddingLeft="5px",e.style.textDecoration="underline"}(l,a);const n=s();!function(e,t){e.setAttribute("width","24"),e.setAttribute("id",t),e.setAttribute("height","24"),e.setAttribute("viewBox","0 0 24 24"),e.setAttribute("fill","none"),e.style.marginLeft="-6px"}(u,c),t.append(u,o,l,n),document.body.appendChild(t)}i?(o.innerText="Preview backend disconnected.",u.innerHTML='<g clip-path="url(#clip0_6013_33858)">\n<path d="M4.8 17.6L12 5.6L19.2 17.6H4.8ZM6.91667 16.4H17.0833L12 7.93333L6.91667 16.4ZM12 15.6C12.1667 15.6 12.3056 15.5444 12.4167 15.4333C12.5389 15.3111 12.6 15.1667 12.6 15C12.6 14.8333 12.5389 14.6944 12.4167 14.5833C12.3056 14.4611 12.1667 14.4 12 14.4C11.8333 14.4 11.6889 14.4611 11.5667 14.5833C11.4556 14.6944 11.4 14.8333 11.4 15C11.4 15.1667 11.4556 15.3111 11.5667 15.4333C11.6889 15.5444 11.8333 15.6 12 15.6ZM11.4 13.6H12.6V10.4H11.4V13.6Z" fill="#212121"/>\n</g>\n<defs>\n<clipPath id="clip0_6013_33858">\n<rect width="24" height="24" fill="white"/>\n</clipPath>\n</defs>'):(u.innerHTML='<g clip-path="url(#clip0_6083_34804)">\n<path d="M11.4 15.2H12.6V11.2H11.4V15.2ZM12 10C12.1667 10 12.3056 9.94444 12.4167 9.83333C12.5389 9.71111 12.6 9.56667 12.6 9.4C12.6 9.23333 12.5389 9.09444 12.4167 8.98333C12.3056 8.86111 12.1667 8.8 12 8.8C11.8333 8.8 11.6889 8.86111 11.5667 8.98333C11.4556 9.09444 11.4 9.23333 11.4 9.4C11.4 9.56667 11.4556 9.71111 11.5667 9.83333C11.6889 9.94444 11.8333 10 12 10ZM12 18.4C11.1222 18.4 10.2944 18.2333 9.51667 17.9C8.73889 17.5667 8.05556 17.1111 7.46667 16.5333C6.88889 15.9444 6.43333 15.2611 6.1 14.4833C5.76667 13.7056 5.6 12.8778 5.6 12C5.6 11.1111 5.76667 10.2833 6.1 9.51667C6.43333 8.73889 6.88889 8.06111 7.46667 7.48333C8.05556 6.89444 8.73889 6.43333 9.51667 6.1C10.2944 5.76667 11.1222 5.6 12 5.6C12.8889 5.6 13.7167 5.76667 14.4833 6.1C15.2611 6.43333 15.9389 6.89444 16.5167 7.48333C17.1056 8.06111 17.5667 8.73889 17.9 9.51667C18.2333 10.2833 18.4 11.1111 18.4 12C18.4 12.8778 18.2333 13.7056 17.9 14.4833C17.5667 15.2611 17.1056 15.9444 16.5167 16.5333C15.9389 17.1111 15.2611 17.5667 14.4833 17.9C13.7167 18.2333 12.8889 18.4 12 18.4ZM12 17.2C13.4444 17.2 14.6722 16.6944 15.6833 15.6833C16.6944 14.6722 17.2 13.4444 17.2 12C17.2 10.5556 16.6944 9.32778 15.6833 8.31667C14.6722 7.30555 13.4444 6.8 12 6.8C10.5556 6.8 9.32778 7.30555 8.31667 8.31667C7.30556 9.32778 6.8 10.5556 6.8 12C6.8 13.4444 7.30556 14.6722 8.31667 15.6833C9.32778 16.6944 10.5556 17.2 12 17.2Z" fill="#212121"/>\n</g>\n<defs>\n<clipPath id="clip0_6083_34804">\n<rect width="24" height="24" fill="white"/>\n</clipPath>\n</defs>',o.innerText="Preview backend running in this workspace."),o.setAttribute("id",t)}"loading"===document.readyState?window.addEventListener("DOMContentLoaded",o):o()}
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
 */function xt(){return"undefined"!=typeof navigator&&"string"==typeof navigator.userAgent?navigator.userAgent:""}function Et(){var e;const t=null===(e=ut())||void 0===e?void 0:e.forceEnvironment;if("node"===t)return!0;if("browser"===t)return!1;try{return"[object process]"===Object.prototype.toString.call(global.process)}catch(e){return!1}}function Tt(){return!Et()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function It(){return!Et()&&!!navigator.userAgent&&(navigator.userAgent.includes("Safari")||navigator.userAgent.includes("WebKit"))&&!navigator.userAgent.includes("Chrome")}function St(){try{return"object"==typeof indexedDB}catch(e){return!1}}class Ct extends Error{constructor(e,t,n){super(t),this.code=e,this.customData=n,this.name="FirebaseError",Object.setPrototypeOf(this,Ct.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,kt.prototype.create)}}class kt{constructor(e,t,n){this.service=e,this.serviceName=t,this.errors=n}create(e,...t){const n=t[0]||{},r=`${this.service}/${e}`,i=this.errors[e],s=i?function(e,t){return e.replace(At,(e,n)=>{const r=t[n];return null!=r?String(r):`<${n}?>`})}(i,n):"Error",o=`${this.serviceName}: ${s} (${r}).`;return new Ct(r,o,n)}}const At=/\{\$([^}]+)}/g;function Dt(e,t){if(e===t)return!0;const n=Object.keys(e),r=Object.keys(t);for(const i of n){if(!r.includes(i))return!1;const n=e[i],s=t[i];if(Nt(n)&&Nt(s)){if(!Dt(n,s))return!1}else if(n!==s)return!1}for(const e of r)if(!n.includes(e))return!1;return!0}function Nt(e){return null!==e&&"object"==typeof e}
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
 */function Rt(e){const t=[];for(const[n,r]of Object.entries(e))Array.isArray(r)?r.forEach(e=>{t.push(encodeURIComponent(n)+"="+encodeURIComponent(e))}):t.push(encodeURIComponent(n)+"="+encodeURIComponent(r));return t.length?"&"+t.join("&"):""}function Ot(e){const t={};return e.replace(/^\?/,"").split("&").forEach(e=>{if(e){const[n,r]=e.split("=");t[decodeURIComponent(n)]=decodeURIComponent(r)}}),t}function Pt(e){const t=e.indexOf("?");if(!t)return"";const n=e.indexOf("#",t);return e.substring(t,n>0?n:void 0)}class Lt{constructor(e,t){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=t,this.task.then(()=>{e(this)}).catch(e=>{this.error(e)})}next(e){this.forEachObserver(t=>{t.next(e)})}error(e){this.forEachObserver(t=>{t.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,t,n){let r;if(void 0===e&&void 0===t&&void 0===n)throw new Error("Missing Observer.");r=function(e,t){if("object"!=typeof e||null===e)return!1;for(const n of t)if(n in e&&"function"==typeof e[n])return!0;return!1}(e,["next","error","complete"])?e:{next:e,error:t,complete:n},void 0===r.next&&(r.next=$t),void 0===r.error&&(r.error=$t),void 0===r.complete&&(r.complete=$t);const i=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?r.error(this.finalError):r.complete()}catch(e){}}),this.observers.push(r),i}unsubscribeOne(e){void 0!==this.observers&&void 0!==this.observers[e]&&(delete this.observers[e],this.observerCount-=1,0===this.observerCount&&void 0!==this.onNoObservers&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let t=0;t<this.observers.length;t++)this.sendOne(t,e)}sendOne(e,t){this.task.then(()=>{if(void 0!==this.observers&&void 0!==this.observers[e])try{t(this.observers[e])}catch(e){"undefined"!=typeof console&&console.error&&console.error(e)}})}close(e){this.finalized||(this.finalized=!0,void 0!==e&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function $t(){}
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
 */function Mt(e){return e&&e._delegate?e._delegate:e}class Ut{constructor(e,t,n){this.name=e,this.instanceFactory=t,this.type=n,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}
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
 */const Ft="[DEFAULT]";
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
 */class Vt{constructor(e,t){this.name=e,this.container=t,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const t=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(t)){const e=new mt;if(this.instancesDeferred.set(t,e),this.isInitialized(t)||this.shouldAutoInitialize())try{const n=this.getOrInitializeService({instanceIdentifier:t});n&&e.resolve(n)}catch(e){}}return this.instancesDeferred.get(t).promise}getImmediate(e){var t;const n=this.normalizeInstanceIdentifier(null==e?void 0:e.identifier),r=null!==(t=null==e?void 0:e.optional)&&void 0!==t&&t;if(!this.isInitialized(n)&&!this.shouldAutoInitialize()){if(r)return null;throw Error(`Service ${this.name} is not available`)}try{return this.getOrInitializeService({instanceIdentifier:n})}catch(e){if(r)return null;throw e}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,this.shouldAutoInitialize()){if(function(e){return"EAGER"===e.instantiationMode}
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
 */(e))try{this.getOrInitializeService({instanceIdentifier:Ft})}catch(e){}for(const[e,t]of this.instancesDeferred.entries()){const n=this.normalizeInstanceIdentifier(e);try{const e=this.getOrInitializeService({instanceIdentifier:n});t.resolve(e)}catch(e){}}}}clearInstance(e=Ft){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(e=>"INTERNAL"in e).map(e=>e.INTERNAL.delete()),...e.filter(e=>"_delete"in e).map(e=>e._delete())])}isComponentSet(){return null!=this.component}isInitialized(e=Ft){return this.instances.has(e)}getOptions(e=Ft){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:t={}}=e,n=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(n))throw Error(`${this.name}(${n}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const r=this.getOrInitializeService({instanceIdentifier:n,options:t});for(const[e,t]of this.instancesDeferred.entries()){n===this.normalizeInstanceIdentifier(e)&&t.resolve(r)}return r}onInit(e,t){var n;const r=this.normalizeInstanceIdentifier(t),i=null!==(n=this.onInitCallbacks.get(r))&&void 0!==n?n:new Set;i.add(e),this.onInitCallbacks.set(r,i);const s=this.instances.get(r);return s&&e(s,r),()=>{i.delete(e)}}invokeOnInitCallbacks(e,t){const n=this.onInitCallbacks.get(t);if(n)for(const r of n)try{r(e,t)}catch(e){}}getOrInitializeService({instanceIdentifier:e,options:t={}}){let n=this.instances.get(e);if(!n&&this.component&&(n=this.component.instanceFactory(this.container,{instanceIdentifier:(r=e,r===Ft?void 0:r),options:t}),this.instances.set(e,n),this.instancesOptions.set(e,t),this.invokeOnInitCallbacks(n,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,n)}catch(e){}var r;return n||null}normalizeInstanceIdentifier(e=Ft){return this.component?this.component.multipleInstances?e:Ft:e}shouldAutoInitialize(){return!!this.component&&"EXPLICIT"!==this.component.instantiationMode}}class zt{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const t=this.getProvider(e.name);if(t.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);t.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const t=new Vt(e,this);return this.providers.set(e,t),t}getProviders(){return Array.from(this.providers.values())}}
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
 */var jt;!function(e){e[e.DEBUG=0]="DEBUG",e[e.VERBOSE=1]="VERBOSE",e[e.INFO=2]="INFO",e[e.WARN=3]="WARN",e[e.ERROR=4]="ERROR",e[e.SILENT=5]="SILENT"}(jt||(jt={}));const Bt={debug:jt.DEBUG,verbose:jt.VERBOSE,info:jt.INFO,warn:jt.WARN,error:jt.ERROR,silent:jt.SILENT},qt=jt.INFO,Ht={[jt.DEBUG]:"log",[jt.VERBOSE]:"log",[jt.INFO]:"info",[jt.WARN]:"warn",[jt.ERROR]:"error"},Gt=(e,t,...n)=>{if(t<e.logLevel)return;const r=(new Date).toISOString(),i=Ht[t];if(!i)throw new Error(`Attempted to log a message with an invalid logType (value: ${t})`);console[i](`[${r}]  ${e.name}:`,...n)};class Kt{constructor(e){this.name=e,this._logLevel=qt,this._logHandler=Gt,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in jt))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel="string"==typeof e?Bt[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if("function"!=typeof e)throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,jt.DEBUG,...e),this._logHandler(this,jt.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,jt.VERBOSE,...e),this._logHandler(this,jt.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,jt.INFO,...e),this._logHandler(this,jt.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,jt.WARN,...e),this._logHandler(this,jt.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,jt.ERROR,...e),this._logHandler(this,jt.ERROR,...e)}}let Wt,Xt;const Qt=new WeakMap,Jt=new WeakMap,Yt=new WeakMap,Zt=new WeakMap,en=new WeakMap;let tn={get(e,t,n){if(e instanceof IDBTransaction){if("done"===t)return Jt.get(e);if("objectStoreNames"===t)return e.objectStoreNames||Yt.get(e);if("store"===t)return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return sn(e[t])},set:(e,t,n)=>(e[t]=n,!0),has:(e,t)=>e instanceof IDBTransaction&&("done"===t||"store"===t)||t in e};function nn(e){return e!==IDBDatabase.prototype.transaction||"objectStoreNames"in IDBTransaction.prototype?(Xt||(Xt=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])).includes(e)?function(...t){return e.apply(on(this),t),sn(Qt.get(this))}:function(...t){return sn(e.apply(on(this),t))}:function(t,...n){const r=e.call(on(this),t,...n);return Yt.set(r,t.sort?t.sort():[t]),sn(r)}}function rn(e){return"function"==typeof e?nn(e):(e instanceof IDBTransaction&&function(e){if(Jt.has(e))return;const t=new Promise((t,n)=>{const r=()=>{e.removeEventListener("complete",i),e.removeEventListener("error",s),e.removeEventListener("abort",s)},i=()=>{t(),r()},s=()=>{n(e.error||new DOMException("AbortError","AbortError")),r()};e.addEventListener("complete",i),e.addEventListener("error",s),e.addEventListener("abort",s)});Jt.set(e,t)}(e),t=e,(Wt||(Wt=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])).some(e=>t instanceof e)?new Proxy(e,tn):e);var t}function sn(e){if(e instanceof IDBRequest)return function(e){const t=new Promise((t,n)=>{const r=()=>{e.removeEventListener("success",i),e.removeEventListener("error",s)},i=()=>{t(sn(e.result)),r()},s=()=>{n(e.error),r()};e.addEventListener("success",i),e.addEventListener("error",s)});return t.then(t=>{t instanceof IDBCursor&&Qt.set(t,e)}).catch(()=>{}),en.set(t,e),t}(e);if(Zt.has(e))return Zt.get(e);const t=rn(e);return t!==e&&(Zt.set(e,t),en.set(t,e)),t}const on=e=>en.get(e);const an=["get","getKey","getAll","getAllKeys","count"],ln=["put","add","delete","clear"],cn=new Map;function un(e,t){if(!(e instanceof IDBDatabase)||t in e||"string"!=typeof t)return;if(cn.get(t))return cn.get(t);const n=t.replace(/FromIndex$/,""),r=t!==n,i=ln.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!i&&!an.includes(n))return;const s=async function(e,...t){const s=this.transaction(e,i?"readwrite":"readonly");let o=s.store;return r&&(o=o.index(t.shift())),(await Promise.all([o[n](...t),i&&s.done]))[0]};return cn.set(t,s),s}tn=(e=>({...e,get:(t,n,r)=>un(t,n)||e.get(t,n,r),has:(t,n)=>!!un(t,n)||e.has(t,n)}))(tn);
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
class dn{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(e=>{if(function(e){const t=e.getComponent();return"VERSION"===(null==t?void 0:t.type)}(e)){const t=e.getImmediate();return`${t.library}/${t.version}`}return null}).filter(e=>e).join(" ")}}const hn="@firebase/app",pn="0.13.2",fn=new Kt("@firebase/app"),mn="@firebase/app-compat",gn="@firebase/analytics-compat",vn="@firebase/analytics",yn="@firebase/app-check-compat",bn="@firebase/app-check",wn="@firebase/auth",_n="@firebase/auth-compat",xn="@firebase/database",En="@firebase/data-connect",Tn="@firebase/database-compat",In="@firebase/functions",Sn="@firebase/functions-compat",Cn="@firebase/installations",kn="@firebase/installations-compat",An="@firebase/messaging",Dn="@firebase/messaging-compat",Nn="@firebase/performance",Rn="@firebase/performance-compat",On="@firebase/remote-config",Pn="@firebase/remote-config-compat",Ln="@firebase/storage",$n="@firebase/storage-compat",Mn="@firebase/firestore",Un="@firebase/ai",Fn="@firebase/firestore-compat",Vn="firebase",zn="[DEFAULT]",jn={[hn]:"fire-core",[mn]:"fire-core-compat",[vn]:"fire-analytics",[gn]:"fire-analytics-compat",[bn]:"fire-app-check",[yn]:"fire-app-check-compat",[wn]:"fire-auth",[_n]:"fire-auth-compat",[xn]:"fire-rtdb",[En]:"fire-data-connect",[Tn]:"fire-rtdb-compat",[In]:"fire-fn",[Sn]:"fire-fn-compat",[Cn]:"fire-iid",[kn]:"fire-iid-compat",[An]:"fire-fcm",[Dn]:"fire-fcm-compat",[Nn]:"fire-perf",[Rn]:"fire-perf-compat",[On]:"fire-rc",[Pn]:"fire-rc-compat",[Ln]:"fire-gcs",[$n]:"fire-gcs-compat",[Mn]:"fire-fst",[Fn]:"fire-fst-compat",[Un]:"fire-vertex","fire-js":"fire-js",[Vn]:"fire-js-all"},Bn=new Map,qn=new Map,Hn=new Map;function Gn(e,t){try{e.container.addComponent(t)}catch(n){fn.debug(`Component ${t.name} failed to register with FirebaseApp ${e.name}`,n)}}function Kn(e){const t=e.name;if(Hn.has(t))return fn.debug(`There were multiple attempts to register component ${t}.`),!1;Hn.set(t,e);for(const t of Bn.values())Gn(t,e);for(const t of qn.values())Gn(t,e);return!0}function Wn(e,t){const n=e.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),e.container.getProvider(t)}function Xn(e){return null!=e&&void 0!==e.settings}
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
 */const Qn=new kt("app","Firebase",{"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."});
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
class Jn{constructor(e,t,n){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},t),this._name=t.name,this._automaticDataCollectionEnabled=t.automaticDataCollectionEnabled,this._container=n,this.container.addComponent(new Ut("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw Qn.create("app-deleted",{appName:this._name})}}
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
 */const Yn="11.10.0";function Zn(e,t={}){let n=e;if("object"!=typeof t){t={name:t}}const r=Object.assign({name:zn,automaticDataCollectionEnabled:!0},t),i=r.name;if("string"!=typeof i||!i)throw Qn.create("bad-app-name",{appName:String(i)});if(n||(n=pt()),!n)throw Qn.create("no-options");const s=Bn.get(i);if(s){if(Dt(n,s.options)&&Dt(r,s.config))return s;throw Qn.create("duplicate-app",{appName:i})}const o=new zt(i);for(const e of Hn.values())o.addComponent(e);const a=new Jn(n,r,o);return Bn.set(i,a),a}function er(e=zn){const t=Bn.get(e);if(!t&&e===zn&&pt())return Zn();if(!t)throw Qn.create("no-app",{appName:e});return t}function tr(e,t,n){var r;let i=null!==(r=jn[e])&&void 0!==r?r:e;n&&(i+=`-${n}`);const s=i.match(/\s|\//),o=t.match(/\s|\//);if(s||o){const e=[`Unable to register library "${i}" with version "${t}":`];return s&&e.push(`library name "${i}" contains illegal characters (whitespace or "/")`),s&&o&&e.push("and"),o&&e.push(`version name "${t}" contains illegal characters (whitespace or "/")`),void fn.warn(e.join(" "))}Kn(new Ut(`${i}-version`,()=>({library:i,version:t}),"VERSION"))}
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
 */const nr="firebase-heartbeat-store";let rr=null;function ir(){return rr||(rr=function(e,t,{blocked:n,upgrade:r,blocking:i,terminated:s}={}){const o=indexedDB.open(e,t),a=sn(o);return r&&o.addEventListener("upgradeneeded",e=>{r(sn(o.result),e.oldVersion,e.newVersion,sn(o.transaction),e)}),n&&o.addEventListener("blocked",e=>n(e.oldVersion,e.newVersion,e)),a.then(e=>{s&&e.addEventListener("close",()=>s()),i&&e.addEventListener("versionchange",e=>i(e.oldVersion,e.newVersion,e))}).catch(()=>{}),a}("firebase-heartbeat-database",1,{upgrade:(e,t)=>{if(0===t)try{e.createObjectStore(nr)}catch(e){console.warn(e)}}}).catch(e=>{throw Qn.create("idb-open",{originalErrorMessage:e.message})})),rr}async function sr(e,t){try{const n=(await ir()).transaction(nr,"readwrite"),r=n.objectStore(nr);await r.put(t,or(e)),await n.done}catch(e){if(e instanceof Ct)fn.warn(e.message);else{const t=Qn.create("idb-set",{originalErrorMessage:null==e?void 0:e.message});fn.warn(t.message)}}}function or(e){return`${e.name}!${e.options.appId}`}
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
 */class ar{constructor(e){this.container=e,this._heartbeatsCache=null;const t=this.container.getProvider("app").getImmediate();this._storage=new cr(t),this._heartbeatsCachePromise=this._storage.read().then(e=>(this._heartbeatsCache=e,e))}async triggerHeartbeat(){var e,t;try{const n=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),r=lr();if(null==(null===(e=this._heartbeatsCache)||void 0===e?void 0:e.heartbeats)&&(this._heartbeatsCache=await this._heartbeatsCachePromise,null==(null===(t=this._heartbeatsCache)||void 0===t?void 0:t.heartbeats)))return;if(this._heartbeatsCache.lastSentHeartbeatDate===r||this._heartbeatsCache.heartbeats.some(e=>e.date===r))return;if(this._heartbeatsCache.heartbeats.push({date:r,agent:n}),this._heartbeatsCache.heartbeats.length>30){const e=function(e){if(0===e.length)return-1;let t=0,n=e[0].date;for(let r=1;r<e.length;r++)e[r].date<n&&(n=e[r].date,t=r);return t}
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
 */(this._heartbeatsCache.heartbeats);this._heartbeatsCache.heartbeats.splice(e,1)}return this._storage.overwrite(this._heartbeatsCache)}catch(e){fn.warn(e)}}async getHeartbeatsHeader(){var e;try{if(null===this._heartbeatsCache&&await this._heartbeatsCachePromise,null==(null===(e=this._heartbeatsCache)||void 0===e?void 0:e.heartbeats)||0===this._heartbeatsCache.heartbeats.length)return"";const t=lr(),{heartbeatsToSend:n,unsentEntries:r}=function(e,t=1024){const n=[];let r=e.slice();for(const i of e){const e=n.find(e=>e.agent===i.agent);if(e){if(e.dates.push(i.date),ur(n)>t){e.dates.pop();break}}else if(n.push({agent:i.agent,dates:[i.date]}),ur(n)>t){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}(this._heartbeatsCache.heartbeats),i=at(JSON.stringify({version:2,heartbeats:n}));return this._heartbeatsCache.lastSentHeartbeatDate=t,r.length>0?(this._heartbeatsCache.heartbeats=r,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),i}catch(e){return fn.warn(e),""}}}function lr(){return(new Date).toISOString().substring(0,10)}class cr{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return!!St()&&new Promise((e,t)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(r);i.onsuccess=()=>{i.result.close(),n||self.indexedDB.deleteDatabase(r),e(!0)},i.onupgradeneeded=()=>{n=!1},i.onerror=()=>{var e;t((null===(e=i.error)||void 0===e?void 0:e.message)||"")}}catch(e){t(e)}}).then(()=>!0).catch(()=>!1)}async read(){if(await this._canUseIndexedDBPromise){const e=await async function(e){try{const t=(await ir()).transaction(nr),n=await t.objectStore(nr).get(or(e));return await t.done,n}catch(e){if(e instanceof Ct)fn.warn(e.message);else{const t=Qn.create("idb-get",{originalErrorMessage:null==e?void 0:e.message});fn.warn(t.message)}}}(this.app);return(null==e?void 0:e.heartbeats)?e:{heartbeats:[]}}return{heartbeats:[]}}async overwrite(e){var t;if(await this._canUseIndexedDBPromise){const n=await this.read();return sr(this.app,{lastSentHeartbeatDate:null!==(t=e.lastSentHeartbeatDate)&&void 0!==t?t:n.lastSentHeartbeatDate,heartbeats:e.heartbeats})}}async add(e){var t;if(await this._canUseIndexedDBPromise){const n=await this.read();return sr(this.app,{lastSentHeartbeatDate:null!==(t=e.lastSentHeartbeatDate)&&void 0!==t?t:n.lastSentHeartbeatDate,heartbeats:[...n.heartbeats,...e.heartbeats]})}}}function ur(e){return at(JSON.stringify({version:2,heartbeats:e})).length}var dr;function hr(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var i=0;for(r=Object.getOwnPropertySymbols(e);i<r.length;i++)t.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(e,r[i])&&(n[r[i]]=e[r[i]])}return n}function pr(e,t,n,r){var i,s=arguments.length,o=s<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,n):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)o=Reflect.decorate(e,t,n,r);else for(var a=e.length-1;a>=0;a--)(i=e[a])&&(o=(s<3?i(o):s>3?i(t,n,o):i(t,n))||o);return s>3&&o&&Object.defineProperty(t,n,o),o}function fr(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}dr="",Kn(new Ut("platform-logger",e=>new dn(e),"PRIVATE")),Kn(new Ut("heartbeat",e=>new ar(e),"PRIVATE")),tr(hn,pn,dr),tr(hn,pn,"esm2017"),tr("fire-js",""),"function"==typeof SuppressedError&&SuppressedError;const mr=fr,gr=new kt("auth","Firebase",{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}),vr=new Kt("@firebase/auth");function yr(e,...t){vr.logLevel<=jt.ERROR&&vr.error(`Auth (${Yn}): ${e}`,...t)}
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
 */function br(e,...t){throw Er(e,...t)}function wr(e,...t){return Er(e,...t)}function _r(e,t,n){const r=Object.assign(Object.assign({},mr()),{[t]:n});return new kt("auth","Firebase",r).create(t,{appName:e.name})}function xr(e){return _r(e,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function Er(e,...t){if("string"!=typeof e){const n=t[0],r=[...t.slice(1)];return r[0]&&(r[0].appName=e.name),e._errorFactory.create(n,...r)}return gr.create(e,...t)}function Tr(e,t,...n){if(!e)throw Er(t,...n)}function Ir(e){const t="INTERNAL ASSERTION FAILED: "+e;throw yr(t),new Error(t)}function Sr(e,t){e||Ir(t)}
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
 */function Cr(){var e;return"undefined"!=typeof self&&(null===(e=self.location)||void 0===e?void 0:e.href)||""}function kr(){var e;return"undefined"!=typeof self&&(null===(e=self.location)||void 0===e?void 0:e.protocol)||null}
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
 */function Ar(){return"undefined"==typeof navigator||!navigator||!("onLine"in navigator)||"boolean"!=typeof navigator.onLine||"http:"!==kr()&&"https:"!==kr()&&!function(){const e="object"==typeof chrome?chrome.runtime:"object"==typeof browser?browser.runtime:void 0;return"object"==typeof e&&void 0!==e.id}()&&!("connection"in navigator)||navigator.onLine}
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
class Dr{constructor(e,t){this.shortDelay=e,this.longDelay=t,Sr(t>e,"Short delay should be less than long delay!"),this.isMobile="undefined"!=typeof window&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(xt())||"object"==typeof navigator&&"ReactNative"===navigator.product}get(){return Ar()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}
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
 */function Nr(e,t){Sr(e.emulator,"Emulator should always be set here");const{url:n}=e.emulator;return t?`${n}${t.startsWith("/")?t.slice(1):t}`:n}
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
 */class Rr{static initialize(e,t,n){this.fetchImpl=e,t&&(this.headersImpl=t),n&&(this.responseImpl=n)}static fetch(){return this.fetchImpl?this.fetchImpl:"undefined"!=typeof self&&"fetch"in self?self.fetch:"undefined"!=typeof globalThis&&globalThis.fetch?globalThis.fetch:"undefined"!=typeof fetch?fetch:void Ir("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){return this.headersImpl?this.headersImpl:"undefined"!=typeof self&&"Headers"in self?self.Headers:"undefined"!=typeof globalThis&&globalThis.Headers?globalThis.Headers:"undefined"!=typeof Headers?Headers:void Ir("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){return this.responseImpl?this.responseImpl:"undefined"!=typeof self&&"Response"in self?self.Response:"undefined"!=typeof globalThis&&globalThis.Response?globalThis.Response:"undefined"!=typeof Response?Response:void Ir("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}
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
 */const Or={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"},Pr=["/v1/accounts:signInWithCustomToken","/v1/accounts:signInWithEmailLink","/v1/accounts:signInWithIdp","/v1/accounts:signInWithPassword","/v1/accounts:signInWithPhoneNumber","/v1/token"],Lr=new Dr(3e4,6e4);
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
 */function $r(e,t){return e.tenantId&&!t.tenantId?Object.assign(Object.assign({},t),{tenantId:e.tenantId}):t}async function Mr(e,t,n,r,i={}){return Ur(e,i,async()=>{let i={},s={};r&&("GET"===t?s=r:i={body:JSON.stringify(r)});const o=Rt(Object.assign({key:e.config.apiKey},s)).slice(1),a=await e._getAdditionalHeaders();a["Content-Type"]="application/json",e.languageCode&&(a["X-Firebase-Locale"]=e.languageCode);const l=Object.assign({method:t,headers:a},i);return"undefined"!=typeof navigator&&"Cloudflare-Workers"===navigator.userAgent||(l.referrerPolicy="no-referrer"),e.emulatorConfig&&gt(e.emulatorConfig.host)&&(l.credentials="include"),Rr.fetch()(await Vr(e,e.config.apiHost,n,o),l)})}async function Ur(e,t,n){e._canInitEmulator=!1;const r=Object.assign(Object.assign({},Or),t);try{const t=new jr(e),i=await Promise.race([n(),t.promise]);t.clearNetworkTimeout();const s=await i.json();if("needConfirmation"in s)throw Br(e,"account-exists-with-different-credential",s);if(i.ok&&!("errorMessage"in s))return s;{const t=i.ok?s.errorMessage:s.error.message,[n,o]=t.split(" : ");if("FEDERATED_USER_ID_ALREADY_LINKED"===n)throw Br(e,"credential-already-in-use",s);if("EMAIL_EXISTS"===n)throw Br(e,"email-already-in-use",s);if("USER_DISABLED"===n)throw Br(e,"user-disabled",s);const a=r[n]||n.toLowerCase().replace(/[_\s]+/g,"-");if(o)throw _r(e,a,o);br(e,a)}}catch(t){if(t instanceof Ct)throw t;br(e,"network-request-failed",{message:String(t)})}}async function Fr(e,t,n,r,i={}){const s=await Mr(e,t,n,r,i);return"mfaPendingCredential"in s&&br(e,"multi-factor-auth-required",{_serverResponse:s}),s}async function Vr(e,t,n,r){const i=`${t}${n}?${r}`,s=e,o=s.config.emulator?Nr(e.config,i):`${e.config.apiScheme}://${i}`;if(Pr.includes(n)&&(await s._persistenceManagerAvailable,"COOKIE"===s._getPersistenceType())){return s._getPersistence()._getFinalTarget(o).toString()}return o}function zr(e){switch(e){case"ENFORCE":return"ENFORCE";case"AUDIT":return"AUDIT";case"OFF":return"OFF";default:return"ENFORCEMENT_STATE_UNSPECIFIED"}}class jr{clearNetworkTimeout(){clearTimeout(this.timer)}constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((e,t)=>{this.timer=setTimeout(()=>t(wr(this.auth,"network-request-failed")),Lr.get())})}}function Br(e,t,n){const r={appName:e.name};n.email&&(r.email=n.email),n.phoneNumber&&(r.phoneNumber=n.phoneNumber);const i=wr(e,t,r);return i.customData._tokenResponse=n,i}function qr(e){return void 0!==e&&void 0!==e.enterprise}class Hr{constructor(e){if(this.siteKey="",this.recaptchaEnforcementState=[],void 0===e.recaptchaKey)throw new Error("recaptchaKey undefined");this.siteKey=e.recaptchaKey.split("/")[3],this.recaptchaEnforcementState=e.recaptchaEnforcementState}getProviderEnforcementState(e){if(!this.recaptchaEnforcementState||0===this.recaptchaEnforcementState.length)return null;for(const t of this.recaptchaEnforcementState)if(t.provider&&t.provider===e)return zr(t.enforcementState);return null}isProviderEnabled(e){return"ENFORCE"===this.getProviderEnforcementState(e)||"AUDIT"===this.getProviderEnforcementState(e)}isAnyProviderEnabled(){return this.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")||this.isProviderEnabled("PHONE_PROVIDER")}}async function Gr(e,t){return Mr(e,"POST","/v1/accounts:lookup",t)}
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
 */function Kr(e){if(e)try{const t=new Date(Number(e));if(!isNaN(t.getTime()))return t.toUTCString()}catch(e){}}function Wr(e){return 1e3*Number(e)}function Xr(e){const[t,n,r]=e.split(".");if(void 0===t||void 0===n||void 0===r)return yr("JWT malformed, contained fewer than 3 sections"),null;try{const e=lt(n);return e?JSON.parse(e):(yr("Failed to decode base64 JWT payload"),null)}catch(e){return yr("Caught error parsing JWT payload as JSON",null==e?void 0:e.toString()),null}}function Qr(e){const t=Xr(e);return Tr(t,"internal-error"),Tr(void 0!==t.exp,"internal-error"),Tr(void 0!==t.iat,"internal-error"),Number(t.exp)-Number(t.iat)}
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
 */async function Jr(e,t,n=!1){if(n)return t;try{return await t}catch(t){throw t instanceof Ct&&function({code:e}){return"auth/user-disabled"===e||"auth/user-token-expired"===e}
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
 */(t)&&e.auth.currentUser===e&&await e.auth.signOut(),t}}class Yr{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,null!==this.timerId&&clearTimeout(this.timerId))}getInterval(e){var t;if(e){const e=this.errorBackoff;return this.errorBackoff=Math.min(2*this.errorBackoff,96e4),e}{this.errorBackoff=3e4;const e=(null!==(t=this.user.stsTokenManager.expirationTime)&&void 0!==t?t:0)-Date.now()-3e5;return Math.max(0,e)}}schedule(e=!1){if(!this.isRunning)return;const t=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},t)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){return void("auth/network-request-failed"===(null==e?void 0:e.code)&&this.schedule(!0))}this.schedule()}}
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
 */class Zr{constructor(e,t){this.createdAt=e,this.lastLoginAt=t,this._initializeTime()}_initializeTime(){this.lastSignInTime=Kr(this.lastLoginAt),this.creationTime=Kr(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}
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
 */async function ei(e){var t;const n=e.auth,r=await e.getIdToken(),i=await Jr(e,Gr(n,{idToken:r}));Tr(null==i?void 0:i.users.length,n,"internal-error");const s=i.users[0];e._notifyReloadListener(s);const o=(null===(t=s.providerUserInfo)||void 0===t?void 0:t.length)?ti(s.providerUserInfo):[],a=function(e,t){const n=e.filter(e=>!t.some(t=>t.providerId===e.providerId));return[...n,...t]}(e.providerData,o),l=e.isAnonymous,c=!(e.email&&s.passwordHash||(null==a?void 0:a.length)),u=!!l&&c,d={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:a,metadata:new Zr(s.createdAt,s.lastLoginAt),isAnonymous:u};Object.assign(e,d)}function ti(e){return e.map(e=>{var{providerId:t}=e,n=hr(e,["providerId"]);return{providerId:t,uid:n.rawId||"",displayName:n.displayName||null,email:n.email||null,phoneNumber:n.phoneNumber||null,photoURL:n.photoUrl||null}})}
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
class ni{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){Tr(e.idToken,"internal-error"),Tr(void 0!==e.idToken,"internal-error"),Tr(void 0!==e.refreshToken,"internal-error");const t="expiresIn"in e&&void 0!==e.expiresIn?Number(e.expiresIn):Qr(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,t)}updateFromIdToken(e){Tr(0!==e.length,"internal-error");const t=Qr(e);this.updateTokensAndExpiration(e,null,t)}async getToken(e,t=!1){return t||!this.accessToken||this.isExpired?(Tr(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null):this.accessToken}clearRefreshToken(){this.refreshToken=null}async refresh(e,t){const{accessToken:n,refreshToken:r,expiresIn:i}=await async function(e,t){const n=await Ur(e,{},async()=>{const n=Rt({grant_type:"refresh_token",refresh_token:t}).slice(1),{tokenApiHost:r,apiKey:i}=e.config,s=await Vr(e,r,"/v1/token",`key=${i}`),o=await e._getAdditionalHeaders();o["Content-Type"]="application/x-www-form-urlencoded";const a={method:"POST",headers:o,body:n};return e.emulatorConfig&&gt(e.emulatorConfig.host)&&(a.credentials="include"),Rr.fetch()(s,a)});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}(e,t);this.updateTokensAndExpiration(n,r,Number(i))}updateTokensAndExpiration(e,t,n){this.refreshToken=t||null,this.accessToken=e||null,this.expirationTime=Date.now()+1e3*n}static fromJSON(e,t){const{refreshToken:n,accessToken:r,expirationTime:i}=t,s=new ni;return n&&(Tr("string"==typeof n,"internal-error",{appName:e}),s.refreshToken=n),r&&(Tr("string"==typeof r,"internal-error",{appName:e}),s.accessToken=r),i&&(Tr("number"==typeof i,"internal-error",{appName:e}),s.expirationTime=i),s}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new ni,this.toJSON())}_performRefresh(){return Ir("not implemented")}}
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
 */function ri(e,t){Tr("string"==typeof e||void 0===e,"internal-error",{appName:t})}class ii{constructor(e){var{uid:t,auth:n,stsTokenManager:r}=e,i=hr(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new Yr(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=t,this.auth=n,this.stsTokenManager=r,this.accessToken=r.accessToken,this.displayName=i.displayName||null,this.email=i.email||null,this.emailVerified=i.emailVerified||!1,this.phoneNumber=i.phoneNumber||null,this.photoURL=i.photoURL||null,this.isAnonymous=i.isAnonymous||!1,this.tenantId=i.tenantId||null,this.providerData=i.providerData?[...i.providerData]:[],this.metadata=new Zr(i.createdAt||void 0,i.lastLoginAt||void 0)}async getIdToken(e){const t=await Jr(this,this.stsTokenManager.getToken(this.auth,e));return Tr(t,this.auth,"internal-error"),this.accessToken!==t&&(this.accessToken=t,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),t}getIdTokenResult(e){return async function(e,t=!1){const n=Mt(e),r=await n.getIdToken(t),i=Xr(r);Tr(i&&i.exp&&i.auth_time&&i.iat,n.auth,"internal-error");const s="object"==typeof i.firebase?i.firebase:void 0,o=null==s?void 0:s.sign_in_provider;return{claims:i,token:r,authTime:Kr(Wr(i.auth_time)),issuedAtTime:Kr(Wr(i.iat)),expirationTime:Kr(Wr(i.exp)),signInProvider:o||null,signInSecondFactor:(null==s?void 0:s.sign_in_second_factor)||null}}(this,e)}reload(){return async function(e){const t=Mt(e);await ei(t),await t.auth._persistUserIfCurrent(t),t.auth._notifyListenersIfCurrent(t)}(this)}_assign(e){this!==e&&(Tr(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(e=>Object.assign({},e)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const t=new ii(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return t.metadata._copy(this.metadata),t}_onReload(e){Tr(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,t=!1){let n=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),n=!0),t&&await ei(this),await this.auth._persistUserIfCurrent(this),n&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(Xn(this.auth.app))return Promise.reject(xr(this.auth));const e=await this.getIdToken();return await Jr(this,
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
async function(e,t){return Mr(e,"POST","/v1/accounts:delete",t)}(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,t){var n,r,i,s,o,a,l,c;const u=null!==(n=t.displayName)&&void 0!==n?n:void 0,d=null!==(r=t.email)&&void 0!==r?r:void 0,h=null!==(i=t.phoneNumber)&&void 0!==i?i:void 0,p=null!==(s=t.photoURL)&&void 0!==s?s:void 0,f=null!==(o=t.tenantId)&&void 0!==o?o:void 0,m=null!==(a=t._redirectEventId)&&void 0!==a?a:void 0,g=null!==(l=t.createdAt)&&void 0!==l?l:void 0,v=null!==(c=t.lastLoginAt)&&void 0!==c?c:void 0,{uid:y,emailVerified:b,isAnonymous:w,providerData:_,stsTokenManager:x}=t;Tr(y&&x,e,"internal-error");const E=ni.fromJSON(this.name,x);Tr("string"==typeof y,e,"internal-error"),ri(u,e.name),ri(d,e.name),Tr("boolean"==typeof b,e,"internal-error"),Tr("boolean"==typeof w,e,"internal-error"),ri(h,e.name),ri(p,e.name),ri(f,e.name),ri(m,e.name),ri(g,e.name),ri(v,e.name);const T=new ii({uid:y,auth:e,email:d,emailVerified:b,displayName:u,isAnonymous:w,photoURL:p,phoneNumber:h,tenantId:f,stsTokenManager:E,createdAt:g,lastLoginAt:v});return _&&Array.isArray(_)&&(T.providerData=_.map(e=>Object.assign({},e))),m&&(T._redirectEventId=m),T}static async _fromIdTokenResponse(e,t,n=!1){const r=new ni;r.updateFromServerResponse(t);const i=new ii({uid:t.localId,auth:e,stsTokenManager:r,isAnonymous:n});return await ei(i),i}static async _fromGetAccountInfoResponse(e,t,n){const r=t.users[0];Tr(void 0!==r.localId,"internal-error");const i=void 0!==r.providerUserInfo?ti(r.providerUserInfo):[],s=!(r.email&&r.passwordHash||(null==i?void 0:i.length)),o=new ni;o.updateFromIdToken(n);const a=new ii({uid:r.localId,auth:e,stsTokenManager:o,isAnonymous:s}),l={uid:r.localId,displayName:r.displayName||null,photoURL:r.photoUrl||null,email:r.email||null,emailVerified:r.emailVerified||!1,phoneNumber:r.phoneNumber||null,tenantId:r.tenantId||null,providerData:i,metadata:new Zr(r.createdAt,r.lastLoginAt),isAnonymous:!(r.email&&r.passwordHash||(null==i?void 0:i.length))};return Object.assign(a,l),a}}
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
 */const si=new Map;function oi(e){Sr(e instanceof Function,"Expected a class definition");let t=si.get(e);return t?(Sr(t instanceof e,"Instance stored in cache mismatched with class"),t):(t=new e,si.set(e,t),t)}
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
 */class ai{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,t){this.storage[e]=t}async _get(e){const t=this.storage[e];return void 0===t?null:t}async _remove(e){delete this.storage[e]}_addListener(e,t){}_removeListener(e,t){}}ai.type="NONE";const li=ai;
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
 */function ci(e,t,n){return`firebase:${e}:${t}:${n}`}class ui{constructor(e,t,n){this.persistence=e,this.auth=t,this.userKey=n;const{config:r,name:i}=this.auth;this.fullUserKey=ci(this.userKey,r.apiKey,i),this.fullPersistenceKey=ci("persistence",r.apiKey,i),this.boundEventHandler=t._onStorageEvent.bind(t),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);if(!e)return null;if("string"==typeof e){const t=await Gr(this.auth,{idToken:e}).catch(()=>{});return t?ii._fromGetAccountInfoResponse(this.auth,t,e):null}return ii._fromJSON(this.auth,e)}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const t=await this.getCurrentUser();return await this.removeCurrentUser(),this.persistence=e,t?this.setCurrentUser(t):void 0}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,t,n="authUser"){if(!t.length)return new ui(oi(li),e,n);const r=(await Promise.all(t.map(async e=>{if(await e._isAvailable())return e}))).filter(e=>e);let i=r[0]||oi(li);const s=ci(n,e.config.apiKey,e.name);let o=null;for(const n of t)try{const t=await n._get(s);if(t){let r;if("string"==typeof t){const n=await Gr(e,{idToken:t}).catch(()=>{});if(!n)break;r=await ii._fromGetAccountInfoResponse(e,n,t)}else r=ii._fromJSON(e,t);n!==i&&(o=r),i=n;break}}catch(e){}const a=r.filter(e=>e._shouldAllowMigration);return i._shouldAllowMigration&&a.length?(i=a[0],o&&await i._set(s,o.toJSON()),await Promise.all(t.map(async e=>{if(e!==i)try{await e._remove(s)}catch(e){}})),new ui(i,e,n)):new ui(i,e,n)}}
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
 */function di(e){const t=e.toLowerCase();if(t.includes("opera/")||t.includes("opr/")||t.includes("opios/"))return"Opera";if(mi(t))return"IEMobile";if(t.includes("msie")||t.includes("trident/"))return"IE";if(t.includes("edge/"))return"Edge";if(hi(t))return"Firefox";if(t.includes("silk/"))return"Silk";if(vi(t))return"Blackberry";if(yi(t))return"Webos";if(pi(t))return"Safari";if((t.includes("chrome/")||fi(t))&&!t.includes("edge/"))return"Chrome";if(gi(t))return"Android";{const t=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,n=e.match(t);if(2===(null==n?void 0:n.length))return n[1]}return"Other"}function hi(e=xt()){return/firefox\//i.test(e)}function pi(e=xt()){const t=e.toLowerCase();return t.includes("safari/")&&!t.includes("chrome/")&&!t.includes("crios/")&&!t.includes("android")}function fi(e=xt()){return/crios\//i.test(e)}function mi(e=xt()){return/iemobile/i.test(e)}function gi(e=xt()){return/android/i.test(e)}function vi(e=xt()){return/blackberry/i.test(e)}function yi(e=xt()){return/webos/i.test(e)}function bi(e=xt()){return/iphone|ipad|ipod/i.test(e)||/macintosh/i.test(e)&&/mobile/i.test(e)}function wi(){return function(){const e=xt();return e.indexOf("MSIE ")>=0||e.indexOf("Trident/")>=0}()&&10===document.documentMode}function _i(e=xt()){return bi(e)||gi(e)||yi(e)||vi(e)||/windows phone/i.test(e)||mi(e)}
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
 */function xi(e,t=[]){let n;switch(e){case"Browser":n=di(xt());break;case"Worker":n=`${di(xt())}-${e}`;break;default:n=e}const r=t.length?t.join(","):"FirebaseCore-web";return`${n}/JsCore/${Yn}/${r}`}
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
 */class Ei{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,t){const n=t=>new Promise((n,r)=>{try{n(e(t))}catch(e){r(e)}});n.onAbort=t,this.queue.push(n);const r=this.queue.length-1;return()=>{this.queue[r]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const t=[];try{for(const n of this.queue)await n(e),n.onAbort&&t.push(n.onAbort)}catch(e){t.reverse();for(const e of t)try{e()}catch(e){}throw this.auth._errorFactory.create("login-blocked",{originalMessage:null==e?void 0:e.message})}}}
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
 */class Ti{constructor(e){var t,n,r,i;const s=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=null!==(t=s.minPasswordLength)&&void 0!==t?t:6,s.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=s.maxPasswordLength),void 0!==s.containsLowercaseCharacter&&(this.customStrengthOptions.containsLowercaseLetter=s.containsLowercaseCharacter),void 0!==s.containsUppercaseCharacter&&(this.customStrengthOptions.containsUppercaseLetter=s.containsUppercaseCharacter),void 0!==s.containsNumericCharacter&&(this.customStrengthOptions.containsNumericCharacter=s.containsNumericCharacter),void 0!==s.containsNonAlphanumericCharacter&&(this.customStrengthOptions.containsNonAlphanumericCharacter=s.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,"ENFORCEMENT_STATE_UNSPECIFIED"===this.enforcementState&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=null!==(r=null===(n=e.allowedNonAlphanumericCharacters)||void 0===n?void 0:n.join(""))&&void 0!==r?r:"",this.forceUpgradeOnSignin=null!==(i=e.forceUpgradeOnSignin)&&void 0!==i&&i,this.schemaVersion=e.schemaVersion}validatePassword(e){var t,n,r,i,s,o;const a={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,a),this.validatePasswordCharacterOptions(e,a),a.isValid&&(a.isValid=null===(t=a.meetsMinPasswordLength)||void 0===t||t),a.isValid&&(a.isValid=null===(n=a.meetsMaxPasswordLength)||void 0===n||n),a.isValid&&(a.isValid=null===(r=a.containsLowercaseLetter)||void 0===r||r),a.isValid&&(a.isValid=null===(i=a.containsUppercaseLetter)||void 0===i||i),a.isValid&&(a.isValid=null===(s=a.containsNumericCharacter)||void 0===s||s),a.isValid&&(a.isValid=null===(o=a.containsNonAlphanumericCharacter)||void 0===o||o),a}validatePasswordLengthOptions(e,t){const n=this.customStrengthOptions.minPasswordLength,r=this.customStrengthOptions.maxPasswordLength;n&&(t.meetsMinPasswordLength=e.length>=n),r&&(t.meetsMaxPasswordLength=e.length<=r)}validatePasswordCharacterOptions(e,t){let n;this.updatePasswordCharacterOptionsStatuses(t,!1,!1,!1,!1);for(let r=0;r<e.length;r++)n=e.charAt(r),this.updatePasswordCharacterOptionsStatuses(t,n>="a"&&n<="z",n>="A"&&n<="Z",n>="0"&&n<="9",this.allowedNonAlphanumericCharacters.includes(n))}updatePasswordCharacterOptionsStatuses(e,t,n,r,i){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=t)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=n)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=r)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=i))}}
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
 */class Ii{constructor(e,t,n,r){this.app=e,this.heartbeatServiceProvider=t,this.appCheckServiceProvider=n,this.config=r,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new Ci(this),this.idTokenSubscription=new Ci(this),this.beforeStateQueue=new Ei(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=gr,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this._resolvePersistenceManagerAvailable=void 0,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=r.sdkClientVersion,this._persistenceManagerAvailable=new Promise(e=>this._resolvePersistenceManagerAvailable=e)}_initializeWithPersistence(e,t){return t&&(this._popupRedirectResolver=oi(t)),this._initializationPromise=this.queue(async()=>{var n,r,i;if(!this._deleted&&(this.persistenceManager=await ui.create(this,e),null===(n=this._resolvePersistenceManagerAvailable)||void 0===n||n.call(this),!this._deleted)){if(null===(r=this._popupRedirectResolver)||void 0===r?void 0:r._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch(e){}await this.initializeCurrentUser(t),this.lastNotifiedUid=(null===(i=this.currentUser)||void 0===i?void 0:i.uid)||null,this._deleted||(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();return this.currentUser||e?this.currentUser&&e&&this.currentUser.uid===e.uid?(this._currentUser._assign(e),void await this.currentUser.getIdToken()):void await this._updateCurrentUser(e,!0):void 0}async initializeCurrentUserFromIdToken(e){try{const t=await Gr(this,{idToken:e}),n=await ii._fromGetAccountInfoResponse(this,t,e);await this.directlySetCurrentUser(n)}catch(e){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",e),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){var t;if(Xn(this.app)){const e=this.app.settings.authIdToken;return e?new Promise(t=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(e).then(t,t))}):this.directlySetCurrentUser(null)}const n=await this.assertedPersistence.getCurrentUser();let r=n,i=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const n=null===(t=this.redirectUser)||void 0===t?void 0:t._redirectEventId,s=null==r?void 0:r._redirectEventId,o=await this.tryRedirectSignIn(e);n&&n!==s||!(null==o?void 0:o.user)||(r=o.user,i=!0)}if(!r)return this.directlySetCurrentUser(null);if(!r._redirectEventId){if(i)try{await this.beforeStateQueue.runMiddleware(r)}catch(e){r=n,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(e))}return r?this.reloadAndSetCurrentUserOrClear(r):this.directlySetCurrentUser(null)}return Tr(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===r._redirectEventId?this.directlySetCurrentUser(r):this.reloadAndSetCurrentUserOrClear(r)}async tryRedirectSignIn(e){let t=null;try{t=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch(e){await this._setRedirectUser(null)}return t}async reloadAndSetCurrentUserOrClear(e){try{await ei(e)}catch(e){if("auth/network-request-failed"!==(null==e?void 0:e.code))return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=function(){if("undefined"==typeof navigator)return null;const e=navigator;return e.languages&&e.languages[0]||e.language||null}()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(Xn(this.app))return Promise.reject(xr(this));const t=e?Mt(e):null;return t&&Tr(t.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(t&&t._clone(this))}async _updateCurrentUser(e,t=!1){if(!this._deleted)return e&&Tr(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),t||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return Xn(this.app)?Promise.reject(xr(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return Xn(this.app)?Promise.reject(xr(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(oi(e))})}_getRecaptchaConfig(){return null==this.tenantId?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const t=this._getPasswordPolicyInternal();return t.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):t.validatePassword(e)}_getPasswordPolicyInternal(){return null===this.tenantId?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await async function(e,t={}){return Mr(e,"GET","/v2/passwordPolicy",$r(e,t))}
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
 */(this),t=new Ti(e);null===this.tenantId?this._projectPasswordPolicy=t:this._tenantPasswordPolicies[this.tenantId]=t}_getPersistenceType(){return this.assertedPersistence.persistence.type}_getPersistence(){return this.assertedPersistence.persistence}_updateErrorMap(e){this._errorFactory=new kt("auth","Firebase",e())}onAuthStateChanged(e,t,n){return this.registerStateListener(this.authStateSubscription,e,t,n)}beforeAuthStateChanged(e,t){return this.beforeStateQueue.pushCallback(e,t)}onIdTokenChanged(e,t,n){return this.registerStateListener(this.idTokenSubscription,e,t,n)}authStateReady(){return new Promise((e,t)=>{if(this.currentUser)e();else{const n=this.onAuthStateChanged(()=>{n(),e()},t)}})}async revokeAccessToken(e){if(this.currentUser){const t={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:await this.currentUser.getIdToken()};null!=this.tenantId&&(t.tenantId=this.tenantId),await async function(e,t){return Mr(e,"POST","/v2/accounts:revokeToken",$r(e,t))}(this,t)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:null===(e=this._currentUser)||void 0===e?void 0:e.toJSON()}}async _setRedirectUser(e,t){const n=await this.getOrInitRedirectPersistenceManager(t);return null===e?n.removeCurrentUser():n.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const t=e&&oi(e)||this._popupRedirectResolver;Tr(t,this,"argument-error"),this.redirectPersistenceManager=await ui.create(this,[oi(t._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var t,n;return this._isInitialized&&await this.queue(async()=>{}),(null===(t=this._currentUser)||void 0===t?void 0:t._redirectEventId)===e?this._currentUser:(null===(n=this.redirectUser)||void 0===n?void 0:n._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,t;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const n=null!==(t=null===(e=this.currentUser)||void 0===e?void 0:e.uid)&&void 0!==t?t:null;this.lastNotifiedUid!==n&&(this.lastNotifiedUid=n,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,t,n,r){if(this._deleted)return()=>{};const i="function"==typeof t?t:t.next.bind(t);let s=!1;const o=this._isInitialized?Promise.resolve():this._initializationPromise;if(Tr(o,this,"internal-error"),o.then(()=>{s||i(this.currentUser)}),"function"==typeof t){const i=e.addObserver(t,n,r);return()=>{s=!0,i()}}{const n=e.addObserver(t);return()=>{s=!0,n()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return Tr(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){e&&!this.frameworks.includes(e)&&(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=xi(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const t={"X-Client-Version":this.clientVersion};this.app.options.appId&&(t["X-Firebase-gmpid"]=this.app.options.appId);const n=await(null===(e=this.heartbeatServiceProvider.getImmediate({optional:!0}))||void 0===e?void 0:e.getHeartbeatsHeader());n&&(t["X-Firebase-Client"]=n);const r=await this._getAppCheckToken();return r&&(t["X-Firebase-AppCheck"]=r),t}async _getAppCheckToken(){var e;if(Xn(this.app)&&this.app.settings.appCheckToken)return this.app.settings.appCheckToken;const t=await(null===(e=this.appCheckServiceProvider.getImmediate({optional:!0}))||void 0===e?void 0:e.getToken());return(null==t?void 0:t.error)&&function(e,...t){vr.logLevel<=jt.WARN&&vr.warn(`Auth (${Yn}): ${e}`,...t)}(`Error while retrieving App Check token: ${t.error}`),null==t?void 0:t.token}}function Si(e){return Mt(e)}class Ci{constructor(e){this.auth=e,this.observer=null,this.addObserver=function(e,t){const n=new Lt(e,t);return n.subscribe.bind(n)}(e=>this.observer=e)}get next(){return Tr(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}
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
 */let ki={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function Ai(e){return ki.loadJS(e)}class Di{constructor(){this.enterprise=new Ni}ready(e){e()}execute(e,t){return Promise.resolve("token")}render(e,t){return""}}class Ni{ready(e){e()}execute(e,t){return Promise.resolve("token")}render(e,t){return""}}const Ri="NO_RECAPTCHA";class Oi{constructor(e){this.type="recaptcha-enterprise",this.auth=Si(e)}async verify(e="verify",t=!1){async function n(e){if(!t){if(null==e.tenantId&&null!=e._agentRecaptchaConfig)return e._agentRecaptchaConfig.siteKey;if(null!=e.tenantId&&void 0!==e._tenantRecaptchaConfigs[e.tenantId])return e._tenantRecaptchaConfigs[e.tenantId].siteKey}return new Promise(async(t,n)=>{(async function(e,t){return Mr(e,"GET","/v2/recaptchaConfig",$r(e,t))})(e,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(r=>{if(void 0!==r.recaptchaKey){const n=new Hr(r);return null==e.tenantId?e._agentRecaptchaConfig=n:e._tenantRecaptchaConfigs[e.tenantId]=n,t(n.siteKey)}n(new Error("recaptcha Enterprise site key undefined"))}).catch(e=>{n(e)})})}function r(t,n,r){const i=window.grecaptcha;qr(i)?i.enterprise.ready(()=>{i.enterprise.execute(t,{action:e}).then(e=>{n(e)}).catch(()=>{n(Ri)})}):r(Error("No reCAPTCHA enterprise script loaded."))}if(this.auth.settings.appVerificationDisabledForTesting){return(new Di).execute("siteKey",{action:"verify"})}return new Promise((e,i)=>{n(this.auth).then(n=>{if(!t&&qr(window.grecaptcha))r(n,e,i);else{if("undefined"==typeof window)return void i(new Error("RecaptchaVerifier is only supported in browser"));let t=ki.recaptchaEnterpriseScript;0!==t.length&&(t+=n),Ai(t).then(()=>{r(n,e,i)}).catch(e=>{i(e)})}}).catch(e=>{i(e)})})}}async function Pi(e,t,n,r=!1,i=!1){const s=new Oi(e);let o;if(i)o=Ri;else try{o=await s.verify(n)}catch(e){o=await s.verify(n,!0)}const a=Object.assign({},t);if("mfaSmsEnrollment"===n||"mfaSmsSignIn"===n){if("phoneEnrollmentInfo"in a){const e=a.phoneEnrollmentInfo.phoneNumber,t=a.phoneEnrollmentInfo.recaptchaToken;Object.assign(a,{phoneEnrollmentInfo:{phoneNumber:e,recaptchaToken:t,captchaResponse:o,clientType:"CLIENT_TYPE_WEB",recaptchaVersion:"RECAPTCHA_ENTERPRISE"}})}else if("phoneSignInInfo"in a){const e=a.phoneSignInInfo.recaptchaToken;Object.assign(a,{phoneSignInInfo:{recaptchaToken:e,captchaResponse:o,clientType:"CLIENT_TYPE_WEB",recaptchaVersion:"RECAPTCHA_ENTERPRISE"}})}return a}return r?Object.assign(a,{captchaResp:o}):Object.assign(a,{captchaResponse:o}),Object.assign(a,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(a,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),a}async function Li(e,t,n,r,i){var s;if(null===(s=e._getRecaptchaConfig())||void 0===s?void 0:s.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")){const i=await Pi(e,t,n,"getOobCode"===n);return r(e,i)}return r(e,t).catch(async i=>{if("auth/missing-recaptcha-token"===i.code){console.log(`${n} is protected by reCAPTCHA Enterprise for this project. Automatically triggering the reCAPTCHA flow and restarting the flow.`);const i=await Pi(e,t,n,"getOobCode"===n);return r(e,i)}return Promise.reject(i)})}
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
 */function $i(e,t,n){const r=Si(e);Tr(/^https?:\/\//.test(t),r,"invalid-emulator-scheme");const i=!!(null==n?void 0:n.disableWarnings),s=Mi(t),{host:o,port:a}=function(e){const t=Mi(e),n=/(\/\/)?([^?#/]+)/.exec(e.substr(t.length));if(!n)return{host:"",port:null};const r=n[2].split("@").pop()||"",i=/^(\[[^\]]+\])(:|$)/.exec(r);if(i){const e=i[1];return{host:e,port:Ui(r.substr(e.length+1))}}{const[e,t]=r.split(":");return{host:e,port:Ui(t)}}}(t),l=null===a?"":`:${a}`,c={url:`${s}//${o}${l}/`},u=Object.freeze({host:o,port:a,protocol:s.replace(":",""),options:Object.freeze({disableWarnings:i})});if(!r._canInitEmulator)return Tr(r.config.emulator&&r.emulatorConfig,r,"emulator-config-failed"),void Tr(Dt(c,r.config.emulator)&&Dt(u,r.emulatorConfig),r,"emulator-config-failed");r.config.emulator=c,r.emulatorConfig=u,r.settings.appVerificationDisabledForTesting=!0,gt(o)?(vt(`${s}//${o}${l}`),_t("Auth",!0)):i||function(){function e(){const e=document.createElement("p"),t=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",t.position="fixed",t.width="100%",t.backgroundColor="#ffffff",t.border=".1em solid #000000",t.color="#b50000",t.bottom="0px",t.left="0px",t.margin="0px",t.zIndex="10000",t.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}"undefined"!=typeof console&&"function"==typeof console.info&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials.");"undefined"!=typeof window&&"undefined"!=typeof document&&("loading"===document.readyState?window.addEventListener("DOMContentLoaded",e):e())}
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
 */()}function Mi(e){const t=e.indexOf(":");return t<0?"":e.substr(0,t+1)}function Ui(e){if(!e)return null;const t=Number(e);return isNaN(t)?null:t}class Fi{constructor(e,t){this.providerId=e,this.signInMethod=t}toJSON(){return Ir("not implemented")}_getIdTokenResponse(e){return Ir("not implemented")}_linkToIdToken(e,t){return Ir("not implemented")}_getReauthenticationResolver(e){return Ir("not implemented")}}async function Vi(e,t){return Mr(e,"POST","/v1/accounts:signUp",t)}
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
 */async function zi(e,t){return Fr(e,"POST","/v1/accounts:signInWithPassword",$r(e,t))}async function ji(e,t){return async function(e,t){return Mr(e,"POST","/v1/accounts:sendOobCode",$r(e,t))}(e,t)}
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
class Bi extends Fi{constructor(e,t,n,r=null){super("password",n),this._email=e,this._password=t,this._tenantId=r}static _fromEmailAndPassword(e,t){return new Bi(e,t,"password")}static _fromEmailAndCode(e,t,n=null){return new Bi(e,t,"emailLink",n)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const t="string"==typeof e?JSON.parse(e):e;if((null==t?void 0:t.email)&&(null==t?void 0:t.password)){if("password"===t.signInMethod)return this._fromEmailAndPassword(t.email,t.password);if("emailLink"===t.signInMethod)return this._fromEmailAndCode(t.email,t.password,t.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":return Li(e,{returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"},"signInWithPassword",zi);case"emailLink":return async function(e,t){return Fr(e,"POST","/v1/accounts:signInWithEmailLink",$r(e,t))}(e,{email:this._email,oobCode:this._password});default:br(e,"internal-error")}}async _linkToIdToken(e,t){switch(this.signInMethod){case"password":return Li(e,{idToken:t,returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"},"signUpPassword",Vi);case"emailLink":return async function(e,t){return Fr(e,"POST","/v1/accounts:signInWithEmailLink",$r(e,t))}(e,{idToken:t,email:this._email,oobCode:this._password});default:br(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}
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
 */async function qi(e,t){return Fr(e,"POST","/v1/accounts:signInWithIdp",$r(e,t))}
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
 */class Hi extends Fi{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const t=new Hi(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(t.idToken=e.idToken),e.accessToken&&(t.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(t.nonce=e.nonce),e.pendingToken&&(t.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(t.accessToken=e.oauthToken,t.secret=e.oauthTokenSecret):br("argument-error"),t}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const t="string"==typeof e?JSON.parse(e):e,{providerId:n,signInMethod:r}=t,i=hr(t,["providerId","signInMethod"]);if(!n||!r)return null;const s=new Hi(n,r);return s.idToken=i.idToken||void 0,s.accessToken=i.accessToken||void 0,s.secret=i.secret,s.nonce=i.nonce,s.pendingToken=i.pendingToken||null,s}_getIdTokenResponse(e){return qi(e,this.buildRequest())}_linkToIdToken(e,t){const n=this.buildRequest();return n.idToken=t,qi(e,n)}_getReauthenticationResolver(e){const t=this.buildRequest();return t.autoCreate=!1,qi(e,t)}buildRequest(){const e={requestUri:"http://localhost",returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const t={};this.idToken&&(t.id_token=this.idToken),this.accessToken&&(t.access_token=this.accessToken),this.secret&&(t.oauth_token_secret=this.secret),t.providerId=this.providerId,this.nonce&&!this.pendingToken&&(t.nonce=this.nonce),e.postBody=Rt(t)}return e}}
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
 */class Gi{constructor(e){var t,n,r,i,s,o;const a=Ot(Pt(e)),l=null!==(t=a.apiKey)&&void 0!==t?t:null,c=null!==(n=a.oobCode)&&void 0!==n?n:null,u=function(e){switch(e){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}(null!==(r=a.mode)&&void 0!==r?r:null);Tr(l&&c&&u,"argument-error"),this.apiKey=l,this.operation=u,this.code=c,this.continueUrl=null!==(i=a.continueUrl)&&void 0!==i?i:null,this.languageCode=null!==(s=a.lang)&&void 0!==s?s:null,this.tenantId=null!==(o=a.tenantId)&&void 0!==o?o:null}static parseLink(e){const t=function(e){const t=Ot(Pt(e)).link,n=t?Ot(Pt(t)).deep_link_id:null,r=Ot(Pt(e)).deep_link_id;return(r?Ot(Pt(r)).link:null)||r||n||t||e}(e);try{return new Gi(t)}catch(e){return null}}}
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
 */class Ki{constructor(){this.providerId=Ki.PROVIDER_ID}static credential(e,t){return Bi._fromEmailAndPassword(e,t)}static credentialWithLink(e,t){const n=Gi.parseLink(t);return Tr(n,"argument-error"),Bi._fromEmailAndCode(e,n.code,n.tenantId)}}Ki.PROVIDER_ID="password",Ki.EMAIL_PASSWORD_SIGN_IN_METHOD="password",Ki.EMAIL_LINK_SIGN_IN_METHOD="emailLink";
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
class Wi{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}
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
 */class Xi extends Wi{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}
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
 */class Qi extends Xi{constructor(){super("facebook.com")}static credential(e){return Hi._fromParams({providerId:Qi.PROVIDER_ID,signInMethod:Qi.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Qi.credentialFromTaggedObject(e)}static credentialFromError(e){return Qi.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e))return null;if(!e.oauthAccessToken)return null;try{return Qi.credential(e.oauthAccessToken)}catch(e){return null}}}Qi.FACEBOOK_SIGN_IN_METHOD="facebook.com",Qi.PROVIDER_ID="facebook.com";
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
class Ji extends Xi{constructor(){super("google.com"),this.addScope("profile")}static credential(e,t){return Hi._fromParams({providerId:Ji.PROVIDER_ID,signInMethod:Ji.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:t})}static credentialFromResult(e){return Ji.credentialFromTaggedObject(e)}static credentialFromError(e){return Ji.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:t,oauthAccessToken:n}=e;if(!t&&!n)return null;try{return Ji.credential(t,n)}catch(e){return null}}}Ji.GOOGLE_SIGN_IN_METHOD="google.com",Ji.PROVIDER_ID="google.com";
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
class Yi extends Xi{constructor(){super("github.com")}static credential(e){return Hi._fromParams({providerId:Yi.PROVIDER_ID,signInMethod:Yi.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Yi.credentialFromTaggedObject(e)}static credentialFromError(e){return Yi.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e))return null;if(!e.oauthAccessToken)return null;try{return Yi.credential(e.oauthAccessToken)}catch(e){return null}}}Yi.GITHUB_SIGN_IN_METHOD="github.com",Yi.PROVIDER_ID="github.com";
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
class Zi extends Xi{constructor(){super("twitter.com")}static credential(e,t){return Hi._fromParams({providerId:Zi.PROVIDER_ID,signInMethod:Zi.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:t})}static credentialFromResult(e){return Zi.credentialFromTaggedObject(e)}static credentialFromError(e){return Zi.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:t,oauthTokenSecret:n}=e;if(!t||!n)return null;try{return Zi.credential(t,n)}catch(e){return null}}}
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
async function es(e,t){return Fr(e,"POST","/v1/accounts:signUp",$r(e,t))}
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
 */Zi.TWITTER_SIGN_IN_METHOD="twitter.com",Zi.PROVIDER_ID="twitter.com";class ts{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,t,n,r=!1){const i=await ii._fromIdTokenResponse(e,n,r),s=ns(n);return new ts({user:i,providerId:s,_tokenResponse:n,operationType:t})}static async _forOperation(e,t,n){await e._updateTokensIfNecessary(n,!0);const r=ns(n);return new ts({user:e,providerId:r,_tokenResponse:n,operationType:t})}}function ns(e){return e.providerId?e.providerId:"phoneNumber"in e?"phone":null}
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
 */class rs extends Ct{constructor(e,t,n,r){var i;super(t.code,t.message),this.operationType=n,this.user=r,Object.setPrototypeOf(this,rs.prototype),this.customData={appName:e.name,tenantId:null!==(i=e.tenantId)&&void 0!==i?i:void 0,_serverResponse:t.customData._serverResponse,operationType:n}}static _fromErrorAndOperation(e,t,n,r){return new rs(e,t,n,r)}}function is(e,t,n,r){return("reauthenticate"===t?n._getReauthenticationResolver(e):n._getIdTokenResponse(e)).catch(n=>{if("auth/multi-factor-auth-required"===n.code)throw rs._fromErrorAndOperation(e,n,t,r);throw n})}
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
async function ss(e,t,n=!1){if(Xn(e.app))return Promise.reject(xr(e));const r="signIn",i=await is(e,r,t),s=await ts._fromIdTokenResponse(e,r,i);return n||await e._updateCurrentUser(s.user),s}
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
async function os(e){const t=Si(e);t._getPasswordPolicyInternal()&&await t._updatePasswordPolicy()}function as(e,t,n){return Xn(e.app)?Promise.reject(xr(e)):async function(e,t){return ss(Si(e),t)}(Mt(e),Ki.credential(t,n)).catch(async t=>{throw"auth/password-does-not-meet-requirements"===t.code&&os(e),t})}
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
async function ls(e,{displayName:t,photoURL:n}){if(void 0===t&&void 0===n)return;const r=Mt(e),i={idToken:await r.getIdToken(),displayName:t,photoUrl:n,returnSecureToken:!0},s=await Jr(r,async function(e,t){return Mr(e,"POST","/v1/accounts:update",t)}(r.auth,i));r.displayName=s.displayName||null,r.photoURL=s.photoUrl||null;const o=r.providerData.find(({providerId:e})=>"password"===e);o&&(o.displayName=r.displayName,o.photoURL=r.photoURL),await r._updateTokensIfNecessary(s)}const cs="__sak";
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
 */class us{constructor(e,t){this.storageRetriever=e,this.type=t}_isAvailable(){try{return this.storage?(this.storage.setItem(cs,"1"),this.storage.removeItem(cs),Promise.resolve(!0)):Promise.resolve(!1)}catch(e){return Promise.resolve(!1)}}_set(e,t){return this.storage.setItem(e,JSON.stringify(t)),Promise.resolve()}_get(e){const t=this.storage.getItem(e);return Promise.resolve(t?JSON.parse(t):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}
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
 */class ds extends us{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,t)=>this.onStorageEvent(e,t),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=_i(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const t of Object.keys(this.listeners)){const n=this.storage.getItem(t),r=this.localCache[t];n!==r&&e(t,r,n)}}onStorageEvent(e,t=!1){if(!e.key)return void this.forAllChangedKeys((e,t,n)=>{this.notifyListeners(e,n)});const n=e.key;t?this.detachListener():this.stopPolling();const r=()=>{const e=this.storage.getItem(n);(t||this.localCache[n]!==e)&&this.notifyListeners(n,e)},i=this.storage.getItem(n);wi()&&i!==e.newValue&&e.newValue!==e.oldValue?setTimeout(r,10):r()}notifyListeners(e,t){this.localCache[e]=t;const n=this.listeners[e];if(n)for(const e of Array.from(n))e(t?JSON.parse(t):t)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,t,n)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:t,newValue:n}),!0)})},1e3)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,t){0===Object.keys(this.listeners).length&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),0===this.listeners[e].size&&delete this.listeners[e]),0===Object.keys(this.listeners).length&&(this.detachListener(),this.stopPolling())}async _set(e,t){await super._set(e,t),this.localCache[e]=JSON.stringify(t)}async _get(e){const t=await super._get(e);return this.localCache[e]=JSON.stringify(t),t}async _remove(e){await super._remove(e),delete this.localCache[e]}}ds.type="LOCAL";const hs=ds;
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
 */class ps extends us{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,t){}_removeListener(e,t){}}ps.type="SESSION";const fs=ps;
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
class ms{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const t=this.receivers.find(t=>t.isListeningto(e));if(t)return t;const n=new ms(e);return this.receivers.push(n),n}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const t=e,{eventId:n,eventType:r,data:i}=t.data,s=this.handlersMap[r];if(!(null==s?void 0:s.size))return;t.ports[0].postMessage({status:"ack",eventId:n,eventType:r});const o=Array.from(s).map(async e=>e(t.origin,i)),a=await function(e){return Promise.all(e.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(e){return{fulfilled:!1,reason:e}}}))}(o);t.ports[0].postMessage({status:"done",eventId:n,eventType:r,response:a})}_subscribe(e,t){0===Object.keys(this.handlersMap).length&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(t)}_unsubscribe(e,t){this.handlersMap[e]&&t&&this.handlersMap[e].delete(t),t&&0!==this.handlersMap[e].size||delete this.handlersMap[e],0===Object.keys(this.handlersMap).length&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}
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
function gs(e="",t=10){let n="";for(let e=0;e<t;e++)n+=Math.floor(10*Math.random());return e+n}
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
 */ms.receivers=[];class vs{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,t,n=50){const r="undefined"!=typeof MessageChannel?new MessageChannel:null;if(!r)throw new Error("connection_unavailable");let i,s;return new Promise((o,a)=>{const l=gs("",20);r.port1.start();const c=setTimeout(()=>{a(new Error("unsupported_event"))},n);s={messageChannel:r,onMessage(e){const t=e;if(t.data.eventId===l)switch(t.data.status){case"ack":clearTimeout(c),i=setTimeout(()=>{a(new Error("timeout"))},3e3);break;case"done":clearTimeout(i),o(t.data.response);break;default:clearTimeout(c),clearTimeout(i),a(new Error("invalid_response"))}}},this.handlers.add(s),r.port1.addEventListener("message",s.onMessage),this.target.postMessage({eventType:e,eventId:l,data:t},[r.port2])}).finally(()=>{s&&this.removeMessageHandler(s)})}}
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
 */function ys(){return window}
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
function bs(){return void 0!==ys().WorkerGlobalScope&&"function"==typeof ys().importScripts}
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
const ws="firebaseLocalStorageDb",_s="firebaseLocalStorage",xs="fbase_key";class Es{constructor(e){this.request=e}toPromise(){return new Promise((e,t)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{t(this.request.error)})})}}function Ts(e,t){return e.transaction([_s],t?"readwrite":"readonly").objectStore(_s)}function Is(){const e=indexedDB.open(ws,1);return new Promise((t,n)=>{e.addEventListener("error",()=>{n(e.error)}),e.addEventListener("upgradeneeded",()=>{const t=e.result;try{t.createObjectStore(_s,{keyPath:xs})}catch(e){n(e)}}),e.addEventListener("success",async()=>{const n=e.result;n.objectStoreNames.contains(_s)?t(n):(n.close(),await function(){const e=indexedDB.deleteDatabase(ws);return new Es(e).toPromise()}(),t(await Is()))})})}async function Ss(e,t,n){const r=Ts(e,!0).put({[xs]:t,value:n});return new Es(r).toPromise()}function Cs(e,t){const n=Ts(e,!0).delete(t);return new Es(n).toPromise()}class ks{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db||(this.db=await Is()),this.db}async _withRetries(e){let t=0;for(;;)try{const t=await this._openDb();return await e(t)}catch(e){if(t++>3)throw e;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return bs()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=ms._getInstance(bs()?self:null),this.receiver._subscribe("keyChanged",async(e,t)=>({keyProcessed:(await this._poll()).includes(t.key)})),this.receiver._subscribe("ping",async(e,t)=>["keyChanged"])}async initializeSender(){var e,t;if(this.activeServiceWorker=await async function(){if(!(null===navigator||void 0===navigator?void 0:navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch(e){return null}}(),!this.activeServiceWorker)return;this.sender=new vs(this.activeServiceWorker);const n=await this.sender._send("ping",{},800);n&&(null===(e=n[0])||void 0===e?void 0:e.fulfilled)&&(null===(t=n[0])||void 0===t?void 0:t.value.includes("keyChanged"))&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){var t;if(this.sender&&this.activeServiceWorker&&((null===(t=null===navigator||void 0===navigator?void 0:navigator.serviceWorker)||void 0===t?void 0:t.controller)||null)===this.activeServiceWorker)try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch(t){}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await Is();return await Ss(e,cs,"1"),await Cs(e,cs),!0}catch(e){}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,t){return this._withPendingWrite(async()=>(await this._withRetries(n=>Ss(n,e,t)),this.localCache[e]=t,this.notifyServiceWorker(e)))}async _get(e){const t=await this._withRetries(t=>async function(e,t){const n=Ts(e,!1).get(t),r=await new Es(n).toPromise();return void 0===r?null:r.value}(t,e));return this.localCache[e]=t,t}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(t=>Cs(t,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(e=>{const t=Ts(e,!1).getAll();return new Es(t).toPromise()});if(!e)return[];if(0!==this.pendingWrites)return[];const t=[],n=new Set;if(0!==e.length)for(const{fbase_key:r,value:i}of e)n.add(r),JSON.stringify(this.localCache[r])!==JSON.stringify(i)&&(this.notifyListeners(r,i),t.push(r));for(const e of Object.keys(this.localCache))this.localCache[e]&&!n.has(e)&&(this.notifyListeners(e,null),t.push(e));return t}notifyListeners(e,t){this.localCache[e]=t;const n=this.listeners[e];if(n)for(const e of Array.from(n))e(t)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),800)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,t){0===Object.keys(this.listeners).length&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),0===this.listeners[e].size&&delete this.listeners[e]),0===Object.keys(this.listeners).length&&this.stopPolling()}}ks.type="LOCAL";const As=ks;
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
function Ds(e,t){return t?oi(t):(Tr(e._popupRedirectResolver,e,"argument-error"),e._popupRedirectResolver)}
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
 */new Dr(3e4,6e4);class Ns extends Fi{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return qi(e,this._buildIdpRequest())}_linkToIdToken(e,t){return qi(e,this._buildIdpRequest(t))}_getReauthenticationResolver(e){return qi(e,this._buildIdpRequest())}_buildIdpRequest(e){const t={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(t.idToken=e),t}}function Rs(e){return ss(e.auth,new Ns(e),e.bypassAuthState)}function Os(e){const{auth:t,user:n}=e;return Tr(n,t,"internal-error"),
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
async function(e,t,n=!1){const{auth:r}=e;if(Xn(r.app))return Promise.reject(xr(r));const i="reauthenticate";try{const s=await Jr(e,is(r,i,t,e),n);Tr(s.idToken,r,"internal-error");const o=Xr(s.idToken);Tr(o,r,"internal-error");const{sub:a}=o;return Tr(e.uid===a,r,"user-mismatch"),ts._forOperation(e,i,s)}catch(e){throw"auth/user-not-found"===(null==e?void 0:e.code)&&br(r,"user-mismatch"),e}}(n,new Ns(e),e.bypassAuthState)}async function Ps(e){const{auth:t,user:n}=e;return Tr(n,t,"internal-error"),async function(e,t,n=!1){const r=await Jr(e,t._linkToIdToken(e.auth,await e.getIdToken()),n);return ts._forOperation(e,"link",r)}(n,new Ns(e),e.bypassAuthState)}
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
 */class Ls{constructor(e,t,n,r,i=!1){this.auth=e,this.resolver=n,this.user=r,this.bypassAuthState=i,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(t)?t:[t]}execute(){return new Promise(async(e,t)=>{this.pendingPromise={resolve:e,reject:t};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(e){this.reject(e)}})}async onAuthEvent(e){const{urlResponse:t,sessionId:n,postBody:r,tenantId:i,error:s,type:o}=e;if(s)return void this.reject(s);const a={auth:this.auth,requestUri:t,sessionId:n,tenantId:i||void 0,postBody:r||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(o)(a))}catch(e){this.reject(e)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return Rs;case"linkViaPopup":case"linkViaRedirect":return Ps;case"reauthViaPopup":case"reauthViaRedirect":return Os;default:br(this.auth,"internal-error")}}resolve(e){Sr(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){Sr(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}
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
 */const $s=new Dr(2e3,1e4);async function Ms(e,t,n){if(Xn(e.app))return Promise.reject(wr(e,"operation-not-supported-in-this-environment"));const r=Si(e);!function(e,t,n){if(!(t instanceof n))throw n.name!==t.constructor.name&&br(e,"argument-error"),_r(e,"argument-error",`Type of ${t.constructor.name} does not match expected instance.Did you pass a reference from a different Auth SDK?`)}(e,t,Wi);const i=Ds(r,n);return new Us(r,"signInViaPopup",t,i).executeNotNull()}class Us extends Ls{constructor(e,t,n,r,i){super(e,t,r,i),this.provider=n,this.authWindow=null,this.pollId=null,Us.currentPopupAction&&Us.currentPopupAction.cancel(),Us.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return Tr(e,this.auth,"internal-error"),e}async onExecution(){Sr(1===this.filter.length,"Popup operations only handle one event");const e=gs();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(e=>{this.reject(e)}),this.resolver._isIframeWebStorageSupported(this.auth,e=>{e||this.reject(wr(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return(null===(e=this.authWindow)||void 0===e?void 0:e.associatedEvent)||null}cancel(){this.reject(wr(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,Us.currentPopupAction=null}pollUserCancellation(){const e=()=>{var t,n;(null===(n=null===(t=this.authWindow)||void 0===t?void 0:t.window)||void 0===n?void 0:n.closed)?this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(wr(this.auth,"popup-closed-by-user"))},8e3):this.pollId=window.setTimeout(e,$s.get())};e()}}Us.currentPopupAction=null;
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
const Fs="pendingRedirect",Vs=new Map;class zs extends Ls{constructor(e,t,n=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],t,void 0,n),this.eventId=null}async execute(){let e=Vs.get(this.auth._key());if(!e){try{const t=await async function(e,t){const n=function(e){return ci(Fs,e.config.apiKey,e.name)}(t),r=function(e){return oi(e._redirectPersistence)}(e);if(!await r._isAvailable())return!1;const i="true"===await r._get(n);return await r._remove(n),i}(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(t)}catch(t){e=()=>Promise.reject(t)}Vs.set(this.auth._key(),e)}return this.bypassAuthState||Vs.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if("signInViaRedirect"===e.type)return super.onAuthEvent(e);if("unknown"!==e.type){if(e.eventId){const t=await this.auth._redirectUserForId(e.eventId);if(t)return this.user=t,super.onAuthEvent(e);this.resolve(null)}}else this.resolve(null)}async onExecution(){}cleanUp(){}}function js(e,t){Vs.set(e._key(),t)}async function Bs(e,t,n=!1){if(Xn(e.app))return Promise.reject(xr(e));const r=Si(e),i=Ds(r,t),s=new zs(r,i,n),o=await s.execute();return o&&!n&&(delete o.user._redirectEventId,await r._persistUserIfCurrent(o.user),await r._setRedirectUser(null,t)),o}
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
 */class qs{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let t=!1;return this.consumers.forEach(n=>{this.isEventForConsumer(e,n)&&(t=!0,this.sendToConsumer(e,n),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!function(e){switch(e.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return Gs(e);default:return!1}}
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
 */(e)||(this.hasHandledPotentialRedirect=!0,t||(this.queuedRedirectEvent=e,t=!0)),t}sendToConsumer(e,t){var n;if(e.error&&!Gs(e)){const r=(null===(n=e.error.code)||void 0===n?void 0:n.split("auth/")[1])||"internal-error";t.onError(wr(this.auth,r))}else t.onAuthEvent(e)}isEventForConsumer(e,t){const n=null===t.eventId||!!e.eventId&&e.eventId===t.eventId;return t.filter.includes(e.type)&&n}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=6e5&&this.cachedEventUids.clear(),this.cachedEventUids.has(Hs(e))}saveEventToCache(e){this.cachedEventUids.add(Hs(e)),this.lastProcessedEventTime=Date.now()}}function Hs(e){return[e.type,e.eventId,e.sessionId,e.tenantId].filter(e=>e).join("-")}function Gs({type:e,error:t}){return"unknown"===e&&"auth/no-auth-event"===(null==t?void 0:t.code)}
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
const Ks=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,Ws=/^https?/;async function Xs(e){if(e.config.emulator)return;const{authorizedDomains:t}=await async function(e,t={}){return Mr(e,"GET","/v1/projects",t)}(e);for(const e of t)try{if(Qs(e))return}catch(e){}br(e,"unauthorized-domain")}function Qs(e){const t=Cr(),{protocol:n,hostname:r}=new URL(t);if(e.startsWith("chrome-extension://")){const i=new URL(e);return""===i.hostname&&""===r?"chrome-extension:"===n&&e.replace("chrome-extension://","")===t.replace("chrome-extension://",""):"chrome-extension:"===n&&i.hostname===r}if(!Ws.test(n))return!1;if(Ks.test(e))return r===e;const i=e.replace(/\./g,"\\.");return new RegExp("^(.+\\."+i+"|"+i+")$","i").test(r)}
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
 */const Js=new Dr(3e4,6e4);function Ys(){const e=ys().___jsl;if(null==e?void 0:e.H)for(const t of Object.keys(e.H))if(e.H[t].r=e.H[t].r||[],e.H[t].L=e.H[t].L||[],e.H[t].r=[...e.H[t].L],e.CP)for(let t=0;t<e.CP.length;t++)e.CP[t]=null}function Zs(e){return new Promise((t,n)=>{var r,i,s;function o(){Ys(),gapi.load("gapi.iframes",{callback:()=>{t(gapi.iframes.getContext())},ontimeout:()=>{Ys(),n(wr(e,"network-request-failed"))},timeout:Js.get()})}if(null===(i=null===(r=ys().gapi)||void 0===r?void 0:r.iframes)||void 0===i?void 0:i.Iframe)t(gapi.iframes.getContext());else{if(!(null===(s=ys().gapi)||void 0===s?void 0:s.load)){const t=`__${"iframefcb"}${Math.floor(1e6*Math.random())}`;return ys()[t]=()=>{gapi.load?o():n(wr(e,"network-request-failed"))},Ai(`${ki.gapiScript}?onload=${t}`).catch(e=>n(e))}o()}}).catch(e=>{throw eo=null,e})}let eo=null;
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
const to=new Dr(5e3,15e3),no={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},ro=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function io(e){const t=e.config;Tr(t.authDomain,e,"auth-domain-config-required");const n=t.emulator?Nr(t,"emulator/auth/iframe"):`https://${e.config.authDomain}/__/auth/iframe`,r={apiKey:t.apiKey,appName:e.name,v:Yn},i=ro.get(e.config.apiHost);i&&(r.eid=i);const s=e._getFrameworks();return s.length&&(r.fw=s.join(",")),`${n}?${Rt(r).slice(1)}`}async function so(e){const t=await function(e){return eo=eo||Zs(e),eo}(e),n=ys().gapi;return Tr(n,e,"internal-error"),t.open({where:document.body,url:io(e),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:no,dontclear:!0},t=>new Promise(async(n,r)=>{await t.restyle({setHideOnLeave:!1});const i=wr(e,"network-request-failed"),s=ys().setTimeout(()=>{r(i)},to.get());function o(){ys().clearTimeout(s),n(t)}t.ping(o).then(o,()=>{r(i)})}))}
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
 */const oo={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"};class ao{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch(e){}}}function lo(e,t,n,r=500,i=600){const s=Math.max((window.screen.availHeight-i)/2,0).toString(),o=Math.max((window.screen.availWidth-r)/2,0).toString();let a="";const l=Object.assign(Object.assign({},oo),{width:r.toString(),height:i.toString(),top:s,left:o}),c=xt().toLowerCase();n&&(a=fi(c)?"_blank":n),hi(c)&&(t=t||"http://localhost",l.scrollbars="yes");const u=Object.entries(l).reduce((e,[t,n])=>`${e}${t}=${n},`,"");if(function(e=xt()){var t;return bi(e)&&!!(null===(t=window.navigator)||void 0===t?void 0:t.standalone)}(c)&&"_self"!==a)return function(e,t){const n=document.createElement("a");n.href=e,n.target=t;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(r)}
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
 */(t||"",a),new ao(null);const d=window.open(t||"",a,u);Tr(d,e,"popup-blocked");try{d.focus()}catch(e){}return new ao(d)}const co="__/auth/handler",uo="emulator/auth/handler",ho=encodeURIComponent("fac");async function po(e,t,n,r,i,s){Tr(e.config.authDomain,e,"auth-domain-config-required"),Tr(e.config.apiKey,e,"invalid-api-key");const o={apiKey:e.config.apiKey,appName:e.name,authType:n,redirectUrl:r,v:Yn,eventId:i};if(t instanceof Wi){t.setDefaultLanguage(e.languageCode),o.providerId=t.providerId||"",function(e){for(const t in e)if(Object.prototype.hasOwnProperty.call(e,t))return!1;return!0}(t.getCustomParameters())||(o.customParameters=JSON.stringify(t.getCustomParameters()));for(const[e,t]of Object.entries({}))o[e]=t}if(t instanceof Xi){const e=t.getScopes().filter(e=>""!==e);e.length>0&&(o.scopes=e.join(","))}e.tenantId&&(o.tid=e.tenantId);const a=o;for(const e of Object.keys(a))void 0===a[e]&&delete a[e];const l=await e._getAppCheckToken(),c=l?`#${ho}=${encodeURIComponent(l)}`:"";return`${function({config:e}){if(!e.emulator)return`https://${e.authDomain}/${co}`;return Nr(e,uo)}
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
 */(e)}?${Rt(a).slice(1)}${c}`}const fo="webStorageSupport";const mo=class{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=fs,this._completeRedirectFn=Bs,this._overrideRedirectResult=js}async _openPopup(e,t,n,r){var i;Sr(null===(i=this.eventManagers[e._key()])||void 0===i?void 0:i.manager,"_initialize() not called before _openPopup()");return lo(e,await po(e,t,n,Cr(),r),gs())}async _openRedirect(e,t,n,r){await this._originValidation(e);return function(e){ys().location.href=e}(await po(e,t,n,Cr(),r)),new Promise(()=>{})}_initialize(e){const t=e._key();if(this.eventManagers[t]){const{manager:e,promise:n}=this.eventManagers[t];return e?Promise.resolve(e):(Sr(n,"If manager is not set, promise should be"),n)}const n=this.initAndGetManager(e);return this.eventManagers[t]={promise:n},n.catch(()=>{delete this.eventManagers[t]}),n}async initAndGetManager(e){const t=await so(e),n=new qs(e);return t.register("authEvent",t=>{Tr(null==t?void 0:t.authEvent,e,"invalid-auth-event");return{status:n.onEvent(t.authEvent)?"ACK":"ERROR"}},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:n},this.iframes[e._key()]=t,n}_isIframeWebStorageSupported(e,t){this.iframes[e._key()].send(fo,{type:fo},n=>{var r;const i=null===(r=null==n?void 0:n[0])||void 0===r?void 0:r[fo];void 0!==i&&t(!!i),br(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const t=e._key();return this.originValidationPromises[t]||(this.originValidationPromises[t]=Xs(e)),this.originValidationPromises[t]}get _shouldInitProactively(){return _i()||pi()||bi()}};var go="@firebase/auth",vo="1.10.8";
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
class yo{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),(null===(e=this.auth.currentUser)||void 0===e?void 0:e.uid)||null}async getToken(e){if(this.assertAuthConfigured(),await this.auth._initializationPromise,!this.auth.currentUser)return null;return{accessToken:await this.auth.currentUser.getIdToken(e)}}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const t=this.auth.onIdTokenChanged(t=>{e((null==t?void 0:t.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,t),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const t=this.internalListeners.get(e);t&&(this.internalListeners.delete(e),t(),this.updateProactiveRefresh())}assertAuthConfigured(){Tr(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}
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
const bo=ft("authIdTokenMaxAge")||300;let wo=null;function _o(e=er()){const t=Wn(e,"auth");if(t.isInitialized())return t.getImmediate();const n=function(e,t){const n=Wn(e,"auth");if(n.isInitialized()){const e=n.getImmediate();if(Dt(n.getOptions(),null!=t?t:{}))return e;br(e,"already-initialized")}return n.initialize({options:t})}(e,{popupRedirectResolver:mo,persistence:[As,hs,fs]}),r=ft("authTokenSyncURL");if(r&&"boolean"==typeof isSecureContext&&isSecureContext){const e=new URL(r,location.origin);if(location.origin===e.origin){const t=(i=e.toString(),async e=>{const t=e&&await e.getIdTokenResult(),n=t&&((new Date).getTime()-Date.parse(t.issuedAtTime))/1e3;if(n&&n>bo)return;const r=null==t?void 0:t.token;wo!==r&&(wo=r,await fetch(i,{method:r?"POST":"DELETE",headers:r?{Authorization:`Bearer ${r}`}:{}}))});!function(e,t,n){Mt(e).beforeAuthStateChanged(t,n)}(n,t,()=>t(n.currentUser)),function(e,t,n,r){Mt(e).onIdTokenChanged(t,n,r)}(n,e=>t(e))}}var i;const s=dt("auth");return s&&$i(n,`http://${s}`),n}var xo;!function(e){ki=e}({loadJS:e=>new Promise((t,n)=>{const r=document.createElement("script");var i,s;r.setAttribute("src",e),r.onload=t,r.onerror=e=>{const t=wr("internal-error");t.customData=e,n(t)},r.type="text/javascript",r.charset="UTF-8",(null!==(s=null===(i=document.getElementsByTagName("head"))||void 0===i?void 0:i[0])&&void 0!==s?s:document).appendChild(r)}),gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="}),xo="Browser",Kn(new Ut("auth",(e,{options:t})=>{const n=e.getProvider("app").getImmediate(),r=e.getProvider("heartbeat"),i=e.getProvider("app-check-internal"),{apiKey:s,authDomain:o}=n.options;Tr(s&&!s.includes(":"),"invalid-api-key",{appName:n.name});const a={apiKey:s,authDomain:o,clientPlatform:xo,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:xi(xo)},l=new Ii(n,r,i,a);return function(e,t){const n=(null==t?void 0:t.persistence)||[],r=(Array.isArray(n)?n:[n]).map(oi);(null==t?void 0:t.errorMap)&&e._updateErrorMap(t.errorMap),e._initializeWithPersistence(r,null==t?void 0:t.popupRedirectResolver)}(l,t),l},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,t,n)=>{e.getProvider("auth-internal").initialize()})),Kn(new Ut("auth-internal",e=>(e=>new yo(e))(Si(e.getProvider("auth").getImmediate())),"PRIVATE").setInstantiationMode("EXPLICIT")),tr(go,vo,function(e){switch(e){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}(xo)),tr(go,vo,"esm2017");var Eo,To,Io="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{};
/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/(function(){var e;
/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function t(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.B=Array(this.blockSize),this.o=this.h=0,this.s()}function n(e,t,n){n||(n=0);var r=Array(16);if("string"==typeof t)for(var i=0;16>i;++i)r[i]=t.charCodeAt(n++)|t.charCodeAt(n++)<<8|t.charCodeAt(n++)<<16|t.charCodeAt(n++)<<24;else for(i=0;16>i;++i)r[i]=t[n++]|t[n++]<<8|t[n++]<<16|t[n++]<<24;t=e.g[0],n=e.g[1],i=e.g[2];var s=e.g[3],o=t+(s^n&(i^s))+r[0]+3614090360&4294967295;o=(n=(i=(s=(t=(n=(i=(s=(t=(n=(i=(s=(t=(n=(i=(s=(t=(n=(i=(s=(t=(n=(i=(s=(t=(n=(i=(s=(t=(n=(i=(s=(t=(n=(i=(s=(t=(n=(i=(s=(t=(n=(i=(s=(t=(n=(i=(s=(t=(n=(i=(s=(t=(n=(i=(s=(t=(n=(i=(s=(t=n+(o<<7&4294967295|o>>>25))+((o=s+(i^t&(n^i))+r[1]+3905402710&4294967295)<<12&4294967295|o>>>20))+((o=i+(n^s&(t^n))+r[2]+606105819&4294967295)<<17&4294967295|o>>>15))+((o=n+(t^i&(s^t))+r[3]+3250441966&4294967295)<<22&4294967295|o>>>10))+((o=t+(s^n&(i^s))+r[4]+4118548399&4294967295)<<7&4294967295|o>>>25))+((o=s+(i^t&(n^i))+r[5]+1200080426&4294967295)<<12&4294967295|o>>>20))+((o=i+(n^s&(t^n))+r[6]+2821735955&4294967295)<<17&4294967295|o>>>15))+((o=n+(t^i&(s^t))+r[7]+4249261313&4294967295)<<22&4294967295|o>>>10))+((o=t+(s^n&(i^s))+r[8]+1770035416&4294967295)<<7&4294967295|o>>>25))+((o=s+(i^t&(n^i))+r[9]+2336552879&4294967295)<<12&4294967295|o>>>20))+((o=i+(n^s&(t^n))+r[10]+4294925233&4294967295)<<17&4294967295|o>>>15))+((o=n+(t^i&(s^t))+r[11]+2304563134&4294967295)<<22&4294967295|o>>>10))+((o=t+(s^n&(i^s))+r[12]+1804603682&4294967295)<<7&4294967295|o>>>25))+((o=s+(i^t&(n^i))+r[13]+4254626195&4294967295)<<12&4294967295|o>>>20))+((o=i+(n^s&(t^n))+r[14]+2792965006&4294967295)<<17&4294967295|o>>>15))+((o=n+(t^i&(s^t))+r[15]+1236535329&4294967295)<<22&4294967295|o>>>10))+((o=t+(i^s&(n^i))+r[1]+4129170786&4294967295)<<5&4294967295|o>>>27))+((o=s+(n^i&(t^n))+r[6]+3225465664&4294967295)<<9&4294967295|o>>>23))+((o=i+(t^n&(s^t))+r[11]+643717713&4294967295)<<14&4294967295|o>>>18))+((o=n+(s^t&(i^s))+r[0]+3921069994&4294967295)<<20&4294967295|o>>>12))+((o=t+(i^s&(n^i))+r[5]+3593408605&4294967295)<<5&4294967295|o>>>27))+((o=s+(n^i&(t^n))+r[10]+38016083&4294967295)<<9&4294967295|o>>>23))+((o=i+(t^n&(s^t))+r[15]+3634488961&4294967295)<<14&4294967295|o>>>18))+((o=n+(s^t&(i^s))+r[4]+3889429448&4294967295)<<20&4294967295|o>>>12))+((o=t+(i^s&(n^i))+r[9]+568446438&4294967295)<<5&4294967295|o>>>27))+((o=s+(n^i&(t^n))+r[14]+3275163606&4294967295)<<9&4294967295|o>>>23))+((o=i+(t^n&(s^t))+r[3]+4107603335&4294967295)<<14&4294967295|o>>>18))+((o=n+(s^t&(i^s))+r[8]+1163531501&4294967295)<<20&4294967295|o>>>12))+((o=t+(i^s&(n^i))+r[13]+2850285829&4294967295)<<5&4294967295|o>>>27))+((o=s+(n^i&(t^n))+r[2]+4243563512&4294967295)<<9&4294967295|o>>>23))+((o=i+(t^n&(s^t))+r[7]+1735328473&4294967295)<<14&4294967295|o>>>18))+((o=n+(s^t&(i^s))+r[12]+2368359562&4294967295)<<20&4294967295|o>>>12))+((o=t+(n^i^s)+r[5]+4294588738&4294967295)<<4&4294967295|o>>>28))+((o=s+(t^n^i)+r[8]+2272392833&4294967295)<<11&4294967295|o>>>21))+((o=i+(s^t^n)+r[11]+1839030562&4294967295)<<16&4294967295|o>>>16))+((o=n+(i^s^t)+r[14]+4259657740&4294967295)<<23&4294967295|o>>>9))+((o=t+(n^i^s)+r[1]+2763975236&4294967295)<<4&4294967295|o>>>28))+((o=s+(t^n^i)+r[4]+1272893353&4294967295)<<11&4294967295|o>>>21))+((o=i+(s^t^n)+r[7]+4139469664&4294967295)<<16&4294967295|o>>>16))+((o=n+(i^s^t)+r[10]+3200236656&4294967295)<<23&4294967295|o>>>9))+((o=t+(n^i^s)+r[13]+681279174&4294967295)<<4&4294967295|o>>>28))+((o=s+(t^n^i)+r[0]+3936430074&4294967295)<<11&4294967295|o>>>21))+((o=i+(s^t^n)+r[3]+3572445317&4294967295)<<16&4294967295|o>>>16))+((o=n+(i^s^t)+r[6]+76029189&4294967295)<<23&4294967295|o>>>9))+((o=t+(n^i^s)+r[9]+3654602809&4294967295)<<4&4294967295|o>>>28))+((o=s+(t^n^i)+r[12]+3873151461&4294967295)<<11&4294967295|o>>>21))+((o=i+(s^t^n)+r[15]+530742520&4294967295)<<16&4294967295|o>>>16))+((o=n+(i^s^t)+r[2]+3299628645&4294967295)<<23&4294967295|o>>>9))+((o=t+(i^(n|~s))+r[0]+4096336452&4294967295)<<6&4294967295|o>>>26))+((o=s+(n^(t|~i))+r[7]+1126891415&4294967295)<<10&4294967295|o>>>22))+((o=i+(t^(s|~n))+r[14]+2878612391&4294967295)<<15&4294967295|o>>>17))+((o=n+(s^(i|~t))+r[5]+4237533241&4294967295)<<21&4294967295|o>>>11))+((o=t+(i^(n|~s))+r[12]+1700485571&4294967295)<<6&4294967295|o>>>26))+((o=s+(n^(t|~i))+r[3]+2399980690&4294967295)<<10&4294967295|o>>>22))+((o=i+(t^(s|~n))+r[10]+4293915773&4294967295)<<15&4294967295|o>>>17))+((o=n+(s^(i|~t))+r[1]+2240044497&4294967295)<<21&4294967295|o>>>11))+((o=t+(i^(n|~s))+r[8]+1873313359&4294967295)<<6&4294967295|o>>>26))+((o=s+(n^(t|~i))+r[15]+4264355552&4294967295)<<10&4294967295|o>>>22))+((o=i+(t^(s|~n))+r[6]+2734768916&4294967295)<<15&4294967295|o>>>17))+((o=n+(s^(i|~t))+r[13]+1309151649&4294967295)<<21&4294967295|o>>>11))+((s=(t=n+((o=t+(i^(n|~s))+r[4]+4149444226&4294967295)<<6&4294967295|o>>>26))+((o=s+(n^(t|~i))+r[11]+3174756917&4294967295)<<10&4294967295|o>>>22))^((i=s+((o=i+(t^(s|~n))+r[2]+718787259&4294967295)<<15&4294967295|o>>>17))|~t))+r[9]+3951481745&4294967295,e.g[0]=e.g[0]+t&4294967295,e.g[1]=e.g[1]+(i+(o<<21&4294967295|o>>>11))&4294967295,e.g[2]=e.g[2]+i&4294967295,e.g[3]=e.g[3]+s&4294967295}function r(e,t){this.h=t;for(var n=[],r=!0,i=e.length-1;0<=i;i--){var s=0|e[i];r&&s==t||(n[i]=s,r=!1)}this.g=n}!function(e,t){function n(){}n.prototype=t.prototype,e.D=t.prototype,e.prototype=new n,e.prototype.constructor=e,e.C=function(e,n,r){for(var i=Array(arguments.length-2),s=2;s<arguments.length;s++)i[s-2]=arguments[s];return t.prototype[n].apply(e,i)}}(t,function(){this.blockSize=-1}),t.prototype.s=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0},t.prototype.u=function(e,t){void 0===t&&(t=e.length);for(var r=t-this.blockSize,i=this.B,s=this.h,o=0;o<t;){if(0==s)for(;o<=r;)n(this,e,o),o+=this.blockSize;if("string"==typeof e){for(;o<t;)if(i[s++]=e.charCodeAt(o++),s==this.blockSize){n(this,i),s=0;break}}else for(;o<t;)if(i[s++]=e[o++],s==this.blockSize){n(this,i),s=0;break}}this.h=s,this.o+=t},t.prototype.v=function(){var e=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);e[0]=128;for(var t=1;t<e.length-8;++t)e[t]=0;var n=8*this.o;for(t=e.length-8;t<e.length;++t)e[t]=255&n,n/=256;for(this.u(e),e=Array(16),t=n=0;4>t;++t)for(var r=0;32>r;r+=8)e[n++]=this.g[t]>>>r&255;return e};var i={};function s(e){return-128<=e&&128>e?function(e,t){var n=i;return Object.prototype.hasOwnProperty.call(n,e)?n[e]:n[e]=t(e)}(e,function(e){return new r([0|e],0>e?-1:0)}):new r([0|e],0>e?-1:0)}function o(e){if(isNaN(e)||!isFinite(e))return a;if(0>e)return h(o(-e));for(var t=[],n=1,i=0;e>=n;i++)t[i]=e/n|0,n*=4294967296;return new r(t,0)}var a=s(0),l=s(1),c=s(16777216);function u(e){if(0!=e.h)return!1;for(var t=0;t<e.g.length;t++)if(0!=e.g[t])return!1;return!0}function d(e){return-1==e.h}function h(e){for(var t=e.g.length,n=[],i=0;i<t;i++)n[i]=~e.g[i];return new r(n,~e.h).add(l)}function p(e,t){return e.add(h(t))}function f(e,t){for(;(65535&e[t])!=e[t];)e[t+1]+=e[t]>>>16,e[t]&=65535,t++}function m(e,t){this.g=e,this.h=t}function g(e,t){if(u(t))throw Error("division by zero");if(u(e))return new m(a,a);if(d(e))return t=g(h(e),t),new m(h(t.g),h(t.h));if(d(t))return t=g(e,h(t)),new m(h(t.g),t.h);if(30<e.g.length){if(d(e)||d(t))throw Error("slowDivide_ only works with positive integers.");for(var n=l,r=t;0>=r.l(e);)n=v(n),r=v(r);var i=y(n,1),s=y(r,1);for(r=y(r,2),n=y(n,2);!u(r);){var c=s.add(r);0>=c.l(e)&&(i=i.add(n),s=c),r=y(r,1),n=y(n,1)}return t=p(e,i.j(t)),new m(i,t)}for(i=a;0<=e.l(t);){for(n=Math.max(1,Math.floor(e.m()/t.m())),r=48>=(r=Math.ceil(Math.log(n)/Math.LN2))?1:Math.pow(2,r-48),c=(s=o(n)).j(t);d(c)||0<c.l(e);)c=(s=o(n-=r)).j(t);u(s)&&(s=l),i=i.add(s),e=p(e,c)}return new m(i,e)}function v(e){for(var t=e.g.length+1,n=[],i=0;i<t;i++)n[i]=e.i(i)<<1|e.i(i-1)>>>31;return new r(n,e.h)}function y(e,t){var n=t>>5;t%=32;for(var i=e.g.length-n,s=[],o=0;o<i;o++)s[o]=0<t?e.i(o+n)>>>t|e.i(o+n+1)<<32-t:e.i(o+n);return new r(s,e.h)}(e=r.prototype).m=function(){if(d(this))return-h(this).m();for(var e=0,t=1,n=0;n<this.g.length;n++){var r=this.i(n);e+=(0<=r?r:4294967296+r)*t,t*=4294967296}return e},e.toString=function(e){if(2>(e=e||10)||36<e)throw Error("radix out of range: "+e);if(u(this))return"0";if(d(this))return"-"+h(this).toString(e);for(var t=o(Math.pow(e,6)),n=this,r="";;){var i=g(n,t).g,s=((0<(n=p(n,i.j(t))).g.length?n.g[0]:n.h)>>>0).toString(e);if(u(n=i))return s+r;for(;6>s.length;)s="0"+s;r=s+r}},e.i=function(e){return 0>e?0:e<this.g.length?this.g[e]:this.h},e.l=function(e){return d(e=p(this,e))?-1:u(e)?0:1},e.abs=function(){return d(this)?h(this):this},e.add=function(e){for(var t=Math.max(this.g.length,e.g.length),n=[],i=0,s=0;s<=t;s++){var o=i+(65535&this.i(s))+(65535&e.i(s)),a=(o>>>16)+(this.i(s)>>>16)+(e.i(s)>>>16);i=a>>>16,o&=65535,a&=65535,n[s]=a<<16|o}return new r(n,-2147483648&n[n.length-1]?-1:0)},e.j=function(e){if(u(this)||u(e))return a;if(d(this))return d(e)?h(this).j(h(e)):h(h(this).j(e));if(d(e))return h(this.j(h(e)));if(0>this.l(c)&&0>e.l(c))return o(this.m()*e.m());for(var t=this.g.length+e.g.length,n=[],i=0;i<2*t;i++)n[i]=0;for(i=0;i<this.g.length;i++)for(var s=0;s<e.g.length;s++){var l=this.i(i)>>>16,p=65535&this.i(i),m=e.i(s)>>>16,g=65535&e.i(s);n[2*i+2*s]+=p*g,f(n,2*i+2*s),n[2*i+2*s+1]+=l*g,f(n,2*i+2*s+1),n[2*i+2*s+1]+=p*m,f(n,2*i+2*s+1),n[2*i+2*s+2]+=l*m,f(n,2*i+2*s+2)}for(i=0;i<t;i++)n[i]=n[2*i+1]<<16|n[2*i];for(i=t;i<2*t;i++)n[i]=0;return new r(n,0)},e.A=function(e){return g(this,e).h},e.and=function(e){for(var t=Math.max(this.g.length,e.g.length),n=[],i=0;i<t;i++)n[i]=this.i(i)&e.i(i);return new r(n,this.h&e.h)},e.or=function(e){for(var t=Math.max(this.g.length,e.g.length),n=[],i=0;i<t;i++)n[i]=this.i(i)|e.i(i);return new r(n,this.h|e.h)},e.xor=function(e){for(var t=Math.max(this.g.length,e.g.length),n=[],i=0;i<t;i++)n[i]=this.i(i)^e.i(i);return new r(n,this.h^e.h)},t.prototype.digest=t.prototype.v,t.prototype.reset=t.prototype.s,t.prototype.update=t.prototype.u,To=t,r.prototype.add=r.prototype.add,r.prototype.multiply=r.prototype.j,r.prototype.modulo=r.prototype.A,r.prototype.compare=r.prototype.l,r.prototype.toNumber=r.prototype.m,r.prototype.toString=r.prototype.toString,r.prototype.getBits=r.prototype.i,r.fromNumber=o,r.fromString=function e(t,n){if(0==t.length)throw Error("number format error: empty string");if(2>(n=n||10)||36<n)throw Error("radix out of range: "+n);if("-"==t.charAt(0))return h(e(t.substring(1),n));if(0<=t.indexOf("-"))throw Error('number format error: interior "-" character');for(var r=o(Math.pow(n,8)),i=a,s=0;s<t.length;s+=8){var l=Math.min(8,t.length-s),c=parseInt(t.substring(s,s+l),n);8>l?(l=o(Math.pow(n,l)),i=i.j(l).add(o(c))):i=(i=i.j(r)).add(o(c))}return i},Eo=r}).apply(void 0!==Io?Io:"undefined"!=typeof self?self:"undefined"!=typeof window?window:{});var So,Co,ko,Ao,Do,No,Ro,Oo,Po="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{};
/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/(function(){var e,t="function"==typeof Object.defineProperties?Object.defineProperty:function(e,t,n){return e==Array.prototype||e==Object.prototype||(e[t]=n.value),e};var n=function(e){e=["object"==typeof globalThis&&globalThis,e,"object"==typeof window&&window,"object"==typeof self&&self,"object"==typeof Po&&Po];for(var t=0;t<e.length;++t){var n=e[t];if(n&&n.Math==Math)return n}throw Error("Cannot find global object")}(this);!function(e,r){if(r)e:{var i=n;e=e.split(".");for(var s=0;s<e.length-1;s++){var o=e[s];if(!(o in i))break e;i=i[o]}(r=r(s=i[e=e[e.length-1]]))!=s&&null!=r&&t(i,e,{configurable:!0,writable:!0,value:r})}}("Array.prototype.values",function(e){return e||function(){return function(e,t){e instanceof String&&(e+="");var n=0,r=!1,i={next:function(){if(!r&&n<e.length){var i=n++;return{value:t(i,e[i]),done:!1}}return r=!0,{done:!0,value:void 0}}};return i[Symbol.iterator]=function(){return i},i}(this,function(e,t){return t})}});
/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/
var r=r||{},i=this||self;function s(e){var t=typeof e;return"array"==(t="object"!=t?t:e?Array.isArray(e)?"array":t:"null")||"object"==t&&"number"==typeof e.length}function o(e){var t=typeof e;return"object"==t&&null!=e||"function"==t}function a(e,t,n){return e.call.apply(e.bind,arguments)}function l(e,t,n){if(!e)throw Error();if(2<arguments.length){var r=Array.prototype.slice.call(arguments,2);return function(){var n=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(n,r),e.apply(t,n)}}return function(){return e.apply(t,arguments)}}function c(e,t,n){return(c=Function.prototype.bind&&-1!=Function.prototype.bind.toString().indexOf("native code")?a:l).apply(null,arguments)}function u(e,t){var n=Array.prototype.slice.call(arguments,1);return function(){var t=n.slice();return t.push.apply(t,arguments),e.apply(this,t)}}function d(e,t){function n(){}n.prototype=t.prototype,e.aa=t.prototype,e.prototype=new n,e.prototype.constructor=e,e.Qb=function(e,n,r){for(var i=Array(arguments.length-2),s=2;s<arguments.length;s++)i[s-2]=arguments[s];return t.prototype[n].apply(e,i)}}function h(e){const t=e.length;if(0<t){const n=Array(t);for(let r=0;r<t;r++)n[r]=e[r];return n}return[]}function p(e,t){for(let t=1;t<arguments.length;t++){const n=arguments[t];if(s(n)){const t=e.length||0,r=n.length||0;e.length=t+r;for(let i=0;i<r;i++)e[t+i]=n[i]}else e.push(n)}}function f(e){return/^[\s\xa0]*$/.test(e)}function m(){var e=i.navigator;return e&&(e=e.userAgent)?e:""}function g(e){return g[" "](e),e}g[" "]=function(){};var v=!(-1==m().indexOf("Gecko")||-1!=m().toLowerCase().indexOf("webkit")&&-1==m().indexOf("Edge")||-1!=m().indexOf("Trident")||-1!=m().indexOf("MSIE")||-1!=m().indexOf("Edge"));function y(e,t,n){for(const r in e)t.call(n,e[r],r,e)}function b(e){const t={};for(const n in e)t[n]=e[n];return t}const w="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function _(e,t){let n,r;for(let t=1;t<arguments.length;t++){for(n in r=arguments[t],r)e[n]=r[n];for(let t=0;t<w.length;t++)n=w[t],Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}}function x(e){var t=1;e=e.split(":");const n=[];for(;0<t&&e.length;)n.push(e.shift()),t--;return e.length&&n.push(e.join(":")),n}function E(e){i.setTimeout(()=>{throw e},0)}function T(){var e=A;let t=null;return e.g&&(t=e.g,e.g=e.g.next,e.g||(e.h=null),t.next=null),t}var I=new class{constructor(e,t){this.i=e,this.j=t,this.h=0,this.g=null}get(){let e;return 0<this.h?(this.h--,e=this.g,this.g=e.next,e.next=null):e=this.i(),e}}(()=>new S,e=>e.reset());class S{constructor(){this.next=this.g=this.h=null}set(e,t){this.h=e,this.g=t,this.next=null}reset(){this.next=this.g=this.h=null}}let C,k=!1,A=new class{constructor(){this.h=this.g=null}add(e,t){const n=I.get();n.set(e,t),this.h?this.h.next=n:this.g=n,this.h=n}},D=()=>{const e=i.Promise.resolve(void 0);C=()=>{e.then(N)}};var N=()=>{for(var e;e=T();){try{e.h.call(e.g)}catch(e){E(e)}var t=I;t.j(e),100>t.h&&(t.h++,e.next=t.g,t.g=e)}k=!1};function R(){this.s=this.s,this.C=this.C}function O(e,t){this.type=e,this.g=this.target=t,this.defaultPrevented=!1}R.prototype.s=!1,R.prototype.ma=function(){this.s||(this.s=!0,this.N())},R.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()},O.prototype.h=function(){this.defaultPrevented=!0};var P=function(){if(!i.addEventListener||!Object.defineProperty)return!1;var e=!1,t=Object.defineProperty({},"passive",{get:function(){e=!0}});try{const e=()=>{};i.addEventListener("test",e,t),i.removeEventListener("test",e,t)}catch(e){}return e}();function L(e,t){if(O.call(this,e?e.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,e){var n=this.type=e.type,r=e.changedTouches&&e.changedTouches.length?e.changedTouches[0]:null;if(this.target=e.target||e.srcElement,this.g=t,t=e.relatedTarget){if(v){e:{try{g(t.nodeName);var i=!0;break e}catch(e){}i=!1}i||(t=null)}}else"mouseover"==n?t=e.fromElement:"mouseout"==n&&(t=e.toElement);this.relatedTarget=t,r?(this.clientX=void 0!==r.clientX?r.clientX:r.pageX,this.clientY=void 0!==r.clientY?r.clientY:r.pageY,this.screenX=r.screenX||0,this.screenY=r.screenY||0):(this.clientX=void 0!==e.clientX?e.clientX:e.pageX,this.clientY=void 0!==e.clientY?e.clientY:e.pageY,this.screenX=e.screenX||0,this.screenY=e.screenY||0),this.button=e.button,this.key=e.key||"",this.ctrlKey=e.ctrlKey,this.altKey=e.altKey,this.shiftKey=e.shiftKey,this.metaKey=e.metaKey,this.pointerId=e.pointerId||0,this.pointerType="string"==typeof e.pointerType?e.pointerType:$[e.pointerType]||"",this.state=e.state,this.i=e,e.defaultPrevented&&L.aa.h.call(this)}}d(L,O);var $={2:"touch",3:"pen",4:"mouse"};L.prototype.h=function(){L.aa.h.call(this);var e=this.i;e.preventDefault?e.preventDefault():e.returnValue=!1};var M="closure_listenable_"+(1e6*Math.random()|0),U=0;function F(e,t,n,r,i){this.listener=e,this.proxy=null,this.src=t,this.type=n,this.capture=!!r,this.ha=i,this.key=++U,this.da=this.fa=!1}function V(e){e.da=!0,e.listener=null,e.proxy=null,e.src=null,e.ha=null}function z(e){this.src=e,this.g={},this.h=0}function j(e,t){var n=t.type;if(n in e.g){var r,i=e.g[n],s=Array.prototype.indexOf.call(i,t,void 0);(r=0<=s)&&Array.prototype.splice.call(i,s,1),r&&(V(t),0==e.g[n].length&&(delete e.g[n],e.h--))}}function B(e,t,n,r){for(var i=0;i<e.length;++i){var s=e[i];if(!s.da&&s.listener==t&&s.capture==!!n&&s.ha==r)return i}return-1}z.prototype.add=function(e,t,n,r,i){var s=e.toString();(e=this.g[s])||(e=this.g[s]=[],this.h++);var o=B(e,t,r,i);return-1<o?(t=e[o],n||(t.fa=!1)):((t=new F(t,this.src,s,!!r,i)).fa=n,e.push(t)),t};var q="closure_lm_"+(1e6*Math.random()|0),H={};function G(e,t,n,r,i){if(Array.isArray(t)){for(var s=0;s<t.length;s++)G(e,t[s],n,r,i);return null}return n=Z(n),e&&e[M]?e.K(t,n,!!o(r)&&!!r.capture,i):function(e,t,n,r,i,s){if(!t)throw Error("Invalid event type");var a=o(i)?!!i.capture:!!i,l=J(e);if(l||(e[q]=l=new z(e)),n=l.add(t,n,r,a,s),n.proxy)return n;if(r=function(){function e(n){return t.call(e.src,e.listener,n)}const t=Q;return e}(),n.proxy=r,r.src=e,r.listener=n,e.addEventListener)P||(i=a),void 0===i&&(i=!1),e.addEventListener(t.toString(),r,i);else if(e.attachEvent)e.attachEvent(X(t.toString()),r);else{if(!e.addListener||!e.removeListener)throw Error("addEventListener and attachEvent are unavailable.");e.addListener(r)}return n}(e,t,n,!1,r,i)}function K(e,t,n,r,i){if(Array.isArray(t))for(var s=0;s<t.length;s++)K(e,t[s],n,r,i);else r=o(r)?!!r.capture:!!r,n=Z(n),e&&e[M]?(e=e.i,(t=String(t).toString())in e.g&&(-1<(n=B(s=e.g[t],n,r,i))&&(V(s[n]),Array.prototype.splice.call(s,n,1),0==s.length&&(delete e.g[t],e.h--)))):e&&(e=J(e))&&(t=e.g[t.toString()],e=-1,t&&(e=B(t,n,r,i)),(n=-1<e?t[e]:null)&&W(n))}function W(e){if("number"!=typeof e&&e&&!e.da){var t=e.src;if(t&&t[M])j(t.i,e);else{var n=e.type,r=e.proxy;t.removeEventListener?t.removeEventListener(n,r,e.capture):t.detachEvent?t.detachEvent(X(n),r):t.addListener&&t.removeListener&&t.removeListener(r),(n=J(t))?(j(n,e),0==n.h&&(n.src=null,t[q]=null)):V(e)}}}function X(e){return e in H?H[e]:H[e]="on"+e}function Q(e,t){if(e.da)e=!0;else{t=new L(t,this);var n=e.listener,r=e.ha||e.src;e.fa&&W(e),e=n.call(r,t)}return e}function J(e){return(e=e[q])instanceof z?e:null}var Y="__closure_events_fn_"+(1e9*Math.random()>>>0);function Z(e){return"function"==typeof e?e:(e[Y]||(e[Y]=function(t){return e.handleEvent(t)}),e[Y])}function ee(){R.call(this),this.i=new z(this),this.M=this,this.F=null}function te(e,t){var n,r=e.F;if(r)for(n=[];r;r=r.F)n.push(r);if(e=e.M,r=t.type||t,"string"==typeof t)t=new O(t,e);else if(t instanceof O)t.target=t.target||e;else{var i=t;_(t=new O(r,e),i)}if(i=!0,n)for(var s=n.length-1;0<=s;s--){var o=t.g=n[s];i=ne(o,r,!0,t)&&i}if(i=ne(o=t.g=e,r,!0,t)&&i,i=ne(o,r,!1,t)&&i,n)for(s=0;s<n.length;s++)i=ne(o=t.g=n[s],r,!1,t)&&i}function ne(e,t,n,r){if(!(t=e.i.g[String(t)]))return!0;t=t.concat();for(var i=!0,s=0;s<t.length;++s){var o=t[s];if(o&&!o.da&&o.capture==n){var a=o.listener,l=o.ha||o.src;o.fa&&j(e.i,o),i=!1!==a.call(l,r)&&i}}return i&&!r.defaultPrevented}function re(e,t,n){if("function"==typeof e)n&&(e=c(e,n));else{if(!e||"function"!=typeof e.handleEvent)throw Error("Invalid listener argument");e=c(e.handleEvent,e)}return 2147483647<Number(t)?-1:i.setTimeout(e,t||0)}function ie(e){e.g=re(()=>{e.g=null,e.i&&(e.i=!1,ie(e))},e.l);const t=e.h;e.h=null,e.m.apply(null,t)}d(ee,R),ee.prototype[M]=!0,ee.prototype.removeEventListener=function(e,t,n,r){K(this,e,t,n,r)},ee.prototype.N=function(){if(ee.aa.N.call(this),this.i){var e,t=this.i;for(e in t.g){for(var n=t.g[e],r=0;r<n.length;r++)V(n[r]);delete t.g[e],t.h--}}this.F=null},ee.prototype.K=function(e,t,n,r){return this.i.add(String(e),t,!1,n,r)},ee.prototype.L=function(e,t,n,r){return this.i.add(String(e),t,!0,n,r)};class se extends R{constructor(e,t){super(),this.m=e,this.l=t,this.h=null,this.i=!1,this.g=null}j(e){this.h=arguments,this.g?this.i=!0:ie(this)}N(){super.N(),this.g&&(i.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function oe(e){R.call(this),this.h=e,this.g={}}d(oe,R);var ae=[];function le(e){y(e.g,function(e,t){this.g.hasOwnProperty(t)&&W(e)},e),e.g={}}oe.prototype.N=function(){oe.aa.N.call(this),le(this)},oe.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var ce=i.JSON.stringify,ue=i.JSON.parse,de=class{stringify(e){return i.JSON.stringify(e,void 0)}parse(e){return i.JSON.parse(e,void 0)}};function he(){}function pe(e){return e.h||(e.h=e.i())}function fe(){}he.prototype.h=null;var me={OPEN:"a",kb:"b",Ja:"c",wb:"d"};function ge(){O.call(this,"d")}function ve(){O.call(this,"c")}d(ge,O),d(ve,O);var ye={},be=null;function we(){return be=be||new ee}function _e(e){O.call(this,ye.La,e)}function xe(e){const t=we();te(t,new _e(t))}function Ee(e,t){O.call(this,ye.STAT_EVENT,e),this.stat=t}function Te(e){const t=we();te(t,new Ee(t,e))}function Ie(e,t){O.call(this,ye.Ma,e),this.size=t}function Se(e,t){if("function"!=typeof e)throw Error("Fn must not be null and must be a function");return i.setTimeout(function(){e()},t)}function Ce(){this.g=!0}function ke(e,t,n,r){e.info(function(){return"XMLHTTP TEXT ("+t+"): "+function(e,t){if(!e.g)return t;if(!t)return null;try{var n=JSON.parse(t);if(n)for(e=0;e<n.length;e++)if(Array.isArray(n[e])){var r=n[e];if(!(2>r.length)){var i=r[1];if(Array.isArray(i)&&!(1>i.length)){var s=i[0];if("noop"!=s&&"stop"!=s&&"close"!=s)for(var o=1;o<i.length;o++)i[o]=""}}}return ce(n)}catch(e){return t}}(e,n)+(r?" "+r:"")})}ye.La="serverreachability",d(_e,O),ye.STAT_EVENT="statevent",d(Ee,O),ye.Ma="timingevent",d(Ie,O),Ce.prototype.xa=function(){this.g=!1},Ce.prototype.info=function(){};var Ae,De={NO_ERROR:0,gb:1,tb:2,sb:3,nb:4,rb:5,ub:6,Ia:7,TIMEOUT:8,xb:9},Ne={lb:"complete",Hb:"success",Ja:"error",Ia:"abort",zb:"ready",Ab:"readystatechange",TIMEOUT:"timeout",vb:"incrementaldata",yb:"progress",ob:"downloadprogress",Pb:"uploadprogress"};function Re(){}function Oe(e,t,n,r){this.j=e,this.i=t,this.l=n,this.R=r||1,this.U=new oe(this),this.I=45e3,this.H=null,this.o=!1,this.m=this.A=this.v=this.L=this.F=this.S=this.B=null,this.D=[],this.g=null,this.C=0,this.s=this.u=null,this.X=-1,this.J=!1,this.O=0,this.M=null,this.W=this.K=this.T=this.P=!1,this.h=new Pe}function Pe(){this.i=null,this.g="",this.h=!1}d(Re,he),Re.prototype.g=function(){return new XMLHttpRequest},Re.prototype.i=function(){return{}},Ae=new Re;var Le={},$e={};function Me(e,t,n){e.L=1,e.v=ct(it(t)),e.m=n,e.P=!0,Ue(e,null)}function Ue(e,t){e.F=Date.now(),ze(e),e.A=it(e.v);var n=e.A,r=e.R;Array.isArray(r)||(r=[String(r)]),xt(n.i,"t",r),e.C=0,n=e.j.J,e.h=new Pe,e.g=un(e.j,n?t:null,!e.m),0<e.O&&(e.M=new se(c(e.Y,e,e.g),e.O)),t=e.U,n=e.g,r=e.ca;var i="readystatechange";Array.isArray(i)||(i&&(ae[0]=i.toString()),i=ae);for(var s=0;s<i.length;s++){var o=G(n,i[s],r||t.handleEvent,!1,t.h||t);if(!o)break;t.g[o.key]=o}t=e.H?b(e.H):{},e.m?(e.u||(e.u="POST"),t["Content-Type"]="application/x-www-form-urlencoded",e.g.ea(e.A,e.u,e.m,t)):(e.u="GET",e.g.ea(e.A,e.u,null,t)),xe(),function(e,t,n,r,i,s){e.info(function(){if(e.g)if(s)for(var o="",a=s.split("&"),l=0;l<a.length;l++){var c=a[l].split("=");if(1<c.length){var u=c[0];c=c[1];var d=u.split("_");o=2<=d.length&&"type"==d[1]?o+(u+"=")+c+"&":o+(u+"=redacted&")}}else o=null;else o=s;return"XMLHTTP REQ ("+r+") [attempt "+i+"]: "+t+"\n"+n+"\n"+o})}(e.i,e.u,e.A,e.l,e.R,e.m)}function Fe(e){return!!e.g&&("GET"==e.u&&2!=e.L&&e.j.Ca)}function Ve(e,t){var n=e.C,r=t.indexOf("\n",n);return-1==r?$e:(n=Number(t.substring(n,r)),isNaN(n)?Le:(r+=1)+n>t.length?$e:(t=t.slice(r,r+n),e.C=r+n,t))}function ze(e){e.S=Date.now()+e.I,je(e,e.I)}function je(e,t){if(null!=e.B)throw Error("WatchDog timer not null");e.B=Se(c(e.ba,e),t)}function Be(e){e.B&&(i.clearTimeout(e.B),e.B=null)}function qe(e){0==e.j.G||e.J||sn(e.j,e)}function He(e){Be(e);var t=e.M;t&&"function"==typeof t.ma&&t.ma(),e.M=null,le(e.U),e.g&&(t=e.g,e.g=null,t.abort(),t.ma())}function Ge(e,t){try{var n=e.j;if(0!=n.G&&(n.g==e||Je(n.h,e)))if(!e.K&&Je(n.h,e)&&3==n.G){try{var r=n.Da.g.parse(t)}catch(e){r=null}if(Array.isArray(r)&&3==r.length){var i=r;if(0==i[0]){e:if(!n.u){if(n.g){if(!(n.g.F+3e3<e.F))break e;rn(n),Kt(n)}en(n),Te(18)}}else n.za=i[1],0<n.za-n.T&&37500>i[2]&&n.F&&0==n.v&&!n.C&&(n.C=Se(c(n.Za,n),6e3));if(1>=Qe(n.h)&&n.ca){try{n.ca()}catch(e){}n.ca=void 0}}else an(n,11)}else if((e.K||n.g==e)&&rn(n),!f(t))for(i=n.Da.g.parse(t),t=0;t<i.length;t++){let c=i[t];if(n.T=c[0],c=c[1],2==n.G)if("c"==c[0]){n.K=c[1],n.ia=c[2];const t=c[3];null!=t&&(n.la=t,n.j.info("VER="+n.la));const i=c[4];null!=i&&(n.Aa=i,n.j.info("SVER="+n.Aa));const u=c[5];null!=u&&"number"==typeof u&&0<u&&(r=1.5*u,n.L=r,n.j.info("backChannelRequestTimeoutMs_="+r)),r=n;const d=e.g;if(d){const e=d.g?d.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(e){var s=r.h;s.g||-1==e.indexOf("spdy")&&-1==e.indexOf("quic")&&-1==e.indexOf("h2")||(s.j=s.l,s.g=new Set,s.h&&(Ye(s,s.h),s.h=null))}if(r.D){const e=d.g?d.g.getResponseHeader("X-HTTP-Session-Id"):null;e&&(r.ya=e,lt(r.I,r.D,e))}}n.G=3,n.l&&n.l.ua(),n.ba&&(n.R=Date.now()-e.F,n.j.info("Handshake RTT: "+n.R+"ms"));var o=e;if((r=n).qa=cn(r,r.J?r.ia:null,r.W),o.K){Ze(r.h,o);var a=o,l=r.L;l&&(a.I=l),a.B&&(Be(a),ze(a)),r.g=o}else Zt(r);0<n.i.length&&Xt(n)}else"stop"!=c[0]&&"close"!=c[0]||an(n,7);else 3==n.G&&("stop"==c[0]||"close"==c[0]?"stop"==c[0]?an(n,7):Gt(n):"noop"!=c[0]&&n.l&&n.l.ta(c),n.v=0)}xe()}catch(e){}}Oe.prototype.ca=function(e){e=e.target;const t=this.M;t&&3==jt(e)?t.j():this.Y(e)},Oe.prototype.Y=function(e){try{if(e==this.g)e:{const h=jt(this.g);var t=this.g.Ba();this.g.Z();if(!(3>h)&&(3!=h||this.g&&(this.h.h||this.g.oa()||Bt(this.g)))){this.J||4!=h||7==t||xe(),Be(this);var n=this.g.Z();this.X=n;t:if(Fe(this)){var r=Bt(this.g);e="";var s=r.length,o=4==jt(this.g);if(!this.h.i){if("undefined"==typeof TextDecoder){He(this),qe(this);var a="";break t}this.h.i=new i.TextDecoder}for(t=0;t<s;t++)this.h.h=!0,e+=this.h.i.decode(r[t],{stream:!(o&&t==s-1)});r.length=0,this.h.g+=e,this.C=0,a=this.h.g}else a=this.g.oa();if(this.o=200==n,function(e,t,n,r,i,s,o){e.info(function(){return"XMLHTTP RESP ("+r+") [ attempt "+i+"]: "+t+"\n"+n+"\n"+s+" "+o})}(this.i,this.u,this.A,this.l,this.R,h,n),this.o){if(this.T&&!this.K){t:{if(this.g){var l,c=this.g;if((l=c.g?c.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!f(l)){var u=l;break t}}u=null}if(!(n=u)){this.o=!1,this.s=3,Te(12),He(this),qe(this);break e}ke(this.i,this.l,n,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,Ge(this,n)}if(this.P){let e;for(n=!0;!this.J&&this.C<a.length;){if(e=Ve(this,a),e==$e){4==h&&(this.s=4,Te(14),n=!1),ke(this.i,this.l,null,"[Incomplete Response]");break}if(e==Le){this.s=4,Te(15),ke(this.i,this.l,a,"[Invalid Chunk]"),n=!1;break}ke(this.i,this.l,e,null),Ge(this,e)}if(Fe(this)&&0!=this.C&&(this.h.g=this.h.g.slice(this.C),this.C=0),4!=h||0!=a.length||this.h.h||(this.s=1,Te(16),n=!1),this.o=this.o&&n,n){if(0<a.length&&!this.W){this.W=!0;var d=this.j;d.g==this&&d.ba&&!d.M&&(d.j.info("Great, no buffering proxy detected. Bytes received: "+a.length),tn(d),d.M=!0,Te(11))}}else ke(this.i,this.l,a,"[Invalid Chunked Response]"),He(this),qe(this)}else ke(this.i,this.l,a,null),Ge(this,a);4==h&&He(this),this.o&&!this.J&&(4==h?sn(this.j,this):(this.o=!1,ze(this)))}else(function(e){const t={};e=(e.g&&2<=jt(e)&&e.g.getAllResponseHeaders()||"").split("\r\n");for(let r=0;r<e.length;r++){if(f(e[r]))continue;var n=x(e[r]);const i=n[0];if("string"!=typeof(n=n[1]))continue;n=n.trim();const s=t[i]||[];t[i]=s,s.push(n)}!function(e,t){for(const n in e)t.call(void 0,e[n],n,e)}(t,function(e){return e.join(", ")})})(this.g),400==n&&0<a.indexOf("Unknown SID")?(this.s=3,Te(12)):(this.s=0,Te(13)),He(this),qe(this)}}}catch(e){}},Oe.prototype.cancel=function(){this.J=!0,He(this)},Oe.prototype.ba=function(){this.B=null;const e=Date.now();0<=e-this.S?(function(e,t){e.info(function(){return"TIMEOUT: "+t})}(this.i,this.A),2!=this.L&&(xe(),Te(17)),He(this),this.s=2,qe(this)):je(this,this.S-e)};var Ke=class{constructor(e,t){this.g=e,this.map=t}};function We(e){this.l=e||10,i.PerformanceNavigationTiming?e=0<(e=i.performance.getEntriesByType("navigation")).length&&("hq"==e[0].nextHopProtocol||"h2"==e[0].nextHopProtocol):e=!!(i.chrome&&i.chrome.loadTimes&&i.chrome.loadTimes()&&i.chrome.loadTimes().wasFetchedViaSpdy),this.j=e?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}function Xe(e){return!!e.h||!!e.g&&e.g.size>=e.j}function Qe(e){return e.h?1:e.g?e.g.size:0}function Je(e,t){return e.h?e.h==t:!!e.g&&e.g.has(t)}function Ye(e,t){e.g?e.g.add(t):e.h=t}function Ze(e,t){e.h&&e.h==t?e.h=null:e.g&&e.g.has(t)&&e.g.delete(t)}function et(e){if(null!=e.h)return e.i.concat(e.h.D);if(null!=e.g&&0!==e.g.size){let t=e.i;for(const n of e.g.values())t=t.concat(n.D);return t}return h(e.i)}function tt(e,t){if(e.forEach&&"function"==typeof e.forEach)e.forEach(t,void 0);else if(s(e)||"string"==typeof e)Array.prototype.forEach.call(e,t,void 0);else for(var n=function(e){if(e.na&&"function"==typeof e.na)return e.na();if(!e.V||"function"!=typeof e.V){if("undefined"!=typeof Map&&e instanceof Map)return Array.from(e.keys());if(!("undefined"!=typeof Set&&e instanceof Set)){if(s(e)||"string"==typeof e){var t=[];e=e.length;for(var n=0;n<e;n++)t.push(n);return t}t=[],n=0;for(const r in e)t[n++]=r;return t}}}(e),r=function(e){if(e.V&&"function"==typeof e.V)return e.V();if("undefined"!=typeof Map&&e instanceof Map||"undefined"!=typeof Set&&e instanceof Set)return Array.from(e.values());if("string"==typeof e)return e.split("");if(s(e)){for(var t=[],n=e.length,r=0;r<n;r++)t.push(e[r]);return t}for(r in t=[],n=0,e)t[n++]=e[r];return t}(e),i=r.length,o=0;o<i;o++)t.call(void 0,r[o],n&&n[o],e)}We.prototype.cancel=function(){if(this.i=et(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&0!==this.g.size){for(const e of this.g.values())e.cancel();this.g.clear()}};var nt=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function rt(e){if(this.g=this.o=this.j="",this.s=null,this.m=this.l="",this.h=!1,e instanceof rt){this.h=e.h,st(this,e.j),this.o=e.o,this.g=e.g,ot(this,e.s),this.l=e.l;var t=e.i,n=new yt;n.i=t.i,t.g&&(n.g=new Map(t.g),n.h=t.h),at(this,n),this.m=e.m}else e&&(t=String(e).match(nt))?(this.h=!1,st(this,t[1]||"",!0),this.o=ut(t[2]||""),this.g=ut(t[3]||"",!0),ot(this,t[4]),this.l=ut(t[5]||"",!0),at(this,t[6]||"",!0),this.m=ut(t[7]||"")):(this.h=!1,this.i=new yt(null,this.h))}function it(e){return new rt(e)}function st(e,t,n){e.j=n?ut(t,!0):t,e.j&&(e.j=e.j.replace(/:$/,""))}function ot(e,t){if(t){if(t=Number(t),isNaN(t)||0>t)throw Error("Bad port number "+t);e.s=t}else e.s=null}function at(e,t,n){t instanceof yt?(e.i=t,function(e,t){t&&!e.j&&(bt(e),e.i=null,e.g.forEach(function(e,t){var n=t.toLowerCase();t!=n&&(wt(this,t),xt(this,n,e))},e)),e.j=t}(e.i,e.h)):(n||(t=dt(t,gt)),e.i=new yt(t,e.h))}function lt(e,t,n){e.i.set(t,n)}function ct(e){return lt(e,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),e}function ut(e,t){return e?t?decodeURI(e.replace(/%25/g,"%2525")):decodeURIComponent(e):""}function dt(e,t,n){return"string"==typeof e?(e=encodeURI(e).replace(t,ht),n&&(e=e.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),e):null}function ht(e){return"%"+((e=e.charCodeAt(0))>>4&15).toString(16)+(15&e).toString(16)}rt.prototype.toString=function(){var e=[],t=this.j;t&&e.push(dt(t,pt,!0),":");var n=this.g;return(n||"file"==t)&&(e.push("//"),(t=this.o)&&e.push(dt(t,pt,!0),"@"),e.push(encodeURIComponent(String(n)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),null!=(n=this.s)&&e.push(":",String(n))),(n=this.l)&&(this.g&&"/"!=n.charAt(0)&&e.push("/"),e.push(dt(n,"/"==n.charAt(0)?mt:ft,!0))),(n=this.i.toString())&&e.push("?",n),(n=this.m)&&e.push("#",dt(n,vt)),e.join("")};var pt=/[#\/\?@]/g,ft=/[#\?:]/g,mt=/[#\?]/g,gt=/[#\?@]/g,vt=/#/g;function yt(e,t){this.h=this.g=null,this.i=e||null,this.j=!!t}function bt(e){e.g||(e.g=new Map,e.h=0,e.i&&function(e,t){if(e){e=e.split("&");for(var n=0;n<e.length;n++){var r=e[n].indexOf("="),i=null;if(0<=r){var s=e[n].substring(0,r);i=e[n].substring(r+1)}else s=e[n];t(s,i?decodeURIComponent(i.replace(/\+/g," ")):"")}}}(e.i,function(t,n){e.add(decodeURIComponent(t.replace(/\+/g," ")),n)}))}function wt(e,t){bt(e),t=Et(e,t),e.g.has(t)&&(e.i=null,e.h-=e.g.get(t).length,e.g.delete(t))}function _t(e,t){return bt(e),t=Et(e,t),e.g.has(t)}function xt(e,t,n){wt(e,t),0<n.length&&(e.i=null,e.g.set(Et(e,t),h(n)),e.h+=n.length)}function Et(e,t){return t=String(t),e.j&&(t=t.toLowerCase()),t}function Tt(e,t,n,r,i){try{i&&(i.onload=null,i.onerror=null,i.onabort=null,i.ontimeout=null),r(n)}catch(e){}}function It(){this.g=new de}function St(e,t,n){const r=n||"";try{tt(e,function(e,n){let i=e;o(e)&&(i=ce(e)),t.push(r+n+"="+encodeURIComponent(i))})}catch(e){throw t.push(r+"type="+encodeURIComponent("_badmap")),e}}function Ct(e){this.l=e.Ub||null,this.j=e.eb||!1}function kt(e,t){ee.call(this),this.D=e,this.o=t,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.u=new Headers,this.h=null,this.B="GET",this.A="",this.g=!1,this.v=this.j=this.l=null}function At(e){e.j.read().then(e.Pa.bind(e)).catch(e.ga.bind(e))}function Dt(e){e.readyState=4,e.l=null,e.j=null,e.v=null,Nt(e)}function Nt(e){e.onreadystatechange&&e.onreadystatechange.call(e)}function Rt(e){let t="";return y(e,function(e,n){t+=n,t+=":",t+=e,t+="\r\n"}),t}function Ot(e,t,n){e:{for(r in n){var r=!1;break e}r=!0}r||(n=Rt(n),"string"==typeof e?null!=n&&encodeURIComponent(String(n)):lt(e,t,n))}function Pt(e){ee.call(this),this.headers=new Map,this.o=e||null,this.h=!1,this.v=this.g=null,this.D="",this.m=0,this.l="",this.j=this.B=this.u=this.A=!1,this.I=null,this.H="",this.J=!1}(e=yt.prototype).add=function(e,t){bt(this),this.i=null,e=Et(this,e);var n=this.g.get(e);return n||this.g.set(e,n=[]),n.push(t),this.h+=1,this},e.forEach=function(e,t){bt(this),this.g.forEach(function(n,r){n.forEach(function(n){e.call(t,n,r,this)},this)},this)},e.na=function(){bt(this);const e=Array.from(this.g.values()),t=Array.from(this.g.keys()),n=[];for(let r=0;r<t.length;r++){const i=e[r];for(let e=0;e<i.length;e++)n.push(t[r])}return n},e.V=function(e){bt(this);let t=[];if("string"==typeof e)_t(this,e)&&(t=t.concat(this.g.get(Et(this,e))));else{e=Array.from(this.g.values());for(let n=0;n<e.length;n++)t=t.concat(e[n])}return t},e.set=function(e,t){return bt(this),this.i=null,_t(this,e=Et(this,e))&&(this.h-=this.g.get(e).length),this.g.set(e,[t]),this.h+=1,this},e.get=function(e,t){return e&&0<(e=this.V(e)).length?String(e[0]):t},e.toString=function(){if(this.i)return this.i;if(!this.g)return"";const e=[],t=Array.from(this.g.keys());for(var n=0;n<t.length;n++){var r=t[n];const s=encodeURIComponent(String(r)),o=this.V(r);for(r=0;r<o.length;r++){var i=s;""!==o[r]&&(i+="="+encodeURIComponent(String(o[r]))),e.push(i)}}return this.i=e.join("&")},d(Ct,he),Ct.prototype.g=function(){return new kt(this.l,this.j)},Ct.prototype.i=function(e){return function(){return e}}({}),d(kt,ee),(e=kt.prototype).open=function(e,t){if(0!=this.readyState)throw this.abort(),Error("Error reopening a connection");this.B=e,this.A=t,this.readyState=1,Nt(this)},e.send=function(e){if(1!=this.readyState)throw this.abort(),Error("need to call open() first. ");this.g=!0;const t={headers:this.u,method:this.B,credentials:this.m,cache:void 0};e&&(t.body=e),(this.D||i).fetch(new Request(this.A,t)).then(this.Sa.bind(this),this.ga.bind(this))},e.abort=function(){this.response=this.responseText="",this.u=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&4!=this.readyState&&(this.g=!1,Dt(this)),this.readyState=0},e.Sa=function(e){if(this.g&&(this.l=e,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=e.headers,this.readyState=2,Nt(this)),this.g&&(this.readyState=3,Nt(this),this.g)))if("arraybuffer"===this.responseType)e.arrayBuffer().then(this.Qa.bind(this),this.ga.bind(this));else if(void 0!==i.ReadableStream&&"body"in e){if(this.j=e.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.v=new TextDecoder;At(this)}else e.text().then(this.Ra.bind(this),this.ga.bind(this))},e.Pa=function(e){if(this.g){if(this.o&&e.value)this.response.push(e.value);else if(!this.o){var t=e.value?e.value:new Uint8Array(0);(t=this.v.decode(t,{stream:!e.done}))&&(this.response=this.responseText+=t)}e.done?Dt(this):Nt(this),3==this.readyState&&At(this)}},e.Ra=function(e){this.g&&(this.response=this.responseText=e,Dt(this))},e.Qa=function(e){this.g&&(this.response=e,Dt(this))},e.ga=function(){this.g&&Dt(this)},e.setRequestHeader=function(e,t){this.u.append(e,t)},e.getResponseHeader=function(e){return this.h&&this.h.get(e.toLowerCase())||""},e.getAllResponseHeaders=function(){if(!this.h)return"";const e=[],t=this.h.entries();for(var n=t.next();!n.done;)n=n.value,e.push(n[0]+": "+n[1]),n=t.next();return e.join("\r\n")},Object.defineProperty(kt.prototype,"withCredentials",{get:function(){return"include"===this.m},set:function(e){this.m=e?"include":"same-origin"}}),d(Pt,ee);var Lt=/^https?$/i,$t=["POST","PUT"];function Mt(e,t){e.h=!1,e.g&&(e.j=!0,e.g.abort(),e.j=!1),e.l=t,e.m=5,Ut(e),Vt(e)}function Ut(e){e.A||(e.A=!0,te(e,"complete"),te(e,"error"))}function Ft(e){if(e.h&&void 0!==r&&(!e.v[1]||4!=jt(e)||2!=e.Z()))if(e.u&&4==jt(e))re(e.Ea,0,e);else if(te(e,"readystatechange"),4==jt(e)){e.h=!1;try{const r=e.Z();e:switch(r){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var t=!0;break e;default:t=!1}var n;if(!(n=t)){var s;if(s=0===r){var o=String(e.D).match(nt)[1]||null;!o&&i.self&&i.self.location&&(o=i.self.location.protocol.slice(0,-1)),s=!Lt.test(o?o.toLowerCase():"")}n=s}if(n)te(e,"complete"),te(e,"success");else{e.m=6;try{var a=2<jt(e)?e.g.statusText:""}catch(e){a=""}e.l=a+" ["+e.Z()+"]",Ut(e)}}finally{Vt(e)}}}function Vt(e,t){if(e.g){zt(e);const n=e.g,r=e.v[0]?()=>{}:null;e.g=null,e.v=null,t||te(e,"ready");try{n.onreadystatechange=r}catch(e){}}}function zt(e){e.I&&(i.clearTimeout(e.I),e.I=null)}function jt(e){return e.g?e.g.readyState:0}function Bt(e){try{if(!e.g)return null;if("response"in e.g)return e.g.response;switch(e.H){case"":case"text":return e.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in e.g)return e.g.mozResponseArrayBuffer}return null}catch(e){return null}}function qt(e,t,n){return n&&n.internalChannelParams&&n.internalChannelParams[e]||t}function Ht(e){this.Aa=0,this.i=[],this.j=new Ce,this.ia=this.qa=this.I=this.W=this.g=this.ya=this.D=this.H=this.m=this.S=this.o=null,this.Ya=this.U=0,this.Va=qt("failFast",!1,e),this.F=this.C=this.u=this.s=this.l=null,this.X=!0,this.za=this.T=-1,this.Y=this.v=this.B=0,this.Ta=qt("baseRetryDelayMs",5e3,e),this.cb=qt("retryDelaySeedMs",1e4,e),this.Wa=qt("forwardChannelMaxRetries",2,e),this.wa=qt("forwardChannelRequestTimeoutMs",2e4,e),this.pa=e&&e.xmlHttpFactory||void 0,this.Xa=e&&e.Tb||void 0,this.Ca=e&&e.useFetchStreams||!1,this.L=void 0,this.J=e&&e.supportsCrossDomainXhr||!1,this.K="",this.h=new We(e&&e.concurrentRequestLimit),this.Da=new It,this.P=e&&e.fastHandshake||!1,this.O=e&&e.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.Ua=e&&e.Rb||!1,e&&e.xa&&this.j.xa(),e&&e.forceLongPolling&&(this.X=!1),this.ba=!this.P&&this.X&&e&&e.detectBufferingProxy||!1,this.ja=void 0,e&&e.longPollingTimeout&&0<e.longPollingTimeout&&(this.ja=e.longPollingTimeout),this.ca=void 0,this.R=0,this.M=!1,this.ka=this.A=null}function Gt(e){if(Wt(e),3==e.G){var t=e.U++,n=it(e.I);if(lt(n,"SID",e.K),lt(n,"RID",t),lt(n,"TYPE","terminate"),Jt(e,n),(t=new Oe(e,e.j,t)).L=2,t.v=ct(it(n)),n=!1,i.navigator&&i.navigator.sendBeacon)try{n=i.navigator.sendBeacon(t.v.toString(),"")}catch(e){}!n&&i.Image&&((new Image).src=t.v,n=!0),n||(t.g=un(t.j,null),t.g.ea(t.v)),t.F=Date.now(),ze(t)}ln(e)}function Kt(e){e.g&&(tn(e),e.g.cancel(),e.g=null)}function Wt(e){Kt(e),e.u&&(i.clearTimeout(e.u),e.u=null),rn(e),e.h.cancel(),e.s&&("number"==typeof e.s&&i.clearTimeout(e.s),e.s=null)}function Xt(e){if(!Xe(e.h)&&!e.s){e.s=!0;var t=e.Ga;C||D(),k||(C(),k=!0),A.add(t,e),e.B=0}}function Qt(e,t){var n;n=t?t.l:e.U++;const r=it(e.I);lt(r,"SID",e.K),lt(r,"RID",n),lt(r,"AID",e.T),Jt(e,r),e.m&&e.o&&Ot(r,e.m,e.o),n=new Oe(e,e.j,n,e.B+1),null===e.m&&(n.H=e.o),t&&(e.i=t.D.concat(e.i)),t=Yt(e,n,1e3),n.I=Math.round(.5*e.wa)+Math.round(.5*e.wa*Math.random()),Ye(e.h,n),Me(n,r,t)}function Jt(e,t){e.H&&y(e.H,function(e,n){lt(t,n,e)}),e.l&&tt({},function(e,n){lt(t,n,e)})}function Yt(e,t,n){n=Math.min(e.i.length,n);var r=e.l?c(e.l.Na,e.l,e):null;e:{var i=e.i;let t=-1;for(;;){const e=["count="+n];-1==t?0<n?(t=i[0].g,e.push("ofs="+t)):t=0:e.push("ofs="+t);let s=!0;for(let o=0;o<n;o++){let n=i[o].g;const a=i[o].map;if(n-=t,0>n)t=Math.max(0,i[o].g-100),s=!1;else try{St(a,e,"req"+n+"_")}catch(e){r&&r(a)}}if(s){r=e.join("&");break e}}}return e=e.i.splice(0,n),t.D=e,r}function Zt(e){if(!e.g&&!e.u){e.Y=1;var t=e.Fa;C||D(),k||(C(),k=!0),A.add(t,e),e.v=0}}function en(e){return!(e.g||e.u||3<=e.v)&&(e.Y++,e.u=Se(c(e.Fa,e),on(e,e.v)),e.v++,!0)}function tn(e){null!=e.A&&(i.clearTimeout(e.A),e.A=null)}function nn(e){e.g=new Oe(e,e.j,"rpc",e.Y),null===e.m&&(e.g.H=e.o),e.g.O=0;var t=it(e.qa);lt(t,"RID","rpc"),lt(t,"SID",e.K),lt(t,"AID",e.T),lt(t,"CI",e.F?"0":"1"),!e.F&&e.ja&&lt(t,"TO",e.ja),lt(t,"TYPE","xmlhttp"),Jt(e,t),e.m&&e.o&&Ot(t,e.m,e.o),e.L&&(e.g.I=e.L);var n=e.g;e=e.ia,n.L=1,n.v=ct(it(t)),n.m=null,n.P=!0,Ue(n,e)}function rn(e){null!=e.C&&(i.clearTimeout(e.C),e.C=null)}function sn(e,t){var n=null;if(e.g==t){rn(e),tn(e),e.g=null;var r=2}else{if(!Je(e.h,t))return;n=t.D,Ze(e.h,t),r=1}if(0!=e.G)if(t.o)if(1==r){n=t.m?t.m.length:0,t=Date.now()-t.F;var i=e.B;te(r=we(),new Ie(r,n)),Xt(e)}else Zt(e);else if(3==(i=t.s)||0==i&&0<t.X||!(1==r&&function(e,t){return!(Qe(e.h)>=e.h.j-(e.s?1:0)||(e.s?(e.i=t.D.concat(e.i),0):1==e.G||2==e.G||e.B>=(e.Va?0:e.Wa)||(e.s=Se(c(e.Ga,e,t),on(e,e.B)),e.B++,0)))}(e,t)||2==r&&en(e)))switch(n&&0<n.length&&(t=e.h,t.i=t.i.concat(n)),i){case 1:an(e,5);break;case 4:an(e,10);break;case 3:an(e,6);break;default:an(e,2)}}function on(e,t){let n=e.Ta+Math.floor(Math.random()*e.cb);return e.isActive()||(n*=2),n*t}function an(e,t){if(e.j.info("Error code "+t),2==t){var n=c(e.fb,e),r=e.Xa;const t=!r;r=new rt(r||"//www.google.com/images/cleardot.gif"),i.location&&"http"==i.location.protocol||st(r,"https"),ct(r),t?function(e,t){const n=new Ce;if(i.Image){const r=new Image;r.onload=u(Tt,n,"TestLoadImage: loaded",!0,t,r),r.onerror=u(Tt,n,"TestLoadImage: error",!1,t,r),r.onabort=u(Tt,n,"TestLoadImage: abort",!1,t,r),r.ontimeout=u(Tt,n,"TestLoadImage: timeout",!1,t,r),i.setTimeout(function(){r.ontimeout&&r.ontimeout()},1e4),r.src=e}else t(!1)}(r.toString(),n):function(e,t){new Ce;const n=new AbortController,r=setTimeout(()=>{n.abort(),Tt(0,0,!1,t)},1e4);fetch(e,{signal:n.signal}).then(e=>{clearTimeout(r),e.ok?Tt(0,0,!0,t):Tt(0,0,!1,t)}).catch(()=>{clearTimeout(r),Tt(0,0,!1,t)})}(r.toString(),n)}else Te(2);e.G=0,e.l&&e.l.sa(t),ln(e),Wt(e)}function ln(e){if(e.G=0,e.ka=[],e.l){const t=et(e.h);0==t.length&&0==e.i.length||(p(e.ka,t),p(e.ka,e.i),e.h.i.length=0,h(e.i),e.i.length=0),e.l.ra()}}function cn(e,t,n){var r=n instanceof rt?it(n):new rt(n);if(""!=r.g)t&&(r.g=t+"."+r.g),ot(r,r.s);else{var s=i.location;r=s.protocol,t=t?t+"."+s.hostname:s.hostname,s=+s.port;var o=new rt(null);r&&st(o,r),t&&(o.g=t),s&&ot(o,s),n&&(o.l=n),r=o}return n=e.D,t=e.ya,n&&t&&lt(r,n,t),lt(r,"VER",e.la),Jt(e,r),r}function un(e,t,n){if(t&&!e.J)throw Error("Can't create secondary domain capable XhrIo object.");return(t=e.Ca&&!e.pa?new Pt(new Ct({eb:n})):new Pt(e.pa)).Ha(e.J),t}function dn(){}function hn(){}function pn(e,t){ee.call(this),this.g=new Ht(t),this.l=e,this.h=t&&t.messageUrlParams||null,e=t&&t.messageHeaders||null,t&&t.clientProtocolHeaderRequired&&(e?e["X-Client-Protocol"]="webchannel":e={"X-Client-Protocol":"webchannel"}),this.g.o=e,e=t&&t.initMessageHeaders||null,t&&t.messageContentType&&(e?e["X-WebChannel-Content-Type"]=t.messageContentType:e={"X-WebChannel-Content-Type":t.messageContentType}),t&&t.va&&(e?e["X-WebChannel-Client-Profile"]=t.va:e={"X-WebChannel-Client-Profile":t.va}),this.g.S=e,(e=t&&t.Sb)&&!f(e)&&(this.g.m=e),this.v=t&&t.supportsCrossDomainXhr||!1,this.u=t&&t.sendRawJson||!1,(t=t&&t.httpSessionIdParam)&&!f(t)&&(this.g.D=t,null!==(e=this.h)&&t in e&&(t in(e=this.h)&&delete e[t])),this.j=new gn(this)}function fn(e){ge.call(this),e.__headers__&&(this.headers=e.__headers__,this.statusCode=e.__status__,delete e.__headers__,delete e.__status__);var t=e.__sm__;if(t){e:{for(const n in t){e=n;break e}e=void 0}(this.i=e)&&(e=this.i,t=null!==t&&e in t?t[e]:void 0),this.data=t}else this.data=e}function mn(){ve.call(this),this.status=1}function gn(e){this.g=e}(e=Pt.prototype).Ha=function(e){this.J=e},e.ea=function(e,t,n,r){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+e);t=t?t.toUpperCase():"GET",this.D=e,this.l="",this.m=0,this.A=!1,this.h=!0,this.g=this.o?this.o.g():Ae.g(),this.v=this.o?pe(this.o):pe(Ae),this.g.onreadystatechange=c(this.Ea,this);try{this.B=!0,this.g.open(t,String(e),!0),this.B=!1}catch(e){return void Mt(this,e)}if(e=n||"",n=new Map(this.headers),r)if(Object.getPrototypeOf(r)===Object.prototype)for(var s in r)n.set(s,r[s]);else{if("function"!=typeof r.keys||"function"!=typeof r.get)throw Error("Unknown input type for opt_headers: "+String(r));for(const e of r.keys())n.set(e,r.get(e))}r=Array.from(n.keys()).find(e=>"content-type"==e.toLowerCase()),s=i.FormData&&e instanceof i.FormData,!(0<=Array.prototype.indexOf.call($t,t,void 0))||r||s||n.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[e,t]of n)this.g.setRequestHeader(e,t);this.H&&(this.g.responseType=this.H),"withCredentials"in this.g&&this.g.withCredentials!==this.J&&(this.g.withCredentials=this.J);try{zt(this),this.u=!0,this.g.send(e),this.u=!1}catch(e){Mt(this,e)}},e.abort=function(e){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.m=e||7,te(this,"complete"),te(this,"abort"),Vt(this))},e.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),Vt(this,!0)),Pt.aa.N.call(this)},e.Ea=function(){this.s||(this.B||this.u||this.j?Ft(this):this.bb())},e.bb=function(){Ft(this)},e.isActive=function(){return!!this.g},e.Z=function(){try{return 2<jt(this)?this.g.status:-1}catch(e){return-1}},e.oa=function(){try{return this.g?this.g.responseText:""}catch(e){return""}},e.Oa=function(e){if(this.g){var t=this.g.responseText;return e&&0==t.indexOf(e)&&(t=t.substring(e.length)),ue(t)}},e.Ba=function(){return this.m},e.Ka=function(){return"string"==typeof this.l?this.l:String(this.l)},(e=Ht.prototype).la=8,e.G=1,e.connect=function(e,t,n,r){Te(0),this.W=e,this.H=t||{},n&&void 0!==r&&(this.H.OSID=n,this.H.OAID=r),this.F=this.X,this.I=cn(this,null,this.W),Xt(this)},e.Ga=function(e){if(this.s)if(this.s=null,1==this.G){if(!e){this.U=Math.floor(1e5*Math.random()),e=this.U++;const i=new Oe(this,this.j,e);let s=this.o;if(this.S&&(s?(s=b(s),_(s,this.S)):s=this.S),null!==this.m||this.O||(i.H=s,s=null),this.P)e:{for(var t=0,n=0;n<this.i.length;n++){var r=this.i[n];if(void 0===(r="__data__"in r.map&&"string"==typeof(r=r.map.__data__)?r.length:void 0))break;if(4096<(t+=r)){t=n;break e}if(4096===t||n===this.i.length-1){t=n+1;break e}}t=1e3}else t=1e3;t=Yt(this,i,t),lt(n=it(this.I),"RID",e),lt(n,"CVER",22),this.D&&lt(n,"X-HTTP-Session-Id",this.D),Jt(this,n),s&&(this.O?t="headers="+encodeURIComponent(String(Rt(s)))+"&"+t:this.m&&Ot(n,this.m,s)),Ye(this.h,i),this.Ua&&lt(n,"TYPE","init"),this.P?(lt(n,"$req",t),lt(n,"SID","null"),i.T=!0,Me(i,n,null)):Me(i,n,t),this.G=2}}else 3==this.G&&(e?Qt(this,e):0==this.i.length||Xe(this.h)||Qt(this))},e.Fa=function(){if(this.u=null,nn(this),this.ba&&!(this.M||null==this.g||0>=this.R)){var e=2*this.R;this.j.info("BP detection timer enabled: "+e),this.A=Se(c(this.ab,this),e)}},e.ab=function(){this.A&&(this.A=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.M=!0,Te(10),Kt(this),nn(this))},e.Za=function(){null!=this.C&&(this.C=null,Kt(this),en(this),Te(19))},e.fb=function(e){e?(this.j.info("Successfully pinged google.com"),Te(2)):(this.j.info("Failed to ping google.com"),Te(1))},e.isActive=function(){return!!this.l&&this.l.isActive(this)},(e=dn.prototype).ua=function(){},e.ta=function(){},e.sa=function(){},e.ra=function(){},e.isActive=function(){return!0},e.Na=function(){},hn.prototype.g=function(e,t){return new pn(e,t)},d(pn,ee),pn.prototype.m=function(){this.g.l=this.j,this.v&&(this.g.J=!0),this.g.connect(this.l,this.h||void 0)},pn.prototype.close=function(){Gt(this.g)},pn.prototype.o=function(e){var t=this.g;if("string"==typeof e){var n={};n.__data__=e,e=n}else this.u&&((n={}).__data__=ce(e),e=n);t.i.push(new Ke(t.Ya++,e)),3==t.G&&Xt(t)},pn.prototype.N=function(){this.g.l=null,delete this.j,Gt(this.g),delete this.g,pn.aa.N.call(this)},d(fn,ge),d(mn,ve),d(gn,dn),gn.prototype.ua=function(){te(this.g,"a")},gn.prototype.ta=function(e){te(this.g,new fn(e))},gn.prototype.sa=function(e){te(this.g,new mn)},gn.prototype.ra=function(){te(this.g,"b")},hn.prototype.createWebChannel=hn.prototype.g,pn.prototype.send=pn.prototype.o,pn.prototype.open=pn.prototype.m,pn.prototype.close=pn.prototype.close,Oo=function(){return new hn},Ro=function(){return we()},No=ye,Do={mb:0,pb:1,qb:2,Jb:3,Ob:4,Lb:5,Mb:6,Kb:7,Ib:8,Nb:9,PROXY:10,NOPROXY:11,Gb:12,Cb:13,Db:14,Bb:15,Eb:16,Fb:17,ib:18,hb:19,jb:20},De.NO_ERROR=0,De.TIMEOUT=8,De.HTTP_ERROR=6,Ao=De,Ne.COMPLETE="complete",ko=Ne,fe.EventType=me,me.OPEN="a",me.CLOSE="b",me.ERROR="c",me.MESSAGE="d",ee.prototype.listen=ee.prototype.K,Co=fe,Pt.prototype.listenOnce=Pt.prototype.L,Pt.prototype.getLastError=Pt.prototype.Ka,Pt.prototype.getLastErrorCode=Pt.prototype.Ba,Pt.prototype.getStatus=Pt.prototype.Z,Pt.prototype.getResponseJson=Pt.prototype.Oa,Pt.prototype.getResponseText=Pt.prototype.oa,Pt.prototype.send=Pt.prototype.ea,Pt.prototype.setWithCredentials=Pt.prototype.Ha,So=Pt}).apply(void 0!==Po?Po:"undefined"!=typeof self?self:"undefined"!=typeof window?window:{});const Lo="@firebase/firestore",$o="4.8.0";
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
 */class Mo{constructor(e){this.uid=e}isAuthenticated(){return null!=this.uid}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}Mo.UNAUTHENTICATED=new Mo(null),Mo.GOOGLE_CREDENTIALS=new Mo("google-credentials-uid"),Mo.FIRST_PARTY=new Mo("first-party-uid"),Mo.MOCK_USER=new Mo("mock-user");
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
let Uo="11.10.0";
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
 */const Fo=new Kt("@firebase/firestore");function Vo(){return Fo.logLevel}function zo(e,...t){if(Fo.logLevel<=jt.DEBUG){const n=t.map(qo);Fo.debug(`Firestore (${Uo}): ${e}`,...n)}}function jo(e,...t){if(Fo.logLevel<=jt.ERROR){const n=t.map(qo);Fo.error(`Firestore (${Uo}): ${e}`,...n)}}function Bo(e,...t){if(Fo.logLevel<=jt.WARN){const n=t.map(qo);Fo.warn(`Firestore (${Uo}): ${e}`,...n)}}function qo(e){if("string"==typeof e)return e;try{
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
 */function Ho(e,t,n){let r="Unexpected state";"string"==typeof t?r=t:n=t,Go(e,r,n)}function Go(e,t,n){let r=`FIRESTORE (${Uo}) INTERNAL ASSERTION FAILED: ${t} (ID: ${e.toString(16)})`;if(void 0!==n)try{r+=" CONTEXT: "+JSON.stringify(n)}catch(e){r+=" CONTEXT: "+n}throw jo(r),new Error(r)}function Ko(e,t,n,r){let i="Unexpected state";"string"==typeof n?i=n:r=n,e||Go(t,i,r)}function Wo(e,t){return e}
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
 */const Xo={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class Qo extends Ct{constructor(e,t){super(e,t),this.code=e,this.message=t,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}
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
 */class Jo{constructor(){this.promise=new Promise((e,t)=>{this.resolve=e,this.reject=t})}}
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
 */class Yo{constructor(e,t){this.user=t,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class Zo{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,t){e.enqueueRetryable(()=>t(Mo.UNAUTHENTICATED))}shutdown(){}}class ea{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,t){this.changeListener=t,e.enqueueRetryable(()=>t(this.token.user))}shutdown(){this.changeListener=null}}class ta{constructor(e){this.t=e,this.currentUser=Mo.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,t){Ko(void 0===this.o,42304);let n=this.i;const r=e=>this.i!==n?(n=this.i,t(e)):Promise.resolve();let i=new Jo;this.o=()=>{this.i++,this.currentUser=this.u(),i.resolve(),i=new Jo,e.enqueueRetryable(()=>r(this.currentUser))};const s=()=>{const t=i;e.enqueueRetryable(async()=>{await t.promise,await r(this.currentUser)})},o=e=>{zo("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=e,this.o&&(this.auth.addAuthTokenListener(this.o),s())};this.t.onInit(e=>o(e)),setTimeout(()=>{if(!this.auth){const e=this.t.getImmediate({optional:!0});e?o(e):(zo("FirebaseAuthCredentialsProvider","Auth not yet detected"),i.resolve(),i=new Jo)}},0),s()}getToken(){const e=this.i,t=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(t).then(t=>this.i!==e?(zo("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):t?(Ko("string"==typeof t.accessToken,31837,{l:t}),new Yo(t.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.o&&this.auth.removeAuthTokenListener(this.o),this.o=void 0}u(){const e=this.auth&&this.auth.getUid();return Ko(null===e||"string"==typeof e,2055,{h:e}),new Mo(e)}}class na{constructor(e,t,n){this.P=e,this.T=t,this.I=n,this.type="FirstParty",this.user=Mo.FIRST_PARTY,this.A=new Map}R(){return this.I?this.I():null}get headers(){this.A.set("X-Goog-AuthUser",this.P);const e=this.R();return e&&this.A.set("Authorization",e),this.T&&this.A.set("X-Goog-Iam-Authorization-Token",this.T),this.A}}class ra{constructor(e,t,n){this.P=e,this.T=t,this.I=n}getToken(){return Promise.resolve(new na(this.P,this.T,this.I))}start(e,t){e.enqueueRetryable(()=>t(Mo.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class ia{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class sa{constructor(e,t){this.V=t,this.forceRefresh=!1,this.appCheck=null,this.m=null,this.p=null,Xn(e)&&e.settings.appCheckToken&&(this.p=e.settings.appCheckToken)}start(e,t){Ko(void 0===this.o,3512);const n=e=>{null!=e.error&&zo("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${e.error.message}`);const n=e.token!==this.m;return this.m=e.token,zo("FirebaseAppCheckTokenProvider",`Received ${n?"new":"existing"} token.`),n?t(e.token):Promise.resolve()};this.o=t=>{e.enqueueRetryable(()=>n(t))};const r=e=>{zo("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=e,this.o&&this.appCheck.addTokenListener(this.o)};this.V.onInit(e=>r(e)),setTimeout(()=>{if(!this.appCheck){const e=this.V.getImmediate({optional:!0});e?r(e):zo("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){if(this.p)return Promise.resolve(new ia(this.p));const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(e=>e?(Ko("string"==typeof e.token,44558,{tokenResult:e}),this.m=e.token,new ia(e.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.o&&this.appCheck.removeTokenListener(this.o),this.o=void 0}}
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
 */function oa(e){const t="undefined"!=typeof self&&(self.crypto||self.msCrypto),n=new Uint8Array(e);if(t&&"function"==typeof t.getRandomValues)t.getRandomValues(n);else for(let t=0;t<e;t++)n[t]=Math.floor(256*Math.random());return n}
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
 */function aa(){return new TextEncoder}
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
 */class la{static newId(){const e=62*Math.floor(256/62);let t="";for(;t.length<20;){const n=oa(40);for(let r=0;r<n.length;++r)t.length<20&&n[r]<e&&(t+="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789".charAt(n[r]%62))}return t}}function ca(e,t){return e<t?-1:e>t?1:0}function ua(e,t){let n=0;for(;n<e.length&&n<t.length;){const r=e.codePointAt(n),i=t.codePointAt(n);if(r!==i){if(r<128&&i<128)return ca(r,i);{const s=aa(),o=ha(s.encode(da(e,n)),s.encode(da(t,n)));return 0!==o?o:ca(r,i)}}n+=r>65535?2:1}return ca(e.length,t.length)}function da(e,t){return e.codePointAt(t)>65535?e.substring(t,t+2):e.substring(t,t+1)}function ha(e,t){for(let n=0;n<e.length&&n<t.length;++n)if(e[n]!==t[n])return ca(e[n],t[n]);return ca(e.length,t.length)}function pa(e,t,n){return e.length===t.length&&e.every((e,r)=>n(e,t[r]))}function fa(e){return e+"\0"}
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
 */const ma="__name__";class ga{constructor(e,t,n){void 0===t?t=0:t>e.length&&Ho(637,{offset:t,range:e.length}),void 0===n?n=e.length-t:n>e.length-t&&Ho(1746,{length:n,range:e.length-t}),this.segments=e,this.offset=t,this.len=n}get length(){return this.len}isEqual(e){return 0===ga.comparator(this,e)}child(e){const t=this.segments.slice(this.offset,this.limit());return e instanceof ga?e.forEach(e=>{t.push(e)}):t.push(e),this.construct(t)}limit(){return this.offset+this.length}popFirst(e){return e=void 0===e?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return 0===this.length}isPrefixOf(e){if(e.length<this.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}forEach(e){for(let t=this.offset,n=this.limit();t<n;t++)e(this.segments[t])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,t){const n=Math.min(e.length,t.length);for(let r=0;r<n;r++){const n=ga.compareSegments(e.get(r),t.get(r));if(0!==n)return n}return ca(e.length,t.length)}static compareSegments(e,t){const n=ga.isNumericId(e),r=ga.isNumericId(t);return n&&!r?-1:!n&&r?1:n&&r?ga.extractNumericId(e).compare(ga.extractNumericId(t)):ua(e,t)}static isNumericId(e){return e.startsWith("__id")&&e.endsWith("__")}static extractNumericId(e){return Eo.fromString(e.substring(4,e.length-2))}}class va extends ga{construct(e,t,n){return new va(e,t,n)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...e){const t=[];for(const n of e){if(n.indexOf("//")>=0)throw new Qo(Xo.INVALID_ARGUMENT,`Invalid segment (${n}). Paths must not contain // in them.`);t.push(...n.split("/").filter(e=>e.length>0))}return new va(t)}static emptyPath(){return new va([])}}const ya=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class ba extends ga{construct(e,t,n){return new ba(e,t,n)}static isValidIdentifier(e){return ya.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),ba.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return 1===this.length&&this.get(0)===ma}static keyField(){return new ba([ma])}static fromServerFormat(e){const t=[];let n="",r=0;const i=()=>{if(0===n.length)throw new Qo(Xo.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);t.push(n),n=""};let s=!1;for(;r<e.length;){const t=e[r];if("\\"===t){if(r+1===e.length)throw new Qo(Xo.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const t=e[r+1];if("\\"!==t&&"."!==t&&"`"!==t)throw new Qo(Xo.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);n+=t,r+=2}else"`"===t?(s=!s,r++):"."!==t||s?(n+=t,r++):(i(),r++)}if(i(),s)throw new Qo(Xo.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new ba(t)}static emptyPath(){return new ba([])}}
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
 */class wa{constructor(e){this.path=e}static fromPath(e){return new wa(va.fromString(e))}static fromName(e){return new wa(va.fromString(e).popFirst(5))}static empty(){return new wa(va.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return null!==e&&0===va.comparator(this.path,e.path)}toString(){return this.path.toString()}static comparator(e,t){return va.comparator(e.path,t.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new wa(new va(e.slice()))}}
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
 */function _a(e,t,n){if(!n)throw new Qo(Xo.INVALID_ARGUMENT,`Function ${e}() cannot be called with an empty ${t}.`)}function xa(e){if(!wa.isDocumentKey(e))throw new Qo(Xo.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${e} has ${e.length}.`)}function Ea(e){if(wa.isDocumentKey(e))throw new Qo(Xo.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${e} has ${e.length}.`)}function Ta(e){return"object"==typeof e&&null!==e&&(Object.getPrototypeOf(e)===Object.prototype||null===Object.getPrototypeOf(e))}function Ia(e){if(void 0===e)return"undefined";if(null===e)return"null";if("string"==typeof e)return e.length>20&&(e=`${e.substring(0,20)}...`),JSON.stringify(e);if("number"==typeof e||"boolean"==typeof e)return""+e;if("object"==typeof e){if(e instanceof Array)return"an array";{const t=function(e){return e.constructor?e.constructor.name:null}(e);return t?`a custom ${t} object`:"an object"}}return"function"==typeof e?"a function":Ho(12329,{type:typeof e})}function Sa(e,t){if("_delegate"in e&&(e=e._delegate),!(e instanceof t)){if(t.name===e.constructor.name)throw new Qo(Xo.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=Ia(e);throw new Qo(Xo.INVALID_ARGUMENT,`Expected type '${t.name}', but it was: ${n}`)}}return e}
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
function Ca(e,t){const n={typeString:e};return t&&(n.value=t),n}function ka(e,t){if(!Ta(e))throw new Qo(Xo.INVALID_ARGUMENT,"JSON must be an object");let n;for(const r in t)if(t[r]){const i=t[r].typeString,s="value"in t[r]?{value:t[r].value}:void 0;if(!(r in e)){n=`JSON missing required field: '${r}'`;break}const o=e[r];if(i&&typeof o!==i){n=`JSON field '${r}' must be a ${i}.`;break}if(void 0!==s&&o!==s.value){n=`Expected '${r}' field to equal '${s.value}'`;break}}if(n)throw new Qo(Xo.INVALID_ARGUMENT,n);return!0}
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
 */const Aa=-62135596800,Da=1e6;class Na{static now(){return Na.fromMillis(Date.now())}static fromDate(e){return Na.fromMillis(e.getTime())}static fromMillis(e){const t=Math.floor(e/1e3),n=Math.floor((e-1e3*t)*Da);return new Na(t,n)}constructor(e,t){if(this.seconds=e,this.nanoseconds=t,t<0)throw new Qo(Xo.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(t>=1e9)throw new Qo(Xo.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(e<Aa)throw new Qo(Xo.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new Qo(Xo.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/Da}_compareTo(e){return this.seconds===e.seconds?ca(this.nanoseconds,e.nanoseconds):ca(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{type:Na._jsonSchemaVersion,seconds:this.seconds,nanoseconds:this.nanoseconds}}static fromJSON(e){if(ka(e,Na._jsonSchema))return new Na(e.seconds,e.nanoseconds)}valueOf(){const e=this.seconds-Aa;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}Na._jsonSchemaVersion="firestore/timestamp/1.0",Na._jsonSchema={type:Ca("string",Na._jsonSchemaVersion),seconds:Ca("number"),nanoseconds:Ca("number")};
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
class Ra{static fromTimestamp(e){return new Ra(e)}static min(){return new Ra(new Na(0,0))}static max(){return new Ra(new Na(253402300799,999999999))}constructor(e){this.timestamp=e}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}
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
 */class Oa{constructor(e,t,n,r){this.indexId=e,this.collectionGroup=t,this.fields=n,this.indexState=r}}function Pa(e){return e.fields.find(e=>2===e.kind)}function La(e){return e.fields.filter(e=>2!==e.kind)}Oa.UNKNOWN_ID=-1;class $a{constructor(e,t){this.fieldPath=e,this.kind=t}}class Ma{constructor(e,t){this.sequenceNumber=e,this.offset=t}static empty(){return new Ma(0,Fa.min())}}function Ua(e){return new Fa(e.readTime,e.key,-1)}class Fa{constructor(e,t,n){this.readTime=e,this.documentKey=t,this.largestBatchId=n}static min(){return new Fa(Ra.min(),wa.empty(),-1)}static max(){return new Fa(Ra.max(),wa.empty(),-1)}}function Va(e,t){let n=e.readTime.compareTo(t.readTime);return 0!==n?n:(n=wa.comparator(e.documentKey,t.documentKey),0!==n?n:ca(e.largestBatchId,t.largestBatchId)
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
 */)}const za="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class ja{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(e=>e())}}
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
 */async function Ba(e){if(e.code!==Xo.FAILED_PRECONDITION||e.message!==za)throw e;zo("LocalStore","Unexpectedly lost primary lease")}
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
 */class qa{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e(e=>{this.isDone=!0,this.result=e,this.nextCallback&&this.nextCallback(e)},e=>{this.isDone=!0,this.error=e,this.catchCallback&&this.catchCallback(e)})}catch(e){return this.next(void 0,e)}next(e,t){return this.callbackAttached&&Ho(59440),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(t,this.error):this.wrapSuccess(e,this.result):new qa((n,r)=>{this.nextCallback=t=>{this.wrapSuccess(e,t).next(n,r)},this.catchCallback=e=>{this.wrapFailure(t,e).next(n,r)}})}toPromise(){return new Promise((e,t)=>{this.next(e,t)})}wrapUserFunction(e){try{const t=e();return t instanceof qa?t:qa.resolve(t)}catch(e){return qa.reject(e)}}wrapSuccess(e,t){return e?this.wrapUserFunction(()=>e(t)):qa.resolve(t)}wrapFailure(e,t){return e?this.wrapUserFunction(()=>e(t)):qa.reject(t)}static resolve(e){return new qa((t,n)=>{t(e)})}static reject(e){return new qa((t,n)=>{n(e)})}static waitFor(e){return new qa((t,n)=>{let r=0,i=0,s=!1;e.forEach(e=>{++r,e.next(()=>{++i,s&&i===r&&t()},e=>n(e))}),s=!0,i===r&&t()})}static or(e){let t=qa.resolve(!1);for(const n of e)t=t.next(e=>e?qa.resolve(e):n());return t}static forEach(e,t){const n=[];return e.forEach((e,r)=>{n.push(t.call(this,e,r))}),this.waitFor(n)}static mapArray(e,t){return new qa((n,r)=>{const i=e.length,s=new Array(i);let o=0;for(let a=0;a<i;a++){const l=a;t(e[l]).next(e=>{s[l]=e,++o,o===i&&n(s)},e=>r(e))}})}static doWhile(e,t){return new qa((n,r)=>{const i=()=>{!0===e()?t().next(()=>{i()},r):n()};i()})}}
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
 */const Ha="SimpleDb";class Ga{static open(e,t,n,r){try{return new Ga(t,e.transaction(r,n))}catch(e){throw new Qa(t,e)}}constructor(e,t){this.action=e,this.transaction=t,this.aborted=!1,this.S=new Jo,this.transaction.oncomplete=()=>{this.S.resolve()},this.transaction.onabort=()=>{t.error?this.S.reject(new Qa(e,t.error)):this.S.resolve()},this.transaction.onerror=t=>{const n=tl(t.target.error);this.S.reject(new Qa(e,n))}}get D(){return this.S.promise}abort(e){e&&this.S.reject(e),this.aborted||(zo(Ha,"Aborting transaction:",e?e.message:"Client-initiated abort"),this.aborted=!0,this.transaction.abort())}v(){const e=this.transaction;this.aborted||"function"!=typeof e.commit||e.commit()}store(e){const t=this.transaction.objectStore(e);return new Ya(t)}}class Ka{static delete(e){return zo(Ha,"Removing database:",e),Za(ct().indexedDB.deleteDatabase(e)).toPromise()}static C(){if(!St())return!1;if(Ka.F())return!0;const e=xt(),t=Ka.M(e),n=0<t&&t<10,r=Wa(e),i=0<r&&r<4.5;return!(e.indexOf("MSIE ")>0||e.indexOf("Trident/")>0||e.indexOf("Edge/")>0||n||i)}static F(){var e;return"undefined"!=typeof process&&"YES"===(null===(e=process.__PRIVATE_env)||void 0===e?void 0:e.O)}static N(e,t){return e.store(t)}static M(e){const t=e.match(/i(?:phone|pad|pod) os ([\d_]+)/i),n=t?t[1].split("_").slice(0,2).join("."):"-1";return Number(n)}constructor(e,t,n){this.name=e,this.version=t,this.B=n,this.L=null,12.2===Ka.M(xt())&&jo("Firestore persistence suffers from a bug in iOS 12.2 Safari that may cause your app to stop working. See https://stackoverflow.com/q/56496296/110915 for details and a potential workaround.")}async k(e){return this.db||(zo(Ha,"Opening database:",this.name),this.db=await new Promise((t,n)=>{const r=indexedDB.open(this.name,this.version);r.onsuccess=e=>{const n=e.target.result;t(n)},r.onblocked=()=>{n(new Qa(e,"Cannot upgrade IndexedDB schema while another tab is open. Close all tabs that access Firestore and reload this page to proceed."))},r.onerror=t=>{const r=t.target.error;"VersionError"===r.name?n(new Qo(Xo.FAILED_PRECONDITION,"A newer version of the Firestore SDK was previously used and so the persisted data is not compatible with the version of the SDK you are now using. The SDK will operate with persistence disabled. If you need persistence, please re-upgrade to a newer version of the SDK or else clear the persisted IndexedDB data for your app to start fresh.")):"InvalidStateError"===r.name?n(new Qo(Xo.FAILED_PRECONDITION,"Unable to open an IndexedDB connection. This could be due to running in a private browsing session on a browser whose private browsing sessions do not support IndexedDB: "+r)):n(new Qa(e,r))},r.onupgradeneeded=e=>{zo(Ha,'Database "'+this.name+'" requires upgrade from version:',e.oldVersion);const t=e.target.result;if(null!==this.L&&this.L!==e.oldVersion)throw new Error(`refusing to open IndexedDB database due to potential corruption of the IndexedDB database data; this corruption could be caused by clicking the "clear site data" button in a web browser; try reloading the web page to re-initialize the IndexedDB database: lastClosedDbVersion=${this.L}, event.oldVersion=${e.oldVersion}, event.newVersion=${e.newVersion}, db.version=${t.version}`);this.B.q(t,r.transaction,e.oldVersion,this.version).next(()=>{zo(Ha,"Database upgrade to version "+this.version+" complete")})}}),this.db.addEventListener("close",e=>{const t=e.target;this.L=t.version},{passive:!0})),this.db.addEventListener("versionchange",e=>{var t;null===e.newVersion&&(Bo('Received "versionchange" event with newVersion===null; notifying the registered DatabaseDeletedListener, if any'),null===(t=this.databaseDeletedListener)||void 0===t||t.call(this))},{passive:!0}),this.db}setDatabaseDeletedListener(e){if(this.databaseDeletedListener)throw new Error("setDatabaseDeletedListener() may only be called once, and it has already been called");this.databaseDeletedListener=e}async runTransaction(e,t,n,r){const i="readonly"===t;let s=0;for(;;){++s;try{this.db=await this.k(e);const t=Ga.open(this.db,e,i?"readonly":"readwrite",n),s=r(t).next(e=>(t.v(),e)).catch(e=>(t.abort(e),qa.reject(e))).toPromise();return s.catch(()=>{}),await t.D,s}catch(e){const t=e,n="FirebaseError"!==t.name&&s<3;if(zo(Ha,"Transaction failed with error:",t.message,"Retrying:",n),this.close(),!n)return Promise.reject(t)}}}close(){this.db&&this.db.close(),this.db=void 0}}function Wa(e){const t=e.match(/Android ([\d.]+)/i),n=t?t[1].split(".").slice(0,2).join("."):"-1";return Number(n)}class Xa{constructor(e){this.$=e,this.U=!1,this.K=null}get isDone(){return this.U}get W(){return this.K}set cursor(e){this.$=e}done(){this.U=!0}G(e){this.K=e}delete(){return Za(this.$.delete())}}class Qa extends Qo{constructor(e,t){super(Xo.UNAVAILABLE,`IndexedDB transaction '${e}' failed: ${t}`),this.name="IndexedDbTransactionError"}}function Ja(e){return"IndexedDbTransactionError"===e.name}class Ya{constructor(e){this.store=e}put(e,t){let n;return void 0!==t?(zo(Ha,"PUT",this.store.name,e,t),n=this.store.put(t,e)):(zo(Ha,"PUT",this.store.name,"<auto-key>",e),n=this.store.put(e)),Za(n)}add(e){return zo(Ha,"ADD",this.store.name,e,e),Za(this.store.add(e))}get(e){return Za(this.store.get(e)).next(t=>(void 0===t&&(t=null),zo(Ha,"GET",this.store.name,e,t),t))}delete(e){return zo(Ha,"DELETE",this.store.name,e),Za(this.store.delete(e))}count(){return zo(Ha,"COUNT",this.store.name),Za(this.store.count())}j(e,t){const n=this.options(e,t),r=n.index?this.store.index(n.index):this.store;if("function"==typeof r.getAll){const e=r.getAll(n.range);return new qa((t,n)=>{e.onerror=e=>{n(e.target.error)},e.onsuccess=e=>{t(e.target.result)}})}{const e=this.cursor(n),t=[];return this.J(e,(e,n)=>{t.push(n)}).next(()=>t)}}H(e,t){const n=this.store.getAll(e,null===t?void 0:t);return new qa((e,t)=>{n.onerror=e=>{t(e.target.error)},n.onsuccess=t=>{e(t.target.result)}})}Y(e,t){zo(Ha,"DELETE ALL",this.store.name);const n=this.options(e,t);n.Z=!1;const r=this.cursor(n);return this.J(r,(e,t,n)=>n.delete())}X(e,t){let n;t?n=e:(n={},t=e);const r=this.cursor(n);return this.J(r,t)}ee(e){const t=this.cursor({});return new qa((n,r)=>{t.onerror=e=>{const t=tl(e.target.error);r(t)},t.onsuccess=t=>{const r=t.target.result;r?e(r.primaryKey,r.value).next(e=>{e?r.continue():n()}):n()}})}J(e,t){const n=[];return new qa((r,i)=>{e.onerror=e=>{i(e.target.error)},e.onsuccess=e=>{const i=e.target.result;if(!i)return void r();const s=new Xa(i),o=t(i.primaryKey,i.value,s);if(o instanceof qa){const e=o.catch(e=>(s.done(),qa.reject(e)));n.push(e)}s.isDone?r():null===s.W?i.continue():i.continue(s.W)}}).next(()=>qa.waitFor(n))}options(e,t){let n;return void 0!==e&&("string"==typeof e?n=e:t=e),{index:n,range:t}}cursor(e){let t="next";if(e.reverse&&(t="prev"),e.index){const n=this.store.index(e.index);return e.Z?n.openKeyCursor(e.range,t):n.openCursor(e.range,t)}return this.store.openCursor(e.range,t)}}function Za(e){return new qa((t,n)=>{e.onsuccess=e=>{const n=e.target.result;t(n)},e.onerror=e=>{const t=tl(e.target.error);n(t)}})}let el=!1;function tl(e){const t=Ka.M(xt());if(t>=12.2&&t<13){const t="An internal error was encountered in the Indexed Database server";if(e.message.indexOf(t)>=0){const e=new Qo("internal",`IOS_INDEXEDDB_BUG1: IndexedDb has thrown '${t}'. This is likely due to an unavoidable bug in iOS. See https://stackoverflow.com/q/56496296/110915 for details and a potential workaround.`);return el||(el=!0,setTimeout(()=>{throw e},0)),e}}return e}const nl="IndexBackfiller";class rl{constructor(e,t){this.asyncQueue=e,this.te=t,this.task=null}start(){this.ne(15e3)}stop(){this.task&&(this.task.cancel(),this.task=null)}get started(){return null!==this.task}ne(e){zo(nl,`Scheduled in ${e}ms`),this.task=this.asyncQueue.enqueueAfterDelay("index_backfill",e,async()=>{this.task=null;try{const e=await this.te.re();zo(nl,`Documents written: ${e}`)}catch(e){Ja(e)?zo(nl,"Ignoring IndexedDB error during index backfill: ",e):await Ba(e)}await this.ne(6e4)})}}class il{constructor(e,t){this.localStore=e,this.persistence=t}async re(e=50){return this.persistence.runTransaction("Backfill Indexes","readwrite-primary",t=>this.ie(t,e))}ie(e,t){const n=new Set;let r=t,i=!0;return qa.doWhile(()=>!0===i&&r>0,()=>this.localStore.indexManager.getNextCollectionGroupToUpdate(e).next(t=>{if(null!==t&&!n.has(t))return zo(nl,`Processing collection: ${t}`),this.se(e,t,r).next(e=>{r-=e,n.add(t)});i=!1})).next(()=>t-r)}se(e,t,n){return this.localStore.indexManager.getMinOffsetFromCollectionGroup(e,t).next(r=>this.localStore.localDocuments.getNextDocuments(e,t,r,n).next(n=>{const i=n.changes;return this.localStore.indexManager.updateIndexEntries(e,i).next(()=>this.oe(r,n)).next(n=>(zo(nl,`Updating offset: ${n}`),this.localStore.indexManager.updateCollectionGroup(e,t,n))).next(()=>i.size)}))}oe(e,t){let n=e;return t.changes.forEach((e,t)=>{const r=Ua(t);Va(r,n)>0&&(n=r)}),new Fa(n.readTime,n.documentKey,Math.max(t.batchId,e.largestBatchId))}}
/**
 * @license
 * Copyright 2018 Google LLC
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
 */class sl{constructor(e,t){this.previousValue=e,t&&(t.sequenceNumberHandler=e=>this._e(e),this.ae=e=>t.writeSequenceNumber(e))}_e(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.ae&&this.ae(e),e}}sl.ue=-1;
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
const ol=-1;function al(e){return null==e}function ll(e){return 0===e&&1/e==-1/0}
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
const cl="";function ul(e){let t="";for(let n=0;n<e.length;n++)t.length>0&&(t=hl(t)),t=dl(e.get(n),t);return hl(t)}function dl(e,t){let n=t;const r=e.length;for(let t=0;t<r;t++){const r=e.charAt(t);switch(r){case"\0":n+="";break;case cl:n+="";break;default:n+=r}}return n}function hl(e){return e+cl+""}function pl(e){const t=e.length;if(Ko(t>=2,64408,{path:e}),2===t)return Ko(e.charAt(0)===cl&&""===e.charAt(1),56145,{path:e}),va.emptyPath();const n=t-2,r=[];let i="";for(let s=0;s<t;){const t=e.indexOf(cl,s);switch((t<0||t>n)&&Ho(50515,{path:e}),e.charAt(t+1)){case"":const n=e.substring(s,t);let o;0===i.length?o=n:(i+=n,o=i,i=""),r.push(o);break;case"":i+=e.substring(s,t),i+="\0";break;case"":i+=e.substring(s,t+1);break;default:Ho(61167,{path:e})}s=t+2}return new va(r)}
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
 */const fl="remoteDocuments",ml="owner",gl="owner",vl="mutationQueues",yl="mutations",bl="batchId",wl="userMutationsIndex",_l=["userId","batchId"];
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
 */function xl(e,t){return[e,ul(t)]}function El(e,t,n){return[e,ul(t),n]}const Tl={},Il="documentMutations",Sl="remoteDocumentsV14",Cl=["prefixPath","collectionGroup","readTime","documentId"],kl="documentKeyIndex",Al=["prefixPath","collectionGroup","documentId"],Dl="collectionGroupIndex",Nl=["collectionGroup","readTime","prefixPath","documentId"],Rl="remoteDocumentGlobal",Ol="remoteDocumentGlobalKey",Pl="targets",Ll="queryTargetsIndex",$l=["canonicalId","targetId"],Ml="targetDocuments",Ul=["targetId","path"],Fl="documentTargetsIndex",Vl=["path","targetId"],zl="targetGlobalKey",jl="targetGlobal",Bl="collectionParents",ql=["collectionId","parent"],Hl="clientMetadata",Gl="bundles",Kl="namedQueries",Wl="indexConfiguration",Xl="collectionGroupIndex",Ql="indexState",Jl=["indexId","uid"],Yl="sequenceNumberIndex",Zl=["uid","sequenceNumber"],ec="indexEntries",tc=["indexId","uid","arrayValue","directionalValue","orderedDocumentKey","documentKey"],nc="documentKeyIndex",rc=["indexId","uid","orderedDocumentKey"],ic="documentOverlays",sc=["userId","collectionPath","documentId"],oc="collectionPathOverlayIndex",ac=["userId","collectionPath","largestBatchId"],lc="collectionGroupOverlayIndex",cc=["userId","collectionGroup","largestBatchId"],uc="globals",dc=[vl,yl,Il,fl,Pl,ml,jl,Ml,Hl,Rl,Bl,Gl,Kl],hc=[...dc,ic],pc=[vl,yl,Il,Sl,Pl,ml,jl,Ml,Hl,Rl,Bl,Gl,Kl,ic],fc=pc,mc=[...fc,Wl,Ql,ec],gc=mc,vc=[...mc,uc],yc=vc;
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
 */class bc extends ja{constructor(e,t){super(),this.ce=e,this.currentSequenceNumber=t}}function wc(e,t){const n=Wo(e);return Ka.N(n.ce,t)}
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
 */function _c(e){let t=0;for(const n in e)Object.prototype.hasOwnProperty.call(e,n)&&t++;return t}function xc(e,t){for(const n in e)Object.prototype.hasOwnProperty.call(e,n)&&t(n,e[n])}function Ec(e){for(const t in e)if(Object.prototype.hasOwnProperty.call(e,t))return!1;return!0}
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
 */class Tc{constructor(e,t){this.comparator=e,this.root=t||Sc.EMPTY}insert(e,t){return new Tc(this.comparator,this.root.insert(e,t,this.comparator).copy(null,null,Sc.BLACK,null,null))}remove(e){return new Tc(this.comparator,this.root.remove(e,this.comparator).copy(null,null,Sc.BLACK,null,null))}get(e){let t=this.root;for(;!t.isEmpty();){const n=this.comparator(e,t.key);if(0===n)return t.value;n<0?t=t.left:n>0&&(t=t.right)}return null}indexOf(e){let t=0,n=this.root;for(;!n.isEmpty();){const r=this.comparator(e,n.key);if(0===r)return t+n.left.size;r<0?n=n.left:(t+=n.left.size+1,n=n.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((t,n)=>(e(t,n),!1))}toString(){const e=[];return this.inorderTraversal((t,n)=>(e.push(`${t}:${n}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new Ic(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new Ic(this.root,e,this.comparator,!1)}getReverseIterator(){return new Ic(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new Ic(this.root,e,this.comparator,!0)}}class Ic{constructor(e,t,n,r){this.isReverse=r,this.nodeStack=[];let i=1;for(;!e.isEmpty();)if(i=t?n(e.key,t):1,t&&r&&(i*=-1),i<0)e=this.isReverse?e.left:e.right;else{if(0===i){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const t={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return t}hasNext(){return this.nodeStack.length>0}peek(){if(0===this.nodeStack.length)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class Sc{constructor(e,t,n,r,i){this.key=e,this.value=t,this.color=null!=n?n:Sc.RED,this.left=null!=r?r:Sc.EMPTY,this.right=null!=i?i:Sc.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,t,n,r,i){return new Sc(null!=e?e:this.key,null!=t?t:this.value,null!=n?n:this.color,null!=r?r:this.left,null!=i?i:this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,t,n){let r=this;const i=n(e,r.key);return r=i<0?r.copy(null,null,null,r.left.insert(e,t,n),null):0===i?r.copy(null,t,null,null,null):r.copy(null,null,null,null,r.right.insert(e,t,n)),r.fixUp()}removeMin(){if(this.left.isEmpty())return Sc.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,t){let n,r=this;if(t(e,r.key)<0)r.left.isEmpty()||r.left.isRed()||r.left.left.isRed()||(r=r.moveRedLeft()),r=r.copy(null,null,null,r.left.remove(e,t),null);else{if(r.left.isRed()&&(r=r.rotateRight()),r.right.isEmpty()||r.right.isRed()||r.right.left.isRed()||(r=r.moveRedRight()),0===t(e,r.key)){if(r.right.isEmpty())return Sc.EMPTY;n=r.right.min(),r=r.copy(n.key,n.value,null,null,r.right.removeMin())}r=r.copy(null,null,null,null,r.right.remove(e,t))}return r.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,Sc.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,Sc.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),t=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,t)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed())throw Ho(43730,{key:this.key,value:this.value});if(this.right.isRed())throw Ho(14113,{key:this.key,value:this.value});const e=this.left.check();if(e!==this.right.check())throw Ho(27949);return e+(this.isRed()?0:1)}}Sc.EMPTY=null,Sc.RED=!0,Sc.BLACK=!1,Sc.EMPTY=new class{constructor(){this.size=0}get key(){throw Ho(57766)}get value(){throw Ho(16141)}get color(){throw Ho(16727)}get left(){throw Ho(29726)}get right(){throw Ho(36894)}copy(e,t,n,r,i){return this}insert(e,t,n){return new Sc(e,t)}remove(e,t){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};
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
class Cc{constructor(e){this.comparator=e,this.data=new Tc(this.comparator)}has(e){return null!==this.data.get(e)}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((t,n)=>(e(t),!1))}forEachInRange(e,t){const n=this.data.getIteratorFrom(e[0]);for(;n.hasNext();){const r=n.getNext();if(this.comparator(r.key,e[1])>=0)return;t(r.key)}}forEachWhile(e,t){let n;for(n=void 0!==t?this.data.getIteratorFrom(t):this.data.getIterator();n.hasNext();)if(!e(n.getNext().key))return}firstAfterOrEqual(e){const t=this.data.getIteratorFrom(e);return t.hasNext()?t.getNext().key:null}getIterator(){return new kc(this.data.getIterator())}getIteratorFrom(e){return new kc(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let t=this;return t.size<e.size&&(t=e,e=this),e.forEach(e=>{t=t.add(e)}),t}isEqual(e){if(!(e instanceof Cc))return!1;if(this.size!==e.size)return!1;const t=this.data.getIterator(),n=e.data.getIterator();for(;t.hasNext();){const e=t.getNext().key,r=n.getNext().key;if(0!==this.comparator(e,r))return!1}return!0}toArray(){const e=[];return this.forEach(t=>{e.push(t)}),e}toString(){const e=[];return this.forEach(t=>e.push(t)),"SortedSet("+e.toString()+")"}copy(e){const t=new Cc(this.comparator);return t.data=e,t}}class kc{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}function Ac(e){return e.hasNext()?e.getNext():void 0}
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
 */class Dc{constructor(e){this.fields=e,e.sort(ba.comparator)}static empty(){return new Dc([])}unionWith(e){let t=new Cc(ba.comparator);for(const e of this.fields)t=t.add(e);for(const n of e)t=t.add(n);return new Dc(t.toArray())}covers(e){for(const t of this.fields)if(t.isPrefixOf(e))return!0;return!1}isEqual(e){return pa(this.fields,e.fields,(e,t)=>e.isEqual(t))}}
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
 */class Nc extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}
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
 */class Rc{constructor(e){this.binaryString=e}static fromBase64String(e){const t=function(e){try{return atob(e)}catch(e){throw"undefined"!=typeof DOMException&&e instanceof DOMException?new Nc("Invalid base64 string: "+e):e}}(e);return new Rc(t)}static fromUint8Array(e){const t=function(e){let t="";for(let n=0;n<e.length;++n)t+=String.fromCharCode(e[n]);return t}(e);return new Rc(t)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return function(e){return btoa(e)}(this.binaryString)}toUint8Array(){return function(e){const t=new Uint8Array(e.length);for(let n=0;n<e.length;n++)t[n]=e.charCodeAt(n);return t}
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
 */(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return ca(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}Rc.EMPTY_BYTE_STRING=new Rc("");const Oc=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function Pc(e){if(Ko(!!e,39018),"string"==typeof e){let t=0;const n=Oc.exec(e);if(Ko(!!n,46558,{timestamp:e}),n[1]){let e=n[1];e=(e+"000000000").substr(0,9),t=Number(e)}const r=new Date(e);return{seconds:Math.floor(r.getTime()/1e3),nanos:t}}return{seconds:Lc(e.seconds),nanos:Lc(e.nanos)}}function Lc(e){return"number"==typeof e?e:"string"==typeof e?Number(e):0}function $c(e){return"string"==typeof e?Rc.fromBase64String(e):Rc.fromUint8Array(e)}
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
 */const Mc="server_timestamp",Uc="__type__",Fc="__previous_value__",Vc="__local_write_time__";function zc(e){var t,n;return(null===(n=((null===(t=null==e?void 0:e.mapValue)||void 0===t?void 0:t.fields)||{})[Uc])||void 0===n?void 0:n.stringValue)===Mc}function jc(e){const t=e.mapValue.fields[Fc];return zc(t)?jc(t):t}function Bc(e){const t=Pc(e.mapValue.fields[Vc].timestampValue);return new Na(t.seconds,t.nanos)}
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
 */class qc{constructor(e,t,n,r,i,s,o,a,l,c){this.databaseId=e,this.appId=t,this.persistenceKey=n,this.host=r,this.ssl=i,this.forceLongPolling=s,this.autoDetectLongPolling=o,this.longPollingOptions=a,this.useFetchStreams=l,this.isUsingEmulator=c}}const Hc="(default)";class Gc{constructor(e,t){this.projectId=e,this.database=t||Hc}static empty(){return new Gc("","")}get isDefaultDatabase(){return this.database===Hc}isEqual(e){return e instanceof Gc&&e.projectId===this.projectId&&e.database===this.database}}
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
 */const Kc="__type__",Wc="__max__",Xc={mapValue:{fields:{__type__:{stringValue:Wc}}}},Qc="__vector__",Jc="value",Yc={nullValue:"NULL_VALUE"};function Zc(e){return"nullValue"in e?0:"booleanValue"in e?1:"integerValue"in e||"doubleValue"in e?2:"timestampValue"in e?3:"stringValue"in e?5:"bytesValue"in e?6:"referenceValue"in e?7:"geoPointValue"in e?8:"arrayValue"in e?9:"mapValue"in e?zc(e)?4:gu(e)?9007199254740991:fu(e)?10:11:Ho(28295,{value:e})}function eu(e,t){if(e===t)return!0;const n=Zc(e);if(n!==Zc(t))return!1;switch(n){case 0:case 9007199254740991:return!0;case 1:return e.booleanValue===t.booleanValue;case 4:return Bc(e).isEqual(Bc(t));case 3:return function(e,t){if("string"==typeof e.timestampValue&&"string"==typeof t.timestampValue&&e.timestampValue.length===t.timestampValue.length)return e.timestampValue===t.timestampValue;const n=Pc(e.timestampValue),r=Pc(t.timestampValue);return n.seconds===r.seconds&&n.nanos===r.nanos}(e,t);case 5:return e.stringValue===t.stringValue;case 6:return function(e,t){return $c(e.bytesValue).isEqual($c(t.bytesValue))}(e,t);case 7:return e.referenceValue===t.referenceValue;case 8:return function(e,t){return Lc(e.geoPointValue.latitude)===Lc(t.geoPointValue.latitude)&&Lc(e.geoPointValue.longitude)===Lc(t.geoPointValue.longitude)}(e,t);case 2:return function(e,t){if("integerValue"in e&&"integerValue"in t)return Lc(e.integerValue)===Lc(t.integerValue);if("doubleValue"in e&&"doubleValue"in t){const n=Lc(e.doubleValue),r=Lc(t.doubleValue);return n===r?ll(n)===ll(r):isNaN(n)&&isNaN(r)}return!1}(e,t);case 9:return pa(e.arrayValue.values||[],t.arrayValue.values||[],eu);case 10:case 11:return function(e,t){const n=e.mapValue.fields||{},r=t.mapValue.fields||{};if(_c(n)!==_c(r))return!1;for(const e in n)if(n.hasOwnProperty(e)&&(void 0===r[e]||!eu(n[e],r[e])))return!1;return!0}(e,t);default:return Ho(52216,{left:e})}}function tu(e,t){return void 0!==(e.values||[]).find(e=>eu(e,t))}function nu(e,t){if(e===t)return 0;const n=Zc(e),r=Zc(t);if(n!==r)return ca(n,r);switch(n){case 0:case 9007199254740991:return 0;case 1:return ca(e.booleanValue,t.booleanValue);case 2:return function(e,t){const n=Lc(e.integerValue||e.doubleValue),r=Lc(t.integerValue||t.doubleValue);return n<r?-1:n>r?1:n===r?0:isNaN(n)?isNaN(r)?0:-1:1}(e,t);case 3:return ru(e.timestampValue,t.timestampValue);case 4:return ru(Bc(e),Bc(t));case 5:return ua(e.stringValue,t.stringValue);case 6:return function(e,t){const n=$c(e),r=$c(t);return n.compareTo(r)}(e.bytesValue,t.bytesValue);case 7:return function(e,t){const n=e.split("/"),r=t.split("/");for(let e=0;e<n.length&&e<r.length;e++){const t=ca(n[e],r[e]);if(0!==t)return t}return ca(n.length,r.length)}(e.referenceValue,t.referenceValue);case 8:return function(e,t){const n=ca(Lc(e.latitude),Lc(t.latitude));return 0!==n?n:ca(Lc(e.longitude),Lc(t.longitude))}(e.geoPointValue,t.geoPointValue);case 9:return iu(e.arrayValue,t.arrayValue);case 10:return function(e,t){var n,r,i,s;const o=e.fields||{},a=t.fields||{},l=null===(n=o[Jc])||void 0===n?void 0:n.arrayValue,c=null===(r=a[Jc])||void 0===r?void 0:r.arrayValue,u=ca((null===(i=null==l?void 0:l.values)||void 0===i?void 0:i.length)||0,(null===(s=null==c?void 0:c.values)||void 0===s?void 0:s.length)||0);return 0!==u?u:iu(l,c)}(e.mapValue,t.mapValue);case 11:return function(e,t){if(e===Xc.mapValue&&t===Xc.mapValue)return 0;if(e===Xc.mapValue)return 1;if(t===Xc.mapValue)return-1;const n=e.fields||{},r=Object.keys(n),i=t.fields||{},s=Object.keys(i);r.sort(),s.sort();for(let e=0;e<r.length&&e<s.length;++e){const t=ua(r[e],s[e]);if(0!==t)return t;const o=nu(n[r[e]],i[s[e]]);if(0!==o)return o}return ca(r.length,s.length)}(e.mapValue,t.mapValue);default:throw Ho(23264,{le:n})}}function ru(e,t){if("string"==typeof e&&"string"==typeof t&&e.length===t.length)return ca(e,t);const n=Pc(e),r=Pc(t),i=ca(n.seconds,r.seconds);return 0!==i?i:ca(n.nanos,r.nanos)}function iu(e,t){const n=e.values||[],r=t.values||[];for(let e=0;e<n.length&&e<r.length;++e){const t=nu(n[e],r[e]);if(t)return t}return ca(n.length,r.length)}function su(e){return ou(e)}function ou(e){return"nullValue"in e?"null":"booleanValue"in e?""+e.booleanValue:"integerValue"in e?""+e.integerValue:"doubleValue"in e?""+e.doubleValue:"timestampValue"in e?function(e){const t=Pc(e);return`time(${t.seconds},${t.nanos})`}(e.timestampValue):"stringValue"in e?e.stringValue:"bytesValue"in e?function(e){return $c(e).toBase64()}(e.bytesValue):"referenceValue"in e?function(e){return wa.fromName(e).toString()}(e.referenceValue):"geoPointValue"in e?function(e){return`geo(${e.latitude},${e.longitude})`}(e.geoPointValue):"arrayValue"in e?function(e){let t="[",n=!0;for(const r of e.values||[])n?n=!1:t+=",",t+=ou(r);return t+"]"}(e.arrayValue):"mapValue"in e?function(e){const t=Object.keys(e.fields||{}).sort();let n="{",r=!0;for(const i of t)r?r=!1:n+=",",n+=`${i}:${ou(e.fields[i])}`;return n+"}"}(e.mapValue):Ho(61005,{value:e})}function au(e){switch(Zc(e)){case 0:case 1:return 4;case 2:return 8;case 3:case 8:return 16;case 4:const t=jc(e);return t?16+au(t):16;case 5:return 2*e.stringValue.length;case 6:return $c(e.bytesValue).approximateByteSize();case 7:return e.referenceValue.length;case 9:return function(e){return(e.values||[]).reduce((e,t)=>e+au(t),0)}(e.arrayValue);case 10:case 11:return function(e){let t=0;return xc(e.fields,(e,n)=>{t+=e.length+au(n)}),t}(e.mapValue);default:throw Ho(13486,{value:e})}}function lu(e,t){return{referenceValue:`projects/${e.projectId}/databases/${e.database}/documents/${t.path.canonicalString()}`}}function cu(e){return!!e&&"integerValue"in e}function uu(e){return!!e&&"arrayValue"in e}function du(e){return!!e&&"nullValue"in e}function hu(e){return!!e&&"doubleValue"in e&&isNaN(Number(e.doubleValue))}function pu(e){return!!e&&"mapValue"in e}function fu(e){var t,n;return(null===(n=((null===(t=null==e?void 0:e.mapValue)||void 0===t?void 0:t.fields)||{})[Kc])||void 0===n?void 0:n.stringValue)===Qc}function mu(e){if(e.geoPointValue)return{geoPointValue:Object.assign({},e.geoPointValue)};if(e.timestampValue&&"object"==typeof e.timestampValue)return{timestampValue:Object.assign({},e.timestampValue)};if(e.mapValue){const t={mapValue:{fields:{}}};return xc(e.mapValue.fields,(e,n)=>t.mapValue.fields[e]=mu(n)),t}if(e.arrayValue){const t={arrayValue:{values:[]}};for(let n=0;n<(e.arrayValue.values||[]).length;++n)t.arrayValue.values[n]=mu(e.arrayValue.values[n]);return t}return Object.assign({},e)}function gu(e){return(((e.mapValue||{}).fields||{}).__type__||{}).stringValue===Wc}const vu={mapValue:{fields:{[Kc]:{stringValue:Qc},[Jc]:{arrayValue:{}}}}};function yu(e){return"nullValue"in e?Yc:"booleanValue"in e?{booleanValue:!1}:"integerValue"in e||"doubleValue"in e?{doubleValue:NaN}:"timestampValue"in e?{timestampValue:{seconds:Number.MIN_SAFE_INTEGER}}:"stringValue"in e?{stringValue:""}:"bytesValue"in e?{bytesValue:""}:"referenceValue"in e?lu(Gc.empty(),wa.empty()):"geoPointValue"in e?{geoPointValue:{latitude:-90,longitude:-180}}:"arrayValue"in e?{arrayValue:{}}:"mapValue"in e?fu(e)?vu:{mapValue:{}}:Ho(35942,{value:e})}function bu(e){return"nullValue"in e?{booleanValue:!1}:"booleanValue"in e?{doubleValue:NaN}:"integerValue"in e||"doubleValue"in e?{timestampValue:{seconds:Number.MIN_SAFE_INTEGER}}:"timestampValue"in e?{stringValue:""}:"stringValue"in e?{bytesValue:""}:"bytesValue"in e?lu(Gc.empty(),wa.empty()):"referenceValue"in e?{geoPointValue:{latitude:-90,longitude:-180}}:"geoPointValue"in e?{arrayValue:{}}:"arrayValue"in e?vu:"mapValue"in e?fu(e)?{mapValue:{}}:Xc:Ho(61959,{value:e})}function wu(e,t){const n=nu(e.value,t.value);return 0!==n?n:e.inclusive&&!t.inclusive?-1:!e.inclusive&&t.inclusive?1:0}function _u(e,t){const n=nu(e.value,t.value);return 0!==n?n:e.inclusive&&!t.inclusive?1:!e.inclusive&&t.inclusive?-1:0}
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
 */class xu{constructor(e){this.value=e}static empty(){return new xu({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let t=this.value;for(let n=0;n<e.length-1;++n)if(t=(t.mapValue.fields||{})[e.get(n)],!pu(t))return null;return t=(t.mapValue.fields||{})[e.lastSegment()],t||null}}set(e,t){this.getFieldsMap(e.popLast())[e.lastSegment()]=mu(t)}setAll(e){let t=ba.emptyPath(),n={},r=[];e.forEach((e,i)=>{if(!t.isImmediateParentOf(i)){const e=this.getFieldsMap(t);this.applyChanges(e,n,r),n={},r=[],t=i.popLast()}e?n[i.lastSegment()]=mu(e):r.push(i.lastSegment())});const i=this.getFieldsMap(t);this.applyChanges(i,n,r)}delete(e){const t=this.field(e.popLast());pu(t)&&t.mapValue.fields&&delete t.mapValue.fields[e.lastSegment()]}isEqual(e){return eu(this.value,e.value)}getFieldsMap(e){let t=this.value;t.mapValue.fields||(t.mapValue={fields:{}});for(let n=0;n<e.length;++n){let r=t.mapValue.fields[e.get(n)];pu(r)&&r.mapValue.fields||(r={mapValue:{fields:{}}},t.mapValue.fields[e.get(n)]=r),t=r}return t.mapValue.fields}applyChanges(e,t,n){xc(t,(t,n)=>e[t]=n);for(const t of n)delete e[t]}clone(){return new xu(mu(this.value))}}function Eu(e){const t=[];return xc(e.fields,(e,n)=>{const r=new ba([e]);if(pu(n)){const e=Eu(n.mapValue).fields;if(0===e.length)t.push(r);else for(const n of e)t.push(r.child(n))}else t.push(r)}),new Dc(t)
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
 */}class Tu{constructor(e,t,n,r,i,s,o){this.key=e,this.documentType=t,this.version=n,this.readTime=r,this.createTime=i,this.data=s,this.documentState=o}static newInvalidDocument(e){return new Tu(e,0,Ra.min(),Ra.min(),Ra.min(),xu.empty(),0)}static newFoundDocument(e,t,n,r){return new Tu(e,1,t,Ra.min(),n,r,0)}static newNoDocument(e,t){return new Tu(e,2,t,Ra.min(),Ra.min(),xu.empty(),0)}static newUnknownDocument(e,t){return new Tu(e,3,t,Ra.min(),Ra.min(),xu.empty(),2)}convertToFoundDocument(e,t){return!this.createTime.isEqual(Ra.min())||2!==this.documentType&&0!==this.documentType||(this.createTime=e),this.version=e,this.documentType=1,this.data=t,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=xu.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=xu.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=Ra.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return 1===this.documentState}get hasCommittedMutations(){return 2===this.documentState}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return 0!==this.documentType}isFoundDocument(){return 1===this.documentType}isNoDocument(){return 2===this.documentType}isUnknownDocument(){return 3===this.documentType}isEqual(e){return e instanceof Tu&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new Tu(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}
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
 */class Iu{constructor(e,t){this.position=e,this.inclusive=t}}function Su(e,t,n){let r=0;for(let i=0;i<e.position.length;i++){const s=t[i],o=e.position[i];if(r=s.field.isKeyField()?wa.comparator(wa.fromName(o.referenceValue),n.key):nu(o,n.data.field(s.field)),"desc"===s.dir&&(r*=-1),0!==r)break}return r}function Cu(e,t){if(null===e)return null===t;if(null===t)return!1;if(e.inclusive!==t.inclusive||e.position.length!==t.position.length)return!1;for(let n=0;n<e.position.length;n++)if(!eu(e.position[n],t.position[n]))return!1;return!0}
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
 */class ku{constructor(e,t="asc"){this.field=e,this.dir=t}}function Au(e,t){return e.dir===t.dir&&e.field.isEqual(t.field)}
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
 */class Du{}class Nu extends Du{constructor(e,t,n){super(),this.field=e,this.op=t,this.value=n}static create(e,t,n){return e.isKeyField()?"in"===t||"not-in"===t?this.createKeyFieldInFilter(e,t,n):new zu(e,t,n):"array-contains"===t?new Hu(e,n):"in"===t?new Gu(e,n):"not-in"===t?new Ku(e,n):"array-contains-any"===t?new Wu(e,n):new Nu(e,t,n)}static createKeyFieldInFilter(e,t,n){return"in"===t?new ju(e,n):new Bu(e,n)}matches(e){const t=e.data.field(this.field);return"!="===this.op?null!==t&&void 0===t.nullValue&&this.matchesComparison(nu(t,this.value)):null!==t&&Zc(this.value)===Zc(t)&&this.matchesComparison(nu(t,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return 0===e;case"!=":return 0!==e;case">":return e>0;case">=":return e>=0;default:return Ho(47266,{operator:this.op})}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class Ru extends Du{constructor(e,t){super(),this.filters=e,this.op=t,this.he=null}static create(e,t){return new Ru(e,t)}matches(e){return Ou(this)?void 0===this.filters.find(t=>!t.matches(e)):void 0!==this.filters.find(t=>t.matches(e))}getFlattenedFilters(){return null!==this.he||(this.he=this.filters.reduce((e,t)=>e.concat(t.getFlattenedFilters()),[])),this.he}getFilters(){return Object.assign([],this.filters)}}function Ou(e){return"and"===e.op}function Pu(e){return"or"===e.op}function Lu(e){return $u(e)&&Ou(e)}function $u(e){for(const t of e.filters)if(t instanceof Ru)return!1;return!0}function Mu(e){if(e instanceof Nu)return e.field.canonicalString()+e.op.toString()+su(e.value);if(Lu(e))return e.filters.map(e=>Mu(e)).join(",");{const t=e.filters.map(e=>Mu(e)).join(",");return`${e.op}(${t})`}}function Uu(e,t){return e instanceof Nu?function(e,t){return t instanceof Nu&&e.op===t.op&&e.field.isEqual(t.field)&&eu(e.value,t.value)}(e,t):e instanceof Ru?function(e,t){return t instanceof Ru&&e.op===t.op&&e.filters.length===t.filters.length&&e.filters.reduce((e,n,r)=>e&&Uu(n,t.filters[r]),!0)}(e,t):void Ho(19439)}function Fu(e,t){const n=e.filters.concat(t);return Ru.create(n,e.op)}function Vu(e){return e instanceof Nu?function(e){return`${e.field.canonicalString()} ${e.op} ${su(e.value)}`}(e):e instanceof Ru?function(e){return e.op.toString()+" {"+e.getFilters().map(Vu).join(" ,")+"}"}(e):"Filter"}class zu extends Nu{constructor(e,t,n){super(e,t,n),this.key=wa.fromName(n.referenceValue)}matches(e){const t=wa.comparator(e.key,this.key);return this.matchesComparison(t)}}class ju extends Nu{constructor(e,t){super(e,"in",t),this.keys=qu("in",t)}matches(e){return this.keys.some(t=>t.isEqual(e.key))}}class Bu extends Nu{constructor(e,t){super(e,"not-in",t),this.keys=qu("not-in",t)}matches(e){return!this.keys.some(t=>t.isEqual(e.key))}}function qu(e,t){var n;return((null===(n=t.arrayValue)||void 0===n?void 0:n.values)||[]).map(e=>wa.fromName(e.referenceValue))}class Hu extends Nu{constructor(e,t){super(e,"array-contains",t)}matches(e){const t=e.data.field(this.field);return uu(t)&&tu(t.arrayValue,this.value)}}class Gu extends Nu{constructor(e,t){super(e,"in",t)}matches(e){const t=e.data.field(this.field);return null!==t&&tu(this.value.arrayValue,t)}}class Ku extends Nu{constructor(e,t){super(e,"not-in",t)}matches(e){if(tu(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const t=e.data.field(this.field);return null!==t&&void 0===t.nullValue&&!tu(this.value.arrayValue,t)}}class Wu extends Nu{constructor(e,t){super(e,"array-contains-any",t)}matches(e){const t=e.data.field(this.field);return!(!uu(t)||!t.arrayValue.values)&&t.arrayValue.values.some(e=>tu(this.value.arrayValue,e))}}
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
 */class Xu{constructor(e,t=null,n=[],r=[],i=null,s=null,o=null){this.path=e,this.collectionGroup=t,this.orderBy=n,this.filters=r,this.limit=i,this.startAt=s,this.endAt=o,this.Pe=null}}function Qu(e,t=null,n=[],r=[],i=null,s=null,o=null){return new Xu(e,t,n,r,i,s,o)}function Ju(e){const t=Wo(e);if(null===t.Pe){let e=t.path.canonicalString();null!==t.collectionGroup&&(e+="|cg:"+t.collectionGroup),e+="|f:",e+=t.filters.map(e=>Mu(e)).join(","),e+="|ob:",e+=t.orderBy.map(e=>function(e){return e.field.canonicalString()+e.dir}(e)).join(","),al(t.limit)||(e+="|l:",e+=t.limit),t.startAt&&(e+="|lb:",e+=t.startAt.inclusive?"b:":"a:",e+=t.startAt.position.map(e=>su(e)).join(",")),t.endAt&&(e+="|ub:",e+=t.endAt.inclusive?"a:":"b:",e+=t.endAt.position.map(e=>su(e)).join(",")),t.Pe=e}return t.Pe}function Yu(e,t){if(e.limit!==t.limit)return!1;if(e.orderBy.length!==t.orderBy.length)return!1;for(let n=0;n<e.orderBy.length;n++)if(!Au(e.orderBy[n],t.orderBy[n]))return!1;if(e.filters.length!==t.filters.length)return!1;for(let n=0;n<e.filters.length;n++)if(!Uu(e.filters[n],t.filters[n]))return!1;return e.collectionGroup===t.collectionGroup&&!!e.path.isEqual(t.path)&&!!Cu(e.startAt,t.startAt)&&Cu(e.endAt,t.endAt)}function Zu(e){return wa.isDocumentKey(e.path)&&null===e.collectionGroup&&0===e.filters.length}function ed(e,t){return e.filters.filter(e=>e instanceof Nu&&e.field.isEqual(t))}function td(e,t,n){let r=Yc,i=!0;for(const n of ed(e,t)){let e=Yc,t=!0;switch(n.op){case"<":case"<=":e=yu(n.value);break;case"==":case"in":case">=":e=n.value;break;case">":e=n.value,t=!1;break;case"!=":case"not-in":e=Yc}wu({value:r,inclusive:i},{value:e,inclusive:t})<0&&(r=e,i=t)}if(null!==n)for(let s=0;s<e.orderBy.length;++s)if(e.orderBy[s].field.isEqual(t)){const e=n.position[s];wu({value:r,inclusive:i},{value:e,inclusive:n.inclusive})<0&&(r=e,i=n.inclusive);break}return{value:r,inclusive:i}}function nd(e,t,n){let r=Xc,i=!0;for(const n of ed(e,t)){let e=Xc,t=!0;switch(n.op){case">=":case">":e=bu(n.value),t=!1;break;case"==":case"in":case"<=":e=n.value;break;case"<":e=n.value,t=!1;break;case"!=":case"not-in":e=Xc}_u({value:r,inclusive:i},{value:e,inclusive:t})>0&&(r=e,i=t)}if(null!==n)for(let s=0;s<e.orderBy.length;++s)if(e.orderBy[s].field.isEqual(t)){const e=n.position[s];_u({value:r,inclusive:i},{value:e,inclusive:n.inclusive})>0&&(r=e,i=n.inclusive);break}return{value:r,inclusive:i}}
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
 */class rd{constructor(e,t=null,n=[],r=[],i=null,s="F",o=null,a=null){this.path=e,this.collectionGroup=t,this.explicitOrderBy=n,this.filters=r,this.limit=i,this.limitType=s,this.startAt=o,this.endAt=a,this.Te=null,this.Ie=null,this.de=null,this.startAt,this.endAt}}function id(e){return new rd(e)}function sd(e){return 0===e.filters.length&&null===e.limit&&null==e.startAt&&null==e.endAt&&(0===e.explicitOrderBy.length||1===e.explicitOrderBy.length&&e.explicitOrderBy[0].field.isKeyField())}function od(e){return null!==e.collectionGroup}function ad(e){const t=Wo(e);if(null===t.Te){t.Te=[];const e=new Set;for(const n of t.explicitOrderBy)t.Te.push(n),e.add(n.field.canonicalString());const n=t.explicitOrderBy.length>0?t.explicitOrderBy[t.explicitOrderBy.length-1].dir:"asc",r=function(e){let t=new Cc(ba.comparator);return e.filters.forEach(e=>{e.getFlattenedFilters().forEach(e=>{e.isInequality()&&(t=t.add(e.field))})}),t}(t);r.forEach(r=>{e.has(r.canonicalString())||r.isKeyField()||t.Te.push(new ku(r,n))}),e.has(ba.keyField().canonicalString())||t.Te.push(new ku(ba.keyField(),n))}return t.Te}function ld(e){const t=Wo(e);return t.Ie||(t.Ie=function(e,t){if("F"===e.limitType)return Qu(e.path,e.collectionGroup,t,e.filters,e.limit,e.startAt,e.endAt);{t=t.map(e=>{const t="desc"===e.dir?"asc":"desc";return new ku(e.field,t)});const n=e.endAt?new Iu(e.endAt.position,e.endAt.inclusive):null,r=e.startAt?new Iu(e.startAt.position,e.startAt.inclusive):null;return Qu(e.path,e.collectionGroup,t,e.filters,e.limit,n,r)}}(t,ad(e))),t.Ie}function cd(e,t){const n=e.filters.concat([t]);return new rd(e.path,e.collectionGroup,e.explicitOrderBy.slice(),n,e.limit,e.limitType,e.startAt,e.endAt)}function ud(e,t,n){return new rd(e.path,e.collectionGroup,e.explicitOrderBy.slice(),e.filters.slice(),t,n,e.startAt,e.endAt)}function dd(e,t){return Yu(ld(e),ld(t))&&e.limitType===t.limitType}function hd(e){return`${Ju(ld(e))}|lt:${e.limitType}`}function pd(e){return`Query(target=${function(e){let t=e.path.canonicalString();return null!==e.collectionGroup&&(t+=" collectionGroup="+e.collectionGroup),e.filters.length>0&&(t+=`, filters: [${e.filters.map(e=>Vu(e)).join(", ")}]`),al(e.limit)||(t+=", limit: "+e.limit),e.orderBy.length>0&&(t+=`, orderBy: [${e.orderBy.map(e=>function(e){return`${e.field.canonicalString()} (${e.dir})`}(e)).join(", ")}]`),e.startAt&&(t+=", startAt: ",t+=e.startAt.inclusive?"b:":"a:",t+=e.startAt.position.map(e=>su(e)).join(",")),e.endAt&&(t+=", endAt: ",t+=e.endAt.inclusive?"a:":"b:",t+=e.endAt.position.map(e=>su(e)).join(",")),`Target(${t})`}(ld(e))}; limitType=${e.limitType})`}function fd(e,t){return t.isFoundDocument()&&function(e,t){const n=t.key.path;return null!==e.collectionGroup?t.key.hasCollectionId(e.collectionGroup)&&e.path.isPrefixOf(n):wa.isDocumentKey(e.path)?e.path.isEqual(n):e.path.isImmediateParentOf(n)}(e,t)&&function(e,t){for(const n of ad(e))if(!n.field.isKeyField()&&null===t.data.field(n.field))return!1;return!0}(e,t)&&function(e,t){for(const n of e.filters)if(!n.matches(t))return!1;return!0}(e,t)&&function(e,t){return!(e.startAt&&!function(e,t,n){const r=Su(e,t,n);return e.inclusive?r<=0:r<0}(e.startAt,ad(e),t))&&!(e.endAt&&!function(e,t,n){const r=Su(e,t,n);return e.inclusive?r>=0:r>0}(e.endAt,ad(e),t))}(e,t)}function md(e){return(t,n)=>{let r=!1;for(const i of ad(e)){const e=gd(i,t,n);if(0!==e)return e;r=r||i.field.isKeyField()}return 0}}function gd(e,t,n){const r=e.field.isKeyField()?wa.comparator(t.key,n.key):function(e,t,n){const r=t.data.field(e),i=n.data.field(e);return null!==r&&null!==i?nu(r,i):Ho(42886)}(e.field,t,n);switch(e.dir){case"asc":return r;case"desc":return-1*r;default:return Ho(19790,{direction:e.dir})}}
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
 */class vd{constructor(e,t){this.mapKeyFn=e,this.equalsFn=t,this.inner={},this.innerSize=0}get(e){const t=this.mapKeyFn(e),n=this.inner[t];if(void 0!==n)for(const[t,r]of n)if(this.equalsFn(t,e))return r}has(e){return void 0!==this.get(e)}set(e,t){const n=this.mapKeyFn(e),r=this.inner[n];if(void 0===r)return this.inner[n]=[[e,t]],void this.innerSize++;for(let n=0;n<r.length;n++)if(this.equalsFn(r[n][0],e))return void(r[n]=[e,t]);r.push([e,t]),this.innerSize++}delete(e){const t=this.mapKeyFn(e),n=this.inner[t];if(void 0===n)return!1;for(let r=0;r<n.length;r++)if(this.equalsFn(n[r][0],e))return 1===n.length?delete this.inner[t]:n.splice(r,1),this.innerSize--,!0;return!1}forEach(e){xc(this.inner,(t,n)=>{for(const[t,r]of n)e(t,r)})}isEmpty(){return Ec(this.inner)}size(){return this.innerSize}}
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
 */const yd=new Tc(wa.comparator);function bd(){return yd}const wd=new Tc(wa.comparator);function _d(...e){let t=wd;for(const n of e)t=t.insert(n.key,n);return t}function xd(e){let t=wd;return e.forEach((e,n)=>t=t.insert(e,n.overlayedDocument)),t}function Ed(){return Id()}function Td(){return Id()}function Id(){return new vd(e=>e.toString(),(e,t)=>e.isEqual(t))}const Sd=new Tc(wa.comparator),Cd=new Cc(wa.comparator);function kd(...e){let t=Cd;for(const n of e)t=t.add(n);return t}const Ad=new Cc(ca);
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
function Dd(e,t){if(e.useProto3Json){if(isNaN(t))return{doubleValue:"NaN"};if(t===1/0)return{doubleValue:"Infinity"};if(t===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:ll(t)?"-0":t}}function Nd(e){return{integerValue:""+e}}function Rd(e,t){return function(e){return"number"==typeof e&&Number.isInteger(e)&&!ll(e)&&e<=Number.MAX_SAFE_INTEGER&&e>=Number.MIN_SAFE_INTEGER}(t)?Nd(t):Dd(e,t)}
/**
 * @license
 * Copyright 2018 Google LLC
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
 */class Od{constructor(){this._=void 0}}function Pd(e,t,n){return e instanceof Md?function(e,t){const n={fields:{[Uc]:{stringValue:Mc},[Vc]:{timestampValue:{seconds:e.seconds,nanos:e.nanoseconds}}}};return t&&zc(t)&&(t=jc(t)),t&&(n.fields[Fc]=t),{mapValue:n}}(n,t):e instanceof Ud?Fd(e,t):e instanceof Vd?zd(e,t):function(e,t){const n=$d(e,t),r=Bd(n)+Bd(e.Ee);return cu(n)&&cu(e.Ee)?Nd(r):Dd(e.serializer,r)}(e,t)}function Ld(e,t,n){return e instanceof Ud?Fd(e,t):e instanceof Vd?zd(e,t):n}function $d(e,t){return e instanceof jd?function(e){return cu(e)||function(e){return!!e&&"doubleValue"in e}(e)}(t)?t:{integerValue:0}:null}class Md extends Od{}class Ud extends Od{constructor(e){super(),this.elements=e}}function Fd(e,t){const n=qd(t);for(const t of e.elements)n.some(e=>eu(e,t))||n.push(t);return{arrayValue:{values:n}}}class Vd extends Od{constructor(e){super(),this.elements=e}}function zd(e,t){let n=qd(t);for(const t of e.elements)n=n.filter(e=>!eu(e,t));return{arrayValue:{values:n}}}class jd extends Od{constructor(e,t){super(),this.serializer=e,this.Ee=t}}function Bd(e){return Lc(e.integerValue||e.doubleValue)}function qd(e){return uu(e)&&e.arrayValue.values?e.arrayValue.values.slice():[]}
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
 */class Hd{constructor(e,t){this.field=e,this.transform=t}}class Gd{constructor(e,t){this.version=e,this.transformResults=t}}class Kd{constructor(e,t){this.updateTime=e,this.exists=t}static none(){return new Kd}static exists(e){return new Kd(void 0,e)}static updateTime(e){return new Kd(e)}get isNone(){return void 0===this.updateTime&&void 0===this.exists}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function Wd(e,t){return void 0!==e.updateTime?t.isFoundDocument()&&t.version.isEqual(e.updateTime):void 0===e.exists||e.exists===t.isFoundDocument()}class Xd{}function Qd(e,t){if(!e.hasLocalMutations||t&&0===t.fields.length)return null;if(null===t)return e.isNoDocument()?new oh(e.key,Kd.none()):new th(e.key,e.data,Kd.none());{const n=e.data,r=xu.empty();let i=new Cc(ba.comparator);for(let e of t.fields)if(!i.has(e)){let t=n.field(e);null===t&&e.length>1&&(e=e.popLast(),t=n.field(e)),null===t?r.delete(e):r.set(e,t),i=i.add(e)}return new nh(e.key,r,new Dc(i.toArray()),Kd.none())}}function Jd(e,t,n){e instanceof th?function(e,t,n){const r=e.value.clone(),i=ih(e.fieldTransforms,t,n.transformResults);r.setAll(i),t.convertToFoundDocument(n.version,r).setHasCommittedMutations()}(e,t,n):e instanceof nh?function(e,t,n){if(!Wd(e.precondition,t))return void t.convertToUnknownDocument(n.version);const r=ih(e.fieldTransforms,t,n.transformResults),i=t.data;i.setAll(rh(e)),i.setAll(r),t.convertToFoundDocument(n.version,i).setHasCommittedMutations()}(e,t,n):function(e,t,n){t.convertToNoDocument(n.version).setHasCommittedMutations()}(0,t,n)}function Yd(e,t,n,r){return e instanceof th?function(e,t,n,r){if(!Wd(e.precondition,t))return n;const i=e.value.clone(),s=sh(e.fieldTransforms,r,t);return i.setAll(s),t.convertToFoundDocument(t.version,i).setHasLocalMutations(),null}(e,t,n,r):e instanceof nh?function(e,t,n,r){if(!Wd(e.precondition,t))return n;const i=sh(e.fieldTransforms,r,t),s=t.data;return s.setAll(rh(e)),s.setAll(i),t.convertToFoundDocument(t.version,s).setHasLocalMutations(),null===n?null:n.unionWith(e.fieldMask.fields).unionWith(e.fieldTransforms.map(e=>e.field))}(e,t,n,r):function(e,t,n){return Wd(e.precondition,t)?(t.convertToNoDocument(t.version).setHasLocalMutations(),null):n}(e,t,n)}function Zd(e,t){let n=null;for(const r of e.fieldTransforms){const e=t.data.field(r.field),i=$d(r.transform,e||null);null!=i&&(null===n&&(n=xu.empty()),n.set(r.field,i))}return n||null}function eh(e,t){return e.type===t.type&&!!e.key.isEqual(t.key)&&!!e.precondition.isEqual(t.precondition)&&!!function(e,t){return void 0===e&&void 0===t||!(!e||!t)&&pa(e,t,(e,t)=>function(e,t){return e.field.isEqual(t.field)&&function(e,t){return e instanceof Ud&&t instanceof Ud||e instanceof Vd&&t instanceof Vd?pa(e.elements,t.elements,eu):e instanceof jd&&t instanceof jd?eu(e.Ee,t.Ee):e instanceof Md&&t instanceof Md}(e.transform,t.transform)}(e,t))}(e.fieldTransforms,t.fieldTransforms)&&(0===e.type?e.value.isEqual(t.value):1!==e.type||e.data.isEqual(t.data)&&e.fieldMask.isEqual(t.fieldMask))}class th extends Xd{constructor(e,t,n,r=[]){super(),this.key=e,this.value=t,this.precondition=n,this.fieldTransforms=r,this.type=0}getFieldMask(){return null}}class nh extends Xd{constructor(e,t,n,r,i=[]){super(),this.key=e,this.data=t,this.fieldMask=n,this.precondition=r,this.fieldTransforms=i,this.type=1}getFieldMask(){return this.fieldMask}}function rh(e){const t=new Map;return e.fieldMask.fields.forEach(n=>{if(!n.isEmpty()){const r=e.data.field(n);t.set(n,r)}}),t}function ih(e,t,n){const r=new Map;Ko(e.length===n.length,32656,{Ae:n.length,Re:e.length});for(let i=0;i<n.length;i++){const s=e[i],o=s.transform,a=t.data.field(s.field);r.set(s.field,Ld(o,a,n[i]))}return r}function sh(e,t,n){const r=new Map;for(const i of e){const e=i.transform,s=n.data.field(i.field);r.set(i.field,Pd(e,s,t))}return r}class oh extends Xd{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class ah extends Xd{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}
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
 */class lh{constructor(e,t,n,r){this.batchId=e,this.localWriteTime=t,this.baseMutations=n,this.mutations=r}applyToRemoteDocument(e,t){const n=t.mutationResults;for(let t=0;t<this.mutations.length;t++){const r=this.mutations[t];r.key.isEqual(e.key)&&Jd(r,e,n[t])}}applyToLocalView(e,t){for(const n of this.baseMutations)n.key.isEqual(e.key)&&(t=Yd(n,e,t,this.localWriteTime));for(const n of this.mutations)n.key.isEqual(e.key)&&(t=Yd(n,e,t,this.localWriteTime));return t}applyToLocalDocumentSet(e,t){const n=Td();return this.mutations.forEach(r=>{const i=e.get(r.key),s=i.overlayedDocument;let o=this.applyToLocalView(s,i.mutatedFields);o=t.has(r.key)?null:o;const a=Qd(s,o);null!==a&&n.set(r.key,a),s.isValidDocument()||s.convertToNoDocument(Ra.min())}),n}keys(){return this.mutations.reduce((e,t)=>e.add(t.key),kd())}isEqual(e){return this.batchId===e.batchId&&pa(this.mutations,e.mutations,(e,t)=>eh(e,t))&&pa(this.baseMutations,e.baseMutations,(e,t)=>eh(e,t))}}class ch{constructor(e,t,n,r){this.batch=e,this.commitVersion=t,this.mutationResults=n,this.docVersions=r}static from(e,t,n){Ko(e.mutations.length===n.length,58842,{Ve:e.mutations.length,me:n.length});let r=Sd;const i=e.mutations;for(let e=0;e<i.length;e++)r=r.insert(i[e].key,n[e].version);return new ch(e,t,n,r)}}
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
 */class uh{constructor(e,t){this.largestBatchId=e,this.mutation=t}getKey(){return this.mutation.key}isEqual(e){return null!==e&&this.mutation===e.mutation}toString(){return`Overlay{\n      largestBatchId: ${this.largestBatchId},\n      mutation: ${this.mutation.toString()}\n    }`}}
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
 */class dh{constructor(e,t){this.count=e,this.unchangedNames=t}}
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
 */var hh,ph;function fh(e){if(void 0===e)return jo("GRPC error has no .code"),Xo.UNKNOWN;switch(e){case hh.OK:return Xo.OK;case hh.CANCELLED:return Xo.CANCELLED;case hh.UNKNOWN:return Xo.UNKNOWN;case hh.DEADLINE_EXCEEDED:return Xo.DEADLINE_EXCEEDED;case hh.RESOURCE_EXHAUSTED:return Xo.RESOURCE_EXHAUSTED;case hh.INTERNAL:return Xo.INTERNAL;case hh.UNAVAILABLE:return Xo.UNAVAILABLE;case hh.UNAUTHENTICATED:return Xo.UNAUTHENTICATED;case hh.INVALID_ARGUMENT:return Xo.INVALID_ARGUMENT;case hh.NOT_FOUND:return Xo.NOT_FOUND;case hh.ALREADY_EXISTS:return Xo.ALREADY_EXISTS;case hh.PERMISSION_DENIED:return Xo.PERMISSION_DENIED;case hh.FAILED_PRECONDITION:return Xo.FAILED_PRECONDITION;case hh.ABORTED:return Xo.ABORTED;case hh.OUT_OF_RANGE:return Xo.OUT_OF_RANGE;case hh.UNIMPLEMENTED:return Xo.UNIMPLEMENTED;case hh.DATA_LOSS:return Xo.DATA_LOSS;default:return Ho(39323,{code:e})}}(ph=hh||(hh={}))[ph.OK=0]="OK",ph[ph.CANCELLED=1]="CANCELLED",ph[ph.UNKNOWN=2]="UNKNOWN",ph[ph.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",ph[ph.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",ph[ph.NOT_FOUND=5]="NOT_FOUND",ph[ph.ALREADY_EXISTS=6]="ALREADY_EXISTS",ph[ph.PERMISSION_DENIED=7]="PERMISSION_DENIED",ph[ph.UNAUTHENTICATED=16]="UNAUTHENTICATED",ph[ph.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",ph[ph.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",ph[ph.ABORTED=10]="ABORTED",ph[ph.OUT_OF_RANGE=11]="OUT_OF_RANGE",ph[ph.UNIMPLEMENTED=12]="UNIMPLEMENTED",ph[ph.INTERNAL=13]="INTERNAL",ph[ph.UNAVAILABLE=14]="UNAVAILABLE",ph[ph.DATA_LOSS=15]="DATA_LOSS";
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
const mh=new Eo([4294967295,4294967295],0);function gh(e){const t=aa().encode(e),n=new To;return n.update(t),new Uint8Array(n.digest())}function vh(e){const t=new DataView(e.buffer),n=t.getUint32(0,!0),r=t.getUint32(4,!0),i=t.getUint32(8,!0),s=t.getUint32(12,!0);return[new Eo([n,r],0),new Eo([i,s],0)]}class yh{constructor(e,t,n){if(this.bitmap=e,this.padding=t,this.hashCount=n,t<0||t>=8)throw new bh(`Invalid padding: ${t}`);if(n<0)throw new bh(`Invalid hash count: ${n}`);if(e.length>0&&0===this.hashCount)throw new bh(`Invalid hash count: ${n}`);if(0===e.length&&0!==t)throw new bh(`Invalid padding when bitmap length is 0: ${t}`);this.fe=8*e.length-t,this.ge=Eo.fromNumber(this.fe)}pe(e,t,n){let r=e.add(t.multiply(Eo.fromNumber(n)));return 1===r.compare(mh)&&(r=new Eo([r.getBits(0),r.getBits(1)],0)),r.modulo(this.ge).toNumber()}ye(e){return!!(this.bitmap[Math.floor(e/8)]&1<<e%8)}mightContain(e){if(0===this.fe)return!1;const t=gh(e),[n,r]=vh(t);for(let e=0;e<this.hashCount;e++){const t=this.pe(n,r,e);if(!this.ye(t))return!1}return!0}static create(e,t,n){const r=e%8==0?0:8-e%8,i=new Uint8Array(Math.ceil(e/8)),s=new yh(i,r,t);return n.forEach(e=>s.insert(e)),s}insert(e){if(0===this.fe)return;const t=gh(e),[n,r]=vh(t);for(let e=0;e<this.hashCount;e++){const t=this.pe(n,r,e);this.we(t)}}we(e){const t=Math.floor(e/8),n=e%8;this.bitmap[t]|=1<<n}}class bh extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}
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
 */class wh{constructor(e,t,n,r,i){this.snapshotVersion=e,this.targetChanges=t,this.targetMismatches=n,this.documentUpdates=r,this.resolvedLimboDocuments=i}static createSynthesizedRemoteEventForCurrentChange(e,t,n){const r=new Map;return r.set(e,_h.createSynthesizedTargetChangeForCurrentChange(e,t,n)),new wh(Ra.min(),r,new Tc(ca),bd(),kd())}}class _h{constructor(e,t,n,r,i){this.resumeToken=e,this.current=t,this.addedDocuments=n,this.modifiedDocuments=r,this.removedDocuments=i}static createSynthesizedTargetChangeForCurrentChange(e,t,n){return new _h(n,t,kd(),kd(),kd())}}
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
 */class xh{constructor(e,t,n,r){this.Se=e,this.removedTargetIds=t,this.key=n,this.be=r}}class Eh{constructor(e,t){this.targetId=e,this.De=t}}class Th{constructor(e,t,n=Rc.EMPTY_BYTE_STRING,r=null){this.state=e,this.targetIds=t,this.resumeToken=n,this.cause=r}}class Ih{constructor(){this.ve=0,this.Ce=kh(),this.Fe=Rc.EMPTY_BYTE_STRING,this.Me=!1,this.xe=!0}get current(){return this.Me}get resumeToken(){return this.Fe}get Oe(){return 0!==this.ve}get Ne(){return this.xe}Be(e){e.approximateByteSize()>0&&(this.xe=!0,this.Fe=e)}Le(){let e=kd(),t=kd(),n=kd();return this.Ce.forEach((r,i)=>{switch(i){case 0:e=e.add(r);break;case 2:t=t.add(r);break;case 1:n=n.add(r);break;default:Ho(38017,{changeType:i})}}),new _h(this.Fe,this.Me,e,t,n)}ke(){this.xe=!1,this.Ce=kh()}qe(e,t){this.xe=!0,this.Ce=this.Ce.insert(e,t)}Qe(e){this.xe=!0,this.Ce=this.Ce.remove(e)}$e(){this.ve+=1}Ue(){this.ve-=1,Ko(this.ve>=0,3241,{ve:this.ve})}Ke(){this.xe=!0,this.Me=!0}}class Sh{constructor(e){this.We=e,this.Ge=new Map,this.ze=bd(),this.je=Ch(),this.Je=Ch(),this.He=new Tc(ca)}Ye(e){for(const t of e.Se)e.be&&e.be.isFoundDocument()?this.Ze(t,e.be):this.Xe(t,e.key,e.be);for(const t of e.removedTargetIds)this.Xe(t,e.key,e.be)}et(e){this.forEachTarget(e,t=>{const n=this.tt(t);switch(e.state){case 0:this.nt(t)&&n.Be(e.resumeToken);break;case 1:n.Ue(),n.Oe||n.ke(),n.Be(e.resumeToken);break;case 2:n.Ue(),n.Oe||this.removeTarget(t);break;case 3:this.nt(t)&&(n.Ke(),n.Be(e.resumeToken));break;case 4:this.nt(t)&&(this.rt(t),n.Be(e.resumeToken));break;default:Ho(56790,{state:e.state})}})}forEachTarget(e,t){e.targetIds.length>0?e.targetIds.forEach(t):this.Ge.forEach((e,n)=>{this.nt(n)&&t(n)})}it(e){const t=e.targetId,n=e.De.count,r=this.st(t);if(r){const i=r.target;if(Zu(i))if(0===n){const e=new wa(i.path);this.Xe(t,e,Tu.newNoDocument(e,Ra.min()))}else Ko(1===n,20013,{expectedCount:n});else{const r=this.ot(t);if(r!==n){const n=this._t(e),i=n?this.ut(n,e,r):1;if(0!==i){this.rt(t);const e=2===i?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.He=this.He.insert(t,e)}}}}}_t(e){const t=e.De.unchangedNames;if(!t||!t.bits)return null;const{bits:{bitmap:n="",padding:r=0},hashCount:i=0}=t;let s,o;try{s=$c(n).toUint8Array()}catch(e){if(e instanceof Nc)return Bo("Decoding the base64 bloom filter in existence filter failed ("+e.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw e}try{o=new yh(s,r,i)}catch(e){return Bo(e instanceof bh?"BloomFilter error: ":"Applying bloom filter failed: ",e),null}return 0===o.fe?null:o}ut(e,t,n){return t.De.count===n-this.ht(e,t.targetId)?0:2}ht(e,t){const n=this.We.getRemoteKeysForTarget(t);let r=0;return n.forEach(n=>{const i=this.We.lt(),s=`projects/${i.projectId}/databases/${i.database}/documents/${n.path.canonicalString()}`;e.mightContain(s)||(this.Xe(t,n,null),r++)}),r}Pt(e){const t=new Map;this.Ge.forEach((n,r)=>{const i=this.st(r);if(i){if(n.current&&Zu(i.target)){const t=new wa(i.target.path);this.Tt(t).has(r)||this.It(r,t)||this.Xe(r,t,Tu.newNoDocument(t,e))}n.Ne&&(t.set(r,n.Le()),n.ke())}});let n=kd();this.Je.forEach((e,t)=>{let r=!0;t.forEachWhile(e=>{const t=this.st(e);return!t||"TargetPurposeLimboResolution"===t.purpose||(r=!1,!1)}),r&&(n=n.add(e))}),this.ze.forEach((t,n)=>n.setReadTime(e));const r=new wh(e,t,this.He,this.ze,n);return this.ze=bd(),this.je=Ch(),this.Je=Ch(),this.He=new Tc(ca),r}Ze(e,t){if(!this.nt(e))return;const n=this.It(e,t.key)?2:0;this.tt(e).qe(t.key,n),this.ze=this.ze.insert(t.key,t),this.je=this.je.insert(t.key,this.Tt(t.key).add(e)),this.Je=this.Je.insert(t.key,this.dt(t.key).add(e))}Xe(e,t,n){if(!this.nt(e))return;const r=this.tt(e);this.It(e,t)?r.qe(t,1):r.Qe(t),this.Je=this.Je.insert(t,this.dt(t).delete(e)),this.Je=this.Je.insert(t,this.dt(t).add(e)),n&&(this.ze=this.ze.insert(t,n))}removeTarget(e){this.Ge.delete(e)}ot(e){const t=this.tt(e).Le();return this.We.getRemoteKeysForTarget(e).size+t.addedDocuments.size-t.removedDocuments.size}$e(e){this.tt(e).$e()}tt(e){let t=this.Ge.get(e);return t||(t=new Ih,this.Ge.set(e,t)),t}dt(e){let t=this.Je.get(e);return t||(t=new Cc(ca),this.Je=this.Je.insert(e,t)),t}Tt(e){let t=this.je.get(e);return t||(t=new Cc(ca),this.je=this.je.insert(e,t)),t}nt(e){const t=null!==this.st(e);return t||zo("WatchChangeAggregator","Detected inactive target",e),t}st(e){const t=this.Ge.get(e);return t&&t.Oe?null:this.We.Et(e)}rt(e){this.Ge.set(e,new Ih),this.We.getRemoteKeysForTarget(e).forEach(t=>{this.Xe(e,t,null)})}It(e,t){return this.We.getRemoteKeysForTarget(e).has(t)}}function Ch(){return new Tc(wa.comparator)}function kh(){return new Tc(wa.comparator)}const Ah={asc:"ASCENDING",desc:"DESCENDING"},Dh={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"},Nh={and:"AND",or:"OR"};class Rh{constructor(e,t){this.databaseId=e,this.useProto3Json=t}}function Oh(e,t){return e.useProto3Json||al(t)?t:{value:t}}function Ph(e,t){return e.useProto3Json?`${new Date(1e3*t.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+t.nanoseconds).slice(-9)}Z`:{seconds:""+t.seconds,nanos:t.nanoseconds}}function Lh(e,t){return e.useProto3Json?t.toBase64():t.toUint8Array()}function $h(e,t){return Ph(e,t.toTimestamp())}function Mh(e){return Ko(!!e,49232),Ra.fromTimestamp(function(e){const t=Pc(e);return new Na(t.seconds,t.nanos)}(e))}function Uh(e,t){return Fh(e,t).canonicalString()}function Fh(e,t){const n=function(e){return new va(["projects",e.projectId,"databases",e.database])}(e).child("documents");return void 0===t?n:n.child(t)}function Vh(e){const t=va.fromString(e);return Ko(ap(t),10190,{key:t.toString()}),t}function zh(e,t){return Uh(e.databaseId,t.path)}function jh(e,t){const n=Vh(t);if(n.get(1)!==e.databaseId.projectId)throw new Qo(Xo.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+n.get(1)+" vs "+e.databaseId.projectId);if(n.get(3)!==e.databaseId.database)throw new Qo(Xo.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+n.get(3)+" vs "+e.databaseId.database);return new wa(Gh(n))}function Bh(e,t){return Uh(e.databaseId,t)}function qh(e){const t=Vh(e);return 4===t.length?va.emptyPath():Gh(t)}function Hh(e){return new va(["projects",e.databaseId.projectId,"databases",e.databaseId.database]).canonicalString()}function Gh(e){return Ko(e.length>4&&"documents"===e.get(4),29091,{key:e.toString()}),e.popFirst(5)}function Kh(e,t,n){return{name:zh(e,t),fields:n.value.mapValue.fields}}function Wh(e,t){let n;if(t instanceof th)n={update:Kh(e,t.key,t.value)};else if(t instanceof oh)n={delete:zh(e,t.key)};else if(t instanceof nh)n={update:Kh(e,t.key,t.data),updateMask:op(t.fieldMask)};else{if(!(t instanceof ah))return Ho(16599,{Rt:t.type});n={verify:zh(e,t.key)}}return t.fieldTransforms.length>0&&(n.updateTransforms=t.fieldTransforms.map(e=>function(e,t){const n=t.transform;if(n instanceof Md)return{fieldPath:t.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(n instanceof Ud)return{fieldPath:t.field.canonicalString(),appendMissingElements:{values:n.elements}};if(n instanceof Vd)return{fieldPath:t.field.canonicalString(),removeAllFromArray:{values:n.elements}};if(n instanceof jd)return{fieldPath:t.field.canonicalString(),increment:n.Ee};throw Ho(20930,{transform:t.transform})}(0,e))),t.precondition.isNone||(n.currentDocument=function(e,t){return void 0!==t.updateTime?{updateTime:$h(e,t.updateTime)}:void 0!==t.exists?{exists:t.exists}:Ho(27497)}(e,t.precondition)),n}function Xh(e,t){const n=t.currentDocument?function(e){return void 0!==e.updateTime?Kd.updateTime(Mh(e.updateTime)):void 0!==e.exists?Kd.exists(e.exists):Kd.none()}(t.currentDocument):Kd.none(),r=t.updateTransforms?t.updateTransforms.map(t=>function(e,t){let n=null;if("setToServerValue"in t)Ko("REQUEST_TIME"===t.setToServerValue,16630,{proto:t}),n=new Md;else if("appendMissingElements"in t){const e=t.appendMissingElements.values||[];n=new Ud(e)}else if("removeAllFromArray"in t){const e=t.removeAllFromArray.values||[];n=new Vd(e)}else"increment"in t?n=new jd(e,t.increment):Ho(16584,{proto:t});const r=ba.fromServerFormat(t.fieldPath);return new Hd(r,n)}(e,t)):[];if(t.update){t.update.name;const i=jh(e,t.update.name),s=new xu({mapValue:{fields:t.update.fields}});if(t.updateMask){const e=function(e){const t=e.fieldPaths||[];return new Dc(t.map(e=>ba.fromServerFormat(e)))}(t.updateMask);return new nh(i,s,e,n,r)}return new th(i,s,n,r)}if(t.delete){const r=jh(e,t.delete);return new oh(r,n)}if(t.verify){const r=jh(e,t.verify);return new ah(r,n)}return Ho(1463,{proto:t})}function Qh(e,t){return{documents:[Bh(e,t.path)]}}function Jh(e,t){const n={structuredQuery:{}},r=t.path;let i;null!==t.collectionGroup?(i=r,n.structuredQuery.from=[{collectionId:t.collectionGroup,allDescendants:!0}]):(i=r.popLast(),n.structuredQuery.from=[{collectionId:r.lastSegment()}]),n.parent=Bh(e,i);const s=function(e){if(0!==e.length)return sp(Ru.create(e,"and"))}(t.filters);s&&(n.structuredQuery.where=s);const o=function(e){if(0!==e.length)return e.map(e=>function(e){return{field:rp(e.field),direction:ep(e.dir)}}(e))}(t.orderBy);o&&(n.structuredQuery.orderBy=o);const a=Oh(e,t.limit);return null!==a&&(n.structuredQuery.limit=a),t.startAt&&(n.structuredQuery.startAt=function(e){return{before:e.inclusive,values:e.position}}(t.startAt)),t.endAt&&(n.structuredQuery.endAt=function(e){return{before:!e.inclusive,values:e.position}}(t.endAt)),{Vt:n,parent:i}}function Yh(e){let t=qh(e.parent);const n=e.structuredQuery,r=n.from?n.from.length:0;let i=null;if(r>0){Ko(1===r,65062);const e=n.from[0];e.allDescendants?i=e.collectionId:t=t.child(e.collectionId)}let s=[];n.where&&(s=function(e){const t=Zh(e);return t instanceof Ru&&Lu(t)?t.getFilters():[t]}(n.where));let o=[];n.orderBy&&(o=function(e){return e.map(e=>function(e){return new ku(ip(e.field),function(e){switch(e){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(e.direction))}(e))}(n.orderBy));let a=null;n.limit&&(a=function(e){let t;return t="object"==typeof e?e.value:e,al(t)?null:t}(n.limit));let l=null;n.startAt&&(l=function(e){const t=!!e.before,n=e.values||[];return new Iu(n,t)}(n.startAt));let c=null;return n.endAt&&(c=function(e){const t=!e.before,n=e.values||[];return new Iu(n,t)}(n.endAt)),function(e,t,n,r,i,s,o,a){return new rd(e,t,n,r,i,s,o,a)}(t,i,o,s,a,"F",l,c)}function Zh(e){return void 0!==e.unaryFilter?function(e){switch(e.unaryFilter.op){case"IS_NAN":const t=ip(e.unaryFilter.field);return Nu.create(t,"==",{doubleValue:NaN});case"IS_NULL":const n=ip(e.unaryFilter.field);return Nu.create(n,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const r=ip(e.unaryFilter.field);return Nu.create(r,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const i=ip(e.unaryFilter.field);return Nu.create(i,"!=",{nullValue:"NULL_VALUE"});case"OPERATOR_UNSPECIFIED":return Ho(61313);default:return Ho(60726)}}(e):void 0!==e.fieldFilter?function(e){return Nu.create(ip(e.fieldFilter.field),function(e){switch(e){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";case"OPERATOR_UNSPECIFIED":return Ho(58110);default:return Ho(50506)}}(e.fieldFilter.op),e.fieldFilter.value)}(e):void 0!==e.compositeFilter?function(e){return Ru.create(e.compositeFilter.filters.map(e=>Zh(e)),function(e){switch(e){case"AND":return"and";case"OR":return"or";default:return Ho(1026)}}(e.compositeFilter.op))}(e):Ho(30097,{filter:e})}function ep(e){return Ah[e]}function tp(e){return Dh[e]}function np(e){return Nh[e]}function rp(e){return{fieldPath:e.canonicalString()}}function ip(e){return ba.fromServerFormat(e.fieldPath)}function sp(e){return e instanceof Nu?function(e){if("=="===e.op){if(hu(e.value))return{unaryFilter:{field:rp(e.field),op:"IS_NAN"}};if(du(e.value))return{unaryFilter:{field:rp(e.field),op:"IS_NULL"}}}else if("!="===e.op){if(hu(e.value))return{unaryFilter:{field:rp(e.field),op:"IS_NOT_NAN"}};if(du(e.value))return{unaryFilter:{field:rp(e.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:rp(e.field),op:tp(e.op),value:e.value}}}(e):e instanceof Ru?function(e){const t=e.getFilters().map(e=>sp(e));return 1===t.length?t[0]:{compositeFilter:{op:np(e.op),filters:t}}}(e):Ho(54877,{filter:e})}function op(e){const t=[];return e.fields.forEach(e=>t.push(e.canonicalString())),{fieldPaths:t}}function ap(e){return e.length>=4&&"projects"===e.get(0)&&"databases"===e.get(2)}
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
 */class lp{constructor(e,t,n,r,i=Ra.min(),s=Ra.min(),o=Rc.EMPTY_BYTE_STRING,a=null){this.target=e,this.targetId=t,this.purpose=n,this.sequenceNumber=r,this.snapshotVersion=i,this.lastLimboFreeSnapshotVersion=s,this.resumeToken=o,this.expectedCount=a}withSequenceNumber(e){return new lp(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(e,t){return new lp(this.target,this.targetId,this.purpose,this.sequenceNumber,t,this.lastLimboFreeSnapshotVersion,e,null)}withExpectedCount(e){return new lp(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,e)}withLastLimboFreeSnapshotVersion(e){return new lp(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken,this.expectedCount)}}
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
 */class cp{constructor(e){this.gt=e}}function up(e,t){let n;if(t.document)n=function(e,t,n){const r=jh(e,t.name),i=Mh(t.updateTime),s=t.createTime?Mh(t.createTime):Ra.min(),o=new xu({mapValue:{fields:t.fields}}),a=Tu.newFoundDocument(r,i,s,o);return n&&a.setHasCommittedMutations(),n?a.setHasCommittedMutations():a}(e.gt,t.document,!!t.hasCommittedMutations);else if(t.noDocument){const e=wa.fromSegments(t.noDocument.path),r=fp(t.noDocument.readTime);n=Tu.newNoDocument(e,r),t.hasCommittedMutations&&n.setHasCommittedMutations()}else{if(!t.unknownDocument)return Ho(56709);{const e=wa.fromSegments(t.unknownDocument.path),r=fp(t.unknownDocument.version);n=Tu.newUnknownDocument(e,r)}}return t.readTime&&n.setReadTime(function(e){const t=new Na(e[0],e[1]);return Ra.fromTimestamp(t)}(t.readTime)),n}function dp(e,t){const n=t.key,r={prefixPath:n.getCollectionPath().popLast().toArray(),collectionGroup:n.collectionGroup,documentId:n.path.lastSegment(),readTime:hp(t.readTime),hasCommittedMutations:t.hasCommittedMutations};if(t.isFoundDocument())r.document=function(e,t){return{name:zh(e,t.key),fields:t.data.value.mapValue.fields,updateTime:Ph(e,t.version.toTimestamp()),createTime:Ph(e,t.createTime.toTimestamp())}}(e.gt,t);else if(t.isNoDocument())r.noDocument={path:n.path.toArray(),readTime:pp(t.version)};else{if(!t.isUnknownDocument())return Ho(57904,{document:t});r.unknownDocument={path:n.path.toArray(),version:pp(t.version)}}return r}function hp(e){const t=e.toTimestamp();return[t.seconds,t.nanoseconds]}function pp(e){const t=e.toTimestamp();return{seconds:t.seconds,nanoseconds:t.nanoseconds}}function fp(e){const t=new Na(e.seconds,e.nanoseconds);return Ra.fromTimestamp(t)}function mp(e,t){const n=(t.baseMutations||[]).map(t=>Xh(e.gt,t));for(let e=0;e<t.mutations.length-1;++e){const n=t.mutations[e];if(e+1<t.mutations.length&&void 0!==t.mutations[e+1].transform){const r=t.mutations[e+1];n.updateTransforms=r.transform.fieldTransforms,t.mutations.splice(e+1,1),++e}}const r=t.mutations.map(t=>Xh(e.gt,t)),i=Na.fromMillis(t.localWriteTimeMs);return new lh(t.batchId,i,n,r)}function gp(e){const t=fp(e.readTime),n=void 0!==e.lastLimboFreeSnapshotVersion?fp(e.lastLimboFreeSnapshotVersion):Ra.min();let r;return r=function(e){return void 0!==e.documents}(e.query)?function(e){const t=e.documents.length;return Ko(1===t,1966,{count:t}),ld(id(qh(e.documents[0])))}(e.query):function(e){return ld(Yh(e))}(e.query),new lp(r,e.targetId,"TargetPurposeListen",e.lastListenSequenceNumber,t,n,Rc.fromBase64String(e.resumeToken))}function vp(e,t){const n=pp(t.snapshotVersion),r=pp(t.lastLimboFreeSnapshotVersion);let i;i=Zu(t.target)?Qh(e.gt,t.target):Jh(e.gt,t.target).Vt;const s=t.resumeToken.toBase64();return{targetId:t.targetId,canonicalId:Ju(t.target),readTime:n,resumeToken:s,lastListenSequenceNumber:t.sequenceNumber,lastLimboFreeSnapshotVersion:r,query:i}}function yp(e){const t=Yh({parent:e.parent,structuredQuery:e.structuredQuery});return"LAST"===e.limitType?ud(t,t.limit,"L"):t}function bp(e,t){return new uh(t.largestBatchId,Xh(e.gt,t.overlayMutation))}function wp(e,t){const n=t.path.lastSegment();return[e,ul(t.path.popLast()),n]}function _p(e,t,n,r){return{indexId:e,uid:t,sequenceNumber:n,readTime:pp(r.readTime),documentKey:ul(r.documentKey.path),largestBatchId:r.largestBatchId}}
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
 */class xp{getBundleMetadata(e,t){return Ep(e).get(t).next(e=>{if(e)return function(e){return{id:e.bundleId,createTime:fp(e.createTime),version:e.version}}(e)})}saveBundleMetadata(e,t){return Ep(e).put(function(e){return{bundleId:e.id,createTime:pp(Mh(e.createTime)),version:e.version}}(t))}getNamedQuery(e,t){return Tp(e).get(t).next(e=>{if(e)return function(e){return{name:e.name,query:yp(e.bundledQuery),readTime:fp(e.readTime)}}(e)})}saveNamedQuery(e,t){return Tp(e).put(function(e){return{name:e.name,readTime:pp(Mh(e.readTime)),bundledQuery:e.bundledQuery}}(t))}}function Ep(e){return wc(e,Gl)}function Tp(e){return wc(e,Kl)}
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
 */class Ip{constructor(e,t){this.serializer=e,this.userId=t}static yt(e,t){const n=t.uid||"";return new Ip(e,n)}getOverlay(e,t){return Sp(e).get(wp(this.userId,t)).next(e=>e?bp(this.serializer,e):null)}getOverlays(e,t){const n=Ed();return qa.forEach(t,t=>this.getOverlay(e,t).next(e=>{null!==e&&n.set(t,e)})).next(()=>n)}saveOverlays(e,t,n){const r=[];return n.forEach((n,i)=>{const s=new uh(t,i);r.push(this.wt(e,s))}),qa.waitFor(r)}removeOverlaysForBatchId(e,t,n){const r=new Set;t.forEach(e=>r.add(ul(e.getCollectionPath())));const i=[];return r.forEach(t=>{const r=IDBKeyRange.bound([this.userId,t,n],[this.userId,t,n+1],!1,!0);i.push(Sp(e).Y(oc,r))}),qa.waitFor(i)}getOverlaysForCollection(e,t,n){const r=Ed(),i=ul(t),s=IDBKeyRange.bound([this.userId,i,n],[this.userId,i,Number.POSITIVE_INFINITY],!0);return Sp(e).j(oc,s).next(e=>{for(const t of e){const e=bp(this.serializer,t);r.set(e.getKey(),e)}return r})}getOverlaysForCollectionGroup(e,t,n,r){const i=Ed();let s;const o=IDBKeyRange.bound([this.userId,t,n],[this.userId,t,Number.POSITIVE_INFINITY],!0);return Sp(e).X({index:lc,range:o},(e,t,n)=>{const o=bp(this.serializer,t);i.size()<r||o.largestBatchId===s?(i.set(o.getKey(),o),s=o.largestBatchId):n.done()}).next(()=>i)}wt(e,t){return Sp(e).put(function(e,t,n){const[r,i,s]=wp(t,n.mutation.key);return{userId:t,collectionPath:i,documentId:s,collectionGroup:n.mutation.key.getCollectionGroup(),largestBatchId:n.largestBatchId,overlayMutation:Wh(e.gt,n.mutation)}}(this.serializer,this.userId,t))}}function Sp(e){return wc(e,ic)}
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
 */class Cp{St(e){return wc(e,uc)}getSessionToken(e){return this.St(e).get("sessionToken").next(e=>{const t=null==e?void 0:e.value;return t?Rc.fromUint8Array(t):Rc.EMPTY_BYTE_STRING})}setSessionToken(e,t){return this.St(e).put({name:"sessionToken",value:t.toUint8Array()})}}
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
 */class kp{constructor(){}bt(e,t){this.Dt(e,t),t.vt()}Dt(e,t){if("nullValue"in e)this.Ct(t,5);else if("booleanValue"in e)this.Ct(t,10),t.Ft(e.booleanValue?1:0);else if("integerValue"in e)this.Ct(t,15),t.Ft(Lc(e.integerValue));else if("doubleValue"in e){const n=Lc(e.doubleValue);isNaN(n)?this.Ct(t,13):(this.Ct(t,15),ll(n)?t.Ft(0):t.Ft(n))}else if("timestampValue"in e){let n=e.timestampValue;this.Ct(t,20),"string"==typeof n&&(n=Pc(n)),t.Mt(`${n.seconds||""}`),t.Ft(n.nanos||0)}else if("stringValue"in e)this.xt(e.stringValue,t),this.Ot(t);else if("bytesValue"in e)this.Ct(t,30),t.Nt($c(e.bytesValue)),this.Ot(t);else if("referenceValue"in e)this.Bt(e.referenceValue,t);else if("geoPointValue"in e){const n=e.geoPointValue;this.Ct(t,45),t.Ft(n.latitude||0),t.Ft(n.longitude||0)}else"mapValue"in e?gu(e)?this.Ct(t,Number.MAX_SAFE_INTEGER):fu(e)?this.Lt(e.mapValue,t):(this.kt(e.mapValue,t),this.Ot(t)):"arrayValue"in e?(this.qt(e.arrayValue,t),this.Ot(t)):Ho(19022,{Qt:e})}xt(e,t){this.Ct(t,25),this.$t(e,t)}$t(e,t){t.Mt(e)}kt(e,t){const n=e.fields||{};this.Ct(t,55);for(const e of Object.keys(n))this.xt(e,t),this.Dt(n[e],t)}Lt(e,t){var n,r;const i=e.fields||{};this.Ct(t,53);const s=Jc,o=(null===(r=null===(n=i[s].arrayValue)||void 0===n?void 0:n.values)||void 0===r?void 0:r.length)||0;this.Ct(t,15),t.Ft(Lc(o)),this.xt(s,t),this.Dt(i[s],t)}qt(e,t){const n=e.values||[];this.Ct(t,50);for(const e of n)this.Dt(e,t)}Bt(e,t){this.Ct(t,37),wa.fromName(e).path.forEach(e=>{this.Ct(t,60),this.$t(e,t)})}Ct(e,t){e.Ft(t)}Ot(e){e.Ft(2)}}kp.Ut=new kp;
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
 * Unless required by applicable law | agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES | CONDITIONS OF ANY KIND, either express | implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const Ap=255;function Dp(e){if(0===e)return 8;let t=0;return e>>4||(t+=4,e<<=4),e>>6||(t+=2,e<<=2),e>>7||(t+=1),t}function Np(e){const t=64-function(e){let t=0;for(let n=0;n<8;++n){const r=Dp(255&e[n]);if(t+=r,8!==r)break}return t}(e);return Math.ceil(t/8)}class Rp{constructor(){this.buffer=new Uint8Array(1024),this.position=0}Kt(e){const t=e[Symbol.iterator]();let n=t.next();for(;!n.done;)this.Wt(n.value),n=t.next();this.Gt()}zt(e){const t=e[Symbol.iterator]();let n=t.next();for(;!n.done;)this.jt(n.value),n=t.next();this.Jt()}Ht(e){for(const t of e){const e=t.charCodeAt(0);if(e<128)this.Wt(e);else if(e<2048)this.Wt(960|e>>>6),this.Wt(128|63&e);else if(t<"\ud800"||"\udbff"<t)this.Wt(480|e>>>12),this.Wt(128|63&e>>>6),this.Wt(128|63&e);else{const e=t.codePointAt(0);this.Wt(240|e>>>18),this.Wt(128|63&e>>>12),this.Wt(128|63&e>>>6),this.Wt(128|63&e)}}this.Gt()}Yt(e){for(const t of e){const e=t.charCodeAt(0);if(e<128)this.jt(e);else if(e<2048)this.jt(960|e>>>6),this.jt(128|63&e);else if(t<"\ud800"||"\udbff"<t)this.jt(480|e>>>12),this.jt(128|63&e>>>6),this.jt(128|63&e);else{const e=t.codePointAt(0);this.jt(240|e>>>18),this.jt(128|63&e>>>12),this.jt(128|63&e>>>6),this.jt(128|63&e)}}this.Jt()}Zt(e){const t=this.Xt(e),n=Np(t);this.en(1+n),this.buffer[this.position++]=255&n;for(let e=t.length-n;e<t.length;++e)this.buffer[this.position++]=255&t[e]}tn(e){const t=this.Xt(e),n=Np(t);this.en(1+n),this.buffer[this.position++]=~(255&n);for(let e=t.length-n;e<t.length;++e)this.buffer[this.position++]=~(255&t[e])}nn(){this.rn(Ap),this.rn(255)}sn(){this._n(Ap),this._n(255)}reset(){this.position=0}seed(e){this.en(e.length),this.buffer.set(e,this.position),this.position+=e.length}an(){return this.buffer.slice(0,this.position)}Xt(e){const t=function(e){const t=new DataView(new ArrayBuffer(8));return t.setFloat64(0,e,!1),new Uint8Array(t.buffer)}(e),n=!!(128&t[0]);t[0]^=n?255:128;for(let e=1;e<t.length;++e)t[e]^=n?255:0;return t}Wt(e){const t=255&e;0===t?(this.rn(0),this.rn(255)):t===Ap?(this.rn(Ap),this.rn(0)):this.rn(t)}jt(e){const t=255&e;0===t?(this._n(0),this._n(255)):t===Ap?(this._n(Ap),this._n(0)):this._n(e)}Gt(){this.rn(0),this.rn(1)}Jt(){this._n(0),this._n(1)}rn(e){this.en(1),this.buffer[this.position++]=e}_n(e){this.en(1),this.buffer[this.position++]=~e}en(e){const t=e+this.position;if(t<=this.buffer.length)return;let n=2*this.buffer.length;n<t&&(n=t);const r=new Uint8Array(n);r.set(this.buffer),this.buffer=r}}class Op{constructor(e){this.un=e}Nt(e){this.un.Kt(e)}Mt(e){this.un.Ht(e)}Ft(e){this.un.Zt(e)}vt(){this.un.nn()}}class Pp{constructor(e){this.un=e}Nt(e){this.un.zt(e)}Mt(e){this.un.Yt(e)}Ft(e){this.un.tn(e)}vt(){this.un.sn()}}class Lp{constructor(){this.un=new Rp,this.cn=new Op(this.un),this.ln=new Pp(this.un)}seed(e){this.un.seed(e)}hn(e){return 0===e?this.cn:this.ln}an(){return this.un.an()}reset(){this.un.reset()}}
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
 */class $p{constructor(e,t,n,r){this.Pn=e,this.Tn=t,this.In=n,this.dn=r}En(){const e=this.dn.length,t=0===e||255===this.dn[e-1]?e+1:e,n=new Uint8Array(t);return n.set(this.dn,0),t!==e?n.set([0],this.dn.length):++n[n.length-1],new $p(this.Pn,this.Tn,this.In,n)}An(e,t,n){return{indexId:this.Pn,uid:e,arrayValue:Fp(this.In),directionalValue:Fp(this.dn),orderedDocumentKey:Fp(t),documentKey:n.path.toArray()}}Rn(e,t,n){const r=this.An(e,t,n);return[r.indexId,r.uid,r.arrayValue,r.directionalValue,r.orderedDocumentKey,r.documentKey]}}function Mp(e,t){let n=e.Pn-t.Pn;return 0!==n?n:(n=Up(e.In,t.In),0!==n?n:(n=Up(e.dn,t.dn),0!==n?n:wa.comparator(e.Tn,t.Tn)))}function Up(e,t){for(let n=0;n<e.length&&n<t.length;++n){const r=e[n]-t[n];if(0!==r)return r}return e.length-t.length}function Fp(e){return It()?function(e){let t="";for(let n=0;n<e.length;n++)t+=String.fromCharCode(e[n]);return t}(e):e}function Vp(e){return"string"!=typeof e?e:function(e){const t=new Uint8Array(e.length);for(let n=0;n<e.length;n++)t[n]=e.charCodeAt(n);return t}
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
 */(e)}class zp{constructor(e){this.Vn=new Cc((e,t)=>ba.comparator(e.field,t.field)),this.collectionId=null!=e.collectionGroup?e.collectionGroup:e.path.lastSegment(),this.mn=e.orderBy,this.fn=[];for(const t of e.filters){const e=t;e.isInequality()?this.Vn=this.Vn.add(e):this.fn.push(e)}}get gn(){return this.Vn.size>1}pn(e){if(Ko(e.collectionGroup===this.collectionId,49279),this.gn)return!1;const t=Pa(e);if(void 0!==t&&!this.yn(t))return!1;const n=La(e);let r=new Set,i=0,s=0;for(;i<n.length&&this.yn(n[i]);++i)r=r.add(n[i].fieldPath.canonicalString());if(i===n.length)return!0;if(this.Vn.size>0){const e=this.Vn.getIterator().getNext();if(!r.has(e.field.canonicalString())){const t=n[i];if(!this.wn(e,t)||!this.Sn(this.mn[s++],t))return!1}++i}for(;i<n.length;++i){const e=n[i];if(s>=this.mn.length||!this.Sn(this.mn[s++],e))return!1}return!0}bn(){if(this.gn)return null;let e=new Cc(ba.comparator);const t=[];for(const n of this.fn)if(!n.field.isKeyField())if("array-contains"===n.op||"array-contains-any"===n.op)t.push(new $a(n.field,2));else{if(e.has(n.field))continue;e=e.add(n.field),t.push(new $a(n.field,0))}for(const n of this.mn)n.field.isKeyField()||e.has(n.field)||(e=e.add(n.field),t.push(new $a(n.field,"asc"===n.dir?0:1)));return new Oa(Oa.UNKNOWN_ID,this.collectionId,t,Ma.empty())}yn(e){for(const t of this.fn)if(this.wn(t,e))return!0;return!1}wn(e,t){if(void 0===e||!e.field.isEqual(t.fieldPath))return!1;const n="array-contains"===e.op||"array-contains-any"===e.op;return 2===t.kind===n}Sn(e,t){return!!e.field.isEqual(t.fieldPath)&&(0===t.kind&&"asc"===e.dir||1===t.kind&&"desc"===e.dir)}}
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
 */function jp(e){var t,n;if(Ko(e instanceof Nu||e instanceof Ru,20012),e instanceof Nu){if(e instanceof Gu){const r=(null===(n=null===(t=e.value.arrayValue)||void 0===t?void 0:t.values)||void 0===n?void 0:n.map(t=>Nu.create(e.field,"==",t)))||[];return Ru.create(r,"or")}return e}const r=e.filters.map(e=>jp(e));return Ru.create(r,e.op)}function Bp(e){if(0===e.getFilters().length)return[];const t=Kp(jp(e));return Ko(Gp(t),7391),qp(t)||Hp(t)?[t]:t.getFilters()}function qp(e){return e instanceof Nu}function Hp(e){return e instanceof Ru&&Lu(e)}function Gp(e){return qp(e)||Hp(e)||function(e){if(e instanceof Ru&&Pu(e)){for(const t of e.getFilters())if(!qp(t)&&!Hp(t))return!1;return!0}return!1}(e)}function Kp(e){if(Ko(e instanceof Nu||e instanceof Ru,34018),e instanceof Nu)return e;if(1===e.filters.length)return Kp(e.filters[0]);const t=e.filters.map(e=>Kp(e));let n=Ru.create(t,e.op);return n=Qp(n),Gp(n)?n:(Ko(n instanceof Ru,64498),Ko(Ou(n),40251),Ko(n.filters.length>1,57927),n.filters.reduce((e,t)=>Wp(e,t)))}function Wp(e,t){let n;return Ko(e instanceof Nu||e instanceof Ru,38388),Ko(t instanceof Nu||t instanceof Ru,25473),n=e instanceof Nu?t instanceof Nu?function(e,t){return Ru.create([e,t],"and")}(e,t):Xp(e,t):t instanceof Nu?Xp(t,e):function(e,t){if(Ko(e.filters.length>0&&t.filters.length>0,48005),Ou(e)&&Ou(t))return Fu(e,t.getFilters());const n=Pu(e)?e:t,r=Pu(e)?t:e,i=n.filters.map(e=>Wp(e,r));return Ru.create(i,"or")}(e,t),Qp(n)}function Xp(e,t){if(Ou(t))return Fu(t,e.getFilters());{const n=t.filters.map(t=>Wp(e,t));return Ru.create(n,"or")}}function Qp(e){if(Ko(e instanceof Nu||e instanceof Ru,11850),e instanceof Nu)return e;const t=e.getFilters();if(1===t.length)return Qp(t[0]);if($u(e))return e;const n=t.map(e=>Qp(e)),r=[];return n.forEach(t=>{t instanceof Nu?r.push(t):t instanceof Ru&&(t.op===e.op?r.push(...t.filters):r.push(t))}),1===r.length?r[0]:Ru.create(r,e.op)
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
 */}class Jp{constructor(){this.Dn=new Yp}addToCollectionParentIndex(e,t){return this.Dn.add(t),qa.resolve()}getCollectionParents(e,t){return qa.resolve(this.Dn.getEntries(t))}addFieldIndex(e,t){return qa.resolve()}deleteFieldIndex(e,t){return qa.resolve()}deleteAllFieldIndexes(e){return qa.resolve()}createTargetIndexes(e,t){return qa.resolve()}getDocumentsMatchingTarget(e,t){return qa.resolve(null)}getIndexType(e,t){return qa.resolve(0)}getFieldIndexes(e,t){return qa.resolve([])}getNextCollectionGroupToUpdate(e){return qa.resolve(null)}getMinOffset(e,t){return qa.resolve(Fa.min())}getMinOffsetFromCollectionGroup(e,t){return qa.resolve(Fa.min())}updateCollectionGroup(e,t,n){return qa.resolve()}updateIndexEntries(e,t){return qa.resolve()}}class Yp{constructor(){this.index={}}add(e){const t=e.lastSegment(),n=e.popLast(),r=this.index[t]||new Cc(va.comparator),i=!r.has(n);return this.index[t]=r.add(n),i}has(e){const t=e.lastSegment(),n=e.popLast(),r=this.index[t];return r&&r.has(n)}getEntries(e){return(this.index[e]||new Cc(va.comparator)).toArray()}}
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
 */const Zp="IndexedDbIndexManager",ef=new Uint8Array(0);class tf{constructor(e,t){this.databaseId=t,this.vn=new Yp,this.Cn=new vd(e=>Ju(e),(e,t)=>Yu(e,t)),this.uid=e.uid||""}addToCollectionParentIndex(e,t){if(!this.vn.has(t)){const n=t.lastSegment(),r=t.popLast();e.addOnCommittedListener(()=>{this.vn.add(t)});const i={collectionId:n,parent:ul(r)};return nf(e).put(i)}return qa.resolve()}getCollectionParents(e,t){const n=[],r=IDBKeyRange.bound([t,""],[fa(t),""],!1,!0);return nf(e).j(r).next(e=>{for(const r of e){if(r.collectionId!==t)break;n.push(pl(r.parent))}return n})}addFieldIndex(e,t){const n=sf(e),r=function(e){return{indexId:e.indexId,collectionGroup:e.collectionGroup,fields:e.fields.map(e=>[e.fieldPath.canonicalString(),e.kind])}}(t);delete r.indexId;const i=n.add(r);if(t.indexState){const n=of(e);return i.next(e=>{n.put(_p(e,this.uid,t.indexState.sequenceNumber,t.indexState.offset))})}return i.next()}deleteFieldIndex(e,t){const n=sf(e),r=of(e),i=rf(e);return n.delete(t.indexId).next(()=>r.delete(IDBKeyRange.bound([t.indexId],[t.indexId+1],!1,!0))).next(()=>i.delete(IDBKeyRange.bound([t.indexId],[t.indexId+1],!1,!0)))}deleteAllFieldIndexes(e){const t=sf(e),n=rf(e),r=of(e);return t.Y().next(()=>n.Y()).next(()=>r.Y())}createTargetIndexes(e,t){return qa.forEach(this.Fn(t),t=>this.getIndexType(e,t).next(n=>{if(0===n||1===n){const n=new zp(t).bn();if(null!=n)return this.addFieldIndex(e,n)}}))}getDocumentsMatchingTarget(e,t){const n=rf(e);let r=!0;const i=new Map;return qa.forEach(this.Fn(t),t=>this.Mn(e,t).next(e=>{r&&(r=!!e),i.set(t,e)})).next(()=>{if(r){let e=kd();const r=[];return qa.forEach(i,(i,s)=>{zo(Zp,`Using index ${function(e){return`id=${e.indexId}|cg=${e.collectionGroup}|f=${e.fields.map(e=>`${e.fieldPath}:${e.kind}`).join(",")}`}(i)} to execute ${Ju(t)}`);const o=function(e,t){const n=Pa(t);if(void 0===n)return null;for(const t of ed(e,n.fieldPath))switch(t.op){case"array-contains-any":return t.value.arrayValue.values||[];case"array-contains":return[t.value]}return null}(s,i),a=function(e,t){const n=new Map;for(const r of La(t))for(const t of ed(e,r.fieldPath))switch(t.op){case"==":case"in":n.set(r.fieldPath.canonicalString(),t.value);break;case"not-in":case"!=":return n.set(r.fieldPath.canonicalString(),t.value),Array.from(n.values())}return null}(s,i),l=function(e,t){const n=[];let r=!0;for(const i of La(t)){const t=0===i.kind?td(e,i.fieldPath,e.startAt):nd(e,i.fieldPath,e.startAt);n.push(t.value),r&&(r=t.inclusive)}return new Iu(n,r)}(s,i),c=function(e,t){const n=[];let r=!0;for(const i of La(t)){const t=0===i.kind?nd(e,i.fieldPath,e.endAt):td(e,i.fieldPath,e.endAt);n.push(t.value),r&&(r=t.inclusive)}return new Iu(n,r)}(s,i),u=this.xn(i,s,l),d=this.xn(i,s,c),h=this.On(i,s,a),p=this.Nn(i.indexId,o,u,l.inclusive,d,c.inclusive,h);return qa.forEach(p,i=>n.H(i,t.limit).next(t=>{t.forEach(t=>{const n=wa.fromSegments(t.documentKey);e.has(n)||(e=e.add(n),r.push(n))})}))}).next(()=>r)}return qa.resolve(null)})}Fn(e){let t=this.Cn.get(e);return t||(t=0===e.filters.length?[e]:Bp(Ru.create(e.filters,"and")).map(t=>Qu(e.path,e.collectionGroup,e.orderBy,t.getFilters(),e.limit,e.startAt,e.endAt)),this.Cn.set(e,t),t)}Nn(e,t,n,r,i,s,o){const a=(null!=t?t.length:1)*Math.max(n.length,i.length),l=a/(null!=t?t.length:1),c=[];for(let u=0;u<a;++u){const a=t?this.Bn(t[u/l]):ef,d=this.Ln(e,a,n[u%l],r),h=this.kn(e,a,i[u%l],s),p=o.map(t=>this.Ln(e,a,t,!0));c.push(...this.createRange(d,h,p))}return c}Ln(e,t,n,r){const i=new $p(e,wa.empty(),t,n);return r?i:i.En()}kn(e,t,n,r){const i=new $p(e,wa.empty(),t,n);return r?i.En():i}Mn(e,t){const n=new zp(t),r=null!=t.collectionGroup?t.collectionGroup:t.path.lastSegment();return this.getFieldIndexes(e,r).next(e=>{let t=null;for(const r of e)n.pn(r)&&(!t||r.fields.length>t.fields.length)&&(t=r);return t})}getIndexType(e,t){let n=2;const r=this.Fn(t);return qa.forEach(r,t=>this.Mn(e,t).next(e=>{e?0!==n&&e.fields.length<function(e){let t=new Cc(ba.comparator),n=!1;for(const r of e.filters)for(const e of r.getFlattenedFilters())e.field.isKeyField()||("array-contains"===e.op||"array-contains-any"===e.op?n=!0:t=t.add(e.field));for(const n of e.orderBy)n.field.isKeyField()||(t=t.add(n.field));return t.size+(n?1:0)}(t)&&(n=1):n=0})).next(()=>function(e){return null!==e.limit}(t)&&r.length>1&&2===n?1:n)}qn(e,t){const n=new Lp;for(const r of La(e)){const e=t.data.field(r.fieldPath);if(null==e)return null;const i=n.hn(r.kind);kp.Ut.bt(e,i)}return n.an()}Bn(e){const t=new Lp;return kp.Ut.bt(e,t.hn(0)),t.an()}Qn(e,t){const n=new Lp;return kp.Ut.bt(lu(this.databaseId,t),n.hn(function(e){const t=La(e);return 0===t.length?0:t[t.length-1].kind}(e))),n.an()}On(e,t,n){if(null===n)return[];let r=[];r.push(new Lp);let i=0;for(const s of La(e)){const e=n[i++];for(const n of r)if(this.$n(t,s.fieldPath)&&uu(e))r=this.Un(r,s,e);else{const t=n.hn(s.kind);kp.Ut.bt(e,t)}}return this.Kn(r)}xn(e,t,n){return this.On(e,t,n.position)}Kn(e){const t=[];for(let n=0;n<e.length;++n)t[n]=e[n].an();return t}Un(e,t,n){const r=[...e],i=[];for(const e of n.arrayValue.values||[])for(const n of r){const r=new Lp;r.seed(n.an()),kp.Ut.bt(e,r.hn(t.kind)),i.push(r)}return i}$n(e,t){return!!e.filters.find(e=>e instanceof Nu&&e.field.isEqual(t)&&("in"===e.op||"not-in"===e.op))}getFieldIndexes(e,t){const n=sf(e),r=of(e);return(t?n.j(Xl,IDBKeyRange.bound(t,t)):n.j()).next(e=>{const t=[];return qa.forEach(e,e=>r.get([e.indexId,this.uid]).next(n=>{t.push(function(e,t){const n=t?new Ma(t.sequenceNumber,new Fa(fp(t.readTime),new wa(pl(t.documentKey)),t.largestBatchId)):Ma.empty(),r=e.fields.map(([e,t])=>new $a(ba.fromServerFormat(e),t));return new Oa(e.indexId,e.collectionGroup,r,n)}(e,n))})).next(()=>t)})}getNextCollectionGroupToUpdate(e){return this.getFieldIndexes(e).next(e=>0===e.length?null:(e.sort((e,t)=>{const n=e.indexState.sequenceNumber-t.indexState.sequenceNumber;return 0!==n?n:ca(e.collectionGroup,t.collectionGroup)}),e[0].collectionGroup))}updateCollectionGroup(e,t,n){const r=sf(e),i=of(e);return this.Wn(e).next(e=>r.j(Xl,IDBKeyRange.bound(t,t)).next(t=>qa.forEach(t,t=>i.put(_p(t.indexId,this.uid,e,n)))))}updateIndexEntries(e,t){const n=new Map;return qa.forEach(t,(t,r)=>{const i=n.get(t.collectionGroup);return(i?qa.resolve(i):this.getFieldIndexes(e,t.collectionGroup)).next(i=>(n.set(t.collectionGroup,i),qa.forEach(i,n=>this.Gn(e,t,n).next(t=>{const i=this.zn(r,n);return t.isEqual(i)?qa.resolve():this.jn(e,r,n,t,i)}))))})}Jn(e,t,n,r){return rf(e).put(r.An(this.uid,this.Qn(n,t.key),t.key))}Hn(e,t,n,r){return rf(e).delete(r.Rn(this.uid,this.Qn(n,t.key),t.key))}Gn(e,t,n){const r=rf(e);let i=new Cc(Mp);return r.X({index:nc,range:IDBKeyRange.only([n.indexId,this.uid,Fp(this.Qn(n,t))])},(e,r)=>{i=i.add(new $p(n.indexId,t,Vp(r.arrayValue),Vp(r.directionalValue)))}).next(()=>i)}zn(e,t){let n=new Cc(Mp);const r=this.qn(t,e);if(null==r)return n;const i=Pa(t);if(null!=i){const s=e.data.field(i.fieldPath);if(uu(s))for(const i of s.arrayValue.values||[])n=n.add(new $p(t.indexId,e.key,this.Bn(i),r))}else n=n.add(new $p(t.indexId,e.key,ef,r));return n}jn(e,t,n,r,i){zo(Zp,"Updating index entries for document '%s'",t.key);const s=[];return function(e,t,n,r,i){const s=e.getIterator(),o=t.getIterator();let a=Ac(s),l=Ac(o);for(;a||l;){let e=!1,t=!1;if(a&&l){const r=n(a,l);r<0?t=!0:r>0&&(e=!0)}else null!=a?t=!0:e=!0;e?(r(l),l=Ac(o)):t?(i(a),a=Ac(s)):(a=Ac(s),l=Ac(o))}}(r,i,Mp,r=>{s.push(this.Jn(e,t,n,r))},r=>{s.push(this.Hn(e,t,n,r))}),qa.waitFor(s)}Wn(e){let t=1;return of(e).X({index:Yl,reverse:!0,range:IDBKeyRange.upperBound([this.uid,Number.MAX_SAFE_INTEGER])},(e,n,r)=>{r.done(),t=n.sequenceNumber+1}).next(()=>t)}createRange(e,t,n){n=n.sort((e,t)=>Mp(e,t)).filter((e,t,n)=>!t||0!==Mp(e,n[t-1]));const r=[];r.push(e);for(const i of n){const n=Mp(i,e),s=Mp(i,t);if(0===n)r[0]=e.En();else if(n>0&&s<0)r.push(i),r.push(i.En());else if(s>0)break}r.push(t);const i=[];for(let e=0;e<r.length;e+=2){if(this.Yn(r[e],r[e+1]))return[];const t=r[e].Rn(this.uid,ef,wa.empty()),n=r[e+1].Rn(this.uid,ef,wa.empty());i.push(IDBKeyRange.bound(t,n))}return i}Yn(e,t){return Mp(e,t)>0}getMinOffsetFromCollectionGroup(e,t){return this.getFieldIndexes(e,t).next(af)}getMinOffset(e,t){return qa.mapArray(this.Fn(t),t=>this.Mn(e,t).next(e=>e||Ho(44426))).next(af)}}function nf(e){return wc(e,Bl)}function rf(e){return wc(e,ec)}function sf(e){return wc(e,Wl)}function of(e){return wc(e,Ql)}function af(e){Ko(0!==e.length,28825);let t=e[0].indexState.offset,n=t.largestBatchId;for(let r=1;r<e.length;r++){const i=e[r].indexState.offset;Va(i,t)<0&&(t=i),n<i.largestBatchId&&(n=i.largestBatchId)}return new Fa(t.readTime,t.documentKey,n)}
/**
 * @license
 * Copyright 2018 Google LLC
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
 */const lf={didRun:!1,sequenceNumbersCollected:0,targetsRemoved:0,documentsRemoved:0},cf=41943040;class uf{static withCacheSize(e){return new uf(e,uf.DEFAULT_COLLECTION_PERCENTILE,uf.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT)}constructor(e,t,n){this.cacheSizeCollectionThreshold=e,this.percentileToCollect=t,this.maximumSequenceNumbersToCollect=n}}
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
 */function df(e,t,n){const r=e.store(yl),i=e.store(Il),s=[],o=IDBKeyRange.only(n.batchId);let a=0;const l=r.X({range:o},(e,t,n)=>(a++,n.delete()));s.push(l.next(()=>{Ko(1===a,47070,{batchId:n.batchId})}));const c=[];for(const e of n.mutations){const r=El(t,e.key.path,n.batchId);s.push(i.delete(r)),c.push(e.key)}return qa.waitFor(s).next(()=>c)}function hf(e){if(!e)return 0;let t;if(e.document)t=e.document;else if(e.unknownDocument)t=e.unknownDocument;else{if(!e.noDocument)throw Ho(14731);t=e.noDocument}return JSON.stringify(t).length}
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
 */uf.DEFAULT_COLLECTION_PERCENTILE=10,uf.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT=1e3,uf.DEFAULT=new uf(cf,uf.DEFAULT_COLLECTION_PERCENTILE,uf.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT),uf.DISABLED=new uf(-1,0,0);class pf{constructor(e,t,n,r){this.userId=e,this.serializer=t,this.indexManager=n,this.referenceDelegate=r,this.Zn={}}static yt(e,t,n,r){Ko(""!==e.uid,64387);const i=e.isAuthenticated()?e.uid:"";return new pf(i,t,n,r)}checkEmpty(e){let t=!0;const n=IDBKeyRange.bound([this.userId,Number.NEGATIVE_INFINITY],[this.userId,Number.POSITIVE_INFINITY]);return mf(e).X({index:wl,range:n},(e,n,r)=>{t=!1,r.done()}).next(()=>t)}addMutationBatch(e,t,n,r){const i=gf(e),s=mf(e);return s.add({}).next(o=>{Ko("number"==typeof o,49019);const a=new lh(o,t,n,r),l=function(e,t,n){const r=n.baseMutations.map(t=>Wh(e.gt,t)),i=n.mutations.map(t=>Wh(e.gt,t));return{userId:t,batchId:n.batchId,localWriteTimeMs:n.localWriteTime.toMillis(),baseMutations:r,mutations:i}}(this.serializer,this.userId,a),c=[];let u=new Cc((e,t)=>ca(e.canonicalString(),t.canonicalString()));for(const e of r){const t=El(this.userId,e.key.path,o);u=u.add(e.key.path.popLast()),c.push(s.put(l)),c.push(i.put(t,Tl))}return u.forEach(t=>{c.push(this.indexManager.addToCollectionParentIndex(e,t))}),e.addOnCommittedListener(()=>{this.Zn[o]=a.keys()}),qa.waitFor(c).next(()=>a)})}lookupMutationBatch(e,t){return mf(e).get(t).next(e=>e?(Ko(e.userId===this.userId,48,"Unexpected user for mutation batch",{userId:e.userId,batchId:t}),mp(this.serializer,e)):null)}Xn(e,t){return this.Zn[t]?qa.resolve(this.Zn[t]):this.lookupMutationBatch(e,t).next(e=>{if(e){const n=e.keys();return this.Zn[t]=n,n}return null})}getNextMutationBatchAfterBatchId(e,t){const n=t+1,r=IDBKeyRange.lowerBound([this.userId,n]);let i=null;return mf(e).X({index:wl,range:r},(e,t,r)=>{t.userId===this.userId&&(Ko(t.batchId>=n,47524,{er:n}),i=mp(this.serializer,t)),r.done()}).next(()=>i)}getHighestUnacknowledgedBatchId(e){const t=IDBKeyRange.upperBound([this.userId,Number.POSITIVE_INFINITY]);let n=ol;return mf(e).X({index:wl,range:t,reverse:!0},(e,t,r)=>{n=t.batchId,r.done()}).next(()=>n)}getAllMutationBatches(e){const t=IDBKeyRange.bound([this.userId,ol],[this.userId,Number.POSITIVE_INFINITY]);return mf(e).j(wl,t).next(e=>e.map(e=>mp(this.serializer,e)))}getAllMutationBatchesAffectingDocumentKey(e,t){const n=xl(this.userId,t.path),r=IDBKeyRange.lowerBound(n),i=[];return gf(e).X({range:r},(n,r,s)=>{const[o,a,l]=n,c=pl(a);if(o===this.userId&&t.path.isEqual(c))return mf(e).get(l).next(e=>{if(!e)throw Ho(61480,{tr:n,batchId:l});Ko(e.userId===this.userId,10503,"Unexpected user for mutation batch",{userId:e.userId,batchId:l}),i.push(mp(this.serializer,e))});s.done()}).next(()=>i)}getAllMutationBatchesAffectingDocumentKeys(e,t){let n=new Cc(ca);const r=[];return t.forEach(t=>{const i=xl(this.userId,t.path),s=IDBKeyRange.lowerBound(i),o=gf(e).X({range:s},(e,r,i)=>{const[s,o,a]=e,l=pl(o);s===this.userId&&t.path.isEqual(l)?n=n.add(a):i.done()});r.push(o)}),qa.waitFor(r).next(()=>this.nr(e,n))}getAllMutationBatchesAffectingQuery(e,t){const n=t.path,r=n.length+1,i=xl(this.userId,n),s=IDBKeyRange.lowerBound(i);let o=new Cc(ca);return gf(e).X({range:s},(e,t,i)=>{const[s,a,l]=e,c=pl(a);s===this.userId&&n.isPrefixOf(c)?c.length===r&&(o=o.add(l)):i.done()}).next(()=>this.nr(e,o))}nr(e,t){const n=[],r=[];return t.forEach(t=>{r.push(mf(e).get(t).next(e=>{if(null===e)throw Ho(35274,{batchId:t});Ko(e.userId===this.userId,9748,"Unexpected user for mutation batch",{userId:e.userId,batchId:t}),n.push(mp(this.serializer,e))}))}),qa.waitFor(r).next(()=>n)}removeMutationBatch(e,t){return df(e.ce,this.userId,t).next(n=>(e.addOnCommittedListener(()=>{this.rr(t.batchId)}),qa.forEach(n,t=>this.referenceDelegate.markPotentiallyOrphaned(e,t))))}rr(e){delete this.Zn[e]}performConsistencyCheck(e){return this.checkEmpty(e).next(t=>{if(!t)return qa.resolve();const n=IDBKeyRange.lowerBound(function(e){return[e]}(this.userId)),r=[];return gf(e).X({range:n},(e,t,n)=>{if(e[0]===this.userId){const t=pl(e[1]);r.push(t)}else n.done()}).next(()=>{Ko(0===r.length,56720,{ir:r.map(e=>e.canonicalString())})})})}containsKey(e,t){return ff(e,this.userId,t)}sr(e){return vf(e).get(this.userId).next(e=>e||{userId:this.userId,lastAcknowledgedBatchId:ol,lastStreamToken:""})}}function ff(e,t,n){const r=xl(t,n.path),i=r[1],s=IDBKeyRange.lowerBound(r);let o=!1;return gf(e).X({range:s,Z:!0},(e,n,r)=>{const[s,a,l]=e;s===t&&a===i&&(o=!0),r.done()}).next(()=>o)}function mf(e){return wc(e,yl)}function gf(e){return wc(e,Il)}function vf(e){return wc(e,vl)}
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
 */class yf{constructor(e){this._r=e}next(){return this._r+=2,this._r}static ar(){return new yf(0)}static ur(){return new yf(-1)}}
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
 */class bf{constructor(e,t){this.referenceDelegate=e,this.serializer=t}allocateTargetId(e){return this.cr(e).next(t=>{const n=new yf(t.highestTargetId);return t.highestTargetId=n.next(),this.lr(e,t).next(()=>t.highestTargetId)})}getLastRemoteSnapshotVersion(e){return this.cr(e).next(e=>Ra.fromTimestamp(new Na(e.lastRemoteSnapshotVersion.seconds,e.lastRemoteSnapshotVersion.nanoseconds)))}getHighestSequenceNumber(e){return this.cr(e).next(e=>e.highestListenSequenceNumber)}setTargetsMetadata(e,t,n){return this.cr(e).next(r=>(r.highestListenSequenceNumber=t,n&&(r.lastRemoteSnapshotVersion=n.toTimestamp()),t>r.highestListenSequenceNumber&&(r.highestListenSequenceNumber=t),this.lr(e,r)))}addTargetData(e,t){return this.hr(e,t).next(()=>this.cr(e).next(n=>(n.targetCount+=1,this.Pr(t,n),this.lr(e,n))))}updateTargetData(e,t){return this.hr(e,t)}removeTargetData(e,t){return this.removeMatchingKeysForTargetId(e,t.targetId).next(()=>wf(e).delete(t.targetId)).next(()=>this.cr(e)).next(t=>(Ko(t.targetCount>0,8065),t.targetCount-=1,this.lr(e,t)))}removeTargets(e,t,n){let r=0;const i=[];return wf(e).X((s,o)=>{const a=gp(o);a.sequenceNumber<=t&&null===n.get(a.targetId)&&(r++,i.push(this.removeTargetData(e,a)))}).next(()=>qa.waitFor(i)).next(()=>r)}forEachTarget(e,t){return wf(e).X((e,n)=>{const r=gp(n);t(r)})}cr(e){return _f(e).get(zl).next(e=>(Ko(null!==e,2888),e))}lr(e,t){return _f(e).put(zl,t)}hr(e,t){return wf(e).put(vp(this.serializer,t))}Pr(e,t){let n=!1;return e.targetId>t.highestTargetId&&(t.highestTargetId=e.targetId,n=!0),e.sequenceNumber>t.highestListenSequenceNumber&&(t.highestListenSequenceNumber=e.sequenceNumber,n=!0),n}getTargetCount(e){return this.cr(e).next(e=>e.targetCount)}getTargetData(e,t){const n=Ju(t),r=IDBKeyRange.bound([n,Number.NEGATIVE_INFINITY],[n,Number.POSITIVE_INFINITY]);let i=null;return wf(e).X({range:r,index:Ll},(e,n,r)=>{const s=gp(n);Yu(t,s.target)&&(i=s,r.done())}).next(()=>i)}addMatchingKeys(e,t,n){const r=[],i=xf(e);return t.forEach(t=>{const s=ul(t.path);r.push(i.put({targetId:n,path:s})),r.push(this.referenceDelegate.addReference(e,n,t))}),qa.waitFor(r)}removeMatchingKeys(e,t,n){const r=xf(e);return qa.forEach(t,t=>{const i=ul(t.path);return qa.waitFor([r.delete([n,i]),this.referenceDelegate.removeReference(e,n,t)])})}removeMatchingKeysForTargetId(e,t){const n=xf(e),r=IDBKeyRange.bound([t],[t+1],!1,!0);return n.delete(r)}getMatchingKeysForTargetId(e,t){const n=IDBKeyRange.bound([t],[t+1],!1,!0),r=xf(e);let i=kd();return r.X({range:n,Z:!0},(e,t,n)=>{const r=pl(e[1]),s=new wa(r);i=i.add(s)}).next(()=>i)}containsKey(e,t){const n=ul(t.path),r=IDBKeyRange.bound([n],[fa(n)],!1,!0);let i=0;return xf(e).X({index:Fl,Z:!0,range:r},([e,t],n,r)=>{0!==e&&(i++,r.done())}).next(()=>i>0)}Et(e,t){return wf(e).get(t).next(e=>e?gp(e):null)}}function wf(e){return wc(e,Pl)}function _f(e){return wc(e,jl)}function xf(e){return wc(e,Ml)}
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
 */const Ef="LruGarbageCollector";function Tf([e,t],[n,r]){const i=ca(e,n);return 0===i?ca(t,r):i}class If{constructor(e){this.Tr=e,this.buffer=new Cc(Tf),this.Ir=0}dr(){return++this.Ir}Er(e){const t=[e,this.dr()];if(this.buffer.size<this.Tr)this.buffer=this.buffer.add(t);else{const e=this.buffer.last();Tf(t,e)<0&&(this.buffer=this.buffer.delete(e).add(t))}}get maxValue(){return this.buffer.last()[0]}}class Sf{constructor(e,t,n){this.garbageCollector=e,this.asyncQueue=t,this.localStore=n,this.Ar=null}start(){-1!==this.garbageCollector.params.cacheSizeCollectionThreshold&&this.Rr(6e4)}stop(){this.Ar&&(this.Ar.cancel(),this.Ar=null)}get started(){return null!==this.Ar}Rr(e){zo(Ef,`Garbage collection scheduled in ${e}ms`),this.Ar=this.asyncQueue.enqueueAfterDelay("lru_garbage_collection",e,async()=>{this.Ar=null;try{await this.localStore.collectGarbage(this.garbageCollector)}catch(e){Ja(e)?zo(Ef,"Ignoring IndexedDB error during garbage collection: ",e):await Ba(e)}await this.Rr(3e5)})}}class Cf{constructor(e,t){this.Vr=e,this.params=t}calculateTargetCount(e,t){return this.Vr.mr(e).next(e=>Math.floor(t/100*e))}nthSequenceNumber(e,t){if(0===t)return qa.resolve(sl.ue);const n=new If(t);return this.Vr.forEachTarget(e,e=>n.Er(e.sequenceNumber)).next(()=>this.Vr.gr(e,e=>n.Er(e))).next(()=>n.maxValue)}removeTargets(e,t,n){return this.Vr.removeTargets(e,t,n)}removeOrphanedDocuments(e,t){return this.Vr.removeOrphanedDocuments(e,t)}collect(e,t){return-1===this.params.cacheSizeCollectionThreshold?(zo("LruGarbageCollector","Garbage collection skipped; disabled"),qa.resolve(lf)):this.getCacheSize(e).next(n=>n<this.params.cacheSizeCollectionThreshold?(zo("LruGarbageCollector",`Garbage collection skipped; Cache size ${n} is lower than threshold ${this.params.cacheSizeCollectionThreshold}`),lf):this.pr(e,t))}getCacheSize(e){return this.Vr.getCacheSize(e)}pr(e,t){let n,r,i,s,o,a,l;const c=Date.now();return this.calculateTargetCount(e,this.params.percentileToCollect).next(t=>(t>this.params.maximumSequenceNumbersToCollect?(zo("LruGarbageCollector",`Capping sequence numbers to collect down to the maximum of ${this.params.maximumSequenceNumbersToCollect} from ${t}`),r=this.params.maximumSequenceNumbersToCollect):r=t,s=Date.now(),this.nthSequenceNumber(e,r))).next(r=>(n=r,o=Date.now(),this.removeTargets(e,n,t))).next(t=>(i=t,a=Date.now(),this.removeOrphanedDocuments(e,n))).next(e=>(l=Date.now(),Vo()<=jt.DEBUG&&zo("LruGarbageCollector",`LRU Garbage Collection\n\tCounted targets in ${s-c}ms\n\tDetermined least recently used ${r} in `+(o-s)+"ms\n"+`\tRemoved ${i} targets in `+(a-o)+"ms\n"+`\tRemoved ${e} documents in `+(l-a)+"ms\n"+`Total Duration: ${l-c}ms`),qa.resolve({didRun:!0,sequenceNumbersCollected:r,targetsRemoved:i,documentsRemoved:e})))}}function kf(e,t){return new Cf(e,t)}
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
 */class Af{constructor(e,t){this.db=e,this.garbageCollector=kf(this,t)}mr(e){const t=this.yr(e);return this.db.getTargetCache().getTargetCount(e).next(e=>t.next(t=>e+t))}yr(e){let t=0;return this.gr(e,e=>{t++}).next(()=>t)}forEachTarget(e,t){return this.db.getTargetCache().forEachTarget(e,t)}gr(e,t){return this.wr(e,(e,n)=>t(n))}addReference(e,t,n){return Df(e,n)}removeReference(e,t,n){return Df(e,n)}removeTargets(e,t,n){return this.db.getTargetCache().removeTargets(e,t,n)}markPotentiallyOrphaned(e,t){return Df(e,t)}Sr(e,t){return function(e,t){let n=!1;return vf(e).ee(r=>ff(e,r,t).next(e=>(e&&(n=!0),qa.resolve(!e)))).next(()=>n)}(e,t)}removeOrphanedDocuments(e,t){const n=this.db.getRemoteDocumentCache().newChangeBuffer(),r=[];let i=0;return this.wr(e,(s,o)=>{if(o<=t){const t=this.Sr(e,s).next(t=>{if(!t)return i++,n.getEntry(e,s).next(()=>(n.removeEntry(s,Ra.min()),xf(e).delete(function(e){return[0,ul(e.path)]}(s))))});r.push(t)}}).next(()=>qa.waitFor(r)).next(()=>n.apply(e)).next(()=>i)}removeTarget(e,t){const n=t.withSequenceNumber(e.currentSequenceNumber);return this.db.getTargetCache().updateTargetData(e,n)}updateLimboDocument(e,t){return Df(e,t)}wr(e,t){const n=xf(e);let r,i=sl.ue;return n.X({index:Fl},([e,n],{path:s,sequenceNumber:o})=>{0===e?(i!==sl.ue&&t(new wa(pl(r)),i),i=o,r=s):i=sl.ue}).next(()=>{i!==sl.ue&&t(new wa(pl(r)),i)})}getCacheSize(e){return this.db.getRemoteDocumentCache().getSize(e)}}function Df(e,t){return xf(e).put(function(e,t){return{targetId:0,path:ul(e.path),sequenceNumber:t}}(t,e.currentSequenceNumber))}
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
 */class Nf{constructor(){this.changes=new vd(e=>e.toString(),(e,t)=>e.isEqual(t)),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,t){this.assertNotApplied(),this.changes.set(e,Tu.newInvalidDocument(e).setReadTime(t))}getEntry(e,t){this.assertNotApplied();const n=this.changes.get(t);return void 0!==n?qa.resolve(n):this.getFromCache(e,t)}getEntries(e,t){return this.getAllFromCache(e,t)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}
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
 */class Rf{constructor(e){this.serializer=e}setIndexManager(e){this.indexManager=e}addEntry(e,t,n){return $f(e).put(n)}removeEntry(e,t,n){return $f(e).delete(function(e,t){const n=e.path.toArray();return[n.slice(0,n.length-2),n[n.length-2],hp(t),n[n.length-1]]}(t,n))}updateMetadata(e,t){return this.getMetadata(e).next(n=>(n.byteSize+=t,this.br(e,n)))}getEntry(e,t){let n=Tu.newInvalidDocument(t);return $f(e).X({index:kl,range:IDBKeyRange.only(Mf(t))},(e,r)=>{n=this.Dr(t,r)}).next(()=>n)}vr(e,t){let n={size:0,document:Tu.newInvalidDocument(t)};return $f(e).X({index:kl,range:IDBKeyRange.only(Mf(t))},(e,r)=>{n={document:this.Dr(t,r),size:hf(r)}}).next(()=>n)}getEntries(e,t){let n=bd();return this.Cr(e,t,(e,t)=>{const r=this.Dr(e,t);n=n.insert(e,r)}).next(()=>n)}Fr(e,t){let n=bd(),r=new Tc(wa.comparator);return this.Cr(e,t,(e,t)=>{const i=this.Dr(e,t);n=n.insert(e,i),r=r.insert(e,hf(t))}).next(()=>({documents:n,Mr:r}))}Cr(e,t,n){if(t.isEmpty())return qa.resolve();let r=new Cc(Ff);t.forEach(e=>r=r.add(e));const i=IDBKeyRange.bound(Mf(r.first()),Mf(r.last())),s=r.getIterator();let o=s.getNext();return $f(e).X({index:kl,range:i},(e,t,r)=>{const i=wa.fromSegments([...t.prefixPath,t.collectionGroup,t.documentId]);for(;o&&Ff(o,i)<0;)n(o,null),o=s.getNext();o&&o.isEqual(i)&&(n(o,t),o=s.hasNext()?s.getNext():null),o?r.G(Mf(o)):r.done()}).next(()=>{for(;o;)n(o,null),o=s.hasNext()?s.getNext():null})}getDocumentsMatchingQuery(e,t,n,r,i){const s=t.path,o=[s.popLast().toArray(),s.lastSegment(),hp(n.readTime),n.documentKey.path.isEmpty()?"":n.documentKey.path.lastSegment()],a=[s.popLast().toArray(),s.lastSegment(),[Number.MAX_SAFE_INTEGER,Number.MAX_SAFE_INTEGER],""];return $f(e).j(IDBKeyRange.bound(o,a,!0)).next(e=>{null==i||i.incrementDocumentReadCount(e.length);let n=bd();for(const i of e){const e=this.Dr(wa.fromSegments(i.prefixPath.concat(i.collectionGroup,i.documentId)),i);e.isFoundDocument()&&(fd(t,e)||r.has(e.key))&&(n=n.insert(e.key,e))}return n})}getAllFromCollectionGroup(e,t,n,r){let i=bd();const s=Uf(t,n),o=Uf(t,Fa.max());return $f(e).X({index:Dl,range:IDBKeyRange.bound(s,o,!0)},(e,t,n)=>{const s=this.Dr(wa.fromSegments(t.prefixPath.concat(t.collectionGroup,t.documentId)),t);i=i.insert(s.key,s),i.size===r&&n.done()}).next(()=>i)}newChangeBuffer(e){return new Pf(this,!!e&&e.trackRemovals)}getSize(e){return this.getMetadata(e).next(e=>e.byteSize)}getMetadata(e){return Lf(e).get(Ol).next(e=>(Ko(!!e,20021),e))}br(e,t){return Lf(e).put(Ol,t)}Dr(e,t){if(t){const e=up(this.serializer,t);if(!e.isNoDocument()||!e.version.isEqual(Ra.min()))return e}return Tu.newInvalidDocument(e)}}function Of(e){return new Rf(e)}class Pf extends Nf{constructor(e,t){super(),this.Or=e,this.trackRemovals=t,this.Nr=new vd(e=>e.toString(),(e,t)=>e.isEqual(t))}applyChanges(e){const t=[];let n=0,r=new Cc((e,t)=>ca(e.canonicalString(),t.canonicalString()));return this.changes.forEach((i,s)=>{const o=this.Nr.get(i);if(t.push(this.Or.removeEntry(e,i,o.readTime)),s.isValidDocument()){const a=dp(this.Or.serializer,s);r=r.add(i.path.popLast());const l=hf(a);n+=l-o.size,t.push(this.Or.addEntry(e,i,a))}else if(n-=o.size,this.trackRemovals){const n=dp(this.Or.serializer,s.convertToNoDocument(Ra.min()));t.push(this.Or.addEntry(e,i,n))}}),r.forEach(n=>{t.push(this.Or.indexManager.addToCollectionParentIndex(e,n))}),t.push(this.Or.updateMetadata(e,n)),qa.waitFor(t)}getFromCache(e,t){return this.Or.vr(e,t).next(e=>(this.Nr.set(t,{size:e.size,readTime:e.document.readTime}),e.document))}getAllFromCache(e,t){return this.Or.Fr(e,t).next(({documents:e,Mr:t})=>(t.forEach((t,n)=>{this.Nr.set(t,{size:n,readTime:e.get(t).readTime})}),e))}}function Lf(e){return wc(e,Rl)}function $f(e){return wc(e,Sl)}function Mf(e){const t=e.path.toArray();return[t.slice(0,t.length-2),t[t.length-2],t[t.length-1]]}function Uf(e,t){const n=t.documentKey.path.toArray();return[e,hp(t.readTime),n.slice(0,n.length-2),n.length>0?n[n.length-1]:""]}function Ff(e,t){const n=e.path.toArray(),r=t.path.toArray();let i=0;for(let e=0;e<n.length-2&&e<r.length-2;++e)if(i=ca(n[e],r[e]),i)return i;return i=ca(n.length,r.length),i||(i=ca(n[n.length-2],r[r.length-2]),i||ca(n[n.length-1],r[r.length-1])
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
 */)}class Vf{constructor(e,t){this.overlayedDocument=e,this.mutatedFields=t}}
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
 */class zf{constructor(e,t,n,r){this.remoteDocumentCache=e,this.mutationQueue=t,this.documentOverlayCache=n,this.indexManager=r}getDocument(e,t){let n=null;return this.documentOverlayCache.getOverlay(e,t).next(r=>(n=r,this.remoteDocumentCache.getEntry(e,t))).next(e=>(null!==n&&Yd(n.mutation,e,Dc.empty(),Na.now()),e))}getDocuments(e,t){return this.remoteDocumentCache.getEntries(e,t).next(t=>this.getLocalViewOfDocuments(e,t,kd()).next(()=>t))}getLocalViewOfDocuments(e,t,n=kd()){const r=Ed();return this.populateOverlays(e,r,t).next(()=>this.computeViews(e,t,r,n).next(e=>{let t=_d();return e.forEach((e,n)=>{t=t.insert(e,n.overlayedDocument)}),t}))}getOverlayedDocuments(e,t){const n=Ed();return this.populateOverlays(e,n,t).next(()=>this.computeViews(e,t,n,kd()))}populateOverlays(e,t,n){const r=[];return n.forEach(e=>{t.has(e)||r.push(e)}),this.documentOverlayCache.getOverlays(e,r).next(e=>{e.forEach((e,n)=>{t.set(e,n)})})}computeViews(e,t,n,r){let i=bd();const s=Id(),o=Id();return t.forEach((e,t)=>{const o=n.get(t.key);r.has(t.key)&&(void 0===o||o.mutation instanceof nh)?i=i.insert(t.key,t):void 0!==o?(s.set(t.key,o.mutation.getFieldMask()),Yd(o.mutation,t,o.mutation.getFieldMask(),Na.now())):s.set(t.key,Dc.empty())}),this.recalculateAndSaveOverlays(e,i).next(e=>(e.forEach((e,t)=>s.set(e,t)),t.forEach((e,t)=>{var n;return o.set(e,new Vf(t,null!==(n=s.get(e))&&void 0!==n?n:null))}),o))}recalculateAndSaveOverlays(e,t){const n=Id();let r=new Tc((e,t)=>e-t),i=kd();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,t).next(e=>{for(const i of e)i.keys().forEach(e=>{const s=t.get(e);if(null===s)return;let o=n.get(e)||Dc.empty();o=i.applyToLocalView(s,o),n.set(e,o);const a=(r.get(i.batchId)||kd()).add(e);r=r.insert(i.batchId,a)})}).next(()=>{const s=[],o=r.getReverseIterator();for(;o.hasNext();){const r=o.getNext(),a=r.key,l=r.value,c=Td();l.forEach(e=>{if(!i.has(e)){const r=Qd(t.get(e),n.get(e));null!==r&&c.set(e,r),i=i.add(e)}}),s.push(this.documentOverlayCache.saveOverlays(e,a,c))}return qa.waitFor(s)}).next(()=>n)}recalculateAndSaveOverlaysForDocumentKeys(e,t){return this.remoteDocumentCache.getEntries(e,t).next(t=>this.recalculateAndSaveOverlays(e,t))}getDocumentsMatchingQuery(e,t,n,r){return function(e){return wa.isDocumentKey(e.path)&&null===e.collectionGroup&&0===e.filters.length}(t)?this.getDocumentsMatchingDocumentQuery(e,t.path):od(t)?this.getDocumentsMatchingCollectionGroupQuery(e,t,n,r):this.getDocumentsMatchingCollectionQuery(e,t,n,r)}getNextDocuments(e,t,n,r){return this.remoteDocumentCache.getAllFromCollectionGroup(e,t,n,r).next(i=>{const s=r-i.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,t,n.largestBatchId,r-i.size):qa.resolve(Ed());let o=-1,a=i;return s.next(t=>qa.forEach(t,(t,n)=>(o<n.largestBatchId&&(o=n.largestBatchId),i.get(t)?qa.resolve():this.remoteDocumentCache.getEntry(e,t).next(e=>{a=a.insert(t,e)}))).next(()=>this.populateOverlays(e,t,i)).next(()=>this.computeViews(e,a,t,kd())).next(e=>({batchId:o,changes:xd(e)})))})}getDocumentsMatchingDocumentQuery(e,t){return this.getDocument(e,new wa(t)).next(e=>{let t=_d();return e.isFoundDocument()&&(t=t.insert(e.key,e)),t})}getDocumentsMatchingCollectionGroupQuery(e,t,n,r){const i=t.collectionGroup;let s=_d();return this.indexManager.getCollectionParents(e,i).next(o=>qa.forEach(o,o=>{const a=function(e,t){return new rd(t,null,e.explicitOrderBy.slice(),e.filters.slice(),e.limit,e.limitType,e.startAt,e.endAt)}(t,o.child(i));return this.getDocumentsMatchingCollectionQuery(e,a,n,r).next(e=>{e.forEach((e,t)=>{s=s.insert(e,t)})})}).next(()=>s))}getDocumentsMatchingCollectionQuery(e,t,n,r){let i;return this.documentOverlayCache.getOverlaysForCollection(e,t.path,n.largestBatchId).next(s=>(i=s,this.remoteDocumentCache.getDocumentsMatchingQuery(e,t,n,i,r))).next(e=>{i.forEach((t,n)=>{const r=n.getKey();null===e.get(r)&&(e=e.insert(r,Tu.newInvalidDocument(r)))});let n=_d();return e.forEach((e,r)=>{const s=i.get(e);void 0!==s&&Yd(s.mutation,r,Dc.empty(),Na.now()),fd(t,r)&&(n=n.insert(e,r))}),n})}}
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
 */class jf{constructor(e){this.serializer=e,this.Br=new Map,this.Lr=new Map}getBundleMetadata(e,t){return qa.resolve(this.Br.get(t))}saveBundleMetadata(e,t){return this.Br.set(t.id,function(e){return{id:e.id,version:e.version,createTime:Mh(e.createTime)}}(t)),qa.resolve()}getNamedQuery(e,t){return qa.resolve(this.Lr.get(t))}saveNamedQuery(e,t){return this.Lr.set(t.name,function(e){return{name:e.name,query:yp(e.bundledQuery),readTime:Mh(e.readTime)}}(t)),qa.resolve()}}
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
 */class Bf{constructor(){this.overlays=new Tc(wa.comparator),this.kr=new Map}getOverlay(e,t){return qa.resolve(this.overlays.get(t))}getOverlays(e,t){const n=Ed();return qa.forEach(t,t=>this.getOverlay(e,t).next(e=>{null!==e&&n.set(t,e)})).next(()=>n)}saveOverlays(e,t,n){return n.forEach((n,r)=>{this.wt(e,t,r)}),qa.resolve()}removeOverlaysForBatchId(e,t,n){const r=this.kr.get(n);return void 0!==r&&(r.forEach(e=>this.overlays=this.overlays.remove(e)),this.kr.delete(n)),qa.resolve()}getOverlaysForCollection(e,t,n){const r=Ed(),i=t.length+1,s=new wa(t.child("")),o=this.overlays.getIteratorFrom(s);for(;o.hasNext();){const e=o.getNext().value,s=e.getKey();if(!t.isPrefixOf(s.path))break;s.path.length===i&&e.largestBatchId>n&&r.set(e.getKey(),e)}return qa.resolve(r)}getOverlaysForCollectionGroup(e,t,n,r){let i=new Tc((e,t)=>e-t);const s=this.overlays.getIterator();for(;s.hasNext();){const e=s.getNext().value;if(e.getKey().getCollectionGroup()===t&&e.largestBatchId>n){let t=i.get(e.largestBatchId);null===t&&(t=Ed(),i=i.insert(e.largestBatchId,t)),t.set(e.getKey(),e)}}const o=Ed(),a=i.getIterator();for(;a.hasNext()&&(a.getNext().value.forEach((e,t)=>o.set(e,t)),!(o.size()>=r)););return qa.resolve(o)}wt(e,t,n){const r=this.overlays.get(n.key);if(null!==r){const e=this.kr.get(r.largestBatchId).delete(n.key);this.kr.set(r.largestBatchId,e)}this.overlays=this.overlays.insert(n.key,new uh(t,n));let i=this.kr.get(t);void 0===i&&(i=kd(),this.kr.set(t,i)),this.kr.set(t,i.add(n.key))}}
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
 */class qf{constructor(){this.sessionToken=Rc.EMPTY_BYTE_STRING}getSessionToken(e){return qa.resolve(this.sessionToken)}setSessionToken(e,t){return this.sessionToken=t,qa.resolve()}}
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
 */class Hf{constructor(){this.qr=new Cc(Gf.Qr),this.$r=new Cc(Gf.Ur)}isEmpty(){return this.qr.isEmpty()}addReference(e,t){const n=new Gf(e,t);this.qr=this.qr.add(n),this.$r=this.$r.add(n)}Kr(e,t){e.forEach(e=>this.addReference(e,t))}removeReference(e,t){this.Wr(new Gf(e,t))}Gr(e,t){e.forEach(e=>this.removeReference(e,t))}zr(e){const t=new wa(new va([])),n=new Gf(t,e),r=new Gf(t,e+1),i=[];return this.$r.forEachInRange([n,r],e=>{this.Wr(e),i.push(e.key)}),i}jr(){this.qr.forEach(e=>this.Wr(e))}Wr(e){this.qr=this.qr.delete(e),this.$r=this.$r.delete(e)}Jr(e){const t=new wa(new va([])),n=new Gf(t,e),r=new Gf(t,e+1);let i=kd();return this.$r.forEachInRange([n,r],e=>{i=i.add(e.key)}),i}containsKey(e){const t=new Gf(e,0),n=this.qr.firstAfterOrEqual(t);return null!==n&&e.isEqual(n.key)}}class Gf{constructor(e,t){this.key=e,this.Hr=t}static Qr(e,t){return wa.comparator(e.key,t.key)||ca(e.Hr,t.Hr)}static Ur(e,t){return ca(e.Hr,t.Hr)||wa.comparator(e.key,t.key)}}
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
 */class Kf{constructor(e,t){this.indexManager=e,this.referenceDelegate=t,this.mutationQueue=[],this.er=1,this.Yr=new Cc(Gf.Qr)}checkEmpty(e){return qa.resolve(0===this.mutationQueue.length)}addMutationBatch(e,t,n,r){const i=this.er;this.er++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const s=new lh(i,t,n,r);this.mutationQueue.push(s);for(const t of r)this.Yr=this.Yr.add(new Gf(t.key,i)),this.indexManager.addToCollectionParentIndex(e,t.key.path.popLast());return qa.resolve(s)}lookupMutationBatch(e,t){return qa.resolve(this.Zr(t))}getNextMutationBatchAfterBatchId(e,t){const n=t+1,r=this.Xr(n),i=r<0?0:r;return qa.resolve(this.mutationQueue.length>i?this.mutationQueue[i]:null)}getHighestUnacknowledgedBatchId(){return qa.resolve(0===this.mutationQueue.length?ol:this.er-1)}getAllMutationBatches(e){return qa.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,t){const n=new Gf(t,0),r=new Gf(t,Number.POSITIVE_INFINITY),i=[];return this.Yr.forEachInRange([n,r],e=>{const t=this.Zr(e.Hr);i.push(t)}),qa.resolve(i)}getAllMutationBatchesAffectingDocumentKeys(e,t){let n=new Cc(ca);return t.forEach(e=>{const t=new Gf(e,0),r=new Gf(e,Number.POSITIVE_INFINITY);this.Yr.forEachInRange([t,r],e=>{n=n.add(e.Hr)})}),qa.resolve(this.ei(n))}getAllMutationBatchesAffectingQuery(e,t){const n=t.path,r=n.length+1;let i=n;wa.isDocumentKey(i)||(i=i.child(""));const s=new Gf(new wa(i),0);let o=new Cc(ca);return this.Yr.forEachWhile(e=>{const t=e.key.path;return!!n.isPrefixOf(t)&&(t.length===r&&(o=o.add(e.Hr)),!0)},s),qa.resolve(this.ei(o))}ei(e){const t=[];return e.forEach(e=>{const n=this.Zr(e);null!==n&&t.push(n)}),t}removeMutationBatch(e,t){Ko(0===this.ti(t.batchId,"removed"),55003),this.mutationQueue.shift();let n=this.Yr;return qa.forEach(t.mutations,r=>{const i=new Gf(r.key,t.batchId);return n=n.delete(i),this.referenceDelegate.markPotentiallyOrphaned(e,r.key)}).next(()=>{this.Yr=n})}rr(e){}containsKey(e,t){const n=new Gf(t,0),r=this.Yr.firstAfterOrEqual(n);return qa.resolve(t.isEqual(r&&r.key))}performConsistencyCheck(e){return this.mutationQueue.length,qa.resolve()}ti(e,t){return this.Xr(e)}Xr(e){return 0===this.mutationQueue.length?0:e-this.mutationQueue[0].batchId}Zr(e){const t=this.Xr(e);return t<0||t>=this.mutationQueue.length?null:this.mutationQueue[t]}}
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
 */class Wf{constructor(e){this.ni=e,this.docs=new Tc(wa.comparator),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,t){const n=t.key,r=this.docs.get(n),i=r?r.size:0,s=this.ni(t);return this.docs=this.docs.insert(n,{document:t.mutableCopy(),size:s}),this.size+=s-i,this.indexManager.addToCollectionParentIndex(e,n.path.popLast())}removeEntry(e){const t=this.docs.get(e);t&&(this.docs=this.docs.remove(e),this.size-=t.size)}getEntry(e,t){const n=this.docs.get(t);return qa.resolve(n?n.document.mutableCopy():Tu.newInvalidDocument(t))}getEntries(e,t){let n=bd();return t.forEach(e=>{const t=this.docs.get(e);n=n.insert(e,t?t.document.mutableCopy():Tu.newInvalidDocument(e))}),qa.resolve(n)}getDocumentsMatchingQuery(e,t,n,r){let i=bd();const s=t.path,o=new wa(s.child("__id-9223372036854775808__")),a=this.docs.getIteratorFrom(o);for(;a.hasNext();){const{key:e,value:{document:o}}=a.getNext();if(!s.isPrefixOf(e.path))break;e.path.length>s.length+1||Va(Ua(o),n)<=0||(r.has(o.key)||fd(t,o))&&(i=i.insert(o.key,o.mutableCopy()))}return qa.resolve(i)}getAllFromCollectionGroup(e,t,n,r){Ho(9500)}ri(e,t){return qa.forEach(this.docs,e=>t(e))}newChangeBuffer(e){return new Xf(this)}getSize(e){return qa.resolve(this.size)}}class Xf extends Nf{constructor(e){super(),this.Or=e}applyChanges(e){const t=[];return this.changes.forEach((n,r)=>{r.isValidDocument()?t.push(this.Or.addEntry(e,r)):this.Or.removeEntry(n)}),qa.waitFor(t)}getFromCache(e,t){return this.Or.getEntry(e,t)}getAllFromCache(e,t){return this.Or.getEntries(e,t)}}
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
 */class Qf{constructor(e){this.persistence=e,this.ii=new vd(e=>Ju(e),Yu),this.lastRemoteSnapshotVersion=Ra.min(),this.highestTargetId=0,this.si=0,this.oi=new Hf,this.targetCount=0,this._i=yf.ar()}forEachTarget(e,t){return this.ii.forEach((e,n)=>t(n)),qa.resolve()}getLastRemoteSnapshotVersion(e){return qa.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return qa.resolve(this.si)}allocateTargetId(e){return this.highestTargetId=this._i.next(),qa.resolve(this.highestTargetId)}setTargetsMetadata(e,t,n){return n&&(this.lastRemoteSnapshotVersion=n),t>this.si&&(this.si=t),qa.resolve()}hr(e){this.ii.set(e.target,e);const t=e.targetId;t>this.highestTargetId&&(this._i=new yf(t),this.highestTargetId=t),e.sequenceNumber>this.si&&(this.si=e.sequenceNumber)}addTargetData(e,t){return this.hr(t),this.targetCount+=1,qa.resolve()}updateTargetData(e,t){return this.hr(t),qa.resolve()}removeTargetData(e,t){return this.ii.delete(t.target),this.oi.zr(t.targetId),this.targetCount-=1,qa.resolve()}removeTargets(e,t,n){let r=0;const i=[];return this.ii.forEach((s,o)=>{o.sequenceNumber<=t&&null===n.get(o.targetId)&&(this.ii.delete(s),i.push(this.removeMatchingKeysForTargetId(e,o.targetId)),r++)}),qa.waitFor(i).next(()=>r)}getTargetCount(e){return qa.resolve(this.targetCount)}getTargetData(e,t){const n=this.ii.get(t)||null;return qa.resolve(n)}addMatchingKeys(e,t,n){return this.oi.Kr(t,n),qa.resolve()}removeMatchingKeys(e,t,n){this.oi.Gr(t,n);const r=this.persistence.referenceDelegate,i=[];return r&&t.forEach(t=>{i.push(r.markPotentiallyOrphaned(e,t))}),qa.waitFor(i)}removeMatchingKeysForTargetId(e,t){return this.oi.zr(t),qa.resolve()}getMatchingKeysForTargetId(e,t){const n=this.oi.Jr(t);return qa.resolve(n)}containsKey(e,t){return qa.resolve(this.oi.containsKey(t))}}
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
 */class Jf{constructor(e,t){this.ai={},this.overlays={},this.ui=new sl(0),this.ci=!1,this.ci=!0,this.li=new qf,this.referenceDelegate=e(this),this.hi=new Qf(this),this.indexManager=new Jp,this.remoteDocumentCache=function(e){return new Wf(e)}(e=>this.referenceDelegate.Pi(e)),this.serializer=new cp(t),this.Ti=new jf(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.ci=!1,Promise.resolve()}get started(){return this.ci}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let t=this.overlays[e.toKey()];return t||(t=new Bf,this.overlays[e.toKey()]=t),t}getMutationQueue(e,t){let n=this.ai[e.toKey()];return n||(n=new Kf(t,this.referenceDelegate),this.ai[e.toKey()]=n),n}getGlobalsCache(){return this.li}getTargetCache(){return this.hi}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Ti}runTransaction(e,t,n){zo("MemoryPersistence","Starting transaction:",e);const r=new Yf(this.ui.next());return this.referenceDelegate.Ii(),n(r).next(e=>this.referenceDelegate.di(r).next(()=>e)).toPromise().then(e=>(r.raiseOnCommittedEvent(),e))}Ei(e,t){return qa.or(Object.values(this.ai).map(n=>()=>n.containsKey(e,t)))}}class Yf extends ja{constructor(e){super(),this.currentSequenceNumber=e}}class Zf{constructor(e){this.persistence=e,this.Ai=new Hf,this.Ri=null}static Vi(e){return new Zf(e)}get mi(){if(this.Ri)return this.Ri;throw Ho(60996)}addReference(e,t,n){return this.Ai.addReference(n,t),this.mi.delete(n.toString()),qa.resolve()}removeReference(e,t,n){return this.Ai.removeReference(n,t),this.mi.add(n.toString()),qa.resolve()}markPotentiallyOrphaned(e,t){return this.mi.add(t.toString()),qa.resolve()}removeTarget(e,t){this.Ai.zr(t.targetId).forEach(e=>this.mi.add(e.toString()));const n=this.persistence.getTargetCache();return n.getMatchingKeysForTargetId(e,t.targetId).next(e=>{e.forEach(e=>this.mi.add(e.toString()))}).next(()=>n.removeTargetData(e,t))}Ii(){this.Ri=new Set}di(e){const t=this.persistence.getRemoteDocumentCache().newChangeBuffer();return qa.forEach(this.mi,n=>{const r=wa.fromPath(n);return this.fi(e,r).next(e=>{e||t.removeEntry(r,Ra.min())})}).next(()=>(this.Ri=null,t.apply(e)))}updateLimboDocument(e,t){return this.fi(e,t).next(e=>{e?this.mi.delete(t.toString()):this.mi.add(t.toString())})}Pi(e){return 0}fi(e,t){return qa.or([()=>qa.resolve(this.Ai.containsKey(t)),()=>this.persistence.getTargetCache().containsKey(e,t),()=>this.persistence.Ei(e,t)])}}class em{constructor(e,t){this.persistence=e,this.gi=new vd(e=>ul(e.path),(e,t)=>e.isEqual(t)),this.garbageCollector=kf(this,t)}static Vi(e,t){return new em(e,t)}Ii(){}di(e){return qa.resolve()}forEachTarget(e,t){return this.persistence.getTargetCache().forEachTarget(e,t)}mr(e){const t=this.yr(e);return this.persistence.getTargetCache().getTargetCount(e).next(e=>t.next(t=>e+t))}yr(e){let t=0;return this.gr(e,e=>{t++}).next(()=>t)}gr(e,t){return qa.forEach(this.gi,(n,r)=>this.Sr(e,n,r).next(e=>e?qa.resolve():t(r)))}removeTargets(e,t,n){return this.persistence.getTargetCache().removeTargets(e,t,n)}removeOrphanedDocuments(e,t){let n=0;const r=this.persistence.getRemoteDocumentCache(),i=r.newChangeBuffer();return r.ri(e,r=>this.Sr(e,r,t).next(e=>{e||(n++,i.removeEntry(r,Ra.min()))})).next(()=>i.apply(e)).next(()=>n)}markPotentiallyOrphaned(e,t){return this.gi.set(t,e.currentSequenceNumber),qa.resolve()}removeTarget(e,t){const n=t.withSequenceNumber(e.currentSequenceNumber);return this.persistence.getTargetCache().updateTargetData(e,n)}addReference(e,t,n){return this.gi.set(n,e.currentSequenceNumber),qa.resolve()}removeReference(e,t,n){return this.gi.set(n,e.currentSequenceNumber),qa.resolve()}updateLimboDocument(e,t){return this.gi.set(t,e.currentSequenceNumber),qa.resolve()}Pi(e){let t=e.key.toString().length;return e.isFoundDocument()&&(t+=au(e.data.value)),t}Sr(e,t,n){return qa.or([()=>this.persistence.Ei(e,t),()=>this.persistence.getTargetCache().containsKey(e,t),()=>{const e=this.gi.get(t);return qa.resolve(void 0!==e&&e>n)}])}getCacheSize(e){return this.persistence.getRemoteDocumentCache().getSize(e)}}
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
 */class tm{constructor(e){this.serializer=e}q(e,t,n,r){const i=new Ga("createOrUpgrade",t);n<1&&r>=1&&(function(e){e.createObjectStore(ml)}(e),function(e){e.createObjectStore(vl,{keyPath:"userId"});e.createObjectStore(yl,{keyPath:bl,autoIncrement:!0}).createIndex(wl,_l,{unique:!0}),e.createObjectStore(Il)}(e),nm(e),function(e){e.createObjectStore(fl)}(e));let s=qa.resolve();return n<3&&r>=3&&(0!==n&&(function(e){e.deleteObjectStore(Ml),e.deleteObjectStore(Pl),e.deleteObjectStore(jl)}(e),nm(e)),s=s.next(()=>function(e){const t=e.store(jl),n={highestTargetId:0,highestListenSequenceNumber:0,lastRemoteSnapshotVersion:Ra.min().toTimestamp(),targetCount:0};return t.put(zl,n)}(i))),n<4&&r>=4&&(0!==n&&(s=s.next(()=>function(e,t){return t.store(yl).j().next(n=>{e.deleteObjectStore(yl),e.createObjectStore(yl,{keyPath:bl,autoIncrement:!0}).createIndex(wl,_l,{unique:!0});const r=t.store(yl),i=n.map(e=>r.put(e));return qa.waitFor(i)})}(e,i))),s=s.next(()=>{!function(e){e.createObjectStore(Hl,{keyPath:"clientId"})}(e)})),n<5&&r>=5&&(s=s.next(()=>this.pi(i))),n<6&&r>=6&&(s=s.next(()=>(function(e){e.createObjectStore(Rl)}(e),this.yi(i)))),n<7&&r>=7&&(s=s.next(()=>this.wi(i))),n<8&&r>=8&&(s=s.next(()=>this.Si(e,i))),n<9&&r>=9&&(s=s.next(()=>{!function(e){e.objectStoreNames.contains("remoteDocumentChanges")&&e.deleteObjectStore("remoteDocumentChanges")}(e)})),n<10&&r>=10&&(s=s.next(()=>this.bi(i))),n<11&&r>=11&&(s=s.next(()=>{!function(e){e.createObjectStore(Gl,{keyPath:"bundleId"})}(e),function(e){e.createObjectStore(Kl,{keyPath:"name"})}(e)})),n<12&&r>=12&&(s=s.next(()=>{!function(e){const t=e.createObjectStore(ic,{keyPath:sc});t.createIndex(oc,ac,{unique:!1}),t.createIndex(lc,cc,{unique:!1})}(e)})),n<13&&r>=13&&(s=s.next(()=>function(e){const t=e.createObjectStore(Sl,{keyPath:Cl});t.createIndex(kl,Al),t.createIndex(Dl,Nl)}(e)).next(()=>this.Di(e,i)).next(()=>e.deleteObjectStore(fl))),n<14&&r>=14&&(s=s.next(()=>this.Ci(e,i))),n<15&&r>=15&&(s=s.next(()=>function(e){e.createObjectStore(Wl,{keyPath:"indexId",autoIncrement:!0}).createIndex(Xl,"collectionGroup",{unique:!1});e.createObjectStore(Ql,{keyPath:Jl}).createIndex(Yl,Zl,{unique:!1});e.createObjectStore(ec,{keyPath:tc}).createIndex(nc,rc,{unique:!1})}(e))),n<16&&r>=16&&(s=s.next(()=>{t.objectStore(Ql).clear()}).next(()=>{t.objectStore(ec).clear()})),n<17&&r>=17&&(s=s.next(()=>{!function(e){e.createObjectStore(uc,{keyPath:"name"})}(e)})),n<18&&r>=18&&It()&&(s=s.next(()=>{t.objectStore(Ql).clear()}).next(()=>{t.objectStore(ec).clear()})),s}yi(e){let t=0;return e.store(fl).X((e,n)=>{t+=hf(n)}).next(()=>{const n={byteSize:t};return e.store(Rl).put(Ol,n)})}pi(e){const t=e.store(vl),n=e.store(yl);return t.j().next(t=>qa.forEach(t,t=>{const r=IDBKeyRange.bound([t.userId,ol],[t.userId,t.lastAcknowledgedBatchId]);return n.j(wl,r).next(n=>qa.forEach(n,n=>{Ko(n.userId===t.userId,18650,"Cannot process batch from unexpected user",{batchId:n.batchId});const r=mp(this.serializer,n);return df(e,t.userId,r).next(()=>{})}))}))}wi(e){const t=e.store(Ml),n=e.store(fl);return e.store(jl).get(zl).next(e=>{const r=[];return n.X((n,i)=>{const s=new va(n),o=function(e){return[0,ul(e)]}(s);r.push(t.get(o).next(n=>n?qa.resolve():(n=>t.put({targetId:0,path:ul(n),sequenceNumber:e.highestListenSequenceNumber}))(s)))}).next(()=>qa.waitFor(r))})}Si(e,t){e.createObjectStore(Bl,{keyPath:ql});const n=t.store(Bl),r=new Yp,i=e=>{if(r.add(e)){const t=e.lastSegment(),r=e.popLast();return n.put({collectionId:t,parent:ul(r)})}};return t.store(fl).X({Z:!0},(e,t)=>{const n=new va(e);return i(n.popLast())}).next(()=>t.store(Il).X({Z:!0},([e,t,n],r)=>{const s=pl(t);return i(s.popLast())}))}bi(e){const t=e.store(Pl);return t.X((e,n)=>{const r=gp(n),i=vp(this.serializer,r);return t.put(i)})}Di(e,t){const n=t.store(fl),r=[];return n.X((e,n)=>{const i=t.store(Sl),s=function(e){return e.document?new wa(va.fromString(e.document.name).popFirst(5)):e.noDocument?wa.fromSegments(e.noDocument.path):e.unknownDocument?wa.fromSegments(e.unknownDocument.path):Ho(36783)}
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
 */(n).path.toArray(),o={prefixPath:s.slice(0,s.length-2),collectionGroup:s[s.length-2],documentId:s[s.length-1],readTime:n.readTime||[0,0],unknownDocument:n.unknownDocument,noDocument:n.noDocument,document:n.document,hasCommittedMutations:!!n.hasCommittedMutations};r.push(i.put(o))}).next(()=>qa.waitFor(r))}Ci(e,t){const n=t.store(yl),r=Of(this.serializer),i=new Jf(Zf.Vi,this.serializer.gt);return n.j().next(e=>{const n=new Map;return e.forEach(e=>{var t;let r=null!==(t=n.get(e.userId))&&void 0!==t?t:kd();mp(this.serializer,e).keys().forEach(e=>r=r.add(e)),n.set(e.userId,r)}),qa.forEach(n,(e,n)=>{const s=new Mo(n),o=Ip.yt(this.serializer,s),a=i.getIndexManager(s),l=pf.yt(s,this.serializer,a,i.referenceDelegate);return new zf(r,l,o,a).recalculateAndSaveOverlaysForDocumentKeys(new bc(t,sl.ue),e).next()})})}}function nm(e){e.createObjectStore(Ml,{keyPath:Ul}).createIndex(Fl,Vl,{unique:!0}),e.createObjectStore(Pl,{keyPath:"targetId"}).createIndex(Ll,$l,{unique:!0}),e.createObjectStore(jl)}const rm="IndexedDbPersistence",im=18e5,sm=5e3,om="Failed to obtain exclusive access to the persistence layer. To allow shared access, multi-tab synchronization has to be enabled in all tabs. If you are using `experimentalForceOwningTab:true`, make sure that only one tab has persistence enabled at any given time.";class am{constructor(e,t,n,r,i,s,o,a,l,c,u=18){if(this.allowTabSynchronization=e,this.persistenceKey=t,this.clientId=n,this.Fi=i,this.window=s,this.document=o,this.Mi=l,this.xi=c,this.Oi=u,this.ui=null,this.ci=!1,this.isPrimary=!1,this.networkEnabled=!0,this.Ni=null,this.inForeground=!1,this.Bi=null,this.Li=null,this.ki=Number.NEGATIVE_INFINITY,this.qi=e=>Promise.resolve(),!am.C())throw new Qo(Xo.UNIMPLEMENTED,"This platform is either missing IndexedDB or is known to have an incomplete implementation. Offline persistence has been disabled.");this.referenceDelegate=new Af(this,r),this.Qi=t+"main",this.serializer=new cp(a),this.$i=new Ka(this.Qi,this.Oi,new tm(this.serializer)),this.li=new Cp,this.hi=new bf(this.referenceDelegate,this.serializer),this.remoteDocumentCache=Of(this.serializer),this.Ti=new xp,this.window&&this.window.localStorage?this.Ui=this.window.localStorage:(this.Ui=null,!1===c&&jo(rm,"LocalStorage is unavailable. As a result, persistence may not work reliably. In particular enablePersistence() could fail immediately after refreshing the page."))}start(){return this.Ki().then(()=>{if(!this.isPrimary&&!this.allowTabSynchronization)throw new Qo(Xo.FAILED_PRECONDITION,om);return this.Wi(),this.Gi(),this.zi(),this.runTransaction("getHighestListenSequenceNumber","readonly",e=>this.hi.getHighestSequenceNumber(e))}).then(e=>{this.ui=new sl(e,this.Mi)}).then(()=>{this.ci=!0}).catch(e=>(this.$i&&this.$i.close(),Promise.reject(e)))}ji(e){return this.qi=async t=>{if(this.started)return e(t)},e(this.isPrimary)}setDatabaseDeletedListener(e){this.$i.setDatabaseDeletedListener(e)}setNetworkEnabled(e){this.networkEnabled!==e&&(this.networkEnabled=e,this.Fi.enqueueAndForget(async()=>{this.started&&await this.Ki()}))}Ki(){return this.runTransaction("updateClientMetadataAndTryBecomePrimary","readwrite",e=>cm(e).put({clientId:this.clientId,updateTimeMs:Date.now(),networkEnabled:this.networkEnabled,inForeground:this.inForeground}).next(()=>{if(this.isPrimary)return this.Ji(e).next(e=>{e||(this.isPrimary=!1,this.Fi.enqueueRetryable(()=>this.qi(!1)))})}).next(()=>this.Hi(e)).next(t=>this.isPrimary&&!t?this.Yi(e).next(()=>!1):!!t&&this.Zi(e).next(()=>!0))).catch(e=>{if(Ja(e))return zo(rm,"Failed to extend owner lease: ",e),this.isPrimary;if(!this.allowTabSynchronization)throw e;return zo(rm,"Releasing owner lease after error during lease refresh",e),!1}).then(e=>{this.isPrimary!==e&&this.Fi.enqueueRetryable(()=>this.qi(e)),this.isPrimary=e})}Ji(e){return lm(e).get(gl).next(e=>qa.resolve(this.Xi(e)))}es(e){return cm(e).delete(this.clientId)}async ts(){if(this.isPrimary&&!this.ns(this.ki,im)){this.ki=Date.now();const e=await this.runTransaction("maybeGarbageCollectMultiClientState","readwrite-primary",e=>{const t=wc(e,Hl);return t.j().next(e=>{const n=this.rs(e,im),r=e.filter(e=>-1===n.indexOf(e));return qa.forEach(r,e=>t.delete(e.clientId)).next(()=>r)})}).catch(()=>[]);if(this.Ui)for(const t of e)this.Ui.removeItem(this.ss(t.clientId))}}zi(){this.Li=this.Fi.enqueueAfterDelay("client_metadata_refresh",4e3,()=>this.Ki().then(()=>this.ts()).then(()=>this.zi()))}Xi(e){return!!e&&e.ownerId===this.clientId}Hi(e){return this.xi?qa.resolve(!0):lm(e).get(gl).next(t=>{if(null!==t&&this.ns(t.leaseTimestampMs,sm)&&!this._s(t.ownerId)){if(this.Xi(t)&&this.networkEnabled)return!0;if(!this.Xi(t)){if(!t.allowTabSynchronization)throw new Qo(Xo.FAILED_PRECONDITION,om);return!1}}return!(!this.networkEnabled||!this.inForeground)||cm(e).j().next(e=>void 0===this.rs(e,sm).find(e=>{if(this.clientId!==e.clientId){const t=!this.networkEnabled&&e.networkEnabled,n=!this.inForeground&&e.inForeground,r=this.networkEnabled===e.networkEnabled;if(t||n&&r)return!0}return!1}))}).next(e=>(this.isPrimary!==e&&zo(rm,`Client ${e?"is":"is not"} eligible for a primary lease.`),e))}async shutdown(){this.ci=!1,this.us(),this.Li&&(this.Li.cancel(),this.Li=null),this.cs(),this.ls(),await this.$i.runTransaction("shutdown","readwrite",[ml,Hl],e=>{const t=new bc(e,sl.ue);return this.Yi(t).next(()=>this.es(t))}),this.$i.close(),this.hs()}rs(e,t){return e.filter(e=>this.ns(e.updateTimeMs,t)&&!this._s(e.clientId))}Ps(){return this.runTransaction("getActiveClients","readonly",e=>cm(e).j().next(e=>this.rs(e,im).map(e=>e.clientId)))}get started(){return this.ci}getGlobalsCache(){return this.li}getMutationQueue(e,t){return pf.yt(e,this.serializer,t,this.referenceDelegate)}getTargetCache(){return this.hi}getRemoteDocumentCache(){return this.remoteDocumentCache}getIndexManager(e){return new tf(e,this.serializer.gt.databaseId)}getDocumentOverlayCache(e){return Ip.yt(this.serializer,e)}getBundleCache(){return this.Ti}runTransaction(e,t,n){zo(rm,"Starting transaction:",e);const r="readonly"===t?"readonly":"readwrite",i=function(e){return 18===e?yc:17===e?vc:16===e?gc:15===e?mc:14===e?fc:13===e?pc:12===e?hc:11===e?dc:void Ho(60245)}(this.Oi);let s;return this.$i.runTransaction(e,r,i,r=>(s=new bc(r,this.ui?this.ui.next():sl.ue),"readwrite-primary"===t?this.Ji(s).next(e=>!!e||this.Hi(s)).next(t=>{if(!t)throw jo(`Failed to obtain primary lease for action '${e}'.`),this.isPrimary=!1,this.Fi.enqueueRetryable(()=>this.qi(!1)),new Qo(Xo.FAILED_PRECONDITION,za);return n(s)}).next(e=>this.Zi(s).next(()=>e)):this.Ts(s).next(()=>n(s)))).then(e=>(s.raiseOnCommittedEvent(),e))}Ts(e){return lm(e).get(gl).next(e=>{if(null!==e&&this.ns(e.leaseTimestampMs,sm)&&!this._s(e.ownerId)&&!this.Xi(e)&&!(this.xi||this.allowTabSynchronization&&e.allowTabSynchronization))throw new Qo(Xo.FAILED_PRECONDITION,om)})}Zi(e){const t={ownerId:this.clientId,allowTabSynchronization:this.allowTabSynchronization,leaseTimestampMs:Date.now()};return lm(e).put(gl,t)}static C(){return Ka.C()}Yi(e){const t=lm(e);return t.get(gl).next(e=>this.Xi(e)?(zo(rm,"Releasing primary lease."),t.delete(gl)):qa.resolve())}ns(e,t){const n=Date.now();return!(e<n-t||e>n&&(jo(`Detected an update time that is in the future: ${e} > ${n}`),1))}Wi(){null!==this.document&&"function"==typeof this.document.addEventListener&&(this.Bi=()=>{this.Fi.enqueueAndForget(()=>(this.inForeground="visible"===this.document.visibilityState,this.Ki()))},this.document.addEventListener("visibilitychange",this.Bi),this.inForeground="visible"===this.document.visibilityState)}cs(){this.Bi&&(this.document.removeEventListener("visibilitychange",this.Bi),this.Bi=null)}Gi(){var e;"function"==typeof(null===(e=this.window)||void 0===e?void 0:e.addEventListener)&&(this.Ni=()=>{this.us();const e=/(?:Version|Mobile)\/1[456]/;Tt()&&(navigator.appVersion.match(e)||navigator.userAgent.match(e))&&this.Fi.enterRestrictedMode(!0),this.Fi.enqueueAndForget(()=>this.shutdown())},this.window.addEventListener("pagehide",this.Ni))}ls(){this.Ni&&(this.window.removeEventListener("pagehide",this.Ni),this.Ni=null)}_s(e){var t;try{const n=null!==(null===(t=this.Ui)||void 0===t?void 0:t.getItem(this.ss(e)));return zo(rm,`Client '${e}' ${n?"is":"is not"} zombied in LocalStorage`),n}catch(e){return jo(rm,"Failed to get zombied client id.",e),!1}}us(){if(this.Ui)try{this.Ui.setItem(this.ss(this.clientId),String(Date.now()))}catch(e){jo("Failed to set zombie client id.",e)}}hs(){if(this.Ui)try{this.Ui.removeItem(this.ss(this.clientId))}catch(e){}}ss(e){return`firestore_zombie_${this.persistenceKey}_${e}`}}function lm(e){return wc(e,ml)}function cm(e){return wc(e,Hl)}
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
class um{constructor(e,t,n,r){this.targetId=e,this.fromCache=t,this.Is=n,this.ds=r}static Es(e,t){let n=kd(),r=kd();for(const e of t.docChanges)switch(e.type){case 0:n=n.add(e.doc.key);break;case 1:r=r.add(e.doc.key)}return new um(e,t.fromCache,n,r)}}
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
 */class dm{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(e){this._documentReadCount+=e}}
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
 */class hm{constructor(){this.As=!1,this.Rs=!1,this.Vs=100,this.fs=Tt()?8:Wa(xt())>0?6:4}initialize(e,t){this.gs=e,this.indexManager=t,this.As=!0}getDocumentsMatchingQuery(e,t,n,r){const i={result:null};return this.ps(e,t).next(e=>{i.result=e}).next(()=>{if(!i.result)return this.ys(e,t,r,n).next(e=>{i.result=e})}).next(()=>{if(i.result)return;const n=new dm;return this.ws(e,t,n).next(r=>{if(i.result=r,this.Rs)return this.Ss(e,t,n,r.size)})}).next(()=>i.result)}Ss(e,t,n,r){return n.documentReadCount<this.Vs?(Vo()<=jt.DEBUG&&zo("QueryEngine","SDK will not create cache indexes for query:",pd(t),"since it only creates cache indexes for collection contains","more than or equal to",this.Vs,"documents"),qa.resolve()):(Vo()<=jt.DEBUG&&zo("QueryEngine","Query:",pd(t),"scans",n.documentReadCount,"local documents and returns",r,"documents as results."),n.documentReadCount>this.fs*r?(Vo()<=jt.DEBUG&&zo("QueryEngine","The SDK decides to create cache indexes for query:",pd(t),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(e,ld(t))):qa.resolve())}ps(e,t){if(sd(t))return qa.resolve(null);let n=ld(t);return this.indexManager.getIndexType(e,n).next(r=>0===r?null:(null!==t.limit&&1===r&&(t=ud(t,null,"F"),n=ld(t)),this.indexManager.getDocumentsMatchingTarget(e,n).next(r=>{const i=kd(...r);return this.gs.getDocuments(e,i).next(r=>this.indexManager.getMinOffset(e,n).next(n=>{const s=this.bs(t,r);return this.Ds(t,s,i,n.readTime)?this.ps(e,ud(t,null,"F")):this.vs(e,s,t,n)}))})))}ys(e,t,n,r){return sd(t)||r.isEqual(Ra.min())?qa.resolve(null):this.gs.getDocuments(e,n).next(i=>{const s=this.bs(t,i);return this.Ds(t,s,n,r)?qa.resolve(null):(Vo()<=jt.DEBUG&&zo("QueryEngine","Re-using previous result from %s to execute query: %s",r.toString(),pd(t)),this.vs(e,s,t,function(e,t){const n=e.toTimestamp().seconds,r=e.toTimestamp().nanoseconds+1,i=Ra.fromTimestamp(1e9===r?new Na(n+1,0):new Na(n,r));return new Fa(i,wa.empty(),t)}(r,-1)).next(e=>e))})}bs(e,t){let n=new Cc(md(e));return t.forEach((t,r)=>{fd(e,r)&&(n=n.add(r))}),n}Ds(e,t,n,r){if(null===e.limit)return!1;if(n.size!==t.size)return!0;const i="F"===e.limitType?t.last():t.first();return!!i&&(i.hasPendingWrites||i.version.compareTo(r)>0)}ws(e,t,n){return Vo()<=jt.DEBUG&&zo("QueryEngine","Using full collection scan to execute query:",pd(t)),this.gs.getDocumentsMatchingQuery(e,t,Fa.min(),n)}vs(e,t,n,r){return this.gs.getDocumentsMatchingQuery(e,n,r).next(e=>(t.forEach(t=>{e=e.insert(t.key,t)}),e))}}
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
 */const pm="LocalStore";class fm{constructor(e,t,n,r){this.persistence=e,this.Cs=t,this.serializer=r,this.Fs=new Tc(ca),this.Ms=new vd(e=>Ju(e),Yu),this.xs=new Map,this.Os=e.getRemoteDocumentCache(),this.hi=e.getTargetCache(),this.Ti=e.getBundleCache(),this.Ns(n)}Ns(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new zf(this.Os,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.Os.setIndexManager(this.indexManager),this.Cs.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",t=>e.collect(t,this.Fs))}}function mm(e,t,n,r){return new fm(e,t,n,r)}async function gm(e,t){const n=Wo(e);return await n.persistence.runTransaction("Handle user change","readonly",e=>{let r;return n.mutationQueue.getAllMutationBatches(e).next(i=>(r=i,n.Ns(t),n.mutationQueue.getAllMutationBatches(e))).next(t=>{const i=[],s=[];let o=kd();for(const e of r){i.push(e.batchId);for(const t of e.mutations)o=o.add(t.key)}for(const e of t){s.push(e.batchId);for(const t of e.mutations)o=o.add(t.key)}return n.localDocuments.getDocuments(e,o).next(e=>({Bs:e,removedBatchIds:i,addedBatchIds:s}))})})}function vm(e){const t=Wo(e);return t.persistence.runTransaction("Get last remote snapshot version","readonly",e=>t.hi.getLastRemoteSnapshotVersion(e))}function ym(e,t){const n=Wo(e),r=t.snapshotVersion;let i=n.Fs;return n.persistence.runTransaction("Apply remote event","readwrite-primary",e=>{const s=n.Os.newChangeBuffer({trackRemovals:!0});i=n.Fs;const o=[];t.targetChanges.forEach((s,a)=>{const l=i.get(a);if(!l)return;o.push(n.hi.removeMatchingKeys(e,s.removedDocuments,a).next(()=>n.hi.addMatchingKeys(e,s.addedDocuments,a)));let c=l.withSequenceNumber(e.currentSequenceNumber);null!==t.targetMismatches.get(a)?c=c.withResumeToken(Rc.EMPTY_BYTE_STRING,Ra.min()).withLastLimboFreeSnapshotVersion(Ra.min()):s.resumeToken.approximateByteSize()>0&&(c=c.withResumeToken(s.resumeToken,r)),i=i.insert(a,c),function(e,t,n){if(0===e.resumeToken.approximateByteSize())return!0;if(t.snapshotVersion.toMicroseconds()-e.snapshotVersion.toMicroseconds()>=3e8)return!0;return n.addedDocuments.size+n.modifiedDocuments.size+n.removedDocuments.size>0}(l,c,s)&&o.push(n.hi.updateTargetData(e,c))});let a=bd(),l=kd();if(t.documentUpdates.forEach(r=>{t.resolvedLimboDocuments.has(r)&&o.push(n.persistence.referenceDelegate.updateLimboDocument(e,r))}),o.push(function(e,t,n){let r=kd(),i=kd();return n.forEach(e=>r=r.add(e)),t.getEntries(e,r).next(e=>{let r=bd();return n.forEach((n,s)=>{const o=e.get(n);s.isFoundDocument()!==o.isFoundDocument()&&(i=i.add(n)),s.isNoDocument()&&s.version.isEqual(Ra.min())?(t.removeEntry(n,s.readTime),r=r.insert(n,s)):!o.isValidDocument()||s.version.compareTo(o.version)>0||0===s.version.compareTo(o.version)&&o.hasPendingWrites?(t.addEntry(s),r=r.insert(n,s)):zo(pm,"Ignoring outdated watch update for ",n,". Current version:",o.version," Watch version:",s.version)}),{Ls:r,ks:i}})}(e,s,t.documentUpdates).next(e=>{a=e.Ls,l=e.ks})),!r.isEqual(Ra.min())){const t=n.hi.getLastRemoteSnapshotVersion(e).next(t=>n.hi.setTargetsMetadata(e,e.currentSequenceNumber,r));o.push(t)}return qa.waitFor(o).next(()=>s.apply(e)).next(()=>n.localDocuments.getLocalViewOfDocuments(e,a,l)).next(()=>a)}).then(e=>(n.Fs=i,e))}function bm(e,t){const n=Wo(e);return n.persistence.runTransaction("Get next mutation batch","readonly",e=>(void 0===t&&(t=ol),n.mutationQueue.getNextMutationBatchAfterBatchId(e,t)))}async function wm(e,t,n){const r=Wo(e),i=r.Fs.get(t),s=n?"readwrite":"readwrite-primary";try{n||await r.persistence.runTransaction("Release target",s,e=>r.persistence.referenceDelegate.removeTarget(e,i))}catch(e){if(!Ja(e))throw e;zo(pm,`Failed to update sequence numbers for target ${t}: ${e}`)}r.Fs=r.Fs.remove(t),r.Ms.delete(i.target)}function _m(e,t,n){const r=Wo(e);let i=Ra.min(),s=kd();return r.persistence.runTransaction("Execute query","readwrite",e=>function(e,t,n){const r=Wo(e),i=r.Ms.get(n);return void 0!==i?qa.resolve(r.Fs.get(i)):r.hi.getTargetData(t,n)}(r,e,ld(t)).next(t=>{if(t)return i=t.lastLimboFreeSnapshotVersion,r.hi.getMatchingKeysForTargetId(e,t.targetId).next(e=>{s=e})}).next(()=>r.Cs.getDocumentsMatchingQuery(e,t,n?i:Ra.min(),n?s:kd())).next(e=>(function(e,t,n){let r=e.xs.get(t)||Ra.min();n.forEach((e,t)=>{t.readTime.compareTo(r)>0&&(r=t.readTime)}),e.xs.set(t,r)}(r,function(e){return e.collectionGroup||(e.path.length%2==1?e.path.lastSegment():e.path.get(e.path.length-2))}(t),e),{documents:e,qs:s})))}class xm{constructor(){this.activeTargetIds=Ad}Gs(e){this.activeTargetIds=this.activeTargetIds.add(e)}zs(e){this.activeTargetIds=this.activeTargetIds.delete(e)}Ws(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class Em{constructor(){this.Fo=new xm,this.Mo={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,t,n){}addLocalQueryTarget(e,t=!0){return t&&this.Fo.Gs(e),this.Mo[e]||"not-current"}updateQueryState(e,t,n){this.Mo[e]=t}removeLocalQueryTarget(e){this.Fo.zs(e)}isLocalQueryTarget(e){return this.Fo.activeTargetIds.has(e)}clearQueryState(e){delete this.Mo[e]}getAllActiveQueryTargets(){return this.Fo.activeTargetIds}isActiveQueryTarget(e){return this.Fo.activeTargetIds.has(e)}start(){return this.Fo=new xm,Promise.resolve()}handleUserChange(e,t,n){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}
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
 */class Tm{xo(e){}shutdown(){}}
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
 */const Im="ConnectivityMonitor";class Sm{constructor(){this.Oo=()=>this.No(),this.Bo=()=>this.Lo(),this.ko=[],this.qo()}xo(e){this.ko.push(e)}shutdown(){window.removeEventListener("online",this.Oo),window.removeEventListener("offline",this.Bo)}qo(){window.addEventListener("online",this.Oo),window.addEventListener("offline",this.Bo)}No(){zo(Im,"Network connectivity changed: AVAILABLE");for(const e of this.ko)e(0)}Lo(){zo(Im,"Network connectivity changed: UNAVAILABLE");for(const e of this.ko)e(1)}static C(){return"undefined"!=typeof window&&void 0!==window.addEventListener&&void 0!==window.removeEventListener}}
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
 */let Cm=null;function km(){return null===Cm?Cm=268435456+Math.round(2147483648*Math.random()):Cm++,"0x"+Cm.toString(16)
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
 */}const Am="RestConnection",Dm={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};class Nm{get Qo(){return!1}constructor(e){this.databaseInfo=e,this.databaseId=e.databaseId;const t=e.ssl?"https":"http",n=encodeURIComponent(this.databaseId.projectId),r=encodeURIComponent(this.databaseId.database);this.$o=t+"://"+e.host,this.Uo=`projects/${n}/databases/${r}`,this.Ko=this.databaseId.database===Hc?`project_id=${n}`:`project_id=${n}&database_id=${r}`}Wo(e,t,n,r,i){const s=km(),o=this.Go(e,t.toUriEncodedString());zo(Am,`Sending RPC '${e}' ${s}:`,o,n);const a={"google-cloud-resource-prefix":this.Uo,"x-goog-request-params":this.Ko};this.zo(a,r,i);const{host:l}=new URL(o),c=gt(l);return this.jo(e,o,a,n,c).then(t=>(zo(Am,`Received RPC '${e}' ${s}: `,t),t),t=>{throw Bo(Am,`RPC '${e}' ${s} failed with error: `,t,"url: ",o,"request:",n),t})}Jo(e,t,n,r,i,s){return this.Wo(e,t,n,r,i)}zo(e,t,n){e["X-Goog-Api-Client"]="gl-js/ fire/"+Uo,e["Content-Type"]="text/plain",this.databaseInfo.appId&&(e["X-Firebase-GMPID"]=this.databaseInfo.appId),t&&t.headers.forEach((t,n)=>e[n]=t),n&&n.headers.forEach((t,n)=>e[n]=t)}Go(e,t){const n=Dm[e];return`${this.$o}/v1/${t}:${n}`}terminate(){}}
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
 */class Rm{constructor(e){this.Ho=e.Ho,this.Yo=e.Yo}Zo(e){this.Xo=e}e_(e){this.t_=e}n_(e){this.r_=e}onMessage(e){this.i_=e}close(){this.Yo()}send(e){this.Ho(e)}s_(){this.Xo()}o_(){this.t_()}__(e){this.r_(e)}a_(e){this.i_(e)}}
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
 */const Om="WebChannelConnection";class Pm extends Nm{constructor(e){super(e),this.u_=[],this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams,this.longPollingOptions=e.longPollingOptions}jo(e,t,n,r,i){const s=km();return new Promise((i,o)=>{const a=new So;a.setWithCredentials(!0),a.listenOnce(ko.COMPLETE,()=>{try{switch(a.getLastErrorCode()){case Ao.NO_ERROR:const t=a.getResponseJson();zo(Om,`XHR for RPC '${e}' ${s} received:`,JSON.stringify(t)),i(t);break;case Ao.TIMEOUT:zo(Om,`RPC '${e}' ${s} timed out`),o(new Qo(Xo.DEADLINE_EXCEEDED,"Request time out"));break;case Ao.HTTP_ERROR:const n=a.getStatus();if(zo(Om,`RPC '${e}' ${s} failed with status:`,n,"response text:",a.getResponseText()),n>0){let e=a.getResponseJson();Array.isArray(e)&&(e=e[0]);const t=null==e?void 0:e.error;if(t&&t.status&&t.message){const e=function(e){const t=e.toLowerCase().replace(/_/g,"-");return Object.values(Xo).indexOf(t)>=0?t:Xo.UNKNOWN}(t.status);o(new Qo(e,t.message))}else o(new Qo(Xo.UNKNOWN,"Server responded with status "+a.getStatus()))}else o(new Qo(Xo.UNAVAILABLE,"Connection failed."));break;default:Ho(9055,{c_:e,streamId:s,l_:a.getLastErrorCode(),h_:a.getLastError()})}}finally{zo(Om,`RPC '${e}' ${s} completed.`)}});const l=JSON.stringify(r);zo(Om,`RPC '${e}' ${s} sending request:`,r),a.send(t,"POST",l,n,15)})}P_(e,t,n){const r=km(),i=[this.$o,"/","google.firestore.v1.Firestore","/",e,"/channel"],s=Oo(),o=Ro(),a={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},l=this.longPollingOptions.timeoutSeconds;void 0!==l&&(a.longPollingTimeout=Math.round(1e3*l)),this.useFetchStreams&&(a.useFetchStreams=!0),this.zo(a.initMessageHeaders,t,n),a.encodeInitMessageHeaders=!0;const c=i.join("");zo(Om,`Creating RPC '${e}' stream ${r}: ${c}`,a);const u=s.createWebChannel(c,a);this.T_(u);let d=!1,h=!1;const p=new Rm({Ho:t=>{h?zo(Om,`Not sending because RPC '${e}' stream ${r} is closed:`,t):(d||(zo(Om,`Opening RPC '${e}' stream ${r} transport.`),u.open(),d=!0),zo(Om,`RPC '${e}' stream ${r} sending:`,t),u.send(t))},Yo:()=>u.close()}),f=(e,t,n)=>{e.listen(t,e=>{try{n(e)}catch(e){setTimeout(()=>{throw e},0)}})};return f(u,Co.EventType.OPEN,()=>{h||(zo(Om,`RPC '${e}' stream ${r} transport opened.`),p.s_())}),f(u,Co.EventType.CLOSE,()=>{h||(h=!0,zo(Om,`RPC '${e}' stream ${r} transport closed`),p.__(),this.I_(u))}),f(u,Co.EventType.ERROR,t=>{h||(h=!0,Bo(Om,`RPC '${e}' stream ${r} transport errored. Name:`,t.name,"Message:",t.message),p.__(new Qo(Xo.UNAVAILABLE,"The operation could not be completed")))}),f(u,Co.EventType.MESSAGE,t=>{var n;if(!h){const i=t.data[0];Ko(!!i,16349);const s=i,o=(null==s?void 0:s.error)||(null===(n=s[0])||void 0===n?void 0:n.error);if(o){zo(Om,`RPC '${e}' stream ${r} received error:`,o);const t=o.status;let n=function(e){const t=hh[e];if(void 0!==t)return fh(t)}(t),i=o.message;void 0===n&&(n=Xo.INTERNAL,i="Unknown error status: "+t+" with message "+o.message),h=!0,p.__(new Qo(n,i)),u.close()}else zo(Om,`RPC '${e}' stream ${r} received:`,i),p.a_(i)}}),f(o,No.STAT_EVENT,t=>{t.stat===Do.PROXY?zo(Om,`RPC '${e}' stream ${r} detected buffering proxy`):t.stat===Do.NOPROXY&&zo(Om,`RPC '${e}' stream ${r} detected no buffering proxy`)}),setTimeout(()=>{p.o_()},0),p}terminate(){this.u_.forEach(e=>e.close()),this.u_=[]}T_(e){this.u_.push(e)}I_(e){this.u_=this.u_.filter(t=>t===e)}}
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
 */function Lm(){return"undefined"!=typeof document?document:null}
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
 */function $m(e){return new Rh(e,!0)}
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
 */class Mm{constructor(e,t,n=1e3,r=1.5,i=6e4){this.Fi=e,this.timerId=t,this.d_=n,this.E_=r,this.A_=i,this.R_=0,this.V_=null,this.m_=Date.now(),this.reset()}reset(){this.R_=0}f_(){this.R_=this.A_}g_(e){this.cancel();const t=Math.floor(this.R_+this.p_()),n=Math.max(0,Date.now()-this.m_),r=Math.max(0,t-n);r>0&&zo("ExponentialBackoff",`Backing off for ${r} ms (base delay: ${this.R_} ms, delay with jitter: ${t} ms, last attempt: ${n} ms ago)`),this.V_=this.Fi.enqueueAfterDelay(this.timerId,r,()=>(this.m_=Date.now(),e())),this.R_*=this.E_,this.R_<this.d_&&(this.R_=this.d_),this.R_>this.A_&&(this.R_=this.A_)}y_(){null!==this.V_&&(this.V_.skipDelay(),this.V_=null)}cancel(){null!==this.V_&&(this.V_.cancel(),this.V_=null)}p_(){return(Math.random()-.5)*this.R_}}
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
 */const Um="PersistentStream";class Fm{constructor(e,t,n,r,i,s,o,a){this.Fi=e,this.w_=n,this.S_=r,this.connection=i,this.authCredentialsProvider=s,this.appCheckCredentialsProvider=o,this.listener=a,this.state=0,this.b_=0,this.D_=null,this.v_=null,this.stream=null,this.C_=0,this.F_=new Mm(e,t)}M_(){return 1===this.state||5===this.state||this.x_()}x_(){return 2===this.state||3===this.state}start(){this.C_=0,4!==this.state?this.auth():this.O_()}async stop(){this.M_()&&await this.close(0)}N_(){this.state=0,this.F_.reset()}B_(){this.x_()&&null===this.D_&&(this.D_=this.Fi.enqueueAfterDelay(this.w_,6e4,()=>this.L_()))}k_(e){this.q_(),this.stream.send(e)}async L_(){if(this.x_())return this.close(0)}q_(){this.D_&&(this.D_.cancel(),this.D_=null)}Q_(){this.v_&&(this.v_.cancel(),this.v_=null)}async close(e,t){this.q_(),this.Q_(),this.F_.cancel(),this.b_++,4!==e?this.F_.reset():t&&t.code===Xo.RESOURCE_EXHAUSTED?(jo(t.toString()),jo("Using maximum backoff delay to prevent overloading the backend."),this.F_.f_()):t&&t.code===Xo.UNAUTHENTICATED&&3!==this.state&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),null!==this.stream&&(this.U_(),this.stream.close(),this.stream=null),this.state=e,await this.listener.n_(t)}U_(){}auth(){this.state=1;const e=this.K_(this.b_),t=this.b_;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([e,n])=>{this.b_===t&&this.W_(e,n)},t=>{e(()=>{const e=new Qo(Xo.UNKNOWN,"Fetching auth token failed: "+t.message);return this.G_(e)})})}W_(e,t){const n=this.K_(this.b_);this.stream=this.z_(e,t),this.stream.Zo(()=>{n(()=>this.listener.Zo())}),this.stream.e_(()=>{n(()=>(this.state=2,this.v_=this.Fi.enqueueAfterDelay(this.S_,1e4,()=>(this.x_()&&(this.state=3),Promise.resolve())),this.listener.e_()))}),this.stream.n_(e=>{n(()=>this.G_(e))}),this.stream.onMessage(e=>{n(()=>1==++this.C_?this.j_(e):this.onNext(e))})}O_(){this.state=5,this.F_.g_(async()=>{this.state=0,this.start()})}G_(e){return zo(Um,`close with error: ${e}`),this.stream=null,this.close(4,e)}K_(e){return t=>{this.Fi.enqueueAndForget(()=>this.b_===e?t():(zo(Um,"stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class Vm extends Fm{constructor(e,t,n,r,i,s){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",t,n,r,s),this.serializer=i}z_(e,t){return this.connection.P_("Listen",e,t)}j_(e){return this.onNext(e)}onNext(e){this.F_.reset();const t=function(e,t){let n;if("targetChange"in t){t.targetChange;const r=function(e){return"NO_CHANGE"===e?0:"ADD"===e?1:"REMOVE"===e?2:"CURRENT"===e?3:"RESET"===e?4:Ho(39313,{state:e})}(t.targetChange.targetChangeType||"NO_CHANGE"),i=t.targetChange.targetIds||[],s=function(e,t){return e.useProto3Json?(Ko(void 0===t||"string"==typeof t,58123),Rc.fromBase64String(t||"")):(Ko(void 0===t||t instanceof Buffer||t instanceof Uint8Array,16193),Rc.fromUint8Array(t||new Uint8Array))}(e,t.targetChange.resumeToken),o=t.targetChange.cause,a=o&&function(e){const t=void 0===e.code?Xo.UNKNOWN:fh(e.code);return new Qo(t,e.message||"")}(o);n=new Th(r,i,s,a||null)}else if("documentChange"in t){t.documentChange;const r=t.documentChange;r.document,r.document.name,r.document.updateTime;const i=jh(e,r.document.name),s=Mh(r.document.updateTime),o=r.document.createTime?Mh(r.document.createTime):Ra.min(),a=new xu({mapValue:{fields:r.document.fields}}),l=Tu.newFoundDocument(i,s,o,a),c=r.targetIds||[],u=r.removedTargetIds||[];n=new xh(c,u,l.key,l)}else if("documentDelete"in t){t.documentDelete;const r=t.documentDelete;r.document;const i=jh(e,r.document),s=r.readTime?Mh(r.readTime):Ra.min(),o=Tu.newNoDocument(i,s),a=r.removedTargetIds||[];n=new xh([],a,o.key,o)}else if("documentRemove"in t){t.documentRemove;const r=t.documentRemove;r.document;const i=jh(e,r.document),s=r.removedTargetIds||[];n=new xh([],s,i,null)}else{if(!("filter"in t))return Ho(11601,{At:t});{t.filter;const e=t.filter;e.targetId;const{count:r=0,unchangedNames:i}=e,s=new dh(r,i),o=e.targetId;n=new Eh(o,s)}}return n}(this.serializer,e),n=function(e){if(!("targetChange"in e))return Ra.min();const t=e.targetChange;return t.targetIds&&t.targetIds.length?Ra.min():t.readTime?Mh(t.readTime):Ra.min()}(e);return this.listener.J_(t,n)}H_(e){const t={};t.database=Hh(this.serializer),t.addTarget=function(e,t){let n;const r=t.target;if(n=Zu(r)?{documents:Qh(e,r)}:{query:Jh(e,r).Vt},n.targetId=t.targetId,t.resumeToken.approximateByteSize()>0){n.resumeToken=Lh(e,t.resumeToken);const r=Oh(e,t.expectedCount);null!==r&&(n.expectedCount=r)}else if(t.snapshotVersion.compareTo(Ra.min())>0){n.readTime=Ph(e,t.snapshotVersion.toTimestamp());const r=Oh(e,t.expectedCount);null!==r&&(n.expectedCount=r)}return n}(this.serializer,e);const n=function(e,t){const n=function(e){switch(e){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return Ho(28987,{purpose:e})}}(t.purpose);return null==n?null:{"goog-listen-tags":n}}(this.serializer,e);n&&(t.labels=n),this.k_(t)}Y_(e){const t={};t.database=Hh(this.serializer),t.removeTarget=e,this.k_(t)}}class zm extends Fm{constructor(e,t,n,r,i,s){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",t,n,r,s),this.serializer=i}get Z_(){return this.C_>0}start(){this.lastStreamToken=void 0,super.start()}U_(){this.Z_&&this.X_([])}z_(e,t){return this.connection.P_("Write",e,t)}j_(e){return Ko(!!e.streamToken,31322),this.lastStreamToken=e.streamToken,Ko(!e.writeResults||0===e.writeResults.length,55816),this.listener.ea()}onNext(e){Ko(!!e.streamToken,12678),this.lastStreamToken=e.streamToken,this.F_.reset();const t=function(e,t){return e&&e.length>0?(Ko(void 0!==t,14353),e.map(e=>function(e,t){let n=e.updateTime?Mh(e.updateTime):Mh(t);return n.isEqual(Ra.min())&&(n=Mh(t)),new Gd(n,e.transformResults||[])}(e,t))):[]}(e.writeResults,e.commitTime),n=Mh(e.commitTime);return this.listener.ta(n,t)}na(){const e={};e.database=Hh(this.serializer),this.k_(e)}X_(e){const t={streamToken:this.lastStreamToken,writes:e.map(e=>Wh(this.serializer,e))};this.k_(t)}}
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
 */class jm{}class Bm extends jm{constructor(e,t,n,r){super(),this.authCredentials=e,this.appCheckCredentials=t,this.connection=n,this.serializer=r,this.ra=!1}ia(){if(this.ra)throw new Qo(Xo.FAILED_PRECONDITION,"The client has already been terminated.")}Wo(e,t,n,r){return this.ia(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([i,s])=>this.connection.Wo(e,Fh(t,n),r,i,s)).catch(e=>{throw"FirebaseError"===e.name?(e.code===Xo.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),e):new Qo(Xo.UNKNOWN,e.toString())})}Jo(e,t,n,r,i){return this.ia(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([s,o])=>this.connection.Jo(e,Fh(t,n),r,s,o,i)).catch(e=>{throw"FirebaseError"===e.name?(e.code===Xo.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),e):new Qo(Xo.UNKNOWN,e.toString())})}terminate(){this.ra=!0,this.connection.terminate()}}class qm{constructor(e,t){this.asyncQueue=e,this.onlineStateHandler=t,this.state="Unknown",this.sa=0,this.oa=null,this._a=!0}aa(){0===this.sa&&(this.ua("Unknown"),this.oa=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.oa=null,this.ca("Backend didn't respond within 10 seconds."),this.ua("Offline"),Promise.resolve())))}la(e){"Online"===this.state?this.ua("Unknown"):(this.sa++,this.sa>=1&&(this.ha(),this.ca(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.ua("Offline")))}set(e){this.ha(),this.sa=0,"Online"===e&&(this._a=!1),this.ua(e)}ua(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}ca(e){const t=`Could not reach Cloud Firestore backend. ${e}\nThis typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this._a?(jo(t),this._a=!1):zo("OnlineStateTracker",t)}ha(){null!==this.oa&&(this.oa.cancel(),this.oa=null)}}
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
 */const Hm="RemoteStore";class Gm{constructor(e,t,n,r,i){this.localStore=e,this.datastore=t,this.asyncQueue=n,this.remoteSyncer={},this.Pa=[],this.Ta=new Map,this.Ia=new Set,this.da=[],this.Ea=i,this.Ea.xo(e=>{n.enqueueAndForget(async()=>{tg(this)&&(zo(Hm,"Restarting streams for network reachability change."),await async function(e){const t=Wo(e);t.Ia.add(4),await Wm(t),t.Aa.set("Unknown"),t.Ia.delete(4),await Km(t)}(this))})}),this.Aa=new qm(n,r)}}async function Km(e){if(tg(e))for(const t of e.da)await t(!0)}async function Wm(e){for(const t of e.da)await t(!1)}function Xm(e,t){const n=Wo(e);n.Ta.has(t.targetId)||(n.Ta.set(t.targetId,t),eg(n)?Zm(n):bg(n).x_()&&Jm(n,t))}function Qm(e,t){const n=Wo(e),r=bg(n);n.Ta.delete(t),r.x_()&&Ym(n,t),0===n.Ta.size&&(r.x_()?r.B_():tg(n)&&n.Aa.set("Unknown"))}function Jm(e,t){if(e.Ra.$e(t.targetId),t.resumeToken.approximateByteSize()>0||t.snapshotVersion.compareTo(Ra.min())>0){const n=e.remoteSyncer.getRemoteKeysForTarget(t.targetId).size;t=t.withExpectedCount(n)}bg(e).H_(t)}function Ym(e,t){e.Ra.$e(t),bg(e).Y_(t)}function Zm(e){e.Ra=new Sh({getRemoteKeysForTarget:t=>e.remoteSyncer.getRemoteKeysForTarget(t),Et:t=>e.Ta.get(t)||null,lt:()=>e.datastore.serializer.databaseId}),bg(e).start(),e.Aa.aa()}function eg(e){return tg(e)&&!bg(e).M_()&&e.Ta.size>0}function tg(e){return 0===Wo(e).Ia.size}function ng(e){e.Ra=void 0}async function rg(e){e.Aa.set("Online")}async function ig(e){e.Ta.forEach((t,n)=>{Jm(e,t)})}async function sg(e,t){ng(e),eg(e)?(e.Aa.la(t),Zm(e)):e.Aa.set("Unknown")}async function og(e,t,n){if(e.Aa.set("Online"),t instanceof Th&&2===t.state&&t.cause)try{await async function(e,t){const n=t.cause;for(const r of t.targetIds)e.Ta.has(r)&&(await e.remoteSyncer.rejectListen(r,n),e.Ta.delete(r),e.Ra.removeTarget(r))}(e,t)}catch(n){zo(Hm,"Failed to remove targets %s: %s ",t.targetIds.join(","),n),await ag(e,n)}else if(t instanceof xh?e.Ra.Ye(t):t instanceof Eh?e.Ra.it(t):e.Ra.et(t),!n.isEqual(Ra.min()))try{const t=await vm(e.localStore);n.compareTo(t)>=0&&await function(e,t){const n=e.Ra.Pt(t);return n.targetChanges.forEach((n,r)=>{if(n.resumeToken.approximateByteSize()>0){const i=e.Ta.get(r);i&&e.Ta.set(r,i.withResumeToken(n.resumeToken,t))}}),n.targetMismatches.forEach((t,n)=>{const r=e.Ta.get(t);if(!r)return;e.Ta.set(t,r.withResumeToken(Rc.EMPTY_BYTE_STRING,r.snapshotVersion)),Ym(e,t);const i=new lp(r.target,t,n,r.sequenceNumber);Jm(e,i)}),e.remoteSyncer.applyRemoteEvent(n)}(e,n)}catch(t){zo(Hm,"Failed to raise snapshot:",t),await ag(e,t)}}async function ag(e,t,n){if(!Ja(t))throw t;e.Ia.add(1),await Wm(e),e.Aa.set("Offline"),n||(n=()=>vm(e.localStore)),e.asyncQueue.enqueueRetryable(async()=>{zo(Hm,"Retrying IndexedDB access"),await n(),e.Ia.delete(1),await Km(e)})}function lg(e,t){return t().catch(n=>ag(e,n,t))}async function cg(e){const t=Wo(e),n=wg(t);let r=t.Pa.length>0?t.Pa[t.Pa.length-1].batchId:ol;for(;ug(t);)try{const e=await bm(t.localStore,r);if(null===e){0===t.Pa.length&&n.B_();break}r=e.batchId,dg(t,e)}catch(e){await ag(t,e)}hg(t)&&pg(t)}function ug(e){return tg(e)&&e.Pa.length<10}function dg(e,t){e.Pa.push(t);const n=wg(e);n.x_()&&n.Z_&&n.X_(t.mutations)}function hg(e){return tg(e)&&!wg(e).M_()&&e.Pa.length>0}function pg(e){wg(e).start()}async function fg(e){wg(e).na()}async function mg(e){const t=wg(e);for(const n of e.Pa)t.X_(n.mutations)}async function gg(e,t,n){const r=e.Pa.shift(),i=ch.from(r,t,n);await lg(e,()=>e.remoteSyncer.applySuccessfulWrite(i)),await cg(e)}async function vg(e,t){t&&wg(e).Z_&&await async function(e,t){if(function(e){return function(e){switch(e){case Xo.OK:return Ho(64938);case Xo.CANCELLED:case Xo.UNKNOWN:case Xo.DEADLINE_EXCEEDED:case Xo.RESOURCE_EXHAUSTED:case Xo.INTERNAL:case Xo.UNAVAILABLE:case Xo.UNAUTHENTICATED:return!1;case Xo.INVALID_ARGUMENT:case Xo.NOT_FOUND:case Xo.ALREADY_EXISTS:case Xo.PERMISSION_DENIED:case Xo.FAILED_PRECONDITION:case Xo.ABORTED:case Xo.OUT_OF_RANGE:case Xo.UNIMPLEMENTED:case Xo.DATA_LOSS:return!0;default:return Ho(15467,{code:e})}}(e)&&e!==Xo.ABORTED}(t.code)){const n=e.Pa.shift();wg(e).N_(),await lg(e,()=>e.remoteSyncer.rejectFailedWrite(n.batchId,t)),await cg(e)}}(e,t),hg(e)&&pg(e)}async function yg(e,t){const n=Wo(e);n.asyncQueue.verifyOperationInProgress(),zo(Hm,"RemoteStore received new credentials");const r=tg(n);n.Ia.add(3),await Wm(n),r&&n.Aa.set("Unknown"),await n.remoteSyncer.handleCredentialChange(t),n.Ia.delete(3),await Km(n)}function bg(e){return e.Va||(e.Va=function(e,t,n){const r=Wo(e);return r.ia(),new Vm(t,r.connection,r.authCredentials,r.appCheckCredentials,r.serializer,n)
/**
 * @license
 * Copyright 2018 Google LLC
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
 */}(e.datastore,e.asyncQueue,{Zo:rg.bind(null,e),e_:ig.bind(null,e),n_:sg.bind(null,e),J_:og.bind(null,e)}),e.da.push(async t=>{t?(e.Va.N_(),eg(e)?Zm(e):e.Aa.set("Unknown")):(await e.Va.stop(),ng(e))})),e.Va}function wg(e){return e.ma||(e.ma=function(e,t,n){const r=Wo(e);return r.ia(),new zm(t,r.connection,r.authCredentials,r.appCheckCredentials,r.serializer,n)}(e.datastore,e.asyncQueue,{Zo:()=>Promise.resolve(),e_:fg.bind(null,e),n_:vg.bind(null,e),ea:mg.bind(null,e),ta:gg.bind(null,e)}),e.da.push(async t=>{t?(e.ma.N_(),await cg(e)):(await e.ma.stop(),e.Pa.length>0&&(zo(Hm,`Stopping write stream with ${e.Pa.length} pending writes`),e.Pa=[]))})),e.ma
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
 */}class _g{constructor(e,t,n,r,i){this.asyncQueue=e,this.timerId=t,this.targetTimeMs=n,this.op=r,this.removalCallback=i,this.deferred=new Jo,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(e=>{})}get promise(){return this.deferred.promise}static createAndSchedule(e,t,n,r,i){const s=Date.now()+n,o=new _g(e,t,s,r,i);return o.start(n),o}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){null!==this.timerHandle&&(this.clearTimeout(),this.deferred.reject(new Qo(Xo.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>null!==this.timerHandle?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){null!==this.timerHandle&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function xg(e,t){if(jo("AsyncQueue",`${t}: ${e}`),Ja(e))return new Qo(Xo.UNAVAILABLE,`${t}: ${e}`);throw e}
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
 */class Eg{static emptySet(e){return new Eg(e.comparator)}constructor(e){this.comparator=e?(t,n)=>e(t,n)||wa.comparator(t.key,n.key):(e,t)=>wa.comparator(e.key,t.key),this.keyedMap=_d(),this.sortedSet=new Tc(this.comparator)}has(e){return null!=this.keyedMap.get(e)}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const t=this.keyedMap.get(e);return t?this.sortedSet.indexOf(t):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal((t,n)=>(e(t),!1))}add(e){const t=this.delete(e.key);return t.copy(t.keyedMap.insert(e.key,e),t.sortedSet.insert(e,null))}delete(e){const t=this.get(e);return t?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(t)):this}isEqual(e){if(!(e instanceof Eg))return!1;if(this.size!==e.size)return!1;const t=this.sortedSet.getIterator(),n=e.sortedSet.getIterator();for(;t.hasNext();){const e=t.getNext().key,r=n.getNext().key;if(!e.isEqual(r))return!1}return!0}toString(){const e=[];return this.forEach(t=>{e.push(t.toString())}),0===e.length?"DocumentSet ()":"DocumentSet (\n  "+e.join("  \n")+"\n)"}copy(e,t){const n=new Eg;return n.comparator=this.comparator,n.keyedMap=e,n.sortedSet=t,n}}
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
 */class Tg{constructor(){this.fa=new Tc(wa.comparator)}track(e){const t=e.doc.key,n=this.fa.get(t);n?0!==e.type&&3===n.type?this.fa=this.fa.insert(t,e):3===e.type&&1!==n.type?this.fa=this.fa.insert(t,{type:n.type,doc:e.doc}):2===e.type&&2===n.type?this.fa=this.fa.insert(t,{type:2,doc:e.doc}):2===e.type&&0===n.type?this.fa=this.fa.insert(t,{type:0,doc:e.doc}):1===e.type&&0===n.type?this.fa=this.fa.remove(t):1===e.type&&2===n.type?this.fa=this.fa.insert(t,{type:1,doc:n.doc}):0===e.type&&1===n.type?this.fa=this.fa.insert(t,{type:2,doc:e.doc}):Ho(63341,{At:e,ga:n}):this.fa=this.fa.insert(t,e)}pa(){const e=[];return this.fa.inorderTraversal((t,n)=>{e.push(n)}),e}}class Ig{constructor(e,t,n,r,i,s,o,a,l){this.query=e,this.docs=t,this.oldDocs=n,this.docChanges=r,this.mutatedKeys=i,this.fromCache=s,this.syncStateChanged=o,this.excludesMetadataChanges=a,this.hasCachedResults=l}static fromInitialDocuments(e,t,n,r,i){const s=[];return t.forEach(e=>{s.push({type:0,doc:e})}),new Ig(e,t,Eg.emptySet(t),s,n,r,!0,!1,i)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&dd(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const t=this.docChanges,n=e.docChanges;if(t.length!==n.length)return!1;for(let e=0;e<t.length;e++)if(t[e].type!==n[e].type||!t[e].doc.isEqual(n[e].doc))return!1;return!0}}
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
 */class Sg{constructor(){this.ya=void 0,this.wa=[]}Sa(){return this.wa.some(e=>e.ba())}}class Cg{constructor(){this.queries=kg(),this.onlineState="Unknown",this.Da=new Set}terminate(){!function(e,t){const n=Wo(e),r=n.queries;n.queries=kg(),r.forEach((e,n)=>{for(const e of n.wa)e.onError(t)})}(this,new Qo(Xo.ABORTED,"Firestore shutting down"))}}function kg(){return new vd(e=>hd(e),dd)}async function Ag(e,t){const n=Wo(e);let r=3;const i=t.query;let s=n.queries.get(i);s?!s.Sa()&&t.ba()&&(r=2):(s=new Sg,r=t.ba()?0:1);try{switch(r){case 0:s.ya=await n.onListen(i,!0);break;case 1:s.ya=await n.onListen(i,!1);break;case 2:await n.onFirstRemoteStoreListen(i)}}catch(e){const n=xg(e,`Initialization of query '${pd(t.query)}' failed`);return void t.onError(n)}n.queries.set(i,s),s.wa.push(t),t.va(n.onlineState),s.ya&&t.Ca(s.ya)&&Og(n)}async function Dg(e,t){const n=Wo(e),r=t.query;let i=3;const s=n.queries.get(r);if(s){const e=s.wa.indexOf(t);e>=0&&(s.wa.splice(e,1),0===s.wa.length?i=t.ba()?0:1:!s.Sa()&&t.ba()&&(i=2))}switch(i){case 0:return n.queries.delete(r),n.onUnlisten(r,!0);case 1:return n.queries.delete(r),n.onUnlisten(r,!1);case 2:return n.onLastRemoteStoreUnlisten(r);default:return}}function Ng(e,t){const n=Wo(e);let r=!1;for(const e of t){const t=e.query,i=n.queries.get(t);if(i){for(const t of i.wa)t.Ca(e)&&(r=!0);i.ya=e}}r&&Og(n)}function Rg(e,t,n){const r=Wo(e),i=r.queries.get(t);if(i)for(const e of i.wa)e.onError(n);r.queries.delete(t)}function Og(e){e.Da.forEach(e=>{e.next()})}var Pg,Lg;(Lg=Pg||(Pg={})).Fa="default",Lg.Cache="cache";class $g{constructor(e,t,n){this.query=e,this.Ma=t,this.xa=!1,this.Oa=null,this.onlineState="Unknown",this.options=n||{}}Ca(e){if(!this.options.includeMetadataChanges){const t=[];for(const n of e.docChanges)3!==n.type&&t.push(n);e=new Ig(e.query,e.docs,e.oldDocs,t,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let t=!1;return this.xa?this.Na(e)&&(this.Ma.next(e),t=!0):this.Ba(e,this.onlineState)&&(this.La(e),t=!0),this.Oa=e,t}onError(e){this.Ma.error(e)}va(e){this.onlineState=e;let t=!1;return this.Oa&&!this.xa&&this.Ba(this.Oa,e)&&(this.La(this.Oa),t=!0),t}Ba(e,t){if(!e.fromCache)return!0;if(!this.ba())return!0;const n="Offline"!==t;return(!this.options.ka||!n)&&(!e.docs.isEmpty()||e.hasCachedResults||"Offline"===t)}Na(e){if(e.docChanges.length>0)return!0;const t=this.Oa&&this.Oa.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!t)&&!0===this.options.includeMetadataChanges}La(e){e=Ig.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.xa=!0,this.Ma.next(e)}ba(){return this.options.source!==Pg.Cache}}
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
 */class Mg{constructor(e){this.key=e}}class Ug{constructor(e){this.key=e}}class Fg{constructor(e,t){this.query=e,this.Ha=t,this.Ya=null,this.hasCachedResults=!1,this.current=!1,this.Za=kd(),this.mutatedKeys=kd(),this.Xa=md(e),this.eu=new Eg(this.Xa)}get tu(){return this.Ha}nu(e,t){const n=t?t.ru:new Tg,r=t?t.eu:this.eu;let i=t?t.mutatedKeys:this.mutatedKeys,s=r,o=!1;const a="F"===this.query.limitType&&r.size===this.query.limit?r.last():null,l="L"===this.query.limitType&&r.size===this.query.limit?r.first():null;if(e.inorderTraversal((e,t)=>{const c=r.get(e),u=fd(this.query,t)?t:null,d=!!c&&this.mutatedKeys.has(c.key),h=!!u&&(u.hasLocalMutations||this.mutatedKeys.has(u.key)&&u.hasCommittedMutations);let p=!1;c&&u?c.data.isEqual(u.data)?d!==h&&(n.track({type:3,doc:u}),p=!0):this.iu(c,u)||(n.track({type:2,doc:u}),p=!0,(a&&this.Xa(u,a)>0||l&&this.Xa(u,l)<0)&&(o=!0)):!c&&u?(n.track({type:0,doc:u}),p=!0):c&&!u&&(n.track({type:1,doc:c}),p=!0,(a||l)&&(o=!0)),p&&(u?(s=s.add(u),i=h?i.add(e):i.delete(e)):(s=s.delete(e),i=i.delete(e)))}),null!==this.query.limit)for(;s.size>this.query.limit;){const e="F"===this.query.limitType?s.last():s.first();s=s.delete(e.key),i=i.delete(e.key),n.track({type:1,doc:e})}return{eu:s,ru:n,Ds:o,mutatedKeys:i}}iu(e,t){return e.hasLocalMutations&&t.hasCommittedMutations&&!t.hasLocalMutations}applyChanges(e,t,n,r){const i=this.eu;this.eu=e.eu,this.mutatedKeys=e.mutatedKeys;const s=e.ru.pa();s.sort((e,t)=>function(e,t){const n=e=>{switch(e){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return Ho(20277,{At:e})}};return n(e)-n(t)}
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
 */(e.type,t.type)||this.Xa(e.doc,t.doc)),this.su(n),r=null!=r&&r;const o=t&&!r?this.ou():[],a=0===this.Za.size&&this.current&&!r?1:0,l=a!==this.Ya;return this.Ya=a,0!==s.length||l?{snapshot:new Ig(this.query,e.eu,i,s,e.mutatedKeys,0===a,l,!1,!!n&&n.resumeToken.approximateByteSize()>0),_u:o}:{_u:o}}va(e){return this.current&&"Offline"===e?(this.current=!1,this.applyChanges({eu:this.eu,ru:new Tg,mutatedKeys:this.mutatedKeys,Ds:!1},!1)):{_u:[]}}au(e){return!this.Ha.has(e)&&!!this.eu.has(e)&&!this.eu.get(e).hasLocalMutations}su(e){e&&(e.addedDocuments.forEach(e=>this.Ha=this.Ha.add(e)),e.modifiedDocuments.forEach(e=>{}),e.removedDocuments.forEach(e=>this.Ha=this.Ha.delete(e)),this.current=e.current)}ou(){if(!this.current)return[];const e=this.Za;this.Za=kd(),this.eu.forEach(e=>{this.au(e.key)&&(this.Za=this.Za.add(e.key))});const t=[];return e.forEach(e=>{this.Za.has(e)||t.push(new Ug(e))}),this.Za.forEach(n=>{e.has(n)||t.push(new Mg(n))}),t}uu(e){this.Ha=e.qs,this.Za=kd();const t=this.nu(e.documents);return this.applyChanges(t,!0)}cu(){return Ig.fromInitialDocuments(this.query,this.eu,this.mutatedKeys,0===this.Ya,this.hasCachedResults)}}const Vg="SyncEngine";class zg{constructor(e,t,n){this.query=e,this.targetId=t,this.view=n}}class jg{constructor(e){this.key=e,this.lu=!1}}class Bg{constructor(e,t,n,r,i,s){this.localStore=e,this.remoteStore=t,this.eventManager=n,this.sharedClientState=r,this.currentUser=i,this.maxConcurrentLimboResolutions=s,this.hu={},this.Pu=new vd(e=>hd(e),dd),this.Tu=new Map,this.Iu=new Set,this.du=new Tc(wa.comparator),this.Eu=new Map,this.Au=new Hf,this.Ru={},this.Vu=new Map,this.mu=yf.ur(),this.onlineState="Unknown",this.fu=void 0}get isPrimaryClient(){return!0===this.fu}}async function qg(e,t,n=!0){const r=uv(e);let i;const s=r.Pu.get(t);return s?(r.sharedClientState.addLocalQueryTarget(s.targetId),i=s.view.cu()):i=await Gg(r,t,n,!0),i}async function Hg(e,t){const n=uv(e);await Gg(n,t,!0,!1)}async function Gg(e,t,n,r){const i=await function(e,t){const n=Wo(e);return n.persistence.runTransaction("Allocate target","readwrite",e=>{let r;return n.hi.getTargetData(e,t).next(i=>i?(r=i,qa.resolve(r)):n.hi.allocateTargetId(e).next(i=>(r=new lp(t,i,"TargetPurposeListen",e.currentSequenceNumber),n.hi.addTargetData(e,r).next(()=>r))))}).then(e=>{const r=n.Fs.get(e.targetId);return(null===r||e.snapshotVersion.compareTo(r.snapshotVersion)>0)&&(n.Fs=n.Fs.insert(e.targetId,e),n.Ms.set(t,e.targetId)),e})}(e.localStore,ld(t)),s=i.targetId,o=e.sharedClientState.addLocalQueryTarget(s,n);let a;return r&&(a=await async function(e,t,n,r,i){e.gu=(t,n,r)=>async function(e,t,n,r){let i=t.view.nu(n);i.Ds&&(i=await _m(e.localStore,t.query,!1).then(({documents:e})=>t.view.nu(e,i)));const s=r&&r.targetChanges.get(t.targetId),o=r&&null!=r.targetMismatches.get(t.targetId),a=t.view.applyChanges(i,e.isPrimaryClient,s,o);return iv(e,t.targetId,a._u),a.snapshot}(e,t,n,r);const s=await _m(e.localStore,t,!0),o=new Fg(t,s.qs),a=o.nu(s.documents),l=_h.createSynthesizedTargetChangeForCurrentChange(n,r&&"Offline"!==e.onlineState,i),c=o.applyChanges(a,e.isPrimaryClient,l);iv(e,n,c._u);const u=new zg(t,n,o);return e.Pu.set(t,u),e.Tu.has(n)?e.Tu.get(n).push(t):e.Tu.set(n,[t]),c.snapshot}(e,t,s,"current"===o,i.resumeToken)),e.isPrimaryClient&&n&&Xm(e.remoteStore,i),a}async function Kg(e,t,n){const r=Wo(e),i=r.Pu.get(t),s=r.Tu.get(i.targetId);if(s.length>1)return r.Tu.set(i.targetId,s.filter(e=>!dd(e,t))),void r.Pu.delete(t);r.isPrimaryClient?(r.sharedClientState.removeLocalQueryTarget(i.targetId),r.sharedClientState.isActiveQueryTarget(i.targetId)||await wm(r.localStore,i.targetId,!1).then(()=>{r.sharedClientState.clearQueryState(i.targetId),n&&Qm(r.remoteStore,i.targetId),nv(r,i.targetId)}).catch(Ba)):(nv(r,i.targetId),await wm(r.localStore,i.targetId,!0))}async function Wg(e,t){const n=Wo(e),r=n.Pu.get(t),i=n.Tu.get(r.targetId);n.isPrimaryClient&&1===i.length&&(n.sharedClientState.removeLocalQueryTarget(r.targetId),Qm(n.remoteStore,r.targetId))}async function Xg(e,t){const n=Wo(e);try{const e=await ym(n.localStore,t);t.targetChanges.forEach((e,t)=>{const r=n.Eu.get(t);r&&(Ko(e.addedDocuments.size+e.modifiedDocuments.size+e.removedDocuments.size<=1,22616),e.addedDocuments.size>0?r.lu=!0:e.modifiedDocuments.size>0?Ko(r.lu,14607):e.removedDocuments.size>0&&(Ko(r.lu,42227),r.lu=!1))}),await av(n,e,t)}catch(e){await Ba(e)}}function Qg(e,t,n){const r=Wo(e);if(r.isPrimaryClient&&0===n||!r.isPrimaryClient&&1===n){const e=[];r.Pu.forEach((n,r)=>{const i=r.view.va(t);i.snapshot&&e.push(i.snapshot)}),function(e,t){const n=Wo(e);n.onlineState=t;let r=!1;n.queries.forEach((e,n)=>{for(const e of n.wa)e.va(t)&&(r=!0)}),r&&Og(n)}(r.eventManager,t),e.length&&r.hu.J_(e),r.onlineState=t,r.isPrimaryClient&&r.sharedClientState.setOnlineState(t)}}async function Jg(e,t,n){const r=Wo(e);r.sharedClientState.updateQueryState(t,"rejected",n);const i=r.Eu.get(t),s=i&&i.key;if(s){let e=new Tc(wa.comparator);e=e.insert(s,Tu.newNoDocument(s,Ra.min()));const n=kd().add(s),i=new wh(Ra.min(),new Map,new Tc(ca),e,n);await Xg(r,i),r.du=r.du.remove(s),r.Eu.delete(t),ov(r)}else await wm(r.localStore,t,!1).then(()=>nv(r,t,n)).catch(Ba)}async function Yg(e,t){const n=Wo(e),r=t.batch.batchId;try{const e=await function(e,t){const n=Wo(e);return n.persistence.runTransaction("Acknowledge batch","readwrite-primary",e=>{const r=t.batch.keys(),i=n.Os.newChangeBuffer({trackRemovals:!0});return function(e,t,n,r){const i=n.batch,s=i.keys();let o=qa.resolve();return s.forEach(e=>{o=o.next(()=>r.getEntry(t,e)).next(t=>{const s=n.docVersions.get(e);Ko(null!==s,48541),t.version.compareTo(s)<0&&(i.applyToRemoteDocument(t,n),t.isValidDocument()&&(t.setReadTime(n.commitVersion),r.addEntry(t)))})}),o.next(()=>e.mutationQueue.removeMutationBatch(t,i))}(n,e,t,i).next(()=>i.apply(e)).next(()=>n.mutationQueue.performConsistencyCheck(e)).next(()=>n.documentOverlayCache.removeOverlaysForBatchId(e,r,t.batch.batchId)).next(()=>n.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(e,function(e){let t=kd();for(let n=0;n<e.mutationResults.length;++n)e.mutationResults[n].transformResults.length>0&&(t=t.add(e.batch.mutations[n].key));return t}(t))).next(()=>n.localDocuments.getDocuments(e,r))})}(n.localStore,t);tv(n,r,null),ev(n,r),n.sharedClientState.updateMutationState(r,"acknowledged"),await av(n,e)}catch(e){await Ba(e)}}async function Zg(e,t,n){const r=Wo(e);try{const e=await function(e,t){const n=Wo(e);return n.persistence.runTransaction("Reject batch","readwrite-primary",e=>{let r;return n.mutationQueue.lookupMutationBatch(e,t).next(t=>(Ko(null!==t,37113),r=t.keys(),n.mutationQueue.removeMutationBatch(e,t))).next(()=>n.mutationQueue.performConsistencyCheck(e)).next(()=>n.documentOverlayCache.removeOverlaysForBatchId(e,r,t)).next(()=>n.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(e,r)).next(()=>n.localDocuments.getDocuments(e,r))})}(r.localStore,t);tv(r,t,n),ev(r,t),r.sharedClientState.updateMutationState(t,"rejected",n),await av(r,e)}catch(n){await Ba(n)}}function ev(e,t){(e.Vu.get(t)||[]).forEach(e=>{e.resolve()}),e.Vu.delete(t)}function tv(e,t,n){const r=Wo(e);let i=r.Ru[r.currentUser.toKey()];if(i){const e=i.get(t);e&&(n?e.reject(n):e.resolve(),i=i.remove(t)),r.Ru[r.currentUser.toKey()]=i}}function nv(e,t,n=null){e.sharedClientState.removeLocalQueryTarget(t);for(const r of e.Tu.get(t))e.Pu.delete(r),n&&e.hu.pu(r,n);e.Tu.delete(t),e.isPrimaryClient&&e.Au.zr(t).forEach(t=>{e.Au.containsKey(t)||rv(e,t)})}function rv(e,t){e.Iu.delete(t.path.canonicalString());const n=e.du.get(t);null!==n&&(Qm(e.remoteStore,n),e.du=e.du.remove(t),e.Eu.delete(n),ov(e))}function iv(e,t,n){for(const r of n)r instanceof Mg?(e.Au.addReference(r.key,t),sv(e,r)):r instanceof Ug?(zo(Vg,"Document no longer in limbo: "+r.key),e.Au.removeReference(r.key,t),e.Au.containsKey(r.key)||rv(e,r.key)):Ho(19791,{yu:r})}function sv(e,t){const n=t.key,r=n.path.canonicalString();e.du.get(n)||e.Iu.has(r)||(zo(Vg,"New document in limbo: "+n),e.Iu.add(r),ov(e))}function ov(e){for(;e.Iu.size>0&&e.du.size<e.maxConcurrentLimboResolutions;){const t=e.Iu.values().next().value;e.Iu.delete(t);const n=new wa(va.fromString(t)),r=e.mu.next();e.Eu.set(r,new jg(n)),e.du=e.du.insert(n,r),Xm(e.remoteStore,new lp(ld(id(n.path)),r,"TargetPurposeLimboResolution",sl.ue))}}async function av(e,t,n){const r=Wo(e),i=[],s=[],o=[];r.Pu.isEmpty()||(r.Pu.forEach((e,a)=>{o.push(r.gu(a,t,n).then(e=>{var t;if((e||n)&&r.isPrimaryClient){const i=e?!e.fromCache:null===(t=null==n?void 0:n.targetChanges.get(a.targetId))||void 0===t?void 0:t.current;r.sharedClientState.updateQueryState(a.targetId,i?"current":"not-current")}if(e){i.push(e);const t=um.Es(a.targetId,e);s.push(t)}}))}),await Promise.all(o),r.hu.J_(i),await async function(e,t){const n=Wo(e);try{await n.persistence.runTransaction("notifyLocalViewChanges","readwrite",e=>qa.forEach(t,t=>qa.forEach(t.Is,r=>n.persistence.referenceDelegate.addReference(e,t.targetId,r)).next(()=>qa.forEach(t.ds,r=>n.persistence.referenceDelegate.removeReference(e,t.targetId,r)))))}catch(e){if(!Ja(e))throw e;zo(pm,"Failed to update sequence numbers: "+e)}for(const e of t){const t=e.targetId;if(!e.fromCache){const e=n.Fs.get(t),r=e.snapshotVersion,i=e.withLastLimboFreeSnapshotVersion(r);n.Fs=n.Fs.insert(t,i)}}}(r.localStore,s))}async function lv(e,t){const n=Wo(e);if(!n.currentUser.isEqual(t)){zo(Vg,"User change. New user:",t.toKey());const e=await gm(n.localStore,t);n.currentUser=t,function(e,t){e.Vu.forEach(e=>{e.forEach(e=>{e.reject(new Qo(Xo.CANCELLED,t))})}),e.Vu.clear()}(n,"'waitForPendingWrites' promise is rejected due to a user change."),n.sharedClientState.handleUserChange(t,e.removedBatchIds,e.addedBatchIds),await av(n,e.Bs)}}function cv(e,t){const n=Wo(e),r=n.Eu.get(t);if(r&&r.lu)return kd().add(r.key);{let e=kd();const r=n.Tu.get(t);if(!r)return e;for(const t of r){const r=n.Pu.get(t);e=e.unionWith(r.view.tu)}return e}}function uv(e){const t=Wo(e);return t.remoteStore.remoteSyncer.applyRemoteEvent=Xg.bind(null,t),t.remoteStore.remoteSyncer.getRemoteKeysForTarget=cv.bind(null,t),t.remoteStore.remoteSyncer.rejectListen=Jg.bind(null,t),t.hu.J_=Ng.bind(null,t.eventManager),t.hu.pu=Rg.bind(null,t.eventManager),t}function dv(e){const t=Wo(e);return t.remoteStore.remoteSyncer.applySuccessfulWrite=Yg.bind(null,t),t.remoteStore.remoteSyncer.rejectFailedWrite=Zg.bind(null,t),t}class hv{constructor(){this.kind="memory",this.synchronizeTabs=!1}async initialize(e){this.serializer=$m(e.databaseInfo.databaseId),this.sharedClientState=this.bu(e),this.persistence=this.Du(e),await this.persistence.start(),this.localStore=this.vu(e),this.gcScheduler=this.Cu(e,this.localStore),this.indexBackfillerScheduler=this.Fu(e,this.localStore)}Cu(e,t){return null}Fu(e,t){return null}vu(e){return mm(this.persistence,new hm,e.initialUser,this.serializer)}Du(e){return new Jf(Zf.Vi,this.serializer)}bu(e){return new Em}async terminate(){var e,t;null===(e=this.gcScheduler)||void 0===e||e.stop(),null===(t=this.indexBackfillerScheduler)||void 0===t||t.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}hv.provider={build:()=>new hv};class pv extends hv{constructor(e){super(),this.cacheSizeBytes=e}Cu(e,t){Ko(this.persistence.referenceDelegate instanceof em,46915);const n=this.persistence.referenceDelegate.garbageCollector;return new Sf(n,e.asyncQueue,t)}Du(e){const t=void 0!==this.cacheSizeBytes?uf.withCacheSize(this.cacheSizeBytes):uf.DEFAULT;return new Jf(e=>em.Vi(e,t),this.serializer)}}class fv extends hv{constructor(e,t,n){super(),this.Mu=e,this.cacheSizeBytes=t,this.forceOwnership=n,this.kind="persistent",this.synchronizeTabs=!1}async initialize(e){await super.initialize(e),await this.Mu.initialize(this,e),await dv(this.Mu.syncEngine),await cg(this.Mu.remoteStore),await this.persistence.ji(()=>(this.gcScheduler&&!this.gcScheduler.started&&this.gcScheduler.start(),this.indexBackfillerScheduler&&!this.indexBackfillerScheduler.started&&this.indexBackfillerScheduler.start(),Promise.resolve()))}vu(e){return mm(this.persistence,new hm,e.initialUser,this.serializer)}Cu(e,t){const n=this.persistence.referenceDelegate.garbageCollector;return new Sf(n,e.asyncQueue,t)}Fu(e,t){const n=new il(t,this.persistence);return new rl(e.asyncQueue,n)}Du(e){const t=function(e,t){let n=e.projectId;return e.isDefaultDatabase||(n+="."+e.database),"firestore/"+t+"/"+n+"/"}(e.databaseInfo.databaseId,e.databaseInfo.persistenceKey),n=void 0!==this.cacheSizeBytes?uf.withCacheSize(this.cacheSizeBytes):uf.DEFAULT;return new am(this.synchronizeTabs,t,e.clientId,n,e.asyncQueue,"undefined"!=typeof window?window:null,Lm(),this.serializer,this.sharedClientState,!!this.forceOwnership)}bu(e){return new Em}}class mv{async initialize(e,t){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(t),this.remoteStore=this.createRemoteStore(t),this.eventManager=this.createEventManager(t),this.syncEngine=this.createSyncEngine(t,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=e=>Qg(this.syncEngine,e,1),this.remoteStore.remoteSyncer.handleCredentialChange=lv.bind(null,this.syncEngine),await async function(e,t){const n=Wo(e);t?(n.Ia.delete(2),await Km(n)):t||(n.Ia.add(2),await Wm(n),n.Aa.set("Unknown"))}(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return new Cg}createDatastore(e){const t=$m(e.databaseInfo.databaseId),n=function(e){return new Pm(e)}(e.databaseInfo);return function(e,t,n,r){return new Bm(e,t,n,r)}(e.authCredentials,e.appCheckCredentials,n,t)}createRemoteStore(e){return function(e,t,n,r,i){return new Gm(e,t,n,r,i)}(this.localStore,this.datastore,e.asyncQueue,e=>Qg(this.syncEngine,e,0),Sm.C()?new Sm:new Tm)}createSyncEngine(e,t){return function(e,t,n,r,i,s,o){const a=new Bg(e,t,n,r,i,s);return o&&(a.fu=!0),a}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,t)}async terminate(){var e,t;await async function(e){const t=Wo(e);zo(Hm,"RemoteStore shutting down."),t.Ia.add(5),await Wm(t),t.Ea.shutdown(),t.Aa.set("Unknown")}(this.remoteStore),null===(e=this.datastore)||void 0===e||e.terminate(),null===(t=this.eventManager)||void 0===t||t.terminate()}}mv.provider={build:()=>new mv};
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
class gv{constructor(e){this.observer=e,this.muted=!1}next(e){this.muted||this.observer.next&&this.xu(this.observer.next,e)}error(e){this.muted||(this.observer.error?this.xu(this.observer.error,e):jo("Uncaught Error in snapshot listener:",e.toString()))}Ou(){this.muted=!0}xu(e,t){setTimeout(()=>{this.muted||e(t)},0)}}
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
 */const vv="FirestoreClient";class yv{constructor(e,t,n,r,i){this.authCredentials=e,this.appCheckCredentials=t,this.asyncQueue=n,this.databaseInfo=r,this.user=Mo.UNAUTHENTICATED,this.clientId=la.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this._uninitializedComponentsProvider=i,this.authCredentials.start(n,async e=>{zo(vv,"Received user=",e.uid),await this.authCredentialListener(e),this.user=e}),this.appCheckCredentials.start(n,e=>(zo(vv,"Received new app check token=",e),this.appCheckCredentialListener(e,this.user)))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}terminate(){this.asyncQueue.enterRestrictedMode();const e=new Jo;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(t){const n=xg(t,"Failed to shutdown persistence");e.reject(n)}}),e.promise}}async function bv(e,t){e.asyncQueue.verifyOperationInProgress(),zo(vv,"Initializing OfflineComponentProvider");const n=e.configuration;await t.initialize(n);let r=n.initialUser;e.setCredentialChangeListener(async e=>{r.isEqual(e)||(await gm(t.localStore,e),r=e)}),t.persistence.setDatabaseDeletedListener(()=>{Bo("Terminating Firestore due to IndexedDb database deletion"),e.terminate().then(()=>{zo("Terminating Firestore due to IndexedDb database deletion completed successfully")}).catch(e=>{Bo("Terminating Firestore due to IndexedDb database deletion failed",e)})}),e._offlineComponents=t}async function wv(e,t){e.asyncQueue.verifyOperationInProgress();const n=await async function(e){if(!e._offlineComponents)if(e._uninitializedComponentsProvider){zo(vv,"Using user provided OfflineComponentProvider");try{await bv(e,e._uninitializedComponentsProvider._offline)}catch(t){const n=t;if(!function(e){return"FirebaseError"===e.name?e.code===Xo.FAILED_PRECONDITION||e.code===Xo.UNIMPLEMENTED:!("undefined"!=typeof DOMException&&e instanceof DOMException)||22===e.code||20===e.code||11===e.code}(n))throw n;Bo("Error using user provided cache. Falling back to memory cache: "+n),await bv(e,new hv)}}else zo(vv,"Using default OfflineComponentProvider"),await bv(e,new pv(void 0));return e._offlineComponents}(e);zo(vv,"Initializing OnlineComponentProvider"),await t.initialize(n,e.configuration),e.setCredentialChangeListener(e=>yg(t.remoteStore,e)),e.setAppCheckTokenChangeListener((e,n)=>yg(t.remoteStore,n)),e._onlineComponents=t}async function _v(e){return e._onlineComponents||(e._uninitializedComponentsProvider?(zo(vv,"Using user provided OnlineComponentProvider"),await wv(e,e._uninitializedComponentsProvider._online)):(zo(vv,"Using default OnlineComponentProvider"),await wv(e,new mv))),e._onlineComponents}async function xv(e){const t=await _v(e),n=t.eventManager;return n.onListen=qg.bind(null,t.syncEngine),n.onUnlisten=Kg.bind(null,t.syncEngine),n.onFirstRemoteStoreListen=Hg.bind(null,t.syncEngine),n.onLastRemoteStoreUnlisten=Wg.bind(null,t.syncEngine),n}
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
function Ev(e){const t={};return void 0!==e.timeoutSeconds&&(t.timeoutSeconds=e.timeoutSeconds),t
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
 */}const Tv=new Map,Iv="firestore.googleapis.com",Sv=!0;
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
 */class Cv{constructor(e){var t,n;if(void 0===e.host){if(void 0!==e.ssl)throw new Qo(Xo.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host=Iv,this.ssl=Sv}else this.host=e.host,this.ssl=null!==(t=e.ssl)&&void 0!==t?t:Sv;if(this.isUsingEmulator=void 0!==e.emulatorOptions,this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,void 0===e.cacheSizeBytes)this.cacheSizeBytes=cf;else{if(-1!==e.cacheSizeBytes&&e.cacheSizeBytes<1048576)throw new Qo(Xo.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}(function(e,t,n,r){if(!0===t&&!0===r)throw new Qo(Xo.INVALID_ARGUMENT,`${e} and ${n} cannot be used together.`)})("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:void 0===e.experimentalAutoDetectLongPolling?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=Ev(null!==(n=e.experimentalLongPollingOptions)&&void 0!==n?n:{}),function(e){if(void 0!==e.timeoutSeconds){if(isNaN(e.timeoutSeconds))throw new Qo(Xo.INVALID_ARGUMENT,`invalid long polling timeout: ${e.timeoutSeconds} (must not be NaN)`);if(e.timeoutSeconds<5)throw new Qo(Xo.INVALID_ARGUMENT,`invalid long polling timeout: ${e.timeoutSeconds} (minimum allowed value is 5)`);if(e.timeoutSeconds>30)throw new Qo(Xo.INVALID_ARGUMENT,`invalid long polling timeout: ${e.timeoutSeconds} (maximum allowed value is 30)`)}}
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
 */(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&function(e,t){return e.timeoutSeconds===t.timeoutSeconds}(this.experimentalLongPollingOptions,e.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}class kv{constructor(e,t,n,r){this._authCredentials=e,this._appCheckCredentials=t,this._databaseId=n,this._app=r,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new Cv({}),this._settingsFrozen=!1,this._emulatorOptions={},this._terminateTask="notTerminated"}get app(){if(!this._app)throw new Qo(Xo.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return"notTerminated"!==this._terminateTask}_setSettings(e){if(this._settingsFrozen)throw new Qo(Xo.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new Cv(e),this._emulatorOptions=e.emulatorOptions||{},void 0!==e.credentials&&(this._authCredentials=function(e){if(!e)return new Zo;switch(e.type){case"firstParty":return new ra(e.sessionIndex||"0",e.iamToken||null,e.authTokenFactory||null);case"provider":return e.client;default:throw new Qo(Xo.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_getEmulatorOptions(){return this._emulatorOptions}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return"notTerminated"===this._terminateTask&&(this._terminateTask=this._terminate()),this._terminateTask}async _restart(){"notTerminated"===this._terminateTask?await this._terminate():this._terminateTask="notTerminated"}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(e){const t=Tv.get(e);t&&(zo("ComponentProvider","Removing Datastore"),Tv.delete(e),t.terminate())}(this),Promise.resolve()}}function Av(e,t,n,r={}){var i;e=Sa(e,kv);const s=gt(t),o=e._getSettings(),a=Object.assign(Object.assign({},o),{emulatorOptions:e._getEmulatorOptions()}),l=`${t}:${n}`;s&&(vt(`https://${l}`),_t("Firestore",!0)),o.host!==Iv&&o.host!==l&&Bo("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used.");const c=Object.assign(Object.assign({},o),{host:l,ssl:s,emulatorOptions:r});if(!Dt(c,a)&&(e._setSettings(c),r.mockUserToken)){let t,n;if("string"==typeof r.mockUserToken)t=r.mockUserToken,n=Mo.MOCK_USER;else{t=yt(r.mockUserToken,null===(i=e._app)||void 0===i?void 0:i.options.projectId);const s=r.mockUserToken.sub||r.mockUserToken.user_id;if(!s)throw new Qo(Xo.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");n=new Mo(s)}e._authCredentials=new ea(new Yo(t,n))}}
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
 */class Dv{constructor(e,t,n){this.converter=t,this._query=n,this.type="query",this.firestore=e}withConverter(e){return new Dv(this.firestore,e,this._query)}}class Nv{constructor(e,t,n){this.converter=t,this._key=n,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new Rv(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new Nv(this.firestore,e,this._key)}toJSON(){return{type:Nv._jsonSchemaVersion,referencePath:this._key.toString()}}static fromJSON(e,t,n){if(ka(t,Nv._jsonSchema))return new Nv(e,n||null,new wa(va.fromString(t.referencePath)))}}Nv._jsonSchemaVersion="firestore/documentReference/1.0",Nv._jsonSchema={type:Ca("string",Nv._jsonSchemaVersion),referencePath:Ca("string")};class Rv extends Dv{constructor(e,t,n){super(e,t,id(n)),this._path=n,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new Nv(this.firestore,null,new wa(e))}withConverter(e){return new Rv(this.firestore,e,this._path)}}function Ov(e,t,...n){if(e=Mt(e),_a("collection","path",t),e instanceof kv){const r=va.fromString(t,...n);return Ea(r),new Rv(e,null,r)}{if(!(e instanceof Nv||e instanceof Rv))throw new Qo(Xo.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=e._path.child(va.fromString(t,...n));return Ea(r),new Rv(e.firestore,null,r)}}function Pv(e,t,...n){if(e=Mt(e),1===arguments.length&&(t=la.newId()),_a("doc","path",t),e instanceof kv){const r=va.fromString(t,...n);return xa(r),new Nv(e,null,new wa(r))}{if(!(e instanceof Nv||e instanceof Rv))throw new Qo(Xo.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=e._path.child(va.fromString(t,...n));return xa(r),new Nv(e.firestore,e instanceof Rv?e.converter:null,new wa(r))}}
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
 */const Lv="AsyncQueue";class $v{constructor(e=Promise.resolve()){this.Zu=[],this.Xu=!1,this.ec=[],this.tc=null,this.nc=!1,this.rc=!1,this.sc=[],this.F_=new Mm(this,"async_queue_retry"),this.oc=()=>{const e=Lm();e&&zo(Lv,"Visibility state changed to "+e.visibilityState),this.F_.y_()},this._c=e;const t=Lm();t&&"function"==typeof t.addEventListener&&t.addEventListener("visibilitychange",this.oc)}get isShuttingDown(){return this.Xu}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.ac(),this.uc(e)}enterRestrictedMode(e){if(!this.Xu){this.Xu=!0,this.rc=e||!1;const t=Lm();t&&"function"==typeof t.removeEventListener&&t.removeEventListener("visibilitychange",this.oc)}}enqueue(e){if(this.ac(),this.Xu)return new Promise(()=>{});const t=new Jo;return this.uc(()=>this.Xu&&this.rc?Promise.resolve():(e().then(t.resolve,t.reject),t.promise)).then(()=>t.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.Zu.push(e),this.cc()))}async cc(){if(0!==this.Zu.length){try{await this.Zu[0](),this.Zu.shift(),this.F_.reset()}catch(e){if(!Ja(e))throw e;zo(Lv,"Operation failed with retryable error: "+e)}this.Zu.length>0&&this.F_.g_(()=>this.cc())}}uc(e){const t=this._c.then(()=>(this.nc=!0,e().catch(e=>{throw this.tc=e,this.nc=!1,jo("INTERNAL UNHANDLED ERROR: ",Mv(e)),e}).then(e=>(this.nc=!1,e))));return this._c=t,t}enqueueAfterDelay(e,t,n){this.ac(),this.sc.indexOf(e)>-1&&(t=0);const r=_g.createAndSchedule(this,e,t,n,e=>this.lc(e));return this.ec.push(r),r}ac(){this.tc&&Ho(47125,{hc:Mv(this.tc)})}verifyOperationInProgress(){}async Pc(){let e;do{e=this._c,await e}while(e!==this._c)}Tc(e){for(const t of this.ec)if(t.timerId===e)return!0;return!1}Ic(e){return this.Pc().then(()=>{this.ec.sort((e,t)=>e.targetTimeMs-t.targetTimeMs);for(const t of this.ec)if(t.skipDelay(),"all"!==e&&t.timerId===e)break;return this.Pc()})}dc(e){this.sc.push(e)}lc(e){const t=this.ec.indexOf(e);this.ec.splice(t,1)}}function Mv(e){let t=e.message||"";return e.stack&&(t=e.stack.includes(e.message)?e.stack:e.message+"\n"+e.stack),t
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
 */}function Uv(e){return function(e,t){if("object"!=typeof e||null===e)return!1;const n=e;for(const e of t)if(e in n&&"function"==typeof n[e])return!0;return!1}
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
 */(e,["next","error","complete"])}class Fv extends kv{constructor(e,t,n,r){super(e,t,n,r),this.type="firestore",this._queue=new $v,this._persistenceKey=(null==r?void 0:r.name)||"[DEFAULT]"}async _terminate(){if(this._firestoreClient){const e=this._firestoreClient.terminate();this._queue=new $v(e),this._firestoreClient=void 0,await e}}}function Vv(e,t){const n="object"==typeof e?e:er(),r="string"==typeof e?e:Hc,i=Wn(n,"firestore").getImmediate({identifier:r});if(!i._initialized){const e=ht("firestore");e&&Av(i,...e)}return i}function zv(e){if(e._terminated)throw new Qo(Xo.FAILED_PRECONDITION,"The client has already been terminated.");return e._firestoreClient||jv(e),e._firestoreClient}function jv(e){var t,n,r;const i=e._freezeSettings(),s=function(e,t,n,r){return new qc(e,t,n,r.host,r.ssl,r.experimentalForceLongPolling,r.experimentalAutoDetectLongPolling,Ev(r.experimentalLongPollingOptions),r.useFetchStreams,r.isUsingEmulator)}(e._databaseId,(null===(t=e._app)||void 0===t?void 0:t.options.appId)||"",e._persistenceKey,i);e._componentsProvider||(null===(n=i.localCache)||void 0===n?void 0:n._offlineComponentProvider)&&(null===(r=i.localCache)||void 0===r?void 0:r._onlineComponentProvider)&&(e._componentsProvider={_offline:i.localCache._offlineComponentProvider,_online:i.localCache._onlineComponentProvider}),e._firestoreClient=new yv(e._authCredentials,e._appCheckCredentials,e._queue,s,e._componentsProvider&&function(e){const t=null==e?void 0:e._online.build();return{_offline:null==e?void 0:e._offline.build(t),_online:t}}(e._componentsProvider))}function Bv(e,t){Bo("enableIndexedDbPersistence() will be deprecated in the future, you can use `FirestoreSettings.cache` instead.");const n=e._freezeSettings();return function(e,t,n){if((e=Sa(e,Fv))._firestoreClient||e._terminated)throw new Qo(Xo.FAILED_PRECONDITION,"Firestore has already been started and persistence can no longer be enabled. You can only enable persistence before calling any other methods on a Firestore object.");if(e._componentsProvider||e._getSettings().localCache)throw new Qo(Xo.FAILED_PRECONDITION,"SDK cache is already specified.");e._componentsProvider={_online:t,_offline:n},jv(e)}
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
 */(e,mv.provider,{build:e=>new fv(e,n.cacheSizeBytes,null==t?void 0:t.forceOwnership)}),Promise.resolve()}class qv{constructor(e){this._byteString=e}static fromBase64String(e){try{return new qv(Rc.fromBase64String(e))}catch(e){throw new Qo(Xo.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+e)}}static fromUint8Array(e){return new qv(Rc.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}toJSON(){return{type:qv._jsonSchemaVersion,bytes:this.toBase64()}}static fromJSON(e){if(ka(e,qv._jsonSchema))return qv.fromBase64String(e.bytes)}}qv._jsonSchemaVersion="firestore/bytes/1.0",qv._jsonSchema={type:Ca("string",qv._jsonSchemaVersion),bytes:Ca("string")};
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
class Hv{constructor(...e){for(let t=0;t<e.length;++t)if(0===e[t].length)throw new Qo(Xo.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new ba(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}
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
 */class Gv{constructor(e){this._methodName=e}}
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
 */class Kv{constructor(e,t){if(!isFinite(e)||e<-90||e>90)throw new Qo(Xo.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(t)||t<-180||t>180)throw new Qo(Xo.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+t);this._lat=e,this._long=t}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}_compareTo(e){return ca(this._lat,e._lat)||ca(this._long,e._long)}toJSON(){return{latitude:this._lat,longitude:this._long,type:Kv._jsonSchemaVersion}}static fromJSON(e){if(ka(e,Kv._jsonSchema))return new Kv(e.latitude,e.longitude)}}Kv._jsonSchemaVersion="firestore/geoPoint/1.0",Kv._jsonSchema={type:Ca("string",Kv._jsonSchemaVersion),latitude:Ca("number"),longitude:Ca("number")};
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
class Wv{constructor(e){this._values=(e||[]).map(e=>e)}toArray(){return this._values.map(e=>e)}isEqual(e){return function(e,t){if(e.length!==t.length)return!1;for(let n=0;n<e.length;++n)if(e[n]!==t[n])return!1;return!0}(this._values,e._values)}toJSON(){return{type:Wv._jsonSchemaVersion,vectorValues:this._values}}static fromJSON(e){if(ka(e,Wv._jsonSchema)){if(Array.isArray(e.vectorValues)&&e.vectorValues.every(e=>"number"==typeof e))return new Wv(e.vectorValues);throw new Qo(Xo.INVALID_ARGUMENT,"Expected 'vectorValues' field to be a number array")}}}Wv._jsonSchemaVersion="firestore/vectorValue/1.0",Wv._jsonSchema={type:Ca("string",Wv._jsonSchemaVersion),vectorValues:Ca("object")};
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
const Xv=/^__.*__$/;class Qv{constructor(e,t,n){this.data=e,this.fieldMask=t,this.fieldTransforms=n}toMutation(e,t){return null!==this.fieldMask?new nh(e,this.data,this.fieldMask,t,this.fieldTransforms):new th(e,this.data,t,this.fieldTransforms)}}class Jv{constructor(e,t,n){this.data=e,this.fieldMask=t,this.fieldTransforms=n}toMutation(e,t){return new nh(e,this.data,this.fieldMask,t,this.fieldTransforms)}}function Yv(e){switch(e){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw Ho(40011,{Ec:e})}}class Zv{constructor(e,t,n,r,i,s){this.settings=e,this.databaseId=t,this.serializer=n,this.ignoreUndefinedProperties=r,void 0===i&&this.Ac(),this.fieldTransforms=i||[],this.fieldMask=s||[]}get path(){return this.settings.path}get Ec(){return this.settings.Ec}Rc(e){return new Zv(Object.assign(Object.assign({},this.settings),e),this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}Vc(e){var t;const n=null===(t=this.path)||void 0===t?void 0:t.child(e),r=this.Rc({path:n,mc:!1});return r.fc(e),r}gc(e){var t;const n=null===(t=this.path)||void 0===t?void 0:t.child(e),r=this.Rc({path:n,mc:!1});return r.Ac(),r}yc(e){return this.Rc({path:void 0,mc:!0})}wc(e){return hy(e,this.settings.methodName,this.settings.Sc||!1,this.path,this.settings.bc)}contains(e){return void 0!==this.fieldMask.find(t=>e.isPrefixOf(t))||void 0!==this.fieldTransforms.find(t=>e.isPrefixOf(t.field))}Ac(){if(this.path)for(let e=0;e<this.path.length;e++)this.fc(this.path.get(e))}fc(e){if(0===e.length)throw this.wc("Document fields must not be empty");if(Yv(this.Ec)&&Xv.test(e))throw this.wc('Document fields cannot begin and end with "__"')}}class ey{constructor(e,t,n){this.databaseId=e,this.ignoreUndefinedProperties=t,this.serializer=n||$m(e)}Dc(e,t,n,r=!1){return new Zv({Ec:e,methodName:t,bc:n,path:ba.emptyPath(),mc:!1,Sc:r},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function ty(e){const t=e._freezeSettings(),n=$m(e._databaseId);return new ey(e._databaseId,!!t.ignoreUndefinedProperties,n)}function ny(e,t,n,r,i,s={}){const o=e.Dc(s.merge||s.mergeFields?2:0,t,n,i);ly("Data must be an object, but it was:",o,r);const a=oy(r,o);let l,c;if(s.merge)l=new Dc(o.fieldMask),c=o.fieldTransforms;else if(s.mergeFields){const e=[];for(const r of s.mergeFields){const i=cy(t,r,n);if(!o.contains(i))throw new Qo(Xo.INVALID_ARGUMENT,`Field '${i}' is specified in your field mask but missing from your input data.`);py(e,i)||e.push(i)}l=new Dc(e),c=o.fieldTransforms.filter(e=>l.covers(e.field))}else l=null,c=o.fieldTransforms;return new Qv(new xu(a),l,c)}class ry extends Gv{_toFieldTransform(e){if(2!==e.Ec)throw 1===e.Ec?e.wc(`${this._methodName}() can only appear at the top level of your update data`):e.wc(`${this._methodName}() cannot be used with set() unless you pass {merge:true}`);return e.fieldMask.push(e.path),null}isEqual(e){return e instanceof ry}}function iy(e,t,n,r=!1){return sy(n,e.Dc(r?4:3,t))}function sy(e,t){if(ay(e=Mt(e)))return ly("Unsupported field value:",t,e),oy(e,t);if(e instanceof Gv)return function(e,t){if(!Yv(t.Ec))throw t.wc(`${e._methodName}() can only be used with update() and set()`);if(!t.path)throw t.wc(`${e._methodName}() is not currently supported inside arrays`);const n=e._toFieldTransform(t);n&&t.fieldTransforms.push(n)}(e,t),null;if(void 0===e&&t.ignoreUndefinedProperties)return null;if(t.path&&t.fieldMask.push(t.path),e instanceof Array){if(t.settings.mc&&4!==t.Ec)throw t.wc("Nested arrays are not supported");return function(e,t){const n=[];let r=0;for(const i of e){let e=sy(i,t.yc(r));null==e&&(e={nullValue:"NULL_VALUE"}),n.push(e),r++}return{arrayValue:{values:n}}}(e,t)}return function(e,t){if(null===(e=Mt(e)))return{nullValue:"NULL_VALUE"};if("number"==typeof e)return Rd(t.serializer,e);if("boolean"==typeof e)return{booleanValue:e};if("string"==typeof e)return{stringValue:e};if(e instanceof Date){const n=Na.fromDate(e);return{timestampValue:Ph(t.serializer,n)}}if(e instanceof Na){const n=new Na(e.seconds,1e3*Math.floor(e.nanoseconds/1e3));return{timestampValue:Ph(t.serializer,n)}}if(e instanceof Kv)return{geoPointValue:{latitude:e.latitude,longitude:e.longitude}};if(e instanceof qv)return{bytesValue:Lh(t.serializer,e._byteString)};if(e instanceof Nv){const n=t.databaseId,r=e.firestore._databaseId;if(!r.isEqual(n))throw t.wc(`Document reference is for database ${r.projectId}/${r.database} but should be for database ${n.projectId}/${n.database}`);return{referenceValue:Uh(e.firestore._databaseId||t.databaseId,e._key.path)}}if(e instanceof Wv)return function(e,t){return{mapValue:{fields:{[Kc]:{stringValue:Qc},[Jc]:{arrayValue:{values:e.toArray().map(e=>{if("number"!=typeof e)throw t.wc("VectorValues must only contain numeric values.");return Dd(t.serializer,e)})}}}}}}(e,t);throw t.wc(`Unsupported field value: ${Ia(e)}`)}(e,t)}function oy(e,t){const n={};return Ec(e)?t.path&&t.path.length>0&&t.fieldMask.push(t.path):xc(e,(e,r)=>{const i=sy(r,t.Vc(e));null!=i&&(n[e]=i)}),{mapValue:{fields:n}}}function ay(e){return!("object"!=typeof e||null===e||e instanceof Array||e instanceof Date||e instanceof Na||e instanceof Kv||e instanceof qv||e instanceof Nv||e instanceof Gv||e instanceof Wv)}function ly(e,t,n){if(!ay(n)||!Ta(n)){const r=Ia(n);throw"an object"===r?t.wc(e+" a custom object"):t.wc(e+" "+r)}}function cy(e,t,n){if((t=Mt(t))instanceof Hv)return t._internalPath;if("string"==typeof t)return dy(e,t);throw hy("Field path arguments must be of type string or ",e,!1,void 0,n)}const uy=new RegExp("[~\\*/\\[\\]]");function dy(e,t,n){if(t.search(uy)>=0)throw hy(`Invalid field path (${t}). Paths must not contain '~', '*', '/', '[', or ']'`,e,!1,void 0,n);try{return new Hv(...t.split("."))._internalPath}catch(r){throw hy(`Invalid field path (${t}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,e,!1,void 0,n)}}function hy(e,t,n,r,i){const s=r&&!r.isEmpty(),o=void 0!==i;let a=`Function ${t}() called with invalid data`;n&&(a+=" (via `toFirestore()`)"),a+=". ";let l="";return(s||o)&&(l+=" (found",s&&(l+=` in field ${r}`),o&&(l+=` in document ${i}`),l+=")"),new Qo(Xo.INVALID_ARGUMENT,a+e+l)}function py(e,t){return e.some(e=>e.isEqual(t))}
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
 */class fy{constructor(e,t,n,r,i){this._firestore=e,this._userDataWriter=t,this._key=n,this._document=r,this._converter=i}get id(){return this._key.path.lastSegment()}get ref(){return new Nv(this._firestore,this._converter,this._key)}exists(){return null!==this._document}data(){if(this._document){if(this._converter){const e=new my(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const t=this._document.data.field(gy("DocumentSnapshot.get",e));if(null!==t)return this._userDataWriter.convertValue(t)}}}class my extends fy{data(){return super.data()}}function gy(e,t){return"string"==typeof t?dy(e,t):t instanceof Hv?t._internalPath:t._delegate._internalPath}
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
 */function vy(e){if("L"===e.limitType&&0===e.explicitOrderBy.length)throw new Qo(Xo.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class yy{}class by extends yy{}class wy extends by{constructor(e,t,n){super(),this._field=e,this._op=t,this._value=n,this.type="where"}static _create(e,t,n){return new wy(e,t,n)}_apply(e){const t=this._parse(e);return Dy(e._query,t),new Dv(e.firestore,e.converter,cd(e._query,t))}_parse(e){const t=ty(e.firestore),n=function(e,t,n,r,i,s,o){let a;if(i.isKeyField()){if("array-contains"===s||"array-contains-any"===s)throw new Qo(Xo.INVALID_ARGUMENT,`Invalid Query. You can't perform '${s}' queries on documentId().`);if("in"===s||"not-in"===s){Ay(o,s);const t=[];for(const n of o)t.push(ky(r,e,n));a={arrayValue:{values:t}}}else a=ky(r,e,o)}else"in"!==s&&"not-in"!==s&&"array-contains-any"!==s||Ay(o,s),a=iy(n,t,o,"in"===s||"not-in"===s);return Nu.create(i,s,a)}(e._query,"where",t,e.firestore._databaseId,this._field,this._op,this._value);return n}}function _y(e,t,n){const r=t,i=gy("where",e);return wy._create(i,r,n)}class xy extends yy{constructor(e,t){super(),this.type=e,this._queryConstraints=t}static _create(e,t){return new xy(e,t)}_parse(e){const t=this._queryConstraints.map(t=>t._parse(e)).filter(e=>e.getFilters().length>0);return 1===t.length?t[0]:Ru.create(t,this._getOperator())}_apply(e){const t=this._parse(e);return 0===t.getFilters().length?e:(function(e,t){let n=e;const r=t.getFlattenedFilters();for(const e of r)Dy(n,e),n=cd(n,e)}(e._query,t),new Dv(e.firestore,e.converter,cd(e._query,t)))}_getQueryConstraints(){return this._queryConstraints}_getOperator(){return"and"===this.type?"and":"or"}}class Ey extends by{constructor(e,t){super(),this._field=e,this._direction=t,this.type="orderBy"}static _create(e,t){return new Ey(e,t)}_apply(e){const t=function(e,t,n){if(null!==e.startAt)throw new Qo(Xo.INVALID_ARGUMENT,"Invalid query. You must not call startAt() or startAfter() before calling orderBy().");if(null!==e.endAt)throw new Qo(Xo.INVALID_ARGUMENT,"Invalid query. You must not call endAt() or endBefore() before calling orderBy().");return new ku(t,n)}(e._query,this._field,this._direction);return new Dv(e.firestore,e.converter,function(e,t){const n=e.explicitOrderBy.concat([t]);return new rd(e.path,e.collectionGroup,n,e.filters.slice(),e.limit,e.limitType,e.startAt,e.endAt)}(e._query,t))}}function Ty(e,t="asc"){const n=t,r=gy("orderBy",e);return Ey._create(r,n)}class Iy extends by{constructor(e,t,n){super(),this.type=e,this._limit=t,this._limitType=n}static _create(e,t,n){return new Iy(e,t,n)}_apply(e){return new Dv(e.firestore,e.converter,ud(e._query,this._limit,this._limitType))}}function Sy(e){return function(e,t){if(t<=0)throw new Qo(Xo.INVALID_ARGUMENT,`Function ${e}() requires a positive number, but it was: ${t}.`)}("limit",e),Iy._create("limit",e,"F")}class Cy extends by{constructor(e,t,n){super(),this.type=e,this._docOrFields=t,this._inclusive=n}static _create(e,t,n){return new Cy(e,t,n)}_apply(e){const t=function(e,t,n,r){if(n[0]=Mt(n[0]),n[0]instanceof fy)return function(e,t,n,r,i){if(!r)throw new Qo(Xo.NOT_FOUND,`Can't use a DocumentSnapshot that doesn't exist for ${n}().`);const s=[];for(const n of ad(e))if(n.field.isKeyField())s.push(lu(t,r.key));else{const e=r.data.field(n.field);if(zc(e))throw new Qo(Xo.INVALID_ARGUMENT,'Invalid query. You are trying to start or end a query using a document for which the field "'+n.field+'" is an uncommitted server timestamp. (Since the value of this field is unknown, you cannot start/end a query with it.)');if(null===e){const e=n.field.canonicalString();throw new Qo(Xo.INVALID_ARGUMENT,`Invalid query. You are trying to start or end a query using a document for which the field '${e}' (used as the orderBy) does not exist.`)}s.push(e)}return new Iu(s,i)}(e._query,e.firestore._databaseId,t,n[0]._document,r);{const i=ty(e.firestore);return function(e,t,n,r,i,s){const o=e.explicitOrderBy;if(i.length>o.length)throw new Qo(Xo.INVALID_ARGUMENT,`Too many arguments provided to ${r}(). The number of arguments must be less than or equal to the number of orderBy() clauses`);const a=[];for(let s=0;s<i.length;s++){const l=i[s];if(o[s].field.isKeyField()){if("string"!=typeof l)throw new Qo(Xo.INVALID_ARGUMENT,`Invalid query. Expected a string for document ID in ${r}(), but got a ${typeof l}`);if(!od(e)&&-1!==l.indexOf("/"))throw new Qo(Xo.INVALID_ARGUMENT,`Invalid query. When querying a collection and ordering by documentId(), the value passed to ${r}() must be a plain document ID, but '${l}' contains a slash.`);const n=e.path.child(va.fromString(l));if(!wa.isDocumentKey(n))throw new Qo(Xo.INVALID_ARGUMENT,`Invalid query. When querying a collection group and ordering by documentId(), the value passed to ${r}() must result in a valid document path, but '${n}' is not because it contains an odd number of segments.`);const i=new wa(n);a.push(lu(t,i))}else{const e=iy(n,r,l);a.push(e)}}return new Iu(a,s)}(e._query,e.firestore._databaseId,i,t,n,r)}}(e,this.type,this._docOrFields,this._inclusive);return new Dv(e.firestore,e.converter,function(e,t){return new rd(e.path,e.collectionGroup,e.explicitOrderBy.slice(),e.filters.slice(),e.limit,e.limitType,t,e.endAt)}(e._query,t))}}function ky(e,t,n){if("string"==typeof(n=Mt(n))){if(""===n)throw new Qo(Xo.INVALID_ARGUMENT,"Invalid query. When querying with documentId(), you must provide a valid document ID, but it was an empty string.");if(!od(t)&&-1!==n.indexOf("/"))throw new Qo(Xo.INVALID_ARGUMENT,`Invalid query. When querying a collection by documentId(), you must provide a plain document ID, but '${n}' contains a '/' character.`);const r=t.path.child(va.fromString(n));if(!wa.isDocumentKey(r))throw new Qo(Xo.INVALID_ARGUMENT,`Invalid query. When querying a collection group by documentId(), the value provided must result in a valid document path, but '${r}' is not because it has an odd number of segments (${r.length}).`);return lu(e,new wa(r))}if(n instanceof Nv)return lu(e,n._key);throw new Qo(Xo.INVALID_ARGUMENT,`Invalid query. When querying with documentId(), you must provide a valid string or a DocumentReference, but it was: ${Ia(n)}.`)}function Ay(e,t){if(!Array.isArray(e)||0===e.length)throw new Qo(Xo.INVALID_ARGUMENT,`Invalid Query. A non-empty array is required for '${t.toString()}' filters.`)}function Dy(e,t){const n=function(e,t){for(const n of e)for(const e of n.getFlattenedFilters())if(t.indexOf(e.op)>=0)return e.op;return null}(e.filters,function(e){switch(e){case"!=":return["!=","not-in"];case"array-contains-any":case"in":return["not-in"];case"not-in":return["array-contains-any","in","not-in","!="];default:return[]}}(t.op));if(null!==n)throw n===t.op?new Qo(Xo.INVALID_ARGUMENT,`Invalid query. You cannot use more than one '${t.op.toString()}' filter.`):new Qo(Xo.INVALID_ARGUMENT,`Invalid query. You cannot use '${t.op.toString()}' filters with '${n.toString()}' filters.`)}class Ny{convertValue(e,t="none"){switch(Zc(e)){case 0:return null;case 1:return e.booleanValue;case 2:return Lc(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,t);case 5:return e.stringValue;case 6:return this.convertBytes($c(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,t);case 11:return this.convertObject(e.mapValue,t);case 10:return this.convertVectorValue(e.mapValue);default:throw Ho(62114,{value:e})}}convertObject(e,t){return this.convertObjectMap(e.fields,t)}convertObjectMap(e,t="none"){const n={};return xc(e,(e,r)=>{n[e]=this.convertValue(r,t)}),n}convertVectorValue(e){var t,n,r;const i=null===(r=null===(n=null===(t=e.fields)||void 0===t?void 0:t[Jc].arrayValue)||void 0===n?void 0:n.values)||void 0===r?void 0:r.map(e=>Lc(e.doubleValue));return new Wv(i)}convertGeoPoint(e){return new Kv(Lc(e.latitude),Lc(e.longitude))}convertArray(e,t){return(e.values||[]).map(e=>this.convertValue(e,t))}convertServerTimestamp(e,t){switch(t){case"previous":const n=jc(e);return null==n?null:this.convertValue(n,t);case"estimate":return this.convertTimestamp(Bc(e));default:return null}}convertTimestamp(e){const t=Pc(e);return new Na(t.seconds,t.nanos)}convertDocumentKey(e,t){const n=va.fromString(e);Ko(ap(n),9688,{name:e});const r=new Gc(n.get(1),n.get(3)),i=new wa(n.popFirst(5));return r.isEqual(t)||jo(`Document ${i} contains a document reference within a different database (${r.projectId}/${r.database}) which is not supported. It will be treated as a reference in the current database (${t.projectId}/${t.database}) instead.`),i}}
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
 */function Ry(e,t,n){let r;return r=e?n&&(n.merge||n.mergeFields)?e.toFirestore(t,n):e.toFirestore(t):t,r}class Oy{constructor(e,t){this.hasPendingWrites=e,this.fromCache=t}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class Py extends fy{constructor(e,t,n,r,i,s){super(e,t,n,r,s),this._firestore=e,this._firestoreImpl=e,this.metadata=i}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const t=new Ly(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(t,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,t={}){if(this._document){const n=this._document.data.field(gy("DocumentSnapshot.get",e));if(null!==n)return this._userDataWriter.convertValue(n,t.serverTimestamps)}}toJSON(){if(this.metadata.hasPendingWrites)throw new Qo(Xo.FAILED_PRECONDITION,"DocumentSnapshot.toJSON() attempted to serialize a document with pending writes. Await waitForPendingWrites() before invoking toJSON().");const e=this._document,t={};return t.type=Py._jsonSchemaVersion,t.bundle="",t.bundleSource="DocumentSnapshot",t.bundleName=this._key.toString(),e&&e.isValidDocument()&&e.isFoundDocument()?(this._userDataWriter.convertObjectMap(e.data.value.mapValue.fields,"previous"),t.bundle=(this._firestore,this.ref.path,"NOT SUPPORTED"),t):t}}Py._jsonSchemaVersion="firestore/documentSnapshot/1.0",Py._jsonSchema={type:Ca("string",Py._jsonSchemaVersion),bundleSource:Ca("string","DocumentSnapshot"),bundleName:Ca("string"),bundle:Ca("string")};class Ly extends Py{data(e={}){return super.data(e)}}class $y{constructor(e,t,n,r){this._firestore=e,this._userDataWriter=t,this._snapshot=r,this.metadata=new Oy(r.hasPendingWrites,r.fromCache),this.query=n}get docs(){const e=[];return this.forEach(t=>e.push(t)),e}get size(){return this._snapshot.docs.size}get empty(){return 0===this.size}forEach(e,t){this._snapshot.docs.forEach(n=>{e.call(t,new Ly(this._firestore,this._userDataWriter,n.key,n,new Oy(this._snapshot.mutatedKeys.has(n.key),this._snapshot.fromCache),this.query.converter))})}docChanges(e={}){const t=!!e.includeMetadataChanges;if(t&&this._snapshot.excludesMetadataChanges)throw new Qo(Xo.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===t||(this._cachedChanges=function(e,t){if(e._snapshot.oldDocs.isEmpty()){let t=0;return e._snapshot.docChanges.map(n=>{const r=new Ly(e._firestore,e._userDataWriter,n.doc.key,n.doc,new Oy(e._snapshot.mutatedKeys.has(n.doc.key),e._snapshot.fromCache),e.query.converter);return n.doc,{type:"added",doc:r,oldIndex:-1,newIndex:t++}})}{let n=e._snapshot.oldDocs;return e._snapshot.docChanges.filter(e=>t||3!==e.type).map(t=>{const r=new Ly(e._firestore,e._userDataWriter,t.doc.key,t.doc,new Oy(e._snapshot.mutatedKeys.has(t.doc.key),e._snapshot.fromCache),e.query.converter);let i=-1,s=-1;return 0!==t.type&&(i=n.indexOf(t.doc.key),n=n.delete(t.doc.key)),1!==t.type&&(n=n.add(t.doc),s=n.indexOf(t.doc.key)),{type:My(t.type),doc:r,oldIndex:i,newIndex:s}})}}(this,t),this._cachedChangesIncludeMetadataChanges=t),this._cachedChanges}toJSON(){if(this.metadata.hasPendingWrites)throw new Qo(Xo.FAILED_PRECONDITION,"QuerySnapshot.toJSON() attempted to serialize a document with pending writes. Await waitForPendingWrites() before invoking toJSON().");const e={};e.type=$y._jsonSchemaVersion,e.bundleSource="QuerySnapshot",e.bundleName=la.newId(),this._firestore._databaseId.database,this._firestore._databaseId.projectId;const t=[],n=[],r=[];return this.docs.forEach(e=>{null!==e._document&&(t.push(e._document),n.push(this._userDataWriter.convertObjectMap(e._document.data.value.mapValue.fields,"previous")),r.push(e.ref.path))}),e.bundle=(this._firestore,this.query._query,e.bundleName,"NOT SUPPORTED"),e}}function My(e){switch(e){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return Ho(61501,{type:e})}}$y._jsonSchemaVersion="firestore/querySnapshot/1.0",$y._jsonSchema={type:Ca("string",$y._jsonSchemaVersion),bundleSource:Ca("string","QuerySnapshot"),bundleName:Ca("string"),bundle:Ca("string")};class Uy extends Ny{constructor(e){super(),this.firestore=e}convertBytes(e){return new qv(e)}convertReference(e){const t=this.convertDocumentKey(e,this.firestore._databaseId);return new Nv(this.firestore,null,t)}}function Fy(e){e=Sa(e,Dv);const t=Sa(e.firestore,Fv),n=zv(t),r=new Uy(t);return vy(e._query),function(e,t,n={}){const r=new Jo;return e.asyncQueue.enqueueAndForget(async()=>function(e,t,n,r,i){const s=new gv({next:n=>{s.Ou(),t.enqueueAndForget(()=>Dg(e,o)),n.fromCache&&"server"===r.source?i.reject(new Qo(Xo.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):i.resolve(n)},error:e=>i.reject(e)}),o=new $g(n,s,{includeMetadataChanges:!0,ka:!0});return Ag(e,o)}(await xv(e),e.asyncQueue,t,n,r)),r.promise}(n,e._query).then(n=>new $y(t,r,e,n))}function Vy(e,t,n){e=Sa(e,Nv);const r=Sa(e.firestore,Fv),i=Ry(e.converter,t,n);return By(r,[ny(ty(r),"setDoc",e._key,i,null!==e.converter,n).toMutation(e._key,Kd.none())])}function zy(e,t,n,...r){e=Sa(e,Nv);const i=Sa(e.firestore,Fv),s=ty(i);let o;return o="string"==typeof(t=Mt(t))||t instanceof Hv?function(e,t,n,r,i,s){const o=e.Dc(1,t,n),a=[cy(t,r,n)],l=[i];if(s.length%2!=0)throw new Qo(Xo.INVALID_ARGUMENT,`Function ${t}() needs to be called with an even number of arguments that alternate between field names and values.`);for(let e=0;e<s.length;e+=2)a.push(cy(t,s[e])),l.push(s[e+1]);const c=[],u=xu.empty();for(let e=a.length-1;e>=0;--e)if(!py(c,a[e])){const t=a[e];let n=l[e];n=Mt(n);const r=o.gc(t);if(n instanceof ry)c.push(t);else{const e=sy(n,r);null!=e&&(c.push(t),u.set(t,e))}}const d=new Dc(c);return new Jv(u,d,o.fieldTransforms)}(s,"updateDoc",e._key,t,n,r):function(e,t,n,r){const i=e.Dc(1,t,n);ly("Data must be an object, but it was:",i,r);const s=[],o=xu.empty();xc(r,(e,r)=>{const a=dy(t,e,n);r=Mt(r);const l=i.gc(a);if(r instanceof ry)s.push(a);else{const e=sy(r,l);null!=e&&(s.push(a),o.set(a,e))}});const a=new Dc(s);return new Jv(o,a,i.fieldTransforms)}(s,"updateDoc",e._key,t),By(i,[o.toMutation(e._key,Kd.exists(!0))])}function jy(e,...t){var n,r,i;e=Mt(e);let s={includeMetadataChanges:!1,source:"default"},o=0;"object"!=typeof t[o]||Uv(t[o])||(s=t[o++]);const a={includeMetadataChanges:s.includeMetadataChanges,source:s.source};if(Uv(t[o])){const e=t[o];t[o]=null===(n=e.next)||void 0===n?void 0:n.bind(e),t[o+1]=null===(r=e.error)||void 0===r?void 0:r.bind(e),t[o+2]=null===(i=e.complete)||void 0===i?void 0:i.bind(e)}let l,c,u;if(e instanceof Nv)c=Sa(e.firestore,Fv),u=id(e._key.path),l={next:n=>{t[o]&&t[o](function(e,t,n){const r=n.docs.get(t._key),i=new Uy(e);return new Py(e,i,t._key,r,new Oy(n.hasPendingWrites,n.fromCache),t.converter)}(c,e,n))},error:t[o+1],complete:t[o+2]};else{const n=Sa(e,Dv);c=Sa(n.firestore,Fv),u=n._query;const r=new Uy(c);l={next:e=>{t[o]&&t[o](new $y(c,r,n,e))},error:t[o+1],complete:t[o+2]},vy(e._query)}return function(e,t,n,r){const i=new gv(r),s=new $g(t,i,n);return e.asyncQueue.enqueueAndForget(async()=>Ag(await xv(e),s)),()=>{i.Ou(),e.asyncQueue.enqueueAndForget(async()=>Dg(await xv(e),s))}}(zv(c),u,a,l)}function By(e,t){return function(e,t){const n=new Jo;return e.asyncQueue.enqueueAndForget(async()=>async function(e,t,n){const r=dv(e);try{const e=await function(e,t){const n=Wo(e),r=Na.now(),i=t.reduce((e,t)=>e.add(t.key),kd());let s,o;return n.persistence.runTransaction("Locally write mutations","readwrite",e=>{let a=bd(),l=kd();return n.Os.getEntries(e,i).next(e=>{a=e,a.forEach((e,t)=>{t.isValidDocument()||(l=l.add(e))})}).next(()=>n.localDocuments.getOverlayedDocuments(e,a)).next(i=>{s=i;const o=[];for(const e of t){const t=Zd(e,s.get(e.key).overlayedDocument);null!=t&&o.push(new nh(e.key,t,Eu(t.value.mapValue),Kd.exists(!0)))}return n.mutationQueue.addMutationBatch(e,r,o,t)}).next(t=>{o=t;const r=t.applyToLocalDocumentSet(s,l);return n.documentOverlayCache.saveOverlays(e,t.batchId,r)})}).then(()=>({batchId:o.batchId,changes:xd(s)}))}(r.localStore,t);r.sharedClientState.addPendingMutation(e.batchId),function(e,t,n){let r=e.Ru[e.currentUser.toKey()];r||(r=new Tc(ca)),r=r.insert(t,n),e.Ru[e.currentUser.toKey()]=r}(r,e.batchId,n),await av(r,e.changes),await cg(r.remoteStore)}catch(e){const t=xg(e,"Failed to persist write");n.reject(t)}}(await function(e){return _v(e).then(e=>e.syncEngine)}(e),t,n)),n.promise}(zv(e),t)}!function(e,t=!0){!function(e){Uo=e}(Yn),Kn(new Ut("firestore",(e,{instanceIdentifier:n,options:r})=>{const i=e.getProvider("app").getImmediate(),s=new Fv(new ta(e.getProvider("auth-internal")),new sa(i,e.getProvider("app-check-internal")),function(e,t){if(!Object.prototype.hasOwnProperty.apply(e.options,["projectId"]))throw new Qo(Xo.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new Gc(e.options.projectId,t)}(i,n),i);return r=Object.assign({useFetchStreams:t},r),s._setSettings(r),s},"PUBLIC").setMultipleInstances(!0)),tr(Lo,$o,e),tr(Lo,$o,"esm2017")}();
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
const qy="firebasestorage.googleapis.com",Hy="storageBucket";
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
class Gy extends Ct{constructor(e,t,n=0){super(Xy(e),`Firebase Storage: ${t} (${Xy(e)})`),this.status_=n,this.customData={serverResponse:null},this._baseMessage=this.message,Object.setPrototypeOf(this,Gy.prototype)}get status(){return this.status_}set status(e){this.status_=e}_codeEquals(e){return Xy(e)===this.code}get serverResponse(){return this.customData.serverResponse}set serverResponse(e){this.customData.serverResponse=e,this.customData.serverResponse?this.message=`${this._baseMessage}\n${this.customData.serverResponse}`:this.message=this._baseMessage}}var Ky,Wy;function Xy(e){return"storage/"+e}function Qy(){return new Gy(Ky.UNKNOWN,"An unknown error occurred, please check the error payload for server response.")}function Jy(){return new Gy(Ky.RETRY_LIMIT_EXCEEDED,"Max retry time for operation exceeded, please try again.")}function Yy(){return new Gy(Ky.CANCELED,"User canceled the upload/download.")}function Zy(){return new Gy(Ky.CANNOT_SLICE_BLOB,"Cannot slice blob for upload. Please retry the upload.")}function eb(e){return new Gy(Ky.INVALID_ARGUMENT,e)}function tb(){return new Gy(Ky.APP_DELETED,"The Firebase app was deleted.")}function nb(e,t){return new Gy(Ky.INVALID_FORMAT,"String does not match format '"+e+"': "+t)}function rb(e){throw new Gy(Ky.INTERNAL_ERROR,"Internal error: "+e)}
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
 */!function(e){e.UNKNOWN="unknown",e.OBJECT_NOT_FOUND="object-not-found",e.BUCKET_NOT_FOUND="bucket-not-found",e.PROJECT_NOT_FOUND="project-not-found",e.QUOTA_EXCEEDED="quota-exceeded",e.UNAUTHENTICATED="unauthenticated",e.UNAUTHORIZED="unauthorized",e.UNAUTHORIZED_APP="unauthorized-app",e.RETRY_LIMIT_EXCEEDED="retry-limit-exceeded",e.INVALID_CHECKSUM="invalid-checksum",e.CANCELED="canceled",e.INVALID_EVENT_NAME="invalid-event-name",e.INVALID_URL="invalid-url",e.INVALID_DEFAULT_BUCKET="invalid-default-bucket",e.NO_DEFAULT_BUCKET="no-default-bucket",e.CANNOT_SLICE_BLOB="cannot-slice-blob",e.SERVER_FILE_WRONG_SIZE="server-file-wrong-size",e.NO_DOWNLOAD_URL="no-download-url",e.INVALID_ARGUMENT="invalid-argument",e.INVALID_ARGUMENT_COUNT="invalid-argument-count",e.APP_DELETED="app-deleted",e.INVALID_ROOT_OPERATION="invalid-root-operation",e.INVALID_FORMAT="invalid-format",e.INTERNAL_ERROR="internal-error",e.UNSUPPORTED_ENVIRONMENT="unsupported-environment"}(Ky||(Ky={}));class ib{constructor(e,t){this.bucket=e,this.path_=t}get path(){return this.path_}get isRoot(){return 0===this.path.length}fullServerUrl(){const e=encodeURIComponent;return"/b/"+e(this.bucket)+"/o/"+e(this.path)}bucketOnlyServerUrl(){return"/b/"+encodeURIComponent(this.bucket)+"/o"}static makeFromBucketSpec(e,t){let n;try{n=ib.makeFromUrl(e,t)}catch(t){return new ib(e,"")}if(""===n.path)return n;throw r=e,new Gy(Ky.INVALID_DEFAULT_BUCKET,"Invalid default bucket '"+r+"'.");var r}static makeFromUrl(e,t){let n=null;const r="([A-Za-z0-9.\\-_]+)";const i=new RegExp("^gs://"+r+"(/(.*))?$","i");function s(e){e.path_=decodeURIComponent(e.path)}const o=t.replace(/[.]/g,"\\."),a=[{regex:i,indices:{bucket:1,path:3},postModify:function(e){"/"===e.path.charAt(e.path.length-1)&&(e.path_=e.path_.slice(0,-1))}},{regex:new RegExp(`^https?://${o}/v[A-Za-z0-9_]+/b/${r}/o(/([^?#]*).*)?$`,"i"),indices:{bucket:1,path:3},postModify:s},{regex:new RegExp(`^https?://${t===qy?"(?:storage.googleapis.com|storage.cloud.google.com)":t}/${r}/([^?#]*)`,"i"),indices:{bucket:1,path:2},postModify:s}];for(let t=0;t<a.length;t++){const r=a[t],i=r.regex.exec(e);if(i){const e=i[r.indices.bucket];let t=i[r.indices.path];t||(t=""),n=new ib(e,t),r.postModify(n);break}}if(null==n)throw function(e){return new Gy(Ky.INVALID_URL,"Invalid URL '"+e+"'.")}(e);return n}}class sb{constructor(e){this.promise_=Promise.reject(e)}getPromise(){return this.promise_}cancel(e=!1){}}
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
 */function ob(e){return"string"==typeof e||e instanceof String}function ab(e){return lb()&&e instanceof Blob}function lb(){return"undefined"!=typeof Blob}function cb(e,t,n,r){if(r<t)throw eb(`Invalid value for '${e}'. Expected ${t} or greater.`);if(r>n)throw eb(`Invalid value for '${e}'. Expected ${n} or less.`)}
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
 */function ub(e,t,n){let r=t;return null==n&&(r=`https://${t}`),`${n}://${r}/v0${e}`}function db(e){const t=encodeURIComponent;let n="?";for(const r in e)if(e.hasOwnProperty(r)){n=n+(t(r)+"="+t(e[r]))+"&"}return n=n.slice(0,-1),n}
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
function hb(e,t){const n=e>=500&&e<600,r=-1!==[408,429].indexOf(e),i=-1!==t.indexOf(e);return n||r||i}
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
 */!function(e){e[e.NO_ERROR=0]="NO_ERROR",e[e.NETWORK_ERROR=1]="NETWORK_ERROR",e[e.ABORT=2]="ABORT"}(Wy||(Wy={}));class pb{constructor(e,t,n,r,i,s,o,a,l,c,u,d=!0,h=!1){this.url_=e,this.method_=t,this.headers_=n,this.body_=r,this.successCodes_=i,this.additionalRetryCodes_=s,this.callback_=o,this.errorCallback_=a,this.timeout_=l,this.progressCallback_=c,this.connectionFactory_=u,this.retry=d,this.isUsingEmulator=h,this.pendingConnection_=null,this.backoffId_=null,this.canceled_=!1,this.appDelete_=!1,this.promise_=new Promise((e,t)=>{this.resolve_=e,this.reject_=t,this.start_()})}start_(){const e=(e,t)=>{if(t)return void e(!1,new fb(!1,null,!0));const n=this.connectionFactory_();this.pendingConnection_=n;const r=e=>{const t=e.loaded,n=e.lengthComputable?e.total:-1;null!==this.progressCallback_&&this.progressCallback_(t,n)};null!==this.progressCallback_&&n.addUploadProgressListener(r),n.send(this.url_,this.method_,this.isUsingEmulator,this.body_,this.headers_).then(()=>{null!==this.progressCallback_&&n.removeUploadProgressListener(r),this.pendingConnection_=null;const t=n.getErrorCode()===Wy.NO_ERROR,i=n.getStatus();if(!t||hb(i,this.additionalRetryCodes_)&&this.retry){const t=n.getErrorCode()===Wy.ABORT;return void e(!1,new fb(!1,null,t))}const s=-1!==this.successCodes_.indexOf(i);e(!0,new fb(s,n))})},t=(e,t)=>{const n=this.resolve_,r=this.reject_,i=t.connection;if(t.wasSuccessCode)try{const e=this.callback_(i,i.getResponse());!
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
function(e){return void 0!==e}(e)?n():n(e)}catch(e){r(e)}else if(null!==i){const e=Qy();e.serverResponse=i.getErrorText(),this.errorCallback_?r(this.errorCallback_(i,e)):r(e)}else if(t.canceled){r(this.appDelete_?tb():Yy())}else{r(Jy())}};this.canceled_?t(0,new fb(!1,null,!0)):this.backoffId_=function(e,t,n){let r=1,i=null,s=null,o=!1,a=0;function l(){return 2===a}let c=!1;function u(...e){c||(c=!0,t.apply(null,e))}function d(t){i=setTimeout(()=>{i=null,e(p,l())},t)}function h(){s&&clearTimeout(s)}function p(e,...t){if(c)return void h();if(e)return h(),void u.call(null,e,...t);if(l()||o)return h(),void u.call(null,e,...t);let n;r<64&&(r*=2),1===a?(a=2,n=0):n=1e3*(r+Math.random()),d(n)}let f=!1;function m(e){f||(f=!0,h(),c||(null!==i?(e||(a=2),clearTimeout(i),d(0)):e||(a=1)))}return d(0),s=setTimeout(()=>{o=!0,m(!0)},n),m}(e,t,this.timeout_)}getPromise(){return this.promise_}cancel(e){this.canceled_=!0,this.appDelete_=e||!1,null!==this.backoffId_&&(0,this.backoffId_)(!1),null!==this.pendingConnection_&&this.pendingConnection_.abort()}}class fb{constructor(e,t,n){this.wasSuccessCode=e,this.connection=t,this.canceled=!!n}}
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
function mb(){return"undefined"!=typeof BlobBuilder?BlobBuilder:"undefined"!=typeof WebKitBlobBuilder?WebKitBlobBuilder:void 0}function gb(...e){const t=mb();if(void 0!==t){const n=new t;for(let t=0;t<e.length;t++)n.append(e[t]);return n.getBlob()}if(lb())return new Blob(e);throw new Gy(Ky.UNSUPPORTED_ENVIRONMENT,"This browser doesn't seem to support creating Blobs")}
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
function vb(e){if("undefined"==typeof atob)throw t="base-64",new Gy(Ky.UNSUPPORTED_ENVIRONMENT,`${t} is missing. Make sure to install the required polyfills. See https://firebase.google.com/docs/web/environments-js-sdk#polyfills for more information.`);var t;return atob(e)}
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
 */const yb="raw",bb="base64",wb="base64url",_b="data_url";class xb{constructor(e,t){this.data=e,this.contentType=t||null}}function Eb(e,t){switch(e){case yb:return new xb(Tb(t));case bb:case wb:return new xb(Ib(e,t));case _b:return new xb(function(e){const t=new Sb(e);return t.base64?Ib(bb,t.rest):function(e){let t;try{t=decodeURIComponent(e)}catch(e){throw nb(_b,"Malformed data URL.")}return Tb(t)}(t.rest)}(t),new Sb(t).contentType)}throw Qy()}function Tb(e){const t=[];for(let n=0;n<e.length;n++){let r=e.charCodeAt(n);if(r<=127)t.push(r);else if(r<=2047)t.push(192|r>>6,128|63&r);else if(55296==(64512&r)){if(n<e.length-1&&56320==(64512&e.charCodeAt(n+1))){r=65536|(1023&r)<<10|1023&e.charCodeAt(++n),t.push(240|r>>18,128|r>>12&63,128|r>>6&63,128|63&r)}else t.push(239,191,189)}else 56320==(64512&r)?t.push(239,191,189):t.push(224|r>>12,128|r>>6&63,128|63&r)}return new Uint8Array(t)}function Ib(e,t){switch(e){case bb:{const n=-1!==t.indexOf("-"),r=-1!==t.indexOf("_");if(n||r){throw nb(e,"Invalid character '"+(n?"-":"_")+"' found: is it base64url encoded?")}break}case wb:{const n=-1!==t.indexOf("+"),r=-1!==t.indexOf("/");if(n||r){throw nb(e,"Invalid character '"+(n?"+":"/")+"' found: is it base64 encoded?")}t=t.replace(/-/g,"+").replace(/_/g,"/");break}}let n;try{n=vb(t)}catch(t){if(t.message.includes("polyfill"))throw t;throw nb(e,"Invalid character found")}const r=new Uint8Array(n.length);for(let e=0;e<n.length;e++)r[e]=n.charCodeAt(e);return r}class Sb{constructor(e){this.base64=!1,this.contentType=null;const t=e.match(/^data:([^,]+)?,/);if(null===t)throw nb(_b,"Must be formatted 'data:[<mediatype>][;base64],<data>");const n=t[1]||null;null!=n&&(this.base64=function(e,t){const n=e.length>=t.length;if(!n)return!1;return e.substring(e.length-t.length)===t}
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
 */(n,";base64"),this.contentType=this.base64?n.substring(0,n.length-7):n),this.rest=e.substring(e.indexOf(",")+1)}}class Cb{constructor(e,t){let n=0,r="";ab(e)?(this.data_=e,n=e.size,r=e.type):e instanceof ArrayBuffer?(t?this.data_=new Uint8Array(e):(this.data_=new Uint8Array(e.byteLength),this.data_.set(new Uint8Array(e))),n=this.data_.length):e instanceof Uint8Array&&(t?this.data_=e:(this.data_=new Uint8Array(e.length),this.data_.set(e)),n=e.length),this.size_=n,this.type_=r}size(){return this.size_}type(){return this.type_}slice(e,t){if(ab(this.data_)){const n=function(e,t,n){return e.webkitSlice?e.webkitSlice(t,n):e.mozSlice?e.mozSlice(t,n):e.slice?e.slice(t,n):null}(this.data_,e,t);return null===n?null:new Cb(n)}{const n=new Uint8Array(this.data_.buffer,e,t-e);return new Cb(n,!0)}}static getBlob(...e){if(lb()){const t=e.map(e=>e instanceof Cb?e.data_:e);return new Cb(gb.apply(null,t))}{const t=e.map(e=>ob(e)?Eb(yb,e).data:e.data_);let n=0;t.forEach(e=>{n+=e.byteLength});const r=new Uint8Array(n);let i=0;return t.forEach(e=>{for(let t=0;t<e.length;t++)r[i++]=e[t]}),new Cb(r,!0)}}uploadData(){return this.data_}}
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
 */function kb(e){let t;try{t=JSON.parse(e)}catch(e){return null}return function(e){return"object"==typeof e&&!Array.isArray(e)}(t)?t:null}
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
 */function Ab(e){const t=e.lastIndexOf("/",e.length-2);return-1===t?e:e.slice(t+1)}
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
 */function Db(e,t){return t}class Nb{constructor(e,t,n,r){this.server=e,this.local=t||e,this.writable=!!n,this.xform=r||Db}}let Rb=null;function Ob(){if(Rb)return Rb;const e=[];e.push(new Nb("bucket")),e.push(new Nb("generation")),e.push(new Nb("metageneration")),e.push(new Nb("name","fullPath",!0));const t=new Nb("name");t.xform=function(e,t){return function(e){return!ob(e)||e.length<2?e:Ab(e)}(t)},e.push(t);const n=new Nb("size");return n.xform=function(e,t){return void 0!==t?Number(t):t},e.push(n),e.push(new Nb("timeCreated")),e.push(new Nb("updated")),e.push(new Nb("md5Hash",null,!0)),e.push(new Nb("cacheControl",null,!0)),e.push(new Nb("contentDisposition",null,!0)),e.push(new Nb("contentEncoding",null,!0)),e.push(new Nb("contentLanguage",null,!0)),e.push(new Nb("contentType",null,!0)),e.push(new Nb("metadata","customMetadata",!0)),Rb=e,Rb}function Pb(e,t,n){const r={type:"file"},i=n.length;for(let e=0;e<i;e++){const i=n[e];r[i.local]=i.xform(r,t[i.server])}return function(e,t){Object.defineProperty(e,"ref",{get:function(){const n=e.bucket,r=e.fullPath,i=new ib(n,r);return t._makeStorageReference(i)}})}(r,e),r}function Lb(e,t,n){const r=kb(t);if(null===r)return null;return Pb(e,r,n)}function $b(e,t){const n={},r=t.length;for(let i=0;i<r;i++){const r=t[i];r.writable&&(n[r.server]=e[r.local])}return JSON.stringify(n)}
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
 */const Mb="prefixes",Ub="items";function Fb(e,t,n){const r=kb(n);if(null===r)return null;return function(e,t,n){const r={prefixes:[],items:[],nextPageToken:n.nextPageToken};if(n[Mb])for(const i of n[Mb]){const n=i.replace(/\/$/,""),s=e._makeStorageReference(new ib(t,n));r.prefixes.push(s)}if(n[Ub])for(const i of n[Ub]){const n=e._makeStorageReference(new ib(t,i.name));r.items.push(n)}return r}(e,t,r)}class Vb{constructor(e,t,n,r){this.url=e,this.method=t,this.handler=n,this.timeout=r,this.urlParams={},this.headers={},this.body=null,this.errorHandler=null,this.progressCallback=null,this.successCodes=[200],this.additionalRetryCodes=[]}}
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
 */function zb(e){if(!e)throw Qy()}function jb(e,t){return function(n,r){const i=Lb(e,r,t);return zb(null!==i),i}}function Bb(e,t){return function(n,r){const i=Lb(e,r,t);return zb(null!==i),function(e,t,n,r){const i=kb(t);if(null===i)return null;if(!ob(i.downloadTokens))return null;const s=i.downloadTokens;if(0===s.length)return null;const o=encodeURIComponent;return s.split(",").map(t=>{const i=e.bucket,s=e.fullPath;return ub("/b/"+o(i)+"/o/"+o(s),n,r)+db({alt:"media",token:t})})[0]}(i,r,e.host,e._protocol)}}function qb(e){return function(t,n){let r;var i,s;return 401===t.getStatus()?r=t.getErrorText().includes("Firebase App Check token is invalid")?new Gy(Ky.UNAUTHORIZED_APP,"This app does not have permission to access Firebase Storage on this project."):new Gy(Ky.UNAUTHENTICATED,"User is not authenticated, please authenticate using Firebase Authentication and try again."):402===t.getStatus()?(s=e.bucket,r=new Gy(Ky.QUOTA_EXCEEDED,"Quota for bucket '"+s+"' exceeded, please view quota on https://firebase.google.com/pricing/.")):403===t.getStatus()?(i=e.path,r=new Gy(Ky.UNAUTHORIZED,"User does not have permission to access '"+i+"'.")):r=n,r.status=t.getStatus(),r.serverResponse=n.serverResponse,r}}function Hb(e){const t=qb(e);return function(n,r){let i=t(n,r);var s;return 404===n.getStatus()&&(s=e.path,i=new Gy(Ky.OBJECT_NOT_FOUND,"Object '"+s+"' does not exist.")),i.serverResponse=r.serverResponse,i}}function Gb(e,t,n){const r=ub(t.fullServerUrl(),e.host,e._protocol),i=e.maxOperationRetryTime,s=new Vb(r,"GET",jb(e,n),i);return s.errorHandler=Hb(t),s}function Kb(e,t,n,r,i){const s={};t.isRoot?s.prefix="":s.prefix=t.path+"/",n.length>0&&(s.delimiter=n),r&&(s.pageToken=r),i&&(s.maxResults=i);const o=ub(t.bucketOnlyServerUrl(),e.host,e._protocol),a=e.maxOperationRetryTime,l=new Vb(o,"GET",function(e,t){return function(n,r){const i=Fb(e,t,r);return zb(null!==i),i}}(e,t.bucket),a);return l.urlParams=s,l.errorHandler=qb(t),l}function Wb(e,t,n){const r=Object.assign({},n);return r.fullPath=e.path,r.size=t.size(),r.contentType||(r.contentType=function(e,t){return e&&e.contentType||t&&t.type()||"application/octet-stream"}(null,t)),r}class Xb{constructor(e,t,n,r){this.current=e,this.total=t,this.finalized=!!n,this.metadata=r||null}}function Qb(e,t){let n=null;try{n=e.getResponseHeader("X-Goog-Upload-Status")}catch(e){zb(!1)}return zb(!!n&&-1!==(t||["active"]).indexOf(n)),n}const Jb=262144;function Yb(e,t,n,r,i,s,o,a){const l=new Xb(0,0);if(o?(l.current=o.current,l.total=o.total):(l.current=0,l.total=r.size()),r.size()!==l.total)throw new Gy(Ky.SERVER_FILE_WRONG_SIZE,"Server recorded incorrect upload file size, please retry the upload.");const c=l.total-l.current;let u=c;i>0&&(u=Math.min(u,i));const d=l.current,h=d+u;let p="";p=0===u?"finalize":c===u?"upload, finalize":"upload";const f={"X-Goog-Upload-Command":p,"X-Goog-Upload-Offset":`${l.current}`},m=r.slice(d,h);if(null===m)throw Zy();const g=t.maxUploadRetryTime,v=new Vb(n,"POST",function(e,n){const i=Qb(e,["active","final"]),o=l.current+u,a=r.size();let c;return c="final"===i?jb(t,s)(e,n):null,new Xb(o,a,"final"===i,c)},g);return v.headers=f,v.body=m.uploadData(),v.progressCallback=a||null,v.errorHandler=qb(e),v}const Zb="running",ew="paused",tw="success",nw="canceled",rw="error";function iw(e){switch(e){case"running":case"pausing":case"canceling":return Zb;case"paused":return ew;case"success":return tw;case"canceled":return nw;default:return rw}}
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
 */class sw{constructor(e,t,n){const r=function(e){return"function"==typeof e}(e)||null!=t||null!=n;if(r)this.next=e,this.error=null!=t?t:void 0,this.complete=null!=n?n:void 0;else{const t=e;this.next=t.next,this.error=t.error,this.complete=t.complete}}}
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
 */function ow(e){return(...t)=>{Promise.resolve().then(()=>e(...t))}}class aw{constructor(){this.sent_=!1,this.xhr_=new XMLHttpRequest,this.initXhr(),this.errorCode_=Wy.NO_ERROR,this.sendPromise_=new Promise(e=>{this.xhr_.addEventListener("abort",()=>{this.errorCode_=Wy.ABORT,e()}),this.xhr_.addEventListener("error",()=>{this.errorCode_=Wy.NETWORK_ERROR,e()}),this.xhr_.addEventListener("load",()=>{e()})})}send(e,t,n,r,i){if(this.sent_)throw rb("cannot .send() more than once");if(gt(e)&&n&&(this.xhr_.withCredentials=!0),this.sent_=!0,this.xhr_.open(t,e,!0),void 0!==i)for(const e in i)i.hasOwnProperty(e)&&this.xhr_.setRequestHeader(e,i[e].toString());return void 0!==r?this.xhr_.send(r):this.xhr_.send(),this.sendPromise_}getErrorCode(){if(!this.sent_)throw rb("cannot .getErrorCode() before sending");return this.errorCode_}getStatus(){if(!this.sent_)throw rb("cannot .getStatus() before sending");try{return this.xhr_.status}catch(e){return-1}}getResponse(){if(!this.sent_)throw rb("cannot .getResponse() before sending");return this.xhr_.response}getErrorText(){if(!this.sent_)throw rb("cannot .getErrorText() before sending");return this.xhr_.statusText}abort(){this.xhr_.abort()}getResponseHeader(e){return this.xhr_.getResponseHeader(e)}addUploadProgressListener(e){null!=this.xhr_.upload&&this.xhr_.upload.addEventListener("progress",e)}removeUploadProgressListener(e){null!=this.xhr_.upload&&this.xhr_.upload.removeEventListener("progress",e)}}class lw extends aw{initXhr(){this.xhr_.responseType="text"}}function cw(){return new lw}
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
 */class uw{isExponentialBackoffExpired(){return this.sleepTime>this.maxSleepTime}constructor(e,t,n=null){this._transferred=0,this._needToFetchStatus=!1,this._needToFetchMetadata=!1,this._observers=[],this._error=void 0,this._uploadUrl=void 0,this._request=void 0,this._chunkMultiplier=1,this._resolve=void 0,this._reject=void 0,this._ref=e,this._blob=t,this._metadata=n,this._mappings=Ob(),this._resumable=this._shouldDoResumable(this._blob),this._state="running",this._errorHandler=e=>{if(this._request=void 0,this._chunkMultiplier=1,e._codeEquals(Ky.CANCELED))this._needToFetchStatus=!0,this.completeTransitions_();else{const t=this.isExponentialBackoffExpired();if(hb(e.status,[])){if(!t)return this.sleepTime=Math.max(2*this.sleepTime,1e3),this._needToFetchStatus=!0,void this.completeTransitions_();e=Jy()}this._error=e,this._transition("error")}},this._metadataErrorHandler=e=>{this._request=void 0,e._codeEquals(Ky.CANCELED)?this.completeTransitions_():(this._error=e,this._transition("error"))},this.sleepTime=0,this.maxSleepTime=this._ref.storage.maxUploadRetryTime,this._promise=new Promise((e,t)=>{this._resolve=e,this._reject=t,this._start()}),this._promise.then(null,()=>{})}_makeProgressCallback(){const e=this._transferred;return t=>this._updateProgress(e+t)}_shouldDoResumable(e){return e.size()>262144}_start(){"running"===this._state&&void 0===this._request&&(this._resumable?void 0===this._uploadUrl?this._createResumable():this._needToFetchStatus?this._fetchStatus():this._needToFetchMetadata?this._fetchMetadata():this.pendingTimeout=setTimeout(()=>{this.pendingTimeout=void 0,this._continueUpload()},this.sleepTime):this._oneShotUpload())}_resolveToken(e){Promise.all([this._ref.storage._getAuthToken(),this._ref.storage._getAppCheckToken()]).then(([t,n])=>{switch(this._state){case"running":e(t,n);break;case"canceling":this._transition("canceled");break;case"pausing":this._transition("paused")}})}_createResumable(){this._resolveToken((e,t)=>{const n=function(e,t,n,r,i){const s=t.bucketOnlyServerUrl(),o=Wb(t,r,i),a={name:o.fullPath},l=ub(s,e.host,e._protocol),c={"X-Goog-Upload-Protocol":"resumable","X-Goog-Upload-Command":"start","X-Goog-Upload-Header-Content-Length":`${r.size()}`,"X-Goog-Upload-Header-Content-Type":o.contentType,"Content-Type":"application/json; charset=utf-8"},u=$b(o,n),d=e.maxUploadRetryTime,h=new Vb(l,"POST",function(e){let t;Qb(e);try{t=e.getResponseHeader("X-Goog-Upload-URL")}catch(e){zb(!1)}return zb(ob(t)),t},d);return h.urlParams=a,h.headers=c,h.body=u,h.errorHandler=qb(t),h}(this._ref.storage,this._ref._location,this._mappings,this._blob,this._metadata),r=this._ref.storage._makeRequest(n,cw,e,t);this._request=r,r.getPromise().then(e=>{this._request=void 0,this._uploadUrl=e,this._needToFetchStatus=!1,this.completeTransitions_()},this._errorHandler)})}_fetchStatus(){const e=this._uploadUrl;this._resolveToken((t,n)=>{const r=function(e,t,n,r){const i=e.maxUploadRetryTime,s=new Vb(n,"POST",function(e){const t=Qb(e,["active","final"]);let n=null;try{n=e.getResponseHeader("X-Goog-Upload-Size-Received")}catch(e){zb(!1)}n||zb(!1);const i=Number(n);return zb(!isNaN(i)),new Xb(i,r.size(),"final"===t)},i);return s.headers={"X-Goog-Upload-Command":"query"},s.errorHandler=qb(t),s}(this._ref.storage,this._ref._location,e,this._blob),i=this._ref.storage._makeRequest(r,cw,t,n);this._request=i,i.getPromise().then(e=>{this._request=void 0,this._updateProgress(e.current),this._needToFetchStatus=!1,e.finalized&&(this._needToFetchMetadata=!0),this.completeTransitions_()},this._errorHandler)})}_continueUpload(){const e=Jb*this._chunkMultiplier,t=new Xb(this._transferred,this._blob.size()),n=this._uploadUrl;this._resolveToken((r,i)=>{let s;try{s=Yb(this._ref._location,this._ref.storage,n,this._blob,e,this._mappings,t,this._makeProgressCallback())}catch(e){return this._error=e,void this._transition("error")}const o=this._ref.storage._makeRequest(s,cw,r,i,!1);this._request=o,o.getPromise().then(e=>{this._increaseMultiplier(),this._request=void 0,this._updateProgress(e.current),e.finalized?(this._metadata=e.metadata,this._transition("success")):this.completeTransitions_()},this._errorHandler)})}_increaseMultiplier(){2*(Jb*this._chunkMultiplier)<33554432&&(this._chunkMultiplier*=2)}_fetchMetadata(){this._resolveToken((e,t)=>{const n=Gb(this._ref.storage,this._ref._location,this._mappings),r=this._ref.storage._makeRequest(n,cw,e,t);this._request=r,r.getPromise().then(e=>{this._request=void 0,this._metadata=e,this._transition("success")},this._metadataErrorHandler)})}_oneShotUpload(){this._resolveToken((e,t)=>{const n=function(e,t,n,r,i){const s=t.bucketOnlyServerUrl(),o={"X-Goog-Upload-Protocol":"multipart"},a=function(){let e="";for(let t=0;t<2;t++)e+=Math.random().toString().slice(2);return e}();o["Content-Type"]="multipart/related; boundary="+a;const l=Wb(t,r,i),c="--"+a+"\r\nContent-Type: application/json; charset=utf-8\r\n\r\n"+$b(l,n)+"\r\n--"+a+"\r\nContent-Type: "+l.contentType+"\r\n\r\n",u="\r\n--"+a+"--",d=Cb.getBlob(c,r,u);if(null===d)throw Zy();const h={name:l.fullPath},p=ub(s,e.host,e._protocol),f=e.maxUploadRetryTime,m=new Vb(p,"POST",jb(e,n),f);return m.urlParams=h,m.headers=o,m.body=d.uploadData(),m.errorHandler=qb(t),m}(this._ref.storage,this._ref._location,this._mappings,this._blob,this._metadata),r=this._ref.storage._makeRequest(n,cw,e,t);this._request=r,r.getPromise().then(e=>{this._request=void 0,this._metadata=e,this._updateProgress(this._blob.size()),this._transition("success")},this._errorHandler)})}_updateProgress(e){const t=this._transferred;this._transferred=e,this._transferred!==t&&this._notifyObservers()}_transition(e){if(this._state!==e)switch(e){case"canceling":case"pausing":this._state=e,void 0!==this._request?this._request.cancel():this.pendingTimeout&&(clearTimeout(this.pendingTimeout),this.pendingTimeout=void 0,this.completeTransitions_());break;case"running":const t="paused"===this._state;this._state=e,t&&(this._notifyObservers(),this._start());break;case"paused":case"error":case"success":this._state=e,this._notifyObservers();break;case"canceled":this._error=Yy(),this._state=e,this._notifyObservers()}}completeTransitions_(){switch(this._state){case"pausing":this._transition("paused");break;case"canceling":this._transition("canceled");break;case"running":this._start()}}get snapshot(){const e=iw(this._state);return{bytesTransferred:this._transferred,totalBytes:this._blob.size(),state:e,metadata:this._metadata,task:this,ref:this._ref}}on(e,t,n,r){const i=new sw(t||void 0,n||void 0,r||void 0);return this._addObserver(i),()=>{this._removeObserver(i)}}then(e,t){return this._promise.then(e,t)}catch(e){return this.then(null,e)}_addObserver(e){this._observers.push(e),this._notifyObserver(e)}_removeObserver(e){const t=this._observers.indexOf(e);-1!==t&&this._observers.splice(t,1)}_notifyObservers(){this._finishPromise();this._observers.slice().forEach(e=>{this._notifyObserver(e)})}_finishPromise(){if(void 0!==this._resolve){let e=!0;switch(iw(this._state)){case tw:ow(this._resolve.bind(null,this.snapshot))();break;case nw:case rw:ow(this._reject.bind(null,this._error))();break;default:e=!1}e&&(this._resolve=void 0,this._reject=void 0)}}_notifyObserver(e){switch(iw(this._state)){case Zb:case ew:e.next&&ow(e.next.bind(e,this.snapshot))();break;case tw:e.complete&&ow(e.complete.bind(e))();break;default:e.error&&ow(e.error.bind(e,this._error))()}}resume(){const e="paused"===this._state||"pausing"===this._state;return e&&this._transition("running"),e}pause(){const e="running"===this._state;return e&&this._transition("pausing"),e}cancel(){const e="running"===this._state||"pausing"===this._state;return e&&this._transition("canceling"),e}}
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
 */class dw{constructor(e,t){this._service=e,this._location=t instanceof ib?t:ib.makeFromUrl(t,e.host)}toString(){return"gs://"+this._location.bucket+"/"+this._location.path}_newRef(e,t){return new dw(e,t)}get root(){const e=new ib(this._location.bucket,"");return this._newRef(this._service,e)}get bucket(){return this._location.bucket}get fullPath(){return this._location.path}get name(){return Ab(this._location.path)}get storage(){return this._service}get parent(){const e=function(e){if(0===e.length)return null;const t=e.lastIndexOf("/");return-1===t?"":e.slice(0,t)}(this._location.path);if(null===e)return null;const t=new ib(this._location.bucket,e);return new dw(this._service,t)}_throwIfRoot(e){if(""===this._location.path)throw function(e){return new Gy(Ky.INVALID_ROOT_OPERATION,"The operation '"+e+"' cannot be performed on a root reference, create a non-root reference using child, such as .child('file.png').")}(e)}}function hw(e){e._throwIfRoot("getDownloadURL");const t=function(e,t,n){const r=ub(t.fullServerUrl(),e.host,e._protocol),i=e.maxOperationRetryTime,s=new Vb(r,"GET",Bb(e,n),i);return s.errorHandler=Hb(t),s}(e.storage,e._location,Ob());return e.storage.makeRequestWithTokens(t,cw).then(e=>{if(null===e)throw new Gy(Ky.NO_DOWNLOAD_URL,"The given file does not have any download URLs.");return e})}function pw(e){e._throwIfRoot("deleteObject");const t=function(e,t){const n=ub(t.fullServerUrl(),e.host,e._protocol),r=e.maxOperationRetryTime,i=new Vb(n,"DELETE",function(e,t){},r);return i.successCodes=[200,204],i.errorHandler=Hb(t),i}(e.storage,e._location);return e.storage.makeRequestWithTokens(t,cw)}function fw(e,t){if(e instanceof vw){const n=e;if(null==n._bucket)throw new Gy(Ky.NO_DEFAULT_BUCKET,"No default bucket found. Did you set the '"+Hy+"' property when initializing the app?");const r=new dw(n,n._bucket);return null!=t?fw(r,t):r}return void 0!==t?function(e,t){const n=function(e,t){const n=t.split("/").filter(e=>e.length>0).join("/");return 0===e.length?n:e+"/"+n}(e._location.path,t),r=new ib(e._location.bucket,n);return new dw(e.storage,r)}
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
 */(e,t):e}function mw(e,t){if(t&&/^[A-Za-z]+:\/\//.test(t)){if(e instanceof vw)return new dw(e,t);throw eb("To use ref(service, url), the first argument must be a Storage instance.")}return fw(e,t)}function gw(e,t){const n=null==t?void 0:t[Hy];return null==n?null:ib.makeFromBucketSpec(n,e)}class vw{constructor(e,t,n,r,i,s=!1){this.app=e,this._authProvider=t,this._appCheckProvider=n,this._url=r,this._firebaseVersion=i,this._isUsingEmulator=s,this._bucket=null,this._host=qy,this._protocol="https",this._appId=null,this._deleted=!1,this._maxOperationRetryTime=12e4,this._maxUploadRetryTime=6e5,this._requests=new Set,this._bucket=null!=r?ib.makeFromBucketSpec(r,this._host):gw(this._host,this.app.options)}get host(){return this._host}set host(e){this._host=e,null!=this._url?this._bucket=ib.makeFromBucketSpec(this._url,e):this._bucket=gw(e,this.app.options)}get maxUploadRetryTime(){return this._maxUploadRetryTime}set maxUploadRetryTime(e){cb("time",0,Number.POSITIVE_INFINITY,e),this._maxUploadRetryTime=e}get maxOperationRetryTime(){return this._maxOperationRetryTime}set maxOperationRetryTime(e){cb("time",0,Number.POSITIVE_INFINITY,e),this._maxOperationRetryTime=e}async _getAuthToken(){if(this._overrideAuthToken)return this._overrideAuthToken;const e=this._authProvider.getImmediate({optional:!0});if(e){const t=await e.getToken();if(null!==t)return t.accessToken}return null}async _getAppCheckToken(){if(Xn(this.app)&&this.app.settings.appCheckToken)return this.app.settings.appCheckToken;const e=this._appCheckProvider.getImmediate({optional:!0});if(e){return(await e.getToken()).token}return null}_delete(){return this._deleted||(this._deleted=!0,this._requests.forEach(e=>e.cancel()),this._requests.clear()),Promise.resolve()}_makeStorageReference(e){return new dw(this,e)}_makeRequest(e,t,n,r,i=!0){if(this._deleted)return new sb(tb());{const s=function(e,t,n,r,i,s,o=!0,a=!1){const l=db(e.urlParams),c=e.url+l,u=Object.assign({},e.headers);return function(e,t){t&&(e["X-Firebase-GMPID"]=t)}(u,t),function(e,t){null!==t&&t.length>0&&(e.Authorization="Firebase "+t)}(u,n),function(e,t){e["X-Firebase-Storage-Version"]="webjs/"+(null!=t?t:"AppManager")}(u,s),function(e,t){null!==t&&(e["X-Firebase-AppCheck"]=t)}(u,r),new pb(c,e.method,u,e.body,e.successCodes,e.additionalRetryCodes,e.handler,e.errorHandler,e.timeout,e.progressCallback,i,o,a)}(e,this._appId,n,r,t,this._firebaseVersion,i,this._isUsingEmulator);return this._requests.add(s),s.getPromise().then(()=>this._requests.delete(s),()=>this._requests.delete(s)),s}}async makeRequestWithTokens(e,t){const[n,r]=await Promise.all([this._getAuthToken(),this._getAppCheckToken()]);return this._makeRequest(e,t,n,r).getPromise()}}const yw="@firebase/storage",bw="0.13.14",ww="storage";function _w(e,t,n){return function(e,t,n){return e._throwIfRoot("uploadBytesResumable"),new uw(e,new Cb(t),n)}(e=Mt(e),t,n)}function xw(e){return function(e){e._throwIfRoot("getMetadata");const t=Gb(e.storage,e._location,Ob());return e.storage.makeRequestWithTokens(t,cw)}(e=Mt(e))}function Ew(e,t){return function(e,t){null!=t&&"number"==typeof t.maxResults&&cb("options.maxResults",1,1e3,t.maxResults);const n=t||{},r=Kb(e.storage,e._location,"/",n.pageToken,n.maxResults);return e.storage.makeRequestWithTokens(r,cw)}(e=Mt(e),t)}function Tw(e){return hw(e=Mt(e))}function Iw(e,t){return mw(e=Mt(e),t)}function Sw(e,t,n,r={}){!function(e,t,n,r={}){e.host=`${t}:${n}`;const i=gt(t);i&&(vt(`https://${e.host}/b`),_t("Storage",!0)),e._isUsingEmulator=!0,e._protocol=i?"https":"http";const{mockUserToken:s}=r;s&&(e._overrideAuthToken="string"==typeof s?s:yt(s,e.app.options.projectId))}(e,t,n,r)}function Cw(e,{instanceIdentifier:t}){const n=e.getProvider("app").getImmediate(),r=e.getProvider("auth-internal"),i=e.getProvider("app-check-internal");return new vw(n,r,i,t,Yn)}Kn(new Ut(ww,Cw,"PUBLIC").setMultipleInstances(!0)),tr(yw,bw,""),tr(yw,bw,"esm2017");function kw(e,t){const n={};for(const r in e)e.hasOwnProperty(r)&&(n[r]=t(e[r]));return n}function Aw(e){if(null==e)return null;if(e instanceof Number&&(e=e.valueOf()),"number"==typeof e&&isFinite(e))return e;if(!0===e||!1===e)return e;if("[object String]"===Object.prototype.toString.call(e))return e;if(e instanceof Date)return e.toISOString();if(Array.isArray(e))return e.map(e=>Aw(e));if("function"==typeof e||"object"==typeof e)return kw(e,e=>Aw(e));throw new Error("Data cannot be encoded in JSON: "+e)}function Dw(e){if(null==e)return e;if(e["@type"])switch(e["@type"]){case"type.googleapis.com/google.protobuf.Int64Value":case"type.googleapis.com/google.protobuf.UInt64Value":{const t=Number(e.value);if(isNaN(t))throw new Error("Data cannot be decoded from JSON: "+e);return t}default:throw new Error("Data cannot be decoded from JSON: "+e)}return Array.isArray(e)?e.map(e=>Dw(e)):"function"==typeof e||"object"==typeof e?kw(e,e=>Dw(e)):e}
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
 */const Nw="functions",Rw={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};
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
 */class Ow extends Ct{constructor(e,t,n){super(`${Nw}/${e}`,t||""),this.details=n,Object.setPrototypeOf(this,Ow.prototype)}}function Pw(e,t){let n,r=function(e){if(e>=200&&e<300)return"ok";switch(e){case 0:case 500:return"internal";case 400:return"invalid-argument";case 401:return"unauthenticated";case 403:return"permission-denied";case 404:return"not-found";case 409:return"aborted";case 429:return"resource-exhausted";case 499:return"cancelled";case 501:return"unimplemented";case 503:return"unavailable";case 504:return"deadline-exceeded"}return"unknown"}(e),i=r;try{const e=t&&t.error;if(e){const t=e.status;if("string"==typeof t){if(!Rw[t])return new Ow("internal","internal");r=Rw[t],i=t}const s=e.message;"string"==typeof s&&(i=s),n=e.details,void 0!==n&&(n=Dw(n))}}catch(e){}return"ok"===r?null:new Ow(r,i,n)}
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
 */class Lw{constructor(e,t,n,r){this.app=e,this.auth=null,this.messaging=null,this.appCheck=null,this.serverAppAppCheckToken=null,Xn(e)&&e.settings.appCheckToken&&(this.serverAppAppCheckToken=e.settings.appCheckToken),this.auth=t.getImmediate({optional:!0}),this.messaging=n.getImmediate({optional:!0}),this.auth||t.get().then(e=>this.auth=e,()=>{}),this.messaging||n.get().then(e=>this.messaging=e,()=>{}),this.appCheck||null==r||r.get().then(e=>this.appCheck=e,()=>{})}async getAuthToken(){if(this.auth)try{const e=await this.auth.getToken();return null==e?void 0:e.accessToken}catch(e){return}}async getMessagingToken(){if(this.messaging&&"Notification"in self&&"granted"===Notification.permission)try{return await this.messaging.getToken()}catch(e){return}}async getAppCheckToken(e){if(this.serverAppAppCheckToken)return this.serverAppAppCheckToken;if(this.appCheck){const t=e?await this.appCheck.getLimitedUseToken():await this.appCheck.getToken();return t.error?null:t.token}return null}async getContext(e){return{authToken:await this.getAuthToken(),messagingToken:await this.getMessagingToken(),appCheckToken:await this.getAppCheckToken(e)}}}
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
 */const $w="us-central1",Mw=/^data: (.*?)(?:\n|$)/;class Uw{constructor(e,t,n,r,i=$w,s=(...e)=>fetch(...e)){this.app=e,this.fetchImpl=s,this.emulatorOrigin=null,this.contextProvider=new Lw(e,t,n,r),this.cancelAllRequests=new Promise(e=>{this.deleteService=()=>Promise.resolve(e())});try{const e=new URL(i);this.customDomain=e.origin+("/"===e.pathname?"":e.pathname),this.region=$w}catch(e){this.customDomain=null,this.region=i}}_delete(){return this.deleteService()}_url(e){const t=this.app.options.projectId;if(null!==this.emulatorOrigin){return`${this.emulatorOrigin}/${t}/${this.region}/${e}`}return null!==this.customDomain?`${this.customDomain}/${e}`:`https://${this.region}-${t}.cloudfunctions.net/${e}`}}function Fw(e,t,n){const r=n=>function(e,t,n,r){const i=e._url(t);return async function(e,t,n,r){n=Aw(n);const i={data:n},s=await zw(e,r),o=r.timeout||7e4,a=function(e){let t=null;return{promise:new Promise((n,r)=>{t=setTimeout(()=>{r(new Ow("deadline-exceeded","deadline-exceeded"))},e)}),cancel:()=>{t&&clearTimeout(t)}}}(o),l=await Promise.race([Vw(t,i,s,e.fetchImpl),a.promise,e.cancelAllRequests]);if(a.cancel(),!l)throw new Ow("cancelled","Firebase Functions instance was deleted.");const c=Pw(l.status,l.json);if(c)throw c;if(!l.json)throw new Ow("internal","Response is not valid JSON object.");let u=l.json.data;void 0===u&&(u=l.json.result);if(void 0===u)throw new Ow("internal","Response is missing data field.");return{data:Dw(u)}}(e,i,n,r)}(e,t,n,{});return r.stream=(n,r)=>function(e,t,n,r){const i=e._url(t);return async function(e,t,n,r){var i;n=Aw(n);const s={data:n},o=await zw(e,r);let a,l,c;o["Content-Type"]="application/json",o.Accept="text/event-stream";try{a=await e.fetchImpl(t,{method:"POST",body:JSON.stringify(s),headers:o,signal:null==r?void 0:r.signal})}catch(e){if(e instanceof Error&&"AbortError"===e.name){const e=new Ow("cancelled","Request was cancelled.");return{data:Promise.reject(e),stream:{[Symbol.asyncIterator]:()=>({next:()=>Promise.reject(e)})}}}const t=Pw(0,null);return{data:Promise.reject(t),stream:{[Symbol.asyncIterator]:()=>({next:()=>Promise.reject(t)})}}}const u=new Promise((e,t)=>{l=e,c=t});null===(i=null==r?void 0:r.signal)||void 0===i||i.addEventListener("abort",()=>{const e=new Ow("cancelled","Request was cancelled.");c(e)});const d=function(e,t,n,r){const i=(e,r)=>{const i=e.match(Mw);if(!i)return;const s=i[1];try{const e=JSON.parse(s);if("result"in e)return void t(Dw(e.result));if("message"in e)return void r.enqueue(Dw(e.message));if("error"in e){const t=Pw(0,e);return r.error(t),void n(t)}}catch(e){if(e instanceof Ow)return r.error(e),void n(e)}},s=new TextDecoder;return new ReadableStream({start(t){let o="";return a();async function a(){if(null==r?void 0:r.aborted){const e=new Ow("cancelled","Request was cancelled");return t.error(e),n(e),Promise.resolve()}try{const{value:l,done:c}=await e.read();if(c)return o.trim()&&i(o.trim(),t),void t.close();if(null==r?void 0:r.aborted){const r=new Ow("cancelled","Request was cancelled");return t.error(r),n(r),void await e.cancel()}o+=s.decode(l,{stream:!0});const u=o.split("\n");o=u.pop()||"";for(const e of u)e.trim()&&i(e.trim(),t);return a()}catch(e){const r=e instanceof Ow?e:Pw(0,null);t.error(r),n(r)}}},cancel:()=>e.cancel()})}(a.body.getReader(),l,c,null==r?void 0:r.signal);return{stream:{[Symbol.asyncIterator](){const e=d.getReader();return{async next(){const{value:t,done:n}=await e.read();return{value:t,done:n}},return:async()=>(await e.cancel(),{done:!0,value:void 0})}}},data:u}}(e,i,n,r||{})}(e,t,n,r),r}async function Vw(e,t,n,r){let i;n["Content-Type"]="application/json";try{i=await r(e,{method:"POST",body:JSON.stringify(t),headers:n})}catch(e){return{status:0,json:null}}let s=null;try{s=await i.json()}catch(e){}return{status:i.status,json:s}}async function zw(e,t){const n={},r=await e.contextProvider.getContext(t.limitedUseAppCheckTokens);return r.authToken&&(n.Authorization="Bearer "+r.authToken),r.messagingToken&&(n["Firebase-Instance-ID-Token"]=r.messagingToken),null!==r.appCheckToken&&(n["X-Firebase-AppCheck"]=r.appCheckToken),n}const jw="@firebase/functions",Bw="0.12.9";function qw(e,t,n){!function(e,t,n){const r=gt(t);e.emulatorOrigin=`http${r?"s":""}://${t}:${n}`,r&&(vt(e.emulatorOrigin),_t("Functions",!0))}(Mt(e),t,n)}!function(e){Kn(new Ut(Nw,(e,{instanceIdentifier:t})=>{const n=e.getProvider("app").getImmediate(),r=e.getProvider("auth-internal"),i=e.getProvider("messaging-internal"),s=e.getProvider("app-check-internal");return new Uw(n,r,i,s,t)},"PUBLIC").setMultipleInstances(!0)),tr(jw,Bw,e),tr(jw,Bw,"esm2017")}
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
 */();function Hw(e){return e?.host??"127.0.0.1"}function Gw(e){if(!e||"number"!=typeof e.port)throw new Error("[firebase-emulators] Emulator configuration requires a numeric port.");return e.port}function Kw(e){return Hw(e)}function Ww(e){return Gw(e)}const Xw=new WeakSet;let Qw=null;function Jw(e){return _o(e)}function Yw(e,t,n=!0){Xw.has(e)||($i(e,function(e){return`${e.secure?"https":"http"}://${Hw(e)}:${Gw(e)}`}(t),{disableWarnings:n}),Xw.add(e))}async function Zw(e,t,n){return async function(e,t,n){if(Xn(e.app))return Promise.reject(xr(e));const r=Si(e),i=Li(r,{returnSecureToken:!0,email:t,password:n,clientType:"CLIENT_TYPE_WEB"},"signUpPassword",es),s=await i.catch(t=>{throw"auth/password-does-not-meet-requirements"===t.code&&os(e),t}),o=await ts._fromIdTokenResponse(r,"signIn",s);return await r._updateCurrentUser(o.user),o}(e,t,n)}async function e_(e){return function(e){return Mt(e).signOut()}(e)}async function t_(e,t){return async function(e,t){const n=Si(e),r={requestType:"PASSWORD_RESET",email:t,clientType:"CLIENT_TYPE_WEB"};await Li(n,r,"getOobCode",ji)}(e,t)}async function n_(e,t=[]){const n=function(e=[]){return Qw||(Qw=new Ji),e.forEach(e=>Qw.addScope(e)),Qw}(t);return Ms(e,n)}
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
tr("firebase","11.10.0","app");const r_=new Map;function i_(e,t="[DEFAULT]"){const n=r_.get(t);if(n)return s_(t,n.config,e),n.app;const r=Array.from(Bn.values()).find(e=>e.name===t);if(r)return r_.set(t,{app:r,config:e}),s_(t,r.options,e),r;const i=Zn(e,t);return r_.set(t,{app:i,config:e}),i}function s_(e,t,n){(function(e,t){if(!e||!t)return!1;return o_.every(n=>e[n]===t[n])})(t,n)||console.warn(`[firebase-app] Firebase app "${e}" already initialized with a different configuration. Subsequent calls will reuse the original instance. Ensure this is intentional.`)}const o_=["apiKey","authDomain","projectId","storageBucket","messagingSenderId","appId","measurementId"];const a_=new WeakSet;const l_=new WeakSet;const c_=new WeakSet;function u_(e,t="us-central1"){return function(e=er(),t=$w){const n=Wn(Mt(e),Nw).getImmediate({identifier:t}),r=ht("functions");return r&&qw(n,...r),n}(e,t)}function d_(e,t,n){return function(e,t){return Fw(Mt(e),t)}(e,t)}const h_={apiKey:"VITE_FIREBASE_API_KEY",authDomain:"VITE_FIREBASE_AUTH_DOMAIN",projectId:"VITE_FIREBASE_PROJECT_ID",storageBucket:"VITE_FIREBASE_STORAGE_BUCKET",messagingSenderId:"VITE_FIREBASE_MESSAGING_SENDER_ID",appId:"VITE_FIREBASE_APP_ID"};function p_(){return function(){const e=[];for(const[t,n]of Object.entries(h_))({MODE:"production",PROD:!0,DEV:!1,VITE_USE_EMULATOR:"false",VITE_FIREBASE_EMULATOR_UI:"http://127.0.0.1:5400",VITE_FIREBASE_API_KEY:"AIzaSyCGaJKzrUv_TgD97QLt-ydGPBbpCyCnrEw",VITE_FIREBASE_AUTH_DOMAIN:"peg-2035.firebaseapp.com",VITE_FIREBASE_PROJECT_ID:"peg-2035",VITE_FIREBASE_STORAGE_BUCKET:"peg-2035.appspot.com",VITE_FIREBASE_MESSAGING_SENDER_ID:"1039825199205",VITE_FIREBASE_APP_ID:"1:1039825199205:web:44d7dfd0f6f970c0ee668c"})[n]||e.push(`  - ${t} (set ${n} in .env)`);if(e.length>0)throw new Error(`Missing required Firebase environment variables:\n${e.join("\n")}\n\nPlease ensure you have a .env.local or .env.emulator file.\nCopy from .env.example to get started:\n  cp .env.example .env.local\n\nFor emulator mode: Placeholder values are sufficient.\nFor production: Use real values from Firebase Console.\n\nSee apps/df-app-starter-template/README.md for details.`)}(),{apiKey:"AIzaSyCGaJKzrUv_TgD97QLt-ydGPBbpCyCnrEw",authDomain:"peg-2035.firebaseapp.com",projectId:"peg-2035",storageBucket:"peg-2035.appspot.com",messagingSenderId:"1039825199205",appId:"1:1039825199205:web:44d7dfd0f6f970c0ee668c"}}const f_={"fb-emulator":{auth:!1,firestore:!0,storage:!0,functions:!0,label:"Emulator Mode (fb-emulator)",description:"Using production authentication with local emulators for Firestore, Storage, and Functions."},"fb-cloud":{auth:!1,firestore:!1,storage:!1,functions:!1,label:"Cloud Mode (fb-cloud)",description:"All Firebase services are connected to the live cloud environment."}};function m_(){return f_["fb-cloud"]}let g_=null,v_=null;function y_(e){v_=e}function b_(){if(!g_){const e=p_();g_=i_(e)}return g_}function w_(e){return!0===function(){if(!v_)throw new Error("Emulator configuration not set. Call setEmulatorConfig() in your app entry point.\nExample:\n  import {setEmulatorConfig} from '@df/state/stores/firebase-init';\n  import {EMULATOR_CONFIG} from './config/firebase.config';\n  setEmulatorConfig(EMULATOR_CONFIG);");return v_}()[e]}const __=Ie(null),x_=Ie("idle"),E_=Ie(null),T_=Ie(!1);let I_=!1,S_=null,C_=null,k_=null;async function A_(e){try{const t=await e.getIdToken(!0);localStorage.setItem("User",JSON.stringify(e)),sessionStorage.setItem("Authorization",`Bearer ${t}`),document.cookie=`authToken=${t}; path=/; secure; samesite=strict; max-age=3600`}catch(e){console.error("Error storing auth token:",e)}}function D_(){localStorage.removeItem("User"),sessionStorage.removeItem("Authorization"),document.cookie="authToken=; path=/; expires=Thu, 01 Jan 1970 00:00:00 GMT"}function N_(){if(I_)return;if(C_&&k_)return;const e=b_();if(S_!==e||!k_){if(k_&&k_(),S_=e,C_=Jw(e),I_=!1,w_("auth")){const e={host:globalThis.__DF_AUTH_EMULATOR_HOST__??"127.0.0.1",port:globalThis.__DF_AUTH_EMULATOR_PORT__??9155};Yw(C_,e)}x_.set("loading"),k_=function(e,t){return Jw(e).onAuthStateChanged(t)}(e,async e=>{__.set(e),x_.set(e?"authenticated":"unauthenticated"),T_.set(!0),E_.set(null),e?await A_(e):D_()})}}const R_=Se(()=>({authUser:__.get(),authState:x_.get(),error:E_.get(),initialized:T_.get()}));async function O_(e){if(N_(),!C_)throw new Error("Auth initialization failed");x_.set("loading"),E_.set(null);try{const t=await async function(e,t,n){return as(e,t,n)}(C_,e.email,e.password);__.set(t.user),x_.set("authenticated"),await A_(t.user)}catch(e){x_.set("error");const t=e instanceof Error?e.message:"Sign in failed";throw E_.set(t),e}}async function P_(e){if(N_(),!C_)throw new Error("Auth initialization failed");x_.set("loading"),E_.set(null);try{const t=await Zw(C_,e.email,e.password);e.displayName&&t.user&&await async function(e,t){return ls(e,t)}(t.user,{displayName:e.displayName}),__.set(t.user),x_.set("authenticated"),await A_(t.user)}catch(e){x_.set("error");const t=e instanceof Error?e.message:"Sign up failed";throw E_.set(t),e}}async function L_(){if(N_(),!C_)throw new Error("Auth initialization failed");x_.set("loading"),E_.set(null);try{await e_(C_),__.set(null),x_.set("unauthenticated"),D_()}catch(e){x_.set("error");const t=e instanceof Error?e.message:"Sign out failed";throw E_.set(t),e}}class $_{collection;defaultConstraints;transforms;mapDocument;currentQuery;queryDescriptionSignal=Ie(null);documentsSignal=Ie([]);statusSignal=Ie("idle");errorSignal=Ie(null);lastUpdatedSignal=Ie(null);pageSizeSignal=Ie(10);pageIndexSignal=Ie(0);hasNextSignal=Ie(!1);hasPreviousSignal=Ie(!1);listeningSignal=Ie(!1);unsubscribeRealtime=null;pageAnchors=[null];pendingRequestId=0;state=Se(()=>({status:this.statusSignal.get(),documents:this.documentsSignal.get(),error:this.errorSignal.get(),isListening:this.listeningSignal.get(),lastUpdated:this.lastUpdatedSignal.get(),currentPage:this.pageIndexSignal.get()+1,pageSize:this.pageSizeSignal.get(),hasNextPage:this.hasNextSignal.get(),hasPreviousPage:this.hasPreviousSignal.get(),queryDescription:this.queryDescriptionSignal.get()}));constructor(e,t={}){this.collection=e,this.defaultConstraints=t.defaultConstraints??[],this.transforms={transformCreate:t.transformCreate,transformUpdate:t.transformUpdate},this.mapDocument=t.mapDocument,this.currentQuery=t.initialQuery??[],this.queryDescriptionSignal.set(t.defaultQueryDescription??null),this.pageSizeSignal.set(t.pageSize??10)}async loadInitialPage(){this.pageAnchors=[null],await this.loadPageAt(0)}async loadNextPage(){this.hasNextSignal.get()&&await this.loadPageAt(this.pageIndexSignal.get()+1)}async loadPreviousPage(){this.hasPreviousSignal.get()&&await this.loadPageAt(this.pageIndexSignal.get()-1)}async refresh(){await this.loadPageAt(this.pageIndexSignal.get())}async setQuery(e,t=null){this.currentQuery=e,this.queryDescriptionSignal.set(t),this.stopRealtime(),await this.loadInitialPage()}async setPageSize(e){if(e<=0)throw new Error("Page size must be positive");this.pageSizeSignal.get()!==e&&(this.pageSizeSignal.set(e),await this.loadInitialPage())}startRealtime(){this.stopRealtime();const e=this.buildQuery(this.pageIndexSignal.get());this.statusSignal.set("loading"),this.errorSignal.set(null),this.unsubscribeRealtime=jy(e,e=>{const t=this.processSnapshot(e.docs);this.documentsSignal.set(t.documents),this.hasNextSignal.set(t.hasNextPage),this.hasPreviousSignal.set(this.pageIndexSignal.get()>0),this.lastUpdatedSignal.set(Date.now()),this.statusSignal.set("ready"),t.anchor?this.pageAnchors[this.pageIndexSignal.get()+1]=t.anchor:this.pageAnchors=this.pageAnchors.slice(0,this.pageIndexSignal.get()+1)},e=>{this.statusSignal.set("error"),this.errorSignal.set(e.message??"Failed to listen for updates")}),this.listeningSignal.set(!0)}stopRealtime(){this.unsubscribeRealtime&&(this.unsubscribeRealtime(),this.unsubscribeRealtime=null),this.listeningSignal.set(!1)}async create(e){const t={...e},n=this.transforms.transformCreate?this.transforms.transformCreate(t):t,r=await function(e,t){const n=Sa(e.firestore,Fv),r=Pv(e),i=Ry(e.converter,t);return By(n,[ny(ty(e.firestore),"addDoc",r._key,i,null!==e.converter,{}).toMutation(r._key,Kd.exists(!1))]).then(()=>r)}(this.collection,n);return r.id}async update(e,t){const n={...t},r=this.transforms.transformUpdate?this.transforms.transformUpdate(n):n;Object.keys(r).length&&await zy(Pv(this.collection,e),r)}async delete(e){await function(e){return By(Sa(e.firestore,Fv),[new oh(e._key,Kd.none())])}(Pv(this.collection,e))}async loadPageAt(e){this.pendingRequestId+=1;const t=this.pendingRequestId;this.stopRealtime(),this.statusSignal.set("loading"),this.errorSignal.set(null);try{const n=this.buildQuery(e),r=await Fy(n);if(t!==this.pendingRequestId)return;const i=this.processSnapshot(r.docs);this.documentsSignal.set(i.documents),this.lastUpdatedSignal.set(Date.now()),this.hasNextSignal.set(i.hasNextPage),this.pageIndexSignal.set(e),this.hasPreviousSignal.set(e>0),i.anchor?this.pageAnchors[e+1]=i.anchor:this.pageAnchors=this.pageAnchors.slice(0,e+1),this.statusSignal.set("ready")}catch(e){if(t!==this.pendingRequestId)return;this.statusSignal.set("error"),this.errorSignal.set(e instanceof Error?e.message:"Failed to load documents")}}buildQuery(e){const t=[...this.defaultConstraints,...this.currentQuery],n=this.pageSizeSignal.get(),r=this.pageAnchors[e];return r&&t.push(function(...e){return Cy._create("startAfter",e,!1)}(r)),t.push(Sy(n+1)),function(e,t,...n){let r=[];t instanceof yy&&r.push(t),r=r.concat(n),function(e){const t=e.filter(e=>e instanceof xy).length,n=e.filter(e=>e instanceof wy).length;if(t>1||t>0&&n>0)throw new Qo(Xo.INVALID_ARGUMENT,"InvalidQuery. When using composite filters, you cannot use more than one filter at the top level. Consider nesting the multiple filters within an `and(...)` statement. For example: change `query(query, where(...), or(...))` to `query(query, and(where(...), or(...)))`.")}
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
 */(r);for(const t of r)e=t._apply(e);return e}(this.collection,...t)}processSnapshot(e){const t=this.pageSizeSignal.get(),n=e.length>t,r=n?e.slice(0,t):e;return{documents:r.map(e=>this.hydrateDocument(e)),hasNextPage:n,anchor:r.length?r[r.length-1]:null}}hydrateDocument(e){const t=e.data(),n={id:e.id,...t};return this.mapDocument?this.mapDocument(n):n}}const M_={showCompleted:!0,priority:"all",tag:"all",search:""},U_=Ie({...M_}),F_=Ie({status:"idle",documents:[],error:null,isListening:!1,lastUpdated:null,currentPage:1,pageSize:5,hasNextPage:!1,hasPreviousPage:!1,queryDescription:"All todos"});let V_=null;const z_=Ie(null),j_=Se(()=>{const e=z_.get();return e?e.state.get():F_.get()}),B_=Se(()=>U_.get());async function q_(e,t){if(z_.get())return;const n=function(e){return Vv(e)}(e);var r,i;t&&(r=n,i={host:"127.0.0.1",port:8280},a_.has(r)||(Av(r,Kw(i),Ww(i)),a_.add(r))),await async function(e){if(l_.has(e))return!0;try{return await Bv(e,{forceOwnership:!1}),l_.add(e),console.log("[firebase/firestore] Offline persistence enabled successfully"),!0}catch(t){const n=t?.code;return"failed-precondition"===n?(console.warn("[firebase/firestore] Offline persistence is already enabled in another tab. Continuing with memory cache."),l_.add(e),!1):"unimplemented"===n?(console.warn("[firebase/firestore] Offline persistence is not supported in this environment. Continuing with memory cache."),l_.add(e),!1):(console.warn("[firebase/firestore] Failed to enable offline persistence. Continuing with memory cache:",t),l_.add(e),!1)}}(n),V_=Ov(n,"todos");const s=new $_(V_,{defaultConstraints:[Ty("createdAt","desc")],defaultQueryDescription:"All todos (newest first)",pageSize:5,mapDocument:Q_});z_.set(s),await W_()}async function H_(e,t){const n=X_(),r={};"string"==typeof t.title&&(r.title=t.title,r.titleLower=t.title.toLowerCase()),"string"==typeof t.description&&(r.description=t.description),"string"==typeof t.priority&&(r.priority=t.priority),Array.isArray(t.tags)&&(r.tags=t.tags),void 0!==t.dueDate&&(r.dueDate=t.dueDate),"boolean"==typeof t.completed&&(r.completed=t.completed),r.updatedAt=new Date,await n.update(e,r),await n.refresh()}async function G_(){const e=X_();await e.loadNextPage()}async function K_(e){U_.set({...U_.get(),...e}),await W_()}async function W_(){const e=X_(),t=U_.get(),n=[],r=[];t.showCompleted||(n.push(_y("completed","==",!1)),r.push("Incomplete only")),"all"!==t.priority&&(n.push(_y("priority","==",t.priority)),r.push(`Priority: ${t.priority}`)),"all"!==t.tag&&(n.push(_y("tags","array-contains",t.tag)),r.push(`Tag: ${t.tag}`));const i=r.length?r.join(" • "):"All todos (newest first)";await e.setQuery(n,i)}function X_(){const e=z_.get();if(!e||!V_)throw new Error("Todo store has not been initialized. Call initializeTodosStore() first.");return e}function Q_(e){const t=e.createdAt instanceof Na?e.createdAt.toDate():e.createdAt??null,n=e.updatedAt instanceof Na?e.updatedAt.toDate():e.updatedAt??null,r=e.dueDate instanceof Na?e.dueDate.toDate():e.dueDate??null;return{...e,createdAt:t,updatedAt:n,dueDate:r,titleLower:e.titleLower??e.title.toLowerCase()}}function J_(e){if(z_.get())throw new Error("Cannot set demo state after the todo store has been initialized.");F_.set(e)}function Y_(e){if(z_.get())throw new Error("Cannot set demo filters after the todo store has been initialized.");U_.set(e)}if("object"==typeof globalThis){const e=globalThis;e.__dfSetTodoDemoState=J_,e.__dfSetTodoDemoFilters=Y_}const Z_=Ie({status:"idle",documents:[],error:null,isListening:!1,lastUpdated:null,currentPage:1,pageSize:50,hasNextPage:!1,hasPreviousPage:!1,queryDescription:"Latest messages"}),ex=Ie("idle"),tx=Ie(null),nx=Ie(null);Se(()=>{const e=nx.get();return e?e.state.get():Z_.get()}),Se(()=>({status:ex.get(),error:tx.get()}));const rx=Ie("idle"),ix=Ie(0),sx=Ie(null),ox=Ie(null);let ax=null;function lx(){if(ax)return;const e=b_();ax=function(e=er(),t){const n=Wn(e=Mt(e),ww).getImmediate({identifier:t}),r=ht("storage");return r&&Sw(n,...r),n}(e),w_("storage")&&Sw(ax,"127.0.0.1",9390)}function cx(){if(lx(),!ax)throw new Error("Storage initialization failed");return ax}async function ux(e){const t=Iw(cx(),e);await function(e){return pw(e=Mt(e))}(t)}async function dx(e){const t=await async function(e,t=100){const n=Iw(cx(),e);return await Ew(n,{maxResults:t})}(e),n=[];for(const e of t.items)try{const t=await Tw(e),r=await xw(e);n.push({name:e.name,path:e.fullPath,downloadUrl:t,size:r.size,contentType:r.contentType||"application/octet-stream",uploadedAt:new Date(r.timeCreated)})}catch(t){console.error(`Failed to get metadata for ${e.fullPath}:`,t)}return n}Se(()=>({status:rx.get(),progress:ix.get(),error:sx.get(),uploadedFile:ox.get()}));const hx=Ie(null),px=Ie({status:"idle",data:null,error:null,lastCalled:null}),fx=Ie({status:"idle",data:null,error:null,lastCalled:null}),mx=Ie({status:"idle",data:null,error:null,lastCalled:null}),gx=Se(()=>px.get()),vx=Se(()=>fx.get()),yx=Se(()=>mx.get());function bx(){let e=hx.get();if(!e){e=u_(b_(),"us-central1"),w_("functions")&&function(e,t){c_.has(e)||(qw(e,Kw(t),Ww(t)),c_.add(e))}(e,{host:"127.0.0.1",port:5501}),hx.set(e)}return e}const wx=Ie({...{status:"idle",documents:[],error:null,isListening:!1,lastUpdated:null,currentPage:1,pageSize:20,hasNextPage:!1,hasPreviousPage:!1,queryDescription:"Awaiting authentication"}}),_x=Ie(null);Ie(null),Ie(null);const xx=Se(()=>{const e=_x.get();return e?e.state.get():wx.get()});Se(()=>{const e=xx.get().documents,t=e.length,n=t>0?e[0].recordedAt??null:null,r={pushups:{count:0,totalValue:0},squats:{count:0,totalValue:0},plank:{count:0,totalValue:0},dumbbells:{count:0,totalValue:0},hang:{count:0,totalValue:0}};return e.forEach(e=>{r[e.exerciseType].count+=1,r[e.exerciseType].totalValue+=e.value}),{totalExercises:t,entryCount:t,lastEntryAt:n,byType:r}});const Ex={flowers:[{id:"rose",name:"Rose",description:"The classic symbol of love and passion",color:"red"},{id:"tulip",name:"Tulip",description:"Elegant spring flower",color:"purple"},{id:"sunflower",name:"Sunflower",description:"Bright and cheerful",color:"yellow"},{id:"orchid",name:"Orchid",description:"Exotic and mysterious",color:"white"},{id:"lily",name:"Lily",description:"Graceful and timeless",color:"pink"},{id:"daisy",name:"Daisy",description:"Simple and innocent",color:"white"},{id:"lavender",name:"Lavender",description:"Fragrant and calming",color:"purple"},{id:"marigold",name:"Marigold",description:"Warm and vibrant",color:"orange"},{id:"chrysanthemum",name:"Chrysanthemum",description:"Diverse and beautiful",color:"gold"},{id:"iris",name:"Iris",description:"Regal and noble",color:"blue"},{id:"peony",name:"Peony",description:"Lush and romantic",color:"pink"},{id:"daffodil",name:"Daffodil",description:"Spring herald",color:"yellow"}],continents:[{id:"asia",name:"Asia",population:"4.7 billion",area:"44.6 million km²"},{id:"africa",name:"Africa",population:"1.4 billion",area:"30.4 million km²"},{id:"north-america",name:"North America",population:"0.6 billion",area:"24.7 million km²"},{id:"south-america",name:"South America",population:"0.4 billion",area:"17.8 million km²"},{id:"antarctica",name:"Antarctica",population:"0",area:"14.2 million km²"},{id:"europe",name:"Europe",population:"0.75 billion",area:"10.2 million km²"},{id:"australia",name:"Australia",population:"0.026 billion",area:"7.7 million km²"}],chemicalElements:[{id:"hydrogen",name:"Hydrogen",symbol:"H",atomicNumber:1,atomicMass:1.008},{id:"helium",name:"Helium",symbol:"He",atomicNumber:2,atomicMass:4.003},{id:"carbon",name:"Carbon",symbol:"C",atomicNumber:6,atomicMass:12.011},{id:"nitrogen",name:"Nitrogen",symbol:"N",atomicNumber:7,atomicMass:14.007},{id:"oxygen",name:"Oxygen",symbol:"O",atomicNumber:8,atomicMass:15.999},{id:"sodium",name:"Sodium",symbol:"Na",atomicNumber:11,atomicMass:22.99},{id:"iron",name:"Iron",symbol:"Fe",atomicNumber:26,atomicMass:55.845},{id:"copper",name:"Copper",symbol:"Cu",atomicNumber:29,atomicMass:63.546},{id:"silver",name:"Silver",symbol:"Ag",atomicNumber:47,atomicMass:107.868},{id:"gold",name:"Gold",symbol:"Au",atomicNumber:79,atomicMass:196.967},{id:"mercury",name:"Mercury",symbol:"Hg",atomicNumber:80,atomicMass:200.592},{id:"lead",name:"Lead",symbol:"Pb",atomicNumber:82,atomicMass:207.2},{id:"uranium",name:"Uranium",symbol:"U",atomicNumber:92,atomicMass:238.029}],musicalInstruments:[{id:"guitar",name:"Guitar",type:"String",family:"Stringed"},{id:"piano",name:"Piano",type:"Keyboard",family:"Percussion"},{id:"violin",name:"Violin",type:"String",family:"Stringed"},{id:"drums",name:"Drums",type:"Percussion",family:"Percussion"},{id:"trumpet",name:"Trumpet",type:"Brass",family:"Wind"},{id:"flute",name:"Flute",type:"Woodwind",family:"Wind"},{id:"saxophone",name:"Saxophone",type:"Woodwind",family:"Wind"},{id:"cello",name:"Cello",type:"String",family:"Stringed"},{id:"synthesizer",name:"Synthesizer",type:"Electronic",family:"Electronic"},{id:"harp",name:"Harp",type:"String",family:"Stringed"},{id:"clarinet",name:"Clarinet",type:"Woodwind",family:"Wind"},{id:"electric-guitar",name:"Electric Guitar",type:"String",family:"Stringed"}],todos:[{id:"plan-firestore-demo",title:"Plan Firestore Demo",titleLower:"plan firestore demo",description:"Outline the structure and key points",completed:!0,priority:"high",tags:["planning","demo"],createdAt:Na.fromDate(new Date("2024-01-15")),updatedAt:Na.fromDate(new Date("2024-01-16")),dueDate:Na.fromDate(new Date("2024-01-20"))},{id:"write-todo-copy",title:"Write Todo Copy",titleLower:"write todo copy",description:"Create engaging copy for todo items",completed:!1,priority:"medium",tags:["writing","ux"],createdAt:Na.fromDate(new Date("2024-01-16")),updatedAt:Na.fromDate(new Date("2024-01-16")),dueDate:Na.fromDate(new Date("2024-01-22"))},{id:"record-realtime-gif",title:"Record Realtime GIF",titleLower:"record realtime gif",description:"Capture realtime sync in action",completed:!1,priority:"high",tags:["demo","video"],createdAt:Na.fromDate(new Date("2024-01-17")),updatedAt:Na.fromDate(new Date("2024-01-17")),dueDate:Na.fromDate(new Date("2024-01-25"))},{id:"sync-seed-data",title:"Sync Seed Data",titleLower:"sync seed data",description:"Ensure all seed data is synchronized",completed:!1,priority:"medium",tags:["testing","data"],createdAt:Na.fromDate(new Date("2024-01-18")),updatedAt:Na.fromDate(new Date("2024-01-18")),dueDate:Na.fromDate(new Date("2024-01-28"))},{id:"add-pagination-tests",title:"Add Pagination Tests",titleLower:"add pagination tests",description:"Write comprehensive test suite",completed:!1,priority:"medium",tags:["testing","pagination"],createdAt:Na.fromDate(new Date("2024-01-19")),updatedAt:Na.fromDate(new Date("2024-01-19")),dueDate:Na.fromDate(new Date("2024-02-05"))},{id:"design-filter-menu",title:"Design Filter Menu",titleLower:"design filter menu",description:"Create intuitive filter interface",completed:!1,priority:"high",tags:["design","ux"],createdAt:Na.fromDate(new Date("2024-01-20")),updatedAt:Na.fromDate(new Date("2024-01-20")),dueDate:Na.fromDate(new Date("2024-02-10"))},{id:"document-offline",title:"Document Offline",titleLower:"document offline",description:"Write offline functionality docs",completed:!1,priority:"low",tags:["docs","offline"],createdAt:Na.fromDate(new Date("2024-01-21")),updatedAt:Na.fromDate(new Date("2024-01-21")),dueDate:Na.fromDate(new Date("2024-02-15"))},{id:"prep-query-examples",title:"Prep Query Examples",titleLower:"prep query examples",description:"Prepare example queries for docs",completed:!1,priority:"medium",tags:["docs","queries"],createdAt:Na.fromDate(new Date("2024-01-22")),updatedAt:Na.fromDate(new Date("2024-01-22")),dueDate:Na.fromDate(new Date("2024-02-12"))},{id:"review-accessibility",title:"Review Accessibility",titleLower:"review accessibility",description:"Ensure WCAG compliance",completed:!1,priority:"high",tags:["a11y","testing"],createdAt:Na.fromDate(new Date("2024-01-23")),updatedAt:Na.fromDate(new Date("2024-01-23")),dueDate:Na.fromDate(new Date("2024-02-01"))},{id:"publish-storybook",title:"Publish Storybook",titleLower:"publish storybook",description:"Deploy storybook to production",completed:!1,priority:"low",tags:["deployment","docs"],createdAt:Na.fromDate(new Date("2024-01-24")),updatedAt:Na.fromDate(new Date("2024-01-24")),dueDate:Na.fromDate(new Date("2024-02-20"))},{id:"draft-coaching-prompts",title:"Draft Coaching Prompts",titleLower:"draft coaching prompts",description:"Create coaching prompt library",completed:!1,priority:"medium",tags:["content","coaching"],createdAt:Na.fromDate(new Date("2024-01-25")),updatedAt:Na.fromDate(new Date("2024-01-25")),dueDate:Na.fromDate(new Date("2024-02-18"))},{id:"prep-live-coding",title:"Prep Live Coding",titleLower:"prep live coding",description:"Prepare live coding session",completed:!1,priority:"high",tags:["demo","live-coding"],createdAt:Na.fromDate(new Date("2024-01-26")),updatedAt:Na.fromDate(new Date("2024-01-26")),dueDate:Na.fromDate(new Date("2024-02-08"))}]};const Tx=new class{statusSignal=Ie("idle");errorSignal=Ie(null);progressSignal=Ie(0);currentStepSignal=Ie("");isCompleteSignal=Ie(!1);state=Se(()=>({status:this.statusSignal.get(),error:this.errorSignal.get(),progress:this.progressSignal.get(),currentStep:this.currentStepSignal.get(),isComplete:this.isCompleteSignal.get()}));async seedFirestoreCollections(){this.statusSignal.set("loading"),this.errorSignal.set(null),this.progressSignal.set(0),this.isCompleteSignal.set(!1);try{const e=Vv(),t=Object.keys(Ex),n=t.length;for(let r=0;r<t.length;r++){const i=t[r];this.currentStepSignal.set(`Seeding ${i}...`),await this.seedCollection(e,i,Ex[i]);const s=Math.round((r+1)/n*100);this.progressSignal.set(s)}this.statusSignal.set("ready"),this.isCompleteSignal.set(!0),this.currentStepSignal.set("Seed data loaded successfully")}catch(e){this.statusSignal.set("error"),this.errorSignal.set(e instanceof Error?e.message:"Failed to seed data"),this.currentStepSignal.set("Error during seeding")}}async seedCollection(e,t,n){const r=Ov(e,t);for(const e of n){const{id:n,...i}=e;if("string"==typeof n)try{const e=Pv(r,n);await Vy(e,i,{merge:!0})}catch(e){throw console.error(`Error seeding ${t}/${n}:`,e),e}}}reset(){this.statusSignal.set("idle"),this.errorSignal.set(null),this.progressSignal.set(0),this.currentStepSignal.set(""),this.isCompleteSignal.set(!1)}},Ix=Ie([]),Sx=Ie(!1),Cx=Ie("");Se(()=>({users:Ix.get(),loading:Sx.get(),error:Cx.get()}));
/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const kx=globalThis,Ax=kx.ShadowRoot&&(void 0===kx.ShadyCSS||kx.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,Dx=Symbol(),Nx=new WeakMap;let Rx=class{constructor(e,t,n){if(this._$cssResult$=!0,n!==Dx)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=e,this.t=t}get styleSheet(){let e=this.o;const t=this.t;if(Ax&&void 0===e){const n=void 0!==t&&1===t.length;n&&(e=Nx.get(t)),void 0===e&&((this.o=e=new CSSStyleSheet).replaceSync(this.cssText),n&&Nx.set(t,e))}return e}toString(){return this.cssText}};const Ox=(e,...t)=>{const n=1===e.length?e[0]:t.reduce((t,n,r)=>t+(e=>{if(!0===e._$cssResult$)return e.cssText;if("number"==typeof e)return e;throw Error("Value passed to 'css' function must be a 'css' function result: "+e+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(n)+e[r+1],e[0]);return new Rx(n,e,Dx)},Px=Ax?e=>e:e=>e instanceof CSSStyleSheet?(e=>{let t="";for(const n of e.cssRules)t+=n.cssText;return(e=>new Rx("string"==typeof e?e:e+"",void 0,Dx))(t)})(e):e,{is:Lx,defineProperty:$x,getOwnPropertyDescriptor:Mx,getOwnPropertyNames:Ux,getOwnPropertySymbols:Fx,getPrototypeOf:Vx}=Object,zx=globalThis,jx=zx.trustedTypes,Bx=jx?jx.emptyScript:"",qx=zx.reactiveElementPolyfillSupport,Hx=(e,t)=>e,Gx={toAttribute(e,t){switch(t){case Boolean:e=e?Bx:null;break;case Object:case Array:e=null==e?e:JSON.stringify(e)}return e},fromAttribute(e,t){let n=e;switch(t){case Boolean:n=null!==e;break;case Number:n=null===e?null:Number(e);break;case Object:case Array:try{n=JSON.parse(e)}catch(e){n=null}}return n}},Kx=(e,t)=>!Lx(e,t),Wx={attribute:!0,type:String,converter:Gx,reflect:!1,useDefault:!1,hasChanged:Kx};
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */Symbol.metadata??=Symbol("metadata"),zx.litPropertyMetadata??=new WeakMap;class Xx extends HTMLElement{static addInitializer(e){this._$Ei(),(this.l??=[]).push(e)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(e,t=Wx){if(t.state&&(t.attribute=!1),this._$Ei(),this.prototype.hasOwnProperty(e)&&((t=Object.create(t)).wrapped=!0),this.elementProperties.set(e,t),!t.noAccessor){const n=Symbol(),r=this.getPropertyDescriptor(e,n,t);void 0!==r&&$x(this.prototype,e,r)}}static getPropertyDescriptor(e,t,n){const{get:r,set:i}=Mx(this.prototype,e)??{get(){return this[t]},set(e){this[t]=e}};return{get:r,set(t){const s=r?.call(this);i?.call(this,t),this.requestUpdate(e,s,n)},configurable:!0,enumerable:!0}}static getPropertyOptions(e){return this.elementProperties.get(e)??Wx}static _$Ei(){if(this.hasOwnProperty(Hx("elementProperties")))return;const e=Vx(this);e.finalize(),void 0!==e.l&&(this.l=[...e.l]),this.elementProperties=new Map(e.elementProperties)}static finalize(){if(this.hasOwnProperty(Hx("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(Hx("properties"))){const e=this.properties,t=[...Ux(e),...Fx(e)];for(const n of t)this.createProperty(n,e[n])}const e=this[Symbol.metadata];if(null!==e){const t=litPropertyMetadata.get(e);if(void 0!==t)for(const[e,n]of t)this.elementProperties.set(e,n)}this._$Eh=new Map;for(const[e,t]of this.elementProperties){const n=this._$Eu(e,t);void 0!==n&&this._$Eh.set(n,e)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(e){const t=[];if(Array.isArray(e)){const n=new Set(e.flat(1/0).reverse());for(const e of n)t.unshift(Px(e))}else void 0!==e&&t.push(Px(e));return t}static _$Eu(e,t){const n=t.attribute;return!1===n?void 0:"string"==typeof n?n:"string"==typeof e?e.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){this._$ES=new Promise(e=>this.enableUpdating=e),this._$AL=new Map,this._$E_(),this.requestUpdate(),this.constructor.l?.forEach(e=>e(this))}addController(e){(this._$EO??=new Set).add(e),void 0!==this.renderRoot&&this.isConnected&&e.hostConnected?.()}removeController(e){this._$EO?.delete(e)}_$E_(){const e=new Map,t=this.constructor.elementProperties;for(const n of t.keys())this.hasOwnProperty(n)&&(e.set(n,this[n]),delete this[n]);e.size>0&&(this._$Ep=e)}createRenderRoot(){const e=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return((e,t)=>{if(Ax)e.adoptedStyleSheets=t.map(e=>e instanceof CSSStyleSheet?e:e.styleSheet);else for(const n of t){const t=document.createElement("style"),r=kx.litNonce;void 0!==r&&t.setAttribute("nonce",r),t.textContent=n.cssText,e.appendChild(t)}})(e,this.constructor.elementStyles),e}connectedCallback(){this.renderRoot??=this.createRenderRoot(),this.enableUpdating(!0),this._$EO?.forEach(e=>e.hostConnected?.())}enableUpdating(e){}disconnectedCallback(){this._$EO?.forEach(e=>e.hostDisconnected?.())}attributeChangedCallback(e,t,n){this._$AK(e,n)}_$ET(e,t){const n=this.constructor.elementProperties.get(e),r=this.constructor._$Eu(e,n);if(void 0!==r&&!0===n.reflect){const i=(void 0!==n.converter?.toAttribute?n.converter:Gx).toAttribute(t,n.type);this._$Em=e,null==i?this.removeAttribute(r):this.setAttribute(r,i),this._$Em=null}}_$AK(e,t){const n=this.constructor,r=n._$Eh.get(e);if(void 0!==r&&this._$Em!==r){const e=n.getPropertyOptions(r),i="function"==typeof e.converter?{fromAttribute:e.converter}:void 0!==e.converter?.fromAttribute?e.converter:Gx;this._$Em=r;const s=i.fromAttribute(t,e.type);this[r]=s??this._$Ej?.get(r)??s,this._$Em=null}}requestUpdate(e,t,n){if(void 0!==e){const r=this.constructor,i=this[e];if(n??=r.getPropertyOptions(e),!((n.hasChanged??Kx)(i,t)||n.useDefault&&n.reflect&&i===this._$Ej?.get(e)&&!this.hasAttribute(r._$Eu(e,n))))return;this.C(e,t,n)}!1===this.isUpdatePending&&(this._$ES=this._$EP())}C(e,t,{useDefault:n,reflect:r,wrapped:i},s){n&&!(this._$Ej??=new Map).has(e)&&(this._$Ej.set(e,s??t??this[e]),!0!==i||void 0!==s)||(this._$AL.has(e)||(this.hasUpdated||n||(t=void 0),this._$AL.set(e,t)),!0===r&&this._$Em!==e&&(this._$Eq??=new Set).add(e))}async _$EP(){this.isUpdatePending=!0;try{await this._$ES}catch(e){Promise.reject(e)}const e=this.scheduleUpdate();return null!=e&&await e,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??=this.createRenderRoot(),this._$Ep){for(const[e,t]of this._$Ep)this[e]=t;this._$Ep=void 0}const e=this.constructor.elementProperties;if(e.size>0)for(const[t,n]of e){const{wrapped:e}=n,r=this[t];!0!==e||this._$AL.has(t)||void 0===r||this.C(t,void 0,n,r)}}let e=!1;const t=this._$AL;try{e=this.shouldUpdate(t),e?(this.willUpdate(t),this._$EO?.forEach(e=>e.hostUpdate?.()),this.update(t)):this._$EM()}catch(t){throw e=!1,this._$EM(),t}e&&this._$AE(t)}willUpdate(e){}_$AE(e){this._$EO?.forEach(e=>e.hostUpdated?.()),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(e)),this.updated(e)}_$EM(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(e){return!0}update(e){this._$Eq&&=this._$Eq.forEach(e=>this._$ET(e,this[e])),this._$EM()}updated(e){}firstUpdated(e){}}Xx.elementStyles=[],Xx.shadowRootOptions={mode:"open"},Xx[Hx("elementProperties")]=new Map,Xx[Hx("finalized")]=new Map,qx?.({ReactiveElement:Xx}),(zx.reactiveElementVersions??=[]).push("2.1.1");
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const Qx=globalThis;let Jx=class extends Xx{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){const e=super.createRenderRoot();return this.renderOptions.renderBefore??=e.firstChild,e}update(e){const t=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(e),this._$Do=Ee(t,this.renderRoot,this.renderOptions)}connectedCallback(){super.connectedCallback(),this._$Do?.setConnected(!0)}disconnectedCallback(){super.disconnectedCallback(),this._$Do?.setConnected(!1)}render(){return ae}};Jx._$litElement$=!0,Jx.finalized=!0,Qx.litElementHydrateSupport?.({LitElement:Jx});const Yx=Qx.litElementPolyfillSupport;Yx?.({LitElement:Jx}),(Qx.litElementVersions??=[]).push("4.2.1");
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const Zx=e=>(t,n)=>{void 0!==n?n.addInitializer(()=>{customElements.define(e,t)}):customElements.define(e,t)},eE={attribute:!0,type:String,converter:Gx,reflect:!1,hasChanged:Kx},tE=(e=eE,t,n)=>{const{kind:r,metadata:i}=n;let s=globalThis.litPropertyMetadata.get(i);if(void 0===s&&globalThis.litPropertyMetadata.set(i,s=new Map),"setter"===r&&((e=Object.create(e)).wrapped=!0),s.set(n.name,e),"accessor"===r){const{name:r}=n;return{set(n){const i=t.get.call(this);t.set.call(this,n),this.requestUpdate(r,i,e)},init(t){return void 0!==t&&this.C(r,void 0,e,t),t}}}if("setter"===r){const{name:r}=n;return function(n){const i=this[r];t.call(this,n),this.requestUpdate(r,i,e)}}throw Error("Unsupported decorator location: "+r)};
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function nE(e){return(t,n)=>"object"==typeof n?tE(e,t,n):((e,t,n)=>{const r=t.hasOwnProperty(n);return t.constructor.createProperty(n,e),r?Object.getOwnPropertyDescriptor(t,n):void 0})(e,t,n)}
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function rE(e){return nE({...e,state:!0,attribute:!1})}
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const iE=(e,t,n)=>(n.configurable=!0,n.enumerable=!0,Reflect.decorate&&"object"!=typeof t&&Object.defineProperty(e,t,n),n);
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function sE(e,t){return(t,n,r)=>iE(t,n,{get(){return(t=>t.renderRoot?.querySelector(e)??null)(this)}})}
/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function oE(e){return(t,n)=>{const{slot:r,selector:i}=e??{},s="slot"+(r?`[name=${r}]`:":not([name])");return iE(t,n,{get(){const t=this.renderRoot?.querySelector(s),n=t?.assignedElements(e)??[];return void 0===i?n:n.filter(e=>e.matches(i))}})}}
/**
 * @license
 * Copyright 2022 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */class aE extends Jx{connectedCallback(){super.connectedCallback(),this.setAttribute("aria-hidden","true")}render(){return oe`<span class="shadow"></span>`}}
/**
 * @license
 * Copyright 2024 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */const lE=Ox`:host,.shadow,.shadow::before,.shadow::after{border-radius:inherit;inset:0;position:absolute;transition-duration:inherit;transition-property:inherit;transition-timing-function:inherit}:host{display:flex;pointer-events:none;transition-property:box-shadow,opacity}.shadow::before,.shadow::after{content:"";transition-property:box-shadow,opacity;--_level: var(--md-elevation-level, 0);--_shadow-color: var(--md-elevation-shadow-color, var(--md-sys-color-shadow, #000))}.shadow::before{box-shadow:0px calc(1px*(clamp(0,var(--_level),1) + clamp(0,var(--_level) - 3,1) + 2*clamp(0,var(--_level) - 4,1))) calc(1px*(2*clamp(0,var(--_level),1) + clamp(0,var(--_level) - 2,1) + clamp(0,var(--_level) - 4,1))) 0px var(--_shadow-color);opacity:.3}.shadow::after{box-shadow:0px calc(1px*(clamp(0,var(--_level),1) + clamp(0,var(--_level) - 1,1) + 2*clamp(0,var(--_level) - 2,3))) calc(1px*(3*clamp(0,var(--_level),2) + 2*clamp(0,var(--_level) - 2,3))) calc(1px*(clamp(0,var(--_level),4) + 2*clamp(0,var(--_level) - 4,1))) var(--_shadow-color);opacity:.15}
`
/**
 * @license
 * Copyright 2022 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */;let cE=class extends aE{};cE.styles=[lE],cE=pr([Zx("md-elevation")],cE);
/**
 * @license
 * Copyright 2023 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */
const uE=Symbol("attachableController");let dE;dE=new MutationObserver(e=>{for(const t of e)t.target[uE]?.hostConnected()});class hE{get htmlFor(){return this.host.getAttribute("for")}set htmlFor(e){null===e?this.host.removeAttribute("for"):this.host.setAttribute("for",e)}get control(){return this.host.hasAttribute("for")?this.htmlFor&&this.host.isConnected?this.host.getRootNode().querySelector(`#${this.htmlFor}`):null:this.currentControl||this.host.parentElement}set control(e){e?this.attach(e):this.detach()}constructor(e,t){this.host=e,this.onControlChange=t,this.currentControl=null,e.addController(this),e[uE]=this,dE?.observe(e,{attributeFilter:["for"]})}attach(e){e!==this.currentControl&&(this.setCurrentControl(e),this.host.removeAttribute("for"))}detach(){this.setCurrentControl(null),this.host.setAttribute("for","")}hostConnected(){this.setCurrentControl(this.control)}hostDisconnected(){this.setCurrentControl(null)}setCurrentControl(e){this.onControlChange(this.currentControl,e),this.currentControl=e}}
/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */const pE=["focusin","focusout","pointerdown"];class fE extends Jx{constructor(){super(...arguments),this.visible=!1,this.inward=!1,this.attachableController=new hE(this,this.onControlChange.bind(this))}get htmlFor(){return this.attachableController.htmlFor}set htmlFor(e){this.attachableController.htmlFor=e}get control(){return this.attachableController.control}set control(e){this.attachableController.control=e}attach(e){this.attachableController.attach(e)}detach(){this.attachableController.detach()}connectedCallback(){super.connectedCallback(),this.setAttribute("aria-hidden","true")}handleEvent(e){if(!e[mE]){switch(e.type){default:return;case"focusin":this.visible=this.control?.matches(":focus-visible")??!1;break;case"focusout":case"pointerdown":this.visible=!1}e[mE]=!0}}onControlChange(e,t){for(const n of pE)e?.removeEventListener(n,this),t?.addEventListener(n,this)}update(e){e.has("visible")&&this.dispatchEvent(new Event("visibility-changed")),super.update(e)}}pr([nE({type:Boolean,reflect:!0})],fE.prototype,"visible",void 0),pr([nE({type:Boolean,reflect:!0})],fE.prototype,"inward",void 0);const mE=Symbol("handledByFocusRing"),gE=Ox`:host{animation-delay:0s,calc(var(--md-focus-ring-duration, 600ms)*.25);animation-duration:calc(var(--md-focus-ring-duration, 600ms)*.25),calc(var(--md-focus-ring-duration, 600ms)*.75);animation-timing-function:cubic-bezier(0.2, 0, 0, 1);box-sizing:border-box;color:var(--md-focus-ring-color, var(--md-sys-color-secondary, #625b71));display:none;pointer-events:none;position:absolute}:host([visible]){display:flex}:host(:not([inward])){animation-name:outward-grow,outward-shrink;border-end-end-radius:calc(var(--md-focus-ring-shape-end-end, var(--md-focus-ring-shape, var(--md-sys-shape-corner-full, 9999px))) + var(--md-focus-ring-outward-offset, 2px));border-end-start-radius:calc(var(--md-focus-ring-shape-end-start, var(--md-focus-ring-shape, var(--md-sys-shape-corner-full, 9999px))) + var(--md-focus-ring-outward-offset, 2px));border-start-end-radius:calc(var(--md-focus-ring-shape-start-end, var(--md-focus-ring-shape, var(--md-sys-shape-corner-full, 9999px))) + var(--md-focus-ring-outward-offset, 2px));border-start-start-radius:calc(var(--md-focus-ring-shape-start-start, var(--md-focus-ring-shape, var(--md-sys-shape-corner-full, 9999px))) + var(--md-focus-ring-outward-offset, 2px));inset:calc(-1*var(--md-focus-ring-outward-offset, 2px));outline:var(--md-focus-ring-width, 3px) solid currentColor}:host([inward]){animation-name:inward-grow,inward-shrink;border-end-end-radius:calc(var(--md-focus-ring-shape-end-end, var(--md-focus-ring-shape, var(--md-sys-shape-corner-full, 9999px))) - var(--md-focus-ring-inward-offset, 0px));border-end-start-radius:calc(var(--md-focus-ring-shape-end-start, var(--md-focus-ring-shape, var(--md-sys-shape-corner-full, 9999px))) - var(--md-focus-ring-inward-offset, 0px));border-start-end-radius:calc(var(--md-focus-ring-shape-start-end, var(--md-focus-ring-shape, var(--md-sys-shape-corner-full, 9999px))) - var(--md-focus-ring-inward-offset, 0px));border-start-start-radius:calc(var(--md-focus-ring-shape-start-start, var(--md-focus-ring-shape, var(--md-sys-shape-corner-full, 9999px))) - var(--md-focus-ring-inward-offset, 0px));border:var(--md-focus-ring-width, 3px) solid currentColor;inset:var(--md-focus-ring-inward-offset, 0px)}@keyframes outward-grow{from{outline-width:0}to{outline-width:var(--md-focus-ring-active-width, 8px)}}@keyframes outward-shrink{from{outline-width:var(--md-focus-ring-active-width, 8px)}}@keyframes inward-grow{from{border-width:0}to{border-width:var(--md-focus-ring-active-width, 8px)}}@keyframes inward-shrink{from{border-width:var(--md-focus-ring-active-width, 8px)}}@media(prefers-reduced-motion){:host{animation:none}}
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
 */let vE=class extends fE{};vE.styles=[gE],vE=pr([Zx("md-focus-ring")],vE);
/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const yE=F(class extends V{constructor(e){if(super(e),e.type!==$||"class"!==e.name||e.strings?.length>2)throw Error("`classMap()` can only be used in the `class` attribute and must be the only part in the attribute.")}render(e){return" "+Object.keys(e).filter(t=>e[t]).join(" ")+" "}update(e,[t]){if(void 0===this.st){this.st=new Set,void 0!==e.strings&&(this.nt=new Set(e.strings.join(" ").split(/\s/).filter(e=>""!==e)));for(const e in t)t[e]&&!this.nt?.has(e)&&this.st.add(e);return this.render(t)}const n=e.element.classList;for(const e of this.st)e in t||(n.remove(e),this.st.delete(e));for(const e in t){const r=!!t[e];r===this.st.has(e)||this.nt?.has(e)||(r?(n.add(e),this.st.add(e)):(n.remove(e),this.st.delete(e)))}return ae}}),bE="cubic-bezier(0.2, 0, 0, 1)";
/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */var wE;!function(e){e[e.INACTIVE=0]="INACTIVE",e[e.TOUCH_DELAY=1]="TOUCH_DELAY",e[e.HOLDING=2]="HOLDING",e[e.WAITING_FOR_CLICK=3]="WAITING_FOR_CLICK"}(wE||(wE={}));const _E=["click","contextmenu","pointercancel","pointerdown","pointerenter","pointerleave","pointerup"],xE=window.matchMedia("(forced-colors: active)");class EE extends Jx{constructor(){super(...arguments),this.disabled=!1,this.hovered=!1,this.pressed=!1,this.rippleSize="",this.rippleScale="",this.initialSize=0,this.state=wE.INACTIVE,this.attachableController=new hE(this,this.onControlChange.bind(this))}get htmlFor(){return this.attachableController.htmlFor}set htmlFor(e){this.attachableController.htmlFor=e}get control(){return this.attachableController.control}set control(e){this.attachableController.control=e}attach(e){this.attachableController.attach(e)}detach(){this.attachableController.detach()}connectedCallback(){super.connectedCallback(),this.setAttribute("aria-hidden","true")}render(){const e={hovered:this.hovered,pressed:this.pressed};return oe`<div class="surface ${yE(e)}"></div>`}update(e){e.has("disabled")&&this.disabled&&(this.hovered=!1,this.pressed=!1),super.update(e)}handlePointerenter(e){this.shouldReactToEvent(e)&&(this.hovered=!0)}handlePointerleave(e){this.shouldReactToEvent(e)&&(this.hovered=!1,this.state!==wE.INACTIVE&&this.endPressAnimation())}handlePointerup(e){if(this.shouldReactToEvent(e)){if(this.state!==wE.HOLDING)return this.state===wE.TOUCH_DELAY?(this.state=wE.WAITING_FOR_CLICK,void this.startPressAnimation(this.rippleStartEvent)):void 0;this.state=wE.WAITING_FOR_CLICK}}async handlePointerdown(e){if(this.shouldReactToEvent(e)){if(this.rippleStartEvent=e,!this.isTouch(e))return this.state=wE.WAITING_FOR_CLICK,void this.startPressAnimation(e);this.state=wE.TOUCH_DELAY,await new Promise(e=>{setTimeout(e,150)}),this.state===wE.TOUCH_DELAY&&(this.state=wE.HOLDING,this.startPressAnimation(e))}}handleClick(){this.disabled||(this.state!==wE.WAITING_FOR_CLICK?this.state===wE.INACTIVE&&(this.startPressAnimation(),this.endPressAnimation()):this.endPressAnimation())}handlePointercancel(e){this.shouldReactToEvent(e)&&this.endPressAnimation()}handleContextmenu(){this.disabled||this.endPressAnimation()}determineRippleSize(){const{height:e,width:t}=this.getBoundingClientRect(),n=Math.max(e,t),r=Math.max(.35*n,75),i=this.currentCSSZoom??1,s=Math.floor(.2*n/i),o=Math.sqrt(t**2+e**2)+10;this.initialSize=s;const a=(o+r)/s;this.rippleScale=""+a/i,this.rippleSize=`${s}px`}getNormalizedPointerEventCoords(e){const{scrollX:t,scrollY:n}=window,{left:r,top:i}=this.getBoundingClientRect(),s=t+r,o=n+i,{pageX:a,pageY:l}=e,c=this.currentCSSZoom??1;return{x:(a-s)/c,y:(l-o)/c}}getTranslationCoordinates(e){const{height:t,width:n}=this.getBoundingClientRect(),r=this.currentCSSZoom??1,i={x:(n/r-this.initialSize)/2,y:(t/r-this.initialSize)/2};let s;return s=e instanceof PointerEvent?this.getNormalizedPointerEventCoords(e):{x:n/r/2,y:t/r/2},s={x:s.x-this.initialSize/2,y:s.y-this.initialSize/2},{startPoint:s,endPoint:i}}startPressAnimation(e){if(!this.mdRoot)return;this.pressed=!0,this.growAnimation?.cancel(),this.determineRippleSize();const{startPoint:t,endPoint:n}=this.getTranslationCoordinates(e),r=`${t.x}px, ${t.y}px`,i=`${n.x}px, ${n.y}px`;this.growAnimation=this.mdRoot.animate({top:[0,0],left:[0,0],height:[this.rippleSize,this.rippleSize],width:[this.rippleSize,this.rippleSize],transform:[`translate(${r}) scale(1)`,`translate(${i}) scale(${this.rippleScale})`]},{pseudoElement:"::after",duration:450,easing:bE,fill:"forwards"})}async endPressAnimation(){this.rippleStartEvent=void 0,this.state=wE.INACTIVE;const e=this.growAnimation;let t=1/0;"number"==typeof e?.currentTime?t=e.currentTime:e?.currentTime&&(t=e.currentTime.to("ms").value),t>=225?this.pressed=!1:(await new Promise(e=>{setTimeout(e,225-t)}),this.growAnimation===e&&(this.pressed=!1))}shouldReactToEvent(e){if(this.disabled||!e.isPrimary)return!1;if(this.rippleStartEvent&&this.rippleStartEvent.pointerId!==e.pointerId)return!1;if("pointerenter"===e.type||"pointerleave"===e.type)return!this.isTouch(e);const t=1===e.buttons;return this.isTouch(e)||t}isTouch({pointerType:e}){return"touch"===e}async handleEvent(e){if(!xE?.matches)switch(e.type){case"click":this.handleClick();break;case"contextmenu":this.handleContextmenu();break;case"pointercancel":this.handlePointercancel(e);break;case"pointerdown":await this.handlePointerdown(e);break;case"pointerenter":this.handlePointerenter(e);break;case"pointerleave":this.handlePointerleave(e);break;case"pointerup":this.handlePointerup(e)}}onControlChange(e,t){for(const n of _E)e?.removeEventListener(n,this),t?.addEventListener(n,this)}}pr([nE({type:Boolean,reflect:!0})],EE.prototype,"disabled",void 0),pr([rE()],EE.prototype,"hovered",void 0),pr([rE()],EE.prototype,"pressed",void 0),pr([sE(".surface")],EE.prototype,"mdRoot",void 0);
/**
 * @license
 * Copyright 2024 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */
const TE=Ox`:host{display:flex;margin:auto;pointer-events:none}:host([disabled]){display:none}@media(forced-colors: active){:host{display:none}}:host,.surface{border-radius:inherit;position:absolute;inset:0;overflow:hidden}.surface{-webkit-tap-highlight-color:rgba(0,0,0,0)}.surface::before,.surface::after{content:"";opacity:0;position:absolute}.surface::before{background-color:var(--md-ripple-hover-color, var(--md-sys-color-on-surface, #1d1b20));inset:0;transition:opacity 15ms linear,background-color 15ms linear}.surface::after{background:radial-gradient(closest-side, var(--md-ripple-pressed-color, var(--md-sys-color-on-surface, #1d1b20)) max(100% - 70px, 65%), transparent 100%);transform-origin:center center;transition:opacity 375ms linear}.hovered::before{background-color:var(--md-ripple-hover-color, var(--md-sys-color-on-surface, #1d1b20));opacity:var(--md-ripple-hover-opacity, 0.08)}.pressed::after{opacity:var(--md-ripple-pressed-opacity, 0.12);transition-duration:105ms}
`
/**
 * @license
 * Copyright 2022 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */;let IE=class extends EE{};IE.styles=[TE],IE=pr([Zx("md-ripple")],IE);
/**
 * @license
 * Copyright 2023 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */
const SE=["role","ariaAtomic","ariaAutoComplete","ariaBusy","ariaChecked","ariaColCount","ariaColIndex","ariaColSpan","ariaCurrent","ariaDisabled","ariaExpanded","ariaHasPopup","ariaHidden","ariaInvalid","ariaKeyShortcuts","ariaLabel","ariaLevel","ariaLive","ariaModal","ariaMultiLine","ariaMultiSelectable","ariaOrientation","ariaPlaceholder","ariaPosInSet","ariaPressed","ariaReadOnly","ariaRequired","ariaRoleDescription","ariaRowCount","ariaRowIndex","ariaRowSpan","ariaSelected","ariaSetSize","ariaSort","ariaValueMax","ariaValueMin","ariaValueNow","ariaValueText"],CE=SE.map(AE);function kE(e){return CE.includes(e)}function AE(e){return e.replace("aria","aria-").replace(/Elements?/g,"").toLowerCase()}
/**
 * @license
 * Copyright 2023 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */const DE=Symbol("privateIgnoreAttributeChangesFor");function NE(e){var t;class n extends e{constructor(){super(...arguments),this[t]=new Set}attributeChangedCallback(e,t,n){if(!kE(e))return void super.attributeChangedCallback(e,t,n);if(this[DE].has(e))return;this[DE].add(e),this.removeAttribute(e),this[DE].delete(e);const r=OE(e);null===n?delete this.dataset[r]:this.dataset[r]=n,this.requestUpdate(OE(e),t)}getAttribute(e){return kE(e)?super.getAttribute(RE(e)):super.getAttribute(e)}removeAttribute(e){super.removeAttribute(e),kE(e)&&(super.removeAttribute(RE(e)),this.requestUpdate())}}return t=DE,function(e){for(const t of SE){const n=AE(t),r=RE(n),i=OE(n);e.createProperty(t,{attribute:n,noAccessor:!0}),e.createProperty(Symbol(r),{attribute:r,noAccessor:!0}),Object.defineProperty(e.prototype,t,{configurable:!0,enumerable:!0,get(){return this.dataset[i]??null},set(e){const n=this.dataset[i]??null;e!==n&&(null===e?delete this.dataset[i]:this.dataset[i]=e,this.requestUpdate(t,n))}})}}(n),n}function RE(e){return`data-${e}`}function OE(e){return e.replace(/-\w/,e=>e[1].toUpperCase())}
/**
 * @license
 * Copyright 2023 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */const PE=Symbol("internals"),LE=Symbol("privateInternals");function $E(e){return class extends e{get[PE](){return this[LE]||(this[LE]=this.attachInternals()),this[LE]}}}
/**
 * @license
 * Copyright 2023 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */function ME(e){return e.currentTarget===e.target&&(e.composedPath()[0]===e.target&&(!e.target.disabled&&!function(e){const t=UE;t&&(e.preventDefault(),e.stopImmediatePropagation());return async function(){UE=!0,await null,UE=!1}
/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */(),t}(e)))}let UE=!1;const FE=NE($E(Jx));class VE extends FE{get name(){return this.getAttribute("name")??""}set name(e){this.setAttribute("name",e)}get form(){return this[PE].form}constructor(){super(),this.disabled=!1,this.softDisabled=!1,this.href="",this.download="",this.target="",this.trailingIcon=!1,this.hasIcon=!1,this.type="submit",this.value="",this.addEventListener("click",this.handleClick.bind(this))}focus(){this.buttonElement?.focus()}blur(){this.buttonElement?.blur()}render(){const e=this.disabled||this.softDisabled,t=this.href?this.renderLink():this.renderButton(),n=this.href?"link":"button";return oe`
      ${this.renderElevationOrOutline?.()}
      <div class="background"></div>
      <md-focus-ring part="focus-ring" for=${n}></md-focus-ring>
      <md-ripple
        part="ripple"
        for=${n}
        ?disabled="${e}"></md-ripple>
      ${t}
    `}renderButton(){const{ariaLabel:e,ariaHasPopup:t,ariaExpanded:n}=this;return oe`<button
      id="button"
      class="button"
      ?disabled=${this.disabled}
      aria-disabled=${this.softDisabled||le}
      aria-label="${e||le}"
      aria-haspopup="${t||le}"
      aria-expanded="${n||le}">
      ${this.renderContent()}
    </button>`}renderLink(){const{ariaLabel:e,ariaHasPopup:t,ariaExpanded:n}=this;return oe`<a
      id="link"
      class="button"
      aria-label="${e||le}"
      aria-haspopup="${t||le}"
      aria-expanded="${n||le}"
      aria-disabled=${this.disabled||this.softDisabled||le}
      tabindex="${this.disabled&&!this.softDisabled?-1:le}"
      href=${this.href}
      download=${this.download||le}
      target=${this.target||le}
      >${this.renderContent()}
    </a>`}renderContent(){const e=oe`<slot
      name="icon"
      @slotchange="${this.handleSlotChange}"></slot>`;return oe`
      <span class="touch"></span>
      ${this.trailingIcon?le:e}
      <span class="label"><slot></slot></span>
      ${this.trailingIcon?e:le}
    `}handleClick(e){if(this.softDisabled||this.disabled&&this.href)return e.stopImmediatePropagation(),void e.preventDefault();ME(e)&&this.buttonElement&&(this.focus(),
/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */
function(e){const t=new MouseEvent("click",{bubbles:!0});e.dispatchEvent(t)}(this.buttonElement))}handleSlotChange(){this.hasIcon=this.assignedIcons.length>0}}VE.addInitializer(e=>{const t=e;t.addEventListener("click",async e=>{const{type:n,[PE]:r}=t,{form:i}=r;i&&"button"!==n&&(await new Promise(e=>{setTimeout(e)}),e.defaultPrevented||("reset"!==n?(i.addEventListener("submit",e=>{Object.defineProperty(e,"submitter",{configurable:!0,enumerable:!0,get:()=>t})},{capture:!0,once:!0}),r.setFormValue(t.value),i.requestSubmit()):i.reset()))})}),VE.formAssociated=!0,VE.shadowRootOptions={mode:"open",delegatesFocus:!0},pr([nE({type:Boolean,reflect:!0})],VE.prototype,"disabled",void 0),pr([nE({type:Boolean,attribute:"soft-disabled",reflect:!0})],VE.prototype,"softDisabled",void 0),pr([nE()],VE.prototype,"href",void 0),pr([nE()],VE.prototype,"download",void 0),pr([nE()],VE.prototype,"target",void 0),pr([nE({type:Boolean,attribute:"trailing-icon",reflect:!0})],VE.prototype,"trailingIcon",void 0),pr([nE({type:Boolean,attribute:"has-icon",reflect:!0})],VE.prototype,"hasIcon",void 0),pr([nE()],VE.prototype,"type",void 0),pr([nE({reflect:!0})],VE.prototype,"value",void 0),pr([sE(".button")],VE.prototype,"buttonElement",void 0),pr([oE({slot:"icon",flatten:!0})],VE.prototype,"assignedIcons",void 0);
/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */
class zE extends VE{renderElevationOrOutline(){return oe`<md-elevation part="elevation"></md-elevation>`}}
/**
 * @license
 * Copyright 2024 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */const jE=Ox`:host{--_container-color: var(--md-filled-button-container-color, var(--md-sys-color-primary, #6750a4));--_container-elevation: var(--md-filled-button-container-elevation, 0);--_container-height: var(--md-filled-button-container-height, 40px);--_container-shadow-color: var(--md-filled-button-container-shadow-color, var(--md-sys-color-shadow, #000));--_disabled-container-color: var(--md-filled-button-disabled-container-color, var(--md-sys-color-on-surface, #1d1b20));--_disabled-container-elevation: var(--md-filled-button-disabled-container-elevation, 0);--_disabled-container-opacity: var(--md-filled-button-disabled-container-opacity, 0.12);--_disabled-label-text-color: var(--md-filled-button-disabled-label-text-color, var(--md-sys-color-on-surface, #1d1b20));--_disabled-label-text-opacity: var(--md-filled-button-disabled-label-text-opacity, 0.38);--_focus-container-elevation: var(--md-filled-button-focus-container-elevation, 0);--_focus-label-text-color: var(--md-filled-button-focus-label-text-color, var(--md-sys-color-on-primary, #fff));--_hover-container-elevation: var(--md-filled-button-hover-container-elevation, 1);--_hover-label-text-color: var(--md-filled-button-hover-label-text-color, var(--md-sys-color-on-primary, #fff));--_hover-state-layer-color: var(--md-filled-button-hover-state-layer-color, var(--md-sys-color-on-primary, #fff));--_hover-state-layer-opacity: var(--md-filled-button-hover-state-layer-opacity, 0.08);--_label-text-color: var(--md-filled-button-label-text-color, var(--md-sys-color-on-primary, #fff));--_label-text-font: var(--md-filled-button-label-text-font, var(--md-sys-typescale-label-large-font, var(--md-ref-typeface-plain, Roboto)));--_label-text-line-height: var(--md-filled-button-label-text-line-height, var(--md-sys-typescale-label-large-line-height, 1.25rem));--_label-text-size: var(--md-filled-button-label-text-size, var(--md-sys-typescale-label-large-size, 0.875rem));--_label-text-weight: var(--md-filled-button-label-text-weight, var(--md-sys-typescale-label-large-weight, var(--md-ref-typeface-weight-medium, 500)));--_pressed-container-elevation: var(--md-filled-button-pressed-container-elevation, 0);--_pressed-label-text-color: var(--md-filled-button-pressed-label-text-color, var(--md-sys-color-on-primary, #fff));--_pressed-state-layer-color: var(--md-filled-button-pressed-state-layer-color, var(--md-sys-color-on-primary, #fff));--_pressed-state-layer-opacity: var(--md-filled-button-pressed-state-layer-opacity, 0.12);--_disabled-icon-color: var(--md-filled-button-disabled-icon-color, var(--md-sys-color-on-surface, #1d1b20));--_disabled-icon-opacity: var(--md-filled-button-disabled-icon-opacity, 0.38);--_focus-icon-color: var(--md-filled-button-focus-icon-color, var(--md-sys-color-on-primary, #fff));--_hover-icon-color: var(--md-filled-button-hover-icon-color, var(--md-sys-color-on-primary, #fff));--_icon-color: var(--md-filled-button-icon-color, var(--md-sys-color-on-primary, #fff));--_icon-size: var(--md-filled-button-icon-size, 18px);--_pressed-icon-color: var(--md-filled-button-pressed-icon-color, var(--md-sys-color-on-primary, #fff));--_container-shape-start-start: var(--md-filled-button-container-shape-start-start, var(--md-filled-button-container-shape, var(--md-sys-shape-corner-full, 9999px)));--_container-shape-start-end: var(--md-filled-button-container-shape-start-end, var(--md-filled-button-container-shape, var(--md-sys-shape-corner-full, 9999px)));--_container-shape-end-end: var(--md-filled-button-container-shape-end-end, var(--md-filled-button-container-shape, var(--md-sys-shape-corner-full, 9999px)));--_container-shape-end-start: var(--md-filled-button-container-shape-end-start, var(--md-filled-button-container-shape, var(--md-sys-shape-corner-full, 9999px)));--_leading-space: var(--md-filled-button-leading-space, 24px);--_trailing-space: var(--md-filled-button-trailing-space, 24px);--_with-leading-icon-leading-space: var(--md-filled-button-with-leading-icon-leading-space, 16px);--_with-leading-icon-trailing-space: var(--md-filled-button-with-leading-icon-trailing-space, 24px);--_with-trailing-icon-leading-space: var(--md-filled-button-with-trailing-icon-leading-space, 24px);--_with-trailing-icon-trailing-space: var(--md-filled-button-with-trailing-icon-trailing-space, 16px)}
`,BE=Ox`md-elevation{transition-duration:280ms}:host(:is([disabled],[soft-disabled])) md-elevation{transition:none}md-elevation{--md-elevation-level: var(--_container-elevation);--md-elevation-shadow-color: var(--_container-shadow-color)}:host(:focus-within) md-elevation{--md-elevation-level: var(--_focus-container-elevation)}:host(:hover) md-elevation{--md-elevation-level: var(--_hover-container-elevation)}:host(:active) md-elevation{--md-elevation-level: var(--_pressed-container-elevation)}:host(:is([disabled],[soft-disabled])) md-elevation{--md-elevation-level: var(--_disabled-container-elevation)}
`,qE=Ox`:host{border-start-start-radius:var(--_container-shape-start-start);border-start-end-radius:var(--_container-shape-start-end);border-end-start-radius:var(--_container-shape-end-start);border-end-end-radius:var(--_container-shape-end-end);box-sizing:border-box;cursor:pointer;display:inline-flex;gap:8px;min-height:var(--_container-height);outline:none;padding-block:calc((var(--_container-height) - max(var(--_label-text-line-height),var(--_icon-size)))/2);padding-inline-start:var(--_leading-space);padding-inline-end:var(--_trailing-space);place-content:center;place-items:center;position:relative;font-family:var(--_label-text-font);font-size:var(--_label-text-size);line-height:var(--_label-text-line-height);font-weight:var(--_label-text-weight);text-overflow:ellipsis;text-wrap:nowrap;user-select:none;-webkit-tap-highlight-color:rgba(0,0,0,0);vertical-align:top;--md-ripple-hover-color: var(--_hover-state-layer-color);--md-ripple-pressed-color: var(--_pressed-state-layer-color);--md-ripple-hover-opacity: var(--_hover-state-layer-opacity);--md-ripple-pressed-opacity: var(--_pressed-state-layer-opacity)}md-focus-ring{--md-focus-ring-shape-start-start: var(--_container-shape-start-start);--md-focus-ring-shape-start-end: var(--_container-shape-start-end);--md-focus-ring-shape-end-end: var(--_container-shape-end-end);--md-focus-ring-shape-end-start: var(--_container-shape-end-start)}:host(:is([disabled],[soft-disabled])){cursor:default;pointer-events:none}.button{border-radius:inherit;cursor:inherit;display:inline-flex;align-items:center;justify-content:center;border:none;outline:none;-webkit-appearance:none;vertical-align:middle;background:rgba(0,0,0,0);text-decoration:none;min-width:calc(64px - var(--_leading-space) - var(--_trailing-space));width:100%;z-index:0;height:100%;font:inherit;color:var(--_label-text-color);padding:0;gap:inherit;text-transform:inherit}.button::-moz-focus-inner{padding:0;border:0}:host(:hover) .button{color:var(--_hover-label-text-color)}:host(:focus-within) .button{color:var(--_focus-label-text-color)}:host(:active) .button{color:var(--_pressed-label-text-color)}.background{background:var(--_container-color);border-radius:inherit;inset:0;position:absolute}.label{overflow:hidden}:is(.button,.label,.label slot),.label ::slotted(*){text-overflow:inherit}:host(:is([disabled],[soft-disabled])) .label{color:var(--_disabled-label-text-color);opacity:var(--_disabled-label-text-opacity)}:host(:is([disabled],[soft-disabled])) .background{background:var(--_disabled-container-color);opacity:var(--_disabled-container-opacity)}@media(forced-colors: active){.background{border:1px solid CanvasText}:host(:is([disabled],[soft-disabled])){--_disabled-icon-color: GrayText;--_disabled-icon-opacity: 1;--_disabled-container-opacity: 1;--_disabled-label-text-color: GrayText;--_disabled-label-text-opacity: 1}}:host([has-icon]:not([trailing-icon])){padding-inline-start:var(--_with-leading-icon-leading-space);padding-inline-end:var(--_with-leading-icon-trailing-space)}:host([has-icon][trailing-icon]){padding-inline-start:var(--_with-trailing-icon-leading-space);padding-inline-end:var(--_with-trailing-icon-trailing-space)}::slotted([slot=icon]){display:inline-flex;position:relative;writing-mode:horizontal-tb;fill:currentColor;flex-shrink:0;color:var(--_icon-color);font-size:var(--_icon-size);inline-size:var(--_icon-size);block-size:var(--_icon-size)}:host(:hover) ::slotted([slot=icon]){color:var(--_hover-icon-color)}:host(:focus-within) ::slotted([slot=icon]){color:var(--_focus-icon-color)}:host(:active) ::slotted([slot=icon]){color:var(--_pressed-icon-color)}:host(:is([disabled],[soft-disabled])) ::slotted([slot=icon]){color:var(--_disabled-icon-color);opacity:var(--_disabled-icon-opacity)}.touch{position:absolute;top:50%;height:48px;left:0;right:0;transform:translateY(-50%)}:host([touch-target=wrapper]){margin:max(0px,(48px - var(--_container-height))/2) 0}:host([touch-target=none]) .touch{display:none}
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
 */let HE=class extends zE{};HE.styles=[qE,BE,jE],HE=pr([Zx("md-filled-button")],HE);
/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */
class GE extends VE{}
/**
 * @license
 * Copyright 2024 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */const KE=Ox`:host{--_container-height: var(--md-text-button-container-height, 40px);--_disabled-label-text-color: var(--md-text-button-disabled-label-text-color, var(--md-sys-color-on-surface, #1d1b20));--_disabled-label-text-opacity: var(--md-text-button-disabled-label-text-opacity, 0.38);--_focus-label-text-color: var(--md-text-button-focus-label-text-color, var(--md-sys-color-primary, #6750a4));--_hover-label-text-color: var(--md-text-button-hover-label-text-color, var(--md-sys-color-primary, #6750a4));--_hover-state-layer-color: var(--md-text-button-hover-state-layer-color, var(--md-sys-color-primary, #6750a4));--_hover-state-layer-opacity: var(--md-text-button-hover-state-layer-opacity, 0.08);--_label-text-color: var(--md-text-button-label-text-color, var(--md-sys-color-primary, #6750a4));--_label-text-font: var(--md-text-button-label-text-font, var(--md-sys-typescale-label-large-font, var(--md-ref-typeface-plain, Roboto)));--_label-text-line-height: var(--md-text-button-label-text-line-height, var(--md-sys-typescale-label-large-line-height, 1.25rem));--_label-text-size: var(--md-text-button-label-text-size, var(--md-sys-typescale-label-large-size, 0.875rem));--_label-text-weight: var(--md-text-button-label-text-weight, var(--md-sys-typescale-label-large-weight, var(--md-ref-typeface-weight-medium, 500)));--_pressed-label-text-color: var(--md-text-button-pressed-label-text-color, var(--md-sys-color-primary, #6750a4));--_pressed-state-layer-color: var(--md-text-button-pressed-state-layer-color, var(--md-sys-color-primary, #6750a4));--_pressed-state-layer-opacity: var(--md-text-button-pressed-state-layer-opacity, 0.12);--_disabled-icon-color: var(--md-text-button-disabled-icon-color, var(--md-sys-color-on-surface, #1d1b20));--_disabled-icon-opacity: var(--md-text-button-disabled-icon-opacity, 0.38);--_focus-icon-color: var(--md-text-button-focus-icon-color, var(--md-sys-color-primary, #6750a4));--_hover-icon-color: var(--md-text-button-hover-icon-color, var(--md-sys-color-primary, #6750a4));--_icon-color: var(--md-text-button-icon-color, var(--md-sys-color-primary, #6750a4));--_icon-size: var(--md-text-button-icon-size, 18px);--_pressed-icon-color: var(--md-text-button-pressed-icon-color, var(--md-sys-color-primary, #6750a4));--_container-shape-start-start: var(--md-text-button-container-shape-start-start, var(--md-text-button-container-shape, var(--md-sys-shape-corner-full, 9999px)));--_container-shape-start-end: var(--md-text-button-container-shape-start-end, var(--md-text-button-container-shape, var(--md-sys-shape-corner-full, 9999px)));--_container-shape-end-end: var(--md-text-button-container-shape-end-end, var(--md-text-button-container-shape, var(--md-sys-shape-corner-full, 9999px)));--_container-shape-end-start: var(--md-text-button-container-shape-end-start, var(--md-text-button-container-shape, var(--md-sys-shape-corner-full, 9999px)));--_leading-space: var(--md-text-button-leading-space, 12px);--_trailing-space: var(--md-text-button-trailing-space, 12px);--_with-leading-icon-leading-space: var(--md-text-button-with-leading-icon-leading-space, 12px);--_with-leading-icon-trailing-space: var(--md-text-button-with-leading-icon-trailing-space, 16px);--_with-trailing-icon-leading-space: var(--md-text-button-with-trailing-icon-leading-space, 16px);--_with-trailing-icon-trailing-space: var(--md-text-button-with-trailing-icon-trailing-space, 12px);--_container-color: none;--_disabled-container-color: none;--_disabled-container-opacity: 0}
`
/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */;let WE=class extends GE{};WE.styles=[qE,KE],WE=pr([Zx("md-text-button")],WE);
/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */
class XE extends VE{renderElevationOrOutline(){return oe`<md-elevation part="elevation"></md-elevation>`}}
/**
 * @license
 * Copyright 2024 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */const QE=Ox`:host{--_container-color: var(--md-filled-tonal-button-container-color, var(--md-sys-color-secondary-container, #e8def8));--_container-elevation: var(--md-filled-tonal-button-container-elevation, 0);--_container-height: var(--md-filled-tonal-button-container-height, 40px);--_container-shadow-color: var(--md-filled-tonal-button-container-shadow-color, var(--md-sys-color-shadow, #000));--_disabled-container-color: var(--md-filled-tonal-button-disabled-container-color, var(--md-sys-color-on-surface, #1d1b20));--_disabled-container-elevation: var(--md-filled-tonal-button-disabled-container-elevation, 0);--_disabled-container-opacity: var(--md-filled-tonal-button-disabled-container-opacity, 0.12);--_disabled-label-text-color: var(--md-filled-tonal-button-disabled-label-text-color, var(--md-sys-color-on-surface, #1d1b20));--_disabled-label-text-opacity: var(--md-filled-tonal-button-disabled-label-text-opacity, 0.38);--_focus-container-elevation: var(--md-filled-tonal-button-focus-container-elevation, 0);--_focus-label-text-color: var(--md-filled-tonal-button-focus-label-text-color, var(--md-sys-color-on-secondary-container, #1d192b));--_hover-container-elevation: var(--md-filled-tonal-button-hover-container-elevation, 1);--_hover-label-text-color: var(--md-filled-tonal-button-hover-label-text-color, var(--md-sys-color-on-secondary-container, #1d192b));--_hover-state-layer-color: var(--md-filled-tonal-button-hover-state-layer-color, var(--md-sys-color-on-secondary-container, #1d192b));--_hover-state-layer-opacity: var(--md-filled-tonal-button-hover-state-layer-opacity, 0.08);--_label-text-color: var(--md-filled-tonal-button-label-text-color, var(--md-sys-color-on-secondary-container, #1d192b));--_label-text-font: var(--md-filled-tonal-button-label-text-font, var(--md-sys-typescale-label-large-font, var(--md-ref-typeface-plain, Roboto)));--_label-text-line-height: var(--md-filled-tonal-button-label-text-line-height, var(--md-sys-typescale-label-large-line-height, 1.25rem));--_label-text-size: var(--md-filled-tonal-button-label-text-size, var(--md-sys-typescale-label-large-size, 0.875rem));--_label-text-weight: var(--md-filled-tonal-button-label-text-weight, var(--md-sys-typescale-label-large-weight, var(--md-ref-typeface-weight-medium, 500)));--_pressed-container-elevation: var(--md-filled-tonal-button-pressed-container-elevation, 0);--_pressed-label-text-color: var(--md-filled-tonal-button-pressed-label-text-color, var(--md-sys-color-on-secondary-container, #1d192b));--_pressed-state-layer-color: var(--md-filled-tonal-button-pressed-state-layer-color, var(--md-sys-color-on-secondary-container, #1d192b));--_pressed-state-layer-opacity: var(--md-filled-tonal-button-pressed-state-layer-opacity, 0.12);--_disabled-icon-color: var(--md-filled-tonal-button-disabled-icon-color, var(--md-sys-color-on-surface, #1d1b20));--_disabled-icon-opacity: var(--md-filled-tonal-button-disabled-icon-opacity, 0.38);--_focus-icon-color: var(--md-filled-tonal-button-focus-icon-color, var(--md-sys-color-on-secondary-container, #1d192b));--_hover-icon-color: var(--md-filled-tonal-button-hover-icon-color, var(--md-sys-color-on-secondary-container, #1d192b));--_icon-color: var(--md-filled-tonal-button-icon-color, var(--md-sys-color-on-secondary-container, #1d192b));--_icon-size: var(--md-filled-tonal-button-icon-size, 18px);--_pressed-icon-color: var(--md-filled-tonal-button-pressed-icon-color, var(--md-sys-color-on-secondary-container, #1d192b));--_container-shape-start-start: var(--md-filled-tonal-button-container-shape-start-start, var(--md-filled-tonal-button-container-shape, var(--md-sys-shape-corner-full, 9999px)));--_container-shape-start-end: var(--md-filled-tonal-button-container-shape-start-end, var(--md-filled-tonal-button-container-shape, var(--md-sys-shape-corner-full, 9999px)));--_container-shape-end-end: var(--md-filled-tonal-button-container-shape-end-end, var(--md-filled-tonal-button-container-shape, var(--md-sys-shape-corner-full, 9999px)));--_container-shape-end-start: var(--md-filled-tonal-button-container-shape-end-start, var(--md-filled-tonal-button-container-shape, var(--md-sys-shape-corner-full, 9999px)));--_leading-space: var(--md-filled-tonal-button-leading-space, 24px);--_trailing-space: var(--md-filled-tonal-button-trailing-space, 24px);--_with-leading-icon-leading-space: var(--md-filled-tonal-button-with-leading-icon-leading-space, 16px);--_with-leading-icon-trailing-space: var(--md-filled-tonal-button-with-leading-icon-trailing-space, 24px);--_with-trailing-icon-leading-space: var(--md-filled-tonal-button-with-trailing-icon-leading-space, 24px);--_with-trailing-icon-trailing-space: var(--md-filled-tonal-button-with-trailing-icon-trailing-space, 16px)}
`
/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */;let JE=class extends XE{};JE.styles=[qE,BE,QE],JE=pr([Zx("md-filled-tonal-button")],JE);var YE=function(e,t,n,r){var i,s=arguments.length,o=s<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,n):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)o=Reflect.decorate(e,t,n,r);else for(var a=e.length-1;a>=0;a--)(i=e[a])&&(o=(s<3?i(o):s>3?i(t,n,o):i(t,n))||o);return s>3&&o&&Object.defineProperty(t,n,o),o};let ZE=class extends(L(Jx)){constructor(){super(),this.email="",this.password=""}static{this.styles=Ox`
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
  `}render(){const e=R_.get(),t="loading"===e.authState,n=e.error;return oe`
      <div class="surface">
        <h2>Sign In</h2>
        ${n?oe`<div class="error" role="alert">${n}</div>`:le}

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

          ${t?oe`<md-circular-progress indeterminate></md-circular-progress>`:le}
        </form>
      </div>
    `}_handleEmailInput(e){this.email=e.target.value??""}_handlePasswordInput(e){this.password=e.target.value??""}async _handleSubmit(e){e.preventDefault();const t={email:this.email,password:this.password};try{await O_(t),this.dispatchEvent(new CustomEvent("df-sign-in-success",{detail:{email:this.email},bubbles:!0,composed:!0})),this.email="",this.password=""}catch(e){this.dispatchEvent(new CustomEvent("df-sign-in-error",{detail:{error:e instanceof Error?e.message:"Sign in failed"},bubbles:!0,composed:!0}))}}};YE([rE()],ZE.prototype,"email",void 0),YE([rE()],ZE.prototype,"password",void 0),ZE=YE([Zx("df-sign-in")],ZE);var eT=function(e,t,n,r){var i,s=arguments.length,o=s<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,n):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)o=Reflect.decorate(e,t,n,r);else for(var a=e.length-1;a>=0;a--)(i=e[a])&&(o=(s<3?i(o):s>3?i(t,n,o):i(t,n))||o);return s>3&&o&&Object.defineProperty(t,n,o),o};let tT=class extends(L(Jx)){constructor(){super(),this.email="",this.password="",this.confirmPassword="",this.displayName="",this.validationError="",this.isSubmitting=!1}static{this.styles=Ox`
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
  `}render(){const e=R_.get().error;return oe`
      <div class="surface">
        <h2>Create an account</h2>
        <p class="description">
          Provide your email address and a strong password. You can optionally add a display name now or update it later.
        </p>

        ${e?oe`<div class="feedback error" role="alert">${e}</div>`:le}
        ${this.validationError?oe`<div class="feedback error" role="alert">${this.validationError}</div>`:le}

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

          ${this.isSubmitting?oe`<md-circular-progress indeterminate></md-circular-progress>`:le}
        </form>
      </div>
    `}_handleDisplayNameInput(e){this.displayName=e.target.value??""}_handleEmailInput(e){this.email=e.target.value??"",this._clearValidationError()}_handlePasswordInput(e){this.password=e.target.value??"",this._clearValidationError()}_handleConfirmPasswordInput(e){this.confirmPassword=e.target.value??"",this._clearValidationError()}_clearValidationError(){this.validationError=""}async _handleSubmit(e){if(e.preventDefault(),this.password!==this.confirmPassword)return void(this.validationError="Passwords do not match");const t={email:this.email,password:this.password,displayName:this.displayName||void 0};this.isSubmitting=!0;try{await P_(t),this.dispatchEvent(new CustomEvent("df-sign-up-success",{detail:{email:this.email,displayName:this.displayName},bubbles:!0,composed:!0})),this.email="",this.password="",this.confirmPassword="",this.displayName="",this.validationError=""}catch(e){this.dispatchEvent(new CustomEvent("df-sign-up-error",{detail:{error:e instanceof Error?e.message:"Sign up failed"},bubbles:!0,composed:!0}))}finally{this.isSubmitting=!1}}};eT([rE()],tT.prototype,"email",void 0),eT([rE()],tT.prototype,"password",void 0),eT([rE()],tT.prototype,"confirmPassword",void 0),eT([rE()],tT.prototype,"displayName",void 0),eT([rE()],tT.prototype,"validationError",void 0),eT([rE()],tT.prototype,"isSubmitting",void 0),tT=eT([Zx("df-sign-up")],tT);var nT=function(e,t,n,r){var i,s=arguments.length,o=s<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,n):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)o=Reflect.decorate(e,t,n,r);else for(var a=e.length-1;a>=0;a--)(i=e[a])&&(o=(s<3?i(o):s>3?i(t,n,o):i(t,n))||o);return s>3&&o&&Object.defineProperty(t,n,o),o};let rT=class extends(L(Jx)){constructor(){super(),this.email="",this.isSubmitting=!1,this.successMessage=""}static{this.styles=Ox`
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
  `}render(){const e=R_.get().error;return oe`
      <div class="surface">
        <h2>Reset Password</h2>
        <p class="description">
          Enter your email address and we'll send you a secure link to reset your password.
        </p>

        ${e?oe`<div class="feedback error" role="alert">${e}</div>`:le}
        ${this.successMessage?oe`<div class="feedback success">${this.successMessage}</div>`:le}

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

          ${this.isSubmitting?oe`<md-circular-progress indeterminate></md-circular-progress>`:le}
        </form>
      </div>
    `}_handleEmailInput(e){this.email=e.target.value??"",this.successMessage=""}async _handleSubmit(e){e.preventDefault(),this.isSubmitting=!0,this.successMessage="";const t={email:this.email};try{await async function(e){if(N_(),!C_)throw new Error("Auth initialization failed");E_.set(null);try{await t_(C_,e.email)}catch(e){const t=e instanceof Error?e.message:"Password reset failed";throw E_.set(t),e}}(t),this.successMessage=`Password reset email sent to ${this.email}. Check your inbox.`,this.dispatchEvent(new CustomEvent("df-password-reset-success",{detail:{email:this.email},bubbles:!0,composed:!0})),this.email=""}catch(e){this.dispatchEvent(new CustomEvent("df-password-reset-error",{detail:{error:e instanceof Error?e.message:"Password reset failed"},bubbles:!0,composed:!0}))}finally{this.isSubmitting=!1}}};nT([rE()],rT.prototype,"email",void 0),nT([rE()],rT.prototype,"isSubmitting",void 0),nT([rE()],rT.prototype,"successMessage",void 0),rT=nT([Zx("df-password-reset")],rT);var iT=function(e,t,n,r){var i,s=arguments.length,o=s<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,n):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)o=Reflect.decorate(e,t,n,r);else for(var a=e.length-1;a>=0;a--)(i=e[a])&&(o=(s<3?i(o):s>3?i(t,n,o):i(t,n))||o);return s>3&&o&&Object.defineProperty(t,n,o),o};let sT=class extends(L(Jx)){constructor(){super(),this.headless=!1,this.showHideUser=!1,this.emailPw=!1,this.emailPwView="sign-in"}static{this.styles=Ox`
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
  `}render(){const{authUser:e,authState:t}=R_.get();return"authenticated"===t&&e?this.headless?oe`<slot></slot>`:oe`
      ${this._renderHeader(e)}
      ${this.showHideUser?this._renderUserJson(e):le}
      <slot></slot>
    `:this._renderLoginScreen()}_renderLoginScreen(){return this.emailPw?oe`
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
    `:oe`
        <div class="full-screen">
          <md-filled-button
            class="login-button"
            @click=${this._handleLoginClick}
          >
            Sign in with Google
          </md-filled-button>
        </div>
      `}_renderEmailPwPanel(){return oe`
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
    `}_renderEmailPwTab(e,t,n){const r=this.emailPwView===e;return oe`
      <md-filled-tonal-button
        class="email-pw-tab"
        data-active=${r}
        aria-pressed=${r}
        title=${n}
        @click=${()=>this._setEmailPwView(e)}
      >
        ${t}
      </md-filled-tonal-button>
    `}_renderEmailPwView(){switch(this.emailPwView){case"sign-up":return oe`
          <df-sign-up @df-sign-up-success=${this._handleEmailPwSuccess}></df-sign-up>
        `;case"reset":return oe`
          <df-password-reset
            @df-password-reset-success=${this._handleEmailPwSuccess}
          ></df-password-reset>
        `;default:return oe`
          <df-sign-in @df-sign-in-success=${this._handleEmailPwSuccess}></df-sign-in>
        `}}_setEmailPwView(e){this.emailPwView=e}_handleEmailPwSuccess(){this.emailPwView="sign-in"}_renderHeader(e){return oe`
      <div class="full-width-div">
        ${e.photoURL?oe`<img class="user-photo" src="${e.photoURL}" alt="User photo" />`:le}
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
    `}_renderUserJson(e){return oe`
      <div class="user-json">
        <pre>${JSON.stringify(e,null,2)}</pre>
      </div>
    `}async _handleLoginClick(){try{await async function(e=[]){if(N_(),!C_)throw new Error("Auth initialization failed");x_.set("loading"),E_.set(null);try{const t=await n_(C_,e);__.set(t.user),x_.set("authenticated"),await A_(t.user)}catch(e){x_.set("error");const t=e instanceof Error?e.message:"Google sign-in failed";throw E_.set(t),e}}();const{authUser:e}=R_.get();this._dispatchUserChanged(e)}catch(e){console.error("Login failed:",e),alert(e instanceof Error?e.message:"Login failed")}}async _handleLogoutClick(e){if(e.altKey)this.showHideUser=!this.showHideUser;else try{await L_(),this._dispatchUserChanged(null)}catch(e){console.error("Logout failed:",e),alert(e instanceof Error?e.message:"Logout failed")}}_dispatchUserChanged(e){this.dispatchEvent(new CustomEvent("df-auth-wrapper-user-changed",{detail:{newValue:e},bubbles:!0,composed:!0}))}};iT([nE({type:Boolean})],sT.prototype,"headless",void 0),iT([nE({type:Boolean})],sT.prototype,"showHideUser",void 0),iT([nE({type:Boolean})],sT.prototype,"emailPw",void 0),iT([rE()],sT.prototype,"emailPwView",void 0),sT=iT([Zx("df-auth-wrapper")],sT);var oT=function(e,t,n,r){var i,s=arguments.length,o=s<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,n):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)o=Reflect.decorate(e,t,n,r);else for(var a=e.length-1;a>=0;a--)(i=e[a])&&(o=(s<3?i(o):s>3?i(t,n,o):i(t,n))||o);return s>3&&o&&Object.defineProperty(t,n,o),o};let aT=class extends Jx{constructor(){super(...arguments),this.defaultConfig=m_()}get resolvedEnvironment(){return this.environment&&this.environment in f_?this.environment:this.defaultConfig.firestore||this.defaultConfig.storage||this.defaultConfig.functions?"fb-emulator":"fb-cloud"}get resolvedConfig(){const e=this.resolvedEnvironment;return e===this.environment?f_[e]:this.defaultConfig}static{this.styles=Ox`
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
  `}render(){const e=this.resolvedEnvironment,t=this.resolvedConfig;return oe`
      <section class="banner ${"fb-emulator"===e?"emulator":"cloud"}" role="status" aria-live="polite">
        <div class="pill">${e}</div>
        <div class="mode">
          <span class="label">${t.label}</span>
          <p class="description">${t.description}</p>
        </div>
      </section>
    `}};oT([nE({type:String})],aT.prototype,"environment",void 0),aT=oT([Zx("df-environment-banner")],aT);var lT=function(e,t,n,r){var i,s=arguments.length,o=s<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,n):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)o=Reflect.decorate(e,t,n,r);else for(var a=e.length-1;a>=0;a--)(i=e[a])&&(o=(s<3?i(o):s>3?i(t,n,o):i(t,n))||o);return s>3&&o&&Object.defineProperty(t,n,o),o};let cT=class extends(L(Jx)){constructor(){super(),this.isSeeding=!1}get shouldRender(){if("undefined"==typeof window)return!1;const e=window.location.hostname,t="localhost"===e||"127.0.0.1"===e||"::1"===e;return t||console.debug(`[df-seed-data] Not rendering on host: ${e}`),t}static{this.styles=Ox`
    :host {
      display: block;
    }

    .seed-panel {
      padding: 16px;
      border-radius: 12px;
      background: var(--md-sys-color-inverse-surface, #313033);
      color: var(--md-sys-color-inverse-on-surface, #f4eff4);
      border: 1px solid var(--md-sys-color-outline-variant, rgba(0, 0, 0, 0.12));
      margin-bottom: 16px;
    }

    .seed-header {
      display: flex;
      align-items: center;
      gap: 12px;
      margin-bottom: 12px;
      font-weight: 600;
      font-size: 0.95rem;
    }

    .seed-badge {
      background: var(--md-sys-color-primary, #6750a4);
      color: white;
      padding: 4px 12px;
      border-radius: 999px;
      font-size: 0.75rem;
      font-weight: 600;
      letter-spacing: 0.05em;
    }

    .seed-description {
      font-size: 0.9rem;
      margin-bottom: 12px;
      line-height: 1.5;
      opacity: 0.9;
    }

    .seed-controls {
      display: flex;
      gap: 12px;
      align-items: center;
      flex-wrap: wrap;
    }

    .seed-progress {
      display: flex;
      align-items: center;
      gap: 12px;
      margin-top: 12px;
    }

    .progress-bar {
      flex: 1;
      height: 6px;
      border-radius: 3px;
      background: rgba(255, 255, 255, 0.2);
      overflow: hidden;
    }

    .progress-fill {
      height: 100%;
      background: var(--md-sys-color-primary, #6750a4);
      transition: width 0.3s ease;
    }

    .progress-text {
      font-size: 0.85rem;
      min-width: 40px;
      text-align: right;
    }

    .seed-status {
      font-size: 0.9rem;
      margin-top: 12px;
      padding: 8px 12px;
      border-radius: 8px;
      background: rgba(255, 255, 255, 0.1);
    }

    .seed-status.error {
      background: rgba(255, 82, 82, 0.2);
      color: #ff5252;
    }

    .seed-status.success {
      background: rgba(76, 175, 80, 0.2);
      color: #4caf50;
    }

    md-circular-progress {
      --md-circular-progress-size: 20px;
    }
  `}render(){if(!this.shouldRender)return le;const e=Tx.state.get(),t="loading"===e.status;return oe`
      <div class="seed-panel">
        <div class="seed-header">
          <span class="seed-badge">DEV ONLY</span>
          <span>Firestore Seed Data</span>
        </div>

        <p class="seed-description">
          Populate Firestore with reference data (flowers, continents, elements, instruments, todos).
          This is a development-only tool.
        </p>

        <div class="seed-controls">
          <md-filled-button
            ?disabled=${t}
            @click=${this._handleSeed}
          >
            ${t?"Seeding...":"Seed Firestore"}
          </md-filled-button>
        </div>

        ${"loading"===e.status?oe`
          <div class="seed-progress">
            <div class="progress-bar">
              <div class="progress-fill" style="width: ${e.progress}%"></div>
            </div>
            <div class="progress-text">${e.progress}%</div>
          </div>
          <div class="seed-status">
            ${e.currentStep}
          </div>
        `:le}

        ${"ready"===e.status&&e.isComplete?oe`
          <div class="seed-status success">
            ✓ ${e.currentStep}
          </div>
        `:le}

        ${"error"===e.status?oe`
          <div class="seed-status error">
            ✗ Error: ${e.error}
          </div>
        `:le}
      </div>
    `}async _handleSeed(){this.isSeeding=!0;try{await Tx.seedFirestoreCollections()}finally{this.isSeeding=!1}}};lT([rE()],cT.prototype,"isSeeding",void 0),cT=lT([Zx("df-seed-data")],cT);var uT=function(e,t,n,r){var i,s=arguments.length,o=s<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,n):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)o=Reflect.decorate(e,t,n,r);else for(var a=e.length-1;a>=0;a--)(i=e[a])&&(o=(s<3?i(o):s>3?i(t,n,o):i(t,n))||o);return s>3&&o&&Object.defineProperty(t,n,o),o};let dT=class extends Jx{static{this.styles=Ox`
    :host {
      display: block;
      width: 100%;
      border-radius: 24px;
      padding: 40px;
      box-sizing: border-box;
      background: rgba(255, 255, 255, 0.96);
      box-shadow: 0 25px 60px rgba(15, 23, 42, 0.24);
    }

    header {
      display: flex;
      flex-direction: column;
      gap: 12px;
      margin-bottom: 32px;
    }

    h1 {
      margin: 0;
      font-size: 2rem;
      color: #0f172a;
    }

    p {
      margin: 0;
      color: rgba(71, 85, 105, 0.95);
      line-height: 1.55;
    }

    section {
      display: grid;
      gap: 18px;
      border-radius: 18px;
      padding: 24px;
      background: rgba(15, 23, 42, 0.06);
      border: 1px solid rgba(148, 163, 184, 0.35);
    }

    h2 {
      margin: 0;
      font-size: 1.25rem;
      color: #0f172a;
    }

    ul {
      margin: 0;
      padding-left: 24px;
      color: rgba(51, 65, 85, 0.9);
      line-height: 1.6;
    }

    .status {
      display: flex;
      align-items: center;
      gap: 12px;
      padding: 12px 16px;
      border-radius: 12px;
      font-weight: 600;
    }

    .status[data-state='checking'] {
      background: rgba(30, 64, 175, 0.12);
      color: #1d4ed8;
    }

    .status[data-state='connected'] {
      background: rgba(22, 163, 74, 0.12);
      color: #15803d;
    }

    .status[data-state='unavailable'] {
      background: rgba(220, 38, 38, 0.12);
      color: #b91c1c;
    }

    code {
      background: rgba(15, 23, 42, 0.9);
      color: #f8fafc;
      padding: 2px 6px;
      border-radius: 6px;
      font-size: 0.9em;
    }
  `}constructor(){super(),this.emulatorStatus="checking"}connectedCallback(){super.connectedCallback(),this.verifyEmulators()}async verifyEmulators(){const e=await async function(){return!0}();this.emulatorStatus=e?"connected":"unavailable"}render(){const e=this.getStatusLabel(),t=this.getChecklist();return oe`
      <header>
        <span class="status" data-state=${this.emulatorStatus}>${e}</span>
        <h1>Firebase Teaching Workspace</h1>
        <p>
          This application demonstrates Firebase integration patterns with cloud authentication
          and local emulators for Firestore, Storage, and Functions. Sign in with Google using
          your real account, then interact with emulated data services for safe development.
        </p>
      </header>

      <section aria-labelledby="emulator-setup">
        <h2 id="emulator-setup">Quick setup</h2>
        <ul>
          <li><code>pnpm install</code> (workspace-wide)</li>
          <li><code>pnpm --filter @df/df-firebase-teaching-app emulators:start</code></li>
          <li><code>pnpm --filter @df/df-firebase-teaching-app dev</code></li>
          <li>Sign in with Google (uses production auth)</li>
          <li>Interact with Firestore, Storage, and Functions (use emulators)</li>
        </ul>
      </section>

      <section aria-labelledby="checklist">
        <h2 id="checklist">Launch checklist</h2>
        <ul>
          ${t.map(e=>oe`<li>${e.completed?"✅":"⬜️"} ${e.label}</li>`)}
        </ul>
      </section>
    `}getStatusLabel(){switch(this.emulatorStatus){case"connected":return"Emulator suite detected";case"unavailable":return"Emulator suite not detected";default:return"Checking emulator status..."}}getChecklist(){return[{label:"Install workspace dependencies",completed:!0},{label:"Create Firebase config using environment variables",completed:!1},{label:"Run `pnpm --filter @df/df-firebase-teaching-app emulators:start`",completed:"connected"===this.emulatorStatus},{label:"Run `pnpm --filter @df/df-firebase-teaching-app dev`",completed:!1}]}};uT([rE()],dT.prototype,"emulatorStatus",void 0),dT=uT([Zx("df-firebase-teaching-app")],dT),y_(m_()),Promise.resolve().then(function(){return xT}),Promise.resolve().then(function(){return NI}),Promise.resolve().then(function(){return LT});var hT=function(e,t,n,r){var i,s=arguments.length,o=s<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,n):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)o=Reflect.decorate(e,t,n,r);else for(var a=e.length-1;a>=0;a--)(i=e[a])&&(o=(s<3?i(o):s>3?i(t,n,o):i(t,n))||o);return s>3&&o&&Object.defineProperty(t,n,o),o};let pT=class extends Jx{static{this.styles=Ox`
    :host {
      display: block;
      border: 1px solid var(--df-border-color, rgba(15, 23, 42, 0.12));
      border-radius: 12px;
      padding: var(--df-spacing-4, 1.25rem);
      background: var(--df-surface-color, #fff);
      box-shadow: var(--df-shadow-md, 0 10px 30px rgba(15, 23, 42, 0.08));
    }

    header {
      display: flex;
      align-items: flex-start;
      justify-content: space-between;
      gap: 1rem;
    }

    h3 {
      margin: 0;
      font-size: 1.125rem;
      color: var(--df-text-primary, #0f172a);
    }

    .meta {
      display: flex;
      flex-wrap: wrap;
      gap: 0.5rem;
      margin: 0.75rem 0;
      color: var(--df-text-secondary, #475569);
      font-size: 0.9rem;
    }

    .tag {
      padding: 0.25rem 0.6rem;
      border-radius: 999px;
      background: rgba(99, 102, 241, 0.12);
      color: #4338ca;
      font-size: 0.75rem;
      font-weight: 600;
    }

    .priority[data-priority='high'] {
      color: #b91c1c;
    }

    .priority[data-priority='medium'] {
      color: #b45309;
    }

    .priority[data-priority='low'] {
      color: #0f766e;
    }

    .body {
      margin: 0;
      color: var(--df-text-secondary, #475569);
      line-height: 1.55;
    }

    footer {
      display: flex;
      flex-wrap: wrap;
      gap: 0.75rem;
      margin-top: 1rem;
      align-items: center;
    }

    /* MD3 buttons handle their own styling */

    .status-pill {
      display: inline-flex;
      align-items: center;
      gap: 0.4rem;
      padding: 0.35rem 0.75rem;
      border-radius: 999px;
      background: rgba(16, 185, 129, 0.14);
      color: #047857;
      font-size: 0.78rem;
      font-weight: 600;
    }

    .status-pill[data-state='completed'] {
      background: rgba(16, 185, 129, 0.14);
      color: #047857;
    }

    .status-pill[data-state='active'] {
      background: rgba(59, 130, 246, 0.14);
      color: #1d4ed8;
    }

    .status-pill[data-state='overdue'] {
      background: rgba(185, 28, 28, 0.14);
      color: #b91c1c;
    }
  `}constructor(){super(),this.todo=null,this.actions=!0}render(){if(!this.todo)return oe`<p>Todo data unavailable.</p>`;const e=this.getDueState();return oe`
      <header>
        <div>
          <h3>${this.todo.title}</h3>
          <div class="meta">
            <span class="priority" data-priority=${this.todo.priority}>Priority: ${this.todo.priority}</span>
            ${this.todo.dueDate?oe`<span class="status-pill" data-state=${e}>Due ${this.formatDate(this.todo.dueDate)}</span>`:oe``}
            <span>Created ${this.formatDate(this.todo.createdAt)}</span>
            ${this.todo.updatedAt?oe`<span>Updated ${this.formatDate(this.todo.updatedAt)}</span>`:oe``}
          </div>
        </div>
        <span class="status-pill" data-state=${this.todo.completed?"completed":"active"}>
          ${this.todo.completed?"Completed":"In progress"}
        </span>
      </header>

      <p class="body">${this.todo.description}</p>

      ${this.todo.tags.length?oe`<div class="meta">${this.todo.tags.map(e=>oe`<span class="tag">${e}</span>`)}</div>`:oe``}

      ${this.actions?oe`
            <footer>
              <md-outlined-button @click=${this.handleToggle}>
                ${this.todo.completed?"Mark incomplete":"Mark complete"}
              </md-outlined-button>
              <md-outlined-button @click=${this.handleEdit}>Edit</md-outlined-button>
              <md-outlined-button @click=${this.handleDelete}>Delete</md-outlined-button>
            </footer>
          `:oe``}
    `}handleToggle(){this.todo&&this.dispatchEvent(new CustomEvent("df-firestore-item-toggle",{detail:{id:this.todo.id,completed:!this.todo.completed},bubbles:!0,composed:!0}))}handleEdit(){this.todo&&this.dispatchEvent(new CustomEvent("df-firestore-item-edit",{detail:this.todo,bubbles:!0,composed:!0}))}handleDelete(){this.todo&&this.dispatchEvent(new CustomEvent("df-firestore-item-delete",{detail:{id:this.todo.id,title:this.todo.title},bubbles:!0,composed:!0}))}formatDate(e){return e?new Intl.DateTimeFormat(void 0,{month:"short",day:"numeric",hour:"2-digit",minute:"2-digit"}).format(e):"N/A"}getDueState(){return this.todo?this.todo.completed?"completed":this.todo.dueDate&&this.todo.dueDate.getTime()<Date.now()?"overdue":"active":"active"}};hT([nE({attribute:!1})],pT.prototype,"todo",void 0),hT([nE({type:Boolean})],pT.prototype,"actions",void 0),pT=hT([Zx("df-firestore-item")],pT);var fT=function(e,t,n,r){var i,s=arguments.length,o=s<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,n):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)o=Reflect.decorate(e,t,n,r);else for(var a=e.length-1;a>=0;a--)(i=e[a])&&(o=(s<3?i(o):s>3?i(t,n,o):i(t,n))||o);return s>3&&o&&Object.defineProperty(t,n,o),o};let mT=class extends Jx{static{this.styles=Ox`
    :host {
      display: block;
      padding: var(--df-spacing-5, 1.5rem);
      background: var(--md-sys-color-surface, #fff);
      border-radius: 16px;
      border: 1px solid var(--md-sys-color-outline-variant, rgba(15, 23, 42, 0.1));
      box-shadow: 0 15px 45px rgba(15, 23, 42, 0.12);
      max-width: 520px;
    }

    h2 {
      margin: 0 0 1.5rem;
      font-size: 1.4rem;
      color: var(--md-sys-color-on-surface, #0f172a);
    }

    form {
      display: flex;
      flex-direction: column;
      gap: 1.25rem;
    }

    .form-field {
      display: flex;
      flex-direction: column;
      gap: 0.5rem;
    }

    md-outlined-text-field {
      width: 100%;
    }

    md-filled-select {
      width: 100%;
    }

    .actions {
      display: flex;
      justify-content: flex-end;
      gap: 0.75rem;
      margin-top: 0.5rem;
    }

    .error {
      padding: 0.75rem 1rem;
      border-radius: 12px;
      background: var(--md-sys-color-error-container, rgba(220, 38, 38, 0.14));
      color: var(--md-sys-color-on-error-container, #b91c1c);
      font-size: 0.9rem;
      margin-bottom: 1rem;
    }
  `}constructor(){super(),this._title="",this._description="",this._priority="medium",this._tagsInput="",this._dueDateValue="",this._error=null,this.mode="create",this.todo=null}updated(e){e.has("todo")&&this.syncFromTodo(),e.has("mode")&&"create"===this.mode&&"create"!==e.get("mode")&&this.reset()}firstUpdated(){this.syncFromTodo()}render(){return oe`
      <h2>${"create"===this.mode?"Create todo":"Edit todo"}</h2>
      ${this._error?oe`<div class="error">${this._error}</div>`:le}
      <form @submit=${this.handleSubmit}>
        <md-outlined-text-field
          label="Title"
          required
          name="title"
          .value=${this._title}
          @input=${e=>this._title=e.target.value}
          supporting-text="Describe the task succinctly">
        </md-outlined-text-field>

        <md-outlined-text-field
          label="Description"
          type="textarea"
          rows="4"
          required
          name="description"
          .value=${this._description}
          @input=${e=>this._description=e.target.value}
          supporting-text="Explain the purpose or teaching prompt">
        </md-outlined-text-field>

        <md-filled-select
          label="Priority"
          name="priority"
          .value=${this._priority}
          @change=${e=>this._priority=e.target.value}>
          <md-select-option value="low">
            <div slot="headline">Low</div>
          </md-select-option>
          <md-select-option value="medium" selected>
            <div slot="headline">Medium</div>
          </md-select-option>
          <md-select-option value="high">
            <div slot="headline">High</div>
          </md-select-option>
        </md-filled-select>

        <md-outlined-text-field
          label="Tags"
          name="tags"
          .value=${this._tagsInput}
          @input=${e=>this._tagsInput=e.target.value}
          supporting-text="Comma separated, e.g. teaching, realtime">
        </md-outlined-text-field>

        <md-outlined-text-field
          label="Due date"
          type="date"
          name="due"
          .value=${this._dueDateValue}
          @input=${e=>this._dueDateValue=e.target.value}
          supporting-text="Optional">
        </md-outlined-text-field>

        <div class="actions">
          <md-outlined-button type="button" @click=${this.handleCancel}>
            Cancel
          </md-outlined-button>
          <md-filled-button type="submit">
            ${"create"===this.mode?"Create todo":"Save changes"}
          </md-filled-button>
        </div>
      </form>
    `}handleSubmit(e){if(e.preventDefault(),this._error=null,!this._title.trim())return void(this._error="Title is required.");if(!this._description.trim())return void(this._error="Description is required.");const t=this._tagsInput.split(",").map(e=>e.trim()).filter(Boolean),n={mode:this.mode,todoId:this.todo?.id,draft:{title:this._title.trim(),description:this._description.trim(),priority:this._priority,tags:t,dueDate:this._dueDateValue?new Date(this._dueDateValue):null}};this.dispatchEvent(new CustomEvent("df-firestore-form-submit",{bubbles:!0,composed:!0,detail:n})),"create"===this.mode&&this.reset()}handleCancel(){this.dispatchEvent(new CustomEvent("df-firestore-form-cancel",{bubbles:!0,composed:!0})),"create"===this.mode&&this.reset()}reset(){this._title="",this._description="",this._priority="medium",this._tagsInput="",this._dueDateValue="",this._error=null}syncFromTodo(){this.todo&&"edit"===this.mode&&(this._title=this.todo.title,this._description=this.todo.description,this._priority=this.todo.priority,this._tagsInput=this.todo.tags.join(", "),this._dueDateValue=this.todo.dueDate?this.formatDateInput(this.todo.dueDate):"")}formatDateInput(e){return`${e.getFullYear()}-${`${e.getMonth()+1}`.padStart(2,"0")}-${`${e.getDate()}`.padStart(2,"0")}`}};fT([nE({type:String})],mT.prototype,"mode",void 0),fT([nE({attribute:!1})],mT.prototype,"todo",void 0),fT([rE()],mT.prototype,"_title",void 0),fT([rE()],mT.prototype,"_description",void 0),fT([rE()],mT.prototype,"_priority",void 0),fT([rE()],mT.prototype,"_tagsInput",void 0),fT([rE()],mT.prototype,"_dueDateValue",void 0),fT([rE()],mT.prototype,"_error",void 0),mT=fT([Zx("df-firestore-form")],mT);var gT=function(e,t,n,r){var i,s=arguments.length,o=s<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,n):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)o=Reflect.decorate(e,t,n,r);else for(var a=e.length-1;a>=0;a--)(i=e[a])&&(o=(s<3?i(o):s>3?i(t,n,o):i(t,n))||o);return s>3&&o&&Object.defineProperty(t,n,o),o};let vT=class extends Jx{static{this.styles=Ox`
    :host {
      display: block;
      background: var(--md-sys-color-surface, #fff);
      border-radius: 16px;
      border: 1px solid var(--md-sys-color-error, rgba(185, 28, 28, 0.3));
      padding: 1.25rem;
      max-width: 420px;
      box-shadow: 0 16px 40px rgba(185, 28, 28, 0.15);
    }

    h3 {
      margin: 0 0 0.6rem;
      color: var(--md-sys-color-error, #991b1b);
    }

    p {
      margin: 0 0 1rem;
      color: var(--md-sys-color-on-surface-variant, #475569);
      line-height: 1.5;
    }

    footer {
      display: flex;
      justify-content: flex-end;
      gap: 0.75rem;
    }

    /* MD3 buttons handle their own styling */
  `}constructor(){super(),this.todoId="",this.todoTitle=""}render(){return oe`
      <h3>Delete todo</h3>
      <p>
        Are you sure you want to delete <strong>${this.todoTitle||"this todo"}</strong>? This action cannot be
        undone.
      </p>
      <footer>
        <md-outlined-button @click=${this.handleCancel}>Cancel</md-outlined-button>
        <md-filled-button @click=${this.handleConfirm}>Delete</md-filled-button>
      </footer>
    `}handleConfirm(){this.dispatchEvent(new CustomEvent("df-firestore-delete-confirm",{detail:{id:this.todoId},bubbles:!0,composed:!0}))}handleCancel(){this.dispatchEvent(new CustomEvent("df-firestore-delete-cancel",{bubbles:!0,composed:!0}))}};gT([nE({type:String})],vT.prototype,"todoId",void 0),gT([nE({type:String})],vT.prototype,"todoTitle",void 0),vT=gT([Zx("df-firestore-delete")],vT);var yT=function(e,t,n,r){var i,s=arguments.length,o=s<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,n):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)o=Reflect.decorate(e,t,n,r);else for(var a=e.length-1;a>=0;a--)(i=e[a])&&(o=(s<3?i(o):s>3?i(t,n,o):i(t,n))||o);return s>3&&o&&Object.defineProperty(t,n,o),o};let bT=class extends(L(Jx)){constructor(){super(...arguments),this.searchTerm="",this.isFormOpen=!1,this.formMode="create",this.editingTodo=null,this.deleteTarget=null,this.realtimeEnabled=!1,this.isOnline="undefined"==typeof navigator||navigator.onLine,this.localError=null,this.isLoadingMore=!1,this.onlineListener=()=>this.isOnline=!0,this.offlineListener=()=>this.isOnline=!1}static{this.styles=Ox`
    :host {
      display: block;
      width: 100%;
      box-sizing: border-box;
      border-radius: 24px;
      padding: 2rem;
      background: var(--md-sys-color-surface-container-low, linear-gradient(160deg, rgba(241, 245, 249, 0.92), rgba(226, 232, 240, 0.82)));
      border: 1px solid var(--md-sys-color-outline-variant, rgba(148, 163, 184, 0.35));
    }

    header {
      display: flex;
      flex-wrap: wrap;
      justify-content: space-between;
      align-items: center;
      gap: 1.5rem;
    }

    h2 {
      margin: 0;
      font-size: 1.85rem;
      color: var(--md-sys-color-on-surface, #0f172a);
    }

    .controls {
      display: flex;
      flex-wrap: wrap;
      gap: 1rem;
      align-items: center;
    }

    .filters {
      display: flex;
      flex-wrap: wrap;
      gap: 0.75rem;
      margin: 1.5rem 0 2rem;
    }

    .filters label {
      display: flex;
      flex-direction: column;
      gap: 0.4rem;
      font-size: 0.85rem;
      color: var(--md-sys-color-on-surface-variant, #475569);
      font-weight: 600;
    }

    /* MD3 components handle their own styling */
    md-filled-select,
    md-outlined-text-field {
      min-width: 160px;
    }

    .list {
      display: grid;
      gap: 1.25rem;
    }

    .empty-state {
      padding: 2.5rem;
      border: 2px dashed var(--md-sys-color-primary, rgba(59, 130, 246, 0.35));
      border-radius: 18px;
      text-align: center;
      color: var(--md-sys-color-on-surface-variant, #475569);
      background: var(--md-sys-color-primary-container, rgba(191, 219, 254, 0.18));
    }

    .error-state {
      padding: 1rem 1.25rem;
      border-radius: 14px;
      background: var(--md-sys-color-error-container, rgba(220, 38, 38, 0.16));
      color: var(--md-sys-color-on-error-container, #b91c1c);
      margin-bottom: 1.5rem;
    }

    .toolbar {
      display: flex;
      justify-content: space-between;
      align-items: center;
      gap: 1rem;
      margin: 2rem 0 1.5rem;
      flex-wrap: wrap;
    }

    /* MD3 buttons handle their own styling - removed custom button CSS */

    .toolbar-controls {
      display: flex;
      align-items: center;
      gap: 0.75rem;
      flex-wrap: wrap;
    }

    .toolbar-select {
      display: flex;
      flex-direction: column;
      gap: 0.35rem;
      font-size: 0.85rem;
      color: var(--md-sys-color-on-surface-variant, #475569);
      font-weight: 600;
    }

    .pagination {
      display: flex;
      align-items: center;
      gap: 0.75rem;
      flex-wrap: wrap;
    }

    .status-indicator {
      display: inline-flex;
      align-items: center;
      gap: 0.45rem;
      font-size: 0.85rem;
      padding: 0.4rem 0.75rem;
      border-radius: 999px;
      background: rgba(16, 185, 129, 0.14);
      color: #047857;
    }

    .status-indicator[data-offline='true'] {
      background: rgba(220, 38, 38, 0.14);
      color: #b91c1c;
    }

    .load-more-container {
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 0.75rem;
      margin-top: 2rem;
      padding: 1.5rem;
      border-radius: 16px;
      background: linear-gradient(135deg, rgba(99, 102, 241, 0.05), rgba(139, 92, 246, 0.05));
      border: 1px dashed var(--md-sys-color-primary, rgba(99, 102, 241, 0.3));
    }

    .load-more-button {
      min-width: 200px;
    }

    .load-more-hint {
      margin: 0;
      font-size: 0.85rem;
      color: var(--md-sys-color-on-surface-variant, #64748b);
      text-align: center;
    }

    .modal-backdrop {
      position: fixed;
      inset: 0;
      background: rgba(15, 23, 42, 0.45);
      display: flex;
      align-items: center;
      justify-content: center;
      padding: 2rem;
      z-index: 99;
    }

    .modal-content {
      position: relative;
      max-width: min(95vw, 640px);
      width: 100%;
    }

    /* MD3 icon button handles its own styling */
    md-icon-button.modal-close {
      position: absolute;
      top: -3.5rem;
      right: 0;
      --md-icon-button-icon-color: #fff;
    }

    @media (max-width: 900px) {
      :host {
        padding: 1.25rem;
      }

      header {
        flex-direction: column;
        align-items: flex-start;
      }
    }
  `}connectedCallback(){super.connectedCallback(),this.updateRealtimeFromState(),window.addEventListener("online",this.onlineListener),window.addEventListener("offline",this.offlineListener)}disconnectedCallback(){super.disconnectedCallback(),window.removeEventListener("online",this.onlineListener),window.removeEventListener("offline",this.offlineListener)}render(){const e=j_.get(),t=B_.get(),n=this.collectTags(e),r=this.applySearch(e.documents,this.searchTerm);return oe`
      <header>
        <div>
          <h2>Firestore Todos</h2>
          <div class="controls">
            <span class="status-indicator" data-offline=${!this.isOnline}>${this.isOnline?"Online":"Offline"}</span>
            <span class="status-indicator" data-offline=${!this.realtimeEnabled}
              >${this.realtimeEnabled?"Real-time: ON":"Real-time: OFF"}</span
            >
          </div>
        </div>
        <div class="controls">
          <md-outlined-button @click=${this.handleToggleRealtime}>
            ${this.realtimeEnabled?"Disable real-time":"Enable real-time"}
          </md-outlined-button>
          <md-filled-button @click=${this.openCreateForm}>Create todo</md-filled-button>
        </div>
      </header>

      ${e.error?oe`<div class="error-state">${e.error}</div>`:le}

      <section class="filters">
        <label>
          Priority
          <md-filled-select .value=${t.priority} @change=${this.handlePriorityChange}>
            <md-select-option value="all">
              <div slot="headline">All priorities</div>
            </md-select-option>
            <md-select-option value="low">
              <div slot="headline">Low</div>
            </md-select-option>
            <md-select-option value="medium">
              <div slot="headline">Medium</div>
            </md-select-option>
            <md-select-option value="high">
              <div slot="headline">High</div>
            </md-select-option>
          </md-filled-select>
        </label>

        <label>
          Tag
          <md-filled-select .value=${t.tag} @change=${this.handleTagChange}>
            <md-select-option value="all">
              <div slot="headline">All tags</div>
            </md-select-option>
            ${n.map(e=>oe`
              <md-select-option value=${e}>
                <div slot="headline">${e}</div>
              </md-select-option>
            `)}
          </md-filled-select>
        </label>

        <label>
          Show completed
          <md-filled-select .value=${t.showCompleted?"yes":"no"} @change=${this.handleCompletedChange}>
            <md-select-option value="yes">
              <div slot="headline">Yes</div>
            </md-select-option>
            <md-select-option value="no">
              <div slot="headline">No</div>
            </md-select-option>
          </md-filled-select>
        </label>

        <label>
          Search title
          <md-outlined-text-field
            type="search"
            .value=${this.searchTerm}
            placeholder="Search displayed results"
            @input=${e=>this.searchTerm=e.target.value}
          ></md-outlined-text-field>
        </label>

        <md-outlined-button type="button" @click=${this.handleResetFilters}>Reset filters</md-outlined-button>
      </section>

      <section class="toolbar">
        <div class="toolbar-controls">
          <span>Page ${e.currentPage}</span>
          <label class="toolbar-select">
            Page size
            <md-filled-select .value=${String(e.pageSize)} @change=${this.handlePageSizeChange}>
              <md-select-option value="5">
                <div slot="headline">5 per page</div>
              </md-select-option>
              <md-select-option value="10">
                <div slot="headline">10 per page</div>
              </md-select-option>
              <md-select-option value="15">
                <div slot="headline">15 per page</div>
              </md-select-option>
            </md-filled-select>
          </label>
        </div>

        <div class="pagination">
          <md-outlined-button type="button" ?disabled=${!e.hasPreviousPage} @click=${this.loadPrevious}>
            Previous page
          </md-outlined-button>
          <md-outlined-button type="button" ?disabled=${!e.hasNextPage} @click=${this.loadNext}>
            Next page
          </md-outlined-button>
        </div>
      </section>

      ${"loading"===e.status?oe`<div class="empty-state">Loading todos...</div>`:r.length?oe`
              <section class="list">
                ${r.map(e=>oe`
                    <df-firestore-item
                      .todo=${e}
                      @df-firestore-item-toggle=${this.handleToggleTodo}
                      @df-firestore-item-edit=${this.handleEditTodo}
                      @df-firestore-item-delete=${this.handleDeleteRequest}
                    ></df-firestore-item>
                  `)}
              </section>
              
              ${e.hasNextPage?oe`
                <div class="load-more-container">
                  <md-outlined-button 
                    class="load-more-button"
                    @click=${this.handleLoadMore}
                    ?disabled=${this.isLoadingMore}
                  >
                    ${this.isLoadingMore?"Loading...":"Load more todos"}
                  </md-outlined-button>
                  <p class="load-more-hint">
                    Progressive loading: Click to append ${e.pageSize} more items
                  </p>
                </div>
              `:le}
            `:oe`<div class="empty-state">No todos match the current filters.</div>`}

      ${this.isFormOpen?this.renderFormModal():le}
      ${this.deleteTarget?this.renderDeleteModal():le}

      ${this.localError?oe`<div class="error-state">${this.localError}</div>`:le}
    `}renderFormModal(){return oe`
      <div class="modal-backdrop" role="dialog" aria-modal="true">
        <div class="modal-content">
          <md-icon-button class="modal-close" @click=${this.closeForm} aria-label="Close">
            <md-icon>close</md-icon>
          </md-icon-button>
          <df-firestore-form
            .mode=${this.formMode}
            .todo=${this.editingTodo}
            @df-firestore-form-submit=${this.handleFormSubmit}
            @df-firestore-form-cancel=${this.closeForm}
          ></df-firestore-form>
        </div>
      </div>
    `}renderDeleteModal(){return this.deleteTarget?oe`
      <div class="modal-backdrop" role="dialog" aria-modal="true">
        <div class="modal-content">
          <md-icon-button class="modal-close" @click=${this.closeDeleteModal} aria-label="Close">
            <md-icon>close</md-icon>
          </md-icon-button>
          <df-firestore-delete
            .todoId=${this.deleteTarget.id}
            .todoTitle=${this.deleteTarget.title}
            @df-firestore-delete-confirm=${this.confirmDelete}
            @df-firestore-delete-cancel=${this.closeDeleteModal}
          ></df-firestore-delete>
        </div>
      </div>
    `:le}handlePriorityChange(e){K_({priority:e.target.value})}handleTagChange(e){K_({tag:e.target.value})}handleCompletedChange(e){K_({showCompleted:"yes"===e.target.value})}handleResetFilters(){!async function(){U_.set({...M_}),await W_()}(),this.searchTerm=""}async handlePageSizeChange(e){const t=Number(e.target.value);await async function(e){const t=X_();await t.setPageSize(e)}(t)}async loadNext(){try{await G_()}catch(e){this.showLocalError(e)}}async loadPrevious(){try{await async function(){const e=X_();await e.loadPreviousPage()}()}catch(e){this.showLocalError(e)}}async handleLoadMore(){this.isLoadingMore=!0;try{await G_()}catch(e){this.showLocalError(e)}finally{this.isLoadingMore=!1}}showLocalError(e){this.localError=e instanceof Error?e.message:"Unexpected error occurred.",setTimeout(()=>{this.localError=null},4e3)}handleToggleRealtime(){this.realtimeEnabled=!this.realtimeEnabled,this.realtimeEnabled?X_().startRealtime():X_().stopRealtime()}updateRealtimeFromState(){const{isListening:e}=j_.get();this.realtimeEnabled=e}openCreateForm(){this.formMode="create",this.editingTodo=null,this.isFormOpen=!0}handleEditTodo(e){this.formMode="edit",this.editingTodo=e.detail,this.isFormOpen=!0}closeForm(){this.isFormOpen=!1,this.editingTodo=null}async handleFormSubmit(e){const{mode:t,draft:n,todoId:r}=e.detail;try{"create"===t?await async function(e){const t=X_(),n=new Date,r={title:e.title,description:e.description,completed:!1,priority:e.priority,tags:e.tags,createdAt:n,updatedAt:n,dueDate:e.dueDate,titleLower:e.title.toLowerCase()},i=await t.create(r);return await t.refresh(),i}(n):r&&await H_(r,n),this.isFormOpen=!1,this.editingTodo=null}catch(e){this.showLocalError(e)}}handleDeleteRequest(e){const{id:t,title:n}=e.detail,r=j_.get().documents.find(e=>e.id===t)??{id:t,title:n,description:"",priority:"medium",tags:[],createdAt:null,updatedAt:null,completed:!1,dueDate:null};this.deleteTarget=r}closeDeleteModal(){this.deleteTarget=null}async confirmDelete(e){try{await async function(e){const t=X_();await t.delete(e),await t.refresh()}(e.detail.id),this.closeDeleteModal()}catch(e){this.showLocalError(e)}}async handleToggleTodo(e){try{await async function(e,t){await H_(e,{completed:t})}(e.detail.id,e.detail.completed)}catch(e){this.showLocalError(e)}}applySearch(e,t){const n=t.trim().toLowerCase();return n?e.filter(e=>e.title.toLowerCase().includes(n)):e}collectTags(e){const t=new Set;for(const n of e.documents)for(const e of n.tags)t.add(e);return Array.from(t).sort((e,t)=>e.localeCompare(t))}};yT([rE()],bT.prototype,"searchTerm",void 0),yT([rE()],bT.prototype,"isFormOpen",void 0),yT([rE()],bT.prototype,"formMode",void 0),yT([rE()],bT.prototype,"editingTodo",void 0),yT([rE()],bT.prototype,"deleteTarget",void 0),yT([rE()],bT.prototype,"realtimeEnabled",void 0),yT([rE()],bT.prototype,"isOnline",void 0),yT([rE()],bT.prototype,"localError",void 0),yT([rE()],bT.prototype,"isLoadingMore",void 0),bT=yT([Zx("df-firestore-list")],bT);var wT=function(e,t,n,r){var i,s=arguments.length,o=s<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,n):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)o=Reflect.decorate(e,t,n,r);else for(var a=e.length-1;a>=0;a--)(i=e[a])&&(o=(s<3?i(o):s>3?i(t,n,o):i(t,n))||o);return s>3&&o&&Object.defineProperty(t,n,o),o};let _T=class extends(L(Jx)){static{this.styles=Ox`
    :host {
      display: block;
      width: min(1200px, 90vw);
      margin: 0 auto;
      box-sizing: border-box;
      border-radius: 24px;
      padding: 2rem;
      background: var(--md-sys-color-surface, #ffffff);
      color: var(--md-sys-color-on-surface, #0f172a);
      border: 1px solid var(--md-sys-color-outline-variant, rgba(148, 163, 184, 0.35));
      box-shadow: 0 22px 45px rgba(15, 23, 42, 0.08);
    }

    .container {
      display: grid;
      gap: 1.5rem;
    }

    header {
      background: var(
        --md-sys-color-surface-container-high,
        linear-gradient(130deg, rgba(99, 102, 241, 0.08), rgba(79, 70, 229, 0.06))
      );
      border-radius: 24px;
      padding: 2rem;
      border: 1px solid var(--md-sys-color-outline-variant, rgba(99, 102, 241, 0.2));
    }

    h2 {
      margin: 0 0 0.75rem;
      font-size: 1.85rem;
      color: var(--md-sys-color-on-surface, #1e293b);
      font-weight: 600;
    }

    p {
      margin: 0;
      color: var(--md-sys-color-on-surface-variant, #475569);
      line-height: 1.6;
    }

    .callouts {
      display: grid;
      gap: 1rem;
      grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
    }

    .callout {
      border-radius: 16px;
      padding: 1rem 1.25rem;
      background: var(--md-sys-color-surface-container-low, rgba(241, 245, 249, 0.92));
      border: 1px solid var(--md-sys-color-outline-variant, rgba(148, 163, 184, 0.28));
      color: var(--md-sys-color-on-surface, #0f172a);
      font-weight: 600;
      text-align: center;
    }

    .callout--info {
      background: var(--md-sys-color-secondary-container, rgba(59, 130, 246, 0.12));
      color: var(--md-sys-color-on-secondary-container, #1d4ed8);
    }

    .callout--error {
      background: var(--md-sys-color-error-container, rgba(220, 38, 38, 0.16));
      color: var(--md-sys-color-on-error-container, #b91c1c);
    }
  `}constructor(){super(),this.initialized=!1,this.initError=null,this.useDemoData=!1}connectedCallback(){super.connectedCallback(),this.initializeStore()}render(){const e=j_.get(),t=null!==R_.get().authUser;return t&&!this.initialized&&this.initializeStore(),t||this.initialized?oe`
      <div class="container">
        <header>
          <h2>Firestore CRUD Pattern</h2>
          <p>
            This teaching demo initialises the shared Firestore store, enables IndexedDB persistence, and connects to
            the emulator so you can explore create, read, update, delete flows in real-time.
          </p>
        </header>

        <div class="callouts">
          <div class="callout">Status: ${e.status}</div>
          <div class="callout">Query: ${e.queryDescription??"Default"}</div>
          <div class="callout">Docs in view: ${e.documents.length}</div>
        </div>

        ${this.initError?oe`<div class="callout callout--error">
              ${this.initError}
            </div>`:oe`<df-firestore-list></df-firestore-list>`}
      </div>
    `:oe`
        <div class="container">
          <header>
            <h2>Firestore CRUD Pattern</h2>
            <p>
              This teaching demo initialises the shared Firestore store, enables IndexedDB persistence, and connects to
              the emulator so you can explore create, read, update, delete flows in real-time.
            </p>
          </header>

          <div class="callout callout--info">
            ℹ️ Please sign in using the Authentication widget above to access Firestore todos.
          </div>
        </div>
      `}async initializeStore(){if(!this.initialized)try{if(this.shouldUseDemoState())return void this.applyDemoState();if(!R_.get().authUser)return;await q_(b_(),w_("firestore")),this.initialized=!0}catch(e){console.error("[df-firestore-demo] Failed to initialise Firestore demo:",e),this.initError="Unable to initialise Firestore demo. Ensure the emulators are running and reload the page."}}shouldUseDemoState(){return this.useDemoData}applyDemoState(){const e={status:"ready",documents:[{id:"demo-todo-1",title:"Plan Firestore walkthrough",description:"Outline create, read, update, delete flows for the workshop.",completed:!1,priority:"high",tags:["teaching","planning"],createdAt:new Date("2025-09-18T14:30:00Z"),updatedAt:new Date("2025-09-18T14:30:00Z"),dueDate:new Date("2025-09-20T17:00:00Z")},{id:"demo-todo-2",title:"Draft CRUD copy",description:"Write helpful placeholder text for the todo form.",completed:!0,priority:"medium",tags:["content","ux"],createdAt:new Date("2025-09-15T09:00:00Z"),updatedAt:new Date("2025-09-19T10:15:00Z"),dueDate:null},{id:"demo-todo-3",title:"Record real-time GIF",description:"Capture a short clip demonstrating Firestore listener updates.",completed:!1,priority:"medium",tags:["media","realtime"],createdAt:new Date("2025-09-21T11:45:00Z"),updatedAt:new Date("2025-09-21T11:45:00Z"),dueDate:new Date("2025-09-25T22:00:00Z")}],error:null,isListening:!1,lastUpdated:Date.now(),currentPage:1,pageSize:5,hasNextPage:!1,hasPreviousPage:!1,queryDescription:this.useDemoData?"Storybook demo data":"Demo data (tests)"};Y_({showCompleted:!0,priority:"all",tag:"all",search:""}),J_(e),this.initialized=!0}};wT([nE({type:Boolean,attribute:"use-demo-data"})],_T.prototype,"useDemoData",void 0),wT([rE()],_T.prototype,"initialized",void 0),wT([rE()],_T.prototype,"initError",void 0),_T=wT([Zx("df-firestore-demo")],_T);var xT=Object.freeze({__proto__:null,get DfFirestoreDemo(){return _T}});const ET=Ie(null),TT=Ie(0);var IT=function(e,t,n,r){var i,s=arguments.length,o=s<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,n):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)o=Reflect.decorate(e,t,n,r);else for(var a=e.length-1;a>=0;a--)(i=e[a])&&(o=(s<3?i(o):s>3?i(t,n,o):i(t,n))||o);return s>3&&o&&Object.defineProperty(t,n,o),o};let ST=class extends(L(Jx)){constructor(){super(),this.variant="button"}static{this.styles=Ox`
    :host {
      display: inline-flex;
      font-family: var(--df-font-family, 'Roboto', sans-serif);
    }
  `}render(){const e=R_.get(),t="authenticated"===e.authState,n="loading"===e.authState;if(!t&&!n)return le;const r=n?"Signing Out…":"Sign Out";return"link"===this.variant?oe`
        <md-text-button @click=${this._handleClick} ?disabled=${n}>
          ${r}
        </md-text-button>
      `:oe`
      <md-filled-button @click=${this._handleClick} ?disabled=${n}>
        ${r}
      </md-filled-button>
    `}async _handleClick(){try{await L_(),this.dispatchEvent(new CustomEvent("df-sign-out-success",{bubbles:!0,composed:!0}))}catch(e){this.dispatchEvent(new CustomEvent("df-sign-out-error",{detail:{error:e instanceof Error?e.message:"Sign out failed"},bubbles:!0,composed:!0}))}}};IT([nE({type:String})],ST.prototype,"variant",void 0),ST=IT([Zx("df-sign-out")],ST);var CT=function(e,t,n,r){var i,s=arguments.length,o=s<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,n):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)o=Reflect.decorate(e,t,n,r);else for(var a=e.length-1;a>=0;a--)(i=e[a])&&(o=(s<3?i(o):s>3?i(t,n,o):i(t,n))||o);return s>3&&o&&Object.defineProperty(t,n,o),o};let kT=class extends(L(Jx)){constructor(){super(),this.compact=!1}static{this.styles=Ox`
    :host {
      display: block;
      font-family: var(--df-font-family, system-ui, sans-serif);
    }

    .profile-container {
      display: flex;
      align-items: center;
      gap: var(--df-spacing-3, 1rem);
      padding: var(--df-spacing-3, 1rem);
      border: 1px solid var(--df-border-color, #e0e0e0);
      border-radius: var(--df-border-radius, 8px);
      background: var(--df-surface-color, #fff);
    }

    .profile-container.compact {
      padding: var(--df-spacing-2, 0.5rem);
      border: none;
    }

    .avatar {
      width: var(--df-avatar-size, 48px);
      height: var(--df-avatar-size, 48px);
      border-radius: 50%;
      background: var(--df-avatar-bg, #e0e0e0);
      display: flex;
      align-items: center;
      justify-content: center;
      overflow: hidden;
    }

    .avatar.compact {
      width: var(--df-avatar-size-compact, 32px);
      height: var(--df-avatar-size-compact, 32px);
    }

    .avatar img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }

    .avatar-fallback {
      font-size: var(--df-avatar-fallback-size, 1.5rem);
      font-weight: var(--df-avatar-fallback-weight, 600);
      color: var(--df-avatar-fallback-color, #666);
    }

    .avatar-fallback.compact {
      font-size: var(--df-avatar-fallback-size-compact, 1rem);
    }

    .profile-info {
      flex: 1;
      display: flex;
      flex-direction: column;
      gap: var(--df-spacing-1, 0.25rem);
    }

    .display-name {
      font-size: var(--df-display-name-size, 1rem);
      font-weight: var(--df-display-name-weight, 600);
      color: var(--df-text-primary, #000);
    }

    .email {
      font-size: var(--df-email-size, 0.875rem);
      color: var(--df-text-secondary, #666);
    }

    .badge {
      display: inline-block;
      padding: var(--df-badge-padding, 0.125rem 0.5rem);
      border-radius: var(--df-badge-radius, 12px);
      background: var(--df-badge-bg, #e3f2fd);
      color: var(--df-badge-color, #1976d2);
      font-size: var(--df-badge-size, 0.75rem);
      font-weight: var(--df-badge-weight, 500);
    }

    .not-authenticated {
      padding: var(--df-spacing-3, 1rem);
      text-align: center;
      color: var(--df-text-secondary, #666);
      font-size: var(--df-not-auth-size, 0.875rem);
    }
  `}render(){const e=R_.get(),t=e.authUser;if(!("authenticated"===e.authState)||!t)return oe`<div class="not-authenticated">Not signed in</div>`;const n=t.displayName||"Anonymous",r=t.email||"",i=t.photoURL,s=t.emailVerified,o=n.charAt(0).toUpperCase(),a=this.compact?"profile-container compact":"profile-container",l=this.compact?"avatar compact":"avatar",c=this.compact?"avatar-fallback compact":"avatar-fallback";return oe`
      <div class=${a}>
        <div class=${l}>
          ${i?oe`<img src=${i} alt=${n} />`:oe`<span class=${c}>${o}</span>`}
        </div>

        ${this.compact?oe`
          <div class="profile-info">
            <div class="display-name">${n}</div>
          </div>
        `:oe`
          <div class="profile-info">
            <div class="display-name">
              ${n}
              ${s?oe`<span class="badge">Verified</span>`:""}
            </div>
            <div class="email">${r}</div>
          </div>
        `}
      </div>
    `}};CT([nE({type:Boolean})],kT.prototype,"compact",void 0),kT=CT([Zx("df-user-profile")],kT);var AT=function(e,t,n,r){var i,s=arguments.length,o=s<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,n):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)o=Reflect.decorate(e,t,n,r);else for(var a=e.length-1;a>=0;a--)(i=e[a])&&(o=(s<3?i(o):s>3?i(t,n,o):i(t,n))||o);return s>3&&o&&Object.defineProperty(t,n,o),o};let DT=class extends Jx{constructor(){super(),this.directory="uploads",this.showDelete=!0,this.showPreviews=!0,this.files=[],this.loading=!1,this.error=null}static{this.styles=Ox`
    :host {
      display: block;
      --md-sys-color-primary: #5f9ea0;
    }

    .file-list-container {
      display: flex;
      flex-direction: column;
      gap: 8px;
    }

    .loading-container,
    .error-container,
    .empty-container {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      padding: 32px;
      gap: 12px;
      color: var(--md-sys-color-on-surface-variant, #666);
    }

    .error-container {
      color: var(--md-sys-color-error, #b00020);
      background-color: var(--md-sys-color-error-container, #fdecea);
      border-radius: 8px;
    }

    .file-item {
      display: flex;
      align-items: center;
      gap: 12px;
      padding: 12px;
      border: 1px solid var(--md-sys-color-outline, #ccc);
      border-radius: 8px;
      background-color: var(--md-sys-color-surface, #fff);
      transition: all 0.2s ease;
      cursor: pointer;
    }

    .file-item:hover {
      background-color: var(--md-sys-color-surface-variant, #f5f5f5);
      border-color: var(--md-sys-color-primary, #5f9ea0);
    }

    .file-preview {
      width: 48px;
      height: 48px;
      border-radius: 6px;
      object-fit: cover;
      background-color: var(--md-sys-color-surface-variant, #f5f5f5);
    }

    .file-icon {
      width: 48px;
      height: 48px;
      display: flex;
      align-items: center;
      justify-content: center;
      border-radius: 6px;
      background-color: var(--md-sys-color-primary-container, #e0f2f1);
    }

    .file-icon md-icon {
      color: var(--md-sys-color-primary, #5f9ea0);
      font-size: 32px;
    }

    .file-info {
      flex: 1;
      min-width: 0;
      display: flex;
      flex-direction: column;
      gap: 4px;
    }

    .file-name {
      font-weight: 500;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
    }

    .file-meta {
      display: flex;
      gap: 12px;
      font-size: 0.875rem;
      color: var(--md-sys-color-on-surface-variant, #666);
    }

    .file-actions {
      display: flex;
      gap: 4px;
    }

    md-text-button {
      --md-text-button-label-text-color: var(--md-sys-color-error, #b00020);
    }
  `}connectedCallback(){super.connectedCallback(),setTimeout(()=>{this.loadFiles()},500)}updated(e){super.updated(e),e.has("directory")&&this.loadFiles()}async loadFiles(){this.loading=!0,this.error=null;try{this.files=await dx(this.directory)}catch(e){e instanceof Ct&&"storage/unauthorized"===e.code?this.error="Sign in is required to view files in this directory.":e instanceof Error?this.error=e.message:this.error="Failed to load files"}finally{this.loading=!1}}async refresh(){await this.loadFiles()}handleFileClick(e){this.dispatchEvent(new CustomEvent("file-select",{detail:{file:e},bubbles:!0,composed:!0}))}handleDeleteClick(e,t){e.stopPropagation(),this.dispatchEvent(new CustomEvent("file-delete",{detail:{file:t},bubbles:!0,composed:!0}))}formatFileSize(e){return e<1024?`${e} B`:e<1048576?`${(e/1024).toFixed(1)} KB`:`${(e/1048576).toFixed(1)} MB`}formatDate(e){return new Intl.DateTimeFormat("en-US",{month:"short",day:"numeric",year:"numeric",hour:"2-digit",minute:"2-digit"}).format(e)}isImage(e){return e.startsWith("image/")}getFileIcon(e){return e.startsWith("image/")?"image":e.startsWith("video/")?"movie":e.startsWith("audio/")?"audio_file":e.includes("pdf")?"picture_as_pdf":e.includes("zip")||e.includes("archive")?"folder_zip":"insert_drive_file"}render(){return this.loading?oe`
        <div class="loading-container">
          <md-circular-progress indeterminate></md-circular-progress>
          <span>Loading files...</span>
        </div>
      `:this.error?oe`
        <div class="error-container">
          <md-icon>error</md-icon>
          <strong>Error loading files</strong>
          <span>${this.error}</span>
        </div>
      `:0===this.files.length?oe`
        <div class="empty-container">
          <md-icon>folder_open</md-icon>
          <span>No files found in ${this.directory}</span>
        </div>
      `:oe`
      <div class="file-list-container">
        ${this.files.map(e=>oe`
            <div class="file-item" @click=${()=>this.handleFileClick(e)}>
              ${this.showPreviews&&this.isImage(e.contentType)?oe`<img src="${e.downloadUrl}" alt="${e.name}" class="file-preview" />`:oe`
                    <div class="file-icon">
                      <md-icon>${this.getFileIcon(e.contentType)}</md-icon>
                    </div>
                  `}

              <div class="file-info">
                <div class="file-name">${e.name}</div>
                <div class="file-meta">
                  <span>${this.formatFileSize(e.size)}</span>
                  <span>•</span>
                  <span>${this.formatDate(e.uploadedAt)}</span>
                </div>
              </div>

              ${this.showDelete?oe`
                    <div class="file-actions">
                      <md-text-button @click=${t=>this.handleDeleteClick(t,e)}>
                        <md-icon slot="icon">delete</md-icon>
                        Delete
                      </md-text-button>
                    </div>
                  `:""}
            </div>
          `)}
      </div>
    `}};AT([nE({type:String})],DT.prototype,"directory",void 0),AT([nE({type:Boolean})],DT.prototype,"showDelete",void 0),AT([nE({type:Boolean})],DT.prototype,"showPreviews",void 0),AT([rE()],DT.prototype,"files",void 0),AT([rE()],DT.prototype,"loading",void 0),AT([rE()],DT.prototype,"error",void 0),DT=AT([Zx("df-file-list")],DT);var NT=function(e,t,n,r){var i,s=arguments.length,o=s<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,n):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)o=Reflect.decorate(e,t,n,r);else for(var a=e.length-1;a>=0;a--)(i=e[a])&&(o=(s<3?i(o):s>3?i(t,n,o):i(t,n))||o);return s>3&&o&&Object.defineProperty(t,n,o),o};let RT=class extends Jx{constructor(){super(),this.file=null,this.showButton=!0,this.buttonLabel="Delete",this.dialogOpen=!1,this.deleting=!1,this.error=null}static{this.styles=Ox`
    :host {
      display: inline-block;
      --md-sys-color-primary: #5f9ea0;
    }

    .delete-button {
      --md-text-button-label-text-color: var(--md-sys-color-error, #b00020);
    }

    .dialog-content {
      display: flex;
      flex-direction: column;
      gap: 16px;
      padding: 24px;
      min-width: 300px;
    }

    .dialog-header {
      display: flex;
      align-items: center;
      gap: 12px;
    }

    .dialog-header md-icon {
      font-size: 32px;
      color: var(--md-sys-color-error, #b00020);
    }

    .dialog-title {
      font-size: 1.25rem;
      font-weight: 500;
    }

    .file-info {
      display: flex;
      align-items: center;
      gap: 12px;
      padding: 12px;
      background-color: var(--md-sys-color-surface-variant, #f5f5f5);
      border-radius: 8px;
    }

    .file-icon {
      width: 40px;
      height: 40px;
      display: flex;
      align-items: center;
      justify-content: center;
      border-radius: 6px;
      background-color: var(--md-sys-color-error-container, #fdecea);
    }

    .file-icon md-icon {
      color: var(--md-sys-color-error, #b00020);
    }

    .file-details {
      flex: 1;
      min-width: 0;
    }

    .file-name {
      font-weight: 500;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
    }

    .file-path {
      font-size: 0.875rem;
      color: var(--md-sys-color-on-surface-variant, #666);
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
    }

    .warning-message {
      color: var(--md-sys-color-error, #b00020);
      font-size: 0.875rem;
      padding: 12px;
      background-color: var(--md-sys-color-error-container, #fdecea);
      border-radius: 8px;
    }

    .error-message {
      color: var(--md-sys-color-error, #b00020);
      padding: 12px;
      background-color: var(--md-sys-color-error-container, #fdecea);
      border-radius: 8px;
      font-size: 0.875rem;
    }

    .dialog-actions {
      display: flex;
      gap: 8px;
      justify-content: flex-end;
      padding-top: 8px;
    }

    md-filled-button.delete-action {
      --md-filled-button-container-color: var(--md-sys-color-error, #b00020);
    }
  `}open(){this.dialogOpen=!0,this.error=null}close(){this.dialogOpen=!1,this.error=null}handleButtonClick(){this.open()}handleCancel(){this.close(),this.dispatchEvent(new CustomEvent("delete-cancel",{bubbles:!0,composed:!0}))}async handleConfirm(){if(this.file){this.dispatchEvent(new CustomEvent("delete-confirm",{detail:{file:this.file},bubbles:!0,composed:!0})),this.deleting=!0,this.error=null;try{await ux(this.file.path),this.dispatchEvent(new CustomEvent("delete-complete",{detail:{file:this.file},bubbles:!0,composed:!0})),this.close()}catch(e){this.error=e instanceof Error?e.message:"Failed to delete file",this.dispatchEvent(new CustomEvent("delete-error",{detail:{file:this.file,error:this.error},bubbles:!0,composed:!0}))}finally{this.deleting=!1}}}getFileIcon(e){return e.startsWith("image/")?"image":e.startsWith("video/")?"movie":e.startsWith("audio/")?"audio_file":e.includes("pdf")?"picture_as_pdf":e.includes("zip")||e.includes("archive")?"folder_zip":"insert_drive_file"}render(){return oe`
      ${this.showButton?oe`
            <md-text-button class="delete-button" @click=${this.handleButtonClick}>
              <md-icon slot="icon">delete</md-icon>
              ${this.buttonLabel}
            </md-text-button>
          `:""}
      ${this.dialogOpen?this.renderDialog():""}
    `}renderDialog(){return this.file?oe`
      <div class="dialog-content">
        <div class="dialog-header">
          <md-icon>warning</md-icon>
          <div class="dialog-title">Delete File?</div>
        </div>

        <div class="file-info">
          <div class="file-icon">
            <md-icon>${this.getFileIcon(this.file.contentType)}</md-icon>
          </div>
          <div class="file-details">
            <div class="file-name">${this.file.name}</div>
            <div class="file-path">${this.file.path}</div>
          </div>
        </div>

        <div class="warning-message">
          <strong>Warning:</strong> This action cannot be undone. The file will be permanently
          deleted from storage.
        </div>

        ${this.error?oe` <div class="error-message"><strong>Error:</strong> ${this.error}</div> `:""}

        <div class="dialog-actions">
          <md-text-button @click=${this.handleCancel} ?disabled=${this.deleting}>
            Cancel
          </md-text-button>
          <md-filled-button
            class="delete-action"
            @click=${this.handleConfirm}
            ?disabled=${this.deleting}
          >
            <md-icon slot="icon">${this.deleting?"hourglass_empty":"delete"}</md-icon>
            ${this.deleting?"Deleting...":"Delete"}
          </md-filled-button>
        </div>
      </div>
    `:oe`
        <div class="dialog-content">
          <div class="error-message">No file selected for deletion</div>
          <div class="dialog-actions">
            <md-text-button @click=${this.handleCancel}>Close</md-text-button>
          </div>
        </div>
      `}};NT([nE({type:Object})],RT.prototype,"file",void 0),NT([nE({type:Boolean})],RT.prototype,"showButton",void 0),NT([nE({type:String})],RT.prototype,"buttonLabel",void 0),NT([rE()],RT.prototype,"dialogOpen",void 0),NT([rE()],RT.prototype,"deleting",void 0),NT([rE()],RT.prototype,"error",void 0),RT=NT([Zx("df-file-delete")],RT);var OT=function(e,t,n,r){var i,s=arguments.length,o=s<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,n):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)o=Reflect.decorate(e,t,n,r);else for(var a=e.length-1;a>=0;a--)(i=e[a])&&(o=(s<3?i(o):s>3?i(t,n,o):i(t,n))||o);return s>3&&o&&Object.defineProperty(t,n,o),o};let PT=class extends(L(Jx)){constructor(){super(...arguments),this.initialized=!1,this.initError=null,this.todoTitle="",this.todoDescription="",this.todoPriority="medium",this.cleanupDays=30,this.exportFormat="csv"}static{this.styles=Ox`
    :host {
      display: block;
      font-family: var(--df-font-family, system-ui, sans-serif);
      width: min(1200px, 90vw);
      margin: 0 auto;
      background: white;
      border-radius: 16px;
      padding: 2rem;
    }

    .container {
      display: grid;
      gap: 1.5rem;
    }

    header {
      background: linear-gradient(130deg, rgba(99, 102, 241, 0.08), rgba(79, 70, 229, 0.06));
      border-radius: 24px;
      padding: 2rem;
      border: 1px solid rgba(99, 102, 241, 0.2);
    }

    h2 {
      margin: 0 0 0.75rem;
      font-size: 1.85rem;
      color: #1e293b;
      font-weight: 600;
    }

    h3 {
      margin: 0 0 1rem;
      font-size: 1.35rem;
      color: #334155;
      font-weight: 600;
    }

    p {
      margin: 0;
      color: #475569;
      line-height: 1.6;
    }

    .function-section {
      border-radius: 16px;
      padding: 1.5rem;
      background: rgba(241, 245, 249, 0.92);
      border: 1px solid rgba(148, 163, 184, 0.28);
    }

    .function-description {
      margin: 0 0 1.25rem;
      color: #64748b;
      font-size: 0.95rem;
      line-height: 1.5;
    }

    .form-row {
      display: grid;
      gap: 1rem;
      margin-bottom: 1rem;
    }

    .form-group {
      display: flex;
      flex-direction: column;
      gap: 0.5rem;
    }

    label {
      font-size: 0.9rem;
      font-weight: 600;
      color: #475569;
    }

    md-outlined-text-field,
    md-filled-select {
      width: 100%;
    }

    .button-group {
      display: flex;
      gap: 0.75rem;
      align-items: center;
      margin-top: 1rem;
    }

    .status {
      padding: 0.75rem 1rem;
      border-radius: 12px;
      font-size: 0.9rem;
      margin-top: 1rem;
    }

    .status.loading {
      background: rgba(59, 130, 246, 0.1);
      color: #1e40af;
      border: 1px solid rgba(59, 130, 246, 0.3);
      display: flex;
      align-items: center;
      gap: 0.75rem;
    }

    .status.success {
      background: rgba(34, 197, 94, 0.1);
      color: #15803d;
      border: 1px solid rgba(34, 197, 94, 0.3);
    }

    .status.error {
      background: rgba(239, 68, 68, 0.1);
      color: #b91c1c;
      border: 1px solid rgba(239, 68, 68, 0.3);
    }

    .result {
      margin-top: 1rem;
      padding: 1rem;
      background: white;
      border-radius: 12px;
      border: 1px solid rgba(148, 163, 184, 0.28);
      font-family: 'Monaco', 'Courier New', monospace;
      font-size: 0.85rem;
      white-space: pre-wrap;
      word-break: break-word;
      max-height: 300px;
      overflow-y: auto;
    }

    .callouts {
      display: grid;
      gap: 1rem;
      grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
    }

    .callout {
      border-radius: 16px;
      padding: 1rem 1.25rem;
      background: rgba(241, 245, 249, 0.92);
      border: 1px solid rgba(148, 163, 184, 0.28);
      color: #0f172a;
      font-weight: 600;
      text-align: center;
    }

    .init-error {
      background: rgba(220, 38, 38, 0.16);
      color: #b91c1c;
      padding: 1rem;
      border-radius: 12px;
    }
  `}connectedCallback(){super.connectedCallback(),this.initializeStore()}render(){return this.initError?oe`
        <div class="container">
          <header>
            <h2>Cloud Functions Pattern</h2>
            <p>Unable to initialize Cloud Functions demo.</p>
          </header>
          <div class="init-error">${this.initError}</div>
        </div>
      `:this.initialized?oe`
      <div class="container">
        <header>
          <h2>Cloud Functions Pattern</h2>
          <p>
            This teaching demo demonstrates calling Cloud Functions from the client using signals-based state
            management. All functions run in the emulator for 100% offline development.
          </p>
        </header>

        <div class="callouts">
          <div class="callout">Callable Functions: 2</div>
          <div class="callout">HTTP Functions: 1</div>
          <div class="callout">Triggers: 3 (background)</div>
          <div class="callout">Scheduled: 1 (cron)</div>
        </div>

        ${this.renderCreateTodoFunction()} ${this.renderCleanupFunction()} ${this.renderExportFunction()}
      </div>
    `:oe`
        <div class="container">
          <header>
            <h2>Cloud Functions Pattern</h2>
            <p>Initializing...</p>
          </header>
        </div>
      `}renderCreateTodoFunction(){const e=gx.get();return oe`
      <div class="function-section">
        <h3>1. Callable Function: createTodoAdvanced</h3>
        <p class="function-description">
          Demonstrates a callable function with server-side business logic. The function calculates estimated effort
          and urgency score based on the todo details.
        </p>

        <div class="form-row">
          <div class="form-group">
            <label>Title *</label>
            <md-outlined-text-field
              type="text"
              .value=${this.todoTitle}
              @input=${e=>{this.todoTitle=e.target.value}}
              placeholder="Enter todo title"
            ></md-outlined-text-field>
          </div>
        </div>

        <div class="form-row">
          <div class="form-group">
            <label>Description</label>
            <md-outlined-text-field
              type="textarea"
              rows="3"
              .value=${this.todoDescription}
              @input=${e=>{this.todoDescription=e.target.value}}
              placeholder="Enter todo description"
            ></md-outlined-text-field>
          </div>
        </div>

        <div class="form-row">
          <div class="form-group">
            <label>Priority</label>
            <md-filled-select
              .value=${this.todoPriority}
              @change=${e=>{this.todoPriority=e.target.value}}
            >
              <md-select-option value="low">
                <div slot="headline">Low</div>
              </md-select-option>
              <md-select-option value="medium" selected>
                <div slot="headline">Medium</div>
              </md-select-option>
              <md-select-option value="high">
                <div slot="headline">High</div>
              </md-select-option>
            </md-filled-select>
          </div>
        </div>

        <div class="button-group">
          <md-filled-button @click=${this.handleCreateTodo} ?disabled=${"loading"===e.status}>
            Call Function
          </md-filled-button>
          <md-outlined-button @click=${this.handleResetCreateTodo} ?disabled=${"loading"===e.status}>
            Reset
          </md-outlined-button>
        </div>

        ${"loading"===e.status?oe`<div class="status loading">
              <md-circular-progress indeterminate></md-circular-progress>
              <span>Calling function...</span>
            </div>`:""}
        ${"success"===e.status&&e.data?oe`<div class="status success">
                Success! Todo created with ID: ${e.data.todoId}
              </div>
              <div class="result">${JSON.stringify(e.data,null,2)}</div>`:""}
        ${"error"===e.status?oe`<div class="status error">Error: ${e.error}</div>`:""}
      </div>
    `}renderCleanupFunction(){const e=vx.get();return oe`
      <div class="function-section">
        <h3>2. Callable Function: manualCleanupExpiredTodos</h3>
        <p class="function-description">
          Demonstrates an administrative callable function. Deletes completed todos older than the specified number of
          days. Requires authentication.
        </p>

        <div class="form-row">
          <div class="form-group">
            <label>Days Old (1-365)</label>
            <md-outlined-text-field
              type="number"
              .value=${String(this.cleanupDays)}
              @input=${e=>{this.cleanupDays=parseInt(e.target.value)||30}}
              min="1"
              max="365"
            ></md-outlined-text-field>
          </div>
        </div>

        <div class="button-group">
          <md-filled-button @click=${this.handleCleanup} ?disabled=${"loading"===e.status}>
            Trigger Cleanup
          </md-filled-button>
          <md-outlined-button @click=${this.handleResetCleanup} ?disabled=${"loading"===e.status}>
            Reset
          </md-outlined-button>
        </div>

        ${"loading"===e.status?oe`<div class="status loading">
              <md-circular-progress indeterminate></md-circular-progress>
              <span>Running cleanup...</span>
            </div>`:""}
        ${"success"===e.status&&e.data?oe`<div class="status success">${e.data.message}</div>
              <div class="result">${JSON.stringify(e.data,null,2)}</div>`:""}
        ${"error"===e.status?oe`<div class="status error">Error: ${e.error}</div>`:""}
      </div>
    `}renderExportFunction(){const e=yx.get();return oe`
      <div class="function-section">
        <h3>3. HTTP Function: todosExportAPI</h3>
        <p class="function-description">
          Demonstrates an HTTP function accessed via standard fetch. Exports todos in CSV or JSON format. Uses query
          parameters for configuration.
        </p>

        <div class="form-row">
          <div class="form-group">
            <label>Export Format</label>
            <md-filled-select
              .value=${this.exportFormat}
              @change=${e=>{this.exportFormat=e.target.value}}
            >
              <md-select-option value="csv" selected>
                <div slot="headline">CSV</div>
              </md-select-option>
              <md-select-option value="json">
                <div slot="headline">JSON</div>
              </md-select-option>
            </md-filled-select>
          </div>
        </div>

        <div class="button-group">
          <md-filled-button @click=${this.handleExport} ?disabled=${"loading"===e.status}>
            Export Todos
          </md-filled-button>
          <md-outlined-button @click=${this.handleResetExport} ?disabled=${"loading"===e.status}>
            Reset
          </md-outlined-button>
        </div>

        ${"loading"===e.status?oe`<div class="status loading">
              <md-circular-progress indeterminate></md-circular-progress>
              <span>Exporting...</span>
            </div>`:""}
        ${"success"===e.status&&e.data?oe`<div class="status success">Export complete! ${e.data.split("\n").length} lines returned</div>
              <div class="result">${e.data}</div>`:""}
        ${"error"===e.status?oe`<div class="status error">Error: ${e.error}</div>`:""}
      </div>
    `}async initializeStore(){this.initialized||(this.initialized=!0)}async handleCreateTodo(){if(!this.todoTitle.trim())return;const e={title:this.todoTitle,description:this.todoDescription||void 0,priority:this.todoPriority,tags:["demo","functions"]};try{await async function(e){const t=bx();px.set({status:"loading",data:null,error:null,lastCalled:new Date});try{const n=d_(t,"createTodoAdvanced"),r=await n(e);return px.set({status:"success",data:r.data,error:null,lastCalled:new Date}),r.data}catch(e){const t=e instanceof Error?e.message:"Unknown error occurred";throw px.set({status:"error",data:null,error:t,lastCalled:new Date}),e}}(e)}catch(e){console.error("Failed to create todo:",e)}}handleResetCreateTodo(){this.todoTitle="",this.todoDescription="",this.todoPriority="medium",px.set({status:"idle",data:null,error:null,lastCalled:null})}async handleCleanup(){try{await async function(e={}){const t=bx();fx.set({status:"loading",data:null,error:null,lastCalled:new Date});try{const n=d_(t,"manualCleanupExpiredTodos"),r=await n(e);return fx.set({status:"success",data:r.data,error:null,lastCalled:new Date}),r.data}catch(e){const t=e instanceof Error?e.message:"Unknown error occurred";throw fx.set({status:"error",data:null,error:t,lastCalled:new Date}),e}}({daysOld:this.cleanupDays})}catch(e){console.error("Failed to run cleanup:",e)}}handleResetCleanup(){this.cleanupDays=30,fx.set({status:"idle",data:null,error:null,lastCalled:null})}async handleExport(){try{await async function(e="csv"){mx.set({status:"loading",data:null,error:null,lastCalled:new Date});try{const t=b_().options.projectId||"peg-2035",n=`${w_("functions")?`http://127.0.0.1:5501/${t}/us-central1`:`https://us-central1-${t}.cloudfunctions.net`}/todosExportAPI?format=${e}`,r=await fetch(n);if(!r.ok)throw new Error(`HTTP ${r.status}: ${r.statusText}`);const i=await r.text();return mx.set({status:"success",data:i,error:null,lastCalled:new Date}),i}catch(e){const t=e instanceof Error?e.message:"Unknown error occurred";throw mx.set({status:"error",data:null,error:t,lastCalled:new Date}),e}}(this.exportFormat)}catch(e){console.error("Failed to export todos:",e)}}handleResetExport(){this.exportFormat="csv",mx.set({status:"idle",data:null,error:null,lastCalled:null})}};OT([rE()],PT.prototype,"initialized",void 0),OT([rE()],PT.prototype,"initError",void 0),OT([rE()],PT.prototype,"todoTitle",void 0),OT([rE()],PT.prototype,"todoDescription",void 0),OT([rE()],PT.prototype,"todoPriority",void 0),OT([rE()],PT.prototype,"cleanupDays",void 0),OT([rE()],PT.prototype,"exportFormat",void 0),PT=OT([Zx("df-functions-demo")],PT);var LT=Object.freeze({__proto__:null,get DfFunctionsDemo(){return PT}});
/**
 * @license
 * Copyright 2023 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */const $T=NE(Jx);class MT extends $T{constructor(){super(...arguments),this.value=0,this.max=1,this.indeterminate=!1,this.fourColor=!1}render(){const{ariaLabel:e}=this;return oe`
      <div
        class="progress ${yE(this.getRenderClasses())}"
        role="progressbar"
        aria-label="${e||le}"
        aria-valuemin="0"
        aria-valuemax=${this.max}
        aria-valuenow=${this.indeterminate?le:this.value}
        >${this.renderIndicator()}</div
      >
    `}getRenderClasses(){return{indeterminate:this.indeterminate,"four-color":this.fourColor}}}pr([nE({type:Number})],MT.prototype,"value",void 0),pr([nE({type:Number})],MT.prototype,"max",void 0),pr([nE({type:Boolean})],MT.prototype,"indeterminate",void 0),pr([nE({type:Boolean,attribute:"four-color"})],MT.prototype,"fourColor",void 0);
/**
 * @license
 * Copyright 2023 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */
class UT extends MT{renderIndicator(){return this.indeterminate?this.renderIndeterminateContainer():this.renderDeterminateContainer()}renderDeterminateContainer(){const e=100*(1-this.value/this.max);return oe`
      <svg viewBox="0 0 4800 4800">
        <circle class="track" pathLength="100"></circle>
        <circle
          class="active-track"
          pathLength="100"
          stroke-dashoffset=${e}></circle>
      </svg>
    `}renderIndeterminateContainer(){return oe` <div class="spinner">
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
 */const FT=Ox`:host{--_active-indicator-color: var(--md-circular-progress-active-indicator-color, var(--md-sys-color-primary, #6750a4));--_active-indicator-width: var(--md-circular-progress-active-indicator-width, 10);--_four-color-active-indicator-four-color: var(--md-circular-progress-four-color-active-indicator-four-color, var(--md-sys-color-tertiary-container, #ffd8e4));--_four-color-active-indicator-one-color: var(--md-circular-progress-four-color-active-indicator-one-color, var(--md-sys-color-primary, #6750a4));--_four-color-active-indicator-three-color: var(--md-circular-progress-four-color-active-indicator-three-color, var(--md-sys-color-tertiary, #7d5260));--_four-color-active-indicator-two-color: var(--md-circular-progress-four-color-active-indicator-two-color, var(--md-sys-color-primary-container, #eaddff));--_size: var(--md-circular-progress-size, 48px);display:inline-flex;vertical-align:middle;width:var(--_size);height:var(--_size);position:relative;align-items:center;justify-content:center;contain:strict;content-visibility:auto}.progress{flex:1;align-self:stretch;margin:4px}.progress,.spinner,.left,.right,.circle,svg,.track,.active-track{position:absolute;inset:0}svg{transform:rotate(-90deg)}circle{cx:50%;cy:50%;r:calc(50%*(1 - var(--_active-indicator-width)/100));stroke-width:calc(var(--_active-indicator-width)*1%);stroke-dasharray:100;fill:rgba(0,0,0,0)}.active-track{transition:stroke-dashoffset 500ms cubic-bezier(0, 0, 0.2, 1);stroke:var(--_active-indicator-color)}.track{stroke:rgba(0,0,0,0)}.progress.indeterminate{animation:linear infinite linear-rotate;animation-duration:1568.2352941176ms}.spinner{animation:infinite both rotate-arc;animation-duration:5332ms;animation-timing-function:cubic-bezier(0.4, 0, 0.2, 1)}.left{overflow:hidden;inset:0 50% 0 0}.right{overflow:hidden;inset:0 0 0 50%}.circle{box-sizing:border-box;border-radius:50%;border:solid calc(var(--_active-indicator-width)/100*(var(--_size) - 8px));border-color:var(--_active-indicator-color) var(--_active-indicator-color) rgba(0,0,0,0) rgba(0,0,0,0);animation:expand-arc;animation-iteration-count:infinite;animation-fill-mode:both;animation-duration:1333ms,5332ms;animation-timing-function:cubic-bezier(0.4, 0, 0.2, 1)}.four-color .circle{animation-name:expand-arc,four-color}.left .circle{rotate:135deg;inset:0 -100% 0 0}.right .circle{rotate:100deg;inset:0 0 0 -100%;animation-delay:-666.5ms,0ms}@media(forced-colors: active){.active-track{stroke:CanvasText}.circle{border-color:CanvasText CanvasText Canvas Canvas}}@keyframes expand-arc{0%{transform:rotate(265deg)}50%{transform:rotate(130deg)}100%{transform:rotate(265deg)}}@keyframes rotate-arc{12.5%{transform:rotate(135deg)}25%{transform:rotate(270deg)}37.5%{transform:rotate(405deg)}50%{transform:rotate(540deg)}62.5%{transform:rotate(675deg)}75%{transform:rotate(810deg)}87.5%{transform:rotate(945deg)}100%{transform:rotate(1080deg)}}@keyframes linear-rotate{to{transform:rotate(360deg)}}@keyframes four-color{0%{border-top-color:var(--_four-color-active-indicator-one-color);border-right-color:var(--_four-color-active-indicator-one-color)}15%{border-top-color:var(--_four-color-active-indicator-one-color);border-right-color:var(--_four-color-active-indicator-one-color)}25%{border-top-color:var(--_four-color-active-indicator-two-color);border-right-color:var(--_four-color-active-indicator-two-color)}40%{border-top-color:var(--_four-color-active-indicator-two-color);border-right-color:var(--_four-color-active-indicator-two-color)}50%{border-top-color:var(--_four-color-active-indicator-three-color);border-right-color:var(--_four-color-active-indicator-three-color)}65%{border-top-color:var(--_four-color-active-indicator-three-color);border-right-color:var(--_four-color-active-indicator-three-color)}75%{border-top-color:var(--_four-color-active-indicator-four-color);border-right-color:var(--_four-color-active-indicator-four-color)}90%{border-top-color:var(--_four-color-active-indicator-four-color);border-right-color:var(--_four-color-active-indicator-four-color)}100%{border-top-color:var(--_four-color-active-indicator-one-color);border-right-color:var(--_four-color-active-indicator-one-color)}}
`
/**
 * @license
 * Copyright 2023 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */;let VT=class extends UT{};VT.styles=[FT],VT=pr([Zx("md-circular-progress")],VT);
/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */
class zT extends Jx{constructor(){super(...arguments),this.disabled=!1,this.error=!1,this.focused=!1,this.label="",this.noAsterisk=!1,this.populated=!1,this.required=!1,this.resizable=!1,this.supportingText="",this.errorText="",this.count=-1,this.max=-1,this.hasStart=!1,this.hasEnd=!1,this.isAnimating=!1,this.refreshErrorAlert=!1,this.disableTransitions=!1}get counterText(){const e=this.count??-1,t=this.max??-1;return e<0||t<=0?"":`${e} / ${t}`}get supportingOrErrorText(){return this.error&&this.errorText?this.errorText:this.supportingText}reannounceError(){this.refreshErrorAlert=!0}update(e){e.has("disabled")&&void 0!==e.get("disabled")&&(this.disableTransitions=!0),this.disabled&&this.focused&&(e.set("focused",!0),this.focused=!1),this.animateLabelIfNeeded({wasFocused:e.get("focused"),wasPopulated:e.get("populated")}),super.update(e)}render(){const e=this.renderLabel(!0),t=this.renderLabel(!1),n=this.renderOutline?.(e),r={disabled:this.disabled,"disable-transitions":this.disableTransitions,error:this.error&&!this.disabled,focused:this.focused,"with-start":this.hasStart,"with-end":this.hasEnd,populated:this.populated,resizable:this.resizable,required:this.required,"no-label":!this.label};return oe`
      <div class="field ${yE(r)}">
        <div class="container-overflow">
          ${this.renderBackground?.()}
          <slot name="container"></slot>
          ${this.renderStateLayer?.()} ${this.renderIndicator?.()} ${n}
          <div class="container">
            <div class="start">
              <slot name="start"></slot>
            </div>
            <div class="middle">
              <div class="label-wrapper">
                ${t} ${n?le:e}
              </div>
              <div class="content">
                <slot></slot>
              </div>
            </div>
            <div class="end">
              <slot name="end"></slot>
            </div>
          </div>
        </div>
        ${this.renderSupportingText()}
      </div>
    `}updated(e){(e.has("supportingText")||e.has("errorText")||e.has("count")||e.has("max"))&&this.updateSlottedAriaDescribedBy(),this.refreshErrorAlert&&requestAnimationFrame(()=>{this.refreshErrorAlert=!1}),this.disableTransitions&&requestAnimationFrame(()=>{this.disableTransitions=!1})}renderSupportingText(){const{supportingOrErrorText:e,counterText:t}=this;if(!e&&!t)return le;const n=oe`<span>${e}</span>`,r=t?oe`<span class="counter">${t}</span>`:le,i=this.error&&this.errorText&&!this.refreshErrorAlert;return oe`
      <div class="supporting-text" role=${i?"alert":le}>${n}${r}</div>
      <slot
        name="aria-describedby"
        @slotchange=${this.updateSlottedAriaDescribedBy}></slot>
    `}updateSlottedAriaDescribedBy(){for(const e of this.slottedAriaDescribedBy)Ee(oe`${this.supportingOrErrorText} ${this.counterText}`,e),e.setAttribute("hidden","")}renderLabel(e){if(!this.label)return le;let t;t=e?this.focused||this.populated||this.isAnimating:!this.focused&&!this.populated&&!this.isAnimating;const n={hidden:!t,floating:e,resting:!e},r=`${this.label}${this.required&&!this.noAsterisk?"*":""}`;return oe`
      <span class="label ${yE(n)}" aria-hidden=${!t}
        >${r}</span
      >
    `}animateLabelIfNeeded({wasFocused:e,wasPopulated:t}){if(!this.label)return;e??=this.focused,t??=this.populated;(e||t)!==(this.focused||this.populated)&&(this.isAnimating=!0,this.labelAnimation?.cancel(),this.labelAnimation=this.floatingLabelEl?.animate(this.getLabelKeyframes(),{duration:150,easing:bE}),this.labelAnimation?.addEventListener("finish",()=>{this.isAnimating=!1}))}getLabelKeyframes(){const{floatingLabelEl:e,restingLabelEl:t}=this;if(!e||!t)return[];const{x:n,y:r,height:i}=e.getBoundingClientRect(),{x:s,y:o,height:a}=t.getBoundingClientRect(),l=e.scrollWidth,c=t.scrollWidth,u=c/l,d=`translateX(${s-n}px) translateY(${o-r+Math.round((a-i*u)/2)}px) scale(${u})`,h="translateX(0) translateY(0) scale(1)",p=t.clientWidth,f=c>p?p/u+"px":"";return this.focused||this.populated?[{transform:d,width:f},{transform:h,width:f}]:[{transform:h,width:f},{transform:d,width:f}]}getSurfacePositionClientRect(){return this.containerEl.getBoundingClientRect()}}pr([nE({type:Boolean})],zT.prototype,"disabled",void 0),pr([nE({type:Boolean})],zT.prototype,"error",void 0),pr([nE({type:Boolean})],zT.prototype,"focused",void 0),pr([nE()],zT.prototype,"label",void 0),pr([nE({type:Boolean,attribute:"no-asterisk"})],zT.prototype,"noAsterisk",void 0),pr([nE({type:Boolean})],zT.prototype,"populated",void 0),pr([nE({type:Boolean})],zT.prototype,"required",void 0),pr([nE({type:Boolean})],zT.prototype,"resizable",void 0),pr([nE({attribute:"supporting-text"})],zT.prototype,"supportingText",void 0),pr([nE({attribute:"error-text"})],zT.prototype,"errorText",void 0),pr([nE({type:Number})],zT.prototype,"count",void 0),pr([nE({type:Number})],zT.prototype,"max",void 0),pr([nE({type:Boolean,attribute:"has-start"})],zT.prototype,"hasStart",void 0),pr([nE({type:Boolean,attribute:"has-end"})],zT.prototype,"hasEnd",void 0),pr([oE({slot:"aria-describedby"})],zT.prototype,"slottedAriaDescribedBy",void 0),pr([rE()],zT.prototype,"isAnimating",void 0),pr([rE()],zT.prototype,"refreshErrorAlert",void 0),pr([rE()],zT.prototype,"disableTransitions",void 0),pr([sE(".label.floating")],zT.prototype,"floatingLabelEl",void 0),pr([sE(".label.resting")],zT.prototype,"restingLabelEl",void 0),pr([sE(".container")],zT.prototype,"containerEl",void 0);
/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */
class jT extends zT{renderOutline(e){return oe`
      <div class="outline">
        <div class="outline-start"></div>
        <div class="outline-notch">
          <div class="outline-panel-inactive"></div>
          <div class="outline-panel-active"></div>
          <div class="outline-label">${e}</div>
        </div>
        <div class="outline-end"></div>
      </div>
    `}}
/**
 * @license
 * Copyright 2024 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */const BT=Ox`@layer styles{:host{--_bottom-space: var(--md-outlined-field-bottom-space, 16px);--_content-color: var(--md-outlined-field-content-color, var(--md-sys-color-on-surface, #1d1b20));--_content-font: var(--md-outlined-field-content-font, var(--md-sys-typescale-body-large-font, var(--md-ref-typeface-plain, Roboto)));--_content-line-height: var(--md-outlined-field-content-line-height, var(--md-sys-typescale-body-large-line-height, 1.5rem));--_content-size: var(--md-outlined-field-content-size, var(--md-sys-typescale-body-large-size, 1rem));--_content-space: var(--md-outlined-field-content-space, 16px);--_content-weight: var(--md-outlined-field-content-weight, var(--md-sys-typescale-body-large-weight, var(--md-ref-typeface-weight-regular, 400)));--_disabled-content-color: var(--md-outlined-field-disabled-content-color, var(--md-sys-color-on-surface, #1d1b20));--_disabled-content-opacity: var(--md-outlined-field-disabled-content-opacity, 0.38);--_disabled-label-text-color: var(--md-outlined-field-disabled-label-text-color, var(--md-sys-color-on-surface, #1d1b20));--_disabled-label-text-opacity: var(--md-outlined-field-disabled-label-text-opacity, 0.38);--_disabled-leading-content-color: var(--md-outlined-field-disabled-leading-content-color, var(--md-sys-color-on-surface, #1d1b20));--_disabled-leading-content-opacity: var(--md-outlined-field-disabled-leading-content-opacity, 0.38);--_disabled-outline-color: var(--md-outlined-field-disabled-outline-color, var(--md-sys-color-on-surface, #1d1b20));--_disabled-outline-opacity: var(--md-outlined-field-disabled-outline-opacity, 0.12);--_disabled-outline-width: var(--md-outlined-field-disabled-outline-width, 1px);--_disabled-supporting-text-color: var(--md-outlined-field-disabled-supporting-text-color, var(--md-sys-color-on-surface, #1d1b20));--_disabled-supporting-text-opacity: var(--md-outlined-field-disabled-supporting-text-opacity, 0.38);--_disabled-trailing-content-color: var(--md-outlined-field-disabled-trailing-content-color, var(--md-sys-color-on-surface, #1d1b20));--_disabled-trailing-content-opacity: var(--md-outlined-field-disabled-trailing-content-opacity, 0.38);--_error-content-color: var(--md-outlined-field-error-content-color, var(--md-sys-color-on-surface, #1d1b20));--_error-focus-content-color: var(--md-outlined-field-error-focus-content-color, var(--md-sys-color-on-surface, #1d1b20));--_error-focus-label-text-color: var(--md-outlined-field-error-focus-label-text-color, var(--md-sys-color-error, #b3261e));--_error-focus-leading-content-color: var(--md-outlined-field-error-focus-leading-content-color, var(--md-sys-color-on-surface-variant, #49454f));--_error-focus-outline-color: var(--md-outlined-field-error-focus-outline-color, var(--md-sys-color-error, #b3261e));--_error-focus-supporting-text-color: var(--md-outlined-field-error-focus-supporting-text-color, var(--md-sys-color-error, #b3261e));--_error-focus-trailing-content-color: var(--md-outlined-field-error-focus-trailing-content-color, var(--md-sys-color-error, #b3261e));--_error-hover-content-color: var(--md-outlined-field-error-hover-content-color, var(--md-sys-color-on-surface, #1d1b20));--_error-hover-label-text-color: var(--md-outlined-field-error-hover-label-text-color, var(--md-sys-color-on-error-container, #410e0b));--_error-hover-leading-content-color: var(--md-outlined-field-error-hover-leading-content-color, var(--md-sys-color-on-surface-variant, #49454f));--_error-hover-outline-color: var(--md-outlined-field-error-hover-outline-color, var(--md-sys-color-on-error-container, #410e0b));--_error-hover-supporting-text-color: var(--md-outlined-field-error-hover-supporting-text-color, var(--md-sys-color-error, #b3261e));--_error-hover-trailing-content-color: var(--md-outlined-field-error-hover-trailing-content-color, var(--md-sys-color-on-error-container, #410e0b));--_error-label-text-color: var(--md-outlined-field-error-label-text-color, var(--md-sys-color-error, #b3261e));--_error-leading-content-color: var(--md-outlined-field-error-leading-content-color, var(--md-sys-color-on-surface-variant, #49454f));--_error-outline-color: var(--md-outlined-field-error-outline-color, var(--md-sys-color-error, #b3261e));--_error-supporting-text-color: var(--md-outlined-field-error-supporting-text-color, var(--md-sys-color-error, #b3261e));--_error-trailing-content-color: var(--md-outlined-field-error-trailing-content-color, var(--md-sys-color-error, #b3261e));--_focus-content-color: var(--md-outlined-field-focus-content-color, var(--md-sys-color-on-surface, #1d1b20));--_focus-label-text-color: var(--md-outlined-field-focus-label-text-color, var(--md-sys-color-primary, #6750a4));--_focus-leading-content-color: var(--md-outlined-field-focus-leading-content-color, var(--md-sys-color-on-surface-variant, #49454f));--_focus-outline-color: var(--md-outlined-field-focus-outline-color, var(--md-sys-color-primary, #6750a4));--_focus-outline-width: var(--md-outlined-field-focus-outline-width, 3px);--_focus-supporting-text-color: var(--md-outlined-field-focus-supporting-text-color, var(--md-sys-color-on-surface-variant, #49454f));--_focus-trailing-content-color: var(--md-outlined-field-focus-trailing-content-color, var(--md-sys-color-on-surface-variant, #49454f));--_hover-content-color: var(--md-outlined-field-hover-content-color, var(--md-sys-color-on-surface, #1d1b20));--_hover-label-text-color: var(--md-outlined-field-hover-label-text-color, var(--md-sys-color-on-surface, #1d1b20));--_hover-leading-content-color: var(--md-outlined-field-hover-leading-content-color, var(--md-sys-color-on-surface-variant, #49454f));--_hover-outline-color: var(--md-outlined-field-hover-outline-color, var(--md-sys-color-on-surface, #1d1b20));--_hover-outline-width: var(--md-outlined-field-hover-outline-width, 1px);--_hover-supporting-text-color: var(--md-outlined-field-hover-supporting-text-color, var(--md-sys-color-on-surface-variant, #49454f));--_hover-trailing-content-color: var(--md-outlined-field-hover-trailing-content-color, var(--md-sys-color-on-surface-variant, #49454f));--_label-text-color: var(--md-outlined-field-label-text-color, var(--md-sys-color-on-surface-variant, #49454f));--_label-text-font: var(--md-outlined-field-label-text-font, var(--md-sys-typescale-body-large-font, var(--md-ref-typeface-plain, Roboto)));--_label-text-line-height: var(--md-outlined-field-label-text-line-height, var(--md-sys-typescale-body-large-line-height, 1.5rem));--_label-text-padding-bottom: var(--md-outlined-field-label-text-padding-bottom, 8px);--_label-text-populated-line-height: var(--md-outlined-field-label-text-populated-line-height, var(--md-sys-typescale-body-small-line-height, 1rem));--_label-text-populated-size: var(--md-outlined-field-label-text-populated-size, var(--md-sys-typescale-body-small-size, 0.75rem));--_label-text-size: var(--md-outlined-field-label-text-size, var(--md-sys-typescale-body-large-size, 1rem));--_label-text-weight: var(--md-outlined-field-label-text-weight, var(--md-sys-typescale-body-large-weight, var(--md-ref-typeface-weight-regular, 400)));--_leading-content-color: var(--md-outlined-field-leading-content-color, var(--md-sys-color-on-surface-variant, #49454f));--_leading-space: var(--md-outlined-field-leading-space, 16px);--_outline-color: var(--md-outlined-field-outline-color, var(--md-sys-color-outline, #79747e));--_outline-label-padding: var(--md-outlined-field-outline-label-padding, 4px);--_outline-width: var(--md-outlined-field-outline-width, 1px);--_supporting-text-color: var(--md-outlined-field-supporting-text-color, var(--md-sys-color-on-surface-variant, #49454f));--_supporting-text-font: var(--md-outlined-field-supporting-text-font, var(--md-sys-typescale-body-small-font, var(--md-ref-typeface-plain, Roboto)));--_supporting-text-leading-space: var(--md-outlined-field-supporting-text-leading-space, 16px);--_supporting-text-line-height: var(--md-outlined-field-supporting-text-line-height, var(--md-sys-typescale-body-small-line-height, 1rem));--_supporting-text-size: var(--md-outlined-field-supporting-text-size, var(--md-sys-typescale-body-small-size, 0.75rem));--_supporting-text-top-space: var(--md-outlined-field-supporting-text-top-space, 4px);--_supporting-text-trailing-space: var(--md-outlined-field-supporting-text-trailing-space, 16px);--_supporting-text-weight: var(--md-outlined-field-supporting-text-weight, var(--md-sys-typescale-body-small-weight, var(--md-ref-typeface-weight-regular, 400)));--_top-space: var(--md-outlined-field-top-space, 16px);--_trailing-content-color: var(--md-outlined-field-trailing-content-color, var(--md-sys-color-on-surface-variant, #49454f));--_trailing-space: var(--md-outlined-field-trailing-space, 16px);--_with-leading-content-leading-space: var(--md-outlined-field-with-leading-content-leading-space, 12px);--_with-trailing-content-trailing-space: var(--md-outlined-field-with-trailing-content-trailing-space, 12px);--_container-shape-start-start: var(--md-outlined-field-container-shape-start-start, var(--md-outlined-field-container-shape, var(--md-sys-shape-corner-extra-small, 4px)));--_container-shape-start-end: var(--md-outlined-field-container-shape-start-end, var(--md-outlined-field-container-shape, var(--md-sys-shape-corner-extra-small, 4px)));--_container-shape-end-end: var(--md-outlined-field-container-shape-end-end, var(--md-outlined-field-container-shape, var(--md-sys-shape-corner-extra-small, 4px)));--_container-shape-end-start: var(--md-outlined-field-container-shape-end-start, var(--md-outlined-field-container-shape, var(--md-sys-shape-corner-extra-small, 4px)))}.outline{border-color:var(--_outline-color);border-radius:inherit;display:flex;pointer-events:none;height:100%;position:absolute;width:100%;z-index:1}.outline-start::before,.outline-start::after,.outline-panel-inactive::before,.outline-panel-inactive::after,.outline-panel-active::before,.outline-panel-active::after,.outline-end::before,.outline-end::after{border:inherit;content:"";inset:0;position:absolute}.outline-start,.outline-end{border:inherit;border-radius:inherit;box-sizing:border-box;position:relative}.outline-start::before,.outline-start::after,.outline-end::before,.outline-end::after{border-bottom-style:solid;border-top-style:solid}.outline-start::after,.outline-end::after{opacity:0;transition:opacity 150ms cubic-bezier(0.2, 0, 0, 1)}.focused .outline-start::after,.focused .outline-end::after{opacity:1}.outline-start::before,.outline-start::after{border-inline-start-style:solid;border-inline-end-style:none;border-start-start-radius:inherit;border-start-end-radius:0;border-end-start-radius:inherit;border-end-end-radius:0;margin-inline-end:var(--_outline-label-padding)}.outline-end{flex-grow:1;margin-inline-start:calc(-1*var(--_outline-label-padding))}.outline-end::before,.outline-end::after{border-inline-start-style:none;border-inline-end-style:solid;border-start-start-radius:0;border-start-end-radius:inherit;border-end-start-radius:0;border-end-end-radius:inherit}.outline-notch{align-items:flex-start;border:inherit;display:flex;margin-inline-start:calc(-1*var(--_outline-label-padding));margin-inline-end:var(--_outline-label-padding);max-width:calc(100% - var(--_leading-space) - var(--_trailing-space));padding:0 var(--_outline-label-padding);position:relative}.no-label .outline-notch{display:none}.outline-panel-inactive,.outline-panel-active{border:inherit;border-bottom-style:solid;inset:0;position:absolute}.outline-panel-inactive::before,.outline-panel-inactive::after,.outline-panel-active::before,.outline-panel-active::after{border-top-style:solid;border-bottom:none;bottom:auto;transform:scaleX(1);transition:transform 150ms cubic-bezier(0.2, 0, 0, 1)}.outline-panel-inactive::before,.outline-panel-active::before{right:50%;transform-origin:top left}.outline-panel-inactive::after,.outline-panel-active::after{left:50%;transform-origin:top right}.populated .outline-panel-inactive::before,.populated .outline-panel-inactive::after,.populated .outline-panel-active::before,.populated .outline-panel-active::after,.focused .outline-panel-inactive::before,.focused .outline-panel-inactive::after,.focused .outline-panel-active::before,.focused .outline-panel-active::after{transform:scaleX(0)}.outline-panel-active{opacity:0;transition:opacity 150ms cubic-bezier(0.2, 0, 0, 1)}.focused .outline-panel-active{opacity:1}.outline-label{display:flex;max-width:100%;transform:translateY(calc(-100% + var(--_label-text-padding-bottom)))}.outline-start,.field:not(.with-start) .content ::slotted(*){padding-inline-start:max(var(--_leading-space),max(var(--_container-shape-start-start),var(--_container-shape-end-start)) + var(--_outline-label-padding))}.field:not(.with-start) .label-wrapper{margin-inline-start:max(var(--_leading-space),max(var(--_container-shape-start-start),var(--_container-shape-end-start)) + var(--_outline-label-padding))}.field:not(.with-end) .content ::slotted(*){padding-inline-end:max(var(--_trailing-space),max(var(--_container-shape-start-end),var(--_container-shape-end-end)))}.field:not(.with-end) .label-wrapper{margin-inline-end:max(var(--_trailing-space),max(var(--_container-shape-start-end),var(--_container-shape-end-end)))}.outline-start::before,.outline-end::before,.outline-panel-inactive,.outline-panel-inactive::before,.outline-panel-inactive::after{border-width:var(--_outline-width)}:hover .outline{border-color:var(--_hover-outline-color);color:var(--_hover-outline-color)}:hover .outline-start::before,:hover .outline-end::before,:hover .outline-panel-inactive,:hover .outline-panel-inactive::before,:hover .outline-panel-inactive::after{border-width:var(--_hover-outline-width)}.focused .outline{border-color:var(--_focus-outline-color);color:var(--_focus-outline-color)}.outline-start::after,.outline-end::after,.outline-panel-active,.outline-panel-active::before,.outline-panel-active::after{border-width:var(--_focus-outline-width)}.disabled .outline{border-color:var(--_disabled-outline-color);color:var(--_disabled-outline-color)}.disabled .outline-start,.disabled .outline-end,.disabled .outline-panel-inactive{opacity:var(--_disabled-outline-opacity)}.disabled .outline-start::before,.disabled .outline-end::before,.disabled .outline-panel-inactive,.disabled .outline-panel-inactive::before,.disabled .outline-panel-inactive::after{border-width:var(--_disabled-outline-width)}.error .outline{border-color:var(--_error-outline-color);color:var(--_error-outline-color)}.error:hover .outline{border-color:var(--_error-hover-outline-color);color:var(--_error-hover-outline-color)}.error.focused .outline{border-color:var(--_error-focus-outline-color);color:var(--_error-focus-outline-color)}.resizable .container{bottom:var(--_focus-outline-width);inset-inline-end:var(--_focus-outline-width);clip-path:inset(var(--_focus-outline-width) 0 0 var(--_focus-outline-width))}.resizable .container>*{top:var(--_focus-outline-width);inset-inline-start:var(--_focus-outline-width)}.resizable .container:dir(rtl){clip-path:inset(var(--_focus-outline-width) var(--_focus-outline-width) 0 0)}}@layer hcm{@media(forced-colors: active){.disabled .outline{border-color:GrayText;color:GrayText}.disabled :is(.outline-start,.outline-end,.outline-panel-inactive){opacity:1}}}
`,qT=Ox`:host{display:inline-flex;resize:both}.field{display:flex;flex:1;flex-direction:column;writing-mode:horizontal-tb;max-width:100%}.container-overflow{border-start-start-radius:var(--_container-shape-start-start);border-start-end-radius:var(--_container-shape-start-end);border-end-end-radius:var(--_container-shape-end-end);border-end-start-radius:var(--_container-shape-end-start);display:flex;height:100%;position:relative}.container{align-items:center;border-radius:inherit;display:flex;flex:1;max-height:100%;min-height:100%;min-width:min-content;position:relative}.field,.container-overflow{resize:inherit}.resizable:not(.disabled) .container{resize:inherit;overflow:hidden}.disabled{pointer-events:none}slot[name=container]{border-radius:inherit}slot[name=container]::slotted(*){border-radius:inherit;inset:0;pointer-events:none;position:absolute}@layer styles{.start,.middle,.end{display:flex;box-sizing:border-box;height:100%;position:relative}.start{color:var(--_leading-content-color)}.end{color:var(--_trailing-content-color)}.start,.end{align-items:center;justify-content:center}.with-start .start{margin-inline:var(--_with-leading-content-leading-space) var(--_content-space)}.with-end .end{margin-inline:var(--_content-space) var(--_with-trailing-content-trailing-space)}.middle{align-items:stretch;align-self:baseline;flex:1}.content{color:var(--_content-color);display:flex;flex:1;opacity:0;transition:opacity 83ms cubic-bezier(0.2, 0, 0, 1)}.no-label .content,.focused .content,.populated .content{opacity:1;transition-delay:67ms}:is(.disabled,.disable-transitions) .content{transition:none}.content ::slotted(*){all:unset;color:currentColor;font-family:var(--_content-font);font-size:var(--_content-size);line-height:var(--_content-line-height);font-weight:var(--_content-weight);width:100%;overflow-wrap:revert;white-space:revert}.content ::slotted(:not(textarea)){padding-top:var(--_top-space);padding-bottom:var(--_bottom-space)}.content ::slotted(textarea){margin-top:var(--_top-space);margin-bottom:var(--_bottom-space)}:hover .content{color:var(--_hover-content-color)}:hover .start{color:var(--_hover-leading-content-color)}:hover .end{color:var(--_hover-trailing-content-color)}.focused .content{color:var(--_focus-content-color)}.focused .start{color:var(--_focus-leading-content-color)}.focused .end{color:var(--_focus-trailing-content-color)}.disabled .content{color:var(--_disabled-content-color)}.disabled.no-label .content,.disabled.focused .content,.disabled.populated .content{opacity:var(--_disabled-content-opacity)}.disabled .start{color:var(--_disabled-leading-content-color);opacity:var(--_disabled-leading-content-opacity)}.disabled .end{color:var(--_disabled-trailing-content-color);opacity:var(--_disabled-trailing-content-opacity)}.error .content{color:var(--_error-content-color)}.error .start{color:var(--_error-leading-content-color)}.error .end{color:var(--_error-trailing-content-color)}.error:hover .content{color:var(--_error-hover-content-color)}.error:hover .start{color:var(--_error-hover-leading-content-color)}.error:hover .end{color:var(--_error-hover-trailing-content-color)}.error.focused .content{color:var(--_error-focus-content-color)}.error.focused .start{color:var(--_error-focus-leading-content-color)}.error.focused .end{color:var(--_error-focus-trailing-content-color)}}@layer hcm{@media(forced-colors: active){.disabled :is(.start,.content,.end){color:GrayText;opacity:1}}}@layer styles{.label{box-sizing:border-box;color:var(--_label-text-color);overflow:hidden;max-width:100%;text-overflow:ellipsis;white-space:nowrap;z-index:1;font-family:var(--_label-text-font);font-size:var(--_label-text-size);line-height:var(--_label-text-line-height);font-weight:var(--_label-text-weight);width:min-content}.label-wrapper{inset:0;pointer-events:none;position:absolute}.label.resting{position:absolute;top:var(--_top-space)}.label.floating{font-size:var(--_label-text-populated-size);line-height:var(--_label-text-populated-line-height);transform-origin:top left}.label.hidden{opacity:0}.no-label .label{display:none}.label-wrapper{inset:0;position:absolute;text-align:initial}:hover .label{color:var(--_hover-label-text-color)}.focused .label{color:var(--_focus-label-text-color)}.disabled .label{color:var(--_disabled-label-text-color)}.disabled .label:not(.hidden){opacity:var(--_disabled-label-text-opacity)}.error .label{color:var(--_error-label-text-color)}.error:hover .label{color:var(--_error-hover-label-text-color)}.error.focused .label{color:var(--_error-focus-label-text-color)}}@layer hcm{@media(forced-colors: active){.disabled .label:not(.hidden){color:GrayText;opacity:1}}}@layer styles{.supporting-text{color:var(--_supporting-text-color);display:flex;font-family:var(--_supporting-text-font);font-size:var(--_supporting-text-size);line-height:var(--_supporting-text-line-height);font-weight:var(--_supporting-text-weight);gap:16px;justify-content:space-between;padding-inline-start:var(--_supporting-text-leading-space);padding-inline-end:var(--_supporting-text-trailing-space);padding-top:var(--_supporting-text-top-space)}.supporting-text :nth-child(2){flex-shrink:0}:hover .supporting-text{color:var(--_hover-supporting-text-color)}.focus .supporting-text{color:var(--_focus-supporting-text-color)}.disabled .supporting-text{color:var(--_disabled-supporting-text-color);opacity:var(--_disabled-supporting-text-opacity)}.error .supporting-text{color:var(--_error-supporting-text-color)}.error:hover .supporting-text{color:var(--_error-hover-supporting-text-color)}.error.focus .supporting-text{color:var(--_error-focus-supporting-text-color)}}@layer hcm{@media(forced-colors: active){.disabled .supporting-text{color:GrayText;opacity:1}}}
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
 */let HT=class extends jT{};HT.styles=[qT,BT],HT=pr([Zx("md-outlined-field")],HT);
/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const GT=Symbol.for(""),KT=e=>{if(e?.r===GT)return e?._$litStatic$},WT=(e,...t)=>({_$litStatic$:t.reduce((t,n,r)=>t+(e=>{if(void 0!==e._$litStatic$)return e._$litStatic$;throw Error(`Value passed to 'literal' function must be a 'literal' result: ${e}. Use 'unsafeStatic' to pass non-literal values, but\n            take care to ensure page security.`)})(n)+e[r+1],e[0]),r:GT}),XT=new Map,QT=(e=>(t,...n)=>{const r=n.length;let i,s;const o=[],a=[];let l,c=0,u=!1;for(;c<r;){for(l=t[c];c<r&&void 0!==(s=n[c],i=KT(s));)l+=i+t[++c],u=!0;c!==r&&a.push(s),o.push(l),c++}if(c===r&&o.push(t[r]),u){const e=o.join("$$lit$$");void 0===(t=XT.get(e))&&(o.raw=o,XT.set(e,t=o)),n=a}return e(t,...n)})(oe),JT=Ox`:host{--_caret-color: var(--md-outlined-text-field-caret-color, var(--md-sys-color-primary, #6750a4));--_disabled-input-text-color: var(--md-outlined-text-field-disabled-input-text-color, var(--md-sys-color-on-surface, #1d1b20));--_disabled-input-text-opacity: var(--md-outlined-text-field-disabled-input-text-opacity, 0.38);--_disabled-label-text-color: var(--md-outlined-text-field-disabled-label-text-color, var(--md-sys-color-on-surface, #1d1b20));--_disabled-label-text-opacity: var(--md-outlined-text-field-disabled-label-text-opacity, 0.38);--_disabled-leading-icon-color: var(--md-outlined-text-field-disabled-leading-icon-color, var(--md-sys-color-on-surface, #1d1b20));--_disabled-leading-icon-opacity: var(--md-outlined-text-field-disabled-leading-icon-opacity, 0.38);--_disabled-outline-color: var(--md-outlined-text-field-disabled-outline-color, var(--md-sys-color-on-surface, #1d1b20));--_disabled-outline-opacity: var(--md-outlined-text-field-disabled-outline-opacity, 0.12);--_disabled-outline-width: var(--md-outlined-text-field-disabled-outline-width, 1px);--_disabled-supporting-text-color: var(--md-outlined-text-field-disabled-supporting-text-color, var(--md-sys-color-on-surface, #1d1b20));--_disabled-supporting-text-opacity: var(--md-outlined-text-field-disabled-supporting-text-opacity, 0.38);--_disabled-trailing-icon-color: var(--md-outlined-text-field-disabled-trailing-icon-color, var(--md-sys-color-on-surface, #1d1b20));--_disabled-trailing-icon-opacity: var(--md-outlined-text-field-disabled-trailing-icon-opacity, 0.38);--_error-focus-caret-color: var(--md-outlined-text-field-error-focus-caret-color, var(--md-sys-color-error, #b3261e));--_error-focus-input-text-color: var(--md-outlined-text-field-error-focus-input-text-color, var(--md-sys-color-on-surface, #1d1b20));--_error-focus-label-text-color: var(--md-outlined-text-field-error-focus-label-text-color, var(--md-sys-color-error, #b3261e));--_error-focus-leading-icon-color: var(--md-outlined-text-field-error-focus-leading-icon-color, var(--md-sys-color-on-surface-variant, #49454f));--_error-focus-outline-color: var(--md-outlined-text-field-error-focus-outline-color, var(--md-sys-color-error, #b3261e));--_error-focus-supporting-text-color: var(--md-outlined-text-field-error-focus-supporting-text-color, var(--md-sys-color-error, #b3261e));--_error-focus-trailing-icon-color: var(--md-outlined-text-field-error-focus-trailing-icon-color, var(--md-sys-color-error, #b3261e));--_error-hover-input-text-color: var(--md-outlined-text-field-error-hover-input-text-color, var(--md-sys-color-on-surface, #1d1b20));--_error-hover-label-text-color: var(--md-outlined-text-field-error-hover-label-text-color, var(--md-sys-color-on-error-container, #410e0b));--_error-hover-leading-icon-color: var(--md-outlined-text-field-error-hover-leading-icon-color, var(--md-sys-color-on-surface-variant, #49454f));--_error-hover-outline-color: var(--md-outlined-text-field-error-hover-outline-color, var(--md-sys-color-on-error-container, #410e0b));--_error-hover-supporting-text-color: var(--md-outlined-text-field-error-hover-supporting-text-color, var(--md-sys-color-error, #b3261e));--_error-hover-trailing-icon-color: var(--md-outlined-text-field-error-hover-trailing-icon-color, var(--md-sys-color-on-error-container, #410e0b));--_error-input-text-color: var(--md-outlined-text-field-error-input-text-color, var(--md-sys-color-on-surface, #1d1b20));--_error-label-text-color: var(--md-outlined-text-field-error-label-text-color, var(--md-sys-color-error, #b3261e));--_error-leading-icon-color: var(--md-outlined-text-field-error-leading-icon-color, var(--md-sys-color-on-surface-variant, #49454f));--_error-outline-color: var(--md-outlined-text-field-error-outline-color, var(--md-sys-color-error, #b3261e));--_error-supporting-text-color: var(--md-outlined-text-field-error-supporting-text-color, var(--md-sys-color-error, #b3261e));--_error-trailing-icon-color: var(--md-outlined-text-field-error-trailing-icon-color, var(--md-sys-color-error, #b3261e));--_focus-input-text-color: var(--md-outlined-text-field-focus-input-text-color, var(--md-sys-color-on-surface, #1d1b20));--_focus-label-text-color: var(--md-outlined-text-field-focus-label-text-color, var(--md-sys-color-primary, #6750a4));--_focus-leading-icon-color: var(--md-outlined-text-field-focus-leading-icon-color, var(--md-sys-color-on-surface-variant, #49454f));--_focus-outline-color: var(--md-outlined-text-field-focus-outline-color, var(--md-sys-color-primary, #6750a4));--_focus-outline-width: var(--md-outlined-text-field-focus-outline-width, 3px);--_focus-supporting-text-color: var(--md-outlined-text-field-focus-supporting-text-color, var(--md-sys-color-on-surface-variant, #49454f));--_focus-trailing-icon-color: var(--md-outlined-text-field-focus-trailing-icon-color, var(--md-sys-color-on-surface-variant, #49454f));--_hover-input-text-color: var(--md-outlined-text-field-hover-input-text-color, var(--md-sys-color-on-surface, #1d1b20));--_hover-label-text-color: var(--md-outlined-text-field-hover-label-text-color, var(--md-sys-color-on-surface, #1d1b20));--_hover-leading-icon-color: var(--md-outlined-text-field-hover-leading-icon-color, var(--md-sys-color-on-surface-variant, #49454f));--_hover-outline-color: var(--md-outlined-text-field-hover-outline-color, var(--md-sys-color-on-surface, #1d1b20));--_hover-outline-width: var(--md-outlined-text-field-hover-outline-width, 1px);--_hover-supporting-text-color: var(--md-outlined-text-field-hover-supporting-text-color, var(--md-sys-color-on-surface-variant, #49454f));--_hover-trailing-icon-color: var(--md-outlined-text-field-hover-trailing-icon-color, var(--md-sys-color-on-surface-variant, #49454f));--_input-text-color: var(--md-outlined-text-field-input-text-color, var(--md-sys-color-on-surface, #1d1b20));--_input-text-font: var(--md-outlined-text-field-input-text-font, var(--md-sys-typescale-body-large-font, var(--md-ref-typeface-plain, Roboto)));--_input-text-line-height: var(--md-outlined-text-field-input-text-line-height, var(--md-sys-typescale-body-large-line-height, 1.5rem));--_input-text-placeholder-color: var(--md-outlined-text-field-input-text-placeholder-color, var(--md-sys-color-on-surface-variant, #49454f));--_input-text-prefix-color: var(--md-outlined-text-field-input-text-prefix-color, var(--md-sys-color-on-surface-variant, #49454f));--_input-text-size: var(--md-outlined-text-field-input-text-size, var(--md-sys-typescale-body-large-size, 1rem));--_input-text-suffix-color: var(--md-outlined-text-field-input-text-suffix-color, var(--md-sys-color-on-surface-variant, #49454f));--_input-text-weight: var(--md-outlined-text-field-input-text-weight, var(--md-sys-typescale-body-large-weight, var(--md-ref-typeface-weight-regular, 400)));--_label-text-color: var(--md-outlined-text-field-label-text-color, var(--md-sys-color-on-surface-variant, #49454f));--_label-text-font: var(--md-outlined-text-field-label-text-font, var(--md-sys-typescale-body-large-font, var(--md-ref-typeface-plain, Roboto)));--_label-text-line-height: var(--md-outlined-text-field-label-text-line-height, var(--md-sys-typescale-body-large-line-height, 1.5rem));--_label-text-populated-line-height: var(--md-outlined-text-field-label-text-populated-line-height, var(--md-sys-typescale-body-small-line-height, 1rem));--_label-text-populated-size: var(--md-outlined-text-field-label-text-populated-size, var(--md-sys-typescale-body-small-size, 0.75rem));--_label-text-size: var(--md-outlined-text-field-label-text-size, var(--md-sys-typescale-body-large-size, 1rem));--_label-text-weight: var(--md-outlined-text-field-label-text-weight, var(--md-sys-typescale-body-large-weight, var(--md-ref-typeface-weight-regular, 400)));--_leading-icon-color: var(--md-outlined-text-field-leading-icon-color, var(--md-sys-color-on-surface-variant, #49454f));--_leading-icon-size: var(--md-outlined-text-field-leading-icon-size, 24px);--_outline-color: var(--md-outlined-text-field-outline-color, var(--md-sys-color-outline, #79747e));--_outline-width: var(--md-outlined-text-field-outline-width, 1px);--_supporting-text-color: var(--md-outlined-text-field-supporting-text-color, var(--md-sys-color-on-surface-variant, #49454f));--_supporting-text-font: var(--md-outlined-text-field-supporting-text-font, var(--md-sys-typescale-body-small-font, var(--md-ref-typeface-plain, Roboto)));--_supporting-text-line-height: var(--md-outlined-text-field-supporting-text-line-height, var(--md-sys-typescale-body-small-line-height, 1rem));--_supporting-text-size: var(--md-outlined-text-field-supporting-text-size, var(--md-sys-typescale-body-small-size, 0.75rem));--_supporting-text-weight: var(--md-outlined-text-field-supporting-text-weight, var(--md-sys-typescale-body-small-weight, var(--md-ref-typeface-weight-regular, 400)));--_trailing-icon-color: var(--md-outlined-text-field-trailing-icon-color, var(--md-sys-color-on-surface-variant, #49454f));--_trailing-icon-size: var(--md-outlined-text-field-trailing-icon-size, 24px);--_container-shape-start-start: var(--md-outlined-text-field-container-shape-start-start, var(--md-outlined-text-field-container-shape, var(--md-sys-shape-corner-extra-small, 4px)));--_container-shape-start-end: var(--md-outlined-text-field-container-shape-start-end, var(--md-outlined-text-field-container-shape, var(--md-sys-shape-corner-extra-small, 4px)));--_container-shape-end-end: var(--md-outlined-text-field-container-shape-end-end, var(--md-outlined-text-field-container-shape, var(--md-sys-shape-corner-extra-small, 4px)));--_container-shape-end-start: var(--md-outlined-text-field-container-shape-end-start, var(--md-outlined-text-field-container-shape, var(--md-sys-shape-corner-extra-small, 4px)));--_icon-input-space: var(--md-outlined-text-field-icon-input-space, 16px);--_leading-space: var(--md-outlined-text-field-leading-space, 16px);--_trailing-space: var(--md-outlined-text-field-trailing-space, 16px);--_top-space: var(--md-outlined-text-field-top-space, 16px);--_bottom-space: var(--md-outlined-text-field-bottom-space, 16px);--_input-text-prefix-trailing-space: var(--md-outlined-text-field-input-text-prefix-trailing-space, 2px);--_input-text-suffix-leading-space: var(--md-outlined-text-field-input-text-suffix-leading-space, 2px);--_focus-caret-color: var(--md-outlined-text-field-focus-caret-color, var(--md-sys-color-primary, #6750a4));--_with-leading-icon-leading-space: var(--md-outlined-text-field-with-leading-icon-leading-space, 12px);--_with-trailing-icon-trailing-space: var(--md-outlined-text-field-with-trailing-icon-trailing-space, 12px);--md-outlined-field-bottom-space: var(--_bottom-space);--md-outlined-field-container-shape-end-end: var(--_container-shape-end-end);--md-outlined-field-container-shape-end-start: var(--_container-shape-end-start);--md-outlined-field-container-shape-start-end: var(--_container-shape-start-end);--md-outlined-field-container-shape-start-start: var(--_container-shape-start-start);--md-outlined-field-content-color: var(--_input-text-color);--md-outlined-field-content-font: var(--_input-text-font);--md-outlined-field-content-line-height: var(--_input-text-line-height);--md-outlined-field-content-size: var(--_input-text-size);--md-outlined-field-content-space: var(--_icon-input-space);--md-outlined-field-content-weight: var(--_input-text-weight);--md-outlined-field-disabled-content-color: var(--_disabled-input-text-color);--md-outlined-field-disabled-content-opacity: var(--_disabled-input-text-opacity);--md-outlined-field-disabled-label-text-color: var(--_disabled-label-text-color);--md-outlined-field-disabled-label-text-opacity: var(--_disabled-label-text-opacity);--md-outlined-field-disabled-leading-content-color: var(--_disabled-leading-icon-color);--md-outlined-field-disabled-leading-content-opacity: var(--_disabled-leading-icon-opacity);--md-outlined-field-disabled-outline-color: var(--_disabled-outline-color);--md-outlined-field-disabled-outline-opacity: var(--_disabled-outline-opacity);--md-outlined-field-disabled-outline-width: var(--_disabled-outline-width);--md-outlined-field-disabled-supporting-text-color: var(--_disabled-supporting-text-color);--md-outlined-field-disabled-supporting-text-opacity: var(--_disabled-supporting-text-opacity);--md-outlined-field-disabled-trailing-content-color: var(--_disabled-trailing-icon-color);--md-outlined-field-disabled-trailing-content-opacity: var(--_disabled-trailing-icon-opacity);--md-outlined-field-error-content-color: var(--_error-input-text-color);--md-outlined-field-error-focus-content-color: var(--_error-focus-input-text-color);--md-outlined-field-error-focus-label-text-color: var(--_error-focus-label-text-color);--md-outlined-field-error-focus-leading-content-color: var(--_error-focus-leading-icon-color);--md-outlined-field-error-focus-outline-color: var(--_error-focus-outline-color);--md-outlined-field-error-focus-supporting-text-color: var(--_error-focus-supporting-text-color);--md-outlined-field-error-focus-trailing-content-color: var(--_error-focus-trailing-icon-color);--md-outlined-field-error-hover-content-color: var(--_error-hover-input-text-color);--md-outlined-field-error-hover-label-text-color: var(--_error-hover-label-text-color);--md-outlined-field-error-hover-leading-content-color: var(--_error-hover-leading-icon-color);--md-outlined-field-error-hover-outline-color: var(--_error-hover-outline-color);--md-outlined-field-error-hover-supporting-text-color: var(--_error-hover-supporting-text-color);--md-outlined-field-error-hover-trailing-content-color: var(--_error-hover-trailing-icon-color);--md-outlined-field-error-label-text-color: var(--_error-label-text-color);--md-outlined-field-error-leading-content-color: var(--_error-leading-icon-color);--md-outlined-field-error-outline-color: var(--_error-outline-color);--md-outlined-field-error-supporting-text-color: var(--_error-supporting-text-color);--md-outlined-field-error-trailing-content-color: var(--_error-trailing-icon-color);--md-outlined-field-focus-content-color: var(--_focus-input-text-color);--md-outlined-field-focus-label-text-color: var(--_focus-label-text-color);--md-outlined-field-focus-leading-content-color: var(--_focus-leading-icon-color);--md-outlined-field-focus-outline-color: var(--_focus-outline-color);--md-outlined-field-focus-outline-width: var(--_focus-outline-width);--md-outlined-field-focus-supporting-text-color: var(--_focus-supporting-text-color);--md-outlined-field-focus-trailing-content-color: var(--_focus-trailing-icon-color);--md-outlined-field-hover-content-color: var(--_hover-input-text-color);--md-outlined-field-hover-label-text-color: var(--_hover-label-text-color);--md-outlined-field-hover-leading-content-color: var(--_hover-leading-icon-color);--md-outlined-field-hover-outline-color: var(--_hover-outline-color);--md-outlined-field-hover-outline-width: var(--_hover-outline-width);--md-outlined-field-hover-supporting-text-color: var(--_hover-supporting-text-color);--md-outlined-field-hover-trailing-content-color: var(--_hover-trailing-icon-color);--md-outlined-field-label-text-color: var(--_label-text-color);--md-outlined-field-label-text-font: var(--_label-text-font);--md-outlined-field-label-text-line-height: var(--_label-text-line-height);--md-outlined-field-label-text-populated-line-height: var(--_label-text-populated-line-height);--md-outlined-field-label-text-populated-size: var(--_label-text-populated-size);--md-outlined-field-label-text-size: var(--_label-text-size);--md-outlined-field-label-text-weight: var(--_label-text-weight);--md-outlined-field-leading-content-color: var(--_leading-icon-color);--md-outlined-field-leading-space: var(--_leading-space);--md-outlined-field-outline-color: var(--_outline-color);--md-outlined-field-outline-width: var(--_outline-width);--md-outlined-field-supporting-text-color: var(--_supporting-text-color);--md-outlined-field-supporting-text-font: var(--_supporting-text-font);--md-outlined-field-supporting-text-line-height: var(--_supporting-text-line-height);--md-outlined-field-supporting-text-size: var(--_supporting-text-size);--md-outlined-field-supporting-text-weight: var(--_supporting-text-weight);--md-outlined-field-top-space: var(--_top-space);--md-outlined-field-trailing-content-color: var(--_trailing-icon-color);--md-outlined-field-trailing-space: var(--_trailing-space);--md-outlined-field-with-leading-content-leading-space: var(--_with-leading-icon-leading-space);--md-outlined-field-with-trailing-content-trailing-space: var(--_with-trailing-icon-trailing-space)}
`
/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */,YT=F(class extends V{constructor(e){if(super(e),e.type!==M&&e.type!==$&&e.type!==U)throw Error("The `live` directive is not allowed on child or event bindings");if(!(e=>void 0===e.strings)(e))throw Error("`live` bindings can only contain a single expression")}render(e){return e}update(e,[t]){if(t===ae||t===le)return t;const n=e.element,r=e.name;if(e.type===M){if(t===n[r])return ae}else if(e.type===U){if(!!t===n.hasAttribute(r))return ae}else if(e.type===$&&n.getAttribute(r)===t+"")return ae;return((e,t=Te)=>{e._$AH=t})(e),t}}),ZT="important",eI=" !"+ZT,tI=F(class extends V{constructor(e){if(super(e),e.type!==$||"style"!==e.name||e.strings?.length>2)throw Error("The `styleMap` directive must be used in the `style` attribute and must be the only part in the attribute.")}render(e){return Object.keys(e).reduce((t,n)=>{const r=e[n];return null==r?t:t+`${n=n.includes("-")?n:n.replace(/(?:^(webkit|moz|ms|o)|)(?=[A-Z])/g,"-$&").toLowerCase()}:${r};`},"")}update(e,[t]){const{style:n}=e.element;if(void 0===this.ft)return this.ft=new Set(Object.keys(t)),this.render(t);for(const e of this.ft)null==t[e]&&(this.ft.delete(e),e.includes("-")?n.removeProperty(e):n[e]=null);for(const e in t){const r=t[e];if(null!=r){this.ft.add(e);const t="string"==typeof r&&r.endsWith(eI);e.includes("-")||t?n.setProperty(e,t?r.slice(0,-11):r,t?ZT:""):n[e]=r}}return ae}}),nI={fromAttribute:e=>e??"",toAttribute:e=>e||null};
/**
 * @license
 * Copyright 2024 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */
/**
 * @license
 * Copyright 2023 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */
const rI=Symbol("createValidator"),iI=Symbol("getValidityAnchor"),sI=Symbol("privateValidator"),oI=Symbol("privateSyncValidity"),aI=Symbol("privateCustomValidationMessage");
/**
 * @license
 * Copyright 2023 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */
const lI=Symbol("getFormValue"),cI=Symbol("getFormState");
/**
 * @license
 * Copyright 2023 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */
const uI=Symbol("onReportValidity"),dI=Symbol("privateCleanupFormListeners"),hI=Symbol("privateDoNotReportInvalid"),pI=Symbol("privateIsSelfReportingValidity"),fI=Symbol("privateCallOnReportValidity");const mI=new WeakMap;
/**
 * @license
 * Copyright 2023 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */
class gI{constructor(e){this.getCurrentState=e,this.currentValidity={validity:{},validationMessage:""}}getValidity(){const e=this.getCurrentState();if(!(!this.prevState||!this.equals(this.prevState,e)))return this.currentValidity;const{validity:t,validationMessage:n}=this.computeValidity(e);return this.prevState=this.copy(e),this.currentValidity={validationMessage:n,validity:{badInput:t.badInput,customError:t.customError,patternMismatch:t.patternMismatch,rangeOverflow:t.rangeOverflow,rangeUnderflow:t.rangeUnderflow,stepMismatch:t.stepMismatch,tooLong:t.tooLong,tooShort:t.tooShort,typeMismatch:t.typeMismatch,valueMissing:t.valueMissing}},this.currentValidity}}
/**
 * @license
 * Copyright 2023 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */class vI extends gI{computeValidity({state:e,renderedControl:t}){let n=t;yI(e)&&!n?(n=this.inputControl||document.createElement("input"),this.inputControl=n):n||(n=this.textAreaControl||document.createElement("textarea"),this.textAreaControl=n);const r=yI(e)?n:null;if(r&&(r.type=e.type),n.value!==e.value&&(n.value=e.value),n.required=e.required,r){const t=e;t.pattern?r.pattern=t.pattern:r.removeAttribute("pattern"),t.min?r.min=t.min:r.removeAttribute("min"),t.max?r.max=t.max:r.removeAttribute("max"),t.step?r.step=t.step:r.removeAttribute("step")}return(e.minLength??-1)>-1?n.setAttribute("minlength",String(e.minLength)):n.removeAttribute("minlength"),(e.maxLength??-1)>-1?n.setAttribute("maxlength",String(e.maxLength)):n.removeAttribute("maxlength"),{validity:n.validity,validationMessage:n.validationMessage}}equals({state:e},{state:t}){const n=e.type===t.type&&e.value===t.value&&e.required===t.required&&e.minLength===t.minLength&&e.maxLength===t.maxLength;return yI(e)&&yI(t)?n&&e.pattern===t.pattern&&e.min===t.min&&e.max===t.max&&e.step===t.step:n}copy({state:e}){return{state:yI(e)?this.copyInput(e):this.copyTextArea(e),renderedControl:null}}copyInput(e){const{type:t,pattern:n,min:r,max:i,step:s}=e;return{...this.copySharedState(e),type:t,pattern:n,min:r,max:i,step:s}}copyTextArea(e){return{...this.copySharedState(e),type:e.type}}copySharedState({value:e,required:t,minLength:n,maxLength:r}){return{value:e,required:t,minLength:n,maxLength:r}}}function yI(e){return"textarea"!==e.type}
/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */const bI=NE(function(e){var t,n,r;class i extends e{constructor(...e){super(...e),this[t]=new AbortController,this[n]=!1,this[r]=!1,this.addEventListener("invalid",e=>{!this[hI]&&e.isTrusted&&this.addEventListener("invalid",()=>{this[fI](e)},{once:!0})},{capture:!0})}checkValidity(){this[hI]=!0;const e=super.checkValidity();return this[hI]=!1,e}reportValidity(){this[pI]=!0;const e=super.reportValidity();return e&&this[fI](null),this[pI]=!1,e}[(t=dI,n=hI,r=pI,fI)](e){const t=e?.defaultPrevented;if(t)return;this[uI](e);!t&&e?.defaultPrevented&&(this[pI]||function(e,t){if(!e)return!0;let n;for(const t of e.elements)if(t.matches(":invalid")){n=t;break}return n===t}(this[PE].form,this))&&this.focus()}[uI](e){throw new Error("Implement [onReportValidity]")}formAssociatedCallback(e){super.formAssociatedCallback&&super.formAssociatedCallback(e),this[dI].abort(),e&&(this[dI]=new AbortController,function(e,t,n,r){const i=function(e){if(!mI.has(e)){const t=new EventTarget;mI.set(e,t);for(const n of["reportValidity","requestSubmit"]){const r=e[n];e[n]=function(){t.dispatchEvent(new Event("before"));const e=Reflect.apply(r,this,arguments);return t.dispatchEvent(new Event("after")),e}}}return mI.get(e)}(t);let s,o=!1,a=!1;i.addEventListener("before",()=>{a=!0,s=new AbortController,o=!1,e.addEventListener("invalid",()=>{o=!0},{signal:s.signal})},{signal:r}),i.addEventListener("after",()=>{a=!1,s?.abort(),o||n()},{signal:r}),t.addEventListener("submit",()=>{a||n()},{signal:r})}(this,e,()=>{this[fI](null)},this[dI].signal))}}return i}(function(e){var t;class n extends e{constructor(){super(...arguments),this[t]=""}get validity(){return this[oI](),this[PE].validity}get validationMessage(){return this[oI](),this[PE].validationMessage}get willValidate(){return this[oI](),this[PE].willValidate}checkValidity(){return this[oI](),this[PE].checkValidity()}reportValidity(){return this[oI](),this[PE].reportValidity()}setCustomValidity(e){this[aI]=e,this[oI]()}requestUpdate(e,t,n){super.requestUpdate(e,t,n),this[oI]()}firstUpdated(e){super.firstUpdated(e),this[oI]()}[(t=aI,oI)](){this[sI]||(this[sI]=this[rI]());const{validity:e,validationMessage:t}=this[sI].getValidity(),n=!!this[aI],r=this[aI]||t;this[PE].setValidity({...e,customError:n},r,this[iI]()??void 0)}[rI](){throw new Error("Implement [createValidator]")}[iI](){throw new Error("Implement [getValidityAnchor]")}}return n}(function(e){class t extends e{get form(){return this[PE].form}get labels(){return this[PE].labels}get name(){return this.getAttribute("name")??""}set name(e){this.setAttribute("name",e)}get disabled(){return this.hasAttribute("disabled")}set disabled(e){this.toggleAttribute("disabled",e)}attributeChangedCallback(e,t,n){if("name"===e||"disabled"===e){const n="disabled"===e?null!==t:t;return void this.requestUpdate(e,n)}super.attributeChangedCallback(e,t,n)}requestUpdate(e,t,n){super.requestUpdate(e,t,n),this[PE].setFormValue(this[lI](),this[cI]())}[lI](){throw new Error("Implement [getFormValue]")}[cI](){return this[lI]()}formDisabledCallback(e){this.disabled=e}}return t.formAssociated=!0,pr([nE({noAccessor:!0})],t.prototype,"name",null),pr([nE({type:Boolean,noAccessor:!0})],t.prototype,"disabled",null),t}($E(Jx)))));class wI extends bI{constructor(){super(...arguments),this.error=!1,this.errorText="",this.label="",this.noAsterisk=!1,this.required=!1,this.value="",this.prefixText="",this.suffixText="",this.hasLeadingIcon=!1,this.hasTrailingIcon=!1,this.supportingText="",this.textDirection="",this.rows=2,this.cols=20,this.inputMode="",this.max="",this.maxLength=-1,this.min="",this.minLength=-1,this.noSpinner=!1,this.pattern="",this.placeholder="",this.readOnly=!1,this.multiple=!1,this.step="",this.type="text",this.autocomplete="",this.dirty=!1,this.focused=!1,this.nativeError=!1,this.nativeErrorText=""}get selectionDirection(){return this.getInputOrTextarea().selectionDirection}set selectionDirection(e){this.getInputOrTextarea().selectionDirection=e}get selectionEnd(){return this.getInputOrTextarea().selectionEnd}set selectionEnd(e){this.getInputOrTextarea().selectionEnd=e}get selectionStart(){return this.getInputOrTextarea().selectionStart}set selectionStart(e){this.getInputOrTextarea().selectionStart=e}get valueAsNumber(){const e=this.getInput();return e?e.valueAsNumber:NaN}set valueAsNumber(e){const t=this.getInput();t&&(t.valueAsNumber=e,this.value=t.value)}get valueAsDate(){const e=this.getInput();return e?e.valueAsDate:null}set valueAsDate(e){const t=this.getInput();t&&(t.valueAsDate=e,this.value=t.value)}get hasError(){return this.error||this.nativeError}select(){this.getInputOrTextarea().select()}setRangeText(...e){this.getInputOrTextarea().setRangeText(...e),this.value=this.getInputOrTextarea().value}setSelectionRange(e,t,n){this.getInputOrTextarea().setSelectionRange(e,t,n)}showPicker(){const e=this.getInput();e&&e.showPicker()}stepDown(e){const t=this.getInput();t&&(t.stepDown(e),this.value=t.value)}stepUp(e){const t=this.getInput();t&&(t.stepUp(e),this.value=t.value)}reset(){this.dirty=!1,this.value=this.getAttribute("value")??"",this.nativeError=!1,this.nativeErrorText=""}attributeChangedCallback(e,t,n){"value"===e&&this.dirty||super.attributeChangedCallback(e,t,n)}render(){const e={disabled:this.disabled,error:!this.disabled&&this.hasError,textarea:"textarea"===this.type,"no-spinner":this.noSpinner};return oe`
      <span class="text-field ${yE(e)}">
        ${this.renderField()}
      </span>
    `}updated(e){const t=this.getInputOrTextarea().value;this.value!==t&&(this.value=t)}renderField(){return QT`<${this.fieldTag}
      class="field"
      count=${this.value.length}
      ?disabled=${this.disabled}
      ?error=${this.hasError}
      error-text=${this.getErrorText()}
      ?focused=${this.focused}
      ?has-end=${this.hasTrailingIcon}
      ?has-start=${this.hasLeadingIcon}
      label=${this.label}
      ?no-asterisk=${this.noAsterisk}
      max=${this.maxLength}
      ?populated=${!!this.value}
      ?required=${this.required}
      ?resizable=${"textarea"===this.type}
      supporting-text=${this.supportingText}
    >
      ${this.renderLeadingIcon()}
      ${this.renderInputOrTextarea()}
      ${this.renderTrailingIcon()}
      <div id="description" slot="aria-describedby"></div>
      <slot name="container" slot="container"></slot>
    </${this.fieldTag}>`}renderLeadingIcon(){return oe`
      <span class="icon leading" slot="start">
        <slot name="leading-icon" @slotchange=${this.handleIconChange}></slot>
      </span>
    `}renderTrailingIcon(){return oe`
      <span class="icon trailing" slot="end">
        <slot name="trailing-icon" @slotchange=${this.handleIconChange}></slot>
      </span>
    `}renderInputOrTextarea(){const e={direction:this.textDirection},t=this.ariaLabel||this.label||le,n=this.autocomplete,r=(this.maxLength??-1)>-1,i=(this.minLength??-1)>-1;if("textarea"===this.type)return oe`
        <textarea
          class="input"
          style=${tI(e)}
          aria-describedby="description"
          aria-invalid=${this.hasError}
          aria-label=${t}
          autocomplete=${n||le}
          name=${this.name||le}
          ?disabled=${this.disabled}
          maxlength=${r?this.maxLength:le}
          minlength=${i?this.minLength:le}
          placeholder=${this.placeholder||le}
          ?readonly=${this.readOnly}
          ?required=${this.required}
          rows=${this.rows}
          cols=${this.cols}
          .value=${YT(this.value)}
          @change=${this.redispatchEvent}
          @focus=${this.handleFocusChange}
          @blur=${this.handleFocusChange}
          @input=${this.handleInput}
          @select=${this.redispatchEvent}></textarea>
      `;const s=this.renderPrefix(),o=this.renderSuffix(),a=this.inputMode;return oe`
      <div class="input-wrapper">
        ${s}
        <input
          class="input"
          style=${tI(e)}
          aria-describedby="description"
          aria-invalid=${this.hasError}
          aria-label=${t}
          autocomplete=${n||le}
          name=${this.name||le}
          ?disabled=${this.disabled}
          inputmode=${a||le}
          max=${this.max||le}
          maxlength=${r?this.maxLength:le}
          min=${this.min||le}
          minlength=${i?this.minLength:le}
          pattern=${this.pattern||le}
          placeholder=${this.placeholder||le}
          ?readonly=${this.readOnly}
          ?required=${this.required}
          ?multiple=${this.multiple}
          step=${this.step||le}
          type=${this.type}
          .value=${YT(this.value)}
          @change=${this.redispatchEvent}
          @focus=${this.handleFocusChange}
          @blur=${this.handleFocusChange}
          @input=${this.handleInput}
          @select=${this.redispatchEvent} />
        ${o}
      </div>
    `}renderPrefix(){return this.renderAffix(this.prefixText,!1)}renderSuffix(){return this.renderAffix(this.suffixText,!0)}renderAffix(e,t){if(!e)return le;return oe`<span class="${yE({suffix:t,prefix:!t})}">${e}</span>`}getErrorText(){return this.error?this.errorText:this.nativeErrorText}handleFocusChange(){this.focused=this.inputOrTextarea?.matches(":focus")??!1}handleInput(e){this.dirty=!0,this.value=e.target.value}redispatchEvent(e){!
/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */
function(e,t){!t.bubbles||e.shadowRoot&&!t.composed||t.stopPropagation();const n=Reflect.construct(t.constructor,[t.type,t]),r=e.dispatchEvent(n);r||t.preventDefault()}(this,e)}getInputOrTextarea(){return this.inputOrTextarea||(this.connectedCallback(),this.scheduleUpdate()),this.isUpdatePending&&this.scheduleUpdate(),this.inputOrTextarea}getInput(){return"textarea"===this.type?null:this.getInputOrTextarea()}handleIconChange(){this.hasLeadingIcon=this.leadingIcons.length>0,this.hasTrailingIcon=this.trailingIcons.length>0}[lI](){return this.value}formResetCallback(){this.reset()}formStateRestoreCallback(e){this.value=e}focus(){this.getInputOrTextarea().focus()}[rI](){return new vI(()=>({state:this,renderedControl:this.inputOrTextarea}))}[iI](){return this.inputOrTextarea}[uI](e){e?.preventDefault();const t=this.getErrorText();this.nativeError=!!e,this.nativeErrorText=this.validationMessage,t===this.getErrorText()&&this.field?.reannounceError()}}wI.shadowRootOptions={...Jx.shadowRootOptions,delegatesFocus:!0},pr([nE({type:Boolean,reflect:!0})],wI.prototype,"error",void 0),pr([nE({attribute:"error-text"})],wI.prototype,"errorText",void 0),pr([nE()],wI.prototype,"label",void 0),pr([nE({type:Boolean,attribute:"no-asterisk"})],wI.prototype,"noAsterisk",void 0),pr([nE({type:Boolean,reflect:!0})],wI.prototype,"required",void 0),pr([nE()],wI.prototype,"value",void 0),pr([nE({attribute:"prefix-text"})],wI.prototype,"prefixText",void 0),pr([nE({attribute:"suffix-text"})],wI.prototype,"suffixText",void 0),pr([nE({type:Boolean,attribute:"has-leading-icon"})],wI.prototype,"hasLeadingIcon",void 0),pr([nE({type:Boolean,attribute:"has-trailing-icon"})],wI.prototype,"hasTrailingIcon",void 0),pr([nE({attribute:"supporting-text"})],wI.prototype,"supportingText",void 0),pr([nE({attribute:"text-direction"})],wI.prototype,"textDirection",void 0),pr([nE({type:Number})],wI.prototype,"rows",void 0),pr([nE({type:Number})],wI.prototype,"cols",void 0),pr([nE({reflect:!0})],wI.prototype,"inputMode",void 0),pr([nE()],wI.prototype,"max",void 0),pr([nE({type:Number})],wI.prototype,"maxLength",void 0),pr([nE()],wI.prototype,"min",void 0),pr([nE({type:Number})],wI.prototype,"minLength",void 0),pr([nE({type:Boolean,attribute:"no-spinner"})],wI.prototype,"noSpinner",void 0),pr([nE()],wI.prototype,"pattern",void 0),pr([nE({reflect:!0,converter:nI})],wI.prototype,"placeholder",void 0),pr([nE({type:Boolean,reflect:!0})],wI.prototype,"readOnly",void 0),pr([nE({type:Boolean,reflect:!0})],wI.prototype,"multiple",void 0),pr([nE()],wI.prototype,"step",void 0),pr([nE({reflect:!0})],wI.prototype,"type",void 0),pr([nE({reflect:!0})],wI.prototype,"autocomplete",void 0),pr([rE()],wI.prototype,"dirty",void 0),pr([rE()],wI.prototype,"focused",void 0),pr([rE()],wI.prototype,"nativeError",void 0),pr([rE()],wI.prototype,"nativeErrorText",void 0),pr([sE(".input")],wI.prototype,"inputOrTextarea",void 0),pr([sE(".field")],wI.prototype,"field",void 0),pr([oE({slot:"leading-icon"})],wI.prototype,"leadingIcons",void 0),pr([oE({slot:"trailing-icon"})],wI.prototype,"trailingIcons",void 0);
/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */
class _I extends wI{constructor(){super(...arguments),this.fieldTag=WT`md-outlined-field`}}
/**
 * @license
 * Copyright 2024 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */const xI=Ox`:host{display:inline-flex;outline:none;resize:both;text-align:start;-webkit-tap-highlight-color:rgba(0,0,0,0)}.text-field,.field{width:100%}.text-field{display:inline-flex}.field{cursor:text}.disabled .field{cursor:default}.text-field,.textarea .field{resize:inherit}slot[name=container]{border-radius:inherit}.icon{color:currentColor;display:flex;align-items:center;justify-content:center;fill:currentColor;position:relative}.icon ::slotted(*){display:flex;position:absolute}[has-start] .icon.leading{font-size:var(--_leading-icon-size);height:var(--_leading-icon-size);width:var(--_leading-icon-size)}[has-end] .icon.trailing{font-size:var(--_trailing-icon-size);height:var(--_trailing-icon-size);width:var(--_trailing-icon-size)}.input-wrapper{display:flex}.input-wrapper>*{all:inherit;padding:0}.input{caret-color:var(--_caret-color);overflow-x:hidden;text-align:inherit}.input::placeholder{color:currentColor;opacity:1}.input::-webkit-calendar-picker-indicator{display:none}.input::-webkit-search-decoration,.input::-webkit-search-cancel-button{display:none}@media(forced-colors: active){.input{background:none}}.no-spinner .input::-webkit-inner-spin-button,.no-spinner .input::-webkit-outer-spin-button{display:none}.no-spinner .input[type=number]{-moz-appearance:textfield}:focus-within .input{caret-color:var(--_focus-caret-color)}.error:focus-within .input{caret-color:var(--_error-focus-caret-color)}.text-field:not(.disabled) .prefix{color:var(--_input-text-prefix-color)}.text-field:not(.disabled) .suffix{color:var(--_input-text-suffix-color)}.text-field:not(.disabled) .input::placeholder{color:var(--_input-text-placeholder-color)}.prefix,.suffix{text-wrap:nowrap;width:min-content}.prefix{padding-inline-end:var(--_input-text-prefix-trailing-space)}.suffix{padding-inline-start:var(--_input-text-suffix-leading-space)}
`
/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */;let EI=class extends _I{constructor(){super(...arguments),this.fieldTag=WT`md-outlined-field`}};EI.styles=[xI,JT],EI=pr([Zx("md-outlined-text-field")],EI);var TI=function(e,t,n,r){var i,s=arguments.length,o=s<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,n):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)o=Reflect.decorate(e,t,n,r);else for(var a=e.length-1;a>=0;a--)(i=e[a])&&(o=(s<3?i(o):s>3?i(t,n,o):i(t,n))||o);return s>3&&o&&Object.defineProperty(t,n,o),o};let II=class extends Jx{constructor(){super(),this.selected="0",this.disabledOptions=[]}static{this.styles=Ox`
    :host {
      display: block;
      font-family: 'Roboto', sans-serif;
    }

    .container {
      display: flex;
      border: 1px solid var(--md-sys-color-outline, #c6c6c6);
      border-radius: 12px;
      overflow: hidden;
    }

    .button {
      flex: 1;
      padding: 2px 8px;
      text-align: center;
      cursor: pointer;
      background-color: var(--md-sys-color-surface, #ffffff);
      color: var(--md-sys-color-on-surface, #000000);
      border: none;
      outline: none;
      font-size: 14px;
      line-height: 1;
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 4px;
    }

    .button.selected {
      background-color: var(--md-sys-color-primary, #6200ea);
      color: var(--md-sys-color-on-primary, #ffffff);
    }

    .button:not(.selected):hover {
      background-color: var(--md-sys-color-surface-variant, #f5f5f5);
    }

    .button:not(:last-child) {
      border-right: 1px solid var(--md-sys-color-outline, #c6c6c6);
    }

    svg {
      width: 20px;
      height: 20px;
      fill: currentColor;
    }

    .icon {
      display: flex;
      align-items: center;
      justify-content: center;
    }
  `}handleSelect(e){this.selected=e,this.dispatchEvent(new CustomEvent("df-segmented-button-change",{detail:{id:e},bubbles:!0,composed:!0}))}render(){const e=[{value:"0",label:"",icon:oe`
          <svg xmlns="http://www.w3.org/2000/svg" height="16px" viewBox="0 -960 960 960">
            <path d="m256-200-56-56 224-224-224-224 56-56 224 224 224-224 56 56-224 224 224 224-56 56-224-224-224 224Z" />
          </svg>
        `},{value:"Upload",label:"",icon:oe`
          <svg xmlns="http://www.w3.org/2000/svg" height="16px" viewBox="0 -960 960 960">
            <path
              d="M720-330q0 104-73 177T470-80q-104 0-177-73t-73-177v-370q0-75 52.5-127.5T400-880q75 0 127.5 52.5T580-700v350q0 46-32 78t-78 32q-46 0-78-32t-32-78v-370h80v370q0 13 8.5 21.5T470-320q13 0 21.5-8.5T500-350v-350q-1-42-29.5-71T400-800q-42 0-71 29t-29 71v370q-1 71 49 120.5T470-160q70 0 119-49.5T640-330v-390h80v390Z"
            />
          </svg>
        `},{value:"Site",label:"",icon:oe`
          <svg xmlns="http://www.w3.org/2000/svg" height="16px" viewBox="0 -960 960 960">
            <path
              d="M440-280H280q-83 0-141.5-58.5T80-480q0-83 58.5-141.5T280-680h160v80H280q-50 0-85 35t-35 85q0 50 35 85t85 35h160v80ZM320-440v-80h320v80H320Zm200 160v-80h160q50 0 85-35t35-85q0-50-35-85t-85-35H520v-80h160q83 0 141.5 58.5T880-480q0 83-58.5 141.5T680-280H520Z"
            />
          </svg>
        `},{value:"Add",label:"",icon:oe`
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960">
            <path d="M440-440H200v-80h240v-240h80v240h240v80H520v240h-80v-240Z" />
          </svg>
        `}];return oe`
      <div class="container">
        ${e.filter(({value:e})=>!this.disabledOptions.includes(e)).map(({value:e,label:t,icon:n})=>oe`
              <button
                class=${yE({button:!0,selected:this.selected===e})}
                type="button"
                role="radio"
                aria-checked=${this.selected===e}
                @click=${()=>this.handleSelect(e)}
              >
                ${n?oe`<span class="icon">${n}</span>`:""} ${t}
              </button>
            `)}
      </div>
    `}};TI([nE({type:String})],II.prototype,"selected",void 0),TI([nE({type:Array})],II.prototype,"disabledOptions",void 0),II=TI([Zx("df-segmented-button")],II);const SI=Ie(!0);var CI=function(e,t,n,r){var i,s=arguments.length,o=s<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,n):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)o=Reflect.decorate(e,t,n,r);else for(var a=e.length-1;a>=0;a--)(i=e[a])&&(o=(s<3?i(o):s>3?i(t,n,o):i(t,n))||o);return s>3&&o&&Object.defineProperty(t,n,o),o};let kI=class extends(L(Jx)){constructor(){super(),this.resourceLinkType="void",this.resourcePageType="void",this.linkUrl="",this.imageValid=!1,this.showUrlContainer=!1,this.showUploader=!1,this.showContent=!1,this.showLinkInput=!1,this.fileName="Select File to Upload",this.generatedLink="",this.disabledOptions=["Add","0"]}static{this.styles=Ox`
    :host {
      display: block;
      padding: 10px;
      font-family: 'Roboto', sans-serif;
      margin-top: 3px;
      --md-sys-color-primary: #5f9ea0;
    }

    div:first-of-type {
      display: flex;
      flex-direction: row; /* Aligns children in a row */
      align-items: center; /* Aligns items vertically in the center */
      gap: 10px; /* Adds space between elements */
    }

    .file-input-wrapper {
      display: flex;
      align-items: center;
      margin-bottom: 10px;
      border-radius: 12px;
    }

    .file-label {
      height: 70px;
      border-radius: 12px;
      cursor: pointer;
      margin-right: 10px;
      font-size: 14px;
      white-space: nowrap;
      padding: 8px 16px;
      text-align: center;
      background-color: var(--md-sys-color-primary, #6200ea);
      color: var(--md-sys-color-on-primary, #ffffff);
      border: none;
      outline: none;
      line-height: 20px;
    }

    .file-input {
      display: none;
    }

    .input-container {
      display: flex;
      flex-direction: column;
      gap: 4px;
      max-width: 350px;
    }

    .thumbnail {
      height: 50px;
      object-fit: contain;
      border-radius: 12px;
      display: block;
    }

    .thumbnail.hidden {
      display: none;
    }

    df-segmented-button {
      display: inline-flex;
      flex-wrap: nowrap;
      white-space: nowrap;
      width: auto; /* Set width to auto to fit content */
    }
  `}async uploadFile(e){const t=e.target,n=t.files?t.files[0]:null;if(n&&SI.get()){const e=this.resourcePageType+"|"+this.resourceLinkType;this.fileName=n?n.name:"No screenshot chosen",ET.set(n),this.generatedLink=await async function(e){const t=ET.get();if(!t)throw new Error("No file to upload");return new Promise((n,r)=>{try{const i=cx(),s=Date.now(),o=_w(Iw(i,`uploads/${e.replace(/\|/g,"/")}/${s}_${t.name}`),t);o.on("state_changed",e=>{const t=e.bytesTransferred/e.totalBytes;TT.set(1===t?0:Math.min(t+.1,1))},e=>{console.error("[df-upload-link-store] Upload failed:",e),TT.set(0),r(e)},async()=>{try{const e=await Tw(o.snapshot.ref);TT.set(0),n(e)}catch(e){console.error("[df-upload-link-store] Failed to get download URL:",e),TT.set(0),r(e)}})}catch(e){console.error("[df-upload-link-store] Upload initialization failed:",e),TT.set(0),r(e)}})}(e),this.linkUrl=this.generatedLink,this.showUrlContainer=!0,this.imageValid=!0,this.disabledOptions=["Site","Upload"],this.dispatchEvent(new CustomEvent("upload-link-gather-url",{detail:{linkUrl:this.linkUrl}}))}else console.error("No file selected or user not authenticated.")}handleInput(e){const t=e.target;this.linkUrl=t.value,this.validateImage()}validateImage(){const e=new Image;e.src=this.linkUrl,e.onload=()=>{this.imageValid=!0,this.showUrlContainer=!0,this.requestUpdate(),this.disabledOptions=["Site","Upload"],this.dispatchEvent(new CustomEvent("upload-link-gather-url",{detail:{linkUrl:this.linkUrl}}))},e.onerror=()=>{console.error("ERROR ON IMAGE"),this.imageValid=!1,this.requestUpdate()}}isValidUrl(e){try{return new URL(e),this.linkUrl=e,!0}catch{return!1}}handleSelectionChange(e){switch(e.detail.id){case"Upload":this.triggerUpload();break;case"Site":this.triggerLink();break;case"Add":this.triggerAdd();break;default:this.triggerNone()}}triggerUpload(){this.showContent=!0,this.showUrlContainer=!1,this.showUploader=!0,this.showLinkInput=!1}triggerLink(){this.showUrlContainer=!0,this.showUploader=!1,this.showContent=!0,this.showLinkInput=!0}triggerAdd(){this.dispatchEvent(new CustomEvent("upload-link-allocate",{detail:{linkUrl:this.linkUrl}})),this.disabledOptions=["Add","0"]}triggerNone(){this.showUrlContainer=!1,this.showUploader=!1,this.showContent=!1,this.showLinkInput=!1,this.disabledOptions=["Add","0"]}render(){return this.showUrlContainer=this.isValidUrl(this.generatedLink),this.showUrlContainer=!0,oe`
      <div>Gather [${this.resourceLinkType}s]:
        <df-segmented-button
          @df-segmented-button-change=${this.handleSelectionChange}
          .disabledOptions=${this.disabledOptions}
        ></df-segmented-button>
        <div style="display: ${this.showContent?"flex":"none"};">
          <div style="display: ${this.showUploader?"block":"none"};">
            <label class="file-label">
              <span>${this.fileName}</span>
              <!-- md3-gap: native file input required to invoke OS file picker per MD3 upload guidelines -->
              <input type="file" class="file-input" @change="${this.uploadFile}"/>
            </label>
          </div>
          <a href="${this.generatedLink.valueOf()}" style="display: ${this.showUrlContainer?"block":"none"};"
             target="_blank"><img
            class="thumbnail" ${this.imageValid?"":"hidden"}"
              src=${this.imageValid?this.linkUrl:""}
            /></a>
          <md-outlined-text-field
            style="display: ${this.showLinkInput?"block":"none"};"
            label="URL" .value=${this.linkUrl}
            @input=${this.handleInput}></md-outlined-text-field>
          <md-circular-progress four-color value="${TT.get()}"></md-circular-progress>
        </div>
      </div>
    `}};CI([nE()],kI.prototype,"resourceLinkType",void 0),CI([nE()],kI.prototype,"resourcePageType",void 0),CI([nE({type:String})],kI.prototype,"linkUrl",void 0),CI([nE({type:Boolean})],kI.prototype,"imageValid",void 0),CI([rE()],kI.prototype,"showUrlContainer",void 0),CI([rE()],kI.prototype,"showUploader",void 0),CI([rE()],kI.prototype,"showContent",void 0),CI([rE()],kI.prototype,"showLinkInput",void 0),CI([rE()],kI.prototype,"fileName",void 0),CI([rE()],kI.prototype,"generatedLink",void 0),CI([rE()],kI.prototype,"disabledOptions",void 0),kI=CI([Zx("df-upload-link")],kI);var AI=function(e,t,n,r){var i,s=arguments.length,o=s<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,n):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)o=Reflect.decorate(e,t,n,r);else for(var a=e.length-1;a>=0;a--)(i=e[a])&&(o=(s<3?i(o):s>3?i(t,n,o):i(t,n))||o);return s>3&&o&&Object.defineProperty(t,n,o),o};let DI=class extends(L(Jx)){constructor(){super(...arguments),this.initialized=!1,this.initError=null,this.selectedFile=null,this.uploadedUrl=""}static{this.styles=Ox`
    :host {
      display: block;
      font-family: var(--df-font-family, system-ui, sans-serif);
      width: min(1200px, 90vw);
      margin: 0 auto;
      background: white;
      border-radius: 16px;
      padding: 2rem;
    }

    .container {
      display: grid;
      gap: 1.5rem;
    }

    header {
      background: linear-gradient(130deg, rgba(99, 102, 241, 0.08), rgba(79, 70, 229, 0.06));
      border-radius: 24px;
      padding: 2rem;
      border: 1px solid rgba(99, 102, 241, 0.2);
    }

    h2 {
      margin: 0 0 0.75rem;
      font-size: 1.85rem;
      color: #1e293b;
      font-weight: 600;
    }

    p {
      margin: 0;
      color: #475569;
      line-height: 1.6;
    }

    .callouts {
      display: grid;
      gap: 1rem;
      grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
    }

    .callout {
      border-radius: 16px;
      padding: 1rem 1.25rem;
      background: rgba(241, 245, 249, 0.92);
      border: 1px solid rgba(148, 163, 184, 0.28);
      color: #0f172a;
      font-weight: 600;
      text-align: center;
    }

    .demo-section {
      background: white;
      border-radius: 16px;
      padding: 1.5rem;
      border: 1px solid rgba(148, 163, 184, 0.28);
    }

    .demo-section h3 {
      margin: 0 0 1rem;
      color: #1e1b4b;
      font-size: 1.25rem;
    }

    .two-column {
      display: grid;
      gap: 1.5rem;
      grid-template-columns: 1fr 1fr;
    }

    .auth-hint {
      display: flex;
      flex-direction: column;
      gap: 0.75rem;
      align-items: flex-start;
      padding: 1.25rem;
      border-radius: 12px;
      border: 1px dashed rgba(99, 102, 241, 0.4);
      background: rgba(99, 102, 241, 0.08);
      color: #312e81;
      font-size: 0.95rem;
      line-height: 1.5;
    }

    .auth-hint strong {
      font-weight: 600;
    }

    @media (max-width: 768px) {
      .two-column {
        grid-template-columns: 1fr;
      }
    }

    .file-preview-area {
      min-height: 200px;
      display: flex;
      align-items: center;
      justify-content: center;
    }
  `}connectedCallback(){super.connectedCallback(),this.initializeStore()}render(){const e=TT.get(),t=R_.get(),n="authenticated"===t.authState,r="loading"===t.authState||!t.initialized;return oe`
      <div class="container">
        <header>
          <h2>Storage Pattern</h2>
          <p>
            This teaching demo demonstrates Firebase Storage patterns including file upload with
            progress tracking, file listing, and deletion. Uses the df-upload-link component for
            uploads with inline preview. All operations work with the Firebase Storage emulator.
          </p>
        </header>

        <div class="callouts">
          <div class="callout">Upload Progress: ${Math.round(100*e)}%</div>
          <div class="callout">
            ${this.uploadedUrl?`Last Upload: ${this.uploadedUrl.split("/").pop()}`:"No file uploaded yet"}
          </div>
        </div>

        ${this.initError?oe`<div class="callout" style="background: rgba(220, 38, 38, 0.16); color: #b91c1c;">
              ${this.initError}
            </div>`:oe`
              <div class="two-column">
                <div class="demo-section">
                  <h3>Upload Files</h3>
                  <df-upload-link
                    resourcePageType="storage"
                    resourceLinkType="image"
                    @upload-link-gather-url=${this.handleUploadComplete}
                  ></df-upload-link>
                </div>

                <div class="demo-section">
                  <h3>Uploaded Files</h3>
                  ${n?oe`
                        <df-file-list
                          id="file-list"
                          directory="uploads/storage/image"
                          showDelete
                          showPreviews
                          @file-select=${this.handleFileSelect}
                          @file-delete=${this.handleFileDelete}
                        ></df-file-list>
                      `:oe`
                        <div class="auth-hint">
                          <strong>Authentication required</strong>
                          ${r?oe`Connecting to Firebase Authentication...`:oe`Sign in using the Authentication demo (e.g.
                                <code>alice.anderson@example.com</code>) to view the
                                seeded Storage files.`}
                        </div>
                      `}
                </div>
              </div>
            `}
      </div>
    `}initializeStore(){this.initialized||(this.initialized=!0)}async handleUploadComplete(e){console.log("[df-storage-demo] Upload complete:",e.detail),this.uploadedUrl=e.detail.linkUrl;const t=this.shadowRoot?.querySelector("#file-list");t&&"function"==typeof t.refresh&&await t.refresh()}handleFileSelect(e){this.selectedFile=e.detail.file}async handleFileDelete(e){const{file:t}=e.detail,n=document.createElement("df-file-delete");n.file=t,n.showButton=!1,n.addEventListener("delete-complete",async()=>{console.log("[df-storage-demo] File deleted:",t);const e=this.shadowRoot?.querySelector("#file-list");e&&"function"==typeof e.refresh&&await e.refresh(),this.selectedFile?.path===t.path&&(this.selectedFile=null),document.body.removeChild(n)}),n.addEventListener("delete-cancel",()=>{document.body.removeChild(n)}),document.body.appendChild(n),n.open()}};AI([rE()],DI.prototype,"initialized",void 0),AI([rE()],DI.prototype,"initError",void 0),AI([rE()],DI.prototype,"selectedFile",void 0),AI([rE()],DI.prototype,"uploadedUrl",void 0),DI=AI([Zx("df-storage-demo")],DI);var NI=Object.freeze({__proto__:null,get DfStorageDemo(){return DI}});
//# sourceMappingURL=df-firebase-teaching-app.js.map
