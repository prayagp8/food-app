let form = document.getElementById("register");
form.addEventListener("submit", signup);
function signup(e) {
  e.preventDefault();
  let name = form.name.value;
  let email = form.email.value;
  let password = form.password.value;

  let users = new user(name, email, password);

  users.signup(users);


}

class user {
  constructor(name, email, password) {
    (this.name = name), (this.email = email), (this.password = password);
  }

  signup(users) {
    let userArr = JSON.parse(localStorage.getItem("userArr")) || [];
    let isvalid = false;
    isvalid = this.checkEmail(this.email);
    if (isvalid) {
      userArr.push(users);
      localStorage.setItem("userArr", JSON.stringify(userArr));
      alert("registered!")
      window.location.href ="login.html"
    } else {
      alert("Email is already registered!");
    }
  }

  checkEmail(mail) {
    let userArr = JSON.parse(localStorage.getItem("userArr")) || [];
    let filtered = userArr.filter(function (ele) {
      return mail === ele.email;
    });
    if (filtered.length > 0) {
      return false;
    } else {
      return true;
    }
  }
}