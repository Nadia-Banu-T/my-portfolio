// Animation while page loading
document.addEventListener("DOMContentLoaded", function () {
    document.querySelectorAll(".fade-in").forEach((el) => {
        el.style.animationDelay = "0.5s";
    });
});

// for hamburger/toggle menu effect
function toggleMenu() {
    document.querySelector(".nav-links").classList.toggle("active");
}