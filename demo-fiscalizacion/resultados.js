// Funciones para mostrar las opciones paso a paso
function mostrarSecciones() {
    document.getElementById("seleccionarProvincia").style.display = "none";
    document.getElementById("seleccionarSeccion").style.display = "block";
}

function mostrarDistritos() {
    document.getElementById("seleccionarSeccion").style.display = "none";
    document.getElementById("seleccionarDistrito").style.display = "block";
}

function mostrarResultados() {
    document.getElementById("seleccionarDistrito").style.display = "none";
    document.getElementById("resultados").style.display = "block";

    // Datos ficticios de la votación
    const datosResultados = {
        labels: ["La Libertad Avanza", "Juntos por el Cambio", "Unión por la Patria", "Votos en Blanco", "Votos Nulos"],
        datasets: [{
            label: "Porcentaje de Votos",
            data: [52, 28, 16, 3, 1], // Simulación de porcentaje de votos
            backgroundColor: ["#6A0DAD", "#FFD700", "#00AEEF", "#CCCCCC", "#000000"]
        }]
    };

    // Configuración del gráfico
    const config = {
        type: "pie",
        data: datosResultados
    };

    // Renderizar el gráfico en el canvas con un tamaño más pequeño
    const ctx = document.getElementById("graficoResultados").getContext("2d");
    new Chart(ctx, config);
}
