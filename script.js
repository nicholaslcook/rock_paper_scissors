    let compPick = 0;
    let compSelect = '';
    let playerSelection = '';
    let computerSelection = '';
    let playerScore = 0;
    let computerScore = 0;
    let gameTies = 0;
    let combatLog = '';
    
 
    function computerPlay() {
        compPick = Math.floor(Math.random()*3) + 1;
        if (compPick === 1) {
            compSelect = 'rock';
        } else if (compPick === 2) {
            compSelect = 'paper';
        } else if (compPick === 3) {
            compSelect = 'scissors';
        }
        return(compSelect);
    }

    function playRound(a, b) {
        if (a === b) {
            gameTies += 1;
            combatLog = 'You both pick the same thing! Tie!';
        } else if (a === 'rock' && b === 'paper') {
            computerScore += 1;
            combatLog = 'You pick Rock, computer picked Paper. You lose!';
        } else if (a === 'rock' && b === 'scissors') {
            playerScore += 1;
            combatLog = 'You pick Rock, computer picked Scissors. You win!';
        } else if (a === 'paper' && b === 'rock') {
            playerScore += 1;
            combatLog = 'You pick Paper, computer picked Rock. You win!';
        } else if (a === 'paper' && b === 'scissors') {
            computerScore += 1;
            combatLog = 'You pick Paper, computer picked Scissors. You lose!';
        } else if (a === 'scissors' && b === 'paper') {
            playerScore += 1;
            combatLog = 'You pick Scissors, computer picked Paper. You win!';
        } else if (a === 'scissors' && b === 'rock') {
            computerScore += 1;
            combatLog = 'You pick Scissors, computer picked Rock. You lose!';
        }
    }



    function game(sel) {    
        playerSelection = sel;
        computerSelection = computerPlay();
        playRound(playerSelection, computerSelection);
        document.getElementById("playerScore").innerHTML = playerScore;
        document.getElementById("computerScore").innerHTML = computerScore;
        document.getElementById("ties").innerHTML = gameTies;
        document.getElementById("combatLog").innerHTML = combatLog;
    }
 

   document.getElementById("playerScore").innerHTML = playerScore;
   document.getElementById("computerScore").innerHTML = computerScore;
   document.getElementById("ties").innerHTML = gameTies;