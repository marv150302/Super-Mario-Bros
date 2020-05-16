levels[1][3] = {

  main_theme : new Audio("./sound/level-1-1.mp3"),

  sky : "#0089b3",

  static_coin : new Array(),

  groundRange : new Array(),

  //formula = 1 : range 2 : hole size

  holes : [

    //min = gorundrange[_index][0]

    //max = groundRange[_index+1][1]-1

    //[16*16,(50*16),(20*16)],

  ],

  cloudPosition : [

    [8*16,2*16,"./images/small-cloud.png"],

    [19*16,1*16,"./images/small-cloud.png"],

    [27*16,2*16,"./images/small-cloud.png"],

    [28*16,2*16,"./images/small-cloud.png"],

    [29*16,2*16,"./images/small-cloud.png"],

    [36*16,1*16,"./images/small-cloud.png"],

    [37*16,1*16,"./images/small-cloud.png"],

    [56*16,3*16,"./images/small-cloud.png"],

    [67*16,2*16,"./images/small-cloud.png"],

    [75*16,2*16,"./images/small-cloud.png"],

    [76*16,2*16,"./images/small-cloud.png"],

    [77*16,2*16,"./images/small-cloud.png"],

    [84*16,1*16,"./images/small-cloud.png"],

    [85*16,1*16,"./images/small-cloud.png"],

    [104*16,2*16,"./images/small-cloud.png"],

    [115*16,1*16,"./images/small-cloud.png"],

    [123*16,2*16,"./images/small-cloud.png"],

    [124*16,2*16,"./images/small-cloud.png"],

    [125*16,2*16,"./images/small-cloud.png"],

    [132*16,1*16,"./images/small-cloud.png"],

    [133*16,2*16,"./images/small-cloud.png"],

    [152*16,2*16,"./images/small-cloud.png"],

    [163*16,1*16,"./images/small-cloud.png"],

    [171*16,2*16,"./images/small-cloud.png"],

    [172*16,2*16,"./images/small-cloud.png"],

    [173*16,2*16,"./images/small-cloud.png"],

    [180*16,1*16,"./images/small-cloud.png"],

    [181*16,4*16,"./images/small-cloud.png"],

    [184*16,4*16,"./images/small-cloud.png"],

    [185*16,4*16,"./images/small-cloud.png"],

    [186*16,4*16,"./images/small-cloud.png"],

    [193*16,2*16,"./images/small-cloud.png"],

    [194*16,8*16,"./images/small-cloud.png"],

    [196*16,8*16,"./images/small-cloud.png"],

    [197*16,8*16,"./images/small-cloud.png"],

    [199*16,2*16,"./images/small-cloud.png"],

    [200*16,4*16,"./images/small-cloud.png"],

    [205*16,2*16,"./images/small-cloud.png"],

    [207*16,8*16,"./images/small-cloud.png"],

    [210*16,4*16,"./images/small-cloud.png"],

    [212*16,4*16,"./images/small-cloud.png"],

    [216*16,2*16,"./images/small-cloud.png"],

    [220*16,4*16,"./images/small-cloud.png"],

    [222*16,2*16,"./images/small-cloud.png"],

    [224*16,4*16,"./images/small-cloud.png"],

    [226*16,8*16,"./images/small-cloud.png"],

    [228*16,8*16,"./images/small-cloud.png"],

    [230*16,8*16,"./images/small-cloud.png"],

    [231*16,8*16,"./images/small-cloud.png"],

    [233*16,2*16,"./images/small-cloud.png"],

    [237*16,12*16,"./images/small-cloud.png"],

    [238*16,8*16,"./images/small-cloud.png"],

    [239*16,8*16,"./images/small-cloud.png"],

    [245*16,12*16,"./images/small-cloud.png"],

    [247*16,12*16,"./images/small-cloud.png"],

    [250*16,12*16,"./images/small-cloud.png"],

    [254*16,8*16,"./images/small-cloud.png"],

    [257*16,8*16,"./images/small-cloud.png"],

    [260*16,2*16,"./images/small-cloud.png"],

    [266*16,2*16,"./images/small-cloud.png"],

  ],

  bushPosition : [



  ],

  cubePosition : new Array(),

  tubePosition : new Array(),

  monster : [

    [12*16,16.37*16,"./images/goomba.png","goomba",false,true,true],

    [11*16,16.37*16,"./images/goomba.png","goomba",false,true,true],

    [29*16,5.9*16,"./images/koopa2.png","koopa",false,true,true],

    [68*16,16*16,"./images/koopa.png","koopa",false,true,true],

    [82*16,16.37*16,"./images/goomba.png","goomba",false,true,true],

    [70*16,16.37*16,"./images/goomba.png","goomba",false,true,true],

    [71*16,16.37*16,"./images/goomba.png","goomba",false,true,true],

  ],

  winning_pole : {

    x : 160*16,

    y : 3*16,

    url : "./images/pole.png",

    name : "pole",

    nextLevelEntrance : {

      x : 173*16,

      y : 10*16,

      url : "./images/final_castle.png",

    }

  },

  tempStairPosition : [



  ],

  lava : new Array(),

  bullet : {},

  mario_position : {

    y : 0

  },

  platform : new Array()

}
let level_3 = new Level(1,3);

