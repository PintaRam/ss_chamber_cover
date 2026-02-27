// Form validation and submission
document.getElementById("contactForm").addEventListener("submit", function(e) {
    e.preventDefault();

    const submitBtn = document.querySelector('.btn-submit');
    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const phone = document.getElementById("phone").value.trim();
    const msg = document.getElementById("message").value.trim();

    // Validation
    if (!name || !email || !phone || !msg) {
        showNotification('Please fill in all fields', 'error');
        return;
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
        showNotification('Please enter a valid email address', 'error');
        return;
    }

    // Phone validation (basic)
    const phoneRegex = /^[0-9]{10}$/;
    if (!phoneRegex.test(phone.replace(/\s/g, ''))) {
        showNotification('Please enter a valid 10-digit phone number', 'error');
        return;
    }

    // Add loading state
    submitBtn.classList.add('loading');
    submitBtn.textContent = 'Sending...';

    // Construct SMS body
    const smsBody = `Name: ${name}%0AEmail: ${email}%0APhone: ${phone}%0AMessage: ${msg}`;

    // YOUR PHONE NUMBER
    const adminNumber = "+918951845341";

    // Simulate sending delay for better UX
    setTimeout(() => {
        // Open SMS app
        window.location.href = `sms:${adminNumber}?body=${smsBody}`;

        // Reset form after a delay
        setTimeout(() => {
            submitBtn.classList.remove('loading');
            submitBtn.textContent = 'Send Message';
            document.getElementById("contactForm").reset();
            showNotification('Message prepared! Please send the SMS.', 'success');
        }, 1000);
    }, 800);
});

// Notification system
function showNotification(message, type = 'info') {
    // Remove existing notifications
    const existingNotif = document.querySelector('.notification');
    if (existingNotif) {
        existingNotif.remove();
    }

    // Create notification
    const notification = document.createElement('div');
    notification.className = `notification ${type}`;
    notification.textContent = message;

    // Style the notification
    notification.style.cssText = `
        position: fixed;
        top: 100px;
        right: 20px;
        padding: 16px 24px;
        background: ${type === 'error' ? '#e74c3c' : type === 'success' ? '#1ABC9C' : '#3498db'};
        color: white;
        border-radius: 8px;
        box-shadow: 0 4px 12px rgba(0,0,0,0.2);
        z-index: 10000;
        animation: slideInRight 0.4s ease, slideOutRight 0.4s ease 2.6s;
        font-family: 'Raleway', sans-serif;
        font-weight: 500;
    `;

    document.body.appendChild(notification);

    // Remove after 3 seconds
    setTimeout(() => {
        notification.remove();
    }, 3000);
}

// Add animation keyframes
const style = document.createElement('style');
style.textContent = `
    @keyframes slideInRight {
        from {
            transform: translateX(400px);
            opacity: 0;
        }
        to {
            transform: translateX(0);
            opacity: 1;
        }
    }

    @keyframes slideOutRight {
        from {
            transform: translateX(0);
            opacity: 1;
        }
        to {
            transform: translateX(400px);
            opacity: 0;
        }
    }
`;
document.head.appendChild(style);

// Add focus effects to form inputs
const formInputs = document.querySelectorAll('.contact-form input, .contact-form textarea');
formInputs.forEach(input => {
    input.addEventListener('focus', function() {
        this.parentElement.classList.add('focused');
    });

    input.addEventListener('blur', function() {
        if (!this.value) {
            this.parentElement.classList.remove('focused');
        }
    });
});
