const sliderImage = document.querySelectorAll("#slide")
const slider = document.querySelector('#slider')
// const slides = document.querySelector('.slides')
const prevBtn = document.querySelector("#prev")
const nextBtn = document.querySelector("#next")
const pagination = document.getElementById('pagination');

let currentIndex =0
let autoSlide = true;
let slideInterval = setInterval(showNextSlide, 3000);

sliderImage.forEach((_, index) => {
    const dot = document.createElement('button');
    dot.classList.add('dot');
    dot.addEventListener('click', () => gotoSlide(index));
    pagination.appendChild(dot);
});

const dots = document.querySelectorAll('.pagination button');
dots[currentIndex].className = 'active';

function gotoSlide(index) {
  sliderImage[currentIndex].style.display='none'
    dots[currentIndex].className ='';
    currentIndex = index;
    sliderImage[currentIndex].style.display='block'
    dots[currentIndex].className = 'active';
}

prevBtn.addEventListener('click' , showPrevSlide)
function showPrevSlide(){
    gotoSlide((currentIndex -1 + sliderImage.length) % sliderImage.length)
}
nextBtn.addEventListener('click' , showNextSlide)
function showNextSlide(){
   gotoSlide((currentIndex + 1 ) % sliderImage.length)
}

slider.addEventListener('mouseover' , () => {
    clearInterval(slideInterval);
    autoSlide = false;
});

slider.addEventListener('mouseout', () => {
    if (!autoSlide) {
        slideInterval = setInterval(showNextSlide, 3000);
        autoSlide = true;
    }
});



// Swipe functionality for touch screens
let startX = 0;
let endX = 0;

slider.addEventListener('touchstart', (event) => {
    startX = event.touches[0].clientX;
});

slider.addEventListener('touchmove', (event) => {
    endX = event.touches[0].clientX;
});

slider.addEventListener('touchend', () => {
    if (startX > endX + 30) {
        showNextSlide();
    } else if (startX < endX - 30) {
        showPrevSlide();
    }
});











