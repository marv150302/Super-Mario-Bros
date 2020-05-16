var map = new Map();

var cube = new Cube();

var item = new Item()

var monster = new Monster();

var lastime;

function main() {


  if (mario.life <= 0) {//check if mario is dead

    canvas.game.play = false

  }



  mario.win()

  mario.death();//animate mario death

  var now = Date.now();

  var dt = (now-lastime)/1000.0

  

  mario.draw();//then we draw mario

  if (canvas.game.play) {

    if (mario.power!="Star") {

      levels[WORLD][AREA].main_theme.play();

    }
    levels[WORLD][AREA].main_theme.volume = 0.2

    $("#pause_menu").hide();

    update(dt)

    menu.data()

  }else{

    levels[WORLD][AREA].main_theme.pause();

    if (mario.life > 0) {

      $("#pause_menu").show();

    }

  }

  lastime=now

  requestAnimationFrame(main)
}

//we have to add mario game time
setInterval(function () {

  canvas.game.play ? canvas.game.time-- : false

}, 1000);
