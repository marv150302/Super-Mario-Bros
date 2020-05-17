function loadCanvas(id,height,width,scale) {

  var layer = document.createElement("canvas");

  var ctx = layer.getContext("2d",{ alpha: true });

  layer.height = height;

  layer.width  = width;

  layer.id = id;

  ctx.scale(scale,scale);

  document.getElementById("game_container").appendChild(layer)

  //document.body.appendChild(layer)

  return ctx;

}

var WORLD=1;

var AREA=1;

var FPS=60;

var canvas = {

  height : 352*2,

  width : 784,

  game : {

    lastime : 0,

    now : 0,

    play: false,

    time : 400,

    death_screen : function (ctx, play, game_life) {

      if (play) {

        ctx.fillStyle = "black";

        ctx.fillRect(0,0,352*2,784);

        ctx.fillStyle = "white";

        ctx.font = "16px mario";

        if (game_life > 0) {

          ctx.fillText("WORLD " + WORLD + "-" + AREA, 8*16, 10*16);

          ctx.drawImage(resources.get("./images/marioPhase/idle-Right-normal-small.png"),10*16,12*16)

          ctx.fillText("x ", 12*16, 13*16);

          ctx.fillText(game_life, 14*16, 13*16);

        }else{

          ctx.font = "32px mario";

          ctx.drawImage(resources.get("./images/marioPhase/death.png",),12*16,12*16)

          ctx.fillText("GAME OVER", 3*16, 10*16);

        }



      }else{

        ctx.clearRect(0,0,352*2,784);

      }

    },

    life : 3,

    audio : {

      pause_once : false,

      main_theme : new Audio(),

      goomba_death_sound : new Array(),

      damage_to_mario : new Array(),

      bowser_voice : new Audio("./sound/bowser.mp3"),

      coin_sound : new Audio("./sound/coin.mov"),

      item_sound : new Audio("./sound/item.mov"),

      mario_jump : new Audio("./sound/jump.mov"),

      mario_death : new Audio("./sound/death.mp3"),

      star_sound : new Audio("./sound/star.mov"),

      pole_sound : new Audio("./sound/win.mp3"),

      cube_break_sound : new Audio("./sound/breakblock.wav"),

      cube_bump_sound : new Audio("./sound/bump.wav"),

      pause_sound : new Audio("./sound/pause_menu.mp3"),

      fireBall_sound : new Audio("./sound/fireBall.mov")



    }

  }

};

var requestAnimationFrame = function(callback) {

  var interval = 1000 / FPS;

  var now = (window.performance && window.performance.now) ?

            window.performance.now() :

            Date.now();

  if (this.lastTarget && now < this.lastTarget)

    now = this.lastTarget + 0.01;

  var delay = interval - now % interval;

  this.lastTarget = now + delay;

  setTimeout(callback, delay);

};
