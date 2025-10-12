const projectsSection = document.getElementById('projects');

function revealProjects() {
  const triggerBottom = window.innerHeight * 0.85;
  const sectionTop = projectsSection.getBoundingClientRect().top;
  if(sectionTop < triggerBottom) {
    projectsSection.classList.add('visible');
  }
}

window.addEventListener('scroll', revealProjects);
window.addEventListener('load', revealProjects);
