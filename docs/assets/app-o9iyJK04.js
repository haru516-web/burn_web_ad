const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["./pretextComposeBridge-DXIxHvHU.js","./main-S1bPTbBr.js","./client-CTQ0Ju4c.js","./main-81ymK01h.css","./pretextComposeBridge-BXwsMVV_.css"])))=>i.map(i=>d[i]);
import{_ as Aa}from"./main-S1bPTbBr.js";function Ba(){return""}function ca(e){const t=new Date(e),i=t.getFullYear(),o=String(t.getMonth()+1).padStart(2,"0"),n=String(t.getDate()).padStart(2,"0");return`${i}.${o}.${n}`}function da(e){const t=new Date(e),i=t.getFullYear(),o=String(t.getMonth()+1).padStart(2,"0"),n=String(t.getDate()).padStart(2,"0"),h=String(t.getHours()).padStart(2,"0"),p=String(t.getMinutes()).padStart(2,"0");return`${i}.${o}.${n} ${h}:${p}`}function Na(e){const t=new Date(e).getTime();return(Date.now()-t)/(1e3*60*60)<=72}function Da(e){const t=Date.now()-new Date(e).getTime(),i=Math.floor(t/6e4);if(i<1)return"たった今";if(i<60)return`${i}分前`;const o=Math.floor(i/60);return o<24?`${o}時間前`:`${Math.floor(o/24)}日前`}function B(e){return{timeline:'<svg viewBox="0 0 24 24" aria-hidden="true" fill="none" stroke="currentColor" stroke-width="1.15" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="2.3" fill="currentColor" stroke="none"/><ellipse cx="12" cy="12" rx="8.8" ry="4.1" transform="rotate(18 12 12)"/><ellipse cx="12" cy="12" rx="8.1" ry="3.3" transform="rotate(78 12 12)"/><ellipse cx="12" cy="12" rx="7.6" ry="5.2" transform="rotate(-40 12 12)"/><circle cx="18.9" cy="6.2" r="1.15" fill="currentColor" stroke="none"/><circle cx="17.8" cy="17.3" r="1" fill="currentColor" stroke="none"/><circle cx="6.1" cy="8" r="0.95" fill="currentColor" stroke="none"/><circle cx="7.1" cy="18.2" r="0.9" fill="currentColor" stroke="none"/><circle cx="11.2" cy="6.4" r="0.9" fill="currentColor" stroke="none"/></svg>',search:'<svg viewBox="0 0 24 24" aria-hidden="true" fill="none" stroke="currentColor" stroke-width="1.15" stroke-linecap="round" stroke-linejoin="round"><ellipse cx="12" cy="6.5" rx="6.9" ry="2.1"/><path d="M5.7 6.8c1 3.1 3 5.6 6.3 11.5"/><path d="M18.3 6.8c-1 3.1-3 5.6-6.3 11.5"/><circle cx="12" cy="19.8" r="1.55" fill="currentColor" stroke="none"/><circle cx="12" cy="9.2" r="0.8" fill="currentColor" stroke="none"/><circle cx="9.2" cy="8.6" r="0.65" fill="currentColor" stroke="none"/><circle cx="14.9" cy="8.3" r="0.65" fill="currentColor" stroke="none"/><circle cx="10.2" cy="11.2" r="0.55" fill="currentColor" stroke="none"/><circle cx="13.8" cy="11" r="0.55" fill="currentColor" stroke="none"/><circle cx="12" cy="12.9" r="0.55" fill="currentColor" stroke="none"/><circle cx="11" cy="15.1" r="0.45" fill="currentColor" stroke="none"/><circle cx="13" cy="15.6" r="0.45" fill="currentColor" stroke="none"/><circle cx="8.2" cy="4.2" r="0.45" fill="currentColor" stroke="none"/><circle cx="15.8" cy="3.9" r="0.45" fill="currentColor" stroke="none"/></svg>',compose:'<svg viewBox="0 0 24 24" aria-hidden="true" fill="none" stroke="currentColor" stroke-width="1.45" stroke-linecap="round"><circle cx="12" cy="12" r="2.45" fill="currentColor" stroke="none"/><path d="M12 2.9v5.1M12 16v5.1M2.9 12h5.1M16 12h5.1M5.5 5.5l3.6 3.6M14.9 14.9l3.6 3.6M18.5 5.5l-3.6 3.6M9.1 14.9l-3.6 3.6"/></svg>',issue:'<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M6 4h12a2 2 0 0 1 2 2v12H8a2 2 0 0 0-2 2z"/><path d="M6 4a2 2 0 0 0-2 2v14h14"/></svg>',profile:'<svg viewBox="0 0 24 24" aria-hidden="true" fill="none" stroke="currentColor" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round"><path d="M3.8 16.8c2.3-2.6 4.9-5.1 7.1-7.6 1.1-1.2 2-2.2 2.7-2.2.7 0 1.1.6 1.1 1.4 0 1.1-.5 2.1-.6 3.2 2.1-2.5 4.3-4.3 6.4-4.3-.6 1.4-1.7 2.6-2.6 3.8-.8 1-.9 1.8.3 1.8h2.1"/><path d="M4.1 17.1c3.8-.2 8.5-.4 16-.7"/><circle cx="20.6" cy="8" r="0.85" fill="currentColor" stroke="none"/></svg>',heart:'<svg viewBox="0 0 24 24" aria-hidden="true" fill="none" stroke="currentColor" stroke-width="1.25" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="2.5" fill="currentColor" stroke="none"/><circle cx="12" cy="12" r="4.7"/><circle cx="12" cy="12" r="7"/><circle cx="12" cy="12" r="9.2" opacity="0.68"/></svg>',comment:'<svg viewBox="0 0 24 24" aria-hidden="true" fill="none" stroke="currentColor" stroke-width="1.35" stroke-linecap="round" stroke-linejoin="round"><path d="M4.8 12.2c0-3.4 2.8-6.1 6.2-6.1 3.3 0 5.8 2.4 5.8 5.4 0 3.1-2.6 5.4-6.2 5.4-.8 0-1.6-.1-2.3-.4l-3.3 1 .9-2.7c-.7-.8-1.1-1.7-1.1-2.6Z"/><path d="m14.2 8.3 5 1.1-2 1.9 1.9 5-4.9-1.9-1.9 2Z" opacity="0.8"/></svg>',save:'<svg viewBox="0 0 24 24" aria-hidden="true" fill="none" stroke="currentColor" stroke-width="1.25" stroke-linecap="round" stroke-linejoin="round"><path d="M12 3.6 18.2 7v10L12 20.4 5.8 17V7Z"/><path d="M12 3.6v6.3M18.2 7 12 9.9 5.8 7"/><path d="M12 9.9v10.5"/><circle cx="12" cy="12" r="2.1" fill="currentColor" stroke="none"/></svg>',tag:'<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M20 11.5 11.5 20 4 12.5V5h7.5Z"/><circle cx="15.5" cy="8.5" r="1"/></svg>',spark:'<svg viewBox="0 0 24 24" aria-hidden="true"><path d="m12 3 1.9 5.1L19 10l-5.1 1.9L12 17l-1.9-5.1L5 10l5.1-1.9Z"/></svg>',arrowLeft:'<svg viewBox="0 0 24 24" aria-hidden="true" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M15.5 5.5 9 12l6.5 6.5"/><path d="M9.5 12h9"/></svg>',returnLeft:'<svg viewBox="0 0 24 24" aria-hidden="true" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><path d="M9.2 7.4 5.4 11l3.8 3.6"/><path d="M6 11h7.8c3.1 0 4.9 1.5 4.9 4.6 0 .9-.1 1.5-.4 2.1"/></svg>',recommended:'<svg viewBox="0 0 24 24" aria-hidden="true" fill="none" stroke="currentColor" stroke-width="1.35" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="5.3" r="2.5" fill="currentColor" stroke="none"/><circle cx="5.8" cy="17.6" r="2.6" fill="currentColor" stroke="none"/><circle cx="18.2" cy="17.6" r="2.6" fill="currentColor" stroke="none"/><path d="M7.9 15.8 10.6 8.1"/><path d="M16.1 15.8 13.4 8.1"/><path d="M8.8 17.6h6.4"/></svg>',follow:'<svg viewBox="0 0 24 24" aria-hidden="true" fill="none" stroke="currentColor" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round"><circle cx="8.3" cy="17.5" r="3.1" fill="currentColor" stroke="none"/><circle cx="16.4" cy="8.2" r="2.5" fill="currentColor" stroke="none"/><path d="M5.1 18.7c1.3-4.2 5-7.2 9.5-7.2 1.5 0 3 .3 4.2.9"/><path d="M5 18.9c1.8 0 3.3-.6 5.1-1.7 3-1.9 5.1-4.7 7.1-8"/><path d="m17.6 6.2 1.9 1.1-1 2.1" /></svg>',close:'<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M6 6 18 18M18 6 6 18"/></svg>',image:'<svg viewBox="0 0 24 24" aria-hidden="true"><rect x="4" y="5" width="16" height="14" rx="2"/><path d="m8 15 2.5-2.5L13 15l2.5-3 2.5 3"/><circle cx="9" cy="9" r="1.2"/></svg>',trash:'<svg viewBox="0 0 24 24" aria-hidden="true" fill="none" stroke="currentColor" stroke-width="1.35" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="7.6" opacity="0.45"/><path d="M7.1 7.1 16.9 16.9"/><path d="M16.9 7.1 7.1 16.9"/><circle cx="12" cy="12" r="1.15" fill="currentColor" stroke="none"/></svg>',edit:'<svg viewBox="0 0 24 24" aria-hidden="true" fill="none" stroke="currentColor" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round"><path d="M5.4 8.2h8.2v10.2H5.4z"/><path d="M9 5.1h9.1l-4.9 5.1H9z"/><path d="M6.3 16.8 16.7 6.4"/><circle cx="12" cy="11.5" r="0.95" fill="currentColor" stroke="none"/></svg>',drag:'<svg viewBox="0 0 24 24" aria-hidden="true" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M12 4v16M4 12h16"/><path d="m12 4-2.8 2.8M12 4l2.8 2.8M20 12l-2.8-2.8M20 12l-2.8 2.8M12 20l-2.8-2.8M12 20l2.8-2.8M4 12l2.8-2.8M4 12l2.8 2.8"/></svg>',alignLeft:'<svg viewBox="0 0 24 24" aria-hidden="true" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round"><path d="M5 7h12"/><path d="M5 12h9"/><path d="M5 17h13"/></svg>',alignCenter:'<svg viewBox="0 0 24 24" aria-hidden="true" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round"><path d="M6 7h12"/><path d="M8 12h8"/><path d="M5 17h14"/></svg>',alignRight:'<svg viewBox="0 0 24 24" aria-hidden="true" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round"><path d="M7 7h12"/><path d="M10 12h9"/><path d="M6 17h13"/></svg>'}[e]||""}function tt(e,t,i="avatar"){return e?`<img class="avatar__image" src="${e}" alt="${i}" />`:`<span class="avatar__label">${t}</span>`}function Ra(e){var t;return e?`
    <div class="overlay" data-close-comments>
      <section class="modal modal--comments" role="dialog" aria-modal="true" aria-label="Comments" onclick="event.stopPropagation()">
        <div class="modal__header">
          <h3 class="modal__title">Comments</h3>
          <button class="modal__close" data-close-comments aria-label="Close">${B("close")}</button>
        </div>
        <div class="comments-list">
          ${(t=e.comments)!=null&&t.length?e.comments.map(i=>`
            <article class="comment-item">
              <p class="comment-item__text">${i.text}</p>
              <span class="comment-item__date">${da(i.createdAt)}</span>
            </article>
          `).join(""):'<p class="empty-copy">No comments yet.</p>'}
        </div>
        <form class="comment-form" data-comment-form="${e.id}">
          <input class="field__input" type="text" name="comment" maxlength="80" placeholder="Write a comment" required />
          <button class="button button--primary" type="submit">Post</button>
        </form>
      </section>
    </div>
  `:""}const qt="memories-static-site-state-v1";function Ha(e){return!e||typeof e!="object"?e:Object.fromEntries(Object.entries(e).map(([t,i])=>[t,i&&typeof i=="object"?{...i,file:""}:i]))}function Wa(e){return!e||typeof e!="object"?e:{...e,posts:Array.isArray(e.posts)?e.posts.map(t=>({...t,composeData:t!=null&&t.composeData&&typeof t.composeData=="object"?{...t.composeData,standardFiles:Ha(t.composeData.standardFiles)}:(t==null?void 0:t.composeData)??null})):[]}}function qa(){try{const e=localStorage.getItem(qt);return e?JSON.parse(e):null}catch{return null}}function za(e){try{localStorage.setItem(qt,JSON.stringify(e))}catch(t){if((t==null?void 0:t.name)!=="QuotaExceededError")throw t;try{localStorage.setItem(qt,JSON.stringify(Wa(e))),console.warn("Storage quota exceeded. Saved a reduced compose state without original upload blobs.")}catch(i){console.error("Failed to persist state after quota reduction.",i)}}}function Ut(e="id"){return`${e}_${Math.random().toString(36).slice(2,9)}_${Date.now().toString(36)}`}const Bt={profile:{name:"you",bio:"A small local profile to collect your memories.",avatarData:""},posts:[],issues:[],followingAuthors:[]};function Oa(e){const t=e.composeData&&typeof e.composeData=="object"?e.composeData:null;if(!t)return null;const i=t.standardFiles&&typeof t.standardFiles=="object"?t.standardFiles:{},o=(n,h="")=>{var p,l,a;return{file:typeof(n==null?void 0:n.file)=="string"&&n.file?n.file:h,position:{x:Number((p=n==null?void 0:n.position)==null?void 0:p.x)||.5,y:Number((l=n==null?void 0:n.position)==null?void 0:l.y)||.5,zoom:Math.max(1,Number((a=n==null?void 0:n.position)==null?void 0:a.zoom)||1)},imageSize:n!=null&&n.imageSize&&Number.isFinite(n.imageSize.width)&&Number.isFinite(n.imageSize.height)?{width:n.imageSize.width,height:n.imageSize.height}:null}};return{...t,standardFiles:{primary:o(i.primary,e.imageData||""),secondary:o(i.secondary),accent:o(i.accent)}}}function Fa(e){return{id:e.id,authorName:e.authorName||"you",authorIcon:e.authorIcon||(e.authorName||"U").trim().slice(0,1).toUpperCase(),authorAvatarData:e.authorAvatarData||"",caption:e.caption||"",imageData:e.imageData||"",fixedTags:Array.isArray(e.fixedTags)?e.fixedTags:[],freeTags:Array.isArray(e.freeTags)?e.freeTags:[],likes:Number(e.likes||0),saves:Number(e.saves||0),comments:Array.isArray(e.comments)?e.comments:[],impressions:Number(e.impressions||0),liked:!!e.liked,saved:!!e.saved,createdAt:e.createdAt||new Date().toISOString(),updatedAt:e.updatedAt||null,composeData:Oa(e)}}function Xa(e){var t,i,o;return e?{profile:{name:((t=e.profile)==null?void 0:t.name)||Bt.profile.name,bio:((i=e.profile)==null?void 0:i.bio)||Bt.profile.bio,avatarData:((o=e.profile)==null?void 0:o.avatarData)||""},posts:Array.isArray(e.posts)?e.posts.map(Fa):[],issues:Array.isArray(e.issues)?e.issues:[],followingAuthors:Array.isArray(e.followingAuthors)?e.followingAuthors:[]}:structuredClone(Bt)}let fe=Xa(qa());function at(){return fe}function Pe(e){fe=e,za(fe)}function Ya(e){const t=structuredClone(fe);t.posts.unshift({id:Ut("post"),authorName:e.authorName,authorIcon:(e.authorName||"U").trim().slice(0,1).toUpperCase(),authorAvatarData:fe.profile.avatarData||"",caption:e.caption||"",imageData:e.imageData,fixedTags:e.fixedTags||[],freeTags:e.freeTags||[],likes:0,saves:0,comments:[],impressions:0,liked:!1,saved:!1,createdAt:new Date().toISOString(),updatedAt:null,composeData:e.composeData||null}),Pe(t)}function ja(e,t){const i=structuredClone(fe),o=i.posts.find(n=>n.id===e);o&&(o.caption=t.caption??o.caption,o.imageData=t.imageData??o.imageData,o.fixedTags=Array.isArray(t.fixedTags)?t.fixedTags:o.fixedTags,o.freeTags=Array.isArray(t.freeTags)?t.freeTags:o.freeTags,o.composeData=t.composeData??o.composeData,o.updatedAt=new Date().toISOString(),Pe(i))}function Ua(e){const t=structuredClone(fe);t.posts.some(o=>o.id===e)&&(t.posts=t.posts.filter(o=>o.id!==e),t.issues=t.issues.map(o=>({...o,postIds:(o.postIds||[]).filter(n=>n!==e)})).filter(o=>o.postIds.length),Pe(t))}function Ja(e){const t=structuredClone(fe),i=t.posts.find(o=>o.id===e);i&&(i.liked=!i.liked,i.likes+=i.liked?1:-1,Pe(t))}function Ga(e){const t=structuredClone(fe),i=t.posts.find(o=>o.id===e);i&&(i.saved=!i.saved,i.saves+=i.saved?1:-1,Pe(t))}function Va(e,t){const i=structuredClone(fe),o=i.posts.find(n=>n.id===e);!o||!t.trim()||(o.comments.unshift({id:Ut("comment"),text:t.trim(),createdAt:new Date().toISOString()}),Pe(i))}function Qa(e){const t=structuredClone(fe),i=t.posts.find(o=>o.id===e);i&&(i.impressions+=1,Pe(t))}function Za(e){const t=structuredClone(fe),i=t.profile.name,o=e.avatarData||"";t.profile.name=e.name,t.profile.bio=e.bio,t.profile.avatarData=o,t.posts=t.posts.map(n=>n.authorName===i?{...n,authorName:e.name,authorIcon:(e.name||"U").trim().slice(0,1).toUpperCase(),authorAvatarData:o}:n),t.followingAuthors=t.followingAuthors.map(n=>n===i?e.name:n),Pe(t)}function Ka(e){const t=structuredClone(fe),i=t.followingAuthors.includes(e);t.followingAuthors=i?t.followingAuthors.filter(o=>o!==e):[...t.followingAuthors,e],Pe(t)}function ei(e){const t=structuredClone(fe);t.issues.unshift({id:Ut("issue"),title:e.title,subtitle:e.subtitle,tone:e.tone,postIds:e.postIds,createdAt:new Date().toISOString()}),Pe(t)}function ti(e=""){return`
    <section class="opening-screen">
      <div class="opening-screen__underlay" aria-hidden="true">
        ${e}
      </div>
      <div class="opening-screen__inner">
        <div class="opening-screen__stage" aria-label="BURN">
          <canvas class="opening-screen__canvas" id="openingCanvas"></canvas>
        </div>
      </div>
    </section>
  `}function ai(e){return[...e].sort((t,i)=>ea(i)-ea(t))}function ea(e){var h;const t=(e.likes||0)*2+(e.saves||0)*2+(((h=e.comments)==null?void 0:h.length)||0)*1.5+(e.impressions||0)*1.2,i=Na(e.createdAt)?120:0,n=220/Math.max(1,(Date.now()-new Date(e.createdAt).getTime())/(1e3*60*60));return t+i+n}function ii(e,{query:t="",tags:i=[]}={}){const o=t.trim().toLowerCase();return e.filter(n=>{const h=[n.authorName,n.caption||"",...n.fixedTags||[],...n.freeTags||[]].join(" ").toLowerCase(),p=!o||h.includes(o),l=!i.length||i.every(a=>[...n.fixedTags||[],...n.freeTags||[]].includes(a));return p&&l})}function oi(e){return e==="system"?typeof window<"u"&&typeof window.matchMedia=="function"&&window.matchMedia("(prefers-color-scheme: dark)").matches?"dark":"light":e==="dark"?"dark":"light"}function ni(e){return e==="system"?"System":e==="dark"?"Dark":"White"}function ri(e,t){return e==="system"?`OS ${t==="dark"?"Dark":"White"}`:"Tap to switch"}function si(e,t){const i=e.posts||[];return t==="following"?i.filter(o=>e.followingAuthors.includes(o.authorName)):ai(i)}const $t={w:180,h:240},kt=[{x:70,y:78,w:210,h:300},{x:382,y:116,w:122,h:148},{x:566,y:82,w:214,h:320},{x:78,y:448,w:214,h:304},{x:360,y:318,w:204,h:434},{x:598,y:470,w:190,h:260},{x:88,y:834,w:156,h:196},{x:344,y:786,w:182,h:264},{x:640,y:872,w:142,h:172}].map(e=>({x:Math.round(e.x+e.w/2-$t.w/2),y:Math.round(e.y+e.h/2-$t.h/2),w:$t.w,h:$t.h})),ta=860,aa=1120,li=980,ci=1260;function ia(e){const t=e%2,i=Math.floor(e/2);return{x:120+t*li,y:80+i*ci}}function di(e,t,i){return`
    <article
      class="timeline-particle"
      style="left:${i.x+t.x}px; top:${i.y+t.y}px; width:${t.w}px; height:${t.h}px;"
    >
      <button class="timeline-particle__author" type="button" data-open-author="${e.authorName}" aria-label="Open ${e.authorName} profile">
        ${tt(e.authorAvatarData,e.authorIcon,`${e.authorName} avatar`)}
      </button>
      <button class="timeline-particle__image-button" type="button" data-open-preview="${e.id}" aria-label="Open ${e.authorName} post">
        <img class="timeline-particle__image" src="${e.imageData}" alt="${e.authorName} post" />
      </button>
    </article>
  `}function mi(e){const t=Math.max(1,Math.ceil(e.length/kt.length)),i=Array.from({length:t},(n,h)=>{const p=ia(h),l=e.slice(h*kt.length,(h+1)*kt.length);return{placement:p,html:`
        <section
          class="timeline-board"
          style="left:${p.x}px; top:${p.y}px; width:${ta}px; height:${aa}px;"
          aria-hidden="true"
        ></section>
        ${l.map((a,d)=>di(a,kt[d],p)).join("")}
      `}});if(!e.length)return{width:1280,height:1120,html:`
        <div class="timeline-field__empty">
        <p class="timeline-field__empty-title">No posts yet</p>
        <p class="timeline-field__empty-copy">Create your first memory and it will appear here.</p>
      </div>
      `};const o=ia(t-1);return{width:o.x+ta+140,height:o.y+aa+140,html:i.map(n=>n.html).join("")}}function zt(e,t){const i=(t==null?void 0:t.homeTheme)||"light",o=oi(i),n=(t==null?void 0:t.homeCoreState)||"default",h=ni(i),p=ri(i,o);return`
    <section class="page orbit-home orbit-home--${o} orbit-home--mode-${i} orbit-home--${n}">
      <div class="orbit-stage">
        <button class="orbit-node orbit-node--setting orbit-node--theme-mode-${i}" type="button" data-home-theme-toggle aria-label="Open settings">
          <span class="orbit-node__icon" aria-hidden="true">${B("spark")}</span>
          <strong class="orbit-node__title">setting</strong>
          <span class="orbit-node__meta">${h} / ${p}</span>
        </button>

        <button class="orbit-node orbit-node--timeline" type="button" data-home-nav="timeline">
          <span class="orbit-node__icon" aria-hidden="true">${B("timeline")}</span>
          <strong class="orbit-node__title">timeline</strong>
        </button>

        <button class="orbit-node orbit-node--profile" type="button" data-home-nav="profile">
          <span class="orbit-node__icon" aria-hidden="true">${B("profile")}</span>
          <strong class="orbit-node__title">profile</strong>
        </button>

        <button class="orbit-node orbit-node--search" type="button" data-home-nav="search">
          <span class="orbit-node__icon" aria-hidden="true">${B("search")}</span>
          <strong class="orbit-node__title">search</strong>
        </button>

        <button class="orbit-node orbit-node--compose" type="button" data-home-nav="compose">
          <span class="orbit-node__icon" aria-hidden="true">${B("compose")}</span>
          <strong class="orbit-node__title">post</strong>
        </button>
      </div>
    </section>
  `}function pi(e,t){var n,h;const i=si(e,t.timelineTab),o=mi(i);return`
    <section class="page timeline-page">
      <div class="timeline-screen">
        <header class="timeline-screen__chrome">
          <button class="timeline-screen__back" type="button" data-home-nav="home" aria-label="Back to main page">
            <span>${B("arrowLeft")}</span>
          </button>
          <div class="timeline-screen__toggle" role="tablist" aria-label="Timeline filter">
            <button class="timeline-screen__toggle-button ${t.timelineTab!=="following"?"is-active":""}" type="button" data-timeline-tab="recommended">おすすめ</button>
            <button class="timeline-screen__toggle-button ${t.timelineTab==="following"?"is-active":""}" type="button" data-timeline-tab="following">フォロー</button>
          </div>
        </header>

        <div class="timeline-screen__viewport" data-timeline-pan-viewport>
          <div class="timeline-screen__axes" aria-hidden="true">
            <span class="timeline-screen__axis timeline-screen__axis--x"></span>
            <span class="timeline-screen__axis timeline-screen__axis--y"></span>
            <span class="timeline-screen__arrow timeline-screen__arrow--up"></span>
            <span class="timeline-screen__arrow timeline-screen__arrow--right"></span>
            <span class="timeline-screen__arrow timeline-screen__arrow--down"></span>
            <span class="timeline-screen__arrow timeline-screen__arrow--left"></span>
          </div>
          <div
            class="timeline-screen__surface"
            data-timeline-pan-surface
            style="width:${o.width}px; height:${o.height}px; transform: translate(${((n=t.timelinePan)==null?void 0:n.x)??-360}px, ${((h=t.timelinePan)==null?void 0:h.y)??-220}px);"
          >
            ${o.html}
          </div>
        </div>
      </div>
    </section>
  `}function hi(e){const t=[...e.fixedTags||[],...e.freeTags||[]];return t.length?t.map(i=>`<span class="chip chip--soft">${i}</span>`).join(""):'<div class="post-card__tags-empty">No tags yet</div>'}function ma(e,t={}){var p;const{mode:i="full"}=t,o=i!=="compact",n=i==="full",h=i!=="minimal";return`
    <article class="post-card post-card--${i}" data-post-id="${e.id}">
      ${o?`
        <div class="post-card__head">
          <button class="avatar avatar-button" type="button" data-open-author="${e.authorName}" aria-label="Open ${e.authorName} profile">
            ${tt(e.authorAvatarData,e.authorIcon,`${e.authorName} avatar`)}
          </button>
          <div class="post-card__author-wrap">
            <p class="post-card__author">${e.authorName}</p>
            <p class="post-card__time">${Da(e.createdAt)}</p>
          </div>
        </div>
      `:""}

      <button class="post-card__image-button" data-open-preview="${e.id}" aria-label="Open post image">
        <img class="post-card__image" src="${e.imageData}" alt="${e.authorName} post" />
      </button>

      ${n?`
        <div class="post-card__caption-row">
          <button class="tag-toggle" data-toggle-tags="${e.id}">${B("tag")} tags</button>
          ${e.caption?`<p class="post-card__caption">${e.caption}</p>`:'<p class="post-card__caption post-card__caption--empty">No caption</p>'}
        </div>

        <div class="post-card__tags" data-tags-panel="${e.id}" hidden>
          ${hi(e)}
        </div>
      `:""}

      <div class="post-card__meta">
        ${h?`<span class="post-card__date">${ca(e.createdAt)}</span>`:"<span></span>"}
        <div class="post-card__actions">
          <button class="icon-button ${e.liked?"is-active":""}" data-like="${e.id}" aria-label="Like post">
            ${B("heart")}
            <span>${e.likes}</span>
          </button>
          <button class="icon-button" data-comment="${e.id}" aria-label="Open comments">
            ${B("comment")}
            <span>${((p=e.comments)==null?void 0:p.length)||0}</span>
          </button>
          <button class="icon-button ${e.saved?"is-active":""}" data-save="${e.id}" aria-label="Save post">
            ${B("save")}
            <span>${e.saves}</span>
          </button>
        </div>
      </div>
    </article>
  `}const pa={activity:["ご飯","朝ごはん","ランチ","ディナー","カフェ","散歩","買い物","ドライブ","旅行","イベント"],mood:["まったり","おしゃれ","落ち着く","ロマンチック","ワクワク","にぎやか"],scene:["初デート","休日","昼デート","夜デート","記念日","雨の日"],budget:["低予算","ふつう","ちょっと贅沢"],time:["朝","昼","夕方","夜"]},ui={activity:"デート内容",mood:"雰囲気",scene:"シーン",budget:"予算感",time:"時間帯"},gi=Object.values(pa).flat();function fi(e){return gi.map(t=>`
    <button class="chip chip--filter ${e.includes(t)?"is-active":""}" data-search-tag="${t}">${t}</button>
  `).join("")}function yi(e,t){const i=t.searchTags||[],o=ii(e.posts||[],{query:t.searchQuery||"",tags:i}),n=o.length?`
      <div class="feed-grid">
        ${o.map(h=>ma(h,{mode:"compact"})).join("")}
      </div>
    `:`
      <section class="empty-panel">
        <p class="empty-panel__title">条件に合う投稿がまだありません</p>
        <p class="empty-panel__copy">タグや検索語を変えるか、先に投稿を作成してください。</p>
      </section>
    `;return`
    <section class="page page--search">
      <header class="page-header page-header--with-back">
        <button class="button button--ghost page-back" type="button" data-home-nav="home">Back</button>
        <div>
          <p class="page-header__mini">discover</p>
          <h2 class="page-header__title">Search</h2>
        </div>
      </header>

      <div class="search-box">
        <input class="field__input field__input--search" id="searchInput" type="search" value="${t.searchQuery||""}" placeholder="作者名・タグ・キャプションで検索" />
      </div>

      <div class="tag-filter-row">
        ${fi(i)}
      </div>

      ${n}
    </section>
  `}const ha={id:"page1",label:"Page 1",description:"Template 1",async render(e,t,i,o){const{addWrappedText:n,drawFileCover:h,drawSlotPlaceholder:p,defaults:l}=o,a={x:84,y:84,width:1072,height:1586};e.fillStyle="#191514",e.textBaseline="top";const d={x:a.x+a.width*.55,y:a.y+a.height*.125,width:a.width*.36,height:a.width*.36,radius:0},g={x:a.x+a.width*.08,y:a.y+a.height*.48,width:a.width*.45,height:a.height*.39,radius:0};i.secondary.file?await h(e,i.secondary.file,d,i.secondary.position):p(e,d),i.primary.file?await h(e,i.primary.file,g,i.primary.position):p(e,g),e.font='600 78px "Cormorant Garamond", "Times New Roman", serif',n(e,t.headline||l.headline,{x:a.x+a.width*.07,y:a.y+a.height*.058,maxWidth:a.width*.7,lineHeight:82,maxLines:2}),e.font='500 32px "Noto Sans JP", sans-serif',n(e,t.subhead||l.subhead,{x:a.x+a.width*.07,y:a.y+a.height*.132,maxWidth:a.width*.7,lineHeight:42,maxLines:3}),e.font='500 33px "Noto Sans JP", sans-serif',n(e,t.intro||l.intro,{x:a.x+a.width*.085,y:a.y+a.height*.215,maxWidth:a.width*.37,lineHeight:48,maxLines:4}),e.font='500 31px "Noto Sans JP", sans-serif',n(e,t.body||l.body,{x:a.x+a.width*.585,y:a.y+a.height*.625,maxWidth:a.width*.245,lineHeight:46,maxLines:6}),e.font='500 28px "Noto Sans JP", sans-serif',n(e,t.date||l.date,{x:a.x+a.width*.08,y:a.y+a.height*.895,maxWidth:a.width*.31,lineHeight:34,maxLines:1});const _=t.editor||l.editor,P=a.width*.32,C=a.x+a.width*.92-Math.min(P,e.measureText(_).width);n(e,_,{x:C,y:a.y+a.height*.895,maxWidth:P,lineHeight:34,maxLines:1})}},bi={id:"page2",label:"Page 2",description:"Template 2",async render(e,t,i,o){const{addWrappedText:n,clipRoundedRect:h,drawFileCover:p,drawSlotPlaceholder:l,defaults:a}=o,d={x:84,y:84,width:1072,height:1586};e.fillStyle="#191514",e.textBaseline="top";const g={x:d.x+d.width*.138,y:d.y+d.height*.142,width:d.width*.724,height:d.height*.374,radius:0};i.primary.file?await p(e,i.primary.file,g,i.primary.position):l(e,g),e.font='600 60px "Cormorant Garamond", "Times New Roman", serif',n(e,t.headline||a.headline,{x:d.x+d.width*.142,y:d.y+d.height*.565,maxWidth:d.width*.66,lineHeight:66,maxLines:2}),e.font='500 30px "Noto Sans JP", sans-serif',n(e,t.subhead||a.subhead,{x:d.x+d.width*.142,y:d.y+d.height*.634,maxWidth:d.width*.68,lineHeight:40,maxLines:2}),e.font='500 28px "Noto Sans JP", sans-serif',n(e,t.intro||a.intro,{x:d.x+d.width*.142,y:d.y+d.height*.698,maxWidth:d.width*.66,lineHeight:38,maxLines:4}),e.font='500 28px "Noto Sans JP", sans-serif',n(e,t.body||a.body,{x:d.x+d.width*.142,y:d.y+d.height*.792,maxWidth:d.width*.66,lineHeight:38,maxLines:4}),e.font='500 24px "Noto Sans JP", sans-serif',n(e,t.date||a.date,{x:d.x+d.width*.142,y:d.y+d.height*.948,maxWidth:d.width*.28,lineHeight:30,maxLines:1});const _=t.editor||a.editor;e.font='500 24px "Noto Sans JP", sans-serif';const P=d.width*.28,C=d.x+d.width*.86-Math.min(P,e.measureText(_).width);n(e,_,{x:C,y:d.y+d.height*.948,maxWidth:P,lineHeight:30,maxLines:1})}},xi={id:"page3",label:"Page 3",description:"Template 3",async render(e,t,i,o){const{addWrappedText:n,drawFileCover:h,drawSlotPlaceholder:p,defaults:l}=o,a={x:84,y:84,width:1072,height:1586};e.fillStyle="#191514",e.textBaseline="top";const d={x:a.x+a.width*.14,y:a.y+a.height*.22,width:a.width*.58,height:a.height*.36,radius:0},g={x:a.x+a.width*.74,y:a.y+a.height*.72,width:a.width*.14,height:a.height*.15,radius:0};i.primary.file?await h(e,i.primary.file,d,i.primary.position):p(e,d),i.secondary.file?await h(e,i.secondary.file,g,i.secondary.position):p(e,g),e.font='600 58px "Cormorant Garamond", "Times New Roman", serif',n(e,t.headline||l.headline,{x:a.x+a.width*.12,y:a.y+a.height*.075,maxWidth:a.width*.66,lineHeight:64,maxLines:2}),e.font='500 28px "Noto Sans JP", sans-serif',n(e,t.subhead||l.subhead,{x:a.x+a.width*.12,y:a.y+a.height*.145,maxWidth:a.width*.66,lineHeight:36,maxLines:2}),e.font='500 26px "Noto Sans JP", sans-serif',n(e,t.intro||l.intro,{x:a.x+a.width*.13,y:a.y+a.height*.675,maxWidth:a.width*.32,lineHeight:34,maxLines:4}),e.font='500 26px "Noto Sans JP", sans-serif',n(e,t.body||l.body,{x:a.x+a.width*.13,y:a.y+a.height*.79,maxWidth:a.width*.32,lineHeight:34,maxLines:3}),e.font='500 24px "Noto Sans JP", sans-serif',n(e,t.date||l.date,{x:a.x+a.width*.13,y:a.y+a.height*.915,maxWidth:a.width*.2,lineHeight:30,maxLines:1});const _=t.editor||l.editor,P=a.width*.16,C=a.x+a.width*.9-Math.min(P,e.measureText(_).width);n(e,_,{x:C,y:a.y+a.height*.915,maxWidth:P,lineHeight:30,maxLines:1})}},wi={id:"page4",label:"Page 4",description:"Template 4",async render(e,t,i,o){const{addWrappedText:n,drawFileCover:h,drawSlotPlaceholder:p,defaults:l}=o,a={x:84,y:84,width:1072,height:1586};e.fillStyle="#191514",e.textBaseline="top";const d={x:a.x+a.width*.11,y:a.y+a.height*.59,width:a.width*.34,height:a.height*.25,radius:0},g={x:a.x+a.width*.59,y:a.y+a.height*.13,width:a.width*.24,height:a.height*.29,radius:0};i.primary.file?await h(e,i.primary.file,d,i.primary.position):p(e,d),i.secondary.file?await h(e,i.secondary.file,g,i.secondary.position):p(e,g),e.font='600 52px "Cormorant Garamond", "Times New Roman", serif',n(e,t.headline||l.headline,{x:a.x+a.width*.11,y:a.y+a.height*.11,maxWidth:a.width*.28,lineHeight:58,maxLines:2}),e.font='500 27px "Noto Sans JP", sans-serif',n(e,t.subhead||l.subhead,{x:a.x+a.width*.11,y:a.y+a.height*.205,maxWidth:a.width*.28,lineHeight:34,maxLines:2}),e.font='500 26px "Noto Sans JP", sans-serif',n(e,t.intro||l.intro,{x:a.x+a.width*.11,y:a.y+a.height*.295,maxWidth:a.width*.28,lineHeight:34,maxLines:4}),e.font='500 26px "Noto Sans JP", sans-serif',n(e,t.body||l.body,{x:a.x+a.width*.58,y:a.y+a.height*.55,maxWidth:a.width*.2,lineHeight:34,maxLines:4}),e.font='500 24px "Noto Sans JP", sans-serif',n(e,t.date||l.date,{x:a.x+a.width*.58,y:a.y+a.height*.87,maxWidth:a.width*.14,lineHeight:30,maxLines:1});const _=t.editor||l.editor,P=a.width*.15,C=a.x+a.width*.88-Math.min(P,e.measureText(_).width);n(e,_,{x:C,y:a.y+a.height*.87,maxWidth:P,lineHeight:30,maxLines:1})}},vi={id:"page5",label:"Page 5",description:"Template 5",async render(e,t,i,o){const{addWrappedText:n,drawFileCover:h,drawSlotPlaceholder:p,defaults:l}=o,a={x:84,y:84,width:1072,height:1586};e.fillStyle="#191514",e.textBaseline="top";const d={x:a.x+a.width*.49,y:a.y+a.height*.12,width:a.width*.34,height:a.height*.42,radius:0},g={x:a.x+a.width*.12,y:a.y+a.height*.74,width:a.width*.25,height:a.height*.16,radius:0};i.primary.file?await h(e,i.primary.file,d,i.primary.position):p(e,d),i.secondary.file?await h(e,i.secondary.file,g,i.secondary.position):p(e,g),e.font='600 50px "Cormorant Garamond", "Times New Roman", serif',n(e,t.headline||l.headline,{x:a.x+a.width*.12,y:a.y+a.height*.12,maxWidth:a.width*.21,lineHeight:54,maxLines:3}),e.font='500 26px "Noto Sans JP", sans-serif',n(e,t.subhead||l.subhead,{x:a.x+a.width*.12,y:a.y+a.height*.265,maxWidth:a.width*.21,lineHeight:34,maxLines:3}),e.font='500 26px "Noto Sans JP", sans-serif',n(e,t.intro||l.intro,{x:a.x+a.width*.12,y:a.y+a.height*.42,maxWidth:a.width*.21,lineHeight:34,maxLines:5}),e.font='500 26px "Noto Sans JP", sans-serif',n(e,t.body||l.body,{x:a.x+a.width*.51,y:a.y+a.height*.69,maxWidth:a.width*.24,lineHeight:34,maxLines:4}),e.font='500 24px "Noto Sans JP", sans-serif',n(e,t.date||l.date,{x:a.x+a.width*.51,y:a.y+a.height*.89,maxWidth:a.width*.14,lineHeight:30,maxLines:1});const _=t.editor||l.editor,P=a.width*.15,C=a.x+a.width*.88-Math.min(P,e.measureText(_).width);n(e,_,{x:C,y:a.y+a.height*.89,maxWidth:P,lineHeight:30,maxLines:1})}},_i={id:"page6",label:"Page 6",description:"Template 6",async render(e,t,i,o){var k;const{addWrappedText:n,drawFileCover:h,drawSlotPlaceholder:p,defaults:l}=o,a={x:84,y:84,width:1072,height:1586};e.fillStyle="#191514",e.textBaseline="top";const d={x:a.x+a.width*.2,y:a.y+a.height*.3,width:a.width*.46,height:a.height*.36,radius:0},g={x:a.x+a.width*.12,y:a.y+a.height*.075,width:a.width*.2,height:a.height*.14,radius:0},_={x:a.x+a.width*.69,y:a.y+a.height*.8,width:a.width*.15,height:a.height*.1,radius:0};i.primary.file?await h(e,i.primary.file,d,i.primary.position):p(e,d),i.secondary.file?await h(e,i.secondary.file,g,i.secondary.position):p(e,g),(k=i.accent)!=null&&k.file?await h(e,i.accent.file,_,i.accent.position):p(e,_),e.font='600 48px "Cormorant Garamond", "Times New Roman", serif',n(e,t.headline||l.headline,{x:a.x+a.width*.5,y:a.y+a.height*.1,maxWidth:a.width*.2,lineHeight:52,maxLines:2}),e.font='500 26px "Noto Sans JP", sans-serif',n(e,t.subhead||l.subhead,{x:a.x+a.width*.5,y:a.y+a.height*.18,maxWidth:a.width*.2,lineHeight:34,maxLines:3}),e.font='500 26px "Noto Sans JP", sans-serif',n(e,t.intro||l.intro,{x:a.x+a.width*.12,y:a.y+a.height*.74,maxWidth:a.width*.22,lineHeight:34,maxLines:4}),e.font='500 26px "Noto Sans JP", sans-serif',n(e,t.body||l.body,{x:a.x+a.width*.44,y:a.y+a.height*.74,maxWidth:a.width*.14,lineHeight:34,maxLines:4}),e.font='500 24px "Noto Sans JP", sans-serif',n(e,t.date||l.date,{x:a.x+a.width*.12,y:a.y+a.height*.905,maxWidth:a.width*.16,lineHeight:30,maxLines:1});const P=t.editor||l.editor,C=a.width*.14,E=a.x+a.width*.88-Math.min(C,e.measureText(P).width);n(e,P,{x:E,y:a.y+a.height*.905,maxWidth:C,lineHeight:30,maxLines:1})}},Si={id:"page7",label:"Page 7",description:"Template 7",async render(e,t,i,o){var k;const{addWrappedText:n,drawFileCover:h,drawSlotPlaceholder:p,defaults:l}=o,a={x:84,y:84,width:1072,height:1586};e.fillStyle="#191514",e.textBaseline="top";const d={x:a.x+a.width*.12,y:a.y+a.height*.15,width:a.width*.3,height:a.height*.18,radius:0},g={x:a.x+a.width*.56,y:a.y+a.height*.48,width:a.width*.3,height:a.height*.18,radius:0},_={x:a.x+a.width*.12,y:a.y+a.height*.75,width:a.width*.3,height:a.height*.18,radius:0};i.primary.file?await h(e,i.primary.file,d,i.primary.position):p(e,d),i.secondary.file?await h(e,i.secondary.file,g,i.secondary.position):p(e,g),(k=i.accent)!=null&&k.file?await h(e,i.accent.file,_,i.accent.position):p(e,_),e.font='600 44px "Cormorant Garamond", "Times New Roman", serif',n(e,t.headline||l.headline,{x:a.x+a.width*.58,y:a.y+a.height*.16,maxWidth:a.width*.19,lineHeight:48,maxLines:2}),e.font='500 25px "Noto Sans JP", sans-serif',n(e,t.subhead||l.subhead,{x:a.x+a.width*.58,y:a.y+a.height*.245,maxWidth:a.width*.19,lineHeight:32,maxLines:3}),e.font='500 25px "Noto Sans JP", sans-serif',n(e,t.intro||l.intro,{x:a.x+a.width*.15,y:a.y+a.height*.41,maxWidth:a.width*.2,lineHeight:32,maxLines:4}),e.font='500 25px "Noto Sans JP", sans-serif',n(e,t.body||l.body,{x:a.x+a.width*.59,y:a.y+a.height*.77,maxWidth:a.width*.19,lineHeight:32,maxLines:4}),e.font='500 24px "Noto Sans JP", sans-serif',n(e,t.date||l.date,{x:a.x+a.width*.58,y:a.y+a.height*.91,maxWidth:a.width*.12,lineHeight:30,maxLines:1});const P=t.editor||l.editor,C=a.width*.14,E=a.x+a.width*.88-Math.min(C,e.measureText(P).width);n(e,P,{x:E,y:a.y+a.height*.91,maxWidth:C,lineHeight:30,maxLines:1})}},q={x:.06,y:.06,width:.88,height:.88},Ke=.015,oa={densityMode:"whitespace",recoveryMode:"restore"},Ot={width:.14,height:.12},je={width:.18,height:.08},$i={primary:{x:.08,y:.16,width:.4,height:.3},secondary:{x:.58,y:.12,width:.24,height:.2},accent:{x:.56,y:.58,width:.26,height:.18}},ki={headline:{x:.08,y:.07,width:.46,height:.1,fontSize:.056,lineHeight:1.08,align:"left",family:"serif",weight:600},subhead:{x:.08,y:.16,width:.48,height:.07,fontSize:.023,lineHeight:1.34,align:"left",family:"sans",weight:500},intro:{x:.08,y:.52,width:.28,height:.18,fontSize:.021,lineHeight:1.42,align:"left",family:"sans",weight:500},body:{x:.62,y:.42,width:.22,height:.24,fontSize:.021,lineHeight:1.42,align:"left",family:"sans",weight:500},date:{x:.08,y:.91,width:.22,height:.04,fontSize:.019,lineHeight:1.25,align:"left",family:"sans",weight:500},editor:{x:.66,y:.91,width:.2,height:.04,fontSize:.019,lineHeight:1.25,align:"right",family:"sans",weight:500}},Ti=[{id:"image-1",x:.1,y:.14,width:.38,height:.34}];function ze(e,t,i){return Math.min(i,Math.max(t,e))}function mt(e){return Math.round(e/Ke)*Ke}function ua(e,t,i){return typeof t=="string"&&t.trim()?t.trim():`${e}-${i+1}`}function Jt(e,t=""){return String(e??t).replace(/\r/g,"")}function ga(e,t){const i=ze(mt(Number.isFinite(e.width)?e.width:t.width),t.width,q.width),o=ze(mt(Number.isFinite(e.height)?e.height:t.height),t.height,q.height);return{x:ze(mt(Number.isFinite(e.x)?e.x:q.x),q.x,q.x+q.width-i),y:ze(mt(Number.isFinite(e.y)?e.y:q.y),q.y,q.y+q.height-o),width:i,height:o}}function Nt(e={},t=0){return{id:ua("image",e.id,t),...ga(e,Ot)}}function Ft(e={},t=0){const i=typeof e.text=="string",o=e.kind==="title"||e.kind==="body"?e.kind:(Number(e.fontSize)||0)>=.04||e.family==="serif"?"title":"body";return{id:ua("text",e.id,t),kind:o,text:Jt(e.text,"text"),isDefaultText:typeof e.isDefaultText=="boolean"?e.isDefaultText:!i,...ga(e,je),fontSize:ze(Number.isFinite(e.fontSize)?e.fontSize:.028,.014,.09),lineHeight:ze(Number.isFinite(e.lineHeight)?e.lineHeight:1.35,1,2.2),padding:ze(Number.isFinite(e.padding)?e.padding:.012,.004,.05),align:e.align==="center"||e.align==="right"?e.align:"left",family:e.family==="serif"?"serif":"sans",weight:ze(Number.isFinite(e.weight)?e.weight:e.family==="serif"?600:500,400,700)}}function Mi(e={}){return Object.entries(ki).map(([t,i],o)=>Ft({id:`text-${o+1}`,text:Jt(e[t],""),x:i.x,y:i.y,width:i.width,height:i.height,fontSize:i.fontSize,lineHeight:i.lineHeight,padding:i.family==="serif"?.01:.012,align:i.align,kind:i.family==="serif"&&i.fontSize>=.04?"title":"body",family:i.family,weight:i.weight},o)).filter(t=>t.text.trim())}function fa(e={}){return{densityMode:e.densityMode==="fill"?"fill":oa.densityMode,recoveryMode:e.recoveryMode==="keep"?"keep":oa.recoveryMode}}function Xt(e={}){return Array.isArray(e.imageBoxes)&&e.imageBoxes.length?e.imageBoxes.map((t,i)=>Nt(t,i)):e.imageBoxes&&typeof e.imageBoxes=="object"?Object.entries($i).map(([t,i],o)=>{var h;const n=((h=e.imageBoxes)==null?void 0:h[t])||{};return Nt({id:t,x:Number.isFinite(n.x)?n.x:i.x,y:Number.isFinite(n.y)?n.y:i.y,width:Number.isFinite(n.width)?n.width:i.width,height:Number.isFinite(n.height)?n.height:i.height},o)}):Ti.map((t,i)=>Nt(t,i))}function Yt(e={},t={}){if(Array.isArray(e.textBoxes)&&e.textBoxes.length)return e.textBoxes.map((n,h)=>Ft(n,h));const i=!!(e.imageBoxes&&!Array.isArray(e.imageBoxes)&&typeof e.imageBoxes=="object"),o=Mi(t);return i&&o.length?o:[Ft({id:"text-1",text:Jt(t.headline,"text"),isDefaultText:!t.headline,x:.56,y:.18,width:.24,height:.14,kind:"title",fontSize:.046,lineHeight:1.12,padding:.01,family:"serif",weight:600},0)]}function Li(e={},t={}){return{options:fa(e),imageBoxes:Xt(e),textBoxes:Yt(e,t)}}function Dt(e){return{left:`${e.x*100}%`,top:`${e.y*100}%`,width:`${e.width*100}%`,height:`${e.height*100}%`}}function na(e,t){return{x:e.x+e.width*t.x,y:e.y+e.height*t.y,width:e.width*t.width,height:e.height*t.height,radius:0}}function We(e){return mt(e)}const Pi={id:"page8",label:"Page 8",description:"Custom free layout",async render(e,t,i,o){var g,_,P,C,E,k,O,D,b,j,oe,ye;const{addWrappedText:n,drawFileCover:h}=o,p={x:84,y:84,width:1072,height:1586},l=Li(t.customLayout||{},t),a=Array.isArray((g=t.customLayout)==null?void 0:g.pretextBoxes)?t.customLayout.pretextBoxes:null;e.fillStyle="#191514",e.textBaseline="top";const d=o.page8Files||{};if(((_=t.customLayout)==null?void 0:_.editorType)==="pretext"&&a){for(const M of a){const H={x:p.x+M.x/794*p.width,y:p.y+M.y/1123*p.height,width:M.width/794*p.width,height:M.height/1123*p.height,radius:0};if(M.kind==="image"){(P=M.data)!=null&&P.src&&await h(e,M.data.src,H,{cropX:Number(M.data.cropX)||0,cropY:Number(M.data.cropY)||0,zoom:Math.max(1,Number(M.data.zoom)||1)});continue}const F=Math.max(0,Number((C=M.data)==null?void 0:C.padding)||0),A=Math.max(12,Number((E=M.data)==null?void 0:E.lineHeight)||34);e.textAlign=((k=M.data)==null?void 0:k.align)||"left",e.fillStyle=((O=M.data)==null?void 0:O.color)||"#191514",e.font=`${Number((D=M.data)==null?void 0:D.fontWeight)||400} ${Math.max(12,Number((b=M.data)==null?void 0:b.fontSize)||22)}px ${((j=M.data)==null?void 0:j.fontFamily)||'"Noto Sans JP", sans-serif'}`;const te=e.textAlign==="right"?H.x+H.width-F:e.textAlign==="center"?H.x+H.width/2:H.x+F;n(e,((oe=M.data)==null?void 0:oe.text)||"",{x:te,y:H.y+F,maxWidth:Math.max(24,H.width-F*2),lineHeight:A,maxLines:Math.max(1,Math.floor(Math.max(A,H.height-F*2)/A))})}return}for(const z of l.imageBoxes){const T=na(p,z);(ye=d[z.id])!=null&&ye.file&&await h(e,d[z.id].file,T,d[z.id].position)}l.textBoxes.forEach(z=>{const T=na(p,z),M=Math.max(0,p.width*(z.padding||0)),H=z.family==="serif"?'"Cormorant Garamond", "Times New Roman", serif':'"Noto Sans JP", sans-serif';e.textAlign=z.align,e.font=`${z.weight} ${Math.round(p.width*z.fontSize)}px ${H}`;const F=z.align==="right"?T.x+T.width-M:z.align==="center"?T.x+T.width/2:T.x+M,A=Math.max(24,T.width-M*2),te=p.width*z.fontSize*z.lineHeight,he=Math.max(te,T.height-M*2);n(e,z.text||"",{x:F,y:T.y+M,maxWidth:A,lineHeight:te,maxLines:Math.max(1,Math.floor(he/Math.max(12,te)))})})}},Ii={id:"page9",label:"Page 9",description:"Template 9",async render(e,t,i,o){const{addWrappedText:n,drawFileCover:h,drawSlotPlaceholder:p,defaults:l}=o,a={x:84,y:84,width:1072,height:1586};e.fillStyle="#191514",e.textBaseline="top";const d={x:a.x+a.width*.16,y:a.y+a.height*.28,width:a.width*.68,height:a.height*.44,radius:0};i.primary.file?await h(e,i.primary.file,d,i.primary.position):p(e,d),e.textAlign="center",e.font='600 38px "Cormorant Garamond", "Times New Roman", serif',n(e,t.headline||l.headline,{x:a.x+a.width*.5,y:a.y+a.height*.15,maxWidth:a.width*.18,lineHeight:42,maxLines:2}),e.font='500 28px "Noto Sans JP", sans-serif',n(e,t.subhead||l.subhead,{x:a.x+a.width*.5,y:a.y+a.height*.225,maxWidth:a.width*.64,lineHeight:36,maxLines:3}),e.font='500 28px "Noto Sans JP", sans-serif',n(e,t.body||l.body,{x:a.x+a.width*.5,y:a.y+a.height*.76,maxWidth:a.width*.64,lineHeight:36,maxLines:3}),e.font='500 26px "Noto Sans JP", sans-serif',n(e,t.date||l.date,{x:a.x+a.width*.5,y:a.y+a.height*.86,maxWidth:a.width*.18,lineHeight:32,maxLines:2}),e.textAlign="left"}},Ci={id:"page10",label:"Page 10",description:"Template 10",async render(e,t,i,o){const{addWrappedText:n,drawFileCover:h,drawSlotPlaceholder:p,defaults:l}=o,a={x:84,y:84,width:1072,height:1586};e.fillStyle="#191514",e.textBaseline="top",e.textAlign="left";const d={x:a.x+a.width*.22,y:a.y+a.height*.14,width:a.width*.56,height:a.height*.56,radius:0};i.primary.file?await h(e,i.primary.file,d,i.primary.position):p(e,d),e.font='600 32px "Cormorant Garamond", "Times New Roman", serif',n(e,t.headline||l.headline,{x:a.x+a.width*.04,y:a.y+a.height*.065,maxWidth:a.width*.18,lineHeight:38,maxLines:2}),e.font='500 28px "Noto Sans JP", sans-serif',n(e,t.subhead||l.subhead,{x:a.x+a.width*.16,y:a.y+a.height*.74,maxWidth:a.width*.68,lineHeight:36,maxLines:2}),e.font='500 28px "Noto Sans JP", sans-serif',n(e,t.intro||l.intro,{x:a.x+a.width*.12,y:a.y+a.height*.825,maxWidth:a.width*.76,lineHeight:36,maxLines:2}),e.font='500 26px "Noto Sans JP", sans-serif',n(e,t.body||l.body,{x:a.x+a.width*.12,y:a.y+a.height*.91,maxWidth:a.width*.22,lineHeight:32,maxLines:3}),e.font='500 26px "Noto Sans JP", sans-serif',n(e,t.date||l.date,{x:a.x+a.width*.39,y:a.y+a.height*.91,maxWidth:a.width*.22,lineHeight:32,maxLines:3}),e.font='500 26px "Noto Sans JP", sans-serif',n(e,t.editor||l.editor,{x:a.x+a.width*.66,y:a.y+a.height*.91,maxWidth:a.width*.22,lineHeight:32,maxLines:3})}},ya=[ha,bi,xi,wi,vi,_i,Si,Ii,Ci,Pi],Le=ha.id,ra=new Map(ya.map(e=>[e.id,e]));function Ei(e){return ra.get(e)||ra.get(Le)}const Ai=[{value:"#f8f4ee",label:"Ivory"},{value:"#f4e5de",label:"Blush"},{value:"#ece4d8",label:"Sand"},{value:"#e5ece7",label:"Sage"}];function Gt(e){return`
    <button class="button button--ghost page-back page-back--icon" type="button" ${e} aria-label="Back">
      ${B("returnLeft")}
    </button>
  `}function Bi(){return`
    <div class="compose-header-add" data-pretext-add>
      <button
        class="button button--ghost page-back page-back--icon compose-add-button"
        type="button"
        data-pretext-add-toggle
        aria-label="Add layout element"
        aria-haspopup="true"
        aria-expanded="false"
      >
        ${B("compose")}
      </button>
      <div class="compose-header-add__popover" data-pretext-add-popover hidden>
        <div class="compose-header-add__row">
          <span class="compose-header-add__label">Title</span>
          <div class="compose-header-add__align">
            <button type="button" class="compose-header-add__option" data-pretext-add-kind="title" data-pretext-add-align="left" aria-label="Add left aligned title">${B("alignLeft")}</button>
            <button type="button" class="compose-header-add__option" data-pretext-add-kind="title" data-pretext-add-align="center" aria-label="Add centered title">${B("alignCenter")}</button>
            <button type="button" class="compose-header-add__option" data-pretext-add-kind="title" data-pretext-add-align="right" aria-label="Add right aligned title">${B("alignRight")}</button>
          </div>
        </div>
        <div class="compose-header-add__row">
          <span class="compose-header-add__label">Body</span>
          <div class="compose-header-add__align">
            <button type="button" class="compose-header-add__option" data-pretext-add-kind="body" data-pretext-add-align="left" aria-label="Add left aligned body">${B("alignLeft")}</button>
            <button type="button" class="compose-header-add__option" data-pretext-add-kind="body" data-pretext-add-align="center" aria-label="Add centered body">${B("alignCenter")}</button>
            <button type="button" class="compose-header-add__option" data-pretext-add-kind="body" data-pretext-add-align="right" aria-label="Add right aligned body">${B("alignRight")}</button>
          </div>
        </div>
        <div class="compose-header-add__row compose-header-add__row--image">
          <span class="compose-header-add__label">Image</span>
          <button type="button" class="compose-header-add__image" data-pretext-add-kind="image">
            ${B("image")}
            <span>Image</span>
          </button>
        </div>
      </div>
    </div>
  `}function Ni(){return`
    <button
      class="button button--ghost page-back page-back--icon compose-delete-button"
      type="button"
      data-pretext-delete
      aria-label="Delete selected element"
    >
      ${B("trash")}
    </button>
  `}function Di(e){return`
    <button class="button button--primary compose-header-tags-button" type="button" data-compose-stage-nav="tags">
      ${e?"Update Tags":"タグへ進む"}
    </button>
  `}function Ri(e,t,i=[]){return`
    <section class="compose-group compose-group--tags">
      <div class="compose-group__head">
        <h3>${ui[e]}</h3>
      </div>
      <div class="tag-select-grid">
        ${t.map(o=>`
          <label class="tag-check">
            <input type="checkbox" name="fixedTags" value="${o}" ${i.includes(o)?"checked":""} />
            <span>${o}</span>
          </label>
        `).join("")}
      </div>
    </section>
  `}function ba(e=Le){return`
    <div class="template-carousel">
      <button class="template-carousel__nav" type="button" data-template-carousel-nav="prev" aria-label="Previous template">&larr;</button>
      <div class="template-carousel__viewport" data-template-carousel>
        <div class="template-thumb-track">
          ${ya.map(t=>`
            <label class="template-thumb ${e===t.id?"is-active":""}">
              <input type="radio" name="templateId" value="${t.id}" ${e===t.id?"checked":""} />
              <span class="template-thumb__preview template-option__preview template-option__preview--${t.id}" aria-hidden="true"></span>
            </label>
          `).join("")}
        </div>
      </div>
      <button class="template-carousel__nav" type="button" data-template-carousel-nav="next" aria-label="Next template">&rarr;</button>
    </div>
  `}function xa(e){return`
    <div class="color-picker-inline">
      <div class="color-chip-track color-chip-track--inline" data-color-carousel>
        ${Ai.map(t=>`
          <label class="color-chip color-chip--inline ${e===t.value?"is-active":""}" title="${t.label}">
            <input type="radio" name="backgroundColor" value="${t.value}" ${e===t.value?"checked":""} />
            <span class="color-chip__swatch" style="--swatch:${t.value}"></span>
            <span class="color-chip__label">${t.label}</span>
          </label>
        `).join("")}
      </div>
    </div>
  `}function Rt({id:e,slotClass:t}){return`
    <div class="compose-slot ${t}" data-slot="${e}">
      <input class="field__file" id="${e}" type="file" accept="image/*" />
      <label class="compose-slot__surface" for="${e}">
        <div class="compose-slot__image" data-slot-image="${e}" hidden></div>
        <div class="compose-slot__placeholder" data-slot-placeholder="${e}">
          <span class="compose-slot__plus">${B("compose")}</span>
        </div>
      </label>
      <button class="compose-slot__remove" type="button" data-slot-remove="${e}" hidden aria-label="remove image">&times;</button>
    </div>
  `}function Ht(e){return`
    <div class="compose-slot ${e}">
      <div class="compose-slot__surface">
        <div class="compose-slot__placeholder">
          <span class="compose-slot__plus">${B("compose")}</span>
        </div>
      </div>
    </div>
  `}function wa(e,t,i,o={}){const{editable:n=!1,interactiveSlots:h=!1}=o,p=t==="page8",l=n?"compose-sheet":"compose-sheet compose-sheet--locked",a=p?`${l} compose-sheet--custom`:l,d=n?"true":"false";return p?`
      <div class="${a}" id="composeSheet" data-template="${t}" style="--sheet-bg:${i};">
        <div class="compose-sheet__frame">
          <div class="compose-custom-canvas" data-custom-canvas hidden></div>
        </div>
      </div>
    `:`
    <div class="${a}" id="composeSheet" data-template="${t}" style="--sheet-bg:${i};">
      <div class="compose-sheet__frame">
        <div class="compose-sheet__outline" aria-hidden="true"></div>
        <div class="compose-sheet__footer-bar" aria-hidden="true"></div>
        <div class="compose-custom-canvas" data-custom-canvas hidden></div>
        <div
          class="compose-sheet__headline compose-editable"
          data-editable="headline"
          data-placeholder="headline"
          data-max-chars="42"
          data-single-line="true"
          contenteditable="${d}"
          spellcheck="false"
        >${e.headline}</div>
        <div
          class="compose-sheet__subhead compose-editable"
          data-editable="subhead"
          data-placeholder="subhead"
          data-max-chars="56"
          data-single-line="true"
          contenteditable="${d}"
          spellcheck="false"
        >${e.subhead}</div>
        <div
          class="compose-sheet__notes compose-editable"
          data-editable="intro"
          data-placeholder="notes"
          data-max-chars="72"
          contenteditable="${d}"
          spellcheck="false"
        >${e.intro}</div>
        ${h?Rt({id:"imageInputSecondary",slotClass:"compose-slot--secondary"}):Ht("compose-slot--secondary")}
        ${h?Rt({id:"imageInputAccent",slotClass:"compose-slot--accent"}):Ht("compose-slot--accent")}
        ${h?Rt({id:"imageInputPrimary",slotClass:"compose-slot--primary"}):Ht("compose-slot--primary")}
        <div
          class="compose-sheet__body compose-editable"
          data-editable="body"
          data-placeholder="body"
          data-max-chars="120"
          contenteditable="${d}"
          spellcheck="false"
        >${e.body}</div>
        <div
          class="compose-sheet__date compose-editable"
          data-editable="date"
          data-placeholder="date"
          data-max-chars="18"
          data-single-line="true"
          contenteditable="${d}"
          spellcheck="false"
        >${e.date}</div>
        <div
          class="compose-sheet__editor compose-editable"
          data-editable="editor"
          data-placeholder="editor"
          data-max-chars="24"
          data-single-line="true"
          contenteditable="${d}"
          spellcheck="false"
        >${e.editor}</div>
      </div>
    </div>
  `}function Hi(e,t){return`
    <section class="compose-group compose-group--tags-stage">
      <div class="compose-group__head">
        <h3>Tags</h3>
      </div>
      ${Object.entries(pa).map(([i,o])=>Ri(i,o,e)).join("")}
      <section class="compose-group compose-group--tags compose-group--tags-nested">
        <div class="compose-group__head">
          <h3>Free Tags</h3>
        </div>
        <label class="field">
          <input class="field__input" type="text" name="freeTags" placeholder="cafe, spring, film" value="${t}" />
        </label>
      </section>
    </section>
  `}function Wi({values:e,selectedId:t,selectedBackground:i,headerMini:o,headerTitle:n}){return`
    <section class="page page--compose page--compose--select" data-compose-stage="select">
      <header class="page-header page-header--with-back page-header--compose">
        ${Gt("data-close-compose")}
        <div>
          <p class="page-header__mini">${o}</p>
          <h2 class="page-header__title">${n}</h2>
        </div>
      </header>

      <section class="compose-select-shell">
        <section class="compose-preview compose-preview--select">
          ${wa(e,t,i,{editable:!1,interactiveSlots:!1})}
        </section>

        <section class="compose-group compose-group--template compose-group--template-select">
          <div class="compose-group__head compose-group__head--template compose-group__head--template-select">
            <h3>Template</h3>
            ${xa(i)}
            <button class="button button--primary compose-confirm-button" type="button" data-compose-stage-nav="edit">編集する</button>
          </div>
          ${ba(t)}
        </section>
      </section>
    </section>
  `}function qi({values:e,selectedId:t,selectedBackground:i,isEditing:o,headerMini:n,headerTitle:h}){return`
    <section class="page page--compose page--compose--edit ${t==="page8"?"page--compose--edit--page8":""}" data-compose-stage="edit">
      <header class="page-header page-header--with-back page-header--compose">
        <div class="page-header__actions page-header__actions--compose">
          ${Gt('data-compose-stage-nav="select"')}
          ${t==="page8"?Bi():""}
          ${t==="page8"?Ni():""}
          ${t==="page8"?Di(o):""}
        </div>
        <div>
          <p class="page-header__mini">${n}</p>
          <h2 class="page-header__title">${h}</h2>
        </div>
      </header>

      <form class="compose-form compose-form--edit" id="composeForm">
        <section class="compose-editor compose-editor--focus ${t==="page8"?"compose-editor--page8":""}">
          <section class="compose-preview compose-preview--editor ${t==="page8"?"compose-preview--page8":""}">
            ${t==="page8"?`
                <div class="compose-pretext-host compose-pretext-host--page8" data-compose-pretext-host></div>
              `:wa(e,t,i,{editable:!0,interactiveSlots:!0})}
          </section>
        </section>
        ${t==="page8"?"":`
          <div class="compose-flow-actions compose-flow-actions--editor">
            <button class="button button--primary compose-submit-button" type="button" data-compose-stage-nav="tags">${o?"Update Tags":"タグへ進む"}</button>
          </div>
        `}
        <section class="compose-custom-tools" data-custom-template-controls hidden ${t==="page8"?'style="display:none"':""}>
          <div class="compose-custom-tools__header">
            <p class="compose-custom-tools__eyebrow">Pretext-inspired editorial controls</p>
            <h3 class="compose-custom-tools__title">Custom Layout</h3>
            <p class="compose-custom-tools__hint">画像はフレーム移動とクロップを切替、文字はタイトル/本文プリセットと行間・余白を調整できます。</p>
          </div>
          <div class="compose-custom-tools__buttons">
            <button class="button button--ghost" type="button" data-custom-add="image">画像追加</button>
            <button class="button button--ghost" type="button" data-custom-add="text">文字追加</button>
          </div>
          <section class="compose-custom-inspector" data-custom-inspector></section>
        </section>
      </form>
    </section>
  `}function zi({selectedId:e,selectedBackground:t,selectedFixedTags:i,freeTagsValue:o,submitLabel:n,isEditing:h,headerMini:p,headerTitle:l}){return`
    <section class="page page--compose page--compose--tags" data-compose-stage="tags">
      <header class="page-header page-header--with-back page-header--compose">
        ${Gt('data-compose-stage-nav="edit"')}
        <div>
          <p class="page-header__mini">${p}</p>
          <h2 class="page-header__title">${l}</h2>
        </div>
      </header>

      <form class="compose-form compose-form--tags" id="composeForm">
        <section class="compose-tag-stage">
          <section class="compose-group compose-group--template compose-group--template-summary">
            <div class="compose-group__head compose-group__head--template">
              <h3>Template</h3>
              ${xa(t)}
            </div>
            ${ba(e)}
          </section>
          ${Hi(i,o)}
        </section>
        <div class="compose-flow-actions">
          <button class="button button--ghost compose-stage-back" type="button" data-compose-stage-nav="edit">Edit</button>
          <button class="button button--primary compose-submit-button" type="submit">${n}</button>
        </div>
      </form>
    </section>
  `}function Oi(e=Le){const t=typeof e=="object"?e:{selectedTemplateId:e},i=t.draft||{},o={headline:i.headline||"text",subhead:i.subhead||"text",intro:i.intro||"text",body:i.body||"text",date:i.date||"text",editor:i.editor||"編集者：haru"},n=t.selectedTemplateId||i.templateId||Le,h=t.selectedBackground||i.backgroundColor||"#f8f4ee",p=Array.isArray(i.fixedTags)?i.fixedTags:[],l=Array.isArray(i.freeTags)?i.freeTags.join(", "):i.freeTags||"",a=t.isEditing?"Update Post":"Post This Layout",d=t.isEditing?"post editor":"template editor",g=t.isEditing?"Edit Post":"Compose",_=t.stage||"select";return _==="select"?Wi({values:o,selectedId:n,selectedBackground:h,headerMini:d,headerTitle:g}):_==="tags"?zi({selectedId:n,selectedBackground:h,selectedFixedTags:p,freeTagsValue:l,submitLabel:a,isEditing:!!t.isEditing,headerMini:d,headerTitle:g}):qi({values:o,selectedId:n,selectedBackground:h,isEditing:!!t.isEditing,headerMini:d,headerTitle:g})}function Fi(e){return e.length?e.map(t=>`
    <label class="issue-post-option">
      <input type="checkbox" name="issuePostIds" value="${t.id}" />
      <img src="${t.imageData}" alt="${t.authorName}の投稿画像" />
      <div class="issue-post-option__meta">
        <strong>${t.authorName}</strong>
        <span>${ca(t.createdAt)}</span>
      </div>
    </label>
  `).join(""):`
      <section class="empty-panel">
        <p class="empty-panel__title">まだまとめる投稿がありません</p>
        <p class="empty-panel__copy">先に投稿を作ると、ここで選んで一冊の下書きにできます。</p>
      </section>
    `}function Xi(e,t){return e.length?e.map(i=>{const o=t.filter(n=>i.postIds.includes(n.id));return`
      <article class="issue-card issue-card--${i.tone}">
        <p class="issue-card__eyebrow">memories issue</p>
        <h3 class="issue-card__title">${i.title}</h3>
        <p class="issue-card__subtitle">${i.subtitle||"sub title free"}</p>
        <div class="issue-card__count">${o.length} posts selected</div>
        <div class="issue-card__thumbs">
          ${o.slice(0,3).map(n=>`<img src="${n.imageData}" alt="${n.authorName}の投稿画像" />`).join("")}
        </div>
      </article>
    `}).join(""):'<p class="empty-copy">まだ雑誌の下書きはありません。</p>'}function Yi(e){return`
    <section class="page page--magazine">
      <header class="page-header page-header--with-back">
        <button class="button button--ghost page-back" type="button" data-home-nav="home">Back</button>
        <div>
          <p class="page-header__mini">issue builder</p>
          <h2 class="page-header__title">Magazine</h2>
        </div>
      </header>

      <form class="issue-form" id="issueForm">
        <label class="field">
          <span class="field__label">表紙タイトル</span>
          <input class="field__input" type="text" name="title" maxlength="30" placeholder="例: april date issue" required />
        </label>

        <label class="field">
          <span class="field__label">サブタイトル</span>
          <input class="field__input" type="text" name="subtitle" maxlength="40" placeholder="例: cafe & calm sunday" />
        </label>

        <label class="field">
          <span class="field__label">雰囲気</span>
          <select class="field__input" name="tone">
            <option value="soft">soft pink</option>
            <option value="cream">cream beige</option>
            <option value="rose">dusty rose</option>
          </select>
        </label>

        <section class="issue-form__posts">
          <div class="section-head">
            <h3>まとめたい投稿を選ぶ</h3>
          </div>
          <div class="issue-post-grid">
            ${Fi(e.posts||[])}
          </div>
        </section>

        <button class="button button--primary button--full" type="submit">下書きを保存</button>
      </form>

      <section class="section-block">
        <div class="section-head">
          <h3>保存済みの雑誌下書き</h3>
        </div>
        <div class="issue-list">
          ${Xi(e.issues||[],e.posts||[])}
        </div>
      </section>
    </section>
  `}function va(e){return[...new Set(e.map(t=>t.authorName))]}function _a(e){return`@${String(e||"user").trim().replace(/\s+/g,"_").toLowerCase()}`}function Tt(e,t){return e.length?`
    <div class="feed-grid feed-grid--single">
      ${e.map(i=>ma(i,{mode:"minimal"})).join("")}
    </div>
  `:`<p class="empty-copy">${t}</p>`}function ji(e,t){return e.length?`
    <div class="issue-list">
      ${e.map(i=>{const o=t.filter(n=>(i.postIds||[]).includes(n.id));return`
          <article class="issue-card issue-card--${i.tone}">
            <p class="issue-card__eyebrow">memories issue</p>
            <h3 class="issue-card__title">${i.title}</h3>
            <p class="issue-card__subtitle">${i.subtitle||"sub title free"}</p>
            <div class="issue-card__count">${o.length} posts selected</div>
            <div class="issue-card__thumbs">
              ${o.slice(0,3).map(n=>`<img src="${n.imageData}" alt="${n.authorName} post" />`).join("")}
            </div>
          </article>
        `}).join("")}
    </div>
  `:'<p class="empty-copy">Saved magazine issues will appear here.</p>'}function Ui(e,t,i){const o=e.posts.filter(D=>D.authorName===e.profile.name),n=e.posts.filter(D=>D.liked),h=e.posts.filter(D=>D.saved),p=e.issues||[],l=e.followingAuthors,a=i.filter(D=>D!==e.profile.name),d=t.profileSection||"identity",g=t.profileLibraryTab||"liked",_=!!t.profileAvatarCropOpen,P=_a(e.profile.name),E={identity:{label:"Name / ID",value:`<span class="profile-node__avatar">${tt(e.profile.avatarData,(e.profile.name||"Y").slice(0,1).toUpperCase(),`${e.profile.name} avatar`)}</span>`,angle:0,centerLabel:""},library:{label:"Likes / Saved",value:`<span class="profile-node__icon-pair">${B("heart")}${B("save")}</span>`,angle:60},edit:{label:"Edit",value:"profile",angle:120},posts:{label:"Posts",value:String(o.length),angle:180},magazine:{label:"Magazine",value:String(p.length),angle:240},network:{label:"Follow / Follower",value:`${l.length} / ${a.length}`,angle:300}},k=E[d]||E.identity;function O(){switch(d){case"identity":return`
          <section class="profile-section-panel">
            <div class="section-head">
              <h3>Name / ID</h3>
            </div>
            <div class="profile-identity-grid">
              <article class="profile-info-card">
                <span class="profile-info-card__label">Display Name</span>
                <strong>${e.profile.name}</strong>
              </article>
              <article class="profile-info-card">
                <span class="profile-info-card__label">ID</span>
                <strong>${P}</strong>
              </article>
              <article class="profile-info-card profile-info-card--wide">
                <span class="profile-info-card__label">Bio</span>
                <p>${e.profile.bio}</p>
              </article>
            </div>
          </section>
        `;case"network":return`
          <section class="profile-section-panel">
            <div class="section-head">
              <h3>Follow / Follower</h3>
            </div>
            <div class="profile-library-grid">
              <section class="profile-library-block">
                <p class="profile-column-title">Following ${l.length}</p>
                <div class="follow-list">
                  ${l.length?l.map(D=>`
                    <article class="follow-item">
                      <div class="follow-item__main">
                        <div class="avatar">${D.slice(0,1).toUpperCase()}</div>
                        <span>${D}</span>
                      </div>
                      <button class="button button--ghost is-active" type="button" data-follow-author="${D}">Following</button>
                    </article>
                  `).join(""):'<p class="empty-copy">No following yet.</p>'}
                </div>
              </section>
              <section class="profile-library-block">
                <p class="profile-column-title">Followers ${a.length}</p>
                <div class="follow-list">
                  ${a.length?a.map(D=>`
                    <article class="follow-item">
                      <div class="follow-item__main">
                        <div class="avatar">${D.slice(0,1).toUpperCase()}</div>
                        <span>${D}</span>
                      </div>
                      <button class="button button--ghost" type="button" data-open-author="${D}">View</button>
                    </article>
                  `).join(""):'<p class="empty-copy">No followers yet.</p>'}
                </div>
              </section>
            </div>
          </section>
        `;case"library":return`
          <section class="profile-section-panel">
            <div class="section-head">
              <h3>Likes / Saved</h3>
            </div>
            <div class="profile-library-tabs" role="tablist" aria-label="Likes and saved tabs">
              <button class="profile-library-tab ${g==="liked"?"is-active":""}" type="button" data-profile-library-tab="liked" aria-pressed="${g==="liked"?"true":"false"}">${B("heart")}<span>Like</span></button>
              <button class="profile-library-tab ${g==="saved"?"is-active":""}" type="button" data-profile-library-tab="saved" aria-pressed="${g==="saved"?"true":"false"}">${B("save")}<span>Save</span></button>
            </div>
            <section class="profile-library-panel">
              <p class="profile-column-title">${g==="liked"?"Liked Posts":"Saved Posts"}</p>
              ${g==="liked"?Tt(n,"Posts you liked will appear here."):Tt(h,"Posts you saved will appear here.")}
            </section>
          </section>
        `;case"magazine":return`
          <section class="profile-section-panel">
            <div class="section-head">
              <h3>Magazine</h3>
            </div>
            ${ji(p,e.posts||[])}
          </section>
        `;case"edit":return`
          <section class="profile-section-panel">
            <div class="section-head">
              <h3>Edit Profile</h3>
            </div>
            <form class="profile-form" id="profileForm">
              <section class="profile-avatar-editor">
                <div class="profile-avatar-editor__current">
                  <div class="profile-avatar-editor__preview-wrap">
                    <button
                      class="profile-avatar-editor__add"
                      type="button"
                      data-profile-avatar-upload
                      aria-label="Upload profile avatar"
                    >
                      +
                    </button>
                    <div class="profile-card__avatar profile-card__avatar--preview">
                      ${tt(e.profile.avatarData,(e.profile.name||"Y").slice(0,1).toUpperCase(),`${e.profile.name} avatar`)}
                    </div>
                  </div>
                </div>
                <input id="profileAvatarInput" type="file" accept="image/*" hidden />
                ${_?`
                  <div class="avatar-cropper" id="avatarCropper">
                    <div class="avatar-cropper__viewport" id="avatarCropSurface">
                      <img class="avatar-cropper__image" id="avatarCropImage" alt="Avatar crop preview" />
                      <div class="avatar-cropper__overlay"></div>
                      <div class="avatar-cropper__ring"></div>
                    </div>
                    <p class="avatar-cropper__hint">Drag to choose the visible area inside the circle.</p>
                  </div>
                `:""}
              </section>
              <label class="field">
                <span class="field__label">Display Name</span>
                <input class="field__input" type="text" name="name" maxlength="18" value="${e.profile.name}" required />
              </label>
              <label class="field">
                <span class="field__label">Bio</span>
                <textarea class="field__textarea" name="bio" maxlength="80">${e.profile.bio}</textarea>
              </label>
              <button class="button button--primary" type="submit">Save</button>
            </form>
          </section>
        `;case"posts":return`
          <section class="profile-section-panel">
            <div class="section-head">
              <h3>Your Posts</h3>
            </div>
            ${Tt(o,"Your posts will appear here after you publish one.")}
          </section>
        `;default:return""}}return`
    <section class="page page--profile">
      <header class="page-header page-header--with-back">
        <button class="button button--ghost page-back" type="button" data-close-profile>Back</button>
        <div>
          <p class="page-header__mini">your room</p>
          <h2 class="page-header__title">Profile</h2>
        </div>
      </header>

      <section
        class="profile-orbit-shell"
      >
        <div class="profile-orbit">
          <div class="profile-orbit__display ${d==="identity"?"is-identity":""}">
            ${k.centerLabel!==""?`<span class="profile-orbit__display-label">${k.label}</span>`:""}
            <strong class="profile-orbit__display-value">${k.value}</strong>
          </div>
        </div>
      </section>

      ${O()}
    </section>
  `}function Ji(e,t){var h;const i=va(e.posts||[]),o=e.posts.filter(p=>p.authorName===t),n=e.followingAuthors.includes(t);return`
    <section class="page page--profile">
      <header class="page-header page-header--with-back">
        <button class="button button--ghost page-back" type="button" data-close-profile>Back</button>
        <div>
          <p class="page-header__mini">author profile</p>
          <h2 class="page-header__title">${t}</h2>
        </div>
      </header>

      <section class="profile-card">
        <div class="profile-card__avatar">${tt((h=o[0])==null?void 0:h.authorAvatarData,(t||"Y").slice(0,1).toUpperCase(),`${t} avatar`)}</div>
        <div class="profile-card__body">
          <div class="profile-card__heading">
            <div>
              <h3 class="profile-card__name">${t}</h3>
              <p class="profile-card__bio">${_a(t)}</p>
            </div>
            <button class="button button--ghost ${n?"is-active":""}" type="button" data-follow-author="${t}">
              ${n?"Following":"Follow"}
            </button>
          </div>
        </div>
      </section>

      <section class="section-block">
        <div class="section-head">
          <h3>Posts</h3>
        </div>
        ${Tt(o,"This author has no posts yet.")}
      </section>

      <section class="section-block">
        <div class="section-head">
          <h3>Local Stats</h3>
        </div>
        <div class="stats-grid">
          <article class="stat-card"><span>Posts</span><strong>${o.length}</strong></article>
          <article class="stat-card"><span>Followers</span><strong>${i.filter(p=>p!==t).length}</strong></article>
          <article class="stat-card"><span>Following</span><strong>${Number(n)}</strong></article>
        </div>
      </section>
    </section>
  `}function Gi(e,t={}){const i=va(e.posts||[]),o=t.profileAuthor||null;return!o||o===e.profile.name?Ui(e,t,i):Ji(e,o)}function Vi(e,t={}){var h;if(!e)return`
      <section class="page page--post-detail">
        <header class="page-header page-header--with-back">
          <button class="button button--ghost page-back" type="button" data-close-post-detail>Back</button>
          <div>
            <p class="page-header__mini">post view</p>
            <h2 class="page-header__title">Post</h2>
          </div>
        </header>
        <section class="empty-panel">
          <p class="empty-panel__title">Post not found</p>
        </section>
      </section>
    `;const{canDelete:i=!1,canEdit:o=!1}=t,n=[...e.fixedTags||[],...e.freeTags||[]];return`
    <section class="page page--post-detail">
      <header class="page-header page-header--with-back">
        <button class="button button--ghost page-back" type="button" data-close-post-detail>Back</button>
        <div>
          <p class="page-header__mini">post view</p>
          <h2 class="page-header__title">Post</h2>
        </div>
      </header>

      <article class="post-detail-card">
        <div class="post-detail-card__author-row">
          <button class="avatar avatar-button" type="button" data-open-author="${e.authorName}" aria-label="Open ${e.authorName} profile">
            ${tt(e.authorAvatarData,e.authorIcon,`${e.authorName} avatar`)}
          </button>
          <div>
            <p class="post-card__author">${e.authorName}</p>
            <p class="post-card__time">${da(e.createdAt)}</p>
          </div>
        </div>

        <img class="post-detail-card__image" src="${e.imageData}" alt="${e.authorName} post image" />

        ${e.caption?`<p class="post-detail-card__caption">${e.caption}</p>`:""}

        ${n.length?`
          <div class="post-detail-card__tags">
            ${n.map(p=>`<span class="chip chip--soft">${p}</span>`).join("")}
          </div>
        `:""}

        <div class="post-detail-card__meta">
          <div class="post-card__actions">
            <button class="icon-button ${e.liked?"is-active":""}" data-like="${e.id}" aria-label="Like post">
              ${B("heart")}
              <span>${e.likes}</span>
            </button>
            <button class="icon-button" data-comment="${e.id}" aria-label="Open comments">
              ${B("comment")}
              <span>${((h=e.comments)==null?void 0:h.length)||0}</span>
            </button>
            <button class="icon-button ${e.saved?"is-active":""}" data-save="${e.id}" aria-label="Save post">
              ${B("save")}
              <span>${e.saves}</span>
            </button>
          </div>
          ${o||i?`
            <div class="post-detail-card__owner-actions">
              ${o?`
                <button class="button button--ghost post-detail-card__edit" type="button" data-edit-post="${e.id}" aria-label="Edit post">
                  ${B("edit")}
                </button>
              `:""}
              ${i?`
                <button class="button button--ghost post-detail-card__delete" type="button" data-delete-post="${e.id}" aria-label="Delete post">
                  ${B("trash")}
                </button>
              `:""}
            </div>
          `:""}
        </div>
      </article>
    </section>
  `}async function Qi(e,t={}){const{maxWidth:i=900,quality:o=.82}=t,n=await createImageBitmap(e),h=n.width/n.height,p=Math.min(n.width,i),l=Math.round(p/h),a=document.createElement("canvas");return a.width=p,a.height=l,a.getContext("2d").drawImage(n,0,0,p,l),a.toDataURL("image/webp",o)}async function Zi(e,t,i={}){var k;const{size:o=320}=i,n=await createImageBitmap(e),h=document.createElement("canvas");h.width=o,h.height=o;const p=h.getContext("2d");if(!p)return"";const l=Math.max(1,Number(t==null?void 0:t.zoom)||1),a=Math.min(1,Math.max(0,Number(t==null?void 0:t.x)||.5)),d=Math.min(1,Math.max(0,Number(t==null?void 0:t.y)||.5)),g=Math.max(o/n.width,o/n.height);n.width*g*l,n.height*g*l;const _=o/(g*l),P=o/(g*l),C=Math.max(0,(n.width-_)*a),E=Math.max(0,(n.height-P)*d);return p.clearRect(0,0,o,o),p.save(),p.beginPath(),p.arc(o/2,o/2,o/2,0,Math.PI*2),p.closePath(),p.clip(),p.drawImage(n,C,E,_,P,0,0,o,o),p.restore(),(k=n.close)==null||k.call(n),h.toDataURL("image/png")}const c={screen:"opening",timelineOverlay:null,timelineTab:"recommended",timelinePan:{x:-360,y:-220},searchQuery:"",searchTags:[],homeTheme:"light",homeCoreState:"default",homeCoreTapTimestamps:[],previewPostId:null,commentPostId:null,profileEditOpen:!1,profileAuthor:null,profileSection:null,profileLibraryTab:"liked",profileExpanded:!0,profileOrbitRotation:0,profileAvatarCropOpen:!1,composeStage:"select",composeTemplateId:Le,composeBackgroundColor:"#f8f4ee",composeEditingPostId:null,composeWorkingDraft:null,openingTapGuardUntil:0,postReturnScreen:"timeline",postReturnProfileAuthor:null,profileReturnState:null,composeReturnState:null},Wt=["dark","light","system"],qe={headline:"text",subhead:"text",intro:"text",body:"text",date:"text",editor:"編集者：haru"};function Ae(e={}){var t,i,o;return{file:typeof e.file=="string"?e.file:null,position:{x:Number((t=e.position)==null?void 0:t.x)||.5,y:Number((i=e.position)==null?void 0:i.y)||.5,zoom:Math.max(1,Number((o=e.position)==null?void 0:o.zoom)||1)},imageSize:e.imageSize&&Number.isFinite(e.imageSize.width)&&Number.isFinite(e.imageSize.height)?{width:e.imageSize.width,height:e.imageSize.height}:null}}function Sa(e={}){var t,i,o;return{templateId:e.templateId||Le,backgroundColor:e.backgroundColor||"#f8f4ee",headline:e.headline||qe.headline,subhead:e.subhead||qe.subhead,intro:e.intro||qe.intro,body:e.body||qe.body,date:e.date||qe.date,editor:e.editor||qe.editor,fixedTags:Array.isArray(e.fixedTags)?[...e.fixedTags]:[],freeTags:Array.isArray(e.freeTags)?[...e.freeTags]:String(e.freeTags||"").split(",").map(n=>n.trim()).filter(Boolean),customLayout:e.customLayout?JSON.parse(JSON.stringify(e.customLayout)):null,standardFiles:{primary:Ae((t=e.standardFiles)==null?void 0:t.primary),secondary:Ae((i=e.standardFiles)==null?void 0:i.secondary),accent:Ae((o=e.standardFiles)==null?void 0:o.accent)}}}let ht=null,Ue=0,Mt=null,ee=null,Ze=null;const Y={file:null,previewUrl:"",imageSize:null,crop:{x:.5,y:.5,zoom:1}};function $a(){Mt&&(window.clearTimeout(Mt),Mt=null)}function ka(){$a(),c.homeCoreState="default",c.homeCoreTapTimestamps=[]}function ut(){Y.previewUrl&&URL.revokeObjectURL(Y.previewUrl),Y.file=null,Y.previewUrl="",Y.imageSize=null,Y.crop={x:.5,y:.5,zoom:1},c.profileAvatarCropOpen=!1}function Ki(){ee!=null&&ee.unmount&&ee.unmount(),ee=null}function eo(e=c.homeTheme){return e==="system"?typeof window<"u"&&typeof window.matchMedia=="function"&&window.matchMedia("(prefers-color-scheme: dark)").matches?"dark":"light":e==="dark"?"dark":"light"}function to(){var t;const e=at();switch(c.screen){case"home":return zt(e,c);case"timeline":return pi(e,c);case"search":return yi(e,c);case"compose":return Oi({stage:c.composeStage,selectedTemplateId:c.composeTemplateId,selectedBackground:c.composeBackgroundColor,draft:c.composeWorkingDraft||((t=et(c.composeEditingPostId))==null?void 0:t.composeData)||null,isEditing:!!c.composeEditingPostId});case"magazine":return Yi(e);case"profile":return Gi(e,c);case"post":return Vi(et(c.previewPostId),{canDelete:Ta(et(c.previewPostId))});default:return zt(e,c)}}function et(e){return at().posts.find(t=>t.id===e)}function Ta(e){return e?e.authorName===at().profile.name:!1}function ao(){if(!ht)return;const e=["app-shell"],t=["screen-area"],i=eo(c.homeTheme);e.push(`app-shell--theme-${i}`),e.push(`app-shell--theme-mode-${c.homeTheme}`),c.screen==="home"?(e.push("app-shell--home"),t.push("screen-area--home")):c.screen==="timeline"?(e.push("app-shell--timeline"),t.push("screen-area--timeline")):c.screen==="compose"?(e.push("app-shell--compose"),t.push("screen-area--compose")):c.screen==="search"&&t.push("screen-area--search"),ht.innerHTML=`
    <div class="${e.join(" ")}">
      <main class="${t.join(" ")}" id="screenArea"></main>
      ${Ba()}
      <div id="modalRoot"></div>
    </div>
  `}function pt(){const e=document.getElementById("modalRoot");if(!e)return;const t=c.commentPostId?et(c.commentPostId):null;e.innerHTML=`
    ${Ra(t)}
  `,$o()}function pe(){const e=document.getElementById("screenArea");e&&(e.innerHTML=to(),ko(),pt())}function se(){if(ht){if(Ki(),c.screen==="opening"){ht.innerHTML=ti(zt(at(),c)),co();return}ao(),pe(),po()}}function jt(){return{screen:c.screen,previewPostId:c.previewPostId,profileAuthor:c.profileAuthor,postReturnScreen:c.postReturnScreen,postReturnProfileAuthor:c.postReturnProfileAuthor}}function Ma(e,t="home"){if(!e){Lt(t);return}c.screen=e.screen||t,c.previewPostId=e.previewPostId||null,c.commentPostId=null,c.profileEditOpen=!1,c.profileAuthor=c.screen==="profile"&&e.profileAuthor||null,c.postReturnScreen=e.postReturnScreen||"home",c.postReturnProfileAuthor=e.postReturnProfileAuthor||null,se()}function Lt(e){e!=="home"&&ka(),e==="compose"&&c.screen!=="compose"&&(c.composeReturnState=jt()),e==="profile"&&c.screen!=="profile"&&(c.profileReturnState=jt()),e!=="profile"&&(ut(),c.profileReturnState=null),e!=="home"&&(c.timelineOverlay=null),e!=="compose"&&(c.composeEditingPostId=null,c.composeStage="select",c.composeBackgroundColor="#f8f4ee",c.composeWorkingDraft=null,c.composeReturnState=null),c.screen=e,c.previewPostId=null,c.commentPostId=null,e==="compose"&&(c.composeStage="select",c.composeBackgroundColor="#f8f4ee",c.composeTemplateId=Le,c.composeWorkingDraft=Sa({templateId:Le,backgroundColor:"#f8f4ee"})),e==="profile"&&(ut(),c.profileAuthor=null,c.profileSection="identity",c.profileLibraryTab="liked",c.profileExpanded=!0,c.profileOrbitRotation=270),e!=="profile"&&(c.profileEditOpen=!1,c.profileAuthor=null),se()}function La(){c.previewPostId=null,c.commentPostId=null,c.openingTapGuardUntil=Date.now()+700,c.postReturnScreen="home",c.postReturnProfileAuthor=null,Lt("home")}function io(e){ut(),c.profileReturnState=jt(),c.screen="profile",c.previewPostId=null,c.commentPostId=null,c.profileEditOpen=!1,c.profileAuthor=e||null,c.profileSection=e?null:"identity",c.profileLibraryTab="liked",c.profileExpanded=!0,c.profileOrbitRotation=e?0:270,se()}function oo(){ut();const e=c.profileReturnState;c.profileReturnState=null,Ma(e,"home")}function no(e){c.postReturnScreen=c.screen,c.postReturnProfileAuthor=c.profileAuthor,c.screen="post",c.previewPostId=e,c.commentPostId=null,se()}function ro(){const e=c.composeReturnState;c.composeReturnState=null,c.composeWorkingDraft=null,Ma(e,"home")}function Pa(){c.screen=c.postReturnScreen||"timeline",c.commentPostId=null,c.profileEditOpen=!1,c.profileAuthor=c.screen==="profile"?c.postReturnProfileAuthor:null,se()}function sa(e){return new Promise((t,i)=>{const o=new Image;o.decoding="async",o.onload=()=>t(o),o.onerror=()=>i(new Error(`Failed to load opening asset: ${e}`)),o.src=e})}function so(e){const t=e.naturalWidth||e.width,i=e.naturalHeight||e.height,o=document.createElement("canvas");o.width=t,o.height=i;const n=o.getContext("2d");if(!n)return null;n.drawImage(e,0,0,t,i);const h=n.getImageData(0,0,t,i),p=h.data;let l=t,a=i,d=-1,g=-1;for(let b=0;b<p.length;b+=4){const j=p[b],oe=p[b+1],ye=p[b+2],z=p[b+3]/255,T=.2126*j+.7152*oe+.0722*ye,M=Math.max(0,Math.min(1,(T-108)/110))*z,H=Math.max(0,Math.min(1,(T-184)/42))*z,F=Math.max(M*.8,H);if(p[b]=255,p[b+1]=255,p[b+2]=255,p[b+3]=Math.round(F*255),F>.03){const A=b/4,te=A%t,he=Math.floor(A/t);l=Math.min(l,te),a=Math.min(a,he),d=Math.max(d,te),g=Math.max(g,he)}}if(d<l||g<a)return{canvas:o,width:t,height:i};n.putImageData(h,0,0);const _=Math.max(8,Math.round(Math.min(t,i)*.03)),P=Math.max(0,l-_),C=Math.max(0,a-_),E=Math.min(t-P,d-l+_*2+1),k=Math.min(i-C,g-a+_*2+1),O=document.createElement("canvas");O.width=E,O.height=k;const D=O.getContext("2d");return D?(D.drawImage(o,P,C,E,k,0,0,E,k),{canvas:O,width:E,height:k}):null}function lo(e){const t=e.canvas.getContext("2d");if(!t)return[];const{width:i,height:o}=e.canvas,{data:n}=t.getImageData(0,0,i,o),h=Array.from({length:i},(d,g)=>{let _=0;for(let P=0;P<o;P+=1)n[(P*i+g)*4+3]>110&&(_+=1);return _>Math.max(2,Math.round(o*.04))}),p=[];let l=null;for(let d=0;d<h.length;d+=1)if(h[d]&&l==null&&(l=d),(!h[d]||d===h.length-1)&&l!=null){const g=h[d]&&d===h.length-1?d:d-1;p.push({start:l,end:g}),l=null}return(p.length===4?p:[{start:0,end:Math.round(i*.25)},{start:Math.round(i*.25),end:Math.round(i*.49)},{start:Math.round(i*.49),end:Math.round(i*.73)},{start:Math.round(i*.73),end:i-1}]).map(d=>{const g=Math.max(1,d.end-d.start+1),_=document.createElement("canvas");_.width=g,_.height=o;const P=_.getContext("2d");return P?(P.drawImage(e.canvas,d.start,0,g,o,0,0,g,o),{canvas:_,x:d.start,width:g,height:o}):null}).filter(Boolean)}async function co(){var a,d,g;const e=document.getElementById("openingCanvas"),t=document.querySelector(".opening-screen");if(!e||!t)return;const i=++Ue,o=_=>{_.preventDefault(),_.stopPropagation(),i===Ue&&(Ue+=1,La())};t.addEventListener("pointerdown",o,{once:!0});const n=Promise.all([sa("image/background/okinawa.png"),sa("image/logo/b439a9c7-433e-4123-91c2-7d9eb952c1b4.png")]).catch(()=>[null,null]);try{(a=document.fonts)!=null&&a.ready?await Promise.race([document.fonts.ready,new Promise(_=>window.setTimeout(_,1200))]):await new Promise(_=>window.setTimeout(_,180))}catch{}if(i!==Ue)return;let h=null,p=null;try{[h,p]=await Promise.race([n,new Promise(_=>window.setTimeout(()=>_([null,null]),1600))])}catch{}if(i!==Ue)return;const l=((g=(d=window.matchMedia)==null?void 0:d.call(window,"(prefers-reduced-motion: reduce)"))==null?void 0:g.matches)??!1;mo(e,t,i,l,{backgroundImage:h,logoImage:p})}function mo(e,t,i,o,n={}){const h=e.getBoundingClientRect(),p=window.devicePixelRatio||1,l=Math.max(1,Math.round(h.width*p)),a=Math.max(1,Math.round(h.height*p)),d=e.getContext("2d");if(!d)return;e.width=l,e.height=a;const{backgroundImage:g,logoImage:_}=n,P="#f7fbff",C='"Avenir Next", "Helvetica Neue", Arial, sans-serif',E=Math.min(l*.038,28*p),k=E*1.24,O=E,D=k,b=o?1400:2800,j=o?420:760,oe=o?300:560,ye=o?760:1600,z=o?900:1700,T=b*.62,M=T*2,H=b+j+oe+ye*1.08,F=3,A=o?620:1280,te=o?1480:3200,he=H+te+(F-1)*A,$e=H+A,Je=he-z,It=Math.max(Je+z,he),gt=["When the darkness, which ought to be devoid of color,","is vivid with color."],Ct="There was a time when, with you beside me, the sky and the flowers appeared more beautiful than ever, and even the sound of falling rain felt boundlessly tender.";function it(I,N,Z){return Math.min(Z,Math.max(N,I))}function Ie(I){return 1-(1-I)**3}function we(I){return I<.5?4*I*I*I:1-(-2*I+2)**3/2}function Oe(I,N,Z){return I+(N-I)*Z}function ve(I,N,Z){return it((I-N)/Z,0,1)}function ft(I,N,Z,J,ce=1){if(!N)return;const ue=N.naturalWidth||N.width,ne=N.naturalHeight||N.height;if(!ue||!ne)return;const K=Math.max(Z/ue,J/ne)*ce,ae=ue*K,Q=ne*K,Ce=(Z-ae)/2,de=(J-Q)/2;I.drawImage(N,Ce,de,ae,Q)}function Be(I,N=1,Z=0){const J=a*.5,ce=Math.hypot(l,a),ue=Math.min(l,a)*.08;I.save(),I.lineWidth=Math.max(1*p,Math.min(l,a)*.0038),I.strokeStyle="rgba(255, 255, 255, 0.9)";for(let ne=0;ne<F;ne+=1){const K=Z-H-ne*A,ae=it(K/te,0,1);ae<=0||ae>=1||(I.globalAlpha=(1-ae)**1.45*.2*N,I.beginPath(),I.arc(l/2,J,ue+ae*(ce-ue),0,Math.PI*2),I.stroke())}I.restore()}const _e=_?so(_):null,ot=(_e==null?void 0:_e.width)||1,nt=(_e==null?void 0:_e.height)||1,Ne=_e?Math.min(l*.56/ot,a*.15/nt):1,De=ot*Ne,be=nt*Ne,rt=(l-De)/2,le=a*.12,yt=_e?lo(_e):[],Re=(yt.length?yt:[]).map((I,N,Z)=>{const J=I.width*Ne,ce=I.height*Ne,ue=rt+I.x*Ne,ne=le,K=N<Math.ceil(Z.length/2);return{canvas:I.canvas,targetX:ue,targetY:ne,targetWidth:J,targetHeight:ce,startX:K?-J-Math.random()*l*.14-N*J*.16:l+Math.random()*l*.14+(Z.length-N)*J*.16,startY:ne+(Math.random()-.5)*ce*.45,driftX:(Math.random()-.5)*J*.12,driftY:(Math.random()-.5)*ce*.08,enterArc:(Math.random()-.5)*ce*.28,delay:N*.055,alpha:.78+Math.random()*.16}}),Fe={startX:l*.5-De*.45,startY:le+a*.04,targetX:rt,targetY:le},Ge=document.createElement("canvas");Ge.width=l,Ge.height=a;const R=Ge.getContext("2d");if(!R)return;const He=performance.now();function st(I){if(i!==Ue)return;const N=I-He,Z=Ie(ve(N,0,b)),J=we(ve(N,b*.56,j)),ce=we(ve(N,b+j*.15,oe)),ue=we(ve(N,T,j+oe)),ne=we(ve(N,M,j+oe)),K=we(ve(N,Je,z)),ae=we(ve(N,H,he-H)),Q=we(ve(N,$e,he-$e)),Ce=Math.max(0,1-K**1.24),de=we(ve(Q,.12,.88)),ge=Ce*(1-de*.68),lt=Math.min(.42,de*.42);if(t==null||t.style.setProperty("--opening-underlay-opacity",String(lt)),R.clearRect(0,0,l,a),g)ft(R,g,l,a,1+K*.04);else{const X=R.createLinearGradient(0,0,0,a);X.addColorStop(0,"#5f7894"),X.addColorStop(.58,"#8d7d73"),X.addColorStop(1,"#182011"),R.fillStyle=X,R.fillRect(0,0,l,a)}R.fillStyle="rgba(8, 12, 18, 0.2)",R.fillRect(0,0,l,a);const ke=R.createLinearGradient(0,0,0,a);if(ke.addColorStop(0,"rgba(10, 16, 24, 0.28)"),ke.addColorStop(.34,"rgba(10, 16, 24, 0.04)"),ke.addColorStop(.72,"rgba(10, 16, 24, 0.08)"),ke.addColorStop(1,"rgba(3, 4, 7, 0.42)"),R.fillStyle=ke,R.fillRect(0,0,l,a),Re.length)Re.forEach((X,Te)=>{const Xe=it((Z-X.delay)/(1-X.delay),0,1);if(Xe<=.001)return;const Me=Ie(Xe),vt=(1-Me)*X.enterArc,_t=Math.sin(N*.0017+Te*.9)*X.targetWidth*.014*J,St=Math.cos(N*.0013+Te*1.1)*X.targetHeight*.012*J,r=Oe(X.startX,X.targetX,Me)+X.driftX*(1-Me)+_t,s=Oe(X.startY,X.targetY,Me)+Math.sin(Me*Math.PI+Te*.35)*vt+X.driftY*(1-Me)+St,m=Math.min(1,.18+Me*X.alpha+J*.22+ce*.1)*Ce;m<=.02||(R.save(),R.globalAlpha=m,R.drawImage(X.canvas,r,s,X.targetWidth,X.targetHeight),R.restore())});else if(_){const X=Ie(Z),Te=Oe(Fe.startX,Fe.targetX,X),Xe=Oe(Fe.startY,Fe.targetY,X);R.save(),R.globalAlpha=(.22+X*.78)*Ce,R.drawImage(_,Te,Xe,De,be),R.restore()}const Et=Math.min(.96,ue*.92+ce*.08)*Math.max(0,1-K*.88),re=(1-ue)*E*.85;R.save(),R.globalAlpha=Et,R.font=`400 ${E}px ${C}`,R.textAlign="center",R.textBaseline="middle",R.fillStyle=P,R.shadowColor="rgba(0, 0, 0, 0.22)",R.shadowBlur=16*p;const V=le+be+a*.075+re;gt.forEach((X,Te)=>{R.fillText(X,l/2,V+Te*k)});const me=Math.min(.96,ne*.92+ce*.08)*Math.max(0,1-K*.88),Ve=(1-ne)*O*.85,At=V+gt.length*k+O*1.15+Ve;if(R.globalAlpha=me,R.font=`400 ${O}px ${C}`,Ia(R,Ct,{x:l/2,y:At,maxWidth:De*.96,lineHeight:D,maxLines:6}),ae>.001){const X=Math.max(0,1-ae**1.12);Be(R,X,N)}R.restore(),d.clearRect(0,0,l,a);const ct=o?0:Math.min(l,a)*.015*K,bt=Math.sin(N*.028+K*8.5)*ct,xt=Math.cos(N*.023+K*6.8)*ct*.65,wt=o?0:Math.sin(N*.0054)*.009*K,dt=1+K*.038;if(d.save(),d.globalAlpha=ge,d.filter=o?"none":`blur(${K*14}px)`,d.translate(l/2+bt,a/2+xt),d.rotate(wt),d.scale(dt,dt),d.drawImage(Ge,-l/2,-a/2,l,a),d.restore(),N<It){requestAnimationFrame(st);return}i===Ue&&(t==null||t.style.setProperty("--opening-underlay-opacity","0"),La())}requestAnimationFrame(st)}function po(){const e=(i,o,n)=>Math.min(n,Math.max(o,i));[{element:document.querySelector('[data-side-wheel="main"]'),getItems:()=>Array.from(document.querySelectorAll('[data-side-wheel="main"] [data-side-nav-screen]')),getActiveKey:()=>["timeline","search","compose","profile"].includes(c.screen)?c.screen:c.postReturnScreen||"timeline",applySelection:i=>{if(c.screen===i){se();return}Lt(i)}},{element:document.querySelector('[data-side-wheel="timeline"]'),getItems:()=>Array.from(document.querySelectorAll('[data-side-wheel="timeline"] [data-side-nav-tab]')),getActiveKey:()=>c.timelineTab||"recommended",applySelection:i=>{c.timelineTab=i,se()}},{element:document.querySelector('[data-side-wheel="profile"]'),getItems:()=>Array.from(document.querySelectorAll('[data-side-wheel="profile"] [data-side-nav-profile-section]')),getActiveKey:()=>c.profileSection||"identity",applySelection:i=>{c.profileSection=i,c.profileSection==="library"&&(c.profileLibraryTab=c.profileLibraryTab||"liked"),se()}}].filter(i=>i.element).forEach(i=>{const{element:o,getItems:n,applySelection:h,getActiveKey:p}=i,l=n();if(!l.length)return;const a=l.map((T,M)=>({button:T,key:T.dataset.sideNavScreen||T.dataset.sideNavTab||T.dataset.sideNavProfileSection,index:M})),d=Math.max(0,a.findIndex(T=>T.key===p()));let g=!1,_=d,P=0,C=0,E=0,k=null;const O=T=>{var te;const M=(te=a[_])==null?void 0:te.button.getBoundingClientRect(),H=((M==null?void 0:M.height)||0)/2,F=H,A=window.innerHeight-H;return A<=F?0:e(T,F-window.innerHeight/2,A-window.innerHeight/2)},D=(T,M)=>{const H=o.classList.contains("side-wheel--left")?76:24,F=a.length<=2?88:76;o.style.setProperty("--wheel-offset-y",`${P}px`),o.classList.toggle("is-dragging",!!(k!=null&&k.moved)),a.forEach(A=>{const te=(A.index-T)*F,he=M||A.index===T?1:0,$e=M?A.index===T?1:.9:1,Je=!M&&A.index===T?C:0;A.button.style.setProperty("--slot-x",`${H}%`),A.button.style.setProperty("--slot-y",`${te}px`),A.button.style.setProperty("--slot-scale",String($e)),A.button.style.setProperty("--slot-opacity",String(he)),A.button.style.setProperty("--slot-depth",String(Math.abs(A.index-T))),A.button.style.setProperty("--drag-x",`${Je}px`),A.button.style.setProperty("--drag-y","0px"),A.button.classList.toggle("is-active",A.index===T),A.button.classList.toggle("is-dragging",!!(k!=null&&k.moved)&&A.index===T)})},b=T=>{var A;if(!k||(T==null?void 0:T.pointerId)!=null&&k.pointerId!==T.pointerId)return;const{button:M,pointerId:H,moved:F}=k;(A=M.hasPointerCapture)!=null&&A.call(M,H)&&M.releasePointerCapture(H),k=null,F&&(E=Date.now()+220),D(_,g)},j=T=>{if(!k||k.pointerId!==T.pointerId)return;const M=T.clientX-k.startX,H=T.clientY-k.startY;if(!(!k.moved&&Math.hypot(M,H)<8)){if(k.moved=!0,P=O(k.startWheelOffsetY+H),k.mode==="collapsed"){const F=k.halfWidth,A=window.innerWidth-k.halfWidth;C=e(k.startCenterX+M,F,A)-k.anchorCenterX}else C=0;D(_,g)}};D(d,!1);const oe=()=>{g=!0,o.classList.add("is-engaged"),C=0,D(_,!0)},ye=()=>{g=!1,o.classList.remove("is-engaged"),D(_,!1)},z=(T=_)=>{_=T;const M=a[_];if(!M){ye();return}h(M.key)};l.forEach(T=>{T.addEventListener("pointerdown",M=>{if(Number(T.dataset.sideIndex||0)!==_)return;const F=T.getBoundingClientRect();k={pointerId:M.pointerId,button:T,mode:g?"engaged":"collapsed",startX:M.clientX,startY:M.clientY,startCenterX:F.left+F.width/2,anchorCenterX:F.left+F.width/2-C,halfWidth:F.width/2,startWheelOffsetY:P,moved:!1},T.setPointerCapture(M.pointerId)}),T.addEventListener("pointermove",j),T.addEventListener("pointerup",b),T.addEventListener("pointercancel",b),T.addEventListener("lostpointercapture",b),T.addEventListener("click",M=>{if(Date.now()<E){M.preventDefault(),M.stopPropagation();return}M.preventDefault();const H=Number(T.dataset.sideIndex||0);if(!g){if(H!==_)return;oe();return}if(H===_){ye();return}z(H)})})})}function Pt(e=document){e.querySelectorAll("[data-toggle-tags]").forEach(t=>{t.addEventListener("click",()=>{const i=document.querySelector(`[data-tags-panel="${t.dataset.toggleTags}"]`);i&&(i.hidden=!i.hidden,t.classList.toggle("is-active",!i.hidden))})}),e.querySelectorAll("[data-like]").forEach(t=>{t.addEventListener("click",()=>{Ja(t.dataset.like),pe()})}),e.querySelectorAll("[data-save]").forEach(t=>{t.addEventListener("click",()=>{Ga(t.dataset.save),pe()})}),e.querySelectorAll("[data-comment]").forEach(t=>{t.addEventListener("click",()=>{c.commentPostId=t.dataset.comment,pt()})}),e.querySelectorAll("[data-open-preview]").forEach(t=>{t.addEventListener("click",i=>{if(Date.now()<c.openingTapGuardUntil){i.preventDefault(),i.stopPropagation();return}const o=t.dataset.openPreview;Qa(o),no(o)})}),e.querySelectorAll("[data-open-author]").forEach(t=>{t.addEventListener("click",()=>{io(t.dataset.openAuthor)})})}function ho(){const e=document.querySelector(".orbit-home"),t=()=>{e&&(e.classList.remove("orbit-home--default","orbit-home--collapsing","orbit-home--sheep"),e.classList.add(`orbit-home--${c.homeCoreState}`))};document.querySelectorAll("[data-home-theme-toggle]").forEach(i=>{i.addEventListener("click",()=>{const o=Wt.indexOf(c.homeTheme);c.homeTheme=Wt[(o+1)%Wt.length],se()})}),document.querySelectorAll("[data-home-core-toggle]").forEach(i=>{i.addEventListener("click",()=>{if(c.homeCoreState!=="default")return;const o=Date.now();c.homeCoreTapTimestamps=[...c.homeCoreTapTimestamps.filter(n=>o-n<900),o],!(c.homeCoreTapTimestamps.length<3)&&(c.homeCoreTapTimestamps=[],c.homeCoreState="collapsing",t(),$a(),Mt=window.setTimeout(()=>{c.homeCoreState="sheep",t()},620))})}),document.querySelectorAll("[data-home-sheep-toggle]").forEach(i=>{i.addEventListener("click",()=>{c.homeCoreState==="sheep"&&(ka(),t())})})}function uo(){var i,o;Pt(document.getElementById("screenArea"));const e=document.querySelector("[data-timeline-pan-viewport]"),t=document.querySelector("[data-timeline-pan-surface]");if(e&&t){const n=(a,d)=>{const g=Math.min(0,e.clientWidth-t.scrollWidth),_=Math.min(0,e.clientHeight-t.scrollHeight);return{x:Math.max(g,Math.min(0,a)),y:Math.max(_,Math.min(0,d))}},h=(a,d)=>{const g=n(a,d);c.timelinePan=g,t.style.transform=`translate(${g.x}px, ${g.y}px)`};h(((i=c.timelinePan)==null?void 0:i.x)??-360,((o=c.timelinePan)==null?void 0:o.y)??-220);let p=null;t.addEventListener("pointerdown",a=>{var d,g,_;p={pointerId:a.pointerId,startX:a.clientX,startY:a.clientY,originX:((d=c.timelinePan)==null?void 0:d.x)??-360,originY:((g=c.timelinePan)==null?void 0:g.y)??-220,moved:!1},e.classList.add("is-dragging"),(_=t.setPointerCapture)==null||_.call(t,a.pointerId)}),t.addEventListener("pointermove",a=>{if(!p||p.pointerId!==a.pointerId)return;const d=a.clientX-p.startX,g=a.clientY-p.startY;(Math.abs(d)>4||Math.abs(g)>4)&&(p.moved=!0,a.preventDefault()),h(p.originX+d,p.originY+g)});const l=a=>{var d;!p||p.pointerId!==a.pointerId||(e.classList.remove("is-dragging"),p.moved&&(c.openingTapGuardUntil=Date.now()+180),p=null,(d=t.releasePointerCapture)==null||d.call(t,a.pointerId))};t.addEventListener("pointerup",l),t.addEventListener("pointercancel",l)}document.querySelectorAll("[data-timeline-tab]").forEach(n=>{n.addEventListener("click",()=>{c.timelineTab=n.dataset.timelineTab||"recommended",pe()})})}function go(){Pt(document.getElementById("screenArea"));const e=document.getElementById("searchInput");e&&e.addEventListener("input",t=>{c.searchQuery=t.target.value;const i=t.target.selectionStart;pe();const o=document.getElementById("searchInput");o&&(o.focus(),o.setSelectionRange(i,i))}),document.querySelectorAll("[data-search-tag]").forEach(t=>{t.addEventListener("click",()=>{const i=t.dataset.searchTag;c.searchTags=c.searchTags.includes(i)?c.searchTags.filter(o=>o!==i):[...c.searchTags,i],pe()})})}function fo(){document.querySelectorAll("[data-home-nav]").forEach(e=>{e.addEventListener("click",()=>{Lt(e.dataset.homeNav)})}),document.querySelectorAll("[data-close-profile]").forEach(e=>{e.addEventListener("click",()=>{oo()})}),document.querySelectorAll("[data-close-compose]").forEach(e=>{e.addEventListener("click",()=>{ro()})})}function la(e){var t,i;return e.templateId==="page8"&&Array.isArray((t=e.customLayout)==null?void 0:t.pretextBoxes)?e.customLayout.pretextBoxes.filter(o=>o.kind==="title"||o.kind==="body").map(o=>{var n;return String(((n=o.data)==null?void 0:n.text)||"").trim()}).filter(Boolean).join(" / ").slice(0,120):e.templateId==="page8"&&Array.isArray((i=e.customLayout)==null?void 0:i.textBoxes)?e.customLayout.textBoxes.map(o=>String(o.text||"").trim()).filter(Boolean).join(" / ").slice(0,120):[e.headline,e.subhead,e.intro,e.body].map(o=>o.trim()).filter(Boolean).join(" / ").slice(0,120)}function Ia(e,t,i){const{x:o,y:n,maxWidth:h,lineHeight:p,maxLines:l}=i,a=[];String(t||"").split(`
`).forEach(g=>{const _=/\s/.test(g.trim()),P=_?g.split(/\s+/).filter(Boolean):Array.from(g),C=_?" ":"";if(!P.length){a.push("");return}let E="";P.forEach(k=>{const O=E?`${E}${C}${k}`:k;if(e.measureText(O).width<=h||!E){E=O;return}a.push(E),E=k}),E&&a.push(E)}),a.slice(0,l).forEach((g,_)=>{e.fillText(g,o,n+_*p)})}function Vt(e,t,i,o,n,h){e.beginPath(),e.moveTo(t+h,i),e.arcTo(t+o,i,t+o,i+n,h),e.arcTo(t+o,i+n,t,i+n,h),e.arcTo(t,i+n,t,i,h),e.arcTo(t,i,t+o,i,h),e.closePath()}async function yo(e,t,i,o={x:.5,y:.5}){var k;if(!t)return;const n=typeof t=="string"?await new Promise((O,D)=>{const b=new Image;b.onload=()=>O(b),b.onerror=D,b.src=t}):await createImageBitmap(t),h=n.width/n.height,p=i.width/i.height;let l=0,a=0,d=n.width,g=n.height;const _=Math.max(1,Number(o==null?void 0:o.zoom)||1),P=Number.isFinite(o==null?void 0:o.cropX)||Number.isFinite(o==null?void 0:o.cropY);let C=Math.min(1,Math.max(0,o.x??.5)),E=Math.min(1,Math.max(0,o.y??.5));if(P){const O=h>p?i.height*h:i.width,D=h>p?i.height:i.width/h,b=Math.max(0,O*_-i.width),j=Math.max(0,D*_-i.height);C=b?Math.min(1,Math.max(0,.5-(Number(o==null?void 0:o.cropX)||0)/b)):.5,E=j?Math.min(1,Math.max(0,.5-(Number(o==null?void 0:o.cropY)||0)/j)):.5}h>p?(d=Math.max(1,n.height*p/_),l=(n.width-d)*C):(g=Math.max(1,n.width/p/_),a=(n.height-g)*E),e.save(),Vt(e,i.x,i.y,i.width,i.height,i.radius),e.clip(),e.drawImage(n,l,a,d,g,i.x,i.y,i.width,i.height),e.restore(),(k=n.close)==null||k.call(n)}function bo(e,t){e.save(),e.lineWidth=4,e.strokeStyle="rgba(34, 28, 25, 0.88)",Vt(e,t.x,t.y,t.width,t.height,t.radius),e.stroke();const i=Math.min(t.width,t.height)*.18,o=t.x+t.width/2,n=t.y+t.height/2;e.beginPath(),e.arc(o,n,i,0,Math.PI*2),e.stroke(),e.beginPath(),e.moveTo(o-i*.42,n),e.lineTo(o+i*.42,n),e.moveTo(o,n-i*.42),e.lineTo(o,n+i*.42),e.stroke(),e.restore()}async function xo(e,t,i={}){const p=document.createElement("canvas");p.width=2480,p.height=3508;const l=p.getContext("2d");if(!l)return"";const a=2480/1240;return l.imageSmoothingEnabled=!0,l.imageSmoothingQuality="high",l.fillStyle=e.backgroundColor||"#f8f4ee",l.fillRect(0,0,2480,3508),l.scale(a,a),await Ei(e.templateId).render(l,e,t,{addWrappedText:Ia,clipRoundedRect:Vt,drawFileCover:yo,drawSlotPlaceholder:bo,defaults:qe,page8Files:i.page8Files||{}}),p.toDataURL("image/png")}function wo(){var ct,bt,xt,wt,dt,X,Te,Xe,Me,vt,_t,St;const e=document.querySelector(".page--compose");if(!e)return;const t=e.dataset.composeStage||"select",i=document.getElementById("composeForm"),o=i||e,n=document.getElementById("composeSheet"),h=(n==null?void 0:n.querySelector(".compose-sheet__frame"))||null,p=(n==null?void 0:n.querySelector("[data-custom-canvas]"))||null,l=c.composeWorkingDraft||((ct=et(c.composeEditingPostId))==null?void 0:ct.composeData)||null,a={...qe,...l||{}},d={imageInputPrimary:typeof((xt=(bt=l==null?void 0:l.standardFiles)==null?void 0:bt.primary)==null?void 0:xt.file)=="string"?l.standardFiles.primary.file:"",imageInputSecondary:typeof((dt=(wt=l==null?void 0:l.standardFiles)==null?void 0:wt.secondary)==null?void 0:dt.file)=="string"?l.standardFiles.secondary.file:"",imageInputAccent:typeof((Te=(X=l==null?void 0:l.standardFiles)==null?void 0:X.accent)==null?void 0:Te.file)=="string"?l.standardFiles.accent.file:""},g={primary:Ae((Xe=l==null?void 0:l.standardFiles)==null?void 0:Xe.primary),secondary:Ae((Me=l==null?void 0:l.standardFiles)==null?void 0:Me.secondary),accent:Ae((vt=l==null?void 0:l.standardFiles)==null?void 0:vt.accent)},_=document.querySelector("[data-toggle-compose-tags]"),P=document.querySelector("[data-compose-tags]"),C=document.querySelector("[data-toggle-compose-preview]"),E=document.querySelector("[data-custom-template-controls]"),k=document.querySelector("[data-custom-inspector]"),O=document.querySelector("[data-compose-pretext-host]"),D=Array.from(document.querySelectorAll("[data-editable]")),b={options:fa((l==null?void 0:l.customLayout)||{}),imageBoxes:Xt((l==null?void 0:l.customLayout)||{}),textBoxes:Yt((l==null?void 0:l.customLayout)||{},a),selectedId:null,imageMode:"frame"},j={},oe={headline:document.querySelector('[data-editable="headline"]'),subhead:document.querySelector('[data-editable="subhead"]'),intro:document.querySelector('[data-editable="intro"]'),body:document.querySelector('[data-editable="body"]'),date:document.querySelector('[data-editable="date"]'),editor:document.querySelector('[data-editable="editor"]')},ye={primary:document.querySelector('[data-slot="imageInputPrimary"]'),secondary:document.querySelector('[data-slot="imageInputSecondary"]'),accent:document.querySelector('[data-slot="imageInputAccent"]')};function z(){return{primary:Ae(g.primary),secondary:Ae(g.secondary),accent:Ae(g.accent)}}function T(r={}){const s=Sa({...c.composeWorkingDraft||l||{},...r});return c.composeWorkingDraft=s,c.composeTemplateId=s.templateId,c.composeBackgroundColor=s.backgroundColor,s}function M(r={}){var $;const{customLayoutOverride:s}=r,m=o.querySelector('input[name="templateId"]:checked'),w=o.querySelector('input[name="backgroundColor"]:checked'),L=String((m==null?void 0:m.value)||(n==null?void 0:n.dataset.template)||c.composeTemplateId||(l==null?void 0:l.templateId)||Le),u=String((w==null?void 0:w.value)||c.composeBackgroundColor||(l==null?void 0:l.backgroundColor)||"#f8f4ee"),f=T({templateId:L,backgroundColor:u,standardFiles:z()}),S=i?new FormData(i):null,x=S?S.getAll("fixedTags").map(y=>String(y)):f.fixedTags,v=S?String(S.get("freeTags")||"").split(",").map(y=>y.trim()).filter(Boolean):f.freeTags;if(L==="page8"){const y=s||(($=ee==null?void 0:ee.getSerializedLayout)==null?void 0:$.call(ee))||f.customLayout;return T({fixedTags:x,freeTags:v,customLayout:y})}return T({fixedTags:x,freeTags:v,headline:Be("headline")||f.headline,subhead:Be("subhead")||f.subhead,intro:Be("intro")||f.intro,body:Be("body")||f.body,date:Be("date")||f.date,editor:Be("editor")||f.editor,customLayout:s??null})}const H=r=>{M(),c.composeStage=r,se()};function F(r){return new Promise(s=>{const m=new Image,w=typeof r=="string"?r:URL.createObjectURL(r);m.onload=()=>{s({width:m.naturalWidth,height:m.naturalHeight}),typeof r!="string"&&URL.revokeObjectURL(w)},m.onerror=()=>{s(null),typeof r!="string"&&URL.revokeObjectURL(w)},m.src=w})}function A(r){const s=document.querySelector(`[data-slot-image="${r}"]`),w=g[r==="imageInputPrimary"?"primary":r==="imageInputSecondary"?"secondary":"accent"];s&&(s.style.backgroundPosition=`${(w.position.x||.5)*100}% ${(w.position.y||.5)*100}%`)}function te(r){return String(r??"").replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#39;")}function he(r){return`${r}-${Date.now().toString(36)}-${Math.random().toString(36).slice(2,7)}`}function $e(r){return j[r]||(j[r]={file:null,position:{x:.5,y:.5,zoom:1},imageSize:null,previewUrl:""}),j[r]}function Je(r){return r==="title"?{kind:"title",fontSize:.046,lineHeight:1.12,padding:.01,family:"serif",weight:600,align:"left"}:{kind:"body",fontSize:.026,lineHeight:1.45,padding:.012,family:"sans",weight:500,align:"left"}}function It(r,s){Object.assign(r,{...r,...Je(s)})}function gt(r="left"){const s=R({id:he("text"),kind:"body",text:"text",isDefaultText:!0,x:.18,y:.2,width:.28,height:.12,fontSize:.026,lineHeight:1.45,padding:.012,align:r,family:"sans",weight:500},[...b.imageBoxes.map(m=>le(m)),...b.textBoxes.map(m=>le(m))]);b.textBoxes=[...b.textBoxes,be(s,je)],b.selectedId=s.id,Q()}function Ct(r){if(r.dataset.singleLine==="true"){r.innerText=r.innerText.replace(/\r?\n+/g," ");return}r.innerHTML=r.innerHTML.replace(/<div><br><\/div>/gi,"<br>").replace(/<div>/gi,"<br>").replace(/<\/div>/gi,"").replace(/&nbsp;/gi," ")}function it(r){const s=Number(r.dataset.maxChars||0),m=r.innerText.replace(/\r/g,"");if(r.dataset.previousValue||(r.dataset.previousValue=m),s&&m.length>s||r.scrollHeight>r.clientHeight+1||r.scrollWidth>r.clientWidth+1){r.innerText=r.dataset.previousValue;return}r.dataset.previousValue=m.trim()?m:""}function Ie(r){return r.innerText.replace(/\r/g,"")}function we(r){const s=window.getSelection();if(!s)return;const m=document.createRange();m.selectNodeContents(r),m.collapse(!1),s.removeAllRanges(),s.addRange(m)}function Oe(r){const s=window.getSelection();if(!s||s.rangeCount===0)return 0;const m=s.getRangeAt(0);return!r.contains(m.startContainer)||!r.contains(m.endContainer)?0:s.toString().length}function ve(r,s){const m=window.getSelection();if(!m||m.rangeCount===0){r.append(document.createTextNode(s)),we(r);return}const w=m.getRangeAt(0);w.deleteContents();const L=document.createTextNode(s);w.insertNode(L),w.setStartAfter(L),w.collapse(!0),m.removeAllRanges(),m.addRange(w)}function ft(r){!e||!C||(e.classList.toggle("is-preview-mode",r),C.textContent=r?"back":"preview",C.setAttribute("aria-pressed",String(r)),D.forEach(s=>{s.setAttribute("contenteditable",r?"false":"true"),r&&s.blur()}),(n==null?void 0:n.dataset.template)==="page8"&&Q())}function Be(r){const s=document.querySelector(`[data-editable="${r}"]`);return s?s.innerText.replace(/\r/g,"").trim():""}function _e(){const r=o.querySelector('input[name="backgroundColor"]:checked'),s=(r==null?void 0:r.value)||c.composeBackgroundColor||"#f8f4ee";if(c.composeBackgroundColor=s,T({backgroundColor:s}),!n){o.querySelectorAll(".color-chip").forEach(m=>{const w=m.querySelector('input[name="backgroundColor"]');m.classList.toggle("is-active",!!(w!=null&&w.checked))});return}n.style.setProperty("--sheet-bg",s),o.querySelectorAll(".color-chip").forEach(m=>{const w=m.querySelector('input[name="backgroundColor"]');m.classList.toggle("is-active",!!(w!=null&&w.checked))})}function ot(r){const s=r||Le,m=(n==null?void 0:n.dataset.template)||(O?"page8":null),w=t==="edit"&&m&&m!==s&&(m==="page8"||s==="page8");if(c.composeTemplateId=s,T({templateId:s}),w){se();return}if(!n){o.querySelectorAll(".template-thumb").forEach(u=>{const f=u.querySelector('input[name="templateId"]');u.classList.toggle("is-active",(f==null?void 0:f.value)===s)}),O&&s!=="page8"&&se();return}n.dataset.template=s,o.querySelectorAll(".template-thumb").forEach(u=>{const f=u.querySelector('input[name="templateId"]');u.classList.toggle("is-active",(f==null?void 0:f.value)===s)});const L=s==="page8";E&&(E.hidden=!0),n.classList.toggle("compose-sheet--custom",L),Ce()}function nt(r){var m;const s=o.querySelector(`input[name="templateId"][value="${r}"]`);(m=s==null?void 0:s.closest(".template-thumb"))==null||m.scrollIntoView({behavior:"smooth",block:"nearest",inline:"center"})}function Ne(r){var m;const s=o.querySelector(`input[name="backgroundColor"][value="${r}"]`);(m=s==null?void 0:s.closest(".color-chip"))==null||m.scrollIntoView({behavior:"smooth",block:"nearest",inline:"center"})}function De(r){const s=document.querySelector(`[data-slot-image="${r}"]`),m=document.querySelector(`[data-slot-placeholder="${r}"]`),w=document.querySelector(`[data-slot-remove="${r}"]`);if(!(!s||!m||!w)){if(d[r]){s.style.backgroundImage=`url("${d[r]}")`,s.hidden=!1,m.hidden=!0,w.hidden=!1;return}s.style.backgroundImage="",s.hidden=!0,m.hidden=!1,w.hidden=!0}}function be(r,s){const m=Math.min(q.width,Math.max(s.width,r.width)),w=Math.min(q.height,Math.max(s.height,r.height));return{...r,x:Math.min(q.x+q.width-m,Math.max(q.x,We(r.x))),y:Math.min(q.y+q.height-w,Math.max(q.y,We(r.y))),width:We(m),height:We(w)}}function rt(r,s,m=.02){return!(r.x+r.width+m<=s.x||s.x+s.width+m<=r.x||r.y+r.height+m<=s.y||s.y+s.height+m<=r.y)}function le(r){return{x:r.x,y:r.y,width:r.width,height:r.height}}function yt(r,s={}){const{ignoreText:m=!1,ignoreImages:w=!1}=s;return[...w?[]:b.imageBoxes.filter(L=>L.id!==r).map(L=>le(L)),...m?[]:b.textBoxes.filter(L=>L.id!==r).map(L=>le(L))]}function Re(r,s,m={}){const w=le(r);return!yt(s,m).some(u=>rt(w,u))}function Fe(r,s,m,w={}){const L=be({...r},m);if(Re(L,s,w))return L;const u=[[0,-1],[1,0],[0,1],[-1,0],[1,-1],[1,1],[-1,1],[-1,-1]],f=Ke*2;for(let S=1;S<=18;S+=1)for(const[x,v]of u){const $=be({...L,x:L.x+x*f*S,y:L.y+v*f*S},m);if(Re($,s,w))return $}for(let S=q.y;S<=q.y+q.height-L.height;S+=f)for(let x=q.x;x<=q.x+q.width-L.width;x+=f){const v=be({...L,x,y:S},m);if(Re(v,s,w))return v}return L}function Ge(r,s,m=.018){const w=r.y-m,L=r.y+r.height+m,u=q.x,f=q.x+q.width;let S=[{left:u,right:f}];return s.forEach(x=>{const v=x.y-m;if(x.y+x.height+m<=w||v>=L)return;const y=Math.max(u,x.x-m),W=Math.min(f,x.x+x.width+m);S=S.flatMap(G=>{if(W<=G.left||y>=G.right)return[G];const U=[];return y>G.left&&U.push({left:G.left,right:y}),W<G.right&&U.push({left:W,right:G.right}),U})}),S.filter(x=>x.right-x.left>=r.width)}function R(r,s){const m=be({...r},je),w=[];for(let f=0;f<=24;f+=1){const S=We(m.y-f*Ke),x=We(m.y+f*Ke);S>=q.y&&w.push(S),x<=q.y+q.height-m.height&&x!==S&&w.push(x)}let L=m,u=Number.POSITIVE_INFINITY;return w.forEach(f=>{const S={...m,y:f};Ge(S,s).forEach(v=>{const $=v.left,y=v.right-m.width,W=We(Math.min(y,Math.max($,m.x))),G=be({...m,x:W,y:f},je);if(s.some(Se=>rt(le(G),Se)))return;const U=Math.abs(G.x-m.x),xe=Math.abs(G.y-m.y)*2+U;xe<u&&(u=xe,L=G)})}),L}function He(r){const s=I(r);!s||s.type!=="image"||(b.textBoxes=b.textBoxes.map(m=>{const w=[...b.imageBoxes.filter(L=>L.id!==m.id).map(L=>le(L)),...b.textBoxes.filter(L=>L.id!==m.id).map(L=>le(L))];return R(m,w)}))}function st(r){return[...b.imageBoxes.filter(s=>s.id!==r).map(s=>le(s)),...b.textBoxes.filter(s=>s.id!==r).map(s=>le(s))]}function I(r){const s=b.imageBoxes.findIndex(w=>w.id===r);if(s>=0)return{type:"image",collection:b.imageBoxes,index:s,item:b.imageBoxes[s]};const m=b.textBoxes.findIndex(w=>w.id===r);return m>=0?{type:"text",collection:b.textBoxes,index:m,item:b.textBoxes[m]}:null}function N(r){return r==="image"?Ot:je}function Z(r){return`${Math.round(r*100)}%`}function J(r,s={}){const{rerender:m=!1}=s;if(!h||!p)return;const w=r?I(r):null;if(!w||w.type!=="text")return;const L=p.querySelector(`[data-custom-text="${r}"]`);if(!L)return;const u=h.getBoundingClientRect();if(!u.height)return;const f=Math.max(je.height,We((L.scrollHeight+8)/u.height));if(!(Math.abs(f-w.item.height)<Ke/2)){if(w.item.height=f,Object.assign(w.item,be(w.item,je)),Object.assign(w.item,R(w.item,st(r))),m){Q();return}ue(r,w.item),ae()}}function ce(){p&&p.querySelectorAll("[data-custom-item]").forEach(r=>{r.classList.toggle("is-selected",r.dataset.customItem===b.selectedId)})}function ue(r,s){const m=p==null?void 0:p.querySelector(`[data-custom-item="${r}"]`);if(!m)return;const w=Dt(s);m.style.left=w.left,m.style.top=w.top,m.style.width=w.width,m.style.height=w.height}function ne(){[...b.imageBoxes,...b.textBoxes].forEach(r=>{ue(r.id,r)})}function K(r,s={}){const{rerender:m=!1}=s;if(b.selectedId=r,m&&(n==null?void 0:n.dataset.template)==="page8"){Q();return}ce(),ae()}function ae(){var s,m,w,L,u,f,S,x;if(!k||(n==null?void 0:n.dataset.template)!=="page8")return;const r=b.selectedId?I(b.selectedId):null;if(!r){k.innerHTML=`
        <p class="compose-custom-inspector__title">Selection</p>
        <p class="compose-custom-inspector__note">ボックスを選ぶと、ここで内容や見た目を調整できます。</p>
      `;return}if(r.type==="image"){const v=$e(r.item.id),$=!!(v.previewUrl||v.file),y=Math.max(1,Number((s=v.position)==null?void 0:s.zoom)||1);k.innerHTML=`
        <p class="compose-custom-inspector__title">Image Box</p>
        <p class="compose-custom-inspector__note">${b.imageMode==="crop"?"Crop 中は画像面をドラッグして見せ方を調整します。":"Frame 中はボックス自体を動かします。Crop に切り替えると画像だけを動かせます。"}</p>
        <div class="compose-custom-inspector__meta">
          <span>W ${Z(r.item.width)}</span>
          <span>H ${Z(r.item.height)}</span>
        </div>
        <div class="compose-custom-inspector__field">
          <span>Mode</span>
          <div class="compose-custom-inspector__segmented compose-custom-inspector__segmented--dual">
            <button type="button" data-custom-image-mode="frame" class="${b.imageMode==="frame"?"is-active":""}">Frame</button>
            <button type="button" data-custom-image-mode="crop" class="${b.imageMode==="crop"?"is-active":""}" ${$?"":"disabled"}>Crop</button>
          </div>
        </div>
        <label class="compose-custom-inspector__field">
          <span>Zoom</span>
          <input class="compose-custom-inspector__range" data-custom-control="zoom" type="range" min="1" max="3" step="0.01" value="${y}" ${$?"":"disabled"} />
        </label>
        <div class="compose-custom-inspector__segmented compose-custom-inspector__segmented--dual">
          <button type="button" data-custom-control="replace-image">${$?"Replace":"Upload"}</button>
          <button type="button" data-custom-control="delete">Delete</button>
        </div>
      `,k.querySelectorAll("[data-custom-image-mode]").forEach(W=>{W.addEventListener("click",()=>{W.hasAttribute("disabled")||(b.imageMode=W.dataset.customImageMode==="crop"?"crop":"frame",ae())})}),(m=k.querySelector('[data-custom-control="zoom"]'))==null||m.addEventListener("input",W=>{v.position.zoom=Math.max(1,Number(W.target.value)||1),Q()}),(w=k.querySelector('[data-custom-control="replace-image"]'))==null||w.addEventListener("click",()=>{var W;(W=document.getElementById(`custom-image-${r.item.id}`))==null||W.click()})}else{k.innerHTML=`
      <p class="compose-custom-inspector__title">Text Box</p>
      <p class="compose-custom-inspector__note">Title / Body のプリセットを起点にして、細部は個別調整できます。</p>
      <div class="compose-custom-inspector__meta">
        <span>W ${Z(r.item.width)}</span>
        <span>H ${Z(r.item.height)}</span>
      </div>
      <div class="compose-custom-inspector__field">
        <span>Preset</span>
        <div class="compose-custom-inspector__segmented compose-custom-inspector__segmented--dual">
          <button type="button" data-custom-preset="title" class="${r.item.kind==="title"?"is-active":""}">Title</button>
          <button type="button" data-custom-preset="body" class="${r.item.kind==="body"?"is-active":""}">Body</button>
        </div>
      </div>
      <label class="compose-custom-inspector__field">
        <span>Text</span>
        <textarea class="compose-custom-inspector__textarea" data-custom-control="text">${te(r.item.text)}</textarea>
      </label>
      <label class="compose-custom-inspector__field">
        <span>Size</span>
        <input class="compose-custom-inspector__range" data-custom-control="fontSize" type="range" min="14" max="54" value="${Math.round(r.item.fontSize*520)}" />
      </label>
      <label class="compose-custom-inspector__field">
        <span>Leading</span>
        <input class="compose-custom-inspector__range" data-custom-control="lineHeight" type="range" min="100" max="220" step="1" value="${Math.round(r.item.lineHeight*100)}" />
      </label>
      <label class="compose-custom-inspector__field">
        <span>Padding</span>
        <input class="compose-custom-inspector__range" data-custom-control="padding" type="range" min="4" max="40" step="1" value="${Math.round(r.item.padding*1e3)}" />
      </label>
      <label class="compose-custom-inspector__field">
        <span>Weight</span>
        <input class="compose-custom-inspector__range" data-custom-control="weight" type="range" min="400" max="700" step="100" value="${r.item.weight}" />
      </label>
      <div class="compose-custom-inspector__field">
        <span>Align</span>
        <div class="compose-custom-inspector__segmented compose-custom-inspector__segmented--align">
          <button type="button" data-custom-align="left" class="${r.item.align==="left"?"is-active":""}" aria-label="Align left">${B("alignLeft")}</button>
          <button type="button" data-custom-align="center" class="${r.item.align==="center"?"is-active":""}" aria-label="Align center">${B("alignCenter")}</button>
          <button type="button" data-custom-align="right" class="${r.item.align==="right"?"is-active":""}" aria-label="Align right">${B("alignRight")}</button>
        </div>
      </div>
      <div class="compose-custom-inspector__field">
        <span>Typeface</span>
        <div class="compose-custom-inspector__segmented compose-custom-inspector__segmented--dual">
          <button type="button" data-custom-family="sans" class="${r.item.family==="sans"?"is-active":""}">Sans</button>
          <button type="button" data-custom-family="serif" class="${r.item.family==="serif"?"is-active":""}">Serif</button>
        </div>
      </div>
      <div class="compose-custom-inspector__segmented compose-custom-inspector__segmented--single">
        <button type="button" data-custom-control="delete">Delete</button>
      </div>
    `;const v=k.querySelector('[data-custom-control="text"]');v==null||v.addEventListener("focus",$=>{const y=b.selectedId?I(b.selectedId):null;if(!(!y||y.type!=="text")&&y.item.isDefaultText&&y.item.text.trim().toLowerCase()==="text"){y.item.text="",y.item.isDefaultText=!1,$.target.value="";const W=p==null?void 0:p.querySelector(`[data-custom-text="${y.item.id}"]`);W&&(W.textContent="")}}),v==null||v.addEventListener("input",$=>{const y=b.selectedId?I(b.selectedId):null;if(!y||y.type!=="text")return;y.item.text=$.target.value.replace(/\r/g,""),y.item.isDefaultText=!1;const W=p==null?void 0:p.querySelector(`[data-custom-text="${y.item.id}"]`);W&&W!==document.activeElement&&(W.textContent=y.item.text),J(y.item.id)}),k.querySelectorAll("[data-custom-preset]").forEach($=>{$.addEventListener("click",()=>{const y=b.selectedId?I(b.selectedId):null;!y||y.type!=="text"||(It(y.item,$.dataset.customPreset==="title"?"title":"body"),Q(),J(y.item.id,{rerender:!0}))})}),(L=k.querySelector('[data-custom-control="fontSize"]'))==null||L.addEventListener("input",$=>{const y=b.selectedId?I(b.selectedId):null;!y||y.type!=="text"||(y.item.fontSize=Number($.target.value)/520,Q(),J(y.item.id,{rerender:!0}))}),(u=k.querySelector('[data-custom-control="lineHeight"]'))==null||u.addEventListener("input",$=>{const y=b.selectedId?I(b.selectedId):null;!y||y.type!=="text"||(y.item.lineHeight=Number($.target.value)/100,Q(),J(y.item.id,{rerender:!0}))}),(f=k.querySelector('[data-custom-control="padding"]'))==null||f.addEventListener("input",$=>{const y=b.selectedId?I(b.selectedId):null;!y||y.type!=="text"||(y.item.padding=Number($.target.value)/1e3,Q(),J(y.item.id,{rerender:!0}))}),(S=k.querySelector('[data-custom-control="weight"]'))==null||S.addEventListener("input",$=>{const y=b.selectedId?I(b.selectedId):null;!y||y.type!=="text"||(y.item.weight=Number($.target.value),Q(),J(y.item.id,{rerender:!0}))}),k.querySelectorAll("[data-custom-align]").forEach($=>{$.addEventListener("click",()=>{const y=b.selectedId?I(b.selectedId):null;!y||y.type!=="text"||(y.item.align=$.dataset.customAlign||"left",Q())})}),k.querySelectorAll("[data-custom-family]").forEach($=>{$.addEventListener("click",()=>{const y=b.selectedId?I(b.selectedId):null;!y||y.type!=="text"||(y.item.family=$.dataset.customFamily==="serif"?"serif":"sans",y.item.kind=y.item.family==="serif"?"title":"body",y.item.weight=y.item.family==="serif"?Math.max(500,y.item.weight):Math.min(600,y.item.weight),Q(),J(y.item.id,{rerender:!0}))})})}(x=k.querySelector('[data-custom-control="delete"]'))==null||x.addEventListener("click",()=>{const v=b.selectedId,$=v?I(v):null;if($){if($.collection.splice($.index,1),$.type==="image"){const y=j[v];y!=null&&y.previewUrl&&URL.revokeObjectURL(y.previewUrl),delete j[v],He(v)}b.selectedId=null,Q()}})}function Q(){if(!p||!n)return;const r=n.dataset.template==="page8",s=t==="edit"&&!(e!=null&&e.classList.contains("is-preview-mode"));if(p.hidden=!r,!r){p.innerHTML="",ae();return}const m=[...b.imageBoxes.map(u=>u.id),...b.textBoxes.map(u=>u.id)];(!b.selectedId||!m.includes(b.selectedId))&&(b.selectedId=m[0]||null);const w=b.imageBoxes.map(u=>{const f=Dt(u),S=$e(u.id),x=!!(S.previewUrl||S.file),v=S.position||{x:.5,y:.5,zoom:1},$=`${b.selectedId===u.id?" is-selected":""}${x?"":" is-empty"}`,y=x?`<img class="compose-custom-item__image" src="${S.previewUrl}" alt="" draggable="false" style="object-position:${(v.x||.5)*100}% ${(v.y||.5)*100}%;transform:scale(${Math.max(1,v.zoom||1)});" />`:`<div class="compose-custom-item__placeholder"><span class="compose-custom-item__plus">${B("compose")}</span></div>`;return`
        <div
          class="compose-custom-item compose-custom-item--image${$}"
          data-custom-item="${u.id}"
          data-custom-type="image"
          style="left:${f.left};top:${f.top};width:${f.width};height:${f.height};"
        >
          ${s?`<input class="field__file" id="custom-image-${u.id}" type="file" accept="image/*" />`:""}
          ${s?`<div class="compose-custom-item__surface compose-custom-item__surface--image" data-custom-surface="${u.id}">${y}</div>`:`<div class="compose-custom-item__surface compose-custom-item__surface--image">${y}</div>`}
          ${s?`<button class="compose-custom-item__drag" type="button" data-custom-drag="${u.id}" aria-label="move image box">${B("drag")}</button>`:""}
          ${s?`<button class="compose-custom-item__remove" type="button" data-custom-remove="${u.id}" aria-label="remove image box">&times;</button>`:""}
          ${s?`<button class="compose-custom-item__resize" type="button" data-custom-resize="${u.id}" aria-label="resize image box"></button>`:""}
        </div>
      `}).join(""),L=b.textBoxes.map(u=>{const f=Dt(u);return`
        <div
          class="compose-custom-item compose-custom-item--text${b.selectedId===u.id?" is-selected":""}"
          data-custom-item="${u.id}"
          data-custom-type="text"
          style="left:${f.left};top:${f.top};width:${f.width};height:${f.height};"
        >
          <div
            class="compose-custom-item__text"
            data-custom-text="${u.id}"
            contenteditable="${s?"true":"false"}"
            spellcheck="false"
            style="text-align:${u.align};font-size:${Math.max(11,u.fontSize*520)}px;line-height:${u.lineHeight};padding:${Math.max(4,u.padding*520)}px;font-family:${u.family==="serif"?"'Cormorant Garamond', 'Times New Roman', serif":"'Noto Sans JP', sans-serif"};font-weight:${u.weight};"
          >${te(u.text)}</div>
          ${s?`<button class="compose-custom-item__drag" type="button" data-custom-drag="${u.id}" aria-label="move text box">${B("drag")}</button>`:""}
          ${s?`<button class="compose-custom-item__remove" type="button" data-custom-remove="${u.id}" aria-label="remove text box">&times;</button>`:""}
          ${s?`<button class="compose-custom-item__resize" type="button" data-custom-resize="${u.id}" aria-label="resize text box"></button>`:""}
        </div>
      `}).join("");p.innerHTML=`${w}${L}`,ae(),p.onpointerdown=u=>{u.target===p&&(b.selectedId=null,ce(),ae())},p.querySelectorAll("[data-custom-item]").forEach(u=>{let f=null;u.addEventListener("pointerdown",x=>{var Ee,Ye;const v=u.dataset.customItem||"",$=I(v);if(!$||!h||x.target.closest("[data-custom-remove], [data-custom-resize]"))return;x.preventDefault();const y=x.target.closest("[data-custom-drag]"),W=x.target.closest("[data-custom-text]"),G=x.target.closest("[data-custom-surface]"),U=$.type==="image"?$e(v):null;K(v);const ie=h.getBoundingClientRect(),xe=!!(U!=null&&U.previewUrl||U!=null&&U.file),Se=$.type==="image"&&b.imageMode==="crop"&&xe&&G&&!y;f={pointerId:x.pointerId,itemId:v,mode:Se?"crop-image":"move",originX:Se?U.position.x||.5:$.item.x,originY:Se?U.position.y||.5:$.item.y,startX:x.clientX,startY:x.clientY,frameWidth:ie.width,frameHeight:ie.height,type:$.type,zoom:((Ee=U==null?void 0:U.position)==null?void 0:Ee.zoom)||1,targetSurface:$.type==="image"&&!xe?G:null,targetText:y?null:W,cropSurface:Se?G:null,dragged:!1},(Ye=u.setPointerCapture)==null||Ye.call(u,x.pointerId)}),u.addEventListener("pointermove",x=>{var G,U;if(!f||f.pointerId!==x.pointerId)return;const v=x.clientX-f.startX,$=x.clientY-f.startY;if(!f.dragged&&Math.hypot(v,$)<6)return;f.dragged=!0,x.preventDefault();const y=I(f.itemId);if(!y)return;const W={x:y.item.x,y:y.item.y,width:y.item.width,height:y.item.height};if(f.mode==="crop-image"){const ie=(G=f.cropSurface)==null?void 0:G.getBoundingClientRect(),xe=$e(f.itemId),Se=xe.imageSize;if(!ie||!Se)return;const Ee=Se.width/Se.height,Ye=ie.width/ie.height,Qe=(Ee>Ye?ie.height*Ee:ie.width)*f.zoom,Ea=(Ee>Ye?ie.height:ie.width/Ee)*f.zoom,Qt=Math.max(0,Qe-ie.width),Zt=Math.max(0,Ea-ie.height);xe.position.x=Qt?Math.min(1,Math.max(0,f.originX-v/Qt)):.5,xe.position.y=Zt?Math.min(1,Math.max(0,f.originY-$/Zt)):.5;const Kt=(U=f.cropSurface)==null?void 0:U.querySelector(".compose-custom-item__image");Kt&&(Kt.style.objectPosition=`${xe.position.x*100}% ${xe.position.y*100}%`)}else{y.item.x=f.originX+v/f.frameWidth,y.item.y=f.originY+$/f.frameHeight,Object.assign(y.item,be(y.item,N(y.type)));const ie=y.type==="image"?{ignoreText:!0}:{};Object.assign(y.item,Fe(y.item,y.item.id,N(y.type),ie)),Re(y.item,y.item.id,ie)||Object.assign(y.item,W),y.type==="image"?He(y.item.id):Object.assign(y.item,R(y.item,st(y.item.id))),ae(),ne()}});const S=x=>{var G,U;if(!f||f.pointerId!==x.pointerId)return;const v=f.itemId,$=f.dragged,y=f.targetSurface,W=f.targetText;if(f=null,(G=u.releasePointerCapture)==null||G.call(u,x.pointerId),!$){if(y){(U=document.getElementById(`custom-image-${v}`))==null||U.click();return}W&&(W.focus(),we(W))}};u.addEventListener("pointerup",S),u.addEventListener("pointercancel",S)}),p.querySelectorAll("[data-custom-remove]").forEach(u=>{u.addEventListener("click",f=>{f.preventDefault(),f.stopPropagation();const S=u.dataset.customRemove,x=S?I(S):null;if(x){if(x.collection.splice(x.index,1),x.type==="image"){const v=j[S];v!=null&&v.previewUrl&&URL.revokeObjectURL(v.previewUrl),delete j[S],He(S)}b.selectedId=null,Q()}})}),p.querySelectorAll("[data-custom-text]").forEach(u=>{u.addEventListener("beforeinput",f=>{f.inputType==="insertParagraph"&&(ve(u,`
`),f.preventDefault())}),u.addEventListener("focus",()=>{const f=u.dataset.customText,S=f?I(f):null;(S==null?void 0:S.type)==="text"&&S.item.isDefaultText&&S.item.text.trim().toLowerCase()==="text"&&(S.item.text="",S.item.isDefaultText=!1,u.textContent=""),K(u.dataset.customText||"")}),u.addEventListener("input",()=>{const f=u.dataset.customText,S=f?I(f):null;if(!S)return;S.item.text=u.innerText.replace(/\r/g,""),S.item.isDefaultText=!1;const x=k==null?void 0:k.querySelector('[data-custom-control="text"]');x&&x!==document.activeElement&&(x.value=S.item.text),J(S.item.id)})}),p.querySelectorAll('input[id^="custom-image-"]').forEach(u=>{u.addEventListener("change",async f=>{var $;const S=u.id.replace("custom-image-",""),x=$e(S),v=(($=f.target.files)==null?void 0:$[0])||null;x.previewUrl&&(URL.revokeObjectURL(x.previewUrl),x.previewUrl=""),x.file=v,x.position={x:.5,y:.5,zoom:1},x.imageSize=v?await F(v):null,v&&(x.previewUrl=fileToPreviewUrl(v)),He(S),Q()})}),p.querySelectorAll("[data-custom-resize]").forEach(u=>{let f=null;u.addEventListener("pointerdown",x=>{var W;const v=u.dataset.customResize||"",$=I(v);if(!$||!h)return;x.preventDefault(),x.stopPropagation(),K(v);const y=h.getBoundingClientRect();f={pointerId:x.pointerId,itemId:v,originX:$.item.x,originY:$.item.y,originWidth:$.item.width,originHeight:$.item.height,startX:x.clientX,startY:x.clientY,frameWidth:y.width,frameHeight:y.height,type:$.type},(W=u.setPointerCapture)==null||W.call(u,x.pointerId)}),u.addEventListener("pointermove",x=>{if(!f||f.pointerId!==x.pointerId)return;x.preventDefault();const v=I(f.itemId);if(!v)return;const $=N(f.type),y={x:v.item.x,y:v.item.y,width:v.item.width,height:v.item.height};v.item.width=f.originWidth+(x.clientX-f.startX)/f.frameWidth,v.item.height=f.originHeight+(x.clientY-f.startY)/f.frameHeight,Object.assign(v.item,be(v.item,$));const W=v.type==="image"?{ignoreText:!0}:{};Object.assign(v.item,Fe(v.item,v.item.id,$,W)),Re(v.item,v.item.id,W)||Object.assign(v.item,y),v.type==="image"&&He(v.item.id),ae(),ne()});const S=x=>{var v;!f||f.pointerId!==x.pointerId||(f=null,(v=u.releasePointerCapture)==null||v.call(u,x.pointerId))};u.addEventListener("pointerup",S),u.addEventListener("pointercancel",S)}),window.requestAnimationFrame(()=>{b.textBoxes.forEach(u=>{J(u.id)})})}function Ce(){if(!n||!h)return;const r=n.dataset.template==="page8";if(Object.values(ye).forEach(s=>{s&&(s.style.left="",s.style.top="",s.style.width="",s.style.height="")}),Object.entries(oe).forEach(([s,m])=>{m&&(m.style.left="",m.style.top="",m.style.width="",m.style.height="",m.style.fontSize="",m.style.lineHeight="",m.style.textAlign="",s==="editor"&&(m.style.right=""),s==="body"&&(m.style.bottom=""),s==="date"&&(m.style.bottom=""))}),E&&(E.hidden=!r||t!=="edit"),!r){p&&(p.hidden=!0,p.innerHTML="");return}b.imageBoxes=Xt({imageBoxes:b.imageBoxes}),b.textBoxes=Yt({textBoxes:b.textBoxes},a),Q()}if(o.querySelectorAll('input[name="backgroundColor"]').forEach(r=>{r.addEventListener("change",()=>{_e(),Ne(r.value)})}),_e(),window.setTimeout(()=>{var r;Ne((r=o.querySelector('input[name="backgroundColor"]:checked'))==null?void 0:r.value)},0),o.querySelectorAll('input[name="templateId"]').forEach(r=>{r.addEventListener("change",()=>{ot(r.value),nt(r.value)})}),ot(c.composeTemplateId||((_t=o.querySelector('input[name="templateId"]:checked'))==null?void 0:_t.value)),window.setTimeout(()=>{var r;nt(c.composeTemplateId||((r=o.querySelector('input[name="templateId"]:checked'))==null?void 0:r.value))},0),document.querySelectorAll("[data-template-carousel-nav]").forEach(r=>{r.addEventListener("click",()=>{const s=document.querySelector("[data-template-carousel]");if(!s)return;const m=r.dataset.templateCarouselNav==="next"?1:-1;s.scrollBy({left:s.clientWidth*.72*m,behavior:"smooth"})})}),document.querySelectorAll("[data-color-carousel-nav]").forEach(r=>{r.addEventListener("click",()=>{const s=document.querySelector("[data-color-carousel]");if(!s)return;const m=r.dataset.colorCarouselNav==="next"?1:-1;s.scrollBy({left:s.clientWidth*.72*m,behavior:"smooth"})})}),document.querySelectorAll("[data-compose-stage-nav]").forEach(r=>{r.addEventListener("click",()=>{const s=r.dataset.composeStageNav;s&&H(s)})}),t==="select"||!i)return;_&&P&&_.addEventListener("click",()=>{const r=!P.hidden;P.hidden=r,_.setAttribute("aria-expanded",String(!r))}),C&&C.addEventListener("click",()=>{const r=!(e!=null&&e.classList.contains("is-preview-mode"));ft(!!r)}),ft(!1);const de=document.querySelector("[data-pretext-add-toggle]"),ge=document.querySelector("[data-pretext-add-popover]"),lt=document.querySelector("[data-pretext-delete]");function ke(){!de||!ge||(ge.hidden=!0,de.setAttribute("aria-expanded","false"))}function Et(){!de||!ge||(ge.hidden=!1,de.setAttribute("aria-expanded","true"))}if(O){let r=0;de==null||de.addEventListener("click",s=>{s.preventDefault(),s.stopPropagation(),ge&&(ge.hidden?Et():ke())}),ge==null||ge.querySelectorAll("[data-pretext-add-kind]").forEach(s=>{s.addEventListener("click",m=>{var L;m.preventDefault(),m.stopPropagation();const w=s.dataset.pretextAddKind;w&&(r+=1,(L=ee==null?void 0:ee.sendCommand)==null||L.call(ee,{id:r,type:"add",kind:w,align:s.dataset.pretextAddAlign||"left"}),ke())})}),lt==null||lt.addEventListener("click",s=>{var m;s.preventDefault(),s.stopPropagation(),r+=1,(m=ee==null?void 0:ee.sendCommand)==null||m.call(ee,{id:r,type:"delete-selected"}),ke()}),o.addEventListener("pointerdown",s=>{!ge||ge.hidden||de!=null&&de.contains(s.target)||ge.contains(s.target)||ke()}),Aa(async()=>{const{mountComposePretextEditor:s}=await import("./pretextComposeBridge-DXIxHvHU.js");return{mountComposePretextEditor:s}},__vite__mapDeps([0,1,2,3,4]),import.meta.url).then(({mountComposePretextEditor:s})=>{O.isConnected&&(ee=s(O,{customLayout:(l==null?void 0:l.customLayout)||{},textValues:a}))}).catch(s=>{console.error("Failed to mount pretext compose editor",s),O.innerHTML='<p class="compose-pretext-host__error">Failed to load the editor.</p>'});return}const re=o.querySelector('[data-custom-add="text"]');let V=(re==null?void 0:re.closest("[data-custom-add-pop]"))||null,me=(V==null?void 0:V.querySelector("[data-custom-add-popover]"))||null;re&&!V&&(V=document.createElement("div"),V.className="compose-custom-add-pop",(St=re.parentElement)==null||St.insertBefore(V,re),V.appendChild(re)),re&&V&&!me&&(V.insertAdjacentHTML("afterbegin",`
      <div class="compose-custom-add-popover" data-custom-add-popover hidden>
        <button class="compose-custom-add-popover__option" type="button" data-custom-add-text-align="left" aria-label="Add left aligned text box">
          ${B("alignLeft")}
        </button>
        <button class="compose-custom-add-popover__option" type="button" data-custom-add-text-align="center" aria-label="Add centered text box">
          ${B("alignCenter")}
        </button>
        <button class="compose-custom-add-popover__option" type="button" data-custom-add-text-align="right" aria-label="Add right aligned text box">
          ${B("alignRight")}
        </button>
      </div>
    `),me=V.querySelector("[data-custom-add-popover]"),re.setAttribute("aria-haspopup","true"),re.setAttribute("aria-expanded","false"));function Ve(){!me||!re||(me.hidden=!0,V==null||V.classList.remove("is-open"),re.setAttribute("aria-expanded","false"))}function At(){!me||!re||(me.hidden=!1,V==null||V.classList.add("is-open"),re.setAttribute("aria-expanded","true"))}o.querySelectorAll("[data-custom-add]").forEach(r=>{r.addEventListener("click",s=>{s.preventDefault();const m=r.dataset.customAdd;if((n==null?void 0:n.dataset.template)==="page8"){if(m==="image"){Ve();const w={id:he("image"),x:.14,y:.18,width:.28,height:.22};b.imageBoxes=[...b.imageBoxes,be(w,Ot)],b.selectedId=w.id,$e(w.id),He(w.id),Q();return}me&&(me.hidden?At():Ve())}})}),me==null||me.querySelectorAll("[data-custom-add-text-align]").forEach(r=>{r.addEventListener("click",s=>{s.preventDefault(),(n==null?void 0:n.dataset.template)==="page8"&&(gt(r.dataset.customAddTextAlign||"left"),Ve())})}),o.addEventListener("pointerdown",r=>{!me||me.hidden||V!=null&&V.contains(r.target)||Ve()}),[{inputId:"imageInputPrimary",stateKey:"primary"},{inputId:"imageInputSecondary",stateKey:"secondary"},{inputId:"imageInputAccent",stateKey:"accent"}].forEach(({inputId:r,stateKey:s})=>{const m=document.querySelector(`[data-slot="${r}"]`),w=document.getElementById(r);if(!w)return;w.addEventListener("change",async u=>{var S;const f=((S=u.target.files)==null?void 0:S[0])||null;g[s].file=f?await Qi(f,{maxWidth:1600,quality:.9}):null,g[s].position={x:.5,y:.5},g[s].imageSize=f?await F(f):null,d[r]=g[s].file||"",De(r),A(r),T({standardFiles:z()})});const L=document.querySelector(`[data-slot-remove="${r}"]`);if(L&&L.addEventListener("click",u=>{u.preventDefault(),u.stopPropagation(),d[r]="",g[s]={file:null,position:{x:.5,y:.5},imageSize:null},w.value="",De(r),T({standardFiles:z()})}),m){let u=null;m.addEventListener("pointerdown",S=>{var x,v;if(!(e!=null&&e.classList.contains("is-preview-mode"))){if((n==null?void 0:n.dataset.template)==="page8"){const $=b.imageBoxes[s];if(!$||!h)return;S.preventDefault(),S.stopPropagation();const y=h.getBoundingClientRect();u={pointerId:S.pointerId,mode:"move-box",startX:S.clientX,startY:S.clientY,originX:$.x,originY:$.y,frameWidth:y.width,frameHeight:y.height},m.classList.add("is-dragging"),(x=m.setPointerCapture)==null||x.call(m,S.pointerId);return}g[s].file&&(S.preventDefault(),S.stopPropagation(),u={pointerId:S.pointerId,mode:"pan-image",startX:S.clientX,startY:S.clientY,originX:g[s].position.x,originY:g[s].position.y},m.classList.add("is-dragging"),(v=m.setPointerCapture)==null||v.call(m,S.pointerId))}}),m.addEventListener("pointermove",S=>{if(!u||u.pointerId!==S.pointerId)return;if(S.preventDefault(),u.mode==="move-box"){const Ee=u.originX+(S.clientX-u.startX)/u.frameWidth,Ye=u.originY+(S.clientY-u.startY)/u.frameHeight,Qe=b.imageBoxes[s];Qe.x=Math.min(q.x+q.width-Qe.width,Math.max(q.x,Ee)),Qe.y=Math.min(q.y+q.height-Qe.height,Math.max(q.y,Ye)),Ce();return}const x=m.getBoundingClientRect(),v=g[s].imageSize;if(!v)return;const $=v.width/v.height,y=x.width/x.height,W=$>y?x.height*$:x.width,G=$>y?x.height:x.width/$,U=Math.max(0,W-x.width),ie=Math.max(0,G-x.height),xe=S.clientX-u.startX,Se=S.clientY-u.startY;g[s].position.x=U?Math.min(1,Math.max(0,u.originX-xe/U)):.5,g[s].position.y=ie?Math.min(1,Math.max(0,u.originY-Se/ie)):.5,A(r),T({standardFiles:z()})});const f=S=>{var x;!u||u.pointerId!==S.pointerId||(u=null,m.classList.remove("is-dragging"),(x=m.releasePointerCapture)==null||x.call(m,S.pointerId))};m.addEventListener("pointerup",f),m.addEventListener("pointercancel",f)}De(r),A(r)}),Ce(),D.forEach(r=>{r.dataset.previousValue=Ie(r),r.addEventListener("beforeinput",s=>{var f;if(r.dataset.singleLine==="true"&&(s.inputType==="insertParagraph"||s.inputType==="insertLineBreak")){s.preventDefault();return}const m=Number(r.dataset.maxChars||0);if(!m||!s.inputType.startsWith("insert"))return;const w=Ie(r).length,L=Oe(r),u=((f=s.data)==null?void 0:f.length)??1;w-L+u>m&&s.preventDefault()}),r.addEventListener("paste",s=>{var v,$;s.preventDefault();const m=(($=(v=s.clipboardData)==null?void 0:v.getData("text/plain"))==null?void 0:$.replace(/\r/g,""))??"",w=r.dataset.singleLine==="true"?m.replace(/\n+/g," "):m,L=Number(r.dataset.maxChars||0),u=Ie(r).length,f=Oe(r),S=L?Math.max(0,L-(u-f)):w.length,x=w.slice(0,S);x&&(ve(r,x),r.dataset.previousValue=Ie(r))}),r.addEventListener("input",()=>{const s=Number(r.dataset.maxChars||0),m=Ie(r);if(s&&m.length>s){r.innerText=r.dataset.previousValue||"",we(r);return}r.dataset.previousValue=m}),r.addEventListener("blur",()=>{Ct(r),it(r)})}),t==="tags"&&i.addEventListener("submit",async r=>{var u;r.preventDefault();const s=M(),m={templateId:s.templateId,backgroundColor:s.backgroundColor,headline:s.headline,subhead:s.subhead,intro:s.intro,body:s.body,date:s.date,editor:s.editor,customLayout:s.customLayout},w=await xo(m,s.standardFiles,{}),L=String(((u=at().profile)==null?void 0:u.name)||"you").trim()||"you";c.composeEditingPostId?ja(c.composeEditingPostId,{caption:la(m),imageData:w,fixedTags:s.fixedTags,freeTags:s.freeTags,composeData:{...m,fixedTags:s.fixedTags,freeTags:s.freeTags,standardFiles:s.standardFiles}}):Ya({authorName:L,caption:la(m),imageData:w,fixedTags:s.fixedTags,freeTags:s.freeTags,composeData:{...m,fixedTags:s.fixedTags,freeTags:s.freeTags,standardFiles:s.standardFiles}}),c.screen="timeline",c.timelineTab="recommended",c.composeStage="select",c.composeWorkingDraft=null,se()})}function vo(){const e=document.getElementById("issueForm");e&&e.addEventListener("submit",t=>{t.preventDefault();const i=new FormData(e),o=i.getAll("issuePostIds").map(n=>String(n));o.length&&(ei({title:String(i.get("title")).trim(),subtitle:String(i.get("subtitle")||"").trim(),tone:String(i.get("tone")||"soft"),postIds:o}),pe())})}function _o(){Pt(document.getElementById("screenArea"));function e(l){return new Promise(a=>{const d=new Image,g=URL.createObjectURL(l);d.onload=()=>{a({width:d.naturalWidth,height:d.naturalHeight}),URL.revokeObjectURL(g)},d.onerror=()=>{a(null),URL.revokeObjectURL(g)},d.src=g})}document.querySelectorAll("[data-profile-avatar-upload]").forEach(l=>{l.addEventListener("click",a=>{a.stopPropagation(),c.profileExpanded=!0,c.profileSection="edit",pe(),window.setTimeout(()=>{var d;(d=document.getElementById("profileAvatarInput"))==null||d.click()},0)})}),document.querySelectorAll("[data-profile-section]").forEach(l=>{l.addEventListener("click",()=>{c.profileSection=l.dataset.profileSection,c.profileSection==="library"&&(c.profileLibraryTab=c.profileLibraryTab||"liked"),pe()})}),document.querySelectorAll("[data-profile-library-tab]").forEach(l=>{l.addEventListener("click",()=>{c.profileLibraryTab=l.dataset.profileLibraryTab||"liked",pe()})});const t=document.getElementById("profileAvatarInput"),i=document.getElementById("avatarCropper"),o=document.getElementById("avatarCropSurface"),n=document.getElementById("avatarCropImage");function h(){if(!(!i||!n)){if(!Y.file||!Y.previewUrl){i.hidden=!0,n.removeAttribute("src");return}i.hidden=!1,n.src=Y.previewUrl,n.style.objectPosition=`${Y.crop.x*100}% ${Y.crop.y*100}%`,n.style.transform=`scale(${Y.crop.zoom})`}}if(t&&t.addEventListener("change",async l=>{var d;const a=((d=l.target.files)==null?void 0:d[0])||null;Y.previewUrl&&(URL.revokeObjectURL(Y.previewUrl),Y.previewUrl=""),Y.file=a,Y.imageSize=a?await e(a):null,Y.crop={x:.5,y:.5,zoom:1},a&&(Y.previewUrl=fileToPreviewUrl(a)),c.profileAvatarCropOpen=!!a,pe()}),o){let l=null;o.addEventListener("pointerdown",d=>{var g;Y.file&&(l={pointerId:d.pointerId,startX:d.clientX,startY:d.clientY,originX:Y.crop.x,originY:Y.crop.y},o.classList.add("is-dragging"),(g=o.setPointerCapture)==null||g.call(o,d.pointerId))}),o.addEventListener("pointermove",d=>{if(!l||l.pointerId!==d.pointerId||!Y.imageSize)return;const g=o.getBoundingClientRect(),{width:_,height:P}=Y.imageSize,C=_/P,E=g.width/g.height,k=C>E?g.height*C:g.width,O=C>E?g.height:g.width/C,D=k*Y.crop.zoom,b=O*Y.crop.zoom,j=Math.max(0,D-g.width),oe=Math.max(0,b-g.height),ye=d.clientX-l.startX,z=d.clientY-l.startY;Y.crop.x=j?Math.min(1,Math.max(0,l.originX-ye/j)):.5,Y.crop.y=oe?Math.min(1,Math.max(0,l.originY-z/oe)):.5,h()});const a=d=>{var g;!l||l.pointerId!==d.pointerId||(l=null,o.classList.remove("is-dragging"),(g=o.releasePointerCapture)==null||g.call(o,d.pointerId))};o.addEventListener("pointerup",a),o.addEventListener("pointercancel",a)}h();const p=document.getElementById("profileForm");p&&p.addEventListener("submit",async l=>{l.preventDefault();const a=new FormData(p),d=Y.file?await Zi(Y.file,Y.crop,{size:320}):at().profile.avatarData;Za({name:String(a.get("name")).trim(),bio:String(a.get("bio")).trim(),avatarData:d}),ut(),c.profileSection=null,c.profileExpanded=!0,pe()}),document.querySelectorAll("[data-follow-author]").forEach(l=>{l.addEventListener("click",()=>{Ka(l.dataset.followAuthor),pe()})})}function So(){Pt(document.getElementById("screenArea")),document.querySelectorAll("[data-close-post-detail]").forEach(e=>{e.addEventListener("click",()=>{Pa()})})}function $o(){document.querySelectorAll("[data-close-preview]").forEach(e=>{e.addEventListener("click",()=>{c.previewPostId=null,pt()})}),document.querySelectorAll("[data-close-comments]").forEach(e=>{e.addEventListener("click",()=>{c.commentPostId=null,pt()})}),document.querySelectorAll("[data-delete-post]").forEach(e=>{e.addEventListener("click",()=>{const t=e.dataset.deletePost;if(!t)return;const i=et(t);if(Ta(i)&&window.confirm("この投稿を削除しますか？")){if(Ua(t),c.previewPostId===t&&(c.previewPostId=null),c.commentPostId===t&&(c.commentPostId=null),c.screen==="post"){Pa();return}pe()}})}),document.querySelectorAll("[data-comment-form]").forEach(e=>{e.addEventListener("submit",t=>{t.preventDefault();const i=e.querySelector('input[name="comment"]');Va(e.dataset.commentForm,i.value),c.commentPostId=e.dataset.commentForm,pt(),pe()})})}function ko(){switch(fo(),c.screen){case"home":ho();break;case"timeline":uo();break;case"search":go();break;case"compose":wo();break;case"magazine":vo();break;case"profile":_o();break;case"post":So();break}}function Ca(e=document.getElementById("app")){if(!e)throw new Error("bootLegacyApp requires an app root element.");if(ht=e,typeof window<"u"&&typeof window.matchMedia=="function"&&!Ze){Ze=window.matchMedia("(prefers-color-scheme: dark)");const t=()=>{c.homeTheme==="system"&&se()};typeof Ze.addEventListener=="function"?Ze.addEventListener("change",t):typeof Ze.addListener=="function"&&Ze.addListener(t)}return se(),{render:se}}if(typeof window<"u"&&!window.__MEMORIES_REACT_HOST__){const e=document.getElementById("app");e&&Ca(e)}const Mo=Object.freeze(Object.defineProperty({__proto__:null,bootLegacyApp:Ca},Symbol.toStringTag,{value:"Module"}));export{q as P,Yt as a,Mo as b,Xt as n};
