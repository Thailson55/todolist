const addButton = document.querySelector('.add');
let valorInput = document.querySelector('.input');
const container = document.querySelector('.container');

class Item {
    constructor(itemName) {
        // Criando o item div
        this.createDiv(itemName);
    }

    createDiv() {
        let input = document.createElement('input');
        input.value = itemName;
        input.disabled = true;
        input.classList.add('item_input');
        input.type = 'text';

        let itemBox = document.createElement('div');
        itemBox.classList.add('item');

        let editButton = document.createElement('button');
        editButton.innerHTML = 'EDIT';
        editButton.classList.add('edit');

        let removeButton = document.createElement('button');
        removeButton.innerHTML = 'REMOVE';
        removeButton.classList.add('remove');

        container.appendChild(itemBox);

        itemBox.appendChild(input);
        itemBox.appendChild(editButton);
        itemBox.appendChild(removeButton);

        editButton.addEventListener('click', () => this.edit(input));

        removeButton.addEventListener('click', () => this.remove(itemBox));
    }

    edit(input) {
        input.disabled = !input.disabled;
    }

    remove(item) {
        container.removeChild(item);
    }
}

function check() {
    if (valorInput.value !== '') {
        const item = new Item(valorInput);
    }
}

addButton.addEventListener('click', check);
