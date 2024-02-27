
const exampleInputCod = document.getElementById("InputCod");

const exampleInputProd = document.getElementById("InputProd");

const exampleInputFab = document.getElementById("InputFab");

const exampleInputMod = document.getElementById("InputMod");

const exampleInputQnt = document.getElementById("InputQnt");

const exampleInputValue = document.getElementById("InputValue");

const btnInput = document.getElementById("btnInput");

const data = [];


btnInput.addEventListener('click', function (event) {

    event.preventDefault();

    const produto = {
        Nome: exampleInputProd.value,
        Cod: exampleInputCod.value,
        Modelo: exampleInputMod.value,
        Quantidade: exampleInputQnt.value,
        Valor: exampleInputValue.value,
    }

    data.push(produto);
    console.log(data);
});

//

var itemCount = 10; // Começando do próximo item


// Função para adicionar um novo item à lista
function addItem(name, quantity) {
    var inventoryList = document.getElementById('inventory-list');
    var listItem = document.createElement('li');
    listItem.textContent = name + ' - Quantidade: ' + quantity;
    inventoryList.appendChild(listItem);
}

// Evento de envio do formulário
document.getElementById('addItemForm').addEventListener('submit', function (event) {
    event.preventDefault();
    var itemName = document.getElementById('itemName').value;
    var itemQuantity = document.getElementById('itemQuantity').value;
    addItem(itemName, itemQuantity);
    // Limpar campos do formulário após adicionar o item
    document.getElementById('itemName').value = '';
    document.getElementById('itemQuantity').value = '';
});

itemCount++; // Incrementando o número de itens
var newRow = document.createElement('tr');
newRow.id = 'item-' + itemCount; // Atribuindo um ID exclusivo para a nova linha

newRow.innerHTML = `
            <td>${itemCode}</td>
            <td>${itemName}</td>
            <td>${itemQuantity}</td>
            <td>${itemValue}</td>
        `;

// Limpar campos do formulário após adicionar o item
document.getElementById('itemCode').value = '';
document.getElementById('itemName').value = '';
document.getElementById('itemQuantity').value = '';
document.getElementById('itemValue').value = '';

function searchItems() {
    var input, filter, table, tr, td, i, txtValue;
    input = document.getElementById("searchInput");
    filter = input.value.toUpperCase();
    table = document.getElementById("inventory-list");
    tr = table.getElementsByTagName("tr");
    for (i = 0; i < tr.length; i++) {
        td = tr[i].getElementsByTagName("td")[1]; // A segunda coluna contém o nome do produto
        if (td) {
            txtValue = td.textContent || td.innerText;
            if (txtValue.toUpperCase().indexOf(filter) > -1) {
                tr[i].style.display = "";
            } else {
                tr[i].style.display = "none";
            }
        }
    }
}