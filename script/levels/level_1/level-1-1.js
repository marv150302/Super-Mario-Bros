var main_entity = [];

 levels[1][1]={

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

     x : 198*16,

     y : 3*16,

     url : "./images/pole.png",

     name : "pole",

     nextLevelEntrance : {

       x : 210*16,

       y : 10*16,

       url : "./images/final_castle.png",

     }

   },

   bullet : {},

   static_coin : new Array(),

   mario_position : {

     y : 19*16

   },

   platform : new Array()

 }

let level_1 = new Level(1,1);

level_1.loadGround([68,0,(20*16),"./images/ground.png",2])

level_1.loadGround([85-71,71*16,(20*16),"./images/ground.png",2])

level_1.loadGround([152-89, 89*16,(20*16),"./images/ground.png",2])

level_1.loadGround([100,155*16,(20*16),"./images/ground.png",2])

level_1.loadCube([15*16,14*16,true,1,"./images/yellowCube.png"])

level_1.loadCube([20*16,14*16,false,1,"./images/brick-cube.png","brown"])

level_1.loadCube([21*16,14*16,true,1,"./images/yellowCube.png"])

level_1.loadCube([22*16,14*16,false,1,"./images/brick-cube.png","brown"])

level_1.loadCube([23*16,14*16,true,1,"./images/yellowCube.png"])

level_1.loadCube([24*16,14*16,false,1,"./images/brick-cube.png","brown"])

level_1.loadCube([22*16,8*16,true,1,"./images/yellowCube.png"])

level_1.loadCube([77*16,14*16,false,1,"./images/brick-cube.png","brown"])

level_1.loadCube([79*16,14*16,false,1,"./images/brick-cube.png","brown"])

level_1.loadCube([80*16,8*16,false,7,"./images/brick-cube.png","brown"])

level_1.loadCube([91*16,8*16,false,3,"./images/brick-cube.png","brown"])

level_1.loadCube([94*16,14*16,false,1,"./images/brick-cube.png","brown"])

level_1.loadCube([100*16,14*16,false,1,"./images/brick-cube.png","brown"])

level_1.loadCube([118*16,14*16,false,1,"./images/brick-cube.png","brown"])

level_1.loadCube([121*16,8*16,false,3,"./images/brick-cube.png","brown"])

level_1.loadCube([129*16,14*16,false,2,"./images/brick-cube.png","brown"])

level_1.loadCube([128*16,8*16,false,1,"./images/brick-cube.png","brown"])

level_1.loadCube([131*16,8*16,false,1,"./images/brick-cube.png","brown"])

level_1.loadCube([168*16,14*16,false,2,"./images/brick-cube.png","brown"])

level_1.loadCube([171*16,14*16,false,1,"./images/brick-cube.png","brown"])

level_1.loadCube([78*16,14*16,true,1,"./images/yellowCube.png"])

level_1.loadCube([94*16,8*16,true,1,"./images/yellowCube.png"])

level_1.loadCube([106*16,14*16,true,1,"./images/yellowCube.png"])

level_1.loadCube([109*16,14*16,true,1,"./images/yellowCube.png"])

level_1.loadCube([112*16,14*16,true,1,"./images/yellowCube.png"])

level_1.loadCube([109*16,8*16,true,1,"./images/yellowCube.png"])

level_1.loadCube([129*16,8*16,true,2,"./images/yellowCube.png"])

level_1.loadCube([170*16,14*16,true,1,"./images/yellowCube.png"])

level_1.loadTube([38*16,18*16,"./images/tube1.png",false,32,32])

level_1.loadTube([46*16,16*16,"./images/tube1-2.gif",false,32,64])

level_1.loadTube([57*16,16*16,"./images/tube1-2.gif",false,32,64])

level_1.loadTube([163*16,18*16,"./images/tube1.png",false,32,32])

level_1.loadTube([179*16,18*16,"./images/tube1.png",false,32,32])

level_1.loadStair([134*16,(19*16),4,"./images/brown-stair.png",])

