// Función para mostrar los datos del formulario en una alerta
document.getElementById('contact-form').addEventListener('submit', function(event) {
    // Evitar que el formulario se envíe de manera predeterminada
    event.preventDefault();

    // Obtener los datos de los campos
    let name = document.getElementById('name').value;
    let email = document.getElementById('email').value;
    let message = document.getElementById('message').value;

    // Validar que todo este rellenado
    if (name === "" || email === "" || message === "") {
        alert("Todos los campos son obligatorios.");
        return;
    }

    // Mostrar alerta con los datos 
    alert(`Formulario enviado:\nNombre: ${name}\nCorreo Electrónico: ${email}\nMensaje: ${message}`);
});

//  cambiar el color del boton cuando el mouse esta sobre él
let submitBtn = document.getElementById('submit-btn');

submitBtn.addEventListener('mouseover', function() {
    this.style.backgroundColor = '#4CAF50'; 
    this.style.color = 'white';
});

submitBtn.addEventListener('mouseout', function() {
    this.style.backgroundColor = ''; 
    this.style.color = '';
});
