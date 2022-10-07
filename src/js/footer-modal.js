
// import { openModalEl, closeModalBtnEl, backdropEl } from "./refs";

const openModalEl = document.querySelector('[data-team-modal-open]');
const closeModalBtnEl = document.querySelector('[data-team-modal-close]');
const backdropEl = document.querySelector('.backdrop');

openModalEl.addEventListener('click', toggleBackdrop);
closeModalBtnEl.addEventListener('click', toggleBackdrop);

function toggleBackdrop() {
    document.body.classList.toggle('modal-open');
    backdropEl.classList.toggle('is-hidden');
} 