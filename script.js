// ====== MODAL LOGIC ======
const rulesBtn = document.getElementById('rulesBtn');
const rulesModal = document.getElementById('rulesModal');
const closeModal = document.getElementById('closeModal');
const confirmModal = document.getElementById('confirmModal');

function openModal() {
    rulesModal.classList.add('active');
    document.body.style.overflow = 'hidden';
}

function closeModalFunc() {
    rulesModal.classList.remove('active');
    document.body.style.overflow = '';
}

// Open modal
rulesBtn.addEventListener('click', openModal);

// Close by X
closeModal.addEventListener('click', closeModalFunc);

// Close by confirm button
confirmModal.addEventListener('click', closeModalFunc);

// Close by clicking outside
rulesModal.addEventListener('click', (e) => {
    if (e.target === rulesModal) {
        closeModalFunc();
    }
});

// Close by Escape
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && rulesModal.classList.contains('active')) {
        closeModalFunc();
    }
});

// ====== DYNAMIC WHEAT FIELD ======
const wheatField = document.querySelector('.wheat-field');

function createWheatStem(position, delay, height) {
    const stem = document.createElement('div');
    stem.className = 'wheat-stem';
    stem.style.cssText = `
        position: absolute;
        bottom: 0;
        left: ${position}%;
        width: ${2 + Math.random() * 3}px;
        height: ${height}px;
        background: linear-gradient(to top, #8B6914, #D4A843, #F5D76E);
        border-radius: 2px;
        transform-origin: bottom center;
        animation: sway ${2 + Math.random() * 2}s ease-in-out infinite;
        animation-delay: ${delay}s;
        opacity: ${0.5 + Math.random() * 0.5};
    `;

    // Wheat head (the grain part at top)
    const head = document.createElement('div');
    head.style.cssText = `
        position: absolute;
        top: -${8 + Math.random() * 8}px;
        left: ${-4 + Math.random() * 4}px;
        width: ${8 + Math.random() * 10}px;
        height: ${10 + Math.random() * 12}px;
        background: radial-gradient(ellipse at 40% 30%, #F5D76E 10%, #D4A843 40%, #8B6914 80%, transparent 100%);
        border-radius: 50% 50% 50% 50% / 60% 60% 40% 40%;
        transform: rotate(${-15 + Math.random() * 30}deg);
    `;

    // Tiny hairs on wheat
    const hair = document.createElement('div');
    hair.style.cssText = `
        position: absolute;
        top: -${10 + Math.random() * 6}px;
        left: ${2 + Math.random() * 4}px;
        width: ${2 + Math.random() * 3}px;
        height: ${6 + Math.random() * 8}px;
        background: #F7DC6F;
        border-radius: 50%;
        transform: rotate(${10 + Math.random() * 20}deg);
        opacity: 0.6;
    `;

    stem.appendChild(head);
    stem.appendChild(hair);
    wheatField.appendChild(stem);
}

// Generate dense wheat field
function generateWheatField() {
    wheatField.innerHTML = '';
    // First row - taller wheat
    for (let i = 0; i < 40; i++) {
        const pos = (i / 40) * 100 + (Math.random() - 0.5) * 3;
        const delay = Math.random() * 3;
        const height = 140 + Math.random() * 100;
        createWheatStem(pos, delay, height);
    }
    // Second row - shorter wheat (in front)
    for (let i = 0; i < 25; i++) {
        const pos = 5 + (i / 25) * 90 + (Math.random() - 0.5) * 4;
        const delay = Math.random() * 2.5;
        const height = 90 + Math.random() * 60;
        createWheatStem(pos, delay, height);
    }
}

generateWheatField();

// ====== PARTICLE SYSTEM ======
const particlesContainer = document.getElementById('particles');

