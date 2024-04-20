var randomNumber1 = Math.floor(Math.random() * 6) + 1;
var randomNumber2 = Math.floor(Math.random() * 6) + 1;

var diceImage = "images/dice" + randomNumber1 + ".png";
var diceImage2 = "images/dice" + randomNumber2 + ".png";


var leftImg = document.getElementsByClassName("img1")[0]; // Access the first element with class 'img1'
leftImg.src = diceImage;

var rightImg = document.getElementsByClassName("img2")[0]; // Access the first element with class 'img1'
rightImg.src = diceImage2;

if (randomNumber1 > randomNumber2) {
    document.querySelector("h1").innerHTML = "Player 1 won"
} else {
    document.querySelector("h1").innerHTML = "Player 2 won"
}