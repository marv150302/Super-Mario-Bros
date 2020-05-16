levels[2][2]={

  main_theme : new Audio("./sound/level-1-1.mp3"),

  sky : "brown",//#0089b3

  groundRange : new Array(),

  cloudPosition : new Array(),

  bushPosition : new Array(),

  cubePosition : new Array(),

  tubePosition : new Array(),

  monster :new Array(),

  holes : new Array(),

  lava: new Array(),

  tempStairPosition : new Array(),

  winning_pole : {

    x : null,

    y : null,

    url : "./images/pole.png",

    name : "pole",

    nextLevelEntrance : {

      x : null,

      y : null,

      url : "./images/final_castle.png",

    }

  },

  bullet : {},

  static_coin : new Array(),

  mario_life : 2000,

  mario_position : {

    y : 0

  },

  platform : new Array()

}


let credit_level = new Level(2,2);

credit_level.loadGround([400,0,(20*16),"./images/ground.png",2])

for (var i = 10; i <25; i++) {

  if (i%2!=0) {

    credit_level.loadMonster([i*16,Math.floor(Math.random()*7)*16,"./images/goomba.png","goomba",false,false,false])

  }else{

    credit_level.loadMonster([i*16,Math.floor(Math.random()*7)*16,"./images/koopa.png","koopa",false,false,false])

  }
}

for (var i = 50; i <65; i++) {

  if (i%2!=0) {

    credit_level.loadMonster([i*16,Math.floor(Math.random()*7)*16,"./images/goomba.png","goomba",false,false,false])

  }else{

    credit_level.loadMonster([i*16,Math.floor(Math.random()*7)*16,"./images/koopa.png","koopa",false,false,false])

  }
}

for (var i = 65; i <75; i++) {

  if (i%2!=0) {

    credit_level.loadMonster([i*16,Math.floor(Math.random()*7)*16,"./images/goomba.png","goomba",false,false,false])

  }else{

    credit_level.loadMonster([i*16,Math.floor(Math.random()*7)*16,"./images/koopa.png","koopa",false,false,false])

  }
}

for (var i = 75; i <90; i++) {

  if (i%2!=0) {

    credit_level.loadMonster([i*16,Math.floor(Math.random()*7)*16,"./images/goomba.png","goomba",false,false,false])

  }else{

    credit_level.loadMonster([i*16,Math.floor(Math.random()*7)*16,"./images/koopa.png","koopa",false,false,false])

  }
}

for (var i = 90; i <115; i++) {

  if (i%2!=0) {

    credit_level.loadMonster([i*16,Math.floor(Math.random()*7)*16,"./images/goomba.png","goomba",false,false,false])

  }else{

    credit_level.loadMonster([i*16,Math.floor(Math.random()*7)*16,"./images/koopa.png","koopa",false,false,false])

  }
}

