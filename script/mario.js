
var Mario = function (ctx) {

  this.ctx = ctx;

  this.height = 16;

  this.width = 16;

  this.url = "./images/marioPhase/idle-Right-normal-small.png";

  this.x = 20;

  this.oldy = 245

  this.oldx = 0;

  this.ground = 19*16;//remove this and put it as a local variable inside the function where you check his height

  this.key = [];

  this.y = this.ground;

  this.once  = false

  this.face = "Right";

  this.friction = 0.95

  this.vx = 0;

  this.vy = 0;

  this.vulnerability = false;

  this.vulnerability_time = 3000;

  this.jump_height = 40;

  this.isJumping = false;

  this.gravity = 17;

  this.coin = 0;

  this.jump = new Audio("./sound/jump.mov");

  this.death_sound = new Audio("./sound/death.mp3");

  this.star_sound = new Audio("./sound/star.mov")

  this.jump.volume = 0.2;

  this.power = "normal";

  this.state = "idle";

  this.size = "small";

  this.game_life = 3;

  this.step = "";

  this.score = 0

  this.time = 0;

  this.life = 1;

  this.fireBall = [];

  this.finish_level = false;

  this.pressKey = true

  this.star_timer = true;

  this.fireBall = []

  this.old_ground = 0

  this.top_score = getCookie("mario top score")!=null ? getCookie("mario top score") : 0;

  this.step_animation = {

    step_index : 0,

    framecount : 0,

    cycleloop : [1,2,3]

  }

  this.death_animation = {

    step_index : 0,

    framecount : 0,

    cycleloop : [-5,+10,false],

    play : true

  }

  this.vulnerability_animation = {

    index : 0,

    framecount : 0,

    cycleloop : [0.5,1],

  }

  this.complete_level = false;

}

Mario.prototype.draw = function () {

  this.ctx.clearRect(0,0,canvas.width,canvas.height);

  this.ctx.imageSmoothingEnabled = false

  this.ctx.drawImage(resources.get(this.url),this.x,this.y);//draw mario

  this.fireBall.forEach((item, i) => {// we need to draw all the fireballs

    this.ctx.drawImage(resources.get(item.url),item.x,item.y);

  });

}

Mario.prototype.setForm = function (size,power,height) {

  this.size = size;//small or big

  this.power = power;

  this.height = height;

}

Mario.prototype.update = function (dt,move) {
  if (dt < 4) {

    setCookie("mario top score",this.top_score,5)

    if (this.score > this.top_score) {

      this.top_score = this.score

    }

    this.input(dt,move)

    this.vulnerabilityAnimation();

    this.oldx = this.x;

    if (this.y >= this.ground) {

      this.oldy = this.y;

    }

    if (this.y > this.oldy) {

      this.isJumping = true;

    }

    this.vy*=this.friction;

    this.y+=(this.gravity);

    if (this.x + this.width <= camera.axis || this.complete_level) {

      this.x+=this.vx

    }else{

      this.x=camera.axis-this.width

    }

    //this.x + this.width <= camera.axis && !this.complete_level? this.x+=this.vx : this.x=camera.axis-this.width

    this.x + this.width <= camera.axis && !this.complete_level ? this.vx*=this.friction : this.vx=0

    this.vx*=this.friction

    this.y+=this.vy


    this.y >= this.ground ? this.y=this.ground : null

    this.y >= this.ground ? this.isJumping=false: null

    //this.y >= this.ground ? this.key[38] = false : null

    this.x<=0 ? this.x=0 : null

    this.y>=this.ground ? this.vy=0 : false

    this.steps()

    if (mario.state=="crouch" && mario.size=="small") {

      mario.state = "idle"

    }
    if (mario.life>0 ) {

      this.url = "./images/marioPhase/"+this.state+"-"+this.face+"-"+this.power+"-"+this.size+this.step+".png";

    }

    if (mario.power=="Star") {

      mario.vulnerability = true;

      if (this.star_timer) {

        levels[WORLD][AREA].main_theme.pause();

        this.star_sound.play();

        this.star_timer = false

        setTimeout(function () {

          mario.vulnerability = false;

          levels[WORLD][AREA].main_theme.play();

          if (mario.power=="Star") {

            mario.setForm("big","normal",32);

          }

        }, this.star_sound.duration*1000);

      }

    }else{

      this.star_timer = true;

    }

    this.updateFireBall(dt);

    !this.finish_level ? this.gravity = 17 : this.gravity = 10;

  }

  if (this.isJumping) {

    this.state = "jumping"

  }else if(!this.key[39] && !this.key[37] && !this.key[90] && !this.key[40]){

    this.state = "idle"

  }



  if (this.y >= (24*16) ) {

    this.life = 0;

  }

}

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

