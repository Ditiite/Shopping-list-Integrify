
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

function saveItem(targetName, currentEl) {
    const parentEl = currentEl.parentElement;

    const itemEl = parentEl.querySelector('#item');

    // Gets values from input
    const itemName = itemEl.value.trim();

    // parseInt use to tranform number string to number
    let itemQty = parseInt(parentEl.querySelector('#quantity').value);

    // If user don't put a number as value assign to default value 1
    if (isNaN(itemQty)) {
        itemQty = 1;
    }

    // If there is no value added for the name return
    if (!itemName) {
        return;
    }

    // Update item with new values in shoppingList
    shoppingList = editItem(targetName, itemName, itemQty, shoppingList);
    shoppingListUI();
}

// Update User Interfaces when script runs
addItemUI();
updateListUI();


function updateListUI() {
    shoppingListUI();
    doneListUI();
}

// toggle edit button
function toggleEditable(element) {
    element.parentElement.classList.add('editable');
}
