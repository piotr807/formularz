console.log(`Zadanie rekrutacyjne - formularz`);

let form = document.getElementById('form-task');

const validateFunction = (event) => {

    let email = document.getElementById('email');
    let name = document.getElementById('name');
    let agree = document.getElementById('agree');
    let errors = document.getElementById('errors');

    let emailChar = /\S+@\S+\.\S+/;

    const validateEmail = email => emailChar.test(email);
      
    errors.innerHTML = '';

    if (email.value.trim() === '') {
        let liError = document.createElement('li');
        liError.innerText = 'Wpisz adres E-mail!';
        errors.appendChild(liError);
    }

    if (!email.value.trim() ==="" || !validateEmail(email.value)) {
        let liError = document.createElement('li');
        liError.innerText = 'Niepoprawny E-mail!';
        errors.appendChild(liError);
    }
   
    if (name.value.trim() === '') {
        let liError = document.createElement('li');
        liError.innerText = 'Wpisz imię!';
        errors.appendChild(liError);
    }

    if (!agree.checked) {
        let liError = document.createElement('li');
        liError.innerText = 'Nie wyraziłeś zgody!';
        errors.appendChild(liError);
    }

    if (errors.children.length > 0) {
        event.preventDefault();
    }
}

form.addEventListener('submit', validateFunction);
