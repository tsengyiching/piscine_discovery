function handleClick() {
  let todos = getTodos();
  let lastId;
  let text = prompt("Whant needs to be done ?");

  if (!todos) {
    todos = [];
    lastId = 0;
  } else {
    lastId = Number(document.getElementsByClassName("todo")[0].id) + 1;
  }
  if (!text) return;

  const newTodo = { key: lastId, text: text };
  todos.push(newTodo);
  document.cookie = `todos` + `=` + JSON.stringify(todos);
  renderTodo(newTodo);
}

function renderTodo(elem) {
  const list = document.getElementById("ft_list");

  let div = document.createElement("div");
  div.classList.add("todo");
  div.setAttribute("id", elem.key);

  let para = document.createElement("p");
  let node = document.createTextNode(elem.text);
  para.appendChild(node);
  div.appendChild(para);
  list.prepend(div);
}

function getTodos() {
  let todos = document.cookie;

  if (!todos) return;

  todos = todos.split("=");
  todos = JSON.parse(todos[1]);

  return todos;
}

function firstTodoRender() {
  let todos = getTodos();

  if (!todos) return;
  todos.forEach((elem) => renderTodo(elem));
}
