var input = require("fs").readFileSync("/dev/stdin", "utf8");
var lines = input.split("\n");

let array = lines.shift().split(" ");

let codigo = parseInt(array.shift());
let quantidade = parseInt(array.shift());

if (codigo == 1) {
  preco = quantidade * 4.0;
} else if (codigo == 2) {
  preco = quantidade * 4.5;
} else if (codigo == 3) {
  preco = quantidade * 5.0;
} else if (codigo == 4) {
  preco = quantidade * 2.0;
} else if (codigo == 5) {
  preco = quantidade * 1.5;
}

console.log("Total: R$ " + preco.toFixed(2));
