// Wait until the page is fully loaded
document.addEventListener('DOMContentLoaded', () => {
  // Reference the progress fill bar element
  const progressFill = document.getElementById('progressFill');

  // Simulate a progress percentage (e.g., 65%)
  const lessonProgress = 65;

  // Update the width of the progress bar
  progressFill.style.width = lessonProgress + '%';
});

// Function to simulate going to the previous lesson
function goToPreviousLesson() {
  // Redirect to previous lesson page (to be replaced with real logic)
  window.location.href = "lesson0.html";
}

// Function to simulate going to the next lesson
function goToNextLesson() {
  // Redirect to next lesson page (to be replaced with real logic)
  window.location.href = "lesson2.html";
}
// Function to simulate completing the lesson
function completeLesson() {
  // Simulate marking the lesson as complete (to be replaced with real logic)
  alert("Lesson completed! Redirecting to next module...");

  // Redirect to the next module or course overview page
  window.location.href = "module2.html"; // Placeholder URL
}