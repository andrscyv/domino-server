import { Client } from 'boardgame.io/client'
import { SocketIO } from 'boardgame.io/multiplayer'
import { Dominoes } from './Dominoes'

export default class DominoesClient {
  start (playerId = '') {
    this.client = Client(
      {
        game: Dominoes,
        multiplayer: SocketIO({ server: 'localhost:8000' }),
        playerId
      }
    )
    this.client.start()
  }
}
