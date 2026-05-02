const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["./pretextComposeBridge-B2rxPE3X.js","./client-CTQ0Ju4c.js","./styles-Dm89ys_c.js","./styles-QfIVylyn.css","./main-CZoeDzAH.js","./main-C3NwuWyv.css"])))=>i.map(i=>d[i]);
import{_ as si}from"./main-CZoeDzAH.js";function ri(){return""}function Ht(e){const t=new Date(e),a=t.getFullYear(),o=String(t.getMonth()+1).padStart(2,"0"),s=String(t.getDate()).padStart(2,"0");return`${a}.${o}.${s}`}function Wt(e){const t=new Date(e),a=t.getFullYear(),o=String(t.getMonth()+1).padStart(2,"0"),s=String(t.getDate()).padStart(2,"0"),u=String(t.getHours()).padStart(2,"0"),m=String(t.getMinutes()).padStart(2,"0");return`${a}.${o}.${s} ${u}:${m}`}function li(e){const t=new Date(e).getTime();return(Date.now()-t)/(1e3*60*60)<=72}function ci(e){const t=Date.now()-new Date(e).getTime(),a=Math.floor(t/6e4);if(a<1)return"たった今";if(a<60)return`${a}分前`;const o=Math.floor(a/60);return o<24?`${o}時間前`:`${Math.floor(o/24)}日前`}function F(e){return{timeline:'<svg viewBox="0 0 24 24" aria-hidden="true" fill="none" stroke="currentColor" stroke-width="1.15" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="2.3" fill="currentColor" stroke="none"/><ellipse cx="12" cy="12" rx="8.8" ry="4.1" transform="rotate(18 12 12)"/><ellipse cx="12" cy="12" rx="8.1" ry="3.3" transform="rotate(78 12 12)"/><ellipse cx="12" cy="12" rx="7.6" ry="5.2" transform="rotate(-40 12 12)"/><circle cx="18.9" cy="6.2" r="1.15" fill="currentColor" stroke="none"/><circle cx="17.8" cy="17.3" r="1" fill="currentColor" stroke="none"/><circle cx="6.1" cy="8" r="0.95" fill="currentColor" stroke="none"/><circle cx="7.1" cy="18.2" r="0.9" fill="currentColor" stroke="none"/><circle cx="11.2" cy="6.4" r="0.9" fill="currentColor" stroke="none"/></svg>',search:'<svg viewBox="0 0 24 24" aria-hidden="true" fill="none" stroke="currentColor" stroke-width="1.15" stroke-linecap="round" stroke-linejoin="round"><ellipse cx="12" cy="6.5" rx="6.9" ry="2.1"/><path d="M5.7 6.8c1 3.1 3 5.6 6.3 11.5"/><path d="M18.3 6.8c-1 3.1-3 5.6-6.3 11.5"/><circle cx="12" cy="19.8" r="1.55" fill="currentColor" stroke="none"/><circle cx="12" cy="9.2" r="0.8" fill="currentColor" stroke="none"/><circle cx="9.2" cy="8.6" r="0.65" fill="currentColor" stroke="none"/><circle cx="14.9" cy="8.3" r="0.65" fill="currentColor" stroke="none"/><circle cx="10.2" cy="11.2" r="0.55" fill="currentColor" stroke="none"/><circle cx="13.8" cy="11" r="0.55" fill="currentColor" stroke="none"/><circle cx="12" cy="12.9" r="0.55" fill="currentColor" stroke="none"/><circle cx="11" cy="15.1" r="0.45" fill="currentColor" stroke="none"/><circle cx="13" cy="15.6" r="0.45" fill="currentColor" stroke="none"/><circle cx="8.2" cy="4.2" r="0.45" fill="currentColor" stroke="none"/><circle cx="15.8" cy="3.9" r="0.45" fill="currentColor" stroke="none"/></svg>',compose:'<svg viewBox="0 0 24 24" aria-hidden="true" fill="none" stroke="currentColor" stroke-width="1.45" stroke-linecap="round"><circle cx="12" cy="12" r="2.45" fill="currentColor" stroke="none"/><path d="M12 2.9v5.1M12 16v5.1M2.9 12h5.1M16 12h5.1M5.5 5.5l3.6 3.6M14.9 14.9l3.6 3.6M18.5 5.5l-3.6 3.6M9.1 14.9l-3.6 3.6"/></svg>',issue:'<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M6 4h12a2 2 0 0 1 2 2v12H8a2 2 0 0 0-2 2z"/><path d="M6 4a2 2 0 0 0-2 2v14h14"/></svg>',profile:'<svg viewBox="0 0 24 24" aria-hidden="true" fill="none" stroke="currentColor" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round"><path d="M3.8 16.8c2.3-2.6 4.9-5.1 7.1-7.6 1.1-1.2 2-2.2 2.7-2.2.7 0 1.1.6 1.1 1.4 0 1.1-.5 2.1-.6 3.2 2.1-2.5 4.3-4.3 6.4-4.3-.6 1.4-1.7 2.6-2.6 3.8-.8 1-.9 1.8.3 1.8h2.1"/><path d="M4.1 17.1c3.8-.2 8.5-.4 16-.7"/><circle cx="20.6" cy="8" r="0.85" fill="currentColor" stroke="none"/></svg>',heart:'<svg viewBox="0 0 24 24" aria-hidden="true" fill="none" stroke="currentColor" stroke-width="1.25" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="2.5" fill="currentColor" stroke="none"/><circle cx="12" cy="12" r="4.7"/><circle cx="12" cy="12" r="7"/><circle cx="12" cy="12" r="9.2" opacity="0.68"/></svg>',comment:'<svg viewBox="0 0 24 24" aria-hidden="true" fill="none" stroke="currentColor" stroke-width="1.35" stroke-linecap="round" stroke-linejoin="round"><path d="M4.8 12.2c0-3.4 2.8-6.1 6.2-6.1 3.3 0 5.8 2.4 5.8 5.4 0 3.1-2.6 5.4-6.2 5.4-.8 0-1.6-.1-2.3-.4l-3.3 1 .9-2.7c-.7-.8-1.1-1.7-1.1-2.6Z"/><path d="m14.2 8.3 5 1.1-2 1.9 1.9 5-4.9-1.9-1.9 2Z" opacity="0.8"/></svg>',save:'<svg viewBox="0 0 24 24" aria-hidden="true" fill="none" stroke="currentColor" stroke-width="1.25" stroke-linecap="round" stroke-linejoin="round"><path d="M12 3.6 18.2 7v10L12 20.4 5.8 17V7Z"/><path d="M12 3.6v6.3M18.2 7 12 9.9 5.8 7"/><path d="M12 9.9v10.5"/><circle cx="12" cy="12" r="2.1" fill="currentColor" stroke="none"/></svg>',tag:'<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M20 11.5 11.5 20 4 12.5V5h7.5Z"/><circle cx="15.5" cy="8.5" r="1"/></svg>',spark:'<svg viewBox="0 0 24 24" aria-hidden="true"><path d="m12 3 1.9 5.1L19 10l-5.1 1.9L12 17l-1.9-5.1L5 10l5.1-1.9Z"/></svg>',arrowLeft:'<svg viewBox="0 0 24 24" aria-hidden="true" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M15.5 5.5 9 12l6.5 6.5"/><path d="M9.5 12h9"/></svg>',recommended:'<svg viewBox="0 0 24 24" aria-hidden="true" fill="none" stroke="currentColor" stroke-width="1.35" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="5.3" r="2.5" fill="currentColor" stroke="none"/><circle cx="5.8" cy="17.6" r="2.6" fill="currentColor" stroke="none"/><circle cx="18.2" cy="17.6" r="2.6" fill="currentColor" stroke="none"/><path d="M7.9 15.8 10.6 8.1"/><path d="M16.1 15.8 13.4 8.1"/><path d="M8.8 17.6h6.4"/></svg>',follow:'<svg viewBox="0 0 24 24" aria-hidden="true" fill="none" stroke="currentColor" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round"><circle cx="8.3" cy="17.5" r="3.1" fill="currentColor" stroke="none"/><circle cx="16.4" cy="8.2" r="2.5" fill="currentColor" stroke="none"/><path d="M5.1 18.7c1.3-4.2 5-7.2 9.5-7.2 1.5 0 3 .3 4.2.9"/><path d="M5 18.9c1.8 0 3.3-.6 5.1-1.7 3-1.9 5.1-4.7 7.1-8"/><path d="m17.6 6.2 1.9 1.1-1 2.1" /></svg>',close:'<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M6 6 18 18M18 6 6 18"/></svg>',image:'<svg viewBox="0 0 24 24" aria-hidden="true"><rect x="4" y="5" width="16" height="14" rx="2"/><path d="m8 15 2.5-2.5L13 15l2.5-3 2.5 3"/><circle cx="9" cy="9" r="1.2"/></svg>',trash:'<svg viewBox="0 0 24 24" aria-hidden="true" fill="none" stroke="currentColor" stroke-width="1.35" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="7.6" opacity="0.45"/><path d="M7.1 7.1 16.9 16.9"/><path d="M16.9 7.1 7.1 16.9"/><circle cx="12" cy="12" r="1.15" fill="currentColor" stroke="none"/></svg>',edit:'<svg viewBox="0 0 24 24" aria-hidden="true" fill="none" stroke="currentColor" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round"><path d="M5.4 8.2h8.2v10.2H5.4z"/><path d="M9 5.1h9.1l-4.9 5.1H9z"/><path d="M6.3 16.8 16.7 6.4"/><circle cx="12" cy="11.5" r="0.95" fill="currentColor" stroke="none"/></svg>',drag:'<svg viewBox="0 0 24 24" aria-hidden="true" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M12 4v16M4 12h16"/><path d="m12 4-2.8 2.8M12 4l2.8 2.8M20 12l-2.8-2.8M20 12l-2.8 2.8M12 20l-2.8-2.8M12 20l2.8-2.8M4 12l2.8-2.8M4 12l2.8 2.8"/></svg>'}[e]||""}function Ne(e,t,a="avatar"){return e?`<img class="avatar__image" src="${e}" alt="${a}" />`:`<span class="avatar__label">${t}</span>`}function di(e){var t;return e?`
    <div class="overlay" data-close-comments>
      <section class="modal modal--comments" role="dialog" aria-modal="true" aria-label="Comments" onclick="event.stopPropagation()">
        <div class="modal__header">
          <h3 class="modal__title">Comments</h3>
          <button class="modal__close" data-close-comments aria-label="Close">${F("close")}</button>
        </div>
        <div class="comments-list">
          ${(t=e.comments)!=null&&t.length?e.comments.map(a=>`
            <article class="comment-item">
              <p class="comment-item__text">${a.text}</p>
              <span class="comment-item__date">${Wt(a.createdAt)}</span>
            </article>
          `).join(""):'<p class="empty-copy">No comments yet.</p>'}
        </div>
        <form class="comment-form" data-comment-form="${e.id}">
          <input class="field__input" type="text" name="comment" maxlength="80" placeholder="Write a comment" required />
          <button class="button button--primary" type="submit">Post</button>
        </form>
      </section>
    </div>
  `:""}const qt="memories-static-site-state-v1";function mi(){try{const e=localStorage.getItem(qt);return e?JSON.parse(e):null}catch{return null}}function pi(e){localStorage.setItem(qt,JSON.stringify(e))}function ft(e="id"){return`${e}_${Math.random().toString(36).slice(2,9)}_${Date.now().toString(36)}`}const nt={profile:{name:"you",bio:"A small local profile to collect your memories.",avatarData:""},posts:[],issues:[],followingAuthors:[]};function ui(e){return{id:e.id,authorName:e.authorName||"you",authorIcon:e.authorIcon||(e.authorName||"U").trim().slice(0,1).toUpperCase(),authorAvatarData:e.authorAvatarData||"",caption:e.caption||"",imageData:e.imageData||"",fixedTags:Array.isArray(e.fixedTags)?e.fixedTags:[],freeTags:Array.isArray(e.freeTags)?e.freeTags:[],likes:Number(e.likes||0),saves:Number(e.saves||0),comments:Array.isArray(e.comments)?e.comments:[],impressions:Number(e.impressions||0),liked:!!e.liked,saved:!!e.saved,createdAt:e.createdAt||new Date().toISOString(),updatedAt:e.updatedAt||null,composeData:e.composeData||null}}function hi(e){var t,a,o;return e?{profile:{name:((t=e.profile)==null?void 0:t.name)||nt.profile.name,bio:((a=e.profile)==null?void 0:a.bio)||nt.profile.bio,avatarData:((o=e.profile)==null?void 0:o.avatarData)||""},posts:Array.isArray(e.posts)?e.posts.map(ui):[],issues:Array.isArray(e.issues)?e.issues:[],followingAuthors:Array.isArray(e.followingAuthors)?e.followingAuthors:[]}:structuredClone(nt)}let se=hi(mi());function He(){return se}function fe(e){se=e,pi(se)}function $t(e){const t=structuredClone(se);t.posts.unshift({id:ft("post"),authorName:e.authorName,authorIcon:(e.authorName||"U").trim().slice(0,1).toUpperCase(),authorAvatarData:se.profile.avatarData||"",caption:e.caption||"",imageData:e.imageData,fixedTags:e.fixedTags||[],freeTags:e.freeTags||[],likes:0,saves:0,comments:[],impressions:0,liked:!1,saved:!1,createdAt:new Date().toISOString(),updatedAt:null,composeData:e.composeData||null}),fe(t)}function Tt(e,t){const a=structuredClone(se),o=a.posts.find(s=>s.id===e);o&&(o.caption=t.caption??o.caption,o.imageData=t.imageData??o.imageData,o.fixedTags=Array.isArray(t.fixedTags)?t.fixedTags:o.fixedTags,o.freeTags=Array.isArray(t.freeTags)?t.freeTags:o.freeTags,o.composeData=t.composeData??o.composeData,o.updatedAt=new Date().toISOString(),fe(a))}function gi(e){const t=structuredClone(se);t.posts.some(o=>o.id===e)&&(t.posts=t.posts.filter(o=>o.id!==e),t.issues=t.issues.map(o=>({...o,postIds:(o.postIds||[]).filter(s=>s!==e)})).filter(o=>o.postIds.length),fe(t))}function fi(e){const t=structuredClone(se),a=t.posts.find(o=>o.id===e);a&&(a.liked=!a.liked,a.likes+=a.liked?1:-1,fe(t))}function yi(e){const t=structuredClone(se),a=t.posts.find(o=>o.id===e);a&&(a.saved=!a.saved,a.saves+=a.saved?1:-1,fe(t))}function bi(e,t){const a=structuredClone(se),o=a.posts.find(s=>s.id===e);!o||!t.trim()||(o.comments.unshift({id:ft("comment"),text:t.trim(),createdAt:new Date().toISOString()}),fe(a))}function vi(e){const t=structuredClone(se),a=t.posts.find(o=>o.id===e);a&&(a.impressions+=1,fe(t))}function xi(e){const t=structuredClone(se),a=t.profile.name,o=e.avatarData||"";t.profile.name=e.name,t.profile.bio=e.bio,t.profile.avatarData=o,t.posts=t.posts.map(s=>s.authorName===a?{...s,authorName:e.name,authorIcon:(e.name||"U").trim().slice(0,1).toUpperCase(),authorAvatarData:o}:s),t.followingAuthors=t.followingAuthors.map(s=>s===a?e.name:s),fe(t)}function wi(e){const t=structuredClone(se),a=t.followingAuthors.includes(e);t.followingAuthors=a?t.followingAuthors.filter(o=>o!==e):[...t.followingAuthors,e],fe(t)}function _i(e){const t=structuredClone(se);t.issues.unshift({id:ft("issue"),title:e.title,subtitle:e.subtitle,tone:e.tone,postIds:e.postIds,createdAt:new Date().toISOString()}),fe(t)}function Si(){return`
    <section class="opening-screen">
      <div class="opening-screen__inner">
        <div class="opening-screen__stage" aria-label="Velna">
          <div class="opening-screen__noise" aria-hidden="true"></div>
          <div class="opening-screen__glow opening-screen__glow--a" aria-hidden="true"></div>
          <div class="opening-screen__glow opening-screen__glow--b" aria-hidden="true"></div>
          <div class="opening-screen__glow opening-screen__glow--c" aria-hidden="true"></div>
          <img class="opening-screen__mark" src="image/icon/velna_toka.png" alt="" aria-hidden="true" />
          <canvas class="opening-screen__canvas" id="openingCanvas"></canvas>
        </div>
      </div>
    </section>
  `}function $i(e){return[...e].sort((t,a)=>kt(a)-kt(t))}function kt(e){var u;const t=(e.likes||0)*2+(e.saves||0)*2+(((u=e.comments)==null?void 0:u.length)||0)*1.5+(e.impressions||0)*1.2,a=li(e.createdAt)?120:0,s=220/Math.max(1,(Date.now()-new Date(e.createdAt).getTime())/(1e3*60*60));return t+a+s}function Ti(e,{query:t="",tags:a=[]}={}){const o=t.trim().toLowerCase();return e.filter(s=>{const u=[s.authorName,s.caption||"",...s.fixedTags||[],...s.freeTags||[]].join(" ").toLowerCase(),m=!o||u.includes(o),r=!a.length||a.every(i=>[...s.fixedTags||[],...s.freeTags||[]].includes(i));return m&&r})}function ki(e,t){const a=e.posts||[];return t==="following"?a.filter(o=>e.followingAuthors.includes(o.authorName)):$i(a)}const Ke=[{x:70,y:78,w:210,h:300},{x:382,y:116,w:122,h:148},{x:566,y:82,w:214,h:320},{x:78,y:448,w:214,h:304},{x:360,y:318,w:204,h:434},{x:598,y:470,w:190,h:260},{x:88,y:834,w:156,h:196},{x:344,y:786,w:182,h:264},{x:640,y:872,w:142,h:172}],Mt=860,Pt=1120,Mi=980,Pi=1260;function It(e){const t=e%2,a=Math.floor(e/2);return{x:120+t*Mi,y:80+a*Pi}}function Ii(e,t,a){return`
    <article
      class="timeline-particle"
      style="left:${a.x+t.x}px; top:${a.y+t.y}px; width:${t.w}px; height:${t.h}px;"
    >
      <button class="timeline-particle__author" type="button" data-open-author="${e.authorName}" aria-label="Open ${e.authorName} profile">
        ${Ne(e.authorAvatarData,e.authorIcon,`${e.authorName} avatar`)}
      </button>
      <button class="timeline-particle__image-button" type="button" data-open-preview="${e.id}" aria-label="Open ${e.authorName} post">
        <img class="timeline-particle__image" src="${e.imageData}" alt="${e.authorName} post" />
      </button>
    </article>
  `}function Li(e){const t=Math.max(1,Math.ceil(e.length/Ke.length)),a=Array.from({length:t},(s,u)=>{const m=It(u),r=e.slice(u*Ke.length,(u+1)*Ke.length);return{placement:m,html:`
        <section
          class="timeline-board"
          style="left:${m.x}px; top:${m.y}px; width:${Mt}px; height:${Pt}px;"
          aria-hidden="true"
        ></section>
        ${r.map((i,p)=>Ii(i,Ke[p],m)).join("")}
      `}});if(!e.length)return{width:1280,height:1120,html:`
        <div class="timeline-field__empty">
        <p class="timeline-field__empty-title">No posts yet</p>
        <p class="timeline-field__empty-copy">Create your first memory and it will appear here.</p>
      </div>
      `};const o=It(t-1);return{width:o.x+Mt+140,height:o.y+Pt+140,html:a.map(s=>s.html).join("")}}function Lt(e,t){const a=(t==null?void 0:t.homeTheme)==="dark"?"dark":"light",o=(t==null?void 0:t.homeCoreState)||"default",s=a==="dark"?"White":"Dark";return`
    <section class="page orbit-home orbit-home--${a} orbit-home--${o}">
      <div class="orbit-stage">
        <button class="orbit-node orbit-node--theme" type="button" data-home-theme-toggle aria-label="Switch main page theme">
          <span class="orbit-node__icon" aria-hidden="true">${F("spark")}</span>
          <strong class="orbit-node__title">${s}</strong>
        </button>
        <div class="orbit-stage__noise" aria-hidden="true"></div>
        <div class="orbit-stage__glow orbit-stage__glow--a" aria-hidden="true"></div>
        <div class="orbit-stage__glow orbit-stage__glow--b" aria-hidden="true"></div>
        <div class="orbit-stage__glow orbit-stage__glow--c" aria-hidden="true"></div>

        <button class="orbit-node orbit-node--timeline" type="button" data-home-nav="timeline">
          <span class="orbit-node__icon" aria-hidden="true">${F("timeline")}</span>
          <strong class="orbit-node__title">Timeline</strong>
        </button>

        <button class="orbit-node orbit-node--profile" type="button" data-home-nav="profile">
          <span class="orbit-node__icon" aria-hidden="true">${F("profile")}</span>
          <strong class="orbit-node__title">Profile</strong>
        </button>

        <button class="orbit-node orbit-node--search" type="button" data-home-nav="search">
          <span class="orbit-node__icon" aria-hidden="true">${F("search")}</span>
          <strong class="orbit-node__title">Search</strong>
        </button>

        <button class="orbit-node orbit-node--compose" type="button" data-home-nav="compose">
          <span class="orbit-node__icon" aria-hidden="true">${F("compose")}</span>
          <strong class="orbit-node__title">Post</strong>
        </button>

        <button class="orbit-core orbit-core--button" type="button" data-home-core-toggle aria-label="Reveal hidden home mark">
          <span class="orbit-core__surface">
            <img class="orbit-core__mark" src="image/icon/velna_toka.png" alt="" />
          </span>
        </button>

        <button class="orbit-sheep" type="button" data-home-sheep-toggle aria-label="Return to main page">
          <img class="orbit-sheep__mark" src="image/icon/hitsuji_toka.png" alt="" />
        </button>
      </div>
    </section>
  `}function Ei(e,t){var s,u;const a=ki(e,t.timelineTab),o=Li(a);return`
    <section class="page timeline-page">
      <div class="timeline-screen">
        <header class="timeline-screen__chrome">
          <button class="timeline-screen__back" type="button" data-home-nav="home" aria-label="Back to main page">
            <span>${F("arrowLeft")}</span>
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
            style="width:${o.width}px; height:${o.height}px; transform: translate(${((s=t.timelinePan)==null?void 0:s.x)??-360}px, ${((u=t.timelinePan)==null?void 0:u.y)??-220}px);"
          >
            ${o.html}
          </div>
        </div>
      </div>
    </section>
  `}function Ci(e){const t=[...e.fixedTags||[],...e.freeTags||[]];return t.length?t.map(a=>`<span class="chip chip--soft">${a}</span>`).join(""):'<div class="post-card__tags-empty">No tags yet</div>'}function zt(e,t={}){var m;const{mode:a="full"}=t,o=a!=="compact",s=a==="full",u=a!=="minimal";return`
    <article class="post-card post-card--${a}" data-post-id="${e.id}">
      ${o?`
        <div class="post-card__head">
          <button class="avatar avatar-button" type="button" data-open-author="${e.authorName}" aria-label="Open ${e.authorName} profile">
            ${Ne(e.authorAvatarData,e.authorIcon,`${e.authorName} avatar`)}
          </button>
          <div class="post-card__author-wrap">
            <p class="post-card__author">${e.authorName}</p>
            <p class="post-card__time">${ci(e.createdAt)}</p>
          </div>
        </div>
      `:""}

      <button class="post-card__image-button" data-open-preview="${e.id}" aria-label="Open post image">
        <img class="post-card__image" src="${e.imageData}" alt="${e.authorName} post" />
      </button>

      ${s?`
        <div class="post-card__caption-row">
          <button class="tag-toggle" data-toggle-tags="${e.id}">${F("tag")} tags</button>
          ${e.caption?`<p class="post-card__caption">${e.caption}</p>`:'<p class="post-card__caption post-card__caption--empty">No caption</p>'}
        </div>

        <div class="post-card__tags" data-tags-panel="${e.id}" hidden>
          ${Ci(e)}
        </div>
      `:""}

      <div class="post-card__meta">
        ${u?`<span class="post-card__date">${Ht(e.createdAt)}</span>`:"<span></span>"}
        <div class="post-card__actions">
          <button class="icon-button ${e.liked?"is-active":""}" data-like="${e.id}" aria-label="Like post">
            ${F("heart")}
            <span>${e.likes}</span>
          </button>
          <button class="icon-button" data-comment="${e.id}" aria-label="Open comments">
            ${F("comment")}
            <span>${((m=e.comments)==null?void 0:m.length)||0}</span>
          </button>
          <button class="icon-button ${e.saved?"is-active":""}" data-save="${e.id}" aria-label="Save post">
            ${F("save")}
            <span>${e.saves}</span>
          </button>
        </div>
      </div>
    </article>
  `}const Ot={activity:["ご飯","朝ごはん","ランチ","ディナー","カフェ","散歩","買い物","ドライブ","旅行","イベント"],mood:["まったり","おしゃれ","落ち着く","ロマンチック","ワクワク","にぎやか"],scene:["初デート","休日","昼デート","夜デート","記念日","雨の日"],budget:["低予算","ふつう","ちょっと贅沢"],time:["朝","昼","夕方","夜"]},Ai={activity:"デート内容",mood:"雰囲気",scene:"シーン",budget:"予算感",time:"時間帯"},Bi=Object.values(Ot).flat();function Di(e){return Bi.map(t=>`
    <button class="chip chip--filter ${e.includes(t)?"is-active":""}" data-search-tag="${t}">${t}</button>
  `).join("")}function Ri(e,t){const a=t.searchTags||[],o=Ti(e.posts||[],{query:t.searchQuery||"",tags:a}),s=o.length?`
      <div class="feed-grid">
        ${o.map(u=>zt(u,{mode:"compact"})).join("")}
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
        ${Di(a)}
      </div>

      ${s}
    </section>
  `}const Xt={id:"page1",label:"Page 1",description:"Template 1",async render(e,t,a,o){const{addWrappedText:s,drawFileCover:u,drawSlotPlaceholder:m,defaults:r}=o,i={x:84,y:84,width:1072,height:1586};e.fillStyle="#191514",e.textBaseline="top";const p={x:i.x+i.width*.55,y:i.y+i.height*.125,width:i.width*.36,height:i.width*.36,radius:0},y={x:i.x+i.width*.08,y:i.y+i.height*.48,width:i.width*.45,height:i.height*.39,radius:0};a.secondary.file?await u(e,a.secondary.file,p,a.secondary.position):m(e,p),a.primary.file?await u(e,a.primary.file,y,a.primary.position):m(e,y),e.font='600 78px "Cormorant Garamond", "Times New Roman", serif',s(e,t.headline||r.headline,{x:i.x+i.width*.07,y:i.y+i.height*.058,maxWidth:i.width*.7,lineHeight:82,maxLines:2}),e.font='500 32px "Noto Sans JP", sans-serif',s(e,t.subhead||r.subhead,{x:i.x+i.width*.07,y:i.y+i.height*.132,maxWidth:i.width*.7,lineHeight:42,maxLines:3}),e.font='500 33px "Noto Sans JP", sans-serif',s(e,t.intro||r.intro,{x:i.x+i.width*.085,y:i.y+i.height*.215,maxWidth:i.width*.37,lineHeight:48,maxLines:4}),e.font='500 31px "Noto Sans JP", sans-serif',s(e,t.body||r.body,{x:i.x+i.width*.585,y:i.y+i.height*.625,maxWidth:i.width*.245,lineHeight:46,maxLines:6}),e.font='500 28px "Noto Sans JP", sans-serif',s(e,t.date||r.date,{x:i.x+i.width*.08,y:i.y+i.height*.895,maxWidth:i.width*.31,lineHeight:34,maxLines:1});const $=t.editor||r.editor,E=i.width*.32,L=i.x+i.width*.92-Math.min(E,e.measureText($).width);s(e,$,{x:L,y:i.y+i.height*.895,maxWidth:E,lineHeight:34,maxLines:1})}},Ni={id:"page2",label:"Page 2",description:"Template 2",async render(e,t,a,o){const{addWrappedText:s,clipRoundedRect:u,drawFileCover:m,drawSlotPlaceholder:r,defaults:i}=o,p={x:84,y:84,width:1072,height:1586};e.fillStyle="#191514",e.textBaseline="top";const y={x:p.x+p.width*.138,y:p.y+p.height*.142,width:p.width*.724,height:p.height*.374,radius:0};a.primary.file?await m(e,a.primary.file,y,a.primary.position):r(e,y),e.font='600 60px "Cormorant Garamond", "Times New Roman", serif',s(e,t.headline||i.headline,{x:p.x+p.width*.142,y:p.y+p.height*.565,maxWidth:p.width*.66,lineHeight:66,maxLines:2}),e.font='500 30px "Noto Sans JP", sans-serif',s(e,t.subhead||i.subhead,{x:p.x+p.width*.142,y:p.y+p.height*.634,maxWidth:p.width*.68,lineHeight:40,maxLines:2}),e.font='500 28px "Noto Sans JP", sans-serif',s(e,t.intro||i.intro,{x:p.x+p.width*.142,y:p.y+p.height*.698,maxWidth:p.width*.66,lineHeight:38,maxLines:4}),e.font='500 28px "Noto Sans JP", sans-serif',s(e,t.body||i.body,{x:p.x+p.width*.142,y:p.y+p.height*.792,maxWidth:p.width*.66,lineHeight:38,maxLines:4}),e.font='500 24px "Noto Sans JP", sans-serif',s(e,t.date||i.date,{x:p.x+p.width*.142,y:p.y+p.height*.948,maxWidth:p.width*.28,lineHeight:30,maxLines:1});const $=t.editor||i.editor;e.font='500 24px "Noto Sans JP", sans-serif';const E=p.width*.28,L=p.x+p.width*.86-Math.min(E,e.measureText($).width);s(e,$,{x:L,y:p.y+p.height*.948,maxWidth:E,lineHeight:30,maxLines:1})}},Hi={id:"page3",label:"Page 3",description:"Template 3",async render(e,t,a,o){const{addWrappedText:s,drawFileCover:u,drawSlotPlaceholder:m,defaults:r}=o,i={x:84,y:84,width:1072,height:1586};e.fillStyle="#191514",e.textBaseline="top";const p={x:i.x+i.width*.14,y:i.y+i.height*.22,width:i.width*.58,height:i.height*.36,radius:0},y={x:i.x+i.width*.74,y:i.y+i.height*.72,width:i.width*.14,height:i.height*.15,radius:0};a.primary.file?await u(e,a.primary.file,p,a.primary.position):m(e,p),a.secondary.file?await u(e,a.secondary.file,y,a.secondary.position):m(e,y),e.font='600 58px "Cormorant Garamond", "Times New Roman", serif',s(e,t.headline||r.headline,{x:i.x+i.width*.12,y:i.y+i.height*.075,maxWidth:i.width*.66,lineHeight:64,maxLines:2}),e.font='500 28px "Noto Sans JP", sans-serif',s(e,t.subhead||r.subhead,{x:i.x+i.width*.12,y:i.y+i.height*.145,maxWidth:i.width*.66,lineHeight:36,maxLines:2}),e.font='500 26px "Noto Sans JP", sans-serif',s(e,t.intro||r.intro,{x:i.x+i.width*.13,y:i.y+i.height*.675,maxWidth:i.width*.32,lineHeight:34,maxLines:4}),e.font='500 26px "Noto Sans JP", sans-serif',s(e,t.body||r.body,{x:i.x+i.width*.13,y:i.y+i.height*.79,maxWidth:i.width*.32,lineHeight:34,maxLines:3}),e.font='500 24px "Noto Sans JP", sans-serif',s(e,t.date||r.date,{x:i.x+i.width*.13,y:i.y+i.height*.915,maxWidth:i.width*.2,lineHeight:30,maxLines:1});const $=t.editor||r.editor,E=i.width*.16,L=i.x+i.width*.9-Math.min(E,e.measureText($).width);s(e,$,{x:L,y:i.y+i.height*.915,maxWidth:E,lineHeight:30,maxLines:1})}},Wi={id:"page4",label:"Page 4",description:"Template 4",async render(e,t,a,o){const{addWrappedText:s,drawFileCover:u,drawSlotPlaceholder:m,defaults:r}=o,i={x:84,y:84,width:1072,height:1586};e.fillStyle="#191514",e.textBaseline="top";const p={x:i.x+i.width*.11,y:i.y+i.height*.59,width:i.width*.34,height:i.height*.25,radius:0},y={x:i.x+i.width*.59,y:i.y+i.height*.13,width:i.width*.24,height:i.height*.29,radius:0};a.primary.file?await u(e,a.primary.file,p,a.primary.position):m(e,p),a.secondary.file?await u(e,a.secondary.file,y,a.secondary.position):m(e,y),e.font='600 52px "Cormorant Garamond", "Times New Roman", serif',s(e,t.headline||r.headline,{x:i.x+i.width*.11,y:i.y+i.height*.11,maxWidth:i.width*.28,lineHeight:58,maxLines:2}),e.font='500 27px "Noto Sans JP", sans-serif',s(e,t.subhead||r.subhead,{x:i.x+i.width*.11,y:i.y+i.height*.205,maxWidth:i.width*.28,lineHeight:34,maxLines:2}),e.font='500 26px "Noto Sans JP", sans-serif',s(e,t.intro||r.intro,{x:i.x+i.width*.11,y:i.y+i.height*.295,maxWidth:i.width*.28,lineHeight:34,maxLines:4}),e.font='500 26px "Noto Sans JP", sans-serif',s(e,t.body||r.body,{x:i.x+i.width*.58,y:i.y+i.height*.55,maxWidth:i.width*.2,lineHeight:34,maxLines:4}),e.font='500 24px "Noto Sans JP", sans-serif',s(e,t.date||r.date,{x:i.x+i.width*.58,y:i.y+i.height*.87,maxWidth:i.width*.14,lineHeight:30,maxLines:1});const $=t.editor||r.editor,E=i.width*.15,L=i.x+i.width*.88-Math.min(E,e.measureText($).width);s(e,$,{x:L,y:i.y+i.height*.87,maxWidth:E,lineHeight:30,maxLines:1})}},qi={id:"page5",label:"Page 5",description:"Template 5",async render(e,t,a,o){const{addWrappedText:s,drawFileCover:u,drawSlotPlaceholder:m,defaults:r}=o,i={x:84,y:84,width:1072,height:1586};e.fillStyle="#191514",e.textBaseline="top";const p={x:i.x+i.width*.49,y:i.y+i.height*.12,width:i.width*.34,height:i.height*.42,radius:0},y={x:i.x+i.width*.12,y:i.y+i.height*.74,width:i.width*.25,height:i.height*.16,radius:0};a.primary.file?await u(e,a.primary.file,p,a.primary.position):m(e,p),a.secondary.file?await u(e,a.secondary.file,y,a.secondary.position):m(e,y),e.font='600 50px "Cormorant Garamond", "Times New Roman", serif',s(e,t.headline||r.headline,{x:i.x+i.width*.12,y:i.y+i.height*.12,maxWidth:i.width*.21,lineHeight:54,maxLines:3}),e.font='500 26px "Noto Sans JP", sans-serif',s(e,t.subhead||r.subhead,{x:i.x+i.width*.12,y:i.y+i.height*.265,maxWidth:i.width*.21,lineHeight:34,maxLines:3}),e.font='500 26px "Noto Sans JP", sans-serif',s(e,t.intro||r.intro,{x:i.x+i.width*.12,y:i.y+i.height*.42,maxWidth:i.width*.21,lineHeight:34,maxLines:5}),e.font='500 26px "Noto Sans JP", sans-serif',s(e,t.body||r.body,{x:i.x+i.width*.51,y:i.y+i.height*.69,maxWidth:i.width*.24,lineHeight:34,maxLines:4}),e.font='500 24px "Noto Sans JP", sans-serif',s(e,t.date||r.date,{x:i.x+i.width*.51,y:i.y+i.height*.89,maxWidth:i.width*.14,lineHeight:30,maxLines:1});const $=t.editor||r.editor,E=i.width*.15,L=i.x+i.width*.88-Math.min(E,e.measureText($).width);s(e,$,{x:L,y:i.y+i.height*.89,maxWidth:E,lineHeight:30,maxLines:1})}},zi={id:"page6",label:"Page 6",description:"Template 6",async render(e,t,a,o){var T;const{addWrappedText:s,drawFileCover:u,drawSlotPlaceholder:m,defaults:r}=o,i={x:84,y:84,width:1072,height:1586};e.fillStyle="#191514",e.textBaseline="top";const p={x:i.x+i.width*.2,y:i.y+i.height*.3,width:i.width*.46,height:i.height*.36,radius:0},y={x:i.x+i.width*.12,y:i.y+i.height*.075,width:i.width*.2,height:i.height*.14,radius:0},$={x:i.x+i.width*.69,y:i.y+i.height*.8,width:i.width*.15,height:i.height*.1,radius:0};a.primary.file?await u(e,a.primary.file,p,a.primary.position):m(e,p),a.secondary.file?await u(e,a.secondary.file,y,a.secondary.position):m(e,y),(T=a.accent)!=null&&T.file?await u(e,a.accent.file,$,a.accent.position):m(e,$),e.font='600 48px "Cormorant Garamond", "Times New Roman", serif',s(e,t.headline||r.headline,{x:i.x+i.width*.5,y:i.y+i.height*.1,maxWidth:i.width*.2,lineHeight:52,maxLines:2}),e.font='500 26px "Noto Sans JP", sans-serif',s(e,t.subhead||r.subhead,{x:i.x+i.width*.5,y:i.y+i.height*.18,maxWidth:i.width*.2,lineHeight:34,maxLines:3}),e.font='500 26px "Noto Sans JP", sans-serif',s(e,t.intro||r.intro,{x:i.x+i.width*.12,y:i.y+i.height*.74,maxWidth:i.width*.22,lineHeight:34,maxLines:4}),e.font='500 26px "Noto Sans JP", sans-serif',s(e,t.body||r.body,{x:i.x+i.width*.44,y:i.y+i.height*.74,maxWidth:i.width*.14,lineHeight:34,maxLines:4}),e.font='500 24px "Noto Sans JP", sans-serif',s(e,t.date||r.date,{x:i.x+i.width*.12,y:i.y+i.height*.905,maxWidth:i.width*.16,lineHeight:30,maxLines:1});const E=t.editor||r.editor,L=i.width*.14,B=i.x+i.width*.88-Math.min(L,e.measureText(E).width);s(e,E,{x:B,y:i.y+i.height*.905,maxWidth:L,lineHeight:30,maxLines:1})}},Oi={id:"page7",label:"Page 7",description:"Template 7",async render(e,t,a,o){var T;const{addWrappedText:s,drawFileCover:u,drawSlotPlaceholder:m,defaults:r}=o,i={x:84,y:84,width:1072,height:1586};e.fillStyle="#191514",e.textBaseline="top";const p={x:i.x+i.width*.12,y:i.y+i.height*.15,width:i.width*.3,height:i.height*.18,radius:0},y={x:i.x+i.width*.56,y:i.y+i.height*.48,width:i.width*.3,height:i.height*.18,radius:0},$={x:i.x+i.width*.12,y:i.y+i.height*.75,width:i.width*.3,height:i.height*.18,radius:0};a.primary.file?await u(e,a.primary.file,p,a.primary.position):m(e,p),a.secondary.file?await u(e,a.secondary.file,y,a.secondary.position):m(e,y),(T=a.accent)!=null&&T.file?await u(e,a.accent.file,$,a.accent.position):m(e,$),e.font='600 44px "Cormorant Garamond", "Times New Roman", serif',s(e,t.headline||r.headline,{x:i.x+i.width*.58,y:i.y+i.height*.16,maxWidth:i.width*.19,lineHeight:48,maxLines:2}),e.font='500 25px "Noto Sans JP", sans-serif',s(e,t.subhead||r.subhead,{x:i.x+i.width*.58,y:i.y+i.height*.245,maxWidth:i.width*.19,lineHeight:32,maxLines:3}),e.font='500 25px "Noto Sans JP", sans-serif',s(e,t.intro||r.intro,{x:i.x+i.width*.15,y:i.y+i.height*.41,maxWidth:i.width*.2,lineHeight:32,maxLines:4}),e.font='500 25px "Noto Sans JP", sans-serif',s(e,t.body||r.body,{x:i.x+i.width*.59,y:i.y+i.height*.77,maxWidth:i.width*.19,lineHeight:32,maxLines:4}),e.font='500 24px "Noto Sans JP", sans-serif',s(e,t.date||r.date,{x:i.x+i.width*.58,y:i.y+i.height*.91,maxWidth:i.width*.12,lineHeight:30,maxLines:1});const E=t.editor||r.editor,L=i.width*.14,B=i.x+i.width*.88-Math.min(L,e.measureText(E).width);s(e,E,{x:B,y:i.y+i.height*.91,maxWidth:L,lineHeight:30,maxLines:1})}},N={x:.06,y:.06,width:.88,height:.88},De=.015,Et={densityMode:"whitespace",recoveryMode:"restore"},dt={width:.14,height:.12},ke={width:.18,height:.08},Xi={primary:{x:.08,y:.16,width:.4,height:.3},secondary:{x:.58,y:.12,width:.24,height:.2},accent:{x:.56,y:.58,width:.26,height:.18}},Yi={headline:{x:.08,y:.07,width:.46,height:.1,fontSize:.056,lineHeight:1.08,align:"left",family:"serif",weight:600},subhead:{x:.08,y:.16,width:.48,height:.07,fontSize:.023,lineHeight:1.34,align:"left",family:"sans",weight:500},intro:{x:.08,y:.52,width:.28,height:.18,fontSize:.021,lineHeight:1.42,align:"left",family:"sans",weight:500},body:{x:.62,y:.42,width:.22,height:.24,fontSize:.021,lineHeight:1.42,align:"left",family:"sans",weight:500},date:{x:.08,y:.91,width:.22,height:.04,fontSize:.019,lineHeight:1.25,align:"left",family:"sans",weight:500},editor:{x:.66,y:.91,width:.2,height:.04,fontSize:.019,lineHeight:1.25,align:"right",family:"sans",weight:500}},Ui=[{id:"image-1",x:.1,y:.14,width:.38,height:.34}];function Se(e,t,a){return Math.min(a,Math.max(t,e))}function Ye(e){return Math.round(e/De)*De}function Yt(e,t,a){return typeof t=="string"&&t.trim()?t.trim():`${e}-${a+1}`}function yt(e,t=""){return String(e??t).replace(/\r/g,"")}function Ut(e,t){const a=Se(Ye(Number.isFinite(e.width)?e.width:t.width),t.width,N.width),o=Se(Ye(Number.isFinite(e.height)?e.height:t.height),t.height,N.height);return{x:Se(Ye(Number.isFinite(e.x)?e.x:N.x),N.x,N.x+N.width-a),y:Se(Ye(Number.isFinite(e.y)?e.y:N.y),N.y,N.y+N.height-o),width:a,height:o}}function st(e={},t=0){return{id:Yt("image",e.id,t),...Ut(e,dt)}}function mt(e={},t=0){const a=typeof e.text=="string",o=e.kind==="title"||e.kind==="body"?e.kind:(Number(e.fontSize)||0)>=.04||e.family==="serif"?"title":"body";return{id:Yt("text",e.id,t),kind:o,text:yt(e.text,"text"),isDefaultText:typeof e.isDefaultText=="boolean"?e.isDefaultText:!a,...Ut(e,ke),fontSize:Se(Number.isFinite(e.fontSize)?e.fontSize:.028,.014,.09),lineHeight:Se(Number.isFinite(e.lineHeight)?e.lineHeight:1.35,1,2.2),padding:Se(Number.isFinite(e.padding)?e.padding:.012,.004,.05),align:e.align==="center"||e.align==="right"?e.align:"left",family:e.family==="serif"?"serif":"sans",weight:Se(Number.isFinite(e.weight)?e.weight:e.family==="serif"?600:500,400,700)}}function Fi(e={}){return Object.entries(Yi).map(([t,a],o)=>mt({id:`text-${o+1}`,text:yt(e[t],""),x:a.x,y:a.y,width:a.width,height:a.height,fontSize:a.fontSize,lineHeight:a.lineHeight,padding:a.family==="serif"?.01:.012,align:a.align,kind:a.family==="serif"&&a.fontSize>=.04?"title":"body",family:a.family,weight:a.weight},o)).filter(t=>t.text.trim())}function Ft(e={}){return{densityMode:e.densityMode==="fill"?"fill":Et.densityMode,recoveryMode:e.recoveryMode==="keep"?"keep":Et.recoveryMode}}function pt(e={}){return Array.isArray(e.imageBoxes)&&e.imageBoxes.length?e.imageBoxes.map((t,a)=>st(t,a)):e.imageBoxes&&typeof e.imageBoxes=="object"?Object.entries(Xi).map(([t,a],o)=>{var u;const s=((u=e.imageBoxes)==null?void 0:u[t])||{};return st({id:t,x:Number.isFinite(s.x)?s.x:a.x,y:Number.isFinite(s.y)?s.y:a.y,width:Number.isFinite(s.width)?s.width:a.width,height:Number.isFinite(s.height)?s.height:a.height},o)}):Ui.map((t,a)=>st(t,a))}function ut(e={},t={}){if(Array.isArray(e.textBoxes)&&e.textBoxes.length)return e.textBoxes.map((s,u)=>mt(s,u));const a=!!(e.imageBoxes&&!Array.isArray(e.imageBoxes)&&typeof e.imageBoxes=="object"),o=Fi(t);return a&&o.length?o:[mt({id:"text-1",text:yt(t.headline,"text"),isDefaultText:!t.headline,x:.56,y:.18,width:.24,height:.14,kind:"title",fontSize:.046,lineHeight:1.12,padding:.01,family:"serif",weight:600},0)]}function jt(e={},t={}){return{options:Ft(e),imageBoxes:pt(e),textBoxes:ut(e,t)}}function rt(e){return{left:`${e.x*100}%`,top:`${e.y*100}%`,width:`${e.width*100}%`,height:`${e.height*100}%`}}function Ct(e,t){return{x:e.x+e.width*t.x,y:e.y+e.height*t.y,width:e.width*t.width,height:e.height*t.height,radius:0}}function _e(e){return Ye(e)}const ji={id:"page8",label:"Page 8",description:"Custom free layout",async render(e,t,a,o){var y,$,E,L,B,T,j,R,w,G,de,re;const{addWrappedText:s,drawFileCover:u}=o,m={x:84,y:84,width:1072,height:1586},r=jt(t.customLayout||{},t),i=Array.isArray((y=t.customLayout)==null?void 0:y.pretextBoxes)?t.customLayout.pretextBoxes:null;e.fillStyle="#191514",e.textBaseline="top";const p=o.page8Files||{};if((($=t.customLayout)==null?void 0:$.editorType)==="pretext"&&i){for(const P of i){const H={x:m.x+P.x/794*m.width,y:m.y+P.y/1123*m.height,width:P.width/794*m.width,height:P.height/1123*m.height,radius:0};if(P.kind==="image"){(E=P.data)!=null&&E.src&&await u(e,P.data.src,H,{cropX:Number(P.data.cropX)||0,cropY:Number(P.data.cropY)||0,zoom:Math.max(1,Number(P.data.zoom)||1)});continue}const O=Math.max(0,Number((L=P.data)==null?void 0:L.padding)||0),C=Math.max(12,Number((B=P.data)==null?void 0:B.lineHeight)||34);e.textAlign=((T=P.data)==null?void 0:T.align)||"left",e.fillStyle=((j=P.data)==null?void 0:j.color)||"#191514",e.font=`${Number((R=P.data)==null?void 0:R.fontWeight)||400} ${Math.max(12,Number((w=P.data)==null?void 0:w.fontSize)||22)}px ${((G=P.data)==null?void 0:G.fontFamily)||'"Noto Sans JP", sans-serif'}`;const V=e.textAlign==="right"?H.x+H.width-O:e.textAlign==="center"?H.x+H.width/2:H.x+O;s(e,((de=P.data)==null?void 0:de.text)||"",{x:V,y:H.y+O,maxWidth:Math.max(24,H.width-O*2),lineHeight:C,maxLines:Math.max(1,Math.floor(Math.max(C,H.height-O*2)/C))})}return}for(const X of r.imageBoxes){const I=Ct(m,X);(re=p[X.id])!=null&&re.file&&await u(e,p[X.id].file,I,p[X.id].position)}r.textBoxes.forEach(X=>{const I=Ct(m,X),P=Math.max(0,m.width*(X.padding||0)),H=X.family==="serif"?'"Cormorant Garamond", "Times New Roman", serif':'"Noto Sans JP", sans-serif';e.textAlign=X.align,e.font=`${X.weight} ${Math.round(m.width*X.fontSize)}px ${H}`;const O=X.align==="right"?I.x+I.width-P:X.align==="center"?I.x+I.width/2:I.x+P,C=Math.max(24,I.width-P*2),V=m.width*X.fontSize*X.lineHeight,pe=Math.max(V,I.height-P*2);s(e,X.text||"",{x:O,y:I.y+P,maxWidth:C,lineHeight:V,maxLines:Math.max(1,Math.floor(pe/Math.max(12,V)))})})}},Gt=[Xt,Ni,Hi,Wi,qi,zi,Oi,ji],Pe=Xt.id,At=new Map(Gt.map(e=>[e.id,e]));function Gi(e){return At.get(e)||At.get(Pe)}const Ji=[{value:"#f8f4ee",label:"Ivory"},{value:"#f4e5de",label:"Blush"},{value:"#ece4d8",label:"Sand"},{value:"#e5ece7",label:"Sage"}];function Vi(e,t,a=[]){return`
    <section class="compose-group compose-group--tags">
      <div class="compose-group__head">
        <h3>${Ai[e]}</h3>
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
  `}function Bt(e=Pe){return`
    <div class="template-carousel">
      <button class="template-carousel__nav" type="button" data-template-carousel-nav="prev" aria-label="Previous template">&larr;</button>
      <div class="template-carousel__viewport" data-template-carousel>
        <div class="template-thumb-track">
          ${Gt.map(t=>`
            <label class="template-thumb ${e===t.id?"is-active":""}">
              <input type="radio" name="templateId" value="${t.id}" ${e===t.id?"checked":""} />
              <span class="template-thumb__preview template-option__preview template-option__preview--${t.id}" aria-hidden="true"></span>
            </label>
          `).join("")}
        </div>
      </div>
      <button class="template-carousel__nav" type="button" data-template-carousel-nav="next" aria-label="Next template">&rarr;</button>
    </div>
  `}function Dt(e){return`
    <div class="color-picker-inline">
      <div class="color-chip-track color-chip-track--inline" data-color-carousel>
        ${Ji.map(t=>`
          <label class="color-chip color-chip--inline ${e===t.value?"is-active":""}" title="${t.label}">
            <input type="radio" name="backgroundColor" value="${t.value}" ${e===t.value?"checked":""} />
            <span class="color-chip__swatch" style="--swatch:${t.value}"></span>
            <span class="color-chip__label">${t.label}</span>
          </label>
        `).join("")}
      </div>
    </div>
  `}function lt({id:e,slotClass:t}){return`
    <div class="compose-slot ${t}" data-slot="${e}">
      <input class="field__file" id="${e}" type="file" accept="image/*" />
      <label class="compose-slot__surface" for="${e}">
        <div class="compose-slot__image" data-slot-image="${e}" hidden></div>
        <div class="compose-slot__placeholder" data-slot-placeholder="${e}">
          <span class="compose-slot__plus">${F("compose")}</span>
        </div>
      </label>
      <button class="compose-slot__remove" type="button" data-slot-remove="${e}" hidden aria-label="remove image">&times;</button>
    </div>
  `}function ct(e){return`
    <div class="compose-slot ${e}">
      <div class="compose-slot__surface">
        <div class="compose-slot__placeholder">
          <span class="compose-slot__plus">${F("compose")}</span>
        </div>
      </div>
    </div>
  `}function Zi(e,t,a,o={}){const{editable:s=!1,interactiveSlots:u=!1}=o,m=t==="page8",r=s?"compose-sheet":"compose-sheet compose-sheet--locked",i=m?`${r} compose-sheet--custom`:r,p=s?"true":"false";return m?`
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
        ${u?lt({id:"imageInputSecondary",slotClass:"compose-slot--secondary"}):ct("compose-slot--secondary")}
        ${u?lt({id:"imageInputAccent",slotClass:"compose-slot--accent"}):ct("compose-slot--accent")}
        ${u?lt({id:"imageInputPrimary",slotClass:"compose-slot--primary"}):ct("compose-slot--primary")}
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
  `}function Rt(e,t){return`
    <section class="compose-disclosure compose-disclosure--inline">
      <button class="compose-disclosure__button" type="button" data-toggle-compose-tags aria-expanded="false">
        タグ
      </button>
      <div class="compose-disclosure__panel" data-compose-tags hidden>
        ${Object.entries(Ot).map(([a,o])=>Vi(a,o,e)).join("")}
        <section class="compose-group compose-group--tags">
          <div class="compose-group__head">
            <h3>Free Tags</h3>
          </div>
          <label class="field">
            <input class="field__input" type="text" name="freeTags" placeholder="cafe, spring, film" value="${t}" />
          </label>
        </section>
      </div>
    </section>
  `}function Qi({values:e,selectedId:t,selectedBackground:a,selectedFixedTags:o,freeTagsValue:s,submitLabel:u,headerMini:m,headerTitle:r}){return t==="page8"?`
      <section class="page page--compose page--compose--edit page--compose--pretext" data-compose-stage="edit">
        <header class="page-header page-header--with-back page-header--compose">
          <button class="button button--ghost page-back" type="button" data-close-compose>Back</button>
          <div>
            <p class="page-header__mini">${m}</p>
            <h2 class="page-header__title">${r}</h2>
          </div>
        </header>

        <form class="compose-form compose-form--edit compose-form--pretext" id="composeForm">
          <section class="compose-editor compose-editor--pretext">
            <section class="compose-group compose-group--template compose-group--template-pretext">
              <div class="compose-group__head compose-group__head--template">
                <h3>Template</h3>
                ${Dt(a)}
              </div>
              ${Bt(t)}
            </section>
            <section class="compose-pretext-host-shell">
              <div class="compose-pretext-host" data-compose-pretext-host></div>
            </section>
            <section class="compose-pretext-submit">
              ${Rt(o,s)}
              <button class="button button--primary compose-submit-button compose-submit-button--pretext" type="submit">${u}</button>
            </section>
          </section>
        </form>
      </section>
    `:`
    <section class="page page--compose page--compose--edit" data-compose-stage="edit">
      <header class="page-header page-header--with-back page-header--compose">
        <button class="button button--ghost page-back" type="button" data-close-compose>Back</button>
        <div>
          <p class="page-header__mini">${m}</p>
          <h2 class="page-header__title">${r}</h2>
        </div>
      </header>

      <form class="compose-form compose-form--edit" id="composeForm">
        <section class="compose-editor">
          <section class="compose-preview compose-preview--editor">
            ${Zi(e,t,a,{editable:!0,interactiveSlots:!0})}
          </section>

          <aside class="compose-editor-actions">
            <section class="compose-group compose-group--template">
              <div class="compose-group__head compose-group__head--template">
                <h3>Template</h3>
                ${Dt(a)}
              </div>
              ${Bt(t)}
            </section>
            <section class="compose-custom-tools" data-custom-template-controls hidden>
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
            ${Rt(o,s)}
            <button class="button button--primary compose-submit-button" type="submit">${u}</button>
          </aside>
        </section>
      </form>
    </section>
  `}function Ki(e=Pe){const t=typeof e=="object"?e:{selectedTemplateId:e},a=t.draft||{},o={headline:a.headline||"text",subhead:a.subhead||"text",intro:a.intro||"text",body:a.body||"text",date:a.date||"text",editor:a.editor||"編集者：haru"},s=t.selectedTemplateId||a.templateId||Pe,u=t.selectedBackground||a.backgroundColor||"#f8f4ee",m=Array.isArray(a.fixedTags)?a.fixedTags:[],r=Array.isArray(a.freeTags)?a.freeTags.join(", "):a.freeTags||"",i=t.isEditing?"Update Post":"Post This Layout",p=t.isEditing?"post editor":"template editor",y=t.isEditing?"Edit Post":"Compose";return Qi({values:o,selectedId:s,selectedBackground:u,selectedFixedTags:m,freeTagsValue:r,submitLabel:i,headerMini:p,headerTitle:y})}function ea(e){return e.length?e.map(t=>`
    <label class="issue-post-option">
      <input type="checkbox" name="issuePostIds" value="${t.id}" />
      <img src="${t.imageData}" alt="${t.authorName}の投稿画像" />
      <div class="issue-post-option__meta">
        <strong>${t.authorName}</strong>
        <span>${Ht(t.createdAt)}</span>
      </div>
    </label>
  `).join(""):`
      <section class="empty-panel">
        <p class="empty-panel__title">まだまとめる投稿がありません</p>
        <p class="empty-panel__copy">先に投稿を作ると、ここで選んで一冊の下書きにできます。</p>
      </section>
    `}function ta(e,t){return e.length?e.map(a=>{const o=t.filter(s=>a.postIds.includes(s.id));return`
      <article class="issue-card issue-card--${a.tone}">
        <p class="issue-card__eyebrow">memories issue</p>
        <h3 class="issue-card__title">${a.title}</h3>
        <p class="issue-card__subtitle">${a.subtitle||"sub title free"}</p>
        <div class="issue-card__count">${o.length} posts selected</div>
        <div class="issue-card__thumbs">
          ${o.slice(0,3).map(s=>`<img src="${s.imageData}" alt="${s.authorName}の投稿画像" />`).join("")}
        </div>
      </article>
    `}).join(""):'<p class="empty-copy">まだ雑誌の下書きはありません。</p>'}function ia(e){return`
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
            ${ea(e.posts||[])}
          </div>
        </section>

        <button class="button button--primary button--full" type="submit">下書きを保存</button>
      </form>

      <section class="section-block">
        <div class="section-head">
          <h3>保存済みの雑誌下書き</h3>
        </div>
        <div class="issue-list">
          ${ta(e.issues||[],e.posts||[])}
        </div>
      </section>
    </section>
  `}function Jt(e){return[...new Set(e.map(t=>t.authorName))]}function Vt(e){return`@${String(e||"user").trim().replace(/\s+/g,"_").toLowerCase()}`}function tt(e,t){return e.length?`
    <div class="feed-grid feed-grid--single">
      ${e.map(a=>zt(a,{mode:"minimal"})).join("")}
    </div>
  `:`<p class="empty-copy">${t}</p>`}function aa(e,t){return e.length?`
    <div class="issue-list">
      ${e.map(a=>{const o=t.filter(s=>(a.postIds||[]).includes(s.id));return`
          <article class="issue-card issue-card--${a.tone}">
            <p class="issue-card__eyebrow">memories issue</p>
            <h3 class="issue-card__title">${a.title}</h3>
            <p class="issue-card__subtitle">${a.subtitle||"sub title free"}</p>
            <div class="issue-card__count">${o.length} posts selected</div>
            <div class="issue-card__thumbs">
              ${o.slice(0,3).map(s=>`<img src="${s.imageData}" alt="${s.authorName} post" />`).join("")}
            </div>
          </article>
        `}).join("")}
    </div>
  `:'<p class="empty-copy">Saved magazine issues will appear here.</p>'}function oa(e,t,a){const o=e.posts.filter(R=>R.authorName===e.profile.name),s=e.posts.filter(R=>R.liked),u=e.posts.filter(R=>R.saved),m=e.issues||[],r=e.followingAuthors,i=a.filter(R=>R!==e.profile.name),p=t.profileSection||"identity",y=t.profileLibraryTab||"liked",$=!!t.profileAvatarCropOpen,E=Vt(e.profile.name),B={identity:{label:"Name / ID",value:`<span class="profile-node__avatar">${Ne(e.profile.avatarData,(e.profile.name||"Y").slice(0,1).toUpperCase(),`${e.profile.name} avatar`)}</span>`,angle:0,centerLabel:""},library:{label:"Likes / Saved",value:`<span class="profile-node__icon-pair">${F("heart")}${F("save")}</span>`,angle:60},edit:{label:"Edit",value:"profile",angle:120},posts:{label:"Posts",value:String(o.length),angle:180},magazine:{label:"Magazine",value:String(m.length),angle:240},network:{label:"Follow / Follower",value:`${r.length} / ${i.length}`,angle:300}},T=B[p]||B.identity;function j(){switch(p){case"identity":return`
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
                  ${r.length?r.map(R=>`
                    <article class="follow-item">
                      <div class="follow-item__main">
                        <div class="avatar">${R.slice(0,1).toUpperCase()}</div>
                        <span>${R}</span>
                      </div>
                      <button class="button button--ghost is-active" type="button" data-follow-author="${R}">Following</button>
                    </article>
                  `).join(""):'<p class="empty-copy">No following yet.</p>'}
                </div>
              </section>
              <section class="profile-library-block">
                <p class="profile-column-title">Followers ${i.length}</p>
                <div class="follow-list">
                  ${i.length?i.map(R=>`
                    <article class="follow-item">
                      <div class="follow-item__main">
                        <div class="avatar">${R.slice(0,1).toUpperCase()}</div>
                        <span>${R}</span>
                      </div>
                      <button class="button button--ghost" type="button" data-open-author="${R}">View</button>
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
              <button class="profile-library-tab ${y==="liked"?"is-active":""}" type="button" data-profile-library-tab="liked" aria-pressed="${y==="liked"?"true":"false"}">${F("heart")}<span>Like</span></button>
              <button class="profile-library-tab ${y==="saved"?"is-active":""}" type="button" data-profile-library-tab="saved" aria-pressed="${y==="saved"?"true":"false"}">${F("save")}<span>Save</span></button>
            </div>
            <section class="profile-library-panel">
              <p class="profile-column-title">${y==="liked"?"Liked Posts":"Saved Posts"}</p>
              ${y==="liked"?tt(s,"Posts you liked will appear here."):tt(u,"Posts you saved will appear here.")}
            </section>
          </section>
        `;case"magazine":return`
          <section class="profile-section-panel">
            <div class="section-head">
              <h3>Magazine</h3>
            </div>
            ${aa(m,e.posts||[])}
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
                      ${Ne(e.profile.avatarData,(e.profile.name||"Y").slice(0,1).toUpperCase(),`${e.profile.name} avatar`)}
                    </div>
                  </div>
                </div>
                <input id="profileAvatarInput" type="file" accept="image/*" hidden />
                ${$?`
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
            ${tt(o,"Your posts will appear here after you publish one.")}
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

      ${j()}
    </section>
  `}function na(e,t){var u;const a=Jt(e.posts||[]),o=e.posts.filter(m=>m.authorName===t),s=e.followingAuthors.includes(t);return`
    <section class="page page--profile">
      <header class="page-header page-header--with-back">
        <button class="button button--ghost page-back" type="button" data-close-profile>Back</button>
        <div>
          <p class="page-header__mini">author profile</p>
          <h2 class="page-header__title">${t}</h2>
        </div>
      </header>

      <section class="profile-card">
        <div class="profile-card__avatar">${Ne((u=o[0])==null?void 0:u.authorAvatarData,(t||"Y").slice(0,1).toUpperCase(),`${t} avatar`)}</div>
        <div class="profile-card__body">
          <div class="profile-card__heading">
            <div>
              <h3 class="profile-card__name">${t}</h3>
              <p class="profile-card__bio">${Vt(t)}</p>
            </div>
            <button class="button button--ghost ${s?"is-active":""}" type="button" data-follow-author="${t}">
              ${s?"Following":"Follow"}
            </button>
          </div>
        </div>
      </section>

      <section class="section-block">
        <div class="section-head">
          <h3>Posts</h3>
        </div>
        ${tt(o,"This author has no posts yet.")}
      </section>

      <section class="section-block">
        <div class="section-head">
          <h3>Local Stats</h3>
        </div>
        <div class="stats-grid">
          <article class="stat-card"><span>Posts</span><strong>${o.length}</strong></article>
          <article class="stat-card"><span>Followers</span><strong>${a.filter(m=>m!==t).length}</strong></article>
          <article class="stat-card"><span>Following</span><strong>${Number(s)}</strong></article>
        </div>
      </section>
    </section>
  `}function sa(e,t={}){const a=Jt(e.posts||[]),o=t.profileAuthor||null;return!o||o===e.profile.name?oa(e,t,a):na(e,o)}function ra(e,t={}){var u;if(!e)return`
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
    `;const{canDelete:a=!1,canEdit:o=!1}=t,s=[...e.fixedTags||[],...e.freeTags||[]];return`
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
            ${Ne(e.authorAvatarData,e.authorIcon,`${e.authorName} avatar`)}
          </button>
          <div>
            <p class="post-card__author">${e.authorName}</p>
            <p class="post-card__time">${Wt(e.createdAt)}</p>
          </div>
        </div>

        <img class="post-detail-card__image" src="${e.imageData}" alt="${e.authorName} post image" />

        ${e.caption?`<p class="post-detail-card__caption">${e.caption}</p>`:""}

        ${s.length?`
          <div class="post-detail-card__tags">
            ${s.map(m=>`<span class="chip chip--soft">${m}</span>`).join("")}
          </div>
        `:""}

        <div class="post-detail-card__meta">
          <div class="post-card__actions">
            <button class="icon-button ${e.liked?"is-active":""}" data-like="${e.id}" aria-label="Like post">
              ${F("heart")}
              <span>${e.likes}</span>
            </button>
            <button class="icon-button" data-comment="${e.id}" aria-label="Open comments">
              ${F("comment")}
              <span>${((u=e.comments)==null?void 0:u.length)||0}</span>
            </button>
            <button class="icon-button ${e.saved?"is-active":""}" data-save="${e.id}" aria-label="Save post">
              ${F("save")}
              <span>${e.saves}</span>
            </button>
          </div>
          ${o||a?`
            <div class="post-detail-card__owner-actions">
              ${o?`
                <button class="button button--ghost post-detail-card__edit" type="button" data-edit-post="${e.id}" aria-label="Edit post">
                  ${F("edit")}
                </button>
              `:""}
              ${a?`
                <button class="button button--ghost post-detail-card__delete" type="button" data-delete-post="${e.id}" aria-label="Delete post">
                  ${F("trash")}
                </button>
              `:""}
            </div>
          `:""}
        </div>
      </article>
    </section>
  `}async function Aa(e,t={}){const{maxWidth:a=900,quality:o=.82}=t,s=await createImageBitmap(e),u=s.width/s.height,m=Math.min(s.width,a),r=Math.round(m/u),i=document.createElement("canvas");return i.width=m,i.height=r,i.getContext("2d").drawImage(s,0,0,m,r),i.toDataURL("image/webp",o)}function ht(e){return URL.createObjectURL(e)}async function la(e,t,a={}){var T;const{size:o=320}=a,s=await createImageBitmap(e),u=document.createElement("canvas");u.width=o,u.height=o;const m=u.getContext("2d");if(!m)return"";const r=Math.max(1,Number(t==null?void 0:t.zoom)||1),i=Math.min(1,Math.max(0,Number(t==null?void 0:t.x)||.5)),p=Math.min(1,Math.max(0,Number(t==null?void 0:t.y)||.5)),y=Math.max(o/s.width,o/s.height);s.width*y*r,s.height*y*r;const $=o/(y*r),E=o/(y*r),L=Math.max(0,(s.width-$)*i),B=Math.max(0,(s.height-E)*p);return m.clearRect(0,0,o,o),m.save(),m.beginPath(),m.arc(o/2,o/2,o/2,0,Math.PI*2),m.closePath(),m.clip(),m.drawImage(s,L,B,$,E,0,0,o,o),m.restore(),(T=s.close)==null||T.call(s),u.toDataURL("image/png")}const c={screen:"opening",timelineOverlay:null,timelineTab:"recommended",timelinePan:{x:-360,y:-220},searchQuery:"",searchTags:[],homeTheme:"dark",homeCoreState:"default",homeCoreTapTimestamps:[],previewPostId:null,commentPostId:null,profileEditOpen:!1,profileAuthor:null,profileSection:null,profileLibraryTab:"liked",profileExpanded:!0,profileOrbitRotation:0,profileAvatarCropOpen:!1,composeStage:"select",composeTemplateId:Pe,composeBackgroundColor:"#f8f4ee",composeEditingPostId:null,openingTapGuardUntil:0,postReturnScreen:"timeline",postReturnProfileAuthor:null,profileReturnState:null,composeReturnState:null},Zt={headline:"text",subhead:"text",intro:"text",body:"text",date:"text",editor:"編集者：haru"};let Fe=null,Me=0,it=null,Be=null;const W={file:null,previewUrl:"",imageSize:null,crop:{x:.5,y:.5,zoom:1}};function Qt(){it&&(window.clearTimeout(it),it=null)}function Kt(){Qt(),c.homeCoreState="default",c.homeCoreTapTimestamps=[]}function je(){W.previewUrl&&URL.revokeObjectURL(W.previewUrl),W.file=null,W.previewUrl="",W.imageSize=null,W.crop={x:.5,y:.5,zoom:1},c.profileAvatarCropOpen=!1}function ca(){Be!=null&&Be.unmount&&Be.unmount(),Be=null}function da(){var t;const e=He();switch(c.screen){case"home":return Lt(e,c);case"timeline":return Ei(e,c);case"search":return Ri(e,c);case"compose":return Ki({stage:c.composeStage,selectedTemplateId:c.composeTemplateId,selectedBackground:c.composeBackgroundColor,draft:((t=Re(c.composeEditingPostId))==null?void 0:t.composeData)||null,isEditing:!!c.composeEditingPostId});case"magazine":return ia(e);case"profile":return sa(e,c);case"post":return ra(Re(c.previewPostId),{canDelete:ei(Re(c.previewPostId))});default:return Lt(e,c)}}function Re(e){return He().posts.find(t=>t.id===e)}function ei(e){return e?e.authorName===He().profile.name:!1}function ma(){if(!Fe)return;const e=["app-shell"],t=["screen-area"],a=c.homeTheme==="dark"?"dark":"light";e.push(`app-shell--theme-${a}`),c.screen==="home"?(e.push("app-shell--home"),t.push("screen-area--home")):c.screen==="timeline"?(e.push("app-shell--timeline"),t.push("screen-area--timeline")):c.screen==="search"&&t.push("screen-area--search"),Fe.innerHTML=`
    <div class="${e.join(" ")}">
      <main class="${t.join(" ")}" id="screenArea"></main>
      ${ri()}
      <div id="modalRoot"></div>
    </div>
  `}function Ue(){const e=document.getElementById("modalRoot");if(!e)return;const t=c.commentPostId?Re(c.commentPostId):null;e.innerHTML=`
    ${di(t)}
  `,La()}function oe(){const e=document.getElementById("screenArea");e&&(e.innerHTML=da(),Ea(),Ue())}function ne(){if(Fe){if(ca(),c.screen==="opening"){Fe.innerHTML=Si(),fa();return}ma(),oe(),ba()}}function gt(){return{screen:c.screen,previewPostId:c.previewPostId,profileAuthor:c.profileAuthor,postReturnScreen:c.postReturnScreen,postReturnProfileAuthor:c.postReturnProfileAuthor}}function ti(e,t="home"){if(!e){at(t);return}c.screen=e.screen||t,c.previewPostId=e.previewPostId||null,c.commentPostId=null,c.profileEditOpen=!1,c.profileAuthor=c.screen==="profile"&&e.profileAuthor||null,c.postReturnScreen=e.postReturnScreen||"home",c.postReturnProfileAuthor=e.postReturnProfileAuthor||null,ne()}function at(e){e!=="home"&&Kt(),e==="compose"&&c.screen!=="compose"&&(c.composeReturnState=gt()),e==="profile"&&c.screen!=="profile"&&(c.profileReturnState=gt()),e!=="profile"&&(je(),c.profileReturnState=null),e!=="home"&&(c.timelineOverlay=null),e!=="compose"&&(c.composeEditingPostId=null,c.composeStage="edit",c.composeBackgroundColor="#f8f4ee",c.composeReturnState=null),c.screen=e,c.previewPostId=null,c.commentPostId=null,e==="compose"&&(c.composeStage="edit",c.composeBackgroundColor="#f8f4ee"),e==="profile"&&(je(),c.profileAuthor=null,c.profileSection="identity",c.profileLibraryTab="liked",c.profileExpanded=!0,c.profileOrbitRotation=270),e!=="profile"&&(c.profileEditOpen=!1,c.profileAuthor=null),ne()}function ii(){c.previewPostId=null,c.commentPostId=null,c.openingTapGuardUntil=Date.now()+700,c.postReturnScreen="home",c.postReturnProfileAuthor=null,at("home")}function pa(e){je(),c.profileReturnState=gt(),c.screen="profile",c.previewPostId=null,c.commentPostId=null,c.profileEditOpen=!1,c.profileAuthor=e||null,c.profileSection=e?null:"identity",c.profileLibraryTab="liked",c.profileExpanded=!0,c.profileOrbitRotation=e?0:270,ne()}function ua(){je();const e=c.profileReturnState;c.profileReturnState=null,ti(e,"home")}function ha(e){c.postReturnScreen=c.screen,c.postReturnProfileAuthor=c.profileAuthor,c.screen="post",c.previewPostId=e,c.commentPostId=null,ne()}function ga(){const e=c.composeReturnState;c.composeReturnState=null,ti(e,"home")}function ai(){c.screen=c.postReturnScreen||"timeline",c.commentPostId=null,c.profileEditOpen=!1,c.profileAuthor=c.screen==="profile"?c.postReturnProfileAuthor:null,ne()}async function fa(){var u,m,r;const e=document.getElementById("openingCanvas"),t=document.querySelector(".opening-screen");if(!e||!t)return;const a=++Me,o=i=>{i.preventDefault(),i.stopPropagation(),a===Me&&(Me+=1,ii())};t.addEventListener("pointerdown",o,{once:!0});try{(u=document.fonts)!=null&&u.ready?await Promise.race([document.fonts.ready,new Promise(i=>window.setTimeout(i,1200))]):await new Promise(i=>window.setTimeout(i,180))}catch{}if(a!==Me)return;const s=((r=(m=window.matchMedia)==null?void 0:m.call(window,"(prefers-reduced-motion: reduce)"))==null?void 0:r.matches)??!1;ya(e,a,s)}function ya(e,t,a){const o=e.getBoundingClientRect(),s=window.devicePixelRatio||1,u=Math.max(1,Math.round(o.width*s)),m=Math.max(1,Math.round(o.height*s)),r=e.getContext("2d");if(!r)return;e.width=u,e.height=m;const i="#f5f7fb",p='"Zen Old Mincho", "Cormorant Garamond", "Times New Roman", serif',y="ABCDEFGHIJKLMNOPQRSTUVWXYZ",$=Math.min(u*.29,m*.56,156*s),E=`700 ${$}px ${p}`,L=a?1300:3e3,B=a?420:760,T=a?320:620,j=a?720:2100,R=a?1800:5200,w=L+B+T+j+R;function G(M,A,q){return Math.min(q,Math.max(A,M))}if(t!==Me)return;function de(M){return 1-(1-M)**3}function re(M){return M<.5?4*M*M*M:1-(-2*M+2)**3/2}function X(M,A,q){return M+(A-M)*q}function I(M,A,q){return G((M-A)/q,0,1)}function P(M,A,q,z,te=1){M.save(),M.globalAlpha=te,M.font=E,M.textAlign="left",M.textBaseline="middle",M.lineJoin="round",M.lineCap="round",M.lineWidth=Math.max(2.4*s,$*.08),M.strokeStyle="rgba(113, 218, 255, 0.22)",M.strokeText(A,q,z),M.shadowColor="rgba(94, 156, 255, 0.28)",M.shadowBlur=$*.08,M.shadowOffsetY=$*.03,M.fillStyle=i,M.fillText(A,q,z),M.restore()}function H(M=1){r.save(),r.globalAlpha=M,r.drawImage(C,0,0),r.restore()}function O(M=1,A=0){const q=m*.5,z=A*Math.PI*.9,te=$*.018*(1-A*.32),ae=Math.sin(z*.82)*te*.55,ie=Math.cos(z*.68)*te*.42,be=1+Math.sin(A*Math.PI*.8)*.004;r.save(),r.globalAlpha=M,r.translate(u/2+ae,q+ie),r.scale(be,be),r.drawImage(C,-u/2,-m*.5),r.restore(),r.save();const Y=Math.hypot(u,m),ue=$*.42;r.lineWidth=Math.max(1*s,$*.008);for(let Z=0;Z<3;Z+=1){const ee=G(A*.56-Z*.18,0,1);ee<=0||ee>=1||(r.globalAlpha=(1-ee)**1.4*.12*M,r.strokeStyle=i,r.beginPath(),r.arc(u/2,q,ue+ee*(Y-ue),0,Math.PI*2),r.stroke())}r.restore()}const C=document.createElement("canvas");C.width=u,C.height=m;const V=C.getContext("2d");if(!V)return;const pe=["V","e","l","n","a"],Ie=$*.025,Le=[-$*.05,0,0,0];V.font=E;const xe=pe.map(M=>V.measureText(M).width),Ee=xe.reduce((M,A)=>M+A,0)+Ie*(pe.length-1)+Le.reduce((M,A)=>M+A,0),Ge=u/2-Ee/2,$e=m*.5;V.fillStyle=i,V.font=E,V.textAlign="left",V.textBaseline="middle";let We=Ge;const ye=pe.map((M,A)=>{const q=xe[A],z=We;We+=q+Ie+(Le[A]||0);const te=A<2;return{glyph:M,targetX:z,targetY:$e,startX:te?-q-Math.random()*u*.16-A*$*.18:u+Math.random()*u*.16+(pe.length-A)*$*.18,startY:$e+(Math.random()-.5)*$*.42,driftX:(Math.random()-.5)*$*.12,driftY:(Math.random()-.5)*$*.08,enterArc:(Math.random()-.5)*$*.32,delay:A*.055,alpha:.72+Math.random()*.18,width:q}});pe.forEach((M,A)=>{P(V,M,ye[A].targetX,$e)});const qe=[],Je=a?Math.max(28,Math.round(u/20)):Math.max(120,Math.round(u/5.5)),Ve=Ee*.52+$*.16,Ze=$*.56;for(let M=0;M<Je;M+=1){const A=M%7,q=.86+A*.28+Math.random()*.14,z=Math.random()<.5?1:-1,te=A>=4?1.35:1;qe.push({glyph:y[Math.floor(Math.random()*y.length)],size:Math.max(u,m)*.024+Math.random()*(Math.max(u,m)*.034),angularSpeed:(a?22e-5:4e-4)*(.82+Math.random()*.72)*z,radiusX:Math.min(u*.64,Ve*q*te),radiusY:Math.min(m*.42,Ze*(.86+A*.2+Math.random()*.14)*te),wobble:$*(.03+Math.random()*.05),wobbleSpeed:.0012+Math.random()*.0016,alpha:a?.16+Math.random()*.1:.24+Math.random()*.18,seed:Math.random()*Math.PI*2})}const ze=performance.now();function le(M,A,q="back"){qe.forEach(z=>{const te=M*z.angularSpeed+z.seed,ae=Math.sin(te),ie=ae>0;if(q==="front"&&!ie||q==="back"&&ie)return;const be=Math.sin(M*z.wobbleSpeed+z.seed*1.4)*z.wobble,Y=Math.cos(M*z.wobbleSpeed*.82+z.seed*.9)*z.wobble*.72,ue=u/2+Math.cos(te)*z.radiusX+be,Z=$e+ae*z.radiusY+Y,ee=ie?1+ae*.22:.74+(ae+1)*.08,we=z.alpha*A*(ie?.72+ae*.42:.18);we<=.015||(r.save(),r.globalAlpha=we,r.fillStyle=i,r.font=`500 ${z.size*ee}px ${p}`,r.textAlign="center",r.textBaseline="middle",r.fillText(z.glyph,ue,Z),r.restore())})}function Oe(M){if(t!==Me)return;const A=M-ze,q=de(I(A,0,L)),z=re(I(A,L*.58,B)),te=re(I(A,L+B,T)),ae=I(A,L+B*.3,T),ie=re(I(A,L+B+T+j,R));r.clearRect(0,0,u,m),r.textAlign="center",r.textBaseline="middle",r.fillStyle=i,le(A,Math.max(0,1-ae),"back"),ye.forEach((Z,ee)=>{const we=G((q-Z.delay)/(1-Z.delay),0,1);if(we<=.001)return;const he=de(we),Qe=(1-he)*Z.enterArc,Xe=X(Z.startX,Z.targetX,he)+Z.driftX*(1-he),ge=X(Z.startY,Z.targetY,he)+Math.sin(he*Math.PI+ee*.35)*Qe+Z.driftY*(1-he),Q=1-G((te-.24)/.76,0,1),Ce=Math.min(.96,.22+he*Z.alpha+z*.18)*Q;Ce<=.02||(r.save(),P(r,Z.glyph,Xe,ge,Ce),r.restore())}),r.globalAlpha=1;const be=G((te-.18)/.82,0,1),Y=Math.max(0,1-ie**2.1),ue=be*Y;if(ie>.001?O(ue,ie):H(ue),le(A,Math.max(0,1-ae),"front"),A<w){requestAnimationFrame(Oe);return}t===Me&&ii()}requestAnimationFrame(Oe)}function ba(){const e=(a,o,s)=>Math.min(s,Math.max(o,a));[{element:document.querySelector('[data-side-wheel="main"]'),getItems:()=>Array.from(document.querySelectorAll('[data-side-wheel="main"] [data-side-nav-screen]')),getActiveKey:()=>["timeline","search","compose","profile"].includes(c.screen)?c.screen:c.postReturnScreen||"timeline",applySelection:a=>{if(c.screen===a){ne();return}at(a)}},{element:document.querySelector('[data-side-wheel="timeline"]'),getItems:()=>Array.from(document.querySelectorAll('[data-side-wheel="timeline"] [data-side-nav-tab]')),getActiveKey:()=>c.timelineTab||"recommended",applySelection:a=>{c.timelineTab=a,ne()}},{element:document.querySelector('[data-side-wheel="profile"]'),getItems:()=>Array.from(document.querySelectorAll('[data-side-wheel="profile"] [data-side-nav-profile-section]')),getActiveKey:()=>c.profileSection||"identity",applySelection:a=>{c.profileSection=a,c.profileSection==="library"&&(c.profileLibraryTab=c.profileLibraryTab||"liked"),ne()}}].filter(a=>a.element).forEach(a=>{const{element:o,getItems:s,applySelection:u,getActiveKey:m}=a,r=s();if(!r.length)return;const i=r.map((I,P)=>({button:I,key:I.dataset.sideNavScreen||I.dataset.sideNavTab||I.dataset.sideNavProfileSection,index:P})),p=Math.max(0,i.findIndex(I=>I.key===m()));let y=!1,$=p,E=0,L=0,B=0,T=null;const j=I=>{var V;const P=(V=i[$])==null?void 0:V.button.getBoundingClientRect(),H=((P==null?void 0:P.height)||0)/2,O=H,C=window.innerHeight-H;return C<=O?0:e(I,O-window.innerHeight/2,C-window.innerHeight/2)},R=(I,P)=>{const H=o.classList.contains("side-wheel--left")?76:24,O=i.length<=2?88:76;o.style.setProperty("--wheel-offset-y",`${E}px`),o.classList.toggle("is-dragging",!!(T!=null&&T.moved)),i.forEach(C=>{const V=(C.index-I)*O,pe=P||C.index===I?1:0,Ie=P?C.index===I?1:.9:1,Le=!P&&C.index===I?L:0;C.button.style.setProperty("--slot-x",`${H}%`),C.button.style.setProperty("--slot-y",`${V}px`),C.button.style.setProperty("--slot-scale",String(Ie)),C.button.style.setProperty("--slot-opacity",String(pe)),C.button.style.setProperty("--slot-depth",String(Math.abs(C.index-I))),C.button.style.setProperty("--drag-x",`${Le}px`),C.button.style.setProperty("--drag-y","0px"),C.button.classList.toggle("is-active",C.index===I),C.button.classList.toggle("is-dragging",!!(T!=null&&T.moved)&&C.index===I)})},w=I=>{var C;if(!T||(I==null?void 0:I.pointerId)!=null&&T.pointerId!==I.pointerId)return;const{button:P,pointerId:H,moved:O}=T;(C=P.hasPointerCapture)!=null&&C.call(P,H)&&P.releasePointerCapture(H),T=null,O&&(B=Date.now()+220),R($,y)},G=I=>{if(!T||T.pointerId!==I.pointerId)return;const P=I.clientX-T.startX,H=I.clientY-T.startY;if(!(!T.moved&&Math.hypot(P,H)<8)){if(T.moved=!0,E=j(T.startWheelOffsetY+H),T.mode==="collapsed"){const O=T.halfWidth,C=window.innerWidth-T.halfWidth;L=e(T.startCenterX+P,O,C)-T.anchorCenterX}else L=0;R($,y)}};R(p,!1);const de=()=>{y=!0,o.classList.add("is-engaged"),L=0,R($,!0)},re=()=>{y=!1,o.classList.remove("is-engaged"),R($,!1)},X=(I=$)=>{$=I;const P=i[$];if(!P){re();return}u(P.key)};r.forEach(I=>{I.addEventListener("pointerdown",P=>{if(Number(I.dataset.sideIndex||0)!==$)return;const O=I.getBoundingClientRect();T={pointerId:P.pointerId,button:I,mode:y?"engaged":"collapsed",startX:P.clientX,startY:P.clientY,startCenterX:O.left+O.width/2,anchorCenterX:O.left+O.width/2-L,halfWidth:O.width/2,startWheelOffsetY:E,moved:!1},I.setPointerCapture(P.pointerId)}),I.addEventListener("pointermove",G),I.addEventListener("pointerup",w),I.addEventListener("pointercancel",w),I.addEventListener("lostpointercapture",w),I.addEventListener("click",P=>{if(Date.now()<B){P.preventDefault(),P.stopPropagation();return}P.preventDefault();const H=Number(I.dataset.sideIndex||0);if(!y){if(H!==$)return;de();return}if(H===$){re();return}X(H)})})})}function ot(e=document){e.querySelectorAll("[data-toggle-tags]").forEach(t=>{t.addEventListener("click",()=>{const a=document.querySelector(`[data-tags-panel="${t.dataset.toggleTags}"]`);a&&(a.hidden=!a.hidden,t.classList.toggle("is-active",!a.hidden))})}),e.querySelectorAll("[data-like]").forEach(t=>{t.addEventListener("click",()=>{fi(t.dataset.like),oe()})}),e.querySelectorAll("[data-save]").forEach(t=>{t.addEventListener("click",()=>{yi(t.dataset.save),oe()})}),e.querySelectorAll("[data-comment]").forEach(t=>{t.addEventListener("click",()=>{c.commentPostId=t.dataset.comment,Ue()})}),e.querySelectorAll("[data-open-preview]").forEach(t=>{t.addEventListener("click",a=>{if(Date.now()<c.openingTapGuardUntil){a.preventDefault(),a.stopPropagation();return}const o=t.dataset.openPreview;vi(o),ha(o)})}),e.querySelectorAll("[data-open-author]").forEach(t=>{t.addEventListener("click",()=>{pa(t.dataset.openAuthor)})})}function va(){const e=document.querySelector(".orbit-home"),t=()=>{e&&(e.classList.remove("orbit-home--default","orbit-home--collapsing","orbit-home--sheep"),e.classList.add(`orbit-home--${c.homeCoreState}`))};document.querySelectorAll("[data-home-theme-toggle]").forEach(a=>{a.addEventListener("click",()=>{c.homeTheme=c.homeTheme==="dark"?"light":"dark",ne()})}),document.querySelectorAll("[data-home-core-toggle]").forEach(a=>{a.addEventListener("click",()=>{if(c.homeCoreState!=="default")return;const o=Date.now();c.homeCoreTapTimestamps=[...c.homeCoreTapTimestamps.filter(s=>o-s<900),o],!(c.homeCoreTapTimestamps.length<3)&&(c.homeCoreTapTimestamps=[],c.homeCoreState="collapsing",t(),Qt(),it=window.setTimeout(()=>{c.homeCoreState="sheep",t()},620))})}),document.querySelectorAll("[data-home-sheep-toggle]").forEach(a=>{a.addEventListener("click",()=>{c.homeCoreState==="sheep"&&(Kt(),t())})})}function xa(){var a,o;ot(document.getElementById("screenArea"));const e=document.querySelector("[data-timeline-pan-viewport]"),t=document.querySelector("[data-timeline-pan-surface]");if(e&&t){const s=(i,p)=>{const y=Math.min(0,e.clientWidth-t.scrollWidth),$=Math.min(0,e.clientHeight-t.scrollHeight);return{x:Math.max(y,Math.min(0,i)),y:Math.max($,Math.min(0,p))}},u=(i,p)=>{const y=s(i,p);c.timelinePan=y,t.style.transform=`translate(${y.x}px, ${y.y}px)`};u(((a=c.timelinePan)==null?void 0:a.x)??-360,((o=c.timelinePan)==null?void 0:o.y)??-220);let m=null;t.addEventListener("pointerdown",i=>{var p,y,$;m={pointerId:i.pointerId,startX:i.clientX,startY:i.clientY,originX:((p=c.timelinePan)==null?void 0:p.x)??-360,originY:((y=c.timelinePan)==null?void 0:y.y)??-220,moved:!1},e.classList.add("is-dragging"),($=t.setPointerCapture)==null||$.call(t,i.pointerId)}),t.addEventListener("pointermove",i=>{if(!m||m.pointerId!==i.pointerId)return;const p=i.clientX-m.startX,y=i.clientY-m.startY;(Math.abs(p)>4||Math.abs(y)>4)&&(m.moved=!0,i.preventDefault()),u(m.originX+p,m.originY+y)});const r=i=>{var p;!m||m.pointerId!==i.pointerId||(e.classList.remove("is-dragging"),m.moved&&(c.openingTapGuardUntil=Date.now()+180),m=null,(p=t.releasePointerCapture)==null||p.call(t,i.pointerId))};t.addEventListener("pointerup",r),t.addEventListener("pointercancel",r)}document.querySelectorAll("[data-timeline-tab]").forEach(s=>{s.addEventListener("click",()=>{c.timelineTab=s.dataset.timelineTab||"recommended",oe()})})}function wa(){ot(document.getElementById("screenArea"));const e=document.getElementById("searchInput");e&&e.addEventListener("input",t=>{c.searchQuery=t.target.value;const a=t.target.selectionStart;oe();const o=document.getElementById("searchInput");o&&(o.focus(),o.setSelectionRange(a,a))}),document.querySelectorAll("[data-search-tag]").forEach(t=>{t.addEventListener("click",()=>{const a=t.dataset.searchTag;c.searchTags=c.searchTags.includes(a)?c.searchTags.filter(o=>o!==a):[...c.searchTags,a],oe()})})}function _a(){document.querySelectorAll("[data-home-nav]").forEach(e=>{e.addEventListener("click",()=>{at(e.dataset.homeNav)})}),document.querySelectorAll("[data-close-profile]").forEach(e=>{e.addEventListener("click",()=>{ua()})}),document.querySelectorAll("[data-close-compose]").forEach(e=>{e.addEventListener("click",()=>{ga()})})}function et(e){var t,a;return e.templateId==="page8"&&Array.isArray((t=e.customLayout)==null?void 0:t.pretextBoxes)?e.customLayout.pretextBoxes.filter(o=>o.kind==="title"||o.kind==="body").map(o=>{var s;return String(((s=o.data)==null?void 0:s.text)||"").trim()}).filter(Boolean).join(" / ").slice(0,120):e.templateId==="page8"&&Array.isArray((a=e.customLayout)==null?void 0:a.textBoxes)?e.customLayout.textBoxes.map(o=>String(o.text||"").trim()).filter(Boolean).join(" / ").slice(0,120):[e.headline,e.subhead,e.intro,e.body].map(o=>o.trim()).filter(Boolean).join(" / ").slice(0,120)}function Sa(e,t,a){const{x:o,y:s,maxWidth:u,lineHeight:m,maxLines:r}=a,i=[];String(t||"").split(`
`).forEach(y=>{const $=/\s/.test(y.trim()),E=$?y.split(/\s+/).filter(Boolean):Array.from(y),L=$?" ":"";if(!E.length){i.push("");return}let B="";E.forEach(T=>{const j=B?`${B}${L}${T}`:T;if(e.measureText(j).width<=u||!B){B=j;return}i.push(B),B=T}),B&&i.push(B)}),i.slice(0,r).forEach((y,$)=>{e.fillText(y,o,s+$*m)})}function bt(e,t,a,o,s,u){e.beginPath(),e.moveTo(t+u,a),e.arcTo(t+o,a,t+o,a+s,u),e.arcTo(t+o,a+s,t,a+s,u),e.arcTo(t,a+s,t,a,u),e.arcTo(t,a,t+o,a,u),e.closePath()}async function $a(e,t,a,o={x:.5,y:.5}){var T;if(!t)return;const s=typeof t=="string"?await new Promise((j,R)=>{const w=new Image;w.onload=()=>j(w),w.onerror=R,w.src=t}):await createImageBitmap(t),u=s.width/s.height,m=a.width/a.height;let r=0,i=0,p=s.width,y=s.height;const $=Math.max(1,Number(o==null?void 0:o.zoom)||1),E=Number.isFinite(o==null?void 0:o.cropX)||Number.isFinite(o==null?void 0:o.cropY);let L=Math.min(1,Math.max(0,o.x??.5)),B=Math.min(1,Math.max(0,o.y??.5));if(E){const j=u>m?a.height*u:a.width,R=u>m?a.height:a.width/u,w=Math.max(0,j*$-a.width),G=Math.max(0,R*$-a.height);L=w?Math.min(1,Math.max(0,.5-(Number(o==null?void 0:o.cropX)||0)/w)):.5,B=G?Math.min(1,Math.max(0,.5-(Number(o==null?void 0:o.cropY)||0)/G)):.5}u>m?(p=Math.max(1,s.height*m/$),r=(s.width-p)*L):(y=Math.max(1,s.width/m/$),i=(s.height-y)*B),e.save(),bt(e,a.x,a.y,a.width,a.height,a.radius),e.clip(),e.drawImage(s,r,i,p,y,a.x,a.y,a.width,a.height),e.restore(),(T=s.close)==null||T.call(s)}function Ta(e,t){e.save(),e.lineWidth=4,e.strokeStyle="rgba(34, 28, 25, 0.88)",bt(e,t.x,t.y,t.width,t.height,t.radius),e.stroke();const a=Math.min(t.width,t.height)*.18,o=t.x+t.width/2,s=t.y+t.height/2;e.beginPath(),e.arc(o,s,a,0,Math.PI*2),e.stroke(),e.beginPath(),e.moveTo(o-a*.42,s),e.lineTo(o+a*.42,s),e.moveTo(o,s-a*.42),e.lineTo(o,s+a*.42),e.stroke(),e.restore()}async function Nt(e,t,a={}){const m=document.createElement("canvas");m.width=2480,m.height=3508;const r=m.getContext("2d");if(!r)return"";const i=2480/1240;return r.imageSmoothingEnabled=!0,r.imageSmoothingQuality="high",r.fillStyle=e.backgroundColor||"#f8f4ee",r.fillRect(0,0,2480,3508),r.scale(i,i),await Gi(e.templateId).render(r,e,t,{addWrappedText:Sa,clipRoundedRect:bt,drawFileCover:$a,drawSlotPlaceholder:Ta,defaults:Zt,page8Files:a.page8Files||{}}),m.toDataURL("image/png")}function ka(){var vt,xt;const e=document.querySelector(".page--compose");if(!e)return;const t=e.dataset.composeStage||"select",a=document.getElementById("composeForm"),o=a||e,s=document.getElementById("composeSheet"),u=(s==null?void 0:s.querySelector(".compose-sheet__frame"))||null,m=(s==null?void 0:s.querySelector("[data-custom-canvas]"))||null,r=((vt=Re(c.composeEditingPostId))==null?void 0:vt.composeData)||null,i={...Zt,...r||{}},p={imageInputPrimary:"",imageInputSecondary:"",imageInputAccent:""},y={primary:{file:null,position:{x:.5,y:.5},imageSize:null},secondary:{file:null,position:{x:.5,y:.5},imageSize:null},accent:{file:null,position:{x:.5,y:.5},imageSize:null}},$=document.querySelector("[data-toggle-compose-tags]"),E=document.querySelector("[data-compose-tags]"),L=document.querySelector("[data-toggle-compose-preview]"),B=document.querySelector("[data-custom-template-controls]"),T=document.querySelector("[data-custom-inspector]"),j=document.querySelector("[data-compose-pretext-host]"),R=Array.from(document.querySelectorAll("[data-editable]")),w={options:Ft((r==null?void 0:r.customLayout)||{}),imageBoxes:pt((r==null?void 0:r.customLayout)||{}),textBoxes:ut((r==null?void 0:r.customLayout)||{},i),selectedId:null,imageMode:"frame"},G={},de={headline:document.querySelector('[data-editable="headline"]'),subhead:document.querySelector('[data-editable="subhead"]'),intro:document.querySelector('[data-editable="intro"]'),body:document.querySelector('[data-editable="body"]'),date:document.querySelector('[data-editable="date"]'),editor:document.querySelector('[data-editable="editor"]')},re={primary:document.querySelector('[data-slot="imageInputPrimary"]'),secondary:document.querySelector('[data-slot="imageInputSecondary"]'),accent:document.querySelector('[data-slot="imageInputAccent"]')},X=n=>{c.composeStage=n,ne()};function I(n){return new Promise(l=>{const d=new Image,v=URL.createObjectURL(n);d.onload=()=>{l({width:d.naturalWidth,height:d.naturalHeight}),URL.revokeObjectURL(v)},d.onerror=()=>{l(null),URL.revokeObjectURL(v)},d.src=v})}function P(n){const l=document.querySelector(`[data-slot-image="${n}"]`),v=y[n==="imageInputPrimary"?"primary":n==="imageInputSecondary"?"secondary":"accent"];l&&(l.style.backgroundPosition=`${(v.position.x||.5)*100}% ${(v.position.y||.5)*100}%`)}function H(n){return String(n??"").replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#39;")}function O(n){return`${n}-${Date.now().toString(36)}-${Math.random().toString(36).slice(2,7)}`}function C(n){return G[n]||(G[n]={file:null,position:{x:.5,y:.5,zoom:1},imageSize:null,previewUrl:""}),G[n]}function V(n){return n==="title"?{kind:"title",fontSize:.046,lineHeight:1.12,padding:.01,family:"serif",weight:600,align:"left"}:{kind:"body",fontSize:.026,lineHeight:1.45,padding:.012,family:"sans",weight:500,align:"left"}}function pe(n,l){Object.assign(n,{...n,...V(l)})}function Ie(n){if(n.dataset.singleLine==="true"){n.innerText=n.innerText.replace(/\r?\n+/g," ");return}n.innerHTML=n.innerHTML.replace(/<div><br><\/div>/gi,"<br>").replace(/<div>/gi,"<br>").replace(/<\/div>/gi,"").replace(/&nbsp;/gi," ")}function Le(n){const l=Number(n.dataset.maxChars||0),d=n.innerText.replace(/\r/g,"");if(n.dataset.previousValue||(n.dataset.previousValue=d),l&&d.length>l||n.scrollHeight>n.clientHeight+1||n.scrollWidth>n.clientWidth+1){n.innerText=n.dataset.previousValue;return}n.dataset.previousValue=d.trim()?d:""}function xe(n){return n.innerText.replace(/\r/g,"")}function Ee(n){const l=window.getSelection();if(!l)return;const d=document.createRange();d.selectNodeContents(n),d.collapse(!1),l.removeAllRanges(),l.addRange(d)}function Ge(n){const l=window.getSelection();if(!l||l.rangeCount===0)return 0;const d=l.getRangeAt(0);return!n.contains(d.startContainer)||!n.contains(d.endContainer)?0:l.toString().length}function $e(n,l){const d=window.getSelection();if(!d||d.rangeCount===0){n.append(document.createTextNode(l)),Ee(n);return}const v=d.getRangeAt(0);v.deleteContents();const k=document.createTextNode(l);v.insertNode(k),v.setStartAfter(k),v.collapse(!0),d.removeAllRanges(),d.addRange(v)}function We(n){!e||!L||(e.classList.toggle("is-preview-mode",n),L.textContent=n?"back":"preview",L.setAttribute("aria-pressed",String(n)),R.forEach(l=>{l.setAttribute("contenteditable",n?"false":"true"),n&&l.blur()}),(s==null?void 0:s.dataset.template)==="page8"&&Q())}function ye(n){const l=document.querySelector(`[data-editable="${n}"]`);return l?l.innerText.replace(/\r/g,"").trim():""}function qe(){const n=o.querySelector('input[name="backgroundColor"]:checked'),l=(n==null?void 0:n.value)||c.composeBackgroundColor||"#f8f4ee";if(c.composeBackgroundColor=l,!s){o.querySelectorAll(".color-chip").forEach(d=>{const v=d.querySelector('input[name="backgroundColor"]');d.classList.toggle("is-active",!!(v!=null&&v.checked))});return}s.style.setProperty("--sheet-bg",l),o.querySelectorAll(".color-chip").forEach(d=>{const v=d.querySelector('input[name="backgroundColor"]');d.classList.toggle("is-active",!!(v!=null&&v.checked))})}function Je(n){const l=n||Pe;if(c.composeTemplateId=l,!s){o.querySelectorAll(".template-thumb").forEach(v=>{const k=v.querySelector('input[name="templateId"]');v.classList.toggle("is-active",(k==null?void 0:k.value)===l)}),j&&ne();return}s.dataset.template=l,o.querySelectorAll(".template-thumb").forEach(v=>{const k=v.querySelector('input[name="templateId"]');v.classList.toggle("is-active",(k==null?void 0:k.value)===l)});const d=l==="page8";B&&(B.hidden=!0),s.classList.toggle("compose-sheet--custom",d),Ce()}function Ve(n){var d;const l=o.querySelector(`input[name="templateId"][value="${n}"]`);(d=l==null?void 0:l.closest(".template-thumb"))==null||d.scrollIntoView({behavior:"smooth",block:"nearest",inline:"center"})}function Ze(n){var d;const l=o.querySelector(`input[name="backgroundColor"][value="${n}"]`);(d=l==null?void 0:l.closest(".color-chip"))==null||d.scrollIntoView({behavior:"smooth",block:"nearest",inline:"center"})}function ze(n){const l=document.querySelector(`[data-slot-image="${n}"]`),d=document.querySelector(`[data-slot-placeholder="${n}"]`),v=document.querySelector(`[data-slot-remove="${n}"]`);if(!(!l||!d||!v)){if(p[n]){l.style.backgroundImage=`url("${p[n]}")`,l.hidden=!1,d.hidden=!0,v.hidden=!1;return}l.style.backgroundImage="",l.hidden=!0,d.hidden=!1,v.hidden=!0}}function le(n,l){const d=Math.min(N.width,Math.max(l.width,n.width)),v=Math.min(N.height,Math.max(l.height,n.height));return{...n,x:Math.min(N.x+N.width-d,Math.max(N.x,_e(n.x))),y:Math.min(N.y+N.height-v,Math.max(N.y,_e(n.y))),width:_e(d),height:_e(v)}}function Oe(n,l,d=.02){return!(n.x+n.width+d<=l.x||l.x+l.width+d<=n.x||n.y+n.height+d<=l.y||l.y+l.height+d<=n.y)}function M(n){return{x:n.x,y:n.y,width:n.width,height:n.height}}function A(n,l={}){const{ignoreText:d=!1,ignoreImages:v=!1}=l;return[...v?[]:w.imageBoxes.filter(k=>k.id!==n).map(k=>M(k)),...d?[]:w.textBoxes.filter(k=>k.id!==n).map(k=>M(k))]}function q(n,l,d={}){const v=M(n);return!A(l,d).some(h=>Oe(v,h))}function z(n,l,d,v={}){const k=le({...n},d);if(q(k,l,v))return k;const h=[[0,-1],[1,0],[0,1],[-1,0],[1,-1],[1,1],[-1,1],[-1,-1]],f=De*2;for(let _=1;_<=18;_+=1)for(const[b,x]of h){const S=le({...k,x:k.x+b*f*_,y:k.y+x*f*_},d);if(q(S,l,v))return S}for(let _=N.y;_<=N.y+N.height-k.height;_+=f)for(let b=N.x;b<=N.x+N.width-k.width;b+=f){const x=le({...k,x:b,y:_},d);if(q(x,l,v))return x}return k}function te(n,l,d=.018){const v=n.y-d,k=n.y+n.height+d,h=N.x,f=N.x+N.width;let _=[{left:h,right:f}];return l.forEach(b=>{const x=b.y-d;if(b.y+b.height+d<=v||x>=k)return;const g=Math.max(h,b.x-d),D=Math.min(f,b.x+b.width+d);_=_.flatMap(J=>{if(D<=J.left||g>=J.right)return[J];const U=[];return g>J.left&&U.push({left:J.left,right:g}),D<J.right&&U.push({left:D,right:J.right}),U})}),_.filter(b=>b.right-b.left>=n.width)}function ae(n,l){const d=le({...n},ke),v=[];for(let f=0;f<=24;f+=1){const _=_e(d.y-f*De),b=_e(d.y+f*De);_>=N.y&&v.push(_),b<=N.y+N.height-d.height&&b!==_&&v.push(b)}let k=d,h=Number.POSITIVE_INFINITY;return v.forEach(f=>{const _={...d,y:f};te(_,l).forEach(x=>{const S=x.left,g=x.right-d.width,D=_e(Math.min(g,Math.max(S,d.x))),J=le({...d,x:D,y:f},ke);if(l.some(me=>Oe(M(J),me)))return;const U=Math.abs(J.x-d.x),ce=Math.abs(J.y-d.y)*2+U;ce<h&&(h=ce,k=J)})}),k}function ie(n){const l=Y(n);!l||l.type!=="image"||(w.textBoxes=w.textBoxes.map(d=>{const v=[...w.imageBoxes.filter(k=>k.id!==d.id).map(k=>M(k)),...w.textBoxes.filter(k=>k.id!==d.id).map(k=>M(k))];return ae(d,v)}))}function be(n){return[...w.imageBoxes.filter(l=>l.id!==n).map(l=>M(l)),...w.textBoxes.filter(l=>l.id!==n).map(l=>M(l))]}function Y(n){const l=w.imageBoxes.findIndex(v=>v.id===n);if(l>=0)return{type:"image",collection:w.imageBoxes,index:l,item:w.imageBoxes[l]};const d=w.textBoxes.findIndex(v=>v.id===n);return d>=0?{type:"text",collection:w.textBoxes,index:d,item:w.textBoxes[d]}:null}function ue(n){return n==="image"?dt:ke}function Z(n){return`${Math.round(n*100)}%`}function ee(n,l={}){const{rerender:d=!1}=l;if(!u||!m)return;const v=n?Y(n):null;if(!v||v.type!=="text")return;const k=m.querySelector(`[data-custom-text="${n}"]`);if(!k)return;const h=u.getBoundingClientRect();if(!h.height)return;const f=Math.max(ke.height,_e((k.scrollHeight+8)/h.height));if(!(Math.abs(f-v.item.height)<De/2)){if(v.item.height=f,Object.assign(v.item,le(v.item,ke)),Object.assign(v.item,ae(v.item,be(n))),d){Q();return}he(n,v.item),ge()}}function we(){m&&m.querySelectorAll("[data-custom-item]").forEach(n=>{n.classList.toggle("is-selected",n.dataset.customItem===w.selectedId)})}function he(n,l){const d=m==null?void 0:m.querySelector(`[data-custom-item="${n}"]`);if(!d)return;const v=rt(l);d.style.left=v.left,d.style.top=v.top,d.style.width=v.width,d.style.height=v.height}function Qe(){[...w.imageBoxes,...w.textBoxes].forEach(n=>{he(n.id,n)})}function Xe(n,l={}){const{rerender:d=!1}=l;if(w.selectedId=n,d&&(s==null?void 0:s.dataset.template)==="page8"){Q();return}we(),ge()}function ge(){var l,d,v,k,h,f,_,b;if(!T||(s==null?void 0:s.dataset.template)!=="page8")return;const n=w.selectedId?Y(w.selectedId):null;if(!n){T.innerHTML=`
        <p class="compose-custom-inspector__title">Selection</p>
        <p class="compose-custom-inspector__note">ボックスを選ぶと、ここで内容や見た目を調整できます。</p>
      `;return}if(n.type==="image"){const x=C(n.item.id),S=!!(x.previewUrl||x.file),g=Math.max(1,Number((l=x.position)==null?void 0:l.zoom)||1);T.innerHTML=`
        <p class="compose-custom-inspector__title">Image Box</p>
        <p class="compose-custom-inspector__note">${w.imageMode==="crop"?"Crop 中は画像面をドラッグして見せ方を調整します。":"Frame 中はボックス自体を動かします。Crop に切り替えると画像だけを動かせます。"}</p>
        <div class="compose-custom-inspector__meta">
          <span>W ${Z(n.item.width)}</span>
          <span>H ${Z(n.item.height)}</span>
        </div>
        <div class="compose-custom-inspector__field">
          <span>Mode</span>
          <div class="compose-custom-inspector__segmented compose-custom-inspector__segmented--dual">
            <button type="button" data-custom-image-mode="frame" class="${w.imageMode==="frame"?"is-active":""}">Frame</button>
            <button type="button" data-custom-image-mode="crop" class="${w.imageMode==="crop"?"is-active":""}" ${S?"":"disabled"}>Crop</button>
          </div>
        </div>
        <label class="compose-custom-inspector__field">
          <span>Zoom</span>
          <input class="compose-custom-inspector__range" data-custom-control="zoom" type="range" min="1" max="3" step="0.01" value="${g}" ${S?"":"disabled"} />
        </label>
        <div class="compose-custom-inspector__segmented compose-custom-inspector__segmented--dual">
          <button type="button" data-custom-control="replace-image">${S?"Replace":"Upload"}</button>
          <button type="button" data-custom-control="delete">Delete</button>
        </div>
      `,T.querySelectorAll("[data-custom-image-mode]").forEach(D=>{D.addEventListener("click",()=>{D.hasAttribute("disabled")||(w.imageMode=D.dataset.customImageMode==="crop"?"crop":"frame",ge())})}),(d=T.querySelector('[data-custom-control="zoom"]'))==null||d.addEventListener("input",D=>{x.position.zoom=Math.max(1,Number(D.target.value)||1),Q()}),(v=T.querySelector('[data-custom-control="replace-image"]'))==null||v.addEventListener("click",()=>{var D;(D=document.getElementById(`custom-image-${n.item.id}`))==null||D.click()})}else{T.innerHTML=`
      <p class="compose-custom-inspector__title">Text Box</p>
      <p class="compose-custom-inspector__note">Title / Body のプリセットを起点にして、細部は個別調整できます。</p>
      <div class="compose-custom-inspector__meta">
        <span>W ${Z(n.item.width)}</span>
        <span>H ${Z(n.item.height)}</span>
      </div>
      <div class="compose-custom-inspector__field">
        <span>Preset</span>
        <div class="compose-custom-inspector__segmented compose-custom-inspector__segmented--dual">
          <button type="button" data-custom-preset="title" class="${n.item.kind==="title"?"is-active":""}">Title</button>
          <button type="button" data-custom-preset="body" class="${n.item.kind==="body"?"is-active":""}">Body</button>
        </div>
      </div>
      <label class="compose-custom-inspector__field">
        <span>Text</span>
        <textarea class="compose-custom-inspector__textarea" data-custom-control="text">${H(n.item.text)}</textarea>
      </label>
      <label class="compose-custom-inspector__field">
        <span>Size</span>
        <input class="compose-custom-inspector__range" data-custom-control="fontSize" type="range" min="14" max="54" value="${Math.round(n.item.fontSize*520)}" />
      </label>
      <label class="compose-custom-inspector__field">
        <span>Leading</span>
        <input class="compose-custom-inspector__range" data-custom-control="lineHeight" type="range" min="100" max="220" step="1" value="${Math.round(n.item.lineHeight*100)}" />
      </label>
      <label class="compose-custom-inspector__field">
        <span>Padding</span>
        <input class="compose-custom-inspector__range" data-custom-control="padding" type="range" min="4" max="40" step="1" value="${Math.round(n.item.padding*1e3)}" />
      </label>
      <label class="compose-custom-inspector__field">
        <span>Weight</span>
        <input class="compose-custom-inspector__range" data-custom-control="weight" type="range" min="400" max="700" step="100" value="${n.item.weight}" />
      </label>
      <div class="compose-custom-inspector__field">
        <span>Align</span>
        <div class="compose-custom-inspector__segmented">
          <button type="button" data-custom-align="left" class="${n.item.align==="left"?"is-active":""}">Left</button>
          <button type="button" data-custom-align="center" class="${n.item.align==="center"?"is-active":""}">Center</button>
          <button type="button" data-custom-align="right" class="${n.item.align==="right"?"is-active":""}">Right</button>
        </div>
      </div>
      <div class="compose-custom-inspector__field">
        <span>Typeface</span>
        <div class="compose-custom-inspector__segmented compose-custom-inspector__segmented--dual">
          <button type="button" data-custom-family="sans" class="${n.item.family==="sans"?"is-active":""}">Sans</button>
          <button type="button" data-custom-family="serif" class="${n.item.family==="serif"?"is-active":""}">Serif</button>
        </div>
      </div>
      <div class="compose-custom-inspector__segmented compose-custom-inspector__segmented--single">
        <button type="button" data-custom-control="delete">Delete</button>
      </div>
    `;const x=T.querySelector('[data-custom-control="text"]');x==null||x.addEventListener("focus",S=>{const g=w.selectedId?Y(w.selectedId):null;if(!(!g||g.type!=="text")&&g.item.isDefaultText&&g.item.text.trim().toLowerCase()==="text"){g.item.text="",g.item.isDefaultText=!1,S.target.value="";const D=m==null?void 0:m.querySelector(`[data-custom-text="${g.item.id}"]`);D&&(D.textContent="")}}),x==null||x.addEventListener("input",S=>{const g=w.selectedId?Y(w.selectedId):null;if(!g||g.type!=="text")return;g.item.text=S.target.value.replace(/\r/g,""),g.item.isDefaultText=!1;const D=m==null?void 0:m.querySelector(`[data-custom-text="${g.item.id}"]`);D&&D!==document.activeElement&&(D.textContent=g.item.text),ee(g.item.id)}),T.querySelectorAll("[data-custom-preset]").forEach(S=>{S.addEventListener("click",()=>{const g=w.selectedId?Y(w.selectedId):null;!g||g.type!=="text"||(pe(g.item,S.dataset.customPreset==="title"?"title":"body"),Q(),ee(g.item.id,{rerender:!0}))})}),(k=T.querySelector('[data-custom-control="fontSize"]'))==null||k.addEventListener("input",S=>{const g=w.selectedId?Y(w.selectedId):null;!g||g.type!=="text"||(g.item.fontSize=Number(S.target.value)/520,Q(),ee(g.item.id,{rerender:!0}))}),(h=T.querySelector('[data-custom-control="lineHeight"]'))==null||h.addEventListener("input",S=>{const g=w.selectedId?Y(w.selectedId):null;!g||g.type!=="text"||(g.item.lineHeight=Number(S.target.value)/100,Q(),ee(g.item.id,{rerender:!0}))}),(f=T.querySelector('[data-custom-control="padding"]'))==null||f.addEventListener("input",S=>{const g=w.selectedId?Y(w.selectedId):null;!g||g.type!=="text"||(g.item.padding=Number(S.target.value)/1e3,Q(),ee(g.item.id,{rerender:!0}))}),(_=T.querySelector('[data-custom-control="weight"]'))==null||_.addEventListener("input",S=>{const g=w.selectedId?Y(w.selectedId):null;!g||g.type!=="text"||(g.item.weight=Number(S.target.value),Q(),ee(g.item.id,{rerender:!0}))}),T.querySelectorAll("[data-custom-align]").forEach(S=>{S.addEventListener("click",()=>{const g=w.selectedId?Y(w.selectedId):null;!g||g.type!=="text"||(g.item.align=S.dataset.customAlign||"left",Q())})}),T.querySelectorAll("[data-custom-family]").forEach(S=>{S.addEventListener("click",()=>{const g=w.selectedId?Y(w.selectedId):null;!g||g.type!=="text"||(g.item.family=S.dataset.customFamily==="serif"?"serif":"sans",g.item.kind=g.item.family==="serif"?"title":"body",g.item.weight=g.item.family==="serif"?Math.max(500,g.item.weight):Math.min(600,g.item.weight),Q(),ee(g.item.id,{rerender:!0}))})})}(b=T.querySelector('[data-custom-control="delete"]'))==null||b.addEventListener("click",()=>{const x=w.selectedId,S=x?Y(x):null;if(S){if(S.collection.splice(S.index,1),S.type==="image"){const g=G[x];g!=null&&g.previewUrl&&URL.revokeObjectURL(g.previewUrl),delete G[x],ie(x)}w.selectedId=null,Q()}})}function Q(){if(!m||!s)return;const n=s.dataset.template==="page8",l=t==="edit"&&!(e!=null&&e.classList.contains("is-preview-mode"));if(m.hidden=!n,!n){m.innerHTML="",ge();return}const d=[...w.imageBoxes.map(h=>h.id),...w.textBoxes.map(h=>h.id)];(!w.selectedId||!d.includes(w.selectedId))&&(w.selectedId=d[0]||null);const v=w.imageBoxes.map(h=>{const f=rt(h),_=C(h.id),b=!!(_.previewUrl||_.file),x=_.position||{x:.5,y:.5,zoom:1},S=`${w.selectedId===h.id?" is-selected":""}${b?"":" is-empty"}`,g=b?`<img class="compose-custom-item__image" src="${_.previewUrl}" alt="" draggable="false" style="object-position:${(x.x||.5)*100}% ${(x.y||.5)*100}%;transform:scale(${Math.max(1,x.zoom||1)});" />`:`<div class="compose-custom-item__placeholder"><span class="compose-custom-item__plus">${F("compose")}</span></div>`;return`
        <div
          class="compose-custom-item compose-custom-item--image${S}"
          data-custom-item="${h.id}"
          data-custom-type="image"
          style="left:${f.left};top:${f.top};width:${f.width};height:${f.height};"
        >
          ${l?`<input class="field__file" id="custom-image-${h.id}" type="file" accept="image/*" />`:""}
          ${l?`<div class="compose-custom-item__surface compose-custom-item__surface--image" data-custom-surface="${h.id}">${g}</div>`:`<div class="compose-custom-item__surface compose-custom-item__surface--image">${g}</div>`}
          ${l?`<button class="compose-custom-item__drag" type="button" data-custom-drag="${h.id}" aria-label="move image box">${F("drag")}</button>`:""}
          ${l?`<button class="compose-custom-item__remove" type="button" data-custom-remove="${h.id}" aria-label="remove image box">&times;</button>`:""}
          ${l?`<button class="compose-custom-item__resize" type="button" data-custom-resize="${h.id}" aria-label="resize image box"></button>`:""}
        </div>
      `}).join(""),k=w.textBoxes.map(h=>{const f=rt(h);return`
        <div
          class="compose-custom-item compose-custom-item--text${w.selectedId===h.id?" is-selected":""}"
          data-custom-item="${h.id}"
          data-custom-type="text"
          style="left:${f.left};top:${f.top};width:${f.width};height:${f.height};"
        >
          <div
            class="compose-custom-item__text"
            data-custom-text="${h.id}"
            contenteditable="${l?"true":"false"}"
            spellcheck="false"
            style="text-align:${h.align};font-size:${Math.max(11,h.fontSize*520)}px;line-height:${h.lineHeight};padding:${Math.max(4,h.padding*520)}px;font-family:${h.family==="serif"?"'Cormorant Garamond', 'Times New Roman', serif":"'Noto Sans JP', sans-serif"};font-weight:${h.weight};"
          >${H(h.text)}</div>
          ${l?`<button class="compose-custom-item__drag" type="button" data-custom-drag="${h.id}" aria-label="move text box">${F("drag")}</button>`:""}
          ${l?`<button class="compose-custom-item__remove" type="button" data-custom-remove="${h.id}" aria-label="remove text box">&times;</button>`:""}
          ${l?`<button class="compose-custom-item__resize" type="button" data-custom-resize="${h.id}" aria-label="resize text box"></button>`:""}
        </div>
      `}).join("");m.innerHTML=`${v}${k}`,ge(),m.onpointerdown=h=>{h.target===m&&(w.selectedId=null,we(),ge())},m.querySelectorAll("[data-custom-item]").forEach(h=>{let f=null;h.addEventListener("pointerdown",b=>{var ve,Te;const x=h.dataset.customItem||"",S=Y(x);if(!S||!u||b.target.closest("[data-custom-remove], [data-custom-resize]"))return;b.preventDefault();const g=b.target.closest("[data-custom-drag]"),D=b.target.closest("[data-custom-text]"),J=b.target.closest("[data-custom-surface]"),U=S.type==="image"?C(x):null;Xe(x);const K=u.getBoundingClientRect(),ce=!!(U!=null&&U.previewUrl||U!=null&&U.file),me=S.type==="image"&&w.imageMode==="crop"&&ce&&J&&!g;f={pointerId:b.pointerId,itemId:x,mode:me?"crop-image":"move",originX:me?U.position.x||.5:S.item.x,originY:me?U.position.y||.5:S.item.y,startX:b.clientX,startY:b.clientY,frameWidth:K.width,frameHeight:K.height,type:S.type,zoom:((ve=U==null?void 0:U.position)==null?void 0:ve.zoom)||1,targetSurface:S.type==="image"&&!ce?J:null,targetText:g?null:D,cropSurface:me?J:null,dragged:!1},(Te=h.setPointerCapture)==null||Te.call(h,b.pointerId)}),h.addEventListener("pointermove",b=>{var J,U;if(!f||f.pointerId!==b.pointerId)return;const x=b.clientX-f.startX,S=b.clientY-f.startY;if(!f.dragged&&Math.hypot(x,S)<6)return;f.dragged=!0,b.preventDefault();const g=Y(f.itemId);if(!g)return;const D={x:g.item.x,y:g.item.y,width:g.item.width,height:g.item.height};if(f.mode==="crop-image"){const K=(J=f.cropSurface)==null?void 0:J.getBoundingClientRect(),ce=C(f.itemId),me=ce.imageSize;if(!K||!me)return;const ve=me.width/me.height,Te=K.width/K.height,Ae=(ve>Te?K.height*ve:K.width)*f.zoom,ni=(ve>Te?K.height:K.width/ve)*f.zoom,wt=Math.max(0,Ae-K.width),_t=Math.max(0,ni-K.height);ce.position.x=wt?Math.min(1,Math.max(0,f.originX-x/wt)):.5,ce.position.y=_t?Math.min(1,Math.max(0,f.originY-S/_t)):.5;const St=(U=f.cropSurface)==null?void 0:U.querySelector(".compose-custom-item__image");St&&(St.style.objectPosition=`${ce.position.x*100}% ${ce.position.y*100}%`)}else{g.item.x=f.originX+x/f.frameWidth,g.item.y=f.originY+S/f.frameHeight,Object.assign(g.item,le(g.item,ue(g.type)));const K=g.type==="image"?{ignoreText:!0}:{};Object.assign(g.item,z(g.item,g.item.id,ue(g.type),K)),q(g.item,g.item.id,K)||Object.assign(g.item,D),g.type==="image"?ie(g.item.id):Object.assign(g.item,ae(g.item,be(g.item.id))),ge(),Qe()}});const _=b=>{var J,U;if(!f||f.pointerId!==b.pointerId)return;const x=f.itemId,S=f.dragged,g=f.targetSurface,D=f.targetText;if(f=null,(J=h.releasePointerCapture)==null||J.call(h,b.pointerId),!S){if(g){(U=document.getElementById(`custom-image-${x}`))==null||U.click();return}D&&(D.focus(),Ee(D))}};h.addEventListener("pointerup",_),h.addEventListener("pointercancel",_)}),m.querySelectorAll("[data-custom-remove]").forEach(h=>{h.addEventListener("click",f=>{f.preventDefault(),f.stopPropagation();const _=h.dataset.customRemove,b=_?Y(_):null;if(b){if(b.collection.splice(b.index,1),b.type==="image"){const x=G[_];x!=null&&x.previewUrl&&URL.revokeObjectURL(x.previewUrl),delete G[_],ie(_)}w.selectedId=null,Q()}})}),m.querySelectorAll("[data-custom-text]").forEach(h=>{h.addEventListener("beforeinput",f=>{f.inputType==="insertParagraph"&&($e(h,`
`),f.preventDefault())}),h.addEventListener("focus",()=>{const f=h.dataset.customText,_=f?Y(f):null;(_==null?void 0:_.type)==="text"&&_.item.isDefaultText&&_.item.text.trim().toLowerCase()==="text"&&(_.item.text="",_.item.isDefaultText=!1,h.textContent=""),Xe(h.dataset.customText||"")}),h.addEventListener("input",()=>{const f=h.dataset.customText,_=f?Y(f):null;if(!_)return;_.item.text=h.innerText.replace(/\r/g,""),_.item.isDefaultText=!1;const b=T==null?void 0:T.querySelector('[data-custom-control="text"]');b&&b!==document.activeElement&&(b.value=_.item.text),ee(_.item.id)})}),m.querySelectorAll('input[id^="custom-image-"]').forEach(h=>{h.addEventListener("change",async f=>{var S;const _=h.id.replace("custom-image-",""),b=C(_),x=((S=f.target.files)==null?void 0:S[0])||null;b.previewUrl&&(URL.revokeObjectURL(b.previewUrl),b.previewUrl=""),b.file=x,b.position={x:.5,y:.5,zoom:1},b.imageSize=x?await I(x):null,x&&(b.previewUrl=ht(x)),ie(_),Q()})}),m.querySelectorAll("[data-custom-resize]").forEach(h=>{let f=null;h.addEventListener("pointerdown",b=>{var D;const x=h.dataset.customResize||"",S=Y(x);if(!S||!u)return;b.preventDefault(),b.stopPropagation(),Xe(x);const g=u.getBoundingClientRect();f={pointerId:b.pointerId,itemId:x,originX:S.item.x,originY:S.item.y,originWidth:S.item.width,originHeight:S.item.height,startX:b.clientX,startY:b.clientY,frameWidth:g.width,frameHeight:g.height,type:S.type},(D=h.setPointerCapture)==null||D.call(h,b.pointerId)}),h.addEventListener("pointermove",b=>{if(!f||f.pointerId!==b.pointerId)return;b.preventDefault();const x=Y(f.itemId);if(!x)return;const S=ue(f.type),g={x:x.item.x,y:x.item.y,width:x.item.width,height:x.item.height};x.item.width=f.originWidth+(b.clientX-f.startX)/f.frameWidth,x.item.height=f.originHeight+(b.clientY-f.startY)/f.frameHeight,Object.assign(x.item,le(x.item,S));const D=x.type==="image"?{ignoreText:!0}:{};Object.assign(x.item,z(x.item,x.item.id,S,D)),q(x.item,x.item.id,D)||Object.assign(x.item,g),x.type==="image"&&ie(x.item.id),ge(),Qe()});const _=b=>{var x;!f||f.pointerId!==b.pointerId||(f=null,(x=h.releasePointerCapture)==null||x.call(h,b.pointerId))};h.addEventListener("pointerup",_),h.addEventListener("pointercancel",_)}),window.requestAnimationFrame(()=>{w.textBoxes.forEach(h=>{ee(h.id)})})}function Ce(){if(!s||!u)return;const n=s.dataset.template==="page8";if(Object.values(re).forEach(l=>{l&&(l.style.left="",l.style.top="",l.style.width="",l.style.height="")}),Object.entries(de).forEach(([l,d])=>{d&&(d.style.left="",d.style.top="",d.style.width="",d.style.height="",d.style.fontSize="",d.style.lineHeight="",d.style.textAlign="",l==="editor"&&(d.style.right=""),l==="body"&&(d.style.bottom=""),l==="date"&&(d.style.bottom=""))}),B&&(B.hidden=!n||t!=="edit"),!n){m&&(m.hidden=!0,m.innerHTML="");return}w.imageBoxes=pt({imageBoxes:w.imageBoxes}),w.textBoxes=ut({textBoxes:w.textBoxes},i),Q()}if(o.querySelectorAll('input[name="backgroundColor"]').forEach(n=>{n.addEventListener("change",()=>{qe(),Ze(n.value)})}),qe(),window.setTimeout(()=>{var n;Ze((n=o.querySelector('input[name="backgroundColor"]:checked'))==null?void 0:n.value)},0),o.querySelectorAll('input[name="templateId"]').forEach(n=>{n.addEventListener("change",()=>{Je(n.value),Ve(n.value)})}),Je(c.composeTemplateId||((xt=o.querySelector('input[name="templateId"]:checked'))==null?void 0:xt.value)),window.setTimeout(()=>{var n;Ve(c.composeTemplateId||((n=o.querySelector('input[name="templateId"]:checked'))==null?void 0:n.value))},0),document.querySelectorAll("[data-template-carousel-nav]").forEach(n=>{n.addEventListener("click",()=>{const l=document.querySelector("[data-template-carousel]");if(!l)return;const d=n.dataset.templateCarouselNav==="next"?1:-1;l.scrollBy({left:l.clientWidth*.72*d,behavior:"smooth"})})}),document.querySelectorAll("[data-color-carousel-nav]").forEach(n=>{n.addEventListener("click",()=>{const l=document.querySelector("[data-color-carousel]");if(!l)return;const d=n.dataset.colorCarouselNav==="next"?1:-1;l.scrollBy({left:l.clientWidth*.72*d,behavior:"smooth"})})}),document.querySelectorAll("[data-compose-stage-nav]").forEach(n=>{n.addEventListener("click",()=>{const l=n.dataset.composeStageNav;l&&X(l)})}),t!=="select"&&a){if($&&E&&$.addEventListener("click",()=>{const n=!E.hidden;E.hidden=n,$.setAttribute("aria-expanded",String(!n))}),L&&L.addEventListener("click",()=>{const n=!(e!=null&&e.classList.contains("is-preview-mode"));We(!!n)}),We(!1),j){let n=null;si(async()=>{const{mountComposePretextEditor:l}=await import("./pretextComposeBridge-B2rxPE3X.js");return{mountComposePretextEditor:l}},__vite__mapDeps([0,1,2,3,4,5]),import.meta.url).then(({mountComposePretextEditor:l})=>{j.isConnected&&(n=l(j,{customLayout:(r==null?void 0:r.customLayout)||{},textValues:i}),Be=n)}).catch(l=>{console.error("Failed to mount pretext compose editor",l),j.innerHTML='<p class="compose-pretext-host__error">Failed to load the editor.</p>'}),a.addEventListener("submit",async l=>{var x;if(l.preventDefault(),!n)return;const d=new FormData(a),v=d.getAll("fixedTags").map(S=>String(S)),k=String(d.get("freeTags")||"").split(",").map(S=>S.trim()).filter(Boolean),h=n.getSerializedLayout(),f={templateId:"page8",backgroundColor:String(d.get("backgroundColor")||c.composeBackgroundColor||"#f8f4ee"),headline:"",subhead:"",intro:"",body:"",date:"",editor:"",customLayout:h},_=await Nt(f,y,{}),b=String(((x=He().profile)==null?void 0:x.name)||"you").trim()||"you";c.composeEditingPostId?Tt(c.composeEditingPostId,{caption:et(f),imageData:_,fixedTags:v,freeTags:k,composeData:{...f,fixedTags:v,freeTags:k}}):$t({authorName:b,caption:et(f),imageData:_,fixedTags:v,freeTags:k,composeData:{...f,fixedTags:v,freeTags:k}}),c.screen="timeline",c.timelineTab="recommended",c.composeStage="edit",ne()});return}o.querySelectorAll("[data-custom-add]").forEach(n=>{n.addEventListener("click",l=>{l.preventDefault();const d=n.dataset.customAdd;if((s==null?void 0:s.dataset.template)!=="page8")return;if(d==="image"){const k={id:O("image"),x:.14,y:.18,width:.28,height:.22};w.imageBoxes=[...w.imageBoxes,le(k,dt)],w.selectedId=k.id,C(k.id),ie(k.id),Q();return}const v=ae({id:O("text"),kind:"body",text:"text",isDefaultText:!0,x:.18,y:.2,width:.28,height:.12,fontSize:.026,lineHeight:1.45,padding:.012,align:"left",family:"sans",weight:500},[...w.imageBoxes.map(k=>M(k)),...w.textBoxes.map(k=>M(k))]);w.textBoxes=[...w.textBoxes,le(v,ke)],w.selectedId=v.id,Q()})}),[{inputId:"imageInputPrimary",stateKey:"primary"},{inputId:"imageInputSecondary",stateKey:"secondary"},{inputId:"imageInputAccent",stateKey:"accent"}].forEach(({inputId:n,stateKey:l})=>{const d=document.querySelector(`[data-slot="${n}"]`),v=document.getElementById(n);if(!v)return;v.addEventListener("change",async h=>{var _;const f=((_=h.target.files)==null?void 0:_[0])||null;y[l].file=f,y[l].position={x:.5,y:.5},y[l].imageSize=f?await I(f):null,p[n]&&(URL.revokeObjectURL(p[n]),p[n]=""),f&&(p[n]=ht(f)),ze(n),P(n)});const k=document.querySelector(`[data-slot-remove="${n}"]`);if(k&&k.addEventListener("click",h=>{h.preventDefault(),h.stopPropagation(),p[n]&&(URL.revokeObjectURL(p[n]),p[n]=""),y[l]={file:null,position:{x:.5,y:.5},imageSize:null},v.value="",ze(n)}),d){let h=null;d.addEventListener("pointerdown",_=>{var b,x;if(!(e!=null&&e.classList.contains("is-preview-mode"))){if((s==null?void 0:s.dataset.template)==="page8"){const S=w.imageBoxes[l];if(!S||!u)return;_.preventDefault(),_.stopPropagation();const g=u.getBoundingClientRect();h={pointerId:_.pointerId,mode:"move-box",startX:_.clientX,startY:_.clientY,originX:S.x,originY:S.y,frameWidth:g.width,frameHeight:g.height},d.classList.add("is-dragging"),(b=d.setPointerCapture)==null||b.call(d,_.pointerId);return}y[l].file&&(_.preventDefault(),_.stopPropagation(),h={pointerId:_.pointerId,mode:"pan-image",startX:_.clientX,startY:_.clientY,originX:y[l].position.x,originY:y[l].position.y},d.classList.add("is-dragging"),(x=d.setPointerCapture)==null||x.call(d,_.pointerId))}}),d.addEventListener("pointermove",_=>{if(!h||h.pointerId!==_.pointerId)return;if(_.preventDefault(),h.mode==="move-box"){const ve=h.originX+(_.clientX-h.startX)/h.frameWidth,Te=h.originY+(_.clientY-h.startY)/h.frameHeight,Ae=w.imageBoxes[l];Ae.x=Math.min(N.x+N.width-Ae.width,Math.max(N.x,ve)),Ae.y=Math.min(N.y+N.height-Ae.height,Math.max(N.y,Te)),Ce();return}const b=d.getBoundingClientRect(),x=y[l].imageSize;if(!x)return;const S=x.width/x.height,g=b.width/b.height,D=S>g?b.height*S:b.width,J=S>g?b.height:b.width/S,U=Math.max(0,D-b.width),K=Math.max(0,J-b.height),ce=_.clientX-h.startX,me=_.clientY-h.startY;y[l].position.x=U?Math.min(1,Math.max(0,h.originX-ce/U)):.5,y[l].position.y=K?Math.min(1,Math.max(0,h.originY-me/K)):.5,P(n)});const f=_=>{var b;!h||h.pointerId!==_.pointerId||(h=null,d.classList.remove("is-dragging"),(b=d.releasePointerCapture)==null||b.call(d,_.pointerId))};d.addEventListener("pointerup",f),d.addEventListener("pointercancel",f)}ze(n),P(n)}),Ce(),R.forEach(n=>{n.dataset.previousValue=xe(n),n.addEventListener("beforeinput",l=>{var f;if(n.dataset.singleLine==="true"&&(l.inputType==="insertParagraph"||l.inputType==="insertLineBreak")){l.preventDefault();return}const d=Number(n.dataset.maxChars||0);if(!d||!l.inputType.startsWith("insert"))return;const v=xe(n).length,k=Ge(n),h=((f=l.data)==null?void 0:f.length)??1;v-k+h>d&&l.preventDefault()}),n.addEventListener("paste",l=>{var x,S;l.preventDefault();const d=((S=(x=l.clipboardData)==null?void 0:x.getData("text/plain"))==null?void 0:S.replace(/\r/g,""))??"",v=n.dataset.singleLine==="true"?d.replace(/\n+/g," "):d,k=Number(n.dataset.maxChars||0),h=xe(n).length,f=Ge(n),_=k?Math.max(0,k-(h-f)):v.length,b=v.slice(0,_);b&&($e(n,b),n.dataset.previousValue=xe(n))}),n.addEventListener("input",()=>{const l=Number(n.dataset.maxChars||0),d=xe(n);if(l&&d.length>l){n.innerText=n.dataset.previousValue||"",Ee(n);return}n.dataset.previousValue=d}),n.addEventListener("blur",()=>{Ie(n),Le(n)})}),a.addEventListener("submit",async n=>{var S;n.preventDefault();const l=new FormData(a),d=l.getAll("fixedTags").map(g=>String(g)),v=String(l.get("freeTags")||"").split(",").map(g=>g.trim()).filter(Boolean),h=(s==null?void 0:s.dataset.template)==="page8"?jt({...w.options,imageBoxes:w.imageBoxes,textBoxes:w.textBoxes.map(g=>({...g,text:String(g.text||"").replace(/\r/g,"")}))},i):null,f={templateId:String(l.get("templateId")||c.composeTemplateId||Pe),backgroundColor:String(l.get("backgroundColor")||c.composeBackgroundColor||"#f8f4ee"),headline:ye("headline"),subhead:ye("subhead"),intro:ye("intro"),body:ye("body"),date:ye("date"),editor:ye("editor"),customLayout:h},_=h?Object.fromEntries(h.imageBoxes.map(g=>[g.id,C(g.id)])):{},b=await Nt(f,y,{page8Files:_}),x=String(((S=He().profile)==null?void 0:S.name)||"you").trim()||"you";c.composeEditingPostId?Tt(c.composeEditingPostId,{caption:et(f),imageData:b,fixedTags:d,freeTags:v,composeData:{...f,fixedTags:d,freeTags:v}}):$t({authorName:x,caption:et(f),imageData:b,fixedTags:d,freeTags:v,composeData:{...f,fixedTags:d,freeTags:v}}),c.screen="timeline",c.timelineTab="recommended",c.composeStage="edit",ne()})}}function Ma(){const e=document.getElementById("issueForm");e&&e.addEventListener("submit",t=>{t.preventDefault();const a=new FormData(e),o=a.getAll("issuePostIds").map(s=>String(s));o.length&&(_i({title:String(a.get("title")).trim(),subtitle:String(a.get("subtitle")||"").trim(),tone:String(a.get("tone")||"soft"),postIds:o}),oe())})}function Pa(){ot(document.getElementById("screenArea"));function e(r){return new Promise(i=>{const p=new Image,y=URL.createObjectURL(r);p.onload=()=>{i({width:p.naturalWidth,height:p.naturalHeight}),URL.revokeObjectURL(y)},p.onerror=()=>{i(null),URL.revokeObjectURL(y)},p.src=y})}document.querySelectorAll("[data-profile-avatar-upload]").forEach(r=>{r.addEventListener("click",i=>{i.stopPropagation(),c.profileExpanded=!0,c.profileSection="edit",oe(),window.setTimeout(()=>{var p;(p=document.getElementById("profileAvatarInput"))==null||p.click()},0)})}),document.querySelectorAll("[data-profile-section]").forEach(r=>{r.addEventListener("click",()=>{c.profileSection=r.dataset.profileSection,c.profileSection==="library"&&(c.profileLibraryTab=c.profileLibraryTab||"liked"),oe()})}),document.querySelectorAll("[data-profile-library-tab]").forEach(r=>{r.addEventListener("click",()=>{c.profileLibraryTab=r.dataset.profileLibraryTab||"liked",oe()})});const t=document.getElementById("profileAvatarInput"),a=document.getElementById("avatarCropper"),o=document.getElementById("avatarCropSurface"),s=document.getElementById("avatarCropImage");function u(){if(!(!a||!s)){if(!W.file||!W.previewUrl){a.hidden=!0,s.removeAttribute("src");return}a.hidden=!1,s.src=W.previewUrl,s.style.objectPosition=`${W.crop.x*100}% ${W.crop.y*100}%`,s.style.transform=`scale(${W.crop.zoom})`}}if(t&&t.addEventListener("change",async r=>{var p;const i=((p=r.target.files)==null?void 0:p[0])||null;W.previewUrl&&(URL.revokeObjectURL(W.previewUrl),W.previewUrl=""),W.file=i,W.imageSize=i?await e(i):null,W.crop={x:.5,y:.5,zoom:1},i&&(W.previewUrl=ht(i)),c.profileAvatarCropOpen=!!i,oe()}),o){let r=null;o.addEventListener("pointerdown",p=>{var y;W.file&&(r={pointerId:p.pointerId,startX:p.clientX,startY:p.clientY,originX:W.crop.x,originY:W.crop.y},o.classList.add("is-dragging"),(y=o.setPointerCapture)==null||y.call(o,p.pointerId))}),o.addEventListener("pointermove",p=>{if(!r||r.pointerId!==p.pointerId||!W.imageSize)return;const y=o.getBoundingClientRect(),{width:$,height:E}=W.imageSize,L=$/E,B=y.width/y.height,T=L>B?y.height*L:y.width,j=L>B?y.height:y.width/L,R=T*W.crop.zoom,w=j*W.crop.zoom,G=Math.max(0,R-y.width),de=Math.max(0,w-y.height),re=p.clientX-r.startX,X=p.clientY-r.startY;W.crop.x=G?Math.min(1,Math.max(0,r.originX-re/G)):.5,W.crop.y=de?Math.min(1,Math.max(0,r.originY-X/de)):.5,u()});const i=p=>{var y;!r||r.pointerId!==p.pointerId||(r=null,o.classList.remove("is-dragging"),(y=o.releasePointerCapture)==null||y.call(o,p.pointerId))};o.addEventListener("pointerup",i),o.addEventListener("pointercancel",i)}u();const m=document.getElementById("profileForm");m&&m.addEventListener("submit",async r=>{r.preventDefault();const i=new FormData(m),p=W.file?await la(W.file,W.crop,{size:320}):He().profile.avatarData;xi({name:String(i.get("name")).trim(),bio:String(i.get("bio")).trim(),avatarData:p}),je(),c.profileSection=null,c.profileExpanded=!0,oe()}),document.querySelectorAll("[data-follow-author]").forEach(r=>{r.addEventListener("click",()=>{wi(r.dataset.followAuthor),oe()})})}function Ia(){ot(document.getElementById("screenArea")),document.querySelectorAll("[data-close-post-detail]").forEach(e=>{e.addEventListener("click",()=>{ai()})})}function La(){document.querySelectorAll("[data-close-preview]").forEach(e=>{e.addEventListener("click",()=>{c.previewPostId=null,Ue()})}),document.querySelectorAll("[data-close-comments]").forEach(e=>{e.addEventListener("click",()=>{c.commentPostId=null,Ue()})}),document.querySelectorAll("[data-delete-post]").forEach(e=>{e.addEventListener("click",()=>{const t=e.dataset.deletePost;if(!t)return;const a=Re(t);if(ei(a)&&window.confirm("この投稿を削除しますか？")){if(gi(t),c.previewPostId===t&&(c.previewPostId=null),c.commentPostId===t&&(c.commentPostId=null),c.screen==="post"){ai();return}oe()}})}),document.querySelectorAll("[data-comment-form]").forEach(e=>{e.addEventListener("submit",t=>{t.preventDefault();const a=e.querySelector('input[name="comment"]');bi(e.dataset.commentForm,a.value),c.commentPostId=e.dataset.commentForm,Ue(),oe()})})}function Ea(){switch(_a(),c.screen){case"home":va();break;case"timeline":xa();break;case"search":wa();break;case"compose":ka();break;case"magazine":Ma();break;case"profile":Pa();break;case"post":Ia();break}}function oi(e=document.getElementById("app")){if(!e)throw new Error("bootLegacyApp requires an app root element.");return Fe=e,ne(),{render:ne}}if(typeof window<"u"&&!window.__MEMORIES_REACT_HOST__){const e=document.getElementById("app");e&&oi(e)}const Ba=Object.freeze(Object.defineProperty({__proto__:null,bootLegacyApp:oi},Symbol.toStringTag,{value:"Module"}));export{N as P,ut as a,Ba as b,Aa as f,pt as n};
