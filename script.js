const formularioLogin = document.getElementsByClassName('trybewarts-login')[0];
const submiBtn = document.getElementById('submit-btn');
const agreement = document.getElementById('agreement');

formularioLogin.addEventListener('submit', (event) => {
  event.preventDefault();
  const email = document.getElementById('email').value;
  const senha = document.getElementById('senha').value;
  const emailValido = 'tryber@teste.com';
  const senhaValida = '123456';

  if (email === emailValido && senha === senhaValida) {
    alert('Olá, Tryber!');
  } else {
    alert('Email ou senha inválidos.');
  }
});

agreement.addEventListener('click', (event) => {
  if (event.target.checked) {
    submiBtn.disabled = false;
  } else {
    submiBtn.disabled = true;
  }
});
