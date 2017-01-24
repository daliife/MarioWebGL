var counterLabel = 'TIME',
timeLeft = 1500;

hud = document.getElementById('timer');

function counterLoop(i) {
    setTimeout(function () {
        hud.innerHTML = counterLabel + '</br>' + check(i);
        if (i--) counterLoop(i);
    }, 10);
    if (i == 0) {
        var audio3 = new Audio('sounds/mario_game_over.mp3');
        audio3.play();
    }
}


function check(x) { // Prepend zero(s) to keep three-figure value
    if (x < 100 && x >= 10) {
        x = "0" + x;
    } else if (x <= 10 && x >= 0) {
        x = "00" + x;
    }
    return x;
}

counterLoop(timeLeft);


function resizeWindow(){
    canvas = document.getElementById("webgl-canvas");
    if (canvas.width  < window.innerWidth){ canvas.width  = window.innerWidth;}
    if (canvas.height < window.innerHeight){ canvas.height = window.innerHeight;}
}