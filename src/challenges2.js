// Desafio 11
function generatePhoneNumber(num) {
  let ddd = '(' + num[0] + num[1] + ')';
  let prefixo = ' ' + num[2] + num[3] + num[4] + num[5] + num[6];
  let sufixo = '-' + num[7] + num[8] + num[9] + num[10];
  let dps = ddd + prefixo + sufixo;
  if (num.length !== 11) {
    return 'Array com tamanho incorreto.';
  } for (let i = 0; i < num.length; i += 1) {
    let repet = 0;
    for (let i2 = 0; i2 < num.length; i2 += 1) {
      if (num[i] === num[i2]) {
        repet += 1;
      }
    }
    if (num[i] < 0 || num[i] > 9 || repet >= 3) {
      return 'não é possível gerar um número de telefone com esses valores';
    }
  }
  return dps;
}
generatePhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0, 1]);
generatePhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]);
generatePhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0, 1, 2]);
generatePhoneNumber([1, -2, 3, 4, 5, 6, 7, 8, 9, 0, 1]);
generatePhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0, 10]);
generatePhoneNumber([1, 2, 3, 4, 5, 5, 5, 8, 9, 0, 1]);

// Desafio 12
function triangleCheck(lineA, lineB, lineC) {
  let contador = 0;
  if (lineA < lineB + lineC && lineA > Math.abs(lineB - lineC)) {
    return true;
  }
  if (lineB < lineA + lineC && lineB > Math.abs(lineA - lineC)) {
    return true;
  }
  if (lineC < lineB + lineA && lineC > Math.abs(lineB - lineA)) {
    return true;
  } else {
    return false;
  }
  if (contador >= 3) {
    return true;
  }
}
triangleCheck(10, 14, 8);

// Desafio 13
function hydrate(mel) {
  let bebidas = mel.match(/\d+/g);
  let agua = 0;
  for (let i in bebidas) {
    agua += parseInt(bebidas[i]);
  }
  return agua + ' copo(s) de água';
}
hydrate('1 cerveja');
hydrate('1 cachaça, 5 cervejas e 1 copo de vinho');

module.exports = {
  generatePhoneNumber,
  hydrate,
  triangleCheck,
};
