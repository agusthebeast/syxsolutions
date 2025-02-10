document.getElementById("sendBtn").addEventListener("click", function(event) {
    event.preventDefault();

    // Capturar datos del formulario
    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let message = document.getElementById("message").value;

    if (!name || !email || !message) {
        alert("❌ Por favor, completa todos los campos.");
        return;
    }

    // Configuración de EmailJS
    emailjs.send("service_jxem99o", "template_pmx9xl9", {
        name: name,
        reply_to: email,
        message: message
    }, "oeeUVR6Mui9Yxtrs8")
    .then(function(response) {
        alert("✅ Mensaje enviado con éxito!");
    }, function(error) {
        alert("❌ Error al enviar el mensaje. Revisa la consola.");
        console.error(error);
    });
});
