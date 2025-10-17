let senha;

do {
  senha = lines.shift();

  if (senha != "2002") {
    console.log("Senha Invalida");
  }
} while (senha != "2002");

console.log("Acesso Permitido");
