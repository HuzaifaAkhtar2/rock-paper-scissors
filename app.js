const handOptions = {
    rock: './images/icon-rock.svg',
    paper: './images/icon-paper.svg',
    scissors: './images/icon-scissors.svg'
}

const decision = document.querySelector('#decision');
const hands = document.querySelector('.hands');
const contest = document.querySelector('.contest');

let SCORE = 0;

const pickUserHand = (hand) => {
    hands.style.display = 'none';
    contest.style.display = 'flex';

    document.getElementById('UserHandImage').src = handOptions[hand];
    document.getElementById('UserHand').className = `hand-button hand-${hand}`;

    setTimeout(() => {
        let computerHand = pickComputerHand();
        referee(hand, computerHand);
    }, 1000);
}

const pickComputerHand = () => {
    let hands = ['rock', 'paper', 'scissors'];
    let computerHand = hands[Math.floor(Math.random() * hands.length)];

    document.getElementById('ComputerHandImage').src = handOptions[computerHand];
    document.getElementById('ComputerHand').className = `hand-button hand-${computerHand}`;

    return computerHand;
}

const referee = (userHand, computerHand) => {
    if (
        userHand === 'paper' && computerHand === 'paper' ||
        userHand === 'rock' && computerHand === 'rock' ||
        userHand === 'scissors' && computerHand === 'scissors'
    ) {
        setDecision("It's a tie!");
    }

    if (
        userHand === 'paper' && computerHand === 'scissors' ||
        userHand === 'rock' && computerHand === 'paper' ||
        userHand === 'scissors' && computerHand === 'rock'
    ) {
        setDecision('You lose', 'computer-win');
    }
    
    if (
        userHand === 'paper' && computerHand === 'rock' ||
        userHand === 'rock' && computerHand === 'scissors' ||
        userHand === 'scissors' && computerHand === 'paper'
    ) {
        setDecision('You win', 'user-win');
        setScore(SCORE + 1);
    }
}

const playAgain = () => {
    hands.style.display = 'flex';
    contest.style.display = 'none';

    decision.querySelector('h2').innerText = '';
    decision.style.display = 'none';

    document.getElementById('ComputerHand').classList.add('hidden');
    document.body.className = '';
}

const setDecision = (decisionText, winner = '') => {
    decision.querySelector('h2').innerText = decisionText;
    decision.style.display = 'block';
    document.body.classList.add(winner);
}

const setScore = (score) => {
    SCORE = score;
    document.getElementById('score').innerText = score;
}

const toggleModal = () => {
    document.querySelector('#modal').classList.toggle('hidden');
}
