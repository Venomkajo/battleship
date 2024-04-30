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
