window.onload = function() {
    var contentElements = document.querySelectorAll('.content > div:not(#content_main)');
    contentElements.forEach(function(el) {
        el.style.display = 'none';
    });
};
function toggleCases(id) {
    var contentElements = document.querySelectorAll('.content > div');

    contentElements.forEach(function (el) {
        if (el.id === id) {
            el.style.display = 'block';
        } else {
            el.style.display = 'none';
        }
    });
}

const contactButton = document.getElementById("contactButton");
const contactModal = document.getElementById("contactModal");
const closeModal = document.getElementById("closeModal");

contactButton.addEventListener("click", function() {
    contactModal.style.display = "block";
});

closeModal.addEventListener("click", function() {
    contactModal.style.display = "none";
});