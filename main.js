var counting = false;

timer = 150000;

function start() {
  counting = true;
  console.log(counting);
};

function stop() {
  counting = false;
  console.log(counting);
};


  var countdown = setInterval(tick, 1000);
  function tick() {
    if (counting) {
      timer -= 1000;
      var min = Math.floor(timer % (1000*60*60)/(1000*60));
      var seconds = Math.floor(timer % (1000*60)/(1000));
      document.title = min + " : " + seconds;
      document.getElementById('banner').innerHTML = min + "m " + seconds + "s";
};

};
