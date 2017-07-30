
var counting = false;

timer = 150000;

function start() {
  counting = true;
};

function stop() {
  counting = false;
};

var countdown = setInterval(tick, 1000);
function tick() {
  if (counting) {
    timer -= 1000;
    var min = Math.floor(timer % (1000*60*60)/(1000*60));
    var seconds = Math.floor(timer % (1000*60)/(1000));
    if (seconds < 10) {
      seconds = "0" + seconds;
    };
    document.title = min + " : " + seconds;
    document.getElementById('banner').innerHTML = min + "m " + seconds + "s";
  };

};
