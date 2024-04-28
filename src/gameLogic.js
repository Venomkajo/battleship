export function computerTurn(playerGameboard){
    let randomRow = Math.floor(Math.random() * 10);
    let randomColumn = Math.floor(Math.random() * 10);

    playerGameboard.receiveAttack(randomRow, randomColumn);
    return true;
}