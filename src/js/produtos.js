document.addEventListener('DOMContentLoaded', function () {
    // Carrega os produtos do localStorage
    const produtos = JSON.parse(localStorage.getItem('produtos'));
    if (produtos) {
        // Obtém a tabela de inventário
        const inventoryList = document.getElementById('inventory-list');

        // Limpa a tabela existente
        inventoryList.innerHTML = '';

        // Itera sobre os produtos e os adiciona à tabela
        produtos.forEach(function (produto, index) {
            const newRow = document.createElement('tr');
            newRow.innerHTML = `
                <td>${produto.Cod}</td>
                <td>${produto.Nome}</td>
                <td>${produto.Quantidade}</td>
                <td>${produto.Valor}</td>
            `;
            inventoryList.appendChild(newRow);
        });
    }
});