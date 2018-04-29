// When clicking the play button on luckySevens.html the play() function will run
function play() {
    var startingBet = getStartingBet();
    var gameMoney = startingBet;
    var totalPlays = 0
    var rollCountAtHighestGameMoney = 0;
    var highestGameMoney = 0;

    if (startingBet > 0) {
        // The while function is used to keep the game running as long as there is game money to be played
        while (gameMoney > 0) {
            // The below if/ else statement is used to either add money if the RNG dice lands on 7 or subtract money based on if the RNG dice != 7
            if (rollDice() == 7) {
                gameMoney += 4;
                totalPlays++;
                //The if function bellow is used to calculate the highest game money earned and when that game money was earned on. 
                if (gameMoney > highestGameMoney) {
                    highestGameMoney = gameMoney;
                    rollCountAtHighestGameMoney = totalPlays;
                }
            } else {
                gameMoney -= 1;
                totalPlays++;
            }
        }
        // The below function is used to display the results once the play button is pressed. luckySevens.html is set for on load to trigger the hideResults() function below
        function showResults() {
            document.getElementById("results").style.display = "inline";
            document.getElementById("totalPlays").innerText = totalPlays.toString();
            document.getElementById("highestGameMoney").innerText = "$" + highestGameMoney.toString();
            document.getElementById("rollCountAtHighestGameMoney").innerText = rollCountAtHighestGameMoney.toString();
            document.getElementById("playButton").innerHTML = "Play Again?";
        };
    }
    showResults();
}
//This is the onload function stated above
function hideResults() {
    document.getElementById("results").style.display = "none";
}
//This function takes the user input to determine if it is a valid starting bet to play with. aka do you have money, if not input error message here
function getStartingBet() {
    var startingBet = parseInt(document.getElementById("startingBetInput").value);

    if (startingBet > 0) {
        document.getElementById("startingBet").innerText = "$" + startingBet.toString();
        return startingBet;
    } else {
        alert("Error, please input a bet greather than 0");
    }
}
// function to roll two 6 sided die
function rollDice(totalPlays) {
    var die1 = Math.floor(Math.random() * 6) + 1;
    var die2 = Math.floor(Math.random() * 6) + 1;
    return die1 + die2;
}