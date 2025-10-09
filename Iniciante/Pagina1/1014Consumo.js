var input = require("fs").readFileSync("/dev/stdin", "utf8");
var lines = input.split("\n");

let distanciaPercorrida = parseInt(lines.shift());
let combustivelGasto = parseFloat(lines.shift());

let consumo = distanciaPercorrida / combustivelGasto;

console.log(consumo.toFixed(3) + " km/l");
