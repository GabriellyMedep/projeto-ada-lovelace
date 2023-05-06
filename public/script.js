
import {questao} from "./quiz.js";

const respostas = document.querySelector(".respostas");
const spanqtd = document.querySelector(".spanqtd");
const textFim = document.querySelector(".fim span");
const content = document.querySelector(".content");
const contentFim = document.querySelector(".fim");
const btnRestart = document.querySelector(".fim button");


let questoesCorreta = 0;
let indiceAtual = 0;

btnRestart.onclick =() => {
    content.style.display = "flex";
    contentFim.style.display = "none";

    questoesCorreta = 0;
    indiceAtual = 0;
    loadQuestao();
}

function proximaquestao(e){
    if(e.target.getAttribute("data-correct") === "true") {
       questoesCorreta ++;
       e.target.style.backgroundColor = "green";
    } else {
        e.target.style.backgroundColor = "red";
    }
    if(indiceAtual < questao.length - 1){
        indiceAtual ++;
        setTimeout(loadQuestao, 1000);
        } else {
        setTimeout(fim, 1000);
    }
}

function fim(){
    textFim.innerHTML = `Você acertou ${questoesCorreta} de ${questao.length}`;
    content.style.display = "none";
    contentFim.style.display = "flex";
}

function loadQuestao (){
    spanqtd.innerHTML = `${indiceAtual + 1}/${questao.length}`;
    const item = questao[indiceAtual];
    respostas.innerHTML = "";
    document.querySelector(".questao").innerHTML = item.Questão;

    item.respostas.forEach((resposta) => {
        const ul = document.createElement("ul");
        const button = document.createElement("button");
        button.classList.add("resposta");
        button.setAttribute("data-correct", resposta.correct);
        button.textContent = resposta.opcao;
        ul.appendChild(button);

    respostas.appendChild(ul);

    });
    
    document.querySelectorAll(".resposta").forEach((item) => {
        item.addEventListener("click", proximaquestao)
    });
}

loadQuestao();