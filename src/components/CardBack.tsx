import React from 'react'
import { cutAngels } from './CardFront';

class CardBack extends React.Component {
  state: {
    dataURL: string
  }

  constructor(props) {
    super(props)

    this.state = {dataURL: ''}
  }

  refs: { canvas: HTMLCanvasElement }

  componentDidMount() {
    this.updateCanvas();
  }

  updateCanvas() {
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

      this.setState({
        dataURL: canvas.toDataURL()
      })
    })
  }

  render() {
    return (
      <React.Fragment>
        {/* <canvas ref="canvas" width={71} height={96}/> */}
        <img className = 'card' src = {this.state.dataURL}/>
      </React.Fragment>
    )
  }
}

export default CardBack