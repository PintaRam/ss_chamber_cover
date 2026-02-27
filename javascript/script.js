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

// ===================================
// MODERN NAVIGATION & HEADER EFFECTS
// ===================================

// Toggle Mobile Menu
function toggleMenu() {
    const nav = document.querySelector("nav");
    const body = document.body;
    nav.classList.toggle("active");

    // Prevent body scroll when menu is open
    if (nav.classList.contains("active")) {
        body.style.overflow = "hidden";
    } else {
        body.style.overflow = "auto";
    }
}

// Sticky Header Effect on Scroll
window.addEventListener('scroll', function() {
    const header = document.querySelector('header');
    if (window.scrollY > 50) {
        header.classList.add('scrolled');
    } else {
        header.classList.remove('scrolled');
    }
});

// Close mobile menu when clicking outside
document.addEventListener('click', function(event) {
    const nav = document.querySelector("nav");
    const hamburger = document.querySelector(".hamburger");

    if (nav.classList.contains("active") &&
        !nav.contains(event.target) &&
        !hamburger.contains(event.target)) {
        toggleMenu();
    }
});

// Smooth scroll for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

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

// ===================================
// MODERN UI ENHANCEMENTS
// ===================================

// Add loading animation
window.addEventListener('load', function() {
    document.body.classList.add('loaded');
});

// Lazy loading for images
if ('IntersectionObserver' in window) {
    const imageObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                if (img.dataset.src) {
                    img.src = img.dataset.src;
                    img.classList.add('loaded');
                    observer.unobserve(img);
                }
            }
        });
    });

    document.querySelectorAll('img[data-src]').forEach(img => {
        imageObserver.observe(img);
    });
}

// Add animation on scroll for elements
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver(function(entries) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('animate-in');
        }
    });
}, observerOptions);

// Observe elements for animation
document.addEventListener('DOMContentLoaded', function() {
    const elementsToAnimate = document.querySelectorAll('.service-card, .product-card, .stats-block, .collab-item, .video-card, .video-item');
    elementsToAnimate.forEach(el => {
        observer.observe(el);
    });

    // Add smooth scroll behavior
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });

    // Add parallax effect to hero section
    window.addEventListener('scroll', function() {
        const scrolled = window.pageYOffset;
        const parallaxElements = document.querySelectorAll('.carousel .list .item img');
        parallaxElements.forEach(el => {
            const speed = 0.5;
            el.style.transform = `translateY(${scrolled * speed}px)`;
        });
    });

    // Add counter animation for stats
    const counters = document.querySelectorAll('.stats-block h2');
    const counterObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const counter = entry.target;
                const target = parseInt(counter.textContent.replace(/\D/g, ''));
                const duration = 2000;
                const increment = target / (duration / 16);
                let current = 0;

                const updateCounter = () => {
                    current += increment;
                    if (current < target) {
                        counter.textContent = Math.floor(current) + (counter.textContent.includes('+') ? '+' : '');
                        requestAnimationFrame(updateCounter);
                    } else {
                        counter.textContent = target + (counter.textContent.includes('+') ? '+' : '');
                    }
                };

                updateCounter();
                counterObserver.unobserve(counter);
            }
        });
    }, { threshold: 0.5 });

    counters.forEach(counter => counterObserver.observe(counter));
});

// Add rating stars dynamically
document.querySelectorAll('.rating-section').forEach(section => {
    const rating = parseFloat(section.dataset.rating) || 5;
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 !== 0;

    let starsHTML = '';
    for (let i = 0; i < fullStars; i++) {
        starsHTML += '<i class="fas fa-star"></i>';
    }
    if (hasHalfStar) {
        starsHTML += '<i class="fas fa-star-half-alt"></i>';
    }
    const emptyStars = 5 - Math.ceil(rating);
    for (let i = 0; i < emptyStars; i++) {
        starsHTML += '<i class="far fa-star"></i>';
    }

    section.innerHTML = starsHTML + section.innerHTML;
});

// Add ripple effect to buttons
document.querySelectorAll('.btn, .btn-add-to-cart, .btn-buy-now').forEach(button => {
    button.addEventListener('click', function(e) {
        const ripple = document.createElement('span');
        const rect = this.getBoundingClientRect();
        const size = Math.max(rect.width, rect.height);
        const x = e.clientX - rect.left - size / 2;
        const y = e.clientY - rect.top - size / 2;

        ripple.style.width = ripple.style.height = size + 'px';
        ripple.style.left = x + 'px';
        ripple.style.top = y + 'px';
        ripple.classList.add('ripple');

        this.appendChild(ripple);

        setTimeout(() => ripple.remove(), 600);
    });
});

// Add loading skeleton for images
document.querySelectorAll('img').forEach(img => {
    if (!img.complete) {
        img.classList.add('loading');
        img.addEventListener('load', function() {
            this.classList.remove('loading');
            this.classList.add('loaded');
        });
    }
});

// Scroll to Top Button
const scrollToTopBtn = document.createElement('button');
scrollToTopBtn.innerHTML = '↑';
scrollToTopBtn.className = 'scroll-to-top';
scrollToTopBtn.setAttribute('aria-label', 'Scroll to top');
document.body.appendChild(scrollToTopBtn);

window.addEventListener('scroll', function() {
    if (window.pageYOffset > 300) {
        scrollToTopBtn.classList.add('visible');
    } else {
        scrollToTopBtn.classList.remove('visible');
    }
});

scrollToTopBtn.addEventListener('click', function() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});

// Add header scroll effect
const header = document.querySelector('header');
window.addEventListener('scroll', function() {
    if (window.pageYOffset > 50) {
        header.classList.add('scrolled');
    } else {
        header.classList.remove('scrolled');
    }
});

// Performance optimization: Debounce scroll events
function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

// Apply debounce to scroll-heavy operations
const debouncedScroll = debounce(function() {
    // Any heavy scroll operations can go here
}, 100);

window.addEventListener('scroll', debouncedScroll);



