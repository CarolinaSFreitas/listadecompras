// cria referência aos elementos da página a serem manipulados

const frm = document.querySelector("form")
const listaProd = document.querySelector(".card-body")


//declara os vetores 
const produtos = []
const precos = []

//adiciona um ouvinte de evento pra 
frm.addEventListener("submit", (e) => {
    //evita o comportamento padrão do form que é enviar (submeter) o form
    e.preventDefault()
    //obtém o conteúdo dos campos do formulário
    const descricao = frm.descricao.value
    const preco = Number(frm.preco.value)

    //adiciona os dados aos vetores
    produtos.push(descricao)
    precos.push(preco)

    let resposta = ""
    for (let i = 0; i < produtos.length; i++) {
        resposta = resposta + "<h4>" + produtos[i] +
            "<span class='float-end me-2'> R$: " + precos[i].toLocaleString("pt-br", { minimumFractionDigits: 2 }) + "</span></h4>"
    }

    //innerHTML para modificar o conteúdo da página 
    //com conteúdo e tags HTML
    listaProd.innerHTML = resposta

    //limpa os campos dos formulários
    frm.descricao.value = ""
    frm.preco.value = ""

    //posticiona o cursor (joga o foco) no campo descricao
    frm.descricao.focus()
})

