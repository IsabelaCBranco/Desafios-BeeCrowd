let novoJogo = 1;

let contagemGrenais = 0;
let contagemGremio = 0;
let contagemInter = 0;
let contagemEmpates = 0;
do {
  let resultado = lines.shift().split(" ");
  let golsInter = parseInt(resultado[0]);
  let golsGremio = parseInt(resultado[1]);
  contagemGrenais++;

  if (golsInter > golsGremio) {
    contagemInter++;
  } else if (golsGremio > golsInter) {
    contagemGremio++;
  } else if (golsGremio == golsInter) {
    contagemEmpates++;
  }
  do {
    console.log("Novo grenal (1-sim 2-nao)");
    novoJogo = parseInt(lines.shift());
  } while (novoJogo !== 1 && novoJogo !== 2);
} while (novoJogo !== 2);

console.log(contagemGrenais + " grenais");
console.log("Inter:" + contagemInter);
console.log("Gremio:" + contagemGremio);
console.log("Empates:" + contagemEmpates);
if (contagemGremio > contagemInter && contagemGremio > contagemEmpates) {
  console.log("Gremio venceu mais");
} else if (contagemInter > contagemGremio && contagemInter > contagemEmpates) {
  console.log("Inter venceu mais");
} else if (
  contagemEmpates > contagemGremio &&
  contagemEmpates > contagemInter
) {
  console.log("Nao houve vencedor");
}
