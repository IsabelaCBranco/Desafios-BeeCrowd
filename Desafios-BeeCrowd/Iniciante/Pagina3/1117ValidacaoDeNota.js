let constagemValidos = 0;
let soma = 0;
do {
  let notas = parseFloat(lines.shift());

  if (notas >= 0 && notas <= 10) {
    constagemValidos++;
    soma += notas;
  } else console.log("nota invalida");
} while (constagemValidos < 2);

let media = soma / constagemValidos;
console.log("media = " + media.toFixed(2));
