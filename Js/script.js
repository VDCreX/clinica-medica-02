
function openAdminModal() {
    const modal = new bootstrap.Modal(document.getElementById('adminModal'));
    modal.show();
}


function authenticateAdmin() {
    const username = document.getElementById('adminUsername').value;
    const password = document.getElementById('adminPassword').value;

   
    if (username === "admin" && password === "1234") {
        alert("Autenticação bem-sucedida! Redirecionando para a área administrativa...");
        
        
    } else {
        alert("Credenciais incorretas! Tente novamente.");
    }
}


function openAdminPage() {
    window.location.href = "admin.html";
}

