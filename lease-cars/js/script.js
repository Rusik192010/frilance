const tabItem = document.querySelectorAll('.tabs__btn--item');
const tabContent = document.querySelectorAll('.tabs__content--items');

tabItem.forEach(function (el) {
    el.addEventListener('click', open);
});

function open(evt) {
    const tapTarget = evt.currentTarget;
    const button= tapTarget.dataset.button;

    tabItem.forEach(function(item) {
        item.classList.remove('tabs__btn--item--active');
    });

    tapTarget.classList.add('tabs__btn--item--active');

    tabContent.forEach(function(item) {
        item.classList.remove('tabs__content--items--active');
    });

    document.querySelector(`#${button}`).classList.add('tabs__content--items--active');
}