var randomNumber1 = Math.floor(Math.random() * 6) + 1;
console.log(randomNumber1);

var diceImage = "images/dice" + randomNumber1 + ".png";

var leftImg = document.getElementsByClassName("img1")[0]; // Access the first element with class 'img1'
leftImg.src = diceImage;
