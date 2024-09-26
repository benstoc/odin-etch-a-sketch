const CONTAINER_SIZE_PX = 700;

function getDimensions () {
    let height;
    while (true) {
        height = +prompt("Enter the desired grid height (max of 100):");
        console.log(height, typeof height)
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
        const div = document.createElement("div")
        div.classList.add("box");
        div.style.width = boxSize;
        div.style.height = boxSize;

        div.addEventListener("mouseenter", () => {
            div.classList.add("color-box");
        });

        gridContainer.appendChild(div);
    }
}

function clearGrid () {
    const gridContainer = document.querySelector(".container");
    gridContainer.innerHTML = "";
}

function clearBoxes () {
    const boxes = document.querySelectorAll(".color-box");
    boxes.forEach((box) => {
        box.classList.remove("color-box");
    });
}

createBoxGrid()
const gridContainer = document.querySelector(".container");
const gridBoxes = document.querySelectorAll(".box");
const newBtn = document.querySelector("button#new");
const resetBtn = document.querySelector("button#reset");

newBtn.addEventListener("click", () => {
    const dimensions = getDimensions();
    if (dimensions) {
        clearGrid();
        createBoxGrid(dimensions);
    };
});

resetBtn.addEventListener("click", clearBoxes);