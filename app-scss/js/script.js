const myForm = document.querySelector('.form'); 

myForm.addEventListener('submit', function(event) {
    const Name = document.querySelector('.name').value;
    const email = document.querySelector('.email').value;
    const company = document.querySelector('.company').value;
    const phone = document.querySelector('.phone').value;
    const city = document.querySelector('.city').value;

    if (Name == '' || email == '' || company == '' || phone == '' || city == '') {
        event.preventDefault();
        alert('Заполните 1 шаг!')
    } else if (Name.length < 3 || Name.length > 60) {
        event.preventDefault();
        alert('Некорректное имя')
    } 
});


const btn = document.getElementById('btn-pdf').addEventListener('click', () => {
    alert('Данных пока нет')
});

let svgs = document.querySelectorAll("#svg");

svgs.forEach(svg => {
    svg.addEventListener('click', () => {
        alert('Данные не найдены');
    });
});

