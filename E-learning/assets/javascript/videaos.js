let email = JSON.parse(sessionStorage.getItem("user"));
if (email != "" && email != null) {
    let notmenudisplayed = document.querySelector(".dropdown-menulogin");
    notmenudisplayed.classList.remove("active")
    let menudisplayed = document.querySelector(".dropdown-menu");
    menudisplayed.classList.add("active");
}

const boxes = document.querySelectorAll('.box');

boxes.forEach(box => {
    box.addEventListener('click', function (event) {
        const clickedBox = event.target.closest('.box');
        const clickedImage = clickedBox.querySelector('img');
        const clickedIcon = clickedBox.querySelector('i');
        const clickedvideo = clickedBox.querySelector('video');
        clickedImage.classList.remove('activevid');
        clickedImage.classList.add('notactivevid');
        clickedIcon.classList.remove('fa-play');
        clickedvideo.classList.remove('notactivevid');
        clickedvideo.classList.add('activevid');
        clickedvideo.play()
    });
});

function logout() {
    sessionStorage.setItem("user", JSON.stringify(""));
    window.location.href = "login.html";
}