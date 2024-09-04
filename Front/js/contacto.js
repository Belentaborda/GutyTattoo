var check=document.querySelector(".check");


check.addEventListener('click', idiom);


function idiom(){
  let id=check.checked;


  if(id==true){
    location.href="../en/contacto.html"
  }else{
    location.href="/Front/pages/contacto.html"
  }


document.addEventListener("DOMContentLoaded", function () {
    // Cancel button
    document.querySelector(".close-button").addEventListener("click", function () {
        window.location.href = "/Front/index.html";
    });

    // Send button
    document.querySelector("#contact-form").addEventListener("submit", function (event) {
        event.preventDefault(); // Previene el envío del formulario

        // Mostrar el modal
        document.getElementById('success-modal').style.display = 'block';

        // Opcional: redirigir a la página después de un retraso
        setTimeout(function () {
            window.location.href = "/Front/index.html";
        }, 5000); // Redirige después de un largo retraso (ajusta el tiempo según lo necesario)
    });

    // Elimina este código si no necesitas un botón de cierre en el modal
    /*
    document.querySelector('.close-modal').addEventListener('click', function () {
        document.getElementById('success-modal').style.display = 'none';
    });
    */

    // Cerrar el modal si se hace clic fuera del contenido del modal
    window.addEventListener('click', function (event) {
        if (event.target === document.getElementById('success-modal')) {
            document.getElementById('success-modal').style.display = 'none';
        }
    });
});
}