/**
 * Tinitz "Vivant" Interactivity & Data Logic
 */

document.addEventListener('DOMContentLoaded', () => {
    initVivantAnimations();
    initAnimatedCounters();
    initQuickActions();
});

/**
 * Enhanced Intersection Observer for "Vivant" Section Entry
 */
function initVivantAnimations() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: "0px 0px -50px 0px"
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry, index) => {
            if (entry.isIntersecting) {
                // Sequential reveal
                setTimeout(() => {
                    entry.target.classList.add('active');
                }, index % 5 * 100);
            }
        });
    }, observerOptions);

    document.querySelectorAll('.vivant-reveal, .bento-card').forEach(el => {
        el.classList.add('vivant-reveal');
        observer.observe(el);
    });
}

/**
 * JS Animated Counters for Bento Stats
 */
function initAnimatedCounters() {
    const counters = document.querySelectorAll('.animate-counter');
    const speed = 200;

    const startCounter = (el) => {
        const target = +el.getAttribute('data-target');
        const count = +el.innerText;
        const inc = target / speed;

        if (count < target) {
            el.innerText = Math.ceil(count + inc);
            setTimeout(() => startCounter(el), 1);
        } else {
            el.innerText = target;
        }
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                startCounter(entry.target);
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 1.0 });

    counters.forEach(counter => observer.observe(counter));
}

/**
 * Quick Action Button behavior in Tables
 */
function initQuickActions() {
    document.querySelectorAll('.table-row-clean').forEach(row => {
        row.addEventListener('mouseenter', () => {
            const actions = row.querySelector('.quick-actions');
            if (actions) actions.classList.remove('opacity-0', 'translate-x-4');
        });
        row.addEventListener('mouseleave', () => {
            const actions = row.querySelector('.quick-actions');
            if (actions) actions.classList.add('opacity-0', 'translate-x-4');
        });
    });
}
