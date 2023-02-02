// Validation
const form = document.querySelector('.form__content'),
      button = document.querySelector('.form__button'),
      inputs = document.querySelectorAll('input'),
      textarea = document.querySelector('textarea');

button.addEventListener('click', () => {
    let error = false;

    inputs.forEach(item => {
        if (item.value == '') {
            item.style.border = '3px solid red';
            error = true;
        }
    });

    if (textarea.value == '') {
        textarea.style.border = '3px solid red';
        error = true;
    }
});

//Cookie

const cookie = document.querySelector('.cookie'),
      cookieBtn = document.querySelector('.cookie__btn');

setTimeout(function() {
    cookie.style.bottom = '0';
}, 6000);

cookieBtn.addEventListener('click', () => {
    cookie.style.bottom = '-90px';
});