level_3.loadGround([16,0,(20*16),"./images/ground.png",2])

level_3.loadGround([2,20*16,(20*16),"./images/grassGround.png",2])

level_3.loadGround([1,19*16,(19*16),"./images/grass1.png",1])

level_3.loadGround([2,20*16,(19*16),"./images/grass2.png",1])

level_3.loadGround([1,22*16,(19*16),"./images/grass3.png",1])

level_3.loadGround([6,26*16,(15*16),"./images/grassGround.png",9])

level_3.loadGround([1,25*16,(14*16),"./images/grass1.png",1])

level_3.loadGround([6,26*16,(14*16),"./images/grass2.png",1])

level_3.loadGround([1,32*16,(14*16),"./images/grass3.png",1])

level_3.loadGround([1,28*16,(9*16),"./images/grass1.png",1])

level_3.loadGround([3,29*16,(10*16),"./images/grassGround.png",4])

level_3.loadGround([3,29*16,(9*16),"./images/grass2.png",1])

level_3.loadGround([1,32*16,(9*16),"./images/grass3.png",1])

level_3.loadGround([1,33*16,(19*16),"./images/grass1.png",1])

level_3.loadGround([1,34*16,(20*16),"./images/grassGround.png",2])

level_3.loadGround([1,34*16,(19*16),"./images/grass2.png",1])

level_3.loadGround([1,35*16,(19*16),"./images/grass3.png",1])

level_3.loadGround([1,36*16,(13*16),"./images/grass1.png",1])

level_3.loadGround([3,37*16,(14*16),"./images/grassGround.png",8])

level_3.loadGround([3,37*16,(13*16),"./images/grass2.png",1])

level_3.loadGround([1,40*16,(13*16),"./images/grass3.png",1])

level_3.loadGround([1,41*16,(9*16),"./images/grass1.png",1])

level_3.loadGround([5,42*16,(10*16),"./images/grassGround.png",12])

level_3.loadGround([5,42*16,(9*16),"./images/grass2.png",1])

level_3.loadGround([1,47*16,(9*16),"./images/grass3.png",1])

level_3.loadGround([1,53*16,(19*16),"./images/grass1.png",1])

level_3.loadGround([2,54*16,(20*16),"./images/grassGround.png",2])

level_3.loadGround([2,54*16,(19*16),"./images/grass2.png",1])

level_3.loadGround([1,56*16,(19*16),"./images/grass3.png",1])

level_3.loadGround([1,65*16,(19*16),"./images/grass1.png",1])

level_3.loadGround([3,66*16,(20*16),"./images/grassGround.png",2])

level_3.loadGround([3,66*16,(19*16),"./images/grass2.png",1])

level_3.loadGround([1,69*16,(19*16),"./images/grass3.png",1])

level_3.loadGround([1,71*16,(19*16),"./images/grass1.png",1])

level_3.loadGround([3,72*16,(20*16),"./images/grassGround.png",2])

level_3.loadGround([3,72*16,(19*16),"./images/grass2.png",1])

level_3.loadGround([1,75*16,(19*16),"./images/grass3.png",1])

level_3.loadGround([1,76*16,(14*16),"./images/grass1.png",1])

level_3.loadGround([1,77*16,(15*16),"./images/grassGround.png",7])

level_3.loadGround([1,77*16,(14*16),"./images/grass2.png",1])

level_3.loadGround([1,78*16,(14*16),"./images/grass3.png",1])

level_3.loadGround([1,82*16,(11*16),"./images/grass1.png",1])

level_3.loadGround([4,83*16,(12*16),"./images/grassGround.png",10])

level_3.loadGround([4,83*16,(11*16),"./images/grass2.png",1])

level_3.loadGround([1,87*16,(11*16),"./images/grass3.png",1])

level_3.loadGround([1,106*16,(16*16),"./images/grass1.png",1])

level_3.loadGround([2,107*16,(17*16),"./images/grassGround.png",5])

level_3.loadGround([2,107*16,(16*16),"./images/grass2.png",1])

level_3.loadGround([1,109*16,(16*16),"./images/grass3.png",1])

