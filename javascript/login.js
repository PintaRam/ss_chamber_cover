const sign_in_btn = document.querySelector("#sign-in-btn");
const sign_up_btn = document.querySelector("#sign-up-btn");
const container = document.querySelector(".container");

console.log("register.js loaded");

function handleLogin() {
    console.log("Login button clicked");
    localStorage.setItem("isLoggedIn", "true");
    window.location.href = "index.html"; // Redirect to home page
}

document.getElementById("login-btn").addEventListener("click", handleLogin);


sign_up_btn.addEventListener("click", () => {
  container.classList.add("sign-up-mode");
});

sign_in_btn.addEventListener("click", () => {
  container.classList.remove("sign-up-mode");
});

console.log("register.js loaded");

function handleLogin() {
    console.log("Login button clicked");
    localStorage.setItem("isLoggedIn", "true"); // Set login state
    window.location.href = "../index.html"; // Redirect to home page
}

document.getElementById("login-btn").addEventListener("click", handleLogin);
