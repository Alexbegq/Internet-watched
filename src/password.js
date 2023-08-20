document.addEventListener('DOMContentLoaded', function() {
    // Функция для переключения типа поля ввода пароля
    function togglePasswordVisibility(passwordInput) {
        if (passwordInput.type === 'password') {
            passwordInput.type = 'text';
        } else {
            passwordInput.type = 'password';
        }
    }

    // Обработчики для показа/скрытия пароля в обеих секциях
    const passwordInputs = document.querySelectorAll('.password');
    const eyeIcons = document.querySelectorAll('.fa-eye');

    eyeIcons.forEach(function(eyeIcon, index) {
        eyeIcon.addEventListener('click', function() {
            togglePasswordVisibility(passwordInputs[index]);
        });
    });
});

document.querySelector("form").addEventListener("submit", function(event) {
    const passwordInput = document.getElementById("password");
    if (passwordInput.value.length < 8) {
        alert("Пароль должен содержать минимум 8 символов.");
        event.preventDefault(); // Отменить отправку формы
    }
});