let links = document.querySelector("#links");
let userInfo = document.querySelector("#user-info");
let userInfoName = document.querySelector("#user-info-name");

if (localStorage.getItem("name")) {
  links.remove();
  userInfo.style.display = "flex";
  userInfoName.innerHTML = localStorage.getItem("name");
}

let logOutBtn = document.querySelector("#logout");
logOutBtn.addEventListener("click", function () {
  localStorage.clear();
  setTimeout(() => {
    window.location = "login.html";
  }, 1000);
});
