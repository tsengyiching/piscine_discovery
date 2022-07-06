function handleClick() {
  const list = document.getElementById("ft_list");
  let todo = document.createElement("div");
  todo.classList.add("todo");
  todo.setAttribute("id", "todo");

  //   console.log(todo);
  const para = document.createElement("p");
  const node = document.createTextNode("This is new.");

  para.appendChild(node);
  todo.appendChild(para);
  list.appendChild(todo);
  // let todo

  console.log(list);

  console.log("here: ", document.getElementById("ft_list"));

  //   let text = prompt("Whant needs to be done ?");
  //   if (text) {
  //     console.log(text);
  //   }
}
