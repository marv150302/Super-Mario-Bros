var Item = function (ctx) {

  this.ctx = ctx;

  this.entity = [];

  this.gravity = 150,

  this.coin = new Audio("./sound/coin.mov")

  this.item_audio = new Audio("./sound/item.mov");
}

Item.prototype.push = function (x,y,url,type,static) {

  this.entity.push({

    x: Math.round(x),

    y: y,

    old_y : y,

    ground : 24*16,

    bounce : true,

    url : url,

    height : 16,

    width : 16,

    bounce_height : y - 30,

    taken : false,

    type: type,

    static : static=="static" ? true : false,

    velocity : 100,

    velocity_y : -250,

    update : false

  })

}
Item.prototype.load = function () {

  this.entity = []
  
  for (var i = 0,length=levels[WORLD][AREA].static_coin.length; i < length; i++) {

    let x = levels[WORLD][AREA].static_coin[i][0];

    let y = levels[WORLD][AREA].static_coin[i][1];

    let url = levels[WORLD][AREA].static_coin[i][2];

    let type = levels[WORLD][AREA].static_coin[i][3];

    let static = levels[WORLD][AREA].static_coin[i][4];

    this.push(x,y,url,type,static);
  }
}

Item.prototype.bounce = function (i,dt) {

  if (this.entity[i].bounce) {

    this.entity[i].y += this.entity[i].velocity_y*dt

    if (this.entity[i].y <= this.entity[i].bounce_height) {

      this.entity[i].velocity_y = -this.entity[i].velocity_y

      this.entity[i].update = true

      this.entity[i].bounce = false

      if (this.entity[i].type=="coin") {

        this.entity.splice(i,1);

      }

    }

  }
}
Item.prototype.camera = function (dt,speed) {

  this.entity.forEach((item, i) => {

    this.entity[i].x = Math.round(this.entity[i].x-= Math.round(speed*dt))//Math.round(speed*dt)/100

  });
}


Item.prototype.update = function (dt) {

  this.entity.forEach((item, i) => {

    this.bounce(i,dt)

    if (item.y >= 18*16 && item.type=="star") {

      this.entity[i].bounce_height = 17*16

    }


    if (item.update) {

      if (item.type=="mushroom" || item.type=="star" || item.type=="fire") {

        this.entity[i].y +=  (item.velocity_y*dt)

        if (!itemTopCollision(i)) {

          this.entity[i].ground = 24*16//we make the item fall

        }

        if (item.y >= item.ground ) {

          if (item.type=="star") {

            this.entity[i].velocity_y = -this.entity[i].velocity_y

          }

          this.entity[i].y = item.ground

          if (item.type!="fire") {

            this.entity[i].x += this.entity[i].velocity*dt;

          }

        }

      }

      if (item.type=="star") {

        if (item.y <= item.bounce_height) {

          this.entity[i].velocity_y = -this.entity[i].velocity_y

        }

        this.entity[i].x += this.entity[i].velocity*dt;


      }

    }

    if (item.x + item.width < 0 || item.y >= (24*16)) {

      this.entity.splice(i,1);

    }

  });

}
