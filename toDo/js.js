const list = document.querySelector("ul"),
    inputField = document.getElementById("newItem"),
    addButton = document.querySelector("#addNewItem");

var toDoListContainer;

function storeToLocal() {
    toDoListContainer = list.innerHTML;
    localStorage.setItem('toDoList', toDoListContainer);
}

//Обработка клика на элементе (смена статуса или удаление)
function processItem(listElement) {
    if (listElement.target.tagName === 'LI') {
        listElement.target.classList.toggle('checked');
        storeToLocal();
    }
    else if (listElement.target.tagName === 'SPAN') {
        listElement.target.parentNode.remove();
        storeToLocal();
    }
}

function addListItem() {
    if (inputIsValid()) {
        let listElement = document.createElement('li'),
            textNode = document.createTextNode(inputField.value);
        listElement.appendChild(textNode);
        document.getElementById("list").appendChild(listElement);
        let spanBlock = document.createElement('SPAN'),
            textBlock = document.createTextNode('🗙');
        spanBlock.className = 'close';
        spanBlock.appendChild(textBlock);
        listElement.appendChild(spanBlock);
        inputField.value = "";
        storeToLocal();
        inputField.focus();
    }
}

function inputIsValid() {
    if (inputField.value === "") {
        inputField.style.transform = "scale(1.03,1.25)";
        setTimeout(() => inputField.style.transform = "none", 500);
        return false;
    }
    return true;
}

if (localStorage.getItem('toDoList')) {
    list.innerHTML = localStorage.getItem('toDoList');
}

document.addEventListener('keypress',
    function (event) {
        if (event.keyCode === 13 || event.which === 13) {
            addListItem();
        }
    });

list.addEventListener('click', processItem);
addButton.addEventListener('click', addListItem);