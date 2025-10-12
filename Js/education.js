const educationSection = document.getElementById('education');

function revealEducation() {
  const triggerBottom = window.innerHeight * 0.85;
  const sectionTop = educationSection.getBoundingClientRect().top;
  if(sectionTop < triggerBottom) {
    educationSection.classList.add('visible');
  }
}

window.addEventListener('scroll', revealEducation);
window.addEventListener('load', revealEducation);
