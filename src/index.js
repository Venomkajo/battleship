import './styles.css';
import { ship } from './ship.js';
import { gameboard } from "./gameboard.js";

let game = new gameboard(10, 10);
console.log(game);

let ship1 = new ship(3, 0, 0, 'UP');
console.log(ship1);

game.placeShip(ship1);
console.log(game);


