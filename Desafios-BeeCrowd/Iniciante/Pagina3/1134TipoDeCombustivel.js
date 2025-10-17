let numero = 6;

let contagemAlcool = 0;
let contagemGasolina = 0;
let contagemDiesel = 0;
do {
  do {
    numero = parseInt(lines.shift());
  } while (numero !== 1 && numero !== 2 && numero !== 3 && numero !== 4);

  if (numero === 1) {
    contagemAlcool++;
  } else if (numero === 2) {
    contagemGasolina++;
  } else if (numero === 3) {
    contagemDiesel++;
  }
} while (numero !== 4);

console.log("MUITO OBRIGADO");
console.log("Alcool: " + contagemAlcool);
console.log("Gasolina: " + contagemGasolina);
console.log("Diesel: " + contagemDiesel);
