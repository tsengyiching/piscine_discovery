function handleClick() {
  let todos = getTodos();
  let lastId;
  let text = prompt("Whant needs to be done ?");

  if (!todos.length) {
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

function handleRemove(id, text) {
  let todos = getTodos();
  let div = document.getElementById(id);
  const index = todos.findIndex((todo) => todo.key === id);

  if (!confirm(`Are you sure to remove todo :  ${text}?`)) {
    return;
  } else {
    div.remove();
    todos.splice(index, 1);
    document.cookie = `todos` + `=` + JSON.stringify(todos);
  }
}

function renderTodo(elem) {
  const list = document.getElementById("ft_list");

  let div = document.createElement("div");
  div.classList.add("todo");
  div.setAttribute("id", elem.key);
  div.onclick = () => handleRemove(elem.key, elem.text);

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
