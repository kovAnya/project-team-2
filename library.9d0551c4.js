var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},n={},t={},i=e.parcelRequired7c6;null==i&&((i=function(e){if(e in n)return n[e].exports;if(e in t){var i=t[e];delete t[e];var l={id:e,exports:{}};return n[e]=l,i.call(l.exports,l,l.exports),l.exports}var o=new Error("Cannot find module '"+e+"'");throw o.code="MODULE_NOT_FOUND",o}).register=function(e,n){t[e]=n},e.parcelRequired7c6=i),i("225bx"),i("ezyJp");var l=i("1JKsw");const o=document.querySelector(".modal__backdrop"),s=document.querySelector(".movies"),a=document.querySelector(".closeModal"),r=document.querySelector(".modal__container");function c(){const e=document.querySelector(".film__image"),n=document.querySelector(".film__information");e.remove(),n.remove(),o.classList.add("is-hidden"),document.body.style.overflow="scroll",document.removeEventListener("keydown",d),document.removeEventListener("click",_)}function d(e){"Escape"===e.code&&c()}function _(e){e.target===o&&c()}s.addEventListener("click",(function(e){if("IMG"!==e.target.nodeName)return;o.classList.remove("is-hidden"),document.body.style.overflow="hidden",document.addEventListener("keydown",d),document.addEventListener("click",_);let n=e.target.dataset.id,t=Number(n),i=function(){let e=localStorage.getItem("dataInApi");try{return JSON.parse(e)}catch(e){console.warn("Ошибка во время парса данных с локального хранилища")}}().results.find((e=>e.id===t)),s=i.poster_path,a=(0,l.processingNameFilm)(i.title,i.name),c=i.vote_average,u=i.vote_count,m=i.popularity,p=(0,l.processingGenre)(i.genre_ids),f=i.overview;r.insertAdjacentHTML("afterbegin",function(e,n,t,i,l,o,s){return`\n  <div class="film__image">\n  <img class="image" src="https://image.tmdb.org/t/p/w400/${e}" alt=${n}/>\n    </div>\n    <div class="film__information">\n      <div>\n        <h2 class="film__title">${n}</h2>\n        <ul>\n          <li class="film__item">\n            <p class="film__details">Vote / Votes</p>\n            <p class="film__info--uper">\n              <span class="film__rating--orange">${t}</span>\n              <span class="film__rating--divider"> / </span>\n              <span class="vote-count">${i}</span>\n            </p>\n          </li>\n          <li class="film__item">\n            <p class="film__details">Popularity</p>\n            <p class="film__info--uper">${l}</p>\n          </li>\n          <li class="film__item">\n            <p class="film__details">Original title</p>\n            <p>${n}</p>\n          </li>\n          <li class="film__item">\n            <p class="film__details">Genre</p>\n            <p class="film__info">${o}</p>\n          </li>\n        </ul>\n      </div>\n      <div>\n        <h3 class="film__about__title">About</h3>\n        <p class="film__about__text">${s}</p>\n      </div>\n      <div class="film__button__wrapper">\n        <button type="button" class="film__button btn__watch">Add to watched</button>\n        <button type="button" class="film__button btn__queue">Add to queue</button>\n      </div>\n      </div>`}(s,a,c,u,m,p,f))})),a.addEventListener("click",c);
//# sourceMappingURL=library.9d0551c4.js.map
