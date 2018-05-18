

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