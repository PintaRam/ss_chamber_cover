//step 1: get DOM
let nextDom = document.getElementById('next');
let prevDom = document.getElementById('prev');

let carouselDom = document.querySelector('.carousel');
let SliderDom = carouselDom.querySelector('.carousel .list');
let thumbnailBorderDom = document.querySelector('.carousel .thumbnail');
let thumbnailItemsDom = thumbnailBorderDom.querySelectorAll('.item');
let timeDom = document.querySelector('.carousel .time');

thumbnailBorderDom.appendChild(thumbnailItemsDom[0]);
let timeRunning = 3000;
let timeAutoNext = 7000;

nextDom.onclick = function(){
    showSlider('next');    
}

prevDom.onclick = function(){
    showSlider('prev');    
}
let runTimeOut;
let runNextAuto = setTimeout(() => {
    next.click();
}, timeAutoNext)
function showSlider(type){
    let  SliderItemsDom = SliderDom.querySelectorAll('.carousel .list .item');
    let thumbnailItemsDom = document.querySelectorAll('.carousel .thumbnail .item');
    
    if(type === 'next'){
        SliderDom.appendChild(SliderItemsDom[0]);
        thumbnailBorderDom.appendChild(thumbnailItemsDom[0]);
        carouselDom.classList.add('next');
    }else{
        SliderDom.prepend(SliderItemsDom[SliderItemsDom.length - 1]);
        thumbnailBorderDom.prepend(thumbnailItemsDom[thumbnailItemsDom.length - 1]);
        carouselDom.classList.add('prev');
    }
    clearTimeout(runTimeOut);
    runTimeOut = setTimeout(() => {
        carouselDom.classList.remove('next');
        carouselDom.classList.remove('prev');
    }, timeRunning);

    clearTimeout(runNextAuto);
    runNextAuto = setTimeout(() => {
        next.click();
    }, timeAutoNext)
}

// script.js
function toggleMenu() {
    const nav = document.querySelector("nav");
    nav.classList.toggle("active");
}

// auto scrolling carousel
const track = document.querySelector('.carousel-track1');
const nextBtn = document.querySelector('.next-btn');
const prevBtn = document.querySelector('.prev-btn');
const cards = document.querySelectorAll('.product-card');

let currentPosition = 0;
let visibleCards = 3; // default for desktop

// Function to update number of visible cards and cardWidth
function updateCarouselSettings() {
    const width = window.innerWidth;
    if (width <= 480) visibleCards = 1;
    else if (width <= 768) visibleCards = 2;
    else visibleCards = 3;

    return cards[0].offsetWidth + 20; // card width + gap
}

// Function to update max scroll
function getMaxScroll(cardWidth) {
    return (cards.length - visibleCards) * cardWidth;
}

// Function to move carousel
function moveCarousel() {
    const cardWidth = updateCarouselSettings();
    const maxScroll = getMaxScroll(cardWidth);
    track.style.transform = `translateX(${currentPosition}px)`;
}

// Next button
nextBtn.addEventListener('click', () => {
    const cardWidth = updateCarouselSettings();
    const maxScroll = getMaxScroll(cardWidth);

    if (Math.abs(currentPosition) < maxScroll) {
        currentPosition -= cardWidth;
    } else {
        currentPosition = 0; // reset to start
    }
    moveCarousel();
});

// Prev button
prevBtn.addEventListener('click', () => {
    const cardWidth = updateCarouselSettings();
    const maxScroll = getMaxScroll(cardWidth);

    if (currentPosition < 0) {
        currentPosition += cardWidth;
    } else {
        currentPosition = -(maxScroll); // move to last
    }
    moveCarousel();
});

// Auto Scroll
let autoScroll = setInterval(() => {
    const cardWidth = updateCarouselSettings();
    const maxScroll = getMaxScroll(cardWidth);

    if (Math.abs(currentPosition) >= maxScroll) {
        currentPosition = 0;
    } else {
        currentPosition -= cardWidth;
    }
    moveCarousel();
}, 4000);

// Pause on hover
track.addEventListener('mouseenter', () => clearInterval(autoScroll));
track.addEventListener('mouseleave', () => {
    autoScroll = setInterval(() => {
        const cardWidth = updateCarouselSettings();
        const maxScroll = getMaxScroll(cardWidth);

        if (Math.abs(currentPosition) >= maxScroll) {
            currentPosition = 0;
        } else {
            currentPosition -= cardWidth;
        }
        moveCarousel();
    }, 4000);
});

// Update carousel on window resize
window.addEventListener('resize', () => {
    currentPosition = 0; // reset position
    moveCarousel();
});




function goToProductPage(button) {
    const card = button.closest('.product-card');
    
    const name = card.dataset.name;
    const image = card.dataset.image;
    const price = card.dataset.price;
    const mrp = card.dataset.mrp;
    const discount = card.dataset.discount;
    const delivery = card.dataset.delivery;

    const url = `HTML/productPage.html?name=${encodeURIComponent(name)}&image=${encodeURIComponent(image)}&price=${price}&mrp=${mrp}&discount=${encodeURIComponent(discount)}&delivery=${encodeURIComponent(delivery)}`;

    window.location.href = url;
}



