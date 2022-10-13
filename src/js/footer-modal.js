
import { openModalFooterEl, backdropEl, modalFooterEl, closeModalFooterBtnEl } from "./refs";

openModalFooterEl.addEventListener('click', onOpenFooterModal);


function onOpenFooterModal() {
    toggleBackdrop();
    onOpenModal(modalFooterEl);
    closeModalFooterBtnEl.addEventListener('click', onCloseFooterModal);
    document.addEventListener('click', onCloseFooterModalByBackdrop);
    document.addEventListener("keydown", onCloseFooterModalByEscape);
}

function onCloseFooterModal() {
    toggleBackdrop();
    onCloseModal(modalFooterEl);
}

// Функция появления/исчезания Backdrop
function toggleBackdrop() {
    backdropEl.classList.toggle('is-hidden');
} 

// Функция закрытия модалки по клику на елемент
function onOpenModal(elem) {
    elem.classList.remove('is-hidden');
    document.body.style.overflow = 'hidden';
}

// Функция закрытия модалки по клику на елемент
function onCloseModal(elem) {
    elem.classList.add('is-hidden');
    document.body.style.overflow = 'scroll';
    removeListeners();
}

// снятие всех слушателей с модалки 
function removeListeners() {
    closeModalFooterBtnEl.removeEventListener('click', onCloseFooterModal);
    document.removeEventListener('click', onCloseFooterModalByBackdrop);
    document.removeEventListener("keydown", onCloseFooterModalByEscape);
}

// Функция закрытия модалки при клике вне модалки
function onCloseFooterModalByBackdrop(e) {
    if (e.target === backdropEl) {
        backdropEl.classList.add('is-hidden');
        onCloseModal(modalFooterEl);
    }
}

// Функция закрытия модалки по ESC     
function onCloseFooterModalByEscape(e) {
    if (e.code === 'Escape') {
        backdropEl.classList.add('is-hidden');
        onCloseModal(modalFooterEl);
    }
}  
    
