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
  const checkWatch = localStorage.getItem(WATCH_KEY);
  if (checkWatch) {
    arrWatch = JSON.parse(checkWatch);
  }

  const filmWatch = arrWatch.find(array => array.id === obj.id);
  if (filmWatch) {
    return;
  }
  arrWatch.push(obj);
  localStorageUs.save(WATCH_KEY, arrWatch);
  return arrWatch;
}

function onQueueBtnClick(obj) {
  const checkQueue = localStorage.getItem(QUEUE_KEY);
  if (checkQueue) {
    arrQueue = JSON.parse(checkQueue);
  }

  const filmQueue = arrQueue.find(array => array.id === obj.id);
  if (filmQueue) {
    return;
  }
  arrQueue.push(obj);
  localStorageUs.save(QUEUE_KEY, arrQueue);
  return arrQueue;
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
export function objInfo(obj) {
  const genres_ids = obj.genres_ids;
  console.log(genres_ids);
}

export { onWatchedBtnClick, onQueueBtnClick };
export function addLocal(obj) {
  const id = obj.id;
  const poster_path = obj.poster_path;
  const name = obj.name;
  const genre_ids = obj.genre_ids;
  const release_date = obj.release_date;
  const first_air_date = obj.first_air_date;
  const title = obj.title;
  const vote_average = obj.vote_average;
  const popularity = obj.popularity;
  const vote_count = obj.vote_count;
  const overview = obj.overview;
  return {
    poster_path,
    title,
    name,
    genre_ids,
    release_date,
    first_air_date,
    id,
    vote_average,
    popularity,
    vote_count,
    overview,
  };
}
