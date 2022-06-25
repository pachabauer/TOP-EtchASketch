const body = document.querySelector('body');
const div = document.createElement('div');
body.appendChild(div);
div.classList.add('items');

for (let i = 1; i <= 16; i++) { /* aqui luego definir el i como un maximo determinado x el usuario */
    const items = document.querySelector('.items');
    const div = document.createElement('div');
    items.appendChild(div);
    div.classList.add('item')
    div.textContent = i;   
}


