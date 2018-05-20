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
}, {
    name: "apple",
    quantity: 7
}
];

let doneList = [];

// Shopping list
function renderShoppingList() {
    const containerEl = document.querySelector('#shopping-list');
    const listEl = containerEl.querySelector('.list');

    listEl.innerHTML = '';

    shoppingList.forEach(shoppingItem => {
        const itemEl = document.createElement('li');

        const html = `
            <input type="checkbox" name="done-check" />
            <span>${shoppingItem.name}</span>
            <span>${shoppingItem.quantity}</span>
            <button class="btn-delete" ><i class="fas fa-trash-alt"></i></button>
        `;
        itemEl.innerHTML = html;

        const doneCheckEl = itemEl.querySelector('input[name=done-check]');
        doneCheckEl.addEventListener('change', event => {
            shoppingList = removeItem(shoppingItem, shoppingList);
            addItem(shoppingItem, doneList);
            setTimeout(() => {
                renderShoppingList();
                renderDoneList();
            }, 1150);
        });

        const btnDelete = itemEl.querySelector('button.btn-delete');
        btnDelete.addEventListener('click', event => {
            shoppingList = removeItem(shoppingItem, shoppingList);
            renderShoppingList();
        });

        listEl.appendChild(itemEl);
    });
}

// Add item
function addItemPanel() {
    const containerEl = document.querySelector('#add-item-panel');
    const formEl = containerEl.querySelector('#add-item-form');

    formEl.addEventListener('submit', event => {
        event.preventDefault();
        const item = {};

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
    return targetList.filter(item => item.name !== targetItem.name);
}


// Done list
function renderDoneList() {
    const containerEl = document.querySelector('#done-list');
    const listEl = containerEl.querySelector('.list');

    listEl.innerHTML = '';


    doneList.forEach(shoppingItem => {
        const itemEl = document.createElement('li');
        const nameEl = document.createElement('span');
        nameEl.innerHTML = shoppingItem.name;
        itemEl.appendChild(nameEl);

        const quantityEl = document.createElement('span');
        quantityEl.innerHTML = shoppingItem.quantity;
        itemEl.appendChild(quantityEl);


        const btnUndo = document.createElement('button');
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
        btnDelete.innerHTML = '<i class="fas fa-trash-alt delete"></i>';
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

function newFunction() {
    return 'check-style';
}

/**** Accordion 
const collapse = document.getElementsByClassName('accordion');

for (let i = 0; i < collapse.length; i++) {
    collapse[i].addEventListener("click", function() {
        let content = this.nextElementSibling;
        if (content.style.display === "block") {
            content.style.display = "none";
        } else {
            content.style.display = "block";
        }
    });
}*/