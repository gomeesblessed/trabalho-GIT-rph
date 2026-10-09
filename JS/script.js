frases = ["Beba água durante o dia.", "Organize seus horários de estudo.",
    "Durma bem antes de uma prova.", "Faça pausas curtas entre as atividades."]

let i = -1

function gerar() {

    i += 1

    console.log(i)
    if (i >= 4) {
        i = 0
    }

    document.getElementById('frases').innerHTML = frases[i]

}