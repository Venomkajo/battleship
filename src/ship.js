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
        this.hitCount++;
        this.isSunk();
    }

    // check if ship sunk
    isSunk() {
        if (this.hitCount >= this.shipLength){
            this.sunk = true;
            return true;
        } else {
            return false;
        }
    }
}