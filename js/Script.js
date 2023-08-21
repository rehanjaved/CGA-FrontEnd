// Top slider
var i = 0;
    var images = [];
    var slideTime = 3500; // 4.5 seconds

    // Update the image file path
    images[0] = 'Images/Slider-img.jpg'; // Assuming the Images folder is in the root directory
    images[1] = 'Images/Slider-img2.jpg';
    images[2] = 'Images/Group141.jpg';

    function changePicture() {
        var sliderTop = document.querySelector('.slider-top');
        sliderTop.style.backgroundImage = "url(" + images[i] + ")";

        if (i < images.length - 1) {
            i++;
        } else {
            i = 0;
        }
        setTimeout(changePicture, slideTime); // No need to add extra time
    }

    window.onload = changePicture;
    

// Carousel Code
var swiperScript = document.createElement('script');
swiperScript.src = 'https://cdn.jsdelivr.net/npm/swiper@10/swiper-bundle.min.js'; // Replace with your actual path
swiperScript.onload = function() {
    // Swiper library is loaded, you can now initialize the Swiper carousel
    var swiper = new Swiper(".mySwiper", {
        slidesPerView: 'auto',
        spaceBetween: 30,
        pagination: {
            el: ".swiper-pagination",
            clickable: true,
        },
        scrollbar: {
            el: ".swiper-scrollbar",
        },
    });
};

document.head.appendChild(swiperScript);

var swiper = new Swiper(".mySwiper", {
    slidesPerView: 'auto', // Show as many slides as fit within the container
    spaceBetween: 30,
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    scrollbar: {
        el: ".swiper-scrollbar",
    },
});

    
// partner carousel


// Add this JavaScript to your existing script.js or in a <script> tag in your HTML
document.addEventListener('DOMContentLoaded', function () {
    const animatedSections = document.querySelectorAll('.animated-section');

    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.2 // Adjust this threshold as needed
    };

    const observer = new IntersectionObserver(function (entries, observer) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('fade-in');
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    animatedSections.forEach(section => {
        observer.observe(section);
    });
});
