var input = require("fs").readFileSync("/dev/stdin", "utf8");
var lines = input.split("\n");

let array = lines.shift().split(" ");

let a = parseFloat(array.shift());
let b = parseFloat(array.shift());
let c = parseFloat(array.shift());

let delta = b * b - 4 * a * c;
let r1 = (-b + Math.sqrt(delta)) / (2 * a);
let r2 = (-b - Math.sqrt(delta)) / (2 * a);

if (delta > 0 && a > 0) {
  console.log("R1 = " + r1.toFixed(5));
  console.log("R2 = " + r2.toFixed(5));
} else {
  console.log("Impossivel calcular");
}
