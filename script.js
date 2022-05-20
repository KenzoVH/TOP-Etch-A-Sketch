// Create a grid, but default to a 16 by 16 grid
function createGrid(rows = 16, columns = 16) {
    const container = document.querySelector('#container');
    const grid = document.createElement('div');
    grid.setAttribute('id', 'grid');
    for (let row = 0; row < rows; row++) { // Make 16 rows
        const row = document.createElement('div');
        row.setAttribute('id', 'row');
        for (let column = 0; column < columns; column++) { // For every row, make 16 columns
            const square = document.createElement('div');
            square.setAttribute('id', 'square');
            row.appendChild(square);
        };
        grid.appendChild(row);
    };
    container.appendChild(grid);
    setupEvents();
}

// Set up the event listeners for every square
function setupEvents() {
    const squares = document.querySelectorAll('#square');
    squares.forEach(square => {
        square.addEventListener('mouseover', () => {
            square.setAttribute('class', 'active');
        });
    });
}

// Set up the event listener for the custom grid button
const customButton = document.querySelector('#custom')
customButton.addEventListener('click', () => {
    const userColumns = prompt("How wide would you like the grid to be?");
    const userRows = prompt("How high would you like the grid to be?");
    clearContainer();
    createGrid(userRows, userColumns);
});

// Function to clear all grids from container
function clearContainer() {
    const container = document.querySelector('#container');
    while(container.firstChild) {
        container.removeChild(container.firstChild);
    }
}

// Load basic grid on page load
createGrid();