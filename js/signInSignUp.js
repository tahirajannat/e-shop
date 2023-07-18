const tabs = document.querySelector(".wrapper");
console.log("tabs", tabs);
const tabButton = document.querySelectorAll(".tab-button");
const contents = document.querySelectorAll(".content");
//sign in form validation
const formSignIn = document.getElementById("signin");

tabs.onclick = (e) => {
    const id = e.target.dataset.id;
    console.log("id", id);
    if (id) {
        tabButton.forEach((btn) => {
            btn.classList.remove("btn-active");
        });
        e.target.classList.add("btn-active");

        contents.forEach((content) => {
            content.classList.remove("active");
        });
        const element = document.getElementById(id);
        element.classList.add("active");
    }
};

function validateFormSignIn(e) {
    const signInEmailInput = document.getElementById("signInEmailInput");
    const signInPassInput = document.getElementById("signInPassInput");

    const signInEmailValue = signInEmailInput.value.trim();
    const signInPassValue = signInPassInput.value;

    if (signInEmailValue === "") {
        showError(signInEmailInput, "email is required");
    } else if (signInEmailValue === "admin@gmail.com") {
        showSuccess(signInEmailInput, " ");
    } else {
        showError(signInEmailInput, "Please enter valid email");
    }
    // Validate password
    if (signInEmailValue === "admin@gmail.com" && signInPassValue === "") {
        showError(signInPassInput, "Password is required");
    } else if (
        signInEmailValue === "admin@gmail.com" &&
        signInEmailValue.length < 6
    ) {
        showError(signInPassInput, "Password must be at least 6 characters");
    } else if (
        signInEmailValue === "admin@gmail.com" &&
        signInPassValue === "123456"
    ) {
        showSuccess(signInPassInput, "");
        alert("hello");
    } else {
        showError(signInPassInput, "Password is required");
    }
    // Function to display error message
    function showError(input, message) {
        const formControl = input.parentElement;
        const error = formControl.querySelector(".error");
        error.innerHTML += message;
        formControl.classList.add("error");
    }

    // Function to display success state
    function showSuccess(input, message) {
        const formControl = input.parentElement;
        const error = formControl.querySelector(".error");
        error.innerHTML += ``;
        formControl.classList.remove("error");
    }
}

// Function to validate email format
// function isValidEmail(email) {
//     const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
//     return emailRegex.test(email);
// }

// Event listener for form submission
// formSignIn.addEventListener("submit", () => {
//     if (validateFormSignIn === true) {
//         window.location.href = "index.html";
//     }
//     validateFormSignIn();
// });

const btnRegister = document.getElementById("btnRegister");

// btnRegister.addEventListener("click", (e) => {
//     e.preventDefault();
//     const firstName = document.getElementById("firstName").value;
//     const lastName = document.getElementById("lastName").value;
//     const userEmail = document.getElementById("email").value;
//     const userPass = document.getElementById("password").value;

//     if (!firstName || !lastName || !userEmail || !userPass) {
//         alert("Please fill out the forms.");
//         return;
//     }
//     var users = JSON.parse(localStorage.getItem("Users")) || [];
//     var userData = [firstName, lastName, userEmail, userPass];
//     users.push(userData);
//     localStorage.setItem("Users", JSON.stringify(users));
//     var users = JSON.parse(localStorage.getItem("Users")) || [];
//     users.forEach(console.log);
//     users[0];
//     users[1];
// });
const firstName = document.getElementById("firstName");
const lastName = document.getElementById("lastName");
const userEmail = document.getElementById("email");
const userPass = document.getElementById("password");
btnRegister.onclick = function () {
    // when mouse click "signup" button
    const first_name = firstName.value;
    const last_name = lastName.value;
    const e_mail = userEmail.value;
    const pass_word = userPass.value;

    if (first_name && last_name && e_mail && pass_word) {
        let userInfo = { first_name, last_name, e_mail, pass_word };
        // localStorage.setItem("First Name", first_name);
        // localStorage.setItem("Last Name", last_name);
        // localStorage.setItem("Email", e_mail);
        // JSON.parse(localStorage.getItem("AllUserInfo", userData));
        // // console.log(userData);
        // if (userData) {
        //     let currentData = userData.push(userInfo);
        //     console.log("user data");
        //     console.log("current Dat", currentData);
        //     localStorage.setItem("AllUserInfo", JSON.stringify(currentData));
        // } else {
        //     localStorage.setItem("AllUserInfo", JSON.stringify([userInfo]));
        // }

        var users = JSON.parse(localStorage.getItem("Users")) || [];
        var userData = { first_name, last_name, e_mail, pass_word };
        users.push(userData);
        localStorage.setItem("Users", JSON.stringify(users));
        var users = JSON.parse(localStorage.getItem("Users")) || [];
        users.forEach(console.log);
        users[0];
        users[1];
    } else {
        alert("Please fill out the forms.");
    }
};

0;

function validlogin() {
    const signInEmailInput = document.getElementById("signInEmailInput").value;
    const signInPassInput = document.getElementById("signInPassInput").value;

    let userRecord = new Array();
    userRecord = JSON.parse(localStorage.getItem("Users"))
        ? JSON.parse(localStorage.getItem("Users"))
        : [];
    // console.log("user record", localStorage.getItem("Users"));
    // console.log("typeof", typeof localStorage.getItem("Users"));
    // let currentUser = userRecord.filter((user) => {
    //     return (
    //         user.e_mail == signInEmailInput && user.pass_word == signInPassInput
    //     );
    // })[0];
    if (
        userRecord.some((user) => {
            return (
                user.e_mail == signInEmailInput &&
                user.pass_word == signInPassInput
            );
        })
    ) {
        alert("Logged In Successfully");
        // window.location.href = "/account.html";

        let currentUser = userRecord.filter((user) => {
            return (
                user.e_mail == signInEmailInput &&
                user.pass_word == signInPassInput
            );
        })[0];

        console.log("currentUser", currentUser);
        localStorage.setItem("FirstName", currentUser.first_name);
        console.log("Name", currentUser.first_name);
        localStorage.setItem("Email", currentUser.e_mail);
        localStorage.setItem("LastName", currentUser.last_name);
        console.log("Email", currentUser.e_mail);
        console.log("LastName", currentUser.last_name);
        window.location.href = "/account.html";
        // window.location.href = "/account.html";
    } else {
        alert("Enter valid input");
    }
}

const userloginInfo = document.getElementById("currentUserInfo");

// Event listener for form submission
formSignIn.addEventListener("submit", (e) => {
    e.preventDefault();
    validlogin();
});
