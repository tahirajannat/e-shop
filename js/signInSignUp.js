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
formSignIn.addEventListener("submit", () => {
    if (validateFormSignIn === true) {
        window.location.href = "index.html";
    }
    validateFormSignIn();
});
