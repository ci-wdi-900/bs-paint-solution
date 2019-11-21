function getColor(element) {
  return element.classList[1];
}

function handleClickSquare (event) {
  const square = event.target;
  const brush = document.querySelector('.current-brush');
  square.classList.replace(getColor(square), getColor(brush));
}

const squares = document.querySelectorAll('.square')

for (const square of squares) {
  square.addEventListener('click', handleClickSquare)
};

function handleClickPaletteColor (event) {
  const brush = document.querySelector('.current-brush');
  brush.classList.replace(getColor(brush), getColor(event.target));
}

const paletteColors = document.querySelectorAll('.palette-color');

for (const paletteColor of paletteColors) {
  paletteColor.addEventListener('click', handleClickPaletteColor);
};
