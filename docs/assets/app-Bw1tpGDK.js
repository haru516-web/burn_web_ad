const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["./pretextComposeBridge-PRR2G_de.js","./main-DcR5JYUv.js","./client-CTQ0Ju4c.js","./main-DNa06VtK.css","./pretextComposeBridge-BXwsMVV_.css"])))=>i.map(i=>d[i]);
import{_ as Ia}from"./main-DcR5JYUv.js";function Pa(){return""}function ia(e){const t=new Date(e),i=t.getFullYear(),o=String(t.getMonth()+1).padStart(2,"0"),n=String(t.getDate()).padStart(2,"0");return`${i}.${o}.${n}`}function oa(e){const t=new Date(e),i=t.getFullYear(),o=String(t.getMonth()+1).padStart(2,"0"),n=String(t.getDate()).padStart(2,"0"),u=String(t.getHours()).padStart(2,"0"),m=String(t.getMinutes()).padStart(2,"0");return`${i}.${o}.${n} ${u}:${m}`}function Ea(e){const t=new Date(e).getTime();return(Date.now()-t)/(1e3*60*60)<=72}function Ca(e){const t=Date.now()-new Date(e).getTime(),i=Math.floor(t/6e4);if(i<1)return"たった今";if(i<60)return`${i}分前`;const o=Math.floor(i/60);return o<24?`${o}時間前`:`${Math.floor(o/24)}日前`}function N(e){return{timeline:'<svg viewBox="0 0 24 24" aria-hidden="true" fill="none" stroke="currentColor" stroke-width="1.15" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="2.3" fill="currentColor" stroke="none"/><ellipse cx="12" cy="12" rx="8.8" ry="4.1" transform="rotate(18 12 12)"/><ellipse cx="12" cy="12" rx="8.1" ry="3.3" transform="rotate(78 12 12)"/><ellipse cx="12" cy="12" rx="7.6" ry="5.2" transform="rotate(-40 12 12)"/><circle cx="18.9" cy="6.2" r="1.15" fill="currentColor" stroke="none"/><circle cx="17.8" cy="17.3" r="1" fill="currentColor" stroke="none"/><circle cx="6.1" cy="8" r="0.95" fill="currentColor" stroke="none"/><circle cx="7.1" cy="18.2" r="0.9" fill="currentColor" stroke="none"/><circle cx="11.2" cy="6.4" r="0.9" fill="currentColor" stroke="none"/></svg>',search:'<svg viewBox="0 0 24 24" aria-hidden="true" fill="none" stroke="currentColor" stroke-width="1.15" stroke-linecap="round" stroke-linejoin="round"><ellipse cx="12" cy="6.5" rx="6.9" ry="2.1"/><path d="M5.7 6.8c1 3.1 3 5.6 6.3 11.5"/><path d="M18.3 6.8c-1 3.1-3 5.6-6.3 11.5"/><circle cx="12" cy="19.8" r="1.55" fill="currentColor" stroke="none"/><circle cx="12" cy="9.2" r="0.8" fill="currentColor" stroke="none"/><circle cx="9.2" cy="8.6" r="0.65" fill="currentColor" stroke="none"/><circle cx="14.9" cy="8.3" r="0.65" fill="currentColor" stroke="none"/><circle cx="10.2" cy="11.2" r="0.55" fill="currentColor" stroke="none"/><circle cx="13.8" cy="11" r="0.55" fill="currentColor" stroke="none"/><circle cx="12" cy="12.9" r="0.55" fill="currentColor" stroke="none"/><circle cx="11" cy="15.1" r="0.45" fill="currentColor" stroke="none"/><circle cx="13" cy="15.6" r="0.45" fill="currentColor" stroke="none"/><circle cx="8.2" cy="4.2" r="0.45" fill="currentColor" stroke="none"/><circle cx="15.8" cy="3.9" r="0.45" fill="currentColor" stroke="none"/></svg>',compose:'<svg viewBox="0 0 24 24" aria-hidden="true" fill="none" stroke="currentColor" stroke-width="1.45" stroke-linecap="round"><circle cx="12" cy="12" r="2.45" fill="currentColor" stroke="none"/><path d="M12 2.9v5.1M12 16v5.1M2.9 12h5.1M16 12h5.1M5.5 5.5l3.6 3.6M14.9 14.9l3.6 3.6M18.5 5.5l-3.6 3.6M9.1 14.9l-3.6 3.6"/></svg>',issue:'<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M6 4h12a2 2 0 0 1 2 2v12H8a2 2 0 0 0-2 2z"/><path d="M6 4a2 2 0 0 0-2 2v14h14"/></svg>',profile:'<svg viewBox="0 0 24 24" aria-hidden="true" fill="none" stroke="currentColor" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round"><path d="M3.8 16.8c2.3-2.6 4.9-5.1 7.1-7.6 1.1-1.2 2-2.2 2.7-2.2.7 0 1.1.6 1.1 1.4 0 1.1-.5 2.1-.6 3.2 2.1-2.5 4.3-4.3 6.4-4.3-.6 1.4-1.7 2.6-2.6 3.8-.8 1-.9 1.8.3 1.8h2.1"/><path d="M4.1 17.1c3.8-.2 8.5-.4 16-.7"/><circle cx="20.6" cy="8" r="0.85" fill="currentColor" stroke="none"/></svg>',heart:'<svg viewBox="0 0 24 24" aria-hidden="true" fill="none" stroke="currentColor" stroke-width="1.25" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="2.5" fill="currentColor" stroke="none"/><circle cx="12" cy="12" r="4.7"/><circle cx="12" cy="12" r="7"/><circle cx="12" cy="12" r="9.2" opacity="0.68"/></svg>',comment:'<svg viewBox="0 0 24 24" aria-hidden="true" fill="none" stroke="currentColor" stroke-width="1.35" stroke-linecap="round" stroke-linejoin="round"><path d="M4.8 12.2c0-3.4 2.8-6.1 6.2-6.1 3.3 0 5.8 2.4 5.8 5.4 0 3.1-2.6 5.4-6.2 5.4-.8 0-1.6-.1-2.3-.4l-3.3 1 .9-2.7c-.7-.8-1.1-1.7-1.1-2.6Z"/><path d="m14.2 8.3 5 1.1-2 1.9 1.9 5-4.9-1.9-1.9 2Z" opacity="0.8"/></svg>',save:'<svg viewBox="0 0 24 24" aria-hidden="true" fill="none" stroke="currentColor" stroke-width="1.25" stroke-linecap="round" stroke-linejoin="round"><path d="M12 3.6 18.2 7v10L12 20.4 5.8 17V7Z"/><path d="M12 3.6v6.3M18.2 7 12 9.9 5.8 7"/><path d="M12 9.9v10.5"/><circle cx="12" cy="12" r="2.1" fill="currentColor" stroke="none"/></svg>',tag:'<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M20 11.5 11.5 20 4 12.5V5h7.5Z"/><circle cx="15.5" cy="8.5" r="1"/></svg>',spark:'<svg viewBox="0 0 24 24" aria-hidden="true"><path d="m12 3 1.9 5.1L19 10l-5.1 1.9L12 17l-1.9-5.1L5 10l5.1-1.9Z"/></svg>',arrowLeft:'<svg viewBox="0 0 24 24" aria-hidden="true" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M15.5 5.5 9 12l6.5 6.5"/><path d="M9.5 12h9"/></svg>',returnLeft:'<svg viewBox="0 0 24 24" aria-hidden="true" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><path d="M9.2 7.4 5.4 11l3.8 3.6"/><path d="M6 11h7.8c3.1 0 4.9 1.5 4.9 4.6 0 .9-.1 1.5-.4 2.1"/></svg>',recommended:'<svg viewBox="0 0 24 24" aria-hidden="true" fill="none" stroke="currentColor" stroke-width="1.35" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="5.3" r="2.5" fill="currentColor" stroke="none"/><circle cx="5.8" cy="17.6" r="2.6" fill="currentColor" stroke="none"/><circle cx="18.2" cy="17.6" r="2.6" fill="currentColor" stroke="none"/><path d="M7.9 15.8 10.6 8.1"/><path d="M16.1 15.8 13.4 8.1"/><path d="M8.8 17.6h6.4"/></svg>',follow:'<svg viewBox="0 0 24 24" aria-hidden="true" fill="none" stroke="currentColor" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round"><circle cx="8.3" cy="17.5" r="3.1" fill="currentColor" stroke="none"/><circle cx="16.4" cy="8.2" r="2.5" fill="currentColor" stroke="none"/><path d="M5.1 18.7c1.3-4.2 5-7.2 9.5-7.2 1.5 0 3 .3 4.2.9"/><path d="M5 18.9c1.8 0 3.3-.6 5.1-1.7 3-1.9 5.1-4.7 7.1-8"/><path d="m17.6 6.2 1.9 1.1-1 2.1" /></svg>',close:'<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M6 6 18 18M18 6 6 18"/></svg>',image:'<svg viewBox="0 0 24 24" aria-hidden="true"><rect x="4" y="5" width="16" height="14" rx="2"/><path d="m8 15 2.5-2.5L13 15l2.5-3 2.5 3"/><circle cx="9" cy="9" r="1.2"/></svg>',trash:'<svg viewBox="0 0 24 24" aria-hidden="true" fill="none" stroke="currentColor" stroke-width="1.35" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="7.6" opacity="0.45"/><path d="M7.1 7.1 16.9 16.9"/><path d="M16.9 7.1 7.1 16.9"/><circle cx="12" cy="12" r="1.15" fill="currentColor" stroke="none"/></svg>',edit:'<svg viewBox="0 0 24 24" aria-hidden="true" fill="none" stroke="currentColor" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round"><path d="M5.4 8.2h8.2v10.2H5.4z"/><path d="M9 5.1h9.1l-4.9 5.1H9z"/><path d="M6.3 16.8 16.7 6.4"/><circle cx="12" cy="11.5" r="0.95" fill="currentColor" stroke="none"/></svg>',drag:'<svg viewBox="0 0 24 24" aria-hidden="true" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M12 4v16M4 12h16"/><path d="m12 4-2.8 2.8M12 4l2.8 2.8M20 12l-2.8-2.8M20 12l-2.8 2.8M12 20l-2.8-2.8M12 20l2.8-2.8M4 12l2.8-2.8M4 12l2.8 2.8"/></svg>',alignLeft:'<svg viewBox="0 0 24 24" aria-hidden="true" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round"><path d="M5 7h12"/><path d="M5 12h9"/><path d="M5 17h13"/></svg>',alignCenter:'<svg viewBox="0 0 24 24" aria-hidden="true" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round"><path d="M6 7h12"/><path d="M8 12h8"/><path d="M5 17h14"/></svg>',alignRight:'<svg viewBox="0 0 24 24" aria-hidden="true" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round"><path d="M7 7h12"/><path d="M10 12h9"/><path d="M6 17h13"/></svg>'}[e]||""}function Xe(e,t,i="avatar"){return e?`<img class="avatar__image" src="${e}" alt="${i}" />`:`<span class="avatar__label">${t}</span>`}function Aa(e){var t;return e?`
    <div class="overlay" data-close-comments>
      <section class="modal modal--comments" role="dialog" aria-modal="true" aria-label="Comments" onclick="event.stopPropagation()">
        <div class="modal__header">
          <h3 class="modal__title">Comments</h3>
          <button class="modal__close" data-close-comments aria-label="Close">${N("close")}</button>
        </div>
        <div class="comments-list">
          ${(t=e.comments)!=null&&t.length?e.comments.map(i=>`
            <article class="comment-item">
              <p class="comment-item__text">${i.text}</p>
              <span class="comment-item__date">${oa(i.createdAt)}</span>
            </article>
          `).join(""):'<p class="empty-copy">No comments yet.</p>'}
        </div>
        <form class="comment-form" data-comment-form="${e.id}">
          <input class="field__input" type="text" name="comment" maxlength="80" placeholder="Write a comment" required />
          <button class="button button--primary" type="submit">Post</button>
        </form>
      </section>
    </div>
  `:""}const na="memories-static-site-state-v1";function Ba(){try{const e=localStorage.getItem(na);return e?JSON.parse(e):null}catch{return null}}function Na(e){localStorage.setItem(na,JSON.stringify(e))}function Mt(e="id"){return`${e}_${Math.random().toString(36).slice(2,9)}_${Date.now().toString(36)}`}const ft={profile:{name:"you",bio:"A small local profile to collect your memories.",avatarData:""},posts:[],issues:[],followingAuthors:[]};function Da(e){return{id:e.id,authorName:e.authorName||"you",authorIcon:e.authorIcon||(e.authorName||"U").trim().slice(0,1).toUpperCase(),authorAvatarData:e.authorAvatarData||"",caption:e.caption||"",imageData:e.imageData||"",fixedTags:Array.isArray(e.fixedTags)?e.fixedTags:[],freeTags:Array.isArray(e.freeTags)?e.freeTags:[],likes:Number(e.likes||0),saves:Number(e.saves||0),comments:Array.isArray(e.comments)?e.comments:[],impressions:Number(e.impressions||0),liked:!!e.liked,saved:!!e.saved,createdAt:e.createdAt||new Date().toISOString(),updatedAt:e.updatedAt||null,composeData:e.composeData||null}}function Ra(e){var t,i,o;return e?{profile:{name:((t=e.profile)==null?void 0:t.name)||ft.profile.name,bio:((i=e.profile)==null?void 0:i.bio)||ft.profile.bio,avatarData:((o=e.profile)==null?void 0:o.avatarData)||""},posts:Array.isArray(e.posts)?e.posts.map(Da):[],issues:Array.isArray(e.issues)?e.issues:[],followingAuthors:Array.isArray(e.followingAuthors)?e.followingAuthors:[]}:structuredClone(ft)}let ce=Ra(Ba());function et(){return ce}function we(e){ce=e,Na(ce)}function Ha(e){const t=structuredClone(ce);t.posts.unshift({id:Mt("post"),authorName:e.authorName,authorIcon:(e.authorName||"U").trim().slice(0,1).toUpperCase(),authorAvatarData:ce.profile.avatarData||"",caption:e.caption||"",imageData:e.imageData,fixedTags:e.fixedTags||[],freeTags:e.freeTags||[],likes:0,saves:0,comments:[],impressions:0,liked:!1,saved:!1,createdAt:new Date().toISOString(),updatedAt:null,composeData:e.composeData||null}),we(t)}function qa(e,t){const i=structuredClone(ce),o=i.posts.find(n=>n.id===e);o&&(o.caption=t.caption??o.caption,o.imageData=t.imageData??o.imageData,o.fixedTags=Array.isArray(t.fixedTags)?t.fixedTags:o.fixedTags,o.freeTags=Array.isArray(t.freeTags)?t.freeTags:o.freeTags,o.composeData=t.composeData??o.composeData,o.updatedAt=new Date().toISOString(),we(i))}function Wa(e){const t=structuredClone(ce);t.posts.some(o=>o.id===e)&&(t.posts=t.posts.filter(o=>o.id!==e),t.issues=t.issues.map(o=>({...o,postIds:(o.postIds||[]).filter(n=>n!==e)})).filter(o=>o.postIds.length),we(t))}function za(e){const t=structuredClone(ce),i=t.posts.find(o=>o.id===e);i&&(i.liked=!i.liked,i.likes+=i.liked?1:-1,we(t))}function Oa(e){const t=structuredClone(ce),i=t.posts.find(o=>o.id===e);i&&(i.saved=!i.saved,i.saves+=i.saved?1:-1,we(t))}function Fa(e,t){const i=structuredClone(ce),o=i.posts.find(n=>n.id===e);!o||!t.trim()||(o.comments.unshift({id:Mt("comment"),text:t.trim(),createdAt:new Date().toISOString()}),we(i))}function Xa(e){const t=structuredClone(ce),i=t.posts.find(o=>o.id===e);i&&(i.impressions+=1,we(t))}function Ya(e){const t=structuredClone(ce),i=t.profile.name,o=e.avatarData||"";t.profile.name=e.name,t.profile.bio=e.bio,t.profile.avatarData=o,t.posts=t.posts.map(n=>n.authorName===i?{...n,authorName:e.name,authorIcon:(e.name||"U").trim().slice(0,1).toUpperCase(),authorAvatarData:o}:n),t.followingAuthors=t.followingAuthors.map(n=>n===i?e.name:n),we(t)}function Ua(e){const t=structuredClone(ce),i=t.followingAuthors.includes(e);t.followingAuthors=i?t.followingAuthors.filter(o=>o!==e):[...t.followingAuthors,e],we(t)}function ja(e){const t=structuredClone(ce);t.issues.unshift({id:Mt("issue"),title:e.title,subtitle:e.subtitle,tone:e.tone,postIds:e.postIds,createdAt:new Date().toISOString()}),we(t)}function Ja(){return`
    <section class="opening-screen">
      <div class="opening-screen__inner">
        <div class="opening-screen__stage" aria-label="LANI">
          <div class="opening-screen__noise" aria-hidden="true"></div>
          <div class="opening-screen__glow opening-screen__glow--a" aria-hidden="true"></div>
          <div class="opening-screen__glow opening-screen__glow--b" aria-hidden="true"></div>
          <div class="opening-screen__glow opening-screen__glow--c" aria-hidden="true"></div>
          <canvas class="opening-screen__canvas" id="openingCanvas"></canvas>
        </div>
      </div>
    </section>
  `}function Ga(e){return[...e].sort((t,i)=>Jt(i)-Jt(t))}function Jt(e){var u;const t=(e.likes||0)*2+(e.saves||0)*2+(((u=e.comments)==null?void 0:u.length)||0)*1.5+(e.impressions||0)*1.2,i=Ea(e.createdAt)?120:0,n=220/Math.max(1,(Date.now()-new Date(e.createdAt).getTime())/(1e3*60*60));return t+i+n}function Va(e,{query:t="",tags:i=[]}={}){const o=t.trim().toLowerCase();return e.filter(n=>{const u=[n.authorName,n.caption||"",...n.fixedTags||[],...n.freeTags||[]].join(" ").toLowerCase(),m=!o||u.includes(o),l=!i.length||i.every(a=>[...n.fixedTags||[],...n.freeTags||[]].includes(a));return m&&l})}function Za(e){return e==="system"?typeof window<"u"&&typeof window.matchMedia=="function"&&window.matchMedia("(prefers-color-scheme: dark)").matches?"dark":"light":e==="dark"?"dark":"light"}function Qa(e){return e==="system"?"System":e==="dark"?"Dark":"White"}function Ka(e,t){return e==="system"?`OS ${t==="dark"?"Dark":"White"}`:"Tap to switch"}function ei(e,t){const i=e.posts||[];return t==="following"?i.filter(o=>e.followingAuthors.includes(o.authorName)):Ga(i)}const rt=[{x:70,y:78,w:210,h:300},{x:382,y:116,w:122,h:148},{x:566,y:82,w:214,h:320},{x:78,y:448,w:214,h:304},{x:360,y:318,w:204,h:434},{x:598,y:470,w:190,h:260},{x:88,y:834,w:156,h:196},{x:344,y:786,w:182,h:264},{x:640,y:872,w:142,h:172}],Gt=860,Vt=1120,ti=980,ai=1260;function Zt(e){const t=e%2,i=Math.floor(e/2);return{x:120+t*ti,y:80+i*ai}}function ii(e,t,i){return`
    <article
      class="timeline-particle"
      style="left:${i.x+t.x}px; top:${i.y+t.y}px; width:${t.w}px; height:${t.h}px;"
    >
      <button class="timeline-particle__author" type="button" data-open-author="${e.authorName}" aria-label="Open ${e.authorName} profile">
        ${Xe(e.authorAvatarData,e.authorIcon,`${e.authorName} avatar`)}
      </button>
      <button class="timeline-particle__image-button" type="button" data-open-preview="${e.id}" aria-label="Open ${e.authorName} post">
        <img class="timeline-particle__image" src="${e.imageData}" alt="${e.authorName} post" />
      </button>
    </article>
  `}function oi(e){const t=Math.max(1,Math.ceil(e.length/rt.length)),i=Array.from({length:t},(n,u)=>{const m=Zt(u),l=e.slice(u*rt.length,(u+1)*rt.length);return{placement:m,html:`
        <section
          class="timeline-board"
          style="left:${m.x}px; top:${m.y}px; width:${Gt}px; height:${Vt}px;"
          aria-hidden="true"
        ></section>
        ${l.map((a,p)=>ii(a,rt[p],m)).join("")}
      `}});if(!e.length)return{width:1280,height:1120,html:`
        <div class="timeline-field__empty">
        <p class="timeline-field__empty-title">No posts yet</p>
        <p class="timeline-field__empty-copy">Create your first memory and it will appear here.</p>
      </div>
      `};const o=Zt(t-1);return{width:o.x+Gt+140,height:o.y+Vt+140,html:i.map(n=>n.html).join("")}}function Qt(e,t){const i=(t==null?void 0:t.homeTheme)||"dark",o=Za(i),n=(t==null?void 0:t.homeCoreState)||"default",u=Qa(i),m=Ka(i,o);return`
    <section class="page orbit-home orbit-home--${o} orbit-home--mode-${i} orbit-home--${n}">
      <div class="orbit-stage">
        <button class="orbit-node orbit-node--theme orbit-node--theme-mode-${i}" type="button" data-home-theme-toggle aria-label="Switch main page theme">
          <strong class="orbit-node__title">${u}</strong>
          <span class="orbit-node__meta">${m}</span>
        </button>
        <div class="orbit-stage__noise" aria-hidden="true"></div>
        <div class="orbit-stage__glow orbit-stage__glow--a" aria-hidden="true"></div>
        <div class="orbit-stage__glow orbit-stage__glow--b" aria-hidden="true"></div>
        <div class="orbit-stage__glow orbit-stage__glow--c" aria-hidden="true"></div>

        <button class="orbit-node orbit-node--timeline" type="button" data-home-nav="timeline">
          <span class="orbit-node__icon" aria-hidden="true">${N("timeline")}</span>
          <strong class="orbit-node__title">Timeline</strong>
        </button>

        <button class="orbit-node orbit-node--profile" type="button" data-home-nav="profile">
          <span class="orbit-node__icon" aria-hidden="true">${N("profile")}</span>
          <strong class="orbit-node__title">Profile</strong>
        </button>

        <button class="orbit-node orbit-node--search" type="button" data-home-nav="search">
          <span class="orbit-node__icon" aria-hidden="true">${N("search")}</span>
          <strong class="orbit-node__title">Search</strong>
        </button>

        <button class="orbit-node orbit-node--compose" type="button" data-home-nav="compose">
          <span class="orbit-node__icon" aria-hidden="true">${N("compose")}</span>
          <strong class="orbit-node__title">Post</strong>
        </button>

        <button class="orbit-core orbit-core--button" type="button" data-home-core-toggle aria-label="Reveal hidden home mark">
          <span class="orbit-core__surface">
            <img class="orbit-core__mark" src="image/icon/icon_toka.png" alt="" />
          </span>
        </button>

        <button class="orbit-sheep" type="button" data-home-sheep-toggle aria-label="Return to main page">
          <img class="orbit-sheep__mark" src="image/icon/hitsuji_toka.png" alt="" />
        </button>
      </div>
    </section>
  `}function ni(e,t){var n,u;const i=ei(e,t.timelineTab),o=oi(i);return`
    <section class="page timeline-page">
      <div class="timeline-screen">
        <header class="timeline-screen__chrome">
          <button class="timeline-screen__back" type="button" data-home-nav="home" aria-label="Back to main page">
            <span>${N("arrowLeft")}</span>
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
            style="width:${o.width}px; height:${o.height}px; transform: translate(${((n=t.timelinePan)==null?void 0:n.x)??-360}px, ${((u=t.timelinePan)==null?void 0:u.y)??-220}px);"
          >
            ${o.html}
          </div>
        </div>
      </div>
    </section>
  `}function si(e){const t=[...e.fixedTags||[],...e.freeTags||[]];return t.length?t.map(i=>`<span class="chip chip--soft">${i}</span>`).join(""):'<div class="post-card__tags-empty">No tags yet</div>'}function sa(e,t={}){var m;const{mode:i="full"}=t,o=i!=="compact",n=i==="full",u=i!=="minimal";return`
    <article class="post-card post-card--${i}" data-post-id="${e.id}">
      ${o?`
        <div class="post-card__head">
          <button class="avatar avatar-button" type="button" data-open-author="${e.authorName}" aria-label="Open ${e.authorName} profile">
            ${Xe(e.authorAvatarData,e.authorIcon,`${e.authorName} avatar`)}
          </button>
          <div class="post-card__author-wrap">
            <p class="post-card__author">${e.authorName}</p>
            <p class="post-card__time">${Ca(e.createdAt)}</p>
          </div>
        </div>
      `:""}

      <button class="post-card__image-button" data-open-preview="${e.id}" aria-label="Open post image">
        <img class="post-card__image" src="${e.imageData}" alt="${e.authorName} post" />
      </button>

      ${n?`
        <div class="post-card__caption-row">
          <button class="tag-toggle" data-toggle-tags="${e.id}">${N("tag")} tags</button>
          ${e.caption?`<p class="post-card__caption">${e.caption}</p>`:'<p class="post-card__caption post-card__caption--empty">No caption</p>'}
        </div>

        <div class="post-card__tags" data-tags-panel="${e.id}" hidden>
          ${si(e)}
        </div>
      `:""}

      <div class="post-card__meta">
        ${u?`<span class="post-card__date">${ia(e.createdAt)}</span>`:"<span></span>"}
        <div class="post-card__actions">
          <button class="icon-button ${e.liked?"is-active":""}" data-like="${e.id}" aria-label="Like post">
            ${N("heart")}
            <span>${e.likes}</span>
          </button>
          <button class="icon-button" data-comment="${e.id}" aria-label="Open comments">
            ${N("comment")}
            <span>${((m=e.comments)==null?void 0:m.length)||0}</span>
          </button>
          <button class="icon-button ${e.saved?"is-active":""}" data-save="${e.id}" aria-label="Save post">
            ${N("save")}
            <span>${e.saves}</span>
          </button>
        </div>
      </div>
    </article>
  `}const ra={activity:["ご飯","朝ごはん","ランチ","ディナー","カフェ","散歩","買い物","ドライブ","旅行","イベント"],mood:["まったり","おしゃれ","落ち着く","ロマンチック","ワクワク","にぎやか"],scene:["初デート","休日","昼デート","夜デート","記念日","雨の日"],budget:["低予算","ふつう","ちょっと贅沢"],time:["朝","昼","夕方","夜"]},ri={activity:"デート内容",mood:"雰囲気",scene:"シーン",budget:"予算感",time:"時間帯"},li=Object.values(ra).flat();function ci(e){return li.map(t=>`
    <button class="chip chip--filter ${e.includes(t)?"is-active":""}" data-search-tag="${t}">${t}</button>
  `).join("")}function di(e,t){const i=t.searchTags||[],o=Va(e.posts||[],{query:t.searchQuery||"",tags:i}),n=o.length?`
      <div class="feed-grid">
        ${o.map(u=>sa(u,{mode:"compact"})).join("")}
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
        ${ci(i)}
      </div>

      ${n}
    </section>
  `}const la={id:"page1",label:"Page 1",description:"Template 1",async render(e,t,i,o){const{addWrappedText:n,drawFileCover:u,drawSlotPlaceholder:m,defaults:l}=o,a={x:84,y:84,width:1072,height:1586};e.fillStyle="#191514",e.textBaseline="top";const p={x:a.x+a.width*.55,y:a.y+a.height*.125,width:a.width*.36,height:a.width*.36,radius:0},y={x:a.x+a.width*.08,y:a.y+a.height*.48,width:a.width*.45,height:a.height*.39,radius:0};i.secondary.file?await u(e,i.secondary.file,p,i.secondary.position):m(e,p),i.primary.file?await u(e,i.primary.file,y,i.primary.position):m(e,y),e.font='600 78px "Cormorant Garamond", "Times New Roman", serif',n(e,t.headline||l.headline,{x:a.x+a.width*.07,y:a.y+a.height*.058,maxWidth:a.width*.7,lineHeight:82,maxLines:2}),e.font='500 32px "Noto Sans JP", sans-serif',n(e,t.subhead||l.subhead,{x:a.x+a.width*.07,y:a.y+a.height*.132,maxWidth:a.width*.7,lineHeight:42,maxLines:3}),e.font='500 33px "Noto Sans JP", sans-serif',n(e,t.intro||l.intro,{x:a.x+a.width*.085,y:a.y+a.height*.215,maxWidth:a.width*.37,lineHeight:48,maxLines:4}),e.font='500 31px "Noto Sans JP", sans-serif',n(e,t.body||l.body,{x:a.x+a.width*.585,y:a.y+a.height*.625,maxWidth:a.width*.245,lineHeight:46,maxLines:6}),e.font='500 28px "Noto Sans JP", sans-serif',n(e,t.date||l.date,{x:a.x+a.width*.08,y:a.y+a.height*.895,maxWidth:a.width*.31,lineHeight:34,maxLines:1});const S=t.editor||l.editor,E=a.width*.32,P=a.x+a.width*.92-Math.min(E,e.measureText(S).width);n(e,S,{x:P,y:a.y+a.height*.895,maxWidth:E,lineHeight:34,maxLines:1})}},mi={id:"page2",label:"Page 2",description:"Template 2",async render(e,t,i,o){const{addWrappedText:n,clipRoundedRect:u,drawFileCover:m,drawSlotPlaceholder:l,defaults:a}=o,p={x:84,y:84,width:1072,height:1586};e.fillStyle="#191514",e.textBaseline="top";const y={x:p.x+p.width*.138,y:p.y+p.height*.142,width:p.width*.724,height:p.height*.374,radius:0};i.primary.file?await m(e,i.primary.file,y,i.primary.position):l(e,y),e.font='600 60px "Cormorant Garamond", "Times New Roman", serif',n(e,t.headline||a.headline,{x:p.x+p.width*.142,y:p.y+p.height*.565,maxWidth:p.width*.66,lineHeight:66,maxLines:2}),e.font='500 30px "Noto Sans JP", sans-serif',n(e,t.subhead||a.subhead,{x:p.x+p.width*.142,y:p.y+p.height*.634,maxWidth:p.width*.68,lineHeight:40,maxLines:2}),e.font='500 28px "Noto Sans JP", sans-serif',n(e,t.intro||a.intro,{x:p.x+p.width*.142,y:p.y+p.height*.698,maxWidth:p.width*.66,lineHeight:38,maxLines:4}),e.font='500 28px "Noto Sans JP", sans-serif',n(e,t.body||a.body,{x:p.x+p.width*.142,y:p.y+p.height*.792,maxWidth:p.width*.66,lineHeight:38,maxLines:4}),e.font='500 24px "Noto Sans JP", sans-serif',n(e,t.date||a.date,{x:p.x+p.width*.142,y:p.y+p.height*.948,maxWidth:p.width*.28,lineHeight:30,maxLines:1});const S=t.editor||a.editor;e.font='500 24px "Noto Sans JP", sans-serif';const E=p.width*.28,P=p.x+p.width*.86-Math.min(E,e.measureText(S).width);n(e,S,{x:P,y:p.y+p.height*.948,maxWidth:E,lineHeight:30,maxLines:1})}},pi={id:"page3",label:"Page 3",description:"Template 3",async render(e,t,i,o){const{addWrappedText:n,drawFileCover:u,drawSlotPlaceholder:m,defaults:l}=o,a={x:84,y:84,width:1072,height:1586};e.fillStyle="#191514",e.textBaseline="top";const p={x:a.x+a.width*.14,y:a.y+a.height*.22,width:a.width*.58,height:a.height*.36,radius:0},y={x:a.x+a.width*.74,y:a.y+a.height*.72,width:a.width*.14,height:a.height*.15,radius:0};i.primary.file?await u(e,i.primary.file,p,i.primary.position):m(e,p),i.secondary.file?await u(e,i.secondary.file,y,i.secondary.position):m(e,y),e.font='600 58px "Cormorant Garamond", "Times New Roman", serif',n(e,t.headline||l.headline,{x:a.x+a.width*.12,y:a.y+a.height*.075,maxWidth:a.width*.66,lineHeight:64,maxLines:2}),e.font='500 28px "Noto Sans JP", sans-serif',n(e,t.subhead||l.subhead,{x:a.x+a.width*.12,y:a.y+a.height*.145,maxWidth:a.width*.66,lineHeight:36,maxLines:2}),e.font='500 26px "Noto Sans JP", sans-serif',n(e,t.intro||l.intro,{x:a.x+a.width*.13,y:a.y+a.height*.675,maxWidth:a.width*.32,lineHeight:34,maxLines:4}),e.font='500 26px "Noto Sans JP", sans-serif',n(e,t.body||l.body,{x:a.x+a.width*.13,y:a.y+a.height*.79,maxWidth:a.width*.32,lineHeight:34,maxLines:3}),e.font='500 24px "Noto Sans JP", sans-serif',n(e,t.date||l.date,{x:a.x+a.width*.13,y:a.y+a.height*.915,maxWidth:a.width*.2,lineHeight:30,maxLines:1});const S=t.editor||l.editor,E=a.width*.16,P=a.x+a.width*.9-Math.min(E,e.measureText(S).width);n(e,S,{x:P,y:a.y+a.height*.915,maxWidth:E,lineHeight:30,maxLines:1})}},ui={id:"page4",label:"Page 4",description:"Template 4",async render(e,t,i,o){const{addWrappedText:n,drawFileCover:u,drawSlotPlaceholder:m,defaults:l}=o,a={x:84,y:84,width:1072,height:1586};e.fillStyle="#191514",e.textBaseline="top";const p={x:a.x+a.width*.11,y:a.y+a.height*.59,width:a.width*.34,height:a.height*.25,radius:0},y={x:a.x+a.width*.59,y:a.y+a.height*.13,width:a.width*.24,height:a.height*.29,radius:0};i.primary.file?await u(e,i.primary.file,p,i.primary.position):m(e,p),i.secondary.file?await u(e,i.secondary.file,y,i.secondary.position):m(e,y),e.font='600 52px "Cormorant Garamond", "Times New Roman", serif',n(e,t.headline||l.headline,{x:a.x+a.width*.11,y:a.y+a.height*.11,maxWidth:a.width*.28,lineHeight:58,maxLines:2}),e.font='500 27px "Noto Sans JP", sans-serif',n(e,t.subhead||l.subhead,{x:a.x+a.width*.11,y:a.y+a.height*.205,maxWidth:a.width*.28,lineHeight:34,maxLines:2}),e.font='500 26px "Noto Sans JP", sans-serif',n(e,t.intro||l.intro,{x:a.x+a.width*.11,y:a.y+a.height*.295,maxWidth:a.width*.28,lineHeight:34,maxLines:4}),e.font='500 26px "Noto Sans JP", sans-serif',n(e,t.body||l.body,{x:a.x+a.width*.58,y:a.y+a.height*.55,maxWidth:a.width*.2,lineHeight:34,maxLines:4}),e.font='500 24px "Noto Sans JP", sans-serif',n(e,t.date||l.date,{x:a.x+a.width*.58,y:a.y+a.height*.87,maxWidth:a.width*.14,lineHeight:30,maxLines:1});const S=t.editor||l.editor,E=a.width*.15,P=a.x+a.width*.88-Math.min(E,e.measureText(S).width);n(e,S,{x:P,y:a.y+a.height*.87,maxWidth:E,lineHeight:30,maxLines:1})}},hi={id:"page5",label:"Page 5",description:"Template 5",async render(e,t,i,o){const{addWrappedText:n,drawFileCover:u,drawSlotPlaceholder:m,defaults:l}=o,a={x:84,y:84,width:1072,height:1586};e.fillStyle="#191514",e.textBaseline="top";const p={x:a.x+a.width*.49,y:a.y+a.height*.12,width:a.width*.34,height:a.height*.42,radius:0},y={x:a.x+a.width*.12,y:a.y+a.height*.74,width:a.width*.25,height:a.height*.16,radius:0};i.primary.file?await u(e,i.primary.file,p,i.primary.position):m(e,p),i.secondary.file?await u(e,i.secondary.file,y,i.secondary.position):m(e,y),e.font='600 50px "Cormorant Garamond", "Times New Roman", serif',n(e,t.headline||l.headline,{x:a.x+a.width*.12,y:a.y+a.height*.12,maxWidth:a.width*.21,lineHeight:54,maxLines:3}),e.font='500 26px "Noto Sans JP", sans-serif',n(e,t.subhead||l.subhead,{x:a.x+a.width*.12,y:a.y+a.height*.265,maxWidth:a.width*.21,lineHeight:34,maxLines:3}),e.font='500 26px "Noto Sans JP", sans-serif',n(e,t.intro||l.intro,{x:a.x+a.width*.12,y:a.y+a.height*.42,maxWidth:a.width*.21,lineHeight:34,maxLines:5}),e.font='500 26px "Noto Sans JP", sans-serif',n(e,t.body||l.body,{x:a.x+a.width*.51,y:a.y+a.height*.69,maxWidth:a.width*.24,lineHeight:34,maxLines:4}),e.font='500 24px "Noto Sans JP", sans-serif',n(e,t.date||l.date,{x:a.x+a.width*.51,y:a.y+a.height*.89,maxWidth:a.width*.14,lineHeight:30,maxLines:1});const S=t.editor||l.editor,E=a.width*.15,P=a.x+a.width*.88-Math.min(E,e.measureText(S).width);n(e,S,{x:P,y:a.y+a.height*.89,maxWidth:E,lineHeight:30,maxLines:1})}},gi={id:"page6",label:"Page 6",description:"Template 6",async render(e,t,i,o){var k;const{addWrappedText:n,drawFileCover:u,drawSlotPlaceholder:m,defaults:l}=o,a={x:84,y:84,width:1072,height:1586};e.fillStyle="#191514",e.textBaseline="top";const p={x:a.x+a.width*.2,y:a.y+a.height*.3,width:a.width*.46,height:a.height*.36,radius:0},y={x:a.x+a.width*.12,y:a.y+a.height*.075,width:a.width*.2,height:a.height*.14,radius:0},S={x:a.x+a.width*.69,y:a.y+a.height*.8,width:a.width*.15,height:a.height*.1,radius:0};i.primary.file?await u(e,i.primary.file,p,i.primary.position):m(e,p),i.secondary.file?await u(e,i.secondary.file,y,i.secondary.position):m(e,y),(k=i.accent)!=null&&k.file?await u(e,i.accent.file,S,i.accent.position):m(e,S),e.font='600 48px "Cormorant Garamond", "Times New Roman", serif',n(e,t.headline||l.headline,{x:a.x+a.width*.5,y:a.y+a.height*.1,maxWidth:a.width*.2,lineHeight:52,maxLines:2}),e.font='500 26px "Noto Sans JP", sans-serif',n(e,t.subhead||l.subhead,{x:a.x+a.width*.5,y:a.y+a.height*.18,maxWidth:a.width*.2,lineHeight:34,maxLines:3}),e.font='500 26px "Noto Sans JP", sans-serif',n(e,t.intro||l.intro,{x:a.x+a.width*.12,y:a.y+a.height*.74,maxWidth:a.width*.22,lineHeight:34,maxLines:4}),e.font='500 26px "Noto Sans JP", sans-serif',n(e,t.body||l.body,{x:a.x+a.width*.44,y:a.y+a.height*.74,maxWidth:a.width*.14,lineHeight:34,maxLines:4}),e.font='500 24px "Noto Sans JP", sans-serif',n(e,t.date||l.date,{x:a.x+a.width*.12,y:a.y+a.height*.905,maxWidth:a.width*.16,lineHeight:30,maxLines:1});const E=t.editor||l.editor,P=a.width*.14,B=a.x+a.width*.88-Math.min(P,e.measureText(E).width);n(e,E,{x:B,y:a.y+a.height*.905,maxWidth:P,lineHeight:30,maxLines:1})}},fi={id:"page7",label:"Page 7",description:"Template 7",async render(e,t,i,o){var k;const{addWrappedText:n,drawFileCover:u,drawSlotPlaceholder:m,defaults:l}=o,a={x:84,y:84,width:1072,height:1586};e.fillStyle="#191514",e.textBaseline="top";const p={x:a.x+a.width*.12,y:a.y+a.height*.15,width:a.width*.3,height:a.height*.18,radius:0},y={x:a.x+a.width*.56,y:a.y+a.height*.48,width:a.width*.3,height:a.height*.18,radius:0},S={x:a.x+a.width*.12,y:a.y+a.height*.75,width:a.width*.3,height:a.height*.18,radius:0};i.primary.file?await u(e,i.primary.file,p,i.primary.position):m(e,p),i.secondary.file?await u(e,i.secondary.file,y,i.secondary.position):m(e,y),(k=i.accent)!=null&&k.file?await u(e,i.accent.file,S,i.accent.position):m(e,S),e.font='600 44px "Cormorant Garamond", "Times New Roman", serif',n(e,t.headline||l.headline,{x:a.x+a.width*.58,y:a.y+a.height*.16,maxWidth:a.width*.19,lineHeight:48,maxLines:2}),e.font='500 25px "Noto Sans JP", sans-serif',n(e,t.subhead||l.subhead,{x:a.x+a.width*.58,y:a.y+a.height*.245,maxWidth:a.width*.19,lineHeight:32,maxLines:3}),e.font='500 25px "Noto Sans JP", sans-serif',n(e,t.intro||l.intro,{x:a.x+a.width*.15,y:a.y+a.height*.41,maxWidth:a.width*.2,lineHeight:32,maxLines:4}),e.font='500 25px "Noto Sans JP", sans-serif',n(e,t.body||l.body,{x:a.x+a.width*.59,y:a.y+a.height*.77,maxWidth:a.width*.19,lineHeight:32,maxLines:4}),e.font='500 24px "Noto Sans JP", sans-serif',n(e,t.date||l.date,{x:a.x+a.width*.58,y:a.y+a.height*.91,maxWidth:a.width*.12,lineHeight:30,maxLines:1});const E=t.editor||l.editor,P=a.width*.14,B=a.x+a.width*.88-Math.min(P,e.measureText(E).width);n(e,E,{x:B,y:a.y+a.height*.91,maxWidth:P,lineHeight:30,maxLines:1})}},q={x:.06,y:.06,width:.88,height:.88},Oe=.015,Kt={densityMode:"whitespace",recoveryMode:"restore"},_t={width:.14,height:.12},Ne={width:.18,height:.08},yi={primary:{x:.08,y:.16,width:.4,height:.3},secondary:{x:.58,y:.12,width:.24,height:.2},accent:{x:.56,y:.58,width:.26,height:.18}},bi={headline:{x:.08,y:.07,width:.46,height:.1,fontSize:.056,lineHeight:1.08,align:"left",family:"serif",weight:600},subhead:{x:.08,y:.16,width:.48,height:.07,fontSize:.023,lineHeight:1.34,align:"left",family:"sans",weight:500},intro:{x:.08,y:.52,width:.28,height:.18,fontSize:.021,lineHeight:1.42,align:"left",family:"sans",weight:500},body:{x:.62,y:.42,width:.22,height:.24,fontSize:.021,lineHeight:1.42,align:"left",family:"sans",weight:500},date:{x:.08,y:.91,width:.22,height:.04,fontSize:.019,lineHeight:1.25,align:"left",family:"sans",weight:500},editor:{x:.66,y:.91,width:.2,height:.04,fontSize:.019,lineHeight:1.25,align:"right",family:"sans",weight:500}},vi=[{id:"image-1",x:.1,y:.14,width:.38,height:.34}];function Pe(e,t,i){return Math.min(i,Math.max(t,e))}function Ve(e){return Math.round(e/Oe)*Oe}function ca(e,t,i){return typeof t=="string"&&t.trim()?t.trim():`${e}-${i+1}`}function Lt(e,t=""){return String(e??t).replace(/\r/g,"")}function da(e,t){const i=Pe(Ve(Number.isFinite(e.width)?e.width:t.width),t.width,q.width),o=Pe(Ve(Number.isFinite(e.height)?e.height:t.height),t.height,q.height);return{x:Pe(Ve(Number.isFinite(e.x)?e.x:q.x),q.x,q.x+q.width-i),y:Pe(Ve(Number.isFinite(e.y)?e.y:q.y),q.y,q.y+q.height-o),width:i,height:o}}function yt(e={},t=0){return{id:ca("image",e.id,t),...da(e,_t)}}function St(e={},t=0){const i=typeof e.text=="string",o=e.kind==="title"||e.kind==="body"?e.kind:(Number(e.fontSize)||0)>=.04||e.family==="serif"?"title":"body";return{id:ca("text",e.id,t),kind:o,text:Lt(e.text,"text"),isDefaultText:typeof e.isDefaultText=="boolean"?e.isDefaultText:!i,...da(e,Ne),fontSize:Pe(Number.isFinite(e.fontSize)?e.fontSize:.028,.014,.09),lineHeight:Pe(Number.isFinite(e.lineHeight)?e.lineHeight:1.35,1,2.2),padding:Pe(Number.isFinite(e.padding)?e.padding:.012,.004,.05),align:e.align==="center"||e.align==="right"?e.align:"left",family:e.family==="serif"?"serif":"sans",weight:Pe(Number.isFinite(e.weight)?e.weight:e.family==="serif"?600:500,400,700)}}function xi(e={}){return Object.entries(bi).map(([t,i],o)=>St({id:`text-${o+1}`,text:Lt(e[t],""),x:i.x,y:i.y,width:i.width,height:i.height,fontSize:i.fontSize,lineHeight:i.lineHeight,padding:i.family==="serif"?.01:.012,align:i.align,kind:i.family==="serif"&&i.fontSize>=.04?"title":"body",family:i.family,weight:i.weight},o)).filter(t=>t.text.trim())}function ma(e={}){return{densityMode:e.densityMode==="fill"?"fill":Kt.densityMode,recoveryMode:e.recoveryMode==="keep"?"keep":Kt.recoveryMode}}function $t(e={}){return Array.isArray(e.imageBoxes)&&e.imageBoxes.length?e.imageBoxes.map((t,i)=>yt(t,i)):e.imageBoxes&&typeof e.imageBoxes=="object"?Object.entries(yi).map(([t,i],o)=>{var u;const n=((u=e.imageBoxes)==null?void 0:u[t])||{};return yt({id:t,x:Number.isFinite(n.x)?n.x:i.x,y:Number.isFinite(n.y)?n.y:i.y,width:Number.isFinite(n.width)?n.width:i.width,height:Number.isFinite(n.height)?n.height:i.height},o)}):vi.map((t,i)=>yt(t,i))}function kt(e={},t={}){if(Array.isArray(e.textBoxes)&&e.textBoxes.length)return e.textBoxes.map((n,u)=>St(n,u));const i=!!(e.imageBoxes&&!Array.isArray(e.imageBoxes)&&typeof e.imageBoxes=="object"),o=xi(t);return i&&o.length?o:[St({id:"text-1",text:Lt(t.headline,"text"),isDefaultText:!t.headline,x:.56,y:.18,width:.24,height:.14,kind:"title",fontSize:.046,lineHeight:1.12,padding:.01,family:"serif",weight:600},0)]}function wi(e={},t={}){return{options:ma(e),imageBoxes:$t(e),textBoxes:kt(e,t)}}function bt(e){return{left:`${e.x*100}%`,top:`${e.y*100}%`,width:`${e.width*100}%`,height:`${e.height*100}%`}}function ea(e,t){return{x:e.x+e.width*t.x,y:e.y+e.height*t.y,width:e.width*t.width,height:e.height*t.height,radius:0}}function Le(e){return Ve(e)}const _i={id:"page8",label:"Page 8",description:"Custom free layout",async render(e,t,i,o){var y,S,E,P,B,k,Y,H,w,G,ue,de;const{addWrappedText:n,drawFileCover:u}=o,m={x:84,y:84,width:1072,height:1586},l=wi(t.customLayout||{},t),a=Array.isArray((y=t.customLayout)==null?void 0:y.pretextBoxes)?t.customLayout.pretextBoxes:null;e.fillStyle="#191514",e.textBaseline="top";const p=o.page8Files||{};if(((S=t.customLayout)==null?void 0:S.editorType)==="pretext"&&a){for(const L of a){const W={x:m.x+L.x/794*m.width,y:m.y+L.y/1123*m.height,width:L.width/794*m.width,height:L.height/1123*m.height,radius:0};if(L.kind==="image"){(E=L.data)!=null&&E.src&&await u(e,L.data.src,W,{cropX:Number(L.data.cropX)||0,cropY:Number(L.data.cropY)||0,zoom:Math.max(1,Number(L.data.zoom)||1)});continue}const F=Math.max(0,Number((P=L.data)==null?void 0:P.padding)||0),C=Math.max(12,Number((B=L.data)==null?void 0:B.lineHeight)||34);e.textAlign=((k=L.data)==null?void 0:k.align)||"left",e.fillStyle=((Y=L.data)==null?void 0:Y.color)||"#191514",e.font=`${Number((H=L.data)==null?void 0:H.fontWeight)||400} ${Math.max(12,Number((w=L.data)==null?void 0:w.fontSize)||22)}px ${((G=L.data)==null?void 0:G.fontFamily)||'"Noto Sans JP", sans-serif'}`;const Q=e.textAlign==="right"?W.x+W.width-F:e.textAlign==="center"?W.x+W.width/2:W.x+F;n(e,((ue=L.data)==null?void 0:ue.text)||"",{x:Q,y:W.y+F,maxWidth:Math.max(24,W.width-F*2),lineHeight:C,maxLines:Math.max(1,Math.floor(Math.max(C,W.height-F*2)/C))})}return}for(const O of l.imageBoxes){const T=ea(m,O);(de=p[O.id])!=null&&de.file&&await u(e,p[O.id].file,T,p[O.id].position)}l.textBoxes.forEach(O=>{const T=ea(m,O),L=Math.max(0,m.width*(O.padding||0)),W=O.family==="serif"?'"Cormorant Garamond", "Times New Roman", serif':'"Noto Sans JP", sans-serif';e.textAlign=O.align,e.font=`${O.weight} ${Math.round(m.width*O.fontSize)}px ${W}`;const F=O.align==="right"?T.x+T.width-L:O.align==="center"?T.x+T.width/2:T.x+L,C=Math.max(24,T.width-L*2),Q=m.width*O.fontSize*O.lineHeight,_e=Math.max(Q,T.height-L*2);n(e,O.text||"",{x:F,y:T.y+L,maxWidth:C,lineHeight:Q,maxLines:Math.max(1,Math.floor(_e/Math.max(12,Q)))})})}},pa=[la,mi,pi,ui,hi,gi,fi,_i],xe=la.id,ta=new Map(pa.map(e=>[e.id,e]));function Si(e){return ta.get(e)||ta.get(xe)}const $i=[{value:"#f8f4ee",label:"Ivory"},{value:"#f4e5de",label:"Blush"},{value:"#ece4d8",label:"Sand"},{value:"#e5ece7",label:"Sage"}];function It(e){return`
    <button class="button button--ghost page-back page-back--icon" type="button" ${e} aria-label="Back">
      ${N("returnLeft")}
    </button>
  `}function ki(){return`
    <div class="compose-header-add" data-pretext-add>
      <button
        class="button button--ghost page-back page-back--icon compose-add-button"
        type="button"
        data-pretext-add-toggle
        aria-label="Add layout element"
        aria-haspopup="true"
        aria-expanded="false"
      >
        ${N("compose")}
      </button>
      <div class="compose-header-add__popover" data-pretext-add-popover hidden>
        <div class="compose-header-add__row">
          <span class="compose-header-add__label">Title</span>
          <div class="compose-header-add__align">
            <button type="button" class="compose-header-add__option" data-pretext-add-kind="title" data-pretext-add-align="left" aria-label="Add left aligned title">${N("alignLeft")}</button>
            <button type="button" class="compose-header-add__option" data-pretext-add-kind="title" data-pretext-add-align="center" aria-label="Add centered title">${N("alignCenter")}</button>
            <button type="button" class="compose-header-add__option" data-pretext-add-kind="title" data-pretext-add-align="right" aria-label="Add right aligned title">${N("alignRight")}</button>
          </div>
        </div>
        <div class="compose-header-add__row">
          <span class="compose-header-add__label">Body</span>
          <div class="compose-header-add__align">
            <button type="button" class="compose-header-add__option" data-pretext-add-kind="body" data-pretext-add-align="left" aria-label="Add left aligned body">${N("alignLeft")}</button>
            <button type="button" class="compose-header-add__option" data-pretext-add-kind="body" data-pretext-add-align="center" aria-label="Add centered body">${N("alignCenter")}</button>
            <button type="button" class="compose-header-add__option" data-pretext-add-kind="body" data-pretext-add-align="right" aria-label="Add right aligned body">${N("alignRight")}</button>
          </div>
        </div>
        <div class="compose-header-add__row compose-header-add__row--image">
          <span class="compose-header-add__label">Image</span>
          <button type="button" class="compose-header-add__image" data-pretext-add-kind="image">
            ${N("image")}
            <span>Image</span>
          </button>
        </div>
      </div>
    </div>
  `}function Ti(e,t,i=[]){return`
    <section class="compose-group compose-group--tags">
      <div class="compose-group__head">
        <h3>${ri[e]}</h3>
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
  `}function ua(e=xe){return`
    <div class="template-carousel">
      <button class="template-carousel__nav" type="button" data-template-carousel-nav="prev" aria-label="Previous template">&larr;</button>
      <div class="template-carousel__viewport" data-template-carousel>
        <div class="template-thumb-track">
          ${pa.map(t=>`
            <label class="template-thumb ${e===t.id?"is-active":""}">
              <input type="radio" name="templateId" value="${t.id}" ${e===t.id?"checked":""} />
              <span class="template-thumb__preview template-option__preview template-option__preview--${t.id}" aria-hidden="true"></span>
            </label>
          `).join("")}
        </div>
      </div>
      <button class="template-carousel__nav" type="button" data-template-carousel-nav="next" aria-label="Next template">&rarr;</button>
    </div>
  `}function ha(e){return`
    <div class="color-picker-inline">
      <div class="color-chip-track color-chip-track--inline" data-color-carousel>
        ${$i.map(t=>`
          <label class="color-chip color-chip--inline ${e===t.value?"is-active":""}" title="${t.label}">
            <input type="radio" name="backgroundColor" value="${t.value}" ${e===t.value?"checked":""} />
            <span class="color-chip__swatch" style="--swatch:${t.value}"></span>
            <span class="color-chip__label">${t.label}</span>
          </label>
        `).join("")}
      </div>
    </div>
  `}function vt({id:e,slotClass:t}){return`
    <div class="compose-slot ${t}" data-slot="${e}">
      <input class="field__file" id="${e}" type="file" accept="image/*" />
      <label class="compose-slot__surface" for="${e}">
        <div class="compose-slot__image" data-slot-image="${e}" hidden></div>
        <div class="compose-slot__placeholder" data-slot-placeholder="${e}">
          <span class="compose-slot__plus">${N("compose")}</span>
        </div>
      </label>
      <button class="compose-slot__remove" type="button" data-slot-remove="${e}" hidden aria-label="remove image">&times;</button>
    </div>
  `}function xt(e){return`
    <div class="compose-slot ${e}">
      <div class="compose-slot__surface">
        <div class="compose-slot__placeholder">
          <span class="compose-slot__plus">${N("compose")}</span>
        </div>
      </div>
    </div>
  `}function ga(e,t,i,o={}){const{editable:n=!1,interactiveSlots:u=!1}=o,m=t==="page8",l=n?"compose-sheet":"compose-sheet compose-sheet--locked",a=m?`${l} compose-sheet--custom`:l,p=n?"true":"false";return m?`
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
          contenteditable="${p}"
          spellcheck="false"
        >${e.headline}</div>
        <div
          class="compose-sheet__subhead compose-editable"
          data-editable="subhead"
          data-placeholder="subhead"
          data-max-chars="56"
          data-single-line="true"
          contenteditable="${p}"
          spellcheck="false"
        >${e.subhead}</div>
        <div
          class="compose-sheet__notes compose-editable"
          data-editable="intro"
          data-placeholder="notes"
          data-max-chars="72"
          contenteditable="${p}"
          spellcheck="false"
        >${e.intro}</div>
        ${u?vt({id:"imageInputSecondary",slotClass:"compose-slot--secondary"}):xt("compose-slot--secondary")}
        ${u?vt({id:"imageInputAccent",slotClass:"compose-slot--accent"}):xt("compose-slot--accent")}
        ${u?vt({id:"imageInputPrimary",slotClass:"compose-slot--primary"}):xt("compose-slot--primary")}
        <div
          class="compose-sheet__body compose-editable"
          data-editable="body"
          data-placeholder="body"
          data-max-chars="120"
          contenteditable="${p}"
          spellcheck="false"
        >${e.body}</div>
        <div
          class="compose-sheet__date compose-editable"
          data-editable="date"
          data-placeholder="date"
          data-max-chars="18"
          data-single-line="true"
          contenteditable="${p}"
          spellcheck="false"
        >${e.date}</div>
        <div
          class="compose-sheet__editor compose-editable"
          data-editable="editor"
          data-placeholder="editor"
          data-max-chars="24"
          data-single-line="true"
          contenteditable="${p}"
          spellcheck="false"
        >${e.editor}</div>
      </div>
    </div>
  `}function Mi(e,t){return`
    <section class="compose-group compose-group--tags-stage">
      <div class="compose-group__head">
        <h3>Tags</h3>
      </div>
      ${Object.entries(ra).map(([i,o])=>Ti(i,o,e)).join("")}
      <section class="compose-group compose-group--tags compose-group--tags-nested">
        <div class="compose-group__head">
          <h3>Free Tags</h3>
        </div>
        <label class="field">
          <input class="field__input" type="text" name="freeTags" placeholder="cafe, spring, film" value="${t}" />
        </label>
      </section>
    </section>
  `}function Li({values:e,selectedId:t,selectedBackground:i,headerMini:o,headerTitle:n}){return`
    <section class="page page--compose page--compose--select" data-compose-stage="select">
      <header class="page-header page-header--with-back page-header--compose">
        ${It("data-close-compose")}
        <div>
          <p class="page-header__mini">${o}</p>
          <h2 class="page-header__title">${n}</h2>
        </div>
      </header>

      <section class="compose-select-shell">
        <section class="compose-preview compose-preview--select">
          ${ga(e,t,i,{editable:!1,interactiveSlots:!1})}
        </section>

        <section class="compose-group compose-group--template compose-group--template-select">
          <div class="compose-group__head compose-group__head--template compose-group__head--template-select">
            <h3>Template</h3>
            ${ha(i)}
            <button class="button button--primary compose-confirm-button" type="button" data-compose-stage-nav="edit">編集する</button>
          </div>
          ${ua(t)}
        </section>
      </section>
    </section>
  `}function Ii({values:e,selectedId:t,selectedBackground:i,isEditing:o,headerMini:n,headerTitle:u}){return`
    <section class="page page--compose page--compose--edit" data-compose-stage="edit">
      <header class="page-header page-header--with-back page-header--compose">
        <div class="page-header__actions page-header__actions--compose">
          ${It('data-compose-stage-nav="select"')}
          ${t==="page8"?ki():""}
        </div>
        <div>
          <p class="page-header__mini">${n}</p>
          <h2 class="page-header__title">${u}</h2>
        </div>
      </header>

      <form class="compose-form compose-form--edit" id="composeForm">
        <section class="compose-editor compose-editor--focus ${t==="page8"?"compose-editor--page8":""}">
          <section class="compose-preview compose-preview--editor ${t==="page8"?"compose-preview--page8":""}">
            ${t==="page8"?`
                <div class="compose-pretext-host-shell compose-pretext-host-shell--page8">
                  <div class="compose-pretext-host" data-compose-pretext-host></div>
                </div>
              `:ga(e,t,i,{editable:!0,interactiveSlots:!0})}
          </section>
        </section>
        <div class="compose-flow-actions compose-flow-actions--editor">
          <button class="button button--primary compose-submit-button ${t==="page8"?"compose-submit-button--page8":""}" type="button" data-compose-stage-nav="tags">${o?"Update Tags":"タグへ進む"}</button>
        </div>
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
  `}function Pi({selectedId:e,selectedBackground:t,selectedFixedTags:i,freeTagsValue:o,submitLabel:n,isEditing:u,headerMini:m,headerTitle:l}){return`
    <section class="page page--compose page--compose--tags" data-compose-stage="tags">
      <header class="page-header page-header--with-back page-header--compose">
        ${It('data-compose-stage-nav="edit"')}
        <div>
          <p class="page-header__mini">${m}</p>
          <h2 class="page-header__title">${l}</h2>
        </div>
      </header>

      <form class="compose-form compose-form--tags" id="composeForm">
        <section class="compose-tag-stage">
          <section class="compose-group compose-group--template compose-group--template-summary">
            <div class="compose-group__head compose-group__head--template">
              <h3>Template</h3>
              ${ha(t)}
            </div>
            ${ua(e)}
          </section>
          ${Mi(i,o)}
        </section>
        <div class="compose-flow-actions">
          <button class="button button--ghost compose-stage-back" type="button" data-compose-stage-nav="edit">Edit</button>
          <button class="button button--primary compose-submit-button" type="submit">${n}</button>
        </div>
      </form>
    </section>
  `}function Ei(e=xe){const t=typeof e=="object"?e:{selectedTemplateId:e},i=t.draft||{},o={headline:i.headline||"text",subhead:i.subhead||"text",intro:i.intro||"text",body:i.body||"text",date:i.date||"text",editor:i.editor||"編集者：haru"},n=t.selectedTemplateId||i.templateId||xe,u=t.selectedBackground||i.backgroundColor||"#f8f4ee",m=Array.isArray(i.fixedTags)?i.fixedTags:[],l=Array.isArray(i.freeTags)?i.freeTags.join(", "):i.freeTags||"",a=t.isEditing?"Update Post":"Post This Layout",p=t.isEditing?"post editor":"template editor",y=t.isEditing?"Edit Post":"Compose",S=t.stage||"select";return S==="select"?Li({values:o,selectedId:n,selectedBackground:u,headerMini:p,headerTitle:y}):S==="tags"?Pi({selectedId:n,selectedBackground:u,selectedFixedTags:m,freeTagsValue:l,submitLabel:a,isEditing:!!t.isEditing,headerMini:p,headerTitle:y}):Ii({values:o,selectedId:n,selectedBackground:u,isEditing:!!t.isEditing,headerMini:p,headerTitle:y})}function Ci(e){return e.length?e.map(t=>`
    <label class="issue-post-option">
      <input type="checkbox" name="issuePostIds" value="${t.id}" />
      <img src="${t.imageData}" alt="${t.authorName}の投稿画像" />
      <div class="issue-post-option__meta">
        <strong>${t.authorName}</strong>
        <span>${ia(t.createdAt)}</span>
      </div>
    </label>
  `).join(""):`
      <section class="empty-panel">
        <p class="empty-panel__title">まだまとめる投稿がありません</p>
        <p class="empty-panel__copy">先に投稿を作ると、ここで選んで一冊の下書きにできます。</p>
      </section>
    `}function Ai(e,t){return e.length?e.map(i=>{const o=t.filter(n=>i.postIds.includes(n.id));return`
      <article class="issue-card issue-card--${i.tone}">
        <p class="issue-card__eyebrow">memories issue</p>
        <h3 class="issue-card__title">${i.title}</h3>
        <p class="issue-card__subtitle">${i.subtitle||"sub title free"}</p>
        <div class="issue-card__count">${o.length} posts selected</div>
        <div class="issue-card__thumbs">
          ${o.slice(0,3).map(n=>`<img src="${n.imageData}" alt="${n.authorName}の投稿画像" />`).join("")}
        </div>
      </article>
    `}).join(""):'<p class="empty-copy">まだ雑誌の下書きはありません。</p>'}function Bi(e){return`
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
            ${Ci(e.posts||[])}
          </div>
        </section>

        <button class="button button--primary button--full" type="submit">下書きを保存</button>
      </form>

      <section class="section-block">
        <div class="section-head">
          <h3>保存済みの雑誌下書き</h3>
        </div>
        <div class="issue-list">
          ${Ai(e.issues||[],e.posts||[])}
        </div>
      </section>
    </section>
  `}function fa(e){return[...new Set(e.map(t=>t.authorName))]}function ya(e){return`@${String(e||"user").trim().replace(/\s+/g,"_").toLowerCase()}`}function lt(e,t){return e.length?`
    <div class="feed-grid feed-grid--single">
      ${e.map(i=>sa(i,{mode:"minimal"})).join("")}
    </div>
  `:`<p class="empty-copy">${t}</p>`}function Ni(e,t){return e.length?`
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
  `:'<p class="empty-copy">Saved magazine issues will appear here.</p>'}function Di(e,t,i){const o=e.posts.filter(H=>H.authorName===e.profile.name),n=e.posts.filter(H=>H.liked),u=e.posts.filter(H=>H.saved),m=e.issues||[],l=e.followingAuthors,a=i.filter(H=>H!==e.profile.name),p=t.profileSection||"identity",y=t.profileLibraryTab||"liked",S=!!t.profileAvatarCropOpen,E=ya(e.profile.name),B={identity:{label:"Name / ID",value:`<span class="profile-node__avatar">${Xe(e.profile.avatarData,(e.profile.name||"Y").slice(0,1).toUpperCase(),`${e.profile.name} avatar`)}</span>`,angle:0,centerLabel:""},library:{label:"Likes / Saved",value:`<span class="profile-node__icon-pair">${N("heart")}${N("save")}</span>`,angle:60},edit:{label:"Edit",value:"profile",angle:120},posts:{label:"Posts",value:String(o.length),angle:180},magazine:{label:"Magazine",value:String(m.length),angle:240},network:{label:"Follow / Follower",value:`${l.length} / ${a.length}`,angle:300}},k=B[p]||B.identity;function Y(){switch(p){case"identity":return`
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
                <strong>${E}</strong>
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
                  ${l.length?l.map(H=>`
                    <article class="follow-item">
                      <div class="follow-item__main">
                        <div class="avatar">${H.slice(0,1).toUpperCase()}</div>
                        <span>${H}</span>
                      </div>
                      <button class="button button--ghost is-active" type="button" data-follow-author="${H}">Following</button>
                    </article>
                  `).join(""):'<p class="empty-copy">No following yet.</p>'}
                </div>
              </section>
              <section class="profile-library-block">
                <p class="profile-column-title">Followers ${a.length}</p>
                <div class="follow-list">
                  ${a.length?a.map(H=>`
                    <article class="follow-item">
                      <div class="follow-item__main">
                        <div class="avatar">${H.slice(0,1).toUpperCase()}</div>
                        <span>${H}</span>
                      </div>
                      <button class="button button--ghost" type="button" data-open-author="${H}">View</button>
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
              <button class="profile-library-tab ${y==="liked"?"is-active":""}" type="button" data-profile-library-tab="liked" aria-pressed="${y==="liked"?"true":"false"}">${N("heart")}<span>Like</span></button>
              <button class="profile-library-tab ${y==="saved"?"is-active":""}" type="button" data-profile-library-tab="saved" aria-pressed="${y==="saved"?"true":"false"}">${N("save")}<span>Save</span></button>
            </div>
            <section class="profile-library-panel">
              <p class="profile-column-title">${y==="liked"?"Liked Posts":"Saved Posts"}</p>
              ${y==="liked"?lt(n,"Posts you liked will appear here."):lt(u,"Posts you saved will appear here.")}
            </section>
          </section>
        `;case"magazine":return`
          <section class="profile-section-panel">
            <div class="section-head">
              <h3>Magazine</h3>
            </div>
            ${Ni(m,e.posts||[])}
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
                      ${Xe(e.profile.avatarData,(e.profile.name||"Y").slice(0,1).toUpperCase(),`${e.profile.name} avatar`)}
                    </div>
                  </div>
                </div>
                <input id="profileAvatarInput" type="file" accept="image/*" hidden />
                ${S?`
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
            ${lt(o,"Your posts will appear here after you publish one.")}
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
          <div class="profile-orbit__display ${p==="identity"?"is-identity":""}">
            ${k.centerLabel!==""?`<span class="profile-orbit__display-label">${k.label}</span>`:""}
            <strong class="profile-orbit__display-value">${k.value}</strong>
          </div>
        </div>
      </section>

      ${Y()}
    </section>
  `}function Ri(e,t){var u;const i=fa(e.posts||[]),o=e.posts.filter(m=>m.authorName===t),n=e.followingAuthors.includes(t);return`
    <section class="page page--profile">
      <header class="page-header page-header--with-back">
        <button class="button button--ghost page-back" type="button" data-close-profile>Back</button>
        <div>
          <p class="page-header__mini">author profile</p>
          <h2 class="page-header__title">${t}</h2>
        </div>
      </header>

      <section class="profile-card">
        <div class="profile-card__avatar">${Xe((u=o[0])==null?void 0:u.authorAvatarData,(t||"Y").slice(0,1).toUpperCase(),`${t} avatar`)}</div>
        <div class="profile-card__body">
          <div class="profile-card__heading">
            <div>
              <h3 class="profile-card__name">${t}</h3>
              <p class="profile-card__bio">${ya(t)}</p>
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
        ${lt(o,"This author has no posts yet.")}
      </section>

      <section class="section-block">
        <div class="section-head">
          <h3>Local Stats</h3>
        </div>
        <div class="stats-grid">
          <article class="stat-card"><span>Posts</span><strong>${o.length}</strong></article>
          <article class="stat-card"><span>Followers</span><strong>${i.filter(m=>m!==t).length}</strong></article>
          <article class="stat-card"><span>Following</span><strong>${Number(n)}</strong></article>
        </div>
      </section>
    </section>
  `}function Hi(e,t={}){const i=fa(e.posts||[]),o=t.profileAuthor||null;return!o||o===e.profile.name?Di(e,t,i):Ri(e,o)}function qi(e,t={}){var u;if(!e)return`
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
            ${Xe(e.authorAvatarData,e.authorIcon,`${e.authorName} avatar`)}
          </button>
          <div>
            <p class="post-card__author">${e.authorName}</p>
            <p class="post-card__time">${oa(e.createdAt)}</p>
          </div>
        </div>

        <img class="post-detail-card__image" src="${e.imageData}" alt="${e.authorName} post image" />

        ${e.caption?`<p class="post-detail-card__caption">${e.caption}</p>`:""}

        ${n.length?`
          <div class="post-detail-card__tags">
            ${n.map(m=>`<span class="chip chip--soft">${m}</span>`).join("")}
          </div>
        `:""}

        <div class="post-detail-card__meta">
          <div class="post-card__actions">
            <button class="icon-button ${e.liked?"is-active":""}" data-like="${e.id}" aria-label="Like post">
              ${N("heart")}
              <span>${e.likes}</span>
            </button>
            <button class="icon-button" data-comment="${e.id}" aria-label="Open comments">
              ${N("comment")}
              <span>${((u=e.comments)==null?void 0:u.length)||0}</span>
            </button>
            <button class="icon-button ${e.saved?"is-active":""}" data-save="${e.id}" aria-label="Save post">
              ${N("save")}
              <span>${e.saves}</span>
            </button>
          </div>
          ${o||i?`
            <div class="post-detail-card__owner-actions">
              ${o?`
                <button class="button button--ghost post-detail-card__edit" type="button" data-edit-post="${e.id}" aria-label="Edit post">
                  ${N("edit")}
                </button>
              `:""}
              ${i?`
                <button class="button button--ghost post-detail-card__delete" type="button" data-delete-post="${e.id}" aria-label="Delete post">
                  ${N("trash")}
                </button>
              `:""}
            </div>
          `:""}
        </div>
      </article>
    </section>
  `}async function Wi(e,t={}){const{maxWidth:i=900,quality:o=.82}=t,n=await createImageBitmap(e),u=n.width/n.height,m=Math.min(n.width,i),l=Math.round(m/u),a=document.createElement("canvas");return a.width=m,a.height=l,a.getContext("2d").drawImage(n,0,0,m,l),a.toDataURL("image/webp",o)}async function zi(e,t,i={}){var k;const{size:o=320}=i,n=await createImageBitmap(e),u=document.createElement("canvas");u.width=o,u.height=o;const m=u.getContext("2d");if(!m)return"";const l=Math.max(1,Number(t==null?void 0:t.zoom)||1),a=Math.min(1,Math.max(0,Number(t==null?void 0:t.x)||.5)),p=Math.min(1,Math.max(0,Number(t==null?void 0:t.y)||.5)),y=Math.max(o/n.width,o/n.height);n.width*y*l,n.height*y*l;const S=o/(y*l),E=o/(y*l),P=Math.max(0,(n.width-S)*a),B=Math.max(0,(n.height-E)*p);return m.clearRect(0,0,o,o),m.save(),m.beginPath(),m.arc(o/2,o/2,o/2,0,Math.PI*2),m.closePath(),m.clip(),m.drawImage(n,P,B,S,E,0,0,o,o),m.restore(),(k=n.close)==null||k.call(n),u.toDataURL("image/png")}const c={screen:"opening",timelineOverlay:null,timelineTab:"recommended",timelinePan:{x:-360,y:-220},searchQuery:"",searchTags:[],homeTheme:"dark",homeCoreState:"default",homeCoreTapTimestamps:[],previewPostId:null,commentPostId:null,profileEditOpen:!1,profileAuthor:null,profileSection:null,profileLibraryTab:"liked",profileExpanded:!0,profileOrbitRotation:0,profileAvatarCropOpen:!1,composeStage:"select",composeTemplateId:xe,composeBackgroundColor:"#f8f4ee",composeEditingPostId:null,composeWorkingDraft:null,openingTapGuardUntil:0,postReturnScreen:"timeline",postReturnProfileAuthor:null,profileReturnState:null,composeReturnState:null},wt=["dark","light","system"],Ie={headline:"text",subhead:"text",intro:"text",body:"text",date:"text",editor:"編集者：haru"};function ke(e={}){var t,i,o;return{file:typeof e.file=="string"?e.file:null,position:{x:Number((t=e.position)==null?void 0:t.x)||.5,y:Number((i=e.position)==null?void 0:i.y)||.5,zoom:Math.max(1,Number((o=e.position)==null?void 0:o.zoom)||1)},imageSize:e.imageSize&&Number.isFinite(e.imageSize.width)&&Number.isFinite(e.imageSize.height)?{width:e.imageSize.width,height:e.imageSize.height}:null}}function ba(e={}){var t,i,o;return{templateId:e.templateId||xe,backgroundColor:e.backgroundColor||"#f8f4ee",headline:e.headline||Ie.headline,subhead:e.subhead||Ie.subhead,intro:e.intro||Ie.intro,body:e.body||Ie.body,date:e.date||Ie.date,editor:e.editor||Ie.editor,fixedTags:Array.isArray(e.fixedTags)?[...e.fixedTags]:[],freeTags:Array.isArray(e.freeTags)?[...e.freeTags]:String(e.freeTags||"").split(",").map(n=>n.trim()).filter(Boolean),customLayout:e.customLayout?JSON.parse(JSON.stringify(e.customLayout)):null,standardFiles:{primary:ke((t=e.standardFiles)==null?void 0:t.primary),secondary:ke((i=e.standardFiles)==null?void 0:i.secondary),accent:ke((o=e.standardFiles)==null?void 0:o.accent)}}}let Qe=null,De=0,ct=null,oe=null,ze=null;const z={file:null,previewUrl:"",imageSize:null,crop:{x:.5,y:.5,zoom:1}};function va(){ct&&(window.clearTimeout(ct),ct=null)}function xa(){va(),c.homeCoreState="default",c.homeCoreTapTimestamps=[]}function Ke(){z.previewUrl&&URL.revokeObjectURL(z.previewUrl),z.file=null,z.previewUrl="",z.imageSize=null,z.crop={x:.5,y:.5,zoom:1},c.profileAvatarCropOpen=!1}function Oi(){oe!=null&&oe.unmount&&oe.unmount(),oe=null}function Fi(e=c.homeTheme){return e==="system"?typeof window<"u"&&typeof window.matchMedia=="function"&&window.matchMedia("(prefers-color-scheme: dark)").matches?"dark":"light":e==="dark"?"dark":"light"}function Xi(){var t;const e=et();switch(c.screen){case"home":return Qt(e,c);case"timeline":return ni(e,c);case"search":return di(e,c);case"compose":return Ei({stage:c.composeStage,selectedTemplateId:c.composeTemplateId,selectedBackground:c.composeBackgroundColor,draft:c.composeWorkingDraft||((t=Fe(c.composeEditingPostId))==null?void 0:t.composeData)||null,isEditing:!!c.composeEditingPostId});case"magazine":return Bi(e);case"profile":return Hi(e,c);case"post":return qi(Fe(c.previewPostId),{canDelete:wa(Fe(c.previewPostId))});default:return Qt(e,c)}}function Fe(e){return et().posts.find(t=>t.id===e)}function wa(e){return e?e.authorName===et().profile.name:!1}function Yi(){if(!Qe)return;const e=["app-shell"],t=["screen-area"],i=Fi(c.homeTheme);e.push(`app-shell--theme-${i}`),e.push(`app-shell--theme-mode-${c.homeTheme}`),c.screen==="home"?(e.push("app-shell--home"),t.push("screen-area--home")):c.screen==="timeline"?(e.push("app-shell--timeline"),t.push("screen-area--timeline")):c.screen==="compose"?(e.push("app-shell--compose"),t.push("screen-area--compose")):c.screen==="search"&&t.push("screen-area--search"),Qe.innerHTML=`
    <div class="${e.join(" ")}">
      <main class="${t.join(" ")}" id="screenArea"></main>
      ${Pa()}
      <div id="modalRoot"></div>
    </div>
  `}function Ze(){const e=document.getElementById("modalRoot");if(!e)return;const t=c.commentPostId?Fe(c.commentPostId):null;e.innerHTML=`
    ${Aa(t)}
  `,po()}function re(){const e=document.getElementById("screenArea");e&&(e.innerHTML=Xi(),uo(),Ze())}function ne(){if(Qe){if(Oi(),c.screen==="opening"){Qe.innerHTML=Ja(),Vi();return}Yi(),re(),Qi()}}function Tt(){return{screen:c.screen,previewPostId:c.previewPostId,profileAuthor:c.profileAuthor,postReturnScreen:c.postReturnScreen,postReturnProfileAuthor:c.postReturnProfileAuthor}}function _a(e,t="home"){if(!e){dt(t);return}c.screen=e.screen||t,c.previewPostId=e.previewPostId||null,c.commentPostId=null,c.profileEditOpen=!1,c.profileAuthor=c.screen==="profile"&&e.profileAuthor||null,c.postReturnScreen=e.postReturnScreen||"home",c.postReturnProfileAuthor=e.postReturnProfileAuthor||null,ne()}function dt(e){e!=="home"&&xa(),e==="compose"&&c.screen!=="compose"&&(c.composeReturnState=Tt()),e==="profile"&&c.screen!=="profile"&&(c.profileReturnState=Tt()),e!=="profile"&&(Ke(),c.profileReturnState=null),e!=="home"&&(c.timelineOverlay=null),e!=="compose"&&(c.composeEditingPostId=null,c.composeStage="select",c.composeBackgroundColor="#f8f4ee",c.composeWorkingDraft=null,c.composeReturnState=null),c.screen=e,c.previewPostId=null,c.commentPostId=null,e==="compose"&&(c.composeStage="select",c.composeBackgroundColor="#f8f4ee",c.composeTemplateId=xe,c.composeWorkingDraft=ba({templateId:xe,backgroundColor:"#f8f4ee"})),e==="profile"&&(Ke(),c.profileAuthor=null,c.profileSection="identity",c.profileLibraryTab="liked",c.profileExpanded=!0,c.profileOrbitRotation=270),e!=="profile"&&(c.profileEditOpen=!1,c.profileAuthor=null),ne()}function Sa(){c.previewPostId=null,c.commentPostId=null,c.openingTapGuardUntil=Date.now()+700,c.postReturnScreen="home",c.postReturnProfileAuthor=null,dt("home")}function Ui(e){Ke(),c.profileReturnState=Tt(),c.screen="profile",c.previewPostId=null,c.commentPostId=null,c.profileEditOpen=!1,c.profileAuthor=e||null,c.profileSection=e?null:"identity",c.profileLibraryTab="liked",c.profileExpanded=!0,c.profileOrbitRotation=e?0:270,ne()}function ji(){Ke();const e=c.profileReturnState;c.profileReturnState=null,_a(e,"home")}function Ji(e){c.postReturnScreen=c.screen,c.postReturnProfileAuthor=c.profileAuthor,c.screen="post",c.previewPostId=e,c.commentPostId=null,ne()}function Gi(){const e=c.composeReturnState;c.composeReturnState=null,c.composeWorkingDraft=null,_a(e,"home")}function $a(){c.screen=c.postReturnScreen||"timeline",c.commentPostId=null,c.profileEditOpen=!1,c.profileAuthor=c.screen==="profile"?c.postReturnProfileAuthor:null,ne()}async function Vi(){var u,m,l;const e=document.getElementById("openingCanvas"),t=document.querySelector(".opening-screen");if(!e||!t)return;const i=++De,o=a=>{a.preventDefault(),a.stopPropagation(),i===De&&(De+=1,Sa())};t.addEventListener("pointerdown",o,{once:!0});try{(u=document.fonts)!=null&&u.ready?await Promise.race([document.fonts.ready,new Promise(a=>window.setTimeout(a,1200))]):await new Promise(a=>window.setTimeout(a,180))}catch{}if(i!==De)return;const n=((l=(m=window.matchMedia)==null?void 0:m.call(window,"(prefers-reduced-motion: reduce)"))==null?void 0:l.matches)??!1;Zi(e,i,n)}function Zi(e,t,i){const o=e.getBoundingClientRect(),n=window.devicePixelRatio||1,u=Math.max(1,Math.round(o.width*n)),m=Math.max(1,Math.round(o.height*n)),l=e.getContext("2d");if(!l)return;e.width=u,e.height=m;const a="#ffffff",p='"Zen Old Mincho", "Cormorant Garamond", "Times New Roman", serif',y="ABCDEFGHIJKLMNOPQRSTUVWXYZ",S=Math.min(u*.255,m*.5,138*n),E=`700 ${S}px ${p}`,P=i?1300:3e3,B=i?420:760,k=i?320:620,Y=i?720:2100,H=i?1800:5200,w=P+B+k+Y+H;function G(I,A,U){return Math.min(U,Math.max(A,I))}if(t!==De)return;function ue(I){return 1-(1-I)**3}function de(I){return I<.5?4*I*I*I:1-(-2*I+2)**3/2}function O(I,A,U){return I+(A-I)*U}function T(I,A,U){return G((I-A)/U,0,1)}function L(I,A,U,D,ee=1){I.save(),I.globalAlpha=ee,I.font=E,I.textAlign="left",I.textBaseline="middle",I.lineJoin="round",I.lineCap="round",I.lineWidth=Math.max(1.4*n,S*.045),I.strokeStyle="rgba(255, 255, 255, 0.22)",I.strokeText(A,U,D),I.shadowColor="rgba(255, 255, 255, 0.26)",I.shadowBlur=S*.085,I.shadowOffsetY=S*.014,I.fillStyle=a,I.fillText(A,U,D),I.restore()}function W(I=1,A=0){const U=m*.5,D=Math.hypot(u,m),ee=S*.42;l.save(),l.lineWidth=Math.max(1*n,S*.008);for(let J=0;J<3;J+=1){const se=G(A*.56-J*.18,0,1);se<=0||se>=1||(l.globalAlpha=(1-se)**1.4*.12*I,l.strokeStyle=a,l.beginPath(),l.arc(u/2,U,ee+se*(D-ee),0,Math.PI*2),l.stroke())}l.restore()}const F=document.createElement("canvas");F.width=u,F.height=m;const C=F.getContext("2d");if(!C)return;const Q=["L","A","N","I"],_e=S*.01,fe=[-S*.03,-S*.015,-S*.015];C.font=E;const Re=Q.map(I=>C.measureText(I).width),tt=Re.reduce((I,A)=>I+A,0)+_e*(Q.length-1)+fe.reduce((I,A)=>I+A,0),pt=u/2-tt/2,Ye=m*.5;C.fillStyle=a,C.font=E,C.textAlign="left",C.textBaseline="middle";let at=pt;const Ee=Q.map((I,A)=>{const U=Re[A],D=at;at+=U+_e+(fe[A]||0);const ee=A<2;return{glyph:I,targetX:D,targetY:Ye,startX:ee?-U-Math.random()*u*.16-A*S*.18:u+Math.random()*u*.16+(Q.length-A)*S*.18,startY:Ye+(Math.random()-.5)*S*.42,driftX:(Math.random()-.5)*S*.12,driftY:(Math.random()-.5)*S*.08,enterArc:(Math.random()-.5)*S*.32,delay:A*.055,alpha:.72+Math.random()*.18,width:U}}),He=[],it=i?Math.max(28,Math.round(u/20)):Math.max(120,Math.round(u/5.5)),ot=tt*.52+S*.16,nt=S*.56;for(let I=0;I<it;I+=1){const A=I%7,U=.86+A*.28+Math.random()*.14,D=Math.random()<.5?1:-1,ee=A>=4?1.35:1;He.push({glyph:y[Math.floor(Math.random()*y.length)],size:Math.max(u,m)*.024+Math.random()*(Math.max(u,m)*.034),angularSpeed:(i?22e-5:4e-4)*(.82+Math.random()*.72)*D,radiusX:Math.min(u*.64,ot*U*ee),radiusY:Math.min(m*.42,nt*(.86+A*.2+Math.random()*.14)*ee),wobble:S*(.03+Math.random()*.05),wobbleSpeed:.0012+Math.random()*.0016,alpha:i?.16+Math.random()*.1:.24+Math.random()*.18,seed:Math.random()*Math.PI*2})}const Te=performance.now();function Ue(I,A,U="back"){He.forEach(D=>{const ee=I*D.angularSpeed+D.seed,J=Math.sin(ee),se=J>0;if(U==="front"&&!se||U==="back"&&se)return;const be=Math.sin(I*D.wobbleSpeed+D.seed*1.4)*D.wobble,ae=Math.cos(I*D.wobbleSpeed*.82+D.seed*.9)*D.wobble*.72,Ce=u/2+Math.cos(ee)*D.radiusX+be,Se=Ye+J*D.radiusY+ae,ie=se?1+J*.22:.74+(J+1)*.08,Ae=D.alpha*A*(se?.72+J*.42:.18);Ae<=.015||(l.save(),l.globalAlpha=Ae,l.fillStyle=a,l.font=`500 ${D.size*ie}px ${p}`,l.textAlign="center",l.textBaseline="middle",l.fillText(D.glyph,Ce,Se),l.restore())})}function je(I){if(t!==De)return;const A=I-Te,U=ue(T(A,0,P)),D=de(T(A,P*.58,B)),ee=de(T(A,P+B,k)),J=T(A,P+B*.3,k),se=de(T(A,P+B+k+Y*.35,H)),be=Math.max(0,1-se**2.1);if(l.clearRect(0,0,u,m),l.textAlign="center",l.textBaseline="middle",l.fillStyle=a,Ue(A,Math.max(0,1-J),"back"),Ee.forEach((ae,Ce)=>{const Se=G((U-ae.delay)/(1-ae.delay),0,1);if(Se<=.001)return;const ie=ue(Se),Ae=(1-ie)*ae.enterArc,V=Math.sin(A*.0016+Ce*.9)*S*.005*D,Je=Math.cos(A*.0012+Ce*1.1)*S*.004*D,qe=O(ae.startX,ae.targetX,ie)+ae.driftX*(1-ie)+V,ye=O(ae.startY,ae.targetY,ie)+Math.sin(ie*Math.PI+Ce*.35)*Ae+ae.driftY*(1-ie)+Je,Ge=Math.min(.98,.22+ie*ae.alpha+D*.18+ee*.08)*be;Ge<=.02||(l.save(),L(l,ae.glyph,qe,ye,Ge),l.restore())}),se>.001&&W(be,se),Ue(A,Math.max(0,1-J),"front"),A<w){requestAnimationFrame(je);return}t===De&&Sa()}requestAnimationFrame(je)}function Qi(){const e=(i,o,n)=>Math.min(n,Math.max(o,i));[{element:document.querySelector('[data-side-wheel="main"]'),getItems:()=>Array.from(document.querySelectorAll('[data-side-wheel="main"] [data-side-nav-screen]')),getActiveKey:()=>["timeline","search","compose","profile"].includes(c.screen)?c.screen:c.postReturnScreen||"timeline",applySelection:i=>{if(c.screen===i){ne();return}dt(i)}},{element:document.querySelector('[data-side-wheel="timeline"]'),getItems:()=>Array.from(document.querySelectorAll('[data-side-wheel="timeline"] [data-side-nav-tab]')),getActiveKey:()=>c.timelineTab||"recommended",applySelection:i=>{c.timelineTab=i,ne()}},{element:document.querySelector('[data-side-wheel="profile"]'),getItems:()=>Array.from(document.querySelectorAll('[data-side-wheel="profile"] [data-side-nav-profile-section]')),getActiveKey:()=>c.profileSection||"identity",applySelection:i=>{c.profileSection=i,c.profileSection==="library"&&(c.profileLibraryTab=c.profileLibraryTab||"liked"),ne()}}].filter(i=>i.element).forEach(i=>{const{element:o,getItems:n,applySelection:u,getActiveKey:m}=i,l=n();if(!l.length)return;const a=l.map((T,L)=>({button:T,key:T.dataset.sideNavScreen||T.dataset.sideNavTab||T.dataset.sideNavProfileSection,index:L})),p=Math.max(0,a.findIndex(T=>T.key===m()));let y=!1,S=p,E=0,P=0,B=0,k=null;const Y=T=>{var Q;const L=(Q=a[S])==null?void 0:Q.button.getBoundingClientRect(),W=((L==null?void 0:L.height)||0)/2,F=W,C=window.innerHeight-W;return C<=F?0:e(T,F-window.innerHeight/2,C-window.innerHeight/2)},H=(T,L)=>{const W=o.classList.contains("side-wheel--left")?76:24,F=a.length<=2?88:76;o.style.setProperty("--wheel-offset-y",`${E}px`),o.classList.toggle("is-dragging",!!(k!=null&&k.moved)),a.forEach(C=>{const Q=(C.index-T)*F,_e=L||C.index===T?1:0,fe=L?C.index===T?1:.9:1,Re=!L&&C.index===T?P:0;C.button.style.setProperty("--slot-x",`${W}%`),C.button.style.setProperty("--slot-y",`${Q}px`),C.button.style.setProperty("--slot-scale",String(fe)),C.button.style.setProperty("--slot-opacity",String(_e)),C.button.style.setProperty("--slot-depth",String(Math.abs(C.index-T))),C.button.style.setProperty("--drag-x",`${Re}px`),C.button.style.setProperty("--drag-y","0px"),C.button.classList.toggle("is-active",C.index===T),C.button.classList.toggle("is-dragging",!!(k!=null&&k.moved)&&C.index===T)})},w=T=>{var C;if(!k||(T==null?void 0:T.pointerId)!=null&&k.pointerId!==T.pointerId)return;const{button:L,pointerId:W,moved:F}=k;(C=L.hasPointerCapture)!=null&&C.call(L,W)&&L.releasePointerCapture(W),k=null,F&&(B=Date.now()+220),H(S,y)},G=T=>{if(!k||k.pointerId!==T.pointerId)return;const L=T.clientX-k.startX,W=T.clientY-k.startY;if(!(!k.moved&&Math.hypot(L,W)<8)){if(k.moved=!0,E=Y(k.startWheelOffsetY+W),k.mode==="collapsed"){const F=k.halfWidth,C=window.innerWidth-k.halfWidth;P=e(k.startCenterX+L,F,C)-k.anchorCenterX}else P=0;H(S,y)}};H(p,!1);const ue=()=>{y=!0,o.classList.add("is-engaged"),P=0,H(S,!0)},de=()=>{y=!1,o.classList.remove("is-engaged"),H(S,!1)},O=(T=S)=>{S=T;const L=a[S];if(!L){de();return}u(L.key)};l.forEach(T=>{T.addEventListener("pointerdown",L=>{if(Number(T.dataset.sideIndex||0)!==S)return;const F=T.getBoundingClientRect();k={pointerId:L.pointerId,button:T,mode:y?"engaged":"collapsed",startX:L.clientX,startY:L.clientY,startCenterX:F.left+F.width/2,anchorCenterX:F.left+F.width/2-P,halfWidth:F.width/2,startWheelOffsetY:E,moved:!1},T.setPointerCapture(L.pointerId)}),T.addEventListener("pointermove",G),T.addEventListener("pointerup",w),T.addEventListener("pointercancel",w),T.addEventListener("lostpointercapture",w),T.addEventListener("click",L=>{if(Date.now()<B){L.preventDefault(),L.stopPropagation();return}L.preventDefault();const W=Number(T.dataset.sideIndex||0);if(!y){if(W!==S)return;ue();return}if(W===S){de();return}O(W)})})})}function mt(e=document){e.querySelectorAll("[data-toggle-tags]").forEach(t=>{t.addEventListener("click",()=>{const i=document.querySelector(`[data-tags-panel="${t.dataset.toggleTags}"]`);i&&(i.hidden=!i.hidden,t.classList.toggle("is-active",!i.hidden))})}),e.querySelectorAll("[data-like]").forEach(t=>{t.addEventListener("click",()=>{za(t.dataset.like),re()})}),e.querySelectorAll("[data-save]").forEach(t=>{t.addEventListener("click",()=>{Oa(t.dataset.save),re()})}),e.querySelectorAll("[data-comment]").forEach(t=>{t.addEventListener("click",()=>{c.commentPostId=t.dataset.comment,Ze()})}),e.querySelectorAll("[data-open-preview]").forEach(t=>{t.addEventListener("click",i=>{if(Date.now()<c.openingTapGuardUntil){i.preventDefault(),i.stopPropagation();return}const o=t.dataset.openPreview;Xa(o),Ji(o)})}),e.querySelectorAll("[data-open-author]").forEach(t=>{t.addEventListener("click",()=>{Ui(t.dataset.openAuthor)})})}function Ki(){const e=document.querySelector(".orbit-home"),t=()=>{e&&(e.classList.remove("orbit-home--default","orbit-home--collapsing","orbit-home--sheep"),e.classList.add(`orbit-home--${c.homeCoreState}`))};document.querySelectorAll("[data-home-theme-toggle]").forEach(i=>{i.addEventListener("click",()=>{const o=wt.indexOf(c.homeTheme);c.homeTheme=wt[(o+1)%wt.length],ne()})}),document.querySelectorAll("[data-home-core-toggle]").forEach(i=>{i.addEventListener("click",()=>{if(c.homeCoreState!=="default")return;const o=Date.now();c.homeCoreTapTimestamps=[...c.homeCoreTapTimestamps.filter(n=>o-n<900),o],!(c.homeCoreTapTimestamps.length<3)&&(c.homeCoreTapTimestamps=[],c.homeCoreState="collapsing",t(),va(),ct=window.setTimeout(()=>{c.homeCoreState="sheep",t()},620))})}),document.querySelectorAll("[data-home-sheep-toggle]").forEach(i=>{i.addEventListener("click",()=>{c.homeCoreState==="sheep"&&(xa(),t())})})}function eo(){var i,o;mt(document.getElementById("screenArea"));const e=document.querySelector("[data-timeline-pan-viewport]"),t=document.querySelector("[data-timeline-pan-surface]");if(e&&t){const n=(a,p)=>{const y=Math.min(0,e.clientWidth-t.scrollWidth),S=Math.min(0,e.clientHeight-t.scrollHeight);return{x:Math.max(y,Math.min(0,a)),y:Math.max(S,Math.min(0,p))}},u=(a,p)=>{const y=n(a,p);c.timelinePan=y,t.style.transform=`translate(${y.x}px, ${y.y}px)`};u(((i=c.timelinePan)==null?void 0:i.x)??-360,((o=c.timelinePan)==null?void 0:o.y)??-220);let m=null;t.addEventListener("pointerdown",a=>{var p,y,S;m={pointerId:a.pointerId,startX:a.clientX,startY:a.clientY,originX:((p=c.timelinePan)==null?void 0:p.x)??-360,originY:((y=c.timelinePan)==null?void 0:y.y)??-220,moved:!1},e.classList.add("is-dragging"),(S=t.setPointerCapture)==null||S.call(t,a.pointerId)}),t.addEventListener("pointermove",a=>{if(!m||m.pointerId!==a.pointerId)return;const p=a.clientX-m.startX,y=a.clientY-m.startY;(Math.abs(p)>4||Math.abs(y)>4)&&(m.moved=!0,a.preventDefault()),u(m.originX+p,m.originY+y)});const l=a=>{var p;!m||m.pointerId!==a.pointerId||(e.classList.remove("is-dragging"),m.moved&&(c.openingTapGuardUntil=Date.now()+180),m=null,(p=t.releasePointerCapture)==null||p.call(t,a.pointerId))};t.addEventListener("pointerup",l),t.addEventListener("pointercancel",l)}document.querySelectorAll("[data-timeline-tab]").forEach(n=>{n.addEventListener("click",()=>{c.timelineTab=n.dataset.timelineTab||"recommended",re()})})}function to(){mt(document.getElementById("screenArea"));const e=document.getElementById("searchInput");e&&e.addEventListener("input",t=>{c.searchQuery=t.target.value;const i=t.target.selectionStart;re();const o=document.getElementById("searchInput");o&&(o.focus(),o.setSelectionRange(i,i))}),document.querySelectorAll("[data-search-tag]").forEach(t=>{t.addEventListener("click",()=>{const i=t.dataset.searchTag;c.searchTags=c.searchTags.includes(i)?c.searchTags.filter(o=>o!==i):[...c.searchTags,i],re()})})}function ao(){document.querySelectorAll("[data-home-nav]").forEach(e=>{e.addEventListener("click",()=>{dt(e.dataset.homeNav)})}),document.querySelectorAll("[data-close-profile]").forEach(e=>{e.addEventListener("click",()=>{ji()})}),document.querySelectorAll("[data-close-compose]").forEach(e=>{e.addEventListener("click",()=>{Gi()})})}function aa(e){var t,i;return e.templateId==="page8"&&Array.isArray((t=e.customLayout)==null?void 0:t.pretextBoxes)?e.customLayout.pretextBoxes.filter(o=>o.kind==="title"||o.kind==="body").map(o=>{var n;return String(((n=o.data)==null?void 0:n.text)||"").trim()}).filter(Boolean).join(" / ").slice(0,120):e.templateId==="page8"&&Array.isArray((i=e.customLayout)==null?void 0:i.textBoxes)?e.customLayout.textBoxes.map(o=>String(o.text||"").trim()).filter(Boolean).join(" / ").slice(0,120):[e.headline,e.subhead,e.intro,e.body].map(o=>o.trim()).filter(Boolean).join(" / ").slice(0,120)}function io(e,t,i){const{x:o,y:n,maxWidth:u,lineHeight:m,maxLines:l}=i,a=[];String(t||"").split(`
`).forEach(y=>{const S=/\s/.test(y.trim()),E=S?y.split(/\s+/).filter(Boolean):Array.from(y),P=S?" ":"";if(!E.length){a.push("");return}let B="";E.forEach(k=>{const Y=B?`${B}${P}${k}`:k;if(e.measureText(Y).width<=u||!B){B=Y;return}a.push(B),B=k}),B&&a.push(B)}),a.slice(0,l).forEach((y,S)=>{e.fillText(y,o,n+S*m)})}function Pt(e,t,i,o,n,u){e.beginPath(),e.moveTo(t+u,i),e.arcTo(t+o,i,t+o,i+n,u),e.arcTo(t+o,i+n,t,i+n,u),e.arcTo(t,i+n,t,i,u),e.arcTo(t,i,t+o,i,u),e.closePath()}async function oo(e,t,i,o={x:.5,y:.5}){var k;if(!t)return;const n=typeof t=="string"?await new Promise((Y,H)=>{const w=new Image;w.onload=()=>Y(w),w.onerror=H,w.src=t}):await createImageBitmap(t),u=n.width/n.height,m=i.width/i.height;let l=0,a=0,p=n.width,y=n.height;const S=Math.max(1,Number(o==null?void 0:o.zoom)||1),E=Number.isFinite(o==null?void 0:o.cropX)||Number.isFinite(o==null?void 0:o.cropY);let P=Math.min(1,Math.max(0,o.x??.5)),B=Math.min(1,Math.max(0,o.y??.5));if(E){const Y=u>m?i.height*u:i.width,H=u>m?i.height:i.width/u,w=Math.max(0,Y*S-i.width),G=Math.max(0,H*S-i.height);P=w?Math.min(1,Math.max(0,.5-(Number(o==null?void 0:o.cropX)||0)/w)):.5,B=G?Math.min(1,Math.max(0,.5-(Number(o==null?void 0:o.cropY)||0)/G)):.5}u>m?(p=Math.max(1,n.height*m/S),l=(n.width-p)*P):(y=Math.max(1,n.width/m/S),a=(n.height-y)*B),e.save(),Pt(e,i.x,i.y,i.width,i.height,i.radius),e.clip(),e.drawImage(n,l,a,p,y,i.x,i.y,i.width,i.height),e.restore(),(k=n.close)==null||k.call(n)}function no(e,t){e.save(),e.lineWidth=4,e.strokeStyle="rgba(34, 28, 25, 0.88)",Pt(e,t.x,t.y,t.width,t.height,t.radius),e.stroke();const i=Math.min(t.width,t.height)*.18,o=t.x+t.width/2,n=t.y+t.height/2;e.beginPath(),e.arc(o,n,i,0,Math.PI*2),e.stroke(),e.beginPath(),e.moveTo(o-i*.42,n),e.lineTo(o+i*.42,n),e.moveTo(o,n-i*.42),e.lineTo(o,n+i*.42),e.stroke(),e.restore()}async function so(e,t,i={}){const m=document.createElement("canvas");m.width=2480,m.height=3508;const l=m.getContext("2d");if(!l)return"";const a=2480/1240;return l.imageSmoothingEnabled=!0,l.imageSmoothingQuality="high",l.fillStyle=e.backgroundColor||"#f8f4ee",l.fillRect(0,0,2480,3508),l.scale(a,a),await Si(e.templateId).render(l,e,t,{addWrappedText:io,clipRoundedRect:Pt,drawFileCover:oo,drawSlotPlaceholder:no,defaults:Ie,page8Files:i.page8Files||{}}),m.toDataURL("image/png")}function ro(){var At,Bt,Nt,Dt,Rt,Ht,qt,Wt,zt,Ot,Ft,Xt;const e=document.querySelector(".page--compose");if(!e)return;const t=e.dataset.composeStage||"select",i=document.getElementById("composeForm"),o=i||e,n=document.getElementById("composeSheet"),u=(n==null?void 0:n.querySelector(".compose-sheet__frame"))||null,m=(n==null?void 0:n.querySelector("[data-custom-canvas]"))||null,l=c.composeWorkingDraft||((At=Fe(c.composeEditingPostId))==null?void 0:At.composeData)||null,a={...Ie,...l||{}},p={imageInputPrimary:typeof((Nt=(Bt=l==null?void 0:l.standardFiles)==null?void 0:Bt.primary)==null?void 0:Nt.file)=="string"?l.standardFiles.primary.file:"",imageInputSecondary:typeof((Rt=(Dt=l==null?void 0:l.standardFiles)==null?void 0:Dt.secondary)==null?void 0:Rt.file)=="string"?l.standardFiles.secondary.file:"",imageInputAccent:typeof((qt=(Ht=l==null?void 0:l.standardFiles)==null?void 0:Ht.accent)==null?void 0:qt.file)=="string"?l.standardFiles.accent.file:""},y={primary:ke((Wt=l==null?void 0:l.standardFiles)==null?void 0:Wt.primary),secondary:ke((zt=l==null?void 0:l.standardFiles)==null?void 0:zt.secondary),accent:ke((Ot=l==null?void 0:l.standardFiles)==null?void 0:Ot.accent)},S=document.querySelector("[data-toggle-compose-tags]"),E=document.querySelector("[data-compose-tags]"),P=document.querySelector("[data-toggle-compose-preview]"),B=document.querySelector("[data-custom-template-controls]"),k=document.querySelector("[data-custom-inspector]"),Y=document.querySelector("[data-compose-pretext-host]"),H=Array.from(document.querySelectorAll("[data-editable]")),w={options:ma((l==null?void 0:l.customLayout)||{}),imageBoxes:$t((l==null?void 0:l.customLayout)||{}),textBoxes:kt((l==null?void 0:l.customLayout)||{},a),selectedId:null,imageMode:"frame"},G={},ue={headline:document.querySelector('[data-editable="headline"]'),subhead:document.querySelector('[data-editable="subhead"]'),intro:document.querySelector('[data-editable="intro"]'),body:document.querySelector('[data-editable="body"]'),date:document.querySelector('[data-editable="date"]'),editor:document.querySelector('[data-editable="editor"]')},de={primary:document.querySelector('[data-slot="imageInputPrimary"]'),secondary:document.querySelector('[data-slot="imageInputSecondary"]'),accent:document.querySelector('[data-slot="imageInputAccent"]')};function O(){return{primary:ke(y.primary),secondary:ke(y.secondary),accent:ke(y.accent)}}function T(s={}){const r=ba({...c.composeWorkingDraft||l||{},...s});return c.composeWorkingDraft=r,c.composeTemplateId=r.templateId,c.composeBackgroundColor=r.backgroundColor,r}function L(s={}){var $;const{customLayoutOverride:r}=s,d=o.querySelector('input[name="templateId"]:checked'),v=o.querySelector('input[name="backgroundColor"]:checked'),M=String((d==null?void 0:d.value)||(n==null?void 0:n.dataset.template)||c.composeTemplateId||(l==null?void 0:l.templateId)||xe),h=String((v==null?void 0:v.value)||c.composeBackgroundColor||(l==null?void 0:l.backgroundColor)||"#f8f4ee"),g=T({templateId:M,backgroundColor:h,standardFiles:O()}),_=i?new FormData(i):null,b=_?_.getAll("fixedTags").map(f=>String(f)):g.fixedTags,x=_?String(_.get("freeTags")||"").split(",").map(f=>f.trim()).filter(Boolean):g.freeTags;if(M==="page8"){const f=r||(($=oe==null?void 0:oe.getSerializedLayout)==null?void 0:$.call(oe))||g.customLayout;return T({fixedTags:b,freeTags:x,customLayout:f})}return T({fixedTags:b,freeTags:x,headline:Te("headline")||g.headline,subhead:Te("subhead")||g.subhead,intro:Te("intro")||g.intro,body:Te("body")||g.body,date:Te("date")||g.date,editor:Te("editor")||g.editor,customLayout:r??null})}const W=s=>{L(),c.composeStage=s,ne()};function F(s){return new Promise(r=>{const d=new Image,v=typeof s=="string"?s:URL.createObjectURL(s);d.onload=()=>{r({width:d.naturalWidth,height:d.naturalHeight}),typeof s!="string"&&URL.revokeObjectURL(v)},d.onerror=()=>{r(null),typeof s!="string"&&URL.revokeObjectURL(v)},d.src=v})}function C(s){const r=document.querySelector(`[data-slot-image="${s}"]`),v=y[s==="imageInputPrimary"?"primary":s==="imageInputSecondary"?"secondary":"accent"];r&&(r.style.backgroundPosition=`${(v.position.x||.5)*100}% ${(v.position.y||.5)*100}%`)}function Q(s){return String(s??"").replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#39;")}function _e(s){return`${s}-${Date.now().toString(36)}-${Math.random().toString(36).slice(2,7)}`}function fe(s){return G[s]||(G[s]={file:null,position:{x:.5,y:.5,zoom:1},imageSize:null,previewUrl:""}),G[s]}function Re(s){return s==="title"?{kind:"title",fontSize:.046,lineHeight:1.12,padding:.01,family:"serif",weight:600,align:"left"}:{kind:"body",fontSize:.026,lineHeight:1.45,padding:.012,family:"sans",weight:500,align:"left"}}function tt(s,r){Object.assign(s,{...s,...Re(r)})}function pt(s="left"){const r=Se({id:_e("text"),kind:"body",text:"text",isDefaultText:!0,x:.18,y:.2,width:.28,height:.12,fontSize:.026,lineHeight:1.45,padding:.012,align:s,family:"sans",weight:500},[...w.imageBoxes.map(d=>J(d)),...w.textBoxes.map(d=>J(d))]);w.textBoxes=[...w.textBoxes,D(r,Ne)],w.selectedId=r.id,te()}function Ye(s){if(s.dataset.singleLine==="true"){s.innerText=s.innerText.replace(/\r?\n+/g," ");return}s.innerHTML=s.innerHTML.replace(/<div><br><\/div>/gi,"<br>").replace(/<div>/gi,"<br>").replace(/<\/div>/gi,"").replace(/&nbsp;/gi," ")}function at(s){const r=Number(s.dataset.maxChars||0),d=s.innerText.replace(/\r/g,"");if(s.dataset.previousValue||(s.dataset.previousValue=d),r&&d.length>r||s.scrollHeight>s.clientHeight+1||s.scrollWidth>s.clientWidth+1){s.innerText=s.dataset.previousValue;return}s.dataset.previousValue=d.trim()?d:""}function Ee(s){return s.innerText.replace(/\r/g,"")}function He(s){const r=window.getSelection();if(!r)return;const d=document.createRange();d.selectNodeContents(s),d.collapse(!1),r.removeAllRanges(),r.addRange(d)}function it(s){const r=window.getSelection();if(!r||r.rangeCount===0)return 0;const d=r.getRangeAt(0);return!s.contains(d.startContainer)||!s.contains(d.endContainer)?0:r.toString().length}function ot(s,r){const d=window.getSelection();if(!d||d.rangeCount===0){s.append(document.createTextNode(r)),He(s);return}const v=d.getRangeAt(0);v.deleteContents();const M=document.createTextNode(r);v.insertNode(M),v.setStartAfter(M),v.collapse(!0),d.removeAllRanges(),d.addRange(v)}function nt(s){!e||!P||(e.classList.toggle("is-preview-mode",s),P.textContent=s?"back":"preview",P.setAttribute("aria-pressed",String(s)),H.forEach(r=>{r.setAttribute("contenteditable",s?"false":"true"),s&&r.blur()}),(n==null?void 0:n.dataset.template)==="page8"&&te())}function Te(s){const r=document.querySelector(`[data-editable="${s}"]`);return r?r.innerText.replace(/\r/g,"").trim():""}function Ue(){const s=o.querySelector('input[name="backgroundColor"]:checked'),r=(s==null?void 0:s.value)||c.composeBackgroundColor||"#f8f4ee";if(c.composeBackgroundColor=r,T({backgroundColor:r}),!n){o.querySelectorAll(".color-chip").forEach(d=>{const v=d.querySelector('input[name="backgroundColor"]');d.classList.toggle("is-active",!!(v!=null&&v.checked))});return}n.style.setProperty("--sheet-bg",r),o.querySelectorAll(".color-chip").forEach(d=>{const v=d.querySelector('input[name="backgroundColor"]');d.classList.toggle("is-active",!!(v!=null&&v.checked))})}function je(s){const r=s||xe,d=(n==null?void 0:n.dataset.template)||(Y?"page8":null),v=t==="edit"&&d&&d!==r&&(d==="page8"||r==="page8");if(c.composeTemplateId=r,T({templateId:r}),v){ne();return}if(!n){o.querySelectorAll(".template-thumb").forEach(h=>{const g=h.querySelector('input[name="templateId"]');h.classList.toggle("is-active",(g==null?void 0:g.value)===r)}),Y&&r!=="page8"&&ne();return}n.dataset.template=r,o.querySelectorAll(".template-thumb").forEach(h=>{const g=h.querySelector('input[name="templateId"]');h.classList.toggle("is-active",(g==null?void 0:g.value)===r)});const M=r==="page8";B&&(B.hidden=!0),n.classList.toggle("compose-sheet--custom",M),ht()}function I(s){var d;const r=o.querySelector(`input[name="templateId"][value="${s}"]`);(d=r==null?void 0:r.closest(".template-thumb"))==null||d.scrollIntoView({behavior:"smooth",block:"nearest",inline:"center"})}function A(s){var d;const r=o.querySelector(`input[name="backgroundColor"][value="${s}"]`);(d=r==null?void 0:r.closest(".color-chip"))==null||d.scrollIntoView({behavior:"smooth",block:"nearest",inline:"center"})}function U(s){const r=document.querySelector(`[data-slot-image="${s}"]`),d=document.querySelector(`[data-slot-placeholder="${s}"]`),v=document.querySelector(`[data-slot-remove="${s}"]`);if(!(!r||!d||!v)){if(p[s]){r.style.backgroundImage=`url("${p[s]}")`,r.hidden=!1,d.hidden=!0,v.hidden=!1;return}r.style.backgroundImage="",r.hidden=!0,d.hidden=!1,v.hidden=!0}}function D(s,r){const d=Math.min(q.width,Math.max(r.width,s.width)),v=Math.min(q.height,Math.max(r.height,s.height));return{...s,x:Math.min(q.x+q.width-d,Math.max(q.x,Le(s.x))),y:Math.min(q.y+q.height-v,Math.max(q.y,Le(s.y))),width:Le(d),height:Le(v)}}function ee(s,r,d=.02){return!(s.x+s.width+d<=r.x||r.x+r.width+d<=s.x||s.y+s.height+d<=r.y||r.y+r.height+d<=s.y)}function J(s){return{x:s.x,y:s.y,width:s.width,height:s.height}}function se(s,r={}){const{ignoreText:d=!1,ignoreImages:v=!1}=r;return[...v?[]:w.imageBoxes.filter(M=>M.id!==s).map(M=>J(M)),...d?[]:w.textBoxes.filter(M=>M.id!==s).map(M=>J(M))]}function be(s,r,d={}){const v=J(s);return!se(r,d).some(h=>ee(v,h))}function ae(s,r,d,v={}){const M=D({...s},d);if(be(M,r,v))return M;const h=[[0,-1],[1,0],[0,1],[-1,0],[1,-1],[1,1],[-1,1],[-1,-1]],g=Oe*2;for(let _=1;_<=18;_+=1)for(const[b,x]of h){const $=D({...M,x:M.x+b*g*_,y:M.y+x*g*_},d);if(be($,r,v))return $}for(let _=q.y;_<=q.y+q.height-M.height;_+=g)for(let b=q.x;b<=q.x+q.width-M.width;b+=g){const x=D({...M,x:b,y:_},d);if(be(x,r,v))return x}return M}function Ce(s,r,d=.018){const v=s.y-d,M=s.y+s.height+d,h=q.x,g=q.x+q.width;let _=[{left:h,right:g}];return r.forEach(b=>{const x=b.y-d;if(b.y+b.height+d<=v||x>=M)return;const f=Math.max(h,b.x-d),R=Math.min(g,b.x+b.width+d);_=_.flatMap(j=>{if(R<=j.left||f>=j.right)return[j];const X=[];return f>j.left&&X.push({left:j.left,right:f}),R<j.right&&X.push({left:R,right:j.right}),X})}),_.filter(b=>b.right-b.left>=s.width)}function Se(s,r){const d=D({...s},Ne),v=[];for(let g=0;g<=24;g+=1){const _=Le(d.y-g*Oe),b=Le(d.y+g*Oe);_>=q.y&&v.push(_),b<=q.y+q.height-d.height&&b!==_&&v.push(b)}let M=d,h=Number.POSITIVE_INFINITY;return v.forEach(g=>{const _={...d,y:g};Ce(_,r).forEach(x=>{const $=x.left,f=x.right-d.width,R=Le(Math.min(f,Math.max($,d.x))),j=D({...d,x:R,y:g},Ne);if(r.some(ge=>ee(J(j),ge)))return;const X=Math.abs(j.x-d.x),pe=Math.abs(j.y-d.y)*2+X;pe<h&&(h=pe,M=j)})}),M}function ie(s){const r=V(s);!r||r.type!=="image"||(w.textBoxes=w.textBoxes.map(d=>{const v=[...w.imageBoxes.filter(M=>M.id!==d.id).map(M=>J(M)),...w.textBoxes.filter(M=>M.id!==d.id).map(M=>J(M))];return Se(d,v)}))}function Ae(s){return[...w.imageBoxes.filter(r=>r.id!==s).map(r=>J(r)),...w.textBoxes.filter(r=>r.id!==s).map(r=>J(r))]}function V(s){const r=w.imageBoxes.findIndex(v=>v.id===s);if(r>=0)return{type:"image",collection:w.imageBoxes,index:r,item:w.imageBoxes[r]};const d=w.textBoxes.findIndex(v=>v.id===s);return d>=0?{type:"text",collection:w.textBoxes,index:d,item:w.textBoxes[d]}:null}function Je(s){return s==="image"?_t:Ne}function qe(s){return`${Math.round(s*100)}%`}function ye(s,r={}){const{rerender:d=!1}=r;if(!u||!m)return;const v=s?V(s):null;if(!v||v.type!=="text")return;const M=m.querySelector(`[data-custom-text="${s}"]`);if(!M)return;const h=u.getBoundingClientRect();if(!h.height)return;const g=Math.max(Ne.height,Le((M.scrollHeight+8)/h.height));if(!(Math.abs(g-v.item.height)<Oe/2)){if(v.item.height=g,Object.assign(v.item,D(v.item,Ne)),Object.assign(v.item,Se(v.item,Ae(s))),d){te();return}Et(s,v.item),Me()}}function Ge(){m&&m.querySelectorAll("[data-custom-item]").forEach(s=>{s.classList.toggle("is-selected",s.dataset.customItem===w.selectedId)})}function Et(s,r){const d=m==null?void 0:m.querySelector(`[data-custom-item="${s}"]`);if(!d)return;const v=bt(r);d.style.left=v.left,d.style.top=v.top,d.style.width=v.width,d.style.height=v.height}function Ct(){[...w.imageBoxes,...w.textBoxes].forEach(s=>{Et(s.id,s)})}function ut(s,r={}){const{rerender:d=!1}=r;if(w.selectedId=s,d&&(n==null?void 0:n.dataset.template)==="page8"){te();return}Ge(),Me()}function Me(){var r,d,v,M,h,g,_,b;if(!k||(n==null?void 0:n.dataset.template)!=="page8")return;const s=w.selectedId?V(w.selectedId):null;if(!s){k.innerHTML=`
        <p class="compose-custom-inspector__title">Selection</p>
        <p class="compose-custom-inspector__note">ボックスを選ぶと、ここで内容や見た目を調整できます。</p>
      `;return}if(s.type==="image"){const x=fe(s.item.id),$=!!(x.previewUrl||x.file),f=Math.max(1,Number((r=x.position)==null?void 0:r.zoom)||1);k.innerHTML=`
        <p class="compose-custom-inspector__title">Image Box</p>
        <p class="compose-custom-inspector__note">${w.imageMode==="crop"?"Crop 中は画像面をドラッグして見せ方を調整します。":"Frame 中はボックス自体を動かします。Crop に切り替えると画像だけを動かせます。"}</p>
        <div class="compose-custom-inspector__meta">
          <span>W ${qe(s.item.width)}</span>
          <span>H ${qe(s.item.height)}</span>
        </div>
        <div class="compose-custom-inspector__field">
          <span>Mode</span>
          <div class="compose-custom-inspector__segmented compose-custom-inspector__segmented--dual">
            <button type="button" data-custom-image-mode="frame" class="${w.imageMode==="frame"?"is-active":""}">Frame</button>
            <button type="button" data-custom-image-mode="crop" class="${w.imageMode==="crop"?"is-active":""}" ${$?"":"disabled"}>Crop</button>
          </div>
        </div>
        <label class="compose-custom-inspector__field">
          <span>Zoom</span>
          <input class="compose-custom-inspector__range" data-custom-control="zoom" type="range" min="1" max="3" step="0.01" value="${f}" ${$?"":"disabled"} />
        </label>
        <div class="compose-custom-inspector__segmented compose-custom-inspector__segmented--dual">
          <button type="button" data-custom-control="replace-image">${$?"Replace":"Upload"}</button>
          <button type="button" data-custom-control="delete">Delete</button>
        </div>
      `,k.querySelectorAll("[data-custom-image-mode]").forEach(R=>{R.addEventListener("click",()=>{R.hasAttribute("disabled")||(w.imageMode=R.dataset.customImageMode==="crop"?"crop":"frame",Me())})}),(d=k.querySelector('[data-custom-control="zoom"]'))==null||d.addEventListener("input",R=>{x.position.zoom=Math.max(1,Number(R.target.value)||1),te()}),(v=k.querySelector('[data-custom-control="replace-image"]'))==null||v.addEventListener("click",()=>{var R;(R=document.getElementById(`custom-image-${s.item.id}`))==null||R.click()})}else{k.innerHTML=`
      <p class="compose-custom-inspector__title">Text Box</p>
      <p class="compose-custom-inspector__note">Title / Body のプリセットを起点にして、細部は個別調整できます。</p>
      <div class="compose-custom-inspector__meta">
        <span>W ${qe(s.item.width)}</span>
        <span>H ${qe(s.item.height)}</span>
      </div>
      <div class="compose-custom-inspector__field">
        <span>Preset</span>
        <div class="compose-custom-inspector__segmented compose-custom-inspector__segmented--dual">
          <button type="button" data-custom-preset="title" class="${s.item.kind==="title"?"is-active":""}">Title</button>
          <button type="button" data-custom-preset="body" class="${s.item.kind==="body"?"is-active":""}">Body</button>
        </div>
      </div>
      <label class="compose-custom-inspector__field">
        <span>Text</span>
        <textarea class="compose-custom-inspector__textarea" data-custom-control="text">${Q(s.item.text)}</textarea>
      </label>
      <label class="compose-custom-inspector__field">
        <span>Size</span>
        <input class="compose-custom-inspector__range" data-custom-control="fontSize" type="range" min="14" max="54" value="${Math.round(s.item.fontSize*520)}" />
      </label>
      <label class="compose-custom-inspector__field">
        <span>Leading</span>
        <input class="compose-custom-inspector__range" data-custom-control="lineHeight" type="range" min="100" max="220" step="1" value="${Math.round(s.item.lineHeight*100)}" />
      </label>
      <label class="compose-custom-inspector__field">
        <span>Padding</span>
        <input class="compose-custom-inspector__range" data-custom-control="padding" type="range" min="4" max="40" step="1" value="${Math.round(s.item.padding*1e3)}" />
      </label>
      <label class="compose-custom-inspector__field">
        <span>Weight</span>
        <input class="compose-custom-inspector__range" data-custom-control="weight" type="range" min="400" max="700" step="100" value="${s.item.weight}" />
      </label>
      <div class="compose-custom-inspector__field">
        <span>Align</span>
        <div class="compose-custom-inspector__segmented compose-custom-inspector__segmented--align">
          <button type="button" data-custom-align="left" class="${s.item.align==="left"?"is-active":""}" aria-label="Align left">${N("alignLeft")}</button>
          <button type="button" data-custom-align="center" class="${s.item.align==="center"?"is-active":""}" aria-label="Align center">${N("alignCenter")}</button>
          <button type="button" data-custom-align="right" class="${s.item.align==="right"?"is-active":""}" aria-label="Align right">${N("alignRight")}</button>
        </div>
      </div>
      <div class="compose-custom-inspector__field">
        <span>Typeface</span>
        <div class="compose-custom-inspector__segmented compose-custom-inspector__segmented--dual">
          <button type="button" data-custom-family="sans" class="${s.item.family==="sans"?"is-active":""}">Sans</button>
          <button type="button" data-custom-family="serif" class="${s.item.family==="serif"?"is-active":""}">Serif</button>
        </div>
      </div>
      <div class="compose-custom-inspector__segmented compose-custom-inspector__segmented--single">
        <button type="button" data-custom-control="delete">Delete</button>
      </div>
    `;const x=k.querySelector('[data-custom-control="text"]');x==null||x.addEventListener("focus",$=>{const f=w.selectedId?V(w.selectedId):null;if(!(!f||f.type!=="text")&&f.item.isDefaultText&&f.item.text.trim().toLowerCase()==="text"){f.item.text="",f.item.isDefaultText=!1,$.target.value="";const R=m==null?void 0:m.querySelector(`[data-custom-text="${f.item.id}"]`);R&&(R.textContent="")}}),x==null||x.addEventListener("input",$=>{const f=w.selectedId?V(w.selectedId):null;if(!f||f.type!=="text")return;f.item.text=$.target.value.replace(/\r/g,""),f.item.isDefaultText=!1;const R=m==null?void 0:m.querySelector(`[data-custom-text="${f.item.id}"]`);R&&R!==document.activeElement&&(R.textContent=f.item.text),ye(f.item.id)}),k.querySelectorAll("[data-custom-preset]").forEach($=>{$.addEventListener("click",()=>{const f=w.selectedId?V(w.selectedId):null;!f||f.type!=="text"||(tt(f.item,$.dataset.customPreset==="title"?"title":"body"),te(),ye(f.item.id,{rerender:!0}))})}),(M=k.querySelector('[data-custom-control="fontSize"]'))==null||M.addEventListener("input",$=>{const f=w.selectedId?V(w.selectedId):null;!f||f.type!=="text"||(f.item.fontSize=Number($.target.value)/520,te(),ye(f.item.id,{rerender:!0}))}),(h=k.querySelector('[data-custom-control="lineHeight"]'))==null||h.addEventListener("input",$=>{const f=w.selectedId?V(w.selectedId):null;!f||f.type!=="text"||(f.item.lineHeight=Number($.target.value)/100,te(),ye(f.item.id,{rerender:!0}))}),(g=k.querySelector('[data-custom-control="padding"]'))==null||g.addEventListener("input",$=>{const f=w.selectedId?V(w.selectedId):null;!f||f.type!=="text"||(f.item.padding=Number($.target.value)/1e3,te(),ye(f.item.id,{rerender:!0}))}),(_=k.querySelector('[data-custom-control="weight"]'))==null||_.addEventListener("input",$=>{const f=w.selectedId?V(w.selectedId):null;!f||f.type!=="text"||(f.item.weight=Number($.target.value),te(),ye(f.item.id,{rerender:!0}))}),k.querySelectorAll("[data-custom-align]").forEach($=>{$.addEventListener("click",()=>{const f=w.selectedId?V(w.selectedId):null;!f||f.type!=="text"||(f.item.align=$.dataset.customAlign||"left",te())})}),k.querySelectorAll("[data-custom-family]").forEach($=>{$.addEventListener("click",()=>{const f=w.selectedId?V(w.selectedId):null;!f||f.type!=="text"||(f.item.family=$.dataset.customFamily==="serif"?"serif":"sans",f.item.kind=f.item.family==="serif"?"title":"body",f.item.weight=f.item.family==="serif"?Math.max(500,f.item.weight):Math.min(600,f.item.weight),te(),ye(f.item.id,{rerender:!0}))})})}(b=k.querySelector('[data-custom-control="delete"]'))==null||b.addEventListener("click",()=>{const x=w.selectedId,$=x?V(x):null;if($){if($.collection.splice($.index,1),$.type==="image"){const f=G[x];f!=null&&f.previewUrl&&URL.revokeObjectURL(f.previewUrl),delete G[x],ie(x)}w.selectedId=null,te()}})}function te(){if(!m||!n)return;const s=n.dataset.template==="page8",r=t==="edit"&&!(e!=null&&e.classList.contains("is-preview-mode"));if(m.hidden=!s,!s){m.innerHTML="",Me();return}const d=[...w.imageBoxes.map(h=>h.id),...w.textBoxes.map(h=>h.id)];(!w.selectedId||!d.includes(w.selectedId))&&(w.selectedId=d[0]||null);const v=w.imageBoxes.map(h=>{const g=bt(h),_=fe(h.id),b=!!(_.previewUrl||_.file),x=_.position||{x:.5,y:.5,zoom:1},$=`${w.selectedId===h.id?" is-selected":""}${b?"":" is-empty"}`,f=b?`<img class="compose-custom-item__image" src="${_.previewUrl}" alt="" draggable="false" style="object-position:${(x.x||.5)*100}% ${(x.y||.5)*100}%;transform:scale(${Math.max(1,x.zoom||1)});" />`:`<div class="compose-custom-item__placeholder"><span class="compose-custom-item__plus">${N("compose")}</span></div>`;return`
        <div
          class="compose-custom-item compose-custom-item--image${$}"
          data-custom-item="${h.id}"
          data-custom-type="image"
          style="left:${g.left};top:${g.top};width:${g.width};height:${g.height};"
        >
          ${r?`<input class="field__file" id="custom-image-${h.id}" type="file" accept="image/*" />`:""}
          ${r?`<div class="compose-custom-item__surface compose-custom-item__surface--image" data-custom-surface="${h.id}">${f}</div>`:`<div class="compose-custom-item__surface compose-custom-item__surface--image">${f}</div>`}
          ${r?`<button class="compose-custom-item__drag" type="button" data-custom-drag="${h.id}" aria-label="move image box">${N("drag")}</button>`:""}
          ${r?`<button class="compose-custom-item__remove" type="button" data-custom-remove="${h.id}" aria-label="remove image box">&times;</button>`:""}
          ${r?`<button class="compose-custom-item__resize" type="button" data-custom-resize="${h.id}" aria-label="resize image box"></button>`:""}
        </div>
      `}).join(""),M=w.textBoxes.map(h=>{const g=bt(h);return`
        <div
          class="compose-custom-item compose-custom-item--text${w.selectedId===h.id?" is-selected":""}"
          data-custom-item="${h.id}"
          data-custom-type="text"
          style="left:${g.left};top:${g.top};width:${g.width};height:${g.height};"
        >
          <div
            class="compose-custom-item__text"
            data-custom-text="${h.id}"
            contenteditable="${r?"true":"false"}"
            spellcheck="false"
            style="text-align:${h.align};font-size:${Math.max(11,h.fontSize*520)}px;line-height:${h.lineHeight};padding:${Math.max(4,h.padding*520)}px;font-family:${h.family==="serif"?"'Cormorant Garamond', 'Times New Roman', serif":"'Noto Sans JP', sans-serif"};font-weight:${h.weight};"
          >${Q(h.text)}</div>
          ${r?`<button class="compose-custom-item__drag" type="button" data-custom-drag="${h.id}" aria-label="move text box">${N("drag")}</button>`:""}
          ${r?`<button class="compose-custom-item__remove" type="button" data-custom-remove="${h.id}" aria-label="remove text box">&times;</button>`:""}
          ${r?`<button class="compose-custom-item__resize" type="button" data-custom-resize="${h.id}" aria-label="resize text box"></button>`:""}
        </div>
      `}).join("");m.innerHTML=`${v}${M}`,Me(),m.onpointerdown=h=>{h.target===m&&(w.selectedId=null,Ge(),Me())},m.querySelectorAll("[data-custom-item]").forEach(h=>{let g=null;h.addEventListener("pointerdown",b=>{var $e,Be;const x=h.dataset.customItem||"",$=V(x);if(!$||!u||b.target.closest("[data-custom-remove], [data-custom-resize]"))return;b.preventDefault();const f=b.target.closest("[data-custom-drag]"),R=b.target.closest("[data-custom-text]"),j=b.target.closest("[data-custom-surface]"),X=$.type==="image"?fe(x):null;ut(x);const K=u.getBoundingClientRect(),pe=!!(X!=null&&X.previewUrl||X!=null&&X.file),ge=$.type==="image"&&w.imageMode==="crop"&&pe&&j&&!f;g={pointerId:b.pointerId,itemId:x,mode:ge?"crop-image":"move",originX:ge?X.position.x||.5:$.item.x,originY:ge?X.position.y||.5:$.item.y,startX:b.clientX,startY:b.clientY,frameWidth:K.width,frameHeight:K.height,type:$.type,zoom:(($e=X==null?void 0:X.position)==null?void 0:$e.zoom)||1,targetSurface:$.type==="image"&&!pe?j:null,targetText:f?null:R,cropSurface:ge?j:null,dragged:!1},(Be=h.setPointerCapture)==null||Be.call(h,b.pointerId)}),h.addEventListener("pointermove",b=>{var j,X;if(!g||g.pointerId!==b.pointerId)return;const x=b.clientX-g.startX,$=b.clientY-g.startY;if(!g.dragged&&Math.hypot(x,$)<6)return;g.dragged=!0,b.preventDefault();const f=V(g.itemId);if(!f)return;const R={x:f.item.x,y:f.item.y,width:f.item.width,height:f.item.height};if(g.mode==="crop-image"){const K=(j=g.cropSurface)==null?void 0:j.getBoundingClientRect(),pe=fe(g.itemId),ge=pe.imageSize;if(!K||!ge)return;const $e=ge.width/ge.height,Be=K.width/K.height,We=($e>Be?K.height*$e:K.width)*g.zoom,La=($e>Be?K.height:K.width/$e)*g.zoom,Yt=Math.max(0,We-K.width),Ut=Math.max(0,La-K.height);pe.position.x=Yt?Math.min(1,Math.max(0,g.originX-x/Yt)):.5,pe.position.y=Ut?Math.min(1,Math.max(0,g.originY-$/Ut)):.5;const jt=(X=g.cropSurface)==null?void 0:X.querySelector(".compose-custom-item__image");jt&&(jt.style.objectPosition=`${pe.position.x*100}% ${pe.position.y*100}%`)}else{f.item.x=g.originX+x/g.frameWidth,f.item.y=g.originY+$/g.frameHeight,Object.assign(f.item,D(f.item,Je(f.type)));const K=f.type==="image"?{ignoreText:!0}:{};Object.assign(f.item,ae(f.item,f.item.id,Je(f.type),K)),be(f.item,f.item.id,K)||Object.assign(f.item,R),f.type==="image"?ie(f.item.id):Object.assign(f.item,Se(f.item,Ae(f.item.id))),Me(),Ct()}});const _=b=>{var j,X;if(!g||g.pointerId!==b.pointerId)return;const x=g.itemId,$=g.dragged,f=g.targetSurface,R=g.targetText;if(g=null,(j=h.releasePointerCapture)==null||j.call(h,b.pointerId),!$){if(f){(X=document.getElementById(`custom-image-${x}`))==null||X.click();return}R&&(R.focus(),He(R))}};h.addEventListener("pointerup",_),h.addEventListener("pointercancel",_)}),m.querySelectorAll("[data-custom-remove]").forEach(h=>{h.addEventListener("click",g=>{g.preventDefault(),g.stopPropagation();const _=h.dataset.customRemove,b=_?V(_):null;if(b){if(b.collection.splice(b.index,1),b.type==="image"){const x=G[_];x!=null&&x.previewUrl&&URL.revokeObjectURL(x.previewUrl),delete G[_],ie(_)}w.selectedId=null,te()}})}),m.querySelectorAll("[data-custom-text]").forEach(h=>{h.addEventListener("beforeinput",g=>{g.inputType==="insertParagraph"&&(ot(h,`
`),g.preventDefault())}),h.addEventListener("focus",()=>{const g=h.dataset.customText,_=g?V(g):null;(_==null?void 0:_.type)==="text"&&_.item.isDefaultText&&_.item.text.trim().toLowerCase()==="text"&&(_.item.text="",_.item.isDefaultText=!1,h.textContent=""),ut(h.dataset.customText||"")}),h.addEventListener("input",()=>{const g=h.dataset.customText,_=g?V(g):null;if(!_)return;_.item.text=h.innerText.replace(/\r/g,""),_.item.isDefaultText=!1;const b=k==null?void 0:k.querySelector('[data-custom-control="text"]');b&&b!==document.activeElement&&(b.value=_.item.text),ye(_.item.id)})}),m.querySelectorAll('input[id^="custom-image-"]').forEach(h=>{h.addEventListener("change",async g=>{var $;const _=h.id.replace("custom-image-",""),b=fe(_),x=(($=g.target.files)==null?void 0:$[0])||null;b.previewUrl&&(URL.revokeObjectURL(b.previewUrl),b.previewUrl=""),b.file=x,b.position={x:.5,y:.5,zoom:1},b.imageSize=x?await F(x):null,x&&(b.previewUrl=fileToPreviewUrl(x)),ie(_),te()})}),m.querySelectorAll("[data-custom-resize]").forEach(h=>{let g=null;h.addEventListener("pointerdown",b=>{var R;const x=h.dataset.customResize||"",$=V(x);if(!$||!u)return;b.preventDefault(),b.stopPropagation(),ut(x);const f=u.getBoundingClientRect();g={pointerId:b.pointerId,itemId:x,originX:$.item.x,originY:$.item.y,originWidth:$.item.width,originHeight:$.item.height,startX:b.clientX,startY:b.clientY,frameWidth:f.width,frameHeight:f.height,type:$.type},(R=h.setPointerCapture)==null||R.call(h,b.pointerId)}),h.addEventListener("pointermove",b=>{if(!g||g.pointerId!==b.pointerId)return;b.preventDefault();const x=V(g.itemId);if(!x)return;const $=Je(g.type),f={x:x.item.x,y:x.item.y,width:x.item.width,height:x.item.height};x.item.width=g.originWidth+(b.clientX-g.startX)/g.frameWidth,x.item.height=g.originHeight+(b.clientY-g.startY)/g.frameHeight,Object.assign(x.item,D(x.item,$));const R=x.type==="image"?{ignoreText:!0}:{};Object.assign(x.item,ae(x.item,x.item.id,$,R)),be(x.item,x.item.id,R)||Object.assign(x.item,f),x.type==="image"&&ie(x.item.id),Me(),Ct()});const _=b=>{var x;!g||g.pointerId!==b.pointerId||(g=null,(x=h.releasePointerCapture)==null||x.call(h,b.pointerId))};h.addEventListener("pointerup",_),h.addEventListener("pointercancel",_)}),window.requestAnimationFrame(()=>{w.textBoxes.forEach(h=>{ye(h.id)})})}function ht(){if(!n||!u)return;const s=n.dataset.template==="page8";if(Object.values(de).forEach(r=>{r&&(r.style.left="",r.style.top="",r.style.width="",r.style.height="")}),Object.entries(ue).forEach(([r,d])=>{d&&(d.style.left="",d.style.top="",d.style.width="",d.style.height="",d.style.fontSize="",d.style.lineHeight="",d.style.textAlign="",r==="editor"&&(d.style.right=""),r==="body"&&(d.style.bottom=""),r==="date"&&(d.style.bottom=""))}),B&&(B.hidden=!s||t!=="edit"),!s){m&&(m.hidden=!0,m.innerHTML="");return}w.imageBoxes=$t({imageBoxes:w.imageBoxes}),w.textBoxes=kt({textBoxes:w.textBoxes},a),te()}if(o.querySelectorAll('input[name="backgroundColor"]').forEach(s=>{s.addEventListener("change",()=>{Ue(),A(s.value)})}),Ue(),window.setTimeout(()=>{var s;A((s=o.querySelector('input[name="backgroundColor"]:checked'))==null?void 0:s.value)},0),o.querySelectorAll('input[name="templateId"]').forEach(s=>{s.addEventListener("change",()=>{je(s.value),I(s.value)})}),je(c.composeTemplateId||((Ft=o.querySelector('input[name="templateId"]:checked'))==null?void 0:Ft.value)),window.setTimeout(()=>{var s;I(c.composeTemplateId||((s=o.querySelector('input[name="templateId"]:checked'))==null?void 0:s.value))},0),document.querySelectorAll("[data-template-carousel-nav]").forEach(s=>{s.addEventListener("click",()=>{const r=document.querySelector("[data-template-carousel]");if(!r)return;const d=s.dataset.templateCarouselNav==="next"?1:-1;r.scrollBy({left:r.clientWidth*.72*d,behavior:"smooth"})})}),document.querySelectorAll("[data-color-carousel-nav]").forEach(s=>{s.addEventListener("click",()=>{const r=document.querySelector("[data-color-carousel]");if(!r)return;const d=s.dataset.colorCarouselNav==="next"?1:-1;r.scrollBy({left:r.clientWidth*.72*d,behavior:"smooth"})})}),document.querySelectorAll("[data-compose-stage-nav]").forEach(s=>{s.addEventListener("click",()=>{const r=s.dataset.composeStageNav;r&&W(r)})}),t==="select"||!i)return;S&&E&&S.addEventListener("click",()=>{const s=!E.hidden;E.hidden=s,S.setAttribute("aria-expanded",String(!s))}),P&&P.addEventListener("click",()=>{const s=!(e!=null&&e.classList.contains("is-preview-mode"));nt(!!s)}),nt(!1);const ve=document.querySelector("[data-pretext-add-toggle]"),he=document.querySelector("[data-pretext-add-popover]");function gt(){!ve||!he||(he.hidden=!0,ve.setAttribute("aria-expanded","false"))}function Ta(){!ve||!he||(he.hidden=!1,ve.setAttribute("aria-expanded","true"))}if(Y){let s=0;ve==null||ve.addEventListener("click",r=>{r.preventDefault(),r.stopPropagation(),he&&(he.hidden?Ta():gt())}),he==null||he.querySelectorAll("[data-pretext-add-kind]").forEach(r=>{r.addEventListener("click",d=>{var M;d.preventDefault(),d.stopPropagation();const v=r.dataset.pretextAddKind;v&&(s+=1,(M=oe==null?void 0:oe.sendCommand)==null||M.call(oe,{id:s,type:"add",kind:v,align:r.dataset.pretextAddAlign||"left"}),gt())})}),o.addEventListener("pointerdown",r=>{!he||he.hidden||ve!=null&&ve.contains(r.target)||he.contains(r.target)||gt()}),Ia(async()=>{const{mountComposePretextEditor:r}=await import("./pretextComposeBridge-PRR2G_de.js");return{mountComposePretextEditor:r}},__vite__mapDeps([0,1,2,3,4]),import.meta.url).then(({mountComposePretextEditor:r})=>{Y.isConnected&&(oe=r(Y,{customLayout:(l==null?void 0:l.customLayout)||{},textValues:a}))}).catch(r=>{console.error("Failed to mount pretext compose editor",r),Y.innerHTML='<p class="compose-pretext-host__error">Failed to load the editor.</p>'});return}const le=o.querySelector('[data-custom-add="text"]');let Z=(le==null?void 0:le.closest("[data-custom-add-pop]"))||null,me=(Z==null?void 0:Z.querySelector("[data-custom-add-popover]"))||null;le&&!Z&&(Z=document.createElement("div"),Z.className="compose-custom-add-pop",(Xt=le.parentElement)==null||Xt.insertBefore(Z,le),Z.appendChild(le)),le&&Z&&!me&&(Z.insertAdjacentHTML("afterbegin",`
      <div class="compose-custom-add-popover" data-custom-add-popover hidden>
        <button class="compose-custom-add-popover__option" type="button" data-custom-add-text-align="left" aria-label="Add left aligned text box">
          ${N("alignLeft")}
        </button>
        <button class="compose-custom-add-popover__option" type="button" data-custom-add-text-align="center" aria-label="Add centered text box">
          ${N("alignCenter")}
        </button>
        <button class="compose-custom-add-popover__option" type="button" data-custom-add-text-align="right" aria-label="Add right aligned text box">
          ${N("alignRight")}
        </button>
      </div>
    `),me=Z.querySelector("[data-custom-add-popover]"),le.setAttribute("aria-haspopup","true"),le.setAttribute("aria-expanded","false"));function st(){!me||!le||(me.hidden=!0,Z==null||Z.classList.remove("is-open"),le.setAttribute("aria-expanded","false"))}function Ma(){!me||!le||(me.hidden=!1,Z==null||Z.classList.add("is-open"),le.setAttribute("aria-expanded","true"))}o.querySelectorAll("[data-custom-add]").forEach(s=>{s.addEventListener("click",r=>{r.preventDefault();const d=s.dataset.customAdd;if((n==null?void 0:n.dataset.template)==="page8"){if(d==="image"){st();const v={id:_e("image"),x:.14,y:.18,width:.28,height:.22};w.imageBoxes=[...w.imageBoxes,D(v,_t)],w.selectedId=v.id,fe(v.id),ie(v.id),te();return}me&&(me.hidden?Ma():st())}})}),me==null||me.querySelectorAll("[data-custom-add-text-align]").forEach(s=>{s.addEventListener("click",r=>{r.preventDefault(),(n==null?void 0:n.dataset.template)==="page8"&&(pt(s.dataset.customAddTextAlign||"left"),st())})}),o.addEventListener("pointerdown",s=>{!me||me.hidden||Z!=null&&Z.contains(s.target)||st()}),[{inputId:"imageInputPrimary",stateKey:"primary"},{inputId:"imageInputSecondary",stateKey:"secondary"},{inputId:"imageInputAccent",stateKey:"accent"}].forEach(({inputId:s,stateKey:r})=>{const d=document.querySelector(`[data-slot="${s}"]`),v=document.getElementById(s);if(!v)return;v.addEventListener("change",async h=>{var _;const g=((_=h.target.files)==null?void 0:_[0])||null;y[r].file=g?await Wi(g,{maxWidth:1600,quality:.9}):null,y[r].position={x:.5,y:.5},y[r].imageSize=g?await F(g):null,p[s]=y[r].file||"",U(s),C(s),T({standardFiles:O()})});const M=document.querySelector(`[data-slot-remove="${s}"]`);if(M&&M.addEventListener("click",h=>{h.preventDefault(),h.stopPropagation(),p[s]="",y[r]={file:null,position:{x:.5,y:.5},imageSize:null},v.value="",U(s),T({standardFiles:O()})}),d){let h=null;d.addEventListener("pointerdown",_=>{var b,x;if(!(e!=null&&e.classList.contains("is-preview-mode"))){if((n==null?void 0:n.dataset.template)==="page8"){const $=w.imageBoxes[r];if(!$||!u)return;_.preventDefault(),_.stopPropagation();const f=u.getBoundingClientRect();h={pointerId:_.pointerId,mode:"move-box",startX:_.clientX,startY:_.clientY,originX:$.x,originY:$.y,frameWidth:f.width,frameHeight:f.height},d.classList.add("is-dragging"),(b=d.setPointerCapture)==null||b.call(d,_.pointerId);return}y[r].file&&(_.preventDefault(),_.stopPropagation(),h={pointerId:_.pointerId,mode:"pan-image",startX:_.clientX,startY:_.clientY,originX:y[r].position.x,originY:y[r].position.y},d.classList.add("is-dragging"),(x=d.setPointerCapture)==null||x.call(d,_.pointerId))}}),d.addEventListener("pointermove",_=>{if(!h||h.pointerId!==_.pointerId)return;if(_.preventDefault(),h.mode==="move-box"){const $e=h.originX+(_.clientX-h.startX)/h.frameWidth,Be=h.originY+(_.clientY-h.startY)/h.frameHeight,We=w.imageBoxes[r];We.x=Math.min(q.x+q.width-We.width,Math.max(q.x,$e)),We.y=Math.min(q.y+q.height-We.height,Math.max(q.y,Be)),ht();return}const b=d.getBoundingClientRect(),x=y[r].imageSize;if(!x)return;const $=x.width/x.height,f=b.width/b.height,R=$>f?b.height*$:b.width,j=$>f?b.height:b.width/$,X=Math.max(0,R-b.width),K=Math.max(0,j-b.height),pe=_.clientX-h.startX,ge=_.clientY-h.startY;y[r].position.x=X?Math.min(1,Math.max(0,h.originX-pe/X)):.5,y[r].position.y=K?Math.min(1,Math.max(0,h.originY-ge/K)):.5,C(s),T({standardFiles:O()})});const g=_=>{var b;!h||h.pointerId!==_.pointerId||(h=null,d.classList.remove("is-dragging"),(b=d.releasePointerCapture)==null||b.call(d,_.pointerId))};d.addEventListener("pointerup",g),d.addEventListener("pointercancel",g)}U(s),C(s)}),ht(),H.forEach(s=>{s.dataset.previousValue=Ee(s),s.addEventListener("beforeinput",r=>{var g;if(s.dataset.singleLine==="true"&&(r.inputType==="insertParagraph"||r.inputType==="insertLineBreak")){r.preventDefault();return}const d=Number(s.dataset.maxChars||0);if(!d||!r.inputType.startsWith("insert"))return;const v=Ee(s).length,M=it(s),h=((g=r.data)==null?void 0:g.length)??1;v-M+h>d&&r.preventDefault()}),s.addEventListener("paste",r=>{var x,$;r.preventDefault();const d=(($=(x=r.clipboardData)==null?void 0:x.getData("text/plain"))==null?void 0:$.replace(/\r/g,""))??"",v=s.dataset.singleLine==="true"?d.replace(/\n+/g," "):d,M=Number(s.dataset.maxChars||0),h=Ee(s).length,g=it(s),_=M?Math.max(0,M-(h-g)):v.length,b=v.slice(0,_);b&&(ot(s,b),s.dataset.previousValue=Ee(s))}),s.addEventListener("input",()=>{const r=Number(s.dataset.maxChars||0),d=Ee(s);if(r&&d.length>r){s.innerText=s.dataset.previousValue||"",He(s);return}s.dataset.previousValue=d}),s.addEventListener("blur",()=>{Ye(s),at(s)})}),t==="tags"&&i.addEventListener("submit",async s=>{var h;s.preventDefault();const r=L(),d={templateId:r.templateId,backgroundColor:r.backgroundColor,headline:r.headline,subhead:r.subhead,intro:r.intro,body:r.body,date:r.date,editor:r.editor,customLayout:r.customLayout},v=await so(d,r.standardFiles,{}),M=String(((h=et().profile)==null?void 0:h.name)||"you").trim()||"you";c.composeEditingPostId?qa(c.composeEditingPostId,{caption:aa(d),imageData:v,fixedTags:r.fixedTags,freeTags:r.freeTags,composeData:{...d,fixedTags:r.fixedTags,freeTags:r.freeTags,standardFiles:r.standardFiles}}):Ha({authorName:M,caption:aa(d),imageData:v,fixedTags:r.fixedTags,freeTags:r.freeTags,composeData:{...d,fixedTags:r.fixedTags,freeTags:r.freeTags,standardFiles:r.standardFiles}}),c.screen="timeline",c.timelineTab="recommended",c.composeStage="select",c.composeWorkingDraft=null,ne()})}function lo(){const e=document.getElementById("issueForm");e&&e.addEventListener("submit",t=>{t.preventDefault();const i=new FormData(e),o=i.getAll("issuePostIds").map(n=>String(n));o.length&&(ja({title:String(i.get("title")).trim(),subtitle:String(i.get("subtitle")||"").trim(),tone:String(i.get("tone")||"soft"),postIds:o}),re())})}function co(){mt(document.getElementById("screenArea"));function e(l){return new Promise(a=>{const p=new Image,y=URL.createObjectURL(l);p.onload=()=>{a({width:p.naturalWidth,height:p.naturalHeight}),URL.revokeObjectURL(y)},p.onerror=()=>{a(null),URL.revokeObjectURL(y)},p.src=y})}document.querySelectorAll("[data-profile-avatar-upload]").forEach(l=>{l.addEventListener("click",a=>{a.stopPropagation(),c.profileExpanded=!0,c.profileSection="edit",re(),window.setTimeout(()=>{var p;(p=document.getElementById("profileAvatarInput"))==null||p.click()},0)})}),document.querySelectorAll("[data-profile-section]").forEach(l=>{l.addEventListener("click",()=>{c.profileSection=l.dataset.profileSection,c.profileSection==="library"&&(c.profileLibraryTab=c.profileLibraryTab||"liked"),re()})}),document.querySelectorAll("[data-profile-library-tab]").forEach(l=>{l.addEventListener("click",()=>{c.profileLibraryTab=l.dataset.profileLibraryTab||"liked",re()})});const t=document.getElementById("profileAvatarInput"),i=document.getElementById("avatarCropper"),o=document.getElementById("avatarCropSurface"),n=document.getElementById("avatarCropImage");function u(){if(!(!i||!n)){if(!z.file||!z.previewUrl){i.hidden=!0,n.removeAttribute("src");return}i.hidden=!1,n.src=z.previewUrl,n.style.objectPosition=`${z.crop.x*100}% ${z.crop.y*100}%`,n.style.transform=`scale(${z.crop.zoom})`}}if(t&&t.addEventListener("change",async l=>{var p;const a=((p=l.target.files)==null?void 0:p[0])||null;z.previewUrl&&(URL.revokeObjectURL(z.previewUrl),z.previewUrl=""),z.file=a,z.imageSize=a?await e(a):null,z.crop={x:.5,y:.5,zoom:1},a&&(z.previewUrl=fileToPreviewUrl(a)),c.profileAvatarCropOpen=!!a,re()}),o){let l=null;o.addEventListener("pointerdown",p=>{var y;z.file&&(l={pointerId:p.pointerId,startX:p.clientX,startY:p.clientY,originX:z.crop.x,originY:z.crop.y},o.classList.add("is-dragging"),(y=o.setPointerCapture)==null||y.call(o,p.pointerId))}),o.addEventListener("pointermove",p=>{if(!l||l.pointerId!==p.pointerId||!z.imageSize)return;const y=o.getBoundingClientRect(),{width:S,height:E}=z.imageSize,P=S/E,B=y.width/y.height,k=P>B?y.height*P:y.width,Y=P>B?y.height:y.width/P,H=k*z.crop.zoom,w=Y*z.crop.zoom,G=Math.max(0,H-y.width),ue=Math.max(0,w-y.height),de=p.clientX-l.startX,O=p.clientY-l.startY;z.crop.x=G?Math.min(1,Math.max(0,l.originX-de/G)):.5,z.crop.y=ue?Math.min(1,Math.max(0,l.originY-O/ue)):.5,u()});const a=p=>{var y;!l||l.pointerId!==p.pointerId||(l=null,o.classList.remove("is-dragging"),(y=o.releasePointerCapture)==null||y.call(o,p.pointerId))};o.addEventListener("pointerup",a),o.addEventListener("pointercancel",a)}u();const m=document.getElementById("profileForm");m&&m.addEventListener("submit",async l=>{l.preventDefault();const a=new FormData(m),p=z.file?await zi(z.file,z.crop,{size:320}):et().profile.avatarData;Ya({name:String(a.get("name")).trim(),bio:String(a.get("bio")).trim(),avatarData:p}),Ke(),c.profileSection=null,c.profileExpanded=!0,re()}),document.querySelectorAll("[data-follow-author]").forEach(l=>{l.addEventListener("click",()=>{Ua(l.dataset.followAuthor),re()})})}function mo(){mt(document.getElementById("screenArea")),document.querySelectorAll("[data-close-post-detail]").forEach(e=>{e.addEventListener("click",()=>{$a()})})}function po(){document.querySelectorAll("[data-close-preview]").forEach(e=>{e.addEventListener("click",()=>{c.previewPostId=null,Ze()})}),document.querySelectorAll("[data-close-comments]").forEach(e=>{e.addEventListener("click",()=>{c.commentPostId=null,Ze()})}),document.querySelectorAll("[data-delete-post]").forEach(e=>{e.addEventListener("click",()=>{const t=e.dataset.deletePost;if(!t)return;const i=Fe(t);if(wa(i)&&window.confirm("この投稿を削除しますか？")){if(Wa(t),c.previewPostId===t&&(c.previewPostId=null),c.commentPostId===t&&(c.commentPostId=null),c.screen==="post"){$a();return}re()}})}),document.querySelectorAll("[data-comment-form]").forEach(e=>{e.addEventListener("submit",t=>{t.preventDefault();const i=e.querySelector('input[name="comment"]');Fa(e.dataset.commentForm,i.value),c.commentPostId=e.dataset.commentForm,Ze(),re()})})}function uo(){switch(ao(),c.screen){case"home":Ki();break;case"timeline":eo();break;case"search":to();break;case"compose":ro();break;case"magazine":lo();break;case"profile":co();break;case"post":mo();break}}function ka(e=document.getElementById("app")){if(!e)throw new Error("bootLegacyApp requires an app root element.");if(Qe=e,typeof window<"u"&&typeof window.matchMedia=="function"&&!ze){ze=window.matchMedia("(prefers-color-scheme: dark)");const t=()=>{c.homeTheme==="system"&&ne()};typeof ze.addEventListener=="function"?ze.addEventListener("change",t):typeof ze.addListener=="function"&&ze.addListener(t)}return ne(),{render:ne}}if(typeof window<"u"&&!window.__MEMORIES_REACT_HOST__){const e=document.getElementById("app");e&&ka(e)}const go=Object.freeze(Object.defineProperty({__proto__:null,bootLegacyApp:ka},Symbol.toStringTag,{value:"Module"}));export{q as P,kt as a,go as b,$t as n};
