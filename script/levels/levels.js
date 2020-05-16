levels = {

  [1]:{},

  [2]:{}

}
var Level = function (world,area) {

  this.world = world;

  this.area = area

}

Level.prototype.loadCloud = function (array) {

  levels[this.world][this.area].cloudPosition.push(array)

}

Level.prototype.loadMainTheme = function (src) {

  levels[this.world][this.area].main_theme.src = src;

}

Level.prototype.loadGround = function (array) {

  levels[this.world][this.area].groundRange.push(array)

}

Level.prototype.sky = function (color) {

  levels[this.world][this.area].sky =color;

}

Level.prototype.loadBush = function (array) {

  levels[this.world][this.area].bushPosition.push(array)

}

//x,y,type/*boolean*/,length

Level.prototype.loadCube = function (array) {

  levels[this.world][this.area].cubePosition.push(array)

}

//x,y,url,contains_monster,width,height

Level.prototype.loadTube = function (array) {

  levels[this.world][this.area].tubePosition.push(array)

}

//x,y,url,type,,false,true,true

Level.prototype.loadMonster = function (array) {

  levels[this.world][this.area].monster.push(array);

}

//min,max,y

Level.prototype.loadHole = function (array) {

  levels[this.world][this.area].holes.push(array)

}

//x

Level.prototype.loadPole = function (x) {

  levels[this.world][this.area].winning_pole.push({

    x : x,

    y : 0,

    url : "./images/pole.png",

    name : "pole"

  })

}

Level.prototype.loadStatic_Coin = function (array) {



  levels[this.world][this.area].static_coin.push(array)

}

Level.prototype.loadLava = function (array) {

  levels[this.world][this.area].lava.push(array)



}

//x,y,height

Level.prototype.loadStair = function (array) {

  levels[this.world][this.area].tempStairPosition.push(array);

}

Level.prototype.loadPlatform = function (array) {

  levels[this.world][this.area].platform.push(array);


}
