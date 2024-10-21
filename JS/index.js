// Función para mostrar los datos del formulario en una alerta
document.getElementById('contact-form').addEventListener('submit', function(event) {
// Función 1: Validar el formulario y evitar el envío si hay errores
function validarFormulario(event, nombre, correo, mensaje) {
    event.preventDefault();

    console.log("Validando formulario...");

    // Validar campos vacíos
    if (nombre.value === "" || correo.value === "" || mensaje.value === "") {
        alert("Todos los campos son obligatorios.");
        return false;
    }

    // Si pasa la validación
    alert(`Formulario enviado:\nNombre: ${nombre.value}\nCorreo Electrónico: ${correo.value}\nMensaje: ${mensaje.value}`);
    console.log("Formulario validado y enviado.");
    return true;
}

// Función 2: Cambiar color de fondo del botón cuando el mouse está sobre él
function cambiarColorMouseOver() {
    console.log("Mouse sobre el botón.");
    this.style.backgroundColor = '#4CAF50'; 
    this.style.color = 'white';
}

// Función 3: Volver al color original cuando el mouse sale del botón
function restaurarColorMouseOut() {
    console.log("Mouse fuera del botón.");
    this.style.backgroundColor = ''; 
    this.style.color = '';
}

// Función 4: Mostrar alerta cuando el formulario pierde el foco
function alertaPerdidaFoco() {
    console.log("Formulario perdió el foco.");
    alert("Has perdido el foco del formulario.");
}

// Esperar a que el DOM esté cargado
document.addEventListener('DOMContentLoaded', function() {
    console.log("Documento cargado.");

    // Referencias a los elementos del DOM
    let form = document.getElementById('contact-form');
    let nombre = document.getElementById('name');
    let correo = document.getElementById('email');
    let mensaje = document.getElementById('message');
    let submitBtn = document.getElementById('submit-btn');

    // Asociar eventos a funciones
    form.addEventListener('submit', function(event) {
        validarFormulario(event, nombre, correo, mensaje);
    });

    submitBtn.addEventListener('mouseover', cambiarColorMouseOver);
    submitBtn.addEventListener('mouseout', restaurarColorMouseOut);

    // Evento adicional: cuando el formulario pierde el foco
    form.addEventListener('blur', alertaPerdidaFoco, true);
});
