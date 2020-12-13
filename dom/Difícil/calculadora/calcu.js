let num1 = 0;
let num2 = 0;
let opera;

function añadirNum(numero){
    if(num1==0 && num1 !== '0.'){
        num1 = numero;
    }else{
        num1 += numero;
    }
    clean();
}
function darCE(){
    num1 = 0;
    num2 = 0;
    clean();
}
function operar(valor){
    if (num1 == 0){
        num1 = parseInt(document.getElementById("valor_numero").value);
    }
    num2 = parseInt(num1);
    num1= 0;
    opera = valor;
}
function operaciones(){
    switch (opera){
        case 1:
            num1 += num2;
        break;
        case 2:
            num1 = num2 - num1;
        break;
        case 3:
            num1 = num2 / num1;
        break;
        case 4:
            num1 *= num2;
            
        break;
     }
    clean();
    num2 = num1;
    num1 = 0;
}

function clean(){
    document.getElementById("valor_numero").value = num1;
}