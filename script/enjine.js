setDivs("game_container")//we set the game container

setDivs("player_data")//player data like time, coin, score....

var menu = new Menu();

var sprite = new Sprite(loadCanvas("game",352*2,784,2))//sprite layer where we draw everything

var mario = new Mario(loadCanvas("mario",352*2,784,2));//creating mario personal layer

var camera = new Camera(loadCanvas("camera",352*2,784,2));//camera layer to control bugs

var death_canvas = loadCanvas("death_canvas",352*2,784,2);//death layer to show life info

menu.set()// we set the menu output

menu.data()

function setDivs(id) {

  let object = document.createElement("div");

  object.id = id

  document.body.appendChild(object)

}

function loadMap() {

  item.entity = []

  menu.data()

  map.load()

  monster.load();

  cube.load()

  item.load()

  render()

  loadEntity();

  mario.draw()

  mario.y = levels[WORLD][AREA].mario_position.y;

  return true;

}

function disableKeyboard() {

  document.onkeydown = function (e) {
        return false;
  }

}
function enableKeyboard() {

  document.onkeydown = function (e) {
        return true;
  }

}
function setCookie(name,value,days) {

    var expires = "";

    if (days) {

        var date = new Date();

        date.setTime(date.getTime() + (days*24*60*60*1000));

        expires = "; expires=" + date.toUTCString();

    }

    document.cookie = name + "=" + (value || "")  + expires + "; path=/";

}

function getCookie(name) {

    var nameEQ = name + "=";

    var ca = document.cookie.split(';');

    for(var i=0;i < ca.length;i++) {

        var c = ca[i];

        while (c.charAt(0)==' ') c = c.substring(1,c.length);

        if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length,c.length);

    }

    return null;

}

function eraseCookie(name) {

    document.cookie = name+'=; Max-Age=-99999999;';

}

function animate(dt) {

  monster.update(dt,camera.speed)

  cube.camera(dt,camera.speed)

  item.camera(dt,camera.speed)

  monster.camera(dt,camera.speed)

  map.camera(dt,camera.speed)

}


function update(dt) {

  collision(dt)

  if (render(dt)) {//we need to update only if everything previous has already been drawn

    mario.update(dt,camera.collision())

    monster.update(dt,camera.speed)

    cube.update(dt);//we change the cube color

    map.update(dt);

    item.update(dt)

  }

}
function render(dt) {

  monster.bullet()//in case there area some bullet we need to spawn them

  sprite.draw()//we draw everything

  return true;

}
