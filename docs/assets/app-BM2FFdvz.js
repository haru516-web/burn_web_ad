const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["./pretextComposeBridge-O3bw0V0R.js","./main-DmXGHDsb.js","./client-CTQ0Ju4c.js","./main-BBcJZpVP.css","./pretextComposeBridge-BXwsMVV_.css"])))=>i.map(i=>d[i]);
import{_ as yi}from"./main-DmXGHDsb.js";function bi(){return""}function jt(e){const t=new Date(e),a=t.getFullYear(),o=String(t.getMonth()+1).padStart(2,"0"),n=String(t.getDate()).padStart(2,"0");return`${a}.${o}.${n}`}function Jt(e){const t=new Date(e),a=t.getFullYear(),o=String(t.getMonth()+1).padStart(2,"0"),n=String(t.getDate()).padStart(2,"0"),u=String(t.getHours()).padStart(2,"0"),m=String(t.getMinutes()).padStart(2,"0");return`${a}.${o}.${n} ${u}:${m}`}function vi(e){const t=new Date(e).getTime();return(Date.now()-t)/(1e3*60*60)<=72}function wi(e){const t=Date.now()-new Date(e).getTime(),a=Math.floor(t/6e4);if(a<1)return"たった今";if(a<60)return`${a}分前`;const o=Math.floor(a/60);return o<24?`${o}時間前`:`${Math.floor(o/24)}日前`}function G(e){return{timeline:'<svg viewBox="0 0 24 24" aria-hidden="true" fill="none" stroke="currentColor" stroke-width="1.15" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="2.3" fill="currentColor" stroke="none"/><ellipse cx="12" cy="12" rx="8.8" ry="4.1" transform="rotate(18 12 12)"/><ellipse cx="12" cy="12" rx="8.1" ry="3.3" transform="rotate(78 12 12)"/><ellipse cx="12" cy="12" rx="7.6" ry="5.2" transform="rotate(-40 12 12)"/><circle cx="18.9" cy="6.2" r="1.15" fill="currentColor" stroke="none"/><circle cx="17.8" cy="17.3" r="1" fill="currentColor" stroke="none"/><circle cx="6.1" cy="8" r="0.95" fill="currentColor" stroke="none"/><circle cx="7.1" cy="18.2" r="0.9" fill="currentColor" stroke="none"/><circle cx="11.2" cy="6.4" r="0.9" fill="currentColor" stroke="none"/></svg>',search:'<svg viewBox="0 0 24 24" aria-hidden="true" fill="none" stroke="currentColor" stroke-width="1.15" stroke-linecap="round" stroke-linejoin="round"><ellipse cx="12" cy="6.5" rx="6.9" ry="2.1"/><path d="M5.7 6.8c1 3.1 3 5.6 6.3 11.5"/><path d="M18.3 6.8c-1 3.1-3 5.6-6.3 11.5"/><circle cx="12" cy="19.8" r="1.55" fill="currentColor" stroke="none"/><circle cx="12" cy="9.2" r="0.8" fill="currentColor" stroke="none"/><circle cx="9.2" cy="8.6" r="0.65" fill="currentColor" stroke="none"/><circle cx="14.9" cy="8.3" r="0.65" fill="currentColor" stroke="none"/><circle cx="10.2" cy="11.2" r="0.55" fill="currentColor" stroke="none"/><circle cx="13.8" cy="11" r="0.55" fill="currentColor" stroke="none"/><circle cx="12" cy="12.9" r="0.55" fill="currentColor" stroke="none"/><circle cx="11" cy="15.1" r="0.45" fill="currentColor" stroke="none"/><circle cx="13" cy="15.6" r="0.45" fill="currentColor" stroke="none"/><circle cx="8.2" cy="4.2" r="0.45" fill="currentColor" stroke="none"/><circle cx="15.8" cy="3.9" r="0.45" fill="currentColor" stroke="none"/></svg>',compose:'<svg viewBox="0 0 24 24" aria-hidden="true" fill="none" stroke="currentColor" stroke-width="1.45" stroke-linecap="round"><circle cx="12" cy="12" r="2.45" fill="currentColor" stroke="none"/><path d="M12 2.9v5.1M12 16v5.1M2.9 12h5.1M16 12h5.1M5.5 5.5l3.6 3.6M14.9 14.9l3.6 3.6M18.5 5.5l-3.6 3.6M9.1 14.9l-3.6 3.6"/></svg>',issue:'<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M6 4h12a2 2 0 0 1 2 2v12H8a2 2 0 0 0-2 2z"/><path d="M6 4a2 2 0 0 0-2 2v14h14"/></svg>',profile:'<svg viewBox="0 0 24 24" aria-hidden="true" fill="none" stroke="currentColor" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round"><path d="M3.8 16.8c2.3-2.6 4.9-5.1 7.1-7.6 1.1-1.2 2-2.2 2.7-2.2.7 0 1.1.6 1.1 1.4 0 1.1-.5 2.1-.6 3.2 2.1-2.5 4.3-4.3 6.4-4.3-.6 1.4-1.7 2.6-2.6 3.8-.8 1-.9 1.8.3 1.8h2.1"/><path d="M4.1 17.1c3.8-.2 8.5-.4 16-.7"/><circle cx="20.6" cy="8" r="0.85" fill="currentColor" stroke="none"/></svg>',heart:'<svg viewBox="0 0 24 24" aria-hidden="true" fill="none" stroke="currentColor" stroke-width="1.25" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="2.5" fill="currentColor" stroke="none"/><circle cx="12" cy="12" r="4.7"/><circle cx="12" cy="12" r="7"/><circle cx="12" cy="12" r="9.2" opacity="0.68"/></svg>',comment:'<svg viewBox="0 0 24 24" aria-hidden="true" fill="none" stroke="currentColor" stroke-width="1.35" stroke-linecap="round" stroke-linejoin="round"><path d="M4.8 12.2c0-3.4 2.8-6.1 6.2-6.1 3.3 0 5.8 2.4 5.8 5.4 0 3.1-2.6 5.4-6.2 5.4-.8 0-1.6-.1-2.3-.4l-3.3 1 .9-2.7c-.7-.8-1.1-1.7-1.1-2.6Z"/><path d="m14.2 8.3 5 1.1-2 1.9 1.9 5-4.9-1.9-1.9 2Z" opacity="0.8"/></svg>',save:'<svg viewBox="0 0 24 24" aria-hidden="true" fill="none" stroke="currentColor" stroke-width="1.25" stroke-linecap="round" stroke-linejoin="round"><path d="M12 3.6 18.2 7v10L12 20.4 5.8 17V7Z"/><path d="M12 3.6v6.3M18.2 7 12 9.9 5.8 7"/><path d="M12 9.9v10.5"/><circle cx="12" cy="12" r="2.1" fill="currentColor" stroke="none"/></svg>',tag:'<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M20 11.5 11.5 20 4 12.5V5h7.5Z"/><circle cx="15.5" cy="8.5" r="1"/></svg>',spark:'<svg viewBox="0 0 24 24" aria-hidden="true"><path d="m12 3 1.9 5.1L19 10l-5.1 1.9L12 17l-1.9-5.1L5 10l5.1-1.9Z"/></svg>',arrowLeft:'<svg viewBox="0 0 24 24" aria-hidden="true" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M15.5 5.5 9 12l6.5 6.5"/><path d="M9.5 12h9"/></svg>',recommended:'<svg viewBox="0 0 24 24" aria-hidden="true" fill="none" stroke="currentColor" stroke-width="1.35" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="5.3" r="2.5" fill="currentColor" stroke="none"/><circle cx="5.8" cy="17.6" r="2.6" fill="currentColor" stroke="none"/><circle cx="18.2" cy="17.6" r="2.6" fill="currentColor" stroke="none"/><path d="M7.9 15.8 10.6 8.1"/><path d="M16.1 15.8 13.4 8.1"/><path d="M8.8 17.6h6.4"/></svg>',follow:'<svg viewBox="0 0 24 24" aria-hidden="true" fill="none" stroke="currentColor" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round"><circle cx="8.3" cy="17.5" r="3.1" fill="currentColor" stroke="none"/><circle cx="16.4" cy="8.2" r="2.5" fill="currentColor" stroke="none"/><path d="M5.1 18.7c1.3-4.2 5-7.2 9.5-7.2 1.5 0 3 .3 4.2.9"/><path d="M5 18.9c1.8 0 3.3-.6 5.1-1.7 3-1.9 5.1-4.7 7.1-8"/><path d="m17.6 6.2 1.9 1.1-1 2.1" /></svg>',close:'<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M6 6 18 18M18 6 6 18"/></svg>',image:'<svg viewBox="0 0 24 24" aria-hidden="true"><rect x="4" y="5" width="16" height="14" rx="2"/><path d="m8 15 2.5-2.5L13 15l2.5-3 2.5 3"/><circle cx="9" cy="9" r="1.2"/></svg>',trash:'<svg viewBox="0 0 24 24" aria-hidden="true" fill="none" stroke="currentColor" stroke-width="1.35" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="7.6" opacity="0.45"/><path d="M7.1 7.1 16.9 16.9"/><path d="M16.9 7.1 7.1 16.9"/><circle cx="12" cy="12" r="1.15" fill="currentColor" stroke="none"/></svg>',edit:'<svg viewBox="0 0 24 24" aria-hidden="true" fill="none" stroke="currentColor" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round"><path d="M5.4 8.2h8.2v10.2H5.4z"/><path d="M9 5.1h9.1l-4.9 5.1H9z"/><path d="M6.3 16.8 16.7 6.4"/><circle cx="12" cy="11.5" r="0.95" fill="currentColor" stroke="none"/></svg>',drag:'<svg viewBox="0 0 24 24" aria-hidden="true" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M12 4v16M4 12h16"/><path d="m12 4-2.8 2.8M12 4l2.8 2.8M20 12l-2.8-2.8M20 12l-2.8 2.8M12 20l-2.8-2.8M12 20l2.8-2.8M4 12l2.8-2.8M4 12l2.8 2.8"/></svg>'}[e]||""}function We(e,t,a="avatar"){return e?`<img class="avatar__image" src="${e}" alt="${a}" />`:`<span class="avatar__label">${t}</span>`}function xi(e){var t;return e?`
    <div class="overlay" data-close-comments>
      <section class="modal modal--comments" role="dialog" aria-modal="true" aria-label="Comments" onclick="event.stopPropagation()">
        <div class="modal__header">
          <h3 class="modal__title">Comments</h3>
          <button class="modal__close" data-close-comments aria-label="Close">${G("close")}</button>
        </div>
        <div class="comments-list">
          ${(t=e.comments)!=null&&t.length?e.comments.map(a=>`
            <article class="comment-item">
              <p class="comment-item__text">${a.text}</p>
              <span class="comment-item__date">${Jt(a.createdAt)}</span>
            </article>
          `).join(""):'<p class="empty-copy">No comments yet.</p>'}
        </div>
        <form class="comment-form" data-comment-form="${e.id}">
          <input class="field__input" type="text" name="comment" maxlength="80" placeholder="Write a comment" required />
          <button class="button button--primary" type="submit">Post</button>
        </form>
      </section>
    </div>
  `:""}const Gt="memories-static-site-state-v1";function _i(){try{const e=localStorage.getItem(Gt);return e?JSON.parse(e):null}catch{return null}}function Si(e){localStorage.setItem(Gt,JSON.stringify(e))}function xt(e="id"){return`${e}_${Math.random().toString(36).slice(2,9)}_${Date.now().toString(36)}`}const dt={profile:{name:"you",bio:"A small local profile to collect your memories.",avatarData:""},posts:[],issues:[],followingAuthors:[]};function $i(e){return{id:e.id,authorName:e.authorName||"you",authorIcon:e.authorIcon||(e.authorName||"U").trim().slice(0,1).toUpperCase(),authorAvatarData:e.authorAvatarData||"",caption:e.caption||"",imageData:e.imageData||"",fixedTags:Array.isArray(e.fixedTags)?e.fixedTags:[],freeTags:Array.isArray(e.freeTags)?e.freeTags:[],likes:Number(e.likes||0),saves:Number(e.saves||0),comments:Array.isArray(e.comments)?e.comments:[],impressions:Number(e.impressions||0),liked:!!e.liked,saved:!!e.saved,createdAt:e.createdAt||new Date().toISOString(),updatedAt:e.updatedAt||null,composeData:e.composeData||null}}function Ti(e){var t,a,o;return e?{profile:{name:((t=e.profile)==null?void 0:t.name)||dt.profile.name,bio:((a=e.profile)==null?void 0:a.bio)||dt.profile.bio,avatarData:((o=e.profile)==null?void 0:o.avatarData)||""},posts:Array.isArray(e.posts)?e.posts.map($i):[],issues:Array.isArray(e.issues)?e.issues:[],followingAuthors:Array.isArray(e.followingAuthors)?e.followingAuthors:[]}:structuredClone(dt)}let ne=Ti(_i());function Je(){return ne}function ve(e){ne=e,Si(ne)}function ki(e){const t=structuredClone(ne);t.posts.unshift({id:xt("post"),authorName:e.authorName,authorIcon:(e.authorName||"U").trim().slice(0,1).toUpperCase(),authorAvatarData:ne.profile.avatarData||"",caption:e.caption||"",imageData:e.imageData,fixedTags:e.fixedTags||[],freeTags:e.freeTags||[],likes:0,saves:0,comments:[],impressions:0,liked:!1,saved:!1,createdAt:new Date().toISOString(),updatedAt:null,composeData:e.composeData||null}),ve(t)}function Mi(e,t){const a=structuredClone(ne),o=a.posts.find(n=>n.id===e);o&&(o.caption=t.caption??o.caption,o.imageData=t.imageData??o.imageData,o.fixedTags=Array.isArray(t.fixedTags)?t.fixedTags:o.fixedTags,o.freeTags=Array.isArray(t.freeTags)?t.freeTags:o.freeTags,o.composeData=t.composeData??o.composeData,o.updatedAt=new Date().toISOString(),ve(a))}function Ii(e){const t=structuredClone(ne);t.posts.some(o=>o.id===e)&&(t.posts=t.posts.filter(o=>o.id!==e),t.issues=t.issues.map(o=>({...o,postIds:(o.postIds||[]).filter(n=>n!==e)})).filter(o=>o.postIds.length),ve(t))}function Li(e){const t=structuredClone(ne),a=t.posts.find(o=>o.id===e);a&&(a.liked=!a.liked,a.likes+=a.liked?1:-1,ve(t))}function Pi(e){const t=structuredClone(ne),a=t.posts.find(o=>o.id===e);a&&(a.saved=!a.saved,a.saves+=a.saved?1:-1,ve(t))}function Ei(e,t){const a=structuredClone(ne),o=a.posts.find(n=>n.id===e);!o||!t.trim()||(o.comments.unshift({id:xt("comment"),text:t.trim(),createdAt:new Date().toISOString()}),ve(a))}function Ci(e){const t=structuredClone(ne),a=t.posts.find(o=>o.id===e);a&&(a.impressions+=1,ve(t))}function Ai(e){const t=structuredClone(ne),a=t.profile.name,o=e.avatarData||"";t.profile.name=e.name,t.profile.bio=e.bio,t.profile.avatarData=o,t.posts=t.posts.map(n=>n.authorName===a?{...n,authorName:e.name,authorIcon:(e.name||"U").trim().slice(0,1).toUpperCase(),authorAvatarData:o}:n),t.followingAuthors=t.followingAuthors.map(n=>n===a?e.name:n),ve(t)}function Bi(e){const t=structuredClone(ne),a=t.followingAuthors.includes(e);t.followingAuthors=a?t.followingAuthors.filter(o=>o!==e):[...t.followingAuthors,e],ve(t)}function Ni(e){const t=structuredClone(ne);t.issues.unshift({id:xt("issue"),title:e.title,subtitle:e.subtitle,tone:e.tone,postIds:e.postIds,createdAt:new Date().toISOString()}),ve(t)}function Di(){return`
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
  `}function Ri(e){return[...e].sort((t,a)=>Ht(a)-Ht(t))}function Ht(e){var u;const t=(e.likes||0)*2+(e.saves||0)*2+(((u=e.comments)==null?void 0:u.length)||0)*1.5+(e.impressions||0)*1.2,a=vi(e.createdAt)?120:0,n=220/Math.max(1,(Date.now()-new Date(e.createdAt).getTime())/(1e3*60*60));return t+a+n}function Hi(e,{query:t="",tags:a=[]}={}){const o=t.trim().toLowerCase();return e.filter(n=>{const u=[n.authorName,n.caption||"",...n.fixedTags||[],...n.freeTags||[]].join(" ").toLowerCase(),m=!o||u.includes(o),r=!a.length||a.every(i=>[...n.fixedTags||[],...n.freeTags||[]].includes(i));return m&&r})}function Wi(e){return e==="system"?typeof window<"u"&&typeof window.matchMedia=="function"&&window.matchMedia("(prefers-color-scheme: dark)").matches?"dark":"light":e==="dark"?"dark":"light"}function qi(e){return e==="system"?"System":e==="dark"?"Dark":"White"}function zi(e,t){return e==="system"?`OS ${t==="dark"?"Dark":"White"}`:"Tap to switch"}function Oi(e,t){const a=e.posts||[];return t==="following"?a.filter(o=>e.followingAuthors.includes(o.authorName)):Ri(a)}const at=[{x:70,y:78,w:210,h:300},{x:382,y:116,w:122,h:148},{x:566,y:82,w:214,h:320},{x:78,y:448,w:214,h:304},{x:360,y:318,w:204,h:434},{x:598,y:470,w:190,h:260},{x:88,y:834,w:156,h:196},{x:344,y:786,w:182,h:264},{x:640,y:872,w:142,h:172}],Wt=860,qt=1120,Fi=980,Xi=1260;function zt(e){const t=e%2,a=Math.floor(e/2);return{x:120+t*Fi,y:80+a*Xi}}function Yi(e,t,a){return`
    <article
      class="timeline-particle"
      style="left:${a.x+t.x}px; top:${a.y+t.y}px; width:${t.w}px; height:${t.h}px;"
    >
      <button class="timeline-particle__author" type="button" data-open-author="${e.authorName}" aria-label="Open ${e.authorName} profile">
        ${We(e.authorAvatarData,e.authorIcon,`${e.authorName} avatar`)}
      </button>
      <button class="timeline-particle__image-button" type="button" data-open-preview="${e.id}" aria-label="Open ${e.authorName} post">
        <img class="timeline-particle__image" src="${e.imageData}" alt="${e.authorName} post" />
      </button>
    </article>
  `}function Ui(e){const t=Math.max(1,Math.ceil(e.length/at.length)),a=Array.from({length:t},(n,u)=>{const m=zt(u),r=e.slice(u*at.length,(u+1)*at.length);return{placement:m,html:`
        <section
          class="timeline-board"
          style="left:${m.x}px; top:${m.y}px; width:${Wt}px; height:${qt}px;"
          aria-hidden="true"
        ></section>
        ${r.map((i,p)=>Yi(i,at[p],m)).join("")}
      `}});if(!e.length)return{width:1280,height:1120,html:`
        <div class="timeline-field__empty">
        <p class="timeline-field__empty-title">No posts yet</p>
        <p class="timeline-field__empty-copy">Create your first memory and it will appear here.</p>
      </div>
      `};const o=zt(t-1);return{width:o.x+Wt+140,height:o.y+qt+140,html:a.map(n=>n.html).join("")}}function Ot(e,t){const a=(t==null?void 0:t.homeTheme)||"dark",o=Wi(a),n=(t==null?void 0:t.homeCoreState)||"default",u=qi(a),m=zi(a,o);return`
    <section class="page orbit-home orbit-home--${o} orbit-home--mode-${a} orbit-home--${n}">
      <div class="orbit-stage">
        <button class="orbit-node orbit-node--theme orbit-node--theme-mode-${a}" type="button" data-home-theme-toggle aria-label="Switch main page theme">
          <strong class="orbit-node__title">${u}</strong>
          <span class="orbit-node__meta">${m}</span>
        </button>
        <div class="orbit-stage__noise" aria-hidden="true"></div>
        <div class="orbit-stage__glow orbit-stage__glow--a" aria-hidden="true"></div>
        <div class="orbit-stage__glow orbit-stage__glow--b" aria-hidden="true"></div>
        <div class="orbit-stage__glow orbit-stage__glow--c" aria-hidden="true"></div>

        <button class="orbit-node orbit-node--timeline" type="button" data-home-nav="timeline">
          <span class="orbit-node__icon" aria-hidden="true">${G("timeline")}</span>
          <strong class="orbit-node__title">Timeline</strong>
        </button>

        <button class="orbit-node orbit-node--profile" type="button" data-home-nav="profile">
          <span class="orbit-node__icon" aria-hidden="true">${G("profile")}</span>
          <strong class="orbit-node__title">Profile</strong>
        </button>

        <button class="orbit-node orbit-node--search" type="button" data-home-nav="search">
          <span class="orbit-node__icon" aria-hidden="true">${G("search")}</span>
          <strong class="orbit-node__title">Search</strong>
        </button>

        <button class="orbit-node orbit-node--compose" type="button" data-home-nav="compose">
          <span class="orbit-node__icon" aria-hidden="true">${G("compose")}</span>
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
  `}function ji(e,t){var n,u;const a=Oi(e,t.timelineTab),o=Ui(a);return`
    <section class="page timeline-page">
      <div class="timeline-screen">
        <header class="timeline-screen__chrome">
          <button class="timeline-screen__back" type="button" data-home-nav="home" aria-label="Back to main page">
            <span>${G("arrowLeft")}</span>
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
  `}function Ji(e){const t=[...e.fixedTags||[],...e.freeTags||[]];return t.length?t.map(a=>`<span class="chip chip--soft">${a}</span>`).join(""):'<div class="post-card__tags-empty">No tags yet</div>'}function Vt(e,t={}){var m;const{mode:a="full"}=t,o=a!=="compact",n=a==="full",u=a!=="minimal";return`
    <article class="post-card post-card--${a}" data-post-id="${e.id}">
      ${o?`
        <div class="post-card__head">
          <button class="avatar avatar-button" type="button" data-open-author="${e.authorName}" aria-label="Open ${e.authorName} profile">
            ${We(e.authorAvatarData,e.authorIcon,`${e.authorName} avatar`)}
          </button>
          <div class="post-card__author-wrap">
            <p class="post-card__author">${e.authorName}</p>
            <p class="post-card__time">${wi(e.createdAt)}</p>
          </div>
        </div>
      `:""}

      <button class="post-card__image-button" data-open-preview="${e.id}" aria-label="Open post image">
        <img class="post-card__image" src="${e.imageData}" alt="${e.authorName} post" />
      </button>

      ${n?`
        <div class="post-card__caption-row">
          <button class="tag-toggle" data-toggle-tags="${e.id}">${G("tag")} tags</button>
          ${e.caption?`<p class="post-card__caption">${e.caption}</p>`:'<p class="post-card__caption post-card__caption--empty">No caption</p>'}
        </div>

        <div class="post-card__tags" data-tags-panel="${e.id}" hidden>
          ${Ji(e)}
        </div>
      `:""}

      <div class="post-card__meta">
        ${u?`<span class="post-card__date">${jt(e.createdAt)}</span>`:"<span></span>"}
        <div class="post-card__actions">
          <button class="icon-button ${e.liked?"is-active":""}" data-like="${e.id}" aria-label="Like post">
            ${G("heart")}
            <span>${e.likes}</span>
          </button>
          <button class="icon-button" data-comment="${e.id}" aria-label="Open comments">
            ${G("comment")}
            <span>${((m=e.comments)==null?void 0:m.length)||0}</span>
          </button>
          <button class="icon-button ${e.saved?"is-active":""}" data-save="${e.id}" aria-label="Save post">
            ${G("save")}
            <span>${e.saves}</span>
          </button>
        </div>
      </div>
    </article>
  `}const Zt={activity:["ご飯","朝ごはん","ランチ","ディナー","カフェ","散歩","買い物","ドライブ","旅行","イベント"],mood:["まったり","おしゃれ","落ち着く","ロマンチック","ワクワク","にぎやか"],scene:["初デート","休日","昼デート","夜デート","記念日","雨の日"],budget:["低予算","ふつう","ちょっと贅沢"],time:["朝","昼","夕方","夜"]},Gi={activity:"デート内容",mood:"雰囲気",scene:"シーン",budget:"予算感",time:"時間帯"},Vi=Object.values(Zt).flat();function Zi(e){return Vi.map(t=>`
    <button class="chip chip--filter ${e.includes(t)?"is-active":""}" data-search-tag="${t}">${t}</button>
  `).join("")}function Qi(e,t){const a=t.searchTags||[],o=Hi(e.posts||[],{query:t.searchQuery||"",tags:a}),n=o.length?`
      <div class="feed-grid">
        ${o.map(u=>Vt(u,{mode:"compact"})).join("")}
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
        ${Zi(a)}
      </div>

      ${n}
    </section>
  `}const Qt={id:"page1",label:"Page 1",description:"Template 1",async render(e,t,a,o){const{addWrappedText:n,drawFileCover:u,drawSlotPlaceholder:m,defaults:r}=o,i={x:84,y:84,width:1072,height:1586};e.fillStyle="#191514",e.textBaseline="top";const p={x:i.x+i.width*.55,y:i.y+i.height*.125,width:i.width*.36,height:i.width*.36,radius:0},y={x:i.x+i.width*.08,y:i.y+i.height*.48,width:i.width*.45,height:i.height*.39,radius:0};a.secondary.file?await u(e,a.secondary.file,p,a.secondary.position):m(e,p),a.primary.file?await u(e,a.primary.file,y,a.primary.position):m(e,y),e.font='600 78px "Cormorant Garamond", "Times New Roman", serif',n(e,t.headline||r.headline,{x:i.x+i.width*.07,y:i.y+i.height*.058,maxWidth:i.width*.7,lineHeight:82,maxLines:2}),e.font='500 32px "Noto Sans JP", sans-serif',n(e,t.subhead||r.subhead,{x:i.x+i.width*.07,y:i.y+i.height*.132,maxWidth:i.width*.7,lineHeight:42,maxLines:3}),e.font='500 33px "Noto Sans JP", sans-serif',n(e,t.intro||r.intro,{x:i.x+i.width*.085,y:i.y+i.height*.215,maxWidth:i.width*.37,lineHeight:48,maxLines:4}),e.font='500 31px "Noto Sans JP", sans-serif',n(e,t.body||r.body,{x:i.x+i.width*.585,y:i.y+i.height*.625,maxWidth:i.width*.245,lineHeight:46,maxLines:6}),e.font='500 28px "Noto Sans JP", sans-serif',n(e,t.date||r.date,{x:i.x+i.width*.08,y:i.y+i.height*.895,maxWidth:i.width*.31,lineHeight:34,maxLines:1});const S=t.editor||r.editor,C=i.width*.32,E=i.x+i.width*.92-Math.min(C,e.measureText(S).width);n(e,S,{x:E,y:i.y+i.height*.895,maxWidth:C,lineHeight:34,maxLines:1})}},Ki={id:"page2",label:"Page 2",description:"Template 2",async render(e,t,a,o){const{addWrappedText:n,clipRoundedRect:u,drawFileCover:m,drawSlotPlaceholder:r,defaults:i}=o,p={x:84,y:84,width:1072,height:1586};e.fillStyle="#191514",e.textBaseline="top";const y={x:p.x+p.width*.138,y:p.y+p.height*.142,width:p.width*.724,height:p.height*.374,radius:0};a.primary.file?await m(e,a.primary.file,y,a.primary.position):r(e,y),e.font='600 60px "Cormorant Garamond", "Times New Roman", serif',n(e,t.headline||i.headline,{x:p.x+p.width*.142,y:p.y+p.height*.565,maxWidth:p.width*.66,lineHeight:66,maxLines:2}),e.font='500 30px "Noto Sans JP", sans-serif',n(e,t.subhead||i.subhead,{x:p.x+p.width*.142,y:p.y+p.height*.634,maxWidth:p.width*.68,lineHeight:40,maxLines:2}),e.font='500 28px "Noto Sans JP", sans-serif',n(e,t.intro||i.intro,{x:p.x+p.width*.142,y:p.y+p.height*.698,maxWidth:p.width*.66,lineHeight:38,maxLines:4}),e.font='500 28px "Noto Sans JP", sans-serif',n(e,t.body||i.body,{x:p.x+p.width*.142,y:p.y+p.height*.792,maxWidth:p.width*.66,lineHeight:38,maxLines:4}),e.font='500 24px "Noto Sans JP", sans-serif',n(e,t.date||i.date,{x:p.x+p.width*.142,y:p.y+p.height*.948,maxWidth:p.width*.28,lineHeight:30,maxLines:1});const S=t.editor||i.editor;e.font='500 24px "Noto Sans JP", sans-serif';const C=p.width*.28,E=p.x+p.width*.86-Math.min(C,e.measureText(S).width);n(e,S,{x:E,y:p.y+p.height*.948,maxWidth:C,lineHeight:30,maxLines:1})}},ea={id:"page3",label:"Page 3",description:"Template 3",async render(e,t,a,o){const{addWrappedText:n,drawFileCover:u,drawSlotPlaceholder:m,defaults:r}=o,i={x:84,y:84,width:1072,height:1586};e.fillStyle="#191514",e.textBaseline="top";const p={x:i.x+i.width*.14,y:i.y+i.height*.22,width:i.width*.58,height:i.height*.36,radius:0},y={x:i.x+i.width*.74,y:i.y+i.height*.72,width:i.width*.14,height:i.height*.15,radius:0};a.primary.file?await u(e,a.primary.file,p,a.primary.position):m(e,p),a.secondary.file?await u(e,a.secondary.file,y,a.secondary.position):m(e,y),e.font='600 58px "Cormorant Garamond", "Times New Roman", serif',n(e,t.headline||r.headline,{x:i.x+i.width*.12,y:i.y+i.height*.075,maxWidth:i.width*.66,lineHeight:64,maxLines:2}),e.font='500 28px "Noto Sans JP", sans-serif',n(e,t.subhead||r.subhead,{x:i.x+i.width*.12,y:i.y+i.height*.145,maxWidth:i.width*.66,lineHeight:36,maxLines:2}),e.font='500 26px "Noto Sans JP", sans-serif',n(e,t.intro||r.intro,{x:i.x+i.width*.13,y:i.y+i.height*.675,maxWidth:i.width*.32,lineHeight:34,maxLines:4}),e.font='500 26px "Noto Sans JP", sans-serif',n(e,t.body||r.body,{x:i.x+i.width*.13,y:i.y+i.height*.79,maxWidth:i.width*.32,lineHeight:34,maxLines:3}),e.font='500 24px "Noto Sans JP", sans-serif',n(e,t.date||r.date,{x:i.x+i.width*.13,y:i.y+i.height*.915,maxWidth:i.width*.2,lineHeight:30,maxLines:1});const S=t.editor||r.editor,C=i.width*.16,E=i.x+i.width*.9-Math.min(C,e.measureText(S).width);n(e,S,{x:E,y:i.y+i.height*.915,maxWidth:C,lineHeight:30,maxLines:1})}},ta={id:"page4",label:"Page 4",description:"Template 4",async render(e,t,a,o){const{addWrappedText:n,drawFileCover:u,drawSlotPlaceholder:m,defaults:r}=o,i={x:84,y:84,width:1072,height:1586};e.fillStyle="#191514",e.textBaseline="top";const p={x:i.x+i.width*.11,y:i.y+i.height*.59,width:i.width*.34,height:i.height*.25,radius:0},y={x:i.x+i.width*.59,y:i.y+i.height*.13,width:i.width*.24,height:i.height*.29,radius:0};a.primary.file?await u(e,a.primary.file,p,a.primary.position):m(e,p),a.secondary.file?await u(e,a.secondary.file,y,a.secondary.position):m(e,y),e.font='600 52px "Cormorant Garamond", "Times New Roman", serif',n(e,t.headline||r.headline,{x:i.x+i.width*.11,y:i.y+i.height*.11,maxWidth:i.width*.28,lineHeight:58,maxLines:2}),e.font='500 27px "Noto Sans JP", sans-serif',n(e,t.subhead||r.subhead,{x:i.x+i.width*.11,y:i.y+i.height*.205,maxWidth:i.width*.28,lineHeight:34,maxLines:2}),e.font='500 26px "Noto Sans JP", sans-serif',n(e,t.intro||r.intro,{x:i.x+i.width*.11,y:i.y+i.height*.295,maxWidth:i.width*.28,lineHeight:34,maxLines:4}),e.font='500 26px "Noto Sans JP", sans-serif',n(e,t.body||r.body,{x:i.x+i.width*.58,y:i.y+i.height*.55,maxWidth:i.width*.2,lineHeight:34,maxLines:4}),e.font='500 24px "Noto Sans JP", sans-serif',n(e,t.date||r.date,{x:i.x+i.width*.58,y:i.y+i.height*.87,maxWidth:i.width*.14,lineHeight:30,maxLines:1});const S=t.editor||r.editor,C=i.width*.15,E=i.x+i.width*.88-Math.min(C,e.measureText(S).width);n(e,S,{x:E,y:i.y+i.height*.87,maxWidth:C,lineHeight:30,maxLines:1})}},ia={id:"page5",label:"Page 5",description:"Template 5",async render(e,t,a,o){const{addWrappedText:n,drawFileCover:u,drawSlotPlaceholder:m,defaults:r}=o,i={x:84,y:84,width:1072,height:1586};e.fillStyle="#191514",e.textBaseline="top";const p={x:i.x+i.width*.49,y:i.y+i.height*.12,width:i.width*.34,height:i.height*.42,radius:0},y={x:i.x+i.width*.12,y:i.y+i.height*.74,width:i.width*.25,height:i.height*.16,radius:0};a.primary.file?await u(e,a.primary.file,p,a.primary.position):m(e,p),a.secondary.file?await u(e,a.secondary.file,y,a.secondary.position):m(e,y),e.font='600 50px "Cormorant Garamond", "Times New Roman", serif',n(e,t.headline||r.headline,{x:i.x+i.width*.12,y:i.y+i.height*.12,maxWidth:i.width*.21,lineHeight:54,maxLines:3}),e.font='500 26px "Noto Sans JP", sans-serif',n(e,t.subhead||r.subhead,{x:i.x+i.width*.12,y:i.y+i.height*.265,maxWidth:i.width*.21,lineHeight:34,maxLines:3}),e.font='500 26px "Noto Sans JP", sans-serif',n(e,t.intro||r.intro,{x:i.x+i.width*.12,y:i.y+i.height*.42,maxWidth:i.width*.21,lineHeight:34,maxLines:5}),e.font='500 26px "Noto Sans JP", sans-serif',n(e,t.body||r.body,{x:i.x+i.width*.51,y:i.y+i.height*.69,maxWidth:i.width*.24,lineHeight:34,maxLines:4}),e.font='500 24px "Noto Sans JP", sans-serif',n(e,t.date||r.date,{x:i.x+i.width*.51,y:i.y+i.height*.89,maxWidth:i.width*.14,lineHeight:30,maxLines:1});const S=t.editor||r.editor,C=i.width*.15,E=i.x+i.width*.88-Math.min(C,e.measureText(S).width);n(e,S,{x:E,y:i.y+i.height*.89,maxWidth:C,lineHeight:30,maxLines:1})}},aa={id:"page6",label:"Page 6",description:"Template 6",async render(e,t,a,o){var T;const{addWrappedText:n,drawFileCover:u,drawSlotPlaceholder:m,defaults:r}=o,i={x:84,y:84,width:1072,height:1586};e.fillStyle="#191514",e.textBaseline="top";const p={x:i.x+i.width*.2,y:i.y+i.height*.3,width:i.width*.46,height:i.height*.36,radius:0},y={x:i.x+i.width*.12,y:i.y+i.height*.075,width:i.width*.2,height:i.height*.14,radius:0},S={x:i.x+i.width*.69,y:i.y+i.height*.8,width:i.width*.15,height:i.height*.1,radius:0};a.primary.file?await u(e,a.primary.file,p,a.primary.position):m(e,p),a.secondary.file?await u(e,a.secondary.file,y,a.secondary.position):m(e,y),(T=a.accent)!=null&&T.file?await u(e,a.accent.file,S,a.accent.position):m(e,S),e.font='600 48px "Cormorant Garamond", "Times New Roman", serif',n(e,t.headline||r.headline,{x:i.x+i.width*.5,y:i.y+i.height*.1,maxWidth:i.width*.2,lineHeight:52,maxLines:2}),e.font='500 26px "Noto Sans JP", sans-serif',n(e,t.subhead||r.subhead,{x:i.x+i.width*.5,y:i.y+i.height*.18,maxWidth:i.width*.2,lineHeight:34,maxLines:3}),e.font='500 26px "Noto Sans JP", sans-serif',n(e,t.intro||r.intro,{x:i.x+i.width*.12,y:i.y+i.height*.74,maxWidth:i.width*.22,lineHeight:34,maxLines:4}),e.font='500 26px "Noto Sans JP", sans-serif',n(e,t.body||r.body,{x:i.x+i.width*.44,y:i.y+i.height*.74,maxWidth:i.width*.14,lineHeight:34,maxLines:4}),e.font='500 24px "Noto Sans JP", sans-serif',n(e,t.date||r.date,{x:i.x+i.width*.12,y:i.y+i.height*.905,maxWidth:i.width*.16,lineHeight:30,maxLines:1});const C=t.editor||r.editor,E=i.width*.14,A=i.x+i.width*.88-Math.min(E,e.measureText(C).width);n(e,C,{x:A,y:i.y+i.height*.905,maxWidth:E,lineHeight:30,maxLines:1})}},oa={id:"page7",label:"Page 7",description:"Template 7",async render(e,t,a,o){var T;const{addWrappedText:n,drawFileCover:u,drawSlotPlaceholder:m,defaults:r}=o,i={x:84,y:84,width:1072,height:1586};e.fillStyle="#191514",e.textBaseline="top";const p={x:i.x+i.width*.12,y:i.y+i.height*.15,width:i.width*.3,height:i.height*.18,radius:0},y={x:i.x+i.width*.56,y:i.y+i.height*.48,width:i.width*.3,height:i.height*.18,radius:0},S={x:i.x+i.width*.12,y:i.y+i.height*.75,width:i.width*.3,height:i.height*.18,radius:0};a.primary.file?await u(e,a.primary.file,p,a.primary.position):m(e,p),a.secondary.file?await u(e,a.secondary.file,y,a.secondary.position):m(e,y),(T=a.accent)!=null&&T.file?await u(e,a.accent.file,S,a.accent.position):m(e,S),e.font='600 44px "Cormorant Garamond", "Times New Roman", serif',n(e,t.headline||r.headline,{x:i.x+i.width*.58,y:i.y+i.height*.16,maxWidth:i.width*.19,lineHeight:48,maxLines:2}),e.font='500 25px "Noto Sans JP", sans-serif',n(e,t.subhead||r.subhead,{x:i.x+i.width*.58,y:i.y+i.height*.245,maxWidth:i.width*.19,lineHeight:32,maxLines:3}),e.font='500 25px "Noto Sans JP", sans-serif',n(e,t.intro||r.intro,{x:i.x+i.width*.15,y:i.y+i.height*.41,maxWidth:i.width*.2,lineHeight:32,maxLines:4}),e.font='500 25px "Noto Sans JP", sans-serif',n(e,t.body||r.body,{x:i.x+i.width*.59,y:i.y+i.height*.77,maxWidth:i.width*.19,lineHeight:32,maxLines:4}),e.font='500 24px "Noto Sans JP", sans-serif',n(e,t.date||r.date,{x:i.x+i.width*.58,y:i.y+i.height*.91,maxWidth:i.width*.12,lineHeight:30,maxLines:1});const C=t.editor||r.editor,E=i.width*.14,A=i.x+i.width*.88-Math.min(E,e.measureText(C).width);n(e,C,{x:A,y:i.y+i.height*.91,maxWidth:E,lineHeight:30,maxLines:1})}},H={x:.06,y:.06,width:.88,height:.88},Re=.015,Ft={densityMode:"whitespace",recoveryMode:"restore"},ft={width:.14,height:.12},Pe={width:.18,height:.08},na={primary:{x:.08,y:.16,width:.4,height:.3},secondary:{x:.58,y:.12,width:.24,height:.2},accent:{x:.56,y:.58,width:.26,height:.18}},sa={headline:{x:.08,y:.07,width:.46,height:.1,fontSize:.056,lineHeight:1.08,align:"left",family:"serif",weight:600},subhead:{x:.08,y:.16,width:.48,height:.07,fontSize:.023,lineHeight:1.34,align:"left",family:"sans",weight:500},intro:{x:.08,y:.52,width:.28,height:.18,fontSize:.021,lineHeight:1.42,align:"left",family:"sans",weight:500},body:{x:.62,y:.42,width:.22,height:.24,fontSize:.021,lineHeight:1.42,align:"left",family:"sans",weight:500},date:{x:.08,y:.91,width:.22,height:.04,fontSize:.019,lineHeight:1.25,align:"left",family:"sans",weight:500},editor:{x:.66,y:.91,width:.2,height:.04,fontSize:.019,lineHeight:1.25,align:"right",family:"sans",weight:500}},ra=[{id:"image-1",x:.1,y:.14,width:.38,height:.34}];function Ie(e,t,a){return Math.min(a,Math.max(t,e))}function Xe(e){return Math.round(e/Re)*Re}function Kt(e,t,a){return typeof t=="string"&&t.trim()?t.trim():`${e}-${a+1}`}function _t(e,t=""){return String(e??t).replace(/\r/g,"")}function ei(e,t){const a=Ie(Xe(Number.isFinite(e.width)?e.width:t.width),t.width,H.width),o=Ie(Xe(Number.isFinite(e.height)?e.height:t.height),t.height,H.height);return{x:Ie(Xe(Number.isFinite(e.x)?e.x:H.x),H.x,H.x+H.width-a),y:Ie(Xe(Number.isFinite(e.y)?e.y:H.y),H.y,H.y+H.height-o),width:a,height:o}}function mt(e={},t=0){return{id:Kt("image",e.id,t),...ei(e,ft)}}function yt(e={},t=0){const a=typeof e.text=="string",o=e.kind==="title"||e.kind==="body"?e.kind:(Number(e.fontSize)||0)>=.04||e.family==="serif"?"title":"body";return{id:Kt("text",e.id,t),kind:o,text:_t(e.text,"text"),isDefaultText:typeof e.isDefaultText=="boolean"?e.isDefaultText:!a,...ei(e,Pe),fontSize:Ie(Number.isFinite(e.fontSize)?e.fontSize:.028,.014,.09),lineHeight:Ie(Number.isFinite(e.lineHeight)?e.lineHeight:1.35,1,2.2),padding:Ie(Number.isFinite(e.padding)?e.padding:.012,.004,.05),align:e.align==="center"||e.align==="right"?e.align:"left",family:e.family==="serif"?"serif":"sans",weight:Ie(Number.isFinite(e.weight)?e.weight:e.family==="serif"?600:500,400,700)}}function la(e={}){return Object.entries(sa).map(([t,a],o)=>yt({id:`text-${o+1}`,text:_t(e[t],""),x:a.x,y:a.y,width:a.width,height:a.height,fontSize:a.fontSize,lineHeight:a.lineHeight,padding:a.family==="serif"?.01:.012,align:a.align,kind:a.family==="serif"&&a.fontSize>=.04?"title":"body",family:a.family,weight:a.weight},o)).filter(t=>t.text.trim())}function ti(e={}){return{densityMode:e.densityMode==="fill"?"fill":Ft.densityMode,recoveryMode:e.recoveryMode==="keep"?"keep":Ft.recoveryMode}}function bt(e={}){return Array.isArray(e.imageBoxes)&&e.imageBoxes.length?e.imageBoxes.map((t,a)=>mt(t,a)):e.imageBoxes&&typeof e.imageBoxes=="object"?Object.entries(na).map(([t,a],o)=>{var u;const n=((u=e.imageBoxes)==null?void 0:u[t])||{};return mt({id:t,x:Number.isFinite(n.x)?n.x:a.x,y:Number.isFinite(n.y)?n.y:a.y,width:Number.isFinite(n.width)?n.width:a.width,height:Number.isFinite(n.height)?n.height:a.height},o)}):ra.map((t,a)=>mt(t,a))}function vt(e={},t={}){if(Array.isArray(e.textBoxes)&&e.textBoxes.length)return e.textBoxes.map((n,u)=>yt(n,u));const a=!!(e.imageBoxes&&!Array.isArray(e.imageBoxes)&&typeof e.imageBoxes=="object"),o=la(t);return a&&o.length?o:[yt({id:"text-1",text:_t(t.headline,"text"),isDefaultText:!t.headline,x:.56,y:.18,width:.24,height:.14,kind:"title",fontSize:.046,lineHeight:1.12,padding:.01,family:"serif",weight:600},0)]}function ca(e={},t={}){return{options:ti(e),imageBoxes:bt(e),textBoxes:vt(e,t)}}function pt(e){return{left:`${e.x*100}%`,top:`${e.y*100}%`,width:`${e.width*100}%`,height:`${e.height*100}%`}}function Xt(e,t){return{x:e.x+e.width*t.x,y:e.y+e.height*t.y,width:e.width*t.width,height:e.height*t.height,radius:0}}function ke(e){return Xe(e)}const da={id:"page8",label:"Page 8",description:"Custom free layout",async render(e,t,a,o){var y,S,C,E,A,T,Y,D,w,j,ce,se;const{addWrappedText:n,drawFileCover:u}=o,m={x:84,y:84,width:1072,height:1586},r=ca(t.customLayout||{},t),i=Array.isArray((y=t.customLayout)==null?void 0:y.pretextBoxes)?t.customLayout.pretextBoxes:null;e.fillStyle="#191514",e.textBaseline="top";const p=o.page8Files||{};if(((S=t.customLayout)==null?void 0:S.editorType)==="pretext"&&i){for(const I of i){const W={x:m.x+I.x/794*m.width,y:m.y+I.y/1123*m.height,width:I.width/794*m.width,height:I.height/1123*m.height,radius:0};if(I.kind==="image"){(C=I.data)!=null&&C.src&&await u(e,I.data.src,W,{cropX:Number(I.data.cropX)||0,cropY:Number(I.data.cropY)||0,zoom:Math.max(1,Number(I.data.zoom)||1)});continue}const F=Math.max(0,Number((E=I.data)==null?void 0:E.padding)||0),B=Math.max(12,Number((A=I.data)==null?void 0:A.lineHeight)||34);e.textAlign=((T=I.data)==null?void 0:T.align)||"left",e.fillStyle=((Y=I.data)==null?void 0:Y.color)||"#191514",e.font=`${Number((D=I.data)==null?void 0:D.fontWeight)||400} ${Math.max(12,Number((w=I.data)==null?void 0:w.fontSize)||22)}px ${((j=I.data)==null?void 0:j.fontFamily)||'"Noto Sans JP", sans-serif'}`;const V=e.textAlign==="right"?W.x+W.width-F:e.textAlign==="center"?W.x+W.width/2:W.x+F;n(e,((ce=I.data)==null?void 0:ce.text)||"",{x:V,y:W.y+F,maxWidth:Math.max(24,W.width-F*2),lineHeight:B,maxLines:Math.max(1,Math.floor(Math.max(B,W.height-F*2)/B))})}return}for(const z of r.imageBoxes){const k=Xt(m,z);(se=p[z.id])!=null&&se.file&&await u(e,p[z.id].file,k,p[z.id].position)}r.textBoxes.forEach(z=>{const k=Xt(m,z),I=Math.max(0,m.width*(z.padding||0)),W=z.family==="serif"?'"Cormorant Garamond", "Times New Roman", serif':'"Noto Sans JP", sans-serif';e.textAlign=z.align,e.font=`${z.weight} ${Math.round(m.width*z.fontSize)}px ${W}`;const F=z.align==="right"?k.x+k.width-I:z.align==="center"?k.x+k.width/2:k.x+I,B=Math.max(24,k.width-I*2),V=m.width*z.fontSize*z.lineHeight,de=Math.max(V,k.height-I*2);n(e,z.text||"",{x:F,y:k.y+I,maxWidth:B,lineHeight:V,maxLines:Math.max(1,Math.floor(de/Math.max(12,V)))})})}},ii=[Qt,Ki,ea,ta,ia,aa,oa,da],be=Qt.id,Yt=new Map(ii.map(e=>[e.id,e]));function ma(e){return Yt.get(e)||Yt.get(be)}const pa=[{value:"#f8f4ee",label:"Ivory"},{value:"#f4e5de",label:"Blush"},{value:"#ece4d8",label:"Sand"},{value:"#e5ece7",label:"Sage"}];function ua(e,t,a=[]){return`
    <section class="compose-group compose-group--tags">
      <div class="compose-group__head">
        <h3>${Gi[e]}</h3>
      </div>
      <div class="tag-select-grid">
        ${t.map(o=>`
          <label class="tag-check">
            <input type="checkbox" name="fixedTags" value="${o}" ${a.includes(o)?"checked":""} />
            <span>${o}</span>
          </label>
        `).join("")}
      </div>
    </section>
  `}function ai(e=be){return`
    <div class="template-carousel">
      <button class="template-carousel__nav" type="button" data-template-carousel-nav="prev" aria-label="Previous template">&larr;</button>
      <div class="template-carousel__viewport" data-template-carousel>
        <div class="template-thumb-track">
          ${ii.map(t=>`
            <label class="template-thumb ${e===t.id?"is-active":""}">
              <input type="radio" name="templateId" value="${t.id}" ${e===t.id?"checked":""} />
              <span class="template-thumb__preview template-option__preview template-option__preview--${t.id}" aria-hidden="true"></span>
            </label>
          `).join("")}
        </div>
      </div>
      <button class="template-carousel__nav" type="button" data-template-carousel-nav="next" aria-label="Next template">&rarr;</button>
    </div>
  `}function oi(e){return`
    <div class="color-picker-inline">
      <div class="color-chip-track color-chip-track--inline" data-color-carousel>
        ${pa.map(t=>`
          <label class="color-chip color-chip--inline ${e===t.value?"is-active":""}" title="${t.label}">
            <input type="radio" name="backgroundColor" value="${t.value}" ${e===t.value?"checked":""} />
            <span class="color-chip__swatch" style="--swatch:${t.value}"></span>
            <span class="color-chip__label">${t.label}</span>
          </label>
        `).join("")}
      </div>
    </div>
  `}function ut({id:e,slotClass:t}){return`
    <div class="compose-slot ${t}" data-slot="${e}">
      <input class="field__file" id="${e}" type="file" accept="image/*" />
      <label class="compose-slot__surface" for="${e}">
        <div class="compose-slot__image" data-slot-image="${e}" hidden></div>
        <div class="compose-slot__placeholder" data-slot-placeholder="${e}">
          <span class="compose-slot__plus">${G("compose")}</span>
        </div>
      </label>
      <button class="compose-slot__remove" type="button" data-slot-remove="${e}" hidden aria-label="remove image">&times;</button>
    </div>
  `}function ht(e){return`
    <div class="compose-slot ${e}">
      <div class="compose-slot__surface">
        <div class="compose-slot__placeholder">
          <span class="compose-slot__plus">${G("compose")}</span>
        </div>
      </div>
    </div>
  `}function ni(e,t,a,o={}){const{editable:n=!1,interactiveSlots:u=!1}=o,m=t==="page8",r=n?"compose-sheet":"compose-sheet compose-sheet--locked",i=m?`${r} compose-sheet--custom`:r,p=n?"true":"false";return m?`
      <div class="${i}" id="composeSheet" data-template="${t}" style="--sheet-bg:${a};">
        <div class="compose-sheet__frame">
          <div class="compose-custom-canvas" data-custom-canvas hidden></div>
        </div>
      </div>
    `:`
    <div class="${i}" id="composeSheet" data-template="${t}" style="--sheet-bg:${a};">
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
        ${u?ut({id:"imageInputSecondary",slotClass:"compose-slot--secondary"}):ht("compose-slot--secondary")}
        ${u?ut({id:"imageInputAccent",slotClass:"compose-slot--accent"}):ht("compose-slot--accent")}
        ${u?ut({id:"imageInputPrimary",slotClass:"compose-slot--primary"}):ht("compose-slot--primary")}
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
  `}function ha(e,t){return`
    <section class="compose-group compose-group--tags-stage">
      <div class="compose-group__head">
        <h3>Tags</h3>
      </div>
      ${Object.entries(Zt).map(([a,o])=>ua(a,o,e)).join("")}
      <section class="compose-group compose-group--tags compose-group--tags-nested">
        <div class="compose-group__head">
          <h3>Free Tags</h3>
        </div>
        <label class="field">
          <input class="field__input" type="text" name="freeTags" placeholder="cafe, spring, film" value="${t}" />
        </label>
      </section>
    </section>
  `}function ga({values:e,selectedId:t,selectedBackground:a,headerMini:o,headerTitle:n}){return`
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
          ${ni(e,t,a,{editable:!1,interactiveSlots:!1})}
        </section>

        <section class="compose-group compose-group--template compose-group--template-select">
          <div class="compose-group__head compose-group__head--template compose-group__head--template-select">
            <h3>Template</h3>
            ${oi(a)}
            <button class="button button--primary compose-confirm-button" type="button" data-compose-stage-nav="edit">編集する</button>
          </div>
          ${ai(t)}
        </section>
      </section>
    </section>
  `}function fa({values:e,selectedId:t,selectedBackground:a,isEditing:o,headerMini:n,headerTitle:u}){return`
    <section class="page page--compose page--compose--edit" data-compose-stage="edit">
      <header class="page-header page-header--with-back page-header--compose">
        <button class="button button--ghost page-back" type="button" data-compose-stage-nav="select">Back</button>
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
              `:ni(e,t,a,{editable:!0,interactiveSlots:!0})}
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
  `}function ya({selectedId:e,selectedBackground:t,selectedFixedTags:a,freeTagsValue:o,submitLabel:n,isEditing:u,headerMini:m,headerTitle:r}){return`
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
              ${oi(t)}
            </div>
            ${ai(e)}
          </section>
          ${ha(a,o)}
        </section>
        <div class="compose-flow-actions">
          <button class="button button--ghost compose-stage-back" type="button" data-compose-stage-nav="edit">Edit</button>
          <button class="button button--primary compose-submit-button" type="submit">${n}</button>
        </div>
      </form>
    </section>
  `}function ba(e=be){const t=typeof e=="object"?e:{selectedTemplateId:e},a=t.draft||{},o={headline:a.headline||"text",subhead:a.subhead||"text",intro:a.intro||"text",body:a.body||"text",date:a.date||"text",editor:a.editor||"編集者：haru"},n=t.selectedTemplateId||a.templateId||be,u=t.selectedBackground||a.backgroundColor||"#f8f4ee",m=Array.isArray(a.fixedTags)?a.fixedTags:[],r=Array.isArray(a.freeTags)?a.freeTags.join(", "):a.freeTags||"",i=t.isEditing?"Update Post":"Post This Layout",p=t.isEditing?"post editor":"template editor",y=t.isEditing?"Edit Post":"Compose",S=t.stage||"select";return S==="select"?ga({values:o,selectedId:n,selectedBackground:u,headerMini:p,headerTitle:y}):S==="tags"?ya({selectedId:n,selectedBackground:u,selectedFixedTags:m,freeTagsValue:r,submitLabel:i,isEditing:!!t.isEditing,headerMini:p,headerTitle:y}):fa({values:o,selectedId:n,selectedBackground:u,isEditing:!!t.isEditing,headerMini:p,headerTitle:y})}function va(e){return e.length?e.map(t=>`
    <label class="issue-post-option">
      <input type="checkbox" name="issuePostIds" value="${t.id}" />
      <img src="${t.imageData}" alt="${t.authorName}の投稿画像" />
      <div class="issue-post-option__meta">
        <strong>${t.authorName}</strong>
        <span>${jt(t.createdAt)}</span>
      </div>
    </label>
  `).join(""):`
      <section class="empty-panel">
        <p class="empty-panel__title">まだまとめる投稿がありません</p>
        <p class="empty-panel__copy">先に投稿を作ると、ここで選んで一冊の下書きにできます。</p>
      </section>
    `}function wa(e,t){return e.length?e.map(a=>{const o=t.filter(n=>a.postIds.includes(n.id));return`
      <article class="issue-card issue-card--${a.tone}">
        <p class="issue-card__eyebrow">memories issue</p>
        <h3 class="issue-card__title">${a.title}</h3>
        <p class="issue-card__subtitle">${a.subtitle||"sub title free"}</p>
        <div class="issue-card__count">${o.length} posts selected</div>
        <div class="issue-card__thumbs">
          ${o.slice(0,3).map(n=>`<img src="${n.imageData}" alt="${n.authorName}の投稿画像" />`).join("")}
        </div>
      </article>
    `}).join(""):'<p class="empty-copy">まだ雑誌の下書きはありません。</p>'}function xa(e){return`
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
            ${va(e.posts||[])}
          </div>
        </section>

        <button class="button button--primary button--full" type="submit">下書きを保存</button>
      </form>

      <section class="section-block">
        <div class="section-head">
          <h3>保存済みの雑誌下書き</h3>
        </div>
        <div class="issue-list">
          ${wa(e.issues||[],e.posts||[])}
        </div>
      </section>
    </section>
  `}function si(e){return[...new Set(e.map(t=>t.authorName))]}function ri(e){return`@${String(e||"user").trim().replace(/\s+/g,"_").toLowerCase()}`}function ot(e,t){return e.length?`
    <div class="feed-grid feed-grid--single">
      ${e.map(a=>Vt(a,{mode:"minimal"})).join("")}
    </div>
  `:`<p class="empty-copy">${t}</p>`}function _a(e,t){return e.length?`
    <div class="issue-list">
      ${e.map(a=>{const o=t.filter(n=>(a.postIds||[]).includes(n.id));return`
          <article class="issue-card issue-card--${a.tone}">
            <p class="issue-card__eyebrow">memories issue</p>
            <h3 class="issue-card__title">${a.title}</h3>
            <p class="issue-card__subtitle">${a.subtitle||"sub title free"}</p>
            <div class="issue-card__count">${o.length} posts selected</div>
            <div class="issue-card__thumbs">
              ${o.slice(0,3).map(n=>`<img src="${n.imageData}" alt="${n.authorName} post" />`).join("")}
            </div>
          </article>
        `}).join("")}
    </div>
  `:'<p class="empty-copy">Saved magazine issues will appear here.</p>'}function Sa(e,t,a){const o=e.posts.filter(D=>D.authorName===e.profile.name),n=e.posts.filter(D=>D.liked),u=e.posts.filter(D=>D.saved),m=e.issues||[],r=e.followingAuthors,i=a.filter(D=>D!==e.profile.name),p=t.profileSection||"identity",y=t.profileLibraryTab||"liked",S=!!t.profileAvatarCropOpen,C=ri(e.profile.name),A={identity:{label:"Name / ID",value:`<span class="profile-node__avatar">${We(e.profile.avatarData,(e.profile.name||"Y").slice(0,1).toUpperCase(),`${e.profile.name} avatar`)}</span>`,angle:0,centerLabel:""},library:{label:"Likes / Saved",value:`<span class="profile-node__icon-pair">${G("heart")}${G("save")}</span>`,angle:60},edit:{label:"Edit",value:"profile",angle:120},posts:{label:"Posts",value:String(o.length),angle:180},magazine:{label:"Magazine",value:String(m.length),angle:240},network:{label:"Follow / Follower",value:`${r.length} / ${i.length}`,angle:300}},T=A[p]||A.identity;function Y(){switch(p){case"identity":return`
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
                <strong>${C}</strong>
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
                  ${r.length?r.map(D=>`
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
                <p class="profile-column-title">Followers ${i.length}</p>
                <div class="follow-list">
                  ${i.length?i.map(D=>`
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
              <button class="profile-library-tab ${y==="liked"?"is-active":""}" type="button" data-profile-library-tab="liked" aria-pressed="${y==="liked"?"true":"false"}">${G("heart")}<span>Like</span></button>
              <button class="profile-library-tab ${y==="saved"?"is-active":""}" type="button" data-profile-library-tab="saved" aria-pressed="${y==="saved"?"true":"false"}">${G("save")}<span>Save</span></button>
            </div>
            <section class="profile-library-panel">
              <p class="profile-column-title">${y==="liked"?"Liked Posts":"Saved Posts"}</p>
              ${y==="liked"?ot(n,"Posts you liked will appear here."):ot(u,"Posts you saved will appear here.")}
            </section>
          </section>
        `;case"magazine":return`
          <section class="profile-section-panel">
            <div class="section-head">
              <h3>Magazine</h3>
            </div>
            ${_a(m,e.posts||[])}
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
                      ${We(e.profile.avatarData,(e.profile.name||"Y").slice(0,1).toUpperCase(),`${e.profile.name} avatar`)}
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
            ${ot(o,"Your posts will appear here after you publish one.")}
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
  `}function $a(e,t){var u;const a=si(e.posts||[]),o=e.posts.filter(m=>m.authorName===t),n=e.followingAuthors.includes(t);return`
    <section class="page page--profile">
      <header class="page-header page-header--with-back">
        <button class="button button--ghost page-back" type="button" data-close-profile>Back</button>
        <div>
          <p class="page-header__mini">author profile</p>
          <h2 class="page-header__title">${t}</h2>
        </div>
      </header>

      <section class="profile-card">
        <div class="profile-card__avatar">${We((u=o[0])==null?void 0:u.authorAvatarData,(t||"Y").slice(0,1).toUpperCase(),`${t} avatar`)}</div>
        <div class="profile-card__body">
          <div class="profile-card__heading">
            <div>
              <h3 class="profile-card__name">${t}</h3>
              <p class="profile-card__bio">${ri(t)}</p>
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
        ${ot(o,"This author has no posts yet.")}
      </section>

      <section class="section-block">
        <div class="section-head">
          <h3>Local Stats</h3>
        </div>
        <div class="stats-grid">
          <article class="stat-card"><span>Posts</span><strong>${o.length}</strong></article>
          <article class="stat-card"><span>Followers</span><strong>${a.filter(m=>m!==t).length}</strong></article>
          <article class="stat-card"><span>Following</span><strong>${Number(n)}</strong></article>
        </div>
      </section>
    </section>
  `}function Ta(e,t={}){const a=si(e.posts||[]),o=t.profileAuthor||null;return!o||o===e.profile.name?Sa(e,t,a):$a(e,o)}function ka(e,t={}){var u;if(!e)return`
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
    `;const{canDelete:a=!1,canEdit:o=!1}=t,n=[...e.fixedTags||[],...e.freeTags||[]];return`
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
            ${We(e.authorAvatarData,e.authorIcon,`${e.authorName} avatar`)}
          </button>
          <div>
            <p class="post-card__author">${e.authorName}</p>
            <p class="post-card__time">${Jt(e.createdAt)}</p>
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
              ${G("heart")}
              <span>${e.likes}</span>
            </button>
            <button class="icon-button" data-comment="${e.id}" aria-label="Open comments">
              ${G("comment")}
              <span>${((u=e.comments)==null?void 0:u.length)||0}</span>
            </button>
            <button class="icon-button ${e.saved?"is-active":""}" data-save="${e.id}" aria-label="Save post">
              ${G("save")}
              <span>${e.saves}</span>
            </button>
          </div>
          ${o||a?`
            <div class="post-detail-card__owner-actions">
              ${o?`
                <button class="button button--ghost post-detail-card__edit" type="button" data-edit-post="${e.id}" aria-label="Edit post">
                  ${G("edit")}
                </button>
              `:""}
              ${a?`
                <button class="button button--ghost post-detail-card__delete" type="button" data-delete-post="${e.id}" aria-label="Delete post">
                  ${G("trash")}
                </button>
              `:""}
            </div>
          `:""}
        </div>
      </article>
    </section>
  `}async function Ma(e,t={}){const{maxWidth:a=900,quality:o=.82}=t,n=await createImageBitmap(e),u=n.width/n.height,m=Math.min(n.width,a),r=Math.round(m/u),i=document.createElement("canvas");return i.width=m,i.height=r,i.getContext("2d").drawImage(n,0,0,m,r),i.toDataURL("image/webp",o)}async function Ia(e,t,a={}){var T;const{size:o=320}=a,n=await createImageBitmap(e),u=document.createElement("canvas");u.width=o,u.height=o;const m=u.getContext("2d");if(!m)return"";const r=Math.max(1,Number(t==null?void 0:t.zoom)||1),i=Math.min(1,Math.max(0,Number(t==null?void 0:t.x)||.5)),p=Math.min(1,Math.max(0,Number(t==null?void 0:t.y)||.5)),y=Math.max(o/n.width,o/n.height);n.width*y*r,n.height*y*r;const S=o/(y*r),C=o/(y*r),E=Math.max(0,(n.width-S)*i),A=Math.max(0,(n.height-C)*p);return m.clearRect(0,0,o,o),m.save(),m.beginPath(),m.arc(o/2,o/2,o/2,0,Math.PI*2),m.closePath(),m.clip(),m.drawImage(n,E,A,S,C,0,0,o,o),m.restore(),(T=n.close)==null||T.call(n),u.toDataURL("image/png")}const c={screen:"opening",timelineOverlay:null,timelineTab:"recommended",timelinePan:{x:-360,y:-220},searchQuery:"",searchTags:[],homeTheme:"dark",homeCoreState:"default",homeCoreTapTimestamps:[],previewPostId:null,commentPostId:null,profileEditOpen:!1,profileAuthor:null,profileSection:null,profileLibraryTab:"liked",profileExpanded:!0,profileOrbitRotation:0,profileAvatarCropOpen:!1,composeStage:"select",composeTemplateId:be,composeBackgroundColor:"#f8f4ee",composeEditingPostId:null,composeWorkingDraft:null,openingTapGuardUntil:0,postReturnScreen:"timeline",postReturnProfileAuthor:null,profileReturnState:null,composeReturnState:null},gt=["dark","light","system"],Me={headline:"text",subhead:"text",intro:"text",body:"text",date:"text",editor:"編集者：haru"};function _e(e={}){var t,a,o;return{file:typeof e.file=="string"?e.file:null,position:{x:Number((t=e.position)==null?void 0:t.x)||.5,y:Number((a=e.position)==null?void 0:a.y)||.5,zoom:Math.max(1,Number((o=e.position)==null?void 0:o.zoom)||1)},imageSize:e.imageSize&&Number.isFinite(e.imageSize.width)&&Number.isFinite(e.imageSize.height)?{width:e.imageSize.width,height:e.imageSize.height}:null}}function li(e={}){var t,a,o;return{templateId:e.templateId||be,backgroundColor:e.backgroundColor||"#f8f4ee",headline:e.headline||Me.headline,subhead:e.subhead||Me.subhead,intro:e.intro||Me.intro,body:e.body||Me.body,date:e.date||Me.date,editor:e.editor||Me.editor,fixedTags:Array.isArray(e.fixedTags)?[...e.fixedTags]:[],freeTags:Array.isArray(e.freeTags)?[...e.freeTags]:String(e.freeTags||"").split(",").map(n=>n.trim()).filter(Boolean),customLayout:e.customLayout?JSON.parse(JSON.stringify(e.customLayout)):null,standardFiles:{primary:_e((t=e.standardFiles)==null?void 0:t.primary),secondary:_e((a=e.standardFiles)==null?void 0:a.secondary),accent:_e((o=e.standardFiles)==null?void 0:o.accent)}}}let Ue=null,Ee=0,nt=null,ge=null,De=null;const q={file:null,previewUrl:"",imageSize:null,crop:{x:.5,y:.5,zoom:1}};function ci(){nt&&(window.clearTimeout(nt),nt=null)}function di(){ci(),c.homeCoreState="default",c.homeCoreTapTimestamps=[]}function je(){q.previewUrl&&URL.revokeObjectURL(q.previewUrl),q.file=null,q.previewUrl="",q.imageSize=null,q.crop={x:.5,y:.5,zoom:1},c.profileAvatarCropOpen=!1}function La(){ge!=null&&ge.unmount&&ge.unmount(),ge=null}function Pa(e=c.homeTheme){return e==="system"?typeof window<"u"&&typeof window.matchMedia=="function"&&window.matchMedia("(prefers-color-scheme: dark)").matches?"dark":"light":e==="dark"?"dark":"light"}function Ea(){var t;const e=Je();switch(c.screen){case"home":return Ot(e,c);case"timeline":return ji(e,c);case"search":return Qi(e,c);case"compose":return ba({stage:c.composeStage,selectedTemplateId:c.composeTemplateId,selectedBackground:c.composeBackgroundColor,draft:c.composeWorkingDraft||((t=He(c.composeEditingPostId))==null?void 0:t.composeData)||null,isEditing:!!c.composeEditingPostId});case"magazine":return xa(e);case"profile":return Ta(e,c);case"post":return ka(He(c.previewPostId),{canDelete:mi(He(c.previewPostId))});default:return Ot(e,c)}}function He(e){return Je().posts.find(t=>t.id===e)}function mi(e){return e?e.authorName===Je().profile.name:!1}function Ca(){if(!Ue)return;const e=["app-shell"],t=["screen-area"],a=Pa(c.homeTheme);e.push(`app-shell--theme-${a}`),e.push(`app-shell--theme-mode-${c.homeTheme}`),c.screen==="home"?(e.push("app-shell--home"),t.push("screen-area--home")):c.screen==="timeline"?(e.push("app-shell--timeline"),t.push("screen-area--timeline")):c.screen==="compose"?(e.push("app-shell--compose"),t.push("screen-area--compose")):c.screen==="search"&&t.push("screen-area--search"),Ue.innerHTML=`
    <div class="${e.join(" ")}">
      <main class="${t.join(" ")}" id="screenArea"></main>
      ${bi()}
      <div id="modalRoot"></div>
    </div>
  `}function Ye(){const e=document.getElementById("modalRoot");if(!e)return;const t=c.commentPostId?He(c.commentPostId):null;e.innerHTML=`
    ${xi(t)}
  `,Qa()}function ae(){const e=document.getElementById("screenArea");e&&(e.innerHTML=Ea(),Ka(),Ye())}function ie(){if(Ue){if(La(),c.screen==="opening"){Ue.innerHTML=Di(),Ra();return}Ca(),ae(),Wa()}}function wt(){return{screen:c.screen,previewPostId:c.previewPostId,profileAuthor:c.profileAuthor,postReturnScreen:c.postReturnScreen,postReturnProfileAuthor:c.postReturnProfileAuthor}}function pi(e,t="home"){if(!e){st(t);return}c.screen=e.screen||t,c.previewPostId=e.previewPostId||null,c.commentPostId=null,c.profileEditOpen=!1,c.profileAuthor=c.screen==="profile"&&e.profileAuthor||null,c.postReturnScreen=e.postReturnScreen||"home",c.postReturnProfileAuthor=e.postReturnProfileAuthor||null,ie()}function st(e){e!=="home"&&di(),e==="compose"&&c.screen!=="compose"&&(c.composeReturnState=wt()),e==="profile"&&c.screen!=="profile"&&(c.profileReturnState=wt()),e!=="profile"&&(je(),c.profileReturnState=null),e!=="home"&&(c.timelineOverlay=null),e!=="compose"&&(c.composeEditingPostId=null,c.composeStage="select",c.composeBackgroundColor="#f8f4ee",c.composeWorkingDraft=null,c.composeReturnState=null),c.screen=e,c.previewPostId=null,c.commentPostId=null,e==="compose"&&(c.composeStage="select",c.composeBackgroundColor="#f8f4ee",c.composeTemplateId=be,c.composeWorkingDraft=li({templateId:be,backgroundColor:"#f8f4ee"})),e==="profile"&&(je(),c.profileAuthor=null,c.profileSection="identity",c.profileLibraryTab="liked",c.profileExpanded=!0,c.profileOrbitRotation=270),e!=="profile"&&(c.profileEditOpen=!1,c.profileAuthor=null),ie()}function ui(){c.previewPostId=null,c.commentPostId=null,c.openingTapGuardUntil=Date.now()+700,c.postReturnScreen="home",c.postReturnProfileAuthor=null,st("home")}function Aa(e){je(),c.profileReturnState=wt(),c.screen="profile",c.previewPostId=null,c.commentPostId=null,c.profileEditOpen=!1,c.profileAuthor=e||null,c.profileSection=e?null:"identity",c.profileLibraryTab="liked",c.profileExpanded=!0,c.profileOrbitRotation=e?0:270,ie()}function Ba(){je();const e=c.profileReturnState;c.profileReturnState=null,pi(e,"home")}function Na(e){c.postReturnScreen=c.screen,c.postReturnProfileAuthor=c.profileAuthor,c.screen="post",c.previewPostId=e,c.commentPostId=null,ie()}function Da(){const e=c.composeReturnState;c.composeReturnState=null,c.composeWorkingDraft=null,pi(e,"home")}function hi(){c.screen=c.postReturnScreen||"timeline",c.commentPostId=null,c.profileEditOpen=!1,c.profileAuthor=c.screen==="profile"?c.postReturnProfileAuthor:null,ie()}async function Ra(){var u,m,r;const e=document.getElementById("openingCanvas"),t=document.querySelector(".opening-screen");if(!e||!t)return;const a=++Ee,o=i=>{i.preventDefault(),i.stopPropagation(),a===Ee&&(Ee+=1,ui())};t.addEventListener("pointerdown",o,{once:!0});try{(u=document.fonts)!=null&&u.ready?await Promise.race([document.fonts.ready,new Promise(i=>window.setTimeout(i,1200))]):await new Promise(i=>window.setTimeout(i,180))}catch{}if(a!==Ee)return;const n=((r=(m=window.matchMedia)==null?void 0:m.call(window,"(prefers-reduced-motion: reduce)"))==null?void 0:r.matches)??!1;Ha(e,a,n)}function Ha(e,t,a){const o=e.getBoundingClientRect(),n=window.devicePixelRatio||1,u=Math.max(1,Math.round(o.width*n)),m=Math.max(1,Math.round(o.height*n)),r=e.getContext("2d");if(!r)return;e.width=u,e.height=m;const i="#ffffff",p='"Zen Old Mincho", "Cormorant Garamond", "Times New Roman", serif',y="ABCDEFGHIJKLMNOPQRSTUVWXYZ",S=Math.min(u*.255,m*.5,138*n),C=`700 ${S}px ${p}`,E=a?1300:3e3,A=a?420:760,T=a?320:620,Y=a?720:2100,D=a?1800:5200,w=E+A+T+Y+D;function j(L,P,U){return Math.min(U,Math.max(P,L))}if(t!==Ee)return;function ce(L){return 1-(1-L)**3}function se(L){return L<.5?4*L*L*L:1-(-2*L+2)**3/2}function z(L,P,U){return L+(P-L)*U}function k(L,P,U){return j((L-P)/U,0,1)}function I(L,P,U,R,K=1){L.save(),L.globalAlpha=K,L.font=C,L.textAlign="left",L.textBaseline="middle",L.lineJoin="round",L.lineCap="round",L.lineWidth=Math.max(1.4*n,S*.045),L.strokeStyle="rgba(255, 255, 255, 0.22)",L.strokeText(P,U,R),L.shadowColor="rgba(255, 255, 255, 0.26)",L.shadowBlur=S*.085,L.shadowOffsetY=S*.014,L.fillStyle=i,L.fillText(P,U,R),L.restore()}function W(L=1){r.save(),r.globalAlpha=L,r.drawImage(B,0,0),r.restore()}function F(L=1,P=0){const U=m*.5,R=P*Math.PI*.9,K=S*.018*(1-P*.32),te=Math.sin(R*.82)*K*.55,re=Math.cos(R*.68)*K*.42,$e=1+Math.sin(P*Math.PI*.8)*.004;r.save(),r.globalAlpha=L,r.translate(u/2+te,U+re),r.scale($e,$e),r.drawImage(B,-u/2,-m*.5),r.restore(),r.save();const ye=Math.hypot(u,m),oe=S*.42;r.lineWidth=Math.max(1*n,S*.008);for(let Z=0;Z<3;Z+=1){const O=j(P*.56-Z*.18,0,1);O<=0||O>=1||(r.globalAlpha=(1-O)**1.4*.12*L,r.strokeStyle=i,r.beginPath(),r.arc(u/2,U,oe+O*(ye-oe),0,Math.PI*2),r.stroke())}r.restore()}const B=document.createElement("canvas");B.width=u,B.height=m;const V=B.getContext("2d");if(!V)return;const de=["L","A","N","I"],ue=S*.01,Ce=[-S*.03,-S*.015,-S*.015];V.font=C;const Ge=de.map(L=>V.measureText(L).width),Ve=Ge.reduce((L,P)=>L+P,0)+ue*(de.length-1)+Ce.reduce((L,P)=>L+P,0),lt=u/2-Ve/2,fe=m*.5;V.fillStyle=i,V.font=C,V.textAlign="left",V.textBaseline="middle";let Ae=lt;const qe=de.map((L,P)=>{const U=Ge[P],R=Ae;Ae+=U+ue+(Ce[P]||0);const K=P<2;return{glyph:L,targetX:R,targetY:fe,startX:K?-U-Math.random()*u*.16-P*S*.18:u+Math.random()*u*.16+(de.length-P)*S*.18,startY:fe+(Math.random()-.5)*S*.42,driftX:(Math.random()-.5)*S*.12,driftY:(Math.random()-.5)*S*.08,enterArc:(Math.random()-.5)*S*.32,delay:P*.055,alpha:.72+Math.random()*.18,width:U}});de.forEach((L,P)=>{I(V,L,qe[P].targetX,fe)});const ze=[],Ze=a?Math.max(28,Math.round(u/20)):Math.max(120,Math.round(u/5.5)),Se=Ve*.52+S*.16,Qe=S*.56;for(let L=0;L<Ze;L+=1){const P=L%7,U=.86+P*.28+Math.random()*.14,R=Math.random()<.5?1:-1,K=P>=4?1.35:1;ze.push({glyph:y[Math.floor(Math.random()*y.length)],size:Math.max(u,m)*.024+Math.random()*(Math.max(u,m)*.034),angularSpeed:(a?22e-5:4e-4)*(.82+Math.random()*.72)*R,radiusX:Math.min(u*.64,Se*U*K),radiusY:Math.min(m*.42,Qe*(.86+P*.2+Math.random()*.14)*K),wobble:S*(.03+Math.random()*.05),wobbleSpeed:.0012+Math.random()*.0016,alpha:a?.16+Math.random()*.1:.24+Math.random()*.18,seed:Math.random()*Math.PI*2})}const Ke=performance.now();function Oe(L,P,U="back"){ze.forEach(R=>{const K=L*R.angularSpeed+R.seed,te=Math.sin(K),re=te>0;if(U==="front"&&!re||U==="back"&&re)return;const $e=Math.sin(L*R.wobbleSpeed+R.seed*1.4)*R.wobble,ye=Math.cos(L*R.wobbleSpeed*.82+R.seed*.9)*R.wobble*.72,oe=u/2+Math.cos(K)*R.radiusX+$e,Z=fe+te*R.radiusY+ye,O=re?1+te*.22:.74+(te+1)*.08,we=R.alpha*P*(re?.72+te*.42:.18);we<=.015||(r.save(),r.globalAlpha=we,r.fillStyle=i,r.font=`500 ${R.size*O}px ${p}`,r.textAlign="center",r.textBaseline="middle",r.fillText(R.glyph,oe,Z),r.restore())})}function Fe(L){if(t!==Ee)return;const P=L-Ke,U=ce(k(P,0,E)),R=se(k(P,E*.58,A)),K=se(k(P,E+A,T)),te=k(P,E+A*.3,T),re=se(k(P,E+A+T+Y,D));r.clearRect(0,0,u,m),r.textAlign="center",r.textBaseline="middle",r.fillStyle=i,Oe(P,Math.max(0,1-te),"back"),qe.forEach((Z,O)=>{const we=j((U-Z.delay)/(1-Z.delay),0,1);if(we<=.001)return;const me=ce(we),he=(1-me)*Z.enterArc,et=z(Z.startX,Z.targetX,me)+Z.driftX*(1-me),tt=z(Z.startY,Z.targetY,me)+Math.sin(me*Math.PI+O*.35)*he+Z.driftY*(1-me),it=1-j((K-.24)/.76,0,1),Be=Math.min(.96,.22+me*Z.alpha+R*.18)*it;Be<=.02||(r.save(),I(r,Z.glyph,et,tt,Be),r.restore())}),r.globalAlpha=1;const $e=j((K-.18)/.82,0,1),ye=Math.max(0,1-re**2.1),oe=$e*ye;if(re>.001?F(oe,re):W(oe),Oe(P,Math.max(0,1-te),"front"),P<w){requestAnimationFrame(Fe);return}t===Ee&&ui()}requestAnimationFrame(Fe)}function Wa(){const e=(a,o,n)=>Math.min(n,Math.max(o,a));[{element:document.querySelector('[data-side-wheel="main"]'),getItems:()=>Array.from(document.querySelectorAll('[data-side-wheel="main"] [data-side-nav-screen]')),getActiveKey:()=>["timeline","search","compose","profile"].includes(c.screen)?c.screen:c.postReturnScreen||"timeline",applySelection:a=>{if(c.screen===a){ie();return}st(a)}},{element:document.querySelector('[data-side-wheel="timeline"]'),getItems:()=>Array.from(document.querySelectorAll('[data-side-wheel="timeline"] [data-side-nav-tab]')),getActiveKey:()=>c.timelineTab||"recommended",applySelection:a=>{c.timelineTab=a,ie()}},{element:document.querySelector('[data-side-wheel="profile"]'),getItems:()=>Array.from(document.querySelectorAll('[data-side-wheel="profile"] [data-side-nav-profile-section]')),getActiveKey:()=>c.profileSection||"identity",applySelection:a=>{c.profileSection=a,c.profileSection==="library"&&(c.profileLibraryTab=c.profileLibraryTab||"liked"),ie()}}].filter(a=>a.element).forEach(a=>{const{element:o,getItems:n,applySelection:u,getActiveKey:m}=a,r=n();if(!r.length)return;const i=r.map((k,I)=>({button:k,key:k.dataset.sideNavScreen||k.dataset.sideNavTab||k.dataset.sideNavProfileSection,index:I})),p=Math.max(0,i.findIndex(k=>k.key===m()));let y=!1,S=p,C=0,E=0,A=0,T=null;const Y=k=>{var V;const I=(V=i[S])==null?void 0:V.button.getBoundingClientRect(),W=((I==null?void 0:I.height)||0)/2,F=W,B=window.innerHeight-W;return B<=F?0:e(k,F-window.innerHeight/2,B-window.innerHeight/2)},D=(k,I)=>{const W=o.classList.contains("side-wheel--left")?76:24,F=i.length<=2?88:76;o.style.setProperty("--wheel-offset-y",`${C}px`),o.classList.toggle("is-dragging",!!(T!=null&&T.moved)),i.forEach(B=>{const V=(B.index-k)*F,de=I||B.index===k?1:0,ue=I?B.index===k?1:.9:1,Ce=!I&&B.index===k?E:0;B.button.style.setProperty("--slot-x",`${W}%`),B.button.style.setProperty("--slot-y",`${V}px`),B.button.style.setProperty("--slot-scale",String(ue)),B.button.style.setProperty("--slot-opacity",String(de)),B.button.style.setProperty("--slot-depth",String(Math.abs(B.index-k))),B.button.style.setProperty("--drag-x",`${Ce}px`),B.button.style.setProperty("--drag-y","0px"),B.button.classList.toggle("is-active",B.index===k),B.button.classList.toggle("is-dragging",!!(T!=null&&T.moved)&&B.index===k)})},w=k=>{var B;if(!T||(k==null?void 0:k.pointerId)!=null&&T.pointerId!==k.pointerId)return;const{button:I,pointerId:W,moved:F}=T;(B=I.hasPointerCapture)!=null&&B.call(I,W)&&I.releasePointerCapture(W),T=null,F&&(A=Date.now()+220),D(S,y)},j=k=>{if(!T||T.pointerId!==k.pointerId)return;const I=k.clientX-T.startX,W=k.clientY-T.startY;if(!(!T.moved&&Math.hypot(I,W)<8)){if(T.moved=!0,C=Y(T.startWheelOffsetY+W),T.mode==="collapsed"){const F=T.halfWidth,B=window.innerWidth-T.halfWidth;E=e(T.startCenterX+I,F,B)-T.anchorCenterX}else E=0;D(S,y)}};D(p,!1);const ce=()=>{y=!0,o.classList.add("is-engaged"),E=0,D(S,!0)},se=()=>{y=!1,o.classList.remove("is-engaged"),D(S,!1)},z=(k=S)=>{S=k;const I=i[S];if(!I){se();return}u(I.key)};r.forEach(k=>{k.addEventListener("pointerdown",I=>{if(Number(k.dataset.sideIndex||0)!==S)return;const F=k.getBoundingClientRect();T={pointerId:I.pointerId,button:k,mode:y?"engaged":"collapsed",startX:I.clientX,startY:I.clientY,startCenterX:F.left+F.width/2,anchorCenterX:F.left+F.width/2-E,halfWidth:F.width/2,startWheelOffsetY:C,moved:!1},k.setPointerCapture(I.pointerId)}),k.addEventListener("pointermove",j),k.addEventListener("pointerup",w),k.addEventListener("pointercancel",w),k.addEventListener("lostpointercapture",w),k.addEventListener("click",I=>{if(Date.now()<A){I.preventDefault(),I.stopPropagation();return}I.preventDefault();const W=Number(k.dataset.sideIndex||0);if(!y){if(W!==S)return;ce();return}if(W===S){se();return}z(W)})})})}function rt(e=document){e.querySelectorAll("[data-toggle-tags]").forEach(t=>{t.addEventListener("click",()=>{const a=document.querySelector(`[data-tags-panel="${t.dataset.toggleTags}"]`);a&&(a.hidden=!a.hidden,t.classList.toggle("is-active",!a.hidden))})}),e.querySelectorAll("[data-like]").forEach(t=>{t.addEventListener("click",()=>{Li(t.dataset.like),ae()})}),e.querySelectorAll("[data-save]").forEach(t=>{t.addEventListener("click",()=>{Pi(t.dataset.save),ae()})}),e.querySelectorAll("[data-comment]").forEach(t=>{t.addEventListener("click",()=>{c.commentPostId=t.dataset.comment,Ye()})}),e.querySelectorAll("[data-open-preview]").forEach(t=>{t.addEventListener("click",a=>{if(Date.now()<c.openingTapGuardUntil){a.preventDefault(),a.stopPropagation();return}const o=t.dataset.openPreview;Ci(o),Na(o)})}),e.querySelectorAll("[data-open-author]").forEach(t=>{t.addEventListener("click",()=>{Aa(t.dataset.openAuthor)})})}function qa(){const e=document.querySelector(".orbit-home"),t=()=>{e&&(e.classList.remove("orbit-home--default","orbit-home--collapsing","orbit-home--sheep"),e.classList.add(`orbit-home--${c.homeCoreState}`))};document.querySelectorAll("[data-home-theme-toggle]").forEach(a=>{a.addEventListener("click",()=>{const o=gt.indexOf(c.homeTheme);c.homeTheme=gt[(o+1)%gt.length],ie()})}),document.querySelectorAll("[data-home-core-toggle]").forEach(a=>{a.addEventListener("click",()=>{if(c.homeCoreState!=="default")return;const o=Date.now();c.homeCoreTapTimestamps=[...c.homeCoreTapTimestamps.filter(n=>o-n<900),o],!(c.homeCoreTapTimestamps.length<3)&&(c.homeCoreTapTimestamps=[],c.homeCoreState="collapsing",t(),ci(),nt=window.setTimeout(()=>{c.homeCoreState="sheep",t()},620))})}),document.querySelectorAll("[data-home-sheep-toggle]").forEach(a=>{a.addEventListener("click",()=>{c.homeCoreState==="sheep"&&(di(),t())})})}function za(){var a,o;rt(document.getElementById("screenArea"));const e=document.querySelector("[data-timeline-pan-viewport]"),t=document.querySelector("[data-timeline-pan-surface]");if(e&&t){const n=(i,p)=>{const y=Math.min(0,e.clientWidth-t.scrollWidth),S=Math.min(0,e.clientHeight-t.scrollHeight);return{x:Math.max(y,Math.min(0,i)),y:Math.max(S,Math.min(0,p))}},u=(i,p)=>{const y=n(i,p);c.timelinePan=y,t.style.transform=`translate(${y.x}px, ${y.y}px)`};u(((a=c.timelinePan)==null?void 0:a.x)??-360,((o=c.timelinePan)==null?void 0:o.y)??-220);let m=null;t.addEventListener("pointerdown",i=>{var p,y,S;m={pointerId:i.pointerId,startX:i.clientX,startY:i.clientY,originX:((p=c.timelinePan)==null?void 0:p.x)??-360,originY:((y=c.timelinePan)==null?void 0:y.y)??-220,moved:!1},e.classList.add("is-dragging"),(S=t.setPointerCapture)==null||S.call(t,i.pointerId)}),t.addEventListener("pointermove",i=>{if(!m||m.pointerId!==i.pointerId)return;const p=i.clientX-m.startX,y=i.clientY-m.startY;(Math.abs(p)>4||Math.abs(y)>4)&&(m.moved=!0,i.preventDefault()),u(m.originX+p,m.originY+y)});const r=i=>{var p;!m||m.pointerId!==i.pointerId||(e.classList.remove("is-dragging"),m.moved&&(c.openingTapGuardUntil=Date.now()+180),m=null,(p=t.releasePointerCapture)==null||p.call(t,i.pointerId))};t.addEventListener("pointerup",r),t.addEventListener("pointercancel",r)}document.querySelectorAll("[data-timeline-tab]").forEach(n=>{n.addEventListener("click",()=>{c.timelineTab=n.dataset.timelineTab||"recommended",ae()})})}function Oa(){rt(document.getElementById("screenArea"));const e=document.getElementById("searchInput");e&&e.addEventListener("input",t=>{c.searchQuery=t.target.value;const a=t.target.selectionStart;ae();const o=document.getElementById("searchInput");o&&(o.focus(),o.setSelectionRange(a,a))}),document.querySelectorAll("[data-search-tag]").forEach(t=>{t.addEventListener("click",()=>{const a=t.dataset.searchTag;c.searchTags=c.searchTags.includes(a)?c.searchTags.filter(o=>o!==a):[...c.searchTags,a],ae()})})}function Fa(){document.querySelectorAll("[data-home-nav]").forEach(e=>{e.addEventListener("click",()=>{st(e.dataset.homeNav)})}),document.querySelectorAll("[data-close-profile]").forEach(e=>{e.addEventListener("click",()=>{Ba()})}),document.querySelectorAll("[data-close-compose]").forEach(e=>{e.addEventListener("click",()=>{Da()})})}function Ut(e){var t,a;return e.templateId==="page8"&&Array.isArray((t=e.customLayout)==null?void 0:t.pretextBoxes)?e.customLayout.pretextBoxes.filter(o=>o.kind==="title"||o.kind==="body").map(o=>{var n;return String(((n=o.data)==null?void 0:n.text)||"").trim()}).filter(Boolean).join(" / ").slice(0,120):e.templateId==="page8"&&Array.isArray((a=e.customLayout)==null?void 0:a.textBoxes)?e.customLayout.textBoxes.map(o=>String(o.text||"").trim()).filter(Boolean).join(" / ").slice(0,120):[e.headline,e.subhead,e.intro,e.body].map(o=>o.trim()).filter(Boolean).join(" / ").slice(0,120)}function Xa(e,t,a){const{x:o,y:n,maxWidth:u,lineHeight:m,maxLines:r}=a,i=[];String(t||"").split(`
`).forEach(y=>{const S=/\s/.test(y.trim()),C=S?y.split(/\s+/).filter(Boolean):Array.from(y),E=S?" ":"";if(!C.length){i.push("");return}let A="";C.forEach(T=>{const Y=A?`${A}${E}${T}`:T;if(e.measureText(Y).width<=u||!A){A=Y;return}i.push(A),A=T}),A&&i.push(A)}),i.slice(0,r).forEach((y,S)=>{e.fillText(y,o,n+S*m)})}function St(e,t,a,o,n,u){e.beginPath(),e.moveTo(t+u,a),e.arcTo(t+o,a,t+o,a+n,u),e.arcTo(t+o,a+n,t,a+n,u),e.arcTo(t,a+n,t,a,u),e.arcTo(t,a,t+o,a,u),e.closePath()}async function Ya(e,t,a,o={x:.5,y:.5}){var T;if(!t)return;const n=typeof t=="string"?await new Promise((Y,D)=>{const w=new Image;w.onload=()=>Y(w),w.onerror=D,w.src=t}):await createImageBitmap(t),u=n.width/n.height,m=a.width/a.height;let r=0,i=0,p=n.width,y=n.height;const S=Math.max(1,Number(o==null?void 0:o.zoom)||1),C=Number.isFinite(o==null?void 0:o.cropX)||Number.isFinite(o==null?void 0:o.cropY);let E=Math.min(1,Math.max(0,o.x??.5)),A=Math.min(1,Math.max(0,o.y??.5));if(C){const Y=u>m?a.height*u:a.width,D=u>m?a.height:a.width/u,w=Math.max(0,Y*S-a.width),j=Math.max(0,D*S-a.height);E=w?Math.min(1,Math.max(0,.5-(Number(o==null?void 0:o.cropX)||0)/w)):.5,A=j?Math.min(1,Math.max(0,.5-(Number(o==null?void 0:o.cropY)||0)/j)):.5}u>m?(p=Math.max(1,n.height*m/S),r=(n.width-p)*E):(y=Math.max(1,n.width/m/S),i=(n.height-y)*A),e.save(),St(e,a.x,a.y,a.width,a.height,a.radius),e.clip(),e.drawImage(n,r,i,p,y,a.x,a.y,a.width,a.height),e.restore(),(T=n.close)==null||T.call(n)}function Ua(e,t){e.save(),e.lineWidth=4,e.strokeStyle="rgba(34, 28, 25, 0.88)",St(e,t.x,t.y,t.width,t.height,t.radius),e.stroke();const a=Math.min(t.width,t.height)*.18,o=t.x+t.width/2,n=t.y+t.height/2;e.beginPath(),e.arc(o,n,a,0,Math.PI*2),e.stroke(),e.beginPath(),e.moveTo(o-a*.42,n),e.lineTo(o+a*.42,n),e.moveTo(o,n-a*.42),e.lineTo(o,n+a*.42),e.stroke(),e.restore()}async function ja(e,t,a={}){const m=document.createElement("canvas");m.width=2480,m.height=3508;const r=m.getContext("2d");if(!r)return"";const i=2480/1240;return r.imageSmoothingEnabled=!0,r.imageSmoothingQuality="high",r.fillStyle=e.backgroundColor||"#f8f4ee",r.fillRect(0,0,2480,3508),r.scale(i,i),await ma(e.templateId).render(r,e,t,{addWrappedText:Xa,clipRoundedRect:St,drawFileCover:Ya,drawSlotPlaceholder:Ua,defaults:Me,page8Files:a.page8Files||{}}),m.toDataURL("image/png")}function Ja(){var $t,Tt,kt,Mt,It,Lt,Pt,Et,Ct,At,Bt;const e=document.querySelector(".page--compose");if(!e)return;const t=e.dataset.composeStage||"select",a=document.getElementById("composeForm"),o=a||e,n=document.getElementById("composeSheet"),u=(n==null?void 0:n.querySelector(".compose-sheet__frame"))||null,m=(n==null?void 0:n.querySelector("[data-custom-canvas]"))||null,r=c.composeWorkingDraft||(($t=He(c.composeEditingPostId))==null?void 0:$t.composeData)||null,i={...Me,...r||{}},p={imageInputPrimary:typeof((kt=(Tt=r==null?void 0:r.standardFiles)==null?void 0:Tt.primary)==null?void 0:kt.file)=="string"?r.standardFiles.primary.file:"",imageInputSecondary:typeof((It=(Mt=r==null?void 0:r.standardFiles)==null?void 0:Mt.secondary)==null?void 0:It.file)=="string"?r.standardFiles.secondary.file:"",imageInputAccent:typeof((Pt=(Lt=r==null?void 0:r.standardFiles)==null?void 0:Lt.accent)==null?void 0:Pt.file)=="string"?r.standardFiles.accent.file:""},y={primary:_e((Et=r==null?void 0:r.standardFiles)==null?void 0:Et.primary),secondary:_e((Ct=r==null?void 0:r.standardFiles)==null?void 0:Ct.secondary),accent:_e((At=r==null?void 0:r.standardFiles)==null?void 0:At.accent)},S=document.querySelector("[data-toggle-compose-tags]"),C=document.querySelector("[data-compose-tags]"),E=document.querySelector("[data-toggle-compose-preview]"),A=document.querySelector("[data-custom-template-controls]"),T=document.querySelector("[data-custom-inspector]"),Y=document.querySelector("[data-compose-pretext-host]"),D=Array.from(document.querySelectorAll("[data-editable]")),w={options:ti((r==null?void 0:r.customLayout)||{}),imageBoxes:bt((r==null?void 0:r.customLayout)||{}),textBoxes:vt((r==null?void 0:r.customLayout)||{},i),selectedId:null,imageMode:"frame"},j={},ce={headline:document.querySelector('[data-editable="headline"]'),subhead:document.querySelector('[data-editable="subhead"]'),intro:document.querySelector('[data-editable="intro"]'),body:document.querySelector('[data-editable="body"]'),date:document.querySelector('[data-editable="date"]'),editor:document.querySelector('[data-editable="editor"]')},se={primary:document.querySelector('[data-slot="imageInputPrimary"]'),secondary:document.querySelector('[data-slot="imageInputSecondary"]'),accent:document.querySelector('[data-slot="imageInputAccent"]')};function z(){return{primary:_e(y.primary),secondary:_e(y.secondary),accent:_e(y.accent)}}function k(s={}){const l=li({...c.composeWorkingDraft||r||{},...s});return c.composeWorkingDraft=l,c.composeTemplateId=l.templateId,c.composeBackgroundColor=l.backgroundColor,l}function I(s={}){var $;const{customLayoutOverride:l}=s,d=o.querySelector('input[name="templateId"]:checked'),_=o.querySelector('input[name="backgroundColor"]:checked'),M=String((d==null?void 0:d.value)||(n==null?void 0:n.dataset.template)||c.composeTemplateId||(r==null?void 0:r.templateId)||be),h=String((_==null?void 0:_.value)||c.composeBackgroundColor||(r==null?void 0:r.backgroundColor)||"#f8f4ee"),g=k({templateId:M,backgroundColor:h,standardFiles:z()}),x=a?new FormData(a):null,b=x?x.getAll("fixedTags").map(f=>String(f)):g.fixedTags,v=x?String(x.get("freeTags")||"").split(",").map(f=>f.trim()).filter(Boolean):g.freeTags;if(M==="page8"){const f=l||(($=ge==null?void 0:ge.getSerializedLayout)==null?void 0:$.call(ge))||g.customLayout;return k({fixedTags:b,freeTags:v,customLayout:f})}return k({fixedTags:b,freeTags:v,headline:Se("headline")||g.headline,subhead:Se("subhead")||g.subhead,intro:Se("intro")||g.intro,body:Se("body")||g.body,date:Se("date")||g.date,editor:Se("editor")||g.editor,customLayout:l??null})}const W=s=>{I(),c.composeStage=s,ie()};function F(s){return new Promise(l=>{const d=new Image,_=typeof s=="string"?s:URL.createObjectURL(s);d.onload=()=>{l({width:d.naturalWidth,height:d.naturalHeight}),typeof s!="string"&&URL.revokeObjectURL(_)},d.onerror=()=>{l(null),typeof s!="string"&&URL.revokeObjectURL(_)},d.src=_})}function B(s){const l=document.querySelector(`[data-slot-image="${s}"]`),_=y[s==="imageInputPrimary"?"primary":s==="imageInputSecondary"?"secondary":"accent"];l&&(l.style.backgroundPosition=`${(_.position.x||.5)*100}% ${(_.position.y||.5)*100}%`)}function V(s){return String(s??"").replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#39;")}function de(s){return`${s}-${Date.now().toString(36)}-${Math.random().toString(36).slice(2,7)}`}function ue(s){return j[s]||(j[s]={file:null,position:{x:.5,y:.5,zoom:1},imageSize:null,previewUrl:""}),j[s]}function Ce(s){return s==="title"?{kind:"title",fontSize:.046,lineHeight:1.12,padding:.01,family:"serif",weight:600,align:"left"}:{kind:"body",fontSize:.026,lineHeight:1.45,padding:.012,family:"sans",weight:500,align:"left"}}function Ge(s,l){Object.assign(s,{...s,...Ce(l)})}function Ve(s){if(s.dataset.singleLine==="true"){s.innerText=s.innerText.replace(/\r?\n+/g," ");return}s.innerHTML=s.innerHTML.replace(/<div><br><\/div>/gi,"<br>").replace(/<div>/gi,"<br>").replace(/<\/div>/gi,"").replace(/&nbsp;/gi," ")}function lt(s){const l=Number(s.dataset.maxChars||0),d=s.innerText.replace(/\r/g,"");if(s.dataset.previousValue||(s.dataset.previousValue=d),l&&d.length>l||s.scrollHeight>s.clientHeight+1||s.scrollWidth>s.clientWidth+1){s.innerText=s.dataset.previousValue;return}s.dataset.previousValue=d.trim()?d:""}function fe(s){return s.innerText.replace(/\r/g,"")}function Ae(s){const l=window.getSelection();if(!l)return;const d=document.createRange();d.selectNodeContents(s),d.collapse(!1),l.removeAllRanges(),l.addRange(d)}function qe(s){const l=window.getSelection();if(!l||l.rangeCount===0)return 0;const d=l.getRangeAt(0);return!s.contains(d.startContainer)||!s.contains(d.endContainer)?0:l.toString().length}function ze(s,l){const d=window.getSelection();if(!d||d.rangeCount===0){s.append(document.createTextNode(l)),Ae(s);return}const _=d.getRangeAt(0);_.deleteContents();const M=document.createTextNode(l);_.insertNode(M),_.setStartAfter(M),_.collapse(!0),d.removeAllRanges(),d.addRange(_)}function Ze(s){!e||!E||(e.classList.toggle("is-preview-mode",s),E.textContent=s?"back":"preview",E.setAttribute("aria-pressed",String(s)),D.forEach(l=>{l.setAttribute("contenteditable",s?"false":"true"),s&&l.blur()}),(n==null?void 0:n.dataset.template)==="page8"&&ee())}function Se(s){const l=document.querySelector(`[data-editable="${s}"]`);return l?l.innerText.replace(/\r/g,"").trim():""}function Qe(){const s=o.querySelector('input[name="backgroundColor"]:checked'),l=(s==null?void 0:s.value)||c.composeBackgroundColor||"#f8f4ee";if(c.composeBackgroundColor=l,k({backgroundColor:l}),!n){o.querySelectorAll(".color-chip").forEach(d=>{const _=d.querySelector('input[name="backgroundColor"]');d.classList.toggle("is-active",!!(_!=null&&_.checked))});return}n.style.setProperty("--sheet-bg",l),o.querySelectorAll(".color-chip").forEach(d=>{const _=d.querySelector('input[name="backgroundColor"]');d.classList.toggle("is-active",!!(_!=null&&_.checked))})}function Ke(s){const l=s||be,d=(n==null?void 0:n.dataset.template)||(Y?"page8":null),_=t==="edit"&&d&&d!==l&&(d==="page8"||l==="page8");if(c.composeTemplateId=l,k({templateId:l}),_){ie();return}if(!n){o.querySelectorAll(".template-thumb").forEach(h=>{const g=h.querySelector('input[name="templateId"]');h.classList.toggle("is-active",(g==null?void 0:g.value)===l)}),Y&&l!=="page8"&&ie();return}n.dataset.template=l,o.querySelectorAll(".template-thumb").forEach(h=>{const g=h.querySelector('input[name="templateId"]');h.classList.toggle("is-active",(g==null?void 0:g.value)===l)});const M=l==="page8";A&&(A.hidden=!0),n.classList.toggle("compose-sheet--custom",M),ct()}function Oe(s){var d;const l=o.querySelector(`input[name="templateId"][value="${s}"]`);(d=l==null?void 0:l.closest(".template-thumb"))==null||d.scrollIntoView({behavior:"smooth",block:"nearest",inline:"center"})}function Fe(s){var d;const l=o.querySelector(`input[name="backgroundColor"][value="${s}"]`);(d=l==null?void 0:l.closest(".color-chip"))==null||d.scrollIntoView({behavior:"smooth",block:"nearest",inline:"center"})}function L(s){const l=document.querySelector(`[data-slot-image="${s}"]`),d=document.querySelector(`[data-slot-placeholder="${s}"]`),_=document.querySelector(`[data-slot-remove="${s}"]`);if(!(!l||!d||!_)){if(p[s]){l.style.backgroundImage=`url("${p[s]}")`,l.hidden=!1,d.hidden=!0,_.hidden=!1;return}l.style.backgroundImage="",l.hidden=!0,d.hidden=!1,_.hidden=!0}}function P(s,l){const d=Math.min(H.width,Math.max(l.width,s.width)),_=Math.min(H.height,Math.max(l.height,s.height));return{...s,x:Math.min(H.x+H.width-d,Math.max(H.x,ke(s.x))),y:Math.min(H.y+H.height-_,Math.max(H.y,ke(s.y))),width:ke(d),height:ke(_)}}function U(s,l,d=.02){return!(s.x+s.width+d<=l.x||l.x+l.width+d<=s.x||s.y+s.height+d<=l.y||l.y+l.height+d<=s.y)}function R(s){return{x:s.x,y:s.y,width:s.width,height:s.height}}function K(s,l={}){const{ignoreText:d=!1,ignoreImages:_=!1}=l;return[..._?[]:w.imageBoxes.filter(M=>M.id!==s).map(M=>R(M)),...d?[]:w.textBoxes.filter(M=>M.id!==s).map(M=>R(M))]}function te(s,l,d={}){const _=R(s);return!K(l,d).some(h=>U(_,h))}function re(s,l,d,_={}){const M=P({...s},d);if(te(M,l,_))return M;const h=[[0,-1],[1,0],[0,1],[-1,0],[1,-1],[1,1],[-1,1],[-1,-1]],g=Re*2;for(let x=1;x<=18;x+=1)for(const[b,v]of h){const $=P({...M,x:M.x+b*g*x,y:M.y+v*g*x},d);if(te($,l,_))return $}for(let x=H.y;x<=H.y+H.height-M.height;x+=g)for(let b=H.x;b<=H.x+H.width-M.width;b+=g){const v=P({...M,x:b,y:x},d);if(te(v,l,_))return v}return M}function $e(s,l,d=.018){const _=s.y-d,M=s.y+s.height+d,h=H.x,g=H.x+H.width;let x=[{left:h,right:g}];return l.forEach(b=>{const v=b.y-d;if(b.y+b.height+d<=_||v>=M)return;const f=Math.max(h,b.x-d),N=Math.min(g,b.x+b.width+d);x=x.flatMap(J=>{if(N<=J.left||f>=J.right)return[J];const X=[];return f>J.left&&X.push({left:J.left,right:f}),N<J.right&&X.push({left:N,right:J.right}),X})}),x.filter(b=>b.right-b.left>=s.width)}function ye(s,l){const d=P({...s},Pe),_=[];for(let g=0;g<=24;g+=1){const x=ke(d.y-g*Re),b=ke(d.y+g*Re);x>=H.y&&_.push(x),b<=H.y+H.height-d.height&&b!==x&&_.push(b)}let M=d,h=Number.POSITIVE_INFINITY;return _.forEach(g=>{const x={...d,y:g};$e(x,l).forEach(v=>{const $=v.left,f=v.right-d.width,N=ke(Math.min(f,Math.max($,d.x))),J=P({...d,x:N,y:g},Pe);if(l.some(pe=>U(R(J),pe)))return;const X=Math.abs(J.x-d.x),le=Math.abs(J.y-d.y)*2+X;le<h&&(h=le,M=J)})}),M}function oe(s){const l=O(s);!l||l.type!=="image"||(w.textBoxes=w.textBoxes.map(d=>{const _=[...w.imageBoxes.filter(M=>M.id!==d.id).map(M=>R(M)),...w.textBoxes.filter(M=>M.id!==d.id).map(M=>R(M))];return ye(d,_)}))}function Z(s){return[...w.imageBoxes.filter(l=>l.id!==s).map(l=>R(l)),...w.textBoxes.filter(l=>l.id!==s).map(l=>R(l))]}function O(s){const l=w.imageBoxes.findIndex(_=>_.id===s);if(l>=0)return{type:"image",collection:w.imageBoxes,index:l,item:w.imageBoxes[l]};const d=w.textBoxes.findIndex(_=>_.id===s);return d>=0?{type:"text",collection:w.textBoxes,index:d,item:w.textBoxes[d]}:null}function we(s){return s==="image"?ft:Pe}function me(s){return`${Math.round(s*100)}%`}function he(s,l={}){const{rerender:d=!1}=l;if(!u||!m)return;const _=s?O(s):null;if(!_||_.type!=="text")return;const M=m.querySelector(`[data-custom-text="${s}"]`);if(!M)return;const h=u.getBoundingClientRect();if(!h.height)return;const g=Math.max(Pe.height,ke((M.scrollHeight+8)/h.height));if(!(Math.abs(g-_.item.height)<Re/2)){if(_.item.height=g,Object.assign(_.item,P(_.item,Pe)),Object.assign(_.item,ye(_.item,Z(s))),d){ee();return}tt(s,_.item),Te()}}function et(){m&&m.querySelectorAll("[data-custom-item]").forEach(s=>{s.classList.toggle("is-selected",s.dataset.customItem===w.selectedId)})}function tt(s,l){const d=m==null?void 0:m.querySelector(`[data-custom-item="${s}"]`);if(!d)return;const _=pt(l);d.style.left=_.left,d.style.top=_.top,d.style.width=_.width,d.style.height=_.height}function it(){[...w.imageBoxes,...w.textBoxes].forEach(s=>{tt(s.id,s)})}function Be(s,l={}){const{rerender:d=!1}=l;if(w.selectedId=s,d&&(n==null?void 0:n.dataset.template)==="page8"){ee();return}et(),Te()}function Te(){var l,d,_,M,h,g,x,b;if(!T||(n==null?void 0:n.dataset.template)!=="page8")return;const s=w.selectedId?O(w.selectedId):null;if(!s){T.innerHTML=`
        <p class="compose-custom-inspector__title">Selection</p>
        <p class="compose-custom-inspector__note">ボックスを選ぶと、ここで内容や見た目を調整できます。</p>
      `;return}if(s.type==="image"){const v=ue(s.item.id),$=!!(v.previewUrl||v.file),f=Math.max(1,Number((l=v.position)==null?void 0:l.zoom)||1);T.innerHTML=`
        <p class="compose-custom-inspector__title">Image Box</p>
        <p class="compose-custom-inspector__note">${w.imageMode==="crop"?"Crop 中は画像面をドラッグして見せ方を調整します。":"Frame 中はボックス自体を動かします。Crop に切り替えると画像だけを動かせます。"}</p>
        <div class="compose-custom-inspector__meta">
          <span>W ${me(s.item.width)}</span>
          <span>H ${me(s.item.height)}</span>
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
      `,T.querySelectorAll("[data-custom-image-mode]").forEach(N=>{N.addEventListener("click",()=>{N.hasAttribute("disabled")||(w.imageMode=N.dataset.customImageMode==="crop"?"crop":"frame",Te())})}),(d=T.querySelector('[data-custom-control="zoom"]'))==null||d.addEventListener("input",N=>{v.position.zoom=Math.max(1,Number(N.target.value)||1),ee()}),(_=T.querySelector('[data-custom-control="replace-image"]'))==null||_.addEventListener("click",()=>{var N;(N=document.getElementById(`custom-image-${s.item.id}`))==null||N.click()})}else{T.innerHTML=`
      <p class="compose-custom-inspector__title">Text Box</p>
      <p class="compose-custom-inspector__note">Title / Body のプリセットを起点にして、細部は個別調整できます。</p>
      <div class="compose-custom-inspector__meta">
        <span>W ${me(s.item.width)}</span>
        <span>H ${me(s.item.height)}</span>
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
        <textarea class="compose-custom-inspector__textarea" data-custom-control="text">${V(s.item.text)}</textarea>
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
    `;const v=T.querySelector('[data-custom-control="text"]');v==null||v.addEventListener("focus",$=>{const f=w.selectedId?O(w.selectedId):null;if(!(!f||f.type!=="text")&&f.item.isDefaultText&&f.item.text.trim().toLowerCase()==="text"){f.item.text="",f.item.isDefaultText=!1,$.target.value="";const N=m==null?void 0:m.querySelector(`[data-custom-text="${f.item.id}"]`);N&&(N.textContent="")}}),v==null||v.addEventListener("input",$=>{const f=w.selectedId?O(w.selectedId):null;if(!f||f.type!=="text")return;f.item.text=$.target.value.replace(/\r/g,""),f.item.isDefaultText=!1;const N=m==null?void 0:m.querySelector(`[data-custom-text="${f.item.id}"]`);N&&N!==document.activeElement&&(N.textContent=f.item.text),he(f.item.id)}),T.querySelectorAll("[data-custom-preset]").forEach($=>{$.addEventListener("click",()=>{const f=w.selectedId?O(w.selectedId):null;!f||f.type!=="text"||(Ge(f.item,$.dataset.customPreset==="title"?"title":"body"),ee(),he(f.item.id,{rerender:!0}))})}),(M=T.querySelector('[data-custom-control="fontSize"]'))==null||M.addEventListener("input",$=>{const f=w.selectedId?O(w.selectedId):null;!f||f.type!=="text"||(f.item.fontSize=Number($.target.value)/520,ee(),he(f.item.id,{rerender:!0}))}),(h=T.querySelector('[data-custom-control="lineHeight"]'))==null||h.addEventListener("input",$=>{const f=w.selectedId?O(w.selectedId):null;!f||f.type!=="text"||(f.item.lineHeight=Number($.target.value)/100,ee(),he(f.item.id,{rerender:!0}))}),(g=T.querySelector('[data-custom-control="padding"]'))==null||g.addEventListener("input",$=>{const f=w.selectedId?O(w.selectedId):null;!f||f.type!=="text"||(f.item.padding=Number($.target.value)/1e3,ee(),he(f.item.id,{rerender:!0}))}),(x=T.querySelector('[data-custom-control="weight"]'))==null||x.addEventListener("input",$=>{const f=w.selectedId?O(w.selectedId):null;!f||f.type!=="text"||(f.item.weight=Number($.target.value),ee(),he(f.item.id,{rerender:!0}))}),T.querySelectorAll("[data-custom-align]").forEach($=>{$.addEventListener("click",()=>{const f=w.selectedId?O(w.selectedId):null;!f||f.type!=="text"||(f.item.align=$.dataset.customAlign||"left",ee())})}),T.querySelectorAll("[data-custom-family]").forEach($=>{$.addEventListener("click",()=>{const f=w.selectedId?O(w.selectedId):null;!f||f.type!=="text"||(f.item.family=$.dataset.customFamily==="serif"?"serif":"sans",f.item.kind=f.item.family==="serif"?"title":"body",f.item.weight=f.item.family==="serif"?Math.max(500,f.item.weight):Math.min(600,f.item.weight),ee(),he(f.item.id,{rerender:!0}))})})}(b=T.querySelector('[data-custom-control="delete"]'))==null||b.addEventListener("click",()=>{const v=w.selectedId,$=v?O(v):null;if($){if($.collection.splice($.index,1),$.type==="image"){const f=j[v];f!=null&&f.previewUrl&&URL.revokeObjectURL(f.previewUrl),delete j[v],oe(v)}w.selectedId=null,ee()}})}function ee(){if(!m||!n)return;const s=n.dataset.template==="page8",l=t==="edit"&&!(e!=null&&e.classList.contains("is-preview-mode"));if(m.hidden=!s,!s){m.innerHTML="",Te();return}const d=[...w.imageBoxes.map(h=>h.id),...w.textBoxes.map(h=>h.id)];(!w.selectedId||!d.includes(w.selectedId))&&(w.selectedId=d[0]||null);const _=w.imageBoxes.map(h=>{const g=pt(h),x=ue(h.id),b=!!(x.previewUrl||x.file),v=x.position||{x:.5,y:.5,zoom:1},$=`${w.selectedId===h.id?" is-selected":""}${b?"":" is-empty"}`,f=b?`<img class="compose-custom-item__image" src="${x.previewUrl}" alt="" draggable="false" style="object-position:${(v.x||.5)*100}% ${(v.y||.5)*100}%;transform:scale(${Math.max(1,v.zoom||1)});" />`:`<div class="compose-custom-item__placeholder"><span class="compose-custom-item__plus">${G("compose")}</span></div>`;return`
        <div
          class="compose-custom-item compose-custom-item--image${$}"
          data-custom-item="${h.id}"
          data-custom-type="image"
          style="left:${g.left};top:${g.top};width:${g.width};height:${g.height};"
        >
          ${l?`<input class="field__file" id="custom-image-${h.id}" type="file" accept="image/*" />`:""}
          ${l?`<div class="compose-custom-item__surface compose-custom-item__surface--image" data-custom-surface="${h.id}">${f}</div>`:`<div class="compose-custom-item__surface compose-custom-item__surface--image">${f}</div>`}
          ${l?`<button class="compose-custom-item__drag" type="button" data-custom-drag="${h.id}" aria-label="move image box">${G("drag")}</button>`:""}
          ${l?`<button class="compose-custom-item__remove" type="button" data-custom-remove="${h.id}" aria-label="remove image box">&times;</button>`:""}
          ${l?`<button class="compose-custom-item__resize" type="button" data-custom-resize="${h.id}" aria-label="resize image box"></button>`:""}
        </div>
      `}).join(""),M=w.textBoxes.map(h=>{const g=pt(h);return`
        <div
          class="compose-custom-item compose-custom-item--text${w.selectedId===h.id?" is-selected":""}"
          data-custom-item="${h.id}"
          data-custom-type="text"
          style="left:${g.left};top:${g.top};width:${g.width};height:${g.height};"
        >
          <div
            class="compose-custom-item__text"
            data-custom-text="${h.id}"
            contenteditable="${l?"true":"false"}"
            spellcheck="false"
            style="text-align:${h.align};font-size:${Math.max(11,h.fontSize*520)}px;line-height:${h.lineHeight};padding:${Math.max(4,h.padding*520)}px;font-family:${h.family==="serif"?"'Cormorant Garamond', 'Times New Roman', serif":"'Noto Sans JP', sans-serif"};font-weight:${h.weight};"
          >${V(h.text)}</div>
          ${l?`<button class="compose-custom-item__drag" type="button" data-custom-drag="${h.id}" aria-label="move text box">${G("drag")}</button>`:""}
          ${l?`<button class="compose-custom-item__remove" type="button" data-custom-remove="${h.id}" aria-label="remove text box">&times;</button>`:""}
          ${l?`<button class="compose-custom-item__resize" type="button" data-custom-resize="${h.id}" aria-label="resize text box"></button>`:""}
        </div>
      `}).join("");m.innerHTML=`${_}${M}`,Te(),m.onpointerdown=h=>{h.target===m&&(w.selectedId=null,et(),Te())},m.querySelectorAll("[data-custom-item]").forEach(h=>{let g=null;h.addEventListener("pointerdown",b=>{var xe,Le;const v=h.dataset.customItem||"",$=O(v);if(!$||!u||b.target.closest("[data-custom-remove], [data-custom-resize]"))return;b.preventDefault();const f=b.target.closest("[data-custom-drag]"),N=b.target.closest("[data-custom-text]"),J=b.target.closest("[data-custom-surface]"),X=$.type==="image"?ue(v):null;Be(v);const Q=u.getBoundingClientRect(),le=!!(X!=null&&X.previewUrl||X!=null&&X.file),pe=$.type==="image"&&w.imageMode==="crop"&&le&&J&&!f;g={pointerId:b.pointerId,itemId:v,mode:pe?"crop-image":"move",originX:pe?X.position.x||.5:$.item.x,originY:pe?X.position.y||.5:$.item.y,startX:b.clientX,startY:b.clientY,frameWidth:Q.width,frameHeight:Q.height,type:$.type,zoom:((xe=X==null?void 0:X.position)==null?void 0:xe.zoom)||1,targetSurface:$.type==="image"&&!le?J:null,targetText:f?null:N,cropSurface:pe?J:null,dragged:!1},(Le=h.setPointerCapture)==null||Le.call(h,b.pointerId)}),h.addEventListener("pointermove",b=>{var J,X;if(!g||g.pointerId!==b.pointerId)return;const v=b.clientX-g.startX,$=b.clientY-g.startY;if(!g.dragged&&Math.hypot(v,$)<6)return;g.dragged=!0,b.preventDefault();const f=O(g.itemId);if(!f)return;const N={x:f.item.x,y:f.item.y,width:f.item.width,height:f.item.height};if(g.mode==="crop-image"){const Q=(J=g.cropSurface)==null?void 0:J.getBoundingClientRect(),le=ue(g.itemId),pe=le.imageSize;if(!Q||!pe)return;const xe=pe.width/pe.height,Le=Q.width/Q.height,Ne=(xe>Le?Q.height*xe:Q.width)*g.zoom,fi=(xe>Le?Q.height:Q.width/xe)*g.zoom,Nt=Math.max(0,Ne-Q.width),Dt=Math.max(0,fi-Q.height);le.position.x=Nt?Math.min(1,Math.max(0,g.originX-v/Nt)):.5,le.position.y=Dt?Math.min(1,Math.max(0,g.originY-$/Dt)):.5;const Rt=(X=g.cropSurface)==null?void 0:X.querySelector(".compose-custom-item__image");Rt&&(Rt.style.objectPosition=`${le.position.x*100}% ${le.position.y*100}%`)}else{f.item.x=g.originX+v/g.frameWidth,f.item.y=g.originY+$/g.frameHeight,Object.assign(f.item,P(f.item,we(f.type)));const Q=f.type==="image"?{ignoreText:!0}:{};Object.assign(f.item,re(f.item,f.item.id,we(f.type),Q)),te(f.item,f.item.id,Q)||Object.assign(f.item,N),f.type==="image"?oe(f.item.id):Object.assign(f.item,ye(f.item,Z(f.item.id))),Te(),it()}});const x=b=>{var J,X;if(!g||g.pointerId!==b.pointerId)return;const v=g.itemId,$=g.dragged,f=g.targetSurface,N=g.targetText;if(g=null,(J=h.releasePointerCapture)==null||J.call(h,b.pointerId),!$){if(f){(X=document.getElementById(`custom-image-${v}`))==null||X.click();return}N&&(N.focus(),Ae(N))}};h.addEventListener("pointerup",x),h.addEventListener("pointercancel",x)}),m.querySelectorAll("[data-custom-remove]").forEach(h=>{h.addEventListener("click",g=>{g.preventDefault(),g.stopPropagation();const x=h.dataset.customRemove,b=x?O(x):null;if(b){if(b.collection.splice(b.index,1),b.type==="image"){const v=j[x];v!=null&&v.previewUrl&&URL.revokeObjectURL(v.previewUrl),delete j[x],oe(x)}w.selectedId=null,ee()}})}),m.querySelectorAll("[data-custom-text]").forEach(h=>{h.addEventListener("beforeinput",g=>{g.inputType==="insertParagraph"&&(ze(h,`
`),g.preventDefault())}),h.addEventListener("focus",()=>{const g=h.dataset.customText,x=g?O(g):null;(x==null?void 0:x.type)==="text"&&x.item.isDefaultText&&x.item.text.trim().toLowerCase()==="text"&&(x.item.text="",x.item.isDefaultText=!1,h.textContent=""),Be(h.dataset.customText||"")}),h.addEventListener("input",()=>{const g=h.dataset.customText,x=g?O(g):null;if(!x)return;x.item.text=h.innerText.replace(/\r/g,""),x.item.isDefaultText=!1;const b=T==null?void 0:T.querySelector('[data-custom-control="text"]');b&&b!==document.activeElement&&(b.value=x.item.text),he(x.item.id)})}),m.querySelectorAll('input[id^="custom-image-"]').forEach(h=>{h.addEventListener("change",async g=>{var $;const x=h.id.replace("custom-image-",""),b=ue(x),v=(($=g.target.files)==null?void 0:$[0])||null;b.previewUrl&&(URL.revokeObjectURL(b.previewUrl),b.previewUrl=""),b.file=v,b.position={x:.5,y:.5,zoom:1},b.imageSize=v?await F(v):null,v&&(b.previewUrl=fileToPreviewUrl(v)),oe(x),ee()})}),m.querySelectorAll("[data-custom-resize]").forEach(h=>{let g=null;h.addEventListener("pointerdown",b=>{var N;const v=h.dataset.customResize||"",$=O(v);if(!$||!u)return;b.preventDefault(),b.stopPropagation(),Be(v);const f=u.getBoundingClientRect();g={pointerId:b.pointerId,itemId:v,originX:$.item.x,originY:$.item.y,originWidth:$.item.width,originHeight:$.item.height,startX:b.clientX,startY:b.clientY,frameWidth:f.width,frameHeight:f.height,type:$.type},(N=h.setPointerCapture)==null||N.call(h,b.pointerId)}),h.addEventListener("pointermove",b=>{if(!g||g.pointerId!==b.pointerId)return;b.preventDefault();const v=O(g.itemId);if(!v)return;const $=we(g.type),f={x:v.item.x,y:v.item.y,width:v.item.width,height:v.item.height};v.item.width=g.originWidth+(b.clientX-g.startX)/g.frameWidth,v.item.height=g.originHeight+(b.clientY-g.startY)/g.frameHeight,Object.assign(v.item,P(v.item,$));const N=v.type==="image"?{ignoreText:!0}:{};Object.assign(v.item,re(v.item,v.item.id,$,N)),te(v.item,v.item.id,N)||Object.assign(v.item,f),v.type==="image"&&oe(v.item.id),Te(),it()});const x=b=>{var v;!g||g.pointerId!==b.pointerId||(g=null,(v=h.releasePointerCapture)==null||v.call(h,b.pointerId))};h.addEventListener("pointerup",x),h.addEventListener("pointercancel",x)}),window.requestAnimationFrame(()=>{w.textBoxes.forEach(h=>{he(h.id)})})}function ct(){if(!n||!u)return;const s=n.dataset.template==="page8";if(Object.values(se).forEach(l=>{l&&(l.style.left="",l.style.top="",l.style.width="",l.style.height="")}),Object.entries(ce).forEach(([l,d])=>{d&&(d.style.left="",d.style.top="",d.style.width="",d.style.height="",d.style.fontSize="",d.style.lineHeight="",d.style.textAlign="",l==="editor"&&(d.style.right=""),l==="body"&&(d.style.bottom=""),l==="date"&&(d.style.bottom=""))}),A&&(A.hidden=!s||t!=="edit"),!s){m&&(m.hidden=!0,m.innerHTML="");return}w.imageBoxes=bt({imageBoxes:w.imageBoxes}),w.textBoxes=vt({textBoxes:w.textBoxes},i),ee()}if(o.querySelectorAll('input[name="backgroundColor"]').forEach(s=>{s.addEventListener("change",()=>{Qe(),Fe(s.value)})}),Qe(),window.setTimeout(()=>{var s;Fe((s=o.querySelector('input[name="backgroundColor"]:checked'))==null?void 0:s.value)},0),o.querySelectorAll('input[name="templateId"]').forEach(s=>{s.addEventListener("change",()=>{Ke(s.value),Oe(s.value)})}),Ke(c.composeTemplateId||((Bt=o.querySelector('input[name="templateId"]:checked'))==null?void 0:Bt.value)),window.setTimeout(()=>{var s;Oe(c.composeTemplateId||((s=o.querySelector('input[name="templateId"]:checked'))==null?void 0:s.value))},0),document.querySelectorAll("[data-template-carousel-nav]").forEach(s=>{s.addEventListener("click",()=>{const l=document.querySelector("[data-template-carousel]");if(!l)return;const d=s.dataset.templateCarouselNav==="next"?1:-1;l.scrollBy({left:l.clientWidth*.72*d,behavior:"smooth"})})}),document.querySelectorAll("[data-color-carousel-nav]").forEach(s=>{s.addEventListener("click",()=>{const l=document.querySelector("[data-color-carousel]");if(!l)return;const d=s.dataset.colorCarouselNav==="next"?1:-1;l.scrollBy({left:l.clientWidth*.72*d,behavior:"smooth"})})}),document.querySelectorAll("[data-compose-stage-nav]").forEach(s=>{s.addEventListener("click",()=>{const l=s.dataset.composeStageNav;l&&W(l)})}),t!=="select"&&a){if(S&&C&&S.addEventListener("click",()=>{const s=!C.hidden;C.hidden=s,S.setAttribute("aria-expanded",String(!s))}),E&&E.addEventListener("click",()=>{const s=!(e!=null&&e.classList.contains("is-preview-mode"));Ze(!!s)}),Ze(!1),Y){yi(async()=>{const{mountComposePretextEditor:s}=await import("./pretextComposeBridge-O3bw0V0R.js");return{mountComposePretextEditor:s}},__vite__mapDeps([0,1,2,3,4]),import.meta.url).then(({mountComposePretextEditor:s})=>{Y.isConnected&&(ge=s(Y,{customLayout:(r==null?void 0:r.customLayout)||{},textValues:i}))}).catch(s=>{console.error("Failed to mount pretext compose editor",s),Y.innerHTML='<p class="compose-pretext-host__error">Failed to load the editor.</p>'});return}o.querySelectorAll("[data-custom-add]").forEach(s=>{s.addEventListener("click",l=>{l.preventDefault();const d=s.dataset.customAdd;if((n==null?void 0:n.dataset.template)!=="page8")return;if(d==="image"){const M={id:de("image"),x:.14,y:.18,width:.28,height:.22};w.imageBoxes=[...w.imageBoxes,P(M,ft)],w.selectedId=M.id,ue(M.id),oe(M.id),ee();return}const _=ye({id:de("text"),kind:"body",text:"text",isDefaultText:!0,x:.18,y:.2,width:.28,height:.12,fontSize:.026,lineHeight:1.45,padding:.012,align:"left",family:"sans",weight:500},[...w.imageBoxes.map(M=>R(M)),...w.textBoxes.map(M=>R(M))]);w.textBoxes=[...w.textBoxes,P(_,Pe)],w.selectedId=_.id,ee()})}),[{inputId:"imageInputPrimary",stateKey:"primary"},{inputId:"imageInputSecondary",stateKey:"secondary"},{inputId:"imageInputAccent",stateKey:"accent"}].forEach(({inputId:s,stateKey:l})=>{const d=document.querySelector(`[data-slot="${s}"]`),_=document.getElementById(s);if(!_)return;_.addEventListener("change",async h=>{var x;const g=((x=h.target.files)==null?void 0:x[0])||null;y[l].file=g?await Ma(g,{maxWidth:1600,quality:.9}):null,y[l].position={x:.5,y:.5},y[l].imageSize=g?await F(g):null,p[s]=y[l].file||"",L(s),B(s),k({standardFiles:z()})});const M=document.querySelector(`[data-slot-remove="${s}"]`);if(M&&M.addEventListener("click",h=>{h.preventDefault(),h.stopPropagation(),p[s]="",y[l]={file:null,position:{x:.5,y:.5},imageSize:null},_.value="",L(s),k({standardFiles:z()})}),d){let h=null;d.addEventListener("pointerdown",x=>{var b,v;if(!(e!=null&&e.classList.contains("is-preview-mode"))){if((n==null?void 0:n.dataset.template)==="page8"){const $=w.imageBoxes[l];if(!$||!u)return;x.preventDefault(),x.stopPropagation();const f=u.getBoundingClientRect();h={pointerId:x.pointerId,mode:"move-box",startX:x.clientX,startY:x.clientY,originX:$.x,originY:$.y,frameWidth:f.width,frameHeight:f.height},d.classList.add("is-dragging"),(b=d.setPointerCapture)==null||b.call(d,x.pointerId);return}y[l].file&&(x.preventDefault(),x.stopPropagation(),h={pointerId:x.pointerId,mode:"pan-image",startX:x.clientX,startY:x.clientY,originX:y[l].position.x,originY:y[l].position.y},d.classList.add("is-dragging"),(v=d.setPointerCapture)==null||v.call(d,x.pointerId))}}),d.addEventListener("pointermove",x=>{if(!h||h.pointerId!==x.pointerId)return;if(x.preventDefault(),h.mode==="move-box"){const xe=h.originX+(x.clientX-h.startX)/h.frameWidth,Le=h.originY+(x.clientY-h.startY)/h.frameHeight,Ne=w.imageBoxes[l];Ne.x=Math.min(H.x+H.width-Ne.width,Math.max(H.x,xe)),Ne.y=Math.min(H.y+H.height-Ne.height,Math.max(H.y,Le)),ct();return}const b=d.getBoundingClientRect(),v=y[l].imageSize;if(!v)return;const $=v.width/v.height,f=b.width/b.height,N=$>f?b.height*$:b.width,J=$>f?b.height:b.width/$,X=Math.max(0,N-b.width),Q=Math.max(0,J-b.height),le=x.clientX-h.startX,pe=x.clientY-h.startY;y[l].position.x=X?Math.min(1,Math.max(0,h.originX-le/X)):.5,y[l].position.y=Q?Math.min(1,Math.max(0,h.originY-pe/Q)):.5,B(s),k({standardFiles:z()})});const g=x=>{var b;!h||h.pointerId!==x.pointerId||(h=null,d.classList.remove("is-dragging"),(b=d.releasePointerCapture)==null||b.call(d,x.pointerId))};d.addEventListener("pointerup",g),d.addEventListener("pointercancel",g)}L(s),B(s)}),ct(),D.forEach(s=>{s.dataset.previousValue=fe(s),s.addEventListener("beforeinput",l=>{var g;if(s.dataset.singleLine==="true"&&(l.inputType==="insertParagraph"||l.inputType==="insertLineBreak")){l.preventDefault();return}const d=Number(s.dataset.maxChars||0);if(!d||!l.inputType.startsWith("insert"))return;const _=fe(s).length,M=qe(s),h=((g=l.data)==null?void 0:g.length)??1;_-M+h>d&&l.preventDefault()}),s.addEventListener("paste",l=>{var v,$;l.preventDefault();const d=(($=(v=l.clipboardData)==null?void 0:v.getData("text/plain"))==null?void 0:$.replace(/\r/g,""))??"",_=s.dataset.singleLine==="true"?d.replace(/\n+/g," "):d,M=Number(s.dataset.maxChars||0),h=fe(s).length,g=qe(s),x=M?Math.max(0,M-(h-g)):_.length,b=_.slice(0,x);b&&(ze(s,b),s.dataset.previousValue=fe(s))}),s.addEventListener("input",()=>{const l=Number(s.dataset.maxChars||0),d=fe(s);if(l&&d.length>l){s.innerText=s.dataset.previousValue||"",Ae(s);return}s.dataset.previousValue=d}),s.addEventListener("blur",()=>{Ve(s),lt(s)})}),t==="tags"&&a.addEventListener("submit",async s=>{var h;s.preventDefault();const l=I(),d={templateId:l.templateId,backgroundColor:l.backgroundColor,headline:l.headline,subhead:l.subhead,intro:l.intro,body:l.body,date:l.date,editor:l.editor,customLayout:l.customLayout},_=await ja(d,l.standardFiles,{}),M=String(((h=Je().profile)==null?void 0:h.name)||"you").trim()||"you";c.composeEditingPostId?Mi(c.composeEditingPostId,{caption:Ut(d),imageData:_,fixedTags:l.fixedTags,freeTags:l.freeTags,composeData:{...d,fixedTags:l.fixedTags,freeTags:l.freeTags,standardFiles:l.standardFiles}}):ki({authorName:M,caption:Ut(d),imageData:_,fixedTags:l.fixedTags,freeTags:l.freeTags,composeData:{...d,fixedTags:l.fixedTags,freeTags:l.freeTags,standardFiles:l.standardFiles}}),c.screen="timeline",c.timelineTab="recommended",c.composeStage="select",c.composeWorkingDraft=null,ie()})}}function Ga(){const e=document.getElementById("issueForm");e&&e.addEventListener("submit",t=>{t.preventDefault();const a=new FormData(e),o=a.getAll("issuePostIds").map(n=>String(n));o.length&&(Ni({title:String(a.get("title")).trim(),subtitle:String(a.get("subtitle")||"").trim(),tone:String(a.get("tone")||"soft"),postIds:o}),ae())})}function Va(){rt(document.getElementById("screenArea"));function e(r){return new Promise(i=>{const p=new Image,y=URL.createObjectURL(r);p.onload=()=>{i({width:p.naturalWidth,height:p.naturalHeight}),URL.revokeObjectURL(y)},p.onerror=()=>{i(null),URL.revokeObjectURL(y)},p.src=y})}document.querySelectorAll("[data-profile-avatar-upload]").forEach(r=>{r.addEventListener("click",i=>{i.stopPropagation(),c.profileExpanded=!0,c.profileSection="edit",ae(),window.setTimeout(()=>{var p;(p=document.getElementById("profileAvatarInput"))==null||p.click()},0)})}),document.querySelectorAll("[data-profile-section]").forEach(r=>{r.addEventListener("click",()=>{c.profileSection=r.dataset.profileSection,c.profileSection==="library"&&(c.profileLibraryTab=c.profileLibraryTab||"liked"),ae()})}),document.querySelectorAll("[data-profile-library-tab]").forEach(r=>{r.addEventListener("click",()=>{c.profileLibraryTab=r.dataset.profileLibraryTab||"liked",ae()})});const t=document.getElementById("profileAvatarInput"),a=document.getElementById("avatarCropper"),o=document.getElementById("avatarCropSurface"),n=document.getElementById("avatarCropImage");function u(){if(!(!a||!n)){if(!q.file||!q.previewUrl){a.hidden=!0,n.removeAttribute("src");return}a.hidden=!1,n.src=q.previewUrl,n.style.objectPosition=`${q.crop.x*100}% ${q.crop.y*100}%`,n.style.transform=`scale(${q.crop.zoom})`}}if(t&&t.addEventListener("change",async r=>{var p;const i=((p=r.target.files)==null?void 0:p[0])||null;q.previewUrl&&(URL.revokeObjectURL(q.previewUrl),q.previewUrl=""),q.file=i,q.imageSize=i?await e(i):null,q.crop={x:.5,y:.5,zoom:1},i&&(q.previewUrl=fileToPreviewUrl(i)),c.profileAvatarCropOpen=!!i,ae()}),o){let r=null;o.addEventListener("pointerdown",p=>{var y;q.file&&(r={pointerId:p.pointerId,startX:p.clientX,startY:p.clientY,originX:q.crop.x,originY:q.crop.y},o.classList.add("is-dragging"),(y=o.setPointerCapture)==null||y.call(o,p.pointerId))}),o.addEventListener("pointermove",p=>{if(!r||r.pointerId!==p.pointerId||!q.imageSize)return;const y=o.getBoundingClientRect(),{width:S,height:C}=q.imageSize,E=S/C,A=y.width/y.height,T=E>A?y.height*E:y.width,Y=E>A?y.height:y.width/E,D=T*q.crop.zoom,w=Y*q.crop.zoom,j=Math.max(0,D-y.width),ce=Math.max(0,w-y.height),se=p.clientX-r.startX,z=p.clientY-r.startY;q.crop.x=j?Math.min(1,Math.max(0,r.originX-se/j)):.5,q.crop.y=ce?Math.min(1,Math.max(0,r.originY-z/ce)):.5,u()});const i=p=>{var y;!r||r.pointerId!==p.pointerId||(r=null,o.classList.remove("is-dragging"),(y=o.releasePointerCapture)==null||y.call(o,p.pointerId))};o.addEventListener("pointerup",i),o.addEventListener("pointercancel",i)}u();const m=document.getElementById("profileForm");m&&m.addEventListener("submit",async r=>{r.preventDefault();const i=new FormData(m),p=q.file?await Ia(q.file,q.crop,{size:320}):Je().profile.avatarData;Ai({name:String(i.get("name")).trim(),bio:String(i.get("bio")).trim(),avatarData:p}),je(),c.profileSection=null,c.profileExpanded=!0,ae()}),document.querySelectorAll("[data-follow-author]").forEach(r=>{r.addEventListener("click",()=>{Bi(r.dataset.followAuthor),ae()})})}function Za(){rt(document.getElementById("screenArea")),document.querySelectorAll("[data-close-post-detail]").forEach(e=>{e.addEventListener("click",()=>{hi()})})}function Qa(){document.querySelectorAll("[data-close-preview]").forEach(e=>{e.addEventListener("click",()=>{c.previewPostId=null,Ye()})}),document.querySelectorAll("[data-close-comments]").forEach(e=>{e.addEventListener("click",()=>{c.commentPostId=null,Ye()})}),document.querySelectorAll("[data-delete-post]").forEach(e=>{e.addEventListener("click",()=>{const t=e.dataset.deletePost;if(!t)return;const a=He(t);if(mi(a)&&window.confirm("この投稿を削除しますか？")){if(Ii(t),c.previewPostId===t&&(c.previewPostId=null),c.commentPostId===t&&(c.commentPostId=null),c.screen==="post"){hi();return}ae()}})}),document.querySelectorAll("[data-comment-form]").forEach(e=>{e.addEventListener("submit",t=>{t.preventDefault();const a=e.querySelector('input[name="comment"]');Ei(e.dataset.commentForm,a.value),c.commentPostId=e.dataset.commentForm,Ye(),ae()})})}function Ka(){switch(Fa(),c.screen){case"home":qa();break;case"timeline":za();break;case"search":Oa();break;case"compose":Ja();break;case"magazine":Ga();break;case"profile":Va();break;case"post":Za();break}}function gi(e=document.getElementById("app")){if(!e)throw new Error("bootLegacyApp requires an app root element.");if(Ue=e,typeof window<"u"&&typeof window.matchMedia=="function"&&!De){De=window.matchMedia("(prefers-color-scheme: dark)");const t=()=>{c.homeTheme==="system"&&ie()};typeof De.addEventListener=="function"?De.addEventListener("change",t):typeof De.addListener=="function"&&De.addListener(t)}return ie(),{render:ie}}if(typeof window<"u"&&!window.__MEMORIES_REACT_HOST__){const e=document.getElementById("app");e&&gi(e)}const to=Object.freeze(Object.defineProperty({__proto__:null,bootLegacyApp:gi},Symbol.toStringTag,{value:"Module"}));export{H as P,vt as a,to as b,bt as n};
