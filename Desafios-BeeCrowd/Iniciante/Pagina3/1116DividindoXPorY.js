let quantidade = parseInt(lines[0]);

for (let i = 1; i <= quantidade; i++) {
  let array = lines[i].split(" ");
  let x = parseInt(array[0]);
  let y = parseInt(array[1]);

  if (y === 0) {
    console.log("divisao impossivel");
  } else {
    let divisao = x / y;
    console.log(divisao.toFixed(1));
  }
}