level_3.loadGround([1,113*16,(12*16),"./images/grass1.png",1])

level_3.loadGround([6,114*16,(13*16),"./images/grassGround.png",9])

level_3.loadGround([6,114*16,(12*16),"./images/grass2.png",1])

level_3.loadGround([1,120*16,(12*16),"./images/grass3.png",1])

level_3.loadGround([1,123*16,(18*16),"./images/grass1.png",1])

level_3.loadGround([1,124*16,(19*16),"./images/grassGround.png",3])

level_3.loadGround([1,124*16,(18*16),"./images/grass2.png",1])

level_3.loadGround([1,125*16,(18*16),"./images/grass3.png",1])

level_3.loadGround([1,127*16,(14*16),"./images/grass1.png",1])

level_3.loadGround([2,128*16,(15*16),"./images/grassGround.png",7])

level_3.loadGround([2,128*16,(14*16),"./images/grass2.png",1])

level_3.loadGround([1,130*16,(14*16),"./images/grass3.png",1])

level_3.loadGround([1,133*16,(14*16),"./images/grass1.png",1])

level_3.loadGround([2,134*16,(15*16),"./images/grassGround.png",7])

level_3.loadGround([2,134*16,(14*16),"./images/grass2.png",1])

level_3.loadGround([1,136*16,(14*16),"./images/grass3.png",1])

level_3.loadGround([50,141*16,(20*16),"./images/ground.png",2])

level_3.loadStatic_Coin([30*16,8*16,"./images/coin.png","coin","static"])

level_3.loadStatic_Coin([28*16,8*16,"./images/coin.png","coin","static"])

level_3.loadStatic_Coin([32*16,8*16,"./images/coin.png","coin","static"])

level_3.loadStatic_Coin([34*16,18*16,"./images/coin.png","coin","static"])

level_3.loadStatic_Coin([34*16,18*16,"./images/coin.png","coin","static"])

level_3.loadStatic_Coin([36*16,6*16,"./images/coin.png","coin","static"])

level_3.loadStatic_Coin([38*16,6*16,"./images/coin.png","coin","static"])

level_3.loadStatic_Coin([54*16,12*16,"./images/coin.png","coin","static"])

level_3.loadStatic_Coin([56*16,12*16,"./images/coin.png","coin","static"])

level_3.loadStatic_Coin([62*16,8*16,"./images/coin.png","coin","static"])

level_3.loadStatic_Coin([63*16,8*16,"./images/coin.png","coin","static"])

level_3.loadStatic_Coin([64*16,8*16,"./images/coin.png","coin","static"])

level_3.loadStatic_Coin([65*16,8*16,"./images/coin.png","coin","static"])

level_3.loadStatic_Coin([74*16,8*16,"./images/coin.png","coin","static"])

level_3.loadMonster([40*16,0*16,"./images/koopa.png","koopa",false,true,true])

level_3.loadMonster([50*16,10*16,"./images/flyingRedKoopa.png","flyingRedKoopa",false,true,true])

level_3.loadMonster([60*16,7*16,"./images/flyingRedKoopa.png","flyingRedKoopa",false,true,true])

level_3.loadMonster([70*16,6*16,"./images/flyingRedKoopa.png","flyingRedKoopa",false,true,true])

level_3.loadMonster([90*16,5*16,"./images/flyingRedKoopa.png","flyingRedKoopa",false,true,true])

level_3.loadMonster([100*16,5*16,"./images/flyingRedKoopa.png","flyingRedKoopa",false,true,true])

level_3.loadHole([16*16,140*16,20*16])

level_3.loadPlatform([90*16,14*16])

level_3.loadPlatform([98*16,16*16])

level_3.loadStair([150*16,(19*16),6,"./images/brown-stair.png",])

level_3.loadStair([150*16,(18*16),6,"./images/brown-stair.png",])

level_3.loadStair([150*16,(17*16),6,"./images/brown-stair.png",])

level_3.loadStair([150*16,(16*16),6,"./images/brown-stair.png",])

level_3.loadStair([152*16,(15*16),4,"./images/brown-stair.png",])

level_3.loadStair([152*16,(14*16),4,"./images/brown-stair.png",])

level_3.loadStair([154*16,(13*16),2,"./images/brown-stair.png",])

level_3.loadStair([154*16,(12*16),2,"./images/brown-stair.png",])

level_3.loadStair([160*16,(19*16),1,"./images/brown-stair.png",])


/*level_3.loadMonster([44*16,9*16,"./images/goomba.png","goomba",false,true,true])

level_3.loadMonster([43*16,9*16,"./images/goomba.png","goomba",false,true,true])*/
