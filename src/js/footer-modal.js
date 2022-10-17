import { openModalFooterEl, backdropEl } from './refs';
import {
  resetMarkup,
  getTeamMembers,
  renderModalAboutTeam,
} from './footer-modal-markup';

openModalFooterEl.addEventListener('click', onCreationAndOpenFooterModal);

function onOpenFooterModal() {
  const modalFooterEl = document.querySelector('[data-footer-modal]');
  modalFooterEl.classList.remove('is-hidden');

  const closeModalFooterBtnEl = document.querySelector(
    '[data-team-modal-close]'
  );
  closeModalFooterBtnEl.addEventListener('click', onCloseFooterModal);
  document.addEventListener('click', onCloseFooterModalByBackdrop);
  document.addEventListener('keydown', onCloseFooterModalByEscape);
}

function onCloseFooterModal() {
  toggleBackdrop();
  onCloseModal();
}

// Функция появления/исчезания Backdrop
function toggleBackdrop() {
  backdropEl.classList.toggle('is-hidden');
}

// Функция блокировки скролла на всей странице
function onStopScroll() {
  document.body.style.overflow = 'hidden';
}

// Функция закрытия модалки по клику на елемент
function onCloseModal() {
  const modalFooterEl = document.querySelector('[data-footer-modal]');
  modalFooterEl.classList.add('is-hidden');
  document.body.style.overflow = 'scroll';
  removeListeners();
  resetMarkup();
}

// снятие всех слушателей с модалки
function removeListeners() {
  const closeModalFooterBtnEl = document.querySelector(
    '[data-team-modal-close]'
  );
  closeModalFooterBtnEl.removeEventListener('click', onCloseFooterModal);
  document.removeEventListener('click', onCloseFooterModalByBackdrop);
  document.removeEventListener('keydown', onCloseFooterModalByEscape);
}

// Функция закрытия модалки при клике вне модалки
function onCloseFooterModalByBackdrop(e) {
  if (e.target === backdropEl) {
    backdropEl.classList.add('is-hidden');
    onCloseModal();
  }
}

// Функция закрытия модалки по ESC
function onCloseFooterModalByEscape(e) {
  if (e.code === 'Escape') {
    backdropEl.classList.add('is-hidden');
    onCloseModal();
  }
}

async function onCreationAndOpenFooterModal() {
  renderModalAboutTeam();
  toggleBackdrop();
  onStopScroll();
  getTeamMembers();
  setTimeout(onOpenFooterModal, 300);
}