Mario.prototype.pushFireball = function () {

  this.fireBall.push({

    x : mario.face=="Right" ? mario.x+20 : mario.x-20,

    y : mario.y + 16,

    width : 10,

    height :10,

    url : "./images/fireBall.png",

    index : 0,

    framecount : 0,

    cycleloop : [-2,+2],

    play : true,

    dir : mario.face=="Right" ? true : false

  })

}

Mario.prototype.steps = function () {

  if (this.key[39]||this.key[37] || this.key[90]) {

    this.state="moving"

    this.step_animation.framecount++;

    if (this.step_animation.framecount>=4) {

      this.step_animation.framecount=0

      this.step_animation.step_index++

      if (this.step_animation.step_index>=this.step_animation.cycleloop.length) {this.step_animation.step_index=0}

    }

    this.step = "-"+this.step_animation.cycleloop[this.step_animation.step_index];

  }

}

Mario.prototype.updateFireBall = function (dt) {

  this.fireBall.forEach((item, i,array) => {

    this.fireBall[i].framecount++;

    if (this.fireBall[i].play) {

      if (this.fireBall[i].framecount>=7) {

        this.fireBall[i].framecount=0

        this.fireBall[i].index++

        if (this.fireBall[i].index>=this.fireBall[i].cycleloop.length) {this.fireBall[i].index=0}

      }

    }

    this.fireBall[i].y+=this.fireBall[i].cycleloop[this.fireBall[i].index]

    this.fireBall[i].dir ? this.fireBall[i].x+= 100*dt : this.fireBall[i].x-= 100*dt;

  });

}
Mario.prototype.death = function () {

  if (this.life <= 0) {

    this.death_animation.framecount++;

    if (this.death_animation.play) {

      if (this.death_animation.framecount>=25) {

        this.death_animation.framecount=0

        this.death_animation.step_index++

        if (this.death_animation.step_index>this.death_animation.cycleloop.length) {this.death_animation.step_index=0}

      }

    }

    this.url = "./images/marioPhase/death.png"

    this.y += this.death_animation.cycleloop[this.death_animation.step_index];

    levels[WORLD][AREA].main_theme.pause();

      if (this.death_animation.step_index==2) {

        if (canvas.game.life) {

          if (!this.once) {

            this.death_sound.play()

            this.once = true

            setTimeout(function () {

            canvas.game.life -= 1;

            map.reload(mario.ctx)

          }, (parseInt(this.death_sound.duration*1000))-1000)

          }
        }

      }

    this.death_animation.step_index==2 ? this.death_animation.play = false : null

  }

}

Mario.prototype.vulnerabilityAnimation = function () {

  if (this.power!="Star" && this.vulnerability) {

    this.vulnerability_animation.framecount++;

    if (this.vulnerability_animation.framecount>=10) {

      this.vulnerability_animation.framecount=0

      this.vulnerability_animation.index++

      if (this.vulnerability_animation.index>this.vulnerability_animation.cycleloop.length) {this.vulnerability_animation.index=0}

    }

    this.ctx.globalAlpha = this.vulnerability_animation.cycleloop[this.vulnerability_animation.index];

  }else{

    this.ctx.globalAlpha = 1;

  }

}

var once = false


Mario.prototype.win = function () {

  if (this.complete_level) {

    levels[WORLD][AREA].main_theme.currentTime = 0;

    let pole_position = [];

    pole_position = map.entity.filter((item) => {

      return item.name == "pole";

    })

    let x = pole_position[0].x

    this.url = "./images/marioPhase/pole-Left-normal-big.png"

    this.gravity = 10

    if (this.y < this.ground) {

      let flag_index = map.entity.map(function(e) { return e.type; }).indexOf('flag');//the flag position on the pole

      map.entity[flag_index].y = mario.y;

      this.score+=1000

      map.pole_sound.play();

      this.height = 32

      this.width = 16

      this.x = x;



    }else{

      mario.complete_level = false

      mario.face = "Right"

      mario.power = "normal"

      mario.state = "moving"

      mario.height = 32

      mario.width = 16

      mario.size = "big"

      mario.key[90] = true;

      mario.steps()

      mario.url = "./images/marioPhase/"+mario.state+"-"+mario.face+"-"+mario.power+"-"+mario.size+mario.step+".png";

    }

    let array = [];



    map.pole_sound.onended=function(){

      mario.key[90] = false;

      mario.state = "idle"

      mario.step = "";

      map.pole_sound.pause();

      map.nextLevel();

      return

    }


  }

}
