// update display
export function updateGrid(grid, boardElement){
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

                if (true){
                    boardElement.appendChild(boardTile);
                }
            }
        }
    }
}