Mario.prototype.input = function (dt,move) {

  if (this.key[39] && !this.key[90] && this.pressKey) {//right input

    this.vx+= 10*dt

    this.face = "Right"

    mario.x + mario.width>=camera.axis && !this.complete_level ? animate(dt) : false//animate only if mario is at the middle of the screen
  }
  if (this.key[40] && this.pressKey && mario.size!="small") {

    this.state = "crouch"

    this.height = 16

    this.width = 16

  }
  if (this.key[38] && this.pressKey) {//jump input


    this.state = "jumping"

    if (!this.isJumping) {

      this.vy -= this.jump_height

      this.isJumping = true

      this.jump.play();

    }
  }
  if (this.key[37] && !this.key[90] && this.pressKey) {//left input

    this.vx-= 10*dt

    this.face = "Left"

  }
  if (this.key[90] && !this.key[39] && this.pressKey) {//running

    this.state = "moving"

    this.face=="Right" ? this.vx+= 30*dt : this.vx-= 30*dt//if

    if (this.face=="Right" && mario.complete_level) {

      this.vx += 60*dt

    }

    this.face=="Right" ? camera.speed=200 : null

    mario.x + mario.width>=camera.axis && !this.complete_level ? animate(dt) : false
  }
}
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

  if (e.keyCode == 13 && !canvas.game.play) {

    let pause_audio = new Audio("./sound/pause_menu.mp3")

    pause_audio.play();

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
