// Function to handle the contact form submission
function sendMessage(event) {
    event.preventDefault();
    alert("Thank you! Your message has been sent (demo).");
    event.target.reset(); // Clears the form fields
}

// Intersection Observer for fade-in animations on scroll
document.addEventListener("DOMContentLoaded", () => {
    const sections = document.querySelectorAll('.content-section');

    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, {
        threshold: 0.1 // Triggers when 10% of the section is visible
    });

    sections.forEach(section => {
        observer.observe(section);
    });

    // Active link highlighting for sidebar navigation
    const navLinks = document.querySelectorAll('.sidebar ul li a');
    const allSections = document.querySelectorAll('section');

    window.addEventListener('scroll', () => {
        let current = '';
        allSections.forEach(section => {
            const sectionTop = section.offsetTop;
            if (pageYOffset >= sectionTop - 60) {
                current = section.getAttribute('id');
            }
        });

        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href').includes(current)) {
                link.classList.add('active');
            }
        });
    });
});

