# Práctica: Tres en raya.
Paso 0: Creamos el esqueleto vite con el comando `yarn create vite` para comenzar a crear nuestra app sobre este esqueleto.   

Paso 1: Definir el estado dde nuestra App. En este caso si pensamos en qué datos necesitamos guardar para pode pintar la partida en el dispositivo que corresponda y en qué queremos que se repinte al cambiar obtenemos dos estados: el primero referido al turno (Player de las O o player de las X) y el otro al tablero (saber que casillas han sido ya pulsadas y qué hay en ese casilla -, O, X). Luego en cuanto a los componentes vamos a tener 3: el primero que va a ser el Header con el turno el segundo que va a ser el tablero y el tercero que van a ser cada una de las casillas del tablero.

Paso 2: Creamos los 3 componentes que habíamos propuesto en el paso 1 y les pasamos las props necesarias para que estos puedan pintarse correctamente y cuando cambie el estado que se repinten. Más adelante habrá que pasarle también alguna función como prop para que estos componentes "tontos" puedan acceder a las funciones de los componentes "listos" en este caso la pp.   

Paso 3: Ya está hecho en el paso 2 el componente de Casilla.

Paso 4: Ahora vamos a crear la función encargada de manejar los clicks y como en JavaScript las funciones son objetos la podemos pasar como props para que así el flujo de eventos sea hacia arriba hasta App donde ya se ejecuta la lógica de la aplicación y donde se cambia el estado y por lo tanto se repinta si es necesario.
`let tableroCambiado = JSON.parse(JSON.stringify(tablero))`. Crea una copia del tablero para cambiar solo la casilla antes de actualizar el estado con setTablero().