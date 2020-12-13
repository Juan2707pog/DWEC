function IniciarTablero(){
    for(i=0;i<2;i++){
        for(j=0;j<2;j++){
            tablero [i][j]=0;
        }
    }
}
function PintarCelda(x,y,color){
    //selecciona celda
    celda=document.getElementById("c"+x+y);
    //ponemos color
    celda.style.background=color;
}
