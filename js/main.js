
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

