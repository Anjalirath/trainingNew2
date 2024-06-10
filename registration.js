        function submitForm() {
            var formData = {
                fullName: document.getElementById("full-name").value,
                username: document.getElementById("username").value,
                password: document.getElementById("password").value,
                confirmPassword: document.getElementById("confirm-password").value,
                email: document.getElementById("email").value,
                phone: document.getElementById("phone").value,
                dob: document.getElementById("dob").value,
              country: document.getElementById("country").value,
                gender: document.querySelector('input[name="gender"]:checked').value,
                hobbie: document.querySelector('input[name="hobbies"]:checked').value,
                bio: document.getElementById("bio").value,
                terms: document.getElementById("terms").checked
            };
        

            console.log("Form Data:");
            console.log(formData);
        }