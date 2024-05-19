import { gameboard } from "./gameboard.js";
import { player } from './player.js';
import { updateEnemyGrid, updatePlayerGrid } from './updateDisplay.js';
import { createGrid } from './createDisplay.js';
import { computerTurn } from './gameLogic.js';
import { createVsComputer } from "./createVsComputer.js";

// main function
export function loadVsComputer(){

    // create the html
    createVsComputer();

    let turn = true;

    // create gameboards
    let playerOne = new player('player', new gameboard());
    console.log(playerOne);

    let computerOne = new player('computer', new gameboard());
    console.log(computerOne);

    // create enemy and player ships
    playerOne.gameboard.generateRandomShips();
    computerOne.gameboard.generateRandomShips();
    createGrid(playerOne.gameboard.grid);

    // update display
    updatePlayerGrid(playerOne.gameboard.grid, '.player');
    updateEnemyGrid(computerOne.gameboard.grid, '.enemy');
    addTileListener();

    

    document.getElementById('randomButton').addEventListener('click', function(){
        // disable button in case of low-end pc
        document.getElementById('randomButton').disabled = 'true';

        // randomize the player's board
        playerOne.gameboard.generateNewBoard();
        updatePlayerGrid(playerOne.gameboard.grid, '.player');

        // enable button again
        document.getElementById('randomButton').disabled = '';
    });

    document.getElementById('resetButton').addEventListener('click', function(){
        // disable buttons in case of low-end pc
        document.getElementById('resetButton').disabled = 'true';
        document.getElementById('randomButton').disabled = 'true';

        // generate new boards
        playerOne.gameboard.generateNewBoard();
        updatePlayerGrid(playerOne.gameboard.grid), '.player';
        computerOne.gameboard.generateNewBoard();
        updateEnemyGrid(computerOne.gameboard.grid, '.enemy');

        // enable buttons again
        document.getElementById('resetButton').disabled = '';
        document.getElementById('randomButton').disabled = '';
    });


    let hitInfo = '';

    // add event listeners to tiles
    function addTileListener(){
        const tiles = document.querySelectorAll('.enemy');
        tiles.forEach(tile => {
            tile.addEventListener('click', function(){
                document.getElementById('randomButton').disabled = 'true';
                // if it's the player's turn
                if (turn){
                    // if an attack was received
                    if (computerOne.gameboard.receiveAttack(parseInt(tile.dataset.row), parseInt(tile.dataset.column))){
                        turn = false;
                        
                        updateEnemyGrid(computerOne.gameboard.grid, '.enemy');
                        if (computerOne.gameboard.checkForWin()){
                            alert('Victory for the player!');
                            playerOne.gameboard.generateNewBoard();
                            computerOne.gameboard.generateNewBoard();
                            updateEnemyGrid(computerOne.gameboard.grid, '.enemy');
                            updatePlayerGrid(playerOne.gameboard.grid, '.player');
                            return;
                        }

                        // if the computer move is successful move forward
                        hitInfo = computerTurn(playerOne.gameboard, hitInfo);
                        if (hitInfo){
                            turn = true;
                        } else {
                            alert('Error!');
                        }

                        updatePlayerGrid(playerOne.gameboard.grid, '.player');
                        if (playerOne.gameboard.checkForWin()){
                            alert('Victory for the computer!');
                            playerOne.gameboard.generateNewBoard();
                            computerOne.gameboard.generateNewBoard();
                            updateEnemyGrid(computerOne.gameboard.grid, '.enemy');
                            updatePlayerGrid(playerOne.gameboard.grid, '.player');
                            return;
                        }
                    }
                }
            })
        })
    }
}