let X = parseInt(lines[0]);
let Z = parseInt(lines[1]);

for (let i = 2; Z <= X; i++) {
  Z = parseInt(lines[i]);
}

let contador = 0;
let soma = 0;

for (let i = X; soma <= Z; i++) {
  soma += i;
  contador++;
}

console.log(contador);
