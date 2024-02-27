document.addEventListener("DOMContentLoaded", function() {
    // Exemplo básico de pesquisa
    document.getElementById("searchField").addEventListener("keyup", function (event) {
        // Aqui você faria a lógica de busca
        var searchText = event.target.value;
        // Por exemplo, você pode enviar uma requisição AJAX para buscar resultados conforme o texto digitado
        // e atualizar a página com os resultados.
    });

    // Adicionando evento de clique para o título do seletor de produtos
    document.querySelector('.titulo-seletor').addEventListener('click', toggleListaProdutos);

    function toggleListaProdutos() {
        var listaProdutos = document.getElementById("listaProdutos");
        // Verifica se a lista de produtos está visível
        if (listaProdutos.style.display === "none") {
            listaProdutos.style.display = "block"; // Se estiver oculta, torna-a visível
        } else {
            listaProdutos.style.display = "none"; // Se estiver visível, torna-a oculta
        }
    }
});