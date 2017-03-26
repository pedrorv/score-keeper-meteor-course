import React from 'react'

import { Players } from './../api/players'

const handleSubmit = function (e) {
  
}

export default class AddPlayer extends React.Component {
  handleSubmit(e) {
    let playerName = e.target.playerName.value
    e.preventDefault()

    if (playerName) {
      e.target.playerName.value = ''
      Players.insert({
        name: playerName,
        score: 0
      })
    }
  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit.bind(this)}>
          <input type="text" name="playerName" placeholder="Enter a player name" autoComplete="off" />
          <button>Add Player</button>
        </form>
      </div>
    )
  }
}