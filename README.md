# 🎮 Jogo da Memória - Emoji Edition

Um jogo da memória simples e divertido desenvolvido com HTML5, CSS3 e JavaScript Vanilla. O objetivo é encontrar todos os pares de emojis no menor tempo possível.

## 🚀 Tecnologias Utilizadas

- **HTML5**: Estruturação dos elementos.
- **CSS3**: Estilização, layout em Grid/Flexbox e animações de transição.
- **JavaScript**: Lógica de embaralhamento, manipulação do DOM e regras de negócio do jogo.

## 🛠️ Como Funciona

1. O script `engine.js` contém um array de emojis que é embaralhado aleatoriamente a cada novo carregamento.
2. As cartas são geradas dinamicamente no container `.game`.
3. Ao clicar em uma carta, ela revela o emoji.
4. Se duas cartas abertas forem iguais, elas permanecem abertas e mudam de cor.
5. O jogo possui uma trava lógica que impede a abertura de mais de duas cartas simultaneamente.
6. Se forem diferentes, elas são fechadas após 500ms.
7. O jogo termina quando todos os pares são encontrados.

## 📁 Estrutura de Arquivos

- `index.html`: Página principal.
- `src/styles/reset.css`: Reset de estilos padrão.
- `src/styles/main.css`: Estilos visuais do jogo.
- `src/scripts/engine.js`: Motor do jogo (lógica).

## 🔧 Como Executar

Basta abrir o arquivo `index.html` em qualquer navegador moderno.

---

Desenvolvido como projeto de estudo de JavaScript.
