import {Par, Suit, Card} from './Card'
import {User, Enemy} from './Users'

export type CardProps = {
  par: Par
  suit: Suit
  rotated: boolean
}

export type mRoundEndProps = {
  onClose: () => void
  gStatus: 'Победа' | 'Поражение' | 'Ничья'
}

export type mGameEndProps = {
  onClose: () => void
  gameResult: number
}

export type HandProps = {
  user: User
  roundEnd: boolean
  position: 'player' | 'enemy'
} 

export type TableProps = {
  game: IGameState
}

interface IGameState {
  deck: Card[]
  enemy: User | Enemy
  player: User
  status: 'Победа' | 'Поражение' | 'Ничья'
  isRoundEnd: boolean
  playerWins: number
}


export type ScoreProps = {
  player: User
  enemy: User | Enemy
  deckLength: number
  roundEnd: boolean
}