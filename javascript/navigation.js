// ===================================
// MOBILE NAVIGATION FUNCTIONALITY
// ===================================

// Toggle Mobile Menu
function toggleMenu() {
    const nav = document.querySelector("nav");
    const body = document.body;
    nav.classList.toggle("active");

    // Prevent body scroll when menu is open
    if (nav.classList.contains("active")) {
        body.style.overflow = "hidden";
    } else {
        body.style.overflow = "auto";
    }
}

// Mobile Dropdown Toggle
document.addEventListener('DOMContentLoaded', function() {
    const dropdownToggles = document.querySelectorAll('.dropdown-toggle');
    
    dropdownToggles.forEach(toggle => {
        toggle.addEventListener('click', function(e) {
            e.preventDefault();
            
            // Check if we're in mobile view
            if (window.innerWidth <= 768) {
                const parentNavItem = this.closest('.nav-item');
                const dropdown = parentNavItem.querySelector('.dropdown');
                
                // Close other dropdowns
                document.querySelectorAll('.nav-item').forEach(item => {
                    if (item !== parentNavItem) {
                        item.classList.remove('active');
                    }
                });
                
                // Toggle current dropdown
                parentNavItem.classList.toggle('active');
            }
        });
    });
});

// Close mobile menu when clicking outside
document.addEventListener('click', function(event) {
    const nav = document.querySelector("nav");
    const hamburger = document.querySelector(".hamburger");

    if (nav.classList.contains("active") &&
        !nav.contains(event.target) &&
        !hamburger.contains(event.target)) {
        toggleMenu();
    }
});

