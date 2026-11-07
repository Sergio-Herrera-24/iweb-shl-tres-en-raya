import { useState } from 'react'
import './App.css'
import Header from './Header'
import Tablero from './Tablero'

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
      <Header jugador={turno} />
      <Tablero valores={tablero} />
    </div>
  )
}

export default App
