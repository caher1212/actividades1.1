// Obtén una referencia al enlace
var enlace = document.getElementById("enlace");

// Agrega un controlador de eventos para el clic en el enlace
enlace.addEventListener("click", function(event) {
    // Evita que el enlace siga su URL original
    event.preventDefault();

    // Recarga la página automáticamente después de un cierto período de tiempo (en milisegundos)
    setTimeout(function() {
        location.reload();
    }, 1000); // Cambia 1000 a la cantidad de milisegundos que deseas esperar antes de recargar
});