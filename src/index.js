import './styles.css';
import { ship } from './ship.js';
import { gameboard } from "./gameboard.js";
import { player } from './player.js';
import { updateEnemyGrid, updatePlayerGrid } from './updateDisplay.js';
import { createGrid } from './createDisplay.js';

let turn = true;

let playerOne = new player('player', new gameboard(10, 10));
console.log(playerOne);

let computerOne = new player('computer', new gameboard(10, 10));
console.log(computerOne);

let ship1 = new ship(3, 1, 1, "UP");
console.log(ship1);

playerOne.gameboard.placeShip(ship1);
computerOne.gameboard.placeShip(ship1);
console.log(playerOne);

playerOne.gameboard.receiveAttack(1, 1);
playerOne.gameboard.receiveAttack(0, 0);
computerOne.gameboard.receiveAttack(3, 1);
computerOne.gameboard.receiveAttack(0, 0);
console.log(playerOne);

createGrid(playerOne.gameboard.grid);

updatePlayerGrid(playerOne.gameboard.grid);
updateEnemyGrid(computerOne.gameboard.grid);
addTileListener();

function addTileListener(){
    const tiles = document.querySelectorAll('.enemy');
    tiles.forEach(tile => {
        tile.addEventListener('click', function(){
            if (turn){
                computerOne.gameboard.receiveAttack(parseInt(tile.dataset.row), parseInt(tile.dataset.column));
                updateEnemyGrid(computerOne.gameboard.grid);
            }
        });
    });
}