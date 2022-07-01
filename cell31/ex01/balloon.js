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
  let currentPx;

  if (currentHeight == "") currentHeight = "200px";
  currentPx = currentHeight.slice(0, currentHeight.length - 2);
  currentPx = Number(currentPx);

  if (currentPx < 420) {
    currentPx += 10;
  } else {
    currentPx = 200;
  }

  elem.style.height = `${currentPx}px`;
  elem.style.width = `${currentPx}px`;
}

function handleClick() {
  const elem = document.getElementById("balloon");

  changeColor(elem);
  changeBalloonSize(elem);
}
