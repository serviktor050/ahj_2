const gameFieldCell = document.querySelectorAll('.game-field-cell');

const getRandomInt = (min, max) => {
  const minimal = Math.ceil(min);
  const maximal = Math.floor(max);
  return Math.floor(Math.random() * (maximal - minimal + 1)) + minimal;
};

window.addEventListener('load', () => {
  const randomInt = getRandomInt(1, gameFieldCell.length);
  gameFieldCell[randomInt].innerHTML = '<img src = "../src/img/goblin.png">';
});

setInterval(() => {
  let targetIndex;
  do {
    targetIndex = getRandomInt(1, 16);

    for (let i = 0; i <= 15; i += 1) {
      gameFieldCell[i].innerHTML = '';
    }

    gameFieldCell[targetIndex].innerHTML = '<img src = "../src/img/goblin.png">';
  } while (targetIndex === 0);
}, 1000);
