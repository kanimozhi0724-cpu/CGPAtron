let savedPassword = "1234"; // fake stored password

function login() {
  let u = document.getElementById("username").value;
  let p = document.getElementById("password").value;

  if (u === "admin" && p === savedPassword) {
    window.location.href = "dashboard.html";
  } else {
    document.getElementById("error").innerText = "Invalid Login!";
  }
}

// Fake email sending
function sendCode() {
  let email = document.getElementById("email").value;

  if (email === "") {
    document.getElementById("msg").innerText = "Enter email!";
    return;
  }

  alert("Verification code sent to your email! (Demo code: 123456)");
  window.location.href = "reset.html";
}

function resetPassword() {
  let code = document.getElementById("code").value;
  let newpass = document.getElementById("newpass").value;

  if (code === "123456") {
    savedPassword = newpass;
    alert("Password changed! Login again.");
    window.location.href = "index.html";
  } else {
    document.getElementById("msg").innerText = "Invalid code!";
  }
}
