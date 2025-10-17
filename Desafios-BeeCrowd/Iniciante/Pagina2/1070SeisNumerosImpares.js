// let valor = parseInt(lines.shift());
let valor = 8;
let contador = 0;

do {
  if (valor % 2 !== 0) {
    console.log(valor);
    contador++;
  }
  valor++;
} while (contador < 6);
