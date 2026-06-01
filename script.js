(function initParticles() {
    const canvas = document.getElementById('particle-canvas');
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    let particles = [];
    let mouse = { x: null, y: null };
    const PARTICLE_COUNT = 80;
    const CONNECT_DISTANCE = 150;
    const MOUSE_RADIUS = 200;

    function resize() {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
    }
    resize();
    window.addEventListener('resize', resize);

    window.addEventListener('mousemove', (e) => {
        mouse.x = e.clientX;
        mouse.y = e.clientY;
    });

    class Particle {
        constructor() {
            this.x = Math.random() * canvas.width;
            this.y = Math.random() * canvas.height;
            this.vx = (Math.random() - 0.5) * 0.5;
            this.vy = (Math.random() - 0.5) * 0.5;
            this.radius = Math.random() * 2 + 0.5;
            this.baseAlpha = Math.random() * 0.5 + 0.1;
            this.alpha = this.baseAlpha;
        }

        update() {
            this.x += this.vx;
            this.y += this.vy;

            if (this.x < 0 || this.x > canvas.width) this.vx *= -1;
            if (this.y < 0 || this.y > canvas.height) this.vy *= -1;
            if (mouse.x !== null) {
                const dx = this.x - mouse.x;
                const dy = this.y - mouse.y;
                const dist = Math.sqrt(dx * dx + dy * dy);
                if (dist < MOUSE_RADIUS) {
                    const force = (MOUSE_RADIUS - dist) / MOUSE_RADIUS;
                    this.alpha = this.baseAlpha + force * 0.5;
                    this.x += dx * force * 0.02;
                    this.y += dy * force * 0.02;
                } else {
                    this.alpha = this.baseAlpha;
                }
            }
        }

        draw() {
            ctx.beginPath();
            ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
            ctx.fillStyle = `rgba(99, 130, 255, ${this.alpha})`;
            ctx.fill();
        }
    }

    for (let i = 0; i < PARTICLE_COUNT; i++) {
        particles.push(new Particle());
    }

    function connectParticles() {
        for (let i = 0; i < particles.length; i++) {
            for (let j = i + 1; j < particles.length; j++) {
                const dx = particles[i].x - particles[j].x;
                const dy = particles[i].y - particles[j].y;
                const dist = Math.sqrt(dx * dx + dy * dy);

                if (dist < CONNECT_DISTANCE) {
                    const opacity = (1 - dist / CONNECT_DISTANCE) * 0.15;
                    ctx.beginPath();
                    ctx.strokeStyle = `rgba(99, 130, 255, ${opacity})`;
                    ctx.lineWidth = 0.5;
                    ctx.moveTo(particles[i].x, particles[i].y);
                    ctx.lineTo(particles[j].x, particles[j].y);
                    ctx.stroke();
                }
            }
        }
    }

    function animate() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        particles.forEach(p => { p.update(); p.draw(); });
        connectParticles();
        requestAnimationFrame(animate);
    }

    animate();
})();
(function initScrollProgress() {
    const bar = document.getElementById('scroll-progress');
    if (!bar) return;

    window.addEventListener('scroll', () => {
        const scrollTop = window.scrollY;
        const docHeight = document.documentElement.scrollHeight - window.innerHeight;
        const progress = (scrollTop / docHeight) * 100;
        bar.style.width = progress + '%';
    }, { passive: true });
})();
(function initFadeIn() {
    const els = document.querySelectorAll('.fade-in');

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('is-visible');
                observer.unobserve(entry.target);
            }
        });
    }, { rootMargin: '0px 0px -50px 0px', threshold: 0.1 });

    els.forEach(el => observer.observe(el));
})();
(function initNavTracking() {
    const links = document.querySelectorAll('.nav-link');
    const sections = document.querySelectorAll('section[id], .hero, footer[id]');

    function update() {
        const scrollY = window.scrollY + 140;
        sections.forEach(section => {
            const top = section.offsetTop;
            const height = section.offsetHeight;
            const id = section.getAttribute('id');
            if (scrollY >= top && scrollY < top + height) {
                links.forEach(link => {
                    link.classList.toggle('active', link.getAttribute('href') === '#' + id);
                });
            }
        });
    }

    window.addEventListener('scroll', update, { passive: true });
    update();
})();
(function initTypingEffect() {
    const el = document.getElementById('typed-text');
    if (!el) return;

    const phrases = [
        'Building scalable cloud-native applications.',
        'Exploring AI agents and automation.',
        'Passionate about clean, performant code.',
        'Certified Kubernetes Administrator.',
    ];

    let phraseIndex = 0;
    let charIndex = 0;
    let isDeleting = false;
    let timeout;

    function type() {
        const current = phrases[phraseIndex];

        if (isDeleting) {
            el.textContent = current.substring(0, charIndex - 1);
            charIndex--;
        } else {
            el.textContent = current.substring(0, charIndex + 1);
            charIndex++;
        }

        let delay = isDeleting ? 30 : 50;

        if (!isDeleting && charIndex === current.length) {
            delay = 2500;
            isDeleting = true;
        } else if (isDeleting && charIndex === 0) {
            isDeleting = false;
            phraseIndex = (phraseIndex + 1) % phrases.length;
            delay = 400;
        }

        timeout = setTimeout(type, delay);
    }
    setTimeout(type, 1200);
})();
(function initCardEffects() {
    const wrappers = document.querySelectorAll('.project-card-wrapper');

    wrappers.forEach(wrapper => {
        const card = wrapper.querySelector('.project-card');
        const spotlight = wrapper.querySelector('.card-spotlight');
        if (!card || !spotlight) return;

        wrapper.addEventListener('mousemove', (e) => {
            const rect = wrapper.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
            const centerX = rect.width / 2;
            const centerY = rect.height / 2;
            const rotateX = ((y - centerY) / centerY) * -5;
            const rotateY = ((x - centerX) / centerX) * 5;
            card.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
            spotlight.style.background = `radial-gradient(circle at ${x}px ${y}px, rgba(67, 97, 238, 0.12) 0%, transparent 60%)`;
        });

        wrapper.addEventListener('mouseleave', () => {
            card.style.transform = 'rotateX(0deg) rotateY(0deg)';
            card.style.transition = 'transform 0.5s ease';
            setTimeout(() => { card.style.transition = 'transform 0.1s ease, box-shadow 0.4s ease'; }, 500);
        });

        wrapper.addEventListener('mouseenter', () => {
            card.style.transition = 'transform 0.1s ease, box-shadow 0.4s ease';
        });
    });
})();
(function initVisitorCounter() {
    const counterEl = document.getElementById('visitor-count');
    if (!counterEl) return;
    const apiUrl = 'https://ge45qvtkw9.execute-api.eu-north-1.amazonaws.com/Prod/count/';

    function animateCount(target) {
        const duration = 1500;
        const start = 0;
        const startTime = performance.now();

        function step(currentTime) {
            const elapsed = currentTime - startTime;
            const progress = Math.min(elapsed / duration, 1);
            const eased = 1 - Math.pow(1 - progress, 3);
            const current = Math.floor(start + (target - start) * eased);
            counterEl.textContent = current.toLocaleString();

            if (progress < 1) {
                requestAnimationFrame(step);
            } else {
                counterEl.textContent = target.toLocaleString();
            }
        }

        requestAnimationFrame(step);
    }

    async function fetchCount() {
        try {
            const response = await fetch(apiUrl);
            if (!response.ok) throw new Error(`HTTP ${response.status}`);
            const data = await response.json();
            animateCount(data.count);
        } catch (error) {
            console.error('Could not fetch visitor count:', error);
            counterEl.textContent = '—';
        }
    }

    fetchCount();
})();
