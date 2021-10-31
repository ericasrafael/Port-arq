document.querySelector(".hamburguer").addEventListener("click", () =>
    document.querySelector(".container").classList.toggle("show-menu")
);

document.querySelector("#quantidade").addEventListener("change", atualizarPreco)
function atualizarPreco(){
    const quantidade = document.querySelector("#quantidade").value
    const temProjeto = document.querySelector("#projeto").checked
    let preco = quantidade * 200;
    
    if(quantidade => 10) preco *= 0.75;
    else preco = quantidade * 200;

    document.querySelector("#preco").innerHTML = "R$" + preco.toFixed(2)
}

