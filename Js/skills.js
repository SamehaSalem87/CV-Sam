const skillsSection = document.getElementById('skills');

function revealSkills() {
  const triggerBottom = window.innerHeight * 0.85;
  const sectionTop = skillsSection.getBoundingClientRect().top;
  if(sectionTop < triggerBottom) {
    skillsSection.classList.add('visible');
  }
}

window.addEventListener('scroll', revealSkills);
window.addEventListener('load', revealSkills);
