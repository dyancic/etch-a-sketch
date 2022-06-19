//Function for loading the grid
let gridDiv = document.createElement("div");
let sketchContainer = document.getElementById("sketch-container");
gridDiv.className = "sketch-block";
let sketchBlock = document.getElementsByClassName("sketch-block");

function loadGrid(n) {
    for (i = 0; i < (n*n); i++) {
        gridDiv.id = i;
        sketchContainer.appendChild(gridDiv.cloneNode(true));
    }
}

// Grids up on load
document.onload = loadGrid(16);

//slider or clickdown menu for grid size increase
let sizeSlider = document.getElementById("size-slider");
sizeSlider.value = "16";

//changes the number in the html base on slider value
//delete grid bring in new grid with change width and height of class="sketch-block" to 1/n % when changing grid size
function changeValue(v) {
    document.getElementById("size-value").innerHTML = v;
    const blockRemove = document.querySelectorAll(".sketch-block");
    blockRemove.forEach(box => { 
        box.remove();
    });
    loadGrid(v);
    let u = (1 / v)*100;
    let uString = u.toString();
    uString += "%";
    console.log(uString);
    Array.from(sketchBlock).forEach(element => {
        element.style.width = uString;
        element.style.height = uString;
    })
}

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
Array.from(blocks).forEach(element => {
    element.addEventListener("mousedown", clickEvent => {
        fillBlock(element.id);
    })
});



//mousedown toggles a mouseover listener
let mouseIsDown = false
document.body.addEventListener("mousedown", () => mouseIsDown = true);
document.body.addEventListener("mouseup", () => mouseIsDown = false);
Array.from(blocks).forEach( element => {
    element.addEventListener("mouseover", clickEvent => {
        if (mouseIsDown) { fillBlock(element.id); }
    })
});


//stops the drag and drop bug
gridDiv.draggable = "false";
const dragDrop = document.querySelectorAll(".sketch-container", ".sketch-block", "header", "footer");
dragDrop.addEventListener("dragstart", (e) => { e.preventDefault() })
dragDrop.addEventListener("drop", (e) => { e.preventDefault() })