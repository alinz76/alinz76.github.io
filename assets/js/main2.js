document.addEventListener("DOMContentLoaded", () => {
    const sections = document.querySelectorAll('.section');
    let delay = 0;

    sections.forEach(section => {
        setTimeout(() => {
            section.classList.add('visible');
        }, delay);
        delay += 500; // Delay between each section appearing
    });
});
document.addEventListener("DOMContentLoaded", () => {
    const sections = document.querySelectorAll('.section');
    const options = {
        root: null, // Use the viewport as the root
        threshold: 0.1, // Trigger when 10% of the section is visible
    };

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target); // Stop observing once it's visible
            }
        });
    }, options);

    sections.forEach(section => {
        observer.observe(section);
    });
});

