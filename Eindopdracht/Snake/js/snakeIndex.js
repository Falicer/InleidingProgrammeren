//Bron van sommige stukken code:
//Mijn eigen project van vorig jaar: Ticket To Paradise
//http://www.mediafire.com/file/xoen06bvx2y581f/TTP+version+0.9+64-bit.zip
//
//Youtube filmpje van Chris DeLeon of Gamkedo
//https://www.youtube.com/watch?v=xGmXxpIj6vs
//
//Youtube filmpje van Code Explained:
//https://www.youtube.com/watch?v=9TcU2C1AACw
//

/*jslint browser: true, devel: true, eqeq: true, plusplus: true, sloppy: true, vars: true, white: true*/

/*eslint-env browser*/

/*eslint 'no-console': 0*/

//Oppaken van canvas element en context defineren
var canElement = document.getElementById("snakeGame");
var can = canElement.getContext("2d");
var game;

//var gamestates
var state = 0;
var beginScherm = 0;
var singlePlayer = 1;
var dualPlayer = 2;
var firstMove;

//variables voor framerate test
var frameRate;

//Images&Sounds load
var appleImage = new Image();
appleImage.src = "./images/cartoonApple.png";
var eatSound = new Audio();
eatSound.src = "./sfx/eatEffect.mp3";
var deadSound = new Audio();
deadSound.src = "./sfx/deadSound.mp3";

//Variable definitie voor objecten
var square = 32;
var snake1 = [];
var snake1X;
var snake1Y;

var snake2 = [];
var snake2X;
var snake2Y;

var score1 = 0;
var score2 = 0;
var player1Pressed;
var player2Pressed;

var k;
var j;

//Spawn declare snake1
snake1[0] = {
    x: 9 * square,
    y: 10 * square
};
snake1[1] = {
    x: 8 * square,
    y: 10 * square
};

//Spawn declare snake2
snake2[0] = {
    x: 9 * square,
    y: 15 * square
};
snake2[1] = {
    x: 8 * square,
    y: 15 * square
};

//food spawner
var appel = {
    x: Math.floor(Math.random() * 17 + 1) * square,
    y: Math.floor(Math.random() * 15 + 3) * square
};
//Key inputs beide spelers (mits player 2 gebruikt wordt)
function player1Keys() {
    document.addEventListener("keydown", direction);

    function direction(event) {
        if (event.keyCode == 37 && player1Pressed != "RIGHT") {
            player1Pressed = "LEFT";
        } else if (event.keyCode == 38 && player1Pressed != "DOWN") {
            player1Pressed = "UP";
        } else if (event.keyCode == 39 && player1Pressed != "LEFT") {
            player1Pressed = "RIGHT";
        } else if (event.keyCode == 40 && player1Pressed != "UP") {
            player1Pressed = "DOWN";
        }
    }
}

function player2Keys() {
    document.addEventListener("keydown", direction);

    function direction(event) {
        if (event.keyCode == 65 && player2Pressed != "RIGHT") {
            player2Pressed = "LEFT";
        } else if (event.keyCode == 87 && player2Pressed != "DOWN") {
            player2Pressed = "UP";
        } else if (event.keyCode == 68 && player2Pressed != "LEFT") {
            player2Pressed = "RIGHT";
        } else if (event.keyCode == 83 && player2Pressed != "UP") {
            player2Pressed = "DOWN";
        }
    }
}
//Homescreen keys
function homescreenKeys() {
    document.addEventListener("keydown", direction);

    function direction(event) {
        if (event.keyCode == 38 && state == 0 && player1Pressed != "DOWN") {
            player1Pressed = "UP";
            state = 1;
        } else if (event.keyCode == 40 && state == 0 && player1Pressed != "UP") {
            player1Pressed = "DOWN";
            state = 2;
        }
    }
}
//First test homescreen panel
function startScherm() {
    //Tekent startscherm tekst
    can.fillStyle = "White";
    can.font = "50px Verdana";
    can.fillText("Snake game", 5 * square, canElement.height / 2);

    can.font = "35px Verdana";
    can.fillText("Press up key for single player", 1.5 * square, canElement.height / 2 + 2 * square);
    can.fillText("Press down key for dual player", 1 * square, canElement.height / 2 + 3.5 * square);

    can.font = "20px Verdana";
    can.fillText("Player 1 controls: Arrow keys", 1.5 * square, 4 * square);
    can.fillText("Player 2 controls: WASD keys", 1.5 * square, 4.8 * square);
}

