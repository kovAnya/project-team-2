!function(){var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},n={},t={},i=e.parcelRequired7c6;null==i&&((i=function(e){if(e in n)return n[e].exports;if(e in t){var i=t[e];delete t[e];var o={id:e,exports:{}};return n[e]=o,i.call(o.exports,o,o.exports),o.exports}var l=new Error("Cannot find module '"+e+"'");throw l.code="MODULE_NOT_FOUND",l}).register=function(e,n){t[e]=n},e.parcelRequired7c6=i),i("cx81q"),i("twtVq");var o=i("lnzPg"),l=document.querySelector(".modal__backdrop"),a=document.querySelector(".movies"),c=document.querySelector(".closeModal"),s=document.querySelector(".modal__container"),r="https://image.tmdb.org/t/p",d="w400";function u(){var e=document.querySelector(".film__image"),n=document.querySelector(".film__information");e.remove(),n.remove(),l.classList.add("is-hidden"),document.body.style.overflow="scroll",document.removeEventListener("keydown",_),document.removeEventListener("click",m)}function _(e){"Escape"===e.code&&u()}function m(e){e.target===l&&u()}a.addEventListener("click",(function(e){if("IMG"!==e.target.nodeName)return;l.classList.remove("is-hidden"),document.body.style.overflow="hidden",document.addEventListener("keydown",_),document.addEventListener("click",m);var n=e.target.dataset.id,t=Number(n),i=function(){var e=localStorage.getItem("dataInApi");try{return JSON.parse(e)}catch(e){console.warn("Ошибка во время парса данных с локального хранилища")}}().results.find((function(e){return e.id===t})),a=i.poster_path,c=(0,o.processingNameFilm)(i.title,i.name),u=i.vote_average,f=i.vote_count,p=i.popularity,v=(0,o.processingGenre)(i.genre_ids),g=i.overview;s.insertAdjacentHTML("afterbegin",function(e,n,t,i,o,l,a){return'\n  <div class="film__image">\n  <img class="image" src="'.concat(r,"/").concat(d,"/").concat(e,'" alt=').concat(n,'/>\n    </div>\n    <div class="film__information">\n      <div>\n        <h2 class="film__title">').concat(n,'</h2>\n        <ul>\n          <li class="film__item">\n            <p class="film__details">Vote / Votes</p>\n            <p class="film__info--uper">\n              <span class="film__rating--orange">').concat(t,'</span>\n              <span class="film__rating--divider"> / </span>\n              <span class="vote-count">').concat(i,'</span>\n            </p>\n          </li>\n          <li class="film__item">\n            <p class="film__details">Popularity</p>\n            <p class="film__info--uper">').concat(o,'</p>\n          </li>\n          <li class="film__item">\n            <p class="film__details">Original title</p>\n            <p>').concat(n,'</p>\n          </li>\n          <li class="film__item">\n            <p class="film__details">Genre</p>\n            <p class="film__info">').concat(l,'</p>\n          </li>\n        </ul>\n      </div>\n      <div>\n        <h3 class="film__about__title">About</h3>\n        <p class="film__about__text">').concat(a,'</p>\n      </div>\n      <div class="film__button__wrapper">\n        <button type="button" class="film__button btn__watch">Add to watched</button>\n        <button type="button" class="film__button btn__queue">Add to queue</button>\n      </div>\n      </div>')}(a,c,u,f,p,v,g))})),c.addEventListener("click",u)}();
//# sourceMappingURL=library.40217787.js.map
