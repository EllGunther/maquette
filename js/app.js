let lettre = document.getElementById('lettre');
let alpha = [
  "Ac",
  "Buick",
  "Cadillac",
  "Chevrolet",
  "Chrysler",
  "Dodge",
  "Ram",
  "Trucks",
  "Ford",
  "Shelby",
  "GM",
  "Hummer",
  "Lincoln",
  "Toyota",
  "Tundra",
  "NissanArmada",
  "NissanPathfinder",
  "infiniti",
  "QX60",
  "InfinitiQX80",
  "NissanTitan"
];
window.addEventListener('load', () => {
    for (i in alpha) {
        let letr = document.createElement('div');
      letr.setAttribute('class', 'letr');
      letr.style.backgroundImage = `url('./images/${alpha[i]}.png')`
        letr.textContent = alpha[i];
        lettre.appendChild(letr);
    }
});
let menu = document.getElementById('menu');
let nv = document.getElementById('nave');
let cmpt = 0;
nv.addEventListener('click', () => {
  if (cmpt % 2 == 0) {
      barre2.style.left = -2 + 'vh';
      barre1.style.left = 1 + 'vh';
      barre3.style.left = 1 + 'vh';
  }
  else {
      barre2.style.left = 0 + 'vh';
      barre1.style.left = 0 + 'vh';
      barre3.style.left = 0 + 'vh';   
  }
    cmpt++
    if (cmpt % 2 != 0) {
        menu.style.right = '-0%';
    }
    if(cmpt % 2 == 0) {
        menu.style.right = '-100%';
    }
});

function myPlugin({ swiper, extendParams, on }) {
      extendParams({
        debugger: false,
      });

      on('init', () => {
        if (!swiper.params.debugger) return;
        //console.log('init');
      });
      on('click', (swiper, e) => {
        if (!swiper.params.debugger) return;
        //console.log('click');
      });
      on('tap', (swiper, e) => {
        if (!swiper.params.debugger) return;
        //console.log('tap');
      });
      on('doubleTap', (swiper, e) => {
        if (!swiper.params.debugger) return;
        //console.log('doubleTap');
      });
      on('sliderMove', (swiper, e) => {
        if (!swiper.params.debugger) return;
        //console.log('sliderMove');
      });
      on('slideChange', () => {
        if (!swiper.params.debugger) return;
        //console.log('slideChange', swiper.previousIndex, '->', swiper.activeIndex);
      });
      on('slideChangeTransitionStart', () => {
        if (!swiper.params.debugger) return;
        //console.log('slideChangeTransitionStart');
      });
      on('slideChangeTransitionEnd', () => {
        if (!swiper.params.debugger) return;
        //console.log('slideChangeTransitionEnd');
      });
      on('transitionStart', () => {
        if (!swiper.params.debugger) return;
        //console.log('transitionStart');
      });
      on('transitionEnd', () => {
        if (!swiper.params.debugger) return;
        //console.log('transitionEnd');
      });
      on('fromEdge', () => {
        if (!swiper.params.debugger) return;
        //console.log('fromEdge');
      });
      on('reachBeginning', () => {
        if (!swiper.params.debugger) return;
        //console.log('reachBeginning');
      });
      on('reachEnd', () => {
        if (!swiper.params.debugger) return;
        //console.log('reachEnd');
      });
}
    
// Init Swiper
var swiper = new Swiper('.swiper', {
        autoplay: {
          delay: 5000,
          disableOnInteraction: false,
        },
// Install Plugin To Swiper
modules: [myPlugin],
pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
},
// Enable debugger
debugger: true,
});
