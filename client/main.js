import React from 'react'
import ReactDOM from 'react-dom'
import { Meteor } from 'meteor/meteor'

Meteor.startup(() => {
  let jsx = <p>Main.js</p>

  ReactDOM.render(jsx, document.getElementById('app'))
})