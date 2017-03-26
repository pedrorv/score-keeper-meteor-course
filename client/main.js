import React from 'react'
import ReactDOM from 'react-dom'
import { Meteor } from 'meteor/meteor'
import { Tracker } from 'meteor/tracker'

import { Players } from './../imports/api/players'

const renderPlayers = function (playersList) {
  return playersList.map((player) => {
    return (
      <p key={player._id}>
        {player.name} has {player.score} {player.score > 1 ? 'points' : 'point'}.
      </p>
    )
  })
}

const handleSubmit = function (e) {
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

Meteor.startup(() => {
  Tracker.autorun(() => {
    let players = Players.find().fetch()

    let jsx = (
      <div>
        <h1>Score Keeper</h1>
        {renderPlayers(players)}
        <form onSubmit={handleSubmit}>
          <input type="text" name="playerName" placeholder="Enter a player name" />
          <button>Add Player</button>
        </form>
      </div>
    )

    ReactDOM.render(jsx, document.getElementById('app'))
  })
})