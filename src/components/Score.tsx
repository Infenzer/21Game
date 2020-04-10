import React, { useState, useEffect } from 'react'
import CardBack from './CardBack'
import { ScoreProps } from '../TypeScript/interfaces'

let dialogActive = false

const Score: React.FC<ScoreProps> = (props) => {
  let eScore: string = ''
  const pLimit = props.player.score > 21 ? true : false
  let pScoreClass = pLimit ? 'limit' : ''
  let eScoreClass = ''

  //Присвоение класса диалогового меню
  useEffect(() => {
    const scoreLimit = props.player.score >= 21 ? true : false
    let dialogMenu = document.getElementById('dialog')

    if(scoreLimit && !dialogActive) {
      dialogMenu.classList.add('show-dialog')
      dialogActive = true
  
      setTimeout(() => {
        dialogMenu.classList.remove('show-dialog')
        dialogActive = false
      }, 4000)
    }
  
    if (!scoreLimit && dialogActive) {
      dialogMenu.classList.remove('show-dialog')
      dialogActive = false
    }
  })

  if (props.roundEnd || props.enemy.cardList.length === 0 ) {
    eScore = props.enemy.score.toString()
    if (props.enemy.score > 21) {
      eScoreClass = 'limit'
    }
  } else {
    const firstCardScore = props.enemy.cardList[0].score

    eScore = `${firstCardScore} + ?`
  }

  return (
    <div className="scoreWrapper">
      <div className="card-amount">
        <div className="score enemy">
          <p><span className = {eScoreClass}> {eScore} </span> / 21</p>
        </div>
        <p> {`Карты ${props.deckLength} / 52`} </p>
      </div>
      <div className="score-card-back">
        <CardBack/>
      </div>
      <div className="score player">
        <div id = 'dialog' className = 'dialog-menu'>
          <p>Перебор</p>
        </div>
        <p><span className = {pScoreClass}> {props.player.score} </span> / 21</p>
      </div>
    </div>
  )
}

export default Score