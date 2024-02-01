var randomNumber1 = Math.floor((Math.random() * 6) + 1);
var randomNumber2 = Math.floor((Math.random() * 6) + 1);

var randomDice1 = "images/dice" + randomNumber1 + ".png";
var randomDice2 = "images/dice" + randomNumber2 + ".png";



document.querySelector(".img1").setAttribute('src', randomDice1);
document.querySelector(".img2").setAttribute('src', randomDice2);


    if (randomDice1 > randomDice2){
        document.querySelector("h1").textContent = "PLAYER 1 WINS";
    } else if(randomDice1 < randomDice2){
        document.querySelector("h1").textContent = "PLAYER 2 WINS";
    } else{
        document.querySelector("h1").textContent = "DRAW";
    };



