import './styles.css';
import { ship } from './ship.js';
import { gameboard } from "./gameboard.js";
import { player } from './player.js';
import { updatePlayerGrid, updateEnemyGrid } from './updateDisplay.js';

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

updatePlayerGrid(playerOne.gameboard.grid, document.getElementById('boardOne'));
updateEnemyGrid(computerOne.gameboard.grid, document.getElementById('boardTwo'));