level_1.loadStair([135*16,(19*16)-16,3,"./images/brown-stair.png",])

level_1.loadStair([136*16,(19*16)-32,2,"./images/brown-stair.png",])

level_1.loadStair([137*16,(19*16)-48,1,"./images/brown-stair.png",])

level_1.loadStair([140*16,(19*16),4,"./images/brown-stair.png",])

level_1.loadStair([140*16,(19*16)-16,3,"./images/brown-stair.png",])

level_1.loadStair([140*16,(19*16)-32,2,"./images/brown-stair.png",])

level_1.loadStair([140*16,(19*16)-48,1,"./images/brown-stair.png",])

level_1.loadStair([147*16,(19*16),5,"./images/brown-stair.png",])

level_1.loadStair([148*16,(19*16)-16,4,"./images/brown-stair.png",])

level_1.loadStair([149*16,(19*16)-32,3,"./images/brown-stair.png",])

level_1.loadStair([150*16,(19*16)-48,2,"./images/brown-stair.png",])

level_1.loadStair([155*16,(19*16),4,"./images/brown-stair.png",])

level_1.loadStair([155*16,(19*16)-16,3,"./images/brown-stair.png",])

level_1.loadStair([155*16,(19*16)-32,2,"./images/brown-stair.png",])

level_1.loadStair([155*16,(19*16)-48,1,"./images/brown-stair.png",])

level_1.loadStair([181*16,(19*16),9,"./images/brown-stair.png",])

level_1.loadStair([182*16,(19*16)-16,8,"./images/brown-stair.png",])

level_1.loadStair([183*16,(19*16)-32,7,"./images/brown-stair.png",])

level_1.loadStair([184*16,(19*16)-48,6,"./images/brown-stair.png",])

level_1.loadStair([185*16,(19*16)-64,5,"./images/brown-stair.png",])

level_1.loadStair([186*16,(19*16)-80,4,"./images/brown-stair.png",])

level_1.loadStair([187*16,(19*16)-96,3,"./images/brown-stair.png",])

level_1.loadStair([188*16,(19*16)-112,2,"./images/brown-stair.png",])

level_1.loadStair([198*16,(19*16),1,"./images/brown-stair.png",])

//loading cloud

level_1.loadCloud([8*16,5*16,"./images/small-cloud.png"])

level_1.loadCloud([19*16,3*16,"./images/small-cloud.png"])

level_1.loadCloud([27*16,5*16,"./images/small-cloud.png"],)

level_1.loadCloud([28*16,5*16,"./images/small-cloud.png"],)

level_1.loadCloud([29*16,5*16,"./images/small-cloud.png"],)

level_1.loadCloud([36*16,3*16,"./images/small-cloud.png"],)

level_1.loadCloud([37*16,3*16,"./images/small-cloud.png"],)

level_1.loadCloud([56*16,3*16,"./images/small-cloud.png"])

level_1.loadCloud([67*16,5*16,"./images/small-cloud.png"],)

level_1.loadCloud([75*16,5*16,"./images/small-cloud.png"],)

level_1.loadCloud([76*16,5*16,"./images/small-cloud.png"],)

level_1.loadCloud([77*16,5*16,"./images/small-cloud.png"],)

level_1.loadCloud([84*16,3*16,"./images/small-cloud.png"],)

level_1.loadCloud([85*16,3*16,"./images/small-cloud.png"],)

level_1.loadCloud([104*16,5*16,"./images/small-cloud.png"],)

level_1.loadCloud([115*16,3*16,"./images/small-cloud.png"],)

level_1.loadCloud([123*16,5*16,"./images/small-cloud.png"],)

level_1.loadCloud([124*16,5*16,"./images/small-cloud.png"],)

level_1.loadCloud([125*16,5*16,"./images/small-cloud.png"],)

level_1.loadCloud([132*16,3*16,"./images/small-cloud.png"],)

level_1.loadCloud([133*16,2*16,"./images/small-cloud.png"],)

level_1.loadCloud([152*16,2*16,"./images/small-cloud.png"],)

level_1.loadCloud([163*16,3*16,"./images/small-cloud.png"],)

