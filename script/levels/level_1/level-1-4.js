levels[1][4] = {

  main_theme : new Audio(),

  sky : "black",

  groundRange : new Array(),

  cloudPosition : new Array(),

  bushPosition : new Array(),

  cubePosition : new Array(),

  tubePosition : new Array(),

  monster : new Array(),

  holes : new Array(),

  lava : new Array(),

  tempStairPosition : new Array(),

  winning_pole : {

    x : 220*16,

    y : 3*16,

    nextLevelEntrance : {

      x : 500*16,

      y : 10*16,

      url : "./images/final_castle.png",

    }

  },

  bullet : {

    //x : 100*16,

    //y : 11.3*16

  },

  static_coin : new Array(),

  mario_position : {

    y : 8*16

  },

  platform : new Array()

}

//creating the level_4 from 0

let level_4 = new Level(1,4);

//loading monster
/*
level_4.loadMonster([57*16,(((9+(0.65*0))*1.6)*16),"./images/goomba.png","goomba",false,true,true],)

level_4.loadMonster([60*16,(((9+(0.65*0))*1.6)*16),"./images/goomba.png","goomba",false,true,true],)

level_4.loadMonster([86*16,(((1+(0.6*6))*1.6)*16),"./images/koopa.png","koopa",false,true,true],)*/

//loading ground

//range,x,y,url,height
level_4.loadCube([0,0*16,false,200,"./images/greyCube.png","grey"]);

level_4.loadCube([0,1*16,false,200,"./images/greyCube.png","grey"]);

level_4.loadCube([0,2*16,false,200,"./images/greyCube.png","grey"]);



level_4.loadGround([4,0,12*16,"./images/greyCube.png",1]);

level_4.loadGround([5,0,13*16,"./images/greyCube.png",1]);

level_4.loadGround([6,0,14*16,"./images/greyCube.png",1]);

level_4.loadGround([12,0,15*16,"./images/greyCube.png",7]);

level_4.loadLava([2,12*16,17*16,"./images/lava.png",1])

level_4.loadLava([2,12*16,18*16,"./images/lava2.png",4])

level_4.loadGround([12,14*16,15*16,"./images/greyCube.png",7]);

level_4.loadLava([4,26*16,17*16,"./images/lava.png",1])

level_4.loadLava([4,26*16,18*16,"./images/lava2.png",4])

level_4.loadGround([4,30*16,15*16,"./images/greyCube.png",7]);

level_4.loadGround([30,40*16,14*16,"./images/greyCube.png",1]);

level_4.loadLava([6,34*16,17*16,"./images/lava.png",1])

level_4.loadLava([6,34*16,18*16,"./images/lava2.png",4])

level_4.loadGround([70,40*16,15*16,"./images/greyCube.png",3]);

level_4.loadGround([300,40*16,18*16,"./images/greyCube.png",6]);

level_4.loadGround([4,120*16,15*16,"./images/greyCube.png",3]);

level_4.loadGround([5,130*16,15*16,"./images/greyCube.png",3]);

level_4.loadGround([15,135*16,15*16,"./images/castleGround.png",1]);

level_4.loadStair([220*16,17*16,1,"./images/brown-stair.png"])

level_4.loadStair([210*16,17*16,4,"./images/brown-stair.png"])

level_4.loadStair([211*16,16*16,3,"./images/brown-stair.png"])

level_4.loadStair([212*16,15*16,2,"./images/brown-stair.png"])



level_4.loadLava([15,135*16,20*16,"./images/lava.png",1])

level_4.loadLava([15,135*16,21*16,"./images/lava2.png",1])

level_4.loadGround([50,150*16,15*16,"./images/greyCube.png",7]);

level_4.loadMonster([150*16,13*16,"./images/bowser.png","bowser",false,true,true],)

level_4.loadCube([7*16,10*16,true,1,"./images/yellowCube.png",1]);






/*
level_4.loadGround([4,0,(((7+(0.65*1))*1.6)*16),"./images/iceCube.png",1]);

level_4.loadGround([5,0,(((7+(0.65*2))*1.6)*16),"./images/iceCube.png",1]);

level_4.loadGround([6,0,(((7+(0.65*3))*1.6)*16),"./images/iceCube.png",1]);

level_4.loadGround([6,0,(((7+(0.65*4))*1.6)*16),"./images/iceCube.png",1]);

level_4.loadGround([13,0,(((7+(0.65*4))*1.6)*16),"./images/iceCube.png",4]);// here

level_4.loadGround([25-15,15*16,(((7+(0.65*4))*1.6)*16),"./images/iceCube.png",4]);

level_4.loadGround([25-15,15*16,(((7+(0.65*4))*1.6)*16),"./images/iceCube.png",4]);

level_4.loadGround([3,29*16,(((7+(0.65*4))*1.6)*16),"./images/iceCube.png",4]);

level_4.loadGround([200,37*16,(((7+(0.65*4))*1.6)*16),"./images/iceCube.png",4]);*/

