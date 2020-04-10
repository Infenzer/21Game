import React, { useEffect, useState } from 'react'
import {HandProps} from '../TypeScript/interfaces'
import CardFront from './CardFront'

const Hand: React.FC<HandProps> = (props) => {
  useEffect(() => {
    if (props.roundEnd) {
      setTimeout(() => {
        const rotateFront = document.querySelectorAll('.rotate-front')
        const roateBack = document.querySelectorAll('.rotate-back')
        
        roateBack.forEach((element) => {
          element.classList.remove('rotate-back')
        })
  
        rotateFront.forEach((element) => {
          element.classList.remove('rotate-front')
        })
      }, 250)
    }
  })

  return(
    <div className = 'card-container'>
      {props.user.cardList.map( (card, index) => {
        const par = card.par
        const suit = card.suit
        
        let rotated = true

        if (props.position == 'player') {
          rotated = false
        }

        if (props.position == 'enemy' && index < 1) {
          rotated = false
        } 

        return <CardFront
          key = {par + suit} 
          par = {par} 
          suit = {suit}
          rotated = {rotated}
        />
      } )}
    </div>
  )
}

export default Hand