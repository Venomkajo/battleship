import { gameboard } from "./gameboard.js";
import { player } from './player.js';
import { hideDisplay, updateEnemyGrid, updatePlayerGrid } from './updateDisplay.js';
import { createGrid } from './createDisplay.js';
import { createVsPlayer } from "./createVsPlayer";

export function loadVsPlayer(){
    createVsPlayer();

    let turn = true;
    let allowed = true;

    // create gameboards
    let playerOne = new player('player 1', new gameboard());
    console.log(playerOne);

    let playerTwo = new player('player 2', new gameboard());
    console.log(playerTwo);

    // create enemy and player ships
    playerOne.gameboard.generateRandomShips();
    playerTwo.gameboard.generateRandomShips();
    createGrid(playerOne.gameboard.grid);

    // update display
    updatePlayerGrid(playerOne.gameboard.grid, '.player');
    updateEnemyGrid(playerTwo.gameboard.grid, '.enemy');
    addTileListener(true);


    document.getElementById('randomButton').addEventListener('click', function(){
        // disable button in case of low-end pc
        document.getElementById('randomButton').disabled = 'true';
    
        // randomize the player's board
        playerOne.gameboard.generateNewBoard();
        updatePlayerGrid(playerOne.gameboard.grid, '.player');
        playerTwo.gameboard.generateNewBoard();
        updateEnemyGrid(playerTwo.gameboard.grid, '.enemy');
        turn = true;
        allowed = true;
    
        // enable button again
        document.getElementById('randomButton').disabled = '';
    });
    
    document.getElementById('resetButton').addEventListener('click', function(){
        // disable buttons in case of low-end pc
        document.getElementById('resetButton').disabled = 'true';
        document.getElementById('randomButton').disabled = 'true';
    
        // generate new boards
        playerOne.gameboard.generateNewBoard();
        updatePlayerGrid(playerOne.gameboard.grid, '.player');
        playerTwo.gameboard.generateNewBoard();
        updateEnemyGrid(playerTwo.gameboard.grid, '.enemy');
        turn = true;
        allowed = true;
    
        // enable buttons again
        document.getElementById('resetButton').disabled = '';
        document.getElementById('randomButton').disabled = '';
    });

    const switchBtn = document.getElementById('switchButton');
    switchBtn.disabled = 'true';
    switchBtn.addEventListener('click', function(){
        if (turn){
            updatePlayerGrid(playerTwo.gameboard.grid, '.player');
            updateEnemyGrid(playerOne.gameboard.grid, '.enemy');
            addTileListener(false);
        } else {
            updatePlayerGrid(playerOne.gameboard.grid, '.player');
            updateEnemyGrid(playerTwo.gameboard.grid, '.enemy');
            addTileListener(true);
        }
        allowed = true;
        turn = !turn;
        switchBtn.disabled = 'true';
    });

    // add event listeners to tiles
    function addTileListener(player){
        let playerOneTiles;
        let playerTwoTiles;

        if (!player){
            playerOneTiles = document.querySelectorAll('.player');
            playerTwoTiles = document.querySelectorAll('.enemy');
        } else {
            playerTwoTiles = document.querySelectorAll('.player');
            playerOneTiles = document.querySelectorAll('.enemy');
        }

        // Remove existing event listeners
        playerOneTiles.forEach(tile => {
            tile.removeEventListener('click', playerOneClickListener);
            tile.removeEventListener('click', playerTwoClickListener);
        });

        playerTwoTiles.forEach(tile => {
            tile.removeEventListener('click', playerOneClickListener);
            tile.removeEventListener('click', playerTwoClickListener);
        });

        // Add new event listeners
        playerOneTiles.forEach(tile => {
            tile.addEventListener('click', playerOneClickListener);
        });

        playerTwoTiles.forEach(tile => {
            tile.addEventListener('click', playerTwoClickListener);
        });
    }

    function playerOneClickListener(event) {
        playerOneListeners(event.target);
    }
    
    function playerTwoClickListener(event) {
        playerTwoListeners(event.target);
    }

    function playerOneListeners(tile){
        document.getElementById('randomButton').disabled = 'true';
        // if it's the player's turn
        if (turn && allowed){
            // if an attack was received
            if (playerTwo.gameboard.receiveAttack(parseInt(tile.dataset.row), parseInt(tile.dataset.column))){
                allowed = false;

                updateEnemyGrid(playerTwo.gameboard.grid, '.enemy');
                if (playerTwo.gameboard.checkForWin()){
                    alert('Victory for Player 1!');
                }

                setTimeout(function(){
                    hideDisplay('.player');
                    hideDisplay('.enemy');
                    switchBtn.disabled = '';
                }, 500);
            }
        }
    }

    function playerTwoListeners(tile){
        if (!turn && allowed){
            if (playerOne.gameboard.receiveAttack(parseInt(tile.dataset.row), parseInt(tile.dataset.column))){
                allowed = false;

                updateEnemyGrid(playerOne.gameboard.grid, '.enemy');
                if (playerOne.gameboard.checkForWin()){
                    alert('Victory for Player 2!');
                }

                setTimeout(function(){
                    hideDisplay('.player');
                    hideDisplay('.enemy');
                    switchBtn.disabled = '';
                }, 500);
            }
        }
    }
}   
