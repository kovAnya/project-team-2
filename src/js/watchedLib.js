import { openWatchedBtn } from './refs';
import { renderMoviesTrending } from './renderMoviesTrending';

openWatchedBtn.addEventListener('click', onWatchedBtnClick);
function onWatchedBtnClick() {
  console.log('clicked');
}
