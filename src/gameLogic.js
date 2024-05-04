// basic computer logic
export function computerTurn(gameboard, lastHit){
    const ships = gameboard.ships;
    let randomRow = '';
    let randomColumn = '';
    let currentHit = '';

    if (lastHit){
        let lastRow = lastHit[0];
        let lastColumn = lastHit[1];
        let lastResult = lastHit[2];

        if (lastResult === 'H'){
            let possibilities = [[1,0], [-1,0], [0,1], [0,-1]];

            for (const possibility of possibilities){
                const X = lastRow + possibility[0];
                const Y = lastColumn + possibility[1];
                if (X >= 0 && X <= 9 && Y >= 0 && Y <= 9){
                    if (gameboard.grid[X][Y] === '0' || gameboard.grid[X][Y] === 'S'){
                        currentHit = gameboard.receiveAttack(X, Y);
                    }

                    if (currentHit){
                        return [X, Y, currentHit];
                    }
                }
            }
        }
    }

    while (true){
        randomRow = Math.floor(Math.random() * 10);
        randomColumn = Math.floor(Math.random() * 10);
        
        currentHit = gameboard.receiveAttack(randomRow, randomColumn);
        if (currentHit){
            return [randomRow, randomColumn, currentHit];
        }
    }
}