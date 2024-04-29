// check for valid position in grid
export function isValidPosition(shipLength, row, column, direction) {
    if (direction === 'UP') {
        if (row <= 9 && row >= 0 && column <= 9 && column >= 0 && row + shipLength - 1 <= 9) {
            return true;
        } else {
            return false;
        }
    } else if (direction === 'RIGHT') {
        if (row <= 9 && row >= 0 && column <= 9 && column >= 0 && column + shipLength <= 9) {
            return true;
        } else {
            return false;
        }
    }
}

// check if ship is there
export function shipInGrid(row, column, ship){
    if ((ship.direction === 'UP' && row >= ship.row && row < ship.row + ship.shipLength && column === ship.column) ||
        (ship.direction === 'RIGHT' && row === ship.row && column >= ship.column && column < ship.column + ship.shipLength)){
            return true;
    } else {
        return false;
    }
}

// check if there is a ship near the proposed ship
export function isShipNearby(grid, size, row, column, direction){
    if (grid[row][column] === 'S'){
        return true;
    }

    let possibilities = [];
    let tempRow = 0;
    let tempColumn = 0;

    if (direction === 'UP'){
        for (let i = 0; i < size; i++) {
            tempRow = row + i;
            tempColumn = column + i;
            possibilities.push([tempRow - 1, tempColumn - 1]);
            possibilities.push([tempRow - 1, tempColumn + 1]);
            possibilities.push([tempRow - 1, tempColumn]);
            possibilities.push([tempRow + 1, tempColumn]);
            possibilities.push([tempRow + 1, tempColumn - 1]);
            possibilities.push([tempRow + 1, tempColumn + 1]);
        } 
        possibilities.push([row + size + 1, column]);
        possibilities.push([row - 1, column]);
    } else if (direction === 'RIGHT'){
        for (let i = 0; i < size; i++) {
            tempRow = row + i;
            tempColumn = column + i;
            possibilities.push([tempRow - 1, tempColumn - 1]);
            possibilities.push([tempRow - 1, tempColumn + 1]);
            possibilities.push([tempRow, tempColumn - 1]);
            possibilities.push([tempRow, tempColumn + 1]);
            possibilities.push([tempRow + 1, tempColumn - 1]);
            possibilities.push([tempRow + 1, tempColumn + 1]);
        }
        possibilities.push([tempRow, column + size + 1]);
        possibilities.push([tempRow, column - 1]);
    }

    for (const [possibleRow, possibleColumn] of possibilities){

        if (isValidPosition(size, possibleRow, possibleColumn, direction)){
            if (grid[possibleRow][possibleColumn] === 'S'){
                return true;
            }
        }
    }

    return false;
}