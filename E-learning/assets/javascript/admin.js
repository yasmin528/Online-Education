Teachers.forEach(teacher => {
    let cards = document.querySelector("#tutors");
    let card = document.createElement("div");
    card.classList.add("card");
    card.innerHTML = `<img src="${teacher.image}" alt="Person">
    <h3>${teacher.name}</h3>
    <p>${teacher.email}</p>
</div>`;
    cards.appendChild(card);
});
let sessionStorageUsers = sessionStorage.getItem("users");
let users = sessionStorageUsers ? JSON.parse(sessionStorageUsers) : Users;
users.forEach(student => {
    let cards = document.querySelector("#students");
    let card = document.createElement("div");
    card.classList.add("card");
    card.innerHTML = `<img src="${student.image}" alt="Person">
    <h3>${student.firstName + " " + student.lastName}</h3>
    <p>${student.email}</p>
</div>`;
    cards.appendChild(card);
});

function logout() {
    sessionStorage.setItem("admin", JSON.stringify(""));
    window.location.href = "adminlogin.html";
}