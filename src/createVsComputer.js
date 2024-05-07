export function createVsComputer(){
   
    while (document.body.firstChild){
        document.body.removeChild(document.body.firstChild);
    }

    // Create header element
    const header = document.createElement('header');
    header.textContent = 'Battleship';

    // Create div for boards
    const boardsDiv = document.createElement('div');
    boardsDiv.classList.add('boards');

    // Create board containers
    const playerBoardContainer = document.createElement('div');
    playerBoardContainer.classList.add('board-container');
    const playerBoardText = document.createElement('p');
    playerBoardText.textContent = 'Player board:';
    const playerBoard = document.createElement('div');
    playerBoard.classList.add('board');
    playerBoard.id = 'boardOne';
    playerBoardContainer.appendChild(playerBoardText);
    playerBoardContainer.appendChild(playerBoard);

    const enemyBoardContainer = document.createElement('div');
    enemyBoardContainer.classList.add('board-container');
    const enemyBoardText = document.createElement('p');
    enemyBoardText.textContent = 'Enemy board:';
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
    const randomButton = document.createElement('button');
    randomButton.id = 'randomButton';
    randomButton.textContent = 'Randomize ships';

    const resetButton = document.createElement('button');
    resetButton.id = 'resetButton';
    resetButton.textContent = 'Reset board';
    buttonsDiv.appendChild(randomButton);
    buttonsDiv.appendChild(resetButton);

    // Append all elements to body
    document.body.appendChild(header);
    document.body.appendChild(boardsDiv);
    document.body.appendChild(buttonsDiv);
}