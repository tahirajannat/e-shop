const userloginInfo = document.getElementById("currentUserInfo");
const currentUserName = localStorage.getItem("Name");
const currentUserEmail = localStorage.getItem("Email");
console.log(localStorage.getItem("Name"));
userloginInfo.innerHTML += `<h3 class="font-semibold text-lg">
${currentUserName}
</h3>
<p class="text-light text-gray-400">
${currentUserEmail}
</p>`;
