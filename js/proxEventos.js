// Selecciona el contenedor del slider
const slider = document.querySelector('.img-slider');
let isDown = false;
let startX;
let scrollLeft;

// Evento cuando se inicia un toque
slider.addEventListener('touchstart', (e) => {
    isDown = true;
    startX = e.touches[0].pageX - slider.offsetLeft;
    scrollLeft = slider.scrollLeft;
});

// Evento cuando el deslizamiento termina
slider.addEventListener('touchend', () => {
    isDown = false;
});

// Evento cuando el toque sale de la zona
slider.addEventListener('touchcancel', () => {
    isDown = false;
});

// Evento cuando se mueve el dedo sobre el slider
slider.addEventListener('touchmove', (e) => {
    if (!isDown) return;
    e.preventDefault();
    const x = e.touches[0].pageX - slider.offsetLeft;
    const walk = (x - startX) * 3; // Velocidad de deslizamiento
    slider.scrollLeft = scrollLeft - walk;
});