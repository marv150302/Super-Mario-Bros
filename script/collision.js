var entities = [];

function loadEntity() {

  entities=[]

  entities.push(cube.entity);

  entities.push(map.entity);

}

function bottomCollision(dt) {



  for (var i = 0; i < entities.length; i++) {

    for (var j = 0; j < entities[i].length; j++) {

      let name = entities[i][j].name;

      if (name=="cube") {

        let type = entities[i][j].type;



        let x = entities[i][j].x;

        let y = entities[i][j].y;

        let width = entities[i][j].x + entities[i][j].width;

        let height = entities[i][j].y + entities[i][j].height;

        let color = entities[i][j].color;

        if (mario.isJumping && mario.x + mario.width > x && mario.x < width) {

          if (mario.y < height && mario.y + mario.height > y) {

            mario.vy = 0

            item_push(i,j);

            if (!type) {

              if (mario.size=="big") {

                canvas.game.audio.cube_break_sound.play()

                cube.cube_destruction_animation(x,y,color);

                cube.entity.splice(j,1);

              }else{

                  cube.entity[j].bounce = true;

                  canvas.game.audio.cube_bump_sound.play()

              }

            }

            canvas.game.audio.cube_break_sound.currentTime = 0.0

            canvas.game.audio.cube_bump_sound.currentTime = 0.0

            return true;

          }

        }

      }

    }

  }

  return false;

}

function item_push(_index1,_index2) {

  if (!entities[_index1][_index2].taken) {

    let type = entities[_index1][_index2].type;

    let x = entities[_index1][_index2].x;

    let y = entities[_index1][_index2].y;

    if (type) {

      cube.entity[_index2].taken = true;

      let random = Math.floor(Math.random()*10)+1

      entities[_index1][_index2].type ? cube.spawn(random,x,y,_index2) : null//if the type of cube is yellow we spawn a random item

    }else{


      if (mario.size == "big") {

        cube.entity[_index2].taken = true;// only if mario is big you can destroy the cube

      }

      let random = Math.floor(Math.random()*10)+1

      if (random==3) {

        item.push(x,y-16,"./images/coin.png","coin");

        canvas.game.audio.coin_sound.play();

        mario.coin+=1;

      }

    }

  }

}

function topCollision(dt) {

    for (var i = 0; i < entities.length; i++) {

      for (var j = 0; j < entities[i].length; j++) {

        let name = entities[i][j].name;

        if (name == "ground" || name=="cube" || name=="tube" || name=="stair" || name=="bullet_maker" || name=="platform") {

          let y = entities[i][j].y;

          let x = entities[i][j].x;

          let right = entities[i][j].x + entities[i][j].width;

          let url = entities[i][j].url;

          let mario_height = mario.state=="crouch" ? mario.height+16 : mario.height

          if (mario.x < right && mario.x + mario.width > x) {

              if (mario.y + mario_height > entities[i][j].y - entities[i][j].height && mario.y < entities[i][j].height + y) {

                if (url == "./images/lava.png" || url == "./images/lava2.png") {

                  mario.life = 0;

                  return true;

                }

                if (!bottomCollision(dt)) {

                  mario.ground = (y - mario_height - 0.001)

                  return true

              }

            }

          }

        }

      }

    }

    mario.size == "big" ? mario.ground = (24*16)   : mario.ground = (24*16)  + 16

  return false

}

function monster_top_collision(index) {

  for (var i = 0; i < entities.length; i++) {

    for (var j = 0; j < entities[i].length; j++) {

      let name = entities[i][j].name;

      if (name == "ground" || name=="cube" || name=="tube" || name=="stair" || name=="bullet_maker" || name=="platform") {

        let type = monster.entity[index].type;

        let object_y = entities[i][j].y

        let object_x = entities[i][j].x;

        let object_right = entities[i][j].x + entities[i][j].width;



        let object_height =  entities[i][j].height

        let x = monster.entity[index].x;

        let y = monster.entity[index].y;

        let width = monster.entity[index].width;

        let height = monster.entity[index].height;

        let fire_death = monster.entity[index].fire_death



        if (type!="flower_monster" && type!="bullet" && type != "flyingKoopa" && type!="flyingRedKoopa" && type!="bowser" && type!="bowserRight" && !monster.entity[index].dead && !fire_death) {

          if (x < canvas.width) {

            if (x < object_right && x + width > object_x) {

                if (y + height > object_y - object_height && y < object_height + object_y) {

                  monster.entity[index].ground = (object_y - monster.entity[index].height)

                 return true

              }

            }

          }

        }

      }

    }

  }

  return false

}

