
const rock = {
    value: 1,
    id: document.getElementById('rock')
}

const paper = {
    value: 2,
    id: document.getElementById('paper')
}

const scissors = {
    value: 3,
    id: document.getElementById('scissors')
}

const lizard = {
    value: 4,
    id: document.getElementById('lizard')
}

const spock = {
    value: 5,
    id: document.getElementById('spock')
}

const outcomes = {
    winning: {
        // winning variable is placed first in string

        paperRock: "paperrock",
        paperSpock: "paperspock",

        scissorsPaper: "scissorspaper",
        scissorsLizard: "scissorslizard",


        rockScissors: "rockscissors",
        rockLizard: "rocklizard",


        lizardSpock: "lizardspock",
        lizardPaper: "lizardpaper",


        spockRock: "spockrock",
        spockScissors: "spockscissors",
    },
    losing: {
        // losing variable is placed first in string

        paperScissors: "paperscissors",
        paperLizard: "paperlizard",
        
        rockPaper: "rockpaper",
        rockSpock: "rockspock",

        scissorsRock: "scissorsrock",
        scissorsSpock: "scissorsspock",

        lizardRock: "lizardrock",
        lizardScissors: "lizardscissors",

        spockLizard: "spocklizard",
        spockPaper: "spockpaper",

    },
    tie: {
        paper: "paperpaper",
        scissors: "scissorsscissors",
        rock: "rockrock",
        lizard: "lizardlizard",
        spock: "spock"
    }
}



// Result container elements and container itself

let playBtn = document.getElementById('play-again')
let gameResult = document.getElementById('game-result')
let resultContainer = document.getElementById('result-container')

// Setting user/computer icons and their containers

let userIconContainer = document.getElementById('user-choice');
let computerIconContainer = document.getElementById('computer-choice')

let computerIcon = document.getElementById('computer-icon')
let userIcon = document.getElementById('user-icon')



let score = document.getElementById('score')


// Different game icons

let lizardIcon = document.getElementById('lizardIcon');
let spockIcon = document.getElementById('spockIcon')
let paperIcon = document.getElementById('paperIcon')
let rockIcon = document.getElementById('rockIcon')
let scissorsIcon = document.getElementById('scissorsIcon')


// Different game screens

let selectText = document.getElementById('select-start')
let selectScreen = document.getElementById('select-screen')
let gameScreen = document.getElementById('game-screen')


// Rules

let rulesButton = document.getElementById('rules-button')
let rules = document.getElementById('rules')

// Clear score

let clearButton = document.getElementById('clear-button')



// Initial Classes 


playBtn.classList.add("result-btn-initial");
gameResult.classList.add("result-text-inital");

let computerState = 0;
let playerState = 0;
let winState = 0;
let gameScore = 0;
score.innerText = gameScore

let gameValues = "";


let gameIsActive = false;




// Rules Classes 

rulesButton.addEventListener("click", () => {
    console.log(rules.classList)

    if(rules.classList.contains("rules-container-open")) {
        rules.classList.remove("rules-container-open")
        rules.classList.add("rules-container-close")
    } else {

        rules.classList.add('rules-container-open')
        rules.classList.remove('rules-container-close')
    }

});


// Clearing score 

clearButton.addEventListener("click", () => {
    computerState = 0;
    playerState = 0;
    winState = 0;
    gameScore = 0;
    score.innerText = gameScore
    gameValues = "";
    gameIsActive = false;

    gameEnd()
});




// Keeping track of the device's width

let windowWidth ;


window.addEventListener("load", () => {
    windowWidth = window.innerWidth
    console.log("The window width is:", windowWidth)
})



const addGameChoiceListener = (element, value) => {
    const handler = () => gameIsActive ? console.log("Already selected") : initiateGame(value);
    element.addEventListener("click", handler);
    element.addEventListener("touchstart", handler);
};


// Normal Icon Event Listeners

addGameChoiceListener(rock.id, rock.value)
addGameChoiceListener(scissors.id, scissors.value);
addGameChoiceListener(paper.id, paper.value);
addGameChoiceListener(lizard.id, lizard.value);
addGameChoiceListener(spock.id, spock.value)


// Small Icon Event Listeners

addGameChoiceListener(rockIcon, rock.value)
addGameChoiceListener(scissorsIcon, scissors.value);
addGameChoiceListener(paperIcon, paper.value);
addGameChoiceListener(lizardIcon, lizard.value);
addGameChoiceListener(spockIcon, spock.value)






// Game



