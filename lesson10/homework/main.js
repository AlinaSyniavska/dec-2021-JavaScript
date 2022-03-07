/*- Создать произвольный елемент с id = text.  Используя JavaScript, сделайте так,
    чтобы при клике на кнопку исчезал элемент с id="text".*/

let block = document.getElementById('text');
let button = document.getElementById('btn');

button.onclick = function () {
    block.classList.toggle('hidden');
}

/*- Создайте кнопку, при клике на которую, она будет скрывать сама себя.*/

let btn = document.getElementById('btn2');
let hint = document.querySelector('.container>div');

btn.onclick = function () {
    btn.classList.toggle('hidden');
    hint.classList.toggle('hidden');
}

/*- створити інпут який приймає вік людини та кнопку яка підтверджує дію.
    При натисканні на кнопку зчитати інформацію з інпуту та перевірити вік чи меньше він ніж 18, та повідомити про це користувача*/

let f1 = document.forms.form1;
let btnForm = document.getElementById('btn3');

// btnForm.onclick = function (e) {
f1.onsubmit = function (e) {
    e.preventDefault();
    if (f1.age.value < 18) {
        console.log(`Введений вік менше 18! Вік - ${f1.age.value}`);
    }
    f1.age.value = '';
}

/*- Создайте меню, которое раскрывается/сворачивается при клике*/
let menuBtn = document.getElementById('menuBtm');
let menu = document.getElementsByClassName('menuContainer')[0];

menuBtn.onclick = function () {
    menu.classList.toggle('hidden');
}

document.onclick = function (e) {
    if (e.target !== menuBtn) {
        menu.classList.add('hidden');
    }
}

/*
- Создать список комментариев , пример объекта коментария - {title : 'lorem', body:'lorem ipsum dolo sit ameti'}.
    Вывести список комментариев в документ, каждый в своем блоке.
    Добавьте каждому комментарию по кнопке для сворачивания его body.*/

let universities = [
    {title: 'ЗДМУ', body: 'Запорізький державний медичний університет'},
    {title: 'ЗНУ', body: 'Запорізький національний університет'},
    {title: 'ЗНТУ', body: 'Національний університет «Запорізька політехніка»'},
    {title: 'КПУ', body: 'Класичний приватний університет'}
];

let universityContainer = document.createElement('div');
document.body.appendChild(universityContainer);

for (const u of universities) {
    let university = document.createElement('div');
    university.style.borderBottom = '2px solid navy';
    university.style.paddingBottom = '20px';

    let title = document.createElement('h2');
    title.innerText = u.title;

    let body = document.createElement('p');
    body.innerText = u.body;

    let btn = document.createElement('button');
    btn.innerText = 'Сховайся';

    btn.onclick = () => {
        body.classList.add('hidden');
    }

    university.append(title, body, btn);
    universityContainer.appendChild(university);
}
