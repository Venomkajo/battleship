// update display
export function updatePlayerGrid(grid, querySelect){

        let tiles = document.querySelectorAll(querySelect);
        tiles.forEach(boardTile => {
            let row = boardTile.dataset.row;
            let column = boardTile.dataset.column;

            // choose a color based on the grid content
            switch (grid[row][column]) {
                case '0':
                    boardTile.style.backgroundColor = 'lightcyan';
                    break;
                case 'S':
                    boardTile.style.backgroundColor = 'blue';
                    break;
                case 'M':
                    boardTile.style.backgroundColor = 'gray';
                    break;
                case 'H':
                    boardTile.style.backgroundColor = 'red';
                    break;
                default:
                    break;
        } 
        });
}

// update display but without ships visible
export function updateEnemyGrid(grid, querySelect){

    let tiles = document.querySelectorAll(querySelect);
    tiles.forEach(boardTile => {
        let row = boardTile.dataset.row;
        let column = boardTile.dataset.column;

        // choose a color based on the grid content
        switch (grid[row][column]) {
            case '0':
                boardTile.style.backgroundColor = 'lightcyan';
                break;
            case 'S':
                boardTile.style.backgroundColor = 'lightcyan';
                break;
            case 'M':
                boardTile.style.backgroundColor = 'gray';
                break;
            case 'H':
                boardTile.style.backgroundColor = 'red';
                break;
            default:
                break;
    } 
    });
}

// make grids all the same color for player vs player
export function hideDisplay(querySelect){
    let tiles = document.querySelectorAll(querySelect);
    tiles.forEach(boardTile => {
        boardTile.style.backgroundColor = 'lightcyan';
    });
}