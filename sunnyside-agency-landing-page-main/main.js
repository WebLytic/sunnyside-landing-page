const hamIcon = document.querySelector(".ham-icon");
const navMenu = document.querySelector(".nav-ul");

hamIcon.addEventListener('click', function() {
    navMenu.classList.toggle("nav-mob");
});
