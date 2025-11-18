// script.js

document.addEventListener('DOMContentLoaded', () => {
    // Select all navigation links
    const navLinks = document.querySelectorAll('.nav-links a');

    // Add a click event listener to each link
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            const href = this.getAttribute('href');

            // Only run custom smooth scrolling for internal links (starting with #)
            if (href.startsWith('#') && href.length > 1) {
                // Prevent the default jump behavior
                e.preventDefault(); 
                
                // Get the target element by its ID
                const targetElement = document.querySelector(href);

                if (targetElement) {
                    // Use the built-in browser smooth scroll function
                    targetElement.scrollIntoView({
                        behavior: 'smooth'
                    });
                }
            }
        });
    });

    // You can add more JavaScript here for scroll-based animations (like fading in content) 
    // as you add more sections.
});