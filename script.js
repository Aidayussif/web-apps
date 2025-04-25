const navlinks = document.querySelectorAll(".nav-menu .nav-link");
const menuOpenbutton = document.querySelector("#menu-open-button");


const menuClosebutton = document.querySelector("#menu-close-button");
menuOpenbutton.addEventListener("click", () => {
    document.body.classList.toggle("show-mobile-menu");
});

menuClosebutton.addEventListener("click", () => menuOpenbutton.click ());


navlinks.forEach(link => {
  link.addEventListener("click", () =>menuOpenbutton.click());
});

const swiper = new Swiper('.slider-wrapper', {
    
    loop: true,
    grabCursor: true,
    spaceBetween: 2 ,
    slidesPerview: 2,
    
  
    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
      dynamicBullets: true,
    },
  
    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },

  breakpoints: {
    0: {
      slidesPerview:1
    },
    768: {
     slidesPerview:2
  },
  1024: {
    slidesPerview:3
},
  }
  
  
  });


