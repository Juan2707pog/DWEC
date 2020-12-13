  
const tabla = document.getElementById("board");
// Crear arreglo de letras (columnas), el primero debe ir vacío.
const letras = ['', 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H'];

// Crear fila para encabezados
let filas = document.createElement('div');
// Recorrer arreglo para mostrar letra en cada columna.
letras.forEach(letter => {
    let celdas = document.createElement('div');
    celdas.className = 'number';
    celdas.innerText = letter;
    filas.appendChild(celdas);
});
tabla.appendChild(filas);

for (let i = 0; i < 8; i++) {
    let filas = document.createElement("div");
    // Mostrar número de fila antes de las celdas.
    let celdas = document.createElement('div');
    celdas.className = 'number';
    celdas.innerText = (i + 1);
    filas.appendChild(celdas);
    // Ciclo para mostrar celdas
    for (let j = 0; j < 8; j++) {
        let celdas = document.createElement("div");
        if (i % 2 == j % 2) { celdas.className = "white"; }
        else { celdas.className = "black"; }
        filas.appendChild(celdas);
    }
    tabla.appendChild(filas);
}