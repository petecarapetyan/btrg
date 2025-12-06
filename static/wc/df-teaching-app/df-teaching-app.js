var e=Object.defineProperty,t=(t,i,r)=>(((t,i,r)=>{i in t?e(t,i,{enumerable:!0,configurable:!0,writable:!0,value:r}):t[i]=r})(t,"symbol"!=typeof i?i+"":i,r),r),i=(e,t)=>{if(Object(t)!==t)throw TypeError('Cannot use the "in" operator on this value');return e.has(t)},r=(e,t,i)=>{if(t.has(e))throw TypeError("Cannot add the same private member more than once");t instanceof WeakSet?t.add(e):t.set(e,i)},n=(e,t,i)=>(((e,t,i)=>{if(!t.has(e))throw TypeError("Cannot "+i)})(e,t,"access private method"),i);
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
 */let s=null,a=!1,l=1;const c=Symbol("SIGNAL");function d(e){const t=s;return s=e,t}const h={version:0,lastCleanEpoch:0,dirty:!1,producerNode:void 0,producerLastReadVersion:void 0,producerIndexOfThis:void 0,nextProducerIndex:0,liveConsumerNode:void 0,liveConsumerIndexOfThis:void 0,consumerAllowSignalWrites:!1,consumerIsAlwaysLive:!1,producerMustRecompute:()=>!1,producerRecomputeValue:()=>{},consumerMarkedDirty:()=>{},consumerOnSignalRead:()=>{}};function u(e){if(a)throw new Error("undefined"!=typeof ngDevMode&&ngDevMode?"Assertion error: signal read during notification phase":"");if(null===s)return;s.consumerOnSignalRead(e);const t=s.nextProducerIndex++;if(b(s),t<s.producerNode.length&&s.producerNode[t]!==e&&y(s)){v(s.producerNode[t],s.producerIndexOfThis[t])}s.producerNode[t]!==e&&(s.producerNode[t]=e,s.producerIndexOfThis[t]=y(s)?g(e,s,t):0),s.producerLastReadVersion[t]=e.version}function p(e){if(e.dirty||e.lastCleanEpoch!==l){if(!e.producerMustRecompute(e)&&!function(e){b(e);for(let t=0;t<e.producerNode.length;t++){const i=e.producerNode[t],r=e.producerLastReadVersion[t];if(r!==i.version)return!0;if(p(i),r!==i.version)return!0}return!1}(e))return e.dirty=!1,void(e.lastCleanEpoch=l);e.producerRecomputeValue(e),e.dirty=!1,e.lastCleanEpoch=l}}function f(e){if(void 0===e.liveConsumerNode)return;const t=a;a=!0;try{for(const t of e.liveConsumerNode)t.dirty||m(t)}finally{a=t}}function m(e){var t;e.dirty=!0,f(e),null==(t=e.consumerMarkedDirty)||t.call(e.wrapper??e)}function g(e,t,i){var r;if(_(e),b(e),0===e.liveConsumerNode.length){null==(r=e.watched)||r.call(e.wrapper);for(let t=0;t<e.producerNode.length;t++)e.producerIndexOfThis[t]=g(e.producerNode[t],e,t)}return e.liveConsumerIndexOfThis.push(i),e.liveConsumerNode.push(t)-1}function v(e,t){var i;if(_(e),b(e),"undefined"!=typeof ngDevMode&&ngDevMode&&t>=e.liveConsumerNode.length)throw new Error(`Assertion error: active consumer index ${t} is out of bounds of ${e.liveConsumerNode.length} consumers)`);if(1===e.liveConsumerNode.length){null==(i=e.unwatched)||i.call(e.wrapper);for(let t=0;t<e.producerNode.length;t++)v(e.producerNode[t],e.producerIndexOfThis[t])}const r=e.liveConsumerNode.length-1;if(e.liveConsumerNode[t]=e.liveConsumerNode[r],e.liveConsumerIndexOfThis[t]=e.liveConsumerIndexOfThis[r],e.liveConsumerNode.length--,e.liveConsumerIndexOfThis.length--,t<e.liveConsumerNode.length){const i=e.liveConsumerIndexOfThis[t],r=e.liveConsumerNode[t];b(r),r.producerIndexOfThis[i]=t}}function y(e){var t;return e.consumerIsAlwaysLive||((null==(t=null==e?void 0:e.liveConsumerNode)?void 0:t.length)??0)>0}function b(e){e.producerNode??(e.producerNode=[]),e.producerIndexOfThis??(e.producerIndexOfThis=[]),e.producerLastReadVersion??(e.producerLastReadVersion=[])}function _(e){e.liveConsumerNode??(e.liveConsumerNode=[]),e.liveConsumerIndexOfThis??(e.liveConsumerIndexOfThis=[])}
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */function w(e){if(p(e),u(e),e.value===S)throw e.error;return e.value}const x=Symbol("UNSET"),E=Symbol("COMPUTING"),S=Symbol("ERRORED"),C=(()=>({...h,value:x,dirty:!0,error:null,equal:o,producerMustRecompute:e=>e.value===x||e.value===E,producerRecomputeValue(e){if(e.value===E)throw new Error("Detected cycle in computations.");const t=e.value;e.value=E;const i=function(e){return e&&(e.nextProducerIndex=0),d(e)}(e);let r,n=!1;try{r=e.computation.call(e.wrapper);n=t!==x&&t!==S&&e.equal.call(e.wrapper,t,r)}catch(t){r=S,e.error=t}finally{!function(e,t){if(d(t),e&&void 0!==e.producerNode&&void 0!==e.producerIndexOfThis&&void 0!==e.producerLastReadVersion){if(y(e))for(let t=e.nextProducerIndex;t<e.producerNode.length;t++)v(e.producerNode[t],e.producerIndexOfThis[t]);for(;e.producerNode.length>e.nextProducerIndex;)e.producerNode.pop(),e.producerLastReadVersion.pop(),e.producerIndexOfThis.pop()}}(e,i)}n?e.value=t:(e.value=r,e.version++)}}))();let T=
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
function(){throw new Error};function k(){return u(this),this.value}function A(e,t){!1===(null==s?void 0:s.consumerAllowSignalWrites)&&T(),e.equal.call(e.wrapper,e.value,t)||(e.value=t,function(e){e.version++,l++,f(e)}
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
 */(e))}const I=(()=>({...h,equal:o,value:void 0}))();const O=Symbol("node");var R;(e=>{var o,l,p,f;o=O,l=new WeakSet,e.isState=e=>"object"==typeof e&&i(l,e),e.State=class{constructor(i,n={}){r(this,l),t(this,o);const s=
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
function(e){const t=Object.create(I);t.value=e;const i=()=>(u(t),t.value);return i[c]=t,i}(i),a=s[c];if(this[O]=a,a.wrapper=this,n){const t=n.equals;t&&(a.equal=t),a.watched=n[e.subtle.watched],a.unwatched=n[e.subtle.unwatched]}}get(){if(!(0,e.isState)(this))throw new TypeError("Wrong receiver type for Signal.State.prototype.get");return k.call(this[O])}set(t){if(!(0,e.isState)(this))throw new TypeError("Wrong receiver type for Signal.State.prototype.set");if(a)throw new Error("Writes to signals not permitted during Watcher callback");A(this[O],t)}};p=O,f=new WeakSet,e.isComputed=e=>"object"==typeof e&&i(f,e),e.Computed=class{constructor(i,n){r(this,f),t(this,p);const o=function(e){const t=Object.create(C);t.computation=e;const i=()=>w(t);return i[c]=t,i}(i),s=o[c];if(s.consumerAllowSignalWrites=!0,this[O]=s,s.wrapper=this,n){const t=n.equals;t&&(s.equal=t),s.watched=n[e.subtle.watched],s.unwatched=n[e.subtle.unwatched]}}get(){if(!(0,e.isComputed)(this))throw new TypeError("Wrong receiver type for Signal.Computed.prototype.get");return w(this[O])}},(o=>{var a,l,c,p;o.untrack=function(e){let t,i=null;try{i=d(null),t=e()}finally{d(i)}return t},o.introspectSources=function(t){var i;if(!(0,e.isComputed)(t)&&!(0,e.isWatcher)(t))throw new TypeError("Called introspectSources without a Computed or Watcher argument");return(null==(i=t[O].producerNode)?void 0:i.map(e=>e.wrapper))??[]},o.introspectSinks=function(t){var i;if(!(0,e.isComputed)(t)&&!(0,e.isState)(t))throw new TypeError("Called introspectSinks without a Signal argument");return(null==(i=t[O].liveConsumerNode)?void 0:i.map(e=>e.wrapper))??[]},o.hasSinks=function(t){if(!(0,e.isComputed)(t)&&!(0,e.isState)(t))throw new TypeError("Called hasSinks without a Signal argument");const i=t[O].liveConsumerNode;return!!i&&i.length>0},o.hasSources=function(t){if(!(0,e.isComputed)(t)&&!(0,e.isWatcher)(t))throw new TypeError("Called hasSources without a Computed or Watcher argument");const i=t[O].producerNode;return!!i&&i.length>0};a=O,l=new WeakSet,c=new WeakSet,p=function(t){for(const i of t)if(!(0,e.isComputed)(i)&&!(0,e.isState)(i))throw new TypeError("Called watch/unwatch without a Computed or State argument")},e.isWatcher=e=>i(l,e),o.Watcher=class{constructor(e){r(this,l),r(this,c),t(this,a);let i=Object.create(h);i.wrapper=this,i.consumerMarkedDirty=e,i.consumerIsAlwaysLive=!0,i.consumerAllowSignalWrites=!1,i.producerNode=[],this[O]=i}watch(...t){if(!(0,e.isWatcher)(this))throw new TypeError("Called unwatch without Watcher receiver");n(this,c,p).call(this,t);const i=this[O];i.dirty=!1;const r=d(i);for(const e of t)u(e[O]);d(r)}unwatch(...t){if(!(0,e.isWatcher)(this))throw new TypeError("Called unwatch without Watcher receiver");n(this,c,p).call(this,t);const i=this[O];b(i);for(let e=i.producerNode.length-1;e>=0;e--)if(t.includes(i.producerNode[e].wrapper)){v(i.producerNode[e],i.producerIndexOfThis[e]);const t=i.producerNode.length-1;if(i.producerNode[e]=i.producerNode[t],i.producerIndexOfThis[e]=i.producerIndexOfThis[t],i.producerNode.length--,i.producerIndexOfThis.length--,i.nextProducerIndex--,e<i.producerNode.length){const t=i.producerIndexOfThis[e],r=i.producerNode[e];_(r),r.liveConsumerIndexOfThis[t]=e}}}getPending(){if(!(0,e.isWatcher)(this))throw new TypeError("Called getPending without Watcher receiver");return this[O].producerNode.filter(e=>e.dirty).map(e=>e.wrapper)}},o.currentComputed=function(){var e;return null==(e=s)?void 0:e.wrapper},o.watched=Symbol("watched"),o.unwatched=Symbol("unwatched")})(e.subtle||(e.subtle={}))})(R||(R={}));
/**
 * @license
 * Copyright 2023 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const P=Symbol("SignalWatcherBrand"),N=new FinalizationRegistry(({watcher:e,signal:t})=>{e.unwatch(t)}),D=new WeakMap;function $(e){return!0===e[P]?(console.warn("SignalWatcher should not be applied to the same class more than once."),e):class extends e{constructor(){super(...arguments),this._$St=new R.State(0),this._$Si=!1,this._$So=!0,this._$Sh=new Set}_$Sl(){if(void 0!==this._$Su)return;this._$Sv=new R.Computed(()=>{this._$St.get(),super.performUpdate()});const e=this._$Su=new R.subtle.Watcher(function(){const e=D.get(this);void 0!==e&&(!1===e._$Si&&e.requestUpdate(),this.watch())});D.set(e,this),N.register(this,{watcher:e,signal:this._$Sv}),e.watch(this._$Sv)}_$Sp(){void 0!==this._$Su&&(this._$Su.unwatch(this._$Sv),this._$Sv=void 0,this._$Su=void 0)}performUpdate(){this.isUpdatePending&&(this._$Sl(),this._$Si=!0,this._$St.set(this._$St.get()+1),this._$Si=!1,this._$Sv.get())}update(e){try{this._$So?(this._$So=!1,super.update(e)):this._$Sh.forEach(e=>e.commit())}finally{this.isUpdatePending=!1,this._$Sh.clear()}}requestUpdate(e,t,i){this._$So=!0,super.requestUpdate(e,t,i)}connectedCallback(){super.connectedCallback(),this.requestUpdate()}disconnectedCallback(){super.disconnectedCallback(),queueMicrotask(()=>{!1===this.isConnected&&this._$Sp()})}_(e){this._$Sh.add(e);const t=this._$So;this.requestUpdate(),this._$So=t}m(e){this._$Sh.delete(e)}}}
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const L=1,U=e=>(...t)=>({_$litDirective$:e,values:t});let M=class{constructor(e){}get _$AU(){return this._$AM._$AU}_$AT(e,t,i){this._$Ct=e,this._$AM=t,this._$Ci=i}_$AS(e,t){return this.update(e,t)}update(e,t){return this.render(...t)}};
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const F=globalThis,z=F.trustedTypes,j=z?z.createPolicy("lit-html",{createHTML:e=>e}):void 0,B="$lit$",V=`lit$${Math.random().toFixed(9).slice(2)}$`,H="?"+V,q=`<${H}>`,W=document,K=()=>W.createComment(""),G=e=>null===e||"object"!=typeof e&&"function"!=typeof e,X=Array.isArray,J="[ \t\n\f\r]",Y=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,Z=/-->/g,Q=/>/g,ee=RegExp(`>|${J}(?:([^\\s"'>=/]+)(${J}*=${J}*(?:[^ \t\n\f\r"'\`<>=]|("|')|))|$)`,"g"),te=/'/g,ie=/"/g,re=/^(?:script|style|textarea|title)$/i,ne=(e=>(t,...i)=>({_$litType$:e,strings:t,values:i}))(1),oe=Symbol.for("lit-noChange"),se=Symbol.for("lit-nothing"),ae=new WeakMap,le=W.createTreeWalker(W,129);function ce(e,t){if(!X(e)||!e.hasOwnProperty("raw"))throw Error("invalid template strings array");return void 0!==j?j.createHTML(t):t}const de=(e,t)=>{const i=e.length-1,r=[];let n,o=2===t?"<svg>":3===t?"<math>":"",s=Y;for(let t=0;t<i;t++){const i=e[t];let a,l,c=-1,d=0;for(;d<i.length&&(s.lastIndex=d,l=s.exec(i),null!==l);)d=s.lastIndex,s===Y?"!--"===l[1]?s=Z:void 0!==l[1]?s=Q:void 0!==l[2]?(re.test(l[2])&&(n=RegExp("</"+l[2],"g")),s=ee):void 0!==l[3]&&(s=ee):s===ee?">"===l[0]?(s=n??Y,c=-1):void 0===l[1]?c=-2:(c=s.lastIndex-l[2].length,a=l[1],s=void 0===l[3]?ee:'"'===l[3]?ie:te):s===ie||s===te?s=ee:s===Z||s===Q?s=Y:(s=ee,n=void 0);const h=s===ee&&e[t+1].startsWith("/>")?" ":"";o+=s===Y?i+q:c>=0?(r.push(a),i.slice(0,c)+B+i.slice(c)+V+h):i+V+(-2===c?t:h)}return[ce(e,o+(e[i]||"<?>")+(2===t?"</svg>":3===t?"</math>":"")),r]};let he=class e{constructor({strings:t,_$litType$:i},r){let n;this.parts=[];let o=0,s=0;const a=t.length-1,l=this.parts,[c,d]=de(t,i);if(this.el=e.createElement(c,r),le.currentNode=this.el.content,2===i||3===i){const e=this.el.content.firstChild;e.replaceWith(...e.childNodes)}for(;null!==(n=le.nextNode())&&l.length<a;){if(1===n.nodeType){if(n.hasAttributes())for(const e of n.getAttributeNames())if(e.endsWith(B)){const t=d[s++],i=n.getAttribute(e).split(V),r=/([.?@])?(.*)/.exec(t);l.push({type:1,index:o,name:r[2],strings:i,ctor:"."===r[1]?ge:"?"===r[1]?ve:"@"===r[1]?ye:me}),n.removeAttribute(e)}else e.startsWith(V)&&(l.push({type:6,index:o}),n.removeAttribute(e));if(re.test(n.tagName)){const e=n.textContent.split(V),t=e.length-1;if(t>0){n.textContent=z?z.emptyScript:"";for(let i=0;i<t;i++)n.append(e[i],K()),le.nextNode(),l.push({type:2,index:++o});n.append(e[t],K())}}}else if(8===n.nodeType)if(n.data===H)l.push({type:2,index:o});else{let e=-1;for(;-1!==(e=n.data.indexOf(V,e+1));)l.push({type:7,index:o}),e+=V.length-1}o++}}static createElement(e,t){const i=W.createElement("template");return i.innerHTML=e,i}};function ue(e,t,i=e,r){if(t===oe)return t;let n=void 0!==r?i._$Co?.[r]:i._$Cl;const o=G(t)?void 0:t._$litDirective$;return n?.constructor!==o&&(n?._$AO?.(!1),void 0===o?n=void 0:(n=new o(e),n._$AT(e,i,r)),void 0!==r?(i._$Co??=[])[r]=n:i._$Cl=n),void 0!==n&&(t=ue(e,n._$AS(e,t.values),n,r)),t}let pe=class{constructor(e,t){this._$AV=[],this._$AN=void 0,this._$AD=e,this._$AM=t}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(e){const{el:{content:t},parts:i}=this._$AD,r=(e?.creationScope??W).importNode(t,!0);le.currentNode=r;let n=le.nextNode(),o=0,s=0,a=i[0];for(;void 0!==a;){if(o===a.index){let t;2===a.type?t=new fe(n,n.nextSibling,this,e):1===a.type?t=new a.ctor(n,a.name,a.strings,this,e):6===a.type&&(t=new be(n,this,e)),this._$AV.push(t),a=i[++s]}o!==a?.index&&(n=le.nextNode(),o++)}return le.currentNode=W,r}p(e){let t=0;for(const i of this._$AV)void 0!==i&&(void 0!==i.strings?(i._$AI(e,i,t),t+=i.strings.length-2):i._$AI(e[t])),t++}};class fe{get _$AU(){return this._$AM?._$AU??this._$Cv}constructor(e,t,i,r){this.type=2,this._$AH=se,this._$AN=void 0,this._$AA=e,this._$AB=t,this._$AM=i,this.options=r,this._$Cv=r?.isConnected??!0}get parentNode(){let e=this._$AA.parentNode;const t=this._$AM;return void 0!==t&&11===e?.nodeType&&(e=t.parentNode),e}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(e,t=this){e=ue(this,e,t),G(e)?e===se||null==e||""===e?(this._$AH!==se&&this._$AR(),this._$AH=se):e!==this._$AH&&e!==oe&&this._(e):void 0!==e._$litType$?this.$(e):void 0!==e.nodeType?this.T(e):(e=>X(e)||"function"==typeof e?.[Symbol.iterator])(e)?this.k(e):this._(e)}O(e){return this._$AA.parentNode.insertBefore(e,this._$AB)}T(e){this._$AH!==e&&(this._$AR(),this._$AH=this.O(e))}_(e){this._$AH!==se&&G(this._$AH)?this._$AA.nextSibling.data=e:this.T(W.createTextNode(e)),this._$AH=e}$(e){const{values:t,_$litType$:i}=e,r="number"==typeof i?this._$AC(e):(void 0===i.el&&(i.el=he.createElement(ce(i.h,i.h[0]),this.options)),i);if(this._$AH?._$AD===r)this._$AH.p(t);else{const e=new pe(r,this),i=e.u(this.options);e.p(t),this.T(i),this._$AH=e}}_$AC(e){let t=ae.get(e.strings);return void 0===t&&ae.set(e.strings,t=new he(e)),t}k(e){X(this._$AH)||(this._$AH=[],this._$AR());const t=this._$AH;let i,r=0;for(const n of e)r===t.length?t.push(i=new fe(this.O(K()),this.O(K()),this,this.options)):i=t[r],i._$AI(n),r++;r<t.length&&(this._$AR(i&&i._$AB.nextSibling,r),t.length=r)}_$AR(e=this._$AA.nextSibling,t){for(this._$AP?.(!1,!0,t);e!==this._$AB;){const t=e.nextSibling;e.remove(),e=t}}setConnected(e){void 0===this._$AM&&(this._$Cv=e,this._$AP?.(e))}}let me=class{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(e,t,i,r,n){this.type=1,this._$AH=se,this._$AN=void 0,this.element=e,this.name=t,this._$AM=r,this.options=n,i.length>2||""!==i[0]||""!==i[1]?(this._$AH=Array(i.length-1).fill(new String),this.strings=i):this._$AH=se}_$AI(e,t=this,i,r){const n=this.strings;let o=!1;if(void 0===n)e=ue(this,e,t,0),o=!G(e)||e!==this._$AH&&e!==oe,o&&(this._$AH=e);else{const r=e;let s,a;for(e=n[0],s=0;s<n.length-1;s++)a=ue(this,r[i+s],t,s),a===oe&&(a=this._$AH[s]),o||=!G(a)||a!==this._$AH[s],a===se?e=se:e!==se&&(e+=(a??"")+n[s+1]),this._$AH[s]=a}o&&!r&&this.j(e)}j(e){e===se?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,e??"")}};class ge extends me{constructor(){super(...arguments),this.type=3}j(e){this.element[this.name]=e===se?void 0:e}}class ve extends me{constructor(){super(...arguments),this.type=4}j(e){this.element.toggleAttribute(this.name,!!e&&e!==se)}}let ye=class extends me{constructor(e,t,i,r,n){super(e,t,i,r,n),this.type=5}_$AI(e,t=this){if((e=ue(this,e,t,0)??se)===oe)return;const i=this._$AH,r=e===se&&i!==se||e.capture!==i.capture||e.once!==i.once||e.passive!==i.passive,n=e!==se&&(i===se||r);r&&this.element.removeEventListener(this.name,this,i),n&&this.element.addEventListener(this.name,this,e),this._$AH=e}handleEvent(e){"function"==typeof this._$AH?this._$AH.call(this.options?.host??this.element,e):this._$AH.handleEvent(e)}};class be{constructor(e,t,i){this.element=e,this.type=6,this._$AN=void 0,this._$AM=t,this.options=i}get _$AU(){return this._$AM._$AU}_$AI(e){ue(this,e)}}const _e=F.litHtmlPolyfillSupport;_e?.(he,fe),(F.litHtmlVersions??=[]).push("3.3.1");const we=(e,t,i)=>{const r=i?.renderBefore??t;let n=r._$litPart$;if(void 0===n){const e=i?.renderBefore??null;r._$litPart$=n=new fe(t.insertBefore(K(),e),e,void 0,i??{})}return n._$AI(e),n
/**
 * @license
 * Copyright 2023 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */};R.State,R.Computed;const xe=(e,t)=>new R.State(e,t),Ee=(e,t)=>new R.Computed(e,t),Se=globalThis,Ce=Se.ShadowRoot&&(void 0===Se.ShadyCSS||Se.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,Te=Symbol(),ke=new WeakMap;
/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */let Ae=class{constructor(e,t,i){if(this._$cssResult$=!0,i!==Te)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=e,this.t=t}get styleSheet(){let e=this.o;const t=this.t;if(Ce&&void 0===e){const i=void 0!==t&&1===t.length;i&&(e=ke.get(t)),void 0===e&&((this.o=e=new CSSStyleSheet).replaceSync(this.cssText),i&&ke.set(t,e))}return e}toString(){return this.cssText}};const Ie=(e,...t)=>{const i=1===e.length?e[0]:t.reduce((t,i,r)=>t+(e=>{if(!0===e._$cssResult$)return e.cssText;if("number"==typeof e)return e;throw Error("Value passed to 'css' function must be a 'css' function result: "+e+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(i)+e[r+1],e[0]);return new Ae(i,e,Te)},Oe=Ce?e=>e:e=>e instanceof CSSStyleSheet?(e=>{let t="";for(const i of e.cssRules)t+=i.cssText;return(e=>new Ae("string"==typeof e?e:e+"",void 0,Te))(t)})(e):e,{is:Re,defineProperty:Pe,getOwnPropertyDescriptor:Ne,getOwnPropertyNames:De,getOwnPropertySymbols:$e,getPrototypeOf:Le}=Object,Ue=globalThis,Me=Ue.trustedTypes,Fe=Me?Me.emptyScript:"",ze=Ue.reactiveElementPolyfillSupport,je=(e,t)=>e,Be={toAttribute(e,t){switch(t){case Boolean:e=e?Fe:null;break;case Object:case Array:e=null==e?e:JSON.stringify(e)}return e},fromAttribute(e,t){let i=e;switch(t){case Boolean:i=null!==e;break;case Number:i=null===e?null:Number(e);break;case Object:case Array:try{i=JSON.parse(e)}catch(e){i=null}}return i}},Ve=(e,t)=>!Re(e,t),He={attribute:!0,type:String,converter:Be,reflect:!1,useDefault:!1,hasChanged:Ve};
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */Symbol.metadata??=Symbol("metadata"),Ue.litPropertyMetadata??=new WeakMap;class qe extends HTMLElement{static addInitializer(e){this._$Ei(),(this.l??=[]).push(e)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(e,t=He){if(t.state&&(t.attribute=!1),this._$Ei(),this.prototype.hasOwnProperty(e)&&((t=Object.create(t)).wrapped=!0),this.elementProperties.set(e,t),!t.noAccessor){const i=Symbol(),r=this.getPropertyDescriptor(e,i,t);void 0!==r&&Pe(this.prototype,e,r)}}static getPropertyDescriptor(e,t,i){const{get:r,set:n}=Ne(this.prototype,e)??{get(){return this[t]},set(e){this[t]=e}};return{get:r,set(t){const o=r?.call(this);n?.call(this,t),this.requestUpdate(e,o,i)},configurable:!0,enumerable:!0}}static getPropertyOptions(e){return this.elementProperties.get(e)??He}static _$Ei(){if(this.hasOwnProperty(je("elementProperties")))return;const e=Le(this);e.finalize(),void 0!==e.l&&(this.l=[...e.l]),this.elementProperties=new Map(e.elementProperties)}static finalize(){if(this.hasOwnProperty(je("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(je("properties"))){const e=this.properties,t=[...De(e),...$e(e)];for(const i of t)this.createProperty(i,e[i])}const e=this[Symbol.metadata];if(null!==e){const t=litPropertyMetadata.get(e);if(void 0!==t)for(const[e,i]of t)this.elementProperties.set(e,i)}this._$Eh=new Map;for(const[e,t]of this.elementProperties){const i=this._$Eu(e,t);void 0!==i&&this._$Eh.set(i,e)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(e){const t=[];if(Array.isArray(e)){const i=new Set(e.flat(1/0).reverse());for(const e of i)t.unshift(Oe(e))}else void 0!==e&&t.push(Oe(e));return t}static _$Eu(e,t){const i=t.attribute;return!1===i?void 0:"string"==typeof i?i:"string"==typeof e?e.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){this._$ES=new Promise(e=>this.enableUpdating=e),this._$AL=new Map,this._$E_(),this.requestUpdate(),this.constructor.l?.forEach(e=>e(this))}addController(e){(this._$EO??=new Set).add(e),void 0!==this.renderRoot&&this.isConnected&&e.hostConnected?.()}removeController(e){this._$EO?.delete(e)}_$E_(){const e=new Map,t=this.constructor.elementProperties;for(const i of t.keys())this.hasOwnProperty(i)&&(e.set(i,this[i]),delete this[i]);e.size>0&&(this._$Ep=e)}createRenderRoot(){const e=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return((e,t)=>{if(Ce)e.adoptedStyleSheets=t.map(e=>e instanceof CSSStyleSheet?e:e.styleSheet);else for(const i of t){const t=document.createElement("style"),r=Se.litNonce;void 0!==r&&t.setAttribute("nonce",r),t.textContent=i.cssText,e.appendChild(t)}})(e,this.constructor.elementStyles),e}connectedCallback(){this.renderRoot??=this.createRenderRoot(),this.enableUpdating(!0),this._$EO?.forEach(e=>e.hostConnected?.())}enableUpdating(e){}disconnectedCallback(){this._$EO?.forEach(e=>e.hostDisconnected?.())}attributeChangedCallback(e,t,i){this._$AK(e,i)}_$ET(e,t){const i=this.constructor.elementProperties.get(e),r=this.constructor._$Eu(e,i);if(void 0!==r&&!0===i.reflect){const n=(void 0!==i.converter?.toAttribute?i.converter:Be).toAttribute(t,i.type);this._$Em=e,null==n?this.removeAttribute(r):this.setAttribute(r,n),this._$Em=null}}_$AK(e,t){const i=this.constructor,r=i._$Eh.get(e);if(void 0!==r&&this._$Em!==r){const e=i.getPropertyOptions(r),n="function"==typeof e.converter?{fromAttribute:e.converter}:void 0!==e.converter?.fromAttribute?e.converter:Be;this._$Em=r;const o=n.fromAttribute(t,e.type);this[r]=o??this._$Ej?.get(r)??o,this._$Em=null}}requestUpdate(e,t,i){if(void 0!==e){const r=this.constructor,n=this[e];if(i??=r.getPropertyOptions(e),!((i.hasChanged??Ve)(n,t)||i.useDefault&&i.reflect&&n===this._$Ej?.get(e)&&!this.hasAttribute(r._$Eu(e,i))))return;this.C(e,t,i)}!1===this.isUpdatePending&&(this._$ES=this._$EP())}C(e,t,{useDefault:i,reflect:r,wrapped:n},o){i&&!(this._$Ej??=new Map).has(e)&&(this._$Ej.set(e,o??t??this[e]),!0!==n||void 0!==o)||(this._$AL.has(e)||(this.hasUpdated||i||(t=void 0),this._$AL.set(e,t)),!0===r&&this._$Em!==e&&(this._$Eq??=new Set).add(e))}async _$EP(){this.isUpdatePending=!0;try{await this._$ES}catch(e){Promise.reject(e)}const e=this.scheduleUpdate();return null!=e&&await e,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??=this.createRenderRoot(),this._$Ep){for(const[e,t]of this._$Ep)this[e]=t;this._$Ep=void 0}const e=this.constructor.elementProperties;if(e.size>0)for(const[t,i]of e){const{wrapped:e}=i,r=this[t];!0!==e||this._$AL.has(t)||void 0===r||this.C(t,void 0,i,r)}}let e=!1;const t=this._$AL;try{e=this.shouldUpdate(t),e?(this.willUpdate(t),this._$EO?.forEach(e=>e.hostUpdate?.()),this.update(t)):this._$EM()}catch(t){throw e=!1,this._$EM(),t}e&&this._$AE(t)}willUpdate(e){}_$AE(e){this._$EO?.forEach(e=>e.hostUpdated?.()),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(e)),this.updated(e)}_$EM(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(e){return!0}update(e){this._$Eq&&=this._$Eq.forEach(e=>this._$ET(e,this[e])),this._$EM()}updated(e){}firstUpdated(e){}}qe.elementStyles=[],qe.shadowRootOptions={mode:"open"},qe[je("elementProperties")]=new Map,qe[je("finalized")]=new Map,ze?.({ReactiveElement:qe}),(Ue.reactiveElementVersions??=[]).push("2.1.1");
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const We=globalThis;let Ke=class extends qe{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){const e=super.createRenderRoot();return this.renderOptions.renderBefore??=e.firstChild,e}update(e){const t=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(e),this._$Do=we(t,this.renderRoot,this.renderOptions)}connectedCallback(){super.connectedCallback(),this._$Do?.setConnected(!0)}disconnectedCallback(){super.disconnectedCallback(),this._$Do?.setConnected(!1)}render(){return oe}};Ke._$litElement$=!0,Ke.finalized=!0,We.litElementHydrateSupport?.({LitElement:Ke});const Ge=We.litElementPolyfillSupport;Ge?.({LitElement:Ke}),(We.litElementVersions??=[]).push("4.2.1");
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const Xe=e=>(t,i)=>{void 0!==i?i.addInitializer(()=>{customElements.define(e,t)}):customElements.define(e,t)},Je={attribute:!0,type:String,converter:Be,reflect:!1,hasChanged:Ve},Ye=(e=Je,t,i)=>{const{kind:r,metadata:n}=i;let o=globalThis.litPropertyMetadata.get(n);if(void 0===o&&globalThis.litPropertyMetadata.set(n,o=new Map),"setter"===r&&((e=Object.create(e)).wrapped=!0),o.set(i.name,e),"accessor"===r){const{name:r}=i;return{set(i){const n=t.get.call(this);t.set.call(this,i),this.requestUpdate(r,n,e)},init(t){return void 0!==t&&this.C(r,void 0,e,t),t}}}if("setter"===r){const{name:r}=i;return function(i){const n=this[r];t.call(this,i),this.requestUpdate(r,n,e)}}throw Error("Unsupported decorator location: "+r)};
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function Ze(e){return(t,i)=>"object"==typeof i?Ye(e,t,i):((e,t,i)=>{const r=t.hasOwnProperty(i);return t.constructor.createProperty(i,e),r?Object.getOwnPropertyDescriptor(t,i):void 0})(e,t,i)}
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function Qe(e){return Ze({...e,state:!0,attribute:!1})}
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const et=(e,t,i)=>(i.configurable=!0,i.enumerable=!0,Reflect.decorate&&"object"!=typeof t&&Object.defineProperty(e,t,i),i);
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function tt(e,t){return(t,i,r)=>et(t,i,{get(){return(t=>t.renderRoot?.querySelector(e)??null)(this)}})}
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */let it;
/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
function rt(e){return(t,i)=>{const{slot:r,selector:n}=e??{},o="slot"+(r?`[name=${r}]`:":not([name])");return et(t,i,{get(){const t=this.renderRoot?.querySelector(o),i=t?.assignedElements(e)??[];return void 0===n?i:i.filter(e=>e.matches(n))}})}}
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const nt=xe("World"),ot=xe(0),st=xe(null);Ee(()=>{const e=nt.get();return{name:e,greeting:`Hello, ${e}!`,clickCount:ot.get(),lastInteractionTs:st.get()}});const at=xe(""),lt=xe(null),ct=xe("idle"),dt=xe(null),ht=xe(null);Ee(()=>({packageName:at.get(),packageData:lt.get(),status:ct.get(),lastUpdated:dt.get(),errorMessage:ht.get()}));const ut=["web-components","signals","monorepo"],pt=["intro","intermediate","advanced"],ft=xe(ut[0]),mt=xe([]),gt=xe("idle"),vt=xe(null),yt=xe(0),bt=xe(null),_t=xe(!1),wt=xe(!1);let xt=0,Et=null;const St=[...ut],Ct=Ee(()=>({version:yt.get(),topic:ft.get(),tasks:mt.get(),status:gt.get(),lastUpdated:vt.get(),isAutoRefreshing:wt.get(),errorMessage:bt.get()}));if("object"==typeof globalThis){const e=globalThis;e.__dfPracticeForcePracticeErrorSetter=function(e){_t.set(e)},e.__dfPracticeGetForcePracticeError=()=>_t.get()}function Tt(e){return ft.get()!==e&&(ft.set(e),yt.set(yt.get()+1),!0)}async function kt(e){const t=e??ft.get();ft.set(t),yt.set(yt.get()+1),xt+=1;const i=xt;if(gt.set("loading"),bt.set(null),Pt())return mt.set([]),gt.set("error"),bt.set("Practice tasks fetch forced failure"),void yt.set(yt.get()+1);try{const e=await async function(e){if(Pt())throw new Error("Practice tasks fetch forced failure");await(t=450+550*Math.random(),new Promise(e=>{Pt()?e():setTimeout(e,t)}));var t;const i=e,r=Date.now();return Array.from({length:3},(t,n)=>{const o=pt[n%pt.length];return{id:`${i}-${r}-${n}`,title:Ot(e,o,n+1),summary:Rt(e,o),difficulty:o}})}(t);if(i!==xt)return;mt.set(e),gt.set("ready"),vt.set(Date.now()),yt.set(yt.get()+1)}catch(e){if(i!==xt)return;gt.set("error"),bt.set(e instanceof Error?e.message:"Unknown error"),yt.set(yt.get()+1)}}function At(e=15e3){It(),wt.set(!0),kt(),yt.set(yt.get()+1),Et=setInterval(()=>{kt()},e)}function It(){null!==Et&&(clearInterval(Et),Et=null),wt.set(!1),yt.set(yt.get()+1)}function Ot(e,t,i){return`${r=e,r.charAt(0).toUpperCase()+r.slice(1)} practice #${i} (${t})`;var r}function Rt(e,t){switch(e){case"web-components":return"advanced"===t?"Wire a custom element into a host app without leaking implementation details.":"intermediate"===t?"Refactor lifecycle logic behind a Lit controller to prep for reuse.":"Author a Lit element with reactive properties and slots.";case"signals":return"advanced"===t?"Compose computed signals across packages to flow derived state into UI.":"intermediate"===t?"Replace event-driven updates with signal setters in a form workflow.":"Connect a Lit component to a signal-backed store to mirror state.";case"monorepo":return"advanced"===t?"Split a shared package and rehydrate Turbo caches after dependency changes.":"intermediate"===t?"Promote a feature into a shared workspace while keeping storybook coverage.":"Add a new app workspace and register its build artifacts with Turbo.";default:return"Practice focus not yet documented."}}function Pt(){return _t.get()||Boolean(globalThis.__dfPracticeForcePracticeError)}const Nt=xe([]),Dt=xe("none"),$t=xe([{id:"none",label:"None"},{id:"upload",label:"Upload"},{id:"site",label:"Site"},{id:"add",label:"Add"}]);Ee(()=>({options:$t.get(),selectedId:Dt.get(),disabledIds:Nt.get()}));const Lt=xe("none"),Ut=xe(""),Mt=xe("Select File to Upload"),Ft=xe(!1),zt=xe(0),jt=xe(!1),Bt=xe("void");Ee(()=>({mode:Lt.get(),linkUrl:Ut.get(),fileName:Mt.get(),isUploading:Ft.get(),uploadProgress:zt.get(),isValid:jt.get(),mediaType:Bt.get()}));const Vt=xe(0),Ht=xe(""),qt=xe("idle"),Wt=xe(null),Kt=xe(null);Ee(()=>({tokenCount:Vt.get(),documentContent:Ht.get(),status:qt.get(),lastUpdated:Wt.get(),errorMessage:Kt.get()}));
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
const Gt=function(e){const t=[];let i=0;for(let r=0;r<e.length;r++){let n=e.charCodeAt(r);n<128?t[i++]=n:n<2048?(t[i++]=n>>6|192,t[i++]=63&n|128):55296==(64512&n)&&r+1<e.length&&56320==(64512&e.charCodeAt(r+1))?(n=65536+((1023&n)<<10)+(1023&e.charCodeAt(++r)),t[i++]=n>>18|240,t[i++]=n>>12&63|128,t[i++]=n>>6&63|128,t[i++]=63&n|128):(t[i++]=n>>12|224,t[i++]=n>>6&63|128,t[i++]=63&n|128)}return t},Xt={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:"function"==typeof atob,encodeByteArray(e,t){if(!Array.isArray(e))throw Error("encodeByteArray takes an array as a parameter");this.init_();const i=t?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let t=0;t<e.length;t+=3){const n=e[t],o=t+1<e.length,s=o?e[t+1]:0,a=t+2<e.length,l=a?e[t+2]:0,c=n>>2,d=(3&n)<<4|s>>4;let h=(15&s)<<2|l>>6,u=63&l;a||(u=64,o||(h=64)),r.push(i[c],i[d],i[h],i[u])}return r.join("")},encodeString(e,t){return this.HAS_NATIVE_SUPPORT&&!t?btoa(e):this.encodeByteArray(Gt(e),t)},decodeString(e,t){return this.HAS_NATIVE_SUPPORT&&!t?atob(e):function(e){const t=[];let i=0,r=0;for(;i<e.length;){const n=e[i++];if(n<128)t[r++]=String.fromCharCode(n);else if(n>191&&n<224){const o=e[i++];t[r++]=String.fromCharCode((31&n)<<6|63&o)}else if(n>239&&n<365){const o=((7&n)<<18|(63&e[i++])<<12|(63&e[i++])<<6|63&e[i++])-65536;t[r++]=String.fromCharCode(55296+(o>>10)),t[r++]=String.fromCharCode(56320+(1023&o))}else{const o=e[i++],s=e[i++];t[r++]=String.fromCharCode((15&n)<<12|(63&o)<<6|63&s)}}return t.join("")}(this.decodeStringToByteArray(e,t))},decodeStringToByteArray(e,t){this.init_();const i=t?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let t=0;t<e.length;){const n=i[e.charAt(t++)],o=t<e.length?i[e.charAt(t)]:0;++t;const s=t<e.length?i[e.charAt(t)]:64;++t;const a=t<e.length?i[e.charAt(t)]:64;if(++t,null==n||null==o||null==s||null==a)throw new Jt;const l=n<<2|o>>4;if(r.push(l),64!==s){const e=o<<4&240|s>>2;if(r.push(e),64!==a){const e=s<<6&192|a;r.push(e)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let e=0;e<this.ENCODED_VALS.length;e++)this.byteToCharMap_[e]=this.ENCODED_VALS.charAt(e),this.charToByteMap_[this.byteToCharMap_[e]]=e,this.byteToCharMapWebSafe_[e]=this.ENCODED_VALS_WEBSAFE.charAt(e),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[e]]=e,e>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(e)]=e,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(e)]=e)}}};
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
 */class Jt extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const Yt=function(e){return function(e){const t=Gt(e);return Xt.encodeByteArray(t,!0)}(e).replace(/\./g,"")},Zt=function(e){try{return Xt.decodeString(e,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};
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
const Qt=()=>
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
function(){if("undefined"!=typeof self)return self;if("undefined"!=typeof window)return window;if("undefined"!=typeof global)return global;throw new Error("Unable to locate global object.")}().__FIREBASE_DEFAULTS__,ei=()=>{try{return Qt()||(()=>{if("undefined"==typeof process||void 0===process.env)return;const e=process.env.__FIREBASE_DEFAULTS__;return e?JSON.parse(e):void 0})()||(()=>{if("undefined"==typeof document)return;let e;try{e=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch(e){return}const t=e&&Zt(e[1]);return t&&JSON.parse(t)})()}catch(e){return void console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${e}`)}};
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
function ti(e){try{return(e.startsWith("http://")||e.startsWith("https://")?new URL(e).hostname:e).endsWith(".cloudworkstations.dev")}catch(e){return!1}}
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
 */function ii(){return"undefined"!=typeof navigator&&"string"==typeof navigator.userAgent?navigator.userAgent:""}class ri extends Error{constructor(e,t,i){super(t),this.code=e,this.customData=i,this.name="FirebaseError",Object.setPrototypeOf(this,ri.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,ni.prototype.create)}}class ni{constructor(e,t,i){this.service=e,this.serviceName=t,this.errors=i}create(e,...t){const i=t[0]||{},r=`${this.service}/${e}`,n=this.errors[e],o=n?function(e,t){return e.replace(oi,(e,i)=>{const r=t[i];return null!=r?String(r):`<${i}?>`})}(n,i):"Error",s=`${this.serviceName}: ${o} (${r}).`;return new ri(r,s,i)}}const oi=/\{\$([^}]+)}/g;
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
 */function si(e){const t=[];for(const[i,r]of Object.entries(e))Array.isArray(r)?r.forEach(e=>{t.push(encodeURIComponent(i)+"="+encodeURIComponent(e))}):t.push(encodeURIComponent(i)+"="+encodeURIComponent(r));return t.length?"&"+t.join("&"):""}class ai{constructor(e,t){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=t,this.task.then(()=>{e(this)}).catch(e=>{this.error(e)})}next(e){this.forEachObserver(t=>{t.next(e)})}error(e){this.forEachObserver(t=>{t.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,t,i){let r;if(void 0===e&&void 0===t&&void 0===i)throw new Error("Missing Observer.");r=function(e,t){if("object"!=typeof e||null===e)return!1;for(const i of t)if(i in e&&"function"==typeof e[i])return!0;return!1}(e,["next","error","complete"])?e:{next:e,error:t,complete:i},void 0===r.next&&(r.next=li),void 0===r.error&&(r.error=li),void 0===r.complete&&(r.complete=li);const n=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?r.error(this.finalError):r.complete()}catch(e){}}),this.observers.push(r),n}unsubscribeOne(e){void 0!==this.observers&&void 0!==this.observers[e]&&(delete this.observers[e],this.observerCount-=1,0===this.observerCount&&void 0!==this.onNoObservers&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let t=0;t<this.observers.length;t++)this.sendOne(t,e)}sendOne(e,t){this.task.then(()=>{if(void 0!==this.observers&&void 0!==this.observers[e])try{t(this.observers[e])}catch(e){"undefined"!=typeof console&&console.error&&console.error(e)}})}close(e){this.finalized||(this.finalized=!0,void 0!==e&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function li(){}
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
 */function ci(e){return e&&e._delegate?e._delegate:e}class di{constructor(e,t,i){this.name=e,this.instanceFactory=t,this.type=i,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}
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
 */var hi;!function(e){e[e.DEBUG=0]="DEBUG",e[e.VERBOSE=1]="VERBOSE",e[e.INFO=2]="INFO",e[e.WARN=3]="WARN",e[e.ERROR=4]="ERROR",e[e.SILENT=5]="SILENT"}(hi||(hi={}));const ui={debug:hi.DEBUG,verbose:hi.VERBOSE,info:hi.INFO,warn:hi.WARN,error:hi.ERROR,silent:hi.SILENT},pi=hi.INFO,fi={[hi.DEBUG]:"log",[hi.VERBOSE]:"log",[hi.INFO]:"info",[hi.WARN]:"warn",[hi.ERROR]:"error"},mi=(e,t,...i)=>{if(t<e.logLevel)return;const r=(new Date).toISOString(),n=fi[t];if(!n)throw new Error(`Attempted to log a message with an invalid logType (value: ${t})`);console[n](`[${r}]  ${e.name}:`,...i)};class gi{constructor(e){this.name=e,this._logLevel=pi,this._logHandler=mi,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in hi))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel="string"==typeof e?ui[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if("function"!=typeof e)throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,hi.DEBUG,...e),this._logHandler(this,hi.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,hi.VERBOSE,...e),this._logHandler(this,hi.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,hi.INFO,...e),this._logHandler(this,hi.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,hi.WARN,...e),this._logHandler(this,hi.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,hi.ERROR,...e),this._logHandler(this,hi.ERROR,...e)}}let vi,yi;const bi=new WeakMap,_i=new WeakMap,wi=new WeakMap,xi=new WeakMap,Ei=new WeakMap;let Si={get(e,t,i){if(e instanceof IDBTransaction){if("done"===t)return _i.get(e);if("objectStoreNames"===t)return e.objectStoreNames||wi.get(e);if("store"===t)return i.objectStoreNames[1]?void 0:i.objectStore(i.objectStoreNames[0])}return ki(e[t])},set:(e,t,i)=>(e[t]=i,!0),has:(e,t)=>e instanceof IDBTransaction&&("done"===t||"store"===t)||t in e};function Ci(e){return e!==IDBDatabase.prototype.transaction||"objectStoreNames"in IDBTransaction.prototype?(yi||(yi=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])).includes(e)?function(...t){return e.apply(Ai(this),t),ki(bi.get(this))}:function(...t){return ki(e.apply(Ai(this),t))}:function(t,...i){const r=e.call(Ai(this),t,...i);return wi.set(r,t.sort?t.sort():[t]),ki(r)}}function Ti(e){return"function"==typeof e?Ci(e):(e instanceof IDBTransaction&&function(e){if(_i.has(e))return;const t=new Promise((t,i)=>{const r=()=>{e.removeEventListener("complete",n),e.removeEventListener("error",o),e.removeEventListener("abort",o)},n=()=>{t(),r()},o=()=>{i(e.error||new DOMException("AbortError","AbortError")),r()};e.addEventListener("complete",n),e.addEventListener("error",o),e.addEventListener("abort",o)});_i.set(e,t)}(e),t=e,(vi||(vi=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])).some(e=>t instanceof e)?new Proxy(e,Si):e);var t}function ki(e){if(e instanceof IDBRequest)return function(e){const t=new Promise((t,i)=>{const r=()=>{e.removeEventListener("success",n),e.removeEventListener("error",o)},n=()=>{t(ki(e.result)),r()},o=()=>{i(e.error),r()};e.addEventListener("success",n),e.addEventListener("error",o)});return t.then(t=>{t instanceof IDBCursor&&bi.set(t,e)}).catch(()=>{}),Ei.set(t,e),t}(e);if(xi.has(e))return xi.get(e);const t=Ti(e);return t!==e&&(xi.set(e,t),Ei.set(t,e)),t}const Ai=e=>Ei.get(e);const Ii=["get","getKey","getAll","getAllKeys","count"],Oi=["put","add","delete","clear"],Ri=new Map;function Pi(e,t){if(!(e instanceof IDBDatabase)||t in e||"string"!=typeof t)return;if(Ri.get(t))return Ri.get(t);const i=t.replace(/FromIndex$/,""),r=t!==i,n=Oi.includes(i);if(!(i in(r?IDBIndex:IDBObjectStore).prototype)||!n&&!Ii.includes(i))return;const o=async function(e,...t){const o=this.transaction(e,n?"readwrite":"readonly");let s=o.store;return r&&(s=s.index(t.shift())),(await Promise.all([s[i](...t),n&&o.done]))[0]};return Ri.set(t,o),o}Si=(e=>({...e,get:(t,i,r)=>Pi(t,i)||e.get(t,i,r),has:(t,i)=>!!Pi(t,i)||e.has(t,i)}))(Si);
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
class Ni{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(e=>{if(function(e){const t=e.getComponent();return"VERSION"===(null==t?void 0:t.type)}(e)){const t=e.getImmediate();return`${t.library}/${t.version}`}return null}).filter(e=>e).join(" ")}}const Di="@firebase/app",$i="0.13.2",Li=new gi("@firebase/app"),Ui="@firebase/app-compat",Mi="@firebase/analytics-compat",Fi="@firebase/analytics",zi="@firebase/app-check-compat",ji="@firebase/app-check",Bi="@firebase/auth",Vi="@firebase/auth-compat",Hi="@firebase/database",qi="@firebase/data-connect",Wi="@firebase/database-compat",Ki="@firebase/functions",Gi="@firebase/functions-compat",Xi="@firebase/installations",Ji="@firebase/installations-compat",Yi="@firebase/messaging",Zi="@firebase/messaging-compat",Qi="@firebase/performance",er="@firebase/performance-compat",tr="@firebase/remote-config",ir="@firebase/remote-config-compat",rr="@firebase/storage",nr="@firebase/storage-compat",or="@firebase/firestore",sr="@firebase/ai",ar="@firebase/firestore-compat",lr="firebase",cr={[Di]:"fire-core",[Ui]:"fire-core-compat",[Fi]:"fire-analytics",[Mi]:"fire-analytics-compat",[ji]:"fire-app-check",[zi]:"fire-app-check-compat",[Bi]:"fire-auth",[Vi]:"fire-auth-compat",[Hi]:"fire-rtdb",[qi]:"fire-data-connect",[Wi]:"fire-rtdb-compat",[Ki]:"fire-fn",[Gi]:"fire-fn-compat",[Xi]:"fire-iid",[Ji]:"fire-iid-compat",[Yi]:"fire-fcm",[Zi]:"fire-fcm-compat",[Qi]:"fire-perf",[er]:"fire-perf-compat",[tr]:"fire-rc",[ir]:"fire-rc-compat",[rr]:"fire-gcs",[nr]:"fire-gcs-compat",[or]:"fire-fst",[ar]:"fire-fst-compat",[sr]:"fire-vertex","fire-js":"fire-js",[lr]:"fire-js-all"},dr=new Map,hr=new Map,ur=new Map;function pr(e,t){try{e.container.addComponent(t)}catch(i){Li.debug(`Component ${t.name} failed to register with FirebaseApp ${e.name}`,i)}}function fr(e){const t=e.name;if(ur.has(t))return Li.debug(`There were multiple attempts to register component ${t}.`),!1;ur.set(t,e);for(const t of dr.values())pr(t,e);for(const t of hr.values())pr(t,e);return!0}function mr(e){return null!=e&&void 0!==e.settings}
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
 */const gr=new ni("app","Firebase",{"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."}),vr="11.10.0";function yr(e,t,i){var r;let n=null!==(r=cr[e])&&void 0!==r?r:e;i&&(n+=`-${i}`);const o=n.match(/\s|\//),s=t.match(/\s|\//);if(o||s){const e=[`Unable to register library "${n}" with version "${t}":`];return o&&e.push(`library name "${n}" contains illegal characters (whitespace or "/")`),o&&s&&e.push("and"),s&&e.push(`version name "${t}" contains illegal characters (whitespace or "/")`),void Li.warn(e.join(" "))}fr(new di(`${n}-version`,()=>({library:n,version:t}),"VERSION"))}
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
 */const br="firebase-heartbeat-store";let _r=null;function wr(){return _r||(_r=function(e,t,{blocked:i,upgrade:r,blocking:n,terminated:o}={}){const s=indexedDB.open(e,t),a=ki(s);return r&&s.addEventListener("upgradeneeded",e=>{r(ki(s.result),e.oldVersion,e.newVersion,ki(s.transaction),e)}),i&&s.addEventListener("blocked",e=>i(e.oldVersion,e.newVersion,e)),a.then(e=>{o&&e.addEventListener("close",()=>o()),n&&e.addEventListener("versionchange",e=>n(e.oldVersion,e.newVersion,e))}).catch(()=>{}),a}("firebase-heartbeat-database",1,{upgrade:(e,t)=>{if(0===t)try{e.createObjectStore(br)}catch(e){console.warn(e)}}}).catch(e=>{throw gr.create("idb-open",{originalErrorMessage:e.message})})),_r}async function xr(e,t){try{const i=(await wr()).transaction(br,"readwrite"),r=i.objectStore(br);await r.put(t,Er(e)),await i.done}catch(e){if(e instanceof ri)Li.warn(e.message);else{const t=gr.create("idb-set",{originalErrorMessage:null==e?void 0:e.message});Li.warn(t.message)}}}function Er(e){return`${e.name}!${e.options.appId}`}
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
 */class Sr{constructor(e){this.container=e,this._heartbeatsCache=null;const t=this.container.getProvider("app").getImmediate();this._storage=new Tr(t),this._heartbeatsCachePromise=this._storage.read().then(e=>(this._heartbeatsCache=e,e))}async triggerHeartbeat(){var e,t;try{const i=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),r=Cr();if(null==(null===(e=this._heartbeatsCache)||void 0===e?void 0:e.heartbeats)&&(this._heartbeatsCache=await this._heartbeatsCachePromise,null==(null===(t=this._heartbeatsCache)||void 0===t?void 0:t.heartbeats)))return;if(this._heartbeatsCache.lastSentHeartbeatDate===r||this._heartbeatsCache.heartbeats.some(e=>e.date===r))return;if(this._heartbeatsCache.heartbeats.push({date:r,agent:i}),this._heartbeatsCache.heartbeats.length>30){const e=function(e){if(0===e.length)return-1;let t=0,i=e[0].date;for(let r=1;r<e.length;r++)e[r].date<i&&(i=e[r].date,t=r);return t}
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
 */(this._heartbeatsCache.heartbeats);this._heartbeatsCache.heartbeats.splice(e,1)}return this._storage.overwrite(this._heartbeatsCache)}catch(e){Li.warn(e)}}async getHeartbeatsHeader(){var e;try{if(null===this._heartbeatsCache&&await this._heartbeatsCachePromise,null==(null===(e=this._heartbeatsCache)||void 0===e?void 0:e.heartbeats)||0===this._heartbeatsCache.heartbeats.length)return"";const t=Cr(),{heartbeatsToSend:i,unsentEntries:r}=function(e,t=1024){const i=[];let r=e.slice();for(const n of e){const e=i.find(e=>e.agent===n.agent);if(e){if(e.dates.push(n.date),kr(i)>t){e.dates.pop();break}}else if(i.push({agent:n.agent,dates:[n.date]}),kr(i)>t){i.pop();break}r=r.slice(1)}return{heartbeatsToSend:i,unsentEntries:r}}(this._heartbeatsCache.heartbeats),n=Yt(JSON.stringify({version:2,heartbeats:i}));return this._heartbeatsCache.lastSentHeartbeatDate=t,r.length>0?(this._heartbeatsCache.heartbeats=r,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),n}catch(e){return Li.warn(e),""}}}function Cr(){return(new Date).toISOString().substring(0,10)}class Tr{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return!!function(){try{return"object"==typeof indexedDB}catch(e){return!1}}()&&new Promise((e,t)=>{try{let i=!0;const r="validate-browser-context-for-indexeddb-analytics-module",n=self.indexedDB.open(r);n.onsuccess=()=>{n.result.close(),i||self.indexedDB.deleteDatabase(r),e(!0)},n.onupgradeneeded=()=>{i=!1},n.onerror=()=>{var e;t((null===(e=n.error)||void 0===e?void 0:e.message)||"")}}catch(e){t(e)}}).then(()=>!0).catch(()=>!1)}async read(){if(await this._canUseIndexedDBPromise){const e=await async function(e){try{const t=(await wr()).transaction(br),i=await t.objectStore(br).get(Er(e));return await t.done,i}catch(e){if(e instanceof ri)Li.warn(e.message);else{const t=gr.create("idb-get",{originalErrorMessage:null==e?void 0:e.message});Li.warn(t.message)}}}(this.app);return(null==e?void 0:e.heartbeats)?e:{heartbeats:[]}}return{heartbeats:[]}}async overwrite(e){var t;if(await this._canUseIndexedDBPromise){const i=await this.read();return xr(this.app,{lastSentHeartbeatDate:null!==(t=e.lastSentHeartbeatDate)&&void 0!==t?t:i.lastSentHeartbeatDate,heartbeats:e.heartbeats})}}async add(e){var t;if(await this._canUseIndexedDBPromise){const i=await this.read();return xr(this.app,{lastSentHeartbeatDate:null!==(t=e.lastSentHeartbeatDate)&&void 0!==t?t:i.lastSentHeartbeatDate,heartbeats:[...i.heartbeats,...e.heartbeats]})}}}function kr(e){return Yt(JSON.stringify({version:2,heartbeats:e})).length}var Ar;function Ir(e,t){var i={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(i[r]=e[r]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var n=0;for(r=Object.getOwnPropertySymbols(e);n<r.length;n++)t.indexOf(r[n])<0&&Object.prototype.propertyIsEnumerable.call(e,r[n])&&(i[r[n]]=e[r[n]])}return i}function Or(e,t,i,r){var n,o=arguments.length,s=o<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,i):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e,t,i,r);else for(var a=e.length-1;a>=0;a--)(n=e[a])&&(s=(o<3?n(s):o>3?n(t,i,s):n(t,i))||s);return o>3&&s&&Object.defineProperty(t,i,s),s}function Rr(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}Ar="",fr(new di("platform-logger",e=>new Ni(e),"PRIVATE")),fr(new di("heartbeat",e=>new Sr(e),"PRIVATE")),yr(Di,$i,Ar),yr(Di,$i,"esm2017"),yr("fire-js",""),"function"==typeof SuppressedError&&SuppressedError;const Pr=Rr,Nr=new ni("auth","Firebase",{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}),Dr=new gi("@firebase/auth");function $r(e,...t){Dr.logLevel<=hi.ERROR&&Dr.error(`Auth (${vr}): ${e}`,...t)}
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
 */function Lr(e,...t){throw zr(e,...t)}function Ur(e,...t){return zr(e,...t)}function Mr(e,t,i){const r=Object.assign(Object.assign({},Pr()),{[t]:i});return new ni("auth","Firebase",r).create(t,{appName:e.name})}function Fr(e){return Mr(e,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function zr(e,...t){if("string"!=typeof e){const i=t[0],r=[...t.slice(1)];return r[0]&&(r[0].appName=e.name),e._errorFactory.create(i,...r)}return Nr.create(e,...t)}function jr(e,t,...i){if(!e)throw zr(t,...i)}function Br(e){const t="INTERNAL ASSERTION FAILED: "+e;throw $r(t),new Error(t)}function Vr(e,t){e||Br(t)}function Hr(){var e;return"undefined"!=typeof self&&(null===(e=self.location)||void 0===e?void 0:e.protocol)||null}
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
 */function qr(){return"undefined"==typeof navigator||!navigator||!("onLine"in navigator)||"boolean"!=typeof navigator.onLine||"http:"!==Hr()&&"https:"!==Hr()&&!function(){const e="object"==typeof chrome?chrome.runtime:"object"==typeof browser?browser.runtime:void 0;return"object"==typeof e&&void 0!==e.id}()&&!("connection"in navigator)||navigator.onLine}
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
class Wr{constructor(e,t){this.shortDelay=e,this.longDelay=t,Vr(t>e,"Short delay should be less than long delay!"),this.isMobile="undefined"!=typeof window&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(ii())||"object"==typeof navigator&&"ReactNative"===navigator.product}get(){return qr()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}
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
class Kr{static initialize(e,t,i){this.fetchImpl=e,t&&(this.headersImpl=t),i&&(this.responseImpl=i)}static fetch(){return this.fetchImpl?this.fetchImpl:"undefined"!=typeof self&&"fetch"in self?self.fetch:"undefined"!=typeof globalThis&&globalThis.fetch?globalThis.fetch:"undefined"!=typeof fetch?fetch:void Br("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){return this.headersImpl?this.headersImpl:"undefined"!=typeof self&&"Headers"in self?self.Headers:"undefined"!=typeof globalThis&&globalThis.Headers?globalThis.Headers:"undefined"!=typeof Headers?Headers:void Br("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){return this.responseImpl?this.responseImpl:"undefined"!=typeof self&&"Response"in self?self.Response:"undefined"!=typeof globalThis&&globalThis.Response?globalThis.Response:"undefined"!=typeof Response?Response:void Br("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}
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
 */const Gr={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"},Xr=["/v1/accounts:signInWithCustomToken","/v1/accounts:signInWithEmailLink","/v1/accounts:signInWithIdp","/v1/accounts:signInWithPassword","/v1/accounts:signInWithPhoneNumber","/v1/token"],Jr=new Wr(3e4,6e4);
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
 */function Yr(e,t){return e.tenantId&&!t.tenantId?Object.assign(Object.assign({},t),{tenantId:e.tenantId}):t}async function Zr(e,t,i,r,n={}){return Qr(e,n,async()=>{let n={},o={};r&&("GET"===t?o=r:n={body:JSON.stringify(r)});const s=si(Object.assign({key:e.config.apiKey},o)).slice(1),a=await e._getAdditionalHeaders();a["Content-Type"]="application/json",e.languageCode&&(a["X-Firebase-Locale"]=e.languageCode);const l=Object.assign({method:t,headers:a},n);return"undefined"!=typeof navigator&&"Cloudflare-Workers"===navigator.userAgent||(l.referrerPolicy="no-referrer"),e.emulatorConfig&&ti(e.emulatorConfig.host)&&(l.credentials="include"),Kr.fetch()(await en(e,e.config.apiHost,i,s),l)})}async function Qr(e,t,i){e._canInitEmulator=!1;const r=Object.assign(Object.assign({},Gr),t);try{const t=new tn(e),n=await Promise.race([i(),t.promise]);t.clearNetworkTimeout();const o=await n.json();if("needConfirmation"in o)throw rn(e,"account-exists-with-different-credential",o);if(n.ok&&!("errorMessage"in o))return o;{const t=n.ok?o.errorMessage:o.error.message,[i,s]=t.split(" : ");if("FEDERATED_USER_ID_ALREADY_LINKED"===i)throw rn(e,"credential-already-in-use",o);if("EMAIL_EXISTS"===i)throw rn(e,"email-already-in-use",o);if("USER_DISABLED"===i)throw rn(e,"user-disabled",o);const a=r[i]||i.toLowerCase().replace(/[_\s]+/g,"-");if(s)throw Mr(e,a,s);Lr(e,a)}}catch(t){if(t instanceof ri)throw t;Lr(e,"network-request-failed",{message:String(t)})}}async function en(e,t,i,r){const n=`${t}${i}?${r}`,o=e,s=o.config.emulator?function(e,t){Vr(e.emulator,"Emulator should always be set here");const{url:i}=e.emulator;return t?`${i}${t.startsWith("/")?t.slice(1):t}`:i}(e.config,n):`${e.config.apiScheme}://${n}`;if(Xr.includes(i)&&(await o._persistenceManagerAvailable,"COOKIE"===o._getPersistenceType())){return o._getPersistence()._getFinalTarget(s).toString()}return s}class tn{clearNetworkTimeout(){clearTimeout(this.timer)}constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((e,t)=>{this.timer=setTimeout(()=>t(Ur(this.auth,"network-request-failed")),Jr.get())})}}function rn(e,t,i){const r={appName:e.name};i.email&&(r.email=i.email),i.phoneNumber&&(r.phoneNumber=i.phoneNumber);const n=Ur(e,t,r);return n.customData._tokenResponse=i,n}
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
 */async function nn(e,t){return Zr(e,"POST","/v1/accounts:lookup",t)}
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
 */function on(e){if(e)try{const t=new Date(Number(e));if(!isNaN(t.getTime()))return t.toUTCString()}catch(e){}}function sn(e){return 1e3*Number(e)}function an(e){const[t,i,r]=e.split(".");if(void 0===t||void 0===i||void 0===r)return $r("JWT malformed, contained fewer than 3 sections"),null;try{const e=Zt(i);return e?JSON.parse(e):($r("Failed to decode base64 JWT payload"),null)}catch(e){return $r("Caught error parsing JWT payload as JSON",null==e?void 0:e.toString()),null}}function ln(e){const t=an(e);return jr(t,"internal-error"),jr(void 0!==t.exp,"internal-error"),jr(void 0!==t.iat,"internal-error"),Number(t.exp)-Number(t.iat)}
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
 */async function cn(e,t,i=!1){if(i)return t;try{return await t}catch(t){throw t instanceof ri&&function({code:e}){return"auth/user-disabled"===e||"auth/user-token-expired"===e}
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
 */(t)&&e.auth.currentUser===e&&await e.auth.signOut(),t}}class dn{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,null!==this.timerId&&clearTimeout(this.timerId))}getInterval(e){var t;if(e){const e=this.errorBackoff;return this.errorBackoff=Math.min(2*this.errorBackoff,96e4),e}{this.errorBackoff=3e4;const e=(null!==(t=this.user.stsTokenManager.expirationTime)&&void 0!==t?t:0)-Date.now()-3e5;return Math.max(0,e)}}schedule(e=!1){if(!this.isRunning)return;const t=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},t)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){return void("auth/network-request-failed"===(null==e?void 0:e.code)&&this.schedule(!0))}this.schedule()}}
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
 */class hn{constructor(e,t){this.createdAt=e,this.lastLoginAt=t,this._initializeTime()}_initializeTime(){this.lastSignInTime=on(this.lastLoginAt),this.creationTime=on(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}
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
 */async function un(e){var t;const i=e.auth,r=await e.getIdToken(),n=await cn(e,nn(i,{idToken:r}));jr(null==n?void 0:n.users.length,i,"internal-error");const o=n.users[0];e._notifyReloadListener(o);const s=(null===(t=o.providerUserInfo)||void 0===t?void 0:t.length)?pn(o.providerUserInfo):[],a=function(e,t){const i=e.filter(e=>!t.some(t=>t.providerId===e.providerId));return[...i,...t]}(e.providerData,s),l=e.isAnonymous,c=!(e.email&&o.passwordHash||(null==a?void 0:a.length)),d=!!l&&c,h={uid:o.localId,displayName:o.displayName||null,photoURL:o.photoUrl||null,email:o.email||null,emailVerified:o.emailVerified||!1,phoneNumber:o.phoneNumber||null,tenantId:o.tenantId||null,providerData:a,metadata:new hn(o.createdAt,o.lastLoginAt),isAnonymous:d};Object.assign(e,h)}function pn(e){return e.map(e=>{var{providerId:t}=e,i=Ir(e,["providerId"]);return{providerId:t,uid:i.rawId||"",displayName:i.displayName||null,email:i.email||null,phoneNumber:i.phoneNumber||null,photoURL:i.photoUrl||null}})}
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
class fn{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){jr(e.idToken,"internal-error"),jr(void 0!==e.idToken,"internal-error"),jr(void 0!==e.refreshToken,"internal-error");const t="expiresIn"in e&&void 0!==e.expiresIn?Number(e.expiresIn):ln(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,t)}updateFromIdToken(e){jr(0!==e.length,"internal-error");const t=ln(e);this.updateTokensAndExpiration(e,null,t)}async getToken(e,t=!1){return t||!this.accessToken||this.isExpired?(jr(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null):this.accessToken}clearRefreshToken(){this.refreshToken=null}async refresh(e,t){const{accessToken:i,refreshToken:r,expiresIn:n}=await async function(e,t){const i=await Qr(e,{},async()=>{const i=si({grant_type:"refresh_token",refresh_token:t}).slice(1),{tokenApiHost:r,apiKey:n}=e.config,o=await en(e,r,"/v1/token",`key=${n}`),s=await e._getAdditionalHeaders();s["Content-Type"]="application/x-www-form-urlencoded";const a={method:"POST",headers:s,body:i};return e.emulatorConfig&&ti(e.emulatorConfig.host)&&(a.credentials="include"),Kr.fetch()(o,a)});return{accessToken:i.access_token,expiresIn:i.expires_in,refreshToken:i.refresh_token}}(e,t);this.updateTokensAndExpiration(i,r,Number(n))}updateTokensAndExpiration(e,t,i){this.refreshToken=t||null,this.accessToken=e||null,this.expirationTime=Date.now()+1e3*i}static fromJSON(e,t){const{refreshToken:i,accessToken:r,expirationTime:n}=t,o=new fn;return i&&(jr("string"==typeof i,"internal-error",{appName:e}),o.refreshToken=i),r&&(jr("string"==typeof r,"internal-error",{appName:e}),o.accessToken=r),n&&(jr("number"==typeof n,"internal-error",{appName:e}),o.expirationTime=n),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new fn,this.toJSON())}_performRefresh(){return Br("not implemented")}}
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
 */function mn(e,t){jr("string"==typeof e||void 0===e,"internal-error",{appName:t})}class gn{constructor(e){var{uid:t,auth:i,stsTokenManager:r}=e,n=Ir(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new dn(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=t,this.auth=i,this.stsTokenManager=r,this.accessToken=r.accessToken,this.displayName=n.displayName||null,this.email=n.email||null,this.emailVerified=n.emailVerified||!1,this.phoneNumber=n.phoneNumber||null,this.photoURL=n.photoURL||null,this.isAnonymous=n.isAnonymous||!1,this.tenantId=n.tenantId||null,this.providerData=n.providerData?[...n.providerData]:[],this.metadata=new hn(n.createdAt||void 0,n.lastLoginAt||void 0)}async getIdToken(e){const t=await cn(this,this.stsTokenManager.getToken(this.auth,e));return jr(t,this.auth,"internal-error"),this.accessToken!==t&&(this.accessToken=t,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),t}getIdTokenResult(e){return async function(e,t=!1){const i=ci(e),r=await i.getIdToken(t),n=an(r);jr(n&&n.exp&&n.auth_time&&n.iat,i.auth,"internal-error");const o="object"==typeof n.firebase?n.firebase:void 0,s=null==o?void 0:o.sign_in_provider;return{claims:n,token:r,authTime:on(sn(n.auth_time)),issuedAtTime:on(sn(n.iat)),expirationTime:on(sn(n.exp)),signInProvider:s||null,signInSecondFactor:(null==o?void 0:o.sign_in_second_factor)||null}}(this,e)}reload(){return async function(e){const t=ci(e);await un(t),await t.auth._persistUserIfCurrent(t),t.auth._notifyListenersIfCurrent(t)}(this)}_assign(e){this!==e&&(jr(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(e=>Object.assign({},e)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const t=new gn(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return t.metadata._copy(this.metadata),t}_onReload(e){jr(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,t=!1){let i=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),i=!0),t&&await un(this),await this.auth._persistUserIfCurrent(this),i&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(mr(this.auth.app))return Promise.reject(Fr(this.auth));const e=await this.getIdToken();return await cn(this,async function(e,t){return Zr(e,"POST","/v1/accounts:delete",t)}(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,t){var i,r,n,o,s,a,l,c;const d=null!==(i=t.displayName)&&void 0!==i?i:void 0,h=null!==(r=t.email)&&void 0!==r?r:void 0,u=null!==(n=t.phoneNumber)&&void 0!==n?n:void 0,p=null!==(o=t.photoURL)&&void 0!==o?o:void 0,f=null!==(s=t.tenantId)&&void 0!==s?s:void 0,m=null!==(a=t._redirectEventId)&&void 0!==a?a:void 0,g=null!==(l=t.createdAt)&&void 0!==l?l:void 0,v=null!==(c=t.lastLoginAt)&&void 0!==c?c:void 0,{uid:y,emailVerified:b,isAnonymous:_,providerData:w,stsTokenManager:x}=t;jr(y&&x,e,"internal-error");const E=fn.fromJSON(this.name,x);jr("string"==typeof y,e,"internal-error"),mn(d,e.name),mn(h,e.name),jr("boolean"==typeof b,e,"internal-error"),jr("boolean"==typeof _,e,"internal-error"),mn(u,e.name),mn(p,e.name),mn(f,e.name),mn(m,e.name),mn(g,e.name),mn(v,e.name);const S=new gn({uid:y,auth:e,email:h,emailVerified:b,displayName:d,isAnonymous:_,photoURL:p,phoneNumber:u,tenantId:f,stsTokenManager:E,createdAt:g,lastLoginAt:v});return w&&Array.isArray(w)&&(S.providerData=w.map(e=>Object.assign({},e))),m&&(S._redirectEventId=m),S}static async _fromIdTokenResponse(e,t,i=!1){const r=new fn;r.updateFromServerResponse(t);const n=new gn({uid:t.localId,auth:e,stsTokenManager:r,isAnonymous:i});return await un(n),n}static async _fromGetAccountInfoResponse(e,t,i){const r=t.users[0];jr(void 0!==r.localId,"internal-error");const n=void 0!==r.providerUserInfo?pn(r.providerUserInfo):[],o=!(r.email&&r.passwordHash||(null==n?void 0:n.length)),s=new fn;s.updateFromIdToken(i);const a=new gn({uid:r.localId,auth:e,stsTokenManager:s,isAnonymous:o}),l={uid:r.localId,displayName:r.displayName||null,photoURL:r.photoUrl||null,email:r.email||null,emailVerified:r.emailVerified||!1,phoneNumber:r.phoneNumber||null,tenantId:r.tenantId||null,providerData:n,metadata:new hn(r.createdAt,r.lastLoginAt),isAnonymous:!(r.email&&r.passwordHash||(null==n?void 0:n.length))};return Object.assign(a,l),a}}
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
 */const vn=new Map;function yn(e){Vr(e instanceof Function,"Expected a class definition");let t=vn.get(e);return t?(Vr(t instanceof e,"Instance stored in cache mismatched with class"),t):(t=new e,vn.set(e,t),t)}
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
 */class bn{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,t){this.storage[e]=t}async _get(e){const t=this.storage[e];return void 0===t?null:t}async _remove(e){delete this.storage[e]}_addListener(e,t){}_removeListener(e,t){}}bn.type="NONE";const _n=bn;
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
 */function wn(e,t,i){return`firebase:${e}:${t}:${i}`}class xn{constructor(e,t,i){this.persistence=e,this.auth=t,this.userKey=i;const{config:r,name:n}=this.auth;this.fullUserKey=wn(this.userKey,r.apiKey,n),this.fullPersistenceKey=wn("persistence",r.apiKey,n),this.boundEventHandler=t._onStorageEvent.bind(t),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);if(!e)return null;if("string"==typeof e){const t=await nn(this.auth,{idToken:e}).catch(()=>{});return t?gn._fromGetAccountInfoResponse(this.auth,t,e):null}return gn._fromJSON(this.auth,e)}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const t=await this.getCurrentUser();return await this.removeCurrentUser(),this.persistence=e,t?this.setCurrentUser(t):void 0}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,t,i="authUser"){if(!t.length)return new xn(yn(_n),e,i);const r=(await Promise.all(t.map(async e=>{if(await e._isAvailable())return e}))).filter(e=>e);let n=r[0]||yn(_n);const o=wn(i,e.config.apiKey,e.name);let s=null;for(const i of t)try{const t=await i._get(o);if(t){let r;if("string"==typeof t){const i=await nn(e,{idToken:t}).catch(()=>{});if(!i)break;r=await gn._fromGetAccountInfoResponse(e,i,t)}else r=gn._fromJSON(e,t);i!==n&&(s=r),n=i;break}}catch(e){}const a=r.filter(e=>e._shouldAllowMigration);return n._shouldAllowMigration&&a.length?(n=a[0],s&&await n._set(o,s.toJSON()),await Promise.all(t.map(async e=>{if(e!==n)try{await e._remove(o)}catch(e){}})),new xn(n,e,i)):new xn(n,e,i)}}
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
 */function En(e){const t=e.toLowerCase();if(t.includes("opera/")||t.includes("opr/")||t.includes("opios/"))return"Opera";if(function(e=ii()){return/iemobile/i.test(e)}(t))return"IEMobile";if(t.includes("msie")||t.includes("trident/"))return"IE";if(t.includes("edge/"))return"Edge";if(function(e=ii()){return/firefox\//i.test(e)}(t))return"Firefox";if(t.includes("silk/"))return"Silk";if(function(e=ii()){return/blackberry/i.test(e)}(t))return"Blackberry";if(function(e=ii()){return/webos/i.test(e)}
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
 */(t))return"Webos";if(function(e=ii()){const t=e.toLowerCase();return t.includes("safari/")&&!t.includes("chrome/")&&!t.includes("crios/")&&!t.includes("android")}(t))return"Safari";if((t.includes("chrome/")||function(e=ii()){return/crios\//i.test(e)}(t))&&!t.includes("edge/"))return"Chrome";if(function(e=ii()){return/android/i.test(e)}(t))return"Android";{const t=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,i=e.match(t);if(2===(null==i?void 0:i.length))return i[1]}return"Other"}function Sn(e,t=[]){let i;switch(e){case"Browser":i=En(ii());break;case"Worker":i=`${En(ii())}-${e}`;break;default:i=e}const r=t.length?t.join(","):"FirebaseCore-web";return`${i}/JsCore/${vr}/${r}`}
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
 */class Cn{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,t){const i=t=>new Promise((i,r)=>{try{i(e(t))}catch(e){r(e)}});i.onAbort=t,this.queue.push(i);const r=this.queue.length-1;return()=>{this.queue[r]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const t=[];try{for(const i of this.queue)await i(e),i.onAbort&&t.push(i.onAbort)}catch(e){t.reverse();for(const e of t)try{e()}catch(e){}throw this.auth._errorFactory.create("login-blocked",{originalMessage:null==e?void 0:e.message})}}}
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
 */class Tn{constructor(e){var t,i,r,n;const o=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=null!==(t=o.minPasswordLength)&&void 0!==t?t:6,o.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=o.maxPasswordLength),void 0!==o.containsLowercaseCharacter&&(this.customStrengthOptions.containsLowercaseLetter=o.containsLowercaseCharacter),void 0!==o.containsUppercaseCharacter&&(this.customStrengthOptions.containsUppercaseLetter=o.containsUppercaseCharacter),void 0!==o.containsNumericCharacter&&(this.customStrengthOptions.containsNumericCharacter=o.containsNumericCharacter),void 0!==o.containsNonAlphanumericCharacter&&(this.customStrengthOptions.containsNonAlphanumericCharacter=o.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,"ENFORCEMENT_STATE_UNSPECIFIED"===this.enforcementState&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=null!==(r=null===(i=e.allowedNonAlphanumericCharacters)||void 0===i?void 0:i.join(""))&&void 0!==r?r:"",this.forceUpgradeOnSignin=null!==(n=e.forceUpgradeOnSignin)&&void 0!==n&&n,this.schemaVersion=e.schemaVersion}validatePassword(e){var t,i,r,n,o,s;const a={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,a),this.validatePasswordCharacterOptions(e,a),a.isValid&&(a.isValid=null===(t=a.meetsMinPasswordLength)||void 0===t||t),a.isValid&&(a.isValid=null===(i=a.meetsMaxPasswordLength)||void 0===i||i),a.isValid&&(a.isValid=null===(r=a.containsLowercaseLetter)||void 0===r||r),a.isValid&&(a.isValid=null===(n=a.containsUppercaseLetter)||void 0===n||n),a.isValid&&(a.isValid=null===(o=a.containsNumericCharacter)||void 0===o||o),a.isValid&&(a.isValid=null===(s=a.containsNonAlphanumericCharacter)||void 0===s||s),a}validatePasswordLengthOptions(e,t){const i=this.customStrengthOptions.minPasswordLength,r=this.customStrengthOptions.maxPasswordLength;i&&(t.meetsMinPasswordLength=e.length>=i),r&&(t.meetsMaxPasswordLength=e.length<=r)}validatePasswordCharacterOptions(e,t){let i;this.updatePasswordCharacterOptionsStatuses(t,!1,!1,!1,!1);for(let r=0;r<e.length;r++)i=e.charAt(r),this.updatePasswordCharacterOptionsStatuses(t,i>="a"&&i<="z",i>="A"&&i<="Z",i>="0"&&i<="9",this.allowedNonAlphanumericCharacters.includes(i))}updatePasswordCharacterOptionsStatuses(e,t,i,r,n){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=t)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=i)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=r)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=n))}}
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
 */class kn{constructor(e,t,i,r){this.app=e,this.heartbeatServiceProvider=t,this.appCheckServiceProvider=i,this.config=r,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new An(this),this.idTokenSubscription=new An(this),this.beforeStateQueue=new Cn(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=Nr,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this._resolvePersistenceManagerAvailable=void 0,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=r.sdkClientVersion,this._persistenceManagerAvailable=new Promise(e=>this._resolvePersistenceManagerAvailable=e)}_initializeWithPersistence(e,t){return t&&(this._popupRedirectResolver=yn(t)),this._initializationPromise=this.queue(async()=>{var i,r,n;if(!this._deleted&&(this.persistenceManager=await xn.create(this,e),null===(i=this._resolvePersistenceManagerAvailable)||void 0===i||i.call(this),!this._deleted)){if(null===(r=this._popupRedirectResolver)||void 0===r?void 0:r._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch(e){}await this.initializeCurrentUser(t),this.lastNotifiedUid=(null===(n=this.currentUser)||void 0===n?void 0:n.uid)||null,this._deleted||(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();return this.currentUser||e?this.currentUser&&e&&this.currentUser.uid===e.uid?(this._currentUser._assign(e),void await this.currentUser.getIdToken()):void await this._updateCurrentUser(e,!0):void 0}async initializeCurrentUserFromIdToken(e){try{const t=await nn(this,{idToken:e}),i=await gn._fromGetAccountInfoResponse(this,t,e);await this.directlySetCurrentUser(i)}catch(e){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",e),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){var t;if(mr(this.app)){const e=this.app.settings.authIdToken;return e?new Promise(t=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(e).then(t,t))}):this.directlySetCurrentUser(null)}const i=await this.assertedPersistence.getCurrentUser();let r=i,n=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const i=null===(t=this.redirectUser)||void 0===t?void 0:t._redirectEventId,o=null==r?void 0:r._redirectEventId,s=await this.tryRedirectSignIn(e);i&&i!==o||!(null==s?void 0:s.user)||(r=s.user,n=!0)}if(!r)return this.directlySetCurrentUser(null);if(!r._redirectEventId){if(n)try{await this.beforeStateQueue.runMiddleware(r)}catch(e){r=i,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(e))}return r?this.reloadAndSetCurrentUserOrClear(r):this.directlySetCurrentUser(null)}return jr(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===r._redirectEventId?this.directlySetCurrentUser(r):this.reloadAndSetCurrentUserOrClear(r)}async tryRedirectSignIn(e){let t=null;try{t=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch(e){await this._setRedirectUser(null)}return t}async reloadAndSetCurrentUserOrClear(e){try{await un(e)}catch(e){if("auth/network-request-failed"!==(null==e?void 0:e.code))return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=function(){if("undefined"==typeof navigator)return null;const e=navigator;return e.languages&&e.languages[0]||e.language||null}()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(mr(this.app))return Promise.reject(Fr(this));const t=e?ci(e):null;return t&&jr(t.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(t&&t._clone(this))}async _updateCurrentUser(e,t=!1){if(!this._deleted)return e&&jr(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),t||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return mr(this.app)?Promise.reject(Fr(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return mr(this.app)?Promise.reject(Fr(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(yn(e))})}_getRecaptchaConfig(){return null==this.tenantId?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const t=this._getPasswordPolicyInternal();return t.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):t.validatePassword(e)}_getPasswordPolicyInternal(){return null===this.tenantId?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await async function(e,t={}){return Zr(e,"GET","/v2/passwordPolicy",Yr(e,t))}
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
 */(this),t=new Tn(e);null===this.tenantId?this._projectPasswordPolicy=t:this._tenantPasswordPolicies[this.tenantId]=t}_getPersistenceType(){return this.assertedPersistence.persistence.type}_getPersistence(){return this.assertedPersistence.persistence}_updateErrorMap(e){this._errorFactory=new ni("auth","Firebase",e())}onAuthStateChanged(e,t,i){return this.registerStateListener(this.authStateSubscription,e,t,i)}beforeAuthStateChanged(e,t){return this.beforeStateQueue.pushCallback(e,t)}onIdTokenChanged(e,t,i){return this.registerStateListener(this.idTokenSubscription,e,t,i)}authStateReady(){return new Promise((e,t)=>{if(this.currentUser)e();else{const i=this.onAuthStateChanged(()=>{i(),e()},t)}})}async revokeAccessToken(e){if(this.currentUser){const t={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:await this.currentUser.getIdToken()};null!=this.tenantId&&(t.tenantId=this.tenantId),await async function(e,t){return Zr(e,"POST","/v2/accounts:revokeToken",Yr(e,t))}(this,t)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:null===(e=this._currentUser)||void 0===e?void 0:e.toJSON()}}async _setRedirectUser(e,t){const i=await this.getOrInitRedirectPersistenceManager(t);return null===e?i.removeCurrentUser():i.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const t=e&&yn(e)||this._popupRedirectResolver;jr(t,this,"argument-error"),this.redirectPersistenceManager=await xn.create(this,[yn(t._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var t,i;return this._isInitialized&&await this.queue(async()=>{}),(null===(t=this._currentUser)||void 0===t?void 0:t._redirectEventId)===e?this._currentUser:(null===(i=this.redirectUser)||void 0===i?void 0:i._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,t;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const i=null!==(t=null===(e=this.currentUser)||void 0===e?void 0:e.uid)&&void 0!==t?t:null;this.lastNotifiedUid!==i&&(this.lastNotifiedUid=i,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,t,i,r){if(this._deleted)return()=>{};const n="function"==typeof t?t:t.next.bind(t);let o=!1;const s=this._isInitialized?Promise.resolve():this._initializationPromise;if(jr(s,this,"internal-error"),s.then(()=>{o||n(this.currentUser)}),"function"==typeof t){const n=e.addObserver(t,i,r);return()=>{o=!0,n()}}{const i=e.addObserver(t);return()=>{o=!0,i()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return jr(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){e&&!this.frameworks.includes(e)&&(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=Sn(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const t={"X-Client-Version":this.clientVersion};this.app.options.appId&&(t["X-Firebase-gmpid"]=this.app.options.appId);const i=await(null===(e=this.heartbeatServiceProvider.getImmediate({optional:!0}))||void 0===e?void 0:e.getHeartbeatsHeader());i&&(t["X-Firebase-Client"]=i);const r=await this._getAppCheckToken();return r&&(t["X-Firebase-AppCheck"]=r),t}async _getAppCheckToken(){var e;if(mr(this.app)&&this.app.settings.appCheckToken)return this.app.settings.appCheckToken;const t=await(null===(e=this.appCheckServiceProvider.getImmediate({optional:!0}))||void 0===e?void 0:e.getToken());return(null==t?void 0:t.error)&&function(e,...t){Dr.logLevel<=hi.WARN&&Dr.warn(`Auth (${vr}): ${e}`,...t)}(`Error while retrieving App Check token: ${t.error}`),null==t?void 0:t.token}}class An{constructor(e){this.auth=e,this.observer=null,this.addObserver=function(e,t){const i=new ai(e,t);return i.subscribe.bind(i)}(e=>this.observer=e)}get next(){return jr(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}new Wr(3e4,6e4),
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
new Wr(2e3,1e4),
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
new Wr(3e4,6e4),
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
new Wr(5e3,15e3);var In="@firebase/auth",On="1.10.8";
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
class Rn{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),(null===(e=this.auth.currentUser)||void 0===e?void 0:e.uid)||null}async getToken(e){if(this.assertAuthConfigured(),await this.auth._initializationPromise,!this.auth.currentUser)return null;return{accessToken:await this.auth.currentUser.getIdToken(e)}}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const t=this.auth.onIdTokenChanged(t=>{e((null==t?void 0:t.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,t),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const t=this.internalListeners.get(e);t&&(this.internalListeners.delete(e),t(),this.updateProactiveRefresh())}assertAuthConfigured(){jr(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}
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
 */var Pn;
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
 */(e=>{var t;null===(t=ei())||void 0===t||t[`_${e}`]})("authIdTokenMaxAge"),Pn="Browser",fr(new di("auth",(e,{options:t})=>{const i=e.getProvider("app").getImmediate(),r=e.getProvider("heartbeat"),n=e.getProvider("app-check-internal"),{apiKey:o,authDomain:s}=i.options;jr(o&&!o.includes(":"),"invalid-api-key",{appName:i.name});const a={apiKey:o,authDomain:s,clientPlatform:Pn,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:Sn(Pn)},l=new kn(i,r,n,a);return function(e,t){const i=(null==t?void 0:t.persistence)||[],r=(Array.isArray(i)?i:[i]).map(yn);(null==t?void 0:t.errorMap)&&e._updateErrorMap(t.errorMap),e._initializeWithPersistence(r,null==t?void 0:t.popupRedirectResolver)}(l,t),l},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,t,i)=>{e.getProvider("auth-internal").initialize()})),fr(new di("auth-internal",e=>(e=>new Rn(e))(function(e){return ci(e)}(e.getProvider("auth").getImmediate())),"PRIVATE").setInstantiationMode("EXPLICIT")),yr(In,On,function(e){switch(e){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}(Pn)),yr(In,On,"esm2017");var Nn,Dn="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{};
/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/(function(){var e;
/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function t(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.B=Array(this.blockSize),this.o=this.h=0,this.s()}function i(e,t,i){i||(i=0);var r=Array(16);if("string"==typeof t)for(var n=0;16>n;++n)r[n]=t.charCodeAt(i++)|t.charCodeAt(i++)<<8|t.charCodeAt(i++)<<16|t.charCodeAt(i++)<<24;else for(n=0;16>n;++n)r[n]=t[i++]|t[i++]<<8|t[i++]<<16|t[i++]<<24;t=e.g[0],i=e.g[1],n=e.g[2];var o=e.g[3],s=t+(o^i&(n^o))+r[0]+3614090360&4294967295;s=(i=(n=(o=(t=(i=(n=(o=(t=(i=(n=(o=(t=(i=(n=(o=(t=(i=(n=(o=(t=(i=(n=(o=(t=(i=(n=(o=(t=(i=(n=(o=(t=(i=(n=(o=(t=(i=(n=(o=(t=(i=(n=(o=(t=(i=(n=(o=(t=(i=(n=(o=(t=(i=(n=(o=(t=(i=(n=(o=(t=i+(s<<7&4294967295|s>>>25))+((s=o+(n^t&(i^n))+r[1]+3905402710&4294967295)<<12&4294967295|s>>>20))+((s=n+(i^o&(t^i))+r[2]+606105819&4294967295)<<17&4294967295|s>>>15))+((s=i+(t^n&(o^t))+r[3]+3250441966&4294967295)<<22&4294967295|s>>>10))+((s=t+(o^i&(n^o))+r[4]+4118548399&4294967295)<<7&4294967295|s>>>25))+((s=o+(n^t&(i^n))+r[5]+1200080426&4294967295)<<12&4294967295|s>>>20))+((s=n+(i^o&(t^i))+r[6]+2821735955&4294967295)<<17&4294967295|s>>>15))+((s=i+(t^n&(o^t))+r[7]+4249261313&4294967295)<<22&4294967295|s>>>10))+((s=t+(o^i&(n^o))+r[8]+1770035416&4294967295)<<7&4294967295|s>>>25))+((s=o+(n^t&(i^n))+r[9]+2336552879&4294967295)<<12&4294967295|s>>>20))+((s=n+(i^o&(t^i))+r[10]+4294925233&4294967295)<<17&4294967295|s>>>15))+((s=i+(t^n&(o^t))+r[11]+2304563134&4294967295)<<22&4294967295|s>>>10))+((s=t+(o^i&(n^o))+r[12]+1804603682&4294967295)<<7&4294967295|s>>>25))+((s=o+(n^t&(i^n))+r[13]+4254626195&4294967295)<<12&4294967295|s>>>20))+((s=n+(i^o&(t^i))+r[14]+2792965006&4294967295)<<17&4294967295|s>>>15))+((s=i+(t^n&(o^t))+r[15]+1236535329&4294967295)<<22&4294967295|s>>>10))+((s=t+(n^o&(i^n))+r[1]+4129170786&4294967295)<<5&4294967295|s>>>27))+((s=o+(i^n&(t^i))+r[6]+3225465664&4294967295)<<9&4294967295|s>>>23))+((s=n+(t^i&(o^t))+r[11]+643717713&4294967295)<<14&4294967295|s>>>18))+((s=i+(o^t&(n^o))+r[0]+3921069994&4294967295)<<20&4294967295|s>>>12))+((s=t+(n^o&(i^n))+r[5]+3593408605&4294967295)<<5&4294967295|s>>>27))+((s=o+(i^n&(t^i))+r[10]+38016083&4294967295)<<9&4294967295|s>>>23))+((s=n+(t^i&(o^t))+r[15]+3634488961&4294967295)<<14&4294967295|s>>>18))+((s=i+(o^t&(n^o))+r[4]+3889429448&4294967295)<<20&4294967295|s>>>12))+((s=t+(n^o&(i^n))+r[9]+568446438&4294967295)<<5&4294967295|s>>>27))+((s=o+(i^n&(t^i))+r[14]+3275163606&4294967295)<<9&4294967295|s>>>23))+((s=n+(t^i&(o^t))+r[3]+4107603335&4294967295)<<14&4294967295|s>>>18))+((s=i+(o^t&(n^o))+r[8]+1163531501&4294967295)<<20&4294967295|s>>>12))+((s=t+(n^o&(i^n))+r[13]+2850285829&4294967295)<<5&4294967295|s>>>27))+((s=o+(i^n&(t^i))+r[2]+4243563512&4294967295)<<9&4294967295|s>>>23))+((s=n+(t^i&(o^t))+r[7]+1735328473&4294967295)<<14&4294967295|s>>>18))+((s=i+(o^t&(n^o))+r[12]+2368359562&4294967295)<<20&4294967295|s>>>12))+((s=t+(i^n^o)+r[5]+4294588738&4294967295)<<4&4294967295|s>>>28))+((s=o+(t^i^n)+r[8]+2272392833&4294967295)<<11&4294967295|s>>>21))+((s=n+(o^t^i)+r[11]+1839030562&4294967295)<<16&4294967295|s>>>16))+((s=i+(n^o^t)+r[14]+4259657740&4294967295)<<23&4294967295|s>>>9))+((s=t+(i^n^o)+r[1]+2763975236&4294967295)<<4&4294967295|s>>>28))+((s=o+(t^i^n)+r[4]+1272893353&4294967295)<<11&4294967295|s>>>21))+((s=n+(o^t^i)+r[7]+4139469664&4294967295)<<16&4294967295|s>>>16))+((s=i+(n^o^t)+r[10]+3200236656&4294967295)<<23&4294967295|s>>>9))+((s=t+(i^n^o)+r[13]+681279174&4294967295)<<4&4294967295|s>>>28))+((s=o+(t^i^n)+r[0]+3936430074&4294967295)<<11&4294967295|s>>>21))+((s=n+(o^t^i)+r[3]+3572445317&4294967295)<<16&4294967295|s>>>16))+((s=i+(n^o^t)+r[6]+76029189&4294967295)<<23&4294967295|s>>>9))+((s=t+(i^n^o)+r[9]+3654602809&4294967295)<<4&4294967295|s>>>28))+((s=o+(t^i^n)+r[12]+3873151461&4294967295)<<11&4294967295|s>>>21))+((s=n+(o^t^i)+r[15]+530742520&4294967295)<<16&4294967295|s>>>16))+((s=i+(n^o^t)+r[2]+3299628645&4294967295)<<23&4294967295|s>>>9))+((s=t+(n^(i|~o))+r[0]+4096336452&4294967295)<<6&4294967295|s>>>26))+((s=o+(i^(t|~n))+r[7]+1126891415&4294967295)<<10&4294967295|s>>>22))+((s=n+(t^(o|~i))+r[14]+2878612391&4294967295)<<15&4294967295|s>>>17))+((s=i+(o^(n|~t))+r[5]+4237533241&4294967295)<<21&4294967295|s>>>11))+((s=t+(n^(i|~o))+r[12]+1700485571&4294967295)<<6&4294967295|s>>>26))+((s=o+(i^(t|~n))+r[3]+2399980690&4294967295)<<10&4294967295|s>>>22))+((s=n+(t^(o|~i))+r[10]+4293915773&4294967295)<<15&4294967295|s>>>17))+((s=i+(o^(n|~t))+r[1]+2240044497&4294967295)<<21&4294967295|s>>>11))+((s=t+(n^(i|~o))+r[8]+1873313359&4294967295)<<6&4294967295|s>>>26))+((s=o+(i^(t|~n))+r[15]+4264355552&4294967295)<<10&4294967295|s>>>22))+((s=n+(t^(o|~i))+r[6]+2734768916&4294967295)<<15&4294967295|s>>>17))+((s=i+(o^(n|~t))+r[13]+1309151649&4294967295)<<21&4294967295|s>>>11))+((o=(t=i+((s=t+(n^(i|~o))+r[4]+4149444226&4294967295)<<6&4294967295|s>>>26))+((s=o+(i^(t|~n))+r[11]+3174756917&4294967295)<<10&4294967295|s>>>22))^((n=o+((s=n+(t^(o|~i))+r[2]+718787259&4294967295)<<15&4294967295|s>>>17))|~t))+r[9]+3951481745&4294967295,e.g[0]=e.g[0]+t&4294967295,e.g[1]=e.g[1]+(n+(s<<21&4294967295|s>>>11))&4294967295,e.g[2]=e.g[2]+n&4294967295,e.g[3]=e.g[3]+o&4294967295}function r(e,t){this.h=t;for(var i=[],r=!0,n=e.length-1;0<=n;n--){var o=0|e[n];r&&o==t||(i[n]=o,r=!1)}this.g=i}!function(e,t){function i(){}i.prototype=t.prototype,e.D=t.prototype,e.prototype=new i,e.prototype.constructor=e,e.C=function(e,i,r){for(var n=Array(arguments.length-2),o=2;o<arguments.length;o++)n[o-2]=arguments[o];return t.prototype[i].apply(e,n)}}(t,function(){this.blockSize=-1}),t.prototype.s=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0},t.prototype.u=function(e,t){void 0===t&&(t=e.length);for(var r=t-this.blockSize,n=this.B,o=this.h,s=0;s<t;){if(0==o)for(;s<=r;)i(this,e,s),s+=this.blockSize;if("string"==typeof e){for(;s<t;)if(n[o++]=e.charCodeAt(s++),o==this.blockSize){i(this,n),o=0;break}}else for(;s<t;)if(n[o++]=e[s++],o==this.blockSize){i(this,n),o=0;break}}this.h=o,this.o+=t},t.prototype.v=function(){var e=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);e[0]=128;for(var t=1;t<e.length-8;++t)e[t]=0;var i=8*this.o;for(t=e.length-8;t<e.length;++t)e[t]=255&i,i/=256;for(this.u(e),e=Array(16),t=i=0;4>t;++t)for(var r=0;32>r;r+=8)e[i++]=this.g[t]>>>r&255;return e};var n={};function o(e){return-128<=e&&128>e?function(e,t){var i=n;return Object.prototype.hasOwnProperty.call(i,e)?i[e]:i[e]=t(e)}(e,function(e){return new r([0|e],0>e?-1:0)}):new r([0|e],0>e?-1:0)}function s(e){if(isNaN(e)||!isFinite(e))return a;if(0>e)return u(s(-e));for(var t=[],i=1,n=0;e>=i;n++)t[n]=e/i|0,i*=4294967296;return new r(t,0)}var a=o(0),l=o(1),c=o(16777216);function d(e){if(0!=e.h)return!1;for(var t=0;t<e.g.length;t++)if(0!=e.g[t])return!1;return!0}function h(e){return-1==e.h}function u(e){for(var t=e.g.length,i=[],n=0;n<t;n++)i[n]=~e.g[n];return new r(i,~e.h).add(l)}function p(e,t){return e.add(u(t))}function f(e,t){for(;(65535&e[t])!=e[t];)e[t+1]+=e[t]>>>16,e[t]&=65535,t++}function m(e,t){this.g=e,this.h=t}function g(e,t){if(d(t))throw Error("division by zero");if(d(e))return new m(a,a);if(h(e))return t=g(u(e),t),new m(u(t.g),u(t.h));if(h(t))return t=g(e,u(t)),new m(u(t.g),t.h);if(30<e.g.length){if(h(e)||h(t))throw Error("slowDivide_ only works with positive integers.");for(var i=l,r=t;0>=r.l(e);)i=v(i),r=v(r);var n=y(i,1),o=y(r,1);for(r=y(r,2),i=y(i,2);!d(r);){var c=o.add(r);0>=c.l(e)&&(n=n.add(i),o=c),r=y(r,1),i=y(i,1)}return t=p(e,n.j(t)),new m(n,t)}for(n=a;0<=e.l(t);){for(i=Math.max(1,Math.floor(e.m()/t.m())),r=48>=(r=Math.ceil(Math.log(i)/Math.LN2))?1:Math.pow(2,r-48),c=(o=s(i)).j(t);h(c)||0<c.l(e);)c=(o=s(i-=r)).j(t);d(o)&&(o=l),n=n.add(o),e=p(e,c)}return new m(n,e)}function v(e){for(var t=e.g.length+1,i=[],n=0;n<t;n++)i[n]=e.i(n)<<1|e.i(n-1)>>>31;return new r(i,e.h)}function y(e,t){var i=t>>5;t%=32;for(var n=e.g.length-i,o=[],s=0;s<n;s++)o[s]=0<t?e.i(s+i)>>>t|e.i(s+i+1)<<32-t:e.i(s+i);return new r(o,e.h)}(e=r.prototype).m=function(){if(h(this))return-u(this).m();for(var e=0,t=1,i=0;i<this.g.length;i++){var r=this.i(i);e+=(0<=r?r:4294967296+r)*t,t*=4294967296}return e},e.toString=function(e){if(2>(e=e||10)||36<e)throw Error("radix out of range: "+e);if(d(this))return"0";if(h(this))return"-"+u(this).toString(e);for(var t=s(Math.pow(e,6)),i=this,r="";;){var n=g(i,t).g,o=((0<(i=p(i,n.j(t))).g.length?i.g[0]:i.h)>>>0).toString(e);if(d(i=n))return o+r;for(;6>o.length;)o="0"+o;r=o+r}},e.i=function(e){return 0>e?0:e<this.g.length?this.g[e]:this.h},e.l=function(e){return h(e=p(this,e))?-1:d(e)?0:1},e.abs=function(){return h(this)?u(this):this},e.add=function(e){for(var t=Math.max(this.g.length,e.g.length),i=[],n=0,o=0;o<=t;o++){var s=n+(65535&this.i(o))+(65535&e.i(o)),a=(s>>>16)+(this.i(o)>>>16)+(e.i(o)>>>16);n=a>>>16,s&=65535,a&=65535,i[o]=a<<16|s}return new r(i,-2147483648&i[i.length-1]?-1:0)},e.j=function(e){if(d(this)||d(e))return a;if(h(this))return h(e)?u(this).j(u(e)):u(u(this).j(e));if(h(e))return u(this.j(u(e)));if(0>this.l(c)&&0>e.l(c))return s(this.m()*e.m());for(var t=this.g.length+e.g.length,i=[],n=0;n<2*t;n++)i[n]=0;for(n=0;n<this.g.length;n++)for(var o=0;o<e.g.length;o++){var l=this.i(n)>>>16,p=65535&this.i(n),m=e.i(o)>>>16,g=65535&e.i(o);i[2*n+2*o]+=p*g,f(i,2*n+2*o),i[2*n+2*o+1]+=l*g,f(i,2*n+2*o+1),i[2*n+2*o+1]+=p*m,f(i,2*n+2*o+1),i[2*n+2*o+2]+=l*m,f(i,2*n+2*o+2)}for(n=0;n<t;n++)i[n]=i[2*n+1]<<16|i[2*n];for(n=t;n<2*t;n++)i[n]=0;return new r(i,0)},e.A=function(e){return g(this,e).h},e.and=function(e){for(var t=Math.max(this.g.length,e.g.length),i=[],n=0;n<t;n++)i[n]=this.i(n)&e.i(n);return new r(i,this.h&e.h)},e.or=function(e){for(var t=Math.max(this.g.length,e.g.length),i=[],n=0;n<t;n++)i[n]=this.i(n)|e.i(n);return new r(i,this.h|e.h)},e.xor=function(e){for(var t=Math.max(this.g.length,e.g.length),i=[],n=0;n<t;n++)i[n]=this.i(n)^e.i(n);return new r(i,this.h^e.h)},t.prototype.digest=t.prototype.v,t.prototype.reset=t.prototype.s,t.prototype.update=t.prototype.u,r.prototype.add=r.prototype.add,r.prototype.multiply=r.prototype.j,r.prototype.modulo=r.prototype.A,r.prototype.compare=r.prototype.l,r.prototype.toNumber=r.prototype.m,r.prototype.toString=r.prototype.toString,r.prototype.getBits=r.prototype.i,r.fromNumber=s,r.fromString=function e(t,i){if(0==t.length)throw Error("number format error: empty string");if(2>(i=i||10)||36<i)throw Error("radix out of range: "+i);if("-"==t.charAt(0))return u(e(t.substring(1),i));if(0<=t.indexOf("-"))throw Error('number format error: interior "-" character');for(var r=s(Math.pow(i,8)),n=a,o=0;o<t.length;o+=8){var l=Math.min(8,t.length-o),c=parseInt(t.substring(o,o+l),i);8>l?(l=s(Math.pow(i,l)),n=n.j(l).add(s(c))):n=(n=n.j(r)).add(s(c))}return n},Nn=r}).apply(void 0!==Dn?Dn:"undefined"!=typeof self?self:"undefined"!=typeof window?window:{});var $n="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{};(function(){var e,t="function"==typeof Object.defineProperties?Object.defineProperty:function(e,t,i){return e==Array.prototype||e==Object.prototype||(e[t]=i.value),e};var i=function(e){e=["object"==typeof globalThis&&globalThis,e,"object"==typeof window&&window,"object"==typeof self&&self,"object"==typeof $n&&$n];for(var t=0;t<e.length;++t){var i=e[t];if(i&&i.Math==Math)return i}throw Error("Cannot find global object")}(this);!function(e,r){if(r)e:{var n=i;e=e.split(".");for(var o=0;o<e.length-1;o++){var s=e[o];if(!(s in n))break e;n=n[s]}(r=r(o=n[e=e[e.length-1]]))!=o&&null!=r&&t(n,e,{configurable:!0,writable:!0,value:r})}}("Array.prototype.values",function(e){return e||function(){return function(e,t){e instanceof String&&(e+="");var i=0,r=!1,n={next:function(){if(!r&&i<e.length){var n=i++;return{value:t(n,e[n]),done:!1}}return r=!0,{done:!0,value:void 0}}};return n[Symbol.iterator]=function(){return n},n}(this,function(e,t){return t})}});
/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/
var r=r||{},n=this||self;function o(e){var t=typeof e;return"array"==(t="object"!=t?t:e?Array.isArray(e)?"array":t:"null")||"object"==t&&"number"==typeof e.length}function s(e){var t=typeof e;return"object"==t&&null!=e||"function"==t}function a(e,t,i){return e.call.apply(e.bind,arguments)}function l(e,t,i){if(!e)throw Error();if(2<arguments.length){var r=Array.prototype.slice.call(arguments,2);return function(){var i=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(i,r),e.apply(t,i)}}return function(){return e.apply(t,arguments)}}function c(e,t,i){return(c=Function.prototype.bind&&-1!=Function.prototype.bind.toString().indexOf("native code")?a:l).apply(null,arguments)}function d(e,t){var i=Array.prototype.slice.call(arguments,1);return function(){var t=i.slice();return t.push.apply(t,arguments),e.apply(this,t)}}function h(e,t){function i(){}i.prototype=t.prototype,e.aa=t.prototype,e.prototype=new i,e.prototype.constructor=e,e.Qb=function(e,i,r){for(var n=Array(arguments.length-2),o=2;o<arguments.length;o++)n[o-2]=arguments[o];return t.prototype[i].apply(e,n)}}function u(e){const t=e.length;if(0<t){const i=Array(t);for(let r=0;r<t;r++)i[r]=e[r];return i}return[]}function p(e,t){for(let t=1;t<arguments.length;t++){const i=arguments[t];if(o(i)){const t=e.length||0,r=i.length||0;e.length=t+r;for(let n=0;n<r;n++)e[t+n]=i[n]}else e.push(i)}}function f(e){return/^[\s\xa0]*$/.test(e)}function m(){var e=n.navigator;return e&&(e=e.userAgent)?e:""}function g(e){return g[" "](e),e}g[" "]=function(){};var v=!(-1==m().indexOf("Gecko")||-1!=m().toLowerCase().indexOf("webkit")&&-1==m().indexOf("Edge")||-1!=m().indexOf("Trident")||-1!=m().indexOf("MSIE")||-1!=m().indexOf("Edge"));function y(e,t,i){for(const r in e)t.call(i,e[r],r,e)}function b(e){const t={};for(const i in e)t[i]=e[i];return t}const _="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function w(e,t){let i,r;for(let t=1;t<arguments.length;t++){for(i in r=arguments[t],r)e[i]=r[i];for(let t=0;t<_.length;t++)i=_[t],Object.prototype.hasOwnProperty.call(r,i)&&(e[i]=r[i])}}function x(e){var t=1;e=e.split(":");const i=[];for(;0<t&&e.length;)i.push(e.shift()),t--;return e.length&&i.push(e.join(":")),i}function E(e){n.setTimeout(()=>{throw e},0)}function S(){var e=I;let t=null;return e.g&&(t=e.g,e.g=e.g.next,e.g||(e.h=null),t.next=null),t}var C=new class{constructor(e,t){this.i=e,this.j=t,this.h=0,this.g=null}get(){let e;return 0<this.h?(this.h--,e=this.g,this.g=e.next,e.next=null):e=this.i(),e}}(()=>new T,e=>e.reset());class T{constructor(){this.next=this.g=this.h=null}set(e,t){this.h=e,this.g=t,this.next=null}reset(){this.next=this.g=this.h=null}}let k,A=!1,I=new class{constructor(){this.h=this.g=null}add(e,t){const i=C.get();i.set(e,t),this.h?this.h.next=i:this.g=i,this.h=i}},O=()=>{const e=n.Promise.resolve(void 0);k=()=>{e.then(R)}};var R=()=>{for(var e;e=S();){try{e.h.call(e.g)}catch(e){E(e)}var t=C;t.j(e),100>t.h&&(t.h++,e.next=t.g,t.g=e)}A=!1};function P(){this.s=this.s,this.C=this.C}function N(e,t){this.type=e,this.g=this.target=t,this.defaultPrevented=!1}P.prototype.s=!1,P.prototype.ma=function(){this.s||(this.s=!0,this.N())},P.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()},N.prototype.h=function(){this.defaultPrevented=!0};var D=function(){if(!n.addEventListener||!Object.defineProperty)return!1;var e=!1,t=Object.defineProperty({},"passive",{get:function(){e=!0}});try{const e=()=>{};n.addEventListener("test",e,t),n.removeEventListener("test",e,t)}catch(e){}return e}();function $(e,t){if(N.call(this,e?e.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,e){var i=this.type=e.type,r=e.changedTouches&&e.changedTouches.length?e.changedTouches[0]:null;if(this.target=e.target||e.srcElement,this.g=t,t=e.relatedTarget){if(v){e:{try{g(t.nodeName);var n=!0;break e}catch(e){}n=!1}n||(t=null)}}else"mouseover"==i?t=e.fromElement:"mouseout"==i&&(t=e.toElement);this.relatedTarget=t,r?(this.clientX=void 0!==r.clientX?r.clientX:r.pageX,this.clientY=void 0!==r.clientY?r.clientY:r.pageY,this.screenX=r.screenX||0,this.screenY=r.screenY||0):(this.clientX=void 0!==e.clientX?e.clientX:e.pageX,this.clientY=void 0!==e.clientY?e.clientY:e.pageY,this.screenX=e.screenX||0,this.screenY=e.screenY||0),this.button=e.button,this.key=e.key||"",this.ctrlKey=e.ctrlKey,this.altKey=e.altKey,this.shiftKey=e.shiftKey,this.metaKey=e.metaKey,this.pointerId=e.pointerId||0,this.pointerType="string"==typeof e.pointerType?e.pointerType:L[e.pointerType]||"",this.state=e.state,this.i=e,e.defaultPrevented&&$.aa.h.call(this)}}h($,N);var L={2:"touch",3:"pen",4:"mouse"};$.prototype.h=function(){$.aa.h.call(this);var e=this.i;e.preventDefault?e.preventDefault():e.returnValue=!1};var U="closure_listenable_"+(1e6*Math.random()|0),M=0;function F(e,t,i,r,n){this.listener=e,this.proxy=null,this.src=t,this.type=i,this.capture=!!r,this.ha=n,this.key=++M,this.da=this.fa=!1}function z(e){e.da=!0,e.listener=null,e.proxy=null,e.src=null,e.ha=null}function j(e){this.src=e,this.g={},this.h=0}function B(e,t){var i=t.type;if(i in e.g){var r,n=e.g[i],o=Array.prototype.indexOf.call(n,t,void 0);(r=0<=o)&&Array.prototype.splice.call(n,o,1),r&&(z(t),0==e.g[i].length&&(delete e.g[i],e.h--))}}function V(e,t,i,r){for(var n=0;n<e.length;++n){var o=e[n];if(!o.da&&o.listener==t&&o.capture==!!i&&o.ha==r)return n}return-1}j.prototype.add=function(e,t,i,r,n){var o=e.toString();(e=this.g[o])||(e=this.g[o]=[],this.h++);var s=V(e,t,r,n);return-1<s?(t=e[s],i||(t.fa=!1)):((t=new F(t,this.src,o,!!r,n)).fa=i,e.push(t)),t};var H="closure_lm_"+(1e6*Math.random()|0),q={};function W(e,t,i,r,n){if(Array.isArray(t)){for(var o=0;o<t.length;o++)W(e,t[o],i,r,n);return null}return i=Q(i),e&&e[U]?e.K(t,i,!!s(r)&&!!r.capture,n):function(e,t,i,r,n,o){if(!t)throw Error("Invalid event type");var a=s(n)?!!n.capture:!!n,l=Y(e);if(l||(e[H]=l=new j(e)),i=l.add(t,i,r,a,o),i.proxy)return i;if(r=function(){function e(i){return t.call(e.src,e.listener,i)}const t=J;return e}(),i.proxy=r,r.src=e,r.listener=i,e.addEventListener)D||(n=a),void 0===n&&(n=!1),e.addEventListener(t.toString(),r,n);else if(e.attachEvent)e.attachEvent(X(t.toString()),r);else{if(!e.addListener||!e.removeListener)throw Error("addEventListener and attachEvent are unavailable.");e.addListener(r)}return i}(e,t,i,!1,r,n)}function K(e,t,i,r,n){if(Array.isArray(t))for(var o=0;o<t.length;o++)K(e,t[o],i,r,n);else r=s(r)?!!r.capture:!!r,i=Q(i),e&&e[U]?(e=e.i,(t=String(t).toString())in e.g&&(-1<(i=V(o=e.g[t],i,r,n))&&(z(o[i]),Array.prototype.splice.call(o,i,1),0==o.length&&(delete e.g[t],e.h--)))):e&&(e=Y(e))&&(t=e.g[t.toString()],e=-1,t&&(e=V(t,i,r,n)),(i=-1<e?t[e]:null)&&G(i))}function G(e){if("number"!=typeof e&&e&&!e.da){var t=e.src;if(t&&t[U])B(t.i,e);else{var i=e.type,r=e.proxy;t.removeEventListener?t.removeEventListener(i,r,e.capture):t.detachEvent?t.detachEvent(X(i),r):t.addListener&&t.removeListener&&t.removeListener(r),(i=Y(t))?(B(i,e),0==i.h&&(i.src=null,t[H]=null)):z(e)}}}function X(e){return e in q?q[e]:q[e]="on"+e}function J(e,t){if(e.da)e=!0;else{t=new $(t,this);var i=e.listener,r=e.ha||e.src;e.fa&&G(e),e=i.call(r,t)}return e}function Y(e){return(e=e[H])instanceof j?e:null}var Z="__closure_events_fn_"+(1e9*Math.random()>>>0);function Q(e){return"function"==typeof e?e:(e[Z]||(e[Z]=function(t){return e.handleEvent(t)}),e[Z])}function ee(){P.call(this),this.i=new j(this),this.M=this,this.F=null}function te(e,t){var i,r=e.F;if(r)for(i=[];r;r=r.F)i.push(r);if(e=e.M,r=t.type||t,"string"==typeof t)t=new N(t,e);else if(t instanceof N)t.target=t.target||e;else{var n=t;w(t=new N(r,e),n)}if(n=!0,i)for(var o=i.length-1;0<=o;o--){var s=t.g=i[o];n=ie(s,r,!0,t)&&n}if(n=ie(s=t.g=e,r,!0,t)&&n,n=ie(s,r,!1,t)&&n,i)for(o=0;o<i.length;o++)n=ie(s=t.g=i[o],r,!1,t)&&n}function ie(e,t,i,r){if(!(t=e.i.g[String(t)]))return!0;t=t.concat();for(var n=!0,o=0;o<t.length;++o){var s=t[o];if(s&&!s.da&&s.capture==i){var a=s.listener,l=s.ha||s.src;s.fa&&B(e.i,s),n=!1!==a.call(l,r)&&n}}return n&&!r.defaultPrevented}function re(e,t,i){if("function"==typeof e)i&&(e=c(e,i));else{if(!e||"function"!=typeof e.handleEvent)throw Error("Invalid listener argument");e=c(e.handleEvent,e)}return 2147483647<Number(t)?-1:n.setTimeout(e,t||0)}function ne(e){e.g=re(()=>{e.g=null,e.i&&(e.i=!1,ne(e))},e.l);const t=e.h;e.h=null,e.m.apply(null,t)}h(ee,P),ee.prototype[U]=!0,ee.prototype.removeEventListener=function(e,t,i,r){K(this,e,t,i,r)},ee.prototype.N=function(){if(ee.aa.N.call(this),this.i){var e,t=this.i;for(e in t.g){for(var i=t.g[e],r=0;r<i.length;r++)z(i[r]);delete t.g[e],t.h--}}this.F=null},ee.prototype.K=function(e,t,i,r){return this.i.add(String(e),t,!1,i,r)},ee.prototype.L=function(e,t,i,r){return this.i.add(String(e),t,!0,i,r)};class oe extends P{constructor(e,t){super(),this.m=e,this.l=t,this.h=null,this.i=!1,this.g=null}j(e){this.h=arguments,this.g?this.i=!0:ne(this)}N(){super.N(),this.g&&(n.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function se(e){P.call(this),this.h=e,this.g={}}h(se,P);var ae=[];function le(e){y(e.g,function(e,t){this.g.hasOwnProperty(t)&&G(e)},e),e.g={}}se.prototype.N=function(){se.aa.N.call(this),le(this)},se.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var ce=n.JSON.stringify,de=n.JSON.parse,he=class{stringify(e){return n.JSON.stringify(e,void 0)}parse(e){return n.JSON.parse(e,void 0)}};function ue(){}function pe(e){return e.h||(e.h=e.i())}ue.prototype.h=null;var fe={OPEN:"a",kb:"b",Ja:"c",wb:"d"};function me(){N.call(this,"d")}function ge(){N.call(this,"c")}h(me,N),h(ge,N);var ve={},ye=null;function be(){return ye=ye||new ee}function _e(e){N.call(this,ve.La,e)}function we(e){const t=be();te(t,new _e(t))}function xe(e,t){N.call(this,ve.STAT_EVENT,e),this.stat=t}function Ee(e){const t=be();te(t,new xe(t,e))}function Se(e,t){N.call(this,ve.Ma,e),this.size=t}function Ce(e,t){if("function"!=typeof e)throw Error("Fn must not be null and must be a function");return n.setTimeout(function(){e()},t)}function Te(){this.g=!0}function ke(e,t,i,r){e.info(function(){return"XMLHTTP TEXT ("+t+"): "+function(e,t){if(!e.g)return t;if(!t)return null;try{var i=JSON.parse(t);if(i)for(e=0;e<i.length;e++)if(Array.isArray(i[e])){var r=i[e];if(!(2>r.length)){var n=r[1];if(Array.isArray(n)&&!(1>n.length)){var o=n[0];if("noop"!=o&&"stop"!=o&&"close"!=o)for(var s=1;s<n.length;s++)n[s]=""}}}return ce(i)}catch(e){return t}}(e,i)+(r?" "+r:"")})}ve.La="serverreachability",h(_e,N),ve.STAT_EVENT="statevent",h(xe,N),ve.Ma="timingevent",h(Se,N),Te.prototype.xa=function(){this.g=!1},Te.prototype.info=function(){};var Ae,Ie={NO_ERROR:0,TIMEOUT:8};function Oe(){}function Re(e,t,i,r){this.j=e,this.i=t,this.l=i,this.R=r||1,this.U=new se(this),this.I=45e3,this.H=null,this.o=!1,this.m=this.A=this.v=this.L=this.F=this.S=this.B=null,this.D=[],this.g=null,this.C=0,this.s=this.u=null,this.X=-1,this.J=!1,this.O=0,this.M=null,this.W=this.K=this.T=this.P=!1,this.h=new Pe}function Pe(){this.i=null,this.g="",this.h=!1}h(Oe,ue),Oe.prototype.g=function(){return new XMLHttpRequest},Oe.prototype.i=function(){return{}},Ae=new Oe;var Ne={},De={};function $e(e,t,i){e.L=1,e.v=at(it(t)),e.m=i,e.P=!0,Le(e,null)}function Le(e,t){e.F=Date.now(),Fe(e),e.A=it(e.v);var i=e.A,r=e.R;Array.isArray(r)||(r=[String(r)]),_t(i.i,"t",r),e.C=0,i=e.j.J,e.h=new Pe,e.g=ai(e.j,i?t:null,!e.m),0<e.O&&(e.M=new oe(c(e.Y,e,e.g),e.O)),t=e.U,i=e.g,r=e.ca;var n="readystatechange";Array.isArray(n)||(n&&(ae[0]=n.toString()),n=ae);for(var o=0;o<n.length;o++){var s=W(i,n[o],r||t.handleEvent,!1,t.h||t);if(!s)break;t.g[s.key]=s}t=e.H?b(e.H):{},e.m?(e.u||(e.u="POST"),t["Content-Type"]="application/x-www-form-urlencoded",e.g.ea(e.A,e.u,e.m,t)):(e.u="GET",e.g.ea(e.A,e.u,null,t)),we(),function(e,t,i,r,n,o){e.info(function(){if(e.g)if(o)for(var s="",a=o.split("&"),l=0;l<a.length;l++){var c=a[l].split("=");if(1<c.length){var d=c[0];c=c[1];var h=d.split("_");s=2<=h.length&&"type"==h[1]?s+(d+"=")+c+"&":s+(d+"=redacted&")}}else s=null;else s=o;return"XMLHTTP REQ ("+r+") [attempt "+n+"]: "+t+"\n"+i+"\n"+s})}(e.i,e.u,e.A,e.l,e.R,e.m)}function Ue(e){return!!e.g&&("GET"==e.u&&2!=e.L&&e.j.Ca)}function Me(e,t){var i=e.C,r=t.indexOf("\n",i);return-1==r?De:(i=Number(t.substring(i,r)),isNaN(i)?Ne:(r+=1)+i>t.length?De:(t=t.slice(r,r+i),e.C=r+i,t))}function Fe(e){e.S=Date.now()+e.I,ze(e,e.I)}function ze(e,t){if(null!=e.B)throw Error("WatchDog timer not null");e.B=Ce(c(e.ba,e),t)}function je(e){e.B&&(n.clearTimeout(e.B),e.B=null)}function Be(e){0==e.j.G||e.J||ii(e.j,e)}function Ve(e){je(e);var t=e.M;t&&"function"==typeof t.ma&&t.ma(),e.M=null,le(e.U),e.g&&(t=e.g,e.g=null,t.abort(),t.ma())}function He(e,t){try{var i=e.j;if(0!=i.G&&(i.g==e||Xe(i.h,e)))if(!e.K&&Xe(i.h,e)&&3==i.G){try{var r=i.Da.g.parse(t)}catch(e){r=null}if(Array.isArray(r)&&3==r.length){var n=r;if(0==n[0]){e:if(!i.u){if(i.g){if(!(i.g.F+3e3<e.F))break e;ti(i),qt(i)}Zt(i),Ee(18)}}else i.za=n[1],0<i.za-i.T&&37500>n[2]&&i.F&&0==i.v&&!i.C&&(i.C=Ce(c(i.Za,i),6e3));if(1>=Ge(i.h)&&i.ca){try{i.ca()}catch(e){}i.ca=void 0}}else ni(i,11)}else if((e.K||i.g==e)&&ti(i),!f(t))for(n=i.Da.g.parse(t),t=0;t<n.length;t++){let c=n[t];if(i.T=c[0],c=c[1],2==i.G)if("c"==c[0]){i.K=c[1],i.ia=c[2];const t=c[3];null!=t&&(i.la=t,i.j.info("VER="+i.la));const n=c[4];null!=n&&(i.Aa=n,i.j.info("SVER="+i.Aa));const d=c[5];null!=d&&"number"==typeof d&&0<d&&(r=1.5*d,i.L=r,i.j.info("backChannelRequestTimeoutMs_="+r)),r=i;const h=e.g;if(h){const e=h.g?h.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(e){var o=r.h;o.g||-1==e.indexOf("spdy")&&-1==e.indexOf("quic")&&-1==e.indexOf("h2")||(o.j=o.l,o.g=new Set,o.h&&(Je(o,o.h),o.h=null))}if(r.D){const e=h.g?h.g.getResponseHeader("X-HTTP-Session-Id"):null;e&&(r.ya=e,st(r.I,r.D,e))}}i.G=3,i.l&&i.l.ua(),i.ba&&(i.R=Date.now()-e.F,i.j.info("Handshake RTT: "+i.R+"ms"));var s=e;if((r=i).qa=si(r,r.J?r.ia:null,r.W),s.K){Ye(r.h,s);var a=s,l=r.L;l&&(a.I=l),a.B&&(je(a),Fe(a)),r.g=s}else Yt(r);0<i.i.length&&Kt(i)}else"stop"!=c[0]&&"close"!=c[0]||ni(i,7);else 3==i.G&&("stop"==c[0]||"close"==c[0]?"stop"==c[0]?ni(i,7):Ht(i):"noop"!=c[0]&&i.l&&i.l.ta(c),i.v=0)}we()}catch(e){}}Re.prototype.ca=function(e){e=e.target;const t=this.M;t&&3==zt(e)?t.j():this.Y(e)},Re.prototype.Y=function(e){try{if(e==this.g)e:{const u=zt(this.g);var t=this.g.Ba();this.g.Z();if(!(3>u)&&(3!=u||this.g&&(this.h.h||this.g.oa()||jt(this.g)))){this.J||4!=u||7==t||we(),je(this);var i=this.g.Z();this.X=i;t:if(Ue(this)){var r=jt(this.g);e="";var o=r.length,s=4==zt(this.g);if(!this.h.i){if("undefined"==typeof TextDecoder){Ve(this),Be(this);var a="";break t}this.h.i=new n.TextDecoder}for(t=0;t<o;t++)this.h.h=!0,e+=this.h.i.decode(r[t],{stream:!(s&&t==o-1)});r.length=0,this.h.g+=e,this.C=0,a=this.h.g}else a=this.g.oa();if(this.o=200==i,function(e,t,i,r,n,o,s){e.info(function(){return"XMLHTTP RESP ("+r+") [ attempt "+n+"]: "+t+"\n"+i+"\n"+o+" "+s})}(this.i,this.u,this.A,this.l,this.R,u,i),this.o){if(this.T&&!this.K){t:{if(this.g){var l,c=this.g;if((l=c.g?c.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!f(l)){var d=l;break t}}d=null}if(!(i=d)){this.o=!1,this.s=3,Ee(12),Ve(this),Be(this);break e}ke(this.i,this.l,i,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,He(this,i)}if(this.P){let e;for(i=!0;!this.J&&this.C<a.length;){if(e=Me(this,a),e==De){4==u&&(this.s=4,Ee(14),i=!1),ke(this.i,this.l,null,"[Incomplete Response]");break}if(e==Ne){this.s=4,Ee(15),ke(this.i,this.l,a,"[Invalid Chunk]"),i=!1;break}ke(this.i,this.l,e,null),He(this,e)}if(Ue(this)&&0!=this.C&&(this.h.g=this.h.g.slice(this.C),this.C=0),4!=u||0!=a.length||this.h.h||(this.s=1,Ee(16),i=!1),this.o=this.o&&i,i){if(0<a.length&&!this.W){this.W=!0;var h=this.j;h.g==this&&h.ba&&!h.M&&(h.j.info("Great, no buffering proxy detected. Bytes received: "+a.length),Qt(h),h.M=!0,Ee(11))}}else ke(this.i,this.l,a,"[Invalid Chunked Response]"),Ve(this),Be(this)}else ke(this.i,this.l,a,null),He(this,a);4==u&&Ve(this),this.o&&!this.J&&(4==u?ii(this.j,this):(this.o=!1,Fe(this)))}else(function(e){const t={};e=(e.g&&2<=zt(e)&&e.g.getAllResponseHeaders()||"").split("\r\n");for(let r=0;r<e.length;r++){if(f(e[r]))continue;var i=x(e[r]);const n=i[0];if("string"!=typeof(i=i[1]))continue;i=i.trim();const o=t[n]||[];t[n]=o,o.push(i)}!function(e,t){for(const i in e)t.call(void 0,e[i],i,e)}(t,function(e){return e.join(", ")})})(this.g),400==i&&0<a.indexOf("Unknown SID")?(this.s=3,Ee(12)):(this.s=0,Ee(13)),Ve(this),Be(this)}}}catch(e){}},Re.prototype.cancel=function(){this.J=!0,Ve(this)},Re.prototype.ba=function(){this.B=null;const e=Date.now();0<=e-this.S?(function(e,t){e.info(function(){return"TIMEOUT: "+t})}(this.i,this.A),2!=this.L&&(we(),Ee(17)),Ve(this),this.s=2,Be(this)):ze(this,this.S-e)};var qe=class{constructor(e,t){this.g=e,this.map=t}};function We(e){this.l=e||10,n.PerformanceNavigationTiming?e=0<(e=n.performance.getEntriesByType("navigation")).length&&("hq"==e[0].nextHopProtocol||"h2"==e[0].nextHopProtocol):e=!!(n.chrome&&n.chrome.loadTimes&&n.chrome.loadTimes()&&n.chrome.loadTimes().wasFetchedViaSpdy),this.j=e?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}function Ke(e){return!!e.h||!!e.g&&e.g.size>=e.j}function Ge(e){return e.h?1:e.g?e.g.size:0}function Xe(e,t){return e.h?e.h==t:!!e.g&&e.g.has(t)}function Je(e,t){e.g?e.g.add(t):e.h=t}function Ye(e,t){e.h&&e.h==t?e.h=null:e.g&&e.g.has(t)&&e.g.delete(t)}function Ze(e){if(null!=e.h)return e.i.concat(e.h.D);if(null!=e.g&&0!==e.g.size){let t=e.i;for(const i of e.g.values())t=t.concat(i.D);return t}return u(e.i)}function Qe(e,t){if(e.forEach&&"function"==typeof e.forEach)e.forEach(t,void 0);else if(o(e)||"string"==typeof e)Array.prototype.forEach.call(e,t,void 0);else for(var i=function(e){if(e.na&&"function"==typeof e.na)return e.na();if(!e.V||"function"!=typeof e.V){if("undefined"!=typeof Map&&e instanceof Map)return Array.from(e.keys());if(!("undefined"!=typeof Set&&e instanceof Set)){if(o(e)||"string"==typeof e){var t=[];e=e.length;for(var i=0;i<e;i++)t.push(i);return t}t=[],i=0;for(const r in e)t[i++]=r;return t}}}(e),r=function(e){if(e.V&&"function"==typeof e.V)return e.V();if("undefined"!=typeof Map&&e instanceof Map||"undefined"!=typeof Set&&e instanceof Set)return Array.from(e.values());if("string"==typeof e)return e.split("");if(o(e)){for(var t=[],i=e.length,r=0;r<i;r++)t.push(e[r]);return t}for(r in t=[],i=0,e)t[i++]=e[r];return t}(e),n=r.length,s=0;s<n;s++)t.call(void 0,r[s],i&&i[s],e)}We.prototype.cancel=function(){if(this.i=Ze(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&0!==this.g.size){for(const e of this.g.values())e.cancel();this.g.clear()}};var et=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function tt(e){if(this.g=this.o=this.j="",this.s=null,this.m=this.l="",this.h=!1,e instanceof tt){this.h=e.h,rt(this,e.j),this.o=e.o,this.g=e.g,nt(this,e.s),this.l=e.l;var t=e.i,i=new gt;i.i=t.i,t.g&&(i.g=new Map(t.g),i.h=t.h),ot(this,i),this.m=e.m}else e&&(t=String(e).match(et))?(this.h=!1,rt(this,t[1]||"",!0),this.o=lt(t[2]||""),this.g=lt(t[3]||"",!0),nt(this,t[4]),this.l=lt(t[5]||"",!0),ot(this,t[6]||"",!0),this.m=lt(t[7]||"")):(this.h=!1,this.i=new gt(null,this.h))}function it(e){return new tt(e)}function rt(e,t,i){e.j=i?lt(t,!0):t,e.j&&(e.j=e.j.replace(/:$/,""))}function nt(e,t){if(t){if(t=Number(t),isNaN(t)||0>t)throw Error("Bad port number "+t);e.s=t}else e.s=null}function ot(e,t,i){t instanceof gt?(e.i=t,function(e,t){t&&!e.j&&(vt(e),e.i=null,e.g.forEach(function(e,t){var i=t.toLowerCase();t!=i&&(yt(this,t),_t(this,i,e))},e)),e.j=t}(e.i,e.h)):(i||(t=ct(t,ft)),e.i=new gt(t,e.h))}function st(e,t,i){e.i.set(t,i)}function at(e){return st(e,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),e}function lt(e,t){return e?t?decodeURI(e.replace(/%25/g,"%2525")):decodeURIComponent(e):""}function ct(e,t,i){return"string"==typeof e?(e=encodeURI(e).replace(t,dt),i&&(e=e.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),e):null}function dt(e){return"%"+((e=e.charCodeAt(0))>>4&15).toString(16)+(15&e).toString(16)}tt.prototype.toString=function(){var e=[],t=this.j;t&&e.push(ct(t,ht,!0),":");var i=this.g;return(i||"file"==t)&&(e.push("//"),(t=this.o)&&e.push(ct(t,ht,!0),"@"),e.push(encodeURIComponent(String(i)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),null!=(i=this.s)&&e.push(":",String(i))),(i=this.l)&&(this.g&&"/"!=i.charAt(0)&&e.push("/"),e.push(ct(i,"/"==i.charAt(0)?pt:ut,!0))),(i=this.i.toString())&&e.push("?",i),(i=this.m)&&e.push("#",ct(i,mt)),e.join("")};var ht=/[#\/\?@]/g,ut=/[#\?:]/g,pt=/[#\?]/g,ft=/[#\?@]/g,mt=/#/g;function gt(e,t){this.h=this.g=null,this.i=e||null,this.j=!!t}function vt(e){e.g||(e.g=new Map,e.h=0,e.i&&function(e,t){if(e){e=e.split("&");for(var i=0;i<e.length;i++){var r=e[i].indexOf("="),n=null;if(0<=r){var o=e[i].substring(0,r);n=e[i].substring(r+1)}else o=e[i];t(o,n?decodeURIComponent(n.replace(/\+/g," ")):"")}}}(e.i,function(t,i){e.add(decodeURIComponent(t.replace(/\+/g," ")),i)}))}function yt(e,t){vt(e),t=wt(e,t),e.g.has(t)&&(e.i=null,e.h-=e.g.get(t).length,e.g.delete(t))}function bt(e,t){return vt(e),t=wt(e,t),e.g.has(t)}function _t(e,t,i){yt(e,t),0<i.length&&(e.i=null,e.g.set(wt(e,t),u(i)),e.h+=i.length)}function wt(e,t){return t=String(t),e.j&&(t=t.toLowerCase()),t}function xt(e,t,i,r,n){try{n&&(n.onload=null,n.onerror=null,n.onabort=null,n.ontimeout=null),r(i)}catch(e){}}function Et(){this.g=new he}function St(e,t,i){const r=i||"";try{Qe(e,function(e,i){let n=e;s(e)&&(n=ce(e)),t.push(r+i+"="+encodeURIComponent(n))})}catch(e){throw t.push(r+"type="+encodeURIComponent("_badmap")),e}}function Ct(e){this.l=e.Ub||null,this.j=e.eb||!1}function Tt(e,t){ee.call(this),this.D=e,this.o=t,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.u=new Headers,this.h=null,this.B="GET",this.A="",this.g=!1,this.v=this.j=this.l=null}function kt(e){e.j.read().then(e.Pa.bind(e)).catch(e.ga.bind(e))}function At(e){e.readyState=4,e.l=null,e.j=null,e.v=null,It(e)}function It(e){e.onreadystatechange&&e.onreadystatechange.call(e)}function Ot(e){let t="";return y(e,function(e,i){t+=i,t+=":",t+=e,t+="\r\n"}),t}function Rt(e,t,i){e:{for(r in i){var r=!1;break e}r=!0}r||(i=Ot(i),"string"==typeof e?null!=i&&encodeURIComponent(String(i)):st(e,t,i))}function Pt(e){ee.call(this),this.headers=new Map,this.o=e||null,this.h=!1,this.v=this.g=null,this.D="",this.m=0,this.l="",this.j=this.B=this.u=this.A=!1,this.I=null,this.H="",this.J=!1}(e=gt.prototype).add=function(e,t){vt(this),this.i=null,e=wt(this,e);var i=this.g.get(e);return i||this.g.set(e,i=[]),i.push(t),this.h+=1,this},e.forEach=function(e,t){vt(this),this.g.forEach(function(i,r){i.forEach(function(i){e.call(t,i,r,this)},this)},this)},e.na=function(){vt(this);const e=Array.from(this.g.values()),t=Array.from(this.g.keys()),i=[];for(let r=0;r<t.length;r++){const n=e[r];for(let e=0;e<n.length;e++)i.push(t[r])}return i},e.V=function(e){vt(this);let t=[];if("string"==typeof e)bt(this,e)&&(t=t.concat(this.g.get(wt(this,e))));else{e=Array.from(this.g.values());for(let i=0;i<e.length;i++)t=t.concat(e[i])}return t},e.set=function(e,t){return vt(this),this.i=null,bt(this,e=wt(this,e))&&(this.h-=this.g.get(e).length),this.g.set(e,[t]),this.h+=1,this},e.get=function(e,t){return e&&0<(e=this.V(e)).length?String(e[0]):t},e.toString=function(){if(this.i)return this.i;if(!this.g)return"";const e=[],t=Array.from(this.g.keys());for(var i=0;i<t.length;i++){var r=t[i];const o=encodeURIComponent(String(r)),s=this.V(r);for(r=0;r<s.length;r++){var n=o;""!==s[r]&&(n+="="+encodeURIComponent(String(s[r]))),e.push(n)}}return this.i=e.join("&")},h(Ct,ue),Ct.prototype.g=function(){return new Tt(this.l,this.j)},Ct.prototype.i=function(e){return function(){return e}}({}),h(Tt,ee),(e=Tt.prototype).open=function(e,t){if(0!=this.readyState)throw this.abort(),Error("Error reopening a connection");this.B=e,this.A=t,this.readyState=1,It(this)},e.send=function(e){if(1!=this.readyState)throw this.abort(),Error("need to call open() first. ");this.g=!0;const t={headers:this.u,method:this.B,credentials:this.m,cache:void 0};e&&(t.body=e),(this.D||n).fetch(new Request(this.A,t)).then(this.Sa.bind(this),this.ga.bind(this))},e.abort=function(){this.response=this.responseText="",this.u=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&4!=this.readyState&&(this.g=!1,At(this)),this.readyState=0},e.Sa=function(e){if(this.g&&(this.l=e,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=e.headers,this.readyState=2,It(this)),this.g&&(this.readyState=3,It(this),this.g)))if("arraybuffer"===this.responseType)e.arrayBuffer().then(this.Qa.bind(this),this.ga.bind(this));else if(void 0!==n.ReadableStream&&"body"in e){if(this.j=e.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.v=new TextDecoder;kt(this)}else e.text().then(this.Ra.bind(this),this.ga.bind(this))},e.Pa=function(e){if(this.g){if(this.o&&e.value)this.response.push(e.value);else if(!this.o){var t=e.value?e.value:new Uint8Array(0);(t=this.v.decode(t,{stream:!e.done}))&&(this.response=this.responseText+=t)}e.done?At(this):It(this),3==this.readyState&&kt(this)}},e.Ra=function(e){this.g&&(this.response=this.responseText=e,At(this))},e.Qa=function(e){this.g&&(this.response=e,At(this))},e.ga=function(){this.g&&At(this)},e.setRequestHeader=function(e,t){this.u.append(e,t)},e.getResponseHeader=function(e){return this.h&&this.h.get(e.toLowerCase())||""},e.getAllResponseHeaders=function(){if(!this.h)return"";const e=[],t=this.h.entries();for(var i=t.next();!i.done;)i=i.value,e.push(i[0]+": "+i[1]),i=t.next();return e.join("\r\n")},Object.defineProperty(Tt.prototype,"withCredentials",{get:function(){return"include"===this.m},set:function(e){this.m=e?"include":"same-origin"}}),h(Pt,ee);var Nt=/^https?$/i,Dt=["POST","PUT"];function $t(e,t){e.h=!1,e.g&&(e.j=!0,e.g.abort(),e.j=!1),e.l=t,e.m=5,Lt(e),Mt(e)}function Lt(e){e.A||(e.A=!0,te(e,"complete"),te(e,"error"))}function Ut(e){if(e.h&&void 0!==r&&(!e.v[1]||4!=zt(e)||2!=e.Z()))if(e.u&&4==zt(e))re(e.Ea,0,e);else if(te(e,"readystatechange"),4==zt(e)){e.h=!1;try{const r=e.Z();e:switch(r){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var t=!0;break e;default:t=!1}var i;if(!(i=t)){var o;if(o=0===r){var s=String(e.D).match(et)[1]||null;!s&&n.self&&n.self.location&&(s=n.self.location.protocol.slice(0,-1)),o=!Nt.test(s?s.toLowerCase():"")}i=o}if(i)te(e,"complete"),te(e,"success");else{e.m=6;try{var a=2<zt(e)?e.g.statusText:""}catch(e){a=""}e.l=a+" ["+e.Z()+"]",Lt(e)}}finally{Mt(e)}}}function Mt(e,t){if(e.g){Ft(e);const i=e.g,r=e.v[0]?()=>{}:null;e.g=null,e.v=null,t||te(e,"ready");try{i.onreadystatechange=r}catch(e){}}}function Ft(e){e.I&&(n.clearTimeout(e.I),e.I=null)}function zt(e){return e.g?e.g.readyState:0}function jt(e){try{if(!e.g)return null;if("response"in e.g)return e.g.response;switch(e.H){case"":case"text":return e.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in e.g)return e.g.mozResponseArrayBuffer}return null}catch(e){return null}}function Bt(e,t,i){return i&&i.internalChannelParams&&i.internalChannelParams[e]||t}function Vt(e){this.Aa=0,this.i=[],this.j=new Te,this.ia=this.qa=this.I=this.W=this.g=this.ya=this.D=this.H=this.m=this.S=this.o=null,this.Ya=this.U=0,this.Va=Bt("failFast",!1,e),this.F=this.C=this.u=this.s=this.l=null,this.X=!0,this.za=this.T=-1,this.Y=this.v=this.B=0,this.Ta=Bt("baseRetryDelayMs",5e3,e),this.cb=Bt("retryDelaySeedMs",1e4,e),this.Wa=Bt("forwardChannelMaxRetries",2,e),this.wa=Bt("forwardChannelRequestTimeoutMs",2e4,e),this.pa=e&&e.xmlHttpFactory||void 0,this.Xa=e&&e.Tb||void 0,this.Ca=e&&e.useFetchStreams||!1,this.L=void 0,this.J=e&&e.supportsCrossDomainXhr||!1,this.K="",this.h=new We(e&&e.concurrentRequestLimit),this.Da=new Et,this.P=e&&e.fastHandshake||!1,this.O=e&&e.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.Ua=e&&e.Rb||!1,e&&e.xa&&this.j.xa(),e&&e.forceLongPolling&&(this.X=!1),this.ba=!this.P&&this.X&&e&&e.detectBufferingProxy||!1,this.ja=void 0,e&&e.longPollingTimeout&&0<e.longPollingTimeout&&(this.ja=e.longPollingTimeout),this.ca=void 0,this.R=0,this.M=!1,this.ka=this.A=null}function Ht(e){if(Wt(e),3==e.G){var t=e.U++,i=it(e.I);if(st(i,"SID",e.K),st(i,"RID",t),st(i,"TYPE","terminate"),Xt(e,i),(t=new Re(e,e.j,t)).L=2,t.v=at(it(i)),i=!1,n.navigator&&n.navigator.sendBeacon)try{i=n.navigator.sendBeacon(t.v.toString(),"")}catch(e){}!i&&n.Image&&((new Image).src=t.v,i=!0),i||(t.g=ai(t.j,null),t.g.ea(t.v)),t.F=Date.now(),Fe(t)}oi(e)}function qt(e){e.g&&(Qt(e),e.g.cancel(),e.g=null)}function Wt(e){qt(e),e.u&&(n.clearTimeout(e.u),e.u=null),ti(e),e.h.cancel(),e.s&&("number"==typeof e.s&&n.clearTimeout(e.s),e.s=null)}function Kt(e){if(!Ke(e.h)&&!e.s){e.s=!0;var t=e.Ga;k||O(),A||(k(),A=!0),I.add(t,e),e.B=0}}function Gt(e,t){var i;i=t?t.l:e.U++;const r=it(e.I);st(r,"SID",e.K),st(r,"RID",i),st(r,"AID",e.T),Xt(e,r),e.m&&e.o&&Rt(r,e.m,e.o),i=new Re(e,e.j,i,e.B+1),null===e.m&&(i.H=e.o),t&&(e.i=t.D.concat(e.i)),t=Jt(e,i,1e3),i.I=Math.round(.5*e.wa)+Math.round(.5*e.wa*Math.random()),Je(e.h,i),$e(i,r,t)}function Xt(e,t){e.H&&y(e.H,function(e,i){st(t,i,e)}),e.l&&Qe({},function(e,i){st(t,i,e)})}function Jt(e,t,i){i=Math.min(e.i.length,i);var r=e.l?c(e.l.Na,e.l,e):null;e:{var n=e.i;let t=-1;for(;;){const e=["count="+i];-1==t?0<i?(t=n[0].g,e.push("ofs="+t)):t=0:e.push("ofs="+t);let o=!0;for(let s=0;s<i;s++){let i=n[s].g;const a=n[s].map;if(i-=t,0>i)t=Math.max(0,n[s].g-100),o=!1;else try{St(a,e,"req"+i+"_")}catch(e){r&&r(a)}}if(o){r=e.join("&");break e}}}return e=e.i.splice(0,i),t.D=e,r}function Yt(e){if(!e.g&&!e.u){e.Y=1;var t=e.Fa;k||O(),A||(k(),A=!0),I.add(t,e),e.v=0}}function Zt(e){return!(e.g||e.u||3<=e.v)&&(e.Y++,e.u=Ce(c(e.Fa,e),ri(e,e.v)),e.v++,!0)}function Qt(e){null!=e.A&&(n.clearTimeout(e.A),e.A=null)}function ei(e){e.g=new Re(e,e.j,"rpc",e.Y),null===e.m&&(e.g.H=e.o),e.g.O=0;var t=it(e.qa);st(t,"RID","rpc"),st(t,"SID",e.K),st(t,"AID",e.T),st(t,"CI",e.F?"0":"1"),!e.F&&e.ja&&st(t,"TO",e.ja),st(t,"TYPE","xmlhttp"),Xt(e,t),e.m&&e.o&&Rt(t,e.m,e.o),e.L&&(e.g.I=e.L);var i=e.g;e=e.ia,i.L=1,i.v=at(it(t)),i.m=null,i.P=!0,Le(i,e)}function ti(e){null!=e.C&&(n.clearTimeout(e.C),e.C=null)}function ii(e,t){var i=null;if(e.g==t){ti(e),Qt(e),e.g=null;var r=2}else{if(!Xe(e.h,t))return;i=t.D,Ye(e.h,t),r=1}if(0!=e.G)if(t.o)if(1==r){i=t.m?t.m.length:0,t=Date.now()-t.F;var n=e.B;te(r=be(),new Se(r,i)),Kt(e)}else Yt(e);else if(3==(n=t.s)||0==n&&0<t.X||!(1==r&&function(e,t){return!(Ge(e.h)>=e.h.j-(e.s?1:0)||(e.s?(e.i=t.D.concat(e.i),0):1==e.G||2==e.G||e.B>=(e.Va?0:e.Wa)||(e.s=Ce(c(e.Ga,e,t),ri(e,e.B)),e.B++,0)))}(e,t)||2==r&&Zt(e)))switch(i&&0<i.length&&(t=e.h,t.i=t.i.concat(i)),n){case 1:ni(e,5);break;case 4:ni(e,10);break;case 3:ni(e,6);break;default:ni(e,2)}}function ri(e,t){let i=e.Ta+Math.floor(Math.random()*e.cb);return e.isActive()||(i*=2),i*t}function ni(e,t){if(e.j.info("Error code "+t),2==t){var i=c(e.fb,e),r=e.Xa;const t=!r;r=new tt(r||"//www.google.com/images/cleardot.gif"),n.location&&"http"==n.location.protocol||rt(r,"https"),at(r),t?function(e,t){const i=new Te;if(n.Image){const r=new Image;r.onload=d(xt,i,"TestLoadImage: loaded",!0,t,r),r.onerror=d(xt,i,"TestLoadImage: error",!1,t,r),r.onabort=d(xt,i,"TestLoadImage: abort",!1,t,r),r.ontimeout=d(xt,i,"TestLoadImage: timeout",!1,t,r),n.setTimeout(function(){r.ontimeout&&r.ontimeout()},1e4),r.src=e}else t(!1)}(r.toString(),i):function(e,t){new Te;const i=new AbortController,r=setTimeout(()=>{i.abort(),xt(0,0,!1,t)},1e4);fetch(e,{signal:i.signal}).then(e=>{clearTimeout(r),e.ok?xt(0,0,!0,t):xt(0,0,!1,t)}).catch(()=>{clearTimeout(r),xt(0,0,!1,t)})}(r.toString(),i)}else Ee(2);e.G=0,e.l&&e.l.sa(t),oi(e),Wt(e)}function oi(e){if(e.G=0,e.ka=[],e.l){const t=Ze(e.h);0==t.length&&0==e.i.length||(p(e.ka,t),p(e.ka,e.i),e.h.i.length=0,u(e.i),e.i.length=0),e.l.ra()}}function si(e,t,i){var r=i instanceof tt?it(i):new tt(i);if(""!=r.g)t&&(r.g=t+"."+r.g),nt(r,r.s);else{var o=n.location;r=o.protocol,t=t?t+"."+o.hostname:o.hostname,o=+o.port;var s=new tt(null);r&&rt(s,r),t&&(s.g=t),o&&nt(s,o),i&&(s.l=i),r=s}return i=e.D,t=e.ya,i&&t&&st(r,i,t),st(r,"VER",e.la),Xt(e,r),r}function ai(e,t,i){if(t&&!e.J)throw Error("Can't create secondary domain capable XhrIo object.");return(t=e.Ca&&!e.pa?new Pt(new Ct({eb:i})):new Pt(e.pa)).Ha(e.J),t}function li(){}function ci(e,t){ee.call(this),this.g=new Vt(t),this.l=e,this.h=t&&t.messageUrlParams||null,e=t&&t.messageHeaders||null,t&&t.clientProtocolHeaderRequired&&(e?e["X-Client-Protocol"]="webchannel":e={"X-Client-Protocol":"webchannel"}),this.g.o=e,e=t&&t.initMessageHeaders||null,t&&t.messageContentType&&(e?e["X-WebChannel-Content-Type"]=t.messageContentType:e={"X-WebChannel-Content-Type":t.messageContentType}),t&&t.va&&(e?e["X-WebChannel-Client-Profile"]=t.va:e={"X-WebChannel-Client-Profile":t.va}),this.g.S=e,(e=t&&t.Sb)&&!f(e)&&(this.g.m=e),this.v=t&&t.supportsCrossDomainXhr||!1,this.u=t&&t.sendRawJson||!1,(t=t&&t.httpSessionIdParam)&&!f(t)&&(this.g.D=t,null!==(e=this.h)&&t in e&&(t in(e=this.h)&&delete e[t])),this.j=new ui(this)}function di(e){me.call(this),e.__headers__&&(this.headers=e.__headers__,this.statusCode=e.__status__,delete e.__headers__,delete e.__status__);var t=e.__sm__;if(t){e:{for(const i in t){e=i;break e}e=void 0}(this.i=e)&&(e=this.i,t=null!==t&&e in t?t[e]:void 0),this.data=t}else this.data=e}function hi(){ge.call(this),this.status=1}function ui(e){this.g=e}(e=Pt.prototype).Ha=function(e){this.J=e},e.ea=function(e,t,i,r){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+e);t=t?t.toUpperCase():"GET",this.D=e,this.l="",this.m=0,this.A=!1,this.h=!0,this.g=this.o?this.o.g():Ae.g(),this.v=this.o?pe(this.o):pe(Ae),this.g.onreadystatechange=c(this.Ea,this);try{this.B=!0,this.g.open(t,String(e),!0),this.B=!1}catch(e){return void $t(this,e)}if(e=i||"",i=new Map(this.headers),r)if(Object.getPrototypeOf(r)===Object.prototype)for(var o in r)i.set(o,r[o]);else{if("function"!=typeof r.keys||"function"!=typeof r.get)throw Error("Unknown input type for opt_headers: "+String(r));for(const e of r.keys())i.set(e,r.get(e))}r=Array.from(i.keys()).find(e=>"content-type"==e.toLowerCase()),o=n.FormData&&e instanceof n.FormData,!(0<=Array.prototype.indexOf.call(Dt,t,void 0))||r||o||i.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[e,t]of i)this.g.setRequestHeader(e,t);this.H&&(this.g.responseType=this.H),"withCredentials"in this.g&&this.g.withCredentials!==this.J&&(this.g.withCredentials=this.J);try{Ft(this),this.u=!0,this.g.send(e),this.u=!1}catch(e){$t(this,e)}},e.abort=function(e){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.m=e||7,te(this,"complete"),te(this,"abort"),Mt(this))},e.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),Mt(this,!0)),Pt.aa.N.call(this)},e.Ea=function(){this.s||(this.B||this.u||this.j?Ut(this):this.bb())},e.bb=function(){Ut(this)},e.isActive=function(){return!!this.g},e.Z=function(){try{return 2<zt(this)?this.g.status:-1}catch(e){return-1}},e.oa=function(){try{return this.g?this.g.responseText:""}catch(e){return""}},e.Oa=function(e){if(this.g){var t=this.g.responseText;return e&&0==t.indexOf(e)&&(t=t.substring(e.length)),de(t)}},e.Ba=function(){return this.m},e.Ka=function(){return"string"==typeof this.l?this.l:String(this.l)},(e=Vt.prototype).la=8,e.G=1,e.connect=function(e,t,i,r){Ee(0),this.W=e,this.H=t||{},i&&void 0!==r&&(this.H.OSID=i,this.H.OAID=r),this.F=this.X,this.I=si(this,null,this.W),Kt(this)},e.Ga=function(e){if(this.s)if(this.s=null,1==this.G){if(!e){this.U=Math.floor(1e5*Math.random()),e=this.U++;const n=new Re(this,this.j,e);let o=this.o;if(this.S&&(o?(o=b(o),w(o,this.S)):o=this.S),null!==this.m||this.O||(n.H=o,o=null),this.P)e:{for(var t=0,i=0;i<this.i.length;i++){var r=this.i[i];if(void 0===(r="__data__"in r.map&&"string"==typeof(r=r.map.__data__)?r.length:void 0))break;if(4096<(t+=r)){t=i;break e}if(4096===t||i===this.i.length-1){t=i+1;break e}}t=1e3}else t=1e3;t=Jt(this,n,t),st(i=it(this.I),"RID",e),st(i,"CVER",22),this.D&&st(i,"X-HTTP-Session-Id",this.D),Xt(this,i),o&&(this.O?t="headers="+encodeURIComponent(String(Ot(o)))+"&"+t:this.m&&Rt(i,this.m,o)),Je(this.h,n),this.Ua&&st(i,"TYPE","init"),this.P?(st(i,"$req",t),st(i,"SID","null"),n.T=!0,$e(n,i,null)):$e(n,i,t),this.G=2}}else 3==this.G&&(e?Gt(this,e):0==this.i.length||Ke(this.h)||Gt(this))},e.Fa=function(){if(this.u=null,ei(this),this.ba&&!(this.M||null==this.g||0>=this.R)){var e=2*this.R;this.j.info("BP detection timer enabled: "+e),this.A=Ce(c(this.ab,this),e)}},e.ab=function(){this.A&&(this.A=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.M=!0,Ee(10),qt(this),ei(this))},e.Za=function(){null!=this.C&&(this.C=null,qt(this),Zt(this),Ee(19))},e.fb=function(e){e?(this.j.info("Successfully pinged google.com"),Ee(2)):(this.j.info("Failed to ping google.com"),Ee(1))},e.isActive=function(){return!!this.l&&this.l.isActive(this)},(e=li.prototype).ua=function(){},e.ta=function(){},e.sa=function(){},e.ra=function(){},e.isActive=function(){return!0},e.Na=function(){},h(ci,ee),ci.prototype.m=function(){this.g.l=this.j,this.v&&(this.g.J=!0),this.g.connect(this.l,this.h||void 0)},ci.prototype.close=function(){Ht(this.g)},ci.prototype.o=function(e){var t=this.g;if("string"==typeof e){var i={};i.__data__=e,e=i}else this.u&&((i={}).__data__=ce(e),e=i);t.i.push(new qe(t.Ya++,e)),3==t.G&&Kt(t)},ci.prototype.N=function(){this.g.l=null,delete this.j,Ht(this.g),delete this.g,ci.aa.N.call(this)},h(di,me),h(hi,ge),h(ui,li),ui.prototype.ua=function(){te(this.g,"a")},ui.prototype.ta=function(e){te(this.g,new di(e))},ui.prototype.sa=function(e){te(this.g,new hi)},ui.prototype.ra=function(){te(this.g,"b")},ci.prototype.send=ci.prototype.o,ci.prototype.open=ci.prototype.m,ci.prototype.close=ci.prototype.close,Ie.NO_ERROR=0,Ie.TIMEOUT=8,Ie.HTTP_ERROR=6,fe.OPEN="a",fe.CLOSE="b",fe.ERROR="c",fe.MESSAGE="d",ee.prototype.listen=ee.prototype.K,Pt.prototype.listenOnce=Pt.prototype.L,Pt.prototype.getLastError=Pt.prototype.Ka,Pt.prototype.getLastErrorCode=Pt.prototype.Ba,Pt.prototype.getStatus=Pt.prototype.Z,Pt.prototype.getResponseJson=Pt.prototype.Oa,Pt.prototype.getResponseText=Pt.prototype.oa,Pt.prototype.send=Pt.prototype.ea,Pt.prototype.setWithCredentials=Pt.prototype.Ha}).apply(void 0!==$n?$n:"undefined"!=typeof self?self:"undefined"!=typeof window?window:{});const Ln="@firebase/firestore",Un="4.8.0";
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
 */class Mn{constructor(e){this.uid=e}isAuthenticated(){return null!=this.uid}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}Mn.UNAUTHENTICATED=new Mn(null),Mn.GOOGLE_CREDENTIALS=new Mn("google-credentials-uid"),Mn.FIRST_PARTY=new Mn("first-party-uid"),Mn.MOCK_USER=new Mn("mock-user");
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
let Fn="11.10.0";
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
 */const zn=new gi("@firebase/firestore");function jn(e,...t){if(zn.logLevel<=hi.DEBUG){const i=t.map(Vn);zn.debug(`Firestore (${Fn}): ${e}`,...i)}}function Bn(e,...t){if(zn.logLevel<=hi.ERROR){const i=t.map(Vn);zn.error(`Firestore (${Fn}): ${e}`,...i)}}function Vn(e){if("string"==typeof e)return e;try{
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
 */function Hn(e,t,i){let r="Unexpected state";"string"==typeof t?r=t:i=t,qn(e,r,i)}function qn(e,t,i){let r=`FIRESTORE (${Fn}) INTERNAL ASSERTION FAILED: ${t} (ID: ${e.toString(16)})`;if(void 0!==i)try{r+=" CONTEXT: "+JSON.stringify(i)}catch(e){r+=" CONTEXT: "+i}throw Bn(r),new Error(r)}function Wn(e,t,i,r){let n="Unexpected state";"string"==typeof i?n=i:r=i,e||qn(t,n,r)}
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
 */const Kn="cancelled",Gn="invalid-argument",Xn="failed-precondition";class Jn extends ri{constructor(e,t){super(e,t),this.code=e,this.message=t,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}
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
 */class Yn{constructor(){this.promise=new Promise((e,t)=>{this.resolve=e,this.reject=t})}}
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
 */class Zn{constructor(e,t){this.user=t,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class Qn{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,t){e.enqueueRetryable(()=>t(Mn.UNAUTHENTICATED))}shutdown(){}}class eo{constructor(e){this.t=e,this.currentUser=Mn.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,t){Wn(void 0===this.o,42304);let i=this.i;const r=e=>this.i!==i?(i=this.i,t(e)):Promise.resolve();let n=new Yn;this.o=()=>{this.i++,this.currentUser=this.u(),n.resolve(),n=new Yn,e.enqueueRetryable(()=>r(this.currentUser))};const o=()=>{const t=n;e.enqueueRetryable(async()=>{await t.promise,await r(this.currentUser)})},s=e=>{jn("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=e,this.o&&(this.auth.addAuthTokenListener(this.o),o())};this.t.onInit(e=>s(e)),setTimeout(()=>{if(!this.auth){const e=this.t.getImmediate({optional:!0});e?s(e):(jn("FirebaseAuthCredentialsProvider","Auth not yet detected"),n.resolve(),n=new Yn)}},0),o()}getToken(){const e=this.i,t=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(t).then(t=>this.i!==e?(jn("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):t?(Wn("string"==typeof t.accessToken,31837,{l:t}),new Zn(t.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.o&&this.auth.removeAuthTokenListener(this.o),this.o=void 0}u(){const e=this.auth&&this.auth.getUid();return Wn(null===e||"string"==typeof e,2055,{h:e}),new Mn(e)}}class to{constructor(e,t,i){this.P=e,this.T=t,this.I=i,this.type="FirstParty",this.user=Mn.FIRST_PARTY,this.A=new Map}R(){return this.I?this.I():null}get headers(){this.A.set("X-Goog-AuthUser",this.P);const e=this.R();return e&&this.A.set("Authorization",e),this.T&&this.A.set("X-Goog-Iam-Authorization-Token",this.T),this.A}}class io{constructor(e,t,i){this.P=e,this.T=t,this.I=i}getToken(){return Promise.resolve(new to(this.P,this.T,this.I))}start(e,t){e.enqueueRetryable(()=>t(Mn.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class ro{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class no{constructor(e,t){this.V=t,this.forceRefresh=!1,this.appCheck=null,this.m=null,this.p=null,mr(e)&&e.settings.appCheckToken&&(this.p=e.settings.appCheckToken)}start(e,t){Wn(void 0===this.o,3512);const i=e=>{null!=e.error&&jn("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${e.error.message}`);const i=e.token!==this.m;return this.m=e.token,jn("FirebaseAppCheckTokenProvider",`Received ${i?"new":"existing"} token.`),i?t(e.token):Promise.resolve()};this.o=t=>{e.enqueueRetryable(()=>i(t))};const r=e=>{jn("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=e,this.o&&this.appCheck.addTokenListener(this.o)};this.V.onInit(e=>r(e)),setTimeout(()=>{if(!this.appCheck){const e=this.V.getImmediate({optional:!0});e?r(e):jn("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){if(this.p)return Promise.resolve(new ro(this.p));const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(e=>e?(Wn("string"==typeof e.token,44558,{tokenResult:e}),this.m=e.token,new ro(e.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.o&&this.appCheck.removeTokenListener(this.o),this.o=void 0}}
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
 */function oo(e){const t="undefined"!=typeof self&&(self.crypto||self.msCrypto),i=new Uint8Array(e);if(t&&"function"==typeof t.getRandomValues)t.getRandomValues(i);else for(let t=0;t<e;t++)i[t]=Math.floor(256*Math.random());return i}
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
 */function so(){return new TextEncoder}
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
 */class ao{static newId(){const e=62*Math.floor(256/62);let t="";for(;t.length<20;){const i=oo(40);for(let r=0;r<i.length;++r)t.length<20&&i[r]<e&&(t+="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789".charAt(i[r]%62))}return t}}function lo(e,t){return e<t?-1:e>t?1:0}function co(e,t){return e.codePointAt(t)>65535?e.substring(t,t+2):e.substring(t,t+1)}function ho(e,t){for(let i=0;i<e.length&&i<t.length;++i)if(e[i]!==t[i])return lo(e[i],t[i]);return lo(e.length,t.length)}
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
 */const uo="__name__";class po{constructor(e,t,i){void 0===t?t=0:t>e.length&&Hn(637,{offset:t,range:e.length}),void 0===i?i=e.length-t:i>e.length-t&&Hn(1746,{length:i,range:e.length-t}),this.segments=e,this.offset=t,this.len=i}get length(){return this.len}isEqual(e){return 0===po.comparator(this,e)}child(e){const t=this.segments.slice(this.offset,this.limit());return e instanceof po?e.forEach(e=>{t.push(e)}):t.push(e),this.construct(t)}limit(){return this.offset+this.length}popFirst(e){return e=void 0===e?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return 0===this.length}isPrefixOf(e){if(e.length<this.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}forEach(e){for(let t=this.offset,i=this.limit();t<i;t++)e(this.segments[t])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,t){const i=Math.min(e.length,t.length);for(let r=0;r<i;r++){const i=po.compareSegments(e.get(r),t.get(r));if(0!==i)return i}return lo(e.length,t.length)}static compareSegments(e,t){const i=po.isNumericId(e),r=po.isNumericId(t);return i&&!r?-1:!i&&r?1:i&&r?po.extractNumericId(e).compare(po.extractNumericId(t)):function(e,t){let i=0;for(;i<e.length&&i<t.length;){const r=e.codePointAt(i),n=t.codePointAt(i);if(r!==n){if(r<128&&n<128)return lo(r,n);{const o=so(),s=ho(o.encode(co(e,i)),o.encode(co(t,i)));return 0!==s?s:lo(r,n)}}i+=r>65535?2:1}return lo(e.length,t.length)}(e,t)}static isNumericId(e){return e.startsWith("__id")&&e.endsWith("__")}static extractNumericId(e){return Nn.fromString(e.substring(4,e.length-2))}}class fo extends po{construct(e,t,i){return new fo(e,t,i)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...e){const t=[];for(const i of e){if(i.indexOf("//")>=0)throw new Jn(Gn,`Invalid segment (${i}). Paths must not contain // in them.`);t.push(...i.split("/").filter(e=>e.length>0))}return new fo(t)}static emptyPath(){return new fo([])}}const mo=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class go extends po{construct(e,t,i){return new go(e,t,i)}static isValidIdentifier(e){return mo.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),go.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return 1===this.length&&this.get(0)===uo}static keyField(){return new go([uo])}static fromServerFormat(e){const t=[];let i="",r=0;const n=()=>{if(0===i.length)throw new Jn(Gn,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);t.push(i),i=""};let o=!1;for(;r<e.length;){const t=e[r];if("\\"===t){if(r+1===e.length)throw new Jn(Gn,"Path has trailing escape character: "+e);const t=e[r+1];if("\\"!==t&&"."!==t&&"`"!==t)throw new Jn(Gn,"Path has invalid escape sequence: "+e);i+=t,r+=2}else"`"===t?(o=!o,r++):"."!==t||o?(i+=t,r++):(n(),r++)}if(n(),o)throw new Jn(Gn,"Unterminated ` in path: "+e);return new go(t)}static emptyPath(){return new go([])}}
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
 */class vo{constructor(e){this.path=e}static fromPath(e){return new vo(fo.fromString(e))}static fromName(e){return new vo(fo.fromString(e).popFirst(5))}static empty(){return new vo(fo.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return null!==e&&0===fo.comparator(this.path,e.path)}toString(){return this.path.toString()}static comparator(e,t){return fo.comparator(e.path,t.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new vo(new fo(e.slice()))}}
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
function yo(e,t){const i={typeString:e};return t&&(i.value=t),i}function bo(e,t){if(!function(e){return"object"==typeof e&&null!==e&&(Object.getPrototypeOf(e)===Object.prototype||null===Object.getPrototypeOf(e))}(e))throw new Jn(Gn,"JSON must be an object");let i;for(const r in t)if(t[r]){const n=t[r].typeString,o="value"in t[r]?{value:t[r].value}:void 0;if(!(r in e)){i=`JSON missing required field: '${r}'`;break}const s=e[r];if(n&&typeof s!==n){i=`JSON field '${r}' must be a ${n}.`;break}if(void 0!==o&&s!==o.value){i=`Expected '${r}' field to equal '${o.value}'`;break}}if(i)throw new Jn(Gn,i);return!0}
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
 */const _o=-62135596800,wo=1e6;class xo{static now(){return xo.fromMillis(Date.now())}static fromDate(e){return xo.fromMillis(e.getTime())}static fromMillis(e){const t=Math.floor(e/1e3),i=Math.floor((e-1e3*t)*wo);return new xo(t,i)}constructor(e,t){if(this.seconds=e,this.nanoseconds=t,t<0)throw new Jn(Gn,"Timestamp nanoseconds out of range: "+t);if(t>=1e9)throw new Jn(Gn,"Timestamp nanoseconds out of range: "+t);if(e<_o)throw new Jn(Gn,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new Jn(Gn,"Timestamp seconds out of range: "+e)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/wo}_compareTo(e){return this.seconds===e.seconds?lo(this.nanoseconds,e.nanoseconds):lo(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{type:xo._jsonSchemaVersion,seconds:this.seconds,nanoseconds:this.nanoseconds}}static fromJSON(e){if(bo(e,xo._jsonSchema))return new xo(e.seconds,e.nanoseconds)}valueOf(){const e=this.seconds-_o;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}xo._jsonSchemaVersion="firestore/timestamp/1.0",xo._jsonSchema={type:yo("string",xo._jsonSchemaVersion),seconds:yo("number"),nanoseconds:yo("number")};
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
class Eo extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}
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
 */class So{constructor(e){this.binaryString=e}static fromBase64String(e){const t=function(e){try{return atob(e)}catch(e){throw"undefined"!=typeof DOMException&&e instanceof DOMException?new Eo("Invalid base64 string: "+e):e}}(e);return new So(t)}static fromUint8Array(e){const t=function(e){let t="";for(let i=0;i<e.length;++i)t+=String.fromCharCode(e[i]);return t}(e);return new So(t)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return function(e){return btoa(e)}(this.binaryString)}toUint8Array(){return function(e){const t=new Uint8Array(e.length);for(let i=0;i<e.length;i++)t[i]=e.charCodeAt(i);return t}
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
 */(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return lo(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}So.EMPTY_BYTE_STRING=new So("");const Co="(default)";class To{constructor(e,t){this.projectId=e,this.database=t||Co}static empty(){return new To("","")}get isDefaultDatabase(){return this.database===Co}isEqual(e){return e instanceof To&&e.projectId===this.projectId&&e.database===this.database}}
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
 */class ko{constructor(e,t=null,i=[],r=[],n=null,o="F",s=null,a=null){this.path=e,this.collectionGroup=t,this.explicitOrderBy=i,this.filters=r,this.limit=n,this.limitType=o,this.startAt=s,this.endAt=a,this.Te=null,this.Ie=null,this.de=null,this.startAt,this.endAt}}
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
var Ao,Io;(Io=Ao||(Ao={}))[Io.OK=0]="OK",Io[Io.CANCELLED=1]="CANCELLED",Io[Io.UNKNOWN=2]="UNKNOWN",Io[Io.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",Io[Io.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",Io[Io.NOT_FOUND=5]="NOT_FOUND",Io[Io.ALREADY_EXISTS=6]="ALREADY_EXISTS",Io[Io.PERMISSION_DENIED=7]="PERMISSION_DENIED",Io[Io.UNAUTHENTICATED=16]="UNAUTHENTICATED",Io[Io.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",Io[Io.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",Io[Io.ABORTED=10]="ABORTED",Io[Io.OUT_OF_RANGE=11]="OUT_OF_RANGE",Io[Io.UNIMPLEMENTED=12]="UNIMPLEMENTED",Io[Io.INTERNAL=13]="INTERNAL",Io[Io.UNAVAILABLE=14]="UNAVAILABLE",Io[Io.DATA_LOSS=15]="DATA_LOSS",
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
new Nn([4294967295,4294967295],0);function Oo(){return"undefined"!=typeof document?document:null}
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
 */class Ro{constructor(e,t,i=1e3,r=1.5,n=6e4){this.Fi=e,this.timerId=t,this.d_=i,this.E_=r,this.A_=n,this.R_=0,this.V_=null,this.m_=Date.now(),this.reset()}reset(){this.R_=0}f_(){this.R_=this.A_}g_(e){this.cancel();const t=Math.floor(this.R_+this.p_()),i=Math.max(0,Date.now()-this.m_),r=Math.max(0,t-i);r>0&&jn("ExponentialBackoff",`Backing off for ${r} ms (base delay: ${this.R_} ms, delay with jitter: ${t} ms, last attempt: ${i} ms ago)`),this.V_=this.Fi.enqueueAfterDelay(this.timerId,r,()=>(this.m_=Date.now(),e())),this.R_*=this.E_,this.R_<this.d_&&(this.R_=this.d_),this.R_>this.A_&&(this.R_=this.A_)}y_(){null!==this.V_&&(this.V_.skipDelay(),this.V_=null)}cancel(){null!==this.V_&&(this.V_.cancel(),this.V_=null)}p_(){return(Math.random()-.5)*this.R_}}
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
 */class Po{constructor(e,t,i,r,n){this.asyncQueue=e,this.timerId=t,this.targetTimeMs=i,this.op=r,this.removalCallback=n,this.deferred=new Yn,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(e=>{})}get promise(){return this.deferred.promise}static createAndSchedule(e,t,i,r,n){const o=Date.now()+i,s=new Po(e,t,o,r,n);return s.start(i),s}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){null!==this.timerHandle&&(this.clearTimeout(),this.deferred.reject(new Jn(Kn,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>null!==this.timerHandle?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){null!==this.timerHandle&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}var No,Do;(Do=No||(No={})).Fa="default",Do.Cache="cache";
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
const $o=new Map,Lo=!0;
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
 */class Uo{constructor(e){var t,i;if(void 0===e.host){if(void 0!==e.ssl)throw new Jn(Gn,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=Lo}else this.host=e.host,this.ssl=null!==(t=e.ssl)&&void 0!==t?t:Lo;if(this.isUsingEmulator=void 0!==e.emulatorOptions,this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,void 0===e.cacheSizeBytes)this.cacheSizeBytes=41943040;else{if(-1!==e.cacheSizeBytes&&e.cacheSizeBytes<1048576)throw new Jn(Gn,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}(function(e,t,i,r){if(!0===t&&!0===r)throw new Jn(Gn,`${e} and ${i} cannot be used together.`)})("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:void 0===e.experimentalAutoDetectLongPolling?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=
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
function(e){const t={};return void 0!==e.timeoutSeconds&&(t.timeoutSeconds=e.timeoutSeconds),t}(null!==(i=e.experimentalLongPollingOptions)&&void 0!==i?i:{}),function(e){if(void 0!==e.timeoutSeconds){if(isNaN(e.timeoutSeconds))throw new Jn(Gn,`invalid long polling timeout: ${e.timeoutSeconds} (must not be NaN)`);if(e.timeoutSeconds<5)throw new Jn(Gn,`invalid long polling timeout: ${e.timeoutSeconds} (minimum allowed value is 5)`);if(e.timeoutSeconds>30)throw new Jn(Gn,`invalid long polling timeout: ${e.timeoutSeconds} (maximum allowed value is 30)`)}}
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
 */(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&function(e,t){return e.timeoutSeconds===t.timeoutSeconds}(this.experimentalLongPollingOptions,e.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}class Mo{constructor(e,t,i,r){this._authCredentials=e,this._appCheckCredentials=t,this._databaseId=i,this._app=r,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new Uo({}),this._settingsFrozen=!1,this._emulatorOptions={},this._terminateTask="notTerminated"}get app(){if(!this._app)throw new Jn(Xn,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return"notTerminated"!==this._terminateTask}_setSettings(e){if(this._settingsFrozen)throw new Jn(Xn,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new Uo(e),this._emulatorOptions=e.emulatorOptions||{},void 0!==e.credentials&&(this._authCredentials=function(e){if(!e)return new Qn;switch(e.type){case"firstParty":return new io(e.sessionIndex||"0",e.iamToken||null,e.authTokenFactory||null);case"provider":return e.client;default:throw new Jn(Gn,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_getEmulatorOptions(){return this._emulatorOptions}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return"notTerminated"===this._terminateTask&&(this._terminateTask=this._terminate()),this._terminateTask}async _restart(){"notTerminated"===this._terminateTask?await this._terminate():this._terminateTask="notTerminated"}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(e){const t=$o.get(e);t&&(jn("ComponentProvider","Removing Datastore"),$o.delete(e),t.terminate())}(this),Promise.resolve()}}
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
 */class Fo{constructor(e,t,i){this.converter=t,this._query=i,this.type="query",this.firestore=e}withConverter(e){return new Fo(this.firestore,e,this._query)}}class zo{constructor(e,t,i){this.converter=t,this._key=i,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new jo(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new zo(this.firestore,e,this._key)}toJSON(){return{type:zo._jsonSchemaVersion,referencePath:this._key.toString()}}static fromJSON(e,t,i){if(bo(t,zo._jsonSchema))return new zo(e,i||null,new vo(fo.fromString(t.referencePath)))}}zo._jsonSchemaVersion="firestore/documentReference/1.0",zo._jsonSchema={type:yo("string",zo._jsonSchemaVersion),referencePath:yo("string")};class jo extends Fo{constructor(e,t,i){super(e,t,function(e){return new ko(e)}(i)),this._path=i,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new zo(this.firestore,null,new vo(e))}withConverter(e){return new jo(this.firestore,e,this._path)}}
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
 */const Bo="AsyncQueue";class Vo{constructor(e=Promise.resolve()){this.Zu=[],this.Xu=!1,this.ec=[],this.tc=null,this.nc=!1,this.rc=!1,this.sc=[],this.F_=new Ro(this,"async_queue_retry"),this.oc=()=>{const e=Oo();e&&jn(Bo,"Visibility state changed to "+e.visibilityState),this.F_.y_()},this._c=e;const t=Oo();t&&"function"==typeof t.addEventListener&&t.addEventListener("visibilitychange",this.oc)}get isShuttingDown(){return this.Xu}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.ac(),this.uc(e)}enterRestrictedMode(e){if(!this.Xu){this.Xu=!0,this.rc=e||!1;const t=Oo();t&&"function"==typeof t.removeEventListener&&t.removeEventListener("visibilitychange",this.oc)}}enqueue(e){if(this.ac(),this.Xu)return new Promise(()=>{});const t=new Yn;return this.uc(()=>this.Xu&&this.rc?Promise.resolve():(e().then(t.resolve,t.reject),t.promise)).then(()=>t.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.Zu.push(e),this.cc()))}async cc(){if(0!==this.Zu.length){try{await this.Zu[0](),this.Zu.shift(),this.F_.reset()}catch(e){if(!function(e){return"IndexedDbTransactionError"===e.name}(e))throw e;jn(Bo,"Operation failed with retryable error: "+e)}this.Zu.length>0&&this.F_.g_(()=>this.cc())}}uc(e){const t=this._c.then(()=>(this.nc=!0,e().catch(e=>{throw this.tc=e,this.nc=!1,Bn("INTERNAL UNHANDLED ERROR: ",Ho(e)),e}).then(e=>(this.nc=!1,e))));return this._c=t,t}enqueueAfterDelay(e,t,i){this.ac(),this.sc.indexOf(e)>-1&&(t=0);const r=Po.createAndSchedule(this,e,t,i,e=>this.lc(e));return this.ec.push(r),r}ac(){this.tc&&Hn(47125,{hc:Ho(this.tc)})}verifyOperationInProgress(){}async Pc(){let e;do{e=this._c,await e}while(e!==this._c)}Tc(e){for(const t of this.ec)if(t.timerId===e)return!0;return!1}Ic(e){return this.Pc().then(()=>{this.ec.sort((e,t)=>e.targetTimeMs-t.targetTimeMs);for(const t of this.ec)if(t.skipDelay(),"all"!==e&&t.timerId===e)break;return this.Pc()})}dc(e){this.sc.push(e)}lc(e){const t=this.ec.indexOf(e);this.ec.splice(t,1)}}function Ho(e){let t=e.message||"";return e.stack&&(t=e.stack.includes(e.message)?e.stack:e.message+"\n"+e.stack),t}class qo extends Mo{constructor(e,t,i,r){super(e,t,i,r),this.type="firestore",this._queue=new Vo,this._persistenceKey=(null==r?void 0:r.name)||"[DEFAULT]"}async _terminate(){if(this._firestoreClient){const e=this._firestoreClient.terminate();this._queue=new Vo(e),this._firestoreClient=void 0,await e}}}
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
 */class Wo{constructor(e){this._byteString=e}static fromBase64String(e){try{return new Wo(So.fromBase64String(e))}catch(e){throw new Jn(Gn,"Failed to construct data from Base64 string: "+e)}}static fromUint8Array(e){return new Wo(So.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}toJSON(){return{type:Wo._jsonSchemaVersion,bytes:this.toBase64()}}static fromJSON(e){if(bo(e,Wo._jsonSchema))return Wo.fromBase64String(e.bytes)}}Wo._jsonSchemaVersion="firestore/bytes/1.0",Wo._jsonSchema={type:yo("string",Wo._jsonSchemaVersion),bytes:yo("string")};
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
class Ko{constructor(...e){for(let t=0;t<e.length;++t)if(0===e[t].length)throw new Jn(Gn,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new go(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}
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
 */class Go{constructor(e,t){if(!isFinite(e)||e<-90||e>90)throw new Jn(Gn,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(t)||t<-180||t>180)throw new Jn(Gn,"Longitude must be a number between -180 and 180, but was: "+t);this._lat=e,this._long=t}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}_compareTo(e){return lo(this._lat,e._lat)||lo(this._long,e._long)}toJSON(){return{latitude:this._lat,longitude:this._long,type:Go._jsonSchemaVersion}}static fromJSON(e){if(bo(e,Go._jsonSchema))return new Go(e.latitude,e.longitude)}}Go._jsonSchemaVersion="firestore/geoPoint/1.0",Go._jsonSchema={type:yo("string",Go._jsonSchemaVersion),latitude:yo("number"),longitude:yo("number")};
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
class Xo{constructor(e){this._values=(e||[]).map(e=>e)}toArray(){return this._values.map(e=>e)}isEqual(e){return function(e,t){if(e.length!==t.length)return!1;for(let i=0;i<e.length;++i)if(e[i]!==t[i])return!1;return!0}(this._values,e._values)}toJSON(){return{type:Xo._jsonSchemaVersion,vectorValues:this._values}}static fromJSON(e){if(bo(e,Xo._jsonSchema)){if(Array.isArray(e.vectorValues)&&e.vectorValues.every(e=>"number"==typeof e))return new Xo(e.vectorValues);throw new Jn(Gn,"Expected 'vectorValues' field to be a number array")}}}Xo._jsonSchemaVersion="firestore/vectorValue/1.0",Xo._jsonSchema={type:yo("string",Xo._jsonSchemaVersion),vectorValues:yo("object")};const Jo=new RegExp("[~\\*/\\[\\]]");function Yo(e,t,i,r,n){let o=`Function ${t}() called with invalid data`;o+=". ";return new Jn(Gn,o+e+"")}
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
 */class Zo{constructor(e,t,i,r,n){this._firestore=e,this._userDataWriter=t,this._key=i,this._document=r,this._converter=n}get id(){return this._key.path.lastSegment()}get ref(){return new zo(this._firestore,this._converter,this._key)}exists(){return null!==this._document}data(){if(this._document){if(this._converter){const e=new Qo(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const t=this._document.data.field(es("DocumentSnapshot.get",e));if(null!==t)return this._userDataWriter.convertValue(t)}}}class Qo extends Zo{data(){return super.data()}}function es(e,t){return"string"==typeof t?function(e,t){if(t.search(Jo)>=0)throw Yo(`Invalid field path (${t}). Paths must not contain '~', '*', '/', '[', or ']'`,e);try{return new Ko(...t.split("."))._internalPath}catch(i){throw Yo(`Invalid field path (${t}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,e)}}(e,t):t instanceof Ko?t._internalPath:t._delegate._internalPath}class ts{constructor(e,t){this.hasPendingWrites=e,this.fromCache=t}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class is extends Zo{constructor(e,t,i,r,n,o){super(e,t,i,r,o),this._firestore=e,this._firestoreImpl=e,this.metadata=n}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const t=new rs(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(t,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,t={}){if(this._document){const i=this._document.data.field(es("DocumentSnapshot.get",e));if(null!==i)return this._userDataWriter.convertValue(i,t.serverTimestamps)}}toJSON(){if(this.metadata.hasPendingWrites)throw new Jn(Xn,"DocumentSnapshot.toJSON() attempted to serialize a document with pending writes. Await waitForPendingWrites() before invoking toJSON().");const e=this._document,t={};return t.type=is._jsonSchemaVersion,t.bundle="",t.bundleSource="DocumentSnapshot",t.bundleName=this._key.toString(),e&&e.isValidDocument()&&e.isFoundDocument()?(this._userDataWriter.convertObjectMap(e.data.value.mapValue.fields,"previous"),t.bundle=(this._firestore,this.ref.path,"NOT SUPPORTED"),t):t}}is._jsonSchemaVersion="firestore/documentSnapshot/1.0",is._jsonSchema={type:yo("string",is._jsonSchemaVersion),bundleSource:yo("string","DocumentSnapshot"),bundleName:yo("string"),bundle:yo("string")};class rs extends is{data(e={}){return super.data(e)}}class ns{constructor(e,t,i,r){this._firestore=e,this._userDataWriter=t,this._snapshot=r,this.metadata=new ts(r.hasPendingWrites,r.fromCache),this.query=i}get docs(){const e=[];return this.forEach(t=>e.push(t)),e}get size(){return this._snapshot.docs.size}get empty(){return 0===this.size}forEach(e,t){this._snapshot.docs.forEach(i=>{e.call(t,new rs(this._firestore,this._userDataWriter,i.key,i,new ts(this._snapshot.mutatedKeys.has(i.key),this._snapshot.fromCache),this.query.converter))})}docChanges(e={}){const t=!!e.includeMetadataChanges;if(t&&this._snapshot.excludesMetadataChanges)throw new Jn(Gn,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===t||(this._cachedChanges=function(e,t){if(e._snapshot.oldDocs.isEmpty()){let t=0;return e._snapshot.docChanges.map(i=>{const r=new rs(e._firestore,e._userDataWriter,i.doc.key,i.doc,new ts(e._snapshot.mutatedKeys.has(i.doc.key),e._snapshot.fromCache),e.query.converter);return i.doc,{type:"added",doc:r,oldIndex:-1,newIndex:t++}})}{let i=e._snapshot.oldDocs;return e._snapshot.docChanges.filter(e=>t||3!==e.type).map(t=>{const r=new rs(e._firestore,e._userDataWriter,t.doc.key,t.doc,new ts(e._snapshot.mutatedKeys.has(t.doc.key),e._snapshot.fromCache),e.query.converter);let n=-1,o=-1;return 0!==t.type&&(n=i.indexOf(t.doc.key),i=i.delete(t.doc.key)),1!==t.type&&(i=i.add(t.doc),o=i.indexOf(t.doc.key)),{type:os(t.type),doc:r,oldIndex:n,newIndex:o}})}}(this,t),this._cachedChangesIncludeMetadataChanges=t),this._cachedChanges}toJSON(){if(this.metadata.hasPendingWrites)throw new Jn(Xn,"QuerySnapshot.toJSON() attempted to serialize a document with pending writes. Await waitForPendingWrites() before invoking toJSON().");const e={};e.type=ns._jsonSchemaVersion,e.bundleSource="QuerySnapshot",e.bundleName=ao.newId(),this._firestore._databaseId.database,this._firestore._databaseId.projectId;const t=[],i=[],r=[];return this.docs.forEach(e=>{null!==e._document&&(t.push(e._document),i.push(this._userDataWriter.convertObjectMap(e._document.data.value.mapValue.fields,"previous")),r.push(e.ref.path))}),e.bundle=(this._firestore,this.query._query,e.bundleName,"NOT SUPPORTED"),e}}function os(e){switch(e){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return Hn(61501,{type:e})}}ns._jsonSchemaVersion="firestore/querySnapshot/1.0",ns._jsonSchema={type:yo("string",ns._jsonSchemaVersion),bundleSource:yo("string","QuerySnapshot"),bundleName:yo("string"),bundle:yo("string")},function(e,t=!0){!function(e){Fn=e}(vr),fr(new di("firestore",(e,{instanceIdentifier:i,options:r})=>{const n=e.getProvider("app").getImmediate(),o=new qo(new eo(e.getProvider("auth-internal")),new no(n,e.getProvider("app-check-internal")),function(e,t){if(!Object.prototype.hasOwnProperty.apply(e.options,["projectId"]))throw new Jn(Gn,'"projectId" not provided in firebase.initializeApp.');return new To(e.options.projectId,t)}(n,i),n);return r=Object.assign({useFetchStreams:t},r),o._setSettings(r),o},"PUBLIC").setMultipleInstances(!0)),yr(Ln,Un,e),yr(Ln,Un,"esm2017")}();
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
const ss="firebasestorage.googleapis.com";
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
class as extends ri{constructor(e,t,i=0){super(ds(e),`Firebase Storage: ${t} (${ds(e)})`),this.status_=i,this.customData={serverResponse:null},this._baseMessage=this.message,Object.setPrototypeOf(this,as.prototype)}get status(){return this.status_}set status(e){this.status_=e}_codeEquals(e){return ds(e)===this.code}get serverResponse(){return this.customData.serverResponse}set serverResponse(e){this.customData.serverResponse=e,this.customData.serverResponse?this.message=`${this._baseMessage}\n${this.customData.serverResponse}`:this.message=this._baseMessage}}var ls,cs;function ds(e){return"storage/"+e}function hs(e){return new as(ls.INVALID_ARGUMENT,e)}function us(){return new as(ls.APP_DELETED,"The Firebase app was deleted.")}!function(e){e.UNKNOWN="unknown",e.OBJECT_NOT_FOUND="object-not-found",e.BUCKET_NOT_FOUND="bucket-not-found",e.PROJECT_NOT_FOUND="project-not-found",e.QUOTA_EXCEEDED="quota-exceeded",e.UNAUTHENTICATED="unauthenticated",e.UNAUTHORIZED="unauthorized",e.UNAUTHORIZED_APP="unauthorized-app",e.RETRY_LIMIT_EXCEEDED="retry-limit-exceeded",e.INVALID_CHECKSUM="invalid-checksum",e.CANCELED="canceled",e.INVALID_EVENT_NAME="invalid-event-name",e.INVALID_URL="invalid-url",e.INVALID_DEFAULT_BUCKET="invalid-default-bucket",e.NO_DEFAULT_BUCKET="no-default-bucket",e.CANNOT_SLICE_BLOB="cannot-slice-blob",e.SERVER_FILE_WRONG_SIZE="server-file-wrong-size",e.NO_DOWNLOAD_URL="no-download-url",e.INVALID_ARGUMENT="invalid-argument",e.INVALID_ARGUMENT_COUNT="invalid-argument-count",e.APP_DELETED="app-deleted",e.INVALID_ROOT_OPERATION="invalid-root-operation",e.INVALID_FORMAT="invalid-format",e.INTERNAL_ERROR="internal-error",e.UNSUPPORTED_ENVIRONMENT="unsupported-environment"}(ls||(ls={}));
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
class ps{constructor(e,t){this.bucket=e,this.path_=t}get path(){return this.path_}get isRoot(){return 0===this.path.length}fullServerUrl(){const e=encodeURIComponent;return"/b/"+e(this.bucket)+"/o/"+e(this.path)}bucketOnlyServerUrl(){return"/b/"+encodeURIComponent(this.bucket)+"/o"}static makeFromBucketSpec(e,t){let i;try{i=ps.makeFromUrl(e,t)}catch(t){return new ps(e,"")}if(""===i.path)return i;throw r=e,new as(ls.INVALID_DEFAULT_BUCKET,"Invalid default bucket '"+r+"'.");var r}static makeFromUrl(e,t){let i=null;const r="([A-Za-z0-9.\\-_]+)";const n=new RegExp("^gs://"+r+"(/(.*))?$","i");function o(e){e.path_=decodeURIComponent(e.path)}const s=t.replace(/[.]/g,"\\."),a=[{regex:n,indices:{bucket:1,path:3},postModify:function(e){"/"===e.path.charAt(e.path.length-1)&&(e.path_=e.path_.slice(0,-1))}},{regex:new RegExp(`^https?://${s}/v[A-Za-z0-9_]+/b/${r}/o(/([^?#]*).*)?$`,"i"),indices:{bucket:1,path:3},postModify:o},{regex:new RegExp(`^https?://${t===ss?"(?:storage.googleapis.com|storage.cloud.google.com)":t}/${r}/([^?#]*)`,"i"),indices:{bucket:1,path:2},postModify:o}];for(let t=0;t<a.length;t++){const r=a[t],n=r.regex.exec(e);if(n){const e=n[r.indices.bucket];let t=n[r.indices.path];t||(t=""),i=new ps(e,t),r.postModify(i);break}}if(null==i)throw function(e){return new as(ls.INVALID_URL,"Invalid URL '"+e+"'.")}(e);return i}}class fs{constructor(e){this.promise_=Promise.reject(e)}getPromise(){return this.promise_}cancel(e=!1){}}
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
 */function ms(e,t,i,r){if(r<t)throw hs(`Invalid value for '${e}'. Expected ${t} or greater.`);if(r>i)throw hs(`Invalid value for '${e}'. Expected ${i} or less.`)}!function(e){e[e.NO_ERROR=0]="NO_ERROR",e[e.NETWORK_ERROR=1]="NETWORK_ERROR",e[e.ABORT=2]="ABORT"}(cs||(cs={}));
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
class gs{constructor(e,t,i,r,n,o,s,a,l,c,d,h=!0,u=!1){this.url_=e,this.method_=t,this.headers_=i,this.body_=r,this.successCodes_=n,this.additionalRetryCodes_=o,this.callback_=s,this.errorCallback_=a,this.timeout_=l,this.progressCallback_=c,this.connectionFactory_=d,this.retry=h,this.isUsingEmulator=u,this.pendingConnection_=null,this.backoffId_=null,this.canceled_=!1,this.appDelete_=!1,this.promise_=new Promise((e,t)=>{this.resolve_=e,this.reject_=t,this.start_()})}start_(){const e=(e,t)=>{if(t)return void e(!1,new vs(!1,null,!0));const i=this.connectionFactory_();this.pendingConnection_=i;const r=e=>{const t=e.loaded,i=e.lengthComputable?e.total:-1;null!==this.progressCallback_&&this.progressCallback_(t,i)};null!==this.progressCallback_&&i.addUploadProgressListener(r),i.send(this.url_,this.method_,this.isUsingEmulator,this.body_,this.headers_).then(()=>{null!==this.progressCallback_&&i.removeUploadProgressListener(r),this.pendingConnection_=null;const t=i.getErrorCode()===cs.NO_ERROR,n=i.getStatus();if(!t||
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
function(e,t){const i=e>=500&&e<600,r=-1!==[408,429].indexOf(e),n=-1!==t.indexOf(e);return i||r||n}(n,this.additionalRetryCodes_)&&this.retry){const t=i.getErrorCode()===cs.ABORT;return void e(!1,new vs(!1,null,t))}const o=-1!==this.successCodes_.indexOf(n);e(!0,new vs(o,i))})},t=(e,t)=>{const i=this.resolve_,r=this.reject_,n=t.connection;if(t.wasSuccessCode)try{const e=this.callback_(n,n.getResponse());!
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
function(e){return void 0!==e}(e)?i():i(e)}catch(e){r(e)}else if(null!==n){const e=new as(ls.UNKNOWN,"An unknown error occurred, please check the error payload for server response.");e.serverResponse=n.getErrorText(),this.errorCallback_?r(this.errorCallback_(n,e)):r(e)}else if(t.canceled){r(this.appDelete_?us():new as(ls.CANCELED,"User canceled the upload/download."))}else{r(new as(ls.RETRY_LIMIT_EXCEEDED,"Max retry time for operation exceeded, please try again."))}};this.canceled_?t(0,new vs(!1,null,!0)):this.backoffId_=function(e,t,i){let r=1,n=null,o=null,s=!1,a=0;function l(){return 2===a}let c=!1;function d(...e){c||(c=!0,t.apply(null,e))}function h(t){n=setTimeout(()=>{n=null,e(p,l())},t)}function u(){o&&clearTimeout(o)}function p(e,...t){if(c)return void u();if(e)return u(),void d.call(null,e,...t);if(l()||s)return u(),void d.call(null,e,...t);let i;r<64&&(r*=2),1===a?(a=2,i=0):i=1e3*(r+Math.random()),h(i)}let f=!1;function m(e){f||(f=!0,u(),c||(null!==n?(e||(a=2),clearTimeout(n),h(0)):e||(a=1)))}return h(0),o=setTimeout(()=>{s=!0,m(!0)},i),m}(e,t,this.timeout_)}getPromise(){return this.promise_}cancel(e){this.canceled_=!0,this.appDelete_=e||!1,null!==this.backoffId_&&(0,this.backoffId_)(!1),null!==this.pendingConnection_&&this.pendingConnection_.abort()}}class vs{constructor(e,t,i){this.wasSuccessCode=e,this.connection=t,this.canceled=!!i}}function ys(e,t,i,r,n,o,s=!0,a=!1){const l=function(e){const t=encodeURIComponent;let i="?";for(const r in e)e.hasOwnProperty(r)&&(i=i+(t(r)+"=")+t(e[r])+"&");return i=i.slice(0,-1),i}(e.urlParams),c=e.url+l,d=Object.assign({},e.headers);return function(e,t){t&&(e["X-Firebase-GMPID"]=t)}(d,t),function(e,t){null!==t&&t.length>0&&(e.Authorization="Firebase "+t)}(d,i),function(e,t){e["X-Firebase-Storage-Version"]="webjs/"+(null!=t?t:"AppManager")}(d,o),function(e,t){null!==t&&(e["X-Firebase-AppCheck"]=t)}(d,r),new gs(c,e.method,d,e.body,e.successCodes,e.additionalRetryCodes,e.handler,e.errorHandler,e.timeout,e.progressCallback,n,s,a)}
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
class bs{constructor(e,t){this._service=e,this._location=t instanceof ps?t:ps.makeFromUrl(t,e.host)}toString(){return"gs://"+this._location.bucket+"/"+this._location.path}_newRef(e,t){return new bs(e,t)}get root(){const e=new ps(this._location.bucket,"");return this._newRef(this._service,e)}get bucket(){return this._location.bucket}get fullPath(){return this._location.path}get name(){return function(e){const t=e.lastIndexOf("/",e.length-2);return-1===t?e:e.slice(t+1)}(this._location.path)}get storage(){return this._service}get parent(){const e=function(e){if(0===e.length)return null;const t=e.lastIndexOf("/");return-1===t?"":e.slice(0,t)}(this._location.path);if(null===e)return null;const t=new ps(this._location.bucket,e);return new bs(this._service,t)}_throwIfRoot(e){if(""===this._location.path)throw function(e){return new as(ls.INVALID_ROOT_OPERATION,"The operation '"+e+"' cannot be performed on a root reference, create a non-root reference using child, such as .child('file.png').")}(e)}}function _s(e,t){const i=null==t?void 0:t.storageBucket;return null==i?null:ps.makeFromBucketSpec(i,e)}class ws{constructor(e,t,i,r,n,o=!1){this.app=e,this._authProvider=t,this._appCheckProvider=i,this._url=r,this._firebaseVersion=n,this._isUsingEmulator=o,this._bucket=null,this._host=ss,this._protocol="https",this._appId=null,this._deleted=!1,this._maxOperationRetryTime=12e4,this._maxUploadRetryTime=6e5,this._requests=new Set,this._bucket=null!=r?ps.makeFromBucketSpec(r,this._host):_s(this._host,this.app.options)}get host(){return this._host}set host(e){this._host=e,null!=this._url?this._bucket=ps.makeFromBucketSpec(this._url,e):this._bucket=_s(e,this.app.options)}get maxUploadRetryTime(){return this._maxUploadRetryTime}set maxUploadRetryTime(e){ms("time",0,Number.POSITIVE_INFINITY,e),this._maxUploadRetryTime=e}get maxOperationRetryTime(){return this._maxOperationRetryTime}set maxOperationRetryTime(e){ms("time",0,Number.POSITIVE_INFINITY,e),this._maxOperationRetryTime=e}async _getAuthToken(){if(this._overrideAuthToken)return this._overrideAuthToken;const e=this._authProvider.getImmediate({optional:!0});if(e){const t=await e.getToken();if(null!==t)return t.accessToken}return null}async _getAppCheckToken(){if(mr(this.app)&&this.app.settings.appCheckToken)return this.app.settings.appCheckToken;const e=this._appCheckProvider.getImmediate({optional:!0});if(e){return(await e.getToken()).token}return null}_delete(){return this._deleted||(this._deleted=!0,this._requests.forEach(e=>e.cancel()),this._requests.clear()),Promise.resolve()}_makeStorageReference(e){return new bs(this,e)}_makeRequest(e,t,i,r,n=!0){if(this._deleted)return new fs(us());{const o=ys(e,this._appId,i,r,t,this._firebaseVersion,n,this._isUsingEmulator);return this._requests.add(o),o.getPromise().then(()=>this._requests.delete(o),()=>this._requests.delete(o)),o}}async makeRequestWithTokens(e,t){const[i,r]=await Promise.all([this._getAuthToken(),this._getAppCheckToken()]);return this._makeRequest(e,t,i,r).getPromise()}}const xs="@firebase/storage",Es="0.13.14";function Ss(e,{instanceIdentifier:t}){const i=e.getProvider("app").getImmediate(),r=e.getProvider("auth-internal"),n=e.getProvider("app-check-internal");return new ws(i,r,n,t,vr)}fr(new di("storage",Ss,"PUBLIC").setMultipleInstances(!0)),yr(xs,Es,""),yr(xs,Es,"esm2017");
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
class Cs{constructor(e,t,i,r){this.app=e,this.auth=null,this.messaging=null,this.appCheck=null,this.serverAppAppCheckToken=null,mr(e)&&e.settings.appCheckToken&&(this.serverAppAppCheckToken=e.settings.appCheckToken),this.auth=t.getImmediate({optional:!0}),this.messaging=i.getImmediate({optional:!0}),this.auth||t.get().then(e=>this.auth=e,()=>{}),this.messaging||i.get().then(e=>this.messaging=e,()=>{}),this.appCheck||null==r||r.get().then(e=>this.appCheck=e,()=>{})}async getAuthToken(){if(this.auth)try{const e=await this.auth.getToken();return null==e?void 0:e.accessToken}catch(e){return}}async getMessagingToken(){if(this.messaging&&"Notification"in self&&"granted"===Notification.permission)try{return await this.messaging.getToken()}catch(e){return}}async getAppCheckToken(e){if(this.serverAppAppCheckToken)return this.serverAppAppCheckToken;if(this.appCheck){const t=e?await this.appCheck.getLimitedUseToken():await this.appCheck.getToken();return t.error?null:t.token}return null}async getContext(e){return{authToken:await this.getAuthToken(),messagingToken:await this.getMessagingToken(),appCheckToken:await this.getAppCheckToken(e)}}}
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
 */const Ts="us-central1";class ks{constructor(e,t,i,r,n=Ts,o=(...e)=>fetch(...e)){this.app=e,this.fetchImpl=o,this.emulatorOrigin=null,this.contextProvider=new Cs(e,t,i,r),this.cancelAllRequests=new Promise(e=>{this.deleteService=()=>Promise.resolve(e())});try{const e=new URL(n);this.customDomain=e.origin+("/"===e.pathname?"":e.pathname),this.region=Ts}catch(e){this.customDomain=null,this.region=n}}_delete(){return this.deleteService()}_url(e){const t=this.app.options.projectId;if(null!==this.emulatorOrigin){return`${this.emulatorOrigin}/${t}/${this.region}/${e}`}return null!==this.customDomain?`${this.customDomain}/${e}`:`https://${this.region}-${t}.cloudfunctions.net/${e}`}}const As="@firebase/functions",Is="0.12.9";!function(e){fr(new di("functions",(e,{instanceIdentifier:t})=>{const i=e.getProvider("app").getImmediate(),r=e.getProvider("auth-internal"),n=e.getProvider("messaging-internal"),o=e.getProvider("app-check-internal");return new ks(i,r,n,o,t)},"PUBLIC").setMultipleInstances(!0)),yr(As,Is,e),yr(As,Is,"esm2017")}();
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
yr("firebase","11.10.0","app");const Os=xe(null),Rs=xe("idle"),Ps=xe(null),Ns=xe(!1);Ee(()=>({authUser:Os.get(),authState:Rs.get(),error:Ps.get(),initialized:Ns.get()}));const Ds=xe({showCompleted:!0,priority:"all",tag:"all",search:""}),$s=xe({status:"idle",documents:[],error:null,isListening:!1,lastUpdated:null,currentPage:1,pageSize:5,hasNextPage:!1,hasPreviousPage:!1,queryDescription:"All todos"}),Ls=xe(null);if(Ee(()=>{const e=Ls.get();return e?e.state.get():$s.get()}),Ee(()=>Ds.get()),"object"==typeof globalThis){const e=globalThis;e.__dfSetTodoDemoState=function(e){if(Ls.get())throw new Error("Cannot set demo state after the todo store has been initialized.");$s.set(e)},e.__dfSetTodoDemoFilters=function(e){if(Ls.get())throw new Error("Cannot set demo filters after the todo store has been initialized.");Ds.set(e)}}const Us=xe({status:"idle",documents:[],error:null,isListening:!1,lastUpdated:null,currentPage:1,pageSize:50,hasNextPage:!1,hasPreviousPage:!1,queryDescription:"Latest messages"}),Ms=xe("idle"),Fs=xe(null),zs=xe(null);Ee(()=>{const e=zs.get();return e?e.state.get():Us.get()}),Ee(()=>({status:Ms.get(),error:Fs.get()}));const js=xe("idle"),Bs=xe(0),Vs=xe(null),Hs=xe(null);Ee(()=>({status:js.get(),progress:Bs.get(),error:Vs.get(),uploadedFile:Hs.get()})),xe(null);const qs=xe({status:"idle",data:null,error:null,lastCalled:null}),Ws=xe({status:"idle",data:null,error:null,lastCalled:null}),Ks=xe({status:"idle",data:null,error:null,lastCalled:null});Ee(()=>qs.get()),Ee(()=>Ws.get()),Ee(()=>Ks.get());const Gs=xe({...{status:"idle",documents:[],error:null,isListening:!1,lastUpdated:null,currentPage:1,pageSize:20,hasNextPage:!1,hasPreviousPage:!1,queryDescription:"Awaiting authentication"}}),Xs=xe(null);xe(null),xe(null);const Js=Ee(()=>{const e=Xs.get();return e?e.state.get():Gs.get()});Ee(()=>{const e=Js.get().documents,t=e.length,i=t>0?e[0].recordedAt??null:null,r={pushups:{count:0,totalValue:0},squats:{count:0,totalValue:0},plank:{count:0,totalValue:0},dumbbells:{count:0,totalValue:0},hang:{count:0,totalValue:0}};return e.forEach(e=>{r[e.exerciseType].count+=1,r[e.exerciseType].totalValue+=e.value}),{totalExercises:t,entryCount:t,lastEntryAt:i,byType:r}}),xo.fromDate(new Date("2024-01-15")),xo.fromDate(new Date("2024-01-16")),xo.fromDate(new Date("2024-01-20")),xo.fromDate(new Date("2024-01-16")),xo.fromDate(new Date("2024-01-16")),xo.fromDate(new Date("2024-01-22")),xo.fromDate(new Date("2024-01-17")),xo.fromDate(new Date("2024-01-17")),xo.fromDate(new Date("2024-01-25")),xo.fromDate(new Date("2024-01-18")),xo.fromDate(new Date("2024-01-18")),xo.fromDate(new Date("2024-01-28")),xo.fromDate(new Date("2024-01-19")),xo.fromDate(new Date("2024-01-19")),xo.fromDate(new Date("2024-02-05")),xo.fromDate(new Date("2024-01-20")),xo.fromDate(new Date("2024-01-20")),xo.fromDate(new Date("2024-02-10")),xo.fromDate(new Date("2024-01-21")),xo.fromDate(new Date("2024-01-21")),xo.fromDate(new Date("2024-02-15")),xo.fromDate(new Date("2024-01-22")),xo.fromDate(new Date("2024-01-22")),xo.fromDate(new Date("2024-02-12")),xo.fromDate(new Date("2024-01-23")),xo.fromDate(new Date("2024-01-23")),xo.fromDate(new Date("2024-02-01")),xo.fromDate(new Date("2024-01-24")),xo.fromDate(new Date("2024-01-24")),xo.fromDate(new Date("2024-02-20")),xo.fromDate(new Date("2024-01-25")),xo.fromDate(new Date("2024-01-25")),xo.fromDate(new Date("2024-02-18")),xo.fromDate(new Date("2024-01-26")),xo.fromDate(new Date("2024-01-26")),xo.fromDate(new Date("2024-02-08"));const Ys=xe([]),Zs=xe(!1),Qs=xe("");Ee(()=>({users:Ys.get(),loading:Zs.get(),error:Qs.get()}));
/**
 * @license
 * Copyright 2022 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */
class ea extends Ke{connectedCallback(){super.connectedCallback(),this.setAttribute("aria-hidden","true")}render(){return ne`<span class="shadow"></span>`}}
/**
 * @license
 * Copyright 2024 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */const ta=Ie`:host,.shadow,.shadow::before,.shadow::after{border-radius:inherit;inset:0;position:absolute;transition-duration:inherit;transition-property:inherit;transition-timing-function:inherit}:host{display:flex;pointer-events:none;transition-property:box-shadow,opacity}.shadow::before,.shadow::after{content:"";transition-property:box-shadow,opacity;--_level: var(--md-elevation-level, 0);--_shadow-color: var(--md-elevation-shadow-color, var(--md-sys-color-shadow, #000))}.shadow::before{box-shadow:0px calc(1px*(clamp(0,var(--_level),1) + clamp(0,var(--_level) - 3,1) + 2*clamp(0,var(--_level) - 4,1))) calc(1px*(2*clamp(0,var(--_level),1) + clamp(0,var(--_level) - 2,1) + clamp(0,var(--_level) - 4,1))) 0px var(--_shadow-color);opacity:.3}.shadow::after{box-shadow:0px calc(1px*(clamp(0,var(--_level),1) + clamp(0,var(--_level) - 1,1) + 2*clamp(0,var(--_level) - 2,3))) calc(1px*(3*clamp(0,var(--_level),2) + 2*clamp(0,var(--_level) - 2,3))) calc(1px*(clamp(0,var(--_level),4) + 2*clamp(0,var(--_level) - 4,1))) var(--_shadow-color);opacity:.15}
`
/**
 * @license
 * Copyright 2022 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */;let ia=class extends ea{};ia.styles=[ta],ia=Or([Xe("md-elevation")],ia);
/**
 * @license
 * Copyright 2023 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */
const ra=Symbol("attachableController");let na;na=new MutationObserver(e=>{for(const t of e)t.target[ra]?.hostConnected()});class oa{get htmlFor(){return this.host.getAttribute("for")}set htmlFor(e){null===e?this.host.removeAttribute("for"):this.host.setAttribute("for",e)}get control(){return this.host.hasAttribute("for")?this.htmlFor&&this.host.isConnected?this.host.getRootNode().querySelector(`#${this.htmlFor}`):null:this.currentControl||this.host.parentElement}set control(e){e?this.attach(e):this.detach()}constructor(e,t){this.host=e,this.onControlChange=t,this.currentControl=null,e.addController(this),e[ra]=this,na?.observe(e,{attributeFilter:["for"]})}attach(e){e!==this.currentControl&&(this.setCurrentControl(e),this.host.removeAttribute("for"))}detach(){this.setCurrentControl(null),this.host.setAttribute("for","")}hostConnected(){this.setCurrentControl(this.control)}hostDisconnected(){this.setCurrentControl(null)}setCurrentControl(e){this.onControlChange(this.currentControl,e),this.currentControl=e}}
/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */const sa=["focusin","focusout","pointerdown"];class aa extends Ke{constructor(){super(...arguments),this.visible=!1,this.inward=!1,this.attachableController=new oa(this,this.onControlChange.bind(this))}get htmlFor(){return this.attachableController.htmlFor}set htmlFor(e){this.attachableController.htmlFor=e}get control(){return this.attachableController.control}set control(e){this.attachableController.control=e}attach(e){this.attachableController.attach(e)}detach(){this.attachableController.detach()}connectedCallback(){super.connectedCallback(),this.setAttribute("aria-hidden","true")}handleEvent(e){if(!e[la]){switch(e.type){default:return;case"focusin":this.visible=this.control?.matches(":focus-visible")??!1;break;case"focusout":case"pointerdown":this.visible=!1}e[la]=!0}}onControlChange(e,t){for(const i of sa)e?.removeEventListener(i,this),t?.addEventListener(i,this)}update(e){e.has("visible")&&this.dispatchEvent(new Event("visibility-changed")),super.update(e)}}Or([Ze({type:Boolean,reflect:!0})],aa.prototype,"visible",void 0),Or([Ze({type:Boolean,reflect:!0})],aa.prototype,"inward",void 0);const la=Symbol("handledByFocusRing"),ca=Ie`:host{animation-delay:0s,calc(var(--md-focus-ring-duration, 600ms)*.25);animation-duration:calc(var(--md-focus-ring-duration, 600ms)*.25),calc(var(--md-focus-ring-duration, 600ms)*.75);animation-timing-function:cubic-bezier(0.2, 0, 0, 1);box-sizing:border-box;color:var(--md-focus-ring-color, var(--md-sys-color-secondary, #625b71));display:none;pointer-events:none;position:absolute}:host([visible]){display:flex}:host(:not([inward])){animation-name:outward-grow,outward-shrink;border-end-end-radius:calc(var(--md-focus-ring-shape-end-end, var(--md-focus-ring-shape, var(--md-sys-shape-corner-full, 9999px))) + var(--md-focus-ring-outward-offset, 2px));border-end-start-radius:calc(var(--md-focus-ring-shape-end-start, var(--md-focus-ring-shape, var(--md-sys-shape-corner-full, 9999px))) + var(--md-focus-ring-outward-offset, 2px));border-start-end-radius:calc(var(--md-focus-ring-shape-start-end, var(--md-focus-ring-shape, var(--md-sys-shape-corner-full, 9999px))) + var(--md-focus-ring-outward-offset, 2px));border-start-start-radius:calc(var(--md-focus-ring-shape-start-start, var(--md-focus-ring-shape, var(--md-sys-shape-corner-full, 9999px))) + var(--md-focus-ring-outward-offset, 2px));inset:calc(-1*var(--md-focus-ring-outward-offset, 2px));outline:var(--md-focus-ring-width, 3px) solid currentColor}:host([inward]){animation-name:inward-grow,inward-shrink;border-end-end-radius:calc(var(--md-focus-ring-shape-end-end, var(--md-focus-ring-shape, var(--md-sys-shape-corner-full, 9999px))) - var(--md-focus-ring-inward-offset, 0px));border-end-start-radius:calc(var(--md-focus-ring-shape-end-start, var(--md-focus-ring-shape, var(--md-sys-shape-corner-full, 9999px))) - var(--md-focus-ring-inward-offset, 0px));border-start-end-radius:calc(var(--md-focus-ring-shape-start-end, var(--md-focus-ring-shape, var(--md-sys-shape-corner-full, 9999px))) - var(--md-focus-ring-inward-offset, 0px));border-start-start-radius:calc(var(--md-focus-ring-shape-start-start, var(--md-focus-ring-shape, var(--md-sys-shape-corner-full, 9999px))) - var(--md-focus-ring-inward-offset, 0px));border:var(--md-focus-ring-width, 3px) solid currentColor;inset:var(--md-focus-ring-inward-offset, 0px)}@keyframes outward-grow{from{outline-width:0}to{outline-width:var(--md-focus-ring-active-width, 8px)}}@keyframes outward-shrink{from{outline-width:var(--md-focus-ring-active-width, 8px)}}@keyframes inward-grow{from{border-width:0}to{border-width:var(--md-focus-ring-active-width, 8px)}}@keyframes inward-shrink{from{border-width:var(--md-focus-ring-active-width, 8px)}}@media(prefers-reduced-motion){:host{animation:none}}
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
 */let da=class extends aa{};da.styles=[ca],da=Or([Xe("md-focus-ring")],da);
/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const ha=U(class extends M{constructor(e){if(super(e),e.type!==L||"class"!==e.name||e.strings?.length>2)throw Error("`classMap()` can only be used in the `class` attribute and must be the only part in the attribute.")}render(e){return" "+Object.keys(e).filter(t=>e[t]).join(" ")+" "}update(e,[t]){if(void 0===this.st){this.st=new Set,void 0!==e.strings&&(this.nt=new Set(e.strings.join(" ").split(/\s/).filter(e=>""!==e)));for(const e in t)t[e]&&!this.nt?.has(e)&&this.st.add(e);return this.render(t)}const i=e.element.classList;for(const e of this.st)e in t||(i.remove(e),this.st.delete(e));for(const e in t){const r=!!t[e];r===this.st.has(e)||this.nt?.has(e)||(r?(i.add(e),this.st.add(e)):(i.remove(e),this.st.delete(e)))}return oe}}),ua="cubic-bezier(0.2, 0, 0, 1)",pa="cubic-bezier(.3,0,0,1)",fa="cubic-bezier(.3,0,.8,.15)";
/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */var ma;!function(e){e[e.INACTIVE=0]="INACTIVE",e[e.TOUCH_DELAY=1]="TOUCH_DELAY",e[e.HOLDING=2]="HOLDING",e[e.WAITING_FOR_CLICK=3]="WAITING_FOR_CLICK"}(ma||(ma={}));const ga=["click","contextmenu","pointercancel","pointerdown","pointerenter","pointerleave","pointerup"],va=window.matchMedia("(forced-colors: active)");class ya extends Ke{constructor(){super(...arguments),this.disabled=!1,this.hovered=!1,this.pressed=!1,this.rippleSize="",this.rippleScale="",this.initialSize=0,this.state=ma.INACTIVE,this.attachableController=new oa(this,this.onControlChange.bind(this))}get htmlFor(){return this.attachableController.htmlFor}set htmlFor(e){this.attachableController.htmlFor=e}get control(){return this.attachableController.control}set control(e){this.attachableController.control=e}attach(e){this.attachableController.attach(e)}detach(){this.attachableController.detach()}connectedCallback(){super.connectedCallback(),this.setAttribute("aria-hidden","true")}render(){const e={hovered:this.hovered,pressed:this.pressed};return ne`<div class="surface ${ha(e)}"></div>`}update(e){e.has("disabled")&&this.disabled&&(this.hovered=!1,this.pressed=!1),super.update(e)}handlePointerenter(e){this.shouldReactToEvent(e)&&(this.hovered=!0)}handlePointerleave(e){this.shouldReactToEvent(e)&&(this.hovered=!1,this.state!==ma.INACTIVE&&this.endPressAnimation())}handlePointerup(e){if(this.shouldReactToEvent(e)){if(this.state!==ma.HOLDING)return this.state===ma.TOUCH_DELAY?(this.state=ma.WAITING_FOR_CLICK,void this.startPressAnimation(this.rippleStartEvent)):void 0;this.state=ma.WAITING_FOR_CLICK}}async handlePointerdown(e){if(this.shouldReactToEvent(e)){if(this.rippleStartEvent=e,!this.isTouch(e))return this.state=ma.WAITING_FOR_CLICK,void this.startPressAnimation(e);this.state=ma.TOUCH_DELAY,await new Promise(e=>{setTimeout(e,150)}),this.state===ma.TOUCH_DELAY&&(this.state=ma.HOLDING,this.startPressAnimation(e))}}handleClick(){this.disabled||(this.state!==ma.WAITING_FOR_CLICK?this.state===ma.INACTIVE&&(this.startPressAnimation(),this.endPressAnimation()):this.endPressAnimation())}handlePointercancel(e){this.shouldReactToEvent(e)&&this.endPressAnimation()}handleContextmenu(){this.disabled||this.endPressAnimation()}determineRippleSize(){const{height:e,width:t}=this.getBoundingClientRect(),i=Math.max(e,t),r=Math.max(.35*i,75),n=this.currentCSSZoom??1,o=Math.floor(.2*i/n),s=Math.sqrt(t**2+e**2)+10;this.initialSize=o;const a=(s+r)/o;this.rippleScale=""+a/n,this.rippleSize=`${o}px`}getNormalizedPointerEventCoords(e){const{scrollX:t,scrollY:i}=window,{left:r,top:n}=this.getBoundingClientRect(),o=t+r,s=i+n,{pageX:a,pageY:l}=e,c=this.currentCSSZoom??1;return{x:(a-o)/c,y:(l-s)/c}}getTranslationCoordinates(e){const{height:t,width:i}=this.getBoundingClientRect(),r=this.currentCSSZoom??1,n={x:(i/r-this.initialSize)/2,y:(t/r-this.initialSize)/2};let o;return o=e instanceof PointerEvent?this.getNormalizedPointerEventCoords(e):{x:i/r/2,y:t/r/2},o={x:o.x-this.initialSize/2,y:o.y-this.initialSize/2},{startPoint:o,endPoint:n}}startPressAnimation(e){if(!this.mdRoot)return;this.pressed=!0,this.growAnimation?.cancel(),this.determineRippleSize();const{startPoint:t,endPoint:i}=this.getTranslationCoordinates(e),r=`${t.x}px, ${t.y}px`,n=`${i.x}px, ${i.y}px`;this.growAnimation=this.mdRoot.animate({top:[0,0],left:[0,0],height:[this.rippleSize,this.rippleSize],width:[this.rippleSize,this.rippleSize],transform:[`translate(${r}) scale(1)`,`translate(${n}) scale(${this.rippleScale})`]},{pseudoElement:"::after",duration:450,easing:ua,fill:"forwards"})}async endPressAnimation(){this.rippleStartEvent=void 0,this.state=ma.INACTIVE;const e=this.growAnimation;let t=1/0;"number"==typeof e?.currentTime?t=e.currentTime:e?.currentTime&&(t=e.currentTime.to("ms").value),t>=225?this.pressed=!1:(await new Promise(e=>{setTimeout(e,225-t)}),this.growAnimation===e&&(this.pressed=!1))}shouldReactToEvent(e){if(this.disabled||!e.isPrimary)return!1;if(this.rippleStartEvent&&this.rippleStartEvent.pointerId!==e.pointerId)return!1;if("pointerenter"===e.type||"pointerleave"===e.type)return!this.isTouch(e);const t=1===e.buttons;return this.isTouch(e)||t}isTouch({pointerType:e}){return"touch"===e}async handleEvent(e){if(!va?.matches)switch(e.type){case"click":this.handleClick();break;case"contextmenu":this.handleContextmenu();break;case"pointercancel":this.handlePointercancel(e);break;case"pointerdown":await this.handlePointerdown(e);break;case"pointerenter":this.handlePointerenter(e);break;case"pointerleave":this.handlePointerleave(e);break;case"pointerup":this.handlePointerup(e)}}onControlChange(e,t){for(const i of ga)e?.removeEventListener(i,this),t?.addEventListener(i,this)}}Or([Ze({type:Boolean,reflect:!0})],ya.prototype,"disabled",void 0),Or([Qe()],ya.prototype,"hovered",void 0),Or([Qe()],ya.prototype,"pressed",void 0),Or([tt(".surface")],ya.prototype,"mdRoot",void 0);
/**
 * @license
 * Copyright 2024 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */
const ba=Ie`:host{display:flex;margin:auto;pointer-events:none}:host([disabled]){display:none}@media(forced-colors: active){:host{display:none}}:host,.surface{border-radius:inherit;position:absolute;inset:0;overflow:hidden}.surface{-webkit-tap-highlight-color:rgba(0,0,0,0)}.surface::before,.surface::after{content:"";opacity:0;position:absolute}.surface::before{background-color:var(--md-ripple-hover-color, var(--md-sys-color-on-surface, #1d1b20));inset:0;transition:opacity 15ms linear,background-color 15ms linear}.surface::after{background:radial-gradient(closest-side, var(--md-ripple-pressed-color, var(--md-sys-color-on-surface, #1d1b20)) max(100% - 70px, 65%), transparent 100%);transform-origin:center center;transition:opacity 375ms linear}.hovered::before{background-color:var(--md-ripple-hover-color, var(--md-sys-color-on-surface, #1d1b20));opacity:var(--md-ripple-hover-opacity, 0.08)}.pressed::after{opacity:var(--md-ripple-pressed-opacity, 0.12);transition-duration:105ms}
`
/**
 * @license
 * Copyright 2022 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */;let _a=class extends ya{};_a.styles=[ba],_a=Or([Xe("md-ripple")],_a);
/**
 * @license
 * Copyright 2023 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */
const wa=["role","ariaAtomic","ariaAutoComplete","ariaBusy","ariaChecked","ariaColCount","ariaColIndex","ariaColSpan","ariaCurrent","ariaDisabled","ariaExpanded","ariaHasPopup","ariaHidden","ariaInvalid","ariaKeyShortcuts","ariaLabel","ariaLevel","ariaLive","ariaModal","ariaMultiLine","ariaMultiSelectable","ariaOrientation","ariaPlaceholder","ariaPosInSet","ariaPressed","ariaReadOnly","ariaRequired","ariaRoleDescription","ariaRowCount","ariaRowIndex","ariaRowSpan","ariaSelected","ariaSetSize","ariaSort","ariaValueMax","ariaValueMin","ariaValueNow","ariaValueText"],xa=wa.map(Sa);function Ea(e){return xa.includes(e)}function Sa(e){return e.replace("aria","aria-").replace(/Elements?/g,"").toLowerCase()}
/**
 * @license
 * Copyright 2023 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */const Ca=Symbol("privateIgnoreAttributeChangesFor");function Ta(e){var t;class i extends e{constructor(){super(...arguments),this[t]=new Set}attributeChangedCallback(e,t,i){if(!Ea(e))return void super.attributeChangedCallback(e,t,i);if(this[Ca].has(e))return;this[Ca].add(e),this.removeAttribute(e),this[Ca].delete(e);const r=Aa(e);null===i?delete this.dataset[r]:this.dataset[r]=i,this.requestUpdate(Aa(e),t)}getAttribute(e){return Ea(e)?super.getAttribute(ka(e)):super.getAttribute(e)}removeAttribute(e){super.removeAttribute(e),Ea(e)&&(super.removeAttribute(ka(e)),this.requestUpdate())}}return t=Ca,function(e){for(const t of wa){const i=Sa(t),r=ka(i),n=Aa(i);e.createProperty(t,{attribute:i,noAccessor:!0}),e.createProperty(Symbol(r),{attribute:r,noAccessor:!0}),Object.defineProperty(e.prototype,t,{configurable:!0,enumerable:!0,get(){return this.dataset[n]??null},set(e){const i=this.dataset[n]??null;e!==i&&(null===e?delete this.dataset[n]:this.dataset[n]=e,this.requestUpdate(t,i))}})}}(i),i}function ka(e){return`data-${e}`}function Aa(e){return e.replace(/-\w/,e=>e[1].toUpperCase())}
/**
 * @license
 * Copyright 2023 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */const Ia=Symbol("internals"),Oa=Symbol("privateInternals");function Ra(e){return class extends e{get[Ia](){return this[Oa]||(this[Oa]=this.attachInternals()),this[Oa]}}}
/**
 * @license
 * Copyright 2023 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */
/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */
function Pa(e){const t=new MouseEvent("click",{bubbles:!0});return e.dispatchEvent(t),t}function Na(e){return e.currentTarget===e.target&&(e.composedPath()[0]===e.target&&(!e.target.disabled&&!function(e){const t=Da;t&&(e.preventDefault(),e.stopImmediatePropagation());return async function(){Da=!0,await null,Da=!1}
/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */(),t}(e)))}let Da=!1;const $a=Ta(Ra(Ke));class La extends $a{get name(){return this.getAttribute("name")??""}set name(e){this.setAttribute("name",e)}get form(){return this[Ia].form}constructor(){super(),this.disabled=!1,this.softDisabled=!1,this.href="",this.download="",this.target="",this.trailingIcon=!1,this.hasIcon=!1,this.type="submit",this.value="",this.addEventListener("click",this.handleClick.bind(this))}focus(){this.buttonElement?.focus()}blur(){this.buttonElement?.blur()}render(){const e=this.disabled||this.softDisabled,t=this.href?this.renderLink():this.renderButton(),i=this.href?"link":"button";return ne`
      ${this.renderElevationOrOutline?.()}
      <div class="background"></div>
      <md-focus-ring part="focus-ring" for=${i}></md-focus-ring>
      <md-ripple
        part="ripple"
        for=${i}
        ?disabled="${e}"></md-ripple>
      ${t}
    `}renderButton(){const{ariaLabel:e,ariaHasPopup:t,ariaExpanded:i}=this;return ne`<button
      id="button"
      class="button"
      ?disabled=${this.disabled}
      aria-disabled=${this.softDisabled||se}
      aria-label="${e||se}"
      aria-haspopup="${t||se}"
      aria-expanded="${i||se}">
      ${this.renderContent()}
    </button>`}renderLink(){const{ariaLabel:e,ariaHasPopup:t,ariaExpanded:i}=this;return ne`<a
      id="link"
      class="button"
      aria-label="${e||se}"
      aria-haspopup="${t||se}"
      aria-expanded="${i||se}"
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
    `}handleClick(e){if(this.softDisabled||this.disabled&&this.href)return e.stopImmediatePropagation(),void e.preventDefault();Na(e)&&this.buttonElement&&(this.focus(),Pa(this.buttonElement))}handleSlotChange(){this.hasIcon=this.assignedIcons.length>0}}La.addInitializer(e=>{const t=e;t.addEventListener("click",async e=>{const{type:i,[Ia]:r}=t,{form:n}=r;n&&"button"!==i&&(await new Promise(e=>{setTimeout(e)}),e.defaultPrevented||("reset"!==i?(n.addEventListener("submit",e=>{Object.defineProperty(e,"submitter",{configurable:!0,enumerable:!0,get:()=>t})},{capture:!0,once:!0}),r.setFormValue(t.value),n.requestSubmit()):n.reset()))})}),La.formAssociated=!0,La.shadowRootOptions={mode:"open",delegatesFocus:!0},Or([Ze({type:Boolean,reflect:!0})],La.prototype,"disabled",void 0),Or([Ze({type:Boolean,attribute:"soft-disabled",reflect:!0})],La.prototype,"softDisabled",void 0),Or([Ze()],La.prototype,"href",void 0),Or([Ze()],La.prototype,"download",void 0),Or([Ze()],La.prototype,"target",void 0),Or([Ze({type:Boolean,attribute:"trailing-icon",reflect:!0})],La.prototype,"trailingIcon",void 0),Or([Ze({type:Boolean,attribute:"has-icon",reflect:!0})],La.prototype,"hasIcon",void 0),Or([Ze()],La.prototype,"type",void 0),Or([Ze({reflect:!0})],La.prototype,"value",void 0),Or([tt(".button")],La.prototype,"buttonElement",void 0),Or([rt({slot:"icon",flatten:!0})],La.prototype,"assignedIcons",void 0);
/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */
class Ua extends La{renderElevationOrOutline(){return ne`<md-elevation part="elevation"></md-elevation>`}}
/**
 * @license
 * Copyright 2024 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */const Ma=Ie`:host{--_container-color: var(--md-filled-button-container-color, var(--md-sys-color-primary, #6750a4));--_container-elevation: var(--md-filled-button-container-elevation, 0);--_container-height: var(--md-filled-button-container-height, 40px);--_container-shadow-color: var(--md-filled-button-container-shadow-color, var(--md-sys-color-shadow, #000));--_disabled-container-color: var(--md-filled-button-disabled-container-color, var(--md-sys-color-on-surface, #1d1b20));--_disabled-container-elevation: var(--md-filled-button-disabled-container-elevation, 0);--_disabled-container-opacity: var(--md-filled-button-disabled-container-opacity, 0.12);--_disabled-label-text-color: var(--md-filled-button-disabled-label-text-color, var(--md-sys-color-on-surface, #1d1b20));--_disabled-label-text-opacity: var(--md-filled-button-disabled-label-text-opacity, 0.38);--_focus-container-elevation: var(--md-filled-button-focus-container-elevation, 0);--_focus-label-text-color: var(--md-filled-button-focus-label-text-color, var(--md-sys-color-on-primary, #fff));--_hover-container-elevation: var(--md-filled-button-hover-container-elevation, 1);--_hover-label-text-color: var(--md-filled-button-hover-label-text-color, var(--md-sys-color-on-primary, #fff));--_hover-state-layer-color: var(--md-filled-button-hover-state-layer-color, var(--md-sys-color-on-primary, #fff));--_hover-state-layer-opacity: var(--md-filled-button-hover-state-layer-opacity, 0.08);--_label-text-color: var(--md-filled-button-label-text-color, var(--md-sys-color-on-primary, #fff));--_label-text-font: var(--md-filled-button-label-text-font, var(--md-sys-typescale-label-large-font, var(--md-ref-typeface-plain, Roboto)));--_label-text-line-height: var(--md-filled-button-label-text-line-height, var(--md-sys-typescale-label-large-line-height, 1.25rem));--_label-text-size: var(--md-filled-button-label-text-size, var(--md-sys-typescale-label-large-size, 0.875rem));--_label-text-weight: var(--md-filled-button-label-text-weight, var(--md-sys-typescale-label-large-weight, var(--md-ref-typeface-weight-medium, 500)));--_pressed-container-elevation: var(--md-filled-button-pressed-container-elevation, 0);--_pressed-label-text-color: var(--md-filled-button-pressed-label-text-color, var(--md-sys-color-on-primary, #fff));--_pressed-state-layer-color: var(--md-filled-button-pressed-state-layer-color, var(--md-sys-color-on-primary, #fff));--_pressed-state-layer-opacity: var(--md-filled-button-pressed-state-layer-opacity, 0.12);--_disabled-icon-color: var(--md-filled-button-disabled-icon-color, var(--md-sys-color-on-surface, #1d1b20));--_disabled-icon-opacity: var(--md-filled-button-disabled-icon-opacity, 0.38);--_focus-icon-color: var(--md-filled-button-focus-icon-color, var(--md-sys-color-on-primary, #fff));--_hover-icon-color: var(--md-filled-button-hover-icon-color, var(--md-sys-color-on-primary, #fff));--_icon-color: var(--md-filled-button-icon-color, var(--md-sys-color-on-primary, #fff));--_icon-size: var(--md-filled-button-icon-size, 18px);--_pressed-icon-color: var(--md-filled-button-pressed-icon-color, var(--md-sys-color-on-primary, #fff));--_container-shape-start-start: var(--md-filled-button-container-shape-start-start, var(--md-filled-button-container-shape, var(--md-sys-shape-corner-full, 9999px)));--_container-shape-start-end: var(--md-filled-button-container-shape-start-end, var(--md-filled-button-container-shape, var(--md-sys-shape-corner-full, 9999px)));--_container-shape-end-end: var(--md-filled-button-container-shape-end-end, var(--md-filled-button-container-shape, var(--md-sys-shape-corner-full, 9999px)));--_container-shape-end-start: var(--md-filled-button-container-shape-end-start, var(--md-filled-button-container-shape, var(--md-sys-shape-corner-full, 9999px)));--_leading-space: var(--md-filled-button-leading-space, 24px);--_trailing-space: var(--md-filled-button-trailing-space, 24px);--_with-leading-icon-leading-space: var(--md-filled-button-with-leading-icon-leading-space, 16px);--_with-leading-icon-trailing-space: var(--md-filled-button-with-leading-icon-trailing-space, 24px);--_with-trailing-icon-leading-space: var(--md-filled-button-with-trailing-icon-leading-space, 24px);--_with-trailing-icon-trailing-space: var(--md-filled-button-with-trailing-icon-trailing-space, 16px)}
`,Fa=Ie`md-elevation{transition-duration:280ms}:host(:is([disabled],[soft-disabled])) md-elevation{transition:none}md-elevation{--md-elevation-level: var(--_container-elevation);--md-elevation-shadow-color: var(--_container-shadow-color)}:host(:focus-within) md-elevation{--md-elevation-level: var(--_focus-container-elevation)}:host(:hover) md-elevation{--md-elevation-level: var(--_hover-container-elevation)}:host(:active) md-elevation{--md-elevation-level: var(--_pressed-container-elevation)}:host(:is([disabled],[soft-disabled])) md-elevation{--md-elevation-level: var(--_disabled-container-elevation)}
`,za=Ie`:host{border-start-start-radius:var(--_container-shape-start-start);border-start-end-radius:var(--_container-shape-start-end);border-end-start-radius:var(--_container-shape-end-start);border-end-end-radius:var(--_container-shape-end-end);box-sizing:border-box;cursor:pointer;display:inline-flex;gap:8px;min-height:var(--_container-height);outline:none;padding-block:calc((var(--_container-height) - max(var(--_label-text-line-height),var(--_icon-size)))/2);padding-inline-start:var(--_leading-space);padding-inline-end:var(--_trailing-space);place-content:center;place-items:center;position:relative;font-family:var(--_label-text-font);font-size:var(--_label-text-size);line-height:var(--_label-text-line-height);font-weight:var(--_label-text-weight);text-overflow:ellipsis;text-wrap:nowrap;user-select:none;-webkit-tap-highlight-color:rgba(0,0,0,0);vertical-align:top;--md-ripple-hover-color: var(--_hover-state-layer-color);--md-ripple-pressed-color: var(--_pressed-state-layer-color);--md-ripple-hover-opacity: var(--_hover-state-layer-opacity);--md-ripple-pressed-opacity: var(--_pressed-state-layer-opacity)}md-focus-ring{--md-focus-ring-shape-start-start: var(--_container-shape-start-start);--md-focus-ring-shape-start-end: var(--_container-shape-start-end);--md-focus-ring-shape-end-end: var(--_container-shape-end-end);--md-focus-ring-shape-end-start: var(--_container-shape-end-start)}:host(:is([disabled],[soft-disabled])){cursor:default;pointer-events:none}.button{border-radius:inherit;cursor:inherit;display:inline-flex;align-items:center;justify-content:center;border:none;outline:none;-webkit-appearance:none;vertical-align:middle;background:rgba(0,0,0,0);text-decoration:none;min-width:calc(64px - var(--_leading-space) - var(--_trailing-space));width:100%;z-index:0;height:100%;font:inherit;color:var(--_label-text-color);padding:0;gap:inherit;text-transform:inherit}.button::-moz-focus-inner{padding:0;border:0}:host(:hover) .button{color:var(--_hover-label-text-color)}:host(:focus-within) .button{color:var(--_focus-label-text-color)}:host(:active) .button{color:var(--_pressed-label-text-color)}.background{background:var(--_container-color);border-radius:inherit;inset:0;position:absolute}.label{overflow:hidden}:is(.button,.label,.label slot),.label ::slotted(*){text-overflow:inherit}:host(:is([disabled],[soft-disabled])) .label{color:var(--_disabled-label-text-color);opacity:var(--_disabled-label-text-opacity)}:host(:is([disabled],[soft-disabled])) .background{background:var(--_disabled-container-color);opacity:var(--_disabled-container-opacity)}@media(forced-colors: active){.background{border:1px solid CanvasText}:host(:is([disabled],[soft-disabled])){--_disabled-icon-color: GrayText;--_disabled-icon-opacity: 1;--_disabled-container-opacity: 1;--_disabled-label-text-color: GrayText;--_disabled-label-text-opacity: 1}}:host([has-icon]:not([trailing-icon])){padding-inline-start:var(--_with-leading-icon-leading-space);padding-inline-end:var(--_with-leading-icon-trailing-space)}:host([has-icon][trailing-icon]){padding-inline-start:var(--_with-trailing-icon-leading-space);padding-inline-end:var(--_with-trailing-icon-trailing-space)}::slotted([slot=icon]){display:inline-flex;position:relative;writing-mode:horizontal-tb;fill:currentColor;flex-shrink:0;color:var(--_icon-color);font-size:var(--_icon-size);inline-size:var(--_icon-size);block-size:var(--_icon-size)}:host(:hover) ::slotted([slot=icon]){color:var(--_hover-icon-color)}:host(:focus-within) ::slotted([slot=icon]){color:var(--_focus-icon-color)}:host(:active) ::slotted([slot=icon]){color:var(--_pressed-icon-color)}:host(:is([disabled],[soft-disabled])) ::slotted([slot=icon]){color:var(--_disabled-icon-color);opacity:var(--_disabled-icon-opacity)}.touch{position:absolute;top:50%;height:48px;left:0;right:0;transform:translateY(-50%)}:host([touch-target=wrapper]){margin:max(0px,(48px - var(--_container-height))/2) 0}:host([touch-target=none]) .touch{display:none}
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
 */let ja=class extends Ua{};
/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */
function Ba(e,t){!t.bubbles||e.shadowRoot&&!t.composed||t.stopPropagation();const i=Reflect.construct(t.constructor,[t.type,t]),r=e.dispatchEvent(i);return r||t.preventDefault(),r}
/**
 * @license
 * Copyright 2023 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */ja.styles=[za,Fa,Ma],ja=Or([Xe("md-filled-button")],ja);const Va=Symbol("createValidator"),Ha=Symbol("getValidityAnchor"),qa=Symbol("privateValidator"),Wa=Symbol("privateSyncValidity"),Ka=Symbol("privateCustomValidationMessage");function Ga(e){var t;class i extends e{constructor(){super(...arguments),this[t]=""}get validity(){return this[Wa](),this[Ia].validity}get validationMessage(){return this[Wa](),this[Ia].validationMessage}get willValidate(){return this[Wa](),this[Ia].willValidate}checkValidity(){return this[Wa](),this[Ia].checkValidity()}reportValidity(){return this[Wa](),this[Ia].reportValidity()}setCustomValidity(e){this[Ka]=e,this[Wa]()}requestUpdate(e,t,i){super.requestUpdate(e,t,i),this[Wa]()}firstUpdated(e){super.firstUpdated(e),this[Wa]()}[(t=Ka,Wa)](){this[qa]||(this[qa]=this[Va]());const{validity:e,validationMessage:t}=this[qa].getValidity(),i=!!this[Ka],r=this[Ka]||t;this[Ia].setValidity({...e,customError:i},r,this[Ha]()??void 0)}[Va](){throw new Error("Implement [createValidator]")}[Ha](){throw new Error("Implement [getValidityAnchor]")}}return i}
/**
 * @license
 * Copyright 2023 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */const Xa=Symbol("getFormValue"),Ja=Symbol("getFormState");function Ya(e){class t extends e{get form(){return this[Ia].form}get labels(){return this[Ia].labels}get name(){return this.getAttribute("name")??""}set name(e){this.setAttribute("name",e)}get disabled(){return this.hasAttribute("disabled")}set disabled(e){this.toggleAttribute("disabled",e)}attributeChangedCallback(e,t,i){if("name"===e||"disabled"===e){const i="disabled"===e?null!==t:t;return void this.requestUpdate(e,i)}super.attributeChangedCallback(e,t,i)}requestUpdate(e,t,i){super.requestUpdate(e,t,i),this[Ia].setFormValue(this[Xa](),this[Ja]())}[Xa](){throw new Error("Implement [getFormValue]")}[Ja](){return this[Xa]()}formDisabledCallback(e){this.disabled=e}}return t.formAssociated=!0,Or([Ze({noAccessor:!0})],t.prototype,"name",null),Or([Ze({type:Boolean,noAccessor:!0})],t.prototype,"disabled",null),t}
/**
 * @license
 * Copyright 2023 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */class Za{constructor(e){this.getCurrentState=e,this.currentValidity={validity:{},validationMessage:""}}getValidity(){const e=this.getCurrentState();if(!(!this.prevState||!this.equals(this.prevState,e)))return this.currentValidity;const{validity:t,validationMessage:i}=this.computeValidity(e);return this.prevState=this.copy(e),this.currentValidity={validationMessage:i,validity:{badInput:t.badInput,customError:t.customError,patternMismatch:t.patternMismatch,rangeOverflow:t.rangeOverflow,rangeUnderflow:t.rangeUnderflow,stepMismatch:t.stepMismatch,tooLong:t.tooLong,tooShort:t.tooShort,typeMismatch:t.typeMismatch,valueMissing:t.valueMissing}},this.currentValidity}}
/**
 * @license
 * Copyright 2023 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */class Qa extends Za{computeValidity(e){return this.checkboxControl||(this.checkboxControl=document.createElement("input"),this.checkboxControl.type="checkbox"),this.checkboxControl.checked=e.checked,this.checkboxControl.required=e.required,{validity:this.checkboxControl.validity,validationMessage:this.checkboxControl.validationMessage}}equals(e,t){return e.checked===t.checked&&e.required===t.required}copy({checked:e,required:t}){return{checked:e,required:t}}}
/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */const el=Ta(Ga(Ya(Ra(Ke))));class tl extends el{constructor(){super(),this.checked=!1,this.indeterminate=!1,this.required=!1,this.value="on",this.prevChecked=!1,this.prevDisabled=!1,this.prevIndeterminate=!1,this.addEventListener("click",e=>{Na(e)&&this.input&&(this.focus(),Pa(this.input))})}update(e){(e.has("checked")||e.has("disabled")||e.has("indeterminate"))&&(this.prevChecked=e.get("checked")??this.checked,this.prevDisabled=e.get("disabled")??this.disabled,this.prevIndeterminate=e.get("indeterminate")??this.indeterminate),super.update(e)}render(){const e=!this.prevChecked&&!this.prevIndeterminate,t=this.prevChecked&&!this.prevIndeterminate,i=this.prevIndeterminate,r=this.checked&&!this.indeterminate,n=this.indeterminate,o=ha({disabled:this.disabled,selected:r||n,unselected:!r&&!n,checked:r,indeterminate:n,"prev-unselected":e,"prev-checked":t,"prev-indeterminate":i,"prev-disabled":this.prevDisabled}),{ariaLabel:s,ariaInvalid:a}=this;return ne`
      <div class="container ${o}">
        <input
          type="checkbox"
          id="input"
          aria-checked=${n?"mixed":se}
          aria-label=${s||se}
          aria-invalid=${a||se}
          ?disabled=${this.disabled}
          ?required=${this.required}
          .indeterminate=${this.indeterminate}
          .checked=${this.checked}
          @input=${this.handleInput}
          @change=${this.handleChange} />

        <div class="outline"></div>
        <div class="background"></div>
        <md-focus-ring part="focus-ring" for="input"></md-focus-ring>
        <md-ripple for="input" ?disabled=${this.disabled}></md-ripple>
        <svg class="icon" viewBox="0 0 18 18" aria-hidden="true">
          <rect class="mark short" />
          <rect class="mark long" />
        </svg>
      </div>
    `}handleInput(e){const t=e.target;this.checked=t.checked,this.indeterminate=t.indeterminate}handleChange(e){Ba(this,e)}[Xa](){return!this.checked||this.indeterminate?null:this.value}[Ja](){return String(this.checked)}formResetCallback(){this.checked=this.hasAttribute("checked")}formStateRestoreCallback(e){this.checked="true"===e}[Va](){return new Qa(()=>this)}[Ha](){return this.input}}tl.shadowRootOptions={...Ke.shadowRootOptions,delegatesFocus:!0},Or([Ze({type:Boolean})],tl.prototype,"checked",void 0),Or([Ze({type:Boolean})],tl.prototype,"indeterminate",void 0),Or([Ze({type:Boolean})],tl.prototype,"required",void 0),Or([Ze()],tl.prototype,"value",void 0),Or([Qe()],tl.prototype,"prevChecked",void 0),Or([Qe()],tl.prototype,"prevDisabled",void 0),Or([Qe()],tl.prototype,"prevIndeterminate",void 0),Or([tt("input")],tl.prototype,"input",void 0);
/**
 * @license
 * Copyright 2024 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */
const il=Ie`:host{border-start-start-radius:var(--md-checkbox-container-shape-start-start, var(--md-checkbox-container-shape, 2px));border-start-end-radius:var(--md-checkbox-container-shape-start-end, var(--md-checkbox-container-shape, 2px));border-end-end-radius:var(--md-checkbox-container-shape-end-end, var(--md-checkbox-container-shape, 2px));border-end-start-radius:var(--md-checkbox-container-shape-end-start, var(--md-checkbox-container-shape, 2px));display:inline-flex;height:var(--md-checkbox-container-size, 18px);position:relative;vertical-align:top;width:var(--md-checkbox-container-size, 18px);-webkit-tap-highlight-color:rgba(0,0,0,0);cursor:pointer}:host([disabled]){cursor:default}:host([touch-target=wrapper]){margin:max(0px,(48px - var(--md-checkbox-container-size, 18px))/2)}md-focus-ring{height:44px;inset:unset;width:44px}input{appearance:none;height:48px;margin:0;opacity:0;outline:none;position:absolute;width:48px;z-index:1;cursor:inherit}:host([touch-target=none]) input{height:100%;width:100%}.container{border-radius:inherit;display:flex;height:100%;place-content:center;place-items:center;position:relative;width:100%}.outline,.background,.icon{inset:0;position:absolute}.outline,.background{border-radius:inherit}.outline{border-color:var(--md-checkbox-outline-color, var(--md-sys-color-on-surface-variant, #49454f));border-style:solid;border-width:var(--md-checkbox-outline-width, 2px);box-sizing:border-box}.background{background-color:var(--md-checkbox-selected-container-color, var(--md-sys-color-primary, #6750a4))}.background,.icon{opacity:0;transition-duration:150ms,50ms;transition-property:transform,opacity;transition-timing-function:cubic-bezier(0.3, 0, 0.8, 0.15),linear;transform:scale(0.6)}:where(.selected) :is(.background,.icon){opacity:1;transition-duration:350ms,50ms;transition-timing-function:cubic-bezier(0.05, 0.7, 0.1, 1),linear;transform:scale(1)}md-ripple{border-radius:var(--md-checkbox-state-layer-shape, var(--md-sys-shape-corner-full, 9999px));height:var(--md-checkbox-state-layer-size, 40px);inset:unset;width:var(--md-checkbox-state-layer-size, 40px);--md-ripple-hover-color: var(--md-checkbox-hover-state-layer-color, var(--md-sys-color-on-surface, #1d1b20));--md-ripple-hover-opacity: var(--md-checkbox-hover-state-layer-opacity, 0.08);--md-ripple-pressed-color: var(--md-checkbox-pressed-state-layer-color, var(--md-sys-color-primary, #6750a4));--md-ripple-pressed-opacity: var(--md-checkbox-pressed-state-layer-opacity, 0.12)}.selected md-ripple{--md-ripple-hover-color: var(--md-checkbox-selected-hover-state-layer-color, var(--md-sys-color-primary, #6750a4));--md-ripple-hover-opacity: var(--md-checkbox-selected-hover-state-layer-opacity, 0.08);--md-ripple-pressed-color: var(--md-checkbox-selected-pressed-state-layer-color, var(--md-sys-color-on-surface, #1d1b20));--md-ripple-pressed-opacity: var(--md-checkbox-selected-pressed-state-layer-opacity, 0.12)}.icon{fill:var(--md-checkbox-selected-icon-color, var(--md-sys-color-on-primary, #fff));height:var(--md-checkbox-icon-size, 18px);width:var(--md-checkbox-icon-size, 18px)}.mark.short{height:2px;transition-property:transform,height;width:2px}.mark.long{height:2px;transition-property:transform,width;width:10px}.mark{animation-duration:150ms;animation-timing-function:cubic-bezier(0.3, 0, 0.8, 0.15);transition-duration:150ms;transition-timing-function:cubic-bezier(0.3, 0, 0.8, 0.15)}.selected .mark{animation-duration:350ms;animation-timing-function:cubic-bezier(0.05, 0.7, 0.1, 1);transition-duration:350ms;transition-timing-function:cubic-bezier(0.05, 0.7, 0.1, 1)}.checked .mark,.prev-checked.unselected .mark{transform:scaleY(-1) translate(7px, -14px) rotate(45deg)}.checked .mark.short,.prev-checked.unselected .mark.short{height:5.6568542495px}.checked .mark.long,.prev-checked.unselected .mark.long{width:11.313708499px}.indeterminate .mark,.prev-indeterminate.unselected .mark{transform:scaleY(-1) translate(4px, -10px) rotate(0deg)}.prev-unselected .mark{transition-property:none}.prev-unselected.checked .mark.long{animation-name:prev-unselected-to-checked}@keyframes prev-unselected-to-checked{from{width:0}}:where(:hover) .outline{border-color:var(--md-checkbox-hover-outline-color, var(--md-sys-color-on-surface, #1d1b20));border-width:var(--md-checkbox-hover-outline-width, 2px)}:where(:hover) .background{background:var(--md-checkbox-selected-hover-container-color, var(--md-sys-color-primary, #6750a4))}:where(:hover) .icon{fill:var(--md-checkbox-selected-hover-icon-color, var(--md-sys-color-on-primary, #fff))}:where(:focus-within) .outline{border-color:var(--md-checkbox-focus-outline-color, var(--md-sys-color-on-surface, #1d1b20));border-width:var(--md-checkbox-focus-outline-width, 2px)}:where(:focus-within) .background{background:var(--md-checkbox-selected-focus-container-color, var(--md-sys-color-primary, #6750a4))}:where(:focus-within) .icon{fill:var(--md-checkbox-selected-focus-icon-color, var(--md-sys-color-on-primary, #fff))}:where(:active) .outline{border-color:var(--md-checkbox-pressed-outline-color, var(--md-sys-color-on-surface, #1d1b20));border-width:var(--md-checkbox-pressed-outline-width, 2px)}:where(:active) .background{background:var(--md-checkbox-selected-pressed-container-color, var(--md-sys-color-primary, #6750a4))}:where(:active) .icon{fill:var(--md-checkbox-selected-pressed-icon-color, var(--md-sys-color-on-primary, #fff))}:where(.disabled,.prev-disabled) :is(.background,.icon,.mark){animation-duration:0s;transition-duration:0s}:where(.disabled) .outline{border-color:var(--md-checkbox-disabled-outline-color, var(--md-sys-color-on-surface, #1d1b20));border-width:var(--md-checkbox-disabled-outline-width, 2px);opacity:var(--md-checkbox-disabled-container-opacity, 0.38)}:where(.selected.disabled) .outline{visibility:hidden}:where(.selected.disabled) .background{background:var(--md-checkbox-selected-disabled-container-color, var(--md-sys-color-on-surface, #1d1b20));opacity:var(--md-checkbox-selected-disabled-container-opacity, 0.38)}:where(.disabled) .icon{fill:var(--md-checkbox-selected-disabled-icon-color, var(--md-sys-color-surface, #fef7ff))}@media(forced-colors: active){.background{background-color:CanvasText}.selected.disabled .background{background-color:GrayText;opacity:1}.outline{border-color:CanvasText}.disabled .outline{border-color:GrayText;opacity:1}.icon{fill:Canvas}}
`
/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */;let rl=class extends tl{};rl.styles=[il],rl=Or([Xe("md-checkbox")],rl);
/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */
class nl extends Ke{constructor(){super(...arguments),this.disabled=!1,this.error=!1,this.focused=!1,this.label="",this.noAsterisk=!1,this.populated=!1,this.required=!1,this.resizable=!1,this.supportingText="",this.errorText="",this.count=-1,this.max=-1,this.hasStart=!1,this.hasEnd=!1,this.isAnimating=!1,this.refreshErrorAlert=!1,this.disableTransitions=!1}get counterText(){const e=this.count??-1,t=this.max??-1;return e<0||t<=0?"":`${e} / ${t}`}get supportingOrErrorText(){return this.error&&this.errorText?this.errorText:this.supportingText}reannounceError(){this.refreshErrorAlert=!0}update(e){e.has("disabled")&&void 0!==e.get("disabled")&&(this.disableTransitions=!0),this.disabled&&this.focused&&(e.set("focused",!0),this.focused=!1),this.animateLabelIfNeeded({wasFocused:e.get("focused"),wasPopulated:e.get("populated")}),super.update(e)}render(){const e=this.renderLabel(!0),t=this.renderLabel(!1),i=this.renderOutline?.(e),r={disabled:this.disabled,"disable-transitions":this.disableTransitions,error:this.error&&!this.disabled,focused:this.focused,"with-start":this.hasStart,"with-end":this.hasEnd,populated:this.populated,resizable:this.resizable,required:this.required,"no-label":!this.label};return ne`
      <div class="field ${ha(r)}">
        <div class="container-overflow">
          ${this.renderBackground?.()}
          <slot name="container"></slot>
          ${this.renderStateLayer?.()} ${this.renderIndicator?.()} ${i}
          <div class="container">
            <div class="start">
              <slot name="start"></slot>
            </div>
            <div class="middle">
              <div class="label-wrapper">
                ${t} ${i?se:e}
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
    `}updated(e){(e.has("supportingText")||e.has("errorText")||e.has("count")||e.has("max"))&&this.updateSlottedAriaDescribedBy(),this.refreshErrorAlert&&requestAnimationFrame(()=>{this.refreshErrorAlert=!1}),this.disableTransitions&&requestAnimationFrame(()=>{this.disableTransitions=!1})}renderSupportingText(){const{supportingOrErrorText:e,counterText:t}=this;if(!e&&!t)return se;const i=ne`<span>${e}</span>`,r=t?ne`<span class="counter">${t}</span>`:se,n=this.error&&this.errorText&&!this.refreshErrorAlert;return ne`
      <div class="supporting-text" role=${n?"alert":se}>${i}${r}</div>
      <slot
        name="aria-describedby"
        @slotchange=${this.updateSlottedAriaDescribedBy}></slot>
    `}updateSlottedAriaDescribedBy(){for(const e of this.slottedAriaDescribedBy)we(ne`${this.supportingOrErrorText} ${this.counterText}`,e),e.setAttribute("hidden","")}renderLabel(e){if(!this.label)return se;let t;t=e?this.focused||this.populated||this.isAnimating:!this.focused&&!this.populated&&!this.isAnimating;const i={hidden:!t,floating:e,resting:!e},r=`${this.label}${this.required&&!this.noAsterisk?"*":""}`;return ne`
      <span class="label ${ha(i)}" aria-hidden=${!t}
        >${r}</span
      >
    `}animateLabelIfNeeded({wasFocused:e,wasPopulated:t}){if(!this.label)return;e??=this.focused,t??=this.populated;(e||t)!==(this.focused||this.populated)&&(this.isAnimating=!0,this.labelAnimation?.cancel(),this.labelAnimation=this.floatingLabelEl?.animate(this.getLabelKeyframes(),{duration:150,easing:ua}),this.labelAnimation?.addEventListener("finish",()=>{this.isAnimating=!1}))}getLabelKeyframes(){const{floatingLabelEl:e,restingLabelEl:t}=this;if(!e||!t)return[];const{x:i,y:r,height:n}=e.getBoundingClientRect(),{x:o,y:s,height:a}=t.getBoundingClientRect(),l=e.scrollWidth,c=t.scrollWidth,d=c/l,h=`translateX(${o-i}px) translateY(${s-r+Math.round((a-n*d)/2)}px) scale(${d})`,u="translateX(0) translateY(0) scale(1)",p=t.clientWidth,f=c>p?p/d+"px":"";return this.focused||this.populated?[{transform:h,width:f},{transform:u,width:f}]:[{transform:u,width:f},{transform:h,width:f}]}getSurfacePositionClientRect(){return this.containerEl.getBoundingClientRect()}}Or([Ze({type:Boolean})],nl.prototype,"disabled",void 0),Or([Ze({type:Boolean})],nl.prototype,"error",void 0),Or([Ze({type:Boolean})],nl.prototype,"focused",void 0),Or([Ze()],nl.prototype,"label",void 0),Or([Ze({type:Boolean,attribute:"no-asterisk"})],nl.prototype,"noAsterisk",void 0),Or([Ze({type:Boolean})],nl.prototype,"populated",void 0),Or([Ze({type:Boolean})],nl.prototype,"required",void 0),Or([Ze({type:Boolean})],nl.prototype,"resizable",void 0),Or([Ze({attribute:"supporting-text"})],nl.prototype,"supportingText",void 0),Or([Ze({attribute:"error-text"})],nl.prototype,"errorText",void 0),Or([Ze({type:Number})],nl.prototype,"count",void 0),Or([Ze({type:Number})],nl.prototype,"max",void 0),Or([Ze({type:Boolean,attribute:"has-start"})],nl.prototype,"hasStart",void 0),Or([Ze({type:Boolean,attribute:"has-end"})],nl.prototype,"hasEnd",void 0),Or([rt({slot:"aria-describedby"})],nl.prototype,"slottedAriaDescribedBy",void 0),Or([Qe()],nl.prototype,"isAnimating",void 0),Or([Qe()],nl.prototype,"refreshErrorAlert",void 0),Or([Qe()],nl.prototype,"disableTransitions",void 0),Or([tt(".label.floating")],nl.prototype,"floatingLabelEl",void 0),Or([tt(".label.resting")],nl.prototype,"restingLabelEl",void 0),Or([tt(".container")],nl.prototype,"containerEl",void 0);
/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */
class ol extends nl{renderOutline(e){return ne`
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
 */const sl=Ie`@layer styles{:host{--_bottom-space: var(--md-outlined-field-bottom-space, 16px);--_content-color: var(--md-outlined-field-content-color, var(--md-sys-color-on-surface, #1d1b20));--_content-font: var(--md-outlined-field-content-font, var(--md-sys-typescale-body-large-font, var(--md-ref-typeface-plain, Roboto)));--_content-line-height: var(--md-outlined-field-content-line-height, var(--md-sys-typescale-body-large-line-height, 1.5rem));--_content-size: var(--md-outlined-field-content-size, var(--md-sys-typescale-body-large-size, 1rem));--_content-space: var(--md-outlined-field-content-space, 16px);--_content-weight: var(--md-outlined-field-content-weight, var(--md-sys-typescale-body-large-weight, var(--md-ref-typeface-weight-regular, 400)));--_disabled-content-color: var(--md-outlined-field-disabled-content-color, var(--md-sys-color-on-surface, #1d1b20));--_disabled-content-opacity: var(--md-outlined-field-disabled-content-opacity, 0.38);--_disabled-label-text-color: var(--md-outlined-field-disabled-label-text-color, var(--md-sys-color-on-surface, #1d1b20));--_disabled-label-text-opacity: var(--md-outlined-field-disabled-label-text-opacity, 0.38);--_disabled-leading-content-color: var(--md-outlined-field-disabled-leading-content-color, var(--md-sys-color-on-surface, #1d1b20));--_disabled-leading-content-opacity: var(--md-outlined-field-disabled-leading-content-opacity, 0.38);--_disabled-outline-color: var(--md-outlined-field-disabled-outline-color, var(--md-sys-color-on-surface, #1d1b20));--_disabled-outline-opacity: var(--md-outlined-field-disabled-outline-opacity, 0.12);--_disabled-outline-width: var(--md-outlined-field-disabled-outline-width, 1px);--_disabled-supporting-text-color: var(--md-outlined-field-disabled-supporting-text-color, var(--md-sys-color-on-surface, #1d1b20));--_disabled-supporting-text-opacity: var(--md-outlined-field-disabled-supporting-text-opacity, 0.38);--_disabled-trailing-content-color: var(--md-outlined-field-disabled-trailing-content-color, var(--md-sys-color-on-surface, #1d1b20));--_disabled-trailing-content-opacity: var(--md-outlined-field-disabled-trailing-content-opacity, 0.38);--_error-content-color: var(--md-outlined-field-error-content-color, var(--md-sys-color-on-surface, #1d1b20));--_error-focus-content-color: var(--md-outlined-field-error-focus-content-color, var(--md-sys-color-on-surface, #1d1b20));--_error-focus-label-text-color: var(--md-outlined-field-error-focus-label-text-color, var(--md-sys-color-error, #b3261e));--_error-focus-leading-content-color: var(--md-outlined-field-error-focus-leading-content-color, var(--md-sys-color-on-surface-variant, #49454f));--_error-focus-outline-color: var(--md-outlined-field-error-focus-outline-color, var(--md-sys-color-error, #b3261e));--_error-focus-supporting-text-color: var(--md-outlined-field-error-focus-supporting-text-color, var(--md-sys-color-error, #b3261e));--_error-focus-trailing-content-color: var(--md-outlined-field-error-focus-trailing-content-color, var(--md-sys-color-error, #b3261e));--_error-hover-content-color: var(--md-outlined-field-error-hover-content-color, var(--md-sys-color-on-surface, #1d1b20));--_error-hover-label-text-color: var(--md-outlined-field-error-hover-label-text-color, var(--md-sys-color-on-error-container, #410e0b));--_error-hover-leading-content-color: var(--md-outlined-field-error-hover-leading-content-color, var(--md-sys-color-on-surface-variant, #49454f));--_error-hover-outline-color: var(--md-outlined-field-error-hover-outline-color, var(--md-sys-color-on-error-container, #410e0b));--_error-hover-supporting-text-color: var(--md-outlined-field-error-hover-supporting-text-color, var(--md-sys-color-error, #b3261e));--_error-hover-trailing-content-color: var(--md-outlined-field-error-hover-trailing-content-color, var(--md-sys-color-on-error-container, #410e0b));--_error-label-text-color: var(--md-outlined-field-error-label-text-color, var(--md-sys-color-error, #b3261e));--_error-leading-content-color: var(--md-outlined-field-error-leading-content-color, var(--md-sys-color-on-surface-variant, #49454f));--_error-outline-color: var(--md-outlined-field-error-outline-color, var(--md-sys-color-error, #b3261e));--_error-supporting-text-color: var(--md-outlined-field-error-supporting-text-color, var(--md-sys-color-error, #b3261e));--_error-trailing-content-color: var(--md-outlined-field-error-trailing-content-color, var(--md-sys-color-error, #b3261e));--_focus-content-color: var(--md-outlined-field-focus-content-color, var(--md-sys-color-on-surface, #1d1b20));--_focus-label-text-color: var(--md-outlined-field-focus-label-text-color, var(--md-sys-color-primary, #6750a4));--_focus-leading-content-color: var(--md-outlined-field-focus-leading-content-color, var(--md-sys-color-on-surface-variant, #49454f));--_focus-outline-color: var(--md-outlined-field-focus-outline-color, var(--md-sys-color-primary, #6750a4));--_focus-outline-width: var(--md-outlined-field-focus-outline-width, 3px);--_focus-supporting-text-color: var(--md-outlined-field-focus-supporting-text-color, var(--md-sys-color-on-surface-variant, #49454f));--_focus-trailing-content-color: var(--md-outlined-field-focus-trailing-content-color, var(--md-sys-color-on-surface-variant, #49454f));--_hover-content-color: var(--md-outlined-field-hover-content-color, var(--md-sys-color-on-surface, #1d1b20));--_hover-label-text-color: var(--md-outlined-field-hover-label-text-color, var(--md-sys-color-on-surface, #1d1b20));--_hover-leading-content-color: var(--md-outlined-field-hover-leading-content-color, var(--md-sys-color-on-surface-variant, #49454f));--_hover-outline-color: var(--md-outlined-field-hover-outline-color, var(--md-sys-color-on-surface, #1d1b20));--_hover-outline-width: var(--md-outlined-field-hover-outline-width, 1px);--_hover-supporting-text-color: var(--md-outlined-field-hover-supporting-text-color, var(--md-sys-color-on-surface-variant, #49454f));--_hover-trailing-content-color: var(--md-outlined-field-hover-trailing-content-color, var(--md-sys-color-on-surface-variant, #49454f));--_label-text-color: var(--md-outlined-field-label-text-color, var(--md-sys-color-on-surface-variant, #49454f));--_label-text-font: var(--md-outlined-field-label-text-font, var(--md-sys-typescale-body-large-font, var(--md-ref-typeface-plain, Roboto)));--_label-text-line-height: var(--md-outlined-field-label-text-line-height, var(--md-sys-typescale-body-large-line-height, 1.5rem));--_label-text-padding-bottom: var(--md-outlined-field-label-text-padding-bottom, 8px);--_label-text-populated-line-height: var(--md-outlined-field-label-text-populated-line-height, var(--md-sys-typescale-body-small-line-height, 1rem));--_label-text-populated-size: var(--md-outlined-field-label-text-populated-size, var(--md-sys-typescale-body-small-size, 0.75rem));--_label-text-size: var(--md-outlined-field-label-text-size, var(--md-sys-typescale-body-large-size, 1rem));--_label-text-weight: var(--md-outlined-field-label-text-weight, var(--md-sys-typescale-body-large-weight, var(--md-ref-typeface-weight-regular, 400)));--_leading-content-color: var(--md-outlined-field-leading-content-color, var(--md-sys-color-on-surface-variant, #49454f));--_leading-space: var(--md-outlined-field-leading-space, 16px);--_outline-color: var(--md-outlined-field-outline-color, var(--md-sys-color-outline, #79747e));--_outline-label-padding: var(--md-outlined-field-outline-label-padding, 4px);--_outline-width: var(--md-outlined-field-outline-width, 1px);--_supporting-text-color: var(--md-outlined-field-supporting-text-color, var(--md-sys-color-on-surface-variant, #49454f));--_supporting-text-font: var(--md-outlined-field-supporting-text-font, var(--md-sys-typescale-body-small-font, var(--md-ref-typeface-plain, Roboto)));--_supporting-text-leading-space: var(--md-outlined-field-supporting-text-leading-space, 16px);--_supporting-text-line-height: var(--md-outlined-field-supporting-text-line-height, var(--md-sys-typescale-body-small-line-height, 1rem));--_supporting-text-size: var(--md-outlined-field-supporting-text-size, var(--md-sys-typescale-body-small-size, 0.75rem));--_supporting-text-top-space: var(--md-outlined-field-supporting-text-top-space, 4px);--_supporting-text-trailing-space: var(--md-outlined-field-supporting-text-trailing-space, 16px);--_supporting-text-weight: var(--md-outlined-field-supporting-text-weight, var(--md-sys-typescale-body-small-weight, var(--md-ref-typeface-weight-regular, 400)));--_top-space: var(--md-outlined-field-top-space, 16px);--_trailing-content-color: var(--md-outlined-field-trailing-content-color, var(--md-sys-color-on-surface-variant, #49454f));--_trailing-space: var(--md-outlined-field-trailing-space, 16px);--_with-leading-content-leading-space: var(--md-outlined-field-with-leading-content-leading-space, 12px);--_with-trailing-content-trailing-space: var(--md-outlined-field-with-trailing-content-trailing-space, 12px);--_container-shape-start-start: var(--md-outlined-field-container-shape-start-start, var(--md-outlined-field-container-shape, var(--md-sys-shape-corner-extra-small, 4px)));--_container-shape-start-end: var(--md-outlined-field-container-shape-start-end, var(--md-outlined-field-container-shape, var(--md-sys-shape-corner-extra-small, 4px)));--_container-shape-end-end: var(--md-outlined-field-container-shape-end-end, var(--md-outlined-field-container-shape, var(--md-sys-shape-corner-extra-small, 4px)));--_container-shape-end-start: var(--md-outlined-field-container-shape-end-start, var(--md-outlined-field-container-shape, var(--md-sys-shape-corner-extra-small, 4px)))}.outline{border-color:var(--_outline-color);border-radius:inherit;display:flex;pointer-events:none;height:100%;position:absolute;width:100%;z-index:1}.outline-start::before,.outline-start::after,.outline-panel-inactive::before,.outline-panel-inactive::after,.outline-panel-active::before,.outline-panel-active::after,.outline-end::before,.outline-end::after{border:inherit;content:"";inset:0;position:absolute}.outline-start,.outline-end{border:inherit;border-radius:inherit;box-sizing:border-box;position:relative}.outline-start::before,.outline-start::after,.outline-end::before,.outline-end::after{border-bottom-style:solid;border-top-style:solid}.outline-start::after,.outline-end::after{opacity:0;transition:opacity 150ms cubic-bezier(0.2, 0, 0, 1)}.focused .outline-start::after,.focused .outline-end::after{opacity:1}.outline-start::before,.outline-start::after{border-inline-start-style:solid;border-inline-end-style:none;border-start-start-radius:inherit;border-start-end-radius:0;border-end-start-radius:inherit;border-end-end-radius:0;margin-inline-end:var(--_outline-label-padding)}.outline-end{flex-grow:1;margin-inline-start:calc(-1*var(--_outline-label-padding))}.outline-end::before,.outline-end::after{border-inline-start-style:none;border-inline-end-style:solid;border-start-start-radius:0;border-start-end-radius:inherit;border-end-start-radius:0;border-end-end-radius:inherit}.outline-notch{align-items:flex-start;border:inherit;display:flex;margin-inline-start:calc(-1*var(--_outline-label-padding));margin-inline-end:var(--_outline-label-padding);max-width:calc(100% - var(--_leading-space) - var(--_trailing-space));padding:0 var(--_outline-label-padding);position:relative}.no-label .outline-notch{display:none}.outline-panel-inactive,.outline-panel-active{border:inherit;border-bottom-style:solid;inset:0;position:absolute}.outline-panel-inactive::before,.outline-panel-inactive::after,.outline-panel-active::before,.outline-panel-active::after{border-top-style:solid;border-bottom:none;bottom:auto;transform:scaleX(1);transition:transform 150ms cubic-bezier(0.2, 0, 0, 1)}.outline-panel-inactive::before,.outline-panel-active::before{right:50%;transform-origin:top left}.outline-panel-inactive::after,.outline-panel-active::after{left:50%;transform-origin:top right}.populated .outline-panel-inactive::before,.populated .outline-panel-inactive::after,.populated .outline-panel-active::before,.populated .outline-panel-active::after,.focused .outline-panel-inactive::before,.focused .outline-panel-inactive::after,.focused .outline-panel-active::before,.focused .outline-panel-active::after{transform:scaleX(0)}.outline-panel-active{opacity:0;transition:opacity 150ms cubic-bezier(0.2, 0, 0, 1)}.focused .outline-panel-active{opacity:1}.outline-label{display:flex;max-width:100%;transform:translateY(calc(-100% + var(--_label-text-padding-bottom)))}.outline-start,.field:not(.with-start) .content ::slotted(*){padding-inline-start:max(var(--_leading-space),max(var(--_container-shape-start-start),var(--_container-shape-end-start)) + var(--_outline-label-padding))}.field:not(.with-start) .label-wrapper{margin-inline-start:max(var(--_leading-space),max(var(--_container-shape-start-start),var(--_container-shape-end-start)) + var(--_outline-label-padding))}.field:not(.with-end) .content ::slotted(*){padding-inline-end:max(var(--_trailing-space),max(var(--_container-shape-start-end),var(--_container-shape-end-end)))}.field:not(.with-end) .label-wrapper{margin-inline-end:max(var(--_trailing-space),max(var(--_container-shape-start-end),var(--_container-shape-end-end)))}.outline-start::before,.outline-end::before,.outline-panel-inactive,.outline-panel-inactive::before,.outline-panel-inactive::after{border-width:var(--_outline-width)}:hover .outline{border-color:var(--_hover-outline-color);color:var(--_hover-outline-color)}:hover .outline-start::before,:hover .outline-end::before,:hover .outline-panel-inactive,:hover .outline-panel-inactive::before,:hover .outline-panel-inactive::after{border-width:var(--_hover-outline-width)}.focused .outline{border-color:var(--_focus-outline-color);color:var(--_focus-outline-color)}.outline-start::after,.outline-end::after,.outline-panel-active,.outline-panel-active::before,.outline-panel-active::after{border-width:var(--_focus-outline-width)}.disabled .outline{border-color:var(--_disabled-outline-color);color:var(--_disabled-outline-color)}.disabled .outline-start,.disabled .outline-end,.disabled .outline-panel-inactive{opacity:var(--_disabled-outline-opacity)}.disabled .outline-start::before,.disabled .outline-end::before,.disabled .outline-panel-inactive,.disabled .outline-panel-inactive::before,.disabled .outline-panel-inactive::after{border-width:var(--_disabled-outline-width)}.error .outline{border-color:var(--_error-outline-color);color:var(--_error-outline-color)}.error:hover .outline{border-color:var(--_error-hover-outline-color);color:var(--_error-hover-outline-color)}.error.focused .outline{border-color:var(--_error-focus-outline-color);color:var(--_error-focus-outline-color)}.resizable .container{bottom:var(--_focus-outline-width);inset-inline-end:var(--_focus-outline-width);clip-path:inset(var(--_focus-outline-width) 0 0 var(--_focus-outline-width))}.resizable .container>*{top:var(--_focus-outline-width);inset-inline-start:var(--_focus-outline-width)}.resizable .container:dir(rtl){clip-path:inset(var(--_focus-outline-width) var(--_focus-outline-width) 0 0)}}@layer hcm{@media(forced-colors: active){.disabled .outline{border-color:GrayText;color:GrayText}.disabled :is(.outline-start,.outline-end,.outline-panel-inactive){opacity:1}}}
`,al=Ie`:host{display:inline-flex;resize:both}.field{display:flex;flex:1;flex-direction:column;writing-mode:horizontal-tb;max-width:100%}.container-overflow{border-start-start-radius:var(--_container-shape-start-start);border-start-end-radius:var(--_container-shape-start-end);border-end-end-radius:var(--_container-shape-end-end);border-end-start-radius:var(--_container-shape-end-start);display:flex;height:100%;position:relative}.container{align-items:center;border-radius:inherit;display:flex;flex:1;max-height:100%;min-height:100%;min-width:min-content;position:relative}.field,.container-overflow{resize:inherit}.resizable:not(.disabled) .container{resize:inherit;overflow:hidden}.disabled{pointer-events:none}slot[name=container]{border-radius:inherit}slot[name=container]::slotted(*){border-radius:inherit;inset:0;pointer-events:none;position:absolute}@layer styles{.start,.middle,.end{display:flex;box-sizing:border-box;height:100%;position:relative}.start{color:var(--_leading-content-color)}.end{color:var(--_trailing-content-color)}.start,.end{align-items:center;justify-content:center}.with-start .start{margin-inline:var(--_with-leading-content-leading-space) var(--_content-space)}.with-end .end{margin-inline:var(--_content-space) var(--_with-trailing-content-trailing-space)}.middle{align-items:stretch;align-self:baseline;flex:1}.content{color:var(--_content-color);display:flex;flex:1;opacity:0;transition:opacity 83ms cubic-bezier(0.2, 0, 0, 1)}.no-label .content,.focused .content,.populated .content{opacity:1;transition-delay:67ms}:is(.disabled,.disable-transitions) .content{transition:none}.content ::slotted(*){all:unset;color:currentColor;font-family:var(--_content-font);font-size:var(--_content-size);line-height:var(--_content-line-height);font-weight:var(--_content-weight);width:100%;overflow-wrap:revert;white-space:revert}.content ::slotted(:not(textarea)){padding-top:var(--_top-space);padding-bottom:var(--_bottom-space)}.content ::slotted(textarea){margin-top:var(--_top-space);margin-bottom:var(--_bottom-space)}:hover .content{color:var(--_hover-content-color)}:hover .start{color:var(--_hover-leading-content-color)}:hover .end{color:var(--_hover-trailing-content-color)}.focused .content{color:var(--_focus-content-color)}.focused .start{color:var(--_focus-leading-content-color)}.focused .end{color:var(--_focus-trailing-content-color)}.disabled .content{color:var(--_disabled-content-color)}.disabled.no-label .content,.disabled.focused .content,.disabled.populated .content{opacity:var(--_disabled-content-opacity)}.disabled .start{color:var(--_disabled-leading-content-color);opacity:var(--_disabled-leading-content-opacity)}.disabled .end{color:var(--_disabled-trailing-content-color);opacity:var(--_disabled-trailing-content-opacity)}.error .content{color:var(--_error-content-color)}.error .start{color:var(--_error-leading-content-color)}.error .end{color:var(--_error-trailing-content-color)}.error:hover .content{color:var(--_error-hover-content-color)}.error:hover .start{color:var(--_error-hover-leading-content-color)}.error:hover .end{color:var(--_error-hover-trailing-content-color)}.error.focused .content{color:var(--_error-focus-content-color)}.error.focused .start{color:var(--_error-focus-leading-content-color)}.error.focused .end{color:var(--_error-focus-trailing-content-color)}}@layer hcm{@media(forced-colors: active){.disabled :is(.start,.content,.end){color:GrayText;opacity:1}}}@layer styles{.label{box-sizing:border-box;color:var(--_label-text-color);overflow:hidden;max-width:100%;text-overflow:ellipsis;white-space:nowrap;z-index:1;font-family:var(--_label-text-font);font-size:var(--_label-text-size);line-height:var(--_label-text-line-height);font-weight:var(--_label-text-weight);width:min-content}.label-wrapper{inset:0;pointer-events:none;position:absolute}.label.resting{position:absolute;top:var(--_top-space)}.label.floating{font-size:var(--_label-text-populated-size);line-height:var(--_label-text-populated-line-height);transform-origin:top left}.label.hidden{opacity:0}.no-label .label{display:none}.label-wrapper{inset:0;position:absolute;text-align:initial}:hover .label{color:var(--_hover-label-text-color)}.focused .label{color:var(--_focus-label-text-color)}.disabled .label{color:var(--_disabled-label-text-color)}.disabled .label:not(.hidden){opacity:var(--_disabled-label-text-opacity)}.error .label{color:var(--_error-label-text-color)}.error:hover .label{color:var(--_error-hover-label-text-color)}.error.focused .label{color:var(--_error-focus-label-text-color)}}@layer hcm{@media(forced-colors: active){.disabled .label:not(.hidden){color:GrayText;opacity:1}}}@layer styles{.supporting-text{color:var(--_supporting-text-color);display:flex;font-family:var(--_supporting-text-font);font-size:var(--_supporting-text-size);line-height:var(--_supporting-text-line-height);font-weight:var(--_supporting-text-weight);gap:16px;justify-content:space-between;padding-inline-start:var(--_supporting-text-leading-space);padding-inline-end:var(--_supporting-text-trailing-space);padding-top:var(--_supporting-text-top-space)}.supporting-text :nth-child(2){flex-shrink:0}:hover .supporting-text{color:var(--_hover-supporting-text-color)}.focus .supporting-text{color:var(--_focus-supporting-text-color)}.disabled .supporting-text{color:var(--_disabled-supporting-text-color);opacity:var(--_disabled-supporting-text-opacity)}.error .supporting-text{color:var(--_error-supporting-text-color)}.error:hover .supporting-text{color:var(--_error-hover-supporting-text-color)}.error.focus .supporting-text{color:var(--_error-focus-supporting-text-color)}}@layer hcm{@media(forced-colors: active){.disabled .supporting-text{color:GrayText;opacity:1}}}
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
 */let ll=class extends ol{};ll.styles=[al,sl],ll=Or([Xe("md-outlined-field")],ll);
/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const cl=Symbol.for(""),dl=e=>{if(e?.r===cl)return e?._$litStatic$},hl=(e,...t)=>({_$litStatic$:t.reduce((t,i,r)=>t+(e=>{if(void 0!==e._$litStatic$)return e._$litStatic$;throw Error(`Value passed to 'literal' function must be a 'literal' result: ${e}. Use 'unsafeStatic' to pass non-literal values, but\n            take care to ensure page security.`)})(i)+e[r+1],e[0]),r:cl}),ul=new Map,pl=(e=>(t,...i)=>{const r=i.length;let n,o;const s=[],a=[];let l,c=0,d=!1;for(;c<r;){for(l=t[c];c<r&&void 0!==(o=i[c],n=dl(o));)l+=n+t[++c],d=!0;c!==r&&a.push(o),s.push(l),c++}if(c===r&&s.push(t[r]),d){const e=s.join("$$lit$$");void 0===(t=ul.get(e))&&(s.raw=s,ul.set(e,t=s)),i=a}return e(t,...i)})(ne),fl="important",ml=" !"+fl,gl=U(class extends M{constructor(e){if(super(e),e.type!==L||"style"!==e.name||e.strings?.length>2)throw Error("The `styleMap` directive must be used in the `style` attribute and must be the only part in the attribute.")}render(e){return Object.keys(e).reduce((t,i)=>{const r=e[i];return null==r?t:t+`${i=i.includes("-")?i:i.replace(/(?:^(webkit|moz|ms|o)|)(?=[A-Z])/g,"-$&").toLowerCase()}:${r};`},"")}update(e,[t]){const{style:i}=e.element;if(void 0===this.ft)return this.ft=new Set(Object.keys(t)),this.render(t);for(const e of this.ft)null==t[e]&&(this.ft.delete(e),e.includes("-")?i.removeProperty(e):i[e]=null);for(const e in t){const r=t[e];if(null!=r){this.ft.add(e);const t="string"==typeof r&&r.endsWith(ml);e.includes("-")||t?i.setProperty(e,t?r.slice(0,-11):r,t?fl:""):i[e]=r}}return oe}});
/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
/**
 * @license
 * Copyright 2023 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */
function vl(e,t=Sl){const i=_l(e,t);return i&&(i.tabIndex=0,i.focus()),i}function yl(e,t=Sl){const i=wl(e,t);return i&&(i.tabIndex=0,i.focus()),i}function bl(e,t=Sl){for(let i=0;i<e.length;i++){const r=e[i];if(0===r.tabIndex&&t(r))return{item:r,index:i}}return null}function _l(e,t=Sl){for(const i of e)if(t(i))return i;return null}function wl(e,t=Sl){for(let i=e.length-1;i>=0;i--){const r=e[i];if(t(r))return r}return null}function xl(e,t,i=Sl,r=!0){if(t){const n=function(e,t,i=Sl,r=!0){for(let n=1;n<e.length;n++){const o=(n+t)%e.length;if(o<t&&!r)return null;const s=e[o];if(i(s))return s}return e[t]?e[t]:null}(e,t.index,i,r);return n&&(n.tabIndex=0,n.focus()),n}return vl(e,i)}function El(e,t,i=Sl,r=!0){if(t){const n=function(e,t,i=Sl,r=!0){for(let n=1;n<e.length;n++){const o=(t-n+e.length)%e.length;if(o>t&&!r)return null;const s=e[o];if(i(s))return s}return e[t]?e[t]:null}(e,t.index,i,r);return n&&(n.tabIndex=0,n.focus()),n}return yl(e,i)}function Sl(e){return!e.disabled}
/**
 * @license
 * Copyright 2023 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */const Cl="ArrowDown",Tl="ArrowLeft",kl="ArrowUp",Al="ArrowRight",Il="Home",Ol="End";class Rl{constructor(e){this.handleKeydown=e=>{const t=e.key;if(e.defaultPrevented||!this.isNavigableKey(t))return;const i=this.items;if(!i.length)return;const r=bl(i,this.isActivatable);e.preventDefault();const n=this.isRtl();let o=null;switch(t){case Cl:case n?Tl:Al:o=xl(i,r,this.isActivatable,this.wrapNavigation());break;case kl:case n?Al:Tl:o=El(i,r,this.isActivatable,this.wrapNavigation());break;case Il:o=vl(i,this.isActivatable);break;case Ol:o=yl(i,this.isActivatable)}o&&r&&r.item!==o&&(r.item.tabIndex=-1)},this.onDeactivateItems=()=>{const e=this.items;for(const t of e)this.deactivateItem(t)},this.onRequestActivation=e=>{this.onDeactivateItems();const t=e.target;this.activateItem(t),t.focus()},this.onSlotchange=()=>{const e=this.items;let t=!1;for(const i of e){!(!i.disabled&&i.tabIndex>-1)||t?i.tabIndex=-1:(t=!0,i.tabIndex=0)}if(t)return;const i=_l(e,this.isActivatable);i&&(i.tabIndex=0)};const{isItem:t,getPossibleItems:i,isRtl:r,deactivateItem:n,activateItem:o,isNavigableKey:s,isActivatable:a,wrapNavigation:l}=e;this.isItem=t,this.getPossibleItems=i,this.isRtl=r,this.deactivateItem=n,this.activateItem=o,this.isNavigableKey=s,this.isActivatable=a,this.wrapNavigation=l??(()=>!0)}get items(){const e=this.getPossibleItems(),t=[];for(const i of e){if(this.isItem(i)){t.push(i);continue}const e=i.item;e&&this.isItem(e)&&t.push(e)}return t}activateNextItem(){const e=this.items,t=bl(e,this.isActivatable);return t&&(t.item.tabIndex=-1),xl(e,t,this.isActivatable,this.wrapNavigation())}activatePreviousItem(){const e=this.items,t=bl(e,this.isActivatable);return t&&(t.item.tabIndex=-1),El(e,t,this.isActivatable,this.wrapNavigation())}}
/**
 * @license
 * Copyright 2023 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */const Pl=function(e,t){return new CustomEvent("close-menu",{bubbles:!0,composed:!0,detail:{initiator:e,reason:t,itemPath:[e]}})},Nl={SPACE:"Space",ENTER:"Enter"},Dl="click-selection",$l="keydown",Ll={ESCAPE:"Escape",SPACE:Nl.SPACE,ENTER:Nl.ENTER};function Ul(e){return Object.values(Ll).some(t=>t===e)}function Ml(e,t){const i=new Event("md-contains",{bubbles:!0,composed:!0});let r=[];const n=e=>{r=e.composedPath()};t.addEventListener("md-contains",n),e.dispatchEvent(i),t.removeEventListener("md-contains",n);return r.length>0}const Fl="none",zl="list-root",jl="first-item",Bl="last-item",Vl="end-start",Hl="start-start";
/**
 * @license
 * Copyright 2023 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */class ql{constructor(e,t){this.host=e,this.getProperties=t,this.surfaceStylesInternal={display:"none"},this.lastValues={isOpen:!1},this.host.addController(this)}get surfaceStyles(){return this.surfaceStylesInternal}async position(){const{surfaceEl:e,anchorEl:t,anchorCorner:i,surfaceCorner:r,positioning:n,xOffset:o,yOffset:s,disableBlockFlip:a,disableInlineFlip:l,repositionStrategy:c}=this.getProperties(),d=i.toLowerCase().trim(),h=r.toLowerCase().trim();if(!e||!t)return;const u=window.innerWidth,p=window.innerHeight,f=document.createElement("div");f.style.opacity="0",f.style.position="fixed",f.style.display="block",f.style.inset="0",document.body.appendChild(f);const m=f.getBoundingClientRect();f.remove();const g=window.innerHeight-m.bottom,v=window.innerWidth-m.right;this.surfaceStylesInternal={display:"block",opacity:"0"},this.host.requestUpdate(),await this.host.updateComplete,e.popover&&e.isConnected&&e.showPopover();const y=e.getSurfacePositionClientRect?e.getSurfacePositionClientRect():e.getBoundingClientRect(),b=t.getSurfacePositionClientRect?t.getSurfacePositionClientRect():t.getBoundingClientRect(),[_,w]=h.split("-"),[x,E]=d.split("-"),S="ltr"===getComputedStyle(e).direction;let{blockInset:C,blockOutOfBoundsCorrection:T,surfaceBlockProperty:k}=this.calculateBlock({surfaceRect:y,anchorRect:b,anchorBlock:x,surfaceBlock:_,yOffset:s,positioning:n,windowInnerHeight:p,blockScrollbarHeight:g});if(T&&!a){const e="start"===_?"end":"start",t="start"===x?"end":"start",i=this.calculateBlock({surfaceRect:y,anchorRect:b,anchorBlock:t,surfaceBlock:e,yOffset:s,positioning:n,windowInnerHeight:p,blockScrollbarHeight:g});T>i.blockOutOfBoundsCorrection&&(C=i.blockInset,T=i.blockOutOfBoundsCorrection,k=i.surfaceBlockProperty)}let{inlineInset:A,inlineOutOfBoundsCorrection:I,surfaceInlineProperty:O}=this.calculateInline({surfaceRect:y,anchorRect:b,anchorInline:E,surfaceInline:w,xOffset:o,positioning:n,isLTR:S,windowInnerWidth:u,inlineScrollbarWidth:v});if(I&&!l){const e="start"===w?"end":"start",t="start"===E?"end":"start",i=this.calculateInline({surfaceRect:y,anchorRect:b,anchorInline:t,surfaceInline:e,xOffset:o,positioning:n,isLTR:S,windowInnerWidth:u,inlineScrollbarWidth:v});Math.abs(I)>Math.abs(i.inlineOutOfBoundsCorrection)&&(A=i.inlineInset,I=i.inlineOutOfBoundsCorrection,O=i.surfaceInlineProperty)}"move"===c&&(C-=T,A-=I),this.surfaceStylesInternal={display:"block",opacity:"1",[k]:`${C}px`,[O]:`${A}px`},"resize"===c&&(T&&(this.surfaceStylesInternal.height=y.height-T+"px"),I&&(this.surfaceStylesInternal.width=y.width-I+"px")),this.host.requestUpdate()}calculateBlock(e){const{surfaceRect:t,anchorRect:i,anchorBlock:r,surfaceBlock:n,yOffset:o,positioning:s,windowInnerHeight:a,blockScrollbarHeight:l}=e,c="fixed"===s||"document"===s?1:0,d="document"===s?1:0,h="start"===n?1:0,u="end"===n?1:0,p=(r!==n?1:0)*i.height+o,f=h*i.top+u*(a-i.bottom-l);return{blockInset:c*f+d*(h*window.scrollY-u*window.scrollY)+p,blockOutOfBoundsCorrection:Math.abs(Math.min(0,a-f-p-t.height)),surfaceBlockProperty:"start"===n?"inset-block-start":"inset-block-end"}}calculateInline(e){const{isLTR:t,surfaceInline:i,anchorInline:r,anchorRect:n,surfaceRect:o,xOffset:s,positioning:a,windowInnerWidth:l,inlineScrollbarWidth:c}=e,d="fixed"===a||"document"===a?1:0,h="document"===a?1:0,u=t?1:0,p=t?0:1,f="start"===i?1:0,m="end"===i?1:0,g=(r!==i?1:0)*n.width+s,v=u*(f*n.left+m*(l-n.right-c))+p*(f*(l-n.right-c)+m*n.left);let y="start"===i?"inset-inline-start":"inset-inline-end";return"document"!==a&&"fixed"!==a||(y="start"===i&&t||"end"===i&&!t?"left":"right"),{inlineInset:d*v+g+h*(u*(f*window.scrollX-m*window.scrollX)+p*(m*window.scrollX-f*window.scrollX)),inlineOutOfBoundsCorrection:Math.abs(Math.min(0,l-v-g-o.width)),surfaceInlineProperty:y}}hostUpdate(){this.onUpdate()}hostUpdated(){this.onUpdate()}async onUpdate(){const e=this.getProperties();let t=!1;for(const[i,r]of Object.entries(e))if(t=t||r!==this.lastValues[i],t)break;const i=this.lastValues.isOpen!==e.isOpen,r=!!e.anchorEl,n=!!e.surfaceEl;t&&r&&n&&(this.lastValues.isOpen=e.isOpen,e.isOpen?(this.lastValues=e,await this.position(),e.onOpen()):i&&(await e.beforeClose(),this.close(),e.onClose()))}close(){this.surfaceStylesInternal={display:"none"},this.host.requestUpdate();const e=this.getProperties().surfaceEl;e?.popover&&e?.isConnected&&e.hidePopover()}}
/**
 * @license
 * Copyright 2023 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */const Wl=0,Kl=1,Gl=2;class Xl{constructor(e){this.getProperties=e,this.typeaheadRecords=[],this.typaheadBuffer="",this.cancelTypeaheadTimeout=0,this.isTypingAhead=!1,this.lastActiveRecord=null,this.onKeydown=e=>{this.isTypingAhead?this.typeahead(e):this.beginTypeahead(e)},this.endTypeahead=()=>{this.isTypingAhead=!1,this.typaheadBuffer="",this.typeaheadRecords=[]}}get items(){return this.getProperties().getItems()}get active(){return this.getProperties().active}beginTypeahead(e){this.active&&("Space"===e.code||"Enter"===e.code||e.code.startsWith("Arrow")||"Escape"===e.code||(this.isTypingAhead=!0,this.typeaheadRecords=this.items.map((e,t)=>[t,e,e.typeaheadText.trim().toLowerCase()]),this.lastActiveRecord=this.typeaheadRecords.find(e=>0===e[Kl].tabIndex)??null,this.lastActiveRecord&&(this.lastActiveRecord[Kl].tabIndex=-1),this.typeahead(e)))}typeahead(e){if(e.defaultPrevented)return;if(clearTimeout(this.cancelTypeaheadTimeout),"Enter"===e.code||e.code.startsWith("Arrow")||"Escape"===e.code)return this.endTypeahead(),void(this.lastActiveRecord&&(this.lastActiveRecord[Kl].tabIndex=-1));"Space"===e.code&&e.preventDefault(),this.cancelTypeaheadTimeout=setTimeout(this.endTypeahead,this.getProperties().typeaheadBufferTime),this.typaheadBuffer+=e.key.toLowerCase();const t=this.lastActiveRecord?this.lastActiveRecord[Wl]:-1,i=this.typeaheadRecords.length,r=e=>(e[Wl]+i-t)%i,n=this.typeaheadRecords.filter(e=>!e[Kl].disabled&&e[Gl].startsWith(this.typaheadBuffer)).sort((e,t)=>r(e)-r(t));if(0===n.length)return clearTimeout(this.cancelTypeaheadTimeout),this.lastActiveRecord&&(this.lastActiveRecord[Kl].tabIndex=-1),void this.endTypeahead();const o=1===this.typaheadBuffer.length;let s;s=this.lastActiveRecord===n[0]&&o?n[1]??n[0]:n[0],this.lastActiveRecord&&(this.lastActiveRecord[Kl].tabIndex=-1),this.lastActiveRecord=s,s[Kl].tabIndex=0,s[Kl].focus()}}
/**
 * @license
 * Copyright 2023 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */const Jl=new Set([Cl,kl,Il,Ol]),Yl=new Set([Tl,Al,...Jl]);class Zl extends Ke{get openDirection(){return"start"===this.menuCorner.split("-")[0]?"DOWN":"UP"}get anchorElement(){return this.anchor?this.getRootNode().querySelector(`#${this.anchor}`):this.currentAnchorElement}set anchorElement(e){this.currentAnchorElement=e,this.requestUpdate("anchorElement")}constructor(){super(),this.anchor="",this.positioning="absolute",this.quick=!1,this.hasOverflow=!1,this.open=!1,this.xOffset=0,this.yOffset=0,this.noHorizontalFlip=!1,this.noVerticalFlip=!1,this.typeaheadDelay=200,this.anchorCorner=Vl,this.menuCorner=Hl,this.stayOpenOnOutsideClick=!1,this.stayOpenOnFocusout=!1,this.skipRestoreFocus=!1,this.defaultFocus=jl,this.noNavigationWrap=!1,this.typeaheadActive=!0,this.isSubmenu=!1,this.pointerPath=[],this.isRepositioning=!1,this.openCloseAnimationSignal=function(){let e=null;return{start:()=>(e?.abort(),e=new AbortController,e.signal),finish(){e=null}}}
/**
 * @license
 * Copyright 2022 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */(),this.listController=new Rl({isItem:e=>e.hasAttribute("md-menu-item"),getPossibleItems:()=>this.slotItems,isRtl:()=>"rtl"===getComputedStyle(this).direction,deactivateItem:e=>{e.selected=!1,e.tabIndex=-1},activateItem:e=>{e.selected=!0,e.tabIndex=0},isNavigableKey:e=>{if(!this.isSubmenu)return Yl.has(e);return e===("rtl"===getComputedStyle(this).direction?Tl:Al)||Jl.has(e)},wrapNavigation:()=>!this.noNavigationWrap}),this.lastFocusedElement=null,this.typeaheadController=new Xl(()=>({getItems:()=>this.items,typeaheadBufferTime:this.typeaheadDelay,active:this.typeaheadActive})),this.currentAnchorElement=null,this.internals=this.attachInternals(),this.menuPositionController=new ql(this,()=>({anchorCorner:this.anchorCorner,surfaceCorner:this.menuCorner,surfaceEl:this.surfaceEl,anchorEl:this.anchorElement,positioning:"popover"===this.positioning?"document":this.positioning,isOpen:this.open,xOffset:this.xOffset,yOffset:this.yOffset,disableBlockFlip:this.noVerticalFlip,disableInlineFlip:this.noHorizontalFlip,onOpen:this.onOpened,beforeClose:this.beforeClose,onClose:this.onClosed,repositionStrategy:this.hasOverflow&&"popover"!==this.positioning?"move":"resize"})),this.onWindowResize=()=>{this.isRepositioning||"document"!==this.positioning&&"fixed"!==this.positioning&&"popover"!==this.positioning||(this.isRepositioning=!0,this.reposition(),this.isRepositioning=!1)},this.handleFocusout=async e=>{const t=this.anchorElement;if(this.stayOpenOnFocusout||!this.open||this.pointerPath.includes(t))return;if(e.relatedTarget){if(Ml(e.relatedTarget,this)||0!==this.pointerPath.length&&Ml(e.relatedTarget,t))return}else if(this.pointerPath.includes(this))return;const i=this.skipRestoreFocus;this.skipRestoreFocus=!0,this.close(),await this.updateComplete,this.skipRestoreFocus=i},this.onOpened=async()=>{this.lastFocusedElement=function(e=document){let t=e.activeElement;for(;t&&t?.shadowRoot?.activeElement;)t=t.shadowRoot.activeElement;return t}();const e=this.items,t=bl(e);t&&this.defaultFocus!==Fl&&(t.item.tabIndex=-1);let i=!this.quick;switch(this.quick?this.dispatchEvent(new Event("opening")):i=!!await this.animateOpen(),this.defaultFocus){case jl:const t=_l(e);t&&(t.tabIndex=0,t.focus(),await t.updateComplete);break;case Bl:const i=wl(e);i&&(i.tabIndex=0,i.focus(),await i.updateComplete);break;case zl:this.focus()}i||this.dispatchEvent(new Event("opened"))},this.beforeClose=async()=>{this.open=!1,this.skipRestoreFocus||this.lastFocusedElement?.focus?.(),this.quick||await this.animateClose()},this.onClosed=()=>{this.quick&&(this.dispatchEvent(new Event("closing")),this.dispatchEvent(new Event("closed")))},this.onWindowPointerdown=e=>{this.pointerPath=e.composedPath()},this.onDocumentClick=e=>{if(!this.open)return;const t=e.composedPath();this.stayOpenOnOutsideClick||t.includes(this)||t.includes(this.anchorElement)||(this.open=!1)},this.internals.role="menu",this.addEventListener("keydown",this.handleKeydown),this.addEventListener("keydown",this.captureKeydown,{capture:!0}),this.addEventListener("focusout",this.handleFocusout)}get items(){return this.listController.items}willUpdate(e){e.has("open")&&(this.open?this.removeAttribute("aria-hidden"):this.setAttribute("aria-hidden","true"))}update(e){e.has("open")&&(this.open?this.setUpGlobalEventListeners():this.cleanUpGlobalEventListeners()),e.has("positioning")&&"popover"===this.positioning&&!this.showPopover&&(this.positioning="fixed"),super.update(e)}connectedCallback(){super.connectedCallback(),this.open&&this.setUpGlobalEventListeners()}disconnectedCallback(){super.disconnectedCallback(),this.cleanUpGlobalEventListeners()}getBoundingClientRect(){return this.surfaceEl?this.surfaceEl.getBoundingClientRect():super.getBoundingClientRect()}getClientRects(){return this.surfaceEl?this.surfaceEl.getClientRects():super.getClientRects()}render(){return this.renderSurface()}renderSurface(){return ne`
      <div
        class="menu ${ha(this.getSurfaceClasses())}"
        style=${gl(this.menuPositionController.surfaceStyles)}
        popover=${"popover"===this.positioning?"manual":se}>
        ${this.renderElevation()}
        <div class="items">
          <div class="item-padding"> ${this.renderMenuItems()} </div>
        </div>
      </div>
    `}renderMenuItems(){return ne`<slot
      @close-menu=${this.onCloseMenu}
      @deactivate-items=${this.onDeactivateItems}
      @request-activation=${this.onRequestActivation}
      @deactivate-typeahead=${this.handleDeactivateTypeahead}
      @activate-typeahead=${this.handleActivateTypeahead}
      @stay-open-on-focusout=${this.handleStayOpenOnFocusout}
      @close-on-focusout=${this.handleCloseOnFocusout}
      @slotchange=${this.listController.onSlotchange}></slot>`}renderElevation(){return ne`<md-elevation part="elevation"></md-elevation>`}getSurfaceClasses(){return{open:this.open,fixed:"fixed"===this.positioning,"has-overflow":this.hasOverflow}}captureKeydown(e){e.target===this&&!e.defaultPrevented&&Ul(e.code)&&(e.preventDefault(),this.close()),this.typeaheadController.onKeydown(e)}async animateOpen(){const e=this.surfaceEl,t=this.slotEl;if(!e||!t)return!0;const i=this.openDirection;this.dispatchEvent(new Event("opening")),e.classList.toggle("animating",!0);const r=this.openCloseAnimationSignal.start(),n=e.offsetHeight,o="UP"===i,s=this.items,a=250/s.length,l=e.animate([{height:"0px"},{height:`${n}px`}],{duration:500,easing:pa}),c=t.animate([{transform:o?`translateY(-${n}px)`:""},{transform:""}],{duration:500,easing:pa}),d=e.animate([{opacity:0},{opacity:1}],50),h=[];for(let e=0;e<s.length;e++){const t=s[o?s.length-1-e:e],i=t.animate([{opacity:0},{opacity:1}],{duration:250,delay:a*e});t.classList.toggle("md-menu-hidden",!0),i.addEventListener("finish",()=>{t.classList.toggle("md-menu-hidden",!1)}),h.push([t,i])}let u=e=>{};const p=new Promise(e=>{u=e});return r.addEventListener("abort",()=>{l.cancel(),c.cancel(),d.cancel(),h.forEach(([e,t])=>{e.classList.toggle("md-menu-hidden",!1),t.cancel()}),u(!0)}),l.addEventListener("finish",()=>{e.classList.toggle("animating",!1),this.openCloseAnimationSignal.finish(),u(!1)}),await p}animateClose(){let e;const t=new Promise(t=>{e=t}),i=this.surfaceEl,r=this.slotEl;if(!i||!r)return e(!1),t;const n="UP"===this.openDirection;this.dispatchEvent(new Event("closing")),i.classList.toggle("animating",!0);const o=this.openCloseAnimationSignal.start(),s=i.offsetHeight,a=this.items,l=150,c=50/a.length,d=i.animate([{height:`${s}px`},{height:.35*s+"px"}],{duration:l,easing:fa}),h=r.animate([{transform:""},{transform:n?`translateY(-${.65*s}px)`:""}],{duration:l,easing:fa}),u=i.animate([{opacity:1},{opacity:0}],{duration:50,delay:100}),p=[];for(let e=0;e<a.length;e++){const t=a[n?e:a.length-1-e],i=t.animate([{opacity:1},{opacity:0}],{duration:50,delay:50+c*e});i.addEventListener("finish",()=>{t.classList.toggle("md-menu-hidden",!0)}),p.push([t,i])}return o.addEventListener("abort",()=>{d.cancel(),h.cancel(),u.cancel(),p.forEach(([e,t])=>{t.cancel(),e.classList.toggle("md-menu-hidden",!1)}),e(!1)}),d.addEventListener("finish",()=>{i.classList.toggle("animating",!1),p.forEach(([e])=>{e.classList.toggle("md-menu-hidden",!1)}),this.openCloseAnimationSignal.finish(),this.dispatchEvent(new Event("closed")),e(!0)}),t}handleKeydown(e){this.pointerPath=[],this.listController.handleKeydown(e)}setUpGlobalEventListeners(){document.addEventListener("click",this.onDocumentClick,{capture:!0}),window.addEventListener("pointerdown",this.onWindowPointerdown),document.addEventListener("resize",this.onWindowResize,{passive:!0}),window.addEventListener("resize",this.onWindowResize,{passive:!0})}cleanUpGlobalEventListeners(){document.removeEventListener("click",this.onDocumentClick,{capture:!0}),window.removeEventListener("pointerdown",this.onWindowPointerdown),document.removeEventListener("resize",this.onWindowResize),window.removeEventListener("resize",this.onWindowResize)}onCloseMenu(){this.close()}onDeactivateItems(e){e.stopPropagation(),this.listController.onDeactivateItems()}onRequestActivation(e){e.stopPropagation(),this.listController.onRequestActivation(e)}handleDeactivateTypeahead(e){e.stopPropagation(),this.typeaheadActive=!1}handleActivateTypeahead(e){e.stopPropagation(),this.typeaheadActive=!0}handleStayOpenOnFocusout(e){e.stopPropagation(),this.stayOpenOnFocusout=!0}handleCloseOnFocusout(e){e.stopPropagation(),this.stayOpenOnFocusout=!1}close(){this.open=!1;this.slotItems.forEach(e=>{e.close?.()})}show(){this.open=!0}activateNextItem(){return this.listController.activateNextItem()??null}activatePreviousItem(){return this.listController.activatePreviousItem()??null}reposition(){this.open&&this.menuPositionController.position()}}Or([tt(".menu")],Zl.prototype,"surfaceEl",void 0),Or([tt("slot")],Zl.prototype,"slotEl",void 0),Or([Ze()],Zl.prototype,"anchor",void 0),Or([Ze()],Zl.prototype,"positioning",void 0),Or([Ze({type:Boolean})],Zl.prototype,"quick",void 0),Or([Ze({type:Boolean,attribute:"has-overflow"})],Zl.prototype,"hasOverflow",void 0),Or([Ze({type:Boolean,reflect:!0})],Zl.prototype,"open",void 0),Or([Ze({type:Number,attribute:"x-offset"})],Zl.prototype,"xOffset",void 0),Or([Ze({type:Number,attribute:"y-offset"})],Zl.prototype,"yOffset",void 0),Or([Ze({type:Boolean,attribute:"no-horizontal-flip"})],Zl.prototype,"noHorizontalFlip",void 0),Or([Ze({type:Boolean,attribute:"no-vertical-flip"})],Zl.prototype,"noVerticalFlip",void 0),Or([Ze({type:Number,attribute:"typeahead-delay"})],Zl.prototype,"typeaheadDelay",void 0),Or([Ze({attribute:"anchor-corner"})],Zl.prototype,"anchorCorner",void 0),Or([Ze({attribute:"menu-corner"})],Zl.prototype,"menuCorner",void 0),Or([Ze({type:Boolean,attribute:"stay-open-on-outside-click"})],Zl.prototype,"stayOpenOnOutsideClick",void 0),Or([Ze({type:Boolean,attribute:"stay-open-on-focusout"})],Zl.prototype,"stayOpenOnFocusout",void 0),Or([Ze({type:Boolean,attribute:"skip-restore-focus"})],Zl.prototype,"skipRestoreFocus",void 0),Or([Ze({attribute:"default-focus"})],Zl.prototype,"defaultFocus",void 0),Or([Ze({type:Boolean,attribute:"no-navigation-wrap"})],Zl.prototype,"noNavigationWrap",void 0),Or([rt({flatten:!0})],Zl.prototype,"slotItems",void 0),Or([Qe()],Zl.prototype,"typeaheadActive",void 0);
/**
 * @license
 * Copyright 2024 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */
const Ql=Ie`:host{--md-elevation-level: var(--md-menu-container-elevation, 2);--md-elevation-shadow-color: var(--md-menu-container-shadow-color, var(--md-sys-color-shadow, #000));min-width:112px;color:unset;display:contents}md-focus-ring{--md-focus-ring-shape: var(--md-menu-container-shape, var(--md-sys-shape-corner-extra-small, 4px))}.menu{border-radius:var(--md-menu-container-shape, var(--md-sys-shape-corner-extra-small, 4px));display:none;inset:auto;border:none;padding:0px;overflow:visible;background-color:rgba(0,0,0,0);color:inherit;opacity:0;z-index:20;position:absolute;user-select:none;max-height:inherit;height:inherit;min-width:inherit;max-width:inherit;scrollbar-width:inherit}.menu::backdrop{display:none}.fixed{position:fixed}.items{display:block;list-style-type:none;margin:0;outline:none;box-sizing:border-box;background-color:var(--md-menu-container-color, var(--md-sys-color-surface-container, #f3edf7));height:inherit;max-height:inherit;overflow:auto;min-width:inherit;max-width:inherit;border-radius:inherit;scrollbar-width:inherit}.item-padding{padding-block:var(--md-menu-top-space, 8px) var(--md-menu-bottom-space, 8px)}.has-overflow:not([popover]) .items{overflow:visible}.has-overflow.animating .items,.animating .items{overflow:hidden}.has-overflow.animating .items{pointer-events:none}.animating ::slotted(.md-menu-hidden){opacity:0}slot{display:block;height:inherit;max-height:inherit}::slotted(:is(md-divider,[role=separator])){margin:8px 0}@media(forced-colors: active){.menu{border-style:solid;border-color:CanvasText;border-width:1px}}
`
/**
 * @license
 * Copyright 2022 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */;let ec=class extends Zl{};ec.styles=[Ql],ec=Or([Xe("md-menu")],ec);
/**
 * @license
 * Copyright 2023 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */
const tc=Symbol("onReportValidity"),ic=Symbol("privateCleanupFormListeners"),rc=Symbol("privateDoNotReportInvalid"),nc=Symbol("privateIsSelfReportingValidity"),oc=Symbol("privateCallOnReportValidity");const sc=new WeakMap;
/**
 * @license
 * Copyright 2023 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */
class ac extends Za{computeValidity(e){return this.selectControl||(this.selectControl=document.createElement("select")),we(ne`<option value=${e.value}></option>`,this.selectControl),this.selectControl.value=e.value,this.selectControl.required=e.required,{validity:this.selectControl.validity,validationMessage:this.selectControl.validationMessage}}equals(e,t){return e.value===t.value&&e.required===t.required}copy({value:e,required:t}){return{value:e,required:t}}}
/**
 * @license
 * Copyright 2023 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */
/**
 * @license
 * Copyright 2023 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */
var lc;const cc=Symbol("value"),dc=Ta(function(e){var t,i,r;class n extends e{constructor(...e){super(...e),this[t]=new AbortController,this[i]=!1,this[r]=!1,this.addEventListener("invalid",e=>{!this[rc]&&e.isTrusted&&this.addEventListener("invalid",()=>{this[oc](e)},{once:!0})},{capture:!0})}checkValidity(){this[rc]=!0;const e=super.checkValidity();return this[rc]=!1,e}reportValidity(){this[nc]=!0;const e=super.reportValidity();return e&&this[oc](null),this[nc]=!1,e}[(t=ic,i=rc,r=nc,oc)](e){const t=e?.defaultPrevented;if(t)return;this[tc](e);!t&&e?.defaultPrevented&&(this[nc]||function(e,t){if(!e)return!0;let i;for(const t of e.elements)if(t.matches(":invalid")){i=t;break}return i===t}(this[Ia].form,this))&&this.focus()}[tc](e){throw new Error("Implement [onReportValidity]")}formAssociatedCallback(e){super.formAssociatedCallback&&super.formAssociatedCallback(e),this[ic].abort(),e&&(this[ic]=new AbortController,function(e,t,i,r){const n=function(e){if(!sc.has(e)){const t=new EventTarget;sc.set(e,t);for(const i of["reportValidity","requestSubmit"]){const r=e[i];e[i]=function(){t.dispatchEvent(new Event("before"));const e=Reflect.apply(r,this,arguments);return t.dispatchEvent(new Event("after")),e}}}return sc.get(e)}(t);let o,s=!1,a=!1;n.addEventListener("before",()=>{a=!0,o=new AbortController,s=!1,e.addEventListener("invalid",()=>{s=!0},{signal:o.signal})},{signal:r}),n.addEventListener("after",()=>{a=!1,o?.abort(),s||i()},{signal:r}),t.addEventListener("submit",()=>{a||i()},{signal:r})}(this,e,()=>{this[oc](null)},this[ic].signal))}}return n}(Ga(Ya(Ra(Ke)))));class hc extends dc{get value(){return this[cc]}set value(e){this.lastUserSetValue=e,this.select(e)}get options(){return this.menu?.items??[]}get selectedIndex(){const[e,t]=(this.getSelectedOptions()??[])[0]??[];return t??-1}set selectedIndex(e){this.lastUserSetSelectedIndex=e,this.selectIndex(e)}get selectedOptions(){return(this.getSelectedOptions()??[]).map(([e])=>e)}get hasError(){return this.error||this.nativeError}constructor(){super(),this.quick=!1,this.required=!1,this.errorText="",this.label="",this.noAsterisk=!1,this.supportingText="",this.error=!1,this.menuPositioning="popover",this.clampMenuWidth=!1,this.typeaheadDelay=200,this.hasLeadingIcon=!1,this.displayText="",this.menuAlign="start",this[lc]="",this.lastUserSetValue=null,this.lastUserSetSelectedIndex=null,this.lastSelectedOption=null,this.lastSelectedOptionRecords=[],this.nativeError=!1,this.nativeErrorText="",this.focused=!1,this.open=!1,this.defaultFocus=Fl,this.prevOpen=this.open,this.selectWidth=0,this.addEventListener("focus",this.handleFocus.bind(this)),this.addEventListener("blur",this.handleBlur.bind(this))}select(e){const t=this.options.find(t=>t.value===e);t&&this.selectItem(t)}selectIndex(e){const t=this.options[e];t&&this.selectItem(t)}reset(){for(const e of this.options)e.selected=e.hasAttribute("selected");this.updateValueAndDisplayText(),this.nativeError=!1,this.nativeErrorText=""}showPicker(){this.open=!0}[(lc=cc,tc)](e){e?.preventDefault();const t=this.getErrorText();this.nativeError=!!e,this.nativeErrorText=this.validationMessage,t===this.getErrorText()&&this.field?.reannounceError()}update(e){if(this.hasUpdated||this.initUserSelection(),this.prevOpen!==this.open&&this.open){const e=this.getBoundingClientRect();this.selectWidth=e.width}this.prevOpen=this.open,super.update(e)}render(){return ne`
      <span
        class="select ${ha(this.getRenderClasses())}"
        @focusout=${this.handleFocusout}>
        ${this.renderField()} ${this.renderMenu()}
      </span>
    `}async firstUpdated(e){await(this.menu?.updateComplete),this.lastSelectedOptionRecords.length||this.initUserSelection(),this.lastSelectedOptionRecords.length||this.options.length||setTimeout(()=>{this.updateValueAndDisplayText()}),super.firstUpdated(e)}getRenderClasses(){return{disabled:this.disabled,error:this.error,open:this.open}}renderField(){const e=this.ariaLabel||this.label;return pl`
      <${this.fieldTag}
          aria-haspopup="listbox"
          role="combobox"
          part="field"
          id="field"
          tabindex=${this.disabled?"-1":"0"}
          aria-label=${e||se}
          aria-describedby="description"
          aria-expanded=${this.open?"true":"false"}
          aria-controls="listbox"
          class="field"
          label=${this.label}
          ?no-asterisk=${this.noAsterisk}
          .focused=${this.focused||this.open}
          .populated=${!!this.displayText}
          .disabled=${this.disabled}
          .required=${this.required}
          .error=${this.hasError}
          ?has-start=${this.hasLeadingIcon}
          has-end
          supporting-text=${this.supportingText}
          error-text=${this.getErrorText()}
          @keydown=${this.handleKeydown}
          @click=${this.handleClick}>
         ${this.renderFieldContent()}
         <div id="description" slot="aria-describedby"></div>
      </${this.fieldTag}>`}renderFieldContent(){return[this.renderLeadingIcon(),this.renderLabel(),this.renderTrailingIcon()]}renderLeadingIcon(){return ne`
      <span class="icon leading" slot="start">
        <slot name="leading-icon" @slotchange=${this.handleIconChange}></slot>
      </span>
    `}renderTrailingIcon(){return ne`
      <span class="icon trailing" slot="end">
        <slot name="trailing-icon" @slotchange=${this.handleIconChange}>
          <svg height="5" viewBox="7 10 10 5" focusable="false">
            <polygon
              class="down"
              stroke="none"
              fill-rule="evenodd"
              points="7 10 12 15 17 10"></polygon>
            <polygon
              class="up"
              stroke="none"
              fill-rule="evenodd"
              points="7 15 12 10 17 15"></polygon>
          </svg>
        </slot>
      </span>
    `}renderLabel(){return ne`<div id="label">${this.displayText||ne`&nbsp;`}</div>`}renderMenu(){const e=this.label||this.ariaLabel;return ne`<div class="menu-wrapper">
      <md-menu
        id="listbox"
        .defaultFocus=${this.defaultFocus}
        role="listbox"
        tabindex="-1"
        aria-label=${e||se}
        stay-open-on-focusout
        part="menu"
        exportparts="focus-ring: menu-focus-ring"
        anchor="field"
        style=${gl({"--__menu-min-width":`${this.selectWidth}px`,"--__menu-max-width":this.clampMenuWidth?`${this.selectWidth}px`:void 0})}
        no-navigation-wrap
        .open=${this.open}
        .quick=${this.quick}
        .positioning=${this.menuPositioning}
        .typeaheadDelay=${this.typeaheadDelay}
        .anchorCorner=${"start"===this.menuAlign?"end-start":"end-end"}
        .menuCorner=${"start"===this.menuAlign?"start-start":"start-end"}
        @opening=${this.handleOpening}
        @opened=${this.redispatchEvent}
        @closing=${this.redispatchEvent}
        @closed=${this.handleClosed}
        @close-menu=${this.handleCloseMenu}
        @request-selection=${this.handleRequestSelection}
        @request-deselection=${this.handleRequestDeselection}>
        ${this.renderMenuContent()}
      </md-menu>
    </div>`}renderMenuContent(){return ne`<slot></slot>`}handleKeydown(e){if(this.open||this.disabled||!this.menu)return;const t=this.menu.typeaheadController,i="Space"===e.code||"ArrowDown"===e.code||"ArrowUp"===e.code||"End"===e.code||"Home"===e.code||"Enter"===e.code;if(!t.isTypingAhead&&i){switch(e.preventDefault(),this.open=!0,e.code){case"Space":case"ArrowDown":case"Enter":this.defaultFocus=Fl;break;case"End":this.defaultFocus=Bl;break;case"ArrowUp":case"Home":this.defaultFocus=jl}return}if(1===e.key.length){t.onKeydown(e),e.preventDefault();const{lastActiveRecord:i}=t;if(!i)return;this.labelEl?.setAttribute?.("aria-live","polite");this.selectItem(i[Kl])&&this.dispatchInteractionEvents()}}handleClick(){this.open=!this.open}handleFocus(){this.focused=!0}handleBlur(){this.focused=!1}handleFocusout(e){e.relatedTarget&&Ml(e.relatedTarget,this)||(this.open=!1)}getSelectedOptions(){if(!this.menu)return this.lastSelectedOptionRecords=[],null;const e=this.menu.items;return this.lastSelectedOptionRecords=function(e){const t=[];for(let i=0;i<e.length;i++){const r=e[i];r.selected&&t.push([r,i])}return t}(e),this.lastSelectedOptionRecords}async getUpdateComplete(){return await(this.menu?.updateComplete),super.getUpdateComplete()}updateValueAndDisplayText(){const e=this.getSelectedOptions()??[];let t=!1;if(e.length){const[i]=e[0];t=this.lastSelectedOption!==i,this.lastSelectedOption=i,this[cc]=i.value,this.displayText=i.displayText}else t=null!==this.lastSelectedOption,this.lastSelectedOption=null,this[cc]="",this.displayText="";return t}async handleOpening(e){if(this.labelEl?.removeAttribute?.("aria-live"),this.redispatchEvent(e),this.defaultFocus!==Fl)return;const t=this.menu.items,i=bl(t)?.item;let[r]=this.lastSelectedOptionRecords[0]??[null];i&&i!==r&&(i.tabIndex=-1),r=r??t[0],r&&(r.tabIndex=0,r.focus())}redispatchEvent(e){Ba(this,e)}handleClosed(e){this.open=!1,this.redispatchEvent(e)}handleCloseMenu(e){const t=e.detail.reason,i=e.detail.itemPath[0];this.open=!1;let r=!1;var n;"click-selection"===t.kind||"keydown"===t.kind&&(n=t.key,Object.values(Nl).some(e=>e===n))?r=this.selectItem(i):(i.tabIndex=-1,i.blur()),r&&this.dispatchInteractionEvents()}selectItem(e){return(this.getSelectedOptions()??[]).forEach(([t])=>{e!==t&&(t.selected=!1)}),e.selected=!0,this.updateValueAndDisplayText()}handleRequestSelection(e){const t=e.target;this.lastSelectedOptionRecords.some(([e])=>e===t)||this.selectItem(t)}handleRequestDeselection(e){const t=e.target;this.lastSelectedOptionRecords.some(([e])=>e===t)&&this.updateValueAndDisplayText()}initUserSelection(){this.lastUserSetValue&&!this.lastSelectedOptionRecords.length?this.select(this.lastUserSetValue):null===this.lastUserSetSelectedIndex||this.lastSelectedOptionRecords.length?this.updateValueAndDisplayText():this.selectIndex(this.lastUserSetSelectedIndex)}handleIconChange(){this.hasLeadingIcon=this.leadingIcons.length>0}dispatchInteractionEvents(){this.dispatchEvent(new Event("input",{bubbles:!0,composed:!0})),this.dispatchEvent(new Event("change",{bubbles:!0}))}getErrorText(){return this.error?this.errorText:this.nativeErrorText}[Xa](){return this.value}formResetCallback(){this.reset()}formStateRestoreCallback(e){this.value=e}click(){this.field?.click()}[Va](){return new ac(()=>this)}[Ha](){return this.field}}hc.shadowRootOptions={...Ke.shadowRootOptions,delegatesFocus:!0},Or([Ze({type:Boolean})],hc.prototype,"quick",void 0),Or([Ze({type:Boolean})],hc.prototype,"required",void 0),Or([Ze({type:String,attribute:"error-text"})],hc.prototype,"errorText",void 0),Or([Ze()],hc.prototype,"label",void 0),Or([Ze({type:Boolean,attribute:"no-asterisk"})],hc.prototype,"noAsterisk",void 0),Or([Ze({type:String,attribute:"supporting-text"})],hc.prototype,"supportingText",void 0),Or([Ze({type:Boolean,reflect:!0})],hc.prototype,"error",void 0),Or([Ze({attribute:"menu-positioning"})],hc.prototype,"menuPositioning",void 0),Or([Ze({type:Boolean,attribute:"clamp-menu-width"})],hc.prototype,"clampMenuWidth",void 0),Or([Ze({type:Number,attribute:"typeahead-delay"})],hc.prototype,"typeaheadDelay",void 0),Or([Ze({type:Boolean,attribute:"has-leading-icon"})],hc.prototype,"hasLeadingIcon",void 0),Or([Ze({attribute:"display-text"})],hc.prototype,"displayText",void 0),Or([Ze({attribute:"menu-align"})],hc.prototype,"menuAlign",void 0),Or([Ze()],hc.prototype,"value",null),Or([Ze({type:Number,attribute:"selected-index"})],hc.prototype,"selectedIndex",null),Or([Qe()],hc.prototype,"nativeError",void 0),Or([Qe()],hc.prototype,"nativeErrorText",void 0),Or([Qe()],hc.prototype,"focused",void 0),Or([Qe()],hc.prototype,"open",void 0),Or([Qe()],hc.prototype,"defaultFocus",void 0),Or([tt(".field")],hc.prototype,"field",void 0),Or([tt("md-menu")],hc.prototype,"menu",void 0),Or([tt("#label")],hc.prototype,"labelEl",void 0),Or([rt({slot:"leading-icon",flatten:!0})],hc.prototype,"leadingIcons",void 0);
/**
 * @license
 * Copyright 2023 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */
class uc extends hc{constructor(){super(...arguments),this.fieldTag=hl`md-outlined-field`}}
/**
 * @license
 * Copyright 2024 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */const pc=Ie`:host{--_text-field-disabled-input-text-color: var(--md-outlined-select-text-field-disabled-input-text-color, var(--md-sys-color-on-surface, #1d1b20));--_text-field-disabled-input-text-opacity: var(--md-outlined-select-text-field-disabled-input-text-opacity, 0.38);--_text-field-disabled-label-text-color: var(--md-outlined-select-text-field-disabled-label-text-color, var(--md-sys-color-on-surface, #1d1b20));--_text-field-disabled-label-text-opacity: var(--md-outlined-select-text-field-disabled-label-text-opacity, 0.38);--_text-field-disabled-leading-icon-color: var(--md-outlined-select-text-field-disabled-leading-icon-color, var(--md-sys-color-on-surface, #1d1b20));--_text-field-disabled-leading-icon-opacity: var(--md-outlined-select-text-field-disabled-leading-icon-opacity, 0.38);--_text-field-disabled-outline-color: var(--md-outlined-select-text-field-disabled-outline-color, var(--md-sys-color-on-surface, #1d1b20));--_text-field-disabled-outline-opacity: var(--md-outlined-select-text-field-disabled-outline-opacity, 0.12);--_text-field-disabled-outline-width: var(--md-outlined-select-text-field-disabled-outline-width, 1px);--_text-field-disabled-supporting-text-color: var(--md-outlined-select-text-field-disabled-supporting-text-color, var(--md-sys-color-on-surface, #1d1b20));--_text-field-disabled-supporting-text-opacity: var(--md-outlined-select-text-field-disabled-supporting-text-opacity, 0.38);--_text-field-disabled-trailing-icon-color: var(--md-outlined-select-text-field-disabled-trailing-icon-color, var(--md-sys-color-on-surface, #1d1b20));--_text-field-disabled-trailing-icon-opacity: var(--md-outlined-select-text-field-disabled-trailing-icon-opacity, 0.38);--_text-field-error-focus-input-text-color: var(--md-outlined-select-text-field-error-focus-input-text-color, var(--md-sys-color-on-surface, #1d1b20));--_text-field-error-focus-label-text-color: var(--md-outlined-select-text-field-error-focus-label-text-color, var(--md-sys-color-error, #b3261e));--_text-field-error-focus-leading-icon-color: var(--md-outlined-select-text-field-error-focus-leading-icon-color, var(--md-sys-color-on-surface-variant, #49454f));--_text-field-error-focus-outline-color: var(--md-outlined-select-text-field-error-focus-outline-color, var(--md-sys-color-error, #b3261e));--_text-field-error-focus-supporting-text-color: var(--md-outlined-select-text-field-error-focus-supporting-text-color, var(--md-sys-color-error, #b3261e));--_text-field-error-focus-trailing-icon-color: var(--md-outlined-select-text-field-error-focus-trailing-icon-color, var(--md-sys-color-error, #b3261e));--_text-field-error-hover-input-text-color: var(--md-outlined-select-text-field-error-hover-input-text-color, var(--md-sys-color-on-surface, #1d1b20));--_text-field-error-hover-label-text-color: var(--md-outlined-select-text-field-error-hover-label-text-color, var(--md-sys-color-on-error-container, #410e0b));--_text-field-error-hover-leading-icon-color: var(--md-outlined-select-text-field-error-hover-leading-icon-color, var(--md-sys-color-on-surface-variant, #49454f));--_text-field-error-hover-outline-color: var(--md-outlined-select-text-field-error-hover-outline-color, var(--md-sys-color-on-error-container, #410e0b));--_text-field-error-hover-supporting-text-color: var(--md-outlined-select-text-field-error-hover-supporting-text-color, var(--md-sys-color-error, #b3261e));--_text-field-error-hover-trailing-icon-color: var(--md-outlined-select-text-field-error-hover-trailing-icon-color, var(--md-sys-color-on-error-container, #410e0b));--_text-field-error-input-text-color: var(--md-outlined-select-text-field-error-input-text-color, var(--md-sys-color-on-surface, #1d1b20));--_text-field-error-label-text-color: var(--md-outlined-select-text-field-error-label-text-color, var(--md-sys-color-error, #b3261e));--_text-field-error-leading-icon-color: var(--md-outlined-select-text-field-error-leading-icon-color, var(--md-sys-color-on-surface-variant, #49454f));--_text-field-error-outline-color: var(--md-outlined-select-text-field-error-outline-color, var(--md-sys-color-error, #b3261e));--_text-field-error-supporting-text-color: var(--md-outlined-select-text-field-error-supporting-text-color, var(--md-sys-color-error, #b3261e));--_text-field-error-trailing-icon-color: var(--md-outlined-select-text-field-error-trailing-icon-color, var(--md-sys-color-error, #b3261e));--_text-field-focus-input-text-color: var(--md-outlined-select-text-field-focus-input-text-color, var(--md-sys-color-on-surface, #1d1b20));--_text-field-focus-label-text-color: var(--md-outlined-select-text-field-focus-label-text-color, var(--md-sys-color-primary, #6750a4));--_text-field-focus-leading-icon-color: var(--md-outlined-select-text-field-focus-leading-icon-color, var(--md-sys-color-on-surface-variant, #49454f));--_text-field-focus-outline-color: var(--md-outlined-select-text-field-focus-outline-color, var(--md-sys-color-primary, #6750a4));--_text-field-focus-outline-width: var(--md-outlined-select-text-field-focus-outline-width, 3px);--_text-field-focus-supporting-text-color: var(--md-outlined-select-text-field-focus-supporting-text-color, var(--md-sys-color-on-surface-variant, #49454f));--_text-field-focus-trailing-icon-color: var(--md-outlined-select-text-field-focus-trailing-icon-color, var(--md-sys-color-primary, #6750a4));--_text-field-hover-input-text-color: var(--md-outlined-select-text-field-hover-input-text-color, var(--md-sys-color-on-surface, #1d1b20));--_text-field-hover-label-text-color: var(--md-outlined-select-text-field-hover-label-text-color, var(--md-sys-color-on-surface, #1d1b20));--_text-field-hover-leading-icon-color: var(--md-outlined-select-text-field-hover-leading-icon-color, var(--md-sys-color-on-surface-variant, #49454f));--_text-field-hover-outline-color: var(--md-outlined-select-text-field-hover-outline-color, var(--md-sys-color-on-surface, #1d1b20));--_text-field-hover-outline-width: var(--md-outlined-select-text-field-hover-outline-width, 1px);--_text-field-hover-supporting-text-color: var(--md-outlined-select-text-field-hover-supporting-text-color, var(--md-sys-color-on-surface-variant, #49454f));--_text-field-hover-trailing-icon-color: var(--md-outlined-select-text-field-hover-trailing-icon-color, var(--md-sys-color-on-surface-variant, #49454f));--_text-field-input-text-color: var(--md-outlined-select-text-field-input-text-color, var(--md-sys-color-on-surface, #1d1b20));--_text-field-input-text-font: var(--md-outlined-select-text-field-input-text-font, var(--md-sys-typescale-body-large-font, var(--md-ref-typeface-plain, Roboto)));--_text-field-input-text-line-height: var(--md-outlined-select-text-field-input-text-line-height, var(--md-sys-typescale-body-large-line-height, 1.5rem));--_text-field-input-text-size: var(--md-outlined-select-text-field-input-text-size, var(--md-sys-typescale-body-large-size, 1rem));--_text-field-input-text-weight: var(--md-outlined-select-text-field-input-text-weight, var(--md-sys-typescale-body-large-weight, var(--md-ref-typeface-weight-regular, 400)));--_text-field-label-text-color: var(--md-outlined-select-text-field-label-text-color, var(--md-sys-color-on-surface-variant, #49454f));--_text-field-label-text-font: var(--md-outlined-select-text-field-label-text-font, var(--md-sys-typescale-body-large-font, var(--md-ref-typeface-plain, Roboto)));--_text-field-label-text-line-height: var(--md-outlined-select-text-field-label-text-line-height, var(--md-sys-typescale-body-large-line-height, 1.5rem));--_text-field-label-text-populated-line-height: var(--md-outlined-select-text-field-label-text-populated-line-height, var(--md-sys-typescale-body-small-line-height, 1rem));--_text-field-label-text-populated-size: var(--md-outlined-select-text-field-label-text-populated-size, var(--md-sys-typescale-body-small-size, 0.75rem));--_text-field-label-text-size: var(--md-outlined-select-text-field-label-text-size, var(--md-sys-typescale-body-large-size, 1rem));--_text-field-label-text-weight: var(--md-outlined-select-text-field-label-text-weight, var(--md-sys-typescale-body-large-weight, var(--md-ref-typeface-weight-regular, 400)));--_text-field-leading-icon-color: var(--md-outlined-select-text-field-leading-icon-color, var(--md-sys-color-on-surface-variant, #49454f));--_text-field-leading-icon-size: var(--md-outlined-select-text-field-leading-icon-size, 24px);--_text-field-outline-color: var(--md-outlined-select-text-field-outline-color, var(--md-sys-color-outline, #79747e));--_text-field-outline-width: var(--md-outlined-select-text-field-outline-width, 1px);--_text-field-supporting-text-color: var(--md-outlined-select-text-field-supporting-text-color, var(--md-sys-color-on-surface-variant, #49454f));--_text-field-supporting-text-font: var(--md-outlined-select-text-field-supporting-text-font, var(--md-sys-typescale-body-small-font, var(--md-ref-typeface-plain, Roboto)));--_text-field-supporting-text-line-height: var(--md-outlined-select-text-field-supporting-text-line-height, var(--md-sys-typescale-body-small-line-height, 1rem));--_text-field-supporting-text-size: var(--md-outlined-select-text-field-supporting-text-size, var(--md-sys-typescale-body-small-size, 0.75rem));--_text-field-supporting-text-weight: var(--md-outlined-select-text-field-supporting-text-weight, var(--md-sys-typescale-body-small-weight, var(--md-ref-typeface-weight-regular, 400)));--_text-field-trailing-icon-color: var(--md-outlined-select-text-field-trailing-icon-color, var(--md-sys-color-on-surface-variant, #49454f));--_text-field-trailing-icon-size: var(--md-outlined-select-text-field-trailing-icon-size, 24px);--_text-field-container-shape-start-start: var(--md-outlined-select-text-field-container-shape-start-start, var(--md-outlined-select-text-field-container-shape, var(--md-sys-shape-corner-extra-small, 4px)));--_text-field-container-shape-start-end: var(--md-outlined-select-text-field-container-shape-start-end, var(--md-outlined-select-text-field-container-shape, var(--md-sys-shape-corner-extra-small, 4px)));--_text-field-container-shape-end-end: var(--md-outlined-select-text-field-container-shape-end-end, var(--md-outlined-select-text-field-container-shape, var(--md-sys-shape-corner-extra-small, 4px)));--_text-field-container-shape-end-start: var(--md-outlined-select-text-field-container-shape-end-start, var(--md-outlined-select-text-field-container-shape, var(--md-sys-shape-corner-extra-small, 4px)));--md-outlined-field-container-shape-end-end: var(--_text-field-container-shape-end-end);--md-outlined-field-container-shape-end-start: var(--_text-field-container-shape-end-start);--md-outlined-field-container-shape-start-end: var(--_text-field-container-shape-start-end);--md-outlined-field-container-shape-start-start: var(--_text-field-container-shape-start-start);--md-outlined-field-content-color: var(--_text-field-input-text-color);--md-outlined-field-content-font: var(--_text-field-input-text-font);--md-outlined-field-content-line-height: var(--_text-field-input-text-line-height);--md-outlined-field-content-size: var(--_text-field-input-text-size);--md-outlined-field-content-weight: var(--_text-field-input-text-weight);--md-outlined-field-disabled-content-color: var(--_text-field-disabled-input-text-color);--md-outlined-field-disabled-content-opacity: var(--_text-field-disabled-input-text-opacity);--md-outlined-field-disabled-label-text-color: var(--_text-field-disabled-label-text-color);--md-outlined-field-disabled-label-text-opacity: var(--_text-field-disabled-label-text-opacity);--md-outlined-field-disabled-leading-content-color: var(--_text-field-disabled-leading-icon-color);--md-outlined-field-disabled-leading-content-opacity: var(--_text-field-disabled-leading-icon-opacity);--md-outlined-field-disabled-outline-color: var(--_text-field-disabled-outline-color);--md-outlined-field-disabled-outline-opacity: var(--_text-field-disabled-outline-opacity);--md-outlined-field-disabled-outline-width: var(--_text-field-disabled-outline-width);--md-outlined-field-disabled-supporting-text-color: var(--_text-field-disabled-supporting-text-color);--md-outlined-field-disabled-supporting-text-opacity: var(--_text-field-disabled-supporting-text-opacity);--md-outlined-field-disabled-trailing-content-color: var(--_text-field-disabled-trailing-icon-color);--md-outlined-field-disabled-trailing-content-opacity: var(--_text-field-disabled-trailing-icon-opacity);--md-outlined-field-error-content-color: var(--_text-field-error-input-text-color);--md-outlined-field-error-focus-content-color: var(--_text-field-error-focus-input-text-color);--md-outlined-field-error-focus-label-text-color: var(--_text-field-error-focus-label-text-color);--md-outlined-field-error-focus-leading-content-color: var(--_text-field-error-focus-leading-icon-color);--md-outlined-field-error-focus-outline-color: var(--_text-field-error-focus-outline-color);--md-outlined-field-error-focus-supporting-text-color: var(--_text-field-error-focus-supporting-text-color);--md-outlined-field-error-focus-trailing-content-color: var(--_text-field-error-focus-trailing-icon-color);--md-outlined-field-error-hover-content-color: var(--_text-field-error-hover-input-text-color);--md-outlined-field-error-hover-label-text-color: var(--_text-field-error-hover-label-text-color);--md-outlined-field-error-hover-leading-content-color: var(--_text-field-error-hover-leading-icon-color);--md-outlined-field-error-hover-outline-color: var(--_text-field-error-hover-outline-color);--md-outlined-field-error-hover-supporting-text-color: var(--_text-field-error-hover-supporting-text-color);--md-outlined-field-error-hover-trailing-content-color: var(--_text-field-error-hover-trailing-icon-color);--md-outlined-field-error-label-text-color: var(--_text-field-error-label-text-color);--md-outlined-field-error-leading-content-color: var(--_text-field-error-leading-icon-color);--md-outlined-field-error-outline-color: var(--_text-field-error-outline-color);--md-outlined-field-error-supporting-text-color: var(--_text-field-error-supporting-text-color);--md-outlined-field-error-trailing-content-color: var(--_text-field-error-trailing-icon-color);--md-outlined-field-focus-content-color: var(--_text-field-focus-input-text-color);--md-outlined-field-focus-label-text-color: var(--_text-field-focus-label-text-color);--md-outlined-field-focus-leading-content-color: var(--_text-field-focus-leading-icon-color);--md-outlined-field-focus-outline-color: var(--_text-field-focus-outline-color);--md-outlined-field-focus-outline-width: var(--_text-field-focus-outline-width);--md-outlined-field-focus-supporting-text-color: var(--_text-field-focus-supporting-text-color);--md-outlined-field-focus-trailing-content-color: var(--_text-field-focus-trailing-icon-color);--md-outlined-field-hover-content-color: var(--_text-field-hover-input-text-color);--md-outlined-field-hover-label-text-color: var(--_text-field-hover-label-text-color);--md-outlined-field-hover-leading-content-color: var(--_text-field-hover-leading-icon-color);--md-outlined-field-hover-outline-color: var(--_text-field-hover-outline-color);--md-outlined-field-hover-outline-width: var(--_text-field-hover-outline-width);--md-outlined-field-hover-supporting-text-color: var(--_text-field-hover-supporting-text-color);--md-outlined-field-hover-trailing-content-color: var(--_text-field-hover-trailing-icon-color);--md-outlined-field-label-text-color: var(--_text-field-label-text-color);--md-outlined-field-label-text-font: var(--_text-field-label-text-font);--md-outlined-field-label-text-line-height: var(--_text-field-label-text-line-height);--md-outlined-field-label-text-populated-line-height: var(--_text-field-label-text-populated-line-height);--md-outlined-field-label-text-populated-size: var(--_text-field-label-text-populated-size);--md-outlined-field-label-text-size: var(--_text-field-label-text-size);--md-outlined-field-label-text-weight: var(--_text-field-label-text-weight);--md-outlined-field-leading-content-color: var(--_text-field-leading-icon-color);--md-outlined-field-outline-color: var(--_text-field-outline-color);--md-outlined-field-outline-width: var(--_text-field-outline-width);--md-outlined-field-supporting-text-color: var(--_text-field-supporting-text-color);--md-outlined-field-supporting-text-font: var(--_text-field-supporting-text-font);--md-outlined-field-supporting-text-line-height: var(--_text-field-supporting-text-line-height);--md-outlined-field-supporting-text-size: var(--_text-field-supporting-text-size);--md-outlined-field-supporting-text-weight: var(--_text-field-supporting-text-weight);--md-outlined-field-trailing-content-color: var(--_text-field-trailing-icon-color)}[has-start] .icon.leading{font-size:var(--_text-field-leading-icon-size);height:var(--_text-field-leading-icon-size);width:var(--_text-field-leading-icon-size)}.icon.trailing{font-size:var(--_text-field-trailing-icon-size);height:var(--_text-field-trailing-icon-size);width:var(--_text-field-trailing-icon-size)}
`,fc=Ie`:host{color:unset;min-width:210px;display:flex}.field{cursor:default;outline:none}.select{position:relative;flex-direction:column}.icon.trailing svg,.icon ::slotted(*){fill:currentColor}.icon ::slotted(*){width:inherit;height:inherit;font-size:inherit}.icon slot{display:flex;height:100%;width:100%;align-items:center;justify-content:center}.icon.trailing :is(.up,.down){opacity:0;transition:opacity 75ms linear 75ms}.select:not(.open) .down,.select.open .up{opacity:1}.field,.select,md-menu{min-width:inherit;width:inherit;max-width:inherit;display:flex}md-menu{min-width:var(--__menu-min-width);max-width:var(--__menu-max-width, inherit)}.menu-wrapper{width:0px;height:0px;max-width:inherit}md-menu ::slotted(:not[disabled]){cursor:pointer}.field,.select{width:100%}:host{display:inline-flex}:host([disabled]){pointer-events:none}
`
/**
 * @license
 * Copyright 2023 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */;
/**
 * @license
 * Copyright 2024 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */let mc=class extends uc{};mc.styles=[fc,pc],mc=Or([Xe("md-outlined-select")],mc);
/**
 * @license
 * Copyright 2024 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */
const gc=Ie`:host{display:flex;--md-ripple-hover-color: var(--md-menu-item-hover-state-layer-color, var(--md-sys-color-on-surface, #1d1b20));--md-ripple-hover-opacity: var(--md-menu-item-hover-state-layer-opacity, 0.08);--md-ripple-pressed-color: var(--md-menu-item-pressed-state-layer-color, var(--md-sys-color-on-surface, #1d1b20));--md-ripple-pressed-opacity: var(--md-menu-item-pressed-state-layer-opacity, 0.12)}:host([disabled]){opacity:var(--md-menu-item-disabled-opacity, 0.3);pointer-events:none}md-focus-ring{z-index:1;--md-focus-ring-shape: 8px}a,button,li{background:none;border:none;padding:0;margin:0;text-align:unset;text-decoration:none}.list-item{border-radius:inherit;display:flex;flex:1;max-width:inherit;min-width:inherit;outline:none;-webkit-tap-highlight-color:rgba(0,0,0,0)}.list-item:not(.disabled){cursor:pointer}[slot=container]{pointer-events:none}md-ripple{border-radius:inherit}md-item{border-radius:inherit;flex:1;color:var(--md-menu-item-label-text-color, var(--md-sys-color-on-surface, #1d1b20));font-family:var(--md-menu-item-label-text-font, var(--md-sys-typescale-body-large-font, var(--md-ref-typeface-plain, Roboto)));font-size:var(--md-menu-item-label-text-size, var(--md-sys-typescale-body-large-size, 1rem));line-height:var(--md-menu-item-label-text-line-height, var(--md-sys-typescale-body-large-line-height, 1.5rem));font-weight:var(--md-menu-item-label-text-weight, var(--md-sys-typescale-body-large-weight, var(--md-ref-typeface-weight-regular, 400)));min-height:var(--md-menu-item-one-line-container-height, 56px);padding-top:var(--md-menu-item-top-space, 12px);padding-bottom:var(--md-menu-item-bottom-space, 12px);padding-inline-start:var(--md-menu-item-leading-space, 16px);padding-inline-end:var(--md-menu-item-trailing-space, 16px)}md-item[multiline]{min-height:var(--md-menu-item-two-line-container-height, 72px)}[slot=supporting-text]{color:var(--md-menu-item-supporting-text-color, var(--md-sys-color-on-surface-variant, #49454f));font-family:var(--md-menu-item-supporting-text-font, var(--md-sys-typescale-body-medium-font, var(--md-ref-typeface-plain, Roboto)));font-size:var(--md-menu-item-supporting-text-size, var(--md-sys-typescale-body-medium-size, 0.875rem));line-height:var(--md-menu-item-supporting-text-line-height, var(--md-sys-typescale-body-medium-line-height, 1.25rem));font-weight:var(--md-menu-item-supporting-text-weight, var(--md-sys-typescale-body-medium-weight, var(--md-ref-typeface-weight-regular, 400)))}[slot=trailing-supporting-text]{color:var(--md-menu-item-trailing-supporting-text-color, var(--md-sys-color-on-surface-variant, #49454f));font-family:var(--md-menu-item-trailing-supporting-text-font, var(--md-sys-typescale-label-small-font, var(--md-ref-typeface-plain, Roboto)));font-size:var(--md-menu-item-trailing-supporting-text-size, var(--md-sys-typescale-label-small-size, 0.6875rem));line-height:var(--md-menu-item-trailing-supporting-text-line-height, var(--md-sys-typescale-label-small-line-height, 1rem));font-weight:var(--md-menu-item-trailing-supporting-text-weight, var(--md-sys-typescale-label-small-weight, var(--md-ref-typeface-weight-medium, 500)))}:is([slot=start],[slot=end])::slotted(*){fill:currentColor}[slot=start]{color:var(--md-menu-item-leading-icon-color, var(--md-sys-color-on-surface-variant, #49454f))}[slot=end]{color:var(--md-menu-item-trailing-icon-color, var(--md-sys-color-on-surface-variant, #49454f))}.list-item{background-color:var(--md-menu-item-container-color, transparent)}.list-item.selected{background-color:var(--md-menu-item-selected-container-color, var(--md-sys-color-secondary-container, #e8def8))}.selected:not(.disabled) ::slotted(*){color:var(--md-menu-item-selected-label-text-color, var(--md-sys-color-on-secondary-container, #1d192b))}@media(forced-colors: active){:host([disabled]),:host([disabled]) slot{color:GrayText;opacity:1}.list-item{position:relative}.list-item.selected::before{content:"";position:absolute;inset:0;box-sizing:border-box;border-radius:inherit;pointer-events:none;border:3px double CanvasText}}
`
/**
 * @license
 * Copyright 2023 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */;class vc extends Ke{constructor(){super(...arguments),this.multiline=!1}render(){return ne`
      <slot name="container"></slot>
      <slot class="non-text" name="start"></slot>
      <div class="text">
        <slot name="overline" @slotchange=${this.handleTextSlotChange}></slot>
        <slot
          class="default-slot"
          @slotchange=${this.handleTextSlotChange}></slot>
        <slot name="headline" @slotchange=${this.handleTextSlotChange}></slot>
        <slot
          name="supporting-text"
          @slotchange=${this.handleTextSlotChange}></slot>
      </div>
      <slot class="non-text" name="trailing-supporting-text"></slot>
      <slot class="non-text" name="end"></slot>
    `}handleTextSlotChange(){let e=!1,t=0;for(const i of this.textSlots)if(yc(i)&&(t+=1),t>1){e=!0;break}this.multiline=e}}function yc(e){for(const t of e.assignedNodes({flatten:!0})){const e=t.nodeType===Node.ELEMENT_NODE,i=t.nodeType===Node.TEXT_NODE&&t.textContent?.match(/\S/);if(e||i)return!0}return!1}
/**
 * @license
 * Copyright 2024 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */Or([Ze({type:Boolean,reflect:!0})],vc.prototype,"multiline",void 0),Or([function(e){return(t,i)=>et(t,i,{get(){return(this.renderRoot??(it??=document.createDocumentFragment())).querySelectorAll(e)}})}(".text slot")],vc.prototype,"textSlots",void 0);const bc=Ie`:host{color:var(--md-sys-color-on-surface, #1d1b20);font-family:var(--md-sys-typescale-body-large-font, var(--md-ref-typeface-plain, Roboto));font-size:var(--md-sys-typescale-body-large-size, 1rem);font-weight:var(--md-sys-typescale-body-large-weight, var(--md-ref-typeface-weight-regular, 400));line-height:var(--md-sys-typescale-body-large-line-height, 1.5rem);align-items:center;box-sizing:border-box;display:flex;gap:16px;min-height:56px;overflow:hidden;padding:12px 16px;position:relative;text-overflow:ellipsis}:host([multiline]){min-height:72px}[name=overline]{color:var(--md-sys-color-on-surface-variant, #49454f);font-family:var(--md-sys-typescale-label-small-font, var(--md-ref-typeface-plain, Roboto));font-size:var(--md-sys-typescale-label-small-size, 0.6875rem);font-weight:var(--md-sys-typescale-label-small-weight, var(--md-ref-typeface-weight-medium, 500));line-height:var(--md-sys-typescale-label-small-line-height, 1rem)}[name=supporting-text]{color:var(--md-sys-color-on-surface-variant, #49454f);font-family:var(--md-sys-typescale-body-medium-font, var(--md-ref-typeface-plain, Roboto));font-size:var(--md-sys-typescale-body-medium-size, 0.875rem);font-weight:var(--md-sys-typescale-body-medium-weight, var(--md-ref-typeface-weight-regular, 400));line-height:var(--md-sys-typescale-body-medium-line-height, 1.25rem)}[name=trailing-supporting-text]{color:var(--md-sys-color-on-surface-variant, #49454f);font-family:var(--md-sys-typescale-label-small-font, var(--md-ref-typeface-plain, Roboto));font-size:var(--md-sys-typescale-label-small-size, 0.6875rem);font-weight:var(--md-sys-typescale-label-small-weight, var(--md-ref-typeface-weight-medium, 500));line-height:var(--md-sys-typescale-label-small-line-height, 1rem)}[name=container]::slotted(*){inset:0;position:absolute}.default-slot{display:inline}.default-slot,.text ::slotted(*){overflow:hidden;text-overflow:ellipsis}.text{display:flex;flex:1;flex-direction:column;overflow:hidden}
`
/**
 * @license
 * Copyright 2023 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */;let _c=class extends vc{};_c.styles=[bc],_c=Or([Xe("md-item")],_c);
/**
 * @license
 * Copyright 2023 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */
class wc{constructor(e,t){this.host=e,this.internalTypeaheadText=null,this.onClick=()=>{this.host.keepOpen||this.host.dispatchEvent(Pl(this.host,{kind:Dl}))},this.onKeydown=e=>{if(this.host.href&&"Enter"===e.code){const e=this.getInteractiveElement();e instanceof HTMLAnchorElement&&e.click()}if(e.defaultPrevented)return;const t=e.code;this.host.keepOpen&&"Escape"!==t||Ul(t)&&(e.preventDefault(),this.host.dispatchEvent(Pl(this.host,{kind:$l,key:t})))},this.getHeadlineElements=t.getHeadlineElements,this.getSupportingTextElements=t.getSupportingTextElements,this.getDefaultElements=t.getDefaultElements,this.getInteractiveElement=t.getInteractiveElement,this.host.addController(this)}get typeaheadText(){if(null!==this.internalTypeaheadText)return this.internalTypeaheadText;const e=this.getHeadlineElements(),t=[];return e.forEach(e=>{e.textContent&&e.textContent.trim()&&t.push(e.textContent.trim())}),0===t.length&&this.getDefaultElements().forEach(e=>{e.textContent&&e.textContent.trim()&&t.push(e.textContent.trim())}),0===t.length&&this.getSupportingTextElements().forEach(e=>{e.textContent&&e.textContent.trim()&&t.push(e.textContent.trim())}),t.join(" ")}get tagName(){switch(this.host.type){case"link":return"a";case"button":return"button";default:return"li"}}get role(){return"option"===this.host.type?"option":"menuitem"}hostConnected(){this.host.toggleAttribute("md-menu-item",!0)}hostUpdate(){this.host.href&&(this.host.type="link")}setTypeaheadText(e){this.internalTypeaheadText=e}}
/**
 * @license
 * Copyright 2023 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */class xc{get role(){return this.menuItemController.role}get typeaheadText(){return this.menuItemController.typeaheadText}setTypeaheadText(e){this.menuItemController.setTypeaheadText(e)}get displayText(){return null!==this.internalDisplayText?this.internalDisplayText:this.menuItemController.typeaheadText}setDisplayText(e){this.internalDisplayText=e}constructor(e,t){this.host=e,this.internalDisplayText=null,this.firstUpdate=!0,this.onClick=()=>{this.menuItemController.onClick()},this.onKeydown=e=>{this.menuItemController.onKeydown(e)},this.lastSelected=this.host.selected,this.menuItemController=new wc(e,t),e.addController(this)}hostUpdate(){this.lastSelected!==this.host.selected&&(this.host.ariaSelected=this.host.selected?"true":"false")}hostUpdated(){this.lastSelected===this.host.selected||this.firstUpdate||(this.host.selected?this.host.dispatchEvent(new Event("request-selection",{bubbles:!0,composed:!0})):this.host.dispatchEvent(new Event("request-deselection",{bubbles:!0,composed:!0}))),this.lastSelected=this.host.selected,this.firstUpdate=!1}}
/**
 * @license
 * Copyright 2023 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */const Ec=Ta(Ke);class Sc extends Ec{constructor(){super(...arguments),this.disabled=!1,this.isMenuItem=!0,this.selected=!1,this.value="",this.type="option",this.selectOptionController=new xc(this,{getHeadlineElements:()=>this.headlineElements,getSupportingTextElements:()=>this.supportingTextElements,getDefaultElements:()=>this.defaultElements,getInteractiveElement:()=>this.listItemRoot})}get typeaheadText(){return this.selectOptionController.typeaheadText}set typeaheadText(e){this.selectOptionController.setTypeaheadText(e)}get displayText(){return this.selectOptionController.displayText}set displayText(e){this.selectOptionController.setDisplayText(e)}render(){return this.renderListItem(ne`
      <md-item>
        <div slot="container">
          ${this.renderRipple()} ${this.renderFocusRing()}
        </div>
        <slot name="start" slot="start"></slot>
        <slot name="end" slot="end"></slot>
        ${this.renderBody()}
      </md-item>
    `)}renderListItem(e){return ne`
      <li
        id="item"
        tabindex=${this.disabled?-1:0}
        role=${this.selectOptionController.role}
        aria-label=${this.ariaLabel||se}
        aria-selected=${this.ariaSelected||se}
        aria-checked=${this.ariaChecked||se}
        aria-expanded=${this.ariaExpanded||se}
        aria-haspopup=${this.ariaHasPopup||se}
        class="list-item ${ha(this.getRenderClasses())}"
        @click=${this.selectOptionController.onClick}
        @keydown=${this.selectOptionController.onKeydown}
        >${e}</li
      >
    `}renderRipple(){return ne` <md-ripple
      part="ripple"
      for="item"
      ?disabled=${this.disabled}></md-ripple>`}renderFocusRing(){return ne` <md-focus-ring
      part="focus-ring"
      for="item"
      inward></md-focus-ring>`}getRenderClasses(){return{disabled:this.disabled,selected:this.selected}}renderBody(){return ne`
      <slot></slot>
      <slot name="overline" slot="overline"></slot>
      <slot name="headline" slot="headline"></slot>
      <slot name="supporting-text" slot="supporting-text"></slot>
      <slot
        name="trailing-supporting-text"
        slot="trailing-supporting-text"></slot>
    `}focus(){this.listItemRoot?.focus()}}Sc.shadowRootOptions={...Ke.shadowRootOptions,delegatesFocus:!0},Or([Ze({type:Boolean,reflect:!0})],Sc.prototype,"disabled",void 0),Or([Ze({type:Boolean,attribute:"md-menu-item",reflect:!0})],Sc.prototype,"isMenuItem",void 0),Or([Ze({type:Boolean})],Sc.prototype,"selected",void 0),Or([Ze()],Sc.prototype,"value",void 0),Or([tt(".list-item")],Sc.prototype,"listItemRoot",void 0),Or([rt({slot:"headline"})],Sc.prototype,"headlineElements",void 0),Or([rt({slot:"supporting-text"})],Sc.prototype,"supportingTextElements",void 0),Or([function(e){return(t,i)=>{const{slot:r}=e??{},n="slot"+(r?`[name=${r}]`:":not([name])");return et(t,i,{get(){const t=this.renderRoot?.querySelector(n);return t?.assignedNodes(e)??[]}})}}({slot:""})],Sc.prototype,"defaultElements",void 0),Or([Ze({attribute:"typeahead-text"})],Sc.prototype,"typeaheadText",null),Or([Ze({attribute:"display-text"})],Sc.prototype,"displayText",null);
/**
 * @license
 * Copyright 2023 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */
let Cc=class extends Sc{};Cc.styles=[gc],Cc=Or([Xe("md-select-option")],Cc);var Tc=function(e,t,i,r){var n,o=arguments.length,s=o<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,i):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e,t,i,r);else for(var a=e.length-1;a>=0;a--)(n=e[a])&&(s=(o<3?n(s):o>3?n(t,i,s):n(t,i))||s);return o>3&&s&&Object.defineProperty(t,i,s),s};let kc=class extends($(Ke)){static{this.styles=Ie`
    :host {
      display: block;
      max-width: 480px;
      border-radius: 16px;
      border: 1px solid var(--df-practice-outline-color, rgba(31, 41, 55, 0.15));
      padding: 24px;
      box-shadow: var(--df-practice-shadow, 0 10px 30px rgba(15, 23, 42, 0.08));
      background: var(--df-practice-surface, #ffffff);
      color: var(--df-practice-text, #111827);
      font-family: var(--df-font-family, 'Roboto', sans-serif);
    }

    header {
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin-bottom: 16px;
      gap: 12px;
    }

    h2 {
      margin: 0;
      font-size: 1.25rem;
      font-weight: 600;
    }

    .actions {
      display: flex;
      gap: 8px;
      flex-wrap: wrap;
      align-items: center;
    }

    md-outlined-select {
      min-width: 210px;
    }

    .auto-refresh {
      display: inline-flex;
      align-items: center;
      gap: 8px;
    }

    .status {
      display: flex;
      align-items: center;
      gap: 8px;
      font-size: 0.85rem;
      color: rgba(55, 65, 81, 0.9);
      margin-bottom: 16px;
    }

    .dot {
      width: 10px;
      height: 10px;
      border-radius: 999px;
      background: var(--df-practice-primary, #2563eb);
      animation: pulse 1.2s ease-in-out infinite;
    }

    ul.task-list {
      list-style: none;
      margin: 0;
      padding: 0;
      display: grid;
      gap: 12px;
    }

    li {
      border: 1px solid rgba(148, 163, 184, 0.6);
      border-radius: 12px;
      padding: 12px 16px;
      background: rgba(248, 250, 252, 0.75);
    }

    .task-title {
      display: flex;
      justify-content: space-between;
      align-items: baseline;
      font-weight: 600;
      margin-bottom: 8px;
    }

    .difficulty {
      font-size: 0.75rem;
      padding: 2px 8px;
      border-radius: 6px;
      background: rgba(37, 99, 235, 0.12);
      color: rgba(37, 99, 235, 0.9);
      text-transform: uppercase;
      letter-spacing: 0.04em;
    }

    .error {
      border-radius: 8px;
      padding: 10px 12px;
      background: rgba(239, 68, 68, 0.12);
      color: #b91c1c;
    }

    footer {
      margin-top: 16px;
      font-size: 0.8rem;
      color: rgba(100, 116, 139, 0.9);
    }

    @keyframes pulse {
      0%,
      100% {
        opacity: 0.2;
      }
      50% {
        opacity: 1;
      }
    }
  `}constructor(){super(),this.refreshInterval=15e3}set autoRefresh(e){e?At(this.refreshInterval):It()}get autoRefresh(){return Ct.get().isAutoRefreshing}set topic(e){if(!e)return;Tt(e)&&kt(e)}get topic(){return Ct.get().topic}connectedCallback(){super.connectedCallback(),"idle"===Ct.get().status&&kt()}disconnectedCallback(){super.disconnectedCallback(),this.autoRefresh&&It()}updated(e){e.has("refreshInterval")&&this.autoRefresh&&At(this.refreshInterval)}render(){const e=Ct.get(),{status:t,tasks:i,errorMessage:r,lastUpdated:n,isAutoRefreshing:o,topic:s}=e;return ne`
      <header>
        <h2>Practice planner</h2>
        <md-outlined-select
          label="Practice topic"
          .value=${s}
          @change=${this.handleTopicChange}
        >
          ${St.map(e=>ne`
              <md-select-option value=${e}>
                <div slot="headline">${this.formatTopic(e)}</div>
              </md-select-option>
            `)}
        </md-outlined-select>
      </header>

      <div class="actions">
        <md-filled-button @click=${this.handleRefresh} ?disabled=${"loading"===t}>
          Refresh tasks
        </md-filled-button>
        <div class="auto-refresh">
          <md-checkbox
            @change=${this.handleAutoRefreshToggle}
            .checked=${o}
            aria-label="Auto refresh tasks"
          ></md-checkbox>
          <span>Auto refresh</span>
        </div>
      </div>

      ${this.renderStatus(t,r)}

      ${"error"===t?se:ne`
            <ul class="task-list">
              ${i.map(e=>ne`
                  <li>
                    <div class="task-title">
                      <span>${e.title}</span>
                      <span class="difficulty">${e.difficulty}</span>
                    </div>
                    <p>${e.summary}</p>
                  </li>
                `)}
            </ul>
          `}

      <footer>
        ${n?ne`Last updated ${this.formatTimestamp(n)}${o?" • auto refresh on":""}`:"No tasks loaded yet"}
      </footer>
    `}renderStatus(e,t){switch(e){case"loading":return ne`<div class="status"><span class="dot" aria-hidden="true"></span>Loading tasks…</div>`;case"error":return ne`<div class="error" role="alert">${t??"Unable to load practice tasks."}</div>`;case"ready":return se;default:return ne`<div class="status">Select a topic to generate practice ideas.</div>`}}handleRefresh(){kt()}handleTopicChange(e){const t=e.target.value??"";Tt(t),kt(t),this.dispatchEvent(new CustomEvent("df-practice-topic-change",{detail:{topic:t},bubbles:!0,composed:!0}))}handleAutoRefreshToggle(e){e.target.checked?At(this.refreshInterval):It()}formatTopic(e){return e.split("-").map(e=>e.charAt(0).toUpperCase()+e.slice(1)).join(" ")}formatTimestamp(e){return new Intl.DateTimeFormat(void 0,{hour:"2-digit",minute:"2-digit",second:"2-digit"}).format(e)}};Tc([Ze({type:Number,attribute:"refresh-interval"})],kc.prototype,"refreshInterval",void 0),Tc([Ze({type:Boolean,attribute:"auto-refresh"})],kc.prototype,"autoRefresh",null),Tc([Ze({type:String})],kc.prototype,"topic",null),kc=Tc([Xe("df-practice-widget")],kc);var Ac=function(e,t,i,r){var n,o=arguments.length,s=o<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,i):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e,t,i,r);else for(var a=e.length-1;a>=0;a--)(n=e[a])&&(s=(o<3?n(s):o>3?n(t,i,s):n(t,i))||s);return o>3&&s&&Object.defineProperty(t,i,s),s};let Ic=class extends($(Ke)){static styles=Ie`
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
  `;render(){const e=Ct.get();return ne`
      <header>
        <h1>Practice runtime harness</h1>
        <p>Explore how a Lit component consumes signal-driven state with isolated side effects.</p>
      </header>

      <main>
        <df-practice-widget></df-practice-widget>

        <section class="panel" aria-label="store-state">
          <h2>Store snapshot</h2>
          <pre>${JSON.stringify(e,null,2)}</pre>
          <div class="actions">
            <button @click=${this.handleReload}>Reload from host</button>
            <button @click=${this.handleReset}>Reset store</button>
          </div>
        </section>
      </main>
    `}handleReload(){kt()}handleReset(){xt+=1,It(),ft.set(ut[0]),mt.set([]),gt.set("idle"),vt.set(null),bt.set(null),yt.set(yt.get()+1)}};Ic=Ac([Xe("df-practice-app")],Ic);export{Ic as DfPracticeApp};
//# sourceMappingURL=df-teaching-app.js.map
