// Array de emojis que serão duplicados para formar os pares
const emojis = [
  '🐶',
  '🐶',
  '🐱',
  '🐱',
  '🐭',
  '🐭',
  '🐹',
  '🐹',
  '🐰',
  '🐰',
  '🦊',
  '🦊',
  '🐻',
  '🐻',
  '🐼',
  '🐼',
];

// Array auxiliar para armazenar as cartas abertas no momento
let openCards = [];

// Embaralhamento utilizando o método sort com valor randômico
let shuffleEmojis = emojis.sort(() => Math.random() - 0.5);

// Loop para criar os elementos das cartas no HTML dinamicamente
for (let i = 0; i < emojis.length; i++) {
  let box = document.createElement('div');
  box.className = 'item';
  box.innerHTML = shuffleEmojis[i];
  box.onclick = handleClick; // Atribui a função de clique
  document.querySelector('.game').appendChild(box);
}

// Função executada ao clicar em uma carta
function handleClick() {
  // Evita abrir mais de 2 cartas simultaneamente ou a mesma carta duas vezes
  if (openCards.length < 2 && !this.classList.contains('boxOpen')) {
    this.classList.add('boxOpen');
    openCards.push(this);
  }

  // Se duas cartas estiverem abertas, verifica se são iguais
  if (openCards.length == 2) {
    setTimeout(checkMatch, 500);
  }
}

// Função para verificar se os pares coincidem
function checkMatch() {
  if (openCards[0].innerHTML === openCards[1].innerHTML) {
    // Se forem iguais, adiciona a classe de sucesso
    openCards[0].classList.add('boxMatch');
    openCards[1].classList.add('boxMatch');
  } else {
    // Se forem diferentes, fecha as cartas removendo a classe
    openCards[0].classList.remove('boxOpen');
    openCards[1].classList.remove('boxOpen');
  }

  // Limpa o array para a próxima jogada
  openCards = [];

  // Verifica se todas as cartas foram combinadas para declarar vitória
  if (document.querySelectorAll('.boxMatch').length === emojis.length) {
    setTimeout(() => {
      alert('Você venceu! Parabéns!');
    }, 500);
  }
}
