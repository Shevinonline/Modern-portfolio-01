let menu = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');
 
  window.ondeviceorientation = detectIPadOrientation;
function detectIPadOrientation () 
{
    if ( orientation == 0 || orientation == 180 ){
        alert ('Projects Section In Not available to Mobile Devices Please use your desktop mode OR Visit to https://Shevin.me/projects/'); 
    }
}
 

menu.onclick = () => {
	menu.classList.toggle('bx-x');
	navbar.classList.toggle('open');
}

var swiper = new Swiper(".slide-content", {
    slidesPerView: 3,
    spaceBetween: 25,
    loop: true,
    centerSlide: 'true',
    fade: 'true',
    grabCursor: 'true',
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
      dynamicBullets: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },

    breakpoints:{
        0: {
            slidesPerView: 1,
        },
        520: {
            slidesPerView: 2,
        },
        950: {
            slidesPerView: 3,
        },
    },
  });