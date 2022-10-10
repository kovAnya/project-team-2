import 'lazysizes'

export function card(poster_path, title, genre_ids, release_date, id) {
  const oneCard = `
      <div class="movie">
        <div class="movie__cover-inner">
          <img
            data-src="${poster_path}"
            class="movie_cover lazyload"
            alt="${title}"
            data-id="${id}"
          />
        </div>
        <div class="movie__info">
          <div class="movie__title">${title}</div>
          <div class="movie__category">${genre_ids}</div>
          <div class="movie__year">${release_date}</div>
        </div>
      </div>`;
  return oneCard;
}
