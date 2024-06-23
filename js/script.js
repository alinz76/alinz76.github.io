document.addEventListener("DOMContentLoaded", function() {
    // Hide the loading animation and show the main content
    var loadingAnimation = document.getElementById('loader');

    // Simulate a load delay (remove this in production)
    setTimeout(function() {
        loadingAnimation.style.display = 'none';
    }, 3000); // Change this duration as needed
});



