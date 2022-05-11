// Desafio 11
function generatePhoneNumber(num) {
  let dps = `(${num[0]}${num[1]})` + ` ${num[2]}${num[3]}${num[4]}${num[5]}${num[6]}` + `-${num[7]}${num[8]}${num[9]}${num[10]}`
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
  let la = (lineA < lineB + lineC && lineA > Math.abs(lineB - lineC));
  let lb = (lineB < lineA + lineC && lineB > Math.abs(lineA - lineC));
  let lc = (lineC < lineB + lineA && lineC > Math.abs(lineB - lineA));
  if (la + lb + lc) {
    return true;
  }
  return false;
}

triangleCheck(10, 14, 8);

// Desafio 13
function hydrate(mel) {
  let bebidas = mel.match(/\d+/g);
  let agua = 0;
  for (let i of bebidas) {
    agua += Number(bebidas[i]);
  }
  return `${agua} copo(s) de água`;
}
hydrate('1 cerveja');
hydrate('1 cachaça, 5 cervejas e 1 copo de vinho');

module.exports = {
  generatePhoneNumber,
  hydrate,
  triangleCheck,
};
