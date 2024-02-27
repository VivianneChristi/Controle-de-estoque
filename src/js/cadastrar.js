// getElementById, addEventListener, objetos

// addEvent



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