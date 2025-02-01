// Función para abrir la mesa y enviar notificación
function abrirMesa() {
    const numeroWhatsApp = "+541157331559"; // Número de prueba
    const mensaje = "🔔 Notificación: La mesa XXX ha sido abierta.";

    // Redirigir a WhatsApp Web para enviar la notificación
    const url = `https://api.whatsapp.com/send?phone=${numeroWhatsApp}&text=${encodeURIComponent(mensaje)}`;
    window.open(url, "_blank");

    alert("Notificación enviada por WhatsApp.");
}

// Función para pedir asistencia en la mesa
function pedirAsistencia() {
    const numeroWhatsApp = "+541157331559"; // Número de prueba
    const mensaje = "🚨 Urgente: Se requiere asistencia en la mesa XXX.";

    // Redirigir a WhatsApp Web para enviar la notificación
    const url = `https://api.whatsapp.com/send?phone=${numeroWhatsApp}&text=${encodeURIComponent(mensaje)}`;
    window.open(url, "_blank");

    alert("Solicitud de asistencia enviada por WhatsApp.");
}

// Función para cerrar la mesa y enviar escrutinio con los colores correctos
function cerrarMesa() {
    const numeroWhatsApp = "+541157331559"; // Número de prueba
    const votosLLA = document.getElementById("votosLLA").value || 0;
    const votosJxC = document.getElementById("votosJxC").value || 0;
    const votosUP = document.getElementById("votosUP").value || 0;
    const votosBlanco = document.getElementById("votosBlanco").value || 0;
    const votosNulos = document.getElementById("votosNulos").value || 0;

    const mensaje = `📢 Notificación: La mesa XXX ha sido cerrada.\n\n📊 Resultados:\n- 🟣 La Libertad Avanza: ${votosLLA}\n- 🟡 Juntos por el Cambio: ${votosJxC}\n- 🔵 Unión por la Patria: ${votosUP}\n- ⚪ Votos en Blanco: ${votosBlanco}\n- ❌ Votos Nulos: ${votosNulos}`;

    // Enviar notificación por WhatsApp
    const url = `https://api.whatsapp.com/send?phone=${numeroWhatsApp}&text=${encodeURIComponent(mensaje)}`;
    window.open(url, "_blank");

    alert("Escrutinio guardado y notificación enviada por WhatsApp.");

    // Redirigir al panel de fiscalización
    window.location.href = "panel.html";
}
