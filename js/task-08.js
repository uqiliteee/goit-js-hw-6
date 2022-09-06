
const form = document.querySelector('.login-form');

form.addEventListener('submit', onFormSubmit);

function onFormSubmit(event) {
    event.preventDefault();

    const elementOfForm = event.currentTarget.elements;

    const email = elementOfForm.email.value;
    const password = elementOfForm.password.value;
    
    const formData = {
        email, password,
    };  

    if (email === '' || password === '') {
        alert("Fields must be filled")
    } else (
        console.log(formData), form.reset()
    );
}