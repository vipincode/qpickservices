// ===================================================================
//                    SWIPER CAROUSEL PLUGINS 
// ===================================================================

import Swiper from 'swiper/bundle';
const swiper1 = new Swiper('.swiper1', {
    speed: 600,
    autoplay: {
        delay: 2500,
        disableOnInteraction: false,
    },
    pagination: {
        el: '.swiper-pagination1',
        clickable: true,
        dynamicBullets: true,
    }
});

const swiper2 = new Swiper('.swiper2', {
    slidesPerView: 2,
    spaceBetween: 20,
    slidesPerGroup: 2,
    loop: true,
    loopFillGroupWithBlank: true,
    navigation: {
        nextEl: '.swiper-button-next2',
        prevEl: '.swiper-button-prev2',
    },
    pagination: {
        el: '.swiper-pagination2',
        clickable: true,
    },
    breakpoints: {
        576: {
            slidesPerView: 3,
            spaceBetween: 20,
        },
        768: {
            slidesPerView: 4,
            spaceBetween: 30,
        },
        1024: {
            slidesPerView: 5,
            spaceBetween: 20,
        },
        1280: {
            slidesPerView: 7,
            spaceBetween: 25,
        },
        1920: {
            slidesPerView: 10,
            spaceBetween: 25,
        },
    }
});

const swiper3 = new Swiper('.swiper3', {
    slidesPerView: 1,
    spaceBetween: 10,
    slidesPerGroup: 1,

    navigation: {
        nextEl: '.swiper-button-next3',
        prevEl: '.swiper-button-prev3',
    },
    pagination: {
        el: '.swiper-pagination3',
        clickable: true,
    },
    breakpoints: {
        576: {
            slidesPerView: 1,
            spaceBetween: 10,
            slidesPerGroup: 1,
        },
        768: {
            slidesPerView: 2,
            spaceBetween: 20,
            slidesPerGroup: 2,
        },
        1024: {
            slidesPerView: 2,
            spaceBetween: 40,
            slidesPerGroup: 2,
        },
        1280: {
            slidesPerView: 3,
            spaceBetween: 30,
            slidesPerGroup: 2,
        },
    }
});

const swiper4 = new Swiper('.swiper4', {
    slidesPerView: 1,
    cssMode: true,
    autoplay: {
        delay: 2500,
        disableOnInteraction: false,
    },
    navigation: {
        nextEl: '.swiper-button-next4',
        prevEl: '.swiper-button-prev4',
    },
    pagination: {
        el: '.swiper-pagination4'
    },
    mousewheel: true,
    keyboard: true,
});

// ===================================================================
//                     AUTO COMPLETE SEARCH FORM 
// ===================================================================

import $ from "jquery";
import 'jquery-ui/ui/widgets/autocomplete';

var availableTags = [
    "Adhar card",
    "Money Transfer",
    "ITR Filling",
    "GST Filling",
    "Rashan Card",
    "Food Licenec",
    "Vehicle Registration",
    "Electricity Bill",
    "PAN Card",
    "GTM Portal Registartion",
    "Shop Registration",
    "Nidhi Company",
    "Rera Regsitration",
    "Cast Certificate",
    "Income Certificate",
    "Living Certifcate",
    "Insurance",
    "Online Education",
    "DTH Recharge",
    "Prepaid/Postpaid",
    "Railway Ticket",
    "Broadband"
  ];
  $( "#tags" ).autocomplete({
    source: availableTags,
    messages: {
        noResults: 'no results',
        results: function(amount) {
            return amount + 'results.'
        }
    }
  });


// ===================================================================
//                     BACK TO TOP 
// ===================================================================

import anime from 'animejs/lib/anime.es.js';

const btnTop = document.getElementById('top');
const scrollElement = window.document.scrollingElement || window.document.body || window.document.documentElement;

window.onscroll = () => {
    if(document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        btnTop.style.display = 'block';
    } else {
        btnTop.style.display = 'none';
    }
};

btnTop.addEventListener('click', () => {
  anime({
    targets: scrollElement,
    scrollTop: 0,
    duration: 500,
    easing: 'easeInOutQuad',
  });
});


