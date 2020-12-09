const getColor = (element) => {
  return element.classList[1];
}

const handleClickSquare = (event) => {
  const square = event.target;
  const brush = document.querySelector('.current-brush');
  square.classList.replace(square.classList[1], brush.classList[1]);
}

const handleMouseOverSquare = (event) => {
  const square = event.target;
  const brush = document.querySelector('.current-brush');
  square.classList.replace(getColor(square), getColor(brush));
}

const squares = document.querySelectorAll('.square')

for (const square of squares) {
  square.addEventListener('click', handleClickSquare)
};

const handleClickPaletteColor = (event) => {
  const brush = document.querySelector('.current-brush');
  brush.classList.replace(brush.classList[1], event.target.classList[1]);
}

const paletteColors = document.querySelectorAll('.palette-color');

for (const paletteColor of paletteColors) {
  paletteColor.addEventListener('click', handleClickPaletteColor);
};
