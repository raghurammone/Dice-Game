var randomNumber1 = Math.random();
randomNumber1 = randomNumber1*5;
randomNumber1 = Math.round(randomNumber1) + 1;

var randomNumber2 = Math.random();
randomNumber2 = randomNumber2*5;
randomNumber2 = Math.round(randomNumber2) + 1;

var randomImage1 = "images/dice" + randomNumber1 + ".png";
var randomImage2 = "images/dice" + randomNumber2 + ".png";


var image1 = document.querySelector(".img1");
var image2 = document.querySelector(".img2");

image1.setAttribute("src",randomImage1);
image2.setAttribute("src",randomImage2);


//Player 1 Wins
if(randomNumber1>randomNumber2)
{
    document.querySelector("h1").innerHTML="Player 1 Wins 🏆";
}
else if(randomNumber1<randomNumber2)
{
    document.querySelector("h1").innerHTML="Player 2 Wins 🏆";
}
else{
    document.querySelector("h1").innerHTML="Draw 🏅🏅🏅";
}