document.addEventListener("DOMContentLoaded", function () {
  darkMode();
  eventListeners();
  navegacionFija();
  scrollNav();
  swiper();

});

// 3º prueba de proyecto web
function swiper() {
  const swiper = new Swiper('.swiper', {
    // Optional parameters
    direction: "horizontal",
    loop: true,
    allowTouchMove: true,
    effect: "fade",
    autoplay: {
      delay: 2000,
      pauseOnMouseEnter: true,
      disableOnInteraction: false,
    },

    // If we need pagination
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
      dynamicBullets: true,
    },

    // Navigation arrows
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },

    // // And if we need scrollbar
    // scrollbar: {
    //   el: ".swiper-scrollbar",
    //   draggable: true,
    // },
  });
}

// Boton DARK-MODE
function darkMode() {
  const prefiereDarkMode = window.matchMedia("(prefers-color-scheme: dark)");
  if (prefiereDarkMode.matches) {
    document.body.classList.add("dark-mode");
  } else {
    document.body.classList.remove("dark-mode");
  }

  prefiereDarkMode.addEventListener('change', function(){
    if(prefiereDarkMode.matches) {
      document.body.classList.add("dark-mode");
    } else{
      document.body.classList.remove("dark-mode");
    }
  });

  const botonDarkMode = document.querySelector(".dark-mode-boton");
  botonDarkMode.addEventListener("click", function () {
    document.body.classList.toggle("dark-mode");
  });
}

// Menu Hamburgesita
function eventListeners() {
  const mobileMenu = document.querySelector(".switch");
  mobileMenu.addEventListener("click", navegacionResponsive);
}

function navegacionResponsive() {
  const navegacion = document.querySelector(".navegacion");
  navegacion.classList.toggle("mostrar");
}

// Header Fijo
function navegacionFija() {
  const barra = document.querySelector(".header");
  const resumenFlor = document.querySelector(".resumen-flor");
  const body = document.querySelector("body");

  window.addEventListener("scroll", function () {
    if (resumenFlor.getBoundingClientRect().bottom < 0) {
      barra.classList.add("fijo");
      body.classList.add("body-scroll");
    } else {
      barra.classList.remove("fijo");
      body.classList.remove("body-scroll");
    }
  });
}

// Scroll Header
function scrollNav() {
  const enlaces = document.querySelectorAll(".boton-nav");
  enlaces.forEach((enlace) => {
    enlace.addEventListener("click", function (e) {
      e.preventDefault();

      const seccionScroll = e.target.attributes.href.value;
      const seccion = document.querySelector(seccionScroll);
      seccion.scrollIntoView({ behavior: "smooth" });
    });
  });
}

// Titulo de pagina web
let docTitle = document.title;
window.addEventListener("blur", () => {
  document.title = "Que tengas lindo día :)";
});

window.addEventListener("focus", () => {
  document.title = docTitle;
});


// Prueba  Proyecto rotacion tarjeta
// const cartas = document.querySelectorAll('.carta');

// cartas.forEach(carta => {
//   carta.addEventListener('mouseenter', () => {
//     carta.classList.add('hover');
//   });

//   carta.addEventListener('mouseleave', () => {
//     carta.classList.remove('hover');
//   });
// });




