const gridContainer = document.querySelector(".container");
const gridBoxes = document.querySelectorAll(".box");
const newBtn = document.querySelector("button#new");
const resetBtn = document.querySelector("button#reset");
const randomCheck = document.querySelector("#random-color");
const borderCheck = document.querySelector("#borders");
const radioBtns = document.querySelectorAll("input[type=radio]")

const CONTAINER_SIZE_PX = +getComputedStyle(gridContainer).width.replace('px', '');
const COLOR = "black";
let currentGridSize;

resetBtn.addEventListener("click", resetGrid);
borderCheck.addEventListener("click", toggleBorders);

radioBtns.forEach((btn) => {
    btn.addEventListener('click', () => {
        gridContainer.innerHTML = '';
        size = btn.getAttribute('id');
        createGrid(size);
    });
});

function createGrid(dimensions = 16) {
    const boxSize = (CONTAINER_SIZE_PX / dimensions) + "px";
    const numOfBoxes = dimensions * dimensions;
    currentGridSize = dimensions;

    for (let i = 0; i < numOfBoxes; i++) {
        const box = document.createElement("div")
        box.classList.add("box");
        box.style.width = boxSize;
        box.style.height = boxSize;
        box.style.opacity = 0;
        if (borderCheck.checked) {
            box.style.border = "1px solid lightgrey";
        }

        box.addEventListener("mouseenter", updateTile);
        gridContainer.appendChild(box);
    }
}

function updateTile() {
    if (!randomCheck.checked) this.style.backgroundColor = COLOR;
    if (randomCheck.checked) this.style.backgroundColor = randomColor();
    this.style.opacity = +getComputedStyle(this).opacity + 0.2;
}

function randomColor() {
    let red = Math.random() * 255;
    let green = Math.random() * 255;
    let blue = Math.random() * 255;
    return`rgba(${red}, ${green}, ${blue}, 1)`;
}

function resetGrid() {
    gridContainer.innerHTML = "";
    createGrid(currentGridSize);
}

function toggleBorders() {
    let borders = borderCheck.checked;
    const gridBoxes = document.querySelectorAll(".box");

    if (borders) gridBoxes.forEach(box => {
        box.style.border = "1px solid lightgrey";
    })
    if (!borders) gridBoxes.forEach(box => {
        box.style.border = "0";
    })
}

createGrid();