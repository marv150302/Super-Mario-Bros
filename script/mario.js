var Mario = function (ctx) {

  this.ctx = ctx;

  this.height = 16;

  this.width = 16;

  this.url = "./images/marioPhase/idle-Right-normal-small.png";

  this.x = 20;

  this.oldy = 0

  this.oldx = 0;

  this.ground = 19*16;//remove this and put it as a local variable inside the function where you check his height

  this.key = [];

  this.y = this.ground;

  this.once  = false

  this.face = "Right";

  this.friction = 0.95

  this.play_star_sound_once = false

  this.vx = 0;

  this.vy = 0;

  this.vulnerability = false;

  this.vulnerability_time = 3000;

  this.jump_height = 35;

  this.isJumping = false;

  this.gravity = 17;

  this.coin = 0;

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

  //console.log(Math.round((this.vx + Number.EPSILON) * 100) / 100);


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

    if (this.state=="crouch" && this.size=="small") {

      this.state = "idle"

    }
    if (this.life>0 ) {

      this.url = "./images/marioPhase/"+this.state+"-"+this.face+"-"+this.power+"-"+this.size+this.step+".png";

    }

    if (this.power=="Star") {

      this.vulnerability = true;

      canvas.game.audio.main_theme.pause();

      if (canvas.game.audio.star_sound.currentTime == canvas.game.audio.star_sound.duration) {

        this.vulnerability = false;

        canvas.game.audio.main_theme.play();

        this.setForm("big","normal",32);

        this.play_star_sound_once = false

      }else{

        canvas.game.audio.star_sound.play();

      }

    }

    this.updateFireBall(dt);

    /*if (Math.round((this.vx + Number.EPSILON) * 100) / 100 > 0.14) {

      animate(dt)

    }*/

  }

  if (this.isJumping) {

    this.state = "jumping"

  }else if(!this.key[39] && !this.key[37] && !this.key[90] && !this.key[40] && !this.key[32]){

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

    this.x + this.width>=camera.axis && !this.complete_level ? animate(dt) : false//animate only if mario is at the middle of the screen
  }
  if (this.key[40] && this.pressKey && this.size!="small") {

    this.state = "crouch"

    this.height = 16

    this.width = 16

  }
  if (this.key[38] && this.pressKey) {//jump input


    this.state = "jumping"

    if (!this.isJumping) {

      this.vy -= this.jump_height

      this.isJumping = true

      canvas.game.audio.mario_jump.play();

    }
  }
  if (this.key[37] && !this.key[90] && this.pressKey) {//left input

    this.vx-= 10*dt

    this.face = "Left"

  }
  if (this.key[90] && !this.key[39] && this.pressKey) {//running

    this.state = "moving"

    this.face=="Right" ? this.vx+= 30*dt : this.vx-= 30*dt//if

    if (this.face=="Right" && this.complete_level) {

      this.vx += 60*dt

    }

    this.face=="Right" ? camera.speed=200 : null

    this.x + this.width>=camera.axis && !this.complete_level ? animate(dt) : false
  }
}

Mario.prototype.pushFireball = function () {

  this.fireBall.push({

    x : this.face=="Right" ? this.x+16 : this.x-16,

    y : this.y + 16,

    max_height : this.y,

    vy : +50,

    vx : this.face=="Right" ? 80 : -80,

    ground : 19*16,

    width : 10,

    height :10,

    url : "./images/fireBall.png",

    index : 0,

    framecount : 0,

    cycleloop : [-2,+2],

    play : true,

    dir : this.face=="Right" ? true : false

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

    /*this.fireBall[i].framecount++;

    if (this.fireBall[i].play) {

      if (this.fireBall[i].framecount>=7) {

        this.fireBall[i].framecount=0

        this.fireBall[i].index++

        if (this.fireBall[i].index>=this.fireBall[i].cycleloop.length) {this.fireBall[i].index=0}

      }

    }*/

    //this.fireBall[i].y+=this.fireBall[i].cycleloop[this.fireBall[i].index]

    //this.fireBall[i].dir ? this.fireBall[i].x+= 100*dt : this.fireBall[i].x-= 100*dt;



    this.fireBall[i].x += this.fireBall[i].vx*dt

    this.fireBall[i].y += item.vy*dt

    if (item.y <= item.max_height) {

      this.fireBall[i].vy = -this.fireBall[i].vy

    }

    if (item.y >= item.ground) {

      this.fireBall[i].max_height = item.y - 16

      this.fireBall[i].vy = -this.fireBall[i].vy

    }

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

    canvas.game.audio.main_theme.pause();

      if (this.death_animation.step_index==2) {

        if (canvas.game.life > 0  ) {

          if (!this.once) {

            canvas.game.audio.mario_death.play()

            this.once = true

            setTimeout(function () {

            canvas.game.life -= 1;

            map.reload(mario.ctx)

          }, (parseInt(canvas.game.audio.mario_death*1000))-1000)

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

    canvas.game.audio.main_theme.currentTime = 0;

    let pole_position = [];

    pole_position = map.entity.filter((item) => {

      return item.name == "pole";

    })

    let x = pole_position[0].x

    this.url = "./images/marioPhase/pole-Left-normal-big.png"

    this.gravity = 10

    if (this.y < this.ground) {

      let flag_index = map.entity.map(function(e) { return e.type; }).indexOf('flag');//the flag position on the pole

      map.entity[flag_index].y = this.y;

      this.score+=1000

      canvas.game.audio.pole_sound.play();

      this.height = 32

      this.width = 16

      this.x = x;



    }else{

      this.complete_level = false

      this.face = "Right"

      this.power = "normal"

      this.state = "moving"

      this.height = 32

      this.width = 16

      this.size = "big"

      this.key[90] = true;

      this.steps()

      this.url = "./images/marioPhase/"+this.state+"-"+this.face+"-"+this.power+"-"+this.size+this.step+".png";

    }

    let array = [];



    canvas.game.audio.pole_sound.onended=function(){

      mario.key[90] = false;

      mario.state = "idle"

      mario.step = "";

      canvas.game.audio.pole_sound.pause();

      map.nextLevel();

      return

    }


  }

}
