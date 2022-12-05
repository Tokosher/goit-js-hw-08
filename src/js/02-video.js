import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

const CURRENT_TIME_KEY = "videoplayer-current-time";

const iframe = document.querySelector('iframe');
const player = new Player(iframe);

setCurrentTime();

player.on('timeupdate', throttle(saveCurrentTime, 1000));

function saveCurrentTime({seconds}) {
  localStorage.setItem(CURRENT_TIME_KEY, seconds)
}

function setCurrentTime() {
  if (!localStorage[CURRENT_TIME_KEY]) return;

  player.setCurrentTime(localStorage[CURRENT_TIME_KEY]);
}