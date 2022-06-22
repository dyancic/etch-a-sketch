//Function for loading the grid
let gridDiv = document.createElement("div");
let sketchContainer = document.getElementById("sketch-container");
gridDiv.className = "sketch-block";

let rainbowColor;

function randomColors() {
    let x = Math.floor(Math.random() * 256);
    let y = Math.floor(Math.random() * 256);
    let z = Math.floor(Math.random() * 256);
    rainbowColor = "rgb(" + x + "," + y + "," + z + ")";
    return rainbowColor;
}

//color change func
function fillBlock(e, n) {
    let block = document.getElementById(e);
    switch (n) {
        case "black":
            block.style.backgroundColor = "black";
            block.style.border = "0.5px solid rgba(0, 0, 0, 0.125)";
            break;
            case "rainbow":
                randomColors();
                block.style.backgroundColor = rainbowColor;
                block.style.border = 0;
                break;
        case "white":
            block.style.backgroundColor = "white";
            block.style.border = "0.5px solid rgba(0, 0, 0, 0.125)";
            break;
            //need to change this to an rgb selector
            case "mainColor":
                block.style.backgroundColor = rgbColor;
                block.style.border = 0;
                break;
            }
        }
        
//change to main color when rgb sorted
let selectedColor = "black";
//changes when rgb color is changed listeners
let rgbColor = "black";
function rgbChanger(n) {
    rgbColor = n.value;
    console.log(rgbColor);
    return rgbColor;
}

function changeColor(n) {
    selectedColor = n.value;
    return selectedColor;
}
        
//rainbow function


function loadGrid(n) {
    for (i = 0; i < (n*n); i++) {
        gridDiv.id = i;
        sketchContainer.appendChild(gridDiv.cloneNode(true));
    }
    let blocks = document.querySelectorAll(".sketch-block");
    Array.from(blocks).forEach(element => {
        element.addEventListener("mousedown", clickEvent => {
            fillBlock(element.id, selectedColor);
        })
    });
    let mouseIsDown = false
    document.body.addEventListener("mousedown", () => mouseIsDown = true);
    document.body.addEventListener("mouseup", () => mouseIsDown = false);
    Array.from(blocks).forEach(element => {
        element.addEventListener("mouseover", clickEvent => {
            if (mouseIsDown) { 
                fillBlock(element.id, selectedColor); 
        }
    })
});
}

// Grids up on load
document.onload = loadGrid(16);

//slider or clickdown menu for grid size increase
let sizeSlider = document.getElementById("size-slider");
sizeSlider.value = "16";

//changes the number in the html base on slider value
//delete grid bring in new grid with change width and height of class="sketch-block" to 1/n % when changing grid size
let sketchBlock = document.getElementsByClassName("sketch-block");
function changeValue(v) {
    document.getElementById("size-value").innerHTML = v + " x " + v;
    const blockRemove = document.querySelectorAll(".sketch-block");
    blockRemove.forEach(box => { 
        box.remove();
    });
    loadGrid(v);
    let u = (1 / v)*100;
    let uString = u.toString();
    uString += "%";
    Array.from(sketchBlock).forEach(element => {
        element.style.width = uString;
        element.style.height = uString;
    })
}

