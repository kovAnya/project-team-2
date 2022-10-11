import { localStorageUs } from './localStorage';
const WATCH_KEY = 'Watched';
const QUEUE_KEY = 'Queue';
let arrWatch = [];
let arrQueue = [];

// export const btnWatch = document.querySelector('.btn__watch');
// export const btnQueue = document.querySelector('.btn__queue');
// btnWatch.addEventListener('click', onWatchedBtnClick);
// btnQueue.addEventListener('click', onQueueBtnClick);
function onWatchedBtnClick(obj) {
  arrWatch.push(obj);
  localStorageUs.save(WATCH_KEY, arrWatch);
}

function onQueueBtnClick(obj) {
  arrQueue.push(obj);
  localStorageUs.save(QUEUE_KEY, arrQueue);
}
export function btnColor(add, btnNo) {
  add.style.backgroundColor = '#ff6b08';
  add.style.color = '#ffffff';
  add.style.borderColor = '#ff6b01';
  btnNo.style.backgroundColor = '#ffffff';
  btnNo.style.color = 'black';
  btnNo.style.borderColor = 'rgba(0, 0, 0, 0.56)';

  add.textContent = 'Added ✅';
  btnNo.setAttribute('disabled', 'true');
  add.setAttribute('disabled', 'true');
}

export { onWatchedBtnClick, onQueueBtnClick };
