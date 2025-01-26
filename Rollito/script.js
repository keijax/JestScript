var randomNumbersArray = [];

function setRandomDiceImage(className) {
    var randomNumbers = Math.floor(Math.random() * 6) + 1;
    randomNumbersArray.push(randomNumbers);
    console.log("Random number for " + className + ": " + randomNumbers);
    var dice = document.querySelector(className);
    if (dice) {
        dice.setAttribute("src", "images/dice" + randomNumbers + ".png");
    }
}

setRandomDiceImage(".img1");
setRandomDiceImage(".img2");

if(randomNumbersArray[0] > randomNumbersArray[1])
    document.querySelector("h1").innerHTML="Player 1 won";
else if(randomNumbersArray[1] > randomNumbersArray[0])
    document.querySelector("h1").innerHTML="Player 2 won";
else
    document.querySelector("h1").innerHTML="Draaaw";
