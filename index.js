var randomNumber1 = Math.floor(Math.random() * 6) + 1;
var randomNumber2 = Math.floor(Math.random() * 6) + 1;

var randomDiceImage1 = "images/dice" + randomNumber1 + ".png";
var randomDiceImage2 = "images/dice" + randomNumber2 + ".png";


// Dice 1 random throw
var image1 = document.querySelectorAll("img")[0];
image1.setAttribute("src", randomDiceImage1);

// Dice 2 random throw
var image2 = document.querySelectorAll("img")[1];
image2.setAttribute("src", randomDiceImage2);


// If play 1 wins 
if(randomNumber1 > randomNumber2) {
    document.querySelector("h1").innerHTML = "Player 1 wins !"
}

// If player 2 wins
if(randomNumber2 > randomNumber1) {
    document.querySelector("h1").innerHTML = "Player 2 wins !"
}

// If it's a draw
if(randomNumber1 === randomNumber2) {
    document.querySelector("h1").innerHTML = "Draw !"
}