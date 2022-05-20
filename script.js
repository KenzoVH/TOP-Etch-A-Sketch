// Create 16x16 grid of square divs
function createGrid() {
    const container = document.querySelector('#container');
    for (let row = 0; row < 16; row++) { // Make 16 rows
        const row = document.createElement('div');
        row.setAttribute('id', 'row');
        for (let column = 0; column < 16; column++) { // For every row, make 16 columns
            const square = document.createElement('div');
            square.setAttribute('id', 'square');
            row.appendChild(square);
        };
        container.appendChild(row);
    };
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

// Calls both other functions to setup the grid, and configure the event listeners for it
function setupGrid() { 
    createGrid();
    setupEvents();
}
