var Menu = function () {

  this.animation = {

    framecount : 0,

    _index : 0,

    cycleloop : ["Press enter to play",""],

    id : null

  }

}


Menu.prototype.loadDiv = function (id,height,width) {

  var layer = document.createElement("div");

  document.body.appendChild(layer)

  layer.height = height;

  layer.width  = width;

  layer.id = id;

  return layer

}

Menu.prototype.loadP = function (id,text) {

  var p = document.createElement("p");

  p.id = id;

  p.innerHTML = text

  return p;

}

Menu.prototype.pad = function (number,length) {

  var str = '' + number;

  while (str.length < length) {

      str = '0' + str;

  }

  return str;

}

Menu.prototype.loadImg = function () {

  let img = document.createElement("img");

  img.src = "./images/logo.png"

  return img;

}


Menu.prototype.data = function () {

  //we load mario data

  let data = document.getElementById("player_data");

  data.innerHTML = "<table id='data'>"

  let coin_url = "<img src='images/coin2.png' alt='' id='data_coin'>"

  this.createTable(1,7,[this.pad(mario.score,6),coin_url ,"x"+this.pad(mario.coin,2)," ",WORLD + "-" + AREA," ",this.pad(canvas.game.time,3)],'data')

  this.createTable(1,7,["Mario"," ",""," ","World"," ","Time"],'data')

}

Menu.prototype.createTable = function(rn,cn,data_array,id){

  for(var r=0;r<parseInt(rn,10);r++){

   var x=document.getElementById(id).insertRow(r);

   for(var c=0;c<parseInt(cn,10);c++){

     var y =  x.insertCell(c);

     y.innerHTML =  data_array[c]

    }

   }

}
Menu.prototype.set = function () {

  let menu = this.loadDiv("menu");

  let logo = this.loadImg("./images/logo.png")

  menu.appendChild(logo)

  let player_selector = document.getElementById("menu");

  player_selector.innerHTML += "<table id='player_selector'>"

  let goomba_image_url = "<img src='images/goomba_selector.png' alt='' id='goomba_selector'>"

  this.createTable(1,2,[goomba_image_url,"2 player game"],"player_selector")

  this.createTable(1,2,[goomba_image_url,"1 player game"],"player_selector")

  let top_score = this.loadP("top_score", "<br>" + "top- " + this.pad(mario.top_score,6))

  menu.appendChild(top_score)

  let copyright = this.loadP("copyright", "<br>" + "©1985 nintendo")

  menu.appendChild(copyright)

  //
  //

  let pause_menu = this.loadDiv("pause_menu")

  let pause_menu_text = this.loadP("pause_menu_text"," -> continue game")

  pause_menu.appendChild(pause_menu_text)

  $("#pause_menu").hide();

}
//for the blinking start
Menu.prototype.info_animation = function () {

  menu.animation.id = requestAnimationFrame(this.info_animation.bind(this))

  this.animation.framecount++;

  if (this.animation.framecount>=15) {

    this.animation.framecount=0

    this.animation._index++

    if (this.animation._index>=this.animation.cycleloop.length) {this.animation._index=0}

  }

  start.innerHTML = this.animation.cycleloop[this.animation._index];

}
