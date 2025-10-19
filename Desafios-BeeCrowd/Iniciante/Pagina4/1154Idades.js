// let lines = [34, 56, 44, 23, -2];

let idade = 1;
let soma = 0;
let quantidade = 0;
while (idade > 0) {
  idade = parseInt(lines.shift());
  if (idade < 0) {
    break;
  }
  if (idade > 0) {
    soma += idade;
    quantidade++;
    // console.log(soma);
    // console.log(quantidade);
  }
}
let media = soma / quantidade;
console.log(media.toFixed(2));
