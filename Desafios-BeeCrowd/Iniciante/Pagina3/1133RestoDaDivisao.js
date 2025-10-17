let primeiroValor = parseInt(lines[0]);
let segundoValor = parseInt(lines[1]);

let maior = Math.max(primeiroValor, segundoValor);
let menor = Math.min(primeiroValor, segundoValor);

for (let i = menor + 1; i < maior; i++) {
  if (i % 5 === 2 || i % 5 === 3) {
    console.log(i);
  }
}
