import { isValidPosition } from "./isValidPosition";

// create the gameboard
export class gameboard {
    constructor(rows, columns) {
        this.rows = rows;
        this.columns = columns;
        this.grid = this.createGrid(this.rows, this.columns);
        this.ships = [];
        this.misses = [];
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
                
                this.ships.push([shipLength, row, column, direction]);

            }
        } else if (direction === 'RIGHT') {
            if (isValidPosition(shipLength, row, column, direction)) {
                for (let i = 0; i < shipLength; i++) {
                    grid[row][column + i] = 'S';
                }

                this.ships.push([shipLength, row, column, direction]);

            }
        }
    }


    // receive an attack
    receiveAttack(row, column){
        const grid = this.grid;

        if (row <= 9 && row >= 0 && column <= 9 && column >= 0){
            if (grid[row][column] === 'S'){
                return true;
            } else {
                this.misses.push([row, column]);
                return false;
            }
        }
    }
}
