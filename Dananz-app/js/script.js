const menuBtn = document.querySelector('.menu');
const menuClose = document.querySelector('.close__menu');
const menuList = document.querySelector('.nav__menu');



menuBtn.addEventListener('click', () => {
    menuList.classList.toggle('menu__list--active');

    menuBtn.style.display = 'none';
    menuClose.style.display = 'block';
});

menuClose.addEventListener('click', () => {
    menuList.classList.remove('menu__list--active');

    menuClose.style.display = 'none';
    menuBtn.style.display = 'block';
});


