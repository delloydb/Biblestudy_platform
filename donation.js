// Wait for the DOM content to load before running scripts
document.addEventListener('DOMContentLoaded', () => {
  // Reference the form element
  const donationForm = document.getElementById('donationForm');

  // Reference all preset amount buttons
  const presetButtons = document.querySelectorAll('.preset-btn');

  // Reference the donation amount input field
  const amountInput = document.getElementById('amount');

  // Reference the confirmation message div
  const confirmationMessage = document.getElementById('confirmationMessage');

  // Add click listeners to each preset donation button
  presetButtons.forEach(button => {
    // Add event listener to each button
    button.addEventListener('click', () => {
      // Get the amount from data attribute
      const selectedAmount = button.getAttribute('data-amount');

      // Set that amount into the input field
      amountInput.value = selectedAmount;
    });
  });

  // Handle form submission
  donationForm.addEventListener('submit', (event) => {
    // Prevent default form submission behavior
    event.preventDefault();

    // Simulate successful donation (backend not implemented)
    donationForm.style.display = 'none'; // Hide the form
    confirmationMessage.style.display = 'block'; // Show thank-you message
  });
});
// Function to reset the donation form
function resetDonationForm() {
  // Reset the input field to empty
  document.getElementById('amount').value = '';

  // Hide the confirmation message
  document.getElementById('confirmationMessage').style.display = 'none';

  // Show the donation form again
  document.getElementById('donationForm').style.display = 'block';
}