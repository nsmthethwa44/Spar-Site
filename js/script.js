 //  Initialize Swiper 
// home slider
var swiper = new Swiper(".mySwiper", {
    spaceBetween: 30,
    centeredSlides: true,
    autoplay: {
      delay: 3000,
      disableOnInteraction: false,
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    // navigation: {
    //   nextEl: ".swiper-button-next",
    //   prevEl: ".swiper-button-prev",
    // },
  });
  
  // new featured coming soon slide 
var swiper = new Swiper(".mySlide", {
    slidesPerView: 10,
    spaceBetween: 10,
    slidesPerGroup: 1,
    autoplay: {
      delay: 5000,
      disableOnInteraction: false,
    },
    loop: true,
    loopFillGroupWithBlank: true,
    // pagination: {
    //   el: ".swiper-pagination",
    //   clickable: true,
    // },
  //   navigation: {
  //     nextEl: ".swiper-button-next",
  //     prevEl: ".swiper-button-prev",
  // },
  breakpoints: {
  
  200: {
  slidesPerView: 2,
  },
  
  567: {
  slidesPerView: 3,
  },
  992: {
  slidesPerView: 6,
  },
  1000: {
  slidesPerView: 10,
  },
  },
  });


  // declare all needed variables 
let header = document.querySelector(".header");
let navbar = document.querySelector(".navbar");
let menuBox = document.querySelector(".menuBox  .fa-solid");
let goTop = document.querySelector(".goTop");
let navLink = document.querySelectorAll(".navbar .nav li a")
let  categories = document.querySelector(" .categories");
let  categoriesList = document.querySelector(" .categories .list");

menuBox.onclick = () =>{
  menuBox.classList.toggle("fa-xmark");
  navbar.classList.toggle("active")
  categoriesList.classList.remove("active")
}

// toggle categories
categories.onclick = () =>{
  categoriesList.classList.toggle("active")
}

window.onscroll = () =>{
  if(window.scrollY > 2){
    goTop.classList.add('active');
    menuBox.classList.remove("fa-xmark");
    navbar.classList.remove("active");
    categoriesList.classList.remove("active");
  }else{
    goTop.classList.remove('active');
  }
}

  // when navbar link is click set it active 
  Array.from(navLink).forEach((item) => (
    item.onclick = (e) => { 
      let currentLink = document.querySelector(".navbar .nav li a.active");
      currentLink.classList.remove("active");
      e.target.classList.add("active");
      navbar.classList.remove("active");
      menuBox.classList.remove("fa-xmark");
      categoriesList.classList.remove("active");
    }
  ));
