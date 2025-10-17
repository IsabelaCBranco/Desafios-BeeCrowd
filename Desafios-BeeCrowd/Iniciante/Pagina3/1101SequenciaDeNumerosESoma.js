let array;
let valoresM;
let valoresN;

do {
  array = lines.shift().split(" ");
  valoresM = parseInt(array.shift());
  valoresN = parseInt(array.shift());
  let soma = 0;
  let sequencia = "";
  let maior = Math.max(valoresM, valoresN);
  let menor = Math.min(valoresM, valoresN);

  if (valoresM <= 0 || valoresN <= 0) {
    break;
  }

  for (let i = menor; i <= maior; i++) {
    sequencia += i + " ";
    soma += i;
  }
  console.log(`${sequencia.trim()} Sum=${soma}`);
} while (valoresM > 0 && valoresN > 0);
