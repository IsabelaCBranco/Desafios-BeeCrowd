let maior = 0;
let posicao = 0;

for (let i = 0; i <= 100; i++) {
  let valor = parseInt(lines[i]);
  if (valor > maior) {
    maior = valor;
    posicao = i + 1;
  }
}
console.log(maior);
console.log(posicao);
