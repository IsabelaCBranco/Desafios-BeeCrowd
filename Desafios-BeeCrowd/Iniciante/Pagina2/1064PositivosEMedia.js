let soma = 0;
let contador = 0;

for (let i = 0; i <= 6; i++) {
  let valor = parseFloat(lines.shift());

  if (valor > 0) {
    contador++;
    soma = soma + valor;
  }
}

console.log(contador + " valores positivos");
mediaPositivos = soma / contador;
console.log(mediaPositivos.toFixed(1));