function createParticle() {
    const particle = document.createElement('div');
    const size = 2 + Math.random() * 4;
    const isFlower = Math.random() > 0.8;

    particle.style.cssText = `
        position: fixed;
        width: ${size}px;
        height: ${size}px;
        ${isFlower ? `
            background: none;
            font-size: ${8 + Math.random() * 6}px;
            content: '❀';
        ` : `
            background: ${['rgba(255,200,220,0.8)', 'rgba(200,180,255,0.7)', 'rgba(255,220,180,0.6)', 'rgba(180,220,255,0.5)'][Math.floor(Math.random() * 4)]};
            border-radius: 50%;
            box-shadow: 0 0 ${4 + Math.random() * 8}px ${['rgba(255,200,220,0.3)', 'rgba(200,180,255,0.3)', 'rgba(255,220,180,0.2)'][Math.floor(Math.random() * 3)]};
        `}
        pointer-events: none;
        z-index: 3;
        left: ${Math.random() * 100}vw;
        top: ${60 + Math.random() * 30}vh;
        opacity: 0;
    `;

    if (isFlower) {
        particle.textContent = '❀';
        particle.style.color = ['#fbc2eb', '#ffd700', '#ff9a9e', '#a18cd1'][Math.floor(Math.random() * 4)];
    }

    document.body.appendChild(particle);

    const xDrift = (Math.random() - 0.5) * 150;
    const yDrift = -(100 + Math.random() * 200);
    const duration = 4 + Math.random() * 6;

    particle.animate([
        { transform: 'translate(0, 0) scale(0)', opacity: 0 },
        { transform: `translate(${xDrift * 0.15}px, ${yDrift * 0.15}px) scale(${isFlower ? 1 : 1.2})`, opacity: 0.7, offset: 0.1 },
        { transform: `translate(${xDrift * 0.5}px, ${yDrift * 0.5}px) scale(${isFlower ? 0.9 : 1})`, opacity: 0.5, offset: 0.5 },
        { transform: `translate(${xDrift}px, ${yDrift}px) scale(0)`, opacity: 0, offset: 1 }
    ], {
        duration: duration * 1000,
        easing: 'ease-out',
        fill: 'forwards'
    });

    setTimeout(() => particle.remove(), duration * 1000 + 100);
}

// Generate particles periodically
setInterval(createParticle, 500);

// Initial burst
for (let i = 0; i < 15; i++) {
    setTimeout(createParticle, i * 100);
}

// ====== KEYFRAME FOR WHEAT SWAY (injected dynamically) ======
const swayStyle = document.createElement('style');
swayStyle.textContent = `
    @keyframes sway {
        0%, 100% { transform: rotate(-6deg); }
        50% { transform: rotate(6deg); }
    }
`;
document.head.appendChild(swayStyle);

// ====== CURSOR GLOW EFFECT ======
const cursorGlow = document.getElementById('cursorGlow');

if (window.innerWidth > 768) {
    cursorGlow.style.display = 'block';
    document.addEventListener('mousemove', (e) => {
        cursorGlow.style.left = e.clientX + 'px';
        cursorGlow.style.top = e.clientY + 'px';
    });
}

// ====== BUTTON RIPPLE EFFECT ======
document.querySelectorAll('.btn').forEach(btn => {
    btn.addEventListener('click', function(e) {
        const ripple = document.createElement('div');
        const rect = this.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;

        ripple.style.cssText = `
            position: absolute;
            left: ${x}px;
            top: ${y}px;
            width: 100px;
            height: 100px;
            background: radial-gradient(circle, rgba(255,255,255,0.3) 0%, transparent 70%);
            border-radius: 50%;
            transform: translate(-50%, -50%) scale(0);
            pointer-events: none;
            z-index: 2;
        `;

        this.appendChild(ripple);

        ripple.animate([
            { transform: 'translate(-50%, -50%) scale(0)', opacity: 1 },
            { transform: 'translate(-50%, -50%) scale(4)', opacity: 0 }
        ], {
            duration: 600,
            easing: 'ease-out',
            fill: 'forwards'
        });

        setTimeout(() => ripple.remove(), 700);
    });
});

// ====== SMOOTH SCROLL FOR MODAL ======
const modal = document.querySelector('.modal');
modal.addEventListener('wheel', (e) => {
    e.stopPropagation();
});

// ====== CONSOLE ART ======
console.log('%c╔══════════════════════════════════════╗', 'color: #a18cd1');
console.log('%c║                                      ║', 'color: #a18cd1');
console.log('%c║   🇪🇬[✧ K.N.H ✧ MARTHA ✧]🇸🇾   ║', 'color: #fbc2eb; font-size: 16px; font-weight: bold;');
console.log('%c║       ✦ مجتمع أوتاكو الأنمي ✦        ║', 'color: #c8b0e8; font-size: 13px;');
console.log('%c║                                      ║', 'color: #a18cd1');
console.log('%c╚══════════════════════════════════════╝', 'color: #a18cd1');
console.log('%c🔥 تم تحميل الموقع بنجاح | استمتع! 🔥', 'color: #ff9a9e; font-size: 14px; font-weight: bold;');

// ====== PREVENT RIGHT CLICK (optional, for security) ======
// document.addEventListener('contextmenu', e => e.preventDefault());