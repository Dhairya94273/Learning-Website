let form = document.getElementById("registerForm");

form.addEventListener("submit", function (event) {
  event.preventDefault(); // stop form from refreshing

  // Collect inputs
  let inputs = [
    document.getElementById("firstName"),
    document.getElementById("middleName"),
    document.getElementById("lastName"),
    document.getElementById("email"),
    document.getElementById("mobile"),
    document.getElementById("password"),
    document.getElementById("confirm")
  ];

  // Check empty fields using loop
  for (let i = 0; i < inputs.length; i++) {
    if (inputs[i].value.trim() === "") {
      alert("All fields are compulsory! Please fill out every field.");
      return;
    }
  }

  // Check password match
  let pass = document.getElementById("password").value;
  let confirm = document.getElementById("confirm").value;

  if (pass !== confirm) {
    alert("Passwords do not match!");
    return;
  }

  // Check password length
  if (pass.length < 8 || pass.length > 16) {
    alert("Password must be between 8 and 16 characters.");
    return;
  }

  // Success
  alert("Registration Successful! Redirecting to Home Page...");
  window.location.href = "Home.html"; // redirect to home page
});
