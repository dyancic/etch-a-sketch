//Function for loading the grid
let gridDiv = document.createElement("div");
let sketchContainer = document.getElementById("sketch-container");
gridDiv.className = "sketch-block";


//color change func
function fillBlock(e, n) {
    let block = document.getElementById(e);
    console.log(n);
    console.log(e);
    switch (n) {
        case "black":
            block.style.backgroundColor = "black";
            break;
        case "rainbow":
            block.style.backgroundColor = "white";
            break;
        case "white":
            block.style.backgroundColor = "white";
            break;
    }
}

let selectedColor = "black";

function changeColor(n) {
    selectedColor = n.value;
    return selectedColor;
}

// document.querySelectorAll('input[name="color-change"]').forEach((element) => {
//     element.addEventListener("change", changeColor());
// });

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

