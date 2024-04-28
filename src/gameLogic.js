// basic computer logic
export function computerTurn(playerGameboard){
    while (true){
        let randomRow = Math.floor(Math.random() * 10);
        let randomColumn = Math.floor(Math.random() * 10);
        
        if (playerGameboard.receiveAttack(randomRow, randomColumn)){
            break;
        }
    }
    
    return true;
}