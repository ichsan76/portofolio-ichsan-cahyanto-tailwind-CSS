//Navbar Fixed
window.onscroll = function () {
    const header = document.querySelector("header");

    if (window.scrollY > 0) {
        header.classList.add("navbar-fixed");
    } else {
        header.classList.remove("navbar-fixed");
    }

};
//Hamburger

const hamburger = document.querySelector("#hamburger");

const navMenu = document.querySelector("#nav-menu");
hamburger.addEventListener("click", function () {
    hamburger.classList.toggle("hamburger-active");
    navMenu.classList.toggle("hidden");
});