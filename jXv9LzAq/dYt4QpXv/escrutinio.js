// Función para guardar los resultados de la mesa y notificar por WhatsApp
function guardarEscrutinio() {
    const numeroWhatsApp = "+541157331559"; // Número de prueba

    // Obtener valores de la planilla
    const votosLLA = document.getElementById("votosLLA").value || 0;
    const votosJxC = document.getElementById("votosJxC").value || 0;
    const votosUP = document.getElementById("votosUP").value || 0;
    const votosBlanco = document.getElementById("votosBlanco").value || 0;
    const votosNulos = document.getElementById("votosNulos").value || 0;

    // Mensaje de cierre de mesa
    const mensaje = `📢 Notificación: La mesa XXX ha sido cerrada.\n\n📊 Resultados:\n- 🟣 LLA: ${votosLLA}\n- 🟡 JxC: ${votosJxC}\n- 🔵 UP: ${votosUP}\n- ⚪ Blanco: ${votosBlanco}\n- ❌ Nulos: ${votosNulos}`;

    // Enviar notificación por WhatsApp
    const url = `https://api.whatsapp.com/send?phone=${numeroWhatsApp}&text=${encodeURIComponent(mensaje)}`;
    window.open(url, "_blank");

    alert("Escrutinio guardado y notificación enviada por WhatsApp.");
    
    // Redirigir al panel de fiscalización
    window.location.href = "panel.html";
}
