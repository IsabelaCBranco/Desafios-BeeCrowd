// var lines = ["3 -1 0 -2 2"];

let array = lines.shift().split(" ");
let A = parseInt(array.shift());
let N = parseInt(array.shift());

do {
  if (N <= 0) {
    N = parseInt(array.shift());
  }
} while (N <= 0);

let soma = 0;

for (let i = 0; i < N; i++) {
  soma += A + i;
}

console.log(soma);
