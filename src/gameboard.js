import { isValidPosition, shipInGrid } from "./isValidPosition";
import { ship } from './ship.js';

// create the gameboard
export class gameboard {
    constructor() {
        this.grid = this.createGrid(10, 10);
        this.ships = [];
    }

    // create the grid
    createGrid(rows, columns) {
        const grid = [];

        for (let i = 0; i < rows; i++) {
            grid[i] = [];

            for (let j = 0; j < columns; j++) {
                grid[i][j] = '0';
            }
        }

        return grid;
    }

    // place the chosen ship on board
    placeShip(ship) {
        const grid = this.grid;
        let shipLength = ship.shipLength;
        let row = ship.row;
        let column = ship.column;
        let direction = ship.direction;
        let emptySpace = true;

        // if ship is vertical
        if (direction === 'UP') {
            if (isValidPosition(shipLength, row, column, direction)) {
                // get row + ship length
                for (let z = 0; z < shipLength; z++){
                    let initialRow = row + z;

                    // get every nearby square and check if it's a ship
                    for (let i = -1; i <= 1; i++) {
                        for (let j = -1; j <= 1; j++) {
                            let newRow = initialRow + i;
                            let newColumn = column + j;
                            if (isValidPosition(shipLength, newRow, newColumn, direction)){
                                if (grid[newRow][newColumn] === 'S'){
                                    emptySpace = false;
                                }
                            }
                        }
                    }
                }
                // if ship doesn't touch another ship
                if (emptySpace){
                    // set the ship on the grid
                    for (let i = 0; i < shipLength; i++) {
                        grid[row + i][column] = 'S';
                    }
                    this.ships.push(ship);
                    return true;
                } else {
                    return false;
                }
            } else {
                return false;
            }
            // if ship is horizontal
        } else if (direction === 'RIGHT') {
            if (isValidPosition(shipLength, row, column, direction)) {
                // get column + ship length
                for (let z = 0; z < shipLength; z++){
                    let initialColumn = column + z;

                    // get every nearby square and check if it's a ship
                    for (let i = -1; i <= 1; i++) {
                        for (let j = -1; j <= 1; j++) {
                            let newRow = row + i;
                            let newColumn = initialColumn + j;
                            if (isValidPosition(shipLength, newRow, newColumn, direction)){
                                if (grid[newRow][newColumn] === 'S'){
                                    emptySpace = false;
                                }
                            }
                        }
                    }
                }
                // if ship doesn't touch another ship
                if (emptySpace){
                    // set the ship on the grid
                    for (let i = 0; i < shipLength; i++) {
                        grid[row][column + i] = 'S';
                    }
                    this.ships.push(ship);
                    return true;
                } else {
                    return false;
                }
            } else {
                return false;
            }
        }
    }

    
    // generate ships
    generateRandomShips(){
        let shipSizes = [1, 1, 1, 1, 2, 2, 2, 3, 3, 4];
        for (const size of shipSizes){
            let randomRow = '';
            let randomColumn = '';
            let randomDirection = '';
            
            // generate a value until it's a valid one
            while (true) {
                randomRow = Math.floor(Math.random() * 10);
                randomColumn = Math.floor(Math.random() * 10);
                randomDirection = '';
    
                if (Math.random() <= 0.5){
                    randomDirection = 'UP';
                } else {
                    randomDirection = 'RIGHT';
                }
    
                let newShip = new ship(size, randomRow, randomColumn, randomDirection);
                if(this.placeShip(newShip)){
                    break;
                } else {
                    newShip = '';
                }           
            }
        }
    }


    // receive an attack
    receiveAttack(row, column){
        const grid = this.grid;

        if (row >= 0 && row <= 9 && column >= 0 && column <= 9){
            if (grid[row][column] === 'S'){
                for (const ship of this.ships) { 
                    if (shipInGrid(row, column, ship)){
                        ship.hit();
                        grid[row][column] = 'H';
                        return true;
                    }
                }
            } else if (grid[row][column] === '0'){
                grid[row][column] = 'M';
                return true;
            } else {
                return false;
            }
        }
    }

    // check if every ship sunk
    checkForWin(){
        let count = 0;
        let ships = this.ships;
        if (ships.length >= 1){
            for (const ship of ships){
                if (ship.sunk === true){
                    count++;
                } 
            }
    
            if (count === ships.length){
                return true;
            } else {
                return false;
            }
        }
        return false;
    }

    // clear data
    clearBoard(){
        this.grid = this.createGrid(10, 10);
        this.ships = [];
        this.hits = [];
    }
}
