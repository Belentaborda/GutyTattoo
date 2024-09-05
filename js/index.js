document.addEventListener('DOMContentLoaded', () => {
    let currentSlide = 1;
    const totalSlides = 3;
    const autoSlideInterval = 5000; // 5000 ms = 5 segundos

    function changeSlide() {
        currentSlide++;
        if (currentSlide > totalSlides) {
            currentSlide = 1;
        }

        // Cambia el input de radio seleccionado para mostrar la siguiente imagen
        document.getElementById(currentSlide.toString()).checked = true;
    }

    // Inicia la reproducción automática
    let slideTimer = setInterval(changeSlide, autoSlideInterval);

    // Añade eventos para pausar el carrusel cuando el usuario navega manualmente
    document.querySelectorAll('.dots label').forEach(dot => {
        dot.addEventListener('click', () => {
            clearInterval(slideTimer); // Pausa la reproducción automática
            // Reinicia el temporizador
            slideTimer = setInterval(changeSlide, autoSlideInterval);
        });
    });
});


