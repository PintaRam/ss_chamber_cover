document.getElementById("contactForm").addEventListener("submit", function(e) {
    e.preventDefault();

    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let phone = document.getElementById("phone").value;
    let msg = document.getElementById("message").value;

    // Construct SMS body
    let smsBody = `Name: ${name}%0AEmail: ${email}%0APhone: ${phone}%0AMessage: ${msg}`;

    // YOUR PHONE NUMBER
    let adminNumber = "+91XXXXXXXXXX";  

    // Open SMS app
    window.location.href = `sms:${adminNumber}?body=${smsBody}`;
});
