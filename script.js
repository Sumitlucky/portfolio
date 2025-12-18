// Click effect on Logo (As per your request)
document.getElementById('main-logo').addEventListener('click', function() {
    console.log("Redirecting to GitHub...");
});

// Smooth scroll check
window.addEventListener('scroll', () => {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 50) {
        navbar.style.background = '#000';
    } else {
        navbar.style.background = 'rgba(10, 10, 10, 0.95)';
    }
});





// 1. Cursor Movement Logic
const cursor = document.getElementById('cursor-glow');
document.addEventListener('mousemove', (e) => {
    cursor.style.left = e.clientX - 10 + 'px';
    cursor.style.top = e.clientY - 10 + 'px';
});

// 2. Activate 3D Tilt on Projects & Resume
VanillaTilt.init(document.querySelectorAll(".project-card, .resume-card"), {
    max: 15,    // Kitna jhukega
    speed: 400, // Speed kitni hogi
    glare: true, // Chamak dikhegi ya nahi
    "max-glare": 0.3,
});






// Typing Effect Logic
const textElement = document.querySelector(".typing-text");
const words = ["AI Enthusiast", "Web Developer", "Machine Learning Student", "Data Scientist"];
let wordIndex = 0;
let charIndex = 0;
let isDeleting = false;

function type() {
    const currentWord = words[wordIndex];
    if (isDeleting) {
        textElement.textContent = currentWord.substring(0, charIndex - 1);
        charIndex--;
    } else {
        textElement.textContent = currentWord.substring(0, charIndex + 1);
        charIndex++;
    }

    if (!isDeleting && charIndex === currentWord.length) {
        isDeleting = true;
        setTimeout(type, 2000); // Word rukne ka time
    } else if (isDeleting && charIndex === 0) {
        isDeleting = false;
        wordIndex = (wordIndex + 1) % words.length;
        setTimeout(type, 500);
    } else {
        setTimeout(type, isDeleting ? 50 : 150);
    }
}

document.addEventListener("DOMContentLoaded", type);