function initiateGame(value) {

    selectText.classList.add('select-start-remove')
    selectText.classList.remove('select-start')

    lizardIcon.classList.add('lizardIcon-select')
    spockIcon.classList.add('spockIcon-select')
    rockIcon.classList.add('rockIcon-select')
    paperIcon.classList.add('paperIcon-select')
    scissorsIcon.classList.add('scissorsIcon-select')


    rules.classList.add('disable-rules')
    rulesButton.classList.add('disable-rules')

    clearButton.classList.add('disable-rules')


    gameIsActive = true

    // Winstate check

    if(winState !== 0) {
        winState = 0
        console.log("Starting winState is:", winState)
    }


    setTimeout(() => {



        // Setting classses for smaller screens

        if(windowWidth < 1300) {
            selectScreen.classList.add('select-screen-remove')

            computerIcon.classList.add("unselected-small-active")
            computerIconContainer.classList.add('icon-container-small')


            gameScreen.classList.remove('game')
            gameScreen.classList.add('small-screen-game-active')


        }

        
        // Default classes for larger screen sizes

        else {

            selectScreen.classList.add('select-screen-remove')
            gameScreen.classList.remove('game')
            gameScreen.classList.add('add-game-screen')
    
            computerIcon.classList.add("unselected");

        }


        playerSelect(value)
    }, 2000)
}





function playerSelect(value) {

    userIcon.classList.remove(iconClassesActive, smallIconClassesActive)
    console.log("User class contains:", userIcon.classList)

    // Assigning Small Icons

    if(windowWidth < 1300) {



        userIconContainer.classList.add('icon-container-small')

        switch(value) {

            case value = scissors.value:
                userIcon.classList.add('scissors-selected-small')
                playerState = "scissors";
                break;
            case value = paper.value:
                userIcon.classList.add('paper-selected-small')
                playerState = "paper";
                break;
            case value = rock.value:
                userIcon.classList.add('rock-selected-small')
                playerState = "rock";
                break;
            case value = lizard.value:
                userIcon.classList.add('lizard-selected-small')
                playerState = "lizard";
                break;
            case value = spock.value:
                userIcon.classList.add('spock-selected-small')
                playerState = "spock";
                break;
        }
    }

    else {

        // Default Icon Sizes

        switch(value) {

            case value = scissors.value:
                userIcon.classList.add('scissors-selected')
                playerState = "scissors";
                break;
            case value = paper.value:
                userIcon.classList.add('paper-selected')
                playerState = "paper";
                break;
            case value = rock.value:
                userIcon.classList.add('rock-selected')
                playerState = "rock";
                break;
            case value = lizard.value:
                userIcon.classList.add('lizard-selected')
                playerState = "lizard";
                break;
            case value = spock.value:
                userIcon.classList.add('spock-selected')
                playerState = "spock";
                break;
        }
    }
    
    
    console.log("The player has selected:", playerState)

    setTimeout(() => {
        computerSelect()
    }, 1500);

    return isActive = true
}



function computerSelect() {
    computerState = Math.floor(Math.random() * (5 - 1 + 1) + 1)
    console.log("Computer has selected", computerState)

    console.log("The computer class is:", computerIcon.classList)

    // Displaying chosen computer icon when screen width is under 1300

    if(windowWidth < 1300) {

        computerIconContainer.classList.remove('unselected-small-unactive')


        setTimeout(() => {
            switch(computerState) {
                case computerState = 1:
                    computerIcon.classList.add("rock-selected-small")
                    computerState = "rock"
                    break;
                case computerState = 2:
                    computerIcon.classList.add("paper-selected-small")
                    computerState = "paper"
                    break;
                case computerState = 3:
                    computerIcon.classList.add("scissors-selected-small")
                    computerState = "scissors"
                    break;
                case value = 4:
                    computerIcon.classList.add('lizard-selected-small')
                    computerState = "lizard";
                    break;
                case value = 5:
                    computerIcon.classList.add('spock-selected-small')
                    computerState = "spock";
                    break;
            }
                startGame()

        }, 1500)

    }



    else {

        // Default Icon Sizes

        switch(computerState) {
            case computerState = 1:
                computerIcon.classList.add("rock-selected")
                computerState = "rock"
                break;
            case computerState = 2:
                computerIcon.classList.add("paper-selected")
                computerState = "paper"
                break;
            case computerState = 3:
                computerIcon.classList.add("scissors-selected")
                computerState = "scissors"
                break;
            case value = 4:
                computerIcon.classList.add('lizard-selected')
                computerState = "lizard";
                break;
            case value = 5:
                computerIcon.classList.add('spock-selected')
                computerState = "spock";
                break;
        }
        
        startGame()
    }



}






