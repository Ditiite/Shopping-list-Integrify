
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

let doneList = [{
    name: "done eating apple",
    quantity: 7
},
{
    name: "toilet paper",
    quantity: 7
}];


function onCompleted(targetName) {
let item = getItem(targetName, shoppingList);
shoppingList = deleteItem(targetName, shoppingList);
addItem(item.name, item.quantity, doneList);
setTimeout(updateListUI, 300);
}

function onUndo(targetName) {
let item = getItem(targetName, doneList);
doneList = deleteItem(targetName, doneList);
addItem(item.name, item.quantity, shoppingList);
updateListUI();
}

function onDeleteShoppingList(targetName) {
shoppingList = deleteItem(targetName, shoppingList);
shoppingListUI();
}

function onDeleteDoneList(targetName) {
doneList = deleteItem(targetName, doneList);
doneListUI();
}

// Update User Interfaces when script runs
addItemUI();
updateListUI();


function updateListUI() {
shoppingListUI();
doneListUI();
}




/**
* Push item to target list
* @param {string} name 
* @param {number} quantity 
* @param {Array} targetList 
*/
function addItem(name, quantity, targetList) {
targetList.push({
    name: name,
    quantity: quantity
});
}

/**
* Gets item from target list
* @param {string} targetname 
* @param {Array} targetList 
*/
function getItem(targetname, targetList) {
return targetList.find( item => item.name === targetname );
}

/**
* Delete item from targetList
* Note: It does not modify the target list. But returns new list without the target item
* @param {string} targetName 
* @param {Array} targetList 
*/
function deleteItem(targetName, targetList) {
let newList = [];

for(let i = 0; i < targetList.length; i++) {
    let item = targetList[i];
    if(item.name !== targetName) {
        newList.push(item);
    }
}

return newList;
}


// Renders the list 
function renderList(targetListEl, list, type) {
targetListEl.innerHTML = '';
list.forEach(listItem => {
    const listEl = document.createElement('li');
    let html = '';

    // Create the HTML for Shopping list
    if (type === 'shoppingList') {
        html = `
            <label class="container-checkbox">
                <input type="checkbox" onchange="onCompleted('${listItem.name}')" name="done-check"></input>
                <span class="checkmark"></span>
            </label>
            <span class="input-text">${listItem.name}</span>
            <span>${listItem.quantity}</span>
            <button class="btn-delete" onclick="onDeleteShoppingList('${listItem.name}')" ><i class="fas fa-trash-alt"></i></button>
        `;

    // Create the HTML for Done list
    } else if(type === 'doneList') {
        html = `
            <span>${listItem.name}</span>
            <span>${listItem.quantity}</span>
            <button class="btn-undo" onclick="onUndo('${listItem.name}')">Undo</button>
            <button class="btn-delete" onclick="onDeleteDoneList('${listItem.name}')"><i class="fas fa-trash-alt"></i></button>
        `;
    }

    // Print it out in HTML to the targeted list
    listEl.innerHTML = html;

    targetListEl.appendChild(listEl);
});
}

function shoppingListUI() {
// Select the targeted list
const shoppingListEl = document.querySelector('#shopping-list .list');


//call function for different lists
renderList(shoppingListEl, shoppingList, 'shoppingList');
}

function doneListUI() {
const doneListEl = document.querySelector('#done-list .list');
renderList(doneListEl, doneList, 'doneList');
}

/**
* UI to add item to shopping list
*/

function addItemUI() {
// Select the targeted elements
const containerEl = document.querySelector('#add-item-panel');
const formEl = containerEl.querySelector('#add-item-form');

const addBtn = formEl.querySelector('.btn-add');

// Add eventListener for the submit button
formEl.addEventListener('submit', (event) => {
    
    event.preventDefault();

    const itemEl = formEl.querySelector('#item');

    // Gets values from input
    const itemName = itemEl.value.trim();

    // parseInt use to tranform number string to number
    let itemQty = parseInt(formEl.querySelector('#quantity').value);

    // If user don't put a number as value assign to default value 1
    if (isNaN(itemQty)) {
        itemQty = 1;
    }

    // If there is no value added for the name return
    if (!itemName) {
        return;
    }

    // Push new values to the shopping list
    addItem(itemName, itemQty, shoppingList);
    
    // Reset input fields to be empty after every input
    formEl.reset();
    itemEl.focus();

    shoppingListUI();
});
}
