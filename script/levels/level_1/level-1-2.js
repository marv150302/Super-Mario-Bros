levels[1][2] = {

    main_theme : new Audio("./sound/underground.mp3"),

    sky : "black",

    groundRange : [

      [88,0,(20*16),"./images/iceCube.png",2],

      [38, 91*16,(20*16),"./images/iceCube.png",2],

      [2, 131*16,(20*16),"./images/iceCube.png",2],

      [12, 135*16,(20*16),"./images/iceCube.png",2],

      [8,150*16,(20*16),"./images/iceCube.png",2],

      [70,164*16,(20*16),"./images/iceCube.png",2]

    ],

    static_coin : new Array(),

    holes : new Array(),

    cloudPosition : new Array(),

    bushPosition : new Array(),

    lava : new Array(),

    cubePosition : new Array(),

    tubePosition : new Array(),

    monster : new Array(),

    mario_position : {
      y : 0
    },
    winning_pole : {

      x : 195*16,

      y : 3*16,

      url : "./images/pole.png",

      name : "pole",

      nextLevelEntrance : {

        x : 207*16,

        y : 10*16,

        url : "./images/final_castle.png",

      }

    },

    tempStairPosition : new Array(),

    bullet : {},

    platform : new Array()

}
let level_2 = new Level(1,2);

level_2.loadStair([195*16,(19*16),1,"./images/blue-stair.png",])


level_2.loadCube([0*16,0*16,false,1,"./images/blue-cube.png","blue"])

level_2.loadCube([0*16,1*16,false,1,"./images/blue-cube.png","blue"])

level_2.loadCube([0*16,2*16,false,1,"./images/blue-cube.png","blue"])

level_2.loadCube([0*16,3*16,false,1,"./images/blue-cube.png","blue"])

level_2.loadCube([0*16,4*16,false,1,"./images/blue-cube.png","blue"])

level_2.loadCube([0*16,5*16,false,1,"./images/blue-cube.png","blue"])

level_2.loadCube([0*16,6*16,false,1,"./images/blue-cube.png","blue"])

level_2.loadCube([0*16,7*16,false,1,"./images/blue-cube.png","blue"])

level_2.loadCube([0*16,8*16,false,1,"./images/blue-cube.png","blue"])

level_2.loadCube([0*16,9*16,false,1,"./images/blue-cube.png","blue"])

level_2.loadCube([0*16,10*16,false,1,"./images/blue-cube.png","blue"])

level_2.loadCube([0*16,11*16,false,1,"./images/blue-cube.png","blue"])

level_2.loadCube([0*16,12*16,false,1,"./images/blue-cube.png","blue"])

level_2.loadCube([0*16,13*16,false,1,"./images/blue-cube.png","blue"])

level_2.loadCube([0*16,14*16,false,1,"./images/blue-cube.png","blue"])

level_2.loadCube([0*16,15*16,false,1,"./images/blue-cube.png","blue"])

level_2.loadCube([0*16,16*16,false,1,"./images/blue-cube.png","blue"])

level_2.loadCube([0*16,17*16,false,1,"./images/blue-cube.png","blue"])

level_2.loadCube([0*16,18*16,false,1,"./images/blue-cube.png","blue"])

level_2.loadCube([0*16,19*16,false,1,"./images/blue-cube.png","blue"])


level_2.loadCube([9*16,12*16,true,5,"./images/yellowCube.png"])


level_2.loadStair([16*16,(19*16),1,"./images/blue-stair.png",])

level_2.loadStair([19*16,(19*16)-16,1,"./images/blue-stair.png",])

level_2.loadStair([19*16,(19*16),1,"./images/blue-stair.png",])

level_2.loadStair([22*16,(19*16)-32,1,"./images/blue-stair.png",])

level_2.loadStair([22*16,(19*16)-32,1,"./images/blue-stair.png",])

level_2.loadStair([22*16,(19*16)-16,1,"./images/blue-stair.png",])

level_2.loadStair([22*16,(19*16),1,"./images/blue-stair.png",])

level_2.loadStair([25*16,(19*16)-48,1,"./images/blue-stair.png",])

level_2.loadStair([25*16,(19*16)-32,1,"./images/blue-stair.png",])

level_2.loadStair([25*16,(19*16)-16,1,"./images/blue-stair.png",])

level_2.loadStair([25*16,(19*16),1,"./images/blue-stair.png",])

level_2.loadStair([28*16,(19*16)-48,1,"./images/blue-stair.png",])

level_2.loadCube([30*16,11*16,false,1,"./images/blue-cube.png","blue"])

level_2.loadStair([28*16,(19*16)-32,1,"./images/blue-stair.png",])

level_2.loadStair([28*16,(19*16)-16,1,"./images/blue-stair.png",])

level_2.loadStair([28*16,(19*16),1,"./images/blue-stair.png",])

