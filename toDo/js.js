

var list = document.querySelector("ul");


var toDo;

//Записыват список во временное хранилище браузера
function Store() {
    toDo = list.innerHTML;
    localStorage.setItem('toDo', toDo);
}


list.addEventListener('click', processItem);


//Обработка клика на элементе (смена статуса или удаление)
function processItem(listElement) {

    if (listElement.target.tagName === 'LI') {
        listElement.target.classList.toggle('checked');
        Store();
    }
    else if (listElement.target.tagName === 'SPAN') {
        var div = listElement.target.parentNode;
        div.remove();
        Store();
    }
}



function addItem() {

    var li = document.createElement('li'),
        inputValue = document.getElementById("newItem").value,
        t = document.createTextNode(inputValue);

    li.appendChild(t);

    if (inputValue == "") {
        alert("Нужно ввести дело!");
    } else {
        document.getElementById("list").appendChild(li);
    }

    document.getElementById('newItem').value = "";

    var span = document.createElement('SPAN'),
        txt = document.createTextNode('X');

    span.className = 'close';
    span.appendChild(txt);
    li.appendChild(span);
    Store();
}


//Если есть сохраненные задачи - загрузить
if (localStorage.getItem('toDo')) {
    list.innerHTML = localStorage.getItem('toDo');
}

//ввод в помощью Enter
document.addEventListener('keypress',
    function (event) {
        if (event.keyCode === 13 || event.which === 13) {
            addItem();
        }
    });
