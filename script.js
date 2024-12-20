function validateForm() {
  // Get form field values
  const firstName = document.getElementById("firstName").value.trim();
  const lastName = document.getElementById("lastName").value.trim();
  const phone = document.getElementById("phone").value.trim();
  const email = document.getElementById("email").value.trim();
  const password = document.getElementById("password").value.trim();
  const confirmPassword = document.getElementById("confirmPassword").value.trim();
  const errorMessage = document.getElementById("error-message");

  // Clear any old error messages
  errorMessage.textContent = "";

  // Check if all fields are filled
  if (!firstName || !lastName || !phone || !email || !password || !confirmPassword) {
    errorMessage.textContent = "Please fill in all fields.";
    return false;
  }

  // Validate phone number (must be 10 digits)
  if (phone.length !== 10 || isNaN(phone)) {
    errorMessage.textContent = "Phone number must be 10 digits.";
    return false;
  }

  // Validate email format
  if (!email.includes("@") || !email.includes(".")) {
    errorMessage.textContent = "Please enter a valid email.";
    return false;
  }

  // Validate password length
  if (password.length < 6) {
    errorMessage.textContent = "Password must be at least 6 characters long.";
    return false;
  }

  // Check if passwords match
  if (password !== confirmPassword) {
    errorMessage.textContent = "Passwords do not match.";
    return false;
  }

  // If everything is valid
  alert("Registration successful!");
  return true;
}
