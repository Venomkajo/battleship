import { hitInformation } from "./hitInformation";

// basic computer logic
export function computerTurn(gameboard, hitInfo){
    let currentHit = '';
    let possibilities = '';

    // if last hit exist, the function ran before
    if (hitInfo){
        let lastRow = hitInfo.row;
        let lastColumn = hitInfo.column;
        let lastResult = hitInfo.hit;
        let lastShip = hitInfo.ship;

        // if the ship hasn't sunk yet
        if (lastShip.sunk === false){

            // if the last hit was a miss, hit a ship now
            if (lastResult === '0'){
                return attackValidShipPosition(gameboard, lastShip);
            }

            // if last result was a hit use it and directions
            if (lastResult === 'H'){
                if (lastShip.hitCount >= 2){
                    for (let i = 0; i < lastShip.positions.length; i++){
                        // get possibilities based on the ship direction

                        if (lastShip.direction === "DOWN"){
                            possibilities = [[1,0], [-1,0]];  
                        } else {
                            possibilities = [[0,1], [0,-1]];
                        }
                    }
                }
            }

            // if no possibilities set them to all directions
            if (!possibilities){
                possibilities = [[1,0], [-1,0], [0,1], [0,-1]];
            }

            // for every possibility attempt to attack
            for (const possibility of possibilities){
                const X = lastRow + possibility[0];
                const Y = lastColumn + possibility[1];
                currentHit = gameboard.receiveAttack(X, Y);

                if (currentHit){
                    return new hitInformation(currentHit, X, Y, lastShip);
                }
            }

            // if all possibilities fail use this to hit a ship
            attackValidShipPosition(gameboard, lastShip);

        } else {
            // if the current ship is already sunk fire at random
            return fireAtRandom(gameboard);
        }
    }

    // if running for the first time fire at random
    return fireAtRandom(gameboard);
}

// generate a random value and attack with it until the board accepts the hit
function fireAtRandom(gameboard){
    let randomRow = '';
    let randomColumn = '';
    let selectedShip = '';

    while (true){
        randomRow = Math.floor(Math.random() * 10);
        randomColumn = Math.floor(Math.random() * 10);
        
        let currentHit = gameboard.receiveAttack(randomRow, randomColumn);
        if (currentHit){
            shipLoop: for (const ship of gameboard.ships){
                for (const position of ship.positions){
                    if (position[0] === randomRow && position[1] === randomColumn){
                        selectedShip = ship;
                        break shipLoop;
                    }
                }
            }
            return new hitInformation(currentHit, randomRow, randomColumn, selectedShip);
        }
    }
}

// attack the current ship
function attackValidShipPosition(gameboard, lastShip){
    let X, Y, currentHit = '';
    const possibilities = [[1,0], [-1,0], [0,1], [0,-1]];

    // if no last ship exists attack randomly
    if (!lastShip){
        return fireAtRandom(gameboard);
    }
    // if a ship tile is neighboring an already hit tile, hit it
        whileShip: for (let i = 0; i < lastShip.positions.length; i++){
            X = lastShip.positions[i][0];
            Y = lastShip.positions[i][1];

            for (const possibility of possibilities){
                let newX = X + possibility[0];
                let newY = Y + possibility[1];
                if (newX <= 9 && newX >= 0 && newY <= 9 && newY >= 0){
                    // if the the ship is neighboring a hit tile
                    if (gameboard.grid[X][Y] === 'S' && gameboard.grid[newX][newY] === 'H'){
                        currentHit = gameboard.receiveAttack(X, Y);
                        if (currentHit){
                            break whileShip;
                        }
                    }
                }
            }
        }
    
        if (currentHit){
            return new hitInformation(currentHit, X, Y, lastShip);
        } else {
            return fireAtRandom(gameboard);
        }
    }