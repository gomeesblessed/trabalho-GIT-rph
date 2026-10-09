const frases = [
    "Beba água durante o dia.",
    "Organize seus horários de estudo.",
    "Durma bem antes de uma prova.",
    "Faça pausas entre as atividades."
];

let indice = -1;

document.getElementById("botao-frase").addEventListener("click", function() {
    indice = (indice + 1) % frases.length;
    document.getElementById("frases").textContent = frases[indice];
});