function itemTopCollision(index) {

  for (let i = 0, length = entities.length; i < length; i++) {

    for (let k = 0; k < entities[i].length; k++) {

      let name = entities[i][k].name;

      if ( name=="ground" || name=="cube") {

        let object_x = entities[i][k].x;

        let object_y = entities[i][k].y;

        let object_height = entities[i][k].height;

        let object_width = entities[i][k].width;

        for (let j = 0; j < item.entity.length; j++) {

          let x = item.entity[index].x;

          let y = item.entity[index].y;

          let height = item.entity[index].height;

          let width = item.entity[index].width;

          if (x < object_x + object_width && x + width > object_x && y + height > object_y  && y < object_y + object_height) {

            if (entities[i][k].url=="./images/lava") {

              item.entity.splice(i,1)

            }else{

              item.entity[index].ground = (object_y - 16 - 0.0001);

              return true

            }

          }

        }

      }

    }

  }

  return false

}

function itemObjectCollision() {

  for (let i = 0, length = entities.length; i < length; i++) {

    for (let k = 0; k < entities[i].length; k++) {

      let name = entities[i][k].name;

      if (name=="cube" || name=="tube") {

        let object_x = entities[i][k].x;

        let object_y = entities[i][k].y;

        let object_height = entities[i][k].height;

        let object_width = entities[i][k].width;

        for (let j = 0; j < item.entity.length; j++) {

          let x = item.entity[j].x;

          let y = item.entity[j].y;

          let height = item.entity[j].height;

          let width = item.entity[j].width;

          let type = item.entity[j].type;

          if (type!="star") {

            if (x < object_x + object_width && x + width > object_x) {

              if (y + height > object_y && y < object_y + object_height) {

                item.entity[j].velocity = -item.entity[j].velocity


                return true
              }

            }

          }

        }

      }

    }

  }

}

function leftCollision() {

  for (var i = 0; i < entities.length; i++) {

    for (let j = 0,length=entities[i].length; j < length; j++) {

      let name = entities[i][j].name

      if ( name=="cube" || name=="tube" || name=="stair" || name=="bullet_maker" || name=="platform" || name== (WORLD==1 && AREA==4 ? "ground" : "")) {

        let left = entities[i][j].x

        let top = entities[i][j].y

        let height = entities[i][j].height + entities[i][j].y

        if (mario.face=="Right") {

          if (mario.x+mario.width>left && mario.oldx < left && !mario.isJumping && mario.y + mario.height > top && mario.y < height) {

            mario.vx = 0

            mario.x = mario.oldx = left - mario.width - 0.001

            return true;

          }

        }

      }

    }

  }

  return false;

}

function rightCollision() {

  for (var i = 0; i < entities.length; i++) {

    for (var j = 0; j < entities[i].length; j++) {

      let name = entities[i][j].name

      if (mario.face == "Left" && name=="tube" || name=="cube" || name=="stair" || name=="bullet_maker" || name=="platform" || name== (WORLD==1 && AREA==4 ? "ground" : "")) {

        let right = entities[i][j].x + entities[i][j].width

        let y = entities[i][j].y

        let height = entities[i][j].height;

        if (mario.x <right && mario.oldx > right && !mario.isJumping && mario.y + mario.height > y && mario.y < y + height) {

          mario.x = entities[i][j].x + entities[i][j].width + 0.001

          return true;

        }

      }

    }

  }

  return false;

}

function monsterObjectCollision() {

  for (var i = 0,length = entities.length; i < length; i++) {

    for (var j = 0; j < entities[i].length; j++) {

      let name = entities[i][j].name;

      if (name=="tube" || name=="cube" || name=="stair" ) {//collide with cubes and tube

        let x =entities[i][j].x

        let width =entities[i][j].width

        let y =entities[i][j].y

        let height =entities[i][j].height

          monster.collision(x,width,y,height);//this is for the monsters collision with the map object

      }

    }

  }

}

function mario_collision_with_enemy() {

  for (let j = 0,length=monster.entity.length; j < length; j++) {

    /*if (monster.dead_animation(j)) {

      return

    }*/

      let x = monster.entity[j].x

      let width = monster.entity[j].width

      let y = monster.entity[j].y

      let height = monster.entity[j].height

      let right = x + width;

      if (mario.x + mario.width > x && mario.x < right && mario.y < y + height && mario.y + mario.height > y) {

        if (mario.power=="Star") {

          monster.entity[j].dead = true

          monster.entity[j].ground = canvas.height;

          return;

        }

      }

      if (monster.entity[j].type=="goomba" || monster.entity[j].type=="koopa") {



      if (mario.isJumping && mario.x + mario.width > x && mario.x < right && !monster.entity[j].dead) {

        if (mario.y + mario.height > y) {

          //we play the dying animation

          mario.key[38] = true;

          mario.isJumping = true

          setTimeout(function () {

            mario.key[38] = false

            mario.state = "idle"

          }, 100);


          //mario.score +=1000;

          canvas.game.audio.goomba_death_sound[j].play();

          if (monster.entity[j].type=="goomba" || monster.entity[j].type=="koopa") {

            monster.entity[j].dead = true

          }

          return;

        }

      }

      if (!mario.vulnerability) {

        let x = monster.entity[j].x

        let width = monster.entity[j].width

        let y = monster.entity[j].y

        let right = x + width;

        if (mario.x + mario.width > x && mario.x < right && !monster.entity[j].dead && mario.y < y + height && mario.y + mario.height > y && !mario.isJumping) {

          mario.power=="normal" ? mario.setForm("small","normal",16) : mario.setForm("big","normal",32);

          canvas.game.audio.damage_to_mario[j].play();

            mario.life -= 1;

            mario.vulnerability = true

            setTimeout(function () {

            mario.vulnerability = false}, mario.vulnerability_time);

            return;

        }

    }

    }else{//you can't jump on a flower or bullet so if you try it removes your life

          //the previous control is valid for all other kind of monster

          let x = monster.entity[j].x

          let width = monster.entity[j].width

          let y = monster.entity[j].y

          let right = x + width;

        if (mario.power!="Star") {

          if (!mario.vulnerability&& mario.x + mario.width > x && mario.x < right &&  mario.y+mario.height > y  && mario.y < y + monster.entity[j].height) {

            mario.power=="normal" ? mario.setForm("small","normal",16) : mario.setForm("big","normal",32);

            mario.life -= 1;

            canvas.game.audio.damage_to_mario[j].play();

            mario.vulnerability = true

            setTimeout(function () {

            mario.vulnerability = false}, mario.vulnerability_time);

            //return;

          }

        }

    }

  }

}

