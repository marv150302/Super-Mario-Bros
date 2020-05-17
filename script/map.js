var Map = function (ctx) {

  this.ctx = ctx;

  this.entity = [];

  this.hole = [];

  this.bullet_maker = []

  this.pole_sound = new Audio("./sound/win.mp3");

  this.velocity = -100

}

Map.prototype.load = function () {

  this.entity = []

  this.hole = []

  this.loadPole();

  this.loadGround();

  this.loadLava();

  this.loadCloud();

  this.loadBush();

  this.loadStair();

  this.loadTube();

  this.loadBullet();

  this.loadPlatform();

}

Map.prototype.loadPlatform = function () {

  for (var i = 0; i < levels[WORLD][AREA].platform.length; i++) {

    let x = levels[WORLD][AREA].platform[i][0];

    let y = levels[WORLD][AREA].platform[i][1];


    this.entity.push({

      x : x,

      y : y,

      url : "./images/moving-platform.png",

      name : "platform",

      width : 96,

      height : 16,

      animation : {//for making the platform move

        framecount : 0,

        _index : 0,

        bounce : [-2,+2],

        play : true

      }

    })
  }

}

Map.prototype.loadBullet = function () {

  this.entity.push({

    x : levels[WORLD][AREA].bullet.x,

    y : levels[WORLD][AREA].bullet.y,

    url : "./images/bullet_maker.gif",

    name :"bullet_maker",

    type : "bullet_maker",

  })

}

Map.prototype.loadLava = function () {

  for (var i = 0; i < levels[WORLD][AREA].lava.length; i++) {

    var temp_y = levels[WORLD][AREA].lava[i][2]

    for (var height = 0; height < levels[WORLD][AREA].lava[i][4]; height++) {

      var temp_x = levels[WORLD][AREA].lava[i][1]

      for (var x = 0; x < levels[WORLD][AREA].lava[i][0]; x++) {

        this.entity.push({

        x : temp_x,

        y : (temp_y)+(16*height),

        height : levels[WORLD][AREA].lava[i][4],

        url : levels[WORLD][AREA].lava[i][3],

        type : "lava",

        name : "ground",

        width : 16

        })

        temp_x+=16

      }

    }

  }

}

Map.prototype.loadPole = function () {

  if (levels[WORLD][AREA].winning_pole.x != null) {

    this.entity.push({

      //x : 110*16

      x : levels[WORLD][AREA].winning_pole.x ,

      y : levels[WORLD][AREA].winning_pole.y,

      url : "./images/pole.png",

      name : "pole"

    })

    this.entity.push({

      x : levels[WORLD][AREA].winning_pole.x-10,

      y :levels[WORLD][AREA].winning_pole.y+16,

      url : "./images/flag.png",

      width : 16,

      height : 16,

      type : "flag",

      name :"flag"

    })

  }

  /*this.entity.push({

    x : levels[WORLD][AREA].winning_pole.nextLevelEntrance.x,

    y : levels[WORLD][AREA].winning_pole.nextLevelEntrance.y,

    url : levels[WORLD][AREA].winning_pole.nextLevelEntrance.url,

    name : "castle"

  })*/

}

Map.prototype.loadCloud = function () {

  levels[WORLD][AREA].cloudPosition.forEach((item, i) => {

    this.entity.push({

      x : item[0],

      old_x : item[0],

      width : 22,

      height : 31,

      y : item[1],

      url : item[2],

      type : "cloud",

      name : "cloud",

    })

  });

}

Map.prototype.loadTube = function () {

  for (var i = 0; i < levels[WORLD][AREA].tubePosition.length; i++) {

    this.entity.push({

      x : levels[WORLD][AREA].tubePosition[i][0],

      y: levels[WORLD][AREA].tubePosition[i][1],

      url : levels[WORLD][AREA].tubePosition[i][2],

      width : levels[WORLD][AREA].tubePosition[i][4],

      height : levels[WORLD][AREA].tubePosition[i][5],

      type : "tube",

      name : "tube"

    })

  }

}

Map.prototype.loadGround = function () {

    for (var i = 0; i < levels[WORLD][AREA].groundRange.length; i++) {

      var temp_y = levels[WORLD][AREA].groundRange[i][2]

      for (var height = 0; height < levels[WORLD][AREA].groundRange[i][4]; height++) {

        var temp_x = levels[WORLD][AREA].groundRange[i][1]

        for (var x = 0; x < levels[WORLD][AREA].groundRange[i][0]; x++) {

          this.entity.push({

          x : temp_x,

          y : (temp_y)+(16*height),

          height : levels[WORLD][AREA].groundRange[i][4],

          url : levels[WORLD][AREA].groundRange[i][3],

          type : "ground",

          name : "ground",

          width : 16

          })

          temp_x+=16

        }

      }

    }

  for (var i = 0,length=levels[WORLD][AREA].holes.length; i < length; i++) {

    this.hole.push({

      min :levels[WORLD][AREA].holes[i][0],

      max :levels[WORLD][AREA].holes[i][1],

      y : levels[WORLD][AREA].holes[i][2]

    })

  }

}

