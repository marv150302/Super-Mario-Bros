levels[2][1]={

  main_theme : new Audio("./sound/level-1-1.mp3"),

  sky : "#0089b3",//#0089b3

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

    x : (215+8)*16,

    y : 3*16,

    url : "./images/pole.png",

    name : "pole",

    nextLevelEntrance : {

      x : 230*16,

      y : 10*16,

      url : "./images/final_castle.png",

    }

  },

  bullet : {},

  static_coin : new Array(),

  mario_position : {

    y : 0

  },

  platform : new Array()

}

//canvas height = 19*16

let level_5 = new Level(2,1);

level_5.loadGround([110,0,(20*16 ),"./images/ground.png",2])

level_5.loadGround([11,(110+5)*16,(20*16 ),"./images/ground.png",2])

level_5.loadGround([29,(110+5+11+3)*16,(20*16),"./images/ground.png",2])

level_5.loadGround([18,(110+5+11+29+3)*16,(20*16 ),"./images/ground.png",2])

level_5.loadGround([90,(110+5+11+29+3+18+6)*16,(20*16),"./images/ground.png",2])



level_5.loadCube([14*16,12*16,false,1,"./images/brick-cube.png","brown"])

level_5.loadCube([29*16,9*16,false,3,"./images/brick-cube.png","brown"])

//"./images/yellowCube.png"

level_5.loadStair([20*16,(19*16),6,"./images/brown-stair.png",])

level_5.loadStair([21*16,((19*16)-16),5,"./images/brown-stair.png",])

level_5.loadStair([22*16,((19*16)-16*2),4,"./images/brown-stair.png",])

level_5.loadStair([23*16,((19*16)-16*3),3,"./images/brown-stair.png",])

level_5.loadStair([24*16,((19*16)-16*4),2,"./images/brown-stair.png",])

level_5.loadStair([25*16,((19*16)-16*5),1,"./images/brown-stair.png",])

level_5.loadCube([26*16,19*16,true,1,"./images/yellowCube.png"])

level_5.loadCube([32*16,19*16,true,1,"./images/yellowCube.png"])



level_5.loadStair([33*16,((19*16)-16*5),1,"./images/brown-stair.png",])

level_5.loadStair([33*16,((19*16)-16*4),1,"./images/brown-stair.png",])

level_5.loadStair([33*16,((19*16)-16*3),1,"./images/brown-stair.png",])

level_5.loadStair([33*16,((19*16)-16*2),2,"./images/brown-stair.png",])

level_5.loadStair([33*16,((19*16)-16*1),2,"./images/brown-stair.png",])

level_5.loadStair([33*16,((19*16)),2,"./images/brown-stair.png",])



level_5.loadTube([43*16,16*16,"./images/tube1-2.gif",true,32,64])

level_5.loadCube([55*16,9*16,false,5,"./images/brick-cube.png","brown"])

level_5.loadCube([55*16,12*16,false,5,"./images/brick-cube.png","brown"])

level_5.loadCube([79*16,12*16,false,1,"./images/brick-cube.png","brown"])

level_5.loadCube([80*16,9*16,false,4,"./images/brick-cube.png","brown"])



level_5.loadTube([86*16,16*16,"./images/tube1-2.gif",true,32,64])

level_5.loadCube([100*16,12*16,true,4,"./images/yellowCube.png"])

level_5.loadCube([106*16,12*16,true,3,"./images/yellowCube.png"])

level_5.loadCube([102*16,9*16,false,5,"./images/brick-cube.png","brown"])

level_5.loadCube([114*16,12*16,false,4,"./images/brick-cube.png","brown"])

level_5.loadTube([(118+5)*16,16*16,"./images/tube1-2.gif",true,32,64])

level_5.loadTube([(118+5+10+2)*16,18*16,"./images/tube1.png",false,32,32])

level_5.loadTube([(118+5+10+2+2+5)*16,16*16,"./images/tube1-2.gif",false,32,64])

level_5.loadTube([(118+5+10+2+2+5+2+2)*16,18*16,"./images/tube1.png",true,32,32])

level_5.loadTube([(118+5+10+2+2+5+2+2+2+2)*16,16*16,"./images/tube1-2.gif",false,32,64])



level_5.loadStair([182*16,((19*16)),1,"./images/brown-stair.png",])

level_5.loadStair([182*16,((19*16)-16*1),1,"./images/brown-stair.png",])

level_5.loadStair([182*16,((19*16)-16*2),1,"./images/brown-stair.png",])

level_5.loadCube([(118+5+10+2+2+5+1+7)*16,9*16,false,4,"./images/brick-cube.png","brown"])

level_5.loadCube([194*16,12*16,true,1,"./images/yellowCube.png"])

level_5.loadCube([196*16,9*16,false,5,"./images/brick-cube.png","brown"])

level_5.loadTube([(203)*16,18*16,"./images/tube1.png",true,32,32])

level_5.loadCube([(223-8-3)*16,14*16,false,2,"./images/brick-cube.png","brown"])

level_5.loadStair([(223-8)*16,((19*16)),2,"./images/brown-stair.png",])

level_5.loadStair([(223-8)*16,((19*16)-16*1),2,"./images/brown-stair.png",])

level_5.loadStair([(223-8)*16,((19*16)-16*2),2,"./images/brown-stair.png",])

level_5.loadStair([(223-8)*16,((19*16)-16*3),2,"./images/brown-stair.png",])

level_5.loadStair([(223-8)*16,((19*16)-16*4),2,"./images/brown-stair.png",])

level_5.loadStair([(223-8)*16,((19*16)-16*5),2,"./images/brown-stair.png",])

level_5.loadStair([(223-8)*16,((19*16)-16*6),2,"./images/brown-stair.png",])

level_5.loadStair([(223-8)*16,((19*16)-16*7),2,"./images/brown-stair.png",])

level_5.loadStair([(215+8)*16,((19*16)),1,"./images/brown-stair.png",])

level_5.loadMonster([30*16,16*16,"./images/koopa.png","koopa",false,true,true])
