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

  function manejarClick(fila, columna){
    console.log(`CLICK en la casilla [${fila}][${columna}]`)
    if(tablero[fila][columna] === 'X' || tablero[fila][columna] === 'O'){
      return
    }
    if(turno === "PLAYER0"){
      let tableroCambiado = JSON.parse(JSON.stringify(tablero))
      tableroCambiado[fila][columna] = 'O'
      setTablero(tableroCambiado)
      setTurno("PLAYERX")
      return
    }
    let tableroCambiado = JSON.parse(JSON.stringify(tablero))
    tableroCambiado[fila][columna] = 'X'
    setTablero(tableroCambiado)
    setTurno("PLAYER0")
    return
  }

  return (
    <div id="App">
      <h1 id="titulo">TicTacToe Interactivo de Sergio</h1>
      <Header jugador={turno} />
      <Tablero valores={tablero} casillaclick={manejarClick} />
    </div>
  )
}

export default App
