

//Function for loading the grid
let gridDiv = document.createElement('div');
let sketchContainer = document.getElementById('sketch-container');
gridDiv.className = 'sketch-block';
function loadGrid(n) {
    for (i = 0; i < (n*n); i++) {
        sketchContainer.appendChild(gridDiv.cloneNode(true));
    }
}

// Grids up on load
document.onload = loadGrid(16);

