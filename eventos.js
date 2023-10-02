// Obtenemos una referencia al div por su ID
const miDiv = document.getElementById("miDiv");

const boton = document.getElementById("miBoton");

// Agregamos un manejador de eventos para el evento "click"
miDiv.addEventListener("click", function() {
    alert("Hola! Soy el div");
});

boton.addEventListener("click", function(event) {
    event.stopPropagation(); // Detiene la propagación del evento
    alert("Se hizo clic en el botón");
});