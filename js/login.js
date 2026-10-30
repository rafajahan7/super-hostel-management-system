
document.getElementById("loginForm").onsubmit = function() {

    var role = document.getElementById("role").value;

    if (role == "administrator") {
        window.location.href = "../admin/admin.html";
    }
    else {
        alert("This role's page is not available yet.");
    }

    return false;
};
