const Action = document.querySelector('.action');
const Close = document.querySelector('.img-pole');
const List = document.querySelector('.actions-r');
const menuBtn = document.querySelector('.menu-buter');
const menuClose = document.querySelector('.menu-close');
const menuList = document.querySelector('.actions-menu');
const menuActions = document.querySelector('.menu__actions-down');
let Actions = document.querySelectorAll('.act').forEach(el => {
    el.addEventListener('click', () => {
        alert('Тестовая страница');
        el = 0;
    });
});


Action.addEventListener('click', () => {
    List.classList.toggle('actions--open');
});

Close.addEventListener('click', () => {
    List.classList.remove('actions--open');
});



menuBtn.addEventListener('click', () => {
    menuList.classList.toggle('actions-menu-open');
    menuBtn.classList.toggle('menu-buter-close');
    menuActions.classList.toggle('menu-down-close');
});

menuClose.addEventListener('click', () => {
    menuList.classList.remove('actions-menu-open');
    menuBtn.classList.remove('menu-buter-close');
    menuActions.classList.remove('menu-down-close');
});



