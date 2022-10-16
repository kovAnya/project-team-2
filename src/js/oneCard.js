import 'lazysizes';

const ERROR_IMG = 'https://image.tmdb.org/t/p/w400/null';

export function card(
  poster_path,
  title,
  genre_ids,
  release_date,
  id,
  voteAverage
) {
  const oneCard = `
      <div class="movie">
        <div class="movie__cover-inner">
        ${
          poster_path !== ERROR_IMG
            ? `      <img
            data-src="${poster_path}"
            class="movie_cover lazyload"
            alt="${title}"
            data-id="${id}"   
            srс = "https://raw.githubusercontent.com/kovAnya/project-team-2/main/src/images/placeholder/no-image_desktop.webp"
          />`
            : ''
        }

        </div>
        <div class="movie__info">
          <div class="movie__title">${title}</div>
          <div class="movie__category">${genre_ids} ${
    release_date ? `| ${release_date}` : ''
  }
          <span class="film__rating--orange visually-hidden">${voteAverage}</span></div>
        </div>
      </div>`;
  return oneCard;
}
