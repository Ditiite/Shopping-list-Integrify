

// Renders the list 
function renderList(targetListEl, list, type) {
    targetListEl.innerHTML = '';
    list.forEach(listItem => {
        const listEl = document.createElement('li');
        listEl.classList.add('xeditable');
        let html = '';

        // Create the HTML for Shopping list
        if (type === 'shoppingList') {
            html = `
            <label class="container-checkbox col-1">
                <input type="checkbox" onchange="onCompleted('${listItem.name}')" name="done-check"></input>
                <span class="checkmark"></span>
            </label>
            <div class="list-div">
                <input class="editable-show col-2" type="text" name="item" id="item" value="${listItem.name}" />
                <input class="editable-show col-3" type="number" min="1" name="quantity" id="quantity" value="${listItem.quantity}" />
                <button class="editable-show btn-save col-4"><i class="far fa-save"></i></button>
                <span class="input-text editable-hide col-2">${listItem.name}</span>
                <span class="editable-hide col-3">${listItem.quantity}</span>
                <button class="btn-edit editable-hide col-4" onclick="onDeleteShoppingList('${listItem.name}')" ><i class="fas fa-pencil-alt"></i></button>
                <button class="btn-delete col-5" onclick="onDeleteShoppingList('${listItem.name}')" ><i class="fas fa-trash-alt"></i></button>
            </div>
                `;

        // Create the HTML for Done list
        } else if(type === 'doneList') {
            html = `
                <button class="btn-undo" onclick="onUndo('${listItem.name}')">Undo</button>
                <span>${listItem.name}</span>
                <span>${listItem.quantity}</span>
                <button class="btn-delete" onclick="onDeleteDoneList('${listItem.name}')"><i class="fas fa-trash-alt"></i></button>
            `;
        }

        // Print it out in HTML to the targeted list
        listEl.innerHTML += html;
    
        targetListEl.appendChild(listEl);
    });
}