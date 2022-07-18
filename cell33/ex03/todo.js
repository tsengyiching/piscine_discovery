function handleClick() {
  let todos = getTodos();
  let lastId;
  const text = prompt("Whant needs to be done ?");

  if (!text) return;

  if (!todos || !todos.length) {
    todos = [];
    lastId = 0;
  } else {
    lastId = Number(document.getElementsByClassName("todo")[0].id) + 1;
  }

  let newTodo = { key: lastId, text: text };
  todos.push(newTodo);
  document.cookie = `todos` + `=` + encodeURIComponent(JSON.stringify(todos));
  renderTodo(newTodo);
}

function handleRemove(id, text) {
  let todos = getTodos();
  const div = document.getElementById(id);
  const index = todos.findIndex((todo) => todo.key === id);

  if (confirm(`Are you sure to remove todo :  ${text}?`)) {
    div.remove();
    todos.splice(index, 1);
    document.cookie = `todos` + `=` + encodeURIComponent(JSON.stringify(todos));
  }
}

function renderTodo(elem) {
  const list = document.getElementById("ft_list");

  const div = document.createElement("div");
  div.classList.add("todo");
  div.setAttribute("id", elem.key);
  div.onclick = () => handleRemove(elem.key, elem.text);

  const para = document.createElement("p");
  const node = document.createTextNode(elem.text);
  para.appendChild(node);
  div.appendChild(para);
  list.prepend(div);
}

function getTodos() {
  let todos = document.cookie;

  if (!todos) return;

  todos = decodeURIComponent(todos);
  todos = todos.slice(6);
  todos = JSON.parse(todos);

  return todos;
}

function firstTodoRender() {
  let todos = getTodos();

  if (!todos) return;
  todos.forEach((elem) => renderTodo(elem));
}
