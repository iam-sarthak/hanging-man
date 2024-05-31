import { useState } from 'react'
import './App.css'
import Game from './pages/Game/Game'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <div className="app">
      <div className="game-border">
        
    <Game/>
    </div>
    </div>
    </>
  )
}

export default App
