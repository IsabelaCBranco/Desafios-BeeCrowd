var input = require("fs").readFileSync("/dev/stdin", "utf8");
var lines = input.split("\n");

let array1 = lines.shift().split(" ");
let array2 = lines.shift().split(" ");

let codigo1 = array1.shift();
let quantidade1 = array1.shift();
let valUnitario1 = array1.shift();

let codigo2 = array2.shift();
let quantidade2 = array2.shift();
let valUnitario2 = array2.shift();

let valorTotal = quantidade1 * valUnitario1 + quantidade2 * valUnitario2;

console.log("VALOR A PAGAR: R$ " + valorTotal.toFixed(2));
