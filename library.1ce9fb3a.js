var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},t={},n={},o=e.parcelRequired7c6;null==o&&((o=function(e){if(e in t)return t[e].exports;if(e in n){var o=n[e];delete n[e];var i={id:e,exports:{}};return t[e]=i,o.call(i.exports,i,i.exports),i.exports}var l=new Error("Cannot find module '"+e+"'");throw l.code="MODULE_NOT_FOUND",l}).register=function(e,t){n[e]=t},e.parcelRequired7c6=o),o("225bx"),o("ezyJp");var i=o("31u3U");let l=[],s=[];function a(e){l.push(e),i.localStorageUs.save("Watched",l)}function r(e){s.push(e),i.localStorageUs.save("Queue",s)}function c(e,t){e.style.backgroundColor="#ff6b08",e.style.color="#ffffff",e.style.borderColor="#ff6b01",t.style.backgroundColor="#ffffff",t.style.color="black",t.style.borderColor="rgba(0, 0, 0, 0.56)",e.textContent="Added ✅",t.setAttribute("disabled","true"),e.setAttribute("disabled","true")}var d=o("1JKsw");const u=document.querySelector(".modal__backdrop"),f=document.querySelector(".movies"),_=document.querySelector(".closeModal"),m=document.querySelector(".modal__container");function p(){const e=document.querySelector(".film__image"),t=document.querySelector(".film__information");e.remove(),t.remove(),u.classList.add("is-hidden"),document.body.style.overflow="scroll",document.removeEventListener("keydown",v),document.removeEventListener("click",b)}function v(e){"Escape"===e.code&&p()}function b(e){e.target===u&&p()}f.addEventListener("click",(function(e){if("IMG"!==e.target.nodeName)return;u.classList.remove("is-hidden"),document.body.style.overflow="hidden",document.addEventListener("keydown",v),document.addEventListener("click",b);let t=e.target.dataset.id,n=Number(t),o=function(){let e=localStorage.getItem("dataInApi");try{return JSON.parse(e)}catch(e){console.warn("Ошибка во время парса данных с локального хранилища")}}().results.find((e=>e.id===n)),i=o.poster_path,l=(0,d.processingNameFilm)(o.title,o.name),s=o.vote_average,f=o.vote_count,_=o.popularity,p=(0,d.processingGenre)(o.genre_ids),g=o.overview;m.insertAdjacentHTML("afterbegin",function(e,t,n,o,i,l,s){return`\n  <div class="film__image">\n  <img class="image" src="https://image.tmdb.org/t/p/w400/${e}" alt=${t}/>\n    </div>\n    <div class="film__information">\n      <div>\n        <h2 class="film__title">${t}</h2>\n        <ul>\n          <li class="film__item">\n            <p class="film__details">Vote / Votes</p>\n            <p class="film__info--uper">\n              <span class="film__rating--orange">${n}</span>\n              <span class="film__rating--divider"> / </span>\n              <span class="vote-count">${o}</span>\n            </p>\n          </li>\n          <li class="film__item">\n            <p class="film__details">Popularity</p>\n            <p class="film__info--uper">${i}</p>\n          </li>\n          <li class="film__item">\n            <p class="film__details">Original title</p>\n            <p>${t}</p>\n          </li>\n          <li class="film__item">\n            <p class="film__details">Genre</p>\n            ${0!==l.length?`<p class="film__info">${l}</p>`:'<p class="film__info">No information</p>'}\n          </li>\n        </ul>\n      </div>\n      <div>\n        <h3 class="film__about__title">About</h3>\n        ${s?`<p class="film__about__text">${s}</p>`:'<p class="film__about__text">No information</p>'}\n      </div>\n      <div class="film__button__wrapper">\n        <button type="button" class="film__button btn__watch">Add to watched</button>\n        <button type="button" class="film__button btn__queue">Add to queue</button>\n      </div>\n      </div>`}(i,l,s,f,_,p,g));const y={poster_path:i,title:l,vote_average:s,vote_count:f,popularity:_,genre_ids:p,overview:g},h=document.querySelector(".btn__watch"),w=document.querySelector(".btn__queue");h.addEventListener("click",(()=>{w.textContent="You add film to watched",c(h,w),a(y)})),w.addEventListener("click",(()=>{h.textContent="You add film to queue ",c(w,h),r(y)}))})),_.addEventListener("click",p);
//# sourceMappingURL=library.1ce9fb3a.js.map
