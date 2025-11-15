// Get saved students from localStorage
let students = JSON.parse(localStorage.getItem("students")) || [];

// Target table body
let tableBody = document.querySelector("#studentTable tbody");

// Check if students exist
if (students.length === 0) {
  let row = tableBody.insertRow();
  let cell = row.insertCell();
  cell.colSpan = 8;
  cell.innerText = "No students registered yet.";
  cell.style.textAlign = "center";
  cell.style.fontWeight = "bold";
} else {
  // Loop through students and add rows
  for (let i = 0; i < students.length; i++) {
    let s = students[i];
    let row = tableBody.insertRow();

    row.insertCell(0).innerText = s.studentName;
    row.insertCell(1).innerText = s.fatherName;
    row.insertCell(2).innerText = s.motherName;
    row.insertCell(3).innerText = s.className;
    row.insertCell(4).innerText = s.age;
    row.insertCell(5).innerText = s.gender;
    row.insertCell(6).innerText = s.mobile;
    row.insertCell(7).innerText = s.address;
  }
}
