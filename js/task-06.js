const inputColor = document.querySelector('#validation-input');
const inputLenght = inputColor.getAttribute("data-length");

console.log(inputColor);
console.log(inputLenght);

inputColor.addEventListener('blur', onInputBlur);

function onInputBlur(event) {
    const lengthOfInput = Number(inputLenght);
    const userInput = event.currentTarget.value.length;

    if (lengthOfInput === userInput) {
        inputColor.classList.add('valid');
        inputColor.classList.remove('invalid');
    }
    if (lengthOfInput < userInput || lengthOfInput > userInput ) {
        inputColor.classList.add('invalid');
        inputColor.classList.remove('valid'); 
    }
}





