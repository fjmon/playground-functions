// Desafio 11
// function validateConditions(num) {
//   let repet = 0;
//   for (let i = 0; i < num.length; i += 1) {
//     for (let i2 = 0; i2 < num.length; i2 += 1) {
//       if (num[i] === num[i2]) {
//         repet += 1;
//       }
//     }
//     return repet;
//   }

//   function generatePhoneNumber(num) {
//     if (num.length !== 11) {
//       return 'Array com tamanho incorreto.';
//     }
//     let dps = `(${num[0]}${num[1]})
//    ${num[2]}${num[3]}${num[4]}${num[5]}${num[6]}
//   -${num[7]}${num[8]}${num[9]}${num[10]}`;
//     validateConditions(num);
//     if (num[i] < 0 || num[i] > 9 || repet >= 3) {
//       return 'não é possível gerar um número de telefone com esses valores';
//     }
//   }
//   return dps;
// }

function validateConditions(erro, numbers, i) {
  if (i < 0 || i > 9) return erro;
  if (numbers[i] === undefined) {
    numbers[i] = 0;
  }
  numbers[i] += 1;
  if (numbers[i] >= 3) return erro;
}
function generatePhoneNumber(num) {
  if (num.length !== 11) {
    return 'Array com tamanho incorreto.';
  }
  let numbers = {};
  let forma = '(xx) xxxxx-xxxx';
  let erro = 'não é possível gerar um número de telefone com esses valores';
  for (let i of num) {
    validateConditions(erro, numbers, i);
    forma = forma.replace('x', i);
  }
  return forma;
}

console.log(generatePhoneNumber([1, 2, 3, 4, 5, 5, 5, 5, 9, 0, 1]))


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
  for (let i = 0; i < bebidas.length; i += 1) {
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
