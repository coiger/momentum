const $clock = document.getElementById('clock');

/**
 * Paint current time (hh:mm:ss) on screen
 */
function paintClock() {
  const date = new Date();
  $clock.textContent = [date.getHours(), date.getMinutes(), date.getSeconds()]
    .map((elmt) => `${elmt}`.padStart(2, '0'))
    .join(':');
}

paintClock(); // Start
setInterval(paintClock, 1000);
