document.querySelector('.scrolldown').addEventListener('click', function (event) {
    event.preventDefault();
    const targetSection = document.querySelector(this.getAttribute('href'));
    const targetOffset = targetSection.offsetTop;
    const currentPosition = window.pageYOffset;
    const distance = targetOffset - currentPosition;
    const duration = 1000; // Duration in milliseconds
    const startTime = performance.now();

    function scrollAnimation(currentTime) {
        const elapsedTime = currentTime - startTime;
        const progress = Math.min(elapsedTime / duration, 1);
        const easeFunction = easeInOutQuad(progress);
        const displacement = distance * easeFunction;
        window.scrollTo(0, currentPosition + displacement);

        if (elapsedTime < duration) {
            requestAnimationFrame(scrollAnimation);
        }
    }

    // Easing function for smooth scrolling
    function easeInOutQuad(t) {
        return t < 0.5 ? 2 * t * t : -1 + (4 - 2 * t) * t;
    }

    requestAnimationFrame(scrollAnimation);
});
