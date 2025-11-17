/* --- Particle Animation --- */
const canvas = document.getElementById('dot-canvas');
const ctx = canvas.getContext('2d');
let particles;
const particleCount = window.innerWidth > 768 ? 80 : 40; // Performance: Reduce particles on mobile
const connectDistance = 120;
const particleSpeed = 0.3;
const particleColor = 'rgba(0, 123, 255, 0.5)';
const lineColor = 'rgba(0, 123, 255, 0.1)';

function initializeParticles() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    particles = [];
    for (let i = 0; i < particleCount; i++) {
        particles.push(createParticle(canvas.width, canvas.height));
    }
}

function createParticle(w, h) {
    return {
        x: Math.random() * w,
        y: Math.random() * h,
        vx: (Math.random() - 0.5) * particleSpeed,
        vy: (Math.random() - 0.5) * particleSpeed,
        radius: Math.random() * 1.5 + 1
    };
}

function drawParticles(w, h) {
    ctx.clearRect(0, 0, w, h);
    for (const p of particles) {
        ctx.beginPath();
        ctx.fillStyle = particleColor;
        ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
        ctx.fill();
    }
    for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
            const dist = Math.hypot(particles[i].x - particles[j].x, particles[i].y - particles[j].y);
            if (dist < connectDistance) {
                ctx.beginPath();
                ctx.strokeStyle = lineColor;
                ctx.lineWidth = 0.5;
                ctx.moveTo(particles[i].x, particles[i].y);
                ctx.lineTo(particles[j].x, particles[j].y);
                ctx.stroke();
            }
        }
    }
}

function updateParticles(w, h) {
    for (const p of particles) {
        p.x += p.vx;
        p.y += p.vy;
        if (p.x < 0 || p.x > w) p.vx *= -1;
        if (p.y < 0 || p.y > h) p.vy *= -1;
    }
}

function particleAnimationLoop() {
    const w = canvas.width;
    const h = canvas.height;
    updateParticles(w, h);
    drawParticles(w, h);
    requestAnimationFrame(particleAnimationLoop);
}

initializeParticles();
particleAnimationLoop();
window.addEventListener('resize', initializeParticles);


/* --- Preloader --- */
window.addEventListener('load', () => {
    const preloader = document.querySelector('.loader');
    preloader.classList.add('hidden');
});


/* --- Navbar Scroll Effect --- */
const navbarHeader = document.getElementById('navbar-header');
window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
        navbarHeader.style.backgroundColor = 'rgba(18, 18, 18, 0.8)';
        navbarHeader.style.backdropFilter = 'blur(8px)';
        navbarHeader.style.borderBottom = '1px solid rgba(255,255,255,0.05)';
    } else {
        navbarHeader.style.backgroundColor = 'transparent';
        navbarHeader.style.backdropFilter = 'none';
        navbarHeader.style.borderBottom = '1px solid rgba(255,255,255,0.0)';
    }
});


/* --- Mobile Menu --- */
const mobileMenuButton = document.getElementById('mobile-menu-button');
const mobileMenu = document.getElementById('mobile-menu');
let isMenuOpen = false;

mobileMenuButton.addEventListener('click', () => {
    isMenuOpen = !isMenuOpen;
    if (isMenuOpen) {
        mobileMenu.classList.remove('hidden');
        mobileMenuButton.innerHTML = `<svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path></svg>`;
    } else {
        mobileMenu.classList.add('hidden');
        mobileMenuButton.innerHTML = `<svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16m-7 6h7"></path></svg>`;
    }
});

mobileMenu.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
        isMenuOpen = false;
        mobileMenu.classList.add('hidden');
        mobileMenuButton.innerHTML = `<svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16m-7 6h7"></path></svg>`;
    });
});


/* --- Scroll Animations --- */
const elementsToAnimate = document.querySelectorAll('.project-card, .glass-panel, .text-gray-300 h2, .text-gray-300 p, .text-gray-300 h3, .text-gray-300 div, .text-gray-300 ul li, .testimonial-card, .stats-grid');
const scrollObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('animate-slide-up');
            scrollObserver.unobserve(entry.target);
        }
    });
}, { threshold: 0.1 });

elementsToAnimate.forEach(el => {
    scrollObserver.observe(el);
});


/* --- Custom Cursor (Desktop Only) --- */
if (window.innerWidth > 768) {
    const customCursor = document.createElement('div');
    customCursor.style.cssText = `
        position: fixed;
        width: 20px;
        height: 20px;
        border: 2px solid #007BFF;
        border-radius: 50%;
        pointer-events: none;
        transition: transform 0.2s ease;
        z-index: 9998;
        opacity: 0;
    `;
    document.body.appendChild(customCursor);
    document.addEventListener('mousemove', (e) => {
        customCursor.style.opacity = '0.5';
        customCursor.style.left = e.clientX - 10 + 'px';
        customCursor.style.top = e.clientY - 10 + 'px';
    });
    document.addEventListener('mouseout', () => {
        customCursor.style.opacity = '0';
    });
    document.querySelectorAll('a, button, .project-card, .testimonial-card, .glow-button').forEach(element => {
        element.addEventListener('mouseenter', () => {
            customCursor.style.transform = 'scale(1.5)';
        });
        element.addEventListener('mouseleave', () => {
            customCursor.style.transform = 'scale(1)';
        });
    });
}


