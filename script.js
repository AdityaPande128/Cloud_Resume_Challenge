(function initParticles() {
    const canvas = document.getElementById('particle-canvas');
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    let width = canvas.width = window.innerWidth;
    let height = canvas.height = window.innerHeight;

    window.addEventListener('resize', () => {
        width = canvas.width = window.innerWidth;
        height = canvas.height = window.innerHeight;
    });

    const colors = ['#3b82f6', '#8b5cf6', '#06b6d4', '#ec4899', '#10b981'];
    const particleCount = Math.min(Math.floor(window.innerWidth / 22), 40);
    const particles = [];

    for (let i = 0; i < particleCount; i++) {
        particles.push({
            x: Math.random() * width,
            y: Math.random() * height,
            radius: Math.random() * 2.2 + 1.2,
            color: colors[Math.floor(Math.random() * colors.length)],
            vx: (Math.random() - 0.5) * 0.35,
            vy: (Math.random() - 0.5) * 0.35,
            alpha: Math.random() * 0.3 + 0.15
        });
    }

    let mouse = { x: -1000, y: -1000 };
    window.addEventListener('mousemove', (e) => {
        mouse.x = e.clientX;
        mouse.y = e.clientY;
    });

    function animate() {
        ctx.clearRect(0, 0, width, height);

        for (let i = 0; i < particles.length; i++) {
            const p = particles[i];
            p.x += p.vx;
            p.y += p.vy;

            if (p.x < 0) p.x = width;
            if (p.x > width) p.x = 0;
            if (p.y < 0) p.y = height;
            if (p.y > height) p.y = 0;

            const dx = mouse.x - p.x;
            const dy = mouse.y - p.y;
            const dist = Math.sqrt(dx * dx + dy * dy);
            if (dist < 110) {
                p.x -= (dx / dist) * 1.2;
                p.y -= (dy / dist) * 1.2;
            }

            ctx.beginPath();
            ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
            ctx.fillStyle = p.color;
            ctx.globalAlpha = p.alpha;
            ctx.fill();

            for (let j = i + 1; j < particles.length; j++) {
                const p2 = particles[j];
                const lineDist = Math.hypot(p.x - p2.x, p.y - p2.y);
                if (lineDist < 100) {
                    ctx.beginPath();
                    ctx.moveTo(p.x, p.y);
                    ctx.lineTo(p2.x, p2.y);
                    ctx.strokeStyle = p.color;
                    ctx.globalAlpha = (1 - lineDist / 100) * 0.1;
                    ctx.stroke();
                }
            }
        }

        ctx.globalAlpha = 1;
        requestAnimationFrame(animate);
    }

    animate();
})();



(function initScrollProgress() {
    const bar = document.getElementById('scroll-progress');
    if (!bar) return;

    window.addEventListener('scroll', () => {
        const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
        const progress = totalHeight > 0 ? (window.scrollY / totalHeight) * 100 : 0;
        bar.style.width = Math.min(progress, 100) + '%';
    }, { passive: true });
})();

(function initNav() {
    const links = document.querySelectorAll('.nav-link[href^="#"]');
    const sections = [];

    links.forEach(link => {
        const target = document.querySelector(link.getAttribute('href'));
        if (target) sections.push(target);
    });

    function update() {
        let current = sections[0] ? sections[0].id : '';
        sections.forEach(sec => {
            const rect = sec.getBoundingClientRect();
            if (rect.top <= window.innerHeight * 0.35) {
                current = sec.id;
            }
        });

        if (window.innerHeight + window.scrollY >= document.body.scrollHeight - 50) {
            current = sections[sections.length - 1].id;
        }

        links.forEach(link => {
            const href = link.getAttribute('href');
            const isActive = href === '#' + current;
            const wasActive = link.classList.contains('active');
            link.classList.toggle('active', isActive);
            if (isActive && !wasActive && window.innerWidth <= 960) {
                const navInner = document.querySelector('.nav-inner');
                if (navInner) {
                    navInner.scrollTo({
                        left: link.offsetLeft - (navInner.offsetWidth / 2) + (link.offsetWidth / 2),
                        behavior: 'smooth'
                    });
                }
            }
        });
    }

    window.addEventListener('scroll', update, { passive: true });
    update();
})();

