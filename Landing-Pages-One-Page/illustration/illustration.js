const arrowNav = document.querySelector('.btn-nav'),
nav = document.querySelector('.nav');

const windowContent = document.querySelector('.window'),
closeWindow = document.querySelector('.close-window');

// LOGOS
const logos = document.querySelector('.logos'),
imgLogos = document.querySelector('.content-logos');
// BANNNERS
const banners = document.querySelector('.banners'),
imgBanners = document.querySelector('.content-banners');
// CHARACTERS
const characters = document.querySelector('.characters'),
imgCharacters = document.querySelector('.content-characters');

arrowNav.addEventListener('click', () => {
    arrowNav.classList.toggle('open-nav');
    nav.classList.toggle('open-nav');
});

closeWindow.addEventListener('click', () => {
    windowContent.classList.remove('open-window');
    imgLogos.classList.remove('show-logos');
    imgBanners.classList.remove('show-banners');
    imgCharacters.classList.remove('show-characters');
})

logos.addEventListener('click', () => {
    windowContent.classList.add('open-window');
    imgLogos.classList.add('show-logos');
});
banners.addEventListener('click', () => {
    windowContent.classList.add('open-window');
    imgBanners.classList.add('show-banners');
});
characters.addEventListener('click', () => {
    windowContent.classList.add('open-window');
    imgCharacters.classList.add('show-characters');
});