let menu = document.querySelector('#menu-bars');
let navbar = document.querySelector('.navbar');
console.log(menu);

menu.onclick = () => {
   const toggel =  menu.classList.toggle('fa-times');
    const active = navbar.classList.toggle('active');
}

document.querySelector("#search-icon").onclick = () => {
  document.querySelector("#search-form").classList.toggle("active");
}

document.querySelector("#close").onclick = () => {
  document.querySelector("#search-form").classList.remove("active");
}

let section = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header .navbar a');


 window.onscroll = () =>{

    menu.classList.remove('fa-times');
    navbar.classList.remove('active');

    section.forEach(sec =>{

    let top = window.scroLLY;
    let heaight = sec.offsetHeight;
    let offset = sec.offsetTop - 150;
    let id = sec.getAttribute('id');

    if(top => offset && top < offset + height){
      navLinks.foeEach(links =>{
        links/classList.remove('active');
        document.querySelector('header .navbar a[href*='+id+']').classList.add('active');


      });
    };

    });

 }

var swiper = new Swiper(".home-slider", {
    spaceBetween: 30,
    centeredSlides: true,
    autoplay: {
      delay: 7500,
      disableOnInteraction: false,
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    loop:true
  });
  
  var swiper = new Swiper(".review-slider", {
    spaceBetween: 30,
    centeredSlides: true,
    autoplay: {
      delay: 7500,
      disableOnInteraction: false,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    loop:true
  });

  var swiper = new Swiper(".review-slider", {
    spaceBetween: 20,
    centeredSlides: true,
    autoplay: {
      delay: 7500,
      disableOnInteraction: false,
    },
lopp:true,
breakpointes:{
  0:{
     dlidesperView: 1,
  },
  640: {
    slidesperView: 2,
  },
  768: {
    slidesperView: 2,
  },
  1024: {
    slidesperView:3,
  },
},
  });
// function loader(){
//   document.querySelector('.loader-container').classList.add(fade-out)
// }

// function Fadeout(){
//   setInterval(loader, 3000);
// }
// window.onload = fadeOut;