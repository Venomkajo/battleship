// basic computer logic
export function computerTurn(gameboard, lastHit){
    const ships = gameboard.ships;
    let currentHit = '';
    let possibilities = '';

    // if last hit exist, the function ran before
    if (lastHit){
        let lastRow = lastHit[0];
        let lastColumn = lastHit[1];
        let lastResult = lastHit[2];

        // if last result was a hit use it for logic
        if (lastResult === 'H'){

            for (const ship of ships){
                if (ship.sunk && ship.hitCount >= 2){
                    for (const position of ship.positions){
                        let possibleRow = position[0];
                        let possibleColumn = position[1];
        
                        if (lastColumn === possibleColumn && lastRow === possibleRow){
                            if (ship.direction === "DOWN"){
                                possibilities = [[1,0], [-1,0]];  
                            } else {
                                possibilities = [[0,1], [0,-1]];
                            }
                        }
                    }
                }
                }
            
            if (!possibilities){
                possibilities = [[1,0], [-1,0], [0,1], [0,-1]];
            }

            for (const possibility of possibilities){
                const X = lastRow + possibility[0];
                const Y = lastColumn + possibility[1];
                currentHit = gameboard.receiveAttack(X, Y);

                if (currentHit){
                    return [X, Y, currentHit];
                }
            }
        }
    }

    // if last hit was a miss fire at random
    return fireAtRandom(gameboard);
}

function fireAtRandom(gameboard){
    let randomRow = '';
    let randomColumn = '';

    while (true){
        randomRow = Math.floor(Math.random() * 10);
        randomColumn = Math.floor(Math.random() * 10);
        
        let currentHit = gameboard.receiveAttack(randomRow, randomColumn);
        if (currentHit){
            return [randomRow, randomColumn, currentHit];
        }
    }
}