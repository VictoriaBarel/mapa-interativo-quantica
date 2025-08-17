// Onde vamos armazenar os cards de cada cidade
const cards = {
  saopaulo: ["cards/saopaulo-1.jpg", "cards/saopaulo-2.jpg"],
  campinas: ["cards/campinas-1.jpg"],
  // pode adicionar mais cidades aqui
};

let cidadeAtual = null;
let indiceAtual = 0;

const imgCard = document.getElementById("card");
const btnPrev = document.getElementById("prev");
const btnNext = document.getElementById("next");
const contador = document.getElementById("contador");

// Função pra mostrar o card
function mostrarCard() {
  if (cidadeAtual && cards[cidadeAtual]) {
    imgCard.src = cards[cidadeAtual][indiceAtual];
    contador.innerText = `${indiceAtual + 1} / ${cards[cidadeAtual].length}`;
  }
}

// Navegação
btnPrev.addEventListener("click", () => {
  if (cidadeAtual) {
    indiceAtual = (indiceAtual - 1 + cards[cidadeAtual].length) % cards[cidadeAtual].length;
    mostrarCard();
  }
});

btnNext.addEventListener("click", () => {
  if (cidadeAtual) {
    indiceAtual = (indiceAtual + 1) % cards[cidadeAtual].length;
    mostrarCard();
  }
});

// Quando o SVG carregar, adiciona eventos nas cidades
document.getElementById("svgmapa").addEventListener("load", () => {
  const svgDoc = document.getElementById("svgmapa").contentDocument;

  // exemplo: cidade chamada "saopaulo" no Illustrator
  const sp = svgDoc.getElementById("saopaulo");
  if (sp) {
    sp.style.cursor = "pointer";
    sp.addEventListener("click", () => {
      cidadeAtual = "saopaulo";
      indiceAtual = 0;
      mostrarCard();
    });
  }

  const campinas = svgDoc.getElementById("campinas");
  if (campinas) {
    campinas.style.cursor = "pointer";
    campinas.addEventListener("click", () => {
      cidadeAtual = "campinas";
      indiceAtual = 0;
      mostrarCard();
    });
  }
});
