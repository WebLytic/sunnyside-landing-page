const hamIcon = document.querySelector(".ham-icon");
const navMenu = document.querySelector(".nav-ul");
const closeBtn = document.querySelector(".close-btn");

hamIcon.addEventListener('click', function() {
    navMenu.classList.toggle("nav-mob");
    hamIcon.classList.add("hide-ham-icon");
    closeBtn.classList.add("show-close-btn");

});

closeBtn.addEventListener("click", function() {
    navMenu.classList.remove("nav-mob");
    hamIcon.classList.remove("hide-ham-icon");
    closeBtn.classList.remove("show-close-btn");
});
