document.getElementById("es-button").addEventListener("click", function() {
    var interval = setInterval(function() {
        var selectField = document.querySelector("#google_translate_element select");
        if (selectField) {
            selectField.selectedIndex = 0; // Selecciona "Español"
            selectField.dispatchEvent(new Event('change'));
            clearInterval(interval); // Detén el intervalo una vez que se ha encontrado el elemento
        }
    }, 100); // Revisa cada 100 ms
});

document.getElementById("en-button").addEventListener("click", function() {
    var interval = setInterval(function() {
        var selectField = document.querySelector("#google_translate_element select");
        if (selectField) {
            selectField.selectedIndex = 1; // Selecciona "Inglés"
            selectField.dispatchEvent(new Event('change'));
            clearInterval(interval); // Detén el intervalo una vez que se ha encontrado el elemento
        }
    }, 100); // Revisa cada 100 ms
});

