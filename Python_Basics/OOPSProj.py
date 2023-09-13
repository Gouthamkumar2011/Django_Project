SUITE = 'H S D C'.split()
RANKS = '2 3 4 5 6 7 8 9 10 J Q K A'.split()

class Deck:
    def __init__(self) -> None:
        print("creating New ordered Deck!!")
        self.allcards = [(s,r) for s in SUITE for r in RANKS ]
    
    def shuffle(self):
        print("Shuffling Deck")
        shuffle(self.allcards)
    
    def splitinhalf(self):
        return(self.allcards[:26], self.allcards[26:])

class hand:
    def __init__(self,cards):
        self.cards = cards
    
    def __str__(self) -> str:
        return "Contains {} cards". format(len(self.cards))
    
    def add(self,added_cards):
        self.cards.extend(added_cards)
    
    def removecard(self):
        return self.cards.pop()

class Player:
    def __init__(self, name, hand):
        self.name = name
        self.hand = hand
    
    def play_card(self):
        drawn_card = self.hand.removecard()
        