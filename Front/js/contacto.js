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
