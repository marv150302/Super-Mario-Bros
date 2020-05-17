var Monster = function () {

  this.entity = [];

  this.goomba = [];

  //this.bullet = [];

  this.flower_monster = [];

  this.koopa = [];

}

Monster.prototype.load = function () {

  this.entity = []

  canvas.game.audio.goomba_death_sound = [];

  canvas.game.audio.damage_to_mario = []

  levels[WORLD][AREA].monster.forEach((item, i) => {

    canvas.game.audio.goomba_death_sound.push(new Audio("./sound/monster_death.mov"))

    canvas.game.audio.damage_to_mario.push(new Audio("./sound/damage.mp3"))


    this.entity.push({

      x : item[0],

      y : item[1],

      width: item[3]=="bowser" ? 32 : 16,

      height : item[3]=="bowser" ? 32 : item[3]=="koopa" ? 24 : 16,

      toggle_y : item[1],

      ground : item[1],

      old_ground : item[1],

      old_y : item[1],

      fire_death : false,

      url : item[2],

      dir : mario.face,

      life : item[3] == "bowser" ? 3 : undefined,

      dead : false,

      left : true,

      type : item[3],

      move : true,

      velocity : -50,

      collide : false,

      id : i,

      score_animation : false,

      animation : {

        _index : 0,

        framecount : 0,

        cycleloop : ["",2],

      },

      boss_animation : {

        _index : 0,

        framecount : 0,

        cycleloop_x : [-20,20],

      },

      dead_animation : {

        _index : 0,

        framecount : 0,

        dye : [false,true]

      }

    })

  });

  for (var i = 0; i < levels[WORLD][AREA].tubePosition.length; i++) {

    if (levels[WORLD][AREA].tubePosition[i][3]) {

      canvas.game.audio.goomba_death_sound.push(new Audio("./sound/monster_death.mov"))

      canvas.game.audio.damage_to_mario.push(new Audio("./sound/damage.mp3"))

      this.entity.push({

        x :  levels[WORLD][AREA].tubePosition[i][0]+6,

        y :  levels[WORLD][AREA].tubePosition[i][1]-25,

        url : "./images/flower_monster.png",

        dead : false,

        type : "flower_monster",

        width : 16,

        height : 16,

        animation : {

          _index : 0,

          framecount : 0,

          cycleloop : ["",2]

        }

      })

    }

  }

}

Monster.prototype.bullet = function () {

  let random = Math.floor(Math.random()*150)+1;

  if (random==1) {

    if (levels[WORLD][AREA].bullet.x!=undefined) {

      for (var i = 0,length=map.entity.length; i < length; i++) {

        let name = map.entity[i].name;

        if (name=="bullet_maker") {

          let x = map.entity[i].x

          let y = map.entity[i].y

          this.entity.push({

            x : x-32,

            y : y,

            url : "./images/bullet.png",

            name : "bullet",

            type : "bullet",

            width :32,

            height : 28,

          })

        }

      }

    }

  }

}

Monster.prototype.camera = function (dt,speed) {

  if (dt < 4) {

    this.entity.forEach((item, i) => {

      this.entity[i].x -= Math.round(speed*dt)

    });

  }

}

Monster.prototype.update = function (dt,speed) {

  if (dt<4) {

    for (var i = 0; i < this.entity.length; i++) {

      if (this.entity[i].fire_death) {

        this.entity[i].ground = 24*16

      }



      //this.entity[i].old_y = this.entity[i].y;

      if (this.entity[i].url == "./images/koopaShield.png") {

        this.entity[i].y = this.entity[i].old_y+10;

      }

      if (!monster_top_collision(i)) {

        this.entity[i].ground = 24*16

      }

      if (this.entity[i].type=="bowser" || this.entity[i].type=="bowserRight") {

        /*if (this.entity[i].x < canvas.width - 392) {


          this.entity[i].voice.play()

        }else{

          this.entity[i].voice.pause();//remember to remove

        }*/


        if (mario.x > this.entity[i].x + this.entity[i].width) {

          this.entity[i].type = "bowserRight"

        }

        this.boss_animation(i)

      }

      if ((this.entity[i].x + this.entity[i].width) < 0 || this.entity[i].y >= canvas.height) {

        this.entity.splice(i,1);

        return;
      }



      if (this.entity[i].x  < (canvas.width - 392) && this.entity[i].type != "flower_monster" && this.entity[i].type!="flyingKoopa" && this.entity[i].type!="flyingRedKoopa" && this.entity[i].type!="bullet"  && this.entity[i].type!="bowserAttack" && !this.entity[i].dead) {

        this.entity[i].y+=200*dt;

      }
      if (this.entity[i].type == "flyingKoopa" || this.entity[i].type=="flyingRedKoopa" || this.entity[i].type=="bowserAttack") {

        this.entity[i].x+=Math.round((this.entity[i].velocity*dt))

      }
      if (this.entity[i].y >= this.entity[i].ground && this.entity[i].x + this.entity[i].width < canvas.width && (this.entity[i].x + this.entity[i].width) > 0 && this.entity[i].type!="bowserAttack") {

        this.entity[i].y = this.entity[i].ground

        this.entity[i].old_y = this.entity[i].y

      }

      this.step(i)

      if (this.entity[i].name != "bullet") {

        if (!this.entity[i].dead && this.entity[i].type!="flower_monster" && this.entity[i].move && this.entity[i].type!="bowser" && this.entity[i].type!="bowserRight") {

          if (this.entity[i].y >= this.entity[i].ground) {

            if (this.entity[i].x < (canvas.width - 392)) {

              this.entity[i].x+=Math.round((this.entity[i].velocity*dt))

            }

          }

        }

      }else{

        this.entity[i].x -= Math.round(speed*dt)

      }

    }

  }
  monster.dead_animation()

}

