let cards = [];
let sum = 0;
let hasBlackJack = false;
let isAlive = false;
let message = "";

let messageEl = document.getElementById('message-el');
let sumEl = document.getElementById('sum-el');
let cardsEl = document.getElementById('cards-el');

let player ={
    name: "Meziyum",
    chips: 145,
}

let playerEl = document.getElementById('player-el');
playerEl.textContent = player.name+ ": $"+player.chips;

document.getElementById('start-game').addEventListener( 'click', startGame);
document.getElementById('new-card').addEventListener( 'click', newCard);

function startGame(){
    let firstCard = getRandomCard();
    let secondCard = getRandomCard();
    isAlive=true;
    sum=firstCard+secondCard;
    cards=[firstCard,secondCard];
    renderGame();
}

function renderGame(){
    if (sum <= 20) {
        message = "Do you want to draw a new card?"
    } else if (sum === 21) {
        message = "You've got Blackjack!"
        hasBlackJack = true
    } else {
        message = "You're out of the game!"
        isAlive = false
    }
    sumEl.textContent='Sum: '+sum;
    messageEl.textContent=message;

    cardsEl.textContent = "Cards: ";
    for( let i=0; i<cards.length; i++){
        cardsEl.textContent+=cards[i]+" ";
    }
}

function newCard(){

    if( isAlive && !hasBlackJack){
        let card = getRandomCard();
        sum+=card;
        cards.push(card);
        renderGame();
    }
}

function getRandomCard(){
    let value = Math.floor(Math.random()*13)+1;
    if( value == 1)
        return 11;
    else if( value >10)
        return 10;
    return value;
}
