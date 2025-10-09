var input = require("fs").readFileSync("/dev/stdin", "utf8");
var lines = input.split("\n");

let array = lines.shift().split(" ");

const pi = 3.14159;

let A = parseFloat(array.shift());
let B = parseFloat(array.shift());
let C = parseFloat(array.shift());

let areaTrianguloRetangulo = (A * C) / 2;

let areaCirculo = pi * (C * C);

let areaTrapezio = ((A + B) * C) / 2;

let areaQuadrado = B * B;

let areaRetangulo = A * B;

console.log("TRIANGULO: " + areaTrianguloRetangulo.toFixed(3));
console.log("CIRCULO: " + areaCirculo.toFixed(3));
console.log("TRAPEZIO: " + areaTrapezio.toFixed(3));
console.log("QUADRADO: " + areaQuadrado.toFixed(3));
console.log("RETANGULO: " + areaRetangulo.toFixed(3));