/*level_4.loadStair([111*16,(((7+(0.65*3))*1.6)*16),4,"./images/brown-stair.png",])

level_4.loadStair([112*16,(((7+(0.65*2))*1.6)*16),3,"./images/brown-stair.png",])

level_4.loadStair([113*16,(((7+(0.65*1))*1.6)*16),2,"./images/brown-stair.png",])

level_4.loadStair([114*16,(((7+(0.65*0))*1.6)*16),1,"./images/brown-stair.png",])*/

level_4.loadMainTheme("./sound/boss.mp3")

//x,y,url,contains_monster,width,height

//54*16,(((1+(0.65*0))*1.6)*16),"./images/tube1.png",true,32,32

/*level_4.loadTube([54*16,(((9+(0.65*0))*1.6)*16)-16,"./images/tube3.png",true,32,32],)

level_4.loadTube([64*16,(((9+(0.65*0))*1.6)*16)-16,"./images/tube3.png",true,32,32],)*/

//loading holes

//min = gorundrange[_index][0]

//max = groundRange[_index+1][1]-1

/*level_4.loadHole([13*16,(14*16),(((7+(0.65*4))*1.6)*16)])

level_4.loadHole([26*16,(28*16),(((7+(0.65*4))*1.6)*16)])

level_4.loadHole([32*16,(36*16),(((7+(0.65*4))*1.6)*16)])*/

//load all lava


/*
level_4.loadLava([1,12*16,19*16,"./images/lava2.png",1])

level_4.loadLava([1,12*16,18*16,"./images/lava2.png",1])*/

/*
level_4.loadLava([1,13*16,(((7+(0.65*5))*1.6)*16),"./images/lava2.png",3])

level_4.loadLava([1,14*16,(((7+(0.65*4))*1.6)*16),"./images/lava.png",1])

level_4.loadLava([1,14*16,(((7+(0.65*5))*1.6)*16),"./images/lava2.png",3])

level_4.loadLava([1,25*16,(((7+(0.65*4))*1.6)*16),"./images/lava.png",1])

level_4.loadLava([1,26*16,(((7+(0.65*4))*1.6)*16),"./images/lava.png",1])

level_4.loadLava([1,27*16,(((7+(0.65*4))*1.6)*16),"./images/lava.png",1])

level_4.loadLava([1,28*16,(((7+(0.65*4))*1.6)*16),"./images/lava.png",1])

level_4.loadLava([1,25*16,(((7+(0.65*5))*1.6)*16),"./images/lava2.png",3])

level_4.loadLava([1,26*16,(((7+(0.65*5))*1.6)*16),"./images/lava2.png",3])

level_4.loadLava([1,27*16,(((7+(0.65*5))*1.6)*16),"./images/lava2.png",3])

level_4.loadLava([1,28*16,(((7+(0.65*5))*1.6)*16),"./images/lava2.png",3])

level_4.loadLava([1,32*16,(((7+(0.65*4))*1.6)*16),"./images/lava.png",1])

level_4.loadLava([1,33*16,(((7+(0.65*4))*1.6)*16),"./images/lava.png",1])

level_4.loadLava([1,34*16,(((7+(0.65*4))*1.6)*16),"./images/lava.png",1])

level_4.loadLava([1,35*16,(((7+(0.65*4))*1.6)*16),"./images/lava.png",1])

level_4.loadLava([1,36*16,(((7+(0.65*4))*1.6)*16),"./images/lava.png",1])

level_4.loadLava([1,32*16,(((7+(0.65*5))*1.6)*16),"./images/lava2.png",3])

level_4.loadLava([1,33*16,(((7+(0.65*5))*1.6)*16),"./images/lava2.png",3])

level_4.loadLava([1,34*16,(((7+(0.65*5))*1.6)*16),"./images/lava2.png",3])

level_4.loadLava([1,35*16,(((7+(0.65*5))*1.6)*16),"./images/lava2.png",3])

level_4.loadLava([1,36*16,(((7+(0.65*5))*1.6)*16),"./images/lava2.png",3])*/
