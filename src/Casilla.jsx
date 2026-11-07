export default function Casilla(props){
    return(
        <div id="casilla">
            <button id="casillapulsador" onClick={() => props.click(props.fila, props.columna)}>{props.valor}</button>
        </div>
    )
}