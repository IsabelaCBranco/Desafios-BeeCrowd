let dataInicial = lines.shift().split(" ");
let horarioInicial = lines.shift().split(" : ");
let dataFinal = lines.shift().split(" ");
let horarioFinal = lines.shift().split(" : ");

let diaInicial = parseInt(dataInicial[1]);
let diaFinal = parseInt(dataFinal[1]);

let horaInicial = parseInt(horarioInicial[0]);
let minutoInicial = parseInt(horarioInicial[1]);
let segundoInicial = parseInt(horarioInicial[2]);

let horaFinal = parseInt(horarioFinal[0]);
let minutoFinal = parseInt(horarioFinal[1]);
let segundoFinal = parseInt(horarioFinal[2]);

let inicioEmSegundos =
  diaInicial * 24 * 60 * 60 +
  horaInicial * 60 * 60 +
  minutoInicial * 60 +
  segundoInicial;
let finalEmSegundos =
  diaFinal * 24 * 60 * 60 +
  horaFinal * 60 * 60 +
  minutoFinal * 60 +
  segundoFinal;

let diferencaEmSegundos = finalEmSegundos - inicioEmSegundos;

let dias = parseInt(diferencaEmSegundos / (24 * 60 * 60));
console.log(dias + " dia(s)");
diferencaEmSegundos = diferencaEmSegundos % (24 * 60 * 60);

let horas = parseInt(diferencaEmSegundos / (60 * 60));
console.log(horas + " hora(s)");
diferencaEmSegundos = diferencaEmSegundos % (60 * 60);

let minutos = parseInt(diferencaEmSegundos / 60);
console.log(minutos + " minuto(s)");
diferencaEmSegundos = diferencaEmSegundos % 60;

let segundos = diferencaEmSegundos;
console.log(segundos + " segundo(s)");
