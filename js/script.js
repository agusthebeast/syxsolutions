document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById("whatsapp-form");

    form.addEventListener("submit", (e) => {
        e.preventDefault();

        // Obtén los valores del formulario
        const name = document.getElementById("name").value;
        const email = document.getElementById("email").value;
        const message = document.getElementById("message").value;

        // Validar campos vacíos
        if (!name || !email || !message) {
            alert("Por favor, completa todos los campos.");
            return;
        }

        // Número de WhatsApp al que quieres enviar el mensaje
        const phoneNumber = "5491157331559"; // Tu número de WhatsApp

        // Construye el mensaje
        const whatsappMessage = `Hola, soy ${name}. Mi correo es ${email}. Quiero decirte lo siguiente: ${message}`;

        // Crea el enlace de WhatsApp
        const whatsappURL = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(whatsappMessage)}`;

        // Redirige al usuario a WhatsApp
        window.open(whatsappURL, "_blank");
    });
});
