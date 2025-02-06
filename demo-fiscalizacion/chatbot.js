// Respuestas predefinidas del chatbot
const respuestas = {
    "¿Qué hago si no me dejan ingresar como fiscal?": "Debes presentar tu credencial y exigir tu derecho. Si persiste el problema, comunícate con el coordinador de fiscales.",
    "¿Cómo impugno un voto?": "Para impugnar un voto, debes fundamentar el motivo en el acta y comunicarlo a las autoridades de mesa.",
    "¿Qué hago si faltan boletas de mi partido?": "Debes notificarlo inmediatamente a las autoridades de mesa y al fiscal general para reponerlas. También puedes dejar constancia en el acta.",
    "¿Puedo usar mi celular dentro del establecimiento?": "Los fiscales pueden usar su celular solo para tareas relacionadas con la fiscalización, pero no para difundir imágenes ni influenciar a votantes.",
    "¿Qué pasa si hay votos sin firmar?": "Los votos sin firma pueden ser considerados nulos. Debes notificárselo al presidente de mesa y registrar la irregularidad en el acta."
};

// Función para manejar la interacción con el chatbot
function enviarPregunta() {
    const inputUsuario = document.getElementById("pregunta").value.trim();
    const respuesta = respuestas[inputUsuario] || "Lo siento, no tengo información sobre eso. Consulta con el fiscal general.";
    
    document.getElementById("respuesta").innerText = respuesta;
}