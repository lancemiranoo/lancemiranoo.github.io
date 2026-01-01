function toggleMenu() {
    const menu = document.querySelector(".menu-links");
    const icon = document.querySelector(".hamburger-icon");
    menu.classList.toggle("open")
    icon.classList.toggle("open")
}

// document.querySelectorAll('a[href^="#"]').forEach(link => {
//     link.addEventListener('click', function (e) {
//         const targetId = this.getAttribute('href');
//         if (targetId === '#' || targetId === '') return;

//         const target = document.querySelector(targetId);
//         if (!target) return;

//         e.preventDefault();

//         const navbarOffset = 80; // adjust if you have a fixed navbar
//         const targetPosition = target.getBoundingClientRect().top + window.pageYOffset - navbarOffset;
//         const duration = 800; // milliseconds (800ms = slower scroll)

//         const startPosition = window.pageYOffset;
//         const distance = targetPosition - startPosition;
//         let startTime = null;

//         function animation(currentTime) {
//             if (startTime === null) startTime = currentTime;
//             const timeElapsed = currentTime - startTime;
//             const run = easeInOutQuad(timeElapsed, startPosition, distance, duration);
//             window.scrollTo(0, run);
//             if (timeElapsed < duration) requestAnimationFrame(animation);
//         }

//         function easeInOutQuad(t, b, c, d) {
//             t /= d / 2;
//             if (t < 1) return c / 2 * t * t + b;
//             t--;
//             return -c / 2 * (t * (t - 2) - 1) + b;
//         }

//         requestAnimationFrame(animation);
//     });
// });