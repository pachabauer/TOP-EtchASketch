const body = document.querySelector("body");
const div3 = document.createElement("div");
body.appendChild(div3);
div3.classList.add("items");

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