(function initReveal() {
    const items = document.querySelectorAll('.fade-in');
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.1 });

    items.forEach(el => observer.observe(el));
})();

(function initCardSpotlights() {
    const cards = document.querySelectorAll('.project-card, .timeline-card');

    cards.forEach(card => {
        card.addEventListener('mousemove', (e) => {
            const rect = card.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
            card.style.setProperty('--mouse-x', x + 'px');
            card.style.setProperty('--mouse-y', y + 'px');
        });
    });
})();

(function initCertModal() {
    const certData = {
        cka: {
            title: 'Certified Kubernetes Administrator (CKA)',
            issuer: 'Cloud Native Computing Foundation (CNCF)',
            issued: 'Aug 2025',
            expires: 'Aug 2027',
            credId: 'LF-qbgrceh5fy',
            verifyUrl: 'https://training.linuxfoundation.org/certification/verify/'
        },
        aws: {
            title: 'AWS Certified Cloud Practitioner (CLF-C02)',
            issuer: 'Amazon Web Services (AWS)',
            issued: 'May 2024',
            expires: 'May 2027',
            credId: '3cf3ef0fff794607a329cd61e8b793fd',
            verifyUrl: 'https://cp.certmetrics.com/amazon/en/public/verify/credential'
        }
    };

    const backdrop = document.getElementById('cert-modal-backdrop');
    const closeBtn = document.getElementById('modal-close-btn');
    const titleEl = document.getElementById('modal-cert-title');
    const issuerEl = document.getElementById('modal-cert-issuer');
    const issueDateEl = document.getElementById('modal-issue-date');
    const expiryDateEl = document.getElementById('modal-expiry-date');
    const credIdEl = document.getElementById('modal-cred-id');
    const verifyLinkEl = document.getElementById('modal-verify-link');
    const verifyLinkTextEl = document.getElementById('modal-verify-link-text');
    const copyBtn = document.getElementById('modal-copy-btn');
    const copyBtnText = document.getElementById('copy-btn-text');

    if (!backdrop || !titleEl) return;

    function openModal(key) {
        const data = certData[key];
        if (!data) return;

        titleEl.textContent = data.title;
        issuerEl.textContent = data.issuer;
        issueDateEl.textContent = data.issued;
        expiryDateEl.textContent = data.expires;
        credIdEl.textContent = data.credId;

        verifyLinkEl.href = data.verifyUrl;
        verifyLinkTextEl.textContent = data.verifyUrl;

        copyBtnText.textContent = 'Copy';
        backdrop.classList.add('active');
        backdrop.setAttribute('aria-hidden', 'false');
        document.body.style.overflow = 'hidden';
    }

    function closeModal() {
        backdrop.classList.remove('active');
        backdrop.setAttribute('aria-hidden', 'true');
        document.body.style.overflow = '';
    }

    document.querySelectorAll('.cert-clickable').forEach(item => {
        item.addEventListener('click', () => {
            const key = item.getAttribute('data-cert');
            openModal(key);
        });

        item.addEventListener('keydown', (e) => {
            if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                const key = item.getAttribute('data-cert');
                openModal(key);
            }
        });
    });

    if (closeBtn) {
        closeBtn.addEventListener('click', closeModal);
    }

    backdrop.addEventListener('click', (e) => {
        if (e.target === backdrop) {
            closeModal();
        }
    });

    window.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && backdrop.classList.contains('active')) {
            closeModal();
        }
    });

    if (copyBtn) {
        copyBtn.addEventListener('click', () => {
            const code = credIdEl.textContent;
            navigator.clipboard.writeText(code).then(() => {
                copyBtnText.textContent = 'Copied!';
                setTimeout(() => {
                    copyBtnText.textContent = 'Copy';
                }, 2000);
            }).catch(() => {
                copyBtnText.textContent = 'Copied!';
            });
        });
    }
})();

(function initVisitorCounter() {
    const el = document.getElementById('visitor-count');
    if (!el) return;

    fetch('https://slmsw6wyo2.execute-api.eu-north-1.amazonaws.com/count')
        .then(res => {
            if (!res.ok) throw new Error(res.status);
            return res.json();
        })
        .then(data => {
            el.textContent = Number(data.count).toLocaleString();
        })
        .catch(() => {
            el.textContent = '1,420+';
        });
})();
