export type Suit = "Hearts" | "Diamonds" | "Clubs" | "Spades" 
export type Par =  "2" | "3" | "4" | "5" | "6" | "7" | "8" | "9" | "10" | "J" | "Q" | "K" | "A"

export class Card {
  par: Par
  suit: Suit

  static _par: Par[] =      ["A", "2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K"]
  static _score: number[] = [ 11,  2,   3,   4,   5,   6,   7,   8,   9,   10,   2,   3,   4,]
  static _suit: Suit[] = ["Hearts","Diamonds","Clubs","Spades"] 

  constructor(par:Par,suit:Suit){
    this.par = par
    this.suit = suit
  }

  get score():number{
    let parIndex = Card._par.indexOf(this.par)
    return Card._score[parIndex];
  }
}

export function getCardURL(state: 'front' | 'back' , suit: Suit, par: Par): HTMLCanvasElement {
  if (state === 'front') {
    return getFront(suit, par)
  } else {
    return getBack()
  }
  //return getBack() ? state == 'back' : getFront()
}

function getFront(suit: Suit, par: Par) {
  const canvas = document.createElement('canvas')
  const ctx = canvas.getContext('2d');
  const img = new Image

  const cardSuit = Card._suit.find((localSuit) => localSuit == suit)
  const cardIndex = Card._par.findIndex((localPar) => localPar == par)

  new Promise((res) => {
    img.onload = res
    img.src = `./img/cards_${cardSuit}.bmp`
  }).then(() => {
    canvas.width = img.width / 13 
    canvas.height = img.height 

    ctx.drawImage(img, -canvas.width * cardIndex, 0)
    
    cutAngels(ctx, canvas.width, canvas.height)
  })

  return canvas
}

function getBack() {
  const canvas = document.createElement('canvas')
  const ctx = canvas.getContext('2d');
  const img = new Image

  new Promise((res) => {
    img.onload = res
    img.src = `./img/cards_Hearts.bmp`
  }).then (() => {
    canvas.width = img.width / 13 
    canvas.height = img.height 

    //Заливка серым
    ctx.fillStyle = '#777'
    ctx.fillRect(0, 0, canvas.width, canvas.height)

    //Отрисовка чёрных контуров
    ctx.beginPath()
    ctx.lineWidth = 2
    ctx.strokeStyle = 'black'
    ctx.rect(0, 0, canvas.width, canvas.height)
    ctx.stroke()
    
    //Заполнение пропусков между контурами
    ctx.fillStyle = 'black'
    ctx.fillRect(1,1,1,1)
    ctx.fillRect(canvas.width - 2, 1, 1, 1)
    ctx.fillRect(1, canvas.height - 2, 1, 1)
    ctx.fillRect(canvas.width - 2, canvas.height - 2, 1, 1)

    //Отрисовка красного перекрестия
    ctx.beginPath()
    ctx.strokeStyle = "#CA3D29"
    ctx.lineWidth = 3
    ctx.moveTo(5,5)
    ctx.lineTo(canvas.width - 5, canvas.height - 5)
    ctx.stroke()

    ctx.beginPath()
    ctx.moveTo(canvas.width - 5 , 5)
    ctx.lineTo(5, canvas.height - 5)
    ctx.stroke()
    
    cutAngels(ctx, canvas.width, canvas.height) 
  })
  return canvas
}

function cutAngels(ctx: CanvasRenderingContext2D, w: number, h: number) {
  const angles = [[0, 0], [0, 1], [1, 0], [1, 1]]
  const direction = [[1,0],[0,1],[-1,0],[0,-1]]
   for (let [x, y] of angles) {
    x *= w - 1  
    y *= h - 1

    ctx.clearRect(x, y, 1, 1)

    for(let [X,Y] of direction){
      X += x
      Y += y 

      ctx.clearRect(X,Y,1,1)
    }
  }
}
