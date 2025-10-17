let primeiroValor = parseInt(lines[0]);
let segundoValor = parseInt(lines[1]);

let maior = Math.max(primeiroValor, segundoValor);
let menor = Math.min(primeiroValor, segundoValor);

let soma = 0;
for (let i = menor; i <= maior; i++) {
  if (i % 13 !== 0) {
    soma += i;
  }
}

console.log(soma);
