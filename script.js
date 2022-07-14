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
const contentContainer = document.getElementById('content-container');
const inputLastname = document.getElementById('input-lastname');
const radioRateContainer = document.getElementById('radio-rate-container');

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

function pegarFamilia() {
  for (let index = 0; index < radioContainer.children.length; index += 1) {
    if (radioContainer.children[index].firstElementChild.checked) {
      return radioContainer.children[index].firstElementChild.value;
    }
  }
}

function pegarConteudo() {
  const checkedArray = [];
  const listaConteudo = contentContainer.children;
  for (let index = 0; index < listaConteudo.length; index += 1) {
    if (listaConteudo[index].firstElementChild.checked) {
      checkedArray.push(` ${listaConteudo[index].firstElementChild.value}`);
    }
  }
  return checkedArray;
}

function criarCampos(chave, valor, formdata) {
  const paragrafo = document.createElement('p');
  paragrafo.innerText = `${chave}: ${valor}`;
  formdata.appendChild(paragrafo);
}

function pegarNota() {
  for (let index = 0; index < radioRateContainer.children.length; index += 1) {
    if (radioRateContainer.children[index].checked) {
      return radioRateContainer.children[index].value;
    }
  }
}

function tiraFormulario(event) {
  event.preventDefault();
  evaluationForm.style.display = 'none';
}

submiBtn.addEventListener('click', (event) => {
  tiraFormulario(event);
  const formData = document.createElement('section');
  formData.id = 'form-data';
  main.appendChild(formData);
  const info = {
    Nome: `${inputName.value} ${inputLastname.value}`,
    Email: inputEmail.value,
    Casa: house.value,
    Família: pegarFamilia(),
    Matérias: pegarConteudo(),
    Avaliação: pegarNota(),
    Observações: textArea.value,
  };
  const chaves = Object.keys(info);
  const valores = Object.values(info);
  for (let index = 0; index < chaves.length; index += 1) {
    criarCampos(chaves[index], valores[index], formData);
  }
});
