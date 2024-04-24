export function isValidPosition(shipLength, row, column, direction) {
    if (direction === 'UP') {
        if (row <= 9 && row >= 0 && column <= 9 && column >= 0 && row + shipLength <= 9) {
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