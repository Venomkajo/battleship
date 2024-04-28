export function createGrid(grid){
    createPlayerGrid(grid);
    createEnemyGrid(grid);
}

function createPlayerGrid(grid){
    const boardElement = document.querySelector('#boardOne');

    for (let i = 0; i < grid.length; i++){
        if (grid[i]){
            for (let j = 0; j < grid[i].length; j++){
                const boardTile = document.createElement('div');
                boardTile.classList.add('board-tile', 'player');
                boardTile.dataset.row = i;
                boardTile.dataset.column = j;
                boardElement.appendChild(boardTile);
            }
        }
    }
}


function createEnemyGrid(grid){
    const boardElement = document.querySelector('#boardTwo');

    for (let i = 0; i < grid.length; i++){
        if (grid[i]){
            for (let j = 0; j < grid[i].length; j++){
                const boardTile = document.createElement('div');
                boardTile.classList.add('board-tile', 'enemy');
                boardTile.dataset.row = i;
                boardTile.dataset.column = j;
                boardElement.appendChild(boardTile);
            }
        }
    }
}