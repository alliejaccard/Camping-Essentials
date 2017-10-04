//GLOBAL VARIABLES
//----------------------------------------

//Camping Variables
var camping = {
    bike: {
        name: "Bike",
        value: 0
    },
    mountain: {
        name: "Mountain",
        value: 0
    },
    backpack: {
        name: "Backpack",
        value: 0
    },
    house: {
        name: "House",
        value: 0
    }
};

//Scores (Current and Target)
var currentScore = 0;
var targetScore = 0;

//Wins and Losses
var winCount = 0;
var lossCount = 0;


//FUNCTIONS 
//----------------------------------------

//Helper functions for getting random numbers
var getRandom = function(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

//Start the Game
var startGame = function() {

    //Reset the current score
    currentScore = 0;

    //Set a new target score (between 19 and 120)
    targetScore = getRandom(19, 120);

    //Set different values for each of the camping items (between 1 and 12)
    camping.bike.value = getRandom(1, 12);
    camping.mountain.value = getRandom(1, 12);
    camping.backpack.value = getRandom(1, 12);
    camping.house.value = getRandom(1, 12);

    //Change the HTML to reflect the changes
    $("#yourScore").html(currentScore);
    $("#targetScore").html(targetScore);


    //Testing Console 
    console.log("------------------------")
    console.log("Target Score: " + targetScore);
    console.log("Bike: " + camping.bike.value + " | Mountain: " + camping.mountain.value + " | Backpack: " + camping.backpack.value + " | House: " + camping.house.value);
    console.log("------------------------")
}

//Respond to clicks on the camping items
var addValues = function(camping) {

    //Change Current Score
    currentScore = currentScore + camping.value;

    //Change HTML to reflect changes in currentScore 
    $("#yourScore").html(currentScore);

    //Call the checkWin function
    checkWin();

    //Testing console
    console.log("Your Score: " + currentScore);
}

//Check if user won or lost the game
var checkWin = function() {

//Check if currentScore is larger than targetScore
if (currentScore > targetScore) {
	alert("Sorry. You lost!");
	console.log("You lost.");

//Add to loss counter
lossCount ++;

//Change Loss Count HTML
$("#lossCount").html(lossCount);

//Restart the game
startGame();
}

else if (currentScore == targetScore) {
	alert("Hoorah! You won.");
	console.log("You won.");

//Add to win counter
winCount ++;

//Change Win Count HTML
$("#winCount").html(winCount);

//Restart the game
startGame();
}

}

//MAIN PROCESS
//----------------------------------------

//Starts the Game for the first time
startGame();

$("#bike").click(function() {
    addValues(camping.bike);
});

$("#mountain").click(function() {
    addValues(camping.mountain);
});

$("#backpack").click(function() {
    addValues(camping.backpack);
});

$("#house").click(function() {
    addValues(camping.house);
});