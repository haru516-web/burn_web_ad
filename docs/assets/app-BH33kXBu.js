const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["./pretextComposeBridge-CHOTkPat.js","./main-CiXthesN.js","./client-CTQ0Ju4c.js","./main-Dj79Sony.css","./pretextComposeBridge-BXwsMVV_.css"])))=>i.map(i=>d[i]);
import{_ as Pa}from"./main-CiXthesN.js";function Ea(){return""}function oa(e){const t=new Date(e),i=t.getFullYear(),o=String(t.getMonth()+1).padStart(2,"0"),n=String(t.getDate()).padStart(2,"0");return`${i}.${o}.${n}`}function na(e){const t=new Date(e),i=t.getFullYear(),o=String(t.getMonth()+1).padStart(2,"0"),n=String(t.getDate()).padStart(2,"0"),u=String(t.getHours()).padStart(2,"0"),m=String(t.getMinutes()).padStart(2,"0");return`${i}.${o}.${n} ${u}:${m}`}function Ca(e){const t=new Date(e).getTime();return(Date.now()-t)/(1e3*60*60)<=72}function Aa(e){const t=Date.now()-new Date(e).getTime(),i=Math.floor(t/6e4);if(i<1)return"たった今";if(i<60)return`${i}分前`;const o=Math.floor(i/60);return o<24?`${o}時間前`:`${Math.floor(o/24)}日前`}function N(e){return{timeline:'<svg viewBox="0 0 24 24" aria-hidden="true" fill="none" stroke="currentColor" stroke-width="1.15" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="2.3" fill="currentColor" stroke="none"/><ellipse cx="12" cy="12" rx="8.8" ry="4.1" transform="rotate(18 12 12)"/><ellipse cx="12" cy="12" rx="8.1" ry="3.3" transform="rotate(78 12 12)"/><ellipse cx="12" cy="12" rx="7.6" ry="5.2" transform="rotate(-40 12 12)"/><circle cx="18.9" cy="6.2" r="1.15" fill="currentColor" stroke="none"/><circle cx="17.8" cy="17.3" r="1" fill="currentColor" stroke="none"/><circle cx="6.1" cy="8" r="0.95" fill="currentColor" stroke="none"/><circle cx="7.1" cy="18.2" r="0.9" fill="currentColor" stroke="none"/><circle cx="11.2" cy="6.4" r="0.9" fill="currentColor" stroke="none"/></svg>',search:'<svg viewBox="0 0 24 24" aria-hidden="true" fill="none" stroke="currentColor" stroke-width="1.15" stroke-linecap="round" stroke-linejoin="round"><ellipse cx="12" cy="6.5" rx="6.9" ry="2.1"/><path d="M5.7 6.8c1 3.1 3 5.6 6.3 11.5"/><path d="M18.3 6.8c-1 3.1-3 5.6-6.3 11.5"/><circle cx="12" cy="19.8" r="1.55" fill="currentColor" stroke="none"/><circle cx="12" cy="9.2" r="0.8" fill="currentColor" stroke="none"/><circle cx="9.2" cy="8.6" r="0.65" fill="currentColor" stroke="none"/><circle cx="14.9" cy="8.3" r="0.65" fill="currentColor" stroke="none"/><circle cx="10.2" cy="11.2" r="0.55" fill="currentColor" stroke="none"/><circle cx="13.8" cy="11" r="0.55" fill="currentColor" stroke="none"/><circle cx="12" cy="12.9" r="0.55" fill="currentColor" stroke="none"/><circle cx="11" cy="15.1" r="0.45" fill="currentColor" stroke="none"/><circle cx="13" cy="15.6" r="0.45" fill="currentColor" stroke="none"/><circle cx="8.2" cy="4.2" r="0.45" fill="currentColor" stroke="none"/><circle cx="15.8" cy="3.9" r="0.45" fill="currentColor" stroke="none"/></svg>',compose:'<svg viewBox="0 0 24 24" aria-hidden="true" fill="none" stroke="currentColor" stroke-width="1.45" stroke-linecap="round"><circle cx="12" cy="12" r="2.45" fill="currentColor" stroke="none"/><path d="M12 2.9v5.1M12 16v5.1M2.9 12h5.1M16 12h5.1M5.5 5.5l3.6 3.6M14.9 14.9l3.6 3.6M18.5 5.5l-3.6 3.6M9.1 14.9l-3.6 3.6"/></svg>',issue:'<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M6 4h12a2 2 0 0 1 2 2v12H8a2 2 0 0 0-2 2z"/><path d="M6 4a2 2 0 0 0-2 2v14h14"/></svg>',profile:'<svg viewBox="0 0 24 24" aria-hidden="true" fill="none" stroke="currentColor" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round"><path d="M3.8 16.8c2.3-2.6 4.9-5.1 7.1-7.6 1.1-1.2 2-2.2 2.7-2.2.7 0 1.1.6 1.1 1.4 0 1.1-.5 2.1-.6 3.2 2.1-2.5 4.3-4.3 6.4-4.3-.6 1.4-1.7 2.6-2.6 3.8-.8 1-.9 1.8.3 1.8h2.1"/><path d="M4.1 17.1c3.8-.2 8.5-.4 16-.7"/><circle cx="20.6" cy="8" r="0.85" fill="currentColor" stroke="none"/></svg>',heart:'<svg viewBox="0 0 24 24" aria-hidden="true" fill="none" stroke="currentColor" stroke-width="1.25" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="2.5" fill="currentColor" stroke="none"/><circle cx="12" cy="12" r="4.7"/><circle cx="12" cy="12" r="7"/><circle cx="12" cy="12" r="9.2" opacity="0.68"/></svg>',comment:'<svg viewBox="0 0 24 24" aria-hidden="true" fill="none" stroke="currentColor" stroke-width="1.35" stroke-linecap="round" stroke-linejoin="round"><path d="M4.8 12.2c0-3.4 2.8-6.1 6.2-6.1 3.3 0 5.8 2.4 5.8 5.4 0 3.1-2.6 5.4-6.2 5.4-.8 0-1.6-.1-2.3-.4l-3.3 1 .9-2.7c-.7-.8-1.1-1.7-1.1-2.6Z"/><path d="m14.2 8.3 5 1.1-2 1.9 1.9 5-4.9-1.9-1.9 2Z" opacity="0.8"/></svg>',save:'<svg viewBox="0 0 24 24" aria-hidden="true" fill="none" stroke="currentColor" stroke-width="1.25" stroke-linecap="round" stroke-linejoin="round"><path d="M12 3.6 18.2 7v10L12 20.4 5.8 17V7Z"/><path d="M12 3.6v6.3M18.2 7 12 9.9 5.8 7"/><path d="M12 9.9v10.5"/><circle cx="12" cy="12" r="2.1" fill="currentColor" stroke="none"/></svg>',tag:'<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M20 11.5 11.5 20 4 12.5V5h7.5Z"/><circle cx="15.5" cy="8.5" r="1"/></svg>',spark:'<svg viewBox="0 0 24 24" aria-hidden="true"><path d="m12 3 1.9 5.1L19 10l-5.1 1.9L12 17l-1.9-5.1L5 10l5.1-1.9Z"/></svg>',arrowLeft:'<svg viewBox="0 0 24 24" aria-hidden="true" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M15.5 5.5 9 12l6.5 6.5"/><path d="M9.5 12h9"/></svg>',returnLeft:'<svg viewBox="0 0 24 24" aria-hidden="true" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><path d="M9.2 7.4 5.4 11l3.8 3.6"/><path d="M6 11h7.8c3.1 0 4.9 1.5 4.9 4.6 0 .9-.1 1.5-.4 2.1"/></svg>',recommended:'<svg viewBox="0 0 24 24" aria-hidden="true" fill="none" stroke="currentColor" stroke-width="1.35" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="5.3" r="2.5" fill="currentColor" stroke="none"/><circle cx="5.8" cy="17.6" r="2.6" fill="currentColor" stroke="none"/><circle cx="18.2" cy="17.6" r="2.6" fill="currentColor" stroke="none"/><path d="M7.9 15.8 10.6 8.1"/><path d="M16.1 15.8 13.4 8.1"/><path d="M8.8 17.6h6.4"/></svg>',follow:'<svg viewBox="0 0 24 24" aria-hidden="true" fill="none" stroke="currentColor" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round"><circle cx="8.3" cy="17.5" r="3.1" fill="currentColor" stroke="none"/><circle cx="16.4" cy="8.2" r="2.5" fill="currentColor" stroke="none"/><path d="M5.1 18.7c1.3-4.2 5-7.2 9.5-7.2 1.5 0 3 .3 4.2.9"/><path d="M5 18.9c1.8 0 3.3-.6 5.1-1.7 3-1.9 5.1-4.7 7.1-8"/><path d="m17.6 6.2 1.9 1.1-1 2.1" /></svg>',close:'<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M6 6 18 18M18 6 6 18"/></svg>',image:'<svg viewBox="0 0 24 24" aria-hidden="true"><rect x="4" y="5" width="16" height="14" rx="2"/><path d="m8 15 2.5-2.5L13 15l2.5-3 2.5 3"/><circle cx="9" cy="9" r="1.2"/></svg>',trash:'<svg viewBox="0 0 24 24" aria-hidden="true" fill="none" stroke="currentColor" stroke-width="1.35" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="7.6" opacity="0.45"/><path d="M7.1 7.1 16.9 16.9"/><path d="M16.9 7.1 7.1 16.9"/><circle cx="12" cy="12" r="1.15" fill="currentColor" stroke="none"/></svg>',edit:'<svg viewBox="0 0 24 24" aria-hidden="true" fill="none" stroke="currentColor" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round"><path d="M5.4 8.2h8.2v10.2H5.4z"/><path d="M9 5.1h9.1l-4.9 5.1H9z"/><path d="M6.3 16.8 16.7 6.4"/><circle cx="12" cy="11.5" r="0.95" fill="currentColor" stroke="none"/></svg>',drag:'<svg viewBox="0 0 24 24" aria-hidden="true" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M12 4v16M4 12h16"/><path d="m12 4-2.8 2.8M12 4l2.8 2.8M20 12l-2.8-2.8M20 12l-2.8 2.8M12 20l-2.8-2.8M12 20l2.8-2.8M4 12l2.8-2.8M4 12l2.8 2.8"/></svg>',alignLeft:'<svg viewBox="0 0 24 24" aria-hidden="true" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round"><path d="M5 7h12"/><path d="M5 12h9"/><path d="M5 17h13"/></svg>',alignCenter:'<svg viewBox="0 0 24 24" aria-hidden="true" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round"><path d="M6 7h12"/><path d="M8 12h8"/><path d="M5 17h14"/></svg>',alignRight:'<svg viewBox="0 0 24 24" aria-hidden="true" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round"><path d="M7 7h12"/><path d="M10 12h9"/><path d="M6 17h13"/></svg>'}[e]||""}function Xe(e,t,i="avatar"){return e?`<img class="avatar__image" src="${e}" alt="${i}" />`:`<span class="avatar__label">${t}</span>`}function Ba(e){var t;return e?`
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
              <span class="comment-item__date">${na(i.createdAt)}</span>
            </article>
          `).join(""):'<p class="empty-copy">No comments yet.</p>'}
        </div>
        <form class="comment-form" data-comment-form="${e.id}">
          <input class="field__input" type="text" name="comment" maxlength="80" placeholder="Write a comment" required />
          <button class="button button--primary" type="submit">Post</button>
        </form>
      </section>
    </div>
  `:""}const ra="memories-static-site-state-v1";function Na(){try{const e=localStorage.getItem(ra);return e?JSON.parse(e):null}catch{return null}}function Da(e){localStorage.setItem(ra,JSON.stringify(e))}function Lt(e="id"){return`${e}_${Math.random().toString(36).slice(2,9)}_${Date.now().toString(36)}`}const yt={profile:{name:"you",bio:"A small local profile to collect your memories.",avatarData:""},posts:[],issues:[],followingAuthors:[]};function Ra(e){return{id:e.id,authorName:e.authorName||"you",authorIcon:e.authorIcon||(e.authorName||"U").trim().slice(0,1).toUpperCase(),authorAvatarData:e.authorAvatarData||"",caption:e.caption||"",imageData:e.imageData||"",fixedTags:Array.isArray(e.fixedTags)?e.fixedTags:[],freeTags:Array.isArray(e.freeTags)?e.freeTags:[],likes:Number(e.likes||0),saves:Number(e.saves||0),comments:Array.isArray(e.comments)?e.comments:[],impressions:Number(e.impressions||0),liked:!!e.liked,saved:!!e.saved,createdAt:e.createdAt||new Date().toISOString(),updatedAt:e.updatedAt||null,composeData:e.composeData||null}}function Ha(e){var t,i,o;return e?{profile:{name:((t=e.profile)==null?void 0:t.name)||yt.profile.name,bio:((i=e.profile)==null?void 0:i.bio)||yt.profile.bio,avatarData:((o=e.profile)==null?void 0:o.avatarData)||""},posts:Array.isArray(e.posts)?e.posts.map(Ra):[],issues:Array.isArray(e.issues)?e.issues:[],followingAuthors:Array.isArray(e.followingAuthors)?e.followingAuthors:[]}:structuredClone(yt)}let ce=Ha(Na());function et(){return ce}function we(e){ce=e,Da(ce)}function qa(e){const t=structuredClone(ce);t.posts.unshift({id:Lt("post"),authorName:e.authorName,authorIcon:(e.authorName||"U").trim().slice(0,1).toUpperCase(),authorAvatarData:ce.profile.avatarData||"",caption:e.caption||"",imageData:e.imageData,fixedTags:e.fixedTags||[],freeTags:e.freeTags||[],likes:0,saves:0,comments:[],impressions:0,liked:!1,saved:!1,createdAt:new Date().toISOString(),updatedAt:null,composeData:e.composeData||null}),we(t)}function Wa(e,t){const i=structuredClone(ce),o=i.posts.find(n=>n.id===e);o&&(o.caption=t.caption??o.caption,o.imageData=t.imageData??o.imageData,o.fixedTags=Array.isArray(t.fixedTags)?t.fixedTags:o.fixedTags,o.freeTags=Array.isArray(t.freeTags)?t.freeTags:o.freeTags,o.composeData=t.composeData??o.composeData,o.updatedAt=new Date().toISOString(),we(i))}function za(e){const t=structuredClone(ce);t.posts.some(o=>o.id===e)&&(t.posts=t.posts.filter(o=>o.id!==e),t.issues=t.issues.map(o=>({...o,postIds:(o.postIds||[]).filter(n=>n!==e)})).filter(o=>o.postIds.length),we(t))}function Oa(e){const t=structuredClone(ce),i=t.posts.find(o=>o.id===e);i&&(i.liked=!i.liked,i.likes+=i.liked?1:-1,we(t))}function Fa(e){const t=structuredClone(ce),i=t.posts.find(o=>o.id===e);i&&(i.saved=!i.saved,i.saves+=i.saved?1:-1,we(t))}function Xa(e,t){const i=structuredClone(ce),o=i.posts.find(n=>n.id===e);!o||!t.trim()||(o.comments.unshift({id:Lt("comment"),text:t.trim(),createdAt:new Date().toISOString()}),we(i))}function Ya(e){const t=structuredClone(ce),i=t.posts.find(o=>o.id===e);i&&(i.impressions+=1,we(t))}function Ua(e){const t=structuredClone(ce),i=t.profile.name,o=e.avatarData||"";t.profile.name=e.name,t.profile.bio=e.bio,t.profile.avatarData=o,t.posts=t.posts.map(n=>n.authorName===i?{...n,authorName:e.name,authorIcon:(e.name||"U").trim().slice(0,1).toUpperCase(),authorAvatarData:o}:n),t.followingAuthors=t.followingAuthors.map(n=>n===i?e.name:n),we(t)}function ja(e){const t=structuredClone(ce),i=t.followingAuthors.includes(e);t.followingAuthors=i?t.followingAuthors.filter(o=>o!==e):[...t.followingAuthors,e],we(t)}function Ja(e){const t=structuredClone(ce);t.issues.unshift({id:Lt("issue"),title:e.title,subtitle:e.subtitle,tone:e.tone,postIds:e.postIds,createdAt:new Date().toISOString()}),we(t)}function Ga(){return`
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
  `}function Va(e){return[...e].sort((t,i)=>Gt(i)-Gt(t))}function Gt(e){var u;const t=(e.likes||0)*2+(e.saves||0)*2+(((u=e.comments)==null?void 0:u.length)||0)*1.5+(e.impressions||0)*1.2,i=Ca(e.createdAt)?120:0,n=220/Math.max(1,(Date.now()-new Date(e.createdAt).getTime())/(1e3*60*60));return t+i+n}function Za(e,{query:t="",tags:i=[]}={}){const o=t.trim().toLowerCase();return e.filter(n=>{const u=[n.authorName,n.caption||"",...n.fixedTags||[],...n.freeTags||[]].join(" ").toLowerCase(),m=!o||u.includes(o),l=!i.length||i.every(a=>[...n.fixedTags||[],...n.freeTags||[]].includes(a));return m&&l})}function Qa(e){return e==="system"?typeof window<"u"&&typeof window.matchMedia=="function"&&window.matchMedia("(prefers-color-scheme: dark)").matches?"dark":"light":e==="dark"?"dark":"light"}function Ka(e){return e==="system"?"System":e==="dark"?"Dark":"White"}function ei(e,t){return e==="system"?`OS ${t==="dark"?"Dark":"White"}`:"Tap to switch"}function ti(e,t){const i=e.posts||[];return t==="following"?i.filter(o=>e.followingAuthors.includes(o.authorName)):Va(i)}const lt=[{x:70,y:78,w:210,h:300},{x:382,y:116,w:122,h:148},{x:566,y:82,w:214,h:320},{x:78,y:448,w:214,h:304},{x:360,y:318,w:204,h:434},{x:598,y:470,w:190,h:260},{x:88,y:834,w:156,h:196},{x:344,y:786,w:182,h:264},{x:640,y:872,w:142,h:172}],Vt=860,Zt=1120,ai=980,ii=1260;function Qt(e){const t=e%2,i=Math.floor(e/2);return{x:120+t*ai,y:80+i*ii}}function oi(e,t,i){return`
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
  `}function ni(e){const t=Math.max(1,Math.ceil(e.length/lt.length)),i=Array.from({length:t},(n,u)=>{const m=Qt(u),l=e.slice(u*lt.length,(u+1)*lt.length);return{placement:m,html:`
        <section
          class="timeline-board"
          style="left:${m.x}px; top:${m.y}px; width:${Vt}px; height:${Zt}px;"
          aria-hidden="true"
        ></section>
        ${l.map((a,p)=>oi(a,lt[p],m)).join("")}
      `}});if(!e.length)return{width:1280,height:1120,html:`
        <div class="timeline-field__empty">
        <p class="timeline-field__empty-title">No posts yet</p>
        <p class="timeline-field__empty-copy">Create your first memory and it will appear here.</p>
      </div>
      `};const o=Qt(t-1);return{width:o.x+Vt+140,height:o.y+Zt+140,html:i.map(n=>n.html).join("")}}function Kt(e,t){const i=(t==null?void 0:t.homeTheme)||"dark",o=Qa(i),n=(t==null?void 0:t.homeCoreState)||"default",u=Ka(i),m=ei(i,o);return`
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
  `}function ri(e,t){var n,u;const i=ti(e,t.timelineTab),o=ni(i);return`
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
            <p class="post-card__time">${Aa(e.createdAt)}</p>
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
        ${u?`<span class="post-card__date">${oa(e.createdAt)}</span>`:"<span></span>"}
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
  `}const la={activity:["ご飯","朝ごはん","ランチ","ディナー","カフェ","散歩","買い物","ドライブ","旅行","イベント"],mood:["まったり","おしゃれ","落ち着く","ロマンチック","ワクワク","にぎやか"],scene:["初デート","休日","昼デート","夜デート","記念日","雨の日"],budget:["低予算","ふつう","ちょっと贅沢"],time:["朝","昼","夕方","夜"]},li={activity:"デート内容",mood:"雰囲気",scene:"シーン",budget:"予算感",time:"時間帯"},ci=Object.values(la).flat();function di(e){return ci.map(t=>`
    <button class="chip chip--filter ${e.includes(t)?"is-active":""}" data-search-tag="${t}">${t}</button>
  `).join("")}function mi(e,t){const i=t.searchTags||[],o=Za(e.posts||[],{query:t.searchQuery||"",tags:i}),n=o.length?`
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
        ${di(i)}
      </div>

      ${n}
    </section>
  `}const ca={id:"page1",label:"Page 1",description:"Template 1",async render(e,t,i,o){const{addWrappedText:n,drawFileCover:u,drawSlotPlaceholder:m,defaults:l}=o,a={x:84,y:84,width:1072,height:1586};e.fillStyle="#191514",e.textBaseline="top";const p={x:a.x+a.width*.55,y:a.y+a.height*.125,width:a.width*.36,height:a.width*.36,radius:0},y={x:a.x+a.width*.08,y:a.y+a.height*.48,width:a.width*.45,height:a.height*.39,radius:0};i.secondary.file?await u(e,i.secondary.file,p,i.secondary.position):m(e,p),i.primary.file?await u(e,i.primary.file,y,i.primary.position):m(e,y),e.font='600 78px "Cormorant Garamond", "Times New Roman", serif',n(e,t.headline||l.headline,{x:a.x+a.width*.07,y:a.y+a.height*.058,maxWidth:a.width*.7,lineHeight:82,maxLines:2}),e.font='500 32px "Noto Sans JP", sans-serif',n(e,t.subhead||l.subhead,{x:a.x+a.width*.07,y:a.y+a.height*.132,maxWidth:a.width*.7,lineHeight:42,maxLines:3}),e.font='500 33px "Noto Sans JP", sans-serif',n(e,t.intro||l.intro,{x:a.x+a.width*.085,y:a.y+a.height*.215,maxWidth:a.width*.37,lineHeight:48,maxLines:4}),e.font='500 31px "Noto Sans JP", sans-serif',n(e,t.body||l.body,{x:a.x+a.width*.585,y:a.y+a.height*.625,maxWidth:a.width*.245,lineHeight:46,maxLines:6}),e.font='500 28px "Noto Sans JP", sans-serif',n(e,t.date||l.date,{x:a.x+a.width*.08,y:a.y+a.height*.895,maxWidth:a.width*.31,lineHeight:34,maxLines:1});const S=t.editor||l.editor,E=a.width*.32,P=a.x+a.width*.92-Math.min(E,e.measureText(S).width);n(e,S,{x:P,y:a.y+a.height*.895,maxWidth:E,lineHeight:34,maxLines:1})}},pi={id:"page2",label:"Page 2",description:"Template 2",async render(e,t,i,o){const{addWrappedText:n,clipRoundedRect:u,drawFileCover:m,drawSlotPlaceholder:l,defaults:a}=o,p={x:84,y:84,width:1072,height:1586};e.fillStyle="#191514",e.textBaseline="top";const y={x:p.x+p.width*.138,y:p.y+p.height*.142,width:p.width*.724,height:p.height*.374,radius:0};i.primary.file?await m(e,i.primary.file,y,i.primary.position):l(e,y),e.font='600 60px "Cormorant Garamond", "Times New Roman", serif',n(e,t.headline||a.headline,{x:p.x+p.width*.142,y:p.y+p.height*.565,maxWidth:p.width*.66,lineHeight:66,maxLines:2}),e.font='500 30px "Noto Sans JP", sans-serif',n(e,t.subhead||a.subhead,{x:p.x+p.width*.142,y:p.y+p.height*.634,maxWidth:p.width*.68,lineHeight:40,maxLines:2}),e.font='500 28px "Noto Sans JP", sans-serif',n(e,t.intro||a.intro,{x:p.x+p.width*.142,y:p.y+p.height*.698,maxWidth:p.width*.66,lineHeight:38,maxLines:4}),e.font='500 28px "Noto Sans JP", sans-serif',n(e,t.body||a.body,{x:p.x+p.width*.142,y:p.y+p.height*.792,maxWidth:p.width*.66,lineHeight:38,maxLines:4}),e.font='500 24px "Noto Sans JP", sans-serif',n(e,t.date||a.date,{x:p.x+p.width*.142,y:p.y+p.height*.948,maxWidth:p.width*.28,lineHeight:30,maxLines:1});const S=t.editor||a.editor;e.font='500 24px "Noto Sans JP", sans-serif';const E=p.width*.28,P=p.x+p.width*.86-Math.min(E,e.measureText(S).width);n(e,S,{x:P,y:p.y+p.height*.948,maxWidth:E,lineHeight:30,maxLines:1})}},ui={id:"page3",label:"Page 3",description:"Template 3",async render(e,t,i,o){const{addWrappedText:n,drawFileCover:u,drawSlotPlaceholder:m,defaults:l}=o,a={x:84,y:84,width:1072,height:1586};e.fillStyle="#191514",e.textBaseline="top";const p={x:a.x+a.width*.14,y:a.y+a.height*.22,width:a.width*.58,height:a.height*.36,radius:0},y={x:a.x+a.width*.74,y:a.y+a.height*.72,width:a.width*.14,height:a.height*.15,radius:0};i.primary.file?await u(e,i.primary.file,p,i.primary.position):m(e,p),i.secondary.file?await u(e,i.secondary.file,y,i.secondary.position):m(e,y),e.font='600 58px "Cormorant Garamond", "Times New Roman", serif',n(e,t.headline||l.headline,{x:a.x+a.width*.12,y:a.y+a.height*.075,maxWidth:a.width*.66,lineHeight:64,maxLines:2}),e.font='500 28px "Noto Sans JP", sans-serif',n(e,t.subhead||l.subhead,{x:a.x+a.width*.12,y:a.y+a.height*.145,maxWidth:a.width*.66,lineHeight:36,maxLines:2}),e.font='500 26px "Noto Sans JP", sans-serif',n(e,t.intro||l.intro,{x:a.x+a.width*.13,y:a.y+a.height*.675,maxWidth:a.width*.32,lineHeight:34,maxLines:4}),e.font='500 26px "Noto Sans JP", sans-serif',n(e,t.body||l.body,{x:a.x+a.width*.13,y:a.y+a.height*.79,maxWidth:a.width*.32,lineHeight:34,maxLines:3}),e.font='500 24px "Noto Sans JP", sans-serif',n(e,t.date||l.date,{x:a.x+a.width*.13,y:a.y+a.height*.915,maxWidth:a.width*.2,lineHeight:30,maxLines:1});const S=t.editor||l.editor,E=a.width*.16,P=a.x+a.width*.9-Math.min(E,e.measureText(S).width);n(e,S,{x:P,y:a.y+a.height*.915,maxWidth:E,lineHeight:30,maxLines:1})}},hi={id:"page4",label:"Page 4",description:"Template 4",async render(e,t,i,o){const{addWrappedText:n,drawFileCover:u,drawSlotPlaceholder:m,defaults:l}=o,a={x:84,y:84,width:1072,height:1586};e.fillStyle="#191514",e.textBaseline="top";const p={x:a.x+a.width*.11,y:a.y+a.height*.59,width:a.width*.34,height:a.height*.25,radius:0},y={x:a.x+a.width*.59,y:a.y+a.height*.13,width:a.width*.24,height:a.height*.29,radius:0};i.primary.file?await u(e,i.primary.file,p,i.primary.position):m(e,p),i.secondary.file?await u(e,i.secondary.file,y,i.secondary.position):m(e,y),e.font='600 52px "Cormorant Garamond", "Times New Roman", serif',n(e,t.headline||l.headline,{x:a.x+a.width*.11,y:a.y+a.height*.11,maxWidth:a.width*.28,lineHeight:58,maxLines:2}),e.font='500 27px "Noto Sans JP", sans-serif',n(e,t.subhead||l.subhead,{x:a.x+a.width*.11,y:a.y+a.height*.205,maxWidth:a.width*.28,lineHeight:34,maxLines:2}),e.font='500 26px "Noto Sans JP", sans-serif',n(e,t.intro||l.intro,{x:a.x+a.width*.11,y:a.y+a.height*.295,maxWidth:a.width*.28,lineHeight:34,maxLines:4}),e.font='500 26px "Noto Sans JP", sans-serif',n(e,t.body||l.body,{x:a.x+a.width*.58,y:a.y+a.height*.55,maxWidth:a.width*.2,lineHeight:34,maxLines:4}),e.font='500 24px "Noto Sans JP", sans-serif',n(e,t.date||l.date,{x:a.x+a.width*.58,y:a.y+a.height*.87,maxWidth:a.width*.14,lineHeight:30,maxLines:1});const S=t.editor||l.editor,E=a.width*.15,P=a.x+a.width*.88-Math.min(E,e.measureText(S).width);n(e,S,{x:P,y:a.y+a.height*.87,maxWidth:E,lineHeight:30,maxLines:1})}},gi={id:"page5",label:"Page 5",description:"Template 5",async render(e,t,i,o){const{addWrappedText:n,drawFileCover:u,drawSlotPlaceholder:m,defaults:l}=o,a={x:84,y:84,width:1072,height:1586};e.fillStyle="#191514",e.textBaseline="top";const p={x:a.x+a.width*.49,y:a.y+a.height*.12,width:a.width*.34,height:a.height*.42,radius:0},y={x:a.x+a.width*.12,y:a.y+a.height*.74,width:a.width*.25,height:a.height*.16,radius:0};i.primary.file?await u(e,i.primary.file,p,i.primary.position):m(e,p),i.secondary.file?await u(e,i.secondary.file,y,i.secondary.position):m(e,y),e.font='600 50px "Cormorant Garamond", "Times New Roman", serif',n(e,t.headline||l.headline,{x:a.x+a.width*.12,y:a.y+a.height*.12,maxWidth:a.width*.21,lineHeight:54,maxLines:3}),e.font='500 26px "Noto Sans JP", sans-serif',n(e,t.subhead||l.subhead,{x:a.x+a.width*.12,y:a.y+a.height*.265,maxWidth:a.width*.21,lineHeight:34,maxLines:3}),e.font='500 26px "Noto Sans JP", sans-serif',n(e,t.intro||l.intro,{x:a.x+a.width*.12,y:a.y+a.height*.42,maxWidth:a.width*.21,lineHeight:34,maxLines:5}),e.font='500 26px "Noto Sans JP", sans-serif',n(e,t.body||l.body,{x:a.x+a.width*.51,y:a.y+a.height*.69,maxWidth:a.width*.24,lineHeight:34,maxLines:4}),e.font='500 24px "Noto Sans JP", sans-serif',n(e,t.date||l.date,{x:a.x+a.width*.51,y:a.y+a.height*.89,maxWidth:a.width*.14,lineHeight:30,maxLines:1});const S=t.editor||l.editor,E=a.width*.15,P=a.x+a.width*.88-Math.min(E,e.measureText(S).width);n(e,S,{x:P,y:a.y+a.height*.89,maxWidth:E,lineHeight:30,maxLines:1})}},fi={id:"page6",label:"Page 6",description:"Template 6",async render(e,t,i,o){var k;const{addWrappedText:n,drawFileCover:u,drawSlotPlaceholder:m,defaults:l}=o,a={x:84,y:84,width:1072,height:1586};e.fillStyle="#191514",e.textBaseline="top";const p={x:a.x+a.width*.2,y:a.y+a.height*.3,width:a.width*.46,height:a.height*.36,radius:0},y={x:a.x+a.width*.12,y:a.y+a.height*.075,width:a.width*.2,height:a.height*.14,radius:0},S={x:a.x+a.width*.69,y:a.y+a.height*.8,width:a.width*.15,height:a.height*.1,radius:0};i.primary.file?await u(e,i.primary.file,p,i.primary.position):m(e,p),i.secondary.file?await u(e,i.secondary.file,y,i.secondary.position):m(e,y),(k=i.accent)!=null&&k.file?await u(e,i.accent.file,S,i.accent.position):m(e,S),e.font='600 48px "Cormorant Garamond", "Times New Roman", serif',n(e,t.headline||l.headline,{x:a.x+a.width*.5,y:a.y+a.height*.1,maxWidth:a.width*.2,lineHeight:52,maxLines:2}),e.font='500 26px "Noto Sans JP", sans-serif',n(e,t.subhead||l.subhead,{x:a.x+a.width*.5,y:a.y+a.height*.18,maxWidth:a.width*.2,lineHeight:34,maxLines:3}),e.font='500 26px "Noto Sans JP", sans-serif',n(e,t.intro||l.intro,{x:a.x+a.width*.12,y:a.y+a.height*.74,maxWidth:a.width*.22,lineHeight:34,maxLines:4}),e.font='500 26px "Noto Sans JP", sans-serif',n(e,t.body||l.body,{x:a.x+a.width*.44,y:a.y+a.height*.74,maxWidth:a.width*.14,lineHeight:34,maxLines:4}),e.font='500 24px "Noto Sans JP", sans-serif',n(e,t.date||l.date,{x:a.x+a.width*.12,y:a.y+a.height*.905,maxWidth:a.width*.16,lineHeight:30,maxLines:1});const E=t.editor||l.editor,P=a.width*.14,B=a.x+a.width*.88-Math.min(P,e.measureText(E).width);n(e,E,{x:B,y:a.y+a.height*.905,maxWidth:P,lineHeight:30,maxLines:1})}},yi={id:"page7",label:"Page 7",description:"Template 7",async render(e,t,i,o){var k;const{addWrappedText:n,drawFileCover:u,drawSlotPlaceholder:m,defaults:l}=o,a={x:84,y:84,width:1072,height:1586};e.fillStyle="#191514",e.textBaseline="top";const p={x:a.x+a.width*.12,y:a.y+a.height*.15,width:a.width*.3,height:a.height*.18,radius:0},y={x:a.x+a.width*.56,y:a.y+a.height*.48,width:a.width*.3,height:a.height*.18,radius:0},S={x:a.x+a.width*.12,y:a.y+a.height*.75,width:a.width*.3,height:a.height*.18,radius:0};i.primary.file?await u(e,i.primary.file,p,i.primary.position):m(e,p),i.secondary.file?await u(e,i.secondary.file,y,i.secondary.position):m(e,y),(k=i.accent)!=null&&k.file?await u(e,i.accent.file,S,i.accent.position):m(e,S),e.font='600 44px "Cormorant Garamond", "Times New Roman", serif',n(e,t.headline||l.headline,{x:a.x+a.width*.58,y:a.y+a.height*.16,maxWidth:a.width*.19,lineHeight:48,maxLines:2}),e.font='500 25px "Noto Sans JP", sans-serif',n(e,t.subhead||l.subhead,{x:a.x+a.width*.58,y:a.y+a.height*.245,maxWidth:a.width*.19,lineHeight:32,maxLines:3}),e.font='500 25px "Noto Sans JP", sans-serif',n(e,t.intro||l.intro,{x:a.x+a.width*.15,y:a.y+a.height*.41,maxWidth:a.width*.2,lineHeight:32,maxLines:4}),e.font='500 25px "Noto Sans JP", sans-serif',n(e,t.body||l.body,{x:a.x+a.width*.59,y:a.y+a.height*.77,maxWidth:a.width*.19,lineHeight:32,maxLines:4}),e.font='500 24px "Noto Sans JP", sans-serif',n(e,t.date||l.date,{x:a.x+a.width*.58,y:a.y+a.height*.91,maxWidth:a.width*.12,lineHeight:30,maxLines:1});const E=t.editor||l.editor,P=a.width*.14,B=a.x+a.width*.88-Math.min(P,e.measureText(E).width);n(e,E,{x:B,y:a.y+a.height*.91,maxWidth:P,lineHeight:30,maxLines:1})}},q={x:.06,y:.06,width:.88,height:.88},Oe=.015,ea={densityMode:"whitespace",recoveryMode:"restore"},St={width:.14,height:.12},Ne={width:.18,height:.08},bi={primary:{x:.08,y:.16,width:.4,height:.3},secondary:{x:.58,y:.12,width:.24,height:.2},accent:{x:.56,y:.58,width:.26,height:.18}},vi={headline:{x:.08,y:.07,width:.46,height:.1,fontSize:.056,lineHeight:1.08,align:"left",family:"serif",weight:600},subhead:{x:.08,y:.16,width:.48,height:.07,fontSize:.023,lineHeight:1.34,align:"left",family:"sans",weight:500},intro:{x:.08,y:.52,width:.28,height:.18,fontSize:.021,lineHeight:1.42,align:"left",family:"sans",weight:500},body:{x:.62,y:.42,width:.22,height:.24,fontSize:.021,lineHeight:1.42,align:"left",family:"sans",weight:500},date:{x:.08,y:.91,width:.22,height:.04,fontSize:.019,lineHeight:1.25,align:"left",family:"sans",weight:500},editor:{x:.66,y:.91,width:.2,height:.04,fontSize:.019,lineHeight:1.25,align:"right",family:"sans",weight:500}},xi=[{id:"image-1",x:.1,y:.14,width:.38,height:.34}];function Pe(e,t,i){return Math.min(i,Math.max(t,e))}function Ve(e){return Math.round(e/Oe)*Oe}function da(e,t,i){return typeof t=="string"&&t.trim()?t.trim():`${e}-${i+1}`}function It(e,t=""){return String(e??t).replace(/\r/g,"")}function ma(e,t){const i=Pe(Ve(Number.isFinite(e.width)?e.width:t.width),t.width,q.width),o=Pe(Ve(Number.isFinite(e.height)?e.height:t.height),t.height,q.height);return{x:Pe(Ve(Number.isFinite(e.x)?e.x:q.x),q.x,q.x+q.width-i),y:Pe(Ve(Number.isFinite(e.y)?e.y:q.y),q.y,q.y+q.height-o),width:i,height:o}}function bt(e={},t=0){return{id:da("image",e.id,t),...ma(e,St)}}function $t(e={},t=0){const i=typeof e.text=="string",o=e.kind==="title"||e.kind==="body"?e.kind:(Number(e.fontSize)||0)>=.04||e.family==="serif"?"title":"body";return{id:da("text",e.id,t),kind:o,text:It(e.text,"text"),isDefaultText:typeof e.isDefaultText=="boolean"?e.isDefaultText:!i,...ma(e,Ne),fontSize:Pe(Number.isFinite(e.fontSize)?e.fontSize:.028,.014,.09),lineHeight:Pe(Number.isFinite(e.lineHeight)?e.lineHeight:1.35,1,2.2),padding:Pe(Number.isFinite(e.padding)?e.padding:.012,.004,.05),align:e.align==="center"||e.align==="right"?e.align:"left",family:e.family==="serif"?"serif":"sans",weight:Pe(Number.isFinite(e.weight)?e.weight:e.family==="serif"?600:500,400,700)}}function wi(e={}){return Object.entries(vi).map(([t,i],o)=>$t({id:`text-${o+1}`,text:It(e[t],""),x:i.x,y:i.y,width:i.width,height:i.height,fontSize:i.fontSize,lineHeight:i.lineHeight,padding:i.family==="serif"?.01:.012,align:i.align,kind:i.family==="serif"&&i.fontSize>=.04?"title":"body",family:i.family,weight:i.weight},o)).filter(t=>t.text.trim())}function pa(e={}){return{densityMode:e.densityMode==="fill"?"fill":ea.densityMode,recoveryMode:e.recoveryMode==="keep"?"keep":ea.recoveryMode}}function kt(e={}){return Array.isArray(e.imageBoxes)&&e.imageBoxes.length?e.imageBoxes.map((t,i)=>bt(t,i)):e.imageBoxes&&typeof e.imageBoxes=="object"?Object.entries(bi).map(([t,i],o)=>{var u;const n=((u=e.imageBoxes)==null?void 0:u[t])||{};return bt({id:t,x:Number.isFinite(n.x)?n.x:i.x,y:Number.isFinite(n.y)?n.y:i.y,width:Number.isFinite(n.width)?n.width:i.width,height:Number.isFinite(n.height)?n.height:i.height},o)}):xi.map((t,i)=>bt(t,i))}function Tt(e={},t={}){if(Array.isArray(e.textBoxes)&&e.textBoxes.length)return e.textBoxes.map((n,u)=>$t(n,u));const i=!!(e.imageBoxes&&!Array.isArray(e.imageBoxes)&&typeof e.imageBoxes=="object"),o=wi(t);return i&&o.length?o:[$t({id:"text-1",text:It(t.headline,"text"),isDefaultText:!t.headline,x:.56,y:.18,width:.24,height:.14,kind:"title",fontSize:.046,lineHeight:1.12,padding:.01,family:"serif",weight:600},0)]}function _i(e={},t={}){return{options:pa(e),imageBoxes:kt(e),textBoxes:Tt(e,t)}}function vt(e){return{left:`${e.x*100}%`,top:`${e.y*100}%`,width:`${e.width*100}%`,height:`${e.height*100}%`}}function ta(e,t){return{x:e.x+e.width*t.x,y:e.y+e.height*t.y,width:e.width*t.width,height:e.height*t.height,radius:0}}function Le(e){return Ve(e)}const Si={id:"page8",label:"Page 8",description:"Custom free layout",async render(e,t,i,o){var y,S,E,P,B,k,Y,H,w,G,ue,de;const{addWrappedText:n,drawFileCover:u}=o,m={x:84,y:84,width:1072,height:1586},l=_i(t.customLayout||{},t),a=Array.isArray((y=t.customLayout)==null?void 0:y.pretextBoxes)?t.customLayout.pretextBoxes:null;e.fillStyle="#191514",e.textBaseline="top";const p=o.page8Files||{};if(((S=t.customLayout)==null?void 0:S.editorType)==="pretext"&&a){for(const L of a){const W={x:m.x+L.x/794*m.width,y:m.y+L.y/1123*m.height,width:L.width/794*m.width,height:L.height/1123*m.height,radius:0};if(L.kind==="image"){(E=L.data)!=null&&E.src&&await u(e,L.data.src,W,{cropX:Number(L.data.cropX)||0,cropY:Number(L.data.cropY)||0,zoom:Math.max(1,Number(L.data.zoom)||1)});continue}const F=Math.max(0,Number((P=L.data)==null?void 0:P.padding)||0),C=Math.max(12,Number((B=L.data)==null?void 0:B.lineHeight)||34);e.textAlign=((k=L.data)==null?void 0:k.align)||"left",e.fillStyle=((Y=L.data)==null?void 0:Y.color)||"#191514",e.font=`${Number((H=L.data)==null?void 0:H.fontWeight)||400} ${Math.max(12,Number((w=L.data)==null?void 0:w.fontSize)||22)}px ${((G=L.data)==null?void 0:G.fontFamily)||'"Noto Sans JP", sans-serif'}`;const K=e.textAlign==="right"?W.x+W.width-F:e.textAlign==="center"?W.x+W.width/2:W.x+F;n(e,((ue=L.data)==null?void 0:ue.text)||"",{x:K,y:W.y+F,maxWidth:Math.max(24,W.width-F*2),lineHeight:C,maxLines:Math.max(1,Math.floor(Math.max(C,W.height-F*2)/C))})}return}for(const O of l.imageBoxes){const T=ta(m,O);(de=p[O.id])!=null&&de.file&&await u(e,p[O.id].file,T,p[O.id].position)}l.textBoxes.forEach(O=>{const T=ta(m,O),L=Math.max(0,m.width*(O.padding||0)),W=O.family==="serif"?'"Cormorant Garamond", "Times New Roman", serif':'"Noto Sans JP", sans-serif';e.textAlign=O.align,e.font=`${O.weight} ${Math.round(m.width*O.fontSize)}px ${W}`;const F=O.align==="right"?T.x+T.width-L:O.align==="center"?T.x+T.width/2:T.x+L,C=Math.max(24,T.width-L*2),K=m.width*O.fontSize*O.lineHeight,_e=Math.max(K,T.height-L*2);n(e,O.text||"",{x:F,y:T.y+L,maxWidth:C,lineHeight:K,maxLines:Math.max(1,Math.floor(_e/Math.max(12,K)))})})}},ua=[ca,pi,ui,hi,gi,fi,yi,Si],xe=ca.id,aa=new Map(ua.map(e=>[e.id,e]));function $i(e){return aa.get(e)||aa.get(xe)}const ki=[{value:"#f8f4ee",label:"Ivory"},{value:"#f4e5de",label:"Blush"},{value:"#ece4d8",label:"Sand"},{value:"#e5ece7",label:"Sage"}];function Pt(e){return`
    <button class="button button--ghost page-back page-back--icon" type="button" ${e} aria-label="Back">
      ${N("returnLeft")}
    </button>
  `}function Ti(){return`
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
  `}function Mi(){return`
    <button
      class="button button--ghost page-back page-back--icon compose-delete-button"
      type="button"
      data-pretext-delete
      aria-label="Delete selected element"
    >
      ${N("trash")}
    </button>
  `}function Li(e){return`
    <button class="button button--primary compose-header-tags-button" type="button" data-compose-stage-nav="tags">
      ${e?"Update Tags":"タグへ進む"}
    </button>
  `}function Ii(e,t,i=[]){return`
    <section class="compose-group compose-group--tags">
      <div class="compose-group__head">
        <h3>${li[e]}</h3>
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
  `}function ha(e=xe){return`
    <div class="template-carousel">
      <button class="template-carousel__nav" type="button" data-template-carousel-nav="prev" aria-label="Previous template">&larr;</button>
      <div class="template-carousel__viewport" data-template-carousel>
        <div class="template-thumb-track">
          ${ua.map(t=>`
            <label class="template-thumb ${e===t.id?"is-active":""}">
              <input type="radio" name="templateId" value="${t.id}" ${e===t.id?"checked":""} />
              <span class="template-thumb__preview template-option__preview template-option__preview--${t.id}" aria-hidden="true"></span>
            </label>
          `).join("")}
        </div>
      </div>
      <button class="template-carousel__nav" type="button" data-template-carousel-nav="next" aria-label="Next template">&rarr;</button>
    </div>
  `}function ga(e){return`
    <div class="color-picker-inline">
      <div class="color-chip-track color-chip-track--inline" data-color-carousel>
        ${ki.map(t=>`
          <label class="color-chip color-chip--inline ${e===t.value?"is-active":""}" title="${t.label}">
            <input type="radio" name="backgroundColor" value="${t.value}" ${e===t.value?"checked":""} />
            <span class="color-chip__swatch" style="--swatch:${t.value}"></span>
            <span class="color-chip__label">${t.label}</span>
          </label>
        `).join("")}
      </div>
    </div>
  `}function xt({id:e,slotClass:t}){return`
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
  `}function wt(e){return`
    <div class="compose-slot ${e}">
      <div class="compose-slot__surface">
        <div class="compose-slot__placeholder">
          <span class="compose-slot__plus">${N("compose")}</span>
        </div>
      </div>
    </div>
  `}function fa(e,t,i,o={}){const{editable:n=!1,interactiveSlots:u=!1}=o,m=t==="page8",l=n?"compose-sheet":"compose-sheet compose-sheet--locked",a=m?`${l} compose-sheet--custom`:l,p=n?"true":"false";return m?`
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
        ${u?xt({id:"imageInputSecondary",slotClass:"compose-slot--secondary"}):wt("compose-slot--secondary")}
        ${u?xt({id:"imageInputAccent",slotClass:"compose-slot--accent"}):wt("compose-slot--accent")}
        ${u?xt({id:"imageInputPrimary",slotClass:"compose-slot--primary"}):wt("compose-slot--primary")}
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
  `}function Pi(e,t){return`
    <section class="compose-group compose-group--tags-stage">
      <div class="compose-group__head">
        <h3>Tags</h3>
      </div>
      ${Object.entries(la).map(([i,o])=>Ii(i,o,e)).join("")}
      <section class="compose-group compose-group--tags compose-group--tags-nested">
        <div class="compose-group__head">
          <h3>Free Tags</h3>
        </div>
        <label class="field">
          <input class="field__input" type="text" name="freeTags" placeholder="cafe, spring, film" value="${t}" />
        </label>
      </section>
    </section>
  `}function Ei({values:e,selectedId:t,selectedBackground:i,headerMini:o,headerTitle:n}){return`
    <section class="page page--compose page--compose--select" data-compose-stage="select">
      <header class="page-header page-header--with-back page-header--compose">
        ${Pt("data-close-compose")}
        <div>
          <p class="page-header__mini">${o}</p>
          <h2 class="page-header__title">${n}</h2>
        </div>
      </header>

      <section class="compose-select-shell">
        <section class="compose-preview compose-preview--select">
          ${fa(e,t,i,{editable:!1,interactiveSlots:!1})}
        </section>

        <section class="compose-group compose-group--template compose-group--template-select">
          <div class="compose-group__head compose-group__head--template compose-group__head--template-select">
            <h3>Template</h3>
            ${ga(i)}
            <button class="button button--primary compose-confirm-button" type="button" data-compose-stage-nav="edit">編集する</button>
          </div>
          ${ha(t)}
        </section>
      </section>
    </section>
  `}function Ci({values:e,selectedId:t,selectedBackground:i,isEditing:o,headerMini:n,headerTitle:u}){return`
    <section class="page page--compose page--compose--edit ${t==="page8"?"page--compose--edit--page8":""}" data-compose-stage="edit">
      <header class="page-header page-header--with-back page-header--compose">
        <div class="page-header__actions page-header__actions--compose">
          ${Pt('data-compose-stage-nav="select"')}
          ${t==="page8"?Ti():""}
          ${t==="page8"?Mi():""}
          ${t==="page8"?Li(o):""}
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
                <div class="compose-pretext-host compose-pretext-host--page8" data-compose-pretext-host></div>
              `:fa(e,t,i,{editable:!0,interactiveSlots:!0})}
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
  `}function Ai({selectedId:e,selectedBackground:t,selectedFixedTags:i,freeTagsValue:o,submitLabel:n,isEditing:u,headerMini:m,headerTitle:l}){return`
    <section class="page page--compose page--compose--tags" data-compose-stage="tags">
      <header class="page-header page-header--with-back page-header--compose">
        ${Pt('data-compose-stage-nav="edit"')}
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
              ${ga(t)}
            </div>
            ${ha(e)}
          </section>
          ${Pi(i,o)}
        </section>
        <div class="compose-flow-actions">
          <button class="button button--ghost compose-stage-back" type="button" data-compose-stage-nav="edit">Edit</button>
          <button class="button button--primary compose-submit-button" type="submit">${n}</button>
        </div>
      </form>
    </section>
  `}function Bi(e=xe){const t=typeof e=="object"?e:{selectedTemplateId:e},i=t.draft||{},o={headline:i.headline||"text",subhead:i.subhead||"text",intro:i.intro||"text",body:i.body||"text",date:i.date||"text",editor:i.editor||"編集者：haru"},n=t.selectedTemplateId||i.templateId||xe,u=t.selectedBackground||i.backgroundColor||"#f8f4ee",m=Array.isArray(i.fixedTags)?i.fixedTags:[],l=Array.isArray(i.freeTags)?i.freeTags.join(", "):i.freeTags||"",a=t.isEditing?"Update Post":"Post This Layout",p=t.isEditing?"post editor":"template editor",y=t.isEditing?"Edit Post":"Compose",S=t.stage||"select";return S==="select"?Ei({values:o,selectedId:n,selectedBackground:u,headerMini:p,headerTitle:y}):S==="tags"?Ai({selectedId:n,selectedBackground:u,selectedFixedTags:m,freeTagsValue:l,submitLabel:a,isEditing:!!t.isEditing,headerMini:p,headerTitle:y}):Ci({values:o,selectedId:n,selectedBackground:u,isEditing:!!t.isEditing,headerMini:p,headerTitle:y})}function Ni(e){return e.length?e.map(t=>`
    <label class="issue-post-option">
      <input type="checkbox" name="issuePostIds" value="${t.id}" />
      <img src="${t.imageData}" alt="${t.authorName}の投稿画像" />
      <div class="issue-post-option__meta">
        <strong>${t.authorName}</strong>
        <span>${oa(t.createdAt)}</span>
      </div>
    </label>
  `).join(""):`
      <section class="empty-panel">
        <p class="empty-panel__title">まだまとめる投稿がありません</p>
        <p class="empty-panel__copy">先に投稿を作ると、ここで選んで一冊の下書きにできます。</p>
      </section>
    `}function Di(e,t){return e.length?e.map(i=>{const o=t.filter(n=>i.postIds.includes(n.id));return`
      <article class="issue-card issue-card--${i.tone}">
        <p class="issue-card__eyebrow">memories issue</p>
        <h3 class="issue-card__title">${i.title}</h3>
        <p class="issue-card__subtitle">${i.subtitle||"sub title free"}</p>
        <div class="issue-card__count">${o.length} posts selected</div>
        <div class="issue-card__thumbs">
          ${o.slice(0,3).map(n=>`<img src="${n.imageData}" alt="${n.authorName}の投稿画像" />`).join("")}
        </div>
      </article>
    `}).join(""):'<p class="empty-copy">まだ雑誌の下書きはありません。</p>'}function Ri(e){return`
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
            ${Ni(e.posts||[])}
          </div>
        </section>

        <button class="button button--primary button--full" type="submit">下書きを保存</button>
      </form>

      <section class="section-block">
        <div class="section-head">
          <h3>保存済みの雑誌下書き</h3>
        </div>
        <div class="issue-list">
          ${Di(e.issues||[],e.posts||[])}
        </div>
      </section>
    </section>
  `}function ya(e){return[...new Set(e.map(t=>t.authorName))]}function ba(e){return`@${String(e||"user").trim().replace(/\s+/g,"_").toLowerCase()}`}function ct(e,t){return e.length?`
    <div class="feed-grid feed-grid--single">
      ${e.map(i=>sa(i,{mode:"minimal"})).join("")}
    </div>
  `:`<p class="empty-copy">${t}</p>`}function Hi(e,t){return e.length?`
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
  `:'<p class="empty-copy">Saved magazine issues will appear here.</p>'}function qi(e,t,i){const o=e.posts.filter(H=>H.authorName===e.profile.name),n=e.posts.filter(H=>H.liked),u=e.posts.filter(H=>H.saved),m=e.issues||[],l=e.followingAuthors,a=i.filter(H=>H!==e.profile.name),p=t.profileSection||"identity",y=t.profileLibraryTab||"liked",S=!!t.profileAvatarCropOpen,E=ba(e.profile.name),B={identity:{label:"Name / ID",value:`<span class="profile-node__avatar">${Xe(e.profile.avatarData,(e.profile.name||"Y").slice(0,1).toUpperCase(),`${e.profile.name} avatar`)}</span>`,angle:0,centerLabel:""},library:{label:"Likes / Saved",value:`<span class="profile-node__icon-pair">${N("heart")}${N("save")}</span>`,angle:60},edit:{label:"Edit",value:"profile",angle:120},posts:{label:"Posts",value:String(o.length),angle:180},magazine:{label:"Magazine",value:String(m.length),angle:240},network:{label:"Follow / Follower",value:`${l.length} / ${a.length}`,angle:300}},k=B[p]||B.identity;function Y(){switch(p){case"identity":return`
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
              ${y==="liked"?ct(n,"Posts you liked will appear here."):ct(u,"Posts you saved will appear here.")}
            </section>
          </section>
        `;case"magazine":return`
          <section class="profile-section-panel">
            <div class="section-head">
              <h3>Magazine</h3>
            </div>
            ${Hi(m,e.posts||[])}
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
            ${ct(o,"Your posts will appear here after you publish one.")}
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
  `}function Wi(e,t){var u;const i=ya(e.posts||[]),o=e.posts.filter(m=>m.authorName===t),n=e.followingAuthors.includes(t);return`
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
              <p class="profile-card__bio">${ba(t)}</p>
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
        ${ct(o,"This author has no posts yet.")}
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
  `}function zi(e,t={}){const i=ya(e.posts||[]),o=t.profileAuthor||null;return!o||o===e.profile.name?qi(e,t,i):Wi(e,o)}function Oi(e,t={}){var u;if(!e)return`
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
            <p class="post-card__time">${na(e.createdAt)}</p>
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
  `}async function Fi(e,t={}){const{maxWidth:i=900,quality:o=.82}=t,n=await createImageBitmap(e),u=n.width/n.height,m=Math.min(n.width,i),l=Math.round(m/u),a=document.createElement("canvas");return a.width=m,a.height=l,a.getContext("2d").drawImage(n,0,0,m,l),a.toDataURL("image/webp",o)}async function Xi(e,t,i={}){var k;const{size:o=320}=i,n=await createImageBitmap(e),u=document.createElement("canvas");u.width=o,u.height=o;const m=u.getContext("2d");if(!m)return"";const l=Math.max(1,Number(t==null?void 0:t.zoom)||1),a=Math.min(1,Math.max(0,Number(t==null?void 0:t.x)||.5)),p=Math.min(1,Math.max(0,Number(t==null?void 0:t.y)||.5)),y=Math.max(o/n.width,o/n.height);n.width*y*l,n.height*y*l;const S=o/(y*l),E=o/(y*l),P=Math.max(0,(n.width-S)*a),B=Math.max(0,(n.height-E)*p);return m.clearRect(0,0,o,o),m.save(),m.beginPath(),m.arc(o/2,o/2,o/2,0,Math.PI*2),m.closePath(),m.clip(),m.drawImage(n,P,B,S,E,0,0,o,o),m.restore(),(k=n.close)==null||k.call(n),u.toDataURL("image/png")}const c={screen:"opening",timelineOverlay:null,timelineTab:"recommended",timelinePan:{x:-360,y:-220},searchQuery:"",searchTags:[],homeTheme:"dark",homeCoreState:"default",homeCoreTapTimestamps:[],previewPostId:null,commentPostId:null,profileEditOpen:!1,profileAuthor:null,profileSection:null,profileLibraryTab:"liked",profileExpanded:!0,profileOrbitRotation:0,profileAvatarCropOpen:!1,composeStage:"select",composeTemplateId:xe,composeBackgroundColor:"#f8f4ee",composeEditingPostId:null,composeWorkingDraft:null,openingTapGuardUntil:0,postReturnScreen:"timeline",postReturnProfileAuthor:null,profileReturnState:null,composeReturnState:null},_t=["dark","light","system"],Ie={headline:"text",subhead:"text",intro:"text",body:"text",date:"text",editor:"編集者：haru"};function ke(e={}){var t,i,o;return{file:typeof e.file=="string"?e.file:null,position:{x:Number((t=e.position)==null?void 0:t.x)||.5,y:Number((i=e.position)==null?void 0:i.y)||.5,zoom:Math.max(1,Number((o=e.position)==null?void 0:o.zoom)||1)},imageSize:e.imageSize&&Number.isFinite(e.imageSize.width)&&Number.isFinite(e.imageSize.height)?{width:e.imageSize.width,height:e.imageSize.height}:null}}function va(e={}){var t,i,o;return{templateId:e.templateId||xe,backgroundColor:e.backgroundColor||"#f8f4ee",headline:e.headline||Ie.headline,subhead:e.subhead||Ie.subhead,intro:e.intro||Ie.intro,body:e.body||Ie.body,date:e.date||Ie.date,editor:e.editor||Ie.editor,fixedTags:Array.isArray(e.fixedTags)?[...e.fixedTags]:[],freeTags:Array.isArray(e.freeTags)?[...e.freeTags]:String(e.freeTags||"").split(",").map(n=>n.trim()).filter(Boolean),customLayout:e.customLayout?JSON.parse(JSON.stringify(e.customLayout)):null,standardFiles:{primary:ke((t=e.standardFiles)==null?void 0:t.primary),secondary:ke((i=e.standardFiles)==null?void 0:i.secondary),accent:ke((o=e.standardFiles)==null?void 0:o.accent)}}}let Qe=null,De=0,dt=null,Z=null,ze=null;const z={file:null,previewUrl:"",imageSize:null,crop:{x:.5,y:.5,zoom:1}};function xa(){dt&&(window.clearTimeout(dt),dt=null)}function wa(){xa(),c.homeCoreState="default",c.homeCoreTapTimestamps=[]}function Ke(){z.previewUrl&&URL.revokeObjectURL(z.previewUrl),z.file=null,z.previewUrl="",z.imageSize=null,z.crop={x:.5,y:.5,zoom:1},c.profileAvatarCropOpen=!1}function Yi(){Z!=null&&Z.unmount&&Z.unmount(),Z=null}function Ui(e=c.homeTheme){return e==="system"?typeof window<"u"&&typeof window.matchMedia=="function"&&window.matchMedia("(prefers-color-scheme: dark)").matches?"dark":"light":e==="dark"?"dark":"light"}function ji(){var t;const e=et();switch(c.screen){case"home":return Kt(e,c);case"timeline":return ri(e,c);case"search":return mi(e,c);case"compose":return Bi({stage:c.composeStage,selectedTemplateId:c.composeTemplateId,selectedBackground:c.composeBackgroundColor,draft:c.composeWorkingDraft||((t=Fe(c.composeEditingPostId))==null?void 0:t.composeData)||null,isEditing:!!c.composeEditingPostId});case"magazine":return Ri(e);case"profile":return zi(e,c);case"post":return Oi(Fe(c.previewPostId),{canDelete:_a(Fe(c.previewPostId))});default:return Kt(e,c)}}function Fe(e){return et().posts.find(t=>t.id===e)}function _a(e){return e?e.authorName===et().profile.name:!1}function Ji(){if(!Qe)return;const e=["app-shell"],t=["screen-area"],i=Ui(c.homeTheme);e.push(`app-shell--theme-${i}`),e.push(`app-shell--theme-mode-${c.homeTheme}`),c.screen==="home"?(e.push("app-shell--home"),t.push("screen-area--home")):c.screen==="timeline"?(e.push("app-shell--timeline"),t.push("screen-area--timeline")):c.screen==="compose"?(e.push("app-shell--compose"),t.push("screen-area--compose")):c.screen==="search"&&t.push("screen-area--search"),Qe.innerHTML=`
    <div class="${e.join(" ")}">
      <main class="${t.join(" ")}" id="screenArea"></main>
      ${Ea()}
      <div id="modalRoot"></div>
    </div>
  `}function Ze(){const e=document.getElementById("modalRoot");if(!e)return;const t=c.commentPostId?Fe(c.commentPostId):null;e.innerHTML=`
    ${Ba(t)}
  `,go()}function se(){const e=document.getElementById("screenArea");e&&(e.innerHTML=ji(),fo(),Ze())}function ne(){if(Qe){if(Yi(),c.screen==="opening"){Qe.innerHTML=Ga(),Ki();return}Ji(),se(),to()}}function Mt(){return{screen:c.screen,previewPostId:c.previewPostId,profileAuthor:c.profileAuthor,postReturnScreen:c.postReturnScreen,postReturnProfileAuthor:c.postReturnProfileAuthor}}function Sa(e,t="home"){if(!e){mt(t);return}c.screen=e.screen||t,c.previewPostId=e.previewPostId||null,c.commentPostId=null,c.profileEditOpen=!1,c.profileAuthor=c.screen==="profile"&&e.profileAuthor||null,c.postReturnScreen=e.postReturnScreen||"home",c.postReturnProfileAuthor=e.postReturnProfileAuthor||null,ne()}function mt(e){e!=="home"&&wa(),e==="compose"&&c.screen!=="compose"&&(c.composeReturnState=Mt()),e==="profile"&&c.screen!=="profile"&&(c.profileReturnState=Mt()),e!=="profile"&&(Ke(),c.profileReturnState=null),e!=="home"&&(c.timelineOverlay=null),e!=="compose"&&(c.composeEditingPostId=null,c.composeStage="select",c.composeBackgroundColor="#f8f4ee",c.composeWorkingDraft=null,c.composeReturnState=null),c.screen=e,c.previewPostId=null,c.commentPostId=null,e==="compose"&&(c.composeStage="select",c.composeBackgroundColor="#f8f4ee",c.composeTemplateId=xe,c.composeWorkingDraft=va({templateId:xe,backgroundColor:"#f8f4ee"})),e==="profile"&&(Ke(),c.profileAuthor=null,c.profileSection="identity",c.profileLibraryTab="liked",c.profileExpanded=!0,c.profileOrbitRotation=270),e!=="profile"&&(c.profileEditOpen=!1,c.profileAuthor=null),ne()}function $a(){c.previewPostId=null,c.commentPostId=null,c.openingTapGuardUntil=Date.now()+700,c.postReturnScreen="home",c.postReturnProfileAuthor=null,mt("home")}function Gi(e){Ke(),c.profileReturnState=Mt(),c.screen="profile",c.previewPostId=null,c.commentPostId=null,c.profileEditOpen=!1,c.profileAuthor=e||null,c.profileSection=e?null:"identity",c.profileLibraryTab="liked",c.profileExpanded=!0,c.profileOrbitRotation=e?0:270,ne()}function Vi(){Ke();const e=c.profileReturnState;c.profileReturnState=null,Sa(e,"home")}function Zi(e){c.postReturnScreen=c.screen,c.postReturnProfileAuthor=c.profileAuthor,c.screen="post",c.previewPostId=e,c.commentPostId=null,ne()}function Qi(){const e=c.composeReturnState;c.composeReturnState=null,c.composeWorkingDraft=null,Sa(e,"home")}function ka(){c.screen=c.postReturnScreen||"timeline",c.commentPostId=null,c.profileEditOpen=!1,c.profileAuthor=c.screen==="profile"?c.postReturnProfileAuthor:null,ne()}async function Ki(){var u,m,l;const e=document.getElementById("openingCanvas"),t=document.querySelector(".opening-screen");if(!e||!t)return;const i=++De,o=a=>{a.preventDefault(),a.stopPropagation(),i===De&&(De+=1,$a())};t.addEventListener("pointerdown",o,{once:!0});try{(u=document.fonts)!=null&&u.ready?await Promise.race([document.fonts.ready,new Promise(a=>window.setTimeout(a,1200))]):await new Promise(a=>window.setTimeout(a,180))}catch{}if(i!==De)return;const n=((l=(m=window.matchMedia)==null?void 0:m.call(window,"(prefers-reduced-motion: reduce)"))==null?void 0:l.matches)??!1;eo(e,i,n)}function eo(e,t,i){const o=e.getBoundingClientRect(),n=window.devicePixelRatio||1,u=Math.max(1,Math.round(o.width*n)),m=Math.max(1,Math.round(o.height*n)),l=e.getContext("2d");if(!l)return;e.width=u,e.height=m;const a="#ffffff",p='"Zen Old Mincho", "Cormorant Garamond", "Times New Roman", serif',y="ABCDEFGHIJKLMNOPQRSTUVWXYZ",S=Math.min(u*.255,m*.5,138*n),E=`700 ${S}px ${p}`,P=i?1300:3e3,B=i?420:760,k=i?320:620,Y=i?720:2100,H=i?1800:5200,w=P+B+k+Y+H;function G(I,A,U){return Math.min(U,Math.max(A,I))}if(t!==De)return;function ue(I){return 1-(1-I)**3}function de(I){return I<.5?4*I*I*I:1-(-2*I+2)**3/2}function O(I,A,U){return I+(A-I)*U}function T(I,A,U){return G((I-A)/U,0,1)}function L(I,A,U,D,te=1){I.save(),I.globalAlpha=te,I.font=E,I.textAlign="left",I.textBaseline="middle",I.lineJoin="round",I.lineCap="round",I.lineWidth=Math.max(1.4*n,S*.045),I.strokeStyle="rgba(255, 255, 255, 0.22)",I.strokeText(A,U,D),I.shadowColor="rgba(255, 255, 255, 0.26)",I.shadowBlur=S*.085,I.shadowOffsetY=S*.014,I.fillStyle=a,I.fillText(A,U,D),I.restore()}function W(I=1,A=0){const U=m*.5,D=Math.hypot(u,m),te=S*.42;l.save(),l.lineWidth=Math.max(1*n,S*.008);for(let J=0;J<3;J+=1){const re=G(A*.56-J*.18,0,1);re<=0||re>=1||(l.globalAlpha=(1-re)**1.4*.12*I,l.strokeStyle=a,l.beginPath(),l.arc(u/2,U,te+re*(D-te),0,Math.PI*2),l.stroke())}l.restore()}const F=document.createElement("canvas");F.width=u,F.height=m;const C=F.getContext("2d");if(!C)return;const K=["L","A","N","I"],_e=S*.01,fe=[-S*.03,-S*.015,-S*.015];C.font=E;const Re=K.map(I=>C.measureText(I).width),tt=Re.reduce((I,A)=>I+A,0)+_e*(K.length-1)+fe.reduce((I,A)=>I+A,0),ut=u/2-tt/2,Ye=m*.5;C.fillStyle=a,C.font=E,C.textAlign="left",C.textBaseline="middle";let at=ut;const Ee=K.map((I,A)=>{const U=Re[A],D=at;at+=U+_e+(fe[A]||0);const te=A<2;return{glyph:I,targetX:D,targetY:Ye,startX:te?-U-Math.random()*u*.16-A*S*.18:u+Math.random()*u*.16+(K.length-A)*S*.18,startY:Ye+(Math.random()-.5)*S*.42,driftX:(Math.random()-.5)*S*.12,driftY:(Math.random()-.5)*S*.08,enterArc:(Math.random()-.5)*S*.32,delay:A*.055,alpha:.72+Math.random()*.18,width:U}}),He=[],it=i?Math.max(28,Math.round(u/20)):Math.max(120,Math.round(u/5.5)),ot=tt*.52+S*.16,nt=S*.56;for(let I=0;I<it;I+=1){const A=I%7,U=.86+A*.28+Math.random()*.14,D=Math.random()<.5?1:-1,te=A>=4?1.35:1;He.push({glyph:y[Math.floor(Math.random()*y.length)],size:Math.max(u,m)*.024+Math.random()*(Math.max(u,m)*.034),angularSpeed:(i?22e-5:4e-4)*(.82+Math.random()*.72)*D,radiusX:Math.min(u*.64,ot*U*te),radiusY:Math.min(m*.42,nt*(.86+A*.2+Math.random()*.14)*te),wobble:S*(.03+Math.random()*.05),wobbleSpeed:.0012+Math.random()*.0016,alpha:i?.16+Math.random()*.1:.24+Math.random()*.18,seed:Math.random()*Math.PI*2})}const Te=performance.now();function Ue(I,A,U="back"){He.forEach(D=>{const te=I*D.angularSpeed+D.seed,J=Math.sin(te),re=J>0;if(U==="front"&&!re||U==="back"&&re)return;const be=Math.sin(I*D.wobbleSpeed+D.seed*1.4)*D.wobble,ie=Math.cos(I*D.wobbleSpeed*.82+D.seed*.9)*D.wobble*.72,Ce=u/2+Math.cos(te)*D.radiusX+be,Se=Ye+J*D.radiusY+ie,oe=re?1+J*.22:.74+(J+1)*.08,Ae=D.alpha*A*(re?.72+J*.42:.18);Ae<=.015||(l.save(),l.globalAlpha=Ae,l.fillStyle=a,l.font=`500 ${D.size*oe}px ${p}`,l.textAlign="center",l.textBaseline="middle",l.fillText(D.glyph,Ce,Se),l.restore())})}function je(I){if(t!==De)return;const A=I-Te,U=ue(T(A,0,P)),D=de(T(A,P*.58,B)),te=de(T(A,P+B,k)),J=T(A,P+B*.3,k),re=de(T(A,P+B+k+Y*.35,H)),be=Math.max(0,1-re**2.1);if(l.clearRect(0,0,u,m),l.textAlign="center",l.textBaseline="middle",l.fillStyle=a,Ue(A,Math.max(0,1-J),"back"),Ee.forEach((ie,Ce)=>{const Se=G((U-ie.delay)/(1-ie.delay),0,1);if(Se<=.001)return;const oe=ue(Se),Ae=(1-oe)*ie.enterArc,V=Math.sin(A*.0016+Ce*.9)*S*.005*D,Je=Math.cos(A*.0012+Ce*1.1)*S*.004*D,qe=O(ie.startX,ie.targetX,oe)+ie.driftX*(1-oe)+V,ye=O(ie.startY,ie.targetY,oe)+Math.sin(oe*Math.PI+Ce*.35)*Ae+ie.driftY*(1-oe)+Je,Ge=Math.min(.98,.22+oe*ie.alpha+D*.18+te*.08)*be;Ge<=.02||(l.save(),L(l,ie.glyph,qe,ye,Ge),l.restore())}),re>.001&&W(be,re),Ue(A,Math.max(0,1-J),"front"),A<w){requestAnimationFrame(je);return}t===De&&$a()}requestAnimationFrame(je)}function to(){const e=(i,o,n)=>Math.min(n,Math.max(o,i));[{element:document.querySelector('[data-side-wheel="main"]'),getItems:()=>Array.from(document.querySelectorAll('[data-side-wheel="main"] [data-side-nav-screen]')),getActiveKey:()=>["timeline","search","compose","profile"].includes(c.screen)?c.screen:c.postReturnScreen||"timeline",applySelection:i=>{if(c.screen===i){ne();return}mt(i)}},{element:document.querySelector('[data-side-wheel="timeline"]'),getItems:()=>Array.from(document.querySelectorAll('[data-side-wheel="timeline"] [data-side-nav-tab]')),getActiveKey:()=>c.timelineTab||"recommended",applySelection:i=>{c.timelineTab=i,ne()}},{element:document.querySelector('[data-side-wheel="profile"]'),getItems:()=>Array.from(document.querySelectorAll('[data-side-wheel="profile"] [data-side-nav-profile-section]')),getActiveKey:()=>c.profileSection||"identity",applySelection:i=>{c.profileSection=i,c.profileSection==="library"&&(c.profileLibraryTab=c.profileLibraryTab||"liked"),ne()}}].filter(i=>i.element).forEach(i=>{const{element:o,getItems:n,applySelection:u,getActiveKey:m}=i,l=n();if(!l.length)return;const a=l.map((T,L)=>({button:T,key:T.dataset.sideNavScreen||T.dataset.sideNavTab||T.dataset.sideNavProfileSection,index:L})),p=Math.max(0,a.findIndex(T=>T.key===m()));let y=!1,S=p,E=0,P=0,B=0,k=null;const Y=T=>{var K;const L=(K=a[S])==null?void 0:K.button.getBoundingClientRect(),W=((L==null?void 0:L.height)||0)/2,F=W,C=window.innerHeight-W;return C<=F?0:e(T,F-window.innerHeight/2,C-window.innerHeight/2)},H=(T,L)=>{const W=o.classList.contains("side-wheel--left")?76:24,F=a.length<=2?88:76;o.style.setProperty("--wheel-offset-y",`${E}px`),o.classList.toggle("is-dragging",!!(k!=null&&k.moved)),a.forEach(C=>{const K=(C.index-T)*F,_e=L||C.index===T?1:0,fe=L?C.index===T?1:.9:1,Re=!L&&C.index===T?P:0;C.button.style.setProperty("--slot-x",`${W}%`),C.button.style.setProperty("--slot-y",`${K}px`),C.button.style.setProperty("--slot-scale",String(fe)),C.button.style.setProperty("--slot-opacity",String(_e)),C.button.style.setProperty("--slot-depth",String(Math.abs(C.index-T))),C.button.style.setProperty("--drag-x",`${Re}px`),C.button.style.setProperty("--drag-y","0px"),C.button.classList.toggle("is-active",C.index===T),C.button.classList.toggle("is-dragging",!!(k!=null&&k.moved)&&C.index===T)})},w=T=>{var C;if(!k||(T==null?void 0:T.pointerId)!=null&&k.pointerId!==T.pointerId)return;const{button:L,pointerId:W,moved:F}=k;(C=L.hasPointerCapture)!=null&&C.call(L,W)&&L.releasePointerCapture(W),k=null,F&&(B=Date.now()+220),H(S,y)},G=T=>{if(!k||k.pointerId!==T.pointerId)return;const L=T.clientX-k.startX,W=T.clientY-k.startY;if(!(!k.moved&&Math.hypot(L,W)<8)){if(k.moved=!0,E=Y(k.startWheelOffsetY+W),k.mode==="collapsed"){const F=k.halfWidth,C=window.innerWidth-k.halfWidth;P=e(k.startCenterX+L,F,C)-k.anchorCenterX}else P=0;H(S,y)}};H(p,!1);const ue=()=>{y=!0,o.classList.add("is-engaged"),P=0,H(S,!0)},de=()=>{y=!1,o.classList.remove("is-engaged"),H(S,!1)},O=(T=S)=>{S=T;const L=a[S];if(!L){de();return}u(L.key)};l.forEach(T=>{T.addEventListener("pointerdown",L=>{if(Number(T.dataset.sideIndex||0)!==S)return;const F=T.getBoundingClientRect();k={pointerId:L.pointerId,button:T,mode:y?"engaged":"collapsed",startX:L.clientX,startY:L.clientY,startCenterX:F.left+F.width/2,anchorCenterX:F.left+F.width/2-P,halfWidth:F.width/2,startWheelOffsetY:E,moved:!1},T.setPointerCapture(L.pointerId)}),T.addEventListener("pointermove",G),T.addEventListener("pointerup",w),T.addEventListener("pointercancel",w),T.addEventListener("lostpointercapture",w),T.addEventListener("click",L=>{if(Date.now()<B){L.preventDefault(),L.stopPropagation();return}L.preventDefault();const W=Number(T.dataset.sideIndex||0);if(!y){if(W!==S)return;ue();return}if(W===S){de();return}O(W)})})})}function pt(e=document){e.querySelectorAll("[data-toggle-tags]").forEach(t=>{t.addEventListener("click",()=>{const i=document.querySelector(`[data-tags-panel="${t.dataset.toggleTags}"]`);i&&(i.hidden=!i.hidden,t.classList.toggle("is-active",!i.hidden))})}),e.querySelectorAll("[data-like]").forEach(t=>{t.addEventListener("click",()=>{Oa(t.dataset.like),se()})}),e.querySelectorAll("[data-save]").forEach(t=>{t.addEventListener("click",()=>{Fa(t.dataset.save),se()})}),e.querySelectorAll("[data-comment]").forEach(t=>{t.addEventListener("click",()=>{c.commentPostId=t.dataset.comment,Ze()})}),e.querySelectorAll("[data-open-preview]").forEach(t=>{t.addEventListener("click",i=>{if(Date.now()<c.openingTapGuardUntil){i.preventDefault(),i.stopPropagation();return}const o=t.dataset.openPreview;Ya(o),Zi(o)})}),e.querySelectorAll("[data-open-author]").forEach(t=>{t.addEventListener("click",()=>{Gi(t.dataset.openAuthor)})})}function ao(){const e=document.querySelector(".orbit-home"),t=()=>{e&&(e.classList.remove("orbit-home--default","orbit-home--collapsing","orbit-home--sheep"),e.classList.add(`orbit-home--${c.homeCoreState}`))};document.querySelectorAll("[data-home-theme-toggle]").forEach(i=>{i.addEventListener("click",()=>{const o=_t.indexOf(c.homeTheme);c.homeTheme=_t[(o+1)%_t.length],ne()})}),document.querySelectorAll("[data-home-core-toggle]").forEach(i=>{i.addEventListener("click",()=>{if(c.homeCoreState!=="default")return;const o=Date.now();c.homeCoreTapTimestamps=[...c.homeCoreTapTimestamps.filter(n=>o-n<900),o],!(c.homeCoreTapTimestamps.length<3)&&(c.homeCoreTapTimestamps=[],c.homeCoreState="collapsing",t(),xa(),dt=window.setTimeout(()=>{c.homeCoreState="sheep",t()},620))})}),document.querySelectorAll("[data-home-sheep-toggle]").forEach(i=>{i.addEventListener("click",()=>{c.homeCoreState==="sheep"&&(wa(),t())})})}function io(){var i,o;pt(document.getElementById("screenArea"));const e=document.querySelector("[data-timeline-pan-viewport]"),t=document.querySelector("[data-timeline-pan-surface]");if(e&&t){const n=(a,p)=>{const y=Math.min(0,e.clientWidth-t.scrollWidth),S=Math.min(0,e.clientHeight-t.scrollHeight);return{x:Math.max(y,Math.min(0,a)),y:Math.max(S,Math.min(0,p))}},u=(a,p)=>{const y=n(a,p);c.timelinePan=y,t.style.transform=`translate(${y.x}px, ${y.y}px)`};u(((i=c.timelinePan)==null?void 0:i.x)??-360,((o=c.timelinePan)==null?void 0:o.y)??-220);let m=null;t.addEventListener("pointerdown",a=>{var p,y,S;m={pointerId:a.pointerId,startX:a.clientX,startY:a.clientY,originX:((p=c.timelinePan)==null?void 0:p.x)??-360,originY:((y=c.timelinePan)==null?void 0:y.y)??-220,moved:!1},e.classList.add("is-dragging"),(S=t.setPointerCapture)==null||S.call(t,a.pointerId)}),t.addEventListener("pointermove",a=>{if(!m||m.pointerId!==a.pointerId)return;const p=a.clientX-m.startX,y=a.clientY-m.startY;(Math.abs(p)>4||Math.abs(y)>4)&&(m.moved=!0,a.preventDefault()),u(m.originX+p,m.originY+y)});const l=a=>{var p;!m||m.pointerId!==a.pointerId||(e.classList.remove("is-dragging"),m.moved&&(c.openingTapGuardUntil=Date.now()+180),m=null,(p=t.releasePointerCapture)==null||p.call(t,a.pointerId))};t.addEventListener("pointerup",l),t.addEventListener("pointercancel",l)}document.querySelectorAll("[data-timeline-tab]").forEach(n=>{n.addEventListener("click",()=>{c.timelineTab=n.dataset.timelineTab||"recommended",se()})})}function oo(){pt(document.getElementById("screenArea"));const e=document.getElementById("searchInput");e&&e.addEventListener("input",t=>{c.searchQuery=t.target.value;const i=t.target.selectionStart;se();const o=document.getElementById("searchInput");o&&(o.focus(),o.setSelectionRange(i,i))}),document.querySelectorAll("[data-search-tag]").forEach(t=>{t.addEventListener("click",()=>{const i=t.dataset.searchTag;c.searchTags=c.searchTags.includes(i)?c.searchTags.filter(o=>o!==i):[...c.searchTags,i],se()})})}function no(){document.querySelectorAll("[data-home-nav]").forEach(e=>{e.addEventListener("click",()=>{mt(e.dataset.homeNav)})}),document.querySelectorAll("[data-close-profile]").forEach(e=>{e.addEventListener("click",()=>{Vi()})}),document.querySelectorAll("[data-close-compose]").forEach(e=>{e.addEventListener("click",()=>{Qi()})})}function ia(e){var t,i;return e.templateId==="page8"&&Array.isArray((t=e.customLayout)==null?void 0:t.pretextBoxes)?e.customLayout.pretextBoxes.filter(o=>o.kind==="title"||o.kind==="body").map(o=>{var n;return String(((n=o.data)==null?void 0:n.text)||"").trim()}).filter(Boolean).join(" / ").slice(0,120):e.templateId==="page8"&&Array.isArray((i=e.customLayout)==null?void 0:i.textBoxes)?e.customLayout.textBoxes.map(o=>String(o.text||"").trim()).filter(Boolean).join(" / ").slice(0,120):[e.headline,e.subhead,e.intro,e.body].map(o=>o.trim()).filter(Boolean).join(" / ").slice(0,120)}function ro(e,t,i){const{x:o,y:n,maxWidth:u,lineHeight:m,maxLines:l}=i,a=[];String(t||"").split(`
`).forEach(y=>{const S=/\s/.test(y.trim()),E=S?y.split(/\s+/).filter(Boolean):Array.from(y),P=S?" ":"";if(!E.length){a.push("");return}let B="";E.forEach(k=>{const Y=B?`${B}${P}${k}`:k;if(e.measureText(Y).width<=u||!B){B=Y;return}a.push(B),B=k}),B&&a.push(B)}),a.slice(0,l).forEach((y,S)=>{e.fillText(y,o,n+S*m)})}function Et(e,t,i,o,n,u){e.beginPath(),e.moveTo(t+u,i),e.arcTo(t+o,i,t+o,i+n,u),e.arcTo(t+o,i+n,t,i+n,u),e.arcTo(t,i+n,t,i,u),e.arcTo(t,i,t+o,i,u),e.closePath()}async function so(e,t,i,o={x:.5,y:.5}){var k;if(!t)return;const n=typeof t=="string"?await new Promise((Y,H)=>{const w=new Image;w.onload=()=>Y(w),w.onerror=H,w.src=t}):await createImageBitmap(t),u=n.width/n.height,m=i.width/i.height;let l=0,a=0,p=n.width,y=n.height;const S=Math.max(1,Number(o==null?void 0:o.zoom)||1),E=Number.isFinite(o==null?void 0:o.cropX)||Number.isFinite(o==null?void 0:o.cropY);let P=Math.min(1,Math.max(0,o.x??.5)),B=Math.min(1,Math.max(0,o.y??.5));if(E){const Y=u>m?i.height*u:i.width,H=u>m?i.height:i.width/u,w=Math.max(0,Y*S-i.width),G=Math.max(0,H*S-i.height);P=w?Math.min(1,Math.max(0,.5-(Number(o==null?void 0:o.cropX)||0)/w)):.5,B=G?Math.min(1,Math.max(0,.5-(Number(o==null?void 0:o.cropY)||0)/G)):.5}u>m?(p=Math.max(1,n.height*m/S),l=(n.width-p)*P):(y=Math.max(1,n.width/m/S),a=(n.height-y)*B),e.save(),Et(e,i.x,i.y,i.width,i.height,i.radius),e.clip(),e.drawImage(n,l,a,p,y,i.x,i.y,i.width,i.height),e.restore(),(k=n.close)==null||k.call(n)}function lo(e,t){e.save(),e.lineWidth=4,e.strokeStyle="rgba(34, 28, 25, 0.88)",Et(e,t.x,t.y,t.width,t.height,t.radius),e.stroke();const i=Math.min(t.width,t.height)*.18,o=t.x+t.width/2,n=t.y+t.height/2;e.beginPath(),e.arc(o,n,i,0,Math.PI*2),e.stroke(),e.beginPath(),e.moveTo(o-i*.42,n),e.lineTo(o+i*.42,n),e.moveTo(o,n-i*.42),e.lineTo(o,n+i*.42),e.stroke(),e.restore()}async function co(e,t,i={}){const m=document.createElement("canvas");m.width=2480,m.height=3508;const l=m.getContext("2d");if(!l)return"";const a=2480/1240;return l.imageSmoothingEnabled=!0,l.imageSmoothingQuality="high",l.fillStyle=e.backgroundColor||"#f8f4ee",l.fillRect(0,0,2480,3508),l.scale(a,a),await $i(e.templateId).render(l,e,t,{addWrappedText:ro,clipRoundedRect:Et,drawFileCover:so,drawSlotPlaceholder:lo,defaults:Ie,page8Files:i.page8Files||{}}),m.toDataURL("image/png")}function mo(){var Bt,Nt,Dt,Rt,Ht,qt,Wt,zt,Ot,Ft,Xt,Yt;const e=document.querySelector(".page--compose");if(!e)return;const t=e.dataset.composeStage||"select",i=document.getElementById("composeForm"),o=i||e,n=document.getElementById("composeSheet"),u=(n==null?void 0:n.querySelector(".compose-sheet__frame"))||null,m=(n==null?void 0:n.querySelector("[data-custom-canvas]"))||null,l=c.composeWorkingDraft||((Bt=Fe(c.composeEditingPostId))==null?void 0:Bt.composeData)||null,a={...Ie,...l||{}},p={imageInputPrimary:typeof((Dt=(Nt=l==null?void 0:l.standardFiles)==null?void 0:Nt.primary)==null?void 0:Dt.file)=="string"?l.standardFiles.primary.file:"",imageInputSecondary:typeof((Ht=(Rt=l==null?void 0:l.standardFiles)==null?void 0:Rt.secondary)==null?void 0:Ht.file)=="string"?l.standardFiles.secondary.file:"",imageInputAccent:typeof((Wt=(qt=l==null?void 0:l.standardFiles)==null?void 0:qt.accent)==null?void 0:Wt.file)=="string"?l.standardFiles.accent.file:""},y={primary:ke((zt=l==null?void 0:l.standardFiles)==null?void 0:zt.primary),secondary:ke((Ot=l==null?void 0:l.standardFiles)==null?void 0:Ot.secondary),accent:ke((Ft=l==null?void 0:l.standardFiles)==null?void 0:Ft.accent)},S=document.querySelector("[data-toggle-compose-tags]"),E=document.querySelector("[data-compose-tags]"),P=document.querySelector("[data-toggle-compose-preview]"),B=document.querySelector("[data-custom-template-controls]"),k=document.querySelector("[data-custom-inspector]"),Y=document.querySelector("[data-compose-pretext-host]"),H=Array.from(document.querySelectorAll("[data-editable]")),w={options:pa((l==null?void 0:l.customLayout)||{}),imageBoxes:kt((l==null?void 0:l.customLayout)||{}),textBoxes:Tt((l==null?void 0:l.customLayout)||{},a),selectedId:null,imageMode:"frame"},G={},ue={headline:document.querySelector('[data-editable="headline"]'),subhead:document.querySelector('[data-editable="subhead"]'),intro:document.querySelector('[data-editable="intro"]'),body:document.querySelector('[data-editable="body"]'),date:document.querySelector('[data-editable="date"]'),editor:document.querySelector('[data-editable="editor"]')},de={primary:document.querySelector('[data-slot="imageInputPrimary"]'),secondary:document.querySelector('[data-slot="imageInputSecondary"]'),accent:document.querySelector('[data-slot="imageInputAccent"]')};function O(){return{primary:ke(y.primary),secondary:ke(y.secondary),accent:ke(y.accent)}}function T(r={}){const s=va({...c.composeWorkingDraft||l||{},...r});return c.composeWorkingDraft=s,c.composeTemplateId=s.templateId,c.composeBackgroundColor=s.backgroundColor,s}function L(r={}){var $;const{customLayoutOverride:s}=r,d=o.querySelector('input[name="templateId"]:checked'),v=o.querySelector('input[name="backgroundColor"]:checked'),M=String((d==null?void 0:d.value)||(n==null?void 0:n.dataset.template)||c.composeTemplateId||(l==null?void 0:l.templateId)||xe),h=String((v==null?void 0:v.value)||c.composeBackgroundColor||(l==null?void 0:l.backgroundColor)||"#f8f4ee"),g=T({templateId:M,backgroundColor:h,standardFiles:O()}),_=i?new FormData(i):null,b=_?_.getAll("fixedTags").map(f=>String(f)):g.fixedTags,x=_?String(_.get("freeTags")||"").split(",").map(f=>f.trim()).filter(Boolean):g.freeTags;if(M==="page8"){const f=s||(($=Z==null?void 0:Z.getSerializedLayout)==null?void 0:$.call(Z))||g.customLayout;return T({fixedTags:b,freeTags:x,customLayout:f})}return T({fixedTags:b,freeTags:x,headline:Te("headline")||g.headline,subhead:Te("subhead")||g.subhead,intro:Te("intro")||g.intro,body:Te("body")||g.body,date:Te("date")||g.date,editor:Te("editor")||g.editor,customLayout:s??null})}const W=r=>{L(),c.composeStage=r,ne()};function F(r){return new Promise(s=>{const d=new Image,v=typeof r=="string"?r:URL.createObjectURL(r);d.onload=()=>{s({width:d.naturalWidth,height:d.naturalHeight}),typeof r!="string"&&URL.revokeObjectURL(v)},d.onerror=()=>{s(null),typeof r!="string"&&URL.revokeObjectURL(v)},d.src=v})}function C(r){const s=document.querySelector(`[data-slot-image="${r}"]`),v=y[r==="imageInputPrimary"?"primary":r==="imageInputSecondary"?"secondary":"accent"];s&&(s.style.backgroundPosition=`${(v.position.x||.5)*100}% ${(v.position.y||.5)*100}%`)}function K(r){return String(r??"").replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#39;")}function _e(r){return`${r}-${Date.now().toString(36)}-${Math.random().toString(36).slice(2,7)}`}function fe(r){return G[r]||(G[r]={file:null,position:{x:.5,y:.5,zoom:1},imageSize:null,previewUrl:""}),G[r]}function Re(r){return r==="title"?{kind:"title",fontSize:.046,lineHeight:1.12,padding:.01,family:"serif",weight:600,align:"left"}:{kind:"body",fontSize:.026,lineHeight:1.45,padding:.012,family:"sans",weight:500,align:"left"}}function tt(r,s){Object.assign(r,{...r,...Re(s)})}function ut(r="left"){const s=Se({id:_e("text"),kind:"body",text:"text",isDefaultText:!0,x:.18,y:.2,width:.28,height:.12,fontSize:.026,lineHeight:1.45,padding:.012,align:r,family:"sans",weight:500},[...w.imageBoxes.map(d=>J(d)),...w.textBoxes.map(d=>J(d))]);w.textBoxes=[...w.textBoxes,D(s,Ne)],w.selectedId=s.id,ae()}function Ye(r){if(r.dataset.singleLine==="true"){r.innerText=r.innerText.replace(/\r?\n+/g," ");return}r.innerHTML=r.innerHTML.replace(/<div><br><\/div>/gi,"<br>").replace(/<div>/gi,"<br>").replace(/<\/div>/gi,"").replace(/&nbsp;/gi," ")}function at(r){const s=Number(r.dataset.maxChars||0),d=r.innerText.replace(/\r/g,"");if(r.dataset.previousValue||(r.dataset.previousValue=d),s&&d.length>s||r.scrollHeight>r.clientHeight+1||r.scrollWidth>r.clientWidth+1){r.innerText=r.dataset.previousValue;return}r.dataset.previousValue=d.trim()?d:""}function Ee(r){return r.innerText.replace(/\r/g,"")}function He(r){const s=window.getSelection();if(!s)return;const d=document.createRange();d.selectNodeContents(r),d.collapse(!1),s.removeAllRanges(),s.addRange(d)}function it(r){const s=window.getSelection();if(!s||s.rangeCount===0)return 0;const d=s.getRangeAt(0);return!r.contains(d.startContainer)||!r.contains(d.endContainer)?0:s.toString().length}function ot(r,s){const d=window.getSelection();if(!d||d.rangeCount===0){r.append(document.createTextNode(s)),He(r);return}const v=d.getRangeAt(0);v.deleteContents();const M=document.createTextNode(s);v.insertNode(M),v.setStartAfter(M),v.collapse(!0),d.removeAllRanges(),d.addRange(v)}function nt(r){!e||!P||(e.classList.toggle("is-preview-mode",r),P.textContent=r?"back":"preview",P.setAttribute("aria-pressed",String(r)),H.forEach(s=>{s.setAttribute("contenteditable",r?"false":"true"),r&&s.blur()}),(n==null?void 0:n.dataset.template)==="page8"&&ae())}function Te(r){const s=document.querySelector(`[data-editable="${r}"]`);return s?s.innerText.replace(/\r/g,"").trim():""}function Ue(){const r=o.querySelector('input[name="backgroundColor"]:checked'),s=(r==null?void 0:r.value)||c.composeBackgroundColor||"#f8f4ee";if(c.composeBackgroundColor=s,T({backgroundColor:s}),!n){o.querySelectorAll(".color-chip").forEach(d=>{const v=d.querySelector('input[name="backgroundColor"]');d.classList.toggle("is-active",!!(v!=null&&v.checked))});return}n.style.setProperty("--sheet-bg",s),o.querySelectorAll(".color-chip").forEach(d=>{const v=d.querySelector('input[name="backgroundColor"]');d.classList.toggle("is-active",!!(v!=null&&v.checked))})}function je(r){const s=r||xe,d=(n==null?void 0:n.dataset.template)||(Y?"page8":null),v=t==="edit"&&d&&d!==s&&(d==="page8"||s==="page8");if(c.composeTemplateId=s,T({templateId:s}),v){ne();return}if(!n){o.querySelectorAll(".template-thumb").forEach(h=>{const g=h.querySelector('input[name="templateId"]');h.classList.toggle("is-active",(g==null?void 0:g.value)===s)}),Y&&s!=="page8"&&ne();return}n.dataset.template=s,o.querySelectorAll(".template-thumb").forEach(h=>{const g=h.querySelector('input[name="templateId"]');h.classList.toggle("is-active",(g==null?void 0:g.value)===s)});const M=s==="page8";B&&(B.hidden=!0),n.classList.toggle("compose-sheet--custom",M),gt()}function I(r){var d;const s=o.querySelector(`input[name="templateId"][value="${r}"]`);(d=s==null?void 0:s.closest(".template-thumb"))==null||d.scrollIntoView({behavior:"smooth",block:"nearest",inline:"center"})}function A(r){var d;const s=o.querySelector(`input[name="backgroundColor"][value="${r}"]`);(d=s==null?void 0:s.closest(".color-chip"))==null||d.scrollIntoView({behavior:"smooth",block:"nearest",inline:"center"})}function U(r){const s=document.querySelector(`[data-slot-image="${r}"]`),d=document.querySelector(`[data-slot-placeholder="${r}"]`),v=document.querySelector(`[data-slot-remove="${r}"]`);if(!(!s||!d||!v)){if(p[r]){s.style.backgroundImage=`url("${p[r]}")`,s.hidden=!1,d.hidden=!0,v.hidden=!1;return}s.style.backgroundImage="",s.hidden=!0,d.hidden=!1,v.hidden=!0}}function D(r,s){const d=Math.min(q.width,Math.max(s.width,r.width)),v=Math.min(q.height,Math.max(s.height,r.height));return{...r,x:Math.min(q.x+q.width-d,Math.max(q.x,Le(r.x))),y:Math.min(q.y+q.height-v,Math.max(q.y,Le(r.y))),width:Le(d),height:Le(v)}}function te(r,s,d=.02){return!(r.x+r.width+d<=s.x||s.x+s.width+d<=r.x||r.y+r.height+d<=s.y||s.y+s.height+d<=r.y)}function J(r){return{x:r.x,y:r.y,width:r.width,height:r.height}}function re(r,s={}){const{ignoreText:d=!1,ignoreImages:v=!1}=s;return[...v?[]:w.imageBoxes.filter(M=>M.id!==r).map(M=>J(M)),...d?[]:w.textBoxes.filter(M=>M.id!==r).map(M=>J(M))]}function be(r,s,d={}){const v=J(r);return!re(s,d).some(h=>te(v,h))}function ie(r,s,d,v={}){const M=D({...r},d);if(be(M,s,v))return M;const h=[[0,-1],[1,0],[0,1],[-1,0],[1,-1],[1,1],[-1,1],[-1,-1]],g=Oe*2;for(let _=1;_<=18;_+=1)for(const[b,x]of h){const $=D({...M,x:M.x+b*g*_,y:M.y+x*g*_},d);if(be($,s,v))return $}for(let _=q.y;_<=q.y+q.height-M.height;_+=g)for(let b=q.x;b<=q.x+q.width-M.width;b+=g){const x=D({...M,x:b,y:_},d);if(be(x,s,v))return x}return M}function Ce(r,s,d=.018){const v=r.y-d,M=r.y+r.height+d,h=q.x,g=q.x+q.width;let _=[{left:h,right:g}];return s.forEach(b=>{const x=b.y-d;if(b.y+b.height+d<=v||x>=M)return;const f=Math.max(h,b.x-d),R=Math.min(g,b.x+b.width+d);_=_.flatMap(j=>{if(R<=j.left||f>=j.right)return[j];const X=[];return f>j.left&&X.push({left:j.left,right:f}),R<j.right&&X.push({left:R,right:j.right}),X})}),_.filter(b=>b.right-b.left>=r.width)}function Se(r,s){const d=D({...r},Ne),v=[];for(let g=0;g<=24;g+=1){const _=Le(d.y-g*Oe),b=Le(d.y+g*Oe);_>=q.y&&v.push(_),b<=q.y+q.height-d.height&&b!==_&&v.push(b)}let M=d,h=Number.POSITIVE_INFINITY;return v.forEach(g=>{const _={...d,y:g};Ce(_,s).forEach(x=>{const $=x.left,f=x.right-d.width,R=Le(Math.min(f,Math.max($,d.x))),j=D({...d,x:R,y:g},Ne);if(s.some(ge=>te(J(j),ge)))return;const X=Math.abs(j.x-d.x),pe=Math.abs(j.y-d.y)*2+X;pe<h&&(h=pe,M=j)})}),M}function oe(r){const s=V(r);!s||s.type!=="image"||(w.textBoxes=w.textBoxes.map(d=>{const v=[...w.imageBoxes.filter(M=>M.id!==d.id).map(M=>J(M)),...w.textBoxes.filter(M=>M.id!==d.id).map(M=>J(M))];return Se(d,v)}))}function Ae(r){return[...w.imageBoxes.filter(s=>s.id!==r).map(s=>J(s)),...w.textBoxes.filter(s=>s.id!==r).map(s=>J(s))]}function V(r){const s=w.imageBoxes.findIndex(v=>v.id===r);if(s>=0)return{type:"image",collection:w.imageBoxes,index:s,item:w.imageBoxes[s]};const d=w.textBoxes.findIndex(v=>v.id===r);return d>=0?{type:"text",collection:w.textBoxes,index:d,item:w.textBoxes[d]}:null}function Je(r){return r==="image"?St:Ne}function qe(r){return`${Math.round(r*100)}%`}function ye(r,s={}){const{rerender:d=!1}=s;if(!u||!m)return;const v=r?V(r):null;if(!v||v.type!=="text")return;const M=m.querySelector(`[data-custom-text="${r}"]`);if(!M)return;const h=u.getBoundingClientRect();if(!h.height)return;const g=Math.max(Ne.height,Le((M.scrollHeight+8)/h.height));if(!(Math.abs(g-v.item.height)<Oe/2)){if(v.item.height=g,Object.assign(v.item,D(v.item,Ne)),Object.assign(v.item,Se(v.item,Ae(r))),d){ae();return}Ct(r,v.item),Me()}}function Ge(){m&&m.querySelectorAll("[data-custom-item]").forEach(r=>{r.classList.toggle("is-selected",r.dataset.customItem===w.selectedId)})}function Ct(r,s){const d=m==null?void 0:m.querySelector(`[data-custom-item="${r}"]`);if(!d)return;const v=vt(s);d.style.left=v.left,d.style.top=v.top,d.style.width=v.width,d.style.height=v.height}function At(){[...w.imageBoxes,...w.textBoxes].forEach(r=>{Ct(r.id,r)})}function ht(r,s={}){const{rerender:d=!1}=s;if(w.selectedId=r,d&&(n==null?void 0:n.dataset.template)==="page8"){ae();return}Ge(),Me()}function Me(){var s,d,v,M,h,g,_,b;if(!k||(n==null?void 0:n.dataset.template)!=="page8")return;const r=w.selectedId?V(w.selectedId):null;if(!r){k.innerHTML=`
        <p class="compose-custom-inspector__title">Selection</p>
        <p class="compose-custom-inspector__note">ボックスを選ぶと、ここで内容や見た目を調整できます。</p>
      `;return}if(r.type==="image"){const x=fe(r.item.id),$=!!(x.previewUrl||x.file),f=Math.max(1,Number((s=x.position)==null?void 0:s.zoom)||1);k.innerHTML=`
        <p class="compose-custom-inspector__title">Image Box</p>
        <p class="compose-custom-inspector__note">${w.imageMode==="crop"?"Crop 中は画像面をドラッグして見せ方を調整します。":"Frame 中はボックス自体を動かします。Crop に切り替えると画像だけを動かせます。"}</p>
        <div class="compose-custom-inspector__meta">
          <span>W ${qe(r.item.width)}</span>
          <span>H ${qe(r.item.height)}</span>
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
      `,k.querySelectorAll("[data-custom-image-mode]").forEach(R=>{R.addEventListener("click",()=>{R.hasAttribute("disabled")||(w.imageMode=R.dataset.customImageMode==="crop"?"crop":"frame",Me())})}),(d=k.querySelector('[data-custom-control="zoom"]'))==null||d.addEventListener("input",R=>{x.position.zoom=Math.max(1,Number(R.target.value)||1),ae()}),(v=k.querySelector('[data-custom-control="replace-image"]'))==null||v.addEventListener("click",()=>{var R;(R=document.getElementById(`custom-image-${r.item.id}`))==null||R.click()})}else{k.innerHTML=`
      <p class="compose-custom-inspector__title">Text Box</p>
      <p class="compose-custom-inspector__note">Title / Body のプリセットを起点にして、細部は個別調整できます。</p>
      <div class="compose-custom-inspector__meta">
        <span>W ${qe(r.item.width)}</span>
        <span>H ${qe(r.item.height)}</span>
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
        <textarea class="compose-custom-inspector__textarea" data-custom-control="text">${K(r.item.text)}</textarea>
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
          <button type="button" data-custom-align="left" class="${r.item.align==="left"?"is-active":""}" aria-label="Align left">${N("alignLeft")}</button>
          <button type="button" data-custom-align="center" class="${r.item.align==="center"?"is-active":""}" aria-label="Align center">${N("alignCenter")}</button>
          <button type="button" data-custom-align="right" class="${r.item.align==="right"?"is-active":""}" aria-label="Align right">${N("alignRight")}</button>
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
    `;const x=k.querySelector('[data-custom-control="text"]');x==null||x.addEventListener("focus",$=>{const f=w.selectedId?V(w.selectedId):null;if(!(!f||f.type!=="text")&&f.item.isDefaultText&&f.item.text.trim().toLowerCase()==="text"){f.item.text="",f.item.isDefaultText=!1,$.target.value="";const R=m==null?void 0:m.querySelector(`[data-custom-text="${f.item.id}"]`);R&&(R.textContent="")}}),x==null||x.addEventListener("input",$=>{const f=w.selectedId?V(w.selectedId):null;if(!f||f.type!=="text")return;f.item.text=$.target.value.replace(/\r/g,""),f.item.isDefaultText=!1;const R=m==null?void 0:m.querySelector(`[data-custom-text="${f.item.id}"]`);R&&R!==document.activeElement&&(R.textContent=f.item.text),ye(f.item.id)}),k.querySelectorAll("[data-custom-preset]").forEach($=>{$.addEventListener("click",()=>{const f=w.selectedId?V(w.selectedId):null;!f||f.type!=="text"||(tt(f.item,$.dataset.customPreset==="title"?"title":"body"),ae(),ye(f.item.id,{rerender:!0}))})}),(M=k.querySelector('[data-custom-control="fontSize"]'))==null||M.addEventListener("input",$=>{const f=w.selectedId?V(w.selectedId):null;!f||f.type!=="text"||(f.item.fontSize=Number($.target.value)/520,ae(),ye(f.item.id,{rerender:!0}))}),(h=k.querySelector('[data-custom-control="lineHeight"]'))==null||h.addEventListener("input",$=>{const f=w.selectedId?V(w.selectedId):null;!f||f.type!=="text"||(f.item.lineHeight=Number($.target.value)/100,ae(),ye(f.item.id,{rerender:!0}))}),(g=k.querySelector('[data-custom-control="padding"]'))==null||g.addEventListener("input",$=>{const f=w.selectedId?V(w.selectedId):null;!f||f.type!=="text"||(f.item.padding=Number($.target.value)/1e3,ae(),ye(f.item.id,{rerender:!0}))}),(_=k.querySelector('[data-custom-control="weight"]'))==null||_.addEventListener("input",$=>{const f=w.selectedId?V(w.selectedId):null;!f||f.type!=="text"||(f.item.weight=Number($.target.value),ae(),ye(f.item.id,{rerender:!0}))}),k.querySelectorAll("[data-custom-align]").forEach($=>{$.addEventListener("click",()=>{const f=w.selectedId?V(w.selectedId):null;!f||f.type!=="text"||(f.item.align=$.dataset.customAlign||"left",ae())})}),k.querySelectorAll("[data-custom-family]").forEach($=>{$.addEventListener("click",()=>{const f=w.selectedId?V(w.selectedId):null;!f||f.type!=="text"||(f.item.family=$.dataset.customFamily==="serif"?"serif":"sans",f.item.kind=f.item.family==="serif"?"title":"body",f.item.weight=f.item.family==="serif"?Math.max(500,f.item.weight):Math.min(600,f.item.weight),ae(),ye(f.item.id,{rerender:!0}))})})}(b=k.querySelector('[data-custom-control="delete"]'))==null||b.addEventListener("click",()=>{const x=w.selectedId,$=x?V(x):null;if($){if($.collection.splice($.index,1),$.type==="image"){const f=G[x];f!=null&&f.previewUrl&&URL.revokeObjectURL(f.previewUrl),delete G[x],oe(x)}w.selectedId=null,ae()}})}function ae(){if(!m||!n)return;const r=n.dataset.template==="page8",s=t==="edit"&&!(e!=null&&e.classList.contains("is-preview-mode"));if(m.hidden=!r,!r){m.innerHTML="",Me();return}const d=[...w.imageBoxes.map(h=>h.id),...w.textBoxes.map(h=>h.id)];(!w.selectedId||!d.includes(w.selectedId))&&(w.selectedId=d[0]||null);const v=w.imageBoxes.map(h=>{const g=vt(h),_=fe(h.id),b=!!(_.previewUrl||_.file),x=_.position||{x:.5,y:.5,zoom:1},$=`${w.selectedId===h.id?" is-selected":""}${b?"":" is-empty"}`,f=b?`<img class="compose-custom-item__image" src="${_.previewUrl}" alt="" draggable="false" style="object-position:${(x.x||.5)*100}% ${(x.y||.5)*100}%;transform:scale(${Math.max(1,x.zoom||1)});" />`:`<div class="compose-custom-item__placeholder"><span class="compose-custom-item__plus">${N("compose")}</span></div>`;return`
        <div
          class="compose-custom-item compose-custom-item--image${$}"
          data-custom-item="${h.id}"
          data-custom-type="image"
          style="left:${g.left};top:${g.top};width:${g.width};height:${g.height};"
        >
          ${s?`<input class="field__file" id="custom-image-${h.id}" type="file" accept="image/*" />`:""}
          ${s?`<div class="compose-custom-item__surface compose-custom-item__surface--image" data-custom-surface="${h.id}">${f}</div>`:`<div class="compose-custom-item__surface compose-custom-item__surface--image">${f}</div>`}
          ${s?`<button class="compose-custom-item__drag" type="button" data-custom-drag="${h.id}" aria-label="move image box">${N("drag")}</button>`:""}
          ${s?`<button class="compose-custom-item__remove" type="button" data-custom-remove="${h.id}" aria-label="remove image box">&times;</button>`:""}
          ${s?`<button class="compose-custom-item__resize" type="button" data-custom-resize="${h.id}" aria-label="resize image box"></button>`:""}
        </div>
      `}).join(""),M=w.textBoxes.map(h=>{const g=vt(h);return`
        <div
          class="compose-custom-item compose-custom-item--text${w.selectedId===h.id?" is-selected":""}"
          data-custom-item="${h.id}"
          data-custom-type="text"
          style="left:${g.left};top:${g.top};width:${g.width};height:${g.height};"
        >
          <div
            class="compose-custom-item__text"
            data-custom-text="${h.id}"
            contenteditable="${s?"true":"false"}"
            spellcheck="false"
            style="text-align:${h.align};font-size:${Math.max(11,h.fontSize*520)}px;line-height:${h.lineHeight};padding:${Math.max(4,h.padding*520)}px;font-family:${h.family==="serif"?"'Cormorant Garamond', 'Times New Roman', serif":"'Noto Sans JP', sans-serif"};font-weight:${h.weight};"
          >${K(h.text)}</div>
          ${s?`<button class="compose-custom-item__drag" type="button" data-custom-drag="${h.id}" aria-label="move text box">${N("drag")}</button>`:""}
          ${s?`<button class="compose-custom-item__remove" type="button" data-custom-remove="${h.id}" aria-label="remove text box">&times;</button>`:""}
          ${s?`<button class="compose-custom-item__resize" type="button" data-custom-resize="${h.id}" aria-label="resize text box"></button>`:""}
        </div>
      `}).join("");m.innerHTML=`${v}${M}`,Me(),m.onpointerdown=h=>{h.target===m&&(w.selectedId=null,Ge(),Me())},m.querySelectorAll("[data-custom-item]").forEach(h=>{let g=null;h.addEventListener("pointerdown",b=>{var $e,Be;const x=h.dataset.customItem||"",$=V(x);if(!$||!u||b.target.closest("[data-custom-remove], [data-custom-resize]"))return;b.preventDefault();const f=b.target.closest("[data-custom-drag]"),R=b.target.closest("[data-custom-text]"),j=b.target.closest("[data-custom-surface]"),X=$.type==="image"?fe(x):null;ht(x);const ee=u.getBoundingClientRect(),pe=!!(X!=null&&X.previewUrl||X!=null&&X.file),ge=$.type==="image"&&w.imageMode==="crop"&&pe&&j&&!f;g={pointerId:b.pointerId,itemId:x,mode:ge?"crop-image":"move",originX:ge?X.position.x||.5:$.item.x,originY:ge?X.position.y||.5:$.item.y,startX:b.clientX,startY:b.clientY,frameWidth:ee.width,frameHeight:ee.height,type:$.type,zoom:(($e=X==null?void 0:X.position)==null?void 0:$e.zoom)||1,targetSurface:$.type==="image"&&!pe?j:null,targetText:f?null:R,cropSurface:ge?j:null,dragged:!1},(Be=h.setPointerCapture)==null||Be.call(h,b.pointerId)}),h.addEventListener("pointermove",b=>{var j,X;if(!g||g.pointerId!==b.pointerId)return;const x=b.clientX-g.startX,$=b.clientY-g.startY;if(!g.dragged&&Math.hypot(x,$)<6)return;g.dragged=!0,b.preventDefault();const f=V(g.itemId);if(!f)return;const R={x:f.item.x,y:f.item.y,width:f.item.width,height:f.item.height};if(g.mode==="crop-image"){const ee=(j=g.cropSurface)==null?void 0:j.getBoundingClientRect(),pe=fe(g.itemId),ge=pe.imageSize;if(!ee||!ge)return;const $e=ge.width/ge.height,Be=ee.width/ee.height,We=($e>Be?ee.height*$e:ee.width)*g.zoom,Ia=($e>Be?ee.height:ee.width/$e)*g.zoom,Ut=Math.max(0,We-ee.width),jt=Math.max(0,Ia-ee.height);pe.position.x=Ut?Math.min(1,Math.max(0,g.originX-x/Ut)):.5,pe.position.y=jt?Math.min(1,Math.max(0,g.originY-$/jt)):.5;const Jt=(X=g.cropSurface)==null?void 0:X.querySelector(".compose-custom-item__image");Jt&&(Jt.style.objectPosition=`${pe.position.x*100}% ${pe.position.y*100}%`)}else{f.item.x=g.originX+x/g.frameWidth,f.item.y=g.originY+$/g.frameHeight,Object.assign(f.item,D(f.item,Je(f.type)));const ee=f.type==="image"?{ignoreText:!0}:{};Object.assign(f.item,ie(f.item,f.item.id,Je(f.type),ee)),be(f.item,f.item.id,ee)||Object.assign(f.item,R),f.type==="image"?oe(f.item.id):Object.assign(f.item,Se(f.item,Ae(f.item.id))),Me(),At()}});const _=b=>{var j,X;if(!g||g.pointerId!==b.pointerId)return;const x=g.itemId,$=g.dragged,f=g.targetSurface,R=g.targetText;if(g=null,(j=h.releasePointerCapture)==null||j.call(h,b.pointerId),!$){if(f){(X=document.getElementById(`custom-image-${x}`))==null||X.click();return}R&&(R.focus(),He(R))}};h.addEventListener("pointerup",_),h.addEventListener("pointercancel",_)}),m.querySelectorAll("[data-custom-remove]").forEach(h=>{h.addEventListener("click",g=>{g.preventDefault(),g.stopPropagation();const _=h.dataset.customRemove,b=_?V(_):null;if(b){if(b.collection.splice(b.index,1),b.type==="image"){const x=G[_];x!=null&&x.previewUrl&&URL.revokeObjectURL(x.previewUrl),delete G[_],oe(_)}w.selectedId=null,ae()}})}),m.querySelectorAll("[data-custom-text]").forEach(h=>{h.addEventListener("beforeinput",g=>{g.inputType==="insertParagraph"&&(ot(h,`
`),g.preventDefault())}),h.addEventListener("focus",()=>{const g=h.dataset.customText,_=g?V(g):null;(_==null?void 0:_.type)==="text"&&_.item.isDefaultText&&_.item.text.trim().toLowerCase()==="text"&&(_.item.text="",_.item.isDefaultText=!1,h.textContent=""),ht(h.dataset.customText||"")}),h.addEventListener("input",()=>{const g=h.dataset.customText,_=g?V(g):null;if(!_)return;_.item.text=h.innerText.replace(/\r/g,""),_.item.isDefaultText=!1;const b=k==null?void 0:k.querySelector('[data-custom-control="text"]');b&&b!==document.activeElement&&(b.value=_.item.text),ye(_.item.id)})}),m.querySelectorAll('input[id^="custom-image-"]').forEach(h=>{h.addEventListener("change",async g=>{var $;const _=h.id.replace("custom-image-",""),b=fe(_),x=(($=g.target.files)==null?void 0:$[0])||null;b.previewUrl&&(URL.revokeObjectURL(b.previewUrl),b.previewUrl=""),b.file=x,b.position={x:.5,y:.5,zoom:1},b.imageSize=x?await F(x):null,x&&(b.previewUrl=fileToPreviewUrl(x)),oe(_),ae()})}),m.querySelectorAll("[data-custom-resize]").forEach(h=>{let g=null;h.addEventListener("pointerdown",b=>{var R;const x=h.dataset.customResize||"",$=V(x);if(!$||!u)return;b.preventDefault(),b.stopPropagation(),ht(x);const f=u.getBoundingClientRect();g={pointerId:b.pointerId,itemId:x,originX:$.item.x,originY:$.item.y,originWidth:$.item.width,originHeight:$.item.height,startX:b.clientX,startY:b.clientY,frameWidth:f.width,frameHeight:f.height,type:$.type},(R=h.setPointerCapture)==null||R.call(h,b.pointerId)}),h.addEventListener("pointermove",b=>{if(!g||g.pointerId!==b.pointerId)return;b.preventDefault();const x=V(g.itemId);if(!x)return;const $=Je(g.type),f={x:x.item.x,y:x.item.y,width:x.item.width,height:x.item.height};x.item.width=g.originWidth+(b.clientX-g.startX)/g.frameWidth,x.item.height=g.originHeight+(b.clientY-g.startY)/g.frameHeight,Object.assign(x.item,D(x.item,$));const R=x.type==="image"?{ignoreText:!0}:{};Object.assign(x.item,ie(x.item,x.item.id,$,R)),be(x.item,x.item.id,R)||Object.assign(x.item,f),x.type==="image"&&oe(x.item.id),Me(),At()});const _=b=>{var x;!g||g.pointerId!==b.pointerId||(g=null,(x=h.releasePointerCapture)==null||x.call(h,b.pointerId))};h.addEventListener("pointerup",_),h.addEventListener("pointercancel",_)}),window.requestAnimationFrame(()=>{w.textBoxes.forEach(h=>{ye(h.id)})})}function gt(){if(!n||!u)return;const r=n.dataset.template==="page8";if(Object.values(de).forEach(s=>{s&&(s.style.left="",s.style.top="",s.style.width="",s.style.height="")}),Object.entries(ue).forEach(([s,d])=>{d&&(d.style.left="",d.style.top="",d.style.width="",d.style.height="",d.style.fontSize="",d.style.lineHeight="",d.style.textAlign="",s==="editor"&&(d.style.right=""),s==="body"&&(d.style.bottom=""),s==="date"&&(d.style.bottom=""))}),B&&(B.hidden=!r||t!=="edit"),!r){m&&(m.hidden=!0,m.innerHTML="");return}w.imageBoxes=kt({imageBoxes:w.imageBoxes}),w.textBoxes=Tt({textBoxes:w.textBoxes},a),ae()}if(o.querySelectorAll('input[name="backgroundColor"]').forEach(r=>{r.addEventListener("change",()=>{Ue(),A(r.value)})}),Ue(),window.setTimeout(()=>{var r;A((r=o.querySelector('input[name="backgroundColor"]:checked'))==null?void 0:r.value)},0),o.querySelectorAll('input[name="templateId"]').forEach(r=>{r.addEventListener("change",()=>{je(r.value),I(r.value)})}),je(c.composeTemplateId||((Xt=o.querySelector('input[name="templateId"]:checked'))==null?void 0:Xt.value)),window.setTimeout(()=>{var r;I(c.composeTemplateId||((r=o.querySelector('input[name="templateId"]:checked'))==null?void 0:r.value))},0),document.querySelectorAll("[data-template-carousel-nav]").forEach(r=>{r.addEventListener("click",()=>{const s=document.querySelector("[data-template-carousel]");if(!s)return;const d=r.dataset.templateCarouselNav==="next"?1:-1;s.scrollBy({left:s.clientWidth*.72*d,behavior:"smooth"})})}),document.querySelectorAll("[data-color-carousel-nav]").forEach(r=>{r.addEventListener("click",()=>{const s=document.querySelector("[data-color-carousel]");if(!s)return;const d=r.dataset.colorCarouselNav==="next"?1:-1;s.scrollBy({left:s.clientWidth*.72*d,behavior:"smooth"})})}),document.querySelectorAll("[data-compose-stage-nav]").forEach(r=>{r.addEventListener("click",()=>{const s=r.dataset.composeStageNav;s&&W(s)})}),t==="select"||!i)return;S&&E&&S.addEventListener("click",()=>{const r=!E.hidden;E.hidden=r,S.setAttribute("aria-expanded",String(!r))}),P&&P.addEventListener("click",()=>{const r=!(e!=null&&e.classList.contains("is-preview-mode"));nt(!!r)}),nt(!1);const ve=document.querySelector("[data-pretext-add-toggle]"),he=document.querySelector("[data-pretext-add-popover]"),ft=document.querySelector("[data-pretext-delete]");function rt(){!ve||!he||(he.hidden=!0,ve.setAttribute("aria-expanded","false"))}function Ma(){!ve||!he||(he.hidden=!1,ve.setAttribute("aria-expanded","true"))}if(Y){let r=0;ve==null||ve.addEventListener("click",s=>{s.preventDefault(),s.stopPropagation(),he&&(he.hidden?Ma():rt())}),he==null||he.querySelectorAll("[data-pretext-add-kind]").forEach(s=>{s.addEventListener("click",d=>{var M;d.preventDefault(),d.stopPropagation();const v=s.dataset.pretextAddKind;v&&(r+=1,(M=Z==null?void 0:Z.sendCommand)==null||M.call(Z,{id:r,type:"add",kind:v,align:s.dataset.pretextAddAlign||"left"}),rt())})}),ft==null||ft.addEventListener("click",s=>{var d;s.preventDefault(),s.stopPropagation(),r+=1,(d=Z==null?void 0:Z.sendCommand)==null||d.call(Z,{id:r,type:"delete-selected"}),rt()}),o.addEventListener("pointerdown",s=>{!he||he.hidden||ve!=null&&ve.contains(s.target)||he.contains(s.target)||rt()}),Pa(async()=>{const{mountComposePretextEditor:s}=await import("./pretextComposeBridge-CHOTkPat.js");return{mountComposePretextEditor:s}},__vite__mapDeps([0,1,2,3,4]),import.meta.url).then(({mountComposePretextEditor:s})=>{Y.isConnected&&(Z=s(Y,{customLayout:(l==null?void 0:l.customLayout)||{},textValues:a}))}).catch(s=>{console.error("Failed to mount pretext compose editor",s),Y.innerHTML='<p class="compose-pretext-host__error">Failed to load the editor.</p>'});return}const le=o.querySelector('[data-custom-add="text"]');let Q=(le==null?void 0:le.closest("[data-custom-add-pop]"))||null,me=(Q==null?void 0:Q.querySelector("[data-custom-add-popover]"))||null;le&&!Q&&(Q=document.createElement("div"),Q.className="compose-custom-add-pop",(Yt=le.parentElement)==null||Yt.insertBefore(Q,le),Q.appendChild(le)),le&&Q&&!me&&(Q.insertAdjacentHTML("afterbegin",`
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
    `),me=Q.querySelector("[data-custom-add-popover]"),le.setAttribute("aria-haspopup","true"),le.setAttribute("aria-expanded","false"));function st(){!me||!le||(me.hidden=!0,Q==null||Q.classList.remove("is-open"),le.setAttribute("aria-expanded","false"))}function La(){!me||!le||(me.hidden=!1,Q==null||Q.classList.add("is-open"),le.setAttribute("aria-expanded","true"))}o.querySelectorAll("[data-custom-add]").forEach(r=>{r.addEventListener("click",s=>{s.preventDefault();const d=r.dataset.customAdd;if((n==null?void 0:n.dataset.template)==="page8"){if(d==="image"){st();const v={id:_e("image"),x:.14,y:.18,width:.28,height:.22};w.imageBoxes=[...w.imageBoxes,D(v,St)],w.selectedId=v.id,fe(v.id),oe(v.id),ae();return}me&&(me.hidden?La():st())}})}),me==null||me.querySelectorAll("[data-custom-add-text-align]").forEach(r=>{r.addEventListener("click",s=>{s.preventDefault(),(n==null?void 0:n.dataset.template)==="page8"&&(ut(r.dataset.customAddTextAlign||"left"),st())})}),o.addEventListener("pointerdown",r=>{!me||me.hidden||Q!=null&&Q.contains(r.target)||st()}),[{inputId:"imageInputPrimary",stateKey:"primary"},{inputId:"imageInputSecondary",stateKey:"secondary"},{inputId:"imageInputAccent",stateKey:"accent"}].forEach(({inputId:r,stateKey:s})=>{const d=document.querySelector(`[data-slot="${r}"]`),v=document.getElementById(r);if(!v)return;v.addEventListener("change",async h=>{var _;const g=((_=h.target.files)==null?void 0:_[0])||null;y[s].file=g?await Fi(g,{maxWidth:1600,quality:.9}):null,y[s].position={x:.5,y:.5},y[s].imageSize=g?await F(g):null,p[r]=y[s].file||"",U(r),C(r),T({standardFiles:O()})});const M=document.querySelector(`[data-slot-remove="${r}"]`);if(M&&M.addEventListener("click",h=>{h.preventDefault(),h.stopPropagation(),p[r]="",y[s]={file:null,position:{x:.5,y:.5},imageSize:null},v.value="",U(r),T({standardFiles:O()})}),d){let h=null;d.addEventListener("pointerdown",_=>{var b,x;if(!(e!=null&&e.classList.contains("is-preview-mode"))){if((n==null?void 0:n.dataset.template)==="page8"){const $=w.imageBoxes[s];if(!$||!u)return;_.preventDefault(),_.stopPropagation();const f=u.getBoundingClientRect();h={pointerId:_.pointerId,mode:"move-box",startX:_.clientX,startY:_.clientY,originX:$.x,originY:$.y,frameWidth:f.width,frameHeight:f.height},d.classList.add("is-dragging"),(b=d.setPointerCapture)==null||b.call(d,_.pointerId);return}y[s].file&&(_.preventDefault(),_.stopPropagation(),h={pointerId:_.pointerId,mode:"pan-image",startX:_.clientX,startY:_.clientY,originX:y[s].position.x,originY:y[s].position.y},d.classList.add("is-dragging"),(x=d.setPointerCapture)==null||x.call(d,_.pointerId))}}),d.addEventListener("pointermove",_=>{if(!h||h.pointerId!==_.pointerId)return;if(_.preventDefault(),h.mode==="move-box"){const $e=h.originX+(_.clientX-h.startX)/h.frameWidth,Be=h.originY+(_.clientY-h.startY)/h.frameHeight,We=w.imageBoxes[s];We.x=Math.min(q.x+q.width-We.width,Math.max(q.x,$e)),We.y=Math.min(q.y+q.height-We.height,Math.max(q.y,Be)),gt();return}const b=d.getBoundingClientRect(),x=y[s].imageSize;if(!x)return;const $=x.width/x.height,f=b.width/b.height,R=$>f?b.height*$:b.width,j=$>f?b.height:b.width/$,X=Math.max(0,R-b.width),ee=Math.max(0,j-b.height),pe=_.clientX-h.startX,ge=_.clientY-h.startY;y[s].position.x=X?Math.min(1,Math.max(0,h.originX-pe/X)):.5,y[s].position.y=ee?Math.min(1,Math.max(0,h.originY-ge/ee)):.5,C(r),T({standardFiles:O()})});const g=_=>{var b;!h||h.pointerId!==_.pointerId||(h=null,d.classList.remove("is-dragging"),(b=d.releasePointerCapture)==null||b.call(d,_.pointerId))};d.addEventListener("pointerup",g),d.addEventListener("pointercancel",g)}U(r),C(r)}),gt(),H.forEach(r=>{r.dataset.previousValue=Ee(r),r.addEventListener("beforeinput",s=>{var g;if(r.dataset.singleLine==="true"&&(s.inputType==="insertParagraph"||s.inputType==="insertLineBreak")){s.preventDefault();return}const d=Number(r.dataset.maxChars||0);if(!d||!s.inputType.startsWith("insert"))return;const v=Ee(r).length,M=it(r),h=((g=s.data)==null?void 0:g.length)??1;v-M+h>d&&s.preventDefault()}),r.addEventListener("paste",s=>{var x,$;s.preventDefault();const d=(($=(x=s.clipboardData)==null?void 0:x.getData("text/plain"))==null?void 0:$.replace(/\r/g,""))??"",v=r.dataset.singleLine==="true"?d.replace(/\n+/g," "):d,M=Number(r.dataset.maxChars||0),h=Ee(r).length,g=it(r),_=M?Math.max(0,M-(h-g)):v.length,b=v.slice(0,_);b&&(ot(r,b),r.dataset.previousValue=Ee(r))}),r.addEventListener("input",()=>{const s=Number(r.dataset.maxChars||0),d=Ee(r);if(s&&d.length>s){r.innerText=r.dataset.previousValue||"",He(r);return}r.dataset.previousValue=d}),r.addEventListener("blur",()=>{Ye(r),at(r)})}),t==="tags"&&i.addEventListener("submit",async r=>{var h;r.preventDefault();const s=L(),d={templateId:s.templateId,backgroundColor:s.backgroundColor,headline:s.headline,subhead:s.subhead,intro:s.intro,body:s.body,date:s.date,editor:s.editor,customLayout:s.customLayout},v=await co(d,s.standardFiles,{}),M=String(((h=et().profile)==null?void 0:h.name)||"you").trim()||"you";c.composeEditingPostId?Wa(c.composeEditingPostId,{caption:ia(d),imageData:v,fixedTags:s.fixedTags,freeTags:s.freeTags,composeData:{...d,fixedTags:s.fixedTags,freeTags:s.freeTags,standardFiles:s.standardFiles}}):qa({authorName:M,caption:ia(d),imageData:v,fixedTags:s.fixedTags,freeTags:s.freeTags,composeData:{...d,fixedTags:s.fixedTags,freeTags:s.freeTags,standardFiles:s.standardFiles}}),c.screen="timeline",c.timelineTab="recommended",c.composeStage="select",c.composeWorkingDraft=null,ne()})}function po(){const e=document.getElementById("issueForm");e&&e.addEventListener("submit",t=>{t.preventDefault();const i=new FormData(e),o=i.getAll("issuePostIds").map(n=>String(n));o.length&&(Ja({title:String(i.get("title")).trim(),subtitle:String(i.get("subtitle")||"").trim(),tone:String(i.get("tone")||"soft"),postIds:o}),se())})}function uo(){pt(document.getElementById("screenArea"));function e(l){return new Promise(a=>{const p=new Image,y=URL.createObjectURL(l);p.onload=()=>{a({width:p.naturalWidth,height:p.naturalHeight}),URL.revokeObjectURL(y)},p.onerror=()=>{a(null),URL.revokeObjectURL(y)},p.src=y})}document.querySelectorAll("[data-profile-avatar-upload]").forEach(l=>{l.addEventListener("click",a=>{a.stopPropagation(),c.profileExpanded=!0,c.profileSection="edit",se(),window.setTimeout(()=>{var p;(p=document.getElementById("profileAvatarInput"))==null||p.click()},0)})}),document.querySelectorAll("[data-profile-section]").forEach(l=>{l.addEventListener("click",()=>{c.profileSection=l.dataset.profileSection,c.profileSection==="library"&&(c.profileLibraryTab=c.profileLibraryTab||"liked"),se()})}),document.querySelectorAll("[data-profile-library-tab]").forEach(l=>{l.addEventListener("click",()=>{c.profileLibraryTab=l.dataset.profileLibraryTab||"liked",se()})});const t=document.getElementById("profileAvatarInput"),i=document.getElementById("avatarCropper"),o=document.getElementById("avatarCropSurface"),n=document.getElementById("avatarCropImage");function u(){if(!(!i||!n)){if(!z.file||!z.previewUrl){i.hidden=!0,n.removeAttribute("src");return}i.hidden=!1,n.src=z.previewUrl,n.style.objectPosition=`${z.crop.x*100}% ${z.crop.y*100}%`,n.style.transform=`scale(${z.crop.zoom})`}}if(t&&t.addEventListener("change",async l=>{var p;const a=((p=l.target.files)==null?void 0:p[0])||null;z.previewUrl&&(URL.revokeObjectURL(z.previewUrl),z.previewUrl=""),z.file=a,z.imageSize=a?await e(a):null,z.crop={x:.5,y:.5,zoom:1},a&&(z.previewUrl=fileToPreviewUrl(a)),c.profileAvatarCropOpen=!!a,se()}),o){let l=null;o.addEventListener("pointerdown",p=>{var y;z.file&&(l={pointerId:p.pointerId,startX:p.clientX,startY:p.clientY,originX:z.crop.x,originY:z.crop.y},o.classList.add("is-dragging"),(y=o.setPointerCapture)==null||y.call(o,p.pointerId))}),o.addEventListener("pointermove",p=>{if(!l||l.pointerId!==p.pointerId||!z.imageSize)return;const y=o.getBoundingClientRect(),{width:S,height:E}=z.imageSize,P=S/E,B=y.width/y.height,k=P>B?y.height*P:y.width,Y=P>B?y.height:y.width/P,H=k*z.crop.zoom,w=Y*z.crop.zoom,G=Math.max(0,H-y.width),ue=Math.max(0,w-y.height),de=p.clientX-l.startX,O=p.clientY-l.startY;z.crop.x=G?Math.min(1,Math.max(0,l.originX-de/G)):.5,z.crop.y=ue?Math.min(1,Math.max(0,l.originY-O/ue)):.5,u()});const a=p=>{var y;!l||l.pointerId!==p.pointerId||(l=null,o.classList.remove("is-dragging"),(y=o.releasePointerCapture)==null||y.call(o,p.pointerId))};o.addEventListener("pointerup",a),o.addEventListener("pointercancel",a)}u();const m=document.getElementById("profileForm");m&&m.addEventListener("submit",async l=>{l.preventDefault();const a=new FormData(m),p=z.file?await Xi(z.file,z.crop,{size:320}):et().profile.avatarData;Ua({name:String(a.get("name")).trim(),bio:String(a.get("bio")).trim(),avatarData:p}),Ke(),c.profileSection=null,c.profileExpanded=!0,se()}),document.querySelectorAll("[data-follow-author]").forEach(l=>{l.addEventListener("click",()=>{ja(l.dataset.followAuthor),se()})})}function ho(){pt(document.getElementById("screenArea")),document.querySelectorAll("[data-close-post-detail]").forEach(e=>{e.addEventListener("click",()=>{ka()})})}function go(){document.querySelectorAll("[data-close-preview]").forEach(e=>{e.addEventListener("click",()=>{c.previewPostId=null,Ze()})}),document.querySelectorAll("[data-close-comments]").forEach(e=>{e.addEventListener("click",()=>{c.commentPostId=null,Ze()})}),document.querySelectorAll("[data-delete-post]").forEach(e=>{e.addEventListener("click",()=>{const t=e.dataset.deletePost;if(!t)return;const i=Fe(t);if(_a(i)&&window.confirm("この投稿を削除しますか？")){if(za(t),c.previewPostId===t&&(c.previewPostId=null),c.commentPostId===t&&(c.commentPostId=null),c.screen==="post"){ka();return}se()}})}),document.querySelectorAll("[data-comment-form]").forEach(e=>{e.addEventListener("submit",t=>{t.preventDefault();const i=e.querySelector('input[name="comment"]');Xa(e.dataset.commentForm,i.value),c.commentPostId=e.dataset.commentForm,Ze(),se()})})}function fo(){switch(no(),c.screen){case"home":ao();break;case"timeline":io();break;case"search":oo();break;case"compose":mo();break;case"magazine":po();break;case"profile":uo();break;case"post":ho();break}}function Ta(e=document.getElementById("app")){if(!e)throw new Error("bootLegacyApp requires an app root element.");if(Qe=e,typeof window<"u"&&typeof window.matchMedia=="function"&&!ze){ze=window.matchMedia("(prefers-color-scheme: dark)");const t=()=>{c.homeTheme==="system"&&ne()};typeof ze.addEventListener=="function"?ze.addEventListener("change",t):typeof ze.addListener=="function"&&ze.addListener(t)}return ne(),{render:ne}}if(typeof window<"u"&&!window.__MEMORIES_REACT_HOST__){const e=document.getElementById("app");e&&Ta(e)}const bo=Object.freeze(Object.defineProperty({__proto__:null,bootLegacyApp:Ta},Symbol.toStringTag,{value:"Module"}));export{q as P,Tt as a,bo as b,kt as n};
