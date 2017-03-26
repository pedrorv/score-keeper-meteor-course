import React from 'react'

import { Players } from './../api/players'

export default class Player extends React.Component {
  render() {
    const { name, score, _id } = this.props.player

    return (
      <p key={_id}>
        {name} has {score} {score > 1 ? 'points' : 'point'}.
        <button onClick={() => Players.update({_id: _id}, {$inc: { score: -1 }})}>
          -1
        </button>
        <button onClick={() => Players.update({_id: _id},{$inc: { score: 1 }})}>
          +1
        </button>
        <button onClick={() => Players.remove({_id: _id})}>X</button>
      </p>
    )
  }
}

Player.propTypes = {
  player: React.PropTypes.object.isRequired
}