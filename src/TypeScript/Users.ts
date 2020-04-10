import {Card} from './Card'

export class User {
  cardList: Card[] = []
  HP: number

  constructor(HP: number = 5){
    this.HP = HP
  }

  get score():number {
    let score: number = 0

    for (let card of this.cardList) {
      score += card.score
    }
    return score
  }
  
  takeCard(deck:Card){
    this.cardList.push(deck)
  }

  clearCard(){
    this.cardList = [];
  }
}

export class Enemy extends User {
  HP: number
  
  constructor(HP: number = 5){
    super(HP)
    this.HP = HP
  }

  clearCard(){
    this.cardList = [];
  }

  AI(): boolean { //Promise <boolean>{
    let choise = false

    if(this.score <= 16){
      choise = true
    }

    return choise
  }
}