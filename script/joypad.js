//o = x
//1 = o
//2 = square
//3 = triangle
//4 = l1
//5 = r1
//6 = l2
//7 = r2
//8 = share
//9 = options
//12 = up
//13 = down
//14 = left
//15 = right
function gameLoop() {

     gamepad = navigator.getGamepads()[0]; //input by gamepad

    if (gamepad && gamepad.connected) {

  	 buttons = gamepad.buttons;

     buttons[15].pressed ? mario.key[39]=true : mario.key[39]=false

     buttons[14].pressed ? mario.key[37]=true : mario.key[37]=false

     buttons[0].pressed ? mario.key[38]=true : mario.key[38]=false

     buttons[7].pressed ? mario.key[90]=true : mario.key[90]=false

     buttons[9].pressed ? canvas.game.play=!canvas.game.play : null

     if (!buttons[15].pressed && !buttons[14].pressed && !buttons[0].pressed) {//no buttons pressed

       mario.state="idle";

       mario.step=""
     }
    };
};
var game_loop ;

window.addEventListener("gamepadconnected", function(e) {

    game_loop = setInterval(function () {

      gameLoop()

    }, 50);  //check if a button was pressed 20 times every second.
});
window.addEventListener("gamepaddisconnected", function(e) {

    clearInterval(game_loop);  // stop checking

});
