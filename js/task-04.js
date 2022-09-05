let counterValue = 0;

const refs = {
    decrementBtn: document.querySelector('button[data-actions="decrement"]'),
    incrementBtn: document.querySelector('button[data-actions="increment"]'),
    valueEl: document.querySelector('#value'),
};

refs.decrementBtn.addEventListener('click', () => {
    counterValue -= 1;
    refs.valueEl.textContent = counterValue;
});

refs.incrementBtn.addEventListener('click', () => {
    counterValue += 1;
    refs.valueEl.textContent = counterValue;
});
