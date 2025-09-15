// Função para mudar a cor de fundo da página
function mudarCorDeFundo() {
    const cores = ["#f4f4f4", "#ffe0b2", "#ffcc80", "#ff7043", "#ffab91"];
    const corAleatoria = cores[Math.floor(Math.random() * cores.length)];
    document.body.style.backgroundColor = corAleatoria;
}

// Função para exibir uma mensagem de boas-vindas
function exibirMensagemBoasVindas() {
    alert("Bem-vindo ao site de Músicas Sertanejas! Aproveite as melhores músicas do Brasil!");
}

// Função para mostrar ou esconder a lista de músicas
function alternarListaMusicas() {
    const lista = document.getElementById("musicas-lista");
    if (lista.style.display === "none" || lista.style.display === "") {
        lista.style.display = "block";
    } else {
        lista.style.display = "none";
    }
}

// Função para adicionar evento de carregamento da página
document.addEventListener("DOMContentLoaded", function () {
    // Exibir mensagem de boas-vindas ao carregar a página
    exibirMensagemBoasVindas();

    // Configurar o botão para mudar a cor de fundo
    const btnMudarCor = document.getElementById("btn-mudar-cor");
    btnMudarCor.addEventListener("click", mudarCorDeFundo);

    // Configurar o botão para alternar a lista de músicas
    const btnAlternarLista = document.getElementById("btn-alternar-lista");
    btnAlternarLista.addEventListener("click", alternarListaMusicas);
});
