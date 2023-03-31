import React from 'react'
import { Routes, Route } from 'react-router-dom'

import Home from './Home'


function App() {
  return <Routes>
    <Route path="/" element={<Home />}>
    </Route>
    <Route path="/movies/:id" />
  </Routes>
}

export default App
