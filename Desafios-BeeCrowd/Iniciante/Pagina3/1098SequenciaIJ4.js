let i = 0;
let j = 1;
let contador = 1;

do {
  for (contador = 1; contador <= 3; contador++) {
    j = i + contador;

    let iFormatado = parseFloat(i.toFixed(1));
    let jFormatado = parseFloat(j.toFixed(1));

    console.log(`I=${iFormatado} J=${jFormatado}`);
  }
  i = i + 0.2;
} while (i <= 2.1);
