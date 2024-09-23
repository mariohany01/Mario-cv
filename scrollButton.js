// Get the button element
const button = document.querySelector('.openNav');

// Define the scroll position threshold
const threshold = 200; // Adjust this value to change the scroll position at which the button appears

// Add an event listener to the window's scroll event
window.addEventListener('scroll', () => {
  // Get the current scroll position
  const scrollPosition = window.scrollY;

  // Check if the scroll position is greater than or equal to the threshold
  if (scrollPosition >= threshold) {
    // Add the 'show' class to the button
    button.classList.add('show');
  } else {
    // Remove the 'show' class from the button
    button.classList.remove('show');
  }
});