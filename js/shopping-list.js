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


// Select the targeted list
const shoppingListEl = document.querySelector('#shopping-list .list');
const doneListEl = document.querySelector('#done-list .list');

//call function for different lists
renderList(shoppingListEl, shoppingList, 'shoppingList');
renderList(doneListEl, doneList, 'doneList');

// Renders the list 
function renderList(targetListEl, list, type) {
    targetListEl.innerHTML = '';
    list.forEach(listItem => {
        const listEl = document.createElement('li');
        let html = '';

        // Create the HTML for Shopping list
        if (type === 'shoppingList') {
            html = `
                <input type="checkbox" name="done-check" />
                <span>${listItem.name}</span>
                <span>${listItem.quantity}</span>
                <button class="btn-delete" onclick="shoppingListDelete('${listItem.name}')" ><i class="fas fa-trash-alt"></i></button>
            `;

        // Create the HTML for Done list
        } else if(type === 'doneList') {
            html = `
                <span>${listItem.name}</span>
                <span>${listItem.quantity}</span>
                <button class="btn-undo">Undo</button>
                <button class="btn-delete"><i class="fas fa-trash-alt"></i></button>
            `;
        }

        // Print it out in HTML to the targeted list
        listEl.innerHTML = html;
    
        targetListEl.appendChild(listEl);
    });

};


// Move item to other list
function addItem(targetList, targetItemName) {
    targetList.push(targetlist);
}

function removeItem(targetItem, targetList) {
    return targetList.filter(item => item.name !== targetItem.name);
}

function addItemComponent() {
    // Select the targeted elements
    const containerEl = document.querySelector('#add-item-panel');
    const formEl = containerEl.querySelector('#add-item-form');

    const addBtn = formEl.querySelector('.btn-add');

    // Add eventListener for the submit button
    formEl.addEventListener('submit', (event) => {
        event.preventDefault();
        
        // Gets values from input
        const itemName = formEl.querySelector('#item').value;
    
        // parseInt use to tranform number string to number
        const itemQuant = parseInt(formEl.querySelector('#quantity').value);

        // If user don't put a number as value assign to default value 1
        if (isNaN(itemQuant)) {
            itemQuant = 1;
        }

        // If there is no value added for the name return
        if (!itemName) {
            return;
        }

        // Push new values to the shopping list
        shoppingList.push({
            name: itemName,
            quantity: itemQuant
            
        });
        console.log(shoppingList);
        // Reset input fields to be empty after every input
        formEl.reset();
    });
    
}

addItemComponent();

