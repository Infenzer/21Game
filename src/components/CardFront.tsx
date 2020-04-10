import React from 'react'
import {Card} from '../TypeScript/Card'
import { CardProps } from '../TypeScript/interfaces';
import CardBack from './CardBack';

class CardFront extends React.Component<CardProps> {
  refs: { canvas: HTMLCanvasElement }
  style: {}

  state: { dataURL: string, isLoad: boolean}

  constructor(props) {
    super(props)
    
    this.style = {}
    this.state = {dataURL: '', isLoad: false}
  }

  componentDidMount() {
    this.updateCanvas();
    
    // let selector = `#${this.props.par + this.props.suit}`

    // const cardWrapper = document.getElementById(this.props.par + this.props.suit)
    // const scoreCardBack = document.querySelector('.score-card-back')

    // console.log(cardWrapper.scrollTop)
    
    // this.style = {
    //   transform: `translate(0px, ${back.y - me.y - 96}px)`
    // }
  }
  
  updateCanvas() {
    const canvas = document.createElement('canvas')
    const ctx = canvas.getContext('2d');
    const img = new Image

    const cardSuit = Card._suit.find((localSuit) => localSuit == this.props.suit)
    const cardIndex = Card._par.findIndex((localPar) => localPar == this.props.par)

    new Promise((res) => {
      img.onload = res
      img.src = `./img/cards_${cardSuit}.bmp`
    }).then(() => {
      canvas.width = img.width / 13 
      canvas.height = img.height 

      ctx.drawImage(img, -canvas.width * cardIndex, 0)
      
      cutAngels(ctx, canvas.width, canvas.height)

      this.setState({
        dataURL: canvas.toDataURL(),
        isLoad: true
      })
    })
  }

  render() {
    let cNamesBack = ['back']
    let cNamesFront = ['front']

    if (this.props.rotated) {
      cNamesFront.push('rotate-front')
      cNamesBack.push('rotate-back')
    }
    
    return (
      <React.Fragment>
        {this.state.isLoad && (
          <div className="card-wrapper" id = {this.props.par + this.props.suit} style = {this.style}>
            <div className={cNamesFront.join(' ')}><img className = 'card' src = {this.state.dataURL}/></div>
            <div className={cNamesBack.join(' ')}><CardBack/></div>
        </div>
        )}
      </React.Fragment>
    )
  }
}


export function cutAngels(ctx: CanvasRenderingContext2D, w, h) {
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

export default CardFront