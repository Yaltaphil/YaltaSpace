


var list = document.querySelector("ul");


var toDo;
function Store() {
    toDo = list.innerHTML;
    localStorage.setItem('toDo', toDo);
}


list.addEventListener('click', processItem);


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


if (localStorage.getItem('toDo')) {
    list.innerHTML = localStorage.getItem('toDo');
}





// var list = [],
//     listdiv = document.getElementById("list"),
//     newItem = document.getElementById("newItem");


// function addItem() {

//     var item = {
//         task: "",
//         done: false
//     };

//     item.task = newItem.value;
//     item.done = false;

//     list.push(item);

//     newItem.value = "";
//     showList();
// }


// function taskDone(n) {
//     list[n].done = true;
// }

// function taskUnDone(n) {
//     list[n].done = false;
// }


// function showList() {
//     clearList();
//     list.forEach(function show(next, i, arr) {
//         var d = document.createElement('span');
//         listdiv.appendChild(d);
//         d.innerHTML = '<input type="checkbox" class=”check"></input>' + list[i].task + "</br>";
//     });
// }


// function clearList() {
//     listdiv.innerHTML = "";
// }


// function updateStatus() {
//     // var checkboxes = document.querySelectorAll(".check");
//     // console.log(checkboxes);
//     // checkboxes.forEach( (next, i) => {
//     //     next.checked ? taskDone(i) : taskUnDone(i);
//     //     console.log(list[i].task, list[i].done);
//     // });
//     var checkboxes = document.getElementsByClassName("check");
//     console.log(checkboxes);
//     for (var i = 0; i < list.length; i++) {

//         checkboxes[i].checked ? taskDone(i) : taskUnDone(i);
//         console.log(checkboxes[i]);
//     }
// }