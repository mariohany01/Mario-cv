let lastScrollY = window.scrollY;    // Store the last scroll position
let scrollTimeout;                   // To detect when scrolling stops

// Select the moving text element
const movingText = document.querySelector('.home-name');

// Function to handle scroll event
window.addEventListener('scroll', function() {
    // Pause the animation while scrolling
    movingText.style.animationPlayState = 'paused';

    // Clear the previous timeout
    clearTimeout(scrollTimeout);

    // Set a new timeout to resume animation after 200ms of no scrolling
    scrollTimeout = setTimeout(function() {
        movingText.style.animationPlayState = 'running';
    }, 200);  // Adjust the time (200ms) as per preference
});
