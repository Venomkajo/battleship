import './styles.css';
import { ship } from './ship.js';
import { gameboard } from "./gameboard.js";

let game = new gameboard(10, 10);
console.log(game.grid);

let ship1 = new ship(3);
console.log(ship1);

