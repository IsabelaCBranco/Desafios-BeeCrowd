let tamanhoDoVetor = parseInt(lines[0]);

let contadorDentro = 0;
let contadorFora = 0;

for (let i = 1; i <= tamanhoDoVetor; i++) {
  let valores = parseFloat(lines[i]);
  if (valores >= 10 && valores <= 20) {
    contadorDentro++;
  } else if (valores < 10 || valores > 20) {
    contadorFora++;
  }
}

console.log(contadorDentro + " in");
console.log(contadorFora + " out");
