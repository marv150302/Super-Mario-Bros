var Camera = function (ctx) {

  this.ctx = ctx;

  this.left = 150-200;

  this.top=52;

  this.speed = 100;

  this.old_speed = 100;

  this.axis = 200;

}

Camera.prototype.draw = function () {

  this.ctx.clearRect(0,0,canvas.width,canvas.height)

  this.ctx.beginPath();

  //this.ctx.moveTo(this.axis ,0);

  this.ctx.moveTo(0 ,7*16);

  this.ctx.lineTo(canvas.width ,7*16);

  this.ctx.stroke();

}

Camera.prototype.collision = function () {

  return mario.x+mario.width>= (this.axis)

}