let marvel_harsi_credit = function () {

  credit_level.loadCube([5*16,(19-5)*16,false,1,"./images/brick-cube.png","brown"])

  credit_level.loadCube([5*16,(18-5)*16,false,1,"./images/brick-cube.png","brown"])

  credit_level.loadCube([5*16,(17-5)*16,false,1,"./images/brick-cube.png","brown"])

  credit_level.loadCube([5*16,(16-5)*16,false,1,"./images/brick-cube.png","brown"])

  credit_level.loadCube([5*16,(15-5)*16,false,1,"./images/brick-cube.png","brown"])

  credit_level.loadCube([6*16,(15-5)*16,false,1,"./images/brick-cube.png","brown"])

  credit_level.loadCube([7*16,(16-5)*16,false,1,"./images/brick-cube.png","brown"])

  credit_level.loadCube([8*16,(16-5)*16,false,1,"./images/brick-cube.png","brown"])

  credit_level.loadCube([9*16,(15-5)*16,false,2,"./images/brick-cube.png","brown"])

  credit_level.loadCube([9*16,(15-5)*16,false,1,"./images/brick-cube.png","brown"])

  credit_level.loadCube([10*16,(16-5)*16,false,1,"./images/brick-cube.png","brown"])

  credit_level.loadCube([10*16,(17-5)*16,false,1,"./images/brick-cube.png","brown"])

  credit_level.loadCube([10*16,(18-5)*16,false,1,"./images/brick-cube.png","brown"])

  credit_level.loadCube([10*16,(19-5)*16,false,1,"./images/brick-cube.png","brown"])

  //a

  credit_level.loadCube([12*16,(19-5)*16,false,1,"./images/brick-cube.png","brown"])

  credit_level.loadCube([12*16,(18-5)*16,false,1,"./images/brick-cube.png","brown"])

  credit_level.loadCube([12*16,(17-5)*16,false,1,"./images/brick-cube.png","brown"])

  credit_level.loadCube([12*16,(16-5)*16,false,1,"./images/brick-cube.png","brown"])

  credit_level.loadCube([12*16,(15-5)*16,false,5,"./images/brick-cube.png","brown"])

  credit_level.loadCube([16*16,(16-5)*16,false,1,"./images/brick-cube.png","brown"])

  credit_level.loadCube([16*16,(17-5)*16,false,1,"./images/brick-cube.png","brown"])

  credit_level.loadCube([16*16,(18-5)*16,false,1,"./images/brick-cube.png","brown"])

  credit_level.loadCube([16*16,(19-5)*16,false,1,"./images/brick-cube.png","brown"])

  //r

  credit_level.loadCube([18*16,(19-5)*16,false,1,"./images/brick-cube.png","brown"])

  credit_level.loadCube([18*16,(18-5)*16,false,1,"./images/brick-cube.png","brown"])

  credit_level.loadCube([18*16,(17-5)*16,false,1,"./images/brick-cube.png","brown"])

  credit_level.loadCube([18*16,(16-5)*16,false,1,"./images/brick-cube.png","brown"])

  credit_level.loadCube([18*16,(15-5)*16,false,5,"./images/brick-cube.png","brown"])

  credit_level.loadCube([22*16,(16-5)*16,false,1,"./images/brick-cube.png","brown"])

  credit_level.loadCube([19*16,(17-5)*16,false,4,"./images/brick-cube.png","brown"])

  credit_level.loadCube([20*16,(18-5)*16,false,1,"./images/brick-cube.png","brown"])

  credit_level.loadCube([21*16,(19-5)*16,false,1,"./images/brick-cube.png","brown"])

  //h

  credit_level.loadCube([(24+4)*16,(19-10)*16,false,1,"./images/brick-cube.png","brown"])

  credit_level.loadCube([(24+4)*16,(18-10)*16,false,1,"./images/brick-cube.png","brown"])

  credit_level.loadCube([(24+4)*16,(17-10)*16,false,1,"./images/brick-cube.png","brown"])

  credit_level.loadCube([(24+4)*16,(16-10)*16,false,1,"./images/brick-cube.png","brown"])

  credit_level.loadCube([(24+4)*16,(15-10)*16,false,1,"./images/brick-cube.png","brown"])

  credit_level.loadCube([(25+4)*16,(16-10)*16,false,4,"./images/brick-cube.png","brown"])

  credit_level.loadCube([(29+4)*16,(15-10)*16,false,1,"./images/brick-cube.png","brown"])

  credit_level.loadCube([(29+4)*16,(16-10)*16,false,1,"./images/brick-cube.png","brown"])

  credit_level.loadCube([(29+4)*16,(17-10)*16,false,1,"./images/brick-cube.png","brown"])

  credit_level.loadCube([(29+4)*16,(18-10)*16,false,1,"./images/brick-cube.png","brown"])

  credit_level.loadCube([(29+4)*16,(19-10)*16,false,1,"./images/brick-cube.png","brown"])


  //a
  credit_level.loadCube([(31+4)*16,(19-10)*16,false,1,"./images/brick-cube.png","brown"])

  credit_level.loadCube([(31+4)*16,(18-10)*16,false,1,"./images/brick-cube.png","brown"])

  credit_level.loadCube([(31+4)*16,(17-10)*16,false,1,"./images/brick-cube.png","brown"])

  credit_level.loadCube([(31+4)*16,(16-10)*16,false,1,"./images/brick-cube.png","brown"])

  credit_level.loadCube([(31+4)*16,(15-10)*16,false,5,"./images/brick-cube.png","brown"])

  credit_level.loadCube([(35+4)*16,(16-10)*16,false,1,"./images/brick-cube.png","brown"])

  credit_level.loadCube([(35+4)*16,(17-10)*16,false,1,"./images/brick-cube.png","brown"])

  credit_level.loadCube([(35+4)*16,(18-10)*16,false,1,"./images/brick-cube.png","brown"])

  credit_level.loadCube([(35+4)*16,(19-10)*16,false,1,"./images/brick-cube.png","brown"])

  //r
  credit_level.loadCube([(37+4)*16,(19-10)*16,false,1,"./images/brick-cube.png","brown"])

  credit_level.loadCube([(37+4)*16,(18-10)*16,false,1,"./images/brick-cube.png","brown"])

  credit_level.loadCube([(37+4)*16,(17-10)*16,false,1,"./images/brick-cube.png","brown"])

  credit_level.loadCube([(37+4)*16,(16-10)*16,false,1,"./images/brick-cube.png","brown"])

  credit_level.loadCube([(37+4)*16,(15-10)*16,false,5,"./images/brick-cube.png","brown"])

  credit_level.loadCube([(41+4)*16,(16-10)*16,false,1,"./images/brick-cube.png","brown"])

  credit_level.loadCube([(38+4)*16,(17-10)*16,false,4,"./images/brick-cube.png","brown"])

  credit_level.loadCube([(38+4)*16,(18-10)*16,false,1,"./images/brick-cube.png","brown"])

  credit_level.loadCube([(39+4)*16,(19-10)*16,false,1,"./images/brick-cube.png","brown"])

}


marvel_harsi_credit()
