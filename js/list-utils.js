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

function editItem(targetName, name, quantity, targetList) {
    let editList = [];
    for(let i = 0; i < targetList.length; i ++) {
        let item = targetList[i];
        if (targetName === item.name) {
            editList.push({
                name: name,
                quantity: quantity
            });
        } else {
            editList.push(item);
        }
    }
    return editList;
   
}

/**
 * Collapse shopping list items
 */
document.querySelectorAll('.collapse').forEach(collapseTrigger => {
    collapseTrigger.addEventListener('click', function() {
        this.parentElement.querySelector('.list').classList.toggle('hidden');
    });
});
