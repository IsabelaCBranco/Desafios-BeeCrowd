let renda = parseFloat(lines.shift());

if (renda >= 0 && renda <= 2000) {
  console.log("Isento");
} else if (renda > 2000 && renda <= 3000) {
  imposto = (renda - 2000) * 0.08;
  console.log("R$ " + imposto.toFixed(2));
} else if (renda > 3000 && renda <= 4500) {
  imposto = (renda - 3000) * 0.18 + 1000 * 0.08;
  console.log("R$ " + imposto.toFixed(2));
} else if (renda > 4500) {
  imposto = (renda - 4500) * 0.28 + 1500 * 0.18 + 1000 * 0.08;
  console.log("R$ " + imposto.toFixed(2));
}
