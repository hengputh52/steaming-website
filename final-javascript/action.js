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

    // Optional: Close menu when clicking outside of the menu content
    fullscreenMenu.addEventListener('click', (event) => {
        if (event.target === fullscreenMenu) {
            fullscreenMenu.classList.remove('active');
        }
    });
});
