import React from 'react'
import { mRoundEndProps } from '../../TypeScript/interfaces'

const ModalRoundEnd: React.FC<mRoundEndProps> = (props) => {
  let colorStyle = ''

  switch (props.gStatus) {
    case 'Поражение': 
      colorStyle = 'lose'
      break
    case 'Победа': 
      colorStyle = 'win'
      break
  }
  return (
    <div className = 'modal-round-end'>
      <div className = "modal-content">
        <span className = {colorStyle}> {props.gStatus} </span>
        <button onClick = {() => props.onClose()}>ОК</button>
      </div>
    </div>
  )
}

export default ModalRoundEnd