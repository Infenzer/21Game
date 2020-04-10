import React, { useState, ChangeEvent, useEffect } from 'react'
import Table from './Table'
import Game from '../TypeScript/Game'
import Interface from './Interface'
import ModalRoundEnd from './modal/ModalRoundEnd'
import ModalGameEnd from './modal/ModalGameEnd'

const App: React.FC = () => {
  const [gameState, setGameState] = useState({...game})
  const [isModalRE, setModalRE] = useState(false)
  const [isModalGE, setModalGE] = useState(false)

  const takeBtnActive = (game.player.score >= 21 || game.deck.length == 0) ? true : false

  function handleTakeClick() {
    game.take()

    setGameState({...game})
  }

  function handlePassClick() {
    game.pass()

    setGameState({...game})
    setModalRE(true)
  }

  function handleModalRE() {
    if (game.deck.length == 0) {
      setModalGE(true)
    } else {
      game.roundEnd()
      setGameState({...game})
    }
    setModalRE(false)
  }

  function handleModalGE() {
    game.start()

    setGameState({...game})
    setModalGE(false)
  }

  return(
    <div>
      <Table game = {gameState}/>
      <Interface>
        <button disabled = {takeBtnActive} onClick = {() => handleTakeClick()}>Take</button>
        <button onClick = {() => handlePassClick()}>Pass</button>
      </Interface>
      {isModalRE && (
        <ModalRoundEnd onClose = {handleModalRE} gStatus = {gameState.status}/>
      )}
      {isModalGE && (
        <ModalGameEnd onClose = {handleModalGE} gameResult = {gameState.playerWins} />
      )}
    </div>
  )
}

export default App

const game = new Game
