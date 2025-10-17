let array;
let x;
let y;

do {
  array = lines.shift().split(" ");

  y = parseFloat(array.shift());
  x = parseFloat(array.shift());

  if (x === 0 || y === 0) {
    break;
  }

  if (x > 0) {
    if (y > 0) {
      console.log("primeiro");
    } else if (y < 0) {
      console.log("segundo");
    }
  } else if (x < 0) {
    if (y > 0) {
      console.log("quarto");
    } else if (y < 0) {
      console.log("terceiro");
    }
  }
} while (x !== 0 || y !== 0);
