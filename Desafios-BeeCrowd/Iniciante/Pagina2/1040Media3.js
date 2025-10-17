var input = require("fs").readFileSync("/dev/stdin", "utf8");
var lines = input.split("\n");

let notas = lines[0].split(" ");

let n1 = parseFloat(notas.shift());
let n2 = parseFloat(notas.shift());
let n3 = parseFloat(notas.shift());
let n4 = parseFloat(notas.shift());

let exame = parseFloat(lines[1]);

let media = (n1 * 2 + n2 * 3 + n3 * 4 + n4 * 1) / 10;

console.log("Media: " + media.toFixed(1));

if (media >= 7.0) {
  console.log("Aluno aprovado.");
} else if (media < 5.0) {
  console.log("Aluno reprovado.");
} else {
  console.log("Aluno em exame.");
  console.log("Nota do exame: " + exame.toFixed(1));
  mediaFinal = (media + exame) / 2;
  if (mediaFinal >= 5.0) {
    console.log("Aluno aprovado.");
  } else {
    console.log("Aluno reprovado.");
  }
  console.log("Media final: " + mediaFinal.toFixed(1));
}
