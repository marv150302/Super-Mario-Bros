
var start = 0;

var elapsed = 0

var lastChar = 32;

var pressed = false

var selector = {

  [1] : {

    _index : 0,

    levels : [1,2,3,4]

  },

  [2] : {

    _index : 0,

    levels : [1,2]
  }

}

document.addEventListener("keydown",function (e) {

  lastkey = e.keyCode

  if (e.keyCode==32 && mario.power=="Fire") {



    if (!pressed) {

      pressed = true

      if (lastChar == e.keyCode) {

        mario.state = "throwingFire"

        canvas.game.audio.fireBall_sound.play()

        mario.pushFireball();

      }else{

        lastChar = e.keyCode;

        setTimeout(function() {lastChar = -1;}, 300);

      }

    }

  }
  if (mario.pressKey) {

    mario.key[e.keyCode]=true;

  }
  if (e.keyCode==13) {

    $('#menu').hide();//we hide the menu

    canvas.game.play = !canvas.game.play;
  }

  if (e.keyCode==13 && !canvas.game.play) {

    $("#pause_menu").show();

  }
  if (e.keyCode == 68 && !canvas.game.play) {
    //
    selector[WORLD]._index++

    selector[WORLD]._index >=selector[WORLD].levels.length ? selector[WORLD]._index=selector[WORLD].levels.length-1 : false

    AREA = selector[WORLD].levels[selector[WORLD]._index];

    loadMap()
  }
  if (e.keyCode == 65 && !canvas.game.play) {

    selector[WORLD]._index > 0 ? selector[WORLD]._index-- : selector[WORLD]._index=0

    AREA = selector[WORLD].levels[selector[WORLD]._index];

    loadMap()
  }
  if (e.keyCode == 87) {

    if (WORLD < 2) {

      WORLD++;

    }
    AREA = 1;

    loadMap()

  }
  if (e.keyCode == 83) {

    WORLD--;

    if (WORLD < 1) {

      WORLD = 1;

    }
    AREA = 1;

    loadMap();

  }
  if (e.keyCode==13 && once) {

    once = false

    main()

  }

  if (e.keyCode == 13 ) {

    if (!canvas.game.play) {

      canvas.game.audio.pause_sound.play()

    }else{

      canvas.game.audio.pause_sound.currentTime = 0.0

    }

  }

})
document.addEventListener("keyup",function (e) {

  //we reset everything to normal status
  mario.key[e.keyCode]=false;

  mario.state = "idle"

  mario.step = "";

  mario.size=="big" ? mario.height=32 : false

  camera.speed=camera.old_speed

  pressed = false


})

var once = true
