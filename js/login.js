var username = document.querySelector("#username");
var password = document.querySelector("#password");
var signIn = document.querySelector("#sign-in");

let getUserName = localStorage.getItem("name");
let getPassword = localStorage.getItem("password");

signIn.addEventListener("click", function (btn) {
  btn.preventDefault();
  if (username.value === "" || password.value === "") {
    alert("Please Fill In Your Data");
  } else {
    if (
      username.value === getUserName &&
      getUserName.trim() &&
      password.value === getPassword &&
      getPassword.trim()
    ) {
      setTimeout(() => {
        window.location = "index.html";
      }, 1000);
    } else {
      alert("UserName Or Password Is Wrong!");
    }
  }
});
