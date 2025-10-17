var input = require("fs").readFileSync("/dev/stdin", "utf8");
var lines = input.split("\n");

const kmL = 12;
let tempo = parseInt(lines.shift());
let velocidadeMedia = parseInt(lines.shift());

let distanciaPercorrida = tempo * velocidadeMedia;

let litrosViagem = distanciaPercorrida / kmL;

console.log(litrosViagem.toFixed(3));
