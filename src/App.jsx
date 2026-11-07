import { useState } from 'react'
import './App.css'

function App() {
  const [turno, setTurno] = useState("PLAYER0")
  const [tablero, setTablero] = useState([
    ['-', '-', '-'],
    ['-', '-', '-'],
    ['-', '-', '-']
  ])

  return (
    <div id="App">
      <h1 id="titulo">TicTacToe Interactivo de Sergio</h1>
    </div>
  )
}

export default App
