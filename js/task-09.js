function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const refs = {
  button: document.querySelector('.change-color'),
  colorSpan: document.querySelector('.color'),
}

refs.button.addEventListener('click', onColorChange);

function onColorChange(event) {
  refs.colorSpan.textContent = getRandomHexColor();
  document.body.style.background = refs.colorSpan.textContent;
}