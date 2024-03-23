let EyeIcon = document.getElementById("EyeIcon");
let Password = document.getElementById("Password");

EyeIcon.onclick = function () {
    if (Password.type == "password") {
        Password.type = "text";
        EyeIcon.src = "EyeOpen.png";
    }
    else{
        Password.type = "password";
        EyeIcon.src = "EyeClosed.png";
    }
}

