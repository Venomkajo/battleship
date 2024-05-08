import { isValidPosition, checkNearbySquares } from "./isValidPosition";
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

        // create an rows x columns array filled with 0
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
        if (isValidPosition(shipLength, row, column, direction)) {
            // get row + ship length
            emptySpace = checkNearbySquares(grid, shipLength, row, column, direction);
            // if ship doesn't touch another ship
            if (emptySpace){
                if (direction === 'DOWN'){
                    // set the ship on the grid
                    for (let i = 0; i < shipLength; i++) {
                        grid[row + i][column] = 'S';
                    }
                    this.ships.push(ship);
                    return true;
                } else {
                    // set the ship on the grid
                    for (let i = 0; i < shipLength; i++) {
                        grid[row][column + i] = 'S';
                    }
                    this.ships.push(ship);
                    return true;
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
                // generate random values
                randomRow = Math.floor(Math.random() * 10);
                randomColumn = Math.floor(Math.random() * 10);
                randomDirection = '';
    
                if (Math.random() <= 0.5){
                    randomDirection = 'DOWN';
                } else {
                    randomDirection = 'RIGHT';
                }
                
                // create a ship object with the random values
                let newShip = new ship(size, randomRow, randomColumn, randomDirection);
                // if the object gets placed break the loop
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
                // for every ship in ships
                for (const ship of this.ships) { 
                    // for every position that the ship takes
                    for (const position of ship.positions){
                        // if attack matches ship position update the board and hit count
                        if (position[0] === row && position[1] === column){
                            ship.hit();
                            grid[row][column] = 'H';
                            return 'H';
                        }
                    }
                }
            } else if (grid[row][column] === '0'){
                // if not a ship update to miss
                grid[row][column] = 'M';
                return '0';
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
    
            if (count >= ships.length){
                return true;
            } else {
                return false;
            }
        } else {
            return false;
        }
    }

    // clear data
    clearBoard(){
        this.grid = this.createGrid(10, 10);
        this.ships = [];
    }

    // generate completely new and randomized board
    generateNewBoard(){
        this.clearBoard();
        this.generateRandomShips();
    }
}
