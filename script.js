function sendMessage(event) {
    event.preventDefault();
    alert("Thank you! Your message has been sent (demo).");
}

// Fade-in animation on scroll
document.addEventListener("scroll", () => {
    document.querySelectorAll(".fade-in").forEach(el => {
        if (el.getBoundingClientRect().top < window.innerHeight - 100) {
            el.classList.add("show");
        }
    });
});
