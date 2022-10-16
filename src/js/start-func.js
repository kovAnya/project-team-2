import { saveMovieGenresInStorage } from './genres';
import { renderMoviesTrending } from './renderMoviesTrending';
import { fetchMoviesTrending } from './fetchMoviesTrending';
import { page, bodyElement, container } from './refs';

export async function start() {
  const genresStepFirst = await saveMovieGenresInStorage();
  function renderPage(bodyElement) {
    if (bodyElement.dataset.page === 'index') {
      renderMoviesTrending(fetchMoviesTrending(page));
    } else if (bodyElement.dataset.page === 'library') {
      container.classList.add('visually-hidden');
    }
  }

  renderPage(bodyElement);
}
