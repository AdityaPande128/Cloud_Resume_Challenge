(function () {
'use strict';

const PLANET_DATA = [
    {
        id: 'home', label: 'Home', x: 0, y: 0, z: 0,
        radius: 20, color: 0x4361ee, cssColor: '#4361ee', emoji: '🏠',
        hasRing: false, hasClouds: true, textureStyle: 'earthlike',
        content: () => `
            <h2>Aditya Pande</h2>
            <p class="planet-subtitle">MSc Computer Science — University College London</p>
            <p>Building scalable cloud-native applications. Exploring AI agents and automation. Passionate about clean, performant code.</p>
            <div class="content-divider"></div>
            <h3>Quick Links</h3>
            <p><a href="mailto:aditya.pande.128@gmail.com">✉ aditya.pande.128@gmail.com</a><br>
            <a href="https://www.linkedin.com/in/the-aditya-pande/" target="_blank">🔗 LinkedIn</a><br>
            <a href="https://github.com/AdityaPande128" target="_blank">🐙 GitHub</a><br>
            <a href="tel:+447774922201">📞 +44 7774 922201</a></p>`
    },
    {
        id: 'skills', label: 'Skills', x: -65, y: 8, z: -40,
        radius: 16, color: 0x10b981, cssColor: '#10b981', emoji: '⚡',
        hasRing: false, hasClouds: false, textureStyle: 'tech',
        content: () => `
            <h2>Technical Skills</h2>
            <p class="planet-subtitle">Expertise & Certifications</p>
            <h3>Languages</h3>
            <div class="content-tags"><span class="content-tag">Python</span><span class="content-tag">JavaScript</span><span class="content-tag">TypeScript</span><span class="content-tag">C/C++</span><span class="content-tag">SQL</span><span class="content-tag">HTML/CSS</span><span class="content-tag">Bash</span></div>
            <h3>Frameworks & Tools</h3>
            <div class="content-tags"><span class="content-tag">Next.js</span><span class="content-tag">React</span><span class="content-tag">Node.js</span><span class="content-tag">Git</span><span class="content-tag">Docker</span><span class="content-tag">Kubernetes</span><span class="content-tag">Terraform</span><span class="content-tag">Jenkins</span><span class="content-tag">AWS SAM</span><span class="content-tag">Pandas</span><span class="content-tag">NumPy</span><span class="content-tag">Scikit-learn</span><span class="content-tag">Seaborn</span></div>
            <div class="content-divider"></div>
            <h3>Certifications</h3>
            <div class="cert-badge"><svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="8" r="6"/><path d="M15.477 12.89 17 22l-5-3-5 3 1.523-9.11"/></svg>Certified Kubernetes Administrator (CKA)</div>
            <div class="cert-badge"><svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="8" r="6"/><path d="M15.477 12.89 17 22l-5-3-5 3 1.523-9.11"/></svg>AWS Certified Cloud Practitioner</div>`
    },
    {
        id: 'projects', label: 'Projects', x: 60, y: -5, z: -50,
        radius: 18, color: 0x7c3aed, cssColor: '#7c3aed', emoji: '🚀',
        hasRing: true, hasClouds: true, textureStyle: 'bands',
        content: () => `
            <h2>Selected Projects</h2><p class="planet-subtitle">Portfolio</p>
            <div class="content-card"><h4>IBM IXN Project — Agentic AI System</h4><div class="card-date">June 2026 — Present</div><ul><li>Developing an agentic AI system using IBM Granite models integrated with the OpenClaw runtime.</li><li>Exploring dynamic skill generation to enable the agent to extend its own capabilities.</li><li>Working on a secure sandboxed execution setup using Docker.</li></ul><div class="content-tags"><span class="content-tag">IBM Granite</span><span class="content-tag">OpenClaw</span><span class="content-tag">Docker</span><span class="content-tag">Python</span><span class="content-tag">AI Agents</span></div></div>
            <div class="content-card"><h4>Do Me A Favour Buddy</h4><div class="card-date">Jan — Apr 2026</div><ul><li>Led a cross-functional team of 4 to develop a Next.js mental health application.</li><li>Delivered Figma prototype 8 days early and database architecture 9 days ahead of schedule.</li></ul><div class="content-tags"><span class="content-tag">Next.js</span><span class="content-tag">React</span><span class="content-tag">Figma</span></div></div>
            <div class="content-card"><h4>ScoutCamp</h4><div class="card-date">Sep — Dec 2025</div><ul><li>Led a team of 7 to build a Python3 CLI app, boosting velocity from 3 to 8 story points/week.</li><li>Integrated OpenWeather API — reduced weather-related cancellations to 0%.</li></ul><div class="content-tags"><span class="content-tag">Python</span><span class="content-tag">AWS SAM</span><span class="content-tag">CI/CD</span></div></div>
            <div class="content-card"><h4>Cloud Resume Challenge</h4><div class="card-date">2024</div><ul><li>Built a serverless cloud-native app on AWS with S3 and CloudFront.</li><li>Automated full-stack IaC deployment with AWS SAM and CI/CD via GitHub Actions.</li></ul><div class="content-tags"><span class="content-tag">Lambda</span><span class="content-tag">DynamoDB</span><span class="content-tag">CloudFront</span><span class="content-tag">SAM</span></div></div>
            <div class="content-card"><h4>Clarity — Voice Accessibility Tool</h4><div class="card-date">2025</div><ul><li>Architected a real-time assistant using SpeechRecognition API with serverless Node.js on Vercel.</li><li>Integrated Google Gemini with strict JSON validation.</li></ul><div class="content-tags"><span class="content-tag">JavaScript</span><span class="content-tag">Gemini AI</span><span class="content-tag">Vercel</span></div></div>`
    },
    {
        id: 'education', label: 'Education', x: 75, y: 6, z: 30,
        radius: 14, color: 0xf59e0b, cssColor: '#f59e0b', emoji: '🎓',
        hasRing: false, hasClouds: false, textureStyle: 'rocky',
        content: () => `
            <h2>Education</h2><p class="planet-subtitle">Academic Background</p>
            <div class="content-card"><h4>M.Sc. in Computer Science</h4><div class="card-sub">University College London (UCL)</div><div class="card-date">Graduating 2026</div><p>Coursework: Data Structures & Algorithms, Relational Databases, Computer Architecture, OOP with Python, Machine Learning with Big Data.</p></div>
            <div class="content-card"><h4>B.Tech in Mechanical Engineering</h4><div class="card-sub">Netaji Subhas University of Technology</div><div class="card-date">Graduated 2025</div><p>Specialization in EVs. Awarded University Scholarship, ranked in the top 5% with a GPA of 8.38/10.</p></div>`
    },
    {
        id: 'experience', label: 'Experience', x: -50, y: -4, z: 45,
        radius: 13, color: 0xef4444, cssColor: '#ef4444', emoji: '💼',
        hasRing: false, hasClouds: false, textureStyle: 'warm',
        content: () => `
            <h2>Work Experience</h2><p class="planet-subtitle">Career</p>
            <div class="content-card"><h4>Workshop Assistant</h4><div class="card-sub">Netaji Subhas University of Technology</div><div class="card-date">May — July 2025</div><ul><li>Repaired lathe machines by analyzing electrical schematics.</li><li>Devised a reverse-engineering technique for industrial drilling machines.</li><li>Conducted in-depth studies on industrial shaper machines.</li></ul></div>`
    },
    {
        id: 'activities', label: 'Activities', x: -5, y: 7, z: 75,
        radius: 13, color: 0x06b6d4, cssColor: '#06b6d4', emoji: '🎤',
        hasRing: true, hasClouds: false, textureStyle: 'bands',
        content: () => `
            <h2>Extracurriculars</h2><p class="planet-subtitle">Leadership & Activities</p>
            <div class="content-card"><h4>Director, Parliamentary Debating</h4><div class="card-sub">The Debating Society of NSUT</div><div class="card-date">2023 — 2024</div><ul><li>Led a department of over 80 people.</li><li>Led contingents to 10+ national and international competitions.</li><li>Organized workshops with eminent international debaters.</li></ul></div>
            <div class="content-card"><h4>Member, Executive Committee</h4><div class="card-sub">The Debating Society of NSUT</div><div class="card-date">2022 — 2023</div><ul><li>Helped organize multiple competitions attracting hundreds of competitors.</li></ul></div>
            <div class="content-card"><h4>Under Director-General, Debating, Colloquium</h4><div class="card-sub">The Literary Fest of NSUT</div><div class="card-date">2023</div><ul><li>Co-organized the largest Parliamentary Debating Tournament in North India.</li></ul></div>`
    },
    {
        id: 'contact', label: 'Contact', x: 45, y: -3, z: 55,
        radius: 12, color: 0xec4899, cssColor: '#ec4899', emoji: '📬',
        hasRing: false, hasClouds: true, textureStyle: 'warm',
        content: () => `
            <h2>Let's Connect</h2><p class="planet-subtitle">Contact</p>
            <p>I'm actively looking for roles in software engineering. If you're hiring, I'd love to hear from you.</p>
            <div class="content-divider"></div>
            <p><a href="mailto:aditya.pande.128@gmail.com">✉ aditya.pande.128@gmail.com</a><br><br>
            <a href="https://www.linkedin.com/in/the-aditya-pande/" target="_blank">🔗 LinkedIn — the-aditya-pande</a><br><br>
            <a href="https://github.com/AdityaPande128" target="_blank">🐙 GitHub — AdityaPande128</a><br><br>
            <a href="tel:+447774922201">📞 +44 7774 922201</a></p>`
    }
];

let scene, camera, renderer;
let W = window.innerWidth, H = window.innerHeight;
let rocketGroup;
let planetObjects = [];
let cloudMeshes = [];
let labelEls = [];
let time = 0;
let panelOpen = false;
let nearPlanet = null;
const explored = new Set();
let gameStarted = false;

const rocketState = {
    pos: new THREE.Vector3(0, 0, -45),
    vel: new THREE.Vector3(),
    yaw: 0, thrust: 0, roll: 0
};

const keys = {};
const THRUST_FORCE = 60;
const ROT_SPEED = 2.2;
const FRICTION = 0.975;
const MAX_SPEED = 80;

const thrustParticles = [];
const smokeParticles = [];
const MAX_FIRE = 150;
const MAX_SMOKE = 80;
let fireSystem, firePositions, fireColors, fireSizes;
let smokeSystem, smokePositions, smokeAlphas, smokeSizes;
let dustSystem;

const minimapCanvas = document.getElementById('minimap-canvas');
const minimapCtx = minimapCanvas.getContext('2d');

function createPlanetTexture(hex, style, size) {
    size = size || 512;
    const c = document.createElement('canvas');
    c.width = size; c.height = size;
    const ctx = c.getContext('2d');
    const col = new THREE.Color(hex);
    const R = col.r * 255 | 0, G = col.g * 255 | 0, B = col.b * 255 | 0;

    ctx.fillStyle = `rgb(${R},${G},${B})`;
    ctx.fillRect(0, 0, size, size);

    if (style === 'earthlike') {
        ctx.fillStyle = `rgba(${Math.min(255, R + 40)},${Math.min(255, G + 60)},${Math.min(255, B + 80)},0.25)`;
        ctx.fillRect(0, 0, size, size);
        for (let i = 0; i < 12; i++) {
            ctx.beginPath();
            const cx = Math.random() * size, cy = Math.random() * size;
            ctx.moveTo(cx, cy);
            for (let a = 0; a < Math.PI * 2; a += 0.15) {
                const r = 25 + Math.random() * 55 + Math.sin(a * 3) * 20;
                ctx.lineTo(cx + Math.cos(a) * r, cy + Math.sin(a) * r);
            }
            ctx.closePath();
            const brighter = (Math.random() > 0.5);
            ctx.fillStyle = brighter
                ? `rgba(${Math.min(255, R + 50)},${Math.min(255, G + 70)},${Math.min(255, B + 90)},0.4)`
                : `rgba(${Math.max(0, R - 30)},${Math.max(0, G - 20)},${Math.max(0, B - 10)},0.3)`;
            ctx.fill();
        }
        for (let i = 0; i < 20; i++) {
            const cx = Math.random() * size, cy = Math.random() * size, r = 3 + Math.random() * 8;
            ctx.beginPath(); ctx.arc(cx, cy, r, 0, Math.PI * 2);
            ctx.fillStyle = `rgba(255,255,255,${0.04 + Math.random() * 0.06})`;
            ctx.fill();
        }
    } else if (style === 'bands') {
        let y = 0;
        while (y < size) {
            const h = 6 + Math.random() * 22;
            const shift = (Math.random() - 0.5) * 60;
            ctx.fillStyle = `rgba(${clampByte(R + shift)},${clampByte(G + shift)},${clampByte(B + shift)},0.55)`;
            ctx.fillRect(0, y, size, h);
            const turbulence = 4 + Math.random() * 6;
            for (let x = 0; x < size; x += 3) {
                const offset = Math.sin(x * 0.04 + y * 0.01) * turbulence;
                ctx.fillStyle = `rgba(${clampByte(R + shift + 20)},${clampByte(G + shift + 10)},${clampByte(B + shift)},0.15)`;
                ctx.fillRect(x, y + offset, 3, h * 0.4);
            }
            y += h;
        }
        for (let i = 0; i < 6; i++) {
            const sx = Math.random() * size, sy = Math.random() * size, sr = 8 + Math.random() * 18;
            const grad = ctx.createRadialGradient(sx, sy, 0, sx, sy, sr);
            grad.addColorStop(0, `rgba(255,255,255,0.12)`);
            grad.addColorStop(0.5, `rgba(255,200,180,0.06)`);
            grad.addColorStop(1, 'transparent');
            ctx.fillStyle = grad;
            ctx.beginPath(); ctx.arc(sx, sy, sr, 0, Math.PI * 2); ctx.fill();
        }
    } else if (style === 'rocky') {
        for (let i = 0; i < 50; i++) {
            const cx = Math.random() * size, cy = Math.random() * size;
            const cr = 4 + Math.random() * 28;
            ctx.beginPath(); ctx.arc(cx, cy, cr, 0, Math.PI * 2);
            ctx.fillStyle = `rgba(0,0,0,${0.08 + Math.random() * 0.15})`;
            ctx.fill();
            ctx.beginPath(); ctx.arc(cx - cr * 0.15, cy - cr * 0.15, cr * 0.85, 0, Math.PI * 2);
            ctx.strokeStyle = `rgba(255,255,255,${0.05 + Math.random() * 0.08})`;
            ctx.lineWidth = 1 + Math.random(); ctx.stroke();
            ctx.beginPath(); ctx.arc(cx + cr * 0.1, cy + cr * 0.1, cr * 0.3, 0, Math.PI * 2);
            ctx.fillStyle = `rgba(0,0,0,0.06)`;
            ctx.fill();
        }
        for (let i = 0; i < 200; i++) {
            const x = Math.random() * size, y = Math.random() * size;
            ctx.fillStyle = `rgba(${Math.random() > 0.5 ? 255 : 0},${Math.random() > 0.5 ? 200 : 0},0,0.04)`;
            ctx.fillRect(x, y, 1 + Math.random() * 2, 1 + Math.random() * 2);
        }
    } else if (style === 'tech') {
        ctx.strokeStyle = `rgba(255,255,255,0.06)`;
        ctx.lineWidth = 0.5;
        const grid = 16;
        for (let x = 0; x < size; x += grid) { ctx.beginPath(); ctx.moveTo(x, 0); ctx.lineTo(x, size); ctx.stroke(); }
        for (let y = 0; y < size; y += grid) { ctx.beginPath(); ctx.moveTo(0, y); ctx.lineTo(size, y); ctx.stroke(); }
        for (let i = 0; i < 60; i++) {
            const gx = Math.floor(Math.random() * (size / grid)) * grid;
            const gy = Math.floor(Math.random() * (size / grid)) * grid;
            ctx.beginPath(); ctx.arc(gx, gy, 2, 0, Math.PI * 2);
            ctx.fillStyle = `rgba(${Math.min(255, R + 100)},${Math.min(255, G + 100)},${Math.min(255, B + 100)},0.4)`;
            ctx.fill();
        }
        for (let i = 0; i < 25; i++) {
            const sx = Math.floor(Math.random() * (size / grid)) * grid;
            const sy = Math.floor(Math.random() * (size / grid)) * grid;
            const ex = sx + (Math.random() > 0.5 ? 1 : -1) * grid * (1 + Math.floor(Math.random() * 4));
            ctx.beginPath(); ctx.moveTo(sx, sy); ctx.lineTo(ex, sy); ctx.lineTo(ex, sy + grid * (Math.random() > 0.5 ? 1 : -1));
            ctx.strokeStyle = `rgba(${Math.min(255, R + 80)},${Math.min(255, G + 80)},${Math.min(255, B + 80)},0.15)`;
            ctx.lineWidth = 1; ctx.stroke();
        }
        for (let i = 0; i < 8; i++) {
            const cx = Math.random() * size, cy = Math.random() * size, r = 20 + Math.random() * 40;
            const grad = ctx.createRadialGradient(cx, cy, 0, cx, cy, r);
            grad.addColorStop(0, `rgba(${Math.min(255, R + 60)},${Math.min(255, G + 60)},${Math.min(255, B + 60)},0.12)`);
            grad.addColorStop(1, 'transparent');
            ctx.fillStyle = grad; ctx.fillRect(cx - r, cy - r, r * 2, r * 2);
        }
    } else if (style === 'warm') {
        for (let i = 0; i < 20; i++) {
            const cx = Math.random() * size, cy = Math.random() * size, r = 20 + Math.random() * 70;
            const grad = ctx.createRadialGradient(cx, cy, 0, cx, cy, r);
            grad.addColorStop(0, `rgba(255,${120 + Math.random() * 100 | 0},0,0.25)`);
            grad.addColorStop(0.6, `rgba(255,${50 + Math.random() * 60 | 0},0,0.08)`);
            grad.addColorStop(1, 'transparent');
            ctx.fillStyle = grad; ctx.fillRect(cx - r, cy - r, r * 2, r * 2);
        }
        for (let i = 0; i < 15; i++) {
            ctx.beginPath();
            const cx = Math.random() * size, cy = Math.random() * size;
            ctx.moveTo(cx, cy);
            for (let a = 0; a < Math.PI * 2; a += 0.2) {
                const rr = 10 + Math.random() * 30;
                ctx.lineTo(cx + Math.cos(a) * rr, cy + Math.sin(a) * rr);
            }
            ctx.closePath();
            ctx.fillStyle = `rgba(${Math.max(0, R - 40)},${Math.max(0, G - 30)},${Math.max(0, B - 20)},0.3)`;
            ctx.fill();
        }
    }

    for (let i = 0; i < 5000; i++) {
        const x = Math.random() * size, y = Math.random() * size;
        ctx.fillStyle = `rgba(${Math.random() > 0.5 ? 200 : 30},${Math.random() > 0.5 ? 200 : 30},${Math.random() > 0.5 ? 200 : 30},${Math.random() * 0.03})`;
        ctx.fillRect(x, y, 1 + Math.random(), 1 + Math.random());
    }

    const tex = new THREE.CanvasTexture(c);
    tex.wrapS = THREE.RepeatWrapping;
    tex.wrapT = THREE.RepeatWrapping;
    return tex;
}

function createCloudTexture(size) {
    size = size || 512;
    const c = document.createElement('canvas');
    c.width = size; c.height = size;
    const ctx = c.getContext('2d');
    ctx.clearRect(0, 0, size, size);
    for (let i = 0; i < 40; i++) {
        const cx = Math.random() * size, cy = Math.random() * size;
        const r = 15 + Math.random() * 50;
        const grad = ctx.createRadialGradient(cx, cy, 0, cx, cy, r);
        grad.addColorStop(0, `rgba(255,255,255,${0.12 + Math.random() * 0.15})`);
        grad.addColorStop(0.5, `rgba(255,255,255,${0.04 + Math.random() * 0.06})`);
        grad.addColorStop(1, 'transparent');
        ctx.fillStyle = grad;
        ctx.beginPath(); ctx.arc(cx, cy, r, 0, Math.PI * 2); ctx.fill();
    }
    const tex = new THREE.CanvasTexture(c);
    tex.wrapS = THREE.RepeatWrapping;
    tex.wrapT = THREE.RepeatWrapping;
    return tex;
}

function clampByte(v) { return Math.max(0, Math.min(255, v | 0)); }

function makeGlowTexture(hex) {
    const size = 256, c = document.createElement('canvas');
    c.width = c.height = size;
    const ctx = c.getContext('2d');
    const col = new THREE.Color(hex);
    const r = col.r * 255 | 0, g = col.g * 255 | 0, b = col.b * 255 | 0;
    const grad = ctx.createRadialGradient(size / 2, size / 2, 0, size / 2, size / 2, size / 2);
    grad.addColorStop(0, `rgba(${r},${g},${b},0.45)`);
    grad.addColorStop(0.2, `rgba(${r},${g},${b},0.2)`);
    grad.addColorStop(0.5, `rgba(${r},${g},${b},0.05)`);
    grad.addColorStop(1, `rgba(${r},${g},${b},0)`);
    ctx.fillStyle = grad;
    ctx.fillRect(0, 0, size, size);
    return new THREE.CanvasTexture(c);
}

function init() {
    scene = new THREE.Scene();
    scene.fog = new THREE.FogExp2(0x030410, 0.0035);

    camera = new THREE.PerspectiveCamera(55, W / H, 0.1, 1500);

    renderer = new THREE.WebGLRenderer({ antialias: true });
    renderer.setSize(W, H);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.setClearColor(0x030410);
    renderer.toneMapping = THREE.ACESFilmicToneMapping;
    renderer.toneMappingExposure = 1.1;
    document.body.prepend(renderer.domElement);

    scene.add(new THREE.HemisphereLight(0x334488, 0x111122, 0.8));

    const sun = new THREE.DirectionalLight(0xffeedd, 0.9);
    sun.position.set(80, 120, 40);
    scene.add(sun);

    const fill = new THREE.DirectionalLight(0x8888cc, 0.3);
    fill.position.set(-60, -30, -80);
    scene.add(fill);

    window.addEventListener('resize', () => {
        W = window.innerWidth; H = window.innerHeight;
        camera.aspect = W / H;
        camera.updateProjectionMatrix();
        renderer.setSize(W, H);
    });
}

function createStarField() {
    const layers = [
        { count: 5000, minR: 300, maxR: 700, size: 1.0, color: 0xccdaff, opacity: 0.7 },
        { count: 2000, minR: 200, maxR: 500, size: 1.8, color: 0x9999ff, opacity: 0.45 },
        { count: 400, minR: 150, maxR: 400, size: 3.0, color: 0xffeebb, opacity: 0.6 }
    ];
    layers.forEach(l => {
        const geo = new THREE.BufferGeometry();
        const pos = new Float32Array(l.count * 3);
        for (let i = 0; i < l.count; i++) {
            const theta = Math.random() * Math.PI * 2;
            const phi = Math.acos(2 * Math.random() - 1);
            const r = l.minR + Math.random() * (l.maxR - l.minR);
            pos[i * 3] = r * Math.sin(phi) * Math.cos(theta);
            pos[i * 3 + 1] = r * Math.sin(phi) * Math.sin(theta);
            pos[i * 3 + 2] = r * Math.cos(phi);
        }
        geo.setAttribute('position', new THREE.BufferAttribute(pos, 3));
        scene.add(new THREE.Points(geo, new THREE.PointsMaterial({
            color: l.color, size: l.size, sizeAttenuation: true,
            transparent: true, opacity: l.opacity
        })));
    });

    const dustCount = 300;
    const dustGeo = new THREE.BufferGeometry();
    const dustPos = new Float32Array(dustCount * 3);
    for (let i = 0; i < dustCount; i++) {
        dustPos[i * 3] = (Math.random() - 0.5) * 300;
        dustPos[i * 3 + 1] = (Math.random() - 0.5) * 150;
        dustPos[i * 3 + 2] = (Math.random() - 0.5) * 300;
    }
    dustGeo.setAttribute('position', new THREE.BufferAttribute(dustPos, 3));
    dustSystem = new THREE.Points(dustGeo, new THREE.PointsMaterial({
        color: 0x6677aa, size: 0.8, sizeAttenuation: true,
        transparent: true, opacity: 0.25
    }));
    scene.add(dustSystem);

    for (let i = 0; i < 5; i++) {
        const nSize = 128, nc = document.createElement('canvas');
        nc.width = nc.height = nSize;
        const nctx = nc.getContext('2d');
        const hue = Math.random() * 360;
        const grad = nctx.createRadialGradient(nSize / 2, nSize / 2, 0, nSize / 2, nSize / 2, nSize / 2);
        grad.addColorStop(0, `hsla(${hue},60%,50%,0.06)`);
        grad.addColorStop(0.4, `hsla(${hue},50%,40%,0.02)`);
        grad.addColorStop(1, 'transparent');
        nctx.fillStyle = grad;
        nctx.fillRect(0, 0, nSize, nSize);
        const sprite = new THREE.Sprite(new THREE.SpriteMaterial({
            map: new THREE.CanvasTexture(nc), transparent: true,
            blending: THREE.AdditiveBlending, depthWrite: false
        }));
        sprite.position.set((Math.random() - 0.5) * 400, (Math.random() - 0.5) * 200, (Math.random() - 0.5) * 400);
        sprite.scale.set(180 + Math.random() * 200, 180 + Math.random() * 200, 1);
        scene.add(sprite);
    }
}

function createPlanets() {
    const labelsContainer = document.getElementById('planet-labels');
    for (const p of PLANET_DATA) {
        const group = new THREE.Group();
        group.position.set(p.x, p.y, p.z);

        const tex = createPlanetTexture(p.color, p.textureStyle);
        const sphereGeo = new THREE.SphereGeometry(p.radius, 64, 64);
        const sphereMat = new THREE.MeshStandardMaterial({
            map: tex, metalness: 0.1, roughness: 0.75,
            emissive: p.color, emissiveIntensity: 0.06
        });
        const mesh = new THREE.Mesh(sphereGeo, sphereMat);
        mesh.userData.planet = p;
        group.add(mesh);

        const atmo1Geo = new THREE.SphereGeometry(p.radius * 1.06, 48, 48);
        const atmo1Mat = new THREE.MeshBasicMaterial({
            color: p.color, transparent: true, opacity: 0.04, side: THREE.BackSide
        });
        group.add(new THREE.Mesh(atmo1Geo, atmo1Mat));

        const atmo2Geo = new THREE.SphereGeometry(p.radius * 1.12, 48, 48);
        const atmo2Mat = new THREE.MeshBasicMaterial({
            color: p.color, transparent: true, opacity: 0.025, side: THREE.BackSide
        });
        group.add(new THREE.Mesh(atmo2Geo, atmo2Mat));

        if (p.hasClouds) {
            const cloudTex = createCloudTexture();
            const cloudGeo = new THREE.SphereGeometry(p.radius * 1.03, 48, 48);
            const cloudMat = new THREE.MeshBasicMaterial({
                map: cloudTex, transparent: true, opacity: 0.45, depthWrite: false
            });
            const cloudMesh = new THREE.Mesh(cloudGeo, cloudMat);
            group.add(cloudMesh);
            cloudMeshes.push(cloudMesh);
        }

        const glowSprite = new THREE.Sprite(new THREE.SpriteMaterial({
            map: makeGlowTexture(p.color), transparent: true,
            blending: THREE.AdditiveBlending, depthWrite: false
        }));
        glowSprite.scale.set(p.radius * 5, p.radius * 5, 1);
        group.add(glowSprite);

        const pLight = new THREE.PointLight(p.color, 0.6, p.radius * 8);
        pLight.position.set(0, p.radius * 0.5, 0);
        group.add(pLight);

        if (p.hasRing) {
            const ringGeo = new THREE.RingGeometry(p.radius * 1.35, p.radius * 2.0, 80);
            const ringC = document.createElement('canvas');
            ringC.width = 256; ringC.height = 64;
            const rctx = ringC.getContext('2d');
            const rcol = new THREE.Color(p.color);
            for (let x = 0; x < 256; x++) {
                const t = x / 256;
                const alpha = Math.sin(t * Math.PI) * 0.35 * (0.7 + Math.random() * 0.3);
                rctx.fillStyle = `rgba(${rcol.r * 255 | 0},${rcol.g * 255 | 0},${rcol.b * 255 | 0},${alpha})`;
                rctx.fillRect(x, 0, 1, 64);
            }
            const ringTex = new THREE.CanvasTexture(ringC);
            const ringMat = new THREE.MeshBasicMaterial({
                map: ringTex, transparent: true, side: THREE.DoubleSide, depthWrite: false
            });
            const ring = new THREE.Mesh(ringGeo, ringMat);
            ring.rotation.x = Math.PI / 2.3;
            ring.rotation.z = 0.15;
            group.add(ring);
        }

        scene.add(group);
        planetObjects.push({ group, mesh, data: p });

        const labelEl = document.createElement('div');
        labelEl.className = 'planet-label';
        labelEl.innerHTML = `<span class="planet-label-emoji">${p.emoji}</span><span class="planet-label-name">${p.label}</span><span class="planet-label-explored" id="label-exp-${p.id}"></span>`;
        labelsContainer.appendChild(labelEl);
        labelEls.push({ el: labelEl, data: p });
    }
}

function createRocket() {
    rocketGroup = new THREE.Group();

    const bodyGeo = new THREE.CylinderGeometry(1.4, 1.7, 7, 16);
    bodyGeo.rotateX(Math.PI / 2);
    const bodyMat = new THREE.MeshPhongMaterial({
        color: 0xe0e6ff, specular: 0x8899ff, shininess: 100, emissive: 0x111133, emissiveIntensity: 0.1
    });
    rocketGroup.add(new THREE.Mesh(bodyGeo, bodyMat));

    const noseGeo = new THREE.ConeGeometry(1.4, 4, 16);
    noseGeo.rotateX(Math.PI / 2);
    const noseMat = new THREE.MeshPhongMaterial({
        color: 0xf0f4ff, specular: 0xaabbff, shininess: 120, emissive: 0x222244, emissiveIntensity: 0.05
    });
    const nose = new THREE.Mesh(noseGeo, noseMat);
    nose.position.z = 5.5;
    rocketGroup.add(nose);

    const tipGeo = new THREE.SphereGeometry(0.3, 12, 12);
    const tipMat = new THREE.MeshPhongMaterial({ color: 0xff4444, emissive: 0xff2222, emissiveIntensity: 0.5 });
    const tip = new THREE.Mesh(tipGeo, tipMat);
    tip.position.z = 7.8;
    rocketGroup.add(tip);

    const stripe1Geo = new THREE.CylinderGeometry(1.75, 1.75, 0.4, 16);
    stripe1Geo.rotateX(Math.PI / 2);
    const stripeMat = new THREE.MeshPhongMaterial({
        color: 0x4361ee, emissive: 0x4361ee, emissiveIntensity: 0.4, specular: 0xffffff, shininess: 60
    });
    const stripe1 = new THREE.Mesh(stripe1Geo, stripeMat);
    stripe1.position.z = 1.5;
    rocketGroup.add(stripe1);

    const stripe2 = new THREE.Mesh(stripe1Geo.clone(), stripeMat.clone());
    stripe2.position.z = -0.5;
    rocketGroup.add(stripe2);

    const winGeo = new THREE.SphereGeometry(0.55, 16, 16);
    const winMat = new THREE.MeshPhongMaterial({
        color: 0x88aaff, emissive: 0x4488ff, emissiveIntensity: 0.8,
        specular: 0xffffff, shininess: 200, transparent: true, opacity: 0.9
    });
    const win = new THREE.Mesh(winGeo, winMat);
    win.position.set(0, 1.15, 3.2);
    rocketGroup.add(win);

    const winRim = new THREE.Mesh(
        new THREE.TorusGeometry(0.6, 0.08, 8, 24),
        new THREE.MeshPhongMaterial({ color: 0x8899cc, specular: 0xffffff, shininess: 80 })
    );
    winRim.position.copy(win.position);
    winRim.rotation.y = Math.PI / 2;
    rocketGroup.add(winRim);

    const nozzleGeo = new THREE.CylinderGeometry(0.9, 1.5, 2.5, 16);
    nozzleGeo.rotateX(Math.PI / 2);
    const nozzleMat = new THREE.MeshPhongMaterial({
        color: 0x555566, specular: 0x888899, shininess: 60, emissive: 0x111111, emissiveIntensity: 0.1
    });
    const nozzle = new THREE.Mesh(nozzleGeo, nozzleMat);
    nozzle.position.z = -4.8;
    rocketGroup.add(nozzle);

    const bellGeo = new THREE.CylinderGeometry(1.5, 1.8, 0.6, 16, 1, true);
    bellGeo.rotateX(Math.PI / 2);
    const bellMat = new THREE.MeshPhongMaterial({
        color: 0x444455, specular: 0x666677, shininess: 40, side: THREE.DoubleSide
    });
    const bell = new THREE.Mesh(bellGeo, bellMat);
    bell.position.z = -6.1;
    rocketGroup.add(bell);

    for (let i = 0; i < 4; i++) {
        const angle = (Math.PI * 2 / 4) * i + Math.PI / 4;
        const finGroup = new THREE.Group();
        const finGeo = new THREE.BoxGeometry(0.15, 2.8, 3.2);
        const finMat = new THREE.MeshPhongMaterial({
            color: 0x7788cc, specular: 0x8899ff, shininess: 60, emissive: 0x222244, emissiveIntensity: 0.1
        });
        const fin = new THREE.Mesh(finGeo, finMat);
        fin.position.y = 0.5;
        finGroup.add(fin);

        const finTipGeo = new THREE.BoxGeometry(0.15, 0.4, 1.2);
        const finTipMat = new THREE.MeshPhongMaterial({ color: 0x4361ee, emissive: 0x4361ee, emissiveIntensity: 0.3 });
        const finTip = new THREE.Mesh(finTipGeo, finTipMat);
        finTip.position.set(0, 2.1, -0.8);
        finGroup.add(finTip);

        finGroup.rotation.z = angle;
        finGroup.position.z = -3.5;
        finGroup.position.x = Math.cos(angle) * 1.6;
        finGroup.position.y = Math.sin(angle) * 1.6;
        rocketGroup.add(finGroup);
    }

    const engineLight = new THREE.PointLight(0xff6600, 0, 25);
    engineLight.position.z = -7;
    rocketGroup.add(engineLight);
    rocketGroup.userData.engineLight = engineLight;

    const windowLight = new THREE.PointLight(0x4488ff, 0.4, 8);
    windowLight.position.copy(win.position);
    rocketGroup.add(windowLight);

    rocketGroup.position.copy(rocketState.pos);
    scene.add(rocketGroup);
}

function createParticleSystems() {
    const fireGeo = new THREE.BufferGeometry();
    firePositions = new Float32Array(MAX_FIRE * 3);
    fireColors = new Float32Array(MAX_FIRE * 3);
    fireSizes = new Float32Array(MAX_FIRE);
    fireGeo.setAttribute('position', new THREE.BufferAttribute(firePositions, 3));
    fireGeo.setAttribute('color', new THREE.BufferAttribute(fireColors, 3));
    fireGeo.setAttribute('size', new THREE.BufferAttribute(fireSizes, 1));
    fireSystem = new THREE.Points(fireGeo, new THREE.PointsMaterial({
        size: 1.5, vertexColors: true, transparent: true, opacity: 0.9,
        sizeAttenuation: true, blending: THREE.AdditiveBlending, depthWrite: false
    }));
    scene.add(fireSystem);

    const smokeGeo = new THREE.BufferGeometry();
    smokePositions = new Float32Array(MAX_SMOKE * 3);
    smokeSizes = new Float32Array(MAX_SMOKE);
    smokeAlphas = new Float32Array(MAX_SMOKE);
    smokeGeo.setAttribute('position', new THREE.BufferAttribute(smokePositions, 3));
    smokeGeo.setAttribute('size', new THREE.BufferAttribute(smokeSizes, 1));
    smokeSystem = new THREE.Points(smokeGeo, new THREE.PointsMaterial({
        color: 0x888899, size: 2, transparent: true, opacity: 0.25,
        sizeAttenuation: true, depthWrite: false
    }));
    scene.add(smokeSystem);
}

function setupInput() {
    window.addEventListener('keydown', e => {
        keys[e.code] = true;
        if (e.code === 'Space') { e.preventDefault(); if (nearPlanet && !panelOpen) openPanel(nearPlanet); }
        if (e.code === 'Escape' && panelOpen) closePanel();
    });
    window.addEventListener('keyup', e => { keys[e.code] = false; });
    document.getElementById('close-panel').addEventListener('click', closePanel);
    document.getElementById('launch-btn').addEventListener('click', closePanel);
    document.getElementById('content-overlay').addEventListener('click', e => { if (e.target === e.currentTarget) closePanel(); });
    document.getElementById('start-btn').addEventListener('click', () => {
        gameStarted = true;
        document.getElementById('intro-overlay').classList.add('hidden');
    });
}

function openPanel(planet) {
    panelOpen = true;
    explored.add(planet.id);
    document.getElementById('explored-count').textContent = explored.size;
    const expEl = document.getElementById(`label-exp-${planet.id}`);
    if (expEl) expEl.textContent = '✓ explored';
    document.getElementById('content-body').innerHTML = planet.content();
    document.getElementById('content-overlay').classList.remove('hidden');
    document.getElementById('landing-prompt').classList.add('hidden');
}

function closePanel() {
    panelOpen = false;
    document.getElementById('content-overlay').classList.add('hidden');
}

function updateRocket(dt) {
    if (panelOpen) return;

    let thrusting = false;
    if (keys['KeyW'] || keys['ArrowUp']) {
        const dir = new THREE.Vector3(0, 0, 1).applyAxisAngle(new THREE.Vector3(0, 1, 0), rocketState.yaw);
        rocketState.vel.addScaledVector(dir, THRUST_FORCE * dt);
        thrusting = true;
    }
    if (keys['KeyS'] || keys['ArrowDown']) rocketState.vel.multiplyScalar(0.94);

    let turning = 0;
    if (keys['KeyA'] || keys['ArrowLeft']) { rocketState.yaw += ROT_SPEED * dt; turning = 1; }
    if (keys['KeyD'] || keys['ArrowRight']) { rocketState.yaw -= ROT_SPEED * dt; turning = -1; }

    rocketState.roll += ((turning * 0.45) - rocketState.roll) * 5 * dt;
    rocketState.vel.multiplyScalar(FRICTION);

    const speed = rocketState.vel.length();
    if (speed > MAX_SPEED) rocketState.vel.multiplyScalar(MAX_SPEED / speed);
    rocketState.pos.addScaledVector(rocketState.vel, dt);

    const bound = 200;
    ['x', 'y', 'z'].forEach(a => {
        if (rocketState.pos[a] < -bound) { rocketState.pos[a] = -bound; rocketState.vel[a] *= -0.5; }
        if (rocketState.pos[a] > bound) { rocketState.pos[a] = bound; rocketState.vel[a] *= -0.5; }
    });

    rocketState.thrust = thrusting ? Math.min(1, rocketState.thrust + dt * 5) : Math.max(0, rocketState.thrust - dt * 3);
    rocketGroup.position.copy(rocketState.pos);
    rocketGroup.rotation.set(0, rocketState.yaw, rocketState.roll);
    rocketGroup.userData.engineLight.intensity = rocketState.thrust * 3;

    if (thrusting) {
        const backDir = new THREE.Vector3(0, 0, -1).applyAxisAngle(new THREE.Vector3(0, 1, 0), rocketState.yaw);
        for (let i = 0; i < 4; i++) {
            if (thrustParticles.length >= MAX_FIRE) break;
            const spread = new THREE.Vector3((Math.random() - 0.5) * 2.5, (Math.random() - 0.5) * 2.5, (Math.random() - 0.5) * 2.5);
            thrustParticles.push({
                pos: rocketState.pos.clone().addScaledVector(backDir, -6),
                vel: backDir.clone().multiplyScalar(-(40 + Math.random() * 60)).add(spread),
                life: 0.35 + Math.random() * 0.35, maxLife: 0.35 + Math.random() * 0.35
            });
        }
        if (smokeParticles.length < MAX_SMOKE && Math.random() < 0.5) {
            smokeParticles.push({
                pos: rocketState.pos.clone().addScaledVector(backDir, -7),
                vel: backDir.clone().multiplyScalar(-(10 + Math.random() * 20)).add(
                    new THREE.Vector3((Math.random() - 0.5) * 5, Math.random() * 3, (Math.random() - 0.5) * 5)
                ),
                life: 0.8 + Math.random() * 0.6, maxLife: 0.8 + Math.random() * 0.6
            });
        }
    }

    for (let i = thrustParticles.length - 1; i >= 0; i--) {
        const p = thrustParticles[i];
        p.pos.addScaledVector(p.vel, dt); p.vel.multiplyScalar(0.95); p.life -= dt;
        if (p.life <= 0) thrustParticles.splice(i, 1);
    }
    for (let i = smokeParticles.length - 1; i >= 0; i--) {
        const p = smokeParticles[i];
        p.pos.addScaledVector(p.vel, dt); p.vel.multiplyScalar(0.92); p.life -= dt;
        if (p.life <= 0) smokeParticles.splice(i, 1);
    }

    for (let i = 0; i < MAX_FIRE; i++) {
        if (i < thrustParticles.length) {
            const p = thrustParticles[i], t = p.life / p.maxLife;
            firePositions[i * 3] = p.pos.x; firePositions[i * 3 + 1] = p.pos.y; firePositions[i * 3 + 2] = p.pos.z;
            fireColors[i * 3] = 1; fireColors[i * 3 + 1] = 0.2 + t * 0.6; fireColors[i * 3 + 2] = t * 0.15;
            fireSizes[i] = t * 3;
        } else {
            firePositions[i * 3 + 1] = -9999; fireSizes[i] = 0;
        }
    }
    fireSystem.geometry.attributes.position.needsUpdate = true;
    fireSystem.geometry.attributes.color.needsUpdate = true;
    fireSystem.geometry.attributes.size.needsUpdate = true;

    for (let i = 0; i < MAX_SMOKE; i++) {
        if (i < smokeParticles.length) {
            const p = smokeParticles[i], t = p.life / p.maxLife;
            smokePositions[i * 3] = p.pos.x; smokePositions[i * 3 + 1] = p.pos.y; smokePositions[i * 3 + 2] = p.pos.z;
            smokeSizes[i] = (1 - t) * 4 + 1;
        } else {
            smokePositions[i * 3 + 1] = -9999; smokeSizes[i] = 0;
        }
    }
    smokeSystem.geometry.attributes.position.needsUpdate = true;
    smokeSystem.geometry.attributes.size.needsUpdate = true;

    nearPlanet = null;
    for (const po of planetObjects) {
        const dist = rocketState.pos.distanceTo(new THREE.Vector3(po.data.x, po.data.y, po.data.z));
        if (dist < po.data.radius + 25) { nearPlanet = po.data; break; }
    }

    const prompt = document.getElementById('landing-prompt');
    if (nearPlanet && !panelOpen) prompt.classList.remove('hidden');
    else prompt.classList.add('hidden');
}

function updateCamera() {
    const offset = new THREE.Vector3(0, 35, -50).applyAxisAngle(new THREE.Vector3(0, 1, 0), rocketState.yaw);
    camera.position.lerp(rocketState.pos.clone().add(offset), 0.06);
    camera.lookAt(rocketState.pos.clone().add(
        new THREE.Vector3(0, 5, 20).applyAxisAngle(new THREE.Vector3(0, 1, 0), rocketState.yaw)
    ));
}

function updatePlanets() {
    for (const po of planetObjects) {
        po.mesh.rotation.y += 0.003;
        const isNear = nearPlanet && nearPlanet.id === po.data.id;
        const s = isNear ? 1 + 0.02 * Math.sin(time * 4) : 1;
        po.mesh.scale.set(s, s, s);
    }
    for (const cm of cloudMeshes) cm.rotation.y += 0.001;
    if (dustSystem) dustSystem.rotation.y += 0.0002;
}

function updateLabels() {
    const tempV = new THREE.Vector3();
    for (const { el, data } of labelEls) {
        tempV.set(data.x, data.y + data.radius + 5, data.z).project(camera);
        if (tempV.z > 1) { el.style.opacity = '0'; continue; }
        el.style.left = ((tempV.x * 0.5 + 0.5) * W) + 'px';
        el.style.top = ((-tempV.y * 0.5 + 0.5) * H) + 'px';
        const dist = rocketState.pos.distanceTo(new THREE.Vector3(data.x, data.y, data.z));
        el.style.opacity = dist > 180 ? '0' : dist < 120 ? '1' : String(1 - (dist - 120) / 60);
    }
}

function drawMinimap() {
    const mW = 160, mH = 120;
    minimapCtx.clearRect(0, 0, mW, mH);
    minimapCtx.fillStyle = 'rgba(6,6,15,0.6)';
    minimapCtx.fillRect(0, 0, mW, mH);
    const s = 0.4, cx = mW / 2, cy = mH / 2;
    for (const po of planetObjects) {
        minimapCtx.beginPath();
        minimapCtx.arc(cx + po.data.x * s, cy + po.data.z * s, Math.max(3, po.data.radius * s * 0.5), 0, Math.PI * 2);
        minimapCtx.fillStyle = explored.has(po.data.id) ? po.data.cssColor : po.data.cssColor + '55';
        minimapCtx.fill();
    }
    const rx = cx + rocketState.pos.x * s, ry = cy + rocketState.pos.z * s;
    minimapCtx.beginPath(); minimapCtx.arc(rx, ry, 3, 0, Math.PI * 2);
    minimapCtx.fillStyle = '#fff'; minimapCtx.fill();
    const dl = 8;
    minimapCtx.beginPath(); minimapCtx.moveTo(rx, ry);
    minimapCtx.lineTo(rx + Math.sin(rocketState.yaw) * dl, ry + Math.cos(rocketState.yaw) * dl);
    minimapCtx.strokeStyle = 'rgba(255,255,255,0.6)'; minimapCtx.lineWidth = 1.5; minimapCtx.stroke();
}

let lastTime = performance.now();
function gameLoop(now) {
    const dt = Math.min((now - lastTime) / 1000, 0.05);
    lastTime = now; time += dt;

    if (gameStarted) {
        updateRocket(dt); updateCamera(); updatePlanets(); updateLabels(); drawMinimap();
    } else {
        camera.position.set(Math.sin(time * 0.15) * 100, 60 + Math.sin(time * 0.1) * 10, Math.cos(time * 0.15) * 100);
        camera.lookAt(0, 0, 0);
        for (const po of planetObjects) po.mesh.rotation.y += 0.002;
        for (const cm of cloudMeshes) cm.rotation.y += 0.001;
    }

    renderer.render(scene, camera);
    requestAnimationFrame(gameLoop);
}

init();
createStarField();
createPlanets();
createRocket();
createParticleSystems();
setupInput();
requestAnimationFrame(gameLoop);

})();
