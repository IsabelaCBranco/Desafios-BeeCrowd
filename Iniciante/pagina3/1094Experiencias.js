let n = parseInt(lines[0]);

let quantidadeTotal = 0;
let totalCoelhos = 0;
let totalRatos = 0;
let totalSapos = 0;

for (let i = 1; i <= n; i++) {
  let valoresLinha = lines[i].split(" ");
  let quantidade = parseInt(valoresLinha[0]);
  let animal = valoresLinha[1];

  quantidadeTotal += quantidade;

  if (animal === "C") {
    totalCoelhos += quantidade;
  } else if (animal === "R") {
    totalRatos += quantidade;
  } else if (animal === "S") {
    totalSapos += quantidade;
  }
}

let percentualCoelhos = (totalCoelhos / quantidadeTotal) * 100;
let percentualRatos = (totalRatos / quantidadeTotal) * 100;
let percentualSapos = (totalSapos / quantidadeTotal) * 100;

console.log(`Total: ${quantidadeTotal} cobaias`);
console.log("Total de coelhos: " + totalCoelhos);
console.log("Total de ratos: " + totalRatos);
console.log("Total de sapos: " + totalSapos);
console.log(`Percentual de coelhos: ${percentualCoelhos.toFixed(2)} %`);
console.log(`Percentual de ratos: ${percentualRatos.toFixed(2)} %`);
console.log(`Percentual de sapos: ${percentualSapos.toFixed(2)} %`);
