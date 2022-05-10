// Desafio 1
function compareTrue(x, y) {
  if (x === true && y === true) {
    return true;
  }
  return false;
}

// Desafio 2
function calcArea(base, height) {
  let area = (base * height) / 2;
  return area;
}
calcArea(10, 50);
calcArea(5, 2);
calcArea(51, 1);

// Desafio 3
function splitSentence(string) {
  let x = string.split(' ');
  return x;
}
splitSentence('go Trybe');

// Desafio 4
function concatName(array) {
  let ultimo = array[array.length - 1];
  let primeiro = array[0];
  let juntos = ultimo + ", " + primeiro;
  return juntos;
}
let nomes1 = ['Lucas', 'Cassiano', 'Ferraz', 'Paolillo'];
let nomes2 = ['foguete', 'não', 'tem', 'ré'];
let nomes3 = ['captain', 'my', 'captain'];
console.log(concatName(nomes1));
console.log(concatName(nomes2));
console.log(concatName(nomes3));

// Desafio 5
function footballPoints(wins, ties) {
  let pontos = (wins * 3) + ties;
  return pontos;
}
footballPoints(14, 8);
footballPoints(1, 2);
footballPoints(0, 0);

// Desafio 6
function highestCount(num) {
  let maiorNum = num[0];
  let c = 0;
  for (let i = 0; i < num.length; i += 1) {
    if (maiorNum < num[i]) {
      maiorNum = num[i];
    }
  }
  for (let i2 = 0; i2 < num.length; i2 += 1) {
    if (maiorNum === num[i2]) {
      c += 1;
    }
  }
  return c;
}
highestCount([9, 1, 2, 3, 9, 5, 7]);
highestCount([0, 4, 4, 4, 9, 2, 1]);
highestCount([0, 0, 0]);

// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  if (Math.abs(cat1 - mouse) < Math.abs(cat2 - mouse)) {
    return 'cat1';
  } if (Math.abs(cat1 - mouse) > Math.abs(cat2 - mouse)) {
    return 'cat2';
  }
  return 'os gatos trombam e o rato foge';
}
catAndMouse(0, 3, 2);
catAndMouse(0, 6, 12);
catAndMouse(0, 0, 0);

// Desafio 8
function fizzBuzz(num) {
}


// Desafio 9
function encode() {
  // seu código aqui
}
function decode() {
  // seu código aqui
}

// Desafio 10
function techList() {
  // seu código aqui
}

module.exports = {
  calcArea,
  catAndMouse,
  compareTrue,
  concatName,
  decode,
  encode,
  fizzBuzz,
  footballPoints,
  highestCount,
  splitSentence,
  techList,
};
