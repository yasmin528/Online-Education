function validate(event) {
    event.preventDefault();
    let email = document.getElementById("email").value;
    let password = document.getElementById("password").value;
    let flag = 0;

    // Check if local storage has users array
    let sessionStorageUsers = sessionStorage.getItem("users");
    let users = sessionStorageUsers ? JSON.parse(sessionStorageUsers) : Users;

    console.log(users)
    users.forEach(user => {
        if (user.email == email && user.password == password) {
            flag = 1;
        }
        if (user.email == email && user.password != password) {
            flag = 2;
        }
    });
    console.log(flag)
    if (flag == 1) {
        sessionStorage.setItem("user", JSON.stringify(email));
        window.location.href = "E-learning.html";
    } else {
        document.getElementById("password").value = ""
        let passwordError = document.getElementById("password-error");
        passwordError.textContent = "Invalid email or password.";
    }
}