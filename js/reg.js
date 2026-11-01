
function validateForm() {

    var name = document.getElementById("fullname").value;
    var email = document.getElementById("email").value;
    var dob = document.getElementById("dob").value;
    var password = document.getElementById("password").value;
    var confirmPassword = document.getElementById("confirmPassword").value;
    var address = document.getElementById("address").value;
    var role = document.getElementById("department").value;
    var terms = document.getElementById("terms").checked;

    var errorBox = document.getElementById("error");
    errorBox.innerHTML = "";

    if (name == "") {
        errorBox.innerHTML = "Please enter your full name.";
        return false;
    }

    if (email == "") {
        errorBox.innerHTML = "Please enter your email.";
        return false;
    }

    if (email.indexOf("@") == -1 || email.indexOf(".") == -1) {
        errorBox.innerHTML = "Email is not valid (it needs @ and .).";
        return false;
    }

    var male = document.getElementById("male").checked;
    var female = document.getElementById("female").checked;
    var other = document.getElementById("other").checked;

    if (male == false && female == false && other == false) {
        errorBox.innerHTML = "Please select your gender.";
        return false;
    }

    if (dob == "") {
        errorBox.innerHTML = "Please enter your date of birth.";
        return false;
    }

    if (new Date(dob) >= new Date()) {
        errorBox.innerHTML = "Date of birth must be in the past.";
        return false;
    }

    if (password.length < 8) {
        errorBox.innerHTML = "Password must be at least 8 characters.";
        return false;
    }

    if (/[A-Z]/.test(password) == false) {
        errorBox.innerHTML = "Password must have at least one capital letter (A-Z).";
        return false;
    }

    if (/[a-z]/.test(password) == false) {
        errorBox.innerHTML = "Password must have at least one small letter (a-z).";
        return false;
    }

    if (/[0-9]/.test(password) == false) {
        errorBox.innerHTML = "Password must have at least one number (0-9).";
        return false;
    }

    if (/[^A-Za-z0-9]/.test(password) == false) {
        errorBox.innerHTML = "Password must have at least one special character (@, #, $, ! etc).";
        return false;
    }

    if (password != confirmPassword) {
        errorBox.innerHTML = "Password and Confirm Password do not match.";
        return false;
    }

    if (address == "") {
        errorBox.innerHTML = "Please enter your address.";
        return false;
    }

    if (role == "") {
        errorBox.innerHTML = "Please select your role.";
        return false;
    }

    if (terms == false) {
        errorBox.innerHTML = "You must agree to the Terms and Conditions.";
        return false;
    }

    alert("Registration successful!");

    return true;
}
