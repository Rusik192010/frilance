const Action = document.querySelector('.menu-buter');
const Header = document.querySelector('.header');
const Menu = document.querySelector('.menu-1');
const Close = document.querySelector('.menu-close');
const List1 = document.querySelector('.menu-2');
const List2 = document.querySelector('.menu-3');


const slider = document.querySelector('.slyder');
const slides = document.querySelector('.slydes');
const slideCount = document.querySelectorAll('.slide').length;
const prevButton = document.querySelector('.button-slider-l');
const nextButton = document.querySelector('.button-slider-r');

let currentIndex = 0; 


function goToSlide(index) {
    if (index < 0) {
        index = slideCount - 1; 
    } else if (index >= slideCount) {
        index = 0; 
    }

    currentIndex = index; 
    slides.style.transform = `translateX(${-index * 100}%)`;
    
    if (!slider) return ;    
}


prevButton.addEventListener('click', () => {
    goToSlide(currentIndex - 1);
});


nextButton.addEventListener('click', () => {
    goToSlide(currentIndex + 1);
});





Action.addEventListener('click', () => {
    List1.classList.toggle('menu-menu');
    List2.classList.toggle('menu-menu');
    Action.classList.toggle('menu-buter-1');
    Header.classList.toggle('header-menu');
    Menu.classList.toggle('menu-1-1');
    Close.classList.toggle('menu-close-1');
});

Close.addEventListener('click', () => {
    Close.classList.toggle('menu-close-1');
    List1.classList.remove('menu-menu');
    List2.classList.remove('menu-menu');
    Action.classList.remove('menu-buter-1');
    Header.classList.remove('header-menu');
    Menu.classList.remove('menu-1-1');
});



