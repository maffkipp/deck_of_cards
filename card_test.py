from card import Card
from card_deck import CardDeck

my_deck = CardDeck()

my_deck.shuffle_deck()

cards = my_deck.get_deck()

print('The deck has {} cards'.format(len(cards)))
print('The top card is the {} of {}'.format(cards[0].value, cards[0].suit))



