const btnInput = document.getElementById("btnInput");

btnInput.addEventListener('click', function (event) {
    event.preventDefault();
    const produto = {
        Nome: exampleInputProd.value,
        Cod: exampleInputCod.value,
        Modelo: exampleInputMod.value,
        Quantidade: exampleInputQnt.value,
        Valor: exampleInputValue.value,
    }
    // Armazena os novos produtos no localStorage
    let produtos = [produto]; // Armazenando o novo produto em um array
    localStorage.setItem('produtos', JSON.stringify(produtos));
    console.log(produtos); // Para verificar se os dados foram salvos corretamente

    // Remover os itens existentes da tabela
    const inventoryList = document.getElementById('inventory-list');
    while (inventoryList.firstChild) {
        inventoryList.removeChild(inventoryList.firstChild);
    }
});