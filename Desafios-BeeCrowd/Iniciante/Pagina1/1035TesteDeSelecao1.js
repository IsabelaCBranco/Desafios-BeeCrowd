var input = require("fs").readFileSync("/dev/stdin", "utf8");
var lines = input.split("\n");

let array = lines.shift().split(" ");

let a = parseInt(array.shift());
let b = parseInt(array.shift());
let c = parseInt(array.shift());
let d = parseInt(array.shift());

if (b > c && d > a && c + d > a + b && c > 0 && d > 0 && a % 2 === 0) {
  console.log("Valores aceitos");
} else {
  console.log("Valores nao aceitos");
}
