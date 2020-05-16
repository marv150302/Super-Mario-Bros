var Sprite = function (ctx) {

  this.ctx = ctx;

  this.entity = [];

}

Sprite.prototype.draw = function () {

  //we need to load only the entities that are on the screen

  this.entity = []

  this.entity.push(map.entity.filter((item) => {

    return item.x < canvas.width;

  }))

  this.entity.push(cube.entity.filter((item) => {

    return item.x < canvas.width - (canvas.width/2);

  }))

  this.entity.push(monster.entity.filter((item) => {

    return item.x < canvas.width - (canvas.width/2);

  }))

  this.entity.push(item.entity.filter((item) => {

    return item.x < canvas.width - (canvas.width/2);

  }))

  //this.ctx.clearRect(0,0,canvas.width,canvas.height);

  this.ctx.fillStyle = levels[WORLD][AREA].sky

  this.ctx.fillRect(0,0,canvas.width,canvas.height)

  //drawing everything

  this.ctx.imageSmoothingEnabled = false

  mario.power=="Star" ? this.ctx.globalAlpha = 0.5 : this.ctx.globalAlpha = 1

  for (var i = 0,length=this.entity.length; i < length; i++) {

    for (var j = 0; j < this.entity[i].length; j++) {

      /*

      this.ctx.beginPath();

      this.ctx.rect(this.entity[i][j].x,this.entity[i][j].y,this.entity[i][j].width, this.entity[i][j].height)

      this.ctx.stroke();

      */

      this.ctx.drawImage(resources.get(this.entity[i][j].url),Math.round(this.entity[i][j].x),Math.round(this.entity[i][j].y))

    }

  }

}
