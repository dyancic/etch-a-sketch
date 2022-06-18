//Function for loading the grid
let gridDiv = document.createElement("div");
let sketchContainer = document.getElementById("sketch-container");
gridDiv.className = "sketch-block";
gridDiv.draggable = "false";
function loadGrid(n) {
    for (i = 0; i < (n*n); i++) {
        gridDiv.id = i;
        sketchContainer.appendChild(gridDiv.cloneNode(true));
    }
}
// Grids up on load
document.onload = loadGrid(16);

//color change func
function fillBlock(e) {
    let block = document.getElementById(e);
    if (block.style.backgroundColor !== "black") {
        block.style.backgroundColor = "black"; 
    }
    else {
        block.style.backgroundColor = "white";
    }
}

//selects the div by id when clicked and calls change func
let blocks = document.querySelectorAll(".sketch-block");
Array.from(blocks).forEach( element => {
    element.addEventListener("mousedown", clickEvent => {
        fillBlock(element.id);
    })
});

//mousedown toggles a mouseover listener
let mouseIsDown = false
document.body.addEventListener('mousedown', () => mouseIsDown = true);
document.body.addEventListener('mouseup', () => mouseIsDown = false);
Array.from(blocks).forEach( element => {
    element.addEventListener("mouseover", clickEvent => {
        if (mouseIsDown) { fillBlock(element.id); }
    })
});

//change width and height of class="sketchblock" to 1/n % when changing grid size


//stops the drag and drop buggy 
const dragDrop = document.querySelector('div')
dragDrop.addEventListener('dragstart', (e) => {
  e.preventDefault()
})

dragDrop.addEventListener('drop', (e) => {
  e.preventDefault()
})