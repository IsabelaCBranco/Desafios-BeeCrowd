// let quantidadeLinhas = 7;
let quantidadeLinhas = parseInt(lines.shift());

let numero = 0;
for (let i = 0; i < quantidadeLinhas; i++) {
  let saida = "";
  for (let j = 1; j <= 3; j++) {
    numero++;
    saida += numero + " ";
  }
  console.log(saida.trim() + " PUM");
  numero += 1;
}
