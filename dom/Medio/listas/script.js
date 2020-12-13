  
const lista1 = document.getElementById('lista1');
const lista2 = document.getElementById('lista2');

function move(elemento) {
    if (elemento.getAttribute("value") === 'lista1') {
        elemento.setAttribute("value", "lista2");
        lista2.appendChild(elemento)
    }else{
        elemento.setAttribute("value", "lista1");
        lista1.appendChild(elemento);
    }
}