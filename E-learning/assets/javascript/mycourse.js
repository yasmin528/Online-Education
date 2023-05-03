let email = JSON.parse(sessionStorage.getItem("user"));
if (email != "" && email != null) {
    let notmenudisplayed = document.querySelector(".dropdown-menulogin");
    notmenudisplayed.classList.remove("active")
    let menudisplayed = document.querySelector(".dropdown-menu");
    menudisplayed.classList.add("active");
}
const mycourses = Users.find(user => user.email === email);
course = mycourses.courses;
let num = 0;
course.forEach(thecourse => {
    let coursesbox = document.querySelector(".ag-courses_box");
    let courseitem = document.createElement("div");
    courseitem.classList.add("ag-courses_item");
    if (num == 0) {
        courseitem.innerHTML = `<a href="videos.html" class="ag-courses-item_link">
    <div class="ag-courses-item_bg"></div>

    <div class="ag-courses-item_title">
     ${thecourse}
    </div>
    <div class="ag-courses-item_date-box">
    <p>Assignment: </p>
    <br>
    <span class="ag-courses-item_date">
        <div class="file-upload">
            <input type="file" id="myFile" name="filename">
            <label for="myFile">Choose a file</label>
            <input type="submit" value="Upload" onclick = "submit(event)">
        </div>
    </span>
  </div>
</a>
</div>`;
        num++;
    } else {
        courseitem.innerHTML = `<a href="videos.html" class="ag-courses-item_link">
    <div class="ag-courses-item_bg"></div>

    <div class="ag-courses-item_title">
     ${thecourse}
    </div>
    <div class="ag-courses-item_date-box">
    <p>Assignment: </p>
    <br>
    <span class="ag-courses-item_date">
    </span>
  </div>
</a>
</div>`;
    }

    coursesbox.appendChild(courseitem);
});

const boxes = document.querySelectorAll('.ag-courses-item_link');

boxes.forEach(box => {
    const fileInput = box.querySelector('#myFile');
    const fileNameLabel = box.querySelector('label[for="myFile"]');
    console.log(fileInput)
    fileInput.addEventListener('change', function (event) {
        fileNameLabel.textContent = this.files[0].name;
    });

    const submitBtn = box.querySelector('input[type="submit"]');
    submitBtn.addEventListener('click', function (event) {
        event.preventDefault();
        const fileNameLabel = box.querySelector('label[for="myFile"]');
        let sessionStorageUsers = sessionStorage.getItem("assignments");
        let assignments = sessionStorageUsers ? JSON.parse(sessionStorageUsers) : [];
        assignments.push(fileNameLabel.textContent);
        sessionStorage.setItem("assignments", JSON.stringify(assignments));
        location.reload();
    });
});



function logout() {
    sessionStorage.setItem("user", JSON.stringify(""));
    window.location.href = "login.html";
}