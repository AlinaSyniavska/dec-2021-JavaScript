/*1) Напишіть код, який :
a) додає клас з назвою групи, елементу з ід main_header*/

document.getElementById('main_header').classList.add('dec-2021');

// b) робить ширину елементу ul 400px

let elementsUl = document.getElementsByTagName('ul');
elementsUl[0].style.width = '400px';
elementsUl[0].style.background = 'beige';

// c) робить ширину всіх елементів з класом linkList шириною 50%

let collectionOfLinkList = elementsUl[0].getElementsByClassName('linkList');
for (const collection of collectionOfLinkList) {
    collection.style.width = '50%';
    collection.style.background = 'lightpink';
}

// d) отримує текст який зберігається в елементі з класом listElement2

for (const item of document.getElementsByClassName('listElement2')) {
    console.log(item.innerHTML);
    console.log(item.innerText);
}

// e) отримує всі елементи li та змінює ім колір фону на сірий

let collectionOfLi = document.getElementsByTagName('li');
for (const li of collectionOfLi) {
    li.style.background = 'grey';
}

// f) отримує всі елементи 'a' та додає їм клас anchor

let collectionOfA = document.getElementsByTagName('a');
for (const anchor of collectionOfA) {
    anchor.classList.add('anchor');
}

// g) отримує всі елементи 'a' та у випадку, якщо текстовий контент елементу дорівнює link3,
// змінює йому розмір тексту на 40 пікселів

for (const anchor of collectionOfA) {
    if (anchor.innerText.includes('link3')) {
        anchor.style.fontSize = '40px';
    }
}

// h) отримує всі елементи 'a' та додає їм клас element_XXX.
// Де XXX - текстовий контент елементу a

for (const anchor of collectionOfA) {
    anchor.classList.add('element_' + anchor.innerText);
}

// i) отримує всі елементи 'sub-header' та змінює колір фону. Фон отримати з prompt()

let elementsByClassSubHeader = document.getElementsByClassName('sub-header');

let color1 = prompt('Enter color');

for (const element of elementsByClassSubHeader) {
    element.style.background = color1;
}

// j) отримує всі елементи 'sub-header' та змінює колір тексту
// у випадку якщо текст елементу = content 2 segment . Колір отримати з prompt()

let color2 = prompt('Enter color for element', 'cornflowerblue');

for (const element of elementsByClassSubHeader) {
    if (element.innerText.includes('content 2 segment')) {
        element.style.background = color2;
    }
}

// k) отримує елемент з класом content_1 та заміняє  в ньому текст на довільний.
// Текст отримати з prompt()

let textFromUser = prompt('Enter some text');

let firstElement = document.getElementsByClassName('content_1')[0];
firstElement.innerText = textFromUser;

// l) отримати елементи p та змінити їм padding на 20px

let listOfP = document.querySelectorAll('p');
for (const p of listOfP) {
    p.style.padding = '20px';
}

// m) отримати елементи з класом text2 та змінити їм текст на назву групи (mon-year.
// Пример sep-2021)

let querySelectorAll = document.querySelectorAll('.text2');
for (const item of querySelectorAll) {
    item.innerText = 'dec-2021';
}

