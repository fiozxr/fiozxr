// ============================================
// MOBILE PORTFOLIO — fiozxr
// Touch-optimized, smooth, brutalist
// ============================================

// Menu toggle
function toggleMenu() {
    const overlay = document.getElementById('menuOverlay');
    const btn = document.getElementById('menuBtn');
    overlay.classList.toggle('active');
    btn.classList.toggle('active');
}

function closeMenu() {
    const overlay = document.getElementById('menuOverlay');
    const btn = document.getElementById('menuBtn');
    overlay.classList.remove('active');
    btn.classList.remove('active');
}

// Project data
const projectData = {
    cryxr: {
        title: 'CryXR',
        desc: 'A multi-layered encryption and decryption tool implementing custom cipher stacking. Features dynamic key derivation, file & stream encryption, and configurable cipher pipelines for researchers and security professionals.',
        tags: ['Python', 'Cryptography', 'CLI', 'AES', 'RSA'],
        link: 'https://github.com/fiozxr/CryXR'
    },
    netrecon: {
        title: 'NetRecon',
        desc: 'LAN reconnaissance scanner for active host discovery, port mapping, and service fingerprinting. Supports ARP/ping host discovery, SYN/Connect port scanning, and banner grabbing for penetration testing reconnaissance.',
        tags: ['Python', 'Networking', 'Nmap', 'Reconnaissance'],
        link: 'https://github.com/fiozxr'
    },
    webvuln: {
        title: 'WebVuln',
        desc: 'Proof-of-concept web vulnerability scanner identifying XSS vectors, SQL injection points, and common security misconfigurations. Educational tool for understanding web attack surfaces and defensive coding practices.',
        tags: ['Python', 'Web Security', 'XSS', 'SQLi', 'POC'],
        link: 'https://github.com/fiozxr'
    }
};

// Modal
function openModal(projectKey) {
    const project = projectData[projectKey];
    if (!project) return;
    
    const modal = document.getElementById('mModal');
    const body = document.getElementById('mModalBody');
    
    body.innerHTML = `
        <h3 class="m-modal-title">${project.title}</h3>
        <div class="m-modal-meta">
            ${project.tags.map(tag => `<span class="m-modal-tag">${tag}</span>`).join('')}
        </div>
        <p class="m-modal-desc">${project.desc}</p>
        <a href="${project.link}" class="m-modal-link" target="_blank">
            <span>View on GitHub</span>
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/>
            </svg>
        </a>
    `;
    
    modal.classList.add('active');
    document.body.style.overflow = 'hidden';
}

function closeModal() {
    const modal = document.getElementById('mModal');
    modal.classList.remove('active');
    document.body.style.overflow = '';
}

// Close modal on swipe down
let touchStartY = 0;
document.addEventListener('touchstart', (e) => {
    touchStartY = e.touches[0].clientY;
});

document.addEventListener('touchend', (e) => {
    const touchEndY = e.changedTouches[0].clientY;
    const modal = document.getElementById('mModal');
    if (modal.classList.contains('active') && touchEndY - touchStartY > 100) {
        closeModal();
    }
});

// Console
console.log('%c◢◤ MOBILE ◢◤', 'font-size: 20px; color: #00ff88;');
console.log('%cfiozxr — PRETTY ALIVE', 'font-size: 12px; color: #888;');
