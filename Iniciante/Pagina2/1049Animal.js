let condicao1 = lines.shift();
let condicao2 = lines.shift();
let condicao3 = lines.shift();

if (condicao1 === "vertebrado") {
  if (condicao2 === "ave") {
    if (condicao3 === "carnivoro") {
      console.log("aguia");
    } else if (condicao3 === "onivoro") {
      console.log("pomba");
    }
  } else if (condicao2 === "mamifero") {
    if (condicao3 === "onivoro") {
      console.log("homem");
    } else if (condicao3 === "herbivoro") {
      console.log("vaca");
    }
  }
} else if (condicao1 === "invertebrado") {
  if (condicao2 === "inseto") {
    if (condicao3 === "hematofago") {
      console.log("pulga");
    } else if (condicao3 === "herbivoro") {
      console.log("lagarta");
    }
  } else if (condicao2 === "anelideo") {
    if (condicao3 === "hematofago") {
      console.log("sanguessuga");
    } else if (condicao3 === "onivoro") {
      console.log("minhoca");
    }
  }
}
