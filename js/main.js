// ========================================
// Navbar shrink on scroll
// ========================================

const navbar = document.getElementById('navbar');

window.addEventListener('scroll', () => {
  if (window.scrollY > 50) {
    navbar.classList.add('scrolled');
  } else {
    navbar.classList.remove('scrolled');
  }
});

// ========================================
// Mobile nav toggle
// ========================================

const navToggle = document.getElementById('navToggle');
const navLinks = document.getElementById('navLinks');

navToggle.addEventListener('click', () => {
  navToggle.classList.toggle('active');
  navLinks.classList.toggle('open');
});

// Close mobile nav when a link is clicked
navLinks.querySelectorAll('a').forEach(link => {
  link.addEventListener('click', () => {
    navToggle.classList.remove('active');
    navLinks.classList.remove('open');
  });
});

// ========================================
// Scroll reveal animations
// ========================================

const revealElements = document.querySelectorAll('.reveal');

const revealObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      revealObserver.unobserve(entry.target);
    }
  });
}, {
  threshold: 0.15,
  rootMargin: '0px 0px -40px 0px'
});

revealElements.forEach(el => revealObserver.observe(el));

// ========================================
// Hero floating particles
// ========================================

const hero = document.getElementById('hero');

function createParticle() {
  const particle = document.createElement('div');
  particle.classList.add('particle');

  const size = Math.random() * 4 + 2;
  const left = Math.random() * 100;
  const duration = Math.random() * 8 + 6;
  const delay = Math.random() * 4;

  particle.style.width = size + 'px';
  particle.style.height = size + 'px';
  particle.style.left = left + '%';
  particle.style.bottom = '-10px';
  particle.style.animationDuration = duration + 's';
  particle.style.animationDelay = delay + 's';

  // Vary particle colors between purple and blue
  const hue = Math.random() > 0.5 ? '270' : '220';
  particle.style.background = `hsla(${hue}, 80%, 70%, 0.15)`;

  hero.appendChild(particle);

  // Remove after animation completes
  setTimeout(() => {
    particle.remove();
  }, (duration + delay) * 1000);
}

// Create initial batch
for (let i = 0; i < 15; i++) {
  createParticle();
}

// Continue creating particles
setInterval(createParticle, 1500);

// ========================================
// Smooth scroll for nav links (fallback)
// ========================================

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      e.preventDefault();
      target.scrollIntoView({ behavior: 'smooth' });
    }
  });
});
