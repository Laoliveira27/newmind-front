
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
