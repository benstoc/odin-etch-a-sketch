const CONTAINER_SIZE_PX = 700;

function getDimensions () {
    return prompt("Enter the desired grid height:");
}

function calcBoxSize (dimensions) {
    return Math.floor(CONTAINER_SIZE_PX / dimensions);
}

function createBoxGrid () {
    const dimensions = getDimensions();
    const boxSize = calcBoxSize(dimensions) + "px";
    const numOfBoxes = dimensions * dimensions

    const gridContainer = document.querySelector(".container");
    gridContainer.style.paddingBottom = (dimensions - 1) + "px"; // temp

    for (let i = 0; i < numOfBoxes; i++) {
        const div = document.createElement("div")
        div.classList.add("box");
        div.style.width = boxSize;
        div.style.height = boxSize;


        gridContainer.appendChild(div)
    }
}

createBoxGrid()

const gridBoxes = document.querySelectorAll(".box");
gridBoxes.forEach((box) => {
    box.addEventListener("mouseenter", ()=> {
        console.log("test")
        box.classList.add("color-box");
    });
});