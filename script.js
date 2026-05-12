// Smooth scrolling enhancements and animations
document.addEventListener('DOMContentLoaded', function() {
    // Lucide icons
    if (window.lucide) {
        window.lucide.createIcons();
    }

    // Theme toggle functionality

    function initTheme() {
        const savedTheme = localStorage.getItem('theme');
        const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
        const isDark = savedTheme === 'dark' || (!savedTheme && prefersDark);
        document.body.classList.toggle('dark', isDark);
        const toggleBtn = document.getElementById('theme-toggle');
        if (toggleBtn) {
            toggleBtn.textContent = isDark ? '🌞' : '🌙';
        }
    }

    function toggleTheme() {
        const isDark = document.body.classList.toggle('dark');
        const toggleBtn = document.getElementById('theme-toggle');
        toggleBtn.textContent = isDark ? '🌞' : '🌙';
        localStorage.setItem('theme', isDark ? 'dark' : 'light');
    }

    const toggleBtn = document.getElementById('theme-toggle');
    if (toggleBtn) {
        toggleBtn.addEventListener('click', toggleTheme);
    }

    initTheme();
    // Navbar scroll effect
    window.addEventListener('scroll', () => {
        const nav = document.querySelector('nav');
        if (window.scrollY > 100) {
            nav.style.background = 'rgba(17, 24, 39, 0.95)';
            nav.style.backdropFilter = 'blur(20px)';
        } else {
            nav.style.background = 'rgba(0, 0, 0, 0.3)';
        }
    });

    // Animate sections on scroll
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate-fade-in-up');
            }
        });
    }, observerOptions);

    // Observe all sections
    document.querySelectorAll('section').forEach(section => {
        observer.observe(section);
    });

    // Mobile menu toggle (if needed)
    const menuToggle = document.createElement('button');
    menuToggle.innerHTML = '☰';
    menuToggle.className = 'md:hidden text-2xl';
    document.querySelector('nav .flex').appendChild(menuToggle);

    // Add delay to animations
    document.querySelectorAll('section').forEach((section, index) => {
        section.style.animationDelay = `${index * 0.1}s`;
    });
});
