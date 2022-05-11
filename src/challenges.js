// Desafio 1
function compareTrue(x, y) {
  if (x === true && y === true) {
    return true;
  }
  return false;
}
compareTrue(true, true);
compareTrue(true, false);
compareTrue(false, true);
compareTrue(false, false);

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
  let juntos = `${ultimo}, ${primeiro}`;
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
  let resultado = [];
  for (let i = 0; i < num.length; i += 1) {
    let div3 = num[i] % 3 === 0;
    let div5 = num[i] % 5 === 0;
    let ndiv3 = num[i] % 3 !== 0;
    let ndiv5 = num[i] % 5 !== 0;
    if (div3 && div5) {
      resultado.push('fizzBuzz');
    } else if (div3 && ndiv5) {
      resultado.push('fizz');
    } else if (div5 && ndiv3) {
      resultado.push("buzz");
    } else {
      (ndiv3 && ndiv5)
      resultado.push('bug!');
    }
  }
  return resultado;
}
fizzBuzz([2, 15, 7, 9, 45]);

// Desafio 9
function encode(cod) {
  for (let i = 0; i < cod.length; i += 1) {
    cod = cod.replace('a', '1');
    cod = cod.replace('e', '2');
    cod = cod.replace('i', '3');
    cod = cod.replace('o', '4');
    cod = cod.replace('u', '5');
  }
  return cod;
}
encode('hi there!');

function decode(dec) {
  for (let i = 0; i < dec.length; i += 1) {
    dec = dec.replace('1', 'a');
    dec = dec.replace('2', 'e');
    dec = dec.replace('3', 'i');
    dec = dec.replace('4', 'o');
    dec = dec.replace('5', 'u');
  }
  return dec;
}
decode('h3 th2r2!');

// Desafio 10
function techList(array, name) {
  let lTec = [];
  array.sort();
  for (let i = 0; i < array.length; i += 1) {
    let object = {
      tech: array[i],
      name,
    };
    lTec.push(object);
  }
  if (lTec.length === 0) {
    return 'Vazio!';
  }
  return lTec;
}
techList(['React', 'Jest', 'HTML', 'CSS', 'JavaScript'], 'Lucas');
techList([], 'Lucas');

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
