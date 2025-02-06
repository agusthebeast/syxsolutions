document.getElementById("loginForm").addEventListener("submit", function(event) {
    event.preventDefault();
    
    let dni = document.getElementById("dni").value;
    let password = document.getElementById("password").value;

    if (dni === "" || password === "") {
        alert("Por favor, complete todos los campos.");
        return;
    }

    // Simulación de autenticación (esto luego se conecta con el backend)
    if (dni === "12345678" && password === "admin") {
        window.location.href = "../dYt4QpXv/xNv8YpTq.html"; // Redirige al dashboard
    } else {
        alert("DNI o contraseña incorrectos.");
    }
});

function registrarUsuario(event) {
    event.preventDefault();

    let url = "TU_URL_DE_IMPLEMENTACION"; // Reemplázala con la URL del Apps Script
    let fileInput = document.getElementById("fotoDni");
    let file = fileInput.files[0];

    if (!file) {
        alert("Debes subir una foto del DNI.");
        return;
    }

    let reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = function () {
        let base64String = reader.result.split(',')[1]; // Convertimos a Base64
        
        let usuario = {
            dni: document.getElementById("dni").value,
            nombre: document.getElementById("nombre").value,
            correo: document.getElementById("correo").value,
            celular: document.getElementById("celular").value,
            contraseña: document.getElementById("contraseña").value,
            foto_dni: base64String, // Guardamos la imagen en base64
            mimeType: file.type
        };

        fetch(url, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(usuario)
        })
        .then(() => alert("Registro exitoso"))
        .catch(error => console.error("Error:", error));
    };
}
