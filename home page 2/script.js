// Slideshow functionality
let slideshowImages = document.querySelectorAll('.slideshow img');
let currentImageIndex = 0;

setInterval(() => {
    slideshowImages[currentImageIndex].style.opacity = 0;
    currentImageIndex = (currentImageIndex + 1) % slideshowImages.length;
    slideshowImages[currentImageIndex].style.opacity = 1;
}, 3000);