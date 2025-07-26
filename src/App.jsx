import { useState, useEffect } from 'react'
import { Route, Routes } from 'react-router-dom'
import './App.css'

import Homepage from './Pages/Homepage'



function App() {

  return (
    <>
      <div>
      <Routes>
        <Route path="/" element={<Homepage />} />
      </Routes>
      </div>
    </>
  )
}

export default App
