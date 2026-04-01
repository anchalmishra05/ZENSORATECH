const form = document.getElementById("form");
const password = document.getElementById("password");
const confirmPassword = document.getElementById("confirmPassword");
const message = document.getElementById("message");

form.addEventListener("submit", function(e) {
    e.preventDefault(); // prevent default submission

    if (password.value !== confirmPassword.value) {
        message.textContent = "Passwords do not match ❌";
        message.style.color = "red";
    } else {
        message.textContent = "Registration Successful ✅";
        message.style.color = "green";
    }
});