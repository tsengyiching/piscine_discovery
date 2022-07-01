function changeColor(elem, action) {
  let index;
  const colors = ["red", "green", "blue"];
  let currentColor = elem.style.backgroundColor;

  if (currentColor == "") {
    currentColor = "red";
  }

  index = colors.indexOf(currentColor);

  if (action == "click") {
    if (index < 2) {
      index++;
    } else {
      index = 0;
    }
  } else if (action == "leave") {
    if (index > 0) {
      index--;
    } else {
      index = 2;
    }
  }
  elem.style.backgroundColor = colors[index];
}

function changeBalloonSize(elem, action) {
  let currentHeight = elem.style.height;
  let px;

  if (currentHeight == "") currentHeight = "200px";
  px = currentHeight.slice(0, currentHeight.length - 2);
  px = Number(px);

  if (action == "click" && px < 420) {
    px += 10;
  } else if (action == "leave" && px > 200) {
    px -= 5;
  } else {
    px = 200;
  }

  elem.style.height = `${px}px`;
  elem.style.width = `${px}px`;
}

function handleClick() {
  const elem = document.getElementById("balloon");

  changeColor(elem, "click");
  changeBalloonSize(elem, "click");
}

function handleLeave() {
  const elem = document.getElementById("balloon");

  changeColor(elem, "leave");
  changeBalloonSize(elem, "leave");
}
