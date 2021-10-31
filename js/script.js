document.querySelector(".hamburguer").addEventListener("click", () =>
    document.querySelector(".container").classList.toggle("show-menu")
);

document.querySelector("#qtde").addEventListener("change", atualizarPreco)
document.querySelector("#projeto").addEventListener("change", atualizarPreco)
document.querySelector("#projeto-sim").addEventListener("change", atualizarPreco)
document.querySelector("#projeto-nao").addEventListener("change", atualizarPreco)
document.querySelector("#prazo").addEventListener("change", function () {
    const prazo = document.querySelector("#prazo").value
    document.querySelector("label[for=prazo]").innerHTML = `Prazo: ${prazo} semanas`
    atualizarPreco()
})

function atualizarPreco(){
    const qtde = document.querySelector("#qtde").value
    const temProjeto = document.querySelector("#projeto").checked
    const incluiProjeto = document.querySelector("#projeto-sim").checked
    const prazo = document.querySelector("#prazo").value
  
    let preco = qtde * 200;
    if (qtde > 9) preco *= 0.75
    if (incluiProjeto) preco += 500
    let taxaUrgencia = 1 - prazo*0.1;
    preco *= 1 + taxaUrgencia
   
    document.querySelector("#preco").innerHTML = `R$ ${preco.toFixed(2)}`
}

