mostrarConselhoAleatorio()

async function criarConselhoAleatorio (){
    const url = "https://api.adviceslip.com/advice"
    const resposta = await fetch(url)
    return await resposta.json()
}

async function mostrarConselhoAleatorio (){
    const respostaConselho = await criarConselhoAleatorio()
    const idConselho = respostaConselho.slip.id
    const conselhoAleatorio = respostaConselho.slip.advice

    document.getElementById("id-conselho").innerHTML = `Advice # ${idConselho}`
    document.getElementById("conselho").innerHTML = conselhoAleatorio
}

document.getElementById("botao-novo-conselho").addEventListener("click", ()=> mostrarConselhoAleatorio())