
// Parallax effect for hero section
window.addEventListener('scroll', function() {
    const scrollPosition = window.scrollY;
    const heroSection = document.querySelector('.parallax');
    heroSection.style.backgroundPositionY = `${scrollPosition * 0.5}px`;
});
