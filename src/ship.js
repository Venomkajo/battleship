// create ship class

export class ship {
    constructor(shipLength, row, column, direction) {
        this.shipLength = shipLength;
        this.row = row;
        this.column = column;
        this.direction = direction;
        this.hitCount = 0;
        this.sunk = false;
    }

    // update when ship is hit
    hit() {
        this.hitCount += 1;
    }

    // check if ship sunk
    isSunk() {
        if (this.hitCount >= this.length){
            this.sunk = true;
            return true;
        } else {
            return false;
        }
    }
}