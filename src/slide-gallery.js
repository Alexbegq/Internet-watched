/*SLIDE-GALLERY*/
document.addEventListener("DOMContentLoaded", function() {
    const productContainers = document.querySelectorAll('.product-container');
    const nxtBtn = document.querySelectorAll('.next-btn-gallery');
    const preBtn = document.querySelectorAll('.prev-btn-gallery');

    productContainers.forEach((item, i) => {
        let containerDimensions = item.getBoundingClientRect();
        let containerWidth = containerDimensions.width;

        let scrollPosition = 0;

        nxtBtn[i].addEventListener('click', () => {
            scrollPosition += containerWidth;
            item.scrollTo({
                left: scrollPosition,
                behavior: 'smooth',
            });
        });

        preBtn[i].addEventListener('click', () => {
            scrollPosition -= containerWidth;
            item.scrollTo({
                left: scrollPosition,
                behavior: 'smooth',
            });
        });
    });
});