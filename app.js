document.getElementById("registrationForm").addEventListener("submit", function(event) {
    event.preventDefault(); 
    
    var username = document.getElementById("usernameReg").value;
    var password = document.getElementById("passwordReg").value;

    if (password.length < 8) {
        alert("Password must be at least 8 characters long.");
        return;
    }
    if (/^\d+$/.test(password)) {
        alert("Password cannot consist of only digits.");
        return;
    }
    if (!/[a-z]/.test(password) || !/[A-Z]/.test(password)) {
        alert("Password must contain both uppercase and lowercase letters.");
        return;
    }
    
    alert("Registration successful!");
});