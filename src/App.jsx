import React, { useState } from 'react';
import MoveImage from './MoveImage';
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <MoveImage />
    </>
  )
}

export default App
