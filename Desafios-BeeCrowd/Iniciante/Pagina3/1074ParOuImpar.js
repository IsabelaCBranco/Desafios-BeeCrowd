let n = parseInt(lines[0]);

for (let i = 1; i <= n; i++) {
  let valores = parseInt(lines[i]);

  if (valores < 0 && valores % 2 === 0) {
    console.log("EVEN NEGATIVE");
  } else if (valores > 0 && valores % 2 === 0) {
    console.log("EVEN POSITIVE");
  } else if (valores < 0 && valores % 2 !== 0) {
    console.log("ODD NEGATIVE");
  } else if (valores > 0 && valores % 2 !== 0) {
    console.log("ODD POSITIVE");
  } else {
    console.log("NULL");
  }
}
