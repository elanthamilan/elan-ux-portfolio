import{r as s,R as x,a as X}from"./vendor-BXmx4ITx.js";var Y={exports:{}},j={};/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var ge=s,Ae=Symbol.for("react.element"),ke=Symbol.for("react.fragment"),Re=Object.prototype.hasOwnProperty,be=ge.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,we={key:!0,ref:!0,__self:!0,__source:!0};function J(e,t,n){var o,r={},c=null,a=null;n!==void 0&&(c=""+n),t.key!==void 0&&(c=""+t.key),t.ref!==void 0&&(a=t.ref);for(o in t)Re.call(t,o)&&!we.hasOwnProperty(o)&&(r[o]=t[o]);if(e&&e.defaultProps)for(o in t=e.defaultProps,t)r[o]===void 0&&(r[o]=t[o]);return{$$typeof:Ae,type:e,key:c,ref:a,props:r,_owner:be.current}}j.Fragment=ke;j.jsx=J;j.jsxs=J;Y.exports=j;var f=Y.exports;function K(e,t){if(typeof e=="function")return e(t);e!=null&&(e.current=t)}function Q(...e){return t=>{let n=!1;const o=e.map(r=>{const c=K(r,t);return!n&&typeof c=="function"&&(n=!0),c});if(n)return()=>{for(let r=0;r<o.length;r++){const c=o[r];typeof c=="function"?c():K(e[r],null)}}}}function I(...e){return s.useCallback(Q(...e),e)}function P(e){const t=Me(e),n=s.forwardRef((o,r)=>{const{children:c,...a}=o,i=s.Children.toArray(c),l=i.find(Ie);if(l){const d=l.props.children,u=i.map(p=>p===l?s.Children.count(d)>1?s.Children.only(null):s.isValidElement(d)?d.props.children:null:p);return f.jsx(t,{...a,ref:r,children:s.isValidElement(d)?s.cloneElement(d,void 0,u):null})}return f.jsx(t,{...a,ref:r,children:c})});return n.displayName=`${e}.Slot`,n}var lt=P("Slot");function Me(e){const t=s.forwardRef((n,o)=>{const{children:r,...c}=n;if(s.isValidElement(r)){const a=_e(r),i=Se(c,r.props);return r.type!==s.Fragment&&(i.ref=o?Q(o,a):a),s.cloneElement(r,i)}return s.Children.count(r)>1?s.Children.only(null):null});return t.displayName=`${e}.SlotClone`,t}var Ne=Symbol("radix.slottable");function Ie(e){return s.isValidElement(e)&&typeof e.type=="function"&&"__radixId"in e.type&&e.type.__radixId===Ne}function Se(e,t){const n={...t};for(const o in t){const r=e[o],c=t[o];/^on[A-Z]/.test(o)?r&&c?n[o]=(...i)=>{const l=c(...i);return r(...i),l}:r&&(n[o]=r):o==="style"?n[o]={...r,...c}:o==="className"&&(n[o]=[r,c].filter(Boolean).join(" "))}return{...e,...n}}function _e(e){let t=Object.getOwnPropertyDescriptor(e.props,"ref")?.get,n=t&&"isReactWarning"in t&&t.isReactWarning;return n?e.ref:(t=Object.getOwnPropertyDescriptor(e,"ref")?.get,n=t&&"isReactWarning"in t&&t.isReactWarning,n?e.props.ref:e.props.ref||e.ref)}/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ee=e=>e.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),ee=(...e)=>e.filter((t,n,o)=>!!t&&t.trim()!==""&&o.indexOf(t)===n).join(" ").trim();/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var Pe={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Oe=s.forwardRef(({color:e="currentColor",size:t=24,strokeWidth:n=2,absoluteStrokeWidth:o,className:r="",children:c,iconNode:a,...i},l)=>s.createElement("svg",{ref:l,...Pe,width:t,height:t,stroke:e,strokeWidth:o?Number(n)*24/Number(t):n,className:ee("lucide",r),...i},[...a.map(([d,u])=>s.createElement(d,u)),...Array.isArray(c)?c:[c]]));/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const y=(e,t)=>{const n=s.forwardRef(({className:o,...r},c)=>s.createElement(Oe,{ref:c,iconNode:t,className:ee(`lucide-${Ee(e)}`,o),...r}));return n.displayName=`${e}`,n};/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const dt=y("ArrowLeft",[["path",{d:"m12 19-7-7 7-7",key:"1l729n"}],["path",{d:"M19 12H5",key:"x3x0zl"}]]);/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ut=y("ArrowRight",[["path",{d:"M5 12h14",key:"1ays0h"}],["path",{d:"m12 5 7 7-7 7",key:"xquz4c"}]]);/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const pt=y("ArrowUp",[["path",{d:"m5 12 7-7 7 7",key:"hav0vg"}],["path",{d:"M12 19V5",key:"x0mq9r"}]]);/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ft=y("Briefcase",[["path",{d:"M16 20V4a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16",key:"jecpp"}],["rect",{width:"20",height:"14",x:"2",y:"6",rx:"2",key:"i6l2r4"}]]);/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const mt=y("ChevronDown",[["path",{d:"m6 9 6 6 6-6",key:"qrunsl"}]]);/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ht=y("ChevronLeft",[["path",{d:"m15 18-6-6 6-6",key:"1wnfg3"}]]);/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const yt=y("ChevronRight",[["path",{d:"m9 18 6-6-6-6",key:"mthhwq"}]]);/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const vt=y("Download",[["path",{d:"M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4",key:"ih7n3h"}],["polyline",{points:"7 10 12 15 17 10",key:"2ggqvy"}],["line",{x1:"12",x2:"12",y1:"15",y2:"3",key:"1vk2je"}]]);/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const xt=y("ExternalLink",[["path",{d:"M15 3h6v6",key:"1q9fwt"}],["path",{d:"M10 14 21 3",key:"gplh6r"}],["path",{d:"M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6",key:"a6xqqp"}]]);/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ct=y("GraduationCap",[["path",{d:"M21.42 10.922a1 1 0 0 0-.019-1.838L12.83 5.18a2 2 0 0 0-1.66 0L2.6 9.08a1 1 0 0 0 0 1.832l8.57 3.908a2 2 0 0 0 1.66 0z",key:"j76jl0"}],["path",{d:"M22 10v6",key:"1lu8f3"}],["path",{d:"M6 12.5V16a6 3 0 0 0 12 0v-3.5",key:"1r8lef"}]]);/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const gt=y("House",[["path",{d:"M15 21v-8a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v8",key:"5wwlr5"}],["path",{d:"M3 10a2 2 0 0 1 .709-1.528l7-5.999a2 2 0 0 1 2.582 0l7 5.999A2 2 0 0 1 21 10v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z",key:"1d0kgt"}]]);/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const At=y("Mail",[["rect",{width:"20",height:"16",x:"2",y:"4",rx:"2",key:"18n3k1"}],["path",{d:"m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7",key:"1ocrg3"}]]);/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const kt=y("Maximize2",[["polyline",{points:"15 3 21 3 21 9",key:"mznyad"}],["polyline",{points:"9 21 3 21 3 15",key:"1avn1i"}],["line",{x1:"21",x2:"14",y1:"3",y2:"10",key:"ota7mn"}],["line",{x1:"3",x2:"10",y1:"21",y2:"14",key:"1atl0r"}]]);/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Rt=y("Menu",[["line",{x1:"4",x2:"20",y1:"12",y2:"12",key:"1e0a9i"}],["line",{x1:"4",x2:"20",y1:"6",y2:"6",key:"1owob3"}],["line",{x1:"4",x2:"20",y1:"18",y2:"18",key:"yk5zj1"}]]);/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const bt=y("MessageSquare",[["path",{d:"M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z",key:"1lielz"}]]);/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const wt=y("Moon",[["path",{d:"M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z",key:"a7tn18"}]]);/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Mt=y("Network",[["rect",{x:"16",y:"16",width:"6",height:"6",rx:"1",key:"4q2zg0"}],["rect",{x:"2",y:"16",width:"6",height:"6",rx:"1",key:"8cvhb9"}],["rect",{x:"9",y:"2",width:"6",height:"6",rx:"1",key:"1egb70"}],["path",{d:"M5 16v-3a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1v3",key:"1jsf9p"}],["path",{d:"M12 12V8",key:"2874zd"}]]);/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Nt=y("Phone",[["path",{d:"M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z",key:"foiqr5"}]]);/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const It=y("Rocket",[["path",{d:"M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z",key:"m3kijz"}],["path",{d:"m12 15-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z",key:"1fmvmk"}],["path",{d:"M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0",key:"1f8sc4"}],["path",{d:"M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5",key:"qeys4"}]]);/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const St=y("ShoppingCart",[["circle",{cx:"8",cy:"21",r:"1",key:"jimo8o"}],["circle",{cx:"19",cy:"21",r:"1",key:"13723u"}],["path",{d:"M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12",key:"9zh506"}]]);/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const _t=y("Sun",[["circle",{cx:"12",cy:"12",r:"4",key:"4exip2"}],["path",{d:"M12 2v2",key:"tus03m"}],["path",{d:"M12 20v2",key:"1lh1kg"}],["path",{d:"m4.93 4.93 1.41 1.41",key:"149t6j"}],["path",{d:"m17.66 17.66 1.41 1.41",key:"ptbguv"}],["path",{d:"M2 12h2",key:"1t8f8n"}],["path",{d:"M20 12h2",key:"1q8mjw"}],["path",{d:"m6.34 17.66-1.41 1.41",key:"1m8zz5"}],["path",{d:"m19.07 4.93-1.41 1.41",key:"1shlcs"}]]);/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Et=y("X",[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]]);/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Pt=y("ZoomIn",[["circle",{cx:"11",cy:"11",r:"8",key:"4ej97u"}],["line",{x1:"21",x2:"16.65",y1:"21",y2:"16.65",key:"13gj7c"}],["line",{x1:"11",x2:"11",y1:"8",y2:"14",key:"1vmskp"}],["line",{x1:"8",x2:"14",y1:"11",y2:"11",key:"durymu"}]]);function H(e,t=[]){let n=[];function o(c,a){const i=s.createContext(a),l=n.length;n=[...n,a];const d=p=>{const{scope:g,children:h,...k}=p,C=g?.[e]?.[l]||i,v=s.useMemo(()=>k,Object.values(k));return f.jsx(C.Provider,{value:v,children:h})};d.displayName=c+"Provider";function u(p,g){const h=g?.[e]?.[l]||i,k=s.useContext(h);if(k)return k;if(a!==void 0)return a;throw new Error(`\`${p}\` must be used within \`${c}\``)}return[d,u]}const r=()=>{const c=n.map(a=>s.createContext(a));return function(i){const l=i?.[e]||c;return s.useMemo(()=>({[`__scope${e}`]:{...i,[e]:l}}),[i,l])}};return r.scopeName=e,[o,je(r,...t)]}function je(...e){const t=e[0];if(e.length===1)return t;const n=()=>{const o=e.map(r=>({useScope:r(),scopeName:r.scopeName}));return function(c){const a=o.reduce((i,{useScope:l,scopeName:d})=>{const p=l(c)[`__scope${d}`];return{...i,...p}},{});return s.useMemo(()=>({[`__scope${t.scopeName}`]:a}),[a])}};return n.scopeName=t.scopeName,n}function Te(e){const t=e+"CollectionProvider",[n,o]=H(t),[r,c]=n(t,{collectionRef:{current:null},itemMap:new Map}),a=C=>{const{scope:v,children:R}=C,m=x.useRef(null),A=x.useRef(new Map).current;return f.jsx(r,{scope:v,itemMap:A,collectionRef:m,children:R})};a.displayName=t;const i=e+"CollectionSlot",l=P(i),d=x.forwardRef((C,v)=>{const{scope:R,children:m}=C,A=c(i,R),b=I(v,A.collectionRef);return f.jsx(l,{ref:b,children:m})});d.displayName=i;const u=e+"CollectionItemSlot",p="data-radix-collection-item",g=P(u),h=x.forwardRef((C,v)=>{const{scope:R,children:m,...A}=C,b=x.useRef(null),N=I(v,b),M=c(u,R);return x.useEffect(()=>(M.itemMap.set(b,{ref:b,...A}),()=>void M.itemMap.delete(b))),f.jsx(g,{[p]:"",ref:N,children:m})});h.displayName=u;function k(C){const v=c(e+"CollectionConsumer",C);return x.useCallback(()=>{const m=v.collectionRef.current;if(!m)return[];const A=Array.from(m.querySelectorAll(`[${p}]`));return Array.from(v.itemMap.values()).sort((M,$)=>A.indexOf(M.ref.current)-A.indexOf($.ref.current))},[v.collectionRef,v.itemMap])}return[{Provider:a,Slot:d,ItemSlot:h},k,o]}function te(e,t,{checkForDefaultPrevented:n=!0}={}){return function(r){if(e?.(r),n===!1||!r.defaultPrevented)return t?.(r)}}var S=globalThis?.document?s.useLayoutEffect:()=>{},De=X[" useInsertionEffect ".trim().toString()]||S;function U({prop:e,defaultProp:t,onChange:n=()=>{},caller:o}){const[r,c,a]=Le({defaultProp:t,onChange:n}),i=e!==void 0,l=i?e:r;{const u=s.useRef(e!==void 0);s.useEffect(()=>{const p=u.current;p!==i&&console.warn(`${o} is changing from ${p?"controlled":"uncontrolled"} to ${i?"controlled":"uncontrolled"}. Components should not switch from controlled to uncontrolled (or vice versa). Decide between using a controlled or uncontrolled value for the lifetime of the component.`),u.current=i},[i,o])}const d=s.useCallback(u=>{if(i){const p=$e(u)?u(e):u;p!==e&&a.current?.(p)}else c(u)},[i,e,c,a]);return[l,d]}function Le({defaultProp:e,onChange:t}){const[n,o]=s.useState(e),r=s.useRef(n),c=s.useRef(t);return De(()=>{c.current=t},[t]),s.useEffect(()=>{r.current!==n&&(c.current?.(n),r.current=n)},[n,r]),[n,o,c]}function $e(e){return typeof e=="function"}var Ve=["a","button","div","form","h2","h3","img","input","label","li","nav","ol","p","select","span","svg","ul"],_=Ve.reduce((e,t)=>{const n=P(`Primitive.${t}`),o=s.forwardRef((r,c)=>{const{asChild:a,...i}=r,l=a?n:t;return typeof window<"u"&&(window[Symbol.for("radix-ui")]=!0),f.jsx(l,{...i,ref:c})});return o.displayName=`Primitive.${t}`,{...e,[t]:o}},{});function ze(e,t){return s.useReducer((n,o)=>t[n][o]??n,e)}var ne=e=>{const{present:t,children:n}=e,o=He(t),r=typeof n=="function"?n({present:o.isPresent}):s.Children.only(n),c=I(o.ref,Ue(r));return typeof n=="function"||o.isPresent?s.cloneElement(r,{ref:c}):null};ne.displayName="Presence";function He(e){const[t,n]=s.useState(),o=s.useRef(null),r=s.useRef(e),c=s.useRef("none"),a=e?"mounted":"unmounted",[i,l]=ze(a,{mounted:{UNMOUNT:"unmounted",ANIMATION_OUT:"unmountSuspended"},unmountSuspended:{MOUNT:"mounted",ANIMATION_END:"unmounted"},unmounted:{MOUNT:"mounted"}});return s.useEffect(()=>{const d=E(o.current);c.current=i==="mounted"?d:"none"},[i]),S(()=>{const d=o.current,u=r.current;if(u!==e){const g=c.current,h=E(d);e?l("MOUNT"):h==="none"||d?.display==="none"?l("UNMOUNT"):l(u&&g!==h?"ANIMATION_OUT":"UNMOUNT"),r.current=e}},[e,l]),S(()=>{if(t){let d;const u=t.ownerDocument.defaultView??window,p=h=>{const C=E(o.current).includes(h.animationName);if(h.target===t&&C&&(l("ANIMATION_END"),!r.current)){const v=t.style.animationFillMode;t.style.animationFillMode="forwards",d=u.setTimeout(()=>{t.style.animationFillMode==="forwards"&&(t.style.animationFillMode=v)})}},g=h=>{h.target===t&&(c.current=E(o.current))};return t.addEventListener("animationstart",g),t.addEventListener("animationcancel",p),t.addEventListener("animationend",p),()=>{u.clearTimeout(d),t.removeEventListener("animationstart",g),t.removeEventListener("animationcancel",p),t.removeEventListener("animationend",p)}}else l("ANIMATION_END")},[t,l]),{isPresent:["mounted","unmountSuspended"].includes(i),ref:s.useCallback(d=>{o.current=d?getComputedStyle(d):null,n(d)},[])}}function E(e){return e?.animationName||"none"}function Ue(e){let t=Object.getOwnPropertyDescriptor(e.props,"ref")?.get,n=t&&"isReactWarning"in t&&t.isReactWarning;return n?e.ref:(t=Object.getOwnPropertyDescriptor(e,"ref")?.get,n=t&&"isReactWarning"in t&&t.isReactWarning,n?e.props.ref:e.props.ref||e.ref)}var qe=X[" useId ".trim().toString()]||(()=>{}),Fe=0;function oe(e){const[t,n]=s.useState(qe());return S(()=>{n(o=>o??String(Fe++))},[e]),t?`radix-${t}`:""}var T="Collapsible",[We,re]=H(T),[Be,q]=We(T),ce=s.forwardRef((e,t)=>{const{__scopeCollapsible:n,open:o,defaultOpen:r,disabled:c,onOpenChange:a,...i}=e,[l,d]=U({prop:o,defaultProp:r??!1,onChange:a,caller:T});return f.jsx(Be,{scope:n,disabled:c,contentId:oe(),open:l,onOpenToggle:s.useCallback(()=>d(u=>!u),[d]),children:f.jsx(_.div,{"data-state":W(l),"data-disabled":c?"":void 0,...i,ref:t})})});ce.displayName=T;var se="CollapsibleTrigger",ie=s.forwardRef((e,t)=>{const{__scopeCollapsible:n,...o}=e,r=q(se,n);return f.jsx(_.button,{type:"button","aria-controls":r.contentId,"aria-expanded":r.open||!1,"data-state":W(r.open),"data-disabled":r.disabled?"":void 0,disabled:r.disabled,...o,ref:t,onClick:te(e.onClick,r.onOpenToggle)})});ie.displayName=se;var F="CollapsibleContent",ae=s.forwardRef((e,t)=>{const{forceMount:n,...o}=e,r=q(F,e.__scopeCollapsible);return f.jsx(ne,{present:n||r.open,children:({present:c})=>f.jsx(Ge,{...o,ref:t,present:c})})});ae.displayName=F;var Ge=s.forwardRef((e,t)=>{const{__scopeCollapsible:n,present:o,children:r,...c}=e,a=q(F,n),[i,l]=s.useState(o),d=s.useRef(null),u=I(t,d),p=s.useRef(0),g=p.current,h=s.useRef(0),k=h.current,C=a.open||i,v=s.useRef(C),R=s.useRef(void 0);return s.useEffect(()=>{const m=requestAnimationFrame(()=>v.current=!1);return()=>cancelAnimationFrame(m)},[]),S(()=>{const m=d.current;if(m){R.current=R.current||{transitionDuration:m.style.transitionDuration,animationName:m.style.animationName},m.style.transitionDuration="0s",m.style.animationName="none";const A=m.getBoundingClientRect();p.current=A.height,h.current=A.width,v.current||(m.style.transitionDuration=R.current.transitionDuration,m.style.animationName=R.current.animationName),l(o)}},[a.open,o]),f.jsx(_.div,{"data-state":W(a.open),"data-disabled":a.disabled?"":void 0,id:a.contentId,hidden:!C,...c,ref:u,style:{"--radix-collapsible-content-height":g?`${g}px`:void 0,"--radix-collapsible-content-width":k?`${k}px`:void 0,...e.style},children:C&&r})});function W(e){return e?"open":"closed"}var Ze=ce,Ke=ie,Xe=ae,Ye=s.createContext(void 0);function Je(e){const t=s.useContext(Ye);return e||t||"ltr"}var w="Accordion",Qe=["Home","End","ArrowDown","ArrowUp","ArrowLeft","ArrowRight"],[B,et,tt]=Te(w),[D,Ot]=H(w,[tt,re]),G=re(),le=x.forwardRef((e,t)=>{const{type:n,...o}=e,r=o,c=o;return f.jsx(B.Provider,{scope:e.__scopeAccordion,children:n==="multiple"?f.jsx(ct,{...c,ref:t}):f.jsx(rt,{...r,ref:t})})});le.displayName=w;var[de,nt]=D(w),[ue,ot]=D(w,{collapsible:!1}),rt=x.forwardRef((e,t)=>{const{value:n,defaultValue:o,onValueChange:r=()=>{},collapsible:c=!1,...a}=e,[i,l]=U({prop:n,defaultProp:o??"",onChange:r,caller:w});return f.jsx(de,{scope:e.__scopeAccordion,value:x.useMemo(()=>i?[i]:[],[i]),onItemOpen:l,onItemClose:x.useCallback(()=>c&&l(""),[c,l]),children:f.jsx(ue,{scope:e.__scopeAccordion,collapsible:c,children:f.jsx(pe,{...a,ref:t})})})}),ct=x.forwardRef((e,t)=>{const{value:n,defaultValue:o,onValueChange:r=()=>{},...c}=e,[a,i]=U({prop:n,defaultProp:o??[],onChange:r,caller:w}),l=x.useCallback(u=>i((p=[])=>[...p,u]),[i]),d=x.useCallback(u=>i((p=[])=>p.filter(g=>g!==u)),[i]);return f.jsx(de,{scope:e.__scopeAccordion,value:a,onItemOpen:l,onItemClose:d,children:f.jsx(ue,{scope:e.__scopeAccordion,collapsible:!0,children:f.jsx(pe,{...c,ref:t})})})}),[st,L]=D(w),pe=x.forwardRef((e,t)=>{const{__scopeAccordion:n,disabled:o,dir:r,orientation:c="vertical",...a}=e,i=x.useRef(null),l=I(i,t),d=et(n),p=Je(r)==="ltr",g=te(e.onKeyDown,h=>{if(!Qe.includes(h.key))return;const k=h.target,C=d().filter(V=>!V.ref.current?.disabled),v=C.findIndex(V=>V.ref.current===k),R=C.length;if(v===-1)return;h.preventDefault();let m=v;const A=0,b=R-1,N=()=>{m=v+1,m>b&&(m=A)},M=()=>{m=v-1,m<A&&(m=b)};switch(h.key){case"Home":m=A;break;case"End":m=b;break;case"ArrowRight":c==="horizontal"&&(p?N():M());break;case"ArrowDown":c==="vertical"&&N();break;case"ArrowLeft":c==="horizontal"&&(p?M():N());break;case"ArrowUp":c==="vertical"&&M();break}const $=m%R;C[$].ref.current?.focus()});return f.jsx(st,{scope:n,disabled:o,direction:r,orientation:c,children:f.jsx(B.Slot,{scope:n,children:f.jsx(_.div,{...a,"data-orientation":c,ref:l,onKeyDown:o?void 0:g})})})}),O="AccordionItem",[it,Z]=D(O),fe=x.forwardRef((e,t)=>{const{__scopeAccordion:n,value:o,...r}=e,c=L(O,n),a=nt(O,n),i=G(n),l=oe(),d=o&&a.value.includes(o)||!1,u=c.disabled||e.disabled;return f.jsx(it,{scope:n,open:d,disabled:u,triggerId:l,children:f.jsx(Ze,{"data-orientation":c.orientation,"data-state":Ce(d),...i,...r,ref:t,disabled:u,open:d,onOpenChange:p=>{p?a.onItemOpen(o):a.onItemClose(o)}})})});fe.displayName=O;var me="AccordionHeader",he=x.forwardRef((e,t)=>{const{__scopeAccordion:n,...o}=e,r=L(w,n),c=Z(me,n);return f.jsx(_.h3,{"data-orientation":r.orientation,"data-state":Ce(c.open),"data-disabled":c.disabled?"":void 0,...o,ref:t})});he.displayName=me;var z="AccordionTrigger",ye=x.forwardRef((e,t)=>{const{__scopeAccordion:n,...o}=e,r=L(w,n),c=Z(z,n),a=ot(z,n),i=G(n);return f.jsx(B.ItemSlot,{scope:n,children:f.jsx(Ke,{"aria-disabled":c.open&&!a.collapsible||void 0,"data-orientation":r.orientation,id:c.triggerId,...i,...o,ref:t})})});ye.displayName=z;var ve="AccordionContent",xe=x.forwardRef((e,t)=>{const{__scopeAccordion:n,...o}=e,r=L(w,n),c=Z(ve,n),a=G(n);return f.jsx(Xe,{role:"region","aria-labelledby":c.triggerId,"data-orientation":r.orientation,...a,...o,ref:t,style:{"--radix-accordion-content-height":"var(--radix-collapsible-content-height)","--radix-accordion-content-width":"var(--radix-collapsible-content-width)",...e.style}})});xe.displayName=ve;function Ce(e){return e?"open":"closed"}var jt=le,Tt=fe,Dt=he,Lt=ye,$t=xe;export{ut as A,ft as B,mt as C,vt as D,xt as E,Ct as G,Dt as H,Tt as I,At as M,Mt as N,Nt as P,jt as R,St as S,Lt as T,Et as X,Pt as Z,$t as a,It as b,bt as c,pt as d,dt as e,kt as f,ht as g,yt as h,lt as i,f as j,_t as k,wt as l,gt as m,Rt as n};
