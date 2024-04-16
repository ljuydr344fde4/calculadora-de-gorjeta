let conta = 0
let pessoas = 0

const contaInput = document.querySelector("#conta")
contaInput.addEventListener("input", recebervalorconta)

function recebervalorconta(evento) {
   conta = Number(evento.target.value)
   
}

const pessoasinput = document.querySelector("#pessoas")
pessoasinput.addEventListener("input",recerQuantidadePessoas)

function recerQuantidadePessoas(evento){
    const paragrafoError = document.querySelector(".pessoas #erro")
    const divErro = document.querySelector(".pessoas .input-box")
    if(evento.target.value === "0"){
        paragrafoError.style.display = "block"
        divErro.setAttribute("id", "erro-div")
    } else{
        paragrafoError.style.display = "none"
        divErro.setAttribute("id", "")
        pessoas = Number(evento.target.value)
    }
    
}
const botoesGorjeta = document.querySelector(".gorjet input[type='button']")
botoesGorjeta.forEach(botao => {
    botao.addEventListener("click", receberPorcentagem)
})     
function receberPorcentagem(evento) {
    console.log(evento.target.value)
  
}