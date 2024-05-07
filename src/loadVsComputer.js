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
    computerOne.gameboard.generateRandomShips();
    createGrid(computerOne.gameboard.grid);

    playerOne.gameboard.generateRandomShips();
    createGrid(playerOne.gameboard.grid);

    // update display
    updatePlayerGrid(playerOne.gameboard.grid);
    updateEnemyGrid(computerOne.gameboard.grid);
    addTileListener();

    document.getElementById('randomButton').addEventListener('click', function(){
        // disable button in case of low-end pc
        document.getElementById('randomButton').disabled = 'true';

        // randomize the player's board
        playerOne.gameboard.generateNewBoard();
        updatePlayerGrid(playerOne.gameboard.grid);

        // enable button again
        document.getElementById('randomButton').disabled = '';
    });

    document.getElementById('resetButton').addEventListener('click', function(){
        // disable buttons in case of low-end pc
        document.getElementById('resetButton').disabled = 'true';
        document.getElementById('randomButton').disabled = 'true';

        // generate new boards
        playerOne.gameboard.generateNewBoard();
        updatePlayerGrid(playerOne.gameboard.grid);
        computerOne.gameboard.generateNewBoard();
        updateEnemyGrid(computerOne.gameboard.grid);

        // enable buttons again
        document.getElementById('resetButton').disabled = '';
        document.getElementById('randomButton').disabled = '';
    });

    let lastHit = '0';

    // add event listeners to tiles
    function addTileListener(){
        const tiles = document.querySelectorAll('.enemy');
        tiles.forEach(tile => {
            tile.addEventListener('click', function(){
                document.getElementById('randomButton').disabled = 'true';
                if (turn){
                    if (computerOne.gameboard.receiveAttack(parseInt(tile.dataset.row), parseInt(tile.dataset.column))){
                        turn = false;
                        updateEnemyGrid(computerOne.gameboard.grid);
                        if (computerOne.gameboard.checkForWin()){
                            alert('Victory for the player!');
                        }
                        lastHit = computerTurn(playerOne.gameboard, lastHit);
                        if (lastHit){
                            turn = true;
                        } else {
                            alert('Error!');
                        }
                        updatePlayerGrid(playerOne.gameboard.grid);
                        if (playerOne.gameboard.checkForWin()){
                            alert('Victory for the computer!');
                        }
                    }
                }
            })
        })
    }
}