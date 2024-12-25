// Select necessary elements
const sliderContainer = document.querySelector('.slider-container');
const trailers = document.querySelectorAll('.trailer-container');
const nextButton = document.querySelector('.next');
const prevButton = document.querySelector('.prev');

let currentIndex = 0; // Track the current trailer

// Function to update the slider position
function updateSlider() {
    const offset = -currentIndex * 100; // Calculate offset based on the current index
    sliderContainer.style.transform = `translateX(${offset}%)`;
}

// Event listener for the Next button
nextButton.addEventListener('click', () => {
    currentIndex = (currentIndex + 1) % trailers.length; // Loop to the first trailer if at the end
    updateSlider();
});

// Event listener for the Previous button
prevButton.addEventListener('click', () => {
    currentIndex = (currentIndex - 1 + trailers.length) % trailers.length; // Loop to the last trailer if at the start
    updateSlider();
});




document.addEventListener('DOMContentLoaded', () => {
    const genresButton = document.getElementById('genres');
    const fullscreenMenu = document.getElementById('fullscreenMenu');
    const closeMenuButton = document.getElementById('closeMenu');

    // Open the menu
    genresButton.addEventListener('click', () => {
        fullscreenMenu.classList.add('active');
    });

    // Close the menu
    closeMenuButton.addEventListener('click', () => {
        fullscreenMenu.classList.remove('active');
    });

    // Close the menu when clicking outside of it (optional)
    fullscreenMenu.addEventListener('click', (e) => {
        if (e.target === fullscreenMenu) {
            fullscreenMenu.classList.remove('active');
        }
    });
});