level_2.loadStair([32*16,(19*16)-32,1,"./images/blue-stair.png",])

level_2.loadStair([32*16,(19*16)-16,1,"./images/blue-stair.png",])

level_2.loadStair([32*16,(19*16),1,"./images/blue-stair.png",])

level_2.loadStair([35*16,(19*16)-16,1,"./images/blue-stair.png",])

level_2.loadStair([35*16,(19*16),1,"./images/blue-stair.png",])

level_2.loadCube([5*16,0*16,false,142,"./images/blue-cube.png","blue"])

level_2.loadCube([40*16,14*16,false,4,"./images/blue-cube.png","blue"])

level_2.loadCube([40*16,13*16,false,1,"./images/blue-cube.png","blue"])

level_2.loadCube([40*16,12*16,false,1,"./images/blue-cube.png","blue"])



level_2.loadCube([44*16,12*16,false,4,"./images/blue-cube.png","blue"])

level_2.loadCube([44*16,13*16,false,1,"./images/blue-cube.png","blue"])

level_2.loadCube([44*16,14*16,false,1,"./images/blue-cube.png","blue"])



level_2.loadCube([47*16,13*16,false,1,"./images/blue-cube.png","blue"])

level_2.loadCube([47*16,14*16,false,5,"./images/blue-cube.png","blue"])

level_2.loadCube([51*16,13*16,false,1,"./images/blue-cube.png","blue"])

level_2.loadCube([51*16,12*16,false,1,"./images/blue-cube.png","blue"])





level_2.loadCube([56*16,14*16,false,4,"./images/blue-cube.png","blue"])

level_2.loadCube([56*16,13*16,false,2,"./images/blue-cube.png","blue"])

level_2.loadCube([56*16,12*16,false,2,"./images/blue-cube.png","blue"])

level_2.loadCube([56*16,11*16,false,2,"./images/blue-cube.png","blue"])

level_2.loadCube([56*16,10*16,false,2,"./images/blue-cube.png","blue"])

level_2.loadCube([56*16,9*16,false,2,"./images/blue-cube.png","blue"])



level_2.loadCube([58*16,8*16,false,2,"./images/blue-cube.png","blue"])

level_2.loadCube([58*16,7*16,false,2,"./images/blue-cube.png","blue"])/////////

level_2.loadCube([60*16,15*16,false,2,"./images/blue-cube.png","blue"])

level_2.loadCube([60*16,17*16,false,2,"./images/blue-cube.png","blue"])

level_2.loadCube([60*16,16*16,false,2,"./images/blue-cube.png","blue"])

level_2.loadCube([60*16,17*16,false,2,"./images/blue-cube.png","blue"])



level_2.loadCube([64*16,14*16,false,6,"./images/blue-cube.png","blue"])

level_2.loadCube([68*16,13*16,false,2,"./images/blue-cube.png","blue"])

level_2.loadCube([68*16,12*16,false,2,"./images/blue-cube.png","blue"])

level_2.loadCube([68*16,11*16,false,2,"./images/blue-cube.png","blue"])

level_2.loadCube([68*16,10*16,false,2,"./images/blue-cube.png","blue"])

level_2.loadCube([68*16,9*16,false,2,"./images/blue-cube.png","blue"])

level_2.loadCube([64*16,8*16,false,6,"./images/blue-cube.png","blue"])

level_2.loadCube([64*16,7*16,false,6,"./images/blue-cube.png","blue"])



level_2.loadCube([73*16,7*16,false,5,"./images/blue-cube.png","blue"])

level_2.loadCube([73*16,8*16,false,5,"./images/blue-cube.png","blue"])

level_2.loadCube([74*16,9*16,false,1,"./images/blue-cube.png","blue"])

level_2.loadCube([74*16,10*16,false,1,"./images/blue-cube.png","blue"])

level_2.loadCube([74*16,11*16,false,1,"./images/blue-cube.png","blue"])

level_2.loadCube([74*16,12*16,false,1,"./images/blue-cube.png","blue"])

level_2.loadCube([74*16,13*16,false,1,"./images/blue-cube.png","blue"])

level_2.loadCube([74*16,14*16,false,4,"./images/blue-cube.png","blue"])

level_2.loadCube([77*16,13*16,false,1,"./images/blue-cube.png","blue"])



level_2.loadCube([80*16,14*16,false,2,"./images/blue-cube.png","blue"])

level_2.loadCube([80*16,13*16,false,2,"./images/blue-cube.png","blue"])



level_2.loadCube([80*16,12*16,false,2,"./images/blue-cube.png","blue"])

level_2.loadCube([80*16,11*16,false,2,"./images/blue-cube.png","blue"])

level_2.loadCube([80*16,10*16,false,2,"./images/blue-cube.png","blue"])

