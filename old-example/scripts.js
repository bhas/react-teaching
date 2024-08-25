// JavaScript to handle adding new items to the card list
let itemCount = 0;

document.addEventListener('DOMContentLoaded', function() {
    const addButton = document.getElementById('addButton');
    addButton.addEventListener('click', addItem);
});

function addItem() {
    itemCount++;
    const cardContainer = document.getElementById('cardContainer');
    
    const card = document.createElement('div');
    card.className = 'card';

    const cardText = document.createElement('p');
    cardText.className = 'card-text';
    cardText.textContent = 'Item ' + itemCount;

    const removeButton = document.createElement('button');
    removeButton.textContent = 'Remove';
    removeButton.onclick = function() {
        cardContainer.removeChild(card);
    };

    card.appendChild(cardText);
    card.appendChild(removeButton);
    cardContainer.appendChild(card);
}