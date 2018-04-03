function play() {
    var startingBet = getStartingBet();
    var gameMoney = startingBet;
    var totalPlays = 0
    var rollCountAtHighestGameMoney = 0;
    var highestGameMoney = 0;
    //var highestGameMoney = Math.max(gameMoney);

    if (startingBet > 0) {
        while (gameMoney > 0) {
            if (rollDice() == 7) {
                gameMoney += 4
                totalPlays++;
            } else {
                gameMoney -= 1;
                totalPlays++;
            }
        }

        document.getElementById("totalPlays").innerText = totalPlays.toString();
        document.getElementById("highestGameMoney").innerText = highestGameMoney.toString();
        document.getElementById("rollCountAtHighestGameMoney").innerText = rollCountAtHighestGameMoney.toString();

    }
}

function getStartingBet() {
    var startingBet = parseInt(document.getElementById("startingBetInput").value);

    if (startingBet > 0) {
        document.getElementById("startingBet").innerText = startingBet.toString();
        return startingBet;
    } else {
        alert("Error, please input a bet greather than 0");
    }
}

function rollDice(totalPlays) {
    var die1 = Math.floor(Math.random() * 6) + 1;
    var die2 = Math.floor(Math.random() * 6) + 1;
    return die1 + die2;
}


// I was implementing var highestGameMoney = Math.max(gameMoney); inbetween line 12 and 13 as well as adding a Math.max(gameMoney += 4 ) in line 12 but When I'd run the test in the consel.log
