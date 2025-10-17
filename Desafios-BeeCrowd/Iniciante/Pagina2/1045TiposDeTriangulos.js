var input = require("fs").readFileSync("/dev/stdin", "utf8");
var lines = input.split("\n");

let array = lines.shift().split(" ");

let a = parseFloat(array.shift());
let b = parseFloat(array.shift());
let c = parseFloat(array.shift());

let valores = [a, b, c];

valores.sort((a, b) => a - b);
valores.reverse();
a = valores[0];
b = valores[1];
c = valores[2];

if (a >= b + c) {
  console.log("NAO FORMA TRIANGULO");
} else if (a * a == b * b + c * c) {
  console.log("TRIANGULO RETANGULO");
} else if (a * a > b * b + c * c) {
  console.log("TRIANGULO OBTUSANGULO");
} else if (a * a < b * b + c * c) {
  console.log("TRIANGULO ACUTANGULO");
}

if (a == b && b == c) {
  console.log("TRIANGULO EQUILATERO");
} else if (a == b || a == c || c == b) {
  console.log("TRIANGULO ISOSCELES");
}
