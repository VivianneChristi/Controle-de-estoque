document.addEventListener("DOMContentLoaded", function() {
    const form = document.getElementById("loginForm");

    // Array de usuários fictícios para teste
    const usuarios = [
        { cpf: "111.111.111-11", senha: "senha1" },
        { cpf: "222.222.222-22", senha: "senha2" },
        { cpf: "333.333.333-33", senha: "senha3" },
        { cpf: "444.444.444-44", senha: "senha4" }
    ];

    form.addEventListener("submit", function(event) {
        event.preventDefault(); // Evita o envio do formulário padrão

        const cpf = document.getElementById("username").value;
        const senha = document.getElementById("password").value;

        console.log("CPF:", cpf);
        console.log("Senha:", senha);

        // Verificar se o CPF e a senha correspondem a um usuário
        const isValid = validarLogin(cpf, senha);

        if (isValid) {
            // Login bem-sucedido, redireciona para outra página
            console.log("Login bem-sucedido. Redirecionando...");
            console.log("Entreí"); // Mostrar "entrei" no console
            window.location.href = "pageInicial.html"; // Redireciona para a página inicial
        } else {
            // CPF ou senha incorretos, mostra um alerta
            console.log("CPF ou senha incorretos. Tente novamente.");
            alert("CPF ou senha incorretos. Tente novamente.");
        }
    });

    // Função para verificar se o login é válido
    function validarLogin(cpf, senha) {
        // Verifica se há um usuário correspondente no array
        const usuario = usuarios.find(user => user.cpf === cpf && user.senha === senha);
        return usuario !== undefined;
    }
});