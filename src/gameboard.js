export class gameboard {
    constructor(rows, columns) {
        this.rows = rows;
        this.columns = columns;
        this.grid = this.createGrid(this.rows, this.columns)
    }

    createGrid(rows, columns){
        const grid = [];

        for (let i = 0; i < rows; i++){
            grid[i] = [];

            for (let j = 0; j < columns; j++) {
                grid[i][j] = '.';
            }
        }

        return grid;
    }
}