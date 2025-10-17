var input = require("fs").readFileSync("/dev/stdin", "utf8");
var lines = input.split("\n");

let array = lines.shift().split(" ");

let a = parseFloat(array.shift());
let b = parseFloat(array.shift());
let c = parseFloat(array.shift());

if (a < b + c && b < c + a && c < b + a) {
  let perimetro = a + b + c;
  console.log("Perimetro = " + perimetro.toFixed(1));
} else {
  let area = ((a + b) / 2) * c;
  console.log("Area = " + area.toFixed(1));
}
