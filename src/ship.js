// create ship class
export class ship {
    constructor(shipLength, row, column, direction) {
        this.shipLength = shipLength;
        this.row = row;
        this.column = column;
        this.direction = direction;
        this.hitCount = 0;
        this.positions = this.getShipPosition();
        this.sunk = false;
    }

    // update when ship is hit
    hit() {
        this.hitCount++;
        this.isSunk();
    }

    // check if ship sunk
    isSunk() {
        if (this.hitCount === this.shipLength){
            this.sunk = true;
            return true;
        } else {
            return false;
        }
    }

    getShipPosition() {
        let positions = [];
        if (this.direction === 'DOWN'){
            for (let i = 0; i < this.shipLength; i++) {
                positions.push([this.row + i, this.column]);
            }
        } else {
            for (let i = 0; i < this.shipLength; i++) {
                positions.push([this.row, this.column + i]);
            }
        }
        return positions;
    }
}