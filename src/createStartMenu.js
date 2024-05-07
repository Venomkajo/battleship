import { loadVsComputer } from "./loadVsComputer";

export function createStartMenu() {
    // get html items
    const body = document.querySelector('body');
    const header = document.createElement('header');
    const container = document.createElement('div');
    const playerVsComputerButton = document.createElement('button');
    const otherButton = document.createElement('button');

    while (body.firstChild){
        body.removeChild(body.firstChild);
    }

    // add classes and text to html items
    header.textContent = 'Choose the gamemode!';
    container.classList.add('container');
    playerVsComputerButton.textContent = 'Player VS Computer';
    playerVsComputerButton.classList.add('start-button');
    otherButton.textContent = 'Randomize the color!';
    otherButton.classList.add('start-button');

    // append the items
    container.appendChild(playerVsComputerButton);
    container.appendChild(otherButton);
    body.appendChild(header);
    body.appendChild(container);

    // load the player vs computer
    playerVsComputerButton.addEventListener('click', function() {
        loadVsComputer();
    });

    otherButton.addEventListener('click', function() {
        const red = Math.floor(Math.random() * 256);
        const green = Math.floor(Math.random() * 256);
        const blue = Math.floor(Math.random() * 256);

        const color = `rgb(${red},${green},${blue})`;

        body.style.backgroundColor = color;
    });
}