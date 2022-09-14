
// import nav from '../component/navbar.js'
// document.getElementById("navbar").innerHTML = nav()

let form = document.getElementById("login-menu");
form.addEventListener("submit", login);
function login(e) {
  e.preventDefault();
  let email = form.email.value;
  let password = form.password.value;

  let users = new user();

  users.login(email, password);
  // 
}

class user {
  login(email, password) {
    let userArr = JSON.parse(localStorage.getItem("userArr")) || [];
    userArr.forEach(function (ele) {
      if (email == ele.email && password == ele.password) {
        localStorage.setItem("currArr", JSON.stringify(ele))
        window.location.href = "search.html"
        alert(`Welcome ${ele.name} !`);

      }
    })

  }
}
