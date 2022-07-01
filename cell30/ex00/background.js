function changeColor() {
  const colors = [
    "blue",
    "green",
    "black",
    "pink",
    "yellow",
    "orange",
    "purple",
  ];
  let index = Math.floor(Math.random() * colors.length);
  let newColor = colors[index];

  if (document.body.style.backgroundColor != newColor) {
    document.body.style.backgroundColor = newColor;
  } else {
    let newColors = colors.filter((color) => color != newColor);
    document.body.style.backgroundColor =
      newColors[Math.floor(Math.random() * newColors.length)];
  }
}
