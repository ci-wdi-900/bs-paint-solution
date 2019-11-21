function getColor(element) {
  return element.classList[1];
}

function handleClickSquare (event) {
  const square = event.target;
  const brush = document.querySelector('.current-brush');
  square.classList.replace(getColor(square), getColor(brush));
}

for (const square of document.querySelectorAll('.square')) {
  square.addEventListener('click', handleClickSquare)
};


function handleClickPaletteColor (event) {
  const brush = document.querySelector('.current-brush');
  brush.classList.replace(getColor(brush), getColor(event.target));
}
  
for (const paletteColor of document.querySelectorAll('.palette-color')) {
  paletteColor.addEventListener('click', handleClickPaletteColor);
};
