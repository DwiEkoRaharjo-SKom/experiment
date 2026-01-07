const readline = require('readline-sync');

const CARD_RANK_COUNT = 13;

let cardNum = +readline.question('Enter card number: ');    
while (cardNum < 0 || cardNum > 51) {
    console.log('Please enter card number only numbers 0 to 51!');
    cardNum = +readline.question('Enter card number: ');
}

const rank = cardRank(cardNum);
const suit = cardSuit(cardNum);
console.log(`Card number ${cardNum}: ${rank} of ${suit}`);


function cardRank(n) {
    const rankNum = n % CARD_RANK_COUNT;
    
    switch (rankNum) { 
        case 0: return 'Ace';
        case 1: return '2';
        case 2: return '3';
        case 3: return '4';
        case 4: return '5';
        case 5: return '6';
        case 6: return '7';
        case 7: return '8';
        case 8: return '9';
        case 9: return '10';
        case 10: return 'Jack';
        case 11: return 'Queen';
        case 12: return 'King';
    }
}

function cardSuit(n) {
    if (n >= 0 && n <= 12) return 'Spades';
    else if (n >= 13 && n <= 25) return 'Hearts';
    else if (n >= 26 && n <= 38) return 'Diamonds';
    else return 'Clubs';
}