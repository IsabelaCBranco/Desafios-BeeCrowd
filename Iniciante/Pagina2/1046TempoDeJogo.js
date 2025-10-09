let array = lines.shift().split(" ");

let inicio = parseInt(array.shift());
let fim = parseInt(array.shift());

let tempo = 0;
if (inicio < fim) {
  tempo = fim - inicio;
} else {
  tempo = 24 - inicio + fim;
}
console.log(`O JOGO DUROU ${tempo} HORA(S)`);
