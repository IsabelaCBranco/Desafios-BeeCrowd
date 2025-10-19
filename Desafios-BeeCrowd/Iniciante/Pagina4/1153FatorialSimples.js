let numero = parseInt(lines.shift());
// let numero = 4;
let multiplicacao = 1;
for (let i = numero; i > 0; i--) {
  multiplicacao = multiplicacao * i;
}
console.log(multiplicacao);
