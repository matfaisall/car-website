/* ===SHOW MENU === */
const navMenu = document.getElementById('nav-menu'),
      navToggle = document.getElementById('nav-toggle'),
      navClose = document.getElementById('nav-close')

// MENU SHOW
if(navToggle) {
   navToggle.addEventListener('click', () => {
      navMenu.classList.add('show-menu');
   });
}

// MENU HIDDEN
if(navClose) {
   navClose.addEventListener('click', () => {
      navMenu.classList.remove('show-menu');
   });
}

/* === REMOVE MENU MOBILE === */
const navLink = document.querySelectorAll('.nav__link');

function linkAction() {
   const navMenu = document.getElementById('nav-menu');
   // when we click on each nav__link, we remove the show-menu class
   navMenu.classList.remove('show-menu');
}

navLink.forEach(n => n.addEventListener('click', linkAction));

/* === CHANGE BACKGROUND HEADER === */
function scrollHeader() {
   const header = document.getElementById('header');
   // when the scroll is greater than 50 vw height, add the scroll-hader class to the header tag
   if(this.scrollY >= 50) {
      header.classList.add('scroll-header'); 
   } else {
      header.classList.remove('scroll-header');
   }
}
window.addEventListener('scroll', scrollHeader);

/* === POPULAR SWIPER === */
let swiper = new Swiper(".popular__container", {
   loop: true,
   spaceBetween: 24,
   slidesPerView: 'auto',
   pagination: {
     el: ".swiper-pagination",
     dynamicBullets: true,
   },
   breakpoints: {
      768: {
        slidesPerView: 3,
      },
      1024: {
        spaceBetween: 48,
      },
   },
});


/* === MIXITUP FILTER FEATURED === */
let mixer = mixitup('.featured__content', {
   selectors: {
       target: '.featured__card'
   },
   animation: {
       duration: 300
   }
});

/* Link active featured */ 
const linkFeatured = document.querySelectorAll('.featured__item');

function activeFeatured() {
   linkFeatured.forEach(l => l.classList.remove('active-featured'));
   this.classList.add('active-featured');
}

linkFeatured.forEach(l => l.addEventListener('click', activeFeatured));

/*=============== SHOW SCROLL UP ===============*/ 


/*=============== SCROLL SECTIONS ACTIVE LINK ===============*/


/*=============== SCROLL REVEAL ANIMATION ===============*/
