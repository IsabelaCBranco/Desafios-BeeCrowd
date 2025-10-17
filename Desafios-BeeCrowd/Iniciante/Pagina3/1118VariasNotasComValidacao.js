let novoCalculo = 1;

do {
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
  do {
    console.log("novo calculo (1-sim 2-nao)");
    novoCalculo = parseInt(lines.shift());
  } while (novoCalculo !== 1 && novoCalculo !== 2);
} while (novoCalculo !== 2);
