let array;
let x;
let y;

do {
  array = lines.shift().split(" ");
  x = parseInt(array[0]);
  y = parseInt(array[1]);

  if (x > y) {
    console.log("Decrescente");
  } else if (x < y) {
    console.log("Crescente");
  }
} while (x != y);
