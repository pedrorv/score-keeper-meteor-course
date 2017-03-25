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

Meteor.startup(() => {
  Tracker.autorun(() => {
    let players = Players.find().fetch()

    let jsx = (
      <div>
        <h1>Score Keeper</h1>
        {renderPlayers(players)}
      </div>
    )

    ReactDOM.render(jsx, document.getElementById('app'))
  })
})