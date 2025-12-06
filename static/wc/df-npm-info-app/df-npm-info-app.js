var e=Object.defineProperty,t=(t,r,i)=>(((t,r,i)=>{r in t?e(t,r,{enumerable:!0,configurable:!0,writable:!0,value:i}):t[r]=i})(t,"symbol"!=typeof r?r+"":r,i),i),r=(e,t)=>{if(Object(t)!==t)throw TypeError('Cannot use the "in" operator on this value');return e.has(t)},i=(e,t,r)=>{if(t.has(e))throw TypeError("Cannot add the same private member more than once");t instanceof WeakSet?t.add(e):t.set(e,r)},n=(e,t,r)=>(((e,t,r)=>{if(!t.has(e))throw TypeError("Cannot "+r)})(e,t,"access private method"),r);
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
function o(e,t){return Object.is(e,t)}
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */let s=null,a=!1,l=1;const c=Symbol("SIGNAL");function h(e){const t=s;return s=e,t}const d={version:0,lastCleanEpoch:0,dirty:!1,producerNode:void 0,producerLastReadVersion:void 0,producerIndexOfThis:void 0,nextProducerIndex:0,liveConsumerNode:void 0,liveConsumerIndexOfThis:void 0,consumerAllowSignalWrites:!1,consumerIsAlwaysLive:!1,producerMustRecompute:()=>!1,producerRecomputeValue:()=>{},consumerMarkedDirty:()=>{},consumerOnSignalRead:()=>{}};function u(e){if(a)throw new Error("undefined"!=typeof ngDevMode&&ngDevMode?"Assertion error: signal read during notification phase":"");if(null===s)return;s.consumerOnSignalRead(e);const t=s.nextProducerIndex++;if(b(s),t<s.producerNode.length&&s.producerNode[t]!==e&&y(s)){v(s.producerNode[t],s.producerIndexOfThis[t])}s.producerNode[t]!==e&&(s.producerNode[t]=e,s.producerIndexOfThis[t]=y(s)?m(e,s,t):0),s.producerLastReadVersion[t]=e.version}function p(e){if(e.dirty||e.lastCleanEpoch!==l){if(!e.producerMustRecompute(e)&&!function(e){b(e);for(let t=0;t<e.producerNode.length;t++){const r=e.producerNode[t],i=e.producerLastReadVersion[t];if(i!==r.version)return!0;if(p(r),i!==r.version)return!0}return!1}(e))return e.dirty=!1,void(e.lastCleanEpoch=l);e.producerRecomputeValue(e),e.dirty=!1,e.lastCleanEpoch=l}}function f(e){if(void 0===e.liveConsumerNode)return;const t=a;a=!0;try{for(const t of e.liveConsumerNode)t.dirty||g(t)}finally{a=t}}function g(e){var t;e.dirty=!0,f(e),null==(t=e.consumerMarkedDirty)||t.call(e.wrapper??e)}function m(e,t,r){var i;if(_(e),b(e),0===e.liveConsumerNode.length){null==(i=e.watched)||i.call(e.wrapper);for(let t=0;t<e.producerNode.length;t++)e.producerIndexOfThis[t]=m(e.producerNode[t],e,t)}return e.liveConsumerIndexOfThis.push(r),e.liveConsumerNode.push(t)-1}function v(e,t){var r;if(_(e),b(e),"undefined"!=typeof ngDevMode&&ngDevMode&&t>=e.liveConsumerNode.length)throw new Error(`Assertion error: active consumer index ${t} is out of bounds of ${e.liveConsumerNode.length} consumers)`);if(1===e.liveConsumerNode.length){null==(r=e.unwatched)||r.call(e.wrapper);for(let t=0;t<e.producerNode.length;t++)v(e.producerNode[t],e.producerIndexOfThis[t])}const i=e.liveConsumerNode.length-1;if(e.liveConsumerNode[t]=e.liveConsumerNode[i],e.liveConsumerIndexOfThis[t]=e.liveConsumerIndexOfThis[i],e.liveConsumerNode.length--,e.liveConsumerIndexOfThis.length--,t<e.liveConsumerNode.length){const r=e.liveConsumerIndexOfThis[t],i=e.liveConsumerNode[t];b(i),i.producerIndexOfThis[r]=t}}function y(e){var t;return e.consumerIsAlwaysLive||((null==(t=null==e?void 0:e.liveConsumerNode)?void 0:t.length)??0)>0}function b(e){e.producerNode??(e.producerNode=[]),e.producerIndexOfThis??(e.producerIndexOfThis=[]),e.producerLastReadVersion??(e.producerLastReadVersion=[])}function _(e){e.liveConsumerNode??(e.liveConsumerNode=[]),e.liveConsumerIndexOfThis??(e.liveConsumerIndexOfThis=[])}
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */function w(e){if(p(e),u(e),e.value===E)throw e.error;return e.value}const x=Symbol("UNSET"),S=Symbol("COMPUTING"),E=Symbol("ERRORED"),T=(()=>({...d,value:x,dirty:!0,error:null,equal:o,producerMustRecompute:e=>e.value===x||e.value===S,producerRecomputeValue(e){if(e.value===S)throw new Error("Detected cycle in computations.");const t=e.value;e.value=S;const r=function(e){return e&&(e.nextProducerIndex=0),h(e)}(e);let i,n=!1;try{i=e.computation.call(e.wrapper);n=t!==x&&t!==E&&e.equal.call(e.wrapper,t,i)}catch(t){i=E,e.error=t}finally{!function(e,t){if(h(t),e&&void 0!==e.producerNode&&void 0!==e.producerIndexOfThis&&void 0!==e.producerLastReadVersion){if(y(e))for(let t=e.nextProducerIndex;t<e.producerNode.length;t++)v(e.producerNode[t],e.producerIndexOfThis[t]);for(;e.producerNode.length>e.nextProducerIndex;)e.producerNode.pop(),e.producerLastReadVersion.pop(),e.producerIndexOfThis.pop()}}(e,r)}n?e.value=t:(e.value=i,e.version++)}}))();let A=
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
function(){throw new Error};function I(){return u(this),this.value}function C(e,t){!1===(null==s?void 0:s.consumerAllowSignalWrites)&&A(),e.equal.call(e.wrapper,e.value,t)||(e.value=t,function(e){e.version++,l++,f(e)}
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
 */(e))}const k=(()=>({...d,equal:o,value:void 0}))();const O=Symbol("node");var N;(e=>{var o,l,p,f;o=O,l=new WeakSet,e.isState=e=>"object"==typeof e&&r(l,e),e.State=class{constructor(r,n={}){i(this,l),t(this,o);const s=
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
function(e){const t=Object.create(k);t.value=e;const r=()=>(u(t),t.value);return r[c]=t,r}(r),a=s[c];if(this[O]=a,a.wrapper=this,n){const t=n.equals;t&&(a.equal=t),a.watched=n[e.subtle.watched],a.unwatched=n[e.subtle.unwatched]}}get(){if(!(0,e.isState)(this))throw new TypeError("Wrong receiver type for Signal.State.prototype.get");return I.call(this[O])}set(t){if(!(0,e.isState)(this))throw new TypeError("Wrong receiver type for Signal.State.prototype.set");if(a)throw new Error("Writes to signals not permitted during Watcher callback");C(this[O],t)}};p=O,f=new WeakSet,e.isComputed=e=>"object"==typeof e&&r(f,e),e.Computed=class{constructor(r,n){i(this,f),t(this,p);const o=function(e){const t=Object.create(T);t.computation=e;const r=()=>w(t);return r[c]=t,r}(r),s=o[c];if(s.consumerAllowSignalWrites=!0,this[O]=s,s.wrapper=this,n){const t=n.equals;t&&(s.equal=t),s.watched=n[e.subtle.watched],s.unwatched=n[e.subtle.unwatched]}}get(){if(!(0,e.isComputed)(this))throw new TypeError("Wrong receiver type for Signal.Computed.prototype.get");return w(this[O])}},(o=>{var a,l,c,p;o.untrack=function(e){let t,r=null;try{r=h(null),t=e()}finally{h(r)}return t},o.introspectSources=function(t){var r;if(!(0,e.isComputed)(t)&&!(0,e.isWatcher)(t))throw new TypeError("Called introspectSources without a Computed or Watcher argument");return(null==(r=t[O].producerNode)?void 0:r.map(e=>e.wrapper))??[]},o.introspectSinks=function(t){var r;if(!(0,e.isComputed)(t)&&!(0,e.isState)(t))throw new TypeError("Called introspectSinks without a Signal argument");return(null==(r=t[O].liveConsumerNode)?void 0:r.map(e=>e.wrapper))??[]},o.hasSinks=function(t){if(!(0,e.isComputed)(t)&&!(0,e.isState)(t))throw new TypeError("Called hasSinks without a Signal argument");const r=t[O].liveConsumerNode;return!!r&&r.length>0},o.hasSources=function(t){if(!(0,e.isComputed)(t)&&!(0,e.isWatcher)(t))throw new TypeError("Called hasSources without a Computed or Watcher argument");const r=t[O].producerNode;return!!r&&r.length>0};a=O,l=new WeakSet,c=new WeakSet,p=function(t){for(const r of t)if(!(0,e.isComputed)(r)&&!(0,e.isState)(r))throw new TypeError("Called watch/unwatch without a Computed or State argument")},e.isWatcher=e=>r(l,e),o.Watcher=class{constructor(e){i(this,l),i(this,c),t(this,a);let r=Object.create(d);r.wrapper=this,r.consumerMarkedDirty=e,r.consumerIsAlwaysLive=!0,r.consumerAllowSignalWrites=!1,r.producerNode=[],this[O]=r}watch(...t){if(!(0,e.isWatcher)(this))throw new TypeError("Called unwatch without Watcher receiver");n(this,c,p).call(this,t);const r=this[O];r.dirty=!1;const i=h(r);for(const e of t)u(e[O]);h(i)}unwatch(...t){if(!(0,e.isWatcher)(this))throw new TypeError("Called unwatch without Watcher receiver");n(this,c,p).call(this,t);const r=this[O];b(r);for(let e=r.producerNode.length-1;e>=0;e--)if(t.includes(r.producerNode[e].wrapper)){v(r.producerNode[e],r.producerIndexOfThis[e]);const t=r.producerNode.length-1;if(r.producerNode[e]=r.producerNode[t],r.producerIndexOfThis[e]=r.producerIndexOfThis[t],r.producerNode.length--,r.producerIndexOfThis.length--,r.nextProducerIndex--,e<r.producerNode.length){const t=r.producerIndexOfThis[e],i=r.producerNode[e];_(i),i.liveConsumerIndexOfThis[t]=e}}}getPending(){if(!(0,e.isWatcher)(this))throw new TypeError("Called getPending without Watcher receiver");return this[O].producerNode.filter(e=>e.dirty).map(e=>e.wrapper)}},o.currentComputed=function(){var e;return null==(e=s)?void 0:e.wrapper},o.watched=Symbol("watched"),o.unwatched=Symbol("unwatched")})(e.subtle||(e.subtle={}))})(N||(N={}));
/**
 * @license
 * Copyright 2023 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const P=Symbol("SignalWatcherBrand"),R=new FinalizationRegistry(({watcher:e,signal:t})=>{e.unwatch(t)}),D=new WeakMap;function $(e){return!0===e[P]?(console.warn("SignalWatcher should not be applied to the same class more than once."),e):class extends e{constructor(){super(...arguments),this._$St=new N.State(0),this._$Si=!1,this._$So=!0,this._$Sh=new Set}_$Sl(){if(void 0!==this._$Su)return;this._$Sv=new N.Computed(()=>{this._$St.get(),super.performUpdate()});const e=this._$Su=new N.subtle.Watcher(function(){const e=D.get(this);void 0!==e&&(!1===e._$Si&&e.requestUpdate(),this.watch())});D.set(e,this),R.register(this,{watcher:e,signal:this._$Sv}),e.watch(this._$Sv)}_$Sp(){void 0!==this._$Su&&(this._$Su.unwatch(this._$Sv),this._$Sv=void 0,this._$Su=void 0)}performUpdate(){this.isUpdatePending&&(this._$Sl(),this._$Si=!0,this._$St.set(this._$St.get()+1),this._$Si=!1,this._$Sv.get())}update(e){try{this._$So?(this._$So=!1,super.update(e)):this._$Sh.forEach(e=>e.commit())}finally{this.isUpdatePending=!1,this._$Sh.clear()}}requestUpdate(e,t,r){this._$So=!0,super.requestUpdate(e,t,r)}connectedCallback(){super.connectedCallback(),this.requestUpdate()}disconnectedCallback(){super.disconnectedCallback(),queueMicrotask(()=>{!1===this.isConnected&&this._$Sp()})}_(e){this._$Sh.add(e);const t=this._$So;this.requestUpdate(),this._$So=t}m(e){this._$Sh.delete(e)}}}
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const L=1,U=3,M=4,j=e=>(...t)=>({_$litDirective$:e,values:t});let F=class{constructor(e){}get _$AU(){return this._$AM._$AU}_$AT(e,t,r){this._$Ct=e,this._$AM=t,this._$Ci=r}_$AS(e,t){return this.update(e,t)}update(e,t){return this.render(...t)}};
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const V=globalThis,B=V.trustedTypes,z=B?B.createPolicy("lit-html",{createHTML:e=>e}):void 0,H="$lit$",q=`lit$${Math.random().toFixed(9).slice(2)}$`,W="?"+q,K=`<${W}>`,G=document,X=()=>G.createComment(""),J=e=>null===e||"object"!=typeof e&&"function"!=typeof e,Y=Array.isArray,Z="[ \t\n\f\r]",Q=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,ee=/-->/g,te=/>/g,re=RegExp(`>|${Z}(?:([^\\s"'>=/]+)(${Z}*=${Z}*(?:[^ \t\n\f\r"'\`<>=]|("|')|))|$)`,"g"),ie=/'/g,ne=/"/g,oe=/^(?:script|style|textarea|title)$/i,se=(e=>(t,...r)=>({_$litType$:e,strings:t,values:r}))(1),ae=Symbol.for("lit-noChange"),le=Symbol.for("lit-nothing"),ce=new WeakMap,he=G.createTreeWalker(G,129);function de(e,t){if(!Y(e)||!e.hasOwnProperty("raw"))throw Error("invalid template strings array");return void 0!==z?z.createHTML(t):t}const ue=(e,t)=>{const r=e.length-1,i=[];let n,o=2===t?"<svg>":3===t?"<math>":"",s=Q;for(let t=0;t<r;t++){const r=e[t];let a,l,c=-1,h=0;for(;h<r.length&&(s.lastIndex=h,l=s.exec(r),null!==l);)h=s.lastIndex,s===Q?"!--"===l[1]?s=ee:void 0!==l[1]?s=te:void 0!==l[2]?(oe.test(l[2])&&(n=RegExp("</"+l[2],"g")),s=re):void 0!==l[3]&&(s=re):s===re?">"===l[0]?(s=n??Q,c=-1):void 0===l[1]?c=-2:(c=s.lastIndex-l[2].length,a=l[1],s=void 0===l[3]?re:'"'===l[3]?ne:ie):s===ne||s===ie?s=re:s===ee||s===te?s=Q:(s=re,n=void 0);const d=s===re&&e[t+1].startsWith("/>")?" ":"";o+=s===Q?r+K:c>=0?(i.push(a),r.slice(0,c)+H+r.slice(c)+q+d):r+q+(-2===c?t:d)}return[de(e,o+(e[r]||"<?>")+(2===t?"</svg>":3===t?"</math>":"")),i]};let pe=class e{constructor({strings:t,_$litType$:r},i){let n;this.parts=[];let o=0,s=0;const a=t.length-1,l=this.parts,[c,h]=ue(t,r);if(this.el=e.createElement(c,i),he.currentNode=this.el.content,2===r||3===r){const e=this.el.content.firstChild;e.replaceWith(...e.childNodes)}for(;null!==(n=he.nextNode())&&l.length<a;){if(1===n.nodeType){if(n.hasAttributes())for(const e of n.getAttributeNames())if(e.endsWith(H)){const t=h[s++],r=n.getAttribute(e).split(q),i=/([.?@])?(.*)/.exec(t);l.push({type:1,index:o,name:i[2],strings:r,ctor:"."===i[1]?ye:"?"===i[1]?be:"@"===i[1]?_e:ve}),n.removeAttribute(e)}else e.startsWith(q)&&(l.push({type:6,index:o}),n.removeAttribute(e));if(oe.test(n.tagName)){const e=n.textContent.split(q),t=e.length-1;if(t>0){n.textContent=B?B.emptyScript:"";for(let r=0;r<t;r++)n.append(e[r],X()),he.nextNode(),l.push({type:2,index:++o});n.append(e[t],X())}}}else if(8===n.nodeType)if(n.data===W)l.push({type:2,index:o});else{let e=-1;for(;-1!==(e=n.data.indexOf(q,e+1));)l.push({type:7,index:o}),e+=q.length-1}o++}}static createElement(e,t){const r=G.createElement("template");return r.innerHTML=e,r}};function fe(e,t,r=e,i){if(t===ae)return t;let n=void 0!==i?r._$Co?.[i]:r._$Cl;const o=J(t)?void 0:t._$litDirective$;return n?.constructor!==o&&(n?._$AO?.(!1),void 0===o?n=void 0:(n=new o(e),n._$AT(e,r,i)),void 0!==i?(r._$Co??=[])[i]=n:r._$Cl=n),void 0!==n&&(t=fe(e,n._$AS(e,t.values),n,i)),t}let ge=class{constructor(e,t){this._$AV=[],this._$AN=void 0,this._$AD=e,this._$AM=t}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(e){const{el:{content:t},parts:r}=this._$AD,i=(e?.creationScope??G).importNode(t,!0);he.currentNode=i;let n=he.nextNode(),o=0,s=0,a=r[0];for(;void 0!==a;){if(o===a.index){let t;2===a.type?t=new me(n,n.nextSibling,this,e):1===a.type?t=new a.ctor(n,a.name,a.strings,this,e):6===a.type&&(t=new we(n,this,e)),this._$AV.push(t),a=r[++s]}o!==a?.index&&(n=he.nextNode(),o++)}return he.currentNode=G,i}p(e){let t=0;for(const r of this._$AV)void 0!==r&&(void 0!==r.strings?(r._$AI(e,r,t),t+=r.strings.length-2):r._$AI(e[t])),t++}};class me{get _$AU(){return this._$AM?._$AU??this._$Cv}constructor(e,t,r,i){this.type=2,this._$AH=le,this._$AN=void 0,this._$AA=e,this._$AB=t,this._$AM=r,this.options=i,this._$Cv=i?.isConnected??!0}get parentNode(){let e=this._$AA.parentNode;const t=this._$AM;return void 0!==t&&11===e?.nodeType&&(e=t.parentNode),e}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(e,t=this){e=fe(this,e,t),J(e)?e===le||null==e||""===e?(this._$AH!==le&&this._$AR(),this._$AH=le):e!==this._$AH&&e!==ae&&this._(e):void 0!==e._$litType$?this.$(e):void 0!==e.nodeType?this.T(e):(e=>Y(e)||"function"==typeof e?.[Symbol.iterator])(e)?this.k(e):this._(e)}O(e){return this._$AA.parentNode.insertBefore(e,this._$AB)}T(e){this._$AH!==e&&(this._$AR(),this._$AH=this.O(e))}_(e){this._$AH!==le&&J(this._$AH)?this._$AA.nextSibling.data=e:this.T(G.createTextNode(e)),this._$AH=e}$(e){const{values:t,_$litType$:r}=e,i="number"==typeof r?this._$AC(e):(void 0===r.el&&(r.el=pe.createElement(de(r.h,r.h[0]),this.options)),r);if(this._$AH?._$AD===i)this._$AH.p(t);else{const e=new ge(i,this),r=e.u(this.options);e.p(t),this.T(r),this._$AH=e}}_$AC(e){let t=ce.get(e.strings);return void 0===t&&ce.set(e.strings,t=new pe(e)),t}k(e){Y(this._$AH)||(this._$AH=[],this._$AR());const t=this._$AH;let r,i=0;for(const n of e)i===t.length?t.push(r=new me(this.O(X()),this.O(X()),this,this.options)):r=t[i],r._$AI(n),i++;i<t.length&&(this._$AR(r&&r._$AB.nextSibling,i),t.length=i)}_$AR(e=this._$AA.nextSibling,t){for(this._$AP?.(!1,!0,t);e!==this._$AB;){const t=e.nextSibling;e.remove(),e=t}}setConnected(e){void 0===this._$AM&&(this._$Cv=e,this._$AP?.(e))}}let ve=class{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(e,t,r,i,n){this.type=1,this._$AH=le,this._$AN=void 0,this.element=e,this.name=t,this._$AM=i,this.options=n,r.length>2||""!==r[0]||""!==r[1]?(this._$AH=Array(r.length-1).fill(new String),this.strings=r):this._$AH=le}_$AI(e,t=this,r,i){const n=this.strings;let o=!1;if(void 0===n)e=fe(this,e,t,0),o=!J(e)||e!==this._$AH&&e!==ae,o&&(this._$AH=e);else{const i=e;let s,a;for(e=n[0],s=0;s<n.length-1;s++)a=fe(this,i[r+s],t,s),a===ae&&(a=this._$AH[s]),o||=!J(a)||a!==this._$AH[s],a===le?e=le:e!==le&&(e+=(a??"")+n[s+1]),this._$AH[s]=a}o&&!i&&this.j(e)}j(e){e===le?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,e??"")}};class ye extends ve{constructor(){super(...arguments),this.type=3}j(e){this.element[this.name]=e===le?void 0:e}}class be extends ve{constructor(){super(...arguments),this.type=4}j(e){this.element.toggleAttribute(this.name,!!e&&e!==le)}}let _e=class extends ve{constructor(e,t,r,i,n){super(e,t,r,i,n),this.type=5}_$AI(e,t=this){if((e=fe(this,e,t,0)??le)===ae)return;const r=this._$AH,i=e===le&&r!==le||e.capture!==r.capture||e.once!==r.once||e.passive!==r.passive,n=e!==le&&(r===le||i);i&&this.element.removeEventListener(this.name,this,r),n&&this.element.addEventListener(this.name,this,e),this._$AH=e}handleEvent(e){"function"==typeof this._$AH?this._$AH.call(this.options?.host??this.element,e):this._$AH.handleEvent(e)}};class we{constructor(e,t,r){this.element=e,this.type=6,this._$AN=void 0,this._$AM=t,this.options=r}get _$AU(){return this._$AM._$AU}_$AI(e){fe(this,e)}}const xe=V.litHtmlPolyfillSupport;xe?.(pe,me),(V.litHtmlVersions??=[]).push("3.3.1");const Se=(e,t,r)=>{const i=r?.renderBefore??t;let n=i._$litPart$;if(void 0===n){const e=r?.renderBefore??null;i._$litPart$=n=new me(t.insertBefore(X(),e),e,void 0,r??{})}return n._$AI(e),n
/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */},Ee={};
/**
 * @license
 * Copyright 2023 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
N.State,N.Computed;const Te=(e,t)=>new N.State(e,t),Ae=(e,t)=>new N.Computed(e,t),Ie=globalThis,Ce=Ie.ShadowRoot&&(void 0===Ie.ShadyCSS||Ie.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,ke=Symbol(),Oe=new WeakMap;
/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */let Ne=class{constructor(e,t,r){if(this._$cssResult$=!0,r!==ke)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=e,this.t=t}get styleSheet(){let e=this.o;const t=this.t;if(Ce&&void 0===e){const r=void 0!==t&&1===t.length;r&&(e=Oe.get(t)),void 0===e&&((this.o=e=new CSSStyleSheet).replaceSync(this.cssText),r&&Oe.set(t,e))}return e}toString(){return this.cssText}};const Pe=(e,...t)=>{const r=1===e.length?e[0]:t.reduce((t,r,i)=>t+(e=>{if(!0===e._$cssResult$)return e.cssText;if("number"==typeof e)return e;throw Error("Value passed to 'css' function must be a 'css' function result: "+e+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(r)+e[i+1],e[0]);return new Ne(r,e,ke)},Re=Ce?e=>e:e=>e instanceof CSSStyleSheet?(e=>{let t="";for(const r of e.cssRules)t+=r.cssText;return(e=>new Ne("string"==typeof e?e:e+"",void 0,ke))(t)})(e):e,{is:De,defineProperty:$e,getOwnPropertyDescriptor:Le,getOwnPropertyNames:Ue,getOwnPropertySymbols:Me,getPrototypeOf:je}=Object,Fe=globalThis,Ve=Fe.trustedTypes,Be=Ve?Ve.emptyScript:"",ze=Fe.reactiveElementPolyfillSupport,He=(e,t)=>e,qe={toAttribute(e,t){switch(t){case Boolean:e=e?Be:null;break;case Object:case Array:e=null==e?e:JSON.stringify(e)}return e},fromAttribute(e,t){let r=e;switch(t){case Boolean:r=null!==e;break;case Number:r=null===e?null:Number(e);break;case Object:case Array:try{r=JSON.parse(e)}catch(e){r=null}}return r}},We=(e,t)=>!De(e,t),Ke={attribute:!0,type:String,converter:qe,reflect:!1,useDefault:!1,hasChanged:We};
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */Symbol.metadata??=Symbol("metadata"),Fe.litPropertyMetadata??=new WeakMap;class Ge extends HTMLElement{static addInitializer(e){this._$Ei(),(this.l??=[]).push(e)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(e,t=Ke){if(t.state&&(t.attribute=!1),this._$Ei(),this.prototype.hasOwnProperty(e)&&((t=Object.create(t)).wrapped=!0),this.elementProperties.set(e,t),!t.noAccessor){const r=Symbol(),i=this.getPropertyDescriptor(e,r,t);void 0!==i&&$e(this.prototype,e,i)}}static getPropertyDescriptor(e,t,r){const{get:i,set:n}=Le(this.prototype,e)??{get(){return this[t]},set(e){this[t]=e}};return{get:i,set(t){const o=i?.call(this);n?.call(this,t),this.requestUpdate(e,o,r)},configurable:!0,enumerable:!0}}static getPropertyOptions(e){return this.elementProperties.get(e)??Ke}static _$Ei(){if(this.hasOwnProperty(He("elementProperties")))return;const e=je(this);e.finalize(),void 0!==e.l&&(this.l=[...e.l]),this.elementProperties=new Map(e.elementProperties)}static finalize(){if(this.hasOwnProperty(He("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(He("properties"))){const e=this.properties,t=[...Ue(e),...Me(e)];for(const r of t)this.createProperty(r,e[r])}const e=this[Symbol.metadata];if(null!==e){const t=litPropertyMetadata.get(e);if(void 0!==t)for(const[e,r]of t)this.elementProperties.set(e,r)}this._$Eh=new Map;for(const[e,t]of this.elementProperties){const r=this._$Eu(e,t);void 0!==r&&this._$Eh.set(r,e)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(e){const t=[];if(Array.isArray(e)){const r=new Set(e.flat(1/0).reverse());for(const e of r)t.unshift(Re(e))}else void 0!==e&&t.push(Re(e));return t}static _$Eu(e,t){const r=t.attribute;return!1===r?void 0:"string"==typeof r?r:"string"==typeof e?e.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){this._$ES=new Promise(e=>this.enableUpdating=e),this._$AL=new Map,this._$E_(),this.requestUpdate(),this.constructor.l?.forEach(e=>e(this))}addController(e){(this._$EO??=new Set).add(e),void 0!==this.renderRoot&&this.isConnected&&e.hostConnected?.()}removeController(e){this._$EO?.delete(e)}_$E_(){const e=new Map,t=this.constructor.elementProperties;for(const r of t.keys())this.hasOwnProperty(r)&&(e.set(r,this[r]),delete this[r]);e.size>0&&(this._$Ep=e)}createRenderRoot(){const e=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return((e,t)=>{if(Ce)e.adoptedStyleSheets=t.map(e=>e instanceof CSSStyleSheet?e:e.styleSheet);else for(const r of t){const t=document.createElement("style"),i=Ie.litNonce;void 0!==i&&t.setAttribute("nonce",i),t.textContent=r.cssText,e.appendChild(t)}})(e,this.constructor.elementStyles),e}connectedCallback(){this.renderRoot??=this.createRenderRoot(),this.enableUpdating(!0),this._$EO?.forEach(e=>e.hostConnected?.())}enableUpdating(e){}disconnectedCallback(){this._$EO?.forEach(e=>e.hostDisconnected?.())}attributeChangedCallback(e,t,r){this._$AK(e,r)}_$ET(e,t){const r=this.constructor.elementProperties.get(e),i=this.constructor._$Eu(e,r);if(void 0!==i&&!0===r.reflect){const n=(void 0!==r.converter?.toAttribute?r.converter:qe).toAttribute(t,r.type);this._$Em=e,null==n?this.removeAttribute(i):this.setAttribute(i,n),this._$Em=null}}_$AK(e,t){const r=this.constructor,i=r._$Eh.get(e);if(void 0!==i&&this._$Em!==i){const e=r.getPropertyOptions(i),n="function"==typeof e.converter?{fromAttribute:e.converter}:void 0!==e.converter?.fromAttribute?e.converter:qe;this._$Em=i;const o=n.fromAttribute(t,e.type);this[i]=o??this._$Ej?.get(i)??o,this._$Em=null}}requestUpdate(e,t,r){if(void 0!==e){const i=this.constructor,n=this[e];if(r??=i.getPropertyOptions(e),!((r.hasChanged??We)(n,t)||r.useDefault&&r.reflect&&n===this._$Ej?.get(e)&&!this.hasAttribute(i._$Eu(e,r))))return;this.C(e,t,r)}!1===this.isUpdatePending&&(this._$ES=this._$EP())}C(e,t,{useDefault:r,reflect:i,wrapped:n},o){r&&!(this._$Ej??=new Map).has(e)&&(this._$Ej.set(e,o??t??this[e]),!0!==n||void 0!==o)||(this._$AL.has(e)||(this.hasUpdated||r||(t=void 0),this._$AL.set(e,t)),!0===i&&this._$Em!==e&&(this._$Eq??=new Set).add(e))}async _$EP(){this.isUpdatePending=!0;try{await this._$ES}catch(e){Promise.reject(e)}const e=this.scheduleUpdate();return null!=e&&await e,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??=this.createRenderRoot(),this._$Ep){for(const[e,t]of this._$Ep)this[e]=t;this._$Ep=void 0}const e=this.constructor.elementProperties;if(e.size>0)for(const[t,r]of e){const{wrapped:e}=r,i=this[t];!0!==e||this._$AL.has(t)||void 0===i||this.C(t,void 0,r,i)}}let e=!1;const t=this._$AL;try{e=this.shouldUpdate(t),e?(this.willUpdate(t),this._$EO?.forEach(e=>e.hostUpdate?.()),this.update(t)):this._$EM()}catch(t){throw e=!1,this._$EM(),t}e&&this._$AE(t)}willUpdate(e){}_$AE(e){this._$EO?.forEach(e=>e.hostUpdated?.()),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(e)),this.updated(e)}_$EM(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(e){return!0}update(e){this._$Eq&&=this._$Eq.forEach(e=>this._$ET(e,this[e])),this._$EM()}updated(e){}firstUpdated(e){}}Ge.elementStyles=[],Ge.shadowRootOptions={mode:"open"},Ge[He("elementProperties")]=new Map,Ge[He("finalized")]=new Map,ze?.({ReactiveElement:Ge}),(Fe.reactiveElementVersions??=[]).push("2.1.1");
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const Xe=globalThis;let Je=class extends Ge{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){const e=super.createRenderRoot();return this.renderOptions.renderBefore??=e.firstChild,e}update(e){const t=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(e),this._$Do=Se(t,this.renderRoot,this.renderOptions)}connectedCallback(){super.connectedCallback(),this._$Do?.setConnected(!0)}disconnectedCallback(){super.disconnectedCallback(),this._$Do?.setConnected(!1)}render(){return ae}};Je._$litElement$=!0,Je.finalized=!0,Xe.litElementHydrateSupport?.({LitElement:Je});const Ye=Xe.litElementPolyfillSupport;Ye?.({LitElement:Je}),(Xe.litElementVersions??=[]).push("4.2.1");
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const Ze=e=>(t,r)=>{void 0!==r?r.addInitializer(()=>{customElements.define(e,t)}):customElements.define(e,t)},Qe={attribute:!0,type:String,converter:qe,reflect:!1,hasChanged:We},et=(e=Qe,t,r)=>{const{kind:i,metadata:n}=r;let o=globalThis.litPropertyMetadata.get(n);if(void 0===o&&globalThis.litPropertyMetadata.set(n,o=new Map),"setter"===i&&((e=Object.create(e)).wrapped=!0),o.set(r.name,e),"accessor"===i){const{name:i}=r;return{set(r){const n=t.get.call(this);t.set.call(this,r),this.requestUpdate(i,n,e)},init(t){return void 0!==t&&this.C(i,void 0,e,t),t}}}if("setter"===i){const{name:i}=r;return function(r){const n=this[i];t.call(this,r),this.requestUpdate(i,n,e)}}throw Error("Unsupported decorator location: "+i)};
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function tt(e){return(t,r)=>"object"==typeof r?et(e,t,r):((e,t,r)=>{const i=t.hasOwnProperty(r);return t.constructor.createProperty(r,e),i?Object.getOwnPropertyDescriptor(t,r):void 0})(e,t,r)}
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function rt(e){return tt({...e,state:!0,attribute:!1})}
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const it=(e,t,r)=>(r.configurable=!0,r.enumerable=!0,Reflect.decorate&&"object"!=typeof t&&Object.defineProperty(e,t,r),r);
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function nt(e,t){return(t,r,i)=>it(t,r,{get(){return(t=>t.renderRoot?.querySelector(e)??null)(this)}})}
/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function ot(e){return(t,r)=>{const{slot:i,selector:n}=e??{},o="slot"+(i?`[name=${i}]`:":not([name])");return it(t,r,{get(){const t=this.renderRoot?.querySelector(o),r=t?.assignedElements(e)??[];return void 0===n?r:r.filter(e=>e.matches(n))}})}}const st=Te("World"),at=Te(0),lt=Te(null);Ae(()=>{const e=st.get();return{name:e,greeting:`Hello, ${e}!`,clickCount:at.get(),lastInteractionTs:lt.get()}});const ct=Te(""),ht=Te(null),dt=Te("idle"),ut=Te(null),pt=Te(null);let ft=0;const gt=Ae(()=>({packageName:ct.get(),packageData:ht.get(),status:dt.get(),lastUpdated:ut.get(),errorMessage:pt.get()}));function mt(e){ct.get()!==e&&ct.set(e)}async function vt(e){const t=e??ct.get();if(!t.trim())return void yt();ct.set(t),dt.set("loading"),pt.set(null),ft+=1;const r=ft;try{const e=await fetch(`https://registry.npmjs.org/${t}`);if(await new Promise(e=>setTimeout(e,1e3)),r!==ft)return;if(!e.ok)throw new Error(`Package "${t}" not found (${e.status})`);const i=await e.json();ht.set(i),dt.set("ready"),ut.set(Date.now())}catch(e){if(r!==ft)return;dt.set("error"),pt.set(e instanceof Error?e.message:"Failed to fetch package information"),ht.set(null)}}function yt(){ft+=1,ct.set(""),ht.set(null),dt.set("idle"),ut.set(null),pt.set(null)}const bt=Te("web-components"),_t=Te([]),wt=Te("idle"),xt=Te(null),St=Te(0),Et=Te(null),Tt=Te(!1),At=Te(!1);if(Ae(()=>({version:St.get(),topic:bt.get(),tasks:_t.get(),status:wt.get(),lastUpdated:xt.get(),isAutoRefreshing:At.get(),errorMessage:Et.get()})),"object"==typeof globalThis){const e=globalThis;e.__dfPracticeForcePracticeErrorSetter=function(e){Tt.set(e)},e.__dfPracticeGetForcePracticeError=()=>Tt.get()}const It=Te([]),Ct=Te("none"),kt=Te([{id:"none",label:"None"},{id:"upload",label:"Upload"},{id:"site",label:"Site"},{id:"add",label:"Add"}]);Ae(()=>({options:kt.get(),selectedId:Ct.get(),disabledIds:It.get()}));const Ot=Te("none"),Nt=Te(""),Pt=Te("Select File to Upload"),Rt=Te(!1),Dt=Te(0),$t=Te(!1),Lt=Te("void");Ae(()=>({mode:Ot.get(),linkUrl:Nt.get(),fileName:Pt.get(),isUploading:Rt.get(),uploadProgress:Dt.get(),isValid:$t.get(),mediaType:Lt.get()}));const Ut=Te(0),Mt=Te(""),jt=Te("idle"),Ft=Te(null),Vt=Te(null);Ae(()=>({tokenCount:Ut.get(),documentContent:Mt.get(),status:jt.get(),lastUpdated:Ft.get(),errorMessage:Vt.get()}));
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
const Bt=function(e){const t=[];let r=0;for(let i=0;i<e.length;i++){let n=e.charCodeAt(i);n<128?t[r++]=n:n<2048?(t[r++]=n>>6|192,t[r++]=63&n|128):55296==(64512&n)&&i+1<e.length&&56320==(64512&e.charCodeAt(i+1))?(n=65536+((1023&n)<<10)+(1023&e.charCodeAt(++i)),t[r++]=n>>18|240,t[r++]=n>>12&63|128,t[r++]=n>>6&63|128,t[r++]=63&n|128):(t[r++]=n>>12|224,t[r++]=n>>6&63|128,t[r++]=63&n|128)}return t},zt={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:"function"==typeof atob,encodeByteArray(e,t){if(!Array.isArray(e))throw Error("encodeByteArray takes an array as a parameter");this.init_();const r=t?this.byteToCharMapWebSafe_:this.byteToCharMap_,i=[];for(let t=0;t<e.length;t+=3){const n=e[t],o=t+1<e.length,s=o?e[t+1]:0,a=t+2<e.length,l=a?e[t+2]:0,c=n>>2,h=(3&n)<<4|s>>4;let d=(15&s)<<2|l>>6,u=63&l;a||(u=64,o||(d=64)),i.push(r[c],r[h],r[d],r[u])}return i.join("")},encodeString(e,t){return this.HAS_NATIVE_SUPPORT&&!t?btoa(e):this.encodeByteArray(Bt(e),t)},decodeString(e,t){return this.HAS_NATIVE_SUPPORT&&!t?atob(e):function(e){const t=[];let r=0,i=0;for(;r<e.length;){const n=e[r++];if(n<128)t[i++]=String.fromCharCode(n);else if(n>191&&n<224){const o=e[r++];t[i++]=String.fromCharCode((31&n)<<6|63&o)}else if(n>239&&n<365){const o=((7&n)<<18|(63&e[r++])<<12|(63&e[r++])<<6|63&e[r++])-65536;t[i++]=String.fromCharCode(55296+(o>>10)),t[i++]=String.fromCharCode(56320+(1023&o))}else{const o=e[r++],s=e[r++];t[i++]=String.fromCharCode((15&n)<<12|(63&o)<<6|63&s)}}return t.join("")}(this.decodeStringToByteArray(e,t))},decodeStringToByteArray(e,t){this.init_();const r=t?this.charToByteMapWebSafe_:this.charToByteMap_,i=[];for(let t=0;t<e.length;){const n=r[e.charAt(t++)],o=t<e.length?r[e.charAt(t)]:0;++t;const s=t<e.length?r[e.charAt(t)]:64;++t;const a=t<e.length?r[e.charAt(t)]:64;if(++t,null==n||null==o||null==s||null==a)throw new Ht;const l=n<<2|o>>4;if(i.push(l),64!==s){const e=o<<4&240|s>>2;if(i.push(e),64!==a){const e=s<<6&192|a;i.push(e)}}}return i},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let e=0;e<this.ENCODED_VALS.length;e++)this.byteToCharMap_[e]=this.ENCODED_VALS.charAt(e),this.charToByteMap_[this.byteToCharMap_[e]]=e,this.byteToCharMapWebSafe_[e]=this.ENCODED_VALS_WEBSAFE.charAt(e),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[e]]=e,e>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(e)]=e,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(e)]=e)}}};
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
 */class Ht extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const qt=function(e){return function(e){const t=Bt(e);return zt.encodeByteArray(t,!0)}(e).replace(/\./g,"")},Wt=function(e){try{return zt.decodeString(e,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};
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
const Kt=()=>
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
function(){if("undefined"!=typeof self)return self;if("undefined"!=typeof window)return window;if("undefined"!=typeof global)return global;throw new Error("Unable to locate global object.")}().__FIREBASE_DEFAULTS__,Gt=()=>{try{return Kt()||(()=>{if("undefined"==typeof process||void 0===process.env)return;const e=process.env.__FIREBASE_DEFAULTS__;return e?JSON.parse(e):void 0})()||(()=>{if("undefined"==typeof document)return;let e;try{e=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch(e){return}const t=e&&Wt(e[1]);return t&&JSON.parse(t)})()}catch(e){return void console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${e}`)}};
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
function Xt(e){try{return(e.startsWith("http://")||e.startsWith("https://")?new URL(e).hostname:e).endsWith(".cloudworkstations.dev")}catch(e){return!1}}
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
 */function Jt(){return"undefined"!=typeof navigator&&"string"==typeof navigator.userAgent?navigator.userAgent:""}class Yt extends Error{constructor(e,t,r){super(t),this.code=e,this.customData=r,this.name="FirebaseError",Object.setPrototypeOf(this,Yt.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Zt.prototype.create)}}class Zt{constructor(e,t,r){this.service=e,this.serviceName=t,this.errors=r}create(e,...t){const r=t[0]||{},i=`${this.service}/${e}`,n=this.errors[e],o=n?function(e,t){return e.replace(Qt,(e,r)=>{const i=t[r];return null!=i?String(i):`<${r}?>`})}(n,r):"Error",s=`${this.serviceName}: ${o} (${i}).`;return new Yt(i,s,r)}}const Qt=/\{\$([^}]+)}/g;
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
 */function er(e){const t=[];for(const[r,i]of Object.entries(e))Array.isArray(i)?i.forEach(e=>{t.push(encodeURIComponent(r)+"="+encodeURIComponent(e))}):t.push(encodeURIComponent(r)+"="+encodeURIComponent(i));return t.length?"&"+t.join("&"):""}class tr{constructor(e,t){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=t,this.task.then(()=>{e(this)}).catch(e=>{this.error(e)})}next(e){this.forEachObserver(t=>{t.next(e)})}error(e){this.forEachObserver(t=>{t.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,t,r){let i;if(void 0===e&&void 0===t&&void 0===r)throw new Error("Missing Observer.");i=function(e,t){if("object"!=typeof e||null===e)return!1;for(const r of t)if(r in e&&"function"==typeof e[r])return!0;return!1}(e,["next","error","complete"])?e:{next:e,error:t,complete:r},void 0===i.next&&(i.next=rr),void 0===i.error&&(i.error=rr),void 0===i.complete&&(i.complete=rr);const n=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?i.error(this.finalError):i.complete()}catch(e){}}),this.observers.push(i),n}unsubscribeOne(e){void 0!==this.observers&&void 0!==this.observers[e]&&(delete this.observers[e],this.observerCount-=1,0===this.observerCount&&void 0!==this.onNoObservers&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let t=0;t<this.observers.length;t++)this.sendOne(t,e)}sendOne(e,t){this.task.then(()=>{if(void 0!==this.observers&&void 0!==this.observers[e])try{t(this.observers[e])}catch(e){"undefined"!=typeof console&&console.error&&console.error(e)}})}close(e){this.finalized||(this.finalized=!0,void 0!==e&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function rr(){}
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
 */function ir(e){return e&&e._delegate?e._delegate:e}class nr{constructor(e,t,r){this.name=e,this.instanceFactory=t,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}
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
 */var or;!function(e){e[e.DEBUG=0]="DEBUG",e[e.VERBOSE=1]="VERBOSE",e[e.INFO=2]="INFO",e[e.WARN=3]="WARN",e[e.ERROR=4]="ERROR",e[e.SILENT=5]="SILENT"}(or||(or={}));const sr={debug:or.DEBUG,verbose:or.VERBOSE,info:or.INFO,warn:or.WARN,error:or.ERROR,silent:or.SILENT},ar=or.INFO,lr={[or.DEBUG]:"log",[or.VERBOSE]:"log",[or.INFO]:"info",[or.WARN]:"warn",[or.ERROR]:"error"},cr=(e,t,...r)=>{if(t<e.logLevel)return;const i=(new Date).toISOString(),n=lr[t];if(!n)throw new Error(`Attempted to log a message with an invalid logType (value: ${t})`);console[n](`[${i}]  ${e.name}:`,...r)};class hr{constructor(e){this.name=e,this._logLevel=ar,this._logHandler=cr,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in or))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel="string"==typeof e?sr[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if("function"!=typeof e)throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,or.DEBUG,...e),this._logHandler(this,or.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,or.VERBOSE,...e),this._logHandler(this,or.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,or.INFO,...e),this._logHandler(this,or.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,or.WARN,...e),this._logHandler(this,or.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,or.ERROR,...e),this._logHandler(this,or.ERROR,...e)}}let dr,ur;const pr=new WeakMap,fr=new WeakMap,gr=new WeakMap,mr=new WeakMap,vr=new WeakMap;let yr={get(e,t,r){if(e instanceof IDBTransaction){if("done"===t)return fr.get(e);if("objectStoreNames"===t)return e.objectStoreNames||gr.get(e);if("store"===t)return r.objectStoreNames[1]?void 0:r.objectStore(r.objectStoreNames[0])}return wr(e[t])},set:(e,t,r)=>(e[t]=r,!0),has:(e,t)=>e instanceof IDBTransaction&&("done"===t||"store"===t)||t in e};function br(e){return e!==IDBDatabase.prototype.transaction||"objectStoreNames"in IDBTransaction.prototype?(ur||(ur=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])).includes(e)?function(...t){return e.apply(xr(this),t),wr(pr.get(this))}:function(...t){return wr(e.apply(xr(this),t))}:function(t,...r){const i=e.call(xr(this),t,...r);return gr.set(i,t.sort?t.sort():[t]),wr(i)}}function _r(e){return"function"==typeof e?br(e):(e instanceof IDBTransaction&&function(e){if(fr.has(e))return;const t=new Promise((t,r)=>{const i=()=>{e.removeEventListener("complete",n),e.removeEventListener("error",o),e.removeEventListener("abort",o)},n=()=>{t(),i()},o=()=>{r(e.error||new DOMException("AbortError","AbortError")),i()};e.addEventListener("complete",n),e.addEventListener("error",o),e.addEventListener("abort",o)});fr.set(e,t)}(e),t=e,(dr||(dr=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])).some(e=>t instanceof e)?new Proxy(e,yr):e);var t}function wr(e){if(e instanceof IDBRequest)return function(e){const t=new Promise((t,r)=>{const i=()=>{e.removeEventListener("success",n),e.removeEventListener("error",o)},n=()=>{t(wr(e.result)),i()},o=()=>{r(e.error),i()};e.addEventListener("success",n),e.addEventListener("error",o)});return t.then(t=>{t instanceof IDBCursor&&pr.set(t,e)}).catch(()=>{}),vr.set(t,e),t}(e);if(mr.has(e))return mr.get(e);const t=_r(e);return t!==e&&(mr.set(e,t),vr.set(t,e)),t}const xr=e=>vr.get(e);const Sr=["get","getKey","getAll","getAllKeys","count"],Er=["put","add","delete","clear"],Tr=new Map;function Ar(e,t){if(!(e instanceof IDBDatabase)||t in e||"string"!=typeof t)return;if(Tr.get(t))return Tr.get(t);const r=t.replace(/FromIndex$/,""),i=t!==r,n=Er.includes(r);if(!(r in(i?IDBIndex:IDBObjectStore).prototype)||!n&&!Sr.includes(r))return;const o=async function(e,...t){const o=this.transaction(e,n?"readwrite":"readonly");let s=o.store;return i&&(s=s.index(t.shift())),(await Promise.all([s[r](...t),n&&o.done]))[0]};return Tr.set(t,o),o}yr=(e=>({...e,get:(t,r,i)=>Ar(t,r)||e.get(t,r,i),has:(t,r)=>!!Ar(t,r)||e.has(t,r)}))(yr);
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
class Ir{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(e=>{if(function(e){const t=e.getComponent();return"VERSION"===(null==t?void 0:t.type)}(e)){const t=e.getImmediate();return`${t.library}/${t.version}`}return null}).filter(e=>e).join(" ")}}const Cr="@firebase/app",kr="0.13.2",Or=new hr("@firebase/app"),Nr="@firebase/app-compat",Pr="@firebase/analytics-compat",Rr="@firebase/analytics",Dr="@firebase/app-check-compat",$r="@firebase/app-check",Lr="@firebase/auth",Ur="@firebase/auth-compat",Mr="@firebase/database",jr="@firebase/data-connect",Fr="@firebase/database-compat",Vr="@firebase/functions",Br="@firebase/functions-compat",zr="@firebase/installations",Hr="@firebase/installations-compat",qr="@firebase/messaging",Wr="@firebase/messaging-compat",Kr="@firebase/performance",Gr="@firebase/performance-compat",Xr="@firebase/remote-config",Jr="@firebase/remote-config-compat",Yr="@firebase/storage",Zr="@firebase/storage-compat",Qr="@firebase/firestore",ei="@firebase/ai",ti="@firebase/firestore-compat",ri="firebase",ii={[Cr]:"fire-core",[Nr]:"fire-core-compat",[Rr]:"fire-analytics",[Pr]:"fire-analytics-compat",[$r]:"fire-app-check",[Dr]:"fire-app-check-compat",[Lr]:"fire-auth",[Ur]:"fire-auth-compat",[Mr]:"fire-rtdb",[jr]:"fire-data-connect",[Fr]:"fire-rtdb-compat",[Vr]:"fire-fn",[Br]:"fire-fn-compat",[zr]:"fire-iid",[Hr]:"fire-iid-compat",[qr]:"fire-fcm",[Wr]:"fire-fcm-compat",[Kr]:"fire-perf",[Gr]:"fire-perf-compat",[Xr]:"fire-rc",[Jr]:"fire-rc-compat",[Yr]:"fire-gcs",[Zr]:"fire-gcs-compat",[Qr]:"fire-fst",[ti]:"fire-fst-compat",[ei]:"fire-vertex","fire-js":"fire-js",[ri]:"fire-js-all"},ni=new Map,oi=new Map,si=new Map;function ai(e,t){try{e.container.addComponent(t)}catch(r){Or.debug(`Component ${t.name} failed to register with FirebaseApp ${e.name}`,r)}}function li(e){const t=e.name;if(si.has(t))return Or.debug(`There were multiple attempts to register component ${t}.`),!1;si.set(t,e);for(const t of ni.values())ai(t,e);for(const t of oi.values())ai(t,e);return!0}function ci(e){return null!=e&&void 0!==e.settings}
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
 */const hi=new Zt("app","Firebase",{"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."}),di="11.10.0";function ui(e,t,r){var i;let n=null!==(i=ii[e])&&void 0!==i?i:e;r&&(n+=`-${r}`);const o=n.match(/\s|\//),s=t.match(/\s|\//);if(o||s){const e=[`Unable to register library "${n}" with version "${t}":`];return o&&e.push(`library name "${n}" contains illegal characters (whitespace or "/")`),o&&s&&e.push("and"),s&&e.push(`version name "${t}" contains illegal characters (whitespace or "/")`),void Or.warn(e.join(" "))}li(new nr(`${n}-version`,()=>({library:n,version:t}),"VERSION"))}
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
 */const pi="firebase-heartbeat-store";let fi=null;function gi(){return fi||(fi=function(e,t,{blocked:r,upgrade:i,blocking:n,terminated:o}={}){const s=indexedDB.open(e,t),a=wr(s);return i&&s.addEventListener("upgradeneeded",e=>{i(wr(s.result),e.oldVersion,e.newVersion,wr(s.transaction),e)}),r&&s.addEventListener("blocked",e=>r(e.oldVersion,e.newVersion,e)),a.then(e=>{o&&e.addEventListener("close",()=>o()),n&&e.addEventListener("versionchange",e=>n(e.oldVersion,e.newVersion,e))}).catch(()=>{}),a}("firebase-heartbeat-database",1,{upgrade:(e,t)=>{if(0===t)try{e.createObjectStore(pi)}catch(e){console.warn(e)}}}).catch(e=>{throw hi.create("idb-open",{originalErrorMessage:e.message})})),fi}async function mi(e,t){try{const r=(await gi()).transaction(pi,"readwrite"),i=r.objectStore(pi);await i.put(t,vi(e)),await r.done}catch(e){if(e instanceof Yt)Or.warn(e.message);else{const t=hi.create("idb-set",{originalErrorMessage:null==e?void 0:e.message});Or.warn(t.message)}}}function vi(e){return`${e.name}!${e.options.appId}`}
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
 */class yi{constructor(e){this.container=e,this._heartbeatsCache=null;const t=this.container.getProvider("app").getImmediate();this._storage=new _i(t),this._heartbeatsCachePromise=this._storage.read().then(e=>(this._heartbeatsCache=e,e))}async triggerHeartbeat(){var e,t;try{const r=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),i=bi();if(null==(null===(e=this._heartbeatsCache)||void 0===e?void 0:e.heartbeats)&&(this._heartbeatsCache=await this._heartbeatsCachePromise,null==(null===(t=this._heartbeatsCache)||void 0===t?void 0:t.heartbeats)))return;if(this._heartbeatsCache.lastSentHeartbeatDate===i||this._heartbeatsCache.heartbeats.some(e=>e.date===i))return;if(this._heartbeatsCache.heartbeats.push({date:i,agent:r}),this._heartbeatsCache.heartbeats.length>30){const e=function(e){if(0===e.length)return-1;let t=0,r=e[0].date;for(let i=1;i<e.length;i++)e[i].date<r&&(r=e[i].date,t=i);return t}
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
 */(this._heartbeatsCache.heartbeats);this._heartbeatsCache.heartbeats.splice(e,1)}return this._storage.overwrite(this._heartbeatsCache)}catch(e){Or.warn(e)}}async getHeartbeatsHeader(){var e;try{if(null===this._heartbeatsCache&&await this._heartbeatsCachePromise,null==(null===(e=this._heartbeatsCache)||void 0===e?void 0:e.heartbeats)||0===this._heartbeatsCache.heartbeats.length)return"";const t=bi(),{heartbeatsToSend:r,unsentEntries:i}=function(e,t=1024){const r=[];let i=e.slice();for(const n of e){const e=r.find(e=>e.agent===n.agent);if(e){if(e.dates.push(n.date),wi(r)>t){e.dates.pop();break}}else if(r.push({agent:n.agent,dates:[n.date]}),wi(r)>t){r.pop();break}i=i.slice(1)}return{heartbeatsToSend:r,unsentEntries:i}}(this._heartbeatsCache.heartbeats),n=qt(JSON.stringify({version:2,heartbeats:r}));return this._heartbeatsCache.lastSentHeartbeatDate=t,i.length>0?(this._heartbeatsCache.heartbeats=i,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),n}catch(e){return Or.warn(e),""}}}function bi(){return(new Date).toISOString().substring(0,10)}class _i{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return!!function(){try{return"object"==typeof indexedDB}catch(e){return!1}}()&&new Promise((e,t)=>{try{let r=!0;const i="validate-browser-context-for-indexeddb-analytics-module",n=self.indexedDB.open(i);n.onsuccess=()=>{n.result.close(),r||self.indexedDB.deleteDatabase(i),e(!0)},n.onupgradeneeded=()=>{r=!1},n.onerror=()=>{var e;t((null===(e=n.error)||void 0===e?void 0:e.message)||"")}}catch(e){t(e)}}).then(()=>!0).catch(()=>!1)}async read(){if(await this._canUseIndexedDBPromise){const e=await async function(e){try{const t=(await gi()).transaction(pi),r=await t.objectStore(pi).get(vi(e));return await t.done,r}catch(e){if(e instanceof Yt)Or.warn(e.message);else{const t=hi.create("idb-get",{originalErrorMessage:null==e?void 0:e.message});Or.warn(t.message)}}}(this.app);return(null==e?void 0:e.heartbeats)?e:{heartbeats:[]}}return{heartbeats:[]}}async overwrite(e){var t;if(await this._canUseIndexedDBPromise){const r=await this.read();return mi(this.app,{lastSentHeartbeatDate:null!==(t=e.lastSentHeartbeatDate)&&void 0!==t?t:r.lastSentHeartbeatDate,heartbeats:e.heartbeats})}}async add(e){var t;if(await this._canUseIndexedDBPromise){const r=await this.read();return mi(this.app,{lastSentHeartbeatDate:null!==(t=e.lastSentHeartbeatDate)&&void 0!==t?t:r.lastSentHeartbeatDate,heartbeats:[...r.heartbeats,...e.heartbeats]})}}}function wi(e){return qt(JSON.stringify({version:2,heartbeats:e})).length}var xi;function Si(e,t){var r={};for(var i in e)Object.prototype.hasOwnProperty.call(e,i)&&t.indexOf(i)<0&&(r[i]=e[i]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var n=0;for(i=Object.getOwnPropertySymbols(e);n<i.length;n++)t.indexOf(i[n])<0&&Object.prototype.propertyIsEnumerable.call(e,i[n])&&(r[i[n]]=e[i[n]])}return r}function Ei(e,t,r,i){var n,o=arguments.length,s=o<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,r):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e,t,r,i);else for(var a=e.length-1;a>=0;a--)(n=e[a])&&(s=(o<3?n(s):o>3?n(t,r,s):n(t,r))||s);return o>3&&s&&Object.defineProperty(t,r,s),s}function Ti(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}xi="",li(new nr("platform-logger",e=>new Ir(e),"PRIVATE")),li(new nr("heartbeat",e=>new yi(e),"PRIVATE")),ui(Cr,kr,xi),ui(Cr,kr,"esm2017"),ui("fire-js",""),"function"==typeof SuppressedError&&SuppressedError;const Ai=Ti,Ii=new Zt("auth","Firebase",{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}),Ci=new hr("@firebase/auth");function ki(e,...t){Ci.logLevel<=or.ERROR&&Ci.error(`Auth (${di}): ${e}`,...t)}
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
 */function Oi(e,...t){throw Di(e,...t)}function Ni(e,...t){return Di(e,...t)}function Pi(e,t,r){const i=Object.assign(Object.assign({},Ai()),{[t]:r});return new Zt("auth","Firebase",i).create(t,{appName:e.name})}function Ri(e){return Pi(e,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function Di(e,...t){if("string"!=typeof e){const r=t[0],i=[...t.slice(1)];return i[0]&&(i[0].appName=e.name),e._errorFactory.create(r,...i)}return Ii.create(e,...t)}function $i(e,t,...r){if(!e)throw Di(t,...r)}function Li(e){const t="INTERNAL ASSERTION FAILED: "+e;throw ki(t),new Error(t)}function Ui(e,t){e||Li(t)}function Mi(){var e;return"undefined"!=typeof self&&(null===(e=self.location)||void 0===e?void 0:e.protocol)||null}
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
 */function ji(){return"undefined"==typeof navigator||!navigator||!("onLine"in navigator)||"boolean"!=typeof navigator.onLine||"http:"!==Mi()&&"https:"!==Mi()&&!function(){const e="object"==typeof chrome?chrome.runtime:"object"==typeof browser?browser.runtime:void 0;return"object"==typeof e&&void 0!==e.id}()&&!("connection"in navigator)||navigator.onLine}
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
class Fi{constructor(e,t){this.shortDelay=e,this.longDelay=t,Ui(t>e,"Short delay should be less than long delay!"),this.isMobile="undefined"!=typeof window&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(Jt())||"object"==typeof navigator&&"ReactNative"===navigator.product}get(){return ji()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}
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
class Vi{static initialize(e,t,r){this.fetchImpl=e,t&&(this.headersImpl=t),r&&(this.responseImpl=r)}static fetch(){return this.fetchImpl?this.fetchImpl:"undefined"!=typeof self&&"fetch"in self?self.fetch:"undefined"!=typeof globalThis&&globalThis.fetch?globalThis.fetch:"undefined"!=typeof fetch?fetch:void Li("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){return this.headersImpl?this.headersImpl:"undefined"!=typeof self&&"Headers"in self?self.Headers:"undefined"!=typeof globalThis&&globalThis.Headers?globalThis.Headers:"undefined"!=typeof Headers?Headers:void Li("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){return this.responseImpl?this.responseImpl:"undefined"!=typeof self&&"Response"in self?self.Response:"undefined"!=typeof globalThis&&globalThis.Response?globalThis.Response:"undefined"!=typeof Response?Response:void Li("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}
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
 */const Bi={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"},zi=["/v1/accounts:signInWithCustomToken","/v1/accounts:signInWithEmailLink","/v1/accounts:signInWithIdp","/v1/accounts:signInWithPassword","/v1/accounts:signInWithPhoneNumber","/v1/token"],Hi=new Fi(3e4,6e4);
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
 */function qi(e,t){return e.tenantId&&!t.tenantId?Object.assign(Object.assign({},t),{tenantId:e.tenantId}):t}async function Wi(e,t,r,i,n={}){return Ki(e,n,async()=>{let n={},o={};i&&("GET"===t?o=i:n={body:JSON.stringify(i)});const s=er(Object.assign({key:e.config.apiKey},o)).slice(1),a=await e._getAdditionalHeaders();a["Content-Type"]="application/json",e.languageCode&&(a["X-Firebase-Locale"]=e.languageCode);const l=Object.assign({method:t,headers:a},n);return"undefined"!=typeof navigator&&"Cloudflare-Workers"===navigator.userAgent||(l.referrerPolicy="no-referrer"),e.emulatorConfig&&Xt(e.emulatorConfig.host)&&(l.credentials="include"),Vi.fetch()(await Gi(e,e.config.apiHost,r,s),l)})}async function Ki(e,t,r){e._canInitEmulator=!1;const i=Object.assign(Object.assign({},Bi),t);try{const t=new Xi(e),n=await Promise.race([r(),t.promise]);t.clearNetworkTimeout();const o=await n.json();if("needConfirmation"in o)throw Ji(e,"account-exists-with-different-credential",o);if(n.ok&&!("errorMessage"in o))return o;{const t=n.ok?o.errorMessage:o.error.message,[r,s]=t.split(" : ");if("FEDERATED_USER_ID_ALREADY_LINKED"===r)throw Ji(e,"credential-already-in-use",o);if("EMAIL_EXISTS"===r)throw Ji(e,"email-already-in-use",o);if("USER_DISABLED"===r)throw Ji(e,"user-disabled",o);const a=i[r]||r.toLowerCase().replace(/[_\s]+/g,"-");if(s)throw Pi(e,a,s);Oi(e,a)}}catch(t){if(t instanceof Yt)throw t;Oi(e,"network-request-failed",{message:String(t)})}}async function Gi(e,t,r,i){const n=`${t}${r}?${i}`,o=e,s=o.config.emulator?function(e,t){Ui(e.emulator,"Emulator should always be set here");const{url:r}=e.emulator;return t?`${r}${t.startsWith("/")?t.slice(1):t}`:r}(e.config,n):`${e.config.apiScheme}://${n}`;if(zi.includes(r)&&(await o._persistenceManagerAvailable,"COOKIE"===o._getPersistenceType())){return o._getPersistence()._getFinalTarget(s).toString()}return s}class Xi{clearNetworkTimeout(){clearTimeout(this.timer)}constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((e,t)=>{this.timer=setTimeout(()=>t(Ni(this.auth,"network-request-failed")),Hi.get())})}}function Ji(e,t,r){const i={appName:e.name};r.email&&(i.email=r.email),r.phoneNumber&&(i.phoneNumber=r.phoneNumber);const n=Ni(e,t,i);return n.customData._tokenResponse=r,n}
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
 */async function Yi(e,t){return Wi(e,"POST","/v1/accounts:lookup",t)}
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
 */function Zi(e){if(e)try{const t=new Date(Number(e));if(!isNaN(t.getTime()))return t.toUTCString()}catch(e){}}function Qi(e){return 1e3*Number(e)}function en(e){const[t,r,i]=e.split(".");if(void 0===t||void 0===r||void 0===i)return ki("JWT malformed, contained fewer than 3 sections"),null;try{const e=Wt(r);return e?JSON.parse(e):(ki("Failed to decode base64 JWT payload"),null)}catch(e){return ki("Caught error parsing JWT payload as JSON",null==e?void 0:e.toString()),null}}function tn(e){const t=en(e);return $i(t,"internal-error"),$i(void 0!==t.exp,"internal-error"),$i(void 0!==t.iat,"internal-error"),Number(t.exp)-Number(t.iat)}
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
 */async function rn(e,t,r=!1){if(r)return t;try{return await t}catch(t){throw t instanceof Yt&&function({code:e}){return"auth/user-disabled"===e||"auth/user-token-expired"===e}
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
 */(t)&&e.auth.currentUser===e&&await e.auth.signOut(),t}}class nn{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,null!==this.timerId&&clearTimeout(this.timerId))}getInterval(e){var t;if(e){const e=this.errorBackoff;return this.errorBackoff=Math.min(2*this.errorBackoff,96e4),e}{this.errorBackoff=3e4;const e=(null!==(t=this.user.stsTokenManager.expirationTime)&&void 0!==t?t:0)-Date.now()-3e5;return Math.max(0,e)}}schedule(e=!1){if(!this.isRunning)return;const t=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},t)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){return void("auth/network-request-failed"===(null==e?void 0:e.code)&&this.schedule(!0))}this.schedule()}}
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
 */class on{constructor(e,t){this.createdAt=e,this.lastLoginAt=t,this._initializeTime()}_initializeTime(){this.lastSignInTime=Zi(this.lastLoginAt),this.creationTime=Zi(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}
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
 */async function sn(e){var t;const r=e.auth,i=await e.getIdToken(),n=await rn(e,Yi(r,{idToken:i}));$i(null==n?void 0:n.users.length,r,"internal-error");const o=n.users[0];e._notifyReloadListener(o);const s=(null===(t=o.providerUserInfo)||void 0===t?void 0:t.length)?an(o.providerUserInfo):[],a=function(e,t){const r=e.filter(e=>!t.some(t=>t.providerId===e.providerId));return[...r,...t]}(e.providerData,s),l=e.isAnonymous,c=!(e.email&&o.passwordHash||(null==a?void 0:a.length)),h=!!l&&c,d={uid:o.localId,displayName:o.displayName||null,photoURL:o.photoUrl||null,email:o.email||null,emailVerified:o.emailVerified||!1,phoneNumber:o.phoneNumber||null,tenantId:o.tenantId||null,providerData:a,metadata:new on(o.createdAt,o.lastLoginAt),isAnonymous:h};Object.assign(e,d)}function an(e){return e.map(e=>{var{providerId:t}=e,r=Si(e,["providerId"]);return{providerId:t,uid:r.rawId||"",displayName:r.displayName||null,email:r.email||null,phoneNumber:r.phoneNumber||null,photoURL:r.photoUrl||null}})}
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
class ln{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){$i(e.idToken,"internal-error"),$i(void 0!==e.idToken,"internal-error"),$i(void 0!==e.refreshToken,"internal-error");const t="expiresIn"in e&&void 0!==e.expiresIn?Number(e.expiresIn):tn(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,t)}updateFromIdToken(e){$i(0!==e.length,"internal-error");const t=tn(e);this.updateTokensAndExpiration(e,null,t)}async getToken(e,t=!1){return t||!this.accessToken||this.isExpired?($i(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null):this.accessToken}clearRefreshToken(){this.refreshToken=null}async refresh(e,t){const{accessToken:r,refreshToken:i,expiresIn:n}=await async function(e,t){const r=await Ki(e,{},async()=>{const r=er({grant_type:"refresh_token",refresh_token:t}).slice(1),{tokenApiHost:i,apiKey:n}=e.config,o=await Gi(e,i,"/v1/token",`key=${n}`),s=await e._getAdditionalHeaders();s["Content-Type"]="application/x-www-form-urlencoded";const a={method:"POST",headers:s,body:r};return e.emulatorConfig&&Xt(e.emulatorConfig.host)&&(a.credentials="include"),Vi.fetch()(o,a)});return{accessToken:r.access_token,expiresIn:r.expires_in,refreshToken:r.refresh_token}}(e,t);this.updateTokensAndExpiration(r,i,Number(n))}updateTokensAndExpiration(e,t,r){this.refreshToken=t||null,this.accessToken=e||null,this.expirationTime=Date.now()+1e3*r}static fromJSON(e,t){const{refreshToken:r,accessToken:i,expirationTime:n}=t,o=new ln;return r&&($i("string"==typeof r,"internal-error",{appName:e}),o.refreshToken=r),i&&($i("string"==typeof i,"internal-error",{appName:e}),o.accessToken=i),n&&($i("number"==typeof n,"internal-error",{appName:e}),o.expirationTime=n),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new ln,this.toJSON())}_performRefresh(){return Li("not implemented")}}
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
 */function cn(e,t){$i("string"==typeof e||void 0===e,"internal-error",{appName:t})}class hn{constructor(e){var{uid:t,auth:r,stsTokenManager:i}=e,n=Si(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new nn(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=t,this.auth=r,this.stsTokenManager=i,this.accessToken=i.accessToken,this.displayName=n.displayName||null,this.email=n.email||null,this.emailVerified=n.emailVerified||!1,this.phoneNumber=n.phoneNumber||null,this.photoURL=n.photoURL||null,this.isAnonymous=n.isAnonymous||!1,this.tenantId=n.tenantId||null,this.providerData=n.providerData?[...n.providerData]:[],this.metadata=new on(n.createdAt||void 0,n.lastLoginAt||void 0)}async getIdToken(e){const t=await rn(this,this.stsTokenManager.getToken(this.auth,e));return $i(t,this.auth,"internal-error"),this.accessToken!==t&&(this.accessToken=t,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),t}getIdTokenResult(e){return async function(e,t=!1){const r=ir(e),i=await r.getIdToken(t),n=en(i);$i(n&&n.exp&&n.auth_time&&n.iat,r.auth,"internal-error");const o="object"==typeof n.firebase?n.firebase:void 0,s=null==o?void 0:o.sign_in_provider;return{claims:n,token:i,authTime:Zi(Qi(n.auth_time)),issuedAtTime:Zi(Qi(n.iat)),expirationTime:Zi(Qi(n.exp)),signInProvider:s||null,signInSecondFactor:(null==o?void 0:o.sign_in_second_factor)||null}}(this,e)}reload(){return async function(e){const t=ir(e);await sn(t),await t.auth._persistUserIfCurrent(t),t.auth._notifyListenersIfCurrent(t)}(this)}_assign(e){this!==e&&($i(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(e=>Object.assign({},e)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const t=new hn(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return t.metadata._copy(this.metadata),t}_onReload(e){$i(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,t=!1){let r=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),r=!0),t&&await sn(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(ci(this.auth.app))return Promise.reject(Ri(this.auth));const e=await this.getIdToken();return await rn(this,async function(e,t){return Wi(e,"POST","/v1/accounts:delete",t)}(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,t){var r,i,n,o,s,a,l,c;const h=null!==(r=t.displayName)&&void 0!==r?r:void 0,d=null!==(i=t.email)&&void 0!==i?i:void 0,u=null!==(n=t.phoneNumber)&&void 0!==n?n:void 0,p=null!==(o=t.photoURL)&&void 0!==o?o:void 0,f=null!==(s=t.tenantId)&&void 0!==s?s:void 0,g=null!==(a=t._redirectEventId)&&void 0!==a?a:void 0,m=null!==(l=t.createdAt)&&void 0!==l?l:void 0,v=null!==(c=t.lastLoginAt)&&void 0!==c?c:void 0,{uid:y,emailVerified:b,isAnonymous:_,providerData:w,stsTokenManager:x}=t;$i(y&&x,e,"internal-error");const S=ln.fromJSON(this.name,x);$i("string"==typeof y,e,"internal-error"),cn(h,e.name),cn(d,e.name),$i("boolean"==typeof b,e,"internal-error"),$i("boolean"==typeof _,e,"internal-error"),cn(u,e.name),cn(p,e.name),cn(f,e.name),cn(g,e.name),cn(m,e.name),cn(v,e.name);const E=new hn({uid:y,auth:e,email:d,emailVerified:b,displayName:h,isAnonymous:_,photoURL:p,phoneNumber:u,tenantId:f,stsTokenManager:S,createdAt:m,lastLoginAt:v});return w&&Array.isArray(w)&&(E.providerData=w.map(e=>Object.assign({},e))),g&&(E._redirectEventId=g),E}static async _fromIdTokenResponse(e,t,r=!1){const i=new ln;i.updateFromServerResponse(t);const n=new hn({uid:t.localId,auth:e,stsTokenManager:i,isAnonymous:r});return await sn(n),n}static async _fromGetAccountInfoResponse(e,t,r){const i=t.users[0];$i(void 0!==i.localId,"internal-error");const n=void 0!==i.providerUserInfo?an(i.providerUserInfo):[],o=!(i.email&&i.passwordHash||(null==n?void 0:n.length)),s=new ln;s.updateFromIdToken(r);const a=new hn({uid:i.localId,auth:e,stsTokenManager:s,isAnonymous:o}),l={uid:i.localId,displayName:i.displayName||null,photoURL:i.photoUrl||null,email:i.email||null,emailVerified:i.emailVerified||!1,phoneNumber:i.phoneNumber||null,tenantId:i.tenantId||null,providerData:n,metadata:new on(i.createdAt,i.lastLoginAt),isAnonymous:!(i.email&&i.passwordHash||(null==n?void 0:n.length))};return Object.assign(a,l),a}}
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
 */const dn=new Map;function un(e){Ui(e instanceof Function,"Expected a class definition");let t=dn.get(e);return t?(Ui(t instanceof e,"Instance stored in cache mismatched with class"),t):(t=new e,dn.set(e,t),t)}
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
 */class pn{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,t){this.storage[e]=t}async _get(e){const t=this.storage[e];return void 0===t?null:t}async _remove(e){delete this.storage[e]}_addListener(e,t){}_removeListener(e,t){}}pn.type="NONE";const fn=pn;
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
 */function gn(e,t,r){return`firebase:${e}:${t}:${r}`}class mn{constructor(e,t,r){this.persistence=e,this.auth=t,this.userKey=r;const{config:i,name:n}=this.auth;this.fullUserKey=gn(this.userKey,i.apiKey,n),this.fullPersistenceKey=gn("persistence",i.apiKey,n),this.boundEventHandler=t._onStorageEvent.bind(t),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);if(!e)return null;if("string"==typeof e){const t=await Yi(this.auth,{idToken:e}).catch(()=>{});return t?hn._fromGetAccountInfoResponse(this.auth,t,e):null}return hn._fromJSON(this.auth,e)}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const t=await this.getCurrentUser();return await this.removeCurrentUser(),this.persistence=e,t?this.setCurrentUser(t):void 0}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,t,r="authUser"){if(!t.length)return new mn(un(fn),e,r);const i=(await Promise.all(t.map(async e=>{if(await e._isAvailable())return e}))).filter(e=>e);let n=i[0]||un(fn);const o=gn(r,e.config.apiKey,e.name);let s=null;for(const r of t)try{const t=await r._get(o);if(t){let i;if("string"==typeof t){const r=await Yi(e,{idToken:t}).catch(()=>{});if(!r)break;i=await hn._fromGetAccountInfoResponse(e,r,t)}else i=hn._fromJSON(e,t);r!==n&&(s=i),n=r;break}}catch(e){}const a=i.filter(e=>e._shouldAllowMigration);return n._shouldAllowMigration&&a.length?(n=a[0],s&&await n._set(o,s.toJSON()),await Promise.all(t.map(async e=>{if(e!==n)try{await e._remove(o)}catch(e){}})),new mn(n,e,r)):new mn(n,e,r)}}
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
 */function vn(e){const t=e.toLowerCase();if(t.includes("opera/")||t.includes("opr/")||t.includes("opios/"))return"Opera";if(function(e=Jt()){return/iemobile/i.test(e)}(t))return"IEMobile";if(t.includes("msie")||t.includes("trident/"))return"IE";if(t.includes("edge/"))return"Edge";if(function(e=Jt()){return/firefox\//i.test(e)}(t))return"Firefox";if(t.includes("silk/"))return"Silk";if(function(e=Jt()){return/blackberry/i.test(e)}(t))return"Blackberry";if(function(e=Jt()){return/webos/i.test(e)}
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
 */(t))return"Webos";if(function(e=Jt()){const t=e.toLowerCase();return t.includes("safari/")&&!t.includes("chrome/")&&!t.includes("crios/")&&!t.includes("android")}(t))return"Safari";if((t.includes("chrome/")||function(e=Jt()){return/crios\//i.test(e)}(t))&&!t.includes("edge/"))return"Chrome";if(function(e=Jt()){return/android/i.test(e)}(t))return"Android";{const t=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=e.match(t);if(2===(null==r?void 0:r.length))return r[1]}return"Other"}function yn(e,t=[]){let r;switch(e){case"Browser":r=vn(Jt());break;case"Worker":r=`${vn(Jt())}-${e}`;break;default:r=e}const i=t.length?t.join(","):"FirebaseCore-web";return`${r}/JsCore/${di}/${i}`}
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
 */class bn{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,t){const r=t=>new Promise((r,i)=>{try{r(e(t))}catch(e){i(e)}});r.onAbort=t,this.queue.push(r);const i=this.queue.length-1;return()=>{this.queue[i]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const t=[];try{for(const r of this.queue)await r(e),r.onAbort&&t.push(r.onAbort)}catch(e){t.reverse();for(const e of t)try{e()}catch(e){}throw this.auth._errorFactory.create("login-blocked",{originalMessage:null==e?void 0:e.message})}}}
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
 */class _n{constructor(e){var t,r,i,n;const o=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=null!==(t=o.minPasswordLength)&&void 0!==t?t:6,o.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=o.maxPasswordLength),void 0!==o.containsLowercaseCharacter&&(this.customStrengthOptions.containsLowercaseLetter=o.containsLowercaseCharacter),void 0!==o.containsUppercaseCharacter&&(this.customStrengthOptions.containsUppercaseLetter=o.containsUppercaseCharacter),void 0!==o.containsNumericCharacter&&(this.customStrengthOptions.containsNumericCharacter=o.containsNumericCharacter),void 0!==o.containsNonAlphanumericCharacter&&(this.customStrengthOptions.containsNonAlphanumericCharacter=o.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,"ENFORCEMENT_STATE_UNSPECIFIED"===this.enforcementState&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=null!==(i=null===(r=e.allowedNonAlphanumericCharacters)||void 0===r?void 0:r.join(""))&&void 0!==i?i:"",this.forceUpgradeOnSignin=null!==(n=e.forceUpgradeOnSignin)&&void 0!==n&&n,this.schemaVersion=e.schemaVersion}validatePassword(e){var t,r,i,n,o,s;const a={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,a),this.validatePasswordCharacterOptions(e,a),a.isValid&&(a.isValid=null===(t=a.meetsMinPasswordLength)||void 0===t||t),a.isValid&&(a.isValid=null===(r=a.meetsMaxPasswordLength)||void 0===r||r),a.isValid&&(a.isValid=null===(i=a.containsLowercaseLetter)||void 0===i||i),a.isValid&&(a.isValid=null===(n=a.containsUppercaseLetter)||void 0===n||n),a.isValid&&(a.isValid=null===(o=a.containsNumericCharacter)||void 0===o||o),a.isValid&&(a.isValid=null===(s=a.containsNonAlphanumericCharacter)||void 0===s||s),a}validatePasswordLengthOptions(e,t){const r=this.customStrengthOptions.minPasswordLength,i=this.customStrengthOptions.maxPasswordLength;r&&(t.meetsMinPasswordLength=e.length>=r),i&&(t.meetsMaxPasswordLength=e.length<=i)}validatePasswordCharacterOptions(e,t){let r;this.updatePasswordCharacterOptionsStatuses(t,!1,!1,!1,!1);for(let i=0;i<e.length;i++)r=e.charAt(i),this.updatePasswordCharacterOptionsStatuses(t,r>="a"&&r<="z",r>="A"&&r<="Z",r>="0"&&r<="9",this.allowedNonAlphanumericCharacters.includes(r))}updatePasswordCharacterOptionsStatuses(e,t,r,i,n){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=t)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=r)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=i)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=n))}}
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
 */class wn{constructor(e,t,r,i){this.app=e,this.heartbeatServiceProvider=t,this.appCheckServiceProvider=r,this.config=i,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new xn(this),this.idTokenSubscription=new xn(this),this.beforeStateQueue=new bn(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=Ii,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this._resolvePersistenceManagerAvailable=void 0,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=i.sdkClientVersion,this._persistenceManagerAvailable=new Promise(e=>this._resolvePersistenceManagerAvailable=e)}_initializeWithPersistence(e,t){return t&&(this._popupRedirectResolver=un(t)),this._initializationPromise=this.queue(async()=>{var r,i,n;if(!this._deleted&&(this.persistenceManager=await mn.create(this,e),null===(r=this._resolvePersistenceManagerAvailable)||void 0===r||r.call(this),!this._deleted)){if(null===(i=this._popupRedirectResolver)||void 0===i?void 0:i._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch(e){}await this.initializeCurrentUser(t),this.lastNotifiedUid=(null===(n=this.currentUser)||void 0===n?void 0:n.uid)||null,this._deleted||(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();return this.currentUser||e?this.currentUser&&e&&this.currentUser.uid===e.uid?(this._currentUser._assign(e),void await this.currentUser.getIdToken()):void await this._updateCurrentUser(e,!0):void 0}async initializeCurrentUserFromIdToken(e){try{const t=await Yi(this,{idToken:e}),r=await hn._fromGetAccountInfoResponse(this,t,e);await this.directlySetCurrentUser(r)}catch(e){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",e),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){var t;if(ci(this.app)){const e=this.app.settings.authIdToken;return e?new Promise(t=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(e).then(t,t))}):this.directlySetCurrentUser(null)}const r=await this.assertedPersistence.getCurrentUser();let i=r,n=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const r=null===(t=this.redirectUser)||void 0===t?void 0:t._redirectEventId,o=null==i?void 0:i._redirectEventId,s=await this.tryRedirectSignIn(e);r&&r!==o||!(null==s?void 0:s.user)||(i=s.user,n=!0)}if(!i)return this.directlySetCurrentUser(null);if(!i._redirectEventId){if(n)try{await this.beforeStateQueue.runMiddleware(i)}catch(e){i=r,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(e))}return i?this.reloadAndSetCurrentUserOrClear(i):this.directlySetCurrentUser(null)}return $i(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===i._redirectEventId?this.directlySetCurrentUser(i):this.reloadAndSetCurrentUserOrClear(i)}async tryRedirectSignIn(e){let t=null;try{t=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch(e){await this._setRedirectUser(null)}return t}async reloadAndSetCurrentUserOrClear(e){try{await sn(e)}catch(e){if("auth/network-request-failed"!==(null==e?void 0:e.code))return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=function(){if("undefined"==typeof navigator)return null;const e=navigator;return e.languages&&e.languages[0]||e.language||null}()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(ci(this.app))return Promise.reject(Ri(this));const t=e?ir(e):null;return t&&$i(t.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(t&&t._clone(this))}async _updateCurrentUser(e,t=!1){if(!this._deleted)return e&&$i(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),t||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return ci(this.app)?Promise.reject(Ri(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return ci(this.app)?Promise.reject(Ri(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(un(e))})}_getRecaptchaConfig(){return null==this.tenantId?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const t=this._getPasswordPolicyInternal();return t.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):t.validatePassword(e)}_getPasswordPolicyInternal(){return null===this.tenantId?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await async function(e,t={}){return Wi(e,"GET","/v2/passwordPolicy",qi(e,t))}
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
 */(this),t=new _n(e);null===this.tenantId?this._projectPasswordPolicy=t:this._tenantPasswordPolicies[this.tenantId]=t}_getPersistenceType(){return this.assertedPersistence.persistence.type}_getPersistence(){return this.assertedPersistence.persistence}_updateErrorMap(e){this._errorFactory=new Zt("auth","Firebase",e())}onAuthStateChanged(e,t,r){return this.registerStateListener(this.authStateSubscription,e,t,r)}beforeAuthStateChanged(e,t){return this.beforeStateQueue.pushCallback(e,t)}onIdTokenChanged(e,t,r){return this.registerStateListener(this.idTokenSubscription,e,t,r)}authStateReady(){return new Promise((e,t)=>{if(this.currentUser)e();else{const r=this.onAuthStateChanged(()=>{r(),e()},t)}})}async revokeAccessToken(e){if(this.currentUser){const t={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:await this.currentUser.getIdToken()};null!=this.tenantId&&(t.tenantId=this.tenantId),await async function(e,t){return Wi(e,"POST","/v2/accounts:revokeToken",qi(e,t))}(this,t)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:null===(e=this._currentUser)||void 0===e?void 0:e.toJSON()}}async _setRedirectUser(e,t){const r=await this.getOrInitRedirectPersistenceManager(t);return null===e?r.removeCurrentUser():r.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const t=e&&un(e)||this._popupRedirectResolver;$i(t,this,"argument-error"),this.redirectPersistenceManager=await mn.create(this,[un(t._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var t,r;return this._isInitialized&&await this.queue(async()=>{}),(null===(t=this._currentUser)||void 0===t?void 0:t._redirectEventId)===e?this._currentUser:(null===(r=this.redirectUser)||void 0===r?void 0:r._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,t;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const r=null!==(t=null===(e=this.currentUser)||void 0===e?void 0:e.uid)&&void 0!==t?t:null;this.lastNotifiedUid!==r&&(this.lastNotifiedUid=r,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,t,r,i){if(this._deleted)return()=>{};const n="function"==typeof t?t:t.next.bind(t);let o=!1;const s=this._isInitialized?Promise.resolve():this._initializationPromise;if($i(s,this,"internal-error"),s.then(()=>{o||n(this.currentUser)}),"function"==typeof t){const n=e.addObserver(t,r,i);return()=>{o=!0,n()}}{const r=e.addObserver(t);return()=>{o=!0,r()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return $i(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){e&&!this.frameworks.includes(e)&&(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=yn(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const t={"X-Client-Version":this.clientVersion};this.app.options.appId&&(t["X-Firebase-gmpid"]=this.app.options.appId);const r=await(null===(e=this.heartbeatServiceProvider.getImmediate({optional:!0}))||void 0===e?void 0:e.getHeartbeatsHeader());r&&(t["X-Firebase-Client"]=r);const i=await this._getAppCheckToken();return i&&(t["X-Firebase-AppCheck"]=i),t}async _getAppCheckToken(){var e;if(ci(this.app)&&this.app.settings.appCheckToken)return this.app.settings.appCheckToken;const t=await(null===(e=this.appCheckServiceProvider.getImmediate({optional:!0}))||void 0===e?void 0:e.getToken());return(null==t?void 0:t.error)&&function(e,...t){Ci.logLevel<=or.WARN&&Ci.warn(`Auth (${di}): ${e}`,...t)}(`Error while retrieving App Check token: ${t.error}`),null==t?void 0:t.token}}class xn{constructor(e){this.auth=e,this.observer=null,this.addObserver=function(e,t){const r=new tr(e,t);return r.subscribe.bind(r)}(e=>this.observer=e)}get next(){return $i(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}new Fi(3e4,6e4),
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
new Fi(2e3,1e4),
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
new Fi(3e4,6e4),
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
new Fi(5e3,15e3);var Sn="@firebase/auth",En="1.10.8";
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
class Tn{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),(null===(e=this.auth.currentUser)||void 0===e?void 0:e.uid)||null}async getToken(e){if(this.assertAuthConfigured(),await this.auth._initializationPromise,!this.auth.currentUser)return null;return{accessToken:await this.auth.currentUser.getIdToken(e)}}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const t=this.auth.onIdTokenChanged(t=>{e((null==t?void 0:t.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,t),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const t=this.internalListeners.get(e);t&&(this.internalListeners.delete(e),t(),this.updateProactiveRefresh())}assertAuthConfigured(){$i(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}
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
 */var An;
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
 */(e=>{var t;null===(t=Gt())||void 0===t||t[`_${e}`]})("authIdTokenMaxAge"),An="Browser",li(new nr("auth",(e,{options:t})=>{const r=e.getProvider("app").getImmediate(),i=e.getProvider("heartbeat"),n=e.getProvider("app-check-internal"),{apiKey:o,authDomain:s}=r.options;$i(o&&!o.includes(":"),"invalid-api-key",{appName:r.name});const a={apiKey:o,authDomain:s,clientPlatform:An,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:yn(An)},l=new wn(r,i,n,a);return function(e,t){const r=(null==t?void 0:t.persistence)||[],i=(Array.isArray(r)?r:[r]).map(un);(null==t?void 0:t.errorMap)&&e._updateErrorMap(t.errorMap),e._initializeWithPersistence(i,null==t?void 0:t.popupRedirectResolver)}(l,t),l},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,t,r)=>{e.getProvider("auth-internal").initialize()})),li(new nr("auth-internal",e=>(e=>new Tn(e))(function(e){return ir(e)}(e.getProvider("auth").getImmediate())),"PRIVATE").setInstantiationMode("EXPLICIT")),ui(Sn,En,function(e){switch(e){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}(An)),ui(Sn,En,"esm2017");var In,Cn="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{};
/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/(function(){var e;
/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function t(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.B=Array(this.blockSize),this.o=this.h=0,this.s()}function r(e,t,r){r||(r=0);var i=Array(16);if("string"==typeof t)for(var n=0;16>n;++n)i[n]=t.charCodeAt(r++)|t.charCodeAt(r++)<<8|t.charCodeAt(r++)<<16|t.charCodeAt(r++)<<24;else for(n=0;16>n;++n)i[n]=t[r++]|t[r++]<<8|t[r++]<<16|t[r++]<<24;t=e.g[0],r=e.g[1],n=e.g[2];var o=e.g[3],s=t+(o^r&(n^o))+i[0]+3614090360&4294967295;s=(r=(n=(o=(t=(r=(n=(o=(t=(r=(n=(o=(t=(r=(n=(o=(t=(r=(n=(o=(t=(r=(n=(o=(t=(r=(n=(o=(t=(r=(n=(o=(t=(r=(n=(o=(t=(r=(n=(o=(t=(r=(n=(o=(t=(r=(n=(o=(t=(r=(n=(o=(t=(r=(n=(o=(t=(r=(n=(o=(t=r+(s<<7&4294967295|s>>>25))+((s=o+(n^t&(r^n))+i[1]+3905402710&4294967295)<<12&4294967295|s>>>20))+((s=n+(r^o&(t^r))+i[2]+606105819&4294967295)<<17&4294967295|s>>>15))+((s=r+(t^n&(o^t))+i[3]+3250441966&4294967295)<<22&4294967295|s>>>10))+((s=t+(o^r&(n^o))+i[4]+4118548399&4294967295)<<7&4294967295|s>>>25))+((s=o+(n^t&(r^n))+i[5]+1200080426&4294967295)<<12&4294967295|s>>>20))+((s=n+(r^o&(t^r))+i[6]+2821735955&4294967295)<<17&4294967295|s>>>15))+((s=r+(t^n&(o^t))+i[7]+4249261313&4294967295)<<22&4294967295|s>>>10))+((s=t+(o^r&(n^o))+i[8]+1770035416&4294967295)<<7&4294967295|s>>>25))+((s=o+(n^t&(r^n))+i[9]+2336552879&4294967295)<<12&4294967295|s>>>20))+((s=n+(r^o&(t^r))+i[10]+4294925233&4294967295)<<17&4294967295|s>>>15))+((s=r+(t^n&(o^t))+i[11]+2304563134&4294967295)<<22&4294967295|s>>>10))+((s=t+(o^r&(n^o))+i[12]+1804603682&4294967295)<<7&4294967295|s>>>25))+((s=o+(n^t&(r^n))+i[13]+4254626195&4294967295)<<12&4294967295|s>>>20))+((s=n+(r^o&(t^r))+i[14]+2792965006&4294967295)<<17&4294967295|s>>>15))+((s=r+(t^n&(o^t))+i[15]+1236535329&4294967295)<<22&4294967295|s>>>10))+((s=t+(n^o&(r^n))+i[1]+4129170786&4294967295)<<5&4294967295|s>>>27))+((s=o+(r^n&(t^r))+i[6]+3225465664&4294967295)<<9&4294967295|s>>>23))+((s=n+(t^r&(o^t))+i[11]+643717713&4294967295)<<14&4294967295|s>>>18))+((s=r+(o^t&(n^o))+i[0]+3921069994&4294967295)<<20&4294967295|s>>>12))+((s=t+(n^o&(r^n))+i[5]+3593408605&4294967295)<<5&4294967295|s>>>27))+((s=o+(r^n&(t^r))+i[10]+38016083&4294967295)<<9&4294967295|s>>>23))+((s=n+(t^r&(o^t))+i[15]+3634488961&4294967295)<<14&4294967295|s>>>18))+((s=r+(o^t&(n^o))+i[4]+3889429448&4294967295)<<20&4294967295|s>>>12))+((s=t+(n^o&(r^n))+i[9]+568446438&4294967295)<<5&4294967295|s>>>27))+((s=o+(r^n&(t^r))+i[14]+3275163606&4294967295)<<9&4294967295|s>>>23))+((s=n+(t^r&(o^t))+i[3]+4107603335&4294967295)<<14&4294967295|s>>>18))+((s=r+(o^t&(n^o))+i[8]+1163531501&4294967295)<<20&4294967295|s>>>12))+((s=t+(n^o&(r^n))+i[13]+2850285829&4294967295)<<5&4294967295|s>>>27))+((s=o+(r^n&(t^r))+i[2]+4243563512&4294967295)<<9&4294967295|s>>>23))+((s=n+(t^r&(o^t))+i[7]+1735328473&4294967295)<<14&4294967295|s>>>18))+((s=r+(o^t&(n^o))+i[12]+2368359562&4294967295)<<20&4294967295|s>>>12))+((s=t+(r^n^o)+i[5]+4294588738&4294967295)<<4&4294967295|s>>>28))+((s=o+(t^r^n)+i[8]+2272392833&4294967295)<<11&4294967295|s>>>21))+((s=n+(o^t^r)+i[11]+1839030562&4294967295)<<16&4294967295|s>>>16))+((s=r+(n^o^t)+i[14]+4259657740&4294967295)<<23&4294967295|s>>>9))+((s=t+(r^n^o)+i[1]+2763975236&4294967295)<<4&4294967295|s>>>28))+((s=o+(t^r^n)+i[4]+1272893353&4294967295)<<11&4294967295|s>>>21))+((s=n+(o^t^r)+i[7]+4139469664&4294967295)<<16&4294967295|s>>>16))+((s=r+(n^o^t)+i[10]+3200236656&4294967295)<<23&4294967295|s>>>9))+((s=t+(r^n^o)+i[13]+681279174&4294967295)<<4&4294967295|s>>>28))+((s=o+(t^r^n)+i[0]+3936430074&4294967295)<<11&4294967295|s>>>21))+((s=n+(o^t^r)+i[3]+3572445317&4294967295)<<16&4294967295|s>>>16))+((s=r+(n^o^t)+i[6]+76029189&4294967295)<<23&4294967295|s>>>9))+((s=t+(r^n^o)+i[9]+3654602809&4294967295)<<4&4294967295|s>>>28))+((s=o+(t^r^n)+i[12]+3873151461&4294967295)<<11&4294967295|s>>>21))+((s=n+(o^t^r)+i[15]+530742520&4294967295)<<16&4294967295|s>>>16))+((s=r+(n^o^t)+i[2]+3299628645&4294967295)<<23&4294967295|s>>>9))+((s=t+(n^(r|~o))+i[0]+4096336452&4294967295)<<6&4294967295|s>>>26))+((s=o+(r^(t|~n))+i[7]+1126891415&4294967295)<<10&4294967295|s>>>22))+((s=n+(t^(o|~r))+i[14]+2878612391&4294967295)<<15&4294967295|s>>>17))+((s=r+(o^(n|~t))+i[5]+4237533241&4294967295)<<21&4294967295|s>>>11))+((s=t+(n^(r|~o))+i[12]+1700485571&4294967295)<<6&4294967295|s>>>26))+((s=o+(r^(t|~n))+i[3]+2399980690&4294967295)<<10&4294967295|s>>>22))+((s=n+(t^(o|~r))+i[10]+4293915773&4294967295)<<15&4294967295|s>>>17))+((s=r+(o^(n|~t))+i[1]+2240044497&4294967295)<<21&4294967295|s>>>11))+((s=t+(n^(r|~o))+i[8]+1873313359&4294967295)<<6&4294967295|s>>>26))+((s=o+(r^(t|~n))+i[15]+4264355552&4294967295)<<10&4294967295|s>>>22))+((s=n+(t^(o|~r))+i[6]+2734768916&4294967295)<<15&4294967295|s>>>17))+((s=r+(o^(n|~t))+i[13]+1309151649&4294967295)<<21&4294967295|s>>>11))+((o=(t=r+((s=t+(n^(r|~o))+i[4]+4149444226&4294967295)<<6&4294967295|s>>>26))+((s=o+(r^(t|~n))+i[11]+3174756917&4294967295)<<10&4294967295|s>>>22))^((n=o+((s=n+(t^(o|~r))+i[2]+718787259&4294967295)<<15&4294967295|s>>>17))|~t))+i[9]+3951481745&4294967295,e.g[0]=e.g[0]+t&4294967295,e.g[1]=e.g[1]+(n+(s<<21&4294967295|s>>>11))&4294967295,e.g[2]=e.g[2]+n&4294967295,e.g[3]=e.g[3]+o&4294967295}function i(e,t){this.h=t;for(var r=[],i=!0,n=e.length-1;0<=n;n--){var o=0|e[n];i&&o==t||(r[n]=o,i=!1)}this.g=r}!function(e,t){function r(){}r.prototype=t.prototype,e.D=t.prototype,e.prototype=new r,e.prototype.constructor=e,e.C=function(e,r,i){for(var n=Array(arguments.length-2),o=2;o<arguments.length;o++)n[o-2]=arguments[o];return t.prototype[r].apply(e,n)}}(t,function(){this.blockSize=-1}),t.prototype.s=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0},t.prototype.u=function(e,t){void 0===t&&(t=e.length);for(var i=t-this.blockSize,n=this.B,o=this.h,s=0;s<t;){if(0==o)for(;s<=i;)r(this,e,s),s+=this.blockSize;if("string"==typeof e){for(;s<t;)if(n[o++]=e.charCodeAt(s++),o==this.blockSize){r(this,n),o=0;break}}else for(;s<t;)if(n[o++]=e[s++],o==this.blockSize){r(this,n),o=0;break}}this.h=o,this.o+=t},t.prototype.v=function(){var e=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);e[0]=128;for(var t=1;t<e.length-8;++t)e[t]=0;var r=8*this.o;for(t=e.length-8;t<e.length;++t)e[t]=255&r,r/=256;for(this.u(e),e=Array(16),t=r=0;4>t;++t)for(var i=0;32>i;i+=8)e[r++]=this.g[t]>>>i&255;return e};var n={};function o(e){return-128<=e&&128>e?function(e,t){var r=n;return Object.prototype.hasOwnProperty.call(r,e)?r[e]:r[e]=t(e)}(e,function(e){return new i([0|e],0>e?-1:0)}):new i([0|e],0>e?-1:0)}function s(e){if(isNaN(e)||!isFinite(e))return a;if(0>e)return u(s(-e));for(var t=[],r=1,n=0;e>=r;n++)t[n]=e/r|0,r*=4294967296;return new i(t,0)}var a=o(0),l=o(1),c=o(16777216);function h(e){if(0!=e.h)return!1;for(var t=0;t<e.g.length;t++)if(0!=e.g[t])return!1;return!0}function d(e){return-1==e.h}function u(e){for(var t=e.g.length,r=[],n=0;n<t;n++)r[n]=~e.g[n];return new i(r,~e.h).add(l)}function p(e,t){return e.add(u(t))}function f(e,t){for(;(65535&e[t])!=e[t];)e[t+1]+=e[t]>>>16,e[t]&=65535,t++}function g(e,t){this.g=e,this.h=t}function m(e,t){if(h(t))throw Error("division by zero");if(h(e))return new g(a,a);if(d(e))return t=m(u(e),t),new g(u(t.g),u(t.h));if(d(t))return t=m(e,u(t)),new g(u(t.g),t.h);if(30<e.g.length){if(d(e)||d(t))throw Error("slowDivide_ only works with positive integers.");for(var r=l,i=t;0>=i.l(e);)r=v(r),i=v(i);var n=y(r,1),o=y(i,1);for(i=y(i,2),r=y(r,2);!h(i);){var c=o.add(i);0>=c.l(e)&&(n=n.add(r),o=c),i=y(i,1),r=y(r,1)}return t=p(e,n.j(t)),new g(n,t)}for(n=a;0<=e.l(t);){for(r=Math.max(1,Math.floor(e.m()/t.m())),i=48>=(i=Math.ceil(Math.log(r)/Math.LN2))?1:Math.pow(2,i-48),c=(o=s(r)).j(t);d(c)||0<c.l(e);)c=(o=s(r-=i)).j(t);h(o)&&(o=l),n=n.add(o),e=p(e,c)}return new g(n,e)}function v(e){for(var t=e.g.length+1,r=[],n=0;n<t;n++)r[n]=e.i(n)<<1|e.i(n-1)>>>31;return new i(r,e.h)}function y(e,t){var r=t>>5;t%=32;for(var n=e.g.length-r,o=[],s=0;s<n;s++)o[s]=0<t?e.i(s+r)>>>t|e.i(s+r+1)<<32-t:e.i(s+r);return new i(o,e.h)}(e=i.prototype).m=function(){if(d(this))return-u(this).m();for(var e=0,t=1,r=0;r<this.g.length;r++){var i=this.i(r);e+=(0<=i?i:4294967296+i)*t,t*=4294967296}return e},e.toString=function(e){if(2>(e=e||10)||36<e)throw Error("radix out of range: "+e);if(h(this))return"0";if(d(this))return"-"+u(this).toString(e);for(var t=s(Math.pow(e,6)),r=this,i="";;){var n=m(r,t).g,o=((0<(r=p(r,n.j(t))).g.length?r.g[0]:r.h)>>>0).toString(e);if(h(r=n))return o+i;for(;6>o.length;)o="0"+o;i=o+i}},e.i=function(e){return 0>e?0:e<this.g.length?this.g[e]:this.h},e.l=function(e){return d(e=p(this,e))?-1:h(e)?0:1},e.abs=function(){return d(this)?u(this):this},e.add=function(e){for(var t=Math.max(this.g.length,e.g.length),r=[],n=0,o=0;o<=t;o++){var s=n+(65535&this.i(o))+(65535&e.i(o)),a=(s>>>16)+(this.i(o)>>>16)+(e.i(o)>>>16);n=a>>>16,s&=65535,a&=65535,r[o]=a<<16|s}return new i(r,-2147483648&r[r.length-1]?-1:0)},e.j=function(e){if(h(this)||h(e))return a;if(d(this))return d(e)?u(this).j(u(e)):u(u(this).j(e));if(d(e))return u(this.j(u(e)));if(0>this.l(c)&&0>e.l(c))return s(this.m()*e.m());for(var t=this.g.length+e.g.length,r=[],n=0;n<2*t;n++)r[n]=0;for(n=0;n<this.g.length;n++)for(var o=0;o<e.g.length;o++){var l=this.i(n)>>>16,p=65535&this.i(n),g=e.i(o)>>>16,m=65535&e.i(o);r[2*n+2*o]+=p*m,f(r,2*n+2*o),r[2*n+2*o+1]+=l*m,f(r,2*n+2*o+1),r[2*n+2*o+1]+=p*g,f(r,2*n+2*o+1),r[2*n+2*o+2]+=l*g,f(r,2*n+2*o+2)}for(n=0;n<t;n++)r[n]=r[2*n+1]<<16|r[2*n];for(n=t;n<2*t;n++)r[n]=0;return new i(r,0)},e.A=function(e){return m(this,e).h},e.and=function(e){for(var t=Math.max(this.g.length,e.g.length),r=[],n=0;n<t;n++)r[n]=this.i(n)&e.i(n);return new i(r,this.h&e.h)},e.or=function(e){for(var t=Math.max(this.g.length,e.g.length),r=[],n=0;n<t;n++)r[n]=this.i(n)|e.i(n);return new i(r,this.h|e.h)},e.xor=function(e){for(var t=Math.max(this.g.length,e.g.length),r=[],n=0;n<t;n++)r[n]=this.i(n)^e.i(n);return new i(r,this.h^e.h)},t.prototype.digest=t.prototype.v,t.prototype.reset=t.prototype.s,t.prototype.update=t.prototype.u,i.prototype.add=i.prototype.add,i.prototype.multiply=i.prototype.j,i.prototype.modulo=i.prototype.A,i.prototype.compare=i.prototype.l,i.prototype.toNumber=i.prototype.m,i.prototype.toString=i.prototype.toString,i.prototype.getBits=i.prototype.i,i.fromNumber=s,i.fromString=function e(t,r){if(0==t.length)throw Error("number format error: empty string");if(2>(r=r||10)||36<r)throw Error("radix out of range: "+r);if("-"==t.charAt(0))return u(e(t.substring(1),r));if(0<=t.indexOf("-"))throw Error('number format error: interior "-" character');for(var i=s(Math.pow(r,8)),n=a,o=0;o<t.length;o+=8){var l=Math.min(8,t.length-o),c=parseInt(t.substring(o,o+l),r);8>l?(l=s(Math.pow(r,l)),n=n.j(l).add(s(c))):n=(n=n.j(i)).add(s(c))}return n},In=i}).apply(void 0!==Cn?Cn:"undefined"!=typeof self?self:"undefined"!=typeof window?window:{});var kn="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{};(function(){var e,t="function"==typeof Object.defineProperties?Object.defineProperty:function(e,t,r){return e==Array.prototype||e==Object.prototype||(e[t]=r.value),e};var r=function(e){e=["object"==typeof globalThis&&globalThis,e,"object"==typeof window&&window,"object"==typeof self&&self,"object"==typeof kn&&kn];for(var t=0;t<e.length;++t){var r=e[t];if(r&&r.Math==Math)return r}throw Error("Cannot find global object")}(this);!function(e,i){if(i)e:{var n=r;e=e.split(".");for(var o=0;o<e.length-1;o++){var s=e[o];if(!(s in n))break e;n=n[s]}(i=i(o=n[e=e[e.length-1]]))!=o&&null!=i&&t(n,e,{configurable:!0,writable:!0,value:i})}}("Array.prototype.values",function(e){return e||function(){return function(e,t){e instanceof String&&(e+="");var r=0,i=!1,n={next:function(){if(!i&&r<e.length){var n=r++;return{value:t(n,e[n]),done:!1}}return i=!0,{done:!0,value:void 0}}};return n[Symbol.iterator]=function(){return n},n}(this,function(e,t){return t})}});
/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/
var i=i||{},n=this||self;function o(e){var t=typeof e;return"array"==(t="object"!=t?t:e?Array.isArray(e)?"array":t:"null")||"object"==t&&"number"==typeof e.length}function s(e){var t=typeof e;return"object"==t&&null!=e||"function"==t}function a(e,t,r){return e.call.apply(e.bind,arguments)}function l(e,t,r){if(!e)throw Error();if(2<arguments.length){var i=Array.prototype.slice.call(arguments,2);return function(){var r=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(r,i),e.apply(t,r)}}return function(){return e.apply(t,arguments)}}function c(e,t,r){return(c=Function.prototype.bind&&-1!=Function.prototype.bind.toString().indexOf("native code")?a:l).apply(null,arguments)}function h(e,t){var r=Array.prototype.slice.call(arguments,1);return function(){var t=r.slice();return t.push.apply(t,arguments),e.apply(this,t)}}function d(e,t){function r(){}r.prototype=t.prototype,e.aa=t.prototype,e.prototype=new r,e.prototype.constructor=e,e.Qb=function(e,r,i){for(var n=Array(arguments.length-2),o=2;o<arguments.length;o++)n[o-2]=arguments[o];return t.prototype[r].apply(e,n)}}function u(e){const t=e.length;if(0<t){const r=Array(t);for(let i=0;i<t;i++)r[i]=e[i];return r}return[]}function p(e,t){for(let t=1;t<arguments.length;t++){const r=arguments[t];if(o(r)){const t=e.length||0,i=r.length||0;e.length=t+i;for(let n=0;n<i;n++)e[t+n]=r[n]}else e.push(r)}}function f(e){return/^[\s\xa0]*$/.test(e)}function g(){var e=n.navigator;return e&&(e=e.userAgent)?e:""}function m(e){return m[" "](e),e}m[" "]=function(){};var v=!(-1==g().indexOf("Gecko")||-1!=g().toLowerCase().indexOf("webkit")&&-1==g().indexOf("Edge")||-1!=g().indexOf("Trident")||-1!=g().indexOf("MSIE")||-1!=g().indexOf("Edge"));function y(e,t,r){for(const i in e)t.call(r,e[i],i,e)}function b(e){const t={};for(const r in e)t[r]=e[r];return t}const _="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function w(e,t){let r,i;for(let t=1;t<arguments.length;t++){for(r in i=arguments[t],i)e[r]=i[r];for(let t=0;t<_.length;t++)r=_[t],Object.prototype.hasOwnProperty.call(i,r)&&(e[r]=i[r])}}function x(e){var t=1;e=e.split(":");const r=[];for(;0<t&&e.length;)r.push(e.shift()),t--;return e.length&&r.push(e.join(":")),r}function S(e){n.setTimeout(()=>{throw e},0)}function E(){var e=k;let t=null;return e.g&&(t=e.g,e.g=e.g.next,e.g||(e.h=null),t.next=null),t}var T=new class{constructor(e,t){this.i=e,this.j=t,this.h=0,this.g=null}get(){let e;return 0<this.h?(this.h--,e=this.g,this.g=e.next,e.next=null):e=this.i(),e}}(()=>new A,e=>e.reset());class A{constructor(){this.next=this.g=this.h=null}set(e,t){this.h=e,this.g=t,this.next=null}reset(){this.next=this.g=this.h=null}}let I,C=!1,k=new class{constructor(){this.h=this.g=null}add(e,t){const r=T.get();r.set(e,t),this.h?this.h.next=r:this.g=r,this.h=r}},O=()=>{const e=n.Promise.resolve(void 0);I=()=>{e.then(N)}};var N=()=>{for(var e;e=E();){try{e.h.call(e.g)}catch(e){S(e)}var t=T;t.j(e),100>t.h&&(t.h++,e.next=t.g,t.g=e)}C=!1};function P(){this.s=this.s,this.C=this.C}function R(e,t){this.type=e,this.g=this.target=t,this.defaultPrevented=!1}P.prototype.s=!1,P.prototype.ma=function(){this.s||(this.s=!0,this.N())},P.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()},R.prototype.h=function(){this.defaultPrevented=!0};var D=function(){if(!n.addEventListener||!Object.defineProperty)return!1;var e=!1,t=Object.defineProperty({},"passive",{get:function(){e=!0}});try{const e=()=>{};n.addEventListener("test",e,t),n.removeEventListener("test",e,t)}catch(e){}return e}();function $(e,t){if(R.call(this,e?e.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,e){var r=this.type=e.type,i=e.changedTouches&&e.changedTouches.length?e.changedTouches[0]:null;if(this.target=e.target||e.srcElement,this.g=t,t=e.relatedTarget){if(v){e:{try{m(t.nodeName);var n=!0;break e}catch(e){}n=!1}n||(t=null)}}else"mouseover"==r?t=e.fromElement:"mouseout"==r&&(t=e.toElement);this.relatedTarget=t,i?(this.clientX=void 0!==i.clientX?i.clientX:i.pageX,this.clientY=void 0!==i.clientY?i.clientY:i.pageY,this.screenX=i.screenX||0,this.screenY=i.screenY||0):(this.clientX=void 0!==e.clientX?e.clientX:e.pageX,this.clientY=void 0!==e.clientY?e.clientY:e.pageY,this.screenX=e.screenX||0,this.screenY=e.screenY||0),this.button=e.button,this.key=e.key||"",this.ctrlKey=e.ctrlKey,this.altKey=e.altKey,this.shiftKey=e.shiftKey,this.metaKey=e.metaKey,this.pointerId=e.pointerId||0,this.pointerType="string"==typeof e.pointerType?e.pointerType:L[e.pointerType]||"",this.state=e.state,this.i=e,e.defaultPrevented&&$.aa.h.call(this)}}d($,R);var L={2:"touch",3:"pen",4:"mouse"};$.prototype.h=function(){$.aa.h.call(this);var e=this.i;e.preventDefault?e.preventDefault():e.returnValue=!1};var U="closure_listenable_"+(1e6*Math.random()|0),M=0;function j(e,t,r,i,n){this.listener=e,this.proxy=null,this.src=t,this.type=r,this.capture=!!i,this.ha=n,this.key=++M,this.da=this.fa=!1}function F(e){e.da=!0,e.listener=null,e.proxy=null,e.src=null,e.ha=null}function V(e){this.src=e,this.g={},this.h=0}function B(e,t){var r=t.type;if(r in e.g){var i,n=e.g[r],o=Array.prototype.indexOf.call(n,t,void 0);(i=0<=o)&&Array.prototype.splice.call(n,o,1),i&&(F(t),0==e.g[r].length&&(delete e.g[r],e.h--))}}function z(e,t,r,i){for(var n=0;n<e.length;++n){var o=e[n];if(!o.da&&o.listener==t&&o.capture==!!r&&o.ha==i)return n}return-1}V.prototype.add=function(e,t,r,i,n){var o=e.toString();(e=this.g[o])||(e=this.g[o]=[],this.h++);var s=z(e,t,i,n);return-1<s?(t=e[s],r||(t.fa=!1)):((t=new j(t,this.src,o,!!i,n)).fa=r,e.push(t)),t};var H="closure_lm_"+(1e6*Math.random()|0),q={};function W(e,t,r,i,n){if(Array.isArray(t)){for(var o=0;o<t.length;o++)W(e,t[o],r,i,n);return null}return r=Q(r),e&&e[U]?e.K(t,r,!!s(i)&&!!i.capture,n):function(e,t,r,i,n,o){if(!t)throw Error("Invalid event type");var a=s(n)?!!n.capture:!!n,l=Y(e);if(l||(e[H]=l=new V(e)),r=l.add(t,r,i,a,o),r.proxy)return r;if(i=function(){function e(r){return t.call(e.src,e.listener,r)}const t=J;return e}(),r.proxy=i,i.src=e,i.listener=r,e.addEventListener)D||(n=a),void 0===n&&(n=!1),e.addEventListener(t.toString(),i,n);else if(e.attachEvent)e.attachEvent(X(t.toString()),i);else{if(!e.addListener||!e.removeListener)throw Error("addEventListener and attachEvent are unavailable.");e.addListener(i)}return r}(e,t,r,!1,i,n)}function K(e,t,r,i,n){if(Array.isArray(t))for(var o=0;o<t.length;o++)K(e,t[o],r,i,n);else i=s(i)?!!i.capture:!!i,r=Q(r),e&&e[U]?(e=e.i,(t=String(t).toString())in e.g&&(-1<(r=z(o=e.g[t],r,i,n))&&(F(o[r]),Array.prototype.splice.call(o,r,1),0==o.length&&(delete e.g[t],e.h--)))):e&&(e=Y(e))&&(t=e.g[t.toString()],e=-1,t&&(e=z(t,r,i,n)),(r=-1<e?t[e]:null)&&G(r))}function G(e){if("number"!=typeof e&&e&&!e.da){var t=e.src;if(t&&t[U])B(t.i,e);else{var r=e.type,i=e.proxy;t.removeEventListener?t.removeEventListener(r,i,e.capture):t.detachEvent?t.detachEvent(X(r),i):t.addListener&&t.removeListener&&t.removeListener(i),(r=Y(t))?(B(r,e),0==r.h&&(r.src=null,t[H]=null)):F(e)}}}function X(e){return e in q?q[e]:q[e]="on"+e}function J(e,t){if(e.da)e=!0;else{t=new $(t,this);var r=e.listener,i=e.ha||e.src;e.fa&&G(e),e=r.call(i,t)}return e}function Y(e){return(e=e[H])instanceof V?e:null}var Z="__closure_events_fn_"+(1e9*Math.random()>>>0);function Q(e){return"function"==typeof e?e:(e[Z]||(e[Z]=function(t){return e.handleEvent(t)}),e[Z])}function ee(){P.call(this),this.i=new V(this),this.M=this,this.F=null}function te(e,t){var r,i=e.F;if(i)for(r=[];i;i=i.F)r.push(i);if(e=e.M,i=t.type||t,"string"==typeof t)t=new R(t,e);else if(t instanceof R)t.target=t.target||e;else{var n=t;w(t=new R(i,e),n)}if(n=!0,r)for(var o=r.length-1;0<=o;o--){var s=t.g=r[o];n=re(s,i,!0,t)&&n}if(n=re(s=t.g=e,i,!0,t)&&n,n=re(s,i,!1,t)&&n,r)for(o=0;o<r.length;o++)n=re(s=t.g=r[o],i,!1,t)&&n}function re(e,t,r,i){if(!(t=e.i.g[String(t)]))return!0;t=t.concat();for(var n=!0,o=0;o<t.length;++o){var s=t[o];if(s&&!s.da&&s.capture==r){var a=s.listener,l=s.ha||s.src;s.fa&&B(e.i,s),n=!1!==a.call(l,i)&&n}}return n&&!i.defaultPrevented}function ie(e,t,r){if("function"==typeof e)r&&(e=c(e,r));else{if(!e||"function"!=typeof e.handleEvent)throw Error("Invalid listener argument");e=c(e.handleEvent,e)}return 2147483647<Number(t)?-1:n.setTimeout(e,t||0)}function ne(e){e.g=ie(()=>{e.g=null,e.i&&(e.i=!1,ne(e))},e.l);const t=e.h;e.h=null,e.m.apply(null,t)}d(ee,P),ee.prototype[U]=!0,ee.prototype.removeEventListener=function(e,t,r,i){K(this,e,t,r,i)},ee.prototype.N=function(){if(ee.aa.N.call(this),this.i){var e,t=this.i;for(e in t.g){for(var r=t.g[e],i=0;i<r.length;i++)F(r[i]);delete t.g[e],t.h--}}this.F=null},ee.prototype.K=function(e,t,r,i){return this.i.add(String(e),t,!1,r,i)},ee.prototype.L=function(e,t,r,i){return this.i.add(String(e),t,!0,r,i)};class oe extends P{constructor(e,t){super(),this.m=e,this.l=t,this.h=null,this.i=!1,this.g=null}j(e){this.h=arguments,this.g?this.i=!0:ne(this)}N(){super.N(),this.g&&(n.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function se(e){P.call(this),this.h=e,this.g={}}d(se,P);var ae=[];function le(e){y(e.g,function(e,t){this.g.hasOwnProperty(t)&&G(e)},e),e.g={}}se.prototype.N=function(){se.aa.N.call(this),le(this)},se.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var ce=n.JSON.stringify,he=n.JSON.parse,de=class{stringify(e){return n.JSON.stringify(e,void 0)}parse(e){return n.JSON.parse(e,void 0)}};function ue(){}function pe(e){return e.h||(e.h=e.i())}ue.prototype.h=null;var fe={OPEN:"a",kb:"b",Ja:"c",wb:"d"};function ge(){R.call(this,"d")}function me(){R.call(this,"c")}d(ge,R),d(me,R);var ve={},ye=null;function be(){return ye=ye||new ee}function _e(e){R.call(this,ve.La,e)}function we(e){const t=be();te(t,new _e(t))}function xe(e,t){R.call(this,ve.STAT_EVENT,e),this.stat=t}function Se(e){const t=be();te(t,new xe(t,e))}function Ee(e,t){R.call(this,ve.Ma,e),this.size=t}function Te(e,t){if("function"!=typeof e)throw Error("Fn must not be null and must be a function");return n.setTimeout(function(){e()},t)}function Ae(){this.g=!0}function Ie(e,t,r,i){e.info(function(){return"XMLHTTP TEXT ("+t+"): "+function(e,t){if(!e.g)return t;if(!t)return null;try{var r=JSON.parse(t);if(r)for(e=0;e<r.length;e++)if(Array.isArray(r[e])){var i=r[e];if(!(2>i.length)){var n=i[1];if(Array.isArray(n)&&!(1>n.length)){var o=n[0];if("noop"!=o&&"stop"!=o&&"close"!=o)for(var s=1;s<n.length;s++)n[s]=""}}}return ce(r)}catch(e){return t}}(e,r)+(i?" "+i:"")})}ve.La="serverreachability",d(_e,R),ve.STAT_EVENT="statevent",d(xe,R),ve.Ma="timingevent",d(Ee,R),Ae.prototype.xa=function(){this.g=!1},Ae.prototype.info=function(){};var Ce,ke={NO_ERROR:0,TIMEOUT:8};function Oe(){}function Ne(e,t,r,i){this.j=e,this.i=t,this.l=r,this.R=i||1,this.U=new se(this),this.I=45e3,this.H=null,this.o=!1,this.m=this.A=this.v=this.L=this.F=this.S=this.B=null,this.D=[],this.g=null,this.C=0,this.s=this.u=null,this.X=-1,this.J=!1,this.O=0,this.M=null,this.W=this.K=this.T=this.P=!1,this.h=new Pe}function Pe(){this.i=null,this.g="",this.h=!1}d(Oe,ue),Oe.prototype.g=function(){return new XMLHttpRequest},Oe.prototype.i=function(){return{}},Ce=new Oe;var Re={},De={};function $e(e,t,r){e.L=1,e.v=at(rt(t)),e.m=r,e.P=!0,Le(e,null)}function Le(e,t){e.F=Date.now(),je(e),e.A=rt(e.v);var r=e.A,i=e.R;Array.isArray(i)||(i=[String(i)]),_t(r.i,"t",i),e.C=0,r=e.j.J,e.h=new Pe,e.g=ar(e.j,r?t:null,!e.m),0<e.O&&(e.M=new oe(c(e.Y,e,e.g),e.O)),t=e.U,r=e.g,i=e.ca;var n="readystatechange";Array.isArray(n)||(n&&(ae[0]=n.toString()),n=ae);for(var o=0;o<n.length;o++){var s=W(r,n[o],i||t.handleEvent,!1,t.h||t);if(!s)break;t.g[s.key]=s}t=e.H?b(e.H):{},e.m?(e.u||(e.u="POST"),t["Content-Type"]="application/x-www-form-urlencoded",e.g.ea(e.A,e.u,e.m,t)):(e.u="GET",e.g.ea(e.A,e.u,null,t)),we(),function(e,t,r,i,n,o){e.info(function(){if(e.g)if(o)for(var s="",a=o.split("&"),l=0;l<a.length;l++){var c=a[l].split("=");if(1<c.length){var h=c[0];c=c[1];var d=h.split("_");s=2<=d.length&&"type"==d[1]?s+(h+"=")+c+"&":s+(h+"=redacted&")}}else s=null;else s=o;return"XMLHTTP REQ ("+i+") [attempt "+n+"]: "+t+"\n"+r+"\n"+s})}(e.i,e.u,e.A,e.l,e.R,e.m)}function Ue(e){return!!e.g&&("GET"==e.u&&2!=e.L&&e.j.Ca)}function Me(e,t){var r=e.C,i=t.indexOf("\n",r);return-1==i?De:(r=Number(t.substring(r,i)),isNaN(r)?Re:(i+=1)+r>t.length?De:(t=t.slice(i,i+r),e.C=i+r,t))}function je(e){e.S=Date.now()+e.I,Fe(e,e.I)}function Fe(e,t){if(null!=e.B)throw Error("WatchDog timer not null");e.B=Te(c(e.ba,e),t)}function Ve(e){e.B&&(n.clearTimeout(e.B),e.B=null)}function Be(e){0==e.j.G||e.J||rr(e.j,e)}function ze(e){Ve(e);var t=e.M;t&&"function"==typeof t.ma&&t.ma(),e.M=null,le(e.U),e.g&&(t=e.g,e.g=null,t.abort(),t.ma())}function He(e,t){try{var r=e.j;if(0!=r.G&&(r.g==e||Xe(r.h,e)))if(!e.K&&Xe(r.h,e)&&3==r.G){try{var i=r.Da.g.parse(t)}catch(e){i=null}if(Array.isArray(i)&&3==i.length){var n=i;if(0==n[0]){e:if(!r.u){if(r.g){if(!(r.g.F+3e3<e.F))break e;tr(r),qt(r)}Zt(r),Se(18)}}else r.za=n[1],0<r.za-r.T&&37500>n[2]&&r.F&&0==r.v&&!r.C&&(r.C=Te(c(r.Za,r),6e3));if(1>=Ge(r.h)&&r.ca){try{r.ca()}catch(e){}r.ca=void 0}}else nr(r,11)}else if((e.K||r.g==e)&&tr(r),!f(t))for(n=r.Da.g.parse(t),t=0;t<n.length;t++){let c=n[t];if(r.T=c[0],c=c[1],2==r.G)if("c"==c[0]){r.K=c[1],r.ia=c[2];const t=c[3];null!=t&&(r.la=t,r.j.info("VER="+r.la));const n=c[4];null!=n&&(r.Aa=n,r.j.info("SVER="+r.Aa));const h=c[5];null!=h&&"number"==typeof h&&0<h&&(i=1.5*h,r.L=i,r.j.info("backChannelRequestTimeoutMs_="+i)),i=r;const d=e.g;if(d){const e=d.g?d.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(e){var o=i.h;o.g||-1==e.indexOf("spdy")&&-1==e.indexOf("quic")&&-1==e.indexOf("h2")||(o.j=o.l,o.g=new Set,o.h&&(Je(o,o.h),o.h=null))}if(i.D){const e=d.g?d.g.getResponseHeader("X-HTTP-Session-Id"):null;e&&(i.ya=e,st(i.I,i.D,e))}}r.G=3,r.l&&r.l.ua(),r.ba&&(r.R=Date.now()-e.F,r.j.info("Handshake RTT: "+r.R+"ms"));var s=e;if((i=r).qa=sr(i,i.J?i.ia:null,i.W),s.K){Ye(i.h,s);var a=s,l=i.L;l&&(a.I=l),a.B&&(Ve(a),je(a)),i.g=s}else Yt(i);0<r.i.length&&Kt(r)}else"stop"!=c[0]&&"close"!=c[0]||nr(r,7);else 3==r.G&&("stop"==c[0]||"close"==c[0]?"stop"==c[0]?nr(r,7):Ht(r):"noop"!=c[0]&&r.l&&r.l.ta(c),r.v=0)}we()}catch(e){}}Ne.prototype.ca=function(e){e=e.target;const t=this.M;t&&3==Ft(e)?t.j():this.Y(e)},Ne.prototype.Y=function(e){try{if(e==this.g)e:{const u=Ft(this.g);var t=this.g.Ba();this.g.Z();if(!(3>u)&&(3!=u||this.g&&(this.h.h||this.g.oa()||Vt(this.g)))){this.J||4!=u||7==t||we(),Ve(this);var r=this.g.Z();this.X=r;t:if(Ue(this)){var i=Vt(this.g);e="";var o=i.length,s=4==Ft(this.g);if(!this.h.i){if("undefined"==typeof TextDecoder){ze(this),Be(this);var a="";break t}this.h.i=new n.TextDecoder}for(t=0;t<o;t++)this.h.h=!0,e+=this.h.i.decode(i[t],{stream:!(s&&t==o-1)});i.length=0,this.h.g+=e,this.C=0,a=this.h.g}else a=this.g.oa();if(this.o=200==r,function(e,t,r,i,n,o,s){e.info(function(){return"XMLHTTP RESP ("+i+") [ attempt "+n+"]: "+t+"\n"+r+"\n"+o+" "+s})}(this.i,this.u,this.A,this.l,this.R,u,r),this.o){if(this.T&&!this.K){t:{if(this.g){var l,c=this.g;if((l=c.g?c.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!f(l)){var h=l;break t}}h=null}if(!(r=h)){this.o=!1,this.s=3,Se(12),ze(this),Be(this);break e}Ie(this.i,this.l,r,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,He(this,r)}if(this.P){let e;for(r=!0;!this.J&&this.C<a.length;){if(e=Me(this,a),e==De){4==u&&(this.s=4,Se(14),r=!1),Ie(this.i,this.l,null,"[Incomplete Response]");break}if(e==Re){this.s=4,Se(15),Ie(this.i,this.l,a,"[Invalid Chunk]"),r=!1;break}Ie(this.i,this.l,e,null),He(this,e)}if(Ue(this)&&0!=this.C&&(this.h.g=this.h.g.slice(this.C),this.C=0),4!=u||0!=a.length||this.h.h||(this.s=1,Se(16),r=!1),this.o=this.o&&r,r){if(0<a.length&&!this.W){this.W=!0;var d=this.j;d.g==this&&d.ba&&!d.M&&(d.j.info("Great, no buffering proxy detected. Bytes received: "+a.length),Qt(d),d.M=!0,Se(11))}}else Ie(this.i,this.l,a,"[Invalid Chunked Response]"),ze(this),Be(this)}else Ie(this.i,this.l,a,null),He(this,a);4==u&&ze(this),this.o&&!this.J&&(4==u?rr(this.j,this):(this.o=!1,je(this)))}else(function(e){const t={};e=(e.g&&2<=Ft(e)&&e.g.getAllResponseHeaders()||"").split("\r\n");for(let i=0;i<e.length;i++){if(f(e[i]))continue;var r=x(e[i]);const n=r[0];if("string"!=typeof(r=r[1]))continue;r=r.trim();const o=t[n]||[];t[n]=o,o.push(r)}!function(e,t){for(const r in e)t.call(void 0,e[r],r,e)}(t,function(e){return e.join(", ")})})(this.g),400==r&&0<a.indexOf("Unknown SID")?(this.s=3,Se(12)):(this.s=0,Se(13)),ze(this),Be(this)}}}catch(e){}},Ne.prototype.cancel=function(){this.J=!0,ze(this)},Ne.prototype.ba=function(){this.B=null;const e=Date.now();0<=e-this.S?(function(e,t){e.info(function(){return"TIMEOUT: "+t})}(this.i,this.A),2!=this.L&&(we(),Se(17)),ze(this),this.s=2,Be(this)):Fe(this,this.S-e)};var qe=class{constructor(e,t){this.g=e,this.map=t}};function We(e){this.l=e||10,n.PerformanceNavigationTiming?e=0<(e=n.performance.getEntriesByType("navigation")).length&&("hq"==e[0].nextHopProtocol||"h2"==e[0].nextHopProtocol):e=!!(n.chrome&&n.chrome.loadTimes&&n.chrome.loadTimes()&&n.chrome.loadTimes().wasFetchedViaSpdy),this.j=e?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}function Ke(e){return!!e.h||!!e.g&&e.g.size>=e.j}function Ge(e){return e.h?1:e.g?e.g.size:0}function Xe(e,t){return e.h?e.h==t:!!e.g&&e.g.has(t)}function Je(e,t){e.g?e.g.add(t):e.h=t}function Ye(e,t){e.h&&e.h==t?e.h=null:e.g&&e.g.has(t)&&e.g.delete(t)}function Ze(e){if(null!=e.h)return e.i.concat(e.h.D);if(null!=e.g&&0!==e.g.size){let t=e.i;for(const r of e.g.values())t=t.concat(r.D);return t}return u(e.i)}function Qe(e,t){if(e.forEach&&"function"==typeof e.forEach)e.forEach(t,void 0);else if(o(e)||"string"==typeof e)Array.prototype.forEach.call(e,t,void 0);else for(var r=function(e){if(e.na&&"function"==typeof e.na)return e.na();if(!e.V||"function"!=typeof e.V){if("undefined"!=typeof Map&&e instanceof Map)return Array.from(e.keys());if(!("undefined"!=typeof Set&&e instanceof Set)){if(o(e)||"string"==typeof e){var t=[];e=e.length;for(var r=0;r<e;r++)t.push(r);return t}t=[],r=0;for(const i in e)t[r++]=i;return t}}}(e),i=function(e){if(e.V&&"function"==typeof e.V)return e.V();if("undefined"!=typeof Map&&e instanceof Map||"undefined"!=typeof Set&&e instanceof Set)return Array.from(e.values());if("string"==typeof e)return e.split("");if(o(e)){for(var t=[],r=e.length,i=0;i<r;i++)t.push(e[i]);return t}for(i in t=[],r=0,e)t[r++]=e[i];return t}(e),n=i.length,s=0;s<n;s++)t.call(void 0,i[s],r&&r[s],e)}We.prototype.cancel=function(){if(this.i=Ze(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&0!==this.g.size){for(const e of this.g.values())e.cancel();this.g.clear()}};var et=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function tt(e){if(this.g=this.o=this.j="",this.s=null,this.m=this.l="",this.h=!1,e instanceof tt){this.h=e.h,it(this,e.j),this.o=e.o,this.g=e.g,nt(this,e.s),this.l=e.l;var t=e.i,r=new mt;r.i=t.i,t.g&&(r.g=new Map(t.g),r.h=t.h),ot(this,r),this.m=e.m}else e&&(t=String(e).match(et))?(this.h=!1,it(this,t[1]||"",!0),this.o=lt(t[2]||""),this.g=lt(t[3]||"",!0),nt(this,t[4]),this.l=lt(t[5]||"",!0),ot(this,t[6]||"",!0),this.m=lt(t[7]||"")):(this.h=!1,this.i=new mt(null,this.h))}function rt(e){return new tt(e)}function it(e,t,r){e.j=r?lt(t,!0):t,e.j&&(e.j=e.j.replace(/:$/,""))}function nt(e,t){if(t){if(t=Number(t),isNaN(t)||0>t)throw Error("Bad port number "+t);e.s=t}else e.s=null}function ot(e,t,r){t instanceof mt?(e.i=t,function(e,t){t&&!e.j&&(vt(e),e.i=null,e.g.forEach(function(e,t){var r=t.toLowerCase();t!=r&&(yt(this,t),_t(this,r,e))},e)),e.j=t}(e.i,e.h)):(r||(t=ct(t,ft)),e.i=new mt(t,e.h))}function st(e,t,r){e.i.set(t,r)}function at(e){return st(e,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),e}function lt(e,t){return e?t?decodeURI(e.replace(/%25/g,"%2525")):decodeURIComponent(e):""}function ct(e,t,r){return"string"==typeof e?(e=encodeURI(e).replace(t,ht),r&&(e=e.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),e):null}function ht(e){return"%"+((e=e.charCodeAt(0))>>4&15).toString(16)+(15&e).toString(16)}tt.prototype.toString=function(){var e=[],t=this.j;t&&e.push(ct(t,dt,!0),":");var r=this.g;return(r||"file"==t)&&(e.push("//"),(t=this.o)&&e.push(ct(t,dt,!0),"@"),e.push(encodeURIComponent(String(r)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),null!=(r=this.s)&&e.push(":",String(r))),(r=this.l)&&(this.g&&"/"!=r.charAt(0)&&e.push("/"),e.push(ct(r,"/"==r.charAt(0)?pt:ut,!0))),(r=this.i.toString())&&e.push("?",r),(r=this.m)&&e.push("#",ct(r,gt)),e.join("")};var dt=/[#\/\?@]/g,ut=/[#\?:]/g,pt=/[#\?]/g,ft=/[#\?@]/g,gt=/#/g;function mt(e,t){this.h=this.g=null,this.i=e||null,this.j=!!t}function vt(e){e.g||(e.g=new Map,e.h=0,e.i&&function(e,t){if(e){e=e.split("&");for(var r=0;r<e.length;r++){var i=e[r].indexOf("="),n=null;if(0<=i){var o=e[r].substring(0,i);n=e[r].substring(i+1)}else o=e[r];t(o,n?decodeURIComponent(n.replace(/\+/g," ")):"")}}}(e.i,function(t,r){e.add(decodeURIComponent(t.replace(/\+/g," ")),r)}))}function yt(e,t){vt(e),t=wt(e,t),e.g.has(t)&&(e.i=null,e.h-=e.g.get(t).length,e.g.delete(t))}function bt(e,t){return vt(e),t=wt(e,t),e.g.has(t)}function _t(e,t,r){yt(e,t),0<r.length&&(e.i=null,e.g.set(wt(e,t),u(r)),e.h+=r.length)}function wt(e,t){return t=String(t),e.j&&(t=t.toLowerCase()),t}function xt(e,t,r,i,n){try{n&&(n.onload=null,n.onerror=null,n.onabort=null,n.ontimeout=null),i(r)}catch(e){}}function St(){this.g=new de}function Et(e,t,r){const i=r||"";try{Qe(e,function(e,r){let n=e;s(e)&&(n=ce(e)),t.push(i+r+"="+encodeURIComponent(n))})}catch(e){throw t.push(i+"type="+encodeURIComponent("_badmap")),e}}function Tt(e){this.l=e.Ub||null,this.j=e.eb||!1}function At(e,t){ee.call(this),this.D=e,this.o=t,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.u=new Headers,this.h=null,this.B="GET",this.A="",this.g=!1,this.v=this.j=this.l=null}function It(e){e.j.read().then(e.Pa.bind(e)).catch(e.ga.bind(e))}function Ct(e){e.readyState=4,e.l=null,e.j=null,e.v=null,kt(e)}function kt(e){e.onreadystatechange&&e.onreadystatechange.call(e)}function Ot(e){let t="";return y(e,function(e,r){t+=r,t+=":",t+=e,t+="\r\n"}),t}function Nt(e,t,r){e:{for(i in r){var i=!1;break e}i=!0}i||(r=Ot(r),"string"==typeof e?null!=r&&encodeURIComponent(String(r)):st(e,t,r))}function Pt(e){ee.call(this),this.headers=new Map,this.o=e||null,this.h=!1,this.v=this.g=null,this.D="",this.m=0,this.l="",this.j=this.B=this.u=this.A=!1,this.I=null,this.H="",this.J=!1}(e=mt.prototype).add=function(e,t){vt(this),this.i=null,e=wt(this,e);var r=this.g.get(e);return r||this.g.set(e,r=[]),r.push(t),this.h+=1,this},e.forEach=function(e,t){vt(this),this.g.forEach(function(r,i){r.forEach(function(r){e.call(t,r,i,this)},this)},this)},e.na=function(){vt(this);const e=Array.from(this.g.values()),t=Array.from(this.g.keys()),r=[];for(let i=0;i<t.length;i++){const n=e[i];for(let e=0;e<n.length;e++)r.push(t[i])}return r},e.V=function(e){vt(this);let t=[];if("string"==typeof e)bt(this,e)&&(t=t.concat(this.g.get(wt(this,e))));else{e=Array.from(this.g.values());for(let r=0;r<e.length;r++)t=t.concat(e[r])}return t},e.set=function(e,t){return vt(this),this.i=null,bt(this,e=wt(this,e))&&(this.h-=this.g.get(e).length),this.g.set(e,[t]),this.h+=1,this},e.get=function(e,t){return e&&0<(e=this.V(e)).length?String(e[0]):t},e.toString=function(){if(this.i)return this.i;if(!this.g)return"";const e=[],t=Array.from(this.g.keys());for(var r=0;r<t.length;r++){var i=t[r];const o=encodeURIComponent(String(i)),s=this.V(i);for(i=0;i<s.length;i++){var n=o;""!==s[i]&&(n+="="+encodeURIComponent(String(s[i]))),e.push(n)}}return this.i=e.join("&")},d(Tt,ue),Tt.prototype.g=function(){return new At(this.l,this.j)},Tt.prototype.i=function(e){return function(){return e}}({}),d(At,ee),(e=At.prototype).open=function(e,t){if(0!=this.readyState)throw this.abort(),Error("Error reopening a connection");this.B=e,this.A=t,this.readyState=1,kt(this)},e.send=function(e){if(1!=this.readyState)throw this.abort(),Error("need to call open() first. ");this.g=!0;const t={headers:this.u,method:this.B,credentials:this.m,cache:void 0};e&&(t.body=e),(this.D||n).fetch(new Request(this.A,t)).then(this.Sa.bind(this),this.ga.bind(this))},e.abort=function(){this.response=this.responseText="",this.u=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&4!=this.readyState&&(this.g=!1,Ct(this)),this.readyState=0},e.Sa=function(e){if(this.g&&(this.l=e,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=e.headers,this.readyState=2,kt(this)),this.g&&(this.readyState=3,kt(this),this.g)))if("arraybuffer"===this.responseType)e.arrayBuffer().then(this.Qa.bind(this),this.ga.bind(this));else if(void 0!==n.ReadableStream&&"body"in e){if(this.j=e.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.v=new TextDecoder;It(this)}else e.text().then(this.Ra.bind(this),this.ga.bind(this))},e.Pa=function(e){if(this.g){if(this.o&&e.value)this.response.push(e.value);else if(!this.o){var t=e.value?e.value:new Uint8Array(0);(t=this.v.decode(t,{stream:!e.done}))&&(this.response=this.responseText+=t)}e.done?Ct(this):kt(this),3==this.readyState&&It(this)}},e.Ra=function(e){this.g&&(this.response=this.responseText=e,Ct(this))},e.Qa=function(e){this.g&&(this.response=e,Ct(this))},e.ga=function(){this.g&&Ct(this)},e.setRequestHeader=function(e,t){this.u.append(e,t)},e.getResponseHeader=function(e){return this.h&&this.h.get(e.toLowerCase())||""},e.getAllResponseHeaders=function(){if(!this.h)return"";const e=[],t=this.h.entries();for(var r=t.next();!r.done;)r=r.value,e.push(r[0]+": "+r[1]),r=t.next();return e.join("\r\n")},Object.defineProperty(At.prototype,"withCredentials",{get:function(){return"include"===this.m},set:function(e){this.m=e?"include":"same-origin"}}),d(Pt,ee);var Rt=/^https?$/i,Dt=["POST","PUT"];function $t(e,t){e.h=!1,e.g&&(e.j=!0,e.g.abort(),e.j=!1),e.l=t,e.m=5,Lt(e),Mt(e)}function Lt(e){e.A||(e.A=!0,te(e,"complete"),te(e,"error"))}function Ut(e){if(e.h&&void 0!==i&&(!e.v[1]||4!=Ft(e)||2!=e.Z()))if(e.u&&4==Ft(e))ie(e.Ea,0,e);else if(te(e,"readystatechange"),4==Ft(e)){e.h=!1;try{const i=e.Z();e:switch(i){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var t=!0;break e;default:t=!1}var r;if(!(r=t)){var o;if(o=0===i){var s=String(e.D).match(et)[1]||null;!s&&n.self&&n.self.location&&(s=n.self.location.protocol.slice(0,-1)),o=!Rt.test(s?s.toLowerCase():"")}r=o}if(r)te(e,"complete"),te(e,"success");else{e.m=6;try{var a=2<Ft(e)?e.g.statusText:""}catch(e){a=""}e.l=a+" ["+e.Z()+"]",Lt(e)}}finally{Mt(e)}}}function Mt(e,t){if(e.g){jt(e);const r=e.g,i=e.v[0]?()=>{}:null;e.g=null,e.v=null,t||te(e,"ready");try{r.onreadystatechange=i}catch(e){}}}function jt(e){e.I&&(n.clearTimeout(e.I),e.I=null)}function Ft(e){return e.g?e.g.readyState:0}function Vt(e){try{if(!e.g)return null;if("response"in e.g)return e.g.response;switch(e.H){case"":case"text":return e.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in e.g)return e.g.mozResponseArrayBuffer}return null}catch(e){return null}}function Bt(e,t,r){return r&&r.internalChannelParams&&r.internalChannelParams[e]||t}function zt(e){this.Aa=0,this.i=[],this.j=new Ae,this.ia=this.qa=this.I=this.W=this.g=this.ya=this.D=this.H=this.m=this.S=this.o=null,this.Ya=this.U=0,this.Va=Bt("failFast",!1,e),this.F=this.C=this.u=this.s=this.l=null,this.X=!0,this.za=this.T=-1,this.Y=this.v=this.B=0,this.Ta=Bt("baseRetryDelayMs",5e3,e),this.cb=Bt("retryDelaySeedMs",1e4,e),this.Wa=Bt("forwardChannelMaxRetries",2,e),this.wa=Bt("forwardChannelRequestTimeoutMs",2e4,e),this.pa=e&&e.xmlHttpFactory||void 0,this.Xa=e&&e.Tb||void 0,this.Ca=e&&e.useFetchStreams||!1,this.L=void 0,this.J=e&&e.supportsCrossDomainXhr||!1,this.K="",this.h=new We(e&&e.concurrentRequestLimit),this.Da=new St,this.P=e&&e.fastHandshake||!1,this.O=e&&e.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.Ua=e&&e.Rb||!1,e&&e.xa&&this.j.xa(),e&&e.forceLongPolling&&(this.X=!1),this.ba=!this.P&&this.X&&e&&e.detectBufferingProxy||!1,this.ja=void 0,e&&e.longPollingTimeout&&0<e.longPollingTimeout&&(this.ja=e.longPollingTimeout),this.ca=void 0,this.R=0,this.M=!1,this.ka=this.A=null}function Ht(e){if(Wt(e),3==e.G){var t=e.U++,r=rt(e.I);if(st(r,"SID",e.K),st(r,"RID",t),st(r,"TYPE","terminate"),Xt(e,r),(t=new Ne(e,e.j,t)).L=2,t.v=at(rt(r)),r=!1,n.navigator&&n.navigator.sendBeacon)try{r=n.navigator.sendBeacon(t.v.toString(),"")}catch(e){}!r&&n.Image&&((new Image).src=t.v,r=!0),r||(t.g=ar(t.j,null),t.g.ea(t.v)),t.F=Date.now(),je(t)}or(e)}function qt(e){e.g&&(Qt(e),e.g.cancel(),e.g=null)}function Wt(e){qt(e),e.u&&(n.clearTimeout(e.u),e.u=null),tr(e),e.h.cancel(),e.s&&("number"==typeof e.s&&n.clearTimeout(e.s),e.s=null)}function Kt(e){if(!Ke(e.h)&&!e.s){e.s=!0;var t=e.Ga;I||O(),C||(I(),C=!0),k.add(t,e),e.B=0}}function Gt(e,t){var r;r=t?t.l:e.U++;const i=rt(e.I);st(i,"SID",e.K),st(i,"RID",r),st(i,"AID",e.T),Xt(e,i),e.m&&e.o&&Nt(i,e.m,e.o),r=new Ne(e,e.j,r,e.B+1),null===e.m&&(r.H=e.o),t&&(e.i=t.D.concat(e.i)),t=Jt(e,r,1e3),r.I=Math.round(.5*e.wa)+Math.round(.5*e.wa*Math.random()),Je(e.h,r),$e(r,i,t)}function Xt(e,t){e.H&&y(e.H,function(e,r){st(t,r,e)}),e.l&&Qe({},function(e,r){st(t,r,e)})}function Jt(e,t,r){r=Math.min(e.i.length,r);var i=e.l?c(e.l.Na,e.l,e):null;e:{var n=e.i;let t=-1;for(;;){const e=["count="+r];-1==t?0<r?(t=n[0].g,e.push("ofs="+t)):t=0:e.push("ofs="+t);let o=!0;for(let s=0;s<r;s++){let r=n[s].g;const a=n[s].map;if(r-=t,0>r)t=Math.max(0,n[s].g-100),o=!1;else try{Et(a,e,"req"+r+"_")}catch(e){i&&i(a)}}if(o){i=e.join("&");break e}}}return e=e.i.splice(0,r),t.D=e,i}function Yt(e){if(!e.g&&!e.u){e.Y=1;var t=e.Fa;I||O(),C||(I(),C=!0),k.add(t,e),e.v=0}}function Zt(e){return!(e.g||e.u||3<=e.v)&&(e.Y++,e.u=Te(c(e.Fa,e),ir(e,e.v)),e.v++,!0)}function Qt(e){null!=e.A&&(n.clearTimeout(e.A),e.A=null)}function er(e){e.g=new Ne(e,e.j,"rpc",e.Y),null===e.m&&(e.g.H=e.o),e.g.O=0;var t=rt(e.qa);st(t,"RID","rpc"),st(t,"SID",e.K),st(t,"AID",e.T),st(t,"CI",e.F?"0":"1"),!e.F&&e.ja&&st(t,"TO",e.ja),st(t,"TYPE","xmlhttp"),Xt(e,t),e.m&&e.o&&Nt(t,e.m,e.o),e.L&&(e.g.I=e.L);var r=e.g;e=e.ia,r.L=1,r.v=at(rt(t)),r.m=null,r.P=!0,Le(r,e)}function tr(e){null!=e.C&&(n.clearTimeout(e.C),e.C=null)}function rr(e,t){var r=null;if(e.g==t){tr(e),Qt(e),e.g=null;var i=2}else{if(!Xe(e.h,t))return;r=t.D,Ye(e.h,t),i=1}if(0!=e.G)if(t.o)if(1==i){r=t.m?t.m.length:0,t=Date.now()-t.F;var n=e.B;te(i=be(),new Ee(i,r)),Kt(e)}else Yt(e);else if(3==(n=t.s)||0==n&&0<t.X||!(1==i&&function(e,t){return!(Ge(e.h)>=e.h.j-(e.s?1:0)||(e.s?(e.i=t.D.concat(e.i),0):1==e.G||2==e.G||e.B>=(e.Va?0:e.Wa)||(e.s=Te(c(e.Ga,e,t),ir(e,e.B)),e.B++,0)))}(e,t)||2==i&&Zt(e)))switch(r&&0<r.length&&(t=e.h,t.i=t.i.concat(r)),n){case 1:nr(e,5);break;case 4:nr(e,10);break;case 3:nr(e,6);break;default:nr(e,2)}}function ir(e,t){let r=e.Ta+Math.floor(Math.random()*e.cb);return e.isActive()||(r*=2),r*t}function nr(e,t){if(e.j.info("Error code "+t),2==t){var r=c(e.fb,e),i=e.Xa;const t=!i;i=new tt(i||"//www.google.com/images/cleardot.gif"),n.location&&"http"==n.location.protocol||it(i,"https"),at(i),t?function(e,t){const r=new Ae;if(n.Image){const i=new Image;i.onload=h(xt,r,"TestLoadImage: loaded",!0,t,i),i.onerror=h(xt,r,"TestLoadImage: error",!1,t,i),i.onabort=h(xt,r,"TestLoadImage: abort",!1,t,i),i.ontimeout=h(xt,r,"TestLoadImage: timeout",!1,t,i),n.setTimeout(function(){i.ontimeout&&i.ontimeout()},1e4),i.src=e}else t(!1)}(i.toString(),r):function(e,t){new Ae;const r=new AbortController,i=setTimeout(()=>{r.abort(),xt(0,0,!1,t)},1e4);fetch(e,{signal:r.signal}).then(e=>{clearTimeout(i),e.ok?xt(0,0,!0,t):xt(0,0,!1,t)}).catch(()=>{clearTimeout(i),xt(0,0,!1,t)})}(i.toString(),r)}else Se(2);e.G=0,e.l&&e.l.sa(t),or(e),Wt(e)}function or(e){if(e.G=0,e.ka=[],e.l){const t=Ze(e.h);0==t.length&&0==e.i.length||(p(e.ka,t),p(e.ka,e.i),e.h.i.length=0,u(e.i),e.i.length=0),e.l.ra()}}function sr(e,t,r){var i=r instanceof tt?rt(r):new tt(r);if(""!=i.g)t&&(i.g=t+"."+i.g),nt(i,i.s);else{var o=n.location;i=o.protocol,t=t?t+"."+o.hostname:o.hostname,o=+o.port;var s=new tt(null);i&&it(s,i),t&&(s.g=t),o&&nt(s,o),r&&(s.l=r),i=s}return r=e.D,t=e.ya,r&&t&&st(i,r,t),st(i,"VER",e.la),Xt(e,i),i}function ar(e,t,r){if(t&&!e.J)throw Error("Can't create secondary domain capable XhrIo object.");return(t=e.Ca&&!e.pa?new Pt(new Tt({eb:r})):new Pt(e.pa)).Ha(e.J),t}function lr(){}function cr(e,t){ee.call(this),this.g=new zt(t),this.l=e,this.h=t&&t.messageUrlParams||null,e=t&&t.messageHeaders||null,t&&t.clientProtocolHeaderRequired&&(e?e["X-Client-Protocol"]="webchannel":e={"X-Client-Protocol":"webchannel"}),this.g.o=e,e=t&&t.initMessageHeaders||null,t&&t.messageContentType&&(e?e["X-WebChannel-Content-Type"]=t.messageContentType:e={"X-WebChannel-Content-Type":t.messageContentType}),t&&t.va&&(e?e["X-WebChannel-Client-Profile"]=t.va:e={"X-WebChannel-Client-Profile":t.va}),this.g.S=e,(e=t&&t.Sb)&&!f(e)&&(this.g.m=e),this.v=t&&t.supportsCrossDomainXhr||!1,this.u=t&&t.sendRawJson||!1,(t=t&&t.httpSessionIdParam)&&!f(t)&&(this.g.D=t,null!==(e=this.h)&&t in e&&(t in(e=this.h)&&delete e[t])),this.j=new ur(this)}function hr(e){ge.call(this),e.__headers__&&(this.headers=e.__headers__,this.statusCode=e.__status__,delete e.__headers__,delete e.__status__);var t=e.__sm__;if(t){e:{for(const r in t){e=r;break e}e=void 0}(this.i=e)&&(e=this.i,t=null!==t&&e in t?t[e]:void 0),this.data=t}else this.data=e}function dr(){me.call(this),this.status=1}function ur(e){this.g=e}(e=Pt.prototype).Ha=function(e){this.J=e},e.ea=function(e,t,r,i){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+e);t=t?t.toUpperCase():"GET",this.D=e,this.l="",this.m=0,this.A=!1,this.h=!0,this.g=this.o?this.o.g():Ce.g(),this.v=this.o?pe(this.o):pe(Ce),this.g.onreadystatechange=c(this.Ea,this);try{this.B=!0,this.g.open(t,String(e),!0),this.B=!1}catch(e){return void $t(this,e)}if(e=r||"",r=new Map(this.headers),i)if(Object.getPrototypeOf(i)===Object.prototype)for(var o in i)r.set(o,i[o]);else{if("function"!=typeof i.keys||"function"!=typeof i.get)throw Error("Unknown input type for opt_headers: "+String(i));for(const e of i.keys())r.set(e,i.get(e))}i=Array.from(r.keys()).find(e=>"content-type"==e.toLowerCase()),o=n.FormData&&e instanceof n.FormData,!(0<=Array.prototype.indexOf.call(Dt,t,void 0))||i||o||r.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[e,t]of r)this.g.setRequestHeader(e,t);this.H&&(this.g.responseType=this.H),"withCredentials"in this.g&&this.g.withCredentials!==this.J&&(this.g.withCredentials=this.J);try{jt(this),this.u=!0,this.g.send(e),this.u=!1}catch(e){$t(this,e)}},e.abort=function(e){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.m=e||7,te(this,"complete"),te(this,"abort"),Mt(this))},e.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),Mt(this,!0)),Pt.aa.N.call(this)},e.Ea=function(){this.s||(this.B||this.u||this.j?Ut(this):this.bb())},e.bb=function(){Ut(this)},e.isActive=function(){return!!this.g},e.Z=function(){try{return 2<Ft(this)?this.g.status:-1}catch(e){return-1}},e.oa=function(){try{return this.g?this.g.responseText:""}catch(e){return""}},e.Oa=function(e){if(this.g){var t=this.g.responseText;return e&&0==t.indexOf(e)&&(t=t.substring(e.length)),he(t)}},e.Ba=function(){return this.m},e.Ka=function(){return"string"==typeof this.l?this.l:String(this.l)},(e=zt.prototype).la=8,e.G=1,e.connect=function(e,t,r,i){Se(0),this.W=e,this.H=t||{},r&&void 0!==i&&(this.H.OSID=r,this.H.OAID=i),this.F=this.X,this.I=sr(this,null,this.W),Kt(this)},e.Ga=function(e){if(this.s)if(this.s=null,1==this.G){if(!e){this.U=Math.floor(1e5*Math.random()),e=this.U++;const n=new Ne(this,this.j,e);let o=this.o;if(this.S&&(o?(o=b(o),w(o,this.S)):o=this.S),null!==this.m||this.O||(n.H=o,o=null),this.P)e:{for(var t=0,r=0;r<this.i.length;r++){var i=this.i[r];if(void 0===(i="__data__"in i.map&&"string"==typeof(i=i.map.__data__)?i.length:void 0))break;if(4096<(t+=i)){t=r;break e}if(4096===t||r===this.i.length-1){t=r+1;break e}}t=1e3}else t=1e3;t=Jt(this,n,t),st(r=rt(this.I),"RID",e),st(r,"CVER",22),this.D&&st(r,"X-HTTP-Session-Id",this.D),Xt(this,r),o&&(this.O?t="headers="+encodeURIComponent(String(Ot(o)))+"&"+t:this.m&&Nt(r,this.m,o)),Je(this.h,n),this.Ua&&st(r,"TYPE","init"),this.P?(st(r,"$req",t),st(r,"SID","null"),n.T=!0,$e(n,r,null)):$e(n,r,t),this.G=2}}else 3==this.G&&(e?Gt(this,e):0==this.i.length||Ke(this.h)||Gt(this))},e.Fa=function(){if(this.u=null,er(this),this.ba&&!(this.M||null==this.g||0>=this.R)){var e=2*this.R;this.j.info("BP detection timer enabled: "+e),this.A=Te(c(this.ab,this),e)}},e.ab=function(){this.A&&(this.A=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.M=!0,Se(10),qt(this),er(this))},e.Za=function(){null!=this.C&&(this.C=null,qt(this),Zt(this),Se(19))},e.fb=function(e){e?(this.j.info("Successfully pinged google.com"),Se(2)):(this.j.info("Failed to ping google.com"),Se(1))},e.isActive=function(){return!!this.l&&this.l.isActive(this)},(e=lr.prototype).ua=function(){},e.ta=function(){},e.sa=function(){},e.ra=function(){},e.isActive=function(){return!0},e.Na=function(){},d(cr,ee),cr.prototype.m=function(){this.g.l=this.j,this.v&&(this.g.J=!0),this.g.connect(this.l,this.h||void 0)},cr.prototype.close=function(){Ht(this.g)},cr.prototype.o=function(e){var t=this.g;if("string"==typeof e){var r={};r.__data__=e,e=r}else this.u&&((r={}).__data__=ce(e),e=r);t.i.push(new qe(t.Ya++,e)),3==t.G&&Kt(t)},cr.prototype.N=function(){this.g.l=null,delete this.j,Ht(this.g),delete this.g,cr.aa.N.call(this)},d(hr,ge),d(dr,me),d(ur,lr),ur.prototype.ua=function(){te(this.g,"a")},ur.prototype.ta=function(e){te(this.g,new hr(e))},ur.prototype.sa=function(e){te(this.g,new dr)},ur.prototype.ra=function(){te(this.g,"b")},cr.prototype.send=cr.prototype.o,cr.prototype.open=cr.prototype.m,cr.prototype.close=cr.prototype.close,ke.NO_ERROR=0,ke.TIMEOUT=8,ke.HTTP_ERROR=6,fe.OPEN="a",fe.CLOSE="b",fe.ERROR="c",fe.MESSAGE="d",ee.prototype.listen=ee.prototype.K,Pt.prototype.listenOnce=Pt.prototype.L,Pt.prototype.getLastError=Pt.prototype.Ka,Pt.prototype.getLastErrorCode=Pt.prototype.Ba,Pt.prototype.getStatus=Pt.prototype.Z,Pt.prototype.getResponseJson=Pt.prototype.Oa,Pt.prototype.getResponseText=Pt.prototype.oa,Pt.prototype.send=Pt.prototype.ea,Pt.prototype.setWithCredentials=Pt.prototype.Ha}).apply(void 0!==kn?kn:"undefined"!=typeof self?self:"undefined"!=typeof window?window:{});const On="@firebase/firestore",Nn="4.8.0";
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
 */class Pn{constructor(e){this.uid=e}isAuthenticated(){return null!=this.uid}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}Pn.UNAUTHENTICATED=new Pn(null),Pn.GOOGLE_CREDENTIALS=new Pn("google-credentials-uid"),Pn.FIRST_PARTY=new Pn("first-party-uid"),Pn.MOCK_USER=new Pn("mock-user");
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
let Rn="11.10.0";
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
 */const Dn=new hr("@firebase/firestore");function $n(e,...t){if(Dn.logLevel<=or.DEBUG){const r=t.map(Un);Dn.debug(`Firestore (${Rn}): ${e}`,...r)}}function Ln(e,...t){if(Dn.logLevel<=or.ERROR){const r=t.map(Un);Dn.error(`Firestore (${Rn}): ${e}`,...r)}}function Un(e){if("string"==typeof e)return e;try{
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
 */function Mn(e,t,r){let i="Unexpected state";"string"==typeof t?i=t:r=t,jn(e,i,r)}function jn(e,t,r){let i=`FIRESTORE (${Rn}) INTERNAL ASSERTION FAILED: ${t} (ID: ${e.toString(16)})`;if(void 0!==r)try{i+=" CONTEXT: "+JSON.stringify(r)}catch(e){i+=" CONTEXT: "+r}throw Ln(i),new Error(i)}function Fn(e,t,r,i){let n="Unexpected state";"string"==typeof r?n=r:i=r,e||jn(t,n,i)}
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
 */const Vn="cancelled",Bn="invalid-argument",zn="failed-precondition";class Hn extends Yt{constructor(e,t){super(e,t),this.code=e,this.message=t,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}
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
 */class qn{constructor(){this.promise=new Promise((e,t)=>{this.resolve=e,this.reject=t})}}
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
 */class Wn{constructor(e,t){this.user=t,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class Kn{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,t){e.enqueueRetryable(()=>t(Pn.UNAUTHENTICATED))}shutdown(){}}class Gn{constructor(e){this.t=e,this.currentUser=Pn.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,t){Fn(void 0===this.o,42304);let r=this.i;const i=e=>this.i!==r?(r=this.i,t(e)):Promise.resolve();let n=new qn;this.o=()=>{this.i++,this.currentUser=this.u(),n.resolve(),n=new qn,e.enqueueRetryable(()=>i(this.currentUser))};const o=()=>{const t=n;e.enqueueRetryable(async()=>{await t.promise,await i(this.currentUser)})},s=e=>{$n("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=e,this.o&&(this.auth.addAuthTokenListener(this.o),o())};this.t.onInit(e=>s(e)),setTimeout(()=>{if(!this.auth){const e=this.t.getImmediate({optional:!0});e?s(e):($n("FirebaseAuthCredentialsProvider","Auth not yet detected"),n.resolve(),n=new qn)}},0),o()}getToken(){const e=this.i,t=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(t).then(t=>this.i!==e?($n("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):t?(Fn("string"==typeof t.accessToken,31837,{l:t}),new Wn(t.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.o&&this.auth.removeAuthTokenListener(this.o),this.o=void 0}u(){const e=this.auth&&this.auth.getUid();return Fn(null===e||"string"==typeof e,2055,{h:e}),new Pn(e)}}class Xn{constructor(e,t,r){this.P=e,this.T=t,this.I=r,this.type="FirstParty",this.user=Pn.FIRST_PARTY,this.A=new Map}R(){return this.I?this.I():null}get headers(){this.A.set("X-Goog-AuthUser",this.P);const e=this.R();return e&&this.A.set("Authorization",e),this.T&&this.A.set("X-Goog-Iam-Authorization-Token",this.T),this.A}}class Jn{constructor(e,t,r){this.P=e,this.T=t,this.I=r}getToken(){return Promise.resolve(new Xn(this.P,this.T,this.I))}start(e,t){e.enqueueRetryable(()=>t(Pn.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class Yn{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class Zn{constructor(e,t){this.V=t,this.forceRefresh=!1,this.appCheck=null,this.m=null,this.p=null,ci(e)&&e.settings.appCheckToken&&(this.p=e.settings.appCheckToken)}start(e,t){Fn(void 0===this.o,3512);const r=e=>{null!=e.error&&$n("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${e.error.message}`);const r=e.token!==this.m;return this.m=e.token,$n("FirebaseAppCheckTokenProvider",`Received ${r?"new":"existing"} token.`),r?t(e.token):Promise.resolve()};this.o=t=>{e.enqueueRetryable(()=>r(t))};const i=e=>{$n("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=e,this.o&&this.appCheck.addTokenListener(this.o)};this.V.onInit(e=>i(e)),setTimeout(()=>{if(!this.appCheck){const e=this.V.getImmediate({optional:!0});e?i(e):$n("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){if(this.p)return Promise.resolve(new Yn(this.p));const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(e=>e?(Fn("string"==typeof e.token,44558,{tokenResult:e}),this.m=e.token,new Yn(e.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.o&&this.appCheck.removeTokenListener(this.o),this.o=void 0}}
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
 */function Qn(e){const t="undefined"!=typeof self&&(self.crypto||self.msCrypto),r=new Uint8Array(e);if(t&&"function"==typeof t.getRandomValues)t.getRandomValues(r);else for(let t=0;t<e;t++)r[t]=Math.floor(256*Math.random());return r}
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
 */function eo(){return new TextEncoder}
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
 */class to{static newId(){const e=62*Math.floor(256/62);let t="";for(;t.length<20;){const r=Qn(40);for(let i=0;i<r.length;++i)t.length<20&&r[i]<e&&(t+="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789".charAt(r[i]%62))}return t}}function ro(e,t){return e<t?-1:e>t?1:0}function io(e,t){return e.codePointAt(t)>65535?e.substring(t,t+2):e.substring(t,t+1)}function no(e,t){for(let r=0;r<e.length&&r<t.length;++r)if(e[r]!==t[r])return ro(e[r],t[r]);return ro(e.length,t.length)}
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
 */const oo="__name__";class so{constructor(e,t,r){void 0===t?t=0:t>e.length&&Mn(637,{offset:t,range:e.length}),void 0===r?r=e.length-t:r>e.length-t&&Mn(1746,{length:r,range:e.length-t}),this.segments=e,this.offset=t,this.len=r}get length(){return this.len}isEqual(e){return 0===so.comparator(this,e)}child(e){const t=this.segments.slice(this.offset,this.limit());return e instanceof so?e.forEach(e=>{t.push(e)}):t.push(e),this.construct(t)}limit(){return this.offset+this.length}popFirst(e){return e=void 0===e?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return 0===this.length}isPrefixOf(e){if(e.length<this.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}forEach(e){for(let t=this.offset,r=this.limit();t<r;t++)e(this.segments[t])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,t){const r=Math.min(e.length,t.length);for(let i=0;i<r;i++){const r=so.compareSegments(e.get(i),t.get(i));if(0!==r)return r}return ro(e.length,t.length)}static compareSegments(e,t){const r=so.isNumericId(e),i=so.isNumericId(t);return r&&!i?-1:!r&&i?1:r&&i?so.extractNumericId(e).compare(so.extractNumericId(t)):function(e,t){let r=0;for(;r<e.length&&r<t.length;){const i=e.codePointAt(r),n=t.codePointAt(r);if(i!==n){if(i<128&&n<128)return ro(i,n);{const o=eo(),s=no(o.encode(io(e,r)),o.encode(io(t,r)));return 0!==s?s:ro(i,n)}}r+=i>65535?2:1}return ro(e.length,t.length)}(e,t)}static isNumericId(e){return e.startsWith("__id")&&e.endsWith("__")}static extractNumericId(e){return In.fromString(e.substring(4,e.length-2))}}class ao extends so{construct(e,t,r){return new ao(e,t,r)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...e){const t=[];for(const r of e){if(r.indexOf("//")>=0)throw new Hn(Bn,`Invalid segment (${r}). Paths must not contain // in them.`);t.push(...r.split("/").filter(e=>e.length>0))}return new ao(t)}static emptyPath(){return new ao([])}}const lo=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class co extends so{construct(e,t,r){return new co(e,t,r)}static isValidIdentifier(e){return lo.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),co.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return 1===this.length&&this.get(0)===oo}static keyField(){return new co([oo])}static fromServerFormat(e){const t=[];let r="",i=0;const n=()=>{if(0===r.length)throw new Hn(Bn,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);t.push(r),r=""};let o=!1;for(;i<e.length;){const t=e[i];if("\\"===t){if(i+1===e.length)throw new Hn(Bn,"Path has trailing escape character: "+e);const t=e[i+1];if("\\"!==t&&"."!==t&&"`"!==t)throw new Hn(Bn,"Path has invalid escape sequence: "+e);r+=t,i+=2}else"`"===t?(o=!o,i++):"."!==t||o?(r+=t,i++):(n(),i++)}if(n(),o)throw new Hn(Bn,"Unterminated ` in path: "+e);return new co(t)}static emptyPath(){return new co([])}}
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
 */class ho{constructor(e){this.path=e}static fromPath(e){return new ho(ao.fromString(e))}static fromName(e){return new ho(ao.fromString(e).popFirst(5))}static empty(){return new ho(ao.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return null!==e&&0===ao.comparator(this.path,e.path)}toString(){return this.path.toString()}static comparator(e,t){return ao.comparator(e.path,t.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new ho(new ao(e.slice()))}}
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
function uo(e,t){const r={typeString:e};return t&&(r.value=t),r}function po(e,t){if(!function(e){return"object"==typeof e&&null!==e&&(Object.getPrototypeOf(e)===Object.prototype||null===Object.getPrototypeOf(e))}(e))throw new Hn(Bn,"JSON must be an object");let r;for(const i in t)if(t[i]){const n=t[i].typeString,o="value"in t[i]?{value:t[i].value}:void 0;if(!(i in e)){r=`JSON missing required field: '${i}'`;break}const s=e[i];if(n&&typeof s!==n){r=`JSON field '${i}' must be a ${n}.`;break}if(void 0!==o&&s!==o.value){r=`Expected '${i}' field to equal '${o.value}'`;break}}if(r)throw new Hn(Bn,r);return!0}
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
 */const fo=-62135596800,go=1e6;class mo{static now(){return mo.fromMillis(Date.now())}static fromDate(e){return mo.fromMillis(e.getTime())}static fromMillis(e){const t=Math.floor(e/1e3),r=Math.floor((e-1e3*t)*go);return new mo(t,r)}constructor(e,t){if(this.seconds=e,this.nanoseconds=t,t<0)throw new Hn(Bn,"Timestamp nanoseconds out of range: "+t);if(t>=1e9)throw new Hn(Bn,"Timestamp nanoseconds out of range: "+t);if(e<fo)throw new Hn(Bn,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new Hn(Bn,"Timestamp seconds out of range: "+e)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/go}_compareTo(e){return this.seconds===e.seconds?ro(this.nanoseconds,e.nanoseconds):ro(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{type:mo._jsonSchemaVersion,seconds:this.seconds,nanoseconds:this.nanoseconds}}static fromJSON(e){if(po(e,mo._jsonSchema))return new mo(e.seconds,e.nanoseconds)}valueOf(){const e=this.seconds-fo;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}mo._jsonSchemaVersion="firestore/timestamp/1.0",mo._jsonSchema={type:uo("string",mo._jsonSchemaVersion),seconds:uo("number"),nanoseconds:uo("number")};
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
class vo extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}
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
 */class yo{constructor(e){this.binaryString=e}static fromBase64String(e){const t=function(e){try{return atob(e)}catch(e){throw"undefined"!=typeof DOMException&&e instanceof DOMException?new vo("Invalid base64 string: "+e):e}}(e);return new yo(t)}static fromUint8Array(e){const t=function(e){let t="";for(let r=0;r<e.length;++r)t+=String.fromCharCode(e[r]);return t}(e);return new yo(t)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return function(e){return btoa(e)}(this.binaryString)}toUint8Array(){return function(e){const t=new Uint8Array(e.length);for(let r=0;r<e.length;r++)t[r]=e.charCodeAt(r);return t}
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
 */(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return ro(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}yo.EMPTY_BYTE_STRING=new yo("");const bo="(default)";class _o{constructor(e,t){this.projectId=e,this.database=t||bo}static empty(){return new _o("","")}get isDefaultDatabase(){return this.database===bo}isEqual(e){return e instanceof _o&&e.projectId===this.projectId&&e.database===this.database}}
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
 */class wo{constructor(e,t=null,r=[],i=[],n=null,o="F",s=null,a=null){this.path=e,this.collectionGroup=t,this.explicitOrderBy=r,this.filters=i,this.limit=n,this.limitType=o,this.startAt=s,this.endAt=a,this.Te=null,this.Ie=null,this.de=null,this.startAt,this.endAt}}
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
var xo,So;(So=xo||(xo={}))[So.OK=0]="OK",So[So.CANCELLED=1]="CANCELLED",So[So.UNKNOWN=2]="UNKNOWN",So[So.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",So[So.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",So[So.NOT_FOUND=5]="NOT_FOUND",So[So.ALREADY_EXISTS=6]="ALREADY_EXISTS",So[So.PERMISSION_DENIED=7]="PERMISSION_DENIED",So[So.UNAUTHENTICATED=16]="UNAUTHENTICATED",So[So.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",So[So.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",So[So.ABORTED=10]="ABORTED",So[So.OUT_OF_RANGE=11]="OUT_OF_RANGE",So[So.UNIMPLEMENTED=12]="UNIMPLEMENTED",So[So.INTERNAL=13]="INTERNAL",So[So.UNAVAILABLE=14]="UNAVAILABLE",So[So.DATA_LOSS=15]="DATA_LOSS",
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
new In([4294967295,4294967295],0);function Eo(){return"undefined"!=typeof document?document:null}
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
 */class To{constructor(e,t,r=1e3,i=1.5,n=6e4){this.Fi=e,this.timerId=t,this.d_=r,this.E_=i,this.A_=n,this.R_=0,this.V_=null,this.m_=Date.now(),this.reset()}reset(){this.R_=0}f_(){this.R_=this.A_}g_(e){this.cancel();const t=Math.floor(this.R_+this.p_()),r=Math.max(0,Date.now()-this.m_),i=Math.max(0,t-r);i>0&&$n("ExponentialBackoff",`Backing off for ${i} ms (base delay: ${this.R_} ms, delay with jitter: ${t} ms, last attempt: ${r} ms ago)`),this.V_=this.Fi.enqueueAfterDelay(this.timerId,i,()=>(this.m_=Date.now(),e())),this.R_*=this.E_,this.R_<this.d_&&(this.R_=this.d_),this.R_>this.A_&&(this.R_=this.A_)}y_(){null!==this.V_&&(this.V_.skipDelay(),this.V_=null)}cancel(){null!==this.V_&&(this.V_.cancel(),this.V_=null)}p_(){return(Math.random()-.5)*this.R_}}
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
 */class Ao{constructor(e,t,r,i,n){this.asyncQueue=e,this.timerId=t,this.targetTimeMs=r,this.op=i,this.removalCallback=n,this.deferred=new qn,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(e=>{})}get promise(){return this.deferred.promise}static createAndSchedule(e,t,r,i,n){const o=Date.now()+r,s=new Ao(e,t,o,i,n);return s.start(r),s}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){null!==this.timerHandle&&(this.clearTimeout(),this.deferred.reject(new Hn(Vn,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>null!==this.timerHandle?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){null!==this.timerHandle&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}var Io,Co;(Co=Io||(Io={})).Fa="default",Co.Cache="cache";
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
const ko=new Map,Oo=!0;
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
 */class No{constructor(e){var t,r;if(void 0===e.host){if(void 0!==e.ssl)throw new Hn(Bn,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=Oo}else this.host=e.host,this.ssl=null!==(t=e.ssl)&&void 0!==t?t:Oo;if(this.isUsingEmulator=void 0!==e.emulatorOptions,this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,void 0===e.cacheSizeBytes)this.cacheSizeBytes=41943040;else{if(-1!==e.cacheSizeBytes&&e.cacheSizeBytes<1048576)throw new Hn(Bn,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}(function(e,t,r,i){if(!0===t&&!0===i)throw new Hn(Bn,`${e} and ${r} cannot be used together.`)})("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:void 0===e.experimentalAutoDetectLongPolling?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=
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
function(e){const t={};return void 0!==e.timeoutSeconds&&(t.timeoutSeconds=e.timeoutSeconds),t}(null!==(r=e.experimentalLongPollingOptions)&&void 0!==r?r:{}),function(e){if(void 0!==e.timeoutSeconds){if(isNaN(e.timeoutSeconds))throw new Hn(Bn,`invalid long polling timeout: ${e.timeoutSeconds} (must not be NaN)`);if(e.timeoutSeconds<5)throw new Hn(Bn,`invalid long polling timeout: ${e.timeoutSeconds} (minimum allowed value is 5)`);if(e.timeoutSeconds>30)throw new Hn(Bn,`invalid long polling timeout: ${e.timeoutSeconds} (maximum allowed value is 30)`)}}
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
 */(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&function(e,t){return e.timeoutSeconds===t.timeoutSeconds}(this.experimentalLongPollingOptions,e.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}class Po{constructor(e,t,r,i){this._authCredentials=e,this._appCheckCredentials=t,this._databaseId=r,this._app=i,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new No({}),this._settingsFrozen=!1,this._emulatorOptions={},this._terminateTask="notTerminated"}get app(){if(!this._app)throw new Hn(zn,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return"notTerminated"!==this._terminateTask}_setSettings(e){if(this._settingsFrozen)throw new Hn(zn,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new No(e),this._emulatorOptions=e.emulatorOptions||{},void 0!==e.credentials&&(this._authCredentials=function(e){if(!e)return new Kn;switch(e.type){case"firstParty":return new Jn(e.sessionIndex||"0",e.iamToken||null,e.authTokenFactory||null);case"provider":return e.client;default:throw new Hn(Bn,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_getEmulatorOptions(){return this._emulatorOptions}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return"notTerminated"===this._terminateTask&&(this._terminateTask=this._terminate()),this._terminateTask}async _restart(){"notTerminated"===this._terminateTask?await this._terminate():this._terminateTask="notTerminated"}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(e){const t=ko.get(e);t&&($n("ComponentProvider","Removing Datastore"),ko.delete(e),t.terminate())}(this),Promise.resolve()}}
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
 */class Ro{constructor(e,t,r){this.converter=t,this._query=r,this.type="query",this.firestore=e}withConverter(e){return new Ro(this.firestore,e,this._query)}}class Do{constructor(e,t,r){this.converter=t,this._key=r,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new $o(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new Do(this.firestore,e,this._key)}toJSON(){return{type:Do._jsonSchemaVersion,referencePath:this._key.toString()}}static fromJSON(e,t,r){if(po(t,Do._jsonSchema))return new Do(e,r||null,new ho(ao.fromString(t.referencePath)))}}Do._jsonSchemaVersion="firestore/documentReference/1.0",Do._jsonSchema={type:uo("string",Do._jsonSchemaVersion),referencePath:uo("string")};class $o extends Ro{constructor(e,t,r){super(e,t,function(e){return new wo(e)}(r)),this._path=r,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new Do(this.firestore,null,new ho(e))}withConverter(e){return new $o(this.firestore,e,this._path)}}
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
 */const Lo="AsyncQueue";class Uo{constructor(e=Promise.resolve()){this.Zu=[],this.Xu=!1,this.ec=[],this.tc=null,this.nc=!1,this.rc=!1,this.sc=[],this.F_=new To(this,"async_queue_retry"),this.oc=()=>{const e=Eo();e&&$n(Lo,"Visibility state changed to "+e.visibilityState),this.F_.y_()},this._c=e;const t=Eo();t&&"function"==typeof t.addEventListener&&t.addEventListener("visibilitychange",this.oc)}get isShuttingDown(){return this.Xu}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.ac(),this.uc(e)}enterRestrictedMode(e){if(!this.Xu){this.Xu=!0,this.rc=e||!1;const t=Eo();t&&"function"==typeof t.removeEventListener&&t.removeEventListener("visibilitychange",this.oc)}}enqueue(e){if(this.ac(),this.Xu)return new Promise(()=>{});const t=new qn;return this.uc(()=>this.Xu&&this.rc?Promise.resolve():(e().then(t.resolve,t.reject),t.promise)).then(()=>t.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.Zu.push(e),this.cc()))}async cc(){if(0!==this.Zu.length){try{await this.Zu[0](),this.Zu.shift(),this.F_.reset()}catch(e){if(!function(e){return"IndexedDbTransactionError"===e.name}(e))throw e;$n(Lo,"Operation failed with retryable error: "+e)}this.Zu.length>0&&this.F_.g_(()=>this.cc())}}uc(e){const t=this._c.then(()=>(this.nc=!0,e().catch(e=>{throw this.tc=e,this.nc=!1,Ln("INTERNAL UNHANDLED ERROR: ",Mo(e)),e}).then(e=>(this.nc=!1,e))));return this._c=t,t}enqueueAfterDelay(e,t,r){this.ac(),this.sc.indexOf(e)>-1&&(t=0);const i=Ao.createAndSchedule(this,e,t,r,e=>this.lc(e));return this.ec.push(i),i}ac(){this.tc&&Mn(47125,{hc:Mo(this.tc)})}verifyOperationInProgress(){}async Pc(){let e;do{e=this._c,await e}while(e!==this._c)}Tc(e){for(const t of this.ec)if(t.timerId===e)return!0;return!1}Ic(e){return this.Pc().then(()=>{this.ec.sort((e,t)=>e.targetTimeMs-t.targetTimeMs);for(const t of this.ec)if(t.skipDelay(),"all"!==e&&t.timerId===e)break;return this.Pc()})}dc(e){this.sc.push(e)}lc(e){const t=this.ec.indexOf(e);this.ec.splice(t,1)}}function Mo(e){let t=e.message||"";return e.stack&&(t=e.stack.includes(e.message)?e.stack:e.message+"\n"+e.stack),t}class jo extends Po{constructor(e,t,r,i){super(e,t,r,i),this.type="firestore",this._queue=new Uo,this._persistenceKey=(null==i?void 0:i.name)||"[DEFAULT]"}async _terminate(){if(this._firestoreClient){const e=this._firestoreClient.terminate();this._queue=new Uo(e),this._firestoreClient=void 0,await e}}}
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
 */class Fo{constructor(e){this._byteString=e}static fromBase64String(e){try{return new Fo(yo.fromBase64String(e))}catch(e){throw new Hn(Bn,"Failed to construct data from Base64 string: "+e)}}static fromUint8Array(e){return new Fo(yo.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}toJSON(){return{type:Fo._jsonSchemaVersion,bytes:this.toBase64()}}static fromJSON(e){if(po(e,Fo._jsonSchema))return Fo.fromBase64String(e.bytes)}}Fo._jsonSchemaVersion="firestore/bytes/1.0",Fo._jsonSchema={type:uo("string",Fo._jsonSchemaVersion),bytes:uo("string")};
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
class Vo{constructor(...e){for(let t=0;t<e.length;++t)if(0===e[t].length)throw new Hn(Bn,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new co(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}
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
 */class Bo{constructor(e,t){if(!isFinite(e)||e<-90||e>90)throw new Hn(Bn,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(t)||t<-180||t>180)throw new Hn(Bn,"Longitude must be a number between -180 and 180, but was: "+t);this._lat=e,this._long=t}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}_compareTo(e){return ro(this._lat,e._lat)||ro(this._long,e._long)}toJSON(){return{latitude:this._lat,longitude:this._long,type:Bo._jsonSchemaVersion}}static fromJSON(e){if(po(e,Bo._jsonSchema))return new Bo(e.latitude,e.longitude)}}Bo._jsonSchemaVersion="firestore/geoPoint/1.0",Bo._jsonSchema={type:uo("string",Bo._jsonSchemaVersion),latitude:uo("number"),longitude:uo("number")};
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
class zo{constructor(e){this._values=(e||[]).map(e=>e)}toArray(){return this._values.map(e=>e)}isEqual(e){return function(e,t){if(e.length!==t.length)return!1;for(let r=0;r<e.length;++r)if(e[r]!==t[r])return!1;return!0}(this._values,e._values)}toJSON(){return{type:zo._jsonSchemaVersion,vectorValues:this._values}}static fromJSON(e){if(po(e,zo._jsonSchema)){if(Array.isArray(e.vectorValues)&&e.vectorValues.every(e=>"number"==typeof e))return new zo(e.vectorValues);throw new Hn(Bn,"Expected 'vectorValues' field to be a number array")}}}zo._jsonSchemaVersion="firestore/vectorValue/1.0",zo._jsonSchema={type:uo("string",zo._jsonSchemaVersion),vectorValues:uo("object")};const Ho=new RegExp("[~\\*/\\[\\]]");function qo(e,t,r,i,n){let o=`Function ${t}() called with invalid data`;o+=". ";return new Hn(Bn,o+e+"")}
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
 */class Wo{constructor(e,t,r,i,n){this._firestore=e,this._userDataWriter=t,this._key=r,this._document=i,this._converter=n}get id(){return this._key.path.lastSegment()}get ref(){return new Do(this._firestore,this._converter,this._key)}exists(){return null!==this._document}data(){if(this._document){if(this._converter){const e=new Ko(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const t=this._document.data.field(Go("DocumentSnapshot.get",e));if(null!==t)return this._userDataWriter.convertValue(t)}}}class Ko extends Wo{data(){return super.data()}}function Go(e,t){return"string"==typeof t?function(e,t){if(t.search(Ho)>=0)throw qo(`Invalid field path (${t}). Paths must not contain '~', '*', '/', '[', or ']'`,e);try{return new Vo(...t.split("."))._internalPath}catch(r){throw qo(`Invalid field path (${t}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,e)}}(e,t):t instanceof Vo?t._internalPath:t._delegate._internalPath}class Xo{constructor(e,t){this.hasPendingWrites=e,this.fromCache=t}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class Jo extends Wo{constructor(e,t,r,i,n,o){super(e,t,r,i,o),this._firestore=e,this._firestoreImpl=e,this.metadata=n}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const t=new Yo(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(t,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,t={}){if(this._document){const r=this._document.data.field(Go("DocumentSnapshot.get",e));if(null!==r)return this._userDataWriter.convertValue(r,t.serverTimestamps)}}toJSON(){if(this.metadata.hasPendingWrites)throw new Hn(zn,"DocumentSnapshot.toJSON() attempted to serialize a document with pending writes. Await waitForPendingWrites() before invoking toJSON().");const e=this._document,t={};return t.type=Jo._jsonSchemaVersion,t.bundle="",t.bundleSource="DocumentSnapshot",t.bundleName=this._key.toString(),e&&e.isValidDocument()&&e.isFoundDocument()?(this._userDataWriter.convertObjectMap(e.data.value.mapValue.fields,"previous"),t.bundle=(this._firestore,this.ref.path,"NOT SUPPORTED"),t):t}}Jo._jsonSchemaVersion="firestore/documentSnapshot/1.0",Jo._jsonSchema={type:uo("string",Jo._jsonSchemaVersion),bundleSource:uo("string","DocumentSnapshot"),bundleName:uo("string"),bundle:uo("string")};class Yo extends Jo{data(e={}){return super.data(e)}}class Zo{constructor(e,t,r,i){this._firestore=e,this._userDataWriter=t,this._snapshot=i,this.metadata=new Xo(i.hasPendingWrites,i.fromCache),this.query=r}get docs(){const e=[];return this.forEach(t=>e.push(t)),e}get size(){return this._snapshot.docs.size}get empty(){return 0===this.size}forEach(e,t){this._snapshot.docs.forEach(r=>{e.call(t,new Yo(this._firestore,this._userDataWriter,r.key,r,new Xo(this._snapshot.mutatedKeys.has(r.key),this._snapshot.fromCache),this.query.converter))})}docChanges(e={}){const t=!!e.includeMetadataChanges;if(t&&this._snapshot.excludesMetadataChanges)throw new Hn(Bn,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===t||(this._cachedChanges=function(e,t){if(e._snapshot.oldDocs.isEmpty()){let t=0;return e._snapshot.docChanges.map(r=>{const i=new Yo(e._firestore,e._userDataWriter,r.doc.key,r.doc,new Xo(e._snapshot.mutatedKeys.has(r.doc.key),e._snapshot.fromCache),e.query.converter);return r.doc,{type:"added",doc:i,oldIndex:-1,newIndex:t++}})}{let r=e._snapshot.oldDocs;return e._snapshot.docChanges.filter(e=>t||3!==e.type).map(t=>{const i=new Yo(e._firestore,e._userDataWriter,t.doc.key,t.doc,new Xo(e._snapshot.mutatedKeys.has(t.doc.key),e._snapshot.fromCache),e.query.converter);let n=-1,o=-1;return 0!==t.type&&(n=r.indexOf(t.doc.key),r=r.delete(t.doc.key)),1!==t.type&&(r=r.add(t.doc),o=r.indexOf(t.doc.key)),{type:Qo(t.type),doc:i,oldIndex:n,newIndex:o}})}}(this,t),this._cachedChangesIncludeMetadataChanges=t),this._cachedChanges}toJSON(){if(this.metadata.hasPendingWrites)throw new Hn(zn,"QuerySnapshot.toJSON() attempted to serialize a document with pending writes. Await waitForPendingWrites() before invoking toJSON().");const e={};e.type=Zo._jsonSchemaVersion,e.bundleSource="QuerySnapshot",e.bundleName=to.newId(),this._firestore._databaseId.database,this._firestore._databaseId.projectId;const t=[],r=[],i=[];return this.docs.forEach(e=>{null!==e._document&&(t.push(e._document),r.push(this._userDataWriter.convertObjectMap(e._document.data.value.mapValue.fields,"previous")),i.push(e.ref.path))}),e.bundle=(this._firestore,this.query._query,e.bundleName,"NOT SUPPORTED"),e}}function Qo(e){switch(e){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return Mn(61501,{type:e})}}Zo._jsonSchemaVersion="firestore/querySnapshot/1.0",Zo._jsonSchema={type:uo("string",Zo._jsonSchemaVersion),bundleSource:uo("string","QuerySnapshot"),bundleName:uo("string"),bundle:uo("string")},function(e,t=!0){!function(e){Rn=e}(di),li(new nr("firestore",(e,{instanceIdentifier:r,options:i})=>{const n=e.getProvider("app").getImmediate(),o=new jo(new Gn(e.getProvider("auth-internal")),new Zn(n,e.getProvider("app-check-internal")),function(e,t){if(!Object.prototype.hasOwnProperty.apply(e.options,["projectId"]))throw new Hn(Bn,'"projectId" not provided in firebase.initializeApp.');return new _o(e.options.projectId,t)}(n,r),n);return i=Object.assign({useFetchStreams:t},i),o._setSettings(i),o},"PUBLIC").setMultipleInstances(!0)),ui(On,Nn,e),ui(On,Nn,"esm2017")}();
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
const es="firebasestorage.googleapis.com";
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
class ts extends Yt{constructor(e,t,r=0){super(ns(e),`Firebase Storage: ${t} (${ns(e)})`),this.status_=r,this.customData={serverResponse:null},this._baseMessage=this.message,Object.setPrototypeOf(this,ts.prototype)}get status(){return this.status_}set status(e){this.status_=e}_codeEquals(e){return ns(e)===this.code}get serverResponse(){return this.customData.serverResponse}set serverResponse(e){this.customData.serverResponse=e,this.customData.serverResponse?this.message=`${this._baseMessage}\n${this.customData.serverResponse}`:this.message=this._baseMessage}}var rs,is;function ns(e){return"storage/"+e}function os(e){return new ts(rs.INVALID_ARGUMENT,e)}function ss(){return new ts(rs.APP_DELETED,"The Firebase app was deleted.")}!function(e){e.UNKNOWN="unknown",e.OBJECT_NOT_FOUND="object-not-found",e.BUCKET_NOT_FOUND="bucket-not-found",e.PROJECT_NOT_FOUND="project-not-found",e.QUOTA_EXCEEDED="quota-exceeded",e.UNAUTHENTICATED="unauthenticated",e.UNAUTHORIZED="unauthorized",e.UNAUTHORIZED_APP="unauthorized-app",e.RETRY_LIMIT_EXCEEDED="retry-limit-exceeded",e.INVALID_CHECKSUM="invalid-checksum",e.CANCELED="canceled",e.INVALID_EVENT_NAME="invalid-event-name",e.INVALID_URL="invalid-url",e.INVALID_DEFAULT_BUCKET="invalid-default-bucket",e.NO_DEFAULT_BUCKET="no-default-bucket",e.CANNOT_SLICE_BLOB="cannot-slice-blob",e.SERVER_FILE_WRONG_SIZE="server-file-wrong-size",e.NO_DOWNLOAD_URL="no-download-url",e.INVALID_ARGUMENT="invalid-argument",e.INVALID_ARGUMENT_COUNT="invalid-argument-count",e.APP_DELETED="app-deleted",e.INVALID_ROOT_OPERATION="invalid-root-operation",e.INVALID_FORMAT="invalid-format",e.INTERNAL_ERROR="internal-error",e.UNSUPPORTED_ENVIRONMENT="unsupported-environment"}(rs||(rs={}));
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
class as{constructor(e,t){this.bucket=e,this.path_=t}get path(){return this.path_}get isRoot(){return 0===this.path.length}fullServerUrl(){const e=encodeURIComponent;return"/b/"+e(this.bucket)+"/o/"+e(this.path)}bucketOnlyServerUrl(){return"/b/"+encodeURIComponent(this.bucket)+"/o"}static makeFromBucketSpec(e,t){let r;try{r=as.makeFromUrl(e,t)}catch(t){return new as(e,"")}if(""===r.path)return r;throw i=e,new ts(rs.INVALID_DEFAULT_BUCKET,"Invalid default bucket '"+i+"'.");var i}static makeFromUrl(e,t){let r=null;const i="([A-Za-z0-9.\\-_]+)";const n=new RegExp("^gs://"+i+"(/(.*))?$","i");function o(e){e.path_=decodeURIComponent(e.path)}const s=t.replace(/[.]/g,"\\."),a=[{regex:n,indices:{bucket:1,path:3},postModify:function(e){"/"===e.path.charAt(e.path.length-1)&&(e.path_=e.path_.slice(0,-1))}},{regex:new RegExp(`^https?://${s}/v[A-Za-z0-9_]+/b/${i}/o(/([^?#]*).*)?$`,"i"),indices:{bucket:1,path:3},postModify:o},{regex:new RegExp(`^https?://${t===es?"(?:storage.googleapis.com|storage.cloud.google.com)":t}/${i}/([^?#]*)`,"i"),indices:{bucket:1,path:2},postModify:o}];for(let t=0;t<a.length;t++){const i=a[t],n=i.regex.exec(e);if(n){const e=n[i.indices.bucket];let t=n[i.indices.path];t||(t=""),r=new as(e,t),i.postModify(r);break}}if(null==r)throw function(e){return new ts(rs.INVALID_URL,"Invalid URL '"+e+"'.")}(e);return r}}class ls{constructor(e){this.promise_=Promise.reject(e)}getPromise(){return this.promise_}cancel(e=!1){}}
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
 */function cs(e,t,r,i){if(i<t)throw os(`Invalid value for '${e}'. Expected ${t} or greater.`);if(i>r)throw os(`Invalid value for '${e}'. Expected ${r} or less.`)}!function(e){e[e.NO_ERROR=0]="NO_ERROR",e[e.NETWORK_ERROR=1]="NETWORK_ERROR",e[e.ABORT=2]="ABORT"}(is||(is={}));
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
class hs{constructor(e,t,r,i,n,o,s,a,l,c,h,d=!0,u=!1){this.url_=e,this.method_=t,this.headers_=r,this.body_=i,this.successCodes_=n,this.additionalRetryCodes_=o,this.callback_=s,this.errorCallback_=a,this.timeout_=l,this.progressCallback_=c,this.connectionFactory_=h,this.retry=d,this.isUsingEmulator=u,this.pendingConnection_=null,this.backoffId_=null,this.canceled_=!1,this.appDelete_=!1,this.promise_=new Promise((e,t)=>{this.resolve_=e,this.reject_=t,this.start_()})}start_(){const e=(e,t)=>{if(t)return void e(!1,new ds(!1,null,!0));const r=this.connectionFactory_();this.pendingConnection_=r;const i=e=>{const t=e.loaded,r=e.lengthComputable?e.total:-1;null!==this.progressCallback_&&this.progressCallback_(t,r)};null!==this.progressCallback_&&r.addUploadProgressListener(i),r.send(this.url_,this.method_,this.isUsingEmulator,this.body_,this.headers_).then(()=>{null!==this.progressCallback_&&r.removeUploadProgressListener(i),this.pendingConnection_=null;const t=r.getErrorCode()===is.NO_ERROR,n=r.getStatus();if(!t||
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
function(e,t){const r=e>=500&&e<600,i=-1!==[408,429].indexOf(e),n=-1!==t.indexOf(e);return r||i||n}(n,this.additionalRetryCodes_)&&this.retry){const t=r.getErrorCode()===is.ABORT;return void e(!1,new ds(!1,null,t))}const o=-1!==this.successCodes_.indexOf(n);e(!0,new ds(o,r))})},t=(e,t)=>{const r=this.resolve_,i=this.reject_,n=t.connection;if(t.wasSuccessCode)try{const e=this.callback_(n,n.getResponse());!
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
function(e){return void 0!==e}(e)?r():r(e)}catch(e){i(e)}else if(null!==n){const e=new ts(rs.UNKNOWN,"An unknown error occurred, please check the error payload for server response.");e.serverResponse=n.getErrorText(),this.errorCallback_?i(this.errorCallback_(n,e)):i(e)}else if(t.canceled){i(this.appDelete_?ss():new ts(rs.CANCELED,"User canceled the upload/download."))}else{i(new ts(rs.RETRY_LIMIT_EXCEEDED,"Max retry time for operation exceeded, please try again."))}};this.canceled_?t(0,new ds(!1,null,!0)):this.backoffId_=function(e,t,r){let i=1,n=null,o=null,s=!1,a=0;function l(){return 2===a}let c=!1;function h(...e){c||(c=!0,t.apply(null,e))}function d(t){n=setTimeout(()=>{n=null,e(p,l())},t)}function u(){o&&clearTimeout(o)}function p(e,...t){if(c)return void u();if(e)return u(),void h.call(null,e,...t);if(l()||s)return u(),void h.call(null,e,...t);let r;i<64&&(i*=2),1===a?(a=2,r=0):r=1e3*(i+Math.random()),d(r)}let f=!1;function g(e){f||(f=!0,u(),c||(null!==n?(e||(a=2),clearTimeout(n),d(0)):e||(a=1)))}return d(0),o=setTimeout(()=>{s=!0,g(!0)},r),g}(e,t,this.timeout_)}getPromise(){return this.promise_}cancel(e){this.canceled_=!0,this.appDelete_=e||!1,null!==this.backoffId_&&(0,this.backoffId_)(!1),null!==this.pendingConnection_&&this.pendingConnection_.abort()}}class ds{constructor(e,t,r){this.wasSuccessCode=e,this.connection=t,this.canceled=!!r}}function us(e,t,r,i,n,o,s=!0,a=!1){const l=function(e){const t=encodeURIComponent;let r="?";for(const i in e)e.hasOwnProperty(i)&&(r=r+(t(i)+"=")+t(e[i])+"&");return r=r.slice(0,-1),r}(e.urlParams),c=e.url+l,h=Object.assign({},e.headers);return function(e,t){t&&(e["X-Firebase-GMPID"]=t)}(h,t),function(e,t){null!==t&&t.length>0&&(e.Authorization="Firebase "+t)}(h,r),function(e,t){e["X-Firebase-Storage-Version"]="webjs/"+(null!=t?t:"AppManager")}(h,o),function(e,t){null!==t&&(e["X-Firebase-AppCheck"]=t)}(h,i),new hs(c,e.method,h,e.body,e.successCodes,e.additionalRetryCodes,e.handler,e.errorHandler,e.timeout,e.progressCallback,n,s,a)}
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
class ps{constructor(e,t){this._service=e,this._location=t instanceof as?t:as.makeFromUrl(t,e.host)}toString(){return"gs://"+this._location.bucket+"/"+this._location.path}_newRef(e,t){return new ps(e,t)}get root(){const e=new as(this._location.bucket,"");return this._newRef(this._service,e)}get bucket(){return this._location.bucket}get fullPath(){return this._location.path}get name(){return function(e){const t=e.lastIndexOf("/",e.length-2);return-1===t?e:e.slice(t+1)}(this._location.path)}get storage(){return this._service}get parent(){const e=function(e){if(0===e.length)return null;const t=e.lastIndexOf("/");return-1===t?"":e.slice(0,t)}(this._location.path);if(null===e)return null;const t=new as(this._location.bucket,e);return new ps(this._service,t)}_throwIfRoot(e){if(""===this._location.path)throw function(e){return new ts(rs.INVALID_ROOT_OPERATION,"The operation '"+e+"' cannot be performed on a root reference, create a non-root reference using child, such as .child('file.png').")}(e)}}function fs(e,t){const r=null==t?void 0:t.storageBucket;return null==r?null:as.makeFromBucketSpec(r,e)}class gs{constructor(e,t,r,i,n,o=!1){this.app=e,this._authProvider=t,this._appCheckProvider=r,this._url=i,this._firebaseVersion=n,this._isUsingEmulator=o,this._bucket=null,this._host=es,this._protocol="https",this._appId=null,this._deleted=!1,this._maxOperationRetryTime=12e4,this._maxUploadRetryTime=6e5,this._requests=new Set,this._bucket=null!=i?as.makeFromBucketSpec(i,this._host):fs(this._host,this.app.options)}get host(){return this._host}set host(e){this._host=e,null!=this._url?this._bucket=as.makeFromBucketSpec(this._url,e):this._bucket=fs(e,this.app.options)}get maxUploadRetryTime(){return this._maxUploadRetryTime}set maxUploadRetryTime(e){cs("time",0,Number.POSITIVE_INFINITY,e),this._maxUploadRetryTime=e}get maxOperationRetryTime(){return this._maxOperationRetryTime}set maxOperationRetryTime(e){cs("time",0,Number.POSITIVE_INFINITY,e),this._maxOperationRetryTime=e}async _getAuthToken(){if(this._overrideAuthToken)return this._overrideAuthToken;const e=this._authProvider.getImmediate({optional:!0});if(e){const t=await e.getToken();if(null!==t)return t.accessToken}return null}async _getAppCheckToken(){if(ci(this.app)&&this.app.settings.appCheckToken)return this.app.settings.appCheckToken;const e=this._appCheckProvider.getImmediate({optional:!0});if(e){return(await e.getToken()).token}return null}_delete(){return this._deleted||(this._deleted=!0,this._requests.forEach(e=>e.cancel()),this._requests.clear()),Promise.resolve()}_makeStorageReference(e){return new ps(this,e)}_makeRequest(e,t,r,i,n=!0){if(this._deleted)return new ls(ss());{const o=us(e,this._appId,r,i,t,this._firebaseVersion,n,this._isUsingEmulator);return this._requests.add(o),o.getPromise().then(()=>this._requests.delete(o),()=>this._requests.delete(o)),o}}async makeRequestWithTokens(e,t){const[r,i]=await Promise.all([this._getAuthToken(),this._getAppCheckToken()]);return this._makeRequest(e,t,r,i).getPromise()}}const ms="@firebase/storage",vs="0.13.14";function ys(e,{instanceIdentifier:t}){const r=e.getProvider("app").getImmediate(),i=e.getProvider("auth-internal"),n=e.getProvider("app-check-internal");return new gs(r,i,n,t,di)}li(new nr("storage",ys,"PUBLIC").setMultipleInstances(!0)),ui(ms,vs,""),ui(ms,vs,"esm2017");
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
class bs{constructor(e,t,r,i){this.app=e,this.auth=null,this.messaging=null,this.appCheck=null,this.serverAppAppCheckToken=null,ci(e)&&e.settings.appCheckToken&&(this.serverAppAppCheckToken=e.settings.appCheckToken),this.auth=t.getImmediate({optional:!0}),this.messaging=r.getImmediate({optional:!0}),this.auth||t.get().then(e=>this.auth=e,()=>{}),this.messaging||r.get().then(e=>this.messaging=e,()=>{}),this.appCheck||null==i||i.get().then(e=>this.appCheck=e,()=>{})}async getAuthToken(){if(this.auth)try{const e=await this.auth.getToken();return null==e?void 0:e.accessToken}catch(e){return}}async getMessagingToken(){if(this.messaging&&"Notification"in self&&"granted"===Notification.permission)try{return await this.messaging.getToken()}catch(e){return}}async getAppCheckToken(e){if(this.serverAppAppCheckToken)return this.serverAppAppCheckToken;if(this.appCheck){const t=e?await this.appCheck.getLimitedUseToken():await this.appCheck.getToken();return t.error?null:t.token}return null}async getContext(e){return{authToken:await this.getAuthToken(),messagingToken:await this.getMessagingToken(),appCheckToken:await this.getAppCheckToken(e)}}}
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
 */const _s="us-central1";class ws{constructor(e,t,r,i,n=_s,o=(...e)=>fetch(...e)){this.app=e,this.fetchImpl=o,this.emulatorOrigin=null,this.contextProvider=new bs(e,t,r,i),this.cancelAllRequests=new Promise(e=>{this.deleteService=()=>Promise.resolve(e())});try{const e=new URL(n);this.customDomain=e.origin+("/"===e.pathname?"":e.pathname),this.region=_s}catch(e){this.customDomain=null,this.region=n}}_delete(){return this.deleteService()}_url(e){const t=this.app.options.projectId;if(null!==this.emulatorOrigin){return`${this.emulatorOrigin}/${t}/${this.region}/${e}`}return null!==this.customDomain?`${this.customDomain}/${e}`:`https://${this.region}-${t}.cloudfunctions.net/${e}`}}const xs="@firebase/functions",Ss="0.12.9";!function(e){li(new nr("functions",(e,{instanceIdentifier:t})=>{const r=e.getProvider("app").getImmediate(),i=e.getProvider("auth-internal"),n=e.getProvider("messaging-internal"),o=e.getProvider("app-check-internal");return new ws(r,i,n,o,t)},"PUBLIC").setMultipleInstances(!0)),ui(xs,Ss,e),ui(xs,Ss,"esm2017")}();
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
ui("firebase","11.10.0","app");const Es=Te(null),Ts=Te("idle"),As=Te(null),Is=Te(!1);Ae(()=>({authUser:Es.get(),authState:Ts.get(),error:As.get(),initialized:Is.get()}));const Cs=Te({showCompleted:!0,priority:"all",tag:"all",search:""}),ks=Te({status:"idle",documents:[],error:null,isListening:!1,lastUpdated:null,currentPage:1,pageSize:5,hasNextPage:!1,hasPreviousPage:!1,queryDescription:"All todos"}),Os=Te(null);if(Ae(()=>{const e=Os.get();return e?e.state.get():ks.get()}),Ae(()=>Cs.get()),"object"==typeof globalThis){const e=globalThis;e.__dfSetTodoDemoState=function(e){if(Os.get())throw new Error("Cannot set demo state after the todo store has been initialized.");ks.set(e)},e.__dfSetTodoDemoFilters=function(e){if(Os.get())throw new Error("Cannot set demo filters after the todo store has been initialized.");Cs.set(e)}}const Ns=Te({status:"idle",documents:[],error:null,isListening:!1,lastUpdated:null,currentPage:1,pageSize:50,hasNextPage:!1,hasPreviousPage:!1,queryDescription:"Latest messages"}),Ps=Te("idle"),Rs=Te(null),Ds=Te(null);Ae(()=>{const e=Ds.get();return e?e.state.get():Ns.get()}),Ae(()=>({status:Ps.get(),error:Rs.get()}));const $s=Te("idle"),Ls=Te(0),Us=Te(null),Ms=Te(null);Ae(()=>({status:$s.get(),progress:Ls.get(),error:Us.get(),uploadedFile:Ms.get()})),Te(null);const js=Te({status:"idle",data:null,error:null,lastCalled:null}),Fs=Te({status:"idle",data:null,error:null,lastCalled:null}),Vs=Te({status:"idle",data:null,error:null,lastCalled:null});Ae(()=>js.get()),Ae(()=>Fs.get()),Ae(()=>Vs.get());const Bs=Te({...{status:"idle",documents:[],error:null,isListening:!1,lastUpdated:null,currentPage:1,pageSize:20,hasNextPage:!1,hasPreviousPage:!1,queryDescription:"Awaiting authentication"}}),zs=Te(null);Te(null),Te(null);const Hs=Ae(()=>{const e=zs.get();return e?e.state.get():Bs.get()});Ae(()=>{const e=Hs.get().documents,t=e.length,r=t>0?e[0].recordedAt??null:null,i={pushups:{count:0,totalValue:0},squats:{count:0,totalValue:0},plank:{count:0,totalValue:0},dumbbells:{count:0,totalValue:0},hang:{count:0,totalValue:0}};return e.forEach(e=>{i[e.exerciseType].count+=1,i[e.exerciseType].totalValue+=e.value}),{totalExercises:t,entryCount:t,lastEntryAt:r,byType:i}}),mo.fromDate(new Date("2024-01-15")),mo.fromDate(new Date("2024-01-16")),mo.fromDate(new Date("2024-01-20")),mo.fromDate(new Date("2024-01-16")),mo.fromDate(new Date("2024-01-16")),mo.fromDate(new Date("2024-01-22")),mo.fromDate(new Date("2024-01-17")),mo.fromDate(new Date("2024-01-17")),mo.fromDate(new Date("2024-01-25")),mo.fromDate(new Date("2024-01-18")),mo.fromDate(new Date("2024-01-18")),mo.fromDate(new Date("2024-01-28")),mo.fromDate(new Date("2024-01-19")),mo.fromDate(new Date("2024-01-19")),mo.fromDate(new Date("2024-02-05")),mo.fromDate(new Date("2024-01-20")),mo.fromDate(new Date("2024-01-20")),mo.fromDate(new Date("2024-02-10")),mo.fromDate(new Date("2024-01-21")),mo.fromDate(new Date("2024-01-21")),mo.fromDate(new Date("2024-02-15")),mo.fromDate(new Date("2024-01-22")),mo.fromDate(new Date("2024-01-22")),mo.fromDate(new Date("2024-02-12")),mo.fromDate(new Date("2024-01-23")),mo.fromDate(new Date("2024-01-23")),mo.fromDate(new Date("2024-02-01")),mo.fromDate(new Date("2024-01-24")),mo.fromDate(new Date("2024-01-24")),mo.fromDate(new Date("2024-02-20")),mo.fromDate(new Date("2024-01-25")),mo.fromDate(new Date("2024-01-25")),mo.fromDate(new Date("2024-02-18")),mo.fromDate(new Date("2024-01-26")),mo.fromDate(new Date("2024-01-26")),mo.fromDate(new Date("2024-02-08"));const qs=Te([]),Ws=Te(!1),Ks=Te("");Ae(()=>({users:qs.get(),loading:Ws.get(),error:Ks.get()}));
/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const Gs=j(class extends F{constructor(e){if(super(e),e.type!==L||"class"!==e.name||e.strings?.length>2)throw Error("`classMap()` can only be used in the `class` attribute and must be the only part in the attribute.")}render(e){return" "+Object.keys(e).filter(t=>e[t]).join(" ")+" "}update(e,[t]){if(void 0===this.st){this.st=new Set,void 0!==e.strings&&(this.nt=new Set(e.strings.join(" ").split(/\s/).filter(e=>""!==e)));for(const e in t)t[e]&&!this.nt?.has(e)&&this.st.add(e);return this.render(t)}const r=e.element.classList;for(const e of this.st)e in t||(r.remove(e),this.st.delete(e));for(const e in t){const i=!!t[e];i===this.st.has(e)||this.nt?.has(e)||(i?(r.add(e),this.st.add(e)):(r.remove(e),this.st.delete(e)))}return ae}}),Xs="cubic-bezier(0.2, 0, 0, 1)";
/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */
/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */
class Js extends Je{constructor(){super(...arguments),this.disabled=!1,this.error=!1,this.focused=!1,this.label="",this.noAsterisk=!1,this.populated=!1,this.required=!1,this.resizable=!1,this.supportingText="",this.errorText="",this.count=-1,this.max=-1,this.hasStart=!1,this.hasEnd=!1,this.isAnimating=!1,this.refreshErrorAlert=!1,this.disableTransitions=!1}get counterText(){const e=this.count??-1,t=this.max??-1;return e<0||t<=0?"":`${e} / ${t}`}get supportingOrErrorText(){return this.error&&this.errorText?this.errorText:this.supportingText}reannounceError(){this.refreshErrorAlert=!0}update(e){e.has("disabled")&&void 0!==e.get("disabled")&&(this.disableTransitions=!0),this.disabled&&this.focused&&(e.set("focused",!0),this.focused=!1),this.animateLabelIfNeeded({wasFocused:e.get("focused"),wasPopulated:e.get("populated")}),super.update(e)}render(){const e=this.renderLabel(!0),t=this.renderLabel(!1),r=this.renderOutline?.(e),i={disabled:this.disabled,"disable-transitions":this.disableTransitions,error:this.error&&!this.disabled,focused:this.focused,"with-start":this.hasStart,"with-end":this.hasEnd,populated:this.populated,resizable:this.resizable,required:this.required,"no-label":!this.label};return se`
      <div class="field ${Gs(i)}">
        <div class="container-overflow">
          ${this.renderBackground?.()}
          <slot name="container"></slot>
          ${this.renderStateLayer?.()} ${this.renderIndicator?.()} ${r}
          <div class="container">
            <div class="start">
              <slot name="start"></slot>
            </div>
            <div class="middle">
              <div class="label-wrapper">
                ${t} ${r?le:e}
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
    `}updated(e){(e.has("supportingText")||e.has("errorText")||e.has("count")||e.has("max"))&&this.updateSlottedAriaDescribedBy(),this.refreshErrorAlert&&requestAnimationFrame(()=>{this.refreshErrorAlert=!1}),this.disableTransitions&&requestAnimationFrame(()=>{this.disableTransitions=!1})}renderSupportingText(){const{supportingOrErrorText:e,counterText:t}=this;if(!e&&!t)return le;const r=se`<span>${e}</span>`,i=t?se`<span class="counter">${t}</span>`:le,n=this.error&&this.errorText&&!this.refreshErrorAlert;return se`
      <div class="supporting-text" role=${n?"alert":le}>${r}${i}</div>
      <slot
        name="aria-describedby"
        @slotchange=${this.updateSlottedAriaDescribedBy}></slot>
    `}updateSlottedAriaDescribedBy(){for(const e of this.slottedAriaDescribedBy)Se(se`${this.supportingOrErrorText} ${this.counterText}`,e),e.setAttribute("hidden","")}renderLabel(e){if(!this.label)return le;let t;t=e?this.focused||this.populated||this.isAnimating:!this.focused&&!this.populated&&!this.isAnimating;const r={hidden:!t,floating:e,resting:!e},i=`${this.label}${this.required&&!this.noAsterisk?"*":""}`;return se`
      <span class="label ${Gs(r)}" aria-hidden=${!t}
        >${i}</span
      >
    `}animateLabelIfNeeded({wasFocused:e,wasPopulated:t}){if(!this.label)return;e??=this.focused,t??=this.populated;(e||t)!==(this.focused||this.populated)&&(this.isAnimating=!0,this.labelAnimation?.cancel(),this.labelAnimation=this.floatingLabelEl?.animate(this.getLabelKeyframes(),{duration:150,easing:Xs}),this.labelAnimation?.addEventListener("finish",()=>{this.isAnimating=!1}))}getLabelKeyframes(){const{floatingLabelEl:e,restingLabelEl:t}=this;if(!e||!t)return[];const{x:r,y:i,height:n}=e.getBoundingClientRect(),{x:o,y:s,height:a}=t.getBoundingClientRect(),l=e.scrollWidth,c=t.scrollWidth,h=c/l,d=`translateX(${o-r}px) translateY(${s-i+Math.round((a-n*h)/2)}px) scale(${h})`,u="translateX(0) translateY(0) scale(1)",p=t.clientWidth,f=c>p?p/h+"px":"";return this.focused||this.populated?[{transform:d,width:f},{transform:u,width:f}]:[{transform:u,width:f},{transform:d,width:f}]}getSurfacePositionClientRect(){return this.containerEl.getBoundingClientRect()}}Ei([tt({type:Boolean})],Js.prototype,"disabled",void 0),Ei([tt({type:Boolean})],Js.prototype,"error",void 0),Ei([tt({type:Boolean})],Js.prototype,"focused",void 0),Ei([tt()],Js.prototype,"label",void 0),Ei([tt({type:Boolean,attribute:"no-asterisk"})],Js.prototype,"noAsterisk",void 0),Ei([tt({type:Boolean})],Js.prototype,"populated",void 0),Ei([tt({type:Boolean})],Js.prototype,"required",void 0),Ei([tt({type:Boolean})],Js.prototype,"resizable",void 0),Ei([tt({attribute:"supporting-text"})],Js.prototype,"supportingText",void 0),Ei([tt({attribute:"error-text"})],Js.prototype,"errorText",void 0),Ei([tt({type:Number})],Js.prototype,"count",void 0),Ei([tt({type:Number})],Js.prototype,"max",void 0),Ei([tt({type:Boolean,attribute:"has-start"})],Js.prototype,"hasStart",void 0),Ei([tt({type:Boolean,attribute:"has-end"})],Js.prototype,"hasEnd",void 0),Ei([ot({slot:"aria-describedby"})],Js.prototype,"slottedAriaDescribedBy",void 0),Ei([rt()],Js.prototype,"isAnimating",void 0),Ei([rt()],Js.prototype,"refreshErrorAlert",void 0),Ei([rt()],Js.prototype,"disableTransitions",void 0),Ei([nt(".label.floating")],Js.prototype,"floatingLabelEl",void 0),Ei([nt(".label.resting")],Js.prototype,"restingLabelEl",void 0),Ei([nt(".container")],Js.prototype,"containerEl",void 0);
/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */
class Ys extends Js{renderOutline(e){return se`
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
 */const Zs=Pe`@layer styles{:host{--_bottom-space: var(--md-outlined-field-bottom-space, 16px);--_content-color: var(--md-outlined-field-content-color, var(--md-sys-color-on-surface, #1d1b20));--_content-font: var(--md-outlined-field-content-font, var(--md-sys-typescale-body-large-font, var(--md-ref-typeface-plain, Roboto)));--_content-line-height: var(--md-outlined-field-content-line-height, var(--md-sys-typescale-body-large-line-height, 1.5rem));--_content-size: var(--md-outlined-field-content-size, var(--md-sys-typescale-body-large-size, 1rem));--_content-space: var(--md-outlined-field-content-space, 16px);--_content-weight: var(--md-outlined-field-content-weight, var(--md-sys-typescale-body-large-weight, var(--md-ref-typeface-weight-regular, 400)));--_disabled-content-color: var(--md-outlined-field-disabled-content-color, var(--md-sys-color-on-surface, #1d1b20));--_disabled-content-opacity: var(--md-outlined-field-disabled-content-opacity, 0.38);--_disabled-label-text-color: var(--md-outlined-field-disabled-label-text-color, var(--md-sys-color-on-surface, #1d1b20));--_disabled-label-text-opacity: var(--md-outlined-field-disabled-label-text-opacity, 0.38);--_disabled-leading-content-color: var(--md-outlined-field-disabled-leading-content-color, var(--md-sys-color-on-surface, #1d1b20));--_disabled-leading-content-opacity: var(--md-outlined-field-disabled-leading-content-opacity, 0.38);--_disabled-outline-color: var(--md-outlined-field-disabled-outline-color, var(--md-sys-color-on-surface, #1d1b20));--_disabled-outline-opacity: var(--md-outlined-field-disabled-outline-opacity, 0.12);--_disabled-outline-width: var(--md-outlined-field-disabled-outline-width, 1px);--_disabled-supporting-text-color: var(--md-outlined-field-disabled-supporting-text-color, var(--md-sys-color-on-surface, #1d1b20));--_disabled-supporting-text-opacity: var(--md-outlined-field-disabled-supporting-text-opacity, 0.38);--_disabled-trailing-content-color: var(--md-outlined-field-disabled-trailing-content-color, var(--md-sys-color-on-surface, #1d1b20));--_disabled-trailing-content-opacity: var(--md-outlined-field-disabled-trailing-content-opacity, 0.38);--_error-content-color: var(--md-outlined-field-error-content-color, var(--md-sys-color-on-surface, #1d1b20));--_error-focus-content-color: var(--md-outlined-field-error-focus-content-color, var(--md-sys-color-on-surface, #1d1b20));--_error-focus-label-text-color: var(--md-outlined-field-error-focus-label-text-color, var(--md-sys-color-error, #b3261e));--_error-focus-leading-content-color: var(--md-outlined-field-error-focus-leading-content-color, var(--md-sys-color-on-surface-variant, #49454f));--_error-focus-outline-color: var(--md-outlined-field-error-focus-outline-color, var(--md-sys-color-error, #b3261e));--_error-focus-supporting-text-color: var(--md-outlined-field-error-focus-supporting-text-color, var(--md-sys-color-error, #b3261e));--_error-focus-trailing-content-color: var(--md-outlined-field-error-focus-trailing-content-color, var(--md-sys-color-error, #b3261e));--_error-hover-content-color: var(--md-outlined-field-error-hover-content-color, var(--md-sys-color-on-surface, #1d1b20));--_error-hover-label-text-color: var(--md-outlined-field-error-hover-label-text-color, var(--md-sys-color-on-error-container, #410e0b));--_error-hover-leading-content-color: var(--md-outlined-field-error-hover-leading-content-color, var(--md-sys-color-on-surface-variant, #49454f));--_error-hover-outline-color: var(--md-outlined-field-error-hover-outline-color, var(--md-sys-color-on-error-container, #410e0b));--_error-hover-supporting-text-color: var(--md-outlined-field-error-hover-supporting-text-color, var(--md-sys-color-error, #b3261e));--_error-hover-trailing-content-color: var(--md-outlined-field-error-hover-trailing-content-color, var(--md-sys-color-on-error-container, #410e0b));--_error-label-text-color: var(--md-outlined-field-error-label-text-color, var(--md-sys-color-error, #b3261e));--_error-leading-content-color: var(--md-outlined-field-error-leading-content-color, var(--md-sys-color-on-surface-variant, #49454f));--_error-outline-color: var(--md-outlined-field-error-outline-color, var(--md-sys-color-error, #b3261e));--_error-supporting-text-color: var(--md-outlined-field-error-supporting-text-color, var(--md-sys-color-error, #b3261e));--_error-trailing-content-color: var(--md-outlined-field-error-trailing-content-color, var(--md-sys-color-error, #b3261e));--_focus-content-color: var(--md-outlined-field-focus-content-color, var(--md-sys-color-on-surface, #1d1b20));--_focus-label-text-color: var(--md-outlined-field-focus-label-text-color, var(--md-sys-color-primary, #6750a4));--_focus-leading-content-color: var(--md-outlined-field-focus-leading-content-color, var(--md-sys-color-on-surface-variant, #49454f));--_focus-outline-color: var(--md-outlined-field-focus-outline-color, var(--md-sys-color-primary, #6750a4));--_focus-outline-width: var(--md-outlined-field-focus-outline-width, 3px);--_focus-supporting-text-color: var(--md-outlined-field-focus-supporting-text-color, var(--md-sys-color-on-surface-variant, #49454f));--_focus-trailing-content-color: var(--md-outlined-field-focus-trailing-content-color, var(--md-sys-color-on-surface-variant, #49454f));--_hover-content-color: var(--md-outlined-field-hover-content-color, var(--md-sys-color-on-surface, #1d1b20));--_hover-label-text-color: var(--md-outlined-field-hover-label-text-color, var(--md-sys-color-on-surface, #1d1b20));--_hover-leading-content-color: var(--md-outlined-field-hover-leading-content-color, var(--md-sys-color-on-surface-variant, #49454f));--_hover-outline-color: var(--md-outlined-field-hover-outline-color, var(--md-sys-color-on-surface, #1d1b20));--_hover-outline-width: var(--md-outlined-field-hover-outline-width, 1px);--_hover-supporting-text-color: var(--md-outlined-field-hover-supporting-text-color, var(--md-sys-color-on-surface-variant, #49454f));--_hover-trailing-content-color: var(--md-outlined-field-hover-trailing-content-color, var(--md-sys-color-on-surface-variant, #49454f));--_label-text-color: var(--md-outlined-field-label-text-color, var(--md-sys-color-on-surface-variant, #49454f));--_label-text-font: var(--md-outlined-field-label-text-font, var(--md-sys-typescale-body-large-font, var(--md-ref-typeface-plain, Roboto)));--_label-text-line-height: var(--md-outlined-field-label-text-line-height, var(--md-sys-typescale-body-large-line-height, 1.5rem));--_label-text-padding-bottom: var(--md-outlined-field-label-text-padding-bottom, 8px);--_label-text-populated-line-height: var(--md-outlined-field-label-text-populated-line-height, var(--md-sys-typescale-body-small-line-height, 1rem));--_label-text-populated-size: var(--md-outlined-field-label-text-populated-size, var(--md-sys-typescale-body-small-size, 0.75rem));--_label-text-size: var(--md-outlined-field-label-text-size, var(--md-sys-typescale-body-large-size, 1rem));--_label-text-weight: var(--md-outlined-field-label-text-weight, var(--md-sys-typescale-body-large-weight, var(--md-ref-typeface-weight-regular, 400)));--_leading-content-color: var(--md-outlined-field-leading-content-color, var(--md-sys-color-on-surface-variant, #49454f));--_leading-space: var(--md-outlined-field-leading-space, 16px);--_outline-color: var(--md-outlined-field-outline-color, var(--md-sys-color-outline, #79747e));--_outline-label-padding: var(--md-outlined-field-outline-label-padding, 4px);--_outline-width: var(--md-outlined-field-outline-width, 1px);--_supporting-text-color: var(--md-outlined-field-supporting-text-color, var(--md-sys-color-on-surface-variant, #49454f));--_supporting-text-font: var(--md-outlined-field-supporting-text-font, var(--md-sys-typescale-body-small-font, var(--md-ref-typeface-plain, Roboto)));--_supporting-text-leading-space: var(--md-outlined-field-supporting-text-leading-space, 16px);--_supporting-text-line-height: var(--md-outlined-field-supporting-text-line-height, var(--md-sys-typescale-body-small-line-height, 1rem));--_supporting-text-size: var(--md-outlined-field-supporting-text-size, var(--md-sys-typescale-body-small-size, 0.75rem));--_supporting-text-top-space: var(--md-outlined-field-supporting-text-top-space, 4px);--_supporting-text-trailing-space: var(--md-outlined-field-supporting-text-trailing-space, 16px);--_supporting-text-weight: var(--md-outlined-field-supporting-text-weight, var(--md-sys-typescale-body-small-weight, var(--md-ref-typeface-weight-regular, 400)));--_top-space: var(--md-outlined-field-top-space, 16px);--_trailing-content-color: var(--md-outlined-field-trailing-content-color, var(--md-sys-color-on-surface-variant, #49454f));--_trailing-space: var(--md-outlined-field-trailing-space, 16px);--_with-leading-content-leading-space: var(--md-outlined-field-with-leading-content-leading-space, 12px);--_with-trailing-content-trailing-space: var(--md-outlined-field-with-trailing-content-trailing-space, 12px);--_container-shape-start-start: var(--md-outlined-field-container-shape-start-start, var(--md-outlined-field-container-shape, var(--md-sys-shape-corner-extra-small, 4px)));--_container-shape-start-end: var(--md-outlined-field-container-shape-start-end, var(--md-outlined-field-container-shape, var(--md-sys-shape-corner-extra-small, 4px)));--_container-shape-end-end: var(--md-outlined-field-container-shape-end-end, var(--md-outlined-field-container-shape, var(--md-sys-shape-corner-extra-small, 4px)));--_container-shape-end-start: var(--md-outlined-field-container-shape-end-start, var(--md-outlined-field-container-shape, var(--md-sys-shape-corner-extra-small, 4px)))}.outline{border-color:var(--_outline-color);border-radius:inherit;display:flex;pointer-events:none;height:100%;position:absolute;width:100%;z-index:1}.outline-start::before,.outline-start::after,.outline-panel-inactive::before,.outline-panel-inactive::after,.outline-panel-active::before,.outline-panel-active::after,.outline-end::before,.outline-end::after{border:inherit;content:"";inset:0;position:absolute}.outline-start,.outline-end{border:inherit;border-radius:inherit;box-sizing:border-box;position:relative}.outline-start::before,.outline-start::after,.outline-end::before,.outline-end::after{border-bottom-style:solid;border-top-style:solid}.outline-start::after,.outline-end::after{opacity:0;transition:opacity 150ms cubic-bezier(0.2, 0, 0, 1)}.focused .outline-start::after,.focused .outline-end::after{opacity:1}.outline-start::before,.outline-start::after{border-inline-start-style:solid;border-inline-end-style:none;border-start-start-radius:inherit;border-start-end-radius:0;border-end-start-radius:inherit;border-end-end-radius:0;margin-inline-end:var(--_outline-label-padding)}.outline-end{flex-grow:1;margin-inline-start:calc(-1*var(--_outline-label-padding))}.outline-end::before,.outline-end::after{border-inline-start-style:none;border-inline-end-style:solid;border-start-start-radius:0;border-start-end-radius:inherit;border-end-start-radius:0;border-end-end-radius:inherit}.outline-notch{align-items:flex-start;border:inherit;display:flex;margin-inline-start:calc(-1*var(--_outline-label-padding));margin-inline-end:var(--_outline-label-padding);max-width:calc(100% - var(--_leading-space) - var(--_trailing-space));padding:0 var(--_outline-label-padding);position:relative}.no-label .outline-notch{display:none}.outline-panel-inactive,.outline-panel-active{border:inherit;border-bottom-style:solid;inset:0;position:absolute}.outline-panel-inactive::before,.outline-panel-inactive::after,.outline-panel-active::before,.outline-panel-active::after{border-top-style:solid;border-bottom:none;bottom:auto;transform:scaleX(1);transition:transform 150ms cubic-bezier(0.2, 0, 0, 1)}.outline-panel-inactive::before,.outline-panel-active::before{right:50%;transform-origin:top left}.outline-panel-inactive::after,.outline-panel-active::after{left:50%;transform-origin:top right}.populated .outline-panel-inactive::before,.populated .outline-panel-inactive::after,.populated .outline-panel-active::before,.populated .outline-panel-active::after,.focused .outline-panel-inactive::before,.focused .outline-panel-inactive::after,.focused .outline-panel-active::before,.focused .outline-panel-active::after{transform:scaleX(0)}.outline-panel-active{opacity:0;transition:opacity 150ms cubic-bezier(0.2, 0, 0, 1)}.focused .outline-panel-active{opacity:1}.outline-label{display:flex;max-width:100%;transform:translateY(calc(-100% + var(--_label-text-padding-bottom)))}.outline-start,.field:not(.with-start) .content ::slotted(*){padding-inline-start:max(var(--_leading-space),max(var(--_container-shape-start-start),var(--_container-shape-end-start)) + var(--_outline-label-padding))}.field:not(.with-start) .label-wrapper{margin-inline-start:max(var(--_leading-space),max(var(--_container-shape-start-start),var(--_container-shape-end-start)) + var(--_outline-label-padding))}.field:not(.with-end) .content ::slotted(*){padding-inline-end:max(var(--_trailing-space),max(var(--_container-shape-start-end),var(--_container-shape-end-end)))}.field:not(.with-end) .label-wrapper{margin-inline-end:max(var(--_trailing-space),max(var(--_container-shape-start-end),var(--_container-shape-end-end)))}.outline-start::before,.outline-end::before,.outline-panel-inactive,.outline-panel-inactive::before,.outline-panel-inactive::after{border-width:var(--_outline-width)}:hover .outline{border-color:var(--_hover-outline-color);color:var(--_hover-outline-color)}:hover .outline-start::before,:hover .outline-end::before,:hover .outline-panel-inactive,:hover .outline-panel-inactive::before,:hover .outline-panel-inactive::after{border-width:var(--_hover-outline-width)}.focused .outline{border-color:var(--_focus-outline-color);color:var(--_focus-outline-color)}.outline-start::after,.outline-end::after,.outline-panel-active,.outline-panel-active::before,.outline-panel-active::after{border-width:var(--_focus-outline-width)}.disabled .outline{border-color:var(--_disabled-outline-color);color:var(--_disabled-outline-color)}.disabled .outline-start,.disabled .outline-end,.disabled .outline-panel-inactive{opacity:var(--_disabled-outline-opacity)}.disabled .outline-start::before,.disabled .outline-end::before,.disabled .outline-panel-inactive,.disabled .outline-panel-inactive::before,.disabled .outline-panel-inactive::after{border-width:var(--_disabled-outline-width)}.error .outline{border-color:var(--_error-outline-color);color:var(--_error-outline-color)}.error:hover .outline{border-color:var(--_error-hover-outline-color);color:var(--_error-hover-outline-color)}.error.focused .outline{border-color:var(--_error-focus-outline-color);color:var(--_error-focus-outline-color)}.resizable .container{bottom:var(--_focus-outline-width);inset-inline-end:var(--_focus-outline-width);clip-path:inset(var(--_focus-outline-width) 0 0 var(--_focus-outline-width))}.resizable .container>*{top:var(--_focus-outline-width);inset-inline-start:var(--_focus-outline-width)}.resizable .container:dir(rtl){clip-path:inset(var(--_focus-outline-width) var(--_focus-outline-width) 0 0)}}@layer hcm{@media(forced-colors: active){.disabled .outline{border-color:GrayText;color:GrayText}.disabled :is(.outline-start,.outline-end,.outline-panel-inactive){opacity:1}}}
`,Qs=Pe`:host{display:inline-flex;resize:both}.field{display:flex;flex:1;flex-direction:column;writing-mode:horizontal-tb;max-width:100%}.container-overflow{border-start-start-radius:var(--_container-shape-start-start);border-start-end-radius:var(--_container-shape-start-end);border-end-end-radius:var(--_container-shape-end-end);border-end-start-radius:var(--_container-shape-end-start);display:flex;height:100%;position:relative}.container{align-items:center;border-radius:inherit;display:flex;flex:1;max-height:100%;min-height:100%;min-width:min-content;position:relative}.field,.container-overflow{resize:inherit}.resizable:not(.disabled) .container{resize:inherit;overflow:hidden}.disabled{pointer-events:none}slot[name=container]{border-radius:inherit}slot[name=container]::slotted(*){border-radius:inherit;inset:0;pointer-events:none;position:absolute}@layer styles{.start,.middle,.end{display:flex;box-sizing:border-box;height:100%;position:relative}.start{color:var(--_leading-content-color)}.end{color:var(--_trailing-content-color)}.start,.end{align-items:center;justify-content:center}.with-start .start{margin-inline:var(--_with-leading-content-leading-space) var(--_content-space)}.with-end .end{margin-inline:var(--_content-space) var(--_with-trailing-content-trailing-space)}.middle{align-items:stretch;align-self:baseline;flex:1}.content{color:var(--_content-color);display:flex;flex:1;opacity:0;transition:opacity 83ms cubic-bezier(0.2, 0, 0, 1)}.no-label .content,.focused .content,.populated .content{opacity:1;transition-delay:67ms}:is(.disabled,.disable-transitions) .content{transition:none}.content ::slotted(*){all:unset;color:currentColor;font-family:var(--_content-font);font-size:var(--_content-size);line-height:var(--_content-line-height);font-weight:var(--_content-weight);width:100%;overflow-wrap:revert;white-space:revert}.content ::slotted(:not(textarea)){padding-top:var(--_top-space);padding-bottom:var(--_bottom-space)}.content ::slotted(textarea){margin-top:var(--_top-space);margin-bottom:var(--_bottom-space)}:hover .content{color:var(--_hover-content-color)}:hover .start{color:var(--_hover-leading-content-color)}:hover .end{color:var(--_hover-trailing-content-color)}.focused .content{color:var(--_focus-content-color)}.focused .start{color:var(--_focus-leading-content-color)}.focused .end{color:var(--_focus-trailing-content-color)}.disabled .content{color:var(--_disabled-content-color)}.disabled.no-label .content,.disabled.focused .content,.disabled.populated .content{opacity:var(--_disabled-content-opacity)}.disabled .start{color:var(--_disabled-leading-content-color);opacity:var(--_disabled-leading-content-opacity)}.disabled .end{color:var(--_disabled-trailing-content-color);opacity:var(--_disabled-trailing-content-opacity)}.error .content{color:var(--_error-content-color)}.error .start{color:var(--_error-leading-content-color)}.error .end{color:var(--_error-trailing-content-color)}.error:hover .content{color:var(--_error-hover-content-color)}.error:hover .start{color:var(--_error-hover-leading-content-color)}.error:hover .end{color:var(--_error-hover-trailing-content-color)}.error.focused .content{color:var(--_error-focus-content-color)}.error.focused .start{color:var(--_error-focus-leading-content-color)}.error.focused .end{color:var(--_error-focus-trailing-content-color)}}@layer hcm{@media(forced-colors: active){.disabled :is(.start,.content,.end){color:GrayText;opacity:1}}}@layer styles{.label{box-sizing:border-box;color:var(--_label-text-color);overflow:hidden;max-width:100%;text-overflow:ellipsis;white-space:nowrap;z-index:1;font-family:var(--_label-text-font);font-size:var(--_label-text-size);line-height:var(--_label-text-line-height);font-weight:var(--_label-text-weight);width:min-content}.label-wrapper{inset:0;pointer-events:none;position:absolute}.label.resting{position:absolute;top:var(--_top-space)}.label.floating{font-size:var(--_label-text-populated-size);line-height:var(--_label-text-populated-line-height);transform-origin:top left}.label.hidden{opacity:0}.no-label .label{display:none}.label-wrapper{inset:0;position:absolute;text-align:initial}:hover .label{color:var(--_hover-label-text-color)}.focused .label{color:var(--_focus-label-text-color)}.disabled .label{color:var(--_disabled-label-text-color)}.disabled .label:not(.hidden){opacity:var(--_disabled-label-text-opacity)}.error .label{color:var(--_error-label-text-color)}.error:hover .label{color:var(--_error-hover-label-text-color)}.error.focused .label{color:var(--_error-focus-label-text-color)}}@layer hcm{@media(forced-colors: active){.disabled .label:not(.hidden){color:GrayText;opacity:1}}}@layer styles{.supporting-text{color:var(--_supporting-text-color);display:flex;font-family:var(--_supporting-text-font);font-size:var(--_supporting-text-size);line-height:var(--_supporting-text-line-height);font-weight:var(--_supporting-text-weight);gap:16px;justify-content:space-between;padding-inline-start:var(--_supporting-text-leading-space);padding-inline-end:var(--_supporting-text-trailing-space);padding-top:var(--_supporting-text-top-space)}.supporting-text :nth-child(2){flex-shrink:0}:hover .supporting-text{color:var(--_hover-supporting-text-color)}.focus .supporting-text{color:var(--_focus-supporting-text-color)}.disabled .supporting-text{color:var(--_disabled-supporting-text-color);opacity:var(--_disabled-supporting-text-opacity)}.error .supporting-text{color:var(--_error-supporting-text-color)}.error:hover .supporting-text{color:var(--_error-hover-supporting-text-color)}.error.focus .supporting-text{color:var(--_error-focus-supporting-text-color)}}@layer hcm{@media(forced-colors: active){.disabled .supporting-text{color:GrayText;opacity:1}}}
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
 */let ea=class extends Ys{};ea.styles=[Qs,Zs],ea=Ei([Ze("md-outlined-field")],ea);
/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const ta=Symbol.for(""),ra=e=>{if(e?.r===ta)return e?._$litStatic$},ia=(e,...t)=>({_$litStatic$:t.reduce((t,r,i)=>t+(e=>{if(void 0!==e._$litStatic$)return e._$litStatic$;throw Error(`Value passed to 'literal' function must be a 'literal' result: ${e}. Use 'unsafeStatic' to pass non-literal values, but\n            take care to ensure page security.`)})(r)+e[i+1],e[0]),r:ta}),na=new Map,oa=(e=>(t,...r)=>{const i=r.length;let n,o;const s=[],a=[];let l,c=0,h=!1;for(;c<i;){for(l=t[c];c<i&&void 0!==(o=r[c],n=ra(o));)l+=n+t[++c],h=!0;c!==i&&a.push(o),s.push(l),c++}if(c===i&&s.push(t[i]),h){const e=s.join("$$lit$$");void 0===(t=na.get(e))&&(s.raw=s,na.set(e,t=s)),r=a}return e(t,...r)})(se),sa=Pe`:host{--_caret-color: var(--md-outlined-text-field-caret-color, var(--md-sys-color-primary, #6750a4));--_disabled-input-text-color: var(--md-outlined-text-field-disabled-input-text-color, var(--md-sys-color-on-surface, #1d1b20));--_disabled-input-text-opacity: var(--md-outlined-text-field-disabled-input-text-opacity, 0.38);--_disabled-label-text-color: var(--md-outlined-text-field-disabled-label-text-color, var(--md-sys-color-on-surface, #1d1b20));--_disabled-label-text-opacity: var(--md-outlined-text-field-disabled-label-text-opacity, 0.38);--_disabled-leading-icon-color: var(--md-outlined-text-field-disabled-leading-icon-color, var(--md-sys-color-on-surface, #1d1b20));--_disabled-leading-icon-opacity: var(--md-outlined-text-field-disabled-leading-icon-opacity, 0.38);--_disabled-outline-color: var(--md-outlined-text-field-disabled-outline-color, var(--md-sys-color-on-surface, #1d1b20));--_disabled-outline-opacity: var(--md-outlined-text-field-disabled-outline-opacity, 0.12);--_disabled-outline-width: var(--md-outlined-text-field-disabled-outline-width, 1px);--_disabled-supporting-text-color: var(--md-outlined-text-field-disabled-supporting-text-color, var(--md-sys-color-on-surface, #1d1b20));--_disabled-supporting-text-opacity: var(--md-outlined-text-field-disabled-supporting-text-opacity, 0.38);--_disabled-trailing-icon-color: var(--md-outlined-text-field-disabled-trailing-icon-color, var(--md-sys-color-on-surface, #1d1b20));--_disabled-trailing-icon-opacity: var(--md-outlined-text-field-disabled-trailing-icon-opacity, 0.38);--_error-focus-caret-color: var(--md-outlined-text-field-error-focus-caret-color, var(--md-sys-color-error, #b3261e));--_error-focus-input-text-color: var(--md-outlined-text-field-error-focus-input-text-color, var(--md-sys-color-on-surface, #1d1b20));--_error-focus-label-text-color: var(--md-outlined-text-field-error-focus-label-text-color, var(--md-sys-color-error, #b3261e));--_error-focus-leading-icon-color: var(--md-outlined-text-field-error-focus-leading-icon-color, var(--md-sys-color-on-surface-variant, #49454f));--_error-focus-outline-color: var(--md-outlined-text-field-error-focus-outline-color, var(--md-sys-color-error, #b3261e));--_error-focus-supporting-text-color: var(--md-outlined-text-field-error-focus-supporting-text-color, var(--md-sys-color-error, #b3261e));--_error-focus-trailing-icon-color: var(--md-outlined-text-field-error-focus-trailing-icon-color, var(--md-sys-color-error, #b3261e));--_error-hover-input-text-color: var(--md-outlined-text-field-error-hover-input-text-color, var(--md-sys-color-on-surface, #1d1b20));--_error-hover-label-text-color: var(--md-outlined-text-field-error-hover-label-text-color, var(--md-sys-color-on-error-container, #410e0b));--_error-hover-leading-icon-color: var(--md-outlined-text-field-error-hover-leading-icon-color, var(--md-sys-color-on-surface-variant, #49454f));--_error-hover-outline-color: var(--md-outlined-text-field-error-hover-outline-color, var(--md-sys-color-on-error-container, #410e0b));--_error-hover-supporting-text-color: var(--md-outlined-text-field-error-hover-supporting-text-color, var(--md-sys-color-error, #b3261e));--_error-hover-trailing-icon-color: var(--md-outlined-text-field-error-hover-trailing-icon-color, var(--md-sys-color-on-error-container, #410e0b));--_error-input-text-color: var(--md-outlined-text-field-error-input-text-color, var(--md-sys-color-on-surface, #1d1b20));--_error-label-text-color: var(--md-outlined-text-field-error-label-text-color, var(--md-sys-color-error, #b3261e));--_error-leading-icon-color: var(--md-outlined-text-field-error-leading-icon-color, var(--md-sys-color-on-surface-variant, #49454f));--_error-outline-color: var(--md-outlined-text-field-error-outline-color, var(--md-sys-color-error, #b3261e));--_error-supporting-text-color: var(--md-outlined-text-field-error-supporting-text-color, var(--md-sys-color-error, #b3261e));--_error-trailing-icon-color: var(--md-outlined-text-field-error-trailing-icon-color, var(--md-sys-color-error, #b3261e));--_focus-input-text-color: var(--md-outlined-text-field-focus-input-text-color, var(--md-sys-color-on-surface, #1d1b20));--_focus-label-text-color: var(--md-outlined-text-field-focus-label-text-color, var(--md-sys-color-primary, #6750a4));--_focus-leading-icon-color: var(--md-outlined-text-field-focus-leading-icon-color, var(--md-sys-color-on-surface-variant, #49454f));--_focus-outline-color: var(--md-outlined-text-field-focus-outline-color, var(--md-sys-color-primary, #6750a4));--_focus-outline-width: var(--md-outlined-text-field-focus-outline-width, 3px);--_focus-supporting-text-color: var(--md-outlined-text-field-focus-supporting-text-color, var(--md-sys-color-on-surface-variant, #49454f));--_focus-trailing-icon-color: var(--md-outlined-text-field-focus-trailing-icon-color, var(--md-sys-color-on-surface-variant, #49454f));--_hover-input-text-color: var(--md-outlined-text-field-hover-input-text-color, var(--md-sys-color-on-surface, #1d1b20));--_hover-label-text-color: var(--md-outlined-text-field-hover-label-text-color, var(--md-sys-color-on-surface, #1d1b20));--_hover-leading-icon-color: var(--md-outlined-text-field-hover-leading-icon-color, var(--md-sys-color-on-surface-variant, #49454f));--_hover-outline-color: var(--md-outlined-text-field-hover-outline-color, var(--md-sys-color-on-surface, #1d1b20));--_hover-outline-width: var(--md-outlined-text-field-hover-outline-width, 1px);--_hover-supporting-text-color: var(--md-outlined-text-field-hover-supporting-text-color, var(--md-sys-color-on-surface-variant, #49454f));--_hover-trailing-icon-color: var(--md-outlined-text-field-hover-trailing-icon-color, var(--md-sys-color-on-surface-variant, #49454f));--_input-text-color: var(--md-outlined-text-field-input-text-color, var(--md-sys-color-on-surface, #1d1b20));--_input-text-font: var(--md-outlined-text-field-input-text-font, var(--md-sys-typescale-body-large-font, var(--md-ref-typeface-plain, Roboto)));--_input-text-line-height: var(--md-outlined-text-field-input-text-line-height, var(--md-sys-typescale-body-large-line-height, 1.5rem));--_input-text-placeholder-color: var(--md-outlined-text-field-input-text-placeholder-color, var(--md-sys-color-on-surface-variant, #49454f));--_input-text-prefix-color: var(--md-outlined-text-field-input-text-prefix-color, var(--md-sys-color-on-surface-variant, #49454f));--_input-text-size: var(--md-outlined-text-field-input-text-size, var(--md-sys-typescale-body-large-size, 1rem));--_input-text-suffix-color: var(--md-outlined-text-field-input-text-suffix-color, var(--md-sys-color-on-surface-variant, #49454f));--_input-text-weight: var(--md-outlined-text-field-input-text-weight, var(--md-sys-typescale-body-large-weight, var(--md-ref-typeface-weight-regular, 400)));--_label-text-color: var(--md-outlined-text-field-label-text-color, var(--md-sys-color-on-surface-variant, #49454f));--_label-text-font: var(--md-outlined-text-field-label-text-font, var(--md-sys-typescale-body-large-font, var(--md-ref-typeface-plain, Roboto)));--_label-text-line-height: var(--md-outlined-text-field-label-text-line-height, var(--md-sys-typescale-body-large-line-height, 1.5rem));--_label-text-populated-line-height: var(--md-outlined-text-field-label-text-populated-line-height, var(--md-sys-typescale-body-small-line-height, 1rem));--_label-text-populated-size: var(--md-outlined-text-field-label-text-populated-size, var(--md-sys-typescale-body-small-size, 0.75rem));--_label-text-size: var(--md-outlined-text-field-label-text-size, var(--md-sys-typescale-body-large-size, 1rem));--_label-text-weight: var(--md-outlined-text-field-label-text-weight, var(--md-sys-typescale-body-large-weight, var(--md-ref-typeface-weight-regular, 400)));--_leading-icon-color: var(--md-outlined-text-field-leading-icon-color, var(--md-sys-color-on-surface-variant, #49454f));--_leading-icon-size: var(--md-outlined-text-field-leading-icon-size, 24px);--_outline-color: var(--md-outlined-text-field-outline-color, var(--md-sys-color-outline, #79747e));--_outline-width: var(--md-outlined-text-field-outline-width, 1px);--_supporting-text-color: var(--md-outlined-text-field-supporting-text-color, var(--md-sys-color-on-surface-variant, #49454f));--_supporting-text-font: var(--md-outlined-text-field-supporting-text-font, var(--md-sys-typescale-body-small-font, var(--md-ref-typeface-plain, Roboto)));--_supporting-text-line-height: var(--md-outlined-text-field-supporting-text-line-height, var(--md-sys-typescale-body-small-line-height, 1rem));--_supporting-text-size: var(--md-outlined-text-field-supporting-text-size, var(--md-sys-typescale-body-small-size, 0.75rem));--_supporting-text-weight: var(--md-outlined-text-field-supporting-text-weight, var(--md-sys-typescale-body-small-weight, var(--md-ref-typeface-weight-regular, 400)));--_trailing-icon-color: var(--md-outlined-text-field-trailing-icon-color, var(--md-sys-color-on-surface-variant, #49454f));--_trailing-icon-size: var(--md-outlined-text-field-trailing-icon-size, 24px);--_container-shape-start-start: var(--md-outlined-text-field-container-shape-start-start, var(--md-outlined-text-field-container-shape, var(--md-sys-shape-corner-extra-small, 4px)));--_container-shape-start-end: var(--md-outlined-text-field-container-shape-start-end, var(--md-outlined-text-field-container-shape, var(--md-sys-shape-corner-extra-small, 4px)));--_container-shape-end-end: var(--md-outlined-text-field-container-shape-end-end, var(--md-outlined-text-field-container-shape, var(--md-sys-shape-corner-extra-small, 4px)));--_container-shape-end-start: var(--md-outlined-text-field-container-shape-end-start, var(--md-outlined-text-field-container-shape, var(--md-sys-shape-corner-extra-small, 4px)));--_icon-input-space: var(--md-outlined-text-field-icon-input-space, 16px);--_leading-space: var(--md-outlined-text-field-leading-space, 16px);--_trailing-space: var(--md-outlined-text-field-trailing-space, 16px);--_top-space: var(--md-outlined-text-field-top-space, 16px);--_bottom-space: var(--md-outlined-text-field-bottom-space, 16px);--_input-text-prefix-trailing-space: var(--md-outlined-text-field-input-text-prefix-trailing-space, 2px);--_input-text-suffix-leading-space: var(--md-outlined-text-field-input-text-suffix-leading-space, 2px);--_focus-caret-color: var(--md-outlined-text-field-focus-caret-color, var(--md-sys-color-primary, #6750a4));--_with-leading-icon-leading-space: var(--md-outlined-text-field-with-leading-icon-leading-space, 12px);--_with-trailing-icon-trailing-space: var(--md-outlined-text-field-with-trailing-icon-trailing-space, 12px);--md-outlined-field-bottom-space: var(--_bottom-space);--md-outlined-field-container-shape-end-end: var(--_container-shape-end-end);--md-outlined-field-container-shape-end-start: var(--_container-shape-end-start);--md-outlined-field-container-shape-start-end: var(--_container-shape-start-end);--md-outlined-field-container-shape-start-start: var(--_container-shape-start-start);--md-outlined-field-content-color: var(--_input-text-color);--md-outlined-field-content-font: var(--_input-text-font);--md-outlined-field-content-line-height: var(--_input-text-line-height);--md-outlined-field-content-size: var(--_input-text-size);--md-outlined-field-content-space: var(--_icon-input-space);--md-outlined-field-content-weight: var(--_input-text-weight);--md-outlined-field-disabled-content-color: var(--_disabled-input-text-color);--md-outlined-field-disabled-content-opacity: var(--_disabled-input-text-opacity);--md-outlined-field-disabled-label-text-color: var(--_disabled-label-text-color);--md-outlined-field-disabled-label-text-opacity: var(--_disabled-label-text-opacity);--md-outlined-field-disabled-leading-content-color: var(--_disabled-leading-icon-color);--md-outlined-field-disabled-leading-content-opacity: var(--_disabled-leading-icon-opacity);--md-outlined-field-disabled-outline-color: var(--_disabled-outline-color);--md-outlined-field-disabled-outline-opacity: var(--_disabled-outline-opacity);--md-outlined-field-disabled-outline-width: var(--_disabled-outline-width);--md-outlined-field-disabled-supporting-text-color: var(--_disabled-supporting-text-color);--md-outlined-field-disabled-supporting-text-opacity: var(--_disabled-supporting-text-opacity);--md-outlined-field-disabled-trailing-content-color: var(--_disabled-trailing-icon-color);--md-outlined-field-disabled-trailing-content-opacity: var(--_disabled-trailing-icon-opacity);--md-outlined-field-error-content-color: var(--_error-input-text-color);--md-outlined-field-error-focus-content-color: var(--_error-focus-input-text-color);--md-outlined-field-error-focus-label-text-color: var(--_error-focus-label-text-color);--md-outlined-field-error-focus-leading-content-color: var(--_error-focus-leading-icon-color);--md-outlined-field-error-focus-outline-color: var(--_error-focus-outline-color);--md-outlined-field-error-focus-supporting-text-color: var(--_error-focus-supporting-text-color);--md-outlined-field-error-focus-trailing-content-color: var(--_error-focus-trailing-icon-color);--md-outlined-field-error-hover-content-color: var(--_error-hover-input-text-color);--md-outlined-field-error-hover-label-text-color: var(--_error-hover-label-text-color);--md-outlined-field-error-hover-leading-content-color: var(--_error-hover-leading-icon-color);--md-outlined-field-error-hover-outline-color: var(--_error-hover-outline-color);--md-outlined-field-error-hover-supporting-text-color: var(--_error-hover-supporting-text-color);--md-outlined-field-error-hover-trailing-content-color: var(--_error-hover-trailing-icon-color);--md-outlined-field-error-label-text-color: var(--_error-label-text-color);--md-outlined-field-error-leading-content-color: var(--_error-leading-icon-color);--md-outlined-field-error-outline-color: var(--_error-outline-color);--md-outlined-field-error-supporting-text-color: var(--_error-supporting-text-color);--md-outlined-field-error-trailing-content-color: var(--_error-trailing-icon-color);--md-outlined-field-focus-content-color: var(--_focus-input-text-color);--md-outlined-field-focus-label-text-color: var(--_focus-label-text-color);--md-outlined-field-focus-leading-content-color: var(--_focus-leading-icon-color);--md-outlined-field-focus-outline-color: var(--_focus-outline-color);--md-outlined-field-focus-outline-width: var(--_focus-outline-width);--md-outlined-field-focus-supporting-text-color: var(--_focus-supporting-text-color);--md-outlined-field-focus-trailing-content-color: var(--_focus-trailing-icon-color);--md-outlined-field-hover-content-color: var(--_hover-input-text-color);--md-outlined-field-hover-label-text-color: var(--_hover-label-text-color);--md-outlined-field-hover-leading-content-color: var(--_hover-leading-icon-color);--md-outlined-field-hover-outline-color: var(--_hover-outline-color);--md-outlined-field-hover-outline-width: var(--_hover-outline-width);--md-outlined-field-hover-supporting-text-color: var(--_hover-supporting-text-color);--md-outlined-field-hover-trailing-content-color: var(--_hover-trailing-icon-color);--md-outlined-field-label-text-color: var(--_label-text-color);--md-outlined-field-label-text-font: var(--_label-text-font);--md-outlined-field-label-text-line-height: var(--_label-text-line-height);--md-outlined-field-label-text-populated-line-height: var(--_label-text-populated-line-height);--md-outlined-field-label-text-populated-size: var(--_label-text-populated-size);--md-outlined-field-label-text-size: var(--_label-text-size);--md-outlined-field-label-text-weight: var(--_label-text-weight);--md-outlined-field-leading-content-color: var(--_leading-icon-color);--md-outlined-field-leading-space: var(--_leading-space);--md-outlined-field-outline-color: var(--_outline-color);--md-outlined-field-outline-width: var(--_outline-width);--md-outlined-field-supporting-text-color: var(--_supporting-text-color);--md-outlined-field-supporting-text-font: var(--_supporting-text-font);--md-outlined-field-supporting-text-line-height: var(--_supporting-text-line-height);--md-outlined-field-supporting-text-size: var(--_supporting-text-size);--md-outlined-field-supporting-text-weight: var(--_supporting-text-weight);--md-outlined-field-top-space: var(--_top-space);--md-outlined-field-trailing-content-color: var(--_trailing-icon-color);--md-outlined-field-trailing-space: var(--_trailing-space);--md-outlined-field-with-leading-content-leading-space: var(--_with-leading-icon-leading-space);--md-outlined-field-with-trailing-content-trailing-space: var(--_with-trailing-icon-trailing-space)}
`
/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */,aa=j(class extends F{constructor(e){if(super(e),e.type!==U&&e.type!==L&&e.type!==M)throw Error("The `live` directive is not allowed on child or event bindings");if(!(e=>void 0===e.strings)(e))throw Error("`live` bindings can only contain a single expression")}render(e){return e}update(e,[t]){if(t===ae||t===le)return t;const r=e.element,i=e.name;if(e.type===U){if(t===r[i])return ae}else if(e.type===M){if(!!t===r.hasAttribute(i))return ae}else if(e.type===L&&r.getAttribute(i)===t+"")return ae;return((e,t=Ee)=>{e._$AH=t})(e),t}}),la="important",ca=" !"+la,ha=j(class extends F{constructor(e){if(super(e),e.type!==L||"style"!==e.name||e.strings?.length>2)throw Error("The `styleMap` directive must be used in the `style` attribute and must be the only part in the attribute.")}render(e){return Object.keys(e).reduce((t,r)=>{const i=e[r];return null==i?t:t+`${r=r.includes("-")?r:r.replace(/(?:^(webkit|moz|ms|o)|)(?=[A-Z])/g,"-$&").toLowerCase()}:${i};`},"")}update(e,[t]){const{style:r}=e.element;if(void 0===this.ft)return this.ft=new Set(Object.keys(t)),this.render(t);for(const e of this.ft)null==t[e]&&(this.ft.delete(e),e.includes("-")?r.removeProperty(e):r[e]=null);for(const e in t){const i=t[e];if(null!=i){this.ft.add(e);const t="string"==typeof i&&i.endsWith(ca);e.includes("-")||t?r.setProperty(e,t?i.slice(0,-11):i,t?la:""):r[e]=i}}return ae}}),da=["role","ariaAtomic","ariaAutoComplete","ariaBusy","ariaChecked","ariaColCount","ariaColIndex","ariaColSpan","ariaCurrent","ariaDisabled","ariaExpanded","ariaHasPopup","ariaHidden","ariaInvalid","ariaKeyShortcuts","ariaLabel","ariaLevel","ariaLive","ariaModal","ariaMultiLine","ariaMultiSelectable","ariaOrientation","ariaPlaceholder","ariaPosInSet","ariaPressed","ariaReadOnly","ariaRequired","ariaRoleDescription","ariaRowCount","ariaRowIndex","ariaRowSpan","ariaSelected","ariaSetSize","ariaSort","ariaValueMax","ariaValueMin","ariaValueNow","ariaValueText"],ua=da.map(fa);
/**
 * @license
 * Copyright 2024 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */function pa(e){return ua.includes(e)}function fa(e){return e.replace("aria","aria-").replace(/Elements?/g,"").toLowerCase()}
/**
 * @license
 * Copyright 2023 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */const ga=Symbol("privateIgnoreAttributeChangesFor");function ma(e){return`data-${e}`}function va(e){return e.replace(/-\w/,e=>e[1].toUpperCase())}
/**
 * @license
 * Copyright 2022 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */const ya={fromAttribute:e=>e??"",toAttribute:e=>e||null};
/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */
/**
 * @license
 * Copyright 2023 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */
const ba=Symbol("internals"),_a=Symbol("privateInternals");
/**
 * @license
 * Copyright 2023 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */
const wa=Symbol("createValidator"),xa=Symbol("getValidityAnchor"),Sa=Symbol("privateValidator"),Ea=Symbol("privateSyncValidity"),Ta=Symbol("privateCustomValidationMessage");
/**
 * @license
 * Copyright 2023 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */
const Aa=Symbol("getFormValue"),Ia=Symbol("getFormState");
/**
 * @license
 * Copyright 2023 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */
const Ca=Symbol("onReportValidity"),ka=Symbol("privateCleanupFormListeners"),Oa=Symbol("privateDoNotReportInvalid"),Na=Symbol("privateIsSelfReportingValidity"),Pa=Symbol("privateCallOnReportValidity");const Ra=new WeakMap;
/**
 * @license
 * Copyright 2023 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */
class Da{constructor(e){this.getCurrentState=e,this.currentValidity={validity:{},validationMessage:""}}getValidity(){const e=this.getCurrentState();if(!(!this.prevState||!this.equals(this.prevState,e)))return this.currentValidity;const{validity:t,validationMessage:r}=this.computeValidity(e);return this.prevState=this.copy(e),this.currentValidity={validationMessage:r,validity:{badInput:t.badInput,customError:t.customError,patternMismatch:t.patternMismatch,rangeOverflow:t.rangeOverflow,rangeUnderflow:t.rangeUnderflow,stepMismatch:t.stepMismatch,tooLong:t.tooLong,tooShort:t.tooShort,typeMismatch:t.typeMismatch,valueMissing:t.valueMissing}},this.currentValidity}}
/**
 * @license
 * Copyright 2023 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */class $a extends Da{computeValidity({state:e,renderedControl:t}){let r=t;La(e)&&!r?(r=this.inputControl||document.createElement("input"),this.inputControl=r):r||(r=this.textAreaControl||document.createElement("textarea"),this.textAreaControl=r);const i=La(e)?r:null;if(i&&(i.type=e.type),r.value!==e.value&&(r.value=e.value),r.required=e.required,i){const t=e;t.pattern?i.pattern=t.pattern:i.removeAttribute("pattern"),t.min?i.min=t.min:i.removeAttribute("min"),t.max?i.max=t.max:i.removeAttribute("max"),t.step?i.step=t.step:i.removeAttribute("step")}return(e.minLength??-1)>-1?r.setAttribute("minlength",String(e.minLength)):r.removeAttribute("minlength"),(e.maxLength??-1)>-1?r.setAttribute("maxlength",String(e.maxLength)):r.removeAttribute("maxlength"),{validity:r.validity,validationMessage:r.validationMessage}}equals({state:e},{state:t}){const r=e.type===t.type&&e.value===t.value&&e.required===t.required&&e.minLength===t.minLength&&e.maxLength===t.maxLength;return La(e)&&La(t)?r&&e.pattern===t.pattern&&e.min===t.min&&e.max===t.max&&e.step===t.step:r}copy({state:e}){return{state:La(e)?this.copyInput(e):this.copyTextArea(e),renderedControl:null}}copyInput(e){const{type:t,pattern:r,min:i,max:n,step:o}=e;return{...this.copySharedState(e),type:t,pattern:r,min:i,max:n,step:o}}copyTextArea(e){return{...this.copySharedState(e),type:e.type}}copySharedState({value:e,required:t,minLength:r,maxLength:i}){return{value:e,required:t,minLength:r,maxLength:i}}}function La(e){return"textarea"!==e.type}
/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */const Ua=function(e){var t;class r extends e{constructor(){super(...arguments),this[t]=new Set}attributeChangedCallback(e,t,r){if(!pa(e))return void super.attributeChangedCallback(e,t,r);if(this[ga].has(e))return;this[ga].add(e),this.removeAttribute(e),this[ga].delete(e);const i=va(e);null===r?delete this.dataset[i]:this.dataset[i]=r,this.requestUpdate(va(e),t)}getAttribute(e){return pa(e)?super.getAttribute(ma(e)):super.getAttribute(e)}removeAttribute(e){super.removeAttribute(e),pa(e)&&(super.removeAttribute(ma(e)),this.requestUpdate())}}return t=ga,function(e){for(const t of da){const r=fa(t),i=ma(r),n=va(r);e.createProperty(t,{attribute:r,noAccessor:!0}),e.createProperty(Symbol(i),{attribute:i,noAccessor:!0}),Object.defineProperty(e.prototype,t,{configurable:!0,enumerable:!0,get(){return this.dataset[n]??null},set(e){const r=this.dataset[n]??null;e!==r&&(null===e?delete this.dataset[n]:this.dataset[n]=e,this.requestUpdate(t,r))}})}}(r),r}(function(e){var t,r,i;class n extends e{constructor(...e){super(...e),this[t]=new AbortController,this[r]=!1,this[i]=!1,this.addEventListener("invalid",e=>{!this[Oa]&&e.isTrusted&&this.addEventListener("invalid",()=>{this[Pa](e)},{once:!0})},{capture:!0})}checkValidity(){this[Oa]=!0;const e=super.checkValidity();return this[Oa]=!1,e}reportValidity(){this[Na]=!0;const e=super.reportValidity();return e&&this[Pa](null),this[Na]=!1,e}[(t=ka,r=Oa,i=Na,Pa)](e){const t=e?.defaultPrevented;if(t)return;this[Ca](e);!t&&e?.defaultPrevented&&(this[Na]||function(e,t){if(!e)return!0;let r;for(const t of e.elements)if(t.matches(":invalid")){r=t;break}return r===t}(this[ba].form,this))&&this.focus()}[Ca](e){throw new Error("Implement [onReportValidity]")}formAssociatedCallback(e){super.formAssociatedCallback&&super.formAssociatedCallback(e),this[ka].abort(),e&&(this[ka]=new AbortController,function(e,t,r,i){const n=function(e){if(!Ra.has(e)){const t=new EventTarget;Ra.set(e,t);for(const r of["reportValidity","requestSubmit"]){const i=e[r];e[r]=function(){t.dispatchEvent(new Event("before"));const e=Reflect.apply(i,this,arguments);return t.dispatchEvent(new Event("after")),e}}}return Ra.get(e)}(t);let o,s=!1,a=!1;n.addEventListener("before",()=>{a=!0,o=new AbortController,s=!1,e.addEventListener("invalid",()=>{s=!0},{signal:o.signal})},{signal:i}),n.addEventListener("after",()=>{a=!1,o?.abort(),s||r()},{signal:i}),t.addEventListener("submit",()=>{a||r()},{signal:i})}(this,e,()=>{this[Pa](null)},this[ka].signal))}}return n}(function(e){var t;class r extends e{constructor(){super(...arguments),this[t]=""}get validity(){return this[Ea](),this[ba].validity}get validationMessage(){return this[Ea](),this[ba].validationMessage}get willValidate(){return this[Ea](),this[ba].willValidate}checkValidity(){return this[Ea](),this[ba].checkValidity()}reportValidity(){return this[Ea](),this[ba].reportValidity()}setCustomValidity(e){this[Ta]=e,this[Ea]()}requestUpdate(e,t,r){super.requestUpdate(e,t,r),this[Ea]()}firstUpdated(e){super.firstUpdated(e),this[Ea]()}[(t=Ta,Ea)](){this[Sa]||(this[Sa]=this[wa]());const{validity:e,validationMessage:t}=this[Sa].getValidity(),r=!!this[Ta],i=this[Ta]||t;this[ba].setValidity({...e,customError:r},i,this[xa]()??void 0)}[wa](){throw new Error("Implement [createValidator]")}[xa](){throw new Error("Implement [getValidityAnchor]")}}return r}(function(e){class t extends e{get form(){return this[ba].form}get labels(){return this[ba].labels}get name(){return this.getAttribute("name")??""}set name(e){this.setAttribute("name",e)}get disabled(){return this.hasAttribute("disabled")}set disabled(e){this.toggleAttribute("disabled",e)}attributeChangedCallback(e,t,r){if("name"===e||"disabled"===e){const r="disabled"===e?null!==t:t;return void this.requestUpdate(e,r)}super.attributeChangedCallback(e,t,r)}requestUpdate(e,t,r){super.requestUpdate(e,t,r),this[ba].setFormValue(this[Aa](),this[Ia]())}[Aa](){throw new Error("Implement [getFormValue]")}[Ia](){return this[Aa]()}formDisabledCallback(e){this.disabled=e}}return t.formAssociated=!0,Ei([tt({noAccessor:!0})],t.prototype,"name",null),Ei([tt({type:Boolean,noAccessor:!0})],t.prototype,"disabled",null),t}((Ma=Je,class extends Ma{get[ba](){return this[_a]||(this[_a]=this.attachInternals()),this[_a]}})))));var Ma;class ja extends Ua{constructor(){super(...arguments),this.error=!1,this.errorText="",this.label="",this.noAsterisk=!1,this.required=!1,this.value="",this.prefixText="",this.suffixText="",this.hasLeadingIcon=!1,this.hasTrailingIcon=!1,this.supportingText="",this.textDirection="",this.rows=2,this.cols=20,this.inputMode="",this.max="",this.maxLength=-1,this.min="",this.minLength=-1,this.noSpinner=!1,this.pattern="",this.placeholder="",this.readOnly=!1,this.multiple=!1,this.step="",this.type="text",this.autocomplete="",this.dirty=!1,this.focused=!1,this.nativeError=!1,this.nativeErrorText=""}get selectionDirection(){return this.getInputOrTextarea().selectionDirection}set selectionDirection(e){this.getInputOrTextarea().selectionDirection=e}get selectionEnd(){return this.getInputOrTextarea().selectionEnd}set selectionEnd(e){this.getInputOrTextarea().selectionEnd=e}get selectionStart(){return this.getInputOrTextarea().selectionStart}set selectionStart(e){this.getInputOrTextarea().selectionStart=e}get valueAsNumber(){const e=this.getInput();return e?e.valueAsNumber:NaN}set valueAsNumber(e){const t=this.getInput();t&&(t.valueAsNumber=e,this.value=t.value)}get valueAsDate(){const e=this.getInput();return e?e.valueAsDate:null}set valueAsDate(e){const t=this.getInput();t&&(t.valueAsDate=e,this.value=t.value)}get hasError(){return this.error||this.nativeError}select(){this.getInputOrTextarea().select()}setRangeText(...e){this.getInputOrTextarea().setRangeText(...e),this.value=this.getInputOrTextarea().value}setSelectionRange(e,t,r){this.getInputOrTextarea().setSelectionRange(e,t,r)}showPicker(){const e=this.getInput();e&&e.showPicker()}stepDown(e){const t=this.getInput();t&&(t.stepDown(e),this.value=t.value)}stepUp(e){const t=this.getInput();t&&(t.stepUp(e),this.value=t.value)}reset(){this.dirty=!1,this.value=this.getAttribute("value")??"",this.nativeError=!1,this.nativeErrorText=""}attributeChangedCallback(e,t,r){"value"===e&&this.dirty||super.attributeChangedCallback(e,t,r)}render(){const e={disabled:this.disabled,error:!this.disabled&&this.hasError,textarea:"textarea"===this.type,"no-spinner":this.noSpinner};return se`
      <span class="text-field ${Gs(e)}">
        ${this.renderField()}
      </span>
    `}updated(e){const t=this.getInputOrTextarea().value;this.value!==t&&(this.value=t)}renderField(){return oa`<${this.fieldTag}
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
    </${this.fieldTag}>`}renderLeadingIcon(){return se`
      <span class="icon leading" slot="start">
        <slot name="leading-icon" @slotchange=${this.handleIconChange}></slot>
      </span>
    `}renderTrailingIcon(){return se`
      <span class="icon trailing" slot="end">
        <slot name="trailing-icon" @slotchange=${this.handleIconChange}></slot>
      </span>
    `}renderInputOrTextarea(){const e={direction:this.textDirection},t=this.ariaLabel||this.label||le,r=this.autocomplete,i=(this.maxLength??-1)>-1,n=(this.minLength??-1)>-1;if("textarea"===this.type)return se`
        <textarea
          class="input"
          style=${ha(e)}
          aria-describedby="description"
          aria-invalid=${this.hasError}
          aria-label=${t}
          autocomplete=${r||le}
          name=${this.name||le}
          ?disabled=${this.disabled}
          maxlength=${i?this.maxLength:le}
          minlength=${n?this.minLength:le}
          placeholder=${this.placeholder||le}
          ?readonly=${this.readOnly}
          ?required=${this.required}
          rows=${this.rows}
          cols=${this.cols}
          .value=${aa(this.value)}
          @change=${this.redispatchEvent}
          @focus=${this.handleFocusChange}
          @blur=${this.handleFocusChange}
          @input=${this.handleInput}
          @select=${this.redispatchEvent}></textarea>
      `;const o=this.renderPrefix(),s=this.renderSuffix(),a=this.inputMode;return se`
      <div class="input-wrapper">
        ${o}
        <input
          class="input"
          style=${ha(e)}
          aria-describedby="description"
          aria-invalid=${this.hasError}
          aria-label=${t}
          autocomplete=${r||le}
          name=${this.name||le}
          ?disabled=${this.disabled}
          inputmode=${a||le}
          max=${this.max||le}
          maxlength=${i?this.maxLength:le}
          min=${this.min||le}
          minlength=${n?this.minLength:le}
          pattern=${this.pattern||le}
          placeholder=${this.placeholder||le}
          ?readonly=${this.readOnly}
          ?required=${this.required}
          ?multiple=${this.multiple}
          step=${this.step||le}
          type=${this.type}
          .value=${aa(this.value)}
          @change=${this.redispatchEvent}
          @focus=${this.handleFocusChange}
          @blur=${this.handleFocusChange}
          @input=${this.handleInput}
          @select=${this.redispatchEvent} />
        ${s}
      </div>
    `}renderPrefix(){return this.renderAffix(this.prefixText,!1)}renderSuffix(){return this.renderAffix(this.suffixText,!0)}renderAffix(e,t){if(!e)return le;return se`<span class="${Gs({suffix:t,prefix:!t})}">${e}</span>`}getErrorText(){return this.error?this.errorText:this.nativeErrorText}handleFocusChange(){this.focused=this.inputOrTextarea?.matches(":focus")??!1}handleInput(e){this.dirty=!0,this.value=e.target.value}redispatchEvent(e){!function(e,t){!t.bubbles||e.shadowRoot&&!t.composed||t.stopPropagation();const r=Reflect.construct(t.constructor,[t.type,t]),i=e.dispatchEvent(r);i||t.preventDefault()}(this,e)}getInputOrTextarea(){return this.inputOrTextarea||(this.connectedCallback(),this.scheduleUpdate()),this.isUpdatePending&&this.scheduleUpdate(),this.inputOrTextarea}getInput(){return"textarea"===this.type?null:this.getInputOrTextarea()}handleIconChange(){this.hasLeadingIcon=this.leadingIcons.length>0,this.hasTrailingIcon=this.trailingIcons.length>0}[Aa](){return this.value}formResetCallback(){this.reset()}formStateRestoreCallback(e){this.value=e}focus(){this.getInputOrTextarea().focus()}[wa](){return new $a(()=>({state:this,renderedControl:this.inputOrTextarea}))}[xa](){return this.inputOrTextarea}[Ca](e){e?.preventDefault();const t=this.getErrorText();this.nativeError=!!e,this.nativeErrorText=this.validationMessage,t===this.getErrorText()&&this.field?.reannounceError()}}ja.shadowRootOptions={...Je.shadowRootOptions,delegatesFocus:!0},Ei([tt({type:Boolean,reflect:!0})],ja.prototype,"error",void 0),Ei([tt({attribute:"error-text"})],ja.prototype,"errorText",void 0),Ei([tt()],ja.prototype,"label",void 0),Ei([tt({type:Boolean,attribute:"no-asterisk"})],ja.prototype,"noAsterisk",void 0),Ei([tt({type:Boolean,reflect:!0})],ja.prototype,"required",void 0),Ei([tt()],ja.prototype,"value",void 0),Ei([tt({attribute:"prefix-text"})],ja.prototype,"prefixText",void 0),Ei([tt({attribute:"suffix-text"})],ja.prototype,"suffixText",void 0),Ei([tt({type:Boolean,attribute:"has-leading-icon"})],ja.prototype,"hasLeadingIcon",void 0),Ei([tt({type:Boolean,attribute:"has-trailing-icon"})],ja.prototype,"hasTrailingIcon",void 0),Ei([tt({attribute:"supporting-text"})],ja.prototype,"supportingText",void 0),Ei([tt({attribute:"text-direction"})],ja.prototype,"textDirection",void 0),Ei([tt({type:Number})],ja.prototype,"rows",void 0),Ei([tt({type:Number})],ja.prototype,"cols",void 0),Ei([tt({reflect:!0})],ja.prototype,"inputMode",void 0),Ei([tt()],ja.prototype,"max",void 0),Ei([tt({type:Number})],ja.prototype,"maxLength",void 0),Ei([tt()],ja.prototype,"min",void 0),Ei([tt({type:Number})],ja.prototype,"minLength",void 0),Ei([tt({type:Boolean,attribute:"no-spinner"})],ja.prototype,"noSpinner",void 0),Ei([tt()],ja.prototype,"pattern",void 0),Ei([tt({reflect:!0,converter:ya})],ja.prototype,"placeholder",void 0),Ei([tt({type:Boolean,reflect:!0})],ja.prototype,"readOnly",void 0),Ei([tt({type:Boolean,reflect:!0})],ja.prototype,"multiple",void 0),Ei([tt()],ja.prototype,"step",void 0),Ei([tt({reflect:!0})],ja.prototype,"type",void 0),Ei([tt({reflect:!0})],ja.prototype,"autocomplete",void 0),Ei([rt()],ja.prototype,"dirty",void 0),Ei([rt()],ja.prototype,"focused",void 0),Ei([rt()],ja.prototype,"nativeError",void 0),Ei([rt()],ja.prototype,"nativeErrorText",void 0),Ei([nt(".input")],ja.prototype,"inputOrTextarea",void 0),Ei([nt(".field")],ja.prototype,"field",void 0),Ei([ot({slot:"leading-icon"})],ja.prototype,"leadingIcons",void 0),Ei([ot({slot:"trailing-icon"})],ja.prototype,"trailingIcons",void 0);
/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */
class Fa extends ja{constructor(){super(...arguments),this.fieldTag=ia`md-outlined-field`}}
/**
 * @license
 * Copyright 2024 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */const Va=Pe`:host{display:inline-flex;outline:none;resize:both;text-align:start;-webkit-tap-highlight-color:rgba(0,0,0,0)}.text-field,.field{width:100%}.text-field{display:inline-flex}.field{cursor:text}.disabled .field{cursor:default}.text-field,.textarea .field{resize:inherit}slot[name=container]{border-radius:inherit}.icon{color:currentColor;display:flex;align-items:center;justify-content:center;fill:currentColor;position:relative}.icon ::slotted(*){display:flex;position:absolute}[has-start] .icon.leading{font-size:var(--_leading-icon-size);height:var(--_leading-icon-size);width:var(--_leading-icon-size)}[has-end] .icon.trailing{font-size:var(--_trailing-icon-size);height:var(--_trailing-icon-size);width:var(--_trailing-icon-size)}.input-wrapper{display:flex}.input-wrapper>*{all:inherit;padding:0}.input{caret-color:var(--_caret-color);overflow-x:hidden;text-align:inherit}.input::placeholder{color:currentColor;opacity:1}.input::-webkit-calendar-picker-indicator{display:none}.input::-webkit-search-decoration,.input::-webkit-search-cancel-button{display:none}@media(forced-colors: active){.input{background:none}}.no-spinner .input::-webkit-inner-spin-button,.no-spinner .input::-webkit-outer-spin-button{display:none}.no-spinner .input[type=number]{-moz-appearance:textfield}:focus-within .input{caret-color:var(--_focus-caret-color)}.error:focus-within .input{caret-color:var(--_error-focus-caret-color)}.text-field:not(.disabled) .prefix{color:var(--_input-text-prefix-color)}.text-field:not(.disabled) .suffix{color:var(--_input-text-suffix-color)}.text-field:not(.disabled) .input::placeholder{color:var(--_input-text-placeholder-color)}.prefix,.suffix{text-wrap:nowrap;width:min-content}.prefix{padding-inline-end:var(--_input-text-prefix-trailing-space)}.suffix{padding-inline-start:var(--_input-text-suffix-leading-space)}
`
/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */;let Ba=class extends Fa{constructor(){super(...arguments),this.fieldTag=ia`md-outlined-field`}};Ba.styles=[Va,sa],Ba=Ei([Ze("md-outlined-text-field")],Ba);var za=function(e,t,r,i){var n,o=arguments.length,s=o<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,r):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e,t,r,i);else for(var a=e.length-1;a>=0;a--)(n=e[a])&&(s=(o<3?n(s):o>3?n(t,r,s):n(t,r))||s);return o>3&&s&&Object.defineProperty(t,r,s),s};let Ha=class extends($(Je)){static{this.styles=Pe`
    :host {
      display: block;
      background: white;
      min-width: 300px;
      max-width: 500px;
      width: 100%;
      border-radius: 5px;
      border: solid 1px #aaa;
      padding: 20px;
    }

    header {
      display: flex;
      flex-direction: row;
      align-items: center;
      justify-content: space-between;
    }

    #logo {
      height: 38px;
      width: auto;
    }

    .initial {
      font-style: italic;
    }

    .error {
      color: red;
    }
  `}constructor(){super(),this.defaultPackage=""}set packageName(e){e&&e!==gt.get().packageName&&mt(e)}get packageName(){return gt.get().packageName}connectedCallback(){super.connectedCallback();const e=gt.get();this.defaultPackage&&"idle"===e.status&&!e.packageName&&mt(this.defaultPackage)}render(){const e=gt.get(),{status:t,packageName:r,packageData:i,errorMessage:n}=e;return se`
      <div>
        <md-outlined-text-field
          label="NPM Package Name" 
          supporting-text="Enter a package name like lit, chalk, react, or vue"
          .value=${r} 
          @input=${this.handlePackageNameInput}
          @keydown=${this.handleKeydown}>
        </md-outlined-text-field>
      </div>
      <header>
        <h1>${r}</h1>
        ${qa}
      </header>
      <div>
        <p>${t}</p>
        ${this.renderPackageInfo(t,i,n)}
      </div>
    `}renderPackageInfo(e,t,r){switch(e){case"idle":return se`<span class="initial">When does this ever actually display? Enter a package name to display its npm info</span>`;case"loading":return se`Loading npm info for <code>${gt.get().packageName}</code>`;case"ready":return t?se`
          <h3>${t.description||"No description available"}</h3>
          <h4>dist-tags:</h4>
          <ul>
            ${Object.keys(t["dist-tags"]||{}).map(e=>se`<li><pre>${e}: ${t["dist-tags"]?.[e]}</pre></li>`)}
          </ul>
        `:le;case"error":return se`<span class="error">Error: ${r||"Unknown error"}</span>`;default:return le}}handlePackageNameInput(e){mt(e.target.value)}handleKeydown(e){if("Enter"===e.key){const e=gt.get().packageName.trim();e&&this.dispatchEvent(new CustomEvent("df-npm-info-search",{detail:{packageName:e},bubbles:!0,composed:!0}))}}};za([tt({type:String,attribute:"default-package"})],Ha.prototype,"defaultPackage",void 0),za([tt({type:String})],Ha.prototype,"packageName",null),Ha=za([Ze("df-npm-info-widget")],Ha);const qa=se`<img id="logo" src="https://raw.githubusercontent.com/npm/logos/master/npm%20logo/npm-logo-red.svg" alt="npm logo" />`;var Wa=function(e,t,r,i){var n,o=arguments.length,s=o<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,r):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e,t,r,i);else for(var a=e.length-1;a>=0;a--)(n=e[a])&&(s=(o<3?n(s):o>3?n(t,r,s):n(t,r))||s);return o>3&&s&&Object.defineProperty(t,r,s),s};let Ka=class extends($(Je)){static styles=Pe`
    :host {
      display: grid;
      gap: 24px;
      width: min(960px, 100%);
      background: rgba(255, 255, 255, 0.92);
      border-radius: 24px;
      padding: 32px;
      box-shadow: 0 20px 45px rgba(15, 23, 42, 0.12);
    }

    header {
      display: flex;
      flex-direction: column;
      gap: 4px;
    }

    h1 {
      margin: 0;
      font-size: 1.8rem;
    }

    p {
      margin: 0;
      color: rgba(71, 85, 105, 0.95);
    }

    main {
      display: grid;
      gap: 24px;
    }

    .panel {
      border-radius: 16px;
      padding: 16px;
      background: rgba(15, 23, 42, 0.05);
      border: 1px solid rgba(148, 163, 184, 0.4);
    }

    pre {
      margin: 0;
      background: rgba(15, 23, 42, 0.75);
      color: #f8fafc;
      border-radius: 12px;
      padding: 16px;
      font-size: 0.85rem;
      max-height: 280px;
      overflow: auto;
    }

    button {
      border: none;
      border-radius: 8px;
      padding: 8px 16px;
      font: inherit;
      cursor: pointer;
      background: #2563eb;
      color: #ffffff;
      transition: background-color 120ms ease;
    }

    button:hover {
      background: #1d4ed8;
    }

    .actions {
      display: flex;
      gap: 12px;
      flex-wrap: wrap;
      margin-top: 16px;
    }

    .demo-packages {
      display: flex;
      gap: 8px;
      flex-wrap: wrap;
      margin-top: 12px;
    }

    .demo-packages button {
      background: rgba(37, 99, 235, 0.12);
      color: rgba(37, 99, 235, 0.9);
      font-size: 0.9rem;
      padding: 6px 12px;
    }

    .demo-packages button:hover {
      background: rgba(37, 99, 235, 0.2);
    }
  `;render(){const e=gt.get();return se`
      <header>
        <h1>NPM Package Info - Runtime Harness</h1>
        <p>Explore how a Lit component consumes signal-driven state for NPM registry data.</p>
        <div class="demo-packages">
          <span style="color: rgba(71, 85, 105, 0.95); margin-right: 8px;">Try these packages:</span>
          <button @click=${()=>this.handleLoadPackage("lit")}>lit</button>
          <button @click=${()=>this.handleLoadPackage("react")}>react</button>
          <button @click=${()=>this.handleLoadPackage("vue")}>vue</button>
          <button @click=${()=>this.handleLoadPackage("svelte")}>svelte</button>
          <button @click=${()=>this.handleLoadPackage("@lit-labs/signals")}>@lit-labs/signals</button>
        </div>
      </header>

      <main>
        <df-npm-info-widget 
          @df-npm-info-search=${this.handlePackageSearch}
          @df-npm-info-reset=${this.handlePackageReset}>
        </df-npm-info-widget>

        <section class="panel" aria-label="store-state">
          <h2>Store snapshot</h2>
          <pre>${JSON.stringify(e,null,2)}</pre>
          <div class="actions">
            <button @click=${this.handleRefresh}>Reload current package</button>
            <button @click=${this.handleReset}>Reset store</button>
          </div>
        </section>
      </main>
    `}handleLoadPackage(e){vt(e)}handlePackageSearch(e){const{packageName:t}=e.detail;t&&vt(t)}handlePackageReset(e){}handleRefresh(){const e=gt.get().packageName;e&&vt(e)}handleReset(){yt()}};Ka=Wa([Ze("df-npm-info-app")],Ka);export{Ka as DfNpmInfoApp};
//# sourceMappingURL=df-npm-info-app.js.map
