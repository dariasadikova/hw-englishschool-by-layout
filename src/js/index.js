const modalOverlay = document.querySelector('.modal_window');
const showPass = document.getElementById('show')
const regPassword = document.getElementById('password');
const email = document.getElementById('email');
const regName = document.getElementById('name');
const modalErrors = document.querySelectorAll('.modal_error');
const regBtnSubmit = document.getElementById('send')
const regForm = document.getElementById('modal_reg')
const successSubmit = document.querySelector('.success_submit')

function showModal() {
    modalOverlay.classList.add('modal_window--visible');
  }
  modalOverlay.addEventListener('click', e => {
    if (e.target === modalOverlay) {
      modalOverlay.classList.remove('modal_window--visible');
    }
});

showPass.addEventListener('pointerdown', () => {
    const pass = document.querySelector('#password')
    pass.setAttribute('type', 'text')
})

showPass.addEventListener('pointerup', () => {
    const pass = document.querySelector('#password')
    pass.setAttribute('type', 'password')
})

regName.addEventListener('blur', e => {
    if (regName.validity.valueMissing) {
      modalErrors[0].classList.add('modal_error--visible');
      regName.setCustomValidity('Введите ваше имя');
    } else {
      modalErrors[0].classList.remove('modal_error--visible');
      regName.setCustomValidity('');
    }
  });
  
  email.addEventListener('blur', e => {
    if (email.validity.typeMismatch || email.validity.valueMissing) {
      modalErrors[1].classList.add('modal_error--visible');
      email.setCustomValidity('Введите верную почту');
    } else {
      modalErrors[1].classList.remove('modal_error--visible');
      email.setCustomValidity('');
    }
  });
  
  regPassword.addEventListener('blur', e => {
    if (regPassword.validity.tooShort || regPassword.validity.valueMissing) {
      modalErrors[2].classList.add('modal_error--visible');
      regPassword.setCustomValidity('Пароль должен быть как минимум из 6 символов');
    } else {
      modalErrors[2].classList.remove('modal_error--visible');
      regPassword.setCustomValidity('');
    }
  });

  regBtnSubmit.addEventListener('click', () => {
    if (regName.validity.valueMissing) {
      regName.setCustomValidity('Введите ваше имя');
    } else {
      regName.setCustomValidity('');
    }
    if (email.validity.valueMissing) {
      email.setCustomValidity('Введите вашу почту');
    } else {
      email.setCustomValidity('');
    }
    if (regPassword.validity.valueMissing) {
      regPassword.setCustomValidity('Придумайте пароль');
    } else {
      regPassword.setCustomValidity('');
    }
  });

  regForm.addEventListener('submit', e => {
    e.preventDefault();
    const formData = new FormData(regForm);
    for (const [name, value] of formData) {
      console.log(`${name} = ${value}`);
    }
    successSubmit.classList.add('success_submit--visible');
    modalOverlay.classList.remove('modal_window--visible');
    setTimeout(() => {
      successSubmit.classList.remove('success_submit--visible');
    }, 3000);
  });

  