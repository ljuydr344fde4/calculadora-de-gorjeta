let conta = 0
let pessoas = 0
let porcentagem = 0

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
const botoesGorjeta = document.querySelector(".gorjeta input[type='button']")
 botoesGorjeta.forEach(botao => {
    botao.addEventListener("click", receberPorcentagembotao)
})     

function receberPorcentagembotao(evento) {
    botoesGorjeta.forEach(botao => {
        botao.classlist.remove("botao-ativo")
        if(botao.value === evento.target.value){
            botao.classlist.add("botao-ativo")
        }
     })
    porcentagem = parseFloat(evento.target.value) / 100
    
}