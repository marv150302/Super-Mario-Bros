var map = new Map();

var cube = new Cube();

var item = new Item()

var monster = new Monster();

function main() {

  canvas.game.now = Date.now();

  var dt = (canvas.game.now-canvas.game.lastime)/1000.0

  handleGame(dt)

  canvas.game.lastime = canvas.game.now

  requestAnimationFrame(main)
}

//we have to add mario game time
setInterval(function () {

  canvas.game.play ? canvas.game.time-- : false

}, 1000);
