let i = 1;
let j = 7;
let contador = 1;

do {
  console.log(`I=${i} J=${j}`);
  contador++;
  j = j - 1;

  if (contador > 3) {
    j = j + 5;
    i = i + 2;
    contador = 1;
  }
} while (i <= 9);