function startGame() {
    console.log("Game has started")


    const gameValues = `${playerState}${computerState}`
    console.log(gameValues)
    if(gameValues.includes(outcomes.winning.paperRock) || gameValues.includes(outcomes.winning.rockScissors) || gameValues.includes(outcomes.winning.scissorsPaper) 
    || gameValues.includes(outcomes.winning.lizardSpock) || gameValues.includes(outcomes.winning.lizardPaper) || gameValues.includes(outcomes.winning.spockScissors)
    || gameValues.includes(outcomes.winning.spockRock) || gameValues.includes(outcomes.winning.scissorsLizard) || gameValues.includes(outcomes.winning.rockLizard)
    || gameValues.includes(outcomes.winning.paperSpock)){


        console.log("Winner")
        winState = 1
        gameEnd()
        return


    }
    else if (gameValues.includes(outcomes.losing.paperScissors) || gameValues.includes(outcomes.losing.paperLizard) || gameValues.includes(outcomes.losing.rockPaper)
    || gameValues.includes(outcomes.losing.rockSpock) || gameValues.includes(outcomes.losing.scissorsRock) || gameValues.includes(outcomes.losing.scissorsSpock)
    || gameValues.includes(outcomes.losing.lizardRock) || gameValues.includes(outcomes.losing.lizardScissors) || gameValues.includes(outcomes.losing.spockLizard)
    || gameValues.includes(outcomes.losing.spockPaper)) {
        console.log("Loser")
        winState = -1
        gameEnd()
        console.log(winState)
        return
    }
    else if (gameValues.includes(outcomes.tie.paper) || gameValues.includes(outcomes.tie.rock) || gameValues.includes(outcomes.tie.scissors)
    || gameValues.includes(outcomes.tie.lizard) || gameValues.includes(outcomes.tie.spock)) {
        console.log("Tie")
        winState = 2
        gameEnd()
        return
    }
    
    
    console.log("loser")
}


function gameEnd() {
    
    switch(winState) {
        case winState = 1:
            console.log("yes")


            setTimeout(() => {
                gameResult.innerText = "You Win!"
                gameResult.classList.add('active-result-text')
                playBtn.innerText = "Play Again"
                playBtn.classList.add('active-play-btn')

                if(gameResult.innerText === "You Win!") {
                    userIcon.classList.add('win-shadow-active')
                }

                gameScore = gameScore + 1;
                score.innerHTML = gameScore

            }, 1000)
            break;



        case winState = -1:
            console.log("No")



            setTimeout(() => {
                gameResult.innerText = "You Lose!"
                gameResult.classList.add('active-result-text')
                playBtn.innerText = "Play Again"
                playBtn.classList.add('active-play-btn')

                if(gameResult.innerText === "You Lose!") {
                    computerIcon.classList.add('win-shadow-active')
                }


                gameScore = gameScore - 1;
                score.innerHTML = gameScore

            }, 1000)
            break;



        case winState = 2:
            console.log("Eh")

            setTimeout(() => {
                gameResult.innerText = "Tie!"
                gameResult.classList.add('active-result-text')
                playBtn.innerText = "Play Again"
                playBtn.classList.add('active-play-btn')


                if(gameResult.innerText === "Tie!") {
                    computerIcon.classList.add('win-shadow-active')
                    userIcon.classList.add('win-shadow-active')
                }

            }, 1000)
            break;
    }

    setTimeout(() => {
        gameScreen.classList.add("space-between")

    }, 2000);

}







// For ending the game

playBtn.addEventListener("click", () => resetGame())


function resetGame() {




    gameResult.classList.remove('active-result-text');
    playBtn.classList.remove('active-play-btn');

    lizardIcon.classList.remove('lizardIcon-select');
    spockIcon.classList.remove('spockIcon-select');
    rockIcon.classList.remove('rockIcon-select');
    paperIcon.classList.remove('paperIcon-select');
    scissorsIcon.classList.remove('scissorsIcon-select');

    selectScreen.classList.remove('select-screen-remove');


    rulesButton.classList.remove('disable-rules');
    rules.classList.remove('disable-rules')

    clearButton.classList.remove('disable-rules');




    selectText.classList.add('select-start');
    selectText.classList.remove('select-start-remove');





    gameScreen.classList.remove('small-screen-game-active')




    gameScreen.classList.add("game");
    selectScreen.classList.add("select-screen");


    playBtn.classList.add("result-btn-initial");
    gameResult.classList.add("result-text-inital");

    computerState = 0;
    playerState = 0;
    isActive = false;
    winState = 0;
    gameIsActive = false;
    console.log('reset');
    console.clear()

    finalClassChecks()

}

function finalClassChecks() {


    allIconClasses.forEach((className) => {
        computerIcon.classList.remove(className, "unselected-small-active")
        userIcon.classList.remove(className, "unselected-small-active");
    })



    console.log("User class contains:", userIcon.classList)
    console.log("Computer class contains:", computerIcon.classList)


    // Brute force icon reset. Icons reset while in developement but fail to reset while in production

    userIcon.className = "";
    computerIcon.className = "";
    
}


// Arrays listing all of the classes used for various assets.


const iconClassesActive = ['rock-selected', 'paper-selected', 'scissors-selected', 'lizard-selected', 'spock-selected', 'win-shadow-active']

const smallIconClassesActive = ['rock-selected-small', 'paper-selected-small', 'scissors-selected-small', 'lizard-selected-small', 'spock-selected-small', 'win-shadow-active-small']

const allIconClasses = [...iconClassesActive, ...smallIconClassesActive]
