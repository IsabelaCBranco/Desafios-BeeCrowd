var input = require("fs").readFileSync("/dev/stdin", "utf8");
var lines = input.split("\n");

let array = lines.shift().split(" ");

let a = parseInt(array.shift());
let b = parseInt(array.shift());

let valores = [a, b];

if (a < b) {
  [a, b] = [b, a];
}

if (a % b === 0) {
  console.log("Sao Multiplos");
} else {
  console.log("Nao sao Multiplos");
}
