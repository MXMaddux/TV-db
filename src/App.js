import React from 'react'
import { Switch, Route } from 'react-router-dom'

import Home from './Home'


function App() {
  return <Switch>
    <Route path="/" exact>
      <Home />
    </Route>
    <Route path="/movies/:id" />
  </Switch>
}

export default App
