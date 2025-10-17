let contador = 0;

for (let i = 0; i <= 5; i++) {
  let valor = parseInt(lines.shift());

  if (valor % 2 === 0) {
    contador++;
  }
}

console.log(contador + " valores pares");
