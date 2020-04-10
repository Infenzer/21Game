import React from 'react'
import { render } from 'react-dom'
import App from './components/App'
import './style/style.scss'

render(<App/>, document.getElementById('app'))



// useEffect(() => {
//   if (props.roundEnd) {
//     setTimeout(() => {
//       const rotateFront = document.querySelectorAll('.rotate-front')
//       const roateBack = document.querySelectorAll('.rotate-back')
      
//       roateBack.forEach((element) => {
//         element.classList.remove('rotate-back')
//       })

//       rotateFront.forEach((element) => {
//         element.classList.remove('rotate-front')
//       })
//     }, 500)
//   }
// })


// class CardFront extends React.Component<CardProps> {
//   refs: { canvas: HTMLCanvasElement }

//   state: { dataURL: string }

//   constructor(props) {
//     super(props)

//     this.state = {dataURL: ''}
//   }
//   componentDidMount() {
//     this.updateCanvas();
//   }
  
//   updateCanvas() {
//     const canvas = document.createElement('canvas')
//     const ctx = canvas.getContext('2d');
//     const img = new Image

//     const cardSuit = Card._suit.find((localSuit) => localSuit == this.props.suit)
//     const cardIndex = Card._par.findIndex((localPar) => localPar == this.props.par)

//     new Promise((res) => {
//       img.onload = res
//       img.src = `./img/cards_${cardSuit}.bmp`
//     }).then(() => {
//       canvas.width = img.width / 13 
//       canvas.height = img.height 

//       ctx.drawImage(img, -canvas.width * cardIndex, 0)
      
//       cutAngels(ctx, canvas.width, canvas.height)

//       this.setState({
//         dataURL: canvas.toDataURL()
//       })
//     })
//   }

//   render() {
//     let cNamesBack = ['back']
//     let cNamesFront = ['front']

//     if (this.props.rotated) {
//       cNamesFront.push('rotate-front')
//       cNamesBack.push('rotate-back')
//     }
    
//     return (
//       <React.Fragment>
//         <div className="card-wrapper">
//           <div className={cNamesFront.join(' ')}><img src = {this.state.dataURL}/></div>
//           <div className={cNamesBack.join(' ')}><CardBack/></div>
//         </div>
//       </React.Fragment>
//     )
//   }
// }
