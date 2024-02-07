// Mobile Menu Toggle
const navbar = document.querySelector('.navbar');
const menuToggle = document.createElement('div'); // Assuming you add an icon/button in HTML for toggling
menuToggle.classList.add('menu-toggle');
menuToggle.addEventListener('click', () => {
    navbar.classList.toggle('active');
});

// Smooth Scrolling for Anchor Links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Active Navigation Link Highlighting (requires Intersection Observer API)
const sections = document.querySelectorAll('section');
const navLinks = document.querySelectorAll('.navbar a');

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            document.querySelectorAll('.navbar a').forEach(link => {
                if (link.getAttribute('href').substring(1) === entry.target.id) {
                    link.classList.add('active');
                } else {
                    link.classList.remove('active');
                }
            });
        }
    });
}, {rootMargin: "-50% 0px -50% 0px"});

sections.forEach(section => {
    observer.observe(section);
});
