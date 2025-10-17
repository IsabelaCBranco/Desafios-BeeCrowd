var input = require("fs").readFileSync("/dev/stdin", "utf8");
var lines = input.split("\n");

var array = lines.shift().split(" ");
let A = parseInt(array[0]);
let B = parseInt(array[1]);
let C = parseInt(array[2]);

let valores = [A, B, C];

valores.sort((a, b) => a - b);

console.log(valores[0]);
console.log(valores[1]);
console.log(valores[2]);

console.log();

console.log(A);
console.log(B);
console.log(C);
