'use strict';
let readlineSync = require("readline-sync");

let nomeEvento = readlineSync.question("Nome do evento: ");
let dataEvento = readlineSync.question("Data do evento: [dd/mm/yyyy] ");

//data atual
let date = new Date();
let dia = date.getDate();
let mes = date.getMonth();
let ano = date.getFullYear();
let dataAtual = dia + "/" + (mes + 1) + "/" + ano;
var resp = "SIM";
let i = 0;
let ip = 0;
let listaDeParticipantes = [""];
listaDeParticipantes.pop();
let idadeDeParticipantes = [""];
idadeDeParticipantes.pop();
let listaDePalestrante = [""];
listaDePalestrante.pop();
let idadeDePalestrante = [""];
idadeDePalestrante.pop();

//Se a data atual é menor que a data do evento
if (dataAtual < dataEvento) {

    //Numero de palestrantes
    var np = readlineSync.question("Quantos palestrantes estarao no evento: ");

    //Enquanto palestrantes for menor que numero de palestrantes 
    while (ip < np) {
        let nomePalestrante = readlineSync.question("Nome do palestrante: ");
        let idadePalestrantes = readlineSync.question("Idade do palestrante: ");
        listaDePalestrante.push(nomePalestrante);
        idadeDePalestrante.push(idadePalestrantes);
        ip++
    }

    console.log("Participantes: ")
        //Enquanto participantes for menor que 100 e resposta for igual a SIM
    while ((i < 3) && (resp == "SIM")) {
        let nomeParticipante = readlineSync.question("Nome do participante: ");
        let idadeParticipante = readlineSync.question("Idade do participante: ");
        listaDeParticipantes.push(nomeParticipante);
        idadeDeParticipantes.push(idadeParticipante);

        //Se a idade do participante for menor que 18
        if (idadeParticipante < 18) {
            listaDeParticipantes.pop(nomeParticipante);
            idadeDeParticipantes.pop(idadeParticipante);
            i--;
            console.log("Cadastro não permitido por causa da idade");
        } else {
            console.log("Cadastro concluído")
        }

        resp = readlineSync.question("Deseja cadastrar mais um participante? [SIM/NAO] ").toUpperCase();

        i++;

        if ((i == 3) && (resp === "SIM")) {
            console.log("Limite de participantes esgotado");
        }
    }

} else {
    console.log("Cadastro não permitido, pois a data do evento já ocorreu");
}

//Listando os palestrantes e participantes
console.log("Lista de participantes e palestrantes do evento " + nomeEvento);
console.log("Palestrantes: ");
for (let indicePalestrantes = 0; indicePalestrantes < np; indicePalestrantes++) {
    console.log((indicePalestrantes + 1) + "- Nome: " + listaDePalestrante[indicePalestrantes] + "   Idade: " + idadeDePalestrante[indicePalestrantes]);
}
console.log("");
console.log("Participantes: ");
for (let indice = 0; indice < i; indice++) {
    console.log((indice + 1) + "- Nome: " + listaDeParticipantes[indice] + "   Idade: " + idadeDeParticipantes[indice] + " anos");
}