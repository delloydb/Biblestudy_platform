// Define array of sample course objects
const courses = [
  {
    title: "Introduction to Genesis", // Course title
    description: "Explore the beginnings of creation and faith in the Book of Genesis.", // Short description
    category: "beginner" // Category level
  },
  {
    title: "The Prophets of the Old Testament", // Course title
    description: "Dive into the prophetic messages and their meanings for Israel and beyond.", // Description
    category: "intermediate" // Category level
  },
  {
    title: "Understanding Revelation", // Course title
    description: "Decode the apocalyptic language and symbols of Revelation.", // Description
    category: "advanced" // Category level
  }
];

// Select the course list container in HTML
const courseList = document.getElementById('courseList');

// Select the search input element
const searchInput = document.getElementById('searchInput');

// Select the dropdown filter
const categoryFilter = document.getElementById('categoryFilter');

// Function to display courses based on search and filter
function displayCourses() {
  // Get search query in lowercase
  const searchQuery = searchInput.value.toLowerCase();

  // Get selected category
  const selectedCategory = categoryFilter.value;

  // Clear current course list HTML
  courseList.innerHTML = '';

  // Loop through courses array
  courses.forEach(course => {
    // Check if course matches search and category
    const matchesSearch = course.title.toLowerCase().includes(searchQuery); // Title match
    const matchesCategory = selectedCategory === 'all' || course.category === selectedCategory; // Category match

    // If course meets both conditions, display it
    if (matchesSearch && matchesCategory) {
      // Create a new div for the course card
      const courseCard = document.createElement('div');
      courseCard.classList.add('course-card'); // Add styling class

      // Insert course title as heading
      const title = document.createElement('h3');
      title.classList.add('course-title'); // Add class
      title.textContent = course.title; // Set title text

      // Insert course description
      const desc = document.createElement('p');
      desc.classList.add('course-desc'); // Add class
      desc.textContent = course.description; // Set description text

      // Append title and description to the card
      courseCard.appendChild(title);
      courseCard.appendChild(desc);

      // Append the card to the main course list
      courseList.appendChild(courseCard);
    }
  });
}

// Add event listener to search input
searchInput.addEventListener('input', displayCourses); // Call display on input

// Add event listener to category dropdown
categoryFilter.addEventListener('change', displayCourses); // Call display on change

// Call display function on initial load
document.addEventListener('DOMContentLoaded', displayCourses); // Initial render