//Appel eat check
function appelChecker() {
    if (snake1X == appel.x && snake1Y == appel.y) {
        score1++;
        appel = {
            x: Math.floor(Math.random() * 17 + 1) * square,
            y: Math.floor(Math.random() * 15 + 3) * square
        };
        eatSound.play();
        snake2.pop();
    } else if (snake2X == appel.x && snake2Y == appel.y) {
        score2++;
        appel = {
            x: Math.floor(Math.random() * 17 + 1) * square,
            y: Math.floor(Math.random() * 15 + 3) * square
        };
        eatSound.play();
        snake1.pop();
    } else {
        snake1.pop();
        snake2.pop();
    }
}

//Snake 1 box making
function snake1Player() {
    var i;
    for (i = 0; i < snake1.length; i++) {
        //Als index 0 = kleur = blauw anders zwart
        can.fillStyle = (i === 0) ? "blue" : "white";
        can.fillRect(snake1[i].x, snake1[i].y, square, square);
        //Kleuren randje
        can.strokeStyle = "red";
        can.strokeRect(snake1[i].x, snake1[i].y, square, square);
    }
    player1Keys();

    //verwijderd laatste block voor "movement"
    snake1X = snake1[0].x;
    snake1Y = snake1[0].y;

    if (firstMove === "") {
        snake1X += square;
        firstMove = "set";
    }

    if (player1Pressed == "LEFT") {
        snake1X -= square;
    }
    if (player1Pressed == "UP") {
        snake1Y -= square;
    }
    if (player1Pressed == "RIGHT") {
        snake1X += square;
    }
    if (player1Pressed == "DOWN") {
        snake1Y += square;
    }

    var nieuwHoofdSnake1 = {
        x: snake1X,
        y: snake1Y
    };

    //voegt nieuwe hoofd toe
    snake1.unshift(nieuwHoofdSnake1);
}

//Snake 2 box making
function snake2Player() {
    var i;
    for (i = 0; i < snake2.length; i++) {
        //Als index 0 = kleur = blauw anders zwart
        can.fillStyle = (i === 0) ? "yellow" : "white";
        can.fillRect(snake2[i].x, snake2[i].y, square, square);
        //Kleuren randje
        can.strokeStyle = "green";
        can.strokeRect(snake2[i].x, snake2[i].y, square, square);
    }
    player2Keys();

    //verwijderd laatste block voor "movement"
    snake2X = snake2[0].x;
    snake2Y = snake2[0].y;

    if (player2Pressed == "LEFT") {
        snake2X -= square;
    }
    if (player2Pressed == "UP") {
        snake2Y -= square;
    }
    if (player2Pressed == "RIGHT") {
        snake2X += square;
    }
    if (player2Pressed == "DOWN") {
        snake2Y += square;
    }

    var nieuwHoofdSnake2 = {
        x: snake2X,
        y: snake2Y
    };


    //voegt nieuwe hoofd toe
    snake2.unshift(nieuwHoofdSnake2);
}

//Spawnt randomized appel
function appleSpawner() {
    can.drawImage(appleImage, appel.x, appel.y, square, square);
}

