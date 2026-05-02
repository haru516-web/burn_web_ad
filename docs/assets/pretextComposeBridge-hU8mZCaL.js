import{n as v,a as H,P as l}from"./app-Doeymnen.js";import"./main-DRh4v7ke.js";import"./client-CTQ0Ju4c.js";const u=794,x=1123,c=u*l.width;function D(t){return JSON.parse(JSON.stringify(t))}function p(t,e,d){return Math.min(d,Math.max(e,t))}function T(t){const e=(t-l.x)/l.width;return p(e,0,1)*u}function M(t){const e=(t-l.y)/l.height;return p(e,0,1)*x}function P(t){return p(t/l.width,0,1)*u}function z(t){return p(t/l.height,0,1)*x}function N(t){return t==="center"||t==="right"?t:"left"}function k(t){return t==="serif"?'"Iowan Old Style", "Palatino Linotype", Palatino, serif':'"Noto Sans JP", sans-serif'}function I(t={},e={}){if((t==null?void 0:t.editorType)==="pretext"&&Array.isArray(t.pretextBoxes))return D(t.pretextBoxes);const d=v(t),r=H(t,e),o=d.map((n,i)=>({id:n.id||`image-${i+1}`,kind:"image",x:T(n.x),y:M(n.y),width:P(n.width),height:z(n.height),minWidth:140,minHeight:140,zIndex:i+1,data:{src:null,cropX:0,cropY:0,zoom:1}}));return[...r.map((n,i)=>({id:n.id||`text-${i+1}`,kind:n.kind==="title"?"title":"body",x:T(n.x),y:M(n.y),width:P(n.width),height:z(n.height),minWidth:n.kind==="title"?220:200,minHeight:n.kind==="title"?90:140,zIndex:o.length+i+1,data:{text:String(n.text||""),fontFamily:k(n.family),fontSize:Math.max(14,Math.round(c*n.fontSize)),fontWeight:n.weight||(n.kind==="title"?700:400),lineHeight:Math.max(16,Math.round(c*n.fontSize*n.lineHeight)),letterSpacing:0,padding:Math.max(8,Math.round(c*(n.padding||.012))),color:"#111111",align:N(n.align)}})),...o]}function W(t=[]){return{editorType:"pretext",pretextBoxes:D(t).map(e=>{var d,r,o,s,n,i,a,h,m,f,y,E,w;return e.kind==="image"?{id:e.id,kind:"image",x:Math.round(e.x*1e3)/1e3,y:Math.round(e.y*1e3)/1e3,width:Math.round(e.width*1e3)/1e3,height:Math.round(e.height*1e3)/1e3,minWidth:e.minWidth,minHeight:e.minHeight,zIndex:e.zIndex,data:{src:((d=e.data)==null?void 0:d.src)||null,cropX:Number((r=e.data)==null?void 0:r.cropX)||0,cropY:Number((o=e.data)==null?void 0:o.cropY)||0,zoom:Math.max(1,Number((s=e.data)==null?void 0:s.zoom)||1)}}:{id:e.id,kind:e.kind==="title"?"title":"body",x:Math.round(e.x*1e3)/1e3,y:Math.round(e.y*1e3)/1e3,width:Math.round(e.width*1e3)/1e3,height:Math.round(e.height*1e3)/1e3,minWidth:e.minWidth,minHeight:e.minHeight,zIndex:e.zIndex,data:{text:String(((n=e.data)==null?void 0:n.text)||""),fontFamily:String(((i=e.data)==null?void 0:i.fontFamily)||k("sans")),fontSize:Number((a=e.data)==null?void 0:a.fontSize)||22,fontWeight:Number((h=e.data)==null?void 0:h.fontWeight)||400,lineHeight:Number((m=e.data)==null?void 0:m.lineHeight)||34,letterSpacing:Number((f=e.data)==null?void 0:f.letterSpacing)||0,padding:Number((y=e.data)==null?void 0:y.padding)||12,color:String(((E=e.data)==null?void 0:E.color)||"#111111"),align:N((w=e.data)==null?void 0:w.align)}}})}}const S="memories-pretext-embedded-overrides",g="#f8f3ed",_=`
html,
body,
#root {
  background: ${g} !important;
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
.page-shadow {
  background: ${g} !important;
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
`;function B(){return window.location.origin==="null"?"*":window.location.origin}function A(t){return window.location.origin==="null"?t==="null"||t==="":t===window.location.origin}function C(t,e={}){let d=I(e.customLayout,e.textValues);const r=document.createElement("iframe");r.className="compose-pretext-iframe",r.src="./pretext-editor.html?embedded=1",r.title="Pretext editor",r.setAttribute("loading","eager"),r.setAttribute("allow","clipboard-read; clipboard-write"),r.setAttribute("allowtransparency","true"),t.replaceChildren(r);const o=()=>{const i=r.contentDocument;if(!i)return;const a=i.documentElement,h=i.body;if(!a||!h)return;a.style.setProperty("background",g,"important"),h.style.setProperty("background",g,"important"),a.style.setProperty("color-scheme","light","important"),h.style.setProperty("color-scheme","light","important");let m=i.getElementById(S);m||(m=i.createElement("style"),m.id=S,m.textContent=_,i.head.appendChild(m))},s=()=>{var i;o(),(i=r.contentWindow)==null||i.postMessage({type:"memories:pretext:init",boxes:d},B())},n=i=>{if(!A(i.origin)||i.source!==r.contentWindow)return;const a=i.data;if(!(!a||typeof a!="object")){if(a.type==="memories:pretext:ready"){o(),s();return}a.type==="memories:pretext:change"&&Array.isArray(a.boxes)&&(d=a.boxes)}};return r.addEventListener("load",s),window.addEventListener("message",n),{unmount(){r.removeEventListener("load",s),window.removeEventListener("message",n),r.remove()},sendCommand(i){var a;(a=r.contentWindow)==null||a.postMessage({type:"memories:pretext:command",command:i},B())},getBoxes(){return d},getSerializedLayout(){return W(d)}}}export{C as mountComposePretextEditor};
