const body = document.querySelector('body');
const div1 = document.createElement('div');
body.appendChild(div1);
div1.classList.add('items');

const items = document.querySelector('.items')
function createGrid(rows,cols){
    items.style.setProperty('--grid-rows',rows);
    items.style.setProperty('--grid-cols',cols);
    for (c=0; c < (rows * cols); c++) {
        let cell = document.createElement('div');
        cell.textContent = c + 1;
        items.appendChild(cell).className = "item";
    };
};
createGrid(2,2); // here i could relate the prompt

let color = "#3CE746"; /* aqui defino la variable color que puede ir asociada a seleccionar el color */

const item = document.querySelectorAll('.item');
item.forEach((i) => {
    i.addEventListener('mouseenter', function() {
    i.style.background = color;
    });
});





