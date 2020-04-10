import React from 'react'
import { mGameEndProps } from '../../TypeScript/interfaces'

const ModalGameEnd: React.FC<mGameEndProps> = (props) => {
  return (
    <div className = 'modal-game-end'>
      <div className = "modal-content">
        <span> Кол-во побед: {props.gameResult} </span>
        <button onClick = {() => props.onClose()}>Рестарт</button>
      </div>
    </div>
  )
}

export default ModalGameEnd