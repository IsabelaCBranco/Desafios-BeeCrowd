var input = require("fs").readFileSync("/dev/stdin", "utf8");
var lines = input.split("\n");

var n = parseInt(lines.shift());

var horas = parseInt(n / 3600);
n = n % 3600;

var minutos = parseInt(n / 60);
n = n % 60;

console.log(horas + ":" + minutos + ":" + n);