level_1.loadCloud([171*16,2*16,"./images/small-cloud.png"],)

level_1.loadCloud([172*16,2*16,"./images/small-cloud.png"],)

level_1.loadCloud([201*16,2*16,"./images/small-cloud.png"],)

level_1.loadBush([12*16,19*16,"./images/bush.png"])

level_1.loadBush([13*16,19*16,"./images/bush.png"])

level_1.loadBush([14*16,19*16,"./images/bush.png"])

level_1.loadBush([0*16,15.6*16,"./images/big-bush.png"])

level_1.loadBush([16*16,15.6*16,"./images/big-bush.png"])

level_1.loadBush([24*16,19*16,"./images/bush.png"])

level_1.loadBush([42*16,19*16,"./images/bush.png"])

level_1.loadBush([43*16,19*16,"./images/bush.png"])

level_1.loadBush([48*16,15.6*16,"./images/big-bush.png"])

level_1.loadBush([60*16,19*16,"./images/bush.png"])

level_1.loadBush([61*16,19*16,"./images/bush.png"])

level_1.loadBush([62*16,19*16,"./images/bush.png"])


level_1.loadBush([72*16,19*16,"./images/bush.png"])

level_1.loadBush([90*16,19*16,"./images/bush.png"])

level_1.loadBush([91*16,19*16,"./images/bush.png"])

level_1.loadBush([96*16,15.6*16,"./images/big-bush.png"])

level_1.loadBush([108*16,19*16,"./images/bush.png"])

level_1.loadBush([109*16,19*16,"./images/bush.png"])

level_1.loadBush([110*16,19*16,"./images/bush.png"])

level_1.loadBush([112*16,15.6*16,"./images/big-bush.png"])

level_1.loadBush([120*16,19*16,"./images/bush.png"])


level_1.loadMonster([30*16,19*16,"./images/goomba.png","goomba",false,true,true])

level_1.loadMonster([42*16,19*16,"./images/koopa.png","koopa",false,true,true])

level_1.loadMonster([48*16,19*16,"./images/goomba.png","goomba",false,true,true])

level_1.loadMonster([53*16,19*16,"./images/goomba.png","goomba",false,true,true])

level_1.loadMonster([78*16,5*16,"./images/goomba.png","goomba",false,true,true])

level_1.loadMonster([77*16,5*16,"./images/goomba.png","goomba",false,true,true])

level_1.loadMonster([120*16,19*16,"./images/goomba.png","goomba",false,true,true])

level_1.loadMonster([121*16,19*16,"./images/goomba.png","goomba",false,true,true])

level_1.loadMonster([127*16,19*16,"./images/goomba.png","goomba",false,true,true])

level_1.loadMonster([129*16,19*16,"./images/goomba.png","goomba",false,true,true])

level_1.loadMonster([131*16,19*16,"./images/goomba.png","goomba",false,true,true])

level_1.loadMonster([173*16,19*16,"./images/goomba.png","goomba",false,true,true])

level_1.loadMonster([175*16,19*16,"./images/goomba.png","goomba",false,true,true])

level_1.loadHole([69*16,70*16,20*16])

level_1.loadHole([86*16,88*16,20*16])

level_1.loadHole([153*16,154*16,20*16])



/*
level_1.loadStatic_Coin([3*16,16*16,"./images/coin.png","coin","static"])

level_1.loadStatic_Coin([4*16,16*16,"./images/coin.png","coin","static"])

level_1.loadStatic_Coin([5*16,16*16,"./images/coin.png","coin","static"])

level_1.loadStatic_Coin([90*16,16*16,"./images/coin.png","coin","static"])

level_1.loadStatic_Coin([91*16,16*16,"./images/coin.png","coin","static"])

level_1.loadStatic_Coin([92*16,16*16,"./images/coin.png","coin","static"])

level_1.loadStatic_Coin([93*16,16*16,"./images/coin.png","coin","static"])

level_1.loadStatic_Coin([94*16,16*16,"./images/coin.png","coin","static"])*/
