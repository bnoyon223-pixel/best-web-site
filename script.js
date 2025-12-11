// Input select
const email = document.querySelector("#noyon");
const pass = document.querySelectorAll("#noyon")[1];
const form = document.querySelector("form");

// Form Submit Event
form.addEventListener("submit", function (e) {
    e.preventDefault(); // Stop page reload

    let emailValue = email.value.trim();
    let passValue = pass.value.trim();

    // Check Empty
    if (emailValue === "" || passValue === "") {
        alert("Please fill all fields!");
        return;
    }

    // Email check
    if (!emailValue.includes("@") || !emailValue.includes(".")) {
        alert("Please enter a valid email!");
        return;
    }

    // Password length check
    if (passValue.length < 6) {
        alert("Password must be at least 6 characters!");
        return;
    }

    // Success
    alert("Login Successful!");
});
