var input = require("fs").readFileSync("/dev/stdin", "utf8");
var lines = input.split("\n");

let name = lines[0];
let salary_init = parseFloat(lines[1]);
let sales = parseFloat(lines[2]);

let total = salary_init + sales * 0.15;

console.log("TOTAL = R$ " + total.toFixed(2));
