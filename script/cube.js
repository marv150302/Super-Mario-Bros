var Cube = function (ctx) {

  this.ctx = ctx

  this.width = 16

  this.height = 16

  this.entity = [];

  this.framecount = 0;

  this.color = 0;

  this.color_loop = ["",2];//for the cube blinking

}

Cube.prototype.load = function () {

  this.entity = []

  for (var i = 0; i < levels[WORLD][AREA].cubePosition.length; i++) {

    for (var j = 0,length=levels[WORLD][AREA].cubePosition[i][3]; j < length; j++) {

      let x = levels[WORLD][AREA].cubePosition[i][0]+(j*16);

      let y = levels[WORLD][AREA].cubePosition[i][1]

      let type = levels[WORLD][AREA].cubePosition[i][2]

      let url = levels[WORLD][AREA].cubePosition[i][4]

      let color = levels[WORLD][AREA].cubePosition[i][5]

      this.entity.push({

        x : x,

        y : y,

        old_y : y,

        taken : false,

        bounce : false,

        width : 16,

        height : 16,

        bounce_height : y - 20,

        velocity : -250,

        type : type,

        name : "cube",

        url : url,

        color : color,

      })

    }

  }

}

//we costantly change the cube color

//the index is the index of the cube on the map

Cube.prototype.update = function (dt) {

  cube.bounce(dt)

  this.entity.forEach((item, _index) => {

    this.entity[_index].taken && this.entity[_index].type ? this.entity[_index].url = "./images/emptyCube.png" : null

if (this.entity[_index].type && this.entity[_index].type!=undefined && !this.entity[_index].taken) {//if the type of the cube is the yellow one

    this.framecount++;

  if (this.framecount>=200) {

    this.framecount=0

    this.color++

    if (this.color>=this.color_loop.length) {this.color=0}

  }

    this.entity[_index].url = "./images/yellowCube"+this.color_loop[this.color]+".png";

}


  });


}

//we need to move all the object on the map

Cube.prototype.camera = function (dt,speed) {

  this.entity.forEach((item, i) => {

    this.entity[i].x = Math.round(this.entity[i].x-= Math.round(speed*dt))//Math.round(speed*dt)/100

  });

}

Cube.prototype.spawn = function (id,x,y,_index) {

  if (mario.size == "big") {

    //no_static means that it is not a static item so it has to be spwaned from the start of the game (like the coins)

    switch (1) {//the id of the item

      case 1: /*spwan fireFlower*/

              item.push(x,y-16,"./images/fire.png","fire","no_static");break;

      case 2: /*spawn star*/

              item.push(x,y-16,"./images/star.png","star","no_static");break;

      default: //spawn coin

              item.push(x,y-16,"./images/coin.png","coin","no_static");

              mario.coin+=1;

              canvas.game.audio.coin_sound.play()

              break;



    }

  }else {

    let random = Math.floor(Math.random()*4)+1

    let num_mushroom = item.entity.filter((item) => {//this is for the number of mushroom on map

      return item.type == "mushroom"

    })

    if (random==1) {

      if (num_mushroom.length == 0) {//we need to push only one mushroom or it will be too much easy

        item.push(x,y-16,"./images/mushroom.png","mushroom","no_static")

      }else{

        item.push(x,y-16,"./images/coin.png","coin","no_static");

        mario.coin+=1;

        canvas.game.audio.coin_sound.play()

      }

    }else{

      item.push(x,y-16,"./images/coin.png","coin","no_static");

      mario.coin+=1;

      canvas.game.audio.coin_sound.play()

    }

  }

}

Cube.prototype.bounce = function (dt) {

  this.entity.forEach((item, i) => {

    if (this.entity[i].bounce) {


      this.entity[i].y += this.entity[i].velocity*dt

      if (item.y >= item.old_y) {

        this.entity[i].y = this.entity[i].old_y

        this.entity[i].bounce = false

        this.entity[i].velocity = -this.entity[i].velocity

      }
      if (item.y <= item.bounce_height) {

        this.entity[i].velocity = -this.entity[i].velocity

      }

    }

  });


}

Cube.prototype.cube_destruction_animation = function (x,y,color) {

  let brick_position = [-5,0,5];

  let temp_x = [-16,0,+16];

  for (var i = 0; i < 3; i++) {

    map.entity.push({

      x : x + temp_x[i],

      y : y,

      url : "./images/broken-"+color+"-cube.png",

      name : "broken-cube",

      animation : {

        framecount : 0,

        _index : 0,

        bounce_y : [5],

        bounce_x :  brick_position[i]

      }

    })

  }

}
