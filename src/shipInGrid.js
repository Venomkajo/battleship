// check if ship is there
export function shipInGrid(row, column, ship){
    if ((ship.direction === 'UP' && row >= ship.row && row < ship.row + ship.shipLength && column === ship.column) ||
        (ship.direction === 'RIGHT' && row === ship.row && column >= ship.column && column < ship.column + ship.shipLength)){
            return true;
    } else {
        return false;
    }
}