class MemoryGame {
  constructor(cards) {
    this.cards = cards;
    this.pickedCards = []
    this.pairsClicked = 0
    this.pairsGuessed = 0


  }

  shuffleCards() {
    if (!this.cards) {
      return undefined

    }
    
    let len = this.cards.length;
    while (len > 0) {
      len--;
      let temp = this.cards[len];
      let rdmInd = Math.floor(Math.random() * len);
      this.cards[len] = this.cards[rdmInd];
      this.cards[rdmInd] = temp;
    }

    
  }

  checkIfPair(card1, card2) {
    this.pairsClicked++
    if (card1 === card2){
      this.pairsGuessed++
      return true
      
    } else if (card1 !== card2){
      return false
    }
  }

  checkIfFinished() {
    
    if (this.pairsGuessed === this.cards.length / 2) {
      return true
    } else {
      return false
    }
    
  }
}
