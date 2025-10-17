let contador = 0;

for (let i = 0; i < 6; i++) {
  let valores = parseFloat(lines.shift());
  if (valores > 0) {
    contador++;
  }
}

console.log(contador + " valores positivos");
