const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["./pretextComposeBridge-DjLZx5c0.js","./main-Doao-IxM.js","./client-CTQ0Ju4c.js","./main-CazS2CVv.css","./pretextComposeBridge-BXwsMVV_.css"])))=>i.map(i=>d[i]);
import{_ as Ti}from"./main-Doao-IxM.js";function ki(){return""}function ei(e){const t=new Date(e),a=t.getFullYear(),o=String(t.getMonth()+1).padStart(2,"0"),s=String(t.getDate()).padStart(2,"0");return`${a}.${o}.${s}`}function ti(e){const t=new Date(e),a=t.getFullYear(),o=String(t.getMonth()+1).padStart(2,"0"),s=String(t.getDate()).padStart(2,"0"),u=String(t.getHours()).padStart(2,"0"),m=String(t.getMinutes()).padStart(2,"0");return`${a}.${o}.${s} ${u}:${m}`}function Mi(e){const t=new Date(e).getTime();return(Date.now()-t)/(1e3*60*60)<=72}function Li(e){const t=Date.now()-new Date(e).getTime(),a=Math.floor(t/6e4);if(a<1)return"たった今";if(a<60)return`${a}分前`;const o=Math.floor(a/60);return o<24?`${o}時間前`:`${Math.floor(o/24)}日前`}function z(e){return{timeline:'<svg viewBox="0 0 24 24" aria-hidden="true" fill="none" stroke="currentColor" stroke-width="1.15" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="2.3" fill="currentColor" stroke="none"/><ellipse cx="12" cy="12" rx="8.8" ry="4.1" transform="rotate(18 12 12)"/><ellipse cx="12" cy="12" rx="8.1" ry="3.3" transform="rotate(78 12 12)"/><ellipse cx="12" cy="12" rx="7.6" ry="5.2" transform="rotate(-40 12 12)"/><circle cx="18.9" cy="6.2" r="1.15" fill="currentColor" stroke="none"/><circle cx="17.8" cy="17.3" r="1" fill="currentColor" stroke="none"/><circle cx="6.1" cy="8" r="0.95" fill="currentColor" stroke="none"/><circle cx="7.1" cy="18.2" r="0.9" fill="currentColor" stroke="none"/><circle cx="11.2" cy="6.4" r="0.9" fill="currentColor" stroke="none"/></svg>',search:'<svg viewBox="0 0 24 24" aria-hidden="true" fill="none" stroke="currentColor" stroke-width="1.15" stroke-linecap="round" stroke-linejoin="round"><ellipse cx="12" cy="6.5" rx="6.9" ry="2.1"/><path d="M5.7 6.8c1 3.1 3 5.6 6.3 11.5"/><path d="M18.3 6.8c-1 3.1-3 5.6-6.3 11.5"/><circle cx="12" cy="19.8" r="1.55" fill="currentColor" stroke="none"/><circle cx="12" cy="9.2" r="0.8" fill="currentColor" stroke="none"/><circle cx="9.2" cy="8.6" r="0.65" fill="currentColor" stroke="none"/><circle cx="14.9" cy="8.3" r="0.65" fill="currentColor" stroke="none"/><circle cx="10.2" cy="11.2" r="0.55" fill="currentColor" stroke="none"/><circle cx="13.8" cy="11" r="0.55" fill="currentColor" stroke="none"/><circle cx="12" cy="12.9" r="0.55" fill="currentColor" stroke="none"/><circle cx="11" cy="15.1" r="0.45" fill="currentColor" stroke="none"/><circle cx="13" cy="15.6" r="0.45" fill="currentColor" stroke="none"/><circle cx="8.2" cy="4.2" r="0.45" fill="currentColor" stroke="none"/><circle cx="15.8" cy="3.9" r="0.45" fill="currentColor" stroke="none"/></svg>',compose:'<svg viewBox="0 0 24 24" aria-hidden="true" fill="none" stroke="currentColor" stroke-width="1.45" stroke-linecap="round"><circle cx="12" cy="12" r="2.45" fill="currentColor" stroke="none"/><path d="M12 2.9v5.1M12 16v5.1M2.9 12h5.1M16 12h5.1M5.5 5.5l3.6 3.6M14.9 14.9l3.6 3.6M18.5 5.5l-3.6 3.6M9.1 14.9l-3.6 3.6"/></svg>',issue:'<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M6 4h12a2 2 0 0 1 2 2v12H8a2 2 0 0 0-2 2z"/><path d="M6 4a2 2 0 0 0-2 2v14h14"/></svg>',profile:'<svg viewBox="0 0 24 24" aria-hidden="true" fill="none" stroke="currentColor" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round"><path d="M3.8 16.8c2.3-2.6 4.9-5.1 7.1-7.6 1.1-1.2 2-2.2 2.7-2.2.7 0 1.1.6 1.1 1.4 0 1.1-.5 2.1-.6 3.2 2.1-2.5 4.3-4.3 6.4-4.3-.6 1.4-1.7 2.6-2.6 3.8-.8 1-.9 1.8.3 1.8h2.1"/><path d="M4.1 17.1c3.8-.2 8.5-.4 16-.7"/><circle cx="20.6" cy="8" r="0.85" fill="currentColor" stroke="none"/></svg>',heart:'<svg viewBox="0 0 24 24" aria-hidden="true" fill="none" stroke="currentColor" stroke-width="1.25" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="2.5" fill="currentColor" stroke="none"/><circle cx="12" cy="12" r="4.7"/><circle cx="12" cy="12" r="7"/><circle cx="12" cy="12" r="9.2" opacity="0.68"/></svg>',comment:'<svg viewBox="0 0 24 24" aria-hidden="true" fill="none" stroke="currentColor" stroke-width="1.35" stroke-linecap="round" stroke-linejoin="round"><path d="M4.8 12.2c0-3.4 2.8-6.1 6.2-6.1 3.3 0 5.8 2.4 5.8 5.4 0 3.1-2.6 5.4-6.2 5.4-.8 0-1.6-.1-2.3-.4l-3.3 1 .9-2.7c-.7-.8-1.1-1.7-1.1-2.6Z"/><path d="m14.2 8.3 5 1.1-2 1.9 1.9 5-4.9-1.9-1.9 2Z" opacity="0.8"/></svg>',save:'<svg viewBox="0 0 24 24" aria-hidden="true" fill="none" stroke="currentColor" stroke-width="1.25" stroke-linecap="round" stroke-linejoin="round"><path d="M12 3.6 18.2 7v10L12 20.4 5.8 17V7Z"/><path d="M12 3.6v6.3M18.2 7 12 9.9 5.8 7"/><path d="M12 9.9v10.5"/><circle cx="12" cy="12" r="2.1" fill="currentColor" stroke="none"/></svg>',tag:'<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M20 11.5 11.5 20 4 12.5V5h7.5Z"/><circle cx="15.5" cy="8.5" r="1"/></svg>',spark:'<svg viewBox="0 0 24 24" aria-hidden="true"><path d="m12 3 1.9 5.1L19 10l-5.1 1.9L12 17l-1.9-5.1L5 10l5.1-1.9Z"/></svg>',arrowLeft:'<svg viewBox="0 0 24 24" aria-hidden="true" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M15.5 5.5 9 12l6.5 6.5"/><path d="M9.5 12h9"/></svg>',recommended:'<svg viewBox="0 0 24 24" aria-hidden="true" fill="none" stroke="currentColor" stroke-width="1.35" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="5.3" r="2.5" fill="currentColor" stroke="none"/><circle cx="5.8" cy="17.6" r="2.6" fill="currentColor" stroke="none"/><circle cx="18.2" cy="17.6" r="2.6" fill="currentColor" stroke="none"/><path d="M7.9 15.8 10.6 8.1"/><path d="M16.1 15.8 13.4 8.1"/><path d="M8.8 17.6h6.4"/></svg>',follow:'<svg viewBox="0 0 24 24" aria-hidden="true" fill="none" stroke="currentColor" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round"><circle cx="8.3" cy="17.5" r="3.1" fill="currentColor" stroke="none"/><circle cx="16.4" cy="8.2" r="2.5" fill="currentColor" stroke="none"/><path d="M5.1 18.7c1.3-4.2 5-7.2 9.5-7.2 1.5 0 3 .3 4.2.9"/><path d="M5 18.9c1.8 0 3.3-.6 5.1-1.7 3-1.9 5.1-4.7 7.1-8"/><path d="m17.6 6.2 1.9 1.1-1 2.1" /></svg>',close:'<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M6 6 18 18M18 6 6 18"/></svg>',image:'<svg viewBox="0 0 24 24" aria-hidden="true"><rect x="4" y="5" width="16" height="14" rx="2"/><path d="m8 15 2.5-2.5L13 15l2.5-3 2.5 3"/><circle cx="9" cy="9" r="1.2"/></svg>',trash:'<svg viewBox="0 0 24 24" aria-hidden="true" fill="none" stroke="currentColor" stroke-width="1.35" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="7.6" opacity="0.45"/><path d="M7.1 7.1 16.9 16.9"/><path d="M16.9 7.1 7.1 16.9"/><circle cx="12" cy="12" r="1.15" fill="currentColor" stroke="none"/></svg>',edit:'<svg viewBox="0 0 24 24" aria-hidden="true" fill="none" stroke="currentColor" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round"><path d="M5.4 8.2h8.2v10.2H5.4z"/><path d="M9 5.1h9.1l-4.9 5.1H9z"/><path d="M6.3 16.8 16.7 6.4"/><circle cx="12" cy="11.5" r="0.95" fill="currentColor" stroke="none"/></svg>',drag:'<svg viewBox="0 0 24 24" aria-hidden="true" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M12 4v16M4 12h16"/><path d="m12 4-2.8 2.8M12 4l2.8 2.8M20 12l-2.8-2.8M20 12l-2.8 2.8M12 20l-2.8-2.8M12 20l2.8-2.8M4 12l2.8-2.8M4 12l2.8 2.8"/></svg>',alignLeft:'<svg viewBox="0 0 24 24" aria-hidden="true" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round"><path d="M5 7h12"/><path d="M5 12h9"/><path d="M5 17h13"/></svg>',alignCenter:'<svg viewBox="0 0 24 24" aria-hidden="true" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round"><path d="M6 7h12"/><path d="M8 12h8"/><path d="M5 17h14"/></svg>',alignRight:'<svg viewBox="0 0 24 24" aria-hidden="true" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round"><path d="M7 7h12"/><path d="M10 12h9"/><path d="M6 17h13"/></svg>'}[e]||""}function Oe(e,t,a="avatar"){return e?`<img class="avatar__image" src="${e}" alt="${a}" />`:`<span class="avatar__label">${t}</span>`}function Ii(e){var t;return e?`
    <div class="overlay" data-close-comments>
      <section class="modal modal--comments" role="dialog" aria-modal="true" aria-label="Comments" onclick="event.stopPropagation()">
        <div class="modal__header">
          <h3 class="modal__title">Comments</h3>
          <button class="modal__close" data-close-comments aria-label="Close">${z("close")}</button>
        </div>
        <div class="comments-list">
          ${(t=e.comments)!=null&&t.length?e.comments.map(a=>`
            <article class="comment-item">
              <p class="comment-item__text">${a.text}</p>
              <span class="comment-item__date">${ti(a.createdAt)}</span>
            </article>
          `).join(""):'<p class="empty-copy">No comments yet.</p>'}
        </div>
        <form class="comment-form" data-comment-form="${e.id}">
          <input class="field__input" type="text" name="comment" maxlength="80" placeholder="Write a comment" required />
          <button class="button button--primary" type="submit">Post</button>
        </form>
      </section>
    </div>
  `:""}const ii="memories-static-site-state-v1";function Pi(){try{const e=localStorage.getItem(ii);return e?JSON.parse(e):null}catch{return null}}function Ei(e){localStorage.setItem(ii,JSON.stringify(e))}function $t(e="id"){return`${e}_${Math.random().toString(36).slice(2,9)}_${Date.now().toString(36)}`}const ut={profile:{name:"you",bio:"A small local profile to collect your memories.",avatarData:""},posts:[],issues:[],followingAuthors:[]};function Ci(e){return{id:e.id,authorName:e.authorName||"you",authorIcon:e.authorIcon||(e.authorName||"U").trim().slice(0,1).toUpperCase(),authorAvatarData:e.authorAvatarData||"",caption:e.caption||"",imageData:e.imageData||"",fixedTags:Array.isArray(e.fixedTags)?e.fixedTags:[],freeTags:Array.isArray(e.freeTags)?e.freeTags:[],likes:Number(e.likes||0),saves:Number(e.saves||0),comments:Array.isArray(e.comments)?e.comments:[],impressions:Number(e.impressions||0),liked:!!e.liked,saved:!!e.saved,createdAt:e.createdAt||new Date().toISOString(),updatedAt:e.updatedAt||null,composeData:e.composeData||null}}function Ai(e){var t,a,o;return e?{profile:{name:((t=e.profile)==null?void 0:t.name)||ut.profile.name,bio:((a=e.profile)==null?void 0:a.bio)||ut.profile.bio,avatarData:((o=e.profile)==null?void 0:o.avatarData)||""},posts:Array.isArray(e.posts)?e.posts.map(Ci):[],issues:Array.isArray(e.issues)?e.issues:[],followingAuthors:Array.isArray(e.followingAuthors)?e.followingAuthors:[]}:structuredClone(ut)}let le=Ai(Pi());function Qe(){return le}function ve(e){le=e,Ei(le)}function Bi(e){const t=structuredClone(le);t.posts.unshift({id:$t("post"),authorName:e.authorName,authorIcon:(e.authorName||"U").trim().slice(0,1).toUpperCase(),authorAvatarData:le.profile.avatarData||"",caption:e.caption||"",imageData:e.imageData,fixedTags:e.fixedTags||[],freeTags:e.freeTags||[],likes:0,saves:0,comments:[],impressions:0,liked:!1,saved:!1,createdAt:new Date().toISOString(),updatedAt:null,composeData:e.composeData||null}),ve(t)}function Ni(e,t){const a=structuredClone(le),o=a.posts.find(s=>s.id===e);o&&(o.caption=t.caption??o.caption,o.imageData=t.imageData??o.imageData,o.fixedTags=Array.isArray(t.fixedTags)?t.fixedTags:o.fixedTags,o.freeTags=Array.isArray(t.freeTags)?t.freeTags:o.freeTags,o.composeData=t.composeData??o.composeData,o.updatedAt=new Date().toISOString(),ve(a))}function Di(e){const t=structuredClone(le);t.posts.some(o=>o.id===e)&&(t.posts=t.posts.filter(o=>o.id!==e),t.issues=t.issues.map(o=>({...o,postIds:(o.postIds||[]).filter(s=>s!==e)})).filter(o=>o.postIds.length),ve(t))}function Ri(e){const t=structuredClone(le),a=t.posts.find(o=>o.id===e);a&&(a.liked=!a.liked,a.likes+=a.liked?1:-1,ve(t))}function Hi(e){const t=structuredClone(le),a=t.posts.find(o=>o.id===e);a&&(a.saved=!a.saved,a.saves+=a.saved?1:-1,ve(t))}function qi(e,t){const a=structuredClone(le),o=a.posts.find(s=>s.id===e);!o||!t.trim()||(o.comments.unshift({id:$t("comment"),text:t.trim(),createdAt:new Date().toISOString()}),ve(a))}function Wi(e){const t=structuredClone(le),a=t.posts.find(o=>o.id===e);a&&(a.impressions+=1,ve(t))}function zi(e){const t=structuredClone(le),a=t.profile.name,o=e.avatarData||"";t.profile.name=e.name,t.profile.bio=e.bio,t.profile.avatarData=o,t.posts=t.posts.map(s=>s.authorName===a?{...s,authorName:e.name,authorIcon:(e.name||"U").trim().slice(0,1).toUpperCase(),authorAvatarData:o}:s),t.followingAuthors=t.followingAuthors.map(s=>s===a?e.name:s),ve(t)}function Oi(e){const t=structuredClone(le),a=t.followingAuthors.includes(e);t.followingAuthors=a?t.followingAuthors.filter(o=>o!==e):[...t.followingAuthors,e],ve(t)}function Fi(e){const t=structuredClone(le);t.issues.unshift({id:$t("issue"),title:e.title,subtitle:e.subtitle,tone:e.tone,postIds:e.postIds,createdAt:new Date().toISOString()}),ve(t)}function Xi(){return`
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
  `}function Yi(e){return[...e].sort((t,a)=>Yt(a)-Yt(t))}function Yt(e){var u;const t=(e.likes||0)*2+(e.saves||0)*2+(((u=e.comments)==null?void 0:u.length)||0)*1.5+(e.impressions||0)*1.2,a=Mi(e.createdAt)?120:0,s=220/Math.max(1,(Date.now()-new Date(e.createdAt).getTime())/(1e3*60*60));return t+a+s}function Ui(e,{query:t="",tags:a=[]}={}){const o=t.trim().toLowerCase();return e.filter(s=>{const u=[s.authorName,s.caption||"",...s.fixedTags||[],...s.freeTags||[]].join(" ").toLowerCase(),m=!o||u.includes(o),l=!a.length||a.every(i=>[...s.fixedTags||[],...s.freeTags||[]].includes(i));return m&&l})}function ji(e){return e==="system"?typeof window<"u"&&typeof window.matchMedia=="function"&&window.matchMedia("(prefers-color-scheme: dark)").matches?"dark":"light":e==="dark"?"dark":"light"}function Ji(e){return e==="system"?"System":e==="dark"?"Dark":"White"}function Gi(e,t){return e==="system"?`OS ${t==="dark"?"Dark":"White"}`:"Tap to switch"}function Vi(e,t){const a=e.posts||[];return t==="following"?a.filter(o=>e.followingAuthors.includes(o.authorName)):Yi(a)}const nt=[{x:70,y:78,w:210,h:300},{x:382,y:116,w:122,h:148},{x:566,y:82,w:214,h:320},{x:78,y:448,w:214,h:304},{x:360,y:318,w:204,h:434},{x:598,y:470,w:190,h:260},{x:88,y:834,w:156,h:196},{x:344,y:786,w:182,h:264},{x:640,y:872,w:142,h:172}],Ut=860,jt=1120,Zi=980,Qi=1260;function Jt(e){const t=e%2,a=Math.floor(e/2);return{x:120+t*Zi,y:80+a*Qi}}function Ki(e,t,a){return`
    <article
      class="timeline-particle"
      style="left:${a.x+t.x}px; top:${a.y+t.y}px; width:${t.w}px; height:${t.h}px;"
    >
      <button class="timeline-particle__author" type="button" data-open-author="${e.authorName}" aria-label="Open ${e.authorName} profile">
        ${Oe(e.authorAvatarData,e.authorIcon,`${e.authorName} avatar`)}
      </button>
      <button class="timeline-particle__image-button" type="button" data-open-preview="${e.id}" aria-label="Open ${e.authorName} post">
        <img class="timeline-particle__image" src="${e.imageData}" alt="${e.authorName} post" />
      </button>
    </article>
  `}function ea(e){const t=Math.max(1,Math.ceil(e.length/nt.length)),a=Array.from({length:t},(s,u)=>{const m=Jt(u),l=e.slice(u*nt.length,(u+1)*nt.length);return{placement:m,html:`
        <section
          class="timeline-board"
          style="left:${m.x}px; top:${m.y}px; width:${Ut}px; height:${jt}px;"
          aria-hidden="true"
        ></section>
        ${l.map((i,p)=>Ki(i,nt[p],m)).join("")}
      `}});if(!e.length)return{width:1280,height:1120,html:`
        <div class="timeline-field__empty">
        <p class="timeline-field__empty-title">No posts yet</p>
        <p class="timeline-field__empty-copy">Create your first memory and it will appear here.</p>
      </div>
      `};const o=Jt(t-1);return{width:o.x+Ut+140,height:o.y+jt+140,html:a.map(s=>s.html).join("")}}function Gt(e,t){const a=(t==null?void 0:t.homeTheme)||"dark",o=ji(a),s=(t==null?void 0:t.homeCoreState)||"default",u=Ji(a),m=Gi(a,o);return`
    <section class="page orbit-home orbit-home--${o} orbit-home--mode-${a} orbit-home--${s}">
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
          <span class="orbit-node__icon" aria-hidden="true">${z("timeline")}</span>
          <strong class="orbit-node__title">Timeline</strong>
        </button>

        <button class="orbit-node orbit-node--profile" type="button" data-home-nav="profile">
          <span class="orbit-node__icon" aria-hidden="true">${z("profile")}</span>
          <strong class="orbit-node__title">Profile</strong>
        </button>

        <button class="orbit-node orbit-node--search" type="button" data-home-nav="search">
          <span class="orbit-node__icon" aria-hidden="true">${z("search")}</span>
          <strong class="orbit-node__title">Search</strong>
        </button>

        <button class="orbit-node orbit-node--compose" type="button" data-home-nav="compose">
          <span class="orbit-node__icon" aria-hidden="true">${z("compose")}</span>
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
  `}function ta(e,t){var s,u;const a=Vi(e,t.timelineTab),o=ea(a);return`
    <section class="page timeline-page">
      <div class="timeline-screen">
        <header class="timeline-screen__chrome">
          <button class="timeline-screen__back" type="button" data-home-nav="home" aria-label="Back to main page">
            <span>${z("arrowLeft")}</span>
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
  `}function ia(e){const t=[...e.fixedTags||[],...e.freeTags||[]];return t.length?t.map(a=>`<span class="chip chip--soft">${a}</span>`).join(""):'<div class="post-card__tags-empty">No tags yet</div>'}function ai(e,t={}){var m;const{mode:a="full"}=t,o=a!=="compact",s=a==="full",u=a!=="minimal";return`
    <article class="post-card post-card--${a}" data-post-id="${e.id}">
      ${o?`
        <div class="post-card__head">
          <button class="avatar avatar-button" type="button" data-open-author="${e.authorName}" aria-label="Open ${e.authorName} profile">
            ${Oe(e.authorAvatarData,e.authorIcon,`${e.authorName} avatar`)}
          </button>
          <div class="post-card__author-wrap">
            <p class="post-card__author">${e.authorName}</p>
            <p class="post-card__time">${Li(e.createdAt)}</p>
          </div>
        </div>
      `:""}

      <button class="post-card__image-button" data-open-preview="${e.id}" aria-label="Open post image">
        <img class="post-card__image" src="${e.imageData}" alt="${e.authorName} post" />
      </button>

      ${s?`
        <div class="post-card__caption-row">
          <button class="tag-toggle" data-toggle-tags="${e.id}">${z("tag")} tags</button>
          ${e.caption?`<p class="post-card__caption">${e.caption}</p>`:'<p class="post-card__caption post-card__caption--empty">No caption</p>'}
        </div>

        <div class="post-card__tags" data-tags-panel="${e.id}" hidden>
          ${ia(e)}
        </div>
      `:""}

      <div class="post-card__meta">
        ${u?`<span class="post-card__date">${ei(e.createdAt)}</span>`:"<span></span>"}
        <div class="post-card__actions">
          <button class="icon-button ${e.liked?"is-active":""}" data-like="${e.id}" aria-label="Like post">
            ${z("heart")}
            <span>${e.likes}</span>
          </button>
          <button class="icon-button" data-comment="${e.id}" aria-label="Open comments">
            ${z("comment")}
            <span>${((m=e.comments)==null?void 0:m.length)||0}</span>
          </button>
          <button class="icon-button ${e.saved?"is-active":""}" data-save="${e.id}" aria-label="Save post">
            ${z("save")}
            <span>${e.saves}</span>
          </button>
        </div>
      </div>
    </article>
  `}const oi={activity:["ご飯","朝ごはん","ランチ","ディナー","カフェ","散歩","買い物","ドライブ","旅行","イベント"],mood:["まったり","おしゃれ","落ち着く","ロマンチック","ワクワク","にぎやか"],scene:["初デート","休日","昼デート","夜デート","記念日","雨の日"],budget:["低予算","ふつう","ちょっと贅沢"],time:["朝","昼","夕方","夜"]},aa={activity:"デート内容",mood:"雰囲気",scene:"シーン",budget:"予算感",time:"時間帯"},oa=Object.values(oi).flat();function na(e){return oa.map(t=>`
    <button class="chip chip--filter ${e.includes(t)?"is-active":""}" data-search-tag="${t}">${t}</button>
  `).join("")}function sa(e,t){const a=t.searchTags||[],o=Ui(e.posts||[],{query:t.searchQuery||"",tags:a}),s=o.length?`
      <div class="feed-grid">
        ${o.map(u=>ai(u,{mode:"compact"})).join("")}
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
        ${na(a)}
      </div>

      ${s}
    </section>
  `}const ni={id:"page1",label:"Page 1",description:"Template 1",async render(e,t,a,o){const{addWrappedText:s,drawFileCover:u,drawSlotPlaceholder:m,defaults:l}=o,i={x:84,y:84,width:1072,height:1586};e.fillStyle="#191514",e.textBaseline="top";const p={x:i.x+i.width*.55,y:i.y+i.height*.125,width:i.width*.36,height:i.width*.36,radius:0},y={x:i.x+i.width*.08,y:i.y+i.height*.48,width:i.width*.45,height:i.height*.39,radius:0};a.secondary.file?await u(e,a.secondary.file,p,a.secondary.position):m(e,p),a.primary.file?await u(e,a.primary.file,y,a.primary.position):m(e,y),e.font='600 78px "Cormorant Garamond", "Times New Roman", serif',s(e,t.headline||l.headline,{x:i.x+i.width*.07,y:i.y+i.height*.058,maxWidth:i.width*.7,lineHeight:82,maxLines:2}),e.font='500 32px "Noto Sans JP", sans-serif',s(e,t.subhead||l.subhead,{x:i.x+i.width*.07,y:i.y+i.height*.132,maxWidth:i.width*.7,lineHeight:42,maxLines:3}),e.font='500 33px "Noto Sans JP", sans-serif',s(e,t.intro||l.intro,{x:i.x+i.width*.085,y:i.y+i.height*.215,maxWidth:i.width*.37,lineHeight:48,maxLines:4}),e.font='500 31px "Noto Sans JP", sans-serif',s(e,t.body||l.body,{x:i.x+i.width*.585,y:i.y+i.height*.625,maxWidth:i.width*.245,lineHeight:46,maxLines:6}),e.font='500 28px "Noto Sans JP", sans-serif',s(e,t.date||l.date,{x:i.x+i.width*.08,y:i.y+i.height*.895,maxWidth:i.width*.31,lineHeight:34,maxLines:1});const S=t.editor||l.editor,E=i.width*.32,P=i.x+i.width*.92-Math.min(E,e.measureText(S).width);s(e,S,{x:P,y:i.y+i.height*.895,maxWidth:E,lineHeight:34,maxLines:1})}},ra={id:"page2",label:"Page 2",description:"Template 2",async render(e,t,a,o){const{addWrappedText:s,clipRoundedRect:u,drawFileCover:m,drawSlotPlaceholder:l,defaults:i}=o,p={x:84,y:84,width:1072,height:1586};e.fillStyle="#191514",e.textBaseline="top";const y={x:p.x+p.width*.138,y:p.y+p.height*.142,width:p.width*.724,height:p.height*.374,radius:0};a.primary.file?await m(e,a.primary.file,y,a.primary.position):l(e,y),e.font='600 60px "Cormorant Garamond", "Times New Roman", serif',s(e,t.headline||i.headline,{x:p.x+p.width*.142,y:p.y+p.height*.565,maxWidth:p.width*.66,lineHeight:66,maxLines:2}),e.font='500 30px "Noto Sans JP", sans-serif',s(e,t.subhead||i.subhead,{x:p.x+p.width*.142,y:p.y+p.height*.634,maxWidth:p.width*.68,lineHeight:40,maxLines:2}),e.font='500 28px "Noto Sans JP", sans-serif',s(e,t.intro||i.intro,{x:p.x+p.width*.142,y:p.y+p.height*.698,maxWidth:p.width*.66,lineHeight:38,maxLines:4}),e.font='500 28px "Noto Sans JP", sans-serif',s(e,t.body||i.body,{x:p.x+p.width*.142,y:p.y+p.height*.792,maxWidth:p.width*.66,lineHeight:38,maxLines:4}),e.font='500 24px "Noto Sans JP", sans-serif',s(e,t.date||i.date,{x:p.x+p.width*.142,y:p.y+p.height*.948,maxWidth:p.width*.28,lineHeight:30,maxLines:1});const S=t.editor||i.editor;e.font='500 24px "Noto Sans JP", sans-serif';const E=p.width*.28,P=p.x+p.width*.86-Math.min(E,e.measureText(S).width);s(e,S,{x:P,y:p.y+p.height*.948,maxWidth:E,lineHeight:30,maxLines:1})}},la={id:"page3",label:"Page 3",description:"Template 3",async render(e,t,a,o){const{addWrappedText:s,drawFileCover:u,drawSlotPlaceholder:m,defaults:l}=o,i={x:84,y:84,width:1072,height:1586};e.fillStyle="#191514",e.textBaseline="top";const p={x:i.x+i.width*.14,y:i.y+i.height*.22,width:i.width*.58,height:i.height*.36,radius:0},y={x:i.x+i.width*.74,y:i.y+i.height*.72,width:i.width*.14,height:i.height*.15,radius:0};a.primary.file?await u(e,a.primary.file,p,a.primary.position):m(e,p),a.secondary.file?await u(e,a.secondary.file,y,a.secondary.position):m(e,y),e.font='600 58px "Cormorant Garamond", "Times New Roman", serif',s(e,t.headline||l.headline,{x:i.x+i.width*.12,y:i.y+i.height*.075,maxWidth:i.width*.66,lineHeight:64,maxLines:2}),e.font='500 28px "Noto Sans JP", sans-serif',s(e,t.subhead||l.subhead,{x:i.x+i.width*.12,y:i.y+i.height*.145,maxWidth:i.width*.66,lineHeight:36,maxLines:2}),e.font='500 26px "Noto Sans JP", sans-serif',s(e,t.intro||l.intro,{x:i.x+i.width*.13,y:i.y+i.height*.675,maxWidth:i.width*.32,lineHeight:34,maxLines:4}),e.font='500 26px "Noto Sans JP", sans-serif',s(e,t.body||l.body,{x:i.x+i.width*.13,y:i.y+i.height*.79,maxWidth:i.width*.32,lineHeight:34,maxLines:3}),e.font='500 24px "Noto Sans JP", sans-serif',s(e,t.date||l.date,{x:i.x+i.width*.13,y:i.y+i.height*.915,maxWidth:i.width*.2,lineHeight:30,maxLines:1});const S=t.editor||l.editor,E=i.width*.16,P=i.x+i.width*.9-Math.min(E,e.measureText(S).width);s(e,S,{x:P,y:i.y+i.height*.915,maxWidth:E,lineHeight:30,maxLines:1})}},ca={id:"page4",label:"Page 4",description:"Template 4",async render(e,t,a,o){const{addWrappedText:s,drawFileCover:u,drawSlotPlaceholder:m,defaults:l}=o,i={x:84,y:84,width:1072,height:1586};e.fillStyle="#191514",e.textBaseline="top";const p={x:i.x+i.width*.11,y:i.y+i.height*.59,width:i.width*.34,height:i.height*.25,radius:0},y={x:i.x+i.width*.59,y:i.y+i.height*.13,width:i.width*.24,height:i.height*.29,radius:0};a.primary.file?await u(e,a.primary.file,p,a.primary.position):m(e,p),a.secondary.file?await u(e,a.secondary.file,y,a.secondary.position):m(e,y),e.font='600 52px "Cormorant Garamond", "Times New Roman", serif',s(e,t.headline||l.headline,{x:i.x+i.width*.11,y:i.y+i.height*.11,maxWidth:i.width*.28,lineHeight:58,maxLines:2}),e.font='500 27px "Noto Sans JP", sans-serif',s(e,t.subhead||l.subhead,{x:i.x+i.width*.11,y:i.y+i.height*.205,maxWidth:i.width*.28,lineHeight:34,maxLines:2}),e.font='500 26px "Noto Sans JP", sans-serif',s(e,t.intro||l.intro,{x:i.x+i.width*.11,y:i.y+i.height*.295,maxWidth:i.width*.28,lineHeight:34,maxLines:4}),e.font='500 26px "Noto Sans JP", sans-serif',s(e,t.body||l.body,{x:i.x+i.width*.58,y:i.y+i.height*.55,maxWidth:i.width*.2,lineHeight:34,maxLines:4}),e.font='500 24px "Noto Sans JP", sans-serif',s(e,t.date||l.date,{x:i.x+i.width*.58,y:i.y+i.height*.87,maxWidth:i.width*.14,lineHeight:30,maxLines:1});const S=t.editor||l.editor,E=i.width*.15,P=i.x+i.width*.88-Math.min(E,e.measureText(S).width);s(e,S,{x:P,y:i.y+i.height*.87,maxWidth:E,lineHeight:30,maxLines:1})}},da={id:"page5",label:"Page 5",description:"Template 5",async render(e,t,a,o){const{addWrappedText:s,drawFileCover:u,drawSlotPlaceholder:m,defaults:l}=o,i={x:84,y:84,width:1072,height:1586};e.fillStyle="#191514",e.textBaseline="top";const p={x:i.x+i.width*.49,y:i.y+i.height*.12,width:i.width*.34,height:i.height*.42,radius:0},y={x:i.x+i.width*.12,y:i.y+i.height*.74,width:i.width*.25,height:i.height*.16,radius:0};a.primary.file?await u(e,a.primary.file,p,a.primary.position):m(e,p),a.secondary.file?await u(e,a.secondary.file,y,a.secondary.position):m(e,y),e.font='600 50px "Cormorant Garamond", "Times New Roman", serif',s(e,t.headline||l.headline,{x:i.x+i.width*.12,y:i.y+i.height*.12,maxWidth:i.width*.21,lineHeight:54,maxLines:3}),e.font='500 26px "Noto Sans JP", sans-serif',s(e,t.subhead||l.subhead,{x:i.x+i.width*.12,y:i.y+i.height*.265,maxWidth:i.width*.21,lineHeight:34,maxLines:3}),e.font='500 26px "Noto Sans JP", sans-serif',s(e,t.intro||l.intro,{x:i.x+i.width*.12,y:i.y+i.height*.42,maxWidth:i.width*.21,lineHeight:34,maxLines:5}),e.font='500 26px "Noto Sans JP", sans-serif',s(e,t.body||l.body,{x:i.x+i.width*.51,y:i.y+i.height*.69,maxWidth:i.width*.24,lineHeight:34,maxLines:4}),e.font='500 24px "Noto Sans JP", sans-serif',s(e,t.date||l.date,{x:i.x+i.width*.51,y:i.y+i.height*.89,maxWidth:i.width*.14,lineHeight:30,maxLines:1});const S=t.editor||l.editor,E=i.width*.15,P=i.x+i.width*.88-Math.min(E,e.measureText(S).width);s(e,S,{x:P,y:i.y+i.height*.89,maxWidth:E,lineHeight:30,maxLines:1})}},ma={id:"page6",label:"Page 6",description:"Template 6",async render(e,t,a,o){var T;const{addWrappedText:s,drawFileCover:u,drawSlotPlaceholder:m,defaults:l}=o,i={x:84,y:84,width:1072,height:1586};e.fillStyle="#191514",e.textBaseline="top";const p={x:i.x+i.width*.2,y:i.y+i.height*.3,width:i.width*.46,height:i.height*.36,radius:0},y={x:i.x+i.width*.12,y:i.y+i.height*.075,width:i.width*.2,height:i.height*.14,radius:0},S={x:i.x+i.width*.69,y:i.y+i.height*.8,width:i.width*.15,height:i.height*.1,radius:0};a.primary.file?await u(e,a.primary.file,p,a.primary.position):m(e,p),a.secondary.file?await u(e,a.secondary.file,y,a.secondary.position):m(e,y),(T=a.accent)!=null&&T.file?await u(e,a.accent.file,S,a.accent.position):m(e,S),e.font='600 48px "Cormorant Garamond", "Times New Roman", serif',s(e,t.headline||l.headline,{x:i.x+i.width*.5,y:i.y+i.height*.1,maxWidth:i.width*.2,lineHeight:52,maxLines:2}),e.font='500 26px "Noto Sans JP", sans-serif',s(e,t.subhead||l.subhead,{x:i.x+i.width*.5,y:i.y+i.height*.18,maxWidth:i.width*.2,lineHeight:34,maxLines:3}),e.font='500 26px "Noto Sans JP", sans-serif',s(e,t.intro||l.intro,{x:i.x+i.width*.12,y:i.y+i.height*.74,maxWidth:i.width*.22,lineHeight:34,maxLines:4}),e.font='500 26px "Noto Sans JP", sans-serif',s(e,t.body||l.body,{x:i.x+i.width*.44,y:i.y+i.height*.74,maxWidth:i.width*.14,lineHeight:34,maxLines:4}),e.font='500 24px "Noto Sans JP", sans-serif',s(e,t.date||l.date,{x:i.x+i.width*.12,y:i.y+i.height*.905,maxWidth:i.width*.16,lineHeight:30,maxLines:1});const E=t.editor||l.editor,P=i.width*.14,B=i.x+i.width*.88-Math.min(P,e.measureText(E).width);s(e,E,{x:B,y:i.y+i.height*.905,maxWidth:P,lineHeight:30,maxLines:1})}},pa={id:"page7",label:"Page 7",description:"Template 7",async render(e,t,a,o){var T;const{addWrappedText:s,drawFileCover:u,drawSlotPlaceholder:m,defaults:l}=o,i={x:84,y:84,width:1072,height:1586};e.fillStyle="#191514",e.textBaseline="top";const p={x:i.x+i.width*.12,y:i.y+i.height*.15,width:i.width*.3,height:i.height*.18,radius:0},y={x:i.x+i.width*.56,y:i.y+i.height*.48,width:i.width*.3,height:i.height*.18,radius:0},S={x:i.x+i.width*.12,y:i.y+i.height*.75,width:i.width*.3,height:i.height*.18,radius:0};a.primary.file?await u(e,a.primary.file,p,a.primary.position):m(e,p),a.secondary.file?await u(e,a.secondary.file,y,a.secondary.position):m(e,y),(T=a.accent)!=null&&T.file?await u(e,a.accent.file,S,a.accent.position):m(e,S),e.font='600 44px "Cormorant Garamond", "Times New Roman", serif',s(e,t.headline||l.headline,{x:i.x+i.width*.58,y:i.y+i.height*.16,maxWidth:i.width*.19,lineHeight:48,maxLines:2}),e.font='500 25px "Noto Sans JP", sans-serif',s(e,t.subhead||l.subhead,{x:i.x+i.width*.58,y:i.y+i.height*.245,maxWidth:i.width*.19,lineHeight:32,maxLines:3}),e.font='500 25px "Noto Sans JP", sans-serif',s(e,t.intro||l.intro,{x:i.x+i.width*.15,y:i.y+i.height*.41,maxWidth:i.width*.2,lineHeight:32,maxLines:4}),e.font='500 25px "Noto Sans JP", sans-serif',s(e,t.body||l.body,{x:i.x+i.width*.59,y:i.y+i.height*.77,maxWidth:i.width*.19,lineHeight:32,maxLines:4}),e.font='500 24px "Noto Sans JP", sans-serif',s(e,t.date||l.date,{x:i.x+i.width*.58,y:i.y+i.height*.91,maxWidth:i.width*.12,lineHeight:30,maxLines:1});const E=t.editor||l.editor,P=i.width*.14,B=i.x+i.width*.88-Math.min(P,e.measureText(E).width);s(e,E,{x:B,y:i.y+i.height*.91,maxWidth:P,lineHeight:30,maxLines:1})}},H={x:.06,y:.06,width:.88,height:.88},We=.015,Vt={densityMode:"whitespace",recoveryMode:"restore"},vt={width:.14,height:.12},Ae={width:.18,height:.08},ua={primary:{x:.08,y:.16,width:.4,height:.3},secondary:{x:.58,y:.12,width:.24,height:.2},accent:{x:.56,y:.58,width:.26,height:.18}},ha={headline:{x:.08,y:.07,width:.46,height:.1,fontSize:.056,lineHeight:1.08,align:"left",family:"serif",weight:600},subhead:{x:.08,y:.16,width:.48,height:.07,fontSize:.023,lineHeight:1.34,align:"left",family:"sans",weight:500},intro:{x:.08,y:.52,width:.28,height:.18,fontSize:.021,lineHeight:1.42,align:"left",family:"sans",weight:500},body:{x:.62,y:.42,width:.22,height:.24,fontSize:.021,lineHeight:1.42,align:"left",family:"sans",weight:500},date:{x:.08,y:.91,width:.22,height:.04,fontSize:.019,lineHeight:1.25,align:"left",family:"sans",weight:500},editor:{x:.66,y:.91,width:.2,height:.04,fontSize:.019,lineHeight:1.25,align:"right",family:"sans",weight:500}},ga=[{id:"image-1",x:.1,y:.14,width:.38,height:.34}];function Le(e,t,a){return Math.min(a,Math.max(t,e))}function Je(e){return Math.round(e/We)*We}function si(e,t,a){return typeof t=="string"&&t.trim()?t.trim():`${e}-${a+1}`}function Tt(e,t=""){return String(e??t).replace(/\r/g,"")}function ri(e,t){const a=Le(Je(Number.isFinite(e.width)?e.width:t.width),t.width,H.width),o=Le(Je(Number.isFinite(e.height)?e.height:t.height),t.height,H.height);return{x:Le(Je(Number.isFinite(e.x)?e.x:H.x),H.x,H.x+H.width-a),y:Le(Je(Number.isFinite(e.y)?e.y:H.y),H.y,H.y+H.height-o),width:a,height:o}}function ht(e={},t=0){return{id:si("image",e.id,t),...ri(e,vt)}}function wt(e={},t=0){const a=typeof e.text=="string",o=e.kind==="title"||e.kind==="body"?e.kind:(Number(e.fontSize)||0)>=.04||e.family==="serif"?"title":"body";return{id:si("text",e.id,t),kind:o,text:Tt(e.text,"text"),isDefaultText:typeof e.isDefaultText=="boolean"?e.isDefaultText:!a,...ri(e,Ae),fontSize:Le(Number.isFinite(e.fontSize)?e.fontSize:.028,.014,.09),lineHeight:Le(Number.isFinite(e.lineHeight)?e.lineHeight:1.35,1,2.2),padding:Le(Number.isFinite(e.padding)?e.padding:.012,.004,.05),align:e.align==="center"||e.align==="right"?e.align:"left",family:e.family==="serif"?"serif":"sans",weight:Le(Number.isFinite(e.weight)?e.weight:e.family==="serif"?600:500,400,700)}}function fa(e={}){return Object.entries(ha).map(([t,a],o)=>wt({id:`text-${o+1}`,text:Tt(e[t],""),x:a.x,y:a.y,width:a.width,height:a.height,fontSize:a.fontSize,lineHeight:a.lineHeight,padding:a.family==="serif"?.01:.012,align:a.align,kind:a.family==="serif"&&a.fontSize>=.04?"title":"body",family:a.family,weight:a.weight},o)).filter(t=>t.text.trim())}function li(e={}){return{densityMode:e.densityMode==="fill"?"fill":Vt.densityMode,recoveryMode:e.recoveryMode==="keep"?"keep":Vt.recoveryMode}}function xt(e={}){return Array.isArray(e.imageBoxes)&&e.imageBoxes.length?e.imageBoxes.map((t,a)=>ht(t,a)):e.imageBoxes&&typeof e.imageBoxes=="object"?Object.entries(ua).map(([t,a],o)=>{var u;const s=((u=e.imageBoxes)==null?void 0:u[t])||{};return ht({id:t,x:Number.isFinite(s.x)?s.x:a.x,y:Number.isFinite(s.y)?s.y:a.y,width:Number.isFinite(s.width)?s.width:a.width,height:Number.isFinite(s.height)?s.height:a.height},o)}):ga.map((t,a)=>ht(t,a))}function _t(e={},t={}){if(Array.isArray(e.textBoxes)&&e.textBoxes.length)return e.textBoxes.map((s,u)=>wt(s,u));const a=!!(e.imageBoxes&&!Array.isArray(e.imageBoxes)&&typeof e.imageBoxes=="object"),o=fa(t);return a&&o.length?o:[wt({id:"text-1",text:Tt(t.headline,"text"),isDefaultText:!t.headline,x:.56,y:.18,width:.24,height:.14,kind:"title",fontSize:.046,lineHeight:1.12,padding:.01,family:"serif",weight:600},0)]}function ya(e={},t={}){return{options:li(e),imageBoxes:xt(e),textBoxes:_t(e,t)}}function gt(e){return{left:`${e.x*100}%`,top:`${e.y*100}%`,width:`${e.width*100}%`,height:`${e.height*100}%`}}function Zt(e,t){return{x:e.x+e.width*t.x,y:e.y+e.height*t.y,width:e.width*t.width,height:e.height*t.height,radius:0}}function ke(e){return Je(e)}const ba={id:"page8",label:"Page 8",description:"Custom free layout",async render(e,t,a,o){var y,S,E,P,B,T,Y,R,w,G,pe,ce;const{addWrappedText:s,drawFileCover:u}=o,m={x:84,y:84,width:1072,height:1586},l=ya(t.customLayout||{},t),i=Array.isArray((y=t.customLayout)==null?void 0:y.pretextBoxes)?t.customLayout.pretextBoxes:null;e.fillStyle="#191514",e.textBaseline="top";const p=o.page8Files||{};if(((S=t.customLayout)==null?void 0:S.editorType)==="pretext"&&i){for(const M of i){const q={x:m.x+M.x/794*m.width,y:m.y+M.y/1123*m.height,width:M.width/794*m.width,height:M.height/1123*m.height,radius:0};if(M.kind==="image"){(E=M.data)!=null&&E.src&&await u(e,M.data.src,q,{cropX:Number(M.data.cropX)||0,cropY:Number(M.data.cropY)||0,zoom:Math.max(1,Number(M.data.zoom)||1)});continue}const F=Math.max(0,Number((P=M.data)==null?void 0:P.padding)||0),C=Math.max(12,Number((B=M.data)==null?void 0:B.lineHeight)||34);e.textAlign=((T=M.data)==null?void 0:T.align)||"left",e.fillStyle=((Y=M.data)==null?void 0:Y.color)||"#191514",e.font=`${Number((R=M.data)==null?void 0:R.fontWeight)||400} ${Math.max(12,Number((w=M.data)==null?void 0:w.fontSize)||22)}px ${((G=M.data)==null?void 0:G.fontFamily)||'"Noto Sans JP", sans-serif'}`;const Q=e.textAlign==="right"?q.x+q.width-F:e.textAlign==="center"?q.x+q.width/2:q.x+F;s(e,((pe=M.data)==null?void 0:pe.text)||"",{x:Q,y:q.y+F,maxWidth:Math.max(24,q.width-F*2),lineHeight:C,maxLines:Math.max(1,Math.floor(Math.max(C,q.height-F*2)/C))})}return}for(const O of l.imageBoxes){const k=Zt(m,O);(ce=p[O.id])!=null&&ce.file&&await u(e,p[O.id].file,k,p[O.id].position)}l.textBoxes.forEach(O=>{const k=Zt(m,O),M=Math.max(0,m.width*(O.padding||0)),q=O.family==="serif"?'"Cormorant Garamond", "Times New Roman", serif':'"Noto Sans JP", sans-serif';e.textAlign=O.align,e.font=`${O.weight} ${Math.round(m.width*O.fontSize)}px ${q}`;const F=O.align==="right"?k.x+k.width-M:O.align==="center"?k.x+k.width/2:k.x+M,C=Math.max(24,k.width-M*2),Q=m.width*O.fontSize*O.lineHeight,we=Math.max(Q,k.height-M*2);s(e,O.text||"",{x:F,y:k.y+M,maxWidth:C,lineHeight:Q,maxLines:Math.max(1,Math.floor(we/Math.max(12,Q)))})})}},ci=[ni,ra,la,ca,da,ma,pa,ba],be=ni.id,Qt=new Map(ci.map(e=>[e.id,e]));function va(e){return Qt.get(e)||Qt.get(be)}const wa=[{value:"#f8f4ee",label:"Ivory"},{value:"#f4e5de",label:"Blush"},{value:"#ece4d8",label:"Sand"},{value:"#e5ece7",label:"Sage"}];function kt(e){return`
    <button class="button button--ghost page-back page-back--icon" type="button" ${e} aria-label="Back">
      ${z("arrowLeft")}
    </button>
  `}function xa(e,t,a=[]){return`
    <section class="compose-group compose-group--tags">
      <div class="compose-group__head">
        <h3>${aa[e]}</h3>
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
  `}function di(e=be){return`
    <div class="template-carousel">
      <button class="template-carousel__nav" type="button" data-template-carousel-nav="prev" aria-label="Previous template">&larr;</button>
      <div class="template-carousel__viewport" data-template-carousel>
        <div class="template-thumb-track">
          ${ci.map(t=>`
            <label class="template-thumb ${e===t.id?"is-active":""}">
              <input type="radio" name="templateId" value="${t.id}" ${e===t.id?"checked":""} />
              <span class="template-thumb__preview template-option__preview template-option__preview--${t.id}" aria-hidden="true"></span>
            </label>
          `).join("")}
        </div>
      </div>
      <button class="template-carousel__nav" type="button" data-template-carousel-nav="next" aria-label="Next template">&rarr;</button>
    </div>
  `}function mi(e){return`
    <div class="color-picker-inline">
      <div class="color-chip-track color-chip-track--inline" data-color-carousel>
        ${wa.map(t=>`
          <label class="color-chip color-chip--inline ${e===t.value?"is-active":""}" title="${t.label}">
            <input type="radio" name="backgroundColor" value="${t.value}" ${e===t.value?"checked":""} />
            <span class="color-chip__swatch" style="--swatch:${t.value}"></span>
            <span class="color-chip__label">${t.label}</span>
          </label>
        `).join("")}
      </div>
    </div>
  `}function ft({id:e,slotClass:t}){return`
    <div class="compose-slot ${t}" data-slot="${e}">
      <input class="field__file" id="${e}" type="file" accept="image/*" />
      <label class="compose-slot__surface" for="${e}">
        <div class="compose-slot__image" data-slot-image="${e}" hidden></div>
        <div class="compose-slot__placeholder" data-slot-placeholder="${e}">
          <span class="compose-slot__plus">${z("compose")}</span>
        </div>
      </label>
      <button class="compose-slot__remove" type="button" data-slot-remove="${e}" hidden aria-label="remove image">&times;</button>
    </div>
  `}function yt(e){return`
    <div class="compose-slot ${e}">
      <div class="compose-slot__surface">
        <div class="compose-slot__placeholder">
          <span class="compose-slot__plus">${z("compose")}</span>
        </div>
      </div>
    </div>
  `}function pi(e,t,a,o={}){const{editable:s=!1,interactiveSlots:u=!1}=o,m=t==="page8",l=s?"compose-sheet":"compose-sheet compose-sheet--locked",i=m?`${l} compose-sheet--custom`:l,p=s?"true":"false";return m?`
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
        ${u?ft({id:"imageInputSecondary",slotClass:"compose-slot--secondary"}):yt("compose-slot--secondary")}
        ${u?ft({id:"imageInputAccent",slotClass:"compose-slot--accent"}):yt("compose-slot--accent")}
        ${u?ft({id:"imageInputPrimary",slotClass:"compose-slot--primary"}):yt("compose-slot--primary")}
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
  `}function _a(e,t){return`
    <section class="compose-group compose-group--tags-stage">
      <div class="compose-group__head">
        <h3>Tags</h3>
      </div>
      ${Object.entries(oi).map(([a,o])=>xa(a,o,e)).join("")}
      <section class="compose-group compose-group--tags compose-group--tags-nested">
        <div class="compose-group__head">
          <h3>Free Tags</h3>
        </div>
        <label class="field">
          <input class="field__input" type="text" name="freeTags" placeholder="cafe, spring, film" value="${t}" />
        </label>
      </section>
    </section>
  `}function Sa({values:e,selectedId:t,selectedBackground:a,headerMini:o,headerTitle:s}){return`
    <section class="page page--compose page--compose--select" data-compose-stage="select">
      <header class="page-header page-header--with-back page-header--compose">
        ${kt("data-close-compose")}
        <div>
          <p class="page-header__mini">${o}</p>
          <h2 class="page-header__title">${s}</h2>
        </div>
      </header>

      <section class="compose-select-shell">
        <section class="compose-preview compose-preview--select">
          ${pi(e,t,a,{editable:!1,interactiveSlots:!1})}
        </section>

        <section class="compose-group compose-group--template compose-group--template-select">
          <div class="compose-group__head compose-group__head--template compose-group__head--template-select">
            <h3>Template</h3>
            ${mi(a)}
            <button class="button button--primary compose-confirm-button" type="button" data-compose-stage-nav="edit">編集する</button>
          </div>
          ${di(t)}
        </section>
      </section>
    </section>
  `}function $a({values:e,selectedId:t,selectedBackground:a,isEditing:o,headerMini:s,headerTitle:u}){return`
    <section class="page page--compose page--compose--edit" data-compose-stage="edit">
      <header class="page-header page-header--with-back page-header--compose">
        ${kt('data-compose-stage-nav="select"')}
        <div>
          <p class="page-header__mini">${s}</p>
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
              `:pi(e,t,a,{editable:!0,interactiveSlots:!0})}
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
  `}function Ta({selectedId:e,selectedBackground:t,selectedFixedTags:a,freeTagsValue:o,submitLabel:s,isEditing:u,headerMini:m,headerTitle:l}){return`
    <section class="page page--compose page--compose--tags" data-compose-stage="tags">
      <header class="page-header page-header--with-back page-header--compose">
        ${kt('data-compose-stage-nav="edit"')}
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
              ${mi(t)}
            </div>
            ${di(e)}
          </section>
          ${_a(a,o)}
        </section>
        <div class="compose-flow-actions">
          <button class="button button--ghost compose-stage-back" type="button" data-compose-stage-nav="edit">Edit</button>
          <button class="button button--primary compose-submit-button" type="submit">${s}</button>
        </div>
      </form>
    </section>
  `}function ka(e=be){const t=typeof e=="object"?e:{selectedTemplateId:e},a=t.draft||{},o={headline:a.headline||"text",subhead:a.subhead||"text",intro:a.intro||"text",body:a.body||"text",date:a.date||"text",editor:a.editor||"編集者：haru"},s=t.selectedTemplateId||a.templateId||be,u=t.selectedBackground||a.backgroundColor||"#f8f4ee",m=Array.isArray(a.fixedTags)?a.fixedTags:[],l=Array.isArray(a.freeTags)?a.freeTags.join(", "):a.freeTags||"",i=t.isEditing?"Update Post":"Post This Layout",p=t.isEditing?"post editor":"template editor",y=t.isEditing?"Edit Post":"Compose",S=t.stage||"select";return S==="select"?Sa({values:o,selectedId:s,selectedBackground:u,headerMini:p,headerTitle:y}):S==="tags"?Ta({selectedId:s,selectedBackground:u,selectedFixedTags:m,freeTagsValue:l,submitLabel:i,isEditing:!!t.isEditing,headerMini:p,headerTitle:y}):$a({values:o,selectedId:s,selectedBackground:u,isEditing:!!t.isEditing,headerMini:p,headerTitle:y})}function Ma(e){return e.length?e.map(t=>`
    <label class="issue-post-option">
      <input type="checkbox" name="issuePostIds" value="${t.id}" />
      <img src="${t.imageData}" alt="${t.authorName}の投稿画像" />
      <div class="issue-post-option__meta">
        <strong>${t.authorName}</strong>
        <span>${ei(t.createdAt)}</span>
      </div>
    </label>
  `).join(""):`
      <section class="empty-panel">
        <p class="empty-panel__title">まだまとめる投稿がありません</p>
        <p class="empty-panel__copy">先に投稿を作ると、ここで選んで一冊の下書きにできます。</p>
      </section>
    `}function La(e,t){return e.length?e.map(a=>{const o=t.filter(s=>a.postIds.includes(s.id));return`
      <article class="issue-card issue-card--${a.tone}">
        <p class="issue-card__eyebrow">memories issue</p>
        <h3 class="issue-card__title">${a.title}</h3>
        <p class="issue-card__subtitle">${a.subtitle||"sub title free"}</p>
        <div class="issue-card__count">${o.length} posts selected</div>
        <div class="issue-card__thumbs">
          ${o.slice(0,3).map(s=>`<img src="${s.imageData}" alt="${s.authorName}の投稿画像" />`).join("")}
        </div>
      </article>
    `}).join(""):'<p class="empty-copy">まだ雑誌の下書きはありません。</p>'}function Ia(e){return`
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
            ${Ma(e.posts||[])}
          </div>
        </section>

        <button class="button button--primary button--full" type="submit">下書きを保存</button>
      </form>

      <section class="section-block">
        <div class="section-head">
          <h3>保存済みの雑誌下書き</h3>
        </div>
        <div class="issue-list">
          ${La(e.issues||[],e.posts||[])}
        </div>
      </section>
    </section>
  `}function ui(e){return[...new Set(e.map(t=>t.authorName))]}function hi(e){return`@${String(e||"user").trim().replace(/\s+/g,"_").toLowerCase()}`}function st(e,t){return e.length?`
    <div class="feed-grid feed-grid--single">
      ${e.map(a=>ai(a,{mode:"minimal"})).join("")}
    </div>
  `:`<p class="empty-copy">${t}</p>`}function Pa(e,t){return e.length?`
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
  `:'<p class="empty-copy">Saved magazine issues will appear here.</p>'}function Ea(e,t,a){const o=e.posts.filter(R=>R.authorName===e.profile.name),s=e.posts.filter(R=>R.liked),u=e.posts.filter(R=>R.saved),m=e.issues||[],l=e.followingAuthors,i=a.filter(R=>R!==e.profile.name),p=t.profileSection||"identity",y=t.profileLibraryTab||"liked",S=!!t.profileAvatarCropOpen,E=hi(e.profile.name),B={identity:{label:"Name / ID",value:`<span class="profile-node__avatar">${Oe(e.profile.avatarData,(e.profile.name||"Y").slice(0,1).toUpperCase(),`${e.profile.name} avatar`)}</span>`,angle:0,centerLabel:""},library:{label:"Likes / Saved",value:`<span class="profile-node__icon-pair">${z("heart")}${z("save")}</span>`,angle:60},edit:{label:"Edit",value:"profile",angle:120},posts:{label:"Posts",value:String(o.length),angle:180},magazine:{label:"Magazine",value:String(m.length),angle:240},network:{label:"Follow / Follower",value:`${l.length} / ${i.length}`,angle:300}},T=B[p]||B.identity;function Y(){switch(p){case"identity":return`
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
                  ${l.length?l.map(R=>`
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
              <button class="profile-library-tab ${y==="liked"?"is-active":""}" type="button" data-profile-library-tab="liked" aria-pressed="${y==="liked"?"true":"false"}">${z("heart")}<span>Like</span></button>
              <button class="profile-library-tab ${y==="saved"?"is-active":""}" type="button" data-profile-library-tab="saved" aria-pressed="${y==="saved"?"true":"false"}">${z("save")}<span>Save</span></button>
            </div>
            <section class="profile-library-panel">
              <p class="profile-column-title">${y==="liked"?"Liked Posts":"Saved Posts"}</p>
              ${y==="liked"?st(s,"Posts you liked will appear here."):st(u,"Posts you saved will appear here.")}
            </section>
          </section>
        `;case"magazine":return`
          <section class="profile-section-panel">
            <div class="section-head">
              <h3>Magazine</h3>
            </div>
            ${Pa(m,e.posts||[])}
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
                      ${Oe(e.profile.avatarData,(e.profile.name||"Y").slice(0,1).toUpperCase(),`${e.profile.name} avatar`)}
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
  `}function Ca(e,t){var u;const a=ui(e.posts||[]),o=e.posts.filter(m=>m.authorName===t),s=e.followingAuthors.includes(t);return`
    <section class="page page--profile">
      <header class="page-header page-header--with-back">
        <button class="button button--ghost page-back" type="button" data-close-profile>Back</button>
        <div>
          <p class="page-header__mini">author profile</p>
          <h2 class="page-header__title">${t}</h2>
        </div>
      </header>

      <section class="profile-card">
        <div class="profile-card__avatar">${Oe((u=o[0])==null?void 0:u.authorAvatarData,(t||"Y").slice(0,1).toUpperCase(),`${t} avatar`)}</div>
        <div class="profile-card__body">
          <div class="profile-card__heading">
            <div>
              <h3 class="profile-card__name">${t}</h3>
              <p class="profile-card__bio">${hi(t)}</p>
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
        ${st(o,"This author has no posts yet.")}
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
  `}function Aa(e,t={}){const a=ui(e.posts||[]),o=t.profileAuthor||null;return!o||o===e.profile.name?Ea(e,t,a):Ca(e,o)}function Ba(e,t={}){var u;if(!e)return`
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
            ${Oe(e.authorAvatarData,e.authorIcon,`${e.authorName} avatar`)}
          </button>
          <div>
            <p class="post-card__author">${e.authorName}</p>
            <p class="post-card__time">${ti(e.createdAt)}</p>
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
              ${z("heart")}
              <span>${e.likes}</span>
            </button>
            <button class="icon-button" data-comment="${e.id}" aria-label="Open comments">
              ${z("comment")}
              <span>${((u=e.comments)==null?void 0:u.length)||0}</span>
            </button>
            <button class="icon-button ${e.saved?"is-active":""}" data-save="${e.id}" aria-label="Save post">
              ${z("save")}
              <span>${e.saves}</span>
            </button>
          </div>
          ${o||a?`
            <div class="post-detail-card__owner-actions">
              ${o?`
                <button class="button button--ghost post-detail-card__edit" type="button" data-edit-post="${e.id}" aria-label="Edit post">
                  ${z("edit")}
                </button>
              `:""}
              ${a?`
                <button class="button button--ghost post-detail-card__delete" type="button" data-delete-post="${e.id}" aria-label="Delete post">
                  ${z("trash")}
                </button>
              `:""}
            </div>
          `:""}
        </div>
      </article>
    </section>
  `}async function Na(e,t={}){const{maxWidth:a=900,quality:o=.82}=t,s=await createImageBitmap(e),u=s.width/s.height,m=Math.min(s.width,a),l=Math.round(m/u),i=document.createElement("canvas");return i.width=m,i.height=l,i.getContext("2d").drawImage(s,0,0,m,l),i.toDataURL("image/webp",o)}async function Da(e,t,a={}){var T;const{size:o=320}=a,s=await createImageBitmap(e),u=document.createElement("canvas");u.width=o,u.height=o;const m=u.getContext("2d");if(!m)return"";const l=Math.max(1,Number(t==null?void 0:t.zoom)||1),i=Math.min(1,Math.max(0,Number(t==null?void 0:t.x)||.5)),p=Math.min(1,Math.max(0,Number(t==null?void 0:t.y)||.5)),y=Math.max(o/s.width,o/s.height);s.width*y*l,s.height*y*l;const S=o/(y*l),E=o/(y*l),P=Math.max(0,(s.width-S)*i),B=Math.max(0,(s.height-E)*p);return m.clearRect(0,0,o,o),m.save(),m.beginPath(),m.arc(o/2,o/2,o/2,0,Math.PI*2),m.closePath(),m.clip(),m.drawImage(s,P,B,S,E,0,0,o,o),m.restore(),(T=s.close)==null||T.call(s),u.toDataURL("image/png")}const c={screen:"opening",timelineOverlay:null,timelineTab:"recommended",timelinePan:{x:-360,y:-220},searchQuery:"",searchTags:[],homeTheme:"dark",homeCoreState:"default",homeCoreTapTimestamps:[],previewPostId:null,commentPostId:null,profileEditOpen:!1,profileAuthor:null,profileSection:null,profileLibraryTab:"liked",profileExpanded:!0,profileOrbitRotation:0,profileAvatarCropOpen:!1,composeStage:"select",composeTemplateId:be,composeBackgroundColor:"#f8f4ee",composeEditingPostId:null,composeWorkingDraft:null,openingTapGuardUntil:0,postReturnScreen:"timeline",postReturnProfileAuthor:null,profileReturnState:null,composeReturnState:null},bt=["dark","light","system"],Me={headline:"text",subhead:"text",intro:"text",body:"text",date:"text",editor:"編集者：haru"};function Se(e={}){var t,a,o;return{file:typeof e.file=="string"?e.file:null,position:{x:Number((t=e.position)==null?void 0:t.x)||.5,y:Number((a=e.position)==null?void 0:a.y)||.5,zoom:Math.max(1,Number((o=e.position)==null?void 0:o.zoom)||1)},imageSize:e.imageSize&&Number.isFinite(e.imageSize.width)&&Number.isFinite(e.imageSize.height)?{width:e.imageSize.width,height:e.imageSize.height}:null}}function gi(e={}){var t,a,o;return{templateId:e.templateId||be,backgroundColor:e.backgroundColor||"#f8f4ee",headline:e.headline||Me.headline,subhead:e.subhead||Me.subhead,intro:e.intro||Me.intro,body:e.body||Me.body,date:e.date||Me.date,editor:e.editor||Me.editor,fixedTags:Array.isArray(e.fixedTags)?[...e.fixedTags]:[],freeTags:Array.isArray(e.freeTags)?[...e.freeTags]:String(e.freeTags||"").split(",").map(s=>s.trim()).filter(Boolean),customLayout:e.customLayout?JSON.parse(JSON.stringify(e.customLayout)):null,standardFiles:{primary:Se((t=e.standardFiles)==null?void 0:t.primary),secondary:Se((a=e.standardFiles)==null?void 0:a.secondary),accent:Se((o=e.standardFiles)==null?void 0:o.accent)}}}let Ve=null,Be=0,rt=null,fe=null,qe=null;const W={file:null,previewUrl:"",imageSize:null,crop:{x:.5,y:.5,zoom:1}};function fi(){rt&&(window.clearTimeout(rt),rt=null)}function yi(){fi(),c.homeCoreState="default",c.homeCoreTapTimestamps=[]}function Ze(){W.previewUrl&&URL.revokeObjectURL(W.previewUrl),W.file=null,W.previewUrl="",W.imageSize=null,W.crop={x:.5,y:.5,zoom:1},c.profileAvatarCropOpen=!1}function Ra(){fe!=null&&fe.unmount&&fe.unmount(),fe=null}function Ha(e=c.homeTheme){return e==="system"?typeof window<"u"&&typeof window.matchMedia=="function"&&window.matchMedia("(prefers-color-scheme: dark)").matches?"dark":"light":e==="dark"?"dark":"light"}function qa(){var t;const e=Qe();switch(c.screen){case"home":return Gt(e,c);case"timeline":return ta(e,c);case"search":return sa(e,c);case"compose":return ka({stage:c.composeStage,selectedTemplateId:c.composeTemplateId,selectedBackground:c.composeBackgroundColor,draft:c.composeWorkingDraft||((t=ze(c.composeEditingPostId))==null?void 0:t.composeData)||null,isEditing:!!c.composeEditingPostId});case"magazine":return Ia(e);case"profile":return Aa(e,c);case"post":return Ba(ze(c.previewPostId),{canDelete:bi(ze(c.previewPostId))});default:return Gt(e,c)}}function ze(e){return Qe().posts.find(t=>t.id===e)}function bi(e){return e?e.authorName===Qe().profile.name:!1}function Wa(){if(!Ve)return;const e=["app-shell"],t=["screen-area"],a=Ha(c.homeTheme);e.push(`app-shell--theme-${a}`),e.push(`app-shell--theme-mode-${c.homeTheme}`),c.screen==="home"?(e.push("app-shell--home"),t.push("screen-area--home")):c.screen==="timeline"?(e.push("app-shell--timeline"),t.push("screen-area--timeline")):c.screen==="compose"?(e.push("app-shell--compose"),t.push("screen-area--compose")):c.screen==="search"&&t.push("screen-area--search"),Ve.innerHTML=`
    <div class="${e.join(" ")}">
      <main class="${t.join(" ")}" id="screenArea"></main>
      ${ki()}
      <div id="modalRoot"></div>
    </div>
  `}function Ge(){const e=document.getElementById("modalRoot");if(!e)return;const t=c.commentPostId?ze(c.commentPostId):null;e.innerHTML=`
    ${Ii(t)}
  `,so()}function se(){const e=document.getElementById("screenArea");e&&(e.innerHTML=qa(),ro(),Ge())}function oe(){if(Ve){if(Ra(),c.screen==="opening"){Ve.innerHTML=Xi(),Ya();return}Wa(),se(),ja()}}function St(){return{screen:c.screen,previewPostId:c.previewPostId,profileAuthor:c.profileAuthor,postReturnScreen:c.postReturnScreen,postReturnProfileAuthor:c.postReturnProfileAuthor}}function vi(e,t="home"){if(!e){lt(t);return}c.screen=e.screen||t,c.previewPostId=e.previewPostId||null,c.commentPostId=null,c.profileEditOpen=!1,c.profileAuthor=c.screen==="profile"&&e.profileAuthor||null,c.postReturnScreen=e.postReturnScreen||"home",c.postReturnProfileAuthor=e.postReturnProfileAuthor||null,oe()}function lt(e){e!=="home"&&yi(),e==="compose"&&c.screen!=="compose"&&(c.composeReturnState=St()),e==="profile"&&c.screen!=="profile"&&(c.profileReturnState=St()),e!=="profile"&&(Ze(),c.profileReturnState=null),e!=="home"&&(c.timelineOverlay=null),e!=="compose"&&(c.composeEditingPostId=null,c.composeStage="select",c.composeBackgroundColor="#f8f4ee",c.composeWorkingDraft=null,c.composeReturnState=null),c.screen=e,c.previewPostId=null,c.commentPostId=null,e==="compose"&&(c.composeStage="select",c.composeBackgroundColor="#f8f4ee",c.composeTemplateId=be,c.composeWorkingDraft=gi({templateId:be,backgroundColor:"#f8f4ee"})),e==="profile"&&(Ze(),c.profileAuthor=null,c.profileSection="identity",c.profileLibraryTab="liked",c.profileExpanded=!0,c.profileOrbitRotation=270),e!=="profile"&&(c.profileEditOpen=!1,c.profileAuthor=null),oe()}function wi(){c.previewPostId=null,c.commentPostId=null,c.openingTapGuardUntil=Date.now()+700,c.postReturnScreen="home",c.postReturnProfileAuthor=null,lt("home")}function za(e){Ze(),c.profileReturnState=St(),c.screen="profile",c.previewPostId=null,c.commentPostId=null,c.profileEditOpen=!1,c.profileAuthor=e||null,c.profileSection=e?null:"identity",c.profileLibraryTab="liked",c.profileExpanded=!0,c.profileOrbitRotation=e?0:270,oe()}function Oa(){Ze();const e=c.profileReturnState;c.profileReturnState=null,vi(e,"home")}function Fa(e){c.postReturnScreen=c.screen,c.postReturnProfileAuthor=c.profileAuthor,c.screen="post",c.previewPostId=e,c.commentPostId=null,oe()}function Xa(){const e=c.composeReturnState;c.composeReturnState=null,c.composeWorkingDraft=null,vi(e,"home")}function xi(){c.screen=c.postReturnScreen||"timeline",c.commentPostId=null,c.profileEditOpen=!1,c.profileAuthor=c.screen==="profile"?c.postReturnProfileAuthor:null,oe()}async function Ya(){var u,m,l;const e=document.getElementById("openingCanvas"),t=document.querySelector(".opening-screen");if(!e||!t)return;const a=++Be,o=i=>{i.preventDefault(),i.stopPropagation(),a===Be&&(Be+=1,wi())};t.addEventListener("pointerdown",o,{once:!0});try{(u=document.fonts)!=null&&u.ready?await Promise.race([document.fonts.ready,new Promise(i=>window.setTimeout(i,1200))]):await new Promise(i=>window.setTimeout(i,180))}catch{}if(a!==Be)return;const s=((l=(m=window.matchMedia)==null?void 0:m.call(window,"(prefers-reduced-motion: reduce)"))==null?void 0:l.matches)??!1;Ua(e,a,s)}function Ua(e,t,a){const o=e.getBoundingClientRect(),s=window.devicePixelRatio||1,u=Math.max(1,Math.round(o.width*s)),m=Math.max(1,Math.round(o.height*s)),l=e.getContext("2d");if(!l)return;e.width=u,e.height=m;const i="#ffffff",p='"Zen Old Mincho", "Cormorant Garamond", "Times New Roman", serif',y="ABCDEFGHIJKLMNOPQRSTUVWXYZ",S=Math.min(u*.255,m*.5,138*s),E=`700 ${S}px ${p}`,P=a?1300:3e3,B=a?420:760,T=a?320:620,Y=a?720:2100,R=a?1800:5200,w=P+B+T+Y+R;function G(I,A,U){return Math.min(U,Math.max(A,I))}if(t!==Be)return;function pe(I){return 1-(1-I)**3}function ce(I){return I<.5?4*I*I*I:1-(-2*I+2)**3/2}function O(I,A,U){return I+(A-I)*U}function k(I,A,U){return G((I-A)/U,0,1)}function M(I,A,U,N,ee=1){I.save(),I.globalAlpha=ee,I.font=E,I.textAlign="left",I.textBaseline="middle",I.lineJoin="round",I.lineCap="round",I.lineWidth=Math.max(1.4*s,S*.045),I.strokeStyle="rgba(255, 255, 255, 0.22)",I.strokeText(A,U,N),I.shadowColor="rgba(255, 255, 255, 0.26)",I.shadowBlur=S*.085,I.shadowOffsetY=S*.014,I.fillStyle=i,I.fillText(A,U,N),I.restore()}function q(I=1,A=0){const U=m*.5,N=Math.hypot(u,m),ee=S*.42;l.save(),l.lineWidth=Math.max(1*s,S*.008);for(let J=0;J<3;J+=1){const ne=G(A*.56-J*.18,0,1);ne<=0||ne>=1||(l.globalAlpha=(1-ne)**1.4*.12*I,l.strokeStyle=i,l.beginPath(),l.arc(u/2,U,ee+ne*(N-ee),0,Math.PI*2),l.stroke())}l.restore()}const F=document.createElement("canvas");F.width=u,F.height=m;const C=F.getContext("2d");if(!C)return;const Q=["L","A","N","I"],we=S*.01,he=[-S*.03,-S*.015,-S*.015];C.font=E;const Ne=Q.map(I=>C.measureText(I).width),Ke=Ne.reduce((I,A)=>I+A,0)+we*(Q.length-1)+he.reduce((I,A)=>I+A,0),dt=u/2-Ke/2,Fe=m*.5;C.fillStyle=i,C.font=E,C.textAlign="left",C.textBaseline="middle";let et=dt;const Ie=Q.map((I,A)=>{const U=Ne[A],N=et;et+=U+we+(he[A]||0);const ee=A<2;return{glyph:I,targetX:N,targetY:Fe,startX:ee?-U-Math.random()*u*.16-A*S*.18:u+Math.random()*u*.16+(Q.length-A)*S*.18,startY:Fe+(Math.random()-.5)*S*.42,driftX:(Math.random()-.5)*S*.12,driftY:(Math.random()-.5)*S*.08,enterArc:(Math.random()-.5)*S*.32,delay:A*.055,alpha:.72+Math.random()*.18,width:U}}),De=[],tt=a?Math.max(28,Math.round(u/20)):Math.max(120,Math.round(u/5.5)),it=Ke*.52+S*.16,at=S*.56;for(let I=0;I<tt;I+=1){const A=I%7,U=.86+A*.28+Math.random()*.14,N=Math.random()<.5?1:-1,ee=A>=4?1.35:1;De.push({glyph:y[Math.floor(Math.random()*y.length)],size:Math.max(u,m)*.024+Math.random()*(Math.max(u,m)*.034),angularSpeed:(a?22e-5:4e-4)*(.82+Math.random()*.72)*N,radiusX:Math.min(u*.64,it*U*ee),radiusY:Math.min(m*.42,at*(.86+A*.2+Math.random()*.14)*ee),wobble:S*(.03+Math.random()*.05),wobbleSpeed:.0012+Math.random()*.0016,alpha:a?.16+Math.random()*.1:.24+Math.random()*.18,seed:Math.random()*Math.PI*2})}const $e=performance.now();function Xe(I,A,U="back"){De.forEach(N=>{const ee=I*N.angularSpeed+N.seed,J=Math.sin(ee),ne=J>0;if(U==="front"&&!ne||U==="back"&&ne)return;const ye=Math.sin(I*N.wobbleSpeed+N.seed*1.4)*N.wobble,ie=Math.cos(I*N.wobbleSpeed*.82+N.seed*.9)*N.wobble*.72,Pe=u/2+Math.cos(ee)*N.radiusX+ye,xe=Fe+J*N.radiusY+ie,ae=ne?1+J*.22:.74+(J+1)*.08,Ee=N.alpha*A*(ne?.72+J*.42:.18);Ee<=.015||(l.save(),l.globalAlpha=Ee,l.fillStyle=i,l.font=`500 ${N.size*ae}px ${p}`,l.textAlign="center",l.textBaseline="middle",l.fillText(N.glyph,Pe,xe),l.restore())})}function Ye(I){if(t!==Be)return;const A=I-$e,U=pe(k(A,0,P)),N=ce(k(A,P*.58,B)),ee=ce(k(A,P+B,T)),J=k(A,P+B*.3,T),ne=ce(k(A,P+B+T+Y*.35,R)),ye=Math.max(0,1-ne**2.1);if(l.clearRect(0,0,u,m),l.textAlign="center",l.textBaseline="middle",l.fillStyle=i,Xe(A,Math.max(0,1-J),"back"),Ie.forEach((ie,Pe)=>{const xe=G((U-ie.delay)/(1-ie.delay),0,1);if(xe<=.001)return;const ae=pe(xe),Ee=(1-ae)*ie.enterArc,V=Math.sin(A*.0016+Pe*.9)*S*.005*N,Ue=Math.cos(A*.0012+Pe*1.1)*S*.004*N,Re=O(ie.startX,ie.targetX,ae)+ie.driftX*(1-ae)+V,ge=O(ie.startY,ie.targetY,ae)+Math.sin(ae*Math.PI+Pe*.35)*Ee+ie.driftY*(1-ae)+Ue,je=Math.min(.98,.22+ae*ie.alpha+N*.18+ee*.08)*ye;je<=.02||(l.save(),M(l,ie.glyph,Re,ge,je),l.restore())}),ne>.001&&q(ye,ne),Xe(A,Math.max(0,1-J),"front"),A<w){requestAnimationFrame(Ye);return}t===Be&&wi()}requestAnimationFrame(Ye)}function ja(){const e=(a,o,s)=>Math.min(s,Math.max(o,a));[{element:document.querySelector('[data-side-wheel="main"]'),getItems:()=>Array.from(document.querySelectorAll('[data-side-wheel="main"] [data-side-nav-screen]')),getActiveKey:()=>["timeline","search","compose","profile"].includes(c.screen)?c.screen:c.postReturnScreen||"timeline",applySelection:a=>{if(c.screen===a){oe();return}lt(a)}},{element:document.querySelector('[data-side-wheel="timeline"]'),getItems:()=>Array.from(document.querySelectorAll('[data-side-wheel="timeline"] [data-side-nav-tab]')),getActiveKey:()=>c.timelineTab||"recommended",applySelection:a=>{c.timelineTab=a,oe()}},{element:document.querySelector('[data-side-wheel="profile"]'),getItems:()=>Array.from(document.querySelectorAll('[data-side-wheel="profile"] [data-side-nav-profile-section]')),getActiveKey:()=>c.profileSection||"identity",applySelection:a=>{c.profileSection=a,c.profileSection==="library"&&(c.profileLibraryTab=c.profileLibraryTab||"liked"),oe()}}].filter(a=>a.element).forEach(a=>{const{element:o,getItems:s,applySelection:u,getActiveKey:m}=a,l=s();if(!l.length)return;const i=l.map((k,M)=>({button:k,key:k.dataset.sideNavScreen||k.dataset.sideNavTab||k.dataset.sideNavProfileSection,index:M})),p=Math.max(0,i.findIndex(k=>k.key===m()));let y=!1,S=p,E=0,P=0,B=0,T=null;const Y=k=>{var Q;const M=(Q=i[S])==null?void 0:Q.button.getBoundingClientRect(),q=((M==null?void 0:M.height)||0)/2,F=q,C=window.innerHeight-q;return C<=F?0:e(k,F-window.innerHeight/2,C-window.innerHeight/2)},R=(k,M)=>{const q=o.classList.contains("side-wheel--left")?76:24,F=i.length<=2?88:76;o.style.setProperty("--wheel-offset-y",`${E}px`),o.classList.toggle("is-dragging",!!(T!=null&&T.moved)),i.forEach(C=>{const Q=(C.index-k)*F,we=M||C.index===k?1:0,he=M?C.index===k?1:.9:1,Ne=!M&&C.index===k?P:0;C.button.style.setProperty("--slot-x",`${q}%`),C.button.style.setProperty("--slot-y",`${Q}px`),C.button.style.setProperty("--slot-scale",String(he)),C.button.style.setProperty("--slot-opacity",String(we)),C.button.style.setProperty("--slot-depth",String(Math.abs(C.index-k))),C.button.style.setProperty("--drag-x",`${Ne}px`),C.button.style.setProperty("--drag-y","0px"),C.button.classList.toggle("is-active",C.index===k),C.button.classList.toggle("is-dragging",!!(T!=null&&T.moved)&&C.index===k)})},w=k=>{var C;if(!T||(k==null?void 0:k.pointerId)!=null&&T.pointerId!==k.pointerId)return;const{button:M,pointerId:q,moved:F}=T;(C=M.hasPointerCapture)!=null&&C.call(M,q)&&M.releasePointerCapture(q),T=null,F&&(B=Date.now()+220),R(S,y)},G=k=>{if(!T||T.pointerId!==k.pointerId)return;const M=k.clientX-T.startX,q=k.clientY-T.startY;if(!(!T.moved&&Math.hypot(M,q)<8)){if(T.moved=!0,E=Y(T.startWheelOffsetY+q),T.mode==="collapsed"){const F=T.halfWidth,C=window.innerWidth-T.halfWidth;P=e(T.startCenterX+M,F,C)-T.anchorCenterX}else P=0;R(S,y)}};R(p,!1);const pe=()=>{y=!0,o.classList.add("is-engaged"),P=0,R(S,!0)},ce=()=>{y=!1,o.classList.remove("is-engaged"),R(S,!1)},O=(k=S)=>{S=k;const M=i[S];if(!M){ce();return}u(M.key)};l.forEach(k=>{k.addEventListener("pointerdown",M=>{if(Number(k.dataset.sideIndex||0)!==S)return;const F=k.getBoundingClientRect();T={pointerId:M.pointerId,button:k,mode:y?"engaged":"collapsed",startX:M.clientX,startY:M.clientY,startCenterX:F.left+F.width/2,anchorCenterX:F.left+F.width/2-P,halfWidth:F.width/2,startWheelOffsetY:E,moved:!1},k.setPointerCapture(M.pointerId)}),k.addEventListener("pointermove",G),k.addEventListener("pointerup",w),k.addEventListener("pointercancel",w),k.addEventListener("lostpointercapture",w),k.addEventListener("click",M=>{if(Date.now()<B){M.preventDefault(),M.stopPropagation();return}M.preventDefault();const q=Number(k.dataset.sideIndex||0);if(!y){if(q!==S)return;pe();return}if(q===S){ce();return}O(q)})})})}function ct(e=document){e.querySelectorAll("[data-toggle-tags]").forEach(t=>{t.addEventListener("click",()=>{const a=document.querySelector(`[data-tags-panel="${t.dataset.toggleTags}"]`);a&&(a.hidden=!a.hidden,t.classList.toggle("is-active",!a.hidden))})}),e.querySelectorAll("[data-like]").forEach(t=>{t.addEventListener("click",()=>{Ri(t.dataset.like),se()})}),e.querySelectorAll("[data-save]").forEach(t=>{t.addEventListener("click",()=>{Hi(t.dataset.save),se()})}),e.querySelectorAll("[data-comment]").forEach(t=>{t.addEventListener("click",()=>{c.commentPostId=t.dataset.comment,Ge()})}),e.querySelectorAll("[data-open-preview]").forEach(t=>{t.addEventListener("click",a=>{if(Date.now()<c.openingTapGuardUntil){a.preventDefault(),a.stopPropagation();return}const o=t.dataset.openPreview;Wi(o),Fa(o)})}),e.querySelectorAll("[data-open-author]").forEach(t=>{t.addEventListener("click",()=>{za(t.dataset.openAuthor)})})}function Ja(){const e=document.querySelector(".orbit-home"),t=()=>{e&&(e.classList.remove("orbit-home--default","orbit-home--collapsing","orbit-home--sheep"),e.classList.add(`orbit-home--${c.homeCoreState}`))};document.querySelectorAll("[data-home-theme-toggle]").forEach(a=>{a.addEventListener("click",()=>{const o=bt.indexOf(c.homeTheme);c.homeTheme=bt[(o+1)%bt.length],oe()})}),document.querySelectorAll("[data-home-core-toggle]").forEach(a=>{a.addEventListener("click",()=>{if(c.homeCoreState!=="default")return;const o=Date.now();c.homeCoreTapTimestamps=[...c.homeCoreTapTimestamps.filter(s=>o-s<900),o],!(c.homeCoreTapTimestamps.length<3)&&(c.homeCoreTapTimestamps=[],c.homeCoreState="collapsing",t(),fi(),rt=window.setTimeout(()=>{c.homeCoreState="sheep",t()},620))})}),document.querySelectorAll("[data-home-sheep-toggle]").forEach(a=>{a.addEventListener("click",()=>{c.homeCoreState==="sheep"&&(yi(),t())})})}function Ga(){var a,o;ct(document.getElementById("screenArea"));const e=document.querySelector("[data-timeline-pan-viewport]"),t=document.querySelector("[data-timeline-pan-surface]");if(e&&t){const s=(i,p)=>{const y=Math.min(0,e.clientWidth-t.scrollWidth),S=Math.min(0,e.clientHeight-t.scrollHeight);return{x:Math.max(y,Math.min(0,i)),y:Math.max(S,Math.min(0,p))}},u=(i,p)=>{const y=s(i,p);c.timelinePan=y,t.style.transform=`translate(${y.x}px, ${y.y}px)`};u(((a=c.timelinePan)==null?void 0:a.x)??-360,((o=c.timelinePan)==null?void 0:o.y)??-220);let m=null;t.addEventListener("pointerdown",i=>{var p,y,S;m={pointerId:i.pointerId,startX:i.clientX,startY:i.clientY,originX:((p=c.timelinePan)==null?void 0:p.x)??-360,originY:((y=c.timelinePan)==null?void 0:y.y)??-220,moved:!1},e.classList.add("is-dragging"),(S=t.setPointerCapture)==null||S.call(t,i.pointerId)}),t.addEventListener("pointermove",i=>{if(!m||m.pointerId!==i.pointerId)return;const p=i.clientX-m.startX,y=i.clientY-m.startY;(Math.abs(p)>4||Math.abs(y)>4)&&(m.moved=!0,i.preventDefault()),u(m.originX+p,m.originY+y)});const l=i=>{var p;!m||m.pointerId!==i.pointerId||(e.classList.remove("is-dragging"),m.moved&&(c.openingTapGuardUntil=Date.now()+180),m=null,(p=t.releasePointerCapture)==null||p.call(t,i.pointerId))};t.addEventListener("pointerup",l),t.addEventListener("pointercancel",l)}document.querySelectorAll("[data-timeline-tab]").forEach(s=>{s.addEventListener("click",()=>{c.timelineTab=s.dataset.timelineTab||"recommended",se()})})}function Va(){ct(document.getElementById("screenArea"));const e=document.getElementById("searchInput");e&&e.addEventListener("input",t=>{c.searchQuery=t.target.value;const a=t.target.selectionStart;se();const o=document.getElementById("searchInput");o&&(o.focus(),o.setSelectionRange(a,a))}),document.querySelectorAll("[data-search-tag]").forEach(t=>{t.addEventListener("click",()=>{const a=t.dataset.searchTag;c.searchTags=c.searchTags.includes(a)?c.searchTags.filter(o=>o!==a):[...c.searchTags,a],se()})})}function Za(){document.querySelectorAll("[data-home-nav]").forEach(e=>{e.addEventListener("click",()=>{lt(e.dataset.homeNav)})}),document.querySelectorAll("[data-close-profile]").forEach(e=>{e.addEventListener("click",()=>{Oa()})}),document.querySelectorAll("[data-close-compose]").forEach(e=>{e.addEventListener("click",()=>{Xa()})})}function Kt(e){var t,a;return e.templateId==="page8"&&Array.isArray((t=e.customLayout)==null?void 0:t.pretextBoxes)?e.customLayout.pretextBoxes.filter(o=>o.kind==="title"||o.kind==="body").map(o=>{var s;return String(((s=o.data)==null?void 0:s.text)||"").trim()}).filter(Boolean).join(" / ").slice(0,120):e.templateId==="page8"&&Array.isArray((a=e.customLayout)==null?void 0:a.textBoxes)?e.customLayout.textBoxes.map(o=>String(o.text||"").trim()).filter(Boolean).join(" / ").slice(0,120):[e.headline,e.subhead,e.intro,e.body].map(o=>o.trim()).filter(Boolean).join(" / ").slice(0,120)}function Qa(e,t,a){const{x:o,y:s,maxWidth:u,lineHeight:m,maxLines:l}=a,i=[];String(t||"").split(`
`).forEach(y=>{const S=/\s/.test(y.trim()),E=S?y.split(/\s+/).filter(Boolean):Array.from(y),P=S?" ":"";if(!E.length){i.push("");return}let B="";E.forEach(T=>{const Y=B?`${B}${P}${T}`:T;if(e.measureText(Y).width<=u||!B){B=Y;return}i.push(B),B=T}),B&&i.push(B)}),i.slice(0,l).forEach((y,S)=>{e.fillText(y,o,s+S*m)})}function Mt(e,t,a,o,s,u){e.beginPath(),e.moveTo(t+u,a),e.arcTo(t+o,a,t+o,a+s,u),e.arcTo(t+o,a+s,t,a+s,u),e.arcTo(t,a+s,t,a,u),e.arcTo(t,a,t+o,a,u),e.closePath()}async function Ka(e,t,a,o={x:.5,y:.5}){var T;if(!t)return;const s=typeof t=="string"?await new Promise((Y,R)=>{const w=new Image;w.onload=()=>Y(w),w.onerror=R,w.src=t}):await createImageBitmap(t),u=s.width/s.height,m=a.width/a.height;let l=0,i=0,p=s.width,y=s.height;const S=Math.max(1,Number(o==null?void 0:o.zoom)||1),E=Number.isFinite(o==null?void 0:o.cropX)||Number.isFinite(o==null?void 0:o.cropY);let P=Math.min(1,Math.max(0,o.x??.5)),B=Math.min(1,Math.max(0,o.y??.5));if(E){const Y=u>m?a.height*u:a.width,R=u>m?a.height:a.width/u,w=Math.max(0,Y*S-a.width),G=Math.max(0,R*S-a.height);P=w?Math.min(1,Math.max(0,.5-(Number(o==null?void 0:o.cropX)||0)/w)):.5,B=G?Math.min(1,Math.max(0,.5-(Number(o==null?void 0:o.cropY)||0)/G)):.5}u>m?(p=Math.max(1,s.height*m/S),l=(s.width-p)*P):(y=Math.max(1,s.width/m/S),i=(s.height-y)*B),e.save(),Mt(e,a.x,a.y,a.width,a.height,a.radius),e.clip(),e.drawImage(s,l,i,p,y,a.x,a.y,a.width,a.height),e.restore(),(T=s.close)==null||T.call(s)}function eo(e,t){e.save(),e.lineWidth=4,e.strokeStyle="rgba(34, 28, 25, 0.88)",Mt(e,t.x,t.y,t.width,t.height,t.radius),e.stroke();const a=Math.min(t.width,t.height)*.18,o=t.x+t.width/2,s=t.y+t.height/2;e.beginPath(),e.arc(o,s,a,0,Math.PI*2),e.stroke(),e.beginPath(),e.moveTo(o-a*.42,s),e.lineTo(o+a*.42,s),e.moveTo(o,s-a*.42),e.lineTo(o,s+a*.42),e.stroke(),e.restore()}async function to(e,t,a={}){const m=document.createElement("canvas");m.width=2480,m.height=3508;const l=m.getContext("2d");if(!l)return"";const i=2480/1240;return l.imageSmoothingEnabled=!0,l.imageSmoothingQuality="high",l.fillStyle=e.backgroundColor||"#f8f4ee",l.fillRect(0,0,2480,3508),l.scale(i,i),await va(e.templateId).render(l,e,t,{addWrappedText:Qa,clipRoundedRect:Mt,drawFileCover:Ka,drawSlotPlaceholder:eo,defaults:Me,page8Files:a.page8Files||{}}),m.toDataURL("image/png")}function io(){var Pt,Et,Ct,At,Bt,Nt,Dt,Rt,Ht,qt,Wt,zt;const e=document.querySelector(".page--compose");if(!e)return;const t=e.dataset.composeStage||"select",a=document.getElementById("composeForm"),o=a||e,s=document.getElementById("composeSheet"),u=(s==null?void 0:s.querySelector(".compose-sheet__frame"))||null,m=(s==null?void 0:s.querySelector("[data-custom-canvas]"))||null,l=c.composeWorkingDraft||((Pt=ze(c.composeEditingPostId))==null?void 0:Pt.composeData)||null,i={...Me,...l||{}},p={imageInputPrimary:typeof((Ct=(Et=l==null?void 0:l.standardFiles)==null?void 0:Et.primary)==null?void 0:Ct.file)=="string"?l.standardFiles.primary.file:"",imageInputSecondary:typeof((Bt=(At=l==null?void 0:l.standardFiles)==null?void 0:At.secondary)==null?void 0:Bt.file)=="string"?l.standardFiles.secondary.file:"",imageInputAccent:typeof((Dt=(Nt=l==null?void 0:l.standardFiles)==null?void 0:Nt.accent)==null?void 0:Dt.file)=="string"?l.standardFiles.accent.file:""},y={primary:Se((Rt=l==null?void 0:l.standardFiles)==null?void 0:Rt.primary),secondary:Se((Ht=l==null?void 0:l.standardFiles)==null?void 0:Ht.secondary),accent:Se((qt=l==null?void 0:l.standardFiles)==null?void 0:qt.accent)},S=document.querySelector("[data-toggle-compose-tags]"),E=document.querySelector("[data-compose-tags]"),P=document.querySelector("[data-toggle-compose-preview]"),B=document.querySelector("[data-custom-template-controls]"),T=document.querySelector("[data-custom-inspector]"),Y=document.querySelector("[data-compose-pretext-host]"),R=Array.from(document.querySelectorAll("[data-editable]")),w={options:li((l==null?void 0:l.customLayout)||{}),imageBoxes:xt((l==null?void 0:l.customLayout)||{}),textBoxes:_t((l==null?void 0:l.customLayout)||{},i),selectedId:null,imageMode:"frame"},G={},pe={headline:document.querySelector('[data-editable="headline"]'),subhead:document.querySelector('[data-editable="subhead"]'),intro:document.querySelector('[data-editable="intro"]'),body:document.querySelector('[data-editable="body"]'),date:document.querySelector('[data-editable="date"]'),editor:document.querySelector('[data-editable="editor"]')},ce={primary:document.querySelector('[data-slot="imageInputPrimary"]'),secondary:document.querySelector('[data-slot="imageInputSecondary"]'),accent:document.querySelector('[data-slot="imageInputAccent"]')};function O(){return{primary:Se(y.primary),secondary:Se(y.secondary),accent:Se(y.accent)}}function k(n={}){const r=gi({...c.composeWorkingDraft||l||{},...n});return c.composeWorkingDraft=r,c.composeTemplateId=r.templateId,c.composeBackgroundColor=r.backgroundColor,r}function M(n={}){var $;const{customLayoutOverride:r}=n,d=o.querySelector('input[name="templateId"]:checked'),x=o.querySelector('input[name="backgroundColor"]:checked'),L=String((d==null?void 0:d.value)||(s==null?void 0:s.dataset.template)||c.composeTemplateId||(l==null?void 0:l.templateId)||be),h=String((x==null?void 0:x.value)||c.composeBackgroundColor||(l==null?void 0:l.backgroundColor)||"#f8f4ee"),g=k({templateId:L,backgroundColor:h,standardFiles:O()}),_=a?new FormData(a):null,b=_?_.getAll("fixedTags").map(f=>String(f)):g.fixedTags,v=_?String(_.get("freeTags")||"").split(",").map(f=>f.trim()).filter(Boolean):g.freeTags;if(L==="page8"){const f=r||(($=fe==null?void 0:fe.getSerializedLayout)==null?void 0:$.call(fe))||g.customLayout;return k({fixedTags:b,freeTags:v,customLayout:f})}return k({fixedTags:b,freeTags:v,headline:$e("headline")||g.headline,subhead:$e("subhead")||g.subhead,intro:$e("intro")||g.intro,body:$e("body")||g.body,date:$e("date")||g.date,editor:$e("editor")||g.editor,customLayout:r??null})}const q=n=>{M(),c.composeStage=n,oe()};function F(n){return new Promise(r=>{const d=new Image,x=typeof n=="string"?n:URL.createObjectURL(n);d.onload=()=>{r({width:d.naturalWidth,height:d.naturalHeight}),typeof n!="string"&&URL.revokeObjectURL(x)},d.onerror=()=>{r(null),typeof n!="string"&&URL.revokeObjectURL(x)},d.src=x})}function C(n){const r=document.querySelector(`[data-slot-image="${n}"]`),x=y[n==="imageInputPrimary"?"primary":n==="imageInputSecondary"?"secondary":"accent"];r&&(r.style.backgroundPosition=`${(x.position.x||.5)*100}% ${(x.position.y||.5)*100}%`)}function Q(n){return String(n??"").replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#39;")}function we(n){return`${n}-${Date.now().toString(36)}-${Math.random().toString(36).slice(2,7)}`}function he(n){return G[n]||(G[n]={file:null,position:{x:.5,y:.5,zoom:1},imageSize:null,previewUrl:""}),G[n]}function Ne(n){return n==="title"?{kind:"title",fontSize:.046,lineHeight:1.12,padding:.01,family:"serif",weight:600,align:"left"}:{kind:"body",fontSize:.026,lineHeight:1.45,padding:.012,family:"sans",weight:500,align:"left"}}function Ke(n,r){Object.assign(n,{...n,...Ne(r)})}function dt(n="left"){const r=xe({id:we("text"),kind:"body",text:"text",isDefaultText:!0,x:.18,y:.2,width:.28,height:.12,fontSize:.026,lineHeight:1.45,padding:.012,align:n,family:"sans",weight:500},[...w.imageBoxes.map(d=>J(d)),...w.textBoxes.map(d=>J(d))]);w.textBoxes=[...w.textBoxes,N(r,Ae)],w.selectedId=r.id,te()}function Fe(n){if(n.dataset.singleLine==="true"){n.innerText=n.innerText.replace(/\r?\n+/g," ");return}n.innerHTML=n.innerHTML.replace(/<div><br><\/div>/gi,"<br>").replace(/<div>/gi,"<br>").replace(/<\/div>/gi,"").replace(/&nbsp;/gi," ")}function et(n){const r=Number(n.dataset.maxChars||0),d=n.innerText.replace(/\r/g,"");if(n.dataset.previousValue||(n.dataset.previousValue=d),r&&d.length>r||n.scrollHeight>n.clientHeight+1||n.scrollWidth>n.clientWidth+1){n.innerText=n.dataset.previousValue;return}n.dataset.previousValue=d.trim()?d:""}function Ie(n){return n.innerText.replace(/\r/g,"")}function De(n){const r=window.getSelection();if(!r)return;const d=document.createRange();d.selectNodeContents(n),d.collapse(!1),r.removeAllRanges(),r.addRange(d)}function tt(n){const r=window.getSelection();if(!r||r.rangeCount===0)return 0;const d=r.getRangeAt(0);return!n.contains(d.startContainer)||!n.contains(d.endContainer)?0:r.toString().length}function it(n,r){const d=window.getSelection();if(!d||d.rangeCount===0){n.append(document.createTextNode(r)),De(n);return}const x=d.getRangeAt(0);x.deleteContents();const L=document.createTextNode(r);x.insertNode(L),x.setStartAfter(L),x.collapse(!0),d.removeAllRanges(),d.addRange(x)}function at(n){!e||!P||(e.classList.toggle("is-preview-mode",n),P.textContent=n?"back":"preview",P.setAttribute("aria-pressed",String(n)),R.forEach(r=>{r.setAttribute("contenteditable",n?"false":"true"),n&&r.blur()}),(s==null?void 0:s.dataset.template)==="page8"&&te())}function $e(n){const r=document.querySelector(`[data-editable="${n}"]`);return r?r.innerText.replace(/\r/g,"").trim():""}function Xe(){const n=o.querySelector('input[name="backgroundColor"]:checked'),r=(n==null?void 0:n.value)||c.composeBackgroundColor||"#f8f4ee";if(c.composeBackgroundColor=r,k({backgroundColor:r}),!s){o.querySelectorAll(".color-chip").forEach(d=>{const x=d.querySelector('input[name="backgroundColor"]');d.classList.toggle("is-active",!!(x!=null&&x.checked))});return}s.style.setProperty("--sheet-bg",r),o.querySelectorAll(".color-chip").forEach(d=>{const x=d.querySelector('input[name="backgroundColor"]');d.classList.toggle("is-active",!!(x!=null&&x.checked))})}function Ye(n){const r=n||be,d=(s==null?void 0:s.dataset.template)||(Y?"page8":null),x=t==="edit"&&d&&d!==r&&(d==="page8"||r==="page8");if(c.composeTemplateId=r,k({templateId:r}),x){oe();return}if(!s){o.querySelectorAll(".template-thumb").forEach(h=>{const g=h.querySelector('input[name="templateId"]');h.classList.toggle("is-active",(g==null?void 0:g.value)===r)}),Y&&r!=="page8"&&oe();return}s.dataset.template=r,o.querySelectorAll(".template-thumb").forEach(h=>{const g=h.querySelector('input[name="templateId"]');h.classList.toggle("is-active",(g==null?void 0:g.value)===r)});const L=r==="page8";B&&(B.hidden=!0),s.classList.toggle("compose-sheet--custom",L),pt()}function I(n){var d;const r=o.querySelector(`input[name="templateId"][value="${n}"]`);(d=r==null?void 0:r.closest(".template-thumb"))==null||d.scrollIntoView({behavior:"smooth",block:"nearest",inline:"center"})}function A(n){var d;const r=o.querySelector(`input[name="backgroundColor"][value="${n}"]`);(d=r==null?void 0:r.closest(".color-chip"))==null||d.scrollIntoView({behavior:"smooth",block:"nearest",inline:"center"})}function U(n){const r=document.querySelector(`[data-slot-image="${n}"]`),d=document.querySelector(`[data-slot-placeholder="${n}"]`),x=document.querySelector(`[data-slot-remove="${n}"]`);if(!(!r||!d||!x)){if(p[n]){r.style.backgroundImage=`url("${p[n]}")`,r.hidden=!1,d.hidden=!0,x.hidden=!1;return}r.style.backgroundImage="",r.hidden=!0,d.hidden=!1,x.hidden=!0}}function N(n,r){const d=Math.min(H.width,Math.max(r.width,n.width)),x=Math.min(H.height,Math.max(r.height,n.height));return{...n,x:Math.min(H.x+H.width-d,Math.max(H.x,ke(n.x))),y:Math.min(H.y+H.height-x,Math.max(H.y,ke(n.y))),width:ke(d),height:ke(x)}}function ee(n,r,d=.02){return!(n.x+n.width+d<=r.x||r.x+r.width+d<=n.x||n.y+n.height+d<=r.y||r.y+r.height+d<=n.y)}function J(n){return{x:n.x,y:n.y,width:n.width,height:n.height}}function ne(n,r={}){const{ignoreText:d=!1,ignoreImages:x=!1}=r;return[...x?[]:w.imageBoxes.filter(L=>L.id!==n).map(L=>J(L)),...d?[]:w.textBoxes.filter(L=>L.id!==n).map(L=>J(L))]}function ye(n,r,d={}){const x=J(n);return!ne(r,d).some(h=>ee(x,h))}function ie(n,r,d,x={}){const L=N({...n},d);if(ye(L,r,x))return L;const h=[[0,-1],[1,0],[0,1],[-1,0],[1,-1],[1,1],[-1,1],[-1,-1]],g=We*2;for(let _=1;_<=18;_+=1)for(const[b,v]of h){const $=N({...L,x:L.x+b*g*_,y:L.y+v*g*_},d);if(ye($,r,x))return $}for(let _=H.y;_<=H.y+H.height-L.height;_+=g)for(let b=H.x;b<=H.x+H.width-L.width;b+=g){const v=N({...L,x:b,y:_},d);if(ye(v,r,x))return v}return L}function Pe(n,r,d=.018){const x=n.y-d,L=n.y+n.height+d,h=H.x,g=H.x+H.width;let _=[{left:h,right:g}];return r.forEach(b=>{const v=b.y-d;if(b.y+b.height+d<=x||v>=L)return;const f=Math.max(h,b.x-d),D=Math.min(g,b.x+b.width+d);_=_.flatMap(j=>{if(D<=j.left||f>=j.right)return[j];const X=[];return f>j.left&&X.push({left:j.left,right:f}),D<j.right&&X.push({left:D,right:j.right}),X})}),_.filter(b=>b.right-b.left>=n.width)}function xe(n,r){const d=N({...n},Ae),x=[];for(let g=0;g<=24;g+=1){const _=ke(d.y-g*We),b=ke(d.y+g*We);_>=H.y&&x.push(_),b<=H.y+H.height-d.height&&b!==_&&x.push(b)}let L=d,h=Number.POSITIVE_INFINITY;return x.forEach(g=>{const _={...d,y:g};Pe(_,r).forEach(v=>{const $=v.left,f=v.right-d.width,D=ke(Math.min(f,Math.max($,d.x))),j=N({...d,x:D,y:g},Ae);if(r.some(ue=>ee(J(j),ue)))return;const X=Math.abs(j.x-d.x),me=Math.abs(j.y-d.y)*2+X;me<h&&(h=me,L=j)})}),L}function ae(n){const r=V(n);!r||r.type!=="image"||(w.textBoxes=w.textBoxes.map(d=>{const x=[...w.imageBoxes.filter(L=>L.id!==d.id).map(L=>J(L)),...w.textBoxes.filter(L=>L.id!==d.id).map(L=>J(L))];return xe(d,x)}))}function Ee(n){return[...w.imageBoxes.filter(r=>r.id!==n).map(r=>J(r)),...w.textBoxes.filter(r=>r.id!==n).map(r=>J(r))]}function V(n){const r=w.imageBoxes.findIndex(x=>x.id===n);if(r>=0)return{type:"image",collection:w.imageBoxes,index:r,item:w.imageBoxes[r]};const d=w.textBoxes.findIndex(x=>x.id===n);return d>=0?{type:"text",collection:w.textBoxes,index:d,item:w.textBoxes[d]}:null}function Ue(n){return n==="image"?vt:Ae}function Re(n){return`${Math.round(n*100)}%`}function ge(n,r={}){const{rerender:d=!1}=r;if(!u||!m)return;const x=n?V(n):null;if(!x||x.type!=="text")return;const L=m.querySelector(`[data-custom-text="${n}"]`);if(!L)return;const h=u.getBoundingClientRect();if(!h.height)return;const g=Math.max(Ae.height,ke((L.scrollHeight+8)/h.height));if(!(Math.abs(g-x.item.height)<We/2)){if(x.item.height=g,Object.assign(x.item,N(x.item,Ae)),Object.assign(x.item,xe(x.item,Ee(n))),d){te();return}Lt(n,x.item),Te()}}function je(){m&&m.querySelectorAll("[data-custom-item]").forEach(n=>{n.classList.toggle("is-selected",n.dataset.customItem===w.selectedId)})}function Lt(n,r){const d=m==null?void 0:m.querySelector(`[data-custom-item="${n}"]`);if(!d)return;const x=gt(r);d.style.left=x.left,d.style.top=x.top,d.style.width=x.width,d.style.height=x.height}function It(){[...w.imageBoxes,...w.textBoxes].forEach(n=>{Lt(n.id,n)})}function mt(n,r={}){const{rerender:d=!1}=r;if(w.selectedId=n,d&&(s==null?void 0:s.dataset.template)==="page8"){te();return}je(),Te()}function Te(){var r,d,x,L,h,g,_,b;if(!T||(s==null?void 0:s.dataset.template)!=="page8")return;const n=w.selectedId?V(w.selectedId):null;if(!n){T.innerHTML=`
        <p class="compose-custom-inspector__title">Selection</p>
        <p class="compose-custom-inspector__note">ボックスを選ぶと、ここで内容や見た目を調整できます。</p>
      `;return}if(n.type==="image"){const v=he(n.item.id),$=!!(v.previewUrl||v.file),f=Math.max(1,Number((r=v.position)==null?void 0:r.zoom)||1);T.innerHTML=`
        <p class="compose-custom-inspector__title">Image Box</p>
        <p class="compose-custom-inspector__note">${w.imageMode==="crop"?"Crop 中は画像面をドラッグして見せ方を調整します。":"Frame 中はボックス自体を動かします。Crop に切り替えると画像だけを動かせます。"}</p>
        <div class="compose-custom-inspector__meta">
          <span>W ${Re(n.item.width)}</span>
          <span>H ${Re(n.item.height)}</span>
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
      `,T.querySelectorAll("[data-custom-image-mode]").forEach(D=>{D.addEventListener("click",()=>{D.hasAttribute("disabled")||(w.imageMode=D.dataset.customImageMode==="crop"?"crop":"frame",Te())})}),(d=T.querySelector('[data-custom-control="zoom"]'))==null||d.addEventListener("input",D=>{v.position.zoom=Math.max(1,Number(D.target.value)||1),te()}),(x=T.querySelector('[data-custom-control="replace-image"]'))==null||x.addEventListener("click",()=>{var D;(D=document.getElementById(`custom-image-${n.item.id}`))==null||D.click()})}else{T.innerHTML=`
      <p class="compose-custom-inspector__title">Text Box</p>
      <p class="compose-custom-inspector__note">Title / Body のプリセットを起点にして、細部は個別調整できます。</p>
      <div class="compose-custom-inspector__meta">
        <span>W ${Re(n.item.width)}</span>
        <span>H ${Re(n.item.height)}</span>
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
        <textarea class="compose-custom-inspector__textarea" data-custom-control="text">${Q(n.item.text)}</textarea>
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
        <div class="compose-custom-inspector__segmented compose-custom-inspector__segmented--align">
          <button type="button" data-custom-align="left" class="${n.item.align==="left"?"is-active":""}" aria-label="Align left">${z("alignLeft")}</button>
          <button type="button" data-custom-align="center" class="${n.item.align==="center"?"is-active":""}" aria-label="Align center">${z("alignCenter")}</button>
          <button type="button" data-custom-align="right" class="${n.item.align==="right"?"is-active":""}" aria-label="Align right">${z("alignRight")}</button>
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
    `;const v=T.querySelector('[data-custom-control="text"]');v==null||v.addEventListener("focus",$=>{const f=w.selectedId?V(w.selectedId):null;if(!(!f||f.type!=="text")&&f.item.isDefaultText&&f.item.text.trim().toLowerCase()==="text"){f.item.text="",f.item.isDefaultText=!1,$.target.value="";const D=m==null?void 0:m.querySelector(`[data-custom-text="${f.item.id}"]`);D&&(D.textContent="")}}),v==null||v.addEventListener("input",$=>{const f=w.selectedId?V(w.selectedId):null;if(!f||f.type!=="text")return;f.item.text=$.target.value.replace(/\r/g,""),f.item.isDefaultText=!1;const D=m==null?void 0:m.querySelector(`[data-custom-text="${f.item.id}"]`);D&&D!==document.activeElement&&(D.textContent=f.item.text),ge(f.item.id)}),T.querySelectorAll("[data-custom-preset]").forEach($=>{$.addEventListener("click",()=>{const f=w.selectedId?V(w.selectedId):null;!f||f.type!=="text"||(Ke(f.item,$.dataset.customPreset==="title"?"title":"body"),te(),ge(f.item.id,{rerender:!0}))})}),(L=T.querySelector('[data-custom-control="fontSize"]'))==null||L.addEventListener("input",$=>{const f=w.selectedId?V(w.selectedId):null;!f||f.type!=="text"||(f.item.fontSize=Number($.target.value)/520,te(),ge(f.item.id,{rerender:!0}))}),(h=T.querySelector('[data-custom-control="lineHeight"]'))==null||h.addEventListener("input",$=>{const f=w.selectedId?V(w.selectedId):null;!f||f.type!=="text"||(f.item.lineHeight=Number($.target.value)/100,te(),ge(f.item.id,{rerender:!0}))}),(g=T.querySelector('[data-custom-control="padding"]'))==null||g.addEventListener("input",$=>{const f=w.selectedId?V(w.selectedId):null;!f||f.type!=="text"||(f.item.padding=Number($.target.value)/1e3,te(),ge(f.item.id,{rerender:!0}))}),(_=T.querySelector('[data-custom-control="weight"]'))==null||_.addEventListener("input",$=>{const f=w.selectedId?V(w.selectedId):null;!f||f.type!=="text"||(f.item.weight=Number($.target.value),te(),ge(f.item.id,{rerender:!0}))}),T.querySelectorAll("[data-custom-align]").forEach($=>{$.addEventListener("click",()=>{const f=w.selectedId?V(w.selectedId):null;!f||f.type!=="text"||(f.item.align=$.dataset.customAlign||"left",te())})}),T.querySelectorAll("[data-custom-family]").forEach($=>{$.addEventListener("click",()=>{const f=w.selectedId?V(w.selectedId):null;!f||f.type!=="text"||(f.item.family=$.dataset.customFamily==="serif"?"serif":"sans",f.item.kind=f.item.family==="serif"?"title":"body",f.item.weight=f.item.family==="serif"?Math.max(500,f.item.weight):Math.min(600,f.item.weight),te(),ge(f.item.id,{rerender:!0}))})})}(b=T.querySelector('[data-custom-control="delete"]'))==null||b.addEventListener("click",()=>{const v=w.selectedId,$=v?V(v):null;if($){if($.collection.splice($.index,1),$.type==="image"){const f=G[v];f!=null&&f.previewUrl&&URL.revokeObjectURL(f.previewUrl),delete G[v],ae(v)}w.selectedId=null,te()}})}function te(){if(!m||!s)return;const n=s.dataset.template==="page8",r=t==="edit"&&!(e!=null&&e.classList.contains("is-preview-mode"));if(m.hidden=!n,!n){m.innerHTML="",Te();return}const d=[...w.imageBoxes.map(h=>h.id),...w.textBoxes.map(h=>h.id)];(!w.selectedId||!d.includes(w.selectedId))&&(w.selectedId=d[0]||null);const x=w.imageBoxes.map(h=>{const g=gt(h),_=he(h.id),b=!!(_.previewUrl||_.file),v=_.position||{x:.5,y:.5,zoom:1},$=`${w.selectedId===h.id?" is-selected":""}${b?"":" is-empty"}`,f=b?`<img class="compose-custom-item__image" src="${_.previewUrl}" alt="" draggable="false" style="object-position:${(v.x||.5)*100}% ${(v.y||.5)*100}%;transform:scale(${Math.max(1,v.zoom||1)});" />`:`<div class="compose-custom-item__placeholder"><span class="compose-custom-item__plus">${z("compose")}</span></div>`;return`
        <div
          class="compose-custom-item compose-custom-item--image${$}"
          data-custom-item="${h.id}"
          data-custom-type="image"
          style="left:${g.left};top:${g.top};width:${g.width};height:${g.height};"
        >
          ${r?`<input class="field__file" id="custom-image-${h.id}" type="file" accept="image/*" />`:""}
          ${r?`<div class="compose-custom-item__surface compose-custom-item__surface--image" data-custom-surface="${h.id}">${f}</div>`:`<div class="compose-custom-item__surface compose-custom-item__surface--image">${f}</div>`}
          ${r?`<button class="compose-custom-item__drag" type="button" data-custom-drag="${h.id}" aria-label="move image box">${z("drag")}</button>`:""}
          ${r?`<button class="compose-custom-item__remove" type="button" data-custom-remove="${h.id}" aria-label="remove image box">&times;</button>`:""}
          ${r?`<button class="compose-custom-item__resize" type="button" data-custom-resize="${h.id}" aria-label="resize image box"></button>`:""}
        </div>
      `}).join(""),L=w.textBoxes.map(h=>{const g=gt(h);return`
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
          ${r?`<button class="compose-custom-item__drag" type="button" data-custom-drag="${h.id}" aria-label="move text box">${z("drag")}</button>`:""}
          ${r?`<button class="compose-custom-item__remove" type="button" data-custom-remove="${h.id}" aria-label="remove text box">&times;</button>`:""}
          ${r?`<button class="compose-custom-item__resize" type="button" data-custom-resize="${h.id}" aria-label="resize text box"></button>`:""}
        </div>
      `}).join("");m.innerHTML=`${x}${L}`,Te(),m.onpointerdown=h=>{h.target===m&&(w.selectedId=null,je(),Te())},m.querySelectorAll("[data-custom-item]").forEach(h=>{let g=null;h.addEventListener("pointerdown",b=>{var _e,Ce;const v=h.dataset.customItem||"",$=V(v);if(!$||!u||b.target.closest("[data-custom-remove], [data-custom-resize]"))return;b.preventDefault();const f=b.target.closest("[data-custom-drag]"),D=b.target.closest("[data-custom-text]"),j=b.target.closest("[data-custom-surface]"),X=$.type==="image"?he(v):null;mt(v);const K=u.getBoundingClientRect(),me=!!(X!=null&&X.previewUrl||X!=null&&X.file),ue=$.type==="image"&&w.imageMode==="crop"&&me&&j&&!f;g={pointerId:b.pointerId,itemId:v,mode:ue?"crop-image":"move",originX:ue?X.position.x||.5:$.item.x,originY:ue?X.position.y||.5:$.item.y,startX:b.clientX,startY:b.clientY,frameWidth:K.width,frameHeight:K.height,type:$.type,zoom:((_e=X==null?void 0:X.position)==null?void 0:_e.zoom)||1,targetSurface:$.type==="image"&&!me?j:null,targetText:f?null:D,cropSurface:ue?j:null,dragged:!1},(Ce=h.setPointerCapture)==null||Ce.call(h,b.pointerId)}),h.addEventListener("pointermove",b=>{var j,X;if(!g||g.pointerId!==b.pointerId)return;const v=b.clientX-g.startX,$=b.clientY-g.startY;if(!g.dragged&&Math.hypot(v,$)<6)return;g.dragged=!0,b.preventDefault();const f=V(g.itemId);if(!f)return;const D={x:f.item.x,y:f.item.y,width:f.item.width,height:f.item.height};if(g.mode==="crop-image"){const K=(j=g.cropSurface)==null?void 0:j.getBoundingClientRect(),me=he(g.itemId),ue=me.imageSize;if(!K||!ue)return;const _e=ue.width/ue.height,Ce=K.width/K.height,He=(_e>Ce?K.height*_e:K.width)*g.zoom,$i=(_e>Ce?K.height:K.width/_e)*g.zoom,Ot=Math.max(0,He-K.width),Ft=Math.max(0,$i-K.height);me.position.x=Ot?Math.min(1,Math.max(0,g.originX-v/Ot)):.5,me.position.y=Ft?Math.min(1,Math.max(0,g.originY-$/Ft)):.5;const Xt=(X=g.cropSurface)==null?void 0:X.querySelector(".compose-custom-item__image");Xt&&(Xt.style.objectPosition=`${me.position.x*100}% ${me.position.y*100}%`)}else{f.item.x=g.originX+v/g.frameWidth,f.item.y=g.originY+$/g.frameHeight,Object.assign(f.item,N(f.item,Ue(f.type)));const K=f.type==="image"?{ignoreText:!0}:{};Object.assign(f.item,ie(f.item,f.item.id,Ue(f.type),K)),ye(f.item,f.item.id,K)||Object.assign(f.item,D),f.type==="image"?ae(f.item.id):Object.assign(f.item,xe(f.item,Ee(f.item.id))),Te(),It()}});const _=b=>{var j,X;if(!g||g.pointerId!==b.pointerId)return;const v=g.itemId,$=g.dragged,f=g.targetSurface,D=g.targetText;if(g=null,(j=h.releasePointerCapture)==null||j.call(h,b.pointerId),!$){if(f){(X=document.getElementById(`custom-image-${v}`))==null||X.click();return}D&&(D.focus(),De(D))}};h.addEventListener("pointerup",_),h.addEventListener("pointercancel",_)}),m.querySelectorAll("[data-custom-remove]").forEach(h=>{h.addEventListener("click",g=>{g.preventDefault(),g.stopPropagation();const _=h.dataset.customRemove,b=_?V(_):null;if(b){if(b.collection.splice(b.index,1),b.type==="image"){const v=G[_];v!=null&&v.previewUrl&&URL.revokeObjectURL(v.previewUrl),delete G[_],ae(_)}w.selectedId=null,te()}})}),m.querySelectorAll("[data-custom-text]").forEach(h=>{h.addEventListener("beforeinput",g=>{g.inputType==="insertParagraph"&&(it(h,`
`),g.preventDefault())}),h.addEventListener("focus",()=>{const g=h.dataset.customText,_=g?V(g):null;(_==null?void 0:_.type)==="text"&&_.item.isDefaultText&&_.item.text.trim().toLowerCase()==="text"&&(_.item.text="",_.item.isDefaultText=!1,h.textContent=""),mt(h.dataset.customText||"")}),h.addEventListener("input",()=>{const g=h.dataset.customText,_=g?V(g):null;if(!_)return;_.item.text=h.innerText.replace(/\r/g,""),_.item.isDefaultText=!1;const b=T==null?void 0:T.querySelector('[data-custom-control="text"]');b&&b!==document.activeElement&&(b.value=_.item.text),ge(_.item.id)})}),m.querySelectorAll('input[id^="custom-image-"]').forEach(h=>{h.addEventListener("change",async g=>{var $;const _=h.id.replace("custom-image-",""),b=he(_),v=(($=g.target.files)==null?void 0:$[0])||null;b.previewUrl&&(URL.revokeObjectURL(b.previewUrl),b.previewUrl=""),b.file=v,b.position={x:.5,y:.5,zoom:1},b.imageSize=v?await F(v):null,v&&(b.previewUrl=fileToPreviewUrl(v)),ae(_),te()})}),m.querySelectorAll("[data-custom-resize]").forEach(h=>{let g=null;h.addEventListener("pointerdown",b=>{var D;const v=h.dataset.customResize||"",$=V(v);if(!$||!u)return;b.preventDefault(),b.stopPropagation(),mt(v);const f=u.getBoundingClientRect();g={pointerId:b.pointerId,itemId:v,originX:$.item.x,originY:$.item.y,originWidth:$.item.width,originHeight:$.item.height,startX:b.clientX,startY:b.clientY,frameWidth:f.width,frameHeight:f.height,type:$.type},(D=h.setPointerCapture)==null||D.call(h,b.pointerId)}),h.addEventListener("pointermove",b=>{if(!g||g.pointerId!==b.pointerId)return;b.preventDefault();const v=V(g.itemId);if(!v)return;const $=Ue(g.type),f={x:v.item.x,y:v.item.y,width:v.item.width,height:v.item.height};v.item.width=g.originWidth+(b.clientX-g.startX)/g.frameWidth,v.item.height=g.originHeight+(b.clientY-g.startY)/g.frameHeight,Object.assign(v.item,N(v.item,$));const D=v.type==="image"?{ignoreText:!0}:{};Object.assign(v.item,ie(v.item,v.item.id,$,D)),ye(v.item,v.item.id,D)||Object.assign(v.item,f),v.type==="image"&&ae(v.item.id),Te(),It()});const _=b=>{var v;!g||g.pointerId!==b.pointerId||(g=null,(v=h.releasePointerCapture)==null||v.call(h,b.pointerId))};h.addEventListener("pointerup",_),h.addEventListener("pointercancel",_)}),window.requestAnimationFrame(()=>{w.textBoxes.forEach(h=>{ge(h.id)})})}function pt(){if(!s||!u)return;const n=s.dataset.template==="page8";if(Object.values(ce).forEach(r=>{r&&(r.style.left="",r.style.top="",r.style.width="",r.style.height="")}),Object.entries(pe).forEach(([r,d])=>{d&&(d.style.left="",d.style.top="",d.style.width="",d.style.height="",d.style.fontSize="",d.style.lineHeight="",d.style.textAlign="",r==="editor"&&(d.style.right=""),r==="body"&&(d.style.bottom=""),r==="date"&&(d.style.bottom=""))}),B&&(B.hidden=!n||t!=="edit"),!n){m&&(m.hidden=!0,m.innerHTML="");return}w.imageBoxes=xt({imageBoxes:w.imageBoxes}),w.textBoxes=_t({textBoxes:w.textBoxes},i),te()}if(o.querySelectorAll('input[name="backgroundColor"]').forEach(n=>{n.addEventListener("change",()=>{Xe(),A(n.value)})}),Xe(),window.setTimeout(()=>{var n;A((n=o.querySelector('input[name="backgroundColor"]:checked'))==null?void 0:n.value)},0),o.querySelectorAll('input[name="templateId"]').forEach(n=>{n.addEventListener("change",()=>{Ye(n.value),I(n.value)})}),Ye(c.composeTemplateId||((Wt=o.querySelector('input[name="templateId"]:checked'))==null?void 0:Wt.value)),window.setTimeout(()=>{var n;I(c.composeTemplateId||((n=o.querySelector('input[name="templateId"]:checked'))==null?void 0:n.value))},0),document.querySelectorAll("[data-template-carousel-nav]").forEach(n=>{n.addEventListener("click",()=>{const r=document.querySelector("[data-template-carousel]");if(!r)return;const d=n.dataset.templateCarouselNav==="next"?1:-1;r.scrollBy({left:r.clientWidth*.72*d,behavior:"smooth"})})}),document.querySelectorAll("[data-color-carousel-nav]").forEach(n=>{n.addEventListener("click",()=>{const r=document.querySelector("[data-color-carousel]");if(!r)return;const d=n.dataset.colorCarouselNav==="next"?1:-1;r.scrollBy({left:r.clientWidth*.72*d,behavior:"smooth"})})}),document.querySelectorAll("[data-compose-stage-nav]").forEach(n=>{n.addEventListener("click",()=>{const r=n.dataset.composeStageNav;r&&q(r)})}),t==="select"||!a)return;if(S&&E&&S.addEventListener("click",()=>{const n=!E.hidden;E.hidden=n,S.setAttribute("aria-expanded",String(!n))}),P&&P.addEventListener("click",()=>{const n=!(e!=null&&e.classList.contains("is-preview-mode"));at(!!n)}),at(!1),Y){Ti(async()=>{const{mountComposePretextEditor:n}=await import("./pretextComposeBridge-DjLZx5c0.js");return{mountComposePretextEditor:n}},__vite__mapDeps([0,1,2,3,4]),import.meta.url).then(({mountComposePretextEditor:n})=>{Y.isConnected&&(fe=n(Y,{customLayout:(l==null?void 0:l.customLayout)||{},textValues:i}))}).catch(n=>{console.error("Failed to mount pretext compose editor",n),Y.innerHTML='<p class="compose-pretext-host__error">Failed to load the editor.</p>'});return}const re=o.querySelector('[data-custom-add="text"]');let Z=(re==null?void 0:re.closest("[data-custom-add-pop]"))||null,de=(Z==null?void 0:Z.querySelector("[data-custom-add-popover]"))||null;re&&!Z&&(Z=document.createElement("div"),Z.className="compose-custom-add-pop",(zt=re.parentElement)==null||zt.insertBefore(Z,re),Z.appendChild(re)),re&&Z&&!de&&(Z.insertAdjacentHTML("afterbegin",`
      <div class="compose-custom-add-popover" data-custom-add-popover hidden>
        <button class="compose-custom-add-popover__option" type="button" data-custom-add-text-align="left" aria-label="Add left aligned text box">
          ${z("alignLeft")}
        </button>
        <button class="compose-custom-add-popover__option" type="button" data-custom-add-text-align="center" aria-label="Add centered text box">
          ${z("alignCenter")}
        </button>
        <button class="compose-custom-add-popover__option" type="button" data-custom-add-text-align="right" aria-label="Add right aligned text box">
          ${z("alignRight")}
        </button>
      </div>
    `),de=Z.querySelector("[data-custom-add-popover]"),re.setAttribute("aria-haspopup","true"),re.setAttribute("aria-expanded","false"));function ot(){!de||!re||(de.hidden=!0,Z==null||Z.classList.remove("is-open"),re.setAttribute("aria-expanded","false"))}function Si(){!de||!re||(de.hidden=!1,Z==null||Z.classList.add("is-open"),re.setAttribute("aria-expanded","true"))}o.querySelectorAll("[data-custom-add]").forEach(n=>{n.addEventListener("click",r=>{r.preventDefault();const d=n.dataset.customAdd;if((s==null?void 0:s.dataset.template)==="page8"){if(d==="image"){ot();const x={id:we("image"),x:.14,y:.18,width:.28,height:.22};w.imageBoxes=[...w.imageBoxes,N(x,vt)],w.selectedId=x.id,he(x.id),ae(x.id),te();return}de&&(de.hidden?Si():ot())}})}),de==null||de.querySelectorAll("[data-custom-add-text-align]").forEach(n=>{n.addEventListener("click",r=>{r.preventDefault(),(s==null?void 0:s.dataset.template)==="page8"&&(dt(n.dataset.customAddTextAlign||"left"),ot())})}),o.addEventListener("pointerdown",n=>{!de||de.hidden||Z!=null&&Z.contains(n.target)||ot()}),[{inputId:"imageInputPrimary",stateKey:"primary"},{inputId:"imageInputSecondary",stateKey:"secondary"},{inputId:"imageInputAccent",stateKey:"accent"}].forEach(({inputId:n,stateKey:r})=>{const d=document.querySelector(`[data-slot="${n}"]`),x=document.getElementById(n);if(!x)return;x.addEventListener("change",async h=>{var _;const g=((_=h.target.files)==null?void 0:_[0])||null;y[r].file=g?await Na(g,{maxWidth:1600,quality:.9}):null,y[r].position={x:.5,y:.5},y[r].imageSize=g?await F(g):null,p[n]=y[r].file||"",U(n),C(n),k({standardFiles:O()})});const L=document.querySelector(`[data-slot-remove="${n}"]`);if(L&&L.addEventListener("click",h=>{h.preventDefault(),h.stopPropagation(),p[n]="",y[r]={file:null,position:{x:.5,y:.5},imageSize:null},x.value="",U(n),k({standardFiles:O()})}),d){let h=null;d.addEventListener("pointerdown",_=>{var b,v;if(!(e!=null&&e.classList.contains("is-preview-mode"))){if((s==null?void 0:s.dataset.template)==="page8"){const $=w.imageBoxes[r];if(!$||!u)return;_.preventDefault(),_.stopPropagation();const f=u.getBoundingClientRect();h={pointerId:_.pointerId,mode:"move-box",startX:_.clientX,startY:_.clientY,originX:$.x,originY:$.y,frameWidth:f.width,frameHeight:f.height},d.classList.add("is-dragging"),(b=d.setPointerCapture)==null||b.call(d,_.pointerId);return}y[r].file&&(_.preventDefault(),_.stopPropagation(),h={pointerId:_.pointerId,mode:"pan-image",startX:_.clientX,startY:_.clientY,originX:y[r].position.x,originY:y[r].position.y},d.classList.add("is-dragging"),(v=d.setPointerCapture)==null||v.call(d,_.pointerId))}}),d.addEventListener("pointermove",_=>{if(!h||h.pointerId!==_.pointerId)return;if(_.preventDefault(),h.mode==="move-box"){const _e=h.originX+(_.clientX-h.startX)/h.frameWidth,Ce=h.originY+(_.clientY-h.startY)/h.frameHeight,He=w.imageBoxes[r];He.x=Math.min(H.x+H.width-He.width,Math.max(H.x,_e)),He.y=Math.min(H.y+H.height-He.height,Math.max(H.y,Ce)),pt();return}const b=d.getBoundingClientRect(),v=y[r].imageSize;if(!v)return;const $=v.width/v.height,f=b.width/b.height,D=$>f?b.height*$:b.width,j=$>f?b.height:b.width/$,X=Math.max(0,D-b.width),K=Math.max(0,j-b.height),me=_.clientX-h.startX,ue=_.clientY-h.startY;y[r].position.x=X?Math.min(1,Math.max(0,h.originX-me/X)):.5,y[r].position.y=K?Math.min(1,Math.max(0,h.originY-ue/K)):.5,C(n),k({standardFiles:O()})});const g=_=>{var b;!h||h.pointerId!==_.pointerId||(h=null,d.classList.remove("is-dragging"),(b=d.releasePointerCapture)==null||b.call(d,_.pointerId))};d.addEventListener("pointerup",g),d.addEventListener("pointercancel",g)}U(n),C(n)}),pt(),R.forEach(n=>{n.dataset.previousValue=Ie(n),n.addEventListener("beforeinput",r=>{var g;if(n.dataset.singleLine==="true"&&(r.inputType==="insertParagraph"||r.inputType==="insertLineBreak")){r.preventDefault();return}const d=Number(n.dataset.maxChars||0);if(!d||!r.inputType.startsWith("insert"))return;const x=Ie(n).length,L=tt(n),h=((g=r.data)==null?void 0:g.length)??1;x-L+h>d&&r.preventDefault()}),n.addEventListener("paste",r=>{var v,$;r.preventDefault();const d=(($=(v=r.clipboardData)==null?void 0:v.getData("text/plain"))==null?void 0:$.replace(/\r/g,""))??"",x=n.dataset.singleLine==="true"?d.replace(/\n+/g," "):d,L=Number(n.dataset.maxChars||0),h=Ie(n).length,g=tt(n),_=L?Math.max(0,L-(h-g)):x.length,b=x.slice(0,_);b&&(it(n,b),n.dataset.previousValue=Ie(n))}),n.addEventListener("input",()=>{const r=Number(n.dataset.maxChars||0),d=Ie(n);if(r&&d.length>r){n.innerText=n.dataset.previousValue||"",De(n);return}n.dataset.previousValue=d}),n.addEventListener("blur",()=>{Fe(n),et(n)})}),t==="tags"&&a.addEventListener("submit",async n=>{var h;n.preventDefault();const r=M(),d={templateId:r.templateId,backgroundColor:r.backgroundColor,headline:r.headline,subhead:r.subhead,intro:r.intro,body:r.body,date:r.date,editor:r.editor,customLayout:r.customLayout},x=await to(d,r.standardFiles,{}),L=String(((h=Qe().profile)==null?void 0:h.name)||"you").trim()||"you";c.composeEditingPostId?Ni(c.composeEditingPostId,{caption:Kt(d),imageData:x,fixedTags:r.fixedTags,freeTags:r.freeTags,composeData:{...d,fixedTags:r.fixedTags,freeTags:r.freeTags,standardFiles:r.standardFiles}}):Bi({authorName:L,caption:Kt(d),imageData:x,fixedTags:r.fixedTags,freeTags:r.freeTags,composeData:{...d,fixedTags:r.fixedTags,freeTags:r.freeTags,standardFiles:r.standardFiles}}),c.screen="timeline",c.timelineTab="recommended",c.composeStage="select",c.composeWorkingDraft=null,oe()})}function ao(){const e=document.getElementById("issueForm");e&&e.addEventListener("submit",t=>{t.preventDefault();const a=new FormData(e),o=a.getAll("issuePostIds").map(s=>String(s));o.length&&(Fi({title:String(a.get("title")).trim(),subtitle:String(a.get("subtitle")||"").trim(),tone:String(a.get("tone")||"soft"),postIds:o}),se())})}function oo(){ct(document.getElementById("screenArea"));function e(l){return new Promise(i=>{const p=new Image,y=URL.createObjectURL(l);p.onload=()=>{i({width:p.naturalWidth,height:p.naturalHeight}),URL.revokeObjectURL(y)},p.onerror=()=>{i(null),URL.revokeObjectURL(y)},p.src=y})}document.querySelectorAll("[data-profile-avatar-upload]").forEach(l=>{l.addEventListener("click",i=>{i.stopPropagation(),c.profileExpanded=!0,c.profileSection="edit",se(),window.setTimeout(()=>{var p;(p=document.getElementById("profileAvatarInput"))==null||p.click()},0)})}),document.querySelectorAll("[data-profile-section]").forEach(l=>{l.addEventListener("click",()=>{c.profileSection=l.dataset.profileSection,c.profileSection==="library"&&(c.profileLibraryTab=c.profileLibraryTab||"liked"),se()})}),document.querySelectorAll("[data-profile-library-tab]").forEach(l=>{l.addEventListener("click",()=>{c.profileLibraryTab=l.dataset.profileLibraryTab||"liked",se()})});const t=document.getElementById("profileAvatarInput"),a=document.getElementById("avatarCropper"),o=document.getElementById("avatarCropSurface"),s=document.getElementById("avatarCropImage");function u(){if(!(!a||!s)){if(!W.file||!W.previewUrl){a.hidden=!0,s.removeAttribute("src");return}a.hidden=!1,s.src=W.previewUrl,s.style.objectPosition=`${W.crop.x*100}% ${W.crop.y*100}%`,s.style.transform=`scale(${W.crop.zoom})`}}if(t&&t.addEventListener("change",async l=>{var p;const i=((p=l.target.files)==null?void 0:p[0])||null;W.previewUrl&&(URL.revokeObjectURL(W.previewUrl),W.previewUrl=""),W.file=i,W.imageSize=i?await e(i):null,W.crop={x:.5,y:.5,zoom:1},i&&(W.previewUrl=fileToPreviewUrl(i)),c.profileAvatarCropOpen=!!i,se()}),o){let l=null;o.addEventListener("pointerdown",p=>{var y;W.file&&(l={pointerId:p.pointerId,startX:p.clientX,startY:p.clientY,originX:W.crop.x,originY:W.crop.y},o.classList.add("is-dragging"),(y=o.setPointerCapture)==null||y.call(o,p.pointerId))}),o.addEventListener("pointermove",p=>{if(!l||l.pointerId!==p.pointerId||!W.imageSize)return;const y=o.getBoundingClientRect(),{width:S,height:E}=W.imageSize,P=S/E,B=y.width/y.height,T=P>B?y.height*P:y.width,Y=P>B?y.height:y.width/P,R=T*W.crop.zoom,w=Y*W.crop.zoom,G=Math.max(0,R-y.width),pe=Math.max(0,w-y.height),ce=p.clientX-l.startX,O=p.clientY-l.startY;W.crop.x=G?Math.min(1,Math.max(0,l.originX-ce/G)):.5,W.crop.y=pe?Math.min(1,Math.max(0,l.originY-O/pe)):.5,u()});const i=p=>{var y;!l||l.pointerId!==p.pointerId||(l=null,o.classList.remove("is-dragging"),(y=o.releasePointerCapture)==null||y.call(o,p.pointerId))};o.addEventListener("pointerup",i),o.addEventListener("pointercancel",i)}u();const m=document.getElementById("profileForm");m&&m.addEventListener("submit",async l=>{l.preventDefault();const i=new FormData(m),p=W.file?await Da(W.file,W.crop,{size:320}):Qe().profile.avatarData;zi({name:String(i.get("name")).trim(),bio:String(i.get("bio")).trim(),avatarData:p}),Ze(),c.profileSection=null,c.profileExpanded=!0,se()}),document.querySelectorAll("[data-follow-author]").forEach(l=>{l.addEventListener("click",()=>{Oi(l.dataset.followAuthor),se()})})}function no(){ct(document.getElementById("screenArea")),document.querySelectorAll("[data-close-post-detail]").forEach(e=>{e.addEventListener("click",()=>{xi()})})}function so(){document.querySelectorAll("[data-close-preview]").forEach(e=>{e.addEventListener("click",()=>{c.previewPostId=null,Ge()})}),document.querySelectorAll("[data-close-comments]").forEach(e=>{e.addEventListener("click",()=>{c.commentPostId=null,Ge()})}),document.querySelectorAll("[data-delete-post]").forEach(e=>{e.addEventListener("click",()=>{const t=e.dataset.deletePost;if(!t)return;const a=ze(t);if(bi(a)&&window.confirm("この投稿を削除しますか？")){if(Di(t),c.previewPostId===t&&(c.previewPostId=null),c.commentPostId===t&&(c.commentPostId=null),c.screen==="post"){xi();return}se()}})}),document.querySelectorAll("[data-comment-form]").forEach(e=>{e.addEventListener("submit",t=>{t.preventDefault();const a=e.querySelector('input[name="comment"]');qi(e.dataset.commentForm,a.value),c.commentPostId=e.dataset.commentForm,Ge(),se()})})}function ro(){switch(Za(),c.screen){case"home":Ja();break;case"timeline":Ga();break;case"search":Va();break;case"compose":io();break;case"magazine":ao();break;case"profile":oo();break;case"post":no();break}}function _i(e=document.getElementById("app")){if(!e)throw new Error("bootLegacyApp requires an app root element.");if(Ve=e,typeof window<"u"&&typeof window.matchMedia=="function"&&!qe){qe=window.matchMedia("(prefers-color-scheme: dark)");const t=()=>{c.homeTheme==="system"&&oe()};typeof qe.addEventListener=="function"?qe.addEventListener("change",t):typeof qe.addListener=="function"&&qe.addListener(t)}return oe(),{render:oe}}if(typeof window<"u"&&!window.__MEMORIES_REACT_HOST__){const e=document.getElementById("app");e&&_i(e)}const co=Object.freeze(Object.defineProperty({__proto__:null,bootLegacyApp:_i},Symbol.toStringTag,{value:"Module"}));export{H as P,_t as a,co as b,xt as n};