Monster.prototype.collision = function (x,width,y,height) {


  for (var i = 0,length=this.entity.length; i < length; i++) {

    if (this.entity[i].type!="bullet" && this.entity[i].type!="bowser" && this.entity[i].type!="bowserRight" && this.entity[i].type!="bowserAttack" && !this.entity[i].dead) {

      if (this.entity[i].x + this.entity[i].width > x && this.entity[i].x < x + width && this.entity[i].y < y  + height && this.entity[i].y + this.entity[i].height > y) {

        if (this.entity[i].x < (canvas.width - 392)) {

          if (this.entity[i].type == "koopa") {

            if (this.entity[i].velocity < 0) {

              this.entity[i].animation.cycleloop = [3,4]

            }else{

              this.entity[i].animation.cycleloop = ["",2]

            }

          }
          this.entity[i].velocity = -(this.entity[i].velocity)

        }

      }

    }

  }

}

Monster.prototype.step = function (i) {

  if ((this.entity[i].type=="koopa" || this.entity[i].type=="goomba" || this.entity[i].type=="flower_monster" || this.entity[i].type=="flyingKoopa" || this.entity[i].type=="flyingRedKoopa" || this.entity[i].type=="bowser" || this.entity[i].type=="bowserRight") && !this.entity[i].dead) {

    this.entity[i].animation.framecount++

    if (this.entity[i].animation.framecount>=10) {

      this.entity[i].animation.framecount=0

      this.entity[i].animation._index++;

      if (this.entity[i].animation._index>=this.entity[i].animation.cycleloop.length) {

        this.entity[i].animation._index=0;

      }

    }

    this.entity[i].url = "./images/"+this.entity[i].type+this.entity[i].animation.cycleloop[this.entity[i].animation._index]+".png"

  }

}

Monster.prototype.boss_animation = function (i) {

  let random = Math.floor(Math.random()*150)+1;

  let x = this.entity[i].x

  let y = this.entity[i].y

  if (random==1) {

    this.entity.push({

      x : this.entity[i].type=="bowser" ? x - 32 : x + 32,

      y : mario.size=="big" ? y : y + 8,

      url :"./images/bowserAttack.png",

      name : "bowserAttack",

      type : "bowserAttack",

      width : 24,

      height : 8,

      velocity : this.entity[i].type=="bowser" ? -50 : +50,

      damage_to_mario : new Audio("./sound/damage.mp3"),

    })

  }

  let followMario = Math.floor(Math.random()*30)+1

  if (followMario==1) {

    mario.size=="big" ? this.entity[i].y = mario.y : this.entity[i].y = mario.y - 16

  }else{

    this.entity[i].ground = 13*16

  }

  this.entity[i].boss_animation.framecount++

  if (this.entity[i].boss_animation.framecount>=10) {

    this.entity[i].boss_animation.framecount=0

    this.entity[i].boss_animation._index++;

    if (this.entity[i].boss_animation._index>=this.entity[i].boss_animation.cycleloop_x.length) {

      this.entity[i].boss_animation._index=0;

    }

    this.entity[i].x += this.entity[i].boss_animation.cycleloop_x[this.entity[i].boss_animation._index];

  }
}

Monster.prototype.dead_animation = function () {


  for (var i = 0; i < this.entity.length; i++) {

    if (this.entity[i].dead && this.entity[i].type!="flower_monster" &&  this.entity[i].type!="flower_monster2") {


      //the score animation when you jump on a monster
      if (!this.entity[i].score_animation) {

        mario.score += 200

        map.addScore(this.entity[i].x, this.entity[i].y);

        this.entity[i].score_animation = true

      }


      let type = this.entity[i].type;

      this.entity[i].url = type=="goomba" ? "./images/deadGoomba.png" : "./images/koopaShield.png"

      this.entity[i].dead_animation.framecount++

      if (this.entity[i].dead_animation.framecount>=100) {

        this.entity[i].dead_animation.framecount=0

        this.entity[i].dead_animation._index++;

        if (this.entity[i].dead_animation._index>=this.entity[i].dead_animation.dye.length) {

          this.entity[i].dead_animation._index=0;

        }

      }

      if (this.entity[i].dead_animation.dye[this.entity[i].dead_animation._index]) {

        if (type!="koopa") {

          this.entity.splice(i,1)

        }

        return true
        }

      }

  }

  return false;

}
