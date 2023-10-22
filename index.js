function smoothScroll(target, duration) {
    var targetElement = document.querySelector(target);
    var targetPosition = targetElement.offsetTop;

    var startPosition = window.pageYOffset;
    var distance = targetPosition - startPosition;
    var startTime = null;

    function scrollAnimation(currentTime) {
        if (startTime === null) {
            startTime = currentTime;
        }

        var timeElapsed = currentTime - startTime;
        var scroll = easeInOutQuad(timeElapsed, startPosition, distance, duration);
        window.scrollTo(0, scroll);

        if (timeElapsed < duration) {
            requestAnimationFrame(scrollAnimation);
        }
    }

    function easeInOutQuad(t, b, c, d) {
        t /= d / 2;
        if (t < 1) return c / 2 * t * t + b;
        t--;
        return -c / 2 * (t * (t - 2) - 1) + b;
    }

    requestAnimationFrame(scrollAnimation);
}


document.querySelectorAll('.project-button').forEach(button => {
    button.addEventListener('click', function () {
        smoothScroll(button.getAttribute('href'), 1000); 
    });
});


window.addEventListener('scroll', function () {
    var projectsSection = document.getElementById('projects');
    var sectionPosition = projectsSection.getBoundingClientRect().top;
    var screenPosition = window.innerHeight / 1.5; 

    if (sectionPosition < screenPosition) {
        projectsSection.classList.add('fade-in');
    }
});
 
