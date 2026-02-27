const sign_in_btn = document.querySelector("#sign-in-btn");
const sign_up_btn = document.querySelector("#sign-up-btn");
const container = document.querySelector(".container");

console.log("login.js loaded");

// Toggle between sign-in and sign-up forms
sign_up_btn.addEventListener("click", () => {
  container.classList.add("sign-up-mode");
});

sign_in_btn.addEventListener("click", () => {
  container.classList.remove("sign-up-mode");
});

// Hamburger menu toggle
function toggleMenu() {
    const nav = document.querySelector('nav');
    const navItems = document.querySelector('.nav-items');
    nav.classList.toggle('active');
    navItems.classList.toggle('active');
}
