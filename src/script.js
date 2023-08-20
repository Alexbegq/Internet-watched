/*ONLOAD*/
function hideAllSections() {
    const cases = document.querySelectorAll('.case');
    cases.forEach(caseItem => {
        caseItem.style.display = 'none';
    });
}

function toggleCase(caseId) {
    hideAllSections();
    const caseItem = document.getElementById(caseId);
    if (caseItem) {
        caseItem.style.display = 'block';
    }
}

document.addEventListener('DOMContentLoaded', () => {
    const links = document.querySelectorAll('.links a');
    links.forEach(link => {
        link.addEventListener('click', (event) => {
            const sectionId = event.target.getAttribute('href').substring(1);
            hideAllSections();
            toggleCase(sectionId);
        });
    });

    // Отображение начального кейса при загрузке страницы
    toggleCase('main');

    // Обработка кликов по пунктам меню выпадающего меню
    const dropdownLinks = document.querySelectorAll('.dropdown_menu a');
    dropdownLinks.forEach(link => {
        link.addEventListener('click', (event) => {
            const sectionId = event.target.getAttribute('href').substring(1);
            hideAllSections();
            toggleCase(sectionId);
        });
    });

    // Обработка кликов по пунктам списка li
    const listCases = document.querySelectorAll('.catalogy_button + ul li');
    listCases.forEach(caseItem => {
        caseItem.addEventListener('click', (event) => {
            const sectionId = event.target.firstElementChild.getAttribute('href').substring(1);
            hideAllSections();
            toggleCase(sectionId);
        });
    });
// Обробка кліків для елементів з класом .small_box_btn
    const smallBoxLinks = document.querySelectorAll('.small_box_btn');
    smallBoxLinks.forEach(link => {
        link.addEventListener('click', (event) => {
            event.preventDefault(); // Зупиняємо стандартну дію переходу по посиланню
            const sectionId = event.target.getAttribute('href').substring(1);
            hideAllSections();
            toggleCase(sectionId);
        });
    });
});



