let salario = parseFloat(lines.shift());

if (salario >= 0 && salario <= 400.0) {
  novoSalario = salario + salario * 0.15;
  console.log(`Novo salario: ${novoSalario.toFixed(2)}`);
  reajusteGanho = novoSalario - salario;
  console.log(`Reajuste ganho: ${reajusteGanho.toFixed(2)}`);
  console.log(`Em percentual: 15 %`);
} else if (salario <= 800.0) {
  novoSalario = salario + salario * 0.12;
  console.log(`Novo salario: ${novoSalario.toFixed(2)}`);
  reajusteGanho = novoSalario - salario;
  console.log(`Reajuste ganho: ${reajusteGanho.toFixed(2)}`);
  console.log(`Em percentual: 12 %`);
} else if (salario <= 1200.0) {
  novoSalario = salario + salario * 0.1;
  console.log(`Novo salario: ${novoSalario.toFixed(2)}`);
  reajusteGanho = novoSalario - salario;
  console.log(`Reajuste ganho: ${reajusteGanho.toFixed(2)}`);
  console.log(`Em percentual: 10 %`);
} else if (salario <= 2000.0) {
  novoSalario = salario + salario * 0.07;
  console.log(`Novo salario: ${novoSalario.toFixed(2)}`);
  reajusteGanho = novoSalario - salario;
  console.log(`Reajuste ganho: ${reajusteGanho.toFixed(2)}`);
  console.log(`Em percentual: 7 %`);
} else if (salario >= 2000.0) {
  novoSalario = salario + salario * 0.04;
  console.log(`Novo salario: ${novoSalario.toFixed(2)}`);
  reajusteGanho = novoSalario - salario;
  console.log(`Reajuste ganho: ${reajusteGanho.toFixed(2)}`);
  console.log(`Em percentual: 4 %`);
}
