import { isValidPosition } from "./isValidPosition";

export class gameboard {
    constructor(rows, columns) {
        this.rows = rows;
        this.columns = columns;
        this.grid = this.createGrid(this.rows, this.columns);
    }

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

    placeShip(shipLength, row, column, direction) {
        const grid = this.grid;

        if (direction === 'UP') {
            if (isValidPosition(shipLength, row, column, direction)) {
                for (let i = 0; i < shipLength; i++) {
                    grid[row + i][column] = 'S';
                }
            }
        } else if (direction === 'RIGHT') {
            if (isValidPosition(shipLength, row, column, direction)) {
                for (let i = 0; i < shipLength; i++) {
                    grid[row][column + i] = 'S';
                }
            }
        }
    }

    receiveAttack(row, column){
        const grid = this.grid;

        if (row <= 9 && row >= 0 && column <= 9 && column >= 0){
            if (grid[row][column] === 'S'){
                return 'HIT';
            } else {
                return 'MISS';
            }
        }
    }
}
