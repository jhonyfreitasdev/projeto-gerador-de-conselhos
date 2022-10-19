const botao = document.getElementById("botao-novo-conselho");
const idDoConselho = document.getElementById("id-conselho");
const textoDoConselho = document.getElementById("conselho"); 

async function mostrarConselho (){
    const resposta = await fetch("https://api.adviceslip.com/advice")
    const json = await resposta.json()
    const idConselho = json.slip.id
    const conselhoAleatorio = json.slip.advice

    idDoConselho.innerHTML = `Advice # ${idConselho}`
    textoDoConselho.innerHTML = conselhoAleatorio
}

botao.addEventListener("click", mostrarConselho)

mostrarConselho()