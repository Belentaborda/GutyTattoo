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


var check=document.querySelector(".check");
check.addEventListener('click', idiom);
function idiom(){
  let id=check.checked;
  if(id==true){
    location.href="/public/en/index.html"
  }else{
    location.href="/index.html"
  }
}