level_2.loadCube([80*16,9*16,false,2,"./images/blue-cube.png","blue"])



level_2.loadCube([84*16,14*16,false,4,"./images/blue-cube.png","blue"])

level_2.loadCube([84*16,4*16,false,4,"./images/blue-cube.png","blue"])

level_2.loadCube([84*16,5*16,false,4,"./images/blue-cube.png","blue"])

level_2.loadCube([92*16,13*16,false,6,"./images/blue-cube.png","blue"])

level_2.loadCube([92*16,12*16,false,6,"./images/blue-cube.png","blue"])





level_2.loadTube([112*16,18*16,"./images/tube1.png",true,32,32])

level_2.loadTube([118*16,16*16,"./images/tube1-2.gif",true,32,64])

level_2.loadTube([124*16,18*16,"./images/tube1.png",true,32,32])

level_2.loadCube([131*16,17*16,false,2,"./images/blue-cube.png","blue"])

level_2.loadCube([131*16,18*16,false,2,"./images/blue-cube.png","blue"])

level_2.loadCube([131*16,19*16,false,2,"./images/blue-cube.png","blue"])



level_2.loadStair([142*16,(19*16),5,"./images/blue-stair.png",])

level_2.loadStair([143*16,(19*16)-16,4,"./images/blue-stair.png",])

level_2.loadStair([144*16,(19*16)-32,3,"./images/blue-stair.png",])

level_2.loadStair([145*16,(19*16)-48,2,"./images/blue-stair.png",])



level_2.loadMonster([15*16,19*16,"./images/goomba.png","goomba",false,true,true],)

level_2.loadMonster([12*16,19*16,"./images/goomba.png","goomba",false,true,true],)

level_2.loadMonster([41*16,19*16,"./images/koopa.png","koopa",false,true,true],)

level_2.loadMonster([50*16,19*16,"./images/goomba.png","goomba",false,true,true],)

level_2.loadMonster([52*16,19*16,"./images/goomba.png","goomba",false,true,true],)



level_2.loadTube([36*16,18*16,"./images/tube1.png",true,32,32])





level_2.loadStatic_Coin([43*16,9.8*16,"./images/coin.png","coin","static"])

level_2.loadStatic_Coin([45*16,7.8*16,"./images/coin.png","coin","static"])

level_2.loadStatic_Coin([46*16,7.8*16,"./images/coin.png","coin","static"])

level_2.loadStatic_Coin([47*16,7.8*16,"./images/coin.png","coin","static"])

level_2.loadStatic_Coin([48*16,7.8*16,"./images/coin.png","coin","static"])

level_2.loadStatic_Coin([50*16,9.8*16,"./images/coin.png","coin","static"])

level_2.loadStatic_Coin([66*16,9.8*16,"./images/coin.png","coin","static"])

level_2.loadStatic_Coin([67*16,9.8*16,"./images/coin.png","coin","static"])

level_2.loadStatic_Coin([68*16,9.8*16,"./images/coin.png","coin","static"])

level_2.loadStatic_Coin([78*16,9.8*16,"./images/coin.png","coin","static"])

level_2.loadStatic_Coin([97*16,7.8*16,"./images/coin.png","coin","static"])

level_2.loadStatic_Coin([98*16,7.8*16,"./images/coin.png","coin","static"])

level_2.loadStatic_Coin([99*16,7.8*16,"./images/coin.png","coin","static"])



level_2.loadTube([91*16,18*16,"./images/tube1.png",true,32,32])

level_2.loadTube([100*16,18*16,"./images/tube1.png",true,32,32])



level_2.loadMonster([94*16,19*16,"./images/goomba.png","goomba",false,true,true],)

level_2.loadMonster([105*16,19*16,"./images/goomba.png","goomba",false,true,true],)

level_2.loadMonster([93*16,19*16,"./images/goomba.png","goomba",false,true,true],)

level_2.loadTube([(147+8-5)*16,18*16,"./images/tube1.png",false,32,32])

level_2.loadMonster([(153*16),19*16,"./images/koopa.png","koopa",false,true,true],)

level_2.loadTube([(147+16-2-5)*16,18*16,"./images/tube1.png",false,32,32])

level_2.loadStair([180*16,(19*16),7,"./images/blue-stair.png",])

level_2.loadStair([181*16,(19*16)-16,6,"./images/blue-stair.png",])

level_2.loadStair([182*16,(19*16)-32,5,"./images/blue-stair.png",])

level_2.loadStair([183*16,(19*16)-48,4,"./images/blue-stair.png",])

level_2.loadStair([184*16,(19*16)-64,3,"./images/blue-stair.png",])

level_2.loadStair([185*16,(19*16)-80,2,"./images/blue-stair.png",])

level_2.loadStair([186*16,(19*16)-96,1,"./images/blue-stair.png",])
