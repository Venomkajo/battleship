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

export function isShipNearby(grid, size, row, column, direction){
    if (grid[row][column] === 'S'){
        return true;
    }

    let deltas = [];
    let tempRow = 0;
    let tempColumn = 0;

    if (direction === 'UP'){
        for (let i = 0; i < size; i++) {
            tempRow = row + i;
            tempColumn = column + i;
            deltas.push([tempRow - 1, tempColumn - 1]);
            deltas.push([tempRow - 1, tempColumn + 1]);
            deltas.push([tempRow - 1, tempColumn]);
            deltas.push([tempRow + 1, tempColumn]);
            deltas.push([tempRow + 1, tempColumn - 1]);
            deltas.push([tempRow + 1, tempColumn + 1]);
        } 
        deltas.push([row + size + 1, column]);
        deltas.push([row - 1, column]);
    } else if (direction === 'RIGHT'){
        for (let i = 0; i < size; i++) {
            tempRow = row + i;
            tempColumn = column + i;
            deltas.push([tempRow - 1, tempColumn - 1]);
            deltas.push([tempRow - 1, tempColumn + 1]);
            deltas.push([tempRow, tempColumn - 1]);
            deltas.push([tempRow, tempColumn + 1]);
            deltas.push([tempRow + 1, tempColumn - 1]);
            deltas.push([tempRow + 1, tempColumn + 1]);
        }
        deltas.push([tempRow, column + size + 1]);
        deltas.push([tempRow, column - 1]);
    }

    for (const [deltaRow, deltaColumn] of deltas){

        if (isValidPosition(size, deltaRow, deltaColumn, direction)){
            if (grid[deltaRow][deltaColumn] === 'S'){
                return true;
            }
        }
    }

    return false;
}