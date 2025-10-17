var n = parseInt(lines[0]);

for (let i = 1; i <= n; i++) {
  let array = lines[i].split(" ");
  let primeiroValor = parseInt(array[0]);
  let segundoValor = parseInt(array[1]);
  let somaImpares = 0;

  let maior = Math.max(primeiroValor, segundoValor);
  let menor = Math.min(primeiroValor, segundoValor);

  for (j = menor + 1; j < maior; j++) {
    if (j % 2 !== 0) {
      somaImpares = somaImpares + j;
    }
  }

  console.log(somaImpares);
}
