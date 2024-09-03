// LOADER 
// gsap.fromTo(
//     ".loader-page",
//     { opacity: 1 },
//     {
//       opacity: 0,
//       display: "none",
//       duration: 1.5,
//       delay: 3.5,
//     }
//   );
  
//   gsap.fromTo(
//     ".logo-name",
//     {
//       y: 50,
//       opacity: 0,
//     },
//     {
//       y: 0,
//       opacity: 1,
//       duration: 2,
//       delay: 0.5,
//     }
//   );
// LOADER 



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

sr.reveal('.hero-text', { delay: 200, origin: 'top' });
sr.reveal('.hero-image', { delay: 450, origin: 'bottom' });
sr.reveal('.icons', { delay: 500, origin: 'left' });
sr.reveal('.scroll-down', { delay: 500, origin: 'top' });



// const links = document.querySelectorAll('.navlist li a');
// links.forEach((link, index) => {
//     sr.reveal(link, { delay:300 * index, origin: 'top' });
// });





// window.addEventListener('scroll', function() {
//     var footer = document.getElementById('footer');
//     var scrollHeight = document.documentElement.scrollHeight;
//     var clientHeight = document.documentElement.clientHeight;
//     var scrollTop = document.documentElement.scrollTop || document.body.scrollTop;

//     if (scrollHeight - clientHeight <= scrollTop) {
//         footer.style.display = 'block';
//     } else {
//         footer.style.display = 'none';
//     }
// });

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






