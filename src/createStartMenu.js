import { loadVsComputer } from "./loadVsComputer";
import { loadVsPlayer } from "./loadVsPlayer";

export function createStartMenu() {
    // get html items
    const body = document.querySelector('body');
    const header = document.createElement('header');
    const container = document.createElement('div');

    while (body.firstChild){
        body.removeChild(body.firstChild);
    }

    // add classes and text to html items
    header.textContent = 'Choose the gamemode!';
    container.classList.add('container');

    // create player vs computer button
    const playerVsComputerButtonNormal = document.createElement('button');
    playerVsComputerButtonNormal.textContent = 'Player VS Computer - NORMAL';
    playerVsComputerButtonNormal.classList.add('start-button');

    // create player vs computer easy button
    const playerVsComputerButtonEasy = document.createElement('button');
    playerVsComputerButtonEasy.textContent = 'Player VS Computer - EASY';
    playerVsComputerButtonEasy.classList.add('start-button');
    
    // create player vs player button
    const playerVsPlayerButton = document.createElement('button');
    playerVsPlayerButton.textContent = 'Player VS Player';
    playerVsPlayerButton.classList.add('start-button');



    // append the items
    container.appendChild(playerVsComputerButtonNormal);
    container.appendChild(playerVsComputerButtonEasy);
    container.appendChild(playerVsPlayerButton);
    body.appendChild(header);
    body.appendChild(container);

    // load the player vs computer
    playerVsComputerButtonNormal.addEventListener('click', function(){
        loadVsComputer(false);
    });

    playerVsComputerButtonEasy.addEventListener('click', function(){
        loadVsComputer(true);
    })

    // load the player vs player
    playerVsPlayerButton.addEventListener('click', function(){
        loadVsPlayer();
    });
}