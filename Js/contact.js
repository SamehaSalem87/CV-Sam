const contactSection = document.getElementById('contact');

function revealContact() {
  const triggerBottom = window.innerHeight * 0.85;
  const sectionTop = contactSection.getBoundingClientRect().top;
  if(sectionTop < triggerBottom) {
    contactSection.classList.add('visible');
  }
}

window.addEventListener('scroll', revealContact);
window.addEventListener('load', revealContact);
