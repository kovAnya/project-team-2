import { backdropEl } from './refs';
import { localStorageUs } from './localStorage';
import { teamMembers } from './team-members';

const LOCAL_KEY_FOR_TEAM_MODAL = 'teamMembers';

const IMG_LINK =
  'https://raw.githubusercontent.com/kovAnya/project-team-2/main/src/images/team';

// создаем разметку контейнера модалки
export function renderModalAboutTeam() {
  backdropEl.insertAdjacentHTML(
    'afterbegin',
    ` <div class="footer__modal is-hidden" data-footer-modal>
    <button class="modal__close-btn footer-btn" type="button" aria-label="Сlose modal" data-team-modal-close>
     
      <span class="line line-1"></span>
      <span class="line line-2"></span>
      
    </button>
  
    <h2 class="visually-hidden">Our Team</h2>
    <ul class="modal__list"></ul>
    </div>
    </div>`
  );
}

// Создаем разметку карточки члена команды
function renderMarkupOfTeamCards(items) {
  const modalList = document.querySelector('.modal__list');
  const markup = items
    .map(
      ({ link, name, position, img_jpg, img_webp }) =>
        `<li class="modal__item">
                <div class="modal__img">
                   
                <picture>
                <source srcset="${IMG_LINK}${img_webp}" type="image/webp">
    
                <source srcset="${IMG_LINK}${img_jpg}" type="image/jpeg">
    
                <img src="${IMG_LINK}${img_jpg}" alt="${name}">
                </picture>

                <a class="modal__link" href="${link}" target="_blank" rel="noopener noreferrer"  aria-label="github link icon">   
                </a> 
                
                </div>
                <div class="modal__info">
                <p  class="modal__text">${name}</p>
                <p class="modal__text--position">${position}</p>                    
                </div>
            </li>`
    )
    .join('');
  modalList.insertAdjacentHTML('afterbegin', markup);
}

// Удаление разметки
export function resetMarkup() {
  const footerModalEl = document.querySelector('.footer__modal');
  footerModalEl.remove();
}

// Функции для работы с локальным хранилищем для Модалки про команду
function saveTeamMembers() {
  localStorageUs.save(LOCAL_KEY_FOR_TEAM_MODAL, teamMembers);
}

export function getTeamMembers() {
  renderMarkupOfTeamCards(localStorageUs.load(LOCAL_KEY_FOR_TEAM_MODAL));
}

saveTeamMembers();
