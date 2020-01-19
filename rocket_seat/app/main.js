var listElement = document.querySelector("#app ul");
var inpuElement = document.querySelector("#app input");
var buttonElement = document.querySelector("#app button");

//transformar em JsonParse
var todos = JSON.parse(localStorage.getItem("list_todos")) || [];

function renderTodos() {
  listElement.innerHTML = "";

  for (todo of todos) {
    var todoElement = document.createElement("li");
    var todoText = document.createTextNode(todo);

    todoElement.appendChild(todoText);

    var linkElemnt = document.createElement("a");
    linkElemnt.setAttribute("href", "#");

    var pos = todos.indexOf(todo);

    linkElemnt.setAttribute("onclick", "removeTodo(" + pos + ")");
    var linkText = document.createTextNode("Excluir");

    linkElemnt.appendChild(linkText);
    todoElement.appendChild(linkElemnt);

    listElement.appendChild(todoElement);
  }
}
renderTodos();

function addTodo() {
  var todoText = inpuElement.value;
  todos.push(todoText);
  inpuElement.value = "";
  renderTodos();
  saveToStorage();
}

buttonElement.onclick = addTodo;

function removeTodo(pos) {
  //remove quantidade dos itens
  todos.splice(pos, 1);
  renderTodos();
  saveToStorage();
}

function saveToStorage() {
  //apenas grava chave e valor

  localStorage.setItem("list_todos", JSON.stringify(todos));
}
