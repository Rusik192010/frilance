const Action = document.querySelector('.menu-buter');
const Header = document.querySelector('.header');
const Menu = document.querySelector('.menu-1');
const Close = document.querySelector('.menu-close');
const List1 = document.querySelector('.menu-2');
const List2 = document.querySelector('.menu-3');


window.addEventListener('resize', AutoScale);

AutoScale();

function AutoScale() {
    let width = window.innerWidth;

    if (width == 1920) {
        document.addEventListener('DOMContentLoaded', () => {
            const slide = document.querySelector('.slydes');
            const images = document.querySelectorAll('.slide');
            const prevBtn = document.querySelector('.button-slider-l');
            const nextBtn = document.querySelector('.button-slider-r');

            let counter = 0;
            let size = 1556;

            nextBtn.addEventListener('click', () => {
                if (counter <= 3) {
                    if (counter >= images.length - 1) return;

                    slide.style.transition = "transform 0.5s ease-in-out";
                    counter += 2;
                    slide.style.transform = `translateX(${-size * counter/2}px)`;
                } else if (counter > 3) {
                    counter = 0;
                    size = 1556;
                    if (counter >= images.length - 1) return;

                    slide.style.transition = "transform 0.5s ease-in-out";
                    slide.style.transform = `translateX(${-size * counter/2}px)`;
                }
            });

            prevBtn.addEventListener('click', () => {
                if (counter <= 0) return;

                slide.style.transition = "transform 0.5s ease-in-out";
                counter -= 2;
                slide.style.transform = `translateX(${-size * counter/2}px)`;
            });
        });
    } else if (width == 1536) {
        document.addEventListener('DOMContentLoaded', () => {
            const slide = document.querySelector('.slydes');
            const images = document.querySelectorAll('.slide');
            const prevBtn = document.querySelector('.button-slider-l');
            const nextBtn = document.querySelector('.button-slider-r');

            let counter = 0;
            let size = 1074;

            nextBtn.addEventListener('click', () => {
                if (counter <= 3) {
                    if (counter >= images.length - 1) return;

                    slide.style.transition = "transform 0.5s ease-in-out";
                    counter += 2;
                    slide.style.transform = `translateX(${-size * counter/2}px)`;
                } else if (counter > 3) {
                    counter = 0;
                    size = 1074;
                    if (counter >= images.length - 1) return;

                    slide.style.transition = "transform 0.5s ease-in-out";
                    slide.style.transform = `translateX(${-size * counter/2}px)`;
                }
            });

            prevBtn.addEventListener('click', () => {
                if (counter <= 0) return;

                slide.style.transition = "transform 0.5s ease-in-out";
                counter -= 2;
                slide.style.transform = `translateX(${-size * counter/2}px)`;
            });
        });
    } else if (width == 1024) {
        document.addEventListener('DOMContentLoaded', () => {
            const slide = document.querySelector('.slydes');
            const images = document.querySelectorAll('.slide');
            const prevBtn = document.querySelector('.button-slider-l');
            const nextBtn = document.querySelector('.button-slider-r');

            let counter = 0;
            let size = 792;

            nextBtn.addEventListener('click', () => {
                if (counter <= 6) {
                    if (counter >= images.length - 1) return;

                    slide.style.transition = "transform 0.5s ease-in-out";
                    counter++;
                    slide.style.transform = `translateX(${-size * counter}px)`;
                } else if (counter > 6) {
                    counter = 0;
                    size = 792;
                    if (counter >= images.length - 1) return;

                    slide.style.transition = "transform 0.5s ease-in-out";
                    slide.style.transform = `translateX(${-size * counter}px)`;
                }
            });

            prevBtn.addEventListener('click', () => {
                if (counter <= 0) return;

                slide.style.transition = "transform 0.5s ease-in-out";
                counter--;
                slide.style.transform = `translateX(${-size * counter}px)`;
            });
      });
    } else if (width == 758) {
        document.addEventListener('DOMContentLoaded', () => {
            const slide = document.querySelector('.slydes');
            const images = document.querySelectorAll('.slide');
            const prevBtn = document.querySelector('.button-slider-l');
            const nextBtn = document.querySelector('.button-slider-r');

            let counter = 0;
            let size = 662;

            nextBtn.addEventListener('click', () => {
                if (counter <= 6) {
                    if (counter >= images.length - 1) return;

                    slide.style.transition = "transform 0.5s ease-in-out";
                    counter++;
                    slide.style.transform = `translateX(${-size * counter}px)`;
                } else if (counter > 6) {
                    counter = 0;
                    size = 662;
                    if (counter >= images.length - 1) return;

                    slide.style.transition = "transform 0.5s ease-in-out";
                    slide.style.transform = `translateX(${-size * counter}px)`;
                }
            });

            prevBtn.addEventListener('click', () => {
                if (counter <= 0) return;

                slide.style.transition = "transform 0.5s ease-in-out";
                counter--;
                slide.style.transform = `translateX(${-size * counter}px)`;
            });
      });
    }
} 








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



