
document.getElementById("loginForm").onsubmit = function() {
    var role = document.getElementById("role").value;

    if (role == "administrator") {
        window.location.href = "../admin/admin.html";
    }
    else if (role == "user") {
        window.location.href = "../admin/booking.html";
    }
    else if (role == "staff") {
        window.location.href = "../admin/staff.html";
    }
    else if (role == "accountant") {
        window.location.href = "../admin/accountant.html";
    }

    return false;
};
