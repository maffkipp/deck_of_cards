// 1. Make the function deck_o_cards assemble an array of cards using the provided suits and values arrays.
// Each card in the deck should be an object formatted as: {suit: 'hearts', value: 'A'}
function deck_o_cards() {
  var values = [2, 3, 4, 5, 6, 7, 8, 9, 10, 'Jack', 'Queen', 'King', 'Ace'];
  var suits = ['hearts', 'diamonds', 'clubs', 'spades'];

  var cards = []; // deck
  var shuffledCards = []; // deck shuffled

  for (i=0; i<values.length; i++) {
    for (j=0; j<suits.length; j++) {
      var card = {
        suit: suits[j],
        value: values[i]
      }
      cards.push(card); // adds card objects to the deck
    }
  }

  shuffledCards = shuffle(cards); // shuffles the deck
  return shuffledCards;
}

function topCard(cards) {

  var topCard = cards[0]; // pulls the top card from the deck

  console.log(`The deck has ${cards.length} cards`); // logs the size of the deck
  console.log(`The top card is the ${topCard.value} of ${topCard.suit}`);
    // logs the value and suit of the top card
}

function pokerHand(cards) {

  var hand = []; // hand


  console.log('Your poker hand is:')

  for (var i=0; i<5; i++) { // deals a hand of 5 cards
    hand[i] = cards[i];
    console.log(`The ${cards[i].value} of ${cards[i].suit}`) // logs the hand dealt
  }
}

// Fisher-Yates Shuffle
// http://stackoverflow.com/a/6274398
function shuffle(array) {
    var counter = array.length, temp, index;

    // While there are elements in the array
    while (counter > 0) {
        // Pick a random index
        index = Math.floor(Math.random() * counter);

        // Decrease counter by 1
        counter--;

        // And swap the last element with it
        temp = array[counter];
        array[counter] = array[index];
        array[index] = temp;
    }

    return array;
}

topCard(deck_o_cards());

pokerHand(deck_o_cards());


