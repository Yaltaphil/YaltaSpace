
const
    list = document.querySelector("ul"),
    inputField = document.getElementById("newItem");

var
    toDo;


//Записыват список во временное хранилище браузера
function Store() {
    toDo = list.innerHTML;
    localStorage.setItem('toDoList', toDo);
}

//Обработка клика на элементе (смена статуса или удаление)
function processItem(listElement) {
    if (listElement.target.tagName === 'LI') {
        listElement.target.classList.toggle('checked');
        Store();
    }
    else if (listElement.target.tagName === 'SPAN') {
        listElement.target.parentNode.remove();
        Store();
    }
}

function addItem() {
    if (inputField.value === "") {
        inputField.style.transform = "rotateY(360deg)";
    } else {
        let li = document.createElement('li'),
            textNode = document.createTextNode(inputField.value);
        li.appendChild(textNode);
        document.getElementById("list").appendChild(li);
        let span = document.createElement('SPAN'),
            txt = document.createTextNode('X');
        span.className = 'close';
        span.appendChild(txt);
        li.appendChild(span);
        inputField.value = "";
        Store();
    }
}

//Если есть сохраненные задачи - загрузить
if (localStorage.getItem('toDoList')) {
    list.innerHTML = localStorage.getItem('toDoList');
}


list.addEventListener('click', processItem);


//ввод в помощью Enter
document.addEventListener('keypress',
    function (event) {
        if (event.keyCode === 13 || event.which === 13) {
            addItem();
        }
    });