const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["./pretextComposeBridge-B1CUVJoK.js","./main-BSOkfFkd.js","./client-CTQ0Ju4c.js","./main-D4jdZSz9.css","./pretextComposeBridge-BXwsMVV_.css"])))=>i.map(i=>d[i]);
import{_ as ai}from"./main-BSOkfFkd.js";function oi(){return""}function Dt(e){const t=new Date(e),a=t.getFullYear(),o=String(t.getMonth()+1).padStart(2,"0"),s=String(t.getDate()).padStart(2,"0");return`${a}.${o}.${s}`}function Nt(e){const t=new Date(e),a=t.getFullYear(),o=String(t.getMonth()+1).padStart(2,"0"),s=String(t.getDate()).padStart(2,"0"),h=String(t.getHours()).padStart(2,"0"),m=String(t.getMinutes()).padStart(2,"0");return`${a}.${o}.${s} ${h}:${m}`}function ni(e){const t=new Date(e).getTime();return(Date.now()-t)/(1e3*60*60)<=72}function si(e){const t=Date.now()-new Date(e).getTime(),a=Math.floor(t/6e4);if(a<1)return"たった今";if(a<60)return`${a}分前`;const o=Math.floor(a/60);return o<24?`${o}時間前`:`${Math.floor(o/24)}日前`}function j(e){return{timeline:'<svg viewBox="0 0 24 24" aria-hidden="true" fill="none" stroke="currentColor" stroke-width="1.15" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="2.3" fill="currentColor" stroke="none"/><ellipse cx="12" cy="12" rx="8.8" ry="4.1" transform="rotate(18 12 12)"/><ellipse cx="12" cy="12" rx="8.1" ry="3.3" transform="rotate(78 12 12)"/><ellipse cx="12" cy="12" rx="7.6" ry="5.2" transform="rotate(-40 12 12)"/><circle cx="18.9" cy="6.2" r="1.15" fill="currentColor" stroke="none"/><circle cx="17.8" cy="17.3" r="1" fill="currentColor" stroke="none"/><circle cx="6.1" cy="8" r="0.95" fill="currentColor" stroke="none"/><circle cx="7.1" cy="18.2" r="0.9" fill="currentColor" stroke="none"/><circle cx="11.2" cy="6.4" r="0.9" fill="currentColor" stroke="none"/></svg>',search:'<svg viewBox="0 0 24 24" aria-hidden="true" fill="none" stroke="currentColor" stroke-width="1.15" stroke-linecap="round" stroke-linejoin="round"><ellipse cx="12" cy="6.5" rx="6.9" ry="2.1"/><path d="M5.7 6.8c1 3.1 3 5.6 6.3 11.5"/><path d="M18.3 6.8c-1 3.1-3 5.6-6.3 11.5"/><circle cx="12" cy="19.8" r="1.55" fill="currentColor" stroke="none"/><circle cx="12" cy="9.2" r="0.8" fill="currentColor" stroke="none"/><circle cx="9.2" cy="8.6" r="0.65" fill="currentColor" stroke="none"/><circle cx="14.9" cy="8.3" r="0.65" fill="currentColor" stroke="none"/><circle cx="10.2" cy="11.2" r="0.55" fill="currentColor" stroke="none"/><circle cx="13.8" cy="11" r="0.55" fill="currentColor" stroke="none"/><circle cx="12" cy="12.9" r="0.55" fill="currentColor" stroke="none"/><circle cx="11" cy="15.1" r="0.45" fill="currentColor" stroke="none"/><circle cx="13" cy="15.6" r="0.45" fill="currentColor" stroke="none"/><circle cx="8.2" cy="4.2" r="0.45" fill="currentColor" stroke="none"/><circle cx="15.8" cy="3.9" r="0.45" fill="currentColor" stroke="none"/></svg>',compose:'<svg viewBox="0 0 24 24" aria-hidden="true" fill="none" stroke="currentColor" stroke-width="1.45" stroke-linecap="round"><circle cx="12" cy="12" r="2.45" fill="currentColor" stroke="none"/><path d="M12 2.9v5.1M12 16v5.1M2.9 12h5.1M16 12h5.1M5.5 5.5l3.6 3.6M14.9 14.9l3.6 3.6M18.5 5.5l-3.6 3.6M9.1 14.9l-3.6 3.6"/></svg>',issue:'<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M6 4h12a2 2 0 0 1 2 2v12H8a2 2 0 0 0-2 2z"/><path d="M6 4a2 2 0 0 0-2 2v14h14"/></svg>',profile:'<svg viewBox="0 0 24 24" aria-hidden="true" fill="none" stroke="currentColor" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round"><path d="M3.8 16.8c2.3-2.6 4.9-5.1 7.1-7.6 1.1-1.2 2-2.2 2.7-2.2.7 0 1.1.6 1.1 1.4 0 1.1-.5 2.1-.6 3.2 2.1-2.5 4.3-4.3 6.4-4.3-.6 1.4-1.7 2.6-2.6 3.8-.8 1-.9 1.8.3 1.8h2.1"/><path d="M4.1 17.1c3.8-.2 8.5-.4 16-.7"/><circle cx="20.6" cy="8" r="0.85" fill="currentColor" stroke="none"/></svg>',heart:'<svg viewBox="0 0 24 24" aria-hidden="true" fill="none" stroke="currentColor" stroke-width="1.25" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="2.5" fill="currentColor" stroke="none"/><circle cx="12" cy="12" r="4.7"/><circle cx="12" cy="12" r="7"/><circle cx="12" cy="12" r="9.2" opacity="0.68"/></svg>',comment:'<svg viewBox="0 0 24 24" aria-hidden="true" fill="none" stroke="currentColor" stroke-width="1.35" stroke-linecap="round" stroke-linejoin="round"><path d="M4.8 12.2c0-3.4 2.8-6.1 6.2-6.1 3.3 0 5.8 2.4 5.8 5.4 0 3.1-2.6 5.4-6.2 5.4-.8 0-1.6-.1-2.3-.4l-3.3 1 .9-2.7c-.7-.8-1.1-1.7-1.1-2.6Z"/><path d="m14.2 8.3 5 1.1-2 1.9 1.9 5-4.9-1.9-1.9 2Z" opacity="0.8"/></svg>',save:'<svg viewBox="0 0 24 24" aria-hidden="true" fill="none" stroke="currentColor" stroke-width="1.25" stroke-linecap="round" stroke-linejoin="round"><path d="M12 3.6 18.2 7v10L12 20.4 5.8 17V7Z"/><path d="M12 3.6v6.3M18.2 7 12 9.9 5.8 7"/><path d="M12 9.9v10.5"/><circle cx="12" cy="12" r="2.1" fill="currentColor" stroke="none"/></svg>',tag:'<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M20 11.5 11.5 20 4 12.5V5h7.5Z"/><circle cx="15.5" cy="8.5" r="1"/></svg>',spark:'<svg viewBox="0 0 24 24" aria-hidden="true"><path d="m12 3 1.9 5.1L19 10l-5.1 1.9L12 17l-1.9-5.1L5 10l5.1-1.9Z"/></svg>',arrowLeft:'<svg viewBox="0 0 24 24" aria-hidden="true" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M15.5 5.5 9 12l6.5 6.5"/><path d="M9.5 12h9"/></svg>',recommended:'<svg viewBox="0 0 24 24" aria-hidden="true" fill="none" stroke="currentColor" stroke-width="1.35" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="5.3" r="2.5" fill="currentColor" stroke="none"/><circle cx="5.8" cy="17.6" r="2.6" fill="currentColor" stroke="none"/><circle cx="18.2" cy="17.6" r="2.6" fill="currentColor" stroke="none"/><path d="M7.9 15.8 10.6 8.1"/><path d="M16.1 15.8 13.4 8.1"/><path d="M8.8 17.6h6.4"/></svg>',follow:'<svg viewBox="0 0 24 24" aria-hidden="true" fill="none" stroke="currentColor" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round"><circle cx="8.3" cy="17.5" r="3.1" fill="currentColor" stroke="none"/><circle cx="16.4" cy="8.2" r="2.5" fill="currentColor" stroke="none"/><path d="M5.1 18.7c1.3-4.2 5-7.2 9.5-7.2 1.5 0 3 .3 4.2.9"/><path d="M5 18.9c1.8 0 3.3-.6 5.1-1.7 3-1.9 5.1-4.7 7.1-8"/><path d="m17.6 6.2 1.9 1.1-1 2.1" /></svg>',close:'<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M6 6 18 18M18 6 6 18"/></svg>',image:'<svg viewBox="0 0 24 24" aria-hidden="true"><rect x="4" y="5" width="16" height="14" rx="2"/><path d="m8 15 2.5-2.5L13 15l2.5-3 2.5 3"/><circle cx="9" cy="9" r="1.2"/></svg>',trash:'<svg viewBox="0 0 24 24" aria-hidden="true" fill="none" stroke="currentColor" stroke-width="1.35" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="7.6" opacity="0.45"/><path d="M7.1 7.1 16.9 16.9"/><path d="M16.9 7.1 7.1 16.9"/><circle cx="12" cy="12" r="1.15" fill="currentColor" stroke="none"/></svg>',edit:'<svg viewBox="0 0 24 24" aria-hidden="true" fill="none" stroke="currentColor" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round"><path d="M5.4 8.2h8.2v10.2H5.4z"/><path d="M9 5.1h9.1l-4.9 5.1H9z"/><path d="M6.3 16.8 16.7 6.4"/><circle cx="12" cy="11.5" r="0.95" fill="currentColor" stroke="none"/></svg>',drag:'<svg viewBox="0 0 24 24" aria-hidden="true" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M12 4v16M4 12h16"/><path d="m12 4-2.8 2.8M12 4l2.8 2.8M20 12l-2.8-2.8M20 12l-2.8 2.8M12 20l-2.8-2.8M12 20l2.8-2.8M4 12l2.8-2.8M4 12l2.8 2.8"/></svg>'}[e]||""}function Re(e,t,a="avatar"){return e?`<img class="avatar__image" src="${e}" alt="${a}" />`:`<span class="avatar__label">${t}</span>`}function ri(e){var t;return e?`
    <div class="overlay" data-close-comments>
      <section class="modal modal--comments" role="dialog" aria-modal="true" aria-label="Comments" onclick="event.stopPropagation()">
        <div class="modal__header">
          <h3 class="modal__title">Comments</h3>
          <button class="modal__close" data-close-comments aria-label="Close">${j("close")}</button>
        </div>
        <div class="comments-list">
          ${(t=e.comments)!=null&&t.length?e.comments.map(a=>`
            <article class="comment-item">
              <p class="comment-item__text">${a.text}</p>
              <span class="comment-item__date">${Nt(a.createdAt)}</span>
            </article>
          `).join(""):'<p class="empty-copy">No comments yet.</p>'}
        </div>
        <form class="comment-form" data-comment-form="${e.id}">
          <input class="field__input" type="text" name="comment" maxlength="80" placeholder="Write a comment" required />
          <button class="button button--primary" type="submit">Post</button>
        </form>
      </section>
    </div>
  `:""}const Rt="memories-static-site-state-v1";function li(){try{const e=localStorage.getItem(Rt);return e?JSON.parse(e):null}catch{return null}}function ci(e){localStorage.setItem(Rt,JSON.stringify(e))}function ft(e="id"){return`${e}_${Math.random().toString(36).slice(2,9)}_${Date.now().toString(36)}`}const nt={profile:{name:"you",bio:"A small local profile to collect your memories.",avatarData:""},posts:[],issues:[],followingAuthors:[]};function di(e){return{id:e.id,authorName:e.authorName||"you",authorIcon:e.authorIcon||(e.authorName||"U").trim().slice(0,1).toUpperCase(),authorAvatarData:e.authorAvatarData||"",caption:e.caption||"",imageData:e.imageData||"",fixedTags:Array.isArray(e.fixedTags)?e.fixedTags:[],freeTags:Array.isArray(e.freeTags)?e.freeTags:[],likes:Number(e.likes||0),saves:Number(e.saves||0),comments:Array.isArray(e.comments)?e.comments:[],impressions:Number(e.impressions||0),liked:!!e.liked,saved:!!e.saved,createdAt:e.createdAt||new Date().toISOString(),updatedAt:e.updatedAt||null,composeData:e.composeData||null}}function mi(e){var t,a,o;return e?{profile:{name:((t=e.profile)==null?void 0:t.name)||nt.profile.name,bio:((a=e.profile)==null?void 0:a.bio)||nt.profile.bio,avatarData:((o=e.profile)==null?void 0:o.avatarData)||""},posts:Array.isArray(e.posts)?e.posts.map(di):[],issues:Array.isArray(e.issues)?e.issues:[],followingAuthors:Array.isArray(e.followingAuthors)?e.followingAuthors:[]}:structuredClone(nt)}let se=mi(li());function He(){return se}function fe(e){se=e,ci(se)}function $t(e){const t=structuredClone(se);t.posts.unshift({id:ft("post"),authorName:e.authorName,authorIcon:(e.authorName||"U").trim().slice(0,1).toUpperCase(),authorAvatarData:se.profile.avatarData||"",caption:e.caption||"",imageData:e.imageData,fixedTags:e.fixedTags||[],freeTags:e.freeTags||[],likes:0,saves:0,comments:[],impressions:0,liked:!1,saved:!1,createdAt:new Date().toISOString(),updatedAt:null,composeData:e.composeData||null}),fe(t)}function Tt(e,t){const a=structuredClone(se),o=a.posts.find(s=>s.id===e);o&&(o.caption=t.caption??o.caption,o.imageData=t.imageData??o.imageData,o.fixedTags=Array.isArray(t.fixedTags)?t.fixedTags:o.fixedTags,o.freeTags=Array.isArray(t.freeTags)?t.freeTags:o.freeTags,o.composeData=t.composeData??o.composeData,o.updatedAt=new Date().toISOString(),fe(a))}function pi(e){const t=structuredClone(se);t.posts.some(o=>o.id===e)&&(t.posts=t.posts.filter(o=>o.id!==e),t.issues=t.issues.map(o=>({...o,postIds:(o.postIds||[]).filter(s=>s!==e)})).filter(o=>o.postIds.length),fe(t))}function ui(e){const t=structuredClone(se),a=t.posts.find(o=>o.id===e);a&&(a.liked=!a.liked,a.likes+=a.liked?1:-1,fe(t))}function hi(e){const t=structuredClone(se),a=t.posts.find(o=>o.id===e);a&&(a.saved=!a.saved,a.saves+=a.saved?1:-1,fe(t))}function gi(e,t){const a=structuredClone(se),o=a.posts.find(s=>s.id===e);!o||!t.trim()||(o.comments.unshift({id:ft("comment"),text:t.trim(),createdAt:new Date().toISOString()}),fe(a))}function fi(e){const t=structuredClone(se),a=t.posts.find(o=>o.id===e);a&&(a.impressions+=1,fe(t))}function yi(e){const t=structuredClone(se),a=t.profile.name,o=e.avatarData||"";t.profile.name=e.name,t.profile.bio=e.bio,t.profile.avatarData=o,t.posts=t.posts.map(s=>s.authorName===a?{...s,authorName:e.name,authorIcon:(e.name||"U").trim().slice(0,1).toUpperCase(),authorAvatarData:o}:s),t.followingAuthors=t.followingAuthors.map(s=>s===a?e.name:s),fe(t)}function vi(e){const t=structuredClone(se),a=t.followingAuthors.includes(e);t.followingAuthors=a?t.followingAuthors.filter(o=>o!==e):[...t.followingAuthors,e],fe(t)}function bi(e){const t=structuredClone(se);t.issues.unshift({id:ft("issue"),title:e.title,subtitle:e.subtitle,tone:e.tone,postIds:e.postIds,createdAt:new Date().toISOString()}),fe(t)}function xi(){return`
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
  `}function wi(e){return[...e].sort((t,a)=>kt(a)-kt(t))}function kt(e){var h;const t=(e.likes||0)*2+(e.saves||0)*2+(((h=e.comments)==null?void 0:h.length)||0)*1.5+(e.impressions||0)*1.2,a=ni(e.createdAt)?120:0,s=220/Math.max(1,(Date.now()-new Date(e.createdAt).getTime())/(1e3*60*60));return t+a+s}function _i(e,{query:t="",tags:a=[]}={}){const o=t.trim().toLowerCase();return e.filter(s=>{const h=[s.authorName,s.caption||"",...s.fixedTags||[],...s.freeTags||[]].join(" ").toLowerCase(),m=!o||h.includes(o),l=!a.length||a.every(i=>[...s.fixedTags||[],...s.freeTags||[]].includes(i));return m&&l})}function Si(e,t){const a=e.posts||[];return t==="following"?a.filter(o=>e.followingAuthors.includes(o.authorName)):wi(a)}const Ke=[{x:70,y:78,w:210,h:300},{x:382,y:116,w:122,h:148},{x:566,y:82,w:214,h:320},{x:78,y:448,w:214,h:304},{x:360,y:318,w:204,h:434},{x:598,y:470,w:190,h:260},{x:88,y:834,w:156,h:196},{x:344,y:786,w:182,h:264},{x:640,y:872,w:142,h:172}],Mt=860,Pt=1120,$i=980,Ti=1260;function Lt(e){const t=e%2,a=Math.floor(e/2);return{x:120+t*$i,y:80+a*Ti}}function ki(e,t,a){return`
    <article
      class="timeline-particle"
      style="left:${a.x+t.x}px; top:${a.y+t.y}px; width:${t.w}px; height:${t.h}px;"
    >
      <button class="timeline-particle__author" type="button" data-open-author="${e.authorName}" aria-label="Open ${e.authorName} profile">
        ${Re(e.authorAvatarData,e.authorIcon,`${e.authorName} avatar`)}
      </button>
      <button class="timeline-particle__image-button" type="button" data-open-preview="${e.id}" aria-label="Open ${e.authorName} post">
        <img class="timeline-particle__image" src="${e.imageData}" alt="${e.authorName} post" />
      </button>
    </article>
  `}function Mi(e){const t=Math.max(1,Math.ceil(e.length/Ke.length)),a=Array.from({length:t},(s,h)=>{const m=Lt(h),l=e.slice(h*Ke.length,(h+1)*Ke.length);return{placement:m,html:`
        <section
          class="timeline-board"
          style="left:${m.x}px; top:${m.y}px; width:${Mt}px; height:${Pt}px;"
          aria-hidden="true"
        ></section>
        ${l.map((i,p)=>ki(i,Ke[p],m)).join("")}
      `}});if(!e.length)return{width:1280,height:1120,html:`
        <div class="timeline-field__empty">
        <p class="timeline-field__empty-title">No posts yet</p>
        <p class="timeline-field__empty-copy">Create your first memory and it will appear here.</p>
      </div>
      `};const o=Lt(t-1);return{width:o.x+Mt+140,height:o.y+Pt+140,html:a.map(s=>s.html).join("")}}function It(e,t){const a=(t==null?void 0:t.homeTheme)==="dark"?"dark":"light",o=(t==null?void 0:t.homeCoreState)||"default",s=a==="dark"?"White":"Dark";return`
    <section class="page orbit-home orbit-home--${a} orbit-home--${o}">
      <div class="orbit-stage">
        <button class="orbit-node orbit-node--theme" type="button" data-home-theme-toggle aria-label="Switch main page theme">
          <span class="orbit-node__icon" aria-hidden="true">${j("spark")}</span>
          <strong class="orbit-node__title">${s}</strong>
        </button>
        <div class="orbit-stage__noise" aria-hidden="true"></div>
        <div class="orbit-stage__glow orbit-stage__glow--a" aria-hidden="true"></div>
        <div class="orbit-stage__glow orbit-stage__glow--b" aria-hidden="true"></div>
        <div class="orbit-stage__glow orbit-stage__glow--c" aria-hidden="true"></div>

        <button class="orbit-node orbit-node--timeline" type="button" data-home-nav="timeline">
          <span class="orbit-node__icon" aria-hidden="true">${j("timeline")}</span>
          <strong class="orbit-node__title">Timeline</strong>
        </button>

        <button class="orbit-node orbit-node--profile" type="button" data-home-nav="profile">
          <span class="orbit-node__icon" aria-hidden="true">${j("profile")}</span>
          <strong class="orbit-node__title">Profile</strong>
        </button>

        <button class="orbit-node orbit-node--search" type="button" data-home-nav="search">
          <span class="orbit-node__icon" aria-hidden="true">${j("search")}</span>
          <strong class="orbit-node__title">Search</strong>
        </button>

        <button class="orbit-node orbit-node--compose" type="button" data-home-nav="compose">
          <span class="orbit-node__icon" aria-hidden="true">${j("compose")}</span>
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
  `}function Pi(e,t){var s,h;const a=Si(e,t.timelineTab),o=Mi(a);return`
    <section class="page timeline-page">
      <div class="timeline-screen">
        <header class="timeline-screen__chrome">
          <button class="timeline-screen__back" type="button" data-home-nav="home" aria-label="Back to main page">
            <span>${j("arrowLeft")}</span>
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
            style="width:${o.width}px; height:${o.height}px; transform: translate(${((s=t.timelinePan)==null?void 0:s.x)??-360}px, ${((h=t.timelinePan)==null?void 0:h.y)??-220}px);"
          >
            ${o.html}
          </div>
        </div>
      </div>
    </section>
  `}function Li(e){const t=[...e.fixedTags||[],...e.freeTags||[]];return t.length?t.map(a=>`<span class="chip chip--soft">${a}</span>`).join(""):'<div class="post-card__tags-empty">No tags yet</div>'}function Ht(e,t={}){var m;const{mode:a="full"}=t,o=a!=="compact",s=a==="full",h=a!=="minimal";return`
    <article class="post-card post-card--${a}" data-post-id="${e.id}">
      ${o?`
        <div class="post-card__head">
          <button class="avatar avatar-button" type="button" data-open-author="${e.authorName}" aria-label="Open ${e.authorName} profile">
            ${Re(e.authorAvatarData,e.authorIcon,`${e.authorName} avatar`)}
          </button>
          <div class="post-card__author-wrap">
            <p class="post-card__author">${e.authorName}</p>
            <p class="post-card__time">${si(e.createdAt)}</p>
          </div>
        </div>
      `:""}

      <button class="post-card__image-button" data-open-preview="${e.id}" aria-label="Open post image">
        <img class="post-card__image" src="${e.imageData}" alt="${e.authorName} post" />
      </button>

      ${s?`
        <div class="post-card__caption-row">
          <button class="tag-toggle" data-toggle-tags="${e.id}">${j("tag")} tags</button>
          ${e.caption?`<p class="post-card__caption">${e.caption}</p>`:'<p class="post-card__caption post-card__caption--empty">No caption</p>'}
        </div>

        <div class="post-card__tags" data-tags-panel="${e.id}" hidden>
          ${Li(e)}
        </div>
      `:""}

      <div class="post-card__meta">
        ${h?`<span class="post-card__date">${Dt(e.createdAt)}</span>`:"<span></span>"}
        <div class="post-card__actions">
          <button class="icon-button ${e.liked?"is-active":""}" data-like="${e.id}" aria-label="Like post">
            ${j("heart")}
            <span>${e.likes}</span>
          </button>
          <button class="icon-button" data-comment="${e.id}" aria-label="Open comments">
            ${j("comment")}
            <span>${((m=e.comments)==null?void 0:m.length)||0}</span>
          </button>
          <button class="icon-button ${e.saved?"is-active":""}" data-save="${e.id}" aria-label="Save post">
            ${j("save")}
            <span>${e.saves}</span>
          </button>
        </div>
      </div>
    </article>
  `}const Wt={activity:["ご飯","朝ごはん","ランチ","ディナー","カフェ","散歩","買い物","ドライブ","旅行","イベント"],mood:["まったり","おしゃれ","落ち着く","ロマンチック","ワクワク","にぎやか"],scene:["初デート","休日","昼デート","夜デート","記念日","雨の日"],budget:["低予算","ふつう","ちょっと贅沢"],time:["朝","昼","夕方","夜"]},Ii={activity:"デート内容",mood:"雰囲気",scene:"シーン",budget:"予算感",time:"時間帯"},Ei=Object.values(Wt).flat();function Ci(e){return Ei.map(t=>`
    <button class="chip chip--filter ${e.includes(t)?"is-active":""}" data-search-tag="${t}">${t}</button>
  `).join("")}function Ai(e,t){const a=t.searchTags||[],o=_i(e.posts||[],{query:t.searchQuery||"",tags:a}),s=o.length?`
      <div class="feed-grid">
        ${o.map(h=>Ht(h,{mode:"compact"})).join("")}
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
        ${Ci(a)}
      </div>

      ${s}
    </section>
  `}const qt={id:"page1",label:"Page 1",description:"Template 1",async render(e,t,a,o){const{addWrappedText:s,drawFileCover:h,drawSlotPlaceholder:m,defaults:l}=o,i={x:84,y:84,width:1072,height:1586};e.fillStyle="#191514",e.textBaseline="top";const p={x:i.x+i.width*.55,y:i.y+i.height*.125,width:i.width*.36,height:i.width*.36,radius:0},y={x:i.x+i.width*.08,y:i.y+i.height*.48,width:i.width*.45,height:i.height*.39,radius:0};a.secondary.file?await h(e,a.secondary.file,p,a.secondary.position):m(e,p),a.primary.file?await h(e,a.primary.file,y,a.primary.position):m(e,y),e.font='600 78px "Cormorant Garamond", "Times New Roman", serif',s(e,t.headline||l.headline,{x:i.x+i.width*.07,y:i.y+i.height*.058,maxWidth:i.width*.7,lineHeight:82,maxLines:2}),e.font='500 32px "Noto Sans JP", sans-serif',s(e,t.subhead||l.subhead,{x:i.x+i.width*.07,y:i.y+i.height*.132,maxWidth:i.width*.7,lineHeight:42,maxLines:3}),e.font='500 33px "Noto Sans JP", sans-serif',s(e,t.intro||l.intro,{x:i.x+i.width*.085,y:i.y+i.height*.215,maxWidth:i.width*.37,lineHeight:48,maxLines:4}),e.font='500 31px "Noto Sans JP", sans-serif',s(e,t.body||l.body,{x:i.x+i.width*.585,y:i.y+i.height*.625,maxWidth:i.width*.245,lineHeight:46,maxLines:6}),e.font='500 28px "Noto Sans JP", sans-serif',s(e,t.date||l.date,{x:i.x+i.width*.08,y:i.y+i.height*.895,maxWidth:i.width*.31,lineHeight:34,maxLines:1});const $=t.editor||l.editor,E=i.width*.32,I=i.x+i.width*.92-Math.min(E,e.measureText($).width);s(e,$,{x:I,y:i.y+i.height*.895,maxWidth:E,lineHeight:34,maxLines:1})}},Bi={id:"page2",label:"Page 2",description:"Template 2",async render(e,t,a,o){const{addWrappedText:s,clipRoundedRect:h,drawFileCover:m,drawSlotPlaceholder:l,defaults:i}=o,p={x:84,y:84,width:1072,height:1586};e.fillStyle="#191514",e.textBaseline="top";const y={x:p.x+p.width*.138,y:p.y+p.height*.142,width:p.width*.724,height:p.height*.374,radius:0};a.primary.file?await m(e,a.primary.file,y,a.primary.position):l(e,y),e.font='600 60px "Cormorant Garamond", "Times New Roman", serif',s(e,t.headline||i.headline,{x:p.x+p.width*.142,y:p.y+p.height*.565,maxWidth:p.width*.66,lineHeight:66,maxLines:2}),e.font='500 30px "Noto Sans JP", sans-serif',s(e,t.subhead||i.subhead,{x:p.x+p.width*.142,y:p.y+p.height*.634,maxWidth:p.width*.68,lineHeight:40,maxLines:2}),e.font='500 28px "Noto Sans JP", sans-serif',s(e,t.intro||i.intro,{x:p.x+p.width*.142,y:p.y+p.height*.698,maxWidth:p.width*.66,lineHeight:38,maxLines:4}),e.font='500 28px "Noto Sans JP", sans-serif',s(e,t.body||i.body,{x:p.x+p.width*.142,y:p.y+p.height*.792,maxWidth:p.width*.66,lineHeight:38,maxLines:4}),e.font='500 24px "Noto Sans JP", sans-serif',s(e,t.date||i.date,{x:p.x+p.width*.142,y:p.y+p.height*.948,maxWidth:p.width*.28,lineHeight:30,maxLines:1});const $=t.editor||i.editor;e.font='500 24px "Noto Sans JP", sans-serif';const E=p.width*.28,I=p.x+p.width*.86-Math.min(E,e.measureText($).width);s(e,$,{x:I,y:p.y+p.height*.948,maxWidth:E,lineHeight:30,maxLines:1})}},Di={id:"page3",label:"Page 3",description:"Template 3",async render(e,t,a,o){const{addWrappedText:s,drawFileCover:h,drawSlotPlaceholder:m,defaults:l}=o,i={x:84,y:84,width:1072,height:1586};e.fillStyle="#191514",e.textBaseline="top";const p={x:i.x+i.width*.14,y:i.y+i.height*.22,width:i.width*.58,height:i.height*.36,radius:0},y={x:i.x+i.width*.74,y:i.y+i.height*.72,width:i.width*.14,height:i.height*.15,radius:0};a.primary.file?await h(e,a.primary.file,p,a.primary.position):m(e,p),a.secondary.file?await h(e,a.secondary.file,y,a.secondary.position):m(e,y),e.font='600 58px "Cormorant Garamond", "Times New Roman", serif',s(e,t.headline||l.headline,{x:i.x+i.width*.12,y:i.y+i.height*.075,maxWidth:i.width*.66,lineHeight:64,maxLines:2}),e.font='500 28px "Noto Sans JP", sans-serif',s(e,t.subhead||l.subhead,{x:i.x+i.width*.12,y:i.y+i.height*.145,maxWidth:i.width*.66,lineHeight:36,maxLines:2}),e.font='500 26px "Noto Sans JP", sans-serif',s(e,t.intro||l.intro,{x:i.x+i.width*.13,y:i.y+i.height*.675,maxWidth:i.width*.32,lineHeight:34,maxLines:4}),e.font='500 26px "Noto Sans JP", sans-serif',s(e,t.body||l.body,{x:i.x+i.width*.13,y:i.y+i.height*.79,maxWidth:i.width*.32,lineHeight:34,maxLines:3}),e.font='500 24px "Noto Sans JP", sans-serif',s(e,t.date||l.date,{x:i.x+i.width*.13,y:i.y+i.height*.915,maxWidth:i.width*.2,lineHeight:30,maxLines:1});const $=t.editor||l.editor,E=i.width*.16,I=i.x+i.width*.9-Math.min(E,e.measureText($).width);s(e,$,{x:I,y:i.y+i.height*.915,maxWidth:E,lineHeight:30,maxLines:1})}},Ni={id:"page4",label:"Page 4",description:"Template 4",async render(e,t,a,o){const{addWrappedText:s,drawFileCover:h,drawSlotPlaceholder:m,defaults:l}=o,i={x:84,y:84,width:1072,height:1586};e.fillStyle="#191514",e.textBaseline="top";const p={x:i.x+i.width*.11,y:i.y+i.height*.59,width:i.width*.34,height:i.height*.25,radius:0},y={x:i.x+i.width*.59,y:i.y+i.height*.13,width:i.width*.24,height:i.height*.29,radius:0};a.primary.file?await h(e,a.primary.file,p,a.primary.position):m(e,p),a.secondary.file?await h(e,a.secondary.file,y,a.secondary.position):m(e,y),e.font='600 52px "Cormorant Garamond", "Times New Roman", serif',s(e,t.headline||l.headline,{x:i.x+i.width*.11,y:i.y+i.height*.11,maxWidth:i.width*.28,lineHeight:58,maxLines:2}),e.font='500 27px "Noto Sans JP", sans-serif',s(e,t.subhead||l.subhead,{x:i.x+i.width*.11,y:i.y+i.height*.205,maxWidth:i.width*.28,lineHeight:34,maxLines:2}),e.font='500 26px "Noto Sans JP", sans-serif',s(e,t.intro||l.intro,{x:i.x+i.width*.11,y:i.y+i.height*.295,maxWidth:i.width*.28,lineHeight:34,maxLines:4}),e.font='500 26px "Noto Sans JP", sans-serif',s(e,t.body||l.body,{x:i.x+i.width*.58,y:i.y+i.height*.55,maxWidth:i.width*.2,lineHeight:34,maxLines:4}),e.font='500 24px "Noto Sans JP", sans-serif',s(e,t.date||l.date,{x:i.x+i.width*.58,y:i.y+i.height*.87,maxWidth:i.width*.14,lineHeight:30,maxLines:1});const $=t.editor||l.editor,E=i.width*.15,I=i.x+i.width*.88-Math.min(E,e.measureText($).width);s(e,$,{x:I,y:i.y+i.height*.87,maxWidth:E,lineHeight:30,maxLines:1})}},Ri={id:"page5",label:"Page 5",description:"Template 5",async render(e,t,a,o){const{addWrappedText:s,drawFileCover:h,drawSlotPlaceholder:m,defaults:l}=o,i={x:84,y:84,width:1072,height:1586};e.fillStyle="#191514",e.textBaseline="top";const p={x:i.x+i.width*.49,y:i.y+i.height*.12,width:i.width*.34,height:i.height*.42,radius:0},y={x:i.x+i.width*.12,y:i.y+i.height*.74,width:i.width*.25,height:i.height*.16,radius:0};a.primary.file?await h(e,a.primary.file,p,a.primary.position):m(e,p),a.secondary.file?await h(e,a.secondary.file,y,a.secondary.position):m(e,y),e.font='600 50px "Cormorant Garamond", "Times New Roman", serif',s(e,t.headline||l.headline,{x:i.x+i.width*.12,y:i.y+i.height*.12,maxWidth:i.width*.21,lineHeight:54,maxLines:3}),e.font='500 26px "Noto Sans JP", sans-serif',s(e,t.subhead||l.subhead,{x:i.x+i.width*.12,y:i.y+i.height*.265,maxWidth:i.width*.21,lineHeight:34,maxLines:3}),e.font='500 26px "Noto Sans JP", sans-serif',s(e,t.intro||l.intro,{x:i.x+i.width*.12,y:i.y+i.height*.42,maxWidth:i.width*.21,lineHeight:34,maxLines:5}),e.font='500 26px "Noto Sans JP", sans-serif',s(e,t.body||l.body,{x:i.x+i.width*.51,y:i.y+i.height*.69,maxWidth:i.width*.24,lineHeight:34,maxLines:4}),e.font='500 24px "Noto Sans JP", sans-serif',s(e,t.date||l.date,{x:i.x+i.width*.51,y:i.y+i.height*.89,maxWidth:i.width*.14,lineHeight:30,maxLines:1});const $=t.editor||l.editor,E=i.width*.15,I=i.x+i.width*.88-Math.min(E,e.measureText($).width);s(e,$,{x:I,y:i.y+i.height*.89,maxWidth:E,lineHeight:30,maxLines:1})}},Hi={id:"page6",label:"Page 6",description:"Template 6",async render(e,t,a,o){var T;const{addWrappedText:s,drawFileCover:h,drawSlotPlaceholder:m,defaults:l}=o,i={x:84,y:84,width:1072,height:1586};e.fillStyle="#191514",e.textBaseline="top";const p={x:i.x+i.width*.2,y:i.y+i.height*.3,width:i.width*.46,height:i.height*.36,radius:0},y={x:i.x+i.width*.12,y:i.y+i.height*.075,width:i.width*.2,height:i.height*.14,radius:0},$={x:i.x+i.width*.69,y:i.y+i.height*.8,width:i.width*.15,height:i.height*.1,radius:0};a.primary.file?await h(e,a.primary.file,p,a.primary.position):m(e,p),a.secondary.file?await h(e,a.secondary.file,y,a.secondary.position):m(e,y),(T=a.accent)!=null&&T.file?await h(e,a.accent.file,$,a.accent.position):m(e,$),e.font='600 48px "Cormorant Garamond", "Times New Roman", serif',s(e,t.headline||l.headline,{x:i.x+i.width*.5,y:i.y+i.height*.1,maxWidth:i.width*.2,lineHeight:52,maxLines:2}),e.font='500 26px "Noto Sans JP", sans-serif',s(e,t.subhead||l.subhead,{x:i.x+i.width*.5,y:i.y+i.height*.18,maxWidth:i.width*.2,lineHeight:34,maxLines:3}),e.font='500 26px "Noto Sans JP", sans-serif',s(e,t.intro||l.intro,{x:i.x+i.width*.12,y:i.y+i.height*.74,maxWidth:i.width*.22,lineHeight:34,maxLines:4}),e.font='500 26px "Noto Sans JP", sans-serif',s(e,t.body||l.body,{x:i.x+i.width*.44,y:i.y+i.height*.74,maxWidth:i.width*.14,lineHeight:34,maxLines:4}),e.font='500 24px "Noto Sans JP", sans-serif',s(e,t.date||l.date,{x:i.x+i.width*.12,y:i.y+i.height*.905,maxWidth:i.width*.16,lineHeight:30,maxLines:1});const E=t.editor||l.editor,I=i.width*.14,B=i.x+i.width*.88-Math.min(I,e.measureText(E).width);s(e,E,{x:B,y:i.y+i.height*.905,maxWidth:I,lineHeight:30,maxLines:1})}},Wi={id:"page7",label:"Page 7",description:"Template 7",async render(e,t,a,o){var T;const{addWrappedText:s,drawFileCover:h,drawSlotPlaceholder:m,defaults:l}=o,i={x:84,y:84,width:1072,height:1586};e.fillStyle="#191514",e.textBaseline="top";const p={x:i.x+i.width*.12,y:i.y+i.height*.15,width:i.width*.3,height:i.height*.18,radius:0},y={x:i.x+i.width*.56,y:i.y+i.height*.48,width:i.width*.3,height:i.height*.18,radius:0},$={x:i.x+i.width*.12,y:i.y+i.height*.75,width:i.width*.3,height:i.height*.18,radius:0};a.primary.file?await h(e,a.primary.file,p,a.primary.position):m(e,p),a.secondary.file?await h(e,a.secondary.file,y,a.secondary.position):m(e,y),(T=a.accent)!=null&&T.file?await h(e,a.accent.file,$,a.accent.position):m(e,$),e.font='600 44px "Cormorant Garamond", "Times New Roman", serif',s(e,t.headline||l.headline,{x:i.x+i.width*.58,y:i.y+i.height*.16,maxWidth:i.width*.19,lineHeight:48,maxLines:2}),e.font='500 25px "Noto Sans JP", sans-serif',s(e,t.subhead||l.subhead,{x:i.x+i.width*.58,y:i.y+i.height*.245,maxWidth:i.width*.19,lineHeight:32,maxLines:3}),e.font='500 25px "Noto Sans JP", sans-serif',s(e,t.intro||l.intro,{x:i.x+i.width*.15,y:i.y+i.height*.41,maxWidth:i.width*.2,lineHeight:32,maxLines:4}),e.font='500 25px "Noto Sans JP", sans-serif',s(e,t.body||l.body,{x:i.x+i.width*.59,y:i.y+i.height*.77,maxWidth:i.width*.19,lineHeight:32,maxLines:4}),e.font='500 24px "Noto Sans JP", sans-serif',s(e,t.date||l.date,{x:i.x+i.width*.58,y:i.y+i.height*.91,maxWidth:i.width*.12,lineHeight:30,maxLines:1});const E=t.editor||l.editor,I=i.width*.14,B=i.x+i.width*.88-Math.min(I,e.measureText(E).width);s(e,E,{x:B,y:i.y+i.height*.91,maxWidth:I,lineHeight:30,maxLines:1})}},R={x:.06,y:.06,width:.88,height:.88},De=.015,Et={densityMode:"whitespace",recoveryMode:"restore"},dt={width:.14,height:.12},ke={width:.18,height:.08},qi={primary:{x:.08,y:.16,width:.4,height:.3},secondary:{x:.58,y:.12,width:.24,height:.2},accent:{x:.56,y:.58,width:.26,height:.18}},zi={headline:{x:.08,y:.07,width:.46,height:.1,fontSize:.056,lineHeight:1.08,align:"left",family:"serif",weight:600},subhead:{x:.08,y:.16,width:.48,height:.07,fontSize:.023,lineHeight:1.34,align:"left",family:"sans",weight:500},intro:{x:.08,y:.52,width:.28,height:.18,fontSize:.021,lineHeight:1.42,align:"left",family:"sans",weight:500},body:{x:.62,y:.42,width:.22,height:.24,fontSize:.021,lineHeight:1.42,align:"left",family:"sans",weight:500},date:{x:.08,y:.91,width:.22,height:.04,fontSize:.019,lineHeight:1.25,align:"left",family:"sans",weight:500},editor:{x:.66,y:.91,width:.2,height:.04,fontSize:.019,lineHeight:1.25,align:"right",family:"sans",weight:500}},Oi=[{id:"image-1",x:.1,y:.14,width:.38,height:.34}];function Se(e,t,a){return Math.min(a,Math.max(t,e))}function Ye(e){return Math.round(e/De)*De}function zt(e,t,a){return typeof t=="string"&&t.trim()?t.trim():`${e}-${a+1}`}function yt(e,t=""){return String(e??t).replace(/\r/g,"")}function Ot(e,t){const a=Se(Ye(Number.isFinite(e.width)?e.width:t.width),t.width,R.width),o=Se(Ye(Number.isFinite(e.height)?e.height:t.height),t.height,R.height);return{x:Se(Ye(Number.isFinite(e.x)?e.x:R.x),R.x,R.x+R.width-a),y:Se(Ye(Number.isFinite(e.y)?e.y:R.y),R.y,R.y+R.height-o),width:a,height:o}}function st(e={},t=0){return{id:zt("image",e.id,t),...Ot(e,dt)}}function mt(e={},t=0){const a=typeof e.text=="string",o=e.kind==="title"||e.kind==="body"?e.kind:(Number(e.fontSize)||0)>=.04||e.family==="serif"?"title":"body";return{id:zt("text",e.id,t),kind:o,text:yt(e.text,"text"),isDefaultText:typeof e.isDefaultText=="boolean"?e.isDefaultText:!a,...Ot(e,ke),fontSize:Se(Number.isFinite(e.fontSize)?e.fontSize:.028,.014,.09),lineHeight:Se(Number.isFinite(e.lineHeight)?e.lineHeight:1.35,1,2.2),padding:Se(Number.isFinite(e.padding)?e.padding:.012,.004,.05),align:e.align==="center"||e.align==="right"?e.align:"left",family:e.family==="serif"?"serif":"sans",weight:Se(Number.isFinite(e.weight)?e.weight:e.family==="serif"?600:500,400,700)}}function Xi(e={}){return Object.entries(zi).map(([t,a],o)=>mt({id:`text-${o+1}`,text:yt(e[t],""),x:a.x,y:a.y,width:a.width,height:a.height,fontSize:a.fontSize,lineHeight:a.lineHeight,padding:a.family==="serif"?.01:.012,align:a.align,kind:a.family==="serif"&&a.fontSize>=.04?"title":"body",family:a.family,weight:a.weight},o)).filter(t=>t.text.trim())}function Xt(e={}){return{densityMode:e.densityMode==="fill"?"fill":Et.densityMode,recoveryMode:e.recoveryMode==="keep"?"keep":Et.recoveryMode}}function pt(e={}){return Array.isArray(e.imageBoxes)&&e.imageBoxes.length?e.imageBoxes.map((t,a)=>st(t,a)):e.imageBoxes&&typeof e.imageBoxes=="object"?Object.entries(qi).map(([t,a],o)=>{var h;const s=((h=e.imageBoxes)==null?void 0:h[t])||{};return st({id:t,x:Number.isFinite(s.x)?s.x:a.x,y:Number.isFinite(s.y)?s.y:a.y,width:Number.isFinite(s.width)?s.width:a.width,height:Number.isFinite(s.height)?s.height:a.height},o)}):Oi.map((t,a)=>st(t,a))}function ut(e={},t={}){if(Array.isArray(e.textBoxes)&&e.textBoxes.length)return e.textBoxes.map((s,h)=>mt(s,h));const a=!!(e.imageBoxes&&!Array.isArray(e.imageBoxes)&&typeof e.imageBoxes=="object"),o=Xi(t);return a&&o.length?o:[mt({id:"text-1",text:yt(t.headline,"text"),isDefaultText:!t.headline,x:.56,y:.18,width:.24,height:.14,kind:"title",fontSize:.046,lineHeight:1.12,padding:.01,family:"serif",weight:600},0)]}function Yt(e={},t={}){return{options:Xt(e),imageBoxes:pt(e),textBoxes:ut(e,t)}}function rt(e){return{left:`${e.x*100}%`,top:`${e.y*100}%`,width:`${e.width*100}%`,height:`${e.height*100}%`}}function Ct(e,t){return{x:e.x+e.width*t.x,y:e.y+e.height*t.y,width:e.width*t.width,height:e.height*t.height,radius:0}}function _e(e){return Ye(e)}const Yi={id:"page8",label:"Page 8",description:"Custom free layout",async render(e,t,a,o){var y,$,E,I,B,T,U,N,x,G,de,re;const{addWrappedText:s,drawFileCover:h}=o,m={x:84,y:84,width:1072,height:1586},l=Yt(t.customLayout||{},t),i=Array.isArray((y=t.customLayout)==null?void 0:y.pretextBoxes)?t.customLayout.pretextBoxes:null;e.fillStyle="#191514",e.textBaseline="top";const p=o.page8Files||{};if((($=t.customLayout)==null?void 0:$.editorType)==="pretext"&&i){for(const P of i){const H={x:m.x+P.x/794*m.width,y:m.y+P.y/1123*m.height,width:P.width/794*m.width,height:P.height/1123*m.height,radius:0};if(P.kind==="image"){(E=P.data)!=null&&E.src&&await h(e,P.data.src,H,{cropX:Number(P.data.cropX)||0,cropY:Number(P.data.cropY)||0,zoom:Math.max(1,Number(P.data.zoom)||1)});continue}const O=Math.max(0,Number((I=P.data)==null?void 0:I.padding)||0),C=Math.max(12,Number((B=P.data)==null?void 0:B.lineHeight)||34);e.textAlign=((T=P.data)==null?void 0:T.align)||"left",e.fillStyle=((U=P.data)==null?void 0:U.color)||"#191514",e.font=`${Number((N=P.data)==null?void 0:N.fontWeight)||400} ${Math.max(12,Number((x=P.data)==null?void 0:x.fontSize)||22)}px ${((G=P.data)==null?void 0:G.fontFamily)||'"Noto Sans JP", sans-serif'}`;const V=e.textAlign==="right"?H.x+H.width-O:e.textAlign==="center"?H.x+H.width/2:H.x+O;s(e,((de=P.data)==null?void 0:de.text)||"",{x:V,y:H.y+O,maxWidth:Math.max(24,H.width-O*2),lineHeight:C,maxLines:Math.max(1,Math.floor(Math.max(C,H.height-O*2)/C))})}return}for(const X of l.imageBoxes){const L=Ct(m,X);(re=p[X.id])!=null&&re.file&&await h(e,p[X.id].file,L,p[X.id].position)}l.textBoxes.forEach(X=>{const L=Ct(m,X),P=Math.max(0,m.width*(X.padding||0)),H=X.family==="serif"?'"Cormorant Garamond", "Times New Roman", serif':'"Noto Sans JP", sans-serif';e.textAlign=X.align,e.font=`${X.weight} ${Math.round(m.width*X.fontSize)}px ${H}`;const O=X.align==="right"?L.x+L.width-P:X.align==="center"?L.x+L.width/2:L.x+P,C=Math.max(24,L.width-P*2),V=m.width*X.fontSize*X.lineHeight,pe=Math.max(V,L.height-P*2);s(e,X.text||"",{x:O,y:L.y+P,maxWidth:C,lineHeight:V,maxLines:Math.max(1,Math.floor(pe/Math.max(12,V)))})})}},Ft=[qt,Bi,Di,Ni,Ri,Hi,Wi,Yi],Pe=qt.id,At=new Map(Ft.map(e=>[e.id,e]));function Fi(e){return At.get(e)||At.get(Pe)}const Ui=[{value:"#f8f4ee",label:"Ivory"},{value:"#f4e5de",label:"Blush"},{value:"#ece4d8",label:"Sand"},{value:"#e5ece7",label:"Sage"}];function ji(e,t,a=[]){return`
    <section class="compose-group compose-group--tags">
      <div class="compose-group__head">
        <h3>${Ii[e]}</h3>
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
  `}function Gi(e=Pe){return`
    <div class="template-carousel">
      <button class="template-carousel__nav" type="button" data-template-carousel-nav="prev" aria-label="Previous template">&larr;</button>
      <div class="template-carousel__viewport" data-template-carousel>
        <div class="template-thumb-track">
          ${Ft.map(t=>`
            <label class="template-thumb ${e===t.id?"is-active":""}">
              <input type="radio" name="templateId" value="${t.id}" ${e===t.id?"checked":""} />
              <span class="template-thumb__preview template-option__preview template-option__preview--${t.id}" aria-hidden="true"></span>
            </label>
          `).join("")}
        </div>
      </div>
      <button class="template-carousel__nav" type="button" data-template-carousel-nav="next" aria-label="Next template">&rarr;</button>
    </div>
  `}function Ji(e){return`
    <div class="color-picker-inline">
      <div class="color-chip-track color-chip-track--inline" data-color-carousel>
        ${Ui.map(t=>`
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
          <span class="compose-slot__plus">${j("compose")}</span>
        </div>
      </label>
      <button class="compose-slot__remove" type="button" data-slot-remove="${e}" hidden aria-label="remove image">&times;</button>
    </div>
  `}function ct(e){return`
    <div class="compose-slot ${e}">
      <div class="compose-slot__surface">
        <div class="compose-slot__placeholder">
          <span class="compose-slot__plus">${j("compose")}</span>
        </div>
      </div>
    </div>
  `}function Vi(e,t,a,o={}){const{editable:s=!1,interactiveSlots:h=!1}=o,m=t==="page8",l=s?"compose-sheet":"compose-sheet compose-sheet--locked",i=m?`${l} compose-sheet--custom`:l,p=s?"true":"false";return m?`
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
        ${h?lt({id:"imageInputSecondary",slotClass:"compose-slot--secondary"}):ct("compose-slot--secondary")}
        ${h?lt({id:"imageInputAccent",slotClass:"compose-slot--accent"}):ct("compose-slot--accent")}
        ${h?lt({id:"imageInputPrimary",slotClass:"compose-slot--primary"}):ct("compose-slot--primary")}
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
  `}function Zi(e,t){return`
    <section class="compose-disclosure compose-disclosure--inline">
      <button class="compose-disclosure__button" type="button" data-toggle-compose-tags aria-expanded="false">
        タグ
      </button>
      <div class="compose-disclosure__panel" data-compose-tags hidden>
        ${Object.entries(Wt).map(([a,o])=>ji(a,o,e)).join("")}
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
  `}function Qi({values:e,selectedId:t,selectedBackground:a,selectedFixedTags:o,freeTagsValue:s,submitLabel:h,headerMini:m,headerTitle:l}){return`
    <section class="page page--compose page--compose--edit" data-compose-stage="edit">
      <header class="page-header page-header--with-back page-header--compose">
        <button class="button button--ghost page-back" type="button" data-close-compose>Back</button>
        <div>
          <p class="page-header__mini">${m}</p>
          <h2 class="page-header__title">${l}</h2>
        </div>
      </header>

      <form class="compose-form compose-form--edit" id="composeForm">
        <section class="compose-editor ${t==="page8"?"compose-editor--page8":""}">
          <section class="compose-preview compose-preview--editor ${t==="page8"?"compose-preview--page8":""}">
            ${t==="page8"?`
                <div class="compose-pretext-host-shell compose-pretext-host-shell--page8">
                  <div class="compose-pretext-host" data-compose-pretext-host></div>
                </div>
              `:Vi(e,t,a,{editable:!0,interactiveSlots:!0})}
          </section>

          <aside class="compose-editor-actions ${t==="page8"?"compose-editor-actions--page8":""}">
            <section class="compose-group compose-group--template">
              <div class="compose-group__head compose-group__head--template">
                <h3>Template</h3>
                ${Ji(a)}
              </div>
              ${Gi(t)}
            </section>
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
            ${Zi(o,s)}
            <button class="button button--primary compose-submit-button ${t==="page8"?"compose-submit-button--page8":""}" type="submit">${h}</button>
          </aside>
        </section>
      </form>
    </section>
  `}function Ki(e=Pe){const t=typeof e=="object"?e:{selectedTemplateId:e},a=t.draft||{},o={headline:a.headline||"text",subhead:a.subhead||"text",intro:a.intro||"text",body:a.body||"text",date:a.date||"text",editor:a.editor||"編集者：haru"},s=t.selectedTemplateId||a.templateId||Pe,h=t.selectedBackground||a.backgroundColor||"#f8f4ee",m=Array.isArray(a.fixedTags)?a.fixedTags:[],l=Array.isArray(a.freeTags)?a.freeTags.join(", "):a.freeTags||"",i=t.isEditing?"Update Post":"Post This Layout",p=t.isEditing?"post editor":"template editor",y=t.isEditing?"Edit Post":"Compose";return Qi({values:o,selectedId:s,selectedBackground:h,selectedFixedTags:m,freeTagsValue:l,submitLabel:i,headerMini:p,headerTitle:y})}function ea(e){return e.length?e.map(t=>`
    <label class="issue-post-option">
      <input type="checkbox" name="issuePostIds" value="${t.id}" />
      <img src="${t.imageData}" alt="${t.authorName}の投稿画像" />
      <div class="issue-post-option__meta">
        <strong>${t.authorName}</strong>
        <span>${Dt(t.createdAt)}</span>
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
  `}function Ut(e){return[...new Set(e.map(t=>t.authorName))]}function jt(e){return`@${String(e||"user").trim().replace(/\s+/g,"_").toLowerCase()}`}function tt(e,t){return e.length?`
    <div class="feed-grid feed-grid--single">
      ${e.map(a=>Ht(a,{mode:"minimal"})).join("")}
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
  `:'<p class="empty-copy">Saved magazine issues will appear here.</p>'}function oa(e,t,a){const o=e.posts.filter(N=>N.authorName===e.profile.name),s=e.posts.filter(N=>N.liked),h=e.posts.filter(N=>N.saved),m=e.issues||[],l=e.followingAuthors,i=a.filter(N=>N!==e.profile.name),p=t.profileSection||"identity",y=t.profileLibraryTab||"liked",$=!!t.profileAvatarCropOpen,E=jt(e.profile.name),B={identity:{label:"Name / ID",value:`<span class="profile-node__avatar">${Re(e.profile.avatarData,(e.profile.name||"Y").slice(0,1).toUpperCase(),`${e.profile.name} avatar`)}</span>`,angle:0,centerLabel:""},library:{label:"Likes / Saved",value:`<span class="profile-node__icon-pair">${j("heart")}${j("save")}</span>`,angle:60},edit:{label:"Edit",value:"profile",angle:120},posts:{label:"Posts",value:String(o.length),angle:180},magazine:{label:"Magazine",value:String(m.length),angle:240},network:{label:"Follow / Follower",value:`${l.length} / ${i.length}`,angle:300}},T=B[p]||B.identity;function U(){switch(p){case"identity":return`
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
                  ${l.length?l.map(N=>`
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
                <p class="profile-column-title">Followers ${i.length}</p>
                <div class="follow-list">
                  ${i.length?i.map(N=>`
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
              <button class="profile-library-tab ${y==="liked"?"is-active":""}" type="button" data-profile-library-tab="liked" aria-pressed="${y==="liked"?"true":"false"}">${j("heart")}<span>Like</span></button>
              <button class="profile-library-tab ${y==="saved"?"is-active":""}" type="button" data-profile-library-tab="saved" aria-pressed="${y==="saved"?"true":"false"}">${j("save")}<span>Save</span></button>
            </div>
            <section class="profile-library-panel">
              <p class="profile-column-title">${y==="liked"?"Liked Posts":"Saved Posts"}</p>
              ${y==="liked"?tt(s,"Posts you liked will appear here."):tt(h,"Posts you saved will appear here.")}
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
                      ${Re(e.profile.avatarData,(e.profile.name||"Y").slice(0,1).toUpperCase(),`${e.profile.name} avatar`)}
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

      ${U()}
    </section>
  `}function na(e,t){var h;const a=Ut(e.posts||[]),o=e.posts.filter(m=>m.authorName===t),s=e.followingAuthors.includes(t);return`
    <section class="page page--profile">
      <header class="page-header page-header--with-back">
        <button class="button button--ghost page-back" type="button" data-close-profile>Back</button>
        <div>
          <p class="page-header__mini">author profile</p>
          <h2 class="page-header__title">${t}</h2>
        </div>
      </header>

      <section class="profile-card">
        <div class="profile-card__avatar">${Re((h=o[0])==null?void 0:h.authorAvatarData,(t||"Y").slice(0,1).toUpperCase(),`${t} avatar`)}</div>
        <div class="profile-card__body">
          <div class="profile-card__heading">
            <div>
              <h3 class="profile-card__name">${t}</h3>
              <p class="profile-card__bio">${jt(t)}</p>
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
  `}function sa(e,t={}){const a=Ut(e.posts||[]),o=t.profileAuthor||null;return!o||o===e.profile.name?oa(e,t,a):na(e,o)}function ra(e,t={}){var h;if(!e)return`
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
            ${Re(e.authorAvatarData,e.authorIcon,`${e.authorName} avatar`)}
          </button>
          <div>
            <p class="post-card__author">${e.authorName}</p>
            <p class="post-card__time">${Nt(e.createdAt)}</p>
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
              ${j("heart")}
              <span>${e.likes}</span>
            </button>
            <button class="icon-button" data-comment="${e.id}" aria-label="Open comments">
              ${j("comment")}
              <span>${((h=e.comments)==null?void 0:h.length)||0}</span>
            </button>
            <button class="icon-button ${e.saved?"is-active":""}" data-save="${e.id}" aria-label="Save post">
              ${j("save")}
              <span>${e.saves}</span>
            </button>
          </div>
          ${o||a?`
            <div class="post-detail-card__owner-actions">
              ${o?`
                <button class="button button--ghost post-detail-card__edit" type="button" data-edit-post="${e.id}" aria-label="Edit post">
                  ${j("edit")}
                </button>
              `:""}
              ${a?`
                <button class="button button--ghost post-detail-card__delete" type="button" data-delete-post="${e.id}" aria-label="Delete post">
                  ${j("trash")}
                </button>
              `:""}
            </div>
          `:""}
        </div>
      </article>
    </section>
  `}function ht(e){return URL.createObjectURL(e)}async function la(e,t,a={}){var T;const{size:o=320}=a,s=await createImageBitmap(e),h=document.createElement("canvas");h.width=o,h.height=o;const m=h.getContext("2d");if(!m)return"";const l=Math.max(1,Number(t==null?void 0:t.zoom)||1),i=Math.min(1,Math.max(0,Number(t==null?void 0:t.x)||.5)),p=Math.min(1,Math.max(0,Number(t==null?void 0:t.y)||.5)),y=Math.max(o/s.width,o/s.height);s.width*y*l,s.height*y*l;const $=o/(y*l),E=o/(y*l),I=Math.max(0,(s.width-$)*i),B=Math.max(0,(s.height-E)*p);return m.clearRect(0,0,o,o),m.save(),m.beginPath(),m.arc(o/2,o/2,o/2,0,Math.PI*2),m.closePath(),m.clip(),m.drawImage(s,I,B,$,E,0,0,o,o),m.restore(),(T=s.close)==null||T.call(s),h.toDataURL("image/png")}const c={screen:"opening",timelineOverlay:null,timelineTab:"recommended",timelinePan:{x:-360,y:-220},searchQuery:"",searchTags:[],homeTheme:"dark",homeCoreState:"default",homeCoreTapTimestamps:[],previewPostId:null,commentPostId:null,profileEditOpen:!1,profileAuthor:null,profileSection:null,profileLibraryTab:"liked",profileExpanded:!0,profileOrbitRotation:0,profileAvatarCropOpen:!1,composeStage:"select",composeTemplateId:Pe,composeBackgroundColor:"#f8f4ee",composeEditingPostId:null,openingTapGuardUntil:0,postReturnScreen:"timeline",postReturnProfileAuthor:null,profileReturnState:null,composeReturnState:null},Gt={headline:"text",subhead:"text",intro:"text",body:"text",date:"text",editor:"編集者：haru"};let Ue=null,Me=0,it=null,Be=null;const W={file:null,previewUrl:"",imageSize:null,crop:{x:.5,y:.5,zoom:1}};function Jt(){it&&(window.clearTimeout(it),it=null)}function Vt(){Jt(),c.homeCoreState="default",c.homeCoreTapTimestamps=[]}function je(){W.previewUrl&&URL.revokeObjectURL(W.previewUrl),W.file=null,W.previewUrl="",W.imageSize=null,W.crop={x:.5,y:.5,zoom:1},c.profileAvatarCropOpen=!1}function ca(){Be!=null&&Be.unmount&&Be.unmount(),Be=null}function da(){var t;const e=He();switch(c.screen){case"home":return It(e,c);case"timeline":return Pi(e,c);case"search":return Ai(e,c);case"compose":return Ki({stage:c.composeStage,selectedTemplateId:c.composeTemplateId,selectedBackground:c.composeBackgroundColor,draft:((t=Ne(c.composeEditingPostId))==null?void 0:t.composeData)||null,isEditing:!!c.composeEditingPostId});case"magazine":return ia(e);case"profile":return sa(e,c);case"post":return ra(Ne(c.previewPostId),{canDelete:Zt(Ne(c.previewPostId))});default:return It(e,c)}}function Ne(e){return He().posts.find(t=>t.id===e)}function Zt(e){return e?e.authorName===He().profile.name:!1}function ma(){if(!Ue)return;const e=["app-shell"],t=["screen-area"],a=c.homeTheme==="dark"?"dark":"light";e.push(`app-shell--theme-${a}`),c.screen==="home"?(e.push("app-shell--home"),t.push("screen-area--home")):c.screen==="timeline"?(e.push("app-shell--timeline"),t.push("screen-area--timeline")):c.screen==="compose"?(e.push("app-shell--compose"),t.push("screen-area--compose")):c.screen==="search"&&t.push("screen-area--search"),Ue.innerHTML=`
    <div class="${e.join(" ")}">
      <main class="${t.join(" ")}" id="screenArea"></main>
      ${oi()}
      <div id="modalRoot"></div>
    </div>
  `}function Fe(){const e=document.getElementById("modalRoot");if(!e)return;const t=c.commentPostId?Ne(c.commentPostId):null;e.innerHTML=`
    ${ri(t)}
  `,Ia()}function ne(){const e=document.getElementById("screenArea");e&&(e.innerHTML=da(),Ea(),Fe())}function ae(){if(Ue){if(ca(),c.screen==="opening"){Ue.innerHTML=xi(),fa();return}ma(),ne(),va()}}function gt(){return{screen:c.screen,previewPostId:c.previewPostId,profileAuthor:c.profileAuthor,postReturnScreen:c.postReturnScreen,postReturnProfileAuthor:c.postReturnProfileAuthor}}function Qt(e,t="home"){if(!e){at(t);return}c.screen=e.screen||t,c.previewPostId=e.previewPostId||null,c.commentPostId=null,c.profileEditOpen=!1,c.profileAuthor=c.screen==="profile"&&e.profileAuthor||null,c.postReturnScreen=e.postReturnScreen||"home",c.postReturnProfileAuthor=e.postReturnProfileAuthor||null,ae()}function at(e){e!=="home"&&Vt(),e==="compose"&&c.screen!=="compose"&&(c.composeReturnState=gt()),e==="profile"&&c.screen!=="profile"&&(c.profileReturnState=gt()),e!=="profile"&&(je(),c.profileReturnState=null),e!=="home"&&(c.timelineOverlay=null),e!=="compose"&&(c.composeEditingPostId=null,c.composeStage="edit",c.composeBackgroundColor="#f8f4ee",c.composeReturnState=null),c.screen=e,c.previewPostId=null,c.commentPostId=null,e==="compose"&&(c.composeStage="edit",c.composeBackgroundColor="#f8f4ee"),e==="profile"&&(je(),c.profileAuthor=null,c.profileSection="identity",c.profileLibraryTab="liked",c.profileExpanded=!0,c.profileOrbitRotation=270),e!=="profile"&&(c.profileEditOpen=!1,c.profileAuthor=null),ae()}function Kt(){c.previewPostId=null,c.commentPostId=null,c.openingTapGuardUntil=Date.now()+700,c.postReturnScreen="home",c.postReturnProfileAuthor=null,at("home")}function pa(e){je(),c.profileReturnState=gt(),c.screen="profile",c.previewPostId=null,c.commentPostId=null,c.profileEditOpen=!1,c.profileAuthor=e||null,c.profileSection=e?null:"identity",c.profileLibraryTab="liked",c.profileExpanded=!0,c.profileOrbitRotation=e?0:270,ae()}function ua(){je();const e=c.profileReturnState;c.profileReturnState=null,Qt(e,"home")}function ha(e){c.postReturnScreen=c.screen,c.postReturnProfileAuthor=c.profileAuthor,c.screen="post",c.previewPostId=e,c.commentPostId=null,ae()}function ga(){const e=c.composeReturnState;c.composeReturnState=null,Qt(e,"home")}function ei(){c.screen=c.postReturnScreen||"timeline",c.commentPostId=null,c.profileEditOpen=!1,c.profileAuthor=c.screen==="profile"?c.postReturnProfileAuthor:null,ae()}async function fa(){var h,m,l;const e=document.getElementById("openingCanvas"),t=document.querySelector(".opening-screen");if(!e||!t)return;const a=++Me,o=i=>{i.preventDefault(),i.stopPropagation(),a===Me&&(Me+=1,Kt())};t.addEventListener("pointerdown",o,{once:!0});try{(h=document.fonts)!=null&&h.ready?await Promise.race([document.fonts.ready,new Promise(i=>window.setTimeout(i,1200))]):await new Promise(i=>window.setTimeout(i,180))}catch{}if(a!==Me)return;const s=((l=(m=window.matchMedia)==null?void 0:m.call(window,"(prefers-reduced-motion: reduce)"))==null?void 0:l.matches)??!1;ya(e,a,s)}function ya(e,t,a){const o=e.getBoundingClientRect(),s=window.devicePixelRatio||1,h=Math.max(1,Math.round(o.width*s)),m=Math.max(1,Math.round(o.height*s)),l=e.getContext("2d");if(!l)return;e.width=h,e.height=m;const i="#f5f7fb",p='"Zen Old Mincho", "Cormorant Garamond", "Times New Roman", serif',y="ABCDEFGHIJKLMNOPQRSTUVWXYZ",$=Math.min(h*.29,m*.56,156*s),E=`700 ${$}px ${p}`,I=a?1300:3e3,B=a?420:760,T=a?320:620,U=a?720:2100,N=a?1800:5200,x=I+B+T+U+N;function G(k,A,q){return Math.min(q,Math.max(A,k))}if(t!==Me)return;function de(k){return 1-(1-k)**3}function re(k){return k<.5?4*k*k*k:1-(-2*k+2)**3/2}function X(k,A,q){return k+(A-k)*q}function L(k,A,q){return G((k-A)/q,0,1)}function P(k,A,q,z,te=1){k.save(),k.globalAlpha=te,k.font=E,k.textAlign="left",k.textBaseline="middle",k.lineJoin="round",k.lineCap="round",k.lineWidth=Math.max(2.4*s,$*.08),k.strokeStyle="rgba(113, 218, 255, 0.22)",k.strokeText(A,q,z),k.shadowColor="rgba(94, 156, 255, 0.28)",k.shadowBlur=$*.08,k.shadowOffsetY=$*.03,k.fillStyle=i,k.fillText(A,q,z),k.restore()}function H(k=1){l.save(),l.globalAlpha=k,l.drawImage(C,0,0),l.restore()}function O(k=1,A=0){const q=m*.5,z=A*Math.PI*.9,te=$*.018*(1-A*.32),oe=Math.sin(z*.82)*te*.55,ie=Math.cos(z*.68)*te*.42,ve=1+Math.sin(A*Math.PI*.8)*.004;l.save(),l.globalAlpha=k,l.translate(h/2+oe,q+ie),l.scale(ve,ve),l.drawImage(C,-h/2,-m*.5),l.restore(),l.save();const Y=Math.hypot(h,m),ue=$*.42;l.lineWidth=Math.max(1*s,$*.008);for(let Z=0;Z<3;Z+=1){const ee=G(A*.56-Z*.18,0,1);ee<=0||ee>=1||(l.globalAlpha=(1-ee)**1.4*.12*k,l.strokeStyle=i,l.beginPath(),l.arc(h/2,q,ue+ee*(Y-ue),0,Math.PI*2),l.stroke())}l.restore()}const C=document.createElement("canvas");C.width=h,C.height=m;const V=C.getContext("2d");if(!V)return;const pe=["V","e","l","n","a"],Le=$*.025,Ie=[-$*.05,0,0,0];V.font=E;const xe=pe.map(k=>V.measureText(k).width),Ee=xe.reduce((k,A)=>k+A,0)+Le*(pe.length-1)+Ie.reduce((k,A)=>k+A,0),Ge=h/2-Ee/2,$e=m*.5;V.fillStyle=i,V.font=E,V.textAlign="left",V.textBaseline="middle";let We=Ge;const ye=pe.map((k,A)=>{const q=xe[A],z=We;We+=q+Le+(Ie[A]||0);const te=A<2;return{glyph:k,targetX:z,targetY:$e,startX:te?-q-Math.random()*h*.16-A*$*.18:h+Math.random()*h*.16+(pe.length-A)*$*.18,startY:$e+(Math.random()-.5)*$*.42,driftX:(Math.random()-.5)*$*.12,driftY:(Math.random()-.5)*$*.08,enterArc:(Math.random()-.5)*$*.32,delay:A*.055,alpha:.72+Math.random()*.18,width:q}});pe.forEach((k,A)=>{P(V,k,ye[A].targetX,$e)});const qe=[],Je=a?Math.max(28,Math.round(h/20)):Math.max(120,Math.round(h/5.5)),Ve=Ee*.52+$*.16,Ze=$*.56;for(let k=0;k<Je;k+=1){const A=k%7,q=.86+A*.28+Math.random()*.14,z=Math.random()<.5?1:-1,te=A>=4?1.35:1;qe.push({glyph:y[Math.floor(Math.random()*y.length)],size:Math.max(h,m)*.024+Math.random()*(Math.max(h,m)*.034),angularSpeed:(a?22e-5:4e-4)*(.82+Math.random()*.72)*z,radiusX:Math.min(h*.64,Ve*q*te),radiusY:Math.min(m*.42,Ze*(.86+A*.2+Math.random()*.14)*te),wobble:$*(.03+Math.random()*.05),wobbleSpeed:.0012+Math.random()*.0016,alpha:a?.16+Math.random()*.1:.24+Math.random()*.18,seed:Math.random()*Math.PI*2})}const ze=performance.now();function le(k,A,q="back"){qe.forEach(z=>{const te=k*z.angularSpeed+z.seed,oe=Math.sin(te),ie=oe>0;if(q==="front"&&!ie||q==="back"&&ie)return;const ve=Math.sin(k*z.wobbleSpeed+z.seed*1.4)*z.wobble,Y=Math.cos(k*z.wobbleSpeed*.82+z.seed*.9)*z.wobble*.72,ue=h/2+Math.cos(te)*z.radiusX+ve,Z=$e+oe*z.radiusY+Y,ee=ie?1+oe*.22:.74+(oe+1)*.08,we=z.alpha*A*(ie?.72+oe*.42:.18);we<=.015||(l.save(),l.globalAlpha=we,l.fillStyle=i,l.font=`500 ${z.size*ee}px ${p}`,l.textAlign="center",l.textBaseline="middle",l.fillText(z.glyph,ue,Z),l.restore())})}function Oe(k){if(t!==Me)return;const A=k-ze,q=de(L(A,0,I)),z=re(L(A,I*.58,B)),te=re(L(A,I+B,T)),oe=L(A,I+B*.3,T),ie=re(L(A,I+B+T+U,N));l.clearRect(0,0,h,m),l.textAlign="center",l.textBaseline="middle",l.fillStyle=i,le(A,Math.max(0,1-oe),"back"),ye.forEach((Z,ee)=>{const we=G((q-Z.delay)/(1-Z.delay),0,1);if(we<=.001)return;const he=de(we),Qe=(1-he)*Z.enterArc,Xe=X(Z.startX,Z.targetX,he)+Z.driftX*(1-he),ge=X(Z.startY,Z.targetY,he)+Math.sin(he*Math.PI+ee*.35)*Qe+Z.driftY*(1-he),Q=1-G((te-.24)/.76,0,1),Ce=Math.min(.96,.22+he*Z.alpha+z*.18)*Q;Ce<=.02||(l.save(),P(l,Z.glyph,Xe,ge,Ce),l.restore())}),l.globalAlpha=1;const ve=G((te-.18)/.82,0,1),Y=Math.max(0,1-ie**2.1),ue=ve*Y;if(ie>.001?O(ue,ie):H(ue),le(A,Math.max(0,1-oe),"front"),A<x){requestAnimationFrame(Oe);return}t===Me&&Kt()}requestAnimationFrame(Oe)}function va(){const e=(a,o,s)=>Math.min(s,Math.max(o,a));[{element:document.querySelector('[data-side-wheel="main"]'),getItems:()=>Array.from(document.querySelectorAll('[data-side-wheel="main"] [data-side-nav-screen]')),getActiveKey:()=>["timeline","search","compose","profile"].includes(c.screen)?c.screen:c.postReturnScreen||"timeline",applySelection:a=>{if(c.screen===a){ae();return}at(a)}},{element:document.querySelector('[data-side-wheel="timeline"]'),getItems:()=>Array.from(document.querySelectorAll('[data-side-wheel="timeline"] [data-side-nav-tab]')),getActiveKey:()=>c.timelineTab||"recommended",applySelection:a=>{c.timelineTab=a,ae()}},{element:document.querySelector('[data-side-wheel="profile"]'),getItems:()=>Array.from(document.querySelectorAll('[data-side-wheel="profile"] [data-side-nav-profile-section]')),getActiveKey:()=>c.profileSection||"identity",applySelection:a=>{c.profileSection=a,c.profileSection==="library"&&(c.profileLibraryTab=c.profileLibraryTab||"liked"),ae()}}].filter(a=>a.element).forEach(a=>{const{element:o,getItems:s,applySelection:h,getActiveKey:m}=a,l=s();if(!l.length)return;const i=l.map((L,P)=>({button:L,key:L.dataset.sideNavScreen||L.dataset.sideNavTab||L.dataset.sideNavProfileSection,index:P})),p=Math.max(0,i.findIndex(L=>L.key===m()));let y=!1,$=p,E=0,I=0,B=0,T=null;const U=L=>{var V;const P=(V=i[$])==null?void 0:V.button.getBoundingClientRect(),H=((P==null?void 0:P.height)||0)/2,O=H,C=window.innerHeight-H;return C<=O?0:e(L,O-window.innerHeight/2,C-window.innerHeight/2)},N=(L,P)=>{const H=o.classList.contains("side-wheel--left")?76:24,O=i.length<=2?88:76;o.style.setProperty("--wheel-offset-y",`${E}px`),o.classList.toggle("is-dragging",!!(T!=null&&T.moved)),i.forEach(C=>{const V=(C.index-L)*O,pe=P||C.index===L?1:0,Le=P?C.index===L?1:.9:1,Ie=!P&&C.index===L?I:0;C.button.style.setProperty("--slot-x",`${H}%`),C.button.style.setProperty("--slot-y",`${V}px`),C.button.style.setProperty("--slot-scale",String(Le)),C.button.style.setProperty("--slot-opacity",String(pe)),C.button.style.setProperty("--slot-depth",String(Math.abs(C.index-L))),C.button.style.setProperty("--drag-x",`${Ie}px`),C.button.style.setProperty("--drag-y","0px"),C.button.classList.toggle("is-active",C.index===L),C.button.classList.toggle("is-dragging",!!(T!=null&&T.moved)&&C.index===L)})},x=L=>{var C;if(!T||(L==null?void 0:L.pointerId)!=null&&T.pointerId!==L.pointerId)return;const{button:P,pointerId:H,moved:O}=T;(C=P.hasPointerCapture)!=null&&C.call(P,H)&&P.releasePointerCapture(H),T=null,O&&(B=Date.now()+220),N($,y)},G=L=>{if(!T||T.pointerId!==L.pointerId)return;const P=L.clientX-T.startX,H=L.clientY-T.startY;if(!(!T.moved&&Math.hypot(P,H)<8)){if(T.moved=!0,E=U(T.startWheelOffsetY+H),T.mode==="collapsed"){const O=T.halfWidth,C=window.innerWidth-T.halfWidth;I=e(T.startCenterX+P,O,C)-T.anchorCenterX}else I=0;N($,y)}};N(p,!1);const de=()=>{y=!0,o.classList.add("is-engaged"),I=0,N($,!0)},re=()=>{y=!1,o.classList.remove("is-engaged"),N($,!1)},X=(L=$)=>{$=L;const P=i[$];if(!P){re();return}h(P.key)};l.forEach(L=>{L.addEventListener("pointerdown",P=>{if(Number(L.dataset.sideIndex||0)!==$)return;const O=L.getBoundingClientRect();T={pointerId:P.pointerId,button:L,mode:y?"engaged":"collapsed",startX:P.clientX,startY:P.clientY,startCenterX:O.left+O.width/2,anchorCenterX:O.left+O.width/2-I,halfWidth:O.width/2,startWheelOffsetY:E,moved:!1},L.setPointerCapture(P.pointerId)}),L.addEventListener("pointermove",G),L.addEventListener("pointerup",x),L.addEventListener("pointercancel",x),L.addEventListener("lostpointercapture",x),L.addEventListener("click",P=>{if(Date.now()<B){P.preventDefault(),P.stopPropagation();return}P.preventDefault();const H=Number(L.dataset.sideIndex||0);if(!y){if(H!==$)return;de();return}if(H===$){re();return}X(H)})})})}function ot(e=document){e.querySelectorAll("[data-toggle-tags]").forEach(t=>{t.addEventListener("click",()=>{const a=document.querySelector(`[data-tags-panel="${t.dataset.toggleTags}"]`);a&&(a.hidden=!a.hidden,t.classList.toggle("is-active",!a.hidden))})}),e.querySelectorAll("[data-like]").forEach(t=>{t.addEventListener("click",()=>{ui(t.dataset.like),ne()})}),e.querySelectorAll("[data-save]").forEach(t=>{t.addEventListener("click",()=>{hi(t.dataset.save),ne()})}),e.querySelectorAll("[data-comment]").forEach(t=>{t.addEventListener("click",()=>{c.commentPostId=t.dataset.comment,Fe()})}),e.querySelectorAll("[data-open-preview]").forEach(t=>{t.addEventListener("click",a=>{if(Date.now()<c.openingTapGuardUntil){a.preventDefault(),a.stopPropagation();return}const o=t.dataset.openPreview;fi(o),ha(o)})}),e.querySelectorAll("[data-open-author]").forEach(t=>{t.addEventListener("click",()=>{pa(t.dataset.openAuthor)})})}function ba(){const e=document.querySelector(".orbit-home"),t=()=>{e&&(e.classList.remove("orbit-home--default","orbit-home--collapsing","orbit-home--sheep"),e.classList.add(`orbit-home--${c.homeCoreState}`))};document.querySelectorAll("[data-home-theme-toggle]").forEach(a=>{a.addEventListener("click",()=>{c.homeTheme=c.homeTheme==="dark"?"light":"dark",ae()})}),document.querySelectorAll("[data-home-core-toggle]").forEach(a=>{a.addEventListener("click",()=>{if(c.homeCoreState!=="default")return;const o=Date.now();c.homeCoreTapTimestamps=[...c.homeCoreTapTimestamps.filter(s=>o-s<900),o],!(c.homeCoreTapTimestamps.length<3)&&(c.homeCoreTapTimestamps=[],c.homeCoreState="collapsing",t(),Jt(),it=window.setTimeout(()=>{c.homeCoreState="sheep",t()},620))})}),document.querySelectorAll("[data-home-sheep-toggle]").forEach(a=>{a.addEventListener("click",()=>{c.homeCoreState==="sheep"&&(Vt(),t())})})}function xa(){var a,o;ot(document.getElementById("screenArea"));const e=document.querySelector("[data-timeline-pan-viewport]"),t=document.querySelector("[data-timeline-pan-surface]");if(e&&t){const s=(i,p)=>{const y=Math.min(0,e.clientWidth-t.scrollWidth),$=Math.min(0,e.clientHeight-t.scrollHeight);return{x:Math.max(y,Math.min(0,i)),y:Math.max($,Math.min(0,p))}},h=(i,p)=>{const y=s(i,p);c.timelinePan=y,t.style.transform=`translate(${y.x}px, ${y.y}px)`};h(((a=c.timelinePan)==null?void 0:a.x)??-360,((o=c.timelinePan)==null?void 0:o.y)??-220);let m=null;t.addEventListener("pointerdown",i=>{var p,y,$;m={pointerId:i.pointerId,startX:i.clientX,startY:i.clientY,originX:((p=c.timelinePan)==null?void 0:p.x)??-360,originY:((y=c.timelinePan)==null?void 0:y.y)??-220,moved:!1},e.classList.add("is-dragging"),($=t.setPointerCapture)==null||$.call(t,i.pointerId)}),t.addEventListener("pointermove",i=>{if(!m||m.pointerId!==i.pointerId)return;const p=i.clientX-m.startX,y=i.clientY-m.startY;(Math.abs(p)>4||Math.abs(y)>4)&&(m.moved=!0,i.preventDefault()),h(m.originX+p,m.originY+y)});const l=i=>{var p;!m||m.pointerId!==i.pointerId||(e.classList.remove("is-dragging"),m.moved&&(c.openingTapGuardUntil=Date.now()+180),m=null,(p=t.releasePointerCapture)==null||p.call(t,i.pointerId))};t.addEventListener("pointerup",l),t.addEventListener("pointercancel",l)}document.querySelectorAll("[data-timeline-tab]").forEach(s=>{s.addEventListener("click",()=>{c.timelineTab=s.dataset.timelineTab||"recommended",ne()})})}function wa(){ot(document.getElementById("screenArea"));const e=document.getElementById("searchInput");e&&e.addEventListener("input",t=>{c.searchQuery=t.target.value;const a=t.target.selectionStart;ne();const o=document.getElementById("searchInput");o&&(o.focus(),o.setSelectionRange(a,a))}),document.querySelectorAll("[data-search-tag]").forEach(t=>{t.addEventListener("click",()=>{const a=t.dataset.searchTag;c.searchTags=c.searchTags.includes(a)?c.searchTags.filter(o=>o!==a):[...c.searchTags,a],ne()})})}function _a(){document.querySelectorAll("[data-home-nav]").forEach(e=>{e.addEventListener("click",()=>{at(e.dataset.homeNav)})}),document.querySelectorAll("[data-close-profile]").forEach(e=>{e.addEventListener("click",()=>{ua()})}),document.querySelectorAll("[data-close-compose]").forEach(e=>{e.addEventListener("click",()=>{ga()})})}function et(e){var t,a;return e.templateId==="page8"&&Array.isArray((t=e.customLayout)==null?void 0:t.pretextBoxes)?e.customLayout.pretextBoxes.filter(o=>o.kind==="title"||o.kind==="body").map(o=>{var s;return String(((s=o.data)==null?void 0:s.text)||"").trim()}).filter(Boolean).join(" / ").slice(0,120):e.templateId==="page8"&&Array.isArray((a=e.customLayout)==null?void 0:a.textBoxes)?e.customLayout.textBoxes.map(o=>String(o.text||"").trim()).filter(Boolean).join(" / ").slice(0,120):[e.headline,e.subhead,e.intro,e.body].map(o=>o.trim()).filter(Boolean).join(" / ").slice(0,120)}function Sa(e,t,a){const{x:o,y:s,maxWidth:h,lineHeight:m,maxLines:l}=a,i=[];String(t||"").split(`
`).forEach(y=>{const $=/\s/.test(y.trim()),E=$?y.split(/\s+/).filter(Boolean):Array.from(y),I=$?" ":"";if(!E.length){i.push("");return}let B="";E.forEach(T=>{const U=B?`${B}${I}${T}`:T;if(e.measureText(U).width<=h||!B){B=U;return}i.push(B),B=T}),B&&i.push(B)}),i.slice(0,l).forEach((y,$)=>{e.fillText(y,o,s+$*m)})}function vt(e,t,a,o,s,h){e.beginPath(),e.moveTo(t+h,a),e.arcTo(t+o,a,t+o,a+s,h),e.arcTo(t+o,a+s,t,a+s,h),e.arcTo(t,a+s,t,a,h),e.arcTo(t,a,t+o,a,h),e.closePath()}async function $a(e,t,a,o={x:.5,y:.5}){var T;if(!t)return;const s=typeof t=="string"?await new Promise((U,N)=>{const x=new Image;x.onload=()=>U(x),x.onerror=N,x.src=t}):await createImageBitmap(t),h=s.width/s.height,m=a.width/a.height;let l=0,i=0,p=s.width,y=s.height;const $=Math.max(1,Number(o==null?void 0:o.zoom)||1),E=Number.isFinite(o==null?void 0:o.cropX)||Number.isFinite(o==null?void 0:o.cropY);let I=Math.min(1,Math.max(0,o.x??.5)),B=Math.min(1,Math.max(0,o.y??.5));if(E){const U=h>m?a.height*h:a.width,N=h>m?a.height:a.width/h,x=Math.max(0,U*$-a.width),G=Math.max(0,N*$-a.height);I=x?Math.min(1,Math.max(0,.5-(Number(o==null?void 0:o.cropX)||0)/x)):.5,B=G?Math.min(1,Math.max(0,.5-(Number(o==null?void 0:o.cropY)||0)/G)):.5}h>m?(p=Math.max(1,s.height*m/$),l=(s.width-p)*I):(y=Math.max(1,s.width/m/$),i=(s.height-y)*B),e.save(),vt(e,a.x,a.y,a.width,a.height,a.radius),e.clip(),e.drawImage(s,l,i,p,y,a.x,a.y,a.width,a.height),e.restore(),(T=s.close)==null||T.call(s)}function Ta(e,t){e.save(),e.lineWidth=4,e.strokeStyle="rgba(34, 28, 25, 0.88)",vt(e,t.x,t.y,t.width,t.height,t.radius),e.stroke();const a=Math.min(t.width,t.height)*.18,o=t.x+t.width/2,s=t.y+t.height/2;e.beginPath(),e.arc(o,s,a,0,Math.PI*2),e.stroke(),e.beginPath(),e.moveTo(o-a*.42,s),e.lineTo(o+a*.42,s),e.moveTo(o,s-a*.42),e.lineTo(o,s+a*.42),e.stroke(),e.restore()}async function Bt(e,t,a={}){const m=document.createElement("canvas");m.width=2480,m.height=3508;const l=m.getContext("2d");if(!l)return"";const i=2480/1240;return l.imageSmoothingEnabled=!0,l.imageSmoothingQuality="high",l.fillStyle=e.backgroundColor||"#f8f4ee",l.fillRect(0,0,2480,3508),l.scale(i,i),await Fi(e.templateId).render(l,e,t,{addWrappedText:Sa,clipRoundedRect:vt,drawFileCover:$a,drawSlotPlaceholder:Ta,defaults:Gt,page8Files:a.page8Files||{}}),m.toDataURL("image/png")}function ka(){var bt,xt;const e=document.querySelector(".page--compose");if(!e)return;const t=e.dataset.composeStage||"select",a=document.getElementById("composeForm"),o=a||e,s=document.getElementById("composeSheet"),h=(s==null?void 0:s.querySelector(".compose-sheet__frame"))||null,m=(s==null?void 0:s.querySelector("[data-custom-canvas]"))||null,l=((bt=Ne(c.composeEditingPostId))==null?void 0:bt.composeData)||null,i={...Gt,...l||{}},p={imageInputPrimary:"",imageInputSecondary:"",imageInputAccent:""},y={primary:{file:null,position:{x:.5,y:.5},imageSize:null},secondary:{file:null,position:{x:.5,y:.5},imageSize:null},accent:{file:null,position:{x:.5,y:.5},imageSize:null}},$=document.querySelector("[data-toggle-compose-tags]"),E=document.querySelector("[data-compose-tags]"),I=document.querySelector("[data-toggle-compose-preview]"),B=document.querySelector("[data-custom-template-controls]"),T=document.querySelector("[data-custom-inspector]"),U=document.querySelector("[data-compose-pretext-host]"),N=Array.from(document.querySelectorAll("[data-editable]")),x={options:Xt((l==null?void 0:l.customLayout)||{}),imageBoxes:pt((l==null?void 0:l.customLayout)||{}),textBoxes:ut((l==null?void 0:l.customLayout)||{},i),selectedId:null,imageMode:"frame"},G={},de={headline:document.querySelector('[data-editable="headline"]'),subhead:document.querySelector('[data-editable="subhead"]'),intro:document.querySelector('[data-editable="intro"]'),body:document.querySelector('[data-editable="body"]'),date:document.querySelector('[data-editable="date"]'),editor:document.querySelector('[data-editable="editor"]')},re={primary:document.querySelector('[data-slot="imageInputPrimary"]'),secondary:document.querySelector('[data-slot="imageInputSecondary"]'),accent:document.querySelector('[data-slot="imageInputAccent"]')},X=n=>{c.composeStage=n,ae()};function L(n){return new Promise(r=>{const d=new Image,w=URL.createObjectURL(n);d.onload=()=>{r({width:d.naturalWidth,height:d.naturalHeight}),URL.revokeObjectURL(w)},d.onerror=()=>{r(null),URL.revokeObjectURL(w)},d.src=w})}function P(n){const r=document.querySelector(`[data-slot-image="${n}"]`),w=y[n==="imageInputPrimary"?"primary":n==="imageInputSecondary"?"secondary":"accent"];r&&(r.style.backgroundPosition=`${(w.position.x||.5)*100}% ${(w.position.y||.5)*100}%`)}function H(n){return String(n??"").replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#39;")}function O(n){return`${n}-${Date.now().toString(36)}-${Math.random().toString(36).slice(2,7)}`}function C(n){return G[n]||(G[n]={file:null,position:{x:.5,y:.5,zoom:1},imageSize:null,previewUrl:""}),G[n]}function V(n){return n==="title"?{kind:"title",fontSize:.046,lineHeight:1.12,padding:.01,family:"serif",weight:600,align:"left"}:{kind:"body",fontSize:.026,lineHeight:1.45,padding:.012,family:"sans",weight:500,align:"left"}}function pe(n,r){Object.assign(n,{...n,...V(r)})}function Le(n){if(n.dataset.singleLine==="true"){n.innerText=n.innerText.replace(/\r?\n+/g," ");return}n.innerHTML=n.innerHTML.replace(/<div><br><\/div>/gi,"<br>").replace(/<div>/gi,"<br>").replace(/<\/div>/gi,"").replace(/&nbsp;/gi," ")}function Ie(n){const r=Number(n.dataset.maxChars||0),d=n.innerText.replace(/\r/g,"");if(n.dataset.previousValue||(n.dataset.previousValue=d),r&&d.length>r||n.scrollHeight>n.clientHeight+1||n.scrollWidth>n.clientWidth+1){n.innerText=n.dataset.previousValue;return}n.dataset.previousValue=d.trim()?d:""}function xe(n){return n.innerText.replace(/\r/g,"")}function Ee(n){const r=window.getSelection();if(!r)return;const d=document.createRange();d.selectNodeContents(n),d.collapse(!1),r.removeAllRanges(),r.addRange(d)}function Ge(n){const r=window.getSelection();if(!r||r.rangeCount===0)return 0;const d=r.getRangeAt(0);return!n.contains(d.startContainer)||!n.contains(d.endContainer)?0:r.toString().length}function $e(n,r){const d=window.getSelection();if(!d||d.rangeCount===0){n.append(document.createTextNode(r)),Ee(n);return}const w=d.getRangeAt(0);w.deleteContents();const M=document.createTextNode(r);w.insertNode(M),w.setStartAfter(M),w.collapse(!0),d.removeAllRanges(),d.addRange(w)}function We(n){!e||!I||(e.classList.toggle("is-preview-mode",n),I.textContent=n?"back":"preview",I.setAttribute("aria-pressed",String(n)),N.forEach(r=>{r.setAttribute("contenteditable",n?"false":"true"),n&&r.blur()}),(s==null?void 0:s.dataset.template)==="page8"&&Q())}function ye(n){const r=document.querySelector(`[data-editable="${n}"]`);return r?r.innerText.replace(/\r/g,"").trim():""}function qe(){const n=o.querySelector('input[name="backgroundColor"]:checked'),r=(n==null?void 0:n.value)||c.composeBackgroundColor||"#f8f4ee";if(c.composeBackgroundColor=r,!s){o.querySelectorAll(".color-chip").forEach(d=>{const w=d.querySelector('input[name="backgroundColor"]');d.classList.toggle("is-active",!!(w!=null&&w.checked))});return}s.style.setProperty("--sheet-bg",r),o.querySelectorAll(".color-chip").forEach(d=>{const w=d.querySelector('input[name="backgroundColor"]');d.classList.toggle("is-active",!!(w!=null&&w.checked))})}function Je(n){const r=n||Pe,d=(s==null?void 0:s.dataset.template)||(U?"page8":null),w=t==="edit"&&d&&d!==r&&(d==="page8"||r==="page8");if(c.composeTemplateId=r,w){ae();return}if(!s){o.querySelectorAll(".template-thumb").forEach(u=>{const g=u.querySelector('input[name="templateId"]');u.classList.toggle("is-active",(g==null?void 0:g.value)===r)}),U&&r!=="page8"&&ae();return}s.dataset.template=r,o.querySelectorAll(".template-thumb").forEach(u=>{const g=u.querySelector('input[name="templateId"]');u.classList.toggle("is-active",(g==null?void 0:g.value)===r)});const M=r==="page8";B&&(B.hidden=!0),s.classList.toggle("compose-sheet--custom",M),Ce()}function Ve(n){var d;const r=o.querySelector(`input[name="templateId"][value="${n}"]`);(d=r==null?void 0:r.closest(".template-thumb"))==null||d.scrollIntoView({behavior:"smooth",block:"nearest",inline:"center"})}function Ze(n){var d;const r=o.querySelector(`input[name="backgroundColor"][value="${n}"]`);(d=r==null?void 0:r.closest(".color-chip"))==null||d.scrollIntoView({behavior:"smooth",block:"nearest",inline:"center"})}function ze(n){const r=document.querySelector(`[data-slot-image="${n}"]`),d=document.querySelector(`[data-slot-placeholder="${n}"]`),w=document.querySelector(`[data-slot-remove="${n}"]`);if(!(!r||!d||!w)){if(p[n]){r.style.backgroundImage=`url("${p[n]}")`,r.hidden=!1,d.hidden=!0,w.hidden=!1;return}r.style.backgroundImage="",r.hidden=!0,d.hidden=!1,w.hidden=!0}}function le(n,r){const d=Math.min(R.width,Math.max(r.width,n.width)),w=Math.min(R.height,Math.max(r.height,n.height));return{...n,x:Math.min(R.x+R.width-d,Math.max(R.x,_e(n.x))),y:Math.min(R.y+R.height-w,Math.max(R.y,_e(n.y))),width:_e(d),height:_e(w)}}function Oe(n,r,d=.02){return!(n.x+n.width+d<=r.x||r.x+r.width+d<=n.x||n.y+n.height+d<=r.y||r.y+r.height+d<=n.y)}function k(n){return{x:n.x,y:n.y,width:n.width,height:n.height}}function A(n,r={}){const{ignoreText:d=!1,ignoreImages:w=!1}=r;return[...w?[]:x.imageBoxes.filter(M=>M.id!==n).map(M=>k(M)),...d?[]:x.textBoxes.filter(M=>M.id!==n).map(M=>k(M))]}function q(n,r,d={}){const w=k(n);return!A(r,d).some(u=>Oe(w,u))}function z(n,r,d,w={}){const M=le({...n},d);if(q(M,r,w))return M;const u=[[0,-1],[1,0],[0,1],[-1,0],[1,-1],[1,1],[-1,1],[-1,-1]],g=De*2;for(let _=1;_<=18;_+=1)for(const[v,b]of u){const S=le({...M,x:M.x+v*g*_,y:M.y+b*g*_},d);if(q(S,r,w))return S}for(let _=R.y;_<=R.y+R.height-M.height;_+=g)for(let v=R.x;v<=R.x+R.width-M.width;v+=g){const b=le({...M,x:v,y:_},d);if(q(b,r,w))return b}return M}function te(n,r,d=.018){const w=n.y-d,M=n.y+n.height+d,u=R.x,g=R.x+R.width;let _=[{left:u,right:g}];return r.forEach(v=>{const b=v.y-d;if(v.y+v.height+d<=w||b>=M)return;const f=Math.max(u,v.x-d),D=Math.min(g,v.x+v.width+d);_=_.flatMap(J=>{if(D<=J.left||f>=J.right)return[J];const F=[];return f>J.left&&F.push({left:J.left,right:f}),D<J.right&&F.push({left:D,right:J.right}),F})}),_.filter(v=>v.right-v.left>=n.width)}function oe(n,r){const d=le({...n},ke),w=[];for(let g=0;g<=24;g+=1){const _=_e(d.y-g*De),v=_e(d.y+g*De);_>=R.y&&w.push(_),v<=R.y+R.height-d.height&&v!==_&&w.push(v)}let M=d,u=Number.POSITIVE_INFINITY;return w.forEach(g=>{const _={...d,y:g};te(_,r).forEach(b=>{const S=b.left,f=b.right-d.width,D=_e(Math.min(f,Math.max(S,d.x))),J=le({...d,x:D,y:g},ke);if(r.some(me=>Oe(k(J),me)))return;const F=Math.abs(J.x-d.x),ce=Math.abs(J.y-d.y)*2+F;ce<u&&(u=ce,M=J)})}),M}function ie(n){const r=Y(n);!r||r.type!=="image"||(x.textBoxes=x.textBoxes.map(d=>{const w=[...x.imageBoxes.filter(M=>M.id!==d.id).map(M=>k(M)),...x.textBoxes.filter(M=>M.id!==d.id).map(M=>k(M))];return oe(d,w)}))}function ve(n){return[...x.imageBoxes.filter(r=>r.id!==n).map(r=>k(r)),...x.textBoxes.filter(r=>r.id!==n).map(r=>k(r))]}function Y(n){const r=x.imageBoxes.findIndex(w=>w.id===n);if(r>=0)return{type:"image",collection:x.imageBoxes,index:r,item:x.imageBoxes[r]};const d=x.textBoxes.findIndex(w=>w.id===n);return d>=0?{type:"text",collection:x.textBoxes,index:d,item:x.textBoxes[d]}:null}function ue(n){return n==="image"?dt:ke}function Z(n){return`${Math.round(n*100)}%`}function ee(n,r={}){const{rerender:d=!1}=r;if(!h||!m)return;const w=n?Y(n):null;if(!w||w.type!=="text")return;const M=m.querySelector(`[data-custom-text="${n}"]`);if(!M)return;const u=h.getBoundingClientRect();if(!u.height)return;const g=Math.max(ke.height,_e((M.scrollHeight+8)/u.height));if(!(Math.abs(g-w.item.height)<De/2)){if(w.item.height=g,Object.assign(w.item,le(w.item,ke)),Object.assign(w.item,oe(w.item,ve(n))),d){Q();return}he(n,w.item),ge()}}function we(){m&&m.querySelectorAll("[data-custom-item]").forEach(n=>{n.classList.toggle("is-selected",n.dataset.customItem===x.selectedId)})}function he(n,r){const d=m==null?void 0:m.querySelector(`[data-custom-item="${n}"]`);if(!d)return;const w=rt(r);d.style.left=w.left,d.style.top=w.top,d.style.width=w.width,d.style.height=w.height}function Qe(){[...x.imageBoxes,...x.textBoxes].forEach(n=>{he(n.id,n)})}function Xe(n,r={}){const{rerender:d=!1}=r;if(x.selectedId=n,d&&(s==null?void 0:s.dataset.template)==="page8"){Q();return}we(),ge()}function ge(){var r,d,w,M,u,g,_,v;if(!T||(s==null?void 0:s.dataset.template)!=="page8")return;const n=x.selectedId?Y(x.selectedId):null;if(!n){T.innerHTML=`
        <p class="compose-custom-inspector__title">Selection</p>
        <p class="compose-custom-inspector__note">ボックスを選ぶと、ここで内容や見た目を調整できます。</p>
      `;return}if(n.type==="image"){const b=C(n.item.id),S=!!(b.previewUrl||b.file),f=Math.max(1,Number((r=b.position)==null?void 0:r.zoom)||1);T.innerHTML=`
        <p class="compose-custom-inspector__title">Image Box</p>
        <p class="compose-custom-inspector__note">${x.imageMode==="crop"?"Crop 中は画像面をドラッグして見せ方を調整します。":"Frame 中はボックス自体を動かします。Crop に切り替えると画像だけを動かせます。"}</p>
        <div class="compose-custom-inspector__meta">
          <span>W ${Z(n.item.width)}</span>
          <span>H ${Z(n.item.height)}</span>
        </div>
        <div class="compose-custom-inspector__field">
          <span>Mode</span>
          <div class="compose-custom-inspector__segmented compose-custom-inspector__segmented--dual">
            <button type="button" data-custom-image-mode="frame" class="${x.imageMode==="frame"?"is-active":""}">Frame</button>
            <button type="button" data-custom-image-mode="crop" class="${x.imageMode==="crop"?"is-active":""}" ${S?"":"disabled"}>Crop</button>
          </div>
        </div>
        <label class="compose-custom-inspector__field">
          <span>Zoom</span>
          <input class="compose-custom-inspector__range" data-custom-control="zoom" type="range" min="1" max="3" step="0.01" value="${f}" ${S?"":"disabled"} />
        </label>
        <div class="compose-custom-inspector__segmented compose-custom-inspector__segmented--dual">
          <button type="button" data-custom-control="replace-image">${S?"Replace":"Upload"}</button>
          <button type="button" data-custom-control="delete">Delete</button>
        </div>
      `,T.querySelectorAll("[data-custom-image-mode]").forEach(D=>{D.addEventListener("click",()=>{D.hasAttribute("disabled")||(x.imageMode=D.dataset.customImageMode==="crop"?"crop":"frame",ge())})}),(d=T.querySelector('[data-custom-control="zoom"]'))==null||d.addEventListener("input",D=>{b.position.zoom=Math.max(1,Number(D.target.value)||1),Q()}),(w=T.querySelector('[data-custom-control="replace-image"]'))==null||w.addEventListener("click",()=>{var D;(D=document.getElementById(`custom-image-${n.item.id}`))==null||D.click()})}else{T.innerHTML=`
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
    `;const b=T.querySelector('[data-custom-control="text"]');b==null||b.addEventListener("focus",S=>{const f=x.selectedId?Y(x.selectedId):null;if(!(!f||f.type!=="text")&&f.item.isDefaultText&&f.item.text.trim().toLowerCase()==="text"){f.item.text="",f.item.isDefaultText=!1,S.target.value="";const D=m==null?void 0:m.querySelector(`[data-custom-text="${f.item.id}"]`);D&&(D.textContent="")}}),b==null||b.addEventListener("input",S=>{const f=x.selectedId?Y(x.selectedId):null;if(!f||f.type!=="text")return;f.item.text=S.target.value.replace(/\r/g,""),f.item.isDefaultText=!1;const D=m==null?void 0:m.querySelector(`[data-custom-text="${f.item.id}"]`);D&&D!==document.activeElement&&(D.textContent=f.item.text),ee(f.item.id)}),T.querySelectorAll("[data-custom-preset]").forEach(S=>{S.addEventListener("click",()=>{const f=x.selectedId?Y(x.selectedId):null;!f||f.type!=="text"||(pe(f.item,S.dataset.customPreset==="title"?"title":"body"),Q(),ee(f.item.id,{rerender:!0}))})}),(M=T.querySelector('[data-custom-control="fontSize"]'))==null||M.addEventListener("input",S=>{const f=x.selectedId?Y(x.selectedId):null;!f||f.type!=="text"||(f.item.fontSize=Number(S.target.value)/520,Q(),ee(f.item.id,{rerender:!0}))}),(u=T.querySelector('[data-custom-control="lineHeight"]'))==null||u.addEventListener("input",S=>{const f=x.selectedId?Y(x.selectedId):null;!f||f.type!=="text"||(f.item.lineHeight=Number(S.target.value)/100,Q(),ee(f.item.id,{rerender:!0}))}),(g=T.querySelector('[data-custom-control="padding"]'))==null||g.addEventListener("input",S=>{const f=x.selectedId?Y(x.selectedId):null;!f||f.type!=="text"||(f.item.padding=Number(S.target.value)/1e3,Q(),ee(f.item.id,{rerender:!0}))}),(_=T.querySelector('[data-custom-control="weight"]'))==null||_.addEventListener("input",S=>{const f=x.selectedId?Y(x.selectedId):null;!f||f.type!=="text"||(f.item.weight=Number(S.target.value),Q(),ee(f.item.id,{rerender:!0}))}),T.querySelectorAll("[data-custom-align]").forEach(S=>{S.addEventListener("click",()=>{const f=x.selectedId?Y(x.selectedId):null;!f||f.type!=="text"||(f.item.align=S.dataset.customAlign||"left",Q())})}),T.querySelectorAll("[data-custom-family]").forEach(S=>{S.addEventListener("click",()=>{const f=x.selectedId?Y(x.selectedId):null;!f||f.type!=="text"||(f.item.family=S.dataset.customFamily==="serif"?"serif":"sans",f.item.kind=f.item.family==="serif"?"title":"body",f.item.weight=f.item.family==="serif"?Math.max(500,f.item.weight):Math.min(600,f.item.weight),Q(),ee(f.item.id,{rerender:!0}))})})}(v=T.querySelector('[data-custom-control="delete"]'))==null||v.addEventListener("click",()=>{const b=x.selectedId,S=b?Y(b):null;if(S){if(S.collection.splice(S.index,1),S.type==="image"){const f=G[b];f!=null&&f.previewUrl&&URL.revokeObjectURL(f.previewUrl),delete G[b],ie(b)}x.selectedId=null,Q()}})}function Q(){if(!m||!s)return;const n=s.dataset.template==="page8",r=t==="edit"&&!(e!=null&&e.classList.contains("is-preview-mode"));if(m.hidden=!n,!n){m.innerHTML="",ge();return}const d=[...x.imageBoxes.map(u=>u.id),...x.textBoxes.map(u=>u.id)];(!x.selectedId||!d.includes(x.selectedId))&&(x.selectedId=d[0]||null);const w=x.imageBoxes.map(u=>{const g=rt(u),_=C(u.id),v=!!(_.previewUrl||_.file),b=_.position||{x:.5,y:.5,zoom:1},S=`${x.selectedId===u.id?" is-selected":""}${v?"":" is-empty"}`,f=v?`<img class="compose-custom-item__image" src="${_.previewUrl}" alt="" draggable="false" style="object-position:${(b.x||.5)*100}% ${(b.y||.5)*100}%;transform:scale(${Math.max(1,b.zoom||1)});" />`:`<div class="compose-custom-item__placeholder"><span class="compose-custom-item__plus">${j("compose")}</span></div>`;return`
        <div
          class="compose-custom-item compose-custom-item--image${S}"
          data-custom-item="${u.id}"
          data-custom-type="image"
          style="left:${g.left};top:${g.top};width:${g.width};height:${g.height};"
        >
          ${r?`<input class="field__file" id="custom-image-${u.id}" type="file" accept="image/*" />`:""}
          ${r?`<div class="compose-custom-item__surface compose-custom-item__surface--image" data-custom-surface="${u.id}">${f}</div>`:`<div class="compose-custom-item__surface compose-custom-item__surface--image">${f}</div>`}
          ${r?`<button class="compose-custom-item__drag" type="button" data-custom-drag="${u.id}" aria-label="move image box">${j("drag")}</button>`:""}
          ${r?`<button class="compose-custom-item__remove" type="button" data-custom-remove="${u.id}" aria-label="remove image box">&times;</button>`:""}
          ${r?`<button class="compose-custom-item__resize" type="button" data-custom-resize="${u.id}" aria-label="resize image box"></button>`:""}
        </div>
      `}).join(""),M=x.textBoxes.map(u=>{const g=rt(u);return`
        <div
          class="compose-custom-item compose-custom-item--text${x.selectedId===u.id?" is-selected":""}"
          data-custom-item="${u.id}"
          data-custom-type="text"
          style="left:${g.left};top:${g.top};width:${g.width};height:${g.height};"
        >
          <div
            class="compose-custom-item__text"
            data-custom-text="${u.id}"
            contenteditable="${r?"true":"false"}"
            spellcheck="false"
            style="text-align:${u.align};font-size:${Math.max(11,u.fontSize*520)}px;line-height:${u.lineHeight};padding:${Math.max(4,u.padding*520)}px;font-family:${u.family==="serif"?"'Cormorant Garamond', 'Times New Roman', serif":"'Noto Sans JP', sans-serif"};font-weight:${u.weight};"
          >${H(u.text)}</div>
          ${r?`<button class="compose-custom-item__drag" type="button" data-custom-drag="${u.id}" aria-label="move text box">${j("drag")}</button>`:""}
          ${r?`<button class="compose-custom-item__remove" type="button" data-custom-remove="${u.id}" aria-label="remove text box">&times;</button>`:""}
          ${r?`<button class="compose-custom-item__resize" type="button" data-custom-resize="${u.id}" aria-label="resize text box"></button>`:""}
        </div>
      `}).join("");m.innerHTML=`${w}${M}`,ge(),m.onpointerdown=u=>{u.target===m&&(x.selectedId=null,we(),ge())},m.querySelectorAll("[data-custom-item]").forEach(u=>{let g=null;u.addEventListener("pointerdown",v=>{var be,Te;const b=u.dataset.customItem||"",S=Y(b);if(!S||!h||v.target.closest("[data-custom-remove], [data-custom-resize]"))return;v.preventDefault();const f=v.target.closest("[data-custom-drag]"),D=v.target.closest("[data-custom-text]"),J=v.target.closest("[data-custom-surface]"),F=S.type==="image"?C(b):null;Xe(b);const K=h.getBoundingClientRect(),ce=!!(F!=null&&F.previewUrl||F!=null&&F.file),me=S.type==="image"&&x.imageMode==="crop"&&ce&&J&&!f;g={pointerId:v.pointerId,itemId:b,mode:me?"crop-image":"move",originX:me?F.position.x||.5:S.item.x,originY:me?F.position.y||.5:S.item.y,startX:v.clientX,startY:v.clientY,frameWidth:K.width,frameHeight:K.height,type:S.type,zoom:((be=F==null?void 0:F.position)==null?void 0:be.zoom)||1,targetSurface:S.type==="image"&&!ce?J:null,targetText:f?null:D,cropSurface:me?J:null,dragged:!1},(Te=u.setPointerCapture)==null||Te.call(u,v.pointerId)}),u.addEventListener("pointermove",v=>{var J,F;if(!g||g.pointerId!==v.pointerId)return;const b=v.clientX-g.startX,S=v.clientY-g.startY;if(!g.dragged&&Math.hypot(b,S)<6)return;g.dragged=!0,v.preventDefault();const f=Y(g.itemId);if(!f)return;const D={x:f.item.x,y:f.item.y,width:f.item.width,height:f.item.height};if(g.mode==="crop-image"){const K=(J=g.cropSurface)==null?void 0:J.getBoundingClientRect(),ce=C(g.itemId),me=ce.imageSize;if(!K||!me)return;const be=me.width/me.height,Te=K.width/K.height,Ae=(be>Te?K.height*be:K.width)*g.zoom,ii=(be>Te?K.height:K.width/be)*g.zoom,wt=Math.max(0,Ae-K.width),_t=Math.max(0,ii-K.height);ce.position.x=wt?Math.min(1,Math.max(0,g.originX-b/wt)):.5,ce.position.y=_t?Math.min(1,Math.max(0,g.originY-S/_t)):.5;const St=(F=g.cropSurface)==null?void 0:F.querySelector(".compose-custom-item__image");St&&(St.style.objectPosition=`${ce.position.x*100}% ${ce.position.y*100}%`)}else{f.item.x=g.originX+b/g.frameWidth,f.item.y=g.originY+S/g.frameHeight,Object.assign(f.item,le(f.item,ue(f.type)));const K=f.type==="image"?{ignoreText:!0}:{};Object.assign(f.item,z(f.item,f.item.id,ue(f.type),K)),q(f.item,f.item.id,K)||Object.assign(f.item,D),f.type==="image"?ie(f.item.id):Object.assign(f.item,oe(f.item,ve(f.item.id))),ge(),Qe()}});const _=v=>{var J,F;if(!g||g.pointerId!==v.pointerId)return;const b=g.itemId,S=g.dragged,f=g.targetSurface,D=g.targetText;if(g=null,(J=u.releasePointerCapture)==null||J.call(u,v.pointerId),!S){if(f){(F=document.getElementById(`custom-image-${b}`))==null||F.click();return}D&&(D.focus(),Ee(D))}};u.addEventListener("pointerup",_),u.addEventListener("pointercancel",_)}),m.querySelectorAll("[data-custom-remove]").forEach(u=>{u.addEventListener("click",g=>{g.preventDefault(),g.stopPropagation();const _=u.dataset.customRemove,v=_?Y(_):null;if(v){if(v.collection.splice(v.index,1),v.type==="image"){const b=G[_];b!=null&&b.previewUrl&&URL.revokeObjectURL(b.previewUrl),delete G[_],ie(_)}x.selectedId=null,Q()}})}),m.querySelectorAll("[data-custom-text]").forEach(u=>{u.addEventListener("beforeinput",g=>{g.inputType==="insertParagraph"&&($e(u,`
`),g.preventDefault())}),u.addEventListener("focus",()=>{const g=u.dataset.customText,_=g?Y(g):null;(_==null?void 0:_.type)==="text"&&_.item.isDefaultText&&_.item.text.trim().toLowerCase()==="text"&&(_.item.text="",_.item.isDefaultText=!1,u.textContent=""),Xe(u.dataset.customText||"")}),u.addEventListener("input",()=>{const g=u.dataset.customText,_=g?Y(g):null;if(!_)return;_.item.text=u.innerText.replace(/\r/g,""),_.item.isDefaultText=!1;const v=T==null?void 0:T.querySelector('[data-custom-control="text"]');v&&v!==document.activeElement&&(v.value=_.item.text),ee(_.item.id)})}),m.querySelectorAll('input[id^="custom-image-"]').forEach(u=>{u.addEventListener("change",async g=>{var S;const _=u.id.replace("custom-image-",""),v=C(_),b=((S=g.target.files)==null?void 0:S[0])||null;v.previewUrl&&(URL.revokeObjectURL(v.previewUrl),v.previewUrl=""),v.file=b,v.position={x:.5,y:.5,zoom:1},v.imageSize=b?await L(b):null,b&&(v.previewUrl=ht(b)),ie(_),Q()})}),m.querySelectorAll("[data-custom-resize]").forEach(u=>{let g=null;u.addEventListener("pointerdown",v=>{var D;const b=u.dataset.customResize||"",S=Y(b);if(!S||!h)return;v.preventDefault(),v.stopPropagation(),Xe(b);const f=h.getBoundingClientRect();g={pointerId:v.pointerId,itemId:b,originX:S.item.x,originY:S.item.y,originWidth:S.item.width,originHeight:S.item.height,startX:v.clientX,startY:v.clientY,frameWidth:f.width,frameHeight:f.height,type:S.type},(D=u.setPointerCapture)==null||D.call(u,v.pointerId)}),u.addEventListener("pointermove",v=>{if(!g||g.pointerId!==v.pointerId)return;v.preventDefault();const b=Y(g.itemId);if(!b)return;const S=ue(g.type),f={x:b.item.x,y:b.item.y,width:b.item.width,height:b.item.height};b.item.width=g.originWidth+(v.clientX-g.startX)/g.frameWidth,b.item.height=g.originHeight+(v.clientY-g.startY)/g.frameHeight,Object.assign(b.item,le(b.item,S));const D=b.type==="image"?{ignoreText:!0}:{};Object.assign(b.item,z(b.item,b.item.id,S,D)),q(b.item,b.item.id,D)||Object.assign(b.item,f),b.type==="image"&&ie(b.item.id),ge(),Qe()});const _=v=>{var b;!g||g.pointerId!==v.pointerId||(g=null,(b=u.releasePointerCapture)==null||b.call(u,v.pointerId))};u.addEventListener("pointerup",_),u.addEventListener("pointercancel",_)}),window.requestAnimationFrame(()=>{x.textBoxes.forEach(u=>{ee(u.id)})})}function Ce(){if(!s||!h)return;const n=s.dataset.template==="page8";if(Object.values(re).forEach(r=>{r&&(r.style.left="",r.style.top="",r.style.width="",r.style.height="")}),Object.entries(de).forEach(([r,d])=>{d&&(d.style.left="",d.style.top="",d.style.width="",d.style.height="",d.style.fontSize="",d.style.lineHeight="",d.style.textAlign="",r==="editor"&&(d.style.right=""),r==="body"&&(d.style.bottom=""),r==="date"&&(d.style.bottom=""))}),B&&(B.hidden=!n||t!=="edit"),!n){m&&(m.hidden=!0,m.innerHTML="");return}x.imageBoxes=pt({imageBoxes:x.imageBoxes}),x.textBoxes=ut({textBoxes:x.textBoxes},i),Q()}if(o.querySelectorAll('input[name="backgroundColor"]').forEach(n=>{n.addEventListener("change",()=>{qe(),Ze(n.value)})}),qe(),window.setTimeout(()=>{var n;Ze((n=o.querySelector('input[name="backgroundColor"]:checked'))==null?void 0:n.value)},0),o.querySelectorAll('input[name="templateId"]').forEach(n=>{n.addEventListener("change",()=>{Je(n.value),Ve(n.value)})}),Je(c.composeTemplateId||((xt=o.querySelector('input[name="templateId"]:checked'))==null?void 0:xt.value)),window.setTimeout(()=>{var n;Ve(c.composeTemplateId||((n=o.querySelector('input[name="templateId"]:checked'))==null?void 0:n.value))},0),document.querySelectorAll("[data-template-carousel-nav]").forEach(n=>{n.addEventListener("click",()=>{const r=document.querySelector("[data-template-carousel]");if(!r)return;const d=n.dataset.templateCarouselNav==="next"?1:-1;r.scrollBy({left:r.clientWidth*.72*d,behavior:"smooth"})})}),document.querySelectorAll("[data-color-carousel-nav]").forEach(n=>{n.addEventListener("click",()=>{const r=document.querySelector("[data-color-carousel]");if(!r)return;const d=n.dataset.colorCarouselNav==="next"?1:-1;r.scrollBy({left:r.clientWidth*.72*d,behavior:"smooth"})})}),document.querySelectorAll("[data-compose-stage-nav]").forEach(n=>{n.addEventListener("click",()=>{const r=n.dataset.composeStageNav;r&&X(r)})}),t!=="select"&&a){if($&&E&&$.addEventListener("click",()=>{const n=!E.hidden;E.hidden=n,$.setAttribute("aria-expanded",String(!n))}),I&&I.addEventListener("click",()=>{const n=!(e!=null&&e.classList.contains("is-preview-mode"));We(!!n)}),We(!1),U){let n=null;ai(async()=>{const{mountComposePretextEditor:r}=await import("./pretextComposeBridge-B1CUVJoK.js");return{mountComposePretextEditor:r}},__vite__mapDeps([0,1,2,3,4]),import.meta.url).then(({mountComposePretextEditor:r})=>{U.isConnected&&(n=r(U,{customLayout:(l==null?void 0:l.customLayout)||{},textValues:i}),Be=n)}).catch(r=>{console.error("Failed to mount pretext compose editor",r),U.innerHTML='<p class="compose-pretext-host__error">Failed to load the editor.</p>'}),a.addEventListener("submit",async r=>{var b;if(r.preventDefault(),!n)return;const d=new FormData(a),w=d.getAll("fixedTags").map(S=>String(S)),M=String(d.get("freeTags")||"").split(",").map(S=>S.trim()).filter(Boolean),u=n.getSerializedLayout(),g={templateId:"page8",backgroundColor:String(d.get("backgroundColor")||c.composeBackgroundColor||"#f8f4ee"),headline:"",subhead:"",intro:"",body:"",date:"",editor:"",customLayout:u},_=await Bt(g,y,{}),v=String(((b=He().profile)==null?void 0:b.name)||"you").trim()||"you";c.composeEditingPostId?Tt(c.composeEditingPostId,{caption:et(g),imageData:_,fixedTags:w,freeTags:M,composeData:{...g,fixedTags:w,freeTags:M}}):$t({authorName:v,caption:et(g),imageData:_,fixedTags:w,freeTags:M,composeData:{...g,fixedTags:w,freeTags:M}}),c.screen="timeline",c.timelineTab="recommended",c.composeStage="edit",ae()});return}o.querySelectorAll("[data-custom-add]").forEach(n=>{n.addEventListener("click",r=>{r.preventDefault();const d=n.dataset.customAdd;if((s==null?void 0:s.dataset.template)!=="page8")return;if(d==="image"){const M={id:O("image"),x:.14,y:.18,width:.28,height:.22};x.imageBoxes=[...x.imageBoxes,le(M,dt)],x.selectedId=M.id,C(M.id),ie(M.id),Q();return}const w=oe({id:O("text"),kind:"body",text:"text",isDefaultText:!0,x:.18,y:.2,width:.28,height:.12,fontSize:.026,lineHeight:1.45,padding:.012,align:"left",family:"sans",weight:500},[...x.imageBoxes.map(M=>k(M)),...x.textBoxes.map(M=>k(M))]);x.textBoxes=[...x.textBoxes,le(w,ke)],x.selectedId=w.id,Q()})}),[{inputId:"imageInputPrimary",stateKey:"primary"},{inputId:"imageInputSecondary",stateKey:"secondary"},{inputId:"imageInputAccent",stateKey:"accent"}].forEach(({inputId:n,stateKey:r})=>{const d=document.querySelector(`[data-slot="${n}"]`),w=document.getElementById(n);if(!w)return;w.addEventListener("change",async u=>{var _;const g=((_=u.target.files)==null?void 0:_[0])||null;y[r].file=g,y[r].position={x:.5,y:.5},y[r].imageSize=g?await L(g):null,p[n]&&(URL.revokeObjectURL(p[n]),p[n]=""),g&&(p[n]=ht(g)),ze(n),P(n)});const M=document.querySelector(`[data-slot-remove="${n}"]`);if(M&&M.addEventListener("click",u=>{u.preventDefault(),u.stopPropagation(),p[n]&&(URL.revokeObjectURL(p[n]),p[n]=""),y[r]={file:null,position:{x:.5,y:.5},imageSize:null},w.value="",ze(n)}),d){let u=null;d.addEventListener("pointerdown",_=>{var v,b;if(!(e!=null&&e.classList.contains("is-preview-mode"))){if((s==null?void 0:s.dataset.template)==="page8"){const S=x.imageBoxes[r];if(!S||!h)return;_.preventDefault(),_.stopPropagation();const f=h.getBoundingClientRect();u={pointerId:_.pointerId,mode:"move-box",startX:_.clientX,startY:_.clientY,originX:S.x,originY:S.y,frameWidth:f.width,frameHeight:f.height},d.classList.add("is-dragging"),(v=d.setPointerCapture)==null||v.call(d,_.pointerId);return}y[r].file&&(_.preventDefault(),_.stopPropagation(),u={pointerId:_.pointerId,mode:"pan-image",startX:_.clientX,startY:_.clientY,originX:y[r].position.x,originY:y[r].position.y},d.classList.add("is-dragging"),(b=d.setPointerCapture)==null||b.call(d,_.pointerId))}}),d.addEventListener("pointermove",_=>{if(!u||u.pointerId!==_.pointerId)return;if(_.preventDefault(),u.mode==="move-box"){const be=u.originX+(_.clientX-u.startX)/u.frameWidth,Te=u.originY+(_.clientY-u.startY)/u.frameHeight,Ae=x.imageBoxes[r];Ae.x=Math.min(R.x+R.width-Ae.width,Math.max(R.x,be)),Ae.y=Math.min(R.y+R.height-Ae.height,Math.max(R.y,Te)),Ce();return}const v=d.getBoundingClientRect(),b=y[r].imageSize;if(!b)return;const S=b.width/b.height,f=v.width/v.height,D=S>f?v.height*S:v.width,J=S>f?v.height:v.width/S,F=Math.max(0,D-v.width),K=Math.max(0,J-v.height),ce=_.clientX-u.startX,me=_.clientY-u.startY;y[r].position.x=F?Math.min(1,Math.max(0,u.originX-ce/F)):.5,y[r].position.y=K?Math.min(1,Math.max(0,u.originY-me/K)):.5,P(n)});const g=_=>{var v;!u||u.pointerId!==_.pointerId||(u=null,d.classList.remove("is-dragging"),(v=d.releasePointerCapture)==null||v.call(d,_.pointerId))};d.addEventListener("pointerup",g),d.addEventListener("pointercancel",g)}ze(n),P(n)}),Ce(),N.forEach(n=>{n.dataset.previousValue=xe(n),n.addEventListener("beforeinput",r=>{var g;if(n.dataset.singleLine==="true"&&(r.inputType==="insertParagraph"||r.inputType==="insertLineBreak")){r.preventDefault();return}const d=Number(n.dataset.maxChars||0);if(!d||!r.inputType.startsWith("insert"))return;const w=xe(n).length,M=Ge(n),u=((g=r.data)==null?void 0:g.length)??1;w-M+u>d&&r.preventDefault()}),n.addEventListener("paste",r=>{var b,S;r.preventDefault();const d=((S=(b=r.clipboardData)==null?void 0:b.getData("text/plain"))==null?void 0:S.replace(/\r/g,""))??"",w=n.dataset.singleLine==="true"?d.replace(/\n+/g," "):d,M=Number(n.dataset.maxChars||0),u=xe(n).length,g=Ge(n),_=M?Math.max(0,M-(u-g)):w.length,v=w.slice(0,_);v&&($e(n,v),n.dataset.previousValue=xe(n))}),n.addEventListener("input",()=>{const r=Number(n.dataset.maxChars||0),d=xe(n);if(r&&d.length>r){n.innerText=n.dataset.previousValue||"",Ee(n);return}n.dataset.previousValue=d}),n.addEventListener("blur",()=>{Le(n),Ie(n)})}),a.addEventListener("submit",async n=>{var S;n.preventDefault();const r=new FormData(a),d=r.getAll("fixedTags").map(f=>String(f)),w=String(r.get("freeTags")||"").split(",").map(f=>f.trim()).filter(Boolean),u=(s==null?void 0:s.dataset.template)==="page8"?Yt({...x.options,imageBoxes:x.imageBoxes,textBoxes:x.textBoxes.map(f=>({...f,text:String(f.text||"").replace(/\r/g,"")}))},i):null,g={templateId:String(r.get("templateId")||c.composeTemplateId||Pe),backgroundColor:String(r.get("backgroundColor")||c.composeBackgroundColor||"#f8f4ee"),headline:ye("headline"),subhead:ye("subhead"),intro:ye("intro"),body:ye("body"),date:ye("date"),editor:ye("editor"),customLayout:u},_=u?Object.fromEntries(u.imageBoxes.map(f=>[f.id,C(f.id)])):{},v=await Bt(g,y,{page8Files:_}),b=String(((S=He().profile)==null?void 0:S.name)||"you").trim()||"you";c.composeEditingPostId?Tt(c.composeEditingPostId,{caption:et(g),imageData:v,fixedTags:d,freeTags:w,composeData:{...g,fixedTags:d,freeTags:w}}):$t({authorName:b,caption:et(g),imageData:v,fixedTags:d,freeTags:w,composeData:{...g,fixedTags:d,freeTags:w}}),c.screen="timeline",c.timelineTab="recommended",c.composeStage="edit",ae()})}}function Ma(){const e=document.getElementById("issueForm");e&&e.addEventListener("submit",t=>{t.preventDefault();const a=new FormData(e),o=a.getAll("issuePostIds").map(s=>String(s));o.length&&(bi({title:String(a.get("title")).trim(),subtitle:String(a.get("subtitle")||"").trim(),tone:String(a.get("tone")||"soft"),postIds:o}),ne())})}function Pa(){ot(document.getElementById("screenArea"));function e(l){return new Promise(i=>{const p=new Image,y=URL.createObjectURL(l);p.onload=()=>{i({width:p.naturalWidth,height:p.naturalHeight}),URL.revokeObjectURL(y)},p.onerror=()=>{i(null),URL.revokeObjectURL(y)},p.src=y})}document.querySelectorAll("[data-profile-avatar-upload]").forEach(l=>{l.addEventListener("click",i=>{i.stopPropagation(),c.profileExpanded=!0,c.profileSection="edit",ne(),window.setTimeout(()=>{var p;(p=document.getElementById("profileAvatarInput"))==null||p.click()},0)})}),document.querySelectorAll("[data-profile-section]").forEach(l=>{l.addEventListener("click",()=>{c.profileSection=l.dataset.profileSection,c.profileSection==="library"&&(c.profileLibraryTab=c.profileLibraryTab||"liked"),ne()})}),document.querySelectorAll("[data-profile-library-tab]").forEach(l=>{l.addEventListener("click",()=>{c.profileLibraryTab=l.dataset.profileLibraryTab||"liked",ne()})});const t=document.getElementById("profileAvatarInput"),a=document.getElementById("avatarCropper"),o=document.getElementById("avatarCropSurface"),s=document.getElementById("avatarCropImage");function h(){if(!(!a||!s)){if(!W.file||!W.previewUrl){a.hidden=!0,s.removeAttribute("src");return}a.hidden=!1,s.src=W.previewUrl,s.style.objectPosition=`${W.crop.x*100}% ${W.crop.y*100}%`,s.style.transform=`scale(${W.crop.zoom})`}}if(t&&t.addEventListener("change",async l=>{var p;const i=((p=l.target.files)==null?void 0:p[0])||null;W.previewUrl&&(URL.revokeObjectURL(W.previewUrl),W.previewUrl=""),W.file=i,W.imageSize=i?await e(i):null,W.crop={x:.5,y:.5,zoom:1},i&&(W.previewUrl=ht(i)),c.profileAvatarCropOpen=!!i,ne()}),o){let l=null;o.addEventListener("pointerdown",p=>{var y;W.file&&(l={pointerId:p.pointerId,startX:p.clientX,startY:p.clientY,originX:W.crop.x,originY:W.crop.y},o.classList.add("is-dragging"),(y=o.setPointerCapture)==null||y.call(o,p.pointerId))}),o.addEventListener("pointermove",p=>{if(!l||l.pointerId!==p.pointerId||!W.imageSize)return;const y=o.getBoundingClientRect(),{width:$,height:E}=W.imageSize,I=$/E,B=y.width/y.height,T=I>B?y.height*I:y.width,U=I>B?y.height:y.width/I,N=T*W.crop.zoom,x=U*W.crop.zoom,G=Math.max(0,N-y.width),de=Math.max(0,x-y.height),re=p.clientX-l.startX,X=p.clientY-l.startY;W.crop.x=G?Math.min(1,Math.max(0,l.originX-re/G)):.5,W.crop.y=de?Math.min(1,Math.max(0,l.originY-X/de)):.5,h()});const i=p=>{var y;!l||l.pointerId!==p.pointerId||(l=null,o.classList.remove("is-dragging"),(y=o.releasePointerCapture)==null||y.call(o,p.pointerId))};o.addEventListener("pointerup",i),o.addEventListener("pointercancel",i)}h();const m=document.getElementById("profileForm");m&&m.addEventListener("submit",async l=>{l.preventDefault();const i=new FormData(m),p=W.file?await la(W.file,W.crop,{size:320}):He().profile.avatarData;yi({name:String(i.get("name")).trim(),bio:String(i.get("bio")).trim(),avatarData:p}),je(),c.profileSection=null,c.profileExpanded=!0,ne()}),document.querySelectorAll("[data-follow-author]").forEach(l=>{l.addEventListener("click",()=>{vi(l.dataset.followAuthor),ne()})})}function La(){ot(document.getElementById("screenArea")),document.querySelectorAll("[data-close-post-detail]").forEach(e=>{e.addEventListener("click",()=>{ei()})})}function Ia(){document.querySelectorAll("[data-close-preview]").forEach(e=>{e.addEventListener("click",()=>{c.previewPostId=null,Fe()})}),document.querySelectorAll("[data-close-comments]").forEach(e=>{e.addEventListener("click",()=>{c.commentPostId=null,Fe()})}),document.querySelectorAll("[data-delete-post]").forEach(e=>{e.addEventListener("click",()=>{const t=e.dataset.deletePost;if(!t)return;const a=Ne(t);if(Zt(a)&&window.confirm("この投稿を削除しますか？")){if(pi(t),c.previewPostId===t&&(c.previewPostId=null),c.commentPostId===t&&(c.commentPostId=null),c.screen==="post"){ei();return}ne()}})}),document.querySelectorAll("[data-comment-form]").forEach(e=>{e.addEventListener("submit",t=>{t.preventDefault();const a=e.querySelector('input[name="comment"]');gi(e.dataset.commentForm,a.value),c.commentPostId=e.dataset.commentForm,Fe(),ne()})})}function Ea(){switch(_a(),c.screen){case"home":ba();break;case"timeline":xa();break;case"search":wa();break;case"compose":ka();break;case"magazine":Ma();break;case"profile":Pa();break;case"post":La();break}}function ti(e=document.getElementById("app")){if(!e)throw new Error("bootLegacyApp requires an app root element.");return Ue=e,ae(),{render:ae}}if(typeof window<"u"&&!window.__MEMORIES_REACT_HOST__){const e=document.getElementById("app");e&&ti(e)}const Aa=Object.freeze(Object.defineProperty({__proto__:null,bootLegacyApp:ti},Symbol.toStringTag,{value:"Module"}));export{R as P,ut as a,Aa as b,pt as n};
