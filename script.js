document.addEventListener('DOMContentLoaded', () => {
    const slider = document.querySelector('.testimonial-slider');
    const testimonials = document.querySelectorAll('.testimonial');
    const nextButton = document.querySelector('.next');
    const prevButton = document.querySelector('.prev');
    let currentIndex = 0;

    function updateSlider() {
        // Calculate the translateX value based on the current index
        const offset = -currentIndex * 100; // Move by 100% of the container width
        slider.style.transform = `translateX(${offset}%)`;
    }

    // Go to the next testimonial
    nextButton.addEventListener('click', () => {
        currentIndex = (currentIndex + 1) % testimonials.length; // Loop to the start
        updateSlider();
    });

    // Go to the previous testimonial
    prevButton.addEventListener('click', () => {
        currentIndex = (currentIndex - 1 + testimonials.length) % testimonials.length; // Loop to the end
        updateSlider();
    });

    // Optional: Auto-slide every 5 seconds
    setInterval(() => {
        currentIndex = (currentIndex + 1) % testimonials.length;
        updateSlider();
    }, 5000); // Adjust interval as needed
});
