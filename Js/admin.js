
function toggleForms() {
    const loginForm = document.getElementById("login-form");
    const registerForm = document.getElementById("register-form");
    const formTitle = document.getElementById("form-title");
    const formSubtitle = document.getElementById("form-subtitle");
    const toggleLink = document.querySelector(".toggle-link a");

    if (loginForm.style.display === "none") {
        loginForm.style.display = "block";
        registerForm.style.display = "none";
        formTitle.innerText = "Login do Funcionário";
        formSubtitle.innerText = "Entre com suas credenciais";
        toggleLink.innerText = "Não tem uma conta? Cadastre-se aqui";
    } else {
        loginForm.style.display = "none";
        registerForm.style.display = "block";
        formTitle.innerText = "Cadastro de Funcionário";
        formSubtitle.innerText = "Preencha seus dados para criar uma conta";
        toggleLink.innerText = "Já tem uma conta? Faça login aqui";
    }
}
