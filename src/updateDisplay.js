// update display
export function updatePlayerGrid(grid, boardElement){
    while (boardElement.firstChild){
        boardElement.remove(boardElement.firstChild);
    }

    for (let i = 0; i < grid.length; i++){
        if (grid[i]){
            for (let j = 0; j < grid[i].length; j++){
                const boardTile = document.createElement('div');
                boardTile.classList.add('board-tile');
                boardTile.dataset.row = i;
                boardTile.dataset.column = j;

                boardTile.addEventListener('click', function(){
                    boardTile.style.backgroundColor = 'green';
                });

                switch (grid[i][j]) {
                    case '0':
                        boardTile.style.backgroundColor = 'lightcyan';
                        boardElement.appendChild(boardTile);
                        break;
                    case 'S':
                        boardTile.style.backgroundColor = 'blue';
                        boardElement.appendChild(boardTile);
                        break;
                    case 'M':
                        boardTile.style.backgroundColor = 'gray';
                        boardElement.appendChild(boardTile);
                        break;
                    case 'H':
                        boardTile.style.backgroundColor = 'red';
                        boardElement.appendChild(boardTile);
                        break;
                    default:
                        break;
                }
            }
        }
    }
}

export function updateEnemyGrid(grid, boardElement){
    while (boardElement.firstChild){
        boardElement.remove(boardElement.firstChild);
    }

    for (let i = 0; i < grid.length; i++){
        if (grid[i]){
            for (let j = 0; j < grid[i].length; j++){
                const boardTile = document.createElement('div');
                boardTile.classList.add('board-tile');
                boardTile.dataset.row = i;
                boardTile.dataset.column = j;

                boardTile.addEventListener('click', function(){
                    boardTile.style.backgroundColor = 'green';
                });

                switch (grid[i][j]) {
                    case '0':
                        boardTile.style.backgroundColor = 'lightcyan';
                        boardElement.appendChild(boardTile);
                        break;
                    case 'S':
                        boardTile.style.backgroundColor = 'lightcyan';
                        boardElement.appendChild(boardTile);
                        break;
                    case 'M':
                        boardTile.style.backgroundColor = 'gray';
                        boardElement.appendChild(boardTile);
                        break;
                    case 'H':
                        boardTile.style.backgroundColor = 'red';
                        boardElement.appendChild(boardTile);
                        break;
                    default:
                        break;
                }
            }
        }
    }
}