//Collision op jezelf checker
function zelfCollision(playerActive, samePlayer) {
    //k is 2 omdat er anders op spawn collision is
    for (k = 2; k < samePlayer.length; k++) {
        if (playerActive.x == samePlayer[k].x &&
            playerActive.y == samePlayer[k].y) {
            return true;
        }
    }
    return false;
}
//Collision met enemy detector
function collisionEnemy(playerActive, otherPlayer) {
    for (j = 0; j < otherPlayer.length; j++) {
        if (playerActive.x == otherPlayer[j].x &&
            playerActive.y == otherPlayer[j].y) {
            return true;
        }
    }
    return false;
}
//Wall collision en player collision checkers
function wallCollisionSolo() {
    if (snake1X < square || snake1Y < 3 * square || snake1X > 17 * square || snake1Y > 17 * square || zelfCollision(snake1[0], snake1) || collisionEnemy(snake1[0], snake2)) {
        clearInterval(game);
        deadSound.play();
    }
}

function wallCollision1() {
    if (snake1X < square || snake1Y < 3 * square || snake1X > 17 * square || snake1Y > 17 * square || zelfCollision(snake1[0], snake1) || collisionEnemy(snake1[0], snake2)) {
        clearInterval(game);
        deadSound.play();
    }
}

function wallCollision2() {
    if (snake2X < square || snake2Y < 3 * square || snake2X > 17 * square || snake2Y > 17 * square || zelfCollision(snake2[0], snake2) || collisionEnemy(snake2[0], snake1)) {
        clearInterval(game);
        deadSound.play();
    }
}

//Function voor het tekenen en spelen van single player
function singlePlayerGame() {

    //tekent appel image
    can.drawImage(appleImage, 0.3 * square, 0.3 * square, 1.5 * square, 1.5 * square);
    //Tekent score
    can.fillStyle = "red";
    can.font = "40px Arial";
    can.fillText(score1, 1.7 * square, 1.5 * square);

    //Snake 1 box making
    snake1Player();

    //Appel checker
    appelChecker();
    //Spawnt randomized appel
    appleSpawner();

    //collision checker
    wallCollisionSolo();


}

//Dual play versie met 2 snakes
function dualPlayerGame() {

    //tekent appel image
    can.drawImage(appleImage, 0.3 * square, 0.3 * square, 1.5 * square, 1.5 * square);
    //Tekent score
    can.fillStyle = "red";
    can.font = "40px Arial";
    can.fillText(score1, 1.7 * square, 1.5 * square);

    //tekent appel2 image
    can.drawImage(appleImage, canElement.width - 3.3 * square, 0.3 * square, 1.5 * square, 1.5 * square);
    //Tekent score
    can.fillStyle = "red";
    can.font = "40px Arial";
    can.fillText(score2, canElement.width - 1.7 * square, 1.5 * square);


    //Snakes box making
    snake1Player();
    snake2Player();

    //Appel checker
    appelChecker();
    //Spawnt randomized appel
    appleSpawner();

    //collision checker
    wallCollision1();
    wallCollision2();


}

//Tekent de elementen
function draw() {
    //tekent zwarte achtergrond
    can.fillStyle = "#013220";
    can.fillRect(0, 0, canElement.width, canElement.height);
    can.fillStyle = "green";
    can.fillRect(0, 2 * square, canElement.width, canElement.height);
    can.fillStyle = "#BFFF00";
    can.fillRect(square, 3 * square, 17 * square, 15 * square);



    //Switch status dat bepaald wat voor scherm je te zien krijgt
    switch (state) {
        case beginScherm:
            //Main Menu Stuff
            startScherm();
            homescreenKeys();
            break;
        case singlePlayer:
            //Game Stuff
            singlePlayerGame();
            break;
        case dualPlayer:
            //dualplay selected
            dualPlayerGame();
            break;
        default:
            //error
            //println("Unknown State: Sluiting van game.");
            //exit();
            break;
    }

}
//Op basis van game scherm/state een ander framerate
function gameModeFramerate() {
    if (state == 1) {
        frameRate = setInterval(draw, 100);
    } else if (state == 2) {
        frameRate = setInterval(draw, 100);
    } else {
        frameRate = setInterval(draw, 100);
    }
}
gameModeFramerate();
//Framerate van het tekenen op het canvas
game = frameRate;
