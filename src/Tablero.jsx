import Casilla from "./Casilla"

export default function Tablero(props) {
  return (
    <div id="tablero">
      {props.valores.map((fila, indexFila) => {
        return( 
            fila.map((casilla, indexCasilla) => {
                return (
                    <Casilla key={`${indexFila}-${indexCasilla}`} valor={casilla} />
                )
            })
      )})}
    </div>
  )
}

