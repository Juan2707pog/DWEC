let jugadores = [
    {'nombre':'','voting':false,'id':'red'},
    {'nombre':'','voting':false,'id':'yellow'},
    {'nombre':'','voting':false,'id':'blue'},
    {'nombre':'','voting':false,'id':'purple'},
    {'nombre':'','voting':false,'id':'orange'},
    {'nombre':'','voting':false,'id':'green'},
    {'nombre':'','voting':false,'id':'tur'},
    {'nombre':'','voting':false,'id':'black'},
    {'nombre':'','voting':false,'id':'cielo'},
];


function play() {
    let jugador = document.getElementById('member').value.split(',');
    if (jugador.length == 9) {
        asigEquip(jugador);
    } else {
        alert('Solo se acepta 9 jugadores, añade o elimina jugadores');
    }

}

function asigEquip(players) {
    let tablero = document.getElementById('tablero');
    let random;
    for (let cont = 0;cont<9;cont++){
        let div = tablero.children[cont];
        div.setAttribute('onclick','controlVoting(this)');
        random = Math.floor(Math.random() * (players.length - 0) + 0);
        let p = document.createElement('p').value = players[random];
        div.append(p);
        jugadores[cont].nombre = players[random];
        players.splice(random,1);
    }
    document.getElementById('j').setAttribute('hidden', 'hidden');
    console.log(jugadores);
    alert('EMERGENCY ALERT')
}

function controlVoting(elemento){
    for (let cont = 0; cont <1;cont++){
        if(jugadores[cont].id===elemento.getAttribute('id')){
            if (jugadores[cont].voting===true){
                alert(`Ya votaste a este jugador`)
            } else {
                voting(elemento);
            }
        }
    }
}

function voting(elemento) {
    for (cont = 0;cont<9;cont++){
        if(jugadores[cont].id===elemento.getAttribute('id')){
            jugadores[cont].voting =true;
            elemento.style.border = '5px solid white'
        }
    }
    console.log(jugadores);
}