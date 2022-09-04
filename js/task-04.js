let counterValue = 0;

const refs = {
    decrementBtn: document.querySelector('[data-actions = "decrement"]'),
    incrementBtn: document.querySelector('[data-actions = "increment"]'),
    value: document.querySelector('#value'),
};

refs.decrementBtn.addEventListener('click', () => {
    counterValue -= 1;
    refs.value.textContent = counterValue;
});

refs.incrementBtn.addEventListener('click', () => {
    counterValue += 1;
    refs.value.textContent = counterValue;
});
