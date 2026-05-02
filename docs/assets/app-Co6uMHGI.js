const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["./pretextComposeBridge-CUcNdA2J.js","./main-JTLeoQN4.js","./client-CTQ0Ju4c.js","./main-BO2OZ3uK.css","./pretextComposeBridge-BXwsMVV_.css"])))=>i.map(i=>d[i]);
import{_ as ya}from"./main-JTLeoQN4.js";function ba(){return""}function Jt(e){const t=new Date(e),i=t.getFullYear(),o=String(t.getMonth()+1).padStart(2,"0"),n=String(t.getDate()).padStart(2,"0");return`${i}.${o}.${n}`}function Gt(e){const t=new Date(e),i=t.getFullYear(),o=String(t.getMonth()+1).padStart(2,"0"),n=String(t.getDate()).padStart(2,"0"),h=String(t.getHours()).padStart(2,"0"),m=String(t.getMinutes()).padStart(2,"0");return`${i}.${o}.${n} ${h}:${m}`}function va(e){const t=new Date(e).getTime();return(Date.now()-t)/(1e3*60*60)<=72}function wa(e){const t=Date.now()-new Date(e).getTime(),i=Math.floor(t/6e4);if(i<1)return"たった今";if(i<60)return`${i}分前`;const o=Math.floor(i/60);return o<24?`${o}時間前`:`${Math.floor(o/24)}日前`}function V(e){return{timeline:'<svg viewBox="0 0 24 24" aria-hidden="true" fill="none" stroke="currentColor" stroke-width="1.15" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="2.3" fill="currentColor" stroke="none"/><ellipse cx="12" cy="12" rx="8.8" ry="4.1" transform="rotate(18 12 12)"/><ellipse cx="12" cy="12" rx="8.1" ry="3.3" transform="rotate(78 12 12)"/><ellipse cx="12" cy="12" rx="7.6" ry="5.2" transform="rotate(-40 12 12)"/><circle cx="18.9" cy="6.2" r="1.15" fill="currentColor" stroke="none"/><circle cx="17.8" cy="17.3" r="1" fill="currentColor" stroke="none"/><circle cx="6.1" cy="8" r="0.95" fill="currentColor" stroke="none"/><circle cx="7.1" cy="18.2" r="0.9" fill="currentColor" stroke="none"/><circle cx="11.2" cy="6.4" r="0.9" fill="currentColor" stroke="none"/></svg>',search:'<svg viewBox="0 0 24 24" aria-hidden="true" fill="none" stroke="currentColor" stroke-width="1.15" stroke-linecap="round" stroke-linejoin="round"><ellipse cx="12" cy="6.5" rx="6.9" ry="2.1"/><path d="M5.7 6.8c1 3.1 3 5.6 6.3 11.5"/><path d="M18.3 6.8c-1 3.1-3 5.6-6.3 11.5"/><circle cx="12" cy="19.8" r="1.55" fill="currentColor" stroke="none"/><circle cx="12" cy="9.2" r="0.8" fill="currentColor" stroke="none"/><circle cx="9.2" cy="8.6" r="0.65" fill="currentColor" stroke="none"/><circle cx="14.9" cy="8.3" r="0.65" fill="currentColor" stroke="none"/><circle cx="10.2" cy="11.2" r="0.55" fill="currentColor" stroke="none"/><circle cx="13.8" cy="11" r="0.55" fill="currentColor" stroke="none"/><circle cx="12" cy="12.9" r="0.55" fill="currentColor" stroke="none"/><circle cx="11" cy="15.1" r="0.45" fill="currentColor" stroke="none"/><circle cx="13" cy="15.6" r="0.45" fill="currentColor" stroke="none"/><circle cx="8.2" cy="4.2" r="0.45" fill="currentColor" stroke="none"/><circle cx="15.8" cy="3.9" r="0.45" fill="currentColor" stroke="none"/></svg>',compose:'<svg viewBox="0 0 24 24" aria-hidden="true" fill="none" stroke="currentColor" stroke-width="1.45" stroke-linecap="round"><circle cx="12" cy="12" r="2.45" fill="currentColor" stroke="none"/><path d="M12 2.9v5.1M12 16v5.1M2.9 12h5.1M16 12h5.1M5.5 5.5l3.6 3.6M14.9 14.9l3.6 3.6M18.5 5.5l-3.6 3.6M9.1 14.9l-3.6 3.6"/></svg>',issue:'<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M6 4h12a2 2 0 0 1 2 2v12H8a2 2 0 0 0-2 2z"/><path d="M6 4a2 2 0 0 0-2 2v14h14"/></svg>',profile:'<svg viewBox="0 0 24 24" aria-hidden="true" fill="none" stroke="currentColor" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round"><path d="M3.8 16.8c2.3-2.6 4.9-5.1 7.1-7.6 1.1-1.2 2-2.2 2.7-2.2.7 0 1.1.6 1.1 1.4 0 1.1-.5 2.1-.6 3.2 2.1-2.5 4.3-4.3 6.4-4.3-.6 1.4-1.7 2.6-2.6 3.8-.8 1-.9 1.8.3 1.8h2.1"/><path d="M4.1 17.1c3.8-.2 8.5-.4 16-.7"/><circle cx="20.6" cy="8" r="0.85" fill="currentColor" stroke="none"/></svg>',heart:'<svg viewBox="0 0 24 24" aria-hidden="true" fill="none" stroke="currentColor" stroke-width="1.25" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="2.5" fill="currentColor" stroke="none"/><circle cx="12" cy="12" r="4.7"/><circle cx="12" cy="12" r="7"/><circle cx="12" cy="12" r="9.2" opacity="0.68"/></svg>',comment:'<svg viewBox="0 0 24 24" aria-hidden="true" fill="none" stroke="currentColor" stroke-width="1.35" stroke-linecap="round" stroke-linejoin="round"><path d="M4.8 12.2c0-3.4 2.8-6.1 6.2-6.1 3.3 0 5.8 2.4 5.8 5.4 0 3.1-2.6 5.4-6.2 5.4-.8 0-1.6-.1-2.3-.4l-3.3 1 .9-2.7c-.7-.8-1.1-1.7-1.1-2.6Z"/><path d="m14.2 8.3 5 1.1-2 1.9 1.9 5-4.9-1.9-1.9 2Z" opacity="0.8"/></svg>',save:'<svg viewBox="0 0 24 24" aria-hidden="true" fill="none" stroke="currentColor" stroke-width="1.25" stroke-linecap="round" stroke-linejoin="round"><path d="M12 3.6 18.2 7v10L12 20.4 5.8 17V7Z"/><path d="M12 3.6v6.3M18.2 7 12 9.9 5.8 7"/><path d="M12 9.9v10.5"/><circle cx="12" cy="12" r="2.1" fill="currentColor" stroke="none"/></svg>',tag:'<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M20 11.5 11.5 20 4 12.5V5h7.5Z"/><circle cx="15.5" cy="8.5" r="1"/></svg>',spark:'<svg viewBox="0 0 24 24" aria-hidden="true"><path d="m12 3 1.9 5.1L19 10l-5.1 1.9L12 17l-1.9-5.1L5 10l5.1-1.9Z"/></svg>',arrowLeft:'<svg viewBox="0 0 24 24" aria-hidden="true" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M15.5 5.5 9 12l6.5 6.5"/><path d="M9.5 12h9"/></svg>',recommended:'<svg viewBox="0 0 24 24" aria-hidden="true" fill="none" stroke="currentColor" stroke-width="1.35" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="5.3" r="2.5" fill="currentColor" stroke="none"/><circle cx="5.8" cy="17.6" r="2.6" fill="currentColor" stroke="none"/><circle cx="18.2" cy="17.6" r="2.6" fill="currentColor" stroke="none"/><path d="M7.9 15.8 10.6 8.1"/><path d="M16.1 15.8 13.4 8.1"/><path d="M8.8 17.6h6.4"/></svg>',follow:'<svg viewBox="0 0 24 24" aria-hidden="true" fill="none" stroke="currentColor" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round"><circle cx="8.3" cy="17.5" r="3.1" fill="currentColor" stroke="none"/><circle cx="16.4" cy="8.2" r="2.5" fill="currentColor" stroke="none"/><path d="M5.1 18.7c1.3-4.2 5-7.2 9.5-7.2 1.5 0 3 .3 4.2.9"/><path d="M5 18.9c1.8 0 3.3-.6 5.1-1.7 3-1.9 5.1-4.7 7.1-8"/><path d="m17.6 6.2 1.9 1.1-1 2.1" /></svg>',close:'<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M6 6 18 18M18 6 6 18"/></svg>',image:'<svg viewBox="0 0 24 24" aria-hidden="true"><rect x="4" y="5" width="16" height="14" rx="2"/><path d="m8 15 2.5-2.5L13 15l2.5-3 2.5 3"/><circle cx="9" cy="9" r="1.2"/></svg>',trash:'<svg viewBox="0 0 24 24" aria-hidden="true" fill="none" stroke="currentColor" stroke-width="1.35" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="7.6" opacity="0.45"/><path d="M7.1 7.1 16.9 16.9"/><path d="M16.9 7.1 7.1 16.9"/><circle cx="12" cy="12" r="1.15" fill="currentColor" stroke="none"/></svg>',edit:'<svg viewBox="0 0 24 24" aria-hidden="true" fill="none" stroke="currentColor" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round"><path d="M5.4 8.2h8.2v10.2H5.4z"/><path d="M9 5.1h9.1l-4.9 5.1H9z"/><path d="M6.3 16.8 16.7 6.4"/><circle cx="12" cy="11.5" r="0.95" fill="currentColor" stroke="none"/></svg>',drag:'<svg viewBox="0 0 24 24" aria-hidden="true" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M12 4v16M4 12h16"/><path d="m12 4-2.8 2.8M12 4l2.8 2.8M20 12l-2.8-2.8M20 12l-2.8 2.8M12 20l-2.8-2.8M12 20l2.8-2.8M4 12l2.8-2.8M4 12l2.8 2.8"/></svg>'}[e]||""}function Fe(e,t,i="avatar"){return e?`<img class="avatar__image" src="${e}" alt="${i}" />`:`<span class="avatar__label">${t}</span>`}function xa(e){var t;return e?`
    <div class="overlay" data-close-comments>
      <section class="modal modal--comments" role="dialog" aria-modal="true" aria-label="Comments" onclick="event.stopPropagation()">
        <div class="modal__header">
          <h3 class="modal__title">Comments</h3>
          <button class="modal__close" data-close-comments aria-label="Close">${V("close")}</button>
        </div>
        <div class="comments-list">
          ${(t=e.comments)!=null&&t.length?e.comments.map(i=>`
            <article class="comment-item">
              <p class="comment-item__text">${i.text}</p>
              <span class="comment-item__date">${Gt(i.createdAt)}</span>
            </article>
          `).join(""):'<p class="empty-copy">No comments yet.</p>'}
        </div>
        <form class="comment-form" data-comment-form="${e.id}">
          <input class="field__input" type="text" name="comment" maxlength="80" placeholder="Write a comment" required />
          <button class="button button--primary" type="submit">Post</button>
        </form>
      </section>
    </div>
  `:""}const Vt="memories-static-site-state-v1";function _a(){try{const e=localStorage.getItem(Vt);return e?JSON.parse(e):null}catch{return null}}function Sa(e){localStorage.setItem(Vt,JSON.stringify(e))}function _t(e="id"){return`${e}_${Math.random().toString(36).slice(2,9)}_${Date.now().toString(36)}`}const dt={profile:{name:"you",bio:"A small local profile to collect your memories.",avatarData:""},posts:[],issues:[],followingAuthors:[]};function $a(e){return{id:e.id,authorName:e.authorName||"you",authorIcon:e.authorIcon||(e.authorName||"U").trim().slice(0,1).toUpperCase(),authorAvatarData:e.authorAvatarData||"",caption:e.caption||"",imageData:e.imageData||"",fixedTags:Array.isArray(e.fixedTags)?e.fixedTags:[],freeTags:Array.isArray(e.freeTags)?e.freeTags:[],likes:Number(e.likes||0),saves:Number(e.saves||0),comments:Array.isArray(e.comments)?e.comments:[],impressions:Number(e.impressions||0),liked:!!e.liked,saved:!!e.saved,createdAt:e.createdAt||new Date().toISOString(),updatedAt:e.updatedAt||null,composeData:e.composeData||null}}function Ta(e){var t,i,o;return e?{profile:{name:((t=e.profile)==null?void 0:t.name)||dt.profile.name,bio:((i=e.profile)==null?void 0:i.bio)||dt.profile.bio,avatarData:((o=e.profile)==null?void 0:o.avatarData)||""},posts:Array.isArray(e.posts)?e.posts.map($a):[],issues:Array.isArray(e.issues)?e.issues:[],followingAuthors:Array.isArray(e.followingAuthors)?e.followingAuthors:[]}:structuredClone(dt)}let me=Ta(_a());function Qe(){return me}function xe(e){me=e,Sa(me)}function ka(e){const t=structuredClone(me);t.posts.unshift({id:_t("post"),authorName:e.authorName,authorIcon:(e.authorName||"U").trim().slice(0,1).toUpperCase(),authorAvatarData:me.profile.avatarData||"",caption:e.caption||"",imageData:e.imageData,fixedTags:e.fixedTags||[],freeTags:e.freeTags||[],likes:0,saves:0,comments:[],impressions:0,liked:!1,saved:!1,createdAt:new Date().toISOString(),updatedAt:null,composeData:e.composeData||null}),xe(t)}function Ma(e,t){const i=structuredClone(me),o=i.posts.find(n=>n.id===e);o&&(o.caption=t.caption??o.caption,o.imageData=t.imageData??o.imageData,o.fixedTags=Array.isArray(t.fixedTags)?t.fixedTags:o.fixedTags,o.freeTags=Array.isArray(t.freeTags)?t.freeTags:o.freeTags,o.composeData=t.composeData??o.composeData,o.updatedAt=new Date().toISOString(),xe(i))}function Ia(e){const t=structuredClone(me);t.posts.some(o=>o.id===e)&&(t.posts=t.posts.filter(o=>o.id!==e),t.issues=t.issues.map(o=>({...o,postIds:(o.postIds||[]).filter(n=>n!==e)})).filter(o=>o.postIds.length),xe(t))}function La(e){const t=structuredClone(me),i=t.posts.find(o=>o.id===e);i&&(i.liked=!i.liked,i.likes+=i.liked?1:-1,xe(t))}function Pa(e){const t=structuredClone(me),i=t.posts.find(o=>o.id===e);i&&(i.saved=!i.saved,i.saves+=i.saved?1:-1,xe(t))}function Ea(e,t){const i=structuredClone(me),o=i.posts.find(n=>n.id===e);!o||!t.trim()||(o.comments.unshift({id:_t("comment"),text:t.trim(),createdAt:new Date().toISOString()}),xe(i))}function Ca(e){const t=structuredClone(me),i=t.posts.find(o=>o.id===e);i&&(i.impressions+=1,xe(t))}function Aa(e){const t=structuredClone(me),i=t.profile.name,o=e.avatarData||"";t.profile.name=e.name,t.profile.bio=e.bio,t.profile.avatarData=o,t.posts=t.posts.map(n=>n.authorName===i?{...n,authorName:e.name,authorIcon:(e.name||"U").trim().slice(0,1).toUpperCase(),authorAvatarData:o}:n),t.followingAuthors=t.followingAuthors.map(n=>n===i?e.name:n),xe(t)}function Ba(e){const t=structuredClone(me),i=t.followingAuthors.includes(e);t.followingAuthors=i?t.followingAuthors.filter(o=>o!==e):[...t.followingAuthors,e],xe(t)}function Na(e){const t=structuredClone(me);t.issues.unshift({id:_t("issue"),title:e.title,subtitle:e.subtitle,tone:e.tone,postIds:e.postIds,createdAt:new Date().toISOString()}),xe(t)}function Da(){return`
    <section class="opening-screen">
      <div class="opening-screen__inner">
        <div class="opening-screen__stage" aria-label="LANI">
          <div class="opening-screen__noise" aria-hidden="true"></div>
          <div class="opening-screen__glow opening-screen__glow--a" aria-hidden="true"></div>
          <div class="opening-screen__glow opening-screen__glow--b" aria-hidden="true"></div>
          <div class="opening-screen__glow opening-screen__glow--c" aria-hidden="true"></div>
          <img class="opening-screen__wordmark" src="logo/LANI_logo_toka.png" alt="" aria-hidden="true" />
          <canvas class="opening-screen__canvas" id="openingCanvas"></canvas>
        </div>
      </div>
    </section>
  `}function Ra(e){return[...e].sort((t,i)=>Wt(i)-Wt(t))}function Wt(e){var h;const t=(e.likes||0)*2+(e.saves||0)*2+(((h=e.comments)==null?void 0:h.length)||0)*1.5+(e.impressions||0)*1.2,i=va(e.createdAt)?120:0,n=220/Math.max(1,(Date.now()-new Date(e.createdAt).getTime())/(1e3*60*60));return t+i+n}function Ha(e,{query:t="",tags:i=[]}={}){const o=t.trim().toLowerCase();return e.filter(n=>{const h=[n.authorName,n.caption||"",...n.fixedTags||[],...n.freeTags||[]].join(" ").toLowerCase(),m=!o||h.includes(o),r=!i.length||i.every(a=>[...n.fixedTags||[],...n.freeTags||[]].includes(a));return m&&r})}function Wa(e){return e==="system"?typeof window<"u"&&typeof window.matchMedia=="function"&&window.matchMedia("(prefers-color-scheme: dark)").matches?"dark":"light":e==="dark"?"dark":"light"}function qa(e){return e==="system"?"System":e==="dark"?"Dark":"White"}function za(e,t){return e==="system"?`OS ${t==="dark"?"Dark":"White"}`:"Tap to switch"}function Oa(e,t){const i=e.posts||[];return t==="following"?i.filter(o=>e.followingAuthors.includes(o.authorName)):Ra(i)}const nt=[{x:70,y:78,w:210,h:300},{x:382,y:116,w:122,h:148},{x:566,y:82,w:214,h:320},{x:78,y:448,w:214,h:304},{x:360,y:318,w:204,h:434},{x:598,y:470,w:190,h:260},{x:88,y:834,w:156,h:196},{x:344,y:786,w:182,h:264},{x:640,y:872,w:142,h:172}],qt=860,zt=1120,Fa=980,Xa=1260;function Ot(e){const t=e%2,i=Math.floor(e/2);return{x:120+t*Fa,y:80+i*Xa}}function Ya(e,t,i){return`
    <article
      class="timeline-particle"
      style="left:${i.x+t.x}px; top:${i.y+t.y}px; width:${t.w}px; height:${t.h}px;"
    >
      <button class="timeline-particle__author" type="button" data-open-author="${e.authorName}" aria-label="Open ${e.authorName} profile">
        ${Fe(e.authorAvatarData,e.authorIcon,`${e.authorName} avatar`)}
      </button>
      <button class="timeline-particle__image-button" type="button" data-open-preview="${e.id}" aria-label="Open ${e.authorName} post">
        <img class="timeline-particle__image" src="${e.imageData}" alt="${e.authorName} post" />
      </button>
    </article>
  `}function Ua(e){const t=Math.max(1,Math.ceil(e.length/nt.length)),i=Array.from({length:t},(n,h)=>{const m=Ot(h),r=e.slice(h*nt.length,(h+1)*nt.length);return{placement:m,html:`
        <section
          class="timeline-board"
          style="left:${m.x}px; top:${m.y}px; width:${qt}px; height:${zt}px;"
          aria-hidden="true"
        ></section>
        ${r.map((a,p)=>Ya(a,nt[p],m)).join("")}
      `}});if(!e.length)return{width:1280,height:1120,html:`
        <div class="timeline-field__empty">
        <p class="timeline-field__empty-title">No posts yet</p>
        <p class="timeline-field__empty-copy">Create your first memory and it will appear here.</p>
      </div>
      `};const o=Ot(t-1);return{width:o.x+qt+140,height:o.y+zt+140,html:i.map(n=>n.html).join("")}}function Ft(e,t){const i=(t==null?void 0:t.homeTheme)||"dark",o=Wa(i),n=(t==null?void 0:t.homeCoreState)||"default",h=qa(i),m=za(i,o);return`
    <section class="page orbit-home orbit-home--${o} orbit-home--mode-${i} orbit-home--${n}">
      <div class="orbit-stage">
        <button class="orbit-node orbit-node--theme orbit-node--theme-mode-${i}" type="button" data-home-theme-toggle aria-label="Switch main page theme">
          <span class="orbit-node__icon orbit-node__icon--thumb" aria-hidden="true">
            <img class="orbit-node__thumb" src="references/images/LANI_ICON.png" alt="" />
          </span>
          <strong class="orbit-node__title">${h}</strong>
          <span class="orbit-node__meta">${m}</span>
        </button>
        <div class="orbit-stage__noise" aria-hidden="true"></div>
        <div class="orbit-stage__glow orbit-stage__glow--a" aria-hidden="true"></div>
        <div class="orbit-stage__glow orbit-stage__glow--b" aria-hidden="true"></div>
        <div class="orbit-stage__glow orbit-stage__glow--c" aria-hidden="true"></div>

        <button class="orbit-node orbit-node--timeline" type="button" data-home-nav="timeline">
          <span class="orbit-node__icon" aria-hidden="true">${V("timeline")}</span>
          <strong class="orbit-node__title">Timeline</strong>
        </button>

        <button class="orbit-node orbit-node--profile" type="button" data-home-nav="profile">
          <span class="orbit-node__icon" aria-hidden="true">${V("profile")}</span>
          <strong class="orbit-node__title">Profile</strong>
        </button>

        <button class="orbit-node orbit-node--search" type="button" data-home-nav="search">
          <span class="orbit-node__icon" aria-hidden="true">${V("search")}</span>
          <strong class="orbit-node__title">Search</strong>
        </button>

        <button class="orbit-node orbit-node--compose" type="button" data-home-nav="compose">
          <span class="orbit-node__icon" aria-hidden="true">${V("compose")}</span>
          <strong class="orbit-node__title">Post</strong>
        </button>

        <button class="orbit-core orbit-core--button" type="button" data-home-core-toggle aria-label="Reveal hidden home mark">
          <span class="orbit-core__surface">
            <img class="orbit-core__mark" src="logo/LANI_logo_toka.png" alt="" />
          </span>
        </button>

        <button class="orbit-sheep" type="button" data-home-sheep-toggle aria-label="Return to main page">
          <img class="orbit-sheep__mark" src="image/icon/hitsuji_toka.png" alt="" />
        </button>
      </div>
    </section>
  `}function ja(e,t){var n,h;const i=Oa(e,t.timelineTab),o=Ua(i);return`
    <section class="page timeline-page">
      <div class="timeline-screen">
        <header class="timeline-screen__chrome">
          <button class="timeline-screen__back" type="button" data-home-nav="home" aria-label="Back to main page">
            <span>${V("arrowLeft")}</span>
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
  `}function Ja(e){const t=[...e.fixedTags||[],...e.freeTags||[]];return t.length?t.map(i=>`<span class="chip chip--soft">${i}</span>`).join(""):'<div class="post-card__tags-empty">No tags yet</div>'}function Zt(e,t={}){var m;const{mode:i="full"}=t,o=i!=="compact",n=i==="full",h=i!=="minimal";return`
    <article class="post-card post-card--${i}" data-post-id="${e.id}">
      ${o?`
        <div class="post-card__head">
          <button class="avatar avatar-button" type="button" data-open-author="${e.authorName}" aria-label="Open ${e.authorName} profile">
            ${Fe(e.authorAvatarData,e.authorIcon,`${e.authorName} avatar`)}
          </button>
          <div class="post-card__author-wrap">
            <p class="post-card__author">${e.authorName}</p>
            <p class="post-card__time">${wa(e.createdAt)}</p>
          </div>
        </div>
      `:""}

      <button class="post-card__image-button" data-open-preview="${e.id}" aria-label="Open post image">
        <img class="post-card__image" src="${e.imageData}" alt="${e.authorName} post" />
      </button>

      ${n?`
        <div class="post-card__caption-row">
          <button class="tag-toggle" data-toggle-tags="${e.id}">${V("tag")} tags</button>
          ${e.caption?`<p class="post-card__caption">${e.caption}</p>`:'<p class="post-card__caption post-card__caption--empty">No caption</p>'}
        </div>

        <div class="post-card__tags" data-tags-panel="${e.id}" hidden>
          ${Ja(e)}
        </div>
      `:""}

      <div class="post-card__meta">
        ${h?`<span class="post-card__date">${Jt(e.createdAt)}</span>`:"<span></span>"}
        <div class="post-card__actions">
          <button class="icon-button ${e.liked?"is-active":""}" data-like="${e.id}" aria-label="Like post">
            ${V("heart")}
            <span>${e.likes}</span>
          </button>
          <button class="icon-button" data-comment="${e.id}" aria-label="Open comments">
            ${V("comment")}
            <span>${((m=e.comments)==null?void 0:m.length)||0}</span>
          </button>
          <button class="icon-button ${e.saved?"is-active":""}" data-save="${e.id}" aria-label="Save post">
            ${V("save")}
            <span>${e.saves}</span>
          </button>
        </div>
      </div>
    </article>
  `}const Qt={activity:["ご飯","朝ごはん","ランチ","ディナー","カフェ","散歩","買い物","ドライブ","旅行","イベント"],mood:["まったり","おしゃれ","落ち着く","ロマンチック","ワクワク","にぎやか"],scene:["初デート","休日","昼デート","夜デート","記念日","雨の日"],budget:["低予算","ふつう","ちょっと贅沢"],time:["朝","昼","夕方","夜"]},Ga={activity:"デート内容",mood:"雰囲気",scene:"シーン",budget:"予算感",time:"時間帯"},Va=Object.values(Qt).flat();function Za(e){return Va.map(t=>`
    <button class="chip chip--filter ${e.includes(t)?"is-active":""}" data-search-tag="${t}">${t}</button>
  `).join("")}function Qa(e,t){const i=t.searchTags||[],o=Ha(e.posts||[],{query:t.searchQuery||"",tags:i}),n=o.length?`
      <div class="feed-grid">
        ${o.map(h=>Zt(h,{mode:"compact"})).join("")}
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
        ${Za(i)}
      </div>

      ${n}
    </section>
  `}const Kt={id:"page1",label:"Page 1",description:"Template 1",async render(e,t,i,o){const{addWrappedText:n,drawFileCover:h,drawSlotPlaceholder:m,defaults:r}=o,a={x:84,y:84,width:1072,height:1586};e.fillStyle="#191514",e.textBaseline="top";const p={x:a.x+a.width*.55,y:a.y+a.height*.125,width:a.width*.36,height:a.width*.36,radius:0},y={x:a.x+a.width*.08,y:a.y+a.height*.48,width:a.width*.45,height:a.height*.39,radius:0};i.secondary.file?await h(e,i.secondary.file,p,i.secondary.position):m(e,p),i.primary.file?await h(e,i.primary.file,y,i.primary.position):m(e,y),e.font='600 78px "Cormorant Garamond", "Times New Roman", serif',n(e,t.headline||r.headline,{x:a.x+a.width*.07,y:a.y+a.height*.058,maxWidth:a.width*.7,lineHeight:82,maxLines:2}),e.font='500 32px "Noto Sans JP", sans-serif',n(e,t.subhead||r.subhead,{x:a.x+a.width*.07,y:a.y+a.height*.132,maxWidth:a.width*.7,lineHeight:42,maxLines:3}),e.font='500 33px "Noto Sans JP", sans-serif',n(e,t.intro||r.intro,{x:a.x+a.width*.085,y:a.y+a.height*.215,maxWidth:a.width*.37,lineHeight:48,maxLines:4}),e.font='500 31px "Noto Sans JP", sans-serif',n(e,t.body||r.body,{x:a.x+a.width*.585,y:a.y+a.height*.625,maxWidth:a.width*.245,lineHeight:46,maxLines:6}),e.font='500 28px "Noto Sans JP", sans-serif',n(e,t.date||r.date,{x:a.x+a.width*.08,y:a.y+a.height*.895,maxWidth:a.width*.31,lineHeight:34,maxLines:1});const S=t.editor||r.editor,E=a.width*.32,P=a.x+a.width*.92-Math.min(E,e.measureText(S).width);n(e,S,{x:P,y:a.y+a.height*.895,maxWidth:E,lineHeight:34,maxLines:1})}},Ka={id:"page2",label:"Page 2",description:"Template 2",async render(e,t,i,o){const{addWrappedText:n,clipRoundedRect:h,drawFileCover:m,drawSlotPlaceholder:r,defaults:a}=o,p={x:84,y:84,width:1072,height:1586};e.fillStyle="#191514",e.textBaseline="top";const y={x:p.x+p.width*.138,y:p.y+p.height*.142,width:p.width*.724,height:p.height*.374,radius:0};i.primary.file?await m(e,i.primary.file,y,i.primary.position):r(e,y),e.font='600 60px "Cormorant Garamond", "Times New Roman", serif',n(e,t.headline||a.headline,{x:p.x+p.width*.142,y:p.y+p.height*.565,maxWidth:p.width*.66,lineHeight:66,maxLines:2}),e.font='500 30px "Noto Sans JP", sans-serif',n(e,t.subhead||a.subhead,{x:p.x+p.width*.142,y:p.y+p.height*.634,maxWidth:p.width*.68,lineHeight:40,maxLines:2}),e.font='500 28px "Noto Sans JP", sans-serif',n(e,t.intro||a.intro,{x:p.x+p.width*.142,y:p.y+p.height*.698,maxWidth:p.width*.66,lineHeight:38,maxLines:4}),e.font='500 28px "Noto Sans JP", sans-serif',n(e,t.body||a.body,{x:p.x+p.width*.142,y:p.y+p.height*.792,maxWidth:p.width*.66,lineHeight:38,maxLines:4}),e.font='500 24px "Noto Sans JP", sans-serif',n(e,t.date||a.date,{x:p.x+p.width*.142,y:p.y+p.height*.948,maxWidth:p.width*.28,lineHeight:30,maxLines:1});const S=t.editor||a.editor;e.font='500 24px "Noto Sans JP", sans-serif';const E=p.width*.28,P=p.x+p.width*.86-Math.min(E,e.measureText(S).width);n(e,S,{x:P,y:p.y+p.height*.948,maxWidth:E,lineHeight:30,maxLines:1})}},ei={id:"page3",label:"Page 3",description:"Template 3",async render(e,t,i,o){const{addWrappedText:n,drawFileCover:h,drawSlotPlaceholder:m,defaults:r}=o,a={x:84,y:84,width:1072,height:1586};e.fillStyle="#191514",e.textBaseline="top";const p={x:a.x+a.width*.14,y:a.y+a.height*.22,width:a.width*.58,height:a.height*.36,radius:0},y={x:a.x+a.width*.74,y:a.y+a.height*.72,width:a.width*.14,height:a.height*.15,radius:0};i.primary.file?await h(e,i.primary.file,p,i.primary.position):m(e,p),i.secondary.file?await h(e,i.secondary.file,y,i.secondary.position):m(e,y),e.font='600 58px "Cormorant Garamond", "Times New Roman", serif',n(e,t.headline||r.headline,{x:a.x+a.width*.12,y:a.y+a.height*.075,maxWidth:a.width*.66,lineHeight:64,maxLines:2}),e.font='500 28px "Noto Sans JP", sans-serif',n(e,t.subhead||r.subhead,{x:a.x+a.width*.12,y:a.y+a.height*.145,maxWidth:a.width*.66,lineHeight:36,maxLines:2}),e.font='500 26px "Noto Sans JP", sans-serif',n(e,t.intro||r.intro,{x:a.x+a.width*.13,y:a.y+a.height*.675,maxWidth:a.width*.32,lineHeight:34,maxLines:4}),e.font='500 26px "Noto Sans JP", sans-serif',n(e,t.body||r.body,{x:a.x+a.width*.13,y:a.y+a.height*.79,maxWidth:a.width*.32,lineHeight:34,maxLines:3}),e.font='500 24px "Noto Sans JP", sans-serif',n(e,t.date||r.date,{x:a.x+a.width*.13,y:a.y+a.height*.915,maxWidth:a.width*.2,lineHeight:30,maxLines:1});const S=t.editor||r.editor,E=a.width*.16,P=a.x+a.width*.9-Math.min(E,e.measureText(S).width);n(e,S,{x:P,y:a.y+a.height*.915,maxWidth:E,lineHeight:30,maxLines:1})}},ti={id:"page4",label:"Page 4",description:"Template 4",async render(e,t,i,o){const{addWrappedText:n,drawFileCover:h,drawSlotPlaceholder:m,defaults:r}=o,a={x:84,y:84,width:1072,height:1586};e.fillStyle="#191514",e.textBaseline="top";const p={x:a.x+a.width*.11,y:a.y+a.height*.59,width:a.width*.34,height:a.height*.25,radius:0},y={x:a.x+a.width*.59,y:a.y+a.height*.13,width:a.width*.24,height:a.height*.29,radius:0};i.primary.file?await h(e,i.primary.file,p,i.primary.position):m(e,p),i.secondary.file?await h(e,i.secondary.file,y,i.secondary.position):m(e,y),e.font='600 52px "Cormorant Garamond", "Times New Roman", serif',n(e,t.headline||r.headline,{x:a.x+a.width*.11,y:a.y+a.height*.11,maxWidth:a.width*.28,lineHeight:58,maxLines:2}),e.font='500 27px "Noto Sans JP", sans-serif',n(e,t.subhead||r.subhead,{x:a.x+a.width*.11,y:a.y+a.height*.205,maxWidth:a.width*.28,lineHeight:34,maxLines:2}),e.font='500 26px "Noto Sans JP", sans-serif',n(e,t.intro||r.intro,{x:a.x+a.width*.11,y:a.y+a.height*.295,maxWidth:a.width*.28,lineHeight:34,maxLines:4}),e.font='500 26px "Noto Sans JP", sans-serif',n(e,t.body||r.body,{x:a.x+a.width*.58,y:a.y+a.height*.55,maxWidth:a.width*.2,lineHeight:34,maxLines:4}),e.font='500 24px "Noto Sans JP", sans-serif',n(e,t.date||r.date,{x:a.x+a.width*.58,y:a.y+a.height*.87,maxWidth:a.width*.14,lineHeight:30,maxLines:1});const S=t.editor||r.editor,E=a.width*.15,P=a.x+a.width*.88-Math.min(E,e.measureText(S).width);n(e,S,{x:P,y:a.y+a.height*.87,maxWidth:E,lineHeight:30,maxLines:1})}},ai={id:"page5",label:"Page 5",description:"Template 5",async render(e,t,i,o){const{addWrappedText:n,drawFileCover:h,drawSlotPlaceholder:m,defaults:r}=o,a={x:84,y:84,width:1072,height:1586};e.fillStyle="#191514",e.textBaseline="top";const p={x:a.x+a.width*.49,y:a.y+a.height*.12,width:a.width*.34,height:a.height*.42,radius:0},y={x:a.x+a.width*.12,y:a.y+a.height*.74,width:a.width*.25,height:a.height*.16,radius:0};i.primary.file?await h(e,i.primary.file,p,i.primary.position):m(e,p),i.secondary.file?await h(e,i.secondary.file,y,i.secondary.position):m(e,y),e.font='600 50px "Cormorant Garamond", "Times New Roman", serif',n(e,t.headline||r.headline,{x:a.x+a.width*.12,y:a.y+a.height*.12,maxWidth:a.width*.21,lineHeight:54,maxLines:3}),e.font='500 26px "Noto Sans JP", sans-serif',n(e,t.subhead||r.subhead,{x:a.x+a.width*.12,y:a.y+a.height*.265,maxWidth:a.width*.21,lineHeight:34,maxLines:3}),e.font='500 26px "Noto Sans JP", sans-serif',n(e,t.intro||r.intro,{x:a.x+a.width*.12,y:a.y+a.height*.42,maxWidth:a.width*.21,lineHeight:34,maxLines:5}),e.font='500 26px "Noto Sans JP", sans-serif',n(e,t.body||r.body,{x:a.x+a.width*.51,y:a.y+a.height*.69,maxWidth:a.width*.24,lineHeight:34,maxLines:4}),e.font='500 24px "Noto Sans JP", sans-serif',n(e,t.date||r.date,{x:a.x+a.width*.51,y:a.y+a.height*.89,maxWidth:a.width*.14,lineHeight:30,maxLines:1});const S=t.editor||r.editor,E=a.width*.15,P=a.x+a.width*.88-Math.min(E,e.measureText(S).width);n(e,S,{x:P,y:a.y+a.height*.89,maxWidth:E,lineHeight:30,maxLines:1})}},ii={id:"page6",label:"Page 6",description:"Template 6",async render(e,t,i,o){var T;const{addWrappedText:n,drawFileCover:h,drawSlotPlaceholder:m,defaults:r}=o,a={x:84,y:84,width:1072,height:1586};e.fillStyle="#191514",e.textBaseline="top";const p={x:a.x+a.width*.2,y:a.y+a.height*.3,width:a.width*.46,height:a.height*.36,radius:0},y={x:a.x+a.width*.12,y:a.y+a.height*.075,width:a.width*.2,height:a.height*.14,radius:0},S={x:a.x+a.width*.69,y:a.y+a.height*.8,width:a.width*.15,height:a.height*.1,radius:0};i.primary.file?await h(e,i.primary.file,p,i.primary.position):m(e,p),i.secondary.file?await h(e,i.secondary.file,y,i.secondary.position):m(e,y),(T=i.accent)!=null&&T.file?await h(e,i.accent.file,S,i.accent.position):m(e,S),e.font='600 48px "Cormorant Garamond", "Times New Roman", serif',n(e,t.headline||r.headline,{x:a.x+a.width*.5,y:a.y+a.height*.1,maxWidth:a.width*.2,lineHeight:52,maxLines:2}),e.font='500 26px "Noto Sans JP", sans-serif',n(e,t.subhead||r.subhead,{x:a.x+a.width*.5,y:a.y+a.height*.18,maxWidth:a.width*.2,lineHeight:34,maxLines:3}),e.font='500 26px "Noto Sans JP", sans-serif',n(e,t.intro||r.intro,{x:a.x+a.width*.12,y:a.y+a.height*.74,maxWidth:a.width*.22,lineHeight:34,maxLines:4}),e.font='500 26px "Noto Sans JP", sans-serif',n(e,t.body||r.body,{x:a.x+a.width*.44,y:a.y+a.height*.74,maxWidth:a.width*.14,lineHeight:34,maxLines:4}),e.font='500 24px "Noto Sans JP", sans-serif',n(e,t.date||r.date,{x:a.x+a.width*.12,y:a.y+a.height*.905,maxWidth:a.width*.16,lineHeight:30,maxLines:1});const E=t.editor||r.editor,P=a.width*.14,B=a.x+a.width*.88-Math.min(P,e.measureText(E).width);n(e,E,{x:B,y:a.y+a.height*.905,maxWidth:P,lineHeight:30,maxLines:1})}},oi={id:"page7",label:"Page 7",description:"Template 7",async render(e,t,i,o){var T;const{addWrappedText:n,drawFileCover:h,drawSlotPlaceholder:m,defaults:r}=o,a={x:84,y:84,width:1072,height:1586};e.fillStyle="#191514",e.textBaseline="top";const p={x:a.x+a.width*.12,y:a.y+a.height*.15,width:a.width*.3,height:a.height*.18,radius:0},y={x:a.x+a.width*.56,y:a.y+a.height*.48,width:a.width*.3,height:a.height*.18,radius:0},S={x:a.x+a.width*.12,y:a.y+a.height*.75,width:a.width*.3,height:a.height*.18,radius:0};i.primary.file?await h(e,i.primary.file,p,i.primary.position):m(e,p),i.secondary.file?await h(e,i.secondary.file,y,i.secondary.position):m(e,y),(T=i.accent)!=null&&T.file?await h(e,i.accent.file,S,i.accent.position):m(e,S),e.font='600 44px "Cormorant Garamond", "Times New Roman", serif',n(e,t.headline||r.headline,{x:a.x+a.width*.58,y:a.y+a.height*.16,maxWidth:a.width*.19,lineHeight:48,maxLines:2}),e.font='500 25px "Noto Sans JP", sans-serif',n(e,t.subhead||r.subhead,{x:a.x+a.width*.58,y:a.y+a.height*.245,maxWidth:a.width*.19,lineHeight:32,maxLines:3}),e.font='500 25px "Noto Sans JP", sans-serif',n(e,t.intro||r.intro,{x:a.x+a.width*.15,y:a.y+a.height*.41,maxWidth:a.width*.2,lineHeight:32,maxLines:4}),e.font='500 25px "Noto Sans JP", sans-serif',n(e,t.body||r.body,{x:a.x+a.width*.59,y:a.y+a.height*.77,maxWidth:a.width*.19,lineHeight:32,maxLines:4}),e.font='500 24px "Noto Sans JP", sans-serif',n(e,t.date||r.date,{x:a.x+a.width*.58,y:a.y+a.height*.91,maxWidth:a.width*.12,lineHeight:30,maxLines:1});const E=t.editor||r.editor,P=a.width*.14,B=a.x+a.width*.88-Math.min(P,e.measureText(E).width);n(e,E,{x:B,y:a.y+a.height*.91,maxWidth:P,lineHeight:30,maxLines:1})}},W={x:.06,y:.06,width:.88,height:.88},ze=.015,Xt={densityMode:"whitespace",recoveryMode:"restore"},ft={width:.14,height:.12},Be={width:.18,height:.08},ni={primary:{x:.08,y:.16,width:.4,height:.3},secondary:{x:.58,y:.12,width:.24,height:.2},accent:{x:.56,y:.58,width:.26,height:.18}},si={headline:{x:.08,y:.07,width:.46,height:.1,fontSize:.056,lineHeight:1.08,align:"left",family:"serif",weight:600},subhead:{x:.08,y:.16,width:.48,height:.07,fontSize:.023,lineHeight:1.34,align:"left",family:"sans",weight:500},intro:{x:.08,y:.52,width:.28,height:.18,fontSize:.021,lineHeight:1.42,align:"left",family:"sans",weight:500},body:{x:.62,y:.42,width:.22,height:.24,fontSize:.021,lineHeight:1.42,align:"left",family:"sans",weight:500},date:{x:.08,y:.91,width:.22,height:.04,fontSize:.019,lineHeight:1.25,align:"left",family:"sans",weight:500},editor:{x:.66,y:.91,width:.2,height:.04,fontSize:.019,lineHeight:1.25,align:"right",family:"sans",weight:500}},ri=[{id:"image-1",x:.1,y:.14,width:.38,height:.34}];function Ee(e,t,i){return Math.min(i,Math.max(t,e))}function Je(e){return Math.round(e/ze)*ze}function ea(e,t,i){return typeof t=="string"&&t.trim()?t.trim():`${e}-${i+1}`}function St(e,t=""){return String(e??t).replace(/\r/g,"")}function ta(e,t){const i=Ee(Je(Number.isFinite(e.width)?e.width:t.width),t.width,W.width),o=Ee(Je(Number.isFinite(e.height)?e.height:t.height),t.height,W.height);return{x:Ee(Je(Number.isFinite(e.x)?e.x:W.x),W.x,W.x+W.width-i),y:Ee(Je(Number.isFinite(e.y)?e.y:W.y),W.y,W.y+W.height-o),width:i,height:o}}function mt(e={},t=0){return{id:ea("image",e.id,t),...ta(e,ft)}}function yt(e={},t=0){const i=typeof e.text=="string",o=e.kind==="title"||e.kind==="body"?e.kind:(Number(e.fontSize)||0)>=.04||e.family==="serif"?"title":"body";return{id:ea("text",e.id,t),kind:o,text:St(e.text,"text"),isDefaultText:typeof e.isDefaultText=="boolean"?e.isDefaultText:!i,...ta(e,Be),fontSize:Ee(Number.isFinite(e.fontSize)?e.fontSize:.028,.014,.09),lineHeight:Ee(Number.isFinite(e.lineHeight)?e.lineHeight:1.35,1,2.2),padding:Ee(Number.isFinite(e.padding)?e.padding:.012,.004,.05),align:e.align==="center"||e.align==="right"?e.align:"left",family:e.family==="serif"?"serif":"sans",weight:Ee(Number.isFinite(e.weight)?e.weight:e.family==="serif"?600:500,400,700)}}function li(e={}){return Object.entries(si).map(([t,i],o)=>yt({id:`text-${o+1}`,text:St(e[t],""),x:i.x,y:i.y,width:i.width,height:i.height,fontSize:i.fontSize,lineHeight:i.lineHeight,padding:i.family==="serif"?.01:.012,align:i.align,kind:i.family==="serif"&&i.fontSize>=.04?"title":"body",family:i.family,weight:i.weight},o)).filter(t=>t.text.trim())}function aa(e={}){return{densityMode:e.densityMode==="fill"?"fill":Xt.densityMode,recoveryMode:e.recoveryMode==="keep"?"keep":Xt.recoveryMode}}function bt(e={}){return Array.isArray(e.imageBoxes)&&e.imageBoxes.length?e.imageBoxes.map((t,i)=>mt(t,i)):e.imageBoxes&&typeof e.imageBoxes=="object"?Object.entries(ni).map(([t,i],o)=>{var h;const n=((h=e.imageBoxes)==null?void 0:h[t])||{};return mt({id:t,x:Number.isFinite(n.x)?n.x:i.x,y:Number.isFinite(n.y)?n.y:i.y,width:Number.isFinite(n.width)?n.width:i.width,height:Number.isFinite(n.height)?n.height:i.height},o)}):ri.map((t,i)=>mt(t,i))}function vt(e={},t={}){if(Array.isArray(e.textBoxes)&&e.textBoxes.length)return e.textBoxes.map((n,h)=>yt(n,h));const i=!!(e.imageBoxes&&!Array.isArray(e.imageBoxes)&&typeof e.imageBoxes=="object"),o=li(t);return i&&o.length?o:[yt({id:"text-1",text:St(t.headline,"text"),isDefaultText:!t.headline,x:.56,y:.18,width:.24,height:.14,kind:"title",fontSize:.046,lineHeight:1.12,padding:.01,family:"serif",weight:600},0)]}function ci(e={},t={}){return{options:aa(e),imageBoxes:bt(e),textBoxes:vt(e,t)}}function pt(e){return{left:`${e.x*100}%`,top:`${e.y*100}%`,width:`${e.width*100}%`,height:`${e.height*100}%`}}function Yt(e,t){return{x:e.x+e.width*t.x,y:e.y+e.height*t.y,width:e.width*t.width,height:e.height*t.height,radius:0}}function Le(e){return Je(e)}const di={id:"page8",label:"Page 8",description:"Custom free layout",async render(e,t,i,o){var y,S,E,P,B,T,Y,N,w,j,pe,se;const{addWrappedText:n,drawFileCover:h}=o,m={x:84,y:84,width:1072,height:1586},r=ci(t.customLayout||{},t),a=Array.isArray((y=t.customLayout)==null?void 0:y.pretextBoxes)?t.customLayout.pretextBoxes:null;e.fillStyle="#191514",e.textBaseline="top";const p=o.page8Files||{};if(((S=t.customLayout)==null?void 0:S.editorType)==="pretext"&&a){for(const I of a){const z={x:m.x+I.x/794*m.width,y:m.y+I.y/1123*m.height,width:I.width/794*m.width,height:I.height/1123*m.height,radius:0};if(I.kind==="image"){(E=I.data)!=null&&E.src&&await h(e,I.data.src,z,{cropX:Number(I.data.cropX)||0,cropY:Number(I.data.cropY)||0,zoom:Math.max(1,Number(I.data.zoom)||1)});continue}const X=Math.max(0,Number((P=I.data)==null?void 0:P.padding)||0),R=Math.max(12,Number((B=I.data)==null?void 0:B.lineHeight)||34);e.textAlign=((T=I.data)==null?void 0:T.align)||"left",e.fillStyle=((Y=I.data)==null?void 0:Y.color)||"#191514",e.font=`${Number((N=I.data)==null?void 0:N.fontWeight)||400} ${Math.max(12,Number((w=I.data)==null?void 0:w.fontSize)||22)}px ${((j=I.data)==null?void 0:j.fontFamily)||'"Noto Sans JP", sans-serif'}`;const Q=e.textAlign==="right"?z.x+z.width-X:e.textAlign==="center"?z.x+z.width/2:z.x+X;n(e,((pe=I.data)==null?void 0:pe.text)||"",{x:Q,y:z.y+X,maxWidth:Math.max(24,z.width-X*2),lineHeight:R,maxLines:Math.max(1,Math.floor(Math.max(R,z.height-X*2)/R))})}return}for(const q of r.imageBoxes){const L=Yt(m,q);(se=p[q.id])!=null&&se.file&&await h(e,p[q.id].file,L,p[q.id].position)}r.textBoxes.forEach(q=>{const L=Yt(m,q),I=Math.max(0,m.width*(q.padding||0)),z=q.family==="serif"?'"Cormorant Garamond", "Times New Roman", serif':'"Noto Sans JP", sans-serif';e.textAlign=q.align,e.font=`${q.weight} ${Math.round(m.width*q.fontSize)}px ${z}`;const X=q.align==="right"?L.x+L.width-I:q.align==="center"?L.x+L.width/2:L.x+I,R=Math.max(24,L.width-I*2),Q=m.width*q.fontSize*q.lineHeight,re=Math.max(Q,L.height-I*2);n(e,q.text||"",{x:X,y:L.y+I,maxWidth:R,lineHeight:Q,maxLines:Math.max(1,Math.floor(re/Math.max(12,Q)))})})}},ia=[Kt,Ka,ei,ti,ai,ii,oi,di],we=Kt.id,Ut=new Map(ia.map(e=>[e.id,e]));function mi(e){return Ut.get(e)||Ut.get(we)}const pi=[{value:"#f8f4ee",label:"Ivory"},{value:"#f4e5de",label:"Blush"},{value:"#ece4d8",label:"Sand"},{value:"#e5ece7",label:"Sage"}];function hi(e,t,i=[]){return`
    <section class="compose-group compose-group--tags">
      <div class="compose-group__head">
        <h3>${Ga[e]}</h3>
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
  `}function oa(e=we){return`
    <div class="template-carousel">
      <button class="template-carousel__nav" type="button" data-template-carousel-nav="prev" aria-label="Previous template">&larr;</button>
      <div class="template-carousel__viewport" data-template-carousel>
        <div class="template-thumb-track">
          ${ia.map(t=>`
            <label class="template-thumb ${e===t.id?"is-active":""}">
              <input type="radio" name="templateId" value="${t.id}" ${e===t.id?"checked":""} />
              <span class="template-thumb__preview template-option__preview template-option__preview--${t.id}" aria-hidden="true"></span>
            </label>
          `).join("")}
        </div>
      </div>
      <button class="template-carousel__nav" type="button" data-template-carousel-nav="next" aria-label="Next template">&rarr;</button>
    </div>
  `}function na(e){return`
    <div class="color-picker-inline">
      <div class="color-chip-track color-chip-track--inline" data-color-carousel>
        ${pi.map(t=>`
          <label class="color-chip color-chip--inline ${e===t.value?"is-active":""}" title="${t.label}">
            <input type="radio" name="backgroundColor" value="${t.value}" ${e===t.value?"checked":""} />
            <span class="color-chip__swatch" style="--swatch:${t.value}"></span>
            <span class="color-chip__label">${t.label}</span>
          </label>
        `).join("")}
      </div>
    </div>
  `}function ht({id:e,slotClass:t}){return`
    <div class="compose-slot ${t}" data-slot="${e}">
      <input class="field__file" id="${e}" type="file" accept="image/*" />
      <label class="compose-slot__surface" for="${e}">
        <div class="compose-slot__image" data-slot-image="${e}" hidden></div>
        <div class="compose-slot__placeholder" data-slot-placeholder="${e}">
          <span class="compose-slot__plus">${V("compose")}</span>
        </div>
      </label>
      <button class="compose-slot__remove" type="button" data-slot-remove="${e}" hidden aria-label="remove image">&times;</button>
    </div>
  `}function ut(e){return`
    <div class="compose-slot ${e}">
      <div class="compose-slot__surface">
        <div class="compose-slot__placeholder">
          <span class="compose-slot__plus">${V("compose")}</span>
        </div>
      </div>
    </div>
  `}function sa(e,t,i,o={}){const{editable:n=!1,interactiveSlots:h=!1}=o,m=t==="page8",r=n?"compose-sheet":"compose-sheet compose-sheet--locked",a=m?`${r} compose-sheet--custom`:r,p=n?"true":"false";return m?`
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
        ${h?ht({id:"imageInputSecondary",slotClass:"compose-slot--secondary"}):ut("compose-slot--secondary")}
        ${h?ht({id:"imageInputAccent",slotClass:"compose-slot--accent"}):ut("compose-slot--accent")}
        ${h?ht({id:"imageInputPrimary",slotClass:"compose-slot--primary"}):ut("compose-slot--primary")}
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
  `}function ui(e,t){return`
    <section class="compose-group compose-group--tags-stage">
      <div class="compose-group__head">
        <h3>Tags</h3>
      </div>
      ${Object.entries(Qt).map(([i,o])=>hi(i,o,e)).join("")}
      <section class="compose-group compose-group--tags compose-group--tags-nested">
        <div class="compose-group__head">
          <h3>Free Tags</h3>
        </div>
        <label class="field">
          <input class="field__input" type="text" name="freeTags" placeholder="cafe, spring, film" value="${t}" />
        </label>
      </section>
    </section>
  `}function gi({values:e,selectedId:t,selectedBackground:i,headerMini:o,headerTitle:n}){return`
    <section class="page page--compose page--compose--select" data-compose-stage="select">
      <header class="page-header page-header--with-back page-header--compose">
        <button class="button button--ghost page-back" type="button" data-close-compose>Back</button>
        <div>
          <p class="page-header__mini">${o}</p>
          <h2 class="page-header__title">${n}</h2>
        </div>
      </header>

      <section class="compose-select-shell">
        <section class="compose-preview compose-preview--select">
          ${sa(e,t,i,{editable:!1,interactiveSlots:!1})}
        </section>

        <section class="compose-group compose-group--template compose-group--template-select">
          <div class="compose-group__head compose-group__head--template compose-group__head--template-select">
            <h3>Template</h3>
            ${na(i)}
            <button class="button button--primary compose-confirm-button" type="button" data-compose-stage-nav="edit">編集する</button>
          </div>
          ${oa(t)}
        </section>
      </section>
    </section>
  `}function fi({values:e,selectedId:t,selectedBackground:i,isEditing:o,headerMini:n,headerTitle:h}){return`
    <section class="page page--compose page--compose--edit" data-compose-stage="edit">
      <header class="page-header page-header--with-back page-header--compose">
        <button class="button button--ghost page-back" type="button" data-compose-stage-nav="select">Back</button>
        <div>
          <p class="page-header__mini">${n}</p>
          <h2 class="page-header__title">${h}</h2>
        </div>
      </header>

      <form class="compose-form compose-form--edit" id="composeForm">
        <section class="compose-editor compose-editor--focus ${t==="page8"?"compose-editor--page8":""}">
          <section class="compose-preview compose-preview--editor ${t==="page8"?"compose-preview--page8":""}">
            ${t==="page8"?`
                <div class="compose-pretext-host-shell compose-pretext-host-shell--page8">
                  <div class="compose-pretext-host" data-compose-pretext-host></div>
                </div>
              `:sa(e,t,i,{editable:!0,interactiveSlots:!0})}
          </section>
        </section>
        <div class="compose-flow-actions">
          <button class="button button--ghost compose-stage-back" type="button" data-compose-stage-nav="select">Template</button>
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
  `}function yi({selectedId:e,selectedBackground:t,selectedFixedTags:i,freeTagsValue:o,submitLabel:n,isEditing:h,headerMini:m,headerTitle:r}){return`
    <section class="page page--compose page--compose--tags" data-compose-stage="tags">
      <header class="page-header page-header--with-back page-header--compose">
        <button class="button button--ghost page-back" type="button" data-compose-stage-nav="edit">Back</button>
        <div>
          <p class="page-header__mini">${m}</p>
          <h2 class="page-header__title">${r}</h2>
        </div>
      </header>

      <form class="compose-form compose-form--tags" id="composeForm">
        <section class="compose-tag-stage">
          <section class="compose-group compose-group--template compose-group--template-summary">
            <div class="compose-group__head compose-group__head--template">
              <h3>Template</h3>
              ${na(t)}
            </div>
            ${oa(e)}
          </section>
          ${ui(i,o)}
        </section>
        <div class="compose-flow-actions">
          <button class="button button--ghost compose-stage-back" type="button" data-compose-stage-nav="edit">Edit</button>
          <button class="button button--primary compose-submit-button" type="submit">${n}</button>
        </div>
      </form>
    </section>
  `}function bi(e=we){const t=typeof e=="object"?e:{selectedTemplateId:e},i=t.draft||{},o={headline:i.headline||"text",subhead:i.subhead||"text",intro:i.intro||"text",body:i.body||"text",date:i.date||"text",editor:i.editor||"編集者：haru"},n=t.selectedTemplateId||i.templateId||we,h=t.selectedBackground||i.backgroundColor||"#f8f4ee",m=Array.isArray(i.fixedTags)?i.fixedTags:[],r=Array.isArray(i.freeTags)?i.freeTags.join(", "):i.freeTags||"",a=t.isEditing?"Update Post":"Post This Layout",p=t.isEditing?"post editor":"template editor",y=t.isEditing?"Edit Post":"Compose",S=t.stage||"select";return S==="select"?gi({values:o,selectedId:n,selectedBackground:h,headerMini:p,headerTitle:y}):S==="tags"?yi({selectedId:n,selectedBackground:h,selectedFixedTags:m,freeTagsValue:r,submitLabel:a,isEditing:!!t.isEditing,headerMini:p,headerTitle:y}):fi({values:o,selectedId:n,selectedBackground:h,isEditing:!!t.isEditing,headerMini:p,headerTitle:y})}function vi(e){return e.length?e.map(t=>`
    <label class="issue-post-option">
      <input type="checkbox" name="issuePostIds" value="${t.id}" />
      <img src="${t.imageData}" alt="${t.authorName}の投稿画像" />
      <div class="issue-post-option__meta">
        <strong>${t.authorName}</strong>
        <span>${Jt(t.createdAt)}</span>
      </div>
    </label>
  `).join(""):`
      <section class="empty-panel">
        <p class="empty-panel__title">まだまとめる投稿がありません</p>
        <p class="empty-panel__copy">先に投稿を作ると、ここで選んで一冊の下書きにできます。</p>
      </section>
    `}function wi(e,t){return e.length?e.map(i=>{const o=t.filter(n=>i.postIds.includes(n.id));return`
      <article class="issue-card issue-card--${i.tone}">
        <p class="issue-card__eyebrow">memories issue</p>
        <h3 class="issue-card__title">${i.title}</h3>
        <p class="issue-card__subtitle">${i.subtitle||"sub title free"}</p>
        <div class="issue-card__count">${o.length} posts selected</div>
        <div class="issue-card__thumbs">
          ${o.slice(0,3).map(n=>`<img src="${n.imageData}" alt="${n.authorName}の投稿画像" />`).join("")}
        </div>
      </article>
    `}).join(""):'<p class="empty-copy">まだ雑誌の下書きはありません。</p>'}function xi(e){return`
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
            ${vi(e.posts||[])}
          </div>
        </section>

        <button class="button button--primary button--full" type="submit">下書きを保存</button>
      </form>

      <section class="section-block">
        <div class="section-head">
          <h3>保存済みの雑誌下書き</h3>
        </div>
        <div class="issue-list">
          ${wi(e.issues||[],e.posts||[])}
        </div>
      </section>
    </section>
  `}function ra(e){return[...new Set(e.map(t=>t.authorName))]}function la(e){return`@${String(e||"user").trim().replace(/\s+/g,"_").toLowerCase()}`}function st(e,t){return e.length?`
    <div class="feed-grid feed-grid--single">
      ${e.map(i=>Zt(i,{mode:"minimal"})).join("")}
    </div>
  `:`<p class="empty-copy">${t}</p>`}function _i(e,t){return e.length?`
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
  `:'<p class="empty-copy">Saved magazine issues will appear here.</p>'}function Si(e,t,i){const o=e.posts.filter(N=>N.authorName===e.profile.name),n=e.posts.filter(N=>N.liked),h=e.posts.filter(N=>N.saved),m=e.issues||[],r=e.followingAuthors,a=i.filter(N=>N!==e.profile.name),p=t.profileSection||"identity",y=t.profileLibraryTab||"liked",S=!!t.profileAvatarCropOpen,E=la(e.profile.name),B={identity:{label:"Name / ID",value:`<span class="profile-node__avatar">${Fe(e.profile.avatarData,(e.profile.name||"Y").slice(0,1).toUpperCase(),`${e.profile.name} avatar`)}</span>`,angle:0,centerLabel:""},library:{label:"Likes / Saved",value:`<span class="profile-node__icon-pair">${V("heart")}${V("save")}</span>`,angle:60},edit:{label:"Edit",value:"profile",angle:120},posts:{label:"Posts",value:String(o.length),angle:180},magazine:{label:"Magazine",value:String(m.length),angle:240},network:{label:"Follow / Follower",value:`${r.length} / ${a.length}`,angle:300}},T=B[p]||B.identity;function Y(){switch(p){case"identity":return`
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
                <p class="profile-column-title">Following ${r.length}</p>
                <div class="follow-list">
                  ${r.length?r.map(N=>`
                    <article class="follow-item">
                      <div class="follow-item__main">
                        <div class="avatar">${N.slice(0,1).toUpperCase()}</div>
                        <span>${N}</span>
                      </div>
                      <button class="button button--ghost is-active" type="button" data-follow-author="${N}">Following</button>
                    </article>
                  `).join(""):'<p class="empty-copy">No following yet.</p>'}
                </div>
              </section>
              <section class="profile-library-block">
                <p class="profile-column-title">Followers ${a.length}</p>
                <div class="follow-list">
                  ${a.length?a.map(N=>`
                    <article class="follow-item">
                      <div class="follow-item__main">
                        <div class="avatar">${N.slice(0,1).toUpperCase()}</div>
                        <span>${N}</span>
                      </div>
                      <button class="button button--ghost" type="button" data-open-author="${N}">View</button>
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
              <button class="profile-library-tab ${y==="liked"?"is-active":""}" type="button" data-profile-library-tab="liked" aria-pressed="${y==="liked"?"true":"false"}">${V("heart")}<span>Like</span></button>
              <button class="profile-library-tab ${y==="saved"?"is-active":""}" type="button" data-profile-library-tab="saved" aria-pressed="${y==="saved"?"true":"false"}">${V("save")}<span>Save</span></button>
            </div>
            <section class="profile-library-panel">
              <p class="profile-column-title">${y==="liked"?"Liked Posts":"Saved Posts"}</p>
              ${y==="liked"?st(n,"Posts you liked will appear here."):st(h,"Posts you saved will appear here.")}
            </section>
          </section>
        `;case"magazine":return`
          <section class="profile-section-panel">
            <div class="section-head">
              <h3>Magazine</h3>
            </div>
            ${_i(m,e.posts||[])}
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
                      ${Fe(e.profile.avatarData,(e.profile.name||"Y").slice(0,1).toUpperCase(),`${e.profile.name} avatar`)}
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
            ${st(o,"Your posts will appear here after you publish one.")}
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
            ${T.centerLabel!==""?`<span class="profile-orbit__display-label">${T.label}</span>`:""}
            <strong class="profile-orbit__display-value">${T.value}</strong>
          </div>
        </div>
      </section>

      ${Y()}
    </section>
  `}function $i(e,t){var h;const i=ra(e.posts||[]),o=e.posts.filter(m=>m.authorName===t),n=e.followingAuthors.includes(t);return`
    <section class="page page--profile">
      <header class="page-header page-header--with-back">
        <button class="button button--ghost page-back" type="button" data-close-profile>Back</button>
        <div>
          <p class="page-header__mini">author profile</p>
          <h2 class="page-header__title">${t}</h2>
        </div>
      </header>

      <section class="profile-card">
        <div class="profile-card__avatar">${Fe((h=o[0])==null?void 0:h.authorAvatarData,(t||"Y").slice(0,1).toUpperCase(),`${t} avatar`)}</div>
        <div class="profile-card__body">
          <div class="profile-card__heading">
            <div>
              <h3 class="profile-card__name">${t}</h3>
              <p class="profile-card__bio">${la(t)}</p>
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
        ${st(o,"This author has no posts yet.")}
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
  `}function Ti(e,t={}){const i=ra(e.posts||[]),o=t.profileAuthor||null;return!o||o===e.profile.name?Si(e,t,i):$i(e,o)}function ki(e,t={}){var h;if(!e)return`
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
            ${Fe(e.authorAvatarData,e.authorIcon,`${e.authorName} avatar`)}
          </button>
          <div>
            <p class="post-card__author">${e.authorName}</p>
            <p class="post-card__time">${Gt(e.createdAt)}</p>
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
              ${V("heart")}
              <span>${e.likes}</span>
            </button>
            <button class="icon-button" data-comment="${e.id}" aria-label="Open comments">
              ${V("comment")}
              <span>${((h=e.comments)==null?void 0:h.length)||0}</span>
            </button>
            <button class="icon-button ${e.saved?"is-active":""}" data-save="${e.id}" aria-label="Save post">
              ${V("save")}
              <span>${e.saves}</span>
            </button>
          </div>
          ${o||i?`
            <div class="post-detail-card__owner-actions">
              ${o?`
                <button class="button button--ghost post-detail-card__edit" type="button" data-edit-post="${e.id}" aria-label="Edit post">
                  ${V("edit")}
                </button>
              `:""}
              ${i?`
                <button class="button button--ghost post-detail-card__delete" type="button" data-delete-post="${e.id}" aria-label="Delete post">
                  ${V("trash")}
                </button>
              `:""}
            </div>
          `:""}
        </div>
      </article>
    </section>
  `}async function Mi(e,t={}){const{maxWidth:i=900,quality:o=.82}=t,n=await createImageBitmap(e),h=n.width/n.height,m=Math.min(n.width,i),r=Math.round(m/h),a=document.createElement("canvas");return a.width=m,a.height=r,a.getContext("2d").drawImage(n,0,0,m,r),a.toDataURL("image/webp",o)}async function Ii(e,t,i={}){var T;const{size:o=320}=i,n=await createImageBitmap(e),h=document.createElement("canvas");h.width=o,h.height=o;const m=h.getContext("2d");if(!m)return"";const r=Math.max(1,Number(t==null?void 0:t.zoom)||1),a=Math.min(1,Math.max(0,Number(t==null?void 0:t.x)||.5)),p=Math.min(1,Math.max(0,Number(t==null?void 0:t.y)||.5)),y=Math.max(o/n.width,o/n.height);n.width*y*r,n.height*y*r;const S=o/(y*r),E=o/(y*r),P=Math.max(0,(n.width-S)*a),B=Math.max(0,(n.height-E)*p);return m.clearRect(0,0,o,o),m.save(),m.beginPath(),m.arc(o/2,o/2,o/2,0,Math.PI*2),m.closePath(),m.clip(),m.drawImage(n,P,B,S,E,0,0,o,o),m.restore(),(T=n.close)==null||T.call(n),h.toDataURL("image/png")}const c={screen:"opening",timelineOverlay:null,timelineTab:"recommended",timelinePan:{x:-360,y:-220},searchQuery:"",searchTags:[],homeTheme:"dark",homeCoreState:"default",homeCoreTapTimestamps:[],previewPostId:null,commentPostId:null,profileEditOpen:!1,profileAuthor:null,profileSection:null,profileLibraryTab:"liked",profileExpanded:!0,profileOrbitRotation:0,profileAvatarCropOpen:!1,composeStage:"select",composeTemplateId:we,composeBackgroundColor:"#f8f4ee",composeEditingPostId:null,composeWorkingDraft:null,openingTapGuardUntil:0,postReturnScreen:"timeline",postReturnProfileAuthor:null,profileReturnState:null,composeReturnState:null},gt=["dark","light","system"],Pe={headline:"text",subhead:"text",intro:"text",body:"text",date:"text",editor:"編集者：haru"};function $e(e={}){var t,i,o;return{file:typeof e.file=="string"?e.file:null,position:{x:Number((t=e.position)==null?void 0:t.x)||.5,y:Number((i=e.position)==null?void 0:i.y)||.5,zoom:Math.max(1,Number((o=e.position)==null?void 0:o.zoom)||1)},imageSize:e.imageSize&&Number.isFinite(e.imageSize.width)&&Number.isFinite(e.imageSize.height)?{width:e.imageSize.width,height:e.imageSize.height}:null}}function ca(e={}){var t,i,o;return{templateId:e.templateId||we,backgroundColor:e.backgroundColor||"#f8f4ee",headline:e.headline||Pe.headline,subhead:e.subhead||Pe.subhead,intro:e.intro||Pe.intro,body:e.body||Pe.body,date:e.date||Pe.date,editor:e.editor||Pe.editor,fixedTags:Array.isArray(e.fixedTags)?[...e.fixedTags]:[],freeTags:Array.isArray(e.freeTags)?[...e.freeTags]:String(e.freeTags||"").split(",").map(n=>n.trim()).filter(Boolean),customLayout:e.customLayout?JSON.parse(JSON.stringify(e.customLayout)):null,standardFiles:{primary:$e((t=e.standardFiles)==null?void 0:t.primary),secondary:$e((i=e.standardFiles)==null?void 0:i.secondary),accent:$e((o=e.standardFiles)==null?void 0:o.accent)}}}let Ve=null,Te=0,rt=null,ve=null,qe=null;const O={file:null,previewUrl:"",imageSize:null,crop:{x:.5,y:.5,zoom:1}};function da(){rt&&(window.clearTimeout(rt),rt=null)}function ma(){da(),c.homeCoreState="default",c.homeCoreTapTimestamps=[]}function Ze(){O.previewUrl&&URL.revokeObjectURL(O.previewUrl),O.file=null,O.previewUrl="",O.imageSize=null,O.crop={x:.5,y:.5,zoom:1},c.profileAvatarCropOpen=!1}function Li(){ve!=null&&ve.unmount&&ve.unmount(),ve=null}function Pi(e=c.homeTheme){return e==="system"?typeof window<"u"&&typeof window.matchMedia=="function"&&window.matchMedia("(prefers-color-scheme: dark)").matches?"dark":"light":e==="dark"?"dark":"light"}function Ei(){var t;const e=Qe();switch(c.screen){case"home":return Ft(e,c);case"timeline":return ja(e,c);case"search":return Qa(e,c);case"compose":return bi({stage:c.composeStage,selectedTemplateId:c.composeTemplateId,selectedBackground:c.composeBackgroundColor,draft:c.composeWorkingDraft||((t=Oe(c.composeEditingPostId))==null?void 0:t.composeData)||null,isEditing:!!c.composeEditingPostId});case"magazine":return xi(e);case"profile":return Ti(e,c);case"post":return ki(Oe(c.previewPostId),{canDelete:pa(Oe(c.previewPostId))});default:return Ft(e,c)}}function Oe(e){return Qe().posts.find(t=>t.id===e)}function pa(e){return e?e.authorName===Qe().profile.name:!1}function Ci(){if(!Ve)return;const e=["app-shell"],t=["screen-area"],i=Pi(c.homeTheme);e.push(`app-shell--theme-${i}`),e.push(`app-shell--theme-mode-${c.homeTheme}`),c.screen==="home"?(e.push("app-shell--home"),t.push("screen-area--home")):c.screen==="timeline"?(e.push("app-shell--timeline"),t.push("screen-area--timeline")):c.screen==="compose"?(e.push("app-shell--compose"),t.push("screen-area--compose")):c.screen==="search"&&t.push("screen-area--search"),Ve.innerHTML=`
    <div class="${e.join(" ")}">
      <main class="${t.join(" ")}" id="screenArea"></main>
      ${ba()}
      <div id="modalRoot"></div>
    </div>
  `}function Ge(){const e=document.getElementById("modalRoot");if(!e)return;const t=c.commentPostId?Oe(c.commentPostId):null;e.innerHTML=`
    ${xa(t)}
  `,Qi()}function ce(){const e=document.getElementById("screenArea");e&&(e.innerHTML=Ei(),Ki(),Ge())}function ne(){if(Ve){if(Li(),c.screen==="opening"){Ve.innerHTML=Da(),Ri();return}Ci(),ce(),Wi()}}function wt(){return{screen:c.screen,previewPostId:c.previewPostId,profileAuthor:c.profileAuthor,postReturnScreen:c.postReturnScreen,postReturnProfileAuthor:c.postReturnProfileAuthor}}function ha(e,t="home"){if(!e){lt(t);return}c.screen=e.screen||t,c.previewPostId=e.previewPostId||null,c.commentPostId=null,c.profileEditOpen=!1,c.profileAuthor=c.screen==="profile"&&e.profileAuthor||null,c.postReturnScreen=e.postReturnScreen||"home",c.postReturnProfileAuthor=e.postReturnProfileAuthor||null,ne()}function lt(e){e!=="home"&&ma(),e==="compose"&&c.screen!=="compose"&&(c.composeReturnState=wt()),e==="profile"&&c.screen!=="profile"&&(c.profileReturnState=wt()),e!=="profile"&&(Ze(),c.profileReturnState=null),e!=="home"&&(c.timelineOverlay=null),e!=="compose"&&(c.composeEditingPostId=null,c.composeStage="select",c.composeBackgroundColor="#f8f4ee",c.composeWorkingDraft=null,c.composeReturnState=null),c.screen=e,c.previewPostId=null,c.commentPostId=null,e==="compose"&&(c.composeStage="select",c.composeBackgroundColor="#f8f4ee",c.composeTemplateId=we,c.composeWorkingDraft=ca({templateId:we,backgroundColor:"#f8f4ee"})),e==="profile"&&(Ze(),c.profileAuthor=null,c.profileSection="identity",c.profileLibraryTab="liked",c.profileExpanded=!0,c.profileOrbitRotation=270),e!=="profile"&&(c.profileEditOpen=!1,c.profileAuthor=null),ne()}function xt(){c.previewPostId=null,c.commentPostId=null,c.openingTapGuardUntil=Date.now()+700,c.postReturnScreen="home",c.postReturnProfileAuthor=null,lt("home")}function Ai(e){Ze(),c.profileReturnState=wt(),c.screen="profile",c.previewPostId=null,c.commentPostId=null,c.profileEditOpen=!1,c.profileAuthor=e||null,c.profileSection=e?null:"identity",c.profileLibraryTab="liked",c.profileExpanded=!0,c.profileOrbitRotation=e?0:270,ne()}function Bi(){Ze();const e=c.profileReturnState;c.profileReturnState=null,ha(e,"home")}function Ni(e){c.postReturnScreen=c.screen,c.postReturnProfileAuthor=c.profileAuthor,c.screen="post",c.previewPostId=e,c.commentPostId=null,ne()}function Di(){const e=c.composeReturnState;c.composeReturnState=null,c.composeWorkingDraft=null,ha(e,"home")}function ua(){c.screen=c.postReturnScreen||"timeline",c.commentPostId=null,c.profileEditOpen=!1,c.profileAuthor=c.screen==="profile"?c.postReturnProfileAuthor:null,ne()}async function Ri(){var h,m,r;const e=document.getElementById("openingCanvas"),t=document.querySelector(".opening-screen");if(!e||!t)return;const i=++Te,o=a=>{a.preventDefault(),a.stopPropagation(),i===Te&&(Te+=1,xt())};t.addEventListener("pointerdown",o,{once:!0});try{(h=document.fonts)!=null&&h.ready?await Promise.race([document.fonts.ready,new Promise(a=>window.setTimeout(a,1200))]):await new Promise(a=>window.setTimeout(a,180))}catch{}if(i!==Te)return;const n=((r=(m=window.matchMedia)==null?void 0:m.call(window,"(prefers-reduced-motion: reduce)"))==null?void 0:r.matches)??!1;Hi(e,i,n)}function Hi(e,t,i){const o=e.getBoundingClientRect(),n=window.devicePixelRatio||1,h=Math.max(1,Math.round(o.width*n)),m=Math.max(1,Math.round(o.height*n)),r=e.getContext("2d");if(!r)return;e.width=h,e.height=m;const a="#ffffff",p='"Zen Old Mincho", "Cormorant Garamond", "Times New Roman", serif',y="ABCDEFGHIJKLMNOPQRSTUVWXYZ",S=Math.min(h*.255,m*.5,138*n),E=`700 ${S}px ${p}`,P=i?1300:3e3,B=i?420:760,T=i?320:620,Y=i?720:2100,N=i?1800:5200,w=P+B+T+Y+N;function j(k,C,H){return Math.min(H,Math.max(C,k))}if(t!==Te)return;function pe(k){return 1-(1-k)**3}function se(k){return k<.5?4*k*k*k:1-(-2*k+2)**3/2}const q=document.querySelector(".opening-screen__wordmark");if(q instanceof HTMLImageElement){let ie=function(le){if(t!==Te)return;const J=le-k,ae=pe(j(J/(P+B),0,1)),ge=se(I(J,P+B*.42,T)),A=se(I(J,P+B+T+Y,N)),oe=Math.min(1,ae*1.1)*Math.min(1,ge*1.18)*Math.max(0,1-A),fe=Math.sin(J*.0032)*.006*(1-A),K=.84+ae*.16+fe-A*.06,Re=(1-ae)*22-A*18+Math.sin(J*.0018)*2.4*(1-A),Ie=.14+ae*.2-A*.08;if(q.style.opacity=String(oe),q.style.transform=`translate(-50%, calc(-50% + ${Re}px)) scale(${K})`,q.style.filter=`
        drop-shadow(0 0 ${14+Ie*24}px rgba(255, 255, 255, ${.14+Ie*.22}))
        drop-shadow(0 12px 28px rgba(255, 255, 255, ${.06+Ie*.12}))
      `,r.clearRect(0,0,h,m),r.save(),r.globalAlpha=.12*oe,r.strokeStyle="rgba(255, 255, 255, 0.9)",r.lineWidth=Math.max(1*n,1.2),r.beginPath(),r.arc(C,H,Math.min(h,m)*(.16+ae*.018+A*.03),0,Math.PI*2),r.stroke(),r.restore(),Z.forEach(be=>{const _e=J*be.speed+be.seed,he=Math.cos(_e)*be.radius,ee=Math.sin(_e*be.drift)*be.radius*.42,He=(.08+.12*((Math.sin(_e*1.7)+1)/2))*oe;He<=.008||(r.save(),r.globalAlpha=He,r.fillStyle="#ffffff",r.beginPath(),r.arc(C+he,H+ee,be.size,0,Math.PI*2),r.fill(),r.restore())}),J<w){requestAnimationFrame(ie);return}q.style.opacity="0",t===Te&&xt()};const k=performance.now(),C=h/2,H=m*.5,F=i?10:18,Z=Array.from({length:F},(le,J)=>({radius:Math.min(h,m)*(.12+J*.018),size:(1.4+J%4*.4)*n,speed:42e-5+J%5*5e-5,seed:Math.random()*Math.PI*2,drift:.55+J%3*.22}));requestAnimationFrame(ie);return}function L(k,C,H){return k+(C-k)*H}function I(k,C,H){return j((k-C)/H,0,1)}function z(k,C,H,F,Z=1){k.save(),k.globalAlpha=Z,k.font=E,k.textAlign="left",k.textBaseline="middle",k.lineJoin="round",k.lineCap="round",k.lineWidth=Math.max(1.4*n,S*.045),k.strokeStyle="rgba(255, 255, 255, 0.22)",k.strokeText(C,H,F),k.shadowColor="rgba(255, 255, 255, 0.26)",k.shadowBlur=S*.085,k.shadowOffsetY=S*.014,k.fillStyle=a,k.fillText(C,H,F),k.restore()}function X(k=1){r.save(),r.globalAlpha=k,r.drawImage(Q,0,0),r.restore()}function R(k=1,C=0){const H=m*.5,F=C*Math.PI*.9,Z=S*.018*(1-C*.32),ie=Math.sin(F*.82)*Z*.55,le=Math.cos(F*.68)*Z*.42,J=1+Math.sin(C*Math.PI*.8)*.004;r.save(),r.globalAlpha=k,r.translate(h/2+ie,H+le),r.scale(J,J),r.drawImage(Q,-h/2,-m*.5),r.restore(),r.save();const ae=Math.hypot(h,m),ge=S*.42;r.lineWidth=Math.max(1*n,S*.008);for(let A=0;A<3;A+=1){const oe=j(C*.56-A*.18,0,1);oe<=0||oe>=1||(r.globalAlpha=(1-oe)**1.4*.12*k,r.strokeStyle=a,r.beginPath(),r.arc(h/2,H,ge+oe*(ae-ge),0,Math.PI*2),r.stroke())}r.restore()}const Q=document.createElement("canvas");Q.width=h,Q.height=m;const re=Q.getContext("2d");if(!re)return;const de=["L","A","N","I"],Ne=S*.01,Ke=[-S*.03,-S*.015,-S*.015];re.font=E;const et=de.map(k=>re.measureText(k).width),tt=et.reduce((k,C)=>k+C,0)+Ne*(de.length-1)+Ke.reduce((k,C)=>k+C,0),Ce=h/2-tt/2,ke=m*.5;re.fillStyle=a,re.font=E,re.textAlign="left",re.textBaseline="middle";let Xe=Ce;const Ye=de.map((k,C)=>{const H=et[C],F=Xe;Xe+=H+Ne+(Ke[C]||0);const Z=C<2;return{glyph:k,targetX:F,targetY:ke,startX:Z?-H-Math.random()*h*.16-C*S*.18:h+Math.random()*h*.16+(de.length-C)*S*.18,startY:ke+(Math.random()-.5)*S*.42,driftX:(Math.random()-.5)*S*.12,driftY:(Math.random()-.5)*S*.08,enterArc:(Math.random()-.5)*S*.32,delay:C*.055,alpha:.72+Math.random()*.18,width:H}});de.forEach((k,C)=>{z(re,k,Ye[C].targetX,ke)});const Ue=[],Me=i?Math.max(28,Math.round(h/20)):Math.max(120,Math.round(h/5.5)),at=tt*.52+S*.16,it=S*.56;for(let k=0;k<Me;k+=1){const C=k%7,H=.86+C*.28+Math.random()*.14,F=Math.random()<.5?1:-1,Z=C>=4?1.35:1;Ue.push({glyph:y[Math.floor(Math.random()*y.length)],size:Math.max(h,m)*.024+Math.random()*(Math.max(h,m)*.034),angularSpeed:(i?22e-5:4e-4)*(.82+Math.random()*.72)*F,radiusX:Math.min(h*.64,at*H*Z),radiusY:Math.min(m*.42,it*(.86+C*.2+Math.random()*.14)*Z),wobble:S*(.03+Math.random()*.05),wobbleSpeed:.0012+Math.random()*.0016,alpha:i?.16+Math.random()*.1:.24+Math.random()*.18,seed:Math.random()*Math.PI*2})}const ot=performance.now();function je(k,C,H="back"){Ue.forEach(F=>{const Z=k*F.angularSpeed+F.seed,ie=Math.sin(Z),le=ie>0;if(H==="front"&&!le||H==="back"&&le)return;const J=Math.sin(k*F.wobbleSpeed+F.seed*1.4)*F.wobble,ae=Math.cos(k*F.wobbleSpeed*.82+F.seed*.9)*F.wobble*.72,ge=h/2+Math.cos(Z)*F.radiusX+J,A=ke+ie*F.radiusY+ae,oe=le?1+ie*.22:.74+(ie+1)*.08,fe=F.alpha*C*(le?.72+ie*.42:.18);fe<=.015||(r.save(),r.globalAlpha=fe,r.fillStyle=a,r.font=`500 ${F.size*oe}px ${p}`,r.textAlign="center",r.textBaseline="middle",r.fillText(F.glyph,ge,A),r.restore())})}function De(k){if(t!==Te)return;const C=k-ot,H=pe(I(C,0,P)),F=se(I(C,P*.58,B)),Z=se(I(C,P+B,T)),ie=I(C,P+B*.3,T),le=se(I(C,P+B+T+Y,N));r.clearRect(0,0,h,m),r.textAlign="center",r.textBaseline="middle",r.fillStyle=a,je(C,Math.max(0,1-ie),"back"),Ye.forEach((A,oe)=>{const fe=j((H-A.delay)/(1-A.delay),0,1);if(fe<=.001)return;const K=pe(fe),Re=(1-K)*A.enterArc,Ie=L(A.startX,A.targetX,K)+A.driftX*(1-K),be=L(A.startY,A.targetY,K)+Math.sin(K*Math.PI+oe*.35)*Re+A.driftY*(1-K),_e=1-j((Z-.24)/.76,0,1),he=Math.min(.96,.22+K*A.alpha+F*.18)*_e;he<=.02||(r.save(),z(r,A.glyph,Ie,be,he),r.restore())}),r.globalAlpha=1;const J=j((Z-.18)/.82,0,1),ae=Math.max(0,1-le**2.1),ge=J*ae;if(le>.001?R(ge,le):X(ge),je(C,Math.max(0,1-ie),"front"),C<w){requestAnimationFrame(De);return}t===Te&&xt()}requestAnimationFrame(De)}function Wi(){const e=(i,o,n)=>Math.min(n,Math.max(o,i));[{element:document.querySelector('[data-side-wheel="main"]'),getItems:()=>Array.from(document.querySelectorAll('[data-side-wheel="main"] [data-side-nav-screen]')),getActiveKey:()=>["timeline","search","compose","profile"].includes(c.screen)?c.screen:c.postReturnScreen||"timeline",applySelection:i=>{if(c.screen===i){ne();return}lt(i)}},{element:document.querySelector('[data-side-wheel="timeline"]'),getItems:()=>Array.from(document.querySelectorAll('[data-side-wheel="timeline"] [data-side-nav-tab]')),getActiveKey:()=>c.timelineTab||"recommended",applySelection:i=>{c.timelineTab=i,ne()}},{element:document.querySelector('[data-side-wheel="profile"]'),getItems:()=>Array.from(document.querySelectorAll('[data-side-wheel="profile"] [data-side-nav-profile-section]')),getActiveKey:()=>c.profileSection||"identity",applySelection:i=>{c.profileSection=i,c.profileSection==="library"&&(c.profileLibraryTab=c.profileLibraryTab||"liked"),ne()}}].filter(i=>i.element).forEach(i=>{const{element:o,getItems:n,applySelection:h,getActiveKey:m}=i,r=n();if(!r.length)return;const a=r.map((L,I)=>({button:L,key:L.dataset.sideNavScreen||L.dataset.sideNavTab||L.dataset.sideNavProfileSection,index:I})),p=Math.max(0,a.findIndex(L=>L.key===m()));let y=!1,S=p,E=0,P=0,B=0,T=null;const Y=L=>{var Q;const I=(Q=a[S])==null?void 0:Q.button.getBoundingClientRect(),z=((I==null?void 0:I.height)||0)/2,X=z,R=window.innerHeight-z;return R<=X?0:e(L,X-window.innerHeight/2,R-window.innerHeight/2)},N=(L,I)=>{const z=o.classList.contains("side-wheel--left")?76:24,X=a.length<=2?88:76;o.style.setProperty("--wheel-offset-y",`${E}px`),o.classList.toggle("is-dragging",!!(T!=null&&T.moved)),a.forEach(R=>{const Q=(R.index-L)*X,re=I||R.index===L?1:0,de=I?R.index===L?1:.9:1,Ne=!I&&R.index===L?P:0;R.button.style.setProperty("--slot-x",`${z}%`),R.button.style.setProperty("--slot-y",`${Q}px`),R.button.style.setProperty("--slot-scale",String(de)),R.button.style.setProperty("--slot-opacity",String(re)),R.button.style.setProperty("--slot-depth",String(Math.abs(R.index-L))),R.button.style.setProperty("--drag-x",`${Ne}px`),R.button.style.setProperty("--drag-y","0px"),R.button.classList.toggle("is-active",R.index===L),R.button.classList.toggle("is-dragging",!!(T!=null&&T.moved)&&R.index===L)})},w=L=>{var R;if(!T||(L==null?void 0:L.pointerId)!=null&&T.pointerId!==L.pointerId)return;const{button:I,pointerId:z,moved:X}=T;(R=I.hasPointerCapture)!=null&&R.call(I,z)&&I.releasePointerCapture(z),T=null,X&&(B=Date.now()+220),N(S,y)},j=L=>{if(!T||T.pointerId!==L.pointerId)return;const I=L.clientX-T.startX,z=L.clientY-T.startY;if(!(!T.moved&&Math.hypot(I,z)<8)){if(T.moved=!0,E=Y(T.startWheelOffsetY+z),T.mode==="collapsed"){const X=T.halfWidth,R=window.innerWidth-T.halfWidth;P=e(T.startCenterX+I,X,R)-T.anchorCenterX}else P=0;N(S,y)}};N(p,!1);const pe=()=>{y=!0,o.classList.add("is-engaged"),P=0,N(S,!0)},se=()=>{y=!1,o.classList.remove("is-engaged"),N(S,!1)},q=(L=S)=>{S=L;const I=a[S];if(!I){se();return}h(I.key)};r.forEach(L=>{L.addEventListener("pointerdown",I=>{if(Number(L.dataset.sideIndex||0)!==S)return;const X=L.getBoundingClientRect();T={pointerId:I.pointerId,button:L,mode:y?"engaged":"collapsed",startX:I.clientX,startY:I.clientY,startCenterX:X.left+X.width/2,anchorCenterX:X.left+X.width/2-P,halfWidth:X.width/2,startWheelOffsetY:E,moved:!1},L.setPointerCapture(I.pointerId)}),L.addEventListener("pointermove",j),L.addEventListener("pointerup",w),L.addEventListener("pointercancel",w),L.addEventListener("lostpointercapture",w),L.addEventListener("click",I=>{if(Date.now()<B){I.preventDefault(),I.stopPropagation();return}I.preventDefault();const z=Number(L.dataset.sideIndex||0);if(!y){if(z!==S)return;pe();return}if(z===S){se();return}q(z)})})})}function ct(e=document){e.querySelectorAll("[data-toggle-tags]").forEach(t=>{t.addEventListener("click",()=>{const i=document.querySelector(`[data-tags-panel="${t.dataset.toggleTags}"]`);i&&(i.hidden=!i.hidden,t.classList.toggle("is-active",!i.hidden))})}),e.querySelectorAll("[data-like]").forEach(t=>{t.addEventListener("click",()=>{La(t.dataset.like),ce()})}),e.querySelectorAll("[data-save]").forEach(t=>{t.addEventListener("click",()=>{Pa(t.dataset.save),ce()})}),e.querySelectorAll("[data-comment]").forEach(t=>{t.addEventListener("click",()=>{c.commentPostId=t.dataset.comment,Ge()})}),e.querySelectorAll("[data-open-preview]").forEach(t=>{t.addEventListener("click",i=>{if(Date.now()<c.openingTapGuardUntil){i.preventDefault(),i.stopPropagation();return}const o=t.dataset.openPreview;Ca(o),Ni(o)})}),e.querySelectorAll("[data-open-author]").forEach(t=>{t.addEventListener("click",()=>{Ai(t.dataset.openAuthor)})})}function qi(){const e=document.querySelector(".orbit-home"),t=()=>{e&&(e.classList.remove("orbit-home--default","orbit-home--collapsing","orbit-home--sheep"),e.classList.add(`orbit-home--${c.homeCoreState}`))};document.querySelectorAll("[data-home-theme-toggle]").forEach(i=>{i.addEventListener("click",()=>{const o=gt.indexOf(c.homeTheme);c.homeTheme=gt[(o+1)%gt.length],ne()})}),document.querySelectorAll("[data-home-core-toggle]").forEach(i=>{i.addEventListener("click",()=>{if(c.homeCoreState!=="default")return;const o=Date.now();c.homeCoreTapTimestamps=[...c.homeCoreTapTimestamps.filter(n=>o-n<900),o],!(c.homeCoreTapTimestamps.length<3)&&(c.homeCoreTapTimestamps=[],c.homeCoreState="collapsing",t(),da(),rt=window.setTimeout(()=>{c.homeCoreState="sheep",t()},620))})}),document.querySelectorAll("[data-home-sheep-toggle]").forEach(i=>{i.addEventListener("click",()=>{c.homeCoreState==="sheep"&&(ma(),t())})})}function zi(){var i,o;ct(document.getElementById("screenArea"));const e=document.querySelector("[data-timeline-pan-viewport]"),t=document.querySelector("[data-timeline-pan-surface]");if(e&&t){const n=(a,p)=>{const y=Math.min(0,e.clientWidth-t.scrollWidth),S=Math.min(0,e.clientHeight-t.scrollHeight);return{x:Math.max(y,Math.min(0,a)),y:Math.max(S,Math.min(0,p))}},h=(a,p)=>{const y=n(a,p);c.timelinePan=y,t.style.transform=`translate(${y.x}px, ${y.y}px)`};h(((i=c.timelinePan)==null?void 0:i.x)??-360,((o=c.timelinePan)==null?void 0:o.y)??-220);let m=null;t.addEventListener("pointerdown",a=>{var p,y,S;m={pointerId:a.pointerId,startX:a.clientX,startY:a.clientY,originX:((p=c.timelinePan)==null?void 0:p.x)??-360,originY:((y=c.timelinePan)==null?void 0:y.y)??-220,moved:!1},e.classList.add("is-dragging"),(S=t.setPointerCapture)==null||S.call(t,a.pointerId)}),t.addEventListener("pointermove",a=>{if(!m||m.pointerId!==a.pointerId)return;const p=a.clientX-m.startX,y=a.clientY-m.startY;(Math.abs(p)>4||Math.abs(y)>4)&&(m.moved=!0,a.preventDefault()),h(m.originX+p,m.originY+y)});const r=a=>{var p;!m||m.pointerId!==a.pointerId||(e.classList.remove("is-dragging"),m.moved&&(c.openingTapGuardUntil=Date.now()+180),m=null,(p=t.releasePointerCapture)==null||p.call(t,a.pointerId))};t.addEventListener("pointerup",r),t.addEventListener("pointercancel",r)}document.querySelectorAll("[data-timeline-tab]").forEach(n=>{n.addEventListener("click",()=>{c.timelineTab=n.dataset.timelineTab||"recommended",ce()})})}function Oi(){ct(document.getElementById("screenArea"));const e=document.getElementById("searchInput");e&&e.addEventListener("input",t=>{c.searchQuery=t.target.value;const i=t.target.selectionStart;ce();const o=document.getElementById("searchInput");o&&(o.focus(),o.setSelectionRange(i,i))}),document.querySelectorAll("[data-search-tag]").forEach(t=>{t.addEventListener("click",()=>{const i=t.dataset.searchTag;c.searchTags=c.searchTags.includes(i)?c.searchTags.filter(o=>o!==i):[...c.searchTags,i],ce()})})}function Fi(){document.querySelectorAll("[data-home-nav]").forEach(e=>{e.addEventListener("click",()=>{lt(e.dataset.homeNav)})}),document.querySelectorAll("[data-close-profile]").forEach(e=>{e.addEventListener("click",()=>{Bi()})}),document.querySelectorAll("[data-close-compose]").forEach(e=>{e.addEventListener("click",()=>{Di()})})}function jt(e){var t,i;return e.templateId==="page8"&&Array.isArray((t=e.customLayout)==null?void 0:t.pretextBoxes)?e.customLayout.pretextBoxes.filter(o=>o.kind==="title"||o.kind==="body").map(o=>{var n;return String(((n=o.data)==null?void 0:n.text)||"").trim()}).filter(Boolean).join(" / ").slice(0,120):e.templateId==="page8"&&Array.isArray((i=e.customLayout)==null?void 0:i.textBoxes)?e.customLayout.textBoxes.map(o=>String(o.text||"").trim()).filter(Boolean).join(" / ").slice(0,120):[e.headline,e.subhead,e.intro,e.body].map(o=>o.trim()).filter(Boolean).join(" / ").slice(0,120)}function Xi(e,t,i){const{x:o,y:n,maxWidth:h,lineHeight:m,maxLines:r}=i,a=[];String(t||"").split(`
`).forEach(y=>{const S=/\s/.test(y.trim()),E=S?y.split(/\s+/).filter(Boolean):Array.from(y),P=S?" ":"";if(!E.length){a.push("");return}let B="";E.forEach(T=>{const Y=B?`${B}${P}${T}`:T;if(e.measureText(Y).width<=h||!B){B=Y;return}a.push(B),B=T}),B&&a.push(B)}),a.slice(0,r).forEach((y,S)=>{e.fillText(y,o,n+S*m)})}function $t(e,t,i,o,n,h){e.beginPath(),e.moveTo(t+h,i),e.arcTo(t+o,i,t+o,i+n,h),e.arcTo(t+o,i+n,t,i+n,h),e.arcTo(t,i+n,t,i,h),e.arcTo(t,i,t+o,i,h),e.closePath()}async function Yi(e,t,i,o={x:.5,y:.5}){var T;if(!t)return;const n=typeof t=="string"?await new Promise((Y,N)=>{const w=new Image;w.onload=()=>Y(w),w.onerror=N,w.src=t}):await createImageBitmap(t),h=n.width/n.height,m=i.width/i.height;let r=0,a=0,p=n.width,y=n.height;const S=Math.max(1,Number(o==null?void 0:o.zoom)||1),E=Number.isFinite(o==null?void 0:o.cropX)||Number.isFinite(o==null?void 0:o.cropY);let P=Math.min(1,Math.max(0,o.x??.5)),B=Math.min(1,Math.max(0,o.y??.5));if(E){const Y=h>m?i.height*h:i.width,N=h>m?i.height:i.width/h,w=Math.max(0,Y*S-i.width),j=Math.max(0,N*S-i.height);P=w?Math.min(1,Math.max(0,.5-(Number(o==null?void 0:o.cropX)||0)/w)):.5,B=j?Math.min(1,Math.max(0,.5-(Number(o==null?void 0:o.cropY)||0)/j)):.5}h>m?(p=Math.max(1,n.height*m/S),r=(n.width-p)*P):(y=Math.max(1,n.width/m/S),a=(n.height-y)*B),e.save(),$t(e,i.x,i.y,i.width,i.height,i.radius),e.clip(),e.drawImage(n,r,a,p,y,i.x,i.y,i.width,i.height),e.restore(),(T=n.close)==null||T.call(n)}function Ui(e,t){e.save(),e.lineWidth=4,e.strokeStyle="rgba(34, 28, 25, 0.88)",$t(e,t.x,t.y,t.width,t.height,t.radius),e.stroke();const i=Math.min(t.width,t.height)*.18,o=t.x+t.width/2,n=t.y+t.height/2;e.beginPath(),e.arc(o,n,i,0,Math.PI*2),e.stroke(),e.beginPath(),e.moveTo(o-i*.42,n),e.lineTo(o+i*.42,n),e.moveTo(o,n-i*.42),e.lineTo(o,n+i*.42),e.stroke(),e.restore()}async function ji(e,t,i={}){const m=document.createElement("canvas");m.width=2480,m.height=3508;const r=m.getContext("2d");if(!r)return"";const a=2480/1240;return r.imageSmoothingEnabled=!0,r.imageSmoothingQuality="high",r.fillStyle=e.backgroundColor||"#f8f4ee",r.fillRect(0,0,2480,3508),r.scale(a,a),await mi(e.templateId).render(r,e,t,{addWrappedText:Xi,clipRoundedRect:$t,drawFileCover:Yi,drawSlotPlaceholder:Ui,defaults:Pe,page8Files:i.page8Files||{}}),m.toDataURL("image/png")}function Ji(){var Tt,kt,Mt,It,Lt,Pt,Et,Ct,At,Bt,Nt;const e=document.querySelector(".page--compose");if(!e)return;const t=e.dataset.composeStage||"select",i=document.getElementById("composeForm"),o=i||e,n=document.getElementById("composeSheet"),h=(n==null?void 0:n.querySelector(".compose-sheet__frame"))||null,m=(n==null?void 0:n.querySelector("[data-custom-canvas]"))||null,r=c.composeWorkingDraft||((Tt=Oe(c.composeEditingPostId))==null?void 0:Tt.composeData)||null,a={...Pe,...r||{}},p={imageInputPrimary:typeof((Mt=(kt=r==null?void 0:r.standardFiles)==null?void 0:kt.primary)==null?void 0:Mt.file)=="string"?r.standardFiles.primary.file:"",imageInputSecondary:typeof((Lt=(It=r==null?void 0:r.standardFiles)==null?void 0:It.secondary)==null?void 0:Lt.file)=="string"?r.standardFiles.secondary.file:"",imageInputAccent:typeof((Et=(Pt=r==null?void 0:r.standardFiles)==null?void 0:Pt.accent)==null?void 0:Et.file)=="string"?r.standardFiles.accent.file:""},y={primary:$e((Ct=r==null?void 0:r.standardFiles)==null?void 0:Ct.primary),secondary:$e((At=r==null?void 0:r.standardFiles)==null?void 0:At.secondary),accent:$e((Bt=r==null?void 0:r.standardFiles)==null?void 0:Bt.accent)},S=document.querySelector("[data-toggle-compose-tags]"),E=document.querySelector("[data-compose-tags]"),P=document.querySelector("[data-toggle-compose-preview]"),B=document.querySelector("[data-custom-template-controls]"),T=document.querySelector("[data-custom-inspector]"),Y=document.querySelector("[data-compose-pretext-host]"),N=Array.from(document.querySelectorAll("[data-editable]")),w={options:aa((r==null?void 0:r.customLayout)||{}),imageBoxes:bt((r==null?void 0:r.customLayout)||{}),textBoxes:vt((r==null?void 0:r.customLayout)||{},a),selectedId:null,imageMode:"frame"},j={},pe={headline:document.querySelector('[data-editable="headline"]'),subhead:document.querySelector('[data-editable="subhead"]'),intro:document.querySelector('[data-editable="intro"]'),body:document.querySelector('[data-editable="body"]'),date:document.querySelector('[data-editable="date"]'),editor:document.querySelector('[data-editable="editor"]')},se={primary:document.querySelector('[data-slot="imageInputPrimary"]'),secondary:document.querySelector('[data-slot="imageInputSecondary"]'),accent:document.querySelector('[data-slot="imageInputAccent"]')};function q(){return{primary:$e(y.primary),secondary:$e(y.secondary),accent:$e(y.accent)}}function L(s={}){const l=ca({...c.composeWorkingDraft||r||{},...s});return c.composeWorkingDraft=l,c.composeTemplateId=l.templateId,c.composeBackgroundColor=l.backgroundColor,l}function I(s={}){var $;const{customLayoutOverride:l}=s,d=o.querySelector('input[name="templateId"]:checked'),_=o.querySelector('input[name="backgroundColor"]:checked'),M=String((d==null?void 0:d.value)||(n==null?void 0:n.dataset.template)||c.composeTemplateId||(r==null?void 0:r.templateId)||we),u=String((_==null?void 0:_.value)||c.composeBackgroundColor||(r==null?void 0:r.backgroundColor)||"#f8f4ee"),g=L({templateId:M,backgroundColor:u,standardFiles:q()}),x=i?new FormData(i):null,b=x?x.getAll("fixedTags").map(f=>String(f)):g.fixedTags,v=x?String(x.get("freeTags")||"").split(",").map(f=>f.trim()).filter(Boolean):g.freeTags;if(M==="page8"){const f=l||(($=ve==null?void 0:ve.getSerializedLayout)==null?void 0:$.call(ve))||g.customLayout;return L({fixedTags:b,freeTags:v,customLayout:f})}return L({fixedTags:b,freeTags:v,headline:Me("headline")||g.headline,subhead:Me("subhead")||g.subhead,intro:Me("intro")||g.intro,body:Me("body")||g.body,date:Me("date")||g.date,editor:Me("editor")||g.editor,customLayout:l??null})}const z=s=>{I(),c.composeStage=s,ne()};function X(s){return new Promise(l=>{const d=new Image,_=typeof s=="string"?s:URL.createObjectURL(s);d.onload=()=>{l({width:d.naturalWidth,height:d.naturalHeight}),typeof s!="string"&&URL.revokeObjectURL(_)},d.onerror=()=>{l(null),typeof s!="string"&&URL.revokeObjectURL(_)},d.src=_})}function R(s){const l=document.querySelector(`[data-slot-image="${s}"]`),_=y[s==="imageInputPrimary"?"primary":s==="imageInputSecondary"?"secondary":"accent"];l&&(l.style.backgroundPosition=`${(_.position.x||.5)*100}% ${(_.position.y||.5)*100}%`)}function Q(s){return String(s??"").replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#39;")}function re(s){return`${s}-${Date.now().toString(36)}-${Math.random().toString(36).slice(2,7)}`}function de(s){return j[s]||(j[s]={file:null,position:{x:.5,y:.5,zoom:1},imageSize:null,previewUrl:""}),j[s]}function Ne(s){return s==="title"?{kind:"title",fontSize:.046,lineHeight:1.12,padding:.01,family:"serif",weight:600,align:"left"}:{kind:"body",fontSize:.026,lineHeight:1.45,padding:.012,family:"sans",weight:500,align:"left"}}function Ke(s,l){Object.assign(s,{...s,...Ne(l)})}function et(s){if(s.dataset.singleLine==="true"){s.innerText=s.innerText.replace(/\r?\n+/g," ");return}s.innerHTML=s.innerHTML.replace(/<div><br><\/div>/gi,"<br>").replace(/<div>/gi,"<br>").replace(/<\/div>/gi,"").replace(/&nbsp;/gi," ")}function tt(s){const l=Number(s.dataset.maxChars||0),d=s.innerText.replace(/\r/g,"");if(s.dataset.previousValue||(s.dataset.previousValue=d),l&&d.length>l||s.scrollHeight>s.clientHeight+1||s.scrollWidth>s.clientWidth+1){s.innerText=s.dataset.previousValue;return}s.dataset.previousValue=d.trim()?d:""}function Ce(s){return s.innerText.replace(/\r/g,"")}function ke(s){const l=window.getSelection();if(!l)return;const d=document.createRange();d.selectNodeContents(s),d.collapse(!1),l.removeAllRanges(),l.addRange(d)}function Xe(s){const l=window.getSelection();if(!l||l.rangeCount===0)return 0;const d=l.getRangeAt(0);return!s.contains(d.startContainer)||!s.contains(d.endContainer)?0:l.toString().length}function Ye(s,l){const d=window.getSelection();if(!d||d.rangeCount===0){s.append(document.createTextNode(l)),ke(s);return}const _=d.getRangeAt(0);_.deleteContents();const M=document.createTextNode(l);_.insertNode(M),_.setStartAfter(M),_.collapse(!0),d.removeAllRanges(),d.addRange(_)}function Ue(s){!e||!P||(e.classList.toggle("is-preview-mode",s),P.textContent=s?"back":"preview",P.setAttribute("aria-pressed",String(s)),N.forEach(l=>{l.setAttribute("contenteditable",s?"false":"true"),s&&l.blur()}),(n==null?void 0:n.dataset.template)==="page8"&&ee())}function Me(s){const l=document.querySelector(`[data-editable="${s}"]`);return l?l.innerText.replace(/\r/g,"").trim():""}function at(){const s=o.querySelector('input[name="backgroundColor"]:checked'),l=(s==null?void 0:s.value)||c.composeBackgroundColor||"#f8f4ee";if(c.composeBackgroundColor=l,L({backgroundColor:l}),!n){o.querySelectorAll(".color-chip").forEach(d=>{const _=d.querySelector('input[name="backgroundColor"]');d.classList.toggle("is-active",!!(_!=null&&_.checked))});return}n.style.setProperty("--sheet-bg",l),o.querySelectorAll(".color-chip").forEach(d=>{const _=d.querySelector('input[name="backgroundColor"]');d.classList.toggle("is-active",!!(_!=null&&_.checked))})}function it(s){const l=s||we,d=(n==null?void 0:n.dataset.template)||(Y?"page8":null),_=t==="edit"&&d&&d!==l&&(d==="page8"||l==="page8");if(c.composeTemplateId=l,L({templateId:l}),_){ne();return}if(!n){o.querySelectorAll(".template-thumb").forEach(u=>{const g=u.querySelector('input[name="templateId"]');u.classList.toggle("is-active",(g==null?void 0:g.value)===l)}),Y&&l!=="page8"&&ne();return}n.dataset.template=l,o.querySelectorAll(".template-thumb").forEach(u=>{const g=u.querySelector('input[name="templateId"]');u.classList.toggle("is-active",(g==null?void 0:g.value)===l)});const M=l==="page8";B&&(B.hidden=!0),n.classList.toggle("compose-sheet--custom",M),He()}function ot(s){var d;const l=o.querySelector(`input[name="templateId"][value="${s}"]`);(d=l==null?void 0:l.closest(".template-thumb"))==null||d.scrollIntoView({behavior:"smooth",block:"nearest",inline:"center"})}function je(s){var d;const l=o.querySelector(`input[name="backgroundColor"][value="${s}"]`);(d=l==null?void 0:l.closest(".color-chip"))==null||d.scrollIntoView({behavior:"smooth",block:"nearest",inline:"center"})}function De(s){const l=document.querySelector(`[data-slot-image="${s}"]`),d=document.querySelector(`[data-slot-placeholder="${s}"]`),_=document.querySelector(`[data-slot-remove="${s}"]`);if(!(!l||!d||!_)){if(p[s]){l.style.backgroundImage=`url("${p[s]}")`,l.hidden=!1,d.hidden=!0,_.hidden=!1;return}l.style.backgroundImage="",l.hidden=!0,d.hidden=!1,_.hidden=!0}}function k(s,l){const d=Math.min(W.width,Math.max(l.width,s.width)),_=Math.min(W.height,Math.max(l.height,s.height));return{...s,x:Math.min(W.x+W.width-d,Math.max(W.x,Le(s.x))),y:Math.min(W.y+W.height-_,Math.max(W.y,Le(s.y))),width:Le(d),height:Le(_)}}function C(s,l,d=.02){return!(s.x+s.width+d<=l.x||l.x+l.width+d<=s.x||s.y+s.height+d<=l.y||l.y+l.height+d<=s.y)}function H(s){return{x:s.x,y:s.y,width:s.width,height:s.height}}function F(s,l={}){const{ignoreText:d=!1,ignoreImages:_=!1}=l;return[..._?[]:w.imageBoxes.filter(M=>M.id!==s).map(M=>H(M)),...d?[]:w.textBoxes.filter(M=>M.id!==s).map(M=>H(M))]}function Z(s,l,d={}){const _=H(s);return!F(l,d).some(u=>C(_,u))}function ie(s,l,d,_={}){const M=k({...s},d);if(Z(M,l,_))return M;const u=[[0,-1],[1,0],[0,1],[-1,0],[1,-1],[1,1],[-1,1],[-1,-1]],g=ze*2;for(let x=1;x<=18;x+=1)for(const[b,v]of u){const $=k({...M,x:M.x+b*g*x,y:M.y+v*g*x},d);if(Z($,l,_))return $}for(let x=W.y;x<=W.y+W.height-M.height;x+=g)for(let b=W.x;b<=W.x+W.width-M.width;b+=g){const v=k({...M,x:b,y:x},d);if(Z(v,l,_))return v}return M}function le(s,l,d=.018){const _=s.y-d,M=s.y+s.height+d,u=W.x,g=W.x+W.width;let x=[{left:u,right:g}];return l.forEach(b=>{const v=b.y-d;if(b.y+b.height+d<=_||v>=M)return;const f=Math.max(u,b.x-d),D=Math.min(g,b.x+b.width+d);x=x.flatMap(G=>{if(D<=G.left||f>=G.right)return[G];const U=[];return f>G.left&&U.push({left:G.left,right:f}),D<G.right&&U.push({left:D,right:G.right}),U})}),x.filter(b=>b.right-b.left>=s.width)}function J(s,l){const d=k({...s},Be),_=[];for(let g=0;g<=24;g+=1){const x=Le(d.y-g*ze),b=Le(d.y+g*ze);x>=W.y&&_.push(x),b<=W.y+W.height-d.height&&b!==x&&_.push(b)}let M=d,u=Number.POSITIVE_INFINITY;return _.forEach(g=>{const x={...d,y:g};le(x,l).forEach(v=>{const $=v.left,f=v.right-d.width,D=Le(Math.min(f,Math.max($,d.x))),G=k({...d,x:D,y:g},Be);if(l.some(ye=>C(H(G),ye)))return;const U=Math.abs(G.x-d.x),ue=Math.abs(G.y-d.y)*2+U;ue<u&&(u=ue,M=G)})}),M}function ae(s){const l=A(s);!l||l.type!=="image"||(w.textBoxes=w.textBoxes.map(d=>{const _=[...w.imageBoxes.filter(M=>M.id!==d.id).map(M=>H(M)),...w.textBoxes.filter(M=>M.id!==d.id).map(M=>H(M))];return J(d,_)}))}function ge(s){return[...w.imageBoxes.filter(l=>l.id!==s).map(l=>H(l)),...w.textBoxes.filter(l=>l.id!==s).map(l=>H(l))]}function A(s){const l=w.imageBoxes.findIndex(_=>_.id===s);if(l>=0)return{type:"image",collection:w.imageBoxes,index:l,item:w.imageBoxes[l]};const d=w.textBoxes.findIndex(_=>_.id===s);return d>=0?{type:"text",collection:w.textBoxes,index:d,item:w.textBoxes[d]}:null}function oe(s){return s==="image"?ft:Be}function fe(s){return`${Math.round(s*100)}%`}function K(s,l={}){const{rerender:d=!1}=l;if(!h||!m)return;const _=s?A(s):null;if(!_||_.type!=="text")return;const M=m.querySelector(`[data-custom-text="${s}"]`);if(!M)return;const u=h.getBoundingClientRect();if(!u.height)return;const g=Math.max(Be.height,Le((M.scrollHeight+8)/u.height));if(!(Math.abs(g-_.item.height)<ze/2)){if(_.item.height=g,Object.assign(_.item,k(_.item,Be)),Object.assign(_.item,J(_.item,ge(s))),d){ee();return}Ie(s,_.item),he()}}function Re(){m&&m.querySelectorAll("[data-custom-item]").forEach(s=>{s.classList.toggle("is-selected",s.dataset.customItem===w.selectedId)})}function Ie(s,l){const d=m==null?void 0:m.querySelector(`[data-custom-item="${s}"]`);if(!d)return;const _=pt(l);d.style.left=_.left,d.style.top=_.top,d.style.width=_.width,d.style.height=_.height}function be(){[...w.imageBoxes,...w.textBoxes].forEach(s=>{Ie(s.id,s)})}function _e(s,l={}){const{rerender:d=!1}=l;if(w.selectedId=s,d&&(n==null?void 0:n.dataset.template)==="page8"){ee();return}Re(),he()}function he(){var l,d,_,M,u,g,x,b;if(!T||(n==null?void 0:n.dataset.template)!=="page8")return;const s=w.selectedId?A(w.selectedId):null;if(!s){T.innerHTML=`
        <p class="compose-custom-inspector__title">Selection</p>
        <p class="compose-custom-inspector__note">ボックスを選ぶと、ここで内容や見た目を調整できます。</p>
      `;return}if(s.type==="image"){const v=de(s.item.id),$=!!(v.previewUrl||v.file),f=Math.max(1,Number((l=v.position)==null?void 0:l.zoom)||1);T.innerHTML=`
        <p class="compose-custom-inspector__title">Image Box</p>
        <p class="compose-custom-inspector__note">${w.imageMode==="crop"?"Crop 中は画像面をドラッグして見せ方を調整します。":"Frame 中はボックス自体を動かします。Crop に切り替えると画像だけを動かせます。"}</p>
        <div class="compose-custom-inspector__meta">
          <span>W ${fe(s.item.width)}</span>
          <span>H ${fe(s.item.height)}</span>
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
      `,T.querySelectorAll("[data-custom-image-mode]").forEach(D=>{D.addEventListener("click",()=>{D.hasAttribute("disabled")||(w.imageMode=D.dataset.customImageMode==="crop"?"crop":"frame",he())})}),(d=T.querySelector('[data-custom-control="zoom"]'))==null||d.addEventListener("input",D=>{v.position.zoom=Math.max(1,Number(D.target.value)||1),ee()}),(_=T.querySelector('[data-custom-control="replace-image"]'))==null||_.addEventListener("click",()=>{var D;(D=document.getElementById(`custom-image-${s.item.id}`))==null||D.click()})}else{T.innerHTML=`
      <p class="compose-custom-inspector__title">Text Box</p>
      <p class="compose-custom-inspector__note">Title / Body のプリセットを起点にして、細部は個別調整できます。</p>
      <div class="compose-custom-inspector__meta">
        <span>W ${fe(s.item.width)}</span>
        <span>H ${fe(s.item.height)}</span>
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
        <div class="compose-custom-inspector__segmented">
          <button type="button" data-custom-align="left" class="${s.item.align==="left"?"is-active":""}">Left</button>
          <button type="button" data-custom-align="center" class="${s.item.align==="center"?"is-active":""}">Center</button>
          <button type="button" data-custom-align="right" class="${s.item.align==="right"?"is-active":""}">Right</button>
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
    `;const v=T.querySelector('[data-custom-control="text"]');v==null||v.addEventListener("focus",$=>{const f=w.selectedId?A(w.selectedId):null;if(!(!f||f.type!=="text")&&f.item.isDefaultText&&f.item.text.trim().toLowerCase()==="text"){f.item.text="",f.item.isDefaultText=!1,$.target.value="";const D=m==null?void 0:m.querySelector(`[data-custom-text="${f.item.id}"]`);D&&(D.textContent="")}}),v==null||v.addEventListener("input",$=>{const f=w.selectedId?A(w.selectedId):null;if(!f||f.type!=="text")return;f.item.text=$.target.value.replace(/\r/g,""),f.item.isDefaultText=!1;const D=m==null?void 0:m.querySelector(`[data-custom-text="${f.item.id}"]`);D&&D!==document.activeElement&&(D.textContent=f.item.text),K(f.item.id)}),T.querySelectorAll("[data-custom-preset]").forEach($=>{$.addEventListener("click",()=>{const f=w.selectedId?A(w.selectedId):null;!f||f.type!=="text"||(Ke(f.item,$.dataset.customPreset==="title"?"title":"body"),ee(),K(f.item.id,{rerender:!0}))})}),(M=T.querySelector('[data-custom-control="fontSize"]'))==null||M.addEventListener("input",$=>{const f=w.selectedId?A(w.selectedId):null;!f||f.type!=="text"||(f.item.fontSize=Number($.target.value)/520,ee(),K(f.item.id,{rerender:!0}))}),(u=T.querySelector('[data-custom-control="lineHeight"]'))==null||u.addEventListener("input",$=>{const f=w.selectedId?A(w.selectedId):null;!f||f.type!=="text"||(f.item.lineHeight=Number($.target.value)/100,ee(),K(f.item.id,{rerender:!0}))}),(g=T.querySelector('[data-custom-control="padding"]'))==null||g.addEventListener("input",$=>{const f=w.selectedId?A(w.selectedId):null;!f||f.type!=="text"||(f.item.padding=Number($.target.value)/1e3,ee(),K(f.item.id,{rerender:!0}))}),(x=T.querySelector('[data-custom-control="weight"]'))==null||x.addEventListener("input",$=>{const f=w.selectedId?A(w.selectedId):null;!f||f.type!=="text"||(f.item.weight=Number($.target.value),ee(),K(f.item.id,{rerender:!0}))}),T.querySelectorAll("[data-custom-align]").forEach($=>{$.addEventListener("click",()=>{const f=w.selectedId?A(w.selectedId):null;!f||f.type!=="text"||(f.item.align=$.dataset.customAlign||"left",ee())})}),T.querySelectorAll("[data-custom-family]").forEach($=>{$.addEventListener("click",()=>{const f=w.selectedId?A(w.selectedId):null;!f||f.type!=="text"||(f.item.family=$.dataset.customFamily==="serif"?"serif":"sans",f.item.kind=f.item.family==="serif"?"title":"body",f.item.weight=f.item.family==="serif"?Math.max(500,f.item.weight):Math.min(600,f.item.weight),ee(),K(f.item.id,{rerender:!0}))})})}(b=T.querySelector('[data-custom-control="delete"]'))==null||b.addEventListener("click",()=>{const v=w.selectedId,$=v?A(v):null;if($){if($.collection.splice($.index,1),$.type==="image"){const f=j[v];f!=null&&f.previewUrl&&URL.revokeObjectURL(f.previewUrl),delete j[v],ae(v)}w.selectedId=null,ee()}})}function ee(){if(!m||!n)return;const s=n.dataset.template==="page8",l=t==="edit"&&!(e!=null&&e.classList.contains("is-preview-mode"));if(m.hidden=!s,!s){m.innerHTML="",he();return}const d=[...w.imageBoxes.map(u=>u.id),...w.textBoxes.map(u=>u.id)];(!w.selectedId||!d.includes(w.selectedId))&&(w.selectedId=d[0]||null);const _=w.imageBoxes.map(u=>{const g=pt(u),x=de(u.id),b=!!(x.previewUrl||x.file),v=x.position||{x:.5,y:.5,zoom:1},$=`${w.selectedId===u.id?" is-selected":""}${b?"":" is-empty"}`,f=b?`<img class="compose-custom-item__image" src="${x.previewUrl}" alt="" draggable="false" style="object-position:${(v.x||.5)*100}% ${(v.y||.5)*100}%;transform:scale(${Math.max(1,v.zoom||1)});" />`:`<div class="compose-custom-item__placeholder"><span class="compose-custom-item__plus">${V("compose")}</span></div>`;return`
        <div
          class="compose-custom-item compose-custom-item--image${$}"
          data-custom-item="${u.id}"
          data-custom-type="image"
          style="left:${g.left};top:${g.top};width:${g.width};height:${g.height};"
        >
          ${l?`<input class="field__file" id="custom-image-${u.id}" type="file" accept="image/*" />`:""}
          ${l?`<div class="compose-custom-item__surface compose-custom-item__surface--image" data-custom-surface="${u.id}">${f}</div>`:`<div class="compose-custom-item__surface compose-custom-item__surface--image">${f}</div>`}
          ${l?`<button class="compose-custom-item__drag" type="button" data-custom-drag="${u.id}" aria-label="move image box">${V("drag")}</button>`:""}
          ${l?`<button class="compose-custom-item__remove" type="button" data-custom-remove="${u.id}" aria-label="remove image box">&times;</button>`:""}
          ${l?`<button class="compose-custom-item__resize" type="button" data-custom-resize="${u.id}" aria-label="resize image box"></button>`:""}
        </div>
      `}).join(""),M=w.textBoxes.map(u=>{const g=pt(u);return`
        <div
          class="compose-custom-item compose-custom-item--text${w.selectedId===u.id?" is-selected":""}"
          data-custom-item="${u.id}"
          data-custom-type="text"
          style="left:${g.left};top:${g.top};width:${g.width};height:${g.height};"
        >
          <div
            class="compose-custom-item__text"
            data-custom-text="${u.id}"
            contenteditable="${l?"true":"false"}"
            spellcheck="false"
            style="text-align:${u.align};font-size:${Math.max(11,u.fontSize*520)}px;line-height:${u.lineHeight};padding:${Math.max(4,u.padding*520)}px;font-family:${u.family==="serif"?"'Cormorant Garamond', 'Times New Roman', serif":"'Noto Sans JP', sans-serif"};font-weight:${u.weight};"
          >${Q(u.text)}</div>
          ${l?`<button class="compose-custom-item__drag" type="button" data-custom-drag="${u.id}" aria-label="move text box">${V("drag")}</button>`:""}
          ${l?`<button class="compose-custom-item__remove" type="button" data-custom-remove="${u.id}" aria-label="remove text box">&times;</button>`:""}
          ${l?`<button class="compose-custom-item__resize" type="button" data-custom-resize="${u.id}" aria-label="resize text box"></button>`:""}
        </div>
      `}).join("");m.innerHTML=`${_}${M}`,he(),m.onpointerdown=u=>{u.target===m&&(w.selectedId=null,Re(),he())},m.querySelectorAll("[data-custom-item]").forEach(u=>{let g=null;u.addEventListener("pointerdown",b=>{var Se,Ae;const v=u.dataset.customItem||"",$=A(v);if(!$||!h||b.target.closest("[data-custom-remove], [data-custom-resize]"))return;b.preventDefault();const f=b.target.closest("[data-custom-drag]"),D=b.target.closest("[data-custom-text]"),G=b.target.closest("[data-custom-surface]"),U=$.type==="image"?de(v):null;_e(v);const te=h.getBoundingClientRect(),ue=!!(U!=null&&U.previewUrl||U!=null&&U.file),ye=$.type==="image"&&w.imageMode==="crop"&&ue&&G&&!f;g={pointerId:b.pointerId,itemId:v,mode:ye?"crop-image":"move",originX:ye?U.position.x||.5:$.item.x,originY:ye?U.position.y||.5:$.item.y,startX:b.clientX,startY:b.clientY,frameWidth:te.width,frameHeight:te.height,type:$.type,zoom:((Se=U==null?void 0:U.position)==null?void 0:Se.zoom)||1,targetSurface:$.type==="image"&&!ue?G:null,targetText:f?null:D,cropSurface:ye?G:null,dragged:!1},(Ae=u.setPointerCapture)==null||Ae.call(u,b.pointerId)}),u.addEventListener("pointermove",b=>{var G,U;if(!g||g.pointerId!==b.pointerId)return;const v=b.clientX-g.startX,$=b.clientY-g.startY;if(!g.dragged&&Math.hypot(v,$)<6)return;g.dragged=!0,b.preventDefault();const f=A(g.itemId);if(!f)return;const D={x:f.item.x,y:f.item.y,width:f.item.width,height:f.item.height};if(g.mode==="crop-image"){const te=(G=g.cropSurface)==null?void 0:G.getBoundingClientRect(),ue=de(g.itemId),ye=ue.imageSize;if(!te||!ye)return;const Se=ye.width/ye.height,Ae=te.width/te.height,We=(Se>Ae?te.height*Se:te.width)*g.zoom,fa=(Se>Ae?te.height:te.width/Se)*g.zoom,Dt=Math.max(0,We-te.width),Rt=Math.max(0,fa-te.height);ue.position.x=Dt?Math.min(1,Math.max(0,g.originX-v/Dt)):.5,ue.position.y=Rt?Math.min(1,Math.max(0,g.originY-$/Rt)):.5;const Ht=(U=g.cropSurface)==null?void 0:U.querySelector(".compose-custom-item__image");Ht&&(Ht.style.objectPosition=`${ue.position.x*100}% ${ue.position.y*100}%`)}else{f.item.x=g.originX+v/g.frameWidth,f.item.y=g.originY+$/g.frameHeight,Object.assign(f.item,k(f.item,oe(f.type)));const te=f.type==="image"?{ignoreText:!0}:{};Object.assign(f.item,ie(f.item,f.item.id,oe(f.type),te)),Z(f.item,f.item.id,te)||Object.assign(f.item,D),f.type==="image"?ae(f.item.id):Object.assign(f.item,J(f.item,ge(f.item.id))),he(),be()}});const x=b=>{var G,U;if(!g||g.pointerId!==b.pointerId)return;const v=g.itemId,$=g.dragged,f=g.targetSurface,D=g.targetText;if(g=null,(G=u.releasePointerCapture)==null||G.call(u,b.pointerId),!$){if(f){(U=document.getElementById(`custom-image-${v}`))==null||U.click();return}D&&(D.focus(),ke(D))}};u.addEventListener("pointerup",x),u.addEventListener("pointercancel",x)}),m.querySelectorAll("[data-custom-remove]").forEach(u=>{u.addEventListener("click",g=>{g.preventDefault(),g.stopPropagation();const x=u.dataset.customRemove,b=x?A(x):null;if(b){if(b.collection.splice(b.index,1),b.type==="image"){const v=j[x];v!=null&&v.previewUrl&&URL.revokeObjectURL(v.previewUrl),delete j[x],ae(x)}w.selectedId=null,ee()}})}),m.querySelectorAll("[data-custom-text]").forEach(u=>{u.addEventListener("beforeinput",g=>{g.inputType==="insertParagraph"&&(Ye(u,`
`),g.preventDefault())}),u.addEventListener("focus",()=>{const g=u.dataset.customText,x=g?A(g):null;(x==null?void 0:x.type)==="text"&&x.item.isDefaultText&&x.item.text.trim().toLowerCase()==="text"&&(x.item.text="",x.item.isDefaultText=!1,u.textContent=""),_e(u.dataset.customText||"")}),u.addEventListener("input",()=>{const g=u.dataset.customText,x=g?A(g):null;if(!x)return;x.item.text=u.innerText.replace(/\r/g,""),x.item.isDefaultText=!1;const b=T==null?void 0:T.querySelector('[data-custom-control="text"]');b&&b!==document.activeElement&&(b.value=x.item.text),K(x.item.id)})}),m.querySelectorAll('input[id^="custom-image-"]').forEach(u=>{u.addEventListener("change",async g=>{var $;const x=u.id.replace("custom-image-",""),b=de(x),v=(($=g.target.files)==null?void 0:$[0])||null;b.previewUrl&&(URL.revokeObjectURL(b.previewUrl),b.previewUrl=""),b.file=v,b.position={x:.5,y:.5,zoom:1},b.imageSize=v?await X(v):null,v&&(b.previewUrl=fileToPreviewUrl(v)),ae(x),ee()})}),m.querySelectorAll("[data-custom-resize]").forEach(u=>{let g=null;u.addEventListener("pointerdown",b=>{var D;const v=u.dataset.customResize||"",$=A(v);if(!$||!h)return;b.preventDefault(),b.stopPropagation(),_e(v);const f=h.getBoundingClientRect();g={pointerId:b.pointerId,itemId:v,originX:$.item.x,originY:$.item.y,originWidth:$.item.width,originHeight:$.item.height,startX:b.clientX,startY:b.clientY,frameWidth:f.width,frameHeight:f.height,type:$.type},(D=u.setPointerCapture)==null||D.call(u,b.pointerId)}),u.addEventListener("pointermove",b=>{if(!g||g.pointerId!==b.pointerId)return;b.preventDefault();const v=A(g.itemId);if(!v)return;const $=oe(g.type),f={x:v.item.x,y:v.item.y,width:v.item.width,height:v.item.height};v.item.width=g.originWidth+(b.clientX-g.startX)/g.frameWidth,v.item.height=g.originHeight+(b.clientY-g.startY)/g.frameHeight,Object.assign(v.item,k(v.item,$));const D=v.type==="image"?{ignoreText:!0}:{};Object.assign(v.item,ie(v.item,v.item.id,$,D)),Z(v.item,v.item.id,D)||Object.assign(v.item,f),v.type==="image"&&ae(v.item.id),he(),be()});const x=b=>{var v;!g||g.pointerId!==b.pointerId||(g=null,(v=u.releasePointerCapture)==null||v.call(u,b.pointerId))};u.addEventListener("pointerup",x),u.addEventListener("pointercancel",x)}),window.requestAnimationFrame(()=>{w.textBoxes.forEach(u=>{K(u.id)})})}function He(){if(!n||!h)return;const s=n.dataset.template==="page8";if(Object.values(se).forEach(l=>{l&&(l.style.left="",l.style.top="",l.style.width="",l.style.height="")}),Object.entries(pe).forEach(([l,d])=>{d&&(d.style.left="",d.style.top="",d.style.width="",d.style.height="",d.style.fontSize="",d.style.lineHeight="",d.style.textAlign="",l==="editor"&&(d.style.right=""),l==="body"&&(d.style.bottom=""),l==="date"&&(d.style.bottom=""))}),B&&(B.hidden=!s||t!=="edit"),!s){m&&(m.hidden=!0,m.innerHTML="");return}w.imageBoxes=bt({imageBoxes:w.imageBoxes}),w.textBoxes=vt({textBoxes:w.textBoxes},a),ee()}if(o.querySelectorAll('input[name="backgroundColor"]').forEach(s=>{s.addEventListener("change",()=>{at(),je(s.value)})}),at(),window.setTimeout(()=>{var s;je((s=o.querySelector('input[name="backgroundColor"]:checked'))==null?void 0:s.value)},0),o.querySelectorAll('input[name="templateId"]').forEach(s=>{s.addEventListener("change",()=>{it(s.value),ot(s.value)})}),it(c.composeTemplateId||((Nt=o.querySelector('input[name="templateId"]:checked'))==null?void 0:Nt.value)),window.setTimeout(()=>{var s;ot(c.composeTemplateId||((s=o.querySelector('input[name="templateId"]:checked'))==null?void 0:s.value))},0),document.querySelectorAll("[data-template-carousel-nav]").forEach(s=>{s.addEventListener("click",()=>{const l=document.querySelector("[data-template-carousel]");if(!l)return;const d=s.dataset.templateCarouselNav==="next"?1:-1;l.scrollBy({left:l.clientWidth*.72*d,behavior:"smooth"})})}),document.querySelectorAll("[data-color-carousel-nav]").forEach(s=>{s.addEventListener("click",()=>{const l=document.querySelector("[data-color-carousel]");if(!l)return;const d=s.dataset.colorCarouselNav==="next"?1:-1;l.scrollBy({left:l.clientWidth*.72*d,behavior:"smooth"})})}),document.querySelectorAll("[data-compose-stage-nav]").forEach(s=>{s.addEventListener("click",()=>{const l=s.dataset.composeStageNav;l&&z(l)})}),t!=="select"&&i){if(S&&E&&S.addEventListener("click",()=>{const s=!E.hidden;E.hidden=s,S.setAttribute("aria-expanded",String(!s))}),P&&P.addEventListener("click",()=>{const s=!(e!=null&&e.classList.contains("is-preview-mode"));Ue(!!s)}),Ue(!1),Y){ya(async()=>{const{mountComposePretextEditor:s}=await import("./pretextComposeBridge-CUcNdA2J.js");return{mountComposePretextEditor:s}},__vite__mapDeps([0,1,2,3,4]),import.meta.url).then(({mountComposePretextEditor:s})=>{Y.isConnected&&(ve=s(Y,{customLayout:(r==null?void 0:r.customLayout)||{},textValues:a}))}).catch(s=>{console.error("Failed to mount pretext compose editor",s),Y.innerHTML='<p class="compose-pretext-host__error">Failed to load the editor.</p>'});return}o.querySelectorAll("[data-custom-add]").forEach(s=>{s.addEventListener("click",l=>{l.preventDefault();const d=s.dataset.customAdd;if((n==null?void 0:n.dataset.template)!=="page8")return;if(d==="image"){const M={id:re("image"),x:.14,y:.18,width:.28,height:.22};w.imageBoxes=[...w.imageBoxes,k(M,ft)],w.selectedId=M.id,de(M.id),ae(M.id),ee();return}const _=J({id:re("text"),kind:"body",text:"text",isDefaultText:!0,x:.18,y:.2,width:.28,height:.12,fontSize:.026,lineHeight:1.45,padding:.012,align:"left",family:"sans",weight:500},[...w.imageBoxes.map(M=>H(M)),...w.textBoxes.map(M=>H(M))]);w.textBoxes=[...w.textBoxes,k(_,Be)],w.selectedId=_.id,ee()})}),[{inputId:"imageInputPrimary",stateKey:"primary"},{inputId:"imageInputSecondary",stateKey:"secondary"},{inputId:"imageInputAccent",stateKey:"accent"}].forEach(({inputId:s,stateKey:l})=>{const d=document.querySelector(`[data-slot="${s}"]`),_=document.getElementById(s);if(!_)return;_.addEventListener("change",async u=>{var x;const g=((x=u.target.files)==null?void 0:x[0])||null;y[l].file=g?await Mi(g,{maxWidth:1600,quality:.9}):null,y[l].position={x:.5,y:.5},y[l].imageSize=g?await X(g):null,p[s]=y[l].file||"",De(s),R(s),L({standardFiles:q()})});const M=document.querySelector(`[data-slot-remove="${s}"]`);if(M&&M.addEventListener("click",u=>{u.preventDefault(),u.stopPropagation(),p[s]="",y[l]={file:null,position:{x:.5,y:.5},imageSize:null},_.value="",De(s),L({standardFiles:q()})}),d){let u=null;d.addEventListener("pointerdown",x=>{var b,v;if(!(e!=null&&e.classList.contains("is-preview-mode"))){if((n==null?void 0:n.dataset.template)==="page8"){const $=w.imageBoxes[l];if(!$||!h)return;x.preventDefault(),x.stopPropagation();const f=h.getBoundingClientRect();u={pointerId:x.pointerId,mode:"move-box",startX:x.clientX,startY:x.clientY,originX:$.x,originY:$.y,frameWidth:f.width,frameHeight:f.height},d.classList.add("is-dragging"),(b=d.setPointerCapture)==null||b.call(d,x.pointerId);return}y[l].file&&(x.preventDefault(),x.stopPropagation(),u={pointerId:x.pointerId,mode:"pan-image",startX:x.clientX,startY:x.clientY,originX:y[l].position.x,originY:y[l].position.y},d.classList.add("is-dragging"),(v=d.setPointerCapture)==null||v.call(d,x.pointerId))}}),d.addEventListener("pointermove",x=>{if(!u||u.pointerId!==x.pointerId)return;if(x.preventDefault(),u.mode==="move-box"){const Se=u.originX+(x.clientX-u.startX)/u.frameWidth,Ae=u.originY+(x.clientY-u.startY)/u.frameHeight,We=w.imageBoxes[l];We.x=Math.min(W.x+W.width-We.width,Math.max(W.x,Se)),We.y=Math.min(W.y+W.height-We.height,Math.max(W.y,Ae)),He();return}const b=d.getBoundingClientRect(),v=y[l].imageSize;if(!v)return;const $=v.width/v.height,f=b.width/b.height,D=$>f?b.height*$:b.width,G=$>f?b.height:b.width/$,U=Math.max(0,D-b.width),te=Math.max(0,G-b.height),ue=x.clientX-u.startX,ye=x.clientY-u.startY;y[l].position.x=U?Math.min(1,Math.max(0,u.originX-ue/U)):.5,y[l].position.y=te?Math.min(1,Math.max(0,u.originY-ye/te)):.5,R(s),L({standardFiles:q()})});const g=x=>{var b;!u||u.pointerId!==x.pointerId||(u=null,d.classList.remove("is-dragging"),(b=d.releasePointerCapture)==null||b.call(d,x.pointerId))};d.addEventListener("pointerup",g),d.addEventListener("pointercancel",g)}De(s),R(s)}),He(),N.forEach(s=>{s.dataset.previousValue=Ce(s),s.addEventListener("beforeinput",l=>{var g;if(s.dataset.singleLine==="true"&&(l.inputType==="insertParagraph"||l.inputType==="insertLineBreak")){l.preventDefault();return}const d=Number(s.dataset.maxChars||0);if(!d||!l.inputType.startsWith("insert"))return;const _=Ce(s).length,M=Xe(s),u=((g=l.data)==null?void 0:g.length)??1;_-M+u>d&&l.preventDefault()}),s.addEventListener("paste",l=>{var v,$;l.preventDefault();const d=(($=(v=l.clipboardData)==null?void 0:v.getData("text/plain"))==null?void 0:$.replace(/\r/g,""))??"",_=s.dataset.singleLine==="true"?d.replace(/\n+/g," "):d,M=Number(s.dataset.maxChars||0),u=Ce(s).length,g=Xe(s),x=M?Math.max(0,M-(u-g)):_.length,b=_.slice(0,x);b&&(Ye(s,b),s.dataset.previousValue=Ce(s))}),s.addEventListener("input",()=>{const l=Number(s.dataset.maxChars||0),d=Ce(s);if(l&&d.length>l){s.innerText=s.dataset.previousValue||"",ke(s);return}s.dataset.previousValue=d}),s.addEventListener("blur",()=>{et(s),tt(s)})}),t==="tags"&&i.addEventListener("submit",async s=>{var u;s.preventDefault();const l=I(),d={templateId:l.templateId,backgroundColor:l.backgroundColor,headline:l.headline,subhead:l.subhead,intro:l.intro,body:l.body,date:l.date,editor:l.editor,customLayout:l.customLayout},_=await ji(d,l.standardFiles,{}),M=String(((u=Qe().profile)==null?void 0:u.name)||"you").trim()||"you";c.composeEditingPostId?Ma(c.composeEditingPostId,{caption:jt(d),imageData:_,fixedTags:l.fixedTags,freeTags:l.freeTags,composeData:{...d,fixedTags:l.fixedTags,freeTags:l.freeTags,standardFiles:l.standardFiles}}):ka({authorName:M,caption:jt(d),imageData:_,fixedTags:l.fixedTags,freeTags:l.freeTags,composeData:{...d,fixedTags:l.fixedTags,freeTags:l.freeTags,standardFiles:l.standardFiles}}),c.screen="timeline",c.timelineTab="recommended",c.composeStage="select",c.composeWorkingDraft=null,ne()})}}function Gi(){const e=document.getElementById("issueForm");e&&e.addEventListener("submit",t=>{t.preventDefault();const i=new FormData(e),o=i.getAll("issuePostIds").map(n=>String(n));o.length&&(Na({title:String(i.get("title")).trim(),subtitle:String(i.get("subtitle")||"").trim(),tone:String(i.get("tone")||"soft"),postIds:o}),ce())})}function Vi(){ct(document.getElementById("screenArea"));function e(r){return new Promise(a=>{const p=new Image,y=URL.createObjectURL(r);p.onload=()=>{a({width:p.naturalWidth,height:p.naturalHeight}),URL.revokeObjectURL(y)},p.onerror=()=>{a(null),URL.revokeObjectURL(y)},p.src=y})}document.querySelectorAll("[data-profile-avatar-upload]").forEach(r=>{r.addEventListener("click",a=>{a.stopPropagation(),c.profileExpanded=!0,c.profileSection="edit",ce(),window.setTimeout(()=>{var p;(p=document.getElementById("profileAvatarInput"))==null||p.click()},0)})}),document.querySelectorAll("[data-profile-section]").forEach(r=>{r.addEventListener("click",()=>{c.profileSection=r.dataset.profileSection,c.profileSection==="library"&&(c.profileLibraryTab=c.profileLibraryTab||"liked"),ce()})}),document.querySelectorAll("[data-profile-library-tab]").forEach(r=>{r.addEventListener("click",()=>{c.profileLibraryTab=r.dataset.profileLibraryTab||"liked",ce()})});const t=document.getElementById("profileAvatarInput"),i=document.getElementById("avatarCropper"),o=document.getElementById("avatarCropSurface"),n=document.getElementById("avatarCropImage");function h(){if(!(!i||!n)){if(!O.file||!O.previewUrl){i.hidden=!0,n.removeAttribute("src");return}i.hidden=!1,n.src=O.previewUrl,n.style.objectPosition=`${O.crop.x*100}% ${O.crop.y*100}%`,n.style.transform=`scale(${O.crop.zoom})`}}if(t&&t.addEventListener("change",async r=>{var p;const a=((p=r.target.files)==null?void 0:p[0])||null;O.previewUrl&&(URL.revokeObjectURL(O.previewUrl),O.previewUrl=""),O.file=a,O.imageSize=a?await e(a):null,O.crop={x:.5,y:.5,zoom:1},a&&(O.previewUrl=fileToPreviewUrl(a)),c.profileAvatarCropOpen=!!a,ce()}),o){let r=null;o.addEventListener("pointerdown",p=>{var y;O.file&&(r={pointerId:p.pointerId,startX:p.clientX,startY:p.clientY,originX:O.crop.x,originY:O.crop.y},o.classList.add("is-dragging"),(y=o.setPointerCapture)==null||y.call(o,p.pointerId))}),o.addEventListener("pointermove",p=>{if(!r||r.pointerId!==p.pointerId||!O.imageSize)return;const y=o.getBoundingClientRect(),{width:S,height:E}=O.imageSize,P=S/E,B=y.width/y.height,T=P>B?y.height*P:y.width,Y=P>B?y.height:y.width/P,N=T*O.crop.zoom,w=Y*O.crop.zoom,j=Math.max(0,N-y.width),pe=Math.max(0,w-y.height),se=p.clientX-r.startX,q=p.clientY-r.startY;O.crop.x=j?Math.min(1,Math.max(0,r.originX-se/j)):.5,O.crop.y=pe?Math.min(1,Math.max(0,r.originY-q/pe)):.5,h()});const a=p=>{var y;!r||r.pointerId!==p.pointerId||(r=null,o.classList.remove("is-dragging"),(y=o.releasePointerCapture)==null||y.call(o,p.pointerId))};o.addEventListener("pointerup",a),o.addEventListener("pointercancel",a)}h();const m=document.getElementById("profileForm");m&&m.addEventListener("submit",async r=>{r.preventDefault();const a=new FormData(m),p=O.file?await Ii(O.file,O.crop,{size:320}):Qe().profile.avatarData;Aa({name:String(a.get("name")).trim(),bio:String(a.get("bio")).trim(),avatarData:p}),Ze(),c.profileSection=null,c.profileExpanded=!0,ce()}),document.querySelectorAll("[data-follow-author]").forEach(r=>{r.addEventListener("click",()=>{Ba(r.dataset.followAuthor),ce()})})}function Zi(){ct(document.getElementById("screenArea")),document.querySelectorAll("[data-close-post-detail]").forEach(e=>{e.addEventListener("click",()=>{ua()})})}function Qi(){document.querySelectorAll("[data-close-preview]").forEach(e=>{e.addEventListener("click",()=>{c.previewPostId=null,Ge()})}),document.querySelectorAll("[data-close-comments]").forEach(e=>{e.addEventListener("click",()=>{c.commentPostId=null,Ge()})}),document.querySelectorAll("[data-delete-post]").forEach(e=>{e.addEventListener("click",()=>{const t=e.dataset.deletePost;if(!t)return;const i=Oe(t);if(pa(i)&&window.confirm("この投稿を削除しますか？")){if(Ia(t),c.previewPostId===t&&(c.previewPostId=null),c.commentPostId===t&&(c.commentPostId=null),c.screen==="post"){ua();return}ce()}})}),document.querySelectorAll("[data-comment-form]").forEach(e=>{e.addEventListener("submit",t=>{t.preventDefault();const i=e.querySelector('input[name="comment"]');Ea(e.dataset.commentForm,i.value),c.commentPostId=e.dataset.commentForm,Ge(),ce()})})}function Ki(){switch(Fi(),c.screen){case"home":qi();break;case"timeline":zi();break;case"search":Oi();break;case"compose":Ji();break;case"magazine":Gi();break;case"profile":Vi();break;case"post":Zi();break}}function ga(e=document.getElementById("app")){if(!e)throw new Error("bootLegacyApp requires an app root element.");if(Ve=e,typeof window<"u"&&typeof window.matchMedia=="function"&&!qe){qe=window.matchMedia("(prefers-color-scheme: dark)");const t=()=>{c.homeTheme==="system"&&ne()};typeof qe.addEventListener=="function"?qe.addEventListener("change",t):typeof qe.addListener=="function"&&qe.addListener(t)}return ne(),{render:ne}}if(typeof window<"u"&&!window.__MEMORIES_REACT_HOST__){const e=document.getElementById("app");e&&ga(e)}const to=Object.freeze(Object.defineProperty({__proto__:null,bootLegacyApp:ga},Symbol.toStringTag,{value:"Module"}));export{W as P,vt as a,to as b,bt as n};
