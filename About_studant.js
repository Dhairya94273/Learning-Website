let form = document.getElementById("studentForm");

form.addEventListener("submit", function(event) {
  event.preventDefault();

  // Get values
  let student = {
    studentName: document.getElementById("studentName").value.trim(),
    fatherName: document.getElementById("fatherName").value.trim(),
    motherName: document.getElementById("motherName").value.trim(),
    className: document.getElementById("className").value.trim(),
    age: document.getElementById("age").value.trim(),
    gender: document.getElementById("gender").value,
    mobile: document.getElementById("mobile").value.trim(),
    address: document.getElementById("address").value.trim()
  };

  // Check empty fields
  for (let key in student) {
    if (student[key] === "") {
      alert("Please fill all fields!");
      return;
    }
  }

  // Save in localStorage (like mini database)
  let students = JSON.parse(localStorage.getItem("students")) || [];
  students.push(student);
  localStorage.setItem("students", JSON.stringify(students));

  alert("Student details saved successfully!");

  // Clear form
  form.reset();
});
