$(document).ready(function() {
    // Suavizar el desplazamiento al hacer clic en los enlaces de la barra de navegación
    $('.navbar a').on('click', function(event) {
        if (this.hash !== "") {
            event.preventDefault();
            var hash = this.hash;
            $('html, body').animate({
                scrollTop: $(hash).offset().top
            }, 800, function(){
                window.location.hash = hash;
            });
        }
    });

    // Detectar el toque en el título y aplicar la animación de parpadeo
    $('.cover-page h1').on('click', function() {
        $(this).toggleClass('blink');
    });
});