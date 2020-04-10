import React from 'react'
import { TableProps } from '../TypeScript/interfaces'
import Hand from './Hand'
import Score from './Score'

const Table: React.FC<TableProps> = (props) => {
  const { player, enemy, deck, isRoundEnd } = props.game

  return (
    <div className="table">
      <div className="score-zone">
        <Score
          player = {player}
          enemy = {enemy}
          deckLength = {deck.length}
          roundEnd = {isRoundEnd}
        />
      </div>
      <div className="playing-zone">
        <Hand user = {enemy} roundEnd = {isRoundEnd} position = {'enemy'}/>
        <Hand user = {player} roundEnd = {isRoundEnd} position = {'player'}/>
      </div>
    </div>
  )
}

export default Table 