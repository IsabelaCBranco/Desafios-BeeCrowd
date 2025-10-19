// let quantidade = parseInt(lines.shift());
let quantidade = 8;

let primeiro = 0;
let segundo = 1;
let saida = `${primeiro}`;
if (quantidade == 1) {
  console.log(saida);
} else if (quantidade == 2) {
  console.log(saida + segundo);
} else {
  saida += " " + segundo;
  for (let i = 3; i <= quantidade; i++) {
    let atual = primeiro + segundo;
    saida += " " + atual;
    primeiro = segundo;
    segundo = atual;
  }
  console.log(saida);
}
