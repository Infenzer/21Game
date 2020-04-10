import { Deck } from "./Deck"
import { User, Enemy } from "./Users"
import { Card } from "./Card"

class Game {
  deck: Card[]
  player: User
  enemy: Enemy
  status: 'Победа' | 'Поражение' | 'Ничья'
  isRoundEnd: boolean
  playerWins: number

  constructor() {
    this.start()
  }

  start() {
    this.player = new User()
    this.enemy = new Enemy()
    this.deck = new Deck().cardList
    this.status = 'Ничья'
    this.isRoundEnd = false
    this.playerWins = 0


    // while (this.deck.length >= 6) {
    //   this.deck.pop()
    // }
    this.roundStart()
  }

  take() {
    if (this.deck.length != 0 && this.player.score < 21) {
      this.player.takeCard(this.deck.pop())
    }
  }

  pass() {
    while(this.enemy.AI() && this.deck.length != 0) {
      this.enemy.takeCard(this.deck.pop())
    }

    const pScore = Math.abs(21 - this.player.score)
    const eScore = Math.abs(21 - this.enemy.score)

    if (pScore < eScore && this.player.score != this.enemy.score) {
      this.status = 'Победа'
      this.playerWins++
    } else if (pScore > eScore){
      this.status = 'Поражение'
    } 

    if (this.player.score == this.enemy.score) {
      this.status = 'Ничья'
    }

    this.isRoundEnd = (!this.enemy.AI() && this.deck.length != 0) ? true : false 
  }

  roundEnd() {
    this.player.clearCard()
    this.enemy.clearCard()

    this.roundStart()

  }

  roundStart() {
    for(let i = 0; i < 2; i++) {
      if (this.deck.length == 0) continue
      this.player.takeCard(this.deck.pop())

      if (this.deck.length == 0) continue
      this.enemy.takeCard(this.deck.pop())
    }

    this.isRoundEnd = false
  }
}

export default Game