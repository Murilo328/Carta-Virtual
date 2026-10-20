// A meia-noite de Dublin em 26/10/2026. Nesse dia Dublin já estará em UTC.
const dataLiberacao = new Date("2026-10-26T00:00:00Z");

const dias = document.getElementById("dias");
const horas = document.getElementById("horas");
const minutos = document.getElementById("minutos");
const segundos = document.getElementById("segundos");
const contagem = document.getElementById("contagem");
const introducao = document.getElementById("introducao");
const botaoAbrir = document.getElementById("abrir");
const envelope = document.getElementById("envelope");
const mensagem = document.getElementById("mensagem");

function atualizarContagem() {
  const agora = new Date();
  const diferenca = dataLiberacao - agora;

  if (diferenca <= 0) {
    dias.textContent = "00";
    horas.textContent = "00";
    minutos.textContent = "00";
    segundos.textContent = "00";
    contagem.querySelector(".rotulo-contagem").textContent = "Sua carta está pronta";
    introducao.textContent = "Chegou a hora de abrir sua surpresa.";
    botaoAbrir.disabled = false;
    botaoAbrir.textContent = "Abrir minha carta";
    return;
  }

  const totalSegundos = Math.floor(diferenca / 1000);
  dias.textContent = String(Math.floor(totalSegundos / 86400)).padStart(2, "0");
  horas.textContent = String(Math.floor((totalSegundos % 86400) / 3600)).padStart(2, "0");
  minutos.textContent = String(Math.floor((totalSegundos % 3600) / 60)).padStart(2, "0");
  segundos.textContent = String(totalSegundos % 60).padStart(2, "0");
}

botaoAbrir.addEventListener("click", function () {
  if (new Date() < dataLiberacao) return;

  envelope.classList.add("aberto");
  botaoAbrir.hidden = true;
  contagem.hidden = true;
  introducao.hidden = true;

  setTimeout(function () {
    mensagem.hidden = false;
    mensagem.scrollIntoView({ behavior: "smooth", block: "start" });
  }, 550);
});

atualizarContagem();
setInterval(atualizarContagem, 1000);
