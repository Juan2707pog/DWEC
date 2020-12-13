const list = document.getElementById('lista')
let itemValue = '';
function handleChange (val) {
    itemValue = val
}
function addItem() {
    const item = document.createElement('li');
    item.innerText = itemValue;
    list.appendChild(item);
}