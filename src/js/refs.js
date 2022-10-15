export const ApiKey = '3ec430a354e7116e3d9f9a41b82b2275';
export let page = 1;

// До авторизації
const refs = {
  toTopBtn: document.querySelector('.btn-to-top'),
  modalBackdrop: document.querySelector('.modal-backdrop'),
  headerLogIn: document.querySelector('.header-logIn'),
  headerLogOut: document.querySelector('.header-logOut'),
  headerMyLibrary: document.querySelector('#header-myLibrary'),
  openModalBtn: document.querySelector('[data-modal-open]'),
  closeModalBtn: document.querySelector('[data-modal-close]'),
  modal: document.querySelector('[data-modal-login]'),
  backdropLogIn: document.querySelector('.backdrop_login'),
  modalDivLogIn: document.querySelector('.modal_login'),
  formLogIn: document.querySelector('.modal_login__form'),
  formTitleSignIn: document.querySelector('.modal_login__title_signIn'),
  formTitleSignUp: document.querySelector('.modal_login__title_signUp'),
  formWrapName: document.querySelector('.modal_login__wrap_name'),
  inputPassword: document.querySelector('#password'),
  buttonShowPassword: document.querySelector('#button_show_password'),
  iconForShowPassword: document.querySelector('#icon_show_password'),
  iconForUnShowPassword: document.querySelector('#icon_un_show_password'),
  formWrapCheckbox: document.querySelector('.modal_login__wrap_checkbox'),
  formCheckbox: document.querySelector('#checkbox'),
  buttonRegister: document.querySelector('.modal_login__button_register'),
  buttonConfirm: document.querySelector('.modal_login__button_confirm'),
  signUp: document.querySelector('.signUp_now'),
  signUpLink: document.querySelector('.signUp_now__link'),
  signIn: document.querySelector('.signIn_now'),
  signInLink: document.querySelector('.signIn_now__link'),
  logOut: document.querySelector('#header-logOut'),
  loader: document.querySelector('.loader'),
  
};
export const {
  toTopBtn,
  modalBackdrop,
  headerLogIn,
  headerLogOut,
  headerMyLibrary,
  openModalBtn,
  closeModalBtn,
  modal,
  backdropLogIn,
  modalDivLogIn,
  formLogIn,
  formTitleSignIn,
  formTitleSignUp,
  formWrapName,
  inputPassword,
  buttonShowPassword,
  iconForShowPassword,
  iconForUnShowPassword,
  formWrapCheckbox,
  formCheckbox,
  buttonRegister,
  buttonConfirm,
  signUp,
  signUpLink,
  signIn,
  signInLink,
  logOut,
  loader,
  
} = refs;

// До футера
export const openModalFooterEl = document.querySelector('[data-team-modal-open]');
export const backdropEl = document.querySelector('.backdrop');

export const modalFooterEl = document.querySelector('[data-footer-modal]');
export const closeModalFooterBtnEl = document.querySelector('[data-team-modal-close]');

// До бібліотеки
export const openWatchedBtn = document.querySelector('.js-watched');
export const openQueueBtn = document.querySelector('.js-queue');

// Для перемикання сторінок

export const bodyElement = document.querySelector('body');

