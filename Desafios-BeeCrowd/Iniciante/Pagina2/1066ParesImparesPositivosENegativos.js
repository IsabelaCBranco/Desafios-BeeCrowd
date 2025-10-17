let contadorPositivo = 0;
let contadorNegativo = 0;
let contadorPar = 0;
let contadorImpar = 0;

for (let i = 0; i < 5; i++) {
  let valores = parseInt(lines.shift());

  if (valores % 2 === 0) {
    contadorPar++;
  } else {
    contadorImpar++;
  }
  if (valores > 0) {
    contadorPositivo++;
  }
  if (valores < 0) {
    contadorNegativo++;
  }
}

console.log(contadorPar + " valor(es) par(es)");
console.log(contadorImpar + " valor(es) impar(es)");
console.log(contadorPositivo + " valor(es) positivo(s)");
console.log(contadorNegativo + " valor(es) negativo(s)");
