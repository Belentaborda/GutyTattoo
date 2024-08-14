document.addEventListener('DOMContentLoaded', function() {
    // Cancel
    document.querySelector('.close-button').addEventListener('click', function() {
        window.location.href = '/Front/index.html';
    });

    // Send
    document.querySelector('#contact-form').addEventListener('submit', function(event) {
        event.preventDefault(); 
        window.location.href = '/Front/pages/index.html'; 
    });
});

document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('contact-form');
    const modal = document.getElementById('success-modal');
    const closeModal = document.querySelector('.modal .close');

    form.addEventListener('submit', (event) => {
        event.preventDefault(); // Evita el envío del formulario por defecto

        // Muestra el modal
        modal.style.display = 'block';

        // Opcional: Puedes limpiar el formulario aquí si lo deseas
        form.reset();

        // Oculta el modal después de 5 segundos (5000 milisegundos)
        setTimeout(() => {
            modal.style.display = 'none';
        }, 50000); // Cambia este valor para ajustar el tiempo en milisegundos
    });

    closeModal.addEventListener('click', () => {
        modal.style.display = 'none';
    });

    window.addEventListener('click', (event) => {
        if (event.target === modal) {
            modal.style.display = 'none';
        }
    });
});
