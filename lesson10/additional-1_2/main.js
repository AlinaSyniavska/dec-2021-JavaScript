/*- Описати скріпт, котрий, якщо доєднати до будь-якої сторінки дозволить зробити наступне:
    При лівому кліку миші вивести в консоль інформацію про блок або елемент на який відбувся клік.
    Інформація яку потрібно вивести: Назва тегу, список класів, список ід, розміри в форматі висота*ширина*/

/*
- Описати скріпт, котрий, якщо доєднати до будь-якої сторінки дозволить зробити наступне:
    При лівому кліку миші  зробить popup (спливаючий блок) в якому буде вся інформація про блок.
    Інформація яку потрібно вивести в popup: Назва тегу, список класів, список ід, розміри в форматі висота*ширина*/

let popup = document.createElement('div');
popup.style.position = 'absolute';
popup.style.top = '40%';
popup.style.left = '45%';
popup.style.border = '3px solid black';
popup.style.padding = '15px';
popup.style.background = '#fff';

let nameTag = document.createElement('p');
let classList = document.createElement('p');
let idList = document.createElement('p');
let proportions = document.createElement('p');

popup.append(nameTag, classList, idList, proportions);

document.onclick = function (e) {
    console.log(`Назва тегу: ${e.target.nodeName.toLowerCase()}`);
    console.log(`Список класів: ${e.target.className.split(' ').join(', ')}`);
    console.log(`Список ід: ${e.target.id}`);
    console.log(`Висота * Ширина: ${e.target.clientHeight} * ${e.target.clientWidth}`);
    console.log('========================')
};

document.addEventListener('click', function (e) {
    nameTag.innerText = `Назва тегу: ${e.target.nodeName.toLowerCase()}`;
    classList.innerText = `Список класів: ${e.target.className.split(' ').join(', ')}`;
    idList.innerText = `Список ід: ${e.target.id}`;
    proportions.innerText = `Висота * Ширина: ${e.target.clientHeight} * ${e.target.clientWidth}`;

    document.body.appendChild(popup);
});