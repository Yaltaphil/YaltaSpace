
function assert(value, desctiption) {
    var li = document.createElement("li");
    li.className = value ? "pass" : "fail";
    li.appendChild(document.createTextNode(desctiption));
    document.getElementById("results").appendChild(li);
}
