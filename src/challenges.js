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
  let x = string.split(" ");
  return x;
}
splitSentence("go Trybe");

// Desafio 4
function concatName(array) {
  let ultimo = array[array.length - 1];
  let primeiro = array[0];
  let juntos = ultimo + ", " + primeiro;
  return juntos;
}
let nomes1 = ["Lucas", "Cassiano", "Ferraz", "Paolillo"];
let nomes2 = ["foguete", "não", "tem", "ré"];
let nomes3 = ["captain", "my", "captain"];
console.log(concatName(nomes1));
console.log(concatName(nomes2));
console.log(concatName(nomes3));

// Desafio 5
function footballPoints() {
  // seu código aqui
}

// Desafio 6
function highestCount() {
  // seu código aqui
}

// Desafio 7
function catAndMouse() {
  // seu código aqui
}

// Desafio 8
function fizzBuzz() {
  // seu código aqui
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
