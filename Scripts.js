$(document).ready(function() {
    // Ejemplo: cambiar el color de fondo de la sección al hacer clic en un botón
    $('.navbar a').on('click', function() {
        $('.section').css('background-color', '#f9f9f9');
    });
});


document.addEventListener('DOMContentLoaded', function() {
    // Ejemplo: cambiar el color de fondo de la sección al hacer clic en un botón
    document.querySelectorAll('.navbar a').forEach(function(button) {
        button.addEventListener('click', function() {
            document.querySelectorAll('.section').forEach(function(section) {
                section.style.backgroundColor = '#f9f9f9';
            });
        });
    });
});