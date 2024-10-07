

function generatePassword() {
    var characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()";
    var passwordLength = 12;
    var password = "";

    for (var i = 0; i < passwordLength; i++) {
        var randomIndex = Math.floor(Math.random() * characters.length);
        password += characters.charAt(randomIndex);
    }

    document.getElementById("password").value = password;
}

function copyPassword(){
    var passwordField = document.getElementById("password");
    passwordField.select();
    passwordField.setSelectionRange(0, 99999); // For mobile devices
    document. execCommand("copy");
    alert("Password copied to clipboard!");
}
