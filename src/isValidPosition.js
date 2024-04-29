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

    if (direction === 'UP'){
        for (let i = 1; i <= size; i++) {
            for (let j = 1; j <= size; j++) {
                deltas.push([0 + row, i + column]);
                deltas.push([i + row, i + column]);
                deltas.push([0 + row, -i + column]);
                deltas.push([-i + row, -i + column]);
                deltas.push([i + row, -i + column]);
                deltas.push([-i + row, i + column]);
            }
        } 
        deltas.push([row + size + 1, 0]);
        deltas.push([row - 1, 0]);
    } else if (direction === 'RIGHT'){
        for (let i = 1; i <= size; i++) {
            for (let j = 1; j <= size; j++) {
                deltas.push([i + row, 0 + column]);
                deltas.push([i + row, i + column]);
                deltas.push([-i + row, 0 + column]);
                deltas.push([-i + row, -i + column]);
                deltas.push([i + row, -i + column]);
                deltas.push([-i + row, i + column]);
            }
        }
        deltas.push([0, column + size + 1]);
        deltas.push([0, column - 1]);
    }

    for (const [deltaRow, deltaColumn] of deltas){

        if (isValidPosition(size, deltaRow, deltaColumn, direction)){
            if (grid[deltaColumn][deltaColumn] === 'S'){
                return true;
            }
        }
    }

    return false;
}