/* --- Hero Typing Effect --- */
const typingElement = document.getElementById('typing-effect');
if (typingElement) {
    const typingTexts = [
        "Web & Mobile Developer.",
        "Crafting modern digital experiences.",
        "Mohammed Reffass."
    ];
    let textIndex = 0;
    let charIndex = 0;
    let isDeleting = false;
    const typingSpeed = 100;
    const deletingSpeed = 50;
    const delayBetweenTexts = 2000;

    function runTypingEffect() {
        const currentText = typingTexts[textIndex];
        let speed = typingSpeed;
        if (isDeleting) {
            typingElement.textContent = currentText.substring(0, charIndex - 1);
            charIndex--;
            speed = deletingSpeed;
        } else {
            typingElement.textContent = currentText.substring(0, charIndex + 1);
            charIndex++;
        }
        if (!isDeleting && charIndex === currentText.length) {
            speed = delayBetweenTexts;
            isDeleting = true;
        } else if (isDeleting && charIndex === 0) {
            isDeleting = false;
            textIndex = (textIndex + 1) % typingTexts.length;
            speed = 500;
        }
        setTimeout(runTypingEffect, speed);
    }
    setTimeout(runTypingEffect, 1000);
}


/* --- Active Nav Link on Scroll --- */
const navigationSections = document.querySelectorAll('section#about, section#offer, section#skills, section#education, section#projects, section#contact');
const desktopNavLinks = document.querySelectorAll('header nav a');
const mobileNavLinks = document.querySelectorAll('#mobile-menu a');
const navObserverOptions = {
    root: null,
    rootMargin: '0px',
    threshold: 0.4
};
const navigationObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const sectionId = entry.target.id;
            desktopNavLinks.forEach(link => {
                link.classList.remove('nav-active');
                if (link.getAttribute('href') === `#${sectionId}`) {
                    link.classList.add('nav-active');
                }
            });
            mobileNavLinks.forEach(link => {
                link.classList.remove('nav-active');
                if (link.getAttribute('href') === `#${sectionId}`) {
                    link.classList.add('nav-active');
                }
            });
        }
    });
}, navObserverOptions);

navigationSections.forEach(section => {
    navigationObserver.observe(section);
});


/* --- Contact Form Success --- */
const contactForm = document.getElementById('contact-form');
const formSuccess = document.getElementById('form-success');
const formNote = document.getElementById('form-note');

contactForm.addEventListener('submit', (e) => {
    e.preventDefault(); // Prevent actual form submission
    
    // In a real project, you would send the data here.
    
    // Show success message
    formSuccess.style.display = 'block';
    
    // Hide submit button and note
    contactForm.querySelector('button[type="submit"]').style.display = 'none';
    formNote.style.display = 'none';
});


/* --- Dynamic Project Loading --- */
document.addEventListener('DOMContentLoaded', () => {
    loadProjects();
});

async function loadProjects() {
    try {
        const response = await fetch('projects.json');
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        const projects = await response.json();
        
        const projectsGrid = document.getElementById('projects-grid');
        if (!projectsGrid) {
            console.error('Projects grid not found!');
            return;
        }

        projectsGrid.innerHTML = ''; 

        projects.forEach(project => {
            const tagsHtml = project.tags.map(tag => `<span class="tag">${tag}</span>`).join(' ');
            const projectCardHtml = `
            <div class="project-card">
                <img src="${project.imgSrc}" alt="${project.imgAlt}" class="w-full h-48 object-cover rounded-t-lg" loading="lazy">
                <div class="p-6">
                    <div class="flex space-x-2 mb-3">
                        ${tagsHtml}
                    </div>
                    <h3 class="text-2xl font-bold text-white mb-3">${project.title}</h3>
                    <p class="text-gray-400 mb-6">
                        ${project.description}
                    </p>
                    <div class="flex space-x-4">
                        <a href="${project.repoUrl}" target="_blank" class="project-link">View Case Study</a>
                        <a href="${project.liveUrl}" target="_blank" class="project-link-arrow">
                            Live Demo <span>&rarr;</span>
                        </a>
                    </div>
                </div>
            </div>
            `;
            projectsGrid.innerHTML += projectCardHtml;
        });

        // Re-initialize the scroll observer for the new cards
        const newProjectCards = document.querySelectorAll('#projects-grid .project-card');
        newProjectCards.forEach(card => {
            if (typeof scrollObserver !== 'undefined') {
                scrollObserver.observe(card); 
            }
        });

    } catch (error) {
        console.error('Could not fetch or load projects:', error);
        const projectsGrid = document.getElementById('projects-grid');
        if(projectsGrid) {
            projectsGrid.innerHTML = '<p class="text-center text-red-500 col-span-3">Could not load projects. Please check projects.json.</p>';
        }
    }
}