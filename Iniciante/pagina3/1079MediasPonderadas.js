let linhas = parseInt(lines[0]);

for (let i = 1; i <= linhas; i++) {
  let valoresPorLinha = lines[i].split(" ");

  let notaPeso2 = parseFloat(valoresPorLinha.shift());
  let notaPeso3 = parseFloat(valoresPorLinha.shift());
  let notaPeso5 = parseFloat(valoresPorLinha.shift());

  let mediaPonderada = (notaPeso2 * 2 + notaPeso3 * 3 + notaPeso5 * 5) / 10;
  console.log(mediaPonderada.toFixed(1));
}
