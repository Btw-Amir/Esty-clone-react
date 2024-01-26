import React from 'react'
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom'
import Dasboard from '../views/Dashboard/Dashboard'
import Details from '../views/Detail/Detail'
function Routers() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Dasboard />} />
        <Route path='/details/:id' element={<Details />} />

      </Routes>
    </Router>
  )
}

export default Routers

 