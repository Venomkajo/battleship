// basic computer logic
export function computerTurn(gameboard){
    while (true){
        let randomRow = Math.floor(Math.random() * 10);
        let randomColumn = Math.floor(Math.random() * 10);
        
        if (gameboard.receiveAttack(randomRow, randomColumn)){
            break;
        }
    }
    
    return true;
}