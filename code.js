// variable declares
const body = document.querySelector("body");
const title = document.createElement("div");

const buttons = document.createElement("div");
const p1 = document.createElement("p");
const black  =document.createElement('button');
const rainbow  =document.createElement('button');
const clear  =document.createElement('button');

const div3 = document.createElement("div");
const inputColorButton = document.createElement("input");


// variable add classes
title.classList.add('titulo');
buttons.classList.add('buttons')
p1.classList.add('p1Color');
div3.classList.add("items");
black.classList.add("black");
rainbow.classList.add("rainbow");
clear.classList.add("clear");

// variable set attributes
title.textContent = "Etch a Sketch";
inputColorButton.type = "color";
inputColorButton.setAttribute("id","color");
p1.textContent = "Pick a color";
black.textContent = "Just Black"
rainbow.textContent = "Rainbow"
clear.textContent = "Reset";

// append
buttons.append(inputColorButton,p1,black,rainbow,clear);
body.append(title,buttons,div3);

// create the grid
const items = document.querySelector(".items");
function createGrid(rows, cols) {
  items.style.setProperty("--grid-rows", rows);
  items.style.setProperty("--grid-cols", cols);
  for (c = 0; c < rows * cols; c++) {
    let cell = document.createElement("div");
    items.appendChild(cell).className = "item";
  }
}
createGrid(5, 5); // here i could relate the prompt

// create the color picker
let colorInput = document.querySelector("#color"); 
let hexInput = document.querySelector("#hex");
const item = document.querySelectorAll(".item");
item.forEach((i) => {
  i.addEventListener("mouseenter", function () {
    let color = colorInput.value;
    i.style.background = color;
  });
});
