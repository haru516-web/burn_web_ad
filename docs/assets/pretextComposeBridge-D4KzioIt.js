import{n as I,a as _,P as h}from"./app-DlJRkZ8b.js";import"./main-BKgBC2-Z.js";import"./local-fonts-DMBg5KN0.js";const u=794,B=1123,c=u*h.width,v='"Shippori Mincho", serif';function x(t){return JSON.parse(JSON.stringify(t))}function p(t,e,d){return Math.min(d,Math.max(e,t))}function w(t){const e=(t-h.x)/h.width;return p(e,0,1)*u}function T(t){const e=(t-h.y)/h.height;return p(e,0,1)*B}function M(t){return p(t/h.width,0,1)*u}function P(t){return p(t/h.height,0,1)*B}function N(t){return t==="center"||t==="right"?t:"left"}function A(t){return t==="serif"?v:'"Noto Sans JP", sans-serif'}function D(t={},e={}){if((t==null?void 0:t.editorType)==="pretext"&&Array.isArray(t.pretextBoxes))return x(t.pretextBoxes);const d=I(t),o=_(t,e),i=d.map((n,m)=>({id:n.id||`image-${m+1}`,kind:"image",x:w(n.x),y:T(n.y),width:M(n.width),height:P(n.height),minWidth:140,minHeight:140,zIndex:m+1,data:{src:null,cropX:0,cropY:0,zoom:1}}));return[...o.map((n,m)=>({id:n.id||`text-${m+1}`,kind:n.kind==="title"?"title":"body",x:w(n.x),y:T(n.y),width:M(n.width),height:P(n.height),minWidth:n.kind==="title"?220:200,minHeight:n.kind==="title"?90:140,zIndex:i.length+m+1,data:{text:String(n.text||""),fontFamily:A(n.family),fontSize:Math.max(14,Math.round(c*n.fontSize)),fontWeight:n.weight||(n.kind==="title"?700:400),lineHeight:Math.max(16,Math.round(c*n.fontSize*n.lineHeight)),letterSpacing:0,padding:Math.max(8,Math.round(c*(n.padding||.012))),color:"#111111",align:N(n.align)}})),...i]}function H(t=[]){return{editorType:"pretext",pretextBoxes:x(t).map(e=>{var d,o,i,l,n,m,r,a,g,s,f,y,E;return e.kind==="image"?{id:e.id,kind:"image",x:Math.round(e.x*1e3)/1e3,y:Math.round(e.y*1e3)/1e3,width:Math.round(e.width*1e3)/1e3,height:Math.round(e.height*1e3)/1e3,minWidth:e.minWidth,minHeight:e.minHeight,zIndex:e.zIndex,data:{src:((d=e.data)==null?void 0:d.src)||null,cropX:Number((o=e.data)==null?void 0:o.cropX)||0,cropY:Number((i=e.data)==null?void 0:i.cropY)||0,zoom:Math.max(1,Number((l=e.data)==null?void 0:l.zoom)||1)}}:{id:e.id,kind:e.kind==="title"?"title":"body",x:Math.round(e.x*1e3)/1e3,y:Math.round(e.y*1e3)/1e3,width:Math.round(e.width*1e3)/1e3,height:Math.round(e.height*1e3)/1e3,minWidth:e.minWidth,minHeight:e.minHeight,zIndex:e.zIndex,data:{text:String(((n=e.data)==null?void 0:n.text)||""),fontFamily:String(((m=e.data)==null?void 0:m.fontFamily)||A("sans")),fontSize:Number((r=e.data)==null?void 0:r.fontSize)||22,fontWeight:Number((a=e.data)==null?void 0:a.fontWeight)||400,lineHeight:Number((g=e.data)==null?void 0:g.lineHeight)||34,letterSpacing:Number((s=e.data)==null?void 0:s.letterSpacing)||0,padding:Number((f=e.data)==null?void 0:f.padding)||12,color:String(((y=e.data)==null?void 0:y.color)||"#111111"),align:N((E=e.data)==null?void 0:E.align)}}})}}const z="memories-pretext-embedded-overrides",S="#f8f4ee";function W(t){return`
html,
body,
#root {
  background: ${t} !important;
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
.page-stage,
.page-shadow,
.page {
  background: ${t} !important;
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

.page {
  border-radius: 0 !important;
  box-shadow: none !important;
}
`}function k(){return window.location.origin==="null"?"*":window.location.origin}function R(t){return window.location.origin==="null"?t==="null"||t==="":t===window.location.origin}function X(t,e={}){let d=D(e.customLayout,e.textValues),o=e.backgroundColor||S;const i=document.createElement("iframe");i.className="compose-pretext-iframe",i.src="./pretext-editor.html?embedded=1",i.title="Pretext editor",i.setAttribute("loading","eager"),i.setAttribute("allow","clipboard-read; clipboard-write"),i.setAttribute("allowtransparency","true"),t.replaceChildren(i);const l=()=>{const r=i.contentDocument;if(!r)return;const a=r.documentElement,g=r.body;if(!a||!g)return;i.style.setProperty("background",o,"important"),t.style.setProperty("background",o,"important"),a.style.setProperty("background",o,"important"),g.style.setProperty("background",o,"important"),a.style.setProperty("color-scheme","light","important"),g.style.setProperty("color-scheme","light","important");let s=r.getElementById(z);s||(s=r.createElement("style"),s.id=z,r.head.appendChild(s)),s.textContent=W(o)},n=()=>{var r;l(),(r=i.contentWindow)==null||r.postMessage({type:"memories:pretext:init",boxes:d},k())},m=r=>{if(!R(r.origin)||r.source!==i.contentWindow)return;const a=r.data;if(!(!a||typeof a!="object")){if(a.type==="memories:pretext:ready"){l(),n();return}a.type==="memories:pretext:change"&&Array.isArray(a.boxes)&&(d=a.boxes)}};return i.addEventListener("load",n),window.addEventListener("message",m),{unmount(){i.removeEventListener("load",n),window.removeEventListener("message",m),i.remove()},sendCommand(r){var a;(a=i.contentWindow)==null||a.postMessage({type:"memories:pretext:command",command:r},k())},getBoxes(){return d},getSerializedLayout(){return H(d)},setBackgroundColor(r){o=r||S,l()}}}export{X as mountComposePretextEditor};
