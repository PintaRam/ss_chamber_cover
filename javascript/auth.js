// ================================
// Firebase Authentication + Database Setup
// ================================

import { initializeApp } from "https://www.gstatic.com/firebasejs/12.4.0/firebase-app.js";
import { getDatabase, ref, set, get, child } from "https://www.gstatic.com/firebasejs/12.4.0/firebase-database.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/12.4.0/firebase-analytics.js";

// 🔧 Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDV4WDkMEiTl-6-d4rRZ-ZZrdxbuQ8un2w",
  authDomain: "sschambercover.firebaseapp.com",
  projectId: "sschambercover",
  storageBucket: "sschambercover.firebasestorage.app",
  messagingSenderId: "493366515747",
  appId: "1:493366515747:web:4baf038a5bc13b123b3996",
  measurementId: "G-T397T6E714",
  databaseURL: "https://sschambercover-default-rtdb.firebaseio.com",
};

// ✅ Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const db = getDatabase(app);

console.log("auth.js loaded");

// ================================
// Create a Simple Progress Dialog
// ================================
function showLoader(message = "Creating account...") {
  let loader = document.createElement("div");
  loader.id = "progress-dialog";
  loader.style.position = "fixed";
  loader.style.top = "0";
  loader.style.left = "0";
  loader.style.width = "100%";
  loader.style.height = "100%";
  loader.style.background = "rgba(0,0,0,0.6)";
  loader.style.display = "flex";
  loader.style.justifyContent = "center";
  loader.style.alignItems = "center";
  loader.style.zIndex = "9999";
  loader.innerHTML = `
    <div style="
      background: #fff;
      padding: 20px 30px;
      border-radius: 12px;
      box-shadow: 0 4px 20px rgba(0,0,0,0.2);
      text-align: center;
      font-family: 'Poppins', sans-serif;
    ">
      <div class="spinner" style="
        width: 40px; height: 40px;
        border: 4px solid #ccc;
        border-top: 4px solid #E97451;
        border-radius: 50%;
        margin: 10px auto;
        animation: spin 1s linear infinite;
      "></div>
      <p style="margin: 0; color: #333;">${message}</p>
    </div>
    <style>
      @keyframes spin {
        0% { transform: rotate(0deg); }
        100% { transform: rotate(360deg); }
      }
    </style>
  `;
  document.body.appendChild(loader);
}

function hideLoader() {
  const loader = document.getElementById("progress-dialog");
  if (loader) loader.remove();
}

// ================================
// Signup Functionality
// ================================
const signupForm = document.querySelector(".sign-up-form");

if (signupForm) {
  signupForm.addEventListener("submit", (e) => {
    e.preventDefault();

    const username = signupForm.querySelector('input[placeholder="Username"]').value.trim();
    const email = signupForm.querySelector('input[placeholder="Email"]').value.trim();
    const password = signupForm.querySelector('input[placeholder="Password"]').value.trim();

    if (!username || !email || !password) {
      alert("⚠️ Please fill all fields!");
      return;
    }

    showLoader("Creating your account...");

    // Save user data to Firebase Realtime Database
    set(ref(db, "users/" + username), {
      username: username,
      email: email,
      password: password, // ⚠️ In production, use hashing
    })
      .then(() => {
        hideLoader();
        alert("🎉 Account created successfully!");
        localStorage.setItem("isLoggedIn", "true");
        localStorage.setItem("username", username);
        window.location.href = "../index.html"; // Redirect to home page
      })
      .catch((error) => {
        hideLoader();
        alert("❌ Error: " + error.message);
      });
  });
}

// ================================
// Login Functionality
// ================================
// Login Functionality (Fixed)
// ================================
const loginBtn = document.getElementById("login-btn");
console.log("Login button:", loginBtn);

if (loginBtn) {
  loginBtn.addEventListener("click", async () => {
    const username = document
      .querySelector(".sign-in-form input[placeholder='Username']")
      ?.value.trim().toLowerCase();
    const password = document
      .querySelector(".sign-in-form input[placeholder='Password']")
      ?.value.trim();

    if (!username || !password) {
      alert("⚠️ Please fill all fields!");
      return;
    }

    showLoader("Checking your account...");
    const dbRef = ref(db);

    try {
      const snapshot = await get(child(dbRef, "users/" + username));
      hideLoader();

      if (!snapshot.exists()) {
        alert("❌ User not found! Please sign up first.");
        return; // ⛔ Stop execution here
      }

      const user = snapshot.val();
      if (user.password !== password) {
        alert("❌ Incorrect password!");
        return; // ⛔ Stop execution here
      }

      // ✅ Success
      alert("✅ Login successful!");
      localStorage.setItem("isLoggedIn", "true");
      localStorage.setItem("username", username);
      window.location.href = "../index.html";
    } catch (error) {
      hideLoader();
      alert("❌ Error: " + error.message);
    }
  });
}

// ================================
// Show Profile Name (on Home Page)
document.addEventListener("DOMContentLoaded", () => {
  // Show profile name on home page
  const username = localStorage.getItem("username");
  const isLoggedIn = localStorage.getItem("isLoggedIn") === "true";

  // Profile greeting on page
  const profileNameElement = document.getElementById("profile-name");
  if (isLoggedIn && username && profileNameElement) {
    profileNameElement.textContent = `Welcome, ${username}!`;
  }

  // Update navbar login link
  const navLogin = document.getElementById("nav-login");
  if (isLoggedIn && username && navLogin) {
    navLogin.innerHTML = `<i class="fas fa-user"></i> ${username}`;
    navLogin.href = "#"; // optional: disable login link
  }
});
