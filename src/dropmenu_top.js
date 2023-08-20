document.addEventListener('DOMContentLoaded', function() {
    const catalogButton = document.querySelector('.catalogy_button');
    const submenu = document.querySelector('.navbar .links > li > ul');

    catalogButton.addEventListener('click', function(event) {
        submenu.style.display = submenu.style.display === 'block' ? 'none' : 'block';
        event.stopPropagation();
    });

    const submenuLinks = submenu.querySelectorAll('li > a');

    submenuLinks.forEach(link => {
        link.addEventListener('click', function() {
            submenu.style.display = 'none';
        });
    });

    document.addEventListener('click', function(event) {
        if (!submenu.contains(event.target) && submenu.style.display === 'block') {
            submenu.style.display = 'none';
        }
    });
});