// Manejo del inicio de sesión
document.getElementById("loginForm").addEventListener("submit", function(event) {
    event.preventDefault();

    const distrito = document.getElementById("distrito").value.toLowerCase();
    const dni = document.getElementById("dni").value;

    // Datos de prueba
    const usuarioValido = "sanvicente";
    const claveValida = "51704651";

    if (distrito === usuarioValido && dni === claveValida) {
        window.location.href = "panel.html"; // Redirige al panel principal
    } else {
        alert("Credenciales incorrectas. Verifica el distrito y el DNI.");
    }
});
