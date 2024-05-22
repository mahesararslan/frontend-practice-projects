/*=============== SHOW MENU ===============*/
const navMenu = document.getElementById("nav-menu");
const navToggle = document.getElementById("nav-toggle");
const navClose = document.getElementById("nav-close");

/*========== MENU SHOW ==========*/

// Validates if constant exists
if(navToggle) {
    navToggle.addEventListener("click", function() {
        navMenu.classList.add("show-menu");
    })
}

/*========== MENU HIDDEN ==========*/

// Validates if constant exists
if(navClose) {
    navClose.addEventListener("click", function() {
        navMenu.classList.remove("show-menu");
    })
}

/*=============== REMOVE MENU MOBILE ===============*/
const navLink = document.querySelectorAll("nav__link");
function linkAction() {
    const navMenu = document.getElementById("nav-menu");
    navMenu.classList.remove("show-menu");

}

navLink.forEach(function(n) {
    n.addEventListener("click", linkAction) 
})



/*=============== GSAP ANIMATION ===============*/
gsap.from(".home__points", 1.5, {opacity: 0, y: -300, delay: 0.2});
gsap.from(".home__rocket", 1.5, {opacity: 0, y: 300, delay: 0.3});
gsap.from(".home__planet-1", 1.5, {opacity: 0, y: -200, delay: 0.8});
gsap.from(".home__planet-2", 1.5, {opacity: 0, y: 200, delay: 1});
gsap.from(".home__cloud-1", 1.5, {opacity: 0, y: 200, delay: 1.2});
gsap.from(".home__cloud-2", 1.5, {opacity: 0, y: 200, delay: 1.3});
gsap.from(".home__content", 1.5, {opacity: 0, y: -100, delay: 1.4});
gsap.from(".home__title img", 1.5, {opacity: 0, y: -300, delay: 0.2});