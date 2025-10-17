let quantidadeLinhas = parseInt(lines.shift());

let numero = 1;
for (let i = 0; i < quantidadeLinhas; i++) {
  let saida = numero + " ";
  let quadrado = 0;
  let cubo = 0;

  quadrado = numero * numero;
  cubo = quadrado * numero;
  saida += quadrado + " ";
  saida += cubo + " ";

  console.log(saida.trim());
  numero++;
}
