
document.addEventListener('DOMContentLoaded', () => {
    // 1. Parallax Scrolling Effect
    window.addEventListener('scroll', () => {
        const scrolled = window.pageYOffset;
        
        // Background layer moves slowly
        const bg = document.querySelector('.layer-bg');
        if (bg) bg.style.transform = `translateY(${scrolled * 0.5}px)`;
        
        // Mid layer moves medium
        const mid = document.querySelector('.layer-mid');
        if (mid) mid.style.transform = `translateY(${scrolled * 0.3}px)`;
        
        // Front layer moves fastest
        const front = document.querySelector('.layer-front');
        if (front) front.style.transform = `translateY(${scrolled * 0.15}px)`;

        // Fade out overlay based on scroll
        const overlay = document.querySelector('.hero-overlay');
        if (overlay) {
            const opacity = 1 - (scrolled / 600);
            overlay.style.opacity = Math.max(opacity, 0);
        }
    });

    // 2. Reveal Sections on Scroll
    const revealElements = document.querySelectorAll('.experience-item, .skill-category, .intro-desc, .side-img-container, .intro-title, .personal-title');
    
    // Add base reveal class to all elements we want to animate
    revealElements.forEach(el => el.classList.add('reveal'));

    const observeOptions = {
        threshold: 0.15,
        rootMargin: '0px 0px -50px 0px'
    };

    const revealObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('active');
                revealObserver.unobserve(entry.target);
            }
        });
    }, observeOptions);

    revealElements.forEach(el => revealObserver.observe(el));

    // 3. Magnetic Button Effect
    document.querySelectorAll('.btn-premium').forEach(btn => {
        btn.addEventListener('mousemove', (e) => {
            const rect = btn.getBoundingClientRect();
            const x = e.clientX - rect.left - rect.width / 2;
            const y = e.clientY - rect.top - rect.height / 2;
            
            btn.style.transform = `translate(${x * 0.25}px, ${y * 0.25}px)`;
        });

        btn.addEventListener('mouseleave', () => {
            btn.style.transform = `translate(0px, 0px)`;
        });
    });
});
