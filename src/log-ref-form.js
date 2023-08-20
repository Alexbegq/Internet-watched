document.addEventListener('DOMContentLoaded', function() {
    // При загрузке страницы показываем секцию authorization и скрываем секцию registration
    document.getElementById('authorization').style.display = 'block';
    document.getElementById('registration').style.display = 'none';

    // Обработчик для ссылки "Авторизуватись"
    document.querySelector('a[href="#authorization"]').addEventListener('click', function(event) {
        event.preventDefault(); // Предотвращаем стандартное поведение перехода по ссылке
        document.getElementById('authorization').style.display = 'block';
        document.getElementById('registration').style.display = 'none';
    });

    // Обработчик для ссылки "Реєстрація"
    document.querySelector('a[href="#registration"]').addEventListener('click', function(event) {
        event.preventDefault(); // Предотвращаем стандартное поведение перехода по ссылке
        document.getElementById('authorization').style.display = 'none';
        document.getElementById('registration').style.display = 'block';
    });
});