var input = require("fs").readFileSync("/dev/stdin", "utf8");
var lines = input.split("\n");

let dias = parseInt(lines.shift());

let ano = parseInt(dias / 365);
console.log(ano + " ano(s)");
dias = dias % 365;

let meses = parseInt(dias / 30);
console.log(meses + " mes(es)");
dias = dias % 30;

console.log(dias + " dia(s)");
