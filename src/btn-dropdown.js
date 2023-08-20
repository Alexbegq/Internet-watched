/*btn DROPDOWN*/
const toggleBtn = document.querySelector('.toggle_btn')
const toggleBtnIcon = document.querySelector('.toggle_btn i')
const dropDownMenu = document.querySelector('.dropdown_menu')

// Добавляем обработчик события клика для элементов выпадающего меню
const dropdownItems = document.querySelectorAll('.dropdown_menu li a');
dropdownItems.forEach(item => {
    item.addEventListener('click', () => {
        dropDownMenu.classList.remove('open'); // Скрываем меню
        toggleBtnIcon.classList = 'fa-solid fa-bars'; // Восстанавливаем иконку
    });
});

toggleBtn.onclick = function (){
    dropDownMenu.classList.toggle('open')
    const isOpen = dropDownMenu.classList.contains('open')

    toggleBtnIcon.classList = isOpen
        ? 'fa-solid fa-xmark'
        : 'fa-solid fa-bars'
}

