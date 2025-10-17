// let quantidadeLinhas = parseInt(lines.shift());

let quantidadeLinhas = 5;
let numero = 1;

let quadrado = 0;
let cubo = 0;
for (let i = 0; i < quantidadeLinhas; i++) {
  quadrado = numero * numero;
  cubo = quadrado * numero;

  for (let j = 0; j <= 1; j++) {
    let saida = numero + " ";
    saida += quadrado + " ";
    saida += cubo + " ";
    console.log(saida.trim());
    quadrado++;
    cubo++;
  }
  numero++;
}
