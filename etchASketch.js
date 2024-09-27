const CONTAINER_SIZE_PX = 600;
const COLOR = "black";

function getDimensions () {
    let height;
    while (true) {
        height = +prompt("Enter the desired grid height (max of 100):");
        if (height === null) {
            break;
        } else if (typeof height === "number" && !isNaN(height)) {
            break;
        } else {
            alert("Invalid input, please try again.");
        }
    }
    if (height > 100) {
        alert("Input was over max height. Creating 100x100 grid.");
        return 100;
    };
    return height
}

function calcBoxSize (dimensions) {
    return CONTAINER_SIZE_PX / dimensions;
}

function createBoxGrid (dimensions = 16) {
    const boxSize = calcBoxSize(dimensions) + "px";
    const numOfBoxes = dimensions * dimensions
    const gridContainer = document.querySelector(".container");

    for (let i = 0; i < numOfBoxes; i++) {
        const box = document.createElement("div")
        box.classList.add("box");
        box.style.width = boxSize;
        box.style.height = boxSize;
        box.style.opacity = 0;
        if (borderCheck.checked) {
            box.style.border = "1px solid lightgrey"
        }

        box.addEventListener("mouseenter", () => {
            if (!randomizeColors) box.style.backgroundColor = COLOR;
            if (randomizeColors) box.style.backgroundColor = randomColor();
            box.style.opacity = `${+getComputedStyle(box)['opacity'] + 0.2}`;
            console.log(box.style.backgroundColor)
        });

        gridContainer.appendChild(box);
    }
}

function randomColor () {
    let red = Math.random() * 255;
    let green = Math.random() * 255;
    let blue = Math.random() * 255;
    return`rgba(${red}, ${green}, ${blue}, 1)`
}

function clearGrid () {
    const gridContainer = document.querySelector(".container");
    gridContainer.innerHTML = "";
}

function clearBoxes () {
    const boxes = document.querySelectorAll(".box");
    boxes.forEach((box) => {
        box.style.backgroundColor = 'transparent'
        box.style.opacity = 0;
    });
}

const gridContainer = document.querySelector(".container");
const gridBoxes = document.querySelectorAll(".box");
const newBtn = document.querySelector("button#new");
const resetBtn = document.querySelector("button#reset");
const randomCheck = document.querySelector("#random-color");
const borderCheck = document.querySelector("#borders"); 

resetBtn.addEventListener("click", clearBoxes);
newBtn.addEventListener("click", () => {
    const dimensions = getDimensions();
    if (dimensions) {
        clearGrid();
        createBoxGrid(dimensions);
    };
});

let randomizeColors = randomCheck.checked;
randomCheck.addEventListener("click", () => {
    randomizeColors = randomCheck.checked
})

borderCheck.addEventListener("click", () => {
    let borders = borderCheck.checked;
    const gridBoxes = document.querySelectorAll(".box");

    if (borders) gridBoxes.forEach(box => {
        box.style.border = "1px solid lightgrey";
    })
    if (!borders) gridBoxes.forEach(box => {
        box.style.border = "0";
    })
})

createBoxGrid()