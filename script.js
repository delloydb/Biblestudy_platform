// Select the hamburger menu toggle button element using its class
const menuToggle = document.querySelector('.menu-toggle');

// Select the navigation links container using its class
const navLinks = document.querySelector('.nav-links');

// Add a click event listener to the menu toggle button
menuToggle.addEventListener('click', () => {
  // Toggle the 'show' class on the navLinks to expand/collapse menu
  navLinks.classList.toggle('show');
});


// Function to handle 'Explore Courses' button click
function exploreCourses() {
  // Redirect user to the 'All Courses' page (placeholder URL for now)
  window.location.href = 'courses.html'; // Navigate to courses page
}

// Function to handle 'Login' button click
function loginRedirect() {
  // Redirect user to the login page (placeholder URL for now)
  window.location.href = 'login.html'; // Navigate to login page
}

// Function to handle 'Start Learning' CTA button click
function startLearning() {
  // Redirect user to a registration or introductory course page
  window.location.href = 'signup.html'; // Navigate to signup or intro
}

// Attach event listeners only if buttons are present
document.addEventListener('DOMContentLoaded', () => {
  // Select the 'Explore Courses' button by its ID if it exists
  const exploreBtn = document.getElementById('explore-btn');
  
  // Select the 'Login' button by its ID if it exists
  const loginBtn = document.getElementById('login-btn');
  
  // Select the 'Start Learning' button by its ID if it exists
  const startBtn = document.getElementById('start-btn');

  // Check if 'Explore Courses' button exists before adding event
  if (exploreBtn) {
    exploreBtn.addEventListener('click', exploreCourses); // Bind click handler
  }

  // Check if 'Login' button exists before adding event
  if (loginBtn) {
    loginBtn.addEventListener('click', loginRedirect); // Bind click handler
  }

  // Check if 'Start Learning' button exists before adding event
  if (startBtn) {
    startBtn.addEventListener('click', startLearning); // Bind click handler
  }
});