function itemCollision() {

  item.entity.forEach((items, i,array) => {

    if (mario.x + mario.width > items.x && mario.x < items.x + items.width && mario.y < items.y + items.height && mario.y + mario.height > items.y) {

      //if (items.type!="coin") {

        if (items.type!="mushroom") {

          if (items.type.toLowerCase()==mario.power.toLowerCase()) {

            mario.score+=1000;

          }

          if (items.type!="coin") {

            mario.setForm("big",items.type.charAt(0).toUpperCase()+items.type.slice(1),32);

          }else{

            canvas.game.audio.coin_sound.play()

            mario.coin++;

          }

          mario.life < 3 ? mario.life+=1 : null

          if (items.type.toLowerCase()==mario.power.toLowerCase()) {

            canvas.game.audio.item_sound.play();

          }



          item.entity.splice(i,1)



          return;

        }else{

          mario.setForm("big","normal",32);

          mario.life+=1;

          canvas.game.audio.item_sound.play();

          item.entity.splice(i,1);

          return;

        }

      //}

    }

  });

}

function poleCollision() {

    for (var i = 0; i < entities.length; i++) {

      for (var j = 0; j < entities[i].length; j++) {

        let name = entities[i][j].name;

        if (name == "pole") {

          let x = entities[i][j].x

          if (mario.x + mario.width > x) {

            mario.complete_level = true

            return;

          }

        }

      }

    }

}

function fireBallCollision() {

  if (mario.fireBall.length > 0) {

    for (var i = 0,length=entities.length; i < length; i++) {

      for (var j = 0; j < entities[i].length; j++) {

        let name = entities[i][j].name;

        if (name=="tube" || name=="cube" || name=="stair") {

          let x = entities[i][j].x;

          let y = entities[i][j].y;

          let width = entities[i][j].x + entities[i][j].width;

          let height = entities[i][j].y + entities[i][j].height;

          for (var k = 0; k < mario.fireBall.length; k++) {

            let item = mario.fireBall[k];

            if (item.x + item.width > x && item.x < width && item.y < height && item.y + item.height > y) {

              mario.fireBall.splice(k,1);

              return;

            }
          }

        }

      }

    }

  }

  for (var i = 0; i < monster.entity.length; i++) {

    let x = monster.entity[i].x;

    let y = monster.entity[i].y;

    let width = monster.entity[i].x + monster.entity[i].width;

    let height = monster.entity[i].y + monster.entity[i].height;

    mario.fireBall.forEach((item, index) => {

      if (item.x + item.width > x && item.x < width && item.y < height && item.y + item.height > y) {

        canvas.game.audio.goomba_death_sound[i].play();

        if (monster.entity[i].type!="flower_monster" ) {

          if (!monster.entity[i].dead) {

            mario.fireBall.splice(index,1);

            //monster.entity[i].dead = true;
            monster.entity[i].url = "./images/fire_death_goomba.png",

            monster.entity[i].fire_death = true;

          }

        }

        //monster.entity[i].type!="koopa" ? monster.entity[i].dead = true : monster.entity[i].move = false



        return;

      }

    });

  }



}

function collision(dt) {

  //checking the whole game collisions

  //yeah lot of stuff

  //itemTopCollision();

  itemObjectCollision()

  mario_collision_with_enemy()//checking if mario touches a monster without jumping

  monsterObjectCollision()//all monster collision with object

  poleCollision();//mario collision with pole

  //mario collisions with objects on the map

  fireBallCollision()//mario fireball can collide with entity such as tube or cube

  //bottomCollision()//we need to check mario bottom collision

  leftCollision()//we need to check mario left collision

  rightCollision()//we need to check mario rightCollision

  itemCollision();//mario collision with an item\

  topCollision(dt)// we need to check mario top collision

}
