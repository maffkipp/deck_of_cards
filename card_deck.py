from card import Card
import random

class CardDeck():
    values = [2, 3, 4, 5, 6, 7, 8, 9, 10, 'Jack', 'Queen', 'King', 'Ace']
    suits = ['Hearts', 'Diamonds', 'Clubs', 'Spades']

    def __init__(self):
        self.set_deck()


    def get_deck(self):
        return self.cards


    def set_deck(self):
        self.cards = []
        for i in range(0, len(CardDeck.values)):
            for j in range(0, len(CardDeck.suits)):
                card = Card(CardDeck.values[i], CardDeck.suits[j])
                self.cards.append(card)


    def shuffle_deck(self):
        counter = len(self.cards)
        while counter > 0:
            index = random.randint(0, counter)
            counter -= 1
            temp = self.cards[counter]
            self.cards[counter] = self.cards[index]
            self.cards[index] = temp


