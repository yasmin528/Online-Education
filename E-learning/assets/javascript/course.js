let email = JSON.parse(sessionStorage.getItem("user"));
if (email != "" && email != null) {
    let notmenudisplayed = document.querySelector(".dropdown-menulogin");
    notmenudisplayed.classList.remove("active")
    let menudisplayed = document.querySelector(".dropdown-menu");
    menudisplayed.classList.add("active");
}
let type = JSON.parse(sessionStorage.getItem("type"));
const category = Courses_Topics.find(course => course.title === type);
course = category.courses;
console.log(course)
course.forEach(thecourse => {
    let coursesbox = document.querySelector(".ag-courses_box");
    let courseitem = document.createElement("div");
    courseitem.classList.add("ag-courses_item");
    courseitem.innerHTML = `<a href="videos.html" class="ag-courses-item_link">
    <div class="ag-courses-item_bg"></div>

    <div class="ag-courses-item_title">
     ${thecourse}
    </div>
</a>
</div>`;
    coursesbox.appendChild(courseitem);
});
function logout() {
    sessionStorage.setItem("user", JSON.stringify(""));
    window.location.href = "login.html";
}