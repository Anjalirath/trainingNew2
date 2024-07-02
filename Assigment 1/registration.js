// function resetForm() {
//     document.getElementById("registrationForm").reset();
//   }

// function submitForm() {
//   var formData = {
//     fullName: document.getElementById("full-name").value,
//     username: document.getElementById("username").value,
//     password: document.getElementById("password").value,
//     confirmPassword: document.getElementById("confirm-password").value,
//     email: document.getElementById("email").value,
//     phone: document.getElementById("phone").value,
//     dob: document.getElementById("dob").value,
//     country: document.getElementById("country").value,
//     gender: document.querySelector('input[name="gender"]:checked').value,
//     hobbie: document.querySelector('input[name="hobbies"]:checked').value,
//     bio: document.getElementById("bio").value,
//     terms: document.getElementById("terms").checked,
//   };
//   var table = document.getElementById("formDataTable");
//   var newRow = table.insertRow(-1);

//   for (var key in formData) {
//     if (formData.hasOwnProperty(key)) {
//       var newCell = newRow.insertCell();
//       newCell.textContent = formData[key];
//     }
//   }
// }

var person1 = {
  name: "kushal",
  address: "kk",
  city: "agra",
  state: "up",
  phone: "999999",
  age: 23,
};
var person2 = Object.assign({}, person1); 
person2.age = 30;

console.log("2", person2);
console.log("1", person1);