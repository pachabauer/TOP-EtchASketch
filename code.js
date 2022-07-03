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
const createInputSlider = document.createElement('input');
const createOutputSlider = document.createElement('output');

const footer = document.createElement("div");

// variable add classes
title.classList.add('titulo');
buttons.classList.add('buttons')
p1.classList.add('p1Color');
div3.classList.add("items");
black.classList.add("black");
createInputSlider.classList.add("slider");
createOutputSlider.classList.add("sliderOutput");

rainbow.classList.add("rainbow");
clear.classList.add("clear");

footer.classList.add('footer');

// variable set attributes
title.textContent = "Etch a Sketch";
inputColorButton.type = "color";
inputColorButton.setAttribute("id","color");

createInputSlider.type = "range";
createInputSlider.setAttribute("min",2);
createInputSlider.setAttribute("max",100);
createInputSlider.setAttribute("value",10);
createInputSlider.setAttribute("id","myRange");
createInputSlider.setAttribute("oninput","this.nextElementSibling.value = this.value");

p1.textContent = "Pick a color";
black.textContent = "Just Black"
rainbow.textContent = "Rainbow"
clear.textContent = "Reset";
footer.textContent = "created by pachaB"
createOutputSlider.textContent = createInputSlider.value;

// append
buttons.append(inputColorButton,p1,black,createInputSlider,createOutputSlider,rainbow,clear);
body.append(title,buttons,div3,footer);

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
createGrid(10, 10); // here i could put the prompt

createInputSlider.oninput = function () {
  createOutputSlider.textContent = this.value;
  let abc = createOutputSlider.textContent
  removeAllChildNodes(items);
  createGrid(abc, abc);
}

function removeAllChildNodes(parent){
  while(parent.firstChild){
      parent.removeChild(parent.firstChild);
  }
}

// create the color picker
let butColorPicker = document.querySelector('#color');
butColorPicker.addEventListener('click',colorPicker);

function colorPicker() {
const item = document.querySelectorAll(".item");
item.forEach((i) => {
  i.addEventListener("mouseenter", function () {
    let color = butColorPicker.value;
    i.style.background = color;
  });
});
}

// create the black picker
let butBlackPicker = document.querySelector(".black"); 
butBlackPicker.addEventListener('click',blackPicker);

function blackPicker() {
const item = document.querySelectorAll(".item");
item.forEach((i) => {
  i.addEventListener("mouseenter", function () {
    i.style.background = "#252525";
  });
});
}

// create the rainbow picker
let butRainbowPicker = document.querySelector(".rainbow"); 
butRainbowPicker.addEventListener('click',rainbowPicker);

function rainbowPicker() {
const item = document.querySelectorAll(".item");
item.forEach((i) => {
  i.addEventListener("mouseenter", function () {
    let randomColor = Math.floor(Math.random()*16777215).toString(16);
    i.style.background = `#${randomColor}`;
  });
});
}

// create the clear picker
let butClearPicker = document.querySelector(".clear"); 
butClearPicker.addEventListener('click',clearPicker);

function clearPicker() {
const item = document.querySelectorAll(".item");
item.forEach((i) => {
  i.style.background = "#E8fafa";
});
blackPicker();
}


