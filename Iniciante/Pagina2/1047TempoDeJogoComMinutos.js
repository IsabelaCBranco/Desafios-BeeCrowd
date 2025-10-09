let array = lines.shift().split(" ");

let horaInicial = parseInt(array.shift());
let minutoInicial = parseInt(array.shift());
let horaFinal = parseInt(array.shift());
let minutoFinal = parseInt(array.shift());

let horas = 24 - horaInicial + horaFinal;
let minutos = 60 - minutoInicial + minutoFinal;

if (horas > 24) {
  horas = horas - 24;
}

if (minutoFinal < minutoInicial) {
  horas = horas - 1;
}

if (minutoInicial != minutoFinal && minuotos > 0 && horas === 24) {
  horas = 0;
}

if (minutos >= 60) {
  minutos = minutos - 60;
}

console.log(`O JOGO DUROU ${horas} HORA(S) E ${minutos} MINUTO(S)`);
