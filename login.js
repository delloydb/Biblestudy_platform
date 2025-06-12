// Wait for the document to fully load before executing script
document.addEventListener('DOMContentLoaded', () => {
  // Get the login form by its ID
  const loginForm = document.getElementById('loginForm');

  // Attach a submit event listener to the form
  loginForm.addEventListener('submit', function (e) {
    // Prevent the default form submission behavior
    e.preventDefault();

    // Get the email value entered by the user
    const email = document.getElementById('email').value.trim();

    // Get the password value entered by the user
    const password = document.getElementById('password').value.trim();

    // Check if email or password fields are empty
    if (email === '' || password === '') {
      // Alert the user if fields are empty
      alert('Please fill in both email and password.');
      return; // Stop execution
    }

    // Validate email format using a simple regular expression
    const emailRegex = /\S+@\S+\.\S+/; // Basic email pattern

    // Test the email against the regex
    if (!emailRegex.test(email)) {
      // Alert user if email format is invalid
      alert('Please enter a valid email address.');
      return; // Stop execution
    }

    // If validation passes, simulate login success
    alert('Login successful! Redirecting...');

    // Redirect user to learner dashboard after successful login
    window.location.href = 'dashboard-learner.html'; // Placeholder
  });
});
