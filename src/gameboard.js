import { isValidPosition } from "./isValidPosition";
import { shipInGrid } from "./shipInGrid";

// create the gameboard
export class gameboard {
    constructor(rows, columns) {
        this.grid = this.createGrid(rows, columns);
        this.ships = [];
        this.hits = [];
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

        if (direction === 'UP') {
            if (isValidPosition(shipLength, row, column, direction)) {
                for (let i = 0; i < shipLength; i++) {
                    grid[row + i][column] = 'S';
                }
                
                this.ships.push(ship);

            }
        } else if (direction === 'RIGHT') {
            if (isValidPosition(shipLength, row, column, direction)) {
                for (let i = 0; i < shipLength; i++) {
                    grid[row][column + i] = 'S';
                }

                this.ships.push(ship);

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
            } else {
                grid[row][column] = 'M';
                return false;
            }
        }
    }

    checkForWin(){
        let count = 0;
        let ships = this.ships;
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
}
