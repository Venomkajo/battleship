// check for valid position in grid
export function isValidPosition(shipLength, row, column, direction) {
    if (direction === 'DOWN') {
        if (row <= 9 && row >= 0 && column <= 9 && column >= 0 && row + shipLength - 1 <= 9) {
            return true;
        } else {
            return false;
        }
    } else if (direction === 'RIGHT') {
        if (row <= 9 && row >= 0 && column <= 9 && column >= 0 && column + shipLength - 1 <= 9) {
            return true;
        } else {
            return false;
        }
    }
}


// check if neighboring squares contain a ship
export function checkNearbySquares(grid, shipLength, row, column, direction){
    let initialRow = 0;
    let initialColumn = 0;

    for (let z = 0; z < shipLength; z++){

        if (direction === "DOWN"){
            initialRow = row + z;
            initialColumn = column;
        } else {
            initialRow = row;
            initialColumn = column + z;
        }
        
        // get every nearby square and check if it's a ship
        for (let i = -1; i <= 1; i++) {
            for (let j = -1; j <= 1; j++) {
                let newRow = 0;
                let newColumn = 0;

                if (direction === "DOWN") {
                    newRow = initialRow + i;
                    newColumn = initialColumn + j;
                } else {
                    newRow = initialRow + j;
                    newColumn = initialColumn + i;
                }

                if (isValidPosition(1, newRow, newColumn, direction)){
                    if (grid[newRow][newColumn] === 'S'){
                        return false;
                    }
                }
            }
        }
    }

    return true;
}