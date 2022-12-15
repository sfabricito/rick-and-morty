(()=>{"use strict";const n="https://rickandmortyapi.com/api/character",a=async a=>{const t=a?`${n}/${a}`:n;try{const n=await fetch(t);return await n.json()}catch(n){console.log("Fetch Error",n)}},t=()=>location.hash.slice(1).toLocaleLowerCase().split("/")[1]||"/",s=()=>'\n        <div class="Error404"> \n            <h2>Error 404</h2>\n        </div>\n    ',e={"/":async()=>{const n=await a();return console.log(n),`\n    <section id="main-cards" class="main-cards">\n        ${n.results.map((n=>`\n        <article class="cards">\n            <a href="#/${n.id}" class="card-link">\n                <div class="Status">\n                    <span title="${n.name}"></span>\n                </div>\n                <img src="${n.image}" alt="Image of the character ${n.name}">\n                <div class="info">\n                    <h3>${n.name}</h3>\n                    <p>${n.origin.name}</p>\n                </div>\n            </a>\n        </article>\n        `)).join("")}\n    </section>\n    <div class="main-btn">\n        <button title="Show more characters" id="btn">Show more</button>\n    </div>\n    `},"/:id":async()=>{const n=t(),s=await a(n);return`\n        <div class="Characters-container">\n            <article class="Characters-card">\n                <h2>${s.name}</h2>\n                <div class="img-container">\n                    <img src="${s.image}" alt="">\n                </div>\n            </article>\n\n            <article class="Characters-card">\n                <div class="Card-text">\n                <h3>Episodes: <span>${s.episode.length}</span></h3>\n                <h3>Status: <span>${s.status}</span></h3>\n                <h3>Species: <span>${s.species}</span></h3>\n                <h3>Gender: <span>${s.gender}</span></h3>\n                <h3>Origin: <span>${s.origin.name}</span></h3>\n                <h3>Last Location: <span>${s.location.name}</span></h3>\n                </div>\n            </article>\n        </div>\n        <div class="main-btn">\n            <a href="/" title="Show more characters" id="btn">Back</a>\n        </div>\n    `},"/Contact":"Contact"},i=async()=>{const n=document.getElementById("header"),a=document.getElementById("main");n.innerHTML=await'\n    <div class="main_head">\n        <div class="main_head-info">\n                <h2>Characters of Rick and Morty</h2>\n                <p>Rick and Morty is an American adult <br> animated science fiction.</p>\n                <p>Built by:</p>\n                <div class="button">\n                    <a href="https://twitter.com/sfabricito" target="_blank" rel="noopener noreferrers" class="logo_twitter"><span></span></a>\n                    <a href="https://github.com/sfabricito" target="_blank" rel="noopener noreferrers" class="logo_github"><span></span></a>\n                </div>\n            </div>\n        <div class="main_head-pic"></div>\n    </div>\n    ';let i=t(),c=await(n=>n.length<=3?"/"===n?n:"/:id":`/${n}`)(i);console.log(c);let r=e[c]?e[c]:s;console.log(r),a.innerHTML=await r()};window.addEventListener("load",i),window.addEventListener("hashchange",i)})();