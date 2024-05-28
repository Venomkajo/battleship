export function createVsPlayer(){

    // remove every item
    while (document.body.firstChild){
        document.body.removeChild(document.body.firstChild);
    }

    // create header element
    const header = document.createElement('header');
    header.textContent = 'Battleship';

    // create div for boards
    const boardsDiv = document.createElement('div');
    boardsDiv.classList.add('boards');

    // create player board
    const playerBoardContainer = document.createElement('div');
    playerBoardContainer.classList.add('board-container');

    const playerBoardText = document.createElement('p');
    playerBoardText.textContent = 'Player 1 board:';

    const playerBoard = document.createElement('div');
    playerBoard.classList.add('board');
    playerBoard.id = 'boardOne';

    playerBoardContainer.appendChild(playerBoardText);
    playerBoardContainer.appendChild(playerBoard);

    // create enemy board
    const enemyBoardContainer = document.createElement('div');
    enemyBoardContainer.classList.add('board-container');

    const enemyBoardText = document.createElement('p');
    enemyBoardText.textContent = 'Player 2 board:';

    const enemyBoard = document.createElement('div');
    enemyBoard.classList.add('board');
    enemyBoard.id = 'boardTwo';
    
    enemyBoardContainer.appendChild(enemyBoardText);
    enemyBoardContainer.appendChild(enemyBoard);

    boardsDiv.appendChild(playerBoardContainer);
    boardsDiv.appendChild(enemyBoardContainer);

    // Create buttons div
    const buttonsDiv = document.createElement('div');
    buttonsDiv.classList.add('buttons');

    const switchButton = document.createElement('button');
    switchButton.id = 'switchButton';
    switchButton.textContent = 'Switch player';

    const resetButton = document.createElement('button');
    resetButton.id = 'resetButton';
    resetButton.textContent = 'Reset board';

    buttonsDiv.appendChild(switchButton);
    buttonsDiv.appendChild(resetButton);

    // Append all elements to body
    document.body.appendChild(header);
    document.body.appendChild(boardsDiv);
    document.body.appendChild(buttonsDiv);
}