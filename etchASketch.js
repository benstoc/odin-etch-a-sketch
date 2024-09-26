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
        alert("Input was over max height. \nCreating 100x100 grid.");
        return 100;
    };
    return height
}

function calcBoxSize (dimensions) {
    return Math.floor(CONTAINER_SIZE_PX / dimensions);
}

function createBoxGrid (dimensions = 16) {
    const boxSize = calcBoxSize(dimensions) + "px";
    const numOfBoxes = dimensions * dimensions
    const gridContainer = document.querySelector(".container");
    gridContainer.style.paddingBottom = (dimensions - 1) + "px"; // temp

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

createBoxGrid()

const gridContainer = document.querySelector(".container");
const gridBoxes = document.querySelectorAll(".box");
const btn = document.querySelector("button");

btn.addEventListener("click", () => {
    const dimensions = getDimensions();
    if (dimensions) {
        gridContainer.innerHTML = "";
        createBoxGrid(dimensions);
    };
});