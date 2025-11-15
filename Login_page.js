// =======================
// Show / Hide Password
// =======================
const togglePassword = document.getElementById("togglePassword");
const passwordInput = document.getElementById("password");

togglePassword.addEventListener("click", function () {
  // check password type
  if (passwordInput.type === "password") {
    passwordInput.type = "text";
    togglePassword.innerHTML = '<i class="fa fa-eye-slash"></i>';
  } else {
    passwordInput.type = "password";
    togglePassword.innerHTML = '<i class="fa fa-eye"></i>';
  }
});

// =======================
// Form Validation
// =======================
const form = document.querySelector("form");
form.addEventListener("submit", function (event) {
  event.preventDefault(); // stop page refresh

  // get values
  const email = document.querySelector(".email").value.trim();
  const password = passwordInput.value.trim();

  // check conditions using if-else
  if (email === "" && password === "") {
    alert("Please enter Email/Mobile and Password!");
  } else if (email === "") {
    alert("Please enter your Email or Mobile No.");
  } else if (password === "") {
    alert("Please enter your Password.");
  } else {
    // if all details are filled
    alert("Login Successful!");
    // redirect to home page
    window.location.href = "home.html";
  }
});
