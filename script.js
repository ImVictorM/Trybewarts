const main = document.getElementsByTagName('main')[0];
const formularioLogin = document.getElementsByClassName('trybewarts-login')[0];
const submiBtn = document.getElementById('submit-btn');
const agreement = document.getElementById('agreement');
const textArea = document.getElementById('textarea');
const counter = document.getElementById('counter');
const evaluationForm = document.getElementById('evaluation-form');
const inputName = document.getElementById('input-name');
const inputEmail = document.getElementById('input-email');
const house = document.getElementById('house');
const radioContainer = document.getElementById('radio-container');
const counterValue = Number(counter.innerText);

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

textArea.addEventListener('input', () => {
  const tamanhoTexto = counterValue - textArea.value.length;
  counter.innerText = tamanhoTexto;
});

submiBtn.addEventListener('click', (event) => {
  event.preventDefault();
  evaluationForm.style.display = 'none';

  const formData = document.createElement('section');
  formData.id = 'form-data';
  main.appendChild(formData);


});

function pegarFamilia () {
  for (let index = 0; index < radioContainer.children.length; index += 1) {
    if(radioContainer.children[index].firstElementChild.checked) {
      return radioContainer.children[index].firstElementChild.value;
    }
  }
}
