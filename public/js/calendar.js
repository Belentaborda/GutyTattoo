function generateCalendar() {
    const calendarContainer = document.getElementById("calendar");
    const date = new Date();
    const year = date.getFullYear();
    const month = date.getMonth();
    const today = date.getDate();
    let currentLanguage = 'es';
    const firstDay = new Date(year, month, 1).getDay(); // Primer día del mes
    const daysInMonth = new Date(year, month + 1, 0).getDate(); // Cantidad de días del mes

    // Días de la semana
    const weekdays = currentLanguage === 'es' 
                ? ['Dom', 'Lun', 'Mar', 'Mié', 'Jue', 'Vie', 'Sáb']
                : ['Sun', 'Mon', 'Tue', 'Wed', 'Thu','Fri','Sat'];
    weekdays.forEach(day => {
        const dayElement = document.createElement('div');
        dayElement.classList.add('day');
        dayElement.textContent = day;
        calendarContainer.appendChild(dayElement);
    });

    // Espacios vacíos hasta el primer día
    for (let i = 0; i < firstDay; i++) {
        const emptyElement = document.createElement('div');
        emptyElement.classList.add('day');
        calendarContainer.appendChild(emptyElement);
    }

    // Días del mes
    for (let i = 1; i <= daysInMonth; i++) {
        const dayElement = document.createElement('div');
        dayElement.classList.add('day');
        if (i === today) {
            dayElement.classList.add('current-day'); // Resaltar el día actual
        }
        dayElement.textContent = i;
        calendarContainer.appendChild(dayElement);
    }
    // Función para alternar el idioma usando el checkbox
    function toggleLanguage() {
        const checkbox = document.getElementById("languageToggle");
        currentLanguage = checkbox.checked ? 'en' : 'es';
        generateCalendar(); // Regenerar el calendario con el nuevo idioma
        }
// Event listener para cambiar el idioma al hacer clic en el botón
document.getElementById('languageToggle').addEventListener('click', toggleLanguage);
}

// Llamar a la función para generar el calendario al cargar la página
document.addEventListener('DOMContentLoaded', generateCalendar);