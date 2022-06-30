function changeColor() {
  const colors = ["blue", "green", "black", "pink", "yellow"];
  let index = Math.floor(Math.random() * colors.length);
  let newColor = colors[index];
  if (document.body.style.backgroundColor != newColor) {
    document.body.style.backgroundColor = newColor;
  } else {
    let newColors = colors.filter((color) => color != newColor);
    newColors[Math.floor(Math.random() * newColors.length)];
  }
}
