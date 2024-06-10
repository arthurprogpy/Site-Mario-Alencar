document.addEventListener("DOMContentLoaded", function() {
    const carousel = document.querySelector('.carousel');
    let currentIndex = 0;
    const slides = document.querySelectorAll('.slide');
    const totalSlides = slides.length;

    function showNextSlide() {
        currentIndex = (currentIndex + 1) % totalSlides;
        carousel.style.transform = `translateX(-${currentIndex * 100}%)`;
    }

    setInterval(showNextSlide, 4000);
});
