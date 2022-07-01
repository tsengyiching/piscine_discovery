function changeColor(elem) {
  let index;
  const colors = ["red", "green", "blue"];
  let currentColor = elem.style.backgroundColor;

  if (currentColor == "") {
    currentColor = "red";
  }

  index = colors.indexOf(currentColor);
  if (index < 2) {
    index++;
  } else {
    index = 0;
  }
  elem.style.backgroundColor = colors[index];
}

function changeBalloonSize(elem) {
  let currentHeight = elem.style.height;
  let px;

  if (currentHeight == "") currentHeight = "200px";
  px = currentHeight.slice(0, currentHeight.length - 2);
  px = Number(px);

  if (px < 420) {
    px += 10;
  } else {
    px = 200;
  }

  elem.style.height = `${px}px`;
  elem.style.width = `${px}px`;
}

function handleClick() {
  const elem = document.getElementById("balloon");

  changeColor(elem);
  changeBalloonSize(elem);
}
