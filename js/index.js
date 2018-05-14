/**
 * Shopping list
 */

let shoppingList = [{
    name: "Ted baker shoes",
    quantity: 2
}, {
    name: "Headphones",
    quantity: 2
}, {
    name: "Chocolates",
    quantity: 5
}, {
    name: "Banana",
    quantity: 15
}];

let doneList = [];

// Shopping list
function renderShoppingList() {
    let containerEl = document.querySelector('#shopping-list');
    let listEl = containerEl.querySelector('.list');

    listEl.innerHTML = '';

    shoppingList.forEach( shoppingItem => {
        let itemEl = document.createElement('li');

        let doneCheckEl = document.createElement('input');
        doneCheckEl.type = 'checkbox';
        doneCheckEl.name = 'done-check';
        doneCheckEl.addEventListener('change', event => {
            shoppingList = removeItem(shoppingItem, shoppingList);
            addItem(shoppingItem, doneList);

            renderShoppingList();
            renderDoneList();
        });
        itemEl.appendChild(doneCheckEl);

        let nameEl = document.createElement('span');
        nameEl.innerHTML = shoppingItem.name;
        itemEl.appendChild(nameEl);

        let quantityEl = document.createElement('span');
        quantityEl.innerHTML = shoppingItem.quantity;
        itemEl.appendChild(quantityEl);


        let btnDelete = document.createElement('button');
        btnDelete.classList.add('btn-delete');
        btnDelete.innerHTML = 'Delete';
        btnDelete.addEventListener('click', event => {
            shoppingList = removeItem(shoppingItem, shoppingList);
            renderShoppingList();
        });

        itemEl.appendChild(btnDelete);


        listEl.appendChild(itemEl);
    });
}

// Add item
function addItemPanel() {
    let containerEl = document.querySelector('#add-item-panel');
    let formEl = containerEl.querySelector('#add-item-form');

    formEl.addEventListener('submit', event => {
        event.preventDefault();
        let item = {};

        item.name = formEl.querySelector('input[name=item]').value;
        item.quantity = formEl.querySelector('input[name=quantity]').value;

        if (item.name) {
            formEl.reset();
            addItem(item, shoppingList);
            renderShoppingList();
        }        
    })
}


// functions that works with list
function addItem(targetItem, targetList) {
    targetList.push(targetItem);
}
function removeItem(targetItem, targetList) {
    let newList = [];

    targetList.forEach( item => {
        if (item.name !== targetItem.name) {
            newList.push(item);
        }
    });

    return newList;
}


// Done list
function renderDoneList() {
    let containerEl = document.querySelector('#done-list');
    let listEl = containerEl.querySelector('.list');

    listEl.innerHTML = '';

    doneList.forEach( shoppingItem => {
        let itemEl = document.createElement('li');

        let nameEl = document.createElement('span');
        nameEl.innerHTML = shoppingItem.name;
        itemEl.appendChild(nameEl);

        let quantityEl = document.createElement('span');
        quantityEl.innerHTML = shoppingItem.quantity;
        itemEl.appendChild(quantityEl);

        
        let btnUndo = document.createElement('button');
        btnUndo.classList.add('btn-undo');
        btnUndo.innerHTML = 'Undo';
        btnUndo.addEventListener('click', event => {
            doneList = removeItem(shoppingItem, doneList);
            addItem(shoppingItem, shoppingList);

            renderShoppingList();
            renderDoneList();
        });
        itemEl.appendChild(btnUndo);

        let btnDelete = document.createElement('button');
        btnDelete.classList.add('btn-delete');
        btnDelete.innerHTML = 'Delete';
        btnDelete.addEventListener('click', event => {
            doneList = removeItem(shoppingItem, doneList);
            renderDoneList();
        });
        itemEl.appendChild(btnDelete);



        listEl.appendChild(itemEl);
    });
}

// Start application

renderShoppingList();
addItemPanel();
renderDoneList();