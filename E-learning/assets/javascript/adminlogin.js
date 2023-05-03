function validate(event) {
    event.preventDefault();
    let email = document.getElementById("email").value;
    let password = document.getElementById("password").value;
    let flag = 0;
    console.log(Admins)
    Admins.forEach(admin => {
        if (admin.email == email && admin.password == password) {
            flag = 1;
        }
        if (admin.email == email && admin.password != password) {
            flag = 2;
        }
    });
    console.log(flag)
    if (flag == 1) {
        sessionStorage.setItem("admin", JSON.stringify(email));
        window.location.href = "admin.html";
    } else {
        document.getElementById("password").value = ""
        let passwordError = document.getElementById("password-error");
        passwordError.textContent = "Invalid email or password.";
    }
}