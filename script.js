// Smooth scroll for navigation links
document.querySelectorAll('a[href^="#"]').forEach(link => {
  link.addEventListener('click', function (e) {
    e.preventDefault();
    const section = document.querySelector(this.getAttribute('href'));
    section.scrollIntoView({ behavior: 'smooth' });
  });
});

// Portfolio Assistant Toggle
const assistant = document.getElementById('assistant');
const toggle = document.getElementById('assistant-toggle');
if (assistant && toggle) {
  toggle.addEventListener('click', () => {
    assistant.classList.toggle('active');
  });
}

// Typing Assistant Functions
function typeHTMLMessage(htmlContent, delay = 20) {
  const messageBox = document.getElementById("assistant-message");
  messageBox.innerHTML = "<p class='typing'></p>";
  const p = messageBox.querySelector("p.typing");

  let i = 0;
  function type() {
    if (i < htmlContent.length) {
      p.innerHTML += htmlContent[i];
      i++;
      setTimeout(type, delay);
    } else {
      p.classList.remove("typing");
    }
  }
  type();
}

function showProjects() {
  typeHTMLMessage("Olumide has built a <strong>Weather App</strong> and a <strong>To-Do List App</strong> using HTML, CSS, and JavaScript.");
}
function showSkills() {
  typeHTMLMessage("Skilled in <strong>HTML, CSS, JavaScript, Git, Python, React (beginner), Figma</strong>. Learning via Coursera, FreeCodeCamp.");
}
function showContact() {
  typeHTMLMessage("Email: <a href='mailto:olumide@example.com'>olumide@example.com</a><br>GitHub: <a href='https://github.com/olumide' target='_blank'>GitHub</a><br>LinkedIn: <a href='https://linkedin.com/in/olumide' target='_blank'>LinkedIn</a>");
}

// Mobile Menu Toggle
const menuToggle = document.getElementById('menuToggle');
const navLinks = document.getElementById('navLinks');
if (menuToggle && navLinks) {
  menuToggle.addEventListener('click', () => {
    navLinks.classList.toggle('active');
  });
}

// Back to Top
const backToTop = document.getElementById('backToTop');
window.addEventListener('scroll', () => {
  if (window.scrollY > 300) {
    backToTop.style.display = 'block';
  } else {
    backToTop.style.display = 'none';
  }
});
backToTop.addEventListener('click', () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
});

// Loader and fade-in
window.addEventListener('load', () => {
  const loader = document.getElementById('loader-wrapper');
  const body = document.body;
  loader.style.display = 'none';
  body.classList.remove('fade-in');
  body.classList.add('visible');
});

// Particles.js
particlesJS("particles-js", {
  "particles": {
    "number": { "value": 80, "density": { "enable": true, "value_area": 800 }},
    "color": { "value": "#000" },
    "shape": { "type": "circle" },
    "opacity": { "value": 0.5 },
    "size": { "value": 3, "random": true },
    "line_linked": {
      "enable": true,
      "distance": 150,
      "color": "#000",
      "opacity": 0.4,
      "width": 1
    },
    "move": { "enable": true, "speed": 2, "direction": "none", "out_mode": "out" }
  },
  "interactivity": {
    "detect_on": "canvas",
    "events": {
      "onhover": { "enable": true, "mode": "grab" },
      "onclick": { "enable": true, "mode": "push" }
    },
    "modes": {
      "grab": { "distance": 140, "line_linked": { "opacity": 1 } },
      "push": { "particles_nb": 4 }
    }
  },
  "retina_detect": true
});
