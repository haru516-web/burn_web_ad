import{n as C,a as F,P as p}from"./app-DviHLaKz.js";import"./main-vKvVqFZ-.js";import"./local-fonts-DMBg5KN0.js";const k=794,N=1123,B=k*p.width,O='"Shippori Mincho", serif';function H(n){return JSON.parse(JSON.stringify(n))}function v(n,e,m){return Math.min(m,Math.max(e,n))}function S(n){const e=(n-p.x)/p.width;return v(e,0,1)*k}function x(n){const e=(n-p.y)/p.height;return v(e,0,1)*N}function z(n){return v(n/p.width,0,1)*k}function A(n){return v(n/p.height,0,1)*N}function W(n){return n==="center"||n==="right"?n:"left"}function R(n){return n==="serif"?O:'"Noto Sans JP", sans-serif'}function X(n={},e={}){if((n==null?void 0:n.editorType)==="pretext"&&Array.isArray(n.pretextBoxes))return H(n.pretextBoxes);const m=C(n),c=F(n,e),d=m.map((r,l)=>({id:r.id||`image-${l+1}`,kind:"image",x:S(r.x),y:x(r.y),width:z(r.width),height:A(r.height),minWidth:140,minHeight:140,zIndex:l+1,data:{src:null,cropX:0,cropY:0,zoom:1}}));return[...c.map((r,l)=>({id:r.id||`text-${l+1}`,kind:r.kind==="title"?"title":"body",x:S(r.x),y:x(r.y),width:z(r.width),height:A(r.height),minWidth:r.kind==="title"?220:200,minHeight:r.kind==="title"?90:140,zIndex:d.length+l+1,data:{text:String(r.text||""),fontFamily:R(r.family),fontSize:Math.max(14,Math.round(B*r.fontSize)),fontWeight:r.weight||(r.kind==="title"?700:400),lineHeight:Math.max(16,Math.round(B*r.fontSize*r.lineHeight)),letterSpacing:0,padding:Math.max(8,Math.round(B*(r.padding||.012))),color:"#111111",align:W(r.align)}})),...d]}function L(n=[]){return{editorType:"pretext",pretextBoxes:H(n).map(e=>{var m,c,d,a,r,l,f,w,g,M,h,y,E;return e.kind==="image"?{id:e.id,kind:"image",x:Math.round(e.x*1e3)/1e3,y:Math.round(e.y*1e3)/1e3,width:Math.round(e.width*1e3)/1e3,height:Math.round(e.height*1e3)/1e3,minWidth:e.minWidth,minHeight:e.minHeight,zIndex:e.zIndex,data:{src:((m=e.data)==null?void 0:m.src)||null,cropX:Number((c=e.data)==null?void 0:c.cropX)||0,cropY:Number((d=e.data)==null?void 0:d.cropY)||0,zoom:Math.max(1,Number((a=e.data)==null?void 0:a.zoom)||1)}}:{id:e.id,kind:e.kind==="title"?"title":"body",x:Math.round(e.x*1e3)/1e3,y:Math.round(e.y*1e3)/1e3,width:Math.round(e.width*1e3)/1e3,height:Math.round(e.height*1e3)/1e3,minWidth:e.minWidth,minHeight:e.minHeight,zIndex:e.zIndex,data:{text:String(((r=e.data)==null?void 0:r.text)||""),fontFamily:String(((l=e.data)==null?void 0:l.fontFamily)||R("sans")),fontSize:Number((f=e.data)==null?void 0:f.fontSize)||22,fontWeight:Number((w=e.data)==null?void 0:w.fontWeight)||400,lineHeight:Number((g=e.data)==null?void 0:g.lineHeight)||34,letterSpacing:Number((M=e.data)==null?void 0:M.letterSpacing)||0,padding:Number((h=e.data)==null?void 0:h.padding)||12,color:String(((y=e.data)==null?void 0:y.color)||"#111111"),align:W((E=e.data)==null?void 0:E.align)}}})}}const D="memories-pretext-embedded-overrides",_="#f8f4ee",u="#ffffff";function G(n){return`
html,
body,
#root {
  background: ${u} !important;
}

html,
body {
  margin: 0 !important;
  min-height: 100% !important;
}

body::before,
body::after {
  display: none !important;
}

.app-shell,
.app-shell--embedded,
.workspace,
.canvas-area,
.canvas-area--embedded,
.page-stage-shell,
.page-stage {
  background: ${u} !important;
  border: 0 !important;
  box-shadow: none !important;
}

.app-shell--embedded,
.canvas-area--embedded {
  min-height: 100dvh !important;
  height: 100dvh !important;
  padding: 0 !important;
}

.canvas-area--embedded {
  place-items: center !important;
}

.page-stage-shell,
.page-stage,
.page-shadow,
.page {
  border-radius: 0 !important;
}

.app-shell--embedded .page-shadow,
.page-shadow {
  display: none !important;
  background: transparent !important;
  filter: none !important;
}

.app-shell--embedded .page,
.page {
  background: ${n} !important;
  box-shadow: none !important;
  outline: 0 !important;
}
`}function I(){return window.location.origin==="null"?"*":window.location.origin}function Y(n){return window.location.origin==="null"?n==="null"||n==="":n===window.location.origin}function q(n,e={}){let m=X(e.customLayout,e.textValues),c=e.backgroundColor||_,d=null;const a=document.createElement("iframe");a.className="compose-pretext-iframe",a.src="./pretext-editor.html?embedded=1",a.title="Pretext editor",a.setAttribute("loading","eager"),a.setAttribute("allow","clipboard-read; clipboard-write"),a.setAttribute("allowtransparency","true"),n.replaceChildren(a);const r=()=>{const t=a.contentDocument;if(!t)return;const i=t.documentElement,s=t.body;if(!i||!s)return;a.style.setProperty("background",u,"important"),n.style.setProperty("background",u,"important"),i.style.setProperty("background",u,"important"),s.style.setProperty("background",u,"important"),i.style.setProperty("color-scheme","light","important"),s.style.setProperty("color-scheme","light","important");let o=t.getElementById(D);o||(o=t.createElement("style"),o.id=D,t.head.appendChild(o)),o.textContent=G(c)},l=()=>m.map(t=>({...t,data:t.data?{...t.data}:t.data})),f=(t,i)=>{const s=i.closest("[data-editor-box-id]")||(t==null?void 0:t.querySelector(".editor-box.is-selected[data-editor-box-id]"));return(s==null?void 0:s.getAttribute("data-editor-box-id"))||""},w=t=>{try{const i=a.contentDocument,s=f(i,t);if(!s)return;m=m.map(o=>o.id===s&&o.kind!=="image"?{...o,data:{...o.data,text:t.value}}:o)}catch{}},g=t=>{t.target instanceof HTMLTextAreaElement&&w(t.target)},M=()=>{const t=a.contentDocument;!t||d===t||(d==null||d.removeEventListener("input",g,!0),d=t,d.addEventListener("input",g,!0))},h=()=>{var t;r(),M(),(t=a.contentWindow)==null||t.postMessage({type:"memories:pretext:init",boxes:m},I())},y=t=>{if(!Y(t.origin)||t.source!==a.contentWindow)return;const i=t.data;if(!(!i||typeof i!="object")){if(i.type==="memories:pretext:ready"){r(),h();return}i.type==="memories:pretext:change"&&Array.isArray(i.boxes)&&(m=i.boxes)}};a.addEventListener("load",h),window.addEventListener("message",y);const E=()=>{const t=l();try{const i=a.contentDocument,s=i==null?void 0:i.activeElement,o=s instanceof HTMLTextAreaElement?s:i==null?void 0:i.querySelector(".compose-pretext-inline-editor");if(!o)return t;const P=f(i,o);return P?t.map(T=>T.id===P&&T.kind!=="image"?{...T,data:{...T.data,text:o.value}}:T):t}catch{return t}};return{unmount(){a.removeEventListener("load",h),window.removeEventListener("message",y),d==null||d.removeEventListener("input",g,!0),a.remove()},sendCommand(t){var i;(i=a.contentWindow)==null||i.postMessage({type:"memories:pretext:command",command:t},I())},getBoxes(){return E()},getSerializedLayout(){return L(E())},setBackgroundColor(t){c=t||_,r()}}}export{q as mountComposePretextEditor};
