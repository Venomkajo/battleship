import { createVsComputer } from "./createVsComputer";
import { loadVsComputer } from "./loadVsComputer";

export function createStartMenu() {
    const body = document.querySelector('body');
    const header = document.createElement('header');
    const container = document.createElement('div');
    const playerVsComputerButton = document.createElement('button');
    const otherButton = document.createElement('button');

    while (body.firstChild){
        body.removeChild(body.firstChild);
    }

    header.textContent = 'Choose the gamemode!';
    container.classList.add('container');
    playerVsComputerButton.textContent = 'Player VS Computer';
    playerVsComputerButton.classList.add('start-button');
    otherButton.textContent = '-----';
    otherButton.classList.add('start-button');

    container.appendChild(playerVsComputerButton);
    container.appendChild(otherButton);
    body.appendChild(header);
    body.appendChild(container);

    playerVsComputerButton.addEventListener('click', function() {
        createVsComputer();
        loadVsComputer();
    });

    otherButton.addEventListener('click', function() {
        alert('-----');
    });
}