// let lines = [3, 5, 10, 0];

let quantidadePorLinha = 1;
do {
  quantidadePorLinha = parseInt(lines.shift());
  let saida = "";
  for (let i = 1; i <= quantidadePorLinha; i++) {
    if (i < quantidadePorLinha) {
      saida += i + " ";
    } else if (i == quantidadePorLinha) {
      saida += i;
    }
  }
  if (quantidadePorLinha !== 0) {
    console.log(saida);
  }
} while (quantidadePorLinha !== 0);
