// Navigation Scroll Effect
window.addEventListener('scroll', () => {
    const nav = document.getElementById('main-nav');
    if (window.scrollY > 50) {
        nav.classList.add('scrolled');
    } else {
        nav.classList.remove('scrolled');
    }
});

// Interactive Elements / Micro-interactions
document.addEventListener('DOMContentLoaded', () => {
    // Simple reveal animation using Intersection Observer
    const observerOptions = {
        threshold: 0.1
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    // Select elements to reveal
    const revealElements = document.querySelectorAll('.glass-hover, .service-module, .hero h1, .hero p');
    revealElements.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(30px)';
        el.style.transition = 'all 0.8s cubic-bezier(0.4, 0, 0.2, 1)';
        observer.observe(el);
    });

    // Form Submission Handling
    const contactForm = document.getElementById('contact-form');
    if (contactForm) {
        contactForm.addEventListener('submit', (e) => {
            e.preventDefault();
            const submitBtn = contactForm.querySelector('button');
            const originalText = submitBtn.innerText;

            // Simulation
            submitBtn.innerText = 'Transmitting...';
            submitBtn.disabled = true;

            setTimeout(() => {
                submitBtn.innerText = 'Logic Streamed Successfully';
                submitBtn.style.background = '#22c55e'; // Green success
                contactForm.reset();

                setTimeout(() => {
                    submitBtn.innerText = originalText;
                    submitBtn.style.background = ''; // Reset
                    submitBtn.disabled = false;
                }, 3000);
            }, 1500);
        });
    }

    // Mobile Menu Toggle
    const mobileToggle = document.getElementById('mobile-toggle');
    const navLinks = document.querySelector('.nav-links');

    if (mobileToggle) {
        mobileToggle.addEventListener('click', () => {
            navLinks.classList.toggle('active');
            const icon = mobileToggle.querySelector('i');
            icon.classList.toggle('fa-bars');
            icon.classList.toggle('fa-times');
        });
    }

    // 3D Tilt Effect for Liquid Elements
    document.addEventListener('mousemove', (e) => {
        const cards = document.querySelectorAll('.liquid');
        const x = (window.innerWidth / 2 - e.pageX) / 40;
        const y = (window.innerHeight / 2 - e.pageY) / 40;

        cards.forEach(card => {
            if (card.matches(':hover')) {
                card.style.transform = `perspective(1000px) rotateY(${x}deg) rotateX(${-y}deg) translateY(-8px)`;
                card.style.transition = 'none'; // Instant follow on hover
            } else {
                card.style.transform = 'perspective(1000px) rotateY(0deg) rotateX(0deg) translateY(0)';
                card.style.transition = 'all 0.5s ease'; // Smooth return
            }
        });
    });
});
