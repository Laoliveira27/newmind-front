
const humorButtons = document.querySelectorAll('.humor-btn');
const humorInput = document.getElementById('humorSelecionado');
const formDiario = document.querySelector('.diario-form');
const feedback = document.getElementById('feedback-diario');


humorButtons.forEach(btn => {
  btn.addEventListener('click', () => {


    humorButtons.forEach(b => b.classList.remove('selecionado'));

    btn.classList.add('selecionado');

    humorInput.value = btn.dataset.humor;
  });
});

if (formDiario) {
  formDiario.addEventListener('submit', (event) => {
    event.preventDefault(); 

    if (!humorInput.value) {
      feedback.style.color = '#b12020';
      feedback.textContent = "Selecione um humor para continuar!";
      return;
    }

    feedback.style.color = '#0c4e39';
    feedback.textContent = "Registro enviado com sucesso! (simulação)";

    humorInput.value = "";
    document.getElementById('descricao-diario').value = "";
    humorButtons.forEach(b => b.classList.remove('selecionado'));
  });
}


const formContato = document.getElementById('contact-form');
const feedbackContato = document.getElementById('form-feedback');

if (formContato) {
  formContato.addEventListener('submit', (event) => {
    event.preventDefault();

    const nome = document.getElementById('nome');
    const email = document.getElementById('email');
    const tipo = document.getElementById('tipo');
    const mensagem = document.getElementById('mensagem');

    if (!nome.value.trim() || !email.value.trim() || !tipo.value || !mensagem.value.trim()) {
      feedbackContato.style.color = '#b12020';
      feedbackContato.textContent = "Por favor, preencha todos os campos obrigatórios!";
      return;
    }

    const emailValido = /\S+@\S+\.\S+/.test(email.value);
    if (!emailValido) {
      feedbackContato.style.color = '#b12020';
      feedbackContato.textContent = "Digite um e-mail válido!";
      return;
    }
 
    feedbackContato.style.color = '#0c4e39';
    feedbackContato.textContent = "Mensagem enviada com sucesso! (simulação)";


    nome.value = "";
    email.value = "";
    tipo.value = "";
    mensagem.value = "";
  });
}
