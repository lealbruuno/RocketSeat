const screen1 = document.querySelector(".screen1");
const screen2 = document.querySelector(".screen2");
const clickOnCookie = document.querySelector("#closedCookie");
const btnTry = document.querySelector("#btnTry");

const phrases = [
  "Todos os dias organiza os seus cabelos, por que não faz o mesmo com o coração?",
  "O riso é a menor distância entre duas pessoas.",
  "Não importa o tamanho da montanha, ela não pode tapar o sol.",
  "Aquele que se importa com o sentimento dos outros, não é um tolo.",
  "Dê toda a atenção à formação dos seus filhos, sobretudo com bons exemplos da sua própria vida.",
  "Amizade e Amor são coisas que se unem num piscar de olhos.",
  "Lamentar aquilo que não temos é desperdiçar aquilo que já possuímos.",
  "Há três coisas que jamais voltam, a flecha lançada, a palavra dita e a oportunidade perdida.",
  "A sua visão se tornará mais clara apenas quando conseguir olhar para dentro do seu coração.",
  "Uma bela flor é incompleta sem as suas folhas.",
  "Sem o fogo do entusiasmo, não há o calor da vitória.",
];

let randomPhrase = document.querySelector("#randomPhrase");
let generateRandomPhrase;

clickOnCookie.addEventListener("click", generatePhrase);
document.addEventListener("keydown", pressEnterKey);

function generatePhrase() {
  toggleScreen();

  generateRandomPhrase = Math.floor(Math.random() * phrases.length);

  randomPhrase.innerText = phrases[generateRandomPhrase];
}

function buttonTry(event) {
  event.preventDefault();
  toggleScreen();
}

function toggleScreen() {
  screen1.classList.toggle("hide");
  screen2.classList.toggle("hide");
}

function pressEnterKey(e) {
  if (e.key == "Enter" && screen1.classList.contains("hide")) {
    toggleScreen();
  }
}
