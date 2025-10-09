var input = require("fs").readFileSync("/dev/stdin", "utf8");
var lines = input.split("\n");

let array = lines.shift().split(" ");

let a = parseInt(array.shift());
let b = parseInt(array.shift());
let c = parseInt(array.shift());

let ab = (a + b + Math.abs(a - b)) / 2;

let maiorValor = (ab + c + Math.abs(ab - c)) / 2;

console.log(maiorValor + " eh o maior");
