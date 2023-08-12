const carousel = document.querySelector('.carousel'),
carouselList = carousel.querySelector('.carousel-list'),
carouselItems = Array.from(carouselList.children),
prevButton = carousel.querySelector('.prev-button'),
nextButton = carousel.querySelector('.next-button');

const menu = document.querySelector('.menu'),
navList = document.querySelector('.nav-list');

menu.addEventListener('click', () => {
    menu.classList.toggle('open-menu');
    navList.classList.toggle('open-menu');

    if(navList.className.endsWith('open-menu')){
      menu.innerHTML = "<i class='bx bx-x'></i>"
    }
    else{
      menu.innerHTML = "<i class='bx bx-menu'></i>"
    }
})

let currentPosition = 0;
const itemWidth = carouselItems[0].offsetWidth;

function moveTo(position) {
  carouselList.style.transform = `translateX(-${position * itemWidth}px)`;
  currentPosition = position;
  updateButtonStates();
}
function moveNext() {
  if (currentPosition === carouselItems.length - 1) {
    moveTo(0);
  } else {
    moveTo(currentPosition + 1);
  }
}
function movePrev() {
  if (currentPosition === 0) {
    moveTo(carouselItems.length - 1);
  } else {
    moveTo(currentPosition - 1);
  }
}
function updateButtonStates() {
  prevButton.disabled = currentPosition === 0;
  nextButton.disabled = currentPosition === carouselItems.length - 1;
}

prevButton.addEventListener('click', movePrev);
nextButton.addEventListener('click', moveNext);

updateButtonStates();