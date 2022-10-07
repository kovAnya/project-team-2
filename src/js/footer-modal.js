
const refs = {
    openModalEl: document.querySelector('[data-team-modal-open]'),
    closeModalBtnEl: document.querySelector('[data-team-modal-close]'),
    backdropEl: document.querySelector('.backdrop'),
};

refs.openModalEl.addEventListener('click', toggleBackdrop);
refs.closeModalBtnEl.addEventListener('click', toggleBackdrop);

function toggleBackdrop() {
    document.body.classList.toggle('modal-open');
    refs.backdropEl.classList.toggle('is-hidden');
} 