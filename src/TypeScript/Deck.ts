import {Card, Suit} from './Card'

export class Deck {

  cardList: Card[] = []

  constructor(){
    let suits: number = Card._suit.length
    
    for(let i= 0; i != suits; i++){
      // _suit: Suit[] = ["Hearts","Diamonds","Clubs","Spades"] 
      let suit: Suit = Card._suit[i]
      // _par: Par[] =  ["2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K", "A"]
      for(let par of Card._par){
        this.cardList.push(new Card(par,suit))
      }
    }

    //Перетасовка кард
    this.cardList = this.shuffle(this.cardList)
  }

  shuffle(arr:Card[]) {
    let j:number, temp:Card;
    for (let i = arr.length - 1; i > 0; i--) {
      j = Math.floor(Math.random() * (i + 1));
      temp = arr[j];
      arr[j] = arr[i];
      arr[i] = temp;
    }
    return arr;
  }
}