Map.prototype.loadBush = function () {

  for (var i = 0; i < levels[WORLD][AREA].bushPosition.length; i++) {

    this.entity.push({

      x : levels[WORLD][AREA].bushPosition[i][0],

      y : levels[WORLD][AREA].bushPosition[i][1],

      url : levels[WORLD][AREA].bushPosition[i][2],

      type : "bush",

      name : "bush"

    })

  }

}

Map.prototype.loadStair = function () {

  for (var i = 0, length=levels[WORLD][AREA].tempStairPosition.length; i < length; i++) {

    let x = levels[WORLD][AREA].tempStairPosition[i][0];

    let y = levels[WORLD][AREA].tempStairPosition[i][1];

    let url = levels[WORLD][AREA].tempStairPosition[i][3];

    for (var range = 0; range < levels[WORLD][AREA].tempStairPosition[i][2]; range++) {

      this.entity.push({

        x : x,

        y : y,

        url : url,

        width : 16,

        height : 16,

        type : "stair",

        name :"stair"

      })

      x+=16

    }

  }

}

Map.prototype.camera = function (dt,speed) {

  for (let i = 0,length=this.entity.length; i < length; i++) {

      this.entity[i].x = Math.round(this.entity[i].x-= Math.round(speed*dt))//Math.round(speed*dt)/100

  }
}

Map.prototype.nextLevel = function () {

  canvas.game.audio.main_theme.pause()

  let length = selector[WORLD].levels.length

  if (AREA> length-1) {//if it reaches the maximum level of the world

    AREA = 1;

    WORLD++;

    if (WORLD > 2) {

      location.reload()

    }

  }else{

    AREA++;

  }

  mario.life = 2;

  mario.jump_height = 35

  mario.x = 0;

  mario.gravity = 17

  mario.state = "idle";

  mario.step = "";

  loadMap();

  mario.complete_level = false

}

Map.prototype.reload = function (ctx) {

  canvas.game.play = false;

  canvas.game.death_screen(death_canvas,true,canvas.game.life)

  canvas.game.audio.main_theme.currentTime = 0;

  setTimeout(function () {

    if (canvas.game.life == 0) {

      location.reload()

    }else{

      mario = new Mario(ctx)

      loadMap()

      canvas.game.play = true;

      canvas.game.death_screen(death_canvas,false)

    }

  }, 3000);

  return

}

Map.prototype.update = function (dt) {

  this.entity.forEach((item, i) => {

    if (item.name=="cloud") {

      this.entity[i].x -= 2

      if (this.entity[i].x + this.entity[i].width < 0) {

        this.entity[i].x = this.entity[i].old_x + canvas.width

      }

    }

    if (item.name=="score") {

      this.entity[i].y += this.velocity*dt

      if (item.y < item.old_y - 32) {

        this.entity.splice(i,1)

      }

    }

    if (item.name=="platform") {

      this.entity[i].animation.framecount++

    if (this.entity[i].animation.framecount>=50) {

      this.entity[i].animation.framecount=0

      this.entity[i].animation._index++;

      if (this.entity[i].animation._index>=this.entity[i].animation.bounce.length) {

        this.entity[i].animation._index=0;

      }

    }

    this.entity[i].y+=this.entity[i].animation.bounce[this.entity[i].animation._index];

    }

    if (item.name=="broken-cube") {

      this.entity[i].animation.framecount++

    if (this.entity[i].animation.framecount>=100) {

      this.entity[i].animation.framecount=0

      this.entity[i].animation._index++;

      if (this.entity[i].animation._index>=this.entity[i].animation.bounce_y.length) {

        this.entity[i].animation._index=0;

      }

    }

    this.entity[i].y+=this.entity[i].animation.bounce_y[this.entity[i].animation._index];

    this.entity[i].x+=this.entity[i].animation.bounce_x

    if (this.entity[i].animation._index>=this.entity[i].animation.bounce_y.length) {

      this.entity.splice(i,1)

      }

    }

    if (item.x + item.width < 0 && item.name!= "cloud") {

      this.entity.splice(i,1);

    }

  });

}
Map.prototype.addScore = function (x,y) {

  map.entity.push({

    x : x,

    y : y,

    old_y : y,

    url : "./images/2_score.png",

    type : "score",

    name : "score",


  })

  map.entity.push({

    x : x + 4,

    old_y : y,

    y : y,

    url : "./images/0_score.png",

    type : "score",

    name : "score",


  })

  map.entity.push({

    x : x + 8,

    old_y : y,

    y : y,

    url : "./images/0_score.png",

    type : "score",

    name : "score",


  })

}
