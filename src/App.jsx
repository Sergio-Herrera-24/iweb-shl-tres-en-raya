import { useEffect, useState } from 'react'
import './App.css'
import Header from './Header'
import Tablero from './Tablero'

function App() {

  const [turno, setTurno] = useState("Player 1 - Xs")
  const [tablero, setTablero] = useState([
    ['-', '-', '-'],
    ['-', '-', '-'],
    ['-', '-', '-']
  ])
  const [contador, setContador] = useState(0)
  const [cargandojuego, setCargando] = useState(true)

  useEffect(() => {
    const cargarPartida = async () =>{
      try{
        const response = await fetch("https://api.npoint.io/c734e05e43c5b87dd971")
        const data = await response.json()
        console.log(data)
        setContador(data.moves)
        setTablero(data.values)
        setTurno(data.turn)
        setCargando(false)
      }catch(e){
        console.log("Error: ", e)
      }
    }
    cargarPartida()
  }, [])

  function manejarClick(fila, columna){
    console.log(`CLICK en la casilla [${fila}][${columna}]`)
    if(tablero[fila][columna] === 'X' || tablero[fila][columna] === 'O'){
      return
    }
    if(turno === "Player 2 - 0s"){
      let tableroCambiado = JSON.parse(JSON.stringify(tablero))
      tableroCambiado[fila][columna] = 'O'
      setTablero(tableroCambiado)
      setTurno("Player 1 - Xs")
      setContador(contador=>contador+1)
      return
    }
    let tableroCambiado = JSON.parse(JSON.stringify(tablero))
    tableroCambiado[fila][columna] = 'X'
    setTablero(tableroCambiado)
    setTurno("Player 2 - 0s")
    setContador(contador=>contador+1)
    return
  }

  function resetJuego(){
    setTablero([
      ['-', '-', '-'],
      ['-', '-', '-'],
      ['-', '-', '-']
    ])
    setContador(0)  
  }

  return (
    <div id="App">
      <h1 id="titulo">TicTacToe Interactivo de Sergio</h1>
      {cargandojuego ? <h1 id="cargando">Cargando Juego...</h1> : null}
      {!cargandojuego ?  
        <>
          <Header jugador={turno} />
          <Tablero valores={tablero} casillaclick={manejarClick} />
          <h3 id="contador">Número de movimientos: {contador}</h3>
          <button id="reset" onClick={() => resetJuego()}>Reset</button>
        </>
      : null}
    </div>  
  )
}

export default App
