import './styles.css';
import { gameboard } from "./gameboard.js";
import { player } from './player.js';
import { updateEnemyGrid, updatePlayerGrid } from './updateDisplay.js';
import { createGrid } from './createDisplay.js';
import { computerTurn } from './gameLogic.js';

// main function
let turn = true;

// create gameboards
let playerOne = new player('player', new gameboard());
console.log(playerOne);

let computerOne = new player('computer', new gameboard());
console.log(computerOne);

// create enemy ships
computerOne.gameboard.generateRandomShips();
createGrid(computerOne.gameboard.grid);

playerOne.gameboard.generateRandomShips();
createGrid(playerOne.gameboard.grid);

// update display
updatePlayerGrid(playerOne.gameboard.grid);
updateEnemyGrid(computerOne.gameboard.grid);
addTileListener();

document.getElementById('randomButton').addEventListener('click', function(){
    document.getElementById('randomButton').disabled = 'true';
    playerOne.gameboard.generateNewBoard();
    updatePlayerGrid(playerOne.gameboard.grid);
    document.getElementById('randomButton').disabled = '';
});

document.getElementById('resetButton').addEventListener('click', function(){
    document.getElementById('resetButton').disabled = 'true';
    document.getElementById('randomButton').disabled = 'true';
    playerOne.gameboard.generateNewBoard();
    updatePlayerGrid(playerOne.gameboard.grid);
    computerOne.gameboard.generateNewBoard();
    updateEnemyGrid(computerOne.gameboard.grid);
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
            console.log(computerOne);
        })
    })
}