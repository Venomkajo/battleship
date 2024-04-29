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
let enemyShips = computerOne.gameboard.generateRandomShips();
createGrid(computerOne.gameboard.grid);

let playerShips = playerOne.gameboard.generateRandomShips();
createGrid(playerOne.gameboard.grid);

// update display
updatePlayerGrid(playerOne.gameboard.grid);
updateEnemyGrid(computerOne.gameboard.grid);
addTileListener();

// add event listeners to tiles
function addTileListener(){
    const tiles = document.querySelectorAll('.enemy');
    tiles.forEach(tile => {
        tile.addEventListener('click', function(){
            if (turn){
                do {
                    let attack = false;

                    if (computerOne.gameboard.receiveAttack(parseInt(tile.dataset.row), parseInt(tile.dataset.column))){
                        attack = true;
                    }

                    if (attack){
                        break;
                    }

                } while (!attack);
                turn = false;
                updateEnemyGrid(computerOne.gameboard.grid);
                if (computerOne.gameboard.checkForWin()){
                    alert('Victory for the player!');
                }
                if (computerTurn(playerOne.gameboard)){
                    turn = true;
                } else {
                    alert('Error!');
                }
                updatePlayerGrid(playerOne.gameboard.grid);
                if (playerOne.gameboard.checkForWin()){
                    alert('Victory for the computer!');
                }
                console.log(playerOne);
                console.log(computerOne);
            }
        });
    });
}