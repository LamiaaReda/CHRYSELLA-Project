var username = document.querySelector("#username");
var email = document.querySelector("#email");
var password = document.querySelector("#password");
var signUp = document.querySelector("#sign-up");

signUp.addEventListener("click", function (btn) {
  btn.preventDefault();
  if (username.value === "" || email.value === "" || password.value === "") {
    alert("Please Fill In Your Data...!");
  } else {
    localStorage.setItem("name", username.value);
    localStorage.setItem("email", email.value);
    localStorage.setItem("password", password.value);

    setTimeout(() => {
      window.location = "login.html";
    }, 1000);
  }
});
