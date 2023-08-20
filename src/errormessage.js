document.addEventListener('DOMContentLoaded', function() {
    // Получаем ссылки на элементы errorMessage в обеих секциях
    const authErrorMessage = document.querySelector('.authorization .errorMessage');
    const regErrorMessage = document.querySelector('.registration .errorMessage');

    // Скрываем элементы errorMessage изначально
    authErrorMessage.style.display = 'none';
    regErrorMessage.style.display = 'none';

    // Обработчик для кнопки "Login"
    document.querySelector('.authorization .submit').addEventListener('click', function(event) {
        // Предотвращаем стандартное поведение отправки формы
        event.preventDefault();

        // Показываем сообщение об ошибке
        authErrorMessage.style.display = 'block';

        // Активируем таймер для скрытия сообщения через 4 секунды
        setTimeout(function() {
            authErrorMessage.style.display = 'none';
        }, 4000);
    });



    // Обработчик для кнопки "Зареєструватись"
    document.querySelector('.registration .submit').addEventListener('click', function(event) {
        // Предотвращаем стандартное поведение отправки формы
        event.preventDefault();

        // Показываем сообщение об ошибке
        regErrorMessage.style.display = 'block';

        // Активируем таймер для скрытия сообщения через 4 секунды
        setTimeout(function() {
            regErrorMessage.style.display = 'none';
        }, 4000);
    });
});