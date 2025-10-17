// let array = lines.shift().split(" ");
let quantidadePorLinha = 3;
let valorDaSequencia = 99;

// let quantidadePorLinha = parseInt(array[0]);
// let valorDaSequencia = parseInt(array[1]);

for (let i = 1; i <= valorDaSequencia; i++) {
  let saida = " ";

  for (let j = 1; j <= quantidadePorLinha; j++) {
    saida += i + " ";
    i++;
  }
  i--;
  console.log(saida.trim());
}
