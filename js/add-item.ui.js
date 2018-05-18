
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
