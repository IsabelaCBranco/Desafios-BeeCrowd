var input = require("fs").readFileSync("/dev/stdin", "utf8");
var lines = input.split("\n");

let array = lines.shift().split(" ");

let y = parseFloat(array.shift());
let x = parseFloat(array.shift());

if (x === 0 && y === 0) {
  console.log("Origem");
} else if (x === 0) {
  console.log("Eixo X");
} else if (y === 0) {
  console.log("Eixo Y");
} else if (x > 0) {
  if (y > 0) {
    console.log("Q1");
  } else if (y < 0) {
    console.log("Q2");
  }
} else if (x < 0) {
  if (y > 0) {
    console.log("Q4");
  } else if (y < 0) {
    console.log("Q3");
  }
}
