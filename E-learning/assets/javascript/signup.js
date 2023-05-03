function addUser(event) {
    event.preventDefault();
    let firstname = document.getElementById("firstname").value;
    let lastname = document.getElementById("lastname").value;
    let email = document.getElementById("email").value;
    let password = document.getElementById("password").value;
    let confirmpassword = document.getElementById("confirmpassword").value;
    flag = 0;

    // Check if local storage has users array
    let sessionStorageUsers = sessionStorage.getItem("users");
    let users = sessionStorageUsers ? JSON.parse(sessionStorageUsers) : Users;

    users.forEach(user => {
        if (user.email == email) {
            flag = 2;
        }
    });
    if (password != confirmpassword) {
        flag = 3;
    } else if (password != "") {
        flag = 1;
    }
    if (flag == 1) {
        users.push({
            firstName: firstname,
            lastName: lastname,
            email: email,
            password: password,
            courses: [],
            image: "assets/images/person-icon.jpg"
        });
        sessionStorage.setItem("users", JSON.stringify(users));
        sessionStorage.setItem("user", JSON.stringify(email));
        window.location.href = "E-learning.html";
    } else if (flag == 2) {
        document.getElementById("password").value = "";
        document.getElementById("confirmpassword").value = "";
        let passwordError = document.getElementById("password-error");
        passwordError.textContent = "email already exist.";
    } else if (flag == 3) {
        document.getElementById("password").value = "";
        document.getElementById("confirmpassword").value = "";
        let passwordError = document.getElementById("errorNotmatching");
        console.log(passwordError)
        passwordError.textContent = "Password should match.";
    } else {
        if (firstname == "" || lastname == "") {
            document.getElementById("password").value = "";
            document.getElementById("confirmpassword").value = "";
            let emptyError = document.getElementById("field-empty-error");
            emptyError.textContent = "Please enter your name";
        }
        else if (email == "") {
            document.getElementById("password").value = "";
            document.getElementById("confirmpassword").value = "";
            let passwordError = document.getElementById("password-error");
            passwordError.textContent = "please enter a valid email.";
        } else if (password == "") {
            document.getElementById("password").value = "";
            document.getElementById("confirmpassword").value = "";
            let passwordError = document.getElementById("errorNotmatching");
            console.log(passwordError)
            passwordError.textContent = "please enter a availd password.";
        }
    }
    console.log(users)
}