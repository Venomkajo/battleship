import './styles.css';
import { ship } from './ship.js';
import { gameboard } from "./gameboard.js";
import { player } from './player.js';
import { updateEnemyGrid, updatePlayerGrid } from './updateDisplay.js';
import { createGrid } from './createDisplay.js';
import { computerTurn } from './gameLogic.js';

// main function
let turn = true;

// create gameboards
let playerOne = new player('player', new gameboard(10, 10));
console.log(playerOne);

let computerOne = new player('computer', new gameboard(10, 10));
console.log(computerOne);

// create ships
let ship1 = new ship(3, 1, 1, "UP");
console.log(ship1);

let ship2 = new ship(2, 7, 7, "UP");

playerOne.gameboard.placeShip(ship1);
computerOne.gameboard.placeShip(ship1);

playerOne.gameboard.placeShip(ship2);
computerOne.gameboard.placeShip(ship2);

createGrid(playerOne.gameboard.grid);

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