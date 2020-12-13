const verNombre = document.getElementById('verNombre');
const opciones = document.getElementsByClassName('opciones');

function vista(element) {
    const option = element.getAttribute("value");
    for (optionItem of opciones) {
        optionItem.style.background = 'blue'
    }
    element.style.background = 'white';
    element.style.color = 'orange';
    verNombre.innerText = option;
}