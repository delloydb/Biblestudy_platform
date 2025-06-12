// Wait for the page to fully load
document.addEventListener('DOMContentLoaded', () => {
  // Get reference to the quiz form
  const quizForm = document.getElementById('quizForm');

  // Get reference to the result container
  const resultContainer = document.getElementById('result');

  // Add event listener for form submission
  quizForm.addEventListener('submit', function(event) {
    // Prevent default form submission
    event.preventDefault();

    // Track user's score
    let score = 0;

    // Total number of questions
    const totalQuestions = 3;

    // Get the selected answers from the form
    const q1 = quizForm.q1.value;
    const q2 = quizForm.q2.value;
    const q3 = quizForm.q3.value;

    // Check each answer and update score
    if (q1 === 'a') score++; // Correct: First day
    if (q2 === 'b') score++; // Correct: Land animals and humans
    if (q3 === 'a') score++; // Correct: He saw it was good

    // Display result message to user
    resultContainer.innerText = `You scored ${score} out of ${totalQuestions}.`;
  });
});
