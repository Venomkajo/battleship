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
    const playerVsComputerButton = document.createElement('button');
    playerVsComputerButton.textContent = 'Player VS Computer';
    playerVsComputerButton.classList.add('start-button');

    // create player vs player button
    const playerVsPlayerButton = document.createElement('button');
    playerVsPlayerButton.textContent = 'Player VS Player';
    playerVsPlayerButton.classList.add('start-button');

    // create placeholder button
    const randomButton = document.createElement('button');
    randomButton.textContent = 'Randomize the color!';
    randomButton.classList.add('start-button');



    // append the items
    container.appendChild(playerVsComputerButton);
    container.appendChild(playerVsPlayerButton);
    container.appendChild(randomButton);
    body.appendChild(header);
    body.appendChild(container);

    // load the player vs computer
    playerVsComputerButton.addEventListener('click', function(){
        loadVsComputer();
    });

    // load the player vs player
    playerVsPlayerButton.addEventListener('click', function(){
        loadVsPlayer();
    });

    // randomize body color
    randomButton.addEventListener('click', function(){
        const red = Math.floor(Math.random() * 256);
        const green = Math.floor(Math.random() * 256);
        const blue = Math.floor(Math.random() * 256);

        const color = `rgb(${red},${green},${blue})`;

        body.style.backgroundColor = color;
    });
}