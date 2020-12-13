function obtenerElemento(id) { return document.getElementById(id); }
function nombreDeClase(id) { return document.getElementsByClassName(id); }
function texto(id, txt) { obtenerElemento(id).innerHTML = txt; }
function possicion(id, posiciones) { obtenerElemento(id).style.display = posiciones; }
function colorDelFondo(id, posiciones) { obtenerElemento(id).style.backgroundColor = posiciones; }

let cuadro1 = obtenerElemento("cuadrado1");
let cuadro2 = obtenerElemento("cuadrado2");
let cuadro3 = obtenerElemento("cuadrado3");
let cuadro4 = obtenerElemento("cuadrado4");
let cuadro5 = obtenerElemento("cuadrado5");
let cuadro6 = obtenerElemento("cuadrado6");
let cuadro7 = obtenerElemento("cuadrado7");
let cuadro8 = obtenerElemento("cuadrado8");
let cuadro9 = obtenerElemento("cuadrado9");
let cuadrados = nombreDeClase("cuadrado0");
let finDelJuego = 0;
let jugador = 1;
let botActivo = 0;
let siguientePosicionBot;
let lugaresLibres = [];
let posiciones = [0, 0, 0, 0, 0, 0, 0, 0, 0]
let posicionesParaGanar = [[0, 1, 2], [3, 4, 5], [6, 7, 8], [0, 3, 6], [1, 4, 7], [2, 5, 8], [0, 4, 8], [2, 4, 6]];

for (let i = 0; i < nombreDeClase("cuadrado0").length; i++) {
    cuadrados[i].onclick = function () {
        elegirCuadrado(i);
    }
}
function movimientosBot() { //BOT MOVEMENT
    for (let i2 = 0; i2 < posiciones.length; i2++) {
        if (posiciones[i2] == 0) {
            lugaresLibres.push(i2);
        }
    }
    siguientePosicionBot = lugaresLibres[movimientoMa(lugaresLibres.length)];
    function movimientoMa(max) {
        return Math.floor(Math.random() * max);
    }
    if (posiciones.includes(0)) {
        colorDelFondo(("cuadrado" + (siguientePosicionBot + 1)), "#86c865");
        posiciones[siguientePosicionBot] = 2;
        lugaresLibres = [];
        comprobarParaGanar();
    } else {
        if (finDelJuego > 8) {
            comprobarParaGanar();
        } else {
            texto("nombreTitulo", "Empate");
            possicion("capa", "block")
            texto("ganador", "");
        }
    }
}
function elegirCuadrado(i) {
    if (posiciones[i] == 0) {
        finDelJuego++;
        if (botActivo == 1) {
            finDelJuego++;
            if (jugador == 1) {
                colorDelFondo(("cuadrado" + (i + 1)), "#f5a0a0");
                posiciones[i] = 1;
                movimientosBot();
                jugador = 1;
            } else {
                return;
            }
        } else {
            if (jugador == 1) {
                colorDelFondo(("cuadrado" + (i + 1)), "#f5a0a0");
                posiciones[i] = 1;
                comprobarParaGanar();
                jugador = 2;
            } else {
                colorDelFondo(("cuadrado" + (i + 1)), "#86c865");
                posiciones[i] = 2;
                comprobarParaGanar();
                jugador = 1;
            }
            comprobarParaGanar();
        }
    }
}
function comprobarParaGanar() {
    for (let i2 = 0; i2 < posicionesParaGanar.length; i2++) {
        if ((posiciones[posicionesParaGanar[i2][0]] == posiciones[posicionesParaGanar[i2][1]] &&
            posiciones[posicionesParaGanar[i2][1]] == posiciones[posicionesParaGanar[i2][2]] &&
            posiciones[posicionesParaGanar[i2][2]] != 0)) {
            if (botActivo == 1) {
                if (posiciones[posicionesParaGanar[i2][0]] == 2) {
                    texto("nombreTitulo", ("Nunu Bot"));
                } else {
                    texto("nombreTitulo", ("Jugador"));
                    for (i2 = 0; i2 < 9; i2++) {
                        colorDelFondo(("cuadrado" + (i2 + 1)), "");
                        posiciones[i2] = 0;
                    }
                }
            } else {
                if (jugador == 2) {
                    jugador = 1;
                } else if (jugador == 1) {
                    jugador = 2;
                }
                texto("nombreTitulo", ("Jugador " + jugador));
            }
            possicion("capa", "block")
            if (jugador == 2) {
                jugador = 1;
            }
            return;
        }
    }
    if (!posiciones.includes(0)) {
        texto("nombreTitulo", "Empate!");
        possicion("capa", "block")
        texto("ganador", "");
    }
}

function siguientePartida() {
    possicion("capa", "none");
    texto("ganador", "Ha ganado");
    borrarTabla();
}

function cambiarModo() { //1p||2p
    if (botActivo == 0) {
        botActivo = 1;
        possicion("modoMultijugador", "none");
        possicion("modoJugadorIA", "block");
    } else {
        botActivo = 0;
        possicion("modoMultijugador", "block");
        possicion("modoJugadorIA", "none");
    }
    borrarTabla();
}

function borrarTabla() { // borrar tabla
    if (jugador == 2) {
        jugador = 1;
    }
    for (i2 = 0; i2 < 9; i2++) {
        colorDelFondo(("cuadrado" + (i2 + 1)), "");
        posiciones[i2] = 0;
    }
    possicion("capa", "none");
    finDelJuego = 0;
}