
function shoppingListUI() {
    // Select the targeted list
    const shoppingListEl = document.querySelector('#shopping-list .list'); 

    //call function for different lists
    renderList(shoppingListEl, shoppingList, 'shoppingList');
}
