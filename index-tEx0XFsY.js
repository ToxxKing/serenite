(function(){let e=document.createElement(`link`).relList;if(e&&e.supports&&e.supports(`modulepreload`))return;for(let e of document.querySelectorAll(`link[rel="modulepreload"]`))n(e);new MutationObserver(e=>{for(let t of e)if(t.type===`childList`)for(let e of t.addedNodes)e.tagName===`LINK`&&e.rel===`modulepreload`&&n(e)}).observe(document,{childList:!0,subtree:!0});function t(e){let t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),t.credentials=e.crossOrigin===`use-credentials`?`include`:e.crossOrigin===`anonymous`?`omit`:`same-origin`,t}function n(e){if(e.ep)return;e.ep=!0;let n=t(e);fetch(e.href,n)}})();var e=`modulepreload`,t=function(e,t){return new URL(e,t).href},n={},r=function(e){return e.pathname.endsWith(`.css`)},i=function(e,t,n){if(t in e)return e[t];let r=n();if(!r){e[t]=void 0;return}let i=r.then(()=>{e[t]=void 0},n=>{throw e[t]=void 0,n});return e[t]=i,i},a=function(a,o,s){let c=Promise.resolve();if(o&&o.length>0){let a,l=document.querySelector(`meta[property=csp-nonce]`),u=l?.nonce||l?.getAttribute(`nonce`);function d(e){return Promise.all(e.map(e=>Promise.resolve(e).then(e=>({status:`fulfilled`,value:e}),e=>({status:`rejected`,reason:e}))))}function f(e){return import.meta.resolve?new URL(import.meta.resolve(e)):new URL(e,import.meta.url)}c=d(o.map(o=>{o=t(o,s);let c=f(o),l=r(c);return i(n,c.href,()=>{if(a===void 0){a={all:new Set,styles:new Set};let e=document.getElementsByTagName(`link`);for(let t=e.length-1;t>=0;t--){let n=e[t];a.all.add(n.href),n.rel===`stylesheet`&&a.styles.add(n.href)}}if((l?a.styles:a.all).has(c.href))return;let t=document.createElement(`link`);if(t.rel=l?`stylesheet`:e,l||(t.as=`script`),t.crossOrigin=``,t.href=c.href,u&&t.setAttribute(`nonce`,u),document.head.appendChild(t),l)return new Promise((e,n)=>{t.addEventListener(`load`,e),t.addEventListener(`error`,()=>n(Error(`Unable to preload CSS for ${c}`)))})})}).filter(e=>e!==void 0))}function l(e){let t=new Event(`vite:preloadError`,{cancelable:!0});if(t.payload=e,window.dispatchEvent(t),!t.defaultPrevented)throw e}return c.then(e=>{for(let t of e||[])t.status===`rejected`&&l(t.reason);return a().catch(l)})},o=`true`,s=`false`,c=o===`true`,l=s===`true`;function u(e={}){let{immediate:t=!1,onNeedReload:n,onNeedRefresh:r,onOfflineReady:i,onRegistered:o,onRegisteredSW:s,onRegisterError:u}=e,d,f,ee,te=async(e=!0)=>{await f,c||ee?.()};async function ne(){if(`serviceWorker`in navigator){if(d=await a(async()=>{let{Workbox:e}=await import(`./workbox-window.prod.es5-Bd17z0YL.js`);return{Workbox:e}},[],import.meta.url).then(({Workbox:e})=>new e(`./sw.js`,{scope:`./`,type:`classic`})).catch(e=>{u?.(e)}),!d)return;if(ee=()=>{d?.messageSkipWaiting()},!l){if(c)d.addEventListener(`activated`,e=>{(e.isUpdate||e.isExternal)&&(n?n():window.location.reload())}),d.addEventListener(`installed`,e=>{e.isUpdate||i?.()});else{let e=!1,t=()=>{e=!0,d?.addEventListener(`controlling`,e=>{e.isUpdate&&(n?n():window.location.reload())}),r?.()};d.addEventListener(`installed`,n=>{n.isUpdate===void 0?n.isExternal===void 0?!e&&i?.():n.isExternal?t():!e&&i?.():n.isUpdate||i?.()}),d.addEventListener(`waiting`,t)}}d.register({immediate:t}).then(e=>{s?s(`./sw.js`,e):o?.(e)}).catch(e=>{u?.(e)})}}return f=ne(),te}var d=(e,t)=>t.some(t=>e instanceof t),f,ee;function te(){return f||(f=[IDBIndex,IDBObjectStore,IDBCursor,IDBDatabase,IDBTransaction])}function ne(){return ee||(ee=[`advance`,`continue`,`continuePrimaryKey`].map(e=>IDBCursor.prototype[e]))}var re=new WeakMap,ie=new WeakMap,ae=new WeakMap;function oe(e){let t=new Promise((t,n)=>{let r=()=>{e.removeEventListener(`success`,i),e.removeEventListener(`error`,a)},i=()=>{t(p(e.result)),r()},a=()=>{n(e.error),r()};e.addEventListener(`success`,i),e.addEventListener(`error`,a)});return ae.set(t,e),t}function se(e){if(re.has(e))return;let t=new Promise((t,n)=>{let r=()=>{e.removeEventListener(`complete`,i),e.removeEventListener(`error`,a),e.removeEventListener(`abort`,a)},i=()=>{t(),r()},a=()=>{n(e.error||new DOMException(`AbortError`,`AbortError`)),r()};e.addEventListener(`complete`,i),e.addEventListener(`error`,a),e.addEventListener(`abort`,a)});re.set(e,t)}var ce={get(e,t,n){if(e instanceof IDBTransaction){if(t===`done`)return re.get(e);if(t===`store`)return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return p(e[t])},set(e,t,n){return e[t]=n,!0},has(e,t){return e instanceof IDBTransaction&&(t===`done`||t===`store`)||t in e}};function le(e){ce=e(ce)}function ue(e){return ne().includes(e)?function(...t){return e.apply(fe(this),t),p(this.request)}:function(...t){return p(e.apply(fe(this),t))}}function de(e){return typeof e==`function`?ue(e):(e instanceof IDBTransaction&&se(e),d(e,te())?new Proxy(e,ce):e)}function p(e){if(e instanceof IDBRequest)return oe(e);if(ie.has(e))return ie.get(e);let t=de(e);return Object.is(t,e)||(ie.set(e,t),ae.set(t,e)),t}var fe=e=>ae.get(e);function pe(e,t,{blocked:n,upgrade:r,blocking:i,terminated:a}={}){let o=indexedDB.open(e,t),s=p(o);return r&&o.addEventListener(`upgradeneeded`,e=>{r(p(o.result),e.oldVersion,e.newVersion,p(o.transaction),e)}),n&&o.addEventListener(`blocked`,e=>n(e.oldVersion,e.newVersion,e)),s.then(e=>{a&&e.addEventListener(`close`,()=>a()),i&&e.addEventListener(`versionchange`,e=>i(e.oldVersion,e.newVersion,e))}).catch(()=>{}),s}var me=[`get`,`getKey`,`getAll`,`getAllKeys`,`count`],he=[`put`,`add`,`delete`,`clear`],ge={};function _e(e,t){if(!(e instanceof IDBDatabase&&!(t in e)&&typeof t==`string`))return;if(ge[t])return ge[t];let n=t.replace(/FromIndex$/,``),r=t!==n,i=he.includes(n);return!(n in(r?IDBIndex:IDBObjectStore).prototype)||!(i||me.includes(n))?void 0:ge[t]=async function(e,...t){let a=this.transaction(e,i?`readwrite`:`readonly`),o=a.store;return r&&(o=o.index(t.shift())),(await Promise.all([o[n](...t),i&&a.done]))[0]}}le(e=>({...e,get:(t,n,r)=>_e(t,n)||e.get(t,n,r),has:(t,n)=>!!_e(t,n)||e.has(t,n)}));var ve=[`advance`,`continue`,`continuePrimaryKey`],ye={},be=new WeakMap,xe=new WeakMap,Se={get(e,t){if(!ve.includes(t))return e[t];let n=ye[t];return n||(n=ye[t]=function(...e){be.set(this,xe.get(this)[t](...e))}),n}};async function*Ce(...e){let t=this;if(t instanceof IDBCursor||(t=await t.openCursor(...e)),!t)return;t=t;let n=new Proxy(t,Se);for(xe.set(n,t),ae.set(n,fe(t));t;)yield n,t=await(be.get(n)||t.continue()),be.delete(n)}function we(e,t){return t===Symbol.asyncIterator&&d(e,[IDBIndex,IDBObjectStore,IDBCursor])||t===`iterate`&&d(e,[IDBIndex,IDBObjectStore])}le(e=>({...e,get(t,n,r){return we(t,n)?Ce:e.get(t,n,r)},has(t,n){return we(t,n)||e.has(t,n)}}));var Te=`serenite`,Ee=`serenite_state_v1`,De=`state`,Oe=null,ke=()=>Oe||(Oe=pe(Te,1,{upgrade(e){e.objectStoreNames.contains(`kv`)||e.createObjectStore(`kv`)}})),Ae=Promise.resolve(),je=()=>{};function Me(e){je=e}function Ne(){try{let e=localStorage.getItem(Ee);return e?JSON.parse(e):null}catch{return null}}async function Pe(e,t){let n=null;try{n=await(await ke()).get(`kv`,De)}catch(e){console.error(`Lecture IndexedDB impossible`,e)}let r=[n,Ne()].filter(Boolean).sort((e,t)=>(t._savedAt||0)-(e._savedAt||0))[0];return r?{state:t(r),isFresh:!1}:{state:e(),isFresh:!0}}function Fe(e){return e._savedAt=Date.now(),JSON.parse(JSON.stringify(e))}function Ie(e){let t=Fe(e);try{localStorage.setItem(Ee,JSON.stringify(t))}catch{}return Ae=Ae.then(async()=>(await ke()).put(`kv`,t,De)).catch(e=>{console.error(`Erreur de sauvegarde`,e),je(e)}),Ae}function Le(e){return{...Fe(e),_export:{app:`forge-serenite`,at:new Date().toISOString()}}}async function Re(){try{localStorage.removeItem(Ee)}catch{}try{await(await ke()).clear(`kv`)}catch{}}async function ze(){try{navigator.storage?.persist&&await navigator.storage.persist()}catch{}}var m={state:null,ui:{tab:`home`,view:null,sheet:null,sessionOpen:!1,toast:null,programSeg:`plan`,progressSeg:`overview`}},Be=()=>{},Ve=!1;function He(e){Be=e}function Ue(){Ve||(Ve=!0,requestAnimationFrame(()=>{Ve=!1,Be()}))}function h(e){e(m.state),Ie(m.state),Ue()}function g(e){e(m.ui),Ue()}var We=null;function _(e,t=`info`){m.ui.toast={text:e,kind:t,id:Date.now()},Ue(),clearTimeout(We),We=setTimeout(()=>{m.ui.toast=null,Ue()},3200)}function Ge(e){g(t=>{t.tab=e,t.view=null,t.sheet=null}),window.scrollTo({top:0})}function v(e,t={}){g(n=>{n.view={name:e,...t},n.sheet=null}),window.scrollTo({top:0})}function Ke(){g(e=>{e.view=null})}function y(e,t={}){g(n=>{n.sheet={name:e,...t}})}function b(){g(e=>{e.sheet=null})}var qe=[`Dim`,`Lun`,`Mar`,`Mer`,`Jeu`,`Ven`,`Sam`],Je=[`Dimanche`,`Lundi`,`Mardi`,`Mercredi`,`Jeudi`,`Vendredi`,`Samedi`],Ye=[`D`,`L`,`M`,`M`,`J`,`V`,`S`];function Xe(e){return`${e.getFullYear()}-${String(e.getMonth()+1).padStart(2,`0`)}-${String(e.getDate()).padStart(2,`0`)}`}function x(){return Xe(new Date)}function S(e){let[t,n,r]=e.split(`-`).map(Number);return new Date(t,n-1,r)}function C(e,t){let n=S(e);return n.setDate(n.getDate()+t),Xe(n)}function Ze(e,t){return Math.round((S(t)-S(e))/864e5)}function Qe(e){return S(e).getDay()}function $e(e){let t=Qe(e);return C(e,t===0?-6:1-t)}function w(e){return S(e).toLocaleDateString(`fr-FR`,{day:`numeric`,month:`short`})}function et(e){return S(e).toLocaleDateString(`fr-FR`,{weekday:`long`,day:`numeric`,month:`long`})}function tt(){return{version:1,onboarded:!1,profile:{name:``,trainDays:[1,3,5]},health:{answered:!1,locations:[],since:``,when:[],aggravating:[],consulted:``,diagnosis:``,diagnosisText:``,limits:[],limitsText:``,redFlag:null,clearance:!1,acknowledged:!1,updatedAt:null},settings:{textSize:`large`,sound:!0,vibration:!0,notifications:!0,keepAwake:!0},phase:{current:1,history:[{n:1,from:x()}]},programStart:$e(x()),startedOn:x(),sessions:[],painLog:[],suspended:{},exState:{},nextLight:null,dismissed:{}}}function nt(e){let t=tt();return!e||typeof e!=`object`?t:{...t,...e,profile:{...t.profile,...e.profile},health:{...t.health,...e.health},settings:{...t.settings,...e.settings},phase:{...t.phase,...e.phase},version:1}}var rt=globalThis,it=e=>e,at=rt.trustedTypes,ot=at?at.createPolicy(`lit-html`,{createHTML:e=>e}):void 0,st=`$lit$`,T=`lit$${Math.random().toFixed(9).slice(2)}$`,ct=`?`+T,lt=`<${ct}>`,E=document,ut=()=>E.createComment(``),dt=e=>e===null||typeof e!=`object`&&typeof e!=`function`,ft=Array.isArray,pt=e=>ft(e)||typeof e?.[Symbol.iterator]==`function`,mt=`[ 	
\f\r]`,ht=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,gt=/-->/g,_t=/>/g,D=RegExp(`>|${mt}(?:([^\\s"'>=/]+)(${mt}*=${mt}*(?:[^ \t\n\f\r"'\`<>=]|("|')|))|$)`,`g`),vt=/'/g,yt=/"/g,bt=/^(?:script|style|textarea|title)$/i,xt=e=>(t,...n)=>({_$litType$:e,strings:t,values:n}),O=xt(1),St=xt(2),k=Symbol.for(`lit-noChange`),A=Symbol.for(`lit-nothing`),Ct=new WeakMap,j=E.createTreeWalker(E,129);function wt(e,t){if(!ft(e)||!e.hasOwnProperty(`raw`))throw Error(`invalid template strings array`);return ot===void 0?t:ot.createHTML(t)}var Tt=(e,t)=>{let n=e.length-1,r=[],i,a=t===2?`<svg>`:t===3?`<math>`:``,o=ht;for(let t=0;t<n;t++){let n=e[t],s,c,l=-1,u=0;for(;u<n.length&&(o.lastIndex=u,c=o.exec(n),c!==null);)u=o.lastIndex,o===ht?c[1]===`!--`?o=gt:c[1]===void 0?c[2]===void 0?c[3]!==void 0&&(o=D):(bt.test(c[2])&&(i=RegExp(`</`+c[2],`g`)),o=D):o=_t:o===D?c[0]===`>`?(o=i??ht,l=-1):c[1]===void 0?l=-2:(l=o.lastIndex-c[2].length,s=c[1],o=c[3]===void 0?D:c[3]===`"`?yt:vt):o===yt||o===vt?o=D:o===gt||o===_t?o=ht:(o=D,i=void 0);let d=o===D&&e[t+1].startsWith(`/>`)?` `:``;a+=o===ht?n+lt:l>=0?(r.push(s),n.slice(0,l)+st+n.slice(l)+T+d):n+T+(l===-2?t:d)}return[wt(e,a+(e[n]||`<?>`)+(t===2?`</svg>`:t===3?`</math>`:``)),r]},Et=class e{constructor({strings:t,_$litType$:n},r){let i;this.parts=[];let a=0,o=0,s=t.length-1,c=this.parts,[l,u]=Tt(t,n);if(this.el=e.createElement(l,r),j.currentNode=this.el.content,n===2||n===3){let e=this.el.content.firstChild;e.replaceWith(...e.childNodes)}for(;(i=j.nextNode())!==null&&c.length<s;){if(i.nodeType===1){if(i.hasAttributes())for(let e of i.getAttributeNames())if(e.endsWith(st)){let t=u[o++],n=i.getAttribute(e).split(T),r=/([.?@])?(.*)/.exec(t);c.push({type:1,index:a,name:r[2],strings:n,ctor:r[1]===`.`?At:r[1]===`?`?jt:r[1]===`@`?Mt:kt}),i.removeAttribute(e)}else e.startsWith(T)&&(c.push({type:6,index:a}),i.removeAttribute(e));if(bt.test(i.tagName)){let e=i.textContent.split(T),t=e.length-1;if(t>0){i.textContent=at?at.emptyScript:``;for(let n=0;n<t;n++)i.append(e[n],ut()),j.nextNode(),c.push({type:2,index:++a});i.append(e[t],ut())}}}else if(i.nodeType===8){if(i.data===ct)c.push({type:2,index:a});else{let e=-1;for(;(e=i.data.indexOf(T,e+1))!==-1;)c.push({type:7,index:a}),e+=T.length-1}}a++}}static createElement(e,t){let n=E.createElement(`template`);return n.innerHTML=e,n}};function M(e,t,n=e,r){if(t===k)return t;let i=r===void 0?n._$Cl:n._$Co?.[r],a=dt(t)?void 0:t._$litDirective$;return i?.constructor!==a&&(i?._$AO?.(!1),a===void 0?i=void 0:(i=new a(e),i._$AT(e,n,r)),r===void 0?n._$Cl=i:(n._$Co??(n._$Co=[]))[r]=i),i!==void 0&&(t=M(e,i._$AS(e,t.values),i,r)),t}var Dt=class{constructor(e,t){this._$AV=[],this._$AN=void 0,this._$AD=e,this._$AM=t}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(e){let{el:{content:t},parts:n}=this._$AD,r=(e?.creationScope??E).importNode(t,!0);j.currentNode=r;let i=j.nextNode(),a=0,o=0,s=n[0];for(;s!==void 0;){if(a===s.index){let t;s.type===2?t=new Ot(i,i.nextSibling,this,e):s.type===1?t=new s.ctor(i,s.name,s.strings,this,e):s.type===6&&(t=new Nt(i,this,e)),this._$AV.push(t),s=n[++o]}a!==s?.index&&(i=j.nextNode(),a++)}return j.currentNode=E,r}p(e){let t=0;for(let n of this._$AV)n!==void 0&&(n.strings===void 0?n._$AI(e[t]):(n._$AI(e,n,t),t+=n.strings.length-2)),t++}},Ot=class e{get _$AU(){return this._$AM?._$AU??this._$Cv}constructor(e,t,n,r){this.type=2,this._$AH=A,this._$AN=void 0,this._$AA=e,this._$AB=t,this._$AM=n,this.options=r,this._$Cv=r?.isConnected??!0}get parentNode(){let e=this._$AA.parentNode,t=this._$AM;return t!==void 0&&e?.nodeType===11&&(e=t.parentNode),e}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(e,t=this){e=M(this,e,t),dt(e)?e===A||e==null||e===``?(this._$AH!==A&&this._$AR(),this._$AH=A):e!==this._$AH&&e!==k&&this._(e):e._$litType$===void 0?e.nodeType===void 0?pt(e)?this.k(e):this._(e):this.T(e):this.$(e)}O(e){return this._$AA.parentNode.insertBefore(e,this._$AB)}T(e){this._$AH!==e&&(this._$AR(),this._$AH=this.O(e))}_(e){this._$AH!==A&&dt(this._$AH)?this._$AA.nextSibling.data=e:this.T(E.createTextNode(e)),this._$AH=e}$(e){let{values:t,_$litType$:n}=e,r=typeof n==`number`?this._$AC(e):(n.el===void 0&&(n.el=Et.createElement(wt(n.h,n.h[0]),this.options)),n);if(this._$AH?._$AD===r)this._$AH.p(t);else{let e=new Dt(r,this),n=e.u(this.options);e.p(t),this.T(n),this._$AH=e}}_$AC(e){let t=Ct.get(e.strings);return t===void 0&&Ct.set(e.strings,t=new Et(e)),t}k(t){ft(this._$AH)||(this._$AH=[],this._$AR());let n=this._$AH,r,i=0;for(let a of t)i===n.length?n.push(r=new e(this.O(ut()),this.O(ut()),this,this.options)):r=n[i],r._$AI(a),i++;i<n.length&&(this._$AR(r&&r._$AB.nextSibling,i),n.length=i)}_$AR(e=this._$AA.nextSibling,t){for(this._$AP?.(!1,!0,t);e!==this._$AB;){let t=it(e).nextSibling;it(e).remove(),e=t}}setConnected(e){this._$AM===void 0&&(this._$Cv=e,this._$AP?.(e))}},kt=class{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(e,t,n,r,i){this.type=1,this._$AH=A,this._$AN=void 0,this.element=e,this.name=t,this._$AM=r,this.options=i,n.length>2||n[0]!==``||n[1]!==``?(this._$AH=Array(n.length-1).fill(new String),this.strings=n):this._$AH=A}_$AI(e,t=this,n,r){let i=this.strings,a=!1;if(i===void 0)e=M(this,e,t,0),a=!dt(e)||e!==this._$AH&&e!==k,a&&(this._$AH=e);else{let r=e,o,s;for(e=i[0],o=0;o<i.length-1;o++)s=M(this,r[n+o],t,o),s===k&&(s=this._$AH[o]),a||(a=!dt(s)||s!==this._$AH[o]),s===A?e=A:e!==A&&(e+=(s??``)+i[o+1]),this._$AH[o]=s}a&&!r&&this.j(e)}j(e){e===A?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,e??``)}},At=class extends kt{constructor(){super(...arguments),this.type=3}j(e){this.element[this.name]=e===A?void 0:e}},jt=class extends kt{constructor(){super(...arguments),this.type=4}j(e){this.element.toggleAttribute(this.name,!!e&&e!==A)}},Mt=class extends kt{constructor(e,t,n,r,i){super(e,t,n,r,i),this.type=5}_$AI(e,t=this){if((e=M(this,e,t,0)??A)===k)return;let n=this._$AH,r=e===A&&n!==A||e.capture!==n.capture||e.once!==n.once||e.passive!==n.passive,i=e!==A&&(n===A||r);r&&this.element.removeEventListener(this.name,this,n),i&&this.element.addEventListener(this.name,this,e),this._$AH=e}handleEvent(e){typeof this._$AH==`function`?this._$AH.call(this.options?.host??this.element,e):this._$AH.handleEvent(e)}},Nt=class{constructor(e,t,n){this.element=e,this.type=6,this._$AN=void 0,this._$AM=t,this.options=n}get _$AU(){return this._$AM._$AU}_$AI(e){M(this,e)}},Pt=rt.litHtmlPolyfillSupport;Pt?.(Et,Ot),(rt.litHtmlVersions??(rt.litHtmlVersions=[])).push(`3.3.3`);var Ft=(e,t,n)=>{let r=n?.renderBefore??t,i=r._$litPart$;if(i===void 0){let e=n?.renderBefore??null;r._$litPart$=i=new Ot(t.insertBefore(ut(),e),e,void 0,n??{})}return i._$AI(e),i},It={ATTRIBUTE:1,CHILD:2,PROPERTY:3,BOOLEAN_ATTRIBUTE:4,EVENT:5,ELEMENT:6},Lt=e=>(...t)=>({_$litDirective$:e,values:t}),Rt=class{constructor(e){}get _$AU(){return this._$AM._$AU}_$AT(e,t,n){this._$Ct=e,this._$AM=t,this._$Ci=n}_$AS(e,t){return this.update(e,t)}update(e,t){return this.render(...t)}},zt=class extends Rt{constructor(e){if(super(e),this.it=A,e.type!==It.CHILD)throw Error(this.constructor.directiveName+`() can only be used in child bindings`)}render(e){if(e===A||e==null)return this._t=void 0,this.it=e;if(e===k)return e;if(typeof e!=`string`)throw Error(this.constructor.directiveName+`() called with a non-string value`);if(e===this.it)return this._t;this.it=e;let t=[e];return t.raw=t,this._t={_$litType$:this.constructor.resultType,strings:t,values:[]}}};zt.directiveName=`unsafeHTML`,zt.resultType=1;var Bt=class extends zt{};Bt.directiveName=`unsafeSVG`,Bt.resultType=2;var Vt=Lt(Bt),Ht={home:`
<svg
  class="lucide lucide-house"
  xmlns="http://www.w3.org/2000/svg"
  width="24"
  height="24"
  viewBox="0 0 24 24"
  fill="none"
  stroke="currentColor"
  stroke-width="2"
  stroke-linecap="round"
  stroke-linejoin="round"
>
  <path d="M15 21v-8a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v8" />
  <path d="M3 10a2 2 0 0 1 .709-1.528l7-6a2 2 0 0 1 2.582 0l7 6A2 2 0 0 1 21 10v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
</svg>
`,dumbbell:`
<svg
  class="lucide lucide-dumbbell"
  xmlns="http://www.w3.org/2000/svg"
  width="24"
  height="24"
  viewBox="0 0 24 24"
  fill="none"
  stroke="currentColor"
  stroke-width="2"
  stroke-linecap="round"
  stroke-linejoin="round"
>
  <path d="M17.596 12.768a2 2 0 1 0 2.829-2.829l-1.768-1.767a2 2 0 0 0 2.828-2.829l-2.828-2.828a2 2 0 0 0-2.829 2.828l-1.767-1.768a2 2 0 1 0-2.829 2.829z" />
  <path d="m2.5 21.5 1.4-1.4" />
  <path d="m20.1 3.9 1.4-1.4" />
  <path d="M5.343 21.485a2 2 0 1 0 2.829-2.828l1.767 1.768a2 2 0 1 0 2.829-2.829l-6.364-6.364a2 2 0 1 0-2.829 2.829l1.768 1.767a2 2 0 0 0-2.828 2.829z" />
  <path d="m9.6 14.4 4.8-4.8" />
</svg>
`,book:`
<svg
  class="lucide lucide-book-open"
  xmlns="http://www.w3.org/2000/svg"
  width="24"
  height="24"
  viewBox="0 0 24 24"
  fill="none"
  stroke="currentColor"
  stroke-width="2"
  stroke-linecap="round"
  stroke-linejoin="round"
>
  <path d="M12 5v16" />
  <path d="M20.001 19A2 2 0 0022 17V5a2 2 0 00-1.999-2L16 3.002A5 5 0 0012 5a5 5 0 00-4-2H4a2 2 0 00-2 2v12a2 2 0 001.999 2H8a5 5 0 014 2 5 5 0 014-2z" />
</svg>
`,chart:`
<svg
  class="lucide lucide-chart-line"
  xmlns="http://www.w3.org/2000/svg"
  width="24"
  height="24"
  viewBox="0 0 24 24"
  fill="none"
  stroke="currentColor"
  stroke-width="2"
  stroke-linecap="round"
  stroke-linejoin="round"
>
  <path d="M3 3v16a2 2 0 0 0 2 2h16" />
  <path d="m19 9-5 5-4-4-3 3" />
</svg>
`,user:`
<svg
  class="lucide lucide-user"
  xmlns="http://www.w3.org/2000/svg"
  width="24"
  height="24"
  viewBox="0 0 24 24"
  fill="none"
  stroke="currentColor"
  stroke-width="2"
  stroke-linecap="round"
  stroke-linejoin="round"
>
  <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2" />
  <circle cx="12" cy="7" r="4" />
</svg>
`,play:`
<svg
  class="lucide lucide-play"
  xmlns="http://www.w3.org/2000/svg"
  width="24"
  height="24"
  viewBox="0 0 24 24"
  fill="none"
  stroke="currentColor"
  stroke-width="2"
  stroke-linecap="round"
  stroke-linejoin="round"
>
  <path d="M5 5a2 2 0 0 1 3.008-1.728l11.997 6.998a2 2 0 0 1 .003 3.458l-12 7A2 2 0 0 1 5 19z" />
</svg>
`,pause:`
<svg
  class="lucide lucide-pause"
  xmlns="http://www.w3.org/2000/svg"
  width="24"
  height="24"
  viewBox="0 0 24 24"
  fill="none"
  stroke="currentColor"
  stroke-width="2"
  stroke-linecap="round"
  stroke-linejoin="round"
>
  <rect x="14" y="3" width="5" height="18" rx="1" />
  <rect x="5" y="3" width="5" height="18" rx="1" />
</svg>
`,timer:`
<svg
  class="lucide lucide-timer"
  xmlns="http://www.w3.org/2000/svg"
  width="24"
  height="24"
  viewBox="0 0 24 24"
  fill="none"
  stroke="currentColor"
  stroke-width="2"
  stroke-linecap="round"
  stroke-linejoin="round"
>
  <line x1="10" x2="14" y1="2" y2="2" />
  <line x1="12" x2="15" y1="14" y2="11" />
  <circle cx="12" cy="14" r="8" />
</svg>
`,flame:`
<svg
  class="lucide lucide-flame"
  xmlns="http://www.w3.org/2000/svg"
  width="24"
  height="24"
  viewBox="0 0 24 24"
  fill="none"
  stroke="currentColor"
  stroke-width="2"
  stroke-linecap="round"
  stroke-linejoin="round"
>
  <path d="M12 3q1 4 4 6.5t3 5.5a1 1 0 0 1-14 0 5 5 0 0 1 1-3 1 1 0 0 0 5 0c0-2-1.5-3-1.5-5q0-2 2.5-4" />
</svg>
`,search:`
<svg
  class="lucide lucide-search"
  xmlns="http://www.w3.org/2000/svg"
  width="24"
  height="24"
  viewBox="0 0 24 24"
  fill="none"
  stroke="currentColor"
  stroke-width="2"
  stroke-linecap="round"
  stroke-linejoin="round"
>
  <path d="m21 21-4.34-4.34" />
  <circle cx="11" cy="11" r="8" />
</svg>
`,swap:`
<svg
  class="lucide lucide-repeat-2"
  xmlns="http://www.w3.org/2000/svg"
  width="24"
  height="24"
  viewBox="0 0 24 24"
  fill="none"
  stroke="currentColor"
  stroke-width="2"
  stroke-linecap="round"
  stroke-linejoin="round"
>
  <path d="m2 9 3-3 3 3" />
  <path d="M13 18H7a2 2 0 0 1-2-2V6" />
  <path d="m22 15-3 3-3-3" />
  <path d="M11 6h6a2 2 0 0 1 2 2v10" />
</svg>
`,skip:`
<svg
  class="lucide lucide-skip-forward"
  xmlns="http://www.w3.org/2000/svg"
  width="24"
  height="24"
  viewBox="0 0 24 24"
  fill="none"
  stroke="currentColor"
  stroke-width="2"
  stroke-linecap="round"
  stroke-linejoin="round"
>
  <path d="M21 4v16" />
  <path d="M6.029 4.285A2 2 0 0 0 3 6v12a2 2 0 0 0 3.029 1.715l9.997-5.998a2 2 0 0 0 .003-3.432z" />
</svg>
`,plus:`
<svg
  class="lucide lucide-plus"
  xmlns="http://www.w3.org/2000/svg"
  width="24"
  height="24"
  viewBox="0 0 24 24"
  fill="none"
  stroke="currentColor"
  stroke-width="2"
  stroke-linecap="round"
  stroke-linejoin="round"
>
  <path d="M5 12h14" />
  <path d="M12 5v14" />
</svg>
`,minus:`
<svg
  class="lucide lucide-minus"
  xmlns="http://www.w3.org/2000/svg"
  width="24"
  height="24"
  viewBox="0 0 24 24"
  fill="none"
  stroke="currentColor"
  stroke-width="2"
  stroke-linecap="round"
  stroke-linejoin="round"
>
  <path d="M5 12h14" />
</svg>
`,check:`
<svg
  class="lucide lucide-check"
  xmlns="http://www.w3.org/2000/svg"
  width="24"
  height="24"
  viewBox="0 0 24 24"
  fill="none"
  stroke="currentColor"
  stroke-width="2"
  stroke-linecap="round"
  stroke-linejoin="round"
>
  <path d="M20 6 9 17l-5-5" />
</svg>
`,x:`
<svg
  class="lucide lucide-x"
  xmlns="http://www.w3.org/2000/svg"
  width="24"
  height="24"
  viewBox="0 0 24 24"
  fill="none"
  stroke="currentColor"
  stroke-width="2"
  stroke-linecap="round"
  stroke-linejoin="round"
>
  <path d="M18 6 6 18" />
  <path d="m6 6 12 12" />
</svg>
`,right:`
<svg
  class="lucide lucide-chevron-right"
  xmlns="http://www.w3.org/2000/svg"
  width="24"
  height="24"
  viewBox="0 0 24 24"
  fill="none"
  stroke="currentColor"
  stroke-width="2"
  stroke-linecap="round"
  stroke-linejoin="round"
>
  <path d="m9 18 6-6-6-6" />
</svg>
`,left:`
<svg
  class="lucide lucide-chevron-left"
  xmlns="http://www.w3.org/2000/svg"
  width="24"
  height="24"
  viewBox="0 0 24 24"
  fill="none"
  stroke="currentColor"
  stroke-width="2"
  stroke-linecap="round"
  stroke-linejoin="round"
>
  <path d="m15 18-6-6 6-6" />
</svg>
`,down:`
<svg
  class="lucide lucide-chevron-down"
  xmlns="http://www.w3.org/2000/svg"
  width="24"
  height="24"
  viewBox="0 0 24 24"
  fill="none"
  stroke="currentColor"
  stroke-width="2"
  stroke-linecap="round"
  stroke-linejoin="round"
>
  <path d="m6 9 6 6 6-6" />
</svg>
`,trophy:`
<svg
  class="lucide lucide-trophy"
  xmlns="http://www.w3.org/2000/svg"
  width="24"
  height="24"
  viewBox="0 0 24 24"
  fill="none"
  stroke="currentColor"
  stroke-width="2"
  stroke-linecap="round"
  stroke-linejoin="round"
>
  <path d="M10 14.66V17a1 1 0 0 1-1 1 2 2 0 0 0-2 2v2" />
  <path d="M14 14.66V17a1 1 0 0 0 1 1 2 2 0 0 1 2 2v2" />
  <path d="M17.916 10H19.5A2.5 2.5 0 0 0 22 7.5V5a1 1 0 0 0-1-1h-3" />
  <path d="M4 22h16" />
  <path d="M6 9a6 6 0 0 0 12 0V3a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1z" />
  <path d="M6.084 10H4.5A2.5 2.5 0 0 1 2 7.5V5a1 1 0 0 1 1-1h3" />
</svg>
`,scale:`
<svg
  class="lucide lucide-scale"
  xmlns="http://www.w3.org/2000/svg"
  width="24"
  height="24"
  viewBox="0 0 24 24"
  fill="none"
  stroke="currentColor"
  stroke-width="2"
  stroke-linecap="round"
  stroke-linejoin="round"
>
  <path d="M12 3v18" />
  <path d="m19 8 3 8a5 5 0 0 1-6 0zV7" />
  <path d="M3 7h1a17 17 0 0 0 8-2 17 17 0 0 0 8 2h1" />
  <path d="m5 8 3 8a5 5 0 0 1-6 0zV7" />
  <path d="M7 21h10" />
</svg>
`,calendar:`
<svg
  class="lucide lucide-calendar"
  xmlns="http://www.w3.org/2000/svg"
  width="24"
  height="24"
  viewBox="0 0 24 24"
  fill="none"
  stroke="currentColor"
  stroke-width="2"
  stroke-linecap="round"
  stroke-linejoin="round"
>
  <path d="M8 2v3" />
  <path d="M16 2v3" />
  <rect x="3" y="3" width="18" height="18" rx="2" />
  <path d="M3 9h18" />
</svg>
`,settings:`
<svg
  class="lucide lucide-settings"
  xmlns="http://www.w3.org/2000/svg"
  width="24"
  height="24"
  viewBox="0 0 24 24"
  fill="none"
  stroke="currentColor"
  stroke-width="2"
  stroke-linecap="round"
  stroke-linejoin="round"
>
  <path d="M9.671 4.136a2.34 2.34 0 0 1 4.659 0 2.34 2.34 0 0 0 3.319 1.915 2.34 2.34 0 0 1 2.33 4.033 2.34 2.34 0 0 0 0 3.831 2.34 2.34 0 0 1-2.33 4.033 2.34 2.34 0 0 0-3.319 1.915 2.34 2.34 0 0 1-4.659 0 2.34 2.34 0 0 0-3.32-1.915 2.34 2.34 0 0 1-2.33-4.033 2.34 2.34 0 0 0 0-3.831A2.34 2.34 0 0 1 6.35 6.051a2.34 2.34 0 0 0 3.319-1.915" />
  <circle cx="12" cy="12" r="3" />
</svg>
`,download:`
<svg
  class="lucide lucide-download"
  xmlns="http://www.w3.org/2000/svg"
  width="24"
  height="24"
  viewBox="0 0 24 24"
  fill="none"
  stroke="currentColor"
  stroke-width="2"
  stroke-linecap="round"
  stroke-linejoin="round"
>
  <path d="M12 15V3" />
  <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
  <path d="m7 10 5 5 5-5" />
</svg>
`,upload:`
<svg
  class="lucide lucide-upload"
  xmlns="http://www.w3.org/2000/svg"
  width="24"
  height="24"
  viewBox="0 0 24 24"
  fill="none"
  stroke="currentColor"
  stroke-width="2"
  stroke-linecap="round"
  stroke-linejoin="round"
>
  <path d="M12 3v12" />
  <path d="m17 8-5-5-5 5" />
  <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
</svg>
`,trash:`
<svg
  class="lucide lucide-trash"
  xmlns="http://www.w3.org/2000/svg"
  width="24"
  height="24"
  viewBox="0 0 24 24"
  fill="none"
  stroke="currentColor"
  stroke-width="2"
  stroke-linecap="round"
  stroke-linejoin="round"
>
  <path d="M10 11v6" />
  <path d="M14 11v6" />
  <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6" />
  <path d="M3 6h18" />
  <path d="M8 6V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2" />
</svg>
`,info:`
<svg
  class="lucide lucide-info"
  xmlns="http://www.w3.org/2000/svg"
  width="24"
  height="24"
  viewBox="0 0 24 24"
  fill="none"
  stroke="currentColor"
  stroke-width="2"
  stroke-linecap="round"
  stroke-linejoin="round"
>
  <circle cx="12" cy="12" r="10" />
  <path d="M12 16v-4" />
  <path d="M12 8h.01" />
</svg>
`,zap:`
<svg
  class="lucide lucide-zap"
  xmlns="http://www.w3.org/2000/svg"
  width="24"
  height="24"
  viewBox="0 0 24 24"
  fill="none"
  stroke="currentColor"
  stroke-width="2"
  stroke-linecap="round"
  stroke-linejoin="round"
>
  <path d="M15.914 4a1.5 1.5 0 00-2.474-1.561l-9 9A1.5 1.5 0 005.5 14h4.002a.5.5 0 01.471.666L8.086 20a1.5 1.5 0 002.475 1.56l9-9A1.5 1.5 0 0018.5 10h-3.997a.5.5 0 01-.472-.667z" />
</svg>
`,target:`
<svg
  class="lucide lucide-target"
  xmlns="http://www.w3.org/2000/svg"
  width="24"
  height="24"
  viewBox="0 0 24 24"
  fill="none"
  stroke="currentColor"
  stroke-width="2"
  stroke-linecap="round"
  stroke-linejoin="round"
>
  <circle cx="12" cy="12" r="10" />
  <circle cx="12" cy="12" r="6" />
  <circle cx="12" cy="12" r="2" />
</svg>
`,clock:`
<svg
  class="lucide lucide-clock"
  xmlns="http://www.w3.org/2000/svg"
  width="24"
  height="24"
  viewBox="0 0 24 24"
  fill="none"
  stroke="currentColor"
  stroke-width="2"
  stroke-linecap="round"
  stroke-linejoin="round"
>
  <circle cx="12" cy="12" r="10" />
  <path d="M12 6v6l4 2" />
</svg>
`,up:`
<svg
  class="lucide lucide-trending-up"
  xmlns="http://www.w3.org/2000/svg"
  width="24"
  height="24"
  viewBox="0 0 24 24"
  fill="none"
  stroke="currentColor"
  stroke-width="2"
  stroke-linecap="round"
  stroke-linejoin="round"
>
  <path d="M16 7h6v6" />
  <path d="m22 7-8.5 8.5-5-5L2 17" />
</svg>
`,downtrend:`
<svg
  class="lucide lucide-trending-down"
  xmlns="http://www.w3.org/2000/svg"
  width="24"
  height="24"
  viewBox="0 0 24 24"
  fill="none"
  stroke="currentColor"
  stroke-width="2"
  stroke-linecap="round"
  stroke-linejoin="round"
>
  <path d="M16 17h6v-6" />
  <path d="m22 17-8.5-8.5-5 5L2 7" />
</svg>
`,moon:`
<svg
  class="lucide lucide-moon"
  xmlns="http://www.w3.org/2000/svg"
  width="24"
  height="24"
  viewBox="0 0 24 24"
  fill="none"
  stroke="currentColor"
  stroke-width="2"
  stroke-linecap="round"
  stroke-linejoin="round"
>
  <path d="M20.985 12.486a9 9 0 1 1-9.473-9.472c.405-.022.617.46.402.803a6 6 0 0 0 8.268 8.268c.344-.215.825-.004.803.401" />
</svg>
`,sun:`
<svg
  class="lucide lucide-sun"
  xmlns="http://www.w3.org/2000/svg"
  width="24"
  height="24"
  viewBox="0 0 24 24"
  fill="none"
  stroke="currentColor"
  stroke-width="2"
  stroke-linecap="round"
  stroke-linejoin="round"
>
  <circle cx="12" cy="12" r="4" />
  <path d="M12 2v2" />
  <path d="M12 20v2" />
  <path d="m4.93 4.93 1.41 1.41" />
  <path d="m17.66 17.66 1.41 1.41" />
  <path d="M2 12h2" />
  <path d="M20 12h2" />
  <path d="m6.34 17.66-1.41 1.41" />
  <path d="m19.07 4.93-1.41 1.41" />
</svg>
`,sound:`
<svg
  class="lucide lucide-volume-2"
  xmlns="http://www.w3.org/2000/svg"
  width="24"
  height="24"
  viewBox="0 0 24 24"
  fill="none"
  stroke="currentColor"
  stroke-width="2"
  stroke-linecap="round"
  stroke-linejoin="round"
>
  <path d="M11 4.702a.705.705 0 0 0-1.203-.498L6.413 7.587A1.4 1.4 0 0 1 5.416 8H3a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h2.416a1.4 1.4 0 0 1 .997.413l3.383 3.384A.705.705 0 0 0 11 19.298z" />
  <path d="M16 9a5 5 0 0 1 0 6" />
  <path d="M19.364 18.364a9 9 0 0 0 0-12.728" />
</svg>
`,vibrate:`
<svg
  class="lucide lucide-vibrate"
  xmlns="http://www.w3.org/2000/svg"
  width="24"
  height="24"
  viewBox="0 0 24 24"
  fill="none"
  stroke="currentColor"
  stroke-width="2"
  stroke-linecap="round"
  stroke-linejoin="round"
>
  <path d="m2 8 2 2-2 2 2 2-2 2" />
  <path d="m22 8-2 2 2 2-2 2 2 2" />
  <rect width="8" height="14" x="8" y="5" rx="1" />
</svg>
`,bell:`
<svg
  class="lucide lucide-bell"
  xmlns="http://www.w3.org/2000/svg"
  width="24"
  height="24"
  viewBox="0 0 24 24"
  fill="none"
  stroke="currentColor"
  stroke-width="2"
  stroke-linecap="round"
  stroke-linejoin="round"
>
  <path d="M10.268 21a2 2 0 0 0 3.464 0" />
  <path d="M3.262 15.326A1 1 0 0 0 4 17h16a1 1 0 0 0 .74-1.673C19.41 13.956 18 12.499 18 8A6 6 0 0 0 6 8c0 4.499-1.411 5.956-2.738 7.326" />
</svg>
`,ruler:`
<svg
  class="lucide lucide-ruler"
  xmlns="http://www.w3.org/2000/svg"
  width="24"
  height="24"
  viewBox="0 0 24 24"
  fill="none"
  stroke="currentColor"
  stroke-width="2"
  stroke-linecap="round"
  stroke-linejoin="round"
>
  <path d="M21.3 15.3a2.4 2.4 0 0 1 0 3.4l-2.6 2.6a2.4 2.4 0 0 1-3.4 0L2.7 8.7a2.41 2.41 0 0 1 0-3.4l2.6-2.6a2.41 2.41 0 0 1 3.4 0Z" />
  <path d="m14.5 12.5 2-2" />
  <path d="m11.5 9.5 2-2" />
  <path d="m8.5 6.5 2-2" />
  <path d="m17.5 15.5 2-2" />
</svg>
`,camera:`
<svg
  class="lucide lucide-camera"
  xmlns="http://www.w3.org/2000/svg"
  width="24"
  height="24"
  viewBox="0 0 24 24"
  fill="none"
  stroke="currentColor"
  stroke-width="2"
  stroke-linecap="round"
  stroke-linejoin="round"
>
  <path d="M13.997 4a2 2 0 0 1 1.76 1.05l.486.9A2 2 0 0 0 18.003 7H20a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V9a2 2 0 0 1 2-2h1.997a2 2 0 0 0 1.759-1.048l.489-.904A2 2 0 0 1 10.004 4z" />
  <circle cx="12" cy="13" r="3" />
</svg>
`,lr:`
<svg
  class="lucide lucide-arrow-left-right"
  xmlns="http://www.w3.org/2000/svg"
  width="24"
  height="24"
  viewBox="0 0 24 24"
  fill="none"
  stroke="currentColor"
  stroke-width="2"
  stroke-linecap="round"
  stroke-linejoin="round"
>
  <path d="M8 3 4 7l4 4" />
  <path d="M4 7h16" />
  <path d="m16 21 4-4-4-4" />
  <path d="M20 17H4" />
</svg>
`,listplus:`
<svg
  class="lucide lucide-list-plus"
  xmlns="http://www.w3.org/2000/svg"
  width="24"
  height="24"
  viewBox="0 0 24 24"
  fill="none"
  stroke="currentColor"
  stroke-width="2"
  stroke-linecap="round"
  stroke-linejoin="round"
>
  <path d="M16 5H3" />
  <path d="M11 12H3" />
  <path d="M16 19H3" />
  <path d="M18 9v6" />
  <path d="M21 12h-6" />
</svg>
`,history:`
<svg
  class="lucide lucide-rotate-ccw-clock"
  xmlns="http://www.w3.org/2000/svg"
  width="24"
  height="24"
  viewBox="0 0 24 24"
  fill="none"
  stroke="currentColor"
  stroke-width="2"
  stroke-linecap="round"
  stroke-linejoin="round"
>
  <path d="M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8" />
  <path d="M3 3v5h5" />
  <path d="M12 7v5l4 2" />
</svg>
`,activity:`
<svg
  class="lucide lucide-activity"
  xmlns="http://www.w3.org/2000/svg"
  width="24"
  height="24"
  viewBox="0 0 24 24"
  fill="none"
  stroke="currentColor"
  stroke-width="2"
  stroke-linecap="round"
  stroke-linejoin="round"
>
  <path d="M22 12h-2.48a2 2 0 0 0-1.93 1.46l-2.35 8.36a.25.25 0 0 1-.48 0L9.24 2.18a.25.25 0 0 0-.48 0l-2.35 8.36A2 2 0 0 1 4.49 12H2" />
</svg>
`,heart:`
<svg
  class="lucide lucide-heart-pulse"
  xmlns="http://www.w3.org/2000/svg"
  width="24"
  height="24"
  viewBox="0 0 24 24"
  fill="none"
  stroke="currentColor"
  stroke-width="2"
  stroke-linecap="round"
  stroke-linejoin="round"
>
  <path d="M2 9.5a5.5 5.5 0 0 1 9.591-3.676.56.56 0 0 0 .818 0A5.49 5.49 0 0 1 22 9.5c0 2.29-1.5 4-3 5.5l-5.492 5.313a2 2 0 0 1-3 .019L5 15c-1.5-1.5-3-3.2-3-5.5" />
  <path d="M3.22 13H9.5l.5-1 2 4.5 2-7 1.5 3.5h5.27" />
</svg>
`,offline:`
<svg
  class="lucide lucide-wifi-off"
  xmlns="http://www.w3.org/2000/svg"
  width="24"
  height="24"
  viewBox="0 0 24 24"
  fill="none"
  stroke="currentColor"
  stroke-width="2"
  stroke-linecap="round"
  stroke-linejoin="round"
>
  <path d="M12 20h.01" />
  <path d="M8.5 16.429a5 5 0 0 1 7 0" />
  <path d="M5 12.859a10 10 0 0 1 5.17-2.69" />
  <path d="M19 12.859a10 10 0 0 0-2.007-1.523" />
  <path d="M2 8.82a15 15 0 0 1 4.177-2.643" />
  <path d="M22 8.82a15 15 0 0 0-11.288-3.764" />
  <path d="m2 2 20 20" />
</svg>
`,done:`
<svg
  class="lucide lucide-circle-check"
  xmlns="http://www.w3.org/2000/svg"
  width="24"
  height="24"
  viewBox="0 0 24 24"
  fill="none"
  stroke="currentColor"
  stroke-width="2"
  stroke-linecap="round"
  stroke-linejoin="round"
>
  <circle cx="12" cy="12" r="10" />
  <path d="m16 9-5.5 5.5L8 12" />
</svg>
`,bulb:`
<svg
  class="lucide lucide-lightbulb"
  xmlns="http://www.w3.org/2000/svg"
  width="24"
  height="24"
  viewBox="0 0 24 24"
  fill="none"
  stroke="currentColor"
  stroke-width="2"
  stroke-linecap="round"
  stroke-linejoin="round"
>
  <path d="M15 14c.2-1 .7-1.7 1.5-2.5 1-.9 1.5-2.2 1.5-3.5A6 6 0 0 0 6 8c0 1 .2 2.2 1.5 3.5.7.7 1.3 1.5 1.5 2.5" />
  <path d="M9 18h6" />
  <path d="M10 22h4" />
</svg>
`,alert:`
<svg
  class="lucide lucide-triangle-alert"
  xmlns="http://www.w3.org/2000/svg"
  width="24"
  height="24"
  viewBox="0 0 24 24"
  fill="none"
  stroke="currentColor"
  stroke-width="2"
  stroke-linecap="round"
  stroke-linejoin="round"
>
  <path d="m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3" />
  <path d="M12 9v4" />
  <path d="M12 17h.01" />
</svg>
`,wind:`
<svg
  class="lucide lucide-wind"
  xmlns="http://www.w3.org/2000/svg"
  width="24"
  height="24"
  viewBox="0 0 24 24"
  fill="none"
  stroke="currentColor"
  stroke-width="2"
  stroke-linecap="round"
  stroke-linejoin="round"
>
  <path d="M12.8 19.6A2 2 0 1 0 14 16H2" />
  <path d="M17.5 8a2.5 2.5 0 1 1 2 4H2" />
  <path d="M9.8 4.4A2 2 0 1 1 11 8H2" />
</svg>
`,steps:`
<svg
  class="lucide lucide-footprints"
  xmlns="http://www.w3.org/2000/svg"
  width="24"
  height="24"
  viewBox="0 0 24 24"
  fill="none"
  stroke="currentColor"
  stroke-width="2"
  stroke-linecap="round"
  stroke-linejoin="round"
>
  <path d="M4 16v-2.38C4 11.5 2.97 10.5 3 8c.03-2.72 1.49-6 4.5-6C9.37 2 10 3.8 10 5.5c0 3.11-2 5.66-2 8.68V16a2 2 0 1 1-4 0Z" />
  <path d="M20 20v-2.38c0-2.12 1.03-3.12 1-5.62-.03-2.72-1.49-6-4.5-6C14.63 6 14 7.8 14 9.5c0 3.11 2 5.66 2 8.68V20a2 2 0 1 0 4 0Z" />
  <path d="M16 17h4" />
  <path d="M4 13h4" />
</svg>
`,layers:`
<svg
  class="lucide lucide-layers"
  xmlns="http://www.w3.org/2000/svg"
  width="24"
  height="24"
  viewBox="0 0 24 24"
  fill="none"
  stroke="currentColor"
  stroke-width="2"
  stroke-linecap="round"
  stroke-linejoin="round"
>
  <path d="M12.83 2.18a2 2 0 0 0-1.66 0L2.6 6.08a1 1 0 0 0 0 1.83l8.58 3.91a2 2 0 0 0 1.66 0l8.58-3.9a1 1 0 0 0 0-1.83z" />
  <path d="M2 12a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 12" />
  <path d="M2 17a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 17" />
</svg>
`,edit:`
<svg
  class="lucide lucide-pencil"
  xmlns="http://www.w3.org/2000/svg"
  width="24"
  height="24"
  viewBox="0 0 24 24"
  fill="none"
  stroke="currentColor"
  stroke-width="2"
  stroke-linecap="round"
  stroke-linejoin="round"
>
  <path d="M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z" />
  <path d="m15 5 4 4" />
</svg>
`,copy:`
<svg
  class="lucide lucide-copy"
  xmlns="http://www.w3.org/2000/svg"
  width="24"
  height="24"
  viewBox="0 0 24 24"
  fill="none"
  stroke="currentColor"
  stroke-width="2"
  stroke-linecap="round"
  stroke-linejoin="round"
>
  <rect width="14" height="14" x="8" y="8" rx="2" ry="2" />
  <path d="M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2" />
</svg>
`,more:`
<svg
  class="lucide lucide-ellipsis"
  xmlns="http://www.w3.org/2000/svg"
  width="24"
  height="24"
  viewBox="0 0 24 24"
  fill="none"
  stroke="currentColor"
  stroke-width="2"
  stroke-linecap="round"
  stroke-linejoin="round"
>
  <circle cx="12" cy="12" r="1" />
  <circle cx="19" cy="12" r="1" />
  <circle cx="5" cy="12" r="1" />
</svg>
`,arrowup:`
<svg
  class="lucide lucide-arrow-up"
  xmlns="http://www.w3.org/2000/svg"
  width="24"
  height="24"
  viewBox="0 0 24 24"
  fill="none"
  stroke="currentColor"
  stroke-width="2"
  stroke-linecap="round"
  stroke-linejoin="round"
>
  <path d="m5 12 7-7 7 7" />
  <path d="M12 19V5" />
</svg>
`,arrowdown:`
<svg
  class="lucide lucide-arrow-down"
  xmlns="http://www.w3.org/2000/svg"
  width="24"
  height="24"
  viewBox="0 0 24 24"
  fill="none"
  stroke="currentColor"
  stroke-width="2"
  stroke-linecap="round"
  stroke-linejoin="round"
>
  <path d="M12 5v14" />
  <path d="m19 12-7 7-7-7" />
</svg>
`,reset:`
<svg
  class="lucide lucide-rotate-ccw"
  xmlns="http://www.w3.org/2000/svg"
  width="24"
  height="24"
  viewBox="0 0 24 24"
  fill="none"
  stroke="currentColor"
  stroke-width="2"
  stroke-linecap="round"
  stroke-linejoin="round"
>
  <path d="M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8" />
  <path d="M3 3v5h5" />
</svg>
`,award:`
<svg
  class="lucide lucide-award"
  xmlns="http://www.w3.org/2000/svg"
  width="24"
  height="24"
  viewBox="0 0 24 24"
  fill="none"
  stroke="currentColor"
  stroke-width="2"
  stroke-linecap="round"
  stroke-linejoin="round"
>
  <path d="m15.477 12.89 1.515 8.526a.5.5 0 0 1-.81.47l-3.58-2.687a1 1 0 0 0-1.197 0l-3.586 2.686a.5.5 0 0 1-.81-.469l1.514-8.526" />
  <circle cx="12" cy="8" r="6" />
</svg>
`,minimize:`
<svg
  class="lucide lucide-minimize-2"
  xmlns="http://www.w3.org/2000/svg"
  width="24"
  height="24"
  viewBox="0 0 24 24"
  fill="none"
  stroke="currentColor"
  stroke-width="2"
  stroke-linecap="round"
  stroke-linejoin="round"
>
  <path d="m14 10 7-7" />
  <path d="M20 10h-6V4" />
  <path d="m3 21 7-7" />
  <path d="M4 14h6v6" />
</svg>
`,flag:`
<svg
  class="lucide lucide-flag"
  xmlns="http://www.w3.org/2000/svg"
  width="24"
  height="24"
  viewBox="0 0 24 24"
  fill="none"
  stroke="currentColor"
  stroke-width="2"
  stroke-linecap="round"
  stroke-linejoin="round"
>
  <path d="M4 22V4a1 1 0 0 1 .4-.8A6 6 0 0 1 8 2c3 0 5 2 7.333 2q2 0 3.067-.8A1 1 0 0 1 20 4v10a1 1 0 0 1-.4.8A6 6 0 0 1 16 16c-3 0-5-2-8-2a6 6 0 0 0-4 1.528" />
</svg>
`,phone:`
<svg
  class="lucide lucide-smartphone"
  xmlns="http://www.w3.org/2000/svg"
  width="24"
  height="24"
  viewBox="0 0 24 24"
  fill="none"
  stroke="currentColor"
  stroke-width="2"
  stroke-linecap="round"
  stroke-linejoin="round"
>
  <rect width="14" height="20" x="5" y="2" rx="2" ry="2" />
  <path d="M12 18h.01" />
</svg>
`,shield:`
<svg
  class="lucide lucide-shield-alert"
  xmlns="http://www.w3.org/2000/svg"
  width="24"
  height="24"
  viewBox="0 0 24 24"
  fill="none"
  stroke="currentColor"
  stroke-width="2"
  stroke-linecap="round"
  stroke-linejoin="round"
>
  <path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z" />
  <path d="M12 8v4" />
  <path d="M12 16h.01" />
</svg>
`,image:`
<svg
  class="lucide lucide-image"
  xmlns="http://www.w3.org/2000/svg"
  width="24"
  height="24"
  viewBox="0 0 24 24"
  fill="none"
  stroke="currentColor"
  stroke-width="2"
  stroke-linecap="round"
  stroke-linejoin="round"
>
  <rect width="18" height="18" x="3" y="3" rx="2" ry="2" />
  <circle cx="9" cy="9" r="2" />
  <path d="m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21" />
</svg>
`,sparkles:`
<svg
  class="lucide lucide-sparkles"
  xmlns="http://www.w3.org/2000/svg"
  width="24"
  height="24"
  viewBox="0 0 24 24"
  fill="none"
  stroke="currentColor"
  stroke-width="2"
  stroke-linecap="round"
  stroke-linejoin="round"
>
  <path d="M11.017 2.814a1 1 0 0 1 1.966 0l1.051 5.558a2 2 0 0 0 1.594 1.594l5.558 1.051a1 1 0 0 1 0 1.966l-5.558 1.051a2 2 0 0 0-1.594 1.594l-1.051 5.558a1 1 0 0 1-1.966 0l-1.051-5.558a2 2 0 0 0-1.594-1.594l-5.558-1.051a1 1 0 0 1 0-1.966l5.558-1.051a2 2 0 0 0 1.594-1.594z" />
  <path d="M20 2v4" />
  <path d="M22 4h-4" />
  <circle cx="4" cy="20" r="2" />
</svg>
`},Ut=new Map;function N(e,t=20){let n=e+t;if(!Ut.has(n)){let r=(Ht[e]||Ht.info).replace(/width="24"/,`width="${t}"`).replace(/height="24"/,`height="${t}"`).replace(/class="[^"]*"/,`class="ic" aria-hidden="true"`);Ut.set(n,r)}return Vt(Ut.get(n))}var Wt=[{n:1,name:`Initiation`,weeks:[1,4],goal:`Découvrir les machines, apprendre la posture et la respiration. Aucune recherche de performance.`,sets:{ok:1,adapt:1},reps:`10-12`,rest:90,cardio:[5,10],warmup:5,calm:3},{n:2,name:`Renforcement`,weeks:[5,8],goal:`Gagner en maîtrise, 1 à 2 séries selon vos capacités, charges toujours légères.`,sets:{ok:2,adapt:1},reps:`10-12`,rest:90,cardio:[10,15],warmup:5,calm:4},{n:3,name:`Consolidation`,weeks:[9,12],goal:`2 séries par exercice, une 3e possible sur les exercices faciles. Stabilité et coordination.`,sets:{ok:2,adapt:2},reps:`10-12`,rest:90,cardio:[12,20],warmup:5,calm:5}],P=Object.fromEntries(Wt.map(e=>[e.n,e])),Gt=[{id:`A`,title:`Renforcement général`,short:`Corps entier`,intro:`Une séance pour renforcer tout le corps en douceur.`,steps:[{type:`warmup`,exId:`velo_semi`},{type:`strength`,exId:`chest_press`},{type:`strength`,exId:`leg_curl`},{type:`strength`,exId:`abduction`},{type:`strength`,exId:`biceps_curl`},{type:`cardio`,exId:`tapis`},{type:`calm`,exId:`retour_calme`}]},{id:`B`,title:`Jambes et stabilité`,short:`Jambes`,intro:`Des jambes plus fortes et un meilleur équilibre au quotidien.`,steps:[{type:`warmup`,exId:`velo`},{type:`strength`,exId:`leg_press`},{type:`strength`,exId:`leg_curl`},{type:`strength`,exId:`abduction`},{type:`balance`,exId:`equilibre`},{type:`cardio`,exId:`tapis`},{type:`calm`,exId:`retour_calme`}]},{id:`C`,title:`Haut du corps adapté`,short:`Haut du corps`,intro:`Bras et pectoraux, en respectant votre dos : chaque exercice seulement s’il est indolore.`,steps:[{type:`warmup`,exId:`velo_semi`},{type:`strength`,exId:`chest_press`},{type:`strength`,exId:`tirage`},{type:`strength`,exId:`biceps_curl`},{type:`strength`,exId:`triceps`},{type:`cardio`,exId:`velo_semi`},{type:`calm`,exId:`retour_calme`}]}],F=Object.fromEntries(Gt.map(e=>[e.id,e])),Kt=[`A`,`B`,`C`],qt=[`leg_curl`,`abduction`,`biceps_curl`],Jt={warmup:`Échauffement`,strength:`Renforcement`,balance:`Équilibre`,cardio:`Cardio doux`,calm:`Retour au calme`},I=(e,t)=>({id:e,...t}),Yt=[I(`velo_semi`,{name:`Vélo semi-allongé`,machine:`Zone cardio : vélo avec un grand siège et un dossier (« vélo couché »).`,kind:`cardio`,p:[`quads`,`glutes`],s:[`hamstrings`,`calves`],musclesText:`Cuisses, fessiers, mollets. Cœur et respiration.`,level:1,media:`photo`,setup:`Asseyez-vous bien au fond du siège, le dos contre le dossier, les pieds sur les pédales et les mains posées sur les poignées latérales.`,steps:[`Démarrez en pédalant tranquillement : l’écran s’allume tout seul.`,`Choisissez le programme « Manuel » ou « Démarrage rapide ».`,`Gardez une résistance faible (niveau 1 à 3) et un rythme régulier.`,`Vous devez pouvoir parler en faisant des phrases complètes.`,`Pour finir, ralentissez pendant la dernière minute.`],breath:`Respirez calmement par le nez et la bouche. Si vous ne pouvez plus parler, ralentissez.`,settings:[`Siège : avancez ou reculez-le pour qu’en bas du coup de pédale votre jambe soit presque tendue, le genou légèrement plié.`,`Sangles : glissez l’avant du pied sous la sangle de chaque pédale.`,`Résistance : 1 à 3 au début.`],errors:[`Siège trop près : les genoux remontent trop haut.`,`Résistance trop forte dès le départ.`,`Épaules crispées sur les poignées.`],easier:`Pédalez plus lentement, résistance au minimum.`,alternative:`Vélo classique avec le guidon réglé haut, ou marche lente sur tapis.`,back:{status:`ok`,text:`Le dossier soutient le dos. Relâchez les épaules et la nuque, mains posées sans serrer.`}}),I(`velo`,{name:`Vélo classique`,machine:`Zone cardio : vélo d’appartement droit.`,kind:`cardio`,p:[`quads`,`glutes`],s:[`hamstrings`,`calves`],musclesText:`Cuisses, fessiers, mollets. Cœur et respiration.`,level:1,media:`photo`,setup:`Selle réglée, assise bien droite, mains posées sur la partie haute du guidon.`,steps:[`Pédalez doucement pour allumer l’écran, programme « Manuel ».`,`Résistance faible, rythme régulier.`,`Restez le buste droit, sans vous pencher sur le guidon.`,`Ralentissez pendant la dernière minute.`],breath:`Respiration calme : vous devez pouvoir parler.`,settings:[`Hauteur de selle : à hauteur de votre hanche quand vous êtes debout à côté du vélo.`,`Guidon : en position haute pour garder le buste droit.`,`Résistance : 1 à 3.`],errors:[`Buste penché en avant (charge le haut du dos et la nuque).`,`Selle trop basse.`,`Pédaler trop vite.`],easier:`Résistance au minimum et pédalage lent.`,alternative:`Vélo semi-allongé ou marche lente sur tapis.`,back:{status:`ok`,text:`Gardez le buste droit et les épaules relâchées. Si une gêne apparaît dans le haut du dos, préférez le vélo semi-allongé.`}}),I(`tapis`,{name:`Marche sur tapis`,machine:`Zone cardio : tapis de course, utilisé en marche.`,kind:`cardio`,p:[`quads`,`glutes`,`calves`],s:[`hamstrings`],musclesText:`Jambes, fessiers. Cœur et respiration.`,level:1,media:`photo`,setup:`Debout sur les bandes latérales (pas sur le tapis), mains sur les barres, clip de sécurité accroché à vos vêtements.`,steps:[`Repérez le gros bouton rouge d’arrêt et le clip de sécurité avant de démarrer.`,`Appuyez sur « Démarrer » : le tapis part très lentement.`,`Montez sur le tapis en marchant, puis augmentez doucement la vitesse.`,`Marchez au milieu du tapis, regard devant vous.`,`Pour finir, baissez la vitesse puis appuyez sur « Stop » avant de descendre.`],breath:`Respiration naturelle. Vous devez pouvoir parler facilement.`,settings:[`Vitesse : 2,5 à 4,5 km/h selon votre confort.`,`Inclinaison : 0 % au début.`,`Clip de sécurité toujours accroché.`],errors:[`Monter sur le tapis déjà en mouvement rapide.`,`Se cramponner aux barres en haussant les épaules.`,`Regarder ses pieds.`],easier:`Vitesse plus lente (2 à 3 km/h), mains posées légèrement sur les barres.`,alternative:`Vélo semi-allongé.`,back:{status:`ok`,text:`Bras relâchés le long du corps. Si vous tenez les barres, posez les mains sans serrer et sans monter les épaules.`}}),I(`chest_press`,{name:`Chest Press assis`,machine:`Zone machines : presse pectorale assise avec dossier (« Chest Press »).`,kind:`strength`,p:[`chest`],s:[`triceps`,`delts_front`],musclesText:`Pectoraux, à l’arrière des bras (triceps), avant des épaules.`,level:2,media:`photo`,setup:`Assise, le dos et l’arrière de la tête contre le dossier, pieds à plat au sol, mains sur les poignées à hauteur du milieu de la poitrine.`,steps:[`Réglez le siège et la charge (voir « Réglages ») avant de vous asseoir.`,`Épaules basses et collées au dossier.`,`Poussez les poignées devant vous en soufflant, sans tendre les coudes à fond.`,`Revenez lentement en inspirant.`,`Arrêtez le retour avant que vos coudes passent derrière votre buste.`],breath:`Soufflez en poussant, inspirez en revenant. Ne bloquez jamais votre respiration.`,settings:[`Hauteur du siège : les poignées arrivent au milieu de la poitrine, jamais au-dessus des épaules.`,`Si la machine a un levier ou une pédale de départ, utilisez-le pour que les poignées démarrent près de vous sans tirer les épaules en arrière.`,`Charge : la plus légère au début (goupille tout en haut de la pile).`],errors:[`Siège trop bas (poignées trop hautes).`,`Décoller le dos ou la tête du dossier.`,`Laisser revenir les poignées loin derrière (épaules tirées).`,`Hausser les épaules.`],easier:`Amplitude plus courte : ne revenez qu’à mi-chemin, charge minimale.`,alternative:`Pompes debout contre un mur, si elles sont indolores.`,back:{status:`adapt`,text:`À adapter : amplitude réduite, épaules basses, dos et tête en appui. Arrêtez immédiatement si une douleur apparaît entre les omoplates ou dans la nuque.`}}),I(`leg_curl`,{name:`Leg Curl assis`,machine:`Zone machines : « Leg Curl » assis, avec un boudin sous les mollets et une cale sur les cuisses.`,kind:`strength`,p:[`hamstrings`],s:[`calves`],musclesText:`Arrière des cuisses (ischio-jambiers).`,level:1,media:`photo`,setup:`Assise, le dos contre le dossier, les jambes tendues sur le boudin, la cale serrée sur le haut des cuisses, mains sur les poignées.`,steps:[`Vérifiez que vos genoux sont en face de l’axe de la machine (souvent marqué par un point de couleur).`,`Poussez le boudin vers le bas en ramenant les talons sous le siège, en soufflant.`,`Marquez un court temps.`,`Remontez lentement en inspirant, sans laisser la charge retomber.`],breath:`Soufflez en pliant les jambes, inspirez en les tendant.`,settings:[`Dossier : réglez-le pour que vos genoux soient alignés avec l’axe de rotation.`,`Boudin des jambes : juste au-dessus des talons.`,`Cale des cuisses : bien serrée mais sans faire mal.`,`Charge : la plus légère au début.`],errors:[`Genoux décalés par rapport à l’axe.`,`Mouvement brusque ou rebond en bas.`,`Décoller le bas du dos du dossier.`],easier:`Amplitude plus courte, charge minimale.`,alternative:`Debout en tenant une barre fixe à deux mains : ramenez un talon vers la fesse, lentement, 10 fois par jambe.`,back:{status:`ok`,text:`Dos en appui : le haut du dos ne travaille pas. Tenez les poignées sans serrer ni hausser les épaules.`}}),I(`abduction`,{name:`Abduction de hanches`,machine:`Zone machines : machine « Abductor », assise, coussins contre l’extérieur des genoux.`,kind:`strength`,p:[`abductors`],s:[`glutes`],musclesText:`Côté des fessiers (moyen fessier) : stabilité du bassin et de la marche.`,level:1,media:`photo`,setup:`Assise, le dos contre le dossier, les jambes sur les supports, les coussins contre l’extérieur des genoux.`,steps:[`Réglez l’écartement de départ : jambes presque serrées.`,`Écartez les genoux en soufflant, sans à-coup.`,`Allez jusqu’à un écartement confortable.`,`Revenez lentement en inspirant, sans laisser claquer la charge.`],breath:`Soufflez en écartant, inspirez en revenant.`,settings:[`Levier d’écartement : position de départ avec les jambes presque serrées.`,`Vérifiez que les coussins sont bien sur l’extérieur des genoux (et non des cuisses).`,`Charge : la plus légère au début.`],errors:[`Écarter trop loin.`,`Se pencher en avant.`,`Laisser revenir la charge d’un coup.`],easier:`Écartement plus petit, charge minimale.`,alternative:`Debout en tenant une barre fixe : écartez une jambe tendue sur le côté, lentement, 10 fois par jambe.`,back:{status:`ok`,text:`Dos en appui contre le dossier. Gardez les épaules relâchées.`}}),I(`biceps_curl`,{name:`Curl biceps assis`,machine:`Zone poids libres : haltères légers (1 à 3 kg) et un banc.`,kind:`strength`,p:[`biceps`],s:[`forearms`],musclesText:`Avant des bras (biceps), avant-bras.`,level:1,media:`photo`,setup:`Assise au bout d’un banc, dos droit, pieds à plat, un haltère léger dans chaque main, bras le long du corps, paumes vers l’avant.`,steps:[`Coudes collés contre le corps.`,`Pliez les coudes pour monter les haltères vers les épaules, en soufflant.`,`Seuls les avant-bras bougent : les épaules restent basses.`,`Redescendez lentement en inspirant, jusqu’aux bras presque tendus.`],breath:`Soufflez en montant, inspirez en descendant.`,settings:[`Choisissez des haltères de 1 à 2 kg pour commencer.`,`Si un banc avec dossier est libre, préférez-le pour avoir le dos en appui.`],errors:[`Balancer le buste pour monter.`,`Avancer ou hausser les épaules.`,`Haltères trop lourds.`],easier:`Un bras après l’autre, ou sans haltère au début.`,alternative:`Curl à la poulie basse, debout, charge minimale.`,back:{status:`ok`,text:`Charge légère obligatoire : des haltères trop lourds font monter les épaules et tirent sur la nuque. Arrêtez si une gêne apparaît dans le haut du dos.`}}),I(`leg_press`,{name:`Presse à cuisses`,machine:`Zone machines : presse à cuisses assise (charge à goupille) ou presse inclinée (disques).`,kind:`strength`,p:[`quads`,`glutes`],s:[`hamstrings`,`adductors`],musclesText:`Avant des cuisses, fessiers, arrière des cuisses.`,level:2,media:`photo`,photoNote:`Photo : presse inclinée. La presse assise se règle de la même façon et elle est plus simple pour débuter.`,setup:`Assise, le dos et la tête contre le dossier, les pieds à plat au milieu de la plateforme, écartés de la largeur des hanches, mains sur les poignées.`,steps:[`Réglez le dossier et la charge (voir « Réglages »).`,`Poussez la plateforme en soufflant, jusqu’aux jambes presque tendues, sans bloquer les genoux.`,`Revenez lentement en inspirant.`,`Amplitude limitée : arrêtez-vous quand vos genoux forment à peu près un angle droit.`,`Le bas du dos doit rester collé au dossier pendant tout le mouvement.`],breath:`Soufflez en poussant, inspirez en revenant.`,settings:[`Presse assise : avancez ou reculez le siège pour que vos genoux soient pliés à angle droit au départ, pas plus.`,`Presse inclinée : demandez de l’aide au coach de salle la première fois (sécurités à déverrouiller et à remettre).`,`Charge : la plus légère au début.`],errors:[`Descendre trop bas (le bas du dos décolle).`,`Verrouiller les genoux en haut.`,`Pousser sur la pointe des pieds.`,`Genoux qui rentrent vers l’intérieur.`],easier:`Amplitude plus courte et charge minimale.`,alternative:`Assis-debout depuis un banc, en vous aidant des mains si besoin, 8 à 10 fois.`,back:{status:`adapt`,text:`À adapter : amplitude limitée, dos et tête en appui. Uniquement si c’est indolore pour le dos et les genoux.`}}),I(`equilibre`,{name:`Équilibre avec appui`,machine:`Partout : debout à côté d’un appui stable (barre fixe, cadre d’une machine, mur).`,kind:`balance`,p:[`abductors`,`calves`],s:[`quads`,`glutes`,`abs`],musclesText:`Muscles des chevilles, des hanches et du tronc qui vous stabilisent.`,level:1,media:`balance`,hold:15,setup:`Debout face à un appui stable, les deux mains posées dessus, pieds écartés de la largeur des hanches.`,steps:[`Gardez les deux mains sur l’appui pendant tout l’exercice.`,`Portez doucement votre poids sur la jambe droite.`,`Soulevez légèrement le pied gauche, de quelques centimètres seulement.`,`Tenez 15 secondes en respirant calmement, regard droit devant.`,`Reposez le pied, puis faites la même chose sur l’autre jambe.`],breath:`Respirez lentement et régulièrement pendant tout le maintien.`,settings:[`Choisissez un appui qui ne bouge pas : une barre fixe ou le cadre d’une machine inoccupée.`,`Pas besoin de matériel.`],errors:[`S’appuyer sur un objet qui bouge (machine en mouvement, haltère).`,`Lever le pied trop haut.`,`Retenir sa respiration.`],easier:`Gardez la pointe du pied levé posée au sol, seul le talon se soulève.`,alternative:`Le même exercice à côté d’un mur, une main posée dessus.`,back:{status:`ok`,text:`Mains posées sur l’appui sans tirer ni pousser fort, épaules basses.`}}),I(`tirage`,{name:`Tirage horizontal avec appui poitrine`,machine:`Zone machines : machine de tirage assise avec un coussin pour la poitrine (« Seated Row »).`,kind:`strength`,p:[`upper_back`,`lats`],s:[`biceps`,`delts_rear`],musclesText:`Milieu du dos (entre les omoplates), dos, biceps.`,level:2,media:`photo`,setup:`Assise, la poitrine contre le coussin, pieds à plat, bras tendus devant vous sur les poignées.`,steps:[`Épaules basses, poitrine en appui sur le coussin.`,`Tirez les poignées vers vous en soufflant, coudes près du corps.`,`Arrêtez quand les coudes arrivent au niveau du buste.`,`Revenez lentement en inspirant, jusqu’aux bras presque tendus.`],breath:`Soufflez en tirant, inspirez en revenant.`,settings:[`Siège : les poignées arrivent à hauteur du bas de la poitrine.`,`Coussin : réglé pour que vous puissiez attraper les poignées les bras presque tendus, la poitrine en appui.`,`Charge : la plus légère.`],errors:[`Hausser les épaules.`,`Tirer avec le dos en décollant la poitrine.`,`Tirer les coudes loin derrière le corps.`],easier:`Amplitude très courte et charge minimale.`,alternative:`Aucune alternative n’est proposée : ce mouvement sollicite la zone douloureuse. Demandez conseil à votre médecin ou kinésithérapeute.`,back:{status:`hold`,text:`Suspendu : ce mouvement fait travailler directement la zone douloureuse (entre les omoplates). Il reste désactivé jusqu’à l’accord de votre médecin, puis uniquement s’il est indolore.`,clearedText:`Accord médical indiqué : charge minimale, amplitude courte, et seulement s’il est indolore. Arrêtez dès la moindre gêne entre les omoplates ou dans la nuque.`}}),I(`triceps`,{name:`Extension triceps à la poulie`,machine:`Zone poulies : poulie haute avec une barre droite ou une corde.`,kind:`strength`,p:[`triceps`],s:[],musclesText:`Arrière des bras (triceps).`,level:2,media:`photo`,setup:`Debout face à la poulie, pieds écartés de la largeur des hanches, mains sur la barre, coudes contre le corps, avant-bras à l’horizontale.`,steps:[`Épaules basses et relâchées, buste droit.`,`Poussez la barre vers le bas en soufflant, jusqu’aux bras presque tendus.`,`Seuls les avant-bras bougent, les coudes restent contre le corps.`,`Remontez lentement en inspirant, jusqu’aux avant-bras à l’horizontale.`],breath:`Soufflez en poussant vers le bas, inspirez en remontant.`,settings:[`Poulie en position haute.`,`Charge très légère (2,5 à 5 kg).`,`Rapprochez-vous de la poulie pour ne pas avoir à vous pencher.`],errors:[`Se pencher au-dessus de la barre.`,`Coudes qui s’écartent du corps.`,`Remonter la barre au-dessus de la poitrine.`,`Hausser les épaules.`],easier:`Un bras à la fois avec une poignée simple, charge minimale.`,alternative:`Machine triceps assise, si elle est disponible, dos en appui.`,back:{status:`adapt`,text:`À adapter : charge très légère et amplitude courte. Arrêtez dès qu’un tiraillement apparaît dans la nuque ou entre les omoplates.`}}),I(`retour_calme`,{name:`Retour au calme`,machine:`Tapis de marche (vitesse très lente) puis un banc.`,kind:`calm`,p:[],s:[],musclesText:`Récupération : le cœur et la respiration reviennent au calme.`,level:1,media:`photo`,photoId:`tapis`,setup:`Sur le tapis à vitesse très lente, puis assise sur un banc.`,steps:[`Marchez très lentement (2 à 3 km/h) pendant la durée indiquée.`,`Arrêtez le tapis avant de descendre.`,`Asseyez-vous, dos droit, mains sur les cuisses.`,`Faites 5 respirations lentes : inspirez par le nez en 4 secondes, soufflez par la bouche en 6 secondes.`],breath:`Respirations lentes et profondes, sans forcer.`,settings:[`Vitesse : 2 à 3 km/h, inclinaison 0 %.`],errors:[`Partir sans ralentir.`,`Faire des étirements forcés du haut du dos ou de la nuque.`],easier:`Restez simplement assise et respirez calmement.`,alternative:`Marche lente dans la salle.`,back:{status:`ok`,text:`Pas d’étirement forcé du haut du dos ni de la nuque.`}})],L=Object.fromEntries(Yt.map(e=>[e.id,e])),Xt={1:`Très accessible`,2:`Accessible`,3:`Intermédiaire`},R={locations:[[`nuque`,`La nuque`],[`trapezes`,`Le haut des épaules (trapèzes)`],[`omoplates`,`Les omoplates`],[`entre_omoplates`,`Entre les omoplates`],[`autre`,`Une autre zone`],[`aucune`,`Je n’ai pas mal actuellement`]],since:[[`lt2w`,`Moins de 2 semaines`],[`2to6w`,`2 à 6 semaines`],[`6wto3m`,`6 semaines à 3 mois`],[`gt3m`,`Plus de 3 mois`]],when:[[`mouvement`,`Pendant certains mouvements`],[`repos`,`Au repos`],[`nuit`,`La nuit`]],aggravating:[[`bras`,`Lever les bras`],[`porter`,`Porter quelque chose`],[`assise`,`Rester assise longtemps`],[`tete`,`Tourner la tête`],[`pencher`,`Se pencher en avant`],[`respirer`,`Respirer profondément`],[`aucun`,`Aucun en particulier`],[`nsp`,`Je ne sais pas`]],consulted:[[`oui`,`Oui`],[`non`,`Non`],[`prevu`,`Un rendez-vous est prévu`]],diagnosis:[[`oui`,`Oui`],[`non`,`Non`],[`en_cours`,`Des examens sont en cours`]],limits:[[`genoux`,`Genoux`],[`hanches`,`Hanches`],[`epaules`,`Épaules`],[`lombaires`,`Bas du dos`],[`tension`,`Tension artérielle`],[`coeur`,`Problème cardiaque`],[`osteo`,`Ostéoporose`],[`diabete`,`Diabète`],[`aucune`,`Aucune`],[`autre`,`Autre`]]},Zt=e=>e.locations.length&&!e.locations.includes(`aucune`);function Qt(e){return e.redFlag?`urgent`:$t(e).length?`consult`:`ok`}function $t(e){let t=[];return Zt(e)&&((e.since===`lt2w`||e.since===`2to6w`)&&t.push(`vos douleurs sont récentes`),(e.since===`6wto3m`||e.since===`gt3m`)&&t.push(`vos douleurs durent depuis plusieurs semaines`),(e.when.includes(`repos`)||e.when.includes(`nuit`))&&t.push(`elles apparaissent aussi au repos ou la nuit`),e.consulted!==`oui`&&t.push(`vous n’avez pas encore consulté pour ces douleurs`),e.diagnosis!==`oui`&&t.push(`leur origine n’est pas encore connue`)),(e.limits.includes(`coeur`)||e.limits.includes(`tension`))&&t.push(`vous avez signalé un problème cardiaque ou de tension`),t}function en(e){let t=Qt(e);return t===`urgent`?e.clearance:t!==`consult`||e.clearance||e.acknowledged}function tn(e,t){let n=L[t];return e.suspended[t]?{status:`suspended`,reason:`pain`,since:e.suspended[t].date}:n.back.status===`hold`?e.health.clearance?{status:`adapt`,cleared:!0}:{status:`hold`}:{status:n.back.status}}function nn(e,t){let n=L[t],{status:r}=tn(e,t);return r===`suspended`?{status:r,label:`Suspendu`,tone:`danger`,text:`Suspendu après une douleur. Réactivable dans votre Profil, après avis médical si la douleur persiste.`}:r===`hold`?{status:r,label:`Suspendu · avis médical`,tone:`danger`,text:n.back.text}:n.back.status===`hold`?{status:`adapt`,label:`À adapter`,tone:`warn`,text:n.back.clearedText}:{status:r,label:r===`adapt`?`À adapter`:`Si indolore`,tone:r===`adapt`?`warn`:`ok`,text:n.back.text}}var rn=[[`nuque`,`Nuque`],[`haut_dos`,`Haut du dos / trapèzes`],[`entre_omoplates`,`Entre les omoplates`],[`epaule`,`Épaule`],[`bras`,`Bras / coude`],[`poitrine`,`Poitrine`],[`bas_dos`,`Bas du dos`],[`hanche`,`Hanche`],[`genou`,`Genou`],[`autre`,`Autre`]],an=[[`legere`,`Légère`],[`moyenne`,`Moyenne`],[`forte`,`Forte`]],on=e=>(rn.find(([t])=>t===e)||[,e])[1],sn=[{num:`15`,label:`SAMU`},{num:`112`,label:`Urgences (Europe)`}],z=e=>e.sessions.filter(e=>e.status===`done`||e.status===`stopped`),B=e=>e.sessions.find(e=>e.status===`active`)||null;function cn(e,t=x()){let n=Math.floor(Ze(e.programStart,t)/7)+1;return{week:Math.max(1,n),total:12}}var V=e=>P[e.phase.current]||P[1];function ln(e){let t=z(e);if(!t.length)return`A`;let n=t[t.length-1].sessionId;return Kt[(Kt.indexOf(n)+1)%Kt.length]}var un=(e,t)=>e.profile.trainDays.includes(Qe(t)),dn=(e,t)=>z(e).filter(e=>e.date===t);function fn(e,t){if(dn(e,t).length)return`done`;if(!un(e,t))return`rest`;let n=x();return t===n?`today`:t>n?`planned`:t>=(e.startedOn||n)?`postponed`:`rest`}function pn(e){let t=x();for(let n=0;n<14;n++){let r=C(t,n);if(un(e,r)&&!dn(e,r).length)return r}return t}function mn(e,t=$e(x())){let n=Array.from({length:7},(e,n)=>C(t,n));return{done:n.reduce((t,n)=>t+dn(e,n).length,0),planned:n.filter(t=>un(e,t)).length,days:n}}function hn(e,t){for(let n of[...z(e)].reverse()){if(n.phase!==t)continue;let e=n.steps.find(e=>e.type===`cardio`&&e.done&&!e.light);if(e)return e.targetMin}return null}var gn=(e,[t,n])=>Math.min(n,Math.max(t,e));function _n(e,t,{light:n=!1}={}){let r=V(e),i=F[t],a=gn(hn(e,r.n)??r.cardio[0],r.cardio),o=i.steps.map((i,o)=>{let s=L[i.exId],c={key:`${t}${o}`,type:i.type,exId:i.exId,done:!1,skipped:!1};if(i.type===`warmup`)return{...c,targetMin:r.warmup};if(i.type===`calm`)return{...c,targetMin:r.calm};if(i.type===`cardio`){let e=n?Math.max(5,Math.round(a/2)):a;return{...c,targetMin:e,range:r.cardio,light:n}}let l=tn(e,i.exId).status,u=l===`hold`||l===`suspended`?l:null,d=i.type===`balance`?r.n===1?1:2:r.sets[s.back.status===`ok`?`ok`:`adapt`];return{...c,blocked:u,sets:n?1:d,reps:i.type===`balance`?`${s.hold} s par jambe`:r.reps,rest:r.rest+(n?30:0),easier:!!e.exState[i.exId]?.easier,log:[],rating:null,pain:!1}});if(n){let e=[...o].reverse().find(e=>(e.type===`strength`||e.type===`balance`)&&!e.blocked);e&&(e.blocked=`light`)}return o}function vn(e){let t=0;for(let n of e)n.blocked||(n.targetMin?t+=n.targetMin:t+=2+n.sets*(1+n.rest/60));return Math.round(t/5)*5}var yn=(e,t=14,n=null)=>e.painLog.some(e=>Ze(e.date,x())<=t&&(!n||e.exId===n));function bn(e){let t=e.phase.current;if(t>=3)return null;let n=P[t],{week:r}=cn(e),i=z(e).filter(e=>e.phase===t&&e.status===`done`).length,a=z(e).slice(-2).map(e=>e.recap).filter(Boolean).some(e=>e.fatigue===`tres`),o=e.dismissed[`phase${t+1}`];return r<=n.weeks[1]||i<6||yn(e)||a||o&&Ze(o,x())<7?null:{to:t+1,phase:P[t+1],sessionsDone:i}}function xn(e,t){let n=e.exState[t];if(!n||!n.ratings||n.ratings.length<2||L[t].kind!==`strength`)return null;let r=n.ratings.slice(-2);if(!r.every(e=>e.v===`facile`)||yn(e,30,t))return null;let i=e.dismissed[`load_${t}`];return i&&i>=r[1].date||n.loadAccepted&&n.loadAccepted>=r[1].date?null:{exId:t,kg:n.kg??null}}function Sn(e,t){if(e.phase.current<3||!qt.includes(t.exId))return!1;let n=e.exState[t.exId]?.ratings||[];return n.length>=3&&n.slice(-3).every(e=>e.v!==`difficile`)&&!yn(e,30,t.exId)}function Cn(e){return Object.entries(e.exState).filter(([,e])=>(e.ratings||[]).filter(e=>e.v!==`difficile`).length>=3&&e.ratings[e.ratings.length-1].v!==`difficile`).map(([e])=>e)}function wn(e){let t=e.steps.filter(e=>!e.blocked);return{durationSec:e.durationSec||0,exercises:t.filter(e=>(e.type===`strength`||e.type===`balance`)&&e.done).length,cardioMin:t.filter(e=>e.type===`cardio`&&e.done).reduce((e,t)=>e+Math.round((t.elapsedSec||t.targetMin*60)/60),0)}}function Tn(e){return z(e).reduce((e,t)=>{let n=wn(t);return e.sessions+=1,e.sec+=n.durationSec,e.cardio+=n.cardioMin,e},{sessions:0,sec:0,cardio:0})}function En(e){let t=0,n=$e(x());for(mn(e,n).done||(n=C(n,-7));mn(e,n).done;)t+=1,n=C(n,-7);return t}function H(e,t,{onClose:n=b}={}){return O`
    <div class="sheet-wrap" role="dialog" aria-modal="true" aria-label=${e}>
      <div class="sheet-bg" @click=${n}></div>
      <div class="sheet">
        <div class="sheet-grip"></div>
        <div class="sheet-head">
          <h2>${e}</h2>
          <button class="icon-btn" @click=${n} aria-label="Fermer">${N(`x`,22)}</button>
        </div>
        <div class="sheet-body">${t}</div>
      </div>
    </div>`}function Dn(e,{eyebrow:t,onBack:n=Ke}={}){return O`
    <header class="view-head">
      <button class="icon-btn" @click=${n} aria-label="Retour">${N(`left`,24)}</button>
      <div style="flex:1;min-width:0">
        ${t?O`<p class="eyebrow">${t}</p>`:A}
        <h1 class="display-m">${e}</h1>
      </div>
    </header>`}function U(e,t,n,{multi:r=!1,danger:i=!1,sub:a}={}){return O`
    <button class="choice ${r?`multi`:``} ${i?`choice-danger`:``}" aria-pressed=${t?`true`:`false`} @click=${n}>
      <span class="tick">${N(`check`,16)}</span>
      <span style="display:flex;flex-direction:column">${e}${a?O`<small class="muted" style="font-weight:400">${a}</small>`:A}</span>
    </button>`}function On(e,t,n,r=``){return O`
    <div class="seg" role="group" aria-label=${r}>
      ${e.map(([e,r])=>O`<button aria-pressed=${e===t?`true`:`false`} @click=${()=>n(e)}>${r}</button>`)}
    </div>`}function kn(e,t,n,r){return O`
    <button class="toggle-row" role="switch" aria-checked=${t?`true`:`false`} @click=${n}>
      <span><b>${e}</b>${r?O`<small>${r}</small>`:A}</span>
      <span class="switch ${t?`on`:``}"></span>
    </button>`}function W(e,t,n){return O`<div class="note note-${e}">${N(t,22)}<div>${n}</div></div>`}function G(e,t){return O`<div class="stat"><b>${e}</b><span>${t}</span></div>`}var An=(e,t,n=[])=>{if(n.includes(t))return e.includes(t)?[]:[t];let r=e.filter(e=>!n.includes(e));return r.includes(t)?r.filter(e=>e!==t):[...r,t]},jn=[{id:`locations`,title:`Où ressentez-vous vos douleurs du haut du dos ?`,help:`Plusieurs réponses possibles.`,done:e=>e.locations.length>0,render:(e,t)=>O`<div class="choices">${R.locations.map(([n,r])=>U(r,e.locations.includes(n),()=>t(e=>{e.locations=An(e.locations,n,[`aucune`])}),{multi:!0}))}</div>`},{id:`since`,title:`Depuis combien de temps ?`,skip:e=>e.locations.includes(`aucune`),done:e=>!!e.since,render:(e,t)=>O`<div class="choices">${R.since.map(([n,r])=>U(r,e.since===n,()=>t(e=>{e.since=n})))}</div>`},{id:`when`,title:`Quand apparaissent-elles ?`,help:`Plusieurs réponses possibles.`,skip:e=>e.locations.includes(`aucune`),done:e=>e.when.length>0,render:(e,t)=>O`<div class="choices">${R.when.map(([n,r])=>U(r,e.when.includes(n),()=>t(e=>{e.when=An(e.when,n)}),{multi:!0}))}</div>`},{id:`aggravating`,title:`Quels mouvements les aggravent ?`,help:`Plusieurs réponses possibles.`,skip:e=>e.locations.includes(`aucune`),done:e=>e.aggravating.length>0,render:(e,t)=>O`<div class="choices">${R.aggravating.map(([n,r])=>U(r,e.aggravating.includes(n),()=>t(e=>{e.aggravating=An(e.aggravating,n,[`aucun`,`nsp`])}),{multi:!0}))}</div>`},{id:`consulted`,title:`Avez-vous déjà consulté un médecin pour ces douleurs ?`,skip:e=>e.locations.includes(`aucune`),done:e=>!!e.consulted,render:(e,t)=>O`<div class="choices">${R.consulted.map(([n,r])=>U(r,e.consulted===n,()=>t(e=>{e.consulted=n})))}</div>`},{id:`diagnosis`,title:`Un diagnostic a-t-il été établi ?`,skip:e=>e.locations.includes(`aucune`),done:e=>!!e.diagnosis,render:(e,t)=>O`
      <div class="choices">${R.diagnosis.map(([n,r])=>U(r,e.diagnosis===n,()=>t(e=>{e.diagnosis=n})))}</div>
      ${e.diagnosis===`oui`?O`
        <label class="stack-s"><span class="muted">Lequel ? (facultatif, reste sur votre téléphone)</span>
          <input class="field" .value=${e.diagnosisText||``} @change=${e=>t(t=>{t.diagnosisText=e.target.value.trim()})} placeholder="Ex. : ce que vous a dit le médecin"></label>`:A}`},{id:`limits`,title:`Avez-vous d’autres limitations physiques ?`,help:`Plusieurs réponses possibles.`,done:e=>e.limits.length>0,render:(e,t)=>O`
      <div class="choices grid2">${R.limits.map(([n,r])=>U(r,e.limits.includes(n),()=>t(e=>{e.limits=An(e.limits,n,[`aucune`])}),{multi:!0}))}</div>
      ${e.limits.includes(`autre`)?O`
        <label class="stack-s"><span class="muted">Précisez (facultatif)</span>
          <input class="field" .value=${e.limitsText||``} @change=${e=>t(t=>{t.limitsText=e.target.value.trim()})}></label>`:A}`},{id:`redFlag`,title:`Ces douleurs s’accompagnent-elles parfois d’une gêne dans la poitrine, d’un essoufflement inhabituel, d’une douleur dans le bras ou la mâchoire, ou d’un malaise ?`,help:`Cette question est importante pour votre sécurité.`,done:e=>e.redFlag!==null,render:(e,t)=>O`<div class="choices">
      ${U(`Oui`,e.redFlag===!0,()=>t(e=>{e.redFlag=!0}),{danger:!0})}
      ${U(`Non`,e.redFlag===!1,()=>t(e=>{e.redFlag=!1}))}
    </div>`}],Mn=e=>jn.filter(t=>!t.skip?.(e)),Nn=()=>{var e;return(e=m.ui).ob||(e.ob={step:`welcome`,q:0})},K=e=>g(t=>{t.ob={...Nn(),...e}}),Pn=e=>h(t=>{e(t.health),t.health.updatedAt=x()});function q(e,{back:t,progress:n}={}){return O`
    <div class="screen ob">
      <div class="ob-top">
        ${t?O`<button class="icon-btn" @click=${t} aria-label="Retour">${N(`left`,24)}</button>`:O`<span></span>`}
        ${n==null?A:O`<div class="ob-progress" aria-hidden="true"><i style="width:${Math.round(n*100)}%"></i></div>`}
      </div>
      ${e}
    </div>`}function Fn(){return q(O`
    <div class="ob-hero">
      <img class="ob-mark" src="icon-192.png" alt="" aria-hidden="true">
      <h1 class="display-l">Bienvenue dans Forge Sérénité</h1>
      <p class="muted">Votre coach sportif personnel pour devenir plus forte et plus à l’aise, à votre rythme.</p>
    </div>
    <ul class="ob-points">
      <li>${N(`calendar`,24)}<span><b>3 séances par semaine</b> de 35 à 50 minutes à la Basic-Fit.</span></li>
      <li>${N(`image`,24)}<span><b>Chaque exercice expliqué</b> en images, avec le réglage des machines.</span></li>
      <li>${N(`heart`,24)}<span><b>Votre confort d’abord</b> : on s’arrête dès qu’une douleur apparaît.</span></li>
      <li>${N(`offline`,24)}<span><b>Sans Internet</b> : tout reste sur votre téléphone.</span></li>
    </ul>
    <button class="btn btn-primary btn-xl btn-block" @click=${()=>K({step:`name`})}>Commencer</button>`)}function In(){let e=m.state.profile.name;return q(O`
    <h1 class="display-m">Comment vous appelez-vous ?</h1>
    <p class="muted">Votre prénom sert seulement à vous saluer.</p>
    <input class="field" id="ob-name" autocomplete="given-name" placeholder="Votre prénom" .value=${e}
      @input=${e=>{m.state.profile.name=e.target.value}}
      @change=${e=>h(t=>{t.profile.name=e.target.value.trim()})}>
    <button class="btn btn-primary btn-xl btn-block" @click=${()=>{h(e=>{e.profile.name=(document.getElementById(`ob-name`)?.value||``).trim()}),K({step:`healthIntro`})}}>Continuer</button>`,{back:()=>K({step:`welcome`}),progress:.1})}function Ln(){return q(O`
    <h1 class="display-m">Quelques questions sur votre dos</h1>
    <p>Vous avez des douleurs dans le haut du dos. Ces questions permettent d’adapter le programme et de savoir s’il vaut mieux demander l’avis d’un médecin avant de commencer.</p>
    ${W(`info`,`shield`,O`L’application <b>ne pose aucun diagnostic</b>. Vos réponses restent uniquement sur ce téléphone.`)}
    <button class="btn btn-primary btn-xl btn-block" @click=${()=>K({step:`q`,q:0})}>Répondre (2 minutes)</button>`,{back:()=>K({step:`name`}),progress:.15})}function Rn(){let e=m.state.health,t=Mn(e),n=Math.min(Nn().q,t.length-1),r=t[n];return q(O`
    <p class="eyebrow">Question ${n+1} sur ${t.length}</p>
    <div class="q">
      <h1 class="q-t ob-q">${r.title}</h1>
      ${r.help?O`<p class="q-h">${r.help}</p>`:A}
      ${r.render(e,Pn)}
    </div>
    <button class="btn btn-primary btn-xl btn-block" ?disabled=${!r.done(e)} @click=${()=>{n+1<Mn(m.state.health).length?K({q:n+1}):(Pn(e=>{e.answered=!0}),K({step:`advice`}))}}>Continuer</button>`,{back:()=>K(n?{q:n-1}:{step:`healthIntro`}),progress:.2+.55*(n/t.length)})}function zn(e,{onClearance:t,onAcknowledge:n,onLater:r,inProfile:i=!1}={}){let a=e.health,o=Qt(a);return o===`urgent`?O`
      ${W(`danger`,`alert`,O`<b>Consultez rapidement un médecin avant toute activité physique.</b><br>Une douleur du dos accompagnée d’une gêne dans la poitrine, d’un essoufflement, d’une douleur dans le bras ou d’un malaise doit être vue par un médecin.`)}
      <div class="card-soft stack">
        <p><b>Si ces signes sont présents maintenant</b>, appelez immédiatement :</p>
        <div class="btn-row">${sn.map(e=>O`<a class="btn btn-danger" href="tel:${e.num}">${N(`phone`,20)} ${e.num} · ${e.label}</a>`)}</div>
      </div>
      <p class="muted">Les séances restent désactivées tant que vous n’avez pas indiqué l’accord de votre médecin.</p>
      ${t?O`<button class="btn btn-soft btn-block" @click=${t}>Mon médecin m’autorise à reprendre le sport</button>`:A}
      ${r?O`<button class="btn btn-ghost btn-block" @click=${r}>${i?`Fermer`:`Je consulte d’abord`}</button>`:A}`:o===`consult`?O`
      ${W(`warn`,`info`,O`<b>Nous vous recommandons de demander l’avis de votre médecin avant de commencer</b>, parce que ${$t(a).join(`, `)}.`)}
      <p class="muted">Un médecin pourra préciser l’origine de vos douleurs et vous dire quels mouvements éviter. En attendant, le tirage horizontal, qui sollicite directement la zone douloureuse, reste suspendu.</p>
      ${t?O`<button class="btn btn-primary btn-block" @click=${t}>Mon médecin m’a déjà autorisée</button>`:A}
      ${n?O`<button class="btn btn-ghost btn-block" @click=${n}>J’ai compris, je commence très doucement</button>`:A}
      ${r?O`<button class="link-btn" @click=${r}>${i?`Fermer`:`Je consulte d’abord, je découvre l’application`}</button>`:A}`:O`
    ${W(`ok`,`done`,O`<b>Rien de particulier n’a été signalé.</b> La règle reste la même : arrêtez tout exercice qui provoque une douleur.`)}
    ${n?O`<button class="btn btn-primary btn-xl btn-block" @click=${n}>Continuer</button>`:A}`}function Bn(){let e=()=>K({step:`days`});return q(O`
    <h1 class="display-m">Avant de commencer</h1>
    ${zn(m.state,{onClearance:()=>{Pn(e=>{e.clearance=!0,e.acknowledged=!0}),e()},onAcknowledge:()=>{Pn(e=>{e.acknowledged=!0}),e()},onLater:e})}`,{back:()=>K({step:`q`,q:Mn(m.state.health).length-1}),progress:.8})}var Vn=[1,2,3,4,5,6,0];function Hn(e,t){let n=n=>t(e.includes(n)?e.filter(e=>e!==n):[...e,n].sort()),r=e.some(t=>e.includes((t+1)%7));return O`
    <div class="days">
      ${Vn.map(t=>O`<button class="day ${e.includes(t)?`on`:``}" aria-pressed=${e.includes(t)?`true`:`false`} aria-label=${Je[t]} @click=${()=>n(t)}>${qe[t]}</button>`)}
    </div>
    ${e.length===3?r?W(`warn`,`info`,`Deux de vos jours se suivent. Si possible, gardez un jour de repos entre deux séances.`):A:O`<p class="muted small">Choisissez 3 jours (${e.length} sélectionné${e.length>1?`s`:``}).</p>`}`}function Un(){let e=m.state.profile.trainDays;return q(O`
    <h1 class="display-m">Quels jours irez-vous à la salle ?</h1>
    <p class="muted">Idéalement, un jour de repos entre deux séances. Si un jour ne convient pas, la séance sera simplement reportée.</p>
    ${Hn(e,e=>h(t=>{t.profile.trainDays=e}))}
    <button class="btn btn-primary btn-xl btn-block" ?disabled=${e.length!==3} @click=${()=>K({step:`ready`})}>Continuer</button>`,{back:()=>K({step:`advice`}),progress:.9})}function Wn(){let e=m.state.profile.name;return q(O`
    <div class="ob-hero">
      <img class="ob-mark" src="icon-192.png" alt="" aria-hidden="true">
      <h1 class="display-l">Tout est prêt${e?`, ${e}`:``}</h1>
    </div>
    <ul class="ob-points">
      <li>${N(`play`,24)}<span>Ouvrez l’application à la salle et touchez <b>« Commencer la séance »</b>.</span></li>
      <li>${N(`info`,24)}<span>Pour chaque exercice : une photo, les réglages et les gestes, étape par étape.</span></li>
      <li>${N(`alert`,24)}<span>Une douleur ? Touchez <b>« Signaler une douleur »</b> : l’exercice s’arrête aussitôt.</span></li>
      <li>${N(`phone`,24)}<span>Ajoutez l’application à votre écran d’accueil : Safari → bouton Partager → « Sur l’écran d’accueil ».</span></li>
    </ul>
    <button class="btn btn-primary btn-xl btn-block" @click=${()=>h(e=>{e.onboarded=!0,e.startedOn=x(),e.programStart=$e(x())})}>Découvrir mon programme</button>`,{back:()=>K({step:`days`}),progress:1})}function Gn(){let e=Nn().step;return{welcome:Fn,name:In,healthIntro:Ln,q:Rn,advice:Bn,days:Un,ready:Wn}[e]()}function Kn(e,t=1){return e==null||isNaN(e)?`–`:(Math.round(e*10**t)/10**t).toLocaleString(`fr-FR`,{maximumFractionDigits:t})}function qn(e){e=Math.max(0,Math.round(e));let t=Math.floor(e/3600),n=Math.floor(e%3600/60);return e%60,t?`${t} h ${String(n).padStart(2,`0`)}`:`${n} min`}function Jn(e){e=Math.max(0,Math.round(e));let t=Math.floor(e/3600),n=Math.floor(e%3600/60),r=e%60,i=String(n).padStart(2,`0`),a=String(r).padStart(2,`0`);return t?`${t}:${i}:${a}`:`${i}:${a}`}function Yn(){return Math.random().toString(36).slice(2,10)+Date.now().toString(36).slice(-4)}var Xn=`Photos : free-exercise-db · domaine public`,Zn=e=>L[e]?.photoId||e,Qn=e=>`ex-${Zn(e)}.webp`;function $n(e){let t=e.currentTarget;t.classList.toggle(`paused`),t.setAttribute(`aria-pressed`,t.classList.contains(`paused`)?`true`:`false`)}var er=St`
  <svg viewBox="0 0 200 215" aria-hidden="true">
    <line class="bal-floor" x1="20" y1="206" x2="185" y2="206"/>
    <line class="bal-support" x1="152" y1="98" x2="152" y2="206"/>
    <line class="bal-support" x1="140" y1="98" x2="166" y2="98"/>
    <circle class="bal-head" cx="96" cy="38" r="14"/>
    <path class="bal-line" d="M96 56 L96 120"/>
    <path class="bal-line" d="M96 64 L122 86 L148 98"/>
    <path class="bal-line" d="M98 66 L126 90 L150 100" style="opacity:.55"/>
    <path class="bal-line" d="M96 120 L99 162 L99 202 L114 204"/>
    <path class="bal-line" d="M95 120 L92 160" style="opacity:.55"/>
    <path class="bal-line bal-foot" d="M92 160 L92 200 L104 202" style="opacity:.55"/>
  </svg>`;function tr(e,{labels:t=!0,size:n=`full`}={}){let r=L[e];return r?r.media===`balance`?O`
      <figure class="exm exm-balance exm-${n}" role="button" aria-pressed="false" @click=${$n}
        aria-label="Schéma : debout, les deux mains sur un appui, un pied légèrement levé. Toucher pour mettre en pause.">
        ${er}
        <span class="exm-pause" aria-hidden="true">${N(`pause`,18)}</span>
      </figure>`:O`
    <figure class="exm exm-${n}" style="--exm-src:url('${Qn(e)}')" role="button" aria-pressed="false" @click=${$n}
      aria-label="Démonstration du mouvement, toucher pour mettre en pause">
      <span class="exm-f exm-a"></span>
      <span class="exm-f exm-b"></span>
      ${t?O`<span class="exm-lbl" aria-hidden="true"><i class="exm-l-a">Départ</i><i class="exm-l-b">Arrivée</i></span>`:A}
      <span class="exm-pause" aria-hidden="true">${N(`pause`,18)}</span>
    </figure>`:A}function J(e){return L[e]?.media===`photo`?O`<img class="exm-thumb" src=${Qn(e)} alt="" loading="lazy" decoding="async">`:O`<span class="exm-thumb-ic">${N(`steps`,26)}</span>`}var Y=null,X=null,nr=!1;function rr(){try{let e=window.AudioContext||window.webkitAudioContext;if(!e)return;Y||(Y=new e),Y.state===`suspended`&&Y.resume()}catch{}}var ir={strong:{type:`square`,notes:[[0,.12,880],[.22,.12,880],[.44,.12,880],[.7,.45,1320]]},soft:{type:`sine`,notes:[[0,.5,660],[.35,.9,880]]}};function ar(e=`strong`){if(Y)try{Y.state===`suspended`&&Y.resume();let t=Y.currentTime,{type:n,notes:r}=ir[e]||ir.strong;for(let[e,i,a]of r){let r=Y.createOscillator(),o=Y.createGain();r.type=n,r.frequency.value=a,o.gain.setValueAtTime(1e-4,t+e),o.gain.exponentialRampToValueAtTime(.25,t+e+.01),o.gain.exponentialRampToValueAtTime(1e-4,t+e+i),r.connect(o).connect(Y.destination),r.start(t+e),r.stop(t+e+i+.02)}}catch{}}function or(){try{navigator.vibrate&&navigator.vibrate([250,120,250,120,500])}catch{}}function sr(){return`Notification`in window&&`serviceWorker`in navigator}function cr(){return sr()?Notification.permission:`unsupported`}async function lr(){if(!sr())return`unsupported`;if(Notification.permission!=="default")return Notification.permission;try{return await Notification.requestPermission()}catch{return`denied`}}async function ur(e,t){if(cr()===`granted`)try{let n=await navigator.serviceWorker.getRegistration(),r={body:t,tag:`forge-rest`,renotify:!0,vibrate:[250,120,250,120,500],icon:`icon-192.png`,badge:`icon-192.png`,requireInteraction:!1};n?await n.showNotification(e,r):new Notification(e,r)}catch{}}async function dr(){try{let e=await navigator.serviceWorker?.getRegistration();(e?await e.getNotifications({tag:`forge-rest`}):[]).forEach(e=>e.close())}catch{}}function fr(e,t={}){let{sound:n=!0,vibration:r=!0,notify:i=!0,tone:a=`strong`,title:o,body:s}=t;n&&ar(a),r&&or(),i&&document.visibilityState!==`visible`&&ur(o||`⏱️ Repos terminé`,s||(e?`À toi : ${e}`:`Série suivante !`))}async function pr(e){nr=e;try{e&&`wakeLock`in navigator&&!X?(X=await navigator.wakeLock.request(`screen`),X.addEventListener(`release`,()=>{X=null})):!e&&X&&(await X.release(),X=null)}catch{}}document.addEventListener(`visibilitychange`,()=>{document.visibilityState===`visible`&&(dr(),nr&&pr(!0))});var mr=e=>e.type===`warmup`||e.type===`cardio`||e.type===`calm`,hr=e=>!e.blocked,gr=()=>B(m.state),Z=e=>e.steps[e.cur];function _r(e,t=0){for(let n=t;n<e.length;n++)if(hr(e[n])&&!e[n].done&&!e[n].skipped)return n;return-1}function vr(e,{light:t=!1,feeling:n=`forme`}={}){rr(),gr()||(h(r=>{let i=_n(r,e,{light:t});r.sessions.push({id:`s_${Yn()}`,sessionId:e,date:x(),startedAt:Date.now(),pausedTotal:0,pausedAt:null,status:`active`,phase:r.phase.current,light:t,feeling:n,steps:i,cur:_r(i),set:0,rest:null})}),b()),yr()}function yr(){g(e=>{e.sessionOpen=!0,e.sessionView=null,e.sheet=null}),m.state.settings.keepAwake&&pr(!0),qr()}function br(){g(e=>{e.sessionOpen=!1}),pr(!1)}function xr(){h(e=>{let t=B(e);t&&(t.pausedAt?(t.pausedTotal+=Date.now()-t.pausedAt,t.pausedAt=null):t.pausedAt=Date.now())}),b()}function Sr(e,{withRest:t=!1}={}){let n=Z(e),r=_r(e.steps,e.cur+1);e.set=0,r===-1?(e.cur=e.steps.length,e.rest=null):(e.cur=r,t&&n&&!mr(n)&&Cr(e,n.rest))}function Cr(e,t){e.rest={endsAt:Date.now()+t*1e3,total:t,alerted:!1}}function wr(e){h(t=>{let n=B(t);n.cur=e,n.steps[e].skipped=!1,n.set=n.steps[e].log?.length||0,n.rest=null})}function Tr(e,t){h(n=>{let r=Z(B(n));r.draft={...r.draft||{reps:10,kg:n.exState[r.exId]?.kg??null},[e]:t}})}function Er(){rr(),h(e=>{let t=B(e),n=Z(t),r=n.draft||{reps:10,kg:e.exState[n.exId]?.kg??null};n.log.push({reps:r.reps,kg:r.kg}),r.kg!=null&&(e.exState[n.exId]={...e.exState[n.exId]||{ratings:[]},kg:r.kg}),t.set=n.log.length,n.log.length<n.sets&&Cr(t,n.rest)});let e=Z(gr());e.log.length>=e.sets&&y(`rate`)}function Dr(e,{extraSet:t=!1}={}){h(n=>{let r=B(n),i=Z(r);i.rating=e;let a=n.exState[i.exId]||{ratings:[]};a.ratings=[...a.ratings||[],{v:e,date:x()}].slice(-10),n.exState[i.exId]=a,t?(i.sets+=1,i.extraSet=!0,Cr(r,i.rest)):(i.done=!0,Sr(r,{withRest:!0}))}),b(),t||Br()}function Or(){h(e=>{let t=B(e),n=Z(t);n.skipped=!0,n.timer&&(n.elapsedSec=Q(n)),n.timer=null,Sr(t)}),b(),Br()}function kr(e){h(t=>{let n=Z(B(t));e===`easier`&&(n.easier=!n.easier,t.exState[n.exId]={...t.exState[n.exId]||{ratings:[]},easier:n.easier}),e===`oneSet`&&(n.sets=Math.max(1,n.log.length||1)),e===`lessReps`&&(n.reps=`8`),e===`moreRest`&&(n.rest+=30)}),b();let t=Z(gr());e===`oneSet`&&t.log.length>=t.sets&&y(`rate`),_({easier:t.easier?`Version plus facile activée`:`Version habituelle`,oneSet:`Une seule série pour cet exercice`,lessReps:`8 répétitions suffisent aujourd’hui`,moreRest:`30 secondes de repos en plus`}[e],`ok`)}function Ar(e){h(t=>{let n=Z(B(t)),r=t.exState[n.exId];e?(r.loadAccepted=x(),n.loadUp=!0):t.dismissed[`load_${n.exId}`]=x()})}function jr({zones:e,intensity:t,urgent:n,suspend:r}){h(i=>{let a=B(i),o=Z(a);i.painLog.push({id:`p_${Yn()}`,date:x(),exId:o.exId,sessionId:a.sessionId,zones:e,intensity:t,urgent:!!n,source:`exercise`}),o.pain=!0,o.skipped=!0,o.timer&&(o.elapsedSec=Q(o),o.timer=null),r&&o.type!==`calm`&&(i.suspended[o.exId]={date:x(),reason:`pain`}),a.rest=null}),y(n?`urgent`:`painDone`,{intensity:t})}function Mr(){h(e=>{Sr(B(e))}),b(),Br()}function Q(e){let t=e.timer;return t?Math.floor((t.acc+(t.runningSince?Date.now()-t.runningSince:0))/1e3):e.elapsedSec||0}function Nr(){rr(),h(e=>{let t=Z(B(e)),n=t.timer||{acc:(t.elapsedSec||0)*1e3,runningSince:null};n.runningSince?(n.acc+=Date.now()-n.runningSince,n.runningSince=null):n.runningSince=Date.now(),t.timer=n}),qr()}function Pr(e){h(t=>{let n=Z(B(t)),[r,i]=n.type===`cardio`?[1,n.range[1]]:[1,10];n.targetMin=Math.min(i,Math.max(r,n.targetMin+e))})}function Fr(){h(e=>{let t=B(e),n=Z(t);n.elapsedSec=Q(n),n.timer=null,n.done=!0,n.type===`cardio`&&n.elapsedSec<n.targetMin*60-30&&(n.stoppedEarly=!0),Sr(t)}),Br()}function Ir(e){rr(),g(t=>{t.hold={endsAt:Date.now()+e*1e3,total:e,alerted:!1}}),qr()}var Lr=e=>e?.rest?Math.max(0,Math.ceil((e.rest.endsAt-Date.now())/1e3)):0;function Rr(e){h(t=>{let n=B(t);n.rest&&(n.rest.endsAt=Math.max(Date.now(),n.rest.endsAt)+e*1e3,n.rest.total+=e,n.rest.alerted=!1)})}function zr(){h(e=>{B(e).rest=null}),dr()}function Br(){let e=gr();e&&e.cur>=e.steps.length&&g(e=>{e.sessionView=`recap`})}function Vr(){b(),g(e=>{e.sessionView=`recap`})}function Hr(){g(e=>{e.sessionView=null})}function Ur(e){let t=gr().steps.some(e=>hr(e)&&!e.done&&!e.skipped);h(n=>{let r=B(n);if(r.pausedAt&&(r.pausedTotal+=Date.now()-r.pausedAt,r.pausedAt=null),r.endedAt=Date.now(),r.durationSec=Math.min(10800,Math.round((r.endedAt-r.startedAt-r.pausedTotal)/1e3)),r.status=t?`stopped`:`done`,r.recap=e,r.rest=null,r.steps.forEach(e=>{e.timer&&(e.elapsedSec=Q(e),e.timer=null),delete e.draft}),e.pain===`oui`){let t=e.painExIds?.length?e.painExIds:[null];for(let i of t)n.painLog.push({id:`p_${Yn()}`,date:x(),exId:i,sessionId:r.sessionId,zones:e.painZones||[],intensity:e.painIntensity||null,source:`recap`}),i&&e.suspend&&(n.suspended[i]={date:x(),reason:`pain`})}for(let t of e.difficult||[])n.exState[t]={...n.exState[t]||{ratings:[]},suggestEasier:!0};n.nextLight=e.fatigue===`tres`||e.adaptNext===`leger`||e.pain===`oui`?{reason:e.pain===`oui`?`douleur`:`fatigue`,date:x()}:null}),Jr(),pr(!1),g(e=>{e.sessionOpen=!1,e.sessionView=null,e.sheet=null,e.tab=`home`}),_(t?`Séance enregistrée. Prenez soin de vous.`:`Bravo ! Votre séance est enregistrée.`,`ok`)}function Wr(){h(e=>{e.sessions=e.sessions.filter(e=>e.status!==`active`)}),Jr(),pr(!1),g(e=>{e.sessionOpen=!1,e.sessionView=null,e.sheet=null})}function Gr(e){h(t=>{let n=Z(B(t)),r=t.exState[n.exId];r.suggestEasier=!1,e&&(r.easier=!0,n.easier=!0)})}var Kr=null;function qr(){Kr||(Kr=setInterval(Yr,1e3))}function Jr(){clearInterval(Kr),Kr=null}function Yr(){let e=gr(),t=m.state.settings,n={sound:t.sound,vibration:t.vibration,notify:t.notifications,tone:`soft`};if(e?.rest&&!e.rest.alerted&&Lr(e)===0){let t=Z(e),r=Date.now()-e.rest.endsAt;h(e=>{B(e).rest.alerted=!0}),r<2e4&&fr(``,{...n,title:`Repos terminé`,body:t?`Quand vous êtes prête : ${L[t.exId].name}`:`Quand vous êtes prête.`})}let r=e&&Z(e);r&&mr(r)&&r.timer?.runningSince&&!r.alerted&&Q(r)>=r.targetMin*60&&(h(e=>{Z(B(e)).alerted=!0}),fr(``,{...n,title:`${{warmup:`Échauffement`,cardio:`Cardio`,calm:`Retour au calme`}[r.type]} terminé`,body:`Durée atteinte. Touchez « Continuer » quand vous êtes prête.`}));let i=m.ui.hold;i&&!i.alerted&&Date.now()>=i.endsAt&&(i.alerted=!0,fr(``,{...n,notify:!1}),setTimeout(()=>g(e=>{e.hold=null}),1500)),!e&&!i?Jr():m.ui.sessionOpen&&Ue()}var Xr=e=>`Séance ${e.sessionId} · ${F[e.sessionId].title}`;function Zr(){return new Date().getHours()<18?`Bonjour`:`Bonsoir`}function Qr(e){let t=B(e);if(t){let e=F[t.sessionId],n=t.steps.filter(e=>!e.blocked&&(e.done||e.skipped)).length,r=t.steps.filter(e=>!e.blocked).length;return O`
      <article class="hero">
        <p class="eyebrow on-hero">Séance en cours</p>
        <h2 class="display-m">Séance ${e.id} · ${e.title}</h2>
        <p>${n} étape${n>1?`s`:``} sur ${r} terminée${n>1?`s`:``}. Tout est enregistré.</p>
        <button class="btn btn-light btn-xl btn-block" @click=${yr}>${N(`play`,22)} Reprendre la séance</button>
      </article>`}let n=ln(e),r=F[n],i=_n(e,n,{light:!!e.nextLight}),a=vn(i),o=pn(e),s=o===x(),c=s?`Aujourd’hui`:o===C(x(),1)?`Demain`:Je[Qe(o)],l=!en(e.health),u=i.filter(e=>(e.type===`strength`||e.type===`balance`)&&!e.blocked);return O`
    <article class="hero">
      <p class="eyebrow on-hero">${s?`Votre séance du jour`:`Prochaine séance · ${c}`}</p>
      <h2 class="display-m">Séance ${r.id} · ${r.title}</h2>
      <p class="hero-sub">${r.intro}</p>
      <div class="hero-meta">
        <span>${N(`clock`,18)} environ ${a} min</span>
        <span>${N(`layers`,18)} ${u.length} exercices + cardio</span>
      </div>
      <div class="hero-thumbs" aria-hidden="true">${u.map(e=>J(e.exId))}</div>
      ${e.nextLight?O`<p class="hero-light">${N(`heart`,18)} Séance allégée : vous étiez fatiguée la dernière fois.</p>`:A}
      ${l?O`<button class="btn btn-light btn-xl btn-block" @click=${()=>v(`health`)}>${N(`shield`,22)} Avis médical nécessaire</button>`:O`<button class="btn btn-light btn-xl btn-block" @click=${()=>y(`checkin`,{sessionId:n})}>${N(`play`,22)} Commencer la séance</button>`}
      <button class="link-btn on-hero" @click=${()=>v(`sessionDetail`,{sessionId:n})}>Voir le détail de la séance</button>
    </article>`}function $r(e){let t=Qt(e.health);return e.health.clearance||t===`ok`?A:t===`urgent`?O`<button class="note note-danger note-btn" @click=${()=>v(`health`)}>${N(`alert`,22)}<div><b>Consultez un médecin avant de commencer.</b> Touchez ici quand votre médecin vous a autorisée à reprendre.</div></button>`:O`<button class="note note-warn note-btn" @click=${()=>v(`health`)}>${N(`info`,22)}<div><b>Avis médical recommandé</b> avant de commencer, à cause de vos douleurs au dos. Touchez ici pour indiquer l’accord de votre médecin.</div></button>`}function ei(e){let t=mn(e,$e(x())),n=t.done>=3?`Semaine complète, bravo !`:t.done?`Beau travail, continuez à votre rythme.`:`Une séance suffit pour lancer la semaine.`;return O`
    <section class="card stack">
      <div class="card-row"><span class="card-t" style="flex:1">Cette semaine</span><b class="good">${t.done} sur ${Math.max(3,t.planned)}</b></div>
      <div class="week">
        ${t.days.map(t=>{let n=fn(e,t);return O`<div class="wd wd-${n}" aria-label="${Je[Qe(t)]} : ${{done:`séance faite`,today:`prévue aujourd’hui`,planned:`prévue`,postponed:`reportée`,rest:`repos`}[n]}">
            <span>${Ye[Qe(t)]}</span><i>${n===`done`?N(`check`,16):``}</i></div>`})}
      </div>
      <p class="muted small">${n}</p>
    </section>`}function ti(e){let t=V(e),{week:n,total:r}=cn(e),i=bn(e);return O`
    <section class="card stack">
      <div class="card-row">
        <span class="phase-badge">${t.n}</span>
        <span style="flex:1"><b>Phase ${t.n} · ${t.name}</b><br><span class="muted small">Semaine ${Math.min(n,r)} sur ${r}</span></span>
      </div>
      <div class="phase-bar" aria-hidden="true">${Array.from({length:r},(e,t)=>O`<i class=${t+1<n?`past`:t+1===n?`cur`:``}></i>`)}</div>
      ${i?O`
        <div class="proposal">
          <p><b>Vous êtes régulière depuis ${i.sessionsDone} séances, sans douleur signalée.</b> Voulez-vous passer à la phase ${i.to} · ${i.phase.name} ?</p>
          <p class="muted small">${i.phase.goal}</p>
          <div class="btn-row">
            <button class="btn btn-primary" @click=${()=>y(`confirmPhase`,{to:i.to})}>Oui, je me sens prête</button>
            <button class="btn btn-ghost" @click=${()=>h(e=>{e.dismissed[`phase${i.to}`]=x()})}>Pas encore</button>
          </div>
        </div>`:O`<p class="muted small">${t.goal}</p>`}
    </section>`}function ni(){let e=m.state,t=e.profile.name?.trim(),n=Tn(e),r=En(e);return O`
    <div class="screen">
      <header class="home-head">
        <div style="flex:1">
          <p class="eyebrow">${et(x())}</p>
          <h1 class="display-l">${Zr()}${t?` ${t}`:``}</h1>
        </div>
        <button class="icon-btn" @click=${()=>Ge(`profile`)} aria-label="Profil et réglages">${N(`user`,24)}</button>
      </header>
      ${n.sessions===0&&!B(e)?O`<p class="lead">Bienvenue ! Votre première séance est prête. Prenez votre temps : il n’y a aucune performance à atteindre.</p>`:r>=2?O`<p class="lead">${N(`award`,20)} ${r} semaines de suite avec au moins une séance. Votre régularité paie !</p>`:A}
      ${$r(e)}
      ${Qr(e)}
      ${ei(e)}
      <div class="stats">
        ${G(String(n.sessions),n.sessions>1?`séances réalisées`:`séance réalisée`)}
        ${G(n.sec?qn(n.sec):`0 min`,`d’activité au total`)}
      </div>
      ${ti(e)}
      <div class="btn-row">
        <button class="btn btn-ghost" @click=${()=>Ge(`program`)}>${N(`calendar`,20)} Programme</button>
        <button class="btn btn-ghost" @click=${()=>Ge(`progress`)}>${N(`history`,20)} Historique</button>
      </div>
    </div>`}function ri({sessionId:e}){let t=m.ui.checkin||{mood:null,zones:[]},n=e=>g(n=>{n.checkin={...t,...e}}),r=!!m.state.nextLight,i=F[e],a=()=>{g(e=>{e.checkin=null}),b()},o=t=>{g(e=>{e.checkin=null}),vr(e,t)};return H(`Comment vous sentez-vous aujourd’hui ?`,O`
    <div class="choices">
      ${U(`En forme`,t.mood===`forme`,()=>n({mood:`forme`}))}
      ${U(`Un peu fatiguée`,t.mood===`fatiguee`,()=>n({mood:`fatiguee`}),{sub:`La séance sera allégée`})}
      ${U(`J’ai mal aujourd’hui`,t.mood===`douleur`,()=>n({mood:`douleur`}))}
    </div>

    ${t.mood===`forme`?O`
      ${r?W(`info`,`heart`,`Une séance allégée est prévue après votre dernier bilan. Vous pouvez la garder ou faire la séance normale.`):A}
      <button class="btn btn-primary btn-xl btn-block" @click=${()=>o({light:r,feeling:`forme`})}>${N(`play`,22)} Commencer la séance ${i.id}${r?` allégée`:``}</button>
      ${r?O`<button class="btn btn-ghost btn-block" @click=${()=>o({light:!1,feeling:`forme`})}>Faire la séance normale</button>`:A}`:A}

    ${t.mood===`fatiguee`?O`
      ${W(`info`,`heart`,`Séance allégée : un exercice de moins, 30 secondes de repos en plus et un cardio plus court. Inutile de compenser plus tard.`)}
      <button class="btn btn-primary btn-xl btn-block" @click=${()=>o({light:!0,feeling:`fatiguee`})}>${N(`play`,22)} Commencer la séance allégée</button>
      <button class="btn btn-ghost btn-block" @click=${a}>Reporter à un autre jour</button>`:A}

    ${t.mood===`douleur`?O`
      ${W(`warn`,`alert`,O`<b>Il vaut mieux ne pas faire cette séance aujourd’hui.</b> Reposez-vous. Si la douleur persiste, est inhabituelle ou vous inquiète, consultez votre médecin.`)}
      <div class="q">
        <p class="q-t">Où avez-vous mal ? (pour votre historique)</p>
        <div class="choices grid2">${rn.map(([e,r])=>U(r,t.zones.includes(e),()=>n({zones:t.zones.includes(e)?t.zones.filter(t=>t!==e):[...t.zones,e]}),{multi:!0,danger:e===`poitrine`}))}</div>
      </div>
      ${t.zones.includes(`poitrine`)?W(`danger`,`alert`,O`<b>Une douleur dans la poitrine doit être vue rapidement.</b> Si elle est présente maintenant, appelez le 15.`):A}
      <button class="btn btn-primary btn-xl btn-block" @click=${()=>{t.zones.length&&h(e=>{e.painLog.push({id:`p_${Yn()}`,date:x(),exId:null,sessionId:null,zones:t.zones,intensity:null,source:`checkin`})}),a(),_(`Séance reportée. Reposez-vous bien.`,`ok`)}}>Reporter la séance</button>`:A}`,{onClose:a})}function ii({to:e}){let t=P[e],n=e<m.state.phase.current;return H(n?`Revenir à la phase ${e} ?`:`Passer à la phase ${e} ?`,O`
    <div class="card-soft stack-s">
      <b>Phase ${t.n} · ${t.name}</b>
      <p class="muted">${t.goal}</p>
      <p class="small">Cardio : ${t.cardio[0]} à ${t.cardio[1]} minutes · ${t.sets.ok} série${t.sets.ok>1?`s`:``} par exercice · repos ${t.rest} s</p>
    </div>
    ${n?W(`ok`,`heart`,`Revenir en arrière est tout à fait normal : vous reprendrez quand vous serez prête.`):W(`info`,`info`,`Les charges ne changent pas : seules les séries et la durée du cardio augmentent un peu. Vous pourrez revenir en arrière à tout moment.`)}
    <button class="btn btn-primary btn-xl btn-block" @click=${()=>{h(t=>{t.phase.current=e,t.phase.history.push({n:e,from:x()})}),b(),_(`Phase ${e} · ${t.name} activée`,`ok`)}}>${n?`Oui, revenir`:`Oui, je me sens prête`}</button>
    <button class="btn btn-ghost btn-block" @click=${b}>Annuler</button>`)}function ai(e,t){let n=tn(e,t).status;return n===`suspended`?O`<span class="pill pill-danger">Suspendu</span>`:n===`hold`?O`<span class="pill pill-danger">Avis médical</span>`:n===`adapt`?O`<span class="pill pill-warn">À adapter</span>`:A}function oi(e,t,{sub:n,onClick:r}={}){let i=L[t];return O`
    <button class="ex-row" @click=${r||(()=>y(`exercise`,{exId:t}))}>
      ${J(t)}
      <span class="ex-row-t"><strong>${i.name}</strong><small>${n||i.musclesText}</small></span>
      ${ai(e,t)}
      ${N(`right`,20)}
    </button>`}function si(e){let t=V(e),n=ln(e);return O`
    <section class="sec">
      <h2 class="sec-t">Les 3 phases</h2>
      <div class="phases">
        ${Wt.map(e=>O`
          <article class="phase ${e.n===t.n?`cur`:e.n<t.n?`past`:``}">
            <div class="card-row"><span class="phase-badge">${e.n}</span><span style="flex:1"><b>${e.name}</b><br><span class="muted small">Semaines ${e.weeks[0]} à ${e.weeks[1]}</span></span>${e.n===t.n?O`<span class="pill pill-ok">En cours</span>`:A}</div>
            <p class="small">${e.goal}</p>
            <p class="small muted">${e.sets.ok===e.sets.adapt?`${e.sets.ok} série${e.sets.ok>1?`s`:``}`:`${e.sets.adapt} à ${e.sets.ok} séries`} de ${e.reps.replace(`-`,` à `)} répétitions · cardio ${e.cardio[0]} à ${e.cardio[1]} min</p>
            ${e.n===t.n?A:O`<button class="link-btn" @click=${()=>y(`confirmPhase`,{to:e.n})}>${e.n>t.n?`Passer à cette phase`:`Revenir à cette phase`}</button>`}
          </article>`)}
      </div>
      <p class="muted small">Ces étapes sont indicatives : il est tout à fait normal de rester plus longtemps dans une phase. Rien ne change sans votre accord.</p>
    </section>
    <section class="sec">
      <h2 class="sec-t">Les 3 séances</h2>
      <p class="muted small">Elles s’enchaînent dans l’ordre A, B, C. Une séance manquée est simplement reportée.</p>
      ${Gt.map(t=>{let r=_n(e,t.id);return O`
          <button class="card session-card" @click=${()=>v(`sessionDetail`,{sessionId:t.id})}>
            <span class="session-letter">${t.id}</span>
            <span style="flex:1"><b>${t.title}</b><br><span class="muted small">environ ${vn(r)} min · ${r.filter(e=>(e.type===`strength`||e.type===`balance`)&&!e.blocked).length} exercices</span></span>
            ${t.id===n?O`<span class="pill pill-ok">Prochaine</span>`:A}
            ${N(`right`,20)}
          </button>`})}
    </section>`}function ci(e){let t=e.programStart,{week:n}=cn(e);return O`
    <div class="legend">${[[`done`,`Faite`],[`today`,`Aujourd’hui`],[`planned`,`Prévue`],[`postponed`,`Reportée`],[`rest`,`Repos`]].map(([e,t])=>O`<span><i class="lg lg-${e}"></i>${t}</span>`)}</div>
    <div class="cal">
      <div class="cal-row cal-head"><span></span>${[1,2,3,4,5,6,0].map(e=>O`<span>${Ye[e]}</span>`)}</div>
      ${Array.from({length:12},(r,i)=>{let a=C(t,i*7);return O`
          <div class="cal-row ${i+1===n?`cur`:``}">
            <span class="cal-w">S${i+1}</span>
            ${Array.from({length:7},(t,n)=>{let r=C(a,n),i=fn(e,r),o=dn(e,r)[0];return O`<button class="cal-d cal-${i}" aria-label="${w(r)} : ${{done:`séance faite`,today:`aujourd’hui`,planned:`prévue`,postponed:`reportée`,rest:`repos`}[i]}"
                @click=${o?()=>v(`history`,{id:o.id}):null}>${i===`done`?o?.sessionId||N(`check`,14):S(r).getDate()}</button>`})}
          </div>`})}
    </div>
    <p class="muted small">Touchez une séance faite pour revoir son bilan.</p>`}function li(e){return O`
    ${W(`info`,`image`,`Chaque fiche : photos du mouvement, réglages de la machine, gestes étape par étape, respiration et précautions pour votre dos.`)}
    ${[[`strength`,`Renforcement`],[`balance`,`Équilibre`],[`cardio`,`Cardio doux`],[`calm`,`Retour au calme`]].map(([t,n])=>O`
      <section class="sec">
        <h2 class="sec-t">${n}</h2>
        <div class="ex-list">${Yt.filter(e=>e.kind===t).map(t=>oi(e,t.id))}</div>
      </section>`)}`}function ui(){let e=m.state,t=m.ui.programSeg;return O`
    <div class="screen">
      <header><p class="eyebrow">12 semaines · 3 séances par semaine</p><h1 class="display-l">Mon programme</h1></header>
      ${On([[`plan`,`Programme`],[`calendar`,`Calendrier`],[`library`,`Exercices`]],t,e=>g(t=>{t.programSeg=e}),`Sections du programme`)}
      ${t===`calendar`?ci(e):t===`library`?li(e):si(e)}
    </div>`}function di({sessionId:e}){let t=m.state,n=F[e],r=_n(t,e),i=V(t);return O`
    <div class="screen">
      ${Dn(`Séance ${n.id} · ${n.title}`,{eyebrow:`Phase ${i.n} · ${i.name}`})}
      <p class="muted">${n.intro} Environ ${vn(r)} minutes.</p>
      <div class="ex-list">
        ${r.map(e=>{L[e.exId];let n=e.blocked===`hold`?`Suspendu : en attente de l’accord de votre médecin`:e.blocked===`suspended`?`Suspendu après une douleur (réactivable dans le Profil)`:e.targetMin?`${Jt[e.type]} · ${e.targetMin} min`:`${e.sets} série${e.sets>1?`s`:``} · ${e.type===`balance`?e.reps:`${e.reps.replace(`-`,` à `)} répétitions`} · repos ${e.rest} s`;return O`<div class=${e.blocked?`off`:``}>${oi(t,e.exId,{sub:n})}</div>`})}
      </div>
      ${W(`info`,`heart`,`Pendant la séance, vous pouvez toujours passer un exercice, l’adapter ou signaler une douleur.`)}
    </div>`}var fi={tres_bien:`Très bien`,bien:`Bien`,moyen:`Moyen`,pas_bien:`Pas bien`},pi={pas:`Pas fatiguée`,un_peu:`Un peu fatiguée`,tres:`Très fatiguée`},mi={legere:`légère`,moyenne:`moyenne`,forte:`forte`};function hi(e){let t=[],{week:n}=cn(e);for(let r=0;r<Math.max(4,Math.min(12,n));r++){let n=C(e.programStart,r*7),i=C(n,6),a=z(e).filter(e=>e.date>=n&&e.date<=i);t.push({w:r+1,sessions:a.length,cardio:a.reduce((e,t)=>e+wn(t).cardioMin,0)})}return t}function gi(e,t,n,r,i){return O`
    <div class="bars" role="img" aria-label=${i}>
      ${e.map(e=>O`<div class="bar"><span class="bar-v">${e[t]||``}</span><i style="height:${Math.round(e[t]/n*100)}%"></i><span class="bar-l">S${e.w}</span></div>`)}
    </div>
    <p class="muted small">${r}</p>`}function _i(e){let t=Tn(e),n=hi(e),r=Cn(e),i=Object.entries(e.exState).filter(([,e])=>e.kg!=null);return O`
    <div class="stats">
      ${G(String(t.sessions),t.sessions>1?`séances`:`séance`)}
      ${G(t.sec?qn(t.sec):`0 min`,`d’activité`)}
      ${G(`${t.cardio} min`,`de cardio`)}
      ${G(String(r.length),r.length>1?`exercices maîtrisés`:`exercice maîtrisé`)}
    </div>
    <section class="card stack">
      <h2 class="card-t">Séances par semaine</h2>
      ${gi(n,`sessions`,3,`Objectif : 3 séances par semaine, à votre rythme.`,`Séances par semaine`)}
    </section>
    <section class="card stack">
      <h2 class="card-t">Minutes de cardio par semaine</h2>
      ${gi(n,`cardio`,Math.max(30,...n.map(e=>e.cardio)),`Le cardio augmente doucement d’une phase à l’autre.`,`Minutes de cardio par semaine`)}
    </section>
    <section class="sec">
      <h2 class="sec-t">Exercices maîtrisés</h2>
      ${r.length?O`<div class="ex-list">${r.map(e=>O`<div class="ex-row static">${J(e)}<span class="ex-row-t"><strong>${L[e].name}</strong><small>Au moins 3 fois sans difficulté</small></span>${N(`award`,22)}</div>`)}</div>`:O`<p class="muted">Un exercice est « maîtrisé » quand vous l’avez fait au moins 3 fois sans le trouver difficile.</p>`}
    </section>
    ${i.length?O`
      <section class="sec">
        <h2 class="sec-t">Vos charges</h2>
        <p class="muted small">Pour mémoire seulement : la charge n’est pas un objectif.</p>
        <div class="list">${i.map(([e,t])=>O`<div class="list-row"><span class="list-ic">${N(`dumbbell`,20)}</span><span><b>${L[e].name}</b></span><b>${Kn(t.kg)} kg</b></div>`)}</div>
      </section>`:A}`}function vi(e){let t=z(e).filter(e=>e.recap).slice().reverse();return t.length?O`<div class="stack">${t.map(e=>O`
    <button class="card feel" @click=${()=>v(`history`,{id:e.id})}>
      <span class="feel-d">${w(e.date)}<br><b>Séance ${e.sessionId}</b></span>
      <span class="feel-t"><b>${fi[e.recap.feeling]||`–`}</b><small>${pi[e.recap.fatigue]||``}${e.recap.pain===`oui`?` · douleur signalée`:``}</small></span>
      ${N(`right`,20)}
    </button>`)}</div>`:O`<p class="muted">Vos ressentis apparaîtront ici après votre première séance.</p>`}function yi(e){let t=e.painLog.slice().reverse();return O`
    ${W(`info`,`shield`,`Cet historique peut être montré à votre médecin ou kinésithérapeute. L’application ne pose aucun diagnostic.`)}
    ${t.length?O`<div class="list">${t.map(e=>O`
      <div class="list-row">
        <span class="list-ic pain-ic">${N(`alert`,20)}</span>
        <span><b>${e.zones.map(on).join(`, `)||`Douleur`}${e.intensity?` · ${mi[e.intensity]}`:``}</b>
          <small>${w(e.date)} · ${e.exId?L[e.exId].name:e.source===`checkin`?`Avant la séance (séance reportée)`:`Pendant la séance`}${e.urgent?` · signes d’alerte`:``}</small></span>
      </div>`)}</div>`:O`<p class="muted">Aucune douleur signalée. Tant mieux !</p>`}`}function bi(){let e=m.state,t=m.ui.progressSeg;return O`
    <div class="screen">
      <header><p class="eyebrow">Vos progrès</p><h1 class="display-l">Suivi</h1></header>
      ${On([[`overview`,`Progrès`],[`feel`,`Ressenti`],[`pain`,`Douleurs`]],t,e=>g(t=>{t.progressSeg=e}),`Sections du suivi`)}
      ${t===`feel`?vi(e):t===`pain`?yi(e):_i(e)}
      ${t===`overview`&&z(e).length?O`
        <section class="sec">
          <h2 class="sec-t">Historique des séances</h2>
          <div class="stack">${z(e).slice().reverse().map(e=>{let t=wn(e);return O`<button class="card session-card" @click=${()=>v(`history`,{id:e.id})}>
              <span class="session-letter">${e.sessionId}</span>
              <span style="flex:1"><b>${w(e.date)} · ${F[e.sessionId].title}</b><br><span class="muted small">${qn(t.durationSec)} · ${t.exercises} exercices · ${t.cardioMin} min de cardio${e.status===`stopped`?` · arrêtée`:``}</span></span>
              ${N(`right`,20)}</button>`})}</div>
        </section>`:A}
    </div>`}function xi({id:e}){let t=m.state.sessions.find(t=>t.id===e);if(!t)return A;let n=wn(t);return O`
    <div class="screen">
      ${Dn(`Séance ${t.sessionId} · ${F[t.sessionId].title}`,{eyebrow:et(t.date)})}
      <div class="stats">
        ${G(qn(n.durationSec),`d’activité`)}
        ${G(`${n.cardioMin} min`,`de cardio`)}
      </div>
      ${t.recap?O`<div class="card stack-s">
        <p><b>Ressenti :</b> ${fi[t.recap.feeling]}</p>
        <p><b>Fatigue :</b> ${pi[t.recap.fatigue]}</p>
        <p><b>Douleur :</b> ${t.recap.pain===`oui`?(t.recap.painZones||[]).map(on).join(`, `):`Non`}</p>
      </div>`:A}
      <div class="list">
        ${t.steps.map(e=>{let t=L[e.exId],n=e.blocked?e.blocked===`light`?`Retiré (séance allégée)`:`Suspendu`:e.pain?`Arrêté : douleur`:e.skipped?`Passé`:e.targetMin?`${Math.round((e.elapsedSec||0)/60)} min${e.stoppedEarly?` (arrêté plus tôt)`:``}`:e.log?.length?e.log.map(e=>e.kg==null?`${e.reps} rép.`:`${Kn(e.kg)} kg × ${e.reps}`).join(` · `):`Fait`;return O`<div class="list-row">${J(e.exId)}<span><b>${t.name}</b><small>${Jt[e.type]} · ${n}${e.rating?` · ${{facile:`facile`,bien:`bien`,difficile:`difficile`}[e.rating]}`:``}</small></span></div>`})}
      </div>
    </div>`}var Si=/iPhone|iPad|iPod/.test(navigator.userAgent),Ci=()=>window.matchMedia?.(`(display-mode: standalone)`).matches||navigator.standalone===!0;function wi(e){document.documentElement.dataset.size=e}function Ti(e){let t=e.health,n=Qt(t),r=n===`urgent`?`Signes d’alerte signalés : avis médical nécessaire`:n===`consult`?`Avis médical recommandé`:`Rien de particulier signalé`;return O`
    <button class="list-row" @click=${()=>v(`health`)}>
      <span class="list-ic">${N(`heart`,22)}</span>
      <span><b>Mon dos et ma santé</b><small>${r}${t.clearance?` · accord du médecin indiqué`:``}</small></span>
      ${N(`right`,20)}
    </button>`}function Ei(e){let t=Object.keys(e.suspended),n=Object.values(L).filter(t=>t.back.status===`hold`&&!e.health.clearance);return!t.length&&!n.length?A:O`
    <section class="sec">
      <h2 class="sec-t">Exercices suspendus</h2>
      <div class="list">
        ${n.map(e=>O`<div class="list-row">${J(e.id)}<span><b>${e.name}</b><small>En attente de l’accord de votre médecin</small></span></div>`)}
        ${t.map(t=>O`
          <div class="list-row">${J(t)}<span><b>${L[t].name}</b><small>Suspendu le ${w(e.suspended[t].date)} après une douleur</small></span>
            <button class="btn btn-ghost" @click=${()=>y(`reactivate`,{exId:t})}>Réactiver</button></div>`)}
      </div>
    </section>`}function Di(){let e=m.state,t=e.settings,n=V(e),r=e=>h(t=>{t.settings[e]=!t.settings[e]}),i=cr();return O`
    <div class="screen">
      <header><p class="eyebrow">Réglages</p><h1 class="display-l">Mon profil</h1></header>

      <section class="card stack">
        <label class="stack-s"><b>Prénom</b>
          <input class="field" .value=${e.profile.name} @change=${e=>h(t=>{t.profile.name=e.target.value.trim()})}></label>
        <div class="stack-s"><b>Mes jours de séance</b>
          ${Hn(e.profile.trainDays,e=>h(t=>{t.profile.trainDays=e}))}
          <p class="muted small">${e.profile.trainDays.map(e=>Je[e]).join(`, `)}</p>
        </div>
      </section>

      <section class="sec">
        <h2 class="sec-t">Taille du texte</h2>
        ${On([[`normal`,`Normale`],[`large`,`Grande`],[`xlarge`,`Très grande`]],t.textSize,e=>{h(t=>{t.settings.textSize=e}),wi(e)},`Taille du texte`)}
      </section>

      <section class="sec">
        <h2 class="sec-t">Santé et programme</h2>
        <div class="list">
          ${Ti(e)}
          <button class="list-row" @click=${()=>v(`program-phase`)}><span class="list-ic">${N(`layers`,22)}</span><span><b>Phase ${n.n} · ${n.name}</b><small>Changer de phase (avec confirmation)</small></span>${N(`right`,20)}</button>
        </div>
      </section>
      ${Ei(e)}

      <section class="sec">
        <h2 class="sec-t">Fin du repos</h2>
        <div class="list">
          ${kn(`Son doux`,t.sound,()=>r(`sound`))}
          ${Si?A:kn(`Vibration`,t.vibration,()=>r(`vibration`))}
          ${kn(`Notification`,t.notifications&&i===`granted`,async()=>{if(i!==`granted`){let e=await lr();h(t=>{t.settings.notifications=e===`granted`}),e!==`granted`&&_(Si&&!Ci()?`Sur iPhone, ajoutez d’abord l’application à l’écran d’accueil.`:`Notifications refusées dans les réglages du téléphone.`)}else r(`notifications`)},Si&&!Ci()?`Sur iPhone : ajoutez d’abord l’application à l’écran d’accueil`:`Quand l’application est en arrière-plan`)}
          ${kn(`Garder l’écran allumé`,t.keepAwake,()=>r(`keepAwake`),`Pendant la séance`)}
          <button class="list-row" @click=${()=>{rr(),fr(``,{sound:t.sound,vibration:t.vibration,notify:!1,tone:`soft`})}}><span class="list-ic">${N(`sound`,22)}</span><span><b>Tester le son</b></span></button>
        </div>
      </section>

      <section class="sec">
        <h2 class="sec-t">Mes données</h2>
        <p class="muted small">Tout est enregistré uniquement sur ce téléphone, même sans Internet.</p>
        <div class="list">
          <button class="list-row" @click=${Oi}><span class="list-ic">${N(`download`,22)}</span><span><b>Sauvegarder mes données</b><small>Un fichier à garder (ou à transférer sur un nouveau téléphone)</small></span></button>
          <label class="list-row"><span class="list-ic">${N(`upload`,22)}</span><span><b>Restaurer une sauvegarde</b><small>Remplace les données actuelles</small></span>
            <input type="file" accept="application/json,.json" hidden @change=${ki}></label>
          <button class="list-row" @click=${()=>y(`confirmReset`)}><span class="list-ic">${N(`trash`,22)}</span><span><b>Tout effacer</b><small>Recommencer depuis le début</small></span></button>
        </div>
      </section>
      <p class="muted small center">Forge Sérénité · fonctionne hors connexion</p>
    </div>`}async function Oi(){let e=JSON.stringify(Le(m.state),null,2),t=`serenite-sauvegarde-${x()}.json`;try{let n=new File([e],t,{type:`application/json`});if(navigator.canShare?.({files:[n]})){await navigator.share({files:[n],title:`Sauvegarde Forge Sérénité`});return}}catch(e){if(e?.name===`AbortError`)return}let n=new Blob([e],{type:`application/json`}),r=document.createElement(`a`);r.href=URL.createObjectURL(n),r.download=t,document.body.appendChild(r),r.click(),r.remove(),setTimeout(()=>URL.revokeObjectURL(r.href),2e3),_(`Sauvegarde créée`,`ok`)}async function ki(e){let t=e.target.files?.[0];if(e.target.value=``,t)try{let e=JSON.parse(await t.text());if(e?._export?.app!==`forge-serenite`)throw Error(`format`);y(`confirmImport`,{data:e})}catch{_(`Ce fichier n’est pas une sauvegarde de Forge Sérénité.`)}}function Ai({data:e},t){return H(`Restaurer cette sauvegarde ?`,O`
    <p>Les données actuelles de ce téléphone seront remplacées par celles de la sauvegarde.</p>
    <button class="btn btn-primary btn-xl btn-block" @click=${()=>{let n=t(e);delete n._export,h(e=>{Object.keys(e).forEach(t=>delete e[t]),Object.assign(e,n)}),wi(m.state.settings.textSize),b(),_(`Sauvegarde restaurée`,`ok`)}}>Restaurer</button>
    <button class="btn btn-ghost btn-block" @click=${b}>Annuler</button>`)}function ji(){return H(`Tout effacer ?`,O`
    <p>Vos séances, votre questionnaire et vos réglages seront supprimés de ce téléphone. Pensez à sauvegarder d’abord si besoin.</p>
    <button class="btn btn-danger btn-xl btn-block" @click=${async()=>{await Re(),location.reload()}}>Oui, tout effacer</button>
    <button class="btn btn-ghost btn-block" @click=${b}>Annuler</button>`)}function Mi({exId:e}){return H(`Réactiver « ${L[e].name} » ?`,O`
    ${W(`warn`,`shield`,`Réactivez cet exercice seulement si la douleur a disparu, ou avec l’accord de votre médecin. Il sera de nouveau proposé dans vos séances, et vous pourrez toujours l’arrêter.`)}
    <button class="btn btn-primary btn-xl btn-block" @click=${()=>{h(t=>{delete t.suspended[e]}),b(),_(`Exercice réactivé`,`ok`)}}>Oui, réactiver</button>
    <button class="btn btn-ghost btn-block" @click=${b}>Annuler</button>`)}function Ni(){let e=m.state,t=e.health,n=e=>h(t=>{e(t.health),t.health.updatedAt=x()});return O`
    <div class="screen">
      ${Dn(`Mon dos et ma santé`,{eyebrow:t.updatedAt?`Mis à jour le ${w(t.updatedAt)}`:`Questionnaire`})}
      ${zn(e,{inProfile:!0})}
      <section class="card stack">
        ${kn(`Mon médecin m’autorise à reprendre le sport`,t.clearance,()=>n(e=>{e.clearance=!e.clearance,e.clearance&&(e.acknowledged=!0)}),`Débloque les exercices en attente d’avis médical. Ils restent à faire seulement s’ils sont indolores.`)}
        ${Qt(t)===`consult`&&!t.clearance?kn(`Je commence très doucement en attendant`,t.acknowledged,()=>n(e=>{e.acknowledged=!e.acknowledged})):A}
      </section>
      ${Mn(t).map(e=>O`
        <section class="q card">
          <h2 class="q-t">${e.title}</h2>
          ${e.help?O`<p class="q-h">${e.help}</p>`:A}
          ${e.render(t,n)}
        </section>`)}
      <button class="btn btn-primary btn-xl btn-block" @click=${()=>{Ke(),_(`Réponses enregistrées`,`ok`)}}>Enregistrer</button>
    </div>`}function Pi(){let e=m.state.phase.current;return O`
    <div class="screen">
      ${Dn(`Ma phase`,{eyebrow:`Programme`})}
      <p class="muted">Changez de phase quand vous vous sentez prête, ou revenez en arrière si besoin. Les charges ne changent jamais automatiquement.</p>
      ${[1,2,3].map(t=>{let n=P[t];return O`
          <article class="card stack-s phase ${t===e?`cur`:``}">
            <div class="card-row"><span class="phase-badge">${t}</span><b style="flex:1">${n.name}</b>${t===e?O`<span class="pill pill-ok">En cours</span>`:A}</div>
            <p class="small">${n.goal}</p>
            ${t===e?A:O`<button class="btn btn-ghost btn-block" @click=${()=>y(`confirmPhase`,{to:t})}>${t>e?`Passer à cette phase`:`Revenir à cette phase`}</button>`}
          </article>`})}
    </div>`}var Fi=e=>e.replace(/(-?\d+(?:\.\d+)?) (-?\d+(?:\.\d+)?)/g,(e,t,n)=>`${(100-Number(t)).toFixed(1)} ${n}`),Ii=[[`traps`,`M44 31 Q37 33 31 37 L44 35 Z`],[`delts_front`,`M31 37 Q25 39 24 49 Q28 51 31 49 Q32 43 36 39 Z`],[`delts_side`,`M28 37 Q21 39 20 48 L23.5 49.5 Q24.5 42 30 38.5 Z`],[`chest`,`M49 37 L36 39.5 Q31 44 31.5 52 Q34 58 42 59 Q48 59 49 55 Z`],[`biceps`,`M24 52 Q21 60 22 70 Q25 72 28 70 Q30 61 30 53 Z`],[`forearms`,`M21.5 73 Q17 84 17 95 Q20 97 22 95 Q26 85 27.5 74 Z`],[`obliques`,`M42 61 Q36 63 35 71 L37 92 L43 96 Z`],[`abductors`,`M35 93 Q31.5 99 32.5 106 L37 101 Z`],[`quads`,`M37 101 Q31 118 33 139 Q37 145 43 143 Q47 127 47 109 L44 100 Z`],[`adductors`,`M47.5 105 L49.5 105 L49.5 127 Q47.5 131 45.5 129 Q47.5 117 47.5 105 Z`],[`calves`,`M34 152 Q32 168 35 185 L40 185 Q42 168 41 152 Z`]],Li=[[`abs`,`M43.5 60.5 L56.5 60.5 L56 95 Q50 99 44 95 Z`]],Ri=[[`delts_rear`,`M31 38 Q23 40 21.5 50 Q26 52 30 49 Q31 43 34.5 40 Z`],[`lats`,`M34.5 41 L42.5 43 L43 56 L48.5 64 L46.5 77 Q40 75 37 67 Q33 57 32 46 Z`],[`triceps`,`M22 51.5 Q19.5 60 21.5 70 Q25.5 71.5 28 69.5 Q30 60 29.5 51.5 Z`],[`forearms`,`M21.5 73 Q17 84 17 95 Q20 97 22 95 Q26 85 27.5 74 Z`],[`abductors`,`M36 86 Q32.5 92 34 98.5 L39 91 Z`],[`glutes`,`M39 89 Q33.5 96 34.5 106 Q40.5 112 49.5 108 L49.5 89.5 Z`],[`hamstrings`,`M35 110 Q33 127 36 142 L44 142 Q47 126 48.5 111 Z`],[`calves`,`M34 150 Q30.5 162 34 176 Q38 180 42 176 Q44 162 41 150 Z`]],zi=[[`traps`,`M50 26 L43 31 L32 37 L44 40 L50 44 L56 40 L68 37 L57 31 Z`],[`upper_back`,`M44 41 L50 45 L56 41 L57.5 54 L50 60 L42.5 54 Z`],[`lower_back`,`M44.5 70 L55.5 70 L57 88 L43 88 Z`]];function Bi(e,t,n){return t.includes(e)?`mm-p`:n.includes(e)?`mm-s`:`mm-b`}function Vi(e,t,n,r,i){return St`
    <ellipse class="mm-n" cx="50" cy="15" rx="8.5" ry="10.5"></ellipse>
    <path class="mm-n" d="M45 25 L55 25 L56 32 L44 32 Z"></path>
    ${e.map(([e,t])=>St`
      <path class=${Bi(e,n,r)} d=${t}></path>
      <path class=${Bi(e,n,r)} d=${Fi(t)}></path>`)}
    ${t.map(([e,t])=>St`<path class=${Bi(e,n,r)} d=${t}></path>`)}
    ${i?``:St`<path class="mm-n" d="M44 97 Q50 100 56 97 L53 103 L47 103 Z"></path>`}
    <circle class="mm-n" cx="38.5" cy="147.5" r="3.6"></circle><circle class="mm-n" cx="61.5" cy="147.5" r="3.6"></circle>
    <ellipse class="mm-n" cx="18.5" cy="100.5" rx="3.2" ry="4.6"></ellipse><ellipse class="mm-n" cx="81.5" cy="100.5" rx="3.2" ry="4.6"></ellipse>
    <ellipse class="mm-n" cx="37.5" cy="190" rx="5" ry="3"></ellipse><ellipse class="mm-n" cx="62.5" cy="190" rx="5" ry="3"></ellipse>`}function Hi(e=[],t=[],{compact:n=!1}={}){return O`
    <div class="mm ${n?`mm-compact`:``}">
      <figure>
        <svg viewBox="12 2 76 194" role="img" aria-label="Muscles sollicités, vue de face">${Vi(Ii,Li,e,t,!1)}</svg>
        ${n?``:O`<figcaption>Face</figcaption>`}
      </figure>
      <figure>
        <svg viewBox="12 2 76 194" role="img" aria-label="Muscles sollicités, vue de dos">${Vi(Ri,zi,e,t,!0)}</svg>
        ${n?``:O`<figcaption>Dos</figcaption>`}
      </figure>
    </div>`}function Ui(e,t){if(e.kind===`cardio`)return[[`${t.cardio[0]}–${t.cardio[1]}`,`minutes`],[`Facile`,`intensité`],[`Parler`,`possible`]];if(e.kind===`calm`)return[[`${t.calm}`,`minutes`],[`5`,`respirations`],[`Lent`,`rythme`]];let n=e.kind===`balance`?t.n===1?1:2:t.sets[e.back.status===`ok`?`ok`:`adapt`];return[[String(n),n>1?`séries`:`série`],[e.hold?`${e.hold} s`:t.reps.replace(`-`,`–`),e.hold?`par jambe`:`répétitions`],[`${t.rest} s`,`de repos`]]}var $=(e,t)=>O`<section class="exd-sec"><h3 class="exd-h">${e}</h3>${t}</section>`;function Wi({exId:e}){let t=m.state,n=L[e],r=V(t);tn(t,e).status;let i=nn(t,e),a=t.exState[e],o=t.sessions.filter(e=>e.status!==`active`).map(t=>({date:t.date,step:t.steps.find(t=>t.exId===e&&t.log?.length)})).filter(e=>e.step).slice(-4).reverse();return H(n.name,O`
    <div class="exd">
      ${tr(e)}
      <p class="exm-cap">${n.photoNote?O`${n.photoNote} · `:A}${n.media===`photo`?Xn:`Schéma : aucune photo libre de droits ne montre ce mouvement.`}</p>

      ${W(i.tone,`shield`,O`<b>Votre dos (${i.label.toLowerCase()}) :</b> ${i.text.replace(/^(À adapter|Suspendu|Accord médical indiqué) : /,``)}`)}

      <div class="exd-dose">${Ui(n,r).map(([e,t])=>O`<div><b>${e}</b><span>${t}</span></div>`)}</div>
      <p class="muted small">Dosage de la phase ${r.n} · ${r.name}. Niveau : ${Xt[n.level]}.</p>

      ${$(`Où le trouver`,O`<p>${n.machine}</p>`)}
      ${$(`Muscles sollicités`,O`
        <div class="exd-muscles">${n.p.length?Hi(n.p,n.s):A}<p>${n.musclesText}</p></div>`)}
      ${$(`Réglages`,O`<ul class="exd-list">${n.settings.map(e=>O`<li>${N(`settings`,18)}<span>${e}</span></li>`)}</ul>`)}
      ${$(`Position de départ`,O`<p>${n.setup}</p>`)}
      ${$(`Étape par étape`,O`<ol class="exd-steps">${n.steps.map(e=>O`<li>${e}</li>`)}</ol>`)}
      ${$(`Respiration`,O`<p class="exd-breath">${N(`wind`,20)} ${n.breath}</p>`)}
      ${$(`Erreurs à éviter`,O`<ul class="exd-list bad">${n.errors.map(e=>O`<li>${N(`x`,18)}<span>${e}</span></li>`)}</ul>`)}
      ${$(`Variante plus facile`,O`<p>${n.easier}</p>`)}
      ${$(`Si la machine est prise`,O`<p>${n.alternative}</p>`)}
      ${o.length?$(`Vos dernières fois`,O`
        <ul class="exd-hist">${o.map(e=>O`<li><span>${w(e.date)}</span><b>${e.step.log.map(e=>e.kg==null?`${e.reps} rép.`:`${Kn(e.kg)} kg × ${e.reps}`).join(` · `)}</b>${e.step.rating?O`<em>${{facile:`Facile`,bien:`Bien`,difficile:`Difficile`}[e.step.rating]}</em>`:A}</li>`)}</ul>`):A}
      ${a?.easier?W(`ok`,`check`,`Vous utilisez la version plus facile de cet exercice.`):A}
      ${W(`danger`,`alert`,`Arrêtez immédiatement si une douleur apparaît. Ne continuez jamais malgré la douleur.`)}
    </div>`)}var Gi=[[`tres_bien`,`Très bien`],[`bien`,`Bien`],[`moyen`,`Moyen`],[`pas_bien`,`Pas bien`]],Ki=[[`pas`,`Pas fatiguée`],[`un_peu`,`Un peu fatiguée`],[`tres`,`Très fatiguée`]];function qi(e){let t=m.ui.recap||{feeling:null,pain:null,painZones:[],painIntensity:null,painExIds:[],suspend:!0,fatigue:null,difficult:[],adaptNext:null},n=e=>g(n=>{n.recap={...t,...e}}),r=(e,r)=>n({[e]:t[e].includes(r)?t[e].filter(e=>e!==r):[...t[e],r]}),i=e.steps.filter(e=>!e.blocked),a=i.filter(e=>e.type===`strength`||e.type===`balance`),o=a.filter(e=>e.done),s=i.find(e=>e.type===`cardio`),c=s?Math.round((s.timer?Q(s):s.elapsedSec||0)/60):0,l=Math.round((Date.now()-e.startedAt-e.pausedTotal-(e.pausedAt?Date.now()-e.pausedAt:0))/1e3),u=i.some(e=>!e.done&&!e.skipped),d=i.some(e=>e.pain),f=t.feeling&&t.pain&&t.fatigue&&t.adaptNext&&(t.pain===`non`||t.painZones.length);return O`
    <div class="screen recap">
      <header class="recap-head">
        <img class="ob-mark" src="icon-192.png" alt="" aria-hidden="true">
        <h1 class="display-l">${u?`Séance terminée`:`Bravo, séance terminée !`}</h1>
        <p class="muted">${u?`Ce que vous avez fait compte. Rien n’est à rattraper.`:`Vous avez pris soin de vous aujourd’hui.`}</p>
      </header>
      <div class="stats">
        <div class="stat"><b>${qn(Math.min(l,10800))}</b><span>d’activité</span></div>
        <div class="stat"><b>${o.length}/${a.length}</b><span>exercices faits</span></div>
        <div class="stat"><b>${c} min</b><span>de cardio</span></div>
        <div class="stat"><b>${e.light?`Allégée`:`Normale`}</b><span>séance</span></div>
      </div>
      ${d?W(`warn`,`alert`,`Une douleur a été signalée pendant la séance. Elle est enregistrée dans votre historique.`):A}

      <div class="q">
        <p class="q-t">Comment vous sentez-vous ?</p>
        <div class="choices grid2">${Gi.map(([e,r])=>U(r,t.feeling===e,()=>n({feeling:e})))}</div>
      </div>

      <div class="q">
        <p class="q-t">Avez-vous ressenti une douleur${d?` (autre que celle déjà signalée)`:``} ?</p>
        <div class="choices grid2">${U(`Non`,t.pain===`non`,()=>n({pain:`non`}))}${U(`Oui`,t.pain===`oui`,()=>n({pain:`oui`}))}</div>
        ${t.pain===`oui`?O`
          <p class="q-h">Où ?</p>
          <div class="choices grid2">${rn.map(([e,n])=>U(n,t.painZones.includes(e),()=>r(`painZones`,e),{multi:!0,danger:e===`poitrine`}))}</div>
          <p class="q-h">Intensité</p>
          <div class="choices grid2">${an.map(([e,r])=>U(r,t.painIntensity===e,()=>n({painIntensity:e})))}</div>
          ${o.length?O`
            <p class="q-h">Pendant quel exercice ? (facultatif)</p>
            <div class="choices">${o.map(e=>U(L[e.exId].name,t.painExIds.includes(e.exId),()=>r(`painExIds`,e.exId),{multi:!0}))}</div>
            ${t.painExIds.length?U(`Ne plus me proposer ces exercices pour l’instant`,t.suspend,()=>n({suspend:!t.suspend}),{multi:!0}):A}`:A}
          ${t.painZones.includes(`poitrine`)?W(`danger`,`alert`,O`<b>Une douleur dans la poitrine doit être vue rapidement par un médecin.</b> Si elle est présente maintenant, appelez le 15.`):W(`info`,`info`,`Si cette douleur persiste, revient ou vous inquiète, parlez-en à votre médecin.`)}`:A}
      </div>

      <div class="q">
        <p class="q-t">Étiez-vous fatiguée ?</p>
        <div class="choices">${Ki.map(([e,r])=>U(r,t.fatigue===e,()=>n({fatigue:e})))}</div>
      </div>

      ${o.length?O`
        <div class="q">
          <p class="q-t">Un exercice était-il difficile ?</p>
          <p class="q-h">Facultatif. La version plus facile vous sera proposée la prochaine fois.</p>
          <div class="choices">${o.map(e=>U(L[e.exId].name,t.difficult.includes(e.exId),()=>r(`difficult`,e.exId),{multi:!0}))}</div>
        </div>`:A}

      <div class="q">
        <p class="q-t">Souhaitez-vous adapter la prochaine séance ?</p>
        <div class="choices">
          ${U(`Non, elle me convient`,t.adaptNext===`non`,()=>n({adaptNext:`non`}))}
          ${U(`Oui, plus légère`,t.adaptNext===`leger`,()=>n({adaptNext:`leger`}),{sub:`Moins d’exercices, plus de repos, cardio plus court`})}
        </div>
      </div>

      <button class="btn btn-primary btn-xl btn-block" ?disabled=${!f} @click=${()=>{Ur(t),g(e=>{e.recap=null})}}>${N(`check`,22)} Enregistrer ma séance</button>
      ${u?O`<button class="btn btn-ghost btn-block" @click=${Hr}>Revenir à la séance</button>`:A}
    </div>`}var Ji=(e,t,n,{warm:r=!1}={})=>{let i=2*Math.PI*92;return O`
    <div class="ring ${r?`ring-warm`:``}">
      <svg viewBox="0 0 220 220" aria-hidden="true">
        <circle cx="110" cy="110" r=${92} class="ring-bg"/>
        <circle cx="110" cy="110" r=${92} class="ring-fg" stroke-dasharray=${i} stroke-dashoffset=${i*(1-Math.max(0,Math.min(1,e)))}/>
      </svg>
      <div class="ring-t"><b>${t}</b>${n?O`<span>${n}</span>`:A}</div>
    </div>`};function Yi(e){let t=e.steps.filter(e=>!e.blocked),n=t.indexOf(Z(e));return O`
    <header class="ss-top">
      <button class="icon-btn" @click=${()=>y(`quit`)} aria-label="Quitter ou mettre en pause">${N(`down`,24)}</button>
      <div class="ss-top-t">
        <span>${Xr(e)}</span>
        <b>${n>=0?`Étape ${n+1} sur ${t.length}`:`Terminé`}</b>
      </div>
      <button class="icon-btn" @click=${()=>y(`overview`)} aria-label="Toutes les étapes">${N(`layers`,22)}</button>
    </header>
    <div class="ss-dots" aria-hidden="true">
      ${t.map(t=>O`<i class=${t.done?`done`:t.skipped?t.pain?`pain`:`skip`:t===Z(e)?`cur`:``}></i>`)}
    </div>`}function Xi(e){let t=nn(m.state,e);return O`<span class="pill pill-${t.tone}">${N(t.tone===`ok`?`heart`:`shield`,15)} ${t.label}</span>`}function Zi(e,t){let n=L[t.exId],r=Q(t),i=t.targetMin*60,a=!!t.timer?.runningSince,o=r>=i,s={warmup:`Allure très facile, pour réveiller le corps en douceur.`,cardio:`Vous devez pouvoir parler en faisant des phrases. Vous pouvez ralentir ou arrêter à tout moment.`,calm:`Ralentissez, puis terminez par 5 respirations lentes, assise.`}[t.type];return O`
    <section class="ss-body">
      ${tr(t.exId,{labels:!1})}
      <div class="stack-s">
        <p class="eyebrow">${Jt[t.type]} · ${t.targetMin} min${t.type===`cardio`?` (entre ${t.range[0]} et ${t.range[1]})`:``}</p>
        <h1 class="display-m">${n.name}</h1>
        <p class="muted">${s}</p>
      </div>
      ${t.light?W(`info`,`heart`,`Cardio raccourci : séance allégée aujourd’hui.`):A}
      <div class="ss-timer">
        ${Ji(r/i,o?`Terminé`:Jn(i-r),o?`${Math.floor(r/60)} min faites`:a?`en cours`:`prêt à démarrer`)}
        <div class="ss-adj">
          <button class="btn btn-ghost" ?disabled=${t.targetMin<=1} @click=${()=>Pr(-1)} aria-label="Une minute de moins">− 1 min</button>
          <button class="btn btn-ghost" ?disabled=${t.type===`cardio`&&t.targetMin>=t.range[1]} @click=${()=>Pr(1)} aria-label="Une minute de plus">+ 1 min</button>
        </div>
      </div>
      <button class="link-btn" @click=${()=>y(`exercise`,{exId:t.exId})}>${N(`info`,18)} Comment régler la machine</button>
    </section>
    <footer class="ss-foot">
      ${o?O`<button class="btn btn-primary btn-xl btn-block" @click=${Fr}>${N(`check`,22)} Continuer</button>`:O`<button class="btn btn-primary btn-xl btn-block" @click=${Nr}>${N(a?`pause`:`play`,22)} ${a?`Pause`:r?`Reprendre`:`Démarrer le chrono`}</button>`}
      <div class="btn-row">
        ${!o&&(a||r>0)?O`<button class="btn btn-ghost" @click=${Fr}>${t.type===`cardio`?`Arrêter le cardio`:`J’ai terminé`}</button>`:O`<button class="btn btn-ghost" @click=${()=>y(`confirmSkip`)}>Passer</button>`}
        <button class="btn btn-danger-soft" @click=${()=>y(`pain`)}>${N(`alert`,20)} Douleur</button>
      </div>
    </footer>`}function Qi(e){let t=m.ui.hold;if(!t)return O`<button class="btn btn-soft btn-block" @click=${()=>Ir(e.hold)}>${N(`timer`,20)} Lancer le chrono ${e.hold} s</button>`;let n=Math.max(0,Math.ceil((t.endsAt-Date.now())/1e3));return O`<div class="hold">${n?O`<b>${n}</b><span>secondes</span>`:O`<b>${N(`check`,30)}</b><span>Changez de jambe</span>`}</div>`}function $i(e,t){let n=L[t.exId],r=Math.min(t.log.length+1,t.sets),i=t.log.length+1>=t.sets,a=t.draft||{reps:10,kg:m.state.exState[t.exId]?.kg??null},o=xn(m.state,t.exId),s=m.state.exState[t.exId]?.suggestEasier&&!t.easier,c=m.state.exState[t.exId]?.kg;return O`
    <section class="ss-body">
      ${tr(t.exId)}
      <div class="stack-s">
        <div class="pills">${Xi(t.exId)}${t.easier?O`<span class="pill pill-ok">${N(`check`,15)} Version facile</span>`:A}</div>
        <h1 class="display-m">${n.name}</h1>
        <p class="ss-target">Série <b>${r}</b> sur ${t.sets} · ${t.type===`balance`?t.reps:`${t.reps.replace(`-`,` à `)} répétitions confortables`}</p>
      </div>

      ${s?O`
        <div class="proposal">
          <p><b>Cet exercice vous a semblé difficile la dernière fois.</b> Voulez-vous la version plus facile ?</p>
          <p class="muted small">${n.easier}</p>
          <div class="btn-row"><button class="btn btn-primary" @click=${()=>Gr(!0)}>Oui</button><button class="btn btn-ghost" @click=${()=>Gr(!1)}>Non merci</button></div>
        </div>`:A}
      ${o&&!t.loadUp&&!t.log.length?O`
        <div class="proposal">
          <p><b>Bravo, cet exercice vous a semblé facile deux fois de suite.</b> Voulez-vous essayer un cran de charge en plus aujourd’hui ?</p>
          <p class="muted small">Seulement si vous en avez envie. Revenez au cran précédent au moindre inconfort.</p>
          <div class="btn-row"><button class="btn btn-primary" @click=${()=>Ar(!0)}>Oui, j’essaie</button><button class="btn btn-ghost" @click=${()=>Ar(!1)}>Non, je garde</button></div>
        </div>`:A}
      ${t.loadUp?W(`ok`,`up`,`Un cran de plus aujourd’hui. Revenez en arrière au moindre inconfort.`):A}
      ${t.easier?W(`ok`,`info`,O`<b>Version facile :</b> ${n.easier}`):A}
      ${nn(m.state,t.exId).tone===`ok`?A:W(`warn`,`shield`,nn(m.state,t.exId).text)}

      ${n.hold?Qi(n):A}

      <ol class="ss-steps">${n.steps.slice(0,4).map(e=>O`<li>${e}</li>`)}</ol>
      <button class="link-btn" @click=${()=>y(`exercise`,{exId:t.exId})}>${N(`info`,18)} Toutes les explications et les réglages</button>

      ${n.kind===`strength`?O`
        <details class="ss-log">
          <summary>${N(`edit`,18)} Noter ma charge${c==null?` (facultatif)`:` (dernière fois : ${Kn(c)} kg)`}</summary>
          <div class="ss-log-row">
            <span>Charge</span>
            <button class="icon-btn" @click=${()=>Tr(`kg`,Math.max(0,(a.kg??0)-1))} aria-label="Moins un kilo">${N(`minus`,20)}</button>
            <b>${a.kg==null?`–`:`${Kn(a.kg)} kg`}</b>
            <button class="icon-btn" @click=${()=>Tr(`kg`,(a.kg??0)+1)} aria-label="Plus un kilo">${N(`plus`,20)}</button>
          </div>
          <div class="ss-log-row">
            <span>Répétitions</span>
            <button class="icon-btn" @click=${()=>Tr(`reps`,Math.max(1,a.reps-1))} aria-label="Une répétition de moins">${N(`minus`,20)}</button>
            <b>${a.reps}</b>
            <button class="icon-btn" @click=${()=>Tr(`reps`,a.reps+1)} aria-label="Une répétition de plus">${N(`plus`,20)}</button>
          </div>
          <p class="muted small">La charge n’est pas un objectif : notez-la seulement pour vous en souvenir.</p>
        </details>`:A}
    </section>
    <footer class="ss-foot">
      <button class="btn btn-primary btn-xl btn-block" @click=${Er}>${N(`check`,22)} ${i?`Exercice terminé`:`Série terminée`}</button>
      <div class="btn-row">
        <button class="btn btn-ghost" @click=${()=>y(`confirmSkip`)}>Passer</button>
        <button class="btn btn-ghost" @click=${()=>y(`adapt`)}>${N(`edit`,20)} Adapter</button>
      </div>
      <button class="btn btn-danger-soft btn-block" @click=${()=>y(`pain`)}>${N(`alert`,20)} Signaler une douleur</button>
    </footer>`}function ea(e){let t=Lr(e),n=Z(e),r=n&&L[n.exId],i=n&&n.log&&n.log.length>0;return O`
    <div class="rest" role="dialog" aria-label="Repos">
      <p class="eyebrow">Repos</p>
      ${Ji(t/(e.rest.total||1),t?Jn(t):`Terminé`,t?`Respirez calmement`:`Quand vous êtes prête`,{warm:!t})}
      ${r?O`
        <div class="rest-next">
          ${J(n.exId)}
          <span><small>${i?`Série suivante`:`Ensuite`}</small><b>${r.name}</b></span>
        </div>`:A}
      <button class="btn btn-primary btn-xl btn-block" @click=${zr}>${t?`Je suis prête`:`Continuer`}</button>
      ${t?O`<button class="btn btn-ghost btn-block" @click=${()=>Rr(30)}>+ 30 secondes de repos</button>`:A}
    </div>`}function ta(){let e=B(m.state);if(!e)return A;if(m.ui.sessionView===`recap`)return O`<div class="ss">${qi(e)}</div>`;let t=Z(e);return t?O`
    <div class="ss">
      ${Yi(e)}
      ${e.pausedAt?O`
        <div class="ss-paused">
          <h2 class="display-m">Séance en pause</h2>
          <p class="muted">Prenez le temps qu’il vous faut. Tout est enregistré.</p>
          <button class="btn btn-primary btn-xl btn-block" @click=${xr}>${N(`play`,22)} Reprendre</button>
        </div>`:e.rest?ea(e):mr(t)?Zi(e,t):$i(e,t)}
    </div>`:O`<div class="ss">${qi(e)}</div>`}function na(){let e=Z(B(m.state)),t=e&&Sn(m.state,e)&&!e.extraSet;return H(`Comment était cet exercice ?`,O`
    <p class="muted">Votre réponse aide l’application à vous proposer la bonne difficulté. Rien ne change sans votre accord.</p>
    <div class="choices">
      ${[[`facile`,`Facile`,`J’aurais pu en faire beaucoup plus`],[`bien`,`Bien`,`Un effort confortable`],[`difficile`,`Difficile`,`C’était dur ou peu agréable`]].map(([e,t,n])=>U(t,!1,()=>Dr(e),{sub:n}))}
    </div>
    ${t?O`
      <div class="proposal">
        <p><b>Facultatif :</b> cet exercice est bien maîtrisé. Vous pouvez faire une 3e série si vous en avez envie.</p>
        <button class="btn btn-soft btn-block" @click=${()=>Dr(`bien`,{extraSet:!0})}>Faire une 3e série</button>
      </div>`:A}`,{onClose:()=>Dr(`bien`)})}function ra(){let e=Z(B(m.state)),t=L[e.exId],n=(e,t,n,r)=>O`<button class="list-row" @click=${r}><span class="list-ic">${N(e,22)}</span><span><b>${t}</b><small>${n}</small></span>${N(`right`,20)}</button>`;return H(`Adapter l’exercice`,O`
    <div class="list">
      ${e.type===`strength`||e.type===`balance`?n(`steps`,e.easier?`Revenir à la version habituelle`:`Version plus facile`,t.easier,()=>kr(`easier`)):A}
      ${n(`minus`,`Faire une seule série`,`Pour aujourd’hui seulement`,()=>kr(`oneSet`))}
      ${e.type===`strength`?n(`layers`,`Moins de répétitions`,`8 répétitions suffisent`,()=>kr(`lessReps`)):A}
      ${n(`clock`,`Plus de repos`,`30 secondes de plus entre les séries`,()=>kr(`moreRest`))}
      ${n(`info`,`Revoir les explications`,`Photos, réglages, gestes et respiration`,()=>y(`exercise`,{exId:e.exId}))}
    </div>
    ${W(`info`,`heart`,`Un inconfort qui devient une douleur ? N’adaptez pas : touchez « Signaler une douleur ».`)}`)}function ia(){let e=m.ui.painDraft||{zones:[],intensity:null,urgent:!1,suspend:!0},t=t=>g(n=>{n.painDraft={...e,...t}}),n=n=>t({zones:e.zones.includes(n)?e.zones.filter(e=>e!==n):[...e.zones,n]}),r=Z(B(m.state)),i=e.urgent||e.zones.includes(`poitrine`);return H(`Arrêtez l’exercice`,O`
    ${W(`danger`,`alert`,O`<b>Ne continuez pas malgré la douleur.</b> Posez la charge et installez-vous confortablement.`)}
    <div class="q">
      <p class="q-t">Où avez-vous mal ?</p>
      <div class="choices grid2">${rn.map(([t,r])=>U(r,e.zones.includes(t),()=>n(t),{multi:!0,danger:t===`poitrine`}))}</div>
    </div>
    <div class="q">
      <p class="q-t">Quelle intensité ?</p>
      <div class="choices grid2">${an.map(([n,r])=>U(r,e.intensity===n,()=>t({intensity:n})))}</div>
    </div>
    <div class="q">
      ${U(`Douleur brutale, gêne dans la poitrine, malaise ou essoufflement inhabituel`,e.urgent,()=>t({urgent:!e.urgent}),{multi:!0,danger:!0})}
      ${r.type===`calm`?A:U(`Ne plus me proposer « ${L[r.exId].name} » pour l’instant`,e.suspend,()=>t({suspend:!e.suspend}),{multi:!0,sub:`Vous pourrez le réactiver dans votre Profil, après avis médical si besoin.`})}
    </div>
    <button class="btn ${i?`btn-danger`:`btn-primary`} btn-xl btn-block" ?disabled=${!e.zones.length&&!e.urgent}
      @click=${()=>{jr({...e,urgent:i}),g(e=>{e.painDraft=null})}}>Enregistrer</button>`,{onClose:()=>{g(e=>{e.painDraft=null}),b()}})}function aa({intensity:e}){return H(`C’est noté`,O`
    <p>La douleur est enregistrée avec l’exercice concerné. <b>Aucun autre exercice ne le remplace aujourd’hui.</b></p>
    ${e===`forte`?W(`warn`,`alert`,O`Pour une douleur forte, il vaut mieux <b>arrêter la séance</b>. Si elle persiste, revient ou vous inquiète, consultez votre médecin.`):W(`info`,`info`,`Si la douleur persiste, revient lors des prochaines séances ou vous inquiète, parlez-en à votre médecin.`)}
    <button class="btn ${e===`forte`?`btn-primary`:`btn-ghost`} btn-xl btn-block" @click=${Vr}>Arrêter la séance pour aujourd’hui</button>
    <button class="btn ${e===`forte`?`btn-ghost`:`btn-primary`} btn-xl btn-block" @click=${Mr}>Passer à l’étape suivante</button>`,{onClose:Mr})}function oa(){return H(`Arrêtez l’effort`,O`
    ${W(`danger`,`alert`,O`<b>Asseyez-vous et prévenez quelqu’un près de vous</b> (accueil de la salle, autre adhérent).`)}
    <p><b>En cas de douleur dans la poitrine, de malaise, d’essoufflement inhabituel ou de douleur brutale, appelez les secours :</b></p>
    <div class="stack">${sn.map(e=>O`<a class="btn btn-danger btn-xl btn-block" href="tel:${e.num}">${N(`phone`,24)} Appeler le ${e.num} · ${e.label}</a>`)}</div>
    <p class="muted small">La séance est arrêtée. Ne reprenez pas d’activité avant l’avis d’un médecin.</p>
    <button class="btn btn-ghost btn-block" @click=${Vr}>Terminer la séance</button>`,{onClose:Vr})}function sa(){return H(`Passer cette étape ?`,O`
    <p>« ${L[Z(B(m.state)).exId].name} » sera noté comme passé. Aucune séance n’est à rattraper : vous ferez simplement la suite.</p>
    <button class="btn btn-primary btn-xl btn-block" @click=${Or}>Oui, passer</button>
    <button class="btn btn-ghost btn-block" @click=${b}>Non, je continue</button>`)}function ca(){let e=B(m.state),t=e.steps.some(e=>e.done||e.skipped);return H(`Que voulez-vous faire ?`,O`
    <div class="list">
      <button class="list-row" @click=${()=>{b(),br()}}><span class="list-ic">${N(`minimize`,22)}</span><span><b>Revenir à l’accueil</b><small>La séance reste en cours, vous la reprenez quand vous voulez.</small></span></button>
      <button class="list-row" @click=${xr}><span class="list-ic">${N(`pause`,22)}</span><span><b>${e.pausedAt?`Reprendre`:`Faire une pause`}</b><small>Le temps de pause n’est pas compté.</small></span></button>
      <button class="list-row" @click=${Vr}><span class="list-ic">${N(`flag`,22)}</span><span><b>Terminer la séance maintenant</b><small>Ce qui est fait est enregistré, rien n’est à rattraper.</small></span></button>
      ${t?A:O`<button class="list-row" @click=${Wr}><span class="list-ic">${N(`trash`,22)}</span><span><b>Annuler cette séance</b><small>Rien ne sera enregistré.</small></span></button>`}
    </div>`)}function la(){let e=B(m.state);return H(Xr(e),O`
    <ol class="ov">
      ${e.steps.map((t,n)=>{let r=L[t.exId],i=t.blocked?t.blocked===`light`?`Retiré : séance allégée`:t.blocked===`hold`?`Suspendu : avis médical`:`Suspendu après une douleur`:t.done?`Fait`:t.pain?`Arrêté : douleur`:t.skipped?`Passé`:n===e.cur?`En cours`:``;return O`
          <li class=${t.blocked?`off`:``}>
            ${J(t.exId)}
            <span><small>${Jt[t.type]}</small><b>${r.name}</b>${i?O`<em>${i}</em>`:A}</span>
            ${!t.blocked&&!t.done&&n!==e.cur?O`<button class="btn btn-ghost" @click=${()=>{wr(n),b()}}>Aller</button>`:A}
          </li>`})}
    </ol>`)}var ua=[[`home`,`Accueil`,`home`,ni],[`program`,`Programme`,`calendar`,ui],[`progress`,`Suivi`,`chart`,bi],[`profile`,`Profil`,`user`,Di]],da={sessionDetail:di,history:xi,health:Ni,"program-phase":Pi},fa={exercise:Wi,checkin:ri,confirmPhase:ii,rate:na,adapt:ra,pain:ia,painDone:aa,urgent:oa,confirmSkip:sa,quit:ca,overview:la,confirmImport:e=>Ai(e,nt),confirmReset:ji,reactivate:Mi};function pa(){return O`
    <nav class="tabbar" aria-label="Navigation principale">
      ${ua.map(([e,t,n])=>O`
        <button class="tab" aria-current=${m.ui.tab===e&&!m.ui.view?`page`:`false`} @click=${()=>Ge(e)}>${N(n,26)}<span>${t}</span></button>`)}
    </nav>`}function ma(){let e=m.state,t=m.ui;if(!e.onboarded)return Gn();let n=B(e),r=t.sheet&&fa[t.sheet.name];if(n&&t.sessionOpen)return O`${ta()}${r?r(t.sheet):A}${ha()}`;let i=t.view&&da[t.view.name];return O`
    <main>${i?i(t.view):ua.find(([e])=>e===t.tab)[3]()}</main>
    ${n?O`<button class="mini-session" @click=${yr}>${N(`play`,22)}<span><b>Séance en cours</b><small>${Xr(n)} · reprendre</small></span>${N(`right`,20)}</button>`:A}
    ${pa()}
    ${r?r(t.sheet):A}
    ${ha()}`}function ha(){let e=m.ui.toast;return e?O`<div class="toast toast-${e.kind}" role="status">${e.text}</div>`:A}function ga(e){e.textContent=``,He(()=>Ft(ma(),e)),Ft(ma(),e)}function _a(){let e=document.getElementById(`netStatus`);if(!e)return;let t=()=>{e.hidden=navigator.onLine};window.addEventListener(`online`,t),window.addEventListener(`offline`,t),t()}async function va(){let{state:e}=await Pe(tt,nt);m.state=e,wi(e.settings.textSize),Me(()=>{}),B(e)&&(m.ui.sessionOpen=!0,qr()),ga(document.getElementById(`root`)),_a(),ze(),document.addEventListener(`visibilitychange`,()=>{document.visibilityState===`hidden`&&Ie(m.state)}),u({immediate:!0})}va();