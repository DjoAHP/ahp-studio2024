

// LOADER 
gsap.fromTo(
    ".loader-page",
    { opacity: 1 },
    {
      opacity: 0,
      display: "none",
      duration: 0.7,
      delay: 1,
    }
  );
  
  gsap.fromTo(
    ".logo-name",
    {
      y: 50,
      opacity: 0,
    },
    {
      y: 0,
      opacity: 1,
      duration: 1,
      delay: 0.3,
    }
  );
// LOADER FIN 



// SECTION 1
let menu = document.querySelector('#menu-icon');
let navlist = document.querySelector('.navlist');

menu.onclick = () => {
    menu.classList.toggle('bx-x');
    navlist.classList.toggle('open');
};

const sr = ScrollReveal({
    distance: '65px',
    duration: 2600,
    delay: 450,
    reset: true
});

sr.reveal('.hero-text', { delay: 800, origin: 'top' });
sr.reveal('.hero-image', { delay: 1000, origin: 'bottom' });
sr.reveal('.icons', { delay: 1500, origin: 'left' });
sr.reveal('.scroll-down', { delay: 1500, origin: 'top' });
// SECTION 1 FIN




// SCROLL FLECHE
// Sélection de l'élément de la flèche de défilement
const arrowDown = document.querySelector('.scroll-down');

// Ajout d'un gestionnaire d'événements au clic sur la flèche
arrowDown.addEventListener('click', () => {
    // Faire défiler la page de 300vh vers le bas en douceur
    window.scrollBy({
        top: window.innerHeight * 1, // 100vh = 791px Taille du navigateur
        behavior: 'smooth'
    });
});
// SCROLL FLECHE FIN







